var a1=Object.defineProperty;var kf=r=>{throw TypeError(r)};var l1=(r,e,t)=>e in r?a1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var V=(r,e,t)=>l1(r,typeof e!="symbol"?e+"":e,t),Gc=(r,e,t)=>e.has(r)||kf("Cannot "+t);var Ue=(r,e,t)=>(Gc(r,e,"read from private field"),t?t.call(r):e.get(r)),Re=(r,e,t)=>e.has(r)?kf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Ut=(r,e,t,n)=>(Gc(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),C=(r,e,t)=>(Gc(r,e,"access private method"),t);var Wc=(r,e,t,n)=>({set _(i){Ut(r,e,i,t)},get _(){return Ue(r,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var po,Bi,gi,Zt,Rg,Lg,Xh,qh,Yh,Bl,Ig;class c1{constructor(e,t,n,i){Re(this,Zt);Re(this,po);Re(this,Bi,[]);Re(this,gi,0);Ut(this,Bi,e),Ut(this,po,document.querySelector(t)),C(this,Zt,Rg).call(this,n,i),C(this,Zt,Lg).call(this)}run(){Ue(this,Bi).length&&C(this,Zt,Bl).call(this)}}po=new WeakMap,Bi=new WeakMap,gi=new WeakMap,Zt=new WeakSet,Rg=function(e,t){const n=document.querySelector(e),i=document.querySelector(t);n.addEventListener("click",C(this,Zt,qh).bind(this)),i.addEventListener("click",C(this,Zt,Xh).bind(this))},Lg=function(){document.addEventListener("keydown",e=>{e.key==="ArrowRight"&&C(this,Zt,Xh).call(this),e.key==="ArrowLeft"&&C(this,Zt,qh).call(this)})},Xh=function(){C(this,Zt,Yh).call(this),Ue(this,gi)>=Ue(this,Bi).length-1?Ut(this,gi,0):Wc(this,gi)._++,C(this,Zt,Bl).call(this)},qh=function(){C(this,Zt,Yh).call(this),Ue(this,gi)<=0?Ut(this,gi,Ue(this,Bi).length-1):Wc(this,gi)._--,C(this,Zt,Bl).call(this)},Yh=function(){Ue(this,Bi)[Ue(this,gi)].close()},Bl=function(){Ue(this,Bi)[Ue(this,gi)].open(),C(this,Zt,Ig).call(this)},Ig=function(){var n;const e=Ue(this,Bi)[Ue(this,gi)],t=document.createElement("a");t.href=e.link,t.target="_blank",t.rel="noopener noreferrer",t.textContent=`[Lesson ${e.number}] ${e.title}`,(n=Ue(this,po).querySelector("a"))==null||n.remove(),Ue(this,po).append(t)};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="169",so={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},h1=0,Vf=1,u1=2,Ud=1,Ni=2,as=3,ms=0,vn=1,_n=2,Bs=0,ro=1,gs=2,Hf=3,Gf=4,d1=5,pr=100,f1=101,p1=102,m1=103,g1=104,_1=200,v1=201,x1=202,y1=203,$h=204,Kh=205,M1=206,w1=207,S1=208,b1=209,T1=210,A1=211,E1=212,C1=213,P1=214,Zh=0,Jh=1,Qh=2,Lo=3,eu=4,tu=5,nu=6,iu=7,Dg=0,R1=1,L1=2,ps=0,Ng=1,Fg=2,Ug=3,Vs=4,I1=5,D1=6,N1=7,Wf="attached",F1="detached",Og=300,Io=301,Do=302,Hs=303,su=304,bc=306,xt=1e3,_i=1001,sc=1002,zt=1003,Bg=1004,va=1005,an=1006,zl=1007,Ii=1008,_s=1009,zg=1010,kg=1011,Ia=1012,Od=1013,Sr=1014,An=1015,Vi=1016,Bd=1017,zd=1018,No=1020,Vg=35902,Hg=1021,Gg=1022,zn=1023,Wg=1024,jg=1025,oo=1026,Fo=1027,kd=1028,Vd=1029,Xg=1030,Hd=1031,Gd=1033,kl=33776,Vl=33777,Hl=33778,Gl=33779,ru=35840,ou=35841,au=35842,lu=35843,cu=36196,hu=37492,uu=37496,du=37808,fu=37809,pu=37810,mu=37811,gu=37812,_u=37813,vu=37814,xu=37815,yu=37816,Mu=37817,wu=37818,Su=37819,bu=37820,Tu=37821,Wl=36492,Au=36494,Eu=36495,qg=36283,Cu=36284,Pu=36285,Ru=36286,U1=2200,O1=2201,B1=2202,Da=2300,Na=2301,jc=2302,Jr=2400,Qr=2401,rc=2402,Wd=2500,z1=2501,k1=0,Yg=1,Lu=2,V1=3200,Tc=3201,Ac=0,H1=1,Ds="",nt="srgb",cn="srgb-linear",jd="display-p3",Ec="display-p3-linear",oc="linear",It="srgb",ac="rec709",lc="p3",Dr=7680,jf=519,G1=512,W1=513,j1=514,$g=515,X1=516,q1=517,Y1=518,$1=519,Iu=35044,Xf="300 es",fs=2e3,cc=2001;class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const ba=Math.PI/180,Uo=180/Math.PI;function yi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function nn(r,e,t){return Math.max(e,Math.min(t,r))}function Xd(r,e){return(r%e+e)%e}function K1(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Z1(r,e,t){return r!==e?(t-r)/(e-r):0}function Ta(r,e,t){return(1-t)*r+t*e}function J1(r,e,t,n){return Ta(r,e,1-Math.exp(-t*n))}function Q1(r,e=1){return e-Math.abs(Xd(r,e*2)-e)}function ew(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tw(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nw(r,e){return r+Math.floor(Math.random()*(e-r+1))}function iw(r,e){return r+Math.random()*(e-r)}function sw(r){return r*(.5-Math.random())}function rw(r){r!==void 0&&(qf=r);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ow(r){return r*ba}function aw(r){return r*Uo}function lw(r){return(r&r-1)===0&&r!==0}function cw(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hw(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uw(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fa={DEG2RAD:ba,RAD2DEG:Uo,generateUUID:yi,clamp:nn,euclideanModulo:Xd,mapLinear:K1,inverseLerp:Z1,lerp:Ta,damp:J1,pingpong:Q1,smoothstep:ew,smootherstep:tw,randInt:nw,randFloat:iw,randFloatSpread:sw,seededRandom:rw,degToRad:ow,radToDeg:aw,isPowerOfTwo:lw,ceilPowerOfTwo:cw,floorPowerOfTwo:hw,setQuaternionFromProperEuler:uw,normalize:_t,denormalize:Ri};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],y=i[1],x=i[4],w=i[7],E=i[2],b=i[5],T=i[8];return s[0]=o*v+a*y+l*E,s[3]=o*p+a*x+l*b,s[6]=o*m+a*w+l*T,s[1]=c*v+h*y+u*E,s[4]=c*p+h*x+u*b,s[7]=c*m+h*w+u*T,s[2]=d*v+f*y+g*E,s[5]=d*p+f*x+g*b,s[8]=d*m+f*w+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Qe;function Kg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ua(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dw(){const r=Ua("canvas");return r.style.display="block",r}const Yf={};function jl(r){r in Yf||(Yf[r]=!0,console.warn(r))}function fw(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function pw(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mw(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $f=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kf=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[cn]:{transfer:oc,primaries:ac,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[nt]:{transfer:It,primaries:ac,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ec]:{transfer:oc,primaries:lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Kf),fromReference:r=>r.applyMatrix3($f)},[jd]:{transfer:It,primaries:lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Kf),fromReference:r=>r.applyMatrix3($f).convertLinearToSRGB()}},gw=new Set([cn,Ec]),lt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gw.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ra[e].toReference,i=ra[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ra[r].primaries},getTransfer:function(r){return r===Ds?oc:ra[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ra[e].luminanceCoefficients)}};function ao(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class _w{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nr===void 0&&(Nr=Ua("canvas")),Nr.width=e.width,Nr.height=e.height;const n=Nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ao(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ao(t[n]/255)*255):t[n]=ao(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vw=0;class Zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yc(i[o].image)):s.push(Yc(i[o]))}else s=Yc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_w.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xw=0;class ln extends Ks{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=_i,i=_i,s=an,o=Ii,a=zn,l=_s,c=ln.DEFAULT_ANISOTROPY,h=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=yi(),this.name="",this.source=new Zg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xt:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xt:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Og;ln.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(f+1)/2,E=(m+1)/2,b=(h+d)/4,T=(u+v)/4,M=(g+p)/4;return x>w&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=T/n):w>E?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=b/i,s=M/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=M/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yw extends Ks{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends yw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jg extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mw extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),b=Math.atan2(E,m*y);p=Math.sin(p*b)/E,a=Math.sin(a*b)/E}const w=a*y;if(l=l*p+d*w,c=c*p+f*w,h=h*p+g*w,u=u*p+v*w,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new O,Zf=new oi;class ys{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),sl.subVectors(this.max,oa),Fr.subVectors(e.a,oa),Ur.subVectors(e.b,oa),Or.subVectors(e.c,oa),Ss.subVectors(Ur,Fr),bs.subVectors(Or,Ur),Qs.subVectors(Fr,Or);let t=[0,-Ss.z,Ss.y,0,-bs.z,bs.y,0,-Qs.z,Qs.y,Ss.z,0,-Ss.x,bs.z,0,-bs.x,Qs.z,0,-Qs.x,-Ss.y,Ss.x,0,-bs.y,bs.x,0,-Qs.y,Qs.x,0];return!Kc(t,Fr,Ur,Or,sl)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Fr,Ur,Or,sl))?!1:(rl.crossVectors(Ss,bs),t=[rl.x,rl.y,rl.z],Kc(t,Fr,Ur,Or,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ts=[new O,new O,new O,new O,new O,new O,new O,new O],Ai=new O,il=new ys,Fr=new O,Ur=new O,Or=new O,Ss=new O,bs=new O,Qs=new O,oa=new O,sl=new O,rl=new O,er=new O;function Kc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){er.fromArray(r,s);const a=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),h=n.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ww=new ys,aa=new O,Zc=new O;class Ki{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ww.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Zc)),this.expandByPoint(aa.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ns=new O,Jc=new O,ol=new O,Ts=new O,Qc=new O,al=new O,eh=new O;class Jo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jc.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=Ts.dot(this.direction),l=-Ts.dot(ol),c=Ts.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Jc).addScaledVector(ol,d),f}intersectSphere(e,t){ns.subVectors(e.center,this.origin);const n=ns.dot(this.direction),i=ns.dot(ns)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,i,s){Qc.subVectors(t,e),al.subVectors(n,e),eh.crossVectors(Qc,al);let o=this.direction.dot(eh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors(Ts,al));if(l<0)return null;const c=a*this.direction.dot(Qc.cross(Ts));if(c<0||l+c>o)return null;const h=-a*Ts.dot(eh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,p){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sw,e,bw)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),As.crossVectors(n,ti),As.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),As.crossVectors(n,ti)),As.normalize(),ll.crossVectors(ti,As),i[0]=As.x,i[4]=ll.x,i[8]=ti.x,i[1]=As.y,i[5]=ll.y,i[9]=ti.y,i[2]=As.z,i[6]=ll.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],x=n[7],w=n[11],E=n[15],b=i[0],T=i[4],M=i[8],A=i[12],_=i[1],S=i[5],I=i[9],z=i[13],B=i[2],G=i[6],U=i[10],$=i[14],Y=i[3],ae=i[7],ie=i[11],pe=i[15];return s[0]=o*b+a*_+l*B+c*Y,s[4]=o*T+a*S+l*G+c*ae,s[8]=o*M+a*I+l*U+c*ie,s[12]=o*A+a*z+l*$+c*pe,s[1]=h*b+u*_+d*B+f*Y,s[5]=h*T+u*S+d*G+f*ae,s[9]=h*M+u*I+d*U+f*ie,s[13]=h*A+u*z+d*$+f*pe,s[2]=g*b+v*_+p*B+m*Y,s[6]=g*T+v*S+p*G+m*ae,s[10]=g*M+v*I+p*U+m*ie,s[14]=g*A+v*z+p*$+m*pe,s[3]=y*b+x*_+w*B+E*Y,s[7]=y*T+x*S+w*G+E*ae,s[11]=y*M+x*I+w*U+E*ie,s[15]=y*A+x*z+w*$+E*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],y=u*p*c-v*d*c+v*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,w=h*v*c-g*u*c+g*a*f-o*v*f-h*a*m+o*u*m,E=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,b=t*y+n*x+i*w+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=y*T,e[1]=(v*d*s-u*p*s-v*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(a*p*s-v*l*s+v*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*p*s-g*d*s+g*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=w*T,e[9]=(g*u*s-h*v*s-g*n*f+t*v*f+h*n*m-t*u*m)*T,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*m+t*a*m)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=E*T,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*p+t*u*p)*T,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,v=o*h,p=o*u,m=a*u,y=l*c,x=l*h,w=l*u,E=n.x,b=n.y,T=n.z;return i[0]=(1-(v+m))*E,i[1]=(f+w)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(f-w)*b,i[5]=(1-(d+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+x)*T,i[9]=(p-y)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Br.set(i[0],i[1],i[2]).length();const o=Br.set(i[4],i[5],i[6]).length(),a=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ei.copy(this);const c=1/s,h=1/o,u=1/a;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,t.setFromRotationMatrix(Ei),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=fs){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===fs)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cc)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=fs){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,f=(n+i)*h;let g,v;if(a===fs)g=(o+s)*u,v=-2*u;else if(a===cc)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new O,Ei=new Ye,Sw=new O(0,0,0),bw=new O(1,1,1),As=new O,ll=new O,ti=new O,Jf=new Ye,Qf=new oi;class ji{constructor(e=0,t=0,n=0,i=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tw=0;const ep=new O,zr=new oi,is=new Ye,cl=new O,la=new O,Aw=new O,Ew=new oi,tp=new O(1,0,0),np=new O(0,1,0),ip=new O(0,0,1),sp={type:"added"},Cw={type:"removed"},kr={type:"childadded",child:null},th={type:"childremoved",child:null};class Tt extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new O,t=new ji,n=new oi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cl.copy(e):cl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(la,cl,this.up):is.lookAt(cl,la,this.up),this.quaternion.setFromRotationMatrix(is),i&&(is.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(is),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cw),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,Aw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,Ew,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new O(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new O,ss=new O,nh=new O,rs=new O,Vr=new O,Hr=new O,rp=new O,ih=new O,sh=new O,rh=new O,oh=new ut,ah=new ut,lh=new ut;class Li{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ci.subVectors(e,t),i.cross(Ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ci.subVectors(i,t),ss.subVectors(n,t),nh.subVectors(e,t);const o=Ci.dot(Ci),a=Ci.dot(ss),l=Ci.dot(nh),c=ss.dot(ss),h=ss.dot(nh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(oh,s.x),o.addScaledVector(ah,s.y),o.addScaledVector(lh,s.z),o}static isFrontFacing(e,t,n,i){return Ci.subVectors(n,t),ss.subVectors(e,t),Ci.cross(ss).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Ci.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vr.subVectors(i,n),Hr.subVectors(s,n),ih.subVectors(e,n);const l=Vr.dot(ih),c=Hr.dot(ih);if(l<=0&&c<=0)return t.copy(n);sh.subVectors(e,i);const h=Vr.dot(sh),u=Hr.dot(sh);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vr,o);rh.subVectors(e,s);const f=Vr.dot(rh),g=Hr.dot(rh);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Hr,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return rp.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(rp,a);const m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Vr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},hl={h:0,s:0,l:0};function ch(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Xd(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ch(o,s,e+1/3),this.g=ch(o,s,e),this.b=ch(o,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=Qg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return lt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(nn(Sn.r*255,0,255))*65536+Math.round(nn(Sn.g*255,0,255))*256+Math.round(nn(Sn.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,s=Sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=nt){lt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(hl);const n=Ta(Es.h,hl.h,t),i=Ta(Es.s,hl.s,t),s=Ta(Es.l,hl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new xe;xe.NAMES=Qg;let Pw=0;class ai extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ro,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Kh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$h&&(n.blendSrc=this.blendSrc),this.blendDst!==Kh&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ds=Rw();function Rw(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Lw(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=nn(r,-65504,65504),ds.floatView[0]=r;const e=ds.uint32View[0],t=e>>23&511;return ds.baseTable[t]+((e&8388607)>>ds.shiftTable[t])}function Iw(r){const e=r>>10;return ds.uint32View[0]=ds.mantissaTable[ds.offsetTable[e]+(r&1023)]+ds.exponentTable[e],ds.floatView[0]}const ul={toHalfFloat:Lw,fromHalfFloat:Iw},en=new O,dl=new ue;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class e0 extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class t0 extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dw=0;const fi=new Ye,hh=new Tt,Gr=new O,ni=new ys,ca=new ys,fn=new O;class ct extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?t0:e0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ni.min,ca.min),ni.expandByPoint(fn),fn.addVectors(ni.max,ca.max),ni.expandByPoint(fn)):(ni.expandByPoint(ca.min),ni.expandByPoint(ca.max))}ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),fn.add(Gr)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new O,l[M]=new O;const c=new O,h=new O,u=new O,d=new ue,f=new ue,g=new ue,v=new O,p=new O;function m(M,A,_){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[M].add(v),a[A].add(v),a[_].add(v),l[M].add(p),l[A].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,A=y.length;M<A;++M){const _=y[M],S=_.start,I=_.count;for(let z=S,B=S+I;z<B;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new O,w=new O,E=new O,b=new O;function T(M){E.fromBufferAttribute(i,M),b.copy(E);const A=a[M];x.copy(A),x.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(b,A);const S=w.dot(l[M])<0?-1:1;o.setXYZW(M,x.x,x.y,x.z,S)}for(let M=0,A=y.length;M<A;++M){const _=y[M],S=_.start,I=_.count;for(let z=S,B=S+I;z<B;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new Ye,tr=new Jo,fl=new Ki,ap=new O,pl=new O,ml=new O,gl=new O,uh=new O,_l=new O,lp=new O,vl=new O;class ge extends Tt{constructor(e=new ct,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(uh.fromBufferAttribute(u,e),o?_l.addScaledVector(uh,h):_l.addScaledVector(uh.sub(t),h))}t.add(_l)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(fl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(fl,ap)===null||tr.origin.distanceToSquared(ap)>(e.far-e.near)**2))&&(op.copy(s).invert(),tr.copy(e.ray).applyMatrix4(op),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=y,E=x;w<E;w+=3){const b=a.getX(w),T=a.getX(w+1),M=a.getX(w+2);i=xl(this,m,e,n,c,h,u,b,T,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);i=xl(this,o,e,n,c,h,u,y,x,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=y,E=x;w<E;w+=3){const b=w,T=w+1,M=w+2;i=xl(this,m,e,n,c,h,u,b,T,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,x=p+1,w=p+2;i=xl(this,o,e,n,c,h,u,y,x,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Nw(r,e,t,n,i,s,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ms,a),l===null)return null;vl.copy(a),vl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:r}}function xl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,pl),r.getVertexPosition(l,ml),r.getVertexPosition(c,gl);const h=Nw(r,e,t,n,pl,ml,gl,lp);if(h){const u=new O;Li.getBarycoord(lp,pl,ml,gl,u),i&&(h.uv=Li.getInterpolatedAttribute(i,a,l,c,u,new ue)),s&&(h.uv1=Li.getInterpolatedAttribute(s,a,l,c,u,new ue)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Li.getNormal(pl,ml,gl,d.normal),h.face=d,h.barycoord=u}return h}class sn extends ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(v,p,m,y,x,w,E,b,T,M,A){const _=w/T,S=E/M,I=w/2,z=E/2,B=b/2,G=T+1,U=M+1;let $=0,Y=0;const ae=new O;for(let ie=0;ie<U;ie++){const pe=ie*S-z;for(let Oe=0;Oe<G;Oe++){const ke=Oe*_-I;ae[v]=ke*y,ae[p]=pe*x,ae[m]=B,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[p]=0,ae[m]=b>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Oe/T),u.push(1-ie/M),$+=1}}for(let ie=0;ie<M;ie++)for(let pe=0;pe<T;pe++){const Oe=d+pe+G*ie,ke=d+pe+G*(ie+1),Q=d+(pe+1)+G*(ie+1),he=d+(pe+1)+G*ie;l.push(Oe,ke,he),l.push(ke,Q,he),Y+=6}a.addGroup(f,Y,A),f+=Y,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const n=Oo(r[t]);for(const i in n)e[i]=n[i]}return e}function Fw(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function n0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const i0={clone:Oo,merge:In};var Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=Fw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class s0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new O,cp=new ue,hp=new ue;class bn extends s0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,cp,hp),t.subVectors(hp,cp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,jr=1;class r0 extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(Wr,jr,e,t);i.layers=this.layers,this.add(i);const s=new bn(Wr,jr,e,t);s.layers=this.layers,this.add(s);const o=new bn(Wr,jr,e,t);o.layers=this.layers,this.add(o);const a=new bn(Wr,jr,e,t);a.layers=this.layers,this.add(a);const l=new bn(Wr,jr,e,t);l.layers=this.layers,this.add(l);const c=new bn(Wr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fs)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yd extends ln{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Io,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends Gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Bs});s.uniforms.tEquirect.value=t;const o=new ge(i,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=an),new r0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const dh=new O,Bw=new O,zw=new Qe;class Is{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dh.subVectors(n,t).cross(Bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zw.getNormalMatrix(e),i=this.coplanarPoint(dh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Ki,yl=new O;class $d{constructor(e=new Is,t=new Is,n=new Is,i=new Is,s=new Is,o=new Is){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fs){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],p=i[11],m=i[12],y=i[13],x=i[14],w=i[15];if(n[0].setComponents(l-s,d-c,p-f,w-m).normalize(),n[1].setComponents(l+s,d+c,p+f,w+m).normalize(),n[2].setComponents(l+o,d+h,p+g,w+y).normalize(),n[3].setComponents(l-o,d-h,p-g,w-y).normalize(),n[4].setComponents(l-a,d-u,p-v,w-x).normalize(),t===fs)n[5].setComponents(l+a,d+u,p+v,w+x).normalize();else if(t===cc)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yl.x=i.normal.x>0?e.max.x:e.min.x,yl.y=i.normal.y>0?e.max.y:e.min.y,yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kw(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Rt extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let x=0;x<c;x++){const w=x*u-s;g.push(w,-y,0),v.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,w=y+c*(m+1),E=y+1+c*(m+1),b=y+1+c*m;f.push(x,w,b),f.push(w,E,b)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hw=`#ifdef USE_ALPHAHASH
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
#endif`,Gw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
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
#endif`,Yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$w=`#ifdef USE_BATCHING
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
#endif`,Kw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eS=`#ifdef USE_IRIDESCENCE
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
#endif`,tS=`#ifdef USE_BUMPMAP
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hS=`#define PI 3.141592653589793
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
} // validated`,uS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dS=`vec3 transformedNormal = objectNormal;
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
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",vS=`
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
}`,xS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CS=`#ifdef USE_GRADIENTMAP
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
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
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
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,NS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,US=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BS=`PhysicalMaterial material;
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
#endif`,zS=`struct PhysicalMaterial {
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
}`,kS=`
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KS=`#if defined( USE_POINTS_UV )
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
#endif`,ZS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`#ifdef USE_MORPHTARGETS
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
#endif`,ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cb=`#ifdef USE_NORMALMAP
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
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tb=`float getShadowMask() {
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
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,qb=`#if DEPTH_PACKING == 3200
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
}`,Yb=`#define DISTANCE
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
}`,$b=`#define DISTANCE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,rT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,aT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,cT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,fT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,xT=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Vw,alphahash_pars_fragment:Hw,alphamap_fragment:Gw,alphamap_pars_fragment:Ww,alphatest_fragment:jw,alphatest_pars_fragment:Xw,aomap_fragment:qw,aomap_pars_fragment:Yw,batching_pars_vertex:$w,batching_vertex:Kw,begin_vertex:Zw,beginnormal_vertex:Jw,bsdfs:Qw,iridescence_fragment:eS,bumpmap_pars_fragment:tS,clipping_planes_fragment:nS,clipping_planes_pars_fragment:iS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:rS,color_fragment:oS,color_pars_fragment:aS,color_pars_vertex:lS,color_vertex:cS,common:hS,cube_uv_reflection_fragment:uS,defaultnormal_vertex:dS,displacementmap_pars_vertex:fS,displacementmap_vertex:pS,emissivemap_fragment:mS,emissivemap_pars_fragment:gS,colorspace_fragment:_S,colorspace_pars_fragment:vS,envmap_fragment:xS,envmap_common_pars_fragment:yS,envmap_pars_fragment:MS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:DS,envmap_vertex:SS,fog_vertex:bS,fog_pars_vertex:TS,fog_fragment:AS,fog_pars_fragment:ES,gradientmap_pars_fragment:CS,lightmap_pars_fragment:PS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:LS,lights_pars_begin:IS,lights_toon_fragment:NS,lights_toon_pars_fragment:FS,lights_phong_fragment:US,lights_phong_pars_fragment:OS,lights_physical_fragment:BS,lights_physical_pars_fragment:zS,lights_fragment_begin:kS,lights_fragment_maps:VS,lights_fragment_end:HS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:jS,logdepthbuf_vertex:XS,map_fragment:qS,map_pars_fragment:YS,map_particle_fragment:$S,map_particle_pars_fragment:KS,metalnessmap_fragment:ZS,metalnessmap_pars_fragment:JS,morphinstance_vertex:QS,morphcolor_vertex:eb,morphnormal_vertex:tb,morphtarget_pars_vertex:nb,morphtarget_vertex:ib,normal_fragment_begin:sb,normal_fragment_maps:rb,normal_pars_fragment:ob,normal_pars_vertex:ab,normal_vertex:lb,normalmap_pars_fragment:cb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:db,iridescence_pars_fragment:fb,opaque_fragment:pb,packing:mb,premultiplied_alpha_fragment:gb,project_vertex:_b,dithering_fragment:vb,dithering_pars_fragment:xb,roughnessmap_fragment:yb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Sb,shadowmap_vertex:bb,shadowmask_pars_fragment:Tb,skinbase_vertex:Ab,skinning_pars_vertex:Eb,skinning_vertex:Cb,skinnormal_vertex:Pb,specularmap_fragment:Rb,specularmap_pars_fragment:Lb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Db,transmission_fragment:Nb,transmission_pars_fragment:Fb,uv_pars_fragment:Ub,uv_pars_vertex:Ob,uv_vertex:Bb,worldpos_vertex:zb,background_vert:kb,background_frag:Vb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Wb,cube_frag:jb,depth_vert:Xb,depth_frag:qb,distanceRGBA_vert:Yb,distanceRGBA_frag:$b,equirect_vert:Kb,equirect_frag:Zb,linedashed_vert:Jb,linedashed_frag:Qb,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:sT,meshmatcap_frag:rT,meshnormal_vert:oT,meshnormal_frag:aT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:hT,meshphysical_frag:uT,meshtoon_vert:dT,meshtoon_frag:fT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},Me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zi={basic:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:In([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:In([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:In([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:In([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:In([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:In([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:In([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:In([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:In([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:In([Me.lights,Me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zi.physical={uniforms:In([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ml={r:0,b:0,g:0},ir=new ji,yT=new Ye;function MT(r,e,t,n,i,s,o){const a=new xe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const w=g(y);w===null?m(a,l):w&&w.isColor&&(m(w,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===bc)?(h===void 0&&(h=new ge(new sn(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Oo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ir.copy(x.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(ir)),h.material.toneMapped=lt.getTransfer(w.colorSpace)!==It,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ge(new Rt(2,2),new Nt({name:"BackgroundMaterial",uniforms:Oo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Ml,n0(r)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p}}function wT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(_,S,I,z,B){let G=!1;const U=u(z,I,S);s!==U&&(s=U,c(s.object)),G=f(_,z,I,B),G&&g(_,z,I,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,w(_,S,I,z),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function h(_){return r.deleteVertexArray(_)}function u(_,S,I){const z=I.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let G=B[S.id];G===void 0&&(G={},B[S.id]=G);let U=G[z];return U===void 0&&(U=d(l()),G[z]=U),U}function d(_){const S=[],I=[],z=[];for(let B=0;B<t;B++)S[B]=0,I[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,S,I,z){const B=s.attributes,G=S.attributes;let U=0;const $=I.getAttributes();for(const Y in $)if($[Y].location>=0){const ie=B[Y];let pe=G[Y];if(pe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;U++}return s.attributesNum!==U||s.index!==z}function g(_,S,I,z){const B={},G=S.attributes;let U=0;const $=I.getAttributes();for(const Y in $)if($[Y].location>=0){let ie=G[Y];ie===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));const pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),B[Y]=pe,U++}s.attributes=B,s.attributesNum=U,s.index=z}function v(){const _=s.newAttributes;for(let S=0,I=_.length;S<I;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){const I=s.newAttributes,z=s.enabledAttributes,B=s.attributeDivisors;I[_]=1,z[_]===0&&(r.enableVertexAttribArray(_),z[_]=1),B[_]!==S&&(r.vertexAttribDivisor(_,S),B[_]=S)}function y(){const _=s.newAttributes,S=s.enabledAttributes;for(let I=0,z=S.length;I<z;I++)S[I]!==_[I]&&(r.disableVertexAttribArray(I),S[I]=0)}function x(_,S,I,z,B,G,U){U===!0?r.vertexAttribIPointer(_,S,I,B,G):r.vertexAttribPointer(_,S,I,z,B,G)}function w(_,S,I,z){v();const B=z.attributes,G=I.getAttributes(),U=S.defaultAttributeValues;for(const $ in G){const Y=G[$];if(Y.location>=0){let ae=B[$];if(ae===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ae!==void 0){const ie=ae.normalized,pe=ae.itemSize,Oe=e.get(ae);if(Oe===void 0)continue;const ke=Oe.buffer,Q=Oe.type,he=Oe.bytesPerElement,be=Q===r.INT||Q===r.UNSIGNED_INT||ae.gpuType===Od;if(ae.isInterleavedBufferAttribute){const ve=ae.data,ne=ve.stride,R=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let F=0;F<Y.locationSize;F++)m(Y.location+F,ve.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let F=0;F<Y.locationSize;F++)p(Y.location+F);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let F=0;F<Y.locationSize;F++)x(Y.location+F,pe/Y.locationSize,Q,ie,ne*he,(R+pe/Y.locationSize*F)*he,be)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve,ae.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<Y.locationSize;ve++)p(Y.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let ve=0;ve<Y.locationSize;ve++)x(Y.location+ve,pe/Y.locationSize,Q,ie,pe*he,pe/Y.locationSize*ve*he,be)}}else if(U!==void 0){const ie=U[$];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(Y.location,ie);break;case 3:r.vertexAttrib3fv(Y.location,ie);break;case 4:r.vertexAttrib4fv(Y.location,ie);break;default:r.vertexAttrib1fv(Y.location,ie)}}}}y()}function E(){M();for(const _ in n){const S=n[_];for(const I in S){const z=S[I];for(const B in z)h(z[B].object),delete z[B];delete S[I]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const I in S){const z=S[I];for(const B in z)h(z[B].object),delete z[B];delete S[I]}delete n[_.id]}function T(_){for(const S in n){const I=n[S];if(I[_.id]===void 0)continue;const z=I[_.id];for(const B in z)h(z[B].object),delete z[B];delete I[_.id]}}function M(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function ST(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bT(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==zn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const M=T===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_s&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!M)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:E,maxSamples:b}}function TT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Is,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,x=y*4;let w=m.clippingState||null;l.value=w,w=h(g,d,x,f);for(let E=0;E!==x;++E)w[E]=t[E];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,w=f;x!==v;++x,w+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function AT(r){let e=new WeakMap;function t(o,a){return a===Hs?o.mapping=Io:a===su&&(o.mapping=Do),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hs||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new o0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ka extends s0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,up=[.125,.215,.35,.446,.526,.582],mr=20,fh=new Ka,dp=new xe;let ph=null,mh=0,gh=0,_h=!1;const lr=(1+Math.sqrt(5))/2,Xr=1/lr,fp=[new O(-lr,Xr,0),new O(lr,Xr,0),new O(-Xr,0,lr),new O(Xr,0,lr),new O(0,lr,-Xr),new O(0,lr,Xr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Vi,format:zn,colorSpace:cn,depthBuffer:!1},i=mp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(s)),this._blurMaterial=CT(s,e,t)}return i}_compileMaterial(e){const t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,fh)}_sceneToCubeUV(e,t,n,i){const a=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dp),h.toneMapping=ps,h.autoClear=!1;const f=new Mt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new ge(new sn,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(dp),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;wl(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Io||e.mapping===Do;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fp[(i-s-1)%fp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ge(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mr-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):mr;p>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);const m=[];let y=0;for(let T=0;T<mr;++T){const M=T/v,A=Math.exp(-M*M/2);m.push(A),T===0?y+=A:T<p&&(y+=2*A)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const w=this._sizeLods[i],E=3*w*(i>x-eo?i-x+eo:0),b=4*(this._cubeSize-w);wl(t,E,b,3*w,2*w),l.setRenderTarget(t),l.render(u,fh)}}function ET(r){const e=[],t=[],n=[];let i=r;const s=r-eo+1+up.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-eo?l=up[o-r+eo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),x=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,M=b>2?0:-1,A=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];y.set(A,v*g*b),x.set(d,p*g*b);const _=[b,b,b,b,b,b];w.set(_,m*g*b)}const E=new ct;E.setAttribute("position",new ot(y,v)),E.setAttribute("uv",new ot(x,p)),E.setAttribute("faceIndex",new ot(w,m)),e.push(E),i>eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mp(r,e,t){const n=new Gs(r,e,t);return n.texture.mapping=bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function CT(r,e,t){const n=new Float32Array(mr),i=new O(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function gp(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function _p(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function PT(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hs||l===su,h=l===Io||l===Do;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pp(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new pp(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function RT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&jl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function LT(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,w=y.length;x<w;x+=3){const E=y[x+0],b=y[x+1],T=y[x+2];d.push(E,b,b,T,T,E)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const E=x+0,b=x+1,T=x+2;d.push(E,b,b,T,T,E)}}else return;const p=new(Kg(d)?t0:e0)(d,1);p.version=v;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function IT(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,n,v[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function DT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function NT(r,e,t){const n=new WeakMap,i=new ut;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let A=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let w=a.attributes.position.count*x,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*E*4*u),T=new Jg(b,w,E,u);T.type=An,T.needsUpdate=!0;const M=x*4;for(let _=0;_<u;_++){const S=p[_],I=m[_],z=y[_],B=w*E*4*_;for(let G=0;G<S.count;G++){const U=G*M;f===!0&&(i.fromBufferAttribute(S,G),b[B+U+0]=i.x,b[B+U+1]=i.y,b[B+U+2]=i.z,b[B+U+3]=0),g===!0&&(i.fromBufferAttribute(I,G),b[B+U+4]=i.x,b[B+U+5]=i.y,b[B+U+6]=i.z,b[B+U+7]=0),v===!0&&(i.fromBufferAttribute(z,G),b[B+U+8]=i.x,b[B+U+9]=i.y,b[B+U+10]=i.z,b[B+U+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new ue(w,E)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function FT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class l0 extends ln{constructor(e,t,n,i,s,o,a,l,c,h=oo){if(h!==oo&&h!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oo&&(n=Sr),n===void 0&&h===Fo&&(n=No),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const c0=new ln,vp=new l0(1,1),h0=new Jg,u0=new Mw,d0=new Yd,xp=[],yp=[],Mp=new Float32Array(16),wp=new Float32Array(9),Sp=new Float32Array(4);function Qo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xp[i];if(s===void 0&&(s=new Float32Array(i),xp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cc(r,e){let t=yp[e];t===void 0&&(t=new Int32Array(e),yp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function UT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function OT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function BT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function zT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function kT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Sp.set(n),r.uniformMatrix2fv(this.addr,!1,Sp),un(t,n)}}function VT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;wp.set(n),r.uniformMatrix3fv(this.addr,!1,wp),un(t,n)}}function HT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Mp.set(n),r.uniformMatrix4fv(this.addr,!1,Mp),un(t,n)}}function GT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function jT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function XT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function qT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function YT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function $T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function KT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function ZT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vp.compareFunction=$g,s=vp):s=c0,t.setTexture2D(e||s,i)}function JT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||u0,i)}function QT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||d0,i)}function eA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||h0,i)}function tA(r){switch(r){case 5126:return UT;case 35664:return OT;case 35665:return BT;case 35666:return zT;case 35674:return kT;case 35675:return VT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return qT;case 36294:return YT;case 36295:return $T;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return eA}}function nA(r,e){r.uniform1fv(this.addr,e)}function iA(r,e){const t=Qo(e,this.size,2);r.uniform2fv(this.addr,t)}function sA(r,e){const t=Qo(e,this.size,3);r.uniform3fv(this.addr,t)}function rA(r,e){const t=Qo(e,this.size,4);r.uniform4fv(this.addr,t)}function oA(r,e){const t=Qo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function aA(r,e){const t=Qo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lA(r,e){const t=Qo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cA(r,e){r.uniform1iv(this.addr,e)}function hA(r,e){r.uniform2iv(this.addr,e)}function uA(r,e){r.uniform3iv(this.addr,e)}function dA(r,e){r.uniform4iv(this.addr,e)}function fA(r,e){r.uniform1uiv(this.addr,e)}function pA(r,e){r.uniform2uiv(this.addr,e)}function mA(r,e){r.uniform3uiv(this.addr,e)}function gA(r,e){r.uniform4uiv(this.addr,e)}function _A(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||c0,s[o])}function vA(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||u0,s[o])}function xA(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||d0,s[o])}function yA(r,e,t){const n=this.cache,i=e.length,s=Cc(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||h0,s[o])}function MA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return hA;case 35668:case 35672:return uA;case 35669:case 35673:return dA;case 5125:return fA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return yA}}class wA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tA(t.type)}}class SA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MA(t.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function bp(r,e){r.seq.push(e),r.map[e.id]=e}function TA(r,e,t){const n=r.name,i=n.length;for(vh.lastIndex=0;;){const s=vh.exec(n),o=vh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bp(t,c===void 0?new wA(a,r,e):new SA(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new bA(a),bp(t,u)),t=u}}}class Xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);TA(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Tp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const AA=37297;let EA=0;function CA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function PA(r){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(r);let n;switch(e===t?n="":e===lc&&t===ac?n="LinearDisplayP3ToLinearSRGB":e===ac&&t===lc&&(n="LinearSRGBToLinearDisplayP3"),r){case cn:case Ec:return[n,"LinearTransferOETF"];case nt:case jd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ap(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+CA(r.getShaderSource(e),o)}else return i}function RA(r,e){const t=PA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function LA(r,e){let t;switch(e){case Ng:t="Linear";break;case Fg:t="Reinhard";break;case Ug:t="Cineon";break;case Vs:t="ACESFilmic";break;case D1:t="AgX";break;case N1:t="Neutral";break;case I1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new O;function IA(){lt.getLuminanceCoefficients(Sl);const r=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function NA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function xa(r){return r!==""}function Ep(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(r){return r.replace(UA,BA)}const OA=new Map;function BA(r,e){let t=Je[e];if(t===void 0){const n=OA.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(r){return r.replace(zA,kA)}function kA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function VA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ni?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function HA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Io:case Do:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function WA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dg:e="ENVMAP_BLENDING_MULTIPLY";break;case R1:e="ENVMAP_BLENDING_MIX";break;case L1:e="ENVMAP_BLENDING_ADD";break}return e}function jA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function XA(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VA(t),c=HA(t),h=GA(t),u=WA(t),d=jA(t),f=DA(t),g=NA(s),v=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(p=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Je.tonemapping_pars_fragment:"",t.toneMapping!==ps?LA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,RA("linearToOutputTexel",t.outputColorSpace),IA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=Du(o),o=Ep(o,t),o=Cp(o,t),a=Du(a),a=Ep(a,t),a=Cp(a,t),o=Pp(o),a=Pp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,w=y+m+a,E=Tp(i,i.VERTEX_SHADER,x),b=Tp(i,i.FRAGMENT_SHADER,w);i.attachShader(v,E),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(S){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(b).trim();let G=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,E,b);else{const $=Ap(i,E,"vertex"),Y=Ap(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+$+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||B==="")&&(U=!1);U&&(S.diagnostics={runnable:G,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(E),i.deleteShader(b),M=new Xl(i,v),A=FA(i,v)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,AA)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}let qA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $A(e),t.set(e,n)),n}}class $A{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function KA(r,e,t,n,i,s,o){const a=new qd,l=new YA,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,I,z,B){const G=z.fog,U=B.geometry,$=_.isMeshStandardMaterial?z.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),ae=Y&&Y.mapping===bc?Y.image.height:null,ie=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const pe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Oe=pe!==void 0?pe.length:0;let ke=0;U.morphAttributes.position!==void 0&&(ke=1),U.morphAttributes.normal!==void 0&&(ke=2),U.morphAttributes.color!==void 0&&(ke=3);let Q,he,be,ve;if(ie){const Fn=zi[ie];Q=Fn.vertexShader,he=Fn.fragmentShader}else Q=_.vertexShader,he=_.fragmentShader,l.update(_),be=l.getVertexShaderID(_),ve=l.getFragmentShaderID(_);const ne=r.getRenderTarget(),R=B.isInstancedMesh===!0,F=B.isBatchedMesh===!0,k=!!_.map,H=!!_.matcap,L=!!Y,K=!!_.aoMap,se=!!_.lightMap,oe=!!_.bumpMap,de=!!_.normalMap,Te=!!_.displacementMap,_e=!!_.emissiveMap,N=!!_.metalnessMap,P=!!_.roughnessMap,X=_.anisotropy>0,te=_.clearcoat>0,le=_.dispersion>0,re=_.iridescence>0,Ne=_.sheen>0,ye=_.transmission>0,Ce=X&&!!_.anisotropyMap,st=te&&!!_.clearcoatMap,fe=te&&!!_.clearcoatNormalMap,Pe=te&&!!_.clearcoatRoughnessMap,je=re&&!!_.iridescenceMap,Xe=re&&!!_.iridescenceThicknessMap,Le=Ne&&!!_.sheenColorMap,rt=Ne&&!!_.sheenRoughnessMap,$e=!!_.specularMap,At=!!_.specularColorMap,W=!!_.specularIntensityMap,Ae=ye&&!!_.transmissionMap,ee=ye&&!!_.thicknessMap,ce=!!_.gradientMap,we=!!_.alphaMap,Ee=_.alphaTest>0,at=!!_.alphaHash,Qt=!!_.extensions;let Nn=ps;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Nn=r.toneMapping);const ht={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:he,defines:_.defines,customVertexShaderID:be,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:F,batchingColor:F&&B._colorsTexture!==null,instancing:R,instancingColor:R&&B.instanceColor!==null,instancingMorph:R&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:cn,alphaToCoverage:!!_.alphaToCoverage,map:k,matcap:H,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:ae,aoMap:K,lightMap:se,bumpMap:oe,normalMap:de,displacementMap:f&&Te,emissiveMap:_e,normalMapObjectSpace:de&&_.normalMapType===H1,normalMapTangentSpace:de&&_.normalMapType===Ac,metalnessMap:N,roughnessMap:P,anisotropy:X,anisotropyMap:Ce,clearcoat:te,clearcoatMap:st,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:le,iridescence:re,iridescenceMap:je,iridescenceThicknessMap:Xe,sheen:Ne,sheenColorMap:Le,sheenRoughnessMap:rt,specularMap:$e,specularColorMap:At,specularIntensityMap:W,transmission:ye,transmissionMap:Ae,thicknessMap:ee,gradientMap:ce,opaque:_.transparent===!1&&_.blending===ro&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:Ee,alphaHash:at,combine:_.combine,mapUv:k&&p(_.map.channel),aoMapUv:K&&p(_.aoMap.channel),lightMapUv:se&&p(_.lightMap.channel),bumpMapUv:oe&&p(_.bumpMap.channel),normalMapUv:de&&p(_.normalMap.channel),displacementMapUv:Te&&p(_.displacementMap.channel),emissiveMapUv:_e&&p(_.emissiveMap.channel),metalnessMapUv:N&&p(_.metalnessMap.channel),roughnessMapUv:P&&p(_.roughnessMap.channel),anisotropyMapUv:Ce&&p(_.anisotropyMap.channel),clearcoatMapUv:st&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&p(_.sheenRoughnessMap.channel),specularMapUv:$e&&p(_.specularMap.channel),specularColorMapUv:At&&p(_.specularColorMap.channel),specularIntensityMapUv:W&&p(_.specularIntensityMap.channel),transmissionMapUv:Ae&&p(_.transmissionMap.channel),thicknessMapUv:ee&&p(_.thicknessMap.channel),alphaMapUv:we&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(k||we),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nn,decodeVideoTexture:k&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||F)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function y(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(S,_),w(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function w(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function E(_){const S=v[_.type];let I;if(S){const z=zi[S];I=i0.clone(z.uniforms)}else I=_.uniforms;return I}function b(_,S){let I;for(let z=0,B=h.length;z<B;z++){const G=h[z];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new XA(r,S,_,s),h.push(I)),I}function T(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function M(_){l.remove(_)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:E,acquireProgram:b,releaseProgram:T,releaseShaderCache:M,programs:h,dispose:A}}function ZA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function JA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ip(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||JA),n.length>1&&n.sort(d||Lp),i.length>1&&i.sort(d||Lp)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function QA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ip,r.set(n,[o])):i>=s.length?(o=new Ip,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function eE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new xe};break;case"SpotLight":t={position:new O,direction:new O,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function tE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nE=0;function iE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sE(r){const e=new eE,t=tE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new Ye,o=new Ye;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,x=0,w=0,E=0,b=0,T=0;c.sort(iE);for(let A=0,_=c.length;A<_;A++){const S=c[A],I=S.color,z=S.intensity,B=S.distance,G=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*z,u+=I.g*z,d+=I.b*z;else if(S.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(S.sh.coefficients[U],z);T++}else if(S.isDirectionalLight){const U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,Y=t.get(S);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=U,f++}else if(S.isSpotLight){const U=e.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(I).multiplyScalar(z),U.distance=B,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,n.spot[v]=U;const $=S.shadow;if(S.map&&(n.spotLightMap[E]=S.map,E++,$.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[v]=$.matrix,S.castShadow){const Y=t.get(S);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=G,w++}v++}else if(S.isRectAreaLight){const U=e.get(S);U.color.copy(I).multiplyScalar(z),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=U,p++}else if(S.isPointLight){const U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){const $=S.shadow,Y=t.get(S);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=U,g++}else if(S.isHemisphereLight){const U=e.get(S);U.skyColor.copy(S.color).multiplyScalar(z),U.groundColor.copy(S.groundColor).multiplyScalar(z),n.hemi[m]=U,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==g||M.spotLength!==v||M.rectAreaLength!==p||M.hemiLength!==m||M.numDirectionalShadows!==y||M.numPointShadows!==x||M.numSpotShadows!==w||M.numSpotMaps!==E||M.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,M.directionalLength=f,M.pointLength=g,M.spotLength=v,M.rectAreaLength=p,M.hemiLength=m,M.numDirectionalShadows=y,M.numPointShadows=x,M.numSpotShadows=w,M.numSpotMaps=E,M.numLightProbes=T,n.version=nE++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(x.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Dp(r){const e=new sE(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Dp(r),e.set(i,[a])):s>=o.length?(a=new Dp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pc extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
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
}`;function cE(r,e,t){let n=new $d;const i=new ue,s=new ue,o=new ut,a=new Pc({depthPacking:Tc}),l=new oE,c={},h=t.maxTextureSize,u={[ms]:vn,[vn]:ms,[_n]:_n},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:aE,fragmentShader:lE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ge(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let m=this.type;this.render=function(b,T,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const A=r.getRenderTarget(),_=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Bs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==as&&this.type===as,B=m===as&&this.type!==as;for(let G=0,U=b.length;G<U;G++){const $=b[G],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ae=Y.getFrameExtents();if(i.multiply(ae),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||B===!0){const pe=this.type!==as?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gs(i.x,i.y,pe),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ie=Y.getViewportCount();for(let pe=0;pe<ie;pe++){const Oe=Y.getViewport(pe);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),I.viewport(o),Y.updateMatrices($,pe),n=Y.getFrustum(),w(T,M,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===as&&y(Y,M),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(A,_,S)};function y(b,T){const M=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gs(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,M,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,M,f,v,null)}function x(b,T,M,A){let _=null;const S=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)_=S;else if(_=M.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=_.uuid,z=T.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let G=B[z];G===void 0&&(G=_.clone(),B[z]=G,T.addEventListener("dispose",E)),_=G}if(_.visible=T.visible,_.wireframe=T.wireframe,A===as?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,M.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=r.properties.get(_);I.light=M}return _}function w(b,T,M,A,_){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===as)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const z=e.update(b),B=b.material;if(Array.isArray(B)){const G=z.groups;for(let U=0,$=G.length;U<$;U++){const Y=G[U],ae=B[Y.materialIndex];if(ae&&ae.visible){const ie=x(b,ae,A,_);b.onBeforeShadow(r,b,T,M,z,ie,Y),r.renderBufferDirect(M,null,z,ie,b,Y),b.onAfterShadow(r,b,T,M,z,ie,Y)}}}else if(B.visible){const G=x(b,B,A,_);b.onBeforeShadow(r,b,T,M,z,G,null),r.renderBufferDirect(M,null,z,G,b,null),b.onAfterShadow(r,b,T,M,z,G,null)}}const I=b.children;for(let z=0,B=I.length;z<B;z++)w(I[z],T,M,A,_)}function E(b){b.target.removeEventListener("dispose",E);for(const M in c){const A=c[M],_=b.target.uuid;_ in A&&(A[_].dispose(),delete A[_])}}}const hE={[Zh]:Jh,[Qh]:nu,[eu]:iu,[Lo]:tu,[Jh]:Zh,[nu]:Qh,[iu]:eu,[tu]:Lo};function uE(r){function e(){let W=!1;const Ae=new ut;let ee=null;const ce=new ut(0,0,0,0);return{setMask:function(we){ee!==we&&!W&&(r.colorMask(we,we,we,we),ee=we)},setLocked:function(we){W=we},setClear:function(we,Ee,at,Qt,Nn){Nn===!0&&(we*=Qt,Ee*=Qt,at*=Qt),Ae.set(we,Ee,at,Qt),ce.equals(Ae)===!1&&(r.clearColor(we,Ee,at,Qt),ce.copy(Ae))},reset:function(){W=!1,ee=null,ce.set(-1,0,0,0)}}}function t(){let W=!1,Ae=!1,ee=null,ce=null,we=null;return{setReversed:function(Ee){Ae=Ee},setTest:function(Ee){Ee?be(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!W&&(r.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(Ae&&(Ee=hE[Ee]),ce!==Ee){switch(Ee){case Zh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case Qh:r.depthFunc(r.LESS);break;case Lo:r.depthFunc(r.LEQUAL);break;case eu:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case nu:r.depthFunc(r.GREATER);break;case iu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){we!==Ee&&(r.clearDepth(Ee),we=Ee)},reset:function(){W=!1,ee=null,ce=null,we=null}}}function n(){let W=!1,Ae=null,ee=null,ce=null,we=null,Ee=null,at=null,Qt=null,Nn=null;return{setTest:function(ht){W||(ht?be(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(ht){Ae!==ht&&!W&&(r.stencilMask(ht),Ae=ht)},setFunc:function(ht,Fn,es){(ee!==ht||ce!==Fn||we!==es)&&(r.stencilFunc(ht,Fn,es),ee=ht,ce=Fn,we=es)},setOp:function(ht,Fn,es){(Ee!==ht||at!==Fn||Qt!==es)&&(r.stencilOp(ht,Fn,es),Ee=ht,at=Fn,Qt=es)},setLocked:function(ht){W=ht},setClear:function(ht){Nn!==ht&&(r.clearStencil(ht),Nn=ht)},reset:function(){W=!1,Ae=null,ee=null,ce=null,we=null,Ee=null,at=null,Qt=null,Nn=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,x=null,w=null,E=null,b=new xe(0,0,0),T=0,M=!1,A=null,_=null,S=null,I=null,z=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec($)[1]),G=U>=1):$.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=U>=2);let Y=null,ae={};const ie=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Oe=new ut().fromArray(ie),ke=new ut().fromArray(pe);function Q(W,Ae,ee,ce){const we=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(W,Ee),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<ee;at++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ae+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Ee}const he={};he[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),be(r.DEPTH_TEST),s.setFunc(Lo),se(!1),oe(Vf),be(r.CULL_FACE),L(Bs);function be(W){c[W]!==!0&&(r.enable(W),c[W]=!0)}function ve(W){c[W]!==!1&&(r.disable(W),c[W]=!1)}function ne(W,Ae){return h[W]!==Ae?(r.bindFramebuffer(W,Ae),h[W]=Ae,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ae),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function R(W,Ae){let ee=d,ce=!1;if(W){ee=u.get(Ae),ee===void 0&&(ee=[],u.set(Ae,ee));const we=W.textures;if(ee.length!==we.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,at=we.length;Ee<at;Ee++)ee[Ee]=r.COLOR_ATTACHMENT0+Ee;ee.length=we.length,ce=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,ce=!0);ce&&r.drawBuffers(ee)}function F(W){return f!==W?(r.useProgram(W),f=W,!0):!1}const k={[pr]:r.FUNC_ADD,[f1]:r.FUNC_SUBTRACT,[p1]:r.FUNC_REVERSE_SUBTRACT};k[m1]=r.MIN,k[g1]=r.MAX;const H={[_1]:r.ZERO,[v1]:r.ONE,[x1]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[T1]:r.SRC_ALPHA_SATURATE,[S1]:r.DST_COLOR,[M1]:r.DST_ALPHA,[y1]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[b1]:r.ONE_MINUS_DST_COLOR,[w1]:r.ONE_MINUS_DST_ALPHA,[A1]:r.CONSTANT_COLOR,[E1]:r.ONE_MINUS_CONSTANT_COLOR,[C1]:r.CONSTANT_ALPHA,[P1]:r.ONE_MINUS_CONSTANT_ALPHA};function L(W,Ae,ee,ce,we,Ee,at,Qt,Nn,ht){if(W===Bs){g===!0&&(ve(r.BLEND),g=!1);return}if(g===!1&&(be(r.BLEND),g=!0),W!==d1){if(W!==v||ht!==M){if((p!==pr||x!==pr)&&(r.blendEquation(r.FUNC_ADD),p=pr,x=pr),ht)switch(W){case ro:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gs:r.blendFunc(r.ONE,r.ONE);break;case Hf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ro:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}m=null,y=null,w=null,E=null,b.set(0,0,0),T=0,v=W,M=ht}return}we=we||Ae,Ee=Ee||ee,at=at||ce,(Ae!==p||we!==x)&&(r.blendEquationSeparate(k[Ae],k[we]),p=Ae,x=we),(ee!==m||ce!==y||Ee!==w||at!==E)&&(r.blendFuncSeparate(H[ee],H[ce],H[Ee],H[at]),m=ee,y=ce,w=Ee,E=at),(Qt.equals(b)===!1||Nn!==T)&&(r.blendColor(Qt.r,Qt.g,Qt.b,Nn),b.copy(Qt),T=Nn),v=W,M=!1}function K(W,Ae){W.side===_n?ve(r.CULL_FACE):be(r.CULL_FACE);let ee=W.side===vn;Ae&&(ee=!ee),se(ee),W.blending===ro&&W.transparent===!1?L(Bs):L(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),i.setMask(W.colorWrite);const ce=W.stencilWrite;o.setTest(ce),ce&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Te(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){A!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),A=W)}function oe(W){W!==h1?(be(r.CULL_FACE),W!==_&&(W===Vf?r.cullFace(r.BACK):W===u1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),_=W}function de(W){W!==S&&(G&&r.lineWidth(W),S=W)}function Te(W,Ae,ee){W?(be(r.POLYGON_OFFSET_FILL),(I!==Ae||z!==ee)&&(r.polygonOffset(Ae,ee),I=Ae,z=ee)):ve(r.POLYGON_OFFSET_FILL)}function _e(W){W?be(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function N(W){W===void 0&&(W=r.TEXTURE0+B-1),Y!==W&&(r.activeTexture(W),Y=W)}function P(W,Ae,ee){ee===void 0&&(Y===null?ee=r.TEXTURE0+B-1:ee=Y);let ce=ae[ee];ce===void 0&&(ce={type:void 0,texture:void 0},ae[ee]=ce),(ce.type!==W||ce.texture!==Ae)&&(Y!==ee&&(r.activeTexture(ee),Y=ee),r.bindTexture(W,Ae||he[W]),ce.type=W,ce.texture=Ae)}function X(){const W=ae[Y];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(W){Oe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function Le(W){ke.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ke.copy(W))}function rt(W,Ae){let ee=l.get(Ae);ee===void 0&&(ee=new WeakMap,l.set(Ae,ee));let ce=ee.get(W);ce===void 0&&(ce=r.getUniformBlockIndex(Ae,W.name),ee.set(W,ce))}function $e(W,Ae){const ce=l.get(Ae).get(W);a.get(Ae)!==ce&&(r.uniformBlockBinding(Ae,ce,W.__bindingPointIndex),a.set(Ae,ce))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Y=null,ae={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,x=null,w=null,E=null,b=new xe(0,0,0),T=0,M=!1,A=null,_=null,S=null,I=null,z=null,Oe.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:be,disable:ve,bindFramebuffer:ne,drawBuffers:R,useProgram:F,setBlending:L,setMaterial:K,setFlipSided:se,setCullFace:oe,setLineWidth:de,setPolygonOffset:Te,setScissorTest:_e,activeTexture:N,bindTexture:P,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:le,texImage2D:Pe,texImage3D:je,updateUBOMapping:rt,uniformBlockBinding:$e,texStorage2D:st,texStorage3D:fe,texSubImage2D:re,texSubImage3D:Ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ce,scissor:Xe,viewport:Le,reset:At}}function Np(r,e,t,n){const i=dE(n);switch(t){case Hg:return r*e;case Wg:return r*e;case jg:return r*e*2;case kd:return r*e/i.components*i.byteLength;case Vd:return r*e/i.components*i.byteLength;case Xg:return r*e*2/i.components*i.byteLength;case Hd:return r*e*2/i.components*i.byteLength;case Gg:return r*e*3/i.components*i.byteLength;case zn:return r*e*4/i.components*i.byteLength;case Gd:return r*e*4/i.components*i.byteLength;case kl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(r,16)*Math.max(e,8)/4;case ru:case au:return Math.max(r,8)*Math.max(e,8)/2;case cu:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Au:case Eu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qg:case Cu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pu:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dE(r){switch(r){case _s:case zg:return{byteLength:1,components:1};case Ia:case kg:case Vi:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case Sr:case Od:case An:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,P){return f?new OffscreenCanvas(N,P):Ua("canvas")}function v(N,P,X){let te=1;const le=_e(N);if((le.width>X||le.height>X)&&(te=X/Math.max(le.width,le.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const re=Math.floor(te*le.width),Ne=Math.floor(te*le.height);u===void 0&&(u=g(re,Ne));const ye=P?g(re,Ne):u;return ye.width=re,ye.height=Ne,ye.getContext("2d").drawImage(N,0,0,re,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+Ne+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),N;return N}function p(N){return N.generateMipmaps&&N.minFilter!==zt&&N.minFilter!==an}function m(N){r.generateMipmap(N)}function y(N,P,X,te,le=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let re=P;if(P===r.RED&&(X===r.FLOAT&&(re=r.R32F),X===r.HALF_FLOAT&&(re=r.R16F),X===r.UNSIGNED_BYTE&&(re=r.R8)),P===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.R8UI),X===r.UNSIGNED_SHORT&&(re=r.R16UI),X===r.UNSIGNED_INT&&(re=r.R32UI),X===r.BYTE&&(re=r.R8I),X===r.SHORT&&(re=r.R16I),X===r.INT&&(re=r.R32I)),P===r.RG&&(X===r.FLOAT&&(re=r.RG32F),X===r.HALF_FLOAT&&(re=r.RG16F),X===r.UNSIGNED_BYTE&&(re=r.RG8)),P===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.RG8UI),X===r.UNSIGNED_SHORT&&(re=r.RG16UI),X===r.UNSIGNED_INT&&(re=r.RG32UI),X===r.BYTE&&(re=r.RG8I),X===r.SHORT&&(re=r.RG16I),X===r.INT&&(re=r.RG32I)),P===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.RGB8UI),X===r.UNSIGNED_SHORT&&(re=r.RGB16UI),X===r.UNSIGNED_INT&&(re=r.RGB32UI),X===r.BYTE&&(re=r.RGB8I),X===r.SHORT&&(re=r.RGB16I),X===r.INT&&(re=r.RGB32I)),P===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),X===r.UNSIGNED_INT&&(re=r.RGBA32UI),X===r.BYTE&&(re=r.RGBA8I),X===r.SHORT&&(re=r.RGBA16I),X===r.INT&&(re=r.RGBA32I)),P===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),P===r.RGBA){const Ne=le?oc:lt.getTransfer(te);X===r.FLOAT&&(re=r.RGBA32F),X===r.HALF_FLOAT&&(re=r.RGBA16F),X===r.UNSIGNED_BYTE&&(re=Ne===It?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(N,P){let X;return N?P===null||P===Sr||P===No?X=r.DEPTH24_STENCIL8:P===An?X=r.DEPTH32F_STENCIL8:P===Ia&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Sr||P===No?X=r.DEPTH_COMPONENT24:P===An?X=r.DEPTH_COMPONENT32F:P===Ia&&(X=r.DEPTH_COMPONENT16),X}function w(N,P){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==zt&&N.minFilter!==an?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function E(N){const P=N.target;P.removeEventListener("dispose",E),T(P),P.isVideoTexture&&h.delete(P)}function b(N){const P=N.target;P.removeEventListener("dispose",b),A(P)}function T(N){const P=n.get(N);if(P.__webglInit===void 0)return;const X=N.source,te=d.get(X);if(te){const le=te[P.__cacheKey];le.usedTimes--,le.usedTimes===0&&M(N),Object.keys(te).length===0&&d.delete(X)}n.remove(N)}function M(N){const P=n.get(N);r.deleteTexture(P.__webglTexture);const X=N.source,te=d.get(X);delete te[P.__cacheKey],o.memory.textures--}function A(N){const P=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(P.__webglFramebuffer[te]))for(let le=0;le<P.__webglFramebuffer[te].length;le++)r.deleteFramebuffer(P.__webglFramebuffer[te][le]);else r.deleteFramebuffer(P.__webglFramebuffer[te]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[te])}else{if(Array.isArray(P.__webglFramebuffer))for(let te=0;te<P.__webglFramebuffer.length;te++)r.deleteFramebuffer(P.__webglFramebuffer[te]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let te=0;te<P.__webglColorRenderbuffer.length;te++)P.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[te]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const X=N.textures;for(let te=0,le=X.length;te<le;te++){const re=n.get(X[te]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(N)}let _=0;function S(){_=0}function I(){const N=_;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),_+=1,N}function z(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function B(N,P){const X=n.get(N);if(N.isVideoTexture&&de(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(X,N,P);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+P)}function G(N,P){const X=n.get(N);if(N.version>0&&X.__version!==N.version){ke(X,N,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+P)}function U(N,P){const X=n.get(N);if(N.version>0&&X.__version!==N.version){ke(X,N,P);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+P)}function $(N,P){const X=n.get(N);if(N.version>0&&X.__version!==N.version){Q(X,N,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+P)}const Y={[xt]:r.REPEAT,[_i]:r.CLAMP_TO_EDGE,[sc]:r.MIRRORED_REPEAT},ae={[zt]:r.NEAREST,[Bg]:r.NEAREST_MIPMAP_NEAREST,[va]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[zl]:r.LINEAR_MIPMAP_NEAREST,[Ii]:r.LINEAR_MIPMAP_LINEAR},ie={[G1]:r.NEVER,[$1]:r.ALWAYS,[W1]:r.LESS,[$g]:r.LEQUAL,[j1]:r.EQUAL,[Y1]:r.GEQUAL,[X1]:r.GREATER,[q1]:r.NOTEQUAL};function pe(N,P){if(P.type===An&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===an||P.magFilter===zl||P.magFilter===va||P.magFilter===Ii||P.minFilter===an||P.minFilter===zl||P.minFilter===va||P.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Y[P.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Y[P.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Y[P.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ae[P.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ae[P.minFilter]),P.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ie[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===zt||P.minFilter!==va&&P.minFilter!==Ii||P.type===An&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Oe(N,P){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",E));const te=P.source;let le=d.get(te);le===void 0&&(le={},d.set(te,le));const re=z(P);if(re!==N.__cacheKey){le[re]===void 0&&(le[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[re].usedTimes++;const Ne=le[N.__cacheKey];Ne!==void 0&&(le[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(P)),N.__cacheKey=re,N.__webglTexture=le[re].texture}return X}function ke(N,P,X){let te=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(te=r.TEXTURE_3D);const le=Oe(N,P),re=P.source;t.bindTexture(te,N.__webglTexture,r.TEXTURE0+X);const Ne=n.get(re);if(re.version!==Ne.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const ye=lt.getPrimaries(lt.workingColorSpace),Ce=P.colorSpace===Ds?null:lt.getPrimaries(P.colorSpace),st=P.colorSpace===Ds||ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let fe=v(P.image,!1,i.maxTextureSize);fe=Te(P,fe);const Pe=s.convert(P.format,P.colorSpace),je=s.convert(P.type);let Xe=y(P.internalFormat,Pe,je,P.colorSpace,P.isVideoTexture);pe(te,P);let Le;const rt=P.mipmaps,$e=P.isVideoTexture!==!0,At=Ne.__version===void 0||le===!0,W=re.dataReady,Ae=w(P,fe);if(P.isDepthTexture)Xe=x(P.format===Fo,P.type),At&&($e?t.texStorage2D(r.TEXTURE_2D,1,Xe,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,Xe,fe.width,fe.height,0,Pe,je,null));else if(P.isDataTexture)if(rt.length>0){$e&&At&&t.texStorage2D(r.TEXTURE_2D,Ae,Xe,rt[0].width,rt[0].height);for(let ee=0,ce=rt.length;ee<ce;ee++)Le=rt[ee],$e?W&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,je,Le.data):t.texImage2D(r.TEXTURE_2D,ee,Xe,Le.width,Le.height,0,Pe,je,Le.data);P.generateMipmaps=!1}else $e?(At&&t.texStorage2D(r.TEXTURE_2D,Ae,Xe,fe.width,fe.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe.width,fe.height,Pe,je,fe.data)):t.texImage2D(r.TEXTURE_2D,0,Xe,fe.width,fe.height,0,Pe,je,fe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){$e&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Xe,rt[0].width,rt[0].height,fe.depth);for(let ee=0,ce=rt.length;ee<ce;ee++)if(Le=rt[ee],P.format!==zn)if(Pe!==null)if($e){if(W)if(P.layerUpdates.size>0){const we=Np(Le.width,Le.height,P.format,P.type);for(const Ee of P.layerUpdates){const at=Le.data.subarray(Ee*we/Le.data.BYTES_PER_ELEMENT,(Ee+1)*we/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ee,Le.width,Le.height,1,Pe,at,0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,fe.depth,Pe,Le.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Xe,Le.width,Le.height,fe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,fe.depth,Pe,je,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Xe,Le.width,Le.height,fe.depth,0,Pe,je,Le.data)}else{$e&&At&&t.texStorage2D(r.TEXTURE_2D,Ae,Xe,rt[0].width,rt[0].height);for(let ee=0,ce=rt.length;ee<ce;ee++)Le=rt[ee],P.format!==zn?Pe!==null?$e?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?W&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,je,Le.data):t.texImage2D(r.TEXTURE_2D,ee,Xe,Le.width,Le.height,0,Pe,je,Le.data)}else if(P.isDataArrayTexture)if($e){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Xe,fe.width,fe.height,fe.depth),W)if(P.layerUpdates.size>0){const ee=Np(fe.width,fe.height,P.format,P.type);for(const ce of P.layerUpdates){const we=fe.data.subarray(ce*ee/fe.data.BYTES_PER_ELEMENT,(ce+1)*ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,Pe,je,we)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,je,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Xe,fe.width,fe.height,fe.depth,0,Pe,je,fe.data);else if(P.isData3DTexture)$e?(At&&t.texStorage3D(r.TEXTURE_3D,Ae,Xe,fe.width,fe.height,fe.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,je,fe.data)):t.texImage3D(r.TEXTURE_3D,0,Xe,fe.width,fe.height,fe.depth,0,Pe,je,fe.data);else if(P.isFramebufferTexture){if(At)if($e)t.texStorage2D(r.TEXTURE_2D,Ae,Xe,fe.width,fe.height);else{let ee=fe.width,ce=fe.height;for(let we=0;we<Ae;we++)t.texImage2D(r.TEXTURE_2D,we,Xe,ee,ce,0,Pe,je,null),ee>>=1,ce>>=1}}else if(rt.length>0){if($e&&At){const ee=_e(rt[0]);t.texStorage2D(r.TEXTURE_2D,Ae,Xe,ee.width,ee.height)}for(let ee=0,ce=rt.length;ee<ce;ee++)Le=rt[ee],$e?W&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe,je,Le):t.texImage2D(r.TEXTURE_2D,ee,Xe,Pe,je,Le);P.generateMipmaps=!1}else if($e){if(At){const ee=_e(fe);t.texStorage2D(r.TEXTURE_2D,Ae,Xe,ee.width,ee.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,je,fe)}else t.texImage2D(r.TEXTURE_2D,0,Xe,Pe,je,fe);p(P)&&m(te),Ne.__version=re.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Q(N,P,X){if(P.image.length!==6)return;const te=Oe(N,P),le=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+X);const re=n.get(le);if(le.version!==re.__version||te===!0){t.activeTexture(r.TEXTURE0+X);const Ne=lt.getPrimaries(lt.workingColorSpace),ye=P.colorSpace===Ds?null:lt.getPrimaries(P.colorSpace),Ce=P.colorSpace===Ds||Ne===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const st=P.isCompressedTexture||P.image[0].isCompressedTexture,fe=P.image[0]&&P.image[0].isDataTexture,Pe=[];for(let ce=0;ce<6;ce++)!st&&!fe?Pe[ce]=v(P.image[ce],!0,i.maxCubemapSize):Pe[ce]=fe?P.image[ce].image:P.image[ce],Pe[ce]=Te(P,Pe[ce]);const je=Pe[0],Xe=s.convert(P.format,P.colorSpace),Le=s.convert(P.type),rt=y(P.internalFormat,Xe,Le,P.colorSpace),$e=P.isVideoTexture!==!0,At=re.__version===void 0||te===!0,W=le.dataReady;let Ae=w(P,je);pe(r.TEXTURE_CUBE_MAP,P);let ee;if(st){$e&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,rt,je.width,je.height);for(let ce=0;ce<6;ce++){ee=Pe[ce].mipmaps;for(let we=0;we<ee.length;we++){const Ee=ee[we];P.format!==zn?Xe!==null?$e?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,Ee.width,Ee.height,Xe,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,rt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,Ee.width,Ee.height,Xe,Le,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,rt,Ee.width,Ee.height,0,Xe,Le,Ee.data)}}}else{if(ee=P.mipmaps,$e&&At){ee.length>0&&Ae++;const ce=_e(Pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,rt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){$e?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe[ce].width,Pe[ce].height,Xe,Le,Pe[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,rt,Pe[ce].width,Pe[ce].height,0,Xe,Le,Pe[ce].data);for(let we=0;we<ee.length;we++){const at=ee[we].image[ce].image;$e?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,at.width,at.height,Xe,Le,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,rt,at.width,at.height,0,Xe,Le,at.data)}}else{$e?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Xe,Le,Pe[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,rt,Xe,Le,Pe[ce]);for(let we=0;we<ee.length;we++){const Ee=ee[we];$e?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,Xe,Le,Ee.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,rt,Xe,Le,Ee.image[ce])}}}p(P)&&m(r.TEXTURE_CUBE_MAP),re.__version=le.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function he(N,P,X,te,le,re){const Ne=s.convert(X.format,X.colorSpace),ye=s.convert(X.type),Ce=y(X.internalFormat,Ne,ye,X.colorSpace);if(!n.get(P).__hasExternalTextures){const fe=Math.max(1,P.width>>re),Pe=Math.max(1,P.height>>re);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,re,Ce,fe,Pe,P.depth,0,Ne,ye,null):t.texImage2D(le,re,Ce,fe,Pe,0,Ne,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),oe(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,le,n.get(X).__webglTexture,0,se(P)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,le,n.get(X).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(N,P,X){if(r.bindRenderbuffer(r.RENDERBUFFER,N),P.depthBuffer){const te=P.depthTexture,le=te&&te.isDepthTexture?te.type:null,re=x(P.stencilBuffer,le),Ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=se(P);oe(P)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,re,P.width,P.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,re,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,re,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,N)}else{const te=P.textures;for(let le=0;le<te.length;le++){const re=te[le],Ne=s.convert(re.format,re.colorSpace),ye=s.convert(re.type),Ce=y(re.internalFormat,Ne,ye,re.colorSpace),st=se(P);X&&oe(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Ce,P.width,P.height):oe(P)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,Ce,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),B(P.depthTexture,0);const te=n.get(P.depthTexture).__webglTexture,le=se(P);if(P.depthTexture.format===oo)oe(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(P.depthTexture.format===Fo)oe(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ne(N){const P=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){const te=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),te){const le=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,te.removeEventListener("dispose",le)};te.addEventListener("dispose",le),P.__depthDisposeCallback=le}P.__boundDepthTexture=te}if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ve(P.__webglFramebuffer,N)}else if(X){P.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[te]),P.__webglDepthbuffer[te]===void 0)P.__webglDepthbuffer[te]=r.createRenderbuffer(),be(P.__webglDepthbuffer[te],N,!1);else{const le=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=P.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,re)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),be(P.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function R(N,P,X){const te=n.get(N);P!==void 0&&he(te.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&ne(N)}function F(N){const P=N.texture,X=n.get(N),te=n.get(P);N.addEventListener("dispose",b);const le=N.textures,re=N.isWebGLCubeRenderTarget===!0,Ne=le.length>1;if(Ne||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=P.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)X.__webglFramebuffer[ye][Ce]=r.createFramebuffer()}else X.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<P.mipmaps.length;ye++)X.__webglFramebuffer[ye]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let ye=0,Ce=le.length;ye<Ce;ye++){const st=n.get(le[ye]);st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&oe(N)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Ce=le[ye];X.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);const st=s.convert(Ce.format,Ce.colorSpace),fe=s.convert(Ce.type),Pe=y(Ce.internalFormat,st,fe,Ce.colorSpace,N.isXRRenderTarget===!0),je=se(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Pe,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),be(X.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),pe(r.TEXTURE_CUBE_MAP,P);for(let ye=0;ye<6;ye++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ce=0;Ce<P.mipmaps.length;Ce++)he(X.__webglFramebuffer[ye][Ce],N,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce);else he(X.__webglFramebuffer[ye],N,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(P)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,Ce=le.length;ye<Ce;ye++){const st=le[ye],fe=n.get(st);t.bindTexture(r.TEXTURE_2D,fe.__webglTexture),pe(r.TEXTURE_2D,st),he(X.__webglFramebuffer,N,st,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),p(st)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,te.__webglTexture),pe(ye,P),P.mipmaps&&P.mipmaps.length>0)for(let Ce=0;Ce<P.mipmaps.length;Ce++)he(X.__webglFramebuffer[Ce],N,P,r.COLOR_ATTACHMENT0,ye,Ce);else he(X.__webglFramebuffer,N,P,r.COLOR_ATTACHMENT0,ye,0);p(P)&&m(ye),t.unbindTexture()}N.depthBuffer&&ne(N)}function k(N){const P=N.textures;for(let X=0,te=P.length;X<te;X++){const le=P[X];if(p(le)){const re=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ne=n.get(le).__webglTexture;t.bindTexture(re,Ne),m(re),t.unbindTexture()}}}const H=[],L=[];function K(N){if(N.samples>0){if(oe(N)===!1){const P=N.textures,X=N.width,te=N.height;let le=r.COLOR_BUFFER_BIT;const re=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(N),ye=P.length>1;if(ye)for(let Ce=0;Ce<P.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<P.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const st=n.get(P[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,X,te,0,0,X,te,le,r.NEAREST),l===!0&&(H.length=0,L.length=0,H.push(r.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.resolveDepthBuffer===!1&&(H.push(re),L.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Ce=0;Ce<P.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const st=n.get(P[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,st,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const P=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function se(N){return Math.min(i.maxSamples,N.samples)}function oe(N){const P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function de(N){const P=o.render.frame;h.get(N)!==P&&(h.set(N,P),N.update())}function Te(N,P){const X=N.colorSpace,te=N.format,le=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==cn&&X!==Ds&&(lt.getTransfer(X)===It?(te!==zn||le!==_s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),P}function _e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=R,this.setupRenderTarget=F,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=he,this.useMultisampledRTT=oe}function pE(r,e){function t(n,i=Ds){let s;const o=lt.getTransfer(i);if(n===_s)return r.UNSIGNED_BYTE;if(n===Bd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zg)return r.BYTE;if(n===kg)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===Od)return r.INT;if(n===Sr)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===Vi)return r.HALF_FLOAT;if(n===Hg)return r.ALPHA;if(n===Gg)return r.RGB;if(n===zn)return r.RGBA;if(n===Wg)return r.LUMINANCE;if(n===jg)return r.LUMINANCE_ALPHA;if(n===oo)return r.DEPTH_COMPONENT;if(n===Fo)return r.DEPTH_STENCIL;if(n===kd)return r.RED;if(n===Vd)return r.RED_INTEGER;if(n===Xg)return r.RG;if(n===Hd)return r.RG_INTEGER;if(n===Gd)return r.RGBA_INTEGER;if(n===kl||n===Vl||n===Hl||n===Gl)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===ou||n===au||n===lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cu||n===hu||n===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cu||n===hu)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===Mu||n===wu||n===Su||n===bu||n===Tu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===du)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Su)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tu)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Au||n===Eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wl)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qg||n===Cu||n===Pu||n===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class mE extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gE={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
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

}`;class xE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new ln,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nt({vertexShader:_E,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yE extends Ks{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new xE,p=t.getContextAttributes();let m=null,y=null;const x=[],w=[],E=new ue;let b=null;const T=new bn;T.layers.enable(1),T.viewport=new ut;const M=new bn;M.layers.enable(2),M.viewport=new ut;const A=[T,M],_=new mE;_.layers.enable(1),_.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=x[Q];return he===void 0&&(he=new xh,x[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=x[Q];return he===void 0&&(he=new xh,x[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=x[Q];return he===void 0&&(he=new xh,x[Q]=he),he.getHandSpace()};function z(Q){const he=w.indexOf(Q.inputSource);if(he===-1)return;const be=x[he];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||o),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let Q=0;Q<x.length;Q++){const he=w[Q];he!==null&&(w[Q]=null,x[Q].disconnect(he))}S=null,I=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gs(f.framebufferWidth,f.framebufferHeight,{format:zn,type:_s,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,be=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?Fo:oo,be=p.stencil?No:Sr);const ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Gs(d.textureWidth,d.textureHeight,{format:zn,type:_s,depthTexture:new l0(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Q){for(let he=0;he<Q.removed.length;he++){const be=Q.removed[he],ve=w.indexOf(be);ve>=0&&(w[ve]=null,x[ve].disconnect(be))}for(let he=0;he<Q.added.length;he++){const be=Q.added[he];let ve=w.indexOf(be);if(ve===-1){for(let R=0;R<x.length;R++)if(R>=w.length){w.push(be),ve=R;break}else if(w[R]===null){w[R]=be,ve=R;break}if(ve===-1)break}const ne=x[ve];ne&&ne.connect(be)}}const U=new O,$=new O;function Y(Q,he,be){U.setFromMatrixPosition(he.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);const ve=U.distanceTo($),ne=he.projectionMatrix.elements,R=be.projectionMatrix.elements,F=ne[14]/(ne[10]-1),k=ne[14]/(ne[10]+1),H=(ne[9]+1)/ne[5],L=(ne[9]-1)/ne[5],K=(ne[8]-1)/ne[0],se=(R[8]+1)/R[0],oe=F*K,de=F*se,Te=ve/(-K+se),_e=Te*-K;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ne[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const N=F+Te,P=k+Te,X=oe-_e,te=de+(ve-_e),le=H*k/P*N,re=L*k/P*N;Q.projectionMatrix.makePerspective(X,te,le,re,N,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let he=Q.near,be=Q.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(be=v.depthFar)),_.near=M.near=T.near=he,_.far=M.far=T.far=be,(S!==_.near||I!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,I=_.far);const ve=Q.parent,ne=_.cameras;ae(_,ve);for(let R=0;R<ne.length;R++)ae(ne[R],ve);ne.length===2?Y(_,T,M):_.projectionMatrix.copy(T.projectionMatrix),ie(Q,_,ve)};function ie(Q,he,be){be===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Uo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let pe=null;function Oe(Q,he){if(h=he.getViewerPose(c||o),g=he,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ve=!1;be.length!==_.cameras.length&&(_.cameras.length=0,ve=!0);for(let R=0;R<be.length;R++){const F=be[R];let k=null;if(f!==null)k=f.getViewport(F);else{const L=u.getViewSubImage(d,F);k=L.viewport,R===0&&(e.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let H=A[R];H===void 0&&(H=new bn,H.layers.enable(R),H.viewport=new ut,A[R]=H),H.matrix.fromArray(F.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(F.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(k.x,k.y,k.width,k.height),R===0&&(_.matrix.copy(H.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ve===!0&&_.cameras.push(H)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const R=u.getDepthInformation(be[0]);R&&R.isValid&&R.texture&&v.init(e,R,i.renderState)}}for(let be=0;be<x.length;be++){const ve=w[be],ne=x[be];ve!==null&&ne!==void 0&&ne.update(ve,he,c||o)}pe&&pe(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const ke=new a0;ke.setAnimationLoop(Oe),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const sr=new ji,ME=new Ye;function wE(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,n0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,w=y.envMapRotation;x&&(p.envMap.value=x,sr.copy(w),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(sr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function SE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const w=x.program;n.uniformBlockBinding(y,w)}function c(y,x){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(y,E);const b=e.render.frame;s[y.id]!==b&&(d(y),s[y.id]=b)}function h(y){const x=u();y.__bindingPointIndex=x;const w=r.createBuffer(),E=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],w=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,T=w.length;b<T;b++){const M=Array.isArray(w[b])?w[b]:[w[b]];for(let A=0,_=M.length;A<_;A++){const S=M[A];if(f(S,b,A,E)===!0){const I=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let B=0;for(let G=0;G<z.length;G++){const U=z[G],$=v(U);typeof U=="number"||typeof U=="boolean"?(S.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,I+B,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=0,S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=0,S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=0):(U.toArray(S.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,w,E){const b=y.value,T=x+"_"+w;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{const M=E[T];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return E[T]=b,!0}else if(M.equals(b)===!1)return M.copy(b),!0}return!1}function g(y){const x=y.uniforms;let w=0;const E=16;for(let T=0,M=x.length;T<M;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,S=A.length;_<S;_++){const I=A[_],z=Array.isArray(I.value)?I.value:[I.value];for(let B=0,G=z.length;B<G;B++){const U=z[B],$=v(U),Y=w%E,ae=Y%$.boundary,ie=Y+ae;w+=ae,ie!==0&&E-ie<$.storage&&(w+=E-ie),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=$.storage}}}const b=w%E;return b>0&&(w+=E-b),y.__size=w,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class bE{constructor(e={}){const{canvas:t=dw(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let w=!1,E=0,b=0,T=null,M=-1,A=null;const _=new ut,S=new ut;let I=null;const z=new xe(0);let B=0,G=t.width,U=t.height,$=1,Y=null,ae=null;const ie=new ut(0,0,G,U),pe=new ut(0,0,G,U);let Oe=!1;const ke=new $d;let Q=!1,he=!1;const be=new Ye,ve=new Ye,ne=new O,R=new ut,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function H(){return T===null?$:1}let L=n;function K(D,j){return t.getContext(D,j)}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),L===null){const j="webgl2";if(L=K(j,D),L===null)throw K(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let se,oe,de,Te,_e,N,P,X,te,le,re,Ne,ye,Ce,st,fe,Pe,je,Xe,Le,rt,$e,At,W;function Ae(){se=new RT(L),se.init(),$e=new pE(L,se),oe=new bT(L,se,e,$e),de=new uE(L),oe.reverseDepthBuffer&&de.buffers.depth.setReversed(!0),Te=new DT(L),_e=new ZA,N=new fE(L,se,de,_e,oe,$e,Te),P=new AT(x),X=new PT(x),te=new kw(L),At=new wT(L,te),le=new LT(L,te,Te,At),re=new FT(L,le,te,Te),Xe=new NT(L,oe,N),fe=new TT(_e),Ne=new KA(x,P,X,se,oe,At,fe),ye=new wE(x,_e),Ce=new QA,st=new rE(se),je=new MT(x,P,X,de,re,d,l),Pe=new cE(x,re,oe),W=new SE(L,Te,oe,de),Le=new ST(L,se,Te),rt=new IT(L,se,Te),Te.programs=Ne.programs,x.capabilities=oe,x.extensions=se,x.properties=_e,x.renderLists=Ce,x.shadowMap=Pe,x.state=de,x.info=Te}Ae();const ee=new yE(x,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const D=se.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=se.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(D){D!==void 0&&($=D,this.setSize(G,U,!1))},this.getSize=function(D){return D.set(G,U)},this.setSize=function(D,j,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,U=j,t.width=Math.floor(D*$),t.height=Math.floor(j*$),Z===!0&&(t.style.width=D+"px",t.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(G*$,U*$).floor()},this.setDrawingBufferSize=function(D,j,Z){G=D,U=j,$=Z,t.width=Math.floor(D*Z),t.height=Math.floor(j*Z),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(_)},this.getViewport=function(D){return D.copy(ie)},this.setViewport=function(D,j,Z,J){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,j,Z,J),de.viewport(_.copy(ie).multiplyScalar($).round())},this.getScissor=function(D){return D.copy(pe)},this.setScissor=function(D,j,Z,J){D.isVector4?pe.set(D.x,D.y,D.z,D.w):pe.set(D,j,Z,J),de.scissor(S.copy(pe).multiplyScalar($).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(D){de.setScissorTest(Oe=D)},this.setOpaqueSort=function(D){Y=D},this.setTransparentSort=function(D){ae=D},this.getClearColor=function(D){return D.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(D=!0,j=!0,Z=!0){let J=0;if(D){let q=!1;if(T!==null){const me=T.texture.format;q=me===Gd||me===Hd||me===Vd}if(q){const me=T.texture.type,Se=me===_s||me===Sr||me===Ia||me===No||me===Bd||me===zd,De=je.getClearColor(),Fe=je.getClearAlpha(),Ve=De.r,He=De.g,Be=De.b;Se?(f[0]=Ve,f[1]=He,f[2]=Be,f[3]=Fe,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ve,g[1]=He,g[2]=Be,g[3]=Fe,L.clearBufferiv(L.COLOR,0,g))}else J|=L.COLOR_BUFFER_BIT}j&&(J|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ce.dispose(),st.dispose(),_e.dispose(),P.dispose(),X.dispose(),re.dispose(),At.dispose(),W.dispose(),Ne.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",If),ee.removeEventListener("sessionend",Df),Js.stop()};function ce(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const D=Te.autoReset,j=Pe.enabled,Z=Pe.autoUpdate,J=Pe.needsUpdate,q=Pe.type;Ae(),Te.autoReset=D,Pe.enabled=j,Pe.autoUpdate=Z,Pe.needsUpdate=J,Pe.type=q}function Ee(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function at(D){const j=D.target;j.removeEventListener("dispose",at),Qt(j)}function Qt(D){Nn(D),_e.remove(D)}function Nn(D){const j=_e.get(D).programs;j!==void 0&&(j.forEach(function(Z){Ne.releaseProgram(Z)}),D.isShaderMaterial&&Ne.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,Z,J,q,me){j===null&&(j=F);const Se=q.isMesh&&q.matrixWorld.determinant()<0,De=i1(D,j,Z,J,q);de.setMaterial(J,Se);let Fe=Z.index,Ve=1;if(J.wireframe===!0){if(Fe=le.getWireframeAttribute(Z),Fe===void 0)return;Ve=2}const He=Z.drawRange,Be=Z.attributes.position;let gt=He.start*Ve,Lt=(He.start+He.count)*Ve;me!==null&&(gt=Math.max(gt,me.start*Ve),Lt=Math.min(Lt,(me.start+me.count)*Ve)),Fe!==null?(gt=Math.max(gt,0),Lt=Math.min(Lt,Fe.count)):Be!=null&&(gt=Math.max(gt,0),Lt=Math.min(Lt,Be.count));const jt=Lt-gt;if(jt<0||jt===1/0)return;At.setup(q,J,De,Z,Fe);let Qn,ft=Le;if(Fe!==null&&(Qn=te.get(Fe),ft=rt,ft.setIndex(Qn)),q.isMesh)J.wireframe===!0?(de.setLineWidth(J.wireframeLinewidth*H()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(q.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),de.setLineWidth(ze*H()),q.isLineSegments?ft.setMode(L.LINES):q.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else q.isPoints?ft.setMode(L.POINTS):q.isSprite&&ft.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ft.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ze=q._multiDrawStarts,gn=q._multiDrawCounts,pt=q._multiDrawCount,Ti=Fe?te.get(Fe).bytesPerElement:1,Ir=_e.get(J).currentProgram.getUniforms();for(let ei=0;ei<pt;ei++)Ir.setValue(L,"_gl_DrawID",ei),ft.render(ze[ei]/Ti,gn[ei])}else if(q.isInstancedMesh)ft.renderInstances(gt,jt,q.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,gn=Math.min(Z.instanceCount,ze);ft.renderInstances(gt,jt,gn)}else ft.render(gt,jt)};function ht(D,j,Z){D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,nl(D,j,Z),D.side=ms,D.needsUpdate=!0,nl(D,j,Z),D.side=_n):nl(D,j,Z)}this.compile=function(D,j,Z=null){Z===null&&(Z=D),p=st.get(Z),p.init(j),y.push(p),Z.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),D!==Z&&D.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const J=new Set;return D.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const De=me[Se];ht(De,Z,q),J.add(De)}else ht(me,Z,q),J.add(me)}),y.pop(),p=null,J},this.compileAsync=function(D,j,Z=null){const J=this.compile(D,j,Z);return new Promise(q=>{function me(){if(J.forEach(function(Se){_e.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){q(D);return}setTimeout(me,10)}se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Fn=null;function es(D){Fn&&Fn(D)}function If(){Js.stop()}function Df(){Js.start()}const Js=new a0;Js.setAnimationLoop(es),typeof self<"u"&&Js.setContext(self),this.setAnimationLoop=function(D){Fn=D,ee.setAnimationLoop(D),D===null?Js.stop():Js.start()},ee.addEventListener("sessionstart",If),ee.addEventListener("sessionend",Df),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(j),j=ee.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,j,T),p=st.get(D,y.length),p.init(j),y.push(p),ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(ve),he=this.localClippingEnabled,Q=fe.init(this.clippingPlanes,he),v=Ce.get(D,m.length),v.init(),m.push(v),ee.enabled===!0&&ee.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&zc(me,j,-1/0,x.sortObjects)}zc(D,j,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Y,ae),k=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,k&&je.addToRenderList(v,D),this.info.render.frame++,Q===!0&&fe.beginShadows();const Z=p.state.shadowsArray;Pe.render(Z,D,j),Q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,q=v.transmissive;if(p.setupLights(),j.isArrayCamera){const me=j.cameras;if(q.length>0)for(let Se=0,De=me.length;Se<De;Se++){const Fe=me[Se];Ff(J,q,D,Fe)}k&&je.render(D);for(let Se=0,De=me.length;Se<De;Se++){const Fe=me[Se];Nf(v,D,Fe,Fe.viewport)}}else q.length>0&&Ff(J,q,D,j),k&&je.render(D),Nf(v,D,j);T!==null&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(x,D,j),At.resetDefaultState(),M=-1,A=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&fe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function zc(D,j,Z,J){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)Z=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ke.intersectsSprite(D)){J&&R.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ve);const Se=re.update(D),De=D.material;De.visible&&v.push(D,Se,De,Z,R.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ke.intersectsObject(D))){const Se=re.update(D),De=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),R.copy(D.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),R.copy(Se.boundingSphere.center)),R.applyMatrix4(D.matrixWorld).applyMatrix4(ve)),Array.isArray(De)){const Fe=Se.groups;for(let Ve=0,He=Fe.length;Ve<He;Ve++){const Be=Fe[Ve],gt=De[Be.materialIndex];gt&&gt.visible&&v.push(D,Se,gt,Z,R.z,Be)}}else De.visible&&v.push(D,Se,De,Z,R.z,null)}}const me=D.children;for(let Se=0,De=me.length;Se<De;Se++)zc(me[Se],j,Z,J)}function Nf(D,j,Z,J){const q=D.opaque,me=D.transmissive,Se=D.transparent;p.setupLightsView(Z),Q===!0&&fe.setGlobalState(x.clippingPlanes,Z),J&&de.viewport(_.copy(J)),q.length>0&&tl(q,j,Z),me.length>0&&tl(me,j,Z),Se.length>0&&tl(Se,j,Z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ff(D,j,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Gs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Vi:_s,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const me=p.state.transmissionRenderTarget[J.id],Se=J.viewport||_;me.setSize(Se.z,Se.w);const De=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(z),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),k&&je.render(Z);const Fe=x.toneMapping;x.toneMapping=ps;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Q===!0&&fe.setGlobalState(x.clippingPlanes,J),tl(D,Z,J),N.updateMultisampleRenderTarget(me),N.updateRenderTargetMipmap(me),se.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Be=0,gt=j.length;Be<gt;Be++){const Lt=j[Be],jt=Lt.object,Qn=Lt.geometry,ft=Lt.material,ze=Lt.group;if(ft.side===_n&&jt.layers.test(J.layers)){const gn=ft.side;ft.side=vn,ft.needsUpdate=!0,Uf(jt,Z,J,Qn,ft,ze),ft.side=gn,ft.needsUpdate=!0,He=!0}}He===!0&&(N.updateMultisampleRenderTarget(me),N.updateRenderTargetMipmap(me))}x.setRenderTarget(De),x.setClearColor(z,B),Ve!==void 0&&(J.viewport=Ve),x.toneMapping=Fe}function tl(D,j,Z){const J=j.isScene===!0?j.overrideMaterial:null;for(let q=0,me=D.length;q<me;q++){const Se=D[q],De=Se.object,Fe=Se.geometry,Ve=J===null?Se.material:J,He=Se.group;De.layers.test(Z.layers)&&Uf(De,j,Z,Fe,Ve,He)}}function Uf(D,j,Z,J,q,me){D.onBeforeRender(x,j,Z,J,q,me),D.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),q.onBeforeRender(x,j,Z,J,D,me),q.transparent===!0&&q.side===_n&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,x.renderBufferDirect(Z,j,J,q,D,me),q.side=ms,q.needsUpdate=!0,x.renderBufferDirect(Z,j,J,q,D,me),q.side=_n):x.renderBufferDirect(Z,j,J,q,D,me),D.onAfterRender(x,j,Z,J,q,me)}function nl(D,j,Z){j.isScene!==!0&&(j=F);const J=_e.get(D),q=p.state.lights,me=p.state.shadowsArray,Se=q.state.version,De=Ne.getParameters(D,q.state,me,j,Z),Fe=Ne.getProgramCacheKey(De);let Ve=J.programs;J.environment=D.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(D.isMeshStandardMaterial?X:P).get(D.envMap||J.environment),J.envMapRotation=J.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Ve===void 0&&(D.addEventListener("dispose",at),Ve=new Map,J.programs=Ve);let He=Ve.get(Fe);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===Se)return Bf(D,De),He}else De.uniforms=Ne.getUniforms(D),D.onBeforeCompile(De,x),He=Ne.acquireProgram(De,Fe),Ve.set(Fe,He),J.uniforms=De.uniforms;const Be=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Bf(D,De),J.needsLights=r1(D),J.lightsStateVersion=Se,J.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function Of(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=Xl.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Bf(D,j){const Z=_e.get(D);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function i1(D,j,Z,J,q){j.isScene!==!0&&(j=F),N.resetTextureUnits();const me=j.fog,Se=J.isMeshStandardMaterial?j.environment:null,De=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:cn,Fe=(J.isMeshStandardMaterial?X:P).get(J.envMap||Se),Ve=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Be=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,Lt=!!Z.morphAttributes.color;let jt=ps;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(jt=x.toneMapping);const Qn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=Qn!==void 0?Qn.length:0,ze=_e.get(J),gn=p.state.lights;if(Q===!0&&(he===!0||D!==A)){const di=D===A&&J.id===M;fe.setState(J,D,di)}let pt=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==gn.state.version||ze.outputColorSpace!==De||q.isBatchedMesh&&ze.batching===!1||!q.isBatchedMesh&&ze.batching===!0||q.isBatchedMesh&&ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||q.isInstancedMesh&&ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ze.instancingMorph===!1&&q.morphTexture!==null||ze.envMap!==Fe||J.fog===!0&&ze.fog!==me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==He||ze.morphTargets!==Be||ze.morphNormals!==gt||ze.morphColors!==Lt||ze.toneMapping!==jt||ze.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,ze.__version=J.version);let Ti=ze.currentProgram;pt===!0&&(Ti=nl(J,j,q));let Ir=!1,ei=!1,kc=!1;const Yt=Ti.getUniforms(),ws=ze.uniforms;if(de.useProgram(Ti.program)&&(Ir=!0,ei=!0,kc=!0),J.id!==M&&(M=J.id,ei=!0),Ir||A!==D){oe.reverseDepthBuffer?(be.copy(D.projectionMatrix),pw(be),mw(be),Yt.setValue(L,"projectionMatrix",be)):Yt.setValue(L,"projectionMatrix",D.projectionMatrix),Yt.setValue(L,"viewMatrix",D.matrixWorldInverse);const di=Yt.map.cameraPosition;di!==void 0&&di.setValue(L,ne.setFromMatrixPosition(D.matrixWorld)),oe.logarithmicDepthBuffer&&Yt.setValue(L,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Yt.setValue(L,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,ei=!0,kc=!0)}if(q.isSkinnedMesh){Yt.setOptional(L,q,"bindMatrix"),Yt.setOptional(L,q,"bindMatrixInverse");const di=q.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),Yt.setValue(L,"boneTexture",di.boneTexture,N))}q.isBatchedMesh&&(Yt.setOptional(L,q,"batchingTexture"),Yt.setValue(L,"batchingTexture",q._matricesTexture,N),Yt.setOptional(L,q,"batchingIdTexture"),Yt.setValue(L,"batchingIdTexture",q._indirectTexture,N),Yt.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&Yt.setValue(L,"batchingColorTexture",q._colorsTexture,N));const Vc=Z.morphAttributes;if((Vc.position!==void 0||Vc.normal!==void 0||Vc.color!==void 0)&&Xe.update(q,Z,Ti),(ei||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,Yt.setValue(L,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ws.envMap.value=Fe,ws.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(ws.envMapIntensity.value=j.environmentIntensity),ei&&(Yt.setValue(L,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&s1(ws,kc),me&&J.fog===!0&&ye.refreshFogUniforms(ws,me),ye.refreshMaterialUniforms(ws,J,$,U,p.state.transmissionRenderTarget[D.id]),Xl.upload(L,Of(ze),ws,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Xl.upload(L,Of(ze),ws,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Yt.setValue(L,"center",q.center),Yt.setValue(L,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(L,"normalMatrix",q.normalMatrix),Yt.setValue(L,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const di=J.uniformsGroups;for(let Hc=0,o1=di.length;Hc<o1;Hc++){const zf=di[Hc];W.update(zf,Ti),W.bind(zf,Ti)}}return Ti}function s1(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function r1(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,j,Z){_e.get(D.texture).__webglTexture=j,_e.get(D.depthTexture).__webglTexture=Z;const J=_e.get(D);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,j){const Z=_e.get(D);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,Z=0){T=D,E=j,b=Z;let J=!0,q=null,me=!1,Se=!1;if(D){const Fe=_e.get(D);if(Fe.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Fe.__webglFramebuffer===void 0)N.setupRenderTarget(D);else if(Fe.__hasExternalTextures)N.rebindTextures(D,_e.get(D.texture).__webglTexture,_e.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Be=D.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&_e.has(Be)&&(D.width!==Be.image.width||D.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(D)}}const Ve=D.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const He=_e.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(He[j])?q=He[j][Z]:q=He[j],me=!0):D.samples>0&&N.useMultisampledRTT(D)===!1?q=_e.get(D).__webglMultisampledFramebuffer:Array.isArray(He)?q=He[Z]:q=He,_.copy(D.viewport),S.copy(D.scissor),I=D.scissorTest}else _.copy(ie).multiplyScalar($).floor(),S.copy(pe).multiplyScalar($).floor(),I=Oe;if(de.bindFramebuffer(L.FRAMEBUFFER,q)&&J&&de.drawBuffers(D,q),de.viewport(_),de.scissor(S),de.setScissorTest(I),me){const Fe=_e.get(D.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,Z)}else if(Se){const Fe=_e.get(D.texture),Ve=j||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,Z||0,Ve)}M=-1},this.readRenderTargetPixels=function(D,j,Z,J,q,me,Se){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=_e.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De){de.bindFramebuffer(L.FRAMEBUFFER,De);try{const Fe=D.texture,Ve=Fe.format,He=Fe.type;if(!oe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-J&&Z>=0&&Z<=D.height-q&&L.readPixels(j,Z,J,q,$e.convert(Ve),$e.convert(He),me)}finally{const Fe=T!==null?_e.get(T).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(D,j,Z,J,q,me,Se){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=_e.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De){const Fe=D.texture,Ve=Fe.format,He=Fe.type;if(!oe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=D.width-J&&Z>=0&&Z<=D.height-q){de.bindFramebuffer(L.FRAMEBUFFER,De);const Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(j,Z,J,q,$e.convert(Ve),$e.convert(He),0);const gt=T!==null?_e.get(T).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,gt);const Lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fw(L,Lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(Be),L.deleteSync(Lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,j=null,Z=0){D.isTexture!==!0&&(jl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,D=arguments[1]);const J=Math.pow(2,-Z),q=Math.floor(D.image.width*J),me=Math.floor(D.image.height*J),Se=j!==null?j.x:0,De=j!==null?j.y:0;N.setTexture2D(D,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Se,De,q,me),de.unbindTexture()},this.copyTextureToTexture=function(D,j,Z=null,J=null,q=0){D.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,D=arguments[1],j=arguments[2],q=arguments[3]||0,Z=null);let me,Se,De,Fe,Ve,He;Z!==null?(me=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,De=Z.min.x,Fe=Z.min.y):(me=D.image.width,Se=D.image.height,De=0,Fe=0),J!==null?(Ve=J.x,He=J.y):(Ve=0,He=0);const Be=$e.convert(j.format),gt=$e.convert(j.type);N.setTexture2D(j,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),jt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),ft=L.getParameter(L.UNPACK_SKIP_ROWS),ze=L.getParameter(L.UNPACK_SKIP_IMAGES),gn=D.isCompressedTexture?D.mipmaps[q]:D.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,gn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),D.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,q,Ve,He,me,Se,Be,gt,gn.data):D.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,q,Ve,He,gn.width,gn.height,Be,gn.data):L.texSubImage2D(L.TEXTURE_2D,q,Ve,He,me,Se,Be,gt,gn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze),q===0&&j.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(D,j,Z=null,J=null,q=0){D.isTexture!==!0&&(jl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,D=arguments[2],j=arguments[3],q=arguments[4]||0);let me,Se,De,Fe,Ve,He,Be,gt,Lt;const jt=D.isCompressedTexture?D.mipmaps[q]:D.image;Z!==null?(me=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,De=Z.max.z-Z.min.z,Fe=Z.min.x,Ve=Z.min.y,He=Z.min.z):(me=jt.width,Se=jt.height,De=jt.depth,Fe=0,Ve=0,He=0),J!==null?(Be=J.x,gt=J.y,Lt=J.z):(Be=0,gt=0,Lt=0);const Qn=$e.convert(j.format),ft=$e.convert(j.type);let ze;if(j.isData3DTexture)N.setTexture3D(j,0),ze=L.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)N.setTexture2DArray(j,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const gn=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ti=L.getParameter(L.UNPACK_SKIP_PIXELS),Ir=L.getParameter(L.UNPACK_SKIP_ROWS),ei=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He),D.isDataTexture||D.isData3DTexture?L.texSubImage3D(ze,q,Be,gt,Lt,me,Se,De,Qn,ft,jt.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,q,Be,gt,Lt,me,Se,De,Qn,jt.data):L.texSubImage3D(ze,q,Be,gt,Lt,me,Se,De,Qn,ft,jt),L.pixelStorei(L.UNPACK_ROW_LENGTH,gn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ti),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ir),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ei),q===0&&j.generateMipmaps&&L.generateMipmap(ze),de.unbindTexture()},this.initRenderTarget=function(D){_e.get(D).__webglFramebuffer===void 0&&N.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?N.setTextureCube(D,0):D.isData3DTexture?N.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?N.setTexture2DArray(D,0):N.setTexture2D(D,0),de.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,de.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jd?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Ec?"display-p3":"srgb"}}class Zd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Zd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class TE extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class AE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new O;class Jd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fp=new O,Up=new ut,Op=new ut,EE=new O,Bp=new Ye,bl=new O,yh=new Ki,zp=new Ye,Mh=new Jo;class CE extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ys),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(i),e.ray.intersectsSphere(yh)!==!1&&(zp.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(zp),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Up.fromBufferAttribute(i.attributes.skinIndex,e),Op.fromBufferAttribute(i.attributes.skinWeight,e),Fp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Op.getComponent(s);if(o!==0){const a=Up.getComponent(s);Bp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(EE.copy(Fp).applyMatrix4(Bp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class f0 extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rc extends ln{constructor(e=null,t=1,n=1,i,s,o,a,l,c=zt,h=zt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kp=new Ye,PE=new Ye;class Qd{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:PE;kp.multiplyMatrices(a,t[s]),kp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rc(t,e,e,zn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new f0),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Nu extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new Ye,Vp=new Ye,Tl=[],Hp=new ys,RE=new Ye,ha=new ge,ua=new Ki;class LE extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,RE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ys),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Hp.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),ua.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qr),Vp.multiplyMatrices(n,qr),ha.matrixWorld=Vp,ha.raycast(e,Tl);for(let o=0,a=Tl.length;o<a;o++){const l=Tl[o];l.instanceId=s,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rc(new Float32Array(i*this.count),i,this.count,kd,An));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ea extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new O,uc=new O,Gp=new Ye,da=new Jo,Al=new Ki,wh=new O,Wp=new O;class Bo extends Tt{constructor(e=new ct,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hc.fromBufferAttribute(t,i-1),uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hc.distanceTo(uc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(i),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;Gp.copy(i).invert(),da.copy(e.ray).applyMatrix4(Gp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),y=h.getX(v+1),x=El(this,e,da,l,m,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=El(this,e,da,l,v,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=El(this,e,da,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=El(this,e,da,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function El(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(hc.fromBufferAttribute(o,i),uc.fromBufferAttribute(o,s),t.distanceSqToSegment(hc,uc,wh,Wp)>n)return;wh.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(wh);if(!(l<e.near||l>e.far))return{distance:l,point:Wp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const jp=new O,Xp=new O;class ef extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jp.fromBufferAttribute(t,i),Xp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jp.distanceTo(Xp);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IE extends Bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Za extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qp=new Ye,Fu=new Jo,Cl=new Ki,Pl=new O;class Ms extends Tt{constructor(e=new ct,t=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(i),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;qp.copy(i).invert(),Fu.copy(e.ray).applyMatrix4(qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);Pl.fromBufferAttribute(u,p),Yp(Pl,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Pl.fromBufferAttribute(u,g),Yp(Pl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yp(r,e,t,n,i,s,o){const a=Fu.distanceSqToPoint(r);if(a<t){const l=new O;Fu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class DE extends ln{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ue:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,i=[],s=[],o=[],a=new O,l=new Ye;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(nn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tf extends Zi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class NE extends tf{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Rl=new O,Sh=new nf,bh=new nf,Th=new nf;class FE extends Zi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Rl.subVectors(i[0],i[1]).add(i[0]),c=Rl);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Rl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Sh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),bh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),Th.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),bh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Th.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sh.calc(l),bh.calc(l),Th.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $p(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function UE(r,e){const t=1-r;return t*t*e}function OE(r,e){return 2*(1-r)*r*e}function BE(r,e){return r*r*e}function Aa(r,e,t,n){return UE(r,e)+OE(r,t)+BE(r,n)}function zE(r,e){const t=1-r;return t*t*t*e}function kE(r,e){const t=1-r;return 3*t*t*r*e}function VE(r,e){return 3*(1-r)*r*r*e}function HE(r,e){return r*r*r*e}function Ea(r,e,t,n,i){return zE(r,e)+kE(r,t)+VE(r,n)+HE(r,i)}class p0 extends Zi{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ea(e,i.x,s.x,o.x,a.x),Ea(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GE extends Zi{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ea(e,i.x,s.x,o.x,a.x),Ea(e,i.y,s.y,o.y,a.y),Ea(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m0 extends Zi{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WE extends Zi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g0 extends Zi{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Aa(e,i.x,s.x,o.x),Aa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jE extends Zi{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Aa(e,i.x,s.x,o.x),Aa(e,i.y,s.y,o.y),Aa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends Zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set($p(a,l.x,c.x,h.x,u.x),$p(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Uu=Object.freeze({__proto__:null,ArcCurve:NE,CatmullRomCurve3:FE,CubicBezierCurve:p0,CubicBezierCurve3:GE,EllipseCurve:tf,LineCurve:m0,LineCurve3:WE,QuadraticBezierCurve:g0,QuadraticBezierCurve3:jE,SplineCurve:_0});class XE extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Uu[i.type]().fromJSON(i))}return this}}class Ou extends XE{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new m0(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new g0(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new p0(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new tf(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sf extends ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new O,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rf extends ct{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function y(){const w=new O,E=new O;let b=0;const T=(t-e)/n;for(let M=0;M<=s;M++){const A=[],_=M/s,S=_*(t-e)+e;for(let I=0;I<=i;I++){const z=I/i,B=z*l+a,G=Math.sin(B),U=Math.cos(B);E.x=S*G,E.y=-_*n+p,E.z=S*U,u.push(E.x,E.y,E.z),w.set(G,T,U).normalize(),d.push(w.x,w.y,w.z),f.push(z,1-_),A.push(g++)}v.push(A)}for(let M=0;M<i;M++)for(let A=0;A<s;A++){const _=v[A][M],S=v[A+1][M],I=v[A+1][M+1],z=v[A][M+1];e>0&&(h.push(_,S,z),b+=3),t>0&&(h.push(S,I,z),b+=3)}c.addGroup(m,b,0),m+=b}function x(w){const E=g,b=new ue,T=new O;let M=0;const A=w===!0?e:t,_=w===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const S=g;for(let I=0;I<=i;I++){const B=I/i*l+a,G=Math.cos(B),U=Math.sin(B);T.x=A*U,T.y=p*_,T.z=A*G,u.push(T.x,T.y,T.z),d.push(0,_,0),b.x=G*.5+.5,b.y=U*.5*_+.5,f.push(b.x,b.y),g++}for(let I=0;I<i;I++){const z=E+I,B=S+I;w===!0?h.push(B,B+1,z):h.push(B+1,B,z),M+=3}c.addGroup(m,M,w===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lc extends rf{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ic extends ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new O,w=new O,E=new O;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],w),f(t[b+2],E),l(x,w,E,y)}function l(y,x,w,E){const b=E+1,T=[];for(let M=0;M<=b;M++){T[M]=[];const A=y.clone().lerp(w,M/b),_=x.clone().lerp(w,M/b),S=b-M;for(let I=0;I<=S;I++)I===0&&M===b?T[M][I]=A:T[M][I]=A.clone().lerp(_,I/S)}for(let M=0;M<b;M++)for(let A=0;A<2*(b-M)-1;A++){const _=Math.floor(A/2);A%2===0?(d(T[M][_+1]),d(T[M+1][_]),d(T[M][_])):(d(T[M][_+1]),d(T[M+1][_+1]),d(T[M+1][_]))}}function c(y){const x=new O;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(y),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function h(){const y=new O;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const w=p(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;o.push(w,1-E)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],w=o[y+2],E=o[y+4],b=Math.max(x,w,E),T=Math.min(x,w,E);b>.9&&T<.1&&(x<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){const w=y*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function g(){const y=new O,x=new O,w=new O,E=new O,b=new ue,T=new ue,M=new ue;for(let A=0,_=0;A<s.length;A+=9,_+=6){y.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),w.set(s[A+6],s[A+7],s[A+8]),b.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),M.set(o[_+4],o[_+5]),E.copy(y).add(x).add(w).divideScalar(3);const S=p(E);v(b,_+0,y,S),v(T,_+2,x,S),v(M,_+4,w,S)}}function v(y,x,w,E){E<0&&y.x===1&&(o[x]=y.x-1),w.x===0&&w.z===0&&(o[x]=E/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.vertices,e.indices,e.radius,e.details)}}class ql extends Ou{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ou().fromJSON(i))}return this}}const qE={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=v0(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=JE(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Oa(s,o,t,a,l,f,0),o}};function v0(r,e,t,n,i){let s,o;if(i===cC(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Kp(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Kp(s,r[s],r[s+1],o);return o&&Dc(o,o.next)&&(za(o),o=o.next),o}function br(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Dc(t,t.next)||Ht(t.prev,t,t.next)===0)){if(za(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oa(r,e,t,n,i,s,o){if(!r)return;!o&&s&&iC(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?$E(r,n,i,s):YE(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),za(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=KE(br(r),e,t),Oa(r,e,t,n,i,s,2)):o===2&&ZE(r,e,t,n,i,s):Oa(br(r),e,t,n,i,s,1);break}}}function YE(r){const e=r.prev,t=r,n=r.next;if(Ht(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&to(i,a,s,l,o,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $E(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ht(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Bu(f,g,e,t,n),y=Bu(v,p,e,t,n);let x=r.prevZ,w=r.nextZ;for(;x&&x.z>=m&&w&&w.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&to(a,h,l,u,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==i&&w!==o&&to(a,h,l,u,c,d,w.x,w.y)&&Ht(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&to(a,h,l,u,c,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==i&&w!==o&&to(a,h,l,u,c,d,w.x,w.y)&&Ht(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function KE(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Dc(i,s)&&x0(i,n,n.next,s)&&Ba(i,s)&&Ba(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),za(n),za(n.next),n=r=s),n=n.next}while(n!==r);return br(n)}function ZE(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oC(o,a)){let l=y0(o,a);o=br(o,o.next),l=br(l,l.next),Oa(o,e,t,n,i,s,0),Oa(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function JE(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=v0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(rC(c));for(i.sort(QE),s=0;s<i.length;s++)t=eC(i[s],t);return t}function QE(r,e){return r.x-e.x}function eC(r,e){const t=tC(r,e);if(!t)return e;const n=y0(t,r);return br(n,n.next),br(t,t.next)}function tC(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&to(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Ba(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&nC(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function nC(r,e){return Ht(r.prev,r,e.prev)<0&&Ht(e.next,r,r.next)<0}function iC(r,e,t,n){let i=r;do i.z===0&&(i.z=Bu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sC(i)}function sC(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Bu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function rC(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function to(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function oC(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!aC(r,e)&&(Ba(r,e)&&Ba(e,r)&&lC(r,e)&&(Ht(r.prev,r,e.prev)||Ht(r,e.prev,e))||Dc(r,e)&&Ht(r.prev,r,r.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Dc(r,e){return r.x===e.x&&r.y===e.y}function x0(r,e,t,n){const i=Il(Ht(r,e,t)),s=Il(Ht(r,e,n)),o=Il(Ht(t,n,r)),a=Il(Ht(t,n,e));return!!(i!==s&&o!==a||i===0&&Ll(r,t,e)||s===0&&Ll(r,n,e)||o===0&&Ll(t,r,n)||a===0&&Ll(t,e,n))}function Ll(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Il(r){return r>0?1:r<0?-1:0}function aC(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&x0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ba(r,e){return Ht(r.prev,r,r.next)<0?Ht(r,e,r.next)>=0&&Ht(r,r.prev,e)>=0:Ht(r,e,r.prev)<0||Ht(r,r.next,e)<0}function lC(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function y0(r,e){const t=new zu(r.i,r.x,r.y),n=new zu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Kp(r,e,t,n){const i=new zu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function za(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cC(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class lo{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return lo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Zp(e),Jp(n,e);let o=e.length;t.forEach(Zp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Jp(n,t[l]);const a=qE.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Zp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Jp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class of extends ct{constructor(e=new ql([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:hC;let x,w=!1,E,b,T,M;m&&(x=m.getSpacedPoints(h),w=!0,d=!1,E=m.computeFrenetFrames(h,!1),b=new O,T=new O,M=new O),d||(p=0,f=0,g=0,v=0);const A=a.extractPoints(c);let _=A.shape;const S=A.holes;if(!lo.isClockWise(_)){_=_.reverse();for(let H=0,L=S.length;H<L;H++){const K=S[H];lo.isClockWise(K)&&(S[H]=K.reverse())}}const z=lo.triangulateShape(_,S),B=_;for(let H=0,L=S.length;H<L;H++){const K=S[H];_=_.concat(K)}function G(H,L,K){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(L,K)}const U=_.length,$=z.length;function Y(H,L,K){let se,oe,de;const Te=H.x-L.x,_e=H.y-L.y,N=K.x-H.x,P=K.y-H.y,X=Te*Te+_e*_e,te=Te*P-_e*N;if(Math.abs(te)>Number.EPSILON){const le=Math.sqrt(X),re=Math.sqrt(N*N+P*P),Ne=L.x-_e/le,ye=L.y+Te/le,Ce=K.x-P/re,st=K.y+N/re,fe=((Ce-Ne)*P-(st-ye)*N)/(Te*P-_e*N);se=Ne+Te*fe-H.x,oe=ye+_e*fe-H.y;const Pe=se*se+oe*oe;if(Pe<=2)return new ue(se,oe);de=Math.sqrt(Pe/2)}else{let le=!1;Te>Number.EPSILON?N>Number.EPSILON&&(le=!0):Te<-Number.EPSILON?N<-Number.EPSILON&&(le=!0):Math.sign(_e)===Math.sign(P)&&(le=!0),le?(se=-_e,oe=Te,de=Math.sqrt(X)):(se=Te,oe=_e,de=Math.sqrt(X/2))}return new ue(se/de,oe/de)}const ae=[];for(let H=0,L=B.length,K=L-1,se=H+1;H<L;H++,K++,se++)K===L&&(K=0),se===L&&(se=0),ae[H]=Y(B[H],B[K],B[se]);const ie=[];let pe,Oe=ae.concat();for(let H=0,L=S.length;H<L;H++){const K=S[H];pe=[];for(let se=0,oe=K.length,de=oe-1,Te=se+1;se<oe;se++,de++,Te++)de===oe&&(de=0),Te===oe&&(Te=0),pe[se]=Y(K[se],K[de],K[Te]);ie.push(pe),Oe=Oe.concat(pe)}for(let H=0;H<p;H++){const L=H/p,K=f*Math.cos(L*Math.PI/2),se=g*Math.sin(L*Math.PI/2)+v;for(let oe=0,de=B.length;oe<de;oe++){const Te=G(B[oe],ae[oe],se);ve(Te.x,Te.y,-K)}for(let oe=0,de=S.length;oe<de;oe++){const Te=S[oe];pe=ie[oe];for(let _e=0,N=Te.length;_e<N;_e++){const P=G(Te[_e],pe[_e],se);ve(P.x,P.y,-K)}}}const ke=g+v;for(let H=0;H<U;H++){const L=d?G(_[H],Oe[H],ke):_[H];w?(T.copy(E.normals[0]).multiplyScalar(L.x),b.copy(E.binormals[0]).multiplyScalar(L.y),M.copy(x[0]).add(T).add(b),ve(M.x,M.y,M.z)):ve(L.x,L.y,0)}for(let H=1;H<=h;H++)for(let L=0;L<U;L++){const K=d?G(_[L],Oe[L],ke):_[L];w?(T.copy(E.normals[H]).multiplyScalar(K.x),b.copy(E.binormals[H]).multiplyScalar(K.y),M.copy(x[H]).add(T).add(b),ve(M.x,M.y,M.z)):ve(K.x,K.y,u/h*H)}for(let H=p-1;H>=0;H--){const L=H/p,K=f*Math.cos(L*Math.PI/2),se=g*Math.sin(L*Math.PI/2)+v;for(let oe=0,de=B.length;oe<de;oe++){const Te=G(B[oe],ae[oe],se);ve(Te.x,Te.y,u+K)}for(let oe=0,de=S.length;oe<de;oe++){const Te=S[oe];pe=ie[oe];for(let _e=0,N=Te.length;_e<N;_e++){const P=G(Te[_e],pe[_e],se);w?ve(P.x,P.y+x[h-1].y,x[h-1].x+K):ve(P.x,P.y,u+K)}}}Q(),he();function Q(){const H=i.length/3;if(d){let L=0,K=U*L;for(let se=0;se<$;se++){const oe=z[se];ne(oe[2]+K,oe[1]+K,oe[0]+K)}L=h+p*2,K=U*L;for(let se=0;se<$;se++){const oe=z[se];ne(oe[0]+K,oe[1]+K,oe[2]+K)}}else{for(let L=0;L<$;L++){const K=z[L];ne(K[2],K[1],K[0])}for(let L=0;L<$;L++){const K=z[L];ne(K[0]+U*h,K[1]+U*h,K[2]+U*h)}}n.addGroup(H,i.length/3-H,0)}function he(){const H=i.length/3;let L=0;be(B,L),L+=B.length;for(let K=0,se=S.length;K<se;K++){const oe=S[K];be(oe,L),L+=oe.length}n.addGroup(H,i.length/3-H,1)}function be(H,L){let K=H.length;for(;--K>=0;){const se=K;let oe=K-1;oe<0&&(oe=H.length-1);for(let de=0,Te=h+p*2;de<Te;de++){const _e=U*de,N=U*(de+1),P=L+se+_e,X=L+oe+_e,te=L+oe+N,le=L+se+N;R(P,X,te,le)}}}function ve(H,L,K){l.push(H),l.push(L),l.push(K)}function ne(H,L,K){F(H),F(L),F(K);const se=i.length/3,oe=y.generateTopUV(n,i,se-3,se-2,se-1);k(oe[0]),k(oe[1]),k(oe[2])}function R(H,L,K,se){F(H),F(L),F(se),F(L),F(K),F(se);const oe=i.length/3,de=y.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);k(de[0]),k(de[1]),k(de[3]),k(de[1]),k(de[2]),k(de[3])}function F(H){i.push(l[H*3+0]),i.push(l[H*3+1]),i.push(l[H*3+2])}function k(H){s.push(H.x),s.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return uC(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Uu[i.type]().fromJSON(i)),new of(n,e.options)}}const hC={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ue(s,o),new ue(a,l),new ue(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-u),new ue(d,1-g),new ue(v,1-m)]:[new ue(a,1-l),new ue(h,1-u),new ue(f,1-g),new ue(p,1-m)]}};function uC(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zo extends Ic{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zo(e.radius,e.detail)}}class af extends Ic{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new af(e.radius,e.detail)}}class ui extends ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new O,d=new O,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let w=0;m===0&&o===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let E=0;E<=t;E++){const b=E/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(b+w,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=h[m][y+1],w=h[m][y],E=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&f.push(x,w,b),(m!==n-1||l<Math.PI)&&f.push(w,E,b)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cr extends ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new O,u=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pr extends ct{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new O,d=new O,f=new O,g=new O,v=new O,p=new O,m=new O;for(let x=0;x<=n;++x){const w=x/n*s*Math.PI*2;y(w,s,o,e,f),y(w+.01,s,o,e,g),p.subVectors(g,f),m.addVectors(g,f),v.crossVectors(p,m),m.crossVectors(v,p),v.normalize(),m.normalize();for(let E=0;E<=i;++E){const b=E/i*Math.PI*2,T=-t*Math.cos(b),M=t*Math.sin(b);u.x=f.x+(T*m.x+M*v.x),u.y=f.y+(T*m.y+M*v.y),u.z=f.z+(T*m.z+M*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(E/i)}}for(let x=1;x<=n;x++)for(let w=1;w<=i;w++){const E=(i+1)*(x-1)+(w-1),b=(i+1)*x+(w-1),T=(i+1)*x+w,M=(i+1)*(x-1)+w;a.push(E,b,M),a.push(b,T,M)}this.setIndex(a),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2));function y(x,w,E,b,T){const M=Math.cos(x),A=Math.sin(x),_=E/w*x,S=Math.cos(_);T.x=b*(2+S)*.5*M,T.y=b*(2+S)*A*.5,T.z=b*Math.sin(_)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ot extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dC extends ai{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class fC extends ai{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Dl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function pC(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function mC(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function M0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ja{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gC extends Ja{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jr,endingEnd:Jr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qr:s=e,a=2*t-n;break;case rc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qr:o=e,l=2*n-t;break;case rc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,y=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*v+.5*g,w=f*p-f*v;for(let E=0;E!==a;++E)s[E]=m*o[h+E]+y*o[c+E]+x*o[l+E]+w*o[u+E];return s}}class w0 extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class _C extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(t,this.TimeBufferType),this.values=Dl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _C(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case jc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&pC(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Na;class ta extends Ji{constructor(e,t,n){super(e,t,n)}}ta.prototype.ValueTypeName="bool";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=Da;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;class S0 extends Ji{}S0.prototype.ValueTypeName="color";class ko extends Ji{}ko.prototype.ValueTypeName="number";class vC extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Vo extends Ji{InterpolantFactoryMethodLinear(e){return new vC(this.times,this.values,this.getValueSize(),e)}}Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends Ji{constructor(e,t,n){super(e,t,n)}}na.prototype.ValueTypeName="string";na.prototype.ValueBufferType=Array;na.prototype.DefaultInterpolation=Da;na.prototype.InterpolantFactoryMethodLinear=void 0;na.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Ji{}Ho.prototype.ValueTypeName="vector";class ku{constructor(e="",t=-1,n=[],i=Wd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yC(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=mC(l);l=Qp(l,1,h),c=Qp(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ko(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const p=[],m=[];M0(f,p,m,g),p.length!==0&&v.push(new u(d,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];p.push(x.time),m.push(x.morphTarget===v?1:0)}i.push(new ko(".morphTargetInfluence["+v+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ho,f+".position",d,"pos",i),n(Vo,f+".quaternion",d,"rot",i),n(Ho,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xC(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ko;case"vector":case"vector2":case"vector3":case"vector4":return Ho;case"color":return S0;case"quaternion":return Vo;case"bool":case"boolean":return ta;case"string":return na}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yC(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xC(r.type);if(r.times===void 0){const t=[],n=[];M0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ns={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class b0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const MC=new b0;class Qi{constructor(e){this.manager=e!==void 0?e:MC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const os={};class wC extends Error{constructor(e,t){super(e),this.response=t}}class Go extends Qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ns.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(os[e]!==void 0){os[e].push({onLoad:t,onProgress:n,onError:i});return}os[e]=[],os[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=os[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:w})=>{if(x)m.close();else{v+=w.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,T=h.length;b<T;b++){const M=h[b];M.onProgress&&M.onProgress(E)}m.enqueue(w),y()}},x=>{m.error(x)})}}});return new Response(p)}else throw new wC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ns.add(e,c);const h=os[e];delete os[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=os[e];if(h===void 0)throw this.manager.itemError(e),c;delete os[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class T0 extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ns.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ua("img");function l(){h(),Ns.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lf extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=new Yd;s.colorSpace=nt;const o=new T0(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class SC extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Rc,a=new Go(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_i,o.wrapT=c.wrapT!==void 0?c.wrapT:_i,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ii),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Mn extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=new ln,o=new T0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ia extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bC extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ah=new Ye,em=new O,tm=new O;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;em.setFromMatrixPosition(e.matrixWorld),t.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tm),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TC extends cf{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Uo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hf extends ia{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new TC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nm=new Ye,fa=new O,Eh=new O;class AC extends cf{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(fa),Eh.copy(n.position),Eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eh),n.updateMatrixWorld(),i.makeTranslation(-fa.x,-fa.y,-fa.z),nm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nm)}}class gr extends ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new AC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class EC extends cf{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kn extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new EC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rr extends ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class CC extends ia{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ca{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PC extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ns.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ns.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ns.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ns.add(e,l),s.manager.itemStart(e)}}class RC{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){oi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;oi.multiplyQuaternionsFlat(e,o,e,t,e,n),oi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const uf="\\[\\]\\.:\\/",LC=new RegExp("["+uf+"]","g"),df="[^"+uf+"]",IC="[^"+uf.replace("\\.","")+"]",DC=/((?:WC+[\/:])*)/.source.replace("WC",df),NC=/(WCOD+)?/.source.replace("WCOD",IC),FC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),UC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),OC=new RegExp("^"+DC+NC+FC+UC+"$"),BC=["material","materials","bones","map"];class zC{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LC,"")}static parseTrackName(e){const t=OC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);BC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=zC;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kC{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Jr,endingEnd:Jr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=O1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case z1:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Wd:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===B1;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===U1){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Qr,i.endingEnd=Qr):(e?i.endingStart=this.zeroSlopeAtStart?Qr:Jr:i.endingStart=rc,t?i.endingEnd=this.zeroSlopeAtEnd?Qr:Jr:i.endingEnd=rc)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const VC=new Float32Array(1);class A0 extends Ks{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new RC(mt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new w0(new Float32Array(2),new Float32Array(2),1,VC),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ku.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wd),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new kC(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ku.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ie{constructor(e){this.value=e}clone(){return new Ie(this.value.clone===void 0?this.value:this.value.clone())}}const im=new Ye;class E0{constructor(e,t,n=0,i=1/0){this.ray=new Jo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(im),this}intersectObject(e,t=!0,n=[]){return Vu(e,this,n,t),n.sort(sm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vu(e[i],this,n,t);return n.sort(sm),n}}function sm(r,e){return r.distance-e.distance}function Vu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Vu(s[o],e,t,!0)}}class dc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rm=new O;class HC extends Tt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ct,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ze(i,3));const s=new ea({fog:!1,toneMapped:!1});this.cone=new ef(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),rm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class GC extends ge{constructor(e,t,n){const i=new ui(t,4,2),s=new Mt({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const WC=new O,om=new xe,am=new xe;class jC extends Tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new af(t);i.rotateY(Math.PI*.5),this.material=new Mt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new ot(o,3)),this.add(new ge(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");om.copy(this.light.color),am.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?om:am;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(WC.setFromMatrixPosition(this.light.matrixWorld).negate())}}const lm=new O,Nl=new O,cm=new O;class XC extends Tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ct;i.setAttribute("position",new Ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new ea({fog:!1,toneMapped:!1});this.lightPlane=new Bo(i,s),this.add(this.lightPlane),i=new ct,i.setAttribute("position",new Ze([0,0,0,0,0,1],3)),this.targetLine=new Bo(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),lm.setFromMatrixPosition(this.light.matrixWorld),Nl.setFromMatrixPosition(this.light.target.matrixWorld),cm.subVectors(Nl,lm),this.lightPlane.lookAt(Nl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Nl),this.targetLine.scale.z=cm.length()}}class qC extends ef{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ct;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const s=new ea({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new xe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class YC{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ou,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let x=0,w=m.length;x<w;x++){const E=m[x],b=new ql;b.curves=E.curves,y.push(b)}return y}function n(m,y){const x=y.length;let w=!1;for(let E=x-1,b=0;b<x;E=b++){let T=y[E],M=y[b],A=M.x-T.x,_=M.y-T.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(T=y[b],A=-A,M=y[E],_=-_),m.y<T.y||m.y>M.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const S=_*(m.x-T.x)-A*(m.y-T.y);if(S===0)return!0;if(S<0)continue;w=!w}}else{if(m.y!==T.y)continue;if(M.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=M.x)return!0}}return w}const i=lo.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ql,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,v;d[g]=void 0,f[g]=[];for(let m=0,y=s.length;m<y;m++)a=s[m],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new ql,p:v},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:v[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,y=0;for(let x=0,w=d.length;x<w;x++)u[x]=[];for(let x=0,w=d.length;x<w;x++){const E=f[x];for(let b=0;b<E.length;b++){const T=E[b];let M=!0;for(let A=0;A<d.length;A++)n(T.p,d[A].p)&&(x!==A&&y++,M?(M=!1,u[A].push(T)):m=!0);M&&u[x].push(T)}}y>0&&m===!1&&(f=u)}let p;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),p=f[m];for(let x=0,w=p.length;x<w;x++)l.holes.push(p[x].h)}return c}}class $C extends Ks{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);const hm={type:"change"},ff={type:"start"},C0={type:"end"},Fl=new Jo,um=new Is,KC=Math.cos(70*Fa.DEG2RAD),on=new O,Un=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6;class P0 extends $C{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:so.ROTATE,MIDDLE:so.DOLLY,RIGHT:so.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new oi,this._lastTargetPosition=new O,this._quat=new oi().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dc,this._sphericalDelta=new dc,this._scale=1,this._panOffset=new O,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new O,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JC.bind(this),this._onPointerDown=ZC.bind(this),this._onPointerUp=QC.bind(this),this._onContextMenu=oP.bind(this),this._onMouseWheel=nP.bind(this),this._onKeyDown=iP.bind(this),this._onTouchStart=sP.bind(this),this._onTouchMove=rP.bind(this),this._onMouseDown=eP.bind(this),this._onMouseMove=tP.bind(this),this._interceptControlDown=aP.bind(this),this._interceptControlUp=lP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hm),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=on.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<KC?this.object.lookAt(this.target):(um.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(um,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;on.copy(i).sub(this.target);let s=on.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ZC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function JC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(C0),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function eP(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case so.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=yt.DOLLY;break;case so.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=yt.ROTATE}break;case so.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(ff)}function tP(r){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function nP(r){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(r.preventDefault(),this.dispatchEvent(ff),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(C0))}function iP(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function sP(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=yt.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=yt.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(ff)}function rP(r){switch(this._trackPointer(r),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=yt.NONE}}function oP(r){this.enabled!==!1&&r.preventDefault()}function aP(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lP(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Gi{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Gi.nextNameID=Gi.nextNameID||0,this.$name.id=`lil-gui-name-${++Gi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cP extends Gi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Hu(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hP={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Hu,toHexString:Hu},ka={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},uP={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=ka.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ka.toHexString(i)}},dP={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=ka.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return ka.toHexString(i)}},fP=[hP,ka,uP,dP];function pP(r){return fP.find(e=>e.match(r))}class mP extends Gi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pP(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Hu(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ph extends Gi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class gP extends Gi{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,l,c,h,u;const d=5,f=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=y=>{if(o){const x=y.clientX-a,w=y.clientY-l;Math.abs(w)>d?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&v()}if(!o){const x=y.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,y,x,w,E)=>(m-y)/(x-y)*(E-w)+w,t=m=>{const y=this.$slider.getBoundingClientRect();let x=e(m,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(o){const y=m.touches[0].clientX-a,x=m.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let v;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const x=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class _P extends Gi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class vP extends Gi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const xP=`.lil-gui {
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
}`;function yP(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let dm=!1;class pf{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!dm&&a&&(yP(xP),dm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new _P(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new gP(this,e,t,n,i,s);case"boolean":return new cP(this,e,t);case"string":return new vP(this,e,t);case"function":return new Ph(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new mP(this,e,t,n)}addFolder(e){const t=new pf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ph||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ph)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}let MP=class{get number(){throw new Error("Lesson class must implement a getter for `number` property")}get title(){throw new Error("Lesson class must implement a getter for `title` property")}get link(){throw new Error("Lesson class must implement a getter for `link` property")}open(){throw new Error("Lesson class must implement an `open` method that implements current lesson logic")}close(){throw new Error("Lesson class must implement `close` method that release resources used by the lesson implementation")}};var mo,go,_o,qt,R0,L0,I0,D0,N0,F0,U0,O0,B0,z0;class et extends MP{constructor(){super(...arguments);Re(this,qt);V(this,"object3d",null);V(this,"scene");V(this,"camera");V(this,"renderer");V(this,"guiControl");V(this,"control");V(this,"canvas");V(this,"hasGuiTweaks");V(this,"hasAnimation");Re(this,mo);Re(this,go);Re(this,_o)}update(t){throw new Error("General lesson class with animations must implement an `update` method that implements current lesson logic")}animate(t=0){this.update(t),this.renderer.render(this.scene,this.camera),Ut(this,mo,requestAnimationFrame(this.animate.bind(this)))}open(){this.init(),document.body.appendChild(this.canvas),this.hasAnimation&&this.animate()}close(){document.body.removeChild(this.canvas),this.dispose(),Ue(this,mo)&&cancelAnimationFrame(Ue(this,mo))}init(){C(this,qt,z0).call(this),this.initScene(),this.initCamera(),this.initRenderer(),this.initControl(),this.initGuiControl(),this.hasGuiTweaks&&this.guiControl.show(!0)}initScene(){this.scene=new TE}initCamera(){this.camera=new bn(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.scene.add(this.camera)}initRenderer(){let t=!1;window.devicePixelRatio<=1&&(t=!0),this.renderer=new bE({canvas:this.canvas,antialias:t}),this.resizeRenderer(),Ut(this,_o,this.resizeRenderer.bind(this)),window.addEventListener("resize",Ue(this,_o))}initControl(){this.control=new P0(this.camera,this.canvas),this.control.enableDamping=!0}initGuiControl(){this.guiControl=new pf({width:300,title:"GUI"}),this.guiControl.hide(),Ut(this,go,C(this,qt,B0).bind(this)),document.addEventListener("keydown",Ue(this,go))}resizeRenderer(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(this.scene,this.camera)}dispose(){C(this,qt,R0).call(this),this.scene=null,this.camera=null,this.object3d=null,this.renderer=null,this.control=null,this.guiControl=null,this.canvas=null}}mo=new WeakMap,go=new WeakMap,_o=new WeakMap,qt=new WeakSet,R0=function(){C(this,qt,L0).call(this),C(this,qt,N0).call(this),C(this,qt,F0).call(this),C(this,qt,U0).call(this),C(this,qt,O0).call(this)},L0=function(){this.scene.traverse(t=>{t.isMesh&&(C(this,qt,I0).call(this,t),C(this,qt,D0).call(this,t))})},I0=function(t){t.geometry&&t.geometry.dispose()},D0=function(t){if(t.material){for(const n in t.material){const i=t.material[n];i&&typeof i.dispose=="function"&&i.dispose()}t.material.dispose()}},N0=function(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])},F0=function(){this.renderer.dispose(),window.removeEventListener("resize",Ue(this,_o))},U0=function(){this.control.dispose()},O0=function(){this.guiControl.destroy(),document.removeEventListener("keydown",Ue(this,go))},B0=function(t){t.code==="KeyH"&&this.guiControl.show(this.guiControl._hidden)},z0=function(){this.canvas=document.createElement("canvas")};let wP=class extends et{get number(){return"03"}get title(){return"First Three.js Project"}get link(){return"https://threejs-journey.com/lessons/first-threejs-project"}init(){super.init();const e=new sn(1,1,1),t=new Mt({color:16711680});this.object3d=new ge(e,t),this.scene.add(this.object3d),this.renderer.render(this.scene,this.camera)}},SP=class extends et{get number(){return"04"}get title(){return"Transform objects"}get link(){return"https://threejs-journey.com/lessons/transform-objects"}init(){super.init();const e=new qC(6);this.scene.add(e),this.object3d=new Di,this.object3d.scale.y=2,this.object3d.scale.x=.5,this.object3d.rotation.y=Math.PI*.25,this.scene.add(this.object3d);const t=new sn(1,1,1),n=new Mt({color:16711680}),i=new ge(t,n);i.position.x=-1.5,this.object3d.add(i);const s=new sn(1,1,1),o=new Mt({color:65280}),a=new ge(s,o);a.position.x=0,this.object3d.add(a);const l=new sn(1,1,1),c=new Mt({color:255}),h=new ge(l,c);h.position.x=1.5,this.object3d.add(h),this.camera.lookAt(i.position),this.renderer.render(this.scene,this.camera)}};function ls(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function k0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},mf,En,Bt,vi=1e8,Et=1/vi,Gu=Math.PI*2,bP=Gu/4,TP=0,V0=Math.sqrt,AP=Math.cos,EP=Math.sin,mn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},vs=function(e){return typeof e=="number"},gf=function(e){return typeof e>"u"},Xi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},_f=function(){return typeof window<"u"},Ul=function(e){return Xt(e)||mn(e)},H0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,Wu=/(?:-?\.?\d|\.)+/gi,G0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W0=/[+-]=-?[.\d]+/,j0=/[^,'"\[\]\s]+/gi,CP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Oi,ju,vf,ci={},fc={},X0,q0=function(e){return(fc=Tr(e,ci))&&jn},xf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Va=function(e,t){return!t&&console.warn(e)},Y0=function(e,t){return e&&(ci[e]=t)&&fc&&(fc[e]=t)||ci},Ha=function(){return 0},PP={suppressEvents:!0,isStart:!0,kill:!1},Yl={suppressEvents:!0,kill:!1},RP={suppressEvents:!0},yf={},zs=[],Xu={},$0,ii={},Lh={},fm=30,$l=[],Mf="",wf=function(e){var t=e[0],n,i;if(Xi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=$l.length;i--&&!$l[i].targetTest(t););n=$l[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new x_(e[i],n)))||e.splice(i,1);return e},xr=function(e){return e._gsap||wf(xi(e))[0]._gsap},K0=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():gf(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},pn=function(e){return Math.round(e*1e7)/1e7||0},co=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},LP=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pc=function(){var e=zs.length,t=zs.slice(0),n,i;for(Xu={},zs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Z0=function(e,t,n,i){zs.length&&!En&&pc(),e.render(t,n,En&&t<0&&(e._initted||e._startAt)),zs.length&&!En&&pc()},J0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(j0).length<2?t:mn(e)?e.trim():e},Q0=function(e){return e},Mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},IP=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Tr=function(e,t){for(var n in t)e[n]=t[n];return e},pm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},mc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pa=function(e){var t=e.parent||Vt,n=e.keyframes?IP(Cn(e.keyframes)):Mi;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},DP=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},e_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Nc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ws=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qu=function(e,t,n,i){return e._startAt&&(En?e._startAt.revert(Yl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},FP=function r(e){return!e||e._ts&&r(e.parent)},mm=function(e){return e._repeat?jo(e._tTime,e=e.duration()+e._rDelay)*e:0},jo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fc=function(e){return e._end=pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Uc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fc(e),n._dirty||yr(n,e)),e},t_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gc(e.rawTime(),t),(!t._dur||Qa(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},ki=function(e,t,n,i){return t.parent&&Ws(t),t._start=pn((vs(n)?n:n||e!==Vt?pi(e,n,t):e._time)+t._delay),t._end=pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),e_(e,t,"_first","_last",e._sort?"_start":0),Yu(t)||(e._recent=t),i||t_(e,t),e._ts<0&&Uc(e,e._tTime),e},n_=function(e,t){return(ci.ScrollTrigger||xf("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},i_=function(e,t,n,i,s){if(bf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$0!==si.frame)return zs.push(e),e._lazy=[s,i],1},UP=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},OP=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&UP(e)&&!(!e._initted&&Yu(e))||(e._ts<0||e._dp._ts<0)&&!Yu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Qa(0,e._tDur,t),h=jo(l,a),e._yoyo&&h&1&&(o=1-o),h!==jo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||En||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&i_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&qu(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ws(e,1),!n&&!En&&(ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BP=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xo=function(e,t,n,i){var s=e._repeat,o=pn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:pn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Uc(e,e._tTime=e._tDur*a),e.parent&&Fc(e),n||yr(e.parent,e),e},gm=function(e){return e instanceof Dn?yr(e):Xo(e,e._dur)},zP={_start:0,endTime:Ha,totalDuration:Ha},pi=function r(e,t,n){var i=e.labels,s=e._recent||zP,o=e.duration()>=vi?s.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ra=function(e,t,n){var i=vs(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new tn(t[0],o,t[s+1])},Zs=function(e,t){return e||e===0?t(e):t},Qa=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!mn(e)||!(t=CP.exec(e))?"":t[1]},kP=function(e,t,n){return Zs(n,function(i){return Qa(e,t,i)})},$u=[].slice,s_=function(e,t){return e&&Xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Oi},VP=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return mn(i)&&!t||s_(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):mn(e)&&!n&&(ju||!qo())?$u.call((t||vf).querySelectorAll(e),0):Cn(e)?VP(e,n):s_(e)?$u.call(e,0):e?[e]:[]},Ku=function(e){return e=xi(e)[0]||Va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xi(t,n.querySelectorAll?n:n===e?Va("Invalid scope")||vf.createElement("div"):e)}},r_=function(e){return e.sort(function(){return .5-Math.random()})},o_=function(e){if(Xt(e))return e;var t=Xi(e)?e:{each:e},n=Mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return mn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var v=(g||t).length,p=o[v],m,y,x,w,E,b,T,M,A;if(!p){if(A=t.grid==="auto"?0:(t.grid||[1,vi])[1],!A){for(T=-vi;T<(T=g[A++].getBoundingClientRect().left)&&A<v;);A<v&&A--}for(p=o[v]=[],m=l?Math.min(A,v)*h-.5:i%A,y=A===vi?0:l?v*u/A-.5:i/A|0,T=0,M=vi,b=0;b<v;b++)x=b%A-m,w=y-(b/A|0),p[b]=E=c?Math.abs(c==="y"?w:x):V0(x*x+w*w),E>T&&(T=E),E<M&&(M=E);i==="random"&&r_(p),p.max=T-M,p.min=M,p.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(A>v?v-1:c?c==="y"?v/A:A:Math.max(A,v/A))||0)*(i==="edges"?-1:1),p.b=v<0?s-v:s,p.u=Tn(t.amount||t.each)||0,n=n&&v<0?g_(n):n}return v=(p[d]-p.min)/p.max||0,pn(p.b+(n?n(v):v)*p.v)+p.u}},Zu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vs(n)?0:Tn(n))}},a_=function(e,t){var n=Cn(e),i,s;return!n&&Xi(e)&&(i=n=e.radius||vi,e.values?(e=xi(e.values),(s=!vs(e[0]))&&(i*=i)):e=Zu(e.increment)),Zs(t,n?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vi,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||vs(o)?h:h+Tn(o)}:Zu(e))},l_=function(e,t,n,i){return Zs(Cn(e)?!t:n===!0?!!(n=0):!i,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},HP=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},GP=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},WP=function(e,t,n){return h_(e,t,0,1,n)},c_=function(e,t,n){return Zs(n,function(i){return e[~~t(i)]})},jP=function r(e,t,n){var i=t-e;return Cn(e)?c_(e,r(0,e.length),t):Zs(n,function(s){return(i+(s-e)%i)%i+e})},XP=function r(e,t,n){var i=t-e,s=i*2;return Cn(e)?c_(e,r(0,e.length-1),t):Zs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ga=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?j0:Wu),n+=e.substr(t,i-t)+l_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},h_=function(e,t,n,i,s){var o=t-e,a=i-n;return Zs(s,function(l){return n+((l-e)/o*a||0)})},qP=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=mn(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var v=Math.min(d,~~g);return h[v](g-v)},n=t}else i||(e=Tr(Cn(e)?[]:{},e));if(!h){for(l in t)Sf.call(a,e,l,"get",t[l]);s=function(g){return Ef(g,a)||(o?e.p:e)}}}return Zs(n,s)},_m=function(e,t,n){var i=e.labels,s=vi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&zs.length&&pc(),a&&(Bt=a),h=l?s.apply(c,l):s.call(c),Bt=o,h},ya=function(e){return Ws(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&ri(e,"onInterrupt"),e},io,u_=[],d_=function(e){if(e)if(e=!e.name&&e.default||e,_f()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ha,render:Ef,add:Sf,kill:cR,modifier:lR,rawVars:0},o={targetTest:0,get:0,getSetter:Af,aliases:{},register:0};if(qo(),e!==i){if(ii[t])return;Mi(i,Mi(mc(e,s),o)),Tr(i.prototype,Tr(s,mc(e,o))),ii[i.prop=t]=i,e.targetTest&&($l.push(i),yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Y0(t,i),e.register&&e.register(jn,i,Hn)}else u_.push(e)},St=255,Ma={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Ih=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},f_=function(e,t,n){var i=e?vs(e)?[e>>16,e>>8&St,e&St]:0:Ma.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ma[e])i=Ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Wu),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ih(l+1/3,s,o),i[1]=Ih(l,s,o),i[2]=Ih(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(G0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wu)||Ma.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},p_=function(e){var t=[],n=[],i=-1;return e.split(ks).forEach(function(s){var o=s.match(no)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},vm=function(e,t,n){var i="",s=(e+i).match(ks),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=f_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=p_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ks,"1").split(no),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ks),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ks=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),YP=/hsl[a]?\(/,m_=function(e){var t=e.join(" "),n;if(ks.lastIndex=0,ks.test(t))return n=YP.test(t),e[1]=vm(e[1],n),e[0]=vm(e[0],n,p_(e[1])),!0},Wa,si=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function v(p){var m=r()-i,y=p===!0,x,w,E,b;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,x=E-o,(x>0||y)&&(b=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,o+=x+(x>=s?4:s-x),w=1),y||(l=c(v)),w)for(f=0;f<a.length;f++)a[f](E,d,b,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){X0&&(!ju&&_f()&&(Oi=ju=window,vf=Oi.document||{},ci.gsap=jn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(jn.version),q0(fc||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),u_.forEach(d_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Wa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wa=0,c=Ha},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,y){var x=m?function(w,E,b,T){p(w,E,b,T),u.remove(x)}:p;return u.remove(p),a[y?"unshift":"push"](x),qo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),qo=function(){return!Wa&&si.wake()},it={},$P=/^[\d.\-M][\d.\-,\s]/,KP=/["']/g,ZP=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(KP,"").trim():+c,i=l.substr(a+1).trim();return t},JP=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},QP=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ZP(t[1])]:JP(e).split(",").map(J0)):it._CE&&$P.test(e)?it._CE("",e):n},g_=function(e){return function(t){return 1-e(1-t)}},__=function r(e,t){for(var n=e._first,i;n;)n instanceof Dn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Mr=function(e,t){return e&&(Xt(e)?e:it[e]||QP(e))||t},Lr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vn(e,function(a){it[a]=ci[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},v_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*EP((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:v_(a);return s=Gu/s,l.config=function(c,h){return r(e,c,h)},l},Nh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:v_(n);return i.config=function(s){return r(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Lr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Lr("Elastic",Dh("in"),Dh("out"),Dh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Lr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Lr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Lr("Circ",function(r){return-(V0(1-r*r)-1)});Lr("Sine",function(r){return r===1?1:-AP(r*bP)+1});Lr("Back",Nh("in"),Nh("out"),Nh());it.SteppedEase=it.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((i*Qa(0,o,a)|0)+s)*n}}};Wo.ease=it["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mf+=r+","+r+"Params,"});var x_=function(e,t){this.id=TP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:K0,this.set=t?t.getSetter:Af},ja=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Wa||si.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uc(this,n),!s._dp||s.parent||t_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Z0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?jo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Qa(-Math.abs(this._delay),this._tDur,s),i!==!1),Fc(this),NP(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=RP);var i=En;return En=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Xt(n)?n:Q0,a=function(){var c=i.then;i.then=null,Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ya(this)},r}();Mi(ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Dn=function(r){k0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Vt&&ki(n.parent||Vt,ls(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&n_(ls(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ra(0,arguments,this),this},t.from=function(i,s,o){return Ra(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ra(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,pi(this,o),1),this},t.call=function(i,s,o){return ki(this,tn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new tn(i,o,pi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Pa(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Pa(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pn(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,v,p,m,y,x,w,E,b,T;if(this!==Vt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,w=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=pn(h%p),h===l?(v=this._repeat,d=c):(v=~~(h/p),v&&v===h/p&&(d=c,v--),d>c&&(d=c)),E=jo(this._tTime,p),!a&&this._tTime&&E!==v&&this._tTime-E*p-this._dur<=0&&(E=v),b&&v&1&&(d=c-d,T=1),v!==E&&!this._lock){var M=b&&E&1,A=M===(b&&v&1);if(v<E&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(T?0:pn(v*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;__(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=BP(this,pn(a),pn(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!v&&(ri(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Et);break}}f=g}else{f=this._last;for(var _=i<0?i:d;f;){if(g=f._prev,(f._act||_<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(_-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(_-f._start)*f._ts,s,o||En&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=_?-Et:Et);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Et)._zTime=d>=a?1:-1,this._ts))return this._start=w,Fc(this),this.render(i,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ws(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(vs(s)||(s=pi(this,s,i)),!(i instanceof ja)){if(Cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(mn(i))return this.addLabel(i,s);if(Xt(i))i=tn.delayedCall(0,i);else return this}return this!==i?ki(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return mn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(Nc(this,i),i===this._recent&&(this._recent=this._last),yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=tn.delayedCall(0,s||Ha,o);return a.data="isPause",this._hasPause=1,ki(this,a,pi(this,i))},t.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&Ws(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=xi(i),l=this._first,c=vs(s),h;l;)l instanceof tn?LP(l._targets,a)&&(c?(!Fs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=pi(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=tn.to(o,Mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Xo(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Mi({startAt:{time:pi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_m(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_m(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=vi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ki(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(Z0(Vt,gc(i,Vt)),$0=si.frame),si.frame>=fm){fm+=li.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&li.autoSleep&&si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||si.sleep()}}},e}(ja);Mi(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eR=function(e,t,n,i,s,o,a){var l=new Hn(this._pt,e,t,0,1,T_,null,s),c=0,h=0,u,d,f,g,v,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ga(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Rh)||[];u=Rh.exec(i);)g=u[0],v=i.substring(c,u.index),f?f=(f+1)%5:v.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:p,c:g.charAt(1)==="="?co(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(W0.test(i)||m)&&(l.e=0),this._pt=l,l},Sf=function(e,t,n,i,s,o,a,l,c,h){Xt(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:Xt(u)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Xt(u)?c?rR:S_:Tf,g;if(mn(i)&&(~i.indexOf("random(")&&(i=Ga(i)),i.charAt(1)==="="&&(g=co(d,i)+(Tn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Ju)return!isNaN(d*i)&&i!==""?(g=new Hn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?aR:b_,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&xf(t,i),eR.call(this,e,t,d,i,f,l||li.stringFilter,c))},tR=function(e,t,n,i,s){if(Xt(e)&&(e=La(e,s,t,n,i)),!Xi(e)||e.style&&e.nodeType||Cn(e)||H0(e))return mn(e)?La(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=La(e[a],s,t,n,i);return o},y_=function(e,t,n,i,s,o){var a,l,c,h;if(ii[e]&&(a=new ii[e]).init(s,a.rawVars?t[e]:tR(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==io))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Fs,Ju,bf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,v=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!mf,w=e.timeline,E,b,T,M,A,_,S,I,z,B,G,U,$;if(w&&(!d||!s)&&(s="none"),e._ease=Mr(s,Wo.ease),e._yEase=u?g_(Mr(u===!0?s:u,Wo.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!w&&!!i.runBackwards,!w||d&&!i.stagger){if(I=p[0]?xr(p[0]).harness:0,U=I&&i[I.prop],E=mc(i,yf),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!f?v.render(-1,!0):v.revert(h&&g?Yl:PP),v._lazy=0),o){if(Ws(e._startAt=tn.set(p,Mi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!a&&!f)&&e._startAt.revert(Yl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!v){if(t&&(a=!1),T=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!v&&kn(l),immediateRender:a,stagger:0,parent:m},E),U&&(T[I.prop]=U),Ws(e._startAt=tn.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(Yl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&kn(l)||l&&!g,b=0;b<p.length;b++){if(A=p[b],S=A._gsap||wf(p)[b]._gsap,e._ptLookup[b]=B={},Xu[S.id]&&zs.length&&pc(),G=y===p?b:y.indexOf(A),I&&(z=new I).init(A,U||E,e,G,y)!==!1&&(e._pt=M=new Hn(e._pt,A,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(Y){B[Y]=M}),z.priority&&(_=1)),!I||U)for(T in E)ii[T]&&(z=y_(T,E,e,G,A,y))?z.priority&&(_=1):B[T]=M=Sf.call(e,A,T,"get",E[T],G,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(A,e._op[b]),x&&e._pt&&(Fs=e,Vt.killTweensOf(A,B,e.globalTime(t)),$=!e.parent,Fs=0),e._pt&&l&&(Xu[S.id]=1)}_&&A_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&w.render(vi,!0,!0)},nR=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ju=1,e.vars[t]="+=0",bf(e,a),Ju=0,l?Va(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=$t(n)+Tn(u.e)),u.b&&(u.b=h.s+Tn(u.b))},iR=function(e,t){var n=e[0]?xr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Tr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},sR=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},La=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):mn(e)&&~e.indexOf("random(")?Ga(e):e},M_=Mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",w_={};Vn(M_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return w_[r]=1});var tn=function(r){k0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Pa(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,v=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Vt,x=(Cn(n)||H0(n)?vs(n[0]):"length"in i)?[n]:xi(n),w,E,b,T,M,A,_,S;if(a._targets=x.length?wf(x):Va("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ul(c)||Ul(h)){if(i=a.vars,w=a.timeline=new Dn({data:"nested",defaults:v||{},targets:y&&y.data==="nested"?y.vars.targets:x}),w.kill(),w.parent=w._dp=ls(a),w._start=0,d||Ul(c)||Ul(h)){if(T=x.length,_=d&&o_(d),Xi(d))for(M in d)~M_.indexOf(M)&&(S||(S={}),S[M]=d[M]);for(E=0;E<T;E++)b=mc(i,w_),b.stagger=0,m&&(b.yoyoEase=m),S&&Tr(b,S),A=x[E],b.duration=+La(c,ls(a),E,A,x),b.delay=(+La(h,ls(a),E,A,x)||0)-a._delay,!d&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),w.to(A,b,_?_(E,A,x):0),w._ease=it.none;w.duration()?c=h=0:a.timeline=0}else if(g){Pa(Mi(w.vars.defaults,{ease:"none"})),w._ease=Mr(g.ease||i.ease||"none");var I=0,z,B,G;if(Cn(g))g.forEach(function(U){return w.to(x,U,">")}),w.duration();else{b={};for(M in g)M==="ease"||M==="easeEach"||sR(M,g[M],b,g.easeEach);for(M in b)for(z=b[M].sort(function(U,$){return U.t-$.t}),I=0,E=0;E<z.length;E++)B=z[E],G={ease:B.e,duration:(B.t-(E?z[E-1].t:0))/100*c},G[M]=B.v,w.to(x,G,I),I+=G.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!mf&&(Fs=ls(a),Vt.killTweensOf(x),Fs=0),ki(y,ls(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===pn(y._time)&&kn(u)&&FP(ls(a))&&y.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-h)||0)),p&&n_(ls(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Et&&!h?l:i<Et?0:i,d,f,g,v,p,m,y,x,w;if(!c)OP(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,s,o);if(d=pn(u%v),u===l?(g=this._repeat,d=c):(g=~~(u/v),g&&g===pn(u/v)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(w=this._yEase,d=c-d),p=jo(this._tTime,v),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&__(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==v&&this._initted&&(this._lock=o=1,this.render(pn(v*g),!0).invalidate()._lock=0))}if(!this._initted){if(i_(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(w||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&!g&&(ri(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&qu(this,i,s,o),ri(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&qu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ws(this,1),!s&&!(h&&!a)&&(u||a||m)&&(ri(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Wa||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bf(this,c),h=this._ease(c/this._dur),nR(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Uc(this,0),this.parent||e_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fs&&Fs.vars.overwrite!==!0)._first||ya(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?xi(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,v,p,m;if((!s||s==="all")&&DP(a,l))return s==="all"&&(this._pt=0),ya(this);for(u=this._op=this._op||[],s!=="all"&&(mn(s)&&(v={},Vn(s,function(y){return v[y]=1}),s=v),s=iR(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(u[m]=s,g=d,f={}):(f=u[m]=u[m]||{},g=s);for(v in g)p=d&&d[v],p&&((!("kill"in p.d)||p.d.kill(v)===!0)&&Nc(this,p,"_pt"),delete d[v]),f!=="all"&&(f[v]=1)}return this._initted&&!this._pt&&h&&ya(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ra(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ra(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e}(ja);Mi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new Dn,t=$u.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Tf=function(e,t,n){return e[t]=n},S_=function(e,t,n){return e[t](n)},rR=function(e,t,n,i){return e[t](i.fp,n)},oR=function(e,t,n){return e.setAttribute(t,n)},Af=function(e,t){return Xt(e[t])?S_:gf(e[t])&&e.setAttribute?oR:Tf},b_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},T_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lR=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},cR=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hR=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},A_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Hn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||b_,this.d=l||this,this.set=c||Tf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=hR,this.m=n,this.mt=s,this.tween=i},r}();Vn(Mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yf[r]=1});ci.TweenMax=ci.TweenLite=tn;ci.TimelineLite=ci.TimelineMax=Dn;Vt=new Dn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=m_;var wr=[],Kl={},uR=[],xm=0,dR=0,Fh=function(e){return(Kl[e]||uR).map(function(t){return t()})},Qu=function(){var e=Date.now(),t=[];e-xm>2&&(Fh("matchMediaInit"),wr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Oi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Fh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xm=e,Fh("matchMedia"))},E_=function(){function r(t,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dR++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var o=this,a=function(){var c=Bt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ku(s)),Bt=o,u=i.apply(o,arguments),Xt(u)&&o._r.push(u),Bt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=wr.length;o--;)wr[o].id===this.id&&wr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),fR=function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Xi(n)||(n={matches:n});var o=new E_(0,s||this.scope),a=o.conditions={},l,c,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Oi.matchMedia(n[c]),l&&(wr.indexOf(o)<0&&wr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Qu):l.addEventListener("change",Qu)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_c={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return d_(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=xi(e)[0]);var s=xr(e||{}).get,o=n?Q0:J0;return n==="native"&&(n=""),e&&(t?o((ii[t]&&ii[t].get||s)(e,t,n,i)):function(a,l,c){return o((ii[a]&&ii[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=xi(e),e.length>1){var i=e.map(function(h){return jn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=ii[t],a=xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;io._pt=0,u.init(e,n?h+n:h,io,0,[e]),u.render(1,u),io._pt&&Ef(1,io)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=jn.to(e,Tr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mr(e.ease,Wo.ease)),pm(Wo,e||{})},config:function(e){return pm(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ii[a]&&!ci[a]&&Va(t+" effect requires "+a+" plugin.")}),Lh[t]=function(a,l,c){return n(xi(a),Mi(l||{},s),c)},o&&(Dn.prototype[t]=function(a,l,c){return this.add(Lh[t](a,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Mr(t)},parseEase:function(e,t){return arguments.length?Mr(e,t):it},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&ki(n,i,i._start-i._delay),i=s;return ki(Vt,n,0),n},context:function(e,t){return e?new E_(e,t):Bt},matchMedia:function(e){return new fR(e)},matchMediaRefresh:function(){return wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qu()},addEventListener:function(e,t){var n=Kl[e]||(Kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:jP,wrapYoyo:XP,distribute:o_,random:l_,snap:a_,normalize:WP,getUnit:Tn,clamp:kP,splitColor:f_,toArray:xi,selector:Ku,mapRange:h_,pipe:HP,unitize:GP,interpolate:qP,shuffle:r_},install:q0,effects:Lh,ticker:si,updateRoot:Dn.updateRoot,plugins:ii,globalTimeline:Vt,core:{PropTween:Hn,globals:Y0,Tween:tn,Timeline:Dn,Animation:ja,getCache:xr,_removeLinkedListItem:Nc,reverting:function(){return En},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return mf=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _c[r]=tn[r]});si.add(Dn.updateRoot);io=_c.to({},{duration:0});var pR=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mR=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=pR(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Uh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(mn(s)&&(l={},Vn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mR(a,s)}}}},jn=_c.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Uh("roundProps",Zu),Uh("modifiers"),Uh("snap",a_))||_c;tn.version=Dn.version=jn.version="3.12.5";X0=1;_f()&&qo();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ym,Us,ho,Cf,_r,Mm,Pf,gR=function(){return typeof window<"u"},xs={},cr=180/Math.PI,uo=Math.PI/180,Yr=Math.atan2,wm=1e8,Rf=/([A-Z])/g,_R=/(left|right|width|margin|padding|x)/i,vR=/[\s,\(]\S/,Hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MR=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},C_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},P_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wR=function(e,t,n){return e.style[t]=n},SR=function(e,t,n){return e.style.setProperty(t,n)},bR=function(e,t,n){return e._gsap[t]=n},TR=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},AR=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ER=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",Gn=Gt+"Origin",CR=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in xs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hs(i,a)}):this.tfm[e]=o.x?o[e]:hs(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return Hi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},R_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},PR=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pf(),(!s||!s.isStart)&&!n[Gt]&&(R_(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},L_=function(e,t){var n={target:e,props:[],revert:PR,save:CR};return e._gsap||jn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},I_,td=function(e,t){var n=Us.createElementNS?Us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Us.createElement(e);return n&&n.style?n:Us.createElement(e)},Wi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Yo(t)||t,1)||""},Sm="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,n){var i=t||_r,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Sm[o]:"")+e},nd=function(){gR()&&window.document&&(ym=window,Us=ym.document,ho=Us.documentElement,_r=td("div")||{style:{}},td("div"),Gt=Yo(Gt),Gn=Gt+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",I_=!!Yo("perspective"),Pf=jn.core.reverting,Cf=1)},Oh=function r(e){var t=td("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ho.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ho.removeChild(t),this.style.cssText=s,o},bm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},D_=function(e){var t;try{t=e.getBBox()}catch{t=Oh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Oh||(t=Oh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+bm(e,["x","cx","x1"])||0,y:+bm(e,["y","cy","y1"])||0,width:0,height:0}:t},N_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&D_(e))},Ar=function(e,t){if(t){var n=e.style,i;t in xs&&t!==Gn&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rf,"-$1").toLowerCase())):n.removeAttribute(t)}},Os=function(e,t,n,i,s,o){var a=new Hn(e._pt,t,n,0,1,o?P_:C_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Tm={deg:1,rad:1,turn:1},RR={grid:1,flex:1},js=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_r.style,l=_R.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,v,p,m;if(i===o||!s||Tm[i]||Tm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&N_(e),(f||o==="%")&&(xs[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],$t(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),v=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Us||!v.appendChild)&&(v=Us.body),p=v._gsap,p&&f&&p.width&&l&&p.time===si.time&&!p.uncache)return $t(s/p.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,g=e[h],y?e.style[t]=y:Ar(e,t)}else(f||o==="%")&&!RR[Wi(v,"display")]&&(a.position=Wi(e,"position")),v===e&&(a.position="static"),v.appendChild(_r),g=_r[h],v.removeChild(_r),a.position="absolute";return l&&f&&(p=xr(v),p.time=si.time,p.width=v[h]),$t(d?g*s/u:g&&s?u/g*s:0)},hs=function(e,t,n,i){var s;return Cf||nd(),t in Hi&&t!=="transform"&&(t=Hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),xs[t]&&t!=="transform"?(s=qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xc(Wi(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=vc[t]&&vc[t](e,t,n)||Wi(e,t)||K0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?js(e,t,s,n)+n:s},LR=function(e,t,n,i){if(!n||n==="none"){var s=Yo(t,e,1),o=s&&Wi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Wi(e,"borderTopColor"))}var a=new Hn(this._pt,e.style,t,0,1,T_),l=0,c=0,h,u,d,f,g,v,p,m,y,x,w,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(v=e.style[t],e.style[t]=i,i=Wi(e,t)||i,v?e.style[t]=v:Ar(e,t)),h=[n,i],m_(h),n=h[0],i=h[1],d=n.match(no)||[],E=i.match(no)||[],E.length){for(;u=no.exec(i);)p=u[0],y=i.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(v=d[c++]||"")&&(f=parseFloat(v)||0,w=v.substr((f+"").length),p.charAt(1)==="="&&(p=co(f,p)+w),m=parseFloat(p),x=p.substr((m+"").length),l=no.lastIndex-x.length,x||(x=x||li.units[t]||w,l===i.length&&(i+=x,a.e+=x)),w!==x&&(f=js(e,t,v,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?P_:C_;return W0.test(i)&&(a.e=0),this._pt=a,a},Am={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},IR=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Am[n]||n,t[1]=Am[i]||i,t.join(" ")},DR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xs[a]&&(l=1,a=a==="transformOrigin"?Gn:Gt),Ar(n,a);l&&(Ar(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),qa(n,1),o.uncache=1,R_(i)))}},vc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Hn(e._pt,t,n,0,0,DR);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Xa=[1,0,0,1,0,0],F_={},U_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Em=function(e){var t=Wi(e,Gt);return U_(t)?Xa:t.substr(7).match(G0).map($t)},Lf=function(e,t){var n=e._gsap||xr(e),i=e.style,s=Em(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!e.offsetParent&&e!==ho&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ho.appendChild(e)),s=Em(e),l?i.display=l:Ar(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ho.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},id=function(e,t,n,i,s,o){var a=e._gsap,l=s||Lf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],v=l[2],p=l[3],m=l[4],y=l[5],x=t.split(" "),w=parseFloat(x[0])||0,E=parseFloat(x[1])||0,b,T,M,A;n?l!==Xa&&(T=f*p-g*v)&&(M=w*(p/T)+E*(-v/T)+(v*y-p*m)/T,A=w*(-g/T)+E*(f/T)-(f*y-g*m)/T,w=M,E=A):(b=D_(e),w=b.x+(~x[0].indexOf("%")?w/100*b.width:w),E=b.y+(~(x[1]||x[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&a.smooth?(m=w-c,y=E-h,a.xOffset=u+(m*f+y*v)-m,a.yOffset=d+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Os(o,a,"xOrigin",c,w),Os(o,a,"yOrigin",h,E),Os(o,a,"xOffset",u,a.xOffset),Os(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+E)},qa=function(e,t){var n=e._gsap||new x_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Wi(e,Gn)||"0",h,u,d,f,g,v,p,m,y,x,w,E,b,T,M,A,_,S,I,z,B,G,U,$,Y,ae,ie,pe,Oe,ke,Q,he;return h=u=d=v=p=m=y=x=w=0,f=g=1,n.svg=!!(e.getCTM&&N_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),T=Lf(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),id(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,b=n.yOrigin||0,T!==Xa&&(S=T[0],I=T[1],z=T[2],B=T[3],h=G=T[4],u=U=T[5],T.length===6?(f=Math.sqrt(S*S+I*I),g=Math.sqrt(B*B+z*z),v=S||I?Yr(I,S)*cr:0,y=z||B?Yr(z,B)*cr+v:0,y&&(g*=Math.abs(Math.cos(y*uo))),n.svg&&(h-=E-(E*S+b*z),u-=b-(E*I+b*B))):(he=T[6],ke=T[7],ie=T[8],pe=T[9],Oe=T[10],Q=T[11],h=T[12],u=T[13],d=T[14],M=Yr(he,Oe),p=M*cr,M&&(A=Math.cos(-M),_=Math.sin(-M),$=G*A+ie*_,Y=U*A+pe*_,ae=he*A+Oe*_,ie=G*-_+ie*A,pe=U*-_+pe*A,Oe=he*-_+Oe*A,Q=ke*-_+Q*A,G=$,U=Y,he=ae),M=Yr(-z,Oe),m=M*cr,M&&(A=Math.cos(-M),_=Math.sin(-M),$=S*A-ie*_,Y=I*A-pe*_,ae=z*A-Oe*_,Q=B*_+Q*A,S=$,I=Y,z=ae),M=Yr(I,S),v=M*cr,M&&(A=Math.cos(M),_=Math.sin(M),$=S*A+I*_,Y=G*A+U*_,I=I*A-S*_,U=U*A-G*_,S=$,G=Y),p&&Math.abs(p)+Math.abs(v)>359.9&&(p=v=0,m=180-m),f=$t(Math.sqrt(S*S+I*I+z*z)),g=$t(Math.sqrt(U*U+he*he)),M=Yr(G,U),y=Math.abs(M)>2e-4?M*cr:0,w=Q?1/(Q<0?-Q:Q):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!U_(Wi(e,Gt)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=$t(f),n.scaleY=$t(g),n.rotation=$t(v)+a,n.rotationX=$t(p)+a,n.rotationY=$t(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=w+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=xc(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?FR:I_?O_:NR,n.uncache=0,n},xc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bh=function(e,t,n){var i=Tn(t);return $t(parseFloat(t)+parseFloat(js(e,"x",n+"px",i)))+i},NR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,O_(e,t)},rr="0deg",pa="0px",or=") ",O_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,v=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,w="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(u!==rr||h!==rr)){var b=parseFloat(h)*uo,T=Math.sin(b),M=Math.cos(b),A;b=parseFloat(u)*uo,A=Math.cos(b),o=Bh(y,o,T*A*-x),a=Bh(y,a,-Math.sin(b)*-x),l=Bh(y,l,M*A*-x+x)}p!==pa&&(w+="perspective("+p+or),(i||s)&&(w+="translate("+i+"%, "+s+"%) "),(E||o!==pa||a!==pa||l!==pa)&&(w+=l!==pa||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+or),c!==rr&&(w+="rotate("+c+or),h!==rr&&(w+="rotateY("+h+or),u!==rr&&(w+="rotateX("+u+or),(d!==rr||f!==rr)&&(w+="skew("+d+", "+f+or),(g!==1||v!==1)&&(w+="scale("+g+", "+v+or),y.style[Gt]=w||"translate(0, 0)"},FR=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,v=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),w=parseFloat(a),E,b,T,M,A;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=uo,c*=uo,E=Math.cos(l)*u,b=Math.sin(l)*u,T=Math.sin(l-c)*-d,M=Math.cos(l-c)*d,c&&(h*=uo,A=Math.tan(c-h),A=Math.sqrt(1+A*A),T*=A,M*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),E*=A,b*=A)),E=$t(E),b=$t(b),T=$t(T),M=$t(M)):(E=u,M=d,b=T=0),(x&&!~(o+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(x=js(f,"x",o,"px"),w=js(f,"y",a,"px")),(g||v||p||m)&&(x=$t(x+g-(g*E+v*T)+p),w=$t(w+v-(g*b+v*M)+m)),(i||s)&&(A=f.getBBox(),x=$t(x+i/100*A.width),w=$t(w+s/100*A.height)),A="matrix("+E+","+b+","+T+","+M+","+x+","+w+")",f.setAttribute("transform",A),y&&(f.style[Gt]=A)},UR=function(e,t,n,i,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cr:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*wm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*wm)%o-~~(c/o)*o)),e._pt=d=new Hn(e._pt,t,n,i,c,xR),d.e=h,d.u="deg",e._props.push(n),d},Cm=function(e,t){for(var n in t)e[n]=t[n];return e},OR=function(e,t,n){var i=Cm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=qa(n,1),Ar(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=qa(n,1),o[Gt]=c);for(l in xs)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Tn(c),g=Tn(h),u=f!==g?js(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Hn(e._pt,a,l,u,d-u,ed),e._pt.u=g||0,e._props.push(l));Cm(a,i)};Vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});vc[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return hs(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,v){return f[g]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,f,u)}});var B_={name:"css",register:nd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,g,v,p,m,y,x,w,E,b,T,M;Cf||nd(),this.styles=this.styles||L_(e),M=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(h=t[v],!(ii[v]&&y_(v,t,n,i,e,s)))){if(f=typeof h,g=vc[v],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ga(h)),g)g(this,e,v,h,n)&&(T=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",ks.lastIndex=0,ks.test(c)||(p=Tn(c),m=Tn(h)),m?p!==m&&(c=js(e,v,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,v),o.push(v),M.push(v,0,a[v]);else if(f!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],mn(c)&&~c.indexOf("random(")&&(c=Ga(c)),Tn(c+"")||c==="auto"||(c+=li.units[v]||Tn(hs(e,v))||""),(c+"").charAt(1)==="="&&(c=hs(e,v))):c=hs(e,v),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),v in Hi&&(v==="autoAlpha"&&(d===1&&hs(e,"visibility")==="hidden"&&u&&(d=0),M.push("visibility",0,a.visibility),Os(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),v!=="scale"&&v!=="transform"&&(v=Hi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in xs,x){if(this.styles.save(v),w||(E=e._gsap,E.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),b=t.smoothOrigin!==!1&&E.smooth,w=this._pt=new Hn(this._pt,a,Gt,0,1,E.renderTransform,E,0,-1),w.dep=1),v==="scale")this._pt=new Hn(this._pt,E,"scaleY",E.scaleY,(y?co(E.scaleY,y+u):u)-E.scaleY||0,ed),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){M.push(Gn,0,a[Gn]),h=IR(h),E.svg?id(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&Os(this,E,"zOrigin",E.zOrigin,m),Os(this,a,v,xc(c),xc(h)));continue}else if(v==="svgOrigin"){id(e,h,1,b,0,this);continue}else if(v in F_){UR(this,E,v,d,y?co(d,y+h):h);continue}else if(v==="smoothOrigin"){Os(this,E,"smooth",E.smooth,h);continue}else if(v==="force3D"){E[v]=h;continue}else if(v==="transform"){OR(this,h,e);continue}}else v in a||(v=Yo(v)||v);if(x||(u||u===0)&&(d||d===0)&&!vR.test(h)&&v in a)p=(c+"").substr((d+"").length),u||(u=0),m=Tn(h)||(v in li.units?li.units[v]:p),p!==m&&(d=js(e,v,c,m)),this._pt=new Hn(this._pt,x?E:a,v,d,(y?co(d,y+u):u)-d,!x&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?MR:ed),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=yR);else if(v in a)LR.call(this,e,v,c,y?y+h:h);else if(v in e)this.add(e,v,c||e[v],y?y+h:h,i,s);else if(v!=="parseTransform"){xf(v,h);continue}x||(v in a?M.push(v,0,a[v]):M.push(v,1,c||e[v])),o.push(v)}}T&&A_(this)},render:function(e,t){if(t.tween._time||!Pf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hs,aliases:Hi,getSetter:function(e,t,n){var i=Hi[t];return i&&i.indexOf(",")<0&&(t=i),t in xs&&t!==Gn&&(e._gsap.x||hs(e,"x"))?n&&Mm===n?t==="scale"?TR:bR:(Mm=n||{})&&(t==="scale"?AR:ER):e.style&&!gf(e.style[t])?wR:~t.indexOf("-")?SR:Af(e,t)},core:{_removeProperty:Ar,_getMatrix:Lf}};jn.utils.checkPrefix=Yo;jn.core.getStyleSaver=L_;(function(r,e,t,n){var i=Vn(r+","+e+","+t,function(s){xs[s]=1});Vn(e,function(s){li.units[s]="deg",F_[s]=1}),Hi[i[13]]=r+","+e,Vn(n,function(s){var o=s.split(":");Hi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});jn.registerPlugin(B_);var Er=jn.registerPlugin(B_)||jn;Er.core.Tween;let BR=class extends et{constructor(){super(...arguments);V(this,"animations",[]);V(this,"hasAnimation",!0)}get number(){return"05"}get title(){return"Animations"}get link(){return"https://threejs-journey.com/lessons/animations"}update(t){this.object3d.position.x=Math.sin(t/1e3),this.object3d.position.y=Math.cos(t/1e3)}init(){super.init();const t=new sn(1,1,1),n=new Mt({color:255});this.object3d=new ge(t,n),this.scene.add(this.object3d),this.animations.push(Er.to(this.object3d.position,{z:-3,delay:1,duration:1})),this.animations.push(Er.to(this.object3d.position,{z:0,delay:2,duration:1}))}dispose(){super.dispose(),this.animations.forEach(t=>t.kill()),this.animations=[]}};var vo,xo,Wt,z_,k_,sd,V_,H_,G_,W_,j_,X_,q_,Ym;let zR=(Ym=class extends et{constructor(){super(...arguments);Re(this,Wt);V(this,"hasAnimation",!0);Re(this,vo);Re(this,xo)}get number(){return"06"}get title(){return"Cameras"}get link(){return"https://threejs-journey.com/lessons/cameras"}update(){C(this,Wt,z_).call(this)}init(){super.init(),C(this,Wt,H_).call(this),C(this,Wt,V_).call(this)}dispose(){super.dispose(),C(this,Wt,G_).call(this),C(this,Wt,j_).call(this)}initControl(){C(this,Wt,sd).call(this),C(this,Wt,W_).call(this)}initOrthographicCamera(){const t=this.canvas.width/this.canvas.height;this.camera=new Ka(-t,t,1,-1),this.camera.position.z=3}},vo=new WeakMap,xo=new WeakMap,Wt=new WeakSet,z_=function(){this.control.update(),this.camera.lookAt(this.object3d.position)},k_=function(){this.control=new P0(this.camera,this.canvas),this.control.enableDamping=!0},sd=function(){function t(n,i){this.x=0,this.y=0,this.boundUpdateCoordinates=null,this.init=function(){this.boundUpdateCoordinates=this.updateCoordindates.bind(this),i.addEventListener("mousemove",this.boundUpdateCoordinates)},this.update=function(s=5){const o=2*Math.PI*this.x;n.position.x=Math.cos(o)*s,n.position.z=Math.sin(o)*s,n.position.y=this.y*s},this.updateCoordindates=function(s){this.x=s.offsetX/i.width-.5,this.y=(s.offsetY/i.height-.5)*-1},this.dispose=function(){i.removeEventListener("mousemove",this.boundUpdateCoordinates)}}this.control=new t(this.camera,this.canvas),this.control.init()},V_=function(){const t=new sn(1,1,1),n=new Mt({color:65280});this.object3d=new ge(t,n),this.scene.add(this.object3d)},H_=function(){Ut(this,vo,C(this,Wt,q_).bind(this)),document.addEventListener("keydown",Ue(this,vo))},G_=function(){document.removeEventListener("keydown",Ue(this,vo))},W_=function(){Ut(this,xo,C(this,Wt,X_).bind(this)),document.addEventListener("keydown",Ue(this,xo))},j_=function(){document.removeEventListener("keydown",Ue(this,xo))},X_=function(t){switch(t.code){case"KeyR":C(this,Wt,k_).call(this);break;case"KeyC":C(this,Wt,sd).call(this);break}},q_=function(t){switch(t.code){case"KeyP":this.initCamera();break;case"KeyO":this.initOrthographicCamera();break}},Ym);var yo,qi,Y_,$_,K_,Z_,$m;let kR=($m=class extends et{constructor(){super(...arguments);Re(this,qi);V(this,"hasAnimation",!0);Re(this,yo)}get number(){return"07"}get title(){return"Fullscreen and resizing"}get link(){return"https://threejs-journey.com/lessons/fullscreen-and-resizing"}update(){this.control.update()}init(){super.init(),C(this,qi,Z_).call(this),C(this,qi,Y_).call(this)}dispose(){super.dispose(),C(this,qi,$_).call(this)}},yo=new WeakMap,qi=new WeakSet,Y_=function(){Ut(this,yo,C(this,qi,K_).bind(this)),document.addEventListener("keydown",Ue(this,yo))},$_=function(){document.removeEventListener("keydown",Ue(this,yo))},K_=function(t){t.code==="KeyF"&&(document.fullscreenElement?document.exitFullscreen():this.canvas.requestFullscreen())},Z_=function(){const t=new sn(1,1,1),n=new Mt({color:16777215});this.object3d=new ge(t,n),this.scene.add(this.object3d)},$m);var Xs,J_,Q_,ev,Km;let VR=(Km=class extends et{constructor(){super(...arguments);Re(this,Xs);V(this,"hasAnimation",!0)}get number(){return"08"}get title(){return"Geometries"}get link(){return"https://threejs-journey.com/lessons/geometries"}update(){this.control.update()}init(){super.init(),C(this,Xs,J_).call(this)}},Xs=new WeakSet,J_=function(){const t=new Mt({color:16777215,wireframe:!0});this.mesh=new ge(C(this,Xs,Q_).call(this),t),this.scene.add(this.mesh)},Q_=function(){const t=new ct;return t.setAttribute("position",C(this,Xs,ev).call(this)),t},ev=function(){const i=new Float32Array(450);for(let s=0;s<450;s++)i[s]=(Math.random()-.5)*2;return new ot(i,3)},Km);var $o,tv,nv,Zm;let HR=(Zm=class extends et{constructor(){super(...arguments);Re(this,$o);V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"09"}get title(){return"Debug UI"}get link(){return"https://threejs-journey.com/lessons/debug-ui"}update(){this.control.update()}init(){super.init(),C(this,$o,nv).call(this),C(this,$o,tv).call(this)}},$o=new WeakSet,tv=function(){this.guiControl.add(this.mesh.position,"y").min(-2).max(2).step(.01).name("elevation"),this.guiControl.add(this.mesh,"visible"),this.guiControl.add(this.mesh.material,"wireframe"),this.guiControl.addColor({color:this.mesh.material.color.getHex()},"color").onChange(t=>{this.mesh.material.color.setHex(t)}),this.guiControl.add({spin:()=>{Er.to(this.mesh.rotation,{y:this.mesh.rotation.y+Math.PI*2})}},"spin"),this.guiControl.add({subdivisions:1},"subdivisions").min(1).max(20).step(1).onFinishChange(t=>{this.mesh.geometry.dispose(),this.mesh.geometry=new sn(1,1,1,t,t,t)})},nv=function(){const t=new sn(1,1,1),n=new Mt({color:14253554,wireframe:!0});this.mesh=new ge(t,n),this.scene.add(this.mesh)},Zm);var qs,iv,sv,rv,Jm;let GR=(Jm=class extends et{constructor(){super(...arguments);Re(this,qs);V(this,"loaderManager");V(this,"textureLoader");V(this,"doorMapTexture");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"10"}get title(){return"Textures"}get link(){return"https://threejs-journey.com/lessons/textures"}update(){this.control.update()}init(){super.init(),C(this,qs,iv).call(this),C(this,qs,sv).call(this),C(this,qs,rv).call(this)}},qs=new WeakSet,iv=function(){this.loaderManager=new b0,this.textureLoader=new Mn(this.loaderManager),this.texture=this.textureLoader.load("/three.js-journey/media/images/textures/door/color.jpg"),this.texture.colorSpace=nt},sv=function(){const t=new sn(1,1,1),n=new Mt({map:this.texture});this.mesh=new ge(t,n),this.scene.add(this.mesh)},rv=function(){this.guiControl.add(this.texture.repeat,"x").min(1).max(5).step(.01).name("textureX"),this.guiControl.add(this.texture.repeat,"y").min(1).max(5).step(.01).name("textureY"),this.guiControl.add({offset:0},"offset").min(0).max(1).step(.01).name("textureOffset").onChange(t=>{this.texture.offset.x=t,this.texture.offset.y=t}),this.guiControl.add({rotation:0},"rotation").min(0).max(2*Math.PI).step(.01).onChange(t=>{this.texture.center.x=.5,this.texture.center.y=.5,this.texture.rotation=t}),this.guiControl.add({addXRepeat:()=>{this.texture.wrapS=xt,this.texture.needsUpdate=!0}},"addXRepeat").name("Repeat texture in X"),this.guiControl.add({addYRepeat:()=>{this.texture.wrapT=xt,this.texture.needsUpdate=!0}},"addYRepeat").name("Repeat texture in Y"),this.guiControl.add({updateMinFilterToLinearFilter:()=>{this.texture.minFilter=Ii,this.texture.generateMipmaps=!0,this.texture.needsUpdate=!0}},"updateMinFilterToLinearFilter").name("Update min filter to linear filter"),this.guiControl.add({updateMinFilterToNearestFilter:()=>{this.texture.minFilter=zt,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0}},"updateMinFilterToNearestFilter").name("Update min filter to nearest filter"),this.guiControl.add({updateMagFilterToLinearFilter:()=>{this.texture.magFilter=an,this.texture.needsUpdate=!0}},"updateMagFilterToLinearFilter").name("Update mag filter to linear filter"),this.guiControl.add({updateMagFilterToNearestFilter:()=>{this.texture.magFilter=zt,this.texture.needsUpdate=!0}},"updateMagFilterToNearestFilter").name("Update mag filter to nearest filter")},Jm);class Oc extends SC{constructor(e){super(e),this.type=Vi}parse(e){const o=function(M,A){switch(M){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(A||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(A||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(A||""))}},h=`
`,u=function(M,A,_){A=A||1024;let I=M.pos,z=-1,B=0,G="",U=String.fromCharCode.apply(null,new Uint16Array(M.subarray(I,I+128)));for(;0>(z=U.indexOf(h))&&B<A&&I<M.byteLength;)G+=U,B+=U.length,I+=128,U+=String.fromCharCode.apply(null,new Uint16Array(M.subarray(I,I+128)));return-1<z?(M.pos+=B+z+1,G+U.slice(0,z)):!1},d=function(M){const A=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,U;for((M.pos>=M.byteLength||!(G=u(M)))&&o(1,"no header found"),(U=G.match(A))||o(3,"bad initial token"),B.valid|=1,B.programtype=U[1],B.string+=G+`
`;G=u(M),G!==!1;){if(B.string+=G+`
`,G.charAt(0)==="#"){B.comments+=G+`
`;continue}if((U=G.match(_))&&(B.gamma=parseFloat(U[1])),(U=G.match(S))&&(B.exposure=parseFloat(U[1])),(U=G.match(I))&&(B.valid|=2,B.format=U[1]),(U=G.match(z))&&(B.valid|=4,B.height=parseInt(U[1],10),B.width=parseInt(U[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||o(3,"missing format specifier"),B.valid&4||o(3,"missing image size specifier"),B},f=function(M,A,_){const S=A;if(S<8||S>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);S!==(M[2]<<8|M[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*A*_);I.length||o(4,"unable to allocate buffer space");let z=0,B=0;const G=4*S,U=new Uint8Array(4),$=new Uint8Array(G);let Y=_;for(;Y>0&&B<M.byteLength;){B+4>M.byteLength&&o(1),U[0]=M[B++],U[1]=M[B++],U[2]=M[B++],U[3]=M[B++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=S)&&o(3,"bad rgbe scanline format");let ae=0,ie;for(;ae<G&&B<M.byteLength;){ie=M[B++];const Oe=ie>128;if(Oe&&(ie-=128),(ie===0||ae+ie>G)&&o(3,"bad scanline data"),Oe){const ke=M[B++];for(let Q=0;Q<ie;Q++)$[ae++]=ke}else $.set(M.subarray(B,B+ie),ae),ae+=ie,B+=ie}const pe=S;for(let Oe=0;Oe<pe;Oe++){let ke=0;I[z]=$[Oe+ke],ke+=S,I[z+1]=$[Oe+ke],ke+=S,I[z+2]=$[Oe+ke],ke+=S,I[z+3]=$[Oe+ke],z+=4}Y--}return I},g=function(M,A,_,S){const I=M[A+3],z=Math.pow(2,I-128)/255;_[S+0]=M[A+0]*z,_[S+1]=M[A+1]*z,_[S+2]=M[A+2]*z,_[S+3]=1},v=function(M,A,_,S){const I=M[A+3],z=Math.pow(2,I-128)/255;_[S+0]=ul.toHalfFloat(Math.min(M[A+0]*z,65504)),_[S+1]=ul.toHalfFloat(Math.min(M[A+1]*z,65504)),_[S+2]=ul.toHalfFloat(Math.min(M[A+2]*z,65504)),_[S+3]=ul.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=d(p),y=m.width,x=m.height,w=f(p.subarray(p.pos),y,x);let E,b,T;switch(this.type){case An:T=w.length/4;const M=new Float32Array(T*4);for(let _=0;_<T;_++)g(w,_*4,M,_*4);E=M,b=An;break;case Vi:T=w.length/4;const A=new Uint16Array(T*4);for(let _=0;_<T;_++)v(w,_*4,A,_*4);E=A,b=Vi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:x,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case An:case Vi:o.colorSpace=cn,o.minFilter=an,o.magFilter=an,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}var Pn,ov,av,lv,cv,hv,uv,dv,Qm;let WR=(Qm=class extends et{constructor(){super(...arguments);Re(this,Pn);V(this,"plane");V(this,"torus");V(this,"sphere");V(this,"doorColorTexture");V(this,"doorAlphaTexture");V(this,"doorAmbientOcclusionTexture");V(this,"doorHeightTexture");V(this,"doorMetalnessTexture");V(this,"doorRoughnessTexture");V(this,"doorNormalTexture");V(this,"matcapTexture");V(this,"gradientTexture");V(this,"material");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"11"}get title(){return"Materials"}get link(){return"https://threejs-journey.com/lessons/materials"}update(t){this.control.update(),this.plane.rotation.x=1e-4*t,this.plane.rotation.y=1e-4*t,this.sphere.rotation.x=1e-4*t,this.sphere.rotation.y=1e-4*t,this.torus.rotation.x=1e-4*t,this.torus.rotation.y=1e-4*t}init(){super.init(),C(this,Pn,cv).call(this),C(this,Pn,av).call(this),C(this,Pn,lv).call(this),C(this,Pn,dv).call(this),C(this,Pn,uv).call(this),C(this,Pn,hv).call(this),C(this,Pn,ov).call(this),this.sphere.position.x=-2,this.torus.position.x=2}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.torus=null}},Pn=new WeakSet,ov=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoat").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoatRoughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheen").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheenRoughness").min(0).max(1).step(.001),this.guiControl.addColor(this.material,"sheenColor"),this.guiControl.add(this.material,"iridescence").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"iridescenceIOR").min(1).max(2.333).step(1e-4),this.guiControl.add(this.material.iridescenceThicknessRange,"0").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 0"),this.guiControl.add(this.material.iridescenceThicknessRange,"1").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 1"),this.guiControl.add(this.material,"transmission").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"ior").min(1).max(10).step(1e-4),this.guiControl.add(this.material,"thickness").min(0).max(1).step(1e-4)},av=function(){const t=new Mn;this.doorColorTexture=t.load("/three.js-journey/media/images/textures/door/color.jpg"),this.doorAlphaTexture=t.load("/three.js-journey/media/images/textures/door/alpha.jpg"),this.doorAmbientOcclusionTexture=t.load("/three.js-journey/media/images/textures/door/ambientOcclusion.jpg"),this.doorHeightTexture=t.load("/three.js-journey/media/images/textures/door/height.jpg"),this.doorMetalnessTexture=t.load("/three.js-journey/media/images/textures/door/metalness.jpg"),this.doorRoughnessTexture=t.load("/three.js-journey/media/images/textures/door/roughness.jpg"),this.doorNormalTexture=t.load("/three.js-journey/media/images/textures/door/normal.jpg"),this.doorColorTexture.colorSpace=nt,this.matcapTexture=t.load("/three.js-journey/media/images/textures/matcaps/7.png"),this.gradientTexture=t.load("/three.js-journey/media/images/textures/gradients/3.jpg"),this.gradientTexture.generateMipmaps=!1,this.gradientTexture.minFilter=zt,this.gradientTexture.magFilter=zt},lv=function(){this.material=new bi,this.material.side=_n,this.material.transparent=!0,this.material.alphaMap=this.doorAlphaTexture},cv=function(){new Oc().load("/three.js-journey/media/images/environmentMap/2k.hdr",n=>{n.mapping=Hs,this.scene.background=n,this.scene.environment=n})},hv=function(){const t=new Cr(.5,.2,64,28);this.torus=new ge(t,this.material),this.scene.add(this.torus)},uv=function(){const t=new ui(.5,64,64);this.sphere=new ge(t,this.material),this.scene.add(this.sphere)},dv=function(){const t=new Rt(1,1,100,100);this.plane=new ge(t,this.material),this.scene.add(this.plane)},Qm);class jR extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Go(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new XR(e)}}class XR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=qR(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function qR(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=YR(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function YR(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new YC;let a,l,c,h,u,d,f,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=v.length;p<m;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+n,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+n,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,h=v[p++]*e+n,u=v[p++]*e+t,d=v[p++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=v[p++]*e+t,h=v[p++]*e+n,u=v[p++]*e+t,d=v[p++]*e+n,f=v[p++]*e+t,g=v[p++]*e+n,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:s.ha*e,path:o}}class $R extends of{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}var Yi,fv,pv,mv,gv,eg;let KR=(eg=class extends et{constructor(){super(...arguments);Re(this,Yi);V(this,"material");V(this,"hasAnimation",!0)}get number(){return"12"}get title(){return"3D Text"}get link(){return"https://threejs-journey.com/lessons/3d-text"}update(){this.control.update()}init(){super.init(),C(this,Yi,pv).call(this),C(this,Yi,mv).call(this),C(this,Yi,fv).call(this)}dispose(){super.dispose(),this.material=null}},Yi=new WeakSet,fv=function(){this.camera.position.z=2,this.camera.position.y=1,this.camera.position.x=1},pv=function(){const n=new Mn().load("/three.js-journey/media/images/textures/matcaps/1.png");n.colorSpace=nt,this.material=new fC({matcap:n})},mv=function(){new jR().load("/three.js-journey/media/fonts/helvetiker_regular.typeface.json",n=>{const i=new $R("Three.js rocks!",{font:n,size:.3,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),this.mesh=new ge(i,this.material),this.scene.add(this.mesh),C(this,Yi,gv).call(this,i.boundingBox)})},gv=function(t){const n=new Cr(.2,.1,20,45),i=t.max.x-t.min.x,s=t.max.y-t.min.y,o=t.max.z-t.min.z,a=5;for(let l=0;l<100;l++){const c=new ge(n,this.material);c.position.x=(i+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.y=(s+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.z=(o+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.rotation.x=Math.random()*Math.PI,c.rotation.y=Math.random()*Math.PI;const h=Math.random()*2;c.scale.set(h,h,h),this.scene.add(c)}},eg);class ZR extends Bo{constructor(e,t){const n=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],i=new ct;i.setAttribute("position",new Ze(n,3)),i.computeBoundingSphere();const s=new ea({fog:!1});super(i,s),this.light=e,this.color=t,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new ct;a.setAttribute("position",new Ze(o,3)),a.computeBoundingSphere(),this.add(new ge(a,new Mt({side:vn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,t=Math.max(e.r,e.g,e.b);t>1&&e.multiplyScalar(1/t),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var We,_v,vv,xv,yv,Mv,wv,Sv,bv,Tv,Av,Ev,Cv,hr,rd,Fi,tg;let JR=(tg=class extends et{constructor(){super(...arguments);Re(this,We);V(this,"material");V(this,"plane");V(this,"box");V(this,"sphere");V(this,"torus");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"14"}get title(){return"Lights"}get link(){return"https://threejs-journey.com/lessons/lights"}update(t){this.control.update(),this.box.rotation.x=1e-4*t,this.box.rotation.y=1e-4*t,this.sphere.rotation.x=1e-4*t,this.sphere.rotation.y=1e-4*t,this.torus.rotation.x=1e-4*t,this.torus.rotation.y=1e-4*t}init(){super.init(),C(this,We,Sv).call(this),C(this,We,bv).call(this),C(this,We,Tv).call(this),C(this,We,Av).call(this),C(this,We,Ev).call(this),C(this,We,Cv).call(this),C(this,We,wv).call(this),C(this,We,Mv).call(this),C(this,We,yv).call(this),C(this,We,xv).call(this),C(this,We,vv).call(this),C(this,We,_v).call(this)}dispose(){super.dispose(),this.plane=null,this.box=null,this.sphere=null,this.torus=null}},We=new WeakSet,_v=function(){const t=new hf(16716032,1,0,Math.PI*.1,.25,1);t.position.z=-3,t.position.x=-2,t.target.position.x=-3,this.scene.add(t),this.scene.add(t.target);const n=C(this,We,hr).call(this,t,"Spot Light");C(this,We,Fi).call(this,n,t,"distance"),C(this,We,Fi).call(this,n,t,"angle"),C(this,We,Fi).call(this,n,t,"penumbra"),C(this,We,Fi).call(this,n,t,"decay");const i=new HC(t);this.scene.add(i)},vv=function(){const t=new CC(65280,1,2.5,2.5);t.position.x=-2,t.position.z=2,t.lookAt(this.box.position),this.scene.add(t);const n=C(this,We,hr).call(this,t,"Rect Area Light");C(this,We,Fi).call(this,n,t,"width"),C(this,We,Fi).call(this,n,t,"height");const i=new ZR(t);this.scene.add(i)},xv=function(){const t=new gr(15602090,1,0,2);t.position.x=2,t.position.z=2,this.scene.add(t);const n=C(this,We,hr).call(this,t,"Point Light");C(this,We,Fi).call(this,n,t,"distance"),C(this,We,Fi).call(this,n,t,"decay");const i=new GC(t,.2);this.scene.add(i)},yv=function(){const t=new bC(16711680,255,.5);this.scene.add(t);const n=C(this,We,hr).call(this,t,"Hemisphere Light");C(this,We,rd).call(this,n,t,"groundColor");const i=new jC(t,.2);this.scene.add(i)},Mv=function(){const t=new Kn(65532,.9);t.position.set(5,1,0),this.scene.add(t),C(this,We,hr).call(this,t,"Directional Light");const n=new XC(t,.2);this.scene.add(n)},wv=function(){const t=new Rr(16777215,.5);this.scene.add(t),C(this,We,hr).call(this,t,"Ambient Light")},Sv=function(){this.material=new Ot,this.material.roughness=.5},bv=function(){const t=new Rt(10,10);this.plane=new ge(t,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-2,this.scene.add(this.plane)},Tv=function(){const t=new sn(1,1,1);this.box=new ge(t,this.material),this.scene.add(this.box)},Av=function(){const t=new ui(1);this.sphere=new ge(t,this.material),this.sphere.position.x=2,this.scene.add(this.sphere)},Ev=function(){const t=new Cr(.7,.3);this.torus=new ge(t,this.material),this.torus.position.x=-2,this.scene.add(this.torus)},Cv=function(){this.camera.position.z=5},hr=function(t,n){const i=this.guiControl.addFolder(n);return C(this,We,Fi).call(this,i,t,"intensity"),C(this,We,rd).call(this,i,t,"color"),i},rd=function(t,n,i){t.addColor({color:n[i].getHex()},"color").onChange(s=>{n[i].setHex(s)})},Fi=function(t,n,i){t.add(n,i).min(0).max(5).step(.01)},tg);var Kt,Pv,Rv,Lv,Iv,Dv,Nv,Fv,wa,ng;let QR=(ng=class extends et{constructor(){super(...arguments);Re(this,Kt);V(this,"plane");V(this,"sphere");V(this,"sphereShadow");V(this,"material");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"15"}get title(){return"Shadows"}get link(){return"https://threejs-journey.com/lessons/shadows"}update(t){this.control.update();const n=1.5;this.sphere.position.x=Math.cos(t/1e3)*n,this.sphere.position.z=Math.sin(t/1e3)*n,this.sphere.position.y=Math.abs(Math.sin(t/1e3)),this.sphereShadow.position.x=this.sphere.position.x,this.sphereShadow.position.z=this.sphere.position.z,this.sphereShadow.material.opacity=(1-this.sphere.position.y)*.3;const i=this.sphere.position.y*1.5;this.sphereShadow.scale.set(i,i,i)}init(){super.init(),C(this,Kt,Rv).call(this),C(this,Kt,Lv).call(this),C(this,Kt,Dv).call(this),C(this,Kt,Iv).call(this),C(this,Kt,Nv).call(this),C(this,Kt,Pv).call(this)}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.sphereShadow=null,this.material=null}},Kt=new WeakSet,Pv=function(){this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Ni},Rv=function(){this.material=new Ot,C(this,Kt,Fv).call(this)},Lv=function(){const t=new ui(.5);this.sphere=new ge(t,this.material),this.sphere.castShadow=!0,this.sphere.receiveShadow=!1,this.scene.add(this.sphere)},Iv=function(){const n=new Mn().load("/three.js-journey/media/images/textures/shadows/simple.jpg");n.colorSpace=nt;const i=new Rt(1,1),s=new Mt({color:0,transparent:!0,alphaMap:n});this.sphereShadow=new ge(i,s),this.sphereShadow.rotation.x=-Math.PI/2,this.sphereShadow.position.y=this.plane.position.y+.001,this.scene.add(this.sphereShadow)},Dv=function(){const t=new Rt(5,5);this.plane=new ge(t,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-.5,this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.scene.add(this.plane)},Nv=function(){const t=new Rr(16777215,2);this.scene.add(t),C(this,Kt,wa).call(this,t,"Ambient Light");const n=new Kn(16777215,1);n.position.x=3,n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=1,n.shadow.camera.far=6,n.shadow.camera.top=1,n.shadow.camera.bottom=-1,n.shadow.camera.right=1,n.shadow.camera.left=-1,this.scene.add(n),C(this,Kt,wa).call(this,n,"Directional Light");const i=new hf(16777215,1,0,Math.PI*.1);i.position.x=1,i.position.z=1,i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,i.shadow.camera.near=1,i.shadow.camera.far=5,i.visible=!1,this.scene.add(i),this.scene.add(i.target),C(this,Kt,wa).call(this,i,"Spot Light"),this.guiControl.add(i,"visible").name("Enable Spotlight");const s=new gr(16777215,1);s.position.x=1,s.position.z=-1,s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=.1,s.shadow.camera.far=4,s.visible=!1,this.scene.add(s),C(this,Kt,wa).call(this,s,"Point Light"),this.guiControl.add(s,"visible").name("Enable Point Light")},Fv=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001)},wa=function(t,n){this.guiControl.addFolder(n).add(t,"intensity").min(0).max(5).step(.001)},ng);class el extends ge{constructor(){const e=el.SkyShader,t=new Nt({name:e.name,uniforms:i0.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:vn,depthWrite:!1});super(new sn(1,1,1),t),this.isSky=!0}}el.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},up:{value:new O(0,1,0)}},vertexShader:`
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

		}`};const e2="/three.js-journey/assets/alpha-oYUXAV8U.webp",t2="/three.js-journey/assets/arm-rmC2KtbT.webp",n2="/three.js-journey/assets/diffuse-BiGrMCC3.webp",i2="/three.js-journey/assets/displacement-CKqTQH1-.webp",s2="/three.js-journey/assets/normal-Cn3WmhCd.webp",r2="/three.js-journey/assets/arm-DyzoCEM3.webp",o2="/three.js-journey/assets/diffuse-3lwd3U-t.webp",a2="/three.js-journey/assets/normal-iYA-jasx.webp",l2="/three.js-journey/assets/arm-WvlYQgg6.webp",c2="/three.js-journey/assets/diffuse-Ca4I2Dwk.webp",h2="/three.js-journey/assets/normal-CEkQghNg.webp",u2="/three.js-journey/assets/arm-CIirWEzm.webp",d2="/three.js-journey/assets/diffuse-Bt2KqQCc.webp",f2="/three.js-journey/assets/normal-CzXVEdvu.webp",p2="/three.js-journey/assets/arm-BpdijVEA.webp",m2="/three.js-journey/assets/diffuse-BtOV6iYR.webp",g2="/three.js-journey/assets/normal-B1F88-Fh.webp",_2="/three.js-journey/assets/alpha-C_QdxHjX.webp",v2="/three.js-journey/assets/normal-CnTtXT1a.webp",x2="/three.js-journey/assets/ambientOcclusion-DWqpmaJh.webp",y2="/three.js-journey/assets/color-D6TT9ASI.webp",M2="/three.js-journey/assets/height-vbXR4p20.webp",w2="/three.js-journey/assets/metalness-DWD7jlG_.webp",S2="/three.js-journey/assets/roughness-Cy_48OtR.webp";var Ke,Uv,Ov,Bv,zv,Zl,kv,Jl,Vv,Hv,Gv,Wv,jv,Xv,od,ur,ig;let b2=(ig=class extends et{constructor(){super(...arguments);Re(this,Ke);V(this,"ghostViolet");V(this,"ghostPink");V(this,"ghostRed");V(this,"textureLoader");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"16"}get title(){return"Haunted House"}get link(){return"https://threejs-journey.com/lessons/haunted-house"}update(t){const n=t*.001;this.control.update(),C(this,Ke,Zl).call(this,this.ghostViolet,n*.5,4,2.34,3.45),C(this,Ke,Zl).call(this,this.ghostPink,-n*.38,5,2.34,3.45),C(this,Ke,Zl).call(this,this.ghostRed,n*.23,6,2.34,3.45)}init(){super.init(),C(this,Ke,Xv).call(this),C(this,Ke,Gv).call(this),C(this,Ke,Wv).call(this),C(this,Ke,jv).call(this),C(this,Ke,zv).call(this),C(this,Ke,Ov).call(this),C(this,Ke,Bv).call(this),C(this,Ke,Uv).call(this)}dispose(){super.dispose(),this.textureLoader=null,this.ghostViolet=null,this.ghostPink=null,this.ghostRed=null}},Ke=new WeakSet,Uv=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni},Ov=function(){const t=new el;t.material.uniforms.turbidity.value=10,t.material.uniforms.rayleigh.value=3,t.material.uniforms.mieCoefficient.value=.1,t.material.uniforms.mieDirectionalG.value=.95,t.material.uniforms.sunPosition.value.set(.3,-.038,-.95),t.scale.set(100,100,100),this.scene.add(t)},Bv=function(){const t=new Zd("#04343f",.1);this.scene.fog=t},zv=function(){const t=new Di,n=this.textureLoader.load(r2),i=this.textureLoader.load(a2),s=this.textureLoader.load(o2);s.colorSpace=nt;const o=new ge(new sn(4,3,4),new Ot({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}));o.position.y=o.geometry.parameters.height*.5,o.castShadow=!0,o.receiveShadow=!0,t.add(o);const a=this.textureLoader.load(l2),l=this.textureLoader.load(h2),c=this.textureLoader.load(c2);c.colorSpace=nt,a.repeat.set(3,1),l.repeat.set(3,1),c.repeat.set(3,1),a.wrapS=xt,l.wrapS=xt,c.wrapS=xt;const h=new ge(new Lc(o.geometry.parameters.width,2,4),new Ot({map:c,normalMap:l,roughnessMap:a,metalnessMap:a,aoMap:a}));h.position.y=o.geometry.parameters.height+h.geometry.parameters.height*.5,h.rotation.y=Math.PI*.25,h.castShadow=!0,t.add(h);const u=this.textureLoader.load(_2),d=this.textureLoader.load(x2),f=this.textureLoader.load(M2),g=this.textureLoader.load(w2),v=this.textureLoader.load(S2),p=this.textureLoader.load(v2),m=this.textureLoader.load(y2);m.colorSpace=nt;const y=new ge(new Rt(1.5,2.3,100,100),new Ot({transparent:!0,map:m,alphaMap:u,aoMap:d,metalnessMap:g,roughnessMap:v,normalMap:p,displacementMap:f,displacementScale:.15,displacementBias:-.04}));y.position.y=y.geometry.parameters.height*.5,y.position.z=o.geometry.parameters.depth*.5+.01,t.add(y);const x=new gr("#ff7d46",5);x.position.z=o.geometry.parameters.depth*.5+.1,x.position.y=y.geometry.parameters.height+.1,t.add(x),C(this,Ke,Hv).call(this,y.position.z,y.geometry.parameters.width),C(this,Ke,Vv).call(this,o.geometry.parameters.width),C(this,Ke,kv).call(this),this.scene.add(t)},Zl=function(t,n,i,s,o){const a=n;t.position.x=Math.cos(a)*i,t.position.z=Math.sin(a)*i,t.position.y=Math.sin(a)*Math.sin(a*s)*Math.sin(a*o)},kv=function(){this.ghostViolet=new gr("#8800ff",6),this.ghostPink=new gr("#ff0088",6),this.ghostRed=new gr("#ff0000",6),C(this,Ke,Jl).call(this,this.ghostViolet),C(this,Ke,Jl).call(this,this.ghostPink),C(this,Ke,Jl).call(this,this.ghostRed),this.scene.add(this.ghostViolet,this.ghostPink,this.ghostRed)},Jl=function(t){t.castShadow=!0,t.shadow.mapSize.width=256,t.shadow.mapSize.height=256,t.shadow.camera.far=10},Vv=function(t){const n=this.textureLoader.load(p2),i=this.textureLoader.load(g2),s=this.textureLoader.load(m2);s.colorSpace=nt,s.repeat.set(.3,.4),i.repeat.set(.3,.4),n.repeat.set(.3,.4);const o=new sn(.6,1,.3),a=new Ot({map:s,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}),l=new Di;for(let c=0;c<30;c++){const h=new ge(o,a),u=Math.random()*2*Math.PI,d=t*.5+1.5+Math.random()*4;h.position.y=h.geometry.parameters.height*.5-Math.random()*.4,h.position.x=Math.cos(u)*d,h.position.z=Math.sin(u)*d,h.rotation.x=(Math.random()-.5)*.4,h.rotation.y=(Math.random()-.5)*.4,h.rotation.z=(Math.random()-.5)*.4,h.castShadow=!0,h.receiveShadow=!0,l.add(h)}this.scene.add(l)},Hv=function(t,n){const i=this.textureLoader.load(u2),s=this.textureLoader.load(f2),o=this.textureLoader.load(d2);o.colorSpace=nt,o.repeat.set(2,1),s.repeat.set(2,1),i.repeat.set(2,1),o.wrapS=xt,s.wrapS=xt,i.wrapS=xt;const a=new ui(.5),l=new Ot({map:o,normalMap:s,roughnessMap:i,metalnessMap:i,aoMap:i,color:"#ccffcc"}),c=n*.5-.1,h=a.parameters.radius-.3,u=t+a.parameters.radius-.3,d=new ge(a,l);d.position.x=c,d.position.y=h,d.position.z=u,d.rotation.x=-.75,this.scene.add(d),C(this,Ke,ur).call(this,d,"Bush 1");const f=new ge(a,l);f.position.x=-c,f.position.y=h,f.position.z=u,f.scale.set(.8,.8,.8),f.rotation.x=-.75,this.scene.add(f),C(this,Ke,ur).call(this,f,"Bush 2");const g=new ge(a,l),v=.6;g.position.x=c+.6,g.position.z=u,g.scale.set(v,v,v),g.position.y=h*v,g.rotation.x=-.75,this.scene.add(g),C(this,Ke,ur).call(this,g,"Bush 3")},Gv=function(){this.camera.position.y=5,this.camera.position.x=5,this.camera.position.z=7,C(this,Ke,ur).call(this,this.camera,"Camera")},Wv=function(){const t=new Rr("#86cdff",.275);C(this,Ke,od).call(this,t,"Ambient Light"),this.scene.add(t);const n=new Kn("#86cdff",1);n.position.x=1,n.position.y=3,n.position.z=-5,n.castShadow=!0,n.shadow.mapSize.width=256,n.shadow.mapSize.height=256,n.shadow.camera.top=8,n.shadow.camera.bottom=-8,n.shadow.camera.right=8,n.shadow.camera.left=-8,n.shadow.camera.near=1,n.shadow.camera.far=20,C(this,Ke,od).call(this,n,"Directional Light"),this.scene.add(n)},jv=function(){const t=this.textureLoader.load(e2),n=this.textureLoader.load(n2),i=this.textureLoader.load(t2),s=this.textureLoader.load(s2),o=this.textureLoader.load(i2);n.colorSpace=nt,n.repeat.set(8,8),i.repeat.set(8,8),s.repeat.set(8,8),o.repeat.set(8,8),n.wrapS=xt,i.wrapS=xt,s.wrapS=xt,o.wrapS=xt,n.wrapT=xt,i.wrapT=xt,s.wrapT=xt,o.wrapT=xt;const a=new ge(new Rt(20,20,100,100),new Ot({transparent:!0,alphaMap:t,map:n,roughnessMap:i,metalnessMap:i,aoMap:i,normalMap:s,displacementMap:o,displacementScale:.3,displacementBias:-.2}));a.rotation.x=-Math.PI*.5,a.receiveShadow=!0,C(this,Ke,ur).call(this,a,"Floor"),this.scene.add(a)},Xv=function(){this.textureLoader=new Mn},od=function(t,n){const i=C(this,Ke,ur).call(this,t,n);return i.add(t,"intensity").min(0).max(10).step(.01),i.addColor({color:t.color.getHex()},"color").onChange(s=>{t.color.setHex(s)}),i},ur=function(t,n){const i=this.guiControl.addFolder(n);return i.add(t.position,"x").min(-8).max(8).step(.01),i.add(t.position,"y").min(-8).max(8).step(.01),i.add(t.position,"z").min(-8).max(8).step(.01),i},ig);var wc,qv,sg;let T2=(sg=class extends et{constructor(){super(...arguments);Re(this,wc);V(this,"particles");V(this,"hasAnimation",!0)}get number(){return"17"}get title(){return"Particles"}get link(){return"https://threejs-journey.com/lessons/particles"}update(t){this.control.update();const n=this.particles.geometry.attributes.position;for(let i=0;i<n.array.length;i+=3)n.array[i+1]=Math.sin(t*.001+n.array[i]);n.needsUpdate=!0}init(){super.init(),C(this,wc,qv).call(this)}dispose(){super.dispose(),this.particles=null}},wc=new WeakSet,qv=function(){const i=new ct,s=new Float32Array(3e3),o=new Float32Array(3e3);for(let h=0;h<s.length;h++)s[h]=(Math.random()-.5)*5,o[h]=Math.random();i.setAttribute("position",new ot(s,3)),i.setAttribute("color",new ot(o,3));const l=new Mn().load("/three.js-journey/media/images/textures/particles/2.png"),c=new Za({size:.1,sizeAttenuation:!0,transparent:!0,alphaMap:l});c.depthWrite=!1,c.blending=gs,c.vertexColors=!0,this.particles=new Ms(i,c),this.scene.add(this.particles)},sg);var Ct,ad,ld,cd,Yv,Ls,hd,$v,rg;let A2=(rg=class extends et{constructor(){super(...arguments);Re(this,Ct);V(this,"galaxy");V(this,"galaxyMaterial");V(this,"galaxyGeometry");V(this,"galaxyTweaks");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"18"}get title(){return"Galaxy Generator"}get link(){return"https://threejs-journey.com/lessons/galaxy-generator"}update(t){this.control.update();const n=t*.001;this.galaxy.rotation.y=n*.2}init(){super.init(),C(this,Ct,$v).call(this),C(this,Ct,Yv).call(this),C(this,Ct,ld).call(this)}dispose(){C(this,Ct,cd).call(this),super.dispose()}},Ct=new WeakSet,ad=function(){C(this,Ct,cd).call(this),C(this,Ct,ld).call(this)},ld=function(){this.galaxyGeometry=new ct;const t=this.galaxyTweaks.particles*3,n=new Float32Array(t),i=new Float32Array(t),s=new xe(this.galaxyTweaks.insideColor),o=new xe(this.galaxyTweaks.outsideColor);for(let a=0;a<t;a+=3){const l=a/3,c=Math.random()*this.galaxyTweaks.radius,h=2*Math.PI*(l%this.galaxyTweaks.branches/this.galaxyTweaks.branches),u=this.galaxyTweaks.spin*c,d=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,f=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,g=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c;n[a]=Math.cos(h+u)*c+d,n[a+1]=f,n[a+2]=Math.sin(h+u)*c+g;const p=s.clone().lerp(o,c/this.galaxyTweaks.radius);i[a]=p.r,i[a+1]=p.g,i[a+2]=p.b}this.galaxyGeometry.setAttribute("position",new ot(n,3)),this.galaxyGeometry.setAttribute("color",new ot(i,3)),this.galaxyMaterial=new Za({size:this.galaxyTweaks.size,sizeAttenuation:!0,depthWrite:!1,blending:gs,vertexColors:!0}),this.galaxy=new Ms(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},cd=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},Yv=function(){this.galaxyTweaks={particles:2e4,size:.01,radius:4,branches:7,spin:.7,offset:.3,gravityStrength:5,insideColor:"#ff6030",outsideColor:"#1b3984"},C(this,Ct,Ls).call(this,"particles",100,1e5,1),C(this,Ct,Ls).call(this,"size",.01,1,.01),C(this,Ct,Ls).call(this,"radius",1,20,.1),C(this,Ct,Ls).call(this,"branches",2,20,1),C(this,Ct,Ls).call(this,"spin",.2,20,.1),C(this,Ct,Ls).call(this,"offset",.1,20,.1),C(this,Ct,Ls).call(this,"gravityStrength",1,20,1),C(this,Ct,hd).call(this,"insideColor"),C(this,Ct,hd).call(this,"outsideColor")},Ls=function(t,n,i,s){this.guiControl.add(this.galaxyTweaks,t).min(n).max(i).step(s).onFinishChange(C(this,Ct,ad).bind(this))},hd=function(t){this.guiControl.addColor(this.galaxyTweaks,t).onFinishChange(C(this,Ct,ad).bind(this))},$v=function(){this.camera.position.x=3,this.camera.position.y=3,this.camera.position.z=5},rg);class sa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=zh(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=E2.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=zh()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:zh())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zh(){return performance.now()}function E2(){document.hidden===!1&&this.reset()}const C2="/three.js-journey/assets/3-CO1hT6T5.jpg";var vr,Mo,wo,Ya,So,bo,qe,Kv,Zv,Jv,Ql,Qv,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,og;let P2=(og=class extends et{constructor(){super(...arguments);Re(this,qe);V(this,"particles");V(this,"meshes",[]);V(this,"material");V(this,"cameraGroup");V(this,"timer");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0);Re(this,vr,5);Re(this,Mo,null);Re(this,wo,null);Re(this,Ya,0);Re(this,So);Re(this,bo)}get number(){return"19"}get title(){return"Scroll based animation"}get link(){return"https://threejs-journey.com/lessons/scroll-based-animation"}update(t){this.timer.update(t);const n=this.timer.getDelta();for(const i of this.meshes)i.rotation.x+=n*.1,i.rotation.y+=n*.3;if(Ue(this,Mo)&&Ue(this,wo)){const i=Ue(this,Mo)-this.cameraGroup.position.x,s=Ue(this,wo)-this.cameraGroup.position.y;this.cameraGroup.position.x+=i*2*n,this.cameraGroup.position.y+=s*2*n}}open(){C(this,qe,Zv).call(this),C(this,qe,Ql).call(this,"My portfolio","start"),C(this,qe,Ql).call(this,"My projects","end"),C(this,qe,Ql).call(this,"Contact me","start"),super.open()}close(){C(this,qe,Qv).call(this),C(this,qe,Jv).call(this),super.close()}init(){super.init(),C(this,qe,ex).call(this),C(this,qe,Kv).call(this),C(this,qe,fx).call(this),C(this,qe,dx).call(this),C(this,qe,ux).call(this),C(this,qe,cx).call(this),C(this,qe,hx).call(this),C(this,qe,px).call(this),C(this,qe,lx).call(this),C(this,qe,rx).call(this),C(this,qe,nx).call(this)}initCamera(){this.cameraGroup=new Di,this.camera=new bn(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.cameraGroup.add(this.camera),this.scene.add(this.cameraGroup)}dispose(){super.dispose(),C(this,qe,ox).call(this),C(this,qe,ix).call(this),C(this,qe,tx).call(this),this.particles=null,this.meshes=[],this.cameraGroup=null,this.timer=null}},vr=new WeakMap,Mo=new WeakMap,wo=new WeakMap,Ya=new WeakMap,So=new WeakMap,bo=new WeakMap,qe=new WeakSet,Kv=function(){this.renderer.setClearAlpha(0)},Zv=function(){document.body.style.overflow="visible",document.body.style.backgroundColor="#1e1a20"},Jv=function(){document.body.style.overflow="hidden",document.body.style.backgroundColor=null},Ql=function(t,n){const i=document.createElement("section"),s=document.createElement("h2");s.textContent=t,i.className="section",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent=n,i.style.paddingLeft="8em",i.style.paddingRight="8em",i.style.fontSize="2rem",i.style.height="100vh",i.style.textTransform="uppercase",i.appendChild(s),document.body.appendChild(i)},Qv=function(){document.querySelectorAll(".section").forEach(n=>n.remove())},ex=function(){this.control.dispose()},tx=function(){this.timer.dispose()},nx=function(){Ut(this,bo,C(this,qe,sx).bind(this)),window.addEventListener("mousemove",Ue(this,bo))},ix=function(){window.removeEventListener("mousemove",Ue(this,bo))},sx=function(t){Ut(this,Mo,t.clientX/window.innerWidth-.5),Ut(this,wo,-(t.clientY/window.innerHeight)-.5)},rx=function(){Ut(this,So,C(this,qe,ax).bind(this)),window.addEventListener("scroll",Ue(this,So))},ox=function(){window.removeEventListener("scroll",Ue(this,So))},ax=function(){const t=window.scrollY/window.innerHeight,n=Math.round(t);this.camera.position.y=-t*Ue(this,vr),Ue(this,Ya)!==n&&(Ut(this,Ya,n),Er.to(this.meshes[n].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))},lx=function(){for(let t=0;t<this.meshes.length;t++)this.meshes[t].position.y=-Ue(this,vr)*t,this.meshes[t].position.x=1.5*Math.pow(-1,t%2)},cx=function(){const t=new ge(new Cr(.75,.3,16,60),this.material);t.geometry.name="Torus";const n=new ge(new Lc(.75,1.5,32),this.material);n.geometry.name="Cone";const i=new ge(new Pr(.8,.25,100,16),this.material);i.geometry.name="Torus Knot",this.meshes.push(t),this.meshes.push(n),this.meshes.push(i),this.scene.add(...this.meshes)},hx=function(){const n=new Float32Array(600);for(let s=0;s<n.length;s+=3)n[s]=(Math.random()-.5)*10,n[s+1]=Ue(this,vr)/2-Math.random()*Ue(this,vr)*this.meshes.length,n[s+2]=(Math.random()-.5)*10;const i=new ct;i.setAttribute("position",new ot(n,3)),this.particles=new Ms(i,new Za({size:.02,sizeAttenuation:!0,color:this.material.color.getHex()})),this.scene.add(this.particles)},ux=function(){const n=new Mn().load(C2);n.magFilter=zt,this.material=new dC({color:"#ffeded",gradientMap:n})},dx=function(){const t=new Kn(16777215,3);t.position.set(4,2),this.scene.add(t)},fx=function(){this.timer=new sa},px=function(){this.guiControl.addColor({color:this.material.color.getHex()},"color").onChange(t=>{this.material.color.setHex(t),this.particles.material.color.setHex(t)});for(const t of this.meshes){const n=t.geometry.name,i=this.guiControl.addFolder(n.charAt(0).toUpperCase()+n.slice(1));i.add(t.position,"y").min(-100).max(100).step(.01),i.add(t.position,"x").min(-100).max(100).step(.01)}},og);var Wn,ec,tc,mx,gx;class R2{constructor(e){Re(this,Wn);V(this,"meshes",{});V(this,"instance");V(this,"boxGeometry");V(this,"sphereGeometry");V(this,"planeGeometry");V(this,"planeMaterial");V(this,"meshMaterial");this.instance=e,C(this,Wn,mx).call(this),C(this,Wn,gx).call(this)}addBox(e,t,n,i,s){const o=new ge(this.boxGeometry,this.meshMaterial);o.scale.set(t,n,i),C(this,Wn,ec).call(this,o,s),C(this,Wn,tc).call(this,e,o)}addSphere(e,t,n){const i=new ge(this.sphereGeometry,this.meshMaterial);C(this,Wn,ec).call(this,i,n,t),C(this,Wn,tc).call(this,e,i)}addPlane(e,t){const n=new ge(this.planeGeometry,this.planeMaterial);n.rotation.x=-Math.PI/2,C(this,Wn,ec).call(this,n,t,1),C(this,Wn,tc).call(this,e,n)}dispose(){for(const e in this.meshes)this.instance.remove(this.meshes[e])}}Wn=new WeakSet,ec=function(e,t,n=null){e.castShadow=!0,e.receiveShadow=!0,e.position.copy(t),n&&e.scale.set(n,n,n)},tc=function(e,t){this.meshes[e]=t,this.instance.add(t)},mx=function(){this.sphereGeometry=new ui(1),this.planeGeometry=new Rt(8,8,8),this.boxGeometry=new sn(1,1,1)},gx=function(){this.meshMaterial=new Ot({metalness:.3,roughness:.4}),this.planeMaterial=new Ot({color:7829367,metalness:.3,roughness:.4})};const L2="/three.js-journey/assets/nx-B1qAN98K.png",I2="/three.js-journey/assets/ny-C02qeYUz.png",D2="/three.js-journey/assets/nz-EWNLxSEp.png",N2="/three.js-journey/assets/px-BQkunSVR.png",F2="/three.js-journey/assets/py-BLoW9UYQ.png",U2="/three.js-journey/assets/pz-DHteryXs.png";class O2{static setup(e,t,n){this.initLights(e),this.initEnvMap(e),this.setupCamera(t),this.setupRenderer(n)}static setupCamera(e){e.fov=75,e.near=.1,e.far=100,e.position.set(-3,3,3)}static setupRenderer(e){e.shadowMap.enabled=!0,e.shadowMap.type=Ni}static initLights(e){const t=new Rr(16777215,2.1);e.add(t);const n=new Kn(16777215,.6);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,n.position.set(5,5,5),e.add(n)}static initEnvMap(e){const t=new lf;e.environment=t.load([N2,L2,F2,I2,U2,D2]),e.environmentIntensity=.5}}class Pm{static addAction(e,t,n){e.add({exec:t},"exec").name(n)}}var wt,_x,vx,xx,ud,dd,yx,nc,Mx,wx,Sx,bx,ag;let B2=(ag=class extends et{constructor(){super(...arguments);Re(this,wt);V(this,"threeWorld");V(this,"physicsWorld");V(this,"timer");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"20"}get title(){return"Physics"}get link(){return"https://threejs-journey.com/lessons/physics"}update(t){this.timer.update(t),this.physicsWorld.postMessage({type:"update",payload:{delta:this.timer.getDelta()}}),this.control.update()}init(){super.init(),O2.setup(this.scene,this.camera,this.renderer),C(this,wt,bx).call(this),C(this,wt,Mx).call(this),C(this,wt,wx).call(this),C(this,wt,Sx).call(this),C(this,wt,xx).call(this,{x:0,y:0,z:0}),C(this,wt,ud).call(this,.5,{x:0,y:3,z:0}),C(this,wt,dd).call(this,1,1,1,{x:3,y:3,z:0})}dispose(){super.dispose(),C(this,wt,vx).call(this),C(this,wt,_x).call(this),this.physicsWorld.terminate()}},wt=new WeakSet,_x=function(){this.threeWorld.dispose()},vx=function(){this.physicsWorld.postMessage({type:"dispose"})},xx=function(t){const n=C(this,wt,nc).call(this);this.threeWorld.addPlane(n,t),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"plane",id:n,position:t}})},ud=function(t,n){const i=C(this,wt,nc).call(this);this.threeWorld.addSphere(i,t,n),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"sphere",id:i,radius:t,position:n}})},dd=function(t,n,i,s){const o=C(this,wt,nc).call(this);this.threeWorld.addBox(o,t,n,i,s),this.physicsWorld.postMessage({type:"add",payload:{bodyType:"box",id:o,width:t/2,height:n/2,depth:i/2,position:s}})},yx=function(){this.physicsWorld.onmessage=t=>{const{type:n,payload:i}=t.data;switch(n){case"refresh":for(const s of i){const o=this.threeWorld.meshes[s.id];o.position.copy(s.position),o.quaternion.copy(s.quaternion)}break}}},nc=function(){return Date.now().toString(36)+Math.random().toString(36).substring(2,9)},Mx=function(){this.threeWorld=new R2(this.scene)},wx=function(){this.physicsWorld=new Worker(new URL("/three.js-journey/assets/worker-DOS562_J.js",import.meta.url),{type:"module"}),this.physicsWorld.postMessage({type:"init",payload:{gravity:-9.8,friction:.1,restitution:.7}}),C(this,wt,yx).call(this)},Sx=function(){Pm.addAction(this.guiControl,()=>{C(this,wt,ud).call(this,Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Sphere"),Pm.addAction(this.guiControl,()=>{C(this,wt,dd).call(this,Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})},"Create Box")},bx=function(){this.timer=new sa},ag);function z2(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(r.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){const w=a[y],E=r.attributes[w];l[w]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const b=r.morphAttributes[w];b&&(c[w]||(c[w]=[]),b.forEach((T,M)=>{const A=new T.array.constructor(T.count*T.itemSize);c[w][M]=new T.constructor(A,T.itemSize,T.normalized)}))}const f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),p=f*v;for(let y=0;y<s;y++){const x=n?n.getX(y):y;let w="";for(let E=0,b=a.length;E<b;E++){const T=a[E],M=r.getAttribute(T),A=M.itemSize;for(let _=0;_<A;_++)w+=`${~~(M[u[_]](x)*v+p)},`}if(w in t)h.push(t[w]);else{for(let E=0,b=a.length;E<b;E++){const T=a[E],M=r.getAttribute(T),A=r.morphAttributes[T],_=M.itemSize,S=l[T],I=c[T];for(let z=0;z<_;z++){const B=u[z],G=d[z];if(S[G](o,M[B](x)),A)for(let U=0,$=A.length;U<$;U++)I[U][G](o,A[U][B](x))}}t[w]=o,h.push(o),o++}}const m=r.clone();for(const y in r.attributes){const x=l[y];if(m.setAttribute(y,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in c)for(let w=0;w<c[y].length;w++){const E=c[y][w];m.morphAttributes[y][w]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(h),m}function Rm(r,e){if(e===k1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Lu||e===Yg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Lu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Zn extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new W2(t)}),this.register(function(t){return new j2(t)}),this.register(function(t){return new e3(t)}),this.register(function(t){return new t3(t)}),this.register(function(t){return new n3(t)}),this.register(function(t){return new q2(t)}),this.register(function(t){return new Y2(t)}),this.register(function(t){return new $2(t)}),this.register(function(t){return new K2(t)}),this.register(function(t){return new G2(t)}),this.register(function(t){return new Z2(t)}),this.register(function(t){return new X2(t)}),this.register(function(t){return new Q2(t)}),this.register(function(t){return new J2(t)}),this.register(function(t){return new V2(t)}),this.register(function(t){return new i3(t)}),this.register(function(t){return new s3(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ca.extractUrlBase(e);o=Ca.resolveURL(c,this.path)}else o=Ca.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Go(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tx){try{o[tt.KHR_BINARY_GLTF]=new r3(e)}catch(u){i&&i(u);return}s=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new v3(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new H2;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new o3(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new a3;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new l3;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function k2(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class V2{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gr(h),c.distance=u;break;case"spot":c=new hf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class H2{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,nt))}return Promise.all(i)}}class G2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class W2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(s)}}class j2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class X2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class q2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Y2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class $2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],cn),Promise.all(s)}}class K2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Z2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(s)}}class J2{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Q2{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class e3{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class t3{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class n3{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class i3{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class s3{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Ye,p=new O,m=new oi,y=new O(1,1,1),x=new LE(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&y.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,v.compose(p,m,y));for(const w in l)if(w==="_COLOR_0"){const E=l[w];x.instanceColor=new Nu(E.array,E.itemSize,E.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);Tt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Tx="glTF",ma=12,Lm={JSON:1313821514,BIN:5130562};class r3{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ma,s=new DataView(e,ma);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Lm.JSON){const c=new Uint8Array(e,ma+o,a);this.content=n.decode(c)}else if(l===Lm.BIN){const c=ma+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class o3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=fd[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fd[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,cn,d)})})}}class a3{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class l3{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Ax extends Ja{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,p=-2*f+3*d,m=f-d,y=1-p,x=m-d+u;for(let w=0;w!==a;w++){const E=o[v+w+a],b=o[v+w+l]*h,T=o[g+w+a],M=o[g+w]*h;s[w]=y*E+x*b+p*T+m*M}return s}}const c3=new oi;class h3 extends Ax{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return c3.fromArray(s).normalize().toArray(s),s}}const mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Im={9728:zt,9729:an,9984:Bg,9985:zl,9986:va,9987:Ii},Dm={33071:_i,33648:sc,10497:xt},kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u3={CUBICSPLINE:void 0,LINEAR:Na,STEP:Da},Vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function d3(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ms})),r.DefaultMaterial}function ar(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function cs(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function f3(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function p3(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function m3(r){let e;const t=r.extensions&&r.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hh(t.attributes):e=r.indices+":"+Hh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Hh(r.targets[n]);return e}function Hh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function pd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function g3(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _3=new Ye;class v3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new k2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Mn(this.options.manager):this.textureLoader=new PC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ar(s,a,i),cs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ca.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=kh[i.type],a=fo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ot(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=kh[i.type],c=fo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(y);x||(v=new c(a,m*f,i.count*f/h),x=new AE(v,f/h),t.cache.add(y,x)),p=new Jd(x,l,d%f/h,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),p=new ot(v,l,g);if(i.sparse!==void 0){const m=kh.SCALAR,y=fo[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,E=new y(o[1],x,i.sparse.count*m),b=new c(o[2],w,i.sparse.count*l);a!==null&&(p=new ot(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,M=E.length;T<M;T++){const A=E[T];if(p.setX(A,b[T*l]),l>=2&&p.setY(A,b[T*l+1]),l>=3&&p.setZ(A,b[T*l+2]),l>=4&&p.setW(A,b[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Im[d.magFilter]||an,h.minFilter=Im[d.minFilter]||Ii,h.wrapS=Dm[d.wrapS]||xt,h.wrapT=Dm[d.wrapT]||xt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const p=new ln(v);p.needsUpdate=!0,d(p)}),t.load(Ca.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),cs(u,o),u.userData.mimeType=o.mimeType||g3(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Za,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ea,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ot}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=_n);const h=s.alphaMode||Vh.OPAQUE;if(h===Vh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Mt){const u=s.emissiveFactor;a.emissive=new xe().setRGB(u[0],u[1],u[2],cn)}return s.emissiveTexture!==void 0&&o!==Mt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,nt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),cs(u,s),t.associations.set(u,{materials:e}),s.extensions&&ar(i,u,s),u})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=m3(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Nm(new ct,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?d3(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const y=c[f];if(p.mode===mi.TRIANGLES||p.mode===mi.TRIANGLE_STRIP||p.mode===mi.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new CE(v,y):new ge(v,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===mi.TRIANGLE_STRIP?m.geometry=Rm(m.geometry,Yg):p.mode===mi.TRIANGLE_FAN&&(m.geometry=Rm(m.geometry,Lu));else if(p.mode===mi.LINES)m=new ef(v,y);else if(p.mode===mi.LINE_STRIP)m=new Bo(v,y);else if(p.mode===mi.LINE_LOOP)m=new IE(v,y);else if(p.mode===mi.POINTS)m=new Ms(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&p3(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),cs(m,s),p.extensions&&ar(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&ar(i,u[0],s),u[0];const d=new Di;s.extensions&&ar(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(Fa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ka(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ye;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,p=v.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let y=0,x=d.length;y<x;y++){const w=d[y],E=f[y],b=g[y],T=v[y],M=p[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const A=n._createAnimationTracks(w,E,b,T,M);if(A)for(let _=0;_<A.length;_++)m.push(A[_])}return new ku(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_3)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new f0:c.length>1?h=new Di:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),cs(h,s),s.extensions&&ar(n,h,s),s.matrix!==void 0){const u=new Ye;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Di;n.name&&(s.name=i.createUniqueName(n.name)),cs(s,n),n.extensions&&ar(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ai||d instanceof ln)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ps[s.path]===Ps.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ps[s.path]){case Ps.weights:c=ko;break;case Ps.rotation:c=Vo;break;case Ps.position:case Ps.scale:c=Ho;break;default:switch(n.itemSize){case 1:c=ko;break;case 2:case 3:default:c=Ho;break}break}const h=i.interpolation!==void 0?u3[i.interpolation]:Na,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ps[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vo?h3:Ax;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function x3(r,e,t){const n=e.attributes,i=new ys;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const h=pd(fo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=pd(fo[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Nm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=fd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return lt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),cs(r,e),x3(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?f3(r,e.targets,t):r})}const Gh=new WeakMap;class Jn extends Qi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Go(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,nt,n).catch(n)}decodeDracoFile(e,t,n,i,s=cn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Gh.has(e)){const l=Gh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Gh.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new ct;e.index&&t.setIndex(new ot(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new ot(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==nt)return;const n=new xe;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),lt.toWorkingColorSpace(n,nt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Go(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=y3.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function y3(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(v=>v.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let y,x;if(c.useUniqueIDs)x=h[p],y=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,o[h[p]]),x===-1)continue;y=a.GetAttribute(d,x)}const w=i(o,a,d,p,m,y);p==="color"&&(w.vertexColorSpace=c.vertexColorSpace),v.attributes.push(w)}return g===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,v=g*h.BYTES_PER_ELEMENT,p=s(o,h),m=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,u,p,v,m);const y=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:y,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Xn,Ex,Cx,Px,Rx,Lx,Ix,lg;let M3=(lg=class extends et{constructor(){super(...arguments);Re(this,Xn);V(this,"timer");V(this,"foxMixer",null);V(this,"hasAnimation",!0)}get number(){return"21"}get title(){return"Imported models"}get link(){return"https://threejs-journey.com/lessons/imported-models"}update(t){this.timer.update(t),this.control.update(),this.foxMixer&&this.foxMixer.update(this.timer.getDelta())}init(){super.init(),C(this,Xn,Rx).call(this),C(this,Xn,Ix).call(this),C(this,Xn,Lx).call(this),C(this,Xn,Px).call(this),C(this,Xn,Ex).call(this),C(this,Xn,Cx).call(this)}},Xn=new WeakSet,Ex=function(){this.camera.fov=75,this.camera.near=.1,this.camera.far=100,this.camera.position.set(3,3,8)},Cx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni},Px=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",i=>{i.scene.position.set(3,0,3),this.scene.add(i.scene)}),t.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.position.set(-3,0,-3),i.scene.scale.set(4,4,4),this.scene.add(i.scene)}),t.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.025,.025,.025),this.scene.add(i.scene),this.foxMixer=new A0(i.scene),this.foxMixer.clipAction(i.animations[2]).play()})},Rx=function(){this.timer=new sa},Lx=function(){const t=new Rt(10,10,10),n=new Ot({roughness:.3,metalness:.7}),i=new ge(t,n);i.rotation.x=-Math.PI/2,this.scene.add(i)},Ix=function(){const t=new Rr(16777215,1);this.scene.add(t);const n=new Kn(16777215,3);n.position.set(3,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.far=15,n.shadow.camera.left=-7,n.shadow.camera.top=7,n.shadow.camera.right=7,n.shadow.camera.bottom=-7,this.scene.add(n)},lg);var To,qn,Dx,Nx,Fx,Ux,Ox,Bx,cg;let w3=(cg=class extends et{constructor(){super(...arguments);Re(this,qn);V(this,"raycaster");V(this,"objs",[]);V(this,"hasAnimation",!0);V(this,"cursor");Re(this,To)}get number(){return"22"}get title(){return"Raycaster and Mouse Events"}get link(){return"https://threejs-journey.com/lessons/raycaster-and-mouse-events"}update(t){const n=t*.001;for(let s=0;s<this.objs.length;s++){const o=this.objs[s];o.position.y=Math.sin(n+s*10)*3,o.scale.set(1,1,1),o.material.color.set(16777215),o.name==="duck"&&o.scale.set(.008,.008,.008)}this.raycaster.setFromCamera(this.cursor,this.camera);const i=this.raycaster.intersectObjects(this.objs);for(const s of i){const o=s.object;o.scale.set(1.2,1.2,1.2),o.material.color.set(14824424),o.name==="duck"&&o.scale.set(.0085,.0085,.0085)}this.control.update()}init(){super.init(),C(this,qn,Ux).call(this),C(this,qn,Fx).call(this),C(this,qn,Dx).call(this),C(this,qn,Ox).call(this),C(this,qn,Bx).call(this)}dispose(){this.canvas.removeEventListener("mousemove",Ue(this,To)),this.raycaster=null,super.dispose()}},To=new WeakMap,qn=new WeakSet,Dx=function(){this.raycaster=new E0(new O(0,0,0),new O(0,0,0)),this.cursor=new ue(0,0),Ut(this,To,C(this,qn,Nx).bind(this)),this.canvas.addEventListener("mousemove",Ue(this,To))},Nx=function(t){this.cursor.x=(t.offsetX/this.canvas.width-.5)*2,this.cursor.y=-((t.offsetY/this.canvas.height-.5)*2)},Fx=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n);const i=1,s=new ui(i);for(let o=0;o<3;o++){if(o===1)continue;const a=new Ot({metalness:.7,roughness:.3}),l=new ge(s,a);l.castShadow=!0,l.receiveShadow=!0,l.position.set(-3+o*i*3,0,0),this.objs.push(l),this.scene.add(l)}t.load("/three.js-journey/media/models/Duck/glTF-Draco/Duck.gltf",o=>{const a=o.scene.children[0].children[0];a.name="duck",a.scale.set(.008,.008,.008),a.rotation.y=-Math.PI/2,this.scene.add(a),this.objs.push(a)})},Ux=function(){const t=new Rr(16777215,.9);this.scene.add(t);const n=new Kn(16777215,3);n.position.set(5,5,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=2,n.shadow.camera.bottom=-2,n.shadow.camera.right=2,n.shadow.camera.left=-2,n.shadow.camera.far=10,this.scene.add(n)},Ox=function(){this.camera.position.z=5},Bx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni},cg);var wi,zx,kx,Vx,Hx,Gx,hg;let S3=(hg=class extends et{constructor(){super(...arguments);Re(this,wi);V(this,"hasAnimation",!0)}get number(){return"23"}get title(){return"Custom models with Blender"}get link(){return"https://threejs-journey.com/lessons/custom-models-with-blender"}update(){this.control.update()}init(){super.init(),C(this,wi,Hx).call(this),C(this,wi,Gx).call(this),C(this,wi,Vx).call(this),C(this,wi,zx).call(this),C(this,wi,kx).call(this)}},wi=new WeakSet,zx=function(){this.camera.position.set(2,2,4)},kx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni},Vx=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),this.scene.add(i.scene)})},Hx=function(){const t=new Rr(16777215,1);this.scene.add(t);const n=new Kn(16777215,3);n.position.set(-5,3,0),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.top=3,n.shadow.camera.bottom=-3,n.shadow.camera.right=3,n.shadow.camera.left=-3,n.shadow.camera.far=8,this.scene.add(n)},Gx=function(){const t=new Rt(5,5),n=new Ot,i=new ge(t,n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i)},hg);var Yn,Wx,jx,Xx,qx,Yx,$x,ug;let b3=(ug=class extends et{constructor(){super(...arguments);Re(this,Yn);V(this,"cubeCamera");V(this,"holyDonut");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"24"}get title(){return"Environment map"}get link(){return"https://threejs-journey.com/lessons/environment-map"}update(t){this.control.update();const n=t*.001;this.holyDonut.rotation.x=Math.abs(Math.cos(n*.5))*Math.PI,this.cubeCamera.update(this.renderer,this.scene)}init(){super.init(),C(this,Yn,Xx).call(this),C(this,Yn,$x).call(this),C(this,Yn,Yx).call(this),C(this,Yn,qx).call(this),C(this,Yn,jx).call(this),C(this,Yn,Wx).call(this)}},Yn=new WeakSet,Wx=function(){this.camera.position.set(1,1,6)},jx=function(){const t=this.guiControl.addFolder("Environment");t.add(this.scene,"environmentIntensity").min(0).max(10).step(.01).name("intensity"),t.add(this.scene.environmentRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation");const n=this.guiControl.addFolder("Background");n.add(this.scene,"backgroundIntensity").min(0).max(10).step(.01).name("intensity"),n.add(this.scene,"backgroundBlurriness").min(0).max(1).step(.01).name("blurriness"),n.add(this.scene.backgroundRotation,"y").min(0).max(2*Math.PI).step(.01).name("rotation")},Xx=function(){const n=new Mn().load("/three.js-journey/media/images/environmentMap/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg");n.colorSpace=nt,n.mapping=Hs,this.scene.background=n;const i=new o0(64,{type:Vi});this.cubeCamera=new r0(.1,100,i),this.cubeCamera.layers.set(1),this.scene.environment=i.texture},qx=function(){this.holyDonut=new ge(new Cr(4,.2),new Mt({color:new xe(10,4,2)})),this.holyDonut.layers.enable(1),this.scene.add(this.holyDonut)},Yx=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/FlightHelmet/glTF/FlightHelmet.gltf",i=>{i.scene.scale.set(3,3,3),i.scene.position.set(0,-1,0),this.scene.add(i.scene)})},$x=function(){const t=new ge(new Pr(.5,.2),new Ot({metalness:1,roughness:0,color:11184810}));t.position.set(-2,0,0),this.scene.add(t)},ug);var rn,Kx,Zx,Jx,Qx,ey,ty,ny,iy,sy,dg;let T3=(dg=class extends et{constructor(){super(...arguments);Re(this,rn);V(this,"directionalLight");V(this,"textureLoader");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"25"}get title(){return"Realistic render"}get link(){return"https://threejs-journey.com/lessons/realistic-render"}update(){this.control.update()}init(){super.init(),C(this,rn,Jx).call(this),C(this,rn,sy).call(this),C(this,rn,ey).call(this),C(this,rn,iy).call(this),C(this,rn,ny).call(this),C(this,rn,ty).call(this),C(this,rn,Kx).call(this),C(this,rn,Zx).call(this),C(this,rn,Qx).call(this)}},rn=new WeakSet,Kx=function(){this.camera.position.set(2,2,4)},Zx=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni,this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.5},Jx=function(){this.textureLoader=new Mn},Qx=function(){this.guiControl.add(this.scene,"environmentIntensity").min(0).max(10).step(.01),this.guiControl.add(this.renderer,"toneMapping",{No:ps,Linear:Ng,Reinhard:Fg,Cineon:Ug,ACESFilmic:Vs}),this.guiControl.add(this.renderer,"toneMappingExposure").min(0).max(10).step(.01);const t=this.guiControl.addFolder("Light");t.add(this.directionalLight,"intensity").min(0).max(20).step(.01),t.add(this.directionalLight.position,"x").min(-10).max(10).step(.01),t.add(this.directionalLight.position,"y").min(-10).max(10).step(.01),t.add(this.directionalLight.position,"z").min(-10).max(10).step(.01),t.add(this.directionalLight.shadow,"bias").min(-.05).max(.05).step(.001),t.add(this.directionalLight.shadow,"normalBias").min(-.05).max(.05).step(.001)},ey=function(){this.directionalLight=new Kn(16777215,3),this.directionalLight.position.set(-8.5,4.27,3),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(512,512),this.directionalLight.shadow.camera.far=15,this.directionalLight.shadow.bias=-.011,this.directionalLight.shadow.normalBias=.009,this.directionalLight.target.position.set(0,.25,0),this.directionalLight.target.updateWorldMatrix(),this.scene.add(this.directionalLight)},ty=function(){const t=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/castle/castle_nor.png");t.colorSpace=nt;const s=new ge(new Rt(3,3),new Ot({map:t,normalMap:i,aoMap:n,roughnessMap:n,metalnessMap:n}));s.position.set(0,1.5,-1.5),s.receiveShadow=!0,this.scene.add(s)},ny=function(){const t=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_diff.jpg"),n=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_arm.jpg"),i=this.textureLoader.load("/three.js-journey/media/images/textures/wood/wood_nor.png");t.colorSpace=nt;const s=new ge(new Rt(3,3),new Ot({map:t,normalMap:i,aoMap:n,metalnessMap:n,roughnessMap:n}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},iy=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Hamburger/hamburger.glb",i=>{i.scene.scale.set(.15,.15,.15),i.scene.children.forEach(s=>{s.castShadow=!0,s.receiveShadow=!0}),this.scene.add(i.scene)})},sy=function(){new Oc().load("/three.js-journey/media/images/environmentMap/0/2k.hdr",n=>{n.mapping=Hs,this.scene.environment=n,this.scene.background=n})},dg);var Dt,ry,oy,ay,ly,cy,hy,uy,dy,fy,Sa,fg;let A3=(fg=class extends et{constructor(){super(...arguments);Re(this,Dt);V(this,"animation",null);V(this,"currentAction",null);V(this,"actions",[]);V(this,"timer");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"26"}get title(){return"Code structuring for bigger projects"}get link(){return"https://threejs-journey.com/lessons/code-structuring-for-bigger-projects"}update(t){this.timer.update(t),this.animation&&this.animation.update(this.timer.getDelta()),this.control.update()}init(){super.init(),C(this,Dt,ay).call(this),C(this,Dt,fy).call(this),C(this,Dt,ly).call(this),C(this,Dt,hy).call(this),C(this,Dt,cy).call(this),C(this,Dt,oy).call(this),C(this,Dt,ry).call(this)}},Dt=new WeakSet,ry=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni,this.renderer.toneMapping=Vs},oy=function(){this.camera.position.set(3,2,3)},ay=function(){this.timer=new sa},ly=function(){const t=new Mn,n=t.load("/three.js-journey/media/images/textures/dirt/color.jpg"),i=t.load("/three.js-journey/media/images/textures/dirt/normal.jpg");n.colorSpace=nt,n.repeat.set(2,2),i.repeat.set(2,2),n.wrapS=xt,n.wrapT=xt,i.wrapS=xt,i.wrapT=xt;const s=new ge(new sf(2.5),new Ot({map:n,normalMap:i}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s)},cy=function(){const t=new lf;this.scene.environment=t.load(["/three.js-journey/media/images/environmentMap/3/px.jpg","/three.js-journey/media/images/environmentMap/3/nx.jpg","/three.js-journey/media/images/environmentMap/3/py.jpg","/three.js-journey/media/images/environmentMap/3/ny.jpg","/three.js-journey/media/images/environmentMap/3/pz.jpg","/three.js-journey/media/images/environmentMap/3/nz.jpg"])},hy=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/Fox/glTF/Fox.gltf",i=>{i.scene.scale.set(.015,.015,.015),i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),this.scene.add(i.scene),C(this,Dt,uy).call(this,i.scene,i.animations),C(this,Dt,Sa).call(this,"survey"),C(this,Dt,dy).call(this)})},uy=function(t,n){this.animation=new A0(t),this.actions.survey=this.animation.clipAction(n[0]),this.actions.walk=this.animation.clipAction(n[1]),this.actions.run=this.animation.clipAction(n[2])},dy=function(){const t=this.guiControl.addFolder("Fox");t.add({survey:()=>{C(this,Dt,Sa).call(this,"survey")}},"survey"),t.add({walk:()=>{C(this,Dt,Sa).call(this,"walk")}},"walk"),t.add({run:()=>{C(this,Dt,Sa).call(this,"run")}},"run")},fy=function(){const t=new Kn(16777215,3);t.position.set(3,2,0),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.far=10,this.scene.add(t)},Sa=function(t){const n=this.actions[t];n==null||n.reset(),n==null||n.play(),this.currentAction&&(n==null||n.crossFadeFrom(this.currentAction,1)),this.currentAction=n},fg);var E3=`uniform vec2 uFrequency;
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
}`,C3=`uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 texture = texture2D(uTexture, vUv);
    vec3 color   = texture.rgb * (vElevation + 0.3) * (1.0 / 0.6);
    gl_FragColor = vec4(color, 1);
}`;const P3="/three.js-journey/assets/argentinian-flag-YNgkmkdk.png";var Ko,py,my,pg;let R3=(pg=class extends et{constructor(){super(...arguments);Re(this,Ko);V(this,"material");V(this,"hasAnimation",!0)}get number(){return"27"}get title(){return"Shaders"}get link(){return"https://threejs-journey.com/lessons/shaders"}update(t){this.material.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),C(this,Ko,py).call(this),C(this,Ko,my).call(this)}},Ko=new WeakSet,py=function(){const n=new Mn().load(P3),i=new Rt(2,2,64,64);this.material=new Nt({vertexShader:E3,fragmentShader:C3,uniforms:{uFrequency:{value:new ue(10,5)},uTime:{value:0},uTexture:{value:n}}});const s=new ge(i,this.material);s.scale.y=2/3,this.scene.add(s)},my=function(){const t=this.guiControl.addFolder("Frequency");t.add(this.material.uniforms.uFrequency.value,"x").min(0).max(20),t.add(this.material.uniforms.uFrequency.value,"y").min(0).max(20)},pg);var L3=`varying vec2 vUv;

void main() {
    gl_Position =
    projectionMatrix *
    viewMatrix       *
    modelMatrix      *
    vec4(position, 1.0);

    vUv = uv;
}`,I3=`#define PI 3.1415926535897932384626433832795

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
}`,Sc,gy,mg;let D3=(mg=class extends et{constructor(){super(...arguments);Re(this,Sc);V(this,"hasAnimation",!0)}get number(){return"28"}get title(){return"Shader patterns"}get link(){return"https://threejs-journey.com/lessons/shader-patterns"}update(){this.control.update()}init(){super.init(),C(this,Sc,gy).call(this)}},Sc=new WeakSet,gy=function(){const t=new Rt(2,2,64,64),n=new Nt({vertexShader:L3,fragmentShader:I3,side:_n}),i=new ge(t,n);this.scene.add(i)},mg);var N3=`#define PI 3.1415926535897932384626433832795

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
}`,F3=`uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying float vElevation;
varying float vBigWaveElevation;

void main() {
    float strength = ((vElevation / vBigWaveElevation) + 1.0) / 2.0;
    vec3 color     = mix(uDepthColor, uSurfaceColor, strength);
    gl_FragColor   = vec4(color, 1.0);

    #include <colorspace_fragment>
}`,Pt,_y,vy,xy,md,yy,dr,ic,My,gg;let U3=(gg=class extends et{constructor(){super(...arguments);Re(this,Pt);V(this,"mesh");V(this,"timer");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"29"}get title(){return"Raging sea"}get link(){return"https://threejs-journey.com/lessons/raging-sea"}update(t){this.timer.update(t),this.control.update(),this.mesh.material.uniforms.uTime.value=this.timer.getElapsed()}init(){super.init(),C(this,Pt,xy).call(this),C(this,Pt,vy).call(this),C(this,Pt,_y).call(this),C(this,Pt,My).call(this)}dispose(){super.dispose(),this.timer.dispose(),this.timer=null}},Pt=new WeakSet,_y=function(){const t=this.guiControl.addFolder("Small Waves"),n=this.guiControl.addFolder("Big Waves"),i=n.addFolder("Frequency");C(this,Pt,dr).call(this,t,"uSmallWaveElevation",0,4,.001),C(this,Pt,dr).call(this,t,"uSmallWaveFrequency",0,10,.001),C(this,Pt,dr).call(this,t,"uSmallWaveSpeed",0,5,.001),C(this,Pt,dr).call(this,t,"uSmallWaveIteration",0,5,1),C(this,Pt,dr).call(this,n,"uBigWaveElevation",0,4,.001),C(this,Pt,yy).call(this,i,"uBigWaveFrequency",0,4,.001),C(this,Pt,dr).call(this,n,"uBigWaveSpeed",0,10,.001),C(this,Pt,md).call(this,this.guiControl,"uDepthColor"),C(this,Pt,md).call(this,this.guiControl,"uSurfaceColor")},vy=function(){this.mesh=new ge(new Rt(4,4,512,512),new Nt({vertexShader:N3,fragmentShader:F3,uniforms:{uTime:{value:0},uBigWaveElevation:{value:.3},uBigWaveFrequency:{value:new ue(.5,.3)},uBigWaveSpeed:{value:1.5},uSmallWaveElevation:{value:.2},uSmallWaveFrequency:{value:3},uSmallWaveSpeed:{value:.3},uSmallWaveIteration:{value:3},uDepthColor:{value:new xe(1599121)},uSurfaceColor:{value:new xe(10213631)}}})),this.mesh.rotation.x=-Math.PI/2,this.scene.add(this.mesh)},xy=function(){this.timer=new sa},md=function(t,n){const i=this.mesh.material.uniforms[n].value;t.addColor({color:i.getHexString()},"color").onChange(s=>{i.set(s)}).name(n)},yy=function(t,n,i,s,o){C(this,Pt,ic).call(this,t,this.mesh.material.uniforms[n].value,"x",i,s,o,"x"),C(this,Pt,ic).call(this,t,this.mesh.material.uniforms[n].value,"y",i,s,o,"y")},dr=function(t,n,i,s,o){C(this,Pt,ic).call(this,t,this.mesh.material.uniforms[n],"value",i,s,o,n)},ic=function(t,n,i,s,o,a,l){t.add(n,i).min(s).max(o).step(a).name(l)},My=function(){this.camera.position.set(3,3,1)},gg);var O3=`uniform float uTime;
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
}`,B3=`varying vec3 vColor;

void main() {
    float strength = 1.0 - (distance(vec2(0.5), gl_PointCoord) * 2.0);
    strength = pow(strength, 10.0);
    vec3 mixedColor = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
    #include <colorspace_fragment>
}`,dt,wy,gd,Sy,by,Ty,Ay,_d,vd,fr,xd,_g;let z3=(_g=class extends et{constructor(){super(...arguments);Re(this,dt);V(this,"galaxy");V(this,"galaxyMaterial");V(this,"galaxyGeometry");V(this,"galaxyParams",{particles:3e4,particleSize:50,particleOffset:.3,branches:7,radius:6,gravityStrength:5,innerColor:"#ff6030",outerColor:"#1b3984"});V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"30"}get title(){return"Animated galaxy"}get link(){return"https://threejs-journey.com/lessons/animated-galaxy"}update(t){this.galaxyMaterial.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),C(this,dt,Sy).call(this),C(this,dt,gd).call(this),C(this,dt,wy).call(this)}dispose(){C(this,dt,xd).call(this),super.dispose()}},dt=new WeakSet,wy=function(){this.camera.position.set(1,5,10)},gd=function(){C(this,dt,by).call(this),C(this,dt,Ty).call(this),C(this,dt,Ay).call(this)},Sy=function(){C(this,dt,fr).call(this,"particles",100,1e6,1),C(this,dt,fr).call(this,"particleSize",.01,100,.01),C(this,dt,fr).call(this,"particleOffset",.01,10,.01),C(this,dt,fr).call(this,"branches",1,20,1),C(this,dt,fr).call(this,"radius",1,20,.1),C(this,dt,fr).call(this,"gravityStrength",1,20,1),C(this,dt,vd).call(this,"innerColor"),C(this,dt,vd).call(this,"outerColor")},by=function(){this.galaxyGeometry=new ct;const t=this.galaxyParams.particles,n=this.galaxyParams.particleOffset,i=this.galaxyParams.branches,s=this.galaxyParams.radius,o=this.galaxyParams.gravityStrength,a=new xe(this.galaxyParams.innerColor),l=new xe(this.galaxyParams.outerColor),c=2*Math.PI/i,h=t*3,u=new Float32Array(h),d=new Float32Array(h),f=new Float32Array(h),g=new Float32Array(t);for(let x=0;x<t;x+=1){const w=x*3,E=s*Math.random(),b=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*E*n,T=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*E*n,M=Math.pow(Math.random(),o)*Math.pow(-1,Math.round(Math.random()))*E*n;let A=c*(x%i);u[w+0]=Math.cos(A)*E+b,u[w+1]=T,u[w+2]=Math.sin(A)*E+M;const _=new xe().lerpColors(a,l,E/s);d[w+0]=_.r,d[w+1]=_.g,d[w+2]=_.b,f[w+0]=b,f[w+1]=T,f[w+2]=M,g[x]=Math.random()}const v=new ot(u,3),p=new ot(d,3),m=new ot(f,3),y=new ot(g,1);this.galaxyGeometry.setAttribute("position",v),this.galaxyGeometry.setAttribute("color",p),this.galaxyGeometry.setAttribute("aOffset",m),this.galaxyGeometry.setAttribute("aScale",y)},Ty=function(){this.galaxyMaterial=new Nt({depthWrite:!1,vertexColors:!0,blending:gs,vertexShader:O3,fragmentShader:B3,uniforms:{uSize:{value:this.galaxyParams.particleSize*this.renderer.getPixelRatio()},uTime:{value:0}}})},Ay=function(){this.galaxy=new Ms(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},_d=function(t,n){this.galaxyParams[t]=n,C(this,dt,xd).call(this),C(this,dt,gd).call(this)},vd=function(t){this.guiControl.addColor({value:this.galaxyParams[t]},"value").name(t).onFinishChange(n=>{C(this,dt,_d).call(this,t,n)})},fr=function(t,n,i,s){this.guiControl.add({value:this.galaxyParams[t]},"value").min(n).max(i).step(s).name(t).onFinishChange(o=>{C(this,dt,_d).call(this,t,o)})},xd=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},_g);var k3=`#include <common>

uniform float uTime;

mat2 get2dRotateMatrix(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}`,V3=`#include <uv_vertex>
float angle        = sin(position.y + uTime) * 0.4;
mat2  rotateMatrix = get2dRotateMatrix(angle);`,H3=`#include <beginnormal_vertex>
objectNormal.xz = rotateMatrix * objectNormal.xz;`,G3=`#include <begin_vertex>
transformed.xz = rotateMatrix * transformed.xz;`,xn,Ey,yd,Cy,Py,Ry,Ly,Iy,vg;let W3=(vg=class extends et{constructor(){super(...arguments);Re(this,xn);V(this,"modelMaterial");V(this,"modelUniforms",{uTime:{value:0}});V(this,"customDepthMaterial");V(this,"hasAnimation",!0)}get number(){return"31"}get title(){return"Modified materials"}get link(){return"https://threejs-journey.com/lessons/modified-materials"}update(t){this.modelUniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),C(this,xn,Cy).call(this),C(this,xn,Py).call(this),C(this,xn,Ly).call(this),C(this,xn,Iy).call(this),C(this,xn,Ry).call(this)}},xn=new WeakSet,Ey=function(){this.modelMaterial.onBeforeCompile=C(this,xn,yd).bind(this),this.customDepthMaterial.onBeforeCompile=C(this,xn,yd).bind(this)},yd=function(t){t.uniforms.uTime=this.modelUniforms.uTime,t.vertexShader=t.vertexShader.replace("#include <common>",k3),t.vertexShader=t.vertexShader.replace("#include <uv_vertex>",V3),t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",H3),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",G3)},Cy=function(){const n=new lf().load(["/three.js-journey/media/images/environmentMap/3/px.jpg","/three.js-journey/media/images/environmentMap/3/nx.jpg","/three.js-journey/media/images/environmentMap/3/py.jpg","/three.js-journey/media/images/environmentMap/3/ny.jpg","/three.js-journey/media/images/environmentMap/3/pz.jpg","/three.js-journey/media/images/environmentMap/3/nz.jpg"]);this.scene.background=n,this.scene.environment=n,this.scene.backgroundIntensity=1,this.scene.environmentIntensity=1},Py=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load("/three.js-journey/media/models/LeePerrySmith/LeePerrySmith.glb",i=>{const s=new Mn,o=s.load("/three.js-journey/media/models/LeePerrySmith/normal.jpg"),a=s.load("/three.js-journey/media/models/LeePerrySmith/color.jpg");a.colorSpace=nt;const l=i.scene.children[0];l.receiveShadow=!0,l.castShadow=!0,this.modelMaterial=l.material,this.modelMaterial.map=a,this.modelMaterial.normalMap=o,this.customDepthMaterial=new Pc({depthPacking:Tc}),l.customDepthMaterial=this.customDepthMaterial,this.scene.add(l),C(this,xn,Ey).call(this)})},Ry=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ud,this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1},Ly=function(){const t=new Kn(16777215,3);t.position.set(4,1,0),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.far=15,t.shadow.normalBias=.05,this.scene.add(t)},Iy=function(){this.camera.position.set(-1,3,10)},vg);const j3="/three.js-journey/assets/perlin-CqwIJTvm.png",X3="/three.js-journey/assets/bakedModel-EZnnxNa-.glb";var q3=`uniform float     uTime;
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
}`,Y3=`uniform float     uTime;
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
}`,Ys,Dy,Ny,Fy,xg;let $3=(xg=class extends et{constructor(){super(...arguments);Re(this,Ys);V(this,"smokeMaterial",null);V(this,"hasAnimation",!0)}get number(){return"32"}get title(){return"Coffee Smoke"}get link(){return"https://threejs-journey.com/lessons/coffee-smoke-shader"}update(t){this.smokeMaterial&&(this.smokeMaterial.uniforms.uTime.value=t*.001),this.control.update()}init(){super.init(),C(this,Ys,Ny).call(this),C(this,Ys,Fy).call(this)}},Ys=new WeakSet,Dy=function(){const n=new Mn().load(j3);n.wrapS=xt,n.wrapT=xt;const i=new Rt(1,1,16,64);this.smokeMaterial=new Nt({transparent:!0,depthWrite:!1,side:_n,vertexShader:q3,fragmentShader:Y3,uniforms:{uPerlinNoiseTexture:new Ie(n),uTime:new Ie(0)}});const s=new ge(i,this.smokeMaterial);s.scale.set(1.5,6,1.5),s.position.y=4.83,this.scene.add(s)},Ny=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load(X3,i=>{this.scene.add(i.scene),C(this,Ys,Dy).call(this)})},Fy=function(){this.camera.position.set(3,9,6)},xg);var K3=`uniform float uTime;

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
}`,Z3=`uniform float uTime;
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
}`,$i,Uy,Oy,By,zy,yg;let J3=(yg=class extends et{constructor(){super(...arguments);Re(this,$i);V(this,"suzanne",null);V(this,"torusKnot");V(this,"sphere");V(this,"material");V(this,"hologramColor","#70c1ff");V(this,"backgroundColor","#1d1f2a");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"33"}get title(){return"Hologram"}get link(){return"https://threejs-journey.com/lessons/hologram-shader"}update(t){const n=t*.001,i=-n*.1,s=n*.2;this.material.uniforms.uTime.value=n,this.suzanne&&(this.suzanne.rotation.x=i,this.suzanne.rotation.y=s),this.sphere.rotation.x=i,this.sphere.rotation.y=s,this.torusKnot.rotation.x=i,this.torusKnot.rotation.y=s,this.control.update()}init(){super.init(),C(this,$i,Uy).call(this),C(this,$i,Oy).call(this),C(this,$i,By).call(this),C(this,$i,zy).call(this)}},$i=new WeakSet,Uy=function(){this.guiControl.addColor({backgroundColor:this.backgroundColor},"backgroundColor").onChange(t=>{this.renderer.setClearColor(t)}),this.guiControl.addColor({hologramColor:this.hologramColor},"hologramColor").onChange(t=>{this.material.uniforms.uColor.value.set(t)})},Oy=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.material=new Nt({transparent:!0,side:_n,depthWrite:!1,blending:gs,vertexShader:K3,fragmentShader:Z3,uniforms:{uTime:new Ie(0),uColor:new Ie(new xe(this.hologramColor))}}),this.sphere=new ge(new ui(1),this.material),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ge(new Pr(.6,.25,128,32),this.material),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{i.scene.traverse(o=>{o.isMesh&&(this.suzanne=o,this.suzanne.material=this.material,this.scene.add(this.suzanne))})})},By=function(){this.camera.position.set(3,3,3)},zy=function(){this.renderer.setClearColor(this.backgroundColor)},yg);var Q3=`uniform float uProgress;
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
}`,eL=`uniform vec3      uColor;
uniform sampler2D uTexture;

void main() {
    float alpha = texture(uTexture, gl_PointCoord).r;

    gl_FragColor = vec4(uColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,$s,ky,Vy,Hy;class tL{constructor(e=null){Re(this,$s);V(this,"instance");V(this,"texture");V(this,"material");V(this,"geometry");V(this,"textures",["/three.js-journey/media/images/textures/particles/1.png","/three.js-journey/media/images/textures/particles/2.png","/three.js-journey/media/images/textures/particles/3.png","/three.js-journey/media/images/textures/particles/4.png","/three.js-journey/media/images/textures/particles/5.png","/three.js-journey/media/images/textures/particles/6.png","/three.js-journey/media/images/textures/particles/7.png","/three.js-journey/media/images/textures/particles/8.png","/three.js-journey/media/images/textures/particles/9.png","/three.js-journey/media/images/textures/particles/10.png","/three.js-journey/media/images/textures/particles/11.png","/three.js-journey/media/images/textures/particles/12.png","/three.js-journey/media/images/textures/particles/13.png"]);V(this,"parameters",{position:new O(0,0,0),particles:1e3,particleSize:.05,particleColor:"#8affff",radius:3,texture:10});e&&(this.parameters=e),C(this,$s,ky).call(this)}dispose(){this.geometry.dispose(),this.material.dispose(),this.texture.dispose(),this.instance=null,this.geometry=null,this.material=null,this.texture=null}}$s=new WeakSet,ky=function(){C(this,$s,Vy).call(this),C(this,$s,Hy).call(this),this.instance=new Ms(this.geometry,this.material),this.instance.position.copy(this.parameters.position)},Vy=function(){const e=this.parameters.particles,t=e*3,n=new Float32Array(t),i=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<e;o++){const a=o*3,l=new dc(this.parameters.radius*(.75+.25*Math.random()),Math.random()*Math.PI,Math.random()*2*Math.PI),c=new O().setFromSpherical(l);n[a+0]=c.x,n[a+1]=c.y,n[a+2]=c.z,i[o]=Math.random(),s[o]=1+Math.random()}this.geometry=new ct,this.geometry.setAttribute("position",new Ze(n,3)),this.geometry.setAttribute("aScale",new Ze(i,1)),this.geometry.setAttribute("aTimeMultiplier",new Ze(s,1))},Hy=function(){const e=new Mn;this.texture=e.load(this.textures[this.parameters.texture]),this.texture.flipY=!1,this.material=new Nt({transparent:!0,blending:gs,depthWrite:!1,vertexShader:Q3,fragmentShader:eL,uniforms:{uSize:new Ie(this.parameters.particleSize),uTexture:new Ie(this.texture),uColor:new Ie(new xe(this.parameters.particleColor)),uProgress:new Ie(0)}})};var Ao,us,dn,Gy,Wy,Md,jy,wd,Sd,Xy,Mg;let nL=(Mg=class extends et{constructor(){super(...arguments);Re(this,dn);V(this,"fireworks",[]);V(this,"hasGuiTweaks",!1);V(this,"hasAnimation",!0);Re(this,Ao);Re(this,us,{turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.95,elevation:-2.2,azimuth:180})}get number(){return"34"}get title(){return"Fireworks"}get link(){return"https://threejs-journey.com/lessons/fireworks-shaders"}update(){this.control.update()}init(){super.init(),C(this,dn,Gy).call(this),C(this,dn,Md).call(this),C(this,dn,Wy).call(this),C(this,dn,Xy).call(this)}resizeRenderer(){super.resizeRenderer(),this.fireworks.length&&this.fireworks.forEach(t=>{C(this,dn,Sd).call(this,t)})}dispose(){C(this,dn,jy).call(this),this.canvas.removeEventListener("click",Ue(this,Ao)),super.dispose()}},Ao=new WeakMap,us=new WeakMap,dn=new WeakSet,Gy=function(){const t=new el;t.scale.setScalar(45e4);const n=new O,i=t.material.uniforms;i.turbidity.value=Ue(this,us).turbidity,i.rayleigh.value=Ue(this,us).rayleigh,i.mieCoefficient.value=Ue(this,us).mieCoefficient,i.mieDirectionalG.value=Ue(this,us).mieDirectionalG;const s=Fa.degToRad(90-Ue(this,us).elevation),o=Fa.degToRad(Ue(this,us).azimuth);n.setFromSphericalCoords(1,s,o),i.sunPosition.value.copy(n),this.scene.add(t)},Wy=function(){Ut(this,Ao,C(this,dn,Md).bind(this)),this.canvas.addEventListener("click",Ue(this,Ao))},Md=function(){const t=new tL({position:new O((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),particles:1500+Math.floor(1e3*Math.random()),particleSize:.08+.02*Math.random(),particleColor:`rgb(${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())})`,radius:1+Math.random(),texture:Math.floor(12*Math.random())});C(this,dn,Sd).call(this,t),this.scene.add(t.instance),this.fireworks.push(t),Er.to(t.material.uniforms.uProgress,{value:1,duration:3,ease:"linear",onComplete:()=>{C(this,dn,wd).call(this,t)}})},jy=function(){this.fireworks.forEach(t=>{t.instance&&C(this,dn,wd).call(this,t)}),this.fireworks=[]},wd=function(t){this.scene.remove(t.instance),t.dispose()},Sd=function(t){t.material.uniforms.uSize.value=t.parameters.particleSize*this.canvas.height*this.renderer.getPixelRatio()},Xy=function(){this.camera.position.set(4,4,4)},Mg);var iL=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec4 modelPosition      = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    vec4 modelNormal        = normalize(modelMatrix * vec4(normal, 0.0));

    gl_Position = projectionPosition;
    vPosition   = modelPosition.xyz;
    vNormal     = modelNormal.xyz;
}`,sL=`uniform vec3 uColor;

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
}`,Si,qy,Yy,$y,Ky,Zy,wg;let rL=(wg=class extends et{constructor(){super(...arguments);Re(this,Si);V(this,"suzanne",null);V(this,"torusKnot");V(this,"sphere");V(this,"material");V(this,"materialColor","#ffffff");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"35"}get title(){return"Lights Shading"}get link(){return"https://threejs-journey.com/lessons/lights-shading-shaders"}update(t){const n=t*.001;this.suzanne&&(this.suzanne.rotation.x=-n*.1,this.suzanne.rotation.y=n*.2),this.sphere.rotation.x=-n*.1,this.sphere.rotation.y=n*.2,this.torusKnot.rotation.x=-n*.1,this.torusKnot.rotation.y=n*.2,this.control.update()}init(){super.init(),C(this,Si,Yy).call(this),C(this,Si,$y).call(this),C(this,Si,Ky).call(this),C(this,Si,Zy).call(this),C(this,Si,qy).call(this)}},Si=new WeakSet,qy=function(){this.camera.position.set(5,5,5)},Yy=function(){this.guiControl.addColor({color:this.materialColor},"color").onChange(t=>{this.material.uniforms.uColor.value.set(t)})},$y=function(){this.material=new Nt({vertexShader:iL,fragmentShader:sL,uniforms:{uColor:new Ie(new xe(this.materialColor))}})},Ky=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.sphere=new ge(new ui,this.material),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ge(new Pr(.6,.25,128,32),this.material),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{this.suzanne=i.scene,this.suzanne.traverse(s=>{s.isMesh&&(s.material=this.material)}),this.scene.add(this.suzanne)})},Zy=function(){const t=new ge(new Rt,new Mt({}));t.position.set(0,0,3),t.material.side=_n,t.material.color.setRGB(.1,.1,1),this.scene.add(t);const n=new ge(new zo(.1,2),new Mt({}));n.position.set(0,2.5,0),n.material.color.setRGB(1,.1,.1),this.scene.add(n);const i=new ge(new zo(.1,2),new Mt({}));i.position.set(2,2,2),i.material.color.setRGB(.1,1,.5),this.scene.add(i)},wg);var oL=`uniform float uTime;
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
}`,aL=`uniform float uBigWavesElevation;
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
}`,bt,Jy,Qy,bd,eM,Ui,tM,nM,iM,Sg;let lL=(Sg=class extends et{constructor(){super(...arguments);Re(this,bt);V(this,"seaMaterial");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"36"}get title(){return"Raging Sea Shading"}get link(){return"https://threejs-journey.com/lessons/raging-sea-shading-shaders"}update(t){this.seaMaterial.uniforms.uTime.value=t*.001,this.control.update()}init(){super.init(),C(this,bt,Qy).call(this),C(this,bt,Jy).call(this),C(this,bt,iM).call(this),C(this,bt,nM).call(this)}},bt=new WeakSet,Jy=function(){C(this,bt,Ui).call(this,"uBigWavesElevation",0,1,.001),C(this,bt,eM).call(this,"uBigWavesFrequency",0,10,.001),C(this,bt,Ui).call(this,"uBigWavesSpeed",0,4,.001),C(this,bt,Ui).call(this,"uSmallWavesElevation",0,1,.001),C(this,bt,Ui).call(this,"uSmallWavesFrequency",0,10,.001),C(this,bt,Ui).call(this,"uSmallWavesSpeed",0,4,.001),C(this,bt,Ui).call(this,"uSmallWavesIterations",0,5,1),C(this,bt,Ui).call(this,"uNormalShift",.001,1,.001),C(this,bt,bd).call(this,"uDepthColor"),C(this,bt,bd).call(this,"uSurfaceColor")},Qy=function(){const t=new Rt(2,2,512,512);t.deleteAttribute("normal"),t.deleteAttribute("uv"),this.seaMaterial=new Nt({vertexShader:oL,fragmentShader:aL,uniforms:{uTime:new Ie(0),uBigWavesElevation:new Ie(.2),uBigWavesFrequency:new Ie(new ue(4,1.5)),uBigWavesSpeed:new Ie(1.5),uSmallWavesElevation:new Ie(.15),uSmallWavesFrequency:new Ie(2.9),uSmallWavesSpeed:new Ie(.8),uSmallWavesIterations:new Ie(3),uDepthColor:new Ie(new xe("#ff4000")),uSurfaceColor:new Ie(new xe("#151c37")),uNormalShift:new Ie(.01)}});const n=new ge(t,this.seaMaterial);n.rotation.x=-Math.PI/2,this.scene.add(n)},bd=function(t){this.guiControl.addColor({[t]:this.seaMaterial.uniforms[t].value.getHexString()},t).name(t).onChange(n=>{this.seaMaterial.uniforms[t].value.set(n)})},eM=function(t,n,i,s){const o=this.guiControl.addFolder(t);C(this,bt,Ui).call(this,"x",n,i,s,this.seaMaterial.uniforms[t].value.x,o,a=>{this.seaMaterial.uniforms[t].value.x=a}),C(this,bt,Ui).call(this,"y",n,i,s,this.seaMaterial.uniforms[t].value.y,o,a=>{this.seaMaterial.uniforms[t].value.y=a})},Ui=function(t,n,i,s,o=null,a=null,l=null){let c=this.guiControl;a&&(c=a);let h;o?h=o:h=this.seaMaterial.uniforms[t].value;const u=c.add({[t]:h},t).min(n).max(i).step(s).name(t);C(this,bt,tM).call(this,u,l)},tM=function(t,n=null){let i=s=>{this.seaMaterial.uniforms[t.property].value=s};n&&(i=n),t.onChange(i)},nM=function(){this.renderer.toneMapping=Vs},iM=function(){this.camera.position.set(1,1,1)},Sg);var cL=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vPosition = modelPosition.xyz;
    vNormal   = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
}`,hL=`uniform vec3  uBaseColor;
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
}`,$a,hi,sM,rM,oM,aM,Td,bg;let uL=(bg=class extends et{constructor(){super(...arguments);Re(this,hi);V(this,"suzanne",null);V(this,"torusKnot");V(this,"sphere");V(this,"halftoneMaterial");V(this,"halftoneRepetitions",100);V(this,"halftoneColor","#8e19b8");V(this,"halftoneBaseColor","#ff794d");V(this,"backgroundColor","#26132f");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0);Re(this,$a)}get number(){return"37"}get title(){return"Halftone Shading"}get link(){return"https://threejs-journey.com/lessons/halftone-shading-shaders"}update(t){const n=t*.001;this.suzanne&&(this.suzanne.rotation.x=-n*.1,this.suzanne.rotation.y=n*.2),this.sphere.rotation.x=-n*.1,this.sphere.rotation.y=n*.2,this.torusKnot.rotation.x=-n*.1,this.torusKnot.rotation.y=n*.2,this.control.update()}init(){super.init(),C(this,hi,sM).call(this),C(this,hi,rM).call(this),C(this,hi,oM).call(this),C(this,hi,aM).call(this)}dispose(){this.canvas.removeEventListener("resize",Ue(this,$a)),super.dispose()}},$a=new WeakMap,hi=new WeakSet,sM=function(){const t=this.guiControl.addFolder("Halftone Downward");t.add({repetitions:this.halftoneRepetitions},"repetitions").min(10).max(300).step(1).onChange(n=>{this.halftoneMaterial.uniforms.uRepetitions.value=n}),t.addColor({color:this.halftoneColor},"color").onChange(n=>{this.halftoneMaterial.uniforms.uColor.value.set(n)}),t.addColor({baseColor:this.halftoneBaseColor},"baseColor").onChange(n=>{this.halftoneMaterial.uniforms.uBaseColor.value.set(n)}),this.guiControl.addColor({backgroundColor:this.backgroundColor},"backgroundColor").onChange(n=>{this.renderer.setClearColor(n)})},rM=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),this.halftoneMaterial=new Nt({vertexShader:cL,fragmentShader:hL,uniforms:{uBaseColor:new Ie(new xe(this.halftoneBaseColor)),uColor:new Ie(new xe(this.halftoneColor)),uRepetitions:new Ie(this.halftoneRepetitions),uResolution:new Ie(C(this,hi,Td).call(this))}}),this.sphere=new ge(new ui,this.halftoneMaterial),this.sphere.position.x=-3,this.scene.add(this.sphere),this.torusKnot=new ge(new Pr(.6,.25,128,32),this.halftoneMaterial),this.torusKnot.position.x=3,this.scene.add(this.torusKnot),t.load("/three.js-journey/media/models/Suzanne/suzanne.glb",i=>{i.scene.traverse(o=>{o.isMesh&&(o.material=this.halftoneMaterial,this.suzanne=o,this.scene.add(this.suzanne))})})},oM=function(){this.camera.position.set(3,3,3)},aM=function(){this.renderer.setClearColor(this.backgroundColor),Ut(this,$a,()=>{this.halftoneMaterial.uniforms.uResolution.value=C(this,hi,Td).call(this)})},Td=function(){return new ue(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio())},bg);const dL="/three.js-journey/assets/day-DkcerPt2.jpg",fL="/three.js-journey/assets/night-BR_DbmEQ.jpg",pL="/three.js-journey/assets/specularCloud-DpLQ1-js.jpg";var mL=`varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec4 modelPosition      = modelMatrix      * vec4(position, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vNormal   = (modelMatrix * vec4(normal, 1.0)).xyz;
    vPosition = modelPosition.xyz;
}`,gL=`varying vec3 vNormal;
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
}`,_L=`varying vec2 vUv;
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
}`,vL=`uniform sampler2D uDayTexture;
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
}`,yn,lM,Ad,cM,hM,uM,dM,fM,Tg;let xL=(Tg=class extends et{constructor(){super(...arguments);Re(this,yn);V(this,"earth");V(this,"earthMaterial");V(this,"earthGeometry");V(this,"earthParameters",{atmosphereDayColor:"#00aaff",atmosphereTwilightColor:"#ff6600"});V(this,"atmosphere");V(this,"atmosphereMaterial");V(this,"sun");V(this,"sunDirection");V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"38"}get title(){return"Earth"}get link(){return"https://threejs-journey.com/lessons/earth-shaders"}update(t){const n=t*.001;this.earth.rotation.y=.1*n,this.control.update()}init(){super.init(),C(this,yn,cM).call(this),C(this,yn,uM).call(this),C(this,yn,hM).call(this),C(this,yn,lM).call(this),C(this,yn,dM).call(this),C(this,yn,fM).call(this)}},yn=new WeakSet,lM=function(){const t=new dc;t.setFromCartesianCoords(...this.sun.position),this.guiControl.add(t,"phi").min(0).max(Math.PI).step(.1).onChange(n=>{t.phi=n,C(this,yn,Ad).call(this,t)}),this.guiControl.add(t,"theta").min(0).max(2*Math.PI).step(.1).onChange(n=>{t.theta=n,C(this,yn,Ad).call(this,t)}),this.guiControl.addColor(this.earthParameters,"atmosphereDayColor").onChange(n=>{this.earthMaterial.uniforms.uAtmosphereDayColor.value.set(n),this.atmosphereMaterial.uniforms.uAtmosphereDayColor.value.set(n)}),this.guiControl.addColor(this.earthParameters,"atmosphereTwilightColor").onChange(n=>{this.earthMaterial.uniforms.uAtmosphereTwilightColor.value.set(n),this.atmosphereMaterial.uniforms.uAtmosphereTwilightColor.value.set(n)})},Ad=function(t){this.sun.position.setFromSpherical(t),this.sunDirection.set(...this.sun.position).normalize(),this.earthMaterial.uniforms.uSunDirection.value=this.sunDirection,this.atmosphereMaterial.uniforms.uSunDirection.value=this.sunDirection},cM=function(){this.sun=new ge(new zo(.1,2),new Mt({})),this.sun.position.set(0,0,10),this.scene.add(this.sun),this.sunDirection=new O(...this.sun.position).normalize()},hM=function(){this.atmosphereMaterial=new Nt({vertexShader:mL,fragmentShader:gL,side:vn,transparent:!0,uniforms:{uSunDirection:new Ie(this.sunDirection),uAtmosphereDayColor:new Ie(new xe(this.earthParameters.atmosphereDayColor)),uAtmosphereTwilightColor:new Ie(new xe(this.earthParameters.atmosphereTwilightColor))}}),this.atmosphere=new ge(this.earthGeometry,this.atmosphereMaterial),this.atmosphere.scale.set(1.04,1.04,1.04),this.scene.add(this.atmosphere)},uM=function(){const t=new Mn,n=Math.floor(this.renderer.capabilities.getMaxAnisotropy()/2),i=t.load(dL);i.colorSpace=nt,i.anisotropy=n;const s=t.load(fL);s.colorSpace=nt,s.anisotropy=n;const o=t.load(pL);o.anisotropy=n,this.earthGeometry=new ui(2,64,64),this.earthMaterial=new Nt({vertexShader:_L,fragmentShader:vL,uniforms:{uDayTexture:new Ie(i),uNightTexture:new Ie(s),uSpecularCloudTexture:new Ie(o),uSunDirection:new Ie(this.sunDirection),uAtmosphereDayColor:new Ie(new xe(this.earthParameters.atmosphereDayColor)),uAtmosphereTwilightColor:new Ie(new xe(this.earthParameters.atmosphereTwilightColor))}}),this.earth=new ge(this.earthGeometry,this.earthMaterial),this.scene.add(this.earth)},dM=function(){this.camera.fov=25,this.camera.position.set(12,6,4),this.camera.updateProjectionMatrix()},fM=function(){this.renderer.setClearColor("#000011")},Tg);var yL=`uniform sampler2D uPictureTexture;
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
}`,ML=`varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) {
        discard;
    }

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const wL="/three.js-journey/assets/picture-1-CcRZvoBz.png",SL="/three.js-journey/assets/glow-UcE5q2Bs.png";var Eo,Co,Jt,pM,mM,gM,_M,vM,xM,yM,MM,Ed,Ag;let bL=(Ag=class extends et{constructor(){super(...arguments);Re(this,Jt);V(this,"particles");V(this,"particleGeometry");V(this,"raycaster");V(this,"interactiveCanvas");V(this,"interactiveCanvasTexture");V(this,"interactiveCanvasContext");V(this,"interactiveCanvasImage");V(this,"interactiveCanvasPlane");V(this,"pointer",{x:null,y:null,prevX:null,prevY:null});V(this,"hasGuiTweaks",!1);V(this,"hasAnimation",!0);Re(this,Eo);Re(this,Co)}get number(){return"39"}get title(){return"Particles Cursor Animation"}get link(){return"https://threejs-journey.com/lessons/particles-cursor-animation-shader"}update(){if(this.control.update(),this.pointer.x&&this.pointer.y&&this.pointer.prevX&&this.pointer.prevY){this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObject(this.interactiveCanvasPlane);C(this,Jt,pM).call(this,t)}}init(){super.init(),this.raycaster=new E0,C(this,Jt,mM).call(this),C(this,Jt,gM).call(this),C(this,Jt,_M).call(this),C(this,Jt,vM).call(this),C(this,Jt,xM).call(this),C(this,Jt,yM).call(this)}dispose(){this.canvas.removeEventListener("pointermove",Ue(this,Eo)),this.canvas.removeEventListener("resize",Ue(this,Co)),super.dispose()}},Eo=new WeakMap,Co=new WeakMap,Jt=new WeakSet,pM=function(t){C(this,Jt,Ed).call(this),t.length&&C(this,Jt,MM).call(this,t[0].uv),this.interactiveCanvasTexture.needsUpdate=!0},mM=function(){this.interactiveCanvas=document.createElement("canvas"),this.interactiveCanvas.width=128,this.interactiveCanvas.height=128,this.interactiveCanvasTexture=new DE(this.interactiveCanvas),this.interactiveCanvasContext=this.interactiveCanvas.getContext("2d"),this.interactiveCanvasImage=new Image,this.interactiveCanvasImage.src=SL,this.interactiveCanvasPlane=new ge(new Rt(10,10,1,1),new Mt({side:_n})),this.interactiveCanvasPlane.visible=!1,C(this,Jt,Ed).call(this)},gM=function(){const n=new Mn().load(wL);this.particleGeometry=new Rt(this.interactiveCanvasPlane.geometry.parameters.width,this.interactiveCanvasPlane.geometry.parameters.height,128,128),this.particleGeometry.setIndex(null),this.particleGeometry.deleteAttribute("normal");const i=new Float32Array(this.particleGeometry.attributes.position.count),s=new Float32Array(this.particleGeometry.attributes.position.count);for(let o=0;o<i.length;o++)i[o]=Math.random(),s[o]=2*Math.PI*Math.random();this.particleGeometry.setAttribute("aDisplacementRandomFactor",new ot(i,1)),this.particleGeometry.setAttribute("aDisplacementRandomAngle",new ot(s,1)),this.particles=new Ms(this.particleGeometry,new Nt({vertexShader:yL,fragmentShader:ML,uniforms:{uPictureTexture:new Ie(n),uDisplacementTexture:new Ie(this.interactiveCanvasTexture),uResolution:new Ie(new ue(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio()))},blending:gs})),this.scene.add(this.particles)},_M=function(){this.camera.fov=35,this.camera.position.set(0,0,18),this.camera.updateProjectionMatrix()},vM=function(){this.renderer.setClearColor("#181818")},xM=function(){Ut(this,Eo,t=>{this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y,this.pointer.x=(t.offsetX/this.canvas.width-.5)*2,this.pointer.y=-((t.offsetY/this.canvas.height-.5)*2)}),this.canvas.addEventListener("pointermove",Ue(this,Eo))},yM=function(){Ut(this,Co,()=>{this.particles.material.uniforms.uResolution.value.set(this.canvas.width*this.renderer.getPixelRatio(),this.canvas.height*this.renderer.getPixelRatio())}),this.canvas.addEventListener("resize",Ue(this,Co))},MM=function(t){const n=t.x*this.interactiveCanvas.width,i=(1-t.y)*this.interactiveCanvas.height,s=.15*this.interactiveCanvas.width;let o=Math.hypot(this.pointer.x-this.pointer.prevX,this.pointer.y-this.pointer.prevY)*500;o=Math.min(1,o),this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y,this.interactiveCanvasContext.save(),this.interactiveCanvasContext.globalCompositeOperation="lighten",this.interactiveCanvasContext.globalAlpha=o,this.interactiveCanvasContext.drawImage(this.interactiveCanvasImage,n-s/2,i-s/2,s,s),this.interactiveCanvasContext.restore()},Ed=function(){this.interactiveCanvasContext.save(),this.interactiveCanvasContext.globalAlpha=.02,this.interactiveCanvasContext.fillRect(0,0,this.interactiveCanvas.width,this.interactiveCanvas.height),this.interactiveCanvasContext.restore()},Ag);var TL=`uniform float uProgress;
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
}`,AL=`varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float alpha            = (0.05 / distanceToCenter) - 0.1;

    gl_FragColor = vec4(vColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const EL="/three.js-journey/assets/models-Bt460700.glb";var Po,Ft,wM,SM,bM,Cd,TM,AM,EM,CM,Pd,Rd,Eg;let CL=(Eg=class extends et{constructor(){super(...arguments);Re(this,Ft);V(this,"mesh");V(this,"currentMeshIndex",0);V(this,"meshPositions",[]);V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0);V(this,"rendererParams",{clearColor:"#160920"});Re(this,Po)}get number(){return"40"}get title(){return"Particles Morphing"}get link(){return"https://threejs-journey.com/lessons/particles-morphing-shader"}update(){this.control.update()}init(){super.init(),C(this,Ft,TM).call(this),C(this,Ft,SM).call(this),C(this,Ft,AM).call(this),C(this,Ft,EM).call(this),C(this,Ft,wM).call(this),C(this,Ft,CM).call(this)}dispose(){this.canvas.removeEventListener("resize",Ue(this,Po)),super.dispose()}},Po=new WeakMap,Ft=new WeakSet,wM=function(){this.guiControl.addColor({clearColor:this.rendererParams.clearColor},"clearColor").onChange(n=>{this.renderer.setClearColor(n)}),this.guiControl.add(this.mesh.material.uniforms.uProgress,"value").min(0).max(1).step(.001).name("uProgress").listen(),this.guiControl.addColor({uWarmColor:this.mesh.material.uniforms.uWarmColor.value.getHexString()},"uWarmColor").onChange(n=>{this.mesh.material.uniforms.uWarmColor.value.set(n)}),this.guiControl.addColor({uCoolColor:this.mesh.material.uniforms.uCoolColor.value.getHexString()},"uCoolColor").onChange(n=>{this.mesh.material.uniforms.uCoolColor.value.set(n)});const t=n=>{C(this,Ft,Cd).call(this,n),Er.fromTo(this.mesh.material.uniforms.uProgress,{value:0},{value:1,ease:"linear",duration:3,onComplete:()=>{this.currentMeshIndex=n}})};this.guiControl.add({morphToFirstMesh:()=>{t(0)}},"morphToFirstMesh"),this.guiControl.add({morphToSecondMesh:()=>{t(1)}},"morphToSecondMesh"),this.guiControl.add({morphToThirdMesh:()=>{t(2)}},"morphToThirdMesh"),this.guiControl.add({morphToFourthMesh:()=>{t(3)}},"morphToFourthMesh")},SM=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load(EL,i=>{const s=i.scene.children.map(o=>o.geometry);C(this,Ft,bM).call(this,s),C(this,Ft,Cd).call(this,1)})},bM=function(t){const n=t.reduce((s,o)=>Math.max(s,o.attributes.position.count),0);for(const s of t){const o=s.attributes.position,a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=l*3;if(l<o.count)a[c+0]=o.array[c+0],a[c+1]=o.array[c+1],a[c+2]=o.array[c+2];else{const h=Math.floor((o.count-1)*Math.random())*3;a[c+0]=o.array[h+0],a[c+1]=o.array[h+1],a[c+2]=o.array[h+2]}}this.meshPositions.push(new ot(a,3))}const i=new Float32Array(n*1);for(let s=0;s<i.length;s++)i[s]=Math.random();this.mesh.geometry.setAttribute("aSize",new ot(i,1))},Cd=function(t){this.mesh.geometry.setAttribute("position",this.meshPositions[this.currentMeshIndex]),this.mesh.geometry.setAttribute("aTargetPosition",this.meshPositions[t])},TM=function(){const t=new ct,n=new Nt({vertexShader:TL,fragmentShader:AL,uniforms:{uSize:new Ie(.4),uResolution:new Ie(new ue(C(this,Ft,Pd).call(this),C(this,Ft,Rd).call(this))),uProgress:new Ie(0),uWarmColor:new Ie(new xe("#ff7300")),uCoolColor:new Ie(new xe("#0091ff"))},blending:gs,depthWrite:!1});this.mesh=new Ms(t,n),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)},AM=function(){this.camera.fov=35,this.camera.position.set(0,0,16),this.camera.updateProjectionMatrix()},EM=function(){this.renderer.setClearColor(this.rendererParams.clearColor)},CM=function(){Ut(this,Po,()=>{this.mesh.material.uniforms.uResolution.value.set(C(this,Ft,Pd).call(this),C(this,Ft,Rd).call(this))}),this.canvas.addEventListener("resize",Ue(this,Po))},Pd=function(){return this.canvas.width*this.renderer.getPixelRatio()},Rd=function(){return this.canvas.height*this.renderer.getPixelRatio()},Eg);const PL=new Ka(-1,1,1,-1,0,1);class RL extends ct{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const LL=new RL;class IL{constructor(e){this._mesh=new ge(LL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class DL{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let i=An;const s={passThruTexture:{value:null}},o=c(u(),s),a=new IL(o);this.setDataType=function(d){return i=d,this},this.addVariable=function(d,f,g){const v=this.createShaderMaterial(f),p={name:d,initialValueTexture:g,material:v,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:zt,magFilter:zt};return this.variables.push(p),p},this.setVariableDependencies=function(d,f){d.dependencies=f},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const f=this.variables[d];f.renderTargets[0]=this.createRenderTarget(e,t,f.wrapS,f.wrapT,f.minFilter,f.magFilter),f.renderTargets[1]=this.createRenderTarget(e,t,f.wrapS,f.wrapT,f.minFilter,f.magFilter),this.renderTexture(f.initialValueTexture,f.renderTargets[0]),this.renderTexture(f.initialValueTexture,f.renderTargets[1]);const g=f.material,v=g.uniforms;if(f.dependencies!==null)for(let p=0;p<f.dependencies.length;p++){const m=f.dependencies[p];if(m.name!==f.name){let y=!1;for(let x=0;x<this.variables.length;x++)if(m.name===this.variables[x].name){y=!0;break}if(!y)return"Variable dependency not found. Variable="+f.name+", dependency="+m.name}v[m.name]={value:null},g.fragmentShader=`
uniform sampler2D `+m.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,f=this.currentTextureIndex===0?1:0;for(let g=0,v=this.variables.length;g<v;g++){const p=this.variables[g];if(p.dependencies!==null){const m=p.material.uniforms;for(let y=0,x=p.dependencies.length;y<x;y++){const w=p.dependencies[y];m[w.name].value=w.renderTargets[d].texture}}this.doRenderTarget(p.material,p.renderTargets[f])}this.currentTextureIndex=f},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const d=this.variables;for(let f=0;f<d.length;f++){const g=d[f];g.initialValueTexture&&g.initialValueTexture.dispose();const v=g.renderTargets;for(let p=0;p<v.length;p++)v[p].dispose()}};function l(d){d.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,f){f=f||{};const g=new Nt({name:"GPUComputationShader",uniforms:f,vertexShader:h(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,f,g,v,p,m){return d=d||e,f=f||t,g=g||_i,v=v||_i,p=p||zt,m=m||zt,new Gs(d,f,{wrapS:g,wrapT:v,minFilter:p,magFilter:m,format:zn,type:i,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(e*t*4),f=new Rc(d,e,t,zn,An);return f.needsUpdate=!0,f},this.renderTexture=function(d,f){s.passThruTexture.value=d,this.doRenderTarget(o,f),s.passThruTexture.value=null},this.doRenderTarget=function(d,f){const g=n.getRenderTarget(),v=n.xr.enabled,p=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,a.material=d,n.setRenderTarget(f),a.render(n),a.material=o,n.xr.enabled=v,n.shadowMap.autoUpdate=p,n.setRenderTarget(g)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function u(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}var NL=`uniform float     uTime;
uniform float     uDeltaTime;
uniform float     uStrengthFactor;
uniform float     uFlowStrength;
uniform float     uFlowFrequency;
uniform sampler2D uBasePositionTexture;

vec4 _permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float _permute(float x) {
    return floor(mod(((x * 34.0) + 1.0) * x, 289.0));
}

vec4 _taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float _taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 _grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w   = 1.5 - dot(abs(p.xyz), ones.xyz);
    s     = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;

    return p;
}

float calcSimplexNoise4d(vec4 v){
    const vec2  C = vec2( 0.138196601125010504,  
    0.309016994374947451); 
    
    vec4 i  = floor(v + dot(v, C.yyyy) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    

    
    vec4 i0;

    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;

    
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;

    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    
    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

    
    i = mod(i, 289.0);
    float j0 = _permute( _permute( _permute( _permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = _permute( _permute( _permute( _permute (
                                             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                                         + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                       + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    
    
    

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = _grad4(j0,   ip);
    vec4 p1 = _grad4(j1.x, ip);
    vec4 p2 = _grad4(j1.y, ip);
    vec4 p3 = _grad4(j1.z, ip);
    vec4 p4 = _grad4(j1.w, ip);

    
    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= _taylorInvSqrt(dot(p4,p4));

    
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

void main() {
    float time         = uTime * 0.2;
    vec2  uv           = gl_FragCoord.xy / resolution.xy;
    vec4  particle     = texture(uParticle, uv);
    vec4  basePosition = texture(uBasePositionTexture, uv);

    if (particle.a >= 1.0) {
        particle = basePosition;
    }
    else {
        float strength = calcSimplexNoise4d(
            vec4(particle.xyz * 0.2, time + 1.0)
        );
        strength = smoothstep(
            (uStrengthFactor - 0.5) * 2.0 * -1.0,
            1.0,
            strength
        );
        vec3 flowField = vec3(
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 0.0), time)
            ),
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 1.0), time)
            ),
            calcSimplexNoise4d(
                vec4((particle.xyz * uFlowFrequency + 2.0), time)
            )
        );
        flowField     = normalize(flowField);
        particle.xyz += flowField * uFlowStrength * uDeltaTime * strength;

        particle.a += 0.3 * uDeltaTime;
    }

    gl_FragColor  = particle;
}`,Zo,PM,RM;class FL{constructor(e,t){Re(this,Zo);V(this,"particles");V(this,"renderer");V(this,"baseTexture");V(this,"particleVariable");this.particles=e;const n=Math.ceil(Math.sqrt(e.count));C(this,Zo,PM).call(this,n,n,t)}getRendererTexture(){return this.renderer.getCurrentRenderTarget(this.particleVariable).texture}addDebugPlaneToScene(e){const t=new ge(new Rt(3,3),new Mt({map:this.getRendererTexture()}));t.position.x=3,e.add(t)}}Zo=new WeakSet,PM=function(e,t,n){this.renderer=new DL(e,t,n),C(this,Zo,RM).call(this),this.particleVariable=this.renderer.addVariable("uParticle",NL,this.baseTexture),this.renderer.setVariableDependencies(this.particleVariable,[this.particleVariable]),this.renderer.init()},RM=function(){this.baseTexture=this.renderer.createTexture();for(let e=0;e<this.particles.count;e++){const t=e*3,n=e*4;this.baseTexture.image.data[n+0]=this.particles.array[t+0],this.baseTexture.image.data[n+1]=this.particles.array[t+1],this.baseTexture.image.data[n+2]=this.particles.array[t+2],this.baseTexture.image.data[n+3]=Math.random()}};var UL=`uniform vec2      uResolution;
uniform float     uSize;
uniform sampler2D uPositionTexture;

attribute vec2 aUv;
attribute vec3 aColor;
attribute float aSize;

varying vec3 vColor;

void main() {
    vec4 particle = texture(uPositionTexture, aUv);

    vec4 modelPosition      = modelMatrix      * vec4(particle.xyz, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    float sizeIn  = smoothstep(0.0, 0.1, particle.a);
    float sizeOut = 1.0 - smoothstep(0.7, 1.0, particle.a);
    float size    = min(sizeIn, sizeOut);

    gl_Position   = projectionPosition;
    gl_PointSize  = size * aSize * uSize * uResolution.y;
    gl_PointSize *= (-1.0 / viewPosition.z);

    vColor = aColor;
}`,OL=`varying vec3 vColor;

void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) {
        discard;
    }

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;const BL="/three.js-journey/assets/model-1AEEyafl.glb";var Ro,kt,LM,IM,DM,NM,FM,UM,OM,BM,Ld,Id,Cg;let zL=(Cg=class extends et{constructor(){super(...arguments);Re(this,kt);V(this,"model");V(this,"mesh");V(this,"timer");V(this,"gpuComputation",null);V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0);V(this,"rendererParams",{clearColor:"#29191f"});Re(this,Ro)}get number(){return"41"}get title(){return"GPGPU Flow Field Particles"}get link(){return"https://threejs-journey.com/lessons/gpgpu-flow-field-particles-shaders"}update(t){this.timer.update(t),this.control.update(),this.gpuComputation&&(this.gpuComputation.particleVariable.material.uniforms.uTime.value=this.timer.getElapsed(),this.gpuComputation.particleVariable.material.uniforms.uDeltaTime.value=this.timer.getDelta(),this.gpuComputation.renderer.compute(),this.mesh.material.uniforms.uPositionTexture.value=this.gpuComputation.getRendererTexture())}init(){super.init(),this.timer=new sa,C(this,kt,LM).call(this),C(this,kt,UM).call(this),C(this,kt,OM).call(this)}dispose(){this.canvas.removeEventListener("resize",Ue(this,Ro)),this.timer.dispose(),super.dispose()}},Ro=new WeakMap,kt=new WeakSet,LM=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n),t.load(BL,i=>{this.model=i.scene.children[0],C(this,kt,DM).call(this),C(this,kt,NM).call(this),C(this,kt,IM).call(this),C(this,kt,BM).call(this)})},IM=function(){this.guiControl.addColor(this.rendererParams,"clearColor").onChange(t=>{this.renderer.setClearColor(t)}),this.guiControl.add(this.mesh.material.uniforms.uSize,"value").min(0).max(1).step(.001).name("uSize"),this.guiControl.add(this.gpuComputation.particleVariable.material.uniforms.uStrengthFactor,"value").min(0).max(1).step(.01).name("uStrength"),this.guiControl.add(this.gpuComputation.particleVariable.material.uniforms.uFlowStrength,"value").min(0).max(10).step(.001).name("uFlowStrength"),this.guiControl.add(this.gpuComputation.particleVariable.material.uniforms.uFlowFrequency,"value").min(0).max(1).step(.001).name("uFlowFrequency")},DM=function(){this.gpuComputation=new FL(this.model.geometry.attributes.position,this.renderer),this.gpuComputation.particleVariable.material.uniforms.uTime=new Ie(0),this.gpuComputation.particleVariable.material.uniforms.uDeltaTime=new Ie(0),this.gpuComputation.particleVariable.material.uniforms.uStrengthFactor=new Ie(.5),this.gpuComputation.particleVariable.material.uniforms.uFlowStrength=new Ie(2),this.gpuComputation.particleVariable.material.uniforms.uFlowFrequency=new Ie(.5),this.gpuComputation.particleVariable.material.uniforms.uBasePositionTexture=new Ie(this.gpuComputation.baseTexture)},NM=function(){const t=new ct;t.setDrawRange(0,this.gpuComputation.particles.count),this.mesh=new Ms(t,new Nt({vertexShader:UL,fragmentShader:OL,uniforms:{uSize:new Ie(.07),uResolution:new Ie(new ue(C(this,kt,Ld).call(this),C(this,kt,Id).call(this))),uPositionTexture:new Ie(this.gpuComputation.getRendererTexture())}})),C(this,kt,FM).call(this),this.scene.add(this.mesh)},FM=function(){const t=new Float32Array(this.gpuComputation.particles.count*2),n=new Float32Array(this.gpuComputation.particles.count*1),i=this.gpuComputation.getRendererTexture();for(let s=0;s<i.image.height;s++)for(let o=0;o<i.image.width;o++){const a=s*i.image.width+o,l=a*2,c=(o+.5)/i.image.width,h=(s+.5)/i.image.height;t[l+0]=c,t[l+1]=h,n[a]=Math.random()}this.mesh.geometry.setAttribute("aUv",new ot(t,2)),this.mesh.geometry.setAttribute("aColor",this.model.geometry.attributes.color),this.mesh.geometry.setAttribute("aSize",new ot(n,1))},UM=function(){this.camera.fov=35,this.camera.position.set(4.5,4,11),this.camera.updateProjectionMatrix()},OM=function(){this.renderer.setClearColor(this.rendererParams.clearColor)},BM=function(){Ut(this,Ro,()=>{this.mesh.material.uniforms.uResolution.value.set(C(this,kt,Ld).call(this),C(this,kt,Id).call(this))}),this.canvas.addEventListener("resize",Ue(this,Ro))},Ld=function(){return this.canvas.width*this.renderer.getPixelRatio()},Id=function(){return this.canvas.height*this.renderer.getPixelRatio()},Cg);function Bc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Ol(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zM={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function o(c,h){if(!i[c]){if(!n[c]){var u=typeof Ol=="function"&&Ol;if(!h&&u)return u(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}h=i[c]={exports:{}},n[c][0].call(h.exports,function(d){var f=n[c][1][d];return o(f||d)},h,h.exports,t,n,i,s)}return i[c].exports}for(var a=typeof Ol=="function"&&Ol,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){var g=t("crypto");function v(b,T){T=y(b,T);var M;return(M=T.algorithm!=="passthrough"?g.createHash(T.algorithm):new E).write===void 0&&(M.write=M.update,M.end=M.update),w(T,M).dispatch(b),M.update||M.end(""),M.digest?M.digest(T.encoding==="buffer"?void 0:T.encoding):(b=M.read(),T.encoding!=="buffer"?b.toString(T.encoding):b)}(i=n.exports=v).sha1=function(b){return v(b)},i.keys=function(b){return v(b,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(b){return v(b,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(b){return v(b,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=g.getHashes?g.getHashes().slice():["sha1","md5"],m=(p.push("passthrough"),["buffer","hex","binary","base64"]);function y(b,T){var M={};if(M.algorithm=(T=T||{}).algorithm||"sha1",M.encoding=T.encoding||"hex",M.excludeValues=!!T.excludeValues,M.algorithm=M.algorithm.toLowerCase(),M.encoding=M.encoding.toLowerCase(),M.ignoreUnknown=T.ignoreUnknown===!0,M.respectType=T.respectType!==!1,M.respectFunctionNames=T.respectFunctionNames!==!1,M.respectFunctionProperties=T.respectFunctionProperties!==!1,M.unorderedArrays=T.unorderedArrays===!0,M.unorderedSets=T.unorderedSets!==!1,M.unorderedObjects=T.unorderedObjects!==!1,M.replacer=T.replacer||void 0,M.excludeKeys=T.excludeKeys||void 0,b===void 0)throw new Error("Object argument required.");for(var A=0;A<p.length;++A)p[A].toLowerCase()===M.algorithm.toLowerCase()&&(M.algorithm=p[A]);if(p.indexOf(M.algorithm)===-1)throw new Error('Algorithm "'+M.algorithm+'"  not supported. supported values: '+p.join(", "));if(m.indexOf(M.encoding)===-1&&M.algorithm!=="passthrough")throw new Error('Encoding "'+M.encoding+'"  not supported. supported values: '+m.join(", "));return M}function x(b){if(typeof b=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(b))!=null}function w(b,T,M){M=M||[];function A(_){return T.update?T.update(_,"utf8"):T.write(_,"utf8")}return{dispatch:function(_){return this["_"+((_=b.replacer?b.replacer(_):_)===null?"null":typeof _)](_)},_object:function(_){var S,I=Object.prototype.toString.call(_),z=/\[object (.*)\]/i.exec(I);if(z=(z=z?z[1]:"unknown:["+I+"]").toLowerCase(),0<=(I=M.indexOf(_)))return this.dispatch("[CIRCULAR:"+I+"]");if(M.push(_),a!==void 0&&a.isBuffer&&a.isBuffer(_))return A("buffer:"),A(_);if(z==="object"||z==="function"||z==="asyncfunction")return I=Object.keys(_),b.unorderedObjects&&(I=I.sort()),b.respectType===!1||x(_)||I.splice(0,0,"prototype","__proto__","constructor"),b.excludeKeys&&(I=I.filter(function(B){return!b.excludeKeys(B)})),A("object:"+I.length+":"),S=this,I.forEach(function(B){S.dispatch(B),A(":"),b.excludeValues||S.dispatch(_[B]),A(",")});if(!this["_"+z]){if(b.ignoreUnknown)return A("["+z+"]");throw new Error('Unknown object type "'+z+'"')}this["_"+z](_)},_array:function(_,B){B=B!==void 0?B:b.unorderedArrays!==!1;var I=this;if(A("array:"+_.length+":"),!B||_.length<=1)return _.forEach(function(G){return I.dispatch(G)});var z=[],B=_.map(function(G){var U=new E,$=M.slice();return w(b,U,$).dispatch(G),z=z.concat($.slice(M.length)),U.read().toString()});return M=M.concat(z),B.sort(),this._array(B,!1)},_date:function(_){return A("date:"+_.toJSON())},_symbol:function(_){return A("symbol:"+_.toString())},_error:function(_){return A("error:"+_.toString())},_boolean:function(_){return A("bool:"+_.toString())},_string:function(_){A("string:"+_.length+":"),A(_.toString())},_function:function(_){A("fn:"),x(_)?this.dispatch("[native]"):this.dispatch(_.toString()),b.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(_.name)),b.respectFunctionProperties&&this._object(_)},_number:function(_){return A("number:"+_.toString())},_xml:function(_){return A("xml:"+_.toString())},_null:function(){return A("Null")},_undefined:function(){return A("Undefined")},_regexp:function(_){return A("regex:"+_.toString())},_uint8array:function(_){return A("uint8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint8clampedarray:function(_){return A("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(_))},_int8array:function(_){return A("int8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint16array:function(_){return A("uint16array:"),this.dispatch(Array.prototype.slice.call(_))},_int16array:function(_){return A("int16array:"),this.dispatch(Array.prototype.slice.call(_))},_uint32array:function(_){return A("uint32array:"),this.dispatch(Array.prototype.slice.call(_))},_int32array:function(_){return A("int32array:"),this.dispatch(Array.prototype.slice.call(_))},_float32array:function(_){return A("float32array:"),this.dispatch(Array.prototype.slice.call(_))},_float64array:function(_){return A("float64array:"),this.dispatch(Array.prototype.slice.call(_))},_arraybuffer:function(_){return A("arraybuffer:"),this.dispatch(new Uint8Array(_))},_url:function(_){return A("url:"+_.toString())},_map:function(_){return A("map:"),_=Array.from(_),this._array(_,b.unorderedSets!==!1)},_set:function(_){return A("set:"),_=Array.from(_),this._array(_,b.unorderedSets!==!1)},_file:function(_){return A("file:"),this.dispatch([_.name,_.size,_.type,_.lastModfied])},_blob:function(){if(b.ignoreUnknown)return A("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return A("domwindow")},_bigint:function(_){return A("bigint:"+_.toString())},_process:function(){return A("process")},_timer:function(){return A("timer")},_pipe:function(){return A("pipe")},_tcp:function(){return A("tcp")},_udp:function(){return A("udp")},_tty:function(){return A("tty")},_statwatcher:function(){return A("statwatcher")},_securecontext:function(){return A("securecontext")},_connection:function(){return A("connection")},_zlib:function(){return A("zlib")},_context:function(){return A("context")},_nodescript:function(){return A("nodescript")},_httpparser:function(){return A("httpparser")},_dataview:function(){return A("dataview")},_signal:function(){return A("signal")},_fsevent:function(){return A("fsevent")},_tlswrap:function(){return A("tlswrap")}}}function E(){return{buf:"",write:function(b){this.buf+=b},end:function(b){this.buf+=b},read:function(){return this.buf}}}i.writeToStream=function(b,T,M){return M===void 0&&(M=T,T={}),w(T=y(b,T),M).dispatch(b)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){(function(g){var v=typeof Uint8Array<"u"?Uint8Array:Array,p=43,m=47,y=48,x=97,w=65,E=45,b=95;function T(M){return M=M.charCodeAt(0),M===p||M===E?62:M===m||M===b?63:M<y?-1:M<y+10?M-y+26+26:M<w+26?M-w:M<x+26?M-x+26:void 0}g.toByteArray=function(M){var A,_;if(0<M.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var S=M.length,S=M.charAt(S-2)==="="?2:M.charAt(S-1)==="="?1:0,I=new v(3*M.length/4-S),z=0<S?M.length-4:M.length,B=0;function G(U){I[B++]=U}for(A=0;A<z;A+=4,0)G((16711680&(_=T(M.charAt(A))<<18|T(M.charAt(A+1))<<12|T(M.charAt(A+2))<<6|T(M.charAt(A+3))))>>16),G((65280&_)>>8),G(255&_);return S==2?G(255&(_=T(M.charAt(A))<<2|T(M.charAt(A+1))>>4)):S==1&&(G((_=T(M.charAt(A))<<10|T(M.charAt(A+1))<<4|T(M.charAt(A+2))>>2)>>8&255),G(255&_)),I},g.fromByteArray=function(M){var A,_,S,I,z=M.length%3,B="";function G(U){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(U)}for(A=0,S=M.length-z;A<S;A+=3)_=(M[A]<<16)+(M[A+1]<<8)+M[A+2],B+=G((I=_)>>18&63)+G(I>>12&63)+G(I>>6&63)+G(63&I);switch(z){case 1:B=(B+=G((_=M[M.length-1])>>2))+G(_<<4&63)+"==";break;case 2:B=(B=(B+=G((_=(M[M.length-2]<<8)+M[M.length-1])>>10))+G(_>>4&63))+G(_<<2&63)+"="}return B}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(s,o,p,l,c,h,u,d,f){var g=t("base64-js"),v=t("ieee754");function p(R,F,k){if(!(this instanceof p))return new p(R,F,k);var H,L,K,se,oe=typeof R;if(F==="base64"&&oe=="string")for(R=(se=R).trim?se.trim():se.replace(/^\s+|\s+$/g,"");R.length%4!=0;)R+="=";if(oe=="number")H=Y(R);else if(oe=="string")H=p.byteLength(R,F);else{if(oe!="object")throw new Error("First argument needs to be a number, array or string.");H=Y(R.length)}if(p._useTypedArrays?L=p._augment(new Uint8Array(H)):((L=this).length=H,L._isBuffer=!0),p._useTypedArrays&&typeof R.byteLength=="number")L._set(R);else if(ae(se=R)||p.isBuffer(se)||se&&typeof se=="object"&&typeof se.length=="number")for(K=0;K<H;K++)p.isBuffer(R)?L[K]=R.readUInt8(K):L[K]=R[K];else if(oe=="string")L.write(R,0,F);else if(oe=="number"&&!p._useTypedArrays&&!k)for(K=0;K<H;K++)L[K]=0;return L}function m(R,F,k,H){return p._charsWritten=ke(function(L){for(var K=[],se=0;se<L.length;se++)K.push(255&L.charCodeAt(se));return K}(F),R,k,H)}function y(R,F,k,H){return p._charsWritten=ke(function(L){for(var K,se,oe=[],de=0;de<L.length;de++)se=L.charCodeAt(de),K=se>>8,se=se%256,oe.push(se),oe.push(K);return oe}(F),R,k,H)}function x(R,F,k){var H="";k=Math.min(R.length,k);for(var L=F;L<k;L++)H+=String.fromCharCode(R[L]);return H}function w(R,F,k,K){K||(ne(typeof k=="boolean","missing or invalid endian"),ne(F!=null,"missing offset"),ne(F+1<R.length,"Trying to read beyond buffer length"));var L,K=R.length;if(!(K<=F))return k?(L=R[F],F+1<K&&(L|=R[F+1]<<8)):(L=R[F]<<8,F+1<K&&(L|=R[F+1])),L}function E(R,F,k,K){K||(ne(typeof k=="boolean","missing or invalid endian"),ne(F!=null,"missing offset"),ne(F+3<R.length,"Trying to read beyond buffer length"));var L,K=R.length;if(!(K<=F))return k?(F+2<K&&(L=R[F+2]<<16),F+1<K&&(L|=R[F+1]<<8),L|=R[F],F+3<K&&(L+=R[F+3]<<24>>>0)):(F+1<K&&(L=R[F+1]<<16),F+2<K&&(L|=R[F+2]<<8),F+3<K&&(L|=R[F+3]),L+=R[F]<<24>>>0),L}function b(R,F,k,H){if(H||(ne(typeof k=="boolean","missing or invalid endian"),ne(F!=null,"missing offset"),ne(F+1<R.length,"Trying to read beyond buffer length")),!(R.length<=F))return H=w(R,F,k,!0),32768&H?-1*(65535-H+1):H}function T(R,F,k,H){if(H||(ne(typeof k=="boolean","missing or invalid endian"),ne(F!=null,"missing offset"),ne(F+3<R.length,"Trying to read beyond buffer length")),!(R.length<=F))return H=E(R,F,k,!0),2147483648&H?-1*(4294967295-H+1):H}function M(R,F,k,H){return H||(ne(typeof k=="boolean","missing or invalid endian"),ne(F+3<R.length,"Trying to read beyond buffer length")),v.read(R,F,k,23,4)}function A(R,F,k,H){return H||(ne(typeof k=="boolean","missing or invalid endian"),ne(F+7<R.length,"Trying to read beyond buffer length")),v.read(R,F,k,52,8)}function _(R,F,k,H,L){if(L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+1<R.length,"trying to write beyond buffer length"),he(F,65535)),L=R.length,!(L<=k))for(var K=0,se=Math.min(L-k,2);K<se;K++)R[k+K]=(F&255<<8*(H?K:1-K))>>>8*(H?K:1-K)}function S(R,F,k,H,L){if(L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+3<R.length,"trying to write beyond buffer length"),he(F,4294967295)),L=R.length,!(L<=k))for(var K=0,se=Math.min(L-k,4);K<se;K++)R[k+K]=F>>>8*(H?K:3-K)&255}function I(R,F,k,H,L){L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+1<R.length,"Trying to write beyond buffer length"),be(F,32767,-32768)),R.length<=k||_(R,0<=F?F:65535+F+1,k,H,L)}function z(R,F,k,H,L){L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+3<R.length,"Trying to write beyond buffer length"),be(F,2147483647,-2147483648)),R.length<=k||S(R,0<=F?F:4294967295+F+1,k,H,L)}function B(R,F,k,H,L){L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+3<R.length,"Trying to write beyond buffer length"),ve(F,34028234663852886e22,-34028234663852886e22)),R.length<=k||v.write(R,F,k,H,23,4)}function G(R,F,k,H,L){L||(ne(F!=null,"missing value"),ne(typeof H=="boolean","missing or invalid endian"),ne(k!=null,"missing offset"),ne(k+7<R.length,"Trying to write beyond buffer length"),ve(F,17976931348623157e292,-17976931348623157e292)),R.length<=k||v.write(R,F,k,H,52,8)}i.Buffer=p,i.SlowBuffer=p,i.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var R=new ArrayBuffer(0),F=new Uint8Array(R);return F.foo=function(){return 42},F.foo()===42&&typeof F.subarray=="function"}catch{return!1}}(),p.isEncoding=function(R){switch(String(R).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(R){return!(R==null||!R._isBuffer)},p.byteLength=function(R,F){var k;switch(R+="",F||"utf8"){case"hex":k=R.length/2;break;case"utf8":case"utf-8":k=pe(R).length;break;case"ascii":case"binary":case"raw":k=R.length;break;case"base64":k=Oe(R).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":k=2*R.length;break;default:throw new Error("Unknown encoding")}return k},p.concat=function(R,F){if(ne(ae(R),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),R.length===0)return new p(0);if(R.length===1)return R[0];if(typeof F!="number")for(L=F=0;L<R.length;L++)F+=R[L].length;for(var k=new p(F),H=0,L=0;L<R.length;L++){var K=R[L];K.copy(k,H),H+=K.length}return k},p.prototype.write=function(R,F,k,H){isFinite(F)?isFinite(k)||(H=k,k=void 0):(de=H,H=F,F=k,k=de),F=Number(F)||0;var L,K,se,oe,de=this.length-F;switch((!k||de<(k=Number(k)))&&(k=de),H=String(H||"utf8").toLowerCase()){case"hex":L=function(Te,_e,N,P){N=Number(N)||0;var X=Te.length-N;(!P||X<(P=Number(P)))&&(P=X),ne((X=_e.length)%2==0,"Invalid hex string"),X/2<P&&(P=X/2);for(var te=0;te<P;te++){var le=parseInt(_e.substr(2*te,2),16);ne(!isNaN(le),"Invalid hex string"),Te[N+te]=le}return p._charsWritten=2*te,te}(this,R,F,k);break;case"utf8":case"utf-8":K=this,se=F,oe=k,L=p._charsWritten=ke(pe(R),K,se,oe);break;case"ascii":case"binary":L=m(this,R,F,k);break;case"base64":K=this,se=F,oe=k,L=p._charsWritten=ke(Oe(R),K,se,oe);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=y(this,R,F,k);break;default:throw new Error("Unknown encoding")}return L},p.prototype.toString=function(R,F,k){var H,L,K,se,oe=this;if(R=String(R||"utf8").toLowerCase(),F=Number(F)||0,(k=k!==void 0?Number(k):oe.length)===F)return"";switch(R){case"hex":H=function(de,Te,_e){var N=de.length;(!Te||Te<0)&&(Te=0),(!_e||_e<0||N<_e)&&(_e=N);for(var P="",X=Te;X<_e;X++)P+=ie(de[X]);return P}(oe,F,k);break;case"utf8":case"utf-8":H=function(de,Te,_e){var N="",P="";_e=Math.min(de.length,_e);for(var X=Te;X<_e;X++)de[X]<=127?(N+=Q(P)+String.fromCharCode(de[X]),P=""):P+="%"+de[X].toString(16);return N+Q(P)}(oe,F,k);break;case"ascii":case"binary":H=x(oe,F,k);break;case"base64":L=oe,se=k,H=(K=F)===0&&se===L.length?g.fromByteArray(L):g.fromByteArray(L.slice(K,se));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":H=function(de,Te,_e){for(var N=de.slice(Te,_e),P="",X=0;X<N.length;X+=2)P+=String.fromCharCode(N[X]+256*N[X+1]);return P}(oe,F,k);break;default:throw new Error("Unknown encoding")}return H},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(R,F,k,H){if(F=F||0,(H=H||H===0?H:this.length)!==(k=k||0)&&R.length!==0&&this.length!==0){ne(k<=H,"sourceEnd < sourceStart"),ne(0<=F&&F<R.length,"targetStart out of bounds"),ne(0<=k&&k<this.length,"sourceStart out of bounds"),ne(0<=H&&H<=this.length,"sourceEnd out of bounds"),H>this.length&&(H=this.length);var L=(H=R.length-F<H-k?R.length-F+k:H)-k;if(L<100||!p._useTypedArrays)for(var K=0;K<L;K++)R[K+F]=this[K+k];else R._set(this.subarray(k,k+L),F)}},p.prototype.slice=function(R,F){var k=this.length;if(R=$(R,k,0),F=$(F,k,k),p._useTypedArrays)return p._augment(this.subarray(R,F));for(var H=F-R,L=new p(H,void 0,!0),K=0;K<H;K++)L[K]=this[K+R];return L},p.prototype.get=function(R){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(R)},p.prototype.set=function(R,F){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(R,F)},p.prototype.readUInt8=function(R,F){if(F||(ne(R!=null,"missing offset"),ne(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return this[R]},p.prototype.readUInt16LE=function(R,F){return w(this,R,!0,F)},p.prototype.readUInt16BE=function(R,F){return w(this,R,!1,F)},p.prototype.readUInt32LE=function(R,F){return E(this,R,!0,F)},p.prototype.readUInt32BE=function(R,F){return E(this,R,!1,F)},p.prototype.readInt8=function(R,F){if(F||(ne(R!=null,"missing offset"),ne(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return 128&this[R]?-1*(255-this[R]+1):this[R]},p.prototype.readInt16LE=function(R,F){return b(this,R,!0,F)},p.prototype.readInt16BE=function(R,F){return b(this,R,!1,F)},p.prototype.readInt32LE=function(R,F){return T(this,R,!0,F)},p.prototype.readInt32BE=function(R,F){return T(this,R,!1,F)},p.prototype.readFloatLE=function(R,F){return M(this,R,!0,F)},p.prototype.readFloatBE=function(R,F){return M(this,R,!1,F)},p.prototype.readDoubleLE=function(R,F){return A(this,R,!0,F)},p.prototype.readDoubleBE=function(R,F){return A(this,R,!1,F)},p.prototype.writeUInt8=function(R,F,k){k||(ne(R!=null,"missing value"),ne(F!=null,"missing offset"),ne(F<this.length,"trying to write beyond buffer length"),he(R,255)),F>=this.length||(this[F]=R)},p.prototype.writeUInt16LE=function(R,F,k){_(this,R,F,!0,k)},p.prototype.writeUInt16BE=function(R,F,k){_(this,R,F,!1,k)},p.prototype.writeUInt32LE=function(R,F,k){S(this,R,F,!0,k)},p.prototype.writeUInt32BE=function(R,F,k){S(this,R,F,!1,k)},p.prototype.writeInt8=function(R,F,k){k||(ne(R!=null,"missing value"),ne(F!=null,"missing offset"),ne(F<this.length,"Trying to write beyond buffer length"),be(R,127,-128)),F>=this.length||(0<=R?this.writeUInt8(R,F,k):this.writeUInt8(255+R+1,F,k))},p.prototype.writeInt16LE=function(R,F,k){I(this,R,F,!0,k)},p.prototype.writeInt16BE=function(R,F,k){I(this,R,F,!1,k)},p.prototype.writeInt32LE=function(R,F,k){z(this,R,F,!0,k)},p.prototype.writeInt32BE=function(R,F,k){z(this,R,F,!1,k)},p.prototype.writeFloatLE=function(R,F,k){B(this,R,F,!0,k)},p.prototype.writeFloatBE=function(R,F,k){B(this,R,F,!1,k)},p.prototype.writeDoubleLE=function(R,F,k){G(this,R,F,!0,k)},p.prototype.writeDoubleBE=function(R,F,k){G(this,R,F,!1,k)},p.prototype.fill=function(R,F,k){if(F=F||0,k=k||this.length,ne(typeof(R=typeof(R=R||0)=="string"?R.charCodeAt(0):R)=="number"&&!isNaN(R),"value is not a number"),ne(F<=k,"end < start"),k!==F&&this.length!==0){ne(0<=F&&F<this.length,"start out of bounds"),ne(0<=k&&k<=this.length,"end out of bounds");for(var H=F;H<k;H++)this[H]=R}},p.prototype.inspect=function(){for(var R=[],F=this.length,k=0;k<F;k++)if(R[k]=ie(this[k]),k===i.INSPECT_MAX_BYTES){R[k+1]="...";break}return"<Buffer "+R.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var R=new Uint8Array(this.length),F=0,k=R.length;F<k;F+=1)R[F]=this[F];return R.buffer};var U=p.prototype;function $(R,F,k){return typeof R!="number"?k:F<=(R=~~R)?F:0<=R||0<=(R+=F)?R:0}function Y(R){return(R=~~Math.ceil(+R))<0?0:R}function ae(R){return(Array.isArray||function(F){return Object.prototype.toString.call(F)==="[object Array]"})(R)}function ie(R){return R<16?"0"+R.toString(16):R.toString(16)}function pe(R){for(var F=[],k=0;k<R.length;k++){var H=R.charCodeAt(k);if(H<=127)F.push(R.charCodeAt(k));else for(var L=k,K=(55296<=H&&H<=57343&&k++,encodeURIComponent(R.slice(L,k+1)).substr(1).split("%")),se=0;se<K.length;se++)F.push(parseInt(K[se],16))}return F}function Oe(R){return g.toByteArray(R)}function ke(R,F,k,H){for(var L=0;L<H&&!(L+k>=F.length||L>=R.length);L++)F[L+k]=R[L];return L}function Q(R){try{return decodeURIComponent(R)}catch{return"�"}}function he(R,F){ne(typeof R=="number","cannot write a non-number as a number"),ne(0<=R,"specified a negative value for writing an unsigned value"),ne(R<=F,"value is larger than maximum value for type"),ne(Math.floor(R)===R,"value has a fractional component")}function be(R,F,k){ne(typeof R=="number","cannot write a non-number as a number"),ne(R<=F,"value larger than maximum allowed value"),ne(k<=R,"value smaller than minimum allowed value"),ne(Math.floor(R)===R,"value has a fractional component")}function ve(R,F,k){ne(typeof R=="number","cannot write a non-number as a number"),ne(R<=F,"value larger than maximum allowed value"),ne(k<=R,"value smaller than minimum allowed value")}function ne(R,F){if(!R)throw new Error(F||"Failed assertion")}p._augment=function(R){return R._isBuffer=!0,R._get=R.get,R._set=R.set,R.get=U.get,R.set=U.set,R.write=U.write,R.toString=U.toString,R.toLocaleString=U.toString,R.toJSON=U.toJSON,R.copy=U.copy,R.slice=U.slice,R.readUInt8=U.readUInt8,R.readUInt16LE=U.readUInt16LE,R.readUInt16BE=U.readUInt16BE,R.readUInt32LE=U.readUInt32LE,R.readUInt32BE=U.readUInt32BE,R.readInt8=U.readInt8,R.readInt16LE=U.readInt16LE,R.readInt16BE=U.readInt16BE,R.readInt32LE=U.readInt32LE,R.readInt32BE=U.readInt32BE,R.readFloatLE=U.readFloatLE,R.readFloatBE=U.readFloatBE,R.readDoubleLE=U.readDoubleLE,R.readDoubleBE=U.readDoubleBE,R.writeUInt8=U.writeUInt8,R.writeUInt16LE=U.writeUInt16LE,R.writeUInt16BE=U.writeUInt16BE,R.writeUInt32LE=U.writeUInt32LE,R.writeUInt32BE=U.writeUInt32BE,R.writeInt8=U.writeInt8,R.writeInt16LE=U.writeInt16LE,R.writeInt16BE=U.writeInt16BE,R.writeInt32LE=U.writeInt32LE,R.writeInt32BE=U.writeInt32BE,R.writeFloatLE=U.writeFloatLE,R.writeFloatBE=U.writeFloatBE,R.writeDoubleLE=U.writeDoubleLE,R.writeDoubleBE=U.writeDoubleBE,R.fill=U.fill,R.inspect=U.inspect,R.toArrayBuffer=U.toArrayBuffer,R}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(s,o,g,l,c,h,u,d,f){var g=t("buffer").Buffer,v=4,p=new g(v);p.fill(0),n.exports={hash:function(m,y,x,w){for(var E=y(function(_,S){_.length%v!=0&&(I=_.length+(v-_.length%v),_=g.concat([_,p],I));for(var I,z=[],B=S?_.readInt32BE:_.readInt32LE,G=0;G<_.length;G+=v)z.push(B.call(_,G));return z}(m=g.isBuffer(m)?m:new g(m),w),8*m.length),y=w,b=new g(x),T=y?b.writeInt32BE:b.writeInt32LE,M=0;M<E.length;M++)T.call(b,E[M],4*M,!0);return b}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(s,o,g,l,c,h,u,d,f){var g=t("buffer").Buffer,v=t("./sha"),p=t("./sha256"),m=t("./rng"),y={sha1:v,sha256:p,md5:t("./md5")},x=64,w=new g(x);function E(_,S){var I=y[_=_||"sha1"],z=[];return I||b("algorithm:",_,"is not yet supported"),{update:function(B){return g.isBuffer(B)||(B=new g(B)),z.push(B),B.length,this},digest:function(B){var G=g.concat(z),G=S?function(U,$,Y){g.isBuffer($)||($=new g($)),g.isBuffer(Y)||(Y=new g(Y)),$.length>x?$=U($):$.length<x&&($=g.concat([$,w],x));for(var ae=new g(x),ie=new g(x),pe=0;pe<x;pe++)ae[pe]=54^$[pe],ie[pe]=92^$[pe];return Y=U(g.concat([ae,Y])),U(g.concat([ie,Y]))}(I,S,G):I(G);return z=null,B?G.toString(B):G}}}function b(){var _=[].slice.call(arguments).join(" ");throw new Error([_,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}w.fill(0),i.createHash=function(_){return E(_)},i.createHmac=E,i.randomBytes=function(_,S){if(!S||!S.call)return new g(m(_));try{S.call(this,void 0,new g(m(_)))}catch(I){S(I)}};var T,M=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],A=function(_){i[_]=function(){b("sorry,",_,"is not implemented yet")}};for(T in M)A(M[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){var g=t("./helpers");function v(b,T){b[T>>5]|=128<<T%32,b[14+(T+64>>>9<<4)]=T;for(var M=1732584193,A=-271733879,_=-1732584194,S=271733878,I=0;I<b.length;I+=16){var z=M,B=A,G=_,U=S,M=m(M,A,_,S,b[I+0],7,-680876936),S=m(S,M,A,_,b[I+1],12,-389564586),_=m(_,S,M,A,b[I+2],17,606105819),A=m(A,_,S,M,b[I+3],22,-1044525330);M=m(M,A,_,S,b[I+4],7,-176418897),S=m(S,M,A,_,b[I+5],12,1200080426),_=m(_,S,M,A,b[I+6],17,-1473231341),A=m(A,_,S,M,b[I+7],22,-45705983),M=m(M,A,_,S,b[I+8],7,1770035416),S=m(S,M,A,_,b[I+9],12,-1958414417),_=m(_,S,M,A,b[I+10],17,-42063),A=m(A,_,S,M,b[I+11],22,-1990404162),M=m(M,A,_,S,b[I+12],7,1804603682),S=m(S,M,A,_,b[I+13],12,-40341101),_=m(_,S,M,A,b[I+14],17,-1502002290),M=y(M,A=m(A,_,S,M,b[I+15],22,1236535329),_,S,b[I+1],5,-165796510),S=y(S,M,A,_,b[I+6],9,-1069501632),_=y(_,S,M,A,b[I+11],14,643717713),A=y(A,_,S,M,b[I+0],20,-373897302),M=y(M,A,_,S,b[I+5],5,-701558691),S=y(S,M,A,_,b[I+10],9,38016083),_=y(_,S,M,A,b[I+15],14,-660478335),A=y(A,_,S,M,b[I+4],20,-405537848),M=y(M,A,_,S,b[I+9],5,568446438),S=y(S,M,A,_,b[I+14],9,-1019803690),_=y(_,S,M,A,b[I+3],14,-187363961),A=y(A,_,S,M,b[I+8],20,1163531501),M=y(M,A,_,S,b[I+13],5,-1444681467),S=y(S,M,A,_,b[I+2],9,-51403784),_=y(_,S,M,A,b[I+7],14,1735328473),M=x(M,A=y(A,_,S,M,b[I+12],20,-1926607734),_,S,b[I+5],4,-378558),S=x(S,M,A,_,b[I+8],11,-2022574463),_=x(_,S,M,A,b[I+11],16,1839030562),A=x(A,_,S,M,b[I+14],23,-35309556),M=x(M,A,_,S,b[I+1],4,-1530992060),S=x(S,M,A,_,b[I+4],11,1272893353),_=x(_,S,M,A,b[I+7],16,-155497632),A=x(A,_,S,M,b[I+10],23,-1094730640),M=x(M,A,_,S,b[I+13],4,681279174),S=x(S,M,A,_,b[I+0],11,-358537222),_=x(_,S,M,A,b[I+3],16,-722521979),A=x(A,_,S,M,b[I+6],23,76029189),M=x(M,A,_,S,b[I+9],4,-640364487),S=x(S,M,A,_,b[I+12],11,-421815835),_=x(_,S,M,A,b[I+15],16,530742520),M=w(M,A=x(A,_,S,M,b[I+2],23,-995338651),_,S,b[I+0],6,-198630844),S=w(S,M,A,_,b[I+7],10,1126891415),_=w(_,S,M,A,b[I+14],15,-1416354905),A=w(A,_,S,M,b[I+5],21,-57434055),M=w(M,A,_,S,b[I+12],6,1700485571),S=w(S,M,A,_,b[I+3],10,-1894986606),_=w(_,S,M,A,b[I+10],15,-1051523),A=w(A,_,S,M,b[I+1],21,-2054922799),M=w(M,A,_,S,b[I+8],6,1873313359),S=w(S,M,A,_,b[I+15],10,-30611744),_=w(_,S,M,A,b[I+6],15,-1560198380),A=w(A,_,S,M,b[I+13],21,1309151649),M=w(M,A,_,S,b[I+4],6,-145523070),S=w(S,M,A,_,b[I+11],10,-1120210379),_=w(_,S,M,A,b[I+2],15,718787259),A=w(A,_,S,M,b[I+9],21,-343485551),M=E(M,z),A=E(A,B),_=E(_,G),S=E(S,U)}return Array(M,A,_,S)}function p(b,T,M,A,_,S){return E((T=E(E(T,b),E(A,S)))<<_|T>>>32-_,M)}function m(b,T,M,A,_,S,I){return p(T&M|~T&A,b,T,_,S,I)}function y(b,T,M,A,_,S,I){return p(T&A|M&~A,b,T,_,S,I)}function x(b,T,M,A,_,S,I){return p(T^M^A,b,T,_,S,I)}function w(b,T,M,A,_,S,I){return p(M^(T|~A),b,T,_,S,I)}function E(b,T){var M=(65535&b)+(65535&T);return(b>>16)+(T>>16)+(M>>16)<<16|65535&M}n.exports=function(b){return g.hash(b,v,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){n.exports=function(g){for(var v,p=new Array(g),m=0;m<g;m++)!(3&m)&&(v=4294967296*Math.random()),p[m]=v>>>((3&m)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){var g=t("./helpers");function v(y,x){y[x>>5]|=128<<24-x%32,y[15+(x+64>>9<<4)]=x;for(var w,E,b,T=Array(80),M=1732584193,A=-271733879,_=-1732584194,S=271733878,I=-1009589776,z=0;z<y.length;z+=16){for(var B=M,G=A,U=_,$=S,Y=I,ae=0;ae<80;ae++){T[ae]=ae<16?y[z+ae]:m(T[ae-3]^T[ae-8]^T[ae-14]^T[ae-16],1);var ie=p(p(m(M,5),(ie=A,E=_,b=S,(w=ae)<20?ie&E|~ie&b:!(w<40)&&w<60?ie&E|ie&b|E&b:ie^E^b)),p(p(I,T[ae]),(w=ae)<20?1518500249:w<40?1859775393:w<60?-1894007588:-899497514)),I=S,S=_,_=m(A,30),A=M,M=ie}M=p(M,B),A=p(A,G),_=p(_,U),S=p(S,$),I=p(I,Y)}return Array(M,A,_,S,I)}function p(y,x){var w=(65535&y)+(65535&x);return(y>>16)+(x>>16)+(w>>16)<<16|65535&w}function m(y,x){return y<<x|y>>>32-x}n.exports=function(y){return g.hash(y,v,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){function g(x,w){var E=(65535&x)+(65535&w);return(x>>16)+(w>>16)+(E>>16)<<16|65535&E}function v(x,w){var E,b=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),M=new Array(64);x[w>>5]|=128<<24-w%32,x[15+(w+64>>9<<4)]=w;for(var A,_,S=0;S<x.length;S+=16){for(var I=T[0],z=T[1],B=T[2],G=T[3],U=T[4],$=T[5],Y=T[6],ae=T[7],ie=0;ie<64;ie++)M[ie]=ie<16?x[ie+S]:g(g(g((_=M[ie-2],m(_,17)^m(_,19)^y(_,10)),M[ie-7]),(_=M[ie-15],m(_,7)^m(_,18)^y(_,3))),M[ie-16]),E=g(g(g(g(ae,m(_=U,6)^m(_,11)^m(_,25)),U&$^~U&Y),b[ie]),M[ie]),A=g(m(A=I,2)^m(A,13)^m(A,22),I&z^I&B^z&B),ae=Y,Y=$,$=U,U=g(G,E),G=B,B=z,z=I,I=g(E,A);T[0]=g(I,T[0]),T[1]=g(z,T[1]),T[2]=g(B,T[2]),T[3]=g(G,T[3]),T[4]=g(U,T[4]),T[5]=g($,T[5]),T[6]=g(Y,T[6]),T[7]=g(ae,T[7])}return T}var p=t("./helpers"),m=function(x,w){return x>>>w|x<<32-w},y=function(x,w){return x>>>w};n.exports=function(x){return p.hash(x,v,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){i.read=function(g,v,p,m,S){var x,w,E=8*S-m-1,b=(1<<E)-1,T=b>>1,M=-7,A=p?S-1:0,_=p?-1:1,S=g[v+A];for(A+=_,x=S&(1<<-M)-1,S>>=-M,M+=E;0<M;x=256*x+g[v+A],A+=_,M-=8);for(w=x&(1<<-M)-1,x>>=-M,M+=m;0<M;w=256*w+g[v+A],A+=_,M-=8);if(x===0)x=1-T;else{if(x===b)return w?NaN:1/0*(S?-1:1);w+=Math.pow(2,m),x-=T}return(S?-1:1)*w*Math.pow(2,x-m)},i.write=function(g,v,p,m,y,I){var w,E,b=8*I-y-1,T=(1<<b)-1,M=T>>1,A=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=m?0:I-1,S=m?1:-1,I=v<0||v===0&&1/v<0?1:0;for(v=Math.abs(v),isNaN(v)||v===1/0?(E=isNaN(v)?1:0,w=T):(w=Math.floor(Math.log(v)/Math.LN2),v*(m=Math.pow(2,-w))<1&&(w--,m*=2),2<=(v+=1<=w+M?A/m:A*Math.pow(2,1-M))*m&&(w++,m/=2),T<=w+M?(E=0,w=T):1<=w+M?(E=(v*m-1)*Math.pow(2,y),w+=M):(E=v*Math.pow(2,M-1)*Math.pow(2,y),w=0));8<=y;g[p+_]=255&E,_+=S,E/=256,y-=8);for(w=w<<y|E,b+=y;0<b;g[p+_]=255&w,_+=S,w/=256,b-=8);g[p+_-S]|=128*I}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(s,o,a,l,c,h,u,d,f){var g,v,p;function m(){}(s=n.exports={}).nextTick=(v=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,v?function(y){return window.setImmediate(y)}:p?(g=[],window.addEventListener("message",function(y){var x=y.source;x!==window&&x!==null||y.data!=="process-tick"||(y.stopPropagation(),0<g.length&&g.shift()())},!0),function(y){g.push(y),window.postMessage("process-tick","*")}):function(y){setTimeout(y,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.binding=function(y){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(y){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(zM);var kL=zM.exports;const VL=Bc(kL);var kM=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],HL=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],VM=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],GL=kM,WL=GL.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Dd=VM;Dd=Dd.slice().filter(function(r){return!/^(gl\_|texture)/.test(r)});var jL=Dd.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),XL=nI,qL=kM,Fm=HL,YL=VM,$L=WL,KL=jL,Pi=999,Um=9999,Wh=0,jh=1,Om=2,Bm=3,zm=4,ga=5,ZL=6,JL=7,QL=8,km=9,eI=10,Vm=11,tI=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function nI(r){var e=0,t=0,n=Pi,i,s,o=[],a=[],l=1,c=0,h=0,u=!1,d=!1,f="",g;r=r||{};var v=YL,p=qL;r.version==="300 es"&&(v=KL,p=$L);for(var m={},y={},e=0;e<v.length;e++)m[v[e]]=!0;for(var e=0;e<p.length;e++)y[p[e]]=!0;return function($){return a=[],$!==null?w($):E()};function x($){$.length&&a.push({type:tI[n],data:$,position:h,line:l,column:c})}function w($){e=0,$.toString&&($=$.toString()),f+=$.replace(/\r\n/g,`
`),g=f.length;for(var Y;i=f[e],e<g;){switch(Y=e,n){case Wh:e=_();break;case jh:e=A();break;case Om:e=M();break;case Bm:e=S();break;case zm:e=B();break;case Vm:e=z();break;case ga:e=G();break;case Um:e=U();break;case km:e=T();break;case Pi:e=b();break}if(Y!==e)switch(f[Y]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,f=f.slice(e),a}function E($){return o.length&&x(o.join("")),n=eI,x("(eof)"),a}function b(){return o=o.length?[]:o,s==="/"&&i==="*"?(h=t+e-1,n=Wh,s=i,e+1):s==="/"&&i==="/"?(h=t+e-1,n=jh,s=i,e+1):i==="#"?(n=Om,h=t+e,e):/\s/.test(i)?(n=km,h=t+e,e):(u=/\d/.test(i),d=/[^\w_]/.test(i),h=t+e,n=u?zm:d?Bm:Um,e)}function T(){return/[^\s]/g.test(i)?(x(o.join("")),n=Pi,e):(o.push(i),s=i,e+1)}function M(){return(i==="\r"||i===`
`)&&s!=="\\"?(x(o.join("")),n=Pi,e):(o.push(i),s=i,e+1)}function A(){return M()}function _(){return i==="/"&&s==="*"?(o.push(i),x(o.join("")),n=Pi,e+1):(o.push(i),s=i,e+1)}function S(){if(s==="."&&/\d/.test(i))return n=ga,e;if(s==="/"&&i==="*")return n=Wh,e;if(s==="/"&&i==="/")return n=jh,e;if(i==="."&&o.length){for(;I(o););return n=ga,e}if(i===";"||i===")"||i==="("){if(o.length)for(;I(o););return x(i),n=Pi,e+1}var $=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||$){for(;I(o););return n=Pi,e}return o.push(i),s=i,e+1}function I($){var Y=0,ae,ie;do{if(ae=Fm.indexOf($.slice(0,$.length+Y).join("")),ie=Fm[ae],ae===-1){if(Y--+$.length>0)continue;ie=$.slice(0,1).join("")}return x(ie),h+=ie.length,o=o.slice(ie.length),o.length}while(!0)}function z(){return/[^a-fA-F0-9]/.test(i)?(x(o.join("")),n=Pi,e):(o.push(i),s=i,e+1)}function B(){return i==="."||/[eE]/.test(i)?(o.push(i),n=ga,s=i,e+1):i==="x"&&o.length===1&&o[0]==="0"?(n=Vm,o.push(i),s=i,e+1):/[^\d]/.test(i)?(x(o.join("")),n=Pi,e):(o.push(i),s=i,e+1)}function G(){return i==="f"&&(o.push(i),s=i,e+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(s)?(o.push(i),s=i,e+1):/[^\d]/.test(i)?(x(o.join("")),n=Pi,e):(o.push(i),s=i,e+1)}function U(){if(/[^\d\w_]/.test(i)){var $=o.join("");return y[$]?n=QL:m[$]?n=JL:n=ZL,x(o.join("")),n=Pi,e}return o.push(i),s=i,e+1}}var iI=XL,sI=rI;function rI(r,e){var t=iI(e),n=[];return n=n.concat(t(r)),n=n.concat(t(null)),n}const oI=Bc(sI);var aI=lI;function lI(r){for(var e=[],t=0;t<r.length;t++)r[t].type!=="eof"&&e.push(r[t].data);return e.join("")}const Hm=Bc(aI);var cI=hI;function hI(r){var e=null,t=null,n=0,i=0,s=0,o=0,a=0,l=[],c,h,u;for(c=0,h;c<r.length;c++)if(u=r[c],u.data==="{"){if(n&&n++||(h=f(c,Rs(")"),Rs()),h<0)||(o=h,h=f(h,Rs("("),Rs(")")),h<0)||(a=h,h=f(h,_a),h<0)||r[h].type!=="ident"||(t=r[h].data,h=f(h,_a),h<0))continue;n=1,i=c,e=r[h].data,s=h;var d=f(h,_a);switch(r[d]&&r[d].data){case"lowp":case"highp":case"mediump":s=d}}else if(n&&u.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[i+1,c],args:[a,o+1],outer:[s,c+1]})}for(c=0;c<r.length;c++)if(u=r[c],u.data===";"){if(h=f(c,Rs(")"),Rs()),h<0||(o=h,h=f(h,Rs("("),Rs(")")),h<0)||(a=h,h=f(h,_a),h<0)||r[h].type!=="ident"||(t=r[h].data,h=f(h,_a),h<0)||r[h].type==="operator"||r[h].data==="return")continue;e=r[h].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[h,c+1]})}return l.sort(function(g,v){return g.outer[0]-v.outer[0]});function f(g,v,p){for(var m=g-1;m>=0;m--){if(v(r[m]))return m;if(p&&p(r[m]))return-1}return-1}}function Rs(r){return function(e){return e.type==="operator"&&(!r||e.data===r)}}function _a(r){return r.type!=="whitespace"}const uI=Bc(cI);function dI(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function HM(r){var e=dI(r,"string");return typeof e=="symbol"?e:String(e)}function vt(r,e,t){return e=HM(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Gm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function $r(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gm(Object(t),!0).forEach(function(n){vt(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Gm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function fI(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function pI(r,e){if(r==null)return{};var t=fI(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function mI(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function gI(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,HM(n.key),n)}}function _I(r,e,t){return e&&gI(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function GM(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Nd(r,e){return Nd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Nd(r,e)}function vI(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Nd(r,e)}function yc(r){return yc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yc(r)}function xI(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yI(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return GM(r)}function MI(r){var e=xI();return function(){var n=yc(r),i;if(e){var s=yc(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return yI(this,i)}}var Ge={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},On,Kr,wI=(On={},vt(On,"".concat(Ge.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ge.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),vt(On,"".concat(Ge.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ge.position,`;
  `)}),vt(On,"".concat(Ge.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ge.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),vt(On,"".concat(Ge.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ge.pointSize,`;
    `)}),vt(On,"".concat(Ge.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ge.diffuseColor,`;
  `)}),vt(On,"".concat(Ge.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ge.fragColor,`;
  `)}),vt(On,"".concat(Ge.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ge.emissive,`;
    `)}),vt(On,"".concat(Ge.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ge.roughness,`;
    `)}),vt(On,"".concat(Ge.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ge.metalness,`;
    `)}),vt(On,"".concat(Ge.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ge.ao,`;
    `)}),vt(On,"".concat(Ge.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ge.bump," - (dot(").concat(Ge.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),vt(On,"".concat(Ge.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ge.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ge.depthAlpha,`;
    `)}),On),SI=(Kr={},vt(Kr,"".concat(Ge.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ge.position,`, 1.0 );
  `)}),vt(Kr,"".concat(Ge.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ge.position,`;
  `)}),vt(Kr,"".concat(Ge.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ge.diffuseColor,`;
  `)}),vt(Kr,"".concat(Ge.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ge.fragColor,`;
  `)}),Kr),bI=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,TI=`
    varying mat4 csm_internal_vModelViewMatrix;
`,AI=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,EI=`
    varying mat4 csm_internal_vModelViewMatrix;
`,CI=`
    
`,Bn,PI=(Bn={},vt(Bn,"".concat(Ge.position),"*"),vt(Bn,"".concat(Ge.positionRaw),"*"),vt(Bn,"".concat(Ge.normal),"*"),vt(Bn,"".concat(Ge.pointSize),["PointsMaterial"]),vt(Bn,"".concat(Ge.diffuseColor),"*"),vt(Bn,"".concat(Ge.fragColor),"*"),vt(Bn,"".concat(Ge.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),vt(Bn,"".concat(Ge.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),vt(Bn,"".concat(Ge.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),vt(Bn,"".concat(Ge.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),vt(Bn,"".concat(Ge.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),vt(Bn,"".concat(Ge.depthAlpha),"*"),Bn),RI=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],LI=function(e,t,n){return e.split(t).join(n)},II=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},DI=function(e,t){return new RegExp("\\b".concat(II(t),"\\b")).test(e)};function NI(r){try{new r}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function FI(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(r,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(i){var s=typeof i[1].get=="function",o=typeof i[1].set=="function",a=typeof i[1].value=="function",l=i[0]==="constructor";return(s||o||a)&&!l}).forEach(function(i){if(typeof r[i[0]]=="function"){t||console.warn("Function ".concat(i[0]," already exists on CSM, renaming to base_").concat(i[0]));var s="base_".concat(i[0]);r[s]=i[1].value.bind(r);return}Object.defineProperty(r,i[0],i[1])})}function UI(r){var e=r.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function Wm(r){return r.replace(/\s/g,"")}function OI(r,e,t){var n=r.lastIndexOf(e);return n===-1?r:r.substring(0,n)+t+r.substring(n+e.length)}var Mc=function(r){vI(t,r);var e=MI(t);function t(n){var i,s=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,h=n.cacheKey,u=n.silent,d=pI(n,RI);mI(this,t);var f;if(NI(s)?f=new s(d):(f=s,Object.assign(f,d)),f.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");i=e.call(this),FI(GM(i),f,u),i.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:h,baseMaterial:s,instanceID:Fa.generateUUID(),type:f.type,isAlreadyExtended:!UI(f.onBeforeCompile),cacheHash:"",silent:u},i.uniforms=$r($r({},i.uniforms||{}),l||{});{var g=i.__csm,v=g.fragmentShader,p=g.vertexShader,m=i.uniforms;i.__csm.cacheHash=i.getCacheHash(),i.generateMaterial(v,p,m)}return i}return _I(t,[{key:"update",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=i.uniforms||this.uniforms,Object.assign(this.__csm,i);var s=this.__csm,o=s.fragmentShader,a=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var i={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(i);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var i=this.__csm,s=i.fragmentShader,o=i.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(h,u){var d=u.value;return h+JSON.stringify(d)},""),c=Wm(s)+Wm(o)+l;return c.trim().length>0?VL(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(i,s,o){var a=this,l=this.parseShader(i),c=this.parseShader(s);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var h=function(f){try{if(l){var g=a.patchShader(l,f.fragmentShader,!0);f.fragmentShader=a.getMaterialDefine()+g}if(c){var v=a.patchShader(c,f.vertexShader);f.vertexShader=`#define IS_VERTEX;
`+v,f.vertexShader=a.getMaterialDefine()+f.vertexShader}f.uniforms=$r($r({},f.uniforms),a.uniforms),a.uniforms=f.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var u=this.onBeforeCompile;this.onBeforeCompile=function(d,f){u(d,f),h(d)}}else this.onBeforeCompile=h;this.needsUpdate=!0}},{key:"patchShader",value:function(i,s,o){var a=this,l=s,c=$r($r({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(d){Object.keys(c[d]).forEach(function(f){var g=PI[d],v=a.__csm.type;if(d==="*"||DI(i.main,d))if(!g||Array.isArray(g)&&g.includes(v)||g==="*")l=LI(l,f,c[d][f]);else throw new Error("CSM: ".concat(d," is not available in ").concat(v,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?EI:TI,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(i.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(bI,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?CI:AI,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var h=this.__csm.isAlreadyExtended,u=l.includes("// CSM_END");return h&&u?l=OI(l,"// CSM_END",`
          // CSM_END
          `.concat(i.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(i.main,`
        // CSM_END
          `)),l=i.defines+l,l}},{key:"parseShader",value:function(i){if(i){var s=i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=oI(s),a=uI(o),l=a.map(function(u){return u.name}).indexOf("main"),c=Hm(o.slice(0,l>=0?a[l].outer[0]:void 0)),h=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:h}}}},{key:"getMaterialDefine",value:function(){var i=this.__csm.type;return i?"#define IS_".concat(i.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return SI;default:return wI}}},{key:"getShaderFromIndex",value:function(i,s){return Hm(i.slice(s[0],s[1]))}}]),t}(ai),jm=`uniform float uTime;
uniform float uStrength;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uWarpStrength;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;

attribute vec4 tangent;

varying float vWobble;

vec4 _permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float _permute(float x) {
    return floor(mod(((x * 34.0) + 1.0) * x, 289.0));
}

vec4 _taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float _taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 _grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w   = 1.5 - dot(abs(p.xyz), ones.xyz);
    s     = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;

    return p;
}

float calcSimplexNoise4d(vec4 v){
    const vec2  C = vec2( 0.138196601125010504,  
    0.309016994374947451); 
    
    vec4 i  = floor(v + dot(v, C.yyyy) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    

    
    vec4 i0;

    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;

    
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;

    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    
    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

    
    i = mod(i, 289.0);
    float j0 = _permute( _permute( _permute( _permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = _permute( _permute( _permute( _permute (
                                             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                                         + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                                + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                       + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    
    
    

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = _grad4(j0,   ip);
    vec4 p1 = _grad4(j1.x, ip);
    vec4 p2 = _grad4(j1.y, ip);
    vec4 p3 = _grad4(j1.z, ip);
    vec4 p4 = _grad4(j1.w, ip);

    
    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= _taylorInvSqrt(dot(p4,p4));

    
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

float _calcWobble(
    vec3  position,
    float time,
    float strength,
    float positionFrequency,
    float timeFrequency,
    float warpStrength,
    float warpPositionFrequency,
    float warpTimeFrequency
) {
    vec3 warpedPosition  = position;
    warpedPosition      += calcSimplexNoise4d(
        vec4(
            position * warpPositionFrequency,
            time     * warpTimeFrequency
        )
    ) * warpStrength;

    return calcSimplexNoise4d(
        vec4(
            warpedPosition * positionFrequency,
            time           * timeFrequency
        )
    ) * strength;
}

void main() {
    vec3 bitangent = cross(normal, tangent.xyz);

    float  shift             = 0.01;
    vec3  tangentNeighbour   = csm_Position + shift * tangent.xyz;
    vec3  bitangentNeighbour = csm_Position + shift * bitangent;
    float positionWobble     = _calcWobble(
        csm_Position,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    float tangentWobble = _calcWobble(
        tangentNeighbour,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    float bitangentWobble = _calcWobble(
        bitangentNeighbour,
        uTime,
        uStrength,
        uPositionFrequency,
        uTimeFrequency,
        uWarpStrength,
        uWarpPositionFrequency,
        uWarpTimeFrequency
    );
    csm_Position            += normal * positionWobble;
    tangentNeighbour        += normal * tangentWobble;
    bitangentNeighbour      += normal * bitangentWobble;

    vec3 computedTangentNeighbourDir = normalize(
        tangentNeighbour - csm_Position
    );
    vec3 computedBitangentNeighbourDir = normalize(
        bitangentNeighbour - csm_Position
    );
    csm_Normal = cross(
        computedTangentNeighbourDir,
        computedBitangentNeighbourDir
    );

    vWobble = positionWobble / uStrength;
}`,BI=`uniform vec3 uInnerColor;
uniform vec3 uOuterColor;

varying float vWobble;

void main() {
    float colorFactor    = smoothstep(-1.0, 1.0, vWobble);
    vec3  color          = mix(uInnerColor, uOuterColor, colorFactor);
    csm_DiffuseColor.rgb = color;
    csm_Roughness        = 1.0 - colorFactor;
}`,Rn,WM,jM,XM,qM,YM,$M,KM,Pg;let zI=(Pg=class extends et{constructor(){super(...arguments);Re(this,Rn);V(this,"uniforms");V(this,"wobbleParams",{innerColor:"#0000ff",outerColor:"#ff0000"});V(this,"mesh",null);V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"42"}get title(){return"Wobbly Sphere"}get link(){return"https://threejs-journey.com/lessons/wobbly-sphere-shader"}update(t){const n=t*.001;this.mesh.material.uniforms.uTime.value=n,this.control.update()}init(){super.init(),C(this,Rn,jM).call(this),C(this,Rn,YM).call(this),C(this,Rn,qM).call(this),C(this,Rn,WM).call(this),C(this,Rn,$M).call(this),C(this,Rn,KM).call(this)}},Rn=new WeakSet,WM=function(){this.guiControl.add(this.mesh.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.mesh.material,"roughness").min(0).max(1).step(.001),this.guiControl.add(this.mesh.material,"transmission").min(0).max(1).step(.001),this.guiControl.add(this.mesh.material,"ior").min(0).max(10).step(.001),this.guiControl.add(this.mesh.material,"thickness").min(0).max(10).step(.001),this.guiControl.addColor({color:this.mesh.material.color.getHexString()},"color").onChange(t=>this.mesh.material.color.set(t)),this.guiControl.add(this.mesh.material.uniforms.uStrength,"value").min(0).max(2).step(.001).name("uStrength"),this.guiControl.add(this.mesh.material.uniforms.uPositionFrequency,"value").min(0).max(2).step(.001).name("uPositionFrequency"),this.guiControl.add(this.mesh.material.uniforms.uTimeFrequency,"value").min(0).max(2).step(.001).name("uTimeFrequency"),this.guiControl.add(this.mesh.material.uniforms.uWarpStrength,"value").min(0).max(2).step(.001).name("uWarpStrength"),this.guiControl.add(this.mesh.material.uniforms.uWarpPositionFrequency,"value").min(0).max(2).step(.001).name("uWarpPositionFrequency"),this.guiControl.add(this.mesh.material.uniforms.uWarpTimeFrequency,"value").min(0).max(2).step(.001).name("uWarpTimeFrequency"),this.guiControl.addColor(this.wobbleParams,"innerColor").onChange(t=>{this.mesh.material.uniforms.uInnerColor.value.set(t)}),this.guiControl.addColor(this.wobbleParams,"outerColor").onChange(t=>{this.mesh.material.uniforms.uOuterColor.value.set(t)})},jM=function(){C(this,Rn,XM).call(this);const t=new zo(2.5,50),n=z2(t);n.computeTangents();const i=new Mc({baseMaterial:Pc,vertexShader:jm,silent:!0,depthPacking:Tc,uniforms:this.uniforms});this.mesh=new ge(n,new Mc({baseMaterial:bi,vertexShader:jm,fragmentShader:BI,silent:!0,metalness:0,roughness:.5,color:16777215,transmission:0,ior:1.5,thickness:1.5,transparent:!0,wireframe:!1,uniforms:this.uniforms})),this.mesh.customDepthMaterial=i,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const s=new ge(new Rt(15,15,15),new Ot({}));s.position.set(0,-5,5),s.rotation.y=Math.PI,s.receiveShadow=!0,s.visible=!1,this.scene.add(s)},XM=function(){this.uniforms={uTime:new Ie(0),uStrength:new Ie(.3),uTimeFrequency:new Ie(.4),uPositionFrequency:new Ie(.5),uWarpStrength:new Ie(1.7),uWarpTimeFrequency:new Ie(.12),uWarpPositionFrequency:new Ie(.38),uInnerColor:new Ie(new xe(this.wobbleParams.innerColor)),uOuterColor:new Ie(new xe(this.wobbleParams.outerColor))}},qM=function(){new Oc().load("/three.js-journey/media/images/environmentMap/2k.hdr",n=>{n.mapping=Hs,this.scene.environment=n})},YM=function(){const t=new Kn(16777215,3);t.position.set(.25,2,-2.25),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.normalBias=.05,t.shadow.camera.far=15,this.scene.add(t)},$M=function(){this.camera.fov=35,this.camera.position.set(13,-3,-5),this.camera.updateProjectionMatrix()},KM=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni,this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1},Pg);var Xm=`varying vec3 vPosition;

void main() {
    vPosition = csm_Position;
}`,qm=`uniform float uStartAngle;
uniform float uArcAngle;

varying vec3 vPosition;

void main() {
    float angle  = atan(vPosition.y, vPosition.x);
    angle       -= uStartAngle;
    angle        = mod(angle, PI2);

    if ((angle > 0.0) && (angle < uArcAngle)) {
        discard;
    }

    float csm_Slice;
}`;const kI="/three.js-journey/assets/gears-re--C28B.glb";var $n,ZM,JM,QM,e1,t1,n1;class VI extends et{constructor(){super(...arguments);Re(this,$n);V(this,"model",null);V(this,"outerHullMesh",null);V(this,"hasGuiTweaks",!0);V(this,"hasAnimation",!0)}get number(){return"43"}get title(){return"Sliced Model"}get link(){return"https://threejs-journey.com/lessons/sliced-model-shader"}update(t){const n=t*.001;this.model&&(this.model.rotation.y=.1*n),this.control.update()}init(){super.init(),C(this,$n,QM).call(this),C(this,$n,e1).call(this),C(this,$n,JM).call(this),C(this,$n,t1).call(this),C(this,$n,n1).call(this)}}$n=new WeakSet,ZM=function(){this.guiControl.add(this.outerHullMesh.material.uniforms.uStartAngle,"value").min(-Math.PI).max(Math.PI).step(.001).name("uStartAngle"),this.guiControl.add(this.outerHullMesh.material.uniforms.uArcAngle,"value").min(0).max(2*Math.PI).step(.001).name("uArcAngle")},JM=function(){const t=new Zn,n=new Jn;n.setDecoderPath("/three.js-journey/js/utils/loader/draco/"),t.setDRACOLoader(n);const i={uStartAngle:new Ie(1.75),uArcAngle:new Ie(1.25)},s={csm_Slice:{"#include <colorspace_fragment>":`
          #include <colorspace_fragment>
          
          if (!gl_FrontFacing) {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
          }
        `}},o=new Ot({metalness:.5,roughness:.25,envMapIntensity:.5,color:"#858080"}),a=new Mc({baseMaterial:Ot,patchMap:s,vertexShader:Xm,fragmentShader:qm,uniforms:i,silent:!0,metalness:.5,roughness:.25,envMapIntensity:.5,color:"#858080",side:_n}),l=new Mc({baseMaterial:Pc,patchMap:s,vertexShader:Xm,fragmentShader:qm,uniforms:i,silent:!0,depthPacking:Tc});t.load(kI,h=>{this.model=h.scene,this.model.traverse(u=>{u.isMesh&&(u.name==="outerHull"?(u.material=a,u.customDepthMaterial=l,this.outerHullMesh=u):u.material=o,u.receiveShadow=!0,u.castShadow=!0)}),this.scene.add(this.model),C(this,$n,ZM).call(this)});const c=new ge(new Rt(10,10,10),new Ot({}));c.position.set(-4,-3,-4),c.lookAt(new O(0,0,0)),c.receiveShadow=!0,c.visible=!1,this.scene.add(c)},QM=function(){new Oc().load("/three.js-journey/media/images/environmentMap/aerodynamics_workshop.hdr",n=>{n.mapping=Hs,this.scene.environment=n,this.scene.background=n,this.scene.backgroundBlurriness=.5})},e1=function(){const t=new Kn(16777215,5);t.position.set(6.25,3,4),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.top=8,t.shadow.camera.bottom=-8,t.shadow.camera.left=-8,t.shadow.camera.right=8,t.shadow.camera.near=.1,t.shadow.camera.far=30,t.shadow.camera.normalBias=.05,this.scene.add(t)},t1=function(){this.camera.position.set(-5,5,12),this.camera.fov=35,this.camera.updateProjectionMatrix()},n1=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ni,this.renderer.toneMapping=Vs};const HI=[new wP,new SP,new BR,new zR,new kR,new VR,new HR,new GR,new WR,new KR,new JR,new QR,new b2,new T2,new A2,new P2,new B2,new M3,new w3,new S3,new b3,new T3,new A3,new R3,new D3,new U3,new z3,new W3,new $3,new J3,new nL,new rL,new lL,new uL,new xL,new bL,new CL,new zL,new zI,new VI],GI=new c1(HI.reverse(),".lesson-title",".controls__arrow--left",".controls__arrow--right");GI.run();
//# sourceMappingURL=index-CtrJVNc3.js.map
