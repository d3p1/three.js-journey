var Xy=Object.defineProperty;var df=r=>{throw TypeError(r)};var qy=(r,e,t)=>e in r?Xy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var O=(r,e,t)=>qy(r,typeof e!="symbol"?e+"":e,t),yc=(r,e,t)=>e.has(r)||df("Cannot "+t);var Re=(r,e,t)=>(yc(r,e,"read from private field"),t?t.call(r):e.get(r)),Ee=(r,e,t)=>e.has(r)?df("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),It=(r,e,t,n)=>(yc(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),b=(r,e,t)=>(yc(r,e,"access private method"),t);var Mc=(r,e,t,n)=>({set _(i){It(r,e,i,t)},get _(){return Re(r,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var eo,Ci,si,Xt,km,Gm,Mh,Sh,wh,yl,Hm;class Yy{constructor(e,t,n,i){Ee(this,Xt);Ee(this,eo);Ee(this,Ci,[]);Ee(this,si,0);It(this,Ci,e),It(this,eo,document.querySelector(t)),b(this,Xt,km).call(this,n,i),b(this,Xt,Gm).call(this)}run(){Re(this,Ci).length&&b(this,Xt,yl).call(this)}}eo=new WeakMap,Ci=new WeakMap,si=new WeakMap,Xt=new WeakSet,km=function(e,t){const n=document.querySelector(e),i=document.querySelector(t);n.addEventListener("click",b(this,Xt,Sh).bind(this)),i.addEventListener("click",b(this,Xt,Mh).bind(this))},Gm=function(){document.addEventListener("keydown",e=>{e.key==="ArrowRight"&&b(this,Xt,Mh).call(this),e.key==="ArrowLeft"&&b(this,Xt,Sh).call(this)})},Mh=function(){b(this,Xt,wh).call(this),Re(this,si)>=Re(this,Ci).length-1?It(this,si,0):Mc(this,si)._++,b(this,Xt,yl).call(this)},Sh=function(){b(this,Xt,wh).call(this),Re(this,si)<=0?It(this,si,Re(this,Ci).length-1):Mc(this,si)._--,b(this,Xt,yl).call(this)},wh=function(){Re(this,Ci)[Re(this,si)].close()},yl=function(){Re(this,Ci)[Re(this,si)].open(),b(this,Xt,Hm).call(this)},Hm=function(){var n;const e=Re(this,Ci)[Re(this,si)],t=document.createElement("a");t.href=e.link,t.target="_blank",t.rel="noopener noreferrer",t.textContent=`[Lesson ${e.number}] ${e.title}`,(n=Re(this,eo).querySelector("a"))==null||n.remove(),Re(this,eo).append(t)};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="169",jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$y=0,ff=1,Ky=2,ad=1,us=2,Ji=3,os=0,pn=1,Mn=2,Cs=0,Xr=1,as=2,pf=3,mf=4,Zy=5,nr=100,Jy=101,Qy=102,eM=103,tM=104,nM=200,iM=201,sM=202,rM=203,bh=204,Th=205,oM=206,aM=207,lM=208,cM=209,hM=210,uM=211,dM=212,fM=213,pM=214,Ah=0,Eh=1,Ch=2,_o=3,Ph=4,Rh=5,Lh=6,Dh=7,Vm=0,mM=1,gM=2,rs=0,Wm=1,jm=2,Xm=3,vo=4,_M=5,vM=6,xM=7,gf="attached",yM="detached",qm=300,xo=301,yo=302,Mo=303,Ih=304,rc=306,_t=1e3,Li=1001,kl=1002,Qt=1003,Ym=1004,ta=1005,sn=1006,Ml=1007,Si=1008,ls=1009,$m=1010,Km=1011,ma=1012,ld=1013,ur=1014,Dn=1015,Di=1016,cd=1017,hd=1018,So=1020,Zm=35902,Jm=1021,Qm=1022,ri=1023,eg=1024,tg=1025,qr=1026,wo=1027,ud=1028,dd=1029,ng=1030,fd=1031,pd=1033,Sl=33776,wl=33777,bl=33778,Tl=33779,Nh=35840,Uh=35841,Fh=35842,Oh=35843,Bh=36196,zh=37492,kh=37496,Gh=37808,Hh=37809,Vh=37810,Wh=37811,jh=37812,Xh=37813,qh=37814,Yh=37815,$h=37816,Kh=37817,Zh=37818,Jh=37819,Qh=37820,eu=37821,Al=36492,tu=36494,nu=36495,ig=36283,iu=36284,su=36285,ru=36286,MM=2200,SM=2201,wM=2202,ga=2300,_a=2301,Sc=2302,zr=2400,kr=2401,Gl=2402,md=2500,bM=2501,TM=0,sg=1,ou=2,AM=3200,rg=3201,oc=0,EM=1,ws="",tt="srgb",on="srgb-linear",gd="display-p3",ac="display-p3-linear",Hl="linear",Pt="srgb",Vl="rec709",Wl="p3",Sr=7680,_f=519,CM=512,PM=513,RM=514,og=515,LM=516,DM=517,IM=518,NM=519,au=35044,vf="300 es",ss=2e3,jl=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xf=1234567;const aa=Math.PI/180,bo=180/Math.PI;function li(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function _d(r,e){return(r%e+e)%e}function UM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function FM(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function OM(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function BM(r,e=1){return e-Math.abs(_d(r,e*2)-e)}function zM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function GM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function HM(r,e){return r+Math.random()*(e-r)}function VM(r){return r*(.5-Math.random())}function WM(r){r!==void 0&&(xf=r);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jM(r){return r*aa}function XM(r){return r*bo}function qM(r){return(r&r-1)===0&&r!==0}function YM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $M(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function KM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xl={DEG2RAD:aa,RAD2DEG:bo,generateUUID:li,clamp:Zt,euclideanModulo:_d,mapLinear:UM,inverseLerp:FM,lerp:la,damp:OM,pingpong:BM,smoothstep:zM,smootherstep:kM,randInt:GM,randFloat:HM,randFloatSpread:VM,seededRandom:WM,degToRad:jM,radToDeg:XM,isPowerOfTwo:qM,ceilPowerOfTwo:YM,floorPowerOfTwo:$M,setQuaternionFromProperEuler:KM,normalize:gt,denormalize:yi};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],v=i[4],M=i[7],P=i[2],A=i[5],T=i[8];return s[0]=o*_+a*x+l*P,s[3]=o*p+a*v+l*A,s[6]=o*m+a*M+l*T,s[1]=c*_+h*x+u*P,s[4]=c*p+h*v+u*A,s[7]=c*m+h*M+u*T,s[2]=d*_+f*x+g*P,s[5]=d*p+f*v+g*A,s[8]=d*m+f*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ke;function ag(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ZM(){const r=va("canvas");return r.style.display="block",r}const yf={};function El(r){r in yf||(yf[r]=!0,console.warn(r))}function JM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function QM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mf=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wo={[on]:{transfer:Hl,primaries:Vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[tt]:{transfer:Pt,primaries:Vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ac]:{transfer:Hl,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Sf),fromReference:r=>r.applyMatrix3(Mf)},[gd]:{transfer:Pt,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sf),fromReference:r=>r.applyMatrix3(Mf).convertLinearToSRGB()}},tS=new Set([on,ac]),ot={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Wo[e].toReference,i=Wo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wo[r].primaries},getTransfer:function(r){return r===ws?Hl:Wo[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Wo[e].luminanceCoefficients)}};function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class nS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=va("canvas")),wr.width=e.width,wr.height=e.height;const n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tc(i[o].image)):s.push(Tc(i[o]))}else s=Tc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class rn extends Os{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Li,i=Li,s=sn,o=Si,a=ri,l=ls,c=rn.DEFAULT_ANISOTROPY,h=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=li(),this.name="",this.source=new lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _t:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _t:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=qm;rn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(f+1)/2,P=(m+1)/2,A=(h+d)/4,T=(u+_)/4,E=(g+p)/4;return v>M&&v>P?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=T/n):M>P?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=E/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=T/s,i=E/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends rS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cg extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,m*x);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const M=a*x;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new I,wf=new $n;class ds{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ga.subVectors(this.max,jo),br.subVectors(e.a,jo),Tr.subVectors(e.b,jo),Ar.subVectors(e.c,jo),ps.subVectors(Tr,br),ms.subVectors(Ar,Tr),Gs.subVectors(br,Ar);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Gs.z,Gs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Gs.z,0,-Gs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Gs.y,Gs.x,0];return!Ec(t,br,Tr,Ar,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,br,Tr,Ar,Ga))?!1:(Ha.crossVectors(ps,ms),t=[Ha.x,Ha.y,Ha.z],Ec(t,br,Tr,Ar,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new I,new I,new I,new I,new I,new I,new I,new I],_i=new I,ka=new ds,br=new I,Tr=new I,Ar=new I,ps=new I,ms=new I,Gs=new I,jo=new I,Ga=new I,Ha=new I,Hs=new I;function Ec(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Hs.fromArray(r,s);const a=i.x*Math.abs(Hs.x)+i.y*Math.abs(Hs.y)+i.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const aS=new ds,Xo=new I,Cc=new I;class Gi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):aS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Cc)),this.expandByPoint(Xo.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new I,Pc=new I,Va=new I,gs=new I,Rc=new I,Wa=new I,Lc=new I;class Bo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pc.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Pc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=gs.dot(this.direction),l=-gs.dot(Va),c=gs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pc).addScaledVector(Va,d),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){Rc.subVectors(t,e),Wa.subVectors(n,e),Lc.crossVectors(Rc,Wa);let o=this.direction.dot(Lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(gs,Wa));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(gs));if(c<0||l+c>o)return null;const h=-a*gs.dot(Lc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,p){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lS,e,cS)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),_s.crossVectors(n,Wn),_s.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),_s.crossVectors(n,Wn)),_s.normalize(),ja.crossVectors(Wn,_s),i[0]=_s.x,i[4]=ja.x,i[8]=Wn.x,i[1]=_s.y,i[5]=ja.y,i[9]=Wn.y,i[2]=_s.z,i[6]=ja.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],M=n[11],P=n[15],A=i[0],T=i[4],E=i[8],D=i[12],y=i[1],S=i[5],B=i[9],U=i[13],F=i[2],j=i[6],N=i[10],$=i[14],X=i[3],ae=i[7],re=i[11],de=i[15];return s[0]=o*A+a*y+l*F+c*X,s[4]=o*T+a*S+l*j+c*ae,s[8]=o*E+a*B+l*N+c*re,s[12]=o*D+a*U+l*$+c*de,s[1]=h*A+u*y+d*F+f*X,s[5]=h*T+u*S+d*j+f*ae,s[9]=h*E+u*B+d*N+f*re,s[13]=h*D+u*U+d*$+f*de,s[2]=g*A+_*y+p*F+m*X,s[6]=g*T+_*S+p*j+m*ae,s[10]=g*E+_*B+p*N+m*re,s[14]=g*D+_*U+p*$+m*de,s[3]=x*A+v*y+M*F+P*X,s[7]=x*T+v*S+M*j+P*ae,s[11]=x*E+v*B+M*N+P*re,s[15]=x*D+v*U+M*$+P*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,M=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,A=t*x+n*v+i*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=v*T,e[5]=(h*p*s-g*d*s+g*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=M*T,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*m-t*u*m)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=P*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,p=o*u,m=a*u,x=l*c,v=l*h,M=l*u,P=n.x,A=n.y,T=n.z;return i[0]=(1-(_+m))*P,i[1]=(f+M)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+m))*A,i[6]=(p+x)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(p-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Er.set(i[0],i[1],i[2]).length();const o=Er.set(i[4],i[5],i[6]).length(),a=Er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/s,h=1/o,u=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,t.setFromRotationMatrix(vi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ss){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ss)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===jl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ss){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===ss)g=(o+s)*u,_=-2*u;else if(a===jl)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Er=new I,vi=new Xe,lS=new I(0,0,0),cS=new I(1,1,1),_s=new I,ja=new I,Wn=new I,bf=new Xe,Tf=new $n;class Fi{constructor(e=0,t=0,n=0,i=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hS=0;const Af=new I,Cr=new $n,Yi=new Xe,Xa=new I,qo=new I,uS=new I,dS=new $n,Ef=new I(1,0,0),Cf=new I(0,1,0),Pf=new I(0,0,1),Rf={type:"added"},fS={type:"removed"},Pr={type:"childadded",child:null},Dc={type:"childremoved",child:null};class wt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new Fi,n=new $n,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Cf,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Cf,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(qo,Xa,this.up):Yi.lookAt(Xa,qo,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fS),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new I,$i=new I,Ic=new I,Ki=new I,Rr=new I,Lr=new I,Lf=new I,Nc=new I,Uc=new I,Fc=new I,Oc=new ct,Bc=new ct,zc=new ct;class Mi{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),$i.subVectors(n,t),Ic.subVectors(e,t);const o=xi.dot(xi),a=xi.dot($i),l=xi.dot(Ic),c=$i.dot($i),h=$i.dot(Ic),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Oc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),Oc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Oc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(zc,s.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),$i.subVectors(e,t),xi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Rr.subVectors(i,n),Lr.subVectors(s,n),Nc.subVectors(e,n);const l=Rr.dot(Nc),c=Lr.dot(Nc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,i);const h=Rr.dot(Uc),u=Lr.dot(Uc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Rr,o);Fc.subVectors(e,s);const f=Rr.dot(Fc),g=Lr.dot(Fc);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Lr,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Lf.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Lf,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Rr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},qa={h:0,s:0,l:0};function kc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=_d(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=kc(o,s,e+1/3),this.g=kc(o,s,e),this.b=kc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const n=hg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ot.fromWorkingColorSpace(xn.copy(this),e),Math.round(Zt(xn.r*255,0,255))*65536+Math.round(Zt(xn.g*255,0,255))*256+Math.round(Zt(xn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=tt){ot.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(qa);const n=la(vs.h,qa.h,t),i=la(vs.s,qa.s,t),s=la(vs.l,qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ge;ge.NAMES=hg;let pS=0;class ci extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Xr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Th,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bh&&(n.blendSrc=this.blendSrc),this.blendDst!==Th&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class St extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const is=mS();function mS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function gS(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Zt(r,-65504,65504),is.floatView[0]=r;const e=is.uint32View[0],t=e>>23&511;return is.baseTable[t]+((e&8388607)>>is.shiftTable[t])}function _S(r){const e=r>>10;return is.uint32View[0]=is.mantissaTable[is.offsetTable[e]+(r&1023)]+is.exponentTable[e],is.floatView[0]}const Ya={toHalfFloat:gS,fromHalfFloat:_S},$t=new I,$a=new te;class at{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==au&&(e.usage=this.usage),e}}class ug extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dg extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vS=0;const ti=new Xe,Gc=new wt,Dr=new I,jn=new ds,Yo=new ds,hn=new I;class ut extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?dg:ug)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(jn.min,Yo.min),jn.expandByPoint(hn),hn.addVectors(jn.max,Yo.max),jn.expandByPoint(hn)):(jn.expandByPoint(Yo.min),jn.expandByPoint(Yo.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),hn.add(Dr)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new I,l[E]=new I;const c=new I,h=new I,u=new I,d=new te,f=new te,g=new te,_=new I,p=new I;function m(E,D,y){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[E].add(_),a[D].add(_),a[y].add(_),l[E].add(p),l[D].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let E=0,D=x.length;E<D;++E){const y=x[E],S=y.start,B=y.count;for(let U=S,F=S+B;U<F;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new I,M=new I,P=new I,A=new I;function T(E){P.fromBufferAttribute(i,E),A.copy(P);const D=a[E];v.copy(D),v.sub(P.multiplyScalar(P.dot(D))).normalize(),M.crossVectors(A,D);const S=M.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,S)}for(let E=0,D=x.length;E<D;++E){const y=x[E],S=y.start,B=y.count;for(let U=S,F=S+B;U<F;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new Xe,Vs=new Bo,Ka=new Gi,If=new I,Za=new I,Ja=new I,Qa=new I,Hc=new I,el=new I,Nf=new I,tl=new I;class ce extends wt{constructor(e=new ut,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?el.addScaledVector(Hc,h):el.addScaledVector(Hc.sub(t),h))}t.add(el)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Vs.copy(e.ray).recast(e.near),!(Ka.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Ka,If)===null||Vs.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Df.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Df),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,P=v;M<P;M+=3){const A=a.getX(M),T=a.getX(M+1),E=a.getX(M+2);i=nl(this,m,e,n,c,h,u,A,T,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=nl(this,o,e,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,P=v;M<P;M+=3){const A=M,T=M+1,E=M+2;i=nl(this,m,e,n,c,h,u,A,T,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,M=p+2;i=nl(this,o,e,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function xS(r,e,t,n,i,s,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===os,a),l===null)return null;tl.copy(a),tl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:r}}function nl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Za),r.getVertexPosition(l,Ja),r.getVertexPosition(c,Qa);const h=xS(r,e,t,n,Za,Ja,Qa,Nf);if(h){const u=new I;Mi.getBarycoord(Nf,Za,Ja,Qa,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,a,l,c,u,new te)),s&&(h.uv1=Mi.getInterpolatedAttribute(s,a,l,c,u,new te)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Mi.getNormal(Za,Ja,Qa,d.normal),h.face=d,h.barycoord=u}return h}class en extends ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(_,p,m,x,v,M,P,A,T,E,D){const y=M/T,S=P/E,B=M/2,U=P/2,F=A/2,j=T+1,N=E+1;let $=0,X=0;const ae=new I;for(let re=0;re<N;re++){const de=re*S-U;for(let Ne=0;Ne<j;Ne++){const ke=Ne*y-B;ae[_]=ke*x,ae[p]=de*v,ae[m]=F,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[m]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ne/T),u.push(1-re/E),$+=1}}for(let re=0;re<E;re++)for(let de=0;de<T;de++){const Ne=d+de+j*re,ke=d+de+j*(re+1),q=d+(de+1)+j*(re+1),ne=d+(de+1)+j*re;l.push(Ne,ke,ne),l.push(ke,q,ne),X+=6}a.addGroup(f,X,D),f+=X,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const n=To(r[t]);for(const i in n)e[i]=n[i]}return e}function yS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const pg={clone:To,merge:En};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=yS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mg extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new I,Uf=new te,Ff=new te;class yn extends mg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Uf,Ff),t.subVectors(Ff,Uf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Nr=1;class gg extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Ir,Nr,e,t);i.layers=this.layers,this.add(i);const s=new yn(Ir,Nr,e,t);s.layers=this.layers,this.add(s);const o=new yn(Ir,Nr,e,t);o.layers=this.layers,this.add(o);const a=new yn(Ir,Nr,e,t);a.layers=this.layers,this.add(a);const l=new yn(Ir,Nr,e,t);l.layers=this.layers,this.add(l);const c=new yn(Ir,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ss)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xd extends rn{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xo,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _g extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:To(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Cs});s.uniforms.tEquirect.value=t;const o=new ce(i,s),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=sn),new gg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Vc=new I,wS=new I,bS=new Ke;class Ss{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vc.subVectors(n,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bS.getNormalMatrix(e),i=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Gi,il=new I;class yd{constructor(e=new Ss,t=new Ss,n=new Ss,i=new Ss,s=new Ss,o=new Ss){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ss){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,p-f,M-m).normalize(),n[1].setComponents(l+s,d+c,p+f,M+m).normalize(),n[2].setComponents(l+o,d+h,p+g,M+x).normalize(),n[3].setComponents(l-o,d-h,p-g,M-x).normalize(),n[4].setComponents(l-a,d-u,p-_,M-v).normalize(),t===ss)n[5].setComponents(l+a,d+u,p+_,M+v).normalize();else if(t===jl)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(il.x=i.normal.x>0?e.max.x:e.min.x,il.y=i.normal.y>0?e.max.y:e.min.y,il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function TS(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Bt extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*d-o;for(let v=0;v<c;v++){const M=v*u-s;g.push(M,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,M=x+c*(m+1),P=x+1+c*(m+1),A=x+1+c*m;f.push(v,M,A),f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.widthSegments,e.heightSegments)}}var AS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
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
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zS=`#ifdef USE_IRIDESCENCE
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
#endif`,kS=`#ifdef USE_BUMPMAP
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$S=`#define PI 3.141592653589793
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
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZS=`vec3 transformedNormal = objectNormal;
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
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`
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
}`,sw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fw=`#ifdef USE_GRADIENTMAP
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
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_w=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,vw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ww=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,bw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Tw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uw=`#if defined( USE_POINTS_UV )
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
#endif`,Fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ww=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ib=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Nb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,kb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gb=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Hb=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Wb=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jb=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Xb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Yb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$b=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Kb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Jb=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,e1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,n1=`uniform vec3 color;
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
}`,i1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,s1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$e={alphahash_fragment:AS,alphahash_pars_fragment:ES,alphamap_fragment:CS,alphamap_pars_fragment:PS,alphatest_fragment:RS,alphatest_pars_fragment:LS,aomap_fragment:DS,aomap_pars_fragment:IS,batching_pars_vertex:NS,batching_vertex:US,begin_vertex:FS,beginnormal_vertex:OS,bsdfs:BS,iridescence_fragment:zS,bumpmap_pars_fragment:kS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:WS,color_fragment:jS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:YS,common:$S,cube_uv_reflection_fragment:KS,defaultnormal_vertex:ZS,displacementmap_pars_vertex:JS,displacementmap_vertex:QS,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:sw,envmap_common_pars_fragment:rw,envmap_pars_fragment:ow,envmap_pars_vertex:aw,envmap_physical_pars_fragment:vw,envmap_vertex:lw,fog_vertex:cw,fog_pars_vertex:hw,fog_fragment:uw,fog_pars_fragment:dw,gradientmap_pars_fragment:fw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:_w,lights_toon_fragment:xw,lights_toon_pars_fragment:yw,lights_phong_fragment:Mw,lights_phong_pars_fragment:Sw,lights_physical_fragment:ww,lights_physical_pars_fragment:bw,lights_fragment_begin:Tw,lights_fragment_maps:Aw,lights_fragment_end:Ew,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:Pw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:Lw,map_fragment:Dw,map_pars_fragment:Iw,map_particle_fragment:Nw,map_particle_pars_fragment:Uw,metalnessmap_fragment:Fw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:Bw,morphcolor_vertex:zw,morphnormal_vertex:kw,morphtarget_pars_vertex:Gw,morphtarget_vertex:Hw,normal_fragment_begin:Vw,normal_fragment_maps:Ww,normal_pars_fragment:jw,normal_pars_vertex:Xw,normal_vertex:qw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:Kw,clearcoat_pars_fragment:Zw,iridescence_pars_fragment:Jw,opaque_fragment:Qw,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:hb,skinbase_vertex:ub,skinning_pars_vertex:db,skinning_vertex:fb,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:xb,transmission_pars_fragment:yb,uv_pars_fragment:Mb,uv_pars_vertex:Sb,uv_vertex:wb,worldpos_vertex:bb,background_vert:Tb,background_frag:Ab,backgroundCube_vert:Eb,backgroundCube_frag:Cb,cube_vert:Pb,cube_frag:Rb,depth_vert:Lb,depth_frag:Db,distanceRGBA_vert:Ib,distanceRGBA_frag:Nb,equirect_vert:Ub,equirect_frag:Fb,linedashed_vert:Ob,linedashed_frag:Bb,meshbasic_vert:zb,meshbasic_frag:kb,meshlambert_vert:Gb,meshlambert_frag:Hb,meshmatcap_vert:Vb,meshmatcap_frag:Wb,meshnormal_vert:jb,meshnormal_frag:Xb,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:$b,meshphysical_frag:Kb,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:Qb,points_frag:e1,shadow_vert:t1,shadow_frag:n1,sprite_vert:i1,sprite_frag:s1},pe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Pi={basic:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:En([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:En([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:En([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:En([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:En([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:En([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:En([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:En([pe.lights,pe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Pi.physical={uniforms:En([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const sl={r:0,b:0,g:0},js=new Fi,r1=new Xe;function o1(r,e,t,n,i,s,o){const a=new ge(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const M=g(x);M===null?m(a,l):M&&M.isColor&&(m(M,1),v=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===rc)?(h===void 0&&(h=new ce(new en(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:To(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),js.copy(v.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(js)),h.material.toneMapped=ot.getTransfer(M.colorSpace)!==Pt,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ce(new Bt(2,2),new Ot({name:"BackgroundMaterial",uniforms:To(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==Pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(sl,fg(r)),n.buffers.color.setClear(sl.r,sl.g,sl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function a1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,S,B,U,F){let j=!1;const N=u(U,B,S);s!==N&&(s=N,c(s.object)),j=f(y,U,B,F),j&&g(y,U,B,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(y,S,B,U),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,S,B){const U=B.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let j=F[S.id];j===void 0&&(j={},F[S.id]=j);let N=j[U];return N===void 0&&(N=d(l()),j[U]=N),N}function d(y){const S=[],B=[],U=[];for(let F=0;F<t;F++)S[F]=0,B[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,S,B,U){const F=s.attributes,j=S.attributes;let N=0;const $=B.getAttributes();for(const X in $)if($[X].location>=0){const re=F[X];let de=j[X];if(de===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(y,S,B,U){const F={},j=S.attributes;let N=0;const $=B.getAttributes();for(const X in $)if($[X].location>=0){let re=j[X];re===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),F[X]=de,N++}s.attributes=F,s.attributesNum=N,s.index=U}function _(){const y=s.newAttributes;for(let S=0,B=y.length;S<B;S++)y[S]=0}function p(y){m(y,0)}function m(y,S){const B=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;B[y]=1,U[y]===0&&(r.enableVertexAttribArray(y),U[y]=1),F[y]!==S&&(r.vertexAttribDivisor(y,S),F[y]=S)}function x(){const y=s.newAttributes,S=s.enabledAttributes;for(let B=0,U=S.length;B<U;B++)S[B]!==y[B]&&(r.disableVertexAttribArray(B),S[B]=0)}function v(y,S,B,U,F,j,N){N===!0?r.vertexAttribIPointer(y,S,B,F,j):r.vertexAttribPointer(y,S,B,U,F,j)}function M(y,S,B,U){_();const F=U.attributes,j=B.getAttributes(),N=S.defaultAttributeValues;for(const $ in j){const X=j[$];if(X.location>=0){let ae=F[$];if(ae===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const re=ae.normalized,de=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;const ke=Ne.buffer,q=Ne.type,ne=Ne.bytesPerElement,be=q===r.INT||q===r.UNSIGNED_INT||ae.gpuType===ld;if(ae.isInterleavedBufferAttribute){const me=ae.data,Fe=me.stride,Ue=ae.offset;if(me.isInstancedInterleavedBuffer){for(let We=0;We<X.locationSize;We++)m(X.location+We,me.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let We=0;We<X.locationSize;We++)p(X.location+We);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let We=0;We<X.locationSize;We++)v(X.location+We,de/X.locationSize,q,re,Fe*ne,(Ue+de/X.locationSize*We)*ne,be)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)m(X.location+me,ae.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<X.locationSize;me++)p(X.location+me);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let me=0;me<X.locationSize;me++)v(X.location+me,de/X.locationSize,q,re,de*ne,de/X.locationSize*me*ne,be)}}else if(N!==void 0){const re=N[$];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(X.location,re);break;case 3:r.vertexAttrib3fv(X.location,re);break;case 4:r.vertexAttrib4fv(X.location,re);break;default:r.vertexAttrib1fv(X.location,re)}}}}x()}function P(){E();for(const y in n){const S=n[y];for(const B in S){const U=S[B];for(const F in U)h(U[F].object),delete U[F];delete S[B]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const B in S){const U=S[B];for(const F in U)h(U[F].object),delete U[F];delete S[B]}delete n[y.id]}function T(y){for(const S in n){const B=n[S];if(B[y.id]===void 0)continue;const U=B[y.id];for(const F in U)h(U[F].object),delete U[F];delete B[y.id]}}function E(){D(),o=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function l1(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ri&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ls&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!E)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function h1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ss,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,v=x*4;let M=m.clippingState||null;l.value=M,M=h(g,d,v,f);for(let P=0;P!==v;++P)M[P]=t[P];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function u1(r){let e=new WeakMap;function t(o,a){return a===Mo?o.mapping=xo:a===Ih&&(o.mapping=yo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mo||a===Ih)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _g(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class lc extends mg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Of=[.125,.215,.35,.446,.526,.582],ir=20,Wc=new lc,Bf=new ge;let jc=null,Xc=0,qc=0,Yc=!1;const Ks=(1+Math.sqrt(5))/2,Ur=1/Ks,zf=[new I(-Ks,Ur,0),new I(Ks,Ur,0),new I(-Ur,0,Ks),new I(Ur,0,Ks),new I(0,Ks,-Ur),new I(0,Ks,Ur),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Xc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Di,format:ri,colorSpace:on,depthBuffer:!1},i=Gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(s)),this._blurMaterial=f1(s,e,t)}return i}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,Wc)}_sceneToCubeUV(e,t,n,i){const a=new yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bf),h.toneMapping=rs,h.autoClear=!1;const f=new St({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new ce(new en,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Bf),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;rl(i,x*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xo||e.mapping===yo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zf[(i-s-1)%zf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ce(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ir-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):ir;p>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ir}`);const m=[];let x=0;for(let T=0;T<ir;++T){const E=T/_,D=Math.exp(-E*E/2);m.push(D),T===0?x+=D:T<p&&(x+=2*D)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],P=3*M*(i>v-Gr?i-v+Gr:0),A=4*(this._cubeSize-M);rl(t,P,A,3*M,2*M),l.setRenderTarget(t),l.render(u,Wc)}}function d1(r){const e=[],t=[],n=[];let i=r;const s=r-Gr+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Gr?l=Of[o-r+Gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*f),v=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,E=A>2?0:-1,D=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];x.set(D,_*g*A),v.set(d,p*g*A);const y=[A,A,A,A,A,A];M.set(y,m*g*A)}const P=new ut;P.setAttribute("position",new at(x,_)),P.setAttribute("uv",new at(v,p)),P.setAttribute("faceIndex",new at(M,m)),e.push(P),i>Gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gf(r,e,t){const n=new dr(r,e,t);return n.texture.mapping=rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function f1(r,e,t){const n=new Float32Array(ir),i=new I(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Hf(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Vf(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function p1(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mo||l===Ih,h=l===xo||l===yo;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kf(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new kf(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function m1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&El("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function g1(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,M=x.length;v<M;v+=3){const P=x[v+0],A=x[v+1],T=x[v+2];d.push(P,A,A,T,T,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const P=v+0,A=v+1,T=v+2;d.push(P,A,A,T,T,P)}}else return;const p=new(ag(d)?dg:ug)(d,1);p.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function _1(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];for(let x=0;x<_.length;x++)t.update(m,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function x1(r,e,t){const n=new WeakMap,i=new ct;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let D=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*P*4*u),T=new cg(A,M,P,u);T.type=Dn,T.needsUpdate=!0;const E=v*4;for(let y=0;y<u;y++){const S=p[y],B=m[y],U=x[y],F=M*P*4*y;for(let j=0;j<S.count;j++){const N=j*E;f===!0&&(i.fromBufferAttribute(S,j),A[F+N+0]=i.x,A[F+N+1]=i.y,A[F+N+2]=i.z,A[F+N+3]=0),g===!0&&(i.fromBufferAttribute(B,j),A[F+N+4]=i.x,A[F+N+5]=i.y,A[F+N+6]=i.z,A[F+N+7]=0),_===!0&&(i.fromBufferAttribute(U,j),A[F+N+8]=i.x,A[F+N+9]=i.y,A[F+N+10]=i.z,A[F+N+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new te(M,P)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function y1(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class xg extends rn{constructor(e,t,n,i,s,o,a,l,c,h=qr){if(h!==qr&&h!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qr&&(n=ur),n===void 0&&h===wo&&(n=So),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yg=new rn,Wf=new xg(1,1),Mg=new cg,Sg=new oS,wg=new xd,jf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function zo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=jf[i];if(s===void 0&&(s=new Float32Array(i),jf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function M1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function w1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function b1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function T1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;$f.set(n),r.uniformMatrix2fv(this.addr,!1,$f),ln(t,n)}}function A1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Yf.set(n),r.uniformMatrix3fv(this.addr,!1,Yf),ln(t,n)}}function E1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;qf.set(n),r.uniformMatrix4fv(this.addr,!1,qf),ln(t,n)}}function C1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function P1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function R1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function D1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function N1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function U1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function F1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wf.compareFunction=og,s=Wf):s=yg,t.setTexture2D(e||s,i)}function O1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sg,i)}function B1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wg,i)}function z1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mg,i)}function k1(r){switch(r){case 5126:return M1;case 35664:return S1;case 35665:return w1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return E1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return R1;case 35669:case 35673:return L1;case 5125:return D1;case 36294:return I1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}function G1(r,e){r.uniform1fv(this.addr,e)}function H1(r,e){const t=zo(e,this.size,2);r.uniform2fv(this.addr,t)}function V1(r,e){const t=zo(e,this.size,3);r.uniform3fv(this.addr,t)}function W1(r,e){const t=zo(e,this.size,4);r.uniform4fv(this.addr,t)}function j1(r,e){const t=zo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function X1(r,e){const t=zo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function q1(r,e){const t=zo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Y1(r,e){r.uniform1iv(this.addr,e)}function $1(r,e){r.uniform2iv(this.addr,e)}function K1(r,e){r.uniform3iv(this.addr,e)}function Z1(r,e){r.uniform4iv(this.addr,e)}function J1(r,e){r.uniform1uiv(this.addr,e)}function Q1(r,e){r.uniform2uiv(this.addr,e)}function eT(r,e){r.uniform3uiv(this.addr,e)}function tT(r,e){r.uniform4uiv(this.addr,e)}function nT(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yg,s[o])}function iT(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sg,s[o])}function sT(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wg,s[o])}function rT(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Mg,s[o])}function oT(r){switch(r){case 5126:return G1;case 35664:return H1;case 35665:return V1;case 35666:return W1;case 35674:return j1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return rT}}class aT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k1(t.type)}}class lT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oT(t.type)}}class cT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Kf(r,e){r.seq.push(e),r.map[e.id]=e}function hT(r,e,t){const n=r.name,i=n.length;for($c.lastIndex=0;;){const s=$c.exec(n),o=$c.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kf(t,c===void 0?new aT(a,r,e):new lT(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new cT(a),Kf(t,u)),t=u}}}class Cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uT=37297;let dT=0;function fT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pT(r){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(r);let n;switch(e===t?n="":e===Wl&&t===Vl?n="LinearDisplayP3ToLinearSRGB":e===Vl&&t===Wl&&(n="LinearSRGBToLinearDisplayP3"),r){case on:case ac:return[n,"LinearTransferOETF"];case tt:case gd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Jf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+fT(r.getShaderSource(e),o)}else return i}function mT(r,e){const t=pT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gT(r,e){let t;switch(e){case Wm:t="Linear";break;case jm:t="Reinhard";break;case Xm:t="Cineon";break;case vo:t="ACESFilmic";break;case vM:t="AgX";break;case xM:t="Neutral";break;case _M:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ol=new I;function _T(){ot.getLuminanceCoefficients(ol);const r=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function xT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function na(r){return r!==""}function Qf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(r){return r.replace(MT,wT)}const ST=new Map;function wT(r,e){let t=$e[e];if(t===void 0){const n=ST.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(r){return r.replace(bT,TT)}function TT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function np(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===us?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function ET(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case yo:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vm:e="ENVMAP_BLENDING_MULTIPLY";break;case mM:e="ENVMAP_BLENDING_MIX";break;case gM:e="ENVMAP_BLENDING_ADD";break}return e}function RT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AT(t),c=ET(t),h=CT(t),u=PT(t),d=RT(t),f=vT(t),g=xT(s),_=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),m.length>0&&(m+=`
`)):(p=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?$e.tonemapping_pars_fragment:"",t.toneMapping!==rs?gT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,mT("linearToOutputTexel",t.outputColorSpace),_T(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=lu(o),o=Qf(o,t),o=ep(o,t),a=lu(a),a=Qf(a,t),a=ep(a,t),o=tp(o),a=tp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,M=x+m+a,P=Zf(i,i.VERTEX_SHADER,v),A=Zf(i,i.FRAGMENT_SHADER,M);i.attachShader(_,P),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(S){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(P).trim(),F=i.getShaderInfoLog(A).trim();let j=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,P,A);else{const $=Jf(i,P,"vertex"),X=Jf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+$+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||F==="")&&(N=!1);N&&(S.diagnostics={runnable:j,programLog:B,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(P),i.deleteShader(A),E=new Cl(i,_),D=yT(i,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,uT)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let DT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NT(e),t.set(e,n)),n}}class NT{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}}function UT(r,e,t,n,i,s,o){const a=new vd,l=new IT,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,B,U,F){const j=U.fog,N=F.geometry,$=y.isMeshStandardMaterial?U.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),ae=X&&X.mapping===rc?X.image.height:null,re=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const de=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ne=de!==void 0?de.length:0;let ke=0;N.morphAttributes.position!==void 0&&(ke=1),N.morphAttributes.normal!==void 0&&(ke=2),N.morphAttributes.color!==void 0&&(ke=3);let q,ne,be,me;if(re){const Rn=Pi[re];q=Rn.vertexShader,ne=Rn.fragmentShader}else q=y.vertexShader,ne=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const Fe=r.getRenderTarget(),Ue=F.isInstancedMesh===!0,We=F.isBatchedMesh===!0,Je=!!y.map,J=!!y.matcap,L=!!X,he=!!y.aoMap,le=!!y.lightMap,ie=!!y.bumpMap,ue=!!y.normalMap,De=!!y.displacementMap,xe=!!y.emissiveMap,R=!!y.metalnessMap,w=!!y.roughnessMap,H=y.anisotropy>0,K=y.clearcoat>0,Q=y.dispersion>0,Z=y.iridescence>0,Ce=y.sheen>0,fe=y.transmission>0,Se=H&&!!y.anisotropyMap,it=K&&!!y.clearcoatMap,se=K&&!!y.clearcoatNormalMap,we=K&&!!y.clearcoatRoughnessMap,Ge=Z&&!!y.iridescenceMap,He=Z&&!!y.iridescenceThicknessMap,Te=Ce&&!!y.sheenColorMap,st=Ce&&!!y.sheenRoughnessMap,qe=!!y.specularMap,bt=!!y.specularColorMap,z=!!y.specularIntensityMap,ye=fe&&!!y.transmissionMap,Y=fe&&!!y.thicknessMap,ee=!!y.gradientMap,_e=!!y.alphaMap,Me=y.alphaTest>0,rt=!!y.alphaHash,Yt=!!y.extensions;let Pn=rs;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Pn=r.toneMapping);const lt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:ne,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:We,batchingColor:We&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:on,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:J,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:ae,aoMap:he,lightMap:le,bumpMap:ie,normalMap:ue,displacementMap:f&&De,emissiveMap:xe,normalMapObjectSpace:ue&&y.normalMapType===EM,normalMapTangentSpace:ue&&y.normalMapType===oc,metalnessMap:R,roughnessMap:w,anisotropy:H,anisotropyMap:Se,clearcoat:K,clearcoatMap:it,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:Q,iridescence:Z,iridescenceMap:Ge,iridescenceThicknessMap:He,sheen:Ce,sheenColorMap:Te,sheenRoughnessMap:st,specularMap:qe,specularColorMap:bt,specularIntensityMap:z,transmission:fe,transmissionMap:ye,thicknessMap:Y,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Xr&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:rt,combine:y.combine,mapUv:Je&&p(y.map.channel),aoMapUv:he&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:ie&&p(y.bumpMap.channel),normalMapUv:ue&&p(y.normalMap.channel),displacementMapUv:De&&p(y.displacementMap.channel),emissiveMapUv:xe&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:w&&p(y.roughnessMap.channel),anisotropyMapUv:Se&&p(y.anisotropyMap.channel),clearcoatMapUv:it&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:st&&p(y.sheenRoughnessMap.channel),specularMapUv:qe&&p(y.specularMap.channel),specularColorMapUv:bt&&p(y.specularColorMap.channel),specularIntensityMapUv:z&&p(y.specularIntensityMap.channel),transmissionMapUv:ye&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:_e&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Je||_e),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pn,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function x(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)S.push(B),S.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const S=_[y.type];let B;if(S){const U=Pi[S];B=pg.clone(U.uniforms)}else B=y.uniforms;return B}function A(y,S){let B;for(let U=0,F=h.length;U<F;U++){const j=h[U];if(j.cacheKey===S){B=j,++B.usedTimes;break}}return B===void 0&&(B=new LT(r,S,y,s),h.push(B)),B}function T(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:D}}function FT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function OT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||OT),n.length>1&&n.sort(d||ip),i.length>1&&i.sort(d||ip)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function BT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sp,r.set(n,[o])):i>=s.length?(o=new sp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function zT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ge};break;case"SpotLight":t={position:new I,direction:new I,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function kT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let GT=0;function HT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VT(r){const e=new zT,t=kT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Xe,o=new Xe;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,x=0,v=0,M=0,P=0,A=0,T=0;c.sort(HT);for(let D=0,y=c.length;D<y;D++){const S=c[D],B=S.color,U=S.intensity,F=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*U,u+=B.g*U,d+=B.b*U;else if(S.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(S.sh.coefficients[N],U);T++}else if(S.isDirectionalLight){const N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,X=t.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=N,f++}else if(S.isSpotLight){const N=e.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(B).multiplyScalar(U),N.distance=F,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,n.spot[_]=N;const $=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,$.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[_]=$.matrix,S.castShadow){const X=t.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=j,M++}_++}else if(S.isRectAreaLight){const N=e.get(S);N.color.copy(B).multiplyScalar(U),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=N,p++}else if(S.isPointLight){const N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const $=S.shadow,X=t.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=N,g++}else if(S.isHemisphereLight){const N=e.get(S);N.skyColor.copy(S.color).multiplyScalar(U),N.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[m]=N,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==x||E.numPointShadows!==v||E.numSpotShadows!==M||E.numSpotMaps!==P||E.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,E.directionalLength=f,E.pointLength=g,E.spotLength=_,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=x,E.numPointShadows=v,E.numSpotShadows=M,E.numSpotMaps=P,E.numLightProbes=T,n.version=GT++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function rp(r){const e=new VT(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function WT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new rp(r),e.set(i,[a])):s>=o.length?(a=new rp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class bg extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
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
}`;function YT(r,e,t){let n=new yd;const i=new te,s=new te,o=new ct,a=new bg({depthPacking:rg}),l=new jT,c={},h=t.maxTextureSize,u={[os]:pn,[pn]:os,[Mn]:Mn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:XT,fragmentShader:qT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ce(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let m=this.type;this.render=function(A,T,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const D=r.getRenderTarget(),y=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Cs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=m!==Ji&&this.type===Ji,F=m===Ji&&this.type!==Ji;for(let j=0,N=A.length;j<N;j++){const $=A[j],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ae=X.getFrameExtents();if(i.multiply(ae),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,X.mapSize.y=s.y)),X.map===null||U===!0||F===!0){const de=this.type!==Ji?{minFilter:Qt,magFilter:Qt}:{};X.map!==null&&X.map.dispose(),X.map=new dr(i.x,i.y,de),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const re=X.getViewportCount();for(let de=0;de<re;de++){const Ne=X.getViewport(de);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),B.viewport(o),X.updateMatrices($,de),n=X.getFrustum(),M(T,E,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Ji&&x(X,E),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(D,y,S)};function x(A,T){const E=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new dr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,E,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,E,f,_,null)}function v(A,T,E,D){let y=null;const S=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)y=S;else if(y=E.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,U=T.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let j=F[U];j===void 0&&(j=y.clone(),F[U]=j,T.addEventListener("dispose",P)),y=j}if(y.visible=T.visible,y.wireframe=T.wireframe,D===Ji?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=E}return y}function M(A,T,E,D,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ji)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const U=e.update(A),F=A.material;if(Array.isArray(F)){const j=U.groups;for(let N=0,$=j.length;N<$;N++){const X=j[N],ae=F[X.materialIndex];if(ae&&ae.visible){const re=v(A,ae,D,y);A.onBeforeShadow(r,A,T,E,U,re,X),r.renderBufferDirect(E,null,U,re,A,X),A.onAfterShadow(r,A,T,E,U,re,X)}}}else if(F.visible){const j=v(A,F,D,y);A.onBeforeShadow(r,A,T,E,U,j,null),r.renderBufferDirect(E,null,U,j,A,null),A.onAfterShadow(r,A,T,E,U,j,null)}}const B=A.children;for(let U=0,F=B.length;U<F;U++)M(B[U],T,E,D,y)}function P(A){A.target.removeEventListener("dispose",P);for(const E in c){const D=c[E],y=A.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const $T={[Ah]:Eh,[Ch]:Lh,[Ph]:Dh,[_o]:Rh,[Eh]:Ah,[Lh]:Ch,[Dh]:Ph,[Rh]:_o};function KT(r){function e(){let z=!1;const ye=new ct;let Y=null;const ee=new ct(0,0,0,0);return{setMask:function(_e){Y!==_e&&!z&&(r.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){z=_e},setClear:function(_e,Me,rt,Yt,Pn){Pn===!0&&(_e*=Yt,Me*=Yt,rt*=Yt),ye.set(_e,Me,rt,Yt),ee.equals(ye)===!1&&(r.clearColor(_e,Me,rt,Yt),ee.copy(ye))},reset:function(){z=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let z=!1,ye=!1,Y=null,ee=null,_e=null;return{setReversed:function(Me){ye=Me},setTest:function(Me){Me?be(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(Me){Y!==Me&&!z&&(r.depthMask(Me),Y=Me)},setFunc:function(Me){if(ye&&(Me=$T[Me]),ee!==Me){switch(Me){case Ah:r.depthFunc(r.NEVER);break;case Eh:r.depthFunc(r.ALWAYS);break;case Ch:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Ph:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Lh:r.depthFunc(r.GREATER);break;case Dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=Me}},setLocked:function(Me){z=Me},setClear:function(Me){_e!==Me&&(r.clearDepth(Me),_e=Me)},reset:function(){z=!1,Y=null,ee=null,_e=null}}}function n(){let z=!1,ye=null,Y=null,ee=null,_e=null,Me=null,rt=null,Yt=null,Pn=null;return{setTest:function(lt){z||(lt?be(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(lt){ye!==lt&&!z&&(r.stencilMask(lt),ye=lt)},setFunc:function(lt,Rn,ji){(Y!==lt||ee!==Rn||_e!==ji)&&(r.stencilFunc(lt,Rn,ji),Y=lt,ee=Rn,_e=ji)},setOp:function(lt,Rn,ji){(Me!==lt||rt!==Rn||Yt!==ji)&&(r.stencilOp(lt,Rn,ji),Me=lt,rt=Rn,Yt=ji)},setLocked:function(lt){z=lt},setClear:function(lt){Pn!==lt&&(r.clearStencil(lt),Pn=lt)},reset:function(){z=!1,ye=null,Y=null,ee=null,_e=null,Me=null,rt=null,Yt=null,Pn=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,M=null,P=null,A=new ge(0,0,0),T=0,E=!1,D=null,y=null,S=null,B=null,U=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,N=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),j=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=N>=2);let X=null,ae={};const re=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),Ne=new ct().fromArray(re),ke=new ct().fromArray(de);function q(z,ye,Y,ee){const _e=new Uint8Array(4),Me=r.createTexture();r.bindTexture(z,Me),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<Y;rt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ye,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(ye+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return Me}const ne={};ne[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),be(r.DEPTH_TEST),s.setFunc(_o),le(!1),ie(ff),be(r.CULL_FACE),L(Cs);function be(z){c[z]!==!0&&(r.enable(z),c[z]=!0)}function me(z){c[z]!==!1&&(r.disable(z),c[z]=!1)}function Fe(z,ye){return h[z]!==ye?(r.bindFramebuffer(z,ye),h[z]=ye,z===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ye),z===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ue(z,ye){let Y=d,ee=!1;if(z){Y=u.get(ye),Y===void 0&&(Y=[],u.set(ye,Y));const _e=z.textures;if(Y.length!==_e.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,rt=_e.length;Me<rt;Me++)Y[Me]=r.COLOR_ATTACHMENT0+Me;Y.length=_e.length,ee=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ee=!0);ee&&r.drawBuffers(Y)}function We(z){return f!==z?(r.useProgram(z),f=z,!0):!1}const Je={[nr]:r.FUNC_ADD,[Jy]:r.FUNC_SUBTRACT,[Qy]:r.FUNC_REVERSE_SUBTRACT};Je[eM]=r.MIN,Je[tM]=r.MAX;const J={[nM]:r.ZERO,[iM]:r.ONE,[sM]:r.SRC_COLOR,[bh]:r.SRC_ALPHA,[hM]:r.SRC_ALPHA_SATURATE,[lM]:r.DST_COLOR,[oM]:r.DST_ALPHA,[rM]:r.ONE_MINUS_SRC_COLOR,[Th]:r.ONE_MINUS_SRC_ALPHA,[cM]:r.ONE_MINUS_DST_COLOR,[aM]:r.ONE_MINUS_DST_ALPHA,[uM]:r.CONSTANT_COLOR,[dM]:r.ONE_MINUS_CONSTANT_COLOR,[fM]:r.CONSTANT_ALPHA,[pM]:r.ONE_MINUS_CONSTANT_ALPHA};function L(z,ye,Y,ee,_e,Me,rt,Yt,Pn,lt){if(z===Cs){g===!0&&(me(r.BLEND),g=!1);return}if(g===!1&&(be(r.BLEND),g=!0),z!==Zy){if(z!==_||lt!==E){if((p!==nr||v!==nr)&&(r.blendEquation(r.FUNC_ADD),p=nr,v=nr),lt)switch(z){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.ONE,r.ONE);break;case pf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,x=null,M=null,P=null,A.set(0,0,0),T=0,_=z,E=lt}return}_e=_e||ye,Me=Me||Y,rt=rt||ee,(ye!==p||_e!==v)&&(r.blendEquationSeparate(Je[ye],Je[_e]),p=ye,v=_e),(Y!==m||ee!==x||Me!==M||rt!==P)&&(r.blendFuncSeparate(J[Y],J[ee],J[Me],J[rt]),m=Y,x=ee,M=Me,P=rt),(Yt.equals(A)===!1||Pn!==T)&&(r.blendColor(Yt.r,Yt.g,Yt.b,Pn),A.copy(Yt),T=Pn),_=z,E=!1}function he(z,ye){z.side===Mn?me(r.CULL_FACE):be(r.CULL_FACE);let Y=z.side===pn;ye&&(Y=!Y),le(Y),z.blending===Xr&&z.transparent===!1?L(Cs):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const ee=z.stencilWrite;o.setTest(ee),ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(z){D!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),D=z)}function ie(z){z!==$y?(be(r.CULL_FACE),z!==y&&(z===ff?r.cullFace(r.BACK):z===Ky?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),y=z}function ue(z){z!==S&&(j&&r.lineWidth(z),S=z)}function De(z,ye,Y){z?(be(r.POLYGON_OFFSET_FILL),(B!==ye||U!==Y)&&(r.polygonOffset(ye,Y),B=ye,U=Y)):me(r.POLYGON_OFFSET_FILL)}function xe(z){z?be(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function R(z){z===void 0&&(z=r.TEXTURE0+F-1),X!==z&&(r.activeTexture(z),X=z)}function w(z,ye,Y){Y===void 0&&(X===null?Y=r.TEXTURE0+F-1:Y=X);let ee=ae[Y];ee===void 0&&(ee={type:void 0,texture:void 0},ae[Y]=ee),(ee.type!==z||ee.texture!==ye)&&(X!==Y&&(r.activeTexture(Y),X=Y),r.bindTexture(z,ye||ne[z]),ee.type=z,ee.texture=ye)}function H(){const z=ae[X];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(z){Ne.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function Te(z){ke.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),ke.copy(z))}function st(z,ye){let Y=l.get(ye);Y===void 0&&(Y=new WeakMap,l.set(ye,Y));let ee=Y.get(z);ee===void 0&&(ee=r.getUniformBlockIndex(ye,z.name),Y.set(z,ee))}function qe(z,ye){const ee=l.get(ye).get(z);a.get(ye)!==ee&&(r.uniformBlockBinding(ye,ee,z.__bindingPointIndex),a.set(ye,ee))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,ae={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,M=null,P=null,A=new ge(0,0,0),T=0,E=!1,D=null,y=null,S=null,B=null,U=null,Ne.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:be,disable:me,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:We,setBlending:L,setMaterial:he,setFlipSided:le,setCullFace:ie,setLineWidth:ue,setPolygonOffset:De,setScissorTest:xe,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:we,texImage3D:Ge,updateUBOMapping:st,uniformBlockBinding:qe,texStorage2D:it,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:He,viewport:Te,reset:bt}}function op(r,e,t,n){const i=ZT(n);switch(t){case Jm:return r*e;case eg:return r*e;case tg:return r*e*2;case ud:return r*e/i.components*i.byteLength;case dd:return r*e/i.components*i.byteLength;case ng:return r*e*2/i.components*i.byteLength;case fd:return r*e*2/i.components*i.byteLength;case Qm:return r*e*3/i.components*i.byteLength;case ri:return r*e*4/i.components*i.byteLength;case pd:return r*e*4/i.components*i.byteLength;case Sl:case wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bl:case Tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Oh:return Math.max(r,16)*Math.max(e,8)/4;case Nh:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case Bh:case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Al:case tu:case nu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ig:case iu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case su:case ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZT(r){switch(r){case ls:case $m:return{byteLength:1,components:1};case ma:case Km:case Di:return{byteLength:2,components:1};case cd:case hd:return{byteLength:2,components:4};case ur:case ld:case Dn:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function JT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):va("canvas")}function _(R,w,H){let K=1;const Q=xe(R);if((Q.width>H||Q.height>H)&&(K=H/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*Q.width),Ce=Math.floor(K*Q.height);u===void 0&&(u=g(Z,Ce));const fe=w?g(Z,Ce):u;return fe.width=Z,fe.height=Ce,fe.getContext("2d").drawImage(R,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Qt&&R.minFilter!==sn}function m(R){r.generateMipmap(R)}function x(R,w,H,K,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=w;if(w===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),w===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),w===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),w===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),w===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),w===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),w===r.RGBA){const Ce=Q?Hl:ot.getTransfer(K);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=Ce===Pt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,w){let H;return R?w===null||w===ur||w===So?H=r.DEPTH24_STENCIL8:w===Dn?H=r.DEPTH32F_STENCIL8:w===ma&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===So?H=r.DEPTH_COMPONENT24:w===Dn?H=r.DEPTH_COMPONENT32F:w===ma&&(H=r.DEPTH_COMPONENT16),H}function M(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){const w=R.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&h.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),D(w)}function T(R){const w=n.get(R);if(w.__webglInit===void 0)return;const H=R.source,K=d.get(H);if(K){const Q=K[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function E(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const H=R.source,K=d.get(H);delete K[w.__cacheKey],o.memory.textures--}function D(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Q=0;Q<w.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(w.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)r.deleteFramebuffer(w.__webglFramebuffer[K]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,Q=H.length;K<Q;K++){const Z=n.get(H[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(R)}let y=0;function S(){y=0}function B(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function U(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function F(R,w){const H=n.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(H,R,w);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function j(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ke(H,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function N(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ke(H,R,w);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function $(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){q(H,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}const X={[_t]:r.REPEAT,[Li]:r.CLAMP_TO_EDGE,[kl]:r.MIRRORED_REPEAT},ae={[Qt]:r.NEAREST,[Ym]:r.NEAREST_MIPMAP_NEAREST,[ta]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[Ml]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},re={[CM]:r.NEVER,[NM]:r.ALWAYS,[PM]:r.LESS,[og]:r.LEQUAL,[RM]:r.EQUAL,[IM]:r.GEQUAL,[LM]:r.GREATER,[DM]:r.NOTEQUAL};function de(R,w){if(w.type===Dn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===Ml||w.magFilter===ta||w.magFilter===Si||w.minFilter===sn||w.minFilter===Ml||w.minFilter===ta||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,X[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ae[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qt||w.minFilter!==ta&&w.minFilter!==Si||w.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",P));const K=w.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const Z=U(w);if(Z!==R.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[Z].usedTimes++;const Ce=Q[R.__cacheKey];Ce!==void 0&&(Q[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(w)),R.__cacheKey=Z,R.__webglTexture=Q[Z].texture}return H}function ke(R,w,H){let K=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=r.TEXTURE_3D);const Q=Ne(R,w),Z=w.source;t.bindTexture(K,R.__webglTexture,r.TEXTURE0+H);const Ce=n.get(Z);if(Z.version!==Ce.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const fe=ot.getPrimaries(ot.workingColorSpace),Se=w.colorSpace===ws?null:ot.getPrimaries(w.colorSpace),it=w.colorSpace===ws||fe===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let se=_(w.image,!1,i.maxTextureSize);se=De(w,se);const we=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type);let He=x(w.internalFormat,we,Ge,w.colorSpace,w.isVideoTexture);de(K,w);let Te;const st=w.mipmaps,qe=w.isVideoTexture!==!0,bt=Ce.__version===void 0||Q===!0,z=Z.dataReady,ye=M(w,se);if(w.isDepthTexture)He=v(w.format===wo,w.type),bt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,He,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,He,se.width,se.height,0,we,Ge,null));else if(w.isDataTexture)if(st.length>0){qe&&bt&&t.texStorage2D(r.TEXTURE_2D,ye,He,st[0].width,st[0].height);for(let Y=0,ee=st.length;Y<ee;Y++)Te=st[Y],qe?z&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,Ge,Te.data):t.texImage2D(r.TEXTURE_2D,Y,He,Te.width,Te.height,0,we,Ge,Te.data);w.generateMipmaps=!1}else qe?(bt&&t.texStorage2D(r.TEXTURE_2D,ye,He,se.width,se.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,we,Ge,se.data)):t.texImage2D(r.TEXTURE_2D,0,He,se.width,se.height,0,we,Ge,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,He,st[0].width,st[0].height,se.depth);for(let Y=0,ee=st.length;Y<ee;Y++)if(Te=st[Y],w.format!==ri)if(we!==null)if(qe){if(z)if(w.layerUpdates.size>0){const _e=op(Te.width,Te.height,w.format,w.type);for(const Me of w.layerUpdates){const rt=Te.data.subarray(Me*_e/Te.data.BYTES_PER_ELEMENT,(Me+1)*_e/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,Me,Te.width,Te.height,1,we,rt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,se.depth,we,Te.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,He,Te.width,Te.height,se.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,se.depth,we,Ge,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,He,Te.width,Te.height,se.depth,0,we,Ge,Te.data)}else{qe&&bt&&t.texStorage2D(r.TEXTURE_2D,ye,He,st[0].width,st[0].height);for(let Y=0,ee=st.length;Y<ee;Y++)Te=st[Y],w.format!==ri?we!==null?qe?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,Ge,Te.data):t.texImage2D(r.TEXTURE_2D,Y,He,Te.width,Te.height,0,we,Ge,Te.data)}else if(w.isDataArrayTexture)if(qe){if(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,He,se.width,se.height,se.depth),z)if(w.layerUpdates.size>0){const Y=op(se.width,se.height,w.format,w.type);for(const ee of w.layerUpdates){const _e=se.data.subarray(ee*Y/se.data.BYTES_PER_ELEMENT,(ee+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,we,Ge,_e)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,Ge,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,se.width,se.height,se.depth,0,we,Ge,se.data);else if(w.isData3DTexture)qe?(bt&&t.texStorage3D(r.TEXTURE_3D,ye,He,se.width,se.height,se.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,Ge,se.data)):t.texImage3D(r.TEXTURE_3D,0,He,se.width,se.height,se.depth,0,we,Ge,se.data);else if(w.isFramebufferTexture){if(bt)if(qe)t.texStorage2D(r.TEXTURE_2D,ye,He,se.width,se.height);else{let Y=se.width,ee=se.height;for(let _e=0;_e<ye;_e++)t.texImage2D(r.TEXTURE_2D,_e,He,Y,ee,0,we,Ge,null),Y>>=1,ee>>=1}}else if(st.length>0){if(qe&&bt){const Y=xe(st[0]);t.texStorage2D(r.TEXTURE_2D,ye,He,Y.width,Y.height)}for(let Y=0,ee=st.length;Y<ee;Y++)Te=st[Y],qe?z&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,we,Ge,Te):t.texImage2D(r.TEXTURE_2D,Y,He,we,Ge,Te);w.generateMipmaps=!1}else if(qe){if(bt){const Y=xe(se);t.texStorage2D(r.TEXTURE_2D,ye,He,Y.width,Y.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ge,se)}else t.texImage2D(r.TEXTURE_2D,0,He,we,Ge,se);p(w)&&m(K),Ce.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function q(R,w,H){if(w.image.length!==6)return;const K=Ne(R,w),Q=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const Z=n.get(Q);if(Q.version!==Z.__version||K===!0){t.activeTexture(r.TEXTURE0+H);const Ce=ot.getPrimaries(ot.workingColorSpace),fe=w.colorSpace===ws?null:ot.getPrimaries(w.colorSpace),Se=w.colorSpace===ws||Ce===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,we=[];for(let ee=0;ee<6;ee++)!it&&!se?we[ee]=_(w.image[ee],!0,i.maxCubemapSize):we[ee]=se?w.image[ee].image:w.image[ee],we[ee]=De(w,we[ee]);const Ge=we[0],He=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),st=x(w.internalFormat,He,Te,w.colorSpace),qe=w.isVideoTexture!==!0,bt=Z.__version===void 0||K===!0,z=Q.dataReady;let ye=M(w,Ge);de(r.TEXTURE_CUBE_MAP,w);let Y;if(it){qe&&bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,st,Ge.width,Ge.height);for(let ee=0;ee<6;ee++){Y=we[ee].mipmaps;for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];w.format!==ri?He!==null?qe?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,He,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,st,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,He,Te,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,st,Me.width,Me.height,0,He,Te,Me.data)}}}else{if(Y=w.mipmaps,qe&&bt){Y.length>0&&ye++;const ee=xe(we[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,st,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){qe?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we[ee].width,we[ee].height,He,Te,we[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,we[ee].width,we[ee].height,0,He,Te,we[ee].data);for(let _e=0;_e<Y.length;_e++){const rt=Y[_e].image[ee].image;qe?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,rt.width,rt.height,He,Te,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,st,rt.width,rt.height,0,He,Te,rt.data)}}else{qe?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,Te,we[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,He,Te,we[ee]);for(let _e=0;_e<Y.length;_e++){const Me=Y[_e];qe?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,He,Te,Me.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,st,He,Te,Me.image[ee])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),Z.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,H,K,Q,Z){const Ce=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),Se=x(H.internalFormat,Ce,fe,H.colorSpace);if(!n.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>Z),we=Math.max(1,w.height>>Z);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,Se,se,we,w.depth,0,Ce,fe,null):t.texImage2D(Q,Z,Se,se,we,0,Ce,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ie(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,n.get(H).__webglTexture,0,le(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,n.get(H).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(R,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){const K=w.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=v(w.stencilBuffer,Q),Ce=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=le(w);ie(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Z,w.width,w.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Z,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,R)}else{const K=w.textures;for(let Q=0;Q<K.length;Q++){const Z=K[Q],Ce=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),Se=x(Z.internalFormat,Ce,fe,Z.colorSpace),it=le(w);H&&ie(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Se,w.width,w.height):ie(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Se,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Se,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const K=n.get(w.depthTexture).__webglTexture,Q=le(w);if(w.depthTexture.format===qr)ie(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(w.depthTexture.format===wo)ie(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const w=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=K}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=r.createRenderbuffer(),be(w.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),be(w.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,w,H){const K=n.get(R);w!==void 0&&ne(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Fe(R)}function We(R){const w=R.texture,H=n.get(R),K=n.get(w);R.addEventListener("dispose",A);const Q=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=w.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let Se=0;Se<w.mipmaps.length;Se++)H.__webglFramebuffer[fe][Se]=r.createFramebuffer()}else H.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)H.__webglFramebuffer[fe]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let fe=0,Se=Q.length;fe<Se;fe++){const it=n.get(Q[fe]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&ie(R)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Se=Q[fe];H.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const it=s.convert(Se.format,Se.colorSpace),se=s.convert(Se.type),we=x(Se.internalFormat,it,se,Se.colorSpace,R.isXRRenderTarget===!0),Ge=le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,we,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),be(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),de(r.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ne(H.__webglFramebuffer[fe][Se],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else ne(H.__webglFramebuffer[fe],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Se=Q.length;fe<Se;fe++){const it=Q[fe],se=n.get(it);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),de(r.TEXTURE_2D,it),ne(H.__webglFramebuffer,R,it,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),p(it)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,K.__webglTexture),de(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ne(H.__webglFramebuffer[Se],R,w,r.COLOR_ATTACHMENT0,fe,Se);else ne(H.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,fe,0);p(w)&&m(fe),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Je(R){const w=R.textures;for(let H=0,K=w.length;H<K;H++){const Q=w[H];if(p(Q)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=n.get(Q).__webglTexture;t.bindTexture(Z,Ce),m(Z),t.unbindTexture()}}}const J=[],L=[];function he(R){if(R.samples>0){if(ie(R)===!1){const w=R.textures,H=R.width,K=R.height;let Q=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(R),fe=w.length>1;if(fe)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const it=n.get(w[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,H,K,0,0,H,K,Q,r.NEAREST),l===!0&&(J.length=0,L.length=0,J.push(r.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const it=n.get(w[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,it,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function le(R){return Math.min(i.maxSamples,R.samples)}function ie(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ue(R){const w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function De(R,w){const H=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==on&&H!==ws&&(ot.getTransfer(H)===Pt?(K!==ri||Q!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=j,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=Ue,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ie}function QT(r,e){function t(n,i=ws){let s;const o=ot.getTransfer(i);if(n===ls)return r.UNSIGNED_BYTE;if(n===cd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$m)return r.BYTE;if(n===Km)return r.SHORT;if(n===ma)return r.UNSIGNED_SHORT;if(n===ld)return r.INT;if(n===ur)return r.UNSIGNED_INT;if(n===Dn)return r.FLOAT;if(n===Di)return r.HALF_FLOAT;if(n===Jm)return r.ALPHA;if(n===Qm)return r.RGB;if(n===ri)return r.RGBA;if(n===eg)return r.LUMINANCE;if(n===tg)return r.LUMINANCE_ALPHA;if(n===qr)return r.DEPTH_COMPONENT;if(n===wo)return r.DEPTH_STENCIL;if(n===ud)return r.RED;if(n===dd)return r.RED_INTEGER;if(n===ng)return r.RG;if(n===fd)return r.RG_INTEGER;if(n===pd)return r.RGBA_INTEGER;if(n===Sl||n===wl||n===bl||n===Tl)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===zh||n===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bh||n===zh)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gh||n===Hh||n===Vh||n===Wh||n===jh||n===Xh||n===qh||n===Yh||n===$h||n===Kh||n===Zh||n===Jh||n===Qh||n===eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===tu||n===nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Al)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ig||n===iu||n===su||n===ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class eA extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new rn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rA extends Os{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new sA,p=t.getContextAttributes();let m=null,x=null;const v=[],M=[],P=new te;let A=null;const T=new yn;T.layers.enable(1),T.viewport=new ct;const E=new yn;E.layers.enable(2),E.viewport=new ct;const D=[T,E],y=new eA;y.layers.enable(1),y.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=v[q];return ne===void 0&&(ne=new Kc,v[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=v[q];return ne===void 0&&(ne=new Kc,v[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=v[q];return ne===void 0&&(ne=new Kc,v[q]=ne),ne.getHandSpace()};function U(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const be=v[ne];be!==void 0&&(be.update(q.inputSource,q.frame,c||o),be.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){const ne=M[q];ne!==null&&(M[q]=null,v[q].disconnect(ne))}S=null,B=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new dr(f.framebufferWidth,f.framebufferHeight,{format:ri,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,be=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?wo:qr,be=p.stencil?So:ur);const Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new dr(d.textureWidth,d.textureHeight,{format:ri,type:ls,depthTexture:new xg(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let ne=0;ne<q.removed.length;ne++){const be=q.removed[ne],me=M.indexOf(be);me>=0&&(M[me]=null,v[me].disconnect(be))}for(let ne=0;ne<q.added.length;ne++){const be=q.added[ne];let me=M.indexOf(be);if(me===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=M.length){M.push(be),me=Ue;break}else if(M[Ue]===null){M[Ue]=be,me=Ue;break}if(me===-1)break}const Fe=v[me];Fe&&Fe.connect(be)}}const N=new I,$=new I;function X(q,ne,be){N.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);const me=N.distanceTo($),Fe=ne.projectionMatrix.elements,Ue=be.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),Je=Fe[14]/(Fe[10]+1),J=(Fe[9]+1)/Fe[5],L=(Fe[9]-1)/Fe[5],he=(Fe[8]-1)/Fe[0],le=(Ue[8]+1)/Ue[0],ie=We*he,ue=We*le,De=me/(-he+le),xe=De*-he;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(De),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Fe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=We+De,w=Je+De,H=ie-xe,K=ue+(me-xe),Q=J*Je/w*R,Z=L*Je/w*R;q.projectionMatrix.makePerspective(H,K,Q,Z,R,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,be=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(be=_.depthFar)),y.near=E.near=T.near=ne,y.far=E.far=T.far=be,(S!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,B=y.far);const me=q.parent,Fe=y.cameras;ae(y,me);for(let Ue=0;Ue<Fe.length;Ue++)ae(Fe[Ue],me);Fe.length===2?X(y,T,E):y.projectionMatrix.copy(T.projectionMatrix),re(q,y,me)};function re(q,ne,be){be===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let de=null;function Ne(q,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let me=!1;be.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Ue=0;Ue<be.length;Ue++){const We=be[Ue];let Je=null;if(f!==null)Je=f.getViewport(We);else{const L=u.getViewSubImage(d,We);Je=L.viewport,Ue===0&&(e.setRenderTargetTextures(x,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let J=D[Ue];J===void 0&&(J=new yn,J.layers.enable(Ue),J.viewport=new ct,D[Ue]=J),J.matrix.fromArray(We.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(We.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Je.x,Je.y,Je.width,Je.height),Ue===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(J)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ue=u.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let be=0;be<v.length;be++){const me=M[be],Fe=v[be];me!==null&&Fe!==void 0&&Fe.update(me,ne,c||o)}de&&de(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ke=new vg;ke.setAnimationLoop(Ne),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const Xs=new Fi,oA=new Xe;function aA(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fg(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,M=x.envMapRotation;v&&(p.envMap.value=v,Xs.copy(M),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),p.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(Xs)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(x,P);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const M=r.createBuffer(),P=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,P,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,P=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const E=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,y=E.length;D<y;D++){const S=E[D];if(f(S,A,D,P)===!0){const B=S.__offset,U=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let j=0;j<U.length;j++){const N=U[j],$=_(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,B+F,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,M,P){const A=x.value,T=v+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const E=P[T];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return P[T]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function g(x){const v=x.uniforms;let M=0;const P=16;for(let T=0,E=v.length;T<E;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,S=D.length;y<S;y++){const B=D[y],U=Array.isArray(B.value)?B.value:[B.value];for(let F=0,j=U.length;F<j;F++){const N=U[F],$=_(N),X=M%P,ae=X%$.boundary,re=X+ae;M+=ae,re!==0&&P-re<$.storage&&(M+=P-re),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=$.storage}}}const A=M%P;return A>0&&(M+=P-A),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class cA{constructor(e={}){const{canvas:t=ZM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this.toneMapping=rs,this.toneMappingExposure=1;const v=this;let M=!1,P=0,A=0,T=null,E=-1,D=null;const y=new ct,S=new ct;let B=null;const U=new ge(0);let F=0,j=t.width,N=t.height,$=1,X=null,ae=null;const re=new ct(0,0,j,N),de=new ct(0,0,j,N);let Ne=!1;const ke=new yd;let q=!1,ne=!1;const be=new Xe,me=new Xe,Fe=new I,Ue=new ct,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function J(){return T===null?$:1}let L=n;function he(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${od}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){const k="webgl2";if(L=he(k,C),L===null)throw he(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let le,ie,ue,De,xe,R,w,H,K,Q,Z,Ce,fe,Se,it,se,we,Ge,He,Te,st,qe,bt,z;function ye(){le=new m1(L),le.init(),qe=new QT(L,le),ie=new c1(L,le,e,qe),ue=new KT(L),ie.reverseDepthBuffer&&ue.buffers.depth.setReversed(!0),De=new v1(L),xe=new FT,R=new JT(L,le,ue,xe,ie,qe,De),w=new u1(v),H=new p1(v),K=new TS(L),bt=new a1(L,K),Q=new g1(L,K,De,bt),Z=new y1(L,Q,K,De),He=new x1(L,ie,R),se=new h1(xe),Ce=new UT(v,w,H,le,ie,bt,se),fe=new aA(v,xe),Se=new BT,it=new WT(le),Ge=new o1(v,w,H,ue,Z,d,l),we=new YT(v,Z,ie),z=new lA(L,De,ie,ue),Te=new l1(L,le,De),st=new _1(L,le,De),De.programs=Ce.programs,v.capabilities=ie,v.extensions=le,v.properties=xe,v.renderLists=Se,v.shadowMap=we,v.state=ue,v.info=De}ye();const Y=new rA(v,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(j,N,!1))},this.getSize=function(C){return C.set(j,N)},this.setSize=function(C,k,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,N=k,t.width=Math.floor(C*$),t.height=Math.floor(k*$),V===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(j*$,N*$).floor()},this.setDrawingBufferSize=function(C,k,V){j=C,N=k,$=V,t.width=Math.floor(C*V),t.height=Math.floor(k*V),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,k,V,W){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,k,V,W),ue.viewport(y.copy(re).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,k,V,W){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,k,V,W),ue.scissor(S.copy(de).multiplyScalar($).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(C){ue.setScissorTest(Ne=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,k=!0,V=!0){let W=0;if(C){let G=!1;if(T!==null){const oe=T.texture.format;G=oe===pd||oe===fd||oe===dd}if(G){const oe=T.texture.type,ve=oe===ls||oe===ur||oe===ma||oe===So||oe===cd||oe===hd,Ae=Ge.getClearColor(),Pe=Ge.getClearAlpha(),Oe=Ae.r,Be=Ae.g,Le=Ae.b;ve?(f[0]=Oe,f[1]=Be,f[2]=Le,f[3]=Pe,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Oe,g[1]=Be,g[2]=Le,g[3]=Pe,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}k&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Se.dispose(),it.dispose(),xe.dispose(),w.dispose(),H.dispose(),Z.dispose(),bt.dispose(),z.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",sf),Y.removeEventListener("sessionend",rf),ks.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=De.autoReset,k=we.enabled,V=we.autoUpdate,W=we.needsUpdate,G=we.type;ye(),De.autoReset=C,we.enabled=k,we.autoUpdate=V,we.needsUpdate=W,we.type=G}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function rt(C){const k=C.target;k.removeEventListener("dispose",rt),Yt(k)}function Yt(C){Pn(C),xe.remove(C)}function Pn(C){const k=xe.get(C).programs;k!==void 0&&(k.forEach(function(V){Ce.releaseProgram(V)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,V,W,G,oe){k===null&&(k=We);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Ae=Hy(C,k,V,W,G);ue.setMaterial(W,ve);let Pe=V.index,Oe=1;if(W.wireframe===!0){if(Pe=Q.getWireframeAttribute(V),Pe===void 0)return;Oe=2}const Be=V.drawRange,Le=V.attributes.position;let mt=Be.start*Oe,Ct=(Be.start+Be.count)*Oe;oe!==null&&(mt=Math.max(mt,oe.start*Oe),Ct=Math.min(Ct,(oe.start+oe.count)*Oe)),Pe!==null?(mt=Math.max(mt,0),Ct=Math.min(Ct,Pe.count)):Le!=null&&(mt=Math.max(mt,0),Ct=Math.min(Ct,Le.count));const kt=Ct-mt;if(kt<0||kt===1/0)return;bt.setup(G,W,Ae,V,Pe);let Hn,dt=Te;if(Pe!==null&&(Hn=K.get(Pe),dt=st,dt.setIndex(Hn)),G.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*J()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(G.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),ue.setLineWidth(Ie*J()),G.isLineSegments?dt.setMode(L.LINES):G.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else G.isPoints?dt.setMode(L.POINTS):G.isSprite&&dt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ie=G._multiDrawStarts,fn=G._multiDrawCounts,ft=G._multiDrawCount,gi=Pe?K.get(Pe).bytesPerElement:1,Mr=xe.get(W).currentProgram.getUniforms();for(let Vn=0;Vn<ft;Vn++)Mr.setValue(L,"_gl_DrawID",Vn),dt.render(Ie[Vn]/gi,fn[Vn])}else if(G.isInstancedMesh)dt.renderInstances(mt,kt,G.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fn=Math.min(V.instanceCount,Ie);dt.renderInstances(mt,kt,fn)}else dt.render(mt,kt)};function lt(C,k,V){C.transparent===!0&&C.side===Mn&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,za(C,k,V),C.side=os,C.needsUpdate=!0,za(C,k,V),C.side=Mn):za(C,k,V)}this.compile=function(C,k,V=null){V===null&&(V=C),p=it.get(V),p.init(k),x.push(p),V.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),C!==V&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const W=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const oe=G.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const Ae=oe[ve];lt(Ae,V,G),W.add(Ae)}else lt(oe,V,G),W.add(oe)}),x.pop(),p=null,W},this.compileAsync=function(C,k,V=null){const W=this.compile(C,k,V);return new Promise(G=>{function oe(){if(W.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){G(C);return}setTimeout(oe,10)}le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Rn=null;function ji(C){Rn&&Rn(C)}function sf(){ks.stop()}function rf(){ks.start()}const ks=new vg;ks.setAnimationLoop(ji),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(C){Rn=C,Y.setAnimationLoop(C),C===null?ks.stop():ks.start()},Y.addEventListener("sessionstart",sf),Y.addEventListener("sessionend",rf),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,T),p=it.get(C,x.length),p.init(k),x.push(p),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(me),ne=this.localClippingEnabled,q=se.init(this.clippingPlanes,ne),_=Se.get(C,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&gc(oe,k,-1/0,v.sortObjects)}gc(C,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,ae),Je=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Je&&Ge.addToRenderList(_,C),this.info.render.frame++,q===!0&&se.beginShadows();const V=p.state.shadowsArray;we.render(V,C,k),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,G=_.transmissive;if(p.setupLights(),k.isArrayCamera){const oe=k.cameras;if(G.length>0)for(let ve=0,Ae=oe.length;ve<Ae;ve++){const Pe=oe[ve];af(W,G,C,Pe)}Je&&Ge.render(C);for(let ve=0,Ae=oe.length;ve<Ae;ve++){const Pe=oe[ve];of(_,C,Pe,Pe.viewport)}}else G.length>0&&af(W,G,C,k),Je&&Ge.render(C),of(_,C,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,k),bt.resetDefaultState(),E=-1,D=null,x.pop(),x.length>0?(p=x[x.length-1],q===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function gc(C,k,V,W){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){W&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const ve=Z.update(C),Ae=C.material;Ae.visible&&_.push(C,ve,Ae,V,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const ve=Z.update(C),Ae=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const Pe=ve.groups;for(let Oe=0,Be=Pe.length;Oe<Be;Oe++){const Le=Pe[Oe],mt=Ae[Le.materialIndex];mt&&mt.visible&&_.push(C,ve,mt,V,Ue.z,Le)}}else Ae.visible&&_.push(C,ve,Ae,V,Ue.z,null)}}const oe=C.children;for(let ve=0,Ae=oe.length;ve<Ae;ve++)gc(oe[ve],k,V,W)}function of(C,k,V,W){const G=C.opaque,oe=C.transmissive,ve=C.transparent;p.setupLightsView(V),q===!0&&se.setGlobalState(v.clippingPlanes,V),W&&ue.viewport(y.copy(W)),G.length>0&&Ba(G,k,V),oe.length>0&&Ba(oe,k,V),ve.length>0&&Ba(ve,k,V),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function af(C,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new dr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Di:ls,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],ve=W.viewport||y;oe.setSize(ve.z,ve.w);const Ae=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(U),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Je&&Ge.render(V);const Pe=v.toneMapping;v.toneMapping=rs;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),q===!0&&se.setGlobalState(v.clippingPlanes,W),Ba(C,V,W),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),le.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,mt=k.length;Le<mt;Le++){const Ct=k[Le],kt=Ct.object,Hn=Ct.geometry,dt=Ct.material,Ie=Ct.group;if(dt.side===Mn&&kt.layers.test(W.layers)){const fn=dt.side;dt.side=pn,dt.needsUpdate=!0,lf(kt,V,W,Hn,dt,Ie),dt.side=fn,dt.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}v.setRenderTarget(Ae),v.setClearColor(U,F),Oe!==void 0&&(W.viewport=Oe),v.toneMapping=Pe}function Ba(C,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let G=0,oe=C.length;G<oe;G++){const ve=C[G],Ae=ve.object,Pe=ve.geometry,Oe=W===null?ve.material:W,Be=ve.group;Ae.layers.test(V.layers)&&lf(Ae,k,V,Pe,Oe,Be)}}function lf(C,k,V,W,G,oe){C.onBeforeRender(v,k,V,W,G,oe),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,k,V,W,C,oe),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,v.renderBufferDirect(V,k,W,G,C,oe),G.side=os,G.needsUpdate=!0,v.renderBufferDirect(V,k,W,G,C,oe),G.side=Mn):v.renderBufferDirect(V,k,W,G,C,oe),C.onAfterRender(v,k,V,W,G,oe)}function za(C,k,V){k.isScene!==!0&&(k=We);const W=xe.get(C),G=p.state.lights,oe=p.state.shadowsArray,ve=G.state.version,Ae=Ce.getParameters(C,G.state,oe,k,V),Pe=Ce.getProgramCacheKey(Ae);let Oe=W.programs;W.environment=C.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(C.isMeshStandardMaterial?H:w).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",rt),Oe=new Map,W.programs=Oe);let Be=Oe.get(Pe);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ve)return hf(C,Ae),Be}else Ae.uniforms=Ce.getUniforms(C),C.onBeforeCompile(Ae,v),Be=Ce.acquireProgram(Ae,Pe),Oe.set(Pe,Be),W.uniforms=Ae.uniforms;const Le=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=se.uniform),hf(C,Ae),W.needsLights=Wy(C),W.lightsStateVersion=ve,W.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function cf(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Cl.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function hf(C,k){const V=xe.get(C);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Hy(C,k,V,W,G){k.isScene!==!0&&(k=We),R.resetTextureUnits();const oe=k.fog,ve=W.isMeshStandardMaterial?k.environment:null,Ae=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:on,Pe=(W.isMeshStandardMaterial?H:w).get(W.envMap||ve),Oe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,Ct=!!V.morphAttributes.color;let kt=rs;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=v.toneMapping);const Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=Hn!==void 0?Hn.length:0,Ie=xe.get(W),fn=p.state.lights;if(q===!0&&(ne===!0||C!==D)){const ei=C===D&&W.id===E;se.setState(W,C,ei)}let ft=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==fn.state.version||Ie.outputColorSpace!==Ae||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Pe||W.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Be||Ie.morphTargets!==Le||Ie.morphNormals!==mt||Ie.morphColors!==Ct||Ie.toneMapping!==kt||Ie.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Ie.__version=W.version);let gi=Ie.currentProgram;ft===!0&&(gi=za(W,k,G));let Mr=!1,Vn=!1,_c=!1;const Vt=gi.getUniforms(),fs=Ie.uniforms;if(ue.useProgram(gi.program)&&(Mr=!0,Vn=!0,_c=!0),W.id!==E&&(E=W.id,Vn=!0),Mr||D!==C){ie.reverseDepthBuffer?(be.copy(C.projectionMatrix),QM(be),eS(be),Vt.setValue(L,"projectionMatrix",be)):Vt.setValue(L,"projectionMatrix",C.projectionMatrix),Vt.setValue(L,"viewMatrix",C.matrixWorldInverse);const ei=Vt.map.cameraPosition;ei!==void 0&&ei.setValue(L,Fe.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&Vt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Vt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Vn=!0,_c=!0)}if(G.isSkinnedMesh){Vt.setOptional(L,G,"bindMatrix"),Vt.setOptional(L,G,"bindMatrixInverse");const ei=G.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Vt.setValue(L,"boneTexture",ei.boneTexture,R))}G.isBatchedMesh&&(Vt.setOptional(L,G,"batchingTexture"),Vt.setValue(L,"batchingTexture",G._matricesTexture,R),Vt.setOptional(L,G,"batchingIdTexture"),Vt.setValue(L,"batchingIdTexture",G._indirectTexture,R),Vt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Vt.setValue(L,"batchingColorTexture",G._colorsTexture,R));const vc=V.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0)&&He.update(G,V,gi),(Vn||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,Vt.setValue(L,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fs.envMap.value=Pe,fs.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(fs.envMapIntensity.value=k.environmentIntensity),Vn&&(Vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Vy(fs,_c),oe&&W.fog===!0&&fe.refreshFogUniforms(fs,oe),fe.refreshMaterialUniforms(fs,W,$,N,p.state.transmissionRenderTarget[C.id]),Cl.upload(L,cf(Ie),fs,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cl.upload(L,cf(Ie),fs,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Vt.setValue(L,"center",G.center),Vt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Vt.setValue(L,"normalMatrix",G.normalMatrix),Vt.setValue(L,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ei=W.uniformsGroups;for(let xc=0,jy=ei.length;xc<jy;xc++){const uf=ei[xc];z.update(uf,gi),z.bind(uf,gi)}}return gi}function Vy(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Wy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,k,V){xe.get(C.texture).__webglTexture=k,xe.get(C.depthTexture).__webglTexture=V;const W=xe.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const V=xe.get(C);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,V=0){T=C,P=k,A=V;let W=!0,G=null,oe=!1,ve=!1;if(C){const Pe=xe.get(C);if(Pe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Pe.__hasExternalTextures)R.rebindTextures(C,xe.get(C.texture).__webglTexture,xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Le=C.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&xe.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Be=xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?G=Be[k][V]:G=Be[k],oe=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?G=xe.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[V]:G=Be,y.copy(C.viewport),S.copy(C.scissor),B=C.scissorTest}else y.copy(re).multiplyScalar($).floor(),S.copy(de).multiplyScalar($).floor(),B=Ne;if(ue.bindFramebuffer(L.FRAMEBUFFER,G)&&W&&ue.drawBuffers(C,G),ue.viewport(y),ue.scissor(S),ue.setScissorTest(B),oe){const Pe=xe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,V)}else if(ve){const Pe=xe.get(C.texture),Oe=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,V||0,Oe)}E=-1},this.readRenderTargetPixels=function(C,k,V,W,G,oe,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){ue.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Pe=C.texture,Oe=Pe.format,Be=Pe.type;if(!ie.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-W&&V>=0&&V<=C.height-G&&L.readPixels(k,V,W,G,qe.convert(Oe),qe.convert(Be),oe)}finally{const Pe=T!==null?xe.get(T).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(C,k,V,W,G,oe,ve){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){const Pe=C.texture,Oe=Pe.format,Be=Pe.type;if(!ie.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-W&&V>=0&&V<=C.height-G){ue.bindFramebuffer(L.FRAMEBUFFER,Ae);const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(k,V,W,G,qe.convert(Oe),qe.convert(Be),0);const mt=T!==null?xe.get(T).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,mt);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await JM(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Le),L.deleteSync(Ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,V=0){C.isTexture!==!0&&(El("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-V),G=Math.floor(C.image.width*W),oe=Math.floor(C.image.height*W),ve=k!==null?k.x:0,Ae=k!==null?k.y:0;R.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ve,Ae,G,oe),ue.unbindTexture()},this.copyTextureToTexture=function(C,k,V=null,W=null,G=0){C.isTexture!==!0&&(El("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,V=null);let oe,ve,Ae,Pe,Oe,Be;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ae=V.min.x,Pe=V.min.y):(oe=C.image.width,ve=C.image.height,Ae=0,Pe=0),W!==null?(Oe=W.x,Be=W.y):(Oe=0,Be=0);const Le=qe.convert(k.format),mt=qe.convert(k.type);R.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hn=L.getParameter(L.UNPACK_SKIP_PIXELS),dt=L.getParameter(L.UNPACK_SKIP_ROWS),Ie=L.getParameter(L.UNPACK_SKIP_IMAGES),fn=C.isCompressedTexture?C.mipmaps[G]:C.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,fn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,Oe,Be,oe,ve,Le,mt,fn.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,Oe,Be,fn.width,fn.height,Le,fn.data):L.texSubImage2D(L.TEXTURE_2D,G,Oe,Be,oe,ve,Le,mt,fn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),G===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(C,k,V=null,W=null,G=0){C.isTexture!==!0&&(El("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let oe,ve,Ae,Pe,Oe,Be,Le,mt,Ct;const kt=C.isCompressedTexture?C.mipmaps[G]:C.image;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ae=V.max.z-V.min.z,Pe=V.min.x,Oe=V.min.y,Be=V.min.z):(oe=kt.width,ve=kt.height,Ae=kt.depth,Pe=0,Oe=0,Be=0),W!==null?(Le=W.x,mt=W.y,Ct=W.z):(Le=0,mt=0,Ct=0);const Hn=qe.convert(k.format),dt=qe.convert(k.type);let Ie;if(k.isData3DTexture)R.setTexture3D(k,0),Ie=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Ie=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const fn=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=L.getParameter(L.UNPACK_SKIP_PIXELS),Mr=L.getParameter(L.UNPACK_SKIP_ROWS),Vn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ie,G,Le,mt,Ct,oe,ve,Ae,Hn,dt,kt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,G,Le,mt,Ct,oe,ve,Ae,Hn,kt.data):L.texSubImage3D(Ie,G,Le,mt,Ct,oe,ve,Ae,Hn,dt,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vn),G===0&&k.generateMipmaps&&L.generateMipmap(Ie),ue.unbindTexture()},this.initRenderTarget=function(C){xe.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,ue.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gd?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===ac?"display-p3":"srgb"}}class Sd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new Sd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hA extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new I;class wd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ap=new I,lp=new ct,cp=new ct,dA=new I,hp=new Xe,al=new I,Zc=new Gi,up=new Xe,Jc=new Bo;class fA extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gf,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ds),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(i),e.ray.intersectsSphere(Zc)!==!1&&(up.copy(i).invert(),Jc.copy(e.ray).applyMatrix4(up),!(this.boundingBox!==null&&Jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;lp.fromBufferAttribute(i.attributes.skinIndex,e),cp.fromBufferAttribute(i.attributes.skinWeight,e),ap.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=cp.getComponent(s);if(o!==0){const a=lp.getComponent(s);hp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dA.copy(ap).applyMatrix4(hp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tg extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bd extends rn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qt,h=Qt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dp=new Xe,pA=new Xe;class Td{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:pA;dp.multiplyMatrices(a,t[s]),dp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bd(t,e,e,ri,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Tg),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cu extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new Xe,fp=new Xe,ll=[],pp=new ds,mA=new Xe,$o=new ce,Ko=new Gi;class gA extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),pp.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(pp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Ko.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fr),fp.multiplyMatrices(n,Fr),$o.matrixWorld=fp,$o.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){const l=ll[o];l.instanceId=s,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bd(new Float32Array(i*this.count),i,this.count,ud,Dn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ko extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new I,Yl=new I,mp=new Xe,Zo=new Bo,cl=new Gi,Qc=new I,gp=new I;class Ao extends wt{constructor(e=new ut,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ql.fromBufferAttribute(t,i-1),Yl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ql.distanceTo(Yl);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;mp.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(mp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),x=h.getX(_+1),v=hl(this,e,Zo,l,m,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=hl(this,e,Zo,l,_,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=hl(this,e,Zo,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=hl(this,e,Zo,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hl(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(ql.fromBufferAttribute(o,i),Yl.fromBufferAttribute(o,s),t.distanceSqToSegment(ql,Yl,Qc,gp)>n)return;Qc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:gp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const _p=new I,vp=new I;class Ad extends Ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_p.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_p.distanceTo(vp);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _A extends Ao{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ia extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xp=new Xe,hu=new Bo,ul=new Gi,dl=new I;class Bs extends wt{constructor(e=new ut,t=new Ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(i),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;xp.copy(i).invert(),hu.copy(e.ray).applyMatrix4(xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);dl.fromBufferAttribute(u,p),yp(dl,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)dl.fromBufferAttribute(u,g),yp(dl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yp(r,e,t,n,i,s,o){const a=hu.distanceSqToPoint(r);if(a<t){const l=new I;hu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vA extends rn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new te:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],o=[],a=new I,l=new Xe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Zt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ed extends Hi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xA extends Ed{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const fl=new I,eh=new Cd,th=new Cd,nh=new Cd;class yA extends Hi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(fl.subVectors(i[0],i[1]).add(i[0]),c=fl);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(fl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=fl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),eh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),nh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),nh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(eh.calc(l),th.calc(l),nh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mp(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function MA(r,e){const t=1-r;return t*t*e}function SA(r,e){return 2*(1-r)*r*e}function wA(r,e){return r*r*e}function ca(r,e,t,n){return MA(r,e)+SA(r,t)+wA(r,n)}function bA(r,e){const t=1-r;return t*t*t*e}function TA(r,e){const t=1-r;return 3*t*t*r*e}function AA(r,e){return 3*(1-r)*r*r*e}function EA(r,e){return r*r*r*e}function ha(r,e,t,n,i){return bA(r,e)+TA(r,t)+AA(r,n)+EA(r,i)}class Ag extends Hi{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CA extends Hi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y),ha(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eg extends Hi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class PA extends Hi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cg extends Hi{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ca(e,i.x,s.x,o.x),ca(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RA extends Hi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ca(e,i.x,s.x,o.x),ca(e,i.y,s.y,o.y),ca(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pg extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Mp(a,l.x,c.x,h.x,u.x),Mp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var uu=Object.freeze({__proto__:null,ArcCurve:xA,CatmullRomCurve3:yA,CubicBezierCurve:Ag,CubicBezierCurve3:CA,EllipseCurve:Ed,LineCurve:Eg,LineCurve3:PA,QuadraticBezierCurve:Cg,QuadraticBezierCurve3:RA,SplineCurve:Pg});class LA extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new uu[i.type]().fromJSON(i))}return this}}class du extends LA{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Eg(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Cg(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Ag(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Ed(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pd extends ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rd extends ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function x(){const M=new I,P=new I;let A=0;const T=(t-e)/n;for(let E=0;E<=s;E++){const D=[],y=E/s,S=y*(t-e)+e;for(let B=0;B<=i;B++){const U=B/i,F=U*l+a,j=Math.sin(F),N=Math.cos(F);P.x=S*j,P.y=-y*n+p,P.z=S*N,u.push(P.x,P.y,P.z),M.set(j,T,N).normalize(),d.push(M.x,M.y,M.z),f.push(U,1-y),D.push(g++)}_.push(D)}for(let E=0;E<i;E++)for(let D=0;D<s;D++){const y=_[D][E],S=_[D+1][E],B=_[D+1][E+1],U=_[D][E+1];e>0&&(h.push(y,S,U),A+=3),t>0&&(h.push(S,B,U),A+=3)}c.addGroup(m,A,0),m+=A}function v(M){const P=g,A=new te,T=new I;let E=0;const D=M===!0?e:t,y=M===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const S=g;for(let B=0;B<=i;B++){const F=B/i*l+a,j=Math.cos(F),N=Math.sin(F);T.x=D*N,T.y=p*y,T.z=D*j,u.push(T.x,T.y,T.z),d.push(0,y,0),A.x=j*.5+.5,A.y=N*.5*y+.5,f.push(A.x,A.y),g++}for(let B=0;B<i;B++){const U=P+B,F=S+B;M===!0?h.push(F,F+1,U):h.push(F+1,F,U),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hc extends Rd{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uc extends ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new I,M=new I,P=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],M),f(t[A+2],P),l(v,M,P,x)}function l(x,v,M,P){const A=P+1,T=[];for(let E=0;E<=A;E++){T[E]=[];const D=x.clone().lerp(M,E/A),y=v.clone().lerp(M,E/A),S=A-E;for(let B=0;B<=S;B++)B===0&&E===A?T[E][B]=D:T[E][B]=D.clone().lerp(y,B/S)}for(let E=0;E<A;E++)for(let D=0;D<2*(A-E)-1;D++){const y=Math.floor(D/2);D%2===0?(d(T[E][y+1]),d(T[E+1][y]),d(T[E][y])):(d(T[E][y+1]),d(T[E+1][y+1]),d(T[E+1][y]))}}function c(x){const v=new I;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){const x=new I;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const M=p(x)/2/Math.PI+.5,P=m(x)/Math.PI+.5;o.push(M,1-P)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],P=o[x+4],A=Math.max(v,M,P),T=Math.min(v,M,P);A>.9&&T<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){const M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){const x=new I,v=new I,M=new I,P=new I,A=new te,T=new te,E=new te;for(let D=0,y=0;D<s.length;D+=9,y+=6){x.set(s[D+0],s[D+1],s[D+2]),v.set(s[D+3],s[D+4],s[D+5]),M.set(s[D+6],s[D+7],s[D+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),P.copy(x).add(v).add(M).divideScalar(3);const S=p(P);_(A,y+0,x,S),_(T,y+2,v,S),_(E,y+4,M,S)}}function _(x,v,M,P){P<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=P/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.vertices,e.indices,e.radius,e.details)}}class Pl extends du{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new du().fromJSON(i))}return this}}const DA={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Rg(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=OA(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return xa(s,o,t,a,l,f,0),o}};function Rg(r,e,t,n,i){let s,o;if(i===YA(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Sp(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Sp(s,r[s],r[s+1],o);return o&&dc(o,o.next)&&(Ma(o),o=o.next),o}function fr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(dc(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xa(r,e,t,n,i,s,o){if(!r)return;!o&&s&&HA(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?NA(r,n,i,s):IA(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Ma(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=UA(fr(r),e,t),xa(r,e,t,n,i,s,2)):o===2&&FA(r,e,t,n,i,s):xa(fr(r),e,t,n,i,s,1);break}}}function IA(r){const e=r.prev,t=r,n=r.next;if(Ut(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Hr(i,a,s,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function NA(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ut(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=fu(f,g,e,t,n),x=fu(_,p,e,t,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=m&&M&&M.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hr(a,h,l,u,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Hr(a,h,l,u,c,d,M.x,M.y)&&Ut(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hr(a,h,l,u,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Hr(a,h,l,u,c,d,M.x,M.y)&&Ut(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function UA(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!dc(i,s)&&Lg(i,n,n.next,s)&&ya(i,s)&&ya(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ma(n),Ma(n.next),n=r=s),n=n.next}while(n!==r);return fr(n)}function FA(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jA(o,a)){let l=Dg(o,a);o=fr(o,o.next),l=fr(l,l.next),xa(o,e,t,n,i,s,0),xa(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function OA(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Rg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(WA(c));for(i.sort(BA),s=0;s<i.length;s++)t=zA(i[s],t);return t}function BA(r,e){return r.x-e.x}function zA(r,e){const t=kA(r,e);if(!t)return e;const n=Dg(t,r);return fr(n,n.next),fr(t,t.next)}function kA(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Hr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),ya(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&GA(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function GA(r,e){return Ut(r.prev,r,e.prev)<0&&Ut(e.next,r,r.next)<0}function HA(r,e,t,n){let i=r;do i.z===0&&(i.z=fu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,VA(i)}function VA(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function fu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function WA(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function jA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!XA(r,e)&&(ya(r,e)&&ya(e,r)&&qA(r,e)&&(Ut(r.prev,r,e.prev)||Ut(r,e.prev,e))||dc(r,e)&&Ut(r.prev,r,r.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function dc(r,e){return r.x===e.x&&r.y===e.y}function Lg(r,e,t,n){const i=ml(Ut(r,e,t)),s=ml(Ut(r,e,n)),o=ml(Ut(t,n,r)),a=ml(Ut(t,n,e));return!!(i!==s&&o!==a||i===0&&pl(r,t,e)||s===0&&pl(r,n,e)||o===0&&pl(t,r,n)||a===0&&pl(t,e,n))}function pl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ml(r){return r>0?1:r<0?-1:0}function XA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Lg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ya(r,e){return Ut(r.prev,r,r.next)<0?Ut(r,e,r.next)>=0&&Ut(r,r.prev,e)>=0:Ut(r,e,r.prev)<0||Ut(r,r.next,e)<0}function qA(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Dg(r,e){const t=new pu(r.i,r.x,r.y),n=new pu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Sp(r,e,t,n){const i=new pu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ma(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function pu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function YA(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class $r{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return $r.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];wp(e),bp(n,e);let o=e.length;t.forEach(wp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,bp(n,t[l]);const a=DA.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function wp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ld extends ut{constructor(e=new Pl([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:$A;let v,M=!1,P,A,T,E;m&&(v=m.getSpacedPoints(h),M=!0,d=!1,P=m.computeFrenetFrames(h,!1),A=new I,T=new I,E=new I),d||(p=0,f=0,g=0,_=0);const D=a.extractPoints(c);let y=D.shape;const S=D.holes;if(!$r.isClockWise(y)){y=y.reverse();for(let J=0,L=S.length;J<L;J++){const he=S[J];$r.isClockWise(he)&&(S[J]=he.reverse())}}const U=$r.triangulateShape(y,S),F=y;for(let J=0,L=S.length;J<L;J++){const he=S[J];y=y.concat(he)}function j(J,L,he){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(L,he)}const N=y.length,$=U.length;function X(J,L,he){let le,ie,ue;const De=J.x-L.x,xe=J.y-L.y,R=he.x-J.x,w=he.y-J.y,H=De*De+xe*xe,K=De*w-xe*R;if(Math.abs(K)>Number.EPSILON){const Q=Math.sqrt(H),Z=Math.sqrt(R*R+w*w),Ce=L.x-xe/Q,fe=L.y+De/Q,Se=he.x-w/Z,it=he.y+R/Z,se=((Se-Ce)*w-(it-fe)*R)/(De*w-xe*R);le=Ce+De*se-J.x,ie=fe+xe*se-J.y;const we=le*le+ie*ie;if(we<=2)return new te(le,ie);ue=Math.sqrt(we/2)}else{let Q=!1;De>Number.EPSILON?R>Number.EPSILON&&(Q=!0):De<-Number.EPSILON?R<-Number.EPSILON&&(Q=!0):Math.sign(xe)===Math.sign(w)&&(Q=!0),Q?(le=-xe,ie=De,ue=Math.sqrt(H)):(le=De,ie=xe,ue=Math.sqrt(H/2))}return new te(le/ue,ie/ue)}const ae=[];for(let J=0,L=F.length,he=L-1,le=J+1;J<L;J++,he++,le++)he===L&&(he=0),le===L&&(le=0),ae[J]=X(F[J],F[he],F[le]);const re=[];let de,Ne=ae.concat();for(let J=0,L=S.length;J<L;J++){const he=S[J];de=[];for(let le=0,ie=he.length,ue=ie-1,De=le+1;le<ie;le++,ue++,De++)ue===ie&&(ue=0),De===ie&&(De=0),de[le]=X(he[le],he[ue],he[De]);re.push(de),Ne=Ne.concat(de)}for(let J=0;J<p;J++){const L=J/p,he=f*Math.cos(L*Math.PI/2),le=g*Math.sin(L*Math.PI/2)+_;for(let ie=0,ue=F.length;ie<ue;ie++){const De=j(F[ie],ae[ie],le);me(De.x,De.y,-he)}for(let ie=0,ue=S.length;ie<ue;ie++){const De=S[ie];de=re[ie];for(let xe=0,R=De.length;xe<R;xe++){const w=j(De[xe],de[xe],le);me(w.x,w.y,-he)}}}const ke=g+_;for(let J=0;J<N;J++){const L=d?j(y[J],Ne[J],ke):y[J];M?(T.copy(P.normals[0]).multiplyScalar(L.x),A.copy(P.binormals[0]).multiplyScalar(L.y),E.copy(v[0]).add(T).add(A),me(E.x,E.y,E.z)):me(L.x,L.y,0)}for(let J=1;J<=h;J++)for(let L=0;L<N;L++){const he=d?j(y[L],Ne[L],ke):y[L];M?(T.copy(P.normals[J]).multiplyScalar(he.x),A.copy(P.binormals[J]).multiplyScalar(he.y),E.copy(v[J]).add(T).add(A),me(E.x,E.y,E.z)):me(he.x,he.y,u/h*J)}for(let J=p-1;J>=0;J--){const L=J/p,he=f*Math.cos(L*Math.PI/2),le=g*Math.sin(L*Math.PI/2)+_;for(let ie=0,ue=F.length;ie<ue;ie++){const De=j(F[ie],ae[ie],le);me(De.x,De.y,u+he)}for(let ie=0,ue=S.length;ie<ue;ie++){const De=S[ie];de=re[ie];for(let xe=0,R=De.length;xe<R;xe++){const w=j(De[xe],de[xe],le);M?me(w.x,w.y+v[h-1].y,v[h-1].x+he):me(w.x,w.y,u+he)}}}q(),ne();function q(){const J=i.length/3;if(d){let L=0,he=N*L;for(let le=0;le<$;le++){const ie=U[le];Fe(ie[2]+he,ie[1]+he,ie[0]+he)}L=h+p*2,he=N*L;for(let le=0;le<$;le++){const ie=U[le];Fe(ie[0]+he,ie[1]+he,ie[2]+he)}}else{for(let L=0;L<$;L++){const he=U[L];Fe(he[2],he[1],he[0])}for(let L=0;L<$;L++){const he=U[L];Fe(he[0]+N*h,he[1]+N*h,he[2]+N*h)}}n.addGroup(J,i.length/3-J,0)}function ne(){const J=i.length/3;let L=0;be(F,L),L+=F.length;for(let he=0,le=S.length;he<le;he++){const ie=S[he];be(ie,L),L+=ie.length}n.addGroup(J,i.length/3-J,1)}function be(J,L){let he=J.length;for(;--he>=0;){const le=he;let ie=he-1;ie<0&&(ie=J.length-1);for(let ue=0,De=h+p*2;ue<De;ue++){const xe=N*ue,R=N*(ue+1),w=L+le+xe,H=L+ie+xe,K=L+ie+R,Q=L+le+R;Ue(w,H,K,Q)}}}function me(J,L,he){l.push(J),l.push(L),l.push(he)}function Fe(J,L,he){We(J),We(L),We(he);const le=i.length/3,ie=x.generateTopUV(n,i,le-3,le-2,le-1);Je(ie[0]),Je(ie[1]),Je(ie[2])}function Ue(J,L,he,le){We(J),We(L),We(le),We(L),We(he),We(le);const ie=i.length/3,ue=x.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);Je(ue[0]),Je(ue[1]),Je(ue[3]),Je(ue[1]),Je(ue[2]),Je(ue[3])}function We(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Je(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return KA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new uu[i.type]().fromJSON(i)),new Ld(n,e.options)}}const $A={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new te(s,o),new te(a,l),new te(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-u),new te(d,1-g),new te(_,1-m)]:[new te(a,1-l),new te(h,1-u),new te(f,1-g),new te(p,1-m)]}};function KA(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sa extends uc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sa(e.radius,e.detail)}}class Dd extends uc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dd(e.radius,e.detail)}}class Qn extends ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+M,1-v),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=h[m][x+1],M=h[m][x],P=h[m+1][x],A=h[m+1][x+1];(m!==0||o>0)&&f.push(v,M,A),(m!==n-1||l<Math.PI)&&f.push(M,P,A)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vr extends ut{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new I,d=new I,f=new I,g=new I,_=new I,p=new I,m=new I;for(let v=0;v<=n;++v){const M=v/n*s*Math.PI*2;x(M,s,o,e,f),x(M+.01,s,o,e,g),p.subVectors(g,f),m.addVectors(g,f),_.crossVectors(p,m),m.crossVectors(_,p),_.normalize(),m.normalize();for(let P=0;P<=i;++P){const A=P/i*Math.PI*2,T=-t*Math.cos(A),E=t*Math.sin(A);u.x=f.x+(T*m.x+E*_.x),u.y=f.y+(T*m.y+E*_.y),u.z=f.z+(T*m.z+E*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(P/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){const P=(i+1)*(v-1)+(M-1),A=(i+1)*v+(M-1),T=(i+1)*v+M,E=(i+1)*(v-1)+M;a.push(P,A,E),a.push(A,T,E)}this.setIndex(a),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2));function x(v,M,P,A,T){const E=Math.cos(v),D=Math.sin(v),y=P/M*v,S=Math.cos(y);T.x=A*(2+S)*.5*E,T.y=A*(2+S)*D*.5,T.z=A*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Jt extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ZA extends ci{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class JA extends ci{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function gl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function QA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function eE(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Ig(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tE extends Na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zr,endingEnd:zr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kr:s=e,a=2*t-n;break;case Gl:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kr:o=e,l=2*n-t;break;case Gl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let P=0;P!==a;++P)s[P]=m*o[h+P]+x*o[c+P]+v*o[l+P]+M*o[u+P];return s}}class Ng extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class nE extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&QA(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=_a;class Go extends Vi{constructor(e,t,n){super(e,t,n)}}Go.prototype.ValueTypeName="bool";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=ga;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class Ug extends Vi{}Ug.prototype.ValueTypeName="color";class Eo extends Vi{}Eo.prototype.ValueTypeName="number";class iE extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)$n.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Co extends Vi{InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}}Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Vi{constructor(e,t,n){super(e,t,n)}}Ho.prototype.ValueTypeName="string";Ho.prototype.ValueBufferType=Array;Ho.prototype.DefaultInterpolation=ga;Ho.prototype.InterpolantFactoryMethodLinear=void 0;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Vi{}Po.prototype.ValueTypeName="vector";class mu{constructor(e="",t=-1,n=[],i=md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rE(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Vi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=eE(l);l=Tp(l,1,h),c=Tp(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Eo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];Ig(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Eo(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Po,f+".position",d,"pos",i),n(Co,f+".quaternion",d,"rot",i),n(Po,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Po;case"color":return Ug;case"quaternion":return Co;case"bool":case"boolean":return Go;case"string":return Ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function rE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sE(r.type);if(r.times===void 0){const t=[],n=[];Ig(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const oE=new Fg;class Wi{constructor(e){this.manager=e!==void 0?e:oE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class aE extends Error{constructor(e,t){super(e),this.response=t}}class Ro extends Wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:M})=>{if(v)m.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const E=h[A];E.onProgress&&E.onProgress(P)}m.enqueue(M),x()}},v=>{m.error(v)})}}});return new Response(p)}else throw new aE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bs.add(e,c);const h=Zi[e];delete Zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Og extends Wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=va("img");function l(){h(),bs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Id extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=new xd;s.colorSpace=tt;const o=new Og(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class lE extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new bd,a=new Ro(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Li,o.wrapT=c.wrapT!==void 0?c.wrapT:Li,o.magFilter=c.magFilter!==void 0?c.magFilter:sn,o.minFilter=c.minFilter!==void 0?c.minFilter:sn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Si),c.mipmapCount===1&&(o.minFilter=sn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class _n extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=new rn,o=new Og(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cE extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ih=new Xe,Ap=new I,Ep=new I;class Nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ap),Ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ep),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends Nd{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ud extends Vo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new hE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cp=new Xe,Jo=new I,sh=new I;class uE extends Nd{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jo),sh.copy(n.position),sh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sh),n.updateMatrixWorld(),i.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Cp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp)}}class sr extends Vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dE extends Nd{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fi extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new dE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xr extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fE extends Vo{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ua{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pE extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bs.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bs.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),bs.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});bs.add(e,l),s.manager.itemStart(e)}}class mE{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$n.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;$n.multiplyQuaternionsFlat(e,o,e,t,e,n),$n.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Fd="\\[\\]\\.:\\/",gE=new RegExp("["+Fd+"]","g"),Od="[^"+Fd+"]",_E="[^"+Fd.replace("\\.","")+"]",vE=/((?:WC+[\/:])*)/.source.replace("WC",Od),xE=/(WCOD+)?/.source.replace("WCOD",_E),yE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),ME=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),SE=new RegExp("^"+vE+xE+yE+ME+"$"),wE=["material","materials","bones","map"];class bE{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gE,"")}static parseTrackName(e){const t=SE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);wE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=bE;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class TE{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:zr,endingEnd:zr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=SM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case bM:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case md:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===wM;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===MM){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=kr,i.endingEnd=kr):(e?i.endingStart=this.zeroSlopeAtStart?kr:zr:i.endingStart=Gl,t?i.endingEnd=this.zeroSlopeAtEnd?kr:zr:i.endingEnd=Gl)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const AE=new Float32Array(1);class Bg extends Os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new mE(pt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ng(new Float32Array(2),new Float32Array(2),1,AE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?mu.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=md),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new TE(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?mu.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class je{constructor(e){this.value=e}clone(){return new je(this.value.clone===void 0?this.value:this.value.clone())}}const Pp=new Xe;class zg{constructor(e,t,n=0,i=1/0){this.ray=new Bo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pp),this}intersectObject(e,t=!0,n=[]){return gu(e,this,n,t),n.sort(Rp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)gu(e[i],this,n,t);return n.sort(Rp),n}}function Rp(r,e){return r.distance-e.distance}function gu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)gu(s[o],e,t,!0)}}class $l{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lp=new I;class EE extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ut,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ze(i,3));const s=new ko({fog:!1,toneMapped:!1});this.cone=new Ad(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Lp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Lp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class CE extends ce{constructor(e,t,n){const i=new Qn(t,4,2),s=new St({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const PE=new I,Dp=new ge,Ip=new ge;class RE extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Dd(t);i.rotateY(Math.PI*.5),this.material=new St({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new at(o,3)),this.add(new ce(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Dp.copy(this.light.color),Ip.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Dp:Ip;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(PE.setFromMatrixPosition(this.light.matrixWorld).negate())}}const Np=new I,_l=new I,Up=new I;class LE extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ut;i.setAttribute("position",new Ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new ko({fog:!1,toneMapped:!1});this.lightPlane=new Ao(i,s),this.add(this.lightPlane),i=new ut,i.setAttribute("position",new Ze([0,0,0,0,0,1],3)),this.targetLine=new Ao(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Np.setFromMatrixPosition(this.light.matrixWorld),_l.setFromMatrixPosition(this.light.target.matrixWorld),Up.subVectors(_l,Np),this.lightPlane.lookAt(_l),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_l),this.targetLine.scale.z=Up.length()}}class DE extends Ad{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ut;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const s=new ko({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ge,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IE{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new du,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let v=0,M=m.length;v<M;v++){const P=m[v],A=new Pl;A.curves=P.curves,x.push(A)}return x}function n(m,x){const v=x.length;let M=!1;for(let P=v-1,A=0;A<v;P=A++){let T=x[P],E=x[A],D=E.x-T.x,y=E.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=x[A],D=-D,E=x[P],y=-y),m.y<T.y||m.y>E.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const S=y*(m.x-T.x)-D*(m.y-T.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(m.y!==T.y)continue;if(E.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=E.x)return!0}}return M}const i=$r.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Pl,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,_;d[g]=void 0,f[g]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new Pl,p:_},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,x=0;for(let v=0,M=d.length;v<M;v++)u[v]=[];for(let v=0,M=d.length;v<M;v++){const P=f[v];for(let A=0;A<P.length;A++){const T=P[A];let E=!0;for(let D=0;D<d.length;D++)n(T.p,d[D].p)&&(v!==D&&x++,E?(E=!1,u[D].push(T)):m=!0);E&&u[v].push(T)}}x>0&&m===!1&&(f=u)}let p;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),p=f[m];for(let v=0,M=p.length;v<M;v++)l.holes.push(p[v].h)}return c}}class NE extends Os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);const Fp={type:"change"},Bd={type:"start"},kg={type:"end"},vl=new Bo,Op=new Ss,UE=Math.cos(70*Xl.DEG2RAD),nn=new I,Ln=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rh=1e-6;class Gg extends NE{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new $n,this._lastTargetPosition=new I,this._quat=new $n().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $l,this._sphericalDelta=new $l,this._scale=1,this._panOffset=new I,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new I,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OE.bind(this),this._onPointerDown=FE.bind(this),this._onPointerUp=BE.bind(this),this._onContextMenu=jE.bind(this),this._onMouseWheel=GE.bind(this),this._onKeyDown=HE.bind(this),this._onTouchStart=VE.bind(this),this._onTouchMove=WE.bind(this),this._onMouseDown=zE.bind(this),this._onMouseMove=kE.bind(this),this._interceptControlDown=XE.bind(this),this._interceptControlUp=qE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fp),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=nn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<UE?this.object.lookAt(this.target):(Op.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(Op,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rh||this._lastTargetPosition.distanceToSquared(this.target)>rh?(this.dispatchEvent(Fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;nn.copy(i).sub(this.target);let s=nn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function FE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function OE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function BE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kg),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=vt.DOLLY;break;case jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=vt.ROTATE}break;case jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Bd)}function kE(r){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function GE(r){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(r.preventDefault(),this.dispatchEvent(Bd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(kg))}function HE(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function VE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=vt.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=vt.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Bd)}function WE(r){switch(this._trackPointer(r),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=vt.NONE}}function jE(r){this.enabled!==!1&&r.preventDefault()}function XE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Ni{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ni.nextNameID=Ni.nextNameID||0,this.$name.id=`lil-gui-name-${++Ni.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class YE extends Ni{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _u(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $E={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:_u,toHexString:_u},wa={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},KE={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=wa.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return wa.toHexString(i)}},ZE={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=wa.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return wa.toHexString(i)}},JE=[$E,wa,KE,ZE];function QE(r){return JE.find(e=>e.match(r))}class eC extends Ni{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=QE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=_u(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oh extends Ni{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class tC extends Ni{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,u;const d=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-a,M=x.clientY-l;Math.abs(M)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=x.clientY-c;u-=v*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,x,v,M,P)=>(m-x)/(v-x)*(P-M)+M,t=m=>{const x=this.$slider.getBoundingClientRect();let v=e(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(o){const x=m.touches[0].clientX-a,v=m.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const v=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class nC extends Ni{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class iC extends Ni{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const sC=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function rC(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Bp=!1;class zd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Bp&&a&&(rC(sC),Bp=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new nC(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new tC(this,e,t,n,i,s);case"boolean":return new YE(this,e,t);case"string":return new iC(this,e,t);case"function":return new oh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new eC(this,e,t,n)}addFolder(e){const t=new zd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof oh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof oh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}let oC=class{get number(){throw new Error("Lesson class must implement a getter for `number` property")}get title(){throw new Error("Lesson class must implement a getter for `title` property")}get link(){throw new Error("Lesson class must implement a getter for `link` property")}open(){throw new Error("Lesson class must implement an `open` method that implements current lesson logic")}close(){throw new Error("Lesson class must implement `close` method that release resources used by the lesson implementation")}};var to,no,io,Ht,Hg,Vg,Wg,jg,Xg,qg,Yg,$g,Kg,Zg;class et extends oC{constructor(){super(...arguments);Ee(this,Ht);O(this,"object3d",null);O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"guiControl");O(this,"control");O(this,"canvas");O(this,"hasGuiTweaks");O(this,"hasAnimation");Ee(this,to);Ee(this,no);Ee(this,io)}update(t){throw new Error("General lesson class with animations must implement an `update` method that implements current lesson logic")}animate(t=0){this.update(t),this.renderer.render(this.scene,this.camera),It(this,to,requestAnimationFrame(this.animate.bind(this)))}open(){this.init(),document.body.appendChild(this.canvas),this.hasAnimation&&this.animate()}close(){document.body.removeChild(this.canvas),this.dispose(),Re(this,to)&&cancelAnimationFrame(Re(this,to))}init(){b(this,Ht,Zg).call(this),this.initScene(),this.initCamera(),this.initRenderer(),this.initControl(),this.initGuiControl(),this.hasGuiTweaks&&this.guiControl.show(!0)}initScene(){this.scene=new hA}initCamera(){this.camera=new yn(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.scene.add(this.camera)}initRenderer(){let t=!1;window.devicePixelRatio<=1&&(t=!0),this.renderer=new cA({canvas:this.canvas,antialias:t}),this.resizeRenderer(),It(this,io,this.resizeRenderer.bind(this)),window.addEventListener("resize",Re(this,io))}initControl(){this.control=new Gg(this.camera,this.canvas),this.control.enableDamping=!0}initGuiControl(){this.guiControl=new zd({width:300,title:"GUI"}),this.guiControl.hide(),It(this,no,b(this,Ht,Kg).bind(this)),document.addEventListener("keydown",Re(this,no))}resizeRenderer(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(this.scene,this.camera)}dispose(){b(this,Ht,Hg).call(this),this.scene=null,this.camera=null,this.object3d=null,this.renderer=null,this.control=null,this.guiControl=null,this.canvas=null}}to=new WeakMap,no=new WeakMap,io=new WeakMap,Ht=new WeakSet,Hg=function(){b(this,Ht,Vg).call(this),b(this,Ht,Xg).call(this),b(this,Ht,qg).call(this),b(this,Ht,Yg).call(this),b(this,Ht,$g).call(this)},Vg=function(){this.scene.traverse(t=>{t.isMesh&&(b(this,Ht,Wg).call(this,t),b(this,Ht,jg).call(this,t))})},Wg=function(t){t.geometry&&t.geometry.dispose()},jg=function(t){if(t.material){for(const n in t.material){const i=t.material[n];i&&typeof i.dispose=="function"&&i.dispose()}t.material.dispose()}},Xg=function(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])},qg=function(){this.renderer.dispose(),window.removeEventListener("resize",Re(this,io))},Yg=function(){this.control.dispose()},$g=function(){this.guiControl.destroy(),document.removeEventListener("keydown",Re(this,no))},Kg=function(t){t.code==="KeyH"&&this.guiControl.show(this.guiControl._hidden)},Zg=function(){this.canvas=document.createElement("canvas")};let aC=class extends et{get number(){return"03"}get title(){return"First Three.js Project"}get link(){return"https://threejs-journey.com/lessons/first-threejs-project"}init(){super.init();const e=new en(1,1,1),t=new St({color:16711680});this.object3d=new ce(e,t),this.scene.add(this.object3d),this.renderer.render(this.scene,this.camera)}},lC=class extends et{get number(){return"04"}get title(){return"Transform objects"}get link(){return"https://threejs-journey.com/lessons/transform-objects"}init(){super.init();const e=new DE(6);this.scene.add(e),this.object3d=new wi,this.object3d.scale.y=2,this.object3d.scale.x=.5,this.object3d.rotation.y=Math.PI*.25,this.scene.add(this.object3d);const t=new en(1,1,1),n=new St({color:16711680}),i=new ce(t,n);i.position.x=-1.5,this.object3d.add(i);const s=new en(1,1,1),o=new St({color:65280}),a=new ce(s,o);a.position.x=0,this.object3d.add(a);const l=new en(1,1,1),c=new St({color:255}),h=new ce(l,c);h.position.x=1.5,this.object3d.add(h),this.camera.lookAt(i.position),this.renderer.render(this.scene,this.camera)}};function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},kd,wn,Dt,oi=1e8,Tt=1/oi,vu=Math.PI*2,cC=vu/4,hC=0,Qg=Math.sqrt,uC=Math.cos,dC=Math.sin,dn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},cs=function(e){return typeof e=="number"},Gd=function(e){return typeof e>"u"},Oi=function(e){return typeof e=="object"},In=function(e){return e!==!1},Hd=function(){return typeof window<"u"},xl=function(e){return Gt(e)||dn(e)},e_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,xu=/(?:-?\.?\d|\.)+/gi,t_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ah=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n_=/[+-]=-?[.\d]+/,i_=/[^,'"\[\]\s]+/gi,fC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Ei,yu,Vd,Zn={},Kl={},s_,r_=function(e){return(Kl=pr(e,Zn))&&Bn},Wd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ba=function(e,t){return!t&&console.warn(e)},o_=function(e,t){return e&&(Zn[e]=t)&&Kl&&(Kl[e]=t)||Zn},Ta=function(){return 0},pC={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},mC={suppressEvents:!0},jd={},Ps=[],Mu={},a_,Xn={},lh={},zp=30,Ll=[],Xd="",qd=function(e){var t=e[0],n,i;if(Oi(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(t););n=Ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new L_(e[i],n)))||e.splice(i,1);return e},ar=function(e){return e._gsap||qd(ai(e))[0]._gsap},l_=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():Gd(n)&&e.getAttribute&&e.getAttribute(t)||n},Nn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},un=function(e){return Math.round(e*1e7)/1e7||0},Kr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gC=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zl=function(){var e=Ps.length,t=Ps.slice(0),n,i;for(Mu={},Ps.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},c_=function(e,t,n,i){Ps.length&&!wn&&Zl(),e.render(t,n,wn&&t<0&&(e._initted||e._startAt)),Ps.length&&!wn&&Zl()},h_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(i_).length<2?t:dn(e)?e.trim():e},u_=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_C=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},pr=function(e,t){for(var n in t)e[n]=t[n];return e},kp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Oi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Jl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},da=function(e){var t=e.parent||Nt,n=e.keyframes?_C(bn(e.keyframes)):hi;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},d_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},fc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Su=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(Rl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yC=function r(e){return!e||e._ts&&r(e.parent)},Gp=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pc=function(e){return e._end=un(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},mc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=un(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pc(e),n._dirty||lr(n,e)),e},f_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ql(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ri=function(e,t,n,i){return t.parent&&Ls(t),t._start=un((cs(n)?n:n||e!==Nt?ni(e,n,t):e._time)+t._delay),t._end=un(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),d_(e,t,"_first","_last",e._sort?"_start":0),wu(t)||(e._recent=t),i||f_(e,t),e._ts<0&&mc(e,e._tTime),e},p_=function(e,t){return(Zn.ScrollTrigger||Wd("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},m_=function(e,t,n,i,s){if($d(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&a_!==qn.frame)return Ps.push(e),e._lazy=[s,i],1},MC=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},SC=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&MC(e)&&!(!e._initted&&wu(e))||(e._ts<0||e._dp._ts<0)&&!wu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Ua(0,e._tDur,t),h=Do(l,a),e._yoyo&&h&1&&(o=1-o),h!==Do(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&m_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Su(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ls(e,1),!n&&!wn&&(Yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Io=function(e,t,n,i){var s=e._repeat,o=un(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:un(o*(s+1)+e._rDelay*s):o,a>0&&!i&&mc(e,e._tTime=e._tDur*a),e.parent&&pc(e),n||lr(e.parent,e),e},Hp=function(e){return e instanceof Cn?lr(e):Io(e,e._dur)},bC={_start:0,endTime:Ta,totalDuration:Ta},ni=function r(e,t,n){var i=e.labels,s=e._recent||bC,o=e.duration()>=oi?s.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},fa=function(e,t,n){var i=cs(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;o.immediateRender=In(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},zs=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!dn(e)||!(t=fC.exec(e))?"":t[1]},TC=function(e,t,n){return zs(n,function(i){return Ua(e,t,i)})},bu=[].slice,g_=function(e,t){return e&&Oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oi(e[0]))&&!e.nodeType&&e!==Ei},AC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return dn(i)&&!t||g_(i,1)?(s=n).push.apply(s,ai(i)):n.push(i)})||n},ai=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):dn(e)&&!n&&(yu||!No())?bu.call((t||Vd).querySelectorAll(e),0):bn(e)?AC(e,n):g_(e)?bu.call(e,0):e?[e]:[]},Tu=function(e){return e=ai(e)[0]||ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ai(t,n.querySelectorAll?n:n===e?ba("Invalid scope")||Vd.createElement("div"):e)}},__=function(e){return e.sort(function(){return .5-Math.random()})},v_=function(e){if(Gt(e))return e;var t=Oi(e)?e:{each:e},n=cr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return dn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,p=o[_],m,x,v,M,P,A,T,E,D;if(!p){if(D=t.grid==="auto"?0:(t.grid||[1,oi])[1],!D){for(T=-oi;T<(T=g[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(p=o[_]=[],m=l?Math.min(D,_)*h-.5:i%D,x=D===oi?0:l?_*u/D-.5:i/D|0,T=0,E=oi,A=0;A<_;A++)v=A%D-m,M=x-(A/D|0),p[A]=P=c?Math.abs(c==="y"?M:v):Qg(v*v+M*M),P>T&&(T=P),P<E&&(E=P);i==="random"&&__(p),p.max=T-E,p.min=E,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:c?c==="y"?_/D:D:Math.max(D,_/D))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Sn(t.amount||t.each)||0,n=n&&_<0?C_(n):n}return _=(p[d]-p.min)/p.max||0,un(p.b+(n?n(_):_)*p.v)+p.u}},Au=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=un(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(cs(n)?0:Sn(n))}},x_=function(e,t){var n=bn(e),i,s;return!n&&Oi(e)&&(i=n=e.radius||oi,e.values?(e=ai(e.values),(s=!cs(e[0]))&&(i*=i)):e=Au(e.increment)),zs(t,n?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=oi,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||cs(o)?h:h+Sn(o)}:Au(e))},y_=function(e,t,n,i){return zs(bn(e)?!t:n===!0?!!(n=0):!i,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},EC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},CC=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},PC=function(e,t,n){return S_(e,t,0,1,n)},M_=function(e,t,n){return zs(n,function(i){return e[~~t(i)]})},RC=function r(e,t,n){var i=t-e;return bn(e)?M_(e,r(0,e.length),t):zs(n,function(s){return(i+(s-e)%i)%i+e})},LC=function r(e,t,n){var i=t-e,s=i*2;return bn(e)?M_(e,r(0,e.length-1),t):zs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Aa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?i_:xu),n+=e.substr(t,i-t)+y_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},S_=function(e,t,n,i,s){var o=t-e,a=i-n;return zs(s,function(l){return n+((l-e)/o*a||0)})},DC=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=dn(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=pr(bn(e)?[]:{},e));if(!h){for(l in t)Yd.call(a,e,l,"get",t[l]);s=function(g){return Jd(g,a)||(o?e.p:e)}}}return zs(n,s)},Vp=function(e,t,n){var i=e.labels,s=oi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Yn=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ps.length&&Zl(),a&&(Dt=a),h=l?s.apply(c,l):s.call(c),Dt=o,h},ia=function(e){return Ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&Yn(e,"onInterrupt"),e},Wr,w_=[],b_=function(e){if(e)if(e=!e.name&&e.default||e,Hd()||e.headless){var t=e.name,n=Gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:Jd,add:Yd,kill:YC,modifier:qC,rawVars:0},o={targetTest:0,get:0,getSetter:Zd,aliases:{},register:0};if(No(),e!==i){if(Xn[t])return;hi(i,hi(Jl(e,s),o)),pr(i.prototype,pr(s,Jl(e,o))),Xn[i.prop=t]=i,e.targetTest&&(Ll.push(i),jd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o_(t,i),e.register&&e.register(Bn,i,Un)}else w_.push(e)},yt=255,sa={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},ch=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},T_=function(e,t,n){var i=e?cs(e)?[e>>16,e>>8&yt,e&yt]:0:sa.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(xu),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ch(l+1/3,s,o),i[1]=ch(l,s,o),i[2]=ch(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(t_),n&&i.length<4&&(i[3]=1),i}else i=e.match(xu)||sa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/yt,o=i[1]/yt,a=i[2]/yt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},A_=function(e){var t=[],n=[],i=-1;return e.split(Rs).forEach(function(s){var o=s.match(Vr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Wp=function(e,t,n){var i="",s=(e+i).match(Rs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=T_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=A_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Rs,"1").split(Vr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Rs),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Rs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),IC=/hsl[a]?\(/,E_=function(e){var t=e.join(" "),n;if(Rs.lastIndex=0,Rs.test(t))return n=IC.test(t),e[1]=Wp(e[1],n),e[0]=Wp(e[0],n,A_(e[1])),!0},Ea,qn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(p){var m=r()-i,x=p===!0,v,M,P,A;if((m>e||m<0)&&(n+=m-t),i+=m,P=i-n,v=P-o,(v>0||x)&&(A=++u.frame,d=P-u.time*1e3,u.time=P=P/1e3,o+=v+(v>=s?4:s-v),M=1),x||(l=c(_)),M)for(f=0;f<a.length;f++)a[f](P,d,A,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){s_&&(!yu&&Hd()&&(Ei=yu=window,Vd=Ei.document||{},Zn.gsap=Bn,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(Bn.version),r_(Kl||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),w_.forEach(b_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Ea=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ea=0,c=Ta},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,x){var v=m?function(M,P,A,T){p(M,P,A,T),u.remove(v)}:p;return u.remove(p),a[x?"unshift":"push"](v),No(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),No=function(){return!Ea&&qn.wake()},nt={},NC=/^[\d.\-M][\d.\-,\s]/,UC=/["']/g,FC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(UC,"").trim():+c,i=l.substr(a+1).trim();return t},OC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BC=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[FC(t[1])]:OC(e).split(",").map(h_)):nt._CE&&NC.test(e)?nt._CE("",e):n},C_=function(e){return function(t){return 1-e(1-t)}},P_=function r(e,t){for(var n=e._first,i;n;)n instanceof Cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},cr=function(e,t){return e&&(Gt(e)?e:nt[e]||BC(e))||t},yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Nn(e,function(a){nt[a]=Zn[a]=s,nt[o=a.toLowerCase()]=n;for(var l in s)nt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[a+"."+l]=s[l]}),s},R_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*dC((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:R_(a);return s=vu/s,l.config=function(c,h){return r(e,c,h)},l},uh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:R_(n);return i.config=function(s){return r(e,s)},i};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;yr("Elastic",hh("in"),hh("out"),hh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});yr("Circ",function(r){return-(Qg(1-r*r)-1)});yr("Sine",function(r){return r===1?1:-uC(r*cC)+1});yr("Back",uh("in"),uh("out"),uh());nt.SteppedEase=nt.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*Ua(0,o,a)|0)+s)*n}}};Lo.ease=nt["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xd+=r+","+r+"Params,"});var L_=function(e,t){this.id=hC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:l_,this.set=t?t.getSetter:Zd},Ca=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Io(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Ea||qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(No(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mc(this,n),!s._dp||s.parent||f_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),c_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Do(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this._tDur,s),i!==!1),pc(this),xC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ql(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mC);var i=wn;return wn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Gt(n)?n:u_,a=function(){var c=i.then;i.then=null,Gt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ia(this)},r}();hi(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Cn=function(r){Jg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Nt&&Ri(n.parent||Nt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&p_(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return fa(0,arguments,this),this},t.from=function(i,s,o){return fa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return fa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ni(this,o),1),this},t.call=function(i,s,o){return Ri(this,Kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Kt(i,o,ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,da(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,da(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:un(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,x,v,M,P,A,T;if(this!==Nt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,v=this._ts,m=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=un(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),P=Do(this._tTime,p),!a&&this._tTime&&P!==_&&this._tTime-P*p-this._dur<=0&&(P=_),A&&_&1&&(d=c-d,T=1),_!==P&&!this._lock){var E=A&&P&1,D=E===(A&&_&1);if(_<P&&(E=!E),a=E?0:h%c?c:h,this._lock=1,this.render(a||(T?0:un(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,D&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;P_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=wC(this,un(a),un(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Yn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=-Tt);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||wn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=y?-Tt:Tt);break}}f=g}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Tt)._zTime=d>=a?1:-1,this._ts))return this._start=M,pc(this),this.render(i,s,o);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Yn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(cs(s)||(s=ni(this,s,i)),!(i instanceof Ca)){if(bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(dn(i))return this.addLabel(i,s);if(Gt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-oi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return dn(i)?this.removeLabel(i):Gt(i)?this.killTweensOf(i):(fc(this,i),i===this._recent&&(this._recent=this._last),lr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Kt.delayedCall(0,s||Ta,o);return a.data="isPause",this._hasPause=1,Ri(this,a,ni(this,i))},t.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&Ls(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ts!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ai(i),l=this._first,c=cs(s),h;l;)l instanceof Kt?gC(l._targets,a)&&(c?(!Ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Kt.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Io(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,hi({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vp(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vp(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return lr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),lr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=oi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Io(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(c_(Nt,Ql(i,Nt)),a_=qn.frame),qn.frame>=zp){zp+=Kn.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&Kn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e}(Ca);hi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zC=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,O_,null,s),c=0,h=0,u,d,f,g,_,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Aa(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(ah)||[];u=ah.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Kr(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=ah.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(n_.test(i)||m)&&(l.e=0),this._pt=l,l},Yd=function(e,t,n,i,s,o,a,l,c,h){Gt(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:Gt(u)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Gt(u)?c?WC:U_:Kd,g;if(dn(i)&&(~i.indexOf("random(")&&(i=Aa(i)),i.charAt(1)==="="&&(g=Kr(d,i)+(Sn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Eu)return!isNaN(d*i)&&i!==""?(g=new Un(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?XC:F_,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Wd(t,i),zC.call(this,e,t,d,i,f,l||Kn.stringFilter,c))},kC=function(e,t,n,i,s){if(Gt(e)&&(e=pa(e,s,t,n,i)),!Oi(e)||e.style&&e.nodeType||bn(e)||e_(e))return dn(e)?pa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,i);return o},D_=function(e,t,n,i,s,o){var a,l,c,h;if(Xn[e]&&(a=new Xn[e]).init(s,a.rawVars?t[e]:kC(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Wr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ts,Eu,$d=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!kd,M=e.timeline,P,A,T,E,D,y,S,B,U,F,j,N,$;if(M&&(!d||!s)&&(s="none"),e._ease=cr(s,Lo.ease),e._yEase=u?C_(cr(u===!0?s:u,Lo.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(B=p[0]?ar(p[0]).harness:0,N=B&&i[B.prop],P=Jl(i,jd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?Rl:pC),_._lazy=0),o){if(Ls(e._startAt=Kt.set(p,hi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!a&&!f)&&e._startAt.revert(Rl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),T=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&In(l),immediateRender:a,stagger:0,parent:m},P),N&&(T[B.prop]=N),Ls(e._startAt=Kt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Rl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&In(l)||l&&!g,A=0;A<p.length;A++){if(D=p[A],S=D._gsap||qd(p)[A]._gsap,e._ptLookup[A]=F={},Mu[S.id]&&Ps.length&&Zl(),j=x===p?A:x.indexOf(D),B&&(U=new B).init(D,N||P,e,j,x)!==!1&&(e._pt=E=new Un(e._pt,D,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(X){F[X]=E}),U.priority&&(y=1)),!B||N)for(T in P)Xn[T]&&(U=D_(T,P,e,j,D,x))?U.priority&&(y=1):F[T]=E=Yd.call(e,D,T,"get",P[T],j,x,0,i.stringFilter);e._op&&e._op[A]&&e.kill(D,e._op[A]),v&&e._pt&&(Ts=e,Nt.killTweensOf(D,F,e.globalTime(t)),$=!e.parent,Ts=0),e._pt&&l&&(Mu[S.id]=1)}y&&B_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&M.render(oi,!0,!0)},GC=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Eu=1,e.vars[t]="+=0",$d(e,a),Eu=0,l?ba(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Wt(n)+Sn(u.e)),u.b&&(u.b=h.s+Sn(u.b))},HC=function(e,t){var n=e[0]?ar(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=pr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},VC=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,i,s){return Gt(e)?e.call(t,n,i,s):dn(e)&&~e.indexOf("random(")?Aa(e):e},I_=Xd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",N_={};Nn(I_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return N_[r]=1});var Kt=function(r){Jg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:da(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Nt,v=(bn(n)||e_(n)?cs(n[0]):"length"in i)?[n]:ai(n),M,P,A,T,E,D,y,S;if(a._targets=v.length?qd(v):ba("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||xl(c)||xl(h)){if(i=a.vars,M=a.timeline=new Cn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Qi(a),M._start=0,d||xl(c)||xl(h)){if(T=v.length,y=d&&v_(d),Oi(d))for(E in d)~I_.indexOf(E)&&(S||(S={}),S[E]=d[E]);for(P=0;P<T;P++)A=Jl(i,N_),A.stagger=0,m&&(A.yoyoEase=m),S&&pr(A,S),D=v[P],A.duration=+pa(c,Qi(a),P,D,v),A.delay=(+pa(h,Qi(a),P,D,v)||0)-a._delay,!d&&T===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),M.to(D,A,y?y(P,D,v):0),M._ease=nt.none;M.duration()?c=h=0:a.timeline=0}else if(g){da(hi(M.vars.defaults,{ease:"none"})),M._ease=cr(g.ease||i.ease||"none");var B=0,U,F,j;if(bn(g))g.forEach(function(N){return M.to(v,N,">")}),M.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||VC(E,g[E],A,g.easeEach);for(E in A)for(U=A[E].sort(function(N,$){return N.t-$.t}),B=0,P=0;P<U.length;P++)F=U[P],j={ease:F.e,duration:(F.t-(P?U[P-1].t:0))/100*c},j[E]=F.v,M.to(v,j,B),B+=j.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!kd&&(Ts=Qi(a),Nt.killTweensOf(v),Ts=0),Ri(x,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===un(x._time)&&In(u)&&yC(Qi(a))&&x.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-h)||0)),p&&p_(Qi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Tt&&!h?l:i<Tt?0:i,d,f,g,_,p,m,x,v,M;if(!c)SC(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=un(u%_),u===l?(g=this._repeat,d=c):(g=~~(u/_),g&&g===un(u/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,d=c-d),p=Do(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(v&&this._yEase&&P_(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(un(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(m_(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(d/c),this._from&&(this.ratio=x=1-x),d&&!a&&!s&&!g&&(Yn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Su(this,i,s,o),Yn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Su(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ls(this,1),!s&&!(h&&!a)&&(u||a||m)&&(Yn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ea||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$d(this,c),h=this._ease(c/this._dur),GC(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(mc(this,0),this.parent||d_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ts&&Ts.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ai(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,p,m;if((!s||s==="all")&&vC(a,l))return s==="all"&&(this._pt=0),ia(this);for(u=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},Nn(s,function(x){return _[x]=1}),s=_),s=HC(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(u[m]=s,g=d,f={}):(f=u[m]=u[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&fc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&ia(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return fa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return fa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e}(Ca);hi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Cn,t=bu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Kd=function(e,t,n){return e[t]=n},U_=function(e,t,n){return e[t](n)},WC=function(e,t,n,i){return e[t](i.fp,n)},jC=function(e,t,n){return e.setAttribute(t,n)},Zd=function(e,t){return Gt(e[t])?U_:Gd(e[t])&&e.setAttribute?jC:Kd},F_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},XC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},O_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Jd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qC=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},YC=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$C=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},B_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||F_,this.d=l||this,this.set=c||Kd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=$C,this.m=n,this.mt=s,this.tween=i},r}();Nn(Xd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jd[r]=1});Zn.TweenMax=Zn.TweenLite=Kt;Zn.TimelineLite=Zn.TimelineMax=Cn;Nt=new Cn({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=E_;var hr=[],Dl={},KC=[],jp=0,ZC=0,dh=function(e){return(Dl[e]||KC).map(function(t){return t()})},Cu=function(){var e=Date.now(),t=[];e-jp>2&&(dh("matchMediaInit"),hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),dh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jp=e,dh("matchMedia"))},z_=function(){function r(t,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZC++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Gt(n)&&(s=i,i=n,n=Gt);var o=this,a=function(){var c=Dt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tu(s)),Dt=o,u=i.apply(o,arguments),Gt(u)&&o._r.push(u),Dt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=hr.length;o--;)hr[o].id===this.id&&hr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),JC=function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Oi(n)||(n={matches:n});var o=new z_(0,s||this.scope),a=o.conditions={},l,c,h;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(hr.indexOf(o)<0&&hr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cu):l.addEventListener("change",Cu)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return b_(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=ai(e)[0]);var s=ar(e||{}).get,o=n?u_:h_;return n==="native"&&(n=""),e&&(t?o((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ai(e),e.length>1){var i=e.map(function(h){return Bn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Xn[t],a=ar(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Wr._pt=0,u.init(e,n?h+n:h,Wr,0,[e]),u.render(1,u),Wr._pt&&Jd(1,Wr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,pr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cr(e.ease,Lo.ease)),kp(Lo,e||{})},config:function(e){return kp(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!Zn[a]&&ba(t+" effect requires "+a+" plugin.")}),lh[t]=function(a,l,c){return n(ai(a),hi(l||{},s),c)},o&&(Cn.prototype[t]=function(a,l,c){return this.add(lh[t](a,Oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=cr(t)},parseEase:function(e,t){return arguments.length?cr(e,t):nt},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Nt,n,0),n},context:function(e,t){return e?new z_(e,t):Dt},matchMedia:function(e){return new JC(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cu()},addEventListener:function(e,t){var n=Dl[e]||(Dl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:RC,wrapYoyo:LC,distribute:v_,random:y_,snap:x_,normalize:PC,getUnit:Sn,clamp:TC,splitColor:T_,toArray:ai,selector:Tu,mapRange:S_,pipe:EC,unitize:CC,interpolate:DC,shuffle:__},install:r_,effects:lh,ticker:qn,updateRoot:Cn.updateRoot,plugins:Xn,globalTimeline:Nt,core:{PropTween:Un,globals:o_,Tween:Kt,Timeline:Cn,Animation:Ca,getCache:ar,_removeLinkedListItem:fc,reverting:function(){return wn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return kd=e}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ec[r]=Kt[r]});qn.add(Cn.updateRoot);Wr=ec.to({},{duration:0});var QC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eP=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=QC(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},fh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(dn(s)&&(l={},Nn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}eP(a,s)}}}},Bn=ec.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fh("roundProps",Au),fh("modifiers"),fh("snap",x_))||ec;Kt.version=Cn.version=Bn.version="3.12.5";s_=1;Hd()&&No();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xp,As,Zr,Qd,rr,qp,ef,tP=function(){return typeof window<"u"},hs={},Zs=180/Math.PI,Jr=Math.PI/180,Or=Math.atan2,Yp=1e8,tf=/([A-Z])/g,nP=/(left|right|width|margin|padding|x)/i,iP=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},G_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aP=function(e,t,n){return e.style[t]=n},lP=function(e,t,n){return e.style.setProperty(t,n)},cP=function(e,t,n){return e._gsap[t]=n},hP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},uP=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},dP=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",Fn=Ft+"Origin",fP=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in hs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ts(i,a)}):this.tfm[e]=o.x?o[e]:ts(i,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Ii.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},H_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pP=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ef(),(!s||!s.isStart)&&!n[Ft]&&(H_(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},V_=function(e,t){var n={target:e,props:[],revert:pP,save:fP};return e._gsap||Bn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},W_,Ru=function(e,t){var n=As.createElementNS?As.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):As.createElement(e);return n&&n.style?n:As.createElement(e)},Ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(tf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Uo(t)||t,1)||""},$p="O,Moz,ms,Ms,Webkit".split(","),Uo=function(e,t,n){var i=t||rr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($p[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$p[o]:"")+e},Lu=function(){tP()&&window.document&&(Xp=window,As=Xp.document,Zr=As.documentElement,rr=Ru("div")||{style:{}},Ru("div"),Ft=Uo(Ft),Fn=Ft+"Origin",rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",W_=!!Uo("perspective"),ef=Bn.core.reverting,Qd=1)},ph=function r(e){var t=Ru("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Zr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Zr.removeChild(t),this.style.cssText=s,o},Kp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},j_=function(e){var t;try{t=e.getBBox()}catch{t=ph.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ph||(t=ph.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kp(e,["x","cx","x1"])||0,y:+Kp(e,["y","cy","y1"])||0,width:0,height:0}:t},X_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&j_(e))},mr=function(e,t){if(t){var n=e.style,i;t in hs&&t!==Fn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(tf,"-$1").toLowerCase())):n.removeAttribute(t)}},Es=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?G_:k_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Zp={deg:1,rad:1,turn:1},mP={grid:1,flex:1},Ds=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=rr.style,l=nP.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||Zp[i]||Zp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&X_(e),(f||o==="%")&&(hs[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Wt(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===As||!_.appendChild)&&(_=As.body),p=_._gsap,p&&f&&p.width&&l&&p.time===qn.time&&!p.uncache)return Wt(s/p.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,g=e[h],x?e.style[t]=x:mr(e,t)}else(f||o==="%")&&!mP[Ui(_,"display")]&&(a.position=Ui(e,"position")),_===e&&(a.position="static"),_.appendChild(rr),g=rr[h],_.removeChild(rr),a.position="absolute";return l&&f&&(p=ar(_),p.time=qn.time,p.width=_[h]),Wt(d?g*s/u:g&&s?u/g*s:0)},ts=function(e,t,n,i){var s;return Qd||Lu(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),hs[t]&&t!=="transform"?(s=Ra(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nc(Ui(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=tc[t]&&tc[t](e,t,n)||Ui(e,t)||l_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ds(e,t,s,n)+n:s},gP=function(e,t,n,i){if(!n||n==="none"){var s=Uo(t,e,1),o=s&&Ui(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ui(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,O_),l=0,c=0,h,u,d,f,g,_,p,m,x,v,M,P;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ui(e,t)||i,_?e.style[t]=_:mr(e,t)),h=[n,i],E_(h),n=h[0],i=h[1],d=n.match(Vr)||[],P=i.match(Vr)||[],P.length){for(;u=Vr.exec(i);)p=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),p.charAt(1)==="="&&(p=Kr(f,p)+M),m=parseFloat(p),v=p.substr((m+"").length),l=Vr.lastIndex-v.length,v||(v=v||Kn.units[t]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(f=Ds(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?G_:k_;return n_.test(i)&&(a.e=0),this._pt=a,a},Jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_P=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jp[n]||n,t[1]=Jp[i]||i,t.join(" ")},vP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],hs[a]&&(l=1,a=a==="transformOrigin"?Fn:Ft),mr(n,a);l&&(mr(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),Ra(n,1),o.uncache=1,H_(i)))}},tc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,vP);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Pa=[1,0,0,1,0,0],q_={},Y_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qp=function(e){var t=Ui(e,Ft);return Y_(t)?Pa:t.substr(7).match(t_).map(Wt)},nf=function(e,t){var n=e._gsap||ar(e),i=e.style,s=Qp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pa:s):(s===Pa&&!e.offsetParent&&e!==Zr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Zr.appendChild(e)),s=Qp(e),l?i.display=l:mr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Zr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Du=function(e,t,n,i,s,o){var a=e._gsap,l=s||nf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],v=t.split(" "),M=parseFloat(v[0])||0,P=parseFloat(v[1])||0,A,T,E,D;n?l!==Pa&&(T=f*p-g*_)&&(E=M*(p/T)+P*(-_/T)+(_*x-p*m)/T,D=M*(-g/T)+P*(f/T)-(f*x-g*m)/T,M=E,P=D):(A=j_(e),M=A.x+(~v[0].indexOf("%")?M/100*A.width:M),P=A.y+(~(v[1]||v[0]).indexOf("%")?P/100*A.height:P)),i||i!==!1&&a.smooth?(m=M-c,x=P-h,a.xOffset=u+(m*f+x*_)-m,a.yOffset=d+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=P,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(Es(o,a,"xOrigin",c,M),Es(o,a,"yOrigin",h,P),Es(o,a,"xOffset",u,a.xOffset),Es(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+P)},Ra=function(e,t){var n=e._gsap||new L_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ui(e,Fn)||"0",h,u,d,f,g,_,p,m,x,v,M,P,A,T,E,D,y,S,B,U,F,j,N,$,X,ae,re,de,Ne,ke,q,ne;return h=u=d=_=p=m=x=v=M=0,f=g=1,n.svg=!!(e.getCTM&&X_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),T=nf(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Du(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),P=n.xOrigin||0,A=n.yOrigin||0,T!==Pa&&(S=T[0],B=T[1],U=T[2],F=T[3],h=j=T[4],u=N=T[5],T.length===6?(f=Math.sqrt(S*S+B*B),g=Math.sqrt(F*F+U*U),_=S||B?Or(B,S)*Zs:0,x=U||F?Or(U,F)*Zs+_:0,x&&(g*=Math.abs(Math.cos(x*Jr))),n.svg&&(h-=P-(P*S+A*U),u-=A-(P*B+A*F))):(ne=T[6],ke=T[7],re=T[8],de=T[9],Ne=T[10],q=T[11],h=T[12],u=T[13],d=T[14],E=Or(ne,Ne),p=E*Zs,E&&(D=Math.cos(-E),y=Math.sin(-E),$=j*D+re*y,X=N*D+de*y,ae=ne*D+Ne*y,re=j*-y+re*D,de=N*-y+de*D,Ne=ne*-y+Ne*D,q=ke*-y+q*D,j=$,N=X,ne=ae),E=Or(-U,Ne),m=E*Zs,E&&(D=Math.cos(-E),y=Math.sin(-E),$=S*D-re*y,X=B*D-de*y,ae=U*D-Ne*y,q=F*y+q*D,S=$,B=X,U=ae),E=Or(B,S),_=E*Zs,E&&(D=Math.cos(E),y=Math.sin(E),$=S*D+B*y,X=j*D+N*y,B=B*D-S*y,N=N*D-j*y,S=$,j=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Wt(Math.sqrt(S*S+B*B+U*U)),g=Wt(Math.sqrt(N*N+ne*ne)),E=Or(j,N),x=Math.abs(E)>2e-4?E*Zs:0,M=q?1/(q<0?-q:q):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Y_(Ui(e,Ft)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Wt(f),n.scaleY=Wt(g),n.rotation=Wt(_)+a,n.rotationX=Wt(p)+a,n.rotationY=Wt(m)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=nc(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?yP:W_?$_:xP,n.uncache=0,n},nc=function(e){return(e=e.split(" "))[0]+" "+e[1]},mh=function(e,t,n){var i=Sn(t);return Wt(parseFloat(t)+parseFloat(Ds(e,"x",n+"px",i)))+i},xP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$_(e,t)},qs="0deg",Qo="0px",Ys=") ",$_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,v=n.zOrigin,M="",P=m==="auto"&&e&&e!==1||m===!0;if(v&&(u!==qs||h!==qs)){var A=parseFloat(h)*Jr,T=Math.sin(A),E=Math.cos(A),D;A=parseFloat(u)*Jr,D=Math.cos(A),o=mh(x,o,T*D*-v),a=mh(x,a,-Math.sin(A)*-v),l=mh(x,l,E*D*-v+v)}p!==Qo&&(M+="perspective("+p+Ys),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(P||o!==Qo||a!==Qo||l!==Qo)&&(M+=l!==Qo||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),c!==qs&&(M+="rotate("+c+Ys),h!==qs&&(M+="rotateY("+h+Ys),u!==qs&&(M+="rotateX("+u+Ys),(d!==qs||f!==qs)&&(M+="skew("+d+", "+f+Ys),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ys),x.style[Ft]=M||"translate(0, 0)"},yP=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),P,A,T,E,D;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Jr,c*=Jr,P=Math.cos(l)*u,A=Math.sin(l)*u,T=Math.sin(l-c)*-d,E=Math.cos(l-c)*d,c&&(h*=Jr,D=Math.tan(c-h),D=Math.sqrt(1+D*D),T*=D,E*=D,h&&(D=Math.tan(h),D=Math.sqrt(1+D*D),P*=D,A*=D)),P=Wt(P),A=Wt(A),T=Wt(T),E=Wt(E)):(P=u,E=d,A=T=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=Ds(f,"x",o,"px"),M=Ds(f,"y",a,"px")),(g||_||p||m)&&(v=Wt(v+g-(g*P+_*T)+p),M=Wt(M+_-(g*A+_*E)+m)),(i||s)&&(D=f.getBBox(),v=Wt(v+i/100*D.width),M=Wt(M+s/100*D.height)),D="matrix("+P+","+A+","+T+","+E+","+v+","+M+")",f.setAttribute("transform",D),x&&(f.style[Ft]=D)},MP=function(e,t,n,i,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Yp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Yp)%o-~~(c/o)*o)),e._pt=d=new Un(e._pt,t,n,i,c,sP),d.e=h,d.u="deg",e._props.push(n),d},em=function(e,t){for(var n in t)e[n]=t[n];return e},SP=function(e,t,n){var i=em({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Ra(n,1),mr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Ra(n,1),o[Ft]=c);for(l in hs)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Sn(c),g=Sn(h),u=f!==g?Ds(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Un(e._pt,a,l,u,d-u,Pu),e._pt.u=g||0,e._props.push(l));em(a,i)};Nn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});tc[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return ts(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var K_={name:"css",register:Lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,p,m,x,v,M,P,A,T,E;Qd||Lu(),this.styles=this.styles||V_(e),E=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Xn[_]&&D_(_,t,n,i,e,s)))){if(f=typeof h,g=tc[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Aa(h)),g)g(this,e,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Rs.lastIndex=0,Rs.test(c)||(p=Sn(c),m=Sn(h)),m?p!==m&&(c=Ds(e,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),E.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],dn(c)&&~c.indexOf("random(")&&(c=Aa(c)),Sn(c+"")||c==="auto"||(c+=Kn.units[_]||Sn(ts(e,_))||""),(c+"").charAt(1)==="="&&(c=ts(e,_))):c=ts(e,_),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Ii&&(_==="autoAlpha"&&(d===1&&ts(e,"visibility")==="hidden"&&u&&(d=0),E.push("visibility",0,a.visibility),Es(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in hs,v){if(this.styles.save(_),M||(P=e._gsap,P.renderTransform&&!t.parseTransform||Ra(e,t.parseTransform),A=t.smoothOrigin!==!1&&P.smooth,M=this._pt=new Un(this._pt,a,Ft,0,1,P.renderTransform,P,0,-1),M.dep=1),_==="scale")this._pt=new Un(this._pt,P,"scaleY",P.scaleY,(x?Kr(P.scaleY,x+u):u)-P.scaleY||0,Pu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){E.push(Fn,0,a[Fn]),h=_P(h),P.svg?Du(e,h,0,A,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==P.zOrigin&&Es(this,P,"zOrigin",P.zOrigin,m),Es(this,a,_,nc(c),nc(h)));continue}else if(_==="svgOrigin"){Du(e,h,1,A,0,this);continue}else if(_ in q_){MP(this,P,_,d,x?Kr(d,x+h):h);continue}else if(_==="smoothOrigin"){Es(this,P,"smooth",P.smooth,h);continue}else if(_==="force3D"){P[_]=h;continue}else if(_==="transform"){SP(this,h,e);continue}}else _ in a||(_=Uo(_)||_);if(v||(u||u===0)&&(d||d===0)&&!iP.test(h)&&_ in a)p=(c+"").substr((d+"").length),u||(u=0),m=Sn(h)||(_ in Kn.units?Kn.units[_]:p),p!==m&&(d=Ds(e,_,c,m)),this._pt=new Un(this._pt,v?P:a,_,d,(x?Kr(d,x+u):u)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?oP:Pu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rP);else if(_ in a)gP.call(this,e,_,c,x?x+h:h);else if(_ in e)this.add(e,_,c||e[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Wd(_,h);continue}v||(_ in a?E.push(_,0,a[_]):E.push(_,1,c||e[_])),o.push(_)}}T&&B_(this)},render:function(e,t){if(t.tween._time||!ef())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ts,aliases:Ii,getSetter:function(e,t,n){var i=Ii[t];return i&&i.indexOf(",")<0&&(t=i),t in hs&&t!==Fn&&(e._gsap.x||ts(e,"x"))?n&&qp===n?t==="scale"?hP:cP:(qp=n||{})&&(t==="scale"?uP:dP):e.style&&!Gd(e.style[t])?aP:~t.indexOf("-")?lP:Zd(e,t)},core:{_removeProperty:mr,_getMatrix:nf}};Bn.utils.checkPrefix=Uo;Bn.core.getStyleSaver=V_;(function(r,e,t,n){var i=Nn(r+","+e+","+t,function(s){hs[s]=1});Nn(e,function(s){Kn.units[s]="deg",q_[s]=1}),Ii[i[13]]=r+","+e,Nn(n,function(s){var o=s.split(":");Ii[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});Bn.registerPlugin(K_);var gr=Bn.registerPlugin(K_)||Bn;gr.core.Tween;let wP=class extends et{constructor(){super(...arguments);O(this,"animations",[]);O(this,"hasAnimation",!0)}get number(){return"05"}get title(){return"Animations"}get link(){return"https://threejs-journey.com/lessons/animations"}update(t){this.object3d.position.x=Math.sin(t/1e3),this.object3d.position.y=Math.cos(t/1e3)}init(){super.init();const t=new en(1,1,1),n=new St({color:255});this.object3d=new ce(t,n),this.scene.add(this.object3d),this.animations.push(gr.to(this.object3d.position,{z:-3,delay:1,duration:1})),this.animations.push(gr.to(this.object3d.position,{z:0,delay:2,duration:1}))}dispose(){super.dispose(),this.animations.forEach(t=>t.kill()),this.animations=[]}};var so,ro,zt,Z_,J_,Iu,Q_,e0,t0,n0,i0,s0,r0,am;let bP=(am=class extends et{constructor(){super(...arguments);Ee(this,zt);O(this,"hasAnimation",!0);Ee(this,so);Ee(this,ro)}get number(){return"06"}get title(){return"Cameras"}get link(){return"https://threejs-journey.com/lessons/cameras"}update(){b(this,zt,Z_).call(this)}init(){super.init(),b(this,zt,e0).call(this),b(this,zt,Q_).call(this)}dispose(){super.dispose(),b(this,zt,t0).call(this),b(this,zt,i0).call(this)}initControl(){b(this,zt,Iu).call(this),b(this,zt,n0).call(this)}initOrthographicCamera(){const t=this.canvas.width/this.canvas.height;this.camera=new lc(-t,t,1,-1),this.camera.position.z=3}},so=new WeakMap,ro=new WeakMap,zt=new WeakSet,Z_=function(){this.control.update(),this.camera.lookAt(this.object3d.position)},J_=function(){this.control=new Gg(this.camera,this.canvas),this.control.enableDamping=!0},Iu=function(){function t(n,i){this.x=0,this.y=0,this.boundUpdateCoordinates=null,this.init=function(){this.boundUpdateCoordinates=this.updateCoordindates.bind(this),i.addEventListener("mousemove",this.boundUpdateCoordinates)},this.update=function(s=5){const o=2*Math.PI*this.x;n.position.x=Math.cos(o)*s,n.position.z=Math.sin(o)*s,n.position.y=this.y*s},this.updateCoordindates=function(s){this.x=s.offsetX/i.width-.5,this.y=(s.offsetY/i.height-.5)*-1},this.dispose=function(){i.removeEventListener("mousemove",this.boundUpdateCoordinates)}}this.control=new t(this.camera,this.canvas),this.control.init()},Q_=function(){const t=new en(1,1,1),n=new St({color:65280});this.object3d=new ce(t,n),this.scene.add(this.object3d)},e0=function(){It(this,so,b(this,zt,r0).bind(this)),document.addEventListener("keydown",Re(this,so))},t0=function(){document.removeEventListener("keydown",Re(this,so))},n0=function(){It(this,ro,b(this,zt,s0).bind(this)),document.addEventListener("keydown",Re(this,ro))},i0=function(){document.removeEventListener("keydown",Re(this,ro))},s0=function(t){switch(t.code){case"KeyR":b(this,zt,J_).call(this);break;case"KeyC":b(this,zt,Iu).call(this);break}},r0=function(t){switch(t.code){case"KeyP":this.initCamera();break;case"KeyO":this.initOrthographicCamera();break}},am);var oo,Bi,o0,a0,l0,c0,lm;let TP=(lm=class extends et{constructor(){super(...arguments);Ee(this,Bi);O(this,"hasAnimation",!0);Ee(this,oo)}get number(){return"07"}get title(){return"Fullscreen and resizing"}get link(){return"https://threejs-journey.com/lessons/fullscreen-and-resizing"}update(){this.control.update()}init(){super.init(),b(this,Bi,c0).call(this),b(this,Bi,o0).call(this)}dispose(){super.dispose(),b(this,Bi,a0).call(this)}},oo=new WeakMap,Bi=new WeakSet,o0=function(){It(this,oo,b(this,Bi,l0).bind(this)),document.addEventListener("keydown",Re(this,oo))},a0=function(){document.removeEventListener("keydown",Re(this,oo))},l0=function(t){t.code==="KeyF"&&(document.fullscreenElement?document.exitFullscreen():this.canvas.requestFullscreen())},c0=function(){const t=new en(1,1,1),n=new St({color:16777215});this.object3d=new ce(t,n),this.scene.add(this.object3d)},lm);var Is,h0,u0,d0,cm;let AP=(cm=class extends et{constructor(){super(...arguments);Ee(this,Is);O(this,"hasAnimation",!0)}get number(){return"08"}get title(){return"Geometries"}get link(){return"https://threejs-journey.com/lessons/geometries"}update(){this.control.update()}init(){super.init(),b(this,Is,h0).call(this)}},Is=new WeakSet,h0=function(){const t=new St({color:16777215,wireframe:!0});this.mesh=new ce(b(this,Is,u0).call(this),t),this.scene.add(this.mesh)},u0=function(){const t=new ut;return t.setAttribute("position",b(this,Is,d0).call(this)),t},d0=function(){const i=new Float32Array(450);for(let s=0;s<450;s++)i[s]=(Math.random()-.5)*2;return new at(i,3)},cm);var Fo,f0,p0,hm;let EP=(hm=class extends et{constructor(){super(...arguments);Ee(this,Fo);O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"09"}get title(){return"Debug UI"}get link(){return"https://threejs-journey.com/lessons/debug-ui"}update(){this.control.update()}init(){super.init(),b(this,Fo,p0).call(this),b(this,Fo,f0).call(this)}},Fo=new WeakSet,f0=function(){this.guiControl.add(this.mesh.position,"y").min(-2).max(2).step(.01).name("elevation"),this.guiControl.add(this.mesh,"visible"),this.guiControl.add(this.mesh.material,"wireframe"),this.guiControl.addColor({color:this.mesh.material.color.getHex()},"color").onChange(t=>{this.mesh.material.color.setHex(t)}),this.guiControl.add({spin:()=>{gr.to(this.mesh.rotation,{y:this.mesh.rotation.y+Math.PI*2})}},"spin"),this.guiControl.add({subdivisions:1},"subdivisions").min(1).max(20).step(1).onFinishChange(t=>{this.mesh.geometry.dispose(),this.mesh.geometry=new en(1,1,1,t,t,t)})},p0=function(){const t=new en(1,1,1),n=new St({color:14253554,wireframe:!0});this.mesh=new ce(t,n),this.scene.add(this.mesh)},hm);var Ns,m0,g0,_0,um;let CP=(um=class extends et{constructor(){super(...arguments);Ee(this,Ns);O(this,"loaderManager");O(this,"textureLoader");O(this,"doorMapTexture");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"10"}get title(){return"Textures"}get link(){return"https://threejs-journey.com/lessons/textures"}update(){this.control.update()}init(){super.init(),b(this,Ns,m0).call(this),b(this,Ns,g0).call(this),b(this,Ns,_0).call(this)}},Ns=new WeakSet,m0=function(){this.loaderManager=new Fg,this.textureLoader=new _n(this.loaderManager),this.texture=this.textureLoader.load("/three.js-journey/media/images/textures/door/color.jpg"),this.texture.colorSpace=tt},g0=function(){const t=new en(1,1,1),n=new St({map:this.texture});this.mesh=new ce(t,n),this.scene.add(this.mesh)},_0=function(){this.guiControl.add(this.texture.repeat,"x").min(1).max(5).step(.01).name("textureX"),this.guiControl.add(this.texture.repeat,"y").min(1).max(5).step(.01).name("textureY"),this.guiControl.add({offset:0},"offset").min(0).max(1).step(.01).name("textureOffset").onChange(t=>{this.texture.offset.x=t,this.texture.offset.y=t}),this.guiControl.add({rotation:0},"rotation").min(0).max(2*Math.PI).step(.01).onChange(t=>{this.texture.center.x=.5,this.texture.center.y=.5,this.texture.rotation=t}),this.guiControl.add({addXRepeat:()=>{this.texture.wrapS=_t,this.texture.needsUpdate=!0}},"addXRepeat").name("Repeat texture in X"),this.guiControl.add({addYRepeat:()=>{this.texture.wrapT=_t,this.texture.needsUpdate=!0}},"addYRepeat").name("Repeat texture in Y"),this.guiControl.add({updateMinFilterToLinearFilter:()=>{this.texture.minFilter=Si,this.texture.generateMipmaps=!0,this.texture.needsUpdate=!0}},"updateMinFilterToLinearFilter").name("Update min filter to linear filter"),this.guiControl.add({updateMinFilterToNearestFilter:()=>{this.texture.minFilter=Qt,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0}},"updateMinFilterToNearestFilter").name("Update min filter to nearest filter"),this.guiControl.add({updateMagFilterToLinearFilter:()=>{this.texture.magFilter=sn,this.texture.needsUpdate=!0}},"updateMagFilterToLinearFilter").name("Update mag filter to linear filter"),this.guiControl.add({updateMagFilterToNearestFilter:()=>{this.texture.magFilter=Qt,this.texture.needsUpdate=!0}},"updateMagFilterToNearestFilter").name("Update mag filter to nearest filter")},um);class v0 extends lE{constructor(e){super(e),this.type=Di}parse(e){const o=function(E,D){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(D||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(D||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(D||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(D||""))}},h=`
`,u=function(E,D,y){D=D||1024;let B=E.pos,U=-1,F=0,j="",N=String.fromCharCode.apply(null,new Uint16Array(E.subarray(B,B+128)));for(;0>(U=N.indexOf(h))&&F<D&&B<E.byteLength;)j+=N,F+=N.length,B+=128,N+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(B,B+128)));return-1<U?(E.pos+=F+U+1,j+N.slice(0,U)):!1},d=function(E){const D=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let j,N;for((E.pos>=E.byteLength||!(j=u(E)))&&o(1,"no header found"),(N=j.match(D))||o(3,"bad initial token"),F.valid|=1,F.programtype=N[1],F.string+=j+`
`;j=u(E),j!==!1;){if(F.string+=j+`
`,j.charAt(0)==="#"){F.comments+=j+`
`;continue}if((N=j.match(y))&&(F.gamma=parseFloat(N[1])),(N=j.match(S))&&(F.exposure=parseFloat(N[1])),(N=j.match(B))&&(F.valid|=2,F.format=N[1]),(N=j.match(U))&&(F.valid|=4,F.height=parseInt(N[1],10),F.width=parseInt(N[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},f=function(E,D,y){const S=D;if(S<8||S>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);S!==(E[2]<<8|E[3])&&o(3,"wrong scanline width");const B=new Uint8Array(4*D*y);B.length||o(4,"unable to allocate buffer space");let U=0,F=0;const j=4*S,N=new Uint8Array(4),$=new Uint8Array(j);let X=y;for(;X>0&&F<E.byteLength;){F+4>E.byteLength&&o(1),N[0]=E[F++],N[1]=E[F++],N[2]=E[F++],N[3]=E[F++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=S)&&o(3,"bad rgbe scanline format");let ae=0,re;for(;ae<j&&F<E.byteLength;){re=E[F++];const Ne=re>128;if(Ne&&(re-=128),(re===0||ae+re>j)&&o(3,"bad scanline data"),Ne){const ke=E[F++];for(let q=0;q<re;q++)$[ae++]=ke}else $.set(E.subarray(F,F+re),ae),ae+=re,F+=re}const de=S;for(let Ne=0;Ne<de;Ne++){let ke=0;B[U]=$[Ne+ke],ke+=S,B[U+1]=$[Ne+ke],ke+=S,B[U+2]=$[Ne+ke],ke+=S,B[U+3]=$[Ne+ke],U+=4}X--}return B},g=function(E,D,y,S){const B=E[D+3],U=Math.pow(2,B-128)/255;y[S+0]=E[D+0]*U,y[S+1]=E[D+1]*U,y[S+2]=E[D+2]*U,y[S+3]=1},_=function(E,D,y,S){const B=E[D+3],U=Math.pow(2,B-128)/255;y[S+0]=Ya.toHalfFloat(Math.min(E[D+0]*U,65504)),y[S+1]=Ya.toHalfFloat(Math.min(E[D+1]*U,65504)),y[S+2]=Ya.toHalfFloat(Math.min(E[D+2]*U,65504)),y[S+3]=Ya.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=d(p),x=m.width,v=m.height,M=f(p.subarray(p.pos),x,v);let P,A,T;switch(this.type){case Dn:T=M.length/4;const E=new Float32Array(T*4);for(let y=0;y<T;y++)g(M,y*4,E,y*4);P=E,A=Dn;break;case Di:T=M.length/4;const D=new Uint16Array(T*4);for(let y=0;y<T;y++)_(M,y*4,D,y*4);P=D,A=Di;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:v,data:P,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Dn:case Di:o.colorSpace=on,o.minFilter=sn,o.magFilter=sn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}var Tn,x0,y0,M0,S0,w0,b0,T0,dm;let PP=(dm=class extends et{constructor(){super(...arguments);Ee(this,Tn);O(this,"plane");O(this,"torus");O(this,"sphere");O(this,"doorColorTexture");O(this,"doorAlphaTexture");O(this,"doorAmbientOcclusionTexture");O(this,"doorHeightTexture");O(this,"doorMetalnessTexture");O(this,"doorRoughnessTexture");O(this,"doorNormalTexture");O(this,"matcapTexture");O(this,"gradientTexture");O(this,"material");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"11"}get title(){return"Materials"}get link(){return"https://threejs-journey.com/lessons/materials"}update(t){this.control.update(),this.plane.rotation.x=1e-4*t,this.plane.rotation.y=1e-4*t,this.sphere.rotation.x=1e-4*t,this.sphere.rotation.y=1e-4*t,this.torus.rotation.x=1e-4*t,this.torus.rotation.y=1e-4*t}init(){super.init(),b(this,Tn,S0).call(this),b(this,Tn,y0).call(this),b(this,Tn,M0).call(this),b(this,Tn,T0).call(this),b(this,Tn,b0).call(this),b(this,Tn,w0).call(this),b(this,Tn,x0).call(this),this.sphere.position.x=-2,this.torus.position.x=2}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.torus=null}},Tn=new WeakSet,x0=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoat").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoatRoughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheen").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheenRoughness").min(0).max(1).step(.001),this.guiControl.addColor(this.material,"sheenColor"),this.guiControl.add(this.material,"iridescence").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"iridescenceIOR").min(1).max(2.333).step(1e-4),this.guiControl.add(this.material.iridescenceThicknessRange,"0").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 0"),this.guiControl.add(this.material.iridescenceThicknessRange,"1").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 1"),this.guiControl.add(this.material,"transmission").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"ior").min(1).max(10).step(1e-4),this.guiControl.add(this.material,"thickness").min(0).max(1).step(1e-4)},y0=function(){const t=new _n;this.doorColorTexture=t.load("/three.js-journey/media/images/textures/door/color.jpg"),this.doorAlphaTexture=t.load("/three.js-journey/media/images/textures/door/alpha.jpg"),this.doorAmbientOcclusionTexture=t.load("/three.js-journey/media/images/textures/door/ambientOcclusion.jpg"),this.doorHeightTexture=t.load("/three.js-journey/media/images/textures/door/height.jpg"),this.doorMetalnessTexture=t.load("/three.js-journey/media/images/textures/door/metalness.jpg"),this.doorRoughnessTexture=t.load("/three.js-journey/media/images/textures/door/roughness.jpg"),this.doorNormalTexture=t.load("/three.js-journey/media/images/textures/door/normal.jpg"),this.doorColorTexture.colorSpace=tt,this.matcapTexture=t.load("/three.js-journey/media/images/textures/matcaps/7.png"),this.gradientTexture=t.load("/three.js-journey/media/images/textures/gradients/3.jpg"),this.gradientTexture.generateMipmaps=!1,this.gradientTexture.minFilter=Qt,this.gradientTexture.magFilter=Qt},M0=function(){this.material=new bi,this.material.side=Mn,this.material.transparent=!0,this.material.alphaMap=this.doorAlphaTexture},S0=function(){new v0().load("/three.js-journey/media/images/environmentMap/2k.hdr",n=>{n.mapping=Mo,this.scene.background=n,this.scene.environment=n})},w0=function(){const t=new _r(.5,.2,64,28);this.torus=new ce(t,this.material),this.scene.add(this.torus)},b0=function(){const t=new Qn(.5,64,64);this.sphere=new ce(t,this.material),this.scene.add(this.sphere)},T0=function(){const t=new Bt(1,1,100,100);this.plane=new ce(t,this.material),this.scene.add(this.plane)},dm);class RP extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ro(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new LP(e)}}class LP{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=DP(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function DP(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=IP(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function IP(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new IE;let a,l,c,h,u,d,f,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=_.length;p<m;)switch(_[p++]){case"m":a=_[p++]*e+t,l=_[p++]*e+n,o.moveTo(a,l);break;case"l":a=_[p++]*e+t,l=_[p++]*e+n,o.lineTo(a,l);break;case"q":c=_[p++]*e+t,h=_[p++]*e+n,u=_[p++]*e+t,d=_[p++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=_[p++]*e+t,h=_[p++]*e+n,u=_[p++]*e+t,d=_[p++]*e+n,f=_[p++]*e+t,g=_[p++]*e+n,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:s.ha*e,path:o}}class NP extends Ld{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}var zi,A0,E0,C0,P0,fm;let UP=(fm=class extends et{constructor(){super(...arguments);Ee(this,zi);O(this,"material");O(this,"hasAnimation",!0)}get number(){return"12"}get title(){return"3D Text"}get link(){return"https://threejs-journey.com/lessons/3d-text"}update(){this.control.update()}init(){super.init(),b(this,zi,E0).call(this),b(this,zi,C0).call(this),b(this,zi,A0).call(this)}dispose(){super.dispose(),this.material=null}},zi=new WeakSet,A0=function(){this.camera.position.z=2,this.camera.position.y=1,this.camera.position.x=1},E0=function(){const n=new _n().load("/three.js-journey/media/images/textures/matcaps/1.png");n.colorSpace=tt,this.material=new JA({matcap:n})},C0=function(){new RP().load("/three.js-journey/media/fonts/helvetiker_regular.typeface.json",n=>{const i=new NP("Three.js rocks!",{font:n,size:.3,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),this.mesh=new ce(i,this.material),this.scene.add(this.mesh),b(this,zi,P0).call(this,i.boundingBox)})},P0=function(t){const n=new _r(.2,.1,20,45),i=t.max.x-t.min.x,s=t.max.y-t.min.y,o=t.max.z-t.min.z,a=5;for(let l=0;l<100;l++){const c=new ce(n,this.material);c.position.x=(i+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.y=(s+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.z=(o+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.rotation.x=Math.random()*Math.PI,c.rotation.y=Math.random()*Math.PI;const h=Math.random()*2;c.scale.set(h,h,h),this.scene.add(c)}},fm);class FP extends Ao{constructor(e,t){const n=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],i=new ut;i.setAttribute("position",new Ze(n,3)),i.computeBoundingSphere();const s=new ko({fog:!1});super(i,s),this.light=e,this.color=t,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new ut;a.setAttribute("position",new Ze(o,3)),a.computeBoundingSphere(),this.add(new ce(a,new St({side:pn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,t=Math.max(e.r,e.g,e.b);t>1&&e.multiplyScalar(1/t),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var ze,R0,L0,D0,I0,N0,U0,F0,O0,B0,z0,k0,G0,Js,Nu,Ti,pm;let OP=(pm=class extends et{constructor(){super(...arguments);Ee(this,ze);O(this,"material");O(this,"plane");O(this,"box");O(this,"sphere");O(this,"torus");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"14"}get title(){return"Lights"}get link(){return"https://threejs-journey.com/lessons/lights"}update(t){this.control.update(),this.box.rotation.x=1e-4*t,this.box.rotation.y=1e-4*t,this.sphere.rotation.x=1e-4*t,this.sphere.rotation.y=1e-4*t,this.torus.rotation.x=1e-4*t,this.torus.rotation.y=1e-4*t}init(){super.init(),b(this,ze,F0).call(this),b(this,ze,O0).call(this),b(this,ze,B0).call(this),b(this,ze,z0).call(this),b(this,ze,k0).call(this),b(this,ze,G0).call(this),b(this,ze,U0).call(this),b(this,ze,N0).call(this),b(this,ze,I0).call(this),b(this,ze,D0).call(this),b(this,ze,L0).call(this),b(this,ze,R0).call(this)}dispose(){super.dispose(),this.plane=null,this.box=null,this.sphere=null,this.torus=null}},ze=new WeakSet,R0=function(){const t=new Ud(16716032,1,0,Math.PI*.1,.25,1);t.position.z=-3,t.position.x=-2,t.target.position.x=-3,this.scene.add(t),this.scene.add(t.target);const n=b(this,ze,Js).call(this,t,"Spot Light");b(this,ze,Ti).call(this,n,t,"distance"),b(this,ze,Ti).call(this,n,t,"angle"),b(this,ze,Ti).call(this,n,t,"penumbra"),b(this,ze,Ti).call(this,n,t,"decay");const i=new EE(t);this.scene.add(i)},L0=function(){const t=new fE(65280,1,2.5,2.5);t.position.x=-2,t.position.z=2,t.lookAt(this.box.position),this.scene.add(t);const n=b(this,ze,Js).call(this,t,"Rect Area Light");b(this,ze,Ti).call(this,n,t,"width"),b(this,ze,Ti).call(this,n,t,"height");const i=new FP(t);this.scene.add(i)},D0=function(){const t=new sr(15602090,1,0,2);t.position.x=2,t.position.z=2,this.scene.add(t);const n=b(this,ze,Js).call(this,t,"Point Light");b(this,ze,Ti).call(this,n,t,"distance"),b(this,ze,Ti).call(this,n,t,"decay");const i=new CE(t,.2);this.scene.add(i)},I0=function(){const t=new cE(16711680,255,.5);this.scene.add(t);const n=b(this,ze,Js).call(this,t,"Hemisphere Light");b(this,ze,Nu).call(this,n,t,"groundColor");const i=new RE(t,.2);this.scene.add(i)},N0=function(){const t=new fi(65532,.9);t.position.set(5,1,0),this.scene.add(t),b(this,ze,Js).call(this,t,"Directional Light");const n=new LE(t,.2);this.scene.add(n)},U0=function(){const t=new xr(16777215,.5);this.scene.add(t),b(this,ze,Js).call(this,t,"Ambient Light")},F0=function(){this.material=new Jt,this.material.roughness=.5},O0=function(){const t=new Bt(10,10);this.plane=new ce(t,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-2,this.scene.add(this.plane)},B0=function(){const t=new en(1,1,1);this.box=new ce(t,this.material),this.scene.add(this.box)},z0=function(){const t=new Qn(1);this.sphere=new ce(t,this.material),this.sphere.position.x=2,this.scene.add(this.sphere)},k0=function(){const t=new _r(.7,.3);this.torus=new ce(t,this.material),this.torus.position.x=-2,this.scene.add(this.torus)},G0=function(){this.camera.position.z=5},Js=function(t,n){const i=this.guiControl.addFolder(n);return b(this,ze,Ti).call(this,i,t,"intensity"),b(this,ze,Nu).call(this,i,t,"color"),i},Nu=function(t,n,i){t.addColor({color:n[i].getHex()},"color").onChange(s=>{n[i].setHex(s)})},Ti=function(t,n,i){t.add(n,i).min(0).max(5).step(.01)},pm);var jt,H0,V0,W0,j0,X0,q0,Y0,ra,mm;let BP=(mm=class extends et{constructor(){super(...arguments);Ee(this,jt);O(this,"plane");O(this,"sphere");O(this,"sphereShadow");O(this,"material");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"15"}get title(){return"Shadows"}get link(){return"https://threejs-journey.com/lessons/shadows"}update(t){this.control.update();const n=1.5;this.sphere.position.x=Math.cos(t/1e3)*n,this.sphere.position.z=Math.sin(t/1e3)*n,this.sphere.position.y=Math.abs(Math.sin(t/1e3)),this.sphereShadow.position.x=this.sphere.position.x,this.sphereShadow.position.z=this.sphere.position.z,this.sphereShadow.material.opacity=(1-this.sphere.position.y)*.3;const i=this.sphere.position.y*1.5;this.sphereShadow.scale.set(i,i,i)}init(){super.init(),b(this,jt,V0).call(this),b(this,jt,W0).call(this),b(this,jt,X0).call(this),b(this,jt,j0).call(this),b(this,jt,q0).call(this),b(this,jt,H0).call(this)}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.sphereShadow=null,this.material=null}},jt=new WeakSet,H0=function(){this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=us},V0=function(){this.material=new Jt,b(this,jt,Y0).call(this)},W0=function(){const t=new Qn(.5);this.sphere=new ce(t,this.material),this.sphere.castShadow=!0,this.sphere.receiveShadow=!1,this.scene.add(this.sphere)},j0=function(){const n=new _n().load("/three.js-journey/media/images/textures/shadows/simple.jpg");n.colorSpace=tt;const i=new Bt(1,1),s=new St({color:0,transparent:!0,alphaMap:n});this.sphereShadow=new ce(i,s),this.sphereShadow.rotation.x=-Math.PI/2,this.sphereShadow.position.y=this.plane.position.y+.001,this.scene.add(this.sphereShadow)},X0=function(){const t=new Bt(5,5);this.plane=new ce(t,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-.5,this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.scene.add(this.plane)},q0=function(){const t=new xr(16777215,2);this.scene.add(t),b(this,jt,ra).call(this,t,"Ambient Light");const n=new fi(16777215,1);n.position.x=3,n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=1,n.shadow.camera.far=6,n.shadow.camera.top=1,n.shadow.camera.bottom=-1,n.shadow.camera.right=1,n.shadow.camera.left=-1,this.scene.add(n),b(this,jt,ra).call(this,n,"Directional Light");const i=new Ud(16777215,1,0,Math.PI*.1);i.position.x=1,i.position.z=1,i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,i.shadow.camera.near=1,i.shadow.camera.far=5,i.visible=!1,this.scene.add(i),this.scene.add(i.target),b(this,jt,ra).call(this,i,"Spot Light"),this.guiControl.add(i,"visible").name("Enable Spotlight");const s=new sr(16777215,1);s.position.x=1,s.position.z=-1,s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=.1,s.shadow.camera.far=4,s.visible=!1,this.scene.add(s),b(this,jt,ra).call(this,s,"Point Light"),this.guiControl.add(s,"visible").name("Enable Point Light")},Y0=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001)},ra=function(t,n){this.guiControl.addFolder(n).add(t,"intensity").min(0).max(5).step(.001)},mm);class Fa extends ce{constructor(){const e=Fa.SkyShader,t=new Ot({name:e.name,uniforms:pg.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:pn,depthWrite:!1});super(new en(1,1,1),t),this.isSky=!0}}Fa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const zP="/three.js-journey/assets/alpha-oYUXAV8U.webp",kP="/three.js-journey/assets/arm-rmC2KtbT.webp",GP="/three.js-journey/assets/diffuse-BiGrMCC3.webp",HP="/three.js-journey/assets/displacement-CKqTQH1-.webp",VP="/three.js-journey/assets/normal-Cn3WmhCd.webp",WP="/three.js-journey/assets/arm-DyzoCEM3.webp",jP="/three.js-journey/assets/diffuse-3lwd3U-t.webp",XP="/three.js-journey/assets/normal-iYA-jasx.webp",qP="/three.js-journey/assets/arm-WvlYQgg6.webp",YP="/three.js-journey/assets/diffuse-Ca4I2Dwk.webp",$P="/three.js-journey/assets/normal-CEkQghNg.webp",KP="/three.js-journey/assets/arm-CIirWEzm.webp",ZP="/three.js-journey/assets/diffuse-Bt2KqQCc.webp",JP="/three.js-journey/assets/normal-CzXVEdvu.webp",QP="/three.js-journey/assets/arm-BpdijVEA.webp",eR="/three.js-journey/assets/diffuse-BtOV6iYR.webp",tR="/three.js-journey/assets/normal-B1F88-Fh.webp",nR="/three.js-journey/assets/alpha-C_QdxHjX.webp",iR="/three.js-journey/assets/normal-CnTtXT1a.webp",sR="/three.js-journey/assets/ambientOcclusion-DWqpmaJh.webp",rR="/three.js-journey/assets/color-D6TT9ASI.webp",oR="/three.js-journey/assets/height-vbXR4p20.webp",aR="/three.js-journey/assets/metalness-DWD7jlG_.webp",lR="/three.js-journey/assets/roughness-Cy_48OtR.webp";var Ye,$0,K0,Z0,J0,Il,Q0,Nl,ev,tv,nv,iv,sv,rv,Uu,Qs,gm;let cR=(gm=class extends et{constructor(){super(...arguments);Ee(this,Ye);O(this,"ghostViolet");O(this,"ghostPink");O(this,"ghostRed");O(this,"textureLoader");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"16"}get title(){return"Haunted House"}get link(){return"https://threejs-journey.com/lessons/haunted-house"}update(t){const n=t*.001;this.control.update(),b(this,Ye,Il).call(this,this.ghostViolet,n*.5,4,2.34,3.45),b(this,Ye,Il).call(this,this.ghostPink,-n*.38,5,2.34,3.45),b(this,Ye,Il).call(this,this.ghostRed,n*.23,6,2.34,3.45)}init(){super.init(),b(this,Ye,rv).call(this),b(this,Ye,nv).call(this),b(this,Ye,iv).call(this),b(this,Ye,sv).call(this),b(this,Ye,J0).call(this),b(this,Ye,K0).call(this),b(this,Ye,Z0).call(this),b(this,Ye,$0).call(this)}dispose(){super.dispose(),this.textureLoader=null,this.ghostViolet=null,this.ghostPink=null,this.ghostRed=null}},Ye=new WeakSet,$0=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us},K0=function(){const t=new Fa;t.material.uniforms.turbidity.value=10,t.material.uniforms.rayleigh.value=3,t.material.uniforms.mieCoefficient.value=.1,t.material.uniforms.mieDirectionalG.value=.95,t.material.uniforms.sunPosition.value.set(.3,-.038,-.95),t.scale.set(100,100,100),this.scene.add(t)},Z0=function(){const t=new Sd("#04343f",.1);this.scene.fog=t},J0=function(){const t=new wi,n=this.textureLoader.load(WP),i=this.textureLoader.load(XP),s=this.textureLoader.load(jP);s.colorSpace=tt;const o=new ce(new en(4,3,4),new Jt({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}));o.position.y=o.geometry.parameters.height*.5,o.castShadow=!0,o.receiveShadow=!0,t.add(o);const a=this.textureLoader.load(qP),l=this.textureLoader.load($P),c=this.textureLoader.load(YP);c.colorSpace=tt,a.repeat.set(3,1),l.repeat.set(3,1),c.repeat.set(3,1),a.wrapS=_t,l.wrapS=_t,c.wrapS=_t;const h=new ce(new hc(o.geometry.parameters.width,2,4),new Jt({map:c,normalMap:l,roughnessMap:a,metalnessMap:a,aoMap:a}));h.position.y=o.geometry.parameters.height+h.geometry.parameters.height*.5,h.rotation.y=Math.PI*.25,h.castShadow=!0,t.add(h);const u=this.textureLoader.load(nR),d=this.textureLoader.load(sR),f=this.textureLoader.load(oR),g=this.textureLoader.load(aR),_=this.textureLoader.load(lR),p=this.textureLoader.load(iR),m=this.textureLoader.load(rR);m.colorSpace=tt;const x=new ce(new Bt(1.5,2.3,100,100),new Jt({transparent:!0,map:m,alphaMap:u,aoMap:d,metalnessMap:g,roughnessMap:_,normalMap:p,displacementMap:f,displacementScale:.15,displacementBias:-.04}));x.position.y=x.geometry.parameters.height*.5,x.position.z=o.geometry.parameters.depth*.5+.01,t.add(x);const v=new sr("#ff7d46",5);v.position.z=o.geometry.parameters.depth*.5+.1,v.position.y=x.geometry.parameters.height+.1,t.add(v),b(this,Ye,tv).call(this,x.position.z,x.geometry.parameters.width),b(this,Ye,ev).call(this,o.geometry.parameters.width),b(this,Ye,Q0).call(this),this.scene.add(t)},Il=function(t,n,i,s,o){const a=n;t.position.x=Math.cos(a)*i,t.position.z=Math.sin(a)*i,t.position.y=Math.sin(a)*Math.sin(a*s)*Math.sin(a*o)},Q0=function(){this.ghostViolet=new sr("#8800ff",6),this.ghostPink=new sr("#ff0088",6),this.ghostRed=new sr("#ff0000",6),b(this,Ye,Nl).call(this,this.ghostViolet),b(this,Ye,Nl).call(this,this.ghostPink),b(this,Ye,Nl).call(this,this.ghostRed),this.scene.add(this.ghostViolet,this.ghostPink,this.ghostRed)},Nl=function(t){t.castShadow=!0,t.shadow.mapSize.width=256,t.shadow.mapSize.height=256,t.shadow.camera.far=10},ev=function(t){const n=this.textureLoader.load(QP),i=this.textureLoader.load(tR),s=this.textureLoader.load(eR);s.colorSpace=tt,s.repeat.set(.3,.4),i.repeat.set(.3,.4),n.repeat.set(.3,.4);const o=new en(.6,1,.3),a=new Jt({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}),l=new wi;for(let c=0;c<30;c++){const h=new ce(o,a),u=Math.random()*2*Math.PI,d=t*.5+1.5+Math.random()*4;h.position.y=h.geometry.parameters.height*.5-Math.random()*.4,h.position.x=Math.cos(u)*d,h.position.z=Math.sin(u)*d,h.rotation.x=(Math.random()-.5)*.4,h.rotation.y=(Math.random()-.5)*.4,h.rotation.z=(Math.random()-.5)*.4,h.castShadow=!0,h.receiveShadow=!0,l.add(h)}this.scene.add(l)},tv=function(t,n){const i=this.textureLoader.load(KP),s=this.textureLoader.load(JP),o=this.textureLoader.load(ZP);o.colorSpace=tt,o.repeat.set(2,1),s.repeat.set(2,1),i.repeat.set(2,1),o.wrapS=_t,s.wrapS=_t,i.wrapS=_t;const a=new Qn(.5),l=new Jt({map:o,normalMap:s,roughnessMap:i,metalnessMap:i,aoMap:i,color:"#ccffcc"}),c=n*.5-.1,h=a.parameters.radius-.3,u=t+a.parameters.radius-.3,d=new ce(a,l);d.position.x=c,d.position.y=h,d.position.z=u,d.rotation.x=-.75,this.scene.add(d),b(this,Ye,Qs).call(this,d,"Bush 1");const f=new ce(a,l);f.position.x=-c,f.position.y=h,f.position.z=u,f.scale.set(.8,.8,.8),f.rotation.x=-.75,this.scene.add(f),b(this,Ye,Qs).call(this,f,"Bush 2");const g=new ce(a,l),_=.6;g.position.x=c+.6,g.position.z=u,g.scale.set(_,_,_),g.position.y=h*_,g.rotation.x=-.75,this.scene.add(g),b(this,Ye,Qs).call(this,g,"Bush 3")},nv=function(){this.camera.position.y=5,this.camera.position.x=5,this.camera.position.z=7,b(this,Ye,Qs).call(this,this.camera,"Camera")},iv=function(){const t=new xr("#86cdff",.275);b(this,Ye,Uu).call(this,t,"Ambient Light"),this.scene.add(t);const n=new fi("#86cdff",1);n.position.x=1,n.position.y=3,n.position.z=-5,n.castShadow=!0,n.shadow.mapSize.width=256,n.shadow.mapSize.height=256,n.shadow.camera.top=8,n.shadow.camera.bottom=-8,n.shadow.camera.right=8,n.shadow.camera.left=-8,n.shadow.camera.near=1,n.shadow.camera.far=20,b(this,Ye,Uu).call(this,n,"Directional Light"),this.scene.add(n)},sv=function(){const t=this.textureLoader.load(zP),n=this.textureLoader.load(GP),i=this.textureLoader.load(kP),s=this.textureLoader.load(VP),o=this.textureLoader.load(HP);n.colorSpace=tt,n.repeat.set(8,8),i.repeat.set(8,8),s.repeat.set(8,8),o.repeat.set(8,8),n.wrapS=_t,i.wrapS=_t,s.wrapS=_t,o.wrapS=_t,n.wrapT=_t,i.wrapT=_t,s.wrapT=_t,o.wrapT=_t;const a=new ce(new Bt(20,20,100,100),new Jt({transparent:!0,alphaMap:t,map:n,roughnessMap:i,metalnessMap:i,aoMap:i,normalMap:s,displacementMap:o,displacementScale:.3,displacementBias:-.2}));a.rotation.x=-Math.PI*.5,a.receiveShadow=!0,b(this,Ye,Qs).call(this,a,"Floor"),this.scene.add(a)},rv=function(){this.textureLoader=new _n},Uu=function(t,n){const i=b(this,Ye,Qs).call(this,t,n);return i.add(t,"intensity").min(0).max(10).step(.01),i.addColor({color:t.color.getHex()},"color").onChange(s=>{t.color.setHex(s)}),i},Qs=function(t,n){const i=this.guiControl.addFolder(n);return i.add(t.position,"x").min(-8).max(8).step(.01),i.add(t.position,"y").min(-8).max(8).step(.01),i.add(t.position,"z").min(-8).max(8).step(.01),i},gm);var ic,ov,_m;let hR=(_m=class extends et{constructor(){super(...arguments);Ee(this,ic);O(this,"particles");O(this,"hasAnimation",!0)}get number(){return"17"}get title(){return"Particles"}get link(){return"https://threejs-journey.com/lessons/particles"}update(t){this.control.update();const n=this.particles.geometry.attributes.position;for(let i=0;i<n.array.length;i+=3)n.array[i+1]=Math.sin(t*.001+n.array[i]);n.needsUpdate=!0}init(){super.init(),b(this,ic,ov).call(this)}dispose(){super.dispose(),this.particles=null}},ic=new WeakSet,ov=function(){const i=new ut,s=new Float32Array(3e3),o=new Float32Array(3e3);for(let h=0;h<s.length;h++)s[h]=(Math.random()-.5)*5,o[h]=Math.random();i.setAttribute("position",new at(s,3)),i.setAttribute("color",new at(o,3));const l=new _n().load("/three.js-journey/media/images/textures/particles/2.png"),c=new Ia({size:.1,sizeAttenuation:!0,transparent:!0,alphaMap:l});c.depthWrite=!1,c.blending=as,c.vertexColors=!0,this.particles=new Bs(i,c),this.scene.add(this.particles)},_m);var At,Fu,Ou,Bu,av,Ms,zu,lv,vm;let uR=(vm=class extends et{constructor(){super(...arguments);Ee(this,At);O(this,"galaxy");O(this,"galaxyMaterial");O(this,"galaxyGeometry");O(this,"galaxyTweaks");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"18"}get title(){return"Galaxy Generator"}get link(){return"https://threejs-journey.com/lessons/galaxy-generator"}update(t){this.control.update();const n=t*.001;this.galaxy.rotation.y=n*.2}init(){super.init(),b(this,At,lv).call(this),b(this,At,av).call(this),b(this,At,Ou).call(this)}dispose(){b(this,At,Bu).call(this),super.dispose()}},At=new WeakSet,Fu=function(){b(this,At,Bu).call(this),b(this,At,Ou).call(this)},Ou=function(){this.galaxyGeometry=new ut;const t=this.galaxyTweaks.particles*3,n=new Float32Array(t),i=new Float32Array(t),s=new ge(this.galaxyTweaks.insideColor),o=new ge(this.galaxyTweaks.outsideColor);for(let a=0;a<t;a+=3){const l=a/3,c=Math.random()*this.galaxyTweaks.radius,h=2*Math.PI*(l%this.galaxyTweaks.branches/this.galaxyTweaks.branches),u=this.galaxyTweaks.spin*c,d=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,f=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,g=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c;n[a]=Math.cos(h+u)*c+d,n[a+1]=f,n[a+2]=Math.sin(h+u)*c+g;const p=s.clone().lerp(o,c/this.galaxyTweaks.radius);i[a]=p.r,i[a+1]=p.g,i[a+2]=p.b}this.galaxyGeometry.setAttribute("position",new at(n,3)),this.galaxyGeometry.setAttribute("color",new at(i,3)),this.galaxyMaterial=new Ia({size:this.galaxyTweaks.size,sizeAttenuation:!0,depthWrite:!1,blending:as,vertexColors:!0}),this.galaxy=new Bs(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},Bu=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},av=function(){this.galaxyTweaks={particles:2e4,size:.01,radius:4,branches:7,spin:.7,offset:.3,gravityStrength:5,insideColor:"#ff6030",outsideColor:"#1b3984"},b(this,At,Ms).call(this,"particles",100,1e5,1),b(this,At,Ms).call(this,"size",.01,1,.01),b(this,At,Ms).call(this,"radius",1,20,.1),b(this,At,Ms).call(this,"branches",2,20,1),b(this,At,Ms).call(this,"spin",.2,20,.1),b(this,At,Ms).call(this,"offset",.1,20,.1),b(this,At,Ms).call(this,"gravityStrength",1,20,1),b(this,At,zu).call(this,"insideColor"),b(this,At,zu).call(this,"outsideColor")},Ms=function(t,n,i,s){this.guiControl.add(this.galaxyTweaks,t).min(n).max(i).step(s).onFinishChange(b(this,At,Fu).bind(this))},zu=function(t){this.guiControl.addColor(this.galaxyTweaks,t).onFinishChange(b(this,At,Fu).bind(this))},lv=function(){this.camera.position.x=3,this.camera.position.y=3,this.camera.position.z=5},vm);class Oa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=gh(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=dR.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=gh()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:gh())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function gh(){return performance.now()}function dR(){document.hidden===!1&&this.reset()}const fR="/three.js-journey/assets/3-CO1hT6T5.jpg";var or,ao,lo,La,co,ho,Ve,cv,hv,uv,Ul,dv,fv,pv,mv,gv,_v,vv,xv,yv,Mv,Sv,wv,bv,Tv,Av,Ev,xm;let pR=(xm=class extends et{constructor(){super(...arguments);Ee(this,Ve);O(this,"particles");O(this,"meshes",[]);O(this,"material");O(this,"cameraGroup");O(this,"timer");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0);Ee(this,or,5);Ee(this,ao,null);Ee(this,lo,null);Ee(this,La,0);Ee(this,co);Ee(this,ho)}get number(){return"19"}get title(){return"Scroll based animation"}get link(){return"https://threejs-journey.com/lessons/scroll-based-animation"}update(t){this.timer.update(t);const n=this.timer.getDelta();for(const i of this.meshes)i.rotation.x+=n*.1,i.rotation.y+=n*.3;if(Re(this,ao)&&Re(this,lo)){const i=Re(this,ao)-this.cameraGroup.position.x,s=Re(this,lo)-this.cameraGroup.position.y;this.cameraGroup.position.x+=i*2*n,this.cameraGroup.position.y+=s*2*n}}open(){b(this,Ve,hv).call(this),b(this,Ve,Ul).call(this,"My portfolio","start"),b(this,Ve,Ul).call(this,"My projects","end"),b(this,Ve,Ul).call(this,"Contact me","start"),super.open()}close(){b(this,Ve,dv).call(this),b(this,Ve,uv).call(this),super.close()}init(){super.init(),b(this,Ve,fv).call(this),b(this,Ve,cv).call(this),b(this,Ve,Av).call(this),b(this,Ve,Tv).call(this),b(this,Ve,bv).call(this),b(this,Ve,Sv).call(this),b(this,Ve,wv).call(this),b(this,Ve,Ev).call(this),b(this,Ve,Mv).call(this),b(this,Ve,vv).call(this),b(this,Ve,mv).call(this)}initCamera(){this.cameraGroup=new wi,this.camera=new yn(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.cameraGroup.add(this.camera),this.scene.add(this.cameraGroup)}dispose(){super.dispose(),b(this,Ve,xv).call(this),b(this,Ve,gv).call(this),b(this,Ve,pv).call(this),this.particles=null,this.meshes=[],this.cameraGroup=null,this.timer=null}},or=new WeakMap,ao=new WeakMap,lo=new WeakMap,La=new WeakMap,co=new WeakMap,ho=new WeakMap,Ve=new WeakSet,cv=function(){this.renderer.setClearAlpha(0)},hv=function(){document.body.style.overflow="visible",document.body.style.backgroundColor="#1e1a20"},uv=function(){document.body.style.overflow="hidden",document.body.style.backgroundColor=null},Ul=function(t,n){const i=document.createElement("section"),s=document.createElement("h2");s.textContent=t,i.className="section",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent=n,i.style.paddingLeft="8em",i.style.paddingRight="8em",i.style.fontSize="2rem",i.style.height="100vh",i.style.textTransform="uppercase",i.appendChild(s),document.body.appendChild(i)},dv=function(){document.querySelectorAll(".section").forEach(n=>n.remove())},fv=function(){this.control.dispose()},pv=function(){this.timer.dispose()},mv=function(){It(this,ho,b(this,Ve,_v).bind(this)),window.addEventListener("mousemove",Re(this,ho))},gv=function(){window.removeEventListener("mousemove",Re(this,ho))},_v=function(t){It(this,ao,t.clientX/window.innerWidth-.5),It(this,lo,-(t.clientY/window.innerHeight)-.5)},vv=function(){It(this,co,b(this,Ve,yv).bind(this)),window.addEventListener("scroll",Re(this,co))},xv=function(){window.removeEventListener("scroll",Re(this,co))},yv=function(){const t=window.scrollY/window.innerHeight,n=Math.round(t);this.camera.position.y=-t*Re(this,or),Re(this,La)!==n&&(It(this,La,n),gr.to(this.meshes[n].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))},Mv=function(){for(let t=0;t<this.meshes.length;t++)this.meshes[t].position.y=-Re(this,or)*t,this.meshes[t].position.x=1.5*Math.pow(-1,t%2)},Sv=function(){const t=new ce(new _r(.75,.3,16,60),this.material);t.geometry.name="Torus";const n=new ce(new hc(.75,1.5,32),this.material);n.geometry.name="Cone";const i=new ce(new vr(.8,.25,100,16),this.material);i.geometry.name="Torus Knot",this.meshes.push(t),this.meshes.push(n),this.meshes.push(i),this.scene.add(...this.meshes)},wv=function(){const n=new Float32Array(600);for(let s=0;s<n.length;s+=3)n[s]=(Math.random()-.5)*10,n[s+1]=Re(this,or)/2-Math.random()*Re(this,or)*this.meshes.length,n[s+2]=(Math.random()-.5)*10;const i=new ut;i.setAttribute("position",new at(n,3)),this.particles=new Bs(i,new Ia({size:.02,sizeAttenuation:!0,color:this.material.color.getHex()})),this.scene.add(this.particles)},bv=function(){const n=new _n().load(fR);n.magFilter=Qt,this.material=new ZA({color:"#ffeded",gradientMap:n})},Tv=function(){const t=new fi(16777215,3);t.position.set(4,2),this.scene.add(t)},Av=function(){this.timer=new Oa},Ev=function(){this.guiControl.addColor({color:this.material.color.getHex()},"color").onChange(t=>{this.material.color.setHex(t),this.particles.material.color.setHex(t)});for(const t of this.meshes){const n=t.geometry.name,i=this.guiControl.addFolder(n.charAt(0).toUpperCase()+n.slice(1));i.add(t.position,"y").min(-100).max(100).step(.01),i.add(t.position,"x").min(-100).max(100).step(.01)}},xm);var On,Fl,Ol,Cv,Pv;class mR{constructor(e){Ee(this,On);O(this,"meshes",{});O(this,"instance");O(this,"boxGeometry");O(this,"sphereGeometry");O(this,"planeGeometry");O(this,"planeMaterial");O(this,"meshMaterial");this.instance=e,b(this,On,Cv).call(this),b(this,On,Pv).call(this)}addBox(e,t,n,i,s){const o=new ce(this.boxGeometry,this.meshMaterial);o.scale.set(t,n,i),b(this,On,Fl).call(this,o,s),b(this,On,Ol).call(this,e,o)}addSphere(e,t,n){const i=new ce(this.sphereGeometry,this.meshMaterial);b(this,On,Fl).call(this,i,n,t),b(this,On,Ol).call(this,e,i)}addPlane(e,t){const n=new ce(this.planeGeometry,this.planeMaterial);n.rotation.x=-Math.PI/2,b(this,On,Fl).call(this,n,t,1),b(this,On,Ol).call(this,e,n)}dispose(){for(const e in this.meshes)this.instance.remove(this.meshes[e])}}On=new WeakSet,Fl=function(e,t,n=null){e.castShadow=!0,e.receiveShadow=!0,e.position.copy(t),n&&e.scale.set(n,n,n)},Ol=function(e,t){this.meshes[e]=t,this.instance.add(t)},Cv=function(){this.sphereGeometry=new Qn(1),this.planeGeometry=new Bt(8,8,8),this.boxGeometry=new en(1,1,1)},Pv=function(){this.meshMaterial=new Jt({metalness:.3,roughness:.4}),this.planeMaterial=new Jt({color:7829367,metalness:.3,roughness:.4})};const gR="/three.js-journey/assets/nx-B1qAN98K.png",_R="/three.js-journey/assets/ny-C02qeYUz.png",vR="/three.js-journey/assets/nz-EWNLxSEp.png",xR="/three.js-journey/assets/px-BQkunSVR.png",yR="/three.js-journey/assets/py-BLoW9UYQ.png",MR="/three.js-journey/assets/pz-DHteryXs.png";class SR{static setup(e,t,n){this.initLights(e),this.initEnvMap(e),this.setupCamera(t),this.setupRenderer(n)}static setupCamera(e){e.fov=75,e.near=.1,e.far=100,e.position.set(-3,3,3)}static setupRenderer(e){e.shadowMap.enabled=!0,e.shadowMap.type=us}static initLights(e){const t=new xr(16777215,2.1);e.add(t);const n=new fi(16777215,.6);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,n.position.set(5,5,5),e.add(n)}static initEnvMap(e){const t=new Id;e.environment=t.load([xR,gR,yR,_R,MR,vR]),e.environmentIntensity=.5}}class tm{static addAction(e,t,n){e.add({exec:t},"exec").name(n)}}var xt,Rv,Lv,Dv,ku,Gu,Iv,Bl,Nv,Uv,Fv,Ov,ym;let wR=(ym=class extends et{constructor(){super(...arguments);Ee(this,xt);O(this,"threeWorld");O(this,"physicsWorld");O(this,"timer");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"20"}get title(){return"Physics"}get link(){return"https://threejs-journey.com/lessons/physics"}update(t){this.timer.update(t),this.physicsWorld.postMessage({type:"update",payload:{delta:this.timer.getDelta()}}),this.control.update()}init(){super.init(),SR.setup(this.scene,this.camera,this.renderer),b(this,xt,Ov).call(this),b(this,xt,Nv).call(this),b(this,xt,Uv).call(this),b(this,xt,Fv).call(this),b(this,xt,Dv).call(this,{x:0,y:0,z:0}),b(this,xt,ku).call(this,.5,{x:0,y:3,z:0}),b(this,xt,Gu).call(this,1,1,1,{x:3,y:3,z:0})}dispose(){super.dispose(),b(this,xt,Lv).call(this),b(this,xt,Rv).call(this),this.physicsWorld.terminate()}},xt=new WeakSet,Rv=function(){this.threeWorld.dispose()},Lv=function(){this.physicsWorld.postMessage({type:"dispose"})},Dv=function(t){const n=b(this,xt,Bl).call(this);this.threeWorld.addPlane(n,t),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"plane",id:n,position:t}})},ku=function(t,n){const i=b(this,xt,Bl).call(this);this.threeWorld.addSphere(i,t,n),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"sphere",id:i,radius:t,position:n}})},Gu=function(t,n,i,s){const o=b(this,xt,Bl).call(this);this.threeWorld.addBox(o,t,n,i,s),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"box",id:o,width:t/2,height:n/2,depth:i/2,position:s}})},Iv=function(){this.physicsWorld.onmessage=t=>{const{type:n,payload:i}=t.data;switch(n){case"refresh":for(const s of i){const o=this.threeWorld.meshes[s.id];o.position.copy(s.position),o.quaternion.copy(s.quaternion)}break}}},Bl=function(){return Date.now().toString(36)+Math.random().toString(36).substring(2,9)},Nv=function(){this.threeWorld=new mR(this.scene)},Uv=function(){this.physicsWorld=new Worker(new URL("/three.js-journey/assets/worker-DOS562_J.js",import.meta.url),{type:"module"}),this.physicsWorld.postMessage({type:"init",payload:{gravity:-9.8,friction:.1,restitution:.7}}),b(this,xt,Iv).call(this)},Fv=function(){tm.addAction(this.guiControl,()=>{b(this,xt,ku).call(this,Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Sphere"),tm.addAction(this.guiControl,()=>{b(this,xt,Gu).call(this,Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Box")},Ov=function(){this.timer=new Oa},ym);function nm(r,e){if(e===TM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ou||e===sg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ou)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class pi extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new HR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ua.extractUrlBase(e);o=ua.resolveURL(c,this.path)}else o=ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ro(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bv){try{o[Qe.KHR_BINARY_GLTF]=new VR(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new nL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new AR;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new WR(s,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new jR;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new XR;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function bR(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TR{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sr(h),c.distance=u;break;case"spot":c=new Ud(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class AR{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,tt))}return Promise.all(i)}}class ER{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class CR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(s)}}class PR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class RR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class LR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class DR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class IR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],on),Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class UR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tt)),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class OR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class zR{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kR{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GR{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class HR{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Xe,p=new I,m=new $n,x=new I(1,1,1),v=new gA(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(p,m,x));for(const M in l)if(M==="_COLOR_0"){const P=l[M];v.instanceColor=new cu(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Bv="glTF",ea=12,im={JSON:1313821514,BIN:5130562};class VR{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ea,s=new DataView(e,ea);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===im.JSON){const c=new Uint8Array(e,ea+o,a);this.content=n.decode(c)}else if(l===im.BIN){const c=ea+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class WR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Hu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Hu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Qr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,on,d)})})}}class jR{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XR{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class zv extends Na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,x=1-p,v=m-d+u;for(let M=0;M!==a;M++){const P=o[_+M+a],A=o[_+M+l]*h,T=o[g+M+a],E=o[g+M]*h;s[M]=x*P+v*A+p*T+m*E}return s}}const qR=new $n;class YR extends zv{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return qR.fromArray(s).normalize().toArray(s),s}}const ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:Qt,9729:sn,9984:Ym,9985:Ml,9986:ta,9987:Si},rm={33071:Li,33648:kl,10497:_t},_h={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$R={CUBICSPLINE:void 0,LINEAR:_a,STEP:ga},vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),r.DefaultMaterial}function $s(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function JR(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QR(r){let e;const t=r.extensions&&r.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=r.indices+":"+xh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+xh(r.targets[n]);return e}function xh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eL(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const tL=new Xe;class nL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _n(this.options.manager):this.textureLoader=new pE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $s(s,a,i),es(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ua.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=_h[i.type],a=Qr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new at(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=_h[i.type],c=Qr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(x);v||(_=new c(a,m*f,i.count*f/h),v=new uA(_,f/h),t.cache.add(x,v)),p=new wd(v,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new at(_,l,g);if(i.sparse!==void 0){const m=_h.SCALAR,x=Qr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new x(o[1],v,i.sparse.count*m),A=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new at(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,E=P.length;T<E;T++){const D=P[T];if(p.setX(D,A[T*l]),l>=2&&p.setY(D,A[T*l+1]),l>=3&&p.setZ(D,A[T*l+2]),l>=4&&p.setW(D,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=sm[d.magFilter]||sn,h.minFilter=sm[d.minFilter]||Si,h.wrapS=rm[d.wrapS]||_t,h.wrapT=rm[d.wrapT]||_t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new rn(_);p.needsUpdate=!0,d(p)}),t.load(ua.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),es(u,o),u.userData.mimeType=o.mimeType||eL(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ia,ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ko,ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const u=i[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mn);const h=s.alphaMode||vh.OPAQUE;if(h===vh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===vh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new te(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==St){const u=s.emissiveFactor;a.emissive=new ge().setRGB(u[0],u[1],u[2],on)}return s.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,tt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),es(u,s),t.associations.set(u,{materials:e}),s.extensions&&$s(i,u,s),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return om(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=QR(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=om(new ut,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?KR(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const x=c[f];if(p.mode===ii.TRIANGLES||p.mode===ii.TRIANGLE_STRIP||p.mode===ii.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new fA(_,x):new ce(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ii.TRIANGLE_STRIP?m.geometry=nm(m.geometry,sg):p.mode===ii.TRIANGLE_FAN&&(m.geometry=nm(m.geometry,ou));else if(p.mode===ii.LINES)m=new Ad(_,x);else if(p.mode===ii.LINE_STRIP)m=new Ao(_,x);else if(p.mode===ii.LINE_LOOP)m=new _A(_,x);else if(p.mode===ii.POINTS)m=new Bs(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&JR(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),es(m,s),p.extensions&&$s(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&$s(i,u[0],s),u[0];const d=new wi;s.extensions&&$s(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(Xl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Xe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Td(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],P=f[x],A=g[x],T=_[x],E=p[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const D=n._createAnimationTracks(M,P,A,T,E);if(D)for(let y=0;y<D.length;y++)m.push(D[y])}return new mu(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tL)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Tg:c.length>1?h=new wi:c.length===1?h=c[0]:h=new wt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),es(h,s),s.extensions&&$s(n,h,s),s.matrix!==void 0){const u=new Xe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new wi;n.name&&(s.name=i.createUniqueName(n.name)),es(s,n),n.extensions&&$s(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ci||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ys[s.path]===ys.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ys[s.path]){case ys.weights:c=Eo;break;case ys.rotation:c=Co;break;case ys.position:case ys.scale:c=Po;break;default:switch(n.itemSize){case 1:c=Eo;break;case 2:case 3:default:c=Po;break}break}const h=i.interpolation!==void 0?$R[i.interpolation]:_a,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ys[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vu(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Co?YR:zv;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iL(r,e,t){const n=e.attributes,i=new ds;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const h=Vu(Qr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Vu(Qr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function om(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Hu[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ot.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),es(r,e),iL(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ZR(r,e.targets,t):r})}const yh=new WeakMap;class mi extends Wi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ro(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,tt,n).catch(n)}decodeDracoFile(e,t,n,i,s=on,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(yh.has(e)){const l=yh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),yh.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new ut;e.index&&t.setIndex(new at(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new at(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==tt)return;const n=new ge;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),ot.toWorkingColorSpace(n,tt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ro(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=sL.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function sL(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let x,v;if(c.useUniqueIDs)v=h[p],x=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[p]]),v===-1)continue;x=a.GetAttribute(d,v)}const M=i(o,a,d,p,m,x);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,p=s(o,h),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,p,_,m);const x=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:x,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var zn,kv,Gv,Hv,Vv,Wv,jv,Mm;let rL=(Mm=class extends et{constructor(){super(...arguments);Ee(this,zn);O(this,"timer");O(this,"foxMixer",null);O(this,"hasAnimation",!0)}get number(){return"21"}get title(){return"Imported models"}get link(){return"https://threejs-journey.com/lessons/imported-models"}update(t){this.timer.update(t),this.control.update(),this.foxMixer&&this.foxMixer.update(this.timer.getDelta())}init(){super.init(),b(this,zn,Vv).call(this),b(this,zn,jv).call(this),b(this,zn,Wv).call(this),b(this,zn,Hv).call(this),b(this,zn,kv).call(this),b(this,zn,Gv).call(this)}},zn=new WeakSet,kv=function(){this.camera.fov=75,this.camera.near=.1,this.camera.far=100,this.camera.position.set(3,3,8)},Gv=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us},Hv=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",i=>{i.scene.position.set(3,0,3),this.scene.add(i.scene)}),t.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.position.set(-3,0,-3),i.scene.scale.set(4,4,4),this.scene.add(i.scene)}),t.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.025,.025,.025),this.scene.add(i.scene),this.foxMixer=new Bg(i.scene),this.foxMixer.clipAction(i.animations[2]).play()})},Vv=function(){this.timer=new Oa},Wv=function(){const t=new Bt(10,10,10),n=new Jt({roughness:.3,metalness:.7}),i=new ce(t,n);i.rotation.x=-Math.PI/2,this.scene.add(i)},jv=function(){const t=new xr(16777215,1);this.scene.add(t);const n=new fi(16777215,3);n.position.set(3,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,this.scene.add(n)},Mm);var uo,kn,Xv,qv,Yv,$v,Kv,Zv,Sm;let oL=(Sm=class extends et{constructor(){super(...arguments);Ee(this,kn);O(this,"raycaster");O(this,"objs",[]);O(this,"hasAnimation",!0);O(this,"cursor");Ee(this,uo)}get number(){return"22"}get title(){return"Raycaster and Mouse Events"}get link(){return"https://threejs-journey.com/lessons/raycaster-and-mouse-events"}update(t){const n=t*.001;for(let s=0;s<this.objs.length;s++){const o=this.objs[s];o.position.y=Math.sin(n+s*10)*3,o.scale.set(1,1,1),o.material.color.set(16777215),o.name==="duck"&&o.scale.set(.008,.008,.008)}this.raycaster.setFromCamera(this.cursor,this.camera);const i=this.raycaster.intersectObjects(this.objs);for(const s of i){const o=s.object;o.scale.set(1.2,1.2,1.2),o.material.color.set(14824424),o.name==="duck"&&o.scale.set(.0085,.0085,.0085)}this.control.update()}init(){super.init(),b(this,kn,$v).call(this),b(this,kn,Yv).call(this),b(this,kn,Xv).call(this),b(this,kn,Kv).call(this),b(this,kn,Zv).call(this)}dispose(){this.canvas.removeEventListener("mousemove",Re(this,uo)),this.raycaster=null,super.dispose()}},uo=new WeakMap,kn=new WeakSet,Xv=function(){this.raycaster=new zg(new I(0,0,0),new I(0,0,0)),this.cursor=new te(0,0),It(this,uo,b(this,kn,qv).bind(this)),this.canvas.addEventListener("mousemove",Re(this,uo))},qv=function(t){this.cursor.x=(t.offsetX/this.canvas.width-.5)*2,this.cursor.y=-((t.offsetY/this.canvas.height-.5)*2)},Yv=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n);const i=1,s=new Qn(i);for(let o=0;o<3;o++){if(o===1)continue;const a=new Jt({metalness:.7,roughness:.3}),l=new ce(s,a);l.castShadow=!0,l.receiveShadow=!0,l.position.set(-3+o*i*3,0,0),this.objs.push(l),this.scene.add(l)}t.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",o=>{const a=o.scene.children[0].children[0];a.name="duck",a.scale.set(.008,.008,.008),a.rotation.y=-Math.PI/2,this.scene.add(a),this.objs.push(a)})},$v=function(){const t=new xr(16777215,.9);this.scene.add(t);const n=new fi(16777215,3);n.position.set(5,5,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=2,n.shadow.camera.bottom=-2,n.shadow.camera.right=2,n.shadow.camera.left=-2,n.shadow.camera.far=10,this.scene.add(n)},Kv=function(){this.camera.position.z=5},Zv=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us},Sm);var ui,Jv,Qv,ex,tx,nx,wm;let aL=(wm=class extends et{constructor(){super(...arguments);Ee(this,ui);O(this,"hasAnimation",!0)}get number(){return"23"}get title(){return"Custom models with Blender"}get link(){return"https://threejs-journey.com/lessons/custom-models-with-blender"}update(){this.control.update()}init(){super.init(),b(this,ui,tx).call(this),b(this,ui,nx).call(this),b(this,ui,ex).call(this),b(this,ui,Jv).call(this),b(this,ui,Qv).call(this)}},ui=new WeakSet,Jv=function(){this.camera.position.set(2,2,4)},Qv=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us},ex=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),this.scene.add(i.scene)})},tx=function(){const t=new xr(16777215,1);this.scene.add(t);const n=new fi(16777215,3);n.position.set(-5,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=3,n.shadow.camera.bottom=-3,n.shadow.camera.right=3,n.shadow.camera.left=-3,n.shadow.camera.far=8,this.scene.add(n)},nx=function(){const t=new Bt(5,5),n=new Jt,i=new ce(t,n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i)},wm);var Gn,ix,sx,rx,ox,ax,lx,bm;let lL=(bm=class extends et{constructor(){super(...arguments);Ee(this,Gn);O(this,"cubeCamera");O(this,"holyDonut");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"24"}get title(){return"Environment map"}get link(){return"https://threejs-journey.com/lessons/environment-map"}update(t){this.control.update();const n=t*.001;this.holyDonut.rotation.x=Math.abs(Math.cos(n*.5))*Math.PI,this.cubeCamera.update(this.renderer,this.scene)}init(){super.init(),b(this,Gn,rx).call(this),b(this,Gn,lx).call(this),b(this,Gn,ax).call(this),b(this,Gn,ox).call(this),b(this,Gn,sx).call(this),b(this,Gn,ix).call(this)}},Gn=new WeakSet,ix=function(){this.camera.position.set(1,1,6)},sx=function(){const t=this.guiControl.addFolder("Environment");t.add(this.scene,"environmentIntensity").min(0).max(10).step(.01).name("intensity"),t.add(this.scene.environmentRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation");const n=this.guiControl.addFolder("Background");n.add(this.scene,"backgroundIntensity").min(0).max(10).step(.01).name("intensity"),n.add(this.scene,"backgroundBlurriness").min(0).max(1).step(.01).name("blurriness"),n.add(this.scene.backgroundRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation")},rx=function(){const n=new _n().load("/three.js-journey/media/images/environmentMap/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg");n.colorSpace=tt,n.mapping=Mo,this.scene.background=n;const i=new _g(64,{type:Di});this.cubeCamera=new gg(.1,100,i),this.cubeCamera.layers.set(1),this.scene.environment=i.texture},ox=function(){this.holyDonut=new ce(new _r(4,.2),new St({color:new ge(10,4,2)})),this.holyDonut.layers.enable(1),this.scene.add(this.holyDonut)},ax=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.scale.set(3,3,3),i.scene.position.set(0,-1,0),this.scene.add(i.scene)})},lx=function(){const t=new ce(new vr(.5,.2),new Jt({metalness:1,roughness:0,color:11184810}));t.position.set(-2,0,0),this.scene.add(t)},bm);var tn,cx,hx,ux,dx,fx,px,mx,gx,_x,Tm;let cL=(Tm=class extends et{constructor(){super(...arguments);Ee(this,tn);O(this,"directionalLight");O(this,"textureLoader");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"25"}get title(){return"Realistic render"}get link(){return"https://threejs-journey.com/lessons/realistic-render"}update(){this.control.update()}init(){super.init(),b(this,tn,ux).call(this),b(this,tn,_x).call(this),b(this,tn,fx).call(this),b(this,tn,gx).call(this),b(this,tn,mx).call(this),b(this,tn,px).call(this),b(this,tn,cx).call(this),b(this,tn,hx).call(this),b(this,tn,dx).call(this)}},tn=new WeakSet,cx=function(){this.camera.position.set(2,2,4)},hx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us,this.renderer.toneMapping=vo,this.renderer.toneMappingExposure=1.5},ux=function(){this.textureLoader=new _n},dx=function(){this.guiControl.add(this.scene,"environmentIntensity").min(0).max(10).step(.01),this.guiControl.add(this.renderer,"toneMapping",{No:rs,Linear:Wm,Reinhard:jm,Cineon:Xm,ACESFilmic:vo}),this.guiControl.add(this.renderer,"toneMappingExposure").min(0).max(10).step(.01);const t=this.guiControl.addFolder("Light");t.add(this.directionalLight,"intensity").min(0).max(20).step(.01),t.add(this.directionalLight.position,"x").min(-10).max(10).step(.01),t.add(this.directionalLight.position,"y").min(-10).max(10).step(.01),t.add(this.directionalLight.position,"z").min(-10).max(10).step(.01),t.add(this.directionalLight.shadow,"bias").min(-.05).max(.05).step(.001),t.add(this.directionalLight.shadow,"normalBias").min(-.05).max(.05).step(.001)},fx=function(){this.directionalLight=new fi(16777215,3),this.directionalLight.position.set(-8.5,4.27,3),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(512,512),this.directionalLight.shadow.camera.far=15,this.directionalLight.shadow.bias=-.011,this.directionalLight.shadow.normalBias=.009,this.directionalLight.target.position.set(0,.25,0),this.directionalLight.target.updateWorldMatrix(),this.scene.add(this.directionalLight)},px=function(){const t=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_nor.png");t.colorSpace=tt;const s=new ce(new Bt(3,3),new Jt({map:t,normalMap:i,aoMap:n,roughnessMap:n,metalnessMap:n}));s.position.set(0,1.5,-1.5),s.receiveShadow=!0,this.scene.add(s)},mx=function(){const t=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_nor.png");t.colorSpace=tt;const s=new ce(new Bt(3,3),new Jt({map:t,normalMap:i,aoMap:n,metalnessMap:n,roughnessMap:n}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},gx=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),i.scene.children.forEach(s=>{s.castShadow=!0,s.receiveShadow=!0}),this.scene.add(i.scene)})},_x=function(){new v0().load("/three.js-journey/media/images/environmentMap/0/2k.hdr",n=>{n.mapping=Mo,this.scene.environment=n,this.scene.background=n})},Tm);var Rt,vx,xx,yx,Mx,Sx,wx,bx,Tx,Ax,oa,Am;let hL=(Am=class extends et{constructor(){super(...arguments);Ee(this,Rt);O(this,"animation",null);O(this,"currentAction",null);O(this,"actions",[]);O(this,"timer");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"26"}get title(){return"Code structuring for bigger projects"}get link(){return"https://threejs-journey.com/lessons/code-structuring-for-bigger-projects"}update(t){this.timer.update(t),this.animation&&this.animation.update(this.timer.getDelta()),this.control.update()}init(){super.init(),b(this,Rt,yx).call(this),b(this,Rt,Ax).call(this),b(this,Rt,Mx).call(this),b(this,Rt,wx).call(this),b(this,Rt,Sx).call(this),b(this,Rt,xx).call(this),b(this,Rt,vx).call(this)}},Rt=new WeakSet,vx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=us,this.renderer.toneMapping=vo},xx=function(){this.camera.position.set(3,2,3)},yx=function(){this.timer=new Oa},Mx=function(){const t=new _n,n=t.load("/three.js-journey/media/images/textures/dirt/color.jpg"),i=t.load("/three.js-journey/media/images/textures/dirt/normal.jpg");n.colorSpace=tt,n.repeat.set(2,2),i.repeat.set(2,2),n.wrapS=_t,n.wrapT=_t,i.wrapS=_t,i.wrapT=_t;const s=new ce(new Pd(2.5),new Jt({map:n,normalMap:i}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},Sx=function(){const t=new Id;this.scene.environment=t.load(["/three.js-journey/media/images/environmentMap/3/px.jpg","/three.js-journey/media/images/environmentMap/3/nx.jpg","/three.js-journey/media/images/environmentMap/3/py.jpg","/three.js-journey/media/images/environmentMap/3/ny.jpg","/three.js-journey/media/images/environmentMap/3/pz.jpg","/three.js-journey/media/images/environmentMap/3/nz.jpg"])},wx=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.015,.015,.015),i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),this.scene.add(i.scene),b(this,Rt,bx).call(this,i.scene,i.animations),b(this,Rt,oa).call(this,"survey"),b(this,Rt,Tx).call(this)})},bx=function(t,n){this.animation=new Bg(t),this.actions.survey=this.animation.clipAction(n[0]),this.actions.walk=this.animation.clipAction(n[1]),this.actions.run=this.animation.clipAction(n[2])},Tx=function(){const t=this.guiControl.addFolder("Fox");t.add({survey:()=>{b(this,Rt,oa).call(this,"survey")}},"survey"),t.add({walk:()=>{b(this,Rt,oa).call(this,"walk")}},"walk"),t.add({run:()=>{b(this,Rt,oa).call(this,"run")}},"run")},Ax=function(){const t=new fi(16777215,3);t.position.set(3,2,0),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.far=10,this.scene.add(t)},oa=function(t){const n=this.actions[t];n==null||n.reset(),n==null||n.play(),this.currentAction&&(n==null||n.crossFadeFrom(this.currentAction,1)),this.currentAction=n},Am);var uL=`uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);

    vElevation       = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    vElevation      += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    modelPosition.z += vElevation;

    vec4 viewPosition      = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
}`,dL=`uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 texture = texture2D(uTexture, vUv);
    vec3 color   = texture.rgb * (vElevation + 0.3) * (1.0 / 0.6);
    gl_FragColor = vec4(color, 1);
}`;const fL="/three.js-journey/assets/argentinian-flag-YNgkmkdk.png";var Oo,Ex,Cx,Em;let pL=(Em=class extends et{constructor(){super(...arguments);Ee(this,Oo);O(this,"material");O(this,"hasAnimation",!0)}get number(){return"27"}get title(){return"Shaders"}get link(){return"https://threejs-journey.com/lessons/shaders"}update(t){this.material.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),b(this,Oo,Ex).call(this),b(this,Oo,Cx).call(this)}},Oo=new WeakSet,Ex=function(){const n=new _n().load(fL),i=new Bt(2,2,64,64);this.material=new Ot({vertexShader:uL,fragmentShader:dL,uniforms:{uFrequency:{value:new te(10,5)},uTime:{value:0},uTexture:{value:n}}});const s=new ce(i,this.material);s.scale.y=2/3,this.scene.add(s)},Cx=function(){const t=this.guiControl.addFolder("Frequency");t.add(this.material.uniforms.uFrequency.value,"x").min(0).max(20),t.add(this.material.uniforms.uFrequency.value,"y").min(0).max(20)},Em);var mL=`varying vec2 vUv;

void main() {
    gl_Position =
    projectionMatrix *
    viewMatrix       *
    modelMatrix      *
    vec4(position, 1.0);

    vUv = uv;
}`,gL=`#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
    return vec2(
    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}
float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}
vec2 _fade(vec2 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

vec4 _permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = _permute(_permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 *
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = _fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main() {
    float strength  = step(0.9, sin(cnoise(vUv * 10.0) * 20.0));
    strength        = clamp(strength, 0.0, 1.0);
    vec3 blackColor = vec3(0.0);
    vec3 uvColor    = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, strength);

    gl_FragColor = vec4(mixedColor, 1.0);
}`,sc,Px,Cm;let _L=(Cm=class extends et{constructor(){super(...arguments);Ee(this,sc);O(this,"hasAnimation",!0)}get number(){return"28"}get title(){return"Shader patterns"}get link(){return"https://threejs-journey.com/lessons/shader-patterns"}update(){this.control.update()}init(){super.init(),b(this,sc,Px).call(this)}},sc=new WeakSet,Px=function(){const t=new Bt(2,2,64,64),n=new Ot({vertexShader:mL,fragmentShader:gL,side:Mn}),i=new ce(t,n);this.scene.add(i)},Cm);var vL=`#define PI 3.1415926535897932384626433832795

uniform float uTime;
uniform float uSmallWaveElevation;
uniform float uSmallWaveSpeed;
uniform float uSmallWaveFrequency;
uniform float uSmallWaveIteration;
uniform float uBigWaveElevation;
uniform float uBigWaveSpeed;
uniform vec2  uBigWaveFrequency;

varying float vElevation;
varying float vBigWaveElevation;

vec4 _permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 _taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 _fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = _permute(_permute(ix) + iy);
    vec4 ixy0 = _permute(ixy + iz0);
    vec4 ixy1 = _permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = _taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = _taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = _fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float cwave(
    float position,
    float frequency,
    float uBigWaveSpeed,
    float uTime
) {
    return sin(position * 2.0 * PI * frequency + uTime * uBigWaveSpeed);
}

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);

    float elevation = cwave(
        modelPosition.x,
        uBigWaveFrequency.x,
        uBigWaveSpeed,
        uTime
    ) * cwave(
        modelPosition.z,
        uBigWaveFrequency.y,
        uBigWaveSpeed,
        uTime
    ) * uBigWaveElevation;

    for (float i = 1.0; i <= uSmallWaveIteration; i++) {
        float noiseElevation = cnoise(
            vec3(
                modelPosition.xz * uSmallWaveFrequency * i,
                uTime * uSmallWaveSpeed
            )
        ) * uSmallWaveElevation / i;
        elevation -= abs(noiseElevation);
    }

    modelPosition.y += elevation;

    vec4 viewPosition      = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position            = projectedPosition;

    vElevation        = elevation;
    vBigWaveElevation = uBigWaveElevation;
}`,xL=`uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying float vElevation;
varying float vBigWaveElevation;

void main() {
    float strength = ((vElevation / vBigWaveElevation) + 1.0) / 2.0;
    vec3 color     = mix(uDepthColor, uSurfaceColor, strength);
    gl_FragColor   = vec4(color, 1.0);

    #include <colorspace_fragment>
}`,Et,Rx,Lx,Dx,Wu,Ix,er,zl,Nx,Pm;let yL=(Pm=class extends et{constructor(){super(...arguments);Ee(this,Et);O(this,"mesh");O(this,"timer");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"29"}get title(){return"Raging sea"}get link(){return"https://threejs-journey.com/lessons/raging-sea"}update(t){this.timer.update(t),this.control.update(),this.mesh.material.uniforms.uTime.value=this.timer.getElapsed()}init(){super.init(),b(this,Et,Dx).call(this),b(this,Et,Lx).call(this),b(this,Et,Rx).call(this),b(this,Et,Nx).call(this)}dispose(){super.dispose(),this.timer.dispose(),this.timer=null}},Et=new WeakSet,Rx=function(){const t=this.guiControl.addFolder("Small Waves"),n=this.guiControl.addFolder("Big Waves"),i=n.addFolder("Frequency");b(this,Et,er).call(this,t,"uSmallWaveElevation",0,4,.001),b(this,Et,er).call(this,t,"uSmallWaveFrequency",0,10,.001),b(this,Et,er).call(this,t,"uSmallWaveSpeed",0,5,.001),b(this,Et,er).call(this,t,"uSmallWaveIteration",0,5,1),b(this,Et,er).call(this,n,"uBigWaveElevation",0,4,.001),b(this,Et,Ix).call(this,i,"uBigWaveFrequency",0,4,.001),b(this,Et,er).call(this,n,"uBigWaveSpeed",0,10,.001),b(this,Et,Wu).call(this,this.guiControl,"uDepthColor"),b(this,Et,Wu).call(this,this.guiControl,"uSurfaceColor")},Lx=function(){this.mesh=new ce(new Bt(4,4,512,512),new Ot({vertexShader:vL,fragmentShader:xL,uniforms:{uTime:{value:0},uBigWaveElevation:{value:.3},uBigWaveFrequency:{value:new te(.5,.3)},uBigWaveSpeed:{value:1.5},uSmallWaveElevation:{value:.2},uSmallWaveFrequency:{value:3},uSmallWaveSpeed:{value:.3},uSmallWaveIteration:{value:3},uDepthColor:{value:new ge(1599121)},uSurfaceColor:{value:new ge(10213631)}}})),this.mesh.rotation.x=-Math.PI/2,this.scene.add(this.mesh)},Dx=function(){this.timer=new Oa},Wu=function(t,n){const i=this.mesh.material.uniforms[n].value;t.addColor({color:i.getHexString()},"color").onChange(s=>{i.set(s)}).name(n)},Ix=function(t,n,i,s,o){b(this,Et,zl).call(this,t,this.mesh.material.uniforms[n].value,"x",i,s,o,"x"),b(this,Et,zl).call(this,t,this.mesh.material.uniforms[n].value,"y",i,s,o,"y")},er=function(t,n,i,s,o){b(this,Et,zl).call(this,t,this.mesh.material.uniforms[n],"value",i,s,o,n)},zl=function(t,n,i,s,o,a,l){t.add(n,i).min(s).max(o).step(a).name(l)},Nx=function(){this.camera.position.set(3,3,1)},Pm);var ML=`uniform float uTime;
uniform float uSize;

attribute vec3  aOffset;
attribute float aScale;

varying vec3 vColor;

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
    float radius        = length(modelPosition.xyz);
    float angle         = atan(modelPosition.z, modelPosition.x);
    float angleOffset   = (1.0 / radius) * 0.2 * uTime;
    angle              += angleOffset;
    modelPosition.x     = cos(angle) * radius;
    modelPosition.z     = sin(angle) * radius;
    modelPosition.xyz  += aOffset;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position  = projectionPosition;
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vColor = color;
}`,SL=`varying vec3 vColor;

void main() {
    float strength = 1.0 - (distance(vec2(0.5), gl_PointCoord) * 2.0);
    strength = pow(strength, 10.0);
    vec3 mixedColor = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
    #include <colorspace_fragment>
}`,ht,Ux,ju,Fx,Ox,Bx,zx,Xu,qu,tr,Yu,Rm;let wL=(Rm=class extends et{constructor(){super(...arguments);Ee(this,ht);O(this,"galaxy");O(this,"galaxyMaterial");O(this,"galaxyGeometry");O(this,"galaxyParams",{particles:3e4,particleSize:50,particleOffset:.3,branches:7,radius:6,gravityStrength:5,innerColor:"#ff6030",outerColor:"#1b3984"});O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"30"}get title(){return"Animated galaxy"}get link(){return"https://threejs-journey.com/lessons/animated-galaxy"}update(t){this.galaxyMaterial.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),b(this,ht,Fx).call(this),b(this,ht,ju).call(this),b(this,ht,Ux).call(this)}dispose(){b(this,ht,Yu).call(this),super.dispose()}},ht=new WeakSet,Ux=function(){this.camera.position.set(1,5,10)},ju=function(){b(this,ht,Ox).call(this),b(this,ht,Bx).call(this),b(this,ht,zx).call(this)},Fx=function(){b(this,ht,tr).call(this,"particles",100,1e6,1),b(this,ht,tr).call(this,"particleSize",.01,100,.01),b(this,ht,tr).call(this,"particleOffset",.01,10,.01),b(this,ht,tr).call(this,"branches",1,20,1),b(this,ht,tr).call(this,"radius",1,20,.1),b(this,ht,tr).call(this,"gravityStrength",1,20,1),b(this,ht,qu).call(this,"innerColor"),b(this,ht,qu).call(this,"outerColor")},Ox=function(){this.galaxyGeometry=new ut;const t=this.galaxyParams.particles,n=this.galaxyParams.particleOffset,i=this.galaxyParams.branches,s=this.galaxyParams.radius,o=this.galaxyParams.gravityStrength,a=new ge(this.galaxyParams.innerColor),l=new ge(this.galaxyParams.outerColor),c=2*Math.PI/i,h=t*3,u=new Float32Array(h),d=new Float32Array(h),f=new Float32Array(h),g=new Float32Array(t);for(let v=0;v<t;v+=1){const M=v*3,P=s*Math.random(),A=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*P*n,T=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*P*n,E=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*P*n;let D=c*(v%i);u[M+0]=Math.cos(D)*P+A,u[M+1]=T,u[M+2]=Math.sin(D)*P+E;const y=new ge().lerpColors(a,l,P/s);d[M+0]=y.r,d[M+1]=y.g,d[M+2]=y.b,f[M+0]=A,f[M+1]=T,f[M+2]=E,g[v]=Math.random()}const _=new at(u,3),p=new at(d,3),m=new at(f,3),x=new at(g,1);this.galaxyGeometry.setAttribute("position",_),this.galaxyGeometry.setAttribute("color",p),this.galaxyGeometry.setAttribute("aOffset",m),this.galaxyGeometry.setAttribute("aScale",x)},Bx=function(){this.galaxyMaterial=new Ot({depthWrite:!1,vertexColors:!0,blending:as,vertexShader:ML,fragmentShader:SL,uniforms:{uSize:{value:this.galaxyParams.particleSize*this.renderer.getPixelRatio()},uTime:{value:0}}})},zx=function(){this.galaxy=new Bs(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},Xu=function(t,n){this.galaxyParams[t]=n,b(this,ht,Yu).call(this),b(this,ht,ju).call(this)},qu=function(t){this.guiControl.addColor({value:this.galaxyParams[t]},"value").name(t).onFinishChange(n=>{b(this,ht,Xu).call(this,t,n)})},tr=function(t,n,i,s){this.guiControl.add({value:this.galaxyParams[t]},"value").min(n).max(i).step(s).name(t).onFinishChange(o=>{b(this,ht,Xu).call(this,t,o)})},Yu=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},Rm);var bL=`#include <common>

uniform float uTime;

mat2 get2dRotateMatrix(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}`,TL=`#include <uv_vertex>
float angle        = sin(position.y + uTime) * 0.4;
mat2  rotateMatrix = get2dRotateMatrix(angle);`,AL=`#include <beginnormal_vertex>
objectNormal.xz = rotateMatrix * objectNormal.xz;`,EL=`#include <begin_vertex>
transformed.xz = rotateMatrix * transformed.xz;`,mn,kx,$u,Gx,Hx,Vx,Wx,jx,Lm;let CL=(Lm=class extends et{constructor(){super(...arguments);Ee(this,mn);O(this,"modelMaterial");O(this,"modelUniforms",{uTime:{value:0}});O(this,"customDepthMaterial");O(this,"hasAnimation",!0)}get number(){return"31"}get title(){return"Modified materials"}get link(){return"https://threejs-journey.com/lessons/modified-materials"}update(t){this.modelUniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),b(this,mn,Gx).call(this),b(this,mn,Hx).call(this),b(this,mn,Wx).call(this),b(this,mn,jx).call(this),b(this,mn,Vx).call(this)}},mn=new WeakSet,kx=function(){this.modelMaterial.onBeforeCompile=b(this,mn,$u).bind(this),this.customDepthMaterial.onBeforeCompile=b(this,mn,$u).bind(this)},$u=function(t){t.uniforms.uTime=this.modelUniforms.uTime,t.vertexShader=t.vertexShader.replace("#include <common>",bL),t.vertexShader=t.vertexShader.replace("#include <uv_vertex>",TL),t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",AL),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",EL)},Gx=function(){const n=new Id().load(["/three.js-journey/media/images/environmentMap/3/px.jpg","/three.js-journey/media/images/environmentMap/3/nx.jpg","/three.js-journey/media/images/environmentMap/3/py.jpg","/three.js-journey/media/images/environmentMap/3/ny.jpg","/three.js-journey/media/images/environmentMap/3/pz.jpg","/three.js-journey/media/images/environmentMap/3/nz.jpg"]);this.scene.background=n,this.scene.environment=n,this.scene.backgroundIntensity=1,this.scene.environmentIntensity=1},Hx=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/LeePerrySmith/LeePerrySmith.glb",i=>{const s=new _n,o=s.load("/three.js-journey/media/models/LeePerrySmith/normal.jpg"),a=s.load("/three.js-journey/media/models/LeePerrySmith/color.jpg");a.colorSpace=tt;const l=i.scene.children[0];l.receiveShadow=!0,l.castShadow=!0,this.modelMaterial=l.material,this.modelMaterial.map=a,this.modelMaterial.normalMap=o,this.customDepthMaterial=new bg({depthPacking:rg}),l.customDepthMaterial=this.customDepthMaterial,this.scene.add(l),b(this,mn,kx).call(this)})},Vx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ad,this.renderer.toneMapping=vo,this.renderer.toneMappingExposure=1},Wx=function(){const t=new fi(16777215,3);t.position.set(4,1,0),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.far=15,t.shadow.normalBias=.05,this.scene.add(t)},jx=function(){this.camera.position.set(-1,3,10)},Lm);const PL="/three.js-journey/assets/perlin-CqwIJTvm.png",RL="/three.js-journey/assets/bakedModel-EZnnxNa-.glb";var LL=`uniform float     uTime;
uniform sampler2D uPerlinNoiseTexture;

varying vec2 vUv;

vec2 rotate2D(vec2 value, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float rotationNoise = texture(
        uPerlinNoiseTexture,
        vec2(0.5, modelPosition.y * 0.1 - uTime * 0.02)
    ).r;
    float angle      = rotationNoise * 5.0;
    modelPosition.xz = rotate2D(modelPosition.xz, angle);

    float windNoiseX = texture(
        uPerlinNoiseTexture,
        vec2(0.25, uTime * 0.01)
    ).r;
    float windNoiseZ = texture(
        uPerlinNoiseTexture,
        vec2(0.75, uTime * 0.01)
    ).r;
    vec2 windOffset   = vec2(windNoiseX - 0.5, windNoiseZ - 0.5);
    windOffset       *= pow(uv.y, 2.0) * 10.0;
    modelPosition.xz += windOffset;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}`,DL=`uniform float     uTime;
uniform sampler2D uPerlinNoiseTexture;

varying vec2 vUv;

void main() {
    vec2 smokeUv  = vUv;
    smokeUv.x    *= 0.5;
    smokeUv.y    *= 0.3;
    smokeUv.y    -= uTime * 0.03;
    float smoke   = texture(uPerlinNoiseTexture, smokeUv).r;

    smoke  = smoothstep(0.4, 1.0, smoke);
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    gl_FragColor = vec4(0.6, 0.3, 0.2, smoke);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,Us,Xx,qx,Yx,Dm;let IL=(Dm=class extends et{constructor(){super(...arguments);Ee(this,Us);O(this,"smokeMaterial",null);O(this,"hasAnimation",!0)}get number(){return"32"}get title(){return"Coffee Smoke"}get link(){return"https://threejs-journey.com/lessons/coffee-smoke-shader"}update(t){this.smokeMaterial&&(this.smokeMaterial.uniforms.uTime.value=t*.001),this.control.update()}init(){super.init(),b(this,Us,qx).call(this),b(this,Us,Yx).call(this)}},Us=new WeakSet,Xx=function(){const n=new _n().load(PL);n.wrapS=_t,n.wrapT=_t;const i=new Bt(1,1,16,64);this.smokeMaterial=new Ot({transparent:!0,depthWrite:!1,side:Mn,vertexShader:LL,fragmentShader:DL,uniforms:{uPerlinNoiseTexture:new je(n),uTime:new je(0)}});const s=new ce(i,this.smokeMaterial);s.scale.set(1.5,6,1.5),s.position.y=4.83,this.scene.add(s)},qx=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load(RL,i=>{this.scene.add(i.scene),b(this,Us,Xx).call(this)})},Yx=function(){this.camera.position.set(3,9,6)},Dm);var NL=`uniform float uTime;

varying vec3 vModelPosition;
varying vec3 vNormalPosition;

float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec4 normalPosition   = modelMatrix * vec4(normal, 0.0);
    vec4 modelPosition    = modelMatrix * vec4(position, 1.0);
    float glitchFactor    = uTime - modelPosition.y;
    float glitchStrength  = sin(glitchFactor)        +
                            sin(glitchFactor * 3.45) +
                            sin(glitchFactor * 8.76);
    float glitchRandomX   = random2D(modelPosition.xz + uTime) - 0.5;
    float glitchRandomZ   = random2D(modelPosition.zx + uTime) - 0.5;
    glitchStrength       /= 3.0;
    glitchStrength        = smoothstep(0.3, 1.0, glitchStrength);
    glitchStrength       *= 0.25;
    modelPosition.x      += glitchRandomX * glitchStrength;
    modelPosition.z      += glitchRandomZ * glitchStrength;

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vModelPosition  = modelPosition.xyz;
    vNormalPosition = normalPosition.xyz;
}`,UL=`uniform float uTime;
uniform vec3  uColor;

varying vec3 vModelPosition;
varying vec3 vNormalPosition;

void main() {
    float stripe = mod((vModelPosition.y - (uTime * 0.02)) * 20.0, 1.0);
    stripe       = pow(stripe, 2.0);

    vec3 normal = normalize(vNormalPosition);
    if (!gl_FrontFacing) {
        normal *= -1.0;
    }
    vec3 viewDirection = normalize(vModelPosition - cameraPosition);
    float fresnel      = 1.0 + dot(viewDirection, normal);
    fresnel            = pow(fresnel, 2.0);

    float fallof = smoothstep(0.8, 0.0, fresnel);

    float holographic  = stripe * fresnel;
    holographic       += fresnel * 1.25;
    holographic       *= fallof;

    gl_FragColor = vec4(uColor, holographic);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,ki,$x,Kx,Zx,Jx,Im;let FL=(Im=class extends et{constructor(){super(...arguments);Ee(this,ki);O(this,"suzanne",null);O(this,"torusKnot");O(this,"sphere");O(this,"material");O(this,"hologramColor","#70c1ff");O(this,"backgroundColor","#1d1f2a");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"33"}get title(){return"Hologram"}get link(){return"https://threejs-journey.com/lessons/hologram-shader"}update(t){const n=t*.001,i=-n*.1,s=n*.2;this.material.uniforms.uTime.value=n,this.suzanne&&(this.suzanne.rotation.x=i,this.suzanne.rotation.y=s),this.sphere.rotation.x=i,this.sphere.rotation.y=s,this.torusKnot.rotation.x=i,this.torusKnot.rotation.y=s,this.control.update()}init(){super.init(),b(this,ki,$x).call(this),b(this,ki,Kx).call(this),b(this,ki,Zx).call(this),b(this,ki,Jx).call(this)}},ki=new WeakSet,$x=function(){this.guiControl.addColor({backgroundColor:this.backgroundColor},"backgroundColor").onChange(t=>{this.renderer.setClearColor(t)}),this.guiControl.addColor({hologramColor:this.hologramColor},"hologramColor").onChange(t=>{this.material.uniforms.uColor.value.set(t)})},Kx=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.material=new Ot({transparent:!0,side:Mn,depthWrite:!1,blending:as,vertexShader:NL,fragmentShader:UL,uniforms:{uTime:new je(0),uColor:new je(new ge(this.hologramColor))}}),this.sphere=new ce(new Qn(1),this.material),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ce(new vr(.6,.25,128,32),this.material),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{i.scene.traverse(o=>{o.isMesh&&(this.suzanne=o,this.suzanne.material=this.material,this.scene.add(this.suzanne))})})},Zx=function(){this.camera.position.set(3,3,3)},Jx=function(){this.renderer.setClearColor(this.backgroundColor)},Im);var OL=`uniform float uProgress;
uniform float uSize;

attribute float aTimeMultiplier;
attribute float aScale;

float remap(float value, float originMin, float originMax, float destinationMin, float destinationMax) {
    return destinationMin                    +
           (value - originMin)               *
           (destinationMax - destinationMin) /
           (originMax - originMin);
}

void main() {
    vec3 transformed = position;
    float progress   = uProgress * aTimeMultiplier;

    float explodeProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);
    explodeProgress       = clamp(explodeProgress, 0.0, 1.0);
    explodeProgress       = 1.0 - pow(1.0 - explodeProgress, 3.0);
    transformed           = mix(vec3(0.0), transformed, explodeProgress);

    float fallProgress  = remap(progress, 0.1, 1.0, 0.0, 1.0);
    fallProgress        = clamp(fallProgress, 0.0, 1.0);
    transformed.y      -= 0.2 * fallProgress;

    float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);
    float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);
    float sizeProgress        = min(sizeOpeningProgress, sizeClosingProgress);
    sizeProgress              = clamp(sizeProgress, 0.0, 1.0);

    float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);
    twinklingProgress       = clamp(twinklingProgress, 0.0, 1.0);
    float twinklingSize     = sin(progress * 30.0) * 0.5 + 0.5;
    twinklingSize           = 1.0 - twinklingSize * twinklingProgress;

    vec4 modelPosition      = modelMatrix      * vec4(transformed, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position   = projectionPosition;
    gl_PointSize  = uSize;
    gl_PointSize *= aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);
    gl_PointSize *= sizeProgress;
    gl_PointSize *= twinklingSize;

    if (gl_PointSize < 1.0) {
        gl_Position = vec4(9999.9);
    }
}`,BL=`uniform vec3      uColor;
uniform sampler2D uTexture;

void main() {
    float alpha = texture(uTexture, gl_PointCoord).r;

    gl_FragColor = vec4(uColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,Fs,Qx,ey,ty;class zL{constructor(e=null){Ee(this,Fs);O(this,"instance");O(this,"texture");O(this,"material");O(this,"geometry");O(this,"textures",["/three.js-journey/media/images/textures/particles/1.png","/three.js-journey/media/images/textures/particles/2.png","/three.js-journey/media/images/textures/particles/3.png","/three.js-journey/media/images/textures/particles/4.png","/three.js-journey/media/images/textures/particles/5.png","/three.js-journey/media/images/textures/particles/6.png","/three.js-journey/media/images/textures/particles/7.png","/three.js-journey/media/images/textures/particles/8.png","/three.js-journey/media/images/textures/particles/9.png","/three.js-journey/media/images/textures/particles/10.png","/three.js-journey/media/images/textures/particles/11.png","/three.js-journey/media/images/textures/particles/12.png","/three.js-journey/media/images/textures/particles/13.png"]);O(this,"parameters",{position:new I(0,0,0),particles:1e3,particleSize:.05,particleColor:"#8affff",radius:3,texture:10});e&&(this.parameters=e),b(this,Fs,Qx).call(this)}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose(),this.instance=null,this.geometry=null,this.material=null,this.texture=null}}Fs=new WeakSet,Qx=function(){b(this,Fs,ey).call(this),b(this,Fs,ty).call(this),this.instance=new Bs(this.geometry,this.material),this.instance.position.copy(this.parameters.position)},ey=function(){const e=this.parameters.particles,t=e*3,n=new Float32Array(t),i=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<e;o++){const a=o*3,l=new $l(this.parameters.radius*(.75+.25*Math.random()),Math.random()*Math.PI,Math.random()*2*Math.PI),c=new I().setFromSpherical(l);n[a+0]=c.x,n[a+1]=c.y,n[a+2]=c.z,i[o]=Math.random(),s[o]=1+Math.random()}this.geometry=new ut,this.geometry.setAttribute("position",new Ze(n,3)),this.geometry.setAttribute("aScale",new Ze(i,1)),this.geometry.setAttribute("aTimeMultiplier",new Ze(s,1))},ty=function(){const e=new _n;this.texture=e.load(this.textures[this.parameters.texture]),this.texture.flipY=!1,this.material=new Ot({transparent:!0,blending:as,depthWrite:!1,vertexShader:OL,fragmentShader:BL,uniforms:{uSize:new je(this.parameters.particleSize),uTexture:new je(this.texture),uColor:new je(new ge(this.parameters.particleColor)),uProgress:new je(0)}})};var fo,ns,cn,ny,iy,Ku,sy,Zu,Ju,ry,Nm;let kL=(Nm=class extends et{constructor(){super(...arguments);Ee(this,cn);O(this,"fireworks",[]);O(this,"hasGuiTweaks",!1);O(this,"hasAnimation",!0);Ee(this,fo);Ee(this,ns,{turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.95,elevation:-2.2,azimuth:180})}get number(){return"34"}get title(){return"Fireworks"}get link(){return"https://threejs-journey.com/lessons/fireworks-shaders"}update(){this.control.update()}init(){super.init(),b(this,cn,ny).call(this),b(this,cn,Ku).call(this),b(this,cn,iy).call(this),b(this,cn,ry).call(this)}resizeRenderer(){super.resizeRenderer(),this.fireworks.length&&this.fireworks.forEach(t=>{b(this,cn,Ju).call(this,t)})}dispose(){b(this,cn,sy).call(this),this.canvas.removeEventListener("click",Re(this,fo)),super.dispose()}},fo=new WeakMap,ns=new WeakMap,cn=new WeakSet,ny=function(){const t=new Fa;t.scale.setScalar(45e4);const n=new I,i=t.material.uniforms;i.turbidity.value=Re(this,ns).turbidity,i.rayleigh.value=Re(this,ns).rayleigh,i.mieCoefficient.value=Re(this,ns).mieCoefficient,i.mieDirectionalG.value=Re(this,ns).mieDirectionalG;const s=Xl.degToRad(90-Re(this,ns).elevation),o=Xl.degToRad(Re(this,ns).azimuth);n.setFromSphericalCoords(1,s,o),i.sunPosition.value.copy(n),this.scene.add(t)},iy=function(){It(this,fo,b(this,cn,Ku).bind(this)),this.canvas.addEventListener("click",Re(this,fo))},Ku=function(){const t=new zL({position:new I((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),particles:1500+Math.floor(1e3*Math.random()),particleSize:.08+.02*Math.random(),particleColor:`rgb(${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())})`,radius:1+Math.random(),texture:Math.floor(12*Math.random())});b(this,cn,Ju).call(this,t),this.scene.add(t.instance),this.fireworks.push(t),gr.to(t.material.uniforms.uProgress,{value:1,duration:3,ease:"linear",onComplete:()=>{b(this,cn,Zu).call(this,t)}})},sy=function(){this.fireworks.forEach(t=>{t.instance&&b(this,cn,Zu).call(this,t)}),this.fireworks=[]},Zu=function(t){this.scene.remove(t.instance),t.dispose()},Ju=function(t){t.material.uniforms.uSize.value=t.parameters.particleSize*this.canvas.height*this.renderer.getPixelRatio()},ry=function(){this.camera.position.set(4,4,4)},Nm);var GL=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec4 modelPosition      = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    vec4 modelNormal        = normalize(modelMatrix * vec4(normal, 0.0));

    gl_Position = projectionPosition;
    vPosition   = modelPosition.xyz;
    vNormal     = modelNormal.xyz;
}`,HL=`uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

vec3 genAmbLight(vec3 color, float intensity) {
    return color * intensity;
}
vec3 genDirLight(
    vec3  color,
    float intensity,
    vec3  lightPosition,
    vec3  normal,
    vec3  viewDirection,
    float specularFactor
) {
    vec3  lightDirection = normalize(lightPosition);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  lightReflection = normalize(reflect(-lightDirection, normal));
    float specular        = -dot(viewDirection, lightReflection);
    specular              = max(0.0, specular);
    specular              = pow(specular, specularFactor);

    return color * intensity * (shading + specular);
}
vec3 genPointLight(
    vec3  color,
    float intensity,
    vec3  fragPosition,
    vec3  lightPosition,
    vec3  normal,
    vec3  viewDirection,
    float specularFactor,
    float decayFactor
) {
    vec3  lightDelta     = lightPosition - fragPosition;
    vec3  lightDirection = normalize(lightDelta);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  lightReflection = normalize(reflect(-lightDirection, normal));
    float specular        = -dot(viewDirection, lightReflection);
    specular              = max(0.0, specular);
    specular              = pow(specular, specularFactor);

    float decay = 1.0 - length(lightDelta) * decayFactor;
    decay       = max(0.0, decay);

    return color * intensity * decay * (shading + specular);
}

void main() {
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    vec3 color    = uColor;
    vec3 ambLight = genAmbLight(
        vec3(1.0),
        0.03
    );
    vec3 dirLight = genDirLight(
        vec3(0.1, 0.1, 1.0),
        1.0,
        vec3(0.0, 0.0, 3.0),
        vNormal,
        viewDirection,
        20.0
    );
    vec3 pointLight1 = genPointLight(
        vec3(1.0, 0.1, 0.1),
        1.0,
        vPosition,
        vec3(0.0, 2.5, 0.0),
        vNormal,
        viewDirection,
        20.0,
        0.25
    );
    vec3 pointLight2 = genPointLight(
        vec3(0.1, 1.0, 0.5),
        1.0,
        vPosition,
        vec3(2.0, 2.0, 2.0),
        vNormal,
        viewDirection,
        20.0,
        0.2
    );
    vec3 totalLight = ambLight + dirLight + pointLight1 + pointLight2;
    vec3 finalColor = color * totalLight;

    gl_FragColor = vec4(finalColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,di,oy,ay,ly,cy,hy,Um;let VL=(Um=class extends et{constructor(){super(...arguments);Ee(this,di);O(this,"suzanne",null);O(this,"torusKnot");O(this,"sphere");O(this,"material");O(this,"materialColor","#ffffff");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"35"}get title(){return"Lights Shading"}get link(){return"https://threejs-journey.com/lessons/lights-shading-shaders"}update(t){const n=t*.001;this.suzanne&&(this.suzanne.rotation.x=-n*.1,this.suzanne.rotation.y=n*.2),this.sphere.rotation.x=-n*.1,this.sphere.rotation.y=n*.2,this.torusKnot.rotation.x=-n*.1,this.torusKnot.rotation.y=n*.2,this.control.update()}init(){super.init(),b(this,di,ay).call(this),b(this,di,ly).call(this),b(this,di,cy).call(this),b(this,di,hy).call(this),b(this,di,oy).call(this)}},di=new WeakSet,oy=function(){this.camera.position.set(5,5,5)},ay=function(){this.guiControl.addColor({color:this.materialColor},"color").onChange(t=>{this.material.uniforms.uColor.value.set(t)})},ly=function(){this.material=new Ot({vertexShader:GL,fragmentShader:HL,uniforms:{uColor:new je(new ge(this.materialColor))}})},cy=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.sphere=new ce(new Qn,this.material),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ce(new vr(.6,.25,128,32),this.material),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{this.suzanne=i.scene,this.suzanne.traverse(s=>{s.isMesh&&(s.material=this.material)}),this.scene.add(this.suzanne)})},hy=function(){const t=new ce(new Bt,new St({}));t.position.set(0,0,3),t.material.side=Mn,t.material.color.setRGB(.1,.1,1),this.scene.add(t);const n=new ce(new Sa(.1,2),new St({}));n.position.set(0,2.5,0),n.material.color.setRGB(1,.1,.1),this.scene.add(n);const i=new ce(new Sa(.1,2),new St({}));i.position.set(2,2,2),i.material.color.setRGB(.1,1,.5),this.scene.add(i)},Um);var WL=`uniform float uTime;
uniform float uNormalShift;
uniform float uBigWavesElevation;
uniform vec2  uBigWavesFrequency;
uniform float uBigWavesSpeed;
uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallWavesIterations;

varying vec3 vPosition;
varying vec3 vNormal;

vec4 _permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 _taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 _fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float calcPerlinNoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = _permute(_permute(ix) + iy);
    vec4 ixy0 = _permute(ixy + iz0);
    vec4 ixy1 = _permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = _taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = _taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = _fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
vec3 calcWave(
    vec3  position,
    vec2  bigWavesFrequency,
    float bigWavesElevation,
    float bigWavesSpeed,
    float smallWavesFrequency,
    float smallWavesElevation,
    float smallWavesSpeed,
    float smallWavesIterations,
    float time
) {
    position.y =
        sin(position.x * bigWavesFrequency.x + time * bigWavesSpeed) *
        sin(position.z * bigWavesFrequency.y + time * bigWavesSpeed) *
        bigWavesElevation;

    for(float i = 1.0; i <= smallWavesIterations; i++) {
        position.y -= abs(
            calcPerlinNoise(
                vec3(
                    position.xz * smallWavesFrequency * i,
                    time * smallWavesSpeed
                )
            ) * smallWavesElevation / i
        );
    }

    return position;
}

void main() {
    vec4 modelPosition  = modelMatrix * vec4(position, 1.0);
    vec3 iUnitPosition  = modelPosition.xyz + vec3(uNormalShift, 0.0, 0.0);
    vec3 jUnitPosition  = modelPosition.xyz + vec3(0.0, 0.0, -uNormalShift);
    modelPosition.xyz   = calcWave(
        modelPosition.xyz,
        uBigWavesFrequency,
        uBigWavesElevation,
        uBigWavesSpeed,
        uSmallWavesFrequency,
        uSmallWavesElevation,
        uSmallWavesSpeed,
        uSmallWavesIterations,
        uTime
    );
    iUnitPosition = calcWave(
        iUnitPosition.xyz,
        uBigWavesFrequency,
        uBigWavesElevation,
        uBigWavesSpeed,
        uSmallWavesFrequency,
        uSmallWavesElevation,
        uSmallWavesSpeed,
        uSmallWavesIterations,
        uTime
    );
    jUnitPosition = calcWave(
        jUnitPosition.xyz,
        uBigWavesFrequency,
        uBigWavesElevation,
        uBigWavesSpeed,
        uSmallWavesFrequency,
        uSmallWavesElevation,
        uSmallWavesSpeed,
        uSmallWavesIterations,
        uTime
    );
    vec3 iUnitVector = normalize(iUnitPosition - modelPosition.xyz);
    vec3 jUnitVector = normalize(jUnitPosition - modelPosition.xyz);

    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    vPosition   = modelPosition.xyz;
    vNormal     = cross(iUnitVector, jUnitVector);
}`,jL=`uniform float uBigWavesElevation;
uniform vec3  uDepthColor;
uniform vec3  uSurfaceColor;

varying vec3 vPosition;
varying vec3 vNormal;

vec3 genPointLight(
    vec3  color,
    float intensity,
    vec3  lightPosition,
    vec3  fragPosition,
    vec3  viewDirection,
    vec3  normal,
    float specularFactor,
    float decayFactor
) {
    vec3  lightVector    = lightPosition - fragPosition;
    vec3  lightDirection = normalize(lightVector);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  reflectionDirection = normalize(reflect(-lightDirection, normal));
    float specular            = -dot(reflectionDirection, viewDirection);
    specular                  = max(0.0, specular);
    specular                  = pow(specular, specularFactor);

    float decay = 1.0 - length(lightVector) * decayFactor;
    decay       = max(0.0, decay);

    return color * intensity * decay * (shading + specular);
}

void main() {
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    float mixStrength = smoothstep(
        -uBigWavesElevation,
        uBigWavesElevation,
        vPosition.y
    );
    vec3 color  = mix(uDepthColor, uSurfaceColor, mixStrength);
    vec3 light  = vec3(0.0);
    light      += genPointLight(
        vec3(1.0),
        4.0,
        vec3(0.0, 0.25, 0.0),
        vPosition,
        viewDirection,
        vNormal,
        50.0,
        0.95
    );
    color        *= light;
    gl_FragColor  = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,Mt,uy,dy,Qu,fy,Ai,py,my,gy,Fm;let XL=(Fm=class extends et{constructor(){super(...arguments);Ee(this,Mt);O(this,"seaMaterial");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"36"}get title(){return"Raging Sea Shading"}get link(){return"https://threejs-journey.com/lessons/raging-sea-shading-shaders"}update(t){this.seaMaterial.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),b(this,Mt,dy).call(this),b(this,Mt,uy).call(this),b(this,Mt,gy).call(this),b(this,Mt,my).call(this)}},Mt=new WeakSet,uy=function(){b(this,Mt,Ai).call(this,"uBigWavesElevation",0,1,.001),b(this,Mt,fy).call(this,"uBigWavesFrequency",0,10,.001),b(this,Mt,Ai).call(this,"uBigWavesSpeed",0,4,.001),b(this,Mt,Ai).call(this,"uSmallWavesElevation",0,1,.001),b(this,Mt,Ai).call(this,"uSmallWavesFrequency",0,10,.001),b(this,Mt,Ai).call(this,"uSmallWavesSpeed",0,4,.001),b(this,Mt,Ai).call(this,"uSmallWavesIterations",0,5,1),b(this,Mt,Ai).call(this,"uNormalShift",.001,1,.001),b(this,Mt,Qu).call(this,"uDepthColor"),b(this,Mt,Qu).call(this,"uSurfaceColor")},dy=function(){const t=new Bt(2,2,512,512);t.deleteAttribute("normal"),t.deleteAttribute("uv"),this.seaMaterial=new Ot({vertexShader:WL,fragmentShader:jL,uniforms:{uTime:new je(0),uBigWavesElevation:new je(.2),uBigWavesFrequency:new je(new te(4,1.5)),uBigWavesSpeed:new je(1.5),uSmallWavesElevation:new je(.15),uSmallWavesFrequency:new je(2.9),uSmallWavesSpeed:new je(.8),uSmallWavesIterations:new je(3),uDepthColor:new je(new ge("#ff4000")),uSurfaceColor:new je(new ge("#151c37")),uNormalShift:new je(.01)}});const n=new ce(t,this.seaMaterial);n.rotation.x=-Math.PI/2,this.scene.add(n)},Qu=function(t){this.guiControl.addColor({[t]:this.seaMaterial.uniforms[t].value.getHexString()},t).name(t).onChange(n=>{this.seaMaterial.uniforms[t].value.set(n)})},fy=function(t,n,i,s){const o=this.guiControl.addFolder(t);b(this,Mt,Ai).call(this,"x",n,i,s,this.seaMaterial.uniforms[t].value.x,o,a=>{this.seaMaterial.uniforms[t].value.x=a}),b(this,Mt,Ai).call(this,"y",n,i,s,this.seaMaterial.uniforms[t].value.y,o,a=>{this.seaMaterial.uniforms[t].value.y=a})},Ai=function(t,n,i,s,o=null,a=null,l=null){let c=this.guiControl;a&&(c=a);let h;o?h=o:h=this.seaMaterial.uniforms[t].value;const u=c.add({[t]:h},t).min(n).max(i).step(s).name(t);b(this,Mt,py).call(this,u,l)},py=function(t,n=null){let i=s=>{this.seaMaterial.uniforms[t.property].value=s};n&&(i=n),t.onChange(i)},my=function(){this.renderer.toneMapping=vo},gy=function(){this.camera.position.set(1,1,1)},Fm);var qL=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vPosition = modelPosition.xyz;
    vNormal   = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
}`,YL=`uniform vec3  uBaseColor;
uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uRepetitions;

varying vec3 vPosition;
varying vec3 vNormal;

vec3 genAmbLight(vec3 color, float intensity) {
    return color * intensity;
}
vec3 genDirLight(
    vec3  color,
    float intensity,
    vec3  lightPosition,
    vec3  normal,
    vec3  viewDirection,
    float specularFactor
) {
    vec3  lightDirection = normalize(lightPosition);
    float shading        = dot(lightDirection, normal);
    shading              = max(0.0, shading);

    vec3  lightReflection = normalize(reflect(-lightDirection, normal));
    float specular        = -dot(viewDirection, lightReflection);
    specular              = max(0.0, specular);
    specular              = pow(specular, specularFactor);

    return color * intensity * (shading + specular);
}

vec3 halftone(
    vec2  uv,
    float repetitions,
    vec3  halftoneDir,
    float lowRadFactor,
    float highRadFactor,
    vec3  normal,
    vec3  pointColor,
    vec3  baseColor
) {
    float intensity  = dot(normal, halftoneDir);
    intensity        = smoothstep(lowRadFactor, highRadFactor, intensity);
    uv              *= repetitions;
    uv               = mod(uv, 1.0);
    float point      = distance(uv, vec2(0.5));
    point            = 1.0 - step(0.5 * intensity, point);
    return mix(baseColor, pointColor, point);
}

void main() {
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    vec2 uv  = gl_FragCoord.xy;
         uv /= uResolution.y;

    vec3 color = uBaseColor;

    vec3 light  = vec3(0.0);
    light      += genAmbLight(vec3(1.0), 1.0);
    light      += genDirLight(
        vec3(1.0),
        1.0,
        vec3(1.0, 1.0, 0.0),
        vNormal,
        viewDirection,
        1.0
    );
    color *= light;

    color = halftone(
        uv,
        uRepetitions,
        normalize(vec3(0.0, -1.0, 0.0)),
        -0.8,
        1.5,
        vNormal,
        uColor,
        color
    );

    color = halftone(
        uv,
        uRepetitions * 2.0,
        normalize(vec3(1.0, 1.0, 0.0)),
        -0.8,
        1.5,
        vNormal,
        vec3(1.0),
        color
    );

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,Da,Jn,_y,vy,xy,yy,ed,Om;let $L=(Om=class extends et{constructor(){super(...arguments);Ee(this,Jn);O(this,"suzanne",null);O(this,"torusKnot");O(this,"sphere");O(this,"halftoneMaterial");O(this,"halftoneRepetitions",100);O(this,"halftoneColor","#8e19b8");O(this,"halftoneBaseColor","#ff794d");O(this,"backgroundColor","#26132f");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0);Ee(this,Da)}get number(){return"37"}get title(){return"Halftone Shading"}get link(){return"https://threejs-journey.com/lessons/halftone-shading-shaders"}update(t){const n=t*.001;this.suzanne&&(this.suzanne.rotation.x=-n*.1,this.suzanne.rotation.y=n*.2),this.sphere.rotation.x=-n*.1,this.sphere.rotation.y=n*.2,this.torusKnot.rotation.x=-n*.1,this.torusKnot.rotation.y=n*.2,this.control.update()}init(){super.init(),b(this,Jn,_y).call(this),b(this,Jn,vy).call(this),b(this,Jn,xy).call(this),b(this,Jn,yy).call(this)}dispose(){this.canvas.removeEventListener("resize",Re(this,Da)),super.dispose()}},Da=new WeakMap,Jn=new WeakSet,_y=function(){const t=this.guiControl.addFolder("Halftone Downward");t.add({repetitions:this.halftoneRepetitions},"repetitions").min(10).max(300).step(1).onChange(n=>{this.halftoneMaterial.uniforms.uRepetitions.value=n}),t.addColor({color:this.halftoneColor},"color").onChange(n=>{this.halftoneMaterial.uniforms.uColor.value.set(n)}),t.addColor({baseColor:this.halftoneBaseColor},"baseColor").onChange(n=>{this.halftoneMaterial.uniforms.uBaseColor.value.set(n)}),this.guiControl.addColor({backgroundColor:this.backgroundColor},"backgroundColor").onChange(n=>{this.renderer.setClearColor(n)})},vy=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.halftoneMaterial=new Ot({vertexShader:qL,fragmentShader:YL,uniforms:{uBaseColor:new je(new ge(this.halftoneBaseColor)),uColor:new je(new ge(this.halftoneColor)),uRepetitions:new je(this.halftoneRepetitions),uResolution:new je(b(this,Jn,ed).call(this))}}),this.sphere=new ce(new Qn,this.halftoneMaterial),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ce(new vr(.6,.25,128,32),this.halftoneMaterial),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{i.scene.traverse(o=>{o.isMesh&&(o.material=this.halftoneMaterial,this.suzanne=o,this.scene.add(this.suzanne))})})},xy=function(){this.camera.position.set(3,3,3)},yy=function(){this.renderer.setClearColor(this.backgroundColor),It(this,Da,()=>{this.halftoneMaterial.uniforms.uResolution.value=b(this,Jn,ed).call(this)})},ed=function(){return new te(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio())},Om);const KL="/three.js-journey/assets/day-DkcerPt2.jpg",ZL="/three.js-journey/assets/night-BR_DbmEQ.jpg",JL="/three.js-journey/assets/specularCloud-DpLQ1-js.jpg";var QL=`varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vNormal   = (modelMatrix * vec4(normal, 1.0)).xyz;
    vPosition = modelPosition.xyz;
}`,e2=`varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

vec3 genAtmosphereColor(
    vec3  color,
    vec3  atmosphereDayColor,
    vec3  atmosphereTwilightColor,
    float fresnel,
    float sunOrientation
) {
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3  atmosphereColor  = mix(
        atmosphereTwilightColor,
        atmosphereDayColor,
        atmosphereDayMix
    );
    fresnel = pow(fresnel, 2.0);
    return mix(color, atmosphereColor, fresnel * atmosphereDayMix);
}

void main() {
    vec3  normal        = normalize(vNormal);
    vec3  viewDirection = normalize(vPosition - cameraPosition);
    float fresnel       = 1.0 + dot(viewDirection, normal);
    vec3  color         = vec3(0.0);

    float sunOrientation = dot(uSunDirection, normal);
    color                = genAtmosphereColor(
        color,
        uAtmosphereDayColor,
        uAtmosphereTwilightColor,
        fresnel,
        sunOrientation
    );

    float edgeAlpha = smoothstep(1.1, 1.5, fresnel);
    float dayAlpha  = smoothstep(0.0, 1.0, length(color));
    float alpha     = edgeAlpha * dayAlpha;

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,t2=`varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec4 modelPosition      = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv       = uv;
    vNormal   = (modelMatrix * vec4(normal, 0.0)).xyz;
    vPosition = modelPosition.xyz;
}`,n2=`uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudTexture;
uniform vec3      uSunDirection;
uniform vec3      uAtmosphereDayColor;
uniform vec3      uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 genAtmosphereColor(
    vec3  color,
    vec3  atmosphereDayColor,
    vec3  atmosphereTwilightColor,
    float fresnel,
    float sunOrientation
) {
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3  atmosphereColor  = mix(
        atmosphereTwilightColor,
        atmosphereDayColor,
        atmosphereDayMix
    );
    fresnel = pow(fresnel, 2.0);
    return mix(color, atmosphereColor, fresnel * atmosphereDayMix);
}

void main() {
    vec3 normal        = normalize(vNormal);
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel      = dot(viewDirection, normal) + 1.0;

    vec3  color          = vec3(0.0);
    float sunOrientation = dot(uSunDirection, normal);
    float dayMix         = smoothstep(-0.25, 0.5, sunOrientation);
    vec3  dayColor       = texture(uDayTexture, vUv).rgb;
    vec3  nightColor     = texture(uNightTexture, vUv).rgb;
    color                = mix(nightColor, dayColor, dayMix);

    vec2  specularCloud  = texture(uSpecularCloudTexture, vUv).rg;
    float cloudMix       = smoothstep(0.5, 1.0, specularCloud.g);
    cloudMix            *= dayMix;
    color                = mix(color, vec3(1.0), cloudMix);

    vec3 atmosphereColor = genAtmosphereColor(
        color,
        uAtmosphereDayColor,
        uAtmosphereTwilightColor,
        fresnel,
        sunOrientation
    );
    color = atmosphereColor;

    vec3  reflectDirection  = normalize(reflect(-uSunDirection, normal));
    float specular          = -1.0 * dot(viewDirection, reflectDirection);
    specular                = max(0.0, specular);
    specular                = pow(specular, 32.0);
    specular               *= specularCloud.r;
    vec3 specularColor      = vec3(1.0);
    specularColor           = mix(specularColor, atmosphereColor, fresnel);
    color                  += specular * specularColor;

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,gn,My,td,Sy,wy,by,Ty,Ay,Bm;let i2=(Bm=class extends et{constructor(){super(...arguments);Ee(this,gn);O(this,"earth");O(this,"earthMaterial");O(this,"earthGeometry");O(this,"earthParameters",{atmosphereDayColor:"#00aaff",atmosphereTwilightColor:"#ff6600"});O(this,"atmosphere");O(this,"atmosphereMaterial");O(this,"sun");O(this,"sunDirection");O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0)}get number(){return"38"}get title(){return"Earth"}get link(){return"https://threejs-journey.com/lessons/earth-shaders"}update(t){const n=t*.001;this.earth.rotation.y=.1*n,this.control.update()}init(){super.init(),b(this,gn,Sy).call(this),b(this,gn,by).call(this),b(this,gn,wy).call(this),b(this,gn,My).call(this),b(this,gn,Ty).call(this),b(this,gn,Ay).call(this)}},gn=new WeakSet,My=function(){const t=new $l;t.setFromCartesianCoords(...this.sun.position),this.guiControl.add(t,"phi").min(0).max(Math.PI).step(.1).onChange(n=>{t.phi=n,b(this,gn,td).call(this,t)}),this.guiControl.add(t,"theta").min(0).max(2*Math.PI).step(.1).onChange(n=>{t.theta=n,b(this,gn,td).call(this,t)}),this.guiControl.addColor(this.earthParameters,"atmosphereDayColor").onChange(n=>{this.earthMaterial.uniforms.uAtmosphereDayColor.value.set(n),this.atmosphereMaterial.uniforms.uAtmosphereDayColor.value.set(n)}),this.guiControl.addColor(this.earthParameters,"atmosphereTwilightColor").onChange(n=>{this.earthMaterial.uniforms.uAtmosphereTwilightColor.value.set(n),this.atmosphereMaterial.uniforms.uAtmosphereTwilightColor.value.set(n)})},td=function(t){this.sun.position.setFromSpherical(t),this.sunDirection.set(...this.sun.position).normalize(),this.earthMaterial.uniforms.uSunDirection.value=this.sunDirection,this.atmosphereMaterial.uniforms.uSunDirection.value=this.sunDirection},Sy=function(){this.sun=new ce(new Sa(.1,2),new St({})),this.sun.position.set(0,0,10),this.scene.add(this.sun),this.sunDirection=new I(...this.sun.position).normalize()},wy=function(){this.atmosphereMaterial=new Ot({vertexShader:QL,fragmentShader:e2,side:pn,transparent:!0,uniforms:{uSunDirection:new je(this.sunDirection),uAtmosphereDayColor:new je(new ge(this.earthParameters.atmosphereDayColor)),uAtmosphereTwilightColor:new je(new ge(this.earthParameters.atmosphereTwilightColor))}}),this.atmosphere=new ce(this.earthGeometry,this.atmosphereMaterial),this.atmosphere.scale.set(1.04,1.04,1.04),this.scene.add(this.atmosphere)},by=function(){const t=new _n,n=Math.floor(this.renderer.capabilities.getMaxAnisotropy()/2),i=t.load(KL);i.colorSpace=tt,i.anisotropy=n;const s=t.load(ZL);s.colorSpace=tt,s.anisotropy=n;const o=t.load(JL);o.anisotropy=n,this.earthGeometry=new Qn(2,64,64),this.earthMaterial=new Ot({vertexShader:t2,fragmentShader:n2,uniforms:{uDayTexture:new je(i),uNightTexture:new je(s),uSpecularCloudTexture:new je(o),uSunDirection:new je(this.sunDirection),uAtmosphereDayColor:new je(new ge(this.earthParameters.atmosphereDayColor)),uAtmosphereTwilightColor:new je(new ge(this.earthParameters.atmosphereTwilightColor))}}),this.earth=new ce(this.earthGeometry,this.earthMaterial),this.scene.add(this.earth)},Ty=function(){this.camera.fov=25,this.camera.position.set(12,6,4),this.camera.updateProjectionMatrix()},Ay=function(){this.renderer.setClearColor("#000011")},Bm);var s2=`uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;
uniform vec2      uResolution;

attribute float aDisplacementRandomFactor;
attribute float aDisplacementRandomAngle;

varying vec3 vColor;

void main() {
    vec3  newPosition        = position;
    float displacementFactor = texture(uDisplacementTexture, uv).r;
    displacementFactor       = smoothstep(0.1, 0.3, displacementFactor);
    float radius             = 0.2;
    vec3  displacementDir    = vec3(
        sin(aDisplacementRandomAngle) * radius,
        cos(aDisplacementRandomAngle) * radius,
        1.0
    );
    displacementDir  = normalize(displacementDir);
    newPosition     +=
        aDisplacementRandomFactor * displacementFactor * displacementDir;

    vec4 modelPosition      = modelMatrix      * vec4(newPosition, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    float sizeFactor = texture(uPictureTexture, uv).r;

    gl_Position   = projectionPosition;
    gl_PointSize  = 0.15 * sizeFactor;
    gl_PointSize *= uResolution.y;
    gl_PointSize *= -1.0 / viewPosition.z;

    vColor = vec3(pow(sizeFactor, 2.0));
}`,r2=`varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) {
        discard;
    }

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const o2="/three.js-journey/assets/picture-1-CcRZvoBz.png",a2="/three.js-journey/assets/glow-UcE5q2Bs.png";var po,mo,qt,Ey,Cy,Py,Ry,Ly,Dy,Iy,Ny,nd,zm;let l2=(zm=class extends et{constructor(){super(...arguments);Ee(this,qt);O(this,"particles");O(this,"particleGeometry");O(this,"raycaster");O(this,"interactiveCanvas");O(this,"interactiveCanvasTexture");O(this,"interactiveCanvasContext");O(this,"interactiveCanvasImage");O(this,"interactiveCanvasPlane");O(this,"pointer",{x:null,y:null,prevX:null,prevY:null});O(this,"hasGuiTweaks",!1);O(this,"hasAnimation",!0);Ee(this,po);Ee(this,mo)}get number(){return"39"}get title(){return"Particles Cursor Animation"}get link(){return"https://threejs-journey.com/lessons/particles-cursor-animation-shader"}update(){if(this.control.update(),this.pointer.x&&this.pointer.y&&this.pointer.prevX&&this.pointer.prevY){this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObject(this.interactiveCanvasPlane);b(this,qt,Ey).call(this,t)}}init(){super.init(),this.raycaster=new zg,b(this,qt,Cy).call(this),b(this,qt,Py).call(this),b(this,qt,Ry).call(this),b(this,qt,Ly).call(this),b(this,qt,Dy).call(this),b(this,qt,Iy).call(this)}dispose(){this.canvas.removeEventListener("pointermove",Re(this,po)),this.canvas.removeEventListener("resize",Re(this,mo)),super.dispose()}},po=new WeakMap,mo=new WeakMap,qt=new WeakSet,Ey=function(t){b(this,qt,nd).call(this),t.length&&b(this,qt,Ny).call(this,t[0].uv),this.interactiveCanvasTexture.needsUpdate=!0},Cy=function(){this.interactiveCanvas=document.createElement("canvas"),this.interactiveCanvas.width=128,this.interactiveCanvas.height=128,this.interactiveCanvasTexture=new vA(this.interactiveCanvas),this.interactiveCanvasContext=this.interactiveCanvas.getContext("2d"),this.interactiveCanvasImage=new Image,this.interactiveCanvasImage.src=a2,this.interactiveCanvasPlane=new ce(new Bt(10,10,1,1),new St({side:Mn})),this.interactiveCanvasPlane.visible=!1,b(this,qt,nd).call(this)},Py=function(){const n=new _n().load(o2);this.particleGeometry=new Bt(this.interactiveCanvasPlane.geometry.parameters.width,this.interactiveCanvasPlane.geometry.parameters.height,128,128),this.particleGeometry.setIndex(null),this.particleGeometry.deleteAttribute("normal");const i=new Float32Array(this.particleGeometry.attributes.position.count),s=new Float32Array(this.particleGeometry.attributes.position.count);for(let o=0;o<i.length;o++)i[o]=Math.random(),s[o]=2*Math.PI*Math.random();this.particleGeometry.setAttribute("aDisplacementRandomFactor",new at(i,1)),this.particleGeometry.setAttribute("aDisplacementRandomAngle",new at(s,1)),this.particles=new Bs(this.particleGeometry,new Ot({vertexShader:s2,fragmentShader:r2,uniforms:{uPictureTexture:new je(n),uDisplacementTexture:new je(this.interactiveCanvasTexture),uResolution:new je(new te(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio()))},blending:as})),this.scene.add(this.particles)},Ry=function(){this.camera.fov=35,this.camera.position.set(0,0,18),this.camera.updateProjectionMatrix()},Ly=function(){this.renderer.setClearColor("#181818")},Dy=function(){It(this,po,t=>{this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y,this.pointer.x=(t.offsetX/this.canvas.width-.5)*2,this.pointer.y=-((t.offsetY/this.canvas.height-.5)*2)}),this.canvas.addEventListener("pointermove",Re(this,po))},Iy=function(){It(this,mo,()=>{this.particles.material.uniforms.uResolution.value.set(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio())}),this.canvas.addEventListener("resize",Re(this,mo))},Ny=function(t){const n=t.x*this.interactiveCanvas.width,i=(1-t.y)*this.interactiveCanvas.height,s=.15*this.interactiveCanvas.width;let o=Math.hypot(this.pointer.x-this.pointer.prevX,this.pointer.y-this.pointer.prevY)*500;o=Math.min(1,o),this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y,this.interactiveCanvasContext.save(),this.interactiveCanvasContext.globalCompositeOperation="lighten",this.interactiveCanvasContext.globalAlpha=o,this.interactiveCanvasContext.drawImage(this.interactiveCanvasImage,n-s/2,i-s/2,s,s),this.interactiveCanvasContext.restore()},nd=function(){this.interactiveCanvasContext.save(),this.interactiveCanvasContext.globalAlpha=.02,this.interactiveCanvasContext.fillRect(0,0,this.interactiveCanvas.width,this.interactiveCanvas.height),this.interactiveCanvasContext.restore()},zm);var c2=`uniform float uProgress;
uniform float uSize;
uniform vec2  uResolution;
uniform vec3  uWarmColor;
uniform vec3  uCoolColor;

attribute float aSize;
attribute vec3  aTargetPosition;

varying vec3 vColor;

vec4 _permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 _taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float calcSimplexNoise3d(vec3 v) {
    const vec2  C = vec2(1.0 / 6.0, 1.0 / 3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    
    i = mod(i, 289.0 );
    vec4 p = _permute(
        _permute(
            _permute(i.z + vec4(0.0, i1.z, i2.z, 1.0 )) +
            i.y                                         +
            vec4(0.0, i1.y, i2.y, 1.0 )
        )   +
        i.x +
        vec4(0.0, i1.x, i2.x, 1.0)
    );

    
    
    float n_ = 1.0/7.0; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
    float frequency     = 0.2;
    float originNoise   = calcSimplexNoise3d(position * frequency);
    float targetNoise   = calcSimplexNoise3d(aTargetPosition * frequency);
    float noise         = mix(originNoise, targetNoise, uProgress);
    noise               = smoothstep(-1.0, 1.0, noise);
    float duration      = 0.4;
    float delay         = (1.0 - duration) * noise;
    float end           = delay + duration;
    float progress      = smoothstep(delay, end, uProgress);
    vec3  finalPosition = mix(position, aTargetPosition, progress);

    vec4 modelPosition      = modelMatrix      * vec4(finalPosition, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position   = projectionPosition;
    gl_PointSize  = aSize * uSize * uResolution.y;
    gl_PointSize *= (-1.0 / viewPosition.z);

    vColor = mix(uWarmColor, uCoolColor, noise);
}`,h2=`varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float alpha            = (0.05 / distanceToCenter) - 0.1;

    gl_FragColor = vec4(vColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const u2="/three.js-journey/assets/models-Bt460700.glb";var go,Lt,Uy,Fy,Oy,id,By,zy,ky,Gy,sd,rd;class d2 extends et{constructor(){super(...arguments);Ee(this,Lt);O(this,"mesh");O(this,"currentMeshIndex",0);O(this,"meshPositions",[]);O(this,"hasGuiTweaks",!0);O(this,"hasAnimation",!0);O(this,"rendererParams",{clearColor:"#160920"});Ee(this,go)}get number(){return"40"}get title(){return"Particles Morphing"}get link(){return"https://threejs-journey.com/lessons/particles-morphing-shader"}update(){this.control.update()}init(){super.init(),b(this,Lt,By).call(this),b(this,Lt,Fy).call(this),b(this,Lt,zy).call(this),b(this,Lt,ky).call(this),b(this,Lt,Uy).call(this),b(this,Lt,Gy).call(this)}dispose(){this.canvas.removeEventListener("resize",Re(this,go)),super.dispose()}}go=new WeakMap,Lt=new WeakSet,Uy=function(){this.guiControl.addColor({clearColor:this.rendererParams.clearColor},"clearColor").onChange(n=>{this.renderer.setClearColor(n)}),this.guiControl.add(this.mesh.material.uniforms.uProgress,"value").min(0).max(1).step(.001).name("uProgress").listen(),this.guiControl.addColor({uWarmColor:this.mesh.material.uniforms.uWarmColor.value.getHexString()},"uWarmColor").onChange(n=>{this.mesh.material.uniforms.uWarmColor.value.set(n)}),this.guiControl.addColor({uCoolColor:this.mesh.material.uniforms.uCoolColor.value.getHexString()},"uCoolColor").onChange(n=>{this.mesh.material.uniforms.uCoolColor.value.set(n)});const t=n=>{b(this,Lt,id).call(this,n),gr.fromTo(this.mesh.material.uniforms.uProgress,{value:0},{value:1,ease:"linear",duration:3,onComplete:()=>{this.currentMeshIndex=n}})};this.guiControl.add({morphToFirstMesh:()=>{t(0)}},"morphToFirstMesh"),this.guiControl.add({morphToSecondMesh:()=>{t(1)}},"morphToSecondMesh"),this.guiControl.add({morphToThirdMesh:()=>{t(2)}},"morphToThirdMesh"),this.guiControl.add({morphToFourthMesh:()=>{t(3)}},"morphToFourthMesh")},Fy=function(){const t=new pi,n=new mi;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load(u2,i=>{const s=i.scene.children.map(o=>o.geometry);b(this,Lt,Oy).call(this,s),b(this,Lt,id).call(this,1)})},Oy=function(t){const n=t.reduce((s,o)=>Math.max(s,o.attributes.position.count),0);for(const s of t){const o=s.attributes.position,a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=l*3;if(l<o.count)a[c+0]=o.array[c+0],a[c+1]=o.array[c+1],a[c+2]=o.array[c+2];else{const h=Math.floor((o.count-1)*Math.random())*3;a[c+0]=o.array[h+0],a[c+1]=o.array[h+1],a[c+2]=o.array[h+2]}}this.meshPositions.push(new at(a,3))}const i=new Float32Array(n*1);for(let s=0;s<i.length;s++)i[s]=Math.random();this.mesh.geometry.setAttribute("aSize",new at(i,1))},id=function(t){this.mesh.geometry.setAttribute("position",this.meshPositions[this.currentMeshIndex]),this.mesh.geometry.setAttribute("aTargetPosition",this.meshPositions[t])},By=function(){const t=new ut,n=new Ot({vertexShader:c2,fragmentShader:h2,uniforms:{uSize:new je(.4),uResolution:new je(new te(b(this,Lt,sd).call(this),b(this,Lt,rd).call(this))),uProgress:new je(0),uWarmColor:new je(new ge("#ff7300")),uCoolColor:new je(new ge("#0091ff"))},blending:as,depthWrite:!1});this.mesh=new Bs(t,n),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)},zy=function(){this.camera.fov=35,this.camera.position.set(0,0,16),this.camera.updateProjectionMatrix()},ky=function(){this.renderer.setClearColor(this.rendererParams.clearColor)},Gy=function(){It(this,go,()=>{this.mesh.material.uniforms.uResolution.value.set(b(this,Lt,sd).call(this),b(this,Lt,rd).call(this))}),this.canvas.addEventListener("resize",Re(this,go))},sd=function(){return this.canvas.width*this.renderer.getPixelRatio()},rd=function(){return this.canvas.height*this.renderer.getPixelRatio()};const f2=[new aC,new lC,new wP,new bP,new TP,new AP,new EP,new CP,new PP,new UP,new OP,new BP,new cR,new hR,new uR,new pR,new wR,new rL,new oL,new aL,new lL,new cL,new hL,new pL,new _L,new yL,new wL,new CL,new IL,new FL,new kL,new VL,new XL,new $L,new i2,new l2,new d2],p2=new Yy(f2.reverse(),".lesson-title",".controls__arrow--left",".controls__arrow--right");p2.run();
//# sourceMappingURL=index-CB2lLW3L.js.map
