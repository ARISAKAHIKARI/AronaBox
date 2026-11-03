'use strict';
const {spawn} = require('node:child_process');
const {agentEnv}=require('./claude-config.cjs');
const {StringDecoder} = require('node:string_decoder');

function validateCommand(value) {
  if (typeof value !== 'string' || !value.trim() || value.length > 600 || /["&|<>^%!\r\n\x00]/.test(value))
    throw new Error('命令请只填写 claude 或完整可执行文件路径，不要填写参数或 CMD 特殊字符。');
  return value.trim();
}
function decodeDiagnostic(chunks){
 const bytes=Buffer.concat(chunks);try{return new TextDecoder('utf-8',{fatal:true}).decode(bytes);}catch{return new TextDecoder('gb18030').decode(bytes);}
}
function launch(command, args, cwd, env=process.env) {
  command = validateCommand(command);
  const options = {cwd, env, windowsHide: true, stdio: ['pipe','pipe','pipe'], detached: process.platform !== 'win32'};
  if (process.platform === 'win32') {
    command=require('./pro-launch.cjs').windowsCommand(command,env);
    if(/\.(exe|com)$/i.test(command))return spawn(command,args,options);
    // All arguments are app-owned flags, enumerations or validated session IDs. Prompt NEVER enters the command line.
    if (args.some(a => /[^a-zA-Z0-9_=.,:/-]/.test(a))) throw new Error('非法 CLI 参数');
    return spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', `""${command}" ${args.join(' ')}"`], {...options, windowsVerbatimArguments: true});
  }
  return spawn(command, args, options);
}
function terminate(child) {
  if (!child.pid) return;
  if (process.platform === 'win32') {
    const killer = spawn('taskkill.exe', ['/pid', String(child.pid), '/t', '/f'], {windowsHide:true});
    killer.on('error', () => child.kill());
  } else { try { process.kill(-child.pid, 'SIGTERM'); } catch { child.kill('SIGTERM'); } }
}
function stripLeadingBlankLines(text){return text.replace(/^(?:[ \t]*\r?\n)+/, '');}
class StreamParser {
  constructor(emit) { this.emit=emit; this.pending=''; this.decoder=new StringDecoder('utf8'); this.result=null; this.session=null; this.fallback=''; this.sawDelta=false; this.leading=''; this.textStarted=false; }
  emitText(text){
    if(!this.textStarted){this.leading+=text;if(!/\S/.test(this.leading))return;text=stripLeadingBlankLines(this.leading);this.leading='';this.textStarted=true;}
    if(text)this.emit({type:'delta',text});
  }
  push(chunk) {
    this.pending += Buffer.isBuffer(chunk) ? this.decoder.write(chunk) : chunk;
    if(this.pending.length > 4*1024*1024) throw new Error('CLI 单行输出过大');
    let i; while((i=this.pending.indexOf('\n'))>=0) { const line=this.pending.slice(0,i); this.pending=this.pending.slice(i+1); this.line(line); }
  }
  end() { this.pending+=this.decoder.end(); if(this.pending.trim()) this.line(this.pending); this.pending=''; }
  line(line) {
    if (!line.trim()) return;
    let e; try { e=JSON.parse(line); } catch { this.emit({type:'diagnostic', text:line.slice(0,1000)}); return; }
    if(e.parent_tool_use_id) return;
    if(typeof e.session_id==='string' && /^[a-zA-Z0-9_-]{1,128}$/.test(e.session_id)) this.session=e.session_id;
    if(e.type==='stream_event') {
      if(e.event?.type==='message_start') this.sawDelta=false;
      if(e.event?.delta?.type==='text_delta') { this.sawDelta=true; this.emitText(e.event.delta.text || ''); }
      if(e.event?.content_block?.type==='tool_use') this.emit({type:'status', text:'正在使用工具：'+e.event.content_block.name});
    }
    if(e.type==='assistant') {
      const blocks=e.message?.content || [];
      const text=blocks.filter(b=>b.type==='text').map(b=>b.text).join('\n');
      if(text) {this.fallback=text; if(!this.sawDelta) this.emitText(text);}
      for(const b of blocks) if(b.type==='tool_use') this.emit({type:'status',text:'正在使用工具：'+b.name});
    }
    if(e.type==='system' && e.subtype==='init') this.emit({type:'status', text:'本地助手已连接'+(e.permissionMode?'（权限：'+e.permissionMode+'）':'')+'，正在思考…'});
    if(e.type==='result') { this.result=e; }
  }
}
function runAgent(settings, prompt, session, emit) {
  const args=['-p','--output-format','stream-json','--verbose','--include-partial-messages'];
  // Bypass is only selected by the explicit, confirmed application setting.
  args.push('--permission-mode',settings.skipPermissions?'bypassPermissions':'default');
  if(session && /^[a-zA-Z0-9_-]{1,128}$/.test(session)) args.push('--resume',session);
  const child=launch(settings.command,args,settings.cwd,agentEnv(settings));
  let cancelled=false, stderr=[], outputBytes=0, limitError='';
  const parser=new StreamParser(emit);
  // Tool calls and model reasoning can legitimately take longer than ten minutes.
  // Silence is not proof of a stalled task: report it without terminating the CLI.
  const startedAt=Date.now();let lastOutputAt=startedAt;
  const timer=setInterval(()=>{if(Date.now()-lastOutputAt>=60000)emit({type:'status',text:`本地助手进程仍在运行（已等待 ${Math.floor((Date.now()-startedAt)/60000)} 分钟），暂未收到新输出；可点击“停止”结束任务。`});},60000);
  const done=new Promise((resolve,reject)=>{
    let settled=false;
    const finish=(error,value)=>{if(settled)return;settled=true;clearInterval(timer);error?reject(error):resolve(value);};
    child.stdout.on('data',chunk=>{lastOutputAt=Date.now();try {outputBytes+=chunk.length; if(outputBytes>16*1024*1024)throw new Error('输出超过 16MB，已停止');parser.push(chunk);} catch(e){limitError=e.message;terminate(child);} });
    child.stderr.on('data',chunk=>{lastOutputAt=Date.now();stderr.push(chunk);while(stderr.length>1&&stderr.reduce((n,b)=>n+b.length,0)>16000)stderr.shift();});
    child.stdin.on('error',()=>{});
    child.on('error',e=>finish(new Error(e.code==='ENOENT' ? '找不到本地助手 CLI。请在设置中填写完整路径，并先在 CMD 完成登录。' : e.message)));
    child.on('close',code=>{
      try{parser.end();}catch(e){limitError=e.message;}
      if(cancelled)return finish(new Error('已停止本次回复。'));
      if(limitError)return finish(new Error(limitError));
      stderr=decodeDiagnostic(stderr).slice(-8000);
      const r=parser.result;
      if(code!==0 || r?.is_error) return finish(new Error([r?.result, ...(Array.isArray(r?.errors)?r.errors:[]),stderr].filter(Boolean).join('\n') || `本地助手退出码：${code}`));
      if(!r) return finish(new Error('没有收到 Claude stream-json 的 result 事件。当前 CLI 需支持 stream-json / resume 参数，请先检测连接。\n'+stderr));
      finish(null,{text: stripLeadingBlankLines(typeof r.result==='string'?r.result:parser.fallback), session:parser.session, denials:Array.isArray(r.permission_denials)?r.permission_denials:[]});
    });
    child.stdin.end(prompt+'\n');
  });
  return {done,cancel(){cancelled=true;terminate(child);}};
}
function probe(settings) {
  return new Promise((resolve,reject)=>{
    const child=launch(settings.command,['--help'],settings.cwd,agentEnv(settings));let out=[];
    const timer=setTimeout(()=>{terminate(child);reject(new Error('检测超时，请在 CMD 手动运行 claude --help。'));},15000);
    const collect=s=>{out.push(s);while(out.length>1&&out.reduce((n,b)=>n+b.length,0)>60000)out.shift();};child.stdout.on('data',collect);child.stderr.on('data',collect);
    child.on('error',e=>{clearTimeout(timer);reject(e);});
    child.on('close',code=>{clearTimeout(timer);out=decodeDiagnostic(out);resolve({ok:code===0,compatible:/stream-json/.test(out)&&/--resume/.test(out),text:out||`退出码 ${code}`});});child.stdin.end();
  });
}
module.exports={stripLeadingBlankLines,validateCommand,decodeDiagnostic,launch,StreamParser,runAgent,probe};
