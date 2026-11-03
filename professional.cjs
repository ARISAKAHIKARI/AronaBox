'use strict';
const CLI=require('./cli-backend.cjs');
const {app,BrowserWindow,ipcMain,dialog,shell,clipboard,Menu}=require('electron');
const {agentEnv,runtimeSettings}=require('./claude-config.cjs');
const {importSkills}=require('./skill-store.cjs');
const {windowsPlan}=require('./pro-launch.cjs');
const fs=require('node:fs'),path=require('node:path');const {validateCommand}=require('./agent.cjs');
function installProfessional(getSettings,icon,onSettingsChanged=()=>{}){let win,ptyProcess,buffer='',quitting=false,launchCwd='';
 const send=data=>{buffer=(buffer+data).slice(-1000000);if(win&&!win.isDestroyed())win.webContents.send('pro:data',data);};
 function stop(){const p=ptyProcess;ptyProcess=null;if(p)try{p.kill();}catch{}}
 function start(){if(ptyProcess)return;const s=getSettings();const command=validateCommand(s.command);const nativeDir=path.join(app.isPackaged?process.resourcesPath:path.join(__dirname,'vendor'),'pty-'+process.platform+'-'+process.arch);if(!fs.existsSync(nativeDir))throw Error('此包的终端支持 Windows x64 / Linux x64。');const pty=require(path.join(nativeDir,'lib','index.js'));if(!fs.existsSync(s.cwd)){const managed=path.join(app.getPath('userData'),'agent-workspace');if(path.resolve(s.cwd)===path.resolve(managed))fs.mkdirSync(managed,{recursive:true});else throw Error('项目目录不存在：'+s.cwd+'。请在主窗口设置里重新选择项目目录。');}if(!fs.statSync(s.cwd).isDirectory())throw Error('项目路径不是目录：'+s.cwd);const args=['--permission-mode',s.skipPermissions?'bypassPermissions':'default'];launchCwd=s.cwd;buffer='';const env={...agentEnv(runtimeSettings(s)),TERM:'xterm-256color',COLORTERM:'truecolor'};delete env.ELECTRON_RUN_AS_NODE;
 const plan=process.platform==='win32'?windowsPlan(command,args,env):{command,args,file:command};
 send(`\r\n[项目目录] ${s.cwd}\r\n[CLI] ${plan.file}\r\n[启动程序] ${plan.command}\r\n[启动参数] ${JSON.stringify(plan.args)}\r\n`);
 const p=pty.spawn(plan.command,plan.args,{cwd:s.cwd,env,cols:100,rows:30,name:'xterm-256color'});ptyProcess=p;p.onData(send);p.on('error',e=>send('\r\n[伪终端错误] '+(e?.message||String(e))+'\r\n'));p.onExit(e=>{if(ptyProcess===p){ptyProcess=null;send(`\r\n[${plan.shell?'CMD 启动进程':'CLI 进程'}已退出：${e.exitCode}]\r\n`);if(e.exitCode!==0)send('请保留上面的启动参数和错误。CMD ready 标记表示 CMD 已进入调用步骤，不代表 CLI 已成功启动；此退出码不说明项目目录有问题。\r\n');}});return {cwd:launchCwd};}
 async function open(){if(win&&!win.isDestroyed()){win.setTitle(CLI.label(getSettings())+' 终端');win.show();win.focus();return;}win=new BrowserWindow({icon,width:1100,height:760,minWidth:650,minHeight:480,title:CLI.label(getSettings())+' 终端',autoHideMenuBar:true,webPreferences:{preload:path.join(__dirname,'professional-preload.cjs'),contextIsolation:true,nodeIntegration:false,sandbox:true}});win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',e=>e.preventDefault());win.on('close',e=>{if(!quitting){e.preventDefault();win.hide();}});await win.loadFile(path.join(__dirname,'professional.html'));}
 function bind(name,fn){ipcMain.handle(name,(e,...args)=>{if(!win||win.isDestroyed()||e.sender!==win.webContents)throw Error('无效终端来源');return fn(...args);});}
 bind('pro:command',async()=>{if(ptyProcess)throw Error('请先结束当前会话再更换 CLI');const r=await dialog.showOpenDialog(win,{title:'选择当前电脑上的 CLI 启动程序',properties:['openFile'],filters:process.platform==='win32'?[{name:'CLI',extensions:['bat','cmd','exe','com']}]:[]});if(r.canceled)return null;const command=validateCommand(r.filePaths[0]);getSettings().command=command;onSettingsChanged();return command;});
 bind('pro:diagnose',()=>{const s=getSettings(),lines=['项目目录：'+s.cwd,'目录存在：'+(fs.existsSync(s.cwd)&&fs.statSync(s.cwd).isDirectory()?'是':'否')];try{const plan=process.platform==='win32'?windowsPlan(s.command,[],process.env):{command:s.command,file:s.command};lines.push('CLI：'+plan.file,'启动程序：'+plan.command,'启动参数：'+JSON.stringify(plan.args));if(process.platform==='win32'&&/codeagent\.(bat|cmd)$/i.test(plan.file)){const dir=path.dirname(plan.file);for(const name of ['bin/codeagentcli.exe','node/node.exe','codeagent-node.exe','custom-cac/cert.pem'])lines.push(name+'：'+(fs.existsSync(path.join(dir,name))?'存在':'未找到'));lines.push('以上附属路径仅供对照；不同 CLI 安装布局可能不同，不能单凭它们判断安装损坏。');}}catch(e){lines.push(e.message);}const report=lines.join('\r\n');send('\r\n'+report+'\r\n');return report;});
 bind('pro:clipboard-read',()=>{const text=clipboard.readText();if(text.length>60000)throw Error('单次粘贴请控制在 60000 字以内');return text;});
 bind('pro:clipboard-write',text=>{if(typeof text!=='string'||text.length>2000000)throw Error('复制内容过大');clipboard.writeText(text);});
 bind('pro:context-menu',hasSelection=>{const action=id=>()=>{if(win&&!win.isDestroyed())win.webContents.send('pro:action',id);};Menu.buildFromTemplate([
  {label:'复制',enabled:hasSelection===true,click:action('copy')},{label:'粘贴',click:action('paste')},
  {label:'全选',click:action('select-all')},{label:'复制全部输出',click:action('copy-all')},{type:'separator'},
  {label:'清屏（保留会话）',click:action('clear')},{label:'滚动到底部',click:action('bottom')},
  {type:'separator'},{label:'放大字号',click:action('zoom-in')},{label:'缩小字号',click:action('zoom-out')},{label:'重置字号',click:action('zoom-reset')}
 ]).popup({window:win});});
 bind('pro:attach',()=>({buffer,cwd:launchCwd||getSettings().cwd,running:!!ptyProcess}));
 bind('pro:start',()=>{start();return {cwd:launchCwd};});
 bind('pro:input',data=>{if(typeof data!=='string'||data.length>65536)throw Error('终端输入过大');if(!ptyProcess)throw Error('请先启动终端');ptyProcess.write(data);});
 bind('pro:resize',(cols,rows)=>{if(Number.isInteger(cols)&&Number.isInteger(rows)&&cols>=20&&cols<=400&&rows>=5&&rows<=150)ptyProcess?.resize(cols,rows);});
 bind('pro:stop',async()=>{const r=await dialog.showMessageBox(win,{message:'结束终端会话？',detail:'正在执行的任务会被中断。',buttons:['取消','结束'],cancelId:0,defaultId:0});if(r.response===1)stop();});
 bind('pro:skills-folder',async()=>{const folder=path.join(ptyProcess?launchCwd:getSettings().cwd,CLI.skillDir(getSettings()),'skills');fs.mkdirSync(folder,{recursive:true});const error=await shell.openPath(folder);if(error)throw Error(error);return folder;});
 bind('pro:skills-import',async()=>{const cwd=ptyProcess?launchCwd:getSettings().cwd;const r=await dialog.showOpenDialog(win,{title:'选择 Skill 文件夹或技能集合目录',properties:['openDirectory']});if(r.canceled)return null;return importSkills(r.filePaths[0],cwd,CLI.skillDir(getSettings()));});
 bind('pro:project',()=>shell.openPath(launchCwd||getSettings().cwd));
 app.on('before-quit',()=>{quitting=true;stop();});return {open,isRunning:()=>!!ptyProcess};
}
module.exports={installProfessional};
