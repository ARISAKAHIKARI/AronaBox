(function(root){
'use strict';
function install(term,api,{status,resize}){
 let pasting=false;
 async function run(action){
  try{
   if(action==='copy'||action==='copy-all'){
    let text=term.getSelection();
    if(action==='copy-all'){
     const b=term.buffer.active,lines=[];
     for(let i=0;i<b.length;i++){const line=b.getLine(i);if(!line)continue;const value=line.translateToString(!b.getLine(i+1)?.isWrapped);if(line.isWrapped&&lines.length)lines[lines.length-1]+=value;else lines.push(value);}
     text=lines.join('\n').replace(/\n+$/,'');
    }
    if(!text){status.textContent='请先拖动鼠标选择要复制的文字。';return;}
    await api.invoke('pro:clipboard-write',text);status.textContent='已复制。';
   }else if(action==='paste'){
    if(pasting)return;pasting=true;
    try{const text=await api.invoke('pro:clipboard-read');if(text)term.paste(text);}finally{pasting=false;}
   }else if(action==='select-all')term.selectAll();
   else if(action==='clear'){term.clear();status.textContent='已清除终端回滚显示，会话仍在运行。';}
   else if(action==='bottom')term.scrollToBottom();
   else if(['zoom-in','zoom-out','zoom-reset'].includes(action)){
    term.options.fontSize=action==='zoom-reset'?14:Math.max(10,Math.min(28,term.options.fontSize+(action==='zoom-in'?1:-1)));
    await resize();status.textContent='终端字号：'+term.options.fontSize;
   }
  }catch(e){status.textContent=e.message||String(e);}finally{term.focus();}
 }
 term.attachCustomKeyEventHandler(e=>{
  if(e.isComposing||e.altKey)return true;
  const key=e.key.toLowerCase(),mod=e.ctrlKey||e.metaKey;let action;
  if(mod&&key==='c'&&(e.shiftKey||e.metaKey||term.hasSelection()))action='copy';
  else if((mod&&key==='v')||(e.shiftKey&&!mod&&key==='insert'))action='paste';
  else if(e.ctrlKey&&key==='insert')action='copy';
  else if(mod&&e.shiftKey&&key==='a')action='select-all';
  else if(mod&&e.shiftKey&&key==='k')action='clear';
  else if(mod&&(key==='='||key==='+'))action='zoom-in';
  else if(mod&&key==='-')action='zoom-out';
  else if(mod&&key==='0')action='zoom-reset';
  if(!action)return true;
  e.preventDefault();e.stopPropagation();if(e.type==='keydown')void run(action);return false;
 });
 return {run};
}
root.TerminalEdit={install};
if(typeof module==='object')module.exports={install};
})(typeof window==='object'?window:globalThis);
