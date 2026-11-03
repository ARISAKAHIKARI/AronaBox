import * as THREE from 'three';
const $=s=>document.querySelector(s),game=new window.Pinball();let paused=false,chargeStart=0,best=0;
try{best=Number(localStorage.getItem('arona-pinball-best'))||0;}catch{}
const scene=new THREE.Scene();scene.background=new THREE.Color('#070d20');
const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,23,9);camera.lookAt(0,0,-8.5);
let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));$('#table').append(renderer.domElement);}catch{$('#status').textContent='无法启动 WebGL，请检查显卡驱动或硬件加速。';throw Error('WebGL unavailable');}
scene.add(new THREE.HemisphereLight(0xbbeeff,0x151329,2));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(-4,12,2);scene.add(light);
function mesh(geometry,color,x,y,z,metalness=.2){const m=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,metalness,roughness:.3}));m.position.set(x,y,z);scene.add(m);return m;}
mesh(new THREE.BoxGeometry(10,.45,18.8),0x10284b,0,-.35,-8.7);
function bar(x1,y1,x2,y2,color=0x57cbea,width=.16,height=.45){const m=mesh(new THREE.BoxGeometry(Math.hypot(x2-x1,y2-y1),height,width),color,(x1+x2)/2,.15,-(y1+y2)/2);m.rotation.y=Math.atan2(y2-y1,x2-x1);return m;}
for(const r of game.rails)bar(...r);
for(const [x,y]of game.bumpers){mesh(new THREE.CylinderGeometry(.7,.8,.65,32),0x36c7e8,x,.4,-y);mesh(new THREE.TorusGeometry(.65,.09,8,32),0xff7aca,x,.79,-y).rotation.x=Math.PI/2;}
const flippers=[bar(-2.3,2.2,-.3,2.2,0xffba6b,.38,.35),bar(2.3,2.2,.3,2.2,0xffba6b,.38,.35)];
const ball=mesh(new THREE.SphereGeometry(.23,24,16),0xffffff,4.2,.3,-1,.9);
// Original space decoration, no Microsoft artwork.
for(let i=0;i<70;i++){const x=Math.sin(i*127.1)*3.6,y=4+(Math.sin(i*311.7)+1)*6;mesh(new THREE.SphereGeometry(i%7===0?.045:.022,6,4),0x7cbbda,x,-.1,-y);}
for(const [x,y]of [[-3,10],[2.7,10],[0,8]]){mesh(new THREE.TorusGeometry(.45,.035,8,32),0x366cad,x,-.08,-y).rotation.x=Math.PI/2;}
const resize=()=>{const el=$('#table');camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();renderer.setSize(el.clientWidth,el.clientHeight,false);};new ResizeObserver(resize).observe($('#table'));resize();
function setPaused(v){paused=v;chargeStart=0;game.left=game.right=false;$('#pause').textContent=paused?'继续 P':'暂停 P';}
function charge(){if(!paused&&game.waiting&&!game.over&&!chargeStart)chargeStart=performance.now();}
function release(){if(chargeStart&&!paused){game.launch(Math.min(1,(performance.now()-chargeStart)/1100));}chargeStart=0;}
const keys=new Set();addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight',' ','z','Z','/','p','P'].includes(e.key))e.preventDefault();if(e.repeat)return;keys.add(e.key);if(e.key==='ArrowLeft'||e.key.toLowerCase()==='z')game.left=true;if(e.key==='ArrowRight'||e.key==='/')game.right=true;if(e.key===' ')charge();if(e.key.toLowerCase()==='p')setPaused(!paused);});
addEventListener('keyup',e=>{keys.delete(e.key);if(e.key==='ArrowLeft'||e.key.toLowerCase()==='z')game.left=false;if(e.key==='ArrowRight'||e.key==='/')game.right=false;if(e.key===' ')release();});
for(const side of ['left','right']){const el=$('#'+side);el.onpointerdown=e=>{el.setPointerCapture(e.pointerId);game[side]=true;};el.onpointerup=el.onpointercancel=()=>game[side]=false;}
$('#launch').onpointerdown=e=>{$('#launch').setPointerCapture(e.pointerId);charge();};$('#launch').onpointerup=release;$('#launch').onpointercancel=()=>chargeStart=0;
$('#pause').onclick=()=>setPaused(!paused);$('#restart').onclick=()=>{if(confirm('重新开始三球挑战？')){game.reset();setPaused(false);}};addEventListener('blur',()=>setPaused(true));document.addEventListener('visibilitychange',()=>{if(document.hidden)setPaused(true);});
let previous=performance.now();function frame(now){requestAnimationFrame(frame);const dt=Math.min(.05,(now-previous)/1000);previous=now;if(!paused)game.step(dt);ball.position.set(game.ball.x,.3,-game.ball.y);
for(let i=0;i<2;i++){const a=game.angles[i],x=i===0?-2.3:2.3;flippers[i].position.set(x+Math.cos(a),.2,-2.2-Math.sin(a));flippers[i].rotation.y=a;}
if(game.score>best){best=game.score;try{localStorage.setItem('arona-pinball-best',String(best));}catch{}}
$('#score').textContent=game.score;$('#best').textContent=best;$('#lives').textContent=game.lives;$('#status').textContent=paused?'已暂停':game.over?'三球结束，重新开始挑战吧':game.waiting?(chargeStart?`蓄力 ${Math.min(100,Math.round((now-chargeStart)/11))}%`:'按住空格或中间按钮，松开发射'):'左右挡板接球 · 碰撞能量柱 +100';renderer.render(scene,camera);}
requestAnimationFrame(frame);
