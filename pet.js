'use strict';
const $=s=>document.querySelector(s),pet=$('#pet-character'),bubble=$('#bubble');
let state=null,timer,busy=false,expanded=true,desiredExpanded=true,transitionTask=null;
const pending=new Set(),drafts={};
function report(error){$('#pet-error').textContent=error.message||String(error);$('#pet-error').hidden=false;}
async function invoke(name,...args){return window.desk.invoke(name,...args);}
function controls(){const active=busy||pending.has(state?.provider);$('#pet-send').disabled=active;$('#pet-stop').hidden=!busy;$('#pet-new').disabled=active;}
function react(mood,text){window.PetIdle?.touch(pet);pet.dataset.mood=mood;bubble.textContent=text;clearTimeout(timer);if(mood!=='thinking')timer=setTimeout(()=>{pet.dataset.mood=busy?'thinking':'idle';bubble.textContent=busy?'正在回复…':'老师，我在这里。';},7000);}
function renderMessages(){const list=$('#pet-messages');const atBottom=list.scrollHeight-list.scrollTop-list.clientHeight<80;const scroll=list.scrollTop;list.replaceChildren();const messages=state?.messages||[];if(!messages.length){const e=document.createElement('p');e.className='chat-empty';e.textContent='想聊点什么？';list.append(e);}for(const m of messages){const el=document.createElement('div');el.className='pet-message '+(m.role==='user'?'user':'assistant');el.dataset.id=m.id;const name=document.createElement('div');name.className='author';ChatUI.author(name,m,state);const content=document.createElement('div');content.className='content';ChatUI.content(content,m.text||(busy?'正在连接…':'（没有文字）'));el.append(name,content);list.append(el);}list.scrollTop=atBottom?list.scrollHeight:scroll;}
function apply(s){if(state&&state.provider!==s.provider){drafts[state.provider]=$('#pet-input').value;$('#pet-input').value=drafts[s.provider]||'';}state=s;ChatUI.labels.codeagent=s.settings.cliBackend==='codeagent'?'CodeAgent':'Claude Code';$('#web-open-pet').hidden=s.provider==='codeagent'||s.settings.webMode!=='builtin';ChatUI.providerSelect($('#pet-provider'),state);$('#pet-title').textContent='✧ '+(state.settings.petName||'阿罗娜');busy=s.busy;controls();ChatUI.skin(pet,s.settings);renderMessages();$('#connection-status').textContent=(ChatUI.labels[state.provider]||'codeagent')+(busy?' 正在回复…':' · 随时聊聊');if(busy)react('thinking',(ChatUI.labels[state.provider]||'模型')+' 正在回复…');else if(pet.dataset.mood==='thinking')react('idle','老师，我在这里。');}
const panel=$('#pet-chat');let chatScroll={top:0,bottom:true};
function motionTime(){return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?0:220;}
function nextPaint(){return new Promise(resolve=>(window.requestAnimationFrame||((fn)=>setTimeout(fn,16)))(()=>resolve()));}
function panelState(open){document.body.classList.toggle('expanded',open);panel.inert=!open;panel.setAttribute('aria-hidden',String(!open));$('#chat-open').setAttribute('aria-expanded',String(open));$('#chat-open').title=open?'收起聊天':'展开聊天';}
function transitionEnd(){return new Promise(resolve=>{const finish=()=>{clearTimeout(timeout);panel.removeEventListener('transitionend',end);resolve();};const end=e=>{if(e.target===panel&&e.propertyName==='opacity')finish();};const timeout=setTimeout(finish,motionTime()+45);panel.addEventListener('transitionend',end);if(!motionTime())finish();});}
async function animatePanel(){while(expanded!==desiredExpanded){const open=desiredExpanded;try{if(open){const layout=await invoke('pet:expand',true);document.body.dataset.chatSide=layout?.side||'left';document.body.style.setProperty('--chat-width',(layout?.chatWidth||Math.max(220,Math.min(370,innerWidth-270)))+'px');await nextPaint();await nextPaint();const list=$('#pet-messages');list.scrollTop=chatScroll.bottom?list.scrollHeight:chatScroll.top;panelState(true);await transitionEnd();expanded=true;}else{const list=$('#pet-messages');chatScroll={top:list.scrollTop,bottom:list.scrollHeight-list.scrollTop-list.clientHeight<40};if(panel.contains(document.activeElement))$('#chat-open').focus({preventScroll:true});panelState(false);await transitionEnd();await invoke('pet:expand',false);expanded=false;}}catch(e){desiredExpanded=expanded;panelState(expanded);report(e);break;}}if(expanded)$('#pet-input').focus({preventScroll:true});}
function expand(value){desiredExpanded=!!value;if(!transitionTask){transitionTask=animatePanel().finally(()=>{transitionTask=null;});}return transitionTask;}
window.desk.on('state',apply);window.desk.on('pet:react',e=>{if(!e.provider||e.provider===state?.provider)react(e.mood,e.text);});window.desk.on('agent:event',e=>{if(e.provider&&e.provider!==state?.provider)return;if(e.type==='status')$('#connection-status').textContent=e.text;if((e.type==='delta'||e.type==='replace')&&state){const m=state.messages.find(m=>m.id===e.id);if(!m)return;m.text=e.type==='replace'?e.text:m.text+e.text;const list=$('#pet-messages'),atBottom=list.scrollHeight-list.scrollTop-list.clientHeight<80;const row=[...list.children].find(n=>n.dataset.id===e.id);if(row)ChatUI.content(row.querySelector('.content'),m.text);if(atBottom)list.scrollTop=list.scrollHeight;}});
$('#pet-form').onsubmit=async e=>{e.preventDefault();if(!state)return;const p=state.provider;if(busy||pending.has(p))return;const text=$('#pet-input').value.trim();if(!text)return;pending.add(p);controls();$('#pet-error').hidden=true;$('#pet-input').value='';drafts[p]='';try{await invoke('chat:send',text,p);}catch(error){drafts[p]=text;if(state.provider===p){if(!$('#pet-input').value)$('#pet-input').value=text;report(error);}}finally{pending.delete(p);controls();}};
$('#pet-input').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('#pet-form').requestSubmit();}};
$('#pet-stop').onclick=()=>invoke('chat:stop',state.provider).catch(report);
$('#pet-new').onclick=async()=>{try{await invoke('chat:new',state.provider);$('#pet-input').focus();}catch(e){report(e);}};
$('#chat-collapse').onclick=()=>expand(false);$('#chat-open').onclick=()=>expand(!desiredExpanded);let petClick;pet.onclick=()=>{clearTimeout(petClick);petClick=setTimeout(()=>expand(!desiredExpanded),260);};pet.ondblclick=()=>{clearTimeout(petClick);invoke('pet:snooze',5).catch(report);};
$('#todo-open').onclick=()=>invoke('window:show','todos').catch(report);$('#main-open').onclick=()=>invoke('window:show','chat').catch(report);$('#settings-open').onclick=()=>invoke('window:show','settings').catch(report);$('#pet-hide').onclick=()=>invoke('pet:toggle').catch(report);
invoke('state:get').then(apply).catch(report);
setInterval(()=>{if(!busy)react('sleep','休息一下，也没关系。');},120000);

window.desk.on('pet:toggle-chat',()=>expand(!desiredExpanded));

$('#pet-provider').onchange=e=>invoke('provider:switch',e.target.value).catch(report);

$('#pro-open').onclick=()=>invoke('terminal:open').catch(report);

window.desk.on('chat:draft',async text=>{await expand(true);const input=$('#pet-input');const next=input.value+(input.value?'\n\n':'')+text;if(next.length>16000){report(Error('聊天草稿合计超过 16000 字，请先缩短现有草稿再添加；文件仍在工具窗口。'));return;}input.value=next;input.focus();});
document.addEventListener('dragover',e=>{if([...e.dataTransfer.types].includes('Files')){e.preventDefault();document.body.classList.add('file-hover');}});
document.addEventListener('dragleave',e=>{if(!e.relatedTarget)document.body.classList.remove('file-hover');});
document.addEventListener('drop',e=>{e.preventDefault();document.body.classList.remove('file-hover');if(e.dataTransfer.files.length)window.desk.dropFiles([...e.dataTransfer.files]).catch(report);});
$('#tools-open').onclick=()=>invoke('tools:open','notes').catch(report);

$('#web-open-pet').onclick=()=>invoke('web:open',state.provider).catch(report);

window.desk.on('chat:show',()=>expand(true));
