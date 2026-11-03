'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{spawn}=require('node:child_process');
const {Readable,Transform}=require('node:stream'),{pipeline}=require('node:stream/promises');
const bundles=require('./tts-bundles.cjs'),extractor=require('./tts-extractor.cjs');
function pickBundle(gpus,choice='auto'){if(choice!=='auto'&&!Object.hasOwn(bundles,choice))throw Error('未知显卡环境');return choice==='auto'?(/RTX\s+50\d{2}|Blackwell/i.test(gpus)?'rtx50':'standard'):choice;}
function bundleURL(bundle,source){const origin={hf:'https://huggingface.co',mirror:'https://hf-mirror.com'}[source];if(!origin)throw Error('请选择下载源');return origin+'/'+bundle.repo+'/resolve/'+bundle.revision+'/'+encodeURIComponent(bundle.file);}
async function hash(file,signal,progress=()=>{}){const h=crypto.createHash('sha256');let n=0,last=0;for await(const chunk of fs.createReadStream(file)){signal?.throwIfAborted();h.update(chunk);n+=chunk.length;if(Date.now()-last>700){last=Date.now();progress(n);}}return h.digest('hex');}
async function download(bundle,directory,source,fetcher,signal,progress=()=>{}){
 fs.mkdirSync(directory,{recursive:true});const target=path.join(directory,bundle.file),part=target+'.part';
 const verify=async f=>fs.statSync(f).size===bundle.size&&await hash(f,signal,n=>progress('校验整合包',n,bundle.size))===bundle.sha256;
 if(fs.existsSync(target)){if(await verify(target)){progress('复用已校验整合包',bundle.size,bundle.size);return target;}throw Error('已下载整合包校验失败，请删除下载目录中的 '+bundle.file+' 后重试');}
 let offset=fs.existsSync(part)?fs.statSync(part).size:0;
 if(offset>bundle.size){fs.rmSync(part);offset=0;}
 if(offset<bundle.size){
  const response=await fetcher(bundleURL(bundle,source),{headers:offset?{Range:'bytes='+offset+'-'}:{},signal});
  if(!response.ok)throw Error('整合包下载失败 HTTP '+response.status+'，可切换下载源或导入离线包');
  if(response.status===206){const m=/^bytes (\d+)-(\d+)\/(\d+)$/.exec(response.headers.get('content-range')||'');if(!m||Number(m[1])!==offset||Number(m[3])!==bundle.size)throw Error('下载服务器返回了错误的续传范围');}
  else if(response.status===200)offset=0;else throw Error('下载服务器返回了不支持的状态');
  let received=offset,last=0;const meter=new Transform({transform(chunk,enc,cb){received+=chunk.length;if(received>bundle.size)return cb(Error('下载大小超出校验记录'));if(Date.now()-last>500){last=Date.now();progress('下载整合包',received,bundle.size);}cb(null,chunk);}});
  await pipeline(Readable.fromWeb(response.body),meter,fs.createWriteStream(part,{flags:offset?'a':'w'}),{signal});
  if(received!==bundle.size)throw Error('下载未完成，重新点击可断点续传');
 }
 if(!await verify(part)){fs.rmSync(part,{force:true});throw Error('整合包 SHA-256 校验失败，已删除损坏文件，请重试或切换下载源');}
 fs.renameSync(part,target);return target;
}
function findEnvironment(directory,depth=0){if(depth>3)return null;const python=path.join(directory,'runtime','python.exe');if(fs.existsSync(python)&&fs.existsSync(path.join(directory,'GPT_SoVITS','TTS_infer_pack','TTS.py')))return {root:directory,python};for(const entry of fs.readdirSync(directory,{withFileTypes:true})){if(entry.isDirectory()&&!['runtime','GPT_SoVITS','tools'].includes(entry.name)){const result=findEnvironment(path.join(directory,entry.name),depth+1);if(result)return result;}}return null;}
function command(exe,args,{signal,cwd,progress,timeout=20*60*1000}={}){return new Promise((resolve,reject)=>{if(signal?.aborted){reject(Error('配置已取消'));return;}const child=spawn(exe,args,{cwd,windowsHide:true,stdio:['ignore','pipe','pipe']});let output='',err='',timedOut=false;const abort=()=>child.kill();signal?.addEventListener('abort',abort,{once:true});const timer=setTimeout(()=>{timedOut=true;child.kill();},timeout);function clean(){clearTimeout(timer);signal?.removeEventListener('abort',abort);}child.stdout.on('data',chunk=>{output=(output+chunk.toString()).slice(-16000);if(progress){const matches=output.match(/\d+%/g);if(matches)progress(matches.at(-1));}});child.stderr.on('data',chunk=>err=(err+chunk.toString()).slice(-4000));child.on('error',e=>{clean();reject(e);});child.on('close',code=>{clean();if(signal?.aborted)return reject(Error('配置已取消'));if(timedOut)return reject(Error('配置步骤超时，可重新点击重试'));code===0?resolve(output):reject(Error('环境工具退出码 '+code+'：'+(err||output).slice(-1500)));});});}
async function gpuInfo(signal){const candidates=['nvidia-smi.exe'];if(process.env.SystemRoot)candidates.push(path.join(process.env.SystemRoot,'System32','nvidia-smi.exe'));if(process.env.ProgramFiles)candidates.push(path.join(process.env.ProgramFiles,'NVIDIA Corporation','NVSMI','nvidia-smi.exe'));for(const file of candidates){try{const text=await command(file,['--query-gpu=name,driver_version','--format=csv,noheader'],{signal,timeout:15000});if(text.trim())return text.trim();}catch(e){signal.throwIfAborted();}}throw Error('未检测到可用的 NVIDIA 驱动。请先安装或更新显卡驱动，再点击一键配置；无需单独安装 CUDA Toolkit。');}
function createSetup({base,extractorPath,getSettings,probe,commit,notify,fetcher=fetch,platform=process.platform,arch=process.arch,gpu=gpuInfo,execute=command,bundleCatalog=bundles,extractorHash=extractor.sha256,freeSpace=dir=>{const x=fs.statfsSync(dir);return x.bavail*x.bsize;}}){
 let controller=null,currentProbe=null,state={busy:false,phase:'idle',message:'尚未配置'};
 function report(message,received,total){state={...state,message,percent:total?Math.min(100,Math.round(received/total*100)):null};notify({...state});}
 function cancel(){controller?.abort();currentProbe?.();}
 async function inspect(candidate,signal){signal.throwIfAborted();const result=probe(candidate);currentProbe=result.cancel;const cancelProbe=()=>result.cancel?.();signal.addEventListener('abort',cancelProbe,{once:true});try{const value=await result.done;signal.throwIfAborted();return value;}finally{signal.removeEventListener('abort',cancelProbe);currentProbe=null;result.cancel?.();}}
 async function run({source='hf',flavor='auto',archive=null}={}){
  if(controller)throw Error('环境配置已在进行');if(platform!=='win32'||arch!=='x64')throw Error('一键安装目前支持 Windows x64 + NVIDIA；其他环境请手动选择 Python');
  if(!['hf','mirror'].includes(source)||!['auto','standard','rtx50'].includes(flavor))throw Error('无效安装选项');
  controller=new AbortController();const signal=controller.signal;state={busy:true,phase:'checking',message:'正在检查现有环境'};notify(state);let staging=null;
  try{
   const previous=getSettings();if(previous.root){try{const verified=await inspect({root:previous.root,python:previous.python||''},signal);report('已有 CUDA 环境可用，直接复用：'+verified.gpu);state.phase='ready';return {reused:true,...verified};}catch(e){signal.throwIfAborted();report('现有环境未通过检测，将检查独立安装目录');}}
   const gpuText=await gpu(signal),key=pickBundle(gpuText,flavor),bundle=bundleCatalog[key];const directory=previous.setupDir||base;fs.mkdirSync(directory,{recursive:true});const installed=path.join(directory,'gpt-sovits-v2pro-'+key),downloads=path.join(directory,'downloads');
   if(fs.existsSync(installed)){const env=findEnvironment(installed);if(!env)throw Error('托管环境目录不完整，请换一个安装位置或移走 '+installed+' 后重试');report('复用已安装环境，正在检查 CUDA');const verified=await inspect(env,signal);signal.throwIfAborted();commit(env);state.phase='ready';report('配置完成：'+verified.gpu);return {reused:true,...verified};}
   if(freeSpace(directory)<35*1024**3)throw Error('安装位置可用空间不足 35 GiB，请选择其他磁盘；整合包约 8–9 GB，解压后还需额外空间');
   let file;if(archive){state.phase='verifying';const size=fs.statSync(archive).size;if(size!==bundle.size)throw Error('所选整合包与当前显卡版本不匹配；需要 '+bundle.file);if(await hash(archive,signal,n=>report('校验离线整合包',n,bundle.size))!==bundle.sha256)throw Error('离线整合包 SHA-256 不匹配，请使用指定官方版本');file=archive;}
   else{state.phase='downloading';file=await download(bundle,downloads,source,fetcher,signal,report);}
   signal.throwIfAborted();if(await hash(extractorPath,signal)!==extractorHash)throw Error('内置解压工具校验失败，请重新解压桌宠程序');
   state.phase='extracting';report('正在解压官方环境，请稍候');staging=path.join(directory,'staging-'+crypto.randomUUID());fs.mkdirSync(staging);
   await execute(extractorPath,['x',file,'-o'+staging,'-y','-bsp1','-bso0'],{signal,cwd:directory,progress:percent=>report('正在解压 '+percent)});
   signal.throwIfAborted();if(!findEnvironment(staging))throw Error('整合包中没有找到 runtime/python.exe 和 GPT-SoVITS 推理文件');
   fs.renameSync(staging,installed);staging=null;const env=findEnvironment(installed);state.phase='probing';report('正在检测 PyTorch、基础模型和 CUDA');
   const verified=await inspect(env,signal);signal.throwIfAborted();commit(env);state.phase='ready';report('配置完成：'+verified.gpu+' · CUDA '+verified.cuda);return {reused:false,...verified};
  }catch(e){state.phase=signal.aborted?'cancelled':'error';report(signal.aborted?'配置已取消，已下载部分保留供下次续传':e.message);throw Error(state.message);}
  finally{if(staging)fs.rmSync(staging,{recursive:true,force:true});controller=null;state.busy=false;notify({...state});}
 }
 return {run,cancel,status:()=>({...state,bundles:Object.fromEntries(Object.entries(bundles).map(([k,b])=>[k,{file:b.file,size:b.size}]))})};
}
module.exports={createSetup,download,hash,pickBundle,bundleURL,findEnvironment};
