var Fx=Object.defineProperty;var Md=r=>{throw TypeError(r)};var Bx=(r,t,e)=>t in r?Fx(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Z=(r,t,e)=>Bx(r,typeof t!="symbol"?t+"":t,e),jl=(r,t,e)=>t.has(r)||Md("Cannot "+e);var Xt=(r,t,e)=>(jl(r,t,"read from private field"),e?e.call(r):t.get(r)),jt=(r,t,e)=>t.has(r)?Md("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),Je=(r,t,e,n)=>(jl(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e),D=(r,t,e)=>(jl(r,t,"access private method"),e);var Yl=(r,t,e,n)=>({set _(i){Je(r,t,i,e)},get _(){return Xt(r,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var Ir,fi,Wn,Be,kp,zp,Yc,qc,$c,Xa,Hp;class kx{constructor(t,e,n,i){jt(this,Be);jt(this,Ir);jt(this,fi,[]);jt(this,Wn,0);Je(this,fi,t),Je(this,Ir,document.querySelector(e)),D(this,Be,kp).call(this,n,i),D(this,Be,zp).call(this)}run(){Xt(this,fi).length&&D(this,Be,Xa).call(this)}}Ir=new WeakMap,fi=new WeakMap,Wn=new WeakMap,Be=new WeakSet,kp=function(t,e){const n=document.querySelector(t),i=document.querySelector(e);n.addEventListener("click",D(this,Be,qc).bind(this)),i.addEventListener("click",D(this,Be,Yc).bind(this))},zp=function(){document.addEventListener("keydown",t=>{t.key==="ArrowRight"&&D(this,Be,Yc).call(this),t.key==="ArrowLeft"&&D(this,Be,qc).call(this)})},Yc=function(){D(this,Be,$c).call(this),Xt(this,Wn)>=Xt(this,fi).length-1?Je(this,Wn,0):Yl(this,Wn)._++,D(this,Be,Xa).call(this)},qc=function(){D(this,Be,$c).call(this),Xt(this,Wn)<=0?Je(this,Wn,Xt(this,fi).length-1):Yl(this,Wn)._--,D(this,Be,Xa).call(this)},$c=function(){Xt(this,fi)[Xt(this,Wn)].close()},Xa=function(){Xt(this,fi)[Xt(this,Wn)].open(),D(this,Be,Hp).call(this)},Hp=function(){var n;const t=Xt(this,fi)[Xt(this,Wn)],e=document.createElement("a");e.href=t.link,e.target="_blank",e.rel="noopener noreferrer",e.textContent=t.title,(n=Xt(this,Ir).querySelector("a"))==null||n.remove(),Xt(this,Ir).append(e)};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="169",br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zx=0,Sd=1,Hx=2,Vp=1,qi=2,Fi=3,Wi=0,hn=1,Xn=2,ds=0,wr=1,hl=2,bd=3,wd=4,Vx=5,Os=100,Gx=101,Wx=102,Xx=103,jx=104,Yx=200,qx=201,$x=202,Kx=203,Kc=204,Zc=205,Zx=206,Jx=207,Qx=208,tv=209,ev=210,nv=211,iv=212,sv=213,rv=214,Jc=0,Qc=1,th=2,Wr=3,eh=4,nh=5,ih=6,sh=7,Gp=0,ov=1,av=2,Gi=0,Wp=1,Xp=2,jp=3,ul=4,lv=5,cv=6,hv=7,Td="attached",uv="detached",Yp=300,Xr=301,jr=302,Yr=303,rh=304,Cl=306,xe=1e3,gi=1001,dl=1002,We=1003,qp=1004,Ro=1005,qe=1006,ja=1007,oi=1008,Xi=1009,$p=1010,Kp=1011,Go=1012,xu=1013,Xs=1014,yn=1015,_i=1016,vu=1017,yu=1018,qr=1020,Zp=35902,Jp=1021,Qp=1022,jn=1023,tm=1024,em=1025,Tr=1026,$r=1027,Mu=1028,Su=1029,nm=1030,bu=1031,wu=1033,Ya=33776,qa=33777,$a=33778,Ka=33779,oh=35840,ah=35841,lh=35842,ch=35843,hh=36196,uh=37492,dh=37496,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,vh=37814,yh=37815,Mh=37816,Sh=37817,bh=37818,wh=37819,Th=37820,Eh=37821,Za=36492,Ah=36494,Ch=36495,im=36283,Rh=36284,Ph=36285,Lh=36286,dv=2200,fv=2201,pv=2202,Wo=2300,Xo=2301,ql=2302,_r=2400,xr=2401,fl=2402,Tu=2500,mv=2501,gv=0,sm=1,Ih=2,_v=3200,xv=3201,Rl=0,vv=1,as="",se="srgb",$e="srgb-linear",Eu="display-p3",Pl="display-p3-linear",pl="linear",Se="srgb",ml="rec709",gl="p3",tr=7680,Ed=519,yv=512,Mv=513,Sv=514,rm=515,bv=516,wv=517,Tv=518,Ev=519,Dh=35044,Ad="300 es",Vi=2e3,_l=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cd=1234567;const Uo=Math.PI/180,Kr=180/Math.PI;function $n(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Ve(r,t,e){return Math.max(t,Math.min(e,r))}function Au(r,t){return(r%t+t)%t}function Av(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Cv(r,t,e){return r!==t?(e-r)/(t-r):0}function Oo(r,t,e){return(1-e)*r+e*t}function Rv(r,t,e,n){return Oo(r,t,1-Math.exp(-e*n))}function Pv(r,t=1){return t-Math.abs(Au(r,t*2)-t)}function Lv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Iv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Nv(r,t){return r+Math.random()*(t-r)}function Uv(r){return r*(.5-Math.random())}function Ov(r){r!==void 0&&(Cd=r);let t=Cd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fv(r){return r*Uo}function Bv(r){return r*Kr}function kv(r){return(r&r-1)===0&&r!==0}function zv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vv(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const om={DEG2RAD:Uo,RAD2DEG:Kr,generateUUID:$n,clamp:Ve,euclideanModulo:Au,mapLinear:Av,inverseLerp:Cv,lerp:Oo,damp:Rv,pingpong:Pv,smoothstep:Lv,smootherstep:Iv,randInt:Dv,randFloat:Nv,randFloatSpread:Uv,seededRandom:Ov,degToRad:Fv,radToDeg:Bv,isPowerOfTwo:kv,ceilPowerOfTwo:zv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Vv,normalize:ue,denormalize:si};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],x=i[4],M=i[7],C=i[2],T=i[5],w=i[8];return s[0]=o*_+a*v+l*C,s[3]=o*p+a*x+l*T,s[6]=o*m+a*M+l*w,s[1]=c*_+h*v+u*C,s[4]=c*p+h*x+u*T,s[7]=c*m+h*M+u*w,s[2]=d*_+f*v+g*C,s[5]=d*p+f*x+g*T,s[8]=d*m+f*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($l.makeScale(t,e)),this}rotate(t){return this.premultiply($l.makeRotation(-t)),this}translate(t,e){return this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new $t;function am(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gv(){const r=jo("canvas");return r.style.display="block",r}const Rd={};function Ja(r){r in Rd||(Rd[r]=!0,console.warn(r))}function Wv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Xv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pd=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ld=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[$e]:{transfer:pl,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[se]:{transfer:Se,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Pl]:{transfer:pl,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Ld),fromReference:r=>r.applyMatrix3(Pd)},[Eu]:{transfer:Se,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ld),fromReference:r=>r.applyMatrix3(Pd).convertLinearToSRGB()}},Yv=new Set([$e,Pl]),ie={enabled:!0,_workingColorSpace:$e,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Yv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=xo[t].toReference,i=xo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return xo[r].primaries},getTransfer:function(r){return r===as?pl:xo[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(xo[t].luminanceCoefficients)}};function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let er;class qv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{er===void 0&&(er=jo("canvas")),er.width=t.width,er.height=t.height;const n=er.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Er(e[n]/255)*255):e[n]=Er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $v=0;class lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zl(i[o].image)):s.push(Zl(i[o]))}else s=Zl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class en extends ys{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=gi,i=gi,s=qe,o=oi,a=jn,l=Xi,c=en.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=$n(),this.name="",this.source=new lm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xe:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xe:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Yp;en.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,C=(m+1)/2,T=(h+d)/4,w=(u+_)/4,E=(g+p)/4;return x>M&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=w/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=E/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=E/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends Zv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cm extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,m*v);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const M=a*v;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jl.copy(this).projectOnVector(t),this.sub(Jl)}reflect(t){return this.sub(Jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new I,Id=new Fn;class $i{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vo),da.subVectors(this.max,vo),nr.subVectors(t.a,vo),ir.subVectors(t.b,vo),sr.subVectors(t.c,vo),Ji.subVectors(ir,nr),Qi.subVectors(sr,ir),bs.subVectors(nr,sr);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-bs.z,bs.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,bs.z,0,-bs.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-bs.y,bs.x,0];return!Ql(e,nr,ir,sr,da)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,nr,ir,sr,da))?!1:(fa.crossVectors(Ji,Qi),e=[fa.x,fa.y,fa.z],Ql(e,nr,ir,sr,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Li=[new I,new I,new I,new I,new I,new I,new I,new I],ei=new I,ua=new $i,nr=new I,ir=new I,sr=new I,Ji=new I,Qi=new I,bs=new I,vo=new I,da=new I,fa=new I,ws=new I;function Ql(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ws.fromArray(r,s);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qv=new $i,yo=new I,tc=new I;class Ei{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const e=yo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(tc)),this.expandByPoint(yo.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new I,ec=new I,pa=new I,ts=new I,nc=new I,ma=new I,ic=new I;class co{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(ec);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=ts.dot(this.direction),l=-ts.dot(pa),c=ts.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ec).addScaledVector(pa,d),f}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,i,s){nc.subVectors(e,t),ma.subVectors(n,t),ic.crossVectors(nc,ma);let o=this.direction.dot(ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);const l=a*this.direction.dot(ma.crossVectors(ts,ma));if(l<0)return null;const c=a*this.direction.dot(nc.cross(ts));if(c<0||l+c>o)return null;const h=-a*ts.dot(ic);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/rr.setFromMatrixColumn(t,0).length(),s=1/rr.setFromMatrixColumn(t,1).length(),o=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ty,t,ey)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),es.crossVectors(n,In),es.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),es.crossVectors(n,In)),es.normalize(),ga.crossVectors(In,es),i[0]=es.x,i[4]=ga.x,i[8]=In.x,i[1]=es.y,i[5]=ga.y,i[9]=In.y,i[2]=es.z,i[6]=ga.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],M=n[11],C=n[15],T=i[0],w=i[4],E=i[8],L=i[12],y=i[1],S=i[5],F=i[9],U=i[13],O=i[2],W=i[6],N=i[10],q=i[14],X=i[3],at=i[7],rt=i[11],ut=i[15];return s[0]=o*T+a*y+l*O+c*X,s[4]=o*w+a*S+l*W+c*at,s[8]=o*E+a*F+l*N+c*rt,s[12]=o*L+a*U+l*q+c*ut,s[1]=h*T+u*y+d*O+f*X,s[5]=h*w+u*S+d*W+f*at,s[9]=h*E+u*F+d*N+f*rt,s[13]=h*L+u*U+d*q+f*ut,s[2]=g*T+_*y+p*O+m*X,s[6]=g*w+_*S+p*W+m*at,s[10]=g*E+_*F+p*N+m*rt,s[14]=g*L+_*U+p*q+m*ut,s[3]=v*T+x*y+M*O+C*X,s[7]=v*w+x*S+M*W+C*at,s[11]=v*E+x*F+M*N+C*rt,s[15]=v*L+x*U+M*q+C*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,M=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,T=e*v+n*x+i*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*w,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*w,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*w,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*w,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=M*w,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=C*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,p=o*u,m=a*u,v=l*c,x=l*h,M=l*u,C=n.x,T=n.y,w=n.z;return i[0]=(1-(_+m))*C,i[1]=(f+M)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+m))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(g+x)*w,i[9]=(p-v)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=rr.set(i[0],i[1],i[2]).length();const o=rr.set(i[4],i[5],i[6]).length(),a=rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ni.copy(this);const c=1/s,h=1/o,u=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,e.setFromRotationMatrix(ni),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Vi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_l)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===Vi)g=(o+s)*u,_=-2*u;else if(a===_l)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rr=new I,ni=new Gt,ty=new I(0,0,0),ey=new I(1,1,1),es=new I,ga=new I,In=new I,Dd=new Gt,Nd=new Fn;class Mi{constructor(t=0,e=0,n=0,i=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ny=0;const Ud=new I,or=new Fn,Di=new Gt,_a=new I,Mo=new I,iy=new I,sy=new Fn,Od=new I(1,0,0),Fd=new I(0,1,0),Bd=new I(0,0,1),kd={type:"added"},ry={type:"removed"},ar={type:"childadded",child:null},sc={type:"childremoved",child:null};class ge extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new Mi,n=new Fn,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new $t}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(Fd,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Ud.copy(t).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(Fd,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Mo,_a,this.up):Di.lookAt(_a,Mo,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),or.setFromRotationMatrix(Di),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kd),ar.child=t,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ry),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kd),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new I,Ni=new I,rc=new I,Ui=new I,lr=new I,cr=new I,zd=new I,oc=new I,ac=new I,lc=new I,cc=new oe,hc=new oe,uc=new oe;class ri{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ii.subVectors(i,e),Ni.subVectors(n,e),rc.subVectors(t,e);const o=ii.dot(ii),a=ii.dot(Ni),l=ii.dot(rc),c=Ni.dot(Ni),h=Ni.dot(rc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(cc,s.x),o.addScaledVector(hc,s.y),o.addScaledVector(uc,s.z),o}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),Ni.subVectors(t,e),ii.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;lr.subVectors(i,n),cr.subVectors(s,n),oc.subVectors(t,n);const l=lr.dot(oc),c=cr.dot(oc);if(l<=0&&c<=0)return e.copy(n);ac.subVectors(t,i);const h=lr.dot(ac),u=cr.dot(ac);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(lr,o);lc.subVectors(t,s);const f=lr.dot(lc),g=cr.dot(lc);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(cr,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return zd.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(zd,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},xa={h:0,s:0,l:0};function dc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Au(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=dc(o,s,t+1/3),this.g=dc(o,s,t),this.b=dc(o,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const n=hm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=Kl(t.r),this.g=Kl(t.g),this.b=Kl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return ie.fromWorkingColorSpace(an.copy(this),t),Math.round(Ve(an.r*255,0,255))*65536+Math.round(Ve(an.g*255,0,255))*256+Math.round(Ve(an.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=se){ie.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(xa);const n=Oo(ns.h,xa.h,e),i=Oo(ns.s,xa.s,e),s=Oo(ns.l,xa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Rt;Rt.NAMES=hm;let oy=0;class Kn extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=wr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class De extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hi=ay();function ay(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function ly(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ve(r,-65504,65504),Hi.floatView[0]=r;const t=Hi.uint32View[0],e=t>>23&511;return Hi.baseTable[e]+((t&8388607)>>Hi.shiftTable[e])}function cy(r){const t=r>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[t]+(r&1023)]+Hi.exponentTable[t],Hi.floatView[0]}const va={toHalfFloat:ly,fromHalfFloat:cy},ze=new I,ya=new nt;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dh&&(t.usage=this.usage),t}}class um extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dm extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hy=0;const Hn=new Gt,fc=new ge,hr=new I,Dn=new $i,So=new $i,Qe=new I;class pe extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(am(t)?dm:um)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Dn.min,So.min),Dn.expandByPoint(Qe),Qe.addVectors(Dn.max,So.max),Dn.expandByPoint(Qe)):(Dn.expandByPoint(So.min),Dn.expandByPoint(So.max))}Dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(t,c),Qe.add(hr)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new I,l[E]=new I;const c=new I,h=new I,u=new I,d=new nt,f=new nt,g=new nt,_=new I,p=new I;function m(E,L,y){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[E].add(_),a[L].add(_),a[y].add(_),l[E].add(p),l[L].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,L=v.length;E<L;++E){const y=v[E],S=y.start,F=y.count;for(let U=S,O=S+F;U<O;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new I,M=new I,C=new I,T=new I;function w(E){C.fromBufferAttribute(i,E),T.copy(C);const L=a[E];x.copy(L),x.sub(C.multiplyScalar(C.dot(L))).normalize(),M.crossVectors(T,L);const S=M.dot(l[E])<0?-1:1;o.setXYZW(E,x.x,x.y,x.z,S)}for(let E=0,L=v.length;E<L;++E){const y=v[E],S=y.start,F=y.count;for(let U=S,O=S+F;U<O;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Gt,Ts=new co,Ma=new Ei,Vd=new I,Sa=new I,ba=new I,wa=new I,pc=new I,Ta=new I,Gd=new I,Ea=new I;class wt extends ge{constructor(t=new pe,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(pc.fromBufferAttribute(u,t),o?Ta.addScaledVector(pc,h):Ta.addScaledVector(pc.sub(e),h))}e.add(Ta)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ts.copy(t.ray).recast(t.near),!(Ma.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ma,Vd)===null||Ts.origin.distanceToSquared(Vd)>(t.far-t.near)**2))&&(Hd.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=x;M<C;M+=3){const T=a.getX(M),w=a.getX(M+1),E=a.getX(M+2);i=Aa(this,m,t,n,c,h,u,T,w,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);i=Aa(this,o,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=x;M<C;M+=3){const T=M,w=M+1,E=M+2;i=Aa(this,m,t,n,c,h,u,T,w,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,M=p+2;i=Aa(this,o,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function uy(r,t,e,n,i,s,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Wi,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:r}}function Aa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Sa),r.getVertexPosition(l,ba),r.getVertexPosition(c,wa);const h=uy(r,t,e,n,Sa,ba,wa,Gd);if(h){const u=new I;ri.getBarycoord(Gd,Sa,ba,wa,u),i&&(h.uv=ri.getInterpolatedAttribute(i,a,l,c,u,new nt)),s&&(h.uv1=ri.getInterpolatedAttribute(s,a,l,c,u,new nt)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};ri.getNormal(Sa,ba,wa,d.normal),h.face=d,h.barycoord=u}return h}class Xe extends pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,p,m,v,x,M,C,T,w,E,L){const y=M/w,S=C/E,F=M/2,U=C/2,O=T/2,W=w+1,N=E+1;let q=0,X=0;const at=new I;for(let rt=0;rt<N;rt++){const ut=rt*S-U;for(let It=0;It<W;It++){const Bt=It*y-F;at[_]=Bt*v,at[p]=ut*x,at[m]=O,c.push(at.x,at.y,at.z),at[_]=0,at[p]=0,at[m]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(It/w),u.push(1-rt/E),q+=1}}for(let rt=0;rt<E;rt++)for(let ut=0;ut<w;ut++){const It=d+ut+W*rt,Bt=d+ut+W*(rt+1),j=d+(ut+1)+W*(rt+1),et=d+(ut+1)+W*rt;l.push(It,Bt,et),l.push(Bt,j,et),X+=6}a.addGroup(f,X,L),f+=X,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function mn(r){const t={};for(let e=0;e<r.length;e++){const n=Zr(r[e]);for(const i in n)t[i]=n[i]}return t}function dy(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const pm={clone:Zr,merge:mn};var fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=dy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mm extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new I,Wd=new nt,Xd=new nt;class ln extends mm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,Wd,Xd),e.subVectors(Xd,Wd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,dr=1;class gm extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(ur,dr,t,e);i.layers=this.layers,this.add(i);const s=new ln(ur,dr,t,e);s.layers=this.layers,this.add(s);const o=new ln(ur,dr,t,e);o.layers=this.layers,this.add(o);const a=new ln(ur,dr,t,e);a.layers=this.layers,this.add(a);const l=new ln(ur,dr,t,e);l.layers=this.layers,this.add(l);const c=new ln(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends en{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xr,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _m extends js{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ru(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xe(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:ds});s.uniforms.tEquirect.value=e;const o=new wt(i,s),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=qe),new gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const mc=new I,my=new I,gy=new $t;class os{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=mc.subVectors(n,e).cross(my.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gy.getNormalMatrix(t),i=this.coplanarPoint(mc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Ei,Ca=new I;class Pu{constructor(t=new os,e=new os,n=new os,i=new os,s=new os,o=new os){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,p-f,M-m).normalize(),n[1].setComponents(l+s,d+c,p+f,M+m).normalize(),n[2].setComponents(l+o,d+h,p+g,M+v).normalize(),n[3].setComponents(l-o,d-h,p-g,M-v).normalize(),n[4].setComponents(l-a,d-u,p-_,M-x).normalize(),e===Vi)n[5].setComponents(l+a,d+u,p+_,M+x).normalize();else if(e===_l)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ca.x=i.normal.x>0?t.max.x:t.min.x,Ca.y=i.normal.y>0?t.max.y:t.min.y,Ca.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _y(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class rn extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*d-o;for(let x=0;x<c;x++){const M=x*u-s;g.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,M=v+c*(m+1),C=v+1+c*(m+1),T=v+1+c*m;f.push(x,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,My=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
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
#endif`,Iy=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hy=`#define PI 3.141592653589793
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
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gy=`vec3 transformedNormal = objectNormal;
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
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`
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
}`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`struct PhysicalMaterial {
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
}`,_M=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nS=`float getShadowMask() {
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
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
}`,TS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,PS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,IS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,NS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,OS=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,BS=`#define NORMAL
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
}`,kS=`#define PHONG
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
}`,zS=`#define PHONG
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
}`,HS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,WS=`#define TOON
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
}`,XS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,$S=`uniform float rotation;
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
}`,KS=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:yy,alphamap_pars_fragment:My,alphatest_fragment:Sy,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:Ty,batching_pars_vertex:Ey,batching_vertex:Ay,begin_vertex:Cy,beginnormal_vertex:Ry,bsdfs:Py,iridescence_fragment:Ly,bumpmap_pars_fragment:Iy,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ny,clipping_planes_pars_vertex:Uy,clipping_planes_vertex:Oy,color_fragment:Fy,color_pars_fragment:By,color_pars_vertex:ky,color_vertex:zy,common:Hy,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Xy,emissivemap_fragment:jy,emissivemap_pars_fragment:Yy,colorspace_fragment:qy,colorspace_pars_fragment:$y,envmap_fragment:Ky,envmap_common_pars_fragment:Zy,envmap_pars_fragment:Jy,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:hM,envmap_vertex:tM,fog_vertex:eM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:sM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:uM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:xM,lights_fragment_end:vM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:bM,map_fragment:wM,map_pars_fragment:TM,map_particle_fragment:EM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:IM,morphtarget_pars_vertex:DM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:OM,normal_pars_fragment:FM,normal_pars_vertex:BM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:jM,premultiplied_alpha_fragment:YM,project_vertex:qM,dithering_fragment:$M,dithering_pars_fragment:KM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:tS,shadowmap_vertex:eS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:sS,skinning_vertex:rS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:hS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:_S,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:yS,cube_vert:MS,cube_frag:SS,depth_vert:bS,depth_frag:wS,distanceRGBA_vert:TS,distanceRGBA_frag:ES,equirect_vert:AS,equirect_frag:CS,linedashed_vert:RS,linedashed_frag:PS,meshbasic_vert:LS,meshbasic_frag:IS,meshlambert_vert:DS,meshlambert_frag:NS,meshmatcap_vert:US,meshmatcap_frag:OS,meshnormal_vert:FS,meshnormal_frag:BS,meshphong_vert:kS,meshphong_frag:zS,meshphysical_vert:HS,meshphysical_frag:VS,meshtoon_vert:GS,meshtoon_frag:WS,points_vert:XS,points_frag:jS,shadow_vert:YS,shadow_frag:qS,sprite_vert:$S,sprite_frag:KS},ft={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},pi={basic:{uniforms:mn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:mn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:mn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:mn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:mn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:mn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:mn([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:mn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:mn([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:mn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:mn([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:mn([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:mn([ft.lights,ft.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};pi.physical={uniforms:mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ra={r:0,b:0,g:0},As=new Mi,ZS=new Gt;function JS(r,t,e,n,i,s,o){const a=new Rt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const M=g(v);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(v,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===Cl)?(h===void 0&&(h=new wt(new Xe(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Zr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),As.copy(x.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(As)),h.material.toneMapped=ie.getTransfer(M.colorSpace)!==Se,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wt(new rn(2,2),new li({name:"BackgroundMaterial",uniforms:Zr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ie.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(Ra,fm(r)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:p}}function QS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,S,F,U,O){let W=!1;const N=u(U,F,S);s!==N&&(s=N,c(s.object)),W=f(y,U,F,O),W&&g(y,U,F,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(y,S,F,U),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,S,F){const U=F.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let W=O[S.id];W===void 0&&(W={},O[S.id]=W);let N=W[U];return N===void 0&&(N=d(l()),W[U]=N),N}function d(y){const S=[],F=[],U=[];for(let O=0;O<e;O++)S[O]=0,F[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,S,F,U){const O=s.attributes,W=S.attributes;let N=0;const q=F.getAttributes();for(const X in q)if(q[X].location>=0){const rt=O[X];let ut=W[X];if(ut===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;N++}return s.attributesNum!==N||s.index!==U}function g(y,S,F,U){const O={},W=S.attributes;let N=0;const q=F.getAttributes();for(const X in q)if(q[X].location>=0){let rt=W[X];rt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));const ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),O[X]=ut,N++}s.attributes=O,s.attributesNum=N,s.index=U}function _(){const y=s.newAttributes;for(let S=0,F=y.length;S<F;S++)y[S]=0}function p(y){m(y,0)}function m(y,S){const F=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;F[y]=1,U[y]===0&&(r.enableVertexAttribArray(y),U[y]=1),O[y]!==S&&(r.vertexAttribDivisor(y,S),O[y]=S)}function v(){const y=s.newAttributes,S=s.enabledAttributes;for(let F=0,U=S.length;F<U;F++)S[F]!==y[F]&&(r.disableVertexAttribArray(F),S[F]=0)}function x(y,S,F,U,O,W,N){N===!0?r.vertexAttribIPointer(y,S,F,O,W):r.vertexAttribPointer(y,S,F,U,O,W)}function M(y,S,F,U){_();const O=U.attributes,W=F.getAttributes(),N=S.defaultAttributeValues;for(const q in W){const X=W[q];if(X.location>=0){let at=O[q];if(at===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const rt=at.normalized,ut=at.itemSize,It=t.get(at);if(It===void 0)continue;const Bt=It.buffer,j=It.type,et=It.bytesPerElement,St=j===r.INT||j===r.UNSIGNED_INT||at.gpuType===xu;if(at.isInterleavedBufferAttribute){const pt=at.data,Nt=pt.stride,Dt=at.offset;if(pt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)m(X.location+Vt,pt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)p(X.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Vt=0;Vt<X.locationSize;Vt++)x(X.location+Vt,ut/X.locationSize,j,rt,Nt*et,(Dt+ut/X.locationSize*Vt)*et,St)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt,at.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let pt=0;pt<X.locationSize;pt++)x(X.location+pt,ut/X.locationSize,j,rt,ut*et,ut/X.locationSize*pt*et,St)}}else if(N!==void 0){const rt=N[q];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(X.location,rt);break;case 3:r.vertexAttrib3fv(X.location,rt);break;case 4:r.vertexAttrib4fv(X.location,rt);break;default:r.vertexAttrib1fv(X.location,rt)}}}}v()}function C(){E();for(const y in n){const S=n[y];for(const F in S){const U=S[F];for(const O in U)h(U[O].object),delete U[O];delete S[F]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const F in S){const U=S[F];for(const O in U)h(U[O].object),delete U[O];delete S[F]}delete n[y.id]}function w(y){for(const S in n){const F=n[S];if(F[y.id]===void 0)continue;const U=F[y.id];for(const O in U)h(U[O].object),delete U[O];delete F[y.id]}}function E(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function tb(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==jn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const E=w===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Xi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yn&&!E)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function nb(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new os,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,x=v*4;let M=m.clippingState||null;l.value=M,M=h(g,d,x,f);for(let C=0;C!==x;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ib(r){let t=new WeakMap;function e(o,a){return a===Yr?o.mapping=Xr:a===rh&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yr||a===rh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _m(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ll extends mm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vr=4,jd=[.125,.215,.35,.446,.526,.582],Fs=20,gc=new Ll,Yd=new Rt;let _c=null,xc=0,vc=0,yc=!1;const Is=(1+Math.sqrt(5))/2,fr=1/Is,qd=[new I(-Is,fr,0),new I(Is,fr,0),new I(-fr,0,Is),new I(fr,0,Is),new I(0,Is,-fr),new I(0,Is,fr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class $d{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,xc,vc),this._renderer.xr.enabled=yc,t.scissorTest=!1,Pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:_i,format:jn,colorSpace:$e,depthBuffer:!1},i=Kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(s)),this._blurMaterial=rb(s,t,e)}return i}_compileMaterial(t){const e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,n,i){const a=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yd),h.toneMapping=Gi,h.autoClear=!1;const f=new De({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new wt(new Xe,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Yd),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Pa(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xr||t.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Pa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qd[(i-s-1)%qd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Fs;p>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fs}`);const m=[];let v=0;for(let w=0;w<Fs;++w){const E=w/_,L=Math.exp(-E*E/2);m.push(L),w===0?v+=L:w<p&&(v+=2*L)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],C=3*M*(i>x-vr?i-x+vr:0),T=4*(this._cubeSize-M);Pa(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(u,gc)}}function sb(r){const t=[],e=[],n=[];let i=r;const s=r-vr+1+jd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-vr?l=jd[o-r+vr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,E=T>2?0:-1,L=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];v.set(L,_*g*T),x.set(d,p*g*T);const y=[T,T,T,T,T,T];M.set(y,m*g*T)}const C=new pe;C.setAttribute("position",new Ae(v,_)),C.setAttribute("uv",new Ae(x,p)),C.setAttribute("faceIndex",new Ae(M,m)),t.push(C),i>vr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kd(r,t,e){const n=new js(r,t,e);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rb(r,t,e){const n=new Float32Array(Fs),i=new I(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Zd(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Jd(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function ob(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yr||l===rh,h=l===Xr||l===jr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $d(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new $d(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ab(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ja("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lb(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const C=v[x+0],T=v[x+1],w=v[x+2];d.push(C,T,T,w,w,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const C=x+0,T=x+1,w=x+2;d.push(C,T,T,w,w,C)}}else return;const p=new(am(d)?dm:um)(d,1);p.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function cb(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hb(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ub(r,t,e){const n=new WeakMap,i=new oe;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let L=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*C*4*u),w=new cm(T,M,C,u);w.type=yn,w.needsUpdate=!0;const E=x*4;for(let y=0;y<u;y++){const S=p[y],F=m[y],U=v[y],O=M*C*4*y;for(let W=0;W<S.count;W++){const N=W*E;f===!0&&(i.fromBufferAttribute(S,W),T[O+N+0]=i.x,T[O+N+1]=i.y,T[O+N+2]=i.z,T[O+N+3]=0),g===!0&&(i.fromBufferAttribute(F,W),T[O+N+4]=i.x,T[O+N+5]=i.y,T[O+N+6]=i.z,T[O+N+7]=0),_===!0&&(i.fromBufferAttribute(U,W),T[O+N+8]=i.x,T[O+N+9]=i.y,T[O+N+10]=i.z,T[O+N+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new nt(M,C)},n.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function db(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class vm extends en{constructor(t,e,n,i,s,o,a,l,c,h=Tr){if(h!==Tr&&h!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tr&&(n=Xs),n===void 0&&h===$r&&(n=qr),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ym=new en,Qd=new vm(1,1),Mm=new cm,Sm=new Jv,bm=new Ru,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function ho(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=tf[i];if(s===void 0&&(s=new Float32Array(i),tf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ke(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Il(r,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function fb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function pb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function mb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function gb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function _b(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;rf.set(n),r.uniformMatrix2fv(this.addr,!1,rf),Ze(e,n)}}function xb(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;sf.set(n),r.uniformMatrix3fv(this.addr,!1,sf),Ze(e,n)}}function vb(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;nf.set(n),r.uniformMatrix4fv(this.addr,!1,nf),Ze(e,n)}}function yb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Mb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function Sb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function bb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function wb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function Eb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function Ab(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function Cb(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qd.compareFunction=rm,s=Qd):s=ym,e.setTexture2D(t||s,i)}function Rb(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sm,i)}function Pb(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bm,i)}function Lb(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mm,i)}function Ib(r){switch(r){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Db(r,t){r.uniform1fv(this.addr,t)}function Nb(r,t){const e=ho(t,this.size,2);r.uniform2fv(this.addr,e)}function Ub(r,t){const e=ho(t,this.size,3);r.uniform3fv(this.addr,e)}function Ob(r,t){const e=ho(t,this.size,4);r.uniform4fv(this.addr,e)}function Fb(r,t){const e=ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bb(r,t){const e=ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function kb(r,t){const e=ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function zb(r,t){r.uniform1iv(this.addr,t)}function Hb(r,t){r.uniform2iv(this.addr,t)}function Vb(r,t){r.uniform3iv(this.addr,t)}function Gb(r,t){r.uniform4iv(this.addr,t)}function Wb(r,t){r.uniform1uiv(this.addr,t)}function Xb(r,t){r.uniform2uiv(this.addr,t)}function jb(r,t){r.uniform3uiv(this.addr,t)}function Yb(r,t){r.uniform4uiv(this.addr,t)}function qb(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ym,s[o])}function $b(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Sm,s[o])}function Kb(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bm,s[o])}function Zb(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mm,s[o])}function Jb(r){switch(r){case 5126:return Db;case 35664:return Nb;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Hb;case 35668:case 35672:return Vb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return jb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ib(e.type)}}class tw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jb(e.type)}}class ew{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function of(r,t){r.seq.push(t),r.map[t.id]=t}function nw(r,t,e){const n=r.name,i=n.length;for(Mc.lastIndex=0;;){const s=Mc.exec(n),o=Mc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){of(e,c===void 0?new Qb(a,r,t):new tw(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new ew(a),of(e,u)),e=u}}}class Qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);nw(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function af(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const iw=37297;let sw=0;function rw(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ow(r){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(r);let n;switch(t===e?n="":t===gl&&e===ml?n="LinearDisplayP3ToLinearSRGB":t===ml&&e===gl&&(n="LinearSRGBToLinearDisplayP3"),r){case $e:case Pl:return[n,"LinearTransferOETF"];case se:case Eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function lf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+rw(r.getShaderSource(t),o)}else return i}function aw(r,t){const e=ow(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lw(r,t){let e;switch(t){case Wp:e="Linear";break;case Xp:e="Reinhard";break;case jp:e="Cineon";break;case ul:e="ACESFilmic";break;case cv:e="AgX";break;case hv:e="Neutral";break;case lv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const La=new I;function cw(){ie.getLuminanceCoefficients(La);const r=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function uw(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dw(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Po(r){return r!==""}function cf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(r){return r.replace(fw,mw)}const pw=new Map;function mw(r,t){let e=qt[t];if(e===void 0){const n=pw.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nh(e)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(r){return r.replace(gw,_w)}function _w(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function df(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xw(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qi?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function vw(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case jr:t="ENVMAP_TYPE_CUBE";break;case Cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yw(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:t="ENVMAP_MODE_REFRACTION";break}return t}function Mw(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gp:t="ENVMAP_BLENDING_MULTIPLY";break;case ov:t="ENVMAP_BLENDING_MIX";break;case av:t="ENVMAP_BLENDING_ADD";break}return t}function Sw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bw(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xw(e),c=vw(e),h=yw(e),u=Mw(e),d=Sw(e),f=hw(e),g=uw(s),_=i.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Po).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(p=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?qt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?lw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,aw("linearToOutputTexel",e.outputColorSpace),cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),o=Nh(o),o=cf(o,e),o=hf(o,e),a=Nh(a),a=cf(a,e),a=hf(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+p+o,M=v+m+a,C=af(i,i.VERTEX_SHADER,x),T=af(i,i.FRAGMENT_SHADER,M);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(S){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(T).trim();let W=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{const q=lf(i,C,"vertex"),X=lf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+q+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||O==="")&&(N=!1);N&&(S.diagnostics={runnable:W,programLog:F,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(C),i.deleteShader(T),E=new Qa(i,_),L=dw(i,_)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let L;this.getAttributes=function(){return L===void 0&&w(this),L};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,iw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let ww=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ew(t),e.set(t,n)),n}}class Ew{constructor(t){this.id=ww++,this.code=t,this.usedTimes=0}}function Aw(r,t,e,n,i,s,o){const a=new Cu,l=new Tw,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,F,U,O){const W=U.fog,N=O.geometry,q=y.isMeshStandardMaterial?U.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),at=X&&X.mapping===Cl?X.image.height:null,rt=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ut=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,It=ut!==void 0?ut.length:0;let Bt=0;N.morphAttributes.position!==void 0&&(Bt=1),N.morphAttributes.normal!==void 0&&(Bt=2),N.morphAttributes.color!==void 0&&(Bt=3);let j,et,St,pt;if(rt){const xn=pi[rt];j=xn.vertexShader,et=xn.fragmentShader}else j=y.vertexShader,et=y.fragmentShader,l.update(y),St=l.getVertexShaderID(y),pt=l.getFragmentShaderID(y);const Nt=r.getRenderTarget(),Dt=O.isInstancedMesh===!0,Vt=O.isBatchedMesh===!0,Kt=!!y.map,J=!!y.matcap,P=!!X,ct=!!y.aoMap,lt=!!y.lightMap,it=!!y.bumpMap,ht=!!y.normalMap,Pt=!!y.displacementMap,_t=!!y.emissiveMap,R=!!y.metalnessMap,b=!!y.roughnessMap,H=y.anisotropy>0,$=y.clearcoat>0,Q=y.dispersion>0,K=y.iridescence>0,Et=y.sheen>0,dt=y.transmission>0,yt=H&&!!y.anisotropyMap,te=$&&!!y.clearcoatMap,st=$&&!!y.clearcoatNormalMap,Mt=$&&!!y.clearcoatRoughnessMap,kt=K&&!!y.iridescenceMap,zt=K&&!!y.iridescenceThicknessMap,bt=Et&&!!y.sheenColorMap,ee=Et&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,_e=!!y.specularColorMap,B=!!y.specularIntensityMap,xt=dt&&!!y.transmissionMap,Y=dt&&!!y.thicknessMap,tt=!!y.gradientMap,mt=!!y.alphaMap,vt=y.alphaTest>0,ne=!!y.alphaHash,ke=!!y.extensions;let _n=Gi;y.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(_n=r.toneMapping);const re={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:et,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Nt===null?r.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:$e,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:J,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:at,aoMap:ct,lightMap:lt,bumpMap:it,normalMap:ht,displacementMap:f&&Pt,emissiveMap:_t,normalMapObjectSpace:ht&&y.normalMapType===vv,normalMapTangentSpace:ht&&y.normalMapType===Rl,metalnessMap:R,roughnessMap:b,anisotropy:H,anisotropyMap:yt,clearcoat:$,clearcoatMap:te,clearcoatNormalMap:st,clearcoatRoughnessMap:Mt,dispersion:Q,iridescence:K,iridescenceMap:kt,iridescenceThicknessMap:zt,sheen:Et,sheenColorMap:bt,sheenRoughnessMap:ee,specularMap:Wt,specularColorMap:_e,specularIntensityMap:B,transmission:dt,transmissionMap:xt,thicknessMap:Y,gradientMap:tt,opaque:y.transparent===!1&&y.blending===wr&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:ne,combine:y.combine,mapUv:Kt&&p(y.map.channel),aoMapUv:ct&&p(y.aoMap.channel),lightMapUv:lt&&p(y.lightMap.channel),bumpMapUv:it&&p(y.bumpMap.channel),normalMapUv:ht&&p(y.normalMap.channel),displacementMapUv:Pt&&p(y.displacementMap.channel),emissiveMapUv:_t&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:yt&&p(y.anisotropyMap.channel),clearcoatMapUv:te&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(y.sheenRoughnessMap.channel),specularMapUv:Wt&&p(y.specularMap.channel),specularColorMapUv:_e&&p(y.specularColorMap.channel),specularIntensityMapUv:B&&p(y.specularIntensityMap.channel),transmissionMapUv:xt&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:mt&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ht||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Kt||mt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:_n,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xn,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function v(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)S.push(F),S.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(S,y),M(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const S=_[y.type];let F;if(S){const U=pi[S];F=pm.clone(U.uniforms)}else F=y.uniforms;return F}function T(y,S){let F;for(let U=0,O=h.length;U<O;U++){const W=h[U];if(W.cacheKey===S){F=W,++F.usedTimes;break}}return F===void 0&&(F=new bw(r,S,y,s),h.push(F)),F}function w(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:L}}function Cw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Rw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ff(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Rw),n.length>1&&n.sort(d||ff),i.length>1&&i.sort(d||ff)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Pw(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new pf,r.set(n,[o])):i>=s.length?(o=new pf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Lw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Iw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Dw=0;function Nw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Uw(r){const t=new Lw,e=Iw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Gt,o=new Gt;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,x=0,M=0,C=0,T=0,w=0;c.sort(Nw);for(let L=0,y=c.length;L<y;L++){const S=c[L],F=S.color,U=S.intensity,O=S.distance,W=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(S.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(S.sh.coefficients[N],U);w++}else if(S.isDirectionalLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const q=S.shadow,X=e.get(S);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=S.shadow.matrix,v++}n.directional[f]=N,f++}else if(S.isSpotLight){const N=t.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(F).multiplyScalar(U),N.distance=O,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,n.spot[_]=N;const q=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,q.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[_]=q.matrix,S.castShadow){const X=e.get(S);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=W,M++}_++}else if(S.isRectAreaLight){const N=t.get(S);N.color.copy(F).multiplyScalar(U),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=N,p++}else if(S.isPointLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const q=S.shadow,X=e.get(S);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=N,g++}else if(S.isHemisphereLight){const N=t.get(S);N.skyColor.copy(S.color).multiplyScalar(U),N.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[m]=N,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==v||E.numPointShadows!==x||E.numSpotShadows!==M||E.numSpotMaps!==C||E.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,E.directionalLength=f,E.pointLength=g,E.spotLength=_,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=v,E.numPointShadows=x,E.numSpotShadows=M,E.numSpotMaps=C,E.numLightProbes=w,n.version=Dw++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function mf(r){const t=new Uw(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ow(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new mf(r),t.set(i,[a])):s>=o.length?(a=new mf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fw extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bw extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
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
}`;function Hw(r,t,e){let n=new Pu;const i=new nt,s=new nt,o=new oe,a=new Fw({depthPacking:xv}),l=new Bw,c={},h=e.maxTextureSize,u={[Wi]:hn,[hn]:Wi,[Xn]:Xn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:kw,fragmentShader:zw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let m=this.type;this.render=function(T,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const L=r.getRenderTarget(),y=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ds),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=m!==Fi&&this.type===Fi,O=m===Fi&&this.type!==Fi;for(let W=0,N=T.length;W<N;W++){const q=T[W],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const at=X.getFrameExtents();if(i.multiply(at),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/at.x),i.x=s.x*at.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/at.y),i.y=s.y*at.y,X.mapSize.y=s.y)),X.map===null||U===!0||O===!0){const ut=this.type!==Fi?{minFilter:We,magFilter:We}:{};X.map!==null&&X.map.dispose(),X.map=new js(i.x,i.y,ut),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const rt=X.getViewportCount();for(let ut=0;ut<rt;ut++){const It=X.getViewport(ut);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),F.viewport(o),X.updateMatrices(q,ut),n=X.getFrustum(),M(w,E,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Fi&&v(X,E),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,y,S)};function v(T,w){const E=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new js(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,E,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,E,f,_,null)}function x(T,w,E,L){let y=null;const S=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=E.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=y.uuid,U=w.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let W=O[U];W===void 0&&(W=y.clone(),O[U]=W,w.addEventListener("dispose",C)),y=W}if(y.visible=w.visible,y.wireframe=w.wireframe,L===Fi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=r.properties.get(y);F.light=E}return y}function M(T,w,E,L,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const U=t.update(T),O=T.material;if(Array.isArray(O)){const W=U.groups;for(let N=0,q=W.length;N<q;N++){const X=W[N],at=O[X.materialIndex];if(at&&at.visible){const rt=x(T,at,L,y);T.onBeforeShadow(r,T,w,E,U,rt,X),r.renderBufferDirect(E,null,U,rt,T,X),T.onAfterShadow(r,T,w,E,U,rt,X)}}}else if(O.visible){const W=x(T,O,L,y);T.onBeforeShadow(r,T,w,E,U,W,null),r.renderBufferDirect(E,null,U,W,T,null),T.onAfterShadow(r,T,w,E,U,W,null)}}const F=T.children;for(let U=0,O=F.length;U<O;U++)M(F[U],w,E,L,y)}function C(T){T.target.removeEventListener("dispose",C);for(const E in c){const L=c[E],y=T.target.uuid;y in L&&(L[y].dispose(),delete L[y])}}}const Vw={[Jc]:Qc,[th]:ih,[eh]:sh,[Wr]:nh,[Qc]:Jc,[ih]:th,[sh]:eh,[nh]:Wr};function Gw(r){function t(){let B=!1;const xt=new oe;let Y=null;const tt=new oe(0,0,0,0);return{setMask:function(mt){Y!==mt&&!B&&(r.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){B=mt},setClear:function(mt,vt,ne,ke,_n){_n===!0&&(mt*=ke,vt*=ke,ne*=ke),xt.set(mt,vt,ne,ke),tt.equals(xt)===!1&&(r.clearColor(mt,vt,ne,ke),tt.copy(xt))},reset:function(){B=!1,Y=null,tt.set(-1,0,0,0)}}}function e(){let B=!1,xt=!1,Y=null,tt=null,mt=null;return{setReversed:function(vt){xt=vt},setTest:function(vt){vt?St(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!B&&(r.depthMask(vt),Y=vt)},setFunc:function(vt){if(xt&&(vt=Vw[vt]),tt!==vt){switch(vt){case Jc:r.depthFunc(r.NEVER);break;case Qc:r.depthFunc(r.ALWAYS);break;case th:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case nh:r.depthFunc(r.GEQUAL);break;case ih:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=vt}},setLocked:function(vt){B=vt},setClear:function(vt){mt!==vt&&(r.clearDepth(vt),mt=vt)},reset:function(){B=!1,Y=null,tt=null,mt=null}}}function n(){let B=!1,xt=null,Y=null,tt=null,mt=null,vt=null,ne=null,ke=null,_n=null;return{setTest:function(re){B||(re?St(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(re){xt!==re&&!B&&(r.stencilMask(re),xt=re)},setFunc:function(re,xn,Pi){(Y!==re||tt!==xn||mt!==Pi)&&(r.stencilFunc(re,xn,Pi),Y=re,tt=xn,mt=Pi)},setOp:function(re,xn,Pi){(vt!==re||ne!==xn||ke!==Pi)&&(r.stencilOp(re,xn,Pi),vt=re,ne=xn,ke=Pi)},setLocked:function(re){B=re},setClear:function(re){_n!==re&&(r.clearStencil(re),_n=re)},reset:function(){B=!1,xt=null,Y=null,tt=null,mt=null,vt=null,ne=null,ke=null,_n=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,C=null,T=new Rt(0,0,0),w=0,E=!1,L=null,y=null,S=null,F=null,U=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,N=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=N>=2);let X=null,at={};const rt=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),It=new oe().fromArray(rt),Bt=new oe().fromArray(ut);function j(B,xt,Y,tt){const mt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(B,vt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<Y;ne++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(xt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return vt}const et={};et[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),St(r.DEPTH_TEST),s.setFunc(Wr),lt(!1),it(Sd),St(r.CULL_FACE),P(ds);function St(B){c[B]!==!0&&(r.enable(B),c[B]=!0)}function pt(B){c[B]!==!1&&(r.disable(B),c[B]=!1)}function Nt(B,xt){return h[B]!==xt?(r.bindFramebuffer(B,xt),h[B]=xt,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xt),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function Dt(B,xt){let Y=d,tt=!1;if(B){Y=u.get(xt),Y===void 0&&(Y=[],u.set(xt,Y));const mt=B.textures;if(Y.length!==mt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,ne=mt.length;vt<ne;vt++)Y[vt]=r.COLOR_ATTACHMENT0+vt;Y.length=mt.length,tt=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,tt=!0);tt&&r.drawBuffers(Y)}function Vt(B){return f!==B?(r.useProgram(B),f=B,!0):!1}const Kt={[Os]:r.FUNC_ADD,[Gx]:r.FUNC_SUBTRACT,[Wx]:r.FUNC_REVERSE_SUBTRACT};Kt[Xx]=r.MIN,Kt[jx]=r.MAX;const J={[Yx]:r.ZERO,[qx]:r.ONE,[$x]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[ev]:r.SRC_ALPHA_SATURATE,[Qx]:r.DST_COLOR,[Zx]:r.DST_ALPHA,[Kx]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[tv]:r.ONE_MINUS_DST_COLOR,[Jx]:r.ONE_MINUS_DST_ALPHA,[nv]:r.CONSTANT_COLOR,[iv]:r.ONE_MINUS_CONSTANT_COLOR,[sv]:r.CONSTANT_ALPHA,[rv]:r.ONE_MINUS_CONSTANT_ALPHA};function P(B,xt,Y,tt,mt,vt,ne,ke,_n,re){if(B===ds){g===!0&&(pt(r.BLEND),g=!1);return}if(g===!1&&(St(r.BLEND),g=!0),B!==Vx){if(B!==_||re!==E){if((p!==Os||x!==Os)&&(r.blendEquation(r.FUNC_ADD),p=Os,x=Os),re)switch(B){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hl:r.blendFunc(r.ONE,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,v=null,M=null,C=null,T.set(0,0,0),w=0,_=B,E=re}return}mt=mt||xt,vt=vt||Y,ne=ne||tt,(xt!==p||mt!==x)&&(r.blendEquationSeparate(Kt[xt],Kt[mt]),p=xt,x=mt),(Y!==m||tt!==v||vt!==M||ne!==C)&&(r.blendFuncSeparate(J[Y],J[tt],J[vt],J[ne]),m=Y,v=tt,M=vt,C=ne),(ke.equals(T)===!1||_n!==w)&&(r.blendColor(ke.r,ke.g,ke.b,_n),T.copy(ke),w=_n),_=B,E=!1}function ct(B,xt){B.side===Xn?pt(r.CULL_FACE):St(r.CULL_FACE);let Y=B.side===hn;xt&&(Y=!Y),lt(Y),B.blending===wr&&B.transparent===!1?P(ds):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),i.setMask(B.colorWrite);const tt=B.stencilWrite;o.setTest(tt),tt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){L!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),L=B)}function it(B){B!==zx?(St(r.CULL_FACE),B!==y&&(B===Sd?r.cullFace(r.BACK):B===Hx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),y=B}function ht(B){B!==S&&(W&&r.lineWidth(B),S=B)}function Pt(B,xt,Y){B?(St(r.POLYGON_OFFSET_FILL),(F!==xt||U!==Y)&&(r.polygonOffset(xt,Y),F=xt,U=Y)):pt(r.POLYGON_OFFSET_FILL)}function _t(B){B?St(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function R(B){B===void 0&&(B=r.TEXTURE0+O-1),X!==B&&(r.activeTexture(B),X=B)}function b(B,xt,Y){Y===void 0&&(X===null?Y=r.TEXTURE0+O-1:Y=X);let tt=at[Y];tt===void 0&&(tt={type:void 0,texture:void 0},at[Y]=tt),(tt.type!==B||tt.texture!==xt)&&(X!==Y&&(r.activeTexture(Y),X=Y),r.bindTexture(B,xt||et[B]),tt.type=B,tt.texture=xt)}function H(){const B=at[X];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(B){It.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),It.copy(B))}function bt(B){Bt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Bt.copy(B))}function ee(B,xt){let Y=l.get(xt);Y===void 0&&(Y=new WeakMap,l.set(xt,Y));let tt=Y.get(B);tt===void 0&&(tt=r.getUniformBlockIndex(xt,B.name),Y.set(B,tt))}function Wt(B,xt){const tt=l.get(xt).get(B);a.get(xt)!==tt&&(r.uniformBlockBinding(xt,tt,B.__bindingPointIndex),a.set(xt,tt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,at={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,C=null,T=new Rt(0,0,0),w=0,E=!1,L=null,y=null,S=null,F=null,U=null,It.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:St,disable:pt,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:Vt,setBlending:P,setMaterial:ct,setFlipSided:lt,setCullFace:it,setLineWidth:ht,setPolygonOffset:Pt,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:kt,updateUBOMapping:ee,uniformBlockBinding:Wt,texStorage2D:te,texStorage3D:st,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:zt,viewport:bt,reset:_e}}function gf(r,t,e,n){const i=Ww(n);switch(e){case Jp:return r*t;case tm:return r*t;case em:return r*t*2;case Mu:return r*t/i.components*i.byteLength;case Su:return r*t/i.components*i.byteLength;case nm:return r*t*2/i.components*i.byteLength;case bu:return r*t*2/i.components*i.byteLength;case Qp:return r*t*3/i.components*i.byteLength;case jn:return r*t*4/i.components*i.byteLength;case wu:return r*t*4/i.components*i.byteLength;case Ya:case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ah:case ch:return Math.max(r,16)*Math.max(t,8)/4;case oh:case lh:return Math.max(r,8)*Math.max(t,8)/2;case hh:case uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Za:case Ah:case Ch:return Math.ceil(r/4)*Math.ceil(t/4)*16;case im:case Rh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ph:case Lh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ww(r){switch(r){case Xi:case $p:return{byteLength:1,components:1};case Go:case Kp:case _i:return{byteLength:2,components:1};case vu:case yu:return{byteLength:2,components:4};case Xs:case xu:case yn:return{byteLength:4,components:1};case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Xw(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):jo("canvas")}function _(R,b,H){let $=1;const Q=_t(R);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor($*Q.width),Et=Math.floor($*Q.height);u===void 0&&(u=g(K,Et));const dt=b?g(K,Et):u;return dt.width=K,dt.height=Et,dt.getContext("2d").drawImage(R,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Et+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==We&&R.minFilter!==qe}function m(R){r.generateMipmap(R)}function v(R,b,H,$,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===r.RED&&(H===r.FLOAT&&(K=r.R32F),H===r.HALF_FLOAT&&(K=r.R16F),H===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.R8UI),H===r.UNSIGNED_SHORT&&(K=r.R16UI),H===r.UNSIGNED_INT&&(K=r.R32UI),H===r.BYTE&&(K=r.R8I),H===r.SHORT&&(K=r.R16I),H===r.INT&&(K=r.R32I)),b===r.RG&&(H===r.FLOAT&&(K=r.RG32F),H===r.HALF_FLOAT&&(K=r.RG16F),H===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RG8UI),H===r.UNSIGNED_SHORT&&(K=r.RG16UI),H===r.UNSIGNED_INT&&(K=r.RG32UI),H===r.BYTE&&(K=r.RG8I),H===r.SHORT&&(K=r.RG16I),H===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGB8UI),H===r.UNSIGNED_SHORT&&(K=r.RGB16UI),H===r.UNSIGNED_INT&&(K=r.RGB32UI),H===r.BYTE&&(K=r.RGB8I),H===r.SHORT&&(K=r.RGB16I),H===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),H===r.UNSIGNED_INT&&(K=r.RGBA32UI),H===r.BYTE&&(K=r.RGBA8I),H===r.SHORT&&(K=r.RGBA16I),H===r.INT&&(K=r.RGBA32I)),b===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){const Et=Q?pl:ie.getTransfer($);H===r.FLOAT&&(K=r.RGBA32F),H===r.HALF_FLOAT&&(K=r.RGBA16F),H===r.UNSIGNED_BYTE&&(K=Et===Se?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,b){let H;return R?b===null||b===Xs||b===qr?H=r.DEPTH24_STENCIL8:b===yn?H=r.DEPTH32F_STENCIL8:b===Go&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xs||b===qr?H=r.DEPTH_COMPONENT24:b===yn?H=r.DEPTH_COMPONENT32F:b===Go&&(H=r.DEPTH_COMPONENT16),H}function M(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==We&&R.minFilter!==qe?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),w(b),b.isVideoTexture&&h.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),L(b)}function w(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,$=d.get(H);if($){const Q=$[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys($).length===0&&d.delete(H)}n.remove(R)}function E(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const H=R.source,$=d.get(H);delete $[b.__cacheKey],o.memory.textures--}function L(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Q=0;Q<b.__webglFramebuffer[$].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[$][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)r.deleteFramebuffer(b.__webglFramebuffer[$]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let $=0,Q=H.length;$<Q;$++){const K=n.get(H[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(R)}let y=0;function S(){y=0}function F(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function U(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){const H=n.get(R);if(R.isVideoTexture&&ht(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(H,R,b);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+b)}function W(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+b)}function N(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,b);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+b)}function q(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){j(H,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+b)}const X={[xe]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[dl]:r.MIRRORED_REPEAT},at={[We]:r.NEAREST,[qp]:r.NEAREST_MIPMAP_NEAREST,[Ro]:r.NEAREST_MIPMAP_LINEAR,[qe]:r.LINEAR,[ja]:r.LINEAR_MIPMAP_NEAREST,[oi]:r.LINEAR_MIPMAP_LINEAR},rt={[yv]:r.NEVER,[Ev]:r.ALWAYS,[Mv]:r.LESS,[rm]:r.LEQUAL,[Sv]:r.EQUAL,[Tv]:r.GEQUAL,[bv]:r.GREATER,[wv]:r.NOTEQUAL};function ut(R,b){if(b.type===yn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===qe||b.magFilter===ja||b.magFilter===Ro||b.magFilter===oi||b.minFilter===qe||b.minFilter===ja||b.minFilter===Ro||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,X[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==Ro&&b.minFilter!==oi||b.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function It(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const $=b.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const K=U(b);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[K].usedTimes++;const Et=Q[R.__cacheKey];Et!==void 0&&(Q[R.__cacheKey].usedTimes--,Et.usedTimes===0&&E(b)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return H}function Bt(R,b,H){let $=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=r.TEXTURE_3D);const Q=It(R,b),K=b.source;e.bindTexture($,R.__webglTexture,r.TEXTURE0+H);const Et=n.get(K);if(K.version!==Et.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);const dt=ie.getPrimaries(ie.workingColorSpace),yt=b.colorSpace===as?null:ie.getPrimaries(b.colorSpace),te=b.colorSpace===as||dt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=_(b.image,!1,i.maxTextureSize);st=Pt(b,st);const Mt=s.convert(b.format,b.colorSpace),kt=s.convert(b.type);let zt=v(b.internalFormat,Mt,kt,b.colorSpace,b.isVideoTexture);ut($,b);let bt;const ee=b.mipmaps,Wt=b.isVideoTexture!==!0,_e=Et.__version===void 0||Q===!0,B=K.dataReady,xt=M(b,st);if(b.isDepthTexture)zt=x(b.format===$r,b.type),_e&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,zt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,Mt,kt,null));else if(b.isDataTexture)if(ee.length>0){Wt&&_e&&e.texStorage2D(r.TEXTURE_2D,xt,zt,ee[0].width,ee[0].height);for(let Y=0,tt=ee.length;Y<tt;Y++)bt=ee[Y],Wt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,bt.width,bt.height,Mt,kt,bt.data):e.texImage2D(r.TEXTURE_2D,Y,zt,bt.width,bt.height,0,Mt,kt,bt.data);b.generateMipmaps=!1}else Wt?(_e&&e.texStorage2D(r.TEXTURE_2D,xt,zt,st.width,st.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,Mt,kt,st.data)):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,Mt,kt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&_e&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,zt,ee[0].width,ee[0].height,st.depth);for(let Y=0,tt=ee.length;Y<tt;Y++)if(bt=ee[Y],b.format!==jn)if(Mt!==null)if(Wt){if(B)if(b.layerUpdates.size>0){const mt=gf(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const ne=bt.data.subarray(vt*mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,vt,bt.width,bt.height,1,Mt,ne,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,Mt,bt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,zt,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,Mt,kt,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,zt,bt.width,bt.height,st.depth,0,Mt,kt,bt.data)}else{Wt&&_e&&e.texStorage2D(r.TEXTURE_2D,xt,zt,ee[0].width,ee[0].height);for(let Y=0,tt=ee.length;Y<tt;Y++)bt=ee[Y],b.format!==jn?Mt!==null?Wt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,zt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,bt.width,bt.height,Mt,kt,bt.data):e.texImage2D(r.TEXTURE_2D,Y,zt,bt.width,bt.height,0,Mt,kt,bt.data)}else if(b.isDataArrayTexture)if(Wt){if(_e&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,zt,st.width,st.height,st.depth),B)if(b.layerUpdates.size>0){const Y=gf(st.width,st.height,b.format,b.type);for(const tt of b.layerUpdates){const mt=st.data.subarray(tt*Y/st.data.BYTES_PER_ELEMENT,(tt+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,Mt,kt,mt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,kt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,st.width,st.height,st.depth,0,Mt,kt,st.data);else if(b.isData3DTexture)Wt?(_e&&e.texStorage3D(r.TEXTURE_3D,xt,zt,st.width,st.height,st.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,kt,st.data)):e.texImage3D(r.TEXTURE_3D,0,zt,st.width,st.height,st.depth,0,Mt,kt,st.data);else if(b.isFramebufferTexture){if(_e)if(Wt)e.texStorage2D(r.TEXTURE_2D,xt,zt,st.width,st.height);else{let Y=st.width,tt=st.height;for(let mt=0;mt<xt;mt++)e.texImage2D(r.TEXTURE_2D,mt,zt,Y,tt,0,Mt,kt,null),Y>>=1,tt>>=1}}else if(ee.length>0){if(Wt&&_e){const Y=_t(ee[0]);e.texStorage2D(r.TEXTURE_2D,xt,zt,Y.width,Y.height)}for(let Y=0,tt=ee.length;Y<tt;Y++)bt=ee[Y],Wt?B&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,Mt,kt,bt):e.texImage2D(r.TEXTURE_2D,Y,zt,Mt,kt,bt);b.generateMipmaps=!1}else if(Wt){if(_e){const Y=_t(st);e.texStorage2D(r.TEXTURE_2D,xt,zt,Y.width,Y.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,kt,st)}else e.texImage2D(r.TEXTURE_2D,0,zt,Mt,kt,st);p(b)&&m($),Et.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function j(R,b,H){if(b.image.length!==6)return;const $=It(R,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(r.TEXTURE0+H);const Et=ie.getPrimaries(ie.workingColorSpace),dt=b.colorSpace===as?null:ie.getPrimaries(b.colorSpace),yt=b.colorSpace===as||Et===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!te&&!st?Mt[tt]=_(b.image[tt],!0,i.maxCubemapSize):Mt[tt]=st?b.image[tt].image:b.image[tt],Mt[tt]=Pt(b,Mt[tt]);const kt=Mt[0],zt=s.convert(b.format,b.colorSpace),bt=s.convert(b.type),ee=v(b.internalFormat,zt,bt,b.colorSpace),Wt=b.isVideoTexture!==!0,_e=K.__version===void 0||$===!0,B=Q.dataReady;let xt=M(b,kt);ut(r.TEXTURE_CUBE_MAP,b);let Y;if(te){Wt&&_e&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,ee,kt.width,kt.height);for(let tt=0;tt<6;tt++){Y=Mt[tt].mipmaps;for(let mt=0;mt<Y.length;mt++){const vt=Y[mt];b.format!==jn?zt!==null?Wt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ee,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,vt.width,vt.height,zt,bt,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ee,vt.width,vt.height,0,zt,bt,vt.data)}}}else{if(Y=b.mipmaps,Wt&&_e){Y.length>0&&xt++;const tt=_t(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,ee,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Wt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,zt,bt,Mt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,Mt[tt].width,Mt[tt].height,0,zt,bt,Mt[tt].data);for(let mt=0;mt<Y.length;mt++){const ne=Y[mt].image[tt].image;Wt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,ne.width,ne.height,zt,bt,ne.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ee,ne.width,ne.height,0,zt,bt,ne.data)}}else{Wt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,bt,Mt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,zt,bt,Mt[tt]);for(let mt=0;mt<Y.length;mt++){const vt=Y[mt];Wt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,zt,bt,vt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ee,zt,bt,vt.image[tt])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),K.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function et(R,b,H,$,Q,K){const Et=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),yt=v(H.internalFormat,Et,dt,H.colorSpace);if(!n.get(b).__hasExternalTextures){const st=Math.max(1,b.width>>K),Mt=Math.max(1,b.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,yt,st,Mt,b.depth,0,Et,dt,null):e.texImage2D(Q,K,yt,st,Mt,0,Et,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),it(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,0,lt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function St(R,b,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const $=b.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=x(b.stencilBuffer,Q),Et=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=lt(b);it(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,K,b.width,b.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,R)}else{const $=b.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Et=s.convert(K.format,K.colorSpace),dt=s.convert(K.type),yt=v(K.internalFormat,Et,dt,K.colorSpace),te=lt(b);H&&it(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,yt,b.width,b.height):it(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,yt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,yt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const $=n.get(b.depthTexture).__webglTexture,Q=lt(b);if(b.depthTexture.format===Tr)it(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(b.depthTexture.format===$r)it(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Nt(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=r.createRenderbuffer(),St(b.__webglDepthbuffer[$],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),St(b.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(R,b,H){const $=n.get(R);b!==void 0&&et($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Nt(R)}function Vt(R){const b=R.texture,H=n.get(R),$=n.get(b);R.addEventListener("dispose",T);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=b.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)H.__webglFramebuffer[dt][yt]=r.createFramebuffer()}else H.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)H.__webglFramebuffer[dt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Et)for(let dt=0,yt=Q.length;dt<yt;dt++){const te=n.get(Q[dt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&it(R)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const yt=Q[dt];H.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const te=s.convert(yt.format,yt.colorSpace),st=s.convert(yt.type),Mt=v(yt.internalFormat,te,st,yt.colorSpace,R.isXRRenderTarget===!0),kt=lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Mt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),St(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ut(r.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)et(H.__webglFramebuffer[dt][yt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else et(H.__webglFramebuffer[dt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,yt=Q.length;dt<yt;dt++){const te=Q[dt],st=n.get(te);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),ut(r.TEXTURE_2D,te),et(H.__webglFramebuffer,R,te,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),p(te)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),ut(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)et(H.__webglFramebuffer[yt],R,b,r.COLOR_ATTACHMENT0,dt,yt);else et(H.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,dt,0);p(b)&&m(dt),e.unbindTexture()}R.depthBuffer&&Nt(R)}function Kt(R){const b=R.textures;for(let H=0,$=b.length;H<$;H++){const Q=b[H];if(p(Q)){const K=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Et=n.get(Q).__webglTexture;e.bindTexture(K,Et),m(K),e.unbindTexture()}}}const J=[],P=[];function ct(R){if(R.samples>0){if(it(R)===!1){const b=R.textures,H=R.width,$=R.height;let Q=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(R),dt=b.length>1;if(dt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const te=n.get(b[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,Q,r.NEAREST),l===!0&&(J.length=0,P.length=0,J.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(K),P.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const te=n.get(b[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,te,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function lt(R){return Math.min(i.maxSamples,R.samples)}function it(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Pt(R,b){const H=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==$e&&H!==as&&(ie.getTransfer(H)===Se?($!==jn||Q!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=Dt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=it}function jw(r,t){function e(n,i=as){let s;const o=ie.getTransfer(i);if(n===Xi)return r.UNSIGNED_BYTE;if(n===vu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$p)return r.BYTE;if(n===Kp)return r.SHORT;if(n===Go)return r.UNSIGNED_SHORT;if(n===xu)return r.INT;if(n===Xs)return r.UNSIGNED_INT;if(n===yn)return r.FLOAT;if(n===_i)return r.HALF_FLOAT;if(n===Jp)return r.ALPHA;if(n===Qp)return r.RGB;if(n===jn)return r.RGBA;if(n===tm)return r.LUMINANCE;if(n===em)return r.LUMINANCE_ALPHA;if(n===Tr)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Mu)return r.RED;if(n===Su)return r.RED_INTEGER;if(n===nm)return r.RG;if(n===bu)return r.RG_INTEGER;if(n===wu)return r.RGBA_INTEGER;if(n===Ya||n===qa||n===$a||n===Ka)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===ah||n===lh||n===ch)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hh||n===uh||n===dh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hh||n===uh)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh||n===yh||n===Mh||n===Sh||n===bh||n===wh||n===Th||n===Eh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Th)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ah||n===Ch)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===im||n===Rh||n===Ph||n===Lh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Yw extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ai extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kw=`
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

}`;class Zw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new en,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:$w,fragmentShader:Kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jw extends ys{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Zw,p=e.getContextAttributes();let m=null,v=null;const x=[],M=[],C=new nt;let T=null;const w=new ln;w.layers.enable(1),w.viewport=new oe;const E=new ln;E.layers.enable(2),E.viewport=new oe;const L=[w,E],y=new Yw;y.layers.enable(1),y.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=x[j];return et===void 0&&(et=new Sc,x[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=x[j];return et===void 0&&(et=new Sc,x[j]=et),et.getGripSpace()},this.getHand=function(j){let et=x[j];return et===void 0&&(et=new Sc,x[j]=et),et.getHandSpace()};function U(j){const et=M.indexOf(j.inputSource);if(et===-1)return;const St=x[et];St!==void 0&&(St.update(j.inputSource,j.frame,c||o),St.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let j=0;j<x.length;j++){const et=M[j];et!==null&&(M[j]=null,x[j].disconnect(et))}S=null,F=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,v=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new js(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,St=null,pt=null;p.depth&&(pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?$r:Tr,St=p.stencil?qr:Xs);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new js(d.textureWidth,d.textureHeight,{format:jn,type:Xi,depthTexture:new vm(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(j){for(let et=0;et<j.removed.length;et++){const St=j.removed[et],pt=M.indexOf(St);pt>=0&&(M[pt]=null,x[pt].disconnect(St))}for(let et=0;et<j.added.length;et++){const St=j.added[et];let pt=M.indexOf(St);if(pt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=M.length){M.push(St),pt=Dt;break}else if(M[Dt]===null){M[Dt]=St,pt=Dt;break}if(pt===-1)break}const Nt=x[pt];Nt&&Nt.connect(St)}}const N=new I,q=new I;function X(j,et,St){N.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const pt=N.distanceTo(q),Nt=et.projectionMatrix.elements,Dt=St.projectionMatrix.elements,Vt=Nt[14]/(Nt[10]-1),Kt=Nt[14]/(Nt[10]+1),J=(Nt[9]+1)/Nt[5],P=(Nt[9]-1)/Nt[5],ct=(Nt[8]-1)/Nt[0],lt=(Dt[8]+1)/Dt[0],it=Vt*ct,ht=Vt*lt,Pt=pt/(-ct+lt),_t=Pt*-ct;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const R=Vt+Pt,b=Kt+Pt,H=it-_t,$=ht+(pt-_t),Q=J*Kt/b*R,K=P*Kt/b*R;j.projectionMatrix.makePerspective(H,$,Q,K,R,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function at(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let et=j.near,St=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(St=_.depthFar)),y.near=E.near=w.near=et,y.far=E.far=w.far=St,(S!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,F=y.far);const pt=j.parent,Nt=y.cameras;at(y,pt);for(let Dt=0;Dt<Nt.length;Dt++)at(Nt[Dt],pt);Nt.length===2?X(y,w,E):y.projectionMatrix.copy(w.projectionMatrix),rt(j,y,pt)};function rt(j,et,St){St===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ut=null;function It(j,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let pt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let Dt=0;Dt<St.length;Dt++){const Vt=St[Dt];let Kt=null;if(f!==null)Kt=f.getViewport(Vt);else{const P=u.getViewSubImage(d,Vt);Kt=P.viewport,Dt===0&&(t.setRenderTargetTextures(v,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(v))}let J=L[Dt];J===void 0&&(J=new ln,J.layers.enable(Dt),J.viewport=new oe,L[Dt]=J),J.matrix.fromArray(Vt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Vt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Dt===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(J)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Dt=u.getDepthInformation(St[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let St=0;St<x.length;St++){const pt=M[St],Nt=x[St];pt!==null&&Nt!==void 0&&Nt.update(pt,et,c||o)}ut&&ut(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Bt=new xm;Bt.setAnimationLoop(It),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}}const Cs=new Mi,Qw=new Gt;function tT(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),x=v.envMap,M=v.envMapRotation;x&&(p.envMap.value=x,Cs.copy(M),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),p.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(Cs)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eT(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(v,C);const T=t.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){const x=u();v.__bindingPointIndex=x;const M=r.createBuffer(),C=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],M=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){const E=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,y=E.length;L<y;L++){const S=E[L];if(f(S,T,L,C)===!0){const F=S.__offset,U=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let W=0;W<U.length;W++){const N=U[W],q=_(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,F+O,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,M,C){const T=v.value,w=x+"_"+M;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const E=C[w];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return C[w]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(v){const x=v.uniforms;let M=0;const C=16;for(let w=0,E=x.length;w<E;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,S=L.length;y<S;y++){const F=L[y],U=Array.isArray(F.value)?F.value:[F.value];for(let O=0,W=U.length;O<W;O++){const N=U[O],q=_(N),X=M%C,at=X%q.boundary,rt=X+at;M+=at,rt!==0&&C-rt<q.storage&&(M+=C-rt),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}const T=M%C;return T>0&&(M+=C-T),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class nT{constructor(t={}){const{canvas:e=Gv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let M=!1,C=0,T=0,w=null,E=-1,L=null;const y=new oe,S=new oe;let F=null;const U=new Rt(0);let O=0,W=e.width,N=e.height,q=1,X=null,at=null;const rt=new oe(0,0,W,N),ut=new oe(0,0,W,N);let It=!1;const Bt=new Pu;let j=!1,et=!1;const St=new Gt,pt=new Gt,Nt=new I,Dt=new oe,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function J(){return w===null?q:1}let P=n;function ct(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),P===null){const k="webgl2";if(P=ct(k,A),P===null)throw ct(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let lt,it,ht,Pt,_t,R,b,H,$,Q,K,Et,dt,yt,te,st,Mt,kt,zt,bt,ee,Wt,_e,B;function xt(){lt=new ab(P),lt.init(),Wt=new jw(P,lt),it=new eb(P,lt,t,Wt),ht=new Gw(P),it.reverseDepthBuffer&&ht.buffers.depth.setReversed(!0),Pt=new hb(P),_t=new Cw,R=new Xw(P,lt,ht,_t,it,Wt,Pt),b=new ib(x),H=new ob(x),$=new _y(P),_e=new QS(P,$),Q=new lb(P,$,Pt,_e),K=new db(P,Q,$,Pt),zt=new ub(P,it,R),st=new nb(_t),Et=new Aw(x,b,H,lt,it,_e,st),dt=new tT(x,_t),yt=new Pw,te=new Ow(lt),kt=new JS(x,b,H,ht,K,d,l),Mt=new Hw(x,K,it),B=new eT(P,Pt,it,ht),bt=new tb(P,lt,Pt),ee=new cb(P,lt,Pt),Pt.programs=Et.programs,x.capabilities=it,x.extensions=lt,x.properties=_t,x.renderLists=yt,x.shadowMap=Mt,x.state=ht,x.info=Pt}xt();const Y=new Jw(x,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(W,N,!1))},this.getSize=function(A){return A.set(W,N)},this.setSize=function(A,k,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,N=k,e.width=Math.floor(A*q),e.height=Math.floor(k*q),V===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*q,N*q).floor()},this.setDrawingBufferSize=function(A,k,V){W=A,N=k,q=V,e.width=Math.floor(A*V),e.height=Math.floor(k*V),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,k,V,G){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,V,G),ht.viewport(y.copy(rt).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,k,V,G){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,k,V,G),ht.scissor(S.copy(ut).multiplyScalar(q).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){ht.setScissorTest(It=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(A=!0,k=!0,V=!0){let G=0;if(A){let z=!1;if(w!==null){const ot=w.texture.format;z=ot===wu||ot===bu||ot===Su}if(z){const ot=w.texture.type,gt=ot===Xi||ot===Xs||ot===Go||ot===qr||ot===vu||ot===yu,Tt=kt.getClearColor(),At=kt.getClearAlpha(),Ut=Tt.r,Ot=Tt.g,Ct=Tt.b;gt?(f[0]=Ut,f[1]=Ot,f[2]=Ct,f[3]=At,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ut,g[1]=Ot,g[2]=Ct,g[3]=At,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}k&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),te.dispose(),_t.dispose(),b.dispose(),H.dispose(),K.dispose(),_e.dispose(),B.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",fd),Y.removeEventListener("sessionend",pd),Ss.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Pt.autoReset,k=Mt.enabled,V=Mt.autoUpdate,G=Mt.needsUpdate,z=Mt.type;xt(),Pt.autoReset=A,Mt.enabled=k,Mt.autoUpdate=V,Mt.needsUpdate=G,Mt.type=z}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const k=A.target;k.removeEventListener("dispose",ne),ke(k)}function ke(A){_n(A),_t.remove(A)}function _n(A){const k=_t.get(A).programs;k!==void 0&&(k.forEach(function(V){Et.releaseProgram(V)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,V,G,z,ot){k===null&&(k=Vt);const gt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=Dx(A,k,V,G,z);ht.setMaterial(G,gt);let At=V.index,Ut=1;if(G.wireframe===!0){if(At=Q.getWireframeAttribute(V),At===void 0)return;Ut=2}const Ot=V.drawRange,Ct=V.attributes.position;let he=Ot.start*Ut,Me=(Ot.start+Ot.count)*Ut;ot!==null&&(he=Math.max(he,ot.start*Ut),Me=Math.min(Me,(ot.start+ot.count)*Ut)),At!==null?(he=Math.max(he,0),Me=Math.min(Me,At.count)):Ct!=null&&(he=Math.max(he,0),Me=Math.min(Me,Ct.count));const Ie=Me-he;if(Ie<0||Ie===1/0)return;_e.setup(z,G,Tt,V,At);let Pn,ae=bt;if(At!==null&&(Pn=$.get(At),ae=ee,ae.setIndex(Pn)),z.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*J()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(z.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),ht.setLineWidth(Lt*J()),z.isLineSegments?ae.setMode(P.LINES):z.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else z.isPoints?ae.setMode(P.POINTS):z.isSprite&&ae.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ae.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,sn=z._multiDrawCounts,le=z._multiDrawCount,ti=At?$.get(At).bytesPerElement:1,Qs=_t.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<le;Ln++)Qs.setValue(P,"_gl_DrawID",Ln),ae.render(Lt[Ln]/ti,sn[Ln])}else if(z.isInstancedMesh)ae.renderInstances(he,Ie,z.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,sn=Math.min(V.instanceCount,Lt);ae.renderInstances(he,Ie,sn)}else ae.render(he,Ie)};function re(A,k,V){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,ha(A,k,V),A.side=Wi,A.needsUpdate=!0,ha(A,k,V),A.side=Xn):ha(A,k,V)}this.compile=function(A,k,V=null){V===null&&(V=A),p=te.get(V),p.init(k),v.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==V&&A.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const G=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const Tt=ot[gt];re(Tt,V,z),G.add(Tt)}else re(ot,V,z),G.add(ot)}),v.pop(),p=null,G},this.compileAsync=function(A,k,V=null){const G=this.compile(A,k,V);return new Promise(z=>{function ot(){if(G.forEach(function(gt){_t.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){z(A);return}setTimeout(ot,10)}lt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xn=null;function Pi(A){xn&&xn(A)}function fd(){Ss.stop()}function pd(){Ss.start()}const Ss=new xm;Ss.setAnimationLoop(Pi),typeof self<"u"&&Ss.setContext(self),this.setAnimationLoop=function(A){xn=A,Y.setAnimationLoop(A),A===null?Ss.stop():Ss.start()},Y.addEventListener("sessionstart",fd),Y.addEventListener("sessionend",pd),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,w),p=te.get(A,v.length),p.init(k),v.push(p),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Bt.setFromProjectionMatrix(pt),et=this.localClippingEnabled,j=st.init(this.clippingPlanes,et),_=yt.get(A,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Vl(ot,k,-1/0,x.sortObjects)}Vl(A,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,at),Kt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Kt&&kt.addToRenderList(_,A),this.info.render.frame++,j===!0&&st.beginShadows();const V=p.state.shadowsArray;Mt.render(V,A,k),j===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,z=_.transmissive;if(p.setupLights(),k.isArrayCamera){const ot=k.cameras;if(z.length>0)for(let gt=0,Tt=ot.length;gt<Tt;gt++){const At=ot[gt];gd(G,z,A,At)}Kt&&kt.render(A);for(let gt=0,Tt=ot.length;gt<Tt;gt++){const At=ot[gt];md(_,A,At,At.viewport)}}else z.length>0&&gd(G,z,A,k),Kt&&kt.render(A),md(_,A,k);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,k),_e.resetDefaultState(),E=-1,L=null,v.pop(),v.length>0?(p=v[v.length-1],j===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Vl(A,k,V,G){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){G&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const gt=K.update(A),Tt=A.material;Tt.visible&&_.push(A,gt,Tt,V,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const gt=K.update(A),Tt=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Tt)){const At=gt.groups;for(let Ut=0,Ot=At.length;Ut<Ot;Ut++){const Ct=At[Ut],he=Tt[Ct.materialIndex];he&&he.visible&&_.push(A,gt,he,V,Dt.z,Ct)}}else Tt.visible&&_.push(A,gt,Tt,V,Dt.z,null)}}const ot=A.children;for(let gt=0,Tt=ot.length;gt<Tt;gt++)Vl(ot[gt],k,V,G)}function md(A,k,V,G){const z=A.opaque,ot=A.transmissive,gt=A.transparent;p.setupLightsView(V),j===!0&&st.setGlobalState(x.clippingPlanes,V),G&&ht.viewport(y.copy(G)),z.length>0&&ca(z,k,V),ot.length>0&&ca(ot,k,V),gt.length>0&&ca(gt,k,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function gd(A,k,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new js(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?_i:Xi,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ot=p.state.transmissionRenderTarget[G.id],gt=G.viewport||y;ot.setSize(gt.z,gt.w);const Tt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(U),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&kt.render(V);const At=x.toneMapping;x.toneMapping=Gi;const Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),j===!0&&st.setGlobalState(x.clippingPlanes,G),ca(A,V,G),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Ct=0,he=k.length;Ct<he;Ct++){const Me=k[Ct],Ie=Me.object,Pn=Me.geometry,ae=Me.material,Lt=Me.group;if(ae.side===Xn&&Ie.layers.test(G.layers)){const sn=ae.side;ae.side=hn,ae.needsUpdate=!0,_d(Ie,V,G,Pn,ae,Lt),ae.side=sn,ae.needsUpdate=!0,Ot=!0}}Ot===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}x.setRenderTarget(Tt),x.setClearColor(U,O),Ut!==void 0&&(G.viewport=Ut),x.toneMapping=At}function ca(A,k,V){const G=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ot=A.length;z<ot;z++){const gt=A[z],Tt=gt.object,At=gt.geometry,Ut=G===null?gt.material:G,Ot=gt.group;Tt.layers.test(V.layers)&&_d(Tt,k,V,At,Ut,Ot)}}function _d(A,k,V,G,z,ot){A.onBeforeRender(x,k,V,G,z,ot),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,k,V,G,A,ot),z.transparent===!0&&z.side===Xn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,x.renderBufferDirect(V,k,G,z,A,ot),z.side=Wi,z.needsUpdate=!0,x.renderBufferDirect(V,k,G,z,A,ot),z.side=Xn):x.renderBufferDirect(V,k,G,z,A,ot),A.onAfterRender(x,k,V,G,z,ot)}function ha(A,k,V){k.isScene!==!0&&(k=Vt);const G=_t.get(A),z=p.state.lights,ot=p.state.shadowsArray,gt=z.state.version,Tt=Et.getParameters(A,z.state,ot,k,V),At=Et.getProgramCacheKey(Tt);let Ut=G.programs;G.environment=A.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(A.isMeshStandardMaterial?H:b).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",ne),Ut=new Map,G.programs=Ut);let Ot=Ut.get(At);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===gt)return vd(A,Tt),Ot}else Tt.uniforms=Et.getUniforms(A),A.onBeforeCompile(Tt,x),Ot=Et.acquireProgram(Tt,At),Ut.set(At,Ot),G.uniforms=Tt.uniforms;const Ct=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=st.uniform),vd(A,Tt),G.needsLights=Ux(A),G.lightsStateVersion=gt,G.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function xd(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Qa.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function vd(A,k){const V=_t.get(A);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Dx(A,k,V,G,z){k.isScene!==!0&&(k=Vt),R.resetTextureUnits();const ot=k.fog,gt=G.isMeshStandardMaterial?k.environment:null,Tt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$e,At=(G.isMeshStandardMaterial?H:b).get(G.envMap||gt),Ut=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Me=!!V.morphAttributes.color;let Ie=Gi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ie=x.toneMapping);const Pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=Pn!==void 0?Pn.length:0,Lt=_t.get(G),sn=p.state.lights;if(j===!0&&(et===!0||A!==L)){const zn=A===L&&G.id===E;st.setState(G,A,zn)}let le=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==sn.state.version||Lt.outputColorSpace!==Tt||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==At||G.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==Ot||Lt.morphTargets!==Ct||Lt.morphNormals!==he||Lt.morphColors!==Me||Lt.toneMapping!==Ie||Lt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Lt.__version=G.version);let ti=Lt.currentProgram;le===!0&&(ti=ha(G,k,z));let Qs=!1,Ln=!1,Gl=!1;const Ue=ti.getUniforms(),Zi=Lt.uniforms;if(ht.useProgram(ti.program)&&(Qs=!0,Ln=!0,Gl=!0),G.id!==E&&(E=G.id,Ln=!0),Qs||L!==A){it.reverseDepthBuffer?(St.copy(A.projectionMatrix),Xv(St),jv(St),Ue.setValue(P,"projectionMatrix",St)):Ue.setValue(P,"projectionMatrix",A.projectionMatrix),Ue.setValue(P,"viewMatrix",A.matrixWorldInverse);const zn=Ue.map.cameraPosition;zn!==void 0&&zn.setValue(P,Nt.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Ue.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ue.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Ln=!0,Gl=!0)}if(z.isSkinnedMesh){Ue.setOptional(P,z,"bindMatrix"),Ue.setOptional(P,z,"bindMatrixInverse");const zn=z.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ue.setValue(P,"boneTexture",zn.boneTexture,R))}z.isBatchedMesh&&(Ue.setOptional(P,z,"batchingTexture"),Ue.setValue(P,"batchingTexture",z._matricesTexture,R),Ue.setOptional(P,z,"batchingIdTexture"),Ue.setValue(P,"batchingIdTexture",z._indirectTexture,R),Ue.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&Ue.setValue(P,"batchingColorTexture",z._colorsTexture,R));const Wl=V.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0)&&zt.update(z,V,ti),(Ln||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,Ue.setValue(P,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zi.envMap.value=At,Zi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(Zi.envMapIntensity.value=k.environmentIntensity),Ln&&(Ue.setValue(P,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&Nx(Zi,Gl),ot&&G.fog===!0&&dt.refreshFogUniforms(Zi,ot),dt.refreshMaterialUniforms(Zi,G,q,N,p.state.transmissionRenderTarget[A.id]),Qa.upload(P,xd(Lt),Zi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qa.upload(P,xd(Lt),Zi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ue.setValue(P,"center",z.center),Ue.setValue(P,"modelViewMatrix",z.modelViewMatrix),Ue.setValue(P,"normalMatrix",z.normalMatrix),Ue.setValue(P,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zn=G.uniformsGroups;for(let Xl=0,Ox=zn.length;Xl<Ox;Xl++){const yd=zn[Xl];B.update(yd,ti),B.bind(yd,ti)}}return ti}function Nx(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ux(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,k,V){_t.get(A.texture).__webglTexture=k,_t.get(A.depthTexture).__webglTexture=V;const G=_t.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const V=_t.get(A);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,V=0){w=A,C=k,T=V;let G=!0,z=null,ot=!1,gt=!1;if(A){const At=_t.get(A);if(At.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(At.__hasExternalTextures)R.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);const Ot=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?z=Ot[k][V]:z=Ot[k],ot=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?z=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[V]:z=Ot,y.copy(A.viewport),S.copy(A.scissor),F=A.scissorTest}else y.copy(rt).multiplyScalar(q).floor(),S.copy(ut).multiplyScalar(q).floor(),F=It;if(ht.bindFramebuffer(P.FRAMEBUFFER,z)&&G&&ht.drawBuffers(A,z),ht.viewport(y),ht.scissor(S),ht.setScissorTest(F),ot){const At=_t.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,V)}else if(gt){const At=_t.get(A.texture),Ut=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ut)}E=-1},this.readRenderTargetPixels=function(A,k,V,G,z,ot,gt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){ht.bindFramebuffer(P.FRAMEBUFFER,Tt);try{const At=A.texture,Ut=At.format,Ot=At.type;if(!it.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-G&&V>=0&&V<=A.height-z&&P.readPixels(k,V,G,z,Wt.convert(Ut),Wt.convert(Ot),ot)}finally{const At=w!==null?_t.get(w).__webglFramebuffer:null;ht.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(A,k,V,G,z,ot,gt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const At=A.texture,Ut=At.format,Ot=At.type;if(!it.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-G&&V>=0&&V<=A.height-z){ht.bindFramebuffer(P.FRAMEBUFFER,Tt);const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(k,V,G,z,Wt.convert(Ut),Wt.convert(Ot),0);const he=w!==null?_t.get(w).__webglFramebuffer:null;ht.bindFramebuffer(P.FRAMEBUFFER,he);const Me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wv(P,Me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Ct),P.deleteSync(Me),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,V=0){A.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),z=Math.floor(A.image.width*G),ot=Math.floor(A.image.height*G),gt=k!==null?k.x:0,Tt=k!==null?k.y:0;R.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,gt,Tt,z,ot),ht.unbindTexture()},this.copyTextureToTexture=function(A,k,V=null,G=null,z=0){A.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],k=arguments[2],z=arguments[3]||0,V=null);let ot,gt,Tt,At,Ut,Ot;V!==null?(ot=V.max.x-V.min.x,gt=V.max.y-V.min.y,Tt=V.min.x,At=V.min.y):(ot=A.image.width,gt=A.image.height,Tt=0,At=0),G!==null?(Ut=G.x,Ot=G.y):(Ut=0,Ot=0);const Ct=Wt.convert(k.format),he=Wt.convert(k.type);R.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=P.getParameter(P.UNPACK_ROW_LENGTH),Ie=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pn=P.getParameter(P.UNPACK_SKIP_PIXELS),ae=P.getParameter(P.UNPACK_SKIP_ROWS),Lt=P.getParameter(P.UNPACK_SKIP_IMAGES),sn=A.isCompressedTexture?A.mipmaps[z]:A.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,sn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,sn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,Ut,Ot,ot,gt,Ct,he,sn.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,Ut,Ot,sn.width,sn.height,Ct,sn.data):P.texSubImage2D(P.TEXTURE_2D,z,Ut,Ot,ot,gt,Ct,he,sn),P.pixelStorei(P.UNPACK_ROW_LENGTH,Me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),z===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(A,k,V=null,G=null,z=0){A.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],k=arguments[3],z=arguments[4]||0);let ot,gt,Tt,At,Ut,Ot,Ct,he,Me;const Ie=A.isCompressedTexture?A.mipmaps[z]:A.image;V!==null?(ot=V.max.x-V.min.x,gt=V.max.y-V.min.y,Tt=V.max.z-V.min.z,At=V.min.x,Ut=V.min.y,Ot=V.min.z):(ot=Ie.width,gt=Ie.height,Tt=Ie.depth,At=0,Ut=0,Ot=0),G!==null?(Ct=G.x,he=G.y,Me=G.z):(Ct=0,he=0,Me=0);const Pn=Wt.convert(k.format),ae=Wt.convert(k.type);let Lt;if(k.isData3DTexture)R.setTexture3D(k,0),Lt=P.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Lt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ti=P.getParameter(P.UNPACK_SKIP_PIXELS),Qs=P.getParameter(P.UNPACK_SKIP_ROWS),Ln=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot),A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Lt,z,Ct,he,Me,ot,gt,Tt,Pn,ae,Ie.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,z,Ct,he,Me,ot,gt,Tt,Pn,Ie.data):P.texSubImage3D(Lt,z,Ct,he,Me,ot,gt,Tt,Pn,ae,Ie),P.pixelStorei(P.UNPACK_ROW_LENGTH,sn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ti),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ln),z===0&&k.generateMipmaps&&P.generateMipmap(Lt),ht.unbindTexture()},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,ht.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eu?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Pl?"display-p3":"srgb"}}class Iu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new Iu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iT extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new I;class Du{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Du(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _f=new I,xf=new oe,vf=new oe,rT=new I,yf=new Gt,Ia=new I,bc=new Ei,Mf=new Gt,wc=new co;class oT extends wt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Td,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(i),t.ray.intersectsSphere(bc)!==!1&&(Mf.copy(i).invert(),wc.copy(t.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;xf.fromBufferAttribute(i.attributes.skinIndex,t),vf.fromBufferAttribute(i.attributes.skinWeight,t),_f.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=vf.getComponent(s);if(o!==0){const a=xf.getComponent(s);yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(rT.copy(_f).applyMatrix4(yf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class wm extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nu extends en{constructor(t=null,e=1,n=1,i,s,o,a,l,c=We,h=We,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=new Gt,aT=new Gt;class Uu{constructor(t=[],e=[]){this.uuid=$n(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:aT;Sf.multiplyMatrices(a,e[s]),Sf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Uu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Nu(e,t,t,jn,yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wm),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Uh extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new Gt,bf=new Gt,Da=[],wf=new $i,lT=new Gt,bo=new wt,wo=new Ei;class cT extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lT)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),wf.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(wf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),wo.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),t.ray.intersectsSphere(wo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,pr),bf.multiplyMatrices(n,pr),bo.matrixWorld=bf,bo.raycast(t,Da);for(let o=0,a=Da.length;o<a;o++){const l=Da[o];l.instanceId=s,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nu(new Float32Array(i*this.count),i,this.count,Mu,yn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class uo extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xl=new I,vl=new I,Tf=new Gt,To=new co,Na=new Ei,Tc=new I,Ef=new I;class Jr extends ge{constructor(t=new pe,e=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)xl.fromBufferAttribute(e,i-1),vl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xl.distanceTo(vl);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,t.ray.intersectsSphere(Na)===!1)return;Tf.copy(i).invert(),To.copy(t.ray).applyMatrix4(Tf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),v=h.getX(_+1),x=Ua(this,t,To,l,m,v);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=Ua(this,t,To,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=Ua(this,t,To,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Ua(this,t,To,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ua(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(xl.fromBufferAttribute(o,i),vl.fromBufferAttribute(o,s),e.distanceSqToSegment(xl,vl,Tc,Ef)>n)return;Tc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Tc);if(!(l<t.near||l>t.far))return{distance:l,point:Ef.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Af=new I,Cf=new I;class Ou extends Jr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Af.fromBufferAttribute(e,i),Cf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Af.distanceTo(Cf);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hT extends Jr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class oa extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rf=new Gt,Oh=new co,Oa=new Ei,Fa=new I;class Dl extends ge{constructor(t=new pe,e=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=s,t.ray.intersectsSphere(Oa)===!1)return;Rf.copy(i).invert(),Oh.copy(t.ray).applyMatrix4(Rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Fa.fromBufferAttribute(u,p),Pf(Fa,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Fa.fromBufferAttribute(u,g),Pf(Fa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pf(r,t,e,n,i,s,o){const a=Oh.distanceSqToPoint(r);if(a<e){const l=new I;Oh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new nt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],o=[],a=new I,l=new Gt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ve(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fu extends Ai{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class uT extends Fu{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bu(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ba=new I,Ec=new Bu,Ac=new Bu,Cc=new Bu;class dT extends Ai{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ec.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),Ac.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),Cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ac.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ec.calc(l),Ac.calc(l),Cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function fT(r,t){const e=1-r;return e*e*t}function pT(r,t){return 2*(1-r)*r*t}function mT(r,t){return r*r*t}function Fo(r,t,e,n){return fT(r,t)+pT(r,e)+mT(r,n)}function gT(r,t){const e=1-r;return e*e*e*t}function _T(r,t){const e=1-r;return 3*e*e*r*t}function xT(r,t){return 3*(1-r)*r*r*t}function vT(r,t){return r*r*r*t}function Bo(r,t,e,n,i){return gT(r,t)+_T(r,e)+xT(r,n)+vT(r,i)}class Tm extends Ai{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,i.x,s.x,o.x,a.x),Bo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yT extends Ai{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(t,i.x,s.x,o.x,a.x),Bo(t,i.y,s.y,o.y,a.y),Bo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Em extends Ai{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class MT extends Ai{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Am extends Ai{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,i.x,s.x,o.x),Fo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ST extends Ai{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fo(t,i.x,s.x,o.x),Fo(t,i.y,s.y,o.y),Fo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cm extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Lf(a,l.x,c.x,h.x,u.x),Lf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var Fh=Object.freeze({__proto__:null,ArcCurve:uT,CatmullRomCurve3:dT,CubicBezierCurve:Tm,CubicBezierCurve3:yT,EllipseCurve:Fu,LineCurve:Em,LineCurve3:MT,QuadraticBezierCurve:Am,QuadraticBezierCurve3:ST,SplineCurve:Cm});class bT extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Fh[i.type]().fromJSON(i))}return this}}class Bh extends bT{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Em(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Am(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Tm(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Fu(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ku extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new I,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zu extends pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){const M=new I,C=new I;let T=0;const w=(e-t)/n;for(let E=0;E<=s;E++){const L=[],y=E/s,S=y*(e-t)+t;for(let F=0;F<=i;F++){const U=F/i,O=U*l+a,W=Math.sin(O),N=Math.cos(O);C.x=S*W,C.y=-y*n+p,C.z=S*N,u.push(C.x,C.y,C.z),M.set(W,w,N).normalize(),d.push(M.x,M.y,M.z),f.push(U,1-y),L.push(g++)}_.push(L)}for(let E=0;E<i;E++)for(let L=0;L<s;L++){const y=_[L][E],S=_[L+1][E],F=_[L+1][E+1],U=_[L][E+1];t>0&&(h.push(y,S,U),T+=3),e>0&&(h.push(S,F,U),T+=3)}c.addGroup(m,T,0),m+=T}function x(M){const C=g,T=new nt,w=new I;let E=0;const L=M===!0?t:e,y=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const S=g;for(let F=0;F<=i;F++){const O=F/i*l+a,W=Math.cos(O),N=Math.sin(O);w.x=L*N,w.y=p*y,w.z=L*W,u.push(w.x,w.y,w.z),d.push(0,y,0),T.x=W*.5+.5,T.y=N*.5*y+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){const U=C+F,O=S+F;M===!0?h.push(O,O+1,U):h.push(O+1,O,U),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nl extends zu{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Nl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hu extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new I,M=new I,C=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],M),f(e[T+2],C),l(x,M,C,v)}function l(v,x,M,C){const T=C+1,w=[];for(let E=0;E<=T;E++){w[E]=[];const L=v.clone().lerp(M,E/T),y=x.clone().lerp(M,E/T),S=T-E;for(let F=0;F<=S;F++)F===0&&E===T?w[E][F]=L:w[E][F]=L.clone().lerp(y,F/S)}for(let E=0;E<T;E++)for(let L=0;L<2*(T-E)-1;L++){const y=Math.floor(L/2);L%2===0?(d(w[E][y+1]),d(w[E+1][y]),d(w[E][y])):(d(w[E][y+1]),d(w[E+1][y+1]),d(w[E+1][y]))}}function c(v){const x=new I;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){const v=new I;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=p(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],C=o[v+4],T=Math.max(x,M,C),w=Math.min(x,M,C);T>.9&&w<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const v=new I,x=new I,M=new I,C=new I,T=new nt,w=new nt,E=new nt;for(let L=0,y=0;L<s.length;L+=9,y+=6){v.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),T.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),C.copy(v).add(x).add(M).divideScalar(3);const S=p(C);_(T,y+0,v,S),_(w,y+2,x,S),_(E,y+4,M,S)}}function _(v,x,M,C){C<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.vertices,t.indices,t.radius,t.details)}}class tl extends Bh{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Bh().fromJSON(i))}return this}}const wT={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Rm(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=RT(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Yo(s,o,e,a,l,f,0),o}};function Rm(r,t,e,n,i){let s,o;if(i===zT(r,t,e,n)>0)for(s=t;s<e;s+=n)o=If(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=If(s,r[s],r[s+1],o);return o&&Ul(o,o.next)&&($o(o),o=o.next),o}function Ys(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ul(e,e.next)||Re(e.prev,e,e.next)===0)){if($o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&NT(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ET(r,n,i,s):TT(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),$o(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=AT(Ys(r),t,e),Yo(r,t,e,n,i,s,2)):o===2&&CT(r,t,e,n,i,s):Yo(Ys(r),t,e,n,i,s,1);break}}}function TT(r){const t=r.prev,e=r,n=r.next;if(Re(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&yr(i,a,s,l,o,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ET(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Re(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=kh(f,g,t,e,n),v=kh(_,p,t,e,n);let x=r.prevZ,M=r.nextZ;for(;x&&x.z>=m&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&yr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&yr(a,h,l,u,c,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&yr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&yr(a,h,l,u,c,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function AT(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Ul(i,s)&&Pm(i,n,n.next,s)&&qo(i,s)&&qo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),$o(n),$o(n.next),n=r=s),n=n.next}while(n!==r);return Ys(n)}function CT(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&FT(o,a)){let l=Lm(o,a);o=Ys(o,o.next),l=Ys(l,l.next),Yo(o,t,e,n,i,s,0),Yo(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function RT(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Rm(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(OT(c));for(i.sort(PT),s=0;s<i.length;s++)e=LT(i[s],e);return e}function PT(r,t){return r.x-t.x}function LT(r,t){const e=IT(r,t);if(!e)return t;const n=Lm(e,r);return Ys(n,n.next),Ys(e,e.next)}function IT(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&yr(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),qo(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&DT(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function DT(r,t){return Re(r.prev,r,t.prev)<0&&Re(t.next,r,r.next)<0}function NT(r,t,e,n){let i=r;do i.z===0&&(i.z=kh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,UT(i)}function UT(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function kh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function OT(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function yr(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function FT(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!BT(r,t)&&(qo(r,t)&&qo(t,r)&&kT(r,t)&&(Re(r.prev,r,t.prev)||Re(r,t.prev,t))||Ul(r,t)&&Re(r.prev,r,r.next)>0&&Re(t.prev,t,t.next)>0)}function Re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ul(r,t){return r.x===t.x&&r.y===t.y}function Pm(r,t,e,n){const i=za(Re(r,t,e)),s=za(Re(r,t,n)),o=za(Re(e,n,r)),a=za(Re(e,n,t));return!!(i!==s&&o!==a||i===0&&ka(r,e,t)||s===0&&ka(r,n,t)||o===0&&ka(e,r,n)||a===0&&ka(e,t,n))}function ka(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function za(r){return r>0?1:r<0?-1:0}function BT(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Pm(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function qo(r,t){return Re(r.prev,r,r.next)<0?Re(r,t,r.next)>=0&&Re(r,r.prev,t)>=0:Re(r,t,r.prev)<0||Re(r,r.next,t)<0}function kT(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Lm(r,t){const e=new zh(r.i,r.x,r.y),n=new zh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function If(r,t,e,n){const i=new zh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $o(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zh(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zT(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ar{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ar.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Df(t),Nf(n,t);let o=t.length;e.forEach(Df);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Nf(n,e[l]);const a=wT.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Df(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Nf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Vu extends pe{constructor(t=new tl([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Jt(i,3)),this.setAttribute("uv",new Jt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:HT;let x,M=!1,C,T,w,E;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,C=m.computeFrenetFrames(h,!1),T=new I,w=new I,E=new I),d||(p=0,f=0,g=0,_=0);const L=a.extractPoints(c);let y=L.shape;const S=L.holes;if(!Ar.isClockWise(y)){y=y.reverse();for(let J=0,P=S.length;J<P;J++){const ct=S[J];Ar.isClockWise(ct)&&(S[J]=ct.reverse())}}const U=Ar.triangulateShape(y,S),O=y;for(let J=0,P=S.length;J<P;J++){const ct=S[J];y=y.concat(ct)}function W(J,P,ct){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(P,ct)}const N=y.length,q=U.length;function X(J,P,ct){let lt,it,ht;const Pt=J.x-P.x,_t=J.y-P.y,R=ct.x-J.x,b=ct.y-J.y,H=Pt*Pt+_t*_t,$=Pt*b-_t*R;if(Math.abs($)>Number.EPSILON){const Q=Math.sqrt(H),K=Math.sqrt(R*R+b*b),Et=P.x-_t/Q,dt=P.y+Pt/Q,yt=ct.x-b/K,te=ct.y+R/K,st=((yt-Et)*b-(te-dt)*R)/(Pt*b-_t*R);lt=Et+Pt*st-J.x,it=dt+_t*st-J.y;const Mt=lt*lt+it*it;if(Mt<=2)return new nt(lt,it);ht=Math.sqrt(Mt/2)}else{let Q=!1;Pt>Number.EPSILON?R>Number.EPSILON&&(Q=!0):Pt<-Number.EPSILON?R<-Number.EPSILON&&(Q=!0):Math.sign(_t)===Math.sign(b)&&(Q=!0),Q?(lt=-_t,it=Pt,ht=Math.sqrt(H)):(lt=Pt,it=_t,ht=Math.sqrt(H/2))}return new nt(lt/ht,it/ht)}const at=[];for(let J=0,P=O.length,ct=P-1,lt=J+1;J<P;J++,ct++,lt++)ct===P&&(ct=0),lt===P&&(lt=0),at[J]=X(O[J],O[ct],O[lt]);const rt=[];let ut,It=at.concat();for(let J=0,P=S.length;J<P;J++){const ct=S[J];ut=[];for(let lt=0,it=ct.length,ht=it-1,Pt=lt+1;lt<it;lt++,ht++,Pt++)ht===it&&(ht=0),Pt===it&&(Pt=0),ut[lt]=X(ct[lt],ct[ht],ct[Pt]);rt.push(ut),It=It.concat(ut)}for(let J=0;J<p;J++){const P=J/p,ct=f*Math.cos(P*Math.PI/2),lt=g*Math.sin(P*Math.PI/2)+_;for(let it=0,ht=O.length;it<ht;it++){const Pt=W(O[it],at[it],lt);pt(Pt.x,Pt.y,-ct)}for(let it=0,ht=S.length;it<ht;it++){const Pt=S[it];ut=rt[it];for(let _t=0,R=Pt.length;_t<R;_t++){const b=W(Pt[_t],ut[_t],lt);pt(b.x,b.y,-ct)}}}const Bt=g+_;for(let J=0;J<N;J++){const P=d?W(y[J],It[J],Bt):y[J];M?(w.copy(C.normals[0]).multiplyScalar(P.x),T.copy(C.binormals[0]).multiplyScalar(P.y),E.copy(x[0]).add(w).add(T),pt(E.x,E.y,E.z)):pt(P.x,P.y,0)}for(let J=1;J<=h;J++)for(let P=0;P<N;P++){const ct=d?W(y[P],It[P],Bt):y[P];M?(w.copy(C.normals[J]).multiplyScalar(ct.x),T.copy(C.binormals[J]).multiplyScalar(ct.y),E.copy(x[J]).add(w).add(T),pt(E.x,E.y,E.z)):pt(ct.x,ct.y,u/h*J)}for(let J=p-1;J>=0;J--){const P=J/p,ct=f*Math.cos(P*Math.PI/2),lt=g*Math.sin(P*Math.PI/2)+_;for(let it=0,ht=O.length;it<ht;it++){const Pt=W(O[it],at[it],lt);pt(Pt.x,Pt.y,u+ct)}for(let it=0,ht=S.length;it<ht;it++){const Pt=S[it];ut=rt[it];for(let _t=0,R=Pt.length;_t<R;_t++){const b=W(Pt[_t],ut[_t],lt);M?pt(b.x,b.y+x[h-1].y,x[h-1].x+ct):pt(b.x,b.y,u+ct)}}}j(),et();function j(){const J=i.length/3;if(d){let P=0,ct=N*P;for(let lt=0;lt<q;lt++){const it=U[lt];Nt(it[2]+ct,it[1]+ct,it[0]+ct)}P=h+p*2,ct=N*P;for(let lt=0;lt<q;lt++){const it=U[lt];Nt(it[0]+ct,it[1]+ct,it[2]+ct)}}else{for(let P=0;P<q;P++){const ct=U[P];Nt(ct[2],ct[1],ct[0])}for(let P=0;P<q;P++){const ct=U[P];Nt(ct[0]+N*h,ct[1]+N*h,ct[2]+N*h)}}n.addGroup(J,i.length/3-J,0)}function et(){const J=i.length/3;let P=0;St(O,P),P+=O.length;for(let ct=0,lt=S.length;ct<lt;ct++){const it=S[ct];St(it,P),P+=it.length}n.addGroup(J,i.length/3-J,1)}function St(J,P){let ct=J.length;for(;--ct>=0;){const lt=ct;let it=ct-1;it<0&&(it=J.length-1);for(let ht=0,Pt=h+p*2;ht<Pt;ht++){const _t=N*ht,R=N*(ht+1),b=P+lt+_t,H=P+it+_t,$=P+it+R,Q=P+lt+R;Dt(b,H,$,Q)}}}function pt(J,P,ct){l.push(J),l.push(P),l.push(ct)}function Nt(J,P,ct){Vt(J),Vt(P),Vt(ct);const lt=i.length/3,it=v.generateTopUV(n,i,lt-3,lt-2,lt-1);Kt(it[0]),Kt(it[1]),Kt(it[2])}function Dt(J,P,ct,lt){Vt(J),Vt(P),Vt(lt),Vt(P),Vt(ct),Vt(lt);const it=i.length/3,ht=v.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Kt(ht[0]),Kt(ht[1]),Kt(ht[3]),Kt(ht[1]),Kt(ht[2]),Kt(ht[3])}function Vt(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Kt(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return VT(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fh[i.type]().fromJSON(i)),new Vu(n,t.options)}}const HT={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(s,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(d,1-g),new nt(_,1-m)]:[new nt(a,1-l),new nt(h,1-u),new nt(f,1-g),new nt(p,1-m)]}};function VT(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gu extends Hu{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gu(t.radius,t.detail)}}class Ki extends pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+M,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const x=h[m][v+1],M=h[m][v],C=h[m+1][v],T=h[m+1][v+1];(m!==0||o>0)&&f.push(x,M,T),(m!==n-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ol extends pe{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new I,d=new I,f=new I,g=new I,_=new I,p=new I,m=new I;for(let x=0;x<=n;++x){const M=x/n*s*Math.PI*2;v(M,s,o,t,f),v(M+.01,s,o,t,g),p.subVectors(g,f),m.addVectors(g,f),_.crossVectors(p,m),m.crossVectors(_,p),_.normalize(),m.normalize();for(let C=0;C<=i;++C){const T=C/i*Math.PI*2,w=-e*Math.cos(T),E=e*Math.sin(T);u.x=f.x+(w*m.x+E*_.x),u.y=f.y+(w*m.y+E*_.y),u.z=f.z+(w*m.z+E*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(C/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){const C=(i+1)*(x-1)+(M-1),T=(i+1)*x+(M-1),w=(i+1)*x+M,E=(i+1)*(x-1)+M;a.push(C,T,E),a.push(T,w,E)}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2));function v(x,M,C,T,w){const E=Math.cos(x),L=Math.sin(x),y=C/M*x,S=Math.cos(y);w.x=T*(2+S)*.5*E,w.y=T*(2+S)*L*.5,w.z=T*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ge extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ci extends Ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class GT extends Kn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class WT extends Kn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Rt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Ha(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function XT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jT(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Uf(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Im(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class aa{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class YT extends aa{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_r,endingEnd:_r}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xr:s=t,a=2*e-n;break;case fl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xr:o=t,l=2*n-e;break;case fl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+v*o[c+C]+x*o[l+C]+M*o[u+C];return s}}class Dm extends aa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class qT extends aa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ci{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ha(e,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ha(t.times,Array),values:Ha(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qT(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new YT(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case ql:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&XT(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ql,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Xo;class fo extends Ci{constructor(t,e,n){super(t,e,n)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Wo;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Nm extends Ci{}Nm.prototype.ValueTypeName="color";class Qr extends Ci{}Qr.prototype.ValueTypeName="number";class $T extends aa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class to extends Ci{InterpolantFactoryMethodLinear(t){return new $T(this.times,this.values,this.getValueSize(),t)}}to.prototype.ValueTypeName="quaternion";to.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends Ci{constructor(t,e,n){super(t,e,n)}}po.prototype.ValueTypeName="string";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=Wo;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Ci{}eo.prototype.ValueTypeName="vector";class Hh{constructor(t="",e=-1,n=[],i=Tu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ZT(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Ci.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=jT(l);l=Uf(l,1,h),c=Uf(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Qr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];Im(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Qr(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(eo,f+".position",d,"pos",i),n(to,f+".quaternion",d,"rot",i),n(eo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function KT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qr;case"vector":case"vector2":case"vector3":case"vector4":return eo;case"color":return Nm;case"quaternion":return to;case"bool":case"boolean":return fo;case"string":return po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ZT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=KT(r.type);if(r.times===void 0){const e=[],n=[];Im(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ls={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Um{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const JT=new Um;class Ri{constructor(t){this.manager=t!==void 0?t:JT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class QT extends Error{constructor(t,e){super(t),this.response=e}}class no extends Ri{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ls.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:n,onError:i});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Oi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){u.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,w=h.length;T<w;T++){const E=h[T];E.onProgress&&E.onProgress(C)}m.enqueue(M),v()}},x=>{m.error(x)})}}});return new Response(p)}else throw new QT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ls.add(t,c);const h=Oi[t];delete Oi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Oi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Oi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Om extends Ri{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ls.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=jo("img");function l(){h(),ls.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Fm extends Ri{constructor(t){super(t)}load(t,e,n,i){const s=new Ru;s.colorSpace=se;const o=new Om(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class tE extends Ri{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Nu,a=new no(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gi,o.wrapT=c.wrapT!==void 0?c.wrapT:gi,o.magFilter=c.magFilter!==void 0?c.magFilter:qe,o.minFilter=c.minFilter!==void 0?c.minFilter:qe,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=oi),c.mipmapCount===1&&(o.minFilter=qe),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class Qn extends Ri{constructor(t){super(t)}load(t,e,n,i){const s=new en,o=new Om(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class mo extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class eE extends mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Rc=new Gt,Of=new I,Ff=new I;class Wu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),Ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ff),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nE extends Wu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Kr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xu extends mo{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new nE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Bf=new Gt,Eo=new I,Pc=new I;class iE extends Wu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Eo),Pc.copy(n.position),Pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pc),n.updateMatrixWorld(),i.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}}class Bs extends mo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new iE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sE extends Wu{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hi extends mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new sE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zs extends mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rE extends mo{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class ko{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class oE extends Ri{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ls.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ls.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});ls.add(t,l),s.manager.itemStart(t)}}class aE{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Fn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Fn.multiplyQuaternionsFlat(t,o,t,e,t,n),Fn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const ju="\\[\\]\\.:\\/",lE=new RegExp("["+ju+"]","g"),Yu="[^"+ju+"]",cE="[^"+ju.replace("\\.","")+"]",hE=/((?:WC+[\/:])*)/.source.replace("WC",Yu),uE=/(WCOD+)?/.source.replace("WCOD",cE),dE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),fE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),pE=new RegExp("^"+hE+uE+dE+fE+"$"),mE=["material","materials","bones","map"];class gE{constructor(t,e,n){const i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(t){const e=pE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);mE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=gE;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _E{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:_r,endingEnd:_r};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mv:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Tu:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===pv;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===dv){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=xr,i.endingEnd=xr):(t?i.endingStart=this.zeroSlopeAtStart?xr:_r:i.endingStart=fl,e?i.endingEnd=this.zeroSlopeAtEnd?xr:_r:i.endingEnd=fl)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const xE=new Float32Array(1);class Bm extends ys{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new aE(ce.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Dm(new Float32Array(2),new Float32Array(2),1,xE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Hh.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Tu),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new _E(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Hh.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const kf=new Gt;class vE{constructor(t,e,n=0,i=1/0){this.ray=new co(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(t,e=!0,n=[]){return Vh(t,this,n,e),n.sort(zf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vh(t[i],this,n,e);return n.sort(zf),n}}function zf(r,t){return r.distance-t.distance}function Vh(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Vh(s[o],t,e,!0)}}class Hf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vf=new I;class yE extends ge{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new pe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Jt(i,3));const s=new uo({fog:!1,toneMapped:!1});this.cone=new Ou(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Vf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Vf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class ME extends wt{constructor(t,e,n){const i=new Ki(e,4,2),s=new De({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const SE=new I,Gf=new Rt,Wf=new Rt;class bE extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Gu(e);i.rotateY(Math.PI*.5),this.material=new De({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Ae(o,3)),this.add(new wt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Gf.copy(this.light.color),Wf.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const s=n<i/2?Gf:Wf;e.setXYZ(n,s.r,s.g,s.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(SE.setFromMatrixPosition(this.light.matrixWorld).negate())}}const Xf=new I,Va=new I,jf=new I;class wE extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new pe;i.setAttribute("position",new Jt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new uo({fog:!1,toneMapped:!1});this.lightPlane=new Jr(i,s),this.add(this.lightPlane),i=new pe,i.setAttribute("position",new Jt([0,0,0,0,0,1],3)),this.targetLine=new Jr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Xf.setFromMatrixPosition(this.light.matrixWorld),Va.setFromMatrixPosition(this.light.target.matrixWorld),jf.subVectors(Va,Xf),this.lightPlane.lookAt(Va),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Va),this.targetLine.scale.z=jf.length()}}class TE extends Ou{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new pe;i.setAttribute("position",new Jt(e,3)),i.setAttribute("color",new Jt(n,3));const s=new uo({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Rt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class EE{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Bh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const v=[];for(let x=0,M=m.length;x<M;x++){const C=m[x],T=new tl;T.curves=C.curves,v.push(T)}return v}function n(m,v){const x=v.length;let M=!1;for(let C=x-1,T=0;T<x;C=T++){let w=v[C],E=v[T],L=E.x-w.x,y=E.y-w.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(w=v[T],L=-L,E=v[C],y=-y),m.y<w.y||m.y>E.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const S=y*(m.x-w.x)-L*(m.y-w.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(m.y!==w.y)continue;if(E.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=E.x)return!0}}return M}const i=Ar.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new tl,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],g=0,_;d[g]=void 0,f[g]=[];for(let m=0,v=s.length;m<v;m++)a=s[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new tl,p:_},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:_[0]});if(!d[0])return e(s);if(d.length>1){let m=!1,v=0;for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const C=f[x];for(let T=0;T<C.length;T++){const w=C[T];let E=!0;for(let L=0;L<d.length;L++)n(w.p,d[L].p)&&(x!==L&&v++,E?(E=!1,u[L].push(w)):m=!0);E&&u[x].push(w)}}v>0&&m===!1&&(f=u)}let p;for(let m=0,v=d.length;m<v;m++){l=d[m].s,c.push(l),p=f[m];for(let x=0,M=p.length;x<M;x++)l.holes.push(p[x].h)}return c}}class AE extends ys{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);const Yf={type:"change"},qu={type:"start"},km={type:"end"},Ga=new co,qf=new os,CE=Math.cos(70*om.DEG2RAD),Ye=new I,vn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6;class zm extends AE{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Fn,this._lastTargetPosition=new I,this._quat=new Fn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hf,this._sphericalDelta=new Hf,this._scale=1,this._panOffset=new I,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new I,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PE.bind(this),this._onPointerDown=RE.bind(this),this._onPointerUp=LE.bind(this),this._onContextMenu=BE.bind(this),this._onMouseWheel=NE.bind(this),this._onKeyDown=UE.bind(this),this._onTouchStart=OE.bind(this),this._onTouchMove=FE.bind(this),this._onMouseDown=IE.bind(this),this._onMouseMove=DE.bind(this),this._interceptControlDown=kE.bind(this),this._interceptControlUp=zE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yf),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<CE?this.object.lookAt(this.target):(qf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(qf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(Yf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ye.copy(i).sub(this.target);let s=Ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function RE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function PE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function LE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(km),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function IE(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=de.DOLLY;break;case br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}break;case br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(qu)}function DE(r){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function NE(r){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(r.preventDefault(),this.dispatchEvent(qu),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(km))}function UE(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function OE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=de.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=de.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(qu)}function FE(r){switch(this._trackPointer(r),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=de.NONE}}function BE(r){this.enabled!==!1&&r.preventDefault()}function kE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class vi{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vi.nextNameID=vi.nextNameID||0,this.$name.id=`lil-gui-name-${++vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class HE extends vi{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Gh(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const VE={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Gh,toHexString:Gh},Ko={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},GE={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=Ko.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ko.toHexString(i)}},WE={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Ko.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ko.toHexString(i)}},XE=[VE,Ko,GE,WE];function jE(r){return XE.find(t=>t.match(r))}class YE extends vi{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Gh(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ic extends vi{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qE extends vi{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,h,u;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,M=v.clientY-l;Math.abs(M)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!o){const x=v.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,v,x,M,C)=>(m-v)/(x-v)*(C-M)+M,e=m=>{const v=this.$slider.getBoundingClientRect();let x=t(m,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{e(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(o){const v=m.touches[0].clientX-a,x=m.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const x=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $E extends vi{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class KE extends vi{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const ZE=`.lil-gui {
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
}`;function JE(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let $f=!1;class $u{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!$f&&a&&(JE(ZE),$f=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,s){if(Object(n)===n)return new $E(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new qE(this,t,e,n,i,s);case"boolean":return new HE(this,t,e);case"string":return new KE(this,t,e);case"function":return new Ic(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new YE(this,t,e,n)}addFolder(t){const e=new $u({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Ic||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ic)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}let QE=class{get title(){throw new Error("Lesson class must implement a getter for `title` property")}get link(){throw new Error("Lesson class must implement a getter for `link` property")}open(){throw new Error("Lesson class must implement an `open` method that implements current lesson logic")}close(){throw new Error("Lesson class must implement `close` method that release resources used by the lesson implementation")}};var Dr,Nr,Ur,we,Hm,Vm,Gm,Wm,Xm,jm,Ym,qm,$m,Km,Wh;class Te extends QE{constructor(){super(...arguments);jt(this,we);Z(this,"object3d",null);Z(this,"scene");Z(this,"camera");Z(this,"renderer");Z(this,"guiControl");Z(this,"control");Z(this,"canvas");Z(this,"hasGuiTweaks");Z(this,"hasAnimation");jt(this,Dr);jt(this,Nr);jt(this,Ur)}update(e){throw new Error("General lesson class with animations must implement an `update` method that implements current lesson logic")}animate(e=0){this.update(e),this.renderer.render(this.scene,this.camera),Je(this,Dr,requestAnimationFrame(this.animate.bind(this)))}open(){this.init(),document.body.appendChild(this.canvas),this.hasAnimation&&this.animate()}close(){document.body.removeChild(this.canvas),this.dispose(),Xt(this,Dr)&&cancelAnimationFrame(Xt(this,Dr))}init(){D(this,we,Km).call(this),this.initScene(),this.initCamera(),this.initRenderer(),this.initControl(),this.initGuiControl(),this.hasGuiTweaks&&this.guiControl.show(!0)}initScene(){this.scene=new iT}initCamera(){this.camera=new ln(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.scene.add(this.camera)}initRenderer(){let e=!1;window.devicePixelRatio<=1&&(e=!0),this.renderer=new nT({canvas:this.canvas,antialias:e}),D(this,we,Wh).call(this),Je(this,Ur,D(this,we,Wh).bind(this)),window.addEventListener("resize",Xt(this,Ur))}initControl(){this.control=new zm(this.camera,this.canvas),this.control.enableDamping=!0}initGuiControl(){this.guiControl=new $u({width:300,title:"GUI"}),this.guiControl.hide(),Je(this,Nr,D(this,we,$m).bind(this)),document.addEventListener("keydown",Xt(this,Nr))}dispose(){D(this,we,Hm).call(this),this.scene=null,this.camera=null,this.object3d=null,this.renderer=null,this.control=null,this.guiControl=null,this.canvas=null}}Dr=new WeakMap,Nr=new WeakMap,Ur=new WeakMap,we=new WeakSet,Hm=function(){D(this,we,Vm).call(this),D(this,we,Xm).call(this),D(this,we,jm).call(this),D(this,we,Ym).call(this),D(this,we,qm).call(this)},Vm=function(){this.scene.traverse(e=>{e.isMesh&&(D(this,we,Gm).call(this,e),D(this,we,Wm).call(this,e))})},Gm=function(e){e.geometry&&e.geometry.dispose()},Wm=function(e){if(e.material){for(const n in e.material){const i=e.material[n];i&&typeof i.dispose=="function"&&i.dispose()}e.material.dispose()}},Xm=function(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])},jm=function(){this.renderer.dispose(),window.removeEventListener("resize",Xt(this,Ur))},Ym=function(){this.control.dispose()},qm=function(){this.guiControl.destroy(),document.removeEventListener("keydown",Xt(this,Nr))},$m=function(e){e.code==="KeyH"&&this.guiControl.show(this.guiControl._hidden)},Km=function(){this.canvas=document.createElement("canvas")},Wh=function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(this.scene,this.camera)};let tA=class extends Te{get title(){return"[LESSON 03] First Three.js Project"}get link(){return"https://threejs-journey.com/lessons/first-threejs-project"}init(){super.init();const t=new Xe(1,1,1),e=new De({color:16711680});this.object3d=new wt(t,e),this.scene.add(this.object3d),this.renderer.render(this.scene,this.camera)}},eA=class extends Te{get title(){return"[LESSON 04] Transform objects"}get link(){return"https://threejs-journey.com/lessons/transform-objects"}init(){super.init();const t=new TE(6);this.scene.add(t),this.object3d=new ai,this.object3d.scale.y=2,this.object3d.scale.x=.5,this.object3d.rotation.y=Math.PI*.25,this.scene.add(this.object3d);const e=new Xe(1,1,1),n=new De({color:16711680}),i=new wt(e,n);i.position.x=-1.5,this.object3d.add(i);const s=new Xe(1,1,1),o=new De({color:65280}),a=new wt(s,o);a.position.x=0,this.object3d.add(a);const l=new Xe(1,1,1),c=new De({color:255}),h=new wt(l,c);h.position.x=1.5,this.object3d.add(h),this.camera.lookAt(i.position),this.renderer.render(this.scene,this.camera)}};function Bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},io={duration:.5,overwrite:!1,delay:0},Ku,un,Ee,Yn=1e8,ve=1/Yn,Xh=Math.PI*2,nA=Xh/4,iA=0,Jm=Math.sqrt,sA=Math.cos,rA=Math.sin,nn=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},ji=function(t){return typeof t=="number"},Zu=function(t){return typeof t>"u"},Si=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Ju=function(){return typeof window<"u"},Wa=function(t){return Ne(t)||nn(t)},Qm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,jh=/(?:-?\.?\d|\.)+/gi,tg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eg=/[+-]=-?[.\d]+/,ng=/[^,'"\[\]\s]+/gi,oA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,di,Yh,Qu,kn={},yl={},ig,sg=function(t){return(yl=qs(t,kn))&&En},td=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zo=function(t,e){return!e&&console.warn(t)},rg=function(t,e){return t&&(kn[t]=e)&&yl&&(yl[t]=e)||kn},Jo=function(){return 0},aA={suppressEvents:!0,isStart:!0,kill:!1},el={suppressEvents:!0,kill:!1},lA={suppressEvents:!0},ed={},fs=[],qh={},og,Nn={},Nc={},Kf=30,nl=[],nd="",id=function(t){var e=t[0],n,i;if(Si(e)||Ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=nl.length;i--&&!nl[i].targetTest(e););n=nl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Pg(t[i],n)))||t.splice(i,1);return t},Hs=function(t){return t._gsap||id(qn(t))[0]._gsap},ag=function(t,e,n){return(n=t[e])&&Ne(n)?t[e]():Zu(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},tn=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cA=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ml=function(){var t=fs.length,e=fs.slice(0),n,i;for(qh={},fs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lg=function(t,e,n,i){fs.length&&!un&&Ml(),t.render(e,n,un&&e<0&&(t._initted||t._startAt)),fs.length&&!un&&Ml()},cg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ng).length<2?e:nn(t)?t.trim():t},hg=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hA=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},qs=function(t,e){for(var n in e)t[n]=e[n];return t},Zf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Si(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zo=function(t){var e=t.parent||Ce,n=t.keyframes?hA(dn(t.keyframes)):Zn;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},uA=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ug=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ms=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},dA=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$h=function(t,e,n,i){return t._startAt&&(un?t._startAt.revert(el):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},fA=function r(t){return!t||t._ts&&r(t.parent)},Jf=function(t){return t._repeat?so(t._tTime,t=t.duration()+t._rDelay)*t:0},so=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},bl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bl=function(t){return t._end=tn(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},kl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=tn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bl(t),n._dirty||Vs(n,t)),t},dg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bl(t.rawTime(),e),(!e._dur||la(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),Vs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},mi=function(t,e,n,i){return e.parent&&ms(e),e._start=tn((ji(n)?n:n||t!==Ce?Vn(t,n,e):t._time)+e._delay),e._end=tn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ug(t,e,"_first","_last",t._sort?"_start":0),Kh(e)||(t._recent=e),i||dg(t,e),t._ts<0&&kl(t,t._tTime),t},fg=function(t,e){return(kn.ScrollTrigger||td("scrollTrigger",e))&&kn.ScrollTrigger.create(e,t)},pg=function(t,e,n,i,s){if(rd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!un&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&og!==Un.frame)return fs.push(t),t._lazy=[s,i],1},pA=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Kh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mA=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&pA(t)&&!(!t._initted&&Kh(t))||(t._ts<0||t._dp._ts<0)&&!Kh(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=la(0,t._tDur,e),h=so(l,a),t._yoyo&&h&1&&(o=1-o),h!==so(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||un||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&pg(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&$h(t,e,n,!0),t._onUpdate&&!n&&On(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&On(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ms(t,1),!n&&!un&&(On(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},gA=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ro=function(t,e,n,i){var s=t._repeat,o=tn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:tn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&kl(t,t._tTime=t._tDur*a),t.parent&&Bl(t),n||Vs(t.parent,t),t},Qf=function(t){return t instanceof gn?Vs(t):ro(t,t._dur)},_A={_start:0,endTime:Jo,totalDuration:Jo},Vn=function r(t,e,n){var i=t.labels,s=t._recent||_A,o=t.duration()>=Yn?s.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Ms=function(t,e){return t||t===0?e(t):e},la=function(t,e,n){return n<t?t:n>e?e:n},cn=function(t,e){return!nn(t)||!(e=oA.exec(t))?"":e[1]},xA=function(t,e,n){return Ms(n,function(i){return la(t,e,i)})},Zh=[].slice,mg=function(t,e){return t&&Si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Si(t[0]))&&!t.nodeType&&t!==di},vA=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||mg(i,1)?(s=n).push.apply(s,qn(i)):n.push(i)})||n},qn=function(t,e,n){return Ee&&!e&&Ee.selector?Ee.selector(t):nn(t)&&!n&&(Yh||!oo())?Zh.call((e||Qu).querySelectorAll(t),0):dn(t)?vA(t,n):mg(t)?Zh.call(t,0):t?[t]:[]},Jh=function(t){return t=qn(t)[0]||Zo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qn(e,n.querySelectorAll?n:n===t?Zo("Invalid scope")||Qu.createElement("div"):t)}},gg=function(t){return t.sort(function(){return .5-Math.random()})},_g=function(t){if(Ne(t))return t;var e=Si(t)?t:{each:t},n=Gs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return nn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,p=o[_],m,v,x,M,C,T,w,E,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,Yn])[1],!L){for(w=-Yn;w<(w=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(p=o[_]=[],m=l?Math.min(L,_)*h-.5:i%L,v=L===Yn?0:l?_*u/L-.5:i/L|0,w=0,E=Yn,T=0;T<_;T++)x=T%L-m,M=v-(T/L|0),p[T]=C=c?Math.abs(c==="y"?M:x):Jm(x*x+M*M),C>w&&(w=C),C<E&&(E=C);i==="random"&&gg(p),p.max=w-E,p.min=E,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=cn(e.amount||e.each)||0,n=n&&_<0?Ag(n):n}return _=(p[d]-p.min)/p.max||0,tn(p.b+(n?n(_):_)*p.v)+p.u}},Qh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=tn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ji(n)?0:cn(n))}},xg=function(t,e){var n=dn(t),i,s;return!n&&Si(t)&&(i=n=t.radius||Yn,t.values?(t=qn(t.values),(s=!ji(t[0]))&&(i*=i)):t=Qh(t.increment)),Ms(e,n?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Yn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||ji(o)?h:h+cn(o)}:Qh(t))},vg=function(t,e,n,i){return Ms(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},yA=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},MA=function(t,e){return function(n){return t(parseFloat(n))+(e||cn(n))}},SA=function(t,e,n){return Mg(t,e,0,1,n)},yg=function(t,e,n){return Ms(n,function(i){return t[~~e(i)]})},bA=function r(t,e,n){var i=e-t;return dn(t)?yg(t,r(0,t.length),e):Ms(n,function(s){return(i+(s-t)%i)%i+t})},wA=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?yg(t,r(0,t.length-1),e):Ms(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Qo=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?ng:jh),n+=t.substr(e,i-e)+vg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Mg=function(t,e,n,i,s){var o=e-t,a=i-n;return Ms(s,function(l){return n+((l-t)/o*a||0)})},TA=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=nn(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=qs(dn(t)?[]:{},t));if(!h){for(l in e)sd.call(a,t,l,"get",e[l]);s=function(g){return ld(g,a)||(o?t.p:t)}}}return Ms(n,s)},tp=function(t,e,n){var i=t.labels,s=Yn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},On=function(t,e,n){var i=t.vars,s=i[e],o=Ee,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&fs.length&&Ml(),a&&(Ee=a),h=l?s.apply(c,l):s.call(c),Ee=o,h},Lo=function(t){return ms(t),t.scrollTrigger&&t.scrollTrigger.kill(!!un),t.progress()<1&&On(t,"onInterrupt"),t},Sr,Sg=[],bg=function(t){if(t)if(t=!t.name&&t.default||t,Ju()||t.headless){var e=t.name,n=Ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Jo,render:ld,add:sd,kill:HA,modifier:zA,rawVars:0},o={targetTest:0,get:0,getSetter:ad,aliases:{},register:0};if(oo(),t!==i){if(Nn[e])return;Zn(i,Zn(Sl(t,s),o)),qs(i.prototype,qs(s,Sl(t,o))),Nn[i.prop=e]=i,t.targetTest&&(nl.push(i),ed[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rg(e,i),t.register&&t.register(En,i,bn)}else Sg.push(t)},me=255,Io={aqua:[0,me,me],lime:[0,me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,me],navy:[0,0,128],white:[me,me,me],olive:[128,128,0],yellow:[me,me,0],orange:[me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[me,0,0],pink:[me,192,203],cyan:[0,me,me],transparent:[me,me,me,0]},Uc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*me+.5|0},wg=function(t,e,n){var i=t?ji(t)?[t>>16,t>>8&me,t&me]:0:Io.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Io[t])i=Io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&me,i&me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&me,t&me]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(jh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Uc(l+1/3,s,o),i[1]=Uc(l,s,o),i[2]=Uc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(tg),n&&i.length<4&&(i[3]=1),i}else i=t.match(jh)||Io.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/me,o=i[1]/me,a=i[2]/me,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Tg=function(t){var e=[],n=[],i=-1;return t.split(ps).forEach(function(s){var o=s.match(Mr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ep=function(t,e,n){var i="",s=(t+i).match(ps),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=wg(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Tg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ps,"1").split(Mr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ps),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ps=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Io)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),EA=/hsl[a]?\(/,Eg=function(t){var e=t.join(" "),n;if(ps.lastIndex=0,ps.test(e))return n=EA.test(e),t[1]=ep(t[1],n),t[0]=ep(t[0],n,Tg(t[1])),!0},ta,Un=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(p){var m=r()-i,v=p===!0,x,M,C,T;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,x=C-o,(x>0||v)&&(T=++u.frame,d=C-u.time*1e3,u.time=C=C/1e3,o+=x+(x>=s?4:s-x),M=1),v||(l=c(_)),M)for(f=0;f<a.length;f++)a[f](C,d,T,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ig&&(!Yh&&Ju()&&(di=Yh=window,Qu=di.document||{},kn.gsap=En,(di.gsapVersions||(di.gsapVersions=[])).push(En.version),sg(yl||di.GreenSockGlobals||!di.gsap&&di||{}),Sg.forEach(bg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},ta=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ta=0,c=Jo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,v){var x=m?function(M,C,T,w){p(M,C,T,w),u.remove(x)}:p;return u.remove(p),a[v?"unshift":"push"](x),oo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),oo=function(){return!ta&&Un.wake()},Qt={},AA=/^[\d.\-M][\d.\-,\s]/,CA=/["']/g,RA=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(CA,"").trim():+c,i=l.substr(a+1).trim();return e},PA=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},LA=function(t){var e=(t+"").split("("),n=Qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[RA(e[1])]:PA(t).split(",").map(cg)):Qt._CE&&AA.test(t)?Qt._CE("",t):n},Ag=function(t){return function(e){return 1-t(1-e)}},Cg=function r(t,e){for(var n=t._first,i;n;)n instanceof gn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Gs=function(t,e){return t&&(Ne(t)?t:Qt[t]||LA(t))||e},Js=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Sn(t,function(a){Qt[a]=kn[a]=s,Qt[o=a.toLowerCase()]=n;for(var l in s)Qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qt[a+"."+l]=s[l]}),s},Rg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Oc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Xh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*rA((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Rg(a);return s=Xh/s,l.config=function(c,h){return r(t,c,h)},l},Fc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Rg(n);return i.config=function(s){return r(t,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Js(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Qt.Linear.easeNone=Qt.none=Qt.Linear.easeIn;Js("Elastic",Oc("in"),Oc("out"),Oc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Js("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Js("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Js("Circ",function(r){return-(Jm(1-r*r)-1)});Js("Sine",function(r){return r===1?1:-sA(r*nA)+1});Js("Back",Fc("in"),Fc("out"),Fc());Qt.SteppedEase=Qt.steps=kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ve;return function(a){return((i*la(0,o,a)|0)+s)*n}}};io.ease=Qt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return nd+=r+","+r+"Params,"});var Pg=function(t,e){this.id=iA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ag,this.set=e?e.getSetter:ad},ea=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ro(this,+e.duration,1,1),this.data=e.data,Ee&&(this._ctx=Ee,Ee.data.push(this)),ta||Un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kl(this,n),!s._dp||s.parent||dg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?so(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,s),i!==!1),Bl(this),dA(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lA);var i=un;return un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Vn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ve)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ne(n)?n:hg,a=function(){var c=i.then;i.then=null,Ne(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Lo(this)},r}();Zn(ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var gn=function(r){Zm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),Ce&&mi(n.parent||Ce,Bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fg(Bi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ho(0,arguments,this),this},e.from=function(i,s,o){return Ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Vn(this,o),1),this},e.call=function(i,s,o){return mi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(i,o,Vn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,zo(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,zo(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:tn(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,v,x,M,C,T,w;if(this!==Ce&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=tn(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),C=so(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),T&&_&1&&(d=c-d,w=1),_!==C&&!this._lock){var E=T&&C&1,L=E===(T&&_&1);if(_<C&&(E=!E),a=E?0:h%c?c:h,this._lock=1,this.render(a||(w?0:tn(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Cg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=gA(this,tn(a),tn(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(On(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=-ve);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||un&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=y?-ve:ve);break}}f=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-ve)._zTime=d>=a?1:-1,this._ts))return this._start=M,Bl(this),this.render(i,s,o);this._onUpdate&&!s&&On(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(On(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ji(s)||(s=Vn(this,s,i)),!(i instanceof ea)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ne(i))i=He.delayedCall(0,i);else return this}return this!==i?mi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ne(i)?this.killTweensOf(i):(Fl(this,i),i===this._recent&&(this._recent=this._last),Vs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Vn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Jo,o);return a.data="isPause",this._hasPause=1,mi(this,a,Vn(this,i))},e.removePause=function(i){var s=this._first;for(i=Vn(this,i);s;)s._start===i&&s.data==="isPause"&&ms(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)cs!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=qn(i),l=this._first,c=ji(s),h;l;)l instanceof He?cA(l._targets,a)&&(c?(!cs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Vn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=He.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ro(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:Vn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),tp(this,Vn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),tp(this,Vn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Vs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vs(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Yn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ro(o,o===Ce&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(lg(Ce,bl(i,Ce)),og=Un.frame),Un.frame>=Kf){Kf+=Bn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Bn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},t}(ea);Zn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var IA=function(t,e,n,i,s,o,a){var l=new bn(this._pt,t,e,0,1,Og,null,s),c=0,h=0,u,d,f,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Qo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),d=n.match(Dc)||[];u=Dc.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Cr(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Dc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(eg.test(i)||m)&&(l.e=0),this._pt=l,l},sd=function(t,e,n,i,s,o,a,l,c,h){Ne(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ne(u)?c?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ne(u)?c?FA:Ng:od,g;if(nn(i)&&(~i.indexOf("random(")&&(i=Qo(i)),i.charAt(1)==="="&&(g=Cr(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||tu)return!isNaN(d*i)&&i!==""?(g=new bn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?kA:Ug,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&td(e,i),IA.call(this,t,e,d,i,f,l||Bn.stringFilter,c))},DA=function(t,e,n,i,s){if(Ne(t)&&(t=Vo(t,s,e,n,i)),!Si(t)||t.style&&t.nodeType||dn(t)||Qm(t))return nn(t)?Vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,n,i);return o},Lg=function(t,e,n,i,s,o){var a,l,c,h;if(Nn[t]&&(a=new Nn[t]).init(s,a.rawVars?e[t]:DA(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Sr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},cs,tu,rd=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Ku,M=t.timeline,C,T,w,E,L,y,S,F,U,O,W,N,q;if(M&&(!d||!s)&&(s="none"),t._ease=Gs(s,io.ease),t._yEase=u?Ag(Gs(u===!0?s:u,io.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(F=p[0]?Hs(p[0]).harness:0,N=F&&i[F.prop],C=Sl(i,ed),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?el:aA),_._lazy=0),o){if(ms(t._startAt=He.set(p,Zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return On(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un||!a&&!f)&&t._startAt.revert(el),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),w=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Mn(l),immediateRender:a,stagger:0,parent:m},C),N&&(w[F.prop]=N),ms(t._startAt=He.set(p,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un?t._startAt.revert(el):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Mn(l)||l&&!g,T=0;T<p.length;T++){if(L=p[T],S=L._gsap||id(p)[T]._gsap,t._ptLookup[T]=O={},qh[S.id]&&fs.length&&Ml(),W=v===p?T:v.indexOf(L),F&&(U=new F).init(L,N||C,t,W,v)!==!1&&(t._pt=E=new bn(t._pt,L,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(X){O[X]=E}),U.priority&&(y=1)),!F||N)for(w in C)Nn[w]&&(U=Lg(w,C,t,W,L,v))?U.priority&&(y=1):O[w]=E=sd.call(t,L,w,"get",C[w],W,v,0,i.stringFilter);t._op&&t._op[T]&&t.kill(L,t._op[T]),x&&t._pt&&(cs=t,Ce.killTweensOf(L,O,t.globalTime(e)),q=!t.parent,cs=0),t._pt&&l&&(qh[S.id]=1)}y&&Fg(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,d&&e<=0&&M.render(Yn,!0,!0)},NA=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return tu=1,t.vars[e]="+=0",rd(t,a),tu=0,l?Zo(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Oe(n)+cn(u.e)),u.b&&(u.b=h.s+cn(u.b))},UA=function(t,e){var n=t[0]?Hs(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=qs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},OA=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,n,i,s){return Ne(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?Qo(t):t},Ig=nd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dg={};Sn(Ig+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Dg[r]=1});var He=function(r){Zm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:zo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=i.parent||Ce,x=(dn(n)||Qm(n)?ji(n[0]):"length"in i)?[n]:qn(n),M,C,T,w,E,L,y,S;if(a._targets=x.length?id(x):Zo("GSAP target "+n+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Wa(c)||Wa(h)){if(i=a.vars,M=a.timeline=new gn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),M.kill(),M.parent=M._dp=Bi(a),M._start=0,d||Wa(c)||Wa(h)){if(w=x.length,y=d&&_g(d),Si(d))for(E in d)~Ig.indexOf(E)&&(S||(S={}),S[E]=d[E]);for(C=0;C<w;C++)T=Sl(i,Dg),T.stagger=0,m&&(T.yoyoEase=m),S&&qs(T,S),L=x[C],T.duration=+Vo(c,Bi(a),C,L,x),T.delay=(+Vo(h,Bi(a),C,L,x)||0)-a._delay,!d&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(L,T,y?y(C,L,x):0),M._ease=Qt.none;M.duration()?c=h=0:a.timeline=0}else if(g){zo(Zn(M.vars.defaults,{ease:"none"})),M._ease=Gs(g.ease||i.ease||"none");var F=0,U,O,W;if(dn(g))g.forEach(function(N){return M.to(x,N,">")}),M.duration();else{T={};for(E in g)E==="ease"||E==="easeEach"||OA(E,g[E],T,g.easeEach);for(E in T)for(U=T[E].sort(function(N,q){return N.t-q.t}),F=0,C=0;C<U.length;C++)O=U[C],W={ease:O.e,duration:(O.t-(C?U[C-1].t:0))/100*c},W[E]=O.v,M.to(x,W,F),F+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Ku&&(cs=Bi(a),Ce.killTweensOf(x),cs=0),mi(v,Bi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===tn(v._time)&&Mn(u)&&fA(Bi(a))&&v.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),p&&fg(Bi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ve&&!h?l:i<ve?0:i,d,f,g,_,p,m,v,x,M;if(!c)mA(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=tn(u%_),u===l?(g=this._repeat,d=c):(g=~~(u/_),g&&g===tn(u/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,d=c-d),p=so(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&Cg(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(tn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(pg(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!g&&(On(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&$h(this,i,s,o),On(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&$h(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!s&&!(h&&!a)&&(u||a||m)&&(On(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ta||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||rd(this,c),h=this._ease(c/this._dur),NA(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(kl(this,0),this.parent||ug(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cs&&cs.vars.overwrite!==!0)._first||Lo(this),this.parent&&o!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?qn(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,p,m;if((!s||s==="all")&&uA(a,l))return s==="all"&&(this._pt=0),Lo(this);for(u=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Sn(s,function(v){return _[v]=1}),s=_),s=UA(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(u[m]=s,g=d,f={}):(f=u[m]=u[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Fl(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Lo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ce.killTweensOf(i,s,o)},t}(ea);Zn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new gn,e=Zh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var od=function(t,e,n){return t[e]=n},Ng=function(t,e,n){return t[e](n)},FA=function(t,e,n,i){return t[e](i.fp,n)},BA=function(t,e,n){return t.setAttribute(e,n)},ad=function(t,e){return Ne(t[e])?Ng:Zu(t[e])&&t.setAttribute?BA:od},Ug=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Og=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ld=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},zA=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},HA=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},VA=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fg=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},bn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ug,this.d=l||this,this.set=c||od,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=VA,this.m=n,this.mt=s,this.tween=i},r}();Sn(nd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ed[r]=1});kn.TweenMax=kn.TweenLite=He;kn.TimelineLite=kn.TimelineMax=gn;Ce=new gn({sortChildren:!1,defaults:io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=Eg;var Ws=[],il={},GA=[],np=0,WA=0,Bc=function(t){return(il[t]||GA).map(function(e){return e()})},eu=function(){var t=Date.now(),e=[];t-np>2&&(Bc("matchMediaInit"),Ws.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Bc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),np=t,Bc("matchMedia"))},Bg=function(){function r(e,n){this.selector=n&&Jh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WA++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ne(n)&&(s=i,i=n,n=Ne);var o=this,a=function(){var c=Ee,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jh(s)),Ee=o,u=i.apply(o,arguments),Ne(u)&&o._r.push(u),Ee=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ne?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ee;Ee=null,n(this),Ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ws.length;o--;)Ws[o].id===this.id&&Ws.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),XA=function(){function r(e){this.contexts=[],this.scope=e,Ee&&Ee.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Si(n)||(n={matches:n});var o=new Bg(0,s||this.scope),a=o.conditions={},l,c,h;Ee&&!o.selector&&(o.selector=Ee.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=di.matchMedia(n[c]),l&&(Ws.indexOf(o)<0&&Ws.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(eu):l.addEventListener("change",eu)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),wl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bg(i)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=qn(t)[0]);var s=Hs(t||{}).get,o=n?hg:cg;return n==="native"&&(n=""),t&&(e?o((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=qn(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Nn[e],a=Hs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Sr._pt=0,u.init(t,n?h+n:h,Sr,0,[t]),u.render(1,u),Sr._pt&&ld(1,Sr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=En.to(t,qs((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gs(t.ease,io.ease)),Zf(io,t||{})},config:function(t){return Zf(Bn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!kn[a]&&Zo(e+" effect requires "+a+" plugin.")}),Nc[e]=function(a,l,c){return n(qn(a),Zn(l||{},s),c)},o&&(gn.prototype[e]=function(a,l,c){return this.add(Nc[e](a,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Qt[t]=Gs(e)},parseEase:function(t,e){return arguments.length?Gs(t,e):Qt},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new gn(t),i,s;for(n.smoothChildTiming=Mn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=s;return mi(Ce,n,0),n},context:function(t,e){return t?new Bg(t,e):Ee},matchMedia:function(t){return new XA(t)},matchMediaRefresh:function(){return Ws.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||eu()},addEventListener:function(t,e){var n=il[t]||(il[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=il[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bA,wrapYoyo:wA,distribute:_g,random:vg,snap:xg,normalize:SA,getUnit:cn,clamp:xA,splitColor:wg,toArray:qn,selector:Jh,mapRange:Mg,pipe:yA,unitize:MA,interpolate:TA,shuffle:gg},install:sg,effects:Nc,ticker:Un,updateRoot:gn.updateRoot,plugins:Nn,globalTimeline:Ce,core:{PropTween:bn,globals:rg,Tween:He,Timeline:gn,Animation:ea,getCache:Hs,_removeLinkedListItem:Fl,reverting:function(){return un},context:function(t){return t&&Ee&&(Ee.data.push(t),t._ctx=Ee),Ee},suppressOverwrites:function(t){return Ku=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return wl[r]=He[r]});Un.add(gn.updateRoot);Sr=wl.to({},{duration:0});var jA=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},YA=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=jA(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},kc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Sn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}YA(a,s)}}}},En=wl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},kc("roundProps",Qh),kc("modifiers"),kc("snap",xg))||wl;He.version=gn.version=En.version="3.12.5";ig=1;Ju()&&oo();Qt.Power0;Qt.Power1;Qt.Power2;Qt.Power3;Qt.Power4;Qt.Linear;Qt.Quad;Qt.Cubic;Qt.Quart;Qt.Quint;Qt.Strong;Qt.Elastic;Qt.Back;Qt.SteppedEase;Qt.Bounce;Qt.Sine;Qt.Expo;Qt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ip,hs,Rr,cd,ks,sp,hd,qA=function(){return typeof window<"u"},Yi={},Ds=180/Math.PI,Pr=Math.PI/180,mr=Math.atan2,rp=1e8,ud=/([A-Z])/g,$A=/(left|right|width|margin|padding|x)/i,KA=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},QA=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},kg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},t1=function(t,e,n){return t.style[e]=n},e1=function(t,e,n){return t.style.setProperty(e,n)},n1=function(t,e,n){return t._gsap[e]=n},i1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},s1=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},r1=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",wn=Pe+"Origin",o1=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Yi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=zi(i,a)}):this.tfm[t]=o.x?o[t]:zi(i,t),t===wn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},Hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},a1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ud,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hd(),(!s||!s.isStart)&&!n[Pe]&&(Hg(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vg=function(t,e){var n={target:t,props:[],revert:a1,save:o1};return t._gsap||En.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Gg,iu=function(t,e){var n=hs.createElementNS?hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hs.createElement(t);return n&&n.style?n:hs.createElement(t)},yi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ud,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ao(e)||e,1)||""},op="O,Moz,ms,Ms,Webkit".split(","),ao=function(t,e,n){var i=e||ks,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(op[o]+t in s););return o<0?null:(o===3?"ms":o>=0?op[o]:"")+t},su=function(){qA()&&window.document&&(ip=window,hs=ip.document,Rr=hs.documentElement,ks=iu("div")||{style:{}},iu("div"),Pe=ao(Pe),wn=Pe+"Origin",ks.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gg=!!ao("perspective"),hd=En.core.reverting,cd=1)},zc=function r(t){var e=iu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Rr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Rr.removeChild(e),this.style.cssText=s,o},ap=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wg=function(t){var e;try{e=t.getBBox()}catch{e=zc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===zc||(e=zc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ap(t,["x","cx","x1"])||0,y:+ap(t,["y","cy","y1"])||0,width:0,height:0}:e},Xg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wg(t))},$s=function(t,e){if(e){var n=t.style,i;e in Yi&&e!==wn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ud,"-$1").toLowerCase())):n.removeAttribute(e)}},us=function(t,e,n,i,s,o){var a=new bn(t._pt,e,n,0,1,o?zg:kg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},lp={deg:1,rad:1,turn:1},l1={grid:1,flex:1},gs=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ks.style,l=$A.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||lp[i]||lp[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&Xg(t),(f||o==="%")&&(Yi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Oe(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Un.time&&!p.uncache)return Oe(s/p.width*u);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,g=t[h],v?t.style[e]=v:$s(t,e)}else(f||o==="%")&&!l1[yi(_,"display")]&&(a.position=yi(t,"position")),_===t&&(a.position="static"),_.appendChild(ks),g=ks[h],_.removeChild(ks),a.position="absolute";return l&&f&&(p=Hs(_),p.time=Un.time,p.width=_[h]),Oe(d?g*s/u:g&&s?u/g*s:0)},zi=function(t,e,n,i){var s;return cd||su(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Yi[e]&&e!=="transform"?(s=ia(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:El(yi(t,wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Tl[e]&&Tl[e](t,e,n)||yi(t,e)||ag(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gs(t,e,s,n)+n:s},c1=function(t,e,n,i){if(!n||n==="none"){var s=ao(e,t,1),o=s&&yi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=yi(t,"borderTopColor"))}var a=new bn(this._pt,t.style,e,0,1,Og),l=0,c=0,h,u,d,f,g,_,p,m,v,x,M,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=yi(t,e)||i,_?t.style[e]=_:$s(t,e)),h=[n,i],Eg(h),n=h[0],i=h[1],d=n.match(Mr)||[],C=i.match(Mr)||[],C.length){for(;u=Mr.exec(i);)p=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),p.charAt(1)==="="&&(p=Cr(f,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=Mr.lastIndex-x.length,x||(x=x||Bn.units[e]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(f=gs(t,e,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?zg:kg;return eg.test(i)&&(a.e=0),this._pt=a,a},cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},h1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=cp[n]||n,e[1]=cp[i]||i,e.join(" ")},u1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yi[a]&&(l=1,a=a==="transformOrigin"?wn:Pe),$s(n,a);l&&($s(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),ia(n,1),o.uncache=1,Hg(i)))}},Tl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new bn(t._pt,e,n,0,0,u1);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},na=[1,0,0,1,0,0],jg={},Yg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hp=function(t){var e=yi(t,Pe);return Yg(e)?na:e.substr(7).match(tg).map(Oe)},dd=function(t,e){var n=t._gsap||Hs(t),i=t.style,s=hp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?na:s):(s===na&&!t.offsetParent&&t!==Rr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Rr.appendChild(t)),s=hp(t),l?i.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Rr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ru=function(t,e,n,i,s,o){var a=t._gsap,l=s||dd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],x=e.split(" "),M=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,w,E,L;n?l!==na&&(w=f*p-g*_)&&(E=M*(p/w)+C*(-_/w)+(_*v-p*m)/w,L=M*(-g/w)+C*(f/w)-(f*v-g*m)/w,M=E,C=L):(T=Wg(t),M=T.x+(~x[0].indexOf("%")?M/100*T.width:M),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(m=M-c,v=C-h,a.xOffset=u+(m*f+v*_)-m,a.yOffset=d+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[wn]="0px 0px",o&&(us(o,a,"xOrigin",c,M),us(o,a,"yOrigin",h,C),us(o,a,"xOffset",u,a.xOffset),us(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+C)},ia=function(t,e){var n=t._gsap||new Pg(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=yi(t,wn)||"0",h,u,d,f,g,_,p,m,v,x,M,C,T,w,E,L,y,S,F,U,O,W,N,q,X,at,rt,ut,It,Bt,j,et;return h=u=d=_=p=m=v=x=M=0,f=g=1,n.svg=!!(t.getCTM&&Xg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),w=dd(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),ru(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,T=n.yOrigin||0,w!==na&&(S=w[0],F=w[1],U=w[2],O=w[3],h=W=w[4],u=N=w[5],w.length===6?(f=Math.sqrt(S*S+F*F),g=Math.sqrt(O*O+U*U),_=S||F?mr(F,S)*Ds:0,v=U||O?mr(U,O)*Ds+_:0,v&&(g*=Math.abs(Math.cos(v*Pr))),n.svg&&(h-=C-(C*S+T*U),u-=T-(C*F+T*O))):(et=w[6],Bt=w[7],rt=w[8],ut=w[9],It=w[10],j=w[11],h=w[12],u=w[13],d=w[14],E=mr(et,It),p=E*Ds,E&&(L=Math.cos(-E),y=Math.sin(-E),q=W*L+rt*y,X=N*L+ut*y,at=et*L+It*y,rt=W*-y+rt*L,ut=N*-y+ut*L,It=et*-y+It*L,j=Bt*-y+j*L,W=q,N=X,et=at),E=mr(-U,It),m=E*Ds,E&&(L=Math.cos(-E),y=Math.sin(-E),q=S*L-rt*y,X=F*L-ut*y,at=U*L-It*y,j=O*y+j*L,S=q,F=X,U=at),E=mr(F,S),_=E*Ds,E&&(L=Math.cos(E),y=Math.sin(E),q=S*L+F*y,X=W*L+N*y,F=F*L-S*y,N=N*L-W*y,S=q,W=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Oe(Math.sqrt(S*S+F*F+U*U)),g=Oe(Math.sqrt(N*N+et*et)),E=mr(W,N),v=Math.abs(E)>2e-4?E*Ds:0,M=j?1/(j<0?-j:j):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Yg(yi(t,Pe)),q&&t.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Oe(f),n.scaleY=Oe(g),n.rotation=Oe(_)+a,n.rotationX=Oe(p)+a,n.rotationY=Oe(m)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[wn]=El(c)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?f1:Gg?qg:d1,n.uncache=0,n},El=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hc=function(t,e,n){var i=cn(e);return Oe(parseFloat(e)+parseFloat(gs(t,"x",n+"px",i)))+i},d1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qg(t,e)},Rs="0deg",Ao="0px",Ps=") ",qg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,M="",C=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==Rs||h!==Rs)){var T=parseFloat(h)*Pr,w=Math.sin(T),E=Math.cos(T),L;T=parseFloat(u)*Pr,L=Math.cos(T),o=Hc(v,o,w*L*-x),a=Hc(v,a,-Math.sin(T)*-x),l=Hc(v,l,E*L*-x+x)}p!==Ao&&(M+="perspective("+p+Ps),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(C||o!==Ao||a!==Ao||l!==Ao)&&(M+=l!==Ao||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ps),c!==Rs&&(M+="rotate("+c+Ps),h!==Rs&&(M+="rotateY("+h+Ps),u!==Rs&&(M+="rotateX("+u+Ps),(d!==Rs||f!==Rs)&&(M+="skew("+d+", "+f+Ps),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ps),v.style[Pe]=M||"translate(0, 0)"},f1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(o),M=parseFloat(a),C,T,w,E,L;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Pr,c*=Pr,C=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-d,E=Math.cos(l-c)*d,c&&(h*=Pr,L=Math.tan(c-h),L=Math.sqrt(1+L*L),w*=L,E*=L,h&&(L=Math.tan(h),L=Math.sqrt(1+L*L),C*=L,T*=L)),C=Oe(C),T=Oe(T),w=Oe(w),E=Oe(E)):(C=u,E=d,T=w=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=gs(f,"x",o,"px"),M=gs(f,"y",a,"px")),(g||_||p||m)&&(x=Oe(x+g-(g*C+_*w)+p),M=Oe(M+_-(g*T+_*E)+m)),(i||s)&&(L=f.getBBox(),x=Oe(x+i/100*L.width),M=Oe(M+s/100*L.height)),L="matrix("+C+","+T+","+w+","+E+","+x+","+M+")",f.setAttribute("transform",L),v&&(f.style[Pe]=L)},p1=function(t,e,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ds:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*rp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*rp)%o-~~(c/o)*o)),t._pt=d=new bn(t._pt,e,n,i,c,ZA),d.e=h,d.u="deg",t._props.push(n),d},up=function(t,e){for(var n in e)t[n]=e[n];return t},m1=function(t,e,n){var i=up({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=ia(n,1),$s(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=ia(n,1),o[Pe]=c);for(l in Yi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=cn(c),g=cn(h),u=f!==g?gs(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new bn(t._pt,a,l,u,d-u,nu),t._pt.u=g||0,t._props.push(l));up(a,i)};Sn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Tl[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return zi(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var $g={name:"css",register:su,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,p,m,v,x,M,C,T,w,E;cd||su(),this.styles=this.styles||Vg(t),E=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Nn[_]&&Lg(_,e,n,i,t,s)))){if(f=typeof h,g=Tl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Qo(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ps.lastIndex=0,ps.test(c)||(p=cn(c),m=cn(h)),m?p!==m&&(c=gs(t,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),E.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],nn(c)&&~c.indexOf("random(")&&(c=Qo(c)),cn(c+"")||c==="auto"||(c+=Bn.units[_]||cn(zi(t,_))||""),(c+"").charAt(1)==="="&&(c=zi(t,_))):c=zi(t,_),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in xi&&(_==="autoAlpha"&&(d===1&&zi(t,"visibility")==="hidden"&&u&&(d=0),E.push("visibility",0,a.visibility),us(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Yi,x){if(this.styles.save(_),M||(C=t._gsap,C.renderTransform&&!e.parseTransform||ia(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,M=this._pt=new bn(this._pt,a,Pe,0,1,C.renderTransform,C,0,-1),M.dep=1),_==="scale")this._pt=new bn(this._pt,C,"scaleY",C.scaleY,(v?Cr(C.scaleY,v+u):u)-C.scaleY||0,nu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){E.push(wn,0,a[wn]),h=h1(h),C.svg?ru(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&us(this,C,"zOrigin",C.zOrigin,m),us(this,a,_,El(c),El(h)));continue}else if(_==="svgOrigin"){ru(t,h,1,T,0,this);continue}else if(_ in jg){p1(this,C,_,d,v?Cr(d,v+h):h);continue}else if(_==="smoothOrigin"){us(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){m1(this,h,t);continue}}else _ in a||(_=ao(_)||_);if(x||(u||u===0)&&(d||d===0)&&!KA.test(h)&&_ in a)p=(c+"").substr((d+"").length),u||(u=0),m=cn(h)||(_ in Bn.units?Bn.units[_]:p),p!==m&&(d=gs(t,_,c,m)),this._pt=new bn(this._pt,x?C:a,_,d,(v?Cr(d,v+u):u)-d,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?QA:nu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=JA);else if(_ in a)c1.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,s);else if(_!=="parseTransform"){td(_,h);continue}x||(_ in a?E.push(_,0,a[_]):E.push(_,1,c||t[_])),o.push(_)}}w&&Fg(this)},render:function(t,e){if(e.tween._time||!hd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zi,aliases:xi,getSetter:function(t,e,n){var i=xi[e];return i&&i.indexOf(",")<0&&(e=i),e in Yi&&e!==wn&&(t._gsap.x||zi(t,"x"))?n&&sp===n?e==="scale"?i1:n1:(sp=n||{})&&(e==="scale"?s1:r1):t.style&&!Zu(t.style[e])?t1:~e.indexOf("-")?e1:ad(t,e)},core:{_removeProperty:$s,_getMatrix:dd}};En.utils.checkPrefix=ao;En.core.getStyleSaver=Vg;(function(r,t,e,n){var i=Sn(r+","+t+","+e,function(s){Yi[s]=1});Sn(t,function(s){Bn.units[s]="deg",jg[s]=1}),xi[i[13]]=r+","+t,Sn(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});En.registerPlugin($g);var sa=En.registerPlugin($g)||En;sa.core.Tween;let g1=class extends Te{constructor(){super(...arguments);Z(this,"animations",[]);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 05] Animations"}get link(){return"https://threejs-journey.com/lessons/animations"}update(e){this.object3d.position.x=Math.sin(e/1e3),this.object3d.position.y=Math.cos(e/1e3)}init(){super.init();const e=new Xe(1,1,1),n=new De({color:255});this.object3d=new wt(e,n),this.scene.add(this.object3d),this.animations.push(sa.to(this.object3d.position,{z:-3,delay:1,duration:1})),this.animations.push(sa.to(this.object3d.position,{z:0,delay:2,duration:1}))}dispose(){super.dispose(),this.animations.forEach(e=>e.kill()),this.animations=[]}};var Or,Fr,Le,Kg,Zg,ou,Jg,Qg,t_,e_,n_,i_,s_,xp;let _1=(xp=class extends Te{constructor(){super(...arguments);jt(this,Le);Z(this,"hasAnimation",!0);jt(this,Or);jt(this,Fr)}get title(){return"[LESSON 06] Cameras"}get link(){return"https://threejs-journey.com/lessons/cameras"}update(){D(this,Le,Kg).call(this)}init(){super.init(),D(this,Le,Qg).call(this),D(this,Le,Jg).call(this)}dispose(){super.dispose(),D(this,Le,t_).call(this),D(this,Le,n_).call(this)}initControl(){D(this,Le,ou).call(this),D(this,Le,e_).call(this)}initOrthographicCamera(){const e=this.canvas.width/this.canvas.height;this.camera=new Ll(-e,e,1,-1),this.camera.position.z=3}},Or=new WeakMap,Fr=new WeakMap,Le=new WeakSet,Kg=function(){this.control.update(),this.camera.lookAt(this.object3d.position)},Zg=function(){this.control=new zm(this.camera,this.canvas),this.control.enableDamping=!0},ou=function(){function e(n,i){this.x=0,this.y=0,this.boundUpdateCoordinates=null,this.init=function(){this.boundUpdateCoordinates=this.updateCoordindates.bind(this),i.addEventListener("mousemove",this.boundUpdateCoordinates)},this.update=function(s=5){const o=2*Math.PI*this.x;n.position.x=Math.cos(o)*s,n.position.z=Math.sin(o)*s,n.position.y=this.y*s},this.updateCoordindates=function(s){this.x=s.offsetX/i.width-.5,this.y=(s.offsetY/i.height-.5)*-1},this.dispose=function(){i.removeEventListener("mousemove",this.boundUpdateCoordinates)}}this.control=new e(this.camera,this.canvas),this.control.init()},Jg=function(){const e=new Xe(1,1,1),n=new De({color:65280});this.object3d=new wt(e,n),this.scene.add(this.object3d)},Qg=function(){Je(this,Or,D(this,Le,s_).bind(this)),document.addEventListener("keydown",Xt(this,Or))},t_=function(){document.removeEventListener("keydown",Xt(this,Or))},e_=function(){Je(this,Fr,D(this,Le,i_).bind(this)),document.addEventListener("keydown",Xt(this,Fr))},n_=function(){document.removeEventListener("keydown",Xt(this,Fr))},i_=function(e){switch(e.code){case"KeyR":D(this,Le,Zg).call(this);break;case"KeyC":D(this,Le,ou).call(this);break}},s_=function(e){switch(e.code){case"KeyP":this.initCamera();break;case"KeyO":this.initOrthographicCamera();break}},xp);var Br,bi,r_,o_,a_,l_,vp;let x1=(vp=class extends Te{constructor(){super(...arguments);jt(this,bi);Z(this,"hasAnimation",!0);jt(this,Br)}get title(){return"[LESSON 07] Fullscreen and resizing"}get link(){return"https://threejs-journey.com/lessons/fullscreen-and-resizing"}update(){this.control.update()}init(){super.init(),D(this,bi,l_).call(this),D(this,bi,r_).call(this)}dispose(){super.dispose(),D(this,bi,o_).call(this)}},Br=new WeakMap,bi=new WeakSet,r_=function(){Je(this,Br,D(this,bi,a_).bind(this)),document.addEventListener("keydown",Xt(this,Br))},o_=function(){document.removeEventListener("keydown",Xt(this,Br))},a_=function(e){e.code==="KeyF"&&(document.fullscreenElement?document.exitFullscreen():this.canvas.requestFullscreen())},l_=function(){const e=new Xe(1,1,1),n=new De({color:16777215});this.object3d=new wt(e,n),this.scene.add(this.object3d)},vp);var _s,c_,h_,u_,yp;let v1=(yp=class extends Te{constructor(){super(...arguments);jt(this,_s);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 08] Geometries"}get link(){return"https://threejs-journey.com/lessons/geometries"}update(){this.control.update()}init(){super.init(),D(this,_s,c_).call(this)}},_s=new WeakSet,c_=function(){const e=new De({color:16777215,wireframe:!0});this.mesh=new wt(D(this,_s,h_).call(this),e),this.scene.add(this.mesh)},h_=function(){const e=new pe;return e.setAttribute("position",D(this,_s,u_).call(this)),e},u_=function(){const i=new Float32Array(450);for(let s=0;s<450;s++)i[s]=(Math.random()-.5)*2;return new Ae(i,3)},yp);var lo,d_,f_,Mp;let y1=(Mp=class extends Te{constructor(){super(...arguments);jt(this,lo);Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 09] Debug UI"}get link(){return"https://threejs-journey.com/lessons/debug-ui"}update(){this.control.update()}init(){super.init(),D(this,lo,f_).call(this),D(this,lo,d_).call(this)}},lo=new WeakSet,d_=function(){this.guiControl.add(this.mesh.position,"y").min(-2).max(2).step(.01).name("elevation"),this.guiControl.add(this.mesh,"visible"),this.guiControl.add(this.mesh.material,"wireframe"),this.guiControl.addColor({color:this.mesh.material.color.getHex()},"color").onChange(e=>{this.mesh.material.color.setHex(e)}),this.guiControl.add({spin:()=>{sa.to(this.mesh.rotation,{y:this.mesh.rotation.y+Math.PI*2})}},"spin"),this.guiControl.add({subdivisions:1},"subdivisions").min(1).max(20).step(1).onFinishChange(e=>{this.mesh.geometry.dispose(),this.mesh.geometry=new Xe(1,1,1,e,e,e)})},f_=function(){const e=new Xe(1,1,1),n=new De({color:14253554,wireframe:!0});this.mesh=new wt(e,n),this.scene.add(this.mesh)},Mp);var xs,p_,m_,g_,Sp;let M1=(Sp=class extends Te{constructor(){super(...arguments);jt(this,xs);Z(this,"loaderManager");Z(this,"textureLoader");Z(this,"doorMapTexture");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 10] Textures"}get link(){return"https://threejs-journey.com/lessons/textures"}update(){this.control.update()}init(){super.init(),D(this,xs,p_).call(this),D(this,xs,m_).call(this),D(this,xs,g_).call(this)}},xs=new WeakSet,p_=function(){this.loaderManager=new Um,this.textureLoader=new Qn(this.loaderManager),this.texture=this.textureLoader.load("/three.js-journey/media/images/textures/door/color.jpg"),this.texture.colorSpace=se},m_=function(){const e=new Xe(1,1,1),n=new De({map:this.texture});this.mesh=new wt(e,n),this.scene.add(this.mesh)},g_=function(){this.guiControl.add(this.texture.repeat,"x").min(1).max(5).step(.01).name("Texture x"),this.guiControl.add(this.texture.repeat,"y").min(1).max(5).step(.01).name("Texture y"),this.guiControl.add({offset:0},"offset").min(0).max(1).step(.01).name("Texture offset").onChange(e=>{this.texture.offset.x=e,this.texture.offset.y=e}),this.guiControl.add({rotation:0},"rotation").min(0).max(2*Math.PI).step(.01).onChange(e=>{this.texture.center.x=.5,this.texture.center.y=.5,this.texture.rotation=e}),this.guiControl.add({addXRepeat:()=>{this.texture.wrapS=xe,this.texture.needsUpdate=!0}},"addXRepeat").name("Repeat texture in X"),this.guiControl.add({addYRepeat:()=>{this.texture.wrapT=xe,this.texture.needsUpdate=!0}},"addYRepeat").name("Repeat texture in Y"),this.guiControl.add({updateMinFilterToLinearFilter:()=>{this.texture.minFilter=oi,this.texture.generateMipmaps=!0,this.texture.needsUpdate=!0}},"updateMinFilterToLinearFilter").name("Update min filter to linear filter"),this.guiControl.add({updateMinFilterToNearestFilter:()=>{this.texture.minFilter=We,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0}},"updateMinFilterToNearestFilter").name("Update min filter to nearest filter"),this.guiControl.add({updateMagFilterToLinearFilter:()=>{this.texture.magFilter=qe,this.texture.needsUpdate=!0}},"updateMagFilterToLinearFilter").name("Update mag filter to linear filter"),this.guiControl.add({updateMagFilterToNearestFilter:()=>{this.texture.magFilter=We,this.texture.needsUpdate=!0}},"updateMagFilterToNearestFilter").name("Update mag filter to nearest filter")},Sp);class __ extends tE{constructor(t){super(t),this.type=_i}parse(t){const o=function(E,L){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(L||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(L||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(L||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(L||""))}},h=`
`,u=function(E,L,y){L=L||1024;let F=E.pos,U=-1,O=0,W="",N=String.fromCharCode.apply(null,new Uint16Array(E.subarray(F,F+128)));for(;0>(U=N.indexOf(h))&&O<L&&F<E.byteLength;)W+=N,O+=N.length,F+=128,N+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(F,F+128)));return-1<U?(E.pos+=O+U+1,W+N.slice(0,U)):!1},d=function(E){const L=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let W,N;for((E.pos>=E.byteLength||!(W=u(E)))&&o(1,"no header found"),(N=W.match(L))||o(3,"bad initial token"),O.valid|=1,O.programtype=N[1],O.string+=W+`
`;W=u(E),W!==!1;){if(O.string+=W+`
`,W.charAt(0)==="#"){O.comments+=W+`
`;continue}if((N=W.match(y))&&(O.gamma=parseFloat(N[1])),(N=W.match(S))&&(O.exposure=parseFloat(N[1])),(N=W.match(F))&&(O.valid|=2,O.format=N[1]),(N=W.match(U))&&(O.valid|=4,O.height=parseInt(N[1],10),O.width=parseInt(N[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},f=function(E,L,y){const S=L;if(S<8||S>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);S!==(E[2]<<8|E[3])&&o(3,"wrong scanline width");const F=new Uint8Array(4*L*y);F.length||o(4,"unable to allocate buffer space");let U=0,O=0;const W=4*S,N=new Uint8Array(4),q=new Uint8Array(W);let X=y;for(;X>0&&O<E.byteLength;){O+4>E.byteLength&&o(1),N[0]=E[O++],N[1]=E[O++],N[2]=E[O++],N[3]=E[O++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=S)&&o(3,"bad rgbe scanline format");let at=0,rt;for(;at<W&&O<E.byteLength;){rt=E[O++];const It=rt>128;if(It&&(rt-=128),(rt===0||at+rt>W)&&o(3,"bad scanline data"),It){const Bt=E[O++];for(let j=0;j<rt;j++)q[at++]=Bt}else q.set(E.subarray(O,O+rt),at),at+=rt,O+=rt}const ut=S;for(let It=0;It<ut;It++){let Bt=0;F[U]=q[It+Bt],Bt+=S,F[U+1]=q[It+Bt],Bt+=S,F[U+2]=q[It+Bt],Bt+=S,F[U+3]=q[It+Bt],U+=4}X--}return F},g=function(E,L,y,S){const F=E[L+3],U=Math.pow(2,F-128)/255;y[S+0]=E[L+0]*U,y[S+1]=E[L+1]*U,y[S+2]=E[L+2]*U,y[S+3]=1},_=function(E,L,y,S){const F=E[L+3],U=Math.pow(2,F-128)/255;y[S+0]=va.toHalfFloat(Math.min(E[L+0]*U,65504)),y[S+1]=va.toHalfFloat(Math.min(E[L+1]*U,65504)),y[S+2]=va.toHalfFloat(Math.min(E[L+2]*U,65504)),y[S+3]=va.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;const m=d(p),v=m.width,x=m.height,M=f(p.subarray(p.pos),v,x);let C,T,w;switch(this.type){case yn:w=M.length/4;const E=new Float32Array(w*4);for(let y=0;y<w;y++)g(M,y*4,E,y*4);C=E,T=yn;break;case _i:w=M.length/4;const L=new Uint16Array(w*4);for(let y=0;y<w;y++)_(M,y*4,L,y*4);C=L,T=_i;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:x,data:C,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T}}setDataType(t){return this.type=t,this}load(t,e,n,i){function s(o,a){switch(o.type){case yn:case _i:o.colorSpace=$e,o.minFilter=qe,o.magFilter=qe,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,s,n,i)}}var fn,x_,v_,y_,M_,S_,b_,w_,bp;let S1=(bp=class extends Te{constructor(){super(...arguments);jt(this,fn);Z(this,"plane");Z(this,"torus");Z(this,"sphere");Z(this,"doorColorTexture");Z(this,"doorAlphaTexture");Z(this,"doorAmbientOcclusionTexture");Z(this,"doorHeightTexture");Z(this,"doorMetalnessTexture");Z(this,"doorRoughnessTexture");Z(this,"doorNormalTexture");Z(this,"matcapTexture");Z(this,"gradientTexture");Z(this,"material");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 11] Materials"}get link(){return"https://threejs-journey.com/lessons/materials"}update(e){this.control.update(),this.plane.rotation.x=1e-4*e,this.plane.rotation.y=1e-4*e,this.sphere.rotation.x=1e-4*e,this.sphere.rotation.y=1e-4*e,this.torus.rotation.x=1e-4*e,this.torus.rotation.y=1e-4*e}init(){super.init(),D(this,fn,M_).call(this),D(this,fn,v_).call(this),D(this,fn,y_).call(this),D(this,fn,w_).call(this),D(this,fn,b_).call(this),D(this,fn,S_).call(this),D(this,fn,x_).call(this),this.sphere.position.x=-2,this.torus.position.x=2}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.torus=null}},fn=new WeakSet,x_=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoat").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoatRoughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheen").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheenRoughness").min(0).max(1).step(.001),this.guiControl.addColor(this.material,"sheenColor"),this.guiControl.add(this.material,"iridescence").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"iridescenceIOR").min(1).max(2.333).step(1e-4),this.guiControl.add(this.material.iridescenceThicknessRange,"0").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 0"),this.guiControl.add(this.material.iridescenceThicknessRange,"1").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 1"),this.guiControl.add(this.material,"transmission").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"ior").min(1).max(10).step(1e-4),this.guiControl.add(this.material,"thickness").min(0).max(1).step(1e-4)},v_=function(){const e=new Qn;this.doorColorTexture=e.load("/three.js-journey/media/images/textures/door/color.jpg"),this.doorAlphaTexture=e.load("/three.js-journey/media/images/textures/door/alpha.jpg"),this.doorAmbientOcclusionTexture=e.load("/three.js-journey/media/images/textures/door/ambientOcclusion.jpg"),this.doorHeightTexture=e.load("/three.js-journey/media/images/textures/door/height.jpg"),this.doorMetalnessTexture=e.load("/three.js-journey/media/images/textures/door/metalness.jpg"),this.doorRoughnessTexture=e.load("/three.js-journey/media/images/textures/door/roughness.jpg"),this.doorNormalTexture=e.load("/three.js-journey/media/images/textures/door/normal.jpg"),this.doorColorTexture.colorSpace=se,this.matcapTexture=e.load("/three.js-journey/media/images/textures/matcaps/7.png"),this.gradientTexture=e.load("/three.js-journey/media/images/textures/gradients/3.jpg"),this.gradientTexture.generateMipmaps=!1,this.gradientTexture.minFilter=We,this.gradientTexture.magFilter=We},y_=function(){this.material=new ci,this.material.side=Xn,this.material.transparent=!0,this.material.alphaMap=this.doorAlphaTexture},M_=function(){new __().load("/three.js-journey/media/images/environmentMap/2k.hdr",n=>{n.mapping=Yr,this.scene.background=n,this.scene.environment=n})},S_=function(){const e=new Ks(.5,.2,64,28);this.torus=new wt(e,this.material),this.scene.add(this.torus)},b_=function(){const e=new Ki(.5,64,64);this.sphere=new wt(e,this.material),this.scene.add(this.sphere)},w_=function(){const e=new rn(1,1,100,100);this.plane=new wt(e,this.material),this.scene.add(this.plane)},bp);class b1 extends Ri{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new no(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new w1(t)}}class w1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=T1(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function T1(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=E1(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function E1(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new EE;let a,l,c,h,u,d,f,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=_.length;p<m;)switch(_[p++]){case"m":a=_[p++]*t+e,l=_[p++]*t+n,o.moveTo(a,l);break;case"l":a=_[p++]*t+e,l=_[p++]*t+n,o.lineTo(a,l);break;case"q":c=_[p++]*t+e,h=_[p++]*t+n,u=_[p++]*t+e,d=_[p++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=_[p++]*t+e,h=_[p++]*t+n,u=_[p++]*t+e,d=_[p++]*t+n,f=_[p++]*t+e,g=_[p++]*t+n,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:s.ha*t,path:o}}class A1 extends Vu{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}var wi,T_,E_,A_,C_,wp;let C1=(wp=class extends Te{constructor(){super(...arguments);jt(this,wi);Z(this,"material");Z(this,"hasAnimation",!0)}get title(){return"[LESSON 12] 3D Text"}get link(){return"https://threejs-journey.com/lessons/3d-text"}update(){this.control.update()}init(){super.init(),D(this,wi,E_).call(this),D(this,wi,A_).call(this),D(this,wi,T_).call(this)}dispose(){super.dispose(),this.material=null}},wi=new WeakSet,T_=function(){this.camera.position.z=2,this.camera.position.y=1,this.camera.position.x=1},E_=function(){const n=new Qn().load("/three.js-journey/media/images/textures/matcaps/1.png");n.colorSpace=se,this.material=new WT({matcap:n})},A_=function(){new b1().load("/three.js-journey/media/fonts/helvetiker_regular.typeface.json",n=>{const i=new A1("Three.js rocks!",{font:n,size:.3,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),this.mesh=new wt(i,this.material),this.scene.add(this.mesh),D(this,wi,C_).call(this,i.boundingBox)})},C_=function(e){const n=new Ks(.2,.1,20,45),i=e.max.x-e.min.x,s=e.max.y-e.min.y,o=e.max.z-e.min.z,a=5;for(let l=0;l<100;l++){const c=new wt(n,this.material);c.position.x=(i+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.y=(s+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.z=(o+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.rotation.x=Math.random()*Math.PI,c.rotation.y=Math.random()*Math.PI;const h=Math.random()*2;c.scale.set(h,h,h),this.scene.add(c)}},wp);class R1 extends Jr{constructor(t,e){const n=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],i=new pe;i.setAttribute("position",new Jt(n,3)),i.computeBoundingSphere();const s=new uo({fog:!1});super(i,s),this.light=t,this.color=e,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new pe;a.setAttribute("position",new Jt(o,3)),a.computeBoundingSphere(),this.add(new wt(a,new De({side:hn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const t=this.material.color,e=Math.max(t.r,t.g,t.b);e>1&&t.multiplyScalar(1/e),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var Ft,R_,P_,L_,I_,D_,N_,U_,O_,F_,B_,k_,z_,Ns,au,ui,Tp;let P1=(Tp=class extends Te{constructor(){super(...arguments);jt(this,Ft);Z(this,"material");Z(this,"plane");Z(this,"box");Z(this,"sphere");Z(this,"torus");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 14] Lights"}get link(){return"https://threejs-journey.com/lessons/lights"}update(e){this.control.update(),this.box.rotation.x=1e-4*e,this.box.rotation.y=1e-4*e,this.sphere.rotation.x=1e-4*e,this.sphere.rotation.y=1e-4*e,this.torus.rotation.x=1e-4*e,this.torus.rotation.y=1e-4*e}init(){super.init(),D(this,Ft,U_).call(this),D(this,Ft,O_).call(this),D(this,Ft,F_).call(this),D(this,Ft,B_).call(this),D(this,Ft,k_).call(this),D(this,Ft,z_).call(this),D(this,Ft,N_).call(this),D(this,Ft,D_).call(this),D(this,Ft,I_).call(this),D(this,Ft,L_).call(this),D(this,Ft,P_).call(this),D(this,Ft,R_).call(this)}dispose(){super.dispose(),this.plane=null,this.box=null,this.sphere=null,this.torus=null}},Ft=new WeakSet,R_=function(){const e=new Xu(16716032,1,0,Math.PI*.1,.25,1);e.position.z=-3,e.position.x=-2,e.target.position.x=-3,this.scene.add(e),this.scene.add(e.target);const n=D(this,Ft,Ns).call(this,e,"Spot Light");D(this,Ft,ui).call(this,n,e,"distance"),D(this,Ft,ui).call(this,n,e,"angle"),D(this,Ft,ui).call(this,n,e,"penumbra"),D(this,Ft,ui).call(this,n,e,"decay");const i=new yE(e);this.scene.add(i)},P_=function(){const e=new rE(65280,1,2.5,2.5);e.position.x=-2,e.position.z=2,e.lookAt(this.box.position),this.scene.add(e);const n=D(this,Ft,Ns).call(this,e,"Rect Area Light");D(this,Ft,ui).call(this,n,e,"width"),D(this,Ft,ui).call(this,n,e,"height");const i=new R1(e);this.scene.add(i)},L_=function(){const e=new Bs(15602090,1,0,2);e.position.x=2,e.position.z=2,this.scene.add(e);const n=D(this,Ft,Ns).call(this,e,"Point Light");D(this,Ft,ui).call(this,n,e,"distance"),D(this,Ft,ui).call(this,n,e,"decay");const i=new ME(e,.2);this.scene.add(i)},I_=function(){const e=new eE(16711680,255,.5);this.scene.add(e);const n=D(this,Ft,Ns).call(this,e,"Hemisphere Light");D(this,Ft,au).call(this,n,e,"groundColor");const i=new bE(e,.2);this.scene.add(i)},D_=function(){const e=new hi(65532,.9);e.position.set(5,1,0),this.scene.add(e),D(this,Ft,Ns).call(this,e,"Directional Light");const n=new wE(e,.2);this.scene.add(n)},N_=function(){const e=new Zs(16777215,.5);this.scene.add(e),D(this,Ft,Ns).call(this,e,"Ambient Light")},U_=function(){this.material=new Ge,this.material.roughness=.5},O_=function(){const e=new rn(10,10);this.plane=new wt(e,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-2,this.scene.add(this.plane)},F_=function(){const e=new Xe(1,1,1);this.box=new wt(e,this.material),this.scene.add(this.box)},B_=function(){const e=new Ki(1);this.sphere=new wt(e,this.material),this.sphere.position.x=2,this.scene.add(this.sphere)},k_=function(){const e=new Ks(.7,.3);this.torus=new wt(e,this.material),this.torus.position.x=-2,this.scene.add(this.torus)},z_=function(){this.camera.position.z=5},Ns=function(e,n){const i=this.guiControl.addFolder(n);return D(this,Ft,ui).call(this,i,e,"intensity"),D(this,Ft,au).call(this,i,e,"color"),i},au=function(e,n,i){e.addColor({color:n[i].getHex()},"color").onChange(s=>{n[i].setHex(s)})},ui=function(e,n,i){e.add(n,i).min(0).max(5).step(.01)},Tp);var Fe,H_,V_,G_,W_,X_,j_,Y_,Do,Ep;let L1=(Ep=class extends Te{constructor(){super(...arguments);jt(this,Fe);Z(this,"plane");Z(this,"sphere");Z(this,"sphereShadow");Z(this,"material");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 15] Shadows"}get link(){return"https://threejs-journey.com/lessons/shadows"}update(e){this.control.update();const n=1.5;this.sphere.position.x=Math.cos(e/1e3)*n,this.sphere.position.z=Math.sin(e/1e3)*n,this.sphere.position.y=Math.abs(Math.sin(e/1e3)),this.sphereShadow.position.x=this.sphere.position.x,this.sphereShadow.position.z=this.sphere.position.z,this.sphereShadow.material.opacity=(1-this.sphere.position.y)*.3;const i=this.sphere.position.y*1.5;this.sphereShadow.scale.set(i,i,i)}init(){super.init(),D(this,Fe,V_).call(this),D(this,Fe,G_).call(this),D(this,Fe,X_).call(this),D(this,Fe,W_).call(this),D(this,Fe,j_).call(this),D(this,Fe,H_).call(this)}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.sphereShadow=null,this.material=null}},Fe=new WeakSet,H_=function(){this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=qi},V_=function(){this.material=new Ge,D(this,Fe,Y_).call(this)},G_=function(){const e=new Ki(.5);this.sphere=new wt(e,this.material),this.sphere.castShadow=!0,this.sphere.receiveShadow=!1,this.scene.add(this.sphere)},W_=function(){const n=new Qn().load("/three.js-journey/media/images/textures/shadows/simple.jpg");n.colorSpace=se;const i=new rn(1,1),s=new De({color:0,transparent:!0,alphaMap:n});this.sphereShadow=new wt(i,s),this.sphereShadow.rotation.x=-Math.PI/2,this.sphereShadow.position.y=this.plane.position.y+.001,this.scene.add(this.sphereShadow)},X_=function(){const e=new rn(5,5);this.plane=new wt(e,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-.5,this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.scene.add(this.plane)},j_=function(){const e=new Zs(16777215,2);this.scene.add(e),D(this,Fe,Do).call(this,e,"Ambient Light");const n=new hi(16777215,1);n.position.x=3,n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=1,n.shadow.camera.far=6,n.shadow.camera.top=1,n.shadow.camera.bottom=-1,n.shadow.camera.right=1,n.shadow.camera.left=-1,this.scene.add(n),D(this,Fe,Do).call(this,n,"Directional Light");const i=new Xu(16777215,1,0,Math.PI*.1);i.position.x=1,i.position.z=1,i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,i.shadow.camera.near=1,i.shadow.camera.far=5,i.visible=!1,this.scene.add(i),this.scene.add(i.target),D(this,Fe,Do).call(this,i,"Spot Light"),this.guiControl.add(i,"visible").name("Enable Spotlight");const s=new Bs(16777215,1);s.position.x=1,s.position.z=-1,s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=.1,s.shadow.camera.far=4,s.visible=!1,this.scene.add(s),D(this,Fe,Do).call(this,s,"Point Light"),this.guiControl.add(s,"visible").name("Enable Point Light")},Y_=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001)},Do=function(e,n){this.guiControl.addFolder(n).add(e,"intensity").min(0).max(5).step(.001)},Ep);class zl extends wt{constructor(){const t=zl.SkyShader,e=new li({name:t.name,uniforms:pm.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:hn,depthWrite:!1});super(new Xe(1,1,1),e),this.isSky=!0}}zl.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};const I1="/three.js-journey/assets/alpha-oYUXAV8U.webp",D1="/three.js-journey/assets/arm-rmC2KtbT.webp",N1="/three.js-journey/assets/diffuse-BiGrMCC3.webp",U1="/three.js-journey/assets/displacement-CKqTQH1-.webp",O1="/three.js-journey/assets/normal-Cn3WmhCd.webp",F1="/three.js-journey/assets/arm-DyzoCEM3.webp",B1="/three.js-journey/assets/diffuse-3lwd3U-t.webp",k1="/three.js-journey/assets/normal-iYA-jasx.webp",z1="/three.js-journey/assets/arm-WvlYQgg6.webp",H1="/three.js-journey/assets/diffuse-Ca4I2Dwk.webp",V1="/three.js-journey/assets/normal-CEkQghNg.webp",G1="/three.js-journey/assets/arm-CIirWEzm.webp",W1="/three.js-journey/assets/diffuse-Bt2KqQCc.webp",X1="/three.js-journey/assets/normal-CzXVEdvu.webp",j1="/three.js-journey/assets/arm-BpdijVEA.webp",Y1="/three.js-journey/assets/diffuse-BtOV6iYR.webp",q1="/three.js-journey/assets/normal-B1F88-Fh.webp",$1="/three.js-journey/assets/alpha-C_QdxHjX.webp",K1="/three.js-journey/assets/normal-CnTtXT1a.webp",Z1="/three.js-journey/assets/ambientOcclusion-DWqpmaJh.webp",J1="/three.js-journey/assets/color-D6TT9ASI.webp",Q1="/three.js-journey/assets/height-vbXR4p20.webp",tC="/three.js-journey/assets/metalness-DWD7jlG_.webp",eC="/three.js-journey/assets/roughness-Cy_48OtR.webp";var Yt,q_,$_,K_,Z_,sl,J_,rl,Q_,t0,e0,n0,i0,s0,lu,Us,Ap;let nC=(Ap=class extends Te{constructor(){super(...arguments);jt(this,Yt);Z(this,"ghostViolet");Z(this,"ghostPink");Z(this,"ghostRed");Z(this,"textureLoader");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 16] Haunted House"}get link(){return"https://threejs-journey.com/lessons/haunted-house"}update(e){const n=e*.001;this.control.update(),D(this,Yt,sl).call(this,this.ghostViolet,n*.5,4,2.34,3.45),D(this,Yt,sl).call(this,this.ghostPink,-n*.38,5,2.34,3.45),D(this,Yt,sl).call(this,this.ghostRed,n*.23,6,2.34,3.45)}init(){super.init(),D(this,Yt,s0).call(this),D(this,Yt,e0).call(this),D(this,Yt,n0).call(this),D(this,Yt,i0).call(this),D(this,Yt,Z_).call(this),D(this,Yt,$_).call(this),D(this,Yt,K_).call(this),D(this,Yt,q_).call(this)}dispose(){super.dispose(),this.textureLoader=null,this.ghostViolet=null,this.ghostPink=null,this.ghostRed=null}},Yt=new WeakSet,q_=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi},$_=function(){const e=new zl;e.material.uniforms.turbidity.value=10,e.material.uniforms.rayleigh.value=3,e.material.uniforms.mieCoefficient.value=.1,e.material.uniforms.mieDirectionalG.value=.95,e.material.uniforms.sunPosition.value.set(.3,-.038,-.95),e.scale.set(100,100,100),this.scene.add(e)},K_=function(){const e=new Iu("#04343f",.1);this.scene.fog=e},Z_=function(){const e=new ai,n=this.textureLoader.load(F1),i=this.textureLoader.load(k1),s=this.textureLoader.load(B1);s.colorSpace=se;const o=new wt(new Xe(4,3,4),new Ge({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}));o.position.y=o.geometry.parameters.height*.5,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const a=this.textureLoader.load(z1),l=this.textureLoader.load(V1),c=this.textureLoader.load(H1);c.colorSpace=se,a.repeat.set(3,1),l.repeat.set(3,1),c.repeat.set(3,1),a.wrapS=xe,l.wrapS=xe,c.wrapS=xe;const h=new wt(new Nl(o.geometry.parameters.width,2,4),new Ge({map:c,normalMap:l,roughnessMap:a,metalnessMap:a,aoMap:a}));h.position.y=o.geometry.parameters.height+h.geometry.parameters.height*.5,h.rotation.y=Math.PI*.25,h.castShadow=!0,e.add(h);const u=this.textureLoader.load($1),d=this.textureLoader.load(Z1),f=this.textureLoader.load(Q1),g=this.textureLoader.load(tC),_=this.textureLoader.load(eC),p=this.textureLoader.load(K1),m=this.textureLoader.load(J1);m.colorSpace=se;const v=new wt(new rn(1.5,2.3,100,100),new Ge({transparent:!0,map:m,alphaMap:u,aoMap:d,metalnessMap:g,roughnessMap:_,normalMap:p,displacementMap:f,displacementScale:.15,displacementBias:-.04}));v.position.y=v.geometry.parameters.height*.5,v.position.z=o.geometry.parameters.depth*.5+.01,e.add(v);const x=new Bs("#ff7d46",5);x.position.z=o.geometry.parameters.depth*.5+.1,x.position.y=v.geometry.parameters.height+.1,e.add(x),D(this,Yt,t0).call(this,v.position.z,v.geometry.parameters.width),D(this,Yt,Q_).call(this,o.geometry.parameters.width),D(this,Yt,J_).call(this),this.scene.add(e)},sl=function(e,n,i,s,o){const a=n;e.position.x=Math.cos(a)*i,e.position.z=Math.sin(a)*i,e.position.y=Math.sin(a)*Math.sin(a*s)*Math.sin(a*o)},J_=function(){this.ghostViolet=new Bs("#8800ff",6),this.ghostPink=new Bs("#ff0088",6),this.ghostRed=new Bs("#ff0000",6),D(this,Yt,rl).call(this,this.ghostViolet),D(this,Yt,rl).call(this,this.ghostPink),D(this,Yt,rl).call(this,this.ghostRed),this.scene.add(this.ghostViolet,this.ghostPink,this.ghostRed)},rl=function(e){e.castShadow=!0,e.shadow.mapSize.width=256,e.shadow.mapSize.height=256,e.shadow.camera.far=10},Q_=function(e){const n=this.textureLoader.load(j1),i=this.textureLoader.load(q1),s=this.textureLoader.load(Y1);s.colorSpace=se,s.repeat.set(.3,.4),i.repeat.set(.3,.4),n.repeat.set(.3,.4);const o=new Xe(.6,1,.3),a=new Ge({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}),l=new ai;for(let c=0;c<30;c++){const h=new wt(o,a),u=Math.random()*2*Math.PI,d=e*.5+1.5+Math.random()*4;h.position.y=h.geometry.parameters.height*.5-Math.random()*.4,h.position.x=Math.cos(u)*d,h.position.z=Math.sin(u)*d,h.rotation.x=(Math.random()-.5)*.4,h.rotation.y=(Math.random()-.5)*.4,h.rotation.z=(Math.random()-.5)*.4,h.castShadow=!0,h.receiveShadow=!0,l.add(h)}this.scene.add(l)},t0=function(e,n){const i=this.textureLoader.load(G1),s=this.textureLoader.load(X1),o=this.textureLoader.load(W1);o.colorSpace=se,o.repeat.set(2,1),s.repeat.set(2,1),i.repeat.set(2,1),o.wrapS=xe,s.wrapS=xe,i.wrapS=xe;const a=new Ki(.5),l=new Ge({map:o,normalMap:s,roughnessMap:i,metalnessMap:i,aoMap:i,color:"#ccffcc"}),c=n*.5-.1,h=a.parameters.radius-.3,u=e+a.parameters.radius-.3,d=new wt(a,l);d.position.x=c,d.position.y=h,d.position.z=u,d.rotation.x=-.75,this.scene.add(d),D(this,Yt,Us).call(this,d,"Bush 1");const f=new wt(a,l);f.position.x=-c,f.position.y=h,f.position.z=u,f.scale.set(.8,.8,.8),f.rotation.x=-.75,this.scene.add(f),D(this,Yt,Us).call(this,f,"Bush 2");const g=new wt(a,l),_=.6;g.position.x=c+.6,g.position.z=u,g.scale.set(_,_,_),g.position.y=h*_,g.rotation.x=-.75,this.scene.add(g),D(this,Yt,Us).call(this,g,"Bush 3")},e0=function(){this.camera.position.y=5,this.camera.position.x=5,this.camera.position.z=7,D(this,Yt,Us).call(this,this.camera,"Camera")},n0=function(){const e=new Zs("#86cdff",.275);D(this,Yt,lu).call(this,e,"Ambient Light"),this.scene.add(e);const n=new hi("#86cdff",1);n.position.x=1,n.position.y=3,n.position.z=-5,n.castShadow=!0,n.shadow.mapSize.width=256,n.shadow.mapSize.height=256,n.shadow.camera.top=8,n.shadow.camera.bottom=-8,n.shadow.camera.right=8,n.shadow.camera.left=-8,n.shadow.camera.near=1,n.shadow.camera.far=20,D(this,Yt,lu).call(this,n,"Directional Light"),this.scene.add(n)},i0=function(){const e=this.textureLoader.load(I1),n=this.textureLoader.load(N1),i=this.textureLoader.load(D1),s=this.textureLoader.load(O1),o=this.textureLoader.load(U1);n.colorSpace=se,n.repeat.set(8,8),i.repeat.set(8,8),s.repeat.set(8,8),o.repeat.set(8,8),n.wrapS=xe,i.wrapS=xe,s.wrapS=xe,o.wrapS=xe,n.wrapT=xe,i.wrapT=xe,s.wrapT=xe,o.wrapT=xe;const a=new wt(new rn(20,20,100,100),new Ge({transparent:!0,alphaMap:e,map:n,roughnessMap:i,metalnessMap:i,aoMap:i,normalMap:s,displacementMap:o,displacementScale:.3,displacementBias:-.2}));a.rotation.x=-Math.PI*.5,a.receiveShadow=!0,D(this,Yt,Us).call(this,a,"Floor"),this.scene.add(a)},s0=function(){this.textureLoader=new Qn},lu=function(e,n){const i=D(this,Yt,Us).call(this,e,n);return i.add(e,"intensity").min(0).max(10).step(.01),i.addColor({color:e.color.getHex()},"color").onChange(s=>{e.color.setHex(s)}),i},Us=function(e,n){const i=this.guiControl.addFolder(n);return i.add(e.position,"x").min(-8).max(8).step(.01),i.add(e.position,"y").min(-8).max(8).step(.01),i.add(e.position,"z").min(-8).max(8).step(.01),i},Ap);var Al,r0,Cp;let iC=(Cp=class extends Te{constructor(){super(...arguments);jt(this,Al);Z(this,"particles");Z(this,"hasAnimation",!0)}get title(){return"[LESSON 17] Particles"}get link(){return"https://threejs-journey.com/lessons/particles"}update(e){this.control.update();const n=this.particles.geometry.attributes.position;for(let i=0;i<n.array.length;i+=3)n.array[i+1]=Math.sin(e*.001+n.array[i]);n.needsUpdate=!0}init(){super.init(),D(this,Al,r0).call(this)}dispose(){super.dispose(),this.particles=null}},Al=new WeakSet,r0=function(){const i=new pe,s=new Float32Array(3e3),o=new Float32Array(3e3);for(let h=0;h<s.length;h++)s[h]=(Math.random()-.5)*5,o[h]=Math.random();i.setAttribute("position",new Ae(s,3)),i.setAttribute("color",new Ae(o,3));const l=new Qn().load("/three.js-journey/media/images/textures/particles/2.png"),c=new oa({size:.1,sizeAttenuation:!0,transparent:!0,alphaMap:l});c.depthWrite=!1,c.blending=hl,c.vertexColors=!0,this.particles=new Dl(i,c),this.scene.add(this.particles)},Cp);var ye,cu,hu,uu,o0,rs,du,a0,Rp;let sC=(Rp=class extends Te{constructor(){super(...arguments);jt(this,ye);Z(this,"galaxy");Z(this,"galaxyMaterial");Z(this,"galaxyGeometry");Z(this,"galaxyTweaks");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 18] Galaxy Generator"}get link(){return"https://threejs-journey.com/lessons/galaxy-generator"}update(e){this.control.update();const n=e*.001;this.galaxy.rotation.y=n*.2}init(){super.init(),D(this,ye,a0).call(this),D(this,ye,o0).call(this),D(this,ye,hu).call(this)}dispose(){D(this,ye,uu).call(this),super.dispose()}},ye=new WeakSet,cu=function(){D(this,ye,uu).call(this),D(this,ye,hu).call(this)},hu=function(){this.galaxyGeometry=new pe;const e=this.galaxyTweaks.particles*3,n=new Float32Array(e),i=new Float32Array(e),s=new Rt(this.galaxyTweaks.insideColor),o=new Rt(this.galaxyTweaks.outsideColor);for(let a=0;a<e;a+=3){const l=a/3,c=Math.random()*this.galaxyTweaks.radius,h=2*Math.PI*(l%this.galaxyTweaks.branches/this.galaxyTweaks.branches),u=this.galaxyTweaks.spin*c,d=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,f=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,g=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c;n[a]=Math.cos(h+u)*c+d,n[a+1]=f,n[a+2]=Math.sin(h+u)*c+g;const p=s.clone().lerp(o,c/this.galaxyTweaks.radius);i[a]=p.r,i[a+1]=p.g,i[a+2]=p.b}this.galaxyGeometry.setAttribute("position",new Ae(n,3)),this.galaxyGeometry.setAttribute("color",new Ae(i,3)),this.galaxyMaterial=new oa({size:this.galaxyTweaks.size,sizeAttenuation:!0,depthWrite:!1,blending:hl,vertexColors:!0}),this.galaxy=new Dl(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},uu=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},o0=function(){this.galaxyTweaks={particles:2e4,size:.01,radius:4,branches:7,spin:.7,offset:.3,gravityStrength:5,insideColor:"#ff6030",outsideColor:"#1b3984"},D(this,ye,rs).call(this,"particles",100,1e5,1),D(this,ye,rs).call(this,"size",.01,1,.01),D(this,ye,rs).call(this,"radius",1,20,.1),D(this,ye,rs).call(this,"branches",2,20,1),D(this,ye,rs).call(this,"spin",.2,20,.1),D(this,ye,rs).call(this,"offset",.1,20,.1),D(this,ye,rs).call(this,"gravityStrength",1,20,1),D(this,ye,du).call(this,"insideColor"),D(this,ye,du).call(this,"outsideColor")},rs=function(e,n,i,s){this.guiControl.add(this.galaxyTweaks,e).min(n).max(i).step(s).onFinishChange(D(this,ye,cu).bind(this))},du=function(e){this.guiControl.addColor(this.galaxyTweaks,e).onFinishChange(D(this,ye,cu).bind(this))},a0=function(){this.camera.position.x=3,this.camera.position.y=3,this.camera.position.z=5},Rp);class Hl{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Vc(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=rC.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=Vc()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(t){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:Vc())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vc(){return performance.now()}function rC(){document.hidden===!1&&this.reset()}const oC="/three.js-journey/assets/3-CO1hT6T5.jpg";var zs,kr,zr,ra,Hr,Vr,Ht,l0,c0,h0,ol,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,w0,T0,E0,Pp;let aC=(Pp=class extends Te{constructor(){super(...arguments);jt(this,Ht);Z(this,"particles");Z(this,"meshes",[]);Z(this,"material");Z(this,"cameraGroup");Z(this,"timer");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0);jt(this,zs,5);jt(this,kr,null);jt(this,zr,null);jt(this,ra,0);jt(this,Hr);jt(this,Vr)}get title(){return"[LESSON 19] Scroll based animation"}get link(){return"https://threejs-journey.com/lessons/scroll-based-animation"}update(e){this.timer.update(e);const n=this.timer.getDelta();for(const i of this.meshes)i.rotation.x+=n*.1,i.rotation.y+=n*.3;if(Xt(this,kr)&&Xt(this,zr)){const i=Xt(this,kr)-this.cameraGroup.position.x,s=Xt(this,zr)-this.cameraGroup.position.y;this.cameraGroup.position.x+=i*2*n,this.cameraGroup.position.y+=s*2*n}}open(){D(this,Ht,c0).call(this),D(this,Ht,ol).call(this,"My portfolio","start"),D(this,Ht,ol).call(this,"My projects","end"),D(this,Ht,ol).call(this,"Contact me","start"),super.open()}close(){D(this,Ht,u0).call(this),D(this,Ht,h0).call(this),super.close()}init(){super.init(),D(this,Ht,d0).call(this),D(this,Ht,l0).call(this),D(this,Ht,T0).call(this),D(this,Ht,w0).call(this),D(this,Ht,b0).call(this),D(this,Ht,M0).call(this),D(this,Ht,S0).call(this),D(this,Ht,E0).call(this),D(this,Ht,y0).call(this),D(this,Ht,_0).call(this),D(this,Ht,p0).call(this)}initCamera(){this.cameraGroup=new ai,this.camera=new ln(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.cameraGroup.add(this.camera),this.scene.add(this.cameraGroup)}dispose(){super.dispose(),D(this,Ht,x0).call(this),D(this,Ht,m0).call(this),D(this,Ht,f0).call(this),this.particles=null,this.meshes=[],this.cameraGroup=null,this.timer=null}},zs=new WeakMap,kr=new WeakMap,zr=new WeakMap,ra=new WeakMap,Hr=new WeakMap,Vr=new WeakMap,Ht=new WeakSet,l0=function(){this.renderer.setClearAlpha(0)},c0=function(){document.body.style.overflow="visible",document.body.style.backgroundColor="#1e1a20"},h0=function(){document.body.style.overflow="hidden",document.body.style.backgroundColor=null},ol=function(e,n){const i=document.createElement("section"),s=document.createElement("h2");s.textContent=e,i.className="section",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent=n,i.style.paddingLeft="8em",i.style.paddingRight="8em",i.style.fontSize="2rem",i.style.height="100vh",i.style.textTransform="uppercase",i.appendChild(s),document.body.appendChild(i)},u0=function(){document.querySelectorAll(".section").forEach(n=>n.remove())},d0=function(){this.control.dispose()},f0=function(){this.timer.dispose()},p0=function(){Je(this,Vr,D(this,Ht,g0).bind(this)),window.addEventListener("mousemove",Xt(this,Vr))},m0=function(){window.removeEventListener("mousemove",Xt(this,Vr))},g0=function(e){Je(this,kr,e.clientX/window.innerWidth-.5),Je(this,zr,-(e.clientY/window.innerHeight)-.5)},_0=function(){Je(this,Hr,D(this,Ht,v0).bind(this)),window.addEventListener("scroll",Xt(this,Hr))},x0=function(){window.removeEventListener("scroll",Xt(this,Hr))},v0=function(){const e=window.scrollY/window.innerHeight,n=Math.round(e);this.camera.position.y=-e*Xt(this,zs),Xt(this,ra)!==n&&(Je(this,ra,n),sa.to(this.meshes[n].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))},y0=function(){for(let e=0;e<this.meshes.length;e++)this.meshes[e].position.y=-Xt(this,zs)*e,this.meshes[e].position.x=1.5*Math.pow(-1,e%2)},M0=function(){const e=new wt(new Ks(.75,.3,16,60),this.material);e.geometry.name="Torus";const n=new wt(new Nl(.75,1.5,32),this.material);n.geometry.name="Cone";const i=new wt(new Ol(.8,.25,100,16),this.material);i.geometry.name="Torus Knot",this.meshes.push(e),this.meshes.push(n),this.meshes.push(i),this.scene.add(...this.meshes)},S0=function(){const n=new Float32Array(600);for(let s=0;s<n.length;s+=3)n[s]=(Math.random()-.5)*10,n[s+1]=Xt(this,zs)/2-Math.random()*Xt(this,zs)*this.meshes.length,n[s+2]=(Math.random()-.5)*10;const i=new pe;i.setAttribute("position",new Ae(n,3)),this.particles=new Dl(i,new oa({size:.02,sizeAttenuation:!0,color:this.material.color.getHex()})),this.scene.add(this.particles)},b0=function(){const n=new Qn().load(oC);n.magFilter=We,this.material=new GT({color:"#ffeded",gradientMap:n})},w0=function(){const e=new hi(16777215,3);e.position.set(4,2),this.scene.add(e)},T0=function(){this.timer=new Hl},E0=function(){this.guiControl.addColor({color:this.material.color.getHex()},"color").onChange(e=>{this.material.color.setHex(e),this.particles.material.color.setHex(e)});for(const e of this.meshes){const n=this.guiControl.addFolder(e.geometry.name);n.add(e.position,"y").min(-100).max(100).step(.01),n.add(e.position,"x").min(-100).max(100).step(.01)}},Pp);var Tn,al,ll,A0,C0;class lC{constructor(t){jt(this,Tn);Z(this,"meshes",{});Z(this,"instance");Z(this,"boxGeometry");Z(this,"sphereGeometry");Z(this,"planeGeometry");Z(this,"planeMaterial");Z(this,"meshMaterial");this.instance=t,D(this,Tn,A0).call(this),D(this,Tn,C0).call(this)}addBox(t,e,n,i,s){const o=new wt(this.boxGeometry,this.meshMaterial);o.scale.set(e,n,i),D(this,Tn,al).call(this,o,s),D(this,Tn,ll).call(this,t,o)}addSphere(t,e,n){const i=new wt(this.sphereGeometry,this.meshMaterial);D(this,Tn,al).call(this,i,n,e),D(this,Tn,ll).call(this,t,i)}addPlane(t,e){const n=new wt(this.planeGeometry,this.planeMaterial);n.rotation.x=-Math.PI/2,D(this,Tn,al).call(this,n,e,1),D(this,Tn,ll).call(this,t,n)}dispose(){for(const t in this.meshes)this.instance.remove(this.meshes[t])}}Tn=new WeakSet,al=function(t,e,n=null){t.castShadow=!0,t.receiveShadow=!0,t.position.copy(e),n&&t.scale.set(n,n,n)},ll=function(t,e){this.meshes[t]=e,this.instance.add(e)},A0=function(){this.sphereGeometry=new Ki(1),this.planeGeometry=new rn(8,8,8),this.boxGeometry=new Xe(1,1,1)},C0=function(){this.meshMaterial=new Ge({metalness:.3,roughness:.4}),this.planeMaterial=new Ge({color:7829367,metalness:.3,roughness:.4})};const cC="/three.js-journey/assets/nx-B1qAN98K.png",hC="/three.js-journey/assets/ny-C02qeYUz.png",uC="/three.js-journey/assets/nz-EWNLxSEp.png",dC="/three.js-journey/assets/px-BQkunSVR.png",fC="/three.js-journey/assets/py-BLoW9UYQ.png",pC="/three.js-journey/assets/pz-DHteryXs.png";class mC{static setup(t,e,n){this.initLights(t),this.initEnvMap(t),this.setupCamera(e),this.setupRenderer(n)}static setupCamera(t){t.fov=75,t.near=.1,t.far=100,t.position.set(-3,3,3)}static setupRenderer(t){t.shadowMap.enabled=!0,t.shadowMap.type=qi}static initLights(t){const e=new Zs(16777215,2.1);t.add(e);const n=new hi(16777215,.6);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,n.position.set(5,5,5),t.add(n)}static initEnvMap(t){const e=new Fm;t.environment=e.load([dC,cC,fC,hC,pC,uC]),t.environmentIntensity=.5}}class dp{static addAction(t,e,n){t.add({exec:e},"exec").name(n)}}var fe,R0,P0,L0,fu,pu,I0,cl,D0,N0,U0,O0,Lp;let gC=(Lp=class extends Te{constructor(){super(...arguments);jt(this,fe);Z(this,"threeWorld");Z(this,"physicsWorld");Z(this,"timer");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 20] Physics"}get link(){return"https://threejs-journey.com/lessons/physics"}update(e){this.timer.update(e),this.physicsWorld.postMessage({type:"update",payload:{delta:this.timer.getDelta()}}),this.control.update()}init(){super.init(),mC.setup(this.scene,this.camera,this.renderer),D(this,fe,O0).call(this),D(this,fe,D0).call(this),D(this,fe,N0).call(this),D(this,fe,U0).call(this),D(this,fe,L0).call(this,{x:0,y:0,z:0}),D(this,fe,fu).call(this,.5,{x:0,y:3,z:0}),D(this,fe,pu).call(this,1,1,1,{x:3,y:3,z:0})}dispose(){super.dispose(),D(this,fe,P0).call(this),D(this,fe,R0).call(this),this.physicsWorld.terminate()}},fe=new WeakSet,R0=function(){this.threeWorld.dispose()},P0=function(){this.physicsWorld.postMessage({type:"dispose"})},L0=function(e){const n=D(this,fe,cl).call(this);this.threeWorld.addPlane(n,e),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"plane",id:n,position:e}})},fu=function(e,n){const i=D(this,fe,cl).call(this);this.threeWorld.addSphere(i,e,n),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"sphere",id:i,radius:e,position:n}})},pu=function(e,n,i,s){const o=D(this,fe,cl).call(this);this.threeWorld.addBox(o,e,n,i,s),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"box",id:o,width:e/2,height:n/2,depth:i/2,position:s}})},I0=function(){this.physicsWorld.onmessage=e=>{const{type:n,payload:i}=e.data;switch(n){case"refresh":for(const s of i){const o=this.threeWorld.meshes[s.id];o.position.copy(s.position),o.quaternion.copy(s.quaternion)}break}}},cl=function(){return Date.now().toString(36)+Math.random().toString(36).substring(2,9)},D0=function(){this.threeWorld=new lC(this.scene)},N0=function(){this.physicsWorld=new Worker(new URL("/three.js-journey/assets/worker-DOS562_J.js",import.meta.url),{type:"module"}),this.physicsWorld.postMessage({type:"init",payload:{gravity:-9.8,friction:.1,restitution:.7}}),D(this,fe,I0).call(this)},U0=function(){dp.addAction(this.guiControl,()=>{D(this,fe,fu).call(this,Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Sphere"),dp.addAction(this.guiControl,()=>{D(this,fe,pu).call(this,Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Box")},O0=function(){this.timer=new Hl},Lp);function fp(r,t){if(t===gv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Ih||t===sm){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Ih)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class go extends Ri{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new MC(e)}),this.register(function(e){return new SC(e)}),this.register(function(e){return new LC(e)}),this.register(function(e){return new IC(e)}),this.register(function(e){return new DC(e)}),this.register(function(e){return new wC(e)}),this.register(function(e){return new TC(e)}),this.register(function(e){return new EC(e)}),this.register(function(e){return new AC(e)}),this.register(function(e){return new yC(e)}),this.register(function(e){return new CC(e)}),this.register(function(e){return new bC(e)}),this.register(function(e){return new PC(e)}),this.register(function(e){return new RC(e)}),this.register(function(e){return new xC(e)}),this.register(function(e){return new NC(e)}),this.register(function(e){return new UC(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ko.extractUrlBase(t);o=ko.resolveURL(c,this.path)}else o=ko.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new no(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===F0){try{o[Zt.KHR_BINARY_GLTF]=new OC(t)}catch(u){i&&i(u);return}s=JSON.parse(o[Zt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $C(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Zt.KHR_MATERIALS_UNLIT:o[u]=new vC;break;case Zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new FC(s,this.dracoLoader);break;case Zt.KHR_TEXTURE_TRANSFORM:o[u]=new BC;break;case Zt.KHR_MESH_QUANTIZATION:o[u]=new kC;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function _C(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xC{constructor(t){this.parser=t,this.name=Zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new Rt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$e);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bs(h),c.distance=u;break;case"spot":c=new Xu(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class vC{constructor(){this.name=Zt.KHR_MATERIALS_UNLIT}getMaterialType(){return De}extendParams(t,e,n){const i=[];t.color=new Rt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],$e),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,se))}return Promise.all(i)}}class yC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class MC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new nt(a,a)}return Promise.all(s)}}class SC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class bC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class wC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Rt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],$e)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,se)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class TC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Rt().setRGB(a[0],a[1],a[2],$e),Promise.all(s)}}class AC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class CC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Rt().setRGB(a[0],a[1],a[2],$e),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,se)),Promise.all(s)}}class RC{constructor(t){this.parser=t,this.name=Zt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class PC{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class LC{constructor(t){this.parser=t,this.name=Zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class IC{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class DC{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class NC{constructor(t){this.name=Zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class UC{constructor(t){this.name=Zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Gt,p=new I,m=new Fn,v=new I(1,1,1),x=new cT(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(p,m,v));for(const M in l)if(M==="_COLOR_0"){const C=l[M];x.instanceColor=new Uh(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);ge.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const F0="glTF",Co=12,pp={JSON:1313821514,BIN:5130562};class OC{constructor(t){this.name=Zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==F0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Co,s=new DataView(t,Co);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===pp.JSON){const c=new Uint8Array(t,Co+o,a);this.content=n.decode(c)}else if(l===pp.BIN){const c=Co+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class FC{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=mu[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=mu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Lr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,$e,d)})})}}class BC{constructor(){this.name=Zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class kC{constructor(){this.name=Zt.KHR_MESH_QUANTIZATION}}class B0 extends aa{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,_=g-c,p=-2*f+3*d,m=f-d,v=1-p,x=m-d+u;for(let M=0;M!==a;M++){const C=o[_+M+a],T=o[_+M+l]*h,w=o[g+M+a],E=o[g+M]*h;s[M]=v*C+x*T+p*w+m*E}return s}}const zC=new Fn;class HC extends B0{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return zC.fromArray(s).normalize().toArray(s),s}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mp={9728:We,9729:qe,9984:qp,9985:ja,9986:Ro,9987:oi},gp={33071:gi,33648:dl,10497:xe},Gc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VC={CUBICSPLINE:void 0,LINEAR:Xo,STEP:Wo},Wc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),r.DefaultMaterial}function Ls(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ki(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function WC(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function XC(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jC(r){let t;const e=r.extensions&&r.extensions[Zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Xc(e.attributes):t=r.indices+":"+Xc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Xc(r.targets[n]);return t}function Xc(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function gu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qC=new Gt;class $C{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new _C,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Qn(this.options.manager):this.textureLoader=new oE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new no(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ls(s,a,i),ki(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Zt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ko.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Gc[i.type],a=Lr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ae(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Gc[i.type],c=Lr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=e.cache.get(v);x||(_=new c(a,m*f,i.count*f/h),x=new sT(_,f/h),e.cache.add(v,x)),p=new Du(x,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new Ae(_,l,g);if(i.sparse!==void 0){const m=Gc.SCALAR,v=Lr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,C=new v(o[1],x,i.sparse.count*m),T=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Ae(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,E=C.length;w<E;w++){const L=C[w];if(p.setX(L,T[w*l]),l>=2&&p.setY(L,T[w*l+1]),l>=3&&p.setZ(L,T[w*l+2]),l>=4&&p.setW(L,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=mp[d.magFilter]||qe,h.minFilter=mp[d.minFilter]||oi,h.wrapS=gp[d.wrapS]||xe,h.wrapT=gp[d.wrapT]||xe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const p=new en(_);p.needsUpdate=!0,d(p)}),e.load(ko.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ki(u,o),u.userData.mimeType=o.mimeType||YC(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Zt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new oa,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new uo,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Ge}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[Zt.KHR_MATERIALS_UNLIT]){const u=i[Zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Rt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],$e),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Xn);const h=s.alphaMode||Wc.OPAQUE;if(h===Wc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==De&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==De&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==De){const u=s.emissiveFactor;a.emissive=new Rt().setRGB(u[0],u[1],u[2],$e)}return s.emissiveTexture!==void 0&&o!==De&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,se)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),ki(u,s),e.associations.set(u,{materials:t}),s.extensions&&Ls(i,u,s),u})}createUniqueName(t){const e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return _p(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=jC(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Zt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=_p(new pe,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?GC(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const v=c[f];if(p.mode===Gn.TRIANGLES||p.mode===Gn.TRIANGLE_STRIP||p.mode===Gn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new oT(_,v):new wt(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Gn.TRIANGLE_STRIP?m.geometry=fp(m.geometry,sm):p.mode===Gn.TRIANGLE_FAN&&(m.geometry=fp(m.geometry,Ih));else if(p.mode===Gn.LINES)m=new Ou(_,v);else if(p.mode===Gn.LINE_STRIP)m=new Jr(_,v);else if(p.mode===Gn.LINE_LOOP)m=new hT(_,v);else if(p.mode===Gn.POINTS)m=new Dl(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&XC(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),ki(m,s),p.extensions&&Ls(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Ls(i,u[0],s),u[0];const d=new ai;s.extensions&&Ls(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ln(om.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ll(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ki(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Gt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Uu(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let v=0,x=d.length;v<x;v++){const M=d[v],C=f[v],T=g[v],w=_[v],E=p[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const L=n._createAnimationTracks(M,C,T,w,E);if(L)for(let y=0;y<L.length;y++)m.push(L[y])}return new Hh(s,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qC)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new wm:c.length>1?h=new ai:c.length===1?h=c[0]:h=new ge,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),ki(h,s),s.extensions&&Ls(n,h,s),s.matrix!==void 0){const u=new Gt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ai;n.name&&(s.name=i.createUniqueName(n.name)),ki(s,n),n.extensions&&Ls(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Kn||d instanceof en)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];ss[s.path]===ss.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ss[s.path]){case ss.weights:c=Qr;break;case ss.rotation:c=to;break;case ss.position:case ss.scale:c=eo;break;default:switch(n.itemSize){case 1:c=Qr;break;case 2:case 3:default:c=eo;break}break}const h=i.interpolation!==void 0?VC[i.interpolation]:Xo,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ss[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=gu(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof to?HC:B0;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KC(r,t,e){const n=t.attributes,i=new $i;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const h=gu(Lr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=gu(Lr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function _p(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=mu[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return ie.workingColorSpace!==$e&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`),ki(r,t),KC(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?WC(r,t.targets,e):r})}const jc=new WeakMap;class _o extends Ri{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const s=new no(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,o=>{this.parse(o,e,i)},n,i)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,se,n).catch(n)}decodeDracoFile(t,e,n,i,s=$e,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const n=JSON.stringify(e);if(jc.has(t)){const l=jc.get(t);if(l.key===n)return l.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:e,buffer:t},[t])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),jc.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new pe;t.index&&e.setIndex(new Ae(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const i=t.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new Ae(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),e.setAttribute(s,l)}return e}_assignVertexColorSpace(t,e){if(e!==se)return;const n=new Rt;for(let i=0,s=t.count;i<s;i++)n.fromBufferAttribute(t,i),ie.toWorkingColorSpace(n,se),t.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new no(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(t,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const i=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const s=ZC.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function ZC(){let r,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,t=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let v,x;if(c.useUniqueIDs)x=h[p],v=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,o[h[p]]),x===-1)continue;v=a.GetAttribute(d,x)}const M=i(o,a,d,p,m,v);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,p=s(o,h),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,p,_,m);const v=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:v,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var An,k0,z0,H0,V0,G0,W0,Ip;let JC=(Ip=class extends Te{constructor(){super(...arguments);jt(this,An);Z(this,"timer");Z(this,"foxMixer",null);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 21] Imported models"}get link(){return"https://threejs-journey.com/lessons/imported-models"}update(e){this.timer.update(e),this.control.update(),this.foxMixer&&this.foxMixer.update(this.timer.getDelta())}init(){super.init(),D(this,An,V0).call(this),D(this,An,W0).call(this),D(this,An,G0).call(this),D(this,An,H0).call(this),D(this,An,k0).call(this),D(this,An,z0).call(this)}},An=new WeakSet,k0=function(){this.camera.fov=75,this.camera.near=.1,this.camera.far=100,this.camera.position.set(3,3,8)},z0=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi},H0=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n),e.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",i=>{i.scene.position.set(3,0,3),this.scene.add(i.scene)}),e.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.position.set(-3,0,-3),i.scene.scale.set(4,4,4),this.scene.add(i.scene)}),e.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.025,.025,.025),this.scene.add(i.scene),this.foxMixer=new Bm(i.scene),this.foxMixer.clipAction(i.animations[2]).play()})},V0=function(){this.timer=new Hl},G0=function(){const e=new rn(10,10,10),n=new Ge({roughness:.3,metalness:.7}),i=new wt(e,n);i.rotation.x=-Math.PI/2,this.scene.add(i)},W0=function(){const e=new Zs(16777215,1);this.scene.add(e);const n=new hi(16777215,3);n.position.set(3,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,this.scene.add(n)},Ip);var Gr,Cn,X0,j0,Y0,q0,$0,K0,Dp;let QC=(Dp=class extends Te{constructor(){super(...arguments);jt(this,Cn);Z(this,"raycaster");Z(this,"objs",[]);Z(this,"hasAnimation",!0);Z(this,"cursor");jt(this,Gr)}get title(){return"[LESSON 22] Raycaster and Mouse Events"}get link(){return"https://threejs-journey.com/lessons/raycaster-and-mouse-events"}update(e){const n=e*.001;for(let s=0;s<this.objs.length;s++){const o=this.objs[s];o.position.y=Math.sin(n+s*10)*3,o.scale.set(1,1,1),o.material.color.set(16777215),o.name==="duck"&&o.scale.set(.008,.008,.008)}this.raycaster.setFromCamera(this.cursor,this.camera);const i=this.raycaster.intersectObjects(this.objs);for(const s of i){const o=s.object;o.scale.set(1.2,1.2,1.2),o.material.color.set(14824424),o.name==="duck"&&o.scale.set(.0085,.0085,.0085)}this.control.update()}init(){super.init(),D(this,Cn,q0).call(this),D(this,Cn,Y0).call(this),D(this,Cn,X0).call(this),D(this,Cn,$0).call(this),D(this,Cn,K0).call(this)}dispose(){this.canvas.removeEventListener("mousemove",Xt(this,Gr)),this.raycaster=null,super.dispose()}},Gr=new WeakMap,Cn=new WeakSet,X0=function(){this.raycaster=new vE(new I(0,0,0),new I(0,0,0)),this.cursor=new nt(0,0),Je(this,Gr,D(this,Cn,j0).bind(this)),this.canvas.addEventListener("mousemove",Xt(this,Gr))},j0=function(e){this.cursor.x=(e.offsetX/this.canvas.width-.5)*2,this.cursor.y=-((e.offsetY/this.canvas.height-.5)*2)},Y0=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n);const i=1,s=new Ki(i);for(let o=0;o<3;o++){if(o===1)continue;const a=new Ge({metalness:.7,roughness:.3}),l=new wt(s,a);l.castShadow=!0,l.receiveShadow=!0,l.position.set(-3+o*i*3,0,0),this.objs.push(l),this.scene.add(l)}e.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",o=>{const a=o.scene.children[0].children[0];a.name="duck",a.scale.set(.008,.008,.008),a.rotation.y=-Math.PI/2,this.scene.add(a),this.objs.push(a)})},q0=function(){const e=new Zs(16777215,.9);this.scene.add(e);const n=new hi(16777215,3);n.position.set(5,5,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=2,n.shadow.camera.bottom=-2,n.shadow.camera.right=2,n.shadow.camera.left=-2,n.shadow.camera.far=10,this.scene.add(n)},$0=function(){this.camera.position.z=5},K0=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi},Dp);var Jn,Z0,J0,Q0,tx,ex,Np;let tR=(Np=class extends Te{constructor(){super(...arguments);jt(this,Jn);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 23] Custom models with Blender"}get link(){return"https://threejs-journey.com/lessons/custom-models-with-blender"}update(){this.control.update()}init(){super.init(),D(this,Jn,tx).call(this),D(this,Jn,ex).call(this),D(this,Jn,Q0).call(this),D(this,Jn,Z0).call(this),D(this,Jn,J0).call(this)}},Jn=new WeakSet,Z0=function(){this.camera.position.set(2,2,4)},J0=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi},Q0=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n),e.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),this.scene.add(i.scene)})},tx=function(){const e=new Zs(16777215,1);this.scene.add(e);const n=new hi(16777215,3);n.position.set(-5,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=3,n.shadow.camera.bottom=-3,n.shadow.camera.right=3,n.shadow.camera.left=-3,n.shadow.camera.far=8,this.scene.add(n)},ex=function(){const e=new rn(5,5),n=new Ge,i=new wt(e,n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i)},Np);var Rn,nx,ix,sx,rx,ox,ax,Up;let eR=(Up=class extends Te{constructor(){super(...arguments);jt(this,Rn);Z(this,"cubeCamera");Z(this,"holyDonut");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 24] Environment map"}get link(){return"https://threejs-journey.com/lessons/environment-map"}update(e){this.control.update();const n=e*.001;this.holyDonut.rotation.x=Math.abs(Math.cos(n*.5))*Math.PI,this.cubeCamera.update(this.renderer,this.scene)}init(){super.init(),D(this,Rn,sx).call(this),D(this,Rn,ax).call(this),D(this,Rn,ox).call(this),D(this,Rn,rx).call(this),D(this,Rn,ix).call(this),D(this,Rn,nx).call(this)}},Rn=new WeakSet,nx=function(){this.camera.position.set(1,1,6)},ix=function(){const e=this.guiControl.addFolder("Environment");e.add(this.scene,"environmentIntensity").min(0).max(10).step(.01).name("intensity"),e.add(this.scene.environmentRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation");const n=this.guiControl.addFolder("background");n.add(this.scene,"backgroundIntensity").min(0).max(10).step(.01).name("intensity"),n.add(this.scene,"backgroundBlurriness").min(0).max(1).step(.01).name("blurriness"),n.add(this.scene.backgroundRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation")},sx=function(){const n=new Qn().load("/three.js-journey/media/images/environmentMap/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg");n.colorSpace=se,n.mapping=Yr,this.scene.background=n;const i=new _m(64,{type:_i});this.cubeCamera=new gm(.1,100,i),this.cubeCamera.layers.set(1),this.scene.environment=i.texture},rx=function(){this.holyDonut=new wt(new Ks(4,.2),new De({color:new Rt(10,4,2)})),this.holyDonut.layers.enable(1),this.scene.add(this.holyDonut)},ox=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n),e.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.scale.set(3,3,3),i.scene.position.set(0,-1,0),this.scene.add(i.scene)})},ax=function(){const e=new wt(new Ol(.5,.2),new Ge({metalness:1,roughness:0,color:11184810}));e.position.set(-2,0,0),this.scene.add(e)},Up);var je,lx,cx,hx,ux,dx,fx,px,mx,gx,Op;let nR=(Op=class extends Te{constructor(){super(...arguments);jt(this,je);Z(this,"directionalLight");Z(this,"textureLoader");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 25] Realistic render"}get link(){return"https://threejs-journey.com/lessons/realistic-render"}update(){this.control.update()}init(){super.init(),D(this,je,hx).call(this),D(this,je,gx).call(this),D(this,je,dx).call(this),D(this,je,mx).call(this),D(this,je,px).call(this),D(this,je,fx).call(this),D(this,je,lx).call(this),D(this,je,cx).call(this),D(this,je,ux).call(this)}},je=new WeakSet,lx=function(){this.camera.position.set(2,2,4)},cx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi,this.renderer.toneMapping=ul,this.renderer.toneMappingExposure=1.5},hx=function(){this.textureLoader=new Qn},ux=function(){this.guiControl.add(this.scene,"environmentIntensity").min(0).max(10).step(.01),this.guiControl.add(this.renderer,"toneMapping",{No:Gi,Linear:Wp,Reinhard:Xp,Cineon:jp,ACESFilmic:ul}),this.guiControl.add(this.renderer,"toneMappingExposure").min(0).max(10).step(.01);const e=this.guiControl.addFolder("light");e.add(this.directionalLight,"intensity").min(0).max(20).step(.01),e.add(this.directionalLight.position,"x").min(-10).max(10).step(.01),e.add(this.directionalLight.position,"y").min(-10).max(10).step(.01),e.add(this.directionalLight.position,"z").min(-10).max(10).step(.01),e.add(this.directionalLight.shadow,"bias").min(-.05).max(.05).step(.001),e.add(this.directionalLight.shadow,"normalBias").min(-.05).max(.05).step(.001)},dx=function(){this.directionalLight=new hi(16777215,3),this.directionalLight.position.set(-8.5,4.27,3),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(512,512),this.directionalLight.shadow.camera.far=15,this.directionalLight.shadow.bias=-.011,this.directionalLight.shadow.normalBias=.009,this.directionalLight.target.position.set(0,.25,0),this.directionalLight.target.updateWorldMatrix(),this.scene.add(this.directionalLight)},fx=function(){const e=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_nor.png");e.colorSpace=se;const s=new wt(new rn(3,3),new Ge({map:e,normalMap:i,aoMap:n,roughnessMap:n,metalnessMap:n}));s.position.set(0,1.5,-1.5),s.receiveShadow=!0,this.scene.add(s)},px=function(){const e=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_nor.png");e.colorSpace=se;const s=new wt(new rn(3,3),new Ge({map:e,normalMap:i,aoMap:n,metalnessMap:n,roughnessMap:n}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},mx=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n),e.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),i.scene.children.forEach(s=>{s.castShadow=!0,s.receiveShadow=!0}),this.scene.add(i.scene)})},gx=function(){new __().load("/three.js-journey/media/images/environmentMap/0/2k.hdr",n=>{n.mapping=Yr,this.scene.environment=n,this.scene.background=n})},Op);var be,_x,xx,vx,yx,Mx,Sx,bx,wx,Tx,No,Fp;let iR=(Fp=class extends Te{constructor(){super(...arguments);jt(this,be);Z(this,"animation",null);Z(this,"currentAction",null);Z(this,"actions",[]);Z(this,"timer");Z(this,"hasGuiTweaks",!0);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 26] Code structuring for bigger projects"}get link(){return"https://threejs-journey.com/lessons/code-structuring-for-bigger-projects"}update(e){this.timer.update(e),this.animation&&this.animation.update(this.timer.getDelta()),this.control.update()}init(){super.init(),D(this,be,vx).call(this),D(this,be,Tx).call(this),D(this,be,yx).call(this),D(this,be,Sx).call(this),D(this,be,Mx).call(this),D(this,be,xx).call(this),D(this,be,_x).call(this)}},be=new WeakSet,_x=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qi,this.renderer.toneMapping=ul},xx=function(){this.camera.position.set(3,2,3)},vx=function(){this.timer=new Hl},yx=function(){const e=new Qn,n=e.load("/three.js-journey/media/images/textures/dirt/color.jpg"),i=e.load("/three.js-journey/media/images/textures/dirt/normal.jpg");n.colorSpace=se,n.repeat.set(2,2),i.repeat.set(2,2),n.wrapS=xe,n.wrapT=xe,i.wrapS=xe,i.wrapT=xe;const s=new wt(new ku(2.5),new Ge({map:n,normalMap:i}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},Mx=function(){const e=new Fm;this.scene.environment=e.load(["/three.js-journey/media/images/environmentMap/3/px.jpg","/three.js-journey/media/images/environmentMap/3/nx.jpg","/three.js-journey/media/images/environmentMap/3/py.jpg","/three.js-journey/media/images/environmentMap/3/ny.jpg","/three.js-journey/media/images/environmentMap/3/pz.jpg","/three.js-journey/media/images/environmentMap/3/nz.jpg"])},Sx=function(){const e=new go,n=new _o;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),e.setDRACOLoader(n),e.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.015,.015,.015),i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),this.scene.add(i.scene),D(this,be,bx).call(this,i.scene,i.animations),D(this,be,No).call(this,"survey"),D(this,be,wx).call(this)})},bx=function(e,n){this.animation=new Bm(e),this.actions.survey=this.animation.clipAction(n[0]),this.actions.walk=this.animation.clipAction(n[1]),this.actions.run=this.animation.clipAction(n[2])},wx=function(){const e=this.guiControl.addFolder("Fox");e.add({survey:()=>{D(this,be,No).call(this,"survey")}},"survey"),e.add({walk:()=>{D(this,be,No).call(this,"walk")}},"walk"),e.add({run:()=>{D(this,be,No).call(this,"run")}},"run")},Tx=function(){const e=new hi(16777215,3);e.position.set(3,2,0),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.far=10,this.scene.add(e)},No=function(e){const n=this.actions[e];n==null||n.reset(),n==null||n.play(),this.currentAction&&(n==null||n.crossFadeFrom(this.currentAction,1)),this.currentAction=n},Fp);const sR="/three.js-journey/assets/argentinian-flag-YNgkmkdk.png";var Ti,Ex,Ax,Cx,Rx,Bp;let rR=(Bp=class extends Te{constructor(){super(...arguments);jt(this,Ti);Z(this,"material");Z(this,"hasAnimation",!0)}get title(){return"[LESSON 27] Shaders"}get link(){return"https://threejs-journey.com/lessons/shaders"}update(e){this.material.uniforms.uTime.value=e*.001,this.control.update()}init(){super.init(),D(this,Ti,Ex).call(this),D(this,Ti,Rx).call(this)}},Ti=new WeakSet,Ex=function(){const n=new Qn().load(sR),i=new rn(2,2,64,64);this.material=new li({vertexShader:D(this,Ti,Ax).call(this),fragmentShader:D(this,Ti,Cx).call(this),uniforms:{uFrequency:{value:new nt(10,5)},uTime:{value:0},uTexture:{value:n}}});const s=new wt(i,this.material);s.scale.y=2/3,this.scene.add(s)},Ax=function(){return`
      uniform vec2 uFrequency;
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
      }
    `},Cx=function(){return`
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        vec4 texture = texture2D(uTexture, vUv);
        vec3 color   = texture.rgb * (vElevation + 0.3) * (1.0 / 0.6);
        gl_FragColor = vec4(color, 1);
      }
    `},Rx=function(){const e=this.guiControl.addFolder("Frequency");e.add(this.material.uniforms.uFrequency.value,"x").min(0).max(20),e.add(this.material.uniforms.uFrequency.value,"y").min(0).max(20)},Bp);var vs,Px,Lx,Ix;class oR extends Te{constructor(){super(...arguments);jt(this,vs);Z(this,"hasAnimation",!0)}get title(){return"[LESSON 28] Shader patterns"}get link(){return"https://threejs-journey.com/lessons/shader-patterns"}update(){this.control.update()}init(){super.init(),D(this,vs,Px).call(this)}}vs=new WeakSet,Px=function(){const e=new rn(2,2,64,64),n=new li({vertexShader:D(this,vs,Lx).call(this),fragmentShader:D(this,vs,Ix).call(this),side:Xn}),i=new wt(e,n);this.scene.add(i)},Lx=function(){return`
      varying vec2 vUv;
    
      void main() {
        gl_Position = 
          projectionMatrix * 
          viewMatrix       *
          modelMatrix      * 
          vec4(position, 1.0);
          
        vUv = uv;
      }
    `},Ix=function(){return`
      #define PI 3.1415926538
    
      varying vec2 vUv;
      
      void main() {
        float clipX     = mod(vUv.x * 10.0, 1.0);
        float strengthX = step(0.8, clipX);        
        float clipY     = mod(vUv.y * 10.0, 1.0);
        float strengthY = step(0.8, clipY);
        
        float barX = step(0.4, clipY);
        float barY = step(0.4, clipX);
      
        float strength = (strengthX * barX) + (strengthY * barY);
      
        gl_FragColor = vec4(vec3(strength), 1.0);
      }
    `};const aR=[new tA,new eA,new g1,new _1,new x1,new v1,new y1,new M1,new S1,new C1,new P1,new L1,new nC,new iC,new sC,new aC,new gC,new JC,new QC,new tR,new eR,new nR,new iR,new rR,new oR],lR=new kx(aR.reverse(),".lesson-title",".controls__arrow--left",".controls__arrow--right");lR.run();
//# sourceMappingURL=index-C1HkMbSY.js.map
