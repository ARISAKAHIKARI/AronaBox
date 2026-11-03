(()=>{var uo="160";var l3=0,$o=1,c3=2;var Pc=1,h3=2,an=3,Ze=0,we=1,Oe=2;var bn=0,yi=1,jo=2,tl=3,el=4,fo=5,Vn=100,u3=101,d3=102,nl=103,il=104,f3=200,p3=201,m3=202,g3=203,bi=204,qi=205,po=206,_3=207,x3=208,v3=209,y3=210,M3=211,S3=212,b3=213,A3=214,E3=0,T3=1,w3=2,Hs=3,C3=4,R3=5,P3=6,I3=7,Jn=0,L3=1,Ii=2,An=0,U3=1,D3=2,N3=3,F3=4,O3=5,B3=6,sl="attached",z3="detached",Ic=300,Ai=301,Ei=302,Ta=303,wa=304,Pr=306,Ti=1e3,Ue=1001,Ca=1002,le=1003,rl=1004;var Xr=1005;var Ee=1006,k3=1007;var Tn=1008;var En=1009,V3=1010,H3=1011,mo=1012,Lc=1013,Sn=1014,ln=1015,Yi=1016,Uc=1017,Dc=1018,Gn=1020,G3=1021,Be=1023,W3=1024,X3=1025,Wn=1026,wi=1027,q3=1028,Nc=1029,Y3=1030,Fc=1031,Oc=1033,zi=33776,qr=33777,Yr=33778,Zr=33779,Gs=35840,Ws=35841,al=35842,ol=35843,Ir=36196,Xs=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,Jr=36492,bl=36494,Al=36495,Z3=36283,El=36284,Tl=36285,wl=36286,J3=2200,K3=2201,Q3=2202,qs=2300,Ys=2301,Kr=2302,pi=2400,mi=2401,Zs=2402,go=2500,$3=2501;var Bc=3e3,Xn=3001,j3=3200,th=3201,_o=0,eh=1,ze="",Qt="srgb",hn="srgb-linear",xo="display-p3",Lr="display-p3-linear",Js="linear",Jt="srgb",Ks="rec709",Qs="p3";var Qn=7680;var Cl=519,nh=512,ih=513,sh=514,zc=515,rh=516,ah=517,oh=518,lh=519,Rl=35044;var Pl="300 es",Ra=1035,cn=2e3,$s=2001,un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=1234567,ki=Math.PI/180,Zi=180/Math.PI;function Ln(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function pe(s,t,e){return Math.max(t,Math.min(e,s))}function vo(s,t){return(s%t+t)%t}function ch(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function hh(s,t,e){return s!==t?(e-s)/(t-s):0}function Vi(s,t,e){return(1-e)*s+e*t}function uh(s,t,e,n){return Vi(s,t,1-Math.exp(-e*n))}function dh(s,t=1){return t-Math.abs(vo(s,t*2)-t)}function fh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ph(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function mh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function gh(s,t){return s+Math.random()*(t-s)}function _h(s){return s*(.5-Math.random())}function xh(s){s!==void 0&&(Il=s);let t=Il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vh(s){return s*ki}function yh(s){return s*Zi}function Pa(s){return(s&s-1)===0&&s!==0}function Mh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sh(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var kc={DEG2RAD:ki,RAD2DEG:Zi,generateUUID:Ln,clamp:pe,euclideanModulo:vo,mapLinear:ch,inverseLerp:hh,lerp:Vi,damp:uh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:xh,degToRad:vh,radToDeg:yh,isPowerOfTwo:Pa,ceilPowerOfTwo:Mh,floorPowerOfTwo:js,setQuaternionFromProperEuler:Sh,normalize:be,denormalize:fi},pt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],M=i[1],x=i[4],A=i[7],S=i[2],v=i[5],b=i[8];return r[0]=a*_+o*M+l*S,r[3]=a*p+o*x+l*v,r[6]=a*u+o*A+l*b,r[1]=c*_+h*M+d*S,r[4]=c*p+h*x+d*v,r[7]=c*u+h*A+d*b,r[2]=f*_+m*M+g*S,r[5]=f*p+m*x+g*v,r[8]=f*u+m*A+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new zt;function Vc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ji(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bh(){let s=Ji("canvas");return s.style.display="block",s}var Ll={};function Hi(s){s in Ll||(Ll[s]=!0,console.warn(s))}var Ul=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dl=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[hn]:{transfer:Js,primaries:Ks,toReference:s=>s,fromReference:s=>s},[Qt]:{transfer:Jt,primaries:Ks,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Lr]:{transfer:Js,primaries:Qs,toReference:s=>s.applyMatrix3(Dl),fromReference:s=>s.applyMatrix3(Ul)},[xo]:{transfer:Jt,primaries:Qs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dl),fromReference:s=>s.applyMatrix3(Ul).convertLinearToSRGB()}},Ah=new Set([hn,Lr]),Xt={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ah.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=gs[t].toReference,i=gs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return gs[s].primaries},getTransfer:function(s){return s===ze?Js:gs[s].transfer}};function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $n,tr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Ji("canvas")),$n.width=t.width,$n.height=t.height;let n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ji("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eh=0,er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Th=0,De=class s extends un{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ue,i=Ue,r=Ee,a=Tn,o=Be,l=En,c=s.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ln(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xn?Qt:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Xn:Bc}set encoding(t){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Xn?Qt:ze}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ic;De.DEFAULT_ANISOTROPY=1;var ae=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,A=(m+1)/2,S=(u+1)/2,v=(h+f)/4,b=(d+_)/4,R=(g+p)/4;return x>A&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=v/n,r=b/n):A>S?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=v/i,r=R/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=b/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xn?Qt:ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-o,u=l*f+c*m+h*g+d*_,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let S=Math.sqrt(x),v=Math.atan2(S,u*M);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S}let A=o*M;if(l=l*p+f*A,c=c*p+m*A,h=h*p+g*A,d=d*p+_*A,p===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-o*m,t[e+2]=c*g+h*m+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new P,Nl=new $t,Je=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),xs.subVectors(this.max,Ni),jn.subVectors(t.a,Ni),ti.subVectors(t.b,Ni),ei.subVectors(t.c,Ni),_n.subVectors(ti,jn),xn.subVectors(ei,ti),Fn.subVectors(jn,ei);let e=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Fn.z,Fn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Fn.z,0,-Fn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Fn.y,Fn.x,0];return!ea(e,jn,ti,ei,xs)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,jn,ti,ei,xs))?!1:(vs.crossVectors(_n,xn),e=[vs.x,vs.y,vs.z],ea(e,jn,ti,ei,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},je=[new P,new P,new P,new P,new P,new P,new P,new P],Ge=new P,_s=new Je,jn=new P,ti=new P,ei=new P,_n=new P,xn=new P,Fn=new P,Ni=new P,xs=new P,vs=new P,On=new P;function ea(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){On.fromArray(s,r);let o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wh=new Je,Fi=new P,na=new P,wn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);let e=Fi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(na)),this.expandByPoint(Fi.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new P,ia=new P,ys=new P,vn=new P,sa=new P,Ms=new P,ra=new P,Ki=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=vn.dot(this.direction),l=-vn.dot(ys),c=vn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ia).addScaledVector(ys,f),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);let n=tn.dot(this.direction),i=tn.dot(tn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,r){sa.subVectors(e,t),Ms.subVectors(n,t),ra.crossVectors(sa,Ms);let a=this.direction.dot(ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);let l=o*this.direction.dot(Ms.crossVectors(vn,Ms));if(l<0)return null;let c=o*this.direction.dot(sa.cross(vn));if(c<0||l+c>a)return null;let h=-o*vn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class s{constructor(t,e,n,i,r,a,o,l,c,h,d,f,m,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,f,m,g,_,p)}set(t,e,n,i,r,a,o,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),a=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ch,t,Rh)}lookAt(t,e,n){let i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),yn.crossVectors(n,Ie),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),yn.crossVectors(n,Ie)),yn.normalize(),Ss.crossVectors(Ie,yn),i[0]=yn.x,i[4]=Ss.x,i[8]=Ie.x,i[1]=yn.y,i[5]=Ss.y,i[9]=Ie.y,i[2]=yn.z,i[6]=Ss.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],M=n[3],x=n[7],A=n[11],S=n[15],v=i[0],b=i[4],R=i[8],y=i[12],w=i[1],G=i[5],Q=i[9],st=i[13],L=i[2],V=i[6],U=i[10],q=i[14],X=i[3],H=i[7],K=i[11],Z=i[15];return r[0]=a*v+o*w+l*L+c*X,r[4]=a*b+o*G+l*V+c*H,r[8]=a*R+o*Q+l*U+c*K,r[12]=a*y+o*st+l*q+c*Z,r[1]=h*v+d*w+f*L+m*X,r[5]=h*b+d*G+f*V+m*H,r[9]=h*R+d*Q+f*U+m*K,r[13]=h*y+d*st+f*q+m*Z,r[2]=g*v+_*w+p*L+u*X,r[6]=g*b+_*G+p*V+u*H,r[10]=g*R+_*Q+p*U+u*K,r[14]=g*y+_*st+p*q+u*Z,r[3]=M*v+x*w+A*L+S*X,r[7]=M*b+x*G+A*V+S*H,r[11]=M*R+x*Q+A*U+S*K,r[15]=M*y+x*st+A*q+S*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-i*o*h-e*l*d+e*o*f+i*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],M=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,A=h*_*c-g*d*c+g*o*m-a*_*m-h*o*u+a*d*u,S=g*d*l-h*_*l-g*o*f+a*_*f+h*o*p-a*d*p,v=e*M+n*x+i*A+r*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=M*b,t[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*b,t[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*u+n*l*u)*b,t[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*m-n*l*m)*b,t[4]=x*b,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*u+e*f*u)*b,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*u-e*l*u)*b,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*m+e*l*m)*b,t[8]=A*b,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*b,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*u+e*o*u)*b,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*b,t[12]=S*b,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*p+e*d*p)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,M=l*c,x=l*h,A=l*d,S=n.x,v=n.y,b=n.z;return i[0]=(1-(_+u))*S,i[1]=(m+A)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(m-A)*v,i[5]=(1-(f+u))*v,i[6]=(p+M)*v,i[7]=0,i[8]=(g+x)*b,i[9]=(p-M)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ni.set(i[0],i[1],i[2]).length(),a=ni.set(i[4],i[5],i[6]).length(),o=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],We.copy(this);let c=1/r,h=1/a,d=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=cn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,g;if(o===cn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$s)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=cn){let l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*c,m=(n+i)*h,g,_;if(o===cn)g=(a+r)*d,_=-2*d;else if(o===$s)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ni=new P,We=new Vt,Ch=new P(0,0,0),Rh=new P(1,1,1),yn=new P,Ss=new P,Ie=new P,Fl=new Vt,Ol=new $t,Cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ph=0,Bl=new P,ii=new $t,en=new Vt,bs=new P,Oi=new P,Ih=new P,Lh=new $t,zl=new P(1,0,0),kl=new P(0,1,0),Vl=new P(0,0,1),Uh={type:"added"},Dh={type:"removed"},ee=class s extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Cn,n=new $t,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new zt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Oi,bs,this.up):en.lookAt(bs,Oi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(en),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ee.DEFAULT_UP=new P(0,1,0);ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new P,nn=new P,aa=new P,sn=new P,si=new P,ri=new P,Hl=new P,oa=new P,la=new P,ca=new P,As=!1,gi=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xe.subVectors(i,e),nn.subVectors(n,e),aa.subVectors(t,e);let a=Xe.dot(Xe),o=Xe.dot(nn),l=Xe.dot(aa),c=nn.dot(nn),h=nn.dot(aa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,n,i,r,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),nn.subVectors(t,e),Xe.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Xe.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;si.subVectors(i,n),ri.subVectors(r,n),oa.subVectors(t,n);let l=si.dot(oa),c=ri.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,i);let h=si.dot(la),d=ri.dot(la);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(si,a);ca.subVectors(t,r);let m=si.dot(ca),g=ri.dot(ca);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ri,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Hl.subVectors(r,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Hl,o);let u=1/(p+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=vo(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){let n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return Xt.fromWorkingColorSpace(xe.copy(this),t),Math.round(pe(xe.r*255,0,255))*65536+Math.round(pe(xe.g*255,0,255))*256+Math.round(pe(xe.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(xe.copy(this),e);let n=xe.r,i=xe.g,r=xe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Qt){Xt.fromWorkingColorSpace(xe.copy(this),t);let e=xe.r,n=xe.g,i=xe.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Es);let n=Vi(Mn.h,Es.h,e),i=Vi(Mn.s,Es.s,e),r=Vi(Mn.l,Es.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xe=new Tt;Tt.NAMES=Hc;var Nh=0,qn=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=yi,this.side=Ze,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bi,this.blendDst=qi,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Ze&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bi&&(n.blendSrc=this.blendSrc),this.blendDst!==qi&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ke=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var oe=new P,Ts=new pt,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}};var Ci=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Fh=0,Fe=new Vt,ua=new ee,ai=new P,Le=new Je,Bi=new Je,fe=new P,Re=class s extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?sr:Ci)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Le.min,Bi.min),Le.expandByPoint(fe),fe.addVectors(Le.max,Bi.max),Le.expandByPoint(fe)):(Le.expandByPoint(Bi.min),Le.expandByPoint(Bi.max))}Le.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(t,c),fe.add(ai)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new P,h[w]=new P;let d=new P,f=new P,m=new P,g=new pt,_=new pt,p=new pt,u=new P,M=new P;function x(w,G,Q){d.fromArray(i,w*3),f.fromArray(i,G*3),m.fromArray(i,Q*3),g.fromArray(a,w*2),_.fromArray(a,G*2),p.fromArray(a,Q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);let st=1/(_.x*p.y-p.x*_.y);isFinite(st)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(st),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(st),c[w].add(u),c[G].add(u),c[Q].add(u),h[w].add(M),h[G].add(M),h[Q].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let w=0,G=A.length;w<G;++w){let Q=A[w],st=Q.start,L=Q.count;for(let V=st,U=st+L;V<U;V+=3)x(n[V+0],n[V+1],n[V+2])}let S=new P,v=new P,b=new P,R=new P;function y(w){b.fromArray(r,w*3),R.copy(b);let G=c[w];S.copy(G),S.sub(b.multiplyScalar(b.dot(G))).normalize(),v.crossVectors(R,G);let st=v.dot(h[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=st}for(let w=0,G=A.length;w<G;++w){let Q=A[w],st=Q.start,L=Q.count;for(let V=st,U=st+L;V<U;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Ce(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=new Vt,Bn=new Ki,ws=new wn,Wl=new P,oi=new P,li=new P,ci=new P,da=new P,Cs=new P,Rs=new pt,Ps=new pt,Is=new pt,Xl=new P,ql=new P,Yl=new P,Ls=new P,Us=new P,me=class extends ee{constructor(t=new Re,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(da.fromBufferAttribute(d,t),a?Cs.addScaledVector(da,h):Cs.addScaledVector(da.sub(e),h))}e.add(Cs)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(ws.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ws,Wl)===null||Bn.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,S=x;A<S;A+=3){let v=o.getX(A),b=o.getX(A+1),R=o.getX(A+2);i=Ds(this,u,t,n,c,h,d,v,b,R),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let M=o.getX(p),x=o.getX(p+1),A=o.getX(p+2);i=Ds(this,a,t,n,c,h,d,M,x,A),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,S=x;A<S;A+=3){let v=A,b=A+1,R=A+2;i=Ds(this,u,t,n,c,h,d,v,b,R),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let M=p,x=p+1,A=p+2;i=Ds(this,a,t,n,c,h,d,M,x,A),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Oh(s,t,e,n,i,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ze,o),l===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:s}}function Ds(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,oi),s.getVertexPosition(l,li),s.getVertexPosition(c,ci);let h=Oh(s,t,e,n,oi,li,ci,Ls);if(h){i&&(Rs.fromBufferAttribute(i,o),Ps.fromBufferAttribute(i,l),Is.fromBufferAttribute(i,c),h.uv=gi.getInterpolation(Ls,oi,li,ci,Rs,Ps,Is,new pt)),r&&(Rs.fromBufferAttribute(r,o),Ps.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),h.uv1=gi.getInterpolation(Ls,oi,li,ci,Rs,Ps,Is,new pt),h.uv2=h.uv1),a&&(Xl.fromBufferAttribute(a,o),ql.fromBufferAttribute(a,l),Yl.fromBufferAttribute(a,c),h.normal=gi.getInterpolation(Ls,oi,li,ci,Xl,ql,Yl,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};gi.getNormal(oi,li,ci,d.normal),h.face=d}return h}var Yn=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,p,u,M,x,A,S,v,b,R,y){let w=A/b,G=S/R,Q=A/2,st=S/2,L=v/2,V=b+1,U=R+1,q=0,X=0,H=new P;for(let K=0;K<U;K++){let Z=K*G-st;for(let et=0;et<V;et++){let D=et*w-Q;H[_]=D*M,H[p]=Z*x,H[u]=L,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[u]=v>0?1:-1,h.push(H.x,H.y,H.z),d.push(et/b),d.push(1-K/R),q+=1}}for(let K=0;K<R;K++)for(let Z=0;Z<b;Z++){let et=f+Z+V*K,D=f+Z+V*(K+1),B=f+(Z+1)+V*(K+1),Y=f+(Z+1)+V*K;l.push(et,D,Y),l.push(D,B,Y),X+=6}o.addGroup(m,X,y),m+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ri(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){let t={};for(let e=0;e<s.length;e++){let n=Ri(s[e]);for(let i in n)t[i]=n[i]}return t}function Bh(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gc(s){return s.getRenderTarget()===null?s.outputColorSpace:Xt.workingColorSpace}var ss={clone:Ri,merge:Ae},zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rr=class extends ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Te=class extends rr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hi=-90,ui=1,Ua=class extends ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Te(hi,ui,t,e);i.layers=this.layers,this.add(i);let r=new Te(hi,ui,t,e);r.layers=this.layers,this.add(r);let a=new Te(hi,ui,t,e);a.layers=this.layers,this.add(a);let o=new Te(hi,ui,t,e);o.layers=this.layers,this.add(o);let l=new Te(hi,ui,t,e);l.layers=this.layers,this.add(l);let c=new Te(hi,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ar=class extends De{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Da=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Xn?Qt:ze),this.texture=new ar(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:bn});r.uniforms.tEquirect.value=e;let a=new me(i,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Ee),new Ua(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},fa=new P,Vh=new P,Hh=new zt,on=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fa.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hh.getNormalMatrix(t),i=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new wn,Ns=new P,Qi=class{constructor(t=new on,e=new on,n=new on,i=new on,r=new on,a=new on){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],M=i[13],x=i[14],A=i[15];if(n[0].setComponents(l-r,f-c,p-m,A-u).normalize(),n[1].setComponents(l+r,f+c,p+m,A+u).normalize(),n[2].setComponents(l+a,f+h,p+g,A+M).normalize(),n[3].setComponents(l-a,f-h,p-g,A-M).normalize(),n[4].setComponents(l-o,f-d,p-_,A-x).normalize(),e===cn)n[5].setComponents(l+o,f+d,p+_,A+x).normalize();else if(e===$s)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ns.x=i.normal.x>0?t.max.x:t.min.x,Ns.y=i.normal.y>0?t.max.y:t.min.y,Ns.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gh(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let u=g[_];e?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Na=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let M=u*f-a;for(let x=0;x<c;x++){let A=x*d-r;g.push(A,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){let x=M+c*u,A=M+c*(u+1),S=M+1+c*(u+1),v=M+1+c*u;m.push(x,A,v),m.push(A,S,v)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,r0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ld=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ud=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Md=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Zh,alphatest_pars_fragment:Jh,aomap_fragment:Kh,aomap_pars_fragment:Qh,batching_pars_vertex:$h,batching_vertex:jh,begin_vertex:tu,beginnormal_vertex:eu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:xu,emissivemap_pars_fragment:vu,colorspace_fragment:yu,colorspace_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:bu,envmap_pars_fragment:Au,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Ou,envmap_vertex:Tu,fog_vertex:wu,fog_pars_vertex:Cu,fog_fragment:Ru,fog_pars_fragment:Pu,gradientmap_pars_fragment:Iu,lightmap_fragment:Lu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:ku,lights_phong_pars_fragment:Vu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Ku,map_fragment:Qu,map_pars_fragment:$u,map_particle_fragment:ju,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:U0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:k0,uv_vertex:V0,worldpos_vertex:H0,background_vert:G0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:J0,depth_frag:K0,distanceRGBA_vert:Q0,distanceRGBA_frag:$0,equirect_vert:j0,equirect_frag:td,linedashed_vert:ed,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:sd,meshlambert_vert:rd,meshlambert_frag:ad,meshmatcap_vert:od,meshmatcap_frag:ld,meshnormal_vert:cd,meshnormal_frag:hd,meshphong_vert:ud,meshphong_frag:dd,meshphysical_vert:fd,meshphysical_frag:pd,meshtoon_vert:md,meshtoon_frag:gd,points_vert:_d,points_frag:xd,shadow_vert:vd,shadow_frag:yd,sprite_vert:Md,sprite_frag:Sd},at={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ve={basic:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ae([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ae([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ae([at.points,at.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ae([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ae([at.common,at.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ae([at.sprite,at.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ae([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ae([at.lights,at.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};ve.physical={uniforms:Ae([ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Fs={r:0,b:0,g:0};function bd(s,t,e,n,i,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let M=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Pr)?(h===void 0&&(h=new me(new Yn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ri(ve.backgroundCube.uniforms),vertexShader:ve.backgroundCube.vertexShader,fragmentShader:ve.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Jt,(d!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new me(new Na(2,2),new qe({name:"BackgroundMaterial",uniforms:Ri(ve.background.uniforms),vertexShader:ve.background.vertexShader,fragmentShader:ve.background.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(Fs,Gc(s)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Ad(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(L,V,U,q,X){let H=!1;if(a){let K=_(q,U,V);c!==K&&(c=K,m(c.object)),H=u(L,q,U,X),H&&M(L,q,U,X)}else{let K=V.wireframe===!0;(c.geometry!==q.id||c.program!==U.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=U.id,c.wireframe=K,H=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,R(L,V,U,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,V,U){let q=U.wireframe===!0,X=o[L.id];X===void 0&&(X={},o[L.id]=X);let H=X[V.id];H===void 0&&(H={},X[V.id]=H);let K=H[q];return K===void 0&&(K=p(f()),H[q]=K),K}function p(L){let V=[],U=[],q=[];for(let X=0;X<i;X++)V[X]=0,U[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:U,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,V,U,q){let X=c.attributes,H=V.attributes,K=0,Z=U.getAttributes();for(let et in Z)if(Z[et].location>=0){let B=X[et],Y=H[et];if(Y===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function M(L,V,U,q){let X={},H=V.attributes,K=0,Z=U.getAttributes();for(let et in Z)if(Z[et].location>=0){let B=H[et];B===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));let Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),X[et]=Y,K++}c.attributes=X,c.attributesNum=K,c.index=q}function x(){let L=c.newAttributes;for(let V=0,U=L.length;V<U;V++)L[V]=0}function A(L){S(L,0)}function S(L,V){let U=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;U[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),X[L]=V)}function v(){let L=c.newAttributes,V=c.enabledAttributes;for(let U=0,q=V.length;U<q;U++)V[U]!==L[U]&&(s.disableVertexAttribArray(U),V[U]=0)}function b(L,V,U,q,X,H,K){K===!0?s.vertexAttribIPointer(L,V,U,X,H):s.vertexAttribPointer(L,V,U,q,X,H)}function R(L,V,U,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,H=U.getAttributes(),K=V.defaultAttributeValues;for(let Z in H){let et=H[Z];if(et.location>=0){let D=X[Z];if(D===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){let B=D.normalized,Y=D.itemSize,J=e.get(D);if(J===void 0)continue;let $=J.buffer,ut=J.type,xt=J.bytesPerElement,vt=n.isWebGL2===!0&&(ut===s.INT||ut===s.UNSIGNED_INT||D.gpuType===Lc);if(D.isInterleavedBufferAttribute){let Ht=D.data,F=Ht.stride,ye=D.offset;if(Ht.isInstancedInterleavedBuffer){for(let Mt=0;Mt<et.locationSize;Mt++)S(et.location+Mt,Ht.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let Mt=0;Mt<et.locationSize;Mt++)A(et.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Mt=0;Mt<et.locationSize;Mt++)b(et.location+Mt,Y/et.locationSize,ut,B,F*xt,(ye+Y/et.locationSize*Mt)*xt,vt)}else{if(D.isInstancedBufferAttribute){for(let Ht=0;Ht<et.locationSize;Ht++)S(et.location+Ht,D.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)A(et.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Ht=0;Ht<et.locationSize;Ht++)b(et.location+Ht,Y/et.locationSize,ut,B,Y*xt,Y/et.locationSize*Ht*xt,vt)}}else if(K!==void 0){let B=K[Z];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(et.location,B);break;case 3:s.vertexAttrib3fv(et.location,B);break;case 4:s.vertexAttrib4fv(et.location,B);break;default:s.vertexAttrib1fv(et.location,B)}}}}v()}function y(){Q();for(let L in o){let V=o[L];for(let U in V){let q=V[U];for(let X in q)g(q[X].object),delete q[X];delete V[U]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let V=o[L.id];for(let U in V){let q=V[U];for(let X in q)g(q[X].object),delete q[X];delete V[U]}delete o[L.id]}function G(L){for(let V in o){let U=o[V];if(U[L.id]===void 0)continue;let q=U[L.id];for(let X in q)g(q[X].object),delete q[X];delete U[L.id]}}function Q(){st(),h=!0,c!==l&&(c=l,m(c.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:st,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:A,disableUnusedAttributes:v}}function Ed(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Td(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,A=a||t.has("OES_texture_float"),S=x&&A,v=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:S,maxSamples:v}}function wd(s){let t=this,e=null,n=0,i=!1,r=!1,a=new on,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,x=M*4,A=u.clippingState||null;l.value=A,A=h(g,f,x,m);for(let S=0;S!==x;++S)A[S]=e[S];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,A=m;x!==_;++x,A+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Cd(s){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Ai:o===wa&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ta||o===wa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Da(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var or=class extends rr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_i=4,Zl=[.125,.215,.35,.446,.526,.582],Hn=20,pa=new or,Jl=new Tt,ma=null,ga=0,_a=0,kn=(1+Math.sqrt(5))/2,di=1/kn,Kl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,kn,di),new P(0,kn,-di),new P(di,0,kn),new P(-di,0,kn),new P(kn,di,0),new P(-kn,di,0)],lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Yi,format:Be,colorSpace:hn,depthBuffer:!1},i=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(r)),this._blurMaterial=Pd(r,t,e)}return i}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){let o=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Jl),h.toneMapping=An,h.autoClear=!1;let m=new ke({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new me(new Yn,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Jl),_=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):M===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let x=this._cubeSize;Os(i,M*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ai||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Kl[(i-1)%Kl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new me(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Hn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Hn;p>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hn}`);let u=[],M=0;for(let b=0;b<Hn;++b){let R=b/_,y=Math.exp(-R*R/2);u.push(y),b===0?M+=y:b<p&&(M+=2*y)}for(let b=0;b<u.length;b++)u[b]=u[b]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let A=this._sizeLods[i],S=3*A*(i>x-_i?i-x+_i:0),v=4*(this._cubeSize-A);Os(e,S,v,3*A,2*A),l.setRenderTarget(e),l.render(d,pa)}};function Rd(s){let t=[],e=[],n=[],i=s,r=s-_i+1+Zl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-_i?l=Zl[a-s+_i-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),A=new Float32Array(u*g*m);for(let v=0;v<m;v++){let b=v%3*2/3-1,R=v>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(y,_*g*v),x.set(f,p*g*v);let w=[v,v,v,v,v,v];A.set(w,u*g*v)}let S=new Re;S.setAttribute("position",new Ce(M,_)),S.setAttribute("uv",new Ce(x,p)),S.setAttribute("faceIndex",new Ce(A,u)),t.push(S),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(s,t,e){let n=new dn(s,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Pd(s,t,e){let n=new Float32Array(Hn),i=new P(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $l(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function jl(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Id(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ta||l===wa,h=l===Ai||l===Ei;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new lr(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new lr(s));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ld(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ud(s,t,e,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,A=M.length;x<A;x+=3){let S=M[x+0],v=M[x+1],b=M[x+2];f.push(S,v,v,b,b,S)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,A=M.length/3-1;x<A;x+=3){let S=x+0,v=x+1,b=x+2;f.push(S,v,v,b,b,S)}}else return;let p=new(Vc(f)?sr:Ci)(f,1);p.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dd(s,t,e,n){let i=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let u=0;for(let M=0;M<_;M++)u+=g[M];e.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Nd(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fd(s,t){return s[0]-t[0]}function Od(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Bd(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new ae,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],R=0;M===!0&&(R=1),x===!0&&(R=2),A===!0&&(R=3);let y=h.attributes.position.count*R,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let G=new Float32Array(y*w*4*g),Q=new nr(G,y,w,g);Q.type=ln,Q.needsUpdate=!0;let st=R*4;for(let V=0;V<g;V++){let U=S[V],q=v[V],X=b[V],H=y*w*4*V;for(let K=0;K<U.count;K++){let Z=K*st;M===!0&&(a.fromBufferAttribute(U,K),G[H+Z+0]=a.x,G[H+Z+1]=a.y,G[H+Z+2]=a.z,G[H+Z+3]=0),x===!0&&(a.fromBufferAttribute(q,K),G[H+Z+4]=a.x,G[H+Z+5]=a.y,G[H+Z+6]=a.z,G[H+Z+7]=0),A===!0&&(a.fromBufferAttribute(X,K),G[H+Z+8]=a.x,G[H+Z+9]=a.y,G[H+Z+10]=a.z,G[H+Z+11]=X.itemSize===4?a.w:1)}}_={count:g,texture:Q,size:new pt(y,w)},r.set(h,_),h.addEventListener("dispose",L)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",u),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let A=g[x];A[0]=x,A[1]=f[x]}g.sort(Od);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Fd);let _=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let A=o[x],S=A[0],v=A[1];S!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+x)!==_[S]&&h.setAttribute("morphTarget"+x,_[S]),p&&h.getAttribute("morphNormal"+x)!==p[S]&&h.setAttribute("morphNormal"+x,p[S]),i[x]=v,u+=v):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function zd(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var cr=class extends De{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=Sn),n===void 0&&h===wi&&(n=Gn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:le,this.minFilter=l!==void 0?l:le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xc=new De,qc=new cr(1,1);qc.compareFunction=zc;var Yc=new nr,Zc=new La,Jc=new ar,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Li(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=tc[i];if(r===void 0&&(r=new Float32Array(i),tc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function he(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ur(s,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function kd(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2fv(this.addr,t),he(e,t)}}function Hd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;s.uniform3fv(this.addr,t),he(e,t)}}function Gd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4fv(this.addr,t),he(e,t)}}function Wd(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;sc.set(n),s.uniformMatrix2fv(this.addr,!1,sc),he(e,n)}}function Xd(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ic.set(n),s.uniformMatrix3fv(this.addr,!1,ic),he(e,n)}}function qd(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;nc.set(n),s.uniformMatrix4fv(this.addr,!1,nc),he(e,n)}}function Yd(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2iv(this.addr,t),he(e,t)}}function Jd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3iv(this.addr,t),he(e,t)}}function Kd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4iv(this.addr,t),he(e,t)}}function Qd(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $d(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;s.uniform2uiv(this.addr,t),he(e,t)}}function jd(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;s.uniform3uiv(this.addr,t),he(e,t)}}function tf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;s.uniform4uiv(this.addr,t),he(e,t)}}function ef(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?qc:Xc;e.setTexture2D(t||r,i)}function nf(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zc,i)}function sf(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jc,i)}function rf(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yc,i)}function af(s){switch(s){case 5126:return kd;case 35664:return Vd;case 35665:return Hd;case 35666:return Gd;case 35674:return Wd;case 35675:return Xd;case 35676:return qd;case 5124:case 35670:return Yd;case 35667:case 35671:return Zd;case 35668:case 35672:return Jd;case 35669:case 35673:return Kd;case 5125:return Qd;case 36294:return $d;case 36295:return jd;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return rf}}function of(s,t){s.uniform1fv(this.addr,t)}function lf(s,t){let e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function cf(s,t){let e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function hf(s,t){let e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function uf(s,t){let e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function df(s,t){let e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ff(s,t){let e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function pf(s,t){s.uniform1iv(this.addr,t)}function mf(s,t){s.uniform2iv(this.addr,t)}function gf(s,t){s.uniform3iv(this.addr,t)}function _f(s,t){s.uniform4iv(this.addr,t)}function xf(s,t){s.uniform1uiv(this.addr,t)}function vf(s,t){s.uniform2uiv(this.addr,t)}function yf(s,t){s.uniform3uiv(this.addr,t)}function Mf(s,t){s.uniform4uiv(this.addr,t)}function Sf(s,t,e){let n=this.cache,i=t.length,r=Ur(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Xc,r[a])}function bf(s,t,e){let n=this.cache,i=t.length,r=Ur(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Zc,r[a])}function Af(s,t,e){let n=this.cache,i=t.length,r=Ur(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Jc,r[a])}function Ef(s,t,e){let n=this.cache,i=t.length,r=Ur(e,i);ce(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Yc,r[a])}function Tf(s){switch(s){case 5126:return of;case 35664:return lf;case 35665:return cf;case 35666:return hf;case 35674:return uf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return xf;case 36294:return vf;case 36295:return yf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Ef}}var Fa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=af(e.type)}},Oa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tf(e.type)}},Ba=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},xa=/(\w+)(\])?(\[|\.)?/g;function rc(s,t){s.seq.push(t),s.map[t.id]=t}function wf(s,t,e){let n=s.name,i=n.length;for(xa.lastIndex=0;;){let r=xa.exec(n),a=xa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rc(e,c===void 0?new Fa(o,s,t):new Oa(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Ba(o),rc(e,d)),e=d}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);wf(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function ac(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Cf=37297,Rf=0;function Pf(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function If(s){let t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(s),n;switch(t===e?n="":t===Qs&&e===Ks?n="LinearDisplayP3ToLinearSRGB":t===Ks&&e===Qs&&(n="LinearSRGBToLinearDisplayP3"),s){case hn:case Lr:return[n,"LinearTransferOETF"];case Qt:case xo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function oc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pf(s.getShaderSource(t),a)}else return i}function Lf(s,t){let e=If(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Uf(s,t){let e;switch(t){case U3:e="Linear";break;case D3:e="Reinhard";break;case N3:e="OptimizedCineon";break;case F3:e="ACESFilmic";break;case B3:e="AgX";break;case O3:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Df(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function Nf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xi).join(`
`)}function Ff(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Of(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function xi(s){return s!==""}function lc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(s){return s.replace(Bf,kf)}var zf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(s,t){let e=Ut[t];if(e===void 0){let n=zf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}var Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(s){return s.replace(Vf,Hf)}function Hf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===h3?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function Wf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ei:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function qf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jn:t="ENVMAP_BLENDING_MULTIPLY";break;case L3:t="ENVMAP_BLENDING_MIX";break;case Ii:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zf(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gf(e),c=Wf(e),h=Xf(e),d=qf(e),f=Yf(e),m=e.isWebGL2?"":Df(e),g=Nf(e),_=Ff(r),p=i.createProgram(),u,M,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xi).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xi).join(`
`),M.length>0&&(M+=`
`)):(u=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),M=[m,uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Ut.tonemapping_pars_fragment:"",e.toneMapping!==An?Uf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Lf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xi).join(`
`)),a=za(a),a=lc(a,e),a=cc(a,e),o=za(o),o=lc(o,e),o=cc(o,e),a=hc(a),o=hc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=x+u+a,S=x+M+o,v=ac(i,i.VERTEX_SHADER,A),b=ac(i,i.FRAGMENT_SHADER,S);i.attachShader(p,v),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(Q){if(s.debug.checkShaderErrors){let st=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(v).trim(),V=i.getShaderInfoLog(b).trim(),U=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,b);else{let X=oc(i,v,"vertex"),H=oc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+X+`
`+H)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(L===""||V==="")&&(q=!1);q&&(Q.diagnostics={runnable:U,programLog:st,vertexShader:{log:L,prefix:u},fragmentShader:{log:V,prefix:M}})}i.deleteShader(v),i.deleteShader(b),y=new Si(i,p),w=Of(i,p)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(p,Cf)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var Jf=0,ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Va(t),e.set(t,n)),n}},Va=class{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}};function Kf(s,t,e,n,i,r,a){let o=new ir,l=new ka,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,w,G,Q,st){let L=Q.fog,V=st.geometry,U=y.isMeshStandardMaterial?Q.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||U),X=q&&q.mapping===Pr?q.image.height:null,H=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=K!==void 0?K.length:0,et=0;V.morphAttributes.position!==void 0&&(et=1),V.morphAttributes.normal!==void 0&&(et=2),V.morphAttributes.color!==void 0&&(et=3);let D,B,Y,J;if(H){let Me=ve[H];D=Me.vertexShader,B=Me.fragmentShader}else D=y.vertexShader,B=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),J=l.getFragmentShaderID(y);let $=s.getRenderTarget(),ut=st.isInstancedMesh===!0,xt=st.isBatchedMesh===!0,vt=!!y.map,Ht=!!y.matcap,F=!!q,ye=!!y.aoMap,Mt=!!y.lightMap,Rt=!!y.bumpMap,mt=!!y.normalMap,jt=!!y.displacementMap,Dt=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,z=y.anisotropy>0,nt=y.clearcoat>0,tt=y.iridescence>0,it=y.sheen>0,gt=y.transmission>0,ct=z&&!!y.anisotropyMap,dt=nt&&!!y.clearcoatMap,At=nt&&!!y.clearcoatNormalMap,Nt=nt&&!!y.clearcoatRoughnessMap,j=tt&&!!y.iridescenceMap,Wt=tt&&!!y.iridescenceThicknessMap,kt=it&&!!y.sheenColorMap,Ct=it&&!!y.sheenRoughnessMap,yt=!!y.specularMap,ft=!!y.specularColorMap,Lt=!!y.specularIntensityMap,Gt=gt&&!!y.transmissionMap,ne=gt&&!!y.thicknessMap,Ot=!!y.gradientMap,rt=!!y.alphaMap,I=y.alphaTest>0,ot=!!y.alphaHash,lt=!!y.extensions,Et=!!V.attributes.uv1,St=!!V.attributes.uv2,qt=!!V.attributes.uv3,Yt=An;return y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:h,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:D,fragmentShader:B,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:xt,instancing:ut,instancingColor:ut&&st.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:hn,map:vt,matcap:Ht,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:X,aoMap:ye,lightMap:Mt,bumpMap:Rt,normalMap:mt,displacementMap:f&&jt,emissiveMap:Dt,normalMapObjectSpace:mt&&y.normalMapType===eh,normalMapTangentSpace:mt&&y.normalMapType===_o,metalnessMap:C,roughnessMap:E,anisotropy:z,anisotropyMap:ct,clearcoat:nt,clearcoatMap:dt,clearcoatNormalMap:At,clearcoatRoughnessMap:Nt,iridescence:tt,iridescenceMap:j,iridescenceThicknessMap:Wt,sheen:it,sheenColorMap:kt,sheenRoughnessMap:Ct,specularMap:yt,specularColorMap:ft,specularIntensityMap:Lt,transmission:gt,transmissionMap:Gt,thicknessMap:ne,gradientMap:Ot,opaque:y.transparent===!1&&y.blending===yi,alphaMap:rt,alphaTest:I,alphaHash:ot,combine:y.combine,mapUv:vt&&_(y.map.channel),aoMapUv:ye&&_(y.aoMap.channel),lightMapUv:Mt&&_(y.lightMap.channel),bumpMapUv:Rt&&_(y.bumpMap.channel),normalMapUv:mt&&_(y.normalMap.channel),displacementMapUv:jt&&_(y.displacementMap.channel),emissiveMapUv:Dt&&_(y.emissiveMap.channel),metalnessMapUv:C&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(y.sheenRoughnessMap.channel),specularMapUv:yt&&_(y.specularMap.channel),specularColorMapUv:ft&&_(y.specularColorMap.channel),specularIntensityMapUv:Lt&&_(y.specularIntensityMap.channel),transmissionMapUv:Gt&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(mt||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:St,vertexUv3s:qt,pointsUvs:st.isPoints===!0&&!!V.attributes.uv&&(vt||rt),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:st.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oe,flipSided:y.side===we,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:lt&&y.extensions.derivatives===!0,extensionFragDepth:lt&&y.extensions.fragDepth===!0,extensionDrawBuffers:lt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let G in y.defines)w.push(G),w.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(M(w,y),x(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function A(y){let w=g[y.type],G;if(w){let Q=ve[w];G=ss.clone(Q.uniforms)}else G=y.uniforms;return G}function S(y,w){let G;for(let Q=0,st=c.length;Q<st;Q++){let L=c[Q];if(L.cacheKey===w){G=L,++G.usedTimes;break}}return G===void 0&&(G=new Zf(s,w,y,r),c.push(G)),G}function v(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:S,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:R}}function Qf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function $f(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,m,g,_,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function o(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function l(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||$f),n.length>1&&n.sort(f||dc),i.length>1&&i.sort(f||dc)}function h(){for(let d=t,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function jf(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new fc,s.set(n,[a])):i>=r.length?(a=new fc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function t2(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Tt};break;case"SpotLight":e={position:new P,direction:new P,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function e2(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var n2=0;function i2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function s2(s,t){let e=new t2,n=e2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);let r=new P,a=new Vt,o=new Vt;function l(h,d){let f=0,m=0,g=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let _=0,p=0,u=0,M=0,x=0,A=0,S=0,v=0,b=0,R=0,y=0;h.sort(i2);let w=d===!0?Math.PI:1;for(let Q=0,st=h.length;Q<st;Q++){let L=h[Q],V=L.color,U=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=V.r*U*w,m+=V.g*U*w,g+=V.b*U*w;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],U);y++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=L.shadow.matrix,A++}i.directional[_]=H,_++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(V).multiplyScalar(U*w),H.distance=q,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[u]=H;let K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[u]=K.matrix,L.castShadow){let Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[u]=Z,i.spotShadowMap[u]=X,v++}u++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(V).multiplyScalar(U),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=H,M++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*w),H.distance=L.distance,H.decay=L.decay,L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=L.shadow.matrix,S++}i.point[p]=H,p++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(U*w),H.groundColor.copy(L.groundColor).multiplyScalar(U*w),i.hemi[x]=H,x++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;let G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==A||G.numPointShadows!==S||G.numSpotShadows!==v||G.numSpotMaps!==b||G.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=y,G.directionalLength=_,G.pointLength=p,G.spotLength=u,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=A,G.numPointShadows=S,G.numSpotShadows=v,G.numSpotMaps=b,G.numLightProbes=y,i.version=n2++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0,u=d.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let A=h[M];if(A.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(u),f++}else if(A.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(u),g++}else if(A.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),o.identity(),a.copy(A.matrixWorld),a.premultiply(u),o.extractRotation(a),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:i}}function pc(s,t){let e=new s2(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function r2(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new pc(s,t),e.set(r,[l])):a>=o.length?(l=new pc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ha=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ga=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l2(s,t,e){let n=new Qi,i=new pt,r=new pt,a=new ae,o=new Ha({depthPacking:th}),l=new Ga,c={},h=e.maxTextureSize,d={[Ze]:we,[we]:Ze,[Oe]:Oe},f=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:a2,fragmentShader:o2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new me(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let u=this.type;this.render=function(v,b,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let y=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(bn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let st=u!==an&&this.type===an,L=u===an&&this.type!==an;for(let V=0,U=v.length;V<U;V++){let q=v[V],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let H=X.getFrameExtents();if(i.multiply(H),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,X.mapSize.y=r.y)),X.map===null||st===!0||L===!0){let Z=this.type!==an?{minFilter:le,magFilter:le}:{};X.map!==null&&X.map.dispose(),X.map=new dn(i.x,i.y,Z),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let K=X.getViewportCount();for(let Z=0;Z<K;Z++){let et=X.getViewport(Z);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),Q.viewport(a),X.updateMatrices(q,Z),n=X.getFrustum(),A(b,R,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===an&&M(X,R),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(y,w,G)};function M(v,b){let R=t.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new dn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,R,f,_,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,R,m,_,null)}function x(v,b,R,y){let w=null,G=R.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(G!==void 0)w=G;else if(w=R.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let Q=w.uuid,st=b.uuid,L=c[Q];L===void 0&&(L={},c[Q]=L);let V=L[st];V===void 0&&(V=w.clone(),L[st]=V,b.addEventListener("dispose",S)),w=V}if(w.visible=b.visible,w.wireframe=b.wireframe,y===an?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:d[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Q=s.properties.get(w);Q.light=R}return w}function A(v,b,R,y,w){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===an)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);let st=t.update(v),L=v.material;if(Array.isArray(L)){let V=st.groups;for(let U=0,q=V.length;U<q;U++){let X=V[U],H=L[X.materialIndex];if(H&&H.visible){let K=x(v,H,y,w);v.onBeforeShadow(s,v,b,R,st,K,X),s.renderBufferDirect(R,null,st,K,v,X),v.onAfterShadow(s,v,b,R,st,K,X)}}}else if(L.visible){let V=x(v,L,y,w);v.onBeforeShadow(s,v,b,R,st,V,null),s.renderBufferDirect(R,null,st,V,v,null),v.onAfterShadow(s,v,b,R,st,V,null)}}let Q=v.children;for(let st=0,L=Q.length;st<L;st++)A(Q[st],b,R,y,w)}function S(v){v.target.removeEventListener("dispose",S);for(let R in c){let y=c[R],w=v.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function c2(s,t,e){let n=e.isWebGL2;function i(){let I=!1,ot=new ae,lt=null,Et=new ae(0,0,0,0);return{setMask:function(St){lt!==St&&!I&&(s.colorMask(St,St,St,St),lt=St)},setLocked:function(St){I=St},setClear:function(St,qt,Yt,ue,Me){Me===!0&&(St*=ue,qt*=ue,Yt*=ue),ot.set(St,qt,Yt,ue),Et.equals(ot)===!1&&(s.clearColor(St,qt,Yt,ue),Et.copy(ot))},reset:function(){I=!1,lt=null,Et.set(-1,0,0,0)}}}function r(){let I=!1,ot=null,lt=null,Et=null;return{setTest:function(St){St?xt(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(St){ot!==St&&!I&&(s.depthMask(St),ot=St)},setFunc:function(St){if(lt!==St){switch(St){case E3:s.depthFunc(s.NEVER);break;case T3:s.depthFunc(s.ALWAYS);break;case w3:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case C3:s.depthFunc(s.EQUAL);break;case R3:s.depthFunc(s.GEQUAL);break;case P3:s.depthFunc(s.GREATER);break;case I3:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=St}},setLocked:function(St){I=St},setClear:function(St){Et!==St&&(s.clearDepth(St),Et=St)},reset:function(){I=!1,ot=null,lt=null,Et=null}}}function a(){let I=!1,ot=null,lt=null,Et=null,St=null,qt=null,Yt=null,ue=null,Me=null;return{setTest:function(Zt){I||(Zt?xt(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!I&&(s.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,Se,Ye){(lt!==Zt||Et!==Se||St!==Ye)&&(s.stencilFunc(Zt,Se,Ye),lt=Zt,Et=Se,St=Ye)},setOp:function(Zt,Se,Ye){(qt!==Zt||Yt!==Se||ue!==Ye)&&(s.stencilOp(Zt,Se,Ye),qt=Zt,Yt=Se,ue=Ye)},setLocked:function(Zt){I=Zt},setClear:function(Zt){Me!==Zt&&(s.clearStencil(Zt),Me=Zt)},reset:function(){I=!1,ot=null,lt=null,Et=null,St=null,qt=null,Yt=null,ue=null,Me=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,A=null,S=null,v=null,b=null,R=null,y=new Tt(0,0,0),w=0,G=!1,Q=null,st=null,L=null,V=null,U=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,H=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=H>=2);let Z=null,et={},D=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),Y=new ae().fromArray(D),J=new ae().fromArray(B);function $(I,ot,lt,Et){let St=new Uint8Array(4),qt=s.createTexture();s.bindTexture(I,qt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<lt;Yt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(ot+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return qt}let ut={};ut[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ut[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xt(s.DEPTH_TEST),l.setFunc(Hs),Dt(!1),C($o),xt(s.CULL_FACE),mt(bn);function xt(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function vt(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Ht(I,ot){return m[I]!==ot?(s.bindFramebuffer(I,ot),m[I]=ot,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ot),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function F(I,ot){let lt=_,Et=!1;if(I)if(lt=g.get(ot),lt===void 0&&(lt=[],g.set(ot,lt)),I.isWebGLMultipleRenderTargets){let St=I.texture;if(lt.length!==St.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Yt=St.length;qt<Yt;qt++)lt[qt]=s.COLOR_ATTACHMENT0+qt;lt.length=St.length,Et=!0}}else lt[0]!==s.COLOR_ATTACHMENT0&&(lt[0]=s.COLOR_ATTACHMENT0,Et=!0);else lt[0]!==s.BACK&&(lt[0]=s.BACK,Et=!0);Et&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function ye(I){return p!==I?(s.useProgram(I),p=I,!0):!1}let Mt={[Vn]:s.FUNC_ADD,[u3]:s.FUNC_SUBTRACT,[d3]:s.FUNC_REVERSE_SUBTRACT};if(n)Mt[nl]=s.MIN,Mt[il]=s.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(Mt[nl]=I.MIN_EXT,Mt[il]=I.MAX_EXT)}let Rt={[f3]:s.ZERO,[p3]:s.ONE,[m3]:s.SRC_COLOR,[bi]:s.SRC_ALPHA,[y3]:s.SRC_ALPHA_SATURATE,[x3]:s.DST_COLOR,[po]:s.DST_ALPHA,[g3]:s.ONE_MINUS_SRC_COLOR,[qi]:s.ONE_MINUS_SRC_ALPHA,[v3]:s.ONE_MINUS_DST_COLOR,[_3]:s.ONE_MINUS_DST_ALPHA,[M3]:s.CONSTANT_COLOR,[S3]:s.ONE_MINUS_CONSTANT_COLOR,[b3]:s.CONSTANT_ALPHA,[A3]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(I,ot,lt,Et,St,qt,Yt,ue,Me,Zt){if(I===bn){u===!0&&(vt(s.BLEND),u=!1);return}if(u===!1&&(xt(s.BLEND),u=!0),I!==fo){if(I!==M||Zt!==G){if((x!==Vn||v!==Vn)&&(s.blendEquation(s.FUNC_ADD),x=Vn,v=Vn),Zt)switch(I){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jo:s.blendFunc(s.ONE,s.ONE);break;case tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,S=null,b=null,R=null,y.set(0,0,0),w=0,M=I,G=Zt}return}St=St||ot,qt=qt||lt,Yt=Yt||Et,(ot!==x||St!==v)&&(s.blendEquationSeparate(Mt[ot],Mt[St]),x=ot,v=St),(lt!==A||Et!==S||qt!==b||Yt!==R)&&(s.blendFuncSeparate(Rt[lt],Rt[Et],Rt[qt],Rt[Yt]),A=lt,S=Et,b=qt,R=Yt),(ue.equals(y)===!1||Me!==w)&&(s.blendColor(ue.r,ue.g,ue.b,Me),y.copy(ue),w=Me),M=I,G=!1}function jt(I,ot){I.side===Oe?vt(s.CULL_FACE):xt(s.CULL_FACE);let lt=I.side===we;ot&&(lt=!lt),Dt(lt),I.blending===yi&&I.transparent===!1?mt(bn):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let Et=I.stencilWrite;c.setTest(Et),Et&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){Q!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),Q=I)}function C(I){I!==l3?(xt(s.CULL_FACE),I!==st&&(I===$o?s.cullFace(s.BACK):I===c3?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),st=I}function E(I){I!==L&&(X&&s.lineWidth(I),L=I)}function z(I,ot,lt){I?(xt(s.POLYGON_OFFSET_FILL),(V!==ot||U!==lt)&&(s.polygonOffset(ot,lt),V=ot,U=lt)):vt(s.POLYGON_OFFSET_FILL)}function nt(I){I?xt(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function tt(I){I===void 0&&(I=s.TEXTURE0+q-1),Z!==I&&(s.activeTexture(I),Z=I)}function it(I,ot,lt){lt===void 0&&(Z===null?lt=s.TEXTURE0+q-1:lt=Z);let Et=et[lt];Et===void 0&&(Et={type:void 0,texture:void 0},et[lt]=Et),(Et.type!==I||Et.texture!==ot)&&(Z!==lt&&(s.activeTexture(lt),Z=lt),s.bindTexture(I,ot||ut[I]),Et.type=I,Et.texture=ot)}function gt(){let I=et[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){Y.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function Gt(I){J.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function ne(I,ot){let lt=d.get(ot);lt===void 0&&(lt=new WeakMap,d.set(ot,lt));let Et=lt.get(I);Et===void 0&&(Et=s.getUniformBlockIndex(ot,I.name),lt.set(I,Et))}function Ot(I,ot){let Et=d.get(ot).get(I);h.get(ot)!==Et&&(s.uniformBlockBinding(ot,Et,I.__bindingPointIndex),h.set(ot,Et))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,et={},m={},g=new WeakMap,_=[],p=null,u=!1,M=null,x=null,A=null,S=null,v=null,b=null,R=null,y=new Tt(0,0,0),w=0,G=!1,Q=null,st=null,L=null,V=null,U=null,Y.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xt,disable:vt,bindFramebuffer:Ht,drawBuffers:F,useProgram:ye,setBlending:mt,setMaterial:jt,setFlipSided:Dt,setCullFace:C,setLineWidth:E,setPolygonOffset:z,setScissorTest:nt,activeTexture:tt,bindTexture:it,unbindTexture:gt,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:yt,texImage3D:ft,updateUBOMapping:ne,uniformBlockBinding:Ot,texStorage2D:kt,texStorage3D:Ct,texSubImage2D:At,texSubImage3D:Nt,compressedTexSubImage2D:j,compressedTexSubImage3D:Wt,scissor:Lt,viewport:Gt,reset:rt}}function h2(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):Ji("canvas")}function _(C,E,z,nt){let tt=1;if((C.width>nt||C.height>nt)&&(tt=nt/Math.max(C.width,C.height)),tt<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let it=E?js:Math.floor,gt=it(tt*C.width),ct=it(tt*C.height);d===void 0&&(d=g(gt,ct));let dt=z?g(gt,ct):d;return dt.width=gt,dt.height=ct,dt.getContext("2d").drawImage(C,0,0,gt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+gt+"x"+ct+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Pa(C.width)&&Pa(C.height)}function u(C){return o?!1:C.wrapS!==Ue||C.wrapT!==Ue||C.minFilter!==le&&C.minFilter!==Ee}function M(C,E){return C.generateMipmaps&&E&&C.minFilter!==le&&C.minFilter!==Ee}function x(C){s.generateMipmap(C)}function A(C,E,z,nt,tt=!1){if(o===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=E;if(E===s.RED&&(z===s.FLOAT&&(it=s.R32F),z===s.HALF_FLOAT&&(it=s.R16F),z===s.UNSIGNED_BYTE&&(it=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(it=s.R8UI),z===s.UNSIGNED_SHORT&&(it=s.R16UI),z===s.UNSIGNED_INT&&(it=s.R32UI),z===s.BYTE&&(it=s.R8I),z===s.SHORT&&(it=s.R16I),z===s.INT&&(it=s.R32I)),E===s.RG&&(z===s.FLOAT&&(it=s.RG32F),z===s.HALF_FLOAT&&(it=s.RG16F),z===s.UNSIGNED_BYTE&&(it=s.RG8)),E===s.RGBA){let gt=tt?Js:Xt.getTransfer(nt);z===s.FLOAT&&(it=s.RGBA32F),z===s.HALF_FLOAT&&(it=s.RGBA16F),z===s.UNSIGNED_BYTE&&(it=gt===Jt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(C,E,z){return M(C,z)===!0||C.isFramebufferTexture&&C.minFilter!==le&&C.minFilter!==Ee?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function v(C){return C===le||C===rl||C===Xr?s.NEAREST:s.LINEAR}function b(C){let E=C.target;E.removeEventListener("dispose",b),y(E),E.isVideoTexture&&h.delete(E)}function R(C){let E=C.target;E.removeEventListener("dispose",R),G(E)}function y(C){let E=n.get(C);if(E.__webglInit===void 0)return;let z=C.source,nt=f.get(z);if(nt){let tt=nt[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(C),Object.keys(nt).length===0&&f.delete(z)}n.remove(C)}function w(C){let E=n.get(C);s.deleteTexture(E.__webglTexture);let z=C.source,nt=f.get(z);delete nt[E.__cacheKey],a.memory.textures--}function G(C){let E=C.texture,z=n.get(C),nt=n.get(E);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(z.__webglFramebuffer[tt]))for(let it=0;it<z.__webglFramebuffer[tt].length;it++)s.deleteFramebuffer(z.__webglFramebuffer[tt][it]);else s.deleteFramebuffer(z.__webglFramebuffer[tt]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[tt])}else{if(Array.isArray(z.__webglFramebuffer))for(let tt=0;tt<z.__webglFramebuffer.length;tt++)s.deleteFramebuffer(z.__webglFramebuffer[tt]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let tt=0;tt<z.__webglColorRenderbuffer.length;tt++)z.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[tt]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let tt=0,it=E.length;tt<it;tt++){let gt=n.get(E[tt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(E[tt])}n.remove(E),n.remove(C)}let Q=0;function st(){Q=0}function L(){let C=Q;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),Q+=1,C}function V(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function U(C,E){let z=n.get(C);if(C.isVideoTexture&&jt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,E);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function q(C,E){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function X(C,E){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,E);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function H(C,E){let z=n.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}let K={[Ti]:s.REPEAT,[Ue]:s.CLAMP_TO_EDGE,[Ca]:s.MIRRORED_REPEAT},Z={[le]:s.NEAREST,[rl]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[Ee]:s.LINEAR,[k3]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},et={[nh]:s.NEVER,[lh]:s.ALWAYS,[ih]:s.LESS,[zc]:s.LEQUAL,[sh]:s.EQUAL,[oh]:s.GEQUAL,[rh]:s.GREATER,[ah]:s.NOTEQUAL};function D(C,E,z){if(z?(s.texParameteri(C,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Z[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Z[E.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==Ue||E.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,v(E.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,v(E.minFilter)),E.minFilter!==le&&E.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===le||E.minFilter!==Xr&&E.minFilter!==Tn||E.type===ln&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(C,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function B(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));let nt=E.source,tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));let it=V(E);if(it!==C.__cacheKey){tt[it]===void 0&&(tt[it]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[it].usedTimes++;let gt=tt[C.__cacheKey];gt!==void 0&&(tt[C.__cacheKey].usedTimes--,gt.usedTimes===0&&w(E)),C.__cacheKey=it,C.__webglTexture=tt[it].texture}return z}function Y(C,E,z){let nt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=s.TEXTURE_3D);let tt=B(C,E),it=E.source;e.bindTexture(nt,C.__webglTexture,s.TEXTURE0+z);let gt=n.get(it);if(it.version!==gt.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);let ct=Xt.getPrimaries(Xt.workingColorSpace),dt=E.colorSpace===ze?null:Xt.getPrimaries(E.colorSpace),At=E.colorSpace===ze||ct===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Nt=u(E)&&p(E.image)===!1,j=_(E.image,Nt,!1,i.maxTextureSize);j=Dt(E,j);let Wt=p(j)||o,kt=r.convert(E.format,E.colorSpace),Ct=r.convert(E.type),yt=A(E.internalFormat,kt,Ct,E.colorSpace,E.isVideoTexture);D(nt,E,Wt);let ft,Lt=E.mipmaps,Gt=o&&E.isVideoTexture!==!0&&yt!==Ir,ne=gt.__version===void 0||tt===!0,Ot=S(E,j,Wt);if(E.isDepthTexture)yt=s.DEPTH_COMPONENT,o?E.type===ln?yt=s.DEPTH_COMPONENT32F:E.type===Sn?yt=s.DEPTH_COMPONENT24:E.type===Gn?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:E.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Wn&&yt===s.DEPTH_COMPONENT&&E.type!==mo&&E.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Sn,Ct=r.convert(E.type)),E.format===wi&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,E.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gn,Ct=r.convert(E.type))),ne&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,yt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,yt,j.width,j.height,0,kt,Ct,null));else if(E.isDataTexture)if(Lt.length>0&&Wt){Gt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,yt,Lt[0].width,Lt[0].height);for(let rt=0,I=Lt.length;rt<I;rt++)ft=Lt[rt],Gt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ft.width,ft.height,kt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,rt,yt,ft.width,ft.height,0,kt,Ct,ft.data);E.generateMipmaps=!1}else Gt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ot,yt,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,kt,Ct,j.data)):e.texImage2D(s.TEXTURE_2D,0,yt,j.width,j.height,0,kt,Ct,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Gt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,yt,Lt[0].width,Lt[0].height,j.depth);for(let rt=0,I=Lt.length;rt<I;rt++)ft=Lt[rt],E.format!==Be?kt!==null?Gt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,j.depth,kt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,yt,ft.width,ft.height,j.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,j.depth,kt,Ct,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,yt,ft.width,ft.height,j.depth,0,kt,Ct,ft.data)}else{Gt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,yt,Lt[0].width,Lt[0].height);for(let rt=0,I=Lt.length;rt<I;rt++)ft=Lt[rt],E.format!==Be?kt!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,ft.width,ft.height,kt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ft.width,ft.height,kt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,rt,yt,ft.width,ft.height,0,kt,Ct,ft.data)}else if(E.isDataArrayTexture)Gt?(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,yt,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,kt,Ct,j.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,j.width,j.height,j.depth,0,kt,Ct,j.data);else if(E.isData3DTexture)Gt?(ne&&e.texStorage3D(s.TEXTURE_3D,Ot,yt,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,kt,Ct,j.data)):e.texImage3D(s.TEXTURE_3D,0,yt,j.width,j.height,j.depth,0,kt,Ct,j.data);else if(E.isFramebufferTexture){if(ne)if(Gt)e.texStorage2D(s.TEXTURE_2D,Ot,yt,j.width,j.height);else{let rt=j.width,I=j.height;for(let ot=0;ot<Ot;ot++)e.texImage2D(s.TEXTURE_2D,ot,yt,rt,I,0,kt,Ct,null),rt>>=1,I>>=1}}else if(Lt.length>0&&Wt){Gt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,yt,Lt[0].width,Lt[0].height);for(let rt=0,I=Lt.length;rt<I;rt++)ft=Lt[rt],Gt?e.texSubImage2D(s.TEXTURE_2D,rt,0,0,kt,Ct,ft):e.texImage2D(s.TEXTURE_2D,rt,yt,kt,Ct,ft);E.generateMipmaps=!1}else Gt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ot,yt,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,Ct,j)):e.texImage2D(s.TEXTURE_2D,0,yt,kt,Ct,j);M(E,Wt)&&x(nt),gt.__version=it.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function J(C,E,z){if(E.image.length!==6)return;let nt=B(C,E),tt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);let it=n.get(tt);if(tt.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+z);let gt=Xt.getPrimaries(Xt.workingColorSpace),ct=E.colorSpace===ze?null:Xt.getPrimaries(E.colorSpace),dt=E.colorSpace===ze||gt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let At=E.isCompressedTexture||E.image[0].isCompressedTexture,Nt=E.image[0]&&E.image[0].isDataTexture,j=[];for(let rt=0;rt<6;rt++)!At&&!Nt?j[rt]=_(E.image[rt],!1,!0,i.maxCubemapSize):j[rt]=Nt?E.image[rt].image:E.image[rt],j[rt]=Dt(E,j[rt]);let Wt=j[0],kt=p(Wt)||o,Ct=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),ft=A(E.internalFormat,Ct,yt,E.colorSpace),Lt=o&&E.isVideoTexture!==!0,Gt=it.__version===void 0||nt===!0,ne=S(E,Wt,kt);D(s.TEXTURE_CUBE_MAP,E,kt);let Ot;if(At){Lt&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ft,Wt.width,Wt.height);for(let rt=0;rt<6;rt++){Ot=j[rt].mipmaps;for(let I=0;I<Ot.length;I++){let ot=Ot[I];E.format!==Be?Ct!==null?Lt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ot.width,ot.height,Ct,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,ft,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ot.width,ot.height,Ct,yt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,ft,ot.width,ot.height,0,Ct,yt,ot.data)}}}else{Ot=E.mipmaps,Lt&&Gt&&(Ot.length>0&&ne++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ft,j[0].width,j[0].height));for(let rt=0;rt<6;rt++)if(Nt){Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,j[rt].width,j[rt].height,Ct,yt,j[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ft,j[rt].width,j[rt].height,0,Ct,yt,j[rt].data);for(let I=0;I<Ot.length;I++){let lt=Ot[I].image[rt].image;Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,lt.width,lt.height,Ct,yt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,ft,lt.width,lt.height,0,Ct,yt,lt.data)}}else{Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct,yt,j[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ft,Ct,yt,j[rt]);for(let I=0;I<Ot.length;I++){let ot=Ot[I];Lt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,Ct,yt,ot.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,ft,Ct,yt,ot.image[rt])}}}M(E,kt)&&x(s.TEXTURE_CUBE_MAP),it.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function $(C,E,z,nt,tt,it){let gt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),dt=A(z.internalFormat,gt,ct,z.colorSpace);if(!n.get(E).__hasExternalTextures){let Nt=Math.max(1,E.width>>it),j=Math.max(1,E.height>>it);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,it,dt,Nt,j,E.depth,0,gt,ct,null):e.texImage2D(tt,it,dt,Nt,j,0,gt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),mt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,n.get(z).__webglTexture,0,Rt(E)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,n.get(z).__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(C,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let nt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||mt(E)){let tt=E.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ln?nt=s.DEPTH_COMPONENT32F:tt.type===Sn&&(nt=s.DEPTH_COMPONENT24));let it=Rt(E);mt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,nt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,it,nt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let nt=Rt(E);z&&mt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,E.width,E.height):mt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let nt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0;tt<nt.length;tt++){let it=nt[tt],gt=r.convert(it.format,it.colorSpace),ct=r.convert(it.type),dt=A(it.internalFormat,gt,ct,it.colorSpace),At=Rt(E);z&&mt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,dt,E.width,E.height):mt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,dt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,dt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let nt=n.get(E.depthTexture).__webglTexture,tt=Rt(E);if(E.depthTexture.format===Wn)mt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(E.depthTexture.format===wi)mt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function vt(C){let E=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");xt(E.__webglFramebuffer,C)}else if(z){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]=s.createRenderbuffer(),ut(E.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),ut(E.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(C,E,z){let nt=n.get(C);E!==void 0&&$(nt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&vt(C)}function F(C){let E=C.texture,z=n.get(C),nt=n.get(E);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=E.version,a.memory.textures++);let tt=C.isWebGLCubeRenderTarget===!0,it=C.isWebGLMultipleRenderTargets===!0,gt=p(C)||o;if(tt){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let dt=0;dt<E.mipmaps.length;dt++)z.__webglFramebuffer[ct][dt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(it)if(i.drawBuffers){let ct=C.texture;for(let dt=0,At=ct.length;dt<At;dt++){let Nt=n.get(ct[dt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&mt(C)===!1){let ct=it?E:[E];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){let At=ct[dt];z.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Nt=r.convert(At.format,At.colorSpace),j=r.convert(At.type),Wt=A(At.internalFormat,Nt,j,At.colorSpace,C.isXRRenderTarget===!0),kt=Rt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Wt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),D(s.TEXTURE_CUBE_MAP,E,gt);for(let ct=0;ct<6;ct++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)$(z.__webglFramebuffer[ct][dt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else $(z.__webglFramebuffer[ct],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);M(E,gt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let ct=C.texture;for(let dt=0,At=ct.length;dt<At;dt++){let Nt=ct[dt],j=n.get(Nt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),D(s.TEXTURE_2D,Nt,gt),$(z.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),M(Nt,gt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ct=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),D(ct,E,gt),o&&E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)$(z.__webglFramebuffer[dt],C,E,s.COLOR_ATTACHMENT0,ct,dt);else $(z.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ct,0);M(E,gt)&&x(ct),e.unbindTexture()}C.depthBuffer&&vt(C)}function ye(C){let E=p(C)||o,z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0,tt=z.length;nt<tt;nt++){let it=z[nt];if(M(it,E)){let gt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(it).__webglTexture;e.bindTexture(gt,ct),x(gt),e.unbindTexture()}}}function Mt(C){if(o&&C.samples>0&&mt(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],z=C.width,nt=C.height,tt=s.COLOR_BUFFER_BIT,it=[],gt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(C),dt=C.isWebGLMultipleRenderTargets===!0;if(dt)for(let At=0;At<E.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<E.length;At++){it.push(s.COLOR_ATTACHMENT0+At),C.depthBuffer&&it.push(gt);let Nt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Nt===!1&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),dt){let j=n.get(E[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,z,nt,0,0,z,nt,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<E.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]);let Nt=n.get(E[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Rt(C){return Math.min(i.maxSamples,C.samples)}function mt(C){let E=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(C){let E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Dt(C,E){let z=C.colorSpace,nt=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ra||z!==hn&&z!==ze&&(Xt.getTransfer(z)===Jt?o===!1?t.has("EXT_sRGB")===!0&&nt===Be?(C.format=Ra,C.minFilter=Ee,C.generateMipmaps=!1):E=tr.sRGBToLinear(E):(nt!==Be||tt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=L,this.resetTextureUnits=st,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ht,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=mt}function u2(s,t,e){let n=e.isWebGL2;function i(r,a=ze){let o,l=Xt.getTransfer(a);if(r===En)return s.UNSIGNED_BYTE;if(r===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===V3)return s.BYTE;if(r===H3)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Lc)return s.INT;if(r===Sn)return s.UNSIGNED_INT;if(r===ln)return s.FLOAT;if(r===Yi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===G3)return s.ALPHA;if(r===Be)return s.RGBA;if(r===W3)return s.LUMINANCE;if(r===X3)return s.LUMINANCE_ALPHA;if(r===Wn)return s.DEPTH_COMPONENT;if(r===wi)return s.DEPTH_STENCIL;if(r===Ra)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===q3)return s.RED;if(r===Nc)return s.RED_INTEGER;if(r===Y3)return s.RG;if(r===Fc)return s.RG_INTEGER;if(r===Oc)return s.RGBA_INTEGER;if(r===zi||r===qr||r===Yr||r===Zr)if(l===Jt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===zi)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===zi)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gs||r===Ws||r===al||r===ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Gs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ws)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ir)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xs||r===ll)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Xs)return l===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ll)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ul)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ml)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_l)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ml)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sl)return l===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jr||r===bl||r===Al)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Jr)return l===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Al)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Z3||r===El||r===Tl||r===wl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Jr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===El)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wa=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},vi=class extends ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},d2={type:"move"},Gi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xa=class extends un{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,u=null,M=[],x=[],A=new pt,S=null,v=new Te;v.layers.enable(1),v.viewport=new ae;let b=new Te;b.layers.enable(2),b.viewport=new ae;let R=[v,b],y=new Wa;y.layers.enable(1),y.layers.enable(2);let w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=M[D];return B===void 0&&(B=new Gi,M[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=M[D];return B===void 0&&(B=new Gi,M[D]=B),B.getGripSpace()},this.getHand=function(D){let B=M[D];return B===void 0&&(B=new Gi,M[D]=B),B.getHandSpace()};function Q(D){let B=x.indexOf(D.inputSource);if(B===-1)return;let Y=M[B];Y!==void 0&&(Y.update(D.inputSource,D.frame,c||a),Y.dispatchEvent({type:D.type,data:D.inputSource}))}function st(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",st),i.removeEventListener("inputsourceschange",L);for(let D=0;D<M.length;D++){let B=x[D];B!==null&&(x[D]=null,M[D].disconnect(B))}w=null,G=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",st),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new dn(m.framebufferWidth,m.framebufferHeight,{format:Be,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,Y=null,J=null;_.depth&&(J=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=_.stencil?wi:Wn,Y=_.stencil?Gn:Sn);let $={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer($),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new dn(f.textureWidth,f.textureHeight,{format:Be,type:En,depthTexture:new cr(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let ut=t.properties.get(u);ut.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(D){for(let B=0;B<D.removed.length;B++){let Y=D.removed[B],J=x.indexOf(Y);J>=0&&(x[J]=null,M[J].disconnect(Y))}for(let B=0;B<D.added.length;B++){let Y=D.added[B],J=x.indexOf(Y);if(J===-1){for(let ut=0;ut<M.length;ut++)if(ut>=x.length){x.push(Y),J=ut;break}else if(x[ut]===null){x[ut]=Y,J=ut;break}if(J===-1)break}let $=M[J];$&&$.connect(Y)}}let V=new P,U=new P;function q(D,B,Y){V.setFromMatrixPosition(B.matrixWorld),U.setFromMatrixPosition(Y.matrixWorld);let J=V.distanceTo(U),$=B.projectionMatrix.elements,ut=Y.projectionMatrix.elements,xt=$[14]/($[10]-1),vt=$[14]/($[10]+1),Ht=($[9]+1)/$[5],F=($[9]-1)/$[5],ye=($[8]-1)/$[0],Mt=(ut[8]+1)/ut[0],Rt=xt*ye,mt=xt*Mt,jt=J/(-ye+Mt),Dt=jt*-ye;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Dt),D.translateZ(jt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let C=xt+jt,E=vt+jt,z=Rt-Dt,nt=mt+(J-Dt),tt=Ht*vt/E*C,it=F*vt/E*C;D.projectionMatrix.makePerspective(z,nt,tt,it,C,E),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function X(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;y.near=b.near=v.near=D.near,y.far=b.far=v.far=D.far,(w!==y.near||G!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,G=y.far);let B=D.parent,Y=y.cameras;X(y,B);for(let J=0;J<Y.length;J++)X(Y[J],B);Y.length===2?q(y,v,b):y.projectionMatrix.copy(v.projectionMatrix),H(D,y,B)};function H(D,B,Y){Y===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(Y.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Zi*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let K=null;function Z(D,B){if(h=B.getViewerPose(c||a),g=B,h!==null){let Y=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let J=!1;Y.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let $=0;$<Y.length;$++){let ut=Y[$],xt=null;if(m!==null)xt=m.getViewport(ut);else{let Ht=d.getViewSubImage(f,ut);xt=Ht.viewport,$===0&&(t.setRenderTargetTextures(u,Ht.colorTexture,f.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(u))}let vt=R[$];vt===void 0&&(vt=new Te,vt.layers.enable($),vt.viewport=new ae,R[$]=vt),vt.matrix.fromArray(ut.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ut.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),$===0&&(y.matrix.copy(vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(vt)}}for(let Y=0;Y<M.length;Y++){let J=x[Y],$=M[Y];J!==null&&$!==void 0&&$.update(J,B,c||a)}K&&K(D,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let et=new Wc;et.setAnimationLoop(Z),this.setAnimationLoop=function(D){K=D},this.dispose=function(){}}};function f2(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Gc(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,M,x,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,M,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===we&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===we&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let M=t.get(u).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let M=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p2(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){let A=x.program;n.uniformBlockBinding(M,A)}function c(M,x){let A=i[M.id];A===void 0&&(g(M),A=h(M),i[M.id]=A,M.addEventListener("dispose",p));let S=x.program;n.updateUBOMapping(M,S);let v=t.render.frame;r[M.id]!==v&&(f(M),r[M.id]=v)}function h(M){let x=d();M.__bindingPointIndex=x;let A=s.createBuffer(),S=M.__size,v=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,S,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,A),A}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=i[M.id],A=M.uniforms,S=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let v=0,b=A.length;v<b;v++){let R=Array.isArray(A[v])?A[v]:[A[v]];for(let y=0,w=R.length;y<w;y++){let G=R[y];if(m(G,v,y,S)===!0){let Q=G.__offset,st=Array.isArray(G.value)?G.value:[G.value],L=0;for(let V=0;V<st.length;V++){let U=st[V],q=_(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,Q+L,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,x,A,S){let v=M.value,b=x+"_"+A;if(S[b]===void 0)return typeof v=="number"||typeof v=="boolean"?S[b]=v:S[b]=v.clone(),!0;{let R=S[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return S[b]=v,!0}else if(R.equals(v)===!1)return R.copy(v),!0}return!1}function g(M){let x=M.uniforms,A=0,S=16;for(let b=0,R=x.length;b<R;b++){let y=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,G=y.length;w<G;w++){let Q=y[w],st=Array.isArray(Q.value)?Q.value:[Q.value];for(let L=0,V=st.length;L<V;L++){let U=st[L],q=_(U),X=A%S;X!==0&&S-X<q.boundary&&(A+=S-X),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=q.storage}}}let v=A%S;return v>0&&(A+=S-v),M.__size=A,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}var $i=class{constructor(t={}){let{canvas:e=bh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,u=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;let x=this,A=!1,S=0,v=0,b=null,R=-1,y=null,w=new ae,G=new ae,Q=null,st=new Tt(0),L=0,V=e.width,U=e.height,q=1,X=null,H=null,K=new ae(0,0,V,U),Z=new ae(0,0,V,U),et=!1,D=new Qi,B=!1,Y=!1,J=null,$=new Vt,ut=new pt,xt=new P,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return b===null?q:1}let F=n;function ye(T,N){for(let k=0;k<T.length;k++){let W=T[k],O=e.getContext(W,N);if(O!==null)return O}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),F=ye(N,T),F===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Mt,Rt,mt,jt,Dt,C,E,z,nt,tt,it,gt,ct,dt,At,Nt,j,Wt,kt,Ct,yt,ft,Lt,Gt;function ne(){Mt=new Ld(F),Rt=new Td(F,Mt,t),Mt.init(Rt),ft=new u2(F,Mt,Rt),mt=new c2(F,Mt,Rt),jt=new Nd(F),Dt=new Qf,C=new h2(F,Mt,mt,Dt,Rt,ft,jt),E=new Cd(x),z=new Id(x),nt=new Gh(F,Rt),Lt=new Ad(F,Mt,nt,Rt),tt=new Ud(F,nt,jt,Lt),it=new zd(F,tt,nt,jt),kt=new Bd(F,Rt,C),Nt=new wd(Dt),gt=new Kf(x,E,z,Mt,Rt,Lt,Nt),ct=new f2(x,Dt),dt=new jf,At=new r2(Mt,Rt),Wt=new bd(x,E,z,mt,it,f,l),j=new l2(x,it,Rt),Gt=new p2(F,jt,Rt,mt),Ct=new Ed(F,Mt,jt,Rt),yt=new Dd(F,Mt,jt,Rt),jt.programs=gt.programs,x.capabilities=Rt,x.extensions=Mt,x.properties=Dt,x.renderLists=dt,x.shadowMap=j,x.state=mt,x.info=jt}ne();let Ot=new Xa(x,F);this.xr=Ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(V,U,!1))},this.getSize=function(T){return T.set(V,U)},this.setSize=function(T,N,k=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,U=N,e.width=Math.floor(T*q),e.height=Math.floor(N*q),k===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(V*q,U*q).floor()},this.setDrawingBufferSize=function(T,N,k){V=T,U=N,q=k,e.width=Math.floor(T*k),e.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,N,k,W){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,N,k,W),mt.viewport(w.copy(K).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,N,k,W){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,N,k,W),mt.scissor(G.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){mt.setScissorTest(et=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(T=!0,N=!0,k=!0){let W=0;if(T){let O=!1;if(b!==null){let ht=b.texture.format;O=ht===Oc||ht===Fc||ht===Nc}if(O){let ht=b.texture.type,_t=ht===En||ht===Sn||ht===mo||ht===Gn||ht===Uc||ht===Dc,bt=Wt.getClearColor(),wt=Wt.getClearAlpha(),Ft=bt.r,Pt=bt.g,It=bt.b;_t?(m[0]=Ft,m[1]=Pt,m[2]=It,m[3]=wt,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Ft,g[1]=Pt,g[2]=It,g[3]=wt,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),k&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),At.dispose(),Dt.dispose(),E.dispose(),z.dispose(),it.dispose(),Lt.dispose(),Gt.dispose(),gt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Me),Ot.removeEventListener("sessionend",Zt),J&&(J.dispose(),J=null),Se.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=jt.autoReset,N=j.enabled,k=j.autoUpdate,W=j.needsUpdate,O=j.type;ne(),jt.autoReset=T,j.enabled=N,j.autoUpdate=k,j.needsUpdate=W,j.type=O}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){let N=T.target;N.removeEventListener("dispose",lt),Et(N)}function Et(T){St(T),Dt.remove(T)}function St(T){let N=Dt.get(T).programs;N!==void 0&&(N.forEach(function(k){gt.releaseProgram(k)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,W,O,ht){N===null&&(N=vt);let _t=O.isMesh&&O.matrixWorld.determinant()<0,bt=s3(T,N,k,W,O);mt.setMaterial(W,_t);let wt=k.index,Ft=1;if(W.wireframe===!0){if(wt=tt.getWireframeAttribute(k),wt===void 0)return;Ft=2}let Pt=k.drawRange,It=k.attributes.position,re=Pt.start*Ft,Pe=(Pt.start+Pt.count)*Ft;ht!==null&&(re=Math.max(re,ht.start*Ft),Pe=Math.min(Pe,(ht.start+ht.count)*Ft)),wt!==null?(re=Math.max(re,0),Pe=Math.min(Pe,wt.count)):It!=null&&(re=Math.max(re,0),Pe=Math.min(Pe,It.count));let de=Pe-re;if(de<0||de===1/0)return;Lt.setup(O,W,bt,k,wt);let $e,te=Ct;if(wt!==null&&($e=nt.get(wt),te=yt,te.setIndex($e)),O.isMesh)W.wireframe===!0?(mt.setLineWidth(W.wireframeLinewidth*Ht()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(O.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),mt.setLineWidth(Bt*Ht()),O.isLineSegments?te.setMode(F.LINES):O.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else O.isPoints?te.setMode(F.POINTS):O.isSprite&&te.setMode(F.TRIANGLES);if(O.isBatchedMesh)te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)te.renderInstances(re,de,O.count);else if(k.isInstancedBufferGeometry){let Bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Vr=Math.min(k.instanceCount,Bt);te.renderInstances(re,de,Vr)}else te.render(re,de)};function qt(T,N,k){T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=we,T.needsUpdate=!0,ms(T,N,k),T.side=Ze,T.needsUpdate=!0,ms(T,N,k),T.side=Oe):ms(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),p=At.get(k),p.init(),M.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==k&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(x._useLegacyLights);let W=new Set;return T.traverse(function(O){let ht=O.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){let bt=ht[_t];qt(bt,k,O),W.add(bt)}else qt(ht,k,O),W.add(ht)}),M.pop(),p=null,W},this.compileAsync=function(T,N,k=null){let W=this.compile(T,N,k);return new Promise(O=>{function ht(){if(W.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){O(T);return}setTimeout(ht,10)}Mt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Yt=null;function ue(T){Yt&&Yt(T)}function Me(){Se.stop()}function Zt(){Se.start()}let Se=new Wc;Se.setAnimationLoop(ue),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(T){Yt=T,Ot.setAnimationLoop(T),T===null?Se.stop():Se.start()},Ot.addEventListener("sessionstart",Me),Ot.addEventListener("sessionend",Zt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(N),N=Ot.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,b),p=At.get(T,M.length),p.init(),M.push(p),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),D.setFromProjectionMatrix($),Y=this.localClippingEnabled,B=Nt.init(this.clippingPlanes,Y),_=dt.get(T,u.length),_.init(),u.push(_),Ye(T,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,H),this.info.render.frame++,B===!0&&Nt.beginShadows();let k=p.state.shadowsArray;if(j.render(k,T,N),B===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(_,T),p.setupLights(x._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let O=0,ht=W.length;O<ht;O++){let _t=W[O];qo(_,T,_t,_t.viewport)}}else qo(_,T,N);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,N),Lt.resetDefaultState(),R=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Ye(T,N,k,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){W&&xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let _t=it.update(T),bt=T.material;bt.visible&&_.push(T,_t,bt,k,xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){let _t=it.update(T),bt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xt.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),xt.copy(_t.boundingSphere.center)),xt.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(bt)){let wt=_t.groups;for(let Ft=0,Pt=wt.length;Ft<Pt;Ft++){let It=wt[Ft],re=bt[It.materialIndex];re&&re.visible&&_.push(T,_t,re,k,xt.z,It)}}else bt.visible&&_.push(T,_t,bt,k,xt.z,null)}}let ht=T.children;for(let _t=0,bt=ht.length;_t<bt;_t++)Ye(ht[_t],N,k,W)}function qo(T,N,k,W){let O=T.opaque,ht=T.transmissive,_t=T.transparent;p.setupLightsView(k),B===!0&&Nt.setGlobalState(x.clippingPlanes,k),ht.length>0&&i3(O,ht,N,k),W&&mt.viewport(w.copy(W)),O.length>0&&ps(O,N,k),ht.length>0&&ps(ht,N,k),_t.length>0&&ps(_t,N,k),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function i3(T,N,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ht=Rt.isWebGL2;J===null&&(J=new dn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Yi:En,minFilter:Tn,samples:ht?4:0})),x.getDrawingBufferSize(ut),ht?J.setSize(ut.x,ut.y):J.setSize(js(ut.x),js(ut.y));let _t=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(st),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let bt=x.toneMapping;x.toneMapping=An,ps(T,k,W),C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J);let wt=!1;for(let Ft=0,Pt=N.length;Ft<Pt;Ft++){let It=N[Ft],re=It.object,Pe=It.geometry,de=It.material,$e=It.group;if(de.side===Oe&&re.layers.test(W.layers)){let te=de.side;de.side=we,de.needsUpdate=!0,Yo(re,k,W,Pe,de,$e),de.side=te,de.needsUpdate=!0,wt=!0}}wt===!0&&(C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J)),x.setRenderTarget(_t),x.setClearColor(st,L),x.toneMapping=bt}function ps(T,N,k){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ht=T.length;O<ht;O++){let _t=T[O],bt=_t.object,wt=_t.geometry,Ft=W===null?_t.material:W,Pt=_t.group;bt.layers.test(k.layers)&&Yo(bt,N,k,wt,Ft,Pt)}}function Yo(T,N,k,W,O,ht){T.onBeforeRender(x,N,k,W,O,ht),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,N,k,W,T,ht),O.transparent===!0&&O.side===Oe&&O.forceSinglePass===!1?(O.side=we,O.needsUpdate=!0,x.renderBufferDirect(k,N,W,O,T,ht),O.side=Ze,O.needsUpdate=!0,x.renderBufferDirect(k,N,W,O,T,ht),O.side=Oe):x.renderBufferDirect(k,N,W,O,T,ht),T.onAfterRender(x,N,k,W,O,ht)}function ms(T,N,k){N.isScene!==!0&&(N=vt);let W=Dt.get(T),O=p.state.lights,ht=p.state.shadowsArray,_t=O.state.version,bt=gt.getParameters(T,O.state,ht,N,k),wt=gt.getProgramCacheKey(bt),Ft=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?z:E).get(T.envMap||W.environment),Ft===void 0&&(T.addEventListener("dispose",lt),Ft=new Map,W.programs=Ft);let Pt=Ft.get(wt);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===_t)return Jo(T,bt),Pt}else bt.uniforms=gt.getUniforms(T),T.onBuild(k,bt,x),T.onBeforeCompile(bt,x),Pt=gt.acquireProgram(bt,wt),Ft.set(wt,Pt),W.uniforms=bt.uniforms;let It=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=Nt.uniform),Jo(T,bt),W.needsLights=a3(T),W.lightsStateVersion=_t,W.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function Zo(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Si.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Jo(T,N){let k=Dt.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function s3(T,N,k,W,O){N.isScene!==!0&&(N=vt),C.resetTextureUnits();let ht=N.fog,_t=W.isMeshStandardMaterial?N.environment:null,bt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hn,wt=(W.isMeshStandardMaterial?z:E).get(W.envMap||_t),Ft=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pt=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,Pe=!!k.morphAttributes.color,de=An;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(de=x.toneMapping);let $e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=$e!==void 0?$e.length:0,Bt=Dt.get(W),Vr=p.state.lights;if(B===!0&&(Y===!0||T!==y)){let Ne=T===y&&W.id===R;Nt.setState(W,T,Ne)}let ie=!1;W.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Vr.state.version||Bt.outputColorSpace!==bt||O.isBatchedMesh&&Bt.batching===!1||!O.isBatchedMesh&&Bt.batching===!0||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||O.isInstancedMesh&&Bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Bt.instancingColor===!1&&O.instanceColor!==null||Bt.envMap!==wt||W.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Nt.numPlanes||Bt.numIntersection!==Nt.numIntersection)||Bt.vertexAlphas!==Ft||Bt.vertexTangents!==Pt||Bt.morphTargets!==It||Bt.morphNormals!==re||Bt.morphColors!==Pe||Bt.toneMapping!==de||Rt.isWebGL2===!0&&Bt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,Bt.__version=W.version);let Dn=Bt.currentProgram;ie===!0&&(Dn=ms(W,N,O));let Ko=!1,Di=!1,Hr=!1,ge=Dn.getUniforms(),Nn=Bt.uniforms;if(mt.useProgram(Dn.program)&&(Ko=!0,Di=!0,Hr=!0),W.id!==R&&(R=W.id,Di=!0),Ko||y!==T){ge.setValue(F,"projectionMatrix",T.projectionMatrix),ge.setValue(F,"viewMatrix",T.matrixWorldInverse);let Ne=ge.map.cameraPosition;Ne!==void 0&&Ne.setValue(F,xt.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Di=!0,Hr=!0)}if(O.isSkinnedMesh){ge.setOptional(F,O,"bindMatrix"),ge.setOptional(F,O,"bindMatrixInverse");let Ne=O.skeleton;Ne&&(Rt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ge.setValue(F,"boneTexture",Ne.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(ge.setOptional(F,O,"batchingTexture"),ge.setValue(F,"batchingTexture",O._matricesTexture,C));let Gr=k.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&Rt.isWebGL2===!0)&&kt.update(O,k,Dn),(Di||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,ge.setValue(F,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=wt,Nn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Di&&(ge.setValue(F,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&r3(Nn,Hr),ht&&W.fog===!0&&ct.refreshFogUniforms(Nn,ht),ct.refreshMaterialUniforms(Nn,W,q,U,J),Si.upload(F,Zo(Bt),Nn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Si.upload(F,Zo(Bt),Nn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(F,"center",O.center),ge.setValue(F,"modelViewMatrix",O.modelViewMatrix),ge.setValue(F,"normalMatrix",O.normalMatrix),ge.setValue(F,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ne=W.uniformsGroups;for(let Wr=0,o3=Ne.length;Wr<o3;Wr++)if(Rt.isWebGL2){let Qo=Ne[Wr];Gt.update(Qo,Dn),Gt.bind(Qo,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function r3(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function a3(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,k){Dt.get(T.texture).__webglTexture=N,Dt.get(T.depthTexture).__webglTexture=k;let W=Dt.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){let k=Dt.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){b=T,S=N,v=k;let W=!0,O=null,ht=!1,_t=!1;if(T){let wt=Dt.get(T);wt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):wt.__webglFramebuffer===void 0?C.setupRenderTarget(T):wt.__hasExternalTextures&&C.rebindTextures(T,Dt.get(T.texture).__webglTexture,Dt.get(T.depthTexture).__webglTexture);let Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(_t=!0);let Pt=Dt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?O=Pt[N][k]:O=Pt[N],ht=!0):Rt.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?O=Dt.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?O=Pt[k]:O=Pt,w.copy(T.viewport),G.copy(T.scissor),Q=T.scissorTest}else w.copy(K).multiplyScalar(q).floor(),G.copy(Z).multiplyScalar(q).floor(),Q=et;if(mt.bindFramebuffer(F.FRAMEBUFFER,O)&&Rt.drawBuffers&&W&&mt.drawBuffers(T,O),mt.viewport(w),mt.scissor(G),mt.setScissorTest(Q),ht){let wt=Dt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,k)}else if(_t){let wt=Dt.get(T.texture),Ft=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,k||0,Ft)}R=-1},this.readRenderTargetPixels=function(T,N,k,W,O,ht,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){mt.bindFramebuffer(F.FRAMEBUFFER,bt);try{let wt=T.texture,Ft=wt.format,Pt=wt.type;if(Ft!==Be&&ft.convert(Ft)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Pt===Yi&&(Mt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Pt!==En&&ft.convert(Pt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===ln&&(Rt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&k>=0&&k<=T.height-O&&F.readPixels(N,k,W,O,ft.convert(Ft),ft.convert(Pt),ht)}finally{let wt=b!==null?Dt.get(b).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(T,N,k=0){let W=Math.pow(2,-k),O=Math.floor(N.image.width*W),ht=Math.floor(N.image.height*W);C.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,T.x,T.y,O,ht),mt.unbindTexture()},this.copyTextureToTexture=function(T,N,k,W=0){let O=N.image.width,ht=N.image.height,_t=ft.convert(k.format),bt=ft.convert(k.type);C.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,T.x,T.y,O,ht,_t,bt,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,_t,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,T.x,T.y,_t,bt,N.image),W===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k,W,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=T.max.x-T.min.x+1,_t=T.max.y-T.min.y+1,bt=T.max.z-T.min.z+1,wt=ft.convert(W.format),Ft=ft.convert(W.type),Pt;if(W.isData3DTexture)C.setTexture3D(W,0),Pt=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)C.setTexture2DArray(W,0),Pt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);let It=F.getParameter(F.UNPACK_ROW_LENGTH),re=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pe=F.getParameter(F.UNPACK_SKIP_PIXELS),de=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES),te=k.isCompressedTexture?k.mipmaps[O]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Pt,O,N.x,N.y,N.z,ht,_t,bt,wt,Ft,te.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Pt,O,N.x,N.y,N.z,ht,_t,bt,wt,te.data)):F.texSubImage3D(Pt,O,N.x,N.y,N.z,ht,_t,bt,wt,Ft,te),F.pixelStorei(F.UNPACK_ROW_LENGTH,It),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,de),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),O===0&&W.generateMipmaps&&F.generateMipmap(Pt),mt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),mt.unbindTexture()},this.resetState=function(){S=0,v=0,b=null,mt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===xo?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Xn:Bc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Xn?Qt:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},qa=class extends $i{};qa.prototype.isWebGL1Renderer=!0;var hr=class extends ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var mc=new P,gc=new ae,_c=new ae,m2=new P,xc=new Vt,Bs=new P,va=new wn,vc=new Vt,ya=new Ki,ur=class extends me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sl,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Je),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bs),this.boundingBox.expandByPoint(Bs)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bs),this.boundingSphere.expandByPoint(Bs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),t.ray.intersectsSphere(va)!==!1&&(vc.copy(i).invert(),ya.copy(t.ray).applyMatrix4(vc),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===z3?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;gc.fromBufferAttribute(i.attributes.skinIndex,t),_c.fromBufferAttribute(i.attributes.skinWeight,t),mc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=_c.getComponent(r);if(a!==0){let o=gc.getComponent(r);xc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(m2.copy(mc).applyMatrix4(xc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Zn=class extends ee{constructor(){super(),this.isBone=!0,this.type="Bone"}},dr=class extends De{constructor(t=null,e=1,n=1,i,r,a,o,l,c=le,h=le,d,f){super(null,a,o,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yc=new Vt,g2=new Vt,fr=class s{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:g2;yc.multiplyMatrices(o,e[r]),yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new dr(e,t,t,Be,ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zn),this.bones.push(a),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}};var ji=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mc=new P,Sc=new P,bc=new Vt,Ma=new Ki,zs=new wn,pr=class extends ee{constructor(t=new Re,e=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Mc.fromBufferAttribute(e,i-1),Sc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Mc.distanceTo(Sc);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;bc.copy(i).invert(),Ma.copy(t.ray).applyMatrix4(bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,d=new P,f=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let u=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=u,A=M-1;x<A;x+=m){let S=g.getX(x),v=g.getX(x+1);if(c.fromBufferAttribute(p,S),h.fromBufferAttribute(p,v),Ma.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let u=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=u,A=M-1;x<A;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Ma.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var Ve=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,m=(a-h)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],r=[],a=[],o=new P,l=new Vt;for(let m=0;m<=t;m++){let g=m/t;i[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pe(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(pe(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ts=class extends Ve{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new pt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*d+this.aX,c=f*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ya=class extends ts{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mo(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,m*=h,i(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var ks=new P,Sa=new Mo,ba=new Mo,Aa=new Mo,Za=class extends Ve{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ks.subVectors(i[0],i[1]).add(i[0]),c=ks);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ks),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Sa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,p),ba.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,p),Aa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ba.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Aa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ac(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function _2(s,t){let e=1-s;return e*e*t}function x2(s,t){return 2*(1-s)*s*t}function v2(s,t){return s*s*t}function Wi(s,t,e,n){return _2(s,t)+x2(s,e)+v2(s,n)}function y2(s,t){let e=1-s;return e*e*e*t}function M2(s,t){let e=1-s;return 3*e*e*s*t}function S2(s,t){return 3*(1-s)*s*s*t}function b2(s,t){return s*s*s*t}function Xi(s,t,e,n,i){return y2(s,t)+M2(s,e)+S2(s,n)+b2(s,i)}var mr=class extends Ve{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,i.x,r.x,a.x,o.x),Xi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Ve{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xi(t,i.x,r.x,a.x,o.x),Xi(t,i.y,r.y,a.y,o.y),Xi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gr=class extends Ve{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Ve{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends Ve{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,i.x,r.x,a.x),Wi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Ve{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Wi(t,i.x,r.x,a.x),Wi(t,i.y,r.y,a.y),Wi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends Ve{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ac(o,l.x,c.x,h.x,d.x),Ac(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new pt().fromArray(i))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:Za,CubicBezierCurve:mr,CubicBezierCurve3:Ja,EllipseCurve:ts,LineCurve:gr,LineCurve3:Ka,QuadraticBezierCurve:_r,QuadraticBezierCurve3:Qa,SplineCurve:xr}),$a=class extends Ve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ec[i.type]().fromJSON(i))}return this}},ja=class extends $a{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new _r(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new mr(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new ts(t,e,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},to=class s extends Re{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=pe(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,f=new pt,m=new P,g=new P,_=new P,p=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,m.x=u*1,m.y=-p,m.z=u*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*i,A=Math.sin(x),S=Math.cos(x);for(let v=0;v<=t.length-1;v++){d.x=t[v].x*A,d.y=t[v].y,d.z=t[v].x*S,a.push(d.x,d.y,d.z),f.x=M/e,f.y=v/(t.length-1),o.push(f.x,f.y);let b=l[3*v+0]*A,R=l[3*v+1],y=l[3*v+0]*S;c.push(b,R,y)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let A=x+M*t.length,S=A,v=A+t.length,b=A+t.length+1,R=A+1;r.push(S,v,R),r.push(b,R,v)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},vr=class s extends to{constructor(t=1,e=1,n=4,i=8){let r=new ja;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Pi=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,f=new P,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){let M=[],x=u/n,A=0;u===0&&a===0?A=.5/e:u===n&&l===Math.PI&&(A=-.5/e);for(let S=0;S<=e;S++){let v=S/e;d.x=-t*Math.cos(i+v*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+v*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(v+A,1-x),M.push(c++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){let x=h[u][M+1],A=h[u][M],S=h[u+1][M],v=h[u+1][M+1];(u!==0||a>0)&&m.push(x,A,v),(u!==n-1||l<Math.PI)&&m.push(A,S,v)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Vs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function A2(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function E2(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Tc(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Kc(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}var Rn=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eo=class extends Rn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pi,endingEnd:pi}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mi:r=t,o=2*e-n;break;case Zs:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mi:a=t,l=2*n-e;break;case Zs:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,A=m*p-m*_;for(let S=0;S!==o;++S)r[S]=u*a[h+S]+M*a[c+S]+x*a[l+S]+A*a[d+S];return r}},yr=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},no=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ys:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&A2(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=Ys;var Pn=class extends He{};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=qs;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mr=class extends He{};Mr.prototype.ValueTypeName="color";var fn=class extends He{};fn.prototype.ValueTypeName="number";var io=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ke=class extends He{InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};Ke.prototype.ValueTypeName="quaternion";Ke.prototype.DefaultInterpolation=Ys;Ke.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends He{};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=qs;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var Qe=class extends He{};Qe.prototype.ValueTypeName="vector";var pn=class{constructor(t,e=-1,n,i=go){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(w2(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(He.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=E2(l);l=Tc(l,1,h),c=Tc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fn(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,f,m,g,_){if(m.length!==0){let p=[],u=[];Kc(m,p,u,g),p.length!==0&&_.push(new d(f,p,u))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)m[f[g].morphTargets[_]]=-1;for(let _ in m){let p=[],u=[];for(let M=0;M!==f[g].morphTargets.length;++M){let x=f[g];p.push(x.time),u.push(x.morphTarget===_?1:0)}i.push(new fn(".morphTargetInfluence["+_+"]",p,u))}l=m.length*a}else{let m=".bones["+e[d].name+"]";n(Qe,m+".position",f,"pos",i),n(Ke,m+".quaternion",f,"rot",i),n(Qe,m+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function T2(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fn;case"vector":case"vector2":case"vector3":case"vector4":return Qe;case"color":return Mr;case"quaternion":return Ke;case"bool":case"boolean":return Pn;case"string":return In}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function w2(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=T2(s.type);if(s.times===void 0){let e=[],n=[];Kc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Sr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},es=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},C2=new es,mn=class{constructor(t){this.manager=t!==void 0?t:C2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var rn={},so=class extends Error{constructor(t,e){super(t),this.response=e}},ns=class extends mn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Sr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(rn[t]!==void 0){rn[t].push({onLoad:e,onProgress:n,onError:i});return}rn[t]=[],rn[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rn[t],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0,_=0,p=new ReadableStream({start(u){M();function M(){d.read().then(({done:x,value:A})=>{if(x)u.close();else{_+=A.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let v=0,b=h.length;v<b;v++){let R=h[v];R.onProgress&&R.onProgress(S)}u.enqueue(A),M()}})}}});return new Response(p)}else throw new so(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Sr.add(t,c);let h=rn[t];delete rn[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=rn[t];if(h===void 0)throw this.manager.itemError(t),c;delete rn[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var ro=class extends mn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Sr.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ji("img");function l(){h(),Sr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var br=class extends mn{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new dr,o=new ns(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ue,a.wrapT=c.wrapT!==void 0?c.wrapT:Ue,a.magFilter=c.magFilter!==void 0?c.magFilter:Ee,a.minFilter=c.minFilter!==void 0?c.minFilter:Ee,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Tn),c.mipmapCount===1&&(a.minFilter=Ee),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}},Ar=class extends mn{constructor(t){super(t)}load(t,e,n,i){let r=new De,a=new ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Er=class extends ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Tr=class extends Er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new Vt,wc=new P,Cc=new P,ao=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var oo=class extends ao{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.shadow=new oo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cr=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Rr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Rc(){return(typeof performance>"u"?Date:performance).now()}var lo=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){$t.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let a=this._workIndex*r;$t.multiplyQuaternionsFlat(t,a,t,e,t,n),$t.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},So="\\[\\]\\.:\\/",R2=new RegExp("["+So+"]","g"),bo="[^"+So+"]",P2="[^"+So.replace("\\.","")+"]",I2=/((?:WC+[\/:])*)/.source.replace("WC",bo),L2=/(WCOD+)?/.source.replace("WCOD",P2),U2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bo),D2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bo),N2=new RegExp("^"+I2+L2+U2+D2+"$"),F2=["material","materials","bones","map"],co=class{constructor(t,e,n){let i=n||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Kt=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R2,"")}static parseTrackName(t){let e=N2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);F2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=co;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ho=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:pi,endingEnd:pi};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=K3,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $3:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case go:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=n===Q3;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===J3){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=mi,i.endingEnd=mi):(t?i.endingStart=this.zeroSlopeAtStart?mi:pi:i.endingStart=Zs,e?i.endingEnd=this.zeroSlopeAtEnd?mi:pi:i.endingEnd=Zs)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},O2=new Float32Array(1),is=class extends un{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let f=i[d],m=f.name,g=h[m];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=e&&e._propertyBindings[d].binding.parsedPath;g=new lo(Kt.create(n,m,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let d=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new yr(new Float32Array(2),new Float32Array(2),1,O2),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,a=typeof t=="string"?pn.findByName(i,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=go),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new ho(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?pn.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);var z2=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,k2=`
#ifdef USE_MATCAP

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
	vec4 matcapColor = texture2D( matcap, uv );

	#ifdef MATCAP_BLENDING_MULTIPLY

		outgoingLight *= matcapColor.rgb;

	#elif defined( MATCAP_BLENDING_ADD )

		outgoingLight += matcapColor.rgb;

	#endif

#endif
`,rs={name:"MMDToonShader",defines:{TOON:!0,MATCAP:!0,MATCAP_BLENDING_ADD:!0},uniforms:ss.merge([ve.toon.uniforms,ve.phong.uniforms,ve.matcap.uniforms]),vertexShader:ve.phong.vertexShader.replace("#include <envmap_pars_vertex>","").replace("#include <envmap_vertex>",""),fragmentShader:ve.phong.fragmentShader.replace("#include <common>",`
					#ifdef USE_MATCAP
						uniform sampler2D matcap;
					#endif

					#include <common>
				`).replace("#include <envmap_common_pars_fragment>",`
					#include <gradientmap_pars_fragment>
				`).replace("#include <envmap_pars_fragment>","").replace("#include <lights_phong_pars_fragment>",z2).replace("#include <envmap_fragment>",`
					${k2}
				`)};var as=class extends br{constructor(t){super(t)}parse(t){function e(U){switch(U.image_type){case f:case _:if(U.colormap_length>256||U.colormap_size!==24||U.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case u:if(U.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+U.image_type)}if(U.width<=0||U.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(U.pixel_size!==8&&U.pixel_size!==16&&U.pixel_size!==24&&U.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+U.pixel_size)}function n(U,q,X,H,K){let Z,et,D=X.pixel_size>>3,B=X.width*X.height*D;if(q&&(et=K.subarray(H,H+=X.colormap_length*(X.colormap_size>>3))),U){Z=new Uint8Array(B);let Y,J,$,ut=0,xt=new Uint8Array(D);for(;ut<B;)if(Y=K[H++],J=(Y&127)+1,Y&128){for($=0;$<D;++$)xt[$]=K[H++];for($=0;$<J;++$)Z.set(xt,ut+$*D);ut+=D*J}else{for(J*=D,$=0;$<J;++$)Z[ut+$]=K[H++];ut+=J}}else Z=K.subarray(H,H+=q?X.width*X.height:B);return{pixel_data:Z,palettes:et}}function i(U,q,X,H,K,Z,et,D,B){let Y=B,J,$=0,ut,xt,vt=w.width;for(xt=q;xt!==H;xt+=X)for(ut=K;ut!==et;ut+=Z,$++)J=D[$],U[(ut+vt*xt)*4+3]=255,U[(ut+vt*xt)*4+2]=Y[J*3+0],U[(ut+vt*xt)*4+1]=Y[J*3+1],U[(ut+vt*xt)*4+0]=Y[J*3+2];return U}function r(U,q,X,H,K,Z,et,D){let B,Y=0,J,$,ut=w.width;for($=q;$!==H;$+=X)for(J=K;J!==et;J+=Z,Y+=2)B=D[Y+0]+(D[Y+1]<<8),U[(J+ut*$)*4+0]=(B&31744)>>7,U[(J+ut*$)*4+1]=(B&992)>>2,U[(J+ut*$)*4+2]=(B&31)<<3,U[(J+ut*$)*4+3]=B&32768?0:255;return U}function a(U,q,X,H,K,Z,et,D){let B=0,Y,J,$=w.width;for(J=q;J!==H;J+=X)for(Y=K;Y!==et;Y+=Z,B+=3)U[(Y+$*J)*4+3]=255,U[(Y+$*J)*4+2]=D[B+0],U[(Y+$*J)*4+1]=D[B+1],U[(Y+$*J)*4+0]=D[B+2];return U}function o(U,q,X,H,K,Z,et,D){let B=0,Y,J,$=w.width;for(J=q;J!==H;J+=X)for(Y=K;Y!==et;Y+=Z,B+=4)U[(Y+$*J)*4+2]=D[B+0],U[(Y+$*J)*4+1]=D[B+1],U[(Y+$*J)*4+0]=D[B+2],U[(Y+$*J)*4+3]=D[B+3];return U}function l(U,q,X,H,K,Z,et,D){let B,Y=0,J,$,ut=w.width;for($=q;$!==H;$+=X)for(J=K;J!==et;J+=Z,Y++)B=D[Y],U[(J+ut*$)*4+0]=B,U[(J+ut*$)*4+1]=B,U[(J+ut*$)*4+2]=B,U[(J+ut*$)*4+3]=255;return U}function c(U,q,X,H,K,Z,et,D){let B=0,Y,J,$=w.width;for(J=q;J!==H;J+=X)for(Y=K;Y!==et;Y+=Z,B+=2)U[(Y+$*J)*4+0]=D[B+0],U[(Y+$*J)*4+1]=D[B+0],U[(Y+$*J)*4+2]=D[B+0],U[(Y+$*J)*4+3]=D[B+1];return U}function h(U,q,X,H,K){let Z,et,D,B,Y,J;switch((w.flags&M)>>x){default:case v:Z=0,D=1,Y=q,et=0,B=1,J=X;break;case A:Z=0,D=1,Y=q,et=X-1,B=-1,J=-1;break;case b:Z=q-1,D=-1,Y=-1,et=0,B=1,J=X;break;case S:Z=q-1,D=-1,Y=-1,et=X-1,B=-1,J=-1;break}if(st)switch(w.pixel_size){case 8:l(U,et,B,J,Z,D,Y,H);break;case 16:c(U,et,B,J,Z,D,Y,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(U,et,B,J,Z,D,Y,H,K);break;case 16:r(U,et,B,J,Z,D,Y,H);break;case 24:a(U,et,B,J,Z,D,Y,H);break;case 32:o(U,et,B,J,Z,D,Y,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return U}let d=0,f=1,m=2,g=3,_=9,p=10,u=11,M=48,x=4,A=0,S=1,v=2,b=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let R=0,y=new Uint8Array(t),w={id_length:y[R++],colormap_type:y[R++],image_type:y[R++],colormap_index:y[R++]|y[R++]<<8,colormap_length:y[R++]|y[R++]<<8,colormap_size:y[R++],origin:[y[R++]|y[R++]<<8,y[R++]|y[R++]<<8],width:y[R++]|y[R++]<<8,height:y[R++]|y[R++]<<8,pixel_size:y[R++],flags:y[R++]};if(e(w),w.id_length+R>t.length)throw new Error("THREE.TGALoader: No data.");R+=w.id_length;let G=!1,Q=!1,st=!1;switch(w.image_type){case _:G=!0,Q=!0;break;case f:Q=!0;break;case p:G=!0;break;case m:break;case u:G=!0,st=!0;break;case g:st=!0;break}let L=new Uint8Array(w.width*w.height*4),V=n(G,Q,w,R,y);return h(L,w.width,w.height,V.pixel_data,V.palettes),{data:L,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Tn}}};function Dr(){}Dr.prototype.s2u=function(s){for(var t=this.s2uTable,e="",n=0;n<s.length;){var i=s[n++];if(!(i>=0&&i<=126||i>=161&&i<=223)&&n<s.length&&(i=i<<8|s[n++]),t[i]===void 0)return console.error("unknown char code "+i+"."),e;e+=String.fromCharCode(t[i])}return e};Dr.prototype.s2uTable={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:92,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:126,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:65340,33120:65374,33121:8741,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:65293,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:65504,33170:65505,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:65506,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34624:9312,34625:9313,34626:9314,34627:9315,34628:9316,34629:9317,34630:9318,34631:9319,34632:9320,34633:9321,34634:9322,34635:9323,34636:9324,34637:9325,34638:9326,34639:9327,34640:9328,34641:9329,34642:9330,34643:9331,34644:8544,34645:8545,34646:8546,34647:8547,34648:8548,34649:8549,34650:8550,34651:8551,34652:8552,34653:8553,34655:13129,34656:13076,34657:13090,34658:13133,34659:13080,34660:13095,34661:13059,34662:13110,34663:13137,34664:13143,34665:13069,34666:13094,34667:13091,34668:13099,34669:13130,34670:13115,34671:13212,34672:13213,34673:13214,34674:13198,34675:13199,34676:13252,34677:13217,34686:13179,34688:12317,34689:12319,34690:8470,34691:13261,34692:8481,34693:12964,34694:12965,34695:12966,34696:12967,34697:12968,34698:12849,34699:12850,34700:12857,34701:13182,34702:13181,34703:13180,34704:8786,34705:8801,34706:8747,34707:8750,34708:8721,34709:8730,34710:8869,34711:8736,34712:8735,34713:8895,34714:8757,34715:8745,34716:8746,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081,60736:32394,60737:35100,60738:37704,60739:37512,60740:34012,60741:20425,60742:28859,60743:26161,60744:26824,60745:37625,60746:26363,60747:24389,60748:20008,60749:20193,60750:20220,60751:20224,60752:20227,60753:20281,60754:20310,60755:20370,60756:20362,60757:20378,60758:20372,60759:20429,60760:20544,60761:20514,60762:20479,60763:20510,60764:20550,60765:20592,60766:20546,60767:20628,60768:20724,60769:20696,60770:20810,60771:20836,60772:20893,60773:20926,60774:20972,60775:21013,60776:21148,60777:21158,60778:21184,60779:21211,60780:21248,60781:21255,60782:21284,60783:21362,60784:21395,60785:21426,60786:21469,60787:64014,60788:21660,60789:21642,60790:21673,60791:21759,60792:21894,60793:22361,60794:22373,60795:22444,60796:22472,60797:22471,60798:64015,60800:64016,60801:22686,60802:22706,60803:22795,60804:22867,60805:22875,60806:22877,60807:22883,60808:22948,60809:22970,60810:23382,60811:23488,60812:29999,60813:23512,60814:23532,60815:23582,60816:23718,60817:23738,60818:23797,60819:23847,60820:23891,60821:64017,60822:23874,60823:23917,60824:23992,60825:23993,60826:24016,60827:24353,60828:24372,60829:24423,60830:24503,60831:24542,60832:24669,60833:24709,60834:24714,60835:24798,60836:24789,60837:24864,60838:24818,60839:24849,60840:24887,60841:24880,60842:24984,60843:25107,60844:25254,60845:25589,60846:25696,60847:25757,60848:25806,60849:25934,60850:26112,60851:26133,60852:26171,60853:26121,60854:26158,60855:26142,60856:26148,60857:26213,60858:26199,60859:26201,60860:64018,60861:26227,60862:26265,60863:26272,60864:26290,60865:26303,60866:26362,60867:26382,60868:63785,60869:26470,60870:26555,60871:26706,60872:26560,60873:26625,60874:26692,60875:26831,60876:64019,60877:26984,60878:64020,60879:27032,60880:27106,60881:27184,60882:27243,60883:27206,60884:27251,60885:27262,60886:27362,60887:27364,60888:27606,60889:27711,60890:27740,60891:27782,60892:27759,60893:27866,60894:27908,60895:28039,60896:28015,60897:28054,60898:28076,60899:28111,60900:28152,60901:28146,60902:28156,60903:28217,60904:28252,60905:28199,60906:28220,60907:28351,60908:28552,60909:28597,60910:28661,60911:28677,60912:28679,60913:28712,60914:28805,60915:28843,60916:28943,60917:28932,60918:29020,60919:28998,60920:28999,60921:64021,60922:29121,60923:29182,60924:29361,60992:29374,60993:29476,60994:64022,60995:29559,60996:29629,60997:29641,60998:29654,60999:29667,61e3:29650,61001:29703,61002:29685,61003:29734,61004:29738,61005:29737,61006:29742,61007:29794,61008:29833,61009:29855,61010:29953,61011:30063,61012:30338,61013:30364,61014:30366,61015:30363,61016:30374,61017:64023,61018:30534,61019:21167,61020:30753,61021:30798,61022:30820,61023:30842,61024:31024,61025:64024,61026:64025,61027:64026,61028:31124,61029:64027,61030:31131,61031:31441,61032:31463,61033:64028,61034:31467,61035:31646,61036:64029,61037:32072,61038:32092,61039:32183,61040:32160,61041:32214,61042:32338,61043:32583,61044:32673,61045:64030,61046:33537,61047:33634,61048:33663,61049:33735,61050:33782,61051:33864,61052:33972,61053:34131,61054:34137,61056:34155,61057:64031,61058:34224,61059:64032,61060:64033,61061:34823,61062:35061,61063:35346,61064:35383,61065:35449,61066:35495,61067:35518,61068:35551,61069:64034,61070:35574,61071:35667,61072:35711,61073:36080,61074:36084,61075:36114,61076:36214,61077:64035,61078:36559,61079:64036,61080:64037,61081:36967,61082:37086,61083:64038,61084:37141,61085:37159,61086:37338,61087:37335,61088:37342,61089:37357,61090:37358,61091:37348,61092:37349,61093:37382,61094:37392,61095:37386,61096:37434,61097:37440,61098:37436,61099:37454,61100:37465,61101:37457,61102:37433,61103:37479,61104:37543,61105:37495,61106:37496,61107:37607,61108:37591,61109:37593,61110:37584,61111:64039,61112:37589,61113:37600,61114:37587,61115:37669,61116:37665,61117:37627,61118:64040,61119:37662,61120:37631,61121:37661,61122:37634,61123:37744,61124:37719,61125:37796,61126:37830,61127:37854,61128:37880,61129:37937,61130:37957,61131:37960,61132:38290,61133:63964,61134:64041,61135:38557,61136:38575,61137:38707,61138:38715,61139:38723,61140:38733,61141:38735,61142:38737,61143:38741,61144:38999,61145:39013,61146:64042,61147:64043,61148:39207,61149:64044,61150:39326,61151:39502,61152:39641,61153:39644,61154:39797,61155:39794,61156:39823,61157:39857,61158:39867,61159:39936,61160:40304,61161:40299,61162:64045,61163:40473,61164:40657,61167:8560,61168:8561,61169:8562,61170:8563,61171:8564,61172:8565,61173:8566,61174:8567,61175:8568,61176:8569,61177:65506,61178:65508,61179:65287,61180:65282,61504:57344,61505:57345,61506:57346,61507:57347,61508:57348,61509:57349,61510:57350,61511:57351,61512:57352,61513:57353,61514:57354,61515:57355,61516:57356,61517:57357,61518:57358,61519:57359,61520:57360,61521:57361,61522:57362,61523:57363,61524:57364,61525:57365,61526:57366,61527:57367,61528:57368,61529:57369,61530:57370,61531:57371,61532:57372,61533:57373,61534:57374,61535:57375,61536:57376,61537:57377,61538:57378,61539:57379,61540:57380,61541:57381,61542:57382,61543:57383,61544:57384,61545:57385,61546:57386,61547:57387,61548:57388,61549:57389,61550:57390,61551:57391,61552:57392,61553:57393,61554:57394,61555:57395,61556:57396,61557:57397,61558:57398,61559:57399,61560:57400,61561:57401,61562:57402,61563:57403,61564:57404,61565:57405,61566:57406,61568:57407,61569:57408,61570:57409,61571:57410,61572:57411,61573:57412,61574:57413,61575:57414,61576:57415,61577:57416,61578:57417,61579:57418,61580:57419,61581:57420,61582:57421,61583:57422,61584:57423,61585:57424,61586:57425,61587:57426,61588:57427,61589:57428,61590:57429,61591:57430,61592:57431,61593:57432,61594:57433,61595:57434,61596:57435,61597:57436,61598:57437,61599:57438,61600:57439,61601:57440,61602:57441,61603:57442,61604:57443,61605:57444,61606:57445,61607:57446,61608:57447,61609:57448,61610:57449,61611:57450,61612:57451,61613:57452,61614:57453,61615:57454,61616:57455,61617:57456,61618:57457,61619:57458,61620:57459,61621:57460,61622:57461,61623:57462,61624:57463,61625:57464,61626:57465,61627:57466,61628:57467,61629:57468,61630:57469,61631:57470,61632:57471,61633:57472,61634:57473,61635:57474,61636:57475,61637:57476,61638:57477,61639:57478,61640:57479,61641:57480,61642:57481,61643:57482,61644:57483,61645:57484,61646:57485,61647:57486,61648:57487,61649:57488,61650:57489,61651:57490,61652:57491,61653:57492,61654:57493,61655:57494,61656:57495,61657:57496,61658:57497,61659:57498,61660:57499,61661:57500,61662:57501,61663:57502,61664:57503,61665:57504,61666:57505,61667:57506,61668:57507,61669:57508,61670:57509,61671:57510,61672:57511,61673:57512,61674:57513,61675:57514,61676:57515,61677:57516,61678:57517,61679:57518,61680:57519,61681:57520,61682:57521,61683:57522,61684:57523,61685:57524,61686:57525,61687:57526,61688:57527,61689:57528,61690:57529,61691:57530,61692:57531,61760:57532,61761:57533,61762:57534,61763:57535,61764:57536,61765:57537,61766:57538,61767:57539,61768:57540,61769:57541,61770:57542,61771:57543,61772:57544,61773:57545,61774:57546,61775:57547,61776:57548,61777:57549,61778:57550,61779:57551,61780:57552,61781:57553,61782:57554,61783:57555,61784:57556,61785:57557,61786:57558,61787:57559,61788:57560,61789:57561,61790:57562,61791:57563,61792:57564,61793:57565,61794:57566,61795:57567,61796:57568,61797:57569,61798:57570,61799:57571,61800:57572,61801:57573,61802:57574,61803:57575,61804:57576,61805:57577,61806:57578,61807:57579,61808:57580,61809:57581,61810:57582,61811:57583,61812:57584,61813:57585,61814:57586,61815:57587,61816:57588,61817:57589,61818:57590,61819:57591,61820:57592,61821:57593,61822:57594,61824:57595,61825:57596,61826:57597,61827:57598,61828:57599,61829:57600,61830:57601,61831:57602,61832:57603,61833:57604,61834:57605,61835:57606,61836:57607,61837:57608,61838:57609,61839:57610,61840:57611,61841:57612,61842:57613,61843:57614,61844:57615,61845:57616,61846:57617,61847:57618,61848:57619,61849:57620,61850:57621,61851:57622,61852:57623,61853:57624,61854:57625,61855:57626,61856:57627,61857:57628,61858:57629,61859:57630,61860:57631,61861:57632,61862:57633,61863:57634,61864:57635,61865:57636,61866:57637,61867:57638,61868:57639,61869:57640,61870:57641,61871:57642,61872:57643,61873:57644,61874:57645,61875:57646,61876:57647,61877:57648,61878:57649,61879:57650,61880:57651,61881:57652,61882:57653,61883:57654,61884:57655,61885:57656,61886:57657,61887:57658,61888:57659,61889:57660,61890:57661,61891:57662,61892:57663,61893:57664,61894:57665,61895:57666,61896:57667,61897:57668,61898:57669,61899:57670,61900:57671,61901:57672,61902:57673,61903:57674,61904:57675,61905:57676,61906:57677,61907:57678,61908:57679,61909:57680,61910:57681,61911:57682,61912:57683,61913:57684,61914:57685,61915:57686,61916:57687,61917:57688,61918:57689,61919:57690,61920:57691,61921:57692,61922:57693,61923:57694,61924:57695,61925:57696,61926:57697,61927:57698,61928:57699,61929:57700,61930:57701,61931:57702,61932:57703,61933:57704,61934:57705,61935:57706,61936:57707,61937:57708,61938:57709,61939:57710,61940:57711,61941:57712,61942:57713,61943:57714,61944:57715,61945:57716,61946:57717,61947:57718,61948:57719,62016:57720,62017:57721,62018:57722,62019:57723,62020:57724,62021:57725,62022:57726,62023:57727,62024:57728,62025:57729,62026:57730,62027:57731,62028:57732,62029:57733,62030:57734,62031:57735,62032:57736,62033:57737,62034:57738,62035:57739,62036:57740,62037:57741,62038:57742,62039:57743,62040:57744,62041:57745,62042:57746,62043:57747,62044:57748,62045:57749,62046:57750,62047:57751,62048:57752,62049:57753,62050:57754,62051:57755,62052:57756,62053:57757,62054:57758,62055:57759,62056:57760,62057:57761,62058:57762,62059:57763,62060:57764,62061:57765,62062:57766,62063:57767,62064:57768,62065:57769,62066:57770,62067:57771,62068:57772,62069:57773,62070:57774,62071:57775,62072:57776,62073:57777,62074:57778,62075:57779,62076:57780,62077:57781,62078:57782,62080:57783,62081:57784,62082:57785,62083:57786,62084:57787,62085:57788,62086:57789,62087:57790,62088:57791,62089:57792,62090:57793,62091:57794,62092:57795,62093:57796,62094:57797,62095:57798,62096:57799,62097:57800,62098:57801,62099:57802,62100:57803,62101:57804,62102:57805,62103:57806,62104:57807,62105:57808,62106:57809,62107:57810,62108:57811,62109:57812,62110:57813,62111:57814,62112:57815,62113:57816,62114:57817,62115:57818,62116:57819,62117:57820,62118:57821,62119:57822,62120:57823,62121:57824,62122:57825,62123:57826,62124:57827,62125:57828,62126:57829,62127:57830,62128:57831,62129:57832,62130:57833,62131:57834,62132:57835,62133:57836,62134:57837,62135:57838,62136:57839,62137:57840,62138:57841,62139:57842,62140:57843,62141:57844,62142:57845,62143:57846,62144:57847,62145:57848,62146:57849,62147:57850,62148:57851,62149:57852,62150:57853,62151:57854,62152:57855,62153:57856,62154:57857,62155:57858,62156:57859,62157:57860,62158:57861,62159:57862,62160:57863,62161:57864,62162:57865,62163:57866,62164:57867,62165:57868,62166:57869,62167:57870,62168:57871,62169:57872,62170:57873,62171:57874,62172:57875,62173:57876,62174:57877,62175:57878,62176:57879,62177:57880,62178:57881,62179:57882,62180:57883,62181:57884,62182:57885,62183:57886,62184:57887,62185:57888,62186:57889,62187:57890,62188:57891,62189:57892,62190:57893,62191:57894,62192:57895,62193:57896,62194:57897,62195:57898,62196:57899,62197:57900,62198:57901,62199:57902,62200:57903,62201:57904,62202:57905,62203:57906,62204:57907,62272:57908,62273:57909,62274:57910,62275:57911,62276:57912,62277:57913,62278:57914,62279:57915,62280:57916,62281:57917,62282:57918,62283:57919,62284:57920,62285:57921,62286:57922,62287:57923,62288:57924,62289:57925,62290:57926,62291:57927,62292:57928,62293:57929,62294:57930,62295:57931,62296:57932,62297:57933,62298:57934,62299:57935,62300:57936,62301:57937,62302:57938,62303:57939,62304:57940,62305:57941,62306:57942,62307:57943,62308:57944,62309:57945,62310:57946,62311:57947,62312:57948,62313:57949,62314:57950,62315:57951,62316:57952,62317:57953,62318:57954,62319:57955,62320:57956,62321:57957,62322:57958,62323:57959,62324:57960,62325:57961,62326:57962,62327:57963,62328:57964,62329:57965,62330:57966,62331:57967,62332:57968,62333:57969,62334:57970,62336:57971,62337:57972,62338:57973,62339:57974,62340:57975,62341:57976,62342:57977,62343:57978,62344:57979,62345:57980,62346:57981,62347:57982,62348:57983,62349:57984,62350:57985,62351:57986,62352:57987,62353:57988,62354:57989,62355:57990,62356:57991,62357:57992,62358:57993,62359:57994,62360:57995,62361:57996,62362:57997,62363:57998,62364:57999,62365:58e3,62366:58001,62367:58002,62368:58003,62369:58004,62370:58005,62371:58006,62372:58007,62373:58008,62374:58009,62375:58010,62376:58011,62377:58012,62378:58013,62379:58014,62380:58015,62381:58016,62382:58017,62383:58018,62384:58019,62385:58020,62386:58021,62387:58022,62388:58023,62389:58024,62390:58025,62391:58026,62392:58027,62393:58028,62394:58029,62395:58030,62396:58031,62397:58032,62398:58033,62399:58034,62400:58035,62401:58036,62402:58037,62403:58038,62404:58039,62405:58040,62406:58041,62407:58042,62408:58043,62409:58044,62410:58045,62411:58046,62412:58047,62413:58048,62414:58049,62415:58050,62416:58051,62417:58052,62418:58053,62419:58054,62420:58055,62421:58056,62422:58057,62423:58058,62424:58059,62425:58060,62426:58061,62427:58062,62428:58063,62429:58064,62430:58065,62431:58066,62432:58067,62433:58068,62434:58069,62435:58070,62436:58071,62437:58072,62438:58073,62439:58074,62440:58075,62441:58076,62442:58077,62443:58078,62444:58079,62445:58080,62446:58081,62447:58082,62448:58083,62449:58084,62450:58085,62451:58086,62452:58087,62453:58088,62454:58089,62455:58090,62456:58091,62457:58092,62458:58093,62459:58094,62460:58095,62528:58096,62529:58097,62530:58098,62531:58099,62532:58100,62533:58101,62534:58102,62535:58103,62536:58104,62537:58105,62538:58106,62539:58107,62540:58108,62541:58109,62542:58110,62543:58111,62544:58112,62545:58113,62546:58114,62547:58115,62548:58116,62549:58117,62550:58118,62551:58119,62552:58120,62553:58121,62554:58122,62555:58123,62556:58124,62557:58125,62558:58126,62559:58127,62560:58128,62561:58129,62562:58130,62563:58131,62564:58132,62565:58133,62566:58134,62567:58135,62568:58136,62569:58137,62570:58138,62571:58139,62572:58140,62573:58141,62574:58142,62575:58143,62576:58144,62577:58145,62578:58146,62579:58147,62580:58148,62581:58149,62582:58150,62583:58151,62584:58152,62585:58153,62586:58154,62587:58155,62588:58156,62589:58157,62590:58158,62592:58159,62593:58160,62594:58161,62595:58162,62596:58163,62597:58164,62598:58165,62599:58166,62600:58167,62601:58168,62602:58169,62603:58170,62604:58171,62605:58172,62606:58173,62607:58174,62608:58175,62609:58176,62610:58177,62611:58178,62612:58179,62613:58180,62614:58181,62615:58182,62616:58183,62617:58184,62618:58185,62619:58186,62620:58187,62621:58188,62622:58189,62623:58190,62624:58191,62625:58192,62626:58193,62627:58194,62628:58195,62629:58196,62630:58197,62631:58198,62632:58199,62633:58200,62634:58201,62635:58202,62636:58203,62637:58204,62638:58205,62639:58206,62640:58207,62641:58208,62642:58209,62643:58210,62644:58211,62645:58212,62646:58213,62647:58214,62648:58215,62649:58216,62650:58217,62651:58218,62652:58219,62653:58220,62654:58221,62655:58222,62656:58223,62657:58224,62658:58225,62659:58226,62660:58227,62661:58228,62662:58229,62663:58230,62664:58231,62665:58232,62666:58233,62667:58234,62668:58235,62669:58236,62670:58237,62671:58238,62672:58239,62673:58240,62674:58241,62675:58242,62676:58243,62677:58244,62678:58245,62679:58246,62680:58247,62681:58248,62682:58249,62683:58250,62684:58251,62685:58252,62686:58253,62687:58254,62688:58255,62689:58256,62690:58257,62691:58258,62692:58259,62693:58260,62694:58261,62695:58262,62696:58263,62697:58264,62698:58265,62699:58266,62700:58267,62701:58268,62702:58269,62703:58270,62704:58271,62705:58272,62706:58273,62707:58274,62708:58275,62709:58276,62710:58277,62711:58278,62712:58279,62713:58280,62714:58281,62715:58282,62716:58283,62784:58284,62785:58285,62786:58286,62787:58287,62788:58288,62789:58289,62790:58290,62791:58291,62792:58292,62793:58293,62794:58294,62795:58295,62796:58296,62797:58297,62798:58298,62799:58299,62800:58300,62801:58301,62802:58302,62803:58303,62804:58304,62805:58305,62806:58306,62807:58307,62808:58308,62809:58309,62810:58310,62811:58311,62812:58312,62813:58313,62814:58314,62815:58315,62816:58316,62817:58317,62818:58318,62819:58319,62820:58320,62821:58321,62822:58322,62823:58323,62824:58324,62825:58325,62826:58326,62827:58327,62828:58328,62829:58329,62830:58330,62831:58331,62832:58332,62833:58333,62834:58334,62835:58335,62836:58336,62837:58337,62838:58338,62839:58339,62840:58340,62841:58341,62842:58342,62843:58343,62844:58344,62845:58345,62846:58346,62848:58347,62849:58348,62850:58349,62851:58350,62852:58351,62853:58352,62854:58353,62855:58354,62856:58355,62857:58356,62858:58357,62859:58358,62860:58359,62861:58360,62862:58361,62863:58362,62864:58363,62865:58364,62866:58365,62867:58366,62868:58367,62869:58368,62870:58369,62871:58370,62872:58371,62873:58372,62874:58373,62875:58374,62876:58375,62877:58376,62878:58377,62879:58378,62880:58379,62881:58380,62882:58381,62883:58382,62884:58383,62885:58384,62886:58385,62887:58386,62888:58387,62889:58388,62890:58389,62891:58390,62892:58391,62893:58392,62894:58393,62895:58394,62896:58395,62897:58396,62898:58397,62899:58398,62900:58399,62901:58400,62902:58401,62903:58402,62904:58403,62905:58404,62906:58405,62907:58406,62908:58407,62909:58408,62910:58409,62911:58410,62912:58411,62913:58412,62914:58413,62915:58414,62916:58415,62917:58416,62918:58417,62919:58418,62920:58419,62921:58420,62922:58421,62923:58422,62924:58423,62925:58424,62926:58425,62927:58426,62928:58427,62929:58428,62930:58429,62931:58430,62932:58431,62933:58432,62934:58433,62935:58434,62936:58435,62937:58436,62938:58437,62939:58438,62940:58439,62941:58440,62942:58441,62943:58442,62944:58443,62945:58444,62946:58445,62947:58446,62948:58447,62949:58448,62950:58449,62951:58450,62952:58451,62953:58452,62954:58453,62955:58454,62956:58455,62957:58456,62958:58457,62959:58458,62960:58459,62961:58460,62962:58461,62963:58462,62964:58463,62965:58464,62966:58465,62967:58466,62968:58467,62969:58468,62970:58469,62971:58470,62972:58471,63040:58472,63041:58473,63042:58474,63043:58475,63044:58476,63045:58477,63046:58478,63047:58479,63048:58480,63049:58481,63050:58482,63051:58483,63052:58484,63053:58485,63054:58486,63055:58487,63056:58488,63057:58489,63058:58490,63059:58491,63060:58492,63061:58493,63062:58494,63063:58495,63064:58496,63065:58497,63066:58498,63067:58499,63068:58500,63069:58501,63070:58502,63071:58503,63072:58504,63073:58505,63074:58506,63075:58507,63076:58508,63077:58509,63078:58510,63079:58511,63080:58512,63081:58513,63082:58514,63083:58515,63084:58516,63085:58517,63086:58518,63087:58519,63088:58520,63089:58521,63090:58522,63091:58523,63092:58524,63093:58525,63094:58526,63095:58527,63096:58528,63097:58529,63098:58530,63099:58531,63100:58532,63101:58533,63102:58534,63104:58535,63105:58536,63106:58537,63107:58538,63108:58539,63109:58540,63110:58541,63111:58542,63112:58543,63113:58544,63114:58545,63115:58546,63116:58547,63117:58548,63118:58549,63119:58550,63120:58551,63121:58552,63122:58553,63123:58554,63124:58555,63125:58556,63126:58557,63127:58558,63128:58559,63129:58560,63130:58561,63131:58562,63132:58563,63133:58564,63134:58565,63135:58566,63136:58567,63137:58568,63138:58569,63139:58570,63140:58571,63141:58572,63142:58573,63143:58574,63144:58575,63145:58576,63146:58577,63147:58578,63148:58579,63149:58580,63150:58581,63151:58582,63152:58583,63153:58584,63154:58585,63155:58586,63156:58587,63157:58588,63158:58589,63159:58590,63160:58591,63161:58592,63162:58593,63163:58594,63164:58595,63165:58596,63166:58597,63167:58598,63168:58599,63169:58600,63170:58601,63171:58602,63172:58603,63173:58604,63174:58605,63175:58606,63176:58607,63177:58608,63178:58609,63179:58610,63180:58611,63181:58612,63182:58613,63183:58614,63184:58615,63185:58616,63186:58617,63187:58618,63188:58619,63189:58620,63190:58621,63191:58622,63192:58623,63193:58624,63194:58625,63195:58626,63196:58627,63197:58628,63198:58629,63199:58630,63200:58631,63201:58632,63202:58633,63203:58634,63204:58635,63205:58636,63206:58637,63207:58638,63208:58639,63209:58640,63210:58641,63211:58642,63212:58643,63213:58644,63214:58645,63215:58646,63216:58647,63217:58648,63218:58649,63219:58650,63220:58651,63221:58652,63222:58653,63223:58654,63224:58655,63225:58656,63226:58657,63227:58658,63228:58659,63296:58660,63297:58661,63298:58662,63299:58663,63300:58664,63301:58665,63302:58666,63303:58667,63304:58668,63305:58669,63306:58670,63307:58671,63308:58672,63309:58673,63310:58674,63311:58675,63312:58676,63313:58677,63314:58678,63315:58679,63316:58680,63317:58681,63318:58682,63319:58683,63320:58684,63321:58685,63322:58686,63323:58687,63324:58688,63325:58689,63326:58690,63327:58691,63328:58692,63329:58693,63330:58694,63331:58695,63332:58696,63333:58697,63334:58698,63335:58699,63336:58700,63337:58701,63338:58702,63339:58703,63340:58704,63341:58705,63342:58706,63343:58707,63344:58708,63345:58709,63346:58710,63347:58711,63348:58712,63349:58713,63350:58714,63351:58715,63352:58716,63353:58717,63354:58718,63355:58719,63356:58720,63357:58721,63358:58722,63360:58723,63361:58724,63362:58725,63363:58726,63364:58727,63365:58728,63366:58729,63367:58730,63368:58731,63369:58732,63370:58733,63371:58734,63372:58735,63373:58736,63374:58737,63375:58738,63376:58739,63377:58740,63378:58741,63379:58742,63380:58743,63381:58744,63382:58745,63383:58746,63384:58747,63385:58748,63386:58749,63387:58750,63388:58751,63389:58752,63390:58753,63391:58754,63392:58755,63393:58756,63394:58757,63395:58758,63396:58759,63397:58760,63398:58761,63399:58762,63400:58763,63401:58764,63402:58765,63403:58766,63404:58767,63405:58768,63406:58769,63407:58770,63408:58771,63409:58772,63410:58773,63411:58774,63412:58775,63413:58776,63414:58777,63415:58778,63416:58779,63417:58780,63418:58781,63419:58782,63420:58783,63421:58784,63422:58785,63423:58786,63424:58787,63425:58788,63426:58789,63427:58790,63428:58791,63429:58792,63430:58793,63431:58794,63432:58795,63433:58796,63434:58797,63435:58798,63436:58799,63437:58800,63438:58801,63439:58802,63440:58803,63441:58804,63442:58805,63443:58806,63444:58807,63445:58808,63446:58809,63447:58810,63448:58811,63449:58812,63450:58813,63451:58814,63452:58815,63453:58816,63454:58817,63455:58818,63456:58819,63457:58820,63458:58821,63459:58822,63460:58823,63461:58824,63462:58825,63463:58826,63464:58827,63465:58828,63466:58829,63467:58830,63468:58831,63469:58832,63470:58833,63471:58834,63472:58835,63473:58836,63474:58837,63475:58838,63476:58839,63477:58840,63478:58841,63479:58842,63480:58843,63481:58844,63482:58845,63483:58846,63484:58847,63552:58848,63553:58849,63554:58850,63555:58851,63556:58852,63557:58853,63558:58854,63559:58855,63560:58856,63561:58857,63562:58858,63563:58859,63564:58860,63565:58861,63566:58862,63567:58863,63568:58864,63569:58865,63570:58866,63571:58867,63572:58868,63573:58869,63574:58870,63575:58871,63576:58872,63577:58873,63578:58874,63579:58875,63580:58876,63581:58877,63582:58878,63583:58879,63584:58880,63585:58881,63586:58882,63587:58883,63588:58884,63589:58885,63590:58886,63591:58887,63592:58888,63593:58889,63594:58890,63595:58891,63596:58892,63597:58893,63598:58894,63599:58895,63600:58896,63601:58897,63602:58898,63603:58899,63604:58900,63605:58901,63606:58902,63607:58903,63608:58904,63609:58905,63610:58906,63611:58907,63612:58908,63613:58909,63614:58910,63616:58911,63617:58912,63618:58913,63619:58914,63620:58915,63621:58916,63622:58917,63623:58918,63624:58919,63625:58920,63626:58921,63627:58922,63628:58923,63629:58924,63630:58925,63631:58926,63632:58927,63633:58928,63634:58929,63635:58930,63636:58931,63637:58932,63638:58933,63639:58934,63640:58935,63641:58936,63642:58937,63643:58938,63644:58939,63645:58940,63646:58941,63647:58942,63648:58943,63649:58944,63650:58945,63651:58946,63652:58947,63653:58948,63654:58949,63655:58950,63656:58951,63657:58952,63658:58953,63659:58954,63660:58955,63661:58956,63662:58957,63663:58958,63664:58959,63665:58960,63666:58961,63667:58962,63668:58963,63669:58964,63670:58965,63671:58966,63672:58967,63673:58968,63674:58969,63675:58970,63676:58971,63677:58972,63678:58973,63679:58974,63680:58975,63681:58976,63682:58977,63683:58978,63684:58979,63685:58980,63686:58981,63687:58982,63688:58983,63689:58984,63690:58985,63691:58986,63692:58987,63693:58988,63694:58989,63695:58990,63696:58991,63697:58992,63698:58993,63699:58994,63700:58995,63701:58996,63702:58997,63703:58998,63704:58999,63705:59e3,63706:59001,63707:59002,63708:59003,63709:59004,63710:59005,63711:59006,63712:59007,63713:59008,63714:59009,63715:59010,63716:59011,63717:59012,63718:59013,63719:59014,63720:59015,63721:59016,63722:59017,63723:59018,63724:59019,63725:59020,63726:59021,63727:59022,63728:59023,63729:59024,63730:59025,63731:59026,63732:59027,63733:59028,63734:59029,63735:59030,63736:59031,63737:59032,63738:59033,63739:59034,63740:59035,64064:8560,64065:8561,64066:8562,64067:8563,64068:8564,64069:8565,64070:8566,64071:8567,64072:8568,64073:8569,64074:8544,64075:8545,64076:8546,64077:8547,64078:8548,64079:8549,64080:8550,64081:8551,64082:8552,64083:8553,64084:65506,64085:65508,64086:65287,64087:65282,64088:12849,64089:8470,64090:8481,64091:8757,64092:32394,64093:35100,64094:37704,64095:37512,64096:34012,64097:20425,64098:28859,64099:26161,64100:26824,64101:37625,64102:26363,64103:24389,64104:20008,64105:20193,64106:20220,64107:20224,64108:20227,64109:20281,64110:20310,64111:20370,64112:20362,64113:20378,64114:20372,64115:20429,64116:20544,64117:20514,64118:20479,64119:20510,64120:20550,64121:20592,64122:20546,64123:20628,64124:20724,64125:20696,64126:20810,64128:20836,64129:20893,64130:20926,64131:20972,64132:21013,64133:21148,64134:21158,64135:21184,64136:21211,64137:21248,64138:21255,64139:21284,64140:21362,64141:21395,64142:21426,64143:21469,64144:64014,64145:21660,64146:21642,64147:21673,64148:21759,64149:21894,64150:22361,64151:22373,64152:22444,64153:22472,64154:22471,64155:64015,64156:64016,64157:22686,64158:22706,64159:22795,64160:22867,64161:22875,64162:22877,64163:22883,64164:22948,64165:22970,64166:23382,64167:23488,64168:29999,64169:23512,64170:23532,64171:23582,64172:23718,64173:23738,64174:23797,64175:23847,64176:23891,64177:64017,64178:23874,64179:23917,64180:23992,64181:23993,64182:24016,64183:24353,64184:24372,64185:24423,64186:24503,64187:24542,64188:24669,64189:24709,64190:24714,64191:24798,64192:24789,64193:24864,64194:24818,64195:24849,64196:24887,64197:24880,64198:24984,64199:25107,64200:25254,64201:25589,64202:25696,64203:25757,64204:25806,64205:25934,64206:26112,64207:26133,64208:26171,64209:26121,64210:26158,64211:26142,64212:26148,64213:26213,64214:26199,64215:26201,64216:64018,64217:26227,64218:26265,64219:26272,64220:26290,64221:26303,64222:26362,64223:26382,64224:63785,64225:26470,64226:26555,64227:26706,64228:26560,64229:26625,64230:26692,64231:26831,64232:64019,64233:26984,64234:64020,64235:27032,64236:27106,64237:27184,64238:27243,64239:27206,64240:27251,64241:27262,64242:27362,64243:27364,64244:27606,64245:27711,64246:27740,64247:27782,64248:27759,64249:27866,64250:27908,64251:28039,64252:28015,64320:28054,64321:28076,64322:28111,64323:28152,64324:28146,64325:28156,64326:28217,64327:28252,64328:28199,64329:28220,64330:28351,64331:28552,64332:28597,64333:28661,64334:28677,64335:28679,64336:28712,64337:28805,64338:28843,64339:28943,64340:28932,64341:29020,64342:28998,64343:28999,64344:64021,64345:29121,64346:29182,64347:29361,64348:29374,64349:29476,64350:64022,64351:29559,64352:29629,64353:29641,64354:29654,64355:29667,64356:29650,64357:29703,64358:29685,64359:29734,64360:29738,64361:29737,64362:29742,64363:29794,64364:29833,64365:29855,64366:29953,64367:30063,64368:30338,64369:30364,64370:30366,64371:30363,64372:30374,64373:64023,64374:30534,64375:21167,64376:30753,64377:30798,64378:30820,64379:30842,64380:31024,64381:64024,64382:64025,64384:64026,64385:31124,64386:64027,64387:31131,64388:31441,64389:31463,64390:64028,64391:31467,64392:31646,64393:64029,64394:32072,64395:32092,64396:32183,64397:32160,64398:32214,64399:32338,64400:32583,64401:32673,64402:64030,64403:33537,64404:33634,64405:33663,64406:33735,64407:33782,64408:33864,64409:33972,64410:34131,64411:34137,64412:34155,64413:64031,64414:34224,64415:64032,64416:64033,64417:34823,64418:35061,64419:35346,64420:35383,64421:35449,64422:35495,64423:35518,64424:35551,64425:64034,64426:35574,64427:35667,64428:35711,64429:36080,64430:36084,64431:36114,64432:36214,64433:64035,64434:36559,64435:64036,64436:64037,64437:36967,64438:37086,64439:64038,64440:37141,64441:37159,64442:37338,64443:37335,64444:37342,64445:37357,64446:37358,64447:37348,64448:37349,64449:37382,64450:37392,64451:37386,64452:37434,64453:37440,64454:37436,64455:37454,64456:37465,64457:37457,64458:37433,64459:37479,64460:37543,64461:37495,64462:37496,64463:37607,64464:37591,64465:37593,64466:37584,64467:64039,64468:37589,64469:37600,64470:37587,64471:37669,64472:37665,64473:37627,64474:64040,64475:37662,64476:37631,64477:37661,64478:37634,64479:37744,64480:37719,64481:37796,64482:37830,64483:37854,64484:37880,64485:37937,64486:37957,64487:37960,64488:38290,64489:63964,64490:64041,64491:38557,64492:38575,64493:38707,64494:38715,64495:38723,64496:38733,64497:38735,64498:38737,64499:38741,64500:38999,64501:39013,64502:64042,64503:64043,64504:39207,64505:64044,64506:39326,64507:39502,64508:39641,64576:39644,64577:39797,64578:39794,64579:39823,64580:39857,64581:39867,64582:39936,64583:40304,64584:40299,64585:64045,64586:40473,64587:40657};function os(s,t){this.dv=new DataView(s),this.offset=0,this.littleEndian=t!==void 0?t:!0,this.encoder=new Dr}os.prototype={constructor:os,getInt8:function(){var s=this.dv.getInt8(this.offset);return this.offset+=1,s},getInt8Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getInt8());return t},getUint8:function(){var s=this.dv.getUint8(this.offset);return this.offset+=1,s},getUint8Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getUint8());return t},getInt16:function(){var s=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,s},getInt16Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getInt16());return t},getUint16:function(){var s=this.dv.getUint16(this.offset,this.littleEndian);return this.offset+=2,s},getUint16Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getUint16());return t},getInt32:function(){var s=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,s},getInt32Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getInt32());return t},getUint32:function(){var s=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,s},getUint32Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getUint32());return t},getFloat32:function(){var s=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,s},getFloat32Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getFloat32());return t},getFloat64:function(){var s=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,s},getFloat64Array:function(s){for(var t=[],e=0;e<s;e++)t.push(this.getFloat64());return t},getIndex:function(s,t){switch(s){case 1:return t===!0?this.getUint8():this.getInt8();case 2:return t===!0?this.getUint16():this.getInt16();case 4:return this.getInt32();default:throw"unknown number type "+s+" exception."}},getIndexArray:function(s,t,e){for(var n=[],i=0;i<t;i++)n.push(this.getIndex(s,e));return n},getChars:function(s){for(var t="";s>0;){var e=this.getUint8();if(s--,e===0)break;t+=String.fromCharCode(e)}for(;s>0;)this.getUint8(),s--;return t},getSjisStringsAsUnicode:function(s){for(var t=[];s>0;){var e=this.getUint8();if(s--,e===0)break;t.push(e)}for(;s>0;)this.getUint8(),s--;return this.encoder.s2u(new Uint8Array(t))},getUnicodeStrings:function(s){for(var t="";s>0;){var e=this.getUint16();if(s-=2,e===0)break;t+=String.fromCharCode(e)}for(;s>0;)this.getUint8(),s--;return t},getTextBuffer:function(){var s=this.getUint32();return this.getUnicodeStrings(s)}};function ls(){}ls.prototype={constructor:ls,leftToRightVector3:function(s){s[2]=-s[2]},leftToRightQuaternion:function(s){s[0]=-s[0],s[1]=-s[1]},leftToRightEuler:function(s){s[0]=-s[0],s[1]=-s[1]},leftToRightIndexOrder:function(s){var t=s[2];s[2]=s[0],s[0]=t},leftToRightVector3Range:function(s,t){var e=-t[2];t[2]=-s[2],s[2]=e},leftToRightEulerRange:function(s,t){var e=-t[0],n=-t[1];t[0]=-s[0],t[1]=-s[1],s[0]=e,s[1]=n}};function gn(){}gn.prototype.parsePmd=function(s,t){var e={},n=new os(s);e.metadata={},e.metadata.format="pmd",e.metadata.coordinateSystem="left";var i=function(){var S=e.metadata;if(S.magic=n.getChars(3),S.magic!=="Pmd")throw"PMD file magic is not Pmd, but "+S.magic;S.version=n.getFloat32(),S.modelName=n.getSjisStringsAsUnicode(20),S.comment=n.getSjisStringsAsUnicode(256)},r=function(){var S=function(){var R={};return R.position=n.getFloat32Array(3),R.normal=n.getFloat32Array(3),R.uv=n.getFloat32Array(2),R.skinIndices=n.getUint16Array(2),R.skinWeights=[n.getUint8()/100],R.skinWeights.push(1-R.skinWeights[0]),R.edgeFlag=n.getUint8(),R},v=e.metadata;v.vertexCount=n.getUint32(),e.vertices=[];for(var b=0;b<v.vertexCount;b++)e.vertices.push(S())},a=function(){var S=function(){var R={};return R.indices=n.getUint16Array(3),R},v=e.metadata;v.faceCount=n.getUint32()/3,e.faces=[];for(var b=0;b<v.faceCount;b++)e.faces.push(S())},o=function(){var S=function(){var R={};return R.diffuse=n.getFloat32Array(4),R.shininess=n.getFloat32(),R.specular=n.getFloat32Array(3),R.ambient=n.getFloat32Array(3),R.toonIndex=n.getInt8(),R.edgeFlag=n.getUint8(),R.faceCount=n.getUint32()/3,R.fileName=n.getSjisStringsAsUnicode(20),R},v=e.metadata;v.materialCount=n.getUint32(),e.materials=[];for(var b=0;b<v.materialCount;b++)e.materials.push(S())},l=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(20),R.parentIndex=n.getInt16(),R.tailIndex=n.getInt16(),R.type=n.getUint8(),R.ikIndex=n.getInt16(),R.position=n.getFloat32Array(3),R},v=e.metadata;v.boneCount=n.getUint16(),e.bones=[];for(var b=0;b<v.boneCount;b++)e.bones.push(S())},c=function(){var S=function(){var R={};R.target=n.getUint16(),R.effector=n.getUint16(),R.linkCount=n.getUint8(),R.iteration=n.getUint16(),R.maxAngle=n.getFloat32(),R.links=[];for(var y=0;y<R.linkCount;y++){var w={};w.index=n.getUint16(),R.links.push(w)}return R},v=e.metadata;v.ikCount=n.getUint16(),e.iks=[];for(var b=0;b<v.ikCount;b++)e.iks.push(S())},h=function(){var S=function(){var R={};R.name=n.getSjisStringsAsUnicode(20),R.elementCount=n.getUint32(),R.type=n.getUint8(),R.elements=[];for(var y=0;y<R.elementCount;y++)R.elements.push({index:n.getUint32(),position:n.getFloat32Array(3)});return R},v=e.metadata;v.morphCount=n.getUint16(),e.morphs=[];for(var b=0;b<v.morphCount;b++)e.morphs.push(S())},d=function(){var S=function(){var R={};return R.index=n.getUint16(),R},v=e.metadata;v.morphFrameCount=n.getUint8(),e.morphFrames=[];for(var b=0;b<v.morphFrameCount;b++)e.morphFrames.push(S())},f=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(50),R},v=e.metadata;v.boneFrameNameCount=n.getUint8(),e.boneFrameNames=[];for(var b=0;b<v.boneFrameNameCount;b++)e.boneFrameNames.push(S())},m=function(){var S=function(){var R={};return R.boneIndex=n.getInt16(),R.frameIndex=n.getUint8(),R},v=e.metadata;v.boneFrameCount=n.getUint32(),e.boneFrames=[];for(var b=0;b<v.boneFrameCount;b++)e.boneFrames.push(S())},g=function(){var S=e.metadata;S.englishCompatibility=n.getUint8(),S.englishCompatibility>0&&(S.englishModelName=n.getSjisStringsAsUnicode(20),S.englishComment=n.getSjisStringsAsUnicode(256))},_=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(20),R},v=e.metadata;if(v.englishCompatibility!==0){e.englishBoneNames=[];for(var b=0;b<v.boneCount;b++)e.englishBoneNames.push(S())}},p=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(20),R},v=e.metadata;if(v.englishCompatibility!==0){e.englishMorphNames=[];for(var b=0;b<v.morphCount-1;b++)e.englishMorphNames.push(S())}},u=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(50),R},v=e.metadata;if(v.englishCompatibility!==0){e.englishBoneFrameNames=[];for(var b=0;b<v.boneFrameNameCount;b++)e.englishBoneFrameNames.push(S())}},M=function(){var S=function(){var b={};return b.fileName=n.getSjisStringsAsUnicode(100),b};e.toonTextures=[];for(var v=0;v<10;v++)e.toonTextures.push(S())},x=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(20),R.boneIndex=n.getInt16(),R.groupIndex=n.getUint8(),R.groupTarget=n.getUint16(),R.shapeType=n.getUint8(),R.width=n.getFloat32(),R.height=n.getFloat32(),R.depth=n.getFloat32(),R.position=n.getFloat32Array(3),R.rotation=n.getFloat32Array(3),R.weight=n.getFloat32(),R.positionDamping=n.getFloat32(),R.rotationDamping=n.getFloat32(),R.restitution=n.getFloat32(),R.friction=n.getFloat32(),R.type=n.getUint8(),R},v=e.metadata;v.rigidBodyCount=n.getUint32(),e.rigidBodies=[];for(var b=0;b<v.rigidBodyCount;b++)e.rigidBodies.push(S())},A=function(){var S=function(){var R={};return R.name=n.getSjisStringsAsUnicode(20),R.rigidBodyIndex1=n.getUint32(),R.rigidBodyIndex2=n.getUint32(),R.position=n.getFloat32Array(3),R.rotation=n.getFloat32Array(3),R.translationLimitation1=n.getFloat32Array(3),R.translationLimitation2=n.getFloat32Array(3),R.rotationLimitation1=n.getFloat32Array(3),R.rotationLimitation2=n.getFloat32Array(3),R.springPosition=n.getFloat32Array(3),R.springRotation=n.getFloat32Array(3),R},v=e.metadata;v.constraintCount=n.getUint32(),e.constraints=[];for(var b=0;b<v.constraintCount;b++)e.constraints.push(S())};return i(),r(),a(),o(),l(),c(),h(),d(),f(),m(),g(),_(),p(),u(),M(),x(),A(),t===!0&&this.leftToRightModel(e),e};gn.prototype.parsePmx=function(s,t){var e={},n=new os(s);e.metadata={},e.metadata.format="pmx",e.metadata.coordinateSystem="left";var i=function(){var g=e.metadata;if(g.magic=n.getChars(4),g.magic!=="PMX ")throw"PMX file magic is not PMX , but "+g.magic;if(g.version=n.getFloat32(),g.version!==2&&g.version!==2.1)throw"PMX version "+g.version+" is not supported.";g.headerSize=n.getUint8(),g.encoding=n.getUint8(),g.additionalUvNum=n.getUint8(),g.vertexIndexSize=n.getUint8(),g.textureIndexSize=n.getUint8(),g.materialIndexSize=n.getUint8(),g.boneIndexSize=n.getUint8(),g.morphIndexSize=n.getUint8(),g.rigidBodyIndexSize=n.getUint8(),g.modelName=n.getTextBuffer(),g.englishModelName=n.getTextBuffer(),g.comment=n.getTextBuffer(),g.englishComment=n.getTextBuffer()},r=function(){var g=function(){var u={};u.position=n.getFloat32Array(3),u.normal=n.getFloat32Array(3),u.uv=n.getFloat32Array(2),u.auvs=[];for(var M=0;M<e.metadata.additionalUvNum;M++)u.auvs.push(n.getFloat32Array(4));u.type=n.getUint8();var x=_.boneIndexSize;if(u.type===0)u.skinIndices=n.getIndexArray(x,1),u.skinWeights=[1];else if(u.type===1)u.skinIndices=n.getIndexArray(x,2),u.skinWeights=n.getFloat32Array(1),u.skinWeights.push(1-u.skinWeights[0]);else if(u.type===2)u.skinIndices=n.getIndexArray(x,4),u.skinWeights=n.getFloat32Array(4);else if(u.type===3)u.skinIndices=n.getIndexArray(x,2),u.skinWeights=n.getFloat32Array(1),u.skinWeights.push(1-u.skinWeights[0]),u.skinC=n.getFloat32Array(3),u.skinR0=n.getFloat32Array(3),u.skinR1=n.getFloat32Array(3),u.type=1;else throw"unsupport bone type "+u.type+" exception.";return u.edgeRatio=n.getFloat32(),u},_=e.metadata;_.vertexCount=n.getUint32(),e.vertices=[];for(var p=0;p<_.vertexCount;p++)e.vertices.push(g())},a=function(){var g=function(){var u={};return u.indices=n.getIndexArray(_.vertexIndexSize,3,!0),u},_=e.metadata;_.faceCount=n.getUint32()/3,e.faces=[];for(var p=0;p<_.faceCount;p++)e.faces.push(g())},o=function(){var g=function(){return n.getTextBuffer()},_=e.metadata;_.textureCount=n.getUint32(),e.textures=[];for(var p=0;p<_.textureCount;p++)e.textures.push(g())},l=function(){var g=function(){var u={};if(u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.diffuse=n.getFloat32Array(4),u.specular=n.getFloat32Array(3),u.shininess=n.getFloat32(),u.ambient=n.getFloat32Array(3),u.flag=n.getUint8(),u.edgeColor=n.getFloat32Array(4),u.edgeSize=n.getFloat32(),u.textureIndex=n.getIndex(e.metadata.textureIndexSize),u.envTextureIndex=n.getIndex(e.metadata.textureIndexSize),u.envFlag=n.getUint8(),u.toonFlag=n.getUint8(),u.toonFlag===0)u.toonIndex=n.getIndex(e.metadata.textureIndexSize);else if(u.toonFlag===1)u.toonIndex=n.getInt8();else throw"unknown toon flag "+u.toonFlag+" exception.";return u.comment=n.getTextBuffer(),u.faceCount=n.getUint32()/3,u},_=e.metadata;_.materialCount=n.getUint32(),e.materials=[];for(var p=0;p<_.materialCount;p++)e.materials.push(g())},c=function(){var g=function(){var u={};if(u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.position=n.getFloat32Array(3),u.parentIndex=n.getIndex(e.metadata.boneIndexSize),u.transformationClass=n.getUint32(),u.flag=n.getUint16(),u.flag&1?u.connectIndex=n.getIndex(e.metadata.boneIndexSize):u.offsetPosition=n.getFloat32Array(3),u.flag&256||u.flag&512){var M={};M.isLocal=(u.flag&128)!==0,M.affectRotation=(u.flag&256)!==0,M.affectPosition=(u.flag&512)!==0,M.parentIndex=n.getIndex(e.metadata.boneIndexSize),M.ratio=n.getFloat32(),u.grant=M}if(u.flag&1024&&(u.fixAxis=n.getFloat32Array(3)),u.flag&2048&&(u.localXVector=n.getFloat32Array(3),u.localZVector=n.getFloat32Array(3)),u.flag&8192&&(u.key=n.getUint32()),u.flag&32){var x={};x.effector=n.getIndex(e.metadata.boneIndexSize),x.target=null,x.iteration=n.getUint32(),x.maxAngle=n.getFloat32(),x.linkCount=n.getUint32(),x.links=[];for(var A=0;A<x.linkCount;A++){var S={};S.index=n.getIndex(e.metadata.boneIndexSize),S.angleLimitation=n.getUint8(),S.angleLimitation===1&&(S.lowerLimitationAngle=n.getFloat32Array(3),S.upperLimitationAngle=n.getFloat32Array(3)),x.links.push(S)}u.ik=x}return u},_=e.metadata;_.boneCount=n.getUint32(),e.bones=[];for(var p=0;p<_.boneCount;p++)e.bones.push(g())},h=function(){var g=function(){var u={};u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.panel=n.getUint8(),u.type=n.getUint8(),u.elementCount=n.getUint32(),u.elements=[];for(var M=0;M<u.elementCount;M++)if(u.type===0){var x={};x.index=n.getIndex(e.metadata.morphIndexSize),x.ratio=n.getFloat32(),u.elements.push(x)}else if(u.type===1){var x={};x.index=n.getIndex(e.metadata.vertexIndexSize,!0),x.position=n.getFloat32Array(3),u.elements.push(x)}else if(u.type===2){var x={};x.index=n.getIndex(e.metadata.boneIndexSize),x.position=n.getFloat32Array(3),x.rotation=n.getFloat32Array(4),u.elements.push(x)}else if(u.type===3){var x={};x.index=n.getIndex(e.metadata.vertexIndexSize,!0),x.uv=n.getFloat32Array(4),u.elements.push(x)}else if(u.type!==4){if(u.type!==5){if(u.type!==6){if(u.type!==7){if(u.type===8){var x={};x.index=n.getIndex(e.metadata.materialIndexSize),x.type=n.getUint8(),x.diffuse=n.getFloat32Array(4),x.specular=n.getFloat32Array(3),x.shininess=n.getFloat32(),x.ambient=n.getFloat32Array(3),x.edgeColor=n.getFloat32Array(4),x.edgeSize=n.getFloat32(),x.textureColor=n.getFloat32Array(4),x.sphereTextureColor=n.getFloat32Array(4),x.toonColor=n.getFloat32Array(4),u.elements.push(x)}}}}}return u},_=e.metadata;_.morphCount=n.getUint32(),e.morphs=[];for(var p=0;p<_.morphCount;p++)e.morphs.push(g())},d=function(){var g=function(){var u={};u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.type=n.getUint8(),u.elementCount=n.getUint32(),u.elements=[];for(var M=0;M<u.elementCount;M++){var x={};x.target=n.getUint8(),x.index=x.target===0?n.getIndex(e.metadata.boneIndexSize):n.getIndex(e.metadata.morphIndexSize),u.elements.push(x)}return u},_=e.metadata;_.frameCount=n.getUint32(),e.frames=[];for(var p=0;p<_.frameCount;p++)e.frames.push(g())},f=function(){var g=function(){var u={};return u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.boneIndex=n.getIndex(e.metadata.boneIndexSize),u.groupIndex=n.getUint8(),u.groupTarget=n.getUint16(),u.shapeType=n.getUint8(),u.width=n.getFloat32(),u.height=n.getFloat32(),u.depth=n.getFloat32(),u.position=n.getFloat32Array(3),u.rotation=n.getFloat32Array(3),u.weight=n.getFloat32(),u.positionDamping=n.getFloat32(),u.rotationDamping=n.getFloat32(),u.restitution=n.getFloat32(),u.friction=n.getFloat32(),u.type=n.getUint8(),u},_=e.metadata;_.rigidBodyCount=n.getUint32(),e.rigidBodies=[];for(var p=0;p<_.rigidBodyCount;p++)e.rigidBodies.push(g())},m=function(){var g=function(){var u={};return u.name=n.getTextBuffer(),u.englishName=n.getTextBuffer(),u.type=n.getUint8(),u.rigidBodyIndex1=n.getIndex(e.metadata.rigidBodyIndexSize),u.rigidBodyIndex2=n.getIndex(e.metadata.rigidBodyIndexSize),u.position=n.getFloat32Array(3),u.rotation=n.getFloat32Array(3),u.translationLimitation1=n.getFloat32Array(3),u.translationLimitation2=n.getFloat32Array(3),u.rotationLimitation1=n.getFloat32Array(3),u.rotationLimitation2=n.getFloat32Array(3),u.springPosition=n.getFloat32Array(3),u.springRotation=n.getFloat32Array(3),u},_=e.metadata;_.constraintCount=n.getUint32(),e.constraints=[];for(var p=0;p<_.constraintCount;p++)e.constraints.push(g())};return i(),r(),a(),o(),l(),c(),h(),d(),f(),m(),t===!0&&this.leftToRightModel(e),e};gn.prototype.parseVmd=function(s,t){var e={},n=new os(s);e.metadata={},e.metadata.coordinateSystem="left";var i=function(){var l=e.metadata;if(l.magic=n.getChars(30),l.magic!=="Vocaloid Motion Data 0002")throw"VMD file magic is not Vocaloid Motion Data 0002, but "+l.magic;l.name=n.getSjisStringsAsUnicode(20)},r=function(){var l=function(){var d={};return d.boneName=n.getSjisStringsAsUnicode(15),d.frameNum=n.getUint32(),d.position=n.getFloat32Array(3),d.rotation=n.getFloat32Array(4),d.interpolation=n.getUint8Array(64),d},c=e.metadata;c.motionCount=n.getUint32(),e.motions=[];for(var h=0;h<c.motionCount;h++)e.motions.push(l())},a=function(){var l=function(){var d={};return d.morphName=n.getSjisStringsAsUnicode(15),d.frameNum=n.getUint32(),d.weight=n.getFloat32(),d},c=e.metadata;c.morphCount=n.getUint32(),e.morphs=[];for(var h=0;h<c.morphCount;h++)e.morphs.push(l())},o=function(){var l=function(){var d={};return d.frameNum=n.getUint32(),d.distance=n.getFloat32(),d.position=n.getFloat32Array(3),d.rotation=n.getFloat32Array(3),d.interpolation=n.getUint8Array(24),d.fov=n.getUint32(),d.perspective=n.getUint8(),d},c=e.metadata;c.cameraCount=n.getUint32(),e.cameras=[];for(var h=0;h<c.cameraCount;h++)e.cameras.push(l())};return i(),r(),a(),o(),t===!0&&this.leftToRightVmd(e),e};gn.prototype.parseVpd=function(s,t){var e={};e.metadata={},e.metadata.coordinateSystem="left",e.bones=[];var n=/\/\/\w*(\r|\n|\r\n)/g,i=/\r|\n|\r\n/,r=s.replace(n,"").split(i);function a(){throw"the file seems not vpd file."}function o(){r[0]!=="Vocaloid Pose Data file"&&a()}function l(){r.length<4&&a(),e.metadata.parentFile=r[2],e.metadata.boneCount=parseInt(r[3])}function c(){for(var h=/^\s*(Bone[0-9]+)\s*\{\s*(.*)$/,d=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,f=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,m=/^\s*}/,g=e.bones,_=null,p=null,u=null,M=4;M<r.length;M++){var x=r[M],A;A=x.match(h),A!==null&&(_!==null&&a(),_=A[2]),A=x.match(d),A!==null&&(p!==null&&a(),p=[parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])]),A=x.match(f),A!==null&&(u!==null&&a(),u=[parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3]),parseFloat(A[4])]),A=x.match(m),A!==null&&((_===null||p===null||u===null)&&a(),g.push({name:_,translation:p,quaternion:u}),_=null,p=null,u=null)}(_!==null||p!==null||u!==null)&&a()}return o(),l(),c(),t===!0&&this.leftToRightVpd(e),e};gn.prototype.mergeVmds=function(s){var t={};t.metadata={},t.metadata.name=s[0].metadata.name,t.metadata.coordinateSystem=s[0].metadata.coordinateSystem,t.metadata.motionCount=0,t.metadata.morphCount=0,t.metadata.cameraCount=0,t.motions=[],t.morphs=[],t.cameras=[];for(var e=0;e<s.length;e++){var n=s[e];t.metadata.motionCount+=n.metadata.motionCount,t.metadata.morphCount+=n.metadata.morphCount,t.metadata.cameraCount+=n.metadata.cameraCount;for(var i=0;i<n.metadata.motionCount;i++)t.motions.push(n.motions[i]);for(var i=0;i<n.metadata.morphCount;i++)t.morphs.push(n.morphs[i]);for(var i=0;i<n.metadata.cameraCount;i++)t.cameras.push(n.cameras[i])}return t};gn.prototype.leftToRightModel=function(s){if(s.metadata.coordinateSystem!=="right"){s.metadata.coordinateSystem="right";for(var t=new ls,e=0;e<s.metadata.vertexCount;e++)t.leftToRightVector3(s.vertices[e].position),t.leftToRightVector3(s.vertices[e].normal);for(var e=0;e<s.metadata.faceCount;e++)t.leftToRightIndexOrder(s.faces[e].indices);for(var e=0;e<s.metadata.boneCount;e++)t.leftToRightVector3(s.bones[e].position);for(var e=0;e<s.metadata.morphCount;e++){var n=s.morphs[e];if(!(s.metadata.format==="pmx"&&n.type!==1))for(var i=0;i<n.elements.length;i++)t.leftToRightVector3(n.elements[i].position)}for(var e=0;e<s.metadata.rigidBodyCount;e++)t.leftToRightVector3(s.rigidBodies[e].position),t.leftToRightEuler(s.rigidBodies[e].rotation);for(var e=0;e<s.metadata.constraintCount;e++)t.leftToRightVector3(s.constraints[e].position),t.leftToRightEuler(s.constraints[e].rotation),t.leftToRightVector3Range(s.constraints[e].translationLimitation1,s.constraints[e].translationLimitation2),t.leftToRightEulerRange(s.constraints[e].rotationLimitation1,s.constraints[e].rotationLimitation2)}};gn.prototype.leftToRightVmd=function(s){if(s.metadata.coordinateSystem!=="right"){s.metadata.coordinateSystem="right";for(var t=new ls,e=0;e<s.metadata.motionCount;e++)t.leftToRightVector3(s.motions[e].position),t.leftToRightQuaternion(s.motions[e].rotation);for(var e=0;e<s.metadata.cameraCount;e++)t.leftToRightVector3(s.cameras[e].position),t.leftToRightEuler(s.cameras[e].rotation)}};gn.prototype.leftToRightVpd=function(s){if(s.metadata.coordinateSystem!=="right"){s.metadata.coordinateSystem="right";for(var t=new ls,e=0;e<s.bones.length;e++)t.leftToRightVector3(s.bones[e].translation),t.leftToRightQuaternion(s.bones[e].quaternion)}};var Qc={CharsetEncoder:Dr,Parser:gn};var Nr=class extends mn{constructor(t){super(t),this.loader=new ns(this.manager),this.parser=null,this.meshBuilder=new Ao(this.manager),this.animationBuilder=new wo}setAnimationPath(t){return this.animationPath=t,this}load(t,e,n,i){let r=this.meshBuilder.setCrossOrigin(this.crossOrigin),a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Cr.extractUrlBase(t);let o=this._extractExtension(t).toLowerCase();if(o!=="pmd"&&o!=="pmx"){i&&i(new Error("THREE.MMDLoader: Unknown model file extension ."+o+"."));return}this[o==="pmd"?"loadPMD":"loadPMX"](t,function(l){e(r.build(l,a,n,i))},n,i)}loadAnimation(t,e,n,i,r){let a=this.animationBuilder;this.loadVMD(t,function(o){n(e.isCamera?a.buildCameraAnimation(o):a.build(o,e))},i,r)}loadWithAnimation(t,e,n,i,r){let a=this;this.load(t,function(o){a.loadAnimation(e,o,function(l){n({mesh:o,animation:l})},i,r)},i,r)}loadPMD(t,e,n,i){let r=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(t,function(a){try{e(r.parsePmd(a,!0))}catch(o){i&&i(o)}},n,i)}loadPMX(t,e,n,i){let r=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(t,function(a){try{e(r.parsePmx(a,!0))}catch(o){i&&i(o)}},n,i)}loadVMD(t,e,n,i){let r=Array.isArray(t)?t:[t],a=[],o=r.length,l=this._getParser();this.loader.setMimeType(void 0).setPath(this.animationPath).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials);for(let c=0,h=r.length;c<h;c++)this.loader.load(r[c],function(d){try{a.push(l.parseVmd(d,!0)),a.length===o&&e(l.mergeVmds(a))}catch(f){i&&i(f)}},n,i)}loadVPD(t,e,n,i,r){let a=this._getParser();this.loader.setMimeType(e?void 0:"text/plain; charset=shift_jis").setPath(this.animationPath).setResponseType("text").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(t,function(o){try{n(a.parseVpd(o,!0))}catch(l){r&&r(l)}},i,r)}_extractExtension(t){let e=t.lastIndexOf(".");return e<0?"":t.slice(e+1)}_getParser(){return this.parser===null&&(this.parser=new Qc.Parser),this.parser}},V2=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="],H2=[zi,Gs,Ws,Ir,Xs],Ao=class{constructor(t){this.crossOrigin="anonymous",this.geometryBuilder=new Eo,this.materialBuilder=new To(t)}setCrossOrigin(t){return this.crossOrigin=t,this}build(t,e,n,i){let r=this.geometryBuilder.build(t),a=this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourcePath(e).build(t,r,n,i),o=new ur(r,a),l=new fr(G2(o));return o.bind(l),o}};function G2(s){let t=s.geometry,e=[];if(t&&t.bones!==void 0){for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=new Zn;e.push(a),a.name=r.name,a.position.fromArray(r.pos),a.quaternion.fromArray(r.rotq),r.scl!==void 0&&a.scale.fromArray(r.scl)}for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n];r.parent!==-1&&r.parent!==null&&e[r.parent]!==void 0?e[r.parent].add(e[n]):s.add(e[n])}}return s.updateMatrixWorld(!0),e}var Eo=class{build(t){let e=[],n=[],i=[],r=[],a=[],o=[],l=[],c=[],h=[],d=[],f=[],m=[],g=[],_=[],p=0,u={};for(let A=0;A<t.metadata.vertexCount;A++){let S=t.vertices[A];for(let v=0,b=S.position.length;v<b;v++)e.push(S.position[v]);for(let v=0,b=S.normal.length;v<b;v++)i.push(S.normal[v]);for(let v=0,b=S.uv.length;v<b;v++)n.push(S.uv[v]);for(let v=0;v<4;v++)l.push(S.skinIndices.length-1>=v?S.skinIndices[v]:0);for(let v=0;v<4;v++)c.push(S.skinWeights.length-1>=v?S.skinWeights[v]:0)}for(let A=0;A<t.metadata.faceCount;A++){let S=t.faces[A];for(let v=0,b=S.indices.length;v<b;v++)r.push(S.indices[v])}for(let A=0;A<t.metadata.materialCount;A++){let S=t.materials[A];a.push({offset:p*3,count:S.faceCount*3}),p+=S.faceCount}for(let A=0;A<t.metadata.rigidBodyCount;A++){let S=t.rigidBodies[A],v=u[S.boneIndex];v=v===void 0?S.type:Math.max(S.type,v),u[S.boneIndex]=v}for(let A=0;A<t.metadata.boneCount;A++){let S=t.bones[A],v={index:A,transformationClass:S.transformationClass,parent:S.parentIndex,name:S.name,pos:S.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:u[A]!==void 0?u[A]:-1};v.parent!==-1&&(v.pos[0]-=t.bones[v.parent].position[0],v.pos[1]-=t.bones[v.parent].position[1],v.pos[2]-=t.bones[v.parent].position[2]),o.push(v)}if(t.metadata.format==="pmd")for(let A=0;A<t.metadata.ikCount;A++){let S=t.iks[A],v={target:S.target,effector:S.effector,iteration:S.iteration,maxAngle:S.maxAngle*4,links:[]};for(let b=0,R=S.links.length;b<R;b++){let y={};y.index=S.links[b].index,y.enabled=!0,t.bones[y.index].name.indexOf("\u3072\u3056")>=0&&(y.limitation=new P(1,0,0)),v.links.push(y)}f.push(v)}else for(let A=0;A<t.metadata.boneCount;A++){let S=t.bones[A].ik;if(S===void 0)continue;let v={target:A,effector:S.effector,iteration:S.iteration,maxAngle:S.maxAngle,links:[]};for(let b=0,R=S.links.length;b<R;b++){let y={};if(y.index=S.links[b].index,y.enabled=!0,S.links[b].angleLimitation===1){let w=S.links[b].lowerLimitationAngle,G=S.links[b].upperLimitationAngle,Q=-G[0],st=-G[1];G[0]=-w[0],G[1]=-w[1],w[0]=Q,w[1]=st,y.rotationMin=new P().fromArray(w),y.rotationMax=new P().fromArray(G)}v.links.push(y)}f.push(v),o[A].ik=v}if(t.metadata.format==="pmx"){let v=function(b){b.param&&(m.push(b.param),o[b.param.index].grant=b.param),b.visited=!0;for(let R=0,y=b.children.length;R<y;R++){let w=b.children[R];w.visited||v(w)}},A={};for(let b=0;b<t.metadata.boneCount;b++){let R=t.bones[b],y=R.grant;if(y===void 0)continue;let w={index:b,parentIndex:y.parentIndex,ratio:y.ratio,isLocal:y.isLocal,affectRotation:y.affectRotation,affectPosition:y.affectPosition,transformationClass:R.transformationClass};A[b]={parent:null,children:[],param:w,visited:!1}}let S={parent:null,children:[],param:null,visited:!1};for(let b in A){let R=A[b],y=A[R.parentIndex]||S;R.parent=y,y.children.push(R)}v(S)}function M(A,S,v){for(let b=0;b<S.elementCount;b++){let R=S.elements[b],y;t.metadata.format==="pmd"?y=t.morphs[0].elements[R.index].index:y=R.index,A.array[y*3+0]+=R.position[0]*v,A.array[y*3+1]+=R.position[1]*v,A.array[y*3+2]+=R.position[2]*v}}for(let A=0;A<t.metadata.morphCount;A++){let S=t.morphs[A],v={name:S.name},b=new se(t.metadata.vertexCount*3,3);b.name=S.name;for(let R=0;R<t.metadata.vertexCount*3;R++)b.array[R]=e[R];if(t.metadata.format==="pmd")A!==0&&M(b,S,1);else if(S.type===0)for(let R=0;R<S.elementCount;R++){let y=t.morphs[S.elements[R].index],w=S.elements[R].ratio;y.type===1&&M(b,y,w)}else S.type===1?M(b,S,1):S.type===2||S.type===3||S.type===4||S.type===5||S.type===6||S.type===7||S.type;h.push(v),d.push(b)}for(let A=0;A<t.metadata.rigidBodyCount;A++){let S=t.rigidBodies[A],v={};for(let b in S)v[b]=S[b];if(t.metadata.format==="pmx"&&v.boneIndex!==-1){let b=t.bones[v.boneIndex];v.position[0]-=b.position[0],v.position[1]-=b.position[1],v.position[2]-=b.position[2]}g.push(v)}for(let A=0;A<t.metadata.constraintCount;A++){let S=t.constraints[A],v={};for(let y in S)v[y]=S[y];let b=g[v.rigidBodyIndex1],R=g[v.rigidBodyIndex2];b.type!==0&&R.type===2&&b.boneIndex!==-1&&R.boneIndex!==-1&&t.bones[R.boneIndex].parentIndex===b.boneIndex&&(R.type=1),_.push(v)}let x=new Re;x.setAttribute("position",new se(e,3)),x.setAttribute("normal",new se(i,3)),x.setAttribute("uv",new se(n,2)),x.setAttribute("skinIndex",new Ci(l,4)),x.setAttribute("skinWeight",new se(c,4)),x.setIndex(r);for(let A=0,S=a.length;A<S;A++)x.addGroup(a[A].offset,a[A].count,A);return x.bones=o,x.morphTargets=h,x.morphAttributes.position=d,x.morphTargetsRelative=!1,x.userData.MMD={bones:o,iks:f,grants:m,rigidBodies:g,constraints:_,format:t.metadata.format},x.computeBoundingSphere(),x}},To=class{constructor(t){this.manager=t,this.textureLoader=new Ar(this.manager),this.tgaLoader=null,this.crossOrigin="anonymous",this.resourcePath=void 0}setCrossOrigin(t){return this.crossOrigin=t,this}setResourcePath(t){return this.resourcePath=t,this}build(t,e){let n=[],i={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(let r=0;r<t.metadata.materialCount;r++){let a=t.materials[r],o={userData:{MMD:{}}};if(a.name!==void 0&&(o.name=a.name),o.diffuse=new Tt().setRGB(a.diffuse[0],a.diffuse[1],a.diffuse[2],Qt),o.opacity=a.diffuse[3],o.specular=new Tt().setRGB(...a.specular,Qt),o.shininess=a.shininess,o.emissive=new Tt().setRGB(...a.ambient,Qt),o.transparent=o.opacity!==1,o.fog=!0,o.blending=fo,o.blendSrc=bi,o.blendDst=qi,o.blendSrcAlpha=bi,o.blendDstAlpha=po,t.metadata.format==="pmx"&&(a.flag&1)===1?o.side=Oe:o.side=o.opacity===1?Ze:Oe,t.metadata.format==="pmd"){if(a.fileName){let h=a.fileName.split("*");if(o.map=this._loadTexture(h[0],i),h.length>1){let d=h[1].slice(-4).toLowerCase();o.matcap=this._loadTexture(h[1],i),o.matcapCombine=d===".sph"?Jn:Ii}}let l=a.toonIndex===-1?"toon00.bmp":t.toonTextures[a.toonIndex].fileName;o.gradientMap=this._loadTexture(l,i,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(l)}),o.userData.outlineParameters={thickness:a.edgeFlag===1?.003:0,color:[0,0,0],alpha:1,visible:a.edgeFlag===1}}else{a.textureIndex!==-1&&(o.map=this._loadTexture(t.textures[a.textureIndex],i),o.userData.MMD.mapFileName=t.textures[a.textureIndex]),a.envTextureIndex!==-1&&(a.envFlag===1||a.envFlag==2)&&(o.matcap=this._loadTexture(t.textures[a.envTextureIndex],i),o.userData.MMD.matcapFileName=t.textures[a.envTextureIndex],o.matcapCombine=a.envFlag===1?Jn:Ii);let l,c;a.toonIndex===-1||a.toonFlag!==0?(l="toon"+("0"+(a.toonIndex+1)).slice(-2)+".bmp",c=!0):(l=t.textures[a.toonIndex],c=!1),o.gradientMap=this._loadTexture(l,i,{isToonTexture:!0,isDefaultToonTexture:c}),o.userData.outlineParameters={thickness:a.edgeSize/300,color:a.edgeColor.slice(0,3),alpha:a.edgeColor[3],visible:(a.flag&16)!==0&&a.edgeSize>0}}o.map!==void 0&&(o.transparent||this._checkImageTransparency(o.map,e,r),o.emissive.multiplyScalar(.2)),n.push(new Ro(o))}if(t.metadata.format==="pmx"){let r=function(a,o){for(let l=0,c=a.length;l<c;l++){let h=a[l];if(h.index===-1)continue;let d=o[h.index];d.opacity!==h.diffuse[3]&&(d.transparent=!0)}};for(let a=0,o=t.morphs.length;a<o;a++){let l=t.morphs[a],c=l.elements;if(l.type===0)for(let h=0,d=c.length;h<d;h++){let f=t.morphs[c[h].index];f.type===8&&r(f.elements,n)}else l.type===8&&r(c,n)}}return n}_getTGALoader(){if(this.tgaLoader===null){if(as===void 0)throw new Error("THREE.MMDLoader: Import TGALoader");this.tgaLoader=new as(this.manager)}return this.tgaLoader}_isDefaultToonTexture(t){return t.length!==10?!1:/toon(10|0[0-9])\.bmp/.test(t)}_loadTexture(t,e,n,i,r){n=n||{};let a=this,o;if(n.isDefaultToonTexture===!0){let h;try{h=parseInt(t.match(/toon([0-9]{2})\.bmp$/)[1])}catch{console.warn("THREE.MMDLoader: "+t+" seems like a not right default texture path. Using toon00.bmp instead."),h=0}o=V2[h]}else o=this.resourcePath+t;if(e[o]!==void 0)return e[o];let l=this.manager.getHandler(o);l===null&&(l=t.slice(-4).toLowerCase()===".tga"?this._getTGALoader():this.textureLoader);let c=l.load(o,function(h){n.isToonTexture===!0&&(h.image=a._getRotatedImage(h.image),h.magFilter=le,h.minFilter=le),h.flipY=!1,h.wrapS=Ti,h.wrapT=Ti,h.colorSpace=Qt;for(let d=0;d<c.readyCallbacks.length;d++)c.readyCallbacks[d](c);delete c.readyCallbacks},i,r);return c.readyCallbacks=[],e[o]=c,c}_getRotatedImage(t){let e=document.createElement("canvas"),n=e.getContext("2d"),i=t.width,r=t.height;return e.width=i,e.height=r,n.clearRect(0,0,i,r),n.translate(i/2,r/2),n.rotate(.5*Math.PI),n.translate(-i/2,-r/2),n.drawImage(t,0,0),n.getImageData(0,0,i,r)}_checkImageTransparency(t,e,n){t.readyCallbacks.push(function(i){function r(h){let d=document.createElement("canvas");d.width=h.width,d.height=h.height;let f=d.getContext("2d");return f.drawImage(h,0,0),f.getImageData(0,0,d.width,d.height)}function a(h,d,f){let m=h.width,g=h.height,_=h.data,p=253;if(_.length/(m*g)!==4)return!1;for(let u=0;u<f.length;u+=3){let M={x:0,y:0};for(let x=0;x<3;x++){let A=f[u*3+x],S={x:d[A*2+0],y:d[A*2+1]};if(o(h,S)<p)return!0;M.x+=S.x,M.y+=S.y}if(M.x/=3,M.y/=3,o(h,M)<p)return!0}return!1}function o(h,d){let f=h.width,m=h.height,g=Math.round(d.x*f)%f,_=Math.round(d.y*m)%m;g<0&&(g+=f),_<0&&(_+=m);let p=_*f+g;return h.data[p*4+3]}if(i.isCompressedTexture===!0){H2.includes(i.format)?t.transparent=!1:t.transparent=!0;return}let l=i.image.data!==void 0?i.image:r(i.image),c=e.groups[n];a(l,e.attributes.uv.array,e.index.array.slice(c.start,c.start+c.count))&&(t.transparent=!0)})}},wo=class{build(t,e){let n=this.buildSkeletalAnimation(t,e).tracks,i=this.buildMorphAnimation(t,e).tracks;for(let r=0,a=i.length;r<a;r++)n.push(i[r]);return new pn("",-1,n)}buildSkeletalAnimation(t,e){function n(l,c,h){l.push(c[h+0]/127),l.push(c[h+8]/127),l.push(c[h+4]/127),l.push(c[h+12]/127)}let i=[],r={},a=e.skeleton.bones,o={};for(let l=0,c=a.length;l<c;l++)o[a[l].name]=!0;for(let l=0;l<t.metadata.motionCount;l++){let c=t.motions[l],h=c.boneName;o[h]!==void 0&&(r[h]=r[h]||[],r[h].push(c))}for(let l in r){let c=r[l];c.sort(function(u,M){return u.frameNum-M.frameNum});let h=[],d=[],f=[],m=[],g=[],_=e.skeleton.getBoneByName(l).position.toArray();for(let u=0,M=c.length;u<M;u++){let x=c[u].frameNum/30,A=c[u].position,S=c[u].rotation,v=c[u].interpolation;h.push(x);for(let b=0;b<3;b++)d.push(_[b]+A[b]);for(let b=0;b<4;b++)f.push(S[b]);for(let b=0;b<3;b++)n(m,v,b);n(g,v,3)}let p=".bones["+l+"]";i.push(this._createTrack(p+".position",Qe,h,d,m)),i.push(this._createTrack(p+".quaternion",Ke,h,f,g))}return new pn("",-1,i)}buildMorphAnimation(t,e){let n=[],i={},r=e.morphTargetDictionary;for(let a=0;a<t.metadata.morphCount;a++){let o=t.morphs[a],l=o.morphName;r[l]!==void 0&&(i[l]=i[l]||[],i[l].push(o))}for(let a in i){let o=i[a];o.sort(function(h,d){return h.frameNum-d.frameNum});let l=[],c=[];for(let h=0,d=o.length;h<d;h++)l.push(o[h].frameNum/30),c.push(o[h].weight);n.push(new fn(".morphTargetInfluences["+r[a]+"]",l,c))}return new pn("",-1,n)}buildCameraAnimation(t){function e(A,S){A.push(S.x),A.push(S.y),A.push(S.z)}function n(A,S){A.push(S.x),A.push(S.y),A.push(S.z),A.push(S.w)}function i(A,S,v){A.push(S[v*4+0]/127),A.push(S[v*4+1]/127),A.push(S[v*4+2]/127),A.push(S[v*4+3]/127)}let r=t.cameras===void 0?[]:t.cameras.slice();r.sort(function(A,S){return A.frameNum-S.frameNum});let a=[],o=[],l=[],c=[],h=[],d=[],f=[],m=[],g=[],_=new $t,p=new Cn,u=new P,M=new P;for(let A=0,S=r.length;A<S;A++){let v=r[A],b=v.frameNum/30,R=v.position,y=v.rotation,w=v.distance,G=v.fov,Q=v.interpolation;a.push(b),u.set(0,0,-w),M.set(R[0],R[1],R[2]),p.set(-y[0],-y[1],-y[2]),_.setFromEuler(p),u.add(M),u.applyQuaternion(_),e(o,M),n(l,_),e(c,u),h.push(G);for(let st=0;st<3;st++)i(d,Q,st);i(f,Q,3);for(let st=0;st<3;st++)i(m,Q,4);i(g,Q,5)}let x=[];return x.push(this._createTrack("target.position",Qe,a,o,d)),x.push(this._createTrack(".quaternion",Ke,a,l,f)),x.push(this._createTrack(".position",Qe,a,c,m)),x.push(this._createTrack(".fov",fn,a,h,g)),new pn("",-1,x)}_createTrack(t,e,n,i,r){if(n.length>2){n=n.slice(),i=i.slice(),r=r.slice();let o=i.length/n.length,l=r.length/n.length,c=1;for(let h=2,d=n.length;h<d;h++){for(let f=0;f<o;f++)if(i[c*o+f]!==i[(c-1)*o+f]||i[c*o+f]!==i[h*o+f]){c++;break}if(h>c){n[c]=n[h];for(let f=0;f<o;f++)i[c*o+f]=i[h*o+f];for(let f=0;f<l;f++)r[c*l+f]=r[h*l+f]}}n.length=c+1,i.length=(c+1)*o,r.length=(c+1)*l}let a=new e(t,n,i);return a.createInterpolant=function(l){return new Co(this.times,this.values,this.getValueSize(),l,new Float32Array(r))},a}},Co=class extends Rn{constructor(t,e,n,i,r){super(t,e,n,i),this.interpolationParams=r}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=this.interpolationParams,c=t*o,h=c-o,d=i-e<1/30*1.5?0:(n-e)/(i-e);if(o===4){let f=l[t*4+0],m=l[t*4+1],g=l[t*4+2],_=l[t*4+3],p=this._calculate(f,m,g,_,d);$t.slerpFlat(r,0,a,h,a,c,p)}else if(o===3)for(let f=0;f!==o;++f){let m=l[t*12+f*4+0],g=l[t*12+f*4+1],_=l[t*12+f*4+2],p=l[t*12+f*4+3],u=this._calculate(m,g,_,p,d);r[f]=a[h+f]*(1-u)+a[c+f]*u}else{let f=l[t*4+0],m=l[t*4+1],g=l[t*4+2],_=l[t*4+3],p=this._calculate(f,m,g,_,d);r[0]=a[h]*(1-p)+a[c]*p}return r}_calculate(t,e,n,i,r){let a=.5,o=a,l=1-o,c=15,h=1e-5,d=Math,f,m,g;for(let _=0;_<c;_++){f=3*l*l*o,m=3*l*o*o,g=o*o*o;let p=f*t+m*e+g-r;if(d.abs(p)<h)break;a/=2,o+=p<0?a:-a,l=1-o}return f*n+m*i+g}},Ro=class extends qe{constructor(t){super(),this.isMMDToonMaterial=!0,this.type="MMDToonMaterial",this._matcapCombine=Ii,this.emissiveIntensity=1,this.normalMapType=_o,this.combine=Jn,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.lights=!0,this.vertexShader=rs.vertexShader,this.fragmentShader=rs.fragmentShader,this.defines=Object.assign({},rs.defines),Object.defineProperty(this,"matcapCombine",{get:function(){return this._matcapCombine},set:function(n){switch(this._matcapCombine=n,n){case Jn:this.defines.MATCAP_BLENDING_MULTIPLY=!0,delete this.defines.MATCAP_BLENDING_ADD;break;default:case Ii:this.defines.MATCAP_BLENDING_ADD=!0,delete this.defines.MATCAP_BLENDING_MULTIPLY;break}}}),this.uniforms=ss.clone(rs.uniforms);let e=["specular","opacity","diffuse","map","matcap","gradientMap","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveMap","bumpMap","bumpScale","normalMap","normalScale","displacemantBias","displacemantMap","displacemantScale","specularMap","alphaMap","reflectivity","refractionRatio"];for(let n of e)Object.defineProperty(this,n,{get:function(){return this.uniforms[n].value},set:function(i){this.uniforms[n].value=i}});this._shininess=30,Object.defineProperty(this,"shininess",{get:function(){return this._shininess},set:function(n){this._shininess=n,this.uniforms.shininess.value=Math.max(this._shininess,1e-4)}}),Object.defineProperty(this,"color",Object.getOwnPropertyDescriptor(this,"diffuse")),this.setValues(t)}copy(t){return super.copy(t),this.matcapCombine=t.matcapCombine,this.emissiveIntensity=t.emissiveIntensity,this.normalMapType=t.normalMapType,this.combine=t.combine,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}};var $c=new $t,jc=new P,cs=new P,t3=new P,hs=new P,Po=new P,Fr=new $t,W2=new P,Io=new P,Uo=new P,Kn=new Vt,us=class{constructor(t,e=[]){this.mesh=t,this.iks=e,this._valid()}update(){let t=this.iks;for(let e=0,n=t.length;e<n;e++)this.updateOne(t[e]);return this}updateOne(t){let e=this.mesh.skeleton.bones,n=Math,i=e[t.effector],r=e[t.target];jc.setFromMatrixPosition(r.matrixWorld);let a=t.links,o=t.iteration!==void 0?t.iteration:1;for(let l=0;l<o;l++){let c=!1;for(let h=0,d=a.length;h<d;h++){let f=e[a[h].index];if(a[h].enabled===!1)break;let m=a[h].limitation,g=a[h].rotationMin,_=a[h].rotationMax;f.matrixWorld.decompose(Po,Fr,W2),Fr.invert(),t3.setFromMatrixPosition(i.matrixWorld),hs.subVectors(t3,Po),hs.applyQuaternion(Fr),hs.normalize(),cs.subVectors(jc,Po),cs.applyQuaternion(Fr),cs.normalize();let p=cs.dot(hs);if(p>1?p=1:p<-1&&(p=-1),p=n.acos(p),!(p<1e-5)){if(t.minAngle!==void 0&&p<t.minAngle&&(p=t.minAngle),t.maxAngle!==void 0&&p>t.maxAngle&&(p=t.maxAngle),Io.crossVectors(hs,cs),Io.normalize(),$c.setFromAxisAngle(Io,p),f.quaternion.multiply($c),m!==void 0){let u=f.quaternion.w;u>1&&(u=1);let M=n.sqrt(1-u*u);f.quaternion.set(m.x*M,m.y*M,m.z*M,u)}g!==void 0&&f.rotation.setFromVector3(Uo.setFromEuler(f.rotation).max(g)),_!==void 0&&f.rotation.setFromVector3(Uo.setFromEuler(f.rotation).min(_)),f.updateMatrixWorld(!0),c=!0}}if(!c)break}return this}createHelper(){return new Do(this.mesh,this.iks)}_valid(){let t=this.iks,e=this.mesh.skeleton.bones;for(let n=0,i=t.length;n<i;n++){let r=t[n],a=e[r.effector],o=r.links,l,c;l=a;for(let h=0,d=o.length;h<d;h++)c=e[o[h].index],l.parent!==c&&console.warn("THREE.CCDIKSolver: bone "+l.name+" is not the child of bone "+c.name),l=c}}};function Or(s,t){return Uo.setFromMatrixPosition(s.matrixWorld).applyMatrix4(t)}function Lo(s,t,e,n){let i=Or(e,n);s[t*3+0]=i.x,s[t*3+1]=i.y,s[t*3+2]=i.z}var Do=class extends ee{constructor(t,e=[],n=.25){super(),this.root=t,this.iks=e,this.matrix.copy(t.matrixWorld),this.matrixAutoUpdate=!1,this.sphereGeometry=new Pi(n,16,8),this.targetSphereMaterial=new ke({color:new Tt(16746632),depthTest:!1,depthWrite:!1,transparent:!0}),this.effectorSphereMaterial=new ke({color:new Tt(8978312),depthTest:!1,depthWrite:!1,transparent:!0}),this.linkSphereMaterial=new ke({color:new Tt(8947967),depthTest:!1,depthWrite:!1,transparent:!0}),this.lineMaterial=new ji({color:new Tt(16711680),depthTest:!1,depthWrite:!1,transparent:!0}),this._init()}updateMatrixWorld(t){let e=this.root;if(this.visible){let n=0,i=this.iks,r=e.skeleton.bones;Kn.copy(e.matrixWorld).invert();for(let a=0,o=i.length;a<o;a++){let l=i[a],c=r[l.target],h=r[l.effector],d=this.children[n++],f=this.children[n++];d.position.copy(Or(c,Kn)),f.position.copy(Or(h,Kn));for(let _=0,p=l.links.length;_<p;_++){let u=l.links[_],M=r[u.index];this.children[n++].position.copy(Or(M,Kn))}let m=this.children[n++],g=m.geometry.attributes.position.array;Lo(g,0,c,Kn),Lo(g,1,h,Kn);for(let _=0,p=l.links.length;_<p;_++){let u=l.links[_],M=r[u.index];Lo(g,_+2,M,Kn)}m.geometry.attributes.position.needsUpdate=!0}}this.matrix.copy(e.matrixWorld),super.updateMatrixWorld(t)}dispose(){this.sphereGeometry.dispose(),this.targetSphereMaterial.dispose(),this.effectorSphereMaterial.dispose(),this.linkSphereMaterial.dispose(),this.lineMaterial.dispose();let t=this.children;for(let e=0;e<t.length;e++){let n=t[e];n.isLine&&n.geometry.dispose()}}_init(){let t=this,e=this.iks;function n(l){let c=new Re,h=new Float32Array((2+l.links.length)*3);return c.setAttribute("position",new Ce(h,3)),c}function i(){return new me(t.sphereGeometry,t.targetSphereMaterial)}function r(){return new me(t.sphereGeometry,t.effectorSphereMaterial)}function a(){return new me(t.sphereGeometry,t.linkSphereMaterial)}function o(l){return new pr(n(l),t.lineMaterial)}for(let l=0,c=e.length;l<c;l++){let h=e[l];this.add(i()),this.add(r());for(let d=0,f=h.links.length;d<f;d++)this.add(a());this.add(o(h))}}};var fs=class{constructor(t,e,n=[],i={}){if(typeof Ammo>"u")throw new Error("THREE.MMDPhysics: Import ammo.js https://github.com/kripken/ammo.js");this.manager=new Fo,this.mesh=t,this.unitStep=i.unitStep!==void 0?i.unitStep:1/65,this.maxStepNum=i.maxStepNum!==void 0?i.maxStepNum:3,this.gravity=new P(0,-9.8*10,0),i.gravity!==void 0&&this.gravity.copy(i.gravity),this.world=i.world!==void 0?i.world:null,this.bodies=[],this.constraints=[],this._init(t,e,n)}update(t){let e=this.manager,n=this.mesh,i=!1,r=e.allocThreeVector3(),a=e.allocThreeQuaternion(),o=e.allocThreeVector3();n.matrixWorld.decompose(r,a,o),(o.x!==1||o.y!==1||o.z!==1)&&(i=!0);let l;return i&&(l=n.parent,l!==null&&(n.parent=null),o.copy(this.mesh.scale),n.scale.set(1,1,1),n.updateMatrixWorld(!0)),this._updateRigidBodies(),this._stepSimulation(t),this._updateBones(),i&&(l!==null&&(n.parent=l),n.scale.copy(o)),e.freeThreeVector3(o),e.freeThreeQuaternion(a),e.freeThreeVector3(r),this}reset(){for(let t=0,e=this.bodies.length;t<e;t++)this.bodies[t].reset();return this}warmup(t){for(let e=0;e<t;e++)this.update(1/60);return this}setGravity(t){return this.world.setGravity(new Ammo.btVector3(t.x,t.y,t.z)),this.gravity.copy(t),this}createHelper(){return new zo(this.mesh,this)}_init(t,e,n){let i=this.manager,r=t.parent;r!==null&&(t.parent=null);let a=i.allocThreeVector3(),o=i.allocThreeQuaternion(),l=i.allocThreeVector3();a.copy(t.position),o.copy(t.quaternion),l.copy(t.scale),t.position.set(0,0,0),t.quaternion.set(0,0,0,1),t.scale.set(1,1,1),t.updateMatrixWorld(!0),this.world===null&&(this.world=this._createWorld(),this.setGravity(this.gravity)),this._initRigidBodies(e),this._initConstraints(n),r!==null&&(t.parent=r),t.position.copy(a),t.quaternion.copy(o),t.scale.copy(l),t.updateMatrixWorld(!0),this.reset(),i.freeThreeVector3(a),i.freeThreeQuaternion(o),i.freeThreeVector3(l)}_createWorld(){let t=new Ammo.btDefaultCollisionConfiguration,e=new Ammo.btCollisionDispatcher(t),n=new Ammo.btDbvtBroadphase,i=new Ammo.btSequentialImpulseConstraintSolver;return new Ammo.btDiscreteDynamicsWorld(e,n,i,t)}_initRigidBodies(t){for(let e=0,n=t.length;e<n;e++)this.bodies.push(new Oo(this.mesh,this.world,t[e],this.manager))}_initConstraints(t){for(let e=0,n=t.length;e<n;e++){let i=t[e],r=this.bodies[i.rigidBodyIndex1],a=this.bodies[i.rigidBodyIndex2];this.constraints.push(new Bo(this.mesh,this.world,r,a,i,this.manager))}}_stepSimulation(t){let e=this.unitStep,n=t,i=(t/e|0)+1;n<e&&(n=e,i=1),i>this.maxStepNum&&(i=this.maxStepNum),this.world.stepSimulation(n,i,e)}_updateRigidBodies(){for(let t=0,e=this.bodies.length;t<e;t++)this.bodies[t].updateFromBone()}_updateBones(){for(let t=0,e=this.bodies.length;t<e;t++)this.bodies[t].updateBone()}},Fo=class{constructor(){this.threeVector3s=[],this.threeMatrix4s=[],this.threeQuaternions=[],this.threeEulers=[],this.transforms=[],this.quaternions=[],this.vector3s=[]}allocThreeVector3(){return this.threeVector3s.length>0?this.threeVector3s.pop():new P}freeThreeVector3(t){this.threeVector3s.push(t)}allocThreeMatrix4(){return this.threeMatrix4s.length>0?this.threeMatrix4s.pop():new Vt}freeThreeMatrix4(t){this.threeMatrix4s.push(t)}allocThreeQuaternion(){return this.threeQuaternions.length>0?this.threeQuaternions.pop():new $t}freeThreeQuaternion(t){this.threeQuaternions.push(t)}allocThreeEuler(){return this.threeEulers.length>0?this.threeEulers.pop():new Cn}freeThreeEuler(t){this.threeEulers.push(t)}allocTransform(){return this.transforms.length>0?this.transforms.pop():new Ammo.btTransform}freeTransform(t){this.transforms.push(t)}allocQuaternion(){return this.quaternions.length>0?this.quaternions.pop():new Ammo.btQuaternion}freeQuaternion(t){this.quaternions.push(t)}allocVector3(){return this.vector3s.length>0?this.vector3s.pop():new Ammo.btVector3}freeVector3(t){this.vector3s.push(t)}setIdentity(t){t.setIdentity()}getBasis(t){var e=this.allocQuaternion();return t.getBasis().getRotation(e),e}getBasisAsMatrix3(t){var e=this.getBasis(t),n=this.quaternionToMatrix3(e);return this.freeQuaternion(e),n}getOrigin(t){return t.getOrigin()}setOrigin(t,e){t.getOrigin().setValue(e.x(),e.y(),e.z())}copyOrigin(t,e){var n=e.getOrigin();this.setOrigin(t,n)}setBasis(t,e){t.setRotation(e)}setBasisFromMatrix3(t,e){var n=this.matrix3ToQuaternion(e);this.setBasis(t,n),this.freeQuaternion(n)}setOriginFromArray3(t,e){t.getOrigin().setValue(e[0],e[1],e[2])}setOriginFromThreeVector3(t,e){t.getOrigin().setValue(e.x,e.y,e.z)}setBasisFromArray3(t,e){var n=this.allocThreeQuaternion(),i=this.allocThreeEuler();i.set(e[0],e[1],e[2]),this.setBasisFromThreeQuaternion(t,n.setFromEuler(i)),this.freeThreeEuler(i),this.freeThreeQuaternion(n)}setBasisFromThreeQuaternion(t,e){var n=this.allocQuaternion();n.setX(e.x),n.setY(e.y),n.setZ(e.z),n.setW(e.w),this.setBasis(t,n),this.freeQuaternion(n)}multiplyTransforms(t,e){var n=this.allocTransform();this.setIdentity(n);var i=this.getBasisAsMatrix3(t),r=this.getBasisAsMatrix3(e),a=this.getOrigin(t),o=this.getOrigin(e),l=this.multiplyMatrix3ByVector3(i,o),c=this.addVector3(l,a);this.setOrigin(n,c);var h=this.multiplyMatrices3(i,r);return this.setBasisFromMatrix3(n,h),this.freeVector3(l),this.freeVector3(c),n}inverseTransform(t){var e=this.allocTransform(),n=this.getBasisAsMatrix3(t),i=this.getOrigin(t),r=this.transposeMatrix3(n),a=this.negativeVector3(i),o=this.multiplyMatrix3ByVector3(r,a);return this.setOrigin(e,o),this.setBasisFromMatrix3(e,r),this.freeVector3(a),this.freeVector3(o),e}multiplyMatrices3(t,e){var n=[],i=this.rowOfMatrix3(t,0),r=this.rowOfMatrix3(t,1),a=this.rowOfMatrix3(t,2),o=this.columnOfMatrix3(e,0),l=this.columnOfMatrix3(e,1),c=this.columnOfMatrix3(e,2);return n[0]=this.dotVectors3(i,o),n[1]=this.dotVectors3(i,l),n[2]=this.dotVectors3(i,c),n[3]=this.dotVectors3(r,o),n[4]=this.dotVectors3(r,l),n[5]=this.dotVectors3(r,c),n[6]=this.dotVectors3(a,o),n[7]=this.dotVectors3(a,l),n[8]=this.dotVectors3(a,c),this.freeVector3(i),this.freeVector3(r),this.freeVector3(a),this.freeVector3(o),this.freeVector3(l),this.freeVector3(c),n}addVector3(t,e){var n=this.allocVector3();return n.setValue(t.x()+e.x(),t.y()+e.y(),t.z()+e.z()),n}dotVectors3(t,e){return t.x()*e.x()+t.y()*e.y()+t.z()*e.z()}rowOfMatrix3(t,e){var n=this.allocVector3();return n.setValue(t[e*3+0],t[e*3+1],t[e*3+2]),n}columnOfMatrix3(t,e){var n=this.allocVector3();return n.setValue(t[e+0],t[e+3],t[e+6]),n}negativeVector3(t){var e=this.allocVector3();return e.setValue(-t.x(),-t.y(),-t.z()),e}multiplyMatrix3ByVector3(t,e){var n=this.allocVector3(),i=this.rowOfMatrix3(t,0),r=this.rowOfMatrix3(t,1),a=this.rowOfMatrix3(t,2),o=this.dotVectors3(i,e),l=this.dotVectors3(r,e),c=this.dotVectors3(a,e);return n.setValue(o,l,c),this.freeVector3(i),this.freeVector3(r),this.freeVector3(a),n}transposeMatrix3(t){var e=[];return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],e}quaternionToMatrix3(t){var e=[],n=t.x(),i=t.y(),r=t.z(),a=t.w(),o=n*n,l=i*i,c=r*r,h=n*i,d=i*r,f=r*n,m=n*a,g=i*a,_=r*a;return e[0]=1-2*(l+c),e[1]=2*(h-_),e[2]=2*(f+g),e[3]=2*(h+_),e[4]=1-2*(c+o),e[5]=2*(d-m),e[6]=2*(f-g),e[7]=2*(d+m),e[8]=1-2*(o+l),e}matrix3ToQuaternion(t){var e=t[0]+t[4]+t[8],n,i,r,a,o;e>0?(n=Math.sqrt(e+1)*2,o=.25*n,i=(t[7]-t[5])/n,r=(t[2]-t[6])/n,a=(t[3]-t[1])/n):t[0]>t[4]&&t[0]>t[8]?(n=Math.sqrt(1+t[0]-t[4]-t[8])*2,o=(t[7]-t[5])/n,i=.25*n,r=(t[1]+t[3])/n,a=(t[2]+t[6])/n):t[4]>t[8]?(n=Math.sqrt(1+t[4]-t[0]-t[8])*2,o=(t[2]-t[6])/n,i=(t[1]+t[3])/n,r=.25*n,a=(t[5]+t[7])/n):(n=Math.sqrt(1+t[8]-t[0]-t[4])*2,o=(t[3]-t[1])/n,i=(t[2]+t[6])/n,r=(t[5]+t[7])/n,a=.25*n);var l=this.allocQuaternion();return l.setX(i),l.setY(r),l.setZ(a),l.setW(o),l}},Oo=class{constructor(t,e,n,i){this.mesh=t,this.world=e,this.params=n,this.manager=i,this.body=null,this.bone=null,this.boneOffsetForm=null,this.boneOffsetFormInverse=null,this._init()}reset(){return this._setTransformFromBone(),this}updateFromBone(){return this.params.boneIndex!==-1&&this.params.type===0&&this._setTransformFromBone(),this}updateBone(){return this.params.type===0||this.params.boneIndex===-1?this:(this._updateBoneRotation(),this.params.type===1&&this._updateBonePosition(),this.bone.updateMatrixWorld(!0),this.params.type===2&&this._setPositionFromBone(),this)}_init(){function t(p){switch(p.shapeType){case 0:return new Ammo.btSphereShape(p.width);case 1:return new Ammo.btBoxShape(new Ammo.btVector3(p.width,p.height,p.depth));case 2:return new Ammo.btCapsuleShape(p.width,p.height);default:throw new Error("unknown shape type "+p.shapeType)}}let e=this.manager,n=this.params,i=this.mesh.skeleton.bones,r=n.boneIndex===-1?new Zn:i[n.boneIndex],a=t(n),o=n.type===0?0:n.weight,l=e.allocVector3();l.setValue(0,0,0),o!==0&&a.calculateLocalInertia(o,l);let c=e.allocTransform();e.setIdentity(c),e.setOriginFromArray3(c,n.position),e.setBasisFromArray3(c,n.rotation);let h=e.allocThreeVector3(),d=e.allocTransform();e.setIdentity(d),e.setOriginFromThreeVector3(d,r.getWorldPosition(h));let f=e.multiplyTransforms(d,c),m=new Ammo.btDefaultMotionState(f),g=new Ammo.btRigidBodyConstructionInfo(o,m,a,l);g.set_m_friction(n.friction),g.set_m_restitution(n.restitution);let _=new Ammo.btRigidBody(g);n.type===0&&(_.setCollisionFlags(_.getCollisionFlags()|2),_.setActivationState(4)),_.setDamping(n.positionDamping,n.rotationDamping),_.setSleepingThresholds(0,0),this.world.addRigidBody(_,1<<n.groupIndex,n.groupTarget),this.body=_,this.bone=r,this.boneOffsetForm=c,this.boneOffsetFormInverse=e.inverseTransform(c),e.freeVector3(l),e.freeTransform(f),e.freeTransform(d),e.freeThreeVector3(h)}_getBoneTransform(){let t=this.manager,e=t.allocThreeVector3(),n=t.allocThreeQuaternion(),i=t.allocThreeVector3();this.bone.matrixWorld.decompose(e,n,i);let r=t.allocTransform();t.setOriginFromThreeVector3(r,e),t.setBasisFromThreeQuaternion(r,n);let a=t.multiplyTransforms(r,this.boneOffsetForm);return t.freeTransform(r),t.freeThreeVector3(i),t.freeThreeQuaternion(n),t.freeThreeVector3(e),a}_getWorldTransformForBone(){let t=this.manager,e=this.body.getCenterOfMassTransform();return t.multiplyTransforms(e,this.boneOffsetFormInverse)}_setTransformFromBone(){let t=this.manager,e=this._getBoneTransform();this.body.setCenterOfMassTransform(e),this.body.getMotionState().setWorldTransform(e),t.freeTransform(e)}_setPositionFromBone(){let t=this.manager,e=this._getBoneTransform(),n=t.allocTransform();this.body.getMotionState().getWorldTransform(n),t.copyOrigin(n,e),this.body.setCenterOfMassTransform(n),this.body.getMotionState().setWorldTransform(n),t.freeTransform(n),t.freeTransform(e)}_updateBoneRotation(){let t=this.manager,e=this._getWorldTransformForBone(),n=t.getBasis(e),i=t.allocThreeQuaternion(),r=t.allocThreeQuaternion(),a=t.allocThreeQuaternion();i.set(n.x(),n.y(),n.z(),n.w()),r.setFromRotationMatrix(this.bone.matrixWorld),r.conjugate(),r.multiply(i),a.setFromRotationMatrix(this.bone.matrix),this.bone.quaternion.copy(r.multiply(a).normalize()),t.freeThreeQuaternion(i),t.freeThreeQuaternion(r),t.freeThreeQuaternion(a),t.freeQuaternion(n),t.freeTransform(e)}_updateBonePosition(){let t=this.manager,e=this._getWorldTransformForBone(),n=t.allocThreeVector3(),i=t.getOrigin(e);n.set(i.x(),i.y(),i.z()),this.bone.parent&&this.bone.parent.worldToLocal(n),this.bone.position.copy(n),t.freeThreeVector3(n),t.freeTransform(e)}},Bo=class{constructor(t,e,n,i,r,a){this.mesh=t,this.world=e,this.bodyA=n,this.bodyB=i,this.params=r,this.manager=a,this.constraint=null,this._init()}_init(){let t=this.manager,e=this.params,n=this.bodyA,i=this.bodyB,r=t.allocTransform();t.setIdentity(r),t.setOriginFromArray3(r,e.position),t.setBasisFromArray3(r,e.rotation);let a=t.allocTransform(),o=t.allocTransform();n.body.getMotionState().getWorldTransform(a),i.body.getMotionState().getWorldTransform(o);let l=t.inverseTransform(a),c=t.inverseTransform(o),h=t.multiplyTransforms(l,r),d=t.multiplyTransforms(c,r),f=new Ammo.btGeneric6DofSpringConstraint(n.body,i.body,h,d,!0),m=t.allocVector3(),g=t.allocVector3(),_=t.allocVector3(),p=t.allocVector3();m.setValue(e.translationLimitation1[0],e.translationLimitation1[1],e.translationLimitation1[2]),g.setValue(e.translationLimitation2[0],e.translationLimitation2[1],e.translationLimitation2[2]),_.setValue(e.rotationLimitation1[0],e.rotationLimitation1[1],e.rotationLimitation1[2]),p.setValue(e.rotationLimitation2[0],e.rotationLimitation2[1],e.rotationLimitation2[2]),f.setLinearLowerLimit(m),f.setLinearUpperLimit(g),f.setAngularLowerLimit(_),f.setAngularUpperLimit(p);for(let u=0;u<3;u++)e.springPosition[u]!==0&&(f.enableSpring(u,!0),f.setStiffness(u,e.springPosition[u]));for(let u=0;u<3;u++)e.springRotation[u]!==0&&(f.enableSpring(u+3,!0),f.setStiffness(u+3,e.springRotation[u]));if(f.setParam!==void 0)for(let u=0;u<6;u++)f.setParam(2,.475,u);this.world.addConstraint(f,!0),this.constraint=f,t.freeTransform(r),t.freeTransform(a),t.freeTransform(o),t.freeTransform(l),t.freeTransform(c),t.freeTransform(h),t.freeTransform(d),t.freeVector3(m),t.freeVector3(g),t.freeVector3(_),t.freeVector3(p)}},Br=new P,ds=new $t,zr=new P,No=new Vt,zo=class extends ee{constructor(t,e){super(),this.root=t,this.physics=e,this.matrix.copy(t.matrixWorld),this.matrixAutoUpdate=!1,this.materials=[],this.materials.push(new ke({color:new Tt(16746632),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new ke({color:new Tt(8978312),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new ke({color:new Tt(8947967),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this._init()}dispose(){let t=this.materials,e=this.children;for(let n=0;n<t.length;n++)t[n].dispose();for(let n=0;n<e.length;n++){let i=e[n];i.isMesh&&i.geometry.dispose()}}updateMatrixWorld(t){var e=this.root;if(this.visible){var n=this.physics.bodies;No.copy(e.matrixWorld).decompose(Br,ds,zr).compose(Br,ds,zr.set(1,1,1)).invert();for(var i=0,r=n.length;i<r;i++){var a=n[i].body,o=this.children[i],l=a.getCenterOfMassTransform(),c=l.getOrigin(),h=l.getRotation();o.position.set(c.x(),c.y(),c.z()).applyMatrix4(No),o.quaternion.setFromRotationMatrix(No).multiply(ds.set(h.x(),h.y(),h.z(),h.w()))}}this.matrix.copy(e.matrixWorld).decompose(Br,ds,zr).compose(Br,ds,zr.set(1,1,1)),super.updateMatrixWorld(t)}_init(){var t=this.physics.bodies;function e(a){switch(a.shapeType){case 0:return new Pi(a.width,16,8);case 1:return new Yn(a.width*2,a.height*2,a.depth*2,8,8,8);case 2:return new vr(a.width,a.height,8,16);default:return null}}for(var n=0,i=t.length;n<i;n++){var r=t[n].params;this.add(new me(e(r),this.materials[r.type]))}}};var kr=class{constructor(t={}){this.meshes=[],this.camera=null,this.cameraTarget=new ee,this.cameraTarget.name="target",this.audio=null,this.audioManager=null,this.objects=new WeakMap,this.configuration={sync:t.sync!==void 0?t.sync:!0,afterglow:t.afterglow!==void 0?t.afterglow:0,resetPhysicsOnLoop:t.resetPhysicsOnLoop!==void 0?t.resetPhysicsOnLoop:!0,pmxAnimation:t.pmxAnimation!==void 0?t.pmxAnimation:!1},this.enabled={animation:!0,ik:!0,grant:!0,physics:!0,cameraAnimation:!0},this.onBeforePhysics=function(){},this.sharedPhysics=!1,this.masterPhysics=null}add(t,e={}){if(t.isSkinnedMesh)this._addMesh(t,e);else if(t.isCamera)this._setupCamera(t,e);else if(t.type==="Audio")this._setupAudio(t,e);else throw new Error("THREE.MMDAnimationHelper.add: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this}remove(t){if(t.isSkinnedMesh)this._removeMesh(t);else if(t.isCamera)this._clearCamera(t);else if(t.type==="Audio")this._clearAudio(t);else throw new Error("THREE.MMDAnimationHelper.remove: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this}update(t){this.audioManager!==null&&this.audioManager.control(t);for(let e=0;e<this.meshes.length;e++)this._animateMesh(this.meshes[e],t);return this.sharedPhysics&&this._updateSharedPhysics(t),this.camera!==null&&this._animateCamera(this.camera,t),this}pose(t,e,n={}){n.resetPose!==!1&&t.pose();let i=t.skeleton.bones,r=e.bones,a={};for(let c=0,h=i.length;c<h;c++)a[i[c].name]=c;let o=new P,l=new $t;for(let c=0,h=r.length;c<h;c++){let d=r[c],f=a[d.name];if(f===void 0)continue;let m=i[f];m.position.add(o.fromArray(d.translation)),m.quaternion.multiply(l.fromArray(d.quaternion))}if(t.updateMatrixWorld(!0),this.configuration.pmxAnimation&&t.geometry.userData.MMD&&t.geometry.userData.MMD.format==="pmx"){let c=this._sortBoneDataArray(t.geometry.userData.MMD.bones.slice()),h=n.ik!==!1?this._createCCDIKSolver(t):null,d=n.grant!==!1?this.createGrantSolver(t):null;this._animatePMXMesh(t,c,h,d)}else n.ik!==!1&&this._createCCDIKSolver(t).update(),n.grant!==!1&&this.createGrantSolver(t).update();return this}enable(t,e){if(this.enabled[t]===void 0)throw new Error("THREE.MMDAnimationHelper.enable: unknown key "+t);if(this.enabled[t]=e,t==="physics")for(let n=0,i=this.meshes.length;n<i;n++)this._optimizeIK(this.meshes[n],e);return this}createGrantSolver(t){return new Wo(t,t.geometry.userData.MMD.grants)}_addMesh(t,e){if(this.meshes.indexOf(t)>=0)throw new Error("THREE.MMDAnimationHelper._addMesh: SkinnedMesh '"+t.name+"' has already been added.");return this.meshes.push(t),this.objects.set(t,{looped:!1}),this._setupMeshAnimation(t,e.animation),e.physics!==!1&&this._setupMeshPhysics(t,e),this}_setupCamera(t,e){if(this.camera===t)throw new Error("THREE.MMDAnimationHelper._setupCamera: Camera '"+t.name+"' has already been set.");return this.camera&&this.clearCamera(this.camera),this.camera=t,t.add(this.cameraTarget),this.objects.set(t,{}),e.animation!==void 0&&this._setupCameraAnimation(t,e.animation),this}_setupAudio(t,e){if(this.audio===t)throw new Error("THREE.MMDAnimationHelper._setupAudio: Audio '"+t.name+"' has already been set.");return this.audio&&this.clearAudio(this.audio),this.audio=t,this.audioManager=new Go(t,e),this.objects.set(this.audioManager,{duration:this.audioManager.duration}),this}_removeMesh(t){let e=!1,n=0;for(let i=0,r=this.meshes.length;i<r;i++){if(this.meshes[i]===t){this.objects.delete(t),e=!0;continue}this.meshes[n++]=this.meshes[i]}if(!e)throw new Error("THREE.MMDAnimationHelper._removeMesh: SkinnedMesh '"+t.name+"' has not been added yet.");return this.meshes.length=n,this}_clearCamera(t){if(t!==this.camera)throw new Error("THREE.MMDAnimationHelper._clearCamera: Camera '"+t.name+"' has not been set yet.");return this.camera.remove(this.cameraTarget),this.objects.delete(this.camera),this.camera=null,this}_clearAudio(t){if(t!==this.audio)throw new Error("THREE.MMDAnimationHelper._clearAudio: Audio '"+t.name+"' has not been set yet.");return this.objects.delete(this.audioManager),this.audio=null,this.audioManager=null,this}_setupMeshAnimation(t,e){let n=this.objects.get(t);if(e!==void 0){let i=Array.isArray(e)?e:[e];n.mixer=new is(t);for(let r=0,a=i.length;r<a;r++)n.mixer.clipAction(i[r]).play();n.mixer.addEventListener("loop",function(r){let a=r.action._clip.tracks;a.length>0&&a[0].name.slice(0,6)!==".bones"||(n.looped=!0)})}return n.ikSolver=this._createCCDIKSolver(t),n.grantSolver=this.createGrantSolver(t),this}_setupCameraAnimation(t,e){let n=Array.isArray(e)?e:[e],i=this.objects.get(t);i.mixer=new is(t);for(let r=0,a=n.length;r<a;r++)i.mixer.clipAction(n[r]).play()}_setupMeshPhysics(t,e){let n=this.objects.get(t);if(e.world===void 0&&this.sharedPhysics){let i=this._getMasterPhysics();i!==null&&(world=i.world)}n.physics=this._createMMDPhysics(t,e),n.mixer&&e.animationWarmup!==!1&&(this._animateMesh(t,0),n.physics.reset()),n.physics.warmup(e.warmup!==void 0?e.warmup:60),this._optimizeIK(t,!0)}_animateMesh(t,e){let n=this.objects.get(t),i=n.mixer,r=n.ikSolver,a=n.grantSolver,o=n.physics,l=n.looped;i&&this.enabled.animation&&(this._restoreBones(t),i.update(e),this._saveBones(t),this.configuration.pmxAnimation&&t.geometry.userData.MMD&&t.geometry.userData.MMD.format==="pmx"?(n.sortedBonesData||(n.sortedBonesData=this._sortBoneDataArray(t.geometry.userData.MMD.bones.slice())),this._animatePMXMesh(t,n.sortedBonesData,r&&this.enabled.ik?r:null,a&&this.enabled.grant?a:null)):(r&&this.enabled.ik&&(t.updateMatrixWorld(!0),r.update()),a&&this.enabled.grant&&a.update())),l===!0&&this.enabled.physics&&(o&&this.configuration.resetPhysicsOnLoop&&o.reset(),n.looped=!1),o&&this.enabled.physics&&!this.sharedPhysics&&(this.onBeforePhysics(t),o.update(e))}_sortBoneDataArray(t){return t.sort(function(e,n){return e.transformationClass!==n.transformationClass?e.transformationClass-n.transformationClass:e.index-n.index})}_animatePMXMesh(t,e,n,i){Ho=0,Un.clear();for(let r=0,a=e.length;r<a;r++)e3(t,e[r].index,n,i);return t.updateMatrixWorld(!0),this}_animateCamera(t,e){let n=this.objects.get(t).mixer;n&&this.enabled.cameraAnimation&&(n.update(e),t.updateProjectionMatrix(),t.up.set(0,1,0),t.up.applyQuaternion(t.quaternion),t.lookAt(this.cameraTarget.position))}_optimizeIK(t,e){let n=t.geometry.userData.MMD.iks,i=t.geometry.userData.MMD.bones;for(let r=0,a=n.length;r<a;r++){let l=n[r].links;for(let c=0,h=l.length;c<h;c++){let d=l[c];e===!0?d.enabled=!(i[d.index].rigidBodyType>0):d.enabled=!0}}}_createCCDIKSolver(t){if(us===void 0)throw new Error("THREE.MMDAnimationHelper: Import CCDIKSolver.");return new us(t,t.geometry.userData.MMD.iks)}_createMMDPhysics(t,e){if(fs===void 0)throw new Error("THREE.MMDPhysics: Import MMDPhysics.");return new fs(t,t.geometry.userData.MMD.rigidBodies,t.geometry.userData.MMD.constraints,e)}_syncDuration(){let t=0,e=this.objects,n=this.meshes,i=this.camera,r=this.audioManager;for(let a=0,o=n.length;a<o;a++){let l=this.objects.get(n[a]).mixer;if(l!==void 0)for(let c=0;c<l._actions.length;c++){let h=l._actions[c]._clip;e.has(h)||e.set(h,{duration:h.duration}),t=Math.max(t,e.get(h).duration)}}if(i!==null){let a=this.objects.get(i).mixer;if(a!==void 0)for(let o=0,l=a._actions.length;o<l;o++){let c=a._actions[o]._clip;e.has(c)||e.set(c,{duration:c.duration}),t=Math.max(t,e.get(c).duration)}}r!==null&&(t=Math.max(t,e.get(r).duration)),t+=this.configuration.afterglow;for(let a=0,o=this.meshes.length;a<o;a++){let l=this.objects.get(this.meshes[a]).mixer;if(l!==void 0)for(let c=0,h=l._actions.length;c<h;c++)l._actions[c]._clip.duration=t}if(i!==null){let a=this.objects.get(i).mixer;if(a!==void 0)for(let o=0,l=a._actions.length;o<l;o++)a._actions[o]._clip.duration=t}r!==null&&(r.duration=t)}_updatePropertyMixersBuffer(t){let e=this.objects.get(t).mixer,n=e._bindings,i=e._accuIndex;for(let r=0,a=n.length;r<a;r++){let o=n[r],l=o.buffer,c=o.valueSize,h=(i+1)*c;o.binding.getValue(l,h)}}_saveBones(t){let e=this.objects.get(t),n=t.skeleton.bones,i=e.backupBones;i===void 0&&(i=new Float32Array(n.length*7),e.backupBones=i);for(let r=0,a=n.length;r<a;r++){let o=n[r];o.position.toArray(i,r*7),o.quaternion.toArray(i,r*7+3)}}_restoreBones(t){let n=this.objects.get(t).backupBones;if(n===void 0)return;let i=t.skeleton.bones;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.position.fromArray(n,r*7),o.quaternion.fromArray(n,r*7+3)}}_getMasterPhysics(){if(this.masterPhysics!==null)return this.masterPhysics;for(let t=0,e=this.meshes.length;t<e;t++){let n=this.meshes[t].physics;if(n!=null)return this.masterPhysics=n,this.masterPhysics}return null}_updateSharedPhysics(t){if(this.meshes.length===0||!this.enabled.physics||!this.sharedPhysics)return;let e=this._getMasterPhysics();if(e!==null){for(let n=0,i=this.meshes.length;n<i;n++){let r=this.meshes[n].physics;r?.updateRigidBodies()}e.stepSimulation(t);for(let n=0,i=this.meshes.length;n<i;n++){let r=this.meshes[n].physics;r?.updateBones()}}}},ko=[],Ho=0;function X2(){return Ho>=ko.length&&ko.push(new $t),ko[Ho++]}var Un=new Map;function e3(s,t,e,n){let i=s.skeleton.bones,a=s.geometry.userData.MMD.bones[t],o=i[t];if(Un.has(t))return;let l=X2();if(Un.set(t,l.copy(o.quaternion)),n&&a.grant&&!a.grant.isLocal&&a.grant.affectRotation){let c=a.grant.parentIndex,h=a.grant.ratio;Un.has(c)||e3(s,c,e,n),n.addGrantRotation(o,Un.get(c),h)}if(e&&a.ik){s.updateMatrixWorld(!0),e.updateOne(a.ik);let c=a.ik.links;for(let h=0,d=c.length;h<d;h++){let f=c[h];if(f.enabled===!1)continue;let m=f.index;Un.has(m)&&Un.set(m,Un.get(m).copy(i[m].quaternion))}}l.copy(o.quaternion)}var Go=class{constructor(t,e={}){this.audio=t,this.elapsedTime=0,this.currentTime=0,this.delayTime=e.delayTime!==void 0?e.delayTime:0,this.audioDuration=this.audio.buffer.duration,this.duration=this.audioDuration+this.delayTime}control(t){return this.elapsed+=t,this.currentTime+=t,this._shouldStopAudio()&&this.audio.stop(),this._shouldStartAudio()&&this.audio.play(),this}_shouldStartAudio(){if(this.audio.isPlaying)return!1;for(;this.currentTime>=this.duration;)this.currentTime-=this.duration;return!(this.currentTime<this.delayTime||this.currentTime-this.delayTime>this.audioDuration)}_shouldStopAudio(){return this.audio.isPlaying&&this.currentTime>=this.duration}},Vo=new $t,Wo=class{constructor(t,e=[]){this.mesh=t,this.grants=e}update(){let t=this.grants;for(let e=0,n=t.length;e<n;e++)this.updateOne(t[e]);return this}updateOne(t){let e=this.mesh.skeleton.bones,n=e[t.index],i=e[t.parentIndex];return t.isLocal?(t.affectPosition,t.affectRotation):(t.affectPosition,t.affectRotation&&this.addGrantRotation(n,i.quaternion,t.ratio)),this}addGrantRotation(t,e,n){return Vo.set(0,0,0,1),Vo.slerp(e,n),t.quaternion.multiply(Vo),this}};var Xo=new WeakMap;function n3(s){s?.traverse(t=>{t.geometry?.dispose();for(let e of Array.isArray(t.material)?t.material:[t.material])if(e){for(let n of Object.values(e))n?.isTexture&&n.dispose();e.dispose()}})}function Ui(s){let t=document.querySelector("#mmd-status");t&&(t.textContent=s)}function q2(s,t){let e=!1,n,i,r,a=0,o=document.createElement("span");o.className="mmd-note",o.textContent="\u6A21\u578B\u52A0\u8F7D\u4E2D\u2026",s.append(o),s.classList.add("mmd-active");let l;try{l=new $i({alpha:!0,antialias:!0})}catch(M){return o.textContent="\u65E0\u6CD5\u521D\u59CB\u5316 3D",Ui(M.message),()=>{o.remove(),s.classList.remove("mmd-active")}}l.setPixelRatio(Math.min(devicePixelRatio,1.5)),l.setClearColor(0,0),l.outputColorSpace=Qt,s.append(l.domElement);let c=new hr,h=new Te(30,1,.01,1e4),d=new Rr;c.add(new Tr(16777215,10201792,2));let f=new wr(16777215,2);f.position.set(1,2,3),c.add(f);let m=()=>{let M=s.clientWidth||220,x=s.clientHeight||220;l.setSize(M,x,!1),h.aspect=M/x,h.updateProjectionMatrix()},g=new ResizeObserver(m);g.observe(s),m();let _=new es;_.onError=M=>{e||Ui("\u90E8\u5206\u8D34\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u4FDD\u7559\u6A21\u578B\u539F\u6587\u4EF6\u5939\u7ED3\u6784\u3002")};let p=new Nr(_);p.load(t.mmdModelUrl,M=>{if(e){n3(M);return}n=M,c.add(n),n.updateMatrixWorld(!0);let x=new Je().setFromObject(n),A=x.getCenter(new P),S=x.getSize(new P);n.position.sub(A);let v=Math.max(S.y,S.x/h.aspect)/2/Math.tan(kc.degToRad(15))*1.2;h.position.set(0,0,Math.max(v,1)),h.far=Math.max(1e3,v*10),h.updateProjectionMatrix(),h.lookAt(0,0,0),o.remove(),Ui("\u672C\u5730\u6A21\u578B\u5DF2\u52A0\u8F7D"+(t.mmdMotionUrl?"\uFF0C\u6B63\u5728\u52A0\u8F7D\u52A8\u4F5C\u2026":"\uFF1B\u53EF\u9009\u62E9 VMD \u52A8\u4F5C\u3002")),t.mmdMotionUrl&&p.loadAnimation(t.mmdMotionUrl,n,b=>{e||(i=new kr,i.add(n,{animation:b,physics:!1}),Ui("\u6A21\u578B\u4E0E VMD \u5DF2\u52A0\u8F7D\uFF08\u672A\u542F\u7528\u521A\u4F53\u7269\u7406\uFF09\u3002"))},void 0,b=>{e||Ui("VMD \u52A0\u8F7D\u5931\u8D25\uFF1A"+(b.message||b))})},void 0,M=>{e||(o.textContent="\u6A21\u578B\u52A0\u8F7D\u5931\u8D25",Ui("\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF1A"+(M.message||M)))});function u(M){if(e||(r=requestAnimationFrame(u),M-a<33))return;a=M;let x=Math.min(d.getDelta(),.1);if(i)i.update(x);else if(n){n.rotation.y=Math.sin(M/4500)*.06;let A=n.morphTargetDictionary||{},S=n.morphTargetInfluences||[],v=s.dataset.mood;for(let b of["\u7B11\u3044","\u306B\u3053\u308A","\u307E\u3070\u305F\u304D","\u56F0\u308B"])A[b]!==void 0&&(S[A[b]]=b==="\u307E\u3070\u305F\u304D"?M%5e3>4780?1:0:b==="\u56F0\u308B"?v==="sad"?1:0:v==="happy"?.65:0)}l.render(c,h)}return r=requestAnimationFrame(u),()=>{e=!0,cancelAnimationFrame(r),g.disconnect(),i&&n&&i.remove(n),n3(n),l.dispose(),l.forceContextLoss(),l.domElement.remove(),o.remove(),s.classList.remove("mmd-active")}}window.MMDPet={sync(s,t){let e=t.builtinSkin==="mmd"&&!t.skin&&t.mmdModelUrl?t.mmdModelUrl+"|"+(t.mmdMotionUrl||""):"",n=Xo.get(s);n?.key!==e&&(n?.dispose(),Xo.delete(s),e&&Xo.set(s,{key:e,dispose:q2(s,t)}))}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
