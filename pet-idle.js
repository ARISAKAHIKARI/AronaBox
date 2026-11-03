'use strict';
// Only OS inactivity is received; no keyboard content or screen inspection.
window.PetIdle={until:new WeakMap(),touch(node,ms=8000){this.until.set(node,Date.now()+ms);}};
let presence={mode:'active',seconds:0};
const idleStates=new WeakMap(),range=(a,b)=>a+Math.random()*(b-a);
const calmActions=['study','plush','flower','shell','juice','notes','game','story','sketch','showart','quest','data','cake','draw','milk','tablet','organize','tea','book','drink','cocoa','scarf'];
window.desk.on('presence',value=>{presence=value;});
setInterval(()=>{
 const node=document.querySelector('#pet-character,#mascot');if(!node)return;
 const now=Date.now(),mode=presence.mode;node.dataset.presence=mode;
 let state=idleStates.get(node);if(!state){state={mode,next:now+range(14000,24000),phase:'rest',last:null};idleStates.set(node,state);}
 const stop=document.querySelector('#pet-stop,#stop');
 if((stop&&!stop.hidden)||now<(PetIdle.until.get(node)||0)){state.interrupted=true;return;}
 const setMood=mood=>{if(node.dataset.mood!==mood)node.dataset.mood=mood;};
 if(state.interrupted){state.interrupted=false;state.phase='rest';state.next=now+range(12000,18000);setMood('idle');}
 if(mode==='sleep'){setMood('sleep');state.mode=mode;state.phase='rest';return;}
 if(state.mode!=='active'&&mode==='active'){setMood('wave');state.mode=mode;state.phase='gesture';state.next=now+4500;return;}
 if(state.mode!==mode){state.mode=mode;state.next=now+range(4000,7000);}
 if(now<state.next)return;
 if(state.phase==='gesture'){
  setMood('idle');const variants=['breathe','look','sway'];node.dataset.idleVariant=variants[Math.floor(Math.random()*variants.length)];
  state.phase='rest';state.next=now+range(mode==='away'?9000:16000,mode==='away'?16000:28000);return;
 }
 const available=window.PetSkins.actions(node._petSettings||{});
 const choices=calmActions.filter(k=>available[k]&&k!==state.last);
 if(choices.length&&(mode==='away'||Math.random()<.65)){
  const mood=choices[Math.floor(Math.random()*choices.length)];setMood(mood);state.last=mood;state.phase='gesture';state.next=now+range(6500,11000);
 }else{setMood('idle');node.dataset.idleVariant=['breathe','look','sway'][Math.floor(Math.random()*3)];state.next=now+range(15000,25000);}
},1000);
