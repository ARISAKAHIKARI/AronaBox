'use strict';
const {app,BrowserWindow,ipcMain,Menu,dialog,clipboard,shell}=require('electron');
const path=require('node:path'),{randomUUID}=require('node:crypto');
const PROVIDERS={chatgpt:'ChatGPT',gemini:'Gemini',doubao:'无线豆包',deepseek:'DeepSeek'};
function checkedUrl(value){const u=new URL(value);if(u.protocol!=='https:'||u.username||u.password)throw Error('聊天连接需要不含账号密码的 HTTPS 地址');return u;}
function navigationAllowed(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password||u.href==='about:blank';}catch{return false;}}
function displayUrl(value){try{const u=new URL(value);return u.origin+u.pathname;}catch{return '';}}
function installBuiltinWeb(getUrl,icon,options={}){
 const entries=new Map(),requests=new Map();let quitting=false;
 const prefs=provider=>({partition:'persist:arona-web-'+provider,preload:path.join(__dirname,'builtin-web-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false,webSecurity:true});
 const locate=sender=>{for(const e of entries.values()){const page=e.pages.get(sender);if(page&&!page.win.isDestroyed())return {e,page};}return null;};
 const alive=page=>!quitting&&page&&!page.win.isDestroyed()&&!page.wc.isDestroyed?.();
 const selected=e=>e.selected;
 const selectors=e=>options.getSelectors?.(e.provider)||{};
 function finish(e,error){const j=e.job;if(!j)return;e.job=null;clearTimeout(j.timer);clearInterval(j.poll);if(error)j.reject(error);else j.resolve({text:j.text,session:null,denials:[]});}
 function show(page){if(alive(page)){page.win.show();page.win.focus();}}
 function errorBox(err){if(quitting)return;dialog.showErrorBox('内置网页',err.message);}
 function request(e,page,type,timeout=8000){if(!alive(page))throw Error('页面已关闭');if(!page.ready)throw Error(page.error||'页面尚未就绪，请先完成加载或登录。');const requestId=randomUUID();return new Promise((resolve,reject)=>{const timer=setTimeout(()=>{requests.delete(requestId);reject(Error(type==='pick-reply'?'选取超时，请重新选取模型回复。':'页面检测超时，请检查是否仍停留在确认或登录页。'));},timeout);requests.set(requestId,{e,page,type,resolve,reject,timer});page.win.webContents.send('webview:command',{type,provider:e.provider,selectors:selectors(e),requestId});});}
 async function connectPage(e,page){if(e.job)throw Error('请先等待当前回复完成。');const url=checkedUrl(page.win.webContents.getURL());
  const result=await request(e,page,'diagnose');if(!alive(page))return false;if(!result.inputFound)throw Error('此页面尚未识别到聊天输入框，请先完成公司确认和登录，再选择实际聊天页面。');
  if(url.origin!==e.origin){const r=await dialog.showMessageBox(page.win,{type:'question',message:'将此页面用作 '+PROVIDERS[e.provider]+' 聊天？',detail:'后续消息将发送到：\n'+url.origin+'\n\n请确认已完成公司提示，当前页面确实是模型聊天页。',buttons:['取消','使用此页面'],defaultId:0,cancelId:0});if(r.response!==1)return false;}
  if(!alive(page))return false;if(page.win.webContents.getURL()!==url.href||e.job)throw Error('页面或会话已变化，请重新连接。');e.origin=url.origin;e.selected=page;return true;
 }
 async function pickReply(e,page){if(e.job)throw Error('请先等待当前回复完成。');if(page!==e.selected||new URL(page.win.webContents.getURL()).origin!==e.origin)throw Error('请先使用“连接此页面”选择实际聊天页。');show(page);const result=await request(e,page,'pick-reply',60000);if(!alive(page))throw Error('页面已关闭');if(result.error)throw Error(result.error);if(typeof result.selector!=='string'||!result.selector||result.selector.length>2000)throw Error('未找到稳定的回复区域，请使用页面检测。');options.saveSelectors?.(e.provider,{...selectors(e),reply:result.selector});return result;}
 function attach(e,win){const wc=win.webContents;const page={win,wc,ready:false,error:null};e.pages.set(wc,page);
  const nav=(event,dest)=>{if(!navigationAllowed(dest)){event.preventDefault();page.error='已阻止非网页跳转，请在受支持的浏览器中完成登录。';}};
  win.webContents.on('will-navigate',nav);win.webContents.on('will-redirect',nav);
  win.webContents.setWindowOpenHandler(({url})=>navigationAllowed(url)?{action:'allow',overrideBrowserWindowOptions:{autoHideMenuBar:false,webPreferences:prefs(e.provider)}}:{action:'deny'});
  win.webContents.on('did-create-window',child=>{attach(e,child);child.show();});
  win.webContents.session.setPermissionRequestHandler((_wc,_permission,cb)=>cb(false));win.webContents.session.setPermissionCheckHandler(()=>false);
  win.webContents.on('did-start-navigation',(_event,_url,inPlace,isMain)=>{if(isMain&&!inPlace){page.ready=false;page.error=null;if(e.job?.page===page&&e.job.sent)finish(e,Error('聊天页已跳转或刷新，已停止本次采集以免重复发送。请完成确认后重新连接实际聊天页。'));}});
  win.webContents.on('did-fail-load',(_event,code,description,url,isMain)=>{if(!isMain||code===-3)return;page.error=`网页加载失败：${description} (${code}) · ${displayUrl(url)}`;if(e.job?.page===page)finish(e,Error(page.error));});
  win.webContents.on('render-process-gone',()=>{page.ready=false;page.error='网页进程已退出，请刷新页面。';if(e.job?.page===page)finish(e,Error(page.error));});
  win.on('close',event=>{if(!quitting&&page===e.selected){event.preventDefault();win.hide();}});
  win.on('closed',()=>{if(e.job?.page===page)finish(e,Error('聊天页面已关闭'));for(const [id,r]of requests)if(r.page===page){clearTimeout(r.timer);requests.delete(id);r.reject(Error('页面已关闭'));}page.ready=false;e.pages.delete(wc);if(e.selected===page)e.selected=[...e.pages.values()][0];if(!e.pages.size)entries.delete(e.provider);});
  if(Menu&&win.setMenu)win.setMenu(Menu.buildFromTemplate([{label:'网页',submenu:[
   {label:'连接此页面',click:()=>connectPage(e,page).then(ok=>{if(ok&&alive(page))return dialog.showMessageBox(win,{message:'已连接 '+PROVIDERS[e.provider],detail:'可以返回桌宠发送消息。'});}).catch(errorBox)},
   {label:'选取模型回复区域',click:()=>pickReply(e,page).then(()=>alive(page)&&dialog.showMessageBox(win,{message:'回复区域已保存',detail:'请回到桌宠发送一条新消息验证。'})).catch(errorBox)},
   {label:'复制页面检测',click:()=>diagnose(e.provider,page).then(data=>{if(!alive(page))return;clipboard.writeText(JSON.stringify(data,null,2));return dialog.showMessageBox(win,{message:'页面检测已复制'});}).catch(errorBox)},
   {type:'separator'},{label:'后退',click:()=>win.webContents.navigationHistory.goBack()},{label:'刷新',accelerator:'Ctrl+R',click:()=>win.webContents.reload()},
   {label:'在 Edge 打开原入口',click:()=>shell.openExternal(process.platform==='win32'?'microsoft-edge:'+e.url:e.url).catch(errorBox)},
   {label:'隐藏窗口',click:()=>win.hide()}
  ]}]));
  return page;
 }
 function ensure(provider,visible=false){if(quitting)throw Error('程序正在退出');if(!PROVIDERS[provider])throw Error('请选择网页模型');const url=checkedUrl(getUrl(provider));let e=entries.get(provider);
  if(!e){e={provider,url:url.href,origin:url.origin,pages:new Map(),selected:null,job:null,drafts:new Map()};entries.set(provider,e);const win=new BrowserWindow({icon,width:1080,height:800,minWidth:600,minHeight:500,show:visible,autoHideMenuBar:false,title:PROVIDERS[provider],webPreferences:prefs(provider)});e.selected=attach(e,win);load(e,e.selected,url.href);}
  else if(e.url!==url.href&&!e.job){e.url=url.href;e.origin=url.origin;load(e,selected(e),url.href);}
  if(visible)show(selected(e));return e;
 }
 function load(e,page,url){page.ready=false;page.error=null;page.win.loadURL(url).catch(err=>{if(err.code==='ERR_ABORTED'||err.errno===-3)return;page.error='网页加载失败：'+err.message;if(e.job?.page===page)finish(e,Error(page.error));});}
 async function diagnose(provider,page){const e=ensure(provider);page=page||selected(e);const info={provider,selected:page===e.selected,connectedOrigin:e.origin,page:displayUrl(page.win.webContents.getURL()),ready:page.ready,loadError:page.error,windows:[...e.pages.values()].map(p=>({page:displayUrl(p.win.webContents.getURL()),selected:p===e.selected,ready:p.ready,error:p.error})),selectors:selectors(e)};if(page.ready){try{info.adapter=await request(e,page,'diagnose');}catch(err){info.adapterError=err.message;}}return info;}
 ipcMain.handle('webview:message',async(event,m)=>{const found=locate(event.sender);if(!found||event.senderFrame!==event.sender.mainFrame)throw Error('未知网页来源');const {e,page}=found;if(!m||typeof m.type!=='string')throw Error('消息无效');
  if(m.type==='ready'){page.ready=true;return {ok:true};}
  if(m.type==='diagnostic'){const r=requests.get(m.requestId);if(!r||r.page!==page)throw Error('检测请求已结束');if(JSON.stringify(m.result||{}).length>60000)throw Error('检测结果过长');requests.delete(m.requestId);clearTimeout(r.timer);r.resolve(m.result||{});return {ok:true};}
  if(page!==e.selected||new URL(page.win.webContents.getURL()).origin!==e.origin)throw Error('请完成登录并连接实际聊天页');const j=e.job;if(!j||j.page!==page||j.id!==(m.id||m.event?.id))throw Error('会话已经结束');
  if(m.type.startsWith('draft:')){if(m.provider!==e.provider)throw Error('模型不匹配');const key=page.win.webContents.getURL();if(m.type==='draft:read')return {draft:e.drafts.get(key)||null};if(m.type==='draft:clear')e.drafts.delete(key);else if(m.type==='draft:write'){if(typeof m.text!=='string'||m.text.length>200000)throw Error('草稿无效');e.drafts.set(key,{text:m.text,url:key});}else throw Error('未知草稿操作');return {ok:true};}
  if(m.type==='event'){const data=m.event;if(data.type==='text'){if(typeof data.text!=='string'||data.text.length>2000000)throw Error('回复过长');j.text=data.text.replace(/^(?:[ \t]*\r?\n)+/,'');j.emit({type:'replace',text:j.text});}else if(data.type==='status')j.emit({type:'status',text:String(data.text).slice(0,500)});else if(data.type==='done')finish(e);else if(data.type==='error'){show(page);finish(e,Error(String(data.message).slice(0,2000)));}else throw Error('未知事件');return {ok:true};}throw Error('不支持的网页操作');
 });
 function run(provider,prompt,emit){const e=ensure(provider),page=selected(e);if(e.job)throw Error('此内置网页仍在回复');const id=randomUUID();let job;const done=new Promise((resolve,reject)=>{job={id,page,text:'',resolve,reject,emit,sent:false,timer:null,poll:null};});e.job=job;job.timer=setTimeout(()=>finish(e,Error('网页回复超时，请打开网页并使用“复制页面检测”')),600000);job.poll=setInterval(()=>{if(page.ready&&alive(page))page.wc.send('webview:command',{type:'sample'});},1000);
  (async()=>{emit({type:'status',text:'正在连接内置网页…'});const end=Date.now()+45000;while(!page.ready&&Date.now()<end&&e.job===job){if(page.error)throw Error(page.error);await new Promise(r=>setTimeout(r,100));}if(e.job!==job)return;if(!page.ready)throw Error(page.error||'网页尚未就绪，请打开网页完成公司确认和登录。');if(new URL(page.win.webContents.getURL()).origin!==e.origin)throw Error('请先完成公司确认和登录，再在实际聊天窗口的“网页”菜单选择“连接此页面”。');job.sent=true;page.win.webContents.send('webview:command',{type:'run',job:{id,provider,prompt},selectors:selectors(e)});emit({type:'status',text:'正在通过内置网页回复…'});})().catch(err=>{if(e.job===job){show(page);finish(e,err);}});
  return {done,cancel:()=>{if(e.job!==job)return;if(alive(page))page.wc.send('webview:command',{type:'cancel',id});finish(e,Error('已停止接收回复，请打开网页确认生成状态。'));}};
 }
 app.on('before-quit',()=>{quitting=true;for(const e of entries.values())finish(e,Error('程序已退出'));for(const r of requests.values()){clearTimeout(r.timer);r.reject(Error('程序已退出'));}requests.clear();});
 return {open:p=>{ensure(p,true);},hide:p=>{for(const page of entries.get(p)?.pages.values()||[])if(alive(page))page.win.hide();},run,diagnose,pickReply:p=>{const e=ensure(p,true);return pickReply(e,e.selected);},info:()=>[...entries.values()].map(e=>({provider:e.provider,ready:e.selected.ready,visible:e.selected.win.isVisible(),busy:!!e.job,error:e.selected.error}))};
}
module.exports={installBuiltinWeb,checkedUrl,navigationAllowed};
