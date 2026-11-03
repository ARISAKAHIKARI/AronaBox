'use strict';
class Pinball {
 constructor(){this.reset();}
 reset(){this.score=0;this.lives=3;this.over=false;this.left=false;this.right=false;this.angles=[-.35,Math.PI+.35];this.bumpers=[[-1.8,12],[1.4,12.2],[0,14.5]];this.rails=[[-4.6,0,-4.6,17.7],[4.6,0,4.6,17.7],[-4.6,17.7,4.6,17.7],[3.8,0,3.8,15.5],[-4.6,5,-2.3,2.2],[3.8,5,2.3,2.2],[-3.5,8,-2.7,5],[2.9,8,2.4,5]];this.serve();}
 serve(){this.ball={x:4.2,y:1,vx:0,vy:0};this.waiting=true;}
 launch(charge=1){if(!this.waiting||this.over)return;this.waiting=false;this.ball.vy=17+8*Math.max(0,Math.min(1,charge));}
 segment(x1,y1,x2,y2,r=.1,kick=0){const b=this.ball,dx=x2-x1,dy=y2-y1,t=Math.max(0,Math.min(1,((b.x-x1)*dx+(b.y-y1)*dy)/(dx*dx+dy*dy))),px=x1+t*dx,py=y1+t*dy,dist=Math.hypot(b.x-px,b.y-py),limit=.23+r;if(dist>=limit)return false;let nx=(b.x-px)/(dist||1),ny=(b.y-py)/(dist||1);if(dist<.0001){nx=0;ny=1;}b.x=px+nx*limit;b.y=py+ny*limit;const dot=b.vx*nx+b.vy*ny;if(dot<0){b.vx-=1.8*dot*nx;b.vy-=1.8*dot*ny;}if(kick){b.vy=Math.max(b.vy,12+kick);b.vx+=(x1<0?1:-1)*3;}return true;}
 step(dt){if(this.waiting||this.over)return;const count=Math.ceil(Math.min(.05,Math.max(0,dt))*240);if(!count)return;const h=Math.min(dt,.05)/count;
 for(let n=0;n<count;n++){const b=this.ball;b.vy-=7*h;b.x+=b.vx*h;b.y+=b.vy*h;
 // The launch lane bends into the field at the top.
 if(b.x>3.8&&b.y>16.6){b.vx=-8;b.vy=Math.min(b.vy,2);}
 for(const rail of this.rails)this.segment(...rail);
 for(let i=0;i<2;i++){const active=i===0?this.left:this.right,target=i===0?(active?.48:-.35):(active?Math.PI-.48:Math.PI+.35),old=this.angles[i];this.angles[i]+=Math.max(-12*h,Math.min(12*h,target-old));const x=i===0?-2.3:2.3,a=this.angles[i];this.segment(x,2.2,x+Math.cos(a)*2.0,2.2+Math.sin(a)*2.0,.17,active&&Math.abs(target-old)>.01?2:0);}
 for(const [x,y]of this.bumpers){const dx=b.x-x,dy=b.y-y,d=Math.hypot(dx,dy),r=.93;if(d<r){const nx=dx/(d||1),ny=dy/(d||1);b.x=x+nx*r;b.y=y+ny*r;const dot=b.vx*nx+b.vy*ny;if(dot<0){b.vx-=(2*dot-5)*nx;b.vy-=(2*dot-5)*ny;this.score+=100;}}}
 const speed=Math.hypot(b.vx,b.vy);if(speed>32){b.vx*=32/speed;b.vy*=32/speed;}
 if(b.y<-.6){this.lives--;if(this.lives<=0){this.over=true;}else this.serve();return;}
 }}
}
if(typeof module!=='undefined')module.exports=Pinball;else window.Pinball=Pinball;
