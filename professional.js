'use strict';
const api=window.professional,$=s=>document.querySelector(s),term=new Terminal({cursorBlink:true,fontSize:14,fontFamily:'Cascadia Mono, Consolas, monospace',scrollback:6000,theme:{background:'#111923',foreground:'#e2edf8'},allowProposedApi:false}),fit=new FitAddon.FitAddon();term.loadAddon(fit);term.open($('#terminal'));
const editor=TerminalEdit.install(term,api,{status:$('#status'),resize:()=>resize()});
document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editor.run(b.dataset.edit));
$('#terminal').addEventListener('contextmenu',e=>{e.preventDefault();api.invoke('pro:context-menu',term.hasSelection()).catch(error);});
api.onAction(action=>editor.run(action));
function error(e){$('#status').textContent=e.message||String(e);}
async function resize(){fit.fit();await api.invoke('pro:resize',term.cols,term.rows).catch(()=>{});}new ResizeObserver(resize).observe($('#terminal'));
api.onData(data=>term.write(data));term.onData(data=>api.invoke('pro:input',data).catch(error));
$('#start').onclick=async()=>{try{const info=await api.invoke('pro:start');$('#cwd').textContent=info.cwd;await resize();term.focus();}catch(e){error(e);}};$('#stop').onclick=()=>api.invoke('pro:stop').catch(error);$('#project').onclick=()=>api.invoke('pro:project').catch(error);
document.querySelectorAll('[data-command]').forEach(b=>b.onclick=()=>{api.invoke('pro:input',b.dataset.command).catch(error);term.focus();});
(async()=>{const info=await api.invoke('pro:attach');$('#cwd').textContent=info.cwd;if(info.buffer)term.write(info.buffer);if(!info.running)$('#start').click();else{await resize();term.focus();}})().catch(error);

$('#skills-browse').onclick=async()=>{try{const r=await api.invoke('pro:skills-import');if(r)$('#status').textContent='已导入：'+(r.imported.join('、')||'无')+'；跳过：'+(r.skipped.join('、')||'无')+'。目标：'+r.root+'。请结束并重新启动会话，再使用 /skills 检查。';}catch(e){error(e);}};$('#skills-dir').onclick=()=>api.invoke('pro:skills-folder').catch(error);

$('#cli-pick').onclick=async()=>{try{const command=await api.invoke('pro:command');if(command)$('#status').textContent='已保存 CLI：'+command+'。点击启动 / 连接。';}catch(e){error(e);}};$('#diagnose').onclick=async()=>{try{$('#status').textContent=await api.invoke('pro:diagnose');}catch(e){error(e);}};
