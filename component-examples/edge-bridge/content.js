(()=>{
if(globalThis.__aronaBridge)return;globalThis.__aronaBridge=true;
const chrome=globalThis.__aronaTransport?{runtime:{sendMessage:globalThis.__aronaTransport.send,onMessage:{addListener:globalThis.__aronaTransport.listen}}}:globalThis.chrome;
const PRESETS={
 chatgpt:{input:'#prompt-textarea,textarea,[contenteditable="true"],[contenteditable="plaintext-only"]',send:'button[data-testid="send-button"],button[aria-label="Send prompt"],button[aria-label="发送提示"]',reply:'[data-message-author-role="assistant"]',stop:'button[data-testid="stop-button"],button[aria-label="Stop streaming"]'},
 gemini:{input:'rich-textarea [contenteditable="true"],.ql-editor[contenteditable="true"],textarea,[contenteditable="true"],[contenteditable="plaintext-only"]',send:'.send-button,button[aria-label="Send message"],button[aria-label="Send"],button[aria-label="Submit"],button[aria-label="发送消息"],button[aria-label="发送"],button[aria-label="提交"],button[aria-label="傳送"]',reply:'model-response',stop:'button[aria-label="Stop response"],button[aria-label="停止回答"]'},
 deepseek:{input:'textarea',send:'button[aria-label="发送"],button[aria-label="Send"],[role="button"][aria-label="Send"]',reply:'.ds-markdown',stop:'button[aria-label="停止生成"],button[aria-label="Stop"]'},
 doubao:{input:'textarea,[contenteditable="true"][role="textbox"]',send:'button[aria-label="发送"],button[data-testid="send-button"]',reply:'[data-message-role="assistant"],[data-role="assistant"],[data-testid="assistant-message"]',stop:'button[aria-label="停止生成"],button[data-testid="stop-button"]'}
};
let active=null,pickerCancel=null;
// Placeholder attributes and CSS pseudo-elements are never draft text.
const normalized=text=>String(text||'').replace(/[\u200b\ufeff]/g,'').replace(/\s+/g,' ').trim();
function inputText(el){
 if('value'in el)return el.value||'';
 const copy=el.cloneNode(true);
 // Remove only explicitly marked, non-editable placeholder decorations.
 for(const node of copy.querySelectorAll('[data-placeholder-node],.placeholder[contenteditable="false"],[aria-hidden="true"][contenteditable="false"]'))node.remove();
 // Read the rendered editor to preserve paragraph boundaries when no decorations exist.
 if(copy.innerHTML===el.innerHTML)return el.innerText??el.textContent??'';
 for(const br of copy.querySelectorAll('br'))br.replaceWith('\n');
 for(const block of copy.querySelectorAll('p,div'))block.append('\n');
 return copy.textContent||'';
}
function inputCandidates(selector){
 const all=[...document.querySelectorAll(selector)].filter(el=>visible(el)&&!el.matches(':disabled,[readonly],[aria-disabled="true"]')&&!el.closest('[inert],[aria-hidden="true"]'));
 // Nested wrappers represent the same editor, not separate conversations.
 return all.filter(el=>!all.some(parent=>parent!==el&&parent.contains(el)));
}
function inputHints(el){
 const attrs=['placeholder','data-placeholder','aria-placeholder','aria-label'];
 const nodes=[el,...el.querySelectorAll('[data-placeholder],[aria-placeholder],[placeholder]')];
 return [...new Set(nodes.flatMap(n=>attrs.map(a=>n.getAttribute(a)||'')).filter(Boolean))];
}
function hintPriority(el,provider){
 const brand={chatgpt:'chatgpt|gpt',gemini:'gemini',doubao:'豆包|doubao',deepseek:'deepseek|深度求索'}[provider];
 const hints=inputHints(el);
 if(brand&&hints.some(t=>new RegExp('(?:问问|问一问|询问|问|ask|message)\\s*(?:'+brand+')','i').test(t)))return 3;
 if(hints.some(t=>/^(?:询问任何问题|问点什么|问点什么吧|有问题尽管问|输入消息|请输入消息|发送消息|ask anything|message)(?:[.。…!！?？ ]*)$/i.test(t.trim())))return 2;
 return 0;
}
function chooseInput(selector,provider,s,custom=false){
 let matches=inputCandidates(selector);if(matches.length<=1)return matches[0];
 if(!custom){const best=Math.max(...matches.map(el=>hintPriority(el,provider)));if(best>0){matches=matches.filter(el=>hintPriority(el,provider)===best);if(matches.length===1)return matches[0];}}
 const focused=matches.filter(el=>el===document.activeElement||el.contains(document.activeElement));if(focused.length===1)return focused[0];
 if(provider==='gemini'&&!custom){const rich=matches.filter(el=>el.closest('rich-textarea'));if(rich.length===1)return rich[0];if(rich.length)matches=rich;}
 // A unique editor sharing a nearby composer with a semantic send button wins.
 if(s){const linked=matches.filter(el=>{let scope=el.parentElement;for(let i=0;scope&&scope!==document.body&&i<4;i++,scope=scope.parentElement){if(matches.filter(x=>scope.contains(x)).length>1)break;if(sendCandidates(s,provider,el,false).some(btn=>scope.contains(btn)))return true;}return false;});if(linked.length===1)return linked[0];}
 throw Error('页面存在多个可编辑区域，尚不能确定聊天输入框。请点击网页聊天输入框后重试，或使用扩展“检测当前页面”。');
}
async function draftRecord(type,job,text){const result=await chrome.runtime.sendMessage({type,id:job.id,provider:job.provider,text});if(result?.error)throw Error(result.error);return result?.draft;}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const visible=el=>{if(!el||!el.isConnected||!el.getClientRects().length)return false;for(let n=el;n&&n.nodeType===1;n=n.parentElement){const style=getComputedStyle(n);if(n.hidden||style.display==='none'||style.visibility==='hidden'||style.visibility==='collapse'||style.opacity==='0')return false;}return true;};
const find=selector=>[...document.querySelectorAll(selector)].find(visible);
const replyNodes=selector=>[...document.querySelectorAll(selector)].filter(visible);
// Read semantic DOM, retaining Markdown code blocks even when the document is backgrounded.
function replyText(node){if(!node)return '';if(node.matches('model-response'))node=node.querySelector('.markdown, message-content')||node;function walk(n){if(n.nodeType===3)return n.nodeValue||'';if(n.nodeType!==1)return '';const tag=n.tagName.toLowerCase();if(['button','svg','script','style','nav'].includes(tag)||n.getAttribute('aria-hidden')==='true')return '';if(tag==='pre'){const c=n.querySelector('code')||n,lang=(c.className||'').match(/(?:language-|lang-)([\w+-]+)/)?.[1]||'';const fence=c.textContent.includes('```')?'````':'```';return '\n'+fence+lang+'\n'+c.textContent+'\n'+fence+'\n';}const body=[...n.childNodes].map(walk).join('');if(tag==='br')return '\n';if(tag==='code')return '`'+body+'`';if(tag==='strong'||tag==='b')return '**'+body+'**';if(tag==='em'||tag==='i')return '*'+body+'*';if(/^h[1-6]$/.test(tag))return '\n'+'#'.repeat(Number(tag[1]))+' '+body+'\n';if(tag==='li')return '\n- '+body;if(tag==='a'&&/^https?:/.test(n.href||''))return '['+body+']('+n.href+')';if(['p','div','section','blockquote'].includes(tag))return '\n'+body+'\n';return body;}const text=walk(node).trim();return globalThis.AronaResponseText?AronaResponseText.clean(text):text;}
function completionMarker(node,replySelector){const scope=node?.closest('[data-testid^="conversation-turn"]')||node?.parentElement;if(!scope||scope.querySelectorAll(replySelector).length>1)return false;return [...scope.querySelectorAll('button,[role="button"]')].some(b=>visible(b)&&(/^(copy|copy response|copy message|复制|复制回答|复制回复)$/i.test(b.getAttribute('aria-label')||b.getAttribute('title')||'')||b.getAttribute('data-testid')==='copy-turn-action-button'));}
function sampleWait(task){return new Promise(resolve=>{let timer;const finish=()=>{clearTimeout(timer);if(task.wake===finish)task.wake=null;resolve();};task.wake=finish;timer=setTimeout(finish,750);});}
const enabled=el=>visible(el)&&!el.matches(':disabled')&&el.getAttribute('aria-disabled')!=='true'&&!el.closest('[inert]')&&getComputedStyle(el).pointerEvents!=='none';
function buttonFor(el){if(el.matches('button,[role="button"]'))return el;return [...el.querySelectorAll('button,[role="button"]')].find(visible)||el.closest('button,[role="button"]');}
function sendCandidates(s,provider,input,custom=false){
 const result=[...document.querySelectorAll(s.send)].map(buttonFor).filter(visible);
 if(!custom){
  // Inspect semantic send controls; never use positional/icon-shape guessing or synthetic Enter.
  const exact=/^(send|send message|send prompt|submit|submit prompt|发送|发送消息|发送提示|提交|提交提示|傳送|傳送訊息)$/i;
  for(const el of document.querySelectorAll('button,[role="button"]')){
   if(!visible(el))continue;
   const labels=['aria-label','title','data-tooltip'].map(a=>(el.getAttribute(a)||'').trim());
   labels.push((el.textContent||'').trim());
   const icon=el.querySelector('mat-icon,[data-mat-icon-name],[data-mat-icon-type]');
   const iconName=icon&&(icon.getAttribute('data-mat-icon-name')||icon.getAttribute('fonticon')||icon.textContent||'').trim();
   if(labels.some(t=>exact.test(t))||iconName==='send')result.push(el);
  }
 }
 if(provider==='deepseek'&&!custom&&input&&inputHints(input).some(t=>/deepseek/i.test(t))){
  // Observed primary circular control; restrict to this composer, never hashed classes.
  let scope=input.parentElement;
  for(let i=0;scope&&scope!==document.body&&i<5;i++,scope=scope.parentElement){
   if(inputCandidates('textarea,[contenteditable="true"]').filter(el=>scope.contains(el)).length>1)break;
   const local=[...scope.querySelectorAll('[role="button"].ds-button--primary.ds-button--filled.ds-button--circle')].filter(visible);
   if(local.length){result.push(...local);break;}
  }
 }
 const unique=[...new Set(result)];
 // Prefer a unique control in the same composer ancestor, before considering a page-wide match.
 if(unique.length>1&&input){let scope=input.parentElement;for(let i=0;scope&&scope!==document.body&&i<7;i++,scope=scope.parentElement){const local=unique.filter(b=>scope.contains(b));if(local.length===1)return local;if(local.length>1)break;}}
 return unique;
}
async function waitSend(s,provider,input,task,custom){
 let matches=[];const deadline=Date.now()+8000;
 do{if(task.cancelled)return null;matches=sendCandidates(s,provider,input,custom);const usable=matches.filter(enabled);if(usable.length===1)return usable[0];await sleep(200);}while(Date.now()<deadline);
 const usable=matches.filter(enabled);
 if(usable.length>1)throw Error('识别到多个发送按钮，为避免误发已停止。请在扩展的页面适配中填写更精确的发送按钮选择器。');
 if(!matches.length&&provider==='doubao'&&!custom&&input instanceof HTMLTextAreaElement&&/Ctrl\s*\/\s*Shift\s*\+\s*Enter.*换行/i.test(input.getAttribute('placeholder')||''))return {keyboard:true};
 if(matches.length)throw Error('发送按钮已找到，但等待 8 秒后仍不可用。消息保留在网页草稿，请查看网页是否仍在加载、上传或提示限制。');
 throw Error('未识别到发送按钮。消息保留在网页草稿。请在扩展点击“检测当前页面”，提供检测结果以便适配。');
}
function diagnose(provider,overrides){
 const s={...PRESETS[provider],...overrides};let input,selectionError;try{input=chooseInput(s.input,provider,s,!!overrides?.input);}catch(e){selectionError=e.message;}const matches=sendCandidates(s,provider,input,!!overrides?.send);
 const describe=el=>({tag:el.tagName,role:el.getAttribute('role'),label:el.getAttribute('aria-label'),title:el.getAttribute('title'),class:String(el.className||'').slice(0,180),enabled:enabled(el)});
 let scope=input?.parentElement;for(let i=0;i<5&&scope?.parentElement&&scope.parentElement!==document.body;i++)scope=scope.parentElement;
 return {adapterVersion:'1.2.0',provider,visibility:document.visibilityState,inputFound:!!input,selectionError,replyCount:replyNodes(s.reply).length,replySelector:s.reply,replyCandidates:[...document.querySelectorAll('[class*="markdown"],[class*="answer"],[data-message-role],[data-message-author-role],model-response')].filter(visible).slice(-20).map(el=>({tag:el.tagName,class:String(el.className||'').slice(0,180),role:el.getAttribute('data-message-role')||el.getAttribute('data-message-author-role'),characters:(el.textContent||'').length})),frames:[...document.querySelectorAll('iframe')].slice(0,10).map(f=>{try{return {origin:new URL(f.src,location.href).origin};}catch{return {origin:'unknown'};}}),selectedInput:input?{tag:input.tagName,id:input.id,hints:inputHints(input)}:null,iframeCount:document.querySelectorAll('iframe').length,inputs:[...document.querySelectorAll(s.input)].filter(visible).map(el=>({tag:el.tagName,id:el.id,hints:inputHints(el),hintPriority:hintPriority(el,provider),placeholder:el.getAttribute('placeholder'),label:el.getAttribute('aria-label'),hasDraft:!!inputText(el).trim()})),sendMatches:matches.map(describe),nearbyButtons:scope?[...scope.querySelectorAll('button,[role="button"]')].filter(visible).slice(0,12).map(describe):[],hint:'如果网页已有草稿，请先手动处理草稿；检测不会发送消息。'};
}

// One-shot selection is requested from the native menu; it never sends a prompt.
function pickReply(respond){
 if(active){respond({error:'请先等待当前回复完成。'});return;}
 pickerCancel?.();let outlineNode,oldOutline,timer;
 const tip=document.createElement('div');tip.textContent='点击一条模型回复的正文区域（不要点击自己的提问）；Esc 取消';Object.assign(tip.style,{position:'fixed',top:'8px',left:'8px',zIndex:'2147483647',padding:'12px',background:'#172331',color:'white',borderRadius:'8px',pointerEvents:'none'});document.documentElement.append(tip);
 const restore=()=>{if(outlineNode)outlineNode.style.outline=oldOutline;outlineNode=null;};
 const cleanup=()=>{clearTimeout(timer);restore();tip.remove();document.removeEventListener('pointermove',move,true);document.removeEventListener('click',click,true);document.removeEventListener('keydown',key,true);pickerCancel=null;};
 const cancel=()=>{cleanup();respond({error:'已取消选取'});};pickerCancel=cancel;
 const area=el=>el?.closest?.('[data-message-author-role="assistant"],[data-message-role="assistant"],[data-role="assistant"],model-response,[class*="markdown"]')||el;
 const move=e=>{restore();const el=area(e.target);if(el&&el!==tip){outlineNode=el;oldOutline=el.style.outline;el.style.outline='2px solid #37a9ff';}};
 const key=e=>{if(e.key==='Escape'){e.preventDefault();cancel();}};
 const click=e=>{e.preventDefault();e.stopImmediatePropagation();const el=area(e.target);let selector='';
  if(el&&!el.closest('textarea,input,[contenteditable="true"],button,[role="button"]')&&el!==document.body&&el!==document.documentElement){
   for(const a of ['data-message-author-role','data-message-role','data-role'])if(el.getAttribute(a)==='assistant'){selector='['+a+'="assistant"]';break;}
   if(!selector&&el.tagName==='MODEL-RESPONSE')selector='model-response';
   if(!selector){const classes=[...el.classList].filter(c=>!/(?:^|[-_])(active|selected|last|first)(?:$|[-_])/.test(c));if(classes.length)selector=el.tagName.toLowerCase()+classes.map(c=>'.'+CSS.escape(c)).join('');}
  }
  const count=selector?document.querySelectorAll(selector).length:0;cleanup();respond(selector?{selector,matches:count}:{error:'此位置没有稳定的回复标记，请重新选取正文容器或复制页面检测。'});
 };
 document.addEventListener('pointermove',move,true);document.addEventListener('click',click,true);document.addEventListener('keydown',key,true);timer=setTimeout(cancel,55000);
}

async function event(data){const r=await chrome.runtime.sendMessage({type:'event',event:data});if(r?.error)throw Error(r.error);}
async function run(job,overrides={}){if(active){await event({id:job.id,type:'error',message:'此页面正在处理另一个请求。'});return;}const s={...PRESETS[job.provider],...overrides};const task={id:job.id,cancelled:false,stop:s.stop};active=task;
 try{
  for(const selector of Object.values(s))document.querySelector(selector);
  const input=chooseInput(s.input,job.provider,s,!!overrides.input);if(!input)throw Error('未识别到输入框。请完成登录与公司确认；内置窗口可用“网页 → 复制页面检测”，Edge 可用扩展检测。');
  if(find(s.stop))throw Error('网页正在生成另一条回复，请等它完成后再发送。');
  const draft=inputText(input),owned=await draftRecord('draft:read',job);if(normalized(draft)&&(!owned||normalized(draft)!==normalized(owned.text)))throw Error('网页输入框已有未确认归属的草稿，请先在网页发送或清空，再从桌宠重试。扩展不会覆盖你手动写的内容。');
  const before=replyNodes(s.reply),previous=before.at(-1),beforeText=replyText(previous);
  input.focus();if(input instanceof HTMLTextAreaElement||input instanceof HTMLInputElement){const proto=input instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(input,job.prompt);input.dispatchEvent(new Event('input',{bubbles:true}));}
  else{const selection=window.getSelection(),range=document.createRange();range.selectNodeContents(input);selection.removeAllRanges();selection.addRange(range);document.execCommand('insertText',false,job.prompt);input.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:job.prompt}));}
  await sleep(450);if(task.cancelled)return;
  const filled=normalized(inputText(input));if(filled!==normalized(job.prompt))throw Error('网页输入框未正确接收消息，未点击发送。请检查输入框选择器。');
  await draftRecord('draft:write',job,inputText(input));
  const send=await waitSend(s,job.provider,input,task,!!overrides.send);if(!send||task.cancelled)return;
  const currentInput=chooseInput(s.input,job.provider,s,!!overrides.input);if(!currentInput||normalized(inputText(currentInput))!==normalized(job.prompt))throw Error('等待发送时网页草稿发生变化，已停止以免发送其他内容。');
  await draftRecord('draft:clear',job);
  if(task.cancelled)return;
  if(!currentInput.isConnected||normalized(inputText(currentInput))!==normalized(job.prompt))throw Error('发送前草稿发生变化，已停止。');
  if(!globalThis.__aronaTransport)await chrome.runtime.sendMessage({type:'capture:arm',id:job.id}).catch(()=>{});
  if(send.keyboard){
   currentInput.focus();
   for(const type of ['keydown','keypress','keyup'])currentInput.dispatchEvent(new KeyboardEvent(type,{key:'Enter',code:'Enter',keyCode:13,which:13,bubbles:true,cancelable:true,shiftKey:false,ctrlKey:false,isComposing:false}));
  }else send.click();
  // Require evidence of acceptance; do not retry a possibly submitted prompt.
  let accepted=false;const acceptanceDeadline=Date.now()+8000;
  while(Date.now()<acceptanceDeadline&&!task.cancelled){
   await sleep(200);const candidate=chooseInput(s.input,job.provider,s,!!overrides.input),nodes=replyNodes(s.reply),lastNode=nodes.at(-1);
   if((candidate&&!normalized(inputText(candidate)))||find(s.stop)||(lastNode&&(lastNode!==previous||replyText(lastNode)!==beforeText))){accepted=true;break;}
  }
  if(task.cancelled)return;
  if(!accepted)throw Error(send.keyboard?'已尝试按网页提示发送 Enter，但未确认网页接收。请在网页手动按 Enter；扩展不会自动重复发送。':'已点击候选发送按钮，但未确认网页接收。请检查网页；扩展不会自动重复发送。');
  let last='',stable=0,lastSample=Date.now(),sawBusy=!!find(s.stop),notified=false;
  const collectionStart=Date.now(),deadline=collectionStart+540000;let missingNotified=false;
  const observer=new MutationObserver(()=>task.wake?.());observer.observe(document.body,{childList:true,subtree:true,characterData:true});task.observer=observer;
  document.addEventListener('visibilitychange',task.visibility=()=>{stable=0;lastSample=Date.now();task.wake?.();});
  while(Date.now()<deadline&&!task.cancelled){await sampleWait(task);const now=Date.now(),gap=now-lastSample;lastSample=now;const nodes=replyNodes(s.reply),node=nodes.at(-1),raw=replyText(node);const changed=node&&(node!==previous||nodes.length>before.length||raw!==beforeText),text=changed?raw:'';const generating=!!find(s.stop),finished=completionMarker(node,s.reply);if(generating)sawBusy=true;
   if(text&&text!==last){last=text;stable=0;await event({id:job.id,type:'text',text});}
   else if(gap>2500)stable=0;else stable+=Math.max(0,Math.min(gap,1000));
   // Never interpret a throttled clock jump or hidden-page silence as completion.
   if(generating)stable=0;
   if(!last&&!missingNotified&&now-collectionStart>15000){missingNotified=true;await event({id:job.id,type:'status',text:'尚未识别到模型回复。内置窗口可用“网页 → 选取模型回复区域”；Edge 模式请检测回复选择器。'});}
   const confirmed=last&&!generating&&((finished&&stable>=4000)||(sawBusy&&!document.hidden&&stable>=4000)||(!document.hidden&&!sawBusy&&stable>=30000));
   if(confirmed){await event({id:job.id,type:'text',text:last});await event({id:job.id,type:'done'});return;}
   if(last&&!notified&&document.hidden&&stable>15000&&!finished){notified=true;await event({id:job.id,type:'status',text:'仍在采集后台回复；若长时间未结束，请打开网页确认生成状态。'});}
  }
  if(!task.cancelled)throw Error('没有确认网页回复已完成。请检查验证/错误提示；内置窗口可选取模型回复区域，Edge 可用扩展检测页面。');
 }catch(e){if(!task.cancelled)await event({id:job.id,type:'error',message:e.message}).catch(()=>{});}finally{task.observer?.disconnect();if(task.visibility)document.removeEventListener('visibilitychange',task.visibility);task.wake?.();if(active===task)active=null;}
}
chrome.runtime.onMessage.addListener((m,_sender,respond)=>{if(m.type==='pick-reply'){pickReply(respond);return true;}if(m.type==='diagnose'){try{respond(diagnose(m.provider,m.selectors||{}));}catch(e){respond({error:e.message});}return;}if(m.type==='ping'||m.type==='sample'){active?.wake?.();respond({ok:true,active:active?.id||null});return;}if(m.type==='run'){pickerCancel?.();run(m.job,m.selectors);respond({ok:true});return;}if(m.type==='release'&&active?.id===m.id){active.cancelled=true;active.wake?.();respond({ok:true});return;}if(m.type==='cancel'&&active?.id===m.id){active.cancelled=true;active.wake?.();try{find(active.stop)?.click();}catch{}respond({ok:true});}});
})();
