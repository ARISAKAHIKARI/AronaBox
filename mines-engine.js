(function(root){
'use strict';
class MinesGame {
  constructor(size=9,mines=10,random=Math.random){
    if(!Number.isInteger(size)||size<5||size>24||!Number.isInteger(mines)||mines<1||mines>size*size-9)throw new Error('Invalid board');
    this.size=size;this.mineCount=mines;this.random=random;this.status='ready';this.flags=0;this.opened=0;this.exploded=-1;
    this.cells=Array.from({length:size*size},()=>({mine:false,near:0,open:false,flag:false}));
  }
  neighbors(i){const r=Math.floor(i/this.size),c=i%this.size,out=[];for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){const rr=r+dr,cc=c+dc;if((dr||dc)&&rr>=0&&rr<this.size&&cc>=0&&cc<this.size)out.push(rr*this.size+cc);}return out;}
  place(first){const safe=new Set([first,...this.neighbors(first)]),pool=this.cells.map((_,i)=>i).filter(i=>!safe.has(i));for(let i=pool.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}for(const i of pool.slice(0,this.mineCount))this.cells[i].mine=true;for(let i=0;i<this.cells.length;i++)this.cells[i].near=this.neighbors(i).filter(j=>this.cells[j].mine).length;this.status='playing';}
  flag(i){const c=this.cells[i];if(!c||c.open||['won','lost'].includes(this.status))return;if(c.flag){c.flag=false;this.flags--;}else if(this.flags<this.mineCount){c.flag=true;this.flags++;}}
  reveal(i){const cell=this.cells[i];if(!cell||cell.open||cell.flag||['won','lost'].includes(this.status))return;if(this.status==='ready')this.place(i);if(cell.mine){cell.open=true;this.exploded=i;this.status='lost';return;}const stack=[i];while(stack.length){const j=stack.pop(),c=this.cells[j];if(c.open||c.flag||c.mine)continue;c.open=true;this.opened++;if(c.near===0)stack.push(...this.neighbors(j));}if(this.opened===this.cells.length-this.mineCount){this.status='won';for(const c of this.cells)if(c.mine)c.flag=true;this.flags=this.mineCount;}}
}
if(typeof module!=='undefined'&&module.exports)module.exports={MinesGame};else root.MinesGame=MinesGame;
})(typeof globalThis!=='undefined'?globalThis:this);
