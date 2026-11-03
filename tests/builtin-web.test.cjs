'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),{EventEmitter}=require('node:events');
test('built-in sessions isolate providers, reject foreign frames, and preserve windows on close',async()=>{
 const windows=[],handlers=new Map(),app=new EventEmitter();
 class Window extends EventEmitter {constructor(options){super();this.options=options;this.visible=options.show;this.webContents=new EventEmitter();Object.assign(this.webContents,{mainFrame:{},session:{setPermissionRequestHandler(){},setPermissionCheckHandler(){}},setWindowOpenHandler(){},getURL:()=>this.url,send:(channel,msg)=>{this.last=msg;}});windows.push(this);}loadURL(url){this.url=url;return Promise.resolve();}isDestroyed(){return false;}show(){this.visible=true;}hide(){this.visible=false;}focus(){}isVisible(){return this.visible;}}
 const module={exports:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../builtin-web.cjs'),'utf8'),{module,exports:module.exports,require:n=>n==='electron'?{app,BrowserWindow:Window,ipcMain:{handle:(n,f)=>handlers.set(n,f)}}:require(n),__dirname:path.join(__dirname,'..'),URL,setTimeout,clearTimeout,setInterval,clearInterval});
 const api=module.exports.installBuiltinWeb(p=>'https://'+p+'.example/');api.open('chatgpt');api.open('gemini');const [a,b]=windows,handler=handlers.get('webview:message'),event=w=>({sender:w.webContents,senderFrame:w.webContents.mainFrame});
 assert.notEqual(a.options.webPreferences.partition,b.options.webPreferences.partition);assert.equal(a.options.webPreferences.backgroundThrottling,false);assert.equal(a.options.webPreferences.sandbox,true);
 await assert.rejects(handler({sender:a.webContents,senderFrame:{}},{type:'ready'}),/未知网页/);
 await handler(event(a),{type:'ready'});await handler(event(b),{type:'ready'});
 const ja=api.run('chatgpt','one',()=>{}),jb=api.run('gemini','two',()=>{});const aid=a.last.job.id,bid=b.last.job.id;
 await assert.rejects(handler(event(b),{type:'event',event:{id:aid,type:'done'}}),/会话已经结束/);
 let prevented=false;a.emit('close',{preventDefault(){prevented=true;}});assert.ok(prevented);assert.equal(a.isVisible(),false);assert.equal(api.info()[0].busy,true);
 await handler(event(a),{type:'event',event:{id:aid,type:'text',text:'full reply'}});await handler(event(a),{type:'event',event:{id:aid,type:'done'}});assert.equal((await ja.done).text,'full reply');
 assert.equal(api.info()[1].busy,true);const rejected=assert.rejects(jb.done,/已停止/);jb.cancel();await rejected;
 a.url='https://login.example/';const jc=api.run('chatgpt','three',()=>{});await assert.rejects(jc.done,/公司确认和登录/);
 app.emit('before-quit');
});
