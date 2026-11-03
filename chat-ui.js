'use strict';
window.ChatUI={
 content(node,text){if(window.ChatMarkdown)ChatMarkdown.render(node,text);else node.textContent=text;},
 skin(node,settings){
  const entry=window.PetSkins.resolve(settings);node._petSettings={...settings};node.dataset.character=entry?.character||'';
  node.classList.toggle('custom',!!settings.skin&&!['atlas6','atlas12'].includes(settings.skinLayout));node.classList.remove('plana-swimsuit-fit');node.classList.toggle('atlas12',!!entry||settings.skinLayout==='atlas12');
  window.MMDPet?.sync(node,settings);const source=settings.skin||entry?.file||'';if(node.dataset.skinSource!==source){node.dataset.mood='idle';node.dataset.skinSource=source;}node.style.backgroundImage=source?`url(${JSON.stringify(source)})`:'';
  if(!node._poseObserver){node._poseObserver=new MutationObserver(()=>this.frame(node));node._poseObserver.observe(node,{attributes:true,attributeFilter:['data-mood']});}
  this.frame(node);
 },
 frame(node){const s=node._petSettings||{},entry=window.PetSkins.resolve(s);if(!entry){node.querySelector('.skin-frame')?.remove();node.style.removeProperty('background-position');return;}
 const mood=window.PetSkins.pose(s,node.dataset.mood),frame=entry.frames[mood],meta=window.SkinFrames?.[entry.id];if(!meta)return;
 const ns='http://www.w3.org/2000/svg';let svg=node.querySelector('.skin-frame');if(!svg){svg=document.createElementNS(ns,'svg');svg.classList.add('skin-frame');svg.setAttribute('aria-hidden','true');const defs=document.createElementNS(ns,'defs'),clip=document.createElementNS(ns,'clipPath'),rect=document.createElementNS(ns,'rect'),img=document.createElementNS(ns,'image');clip.id='skin-clip-'+(++this.clipId);clip.setAttribute('clipPathUnits','userSpaceOnUse');clip.append(rect);defs.append(clip);img.setAttribute('clip-path',`url(#${clip.id})`);svg.append(defs,img);node.append(svg);}
 const poseKey=entry.id+':'+frame;const changed=node._renderedPose&&node._renderedPose!==poseKey;node._renderedPose=poseKey;const [x,y,w,h]=meta.frames[frame];svg.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);svg.setAttribute('preserveAspectRatio','xMidYMid meet');const rect=svg.querySelector('rect');for(const [k,v]of Object.entries({x,y,width:w,height:h}))rect.setAttribute(k,v);const img=svg.querySelector('image');img.setAttribute('href',entry.file);img.setAttribute('width',meta.width);img.setAttribute('height',meta.height);node.style.backgroundImage='none';if(changed&&svg.animate&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){node._poseAnimation?.cancel();node._poseAnimation=svg.animate([{opacity:.35,transform:'translateY(1px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'ease-out'});}
 },
 clipId:0,
 labels:{codeagent:'Claude Code',chatgpt:'ChatGPT',doubao:'无线豆包',gemini:'Gemini',deepseek:'DeepSeek'},
 author(node,m,state){const user=m.role==='user';const settings=state.settings;const avatar=document.createElement('span');avatar.className='chat-avatar';const url=user?settings.userAvatar:settings.petAvatar;if(url){const img=document.createElement('img');img.src=url;img.alt='';avatar.append(img);}else avatar.textContent=user?'☺':'✦';const name=document.createElement('span');name.className='chat-author-name';name.hidden=user;name.textContent=user?(settings.userName||'老师'):(settings.petName||'阿罗娜')+' · '+(this.labels[m.provider||state.provider]||'codeagent');node.append(avatar,name);},
 providerSelect(el,state){el.replaceChildren();for(const p of state.providers||Object.entries(this.labels).map(([id,label])=>({id,label}))){const o=document.createElement('option');o.value=p.id;o.textContent=p.label+(p.busy?' · 回复中':'');el.append(o);}el.value=state.provider||'codeagent';},
 fill(id,value){const el=document.querySelector(id);if(el&&document.activeElement!==el)el.value=value||'';}
};
