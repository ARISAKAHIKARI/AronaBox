'use strict';
const fs=require('node:fs'),path=require('node:path'),net=require('node:net'),{spawn}=require('node:child_process'),{createHash}=require('node:crypto');
const Config=require('./proxy-config.cjs'),Env=require('./proxy-env.cjs');
const delay=ms=>new Promise(r=>setTimeout(r,ms));
function freePort(){return new Promise((resolve,reject)=>{const s=net.createServer();s.on('error',reject);s.listen(0,'127.0.0.1',()=>{const port=s.address().port;s.close(e=>e?reject(e):resolve(port));});});}
function listening(port){return new Promise(resolve=>{const s=net.connect({host:'127.0.0.1',port});const end=v=>{s.destroy();resolve(v);};s.setTimeout(150,()=>end(false));s.once('error',()=>end(false));s.once('connect',()=>end(true));});}
function createProxy({base,corePath,coreHash,sessions,storage,notify=()=>{},spawnCore=spawn}){
 let child=null,closed=false,busy=false,info={enabled:false,ready:false,message:'桌宠代理已关闭'},active={},runDir=null;
 const cleanup=dir=>{if(dir)try{fs.rmSync(dir,{recursive:true,force:true});}catch{}};
 // Remove plaintext process configs left by a hard crash. Only our generated folders are eligible.
 if(fs.existsSync(base))for(const name of fs.readdirSync(base))if(/^run-[\w-]+$/.test(name))cleanup(path.join(base,name));
 const status=()=>({...info,busy});
 const publish=(patch)=>{info={...info,...patch};notify(status());};
 async function route(enabled,port=9,bypass=[]){for(const ses of sessions){await ses.setProxy(enabled?{mode:'fixed_servers',proxyRules:'http://127.0.0.1:'+port,proxyBypassRules:['localhost','127.0.0.1','[::1]',...bypass.flatMap(h=>h.startsWith('.')?[h.slice(1),'*'+h]:[h])].join(';')}:{mode:'system'});await ses.closeAllConnections();}}
 function kill(){const p=child;child=null;if(p)p.kill();cleanup(runDir);runDir=null;}
 async function apply(settings={}){
  if(busy)throw Error('正在切换代理，请稍候');if(closed)throw Error('程序正在退出');busy=true;active=settings;
  try{
   Env.configure({enabled:!!settings.enabled,ready:false});publish({enabled:!!settings.enabled,ready:false,message:settings.enabled?'正在启动桌宠代理…':'正在关闭桌宠代理…'});
   // Block app sessions before stopping the previous core; never silently fall back on startup failure.
   await route(!!settings.enabled);kill();
   if(!settings.enabled){publish({message:'桌宠代理已关闭，恢复客户端原有网络设置'});return status();}
   const bypass=Config.bypassHosts(settings.bypass||''),node=Config.decryptNode(settings,storage);
   if(!fs.existsSync(corePath))throw Error('代理核心缺失，请重新解压完整的客户端');
   if(coreHash&&createHash('sha256').update(fs.readFileSync(corePath)).digest('hex')!==coreHash)throw Error('代理核心校验失败，请重新解压完整客户端');
   const port=await freePort();if(closed)throw Error('程序正在退出');fs.mkdirSync(base,{recursive:true,mode:0o700});
   const dir=fs.mkdtempSync(path.join(base,'run-'));runDir=dir;fs.chmodSync(dir,0o700);const file=path.join(dir,'config.json');fs.writeFileSync(file,JSON.stringify(Config.coreConfig(node,port,bypass)),{mode:0o600});
   const env={...process.env};for(const k of Object.keys(env))if(/proxy/i.test(k))delete env[k];delete env.ELECTRON_RUN_AS_NODE;
   let p;try{p=spawnCore(corePath,['-d',dir,'-f',file],{windowsHide:true,stdio:'ignore',env});}catch{fs.rmSync(dir,{recursive:true,force:true});throw Error('无法启动代理核心');}child=p;
   const failed=()=>{cleanup(dir);if(child!==p)return;child=null;Env.configure({enabled:true,ready:false});if(!closed)publish({ready:false,message:'代理核心已退出。桌宠仍保持代理模式，请重试或手动关闭；未自动转为直连。'});};p.once('error',failed);p.once('exit',failed);
   let ready=false;for(let i=0;i<80&&child===p&&!closed;i++){if(await listening(port)){ready=true;break;}await delay(100);}
   if(!ready||child!==p||closed)throw Error('代理核心启动失败，请核对 SSR 协议、加密方式或节点参数');
   await route(true,port,bypass);if(child!==p||closed)throw Error('代理核心已退出');
   Env.configure({enabled:true,ready:true,url:'http://127.0.0.1:'+port,bypass});publish({ready:true,message:'代理核心已启动 · '+node.name+'（尚未验证远端连接）'});return status();
  }catch(e){kill();Env.configure({enabled:!!settings.enabled,ready:false});publish({ready:false,message:e.message});throw e;}finally{busy=false;notify(status());}
 }
 async function test(){if(busy||!info.ready)throw Error('请先启用节点并等待代理启动');const started=Date.now(),response=await sessions[0].fetch('https://www.gstatic.com/generate_204',{signal:AbortSignal.timeout(15000),cache:'no-store'});await response.body?.cancel();if(response.status!==204)throw Error('连接测试返回 HTTP '+response.status+'，请检查节点或网络');const message='HTTPS 连接测试通过 · '+(Date.now()-started)+' ms（gstatic；不代表所有 API 均可用）';publish({message});return status();}
 function close(){closed=true;Env.configure({enabled:!!active.enabled,ready:false});kill();}
 return {apply,test,status,close};
}
module.exports={createProxy,freePort,listening};
