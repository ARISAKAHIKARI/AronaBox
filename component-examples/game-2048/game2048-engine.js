'use strict';
class Game2048 {
 constructor(random=Math.random){this.random=random;this.cells=Array(16).fill(0);this.score=0;this.lastMove=null;this.spawn();this.spawn();}
 spawn(){const empty=this.cells.map((v,i)=>v?null:i).filter(i=>i!==null);if(!empty.length)return null;const index=empty[Math.floor(this.random()*empty.length)];this.cells[index]=this.random()<.9?2:4;return index;}
 move(direction){this.lastMove=null;if(!['left','right','up','down'].includes(direction))return false;const before=this.cells.slice(),movements=[],merged=[];
 for(let lane=0;lane<4;lane++){const ids=Array.from({length:4},(_,i)=>direction==='left'||direction==='right'?lane*4+i:i*4+lane);if(direction==='right'||direction==='down')ids.reverse();const entries=ids.filter(i=>before[i]).map(i=>({from:i,value:before[i]})),out=[];
 for(let i=0;i<entries.length;i++){const a=entries[i],to=ids[out.length];movements.push({...a,to});if(a.value===entries[i+1]?.value){movements.push({...entries[++i],to});out.push(a.value*2);this.score+=a.value*2;merged.push(to);}else out.push(a.value);}
 ids.forEach((id,i)=>this.cells[id]=out[i]||0);}
 const changed=this.cells.some((v,i)=>v!==before[i]);if(changed)this.lastMove={movements,merged,spawned:this.spawn()};return changed;}
 get over(){return !this.cells.some((v,i)=>!v||(i%4<3&&v===this.cells[i+1])||(i<12&&v===this.cells[i+4]));}
 get won(){return this.cells.some(v=>v>=2048);}
}
if(typeof module!=='undefined')module.exports=Game2048;else window.Game2048=Game2048;
