'use strict';
(function(root){
 const MAX=4*1024*1024;
 function bytes(base64){const binary=atob(base64);return Uint8Array.from(binary,c=>c.charCodeAt(0));}
 function append(j,base64){if(!base64)return;const part=bytes(base64);j.size+=part.length;if(j.size>MAX)throw Error('HTTP reply too large');j.chunks.push(part);}
 function bodyText(j){const buffer=new Uint8Array(j.size);let offset=0;for(const c of j.chunks){buffer.set(c,offset);offset+=c.length;}return new TextDecoder('utf-8',{fatal:true}).decode(buffer);}
 function containsPrompt(body,prompt){if(typeof body!=='string'||body.length>262144)return false;function visit(v,depth){if(depth>12)return false;if(typeof v==='string'){if(v===prompt)return true;if(v[0]==='['||v[0]==='{'){try{return visit(JSON.parse(v),depth+1);}catch{}}return false;}return v&&typeof v==='object'&&Object.values(v).some(x=>visit(x,depth+1));}try{return visit(JSON.parse(body),0);}catch{return false;}}
 function decode(body){if(typeof body!=='string'||body.length>MAX)return null;let text='',known=false,done=false,uncertain=false,lastPath='',lastOp='',messageId=null,kind=null;
  function frame(v){if(!v||typeof v!=='object')return;
   if(Array.isArray(v.choices)){const c=v.choices.find(x=>x.index===0)||v.choices[0];if(!c)return;kind='openai';if(typeof c.delta?.content==='string'){text+=c.delta.content;known=true;}if(c.message?.role==='assistant'&&typeof c.message.content==='string'){text=c.message.content;known=true;done=true;}if(c.finish_reason)done=true;return;}
   const message=v.message||v.v?.message;if(message?.author?.role==='assistant'&&message.content?.content_type==='text'&&Array.isArray(message.content.parts)&&message.content.parts.every(x=>typeof x==='string')){if(messageId&&message.id&&messageId!==message.id){text='';}messageId=message.id||messageId;text=message.content.parts.join('\n');known=true;kind='chatgpt';if(message.status==='finished_successfully'||message.end_turn===true)done=true;return;}
   if(v.v?.response&&typeof v.v.response.content==='string'){text=v.v.response.content;known=true;kind='deepseek';if(v.v.response.status==='FINISHED')done=true;return;}
   if(Array.isArray(v.v)){for(const x of v.v)frame(x);return;}
   if('p'in v||'o'in v||('v'in v&&kind)){const p=v.p??lastPath,o=(v.o??lastOp).toLowerCase();if(v.p!==undefined)lastPath=p;if(v.o!==undefined)lastOp=v.o;
    if(['/message/content/parts/0','response/content','/response/content'].includes(p)&&typeof v.v==='string'){if(o==='append'){text+=v.v;known=true;}else if(o==='replace'||o==='set'){text=v.v;known=true;}else uncertain=true;kind=p.startsWith('/message')?'chatgpt':'deepseek';return;}
    if(['/message/status','response/status','/response/status'].includes(p)&&['finished_successfully','FINISHED'].includes(v.v)){done=true;return;}
    if(/(?:thinking_content|reasoning_content)$/.test(p||''))return;if(/content|parts/.test(p||'')||(!p&&typeof v.v==='string'))uncertain=true;
   }
  }
  try{const trimmed=body.trim();if(trimmed.startsWith('{')){frame(JSON.parse(trimmed));}else{
   for(const block of body.replace(/\r\n/g,'\n').split('\n\n')){const data=block.split('\n').filter(l=>l.startsWith('data:')).map(l=>l.slice(5).replace(/^ /,'')).join('\n');if(!data)continue;if(data==='[DONE]'){done=true;continue;}try{frame(JSON.parse(data));}catch{uncertain=true;}}
  }}catch{return null;}return known&&done&&!uncertain&&text.trim()&&new TextEncoder().encode(text).length<1800000?text:null;
 }
 class NetworkReplies{
  constructor(debuggerApi,complete,fallback){this.api=debuggerApi;this.complete=complete;this.fallback=fallback;this.jobs=new Map();}
  async start(tabId,job,url){await this.stop(tabId);await this.api.sendCommand({tabId},'Network.enable',{maxTotalBufferSize:MAX*2,maxResourceBufferSize:MAX,maxPostDataSize:262144});const j={...job,origin:new URL(url).origin,armed:false,requestId:null,chunks:[],size:0,raw:false,chain:Promise.resolve(),finished:false};this.jobs.set(tabId,j);j.expiry=setTimeout(async()=>{if(this.jobs.get(tabId)===j){await this.stop(tabId);await this.fallback(tabId,j.id,'HTTP 请求未结束，继续检查网页状态。');}},550000);}
  arm(tabId,id){const j=this.jobs.get(tabId);if(j?.id===id){j.armed=true;j.armTimer=setTimeout(async()=>{if(this.jobs.get(tabId)===j&&!j.requestId){await this.stop(tabId);await this.fallback(tabId,id,'未匹配到本次消息的 HTTP 请求，继续读取网页正文。');}},15000);}}
  async stop(tabId){const j=this.jobs.get(tabId);if(!j)return;this.jobs.delete(tabId);clearTimeout(j.armTimer);clearTimeout(j.expiry);await this.api.sendCommand({tabId},'Network.disable').catch(()=>{});}
  observe(source,method,params){const j=this.jobs.get(source.tabId);if(!j||j.finished)return;const tabId=source.tabId;j.chain=j.chain.then(async()=>{if(this.jobs.get(tabId)!==j||j.finished)return;
   if(method==='Network.requestWillBeSent'&&j.armed&&!j.requestId){const r=params.request;if(r?.method==='POST'&&new URL(r.url).origin===j.origin&&/(conversation|completion|chat|generate|stream|message|inference)/i.test(new URL(r.url).pathname)&&containsPrompt(r.postData,j.prompt)){j.requestId=params.requestId;clearTimeout(j.armTimer);}return;}
   if(!j.requestId||params.requestId!==j.requestId)return;
   if(method==='Network.responseReceived'){const r=params.response;j.accepted=r.status>=200&&r.status<300&&new URL(r.url).origin===j.origin&&/event-stream|json|text\/plain/i.test(r.mimeType||'');if(j.accepted){try{const stream=await this.api.sendCommand({tabId},'Network.streamResourceContent',{requestId:j.requestId});j.raw=true;append(j,stream.bufferedData);}catch{j.raw=false;}}}
   if(method==='Network.dataReceived'&&j.raw&&params.data)append(j,params.data);
   if(method==='Network.loadingFinished'){let text=null;if(j.accepted){if(j.raw)text=decode(bodyText(j));else{const r=await this.api.sendCommand({tabId},'Network.getResponseBody',{requestId:j.requestId});text=decode(r.base64Encoded?new TextDecoder('utf-8',{fatal:true}).decode(bytes(r.body)):r.body);}}j.finished=true;await this.stop(tabId);if(text)await this.complete(tabId,j.id,text);else await this.fallback(tabId,j.id,'HTTP 回复格式未识别，继续读取网页正文。');}
   if(method==='Network.loadingFailed'){j.finished=true;await this.stop(tabId);await this.fallback(tabId,j.id,'网页请求中断，继续检查网页回复。');}
  }).catch(async()=>{j.finished=true;await this.stop(tabId);await this.fallback(tabId,j.id,'HTTP 回复无法读取，继续读取网页正文。');});return j.chain;}
 }
 const api={containsPrompt,decode,NetworkReplies};if(typeof module==='object'&&module.exports)module.exports=api;else root.AronaNetwork=api;
})(globalThis);
