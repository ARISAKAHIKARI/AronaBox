'use strict';
const http=require('node:http');const {randomBytes,randomUUID,timingSafeEqual}=require('node:crypto');
const PROVIDERS=['chatgpt','doubao','gemini','deepseek'];
class WebBridge{
 constructor(port=17869){this.port=port;this.token=randomBytes(24).toString('hex');this.targets=new Map();this.jobs=new Map();this.error=null;this.origin=null;}
 async start(){this.server=http.createServer((req,res)=>this.handle(req,res));await new Promise((resolve,reject)=>{this.server.once('error',reject);this.server.listen(this.port,'127.0.0.1',resolve);});this.port=this.server.address().port;}
 info(){return {port:this.port,code:this.token,error:this.error,connected:PROVIDERS.filter(p=>Date.now()-(this.targets.get(p)||0)<15000)};}
 async handle(req,res){const origin=req.headers.origin||'';const reply=(code,data)=>{res.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
  if(origin&&!/^chrome-extension:\/\/[a-p]{32}$/.test(origin))return reply(403,{error:'Extension requests only'});
  if(origin){res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');}
  if(req.method==='OPTIONS'){res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');res.setHeader('Access-Control-Allow-Headers','Authorization,Content-Type');res.writeHead(204);res.end();return;}
  const auth=Buffer.from((req.headers.authorization||'').replace(/^Bearer /,'')),key=Buffer.from(this.token);
  if(auth.length!==key.length||!timingSafeEqual(auth,key))return reply(401,{error:'连接码已过期，请从桌宠设置重新复制。'});
  if(this.origin&&origin&&origin!==this.origin)return reply(403,{error:'Another extension is paired'});
  if(origin)this.origin=origin;
  try{
   const url=new URL(req.url,'http://127.0.0.1');
   if(req.method==='GET'&&url.pathname==='/status')return reply(200,{ok:true,connected:this.info().connected});
   if(req.method==='POST'){
    let size=0,body='';for await(const chunk of req){size+=chunk.length;if(size>2*1024*1024){reply(413,{error:'Too large'});return;}body+=chunk;}
    const data=JSON.parse(body||'{}');
    if(url.pathname==='/heartbeat'){this.targets.clear();for(const p of data.providers||[])if(PROVIDERS.includes(p))this.targets.set(p,Date.now());return reply(200,{ok:true});}
    if(url.pathname==='/event'){const j=this.jobs.get(data.id);if(!j||j.cancelled)return reply(200,{ignored:true});
     if(data.type==='text'&&typeof data.text==='string'){j.text=data.text.replace(/^(?:[ \t]*\r?\n)+/,'');j.emit({type:'replace',text:j.text});}
     if(data.type==='status'&&typeof data.text==='string')j.emit({type:'status',text:data.text.slice(0,500)});
     if(data.type==='done')j.finish(null,{text:j.text,session:null,denials:[]});
     if(data.type==='error')j.finish(new Error(String(data.message||'网页读取失败').slice(0,2000)));
     return reply(200,{ok:true});
    }
   }
   if(req.method==='GET'&&url.pathname==='/job'){
    const provider=url.searchParams.get('provider');for(const j of this.jobs.values())if(j.provider===provider){if(j.cancelled){this.jobs.delete(j.id);return reply(200,{cancel:j.id});}if(!j.claimed){j.claimed=true;return reply(200,{id:j.id,prompt:j.prompt,provider:j.provider});}}
    return reply(200,{});
   }
   reply(404,{error:'Not found'});
  }catch(e){if(!res.headersSent)reply(400,{error:'Invalid request'});}
 }
 run(provider,prompt,emit){if(this.error)throw new Error(this.error);if(!PROVIDERS.includes(provider))throw new Error('未知网页模型');if(Date.now()-(this.targets.get(provider)||0)>15000)throw new Error('此网页尚未连接。请在 Edge 中打开并登录页面，再点击配套扩展“连接当前页面”。');
  let finish;const id=randomUUID();const done=new Promise((resolve,reject)=>{finish=(e,r)=>{clearTimeout(job.timer);this.jobs.delete(id);e?reject(e):resolve(r);};});
  const job={id,provider,prompt,emit,text:'',claimed:false,cancelled:false,finish,timer:null};job.timer=setTimeout(()=>finish(new Error('网页回复超时，请检查 Edge 页面或重新连接。')),600000);this.jobs.set(id,job);emit({type:'status',text:'正在通过 Edge 网页回复…'});
  return {done,cancel:()=>{clearTimeout(job.timer);this.jobs.delete(id);job.cancelled=true;this.jobs.set(id,job);finish(new Error('已停止接收回复。请确认网页是否也已停止生成。'));this.jobs.set(id,job);const t=setTimeout(()=>this.jobs.delete(id),30000);t.unref();}};
 }
 close(){for(const j of [...this.jobs.values()])if(!j.cancelled)j.finish(new Error('程序已退出'));this.jobs.clear();this.server?.close();}
}
module.exports={WebBridge};
