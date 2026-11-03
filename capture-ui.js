'use strict';
// Selection stays visible until explicitly confirmed. Coordinates are image pixels.
window.startCapture=async function(img,id,display){
 const make=(tag,text,cls)=>{const n=document.createElement(tag);n.textContent=text||'';if(cls)n.className=cls;return n;};
 const mask=make('div','','capture-mask'),box=make('div','','capture-selection'),label=make('span','','capture-size'),hint=make('div',`屏幕 ${display||1} · 拖动选择截图区域 · Esc 取消`,'capture-hint'),bar=make('div','','capture-toolbar');
 document.body.append(mask,box,hint,bar);box.append(label);for(const corner of ['nw','ne','sw','se']){const h=make('i','','capture-handle '+corner);h.dataset.corner=corner;box.append(h);}
 let rect=null,drag=null,busy=false;box.hidden=true;bar.hidden=true;
 const point=e=>({x:Math.max(0,Math.min(innerWidth,e.clientX)),y:Math.max(0,Math.min(innerHeight,e.clientY))});
 const pixels=()=>{const sx=img.naturalWidth/innerWidth,sy=img.naturalHeight/innerHeight;const x=Math.round(rect.x*sx),y=Math.round(rect.y*sy);return{x,y,width:Math.round((rect.x+rect.width)*sx)-x,height:Math.round((rect.y+rect.height)*sy)-y};};
 function paint(){box.hidden=!rect;mask.hidden=!!rect;if(!rect)return;Object.assign(box.style,{left:rect.x+'px',top:rect.y+'px',width:rect.width+'px',height:rect.height+'px'});const r=pixels();label.textContent=`${r.width} × ${r.height} px`;label.style.top=rect.y<30?'4px':'-28px';Object.assign(bar.style,{left:Math.max(8,Math.min(rect.x+rect.width-280,innerWidth-288))+'px',top:Math.max(8,Math.min(rect.y+rect.height+10,innerHeight-54))+'px'});}
 async function submit(){if(!rect||busy)return;const r=pixels();if(r.width<2||r.height<2){hint.textContent='选区太小，请重新框选';return;}busy=true;confirm.disabled=true;try{await window.tools.invoke('crop',id,r);}catch(e){hint.textContent=e.message;busy=false;confirm.disabled=false;}}
 const confirm=make('button','✓ 确认截图'),reset=make('button','重新选择'),cancel=make('button','取消');confirm.onclick=submit;reset.onclick=()=>{if(busy)return;rect=null;bar.hidden=true;paint();};cancel.onclick=()=>{if(!busy)window.tools.invoke('cancel-crop');};bar.append(confirm,reset,cancel);
 await img.decode();
 document.onpointerdown=e=>{if(e.button!==0||busy||bar.contains(e.target))return;const p=point(e);if(e.target.dataset.corner&&rect){const c=e.target.dataset.corner;drag={kind:'resize',anchor:{x:c.includes('w')?rect.x+rect.width:rect.x,y:c.includes('n')?rect.y+rect.height:rect.y}};}else if(box.contains(e.target)&&rect){drag={kind:'move',start:p,old:{...rect}};}else{drag={kind:'resize',anchor:p};rect={x:p.x,y:p.y,width:0,height:0};}bar.hidden=true;document.body.setPointerCapture?.(e.pointerId);paint();};
 document.onpointermove=e=>{if(!drag||busy)return;const p=point(e);if(drag.kind==='move'){rect={...drag.old,x:Math.max(0,Math.min(innerWidth-drag.old.width,drag.old.x+p.x-drag.start.x)),y:Math.max(0,Math.min(innerHeight-drag.old.height,drag.old.y+p.y-drag.start.y))};}else{const a=drag.anchor;rect={x:Math.min(a.x,p.x),y:Math.min(a.y,p.y),width:Math.abs(a.x-p.x),height:Math.abs(a.y-p.y)};}paint();};
 document.onpointerup=()=>{if(!drag)return;drag=null;if(rect.width<2||rect.height<2)rect=null;bar.hidden=!rect;paint();hint.textContent=`屏幕 ${display||1} · 亮色区域将被截取 · 可拖动选区或四角调整 · Enter 确认`;} ;
 document.onkeydown=e=>{if(e.key==='Escape')cancel.click();if(e.key==='Enter'){e.preventDefault();submit();}};
};
