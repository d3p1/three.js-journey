var xm=Object.defineProperty;var Bc=s=>{throw TypeError(s)};var vm=(s,t,e)=>t in s?xm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var wt=(s,t,e)=>vm(s,typeof t!="symbol"?t+"":t,e),ga=(s,t,e)=>t.has(s)||Bc("Cannot "+e);var ee=(s,t,e)=>(ga(s,t,"read from private field"),e?e.call(s):t.get(s)),he=(s,t,e)=>t.has(s)?Bc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),yn=(s,t,e,n)=>(ga(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),j=(s,t,e)=>(ga(s,t,"access private method"),e);var _a=(s,t,e,n)=>({set _(i){yn(s,t,i,e)},get _(){return ee(s,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var js,On,En,Te,td,ed,cl,hl,ul,Lo,nd;class ym{constructor(t,e,n,i){he(this,Te);he(this,js);he(this,On,[]);he(this,En,0);yn(this,On,t),yn(this,js,document.querySelector(e)),j(this,Te,td).call(this,n,i),j(this,Te,ed).call(this)}run(){ee(this,On).length&&j(this,Te,Lo).call(this)}}js=new WeakMap,On=new WeakMap,En=new WeakMap,Te=new WeakSet,td=function(t,e){const n=document.querySelector(t),i=document.querySelector(e);n.addEventListener("click",j(this,Te,hl).bind(this)),i.addEventListener("click",j(this,Te,cl).bind(this))},ed=function(){document.addEventListener("keydown",t=>{t.key==="ArrowRight"&&j(this,Te,cl).call(this),t.key==="ArrowLeft"&&j(this,Te,hl).call(this)})},cl=function(){j(this,Te,ul).call(this),ee(this,En)>=ee(this,On).length-1?yn(this,En,0):_a(this,En)._++,j(this,Te,Lo).call(this)},hl=function(){j(this,Te,ul).call(this),ee(this,En)<=0?yn(this,En,ee(this,On).length-1):_a(this,En)._--,j(this,Te,Lo).call(this)},ul=function(){ee(this,On)[ee(this,En)].close()},Lo=function(){ee(this,On)[ee(this,En)].open(),j(this,Te,nd).call(this)},nd=function(){var n;const t=ee(this,On)[ee(this,En)],e=document.createElement("a");e.href=t.link,e.target="_blank",e.rel="noopener noreferrer",e.textContent=t.title,(n=ee(this,js).querySelector("a"))==null||n.remove(),ee(this,js).append(e)};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="157",ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mm=0,zc=1,Sm=2,id=1,ql=2,ni=3,Ci=0,We=1,Bn=2,Ei=0,ks=1,Bo=2,kc=3,Gc=4,Em=5,Us=100,bm=101,wm=102,Hc=103,Vc=104,Tm=200,Am=201,Cm=202,Rm=203,sd=204,rd=205,Lm=206,Pm=207,Dm=208,Um=209,Im=210,Nm=0,Om=1,Fm=2,dl=3,Bm=4,zm=5,km=6,Gm=7,od=0,Hm=1,Vm=2,bi=0,Wm=1,Xm=2,jm=3,Ym=4,qm=5,ad=300,Qs=301,tr=302,zo=303,fl=304,na=306,Ue=1e3,pn=1001,pl=1002,be=1003,Wc=1004,xa=1005,Be=1006,$m=1007,ss=1008,wi=1009,Km=1010,Zm=1011,$l=1012,ld=1013,vi=1014,Dn=1015,ai=1016,cd=1017,hd=1018,Zi=1020,Jm=1021,Pn=1023,Qm=1024,tg=1025,Ji=1026,er=1027,eg=1028,ud=1029,ng=1030,dd=1031,fd=1033,va=33776,ya=33777,Ma=33778,Sa=33779,Xc=35840,jc=35841,Yc=35842,qc=35843,ig=36196,$c=37492,Kc=37496,Zc=37808,Jc=37809,Qc=37810,th=37811,eh=37812,nh=37813,ih=37814,sh=37815,rh=37816,oh=37817,ah=37818,lh=37819,ch=37820,hh=37821,Ea=36492,uh=36494,dh=36495,sg=36283,fh=36284,ph=36285,mh=36286,pd=3e3,Qi=3001,rg=3200,og=3201,Kl=0,ag=1,bn="",ie="srgb",Vn="srgb-linear",Zl="display-p3",ia="display-p3-linear",ko="linear",ae="srgb",Go="rec709",Ho="p3",ba=7680,lg=519,cg=512,hg=513,ug=514,dg=515,fg=516,pg=517,mg=518,gg=519,gh=35044,_h="300 es",ml=1035,li=2e3,Vo=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const wr=Math.PI/180,nr=180/Math.PI;function us(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function De(s,t,e){return Math.max(t,Math.min(e,s))}function Jl(s,t){return(s%t+t)%t}function _g(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xg(s,t,e){return s!==t?(e-s)/(t-s):0}function Tr(s,t,e){return(1-e)*s+e*t}function vg(s,t,e,n){return Tr(s,t,1-Math.exp(-e*n))}function yg(s,t=1){return t-Math.abs(Jl(s,t*2)-t)}function Mg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Eg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bg(s,t){return s+Math.random()*(t-s)}function wg(s){return s*(.5-Math.random())}function Tg(s){s!==void 0&&(xh=s);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ag(s){return s*wr}function Cg(s){return s*nr}function gl(s){return(s&s-1)===0&&s!==0}function Rg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Is(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pg={DEG2RAD:wr,RAD2DEG:nr,generateUUID:us,clamp:De,euclideanModulo:Jl,mapLinear:_g,inverseLerp:xg,lerp:Tr,damp:vg,pingpong:yg,smoothstep:Mg,smootherstep:Sg,randInt:Eg,randFloat:bg,randFloatSpread:wg,seededRandom:Tg,degToRad:Ag,radToDeg:Cg,isPowerOfTwo:gl,ceilPowerOfTwo:Rg,floorPowerOfTwo:Wo,setQuaternionFromProperEuler:Lg,normalize:Je,denormalize:Is};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],v=i[1],x=i[4],M=i[7],S=i[2],T=i[5],E=i[8];return r[0]=o*g+a*v+l*S,r[3]=o*m+a*x+l*T,r[6]=o*f+a*M+l*E,r[1]=c*g+h*v+u*S,r[4]=c*m+h*x+u*T,r[7]=c*f+h*M+u*E,r[2]=d*g+p*v+_*S,r[5]=d*m+p*x+_*T,r[8]=d*f+p*M+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,_=e*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new jt;function md(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dg(){const s=Ur("canvas");return s.style.display="block",s}const vh={};function Ar(s){s in vh||(vh[s]=!0,console.warn(s))}const yh=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[Vn]:{transfer:ko,primaries:Go,toReference:s=>s,fromReference:s=>s},[ie]:{transfer:ae,primaries:Go,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ia]:{transfer:ko,primaries:Ho,toReference:s=>s.applyMatrix3(Mh),fromReference:s=>s.applyMatrix3(yh)},[Zl]:{transfer:ae,primaries:Ho,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mh),fromReference:s=>s.applyMatrix3(yh).convertLinearToSRGB()}},Ug=new Set([Vn,ia]),Qt={enabled:!0,_workingColorSpace:Vn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ug.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Jr[t].toReference,i=Jr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Jr[s].primaries},getTransfer:function(s){return s===bn?ko:Jr[s].transfer}};function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=Ur("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gs(e[n]/255)*255):e[n]=Gs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ig=0;class _d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=us(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Aa(i[o].image)):r.push(Aa(i[o]))}else r=Aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ng=0;class en extends hs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=pn,i=pn,r=Be,o=ss,a=Pn,l=wi,c=en.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=us(),this.name="",this.source=new _d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qi?ie:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ue:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ue:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ie?Qi:pd}set encoding(t){Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qi?ie:bn}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ad;en.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(p+1)/2,S=(f+1)/2,T=(h+d)/4,E=(u+g)/4,A=(_+m)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=A/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=A/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Og extends hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?ie:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Og{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xd extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fg extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-a;const f=l*d+c*p+h*_+u*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,f*v);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const M=a*v;if(l=l*m+d*M,c=c*m+p*M,h=h*m+_*M,u=u*m+g*M,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-a*p,t[e+2]=c*_+h*p+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,u=l*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new D,Sh=new os;class Xr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox),_s.applyMatrix4(t.matrixWorld),this.union(_s);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Qr.subVectors(this.max,mr),xs.subVectors(t.a,mr),vs.subVectors(t.b,mr),ys.subVectors(t.c,mr),di.subVectors(vs,xs),fi.subVectors(ys,vs),Bi.subVectors(xs,ys);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Bi.z,Bi.y,di.z,0,-di.x,fi.z,0,-fi.x,Bi.z,0,-Bi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Bi.y,Bi.x,0];return!Ra(e,xs,vs,ys,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,xs,vs,ys,Qr))?!1:(to.crossVectors(di,fi),e=[to.x,to.y,to.z],Ra(e,xs,vs,ys,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,_s=new Xr,xs=new D,vs=new D,ys=new D,di=new D,fi=new D,Bi=new D,mr=new D,Qr=new D,to=new D,zi=new D;function Ra(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zi.fromArray(s,r);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bg=new Xr,gr=new D,La=new D;class jr{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(La)),this.expandByPoint(gr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new D,Pa=new D,eo=new D,pi=new D,Da=new D,no=new D,Ua=new D;class sa{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=pi.dot(this.direction),l=-pi.dot(eo),c=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(eo,d),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,r){Da.subVectors(e,t),no.subVectors(n,t),Ua.crossVectors(Da,no);let o=this.direction.dot(Ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(no.crossVectors(pi,no));if(l<0)return null;const c=a*this.direction.dot(Da.cross(pi));if(c<0||l+c>o)return null;const h=-a*pi.dot(Ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,_,g,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,_,g,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,kg)}lookAt(t,e,n){const i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),mi.crossVectors(n,un),mi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),mi.crossVectors(n,un)),mi.normalize(),io.crossVectors(un,mi),i[0]=mi.x,i[4]=io.x,i[8]=un.x,i[1]=mi.y,i[5]=io.y,i[9]=un.y,i[2]=mi.z,i[6]=io.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],v=n[3],x=n[7],M=n[11],S=n[15],T=i[0],E=i[4],A=i[8],y=i[12],b=i[1],N=i[5],B=i[9],k=i[13],L=i[2],O=i[6],z=i[10],W=i[14],tt=i[3],K=i[7],$=i[11],F=i[15];return r[0]=o*T+a*b+l*L+c*tt,r[4]=o*E+a*N+l*O+c*K,r[8]=o*A+a*B+l*z+c*$,r[12]=o*y+a*k+l*W+c*F,r[1]=h*T+u*b+d*L+p*tt,r[5]=h*E+u*N+d*O+p*K,r[9]=h*A+u*B+d*z+p*$,r[13]=h*y+u*k+d*W+p*F,r[2]=_*T+g*b+m*L+f*tt,r[6]=_*E+g*N+m*O+f*K,r[10]=_*A+g*B+m*z+f*$,r[14]=_*y+g*k+m*W+f*F,r[3]=v*T+x*b+M*L+S*tt,r[7]=v*E+x*N+M*O+S*K,r[11]=v*A+x*B+M*z+S*$,r[15]=v*y+x*k+M*W+S*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+g*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],v=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,x=_*d*c-h*m*c-_*l*p+o*m*p+h*l*f-o*d*f,M=h*g*c-_*u*c+_*a*p-o*g*p-h*a*f+o*u*f,S=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,T=e*v+n*x+i*M+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=v*E,t[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*f-n*d*f)*E,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*f+n*l*f)*E,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*E,t[4]=x*E,t[5]=(h*m*r-_*d*r+_*i*p-e*m*p-h*i*f+e*d*f)*E,t[6]=(_*l*r-o*m*r-_*i*c+e*m*c+o*i*f-e*l*f)*E,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*E,t[8]=M*E,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*f-e*u*f)*E,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*f+e*a*f)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*E,t[12]=S*E,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,_=r*u,g=o*h,m=o*u,f=a*u,v=l*c,x=l*h,M=l*u,S=n.x,T=n.y,E=n.z;return i[0]=(1-(g+f))*S,i[1]=(p+M)*S,i[2]=(_-x)*S,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+f))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(_+x)*E,i[9]=(m-v)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),a=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Cn.copy(this);const c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=li){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,_;if(a===li)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=li){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let _,g;if(a===li)_=(o+r)*u,g=-2*u;else if(a===Vo)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new D,Cn=new _e,zg=new D(0,0,0),kg=new D(1,1,1),mi=new D,io=new D,un=new D,Eh=new _e,bh=new os;class ra{constructor(t=0,e=0,n=0,i=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gg=0;const wh=new D,Ss=new os,Jn=new _e,so=new D,_r=new D,Hg=new D,Vg=new os,Th=new D(1,0,0),Ah=new D(0,1,0),Ch=new D(0,0,1),Wg={type:"added"},Xg={type:"removed"};class fe extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new D,e=new ra,n=new os,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(_r,so,this.up):Jn.lookAt(so,_r,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xg)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new D(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new D,Qn=new D,Ia=new D,ti=new D,Es=new D,bs=new D,Rh=new D,Na=new D,Oa=new D,Fa=new D;let ro=!1;class Ln{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Rn.subVectors(i,e),Qn.subVectors(n,e),Ia.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(Ia),c=Qn.dot(Qn),h=Qn.dot(Ia),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(t,e,n,i,r,o,a,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ti),l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),Ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Es.subVectors(i,n),bs.subVectors(r,n),Na.subVectors(t,n);const l=Es.dot(Na),c=bs.dot(Na);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,i);const h=Es.dot(Oa),u=bs.dot(Oa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Es,o);Fa.subVectors(t,r);const p=Es.dot(Fa),_=bs.dot(Fa);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(bs,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Rh.subVectors(r,i),a=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(Rh,a);const f=1/(m+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(Es,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let jg=0;class Ii extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=us(),this.name="",this.type="Material",this.blending=ks,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Jl(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ba(o,r,t+1/3),this.g=Ba(o,r,t),this.b=Ba(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){const n=yd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return Qt.fromWorkingColorSpace(He.copy(this),t),Math.round(De(He.r*255,0,255))*65536+Math.round(De(He.g*255,0,255))*256+Math.round(De(He.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,r=He.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ie){Qt.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(oo);const n=Tr(gi.h,oo.h,e),i=Tr(gi.s,oo.s,e),r=Tr(gi.l,oo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ht;Ht.NAMES=yd;class Xe extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oi=Yg();function Yg(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function qg(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=De(s,-65504,65504),oi.floatView[0]=s;const t=oi.uint32View[0],e=t>>23&511;return oi.baseTable[e]+((t&8388607)>>oi.shiftTable[e])}function $g(s){const t=s>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[t]+(s&1023)]+oi.exponentTable[t],oi.floatView[0]}const ao={toHalfFloat:qg,fromHalfFloat:$g},Le=new D,lo=new st;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRange={offset:0,count:-1},this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Md extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sd extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kg=0;const Mn=new _e,za=new fe,ws=new D,dn=new Xr,xr=new Xr,Fe=new D;class xe extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(md(t)?Sd:Md)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(dn.min,xr.min),dn.expandByPoint(Fe),Fe.addVectors(dn.max,xr.max),dn.expandByPoint(Fe)):(dn.expandByPoint(xr.min),dn.expandByPoint(xr.max))}dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),Fe.add(ws)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new D,h[b]=new D;const u=new D,d=new D,p=new D,_=new st,g=new st,m=new st,f=new D,v=new D;function x(b,N,B){u.fromArray(i,b*3),d.fromArray(i,N*3),p.fromArray(i,B*3),_.fromArray(o,b*2),g.fromArray(o,N*2),m.fromArray(o,B*2),d.sub(u),p.sub(u),g.sub(_),m.sub(_);const k=1/(g.x*m.y-m.x*g.y);isFinite(k)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(k),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(k),c[b].add(f),c[N].add(f),c[B].add(f),h[b].add(v),h[N].add(v),h[B].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,N=M.length;b<N;++b){const B=M[b],k=B.start,L=B.count;for(let O=k,z=k+L;O<z;O+=3)x(n[O+0],n[O+1],n[O+2])}const S=new D,T=new D,E=new D,A=new D;function y(b){E.fromArray(r,b*3),A.copy(E);const N=c[b];S.copy(N),S.sub(E.multiplyScalar(E.dot(N))).normalize(),T.crossVectors(A,N);const k=T.dot(h[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=k}for(let b=0,N=M.length;b<N;++b){const B=M[b],k=B.start,L=B.count;for(let O=k,z=k+L;O<z;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new _e,ki=new sa,co=new jr,Ph=new D,Ts=new D,As=new D,Cs=new D,ka=new D,ho=new D,uo=new st,fo=new st,po=new st,Dh=new D,Uh=new D,Ih=new D,mo=new D,go=new D;class Gt extends fe{constructor(t=new xe,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ka.fromBufferAttribute(u,t),o?ho.addScaledVector(ka,h):ho.addScaledVector(ka.sub(e),h))}e.add(ho)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(co.containsPoint(ki.origin)===!1&&(ki.intersectSphere(co,Ph)===null||ki.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,S=x;M<S;M+=3){const T=a.getX(M),E=a.getX(M+1),A=a.getX(M+2);i=_o(this,f,t,n,c,h,u,T,E,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=_o(this,o,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,S=x;M<S;M+=3){const T=M,E=M+1,A=M+2;i=_o(this,f,t,n,c,h,u,T,E,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,x=m+1,M=m+2;i=_o(this,o,t,n,c,h,u,v,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Zg(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ci,a),l===null)return null;go.copy(a),go.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:s}}function _o(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ts),s.getVertexPosition(l,As),s.getVertexPosition(c,Cs);const h=Zg(s,t,e,n,Ts,As,Cs,mo);if(h){i&&(uo.fromBufferAttribute(i,a),fo.fromBufferAttribute(i,l),po.fromBufferAttribute(i,c),h.uv=Ln.getInterpolation(mo,Ts,As,Cs,uo,fo,po,new st)),r&&(uo.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),h.uv1=Ln.getInterpolation(mo,Ts,As,Cs,uo,fo,po,new st),h.uv2=h.uv1),o&&(Dh.fromBufferAttribute(o,a),Uh.fromBufferAttribute(o,l),Ih.fromBufferAttribute(o,c),h.normal=Ln.getInterpolation(mo,Ts,As,Cs,Dh,Uh,Ih,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Ln.getNormal(Ts,As,Cs,u.normal),h.face=u}return h}class Ie extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function _(g,m,f,v,x,M,S,T,E,A,y){const b=M/E,N=S/A,B=M/2,k=S/2,L=T/2,O=E+1,z=A+1;let W=0,tt=0;const K=new D;for(let $=0;$<z;$++){const F=$*N-k;for(let H=0;H<O;H++){const rt=H*b-B;K[g]=rt*v,K[m]=F*x,K[f]=L,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(H/E),u.push(1-$/A),W+=1}}for(let $=0;$<A;$++)for(let F=0;F<E;F++){const H=d+F+O*$,rt=d+F+O*($+1),ut=d+(F+1)+O*($+1),_t=d+(F+1)+O*$;l.push(H,rt,_t),l.push(rt,ut,_t),tt+=6}a.addGroup(p,tt,y),p+=tt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const n=ir(s[e]);for(const i in n)t[i]=n[i]}return t}function Jg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ed(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const bd={clone:ir,merge:Qe};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wd extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends wd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Ls=1;class e_ extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Rs,Ls,t,e);i.layers=this.layers,this.add(i);const r=new sn(Rs,Ls,t,e);r.layers=this.layers,this.add(r);const o=new sn(Rs,Ls,t,e);o.layers=this.layers,this.add(o);const a=new sn(Rs,Ls,t,e);a.layers=this.layers,this.add(a);const l=new sn(Rs,Ls,t,e);l.layers=this.layers,this.add(l);const c=new sn(Rs,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Td extends en{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n_ extends rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qi?ie:bn),this.texture=new Td(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ie(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Ei});r.uniforms.tEquirect.value=e;const o=new Gt(i,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Be),new e_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ga=new D,i_=new D,s_=new jt;class xi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ga.subVectors(n,e).cross(i_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||s_.getNormalMatrix(t),i=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new jr,xo=new D;class Ql{constructor(t=new xi,e=new xi,n=new xi,i=new xi,r=new xi,o=new xi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+_,M+v).normalize(),n[3].setComponents(l-o,d-h,m-_,M-v).normalize(),n[4].setComponents(l-a,d-u,m-g,M-x).normalize(),e===li)n[5].setComponents(l+a,d+u,m+g,M+x).normalize();else if(e===Vo)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(xo.x=i.normal.x>0?t.max.x:t.min.x,xo.y=i.normal.y>0?t.max.y:t.min.y,xo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function r_(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ci extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let x=0;x<c;x++){const M=x*u-r;_.push(M,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+c*f,M=v+c*(f+1),S=v+1+c*(f+1),T=v+1+c*f;p.push(x,M,T),p.push(M,S,T)}this.setIndex(p),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
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
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,u_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,__=`#ifdef USE_IRIDESCENCE
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
#endif`,x_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
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
} // validated`,C_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,R_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`
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
}`,O_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
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
}`,j_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K_=`uniform bool receiveShadow;
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
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,i0=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,s0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Sx=`#define MATCAP
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
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,bx=`#define NORMAL
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
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,Cx=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Lx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Ix=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:o_,alphahash_pars_fragment:a_,alphamap_fragment:l_,alphamap_pars_fragment:c_,alphatest_fragment:h_,alphatest_pars_fragment:u_,aomap_fragment:d_,aomap_pars_fragment:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:__,bumpmap_pars_fragment:x_,clipping_planes_fragment:v_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:S_,color_fragment:E_,color_pars_fragment:b_,color_pars_vertex:w_,color_vertex:T_,common:A_,cube_uv_reflection_fragment:C_,defaultnormal_vertex:R_,displacementmap_pars_vertex:L_,displacementmap_vertex:P_,emissivemap_fragment:D_,emissivemap_pars_fragment:U_,colorspace_fragment:I_,colorspace_pars_fragment:N_,envmap_fragment:O_,envmap_common_pars_fragment:F_,envmap_pars_fragment:B_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:Z_,envmap_vertex:k_,fog_vertex:G_,fog_pars_vertex:H_,fog_fragment:V_,fog_pars_fragment:W_,gradientmap_pars_fragment:X_,lightmap_fragment:j_,lightmap_pars_fragment:Y_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:$_,lights_pars_begin:K_,lights_toon_fragment:J_,lights_toon_pars_fragment:Q_,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:E0,normal_pars_vertex:b0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:L0,opaque_fragment:P0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:I0,dithering_fragment:N0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:k0,shadowmap_vertex:G0,shadowmask_pars_fragment:H0,skinbase_vertex:V0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:j0,specularmap_fragment:Y0,specularmap_pars_fragment:q0,tonemapping_fragment:$0,tonemapping_pars_fragment:K0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distanceRGBA_vert:ux,distanceRGBA_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:vx,meshlambert_frag:yx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:Ex,meshnormal_frag:bx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Cx,meshtoon_vert:Rx,meshtoon_frag:Lx,points_vert:Px,points_frag:Dx,shadow_vert:Ux,shadow_frag:Ix,sprite_vert:Nx,sprite_frag:Ox},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Qe([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Qe([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Qe([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Qe([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Qe([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Fn.physical={uniforms:Qe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const vo={r:0,b:0,g:0};function Fx(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===na)?(h===void 0&&(h=new Gt(new Ie(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ir(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new ci(2,2),new Ri({name:"BackgroundMaterial",uniforms:ir(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(vo,Ed(s)),n.buffers.color.setClear(vo.r,vo.g,vo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Bx(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(L,O,z,W,tt){let K=!1;if(o){const $=g(W,z,O);c!==$&&(c=$,p(c.object)),K=f(L,W,z,tt),K&&v(L,W,z,tt)}else{const $=O.wireframe===!0;(c.geometry!==W.id||c.program!==z.id||c.wireframe!==$)&&(c.geometry=W.id,c.program=z.id,c.wireframe=$,K=!0)}tt!==null&&e.update(tt,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,A(L,O,z,W),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,O,z){const W=z.wireframe===!0;let tt=a[L.id];tt===void 0&&(tt={},a[L.id]=tt);let K=tt[O.id];K===void 0&&(K={},tt[O.id]=K);let $=K[W];return $===void 0&&($=m(d()),K[W]=$),$}function m(L){const O=[],z=[],W=[];for(let tt=0;tt<i;tt++)O[tt]=0,z[tt]=0,W[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:W,object:L,attributes:{},index:null}}function f(L,O,z,W){const tt=c.attributes,K=O.attributes;let $=0;const F=z.getAttributes();for(const H in F)if(F[H].location>=0){const ut=tt[H];let _t=K[H];if(_t===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;$++}return c.attributesNum!==$||c.index!==W}function v(L,O,z,W){const tt={},K=O.attributes;let $=0;const F=z.getAttributes();for(const H in F)if(F[H].location>=0){let ut=K[H];ut===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor));const _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),tt[H]=_t,$++}c.attributes=tt,c.attributesNum=$,c.index=W}function x(){const L=c.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function M(L){S(L,0)}function S(L,O){const z=c.newAttributes,W=c.enabledAttributes,tt=c.attributeDivisors;z[L]=1,W[L]===0&&(s.enableVertexAttribArray(L),W[L]=1),tt[L]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),tt[L]=O)}function T(){const L=c.newAttributes,O=c.enabledAttributes;for(let z=0,W=O.length;z<W;z++)O[z]!==L[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function E(L,O,z,W,tt,K,$){$===!0?s.vertexAttribIPointer(L,O,z,tt,K):s.vertexAttribPointer(L,O,z,W,tt,K)}function A(L,O,z,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const tt=W.attributes,K=z.getAttributes(),$=O.defaultAttributeValues;for(const F in K){const H=K[F];if(H.location>=0){let rt=tt[F];if(rt===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),rt!==void 0){const ut=rt.normalized,_t=rt.itemSize,Lt=e.get(rt);if(Lt===void 0)continue;const Rt=Lt.buffer,Ct=Lt.type,Kt=Lt.bytesPerElement,te=n.isWebGL2===!0&&(Ct===s.INT||Ct===s.UNSIGNED_INT||rt.gpuType===ld);if(rt.isInterleavedBufferAttribute){const Dt=rt.data,U=Dt.stride,dt=rt.offset;if(Dt.isInstancedInterleavedBuffer){for(let Z=0;Z<H.locationSize;Z++)S(H.location+Z,Dt.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Z=0;Z<H.locationSize;Z++)M(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Z=0;Z<H.locationSize;Z++)E(H.location+Z,_t/H.locationSize,Ct,ut,U*Kt,(dt+_t/H.locationSize*Z)*Kt,te)}else{if(rt.isInstancedBufferAttribute){for(let Dt=0;Dt<H.locationSize;Dt++)S(H.location+Dt,rt.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<H.locationSize;Dt++)M(H.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Dt=0;Dt<H.locationSize;Dt++)E(H.location+Dt,_t/H.locationSize,Ct,ut,_t*Kt,_t/H.locationSize*Dt*Kt,te)}}else if($!==void 0){const ut=$[F];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(H.location,ut);break;case 3:s.vertexAttrib3fv(H.location,ut);break;case 4:s.vertexAttrib4fv(H.location,ut);break;default:s.vertexAttrib1fv(H.location,ut)}}}}T()}function y(){B();for(const L in a){const O=a[L];for(const z in O){const W=O[z];for(const tt in W)_(W[tt].object),delete W[tt];delete O[z]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const z in O){const W=O[z];for(const tt in W)_(W[tt].object),delete W[tt];delete O[z]}delete a[L.id]}function N(L){for(const O in a){const z=a[O];if(z[L.id]===void 0)continue;const W=z[L.id];for(const tt in W)_(W[tt].object),delete W[tt];delete z[L.id]}}function B(){k(),h=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function zx(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function kx(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||t.has("OES_texture_float"),S=x&&M,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function Gx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new xi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,x=v*4;let M=f.clippingState||null;l.value=M,M=h(_,d,x,p);for(let S=0;S!==x;++S)M[S]=e[S];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==g;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Hx(s){let t=new WeakMap;function e(o,a){return a===zo?o.mapping=Qs:a===fl&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zo||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n_(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tc extends wd{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,Nh=[.125,.215,.35,.446,.526,.582],qi=20,Ha=new tc,Oh=new Ht;let Va=null;const Wi=(1+Math.sqrt(5))/2,Ps=1/Wi,Fh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Wi,Ps),new D(0,Wi,-Ps),new D(Ps,0,Wi),new D(-Ps,0,Wi),new D(Wi,Ps,0),new D(-Wi,Ps,0)];class Bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va),t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:ai,format:Pn,colorSpace:Vn,depthBuffer:!1},i=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Wx(r,t,e)}return i}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,i){const a=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oh),h.toneMapping=bi,h.autoClear=!1;const p=new Xe({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),_=new Gt(new Ie,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Oh),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;yo(i,v*x,f>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qs||t.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Fh[(i-1)%Fh.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const f=[];let v=0;for(let E=0;E<qi;++E){const A=E/g,y=Math.exp(-A*A/2);f.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-Ns?i-x+Ns:0),T=4*(this._cubeSize-M);yo(e,S,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Ha)}}function Vx(s){const t=[],e=[],n=[];let i=s;const r=s-Ns+1+Nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ns?l=Nh[o-s+Ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,A=T>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(y,g*_*T),x.set(d,m*_*T);const b=[T,T,T,T,T,T];M.set(b,f*_*T)}const S=new xe;S.setAttribute("position",new je(v,g)),S.setAttribute("uv",new je(x,m)),S.setAttribute("faceIndex",new je(M,f)),t.push(S),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zh(s,t,e){const n=new rs(s,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wx(s,t,e){const n=new Float32Array(qi),i=new D(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function kh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Gh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function Xx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zo||l===fl,h=l===Qs||l===tr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Bh(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Bh(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yx(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,M=v.length;x<M;x+=3){const S=v[x+0],T=v[x+1],E=v[x+2];d.push(S,T,T,E,E,S)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const S=x+0,T=x+1,E=x+2;d.push(S,T,T,E,E,S)}}else return;const m=new(md(d)?Sd:Md)(d,1);m.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qx(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*l),e.update(p,r,1)}function u(d,p,_){if(_===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*l,_),e.update(p,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function $x(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kx(s,t){return s[0]-t[0]}function Zx(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Jx(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ue,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let O=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),S===!0&&(y=3);let b=h.attributes.position.count*y,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const B=new Float32Array(b*N*4*g),k=new xd(B,b,N,g);k.type=Dn,k.needsUpdate=!0;const L=y*4;for(let z=0;z<g;z++){const W=T[z],tt=E[z],K=A[z],$=b*N*4*z;for(let F=0;F<W.count;F++){const H=F*L;x===!0&&(o.fromBufferAttribute(W,F),B[$+H+0]=o.x,B[$+H+1]=o.y,B[$+H+2]=o.z,B[$+H+3]=0),M===!0&&(o.fromBufferAttribute(tt,F),B[$+H+4]=o.x,B[$+H+5]=o.y,B[$+H+6]=o.z,B[$+H+7]=0),S===!0&&(o.fromBufferAttribute(K,F),B[$+H+8]=o.x,B[$+H+9]=o.y,B[$+H+10]=o.z,B[$+H+11]=K.itemSize===4?o.w:1)}}m={count:g,texture:k,size:new st(b,N)},r.set(h,m),h.addEventListener("dispose",O)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[h.id]=g}for(let M=0;M<_;M++){const S=g[M];S[0]=M,S[1]=d[M]}g.sort(Zx);for(let M=0;M<8;M++)M<_&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Kx);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const S=a[M],T=S[0],E=S[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+M)!==m[T]&&h.setAttribute("morphTarget"+M,m[T]),f&&h.getAttribute("morphNormal"+M)!==f[T]&&h.setAttribute("morphNormal"+M,f[T]),i[M]=E,v+=E):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Qx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Cd=new en,Rd=new xd,Ld=new Fg,Pd=new Td,Hh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),jh=new Float32Array(4);function hr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Hh[i];if(r===void 0&&(r=new Float32Array(i),Hh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function oa(s,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ev(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function sv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;jh.set(n),s.uniformMatrix2fv(this.addr,!1,jh),Oe(e,n)}}function rv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Xh.set(n),s.uniformMatrix3fv(this.addr,!1,Xh),Oe(e,n)}}function ov(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Wh.set(n),s.uniformMatrix4fv(this.addr,!1,Wh),Oe(e,n)}}function av(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function uv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function dv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function fv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function mv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Cd,i)}function gv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ld,i)}function _v(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pd,i)}function xv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rd,i)}function vv(s){switch(s){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}function yv(s,t){s.uniform1fv(this.addr,t)}function Mv(s,t){const e=hr(t,this.size,2);s.uniform2fv(this.addr,e)}function Sv(s,t){const e=hr(t,this.size,3);s.uniform3fv(this.addr,e)}function Ev(s,t){const e=hr(t,this.size,4);s.uniform4fv(this.addr,e)}function bv(s,t){const e=hr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wv(s,t){const e=hr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tv(s,t){const e=hr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Av(s,t){s.uniform1iv(this.addr,t)}function Cv(s,t){s.uniform2iv(this.addr,t)}function Rv(s,t){s.uniform3iv(this.addr,t)}function Lv(s,t){s.uniform4iv(this.addr,t)}function Pv(s,t){s.uniform1uiv(this.addr,t)}function Dv(s,t){s.uniform2uiv(this.addr,t)}function Uv(s,t){s.uniform3uiv(this.addr,t)}function Iv(s,t){s.uniform4uiv(this.addr,t)}function Nv(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Cd,r[o])}function Ov(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ld,r[o])}function Fv(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pd,r[o])}function Bv(s,t,e){const n=this.cache,i=t.length,r=oa(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rd,r[o])}function zv(s){switch(s){case 5126:return yv;case 35664:return Mv;case 35665:return Sv;case 35666:return Ev;case 35674:return bv;case 35675:return wv;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Rv;case 35669:case 35673:return Lv;case 5125:return Pv;case 36294:return Dv;case 36295:return Uv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Bv}}class kv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=vv(e.type)}}class Gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=zv(e.type)}}class Hv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Yh(s,t){s.seq.push(t),s.map[t.id]=t}function Vv(s,t,e){const n=s.name,i=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),o=Wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Yh(e,c===void 0?new kv(a,s,t):new Gv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Hv(a),Yh(e,u)),e=u}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Vv(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Wv=0;function Xv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jv(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let n;switch(t===e?n="":t===Ho&&e===Go?n="LinearDisplayP3ToLinearSRGB":t===Go&&e===Ho&&(n="LinearSRGBToLinearDisplayP3"),s){case Vn:case ia:return[n,"LinearTransferOETF"];case ie:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function $h(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Xv(s.getShaderSource(t),o)}else return i}function Yv(s,t){const e=jv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qv(s,t){let e;switch(t){case Wm:e="Linear";break;case Xm:e="Reinhard";break;case jm:e="OptimizedCineon";break;case Ym:e="ACESFilmic";break;case qm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $v(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Kv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Mr(s){return s!==""}function Kh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(s){return s.replace(Jv,ty)}const Qv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ty(s,t){let e=Xt[t];if(e===void 0){const n=Qv.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(s){return s.replace(ey,ny)}function ny(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function sy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ry(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function oy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case od:t="ENVMAP_BLENDING_MULTIPLY";break;case Hm:t="ENVMAP_BLENDING_MIX";break;case Vm:t="ENVMAP_BLENDING_ADD";break}return t}function ay(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ly(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=iy(e),c=sy(e),h=ry(e),u=oy(e),d=ay(e),p=e.isWebGL2?"":$v(e),_=Kv(r),g=i.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(m=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[p,Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==bi?qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Yv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=_l(o),o=Kh(o,e),o=Zh(o,e),a=_l(a),a=Kh(a,e),a=Zh(a,e),o=Jh(o),a=Jh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,M=v+f+a,S=qh(i,i.VERTEX_SHADER,x),T=qh(i,i.FRAGMENT_SHADER,M);if(i.attachShader(g,S),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(T).trim();let B=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,T);else{const L=$h(i,S,"vertex"),O=$h(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+L+`
`+O)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||N==="")&&(k=!1);k&&(this.diagnostics={runnable:B,programLog:y,vertexShader:{log:b,prefix:m},fragmentShader:{log:N,prefix:f}})}i.deleteShader(S),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Po(i,g)),E};let A;return this.getAttributes=function(){return A===void 0&&(A=Zv(i,g)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let cy=0;class hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uy(t),e.set(t,n)),n}}class uy{constructor(t){this.id=cy++,this.code=t,this.usedTimes=0}}function dy(s,t,e,n,i,r,o){const a=new vd,l=new hy,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,N,B,k){const L=B.fog,O=k.geometry,z=y.isMeshStandardMaterial?B.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),tt=W&&W.mapping===na?W.image.height:null,K=_[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,F=$!==void 0?$.length:0;let H=0;O.morphAttributes.position!==void 0&&(H=1),O.morphAttributes.normal!==void 0&&(H=2),O.morphAttributes.color!==void 0&&(H=3);let rt,ut,_t,Lt;if(K){const oe=Fn[K];rt=oe.vertexShader,ut=oe.fragmentShader}else rt=y.vertexShader,ut=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),Lt=l.getFragmentShaderID(y);const Rt=s.getRenderTarget(),Ct=k.isInstancedMesh===!0,Kt=!!y.map,te=!!y.matcap,Dt=!!W,U=!!y.aoMap,dt=!!y.lightMap,Z=!!y.bumpMap,ot=!!y.normalMap,Q=!!y.displacementMap,Tt=!!y.emissiveMap,vt=!!y.metalnessMap,yt=!!y.roughnessMap,It=y.anisotropy>0,Yt=y.clearcoat>0,ce=y.iridescence>0,R=y.sheen>0,w=y.transmission>0,X=It&&!!y.anisotropyMap,it=Yt&&!!y.clearcoatMap,nt=Yt&&!!y.clearcoatNormalMap,at=Yt&&!!y.clearcoatRoughnessMap,Et=ce&&!!y.iridescenceMap,lt=ce&&!!y.iridescenceThicknessMap,xt=R&&!!y.sheenColorMap,I=R&&!!y.sheenRoughnessMap,ct=!!y.specularMap,J=!!y.specularColorMap,Nt=!!y.specularIntensityMap,At=w&&!!y.transmissionMap,Pt=w&&!!y.thicknessMap,bt=!!y.gradientMap,P=!!y.alphaMap,ft=y.alphaTest>0,ht=!!y.alphaHash,gt=!!y.extensions,pt=!!O.attributes.uv1,et=!!O.attributes.uv2,St=!!O.attributes.uv3;let Ot=bi;return y.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ot=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:ut,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:Lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Ct,instancingColor:Ct&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Vn,map:Kt,matcap:te,envMap:Dt,envMapMode:Dt&&W.mapping,envMapCubeUVHeight:tt,aoMap:U,lightMap:dt,bumpMap:Z,normalMap:ot,displacementMap:d&&Q,emissiveMap:Tt,normalMapObjectSpace:ot&&y.normalMapType===ag,normalMapTangentSpace:ot&&y.normalMapType===Kl,metalnessMap:vt,roughnessMap:yt,anisotropy:It,anisotropyMap:X,clearcoat:Yt,clearcoatMap:it,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:ce,iridescenceMap:Et,iridescenceThicknessMap:lt,sheen:R,sheenColorMap:xt,sheenRoughnessMap:I,specularMap:ct,specularColorMap:J,specularIntensityMap:Nt,transmission:w,transmissionMap:At,thicknessMap:Pt,gradientMap:bt,opaque:y.transparent===!1&&y.blending===ks,alphaMap:P,alphaTest:ft,alphaHash:ht,combine:y.combine,mapUv:Kt&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:Z&&g(y.bumpMap.channel),normalMapUv:ot&&g(y.normalMap.channel),displacementMapUv:Q&&g(y.displacementMap.channel),emissiveMapUv:Tt&&g(y.emissiveMap.channel),metalnessMapUv:vt&&g(y.metalnessMap.channel),roughnessMapUv:yt&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:it&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:I&&g(y.sheenRoughnessMap.channel),specularMapUv:ct&&g(y.specularMap.channel),specularColorMapUv:J&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:At&&g(y.transmissionMap.channel),thicknessMapUv:Pt&&g(y.thicknessMap.channel),alphaMapUv:P&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ot||It),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:pt,vertexUv2s:et,vertexUv3s:St,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Kt||P),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:H,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bn,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:gt&&y.extensions.derivatives===!0,extensionFragDepth:gt&&y.extensions.fragDepth===!0,extensionDrawBuffers:gt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(b,y),x(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const b=_[y.type];let N;if(b){const B=Fn[b];N=bd.clone(B.uniforms)}else N=y.uniforms;return N}function S(y,b){let N;for(let B=0,k=c.length;B<k;B++){const L=c[B];if(L.cacheKey===b){N=L,++N.usedTimes;break}}return N===void 0&&(N=new ly(s,b,y,r),c.push(N)),N}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function fy(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function py(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function tu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function eu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,_,g,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function a(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||py),n.length>1&&n.sort(d||tu),i.length>1&&i.sort(d||tu)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function my(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new eu,s.set(n,[o])):i>=r.length?(o=new eu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function gy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function _y(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xy=0;function vy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yy(s,t){const e=new gy,n=_y(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,o=new _e,a=new _e;function l(h,u){let d=0,p=0,_=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,m=0,f=0,v=0,x=0,M=0,S=0,T=0,E=0,A=0,y=0;h.sort(vy);const b=u===!0?Math.PI:1;for(let B=0,k=h.length;B<k;B++){const L=h[B],O=L.color,z=L.intensity,W=L.distance,tt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*z*b,p+=O.g*z*b,_+=O.b*z*b;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],z);y++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const $=L.shadow,F=n.get(L);F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=L.shadow.matrix,M++}i.directional[g]=K,g++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(O).multiplyScalar(z*b),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[f]=K;const $=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,$.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[f]=$.matrix,L.castShadow){const F=n.get(L);F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,i.spotShadow[f]=F,i.spotShadowMap[f]=tt,T++}f++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(O).multiplyScalar(z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=K,v++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),K.distance=L.distance,K.decay=L.decay,L.castShadow){const $=L.shadow,F=n.get(L);F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,F.shadowCameraNear=$.camera.near,F.shadowCameraFar=$.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=K,m++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(z*b),K.groundColor.copy(L.groundColor).multiplyScalar(z*b),i.hemi[x]=K,x++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==T||N.numSpotMaps!==E||N.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=y,N.directionalLength=g,N.pointLength=m,N.spotLength=f,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=T,N.numSpotMaps=E,N.numLightProbes=y,i.version=xy++)}function c(h,u){let d=0,p=0,_=0,g=0,m=0;const f=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(M.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function nu(s,t){const e=new yy(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function My(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new nu(s,t),e.set(r,[l])):o>=a.length?(l=new nu(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Sy extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ey extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const by=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
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
}`;function Ty(s,t,e){let n=new Ql;const i=new st,r=new st,o=new ue,a=new Sy({depthPacking:og}),l=new Ey,c={},h=e.maxTextureSize,u={[Ci]:We,[We]:Ci,[Bn]:Bn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:by,fragmentShader:wy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new xe;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Gt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let f=this.type;this.render=function(S,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const A=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ei),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==ni&&this.type===ni,k=f===ni&&this.type!==ni;for(let L=0,O=S.length;L<O;L++){const z=S[L],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();if(i.multiply(tt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y)),W.map===null||B===!0||k===!0){const $=this.type!==ni?{minFilter:be,magFilter:be}:{};W.map!==null&&W.map.dispose(),W.map=new rs(i.x,i.y,$),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const K=W.getViewportCount();for(let $=0;$<K;$++){const F=W.getViewport($);o.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),N.viewport(o),W.updateMatrices(z,$),n=W.getFrustum(),M(T,E,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&v(W,E),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(A,y,b)};function v(S,T){const E=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new rs(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,E,d,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,E,p,g,null)}function x(S,T,E,A){let y=null;const b=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)y=b;else if(y=E.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=y.uuid,B=T.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let L=k[B];L===void 0&&(L=y.clone(),k[B]=L),y=L}if(y.visible=T.visible,y.wireframe=T.wireframe,A===ni?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=E}return y}function M(S,T,E,A,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const B=t.update(S),k=S.material;if(Array.isArray(k)){const L=B.groups;for(let O=0,z=L.length;O<z;O++){const W=L[O],tt=k[W.materialIndex];if(tt&&tt.visible){const K=x(S,tt,A,y);s.renderBufferDirect(E,null,B,K,S,W)}}}else if(k.visible){const L=x(S,k,A,y);s.renderBufferDirect(E,null,B,L,S,null)}}const N=S.children;for(let B=0,k=N.length;B<k;B++)M(N[B],T,E,A,y)}}function Ay(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const ft=new ue;let ht=null;const gt=new ue(0,0,0,0);return{setMask:function(pt){ht!==pt&&!P&&(s.colorMask(pt,pt,pt,pt),ht=pt)},setLocked:function(pt){P=pt},setClear:function(pt,et,St,Ot,Ae){Ae===!0&&(pt*=Ot,et*=Ot,St*=Ot),ft.set(pt,et,St,Ot),gt.equals(ft)===!1&&(s.clearColor(pt,et,St,Ot),gt.copy(ft))},reset:function(){P=!1,ht=null,gt.set(-1,0,0,0)}}}function r(){let P=!1,ft=null,ht=null,gt=null;return{setTest:function(pt){pt?Rt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(pt){ft!==pt&&!P&&(s.depthMask(pt),ft=pt)},setFunc:function(pt){if(ht!==pt){switch(pt){case Nm:s.depthFunc(s.NEVER);break;case Om:s.depthFunc(s.ALWAYS);break;case Fm:s.depthFunc(s.LESS);break;case dl:s.depthFunc(s.LEQUAL);break;case Bm:s.depthFunc(s.EQUAL);break;case zm:s.depthFunc(s.GEQUAL);break;case km:s.depthFunc(s.GREATER);break;case Gm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=pt}},setLocked:function(pt){P=pt},setClear:function(pt){gt!==pt&&(s.clearDepth(pt),gt=pt)},reset:function(){P=!1,ft=null,ht=null,gt=null}}}function o(){let P=!1,ft=null,ht=null,gt=null,pt=null,et=null,St=null,Ot=null,Ae=null;return{setTest:function(oe){P||(oe?Rt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(oe){ft!==oe&&!P&&(s.stencilMask(oe),ft=oe)},setFunc:function(oe,Un,Ke){(ht!==oe||gt!==Un||pt!==Ke)&&(s.stencilFunc(oe,Un,Ke),ht=oe,gt=Un,pt=Ke)},setOp:function(oe,Un,Ke){(et!==oe||St!==Un||Ot!==Ke)&&(s.stencilOp(oe,Un,Ke),et=oe,St=Un,Ot=Ke)},setLocked:function(oe){P=oe},setClear:function(oe){Ae!==oe&&(s.clearStencil(oe),Ae=oe)},reset:function(){P=!1,ft=null,ht=null,gt=null,pt=null,et=null,St=null,Ot=null,Ae=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,M=null,S=null,T=null,E=null,A=null,y=!1,b=null,N=null,B=null,k=null,L=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=W>=2);let K=null,$={};const F=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),rt=new ue().fromArray(F),ut=new ue().fromArray(H);function _t(P,ft,ht,gt){const pt=new Uint8Array(4),et=s.createTexture();s.bindTexture(P,et),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<ht;St++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ft,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ft+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return et}const Lt={};Lt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(s.DEPTH_TEST),l.setFunc(dl),Q(!1),Tt(zc),Rt(s.CULL_FACE),Z(Ei);function Rt(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function Ct(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Kt(P,ft){return p[P]!==ft?(s.bindFramebuffer(P,ft),p[P]=ft,n&&(P===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ft),P===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ft)),!0):!1}function te(P,ft){let ht=g,gt=!1;if(P)if(ht=_.get(ft),ht===void 0&&(ht=[],_.set(ft,ht)),P.isWebGLMultipleRenderTargets){const pt=P.texture;if(ht.length!==pt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let et=0,St=pt.length;et<St;et++)ht[et]=s.COLOR_ATTACHMENT0+et;ht.length=pt.length,gt=!0}}else ht[0]!==s.COLOR_ATTACHMENT0&&(ht[0]=s.COLOR_ATTACHMENT0,gt=!0);else ht[0]!==s.BACK&&(ht[0]=s.BACK,gt=!0);gt&&(e.isWebGL2?s.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function Dt(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const U={[Us]:s.FUNC_ADD,[bm]:s.FUNC_SUBTRACT,[wm]:s.FUNC_REVERSE_SUBTRACT};if(n)U[Hc]=s.MIN,U[Vc]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(U[Hc]=P.MIN_EXT,U[Vc]=P.MAX_EXT)}const dt={[Tm]:s.ZERO,[Am]:s.ONE,[Cm]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Im]:s.SRC_ALPHA_SATURATE,[Dm]:s.DST_COLOR,[Lm]:s.DST_ALPHA,[Rm]:s.ONE_MINUS_SRC_COLOR,[rd]:s.ONE_MINUS_SRC_ALPHA,[Um]:s.ONE_MINUS_DST_COLOR,[Pm]:s.ONE_MINUS_DST_ALPHA};function Z(P,ft,ht,gt,pt,et,St,Ot){if(P===Ei){f===!0&&(Ct(s.BLEND),f=!1);return}if(f===!1&&(Rt(s.BLEND),f=!0),P!==Em){if(P!==v||Ot!==y){if((x!==Us||T!==Us)&&(s.blendEquation(s.FUNC_ADD),x=Us,T=Us),Ot)switch(P){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,E=null,A=null,v=P,y=Ot}return}pt=pt||ft,et=et||ht,St=St||gt,(ft!==x||pt!==T)&&(s.blendEquationSeparate(U[ft],U[pt]),x=ft,T=pt),(ht!==M||gt!==S||et!==E||St!==A)&&(s.blendFuncSeparate(dt[ht],dt[gt],dt[et],dt[St]),M=ht,S=gt,E=et,A=St),v=P,y=!1}function ot(P,ft){P.side===Bn?Ct(s.CULL_FACE):Rt(s.CULL_FACE);let ht=P.side===We;ft&&(ht=!ht),Q(ht),P.blending===ks&&P.transparent===!1?Z(Ei):Z(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const gt=P.stencilWrite;c.setTest(gt),gt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),yt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(P){b!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),b=P)}function Tt(P){P!==Mm?(Rt(s.CULL_FACE),P!==N&&(P===zc?s.cullFace(s.BACK):P===Sm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),N=P}function vt(P){P!==B&&(z&&s.lineWidth(P),B=P)}function yt(P,ft,ht){P?(Rt(s.POLYGON_OFFSET_FILL),(k!==ft||L!==ht)&&(s.polygonOffset(ft,ht),k=ft,L=ht)):Ct(s.POLYGON_OFFSET_FILL)}function It(P){P?Rt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function Yt(P){P===void 0&&(P=s.TEXTURE0+O-1),K!==P&&(s.activeTexture(P),K=P)}function ce(P,ft,ht){ht===void 0&&(K===null?ht=s.TEXTURE0+O-1:ht=K);let gt=$[ht];gt===void 0&&(gt={type:void 0,texture:void 0},$[ht]=gt),(gt.type!==P||gt.texture!==ft)&&(K!==ht&&(s.activeTexture(ht),K=ht),s.bindTexture(P,ft||Lt[P]),gt.type=P,gt.texture=ft)}function R(){const P=$[K];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function w(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(P){rt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),rt.copy(P))}function Nt(P){ut.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ut.copy(P))}function At(P,ft){let ht=u.get(ft);ht===void 0&&(ht=new WeakMap,u.set(ft,ht));let gt=ht.get(P);gt===void 0&&(gt=s.getUniformBlockIndex(ft,P.name),ht.set(P,gt))}function Pt(P,ft){const gt=u.get(ft).get(P);h.get(ft)!==gt&&(s.uniformBlockBinding(ft,gt,P.__bindingPointIndex),h.set(ft,gt))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},K=null,$={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,M=null,S=null,T=null,E=null,A=null,y=!1,b=null,N=null,B=null,k=null,L=null,rt.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:Ct,bindFramebuffer:Kt,drawBuffers:te,useProgram:Dt,setBlending:Z,setMaterial:ot,setFlipSided:Q,setCullFace:Tt,setLineWidth:vt,setPolygonOffset:yt,setScissorTest:It,activeTexture:Yt,bindTexture:ce,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:I,texImage3D:ct,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:lt,texStorage3D:xt,texSubImage2D:it,texSubImage3D:nt,compressedTexSubImage2D:at,compressedTexSubImage3D:Et,scissor:J,viewport:Nt,reset:bt}}function Cy(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return f?new OffscreenCanvas(R,w):Ur("canvas")}function x(R,w,X,it){let nt=1;if((R.width>it||R.height>it)&&(nt=it/Math.max(R.width,R.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const at=w?Wo:Math.floor,Et=at(nt*R.width),lt=at(nt*R.height);g===void 0&&(g=v(Et,lt));const xt=X?v(Et,lt):g;return xt.width=Et,xt.height=lt,xt.getContext("2d").drawImage(R,0,0,Et,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Et+"x"+lt+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return gl(R.width)&&gl(R.height)}function S(R){return a?!1:R.wrapS!==pn||R.wrapT!==pn||R.minFilter!==be&&R.minFilter!==Be}function T(R,w){return R.generateMipmaps&&w&&R.minFilter!==be&&R.minFilter!==Be}function E(R){s.generateMipmap(R)}function A(R,w,X,it,nt=!1){if(a===!1)return w;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=w;if(w===s.RED&&(X===s.FLOAT&&(at=s.R32F),X===s.HALF_FLOAT&&(at=s.R16F),X===s.UNSIGNED_BYTE&&(at=s.R8)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.R8UI),X===s.UNSIGNED_SHORT&&(at=s.R16UI),X===s.UNSIGNED_INT&&(at=s.R32UI),X===s.BYTE&&(at=s.R8I),X===s.SHORT&&(at=s.R16I),X===s.INT&&(at=s.R32I)),w===s.RG&&(X===s.FLOAT&&(at=s.RG32F),X===s.HALF_FLOAT&&(at=s.RG16F),X===s.UNSIGNED_BYTE&&(at=s.RG8)),w===s.RGBA){const Et=nt?ko:Qt.getTransfer(it);X===s.FLOAT&&(at=s.RGBA32F),X===s.HALF_FLOAT&&(at=s.RGBA16F),X===s.UNSIGNED_BYTE&&(at=Et===ae?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(R,w,X){return T(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==be&&R.minFilter!==Be?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function b(R){return R===be||R===Wc||R===xa?s.NEAREST:s.LINEAR}function N(R){const w=R.target;w.removeEventListener("dispose",N),k(w),w.isVideoTexture&&_.delete(w)}function B(R){const w=R.target;w.removeEventListener("dispose",B),O(w)}function k(R){const w=n.get(R);if(w.__webglInit===void 0)return;const X=R.source,it=m.get(X);if(it){const nt=it[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(R),Object.keys(it).length===0&&m.delete(X)}n.remove(R)}function L(R){const w=n.get(R);s.deleteTexture(w.__webglTexture);const X=R.source,it=m.get(X);delete it[w.__cacheKey],o.memory.textures--}function O(R){const w=R.texture,X=n.get(R),it=n.get(w);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(X.__webglFramebuffer[nt]))for(let at=0;at<X.__webglFramebuffer[nt].length;at++)s.deleteFramebuffer(X.__webglFramebuffer[nt][at]);else s.deleteFramebuffer(X.__webglFramebuffer[nt]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[nt])}else{if(Array.isArray(X.__webglFramebuffer))for(let nt=0;nt<X.__webglFramebuffer.length;nt++)s.deleteFramebuffer(X.__webglFramebuffer[nt]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let nt=0,at=w.length;nt<at;nt++){const Et=n.get(w[nt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(R)}let z=0;function W(){z=0}function tt(){const R=z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),z+=1,R}function K(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function $(R,w){const X=n.get(R);if(R.isVideoTexture&&Yt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const it=R.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(X,R,w);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function F(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Kt(X,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function H(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Kt(X,R,w);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function rt(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){te(X,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const ut={[Ue]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[pl]:s.MIRRORED_REPEAT},_t={[be]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[$m]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},Lt={[cg]:s.NEVER,[gg]:s.ALWAYS,[hg]:s.LESS,[dg]:s.LEQUAL,[ug]:s.EQUAL,[mg]:s.GEQUAL,[fg]:s.GREATER,[pg]:s.NOTEQUAL};function Rt(R,w,X){if(X?(s.texParameteri(R,s.TEXTURE_WRAP_S,ut[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ut[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ut[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_t[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_t[w.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==pn||w.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,b(w.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==be&&w.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===be||w.minFilter!==xa&&w.minFilter!==ss||w.type===Dn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ai&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(R,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ct(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N));const it=w.source;let nt=m.get(it);nt===void 0&&(nt={},m.set(it,nt));const at=K(w);if(at!==R.__cacheKey){nt[at]===void 0&&(nt[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[at].usedTimes++;const Et=nt[R.__cacheKey];Et!==void 0&&(nt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&L(w)),R.__cacheKey=at,R.__webglTexture=nt[at].texture}return X}function Kt(R,w,X){let it=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=s.TEXTURE_3D);const nt=Ct(R,w),at=w.source;e.bindTexture(it,R.__webglTexture,s.TEXTURE0+X);const Et=n.get(at);if(at.version!==Et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const lt=Qt.getPrimaries(Qt.workingColorSpace),xt=w.colorSpace===bn?null:Qt.getPrimaries(w.colorSpace),I=w.colorSpace===bn||lt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const ct=S(w)&&M(w.image)===!1;let J=x(w.image,ct,!1,h);J=ce(w,J);const Nt=M(J)||a,At=r.convert(w.format,w.colorSpace);let Pt=r.convert(w.type),bt=A(w.internalFormat,At,Pt,w.colorSpace,w.isVideoTexture);Rt(it,w,Nt);let P;const ft=w.mipmaps,ht=a&&w.isVideoTexture!==!0,gt=Et.__version===void 0||nt===!0,pt=y(w,J,Nt);if(w.isDepthTexture)bt=s.DEPTH_COMPONENT,a?w.type===Dn?bt=s.DEPTH_COMPONENT32F:w.type===vi?bt=s.DEPTH_COMPONENT24:w.type===Zi?bt=s.DEPTH24_STENCIL8:bt=s.DEPTH_COMPONENT16:w.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ji&&bt===s.DEPTH_COMPONENT&&w.type!==$l&&w.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=vi,Pt=r.convert(w.type)),w.format===er&&bt===s.DEPTH_COMPONENT&&(bt=s.DEPTH_STENCIL,w.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zi,Pt=r.convert(w.type))),gt&&(ht?e.texStorage2D(s.TEXTURE_2D,1,bt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,bt,J.width,J.height,0,At,Pt,null));else if(w.isDataTexture)if(ft.length>0&&Nt){ht&&gt&&e.texStorage2D(s.TEXTURE_2D,pt,bt,ft[0].width,ft[0].height);for(let et=0,St=ft.length;et<St;et++)P=ft[et],ht?e.texSubImage2D(s.TEXTURE_2D,et,0,0,P.width,P.height,At,Pt,P.data):e.texImage2D(s.TEXTURE_2D,et,bt,P.width,P.height,0,At,Pt,P.data);w.generateMipmaps=!1}else ht?(gt&&e.texStorage2D(s.TEXTURE_2D,pt,bt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,At,Pt,J.data)):e.texImage2D(s.TEXTURE_2D,0,bt,J.width,J.height,0,At,Pt,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ht&&gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,ft[0].width,ft[0].height,J.depth);for(let et=0,St=ft.length;et<St;et++)P=ft[et],w.format!==Pn?At!==null?ht?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,P.width,P.height,J.depth,At,P.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,bt,P.width,P.height,J.depth,0,P.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,P.width,P.height,J.depth,At,Pt,P.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,bt,P.width,P.height,J.depth,0,At,Pt,P.data)}else{ht&&gt&&e.texStorage2D(s.TEXTURE_2D,pt,bt,ft[0].width,ft[0].height);for(let et=0,St=ft.length;et<St;et++)P=ft[et],w.format!==Pn?At!==null?ht?e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,P.width,P.height,At,P.data):e.compressedTexImage2D(s.TEXTURE_2D,et,bt,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage2D(s.TEXTURE_2D,et,0,0,P.width,P.height,At,Pt,P.data):e.texImage2D(s.TEXTURE_2D,et,bt,P.width,P.height,0,At,Pt,P.data)}else if(w.isDataArrayTexture)ht?(gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,At,Pt,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,J.width,J.height,J.depth,0,At,Pt,J.data);else if(w.isData3DTexture)ht?(gt&&e.texStorage3D(s.TEXTURE_3D,pt,bt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,At,Pt,J.data)):e.texImage3D(s.TEXTURE_3D,0,bt,J.width,J.height,J.depth,0,At,Pt,J.data);else if(w.isFramebufferTexture){if(gt)if(ht)e.texStorage2D(s.TEXTURE_2D,pt,bt,J.width,J.height);else{let et=J.width,St=J.height;for(let Ot=0;Ot<pt;Ot++)e.texImage2D(s.TEXTURE_2D,Ot,bt,et,St,0,At,Pt,null),et>>=1,St>>=1}}else if(ft.length>0&&Nt){ht&&gt&&e.texStorage2D(s.TEXTURE_2D,pt,bt,ft[0].width,ft[0].height);for(let et=0,St=ft.length;et<St;et++)P=ft[et],ht?e.texSubImage2D(s.TEXTURE_2D,et,0,0,At,Pt,P):e.texImage2D(s.TEXTURE_2D,et,bt,At,Pt,P);w.generateMipmaps=!1}else ht?(gt&&e.texStorage2D(s.TEXTURE_2D,pt,bt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Pt,J)):e.texImage2D(s.TEXTURE_2D,0,bt,At,Pt,J);T(w,Nt)&&E(it),Et.__version=at.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function te(R,w,X){if(w.image.length!==6)return;const it=Ct(R,w),nt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);const at=n.get(nt);if(nt.version!==at.__version||it===!0){e.activeTexture(s.TEXTURE0+X);const Et=Qt.getPrimaries(Qt.workingColorSpace),lt=w.colorSpace===bn?null:Qt.getPrimaries(w.colorSpace),xt=w.colorSpace===bn||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const I=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,J=[];for(let et=0;et<6;et++)!I&&!ct?J[et]=x(w.image[et],!1,!0,c):J[et]=ct?w.image[et].image:w.image[et],J[et]=ce(w,J[et]);const Nt=J[0],At=M(Nt)||a,Pt=r.convert(w.format,w.colorSpace),bt=r.convert(w.type),P=A(w.internalFormat,Pt,bt,w.colorSpace),ft=a&&w.isVideoTexture!==!0,ht=at.__version===void 0||it===!0;let gt=y(w,Nt,At);Rt(s.TEXTURE_CUBE_MAP,w,At);let pt;if(I){ft&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,P,Nt.width,Nt.height);for(let et=0;et<6;et++){pt=J[et].mipmaps;for(let St=0;St<pt.length;St++){const Ot=pt[St];w.format!==Pn?Pt!==null?ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,Ot.width,Ot.height,Pt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,P,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,Ot.width,Ot.height,Pt,bt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,P,Ot.width,Ot.height,0,Pt,bt,Ot.data)}}}else{pt=w.mipmaps,ft&&ht&&(pt.length>0&&gt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,P,J[0].width,J[0].height));for(let et=0;et<6;et++)if(ct){ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,J[et].width,J[et].height,Pt,bt,J[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,P,J[et].width,J[et].height,0,Pt,bt,J[et].data);for(let St=0;St<pt.length;St++){const Ae=pt[St].image[et].image;ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Ae.width,Ae.height,Pt,bt,Ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,P,Ae.width,Ae.height,0,Pt,bt,Ae.data)}}else{ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt,bt,J[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,P,Pt,bt,J[et]);for(let St=0;St<pt.length;St++){const Ot=pt[St];ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Pt,bt,Ot.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,P,Pt,bt,Ot.image[et])}}}T(w,At)&&E(s.TEXTURE_CUBE_MAP),at.__version=nt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Dt(R,w,X,it,nt,at){const Et=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),xt=A(X.internalFormat,Et,lt,X.colorSpace);if(!n.get(w).__hasExternalTextures){const ct=Math.max(1,w.width>>at),J=Math.max(1,w.height>>at);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,xt,ct,J,w.depth,0,Et,lt,null):e.texImage2D(nt,at,xt,ct,J,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),It(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,nt,n.get(X).__webglTexture,0,yt(w)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,nt,n.get(X).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function U(R,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let it=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||It(w)){const nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Dn?it=s.DEPTH_COMPONENT32F:nt.type===vi&&(it=s.DEPTH_COMPONENT24));const at=yt(w);It(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,it,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,it,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const it=yt(w);X&&It(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):It(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<it.length;nt++){const at=it[nt],Et=r.convert(at.format,at.colorSpace),lt=r.convert(at.type),xt=A(at.internalFormat,Et,lt,at.colorSpace),I=yt(w);X&&It(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,xt,w.width,w.height):It(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,xt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,xt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,nt=yt(w);if(w.depthTexture.format===Ji)It(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===er)It(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Z(R){const w=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");dt(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=s.createRenderbuffer(),U(w.__webglDepthbuffer[it],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),U(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(R,w,X){const it=n.get(R);w!==void 0&&Dt(it.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Z(R)}function Q(R){const w=R.texture,X=n.get(R),it=n.get(w);R.addEventListener("dispose",B),R.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,o.memory.textures++);const nt=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Et=M(R)||a;if(nt){X.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[lt]=[];for(let xt=0;xt<w.mipmaps.length;xt++)X.__webglFramebuffer[lt][xt]=s.createFramebuffer()}else X.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)X.__webglFramebuffer[lt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(at)if(i.drawBuffers){const lt=R.texture;for(let xt=0,I=lt.length;xt<I;xt++){const ct=n.get(lt[xt]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&It(R)===!1){const lt=at?w:[w];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<lt.length;xt++){const I=lt[xt];X.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const ct=r.convert(I.format,I.colorSpace),J=r.convert(I.type),Nt=A(I.internalFormat,ct,J,I.colorSpace,R.isXRRenderTarget===!0),At=yt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Nt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),U(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,w,Et);for(let lt=0;lt<6;lt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Dt(X.__webglFramebuffer[lt][xt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else Dt(X.__webglFramebuffer[lt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);T(w,Et)&&E(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const lt=R.texture;for(let xt=0,I=lt.length;xt<I;xt++){const ct=lt[xt],J=n.get(ct);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),Rt(s.TEXTURE_2D,ct,Et),Dt(X.__webglFramebuffer,R,ct,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),T(ct,Et)&&E(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?lt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,it.__webglTexture),Rt(lt,w,Et),a&&w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Dt(X.__webglFramebuffer[xt],R,w,s.COLOR_ATTACHMENT0,lt,xt);else Dt(X.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,lt,0);T(w,Et)&&E(lt),e.unbindTexture()}R.depthBuffer&&Z(R)}function Tt(R){const w=M(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let it=0,nt=X.length;it<nt;it++){const at=X[it];if(T(at,w)){const Et=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(at).__webglTexture;e.bindTexture(Et,lt),E(Et),e.unbindTexture()}}}function vt(R){if(a&&R.samples>0&&It(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,it=R.height;let nt=s.COLOR_BUFFER_BIT;const at=[],Et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(R),xt=R.isWebGLMultipleRenderTargets===!0;if(xt)for(let I=0;I<w.length;I++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let I=0;I<w.length;I++){at.push(s.COLOR_ATTACHMENT0+I),R.depthBuffer&&at.push(Et);const ct=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(ct===!1&&(R.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),xt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[I]),ct===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Et]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Et])),xt){const J=n.get(w[I]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,X,it,0,0,X,it,nt,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let I=0;I<w.length;I++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,lt.__webglColorRenderbuffer[I]);const ct=n.get(w[I]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function yt(R){return Math.min(u,R.samples)}function It(R){const w=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Yt(R){const w=o.render.frame;_.get(R)!==w&&(_.set(R,w),R.update())}function ce(R,w){const X=R.colorSpace,it=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ml||X!==Vn&&X!==bn&&(Qt.getTransfer(X)===ae?a===!1?t.has("EXT_sRGB")===!0&&it===Pn?(R.format=ml,R.minFilter=Be,R.generateMipmaps=!1):w=gd.sRGBToLinear(w):(it!==Pn||nt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=tt,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=rt,this.rebindTextures=ot,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=It}function Ry(s,t,e){const n=e.isWebGL2;function i(r,o=bn){let a;const l=Qt.getTransfer(o);if(r===wi)return s.UNSIGNED_BYTE;if(r===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Km)return s.BYTE;if(r===Zm)return s.SHORT;if(r===$l)return s.UNSIGNED_SHORT;if(r===ld)return s.INT;if(r===vi)return s.UNSIGNED_INT;if(r===Dn)return s.FLOAT;if(r===ai)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jm)return s.ALPHA;if(r===Pn)return s.RGBA;if(r===Qm)return s.LUMINANCE;if(r===tg)return s.LUMINANCE_ALPHA;if(r===Ji)return s.DEPTH_COMPONENT;if(r===er)return s.DEPTH_STENCIL;if(r===ml)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===eg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===ng)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===va||r===ya||r===Ma||r===Sa)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xc||r===jc||r===Yc||r===qc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ig)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$c||r===Kc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$c)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zc||r===Jc||r===Qc||r===th||r===eh||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch||r===hh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qc)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ih)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hh)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ea||r===uh||r===dh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ea)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sg||r===fh||r===ph||r===mh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ea)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ph)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ly extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $i extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Py={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Py)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dy extends en{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=vi),n===void 0&&h===er&&(n=Zi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uy extends hs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=e.getContextAttributes();let m=null,f=null;const v=[],x=[],M=new sn;M.layers.enable(1),M.viewport=new ue;const S=new sn;S.layers.enable(2),S.viewport=new ue;const T=[M,S],E=new Ly;E.layers.enable(1),E.layers.enable(2);let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let H=v[F];return H===void 0&&(H=new Xa,v[F]=H),H.getTargetRaySpace()},this.getControllerGrip=function(F){let H=v[F];return H===void 0&&(H=new Xa,v[F]=H),H.getGripSpace()},this.getHand=function(F){let H=v[F];return H===void 0&&(H=new Xa,v[F]=H),H.getHandSpace()};function b(F){const H=x.indexOf(F.inputSource);if(H===-1)return;const rt=v[H];rt!==void 0&&(rt.update(F.inputSource,F.frame,c||o),rt.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",B);for(let F=0;F<v.length;F++){const H=x[F];H!==null&&(x[F]=null,v[F].disconnect(H))}A=null,y=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",N),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:p}),f=new rs(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,rt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=g.stencil?er:Ji,rt=g.stencil?Zi:vi);const _t={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),f=new rs(d.textureWidth,d.textureHeight,{format:Pn,type:wi,depthTexture:new Dy(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Lt=t.properties.get(f);Lt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(F){for(let H=0;H<F.removed.length;H++){const rt=F.removed[H],ut=x.indexOf(rt);ut>=0&&(x[ut]=null,v[ut].disconnect(rt))}for(let H=0;H<F.added.length;H++){const rt=F.added[H];let ut=x.indexOf(rt);if(ut===-1){for(let Lt=0;Lt<v.length;Lt++)if(Lt>=x.length){x.push(rt),ut=Lt;break}else if(x[Lt]===null){x[Lt]=rt,ut=Lt;break}if(ut===-1)break}const _t=v[ut];_t&&_t.connect(rt)}}const k=new D,L=new D;function O(F,H,rt){k.setFromMatrixPosition(H.matrixWorld),L.setFromMatrixPosition(rt.matrixWorld);const ut=k.distanceTo(L),_t=H.projectionMatrix.elements,Lt=rt.projectionMatrix.elements,Rt=_t[14]/(_t[10]-1),Ct=_t[14]/(_t[10]+1),Kt=(_t[9]+1)/_t[5],te=(_t[9]-1)/_t[5],Dt=(_t[8]-1)/_t[0],U=(Lt[8]+1)/Lt[0],dt=Rt*Dt,Z=Rt*U,ot=ut/(-Dt+U),Q=ot*-Dt;H.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Q),F.translateZ(ot),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Tt=Rt+ot,vt=Ct+ot,yt=dt-Q,It=Z+(ut-Q),Yt=Kt*Ct/vt*Tt,ce=te*Ct/vt*Tt;F.projectionMatrix.makePerspective(yt,It,Yt,ce,Tt,vt),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function z(F,H){H===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(H.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;E.near=S.near=M.near=F.near,E.far=S.far=M.far=F.far,(A!==E.near||y!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,y=E.far);const H=F.parent,rt=E.cameras;z(E,H);for(let ut=0;ut<rt.length;ut++)z(rt[ut],H);rt.length===2?O(E,M,S):E.projectionMatrix.copy(M.projectionMatrix),W(F,E,H)};function W(F,H,rt){rt===null?F.matrix.copy(H.matrixWorld):(F.matrix.copy(rt.matrixWorld),F.matrix.invert(),F.matrix.multiply(H.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(H.projectionMatrix),F.projectionMatrixInverse.copy(H.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=nr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let tt=null;function K(F,H){if(h=H.getViewerPose(c||o),_=H,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ut=!1;rt.length!==E.cameras.length&&(E.cameras.length=0,ut=!0);for(let _t=0;_t<rt.length;_t++){const Lt=rt[_t];let Rt=null;if(p!==null)Rt=p.getViewport(Lt);else{const Kt=u.getViewSubImage(d,Lt);Rt=Kt.viewport,_t===0&&(t.setRenderTargetTextures(f,Kt.colorTexture,d.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(f))}let Ct=T[_t];Ct===void 0&&(Ct=new sn,Ct.layers.enable(_t),Ct.viewport=new ue,T[_t]=Ct),Ct.matrix.fromArray(Lt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Lt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),_t===0&&(E.matrix.copy(Ct.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ut===!0&&E.cameras.push(Ct)}}for(let rt=0;rt<v.length;rt++){const ut=x[rt],_t=v[rt];ut!==null&&_t!==void 0&&_t.update(ut,H,c||o)}tt&&tt(F,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),_=null}const $=new Ad;$.setAnimationLoop(K),this.setAnimationLoop=function(F){tt=F},this.dispose=function(){}}}function Iy(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ed(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ny(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(v,S);const T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const x=u();v.__bindingPointIndex=x;const M=s.createBuffer(),S=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],M=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=M.length;T<E;T++){const A=M[T];if(p(A,T,S)===!0){const y=A.__offset,b=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let B=0;B<b.length;B++){const k=b[B],L=g(k);typeof k=="number"?(A.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,y+N,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=k.elements[0],A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=k.elements[0],A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=k.elements[0]):(k.toArray(A.__data,N),N+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,y,A.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,x,M){const S=v.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const T=Array.isArray(S)?S:[S],E=[];for(let A=0;A<T.length;A++)E.push(T[A].clone());M[x]=E}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const T=Array.isArray(M[x])?M[x]:[M[x]],E=Array.isArray(S)?S:[S];for(let A=0;A<T.length;A++){const y=T[A];if(y.equals(E[A])===!1)return y.copy(E[A]),!0}}return!1}function _(v){const x=v.uniforms;let M=0;const S=16;let T=0;for(let E=0,A=x.length;E<A;E++){const y=x[E],b={boundary:0,storage:0},N=Array.isArray(y.value)?y.value:[y.value];for(let B=0,k=N.length;B<k;B++){const L=N[B],O=g(L);b.boundary+=O.boundary,b.storage+=O.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,E>0){T=M%S;const B=S-T;T!==0&&B-b.boundary<0&&(M+=S-T,y.__offset=M)}M+=b.storage}return T=M%S,T>0&&(M+=S-T),v.__size=M,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Dd{constructor(t={}){const{canvas:e=Dg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ie,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;const x=this;let M=!1,S=0,T=0,E=null,A=-1,y=null;const b=new ue,N=new ue;let B=null;const k=new Ht(0);let L=0,O=e.width,z=e.height,W=1,tt=null,K=null;const $=new ue(0,0,O,z),F=new ue(0,0,O,z);let H=!1;const rt=new Ql;let ut=!1,_t=!1,Lt=null;const Rt=new _e,Ct=new st,Kt=new D,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return E===null?W:1}let U=n;function dt(C,G){for(let Y=0;Y<C.length;Y++){const V=C[Y],q=e.getContext(V,G);if(q!==null)return q}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),U=dt(G,C),U===null)throw dt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,ot,Q,Tt,vt,yt,It,Yt,ce,R,w,X,it,nt,at,Et,lt,xt,I,ct,J,Nt,At,Pt;function bt(){Z=new jx(U),ot=new kx(U,Z,t),Z.init(ot),Nt=new Ry(U,Z,ot),Q=new Ay(U,Z,ot),Tt=new $x(U),vt=new fy,yt=new Cy(U,Z,Q,vt,ot,Nt,Tt),It=new Hx(x),Yt=new Xx(x),ce=new r_(U,ot),At=new Bx(U,Z,ce,ot),R=new Yx(U,ce,Tt,At),w=new Qx(U,R,ce,Tt),I=new Jx(U,ot,yt),Et=new Gx(vt),X=new dy(x,It,Yt,Z,ot,At,Et),it=new Iy(x,vt),nt=new my,at=new My(Z,ot),xt=new Fx(x,It,Yt,Q,w,d,l),lt=new Ty(x,w,ot),Pt=new Ny(U,Tt,ot,Q),ct=new zx(U,Z,Tt,ot),J=new qx(U,Z,Tt,ot),Tt.programs=X.programs,x.capabilities=ot,x.extensions=Z,x.properties=vt,x.renderLists=nt,x.shadowMap=lt,x.state=Q,x.info=Tt}bt();const P=new Uy(x,U);this.xr=P,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(O,z,!1))},this.getSize=function(C){return C.set(O,z)},this.setSize=function(C,G,Y=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,z=G,e.width=Math.floor(C*W),e.height=Math.floor(G*W),Y===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(O*W,z*W).floor()},this.setDrawingBufferSize=function(C,G,Y){O=C,z=G,W=Y,e.width=Math.floor(C*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,G,Y,V){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,G,Y,V),Q.viewport(b.copy($).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,G,Y,V){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,G,Y,V),Q.scissor(N.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){Q.setScissorTest(H=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(C=!0,G=!0,Y=!0){let V=0;if(C){let q=!1;if(E!==null){const Mt=E.texture.format;q=Mt===fd||Mt===dd||Mt===ud}if(q){const Mt=E.texture.type,Ut=Mt===wi||Mt===vi||Mt===$l||Mt===Zi||Mt===cd||Mt===hd,zt=xt.getClearColor(),kt=xt.getClearAlpha(),qt=zt.r,Ft=zt.g,Wt=zt.b;Ut?(p[0]=qt,p[1]=Ft,p[2]=Wt,p[3]=kt,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=qt,_[1]=Ft,_[2]=Wt,_[3]=kt,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}G&&(V|=U.DEPTH_BUFFER_BIT),Y&&(V|=U.STENCIL_BUFFER_BIT),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),nt.dispose(),at.dispose(),vt.dispose(),It.dispose(),Yt.dispose(),w.dispose(),At.dispose(),Pt.dispose(),X.dispose(),P.dispose(),P.removeEventListener("sessionstart",oe),P.removeEventListener("sessionend",Un),Lt&&(Lt.dispose(),Lt=null),Ke.stop()};function ft(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=Tt.autoReset,G=lt.enabled,Y=lt.autoUpdate,V=lt.needsUpdate,q=lt.type;bt(),Tt.autoReset=C,lt.enabled=G,lt.autoUpdate=Y,lt.needsUpdate=V,lt.type=q}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const G=C.target;G.removeEventListener("dispose",pt),et(G)}function et(C){St(C),vt.remove(C)}function St(C){const G=vt.get(C).programs;G!==void 0&&(G.forEach(function(Y){X.releaseProgram(Y)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Y,V,q,Mt){G===null&&(G=te);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,zt=pm(C,G,Y,V,q);Q.setMaterial(V,Ut);let kt=Y.index,qt=1;if(V.wireframe===!0){if(kt=R.getWireframeAttribute(Y),kt===void 0)return;qt=2}const Ft=Y.drawRange,Wt=Y.attributes.position;let ye=Ft.start*qt,Se=(Ft.start+Ft.count)*qt;Mt!==null&&(ye=Math.max(ye,Mt.start*qt),Se=Math.min(Se,(Mt.start+Mt.count)*qt)),kt!==null?(ye=Math.max(ye,0),Se=Math.min(Se,kt.count)):Wt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,Wt.count));const vn=Se-ye;if(vn<0||vn===1/0)return;At.setup(q,V,zt,Y,kt);let qn,Ce=ct;if(kt!==null&&(qn=ce.get(kt),Ce=J,Ce.setIndex(qn)),q.isMesh)V.wireframe===!0?(Q.setLineWidth(V.wireframeLinewidth*Dt()),Ce.setMode(U.LINES)):Ce.setMode(U.TRIANGLES);else if(q.isLine){let $t=V.linewidth;$t===void 0&&($t=1),Q.setLineWidth($t*Dt()),q.isLineSegments?Ce.setMode(U.LINES):q.isLineLoop?Ce.setMode(U.LINE_LOOP):Ce.setMode(U.LINE_STRIP)}else q.isPoints?Ce.setMode(U.POINTS):q.isSprite&&Ce.setMode(U.TRIANGLES);if(q.isInstancedMesh)Ce.renderInstances(ye,vn,q.count);else if(Y.isInstancedBufferGeometry){const $t=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,da=Math.min(Y.instanceCount,$t);Ce.renderInstances(ye,vn,da)}else Ce.render(ye,vn)},this.compile=function(C,G){function Y(V,q,Mt){V.transparent===!0&&V.side===Bn&&V.forceSinglePass===!1?(V.side=We,V.needsUpdate=!0,Zr(V,q,Mt),V.side=Ci,V.needsUpdate=!0,Zr(V,q,Mt),V.side=Bn):Zr(V,q,Mt)}m=at.get(C),m.init(),v.push(m),C.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights),C.traverse(function(V){const q=V.material;if(q)if(Array.isArray(q))for(let Mt=0;Mt<q.length;Mt++){const Ut=q[Mt];Y(Ut,C,V)}else Y(q,C,V)}),v.pop(),m=null};let Ot=null;function Ae(C){Ot&&Ot(C)}function oe(){Ke.stop()}function Un(){Ke.start()}const Ke=new Ad;Ke.setAnimationLoop(Ae),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(C){Ot=C,P.setAnimationLoop(C),C===null?Ke.stop():Ke.start()},P.addEventListener("sessionstart",oe),P.addEventListener("sessionend",Un),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(G),G=P.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,G,E),m=at.get(C,v.length),m.init(),v.push(m),Rt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(Rt),_t=this.localClippingEnabled,ut=Et.init(this.clippingPlanes,_t),g=nt.get(C,f.length),g.init(),f.push(g),Dc(C,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(tt,K),this.info.render.frame++,ut===!0&&Et.beginShadows();const Y=m.state.shadowsArray;if(lt.render(Y,C,G),ut===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(g,C),m.setupLights(x._useLegacyLights),G.isArrayCamera){const V=G.cameras;for(let q=0,Mt=V.length;q<Mt;q++){const Ut=V[q];Uc(g,C,Ut,Ut.viewport)}}else Uc(g,C,G);E!==null&&(yt.updateMultisampleRenderTarget(E),yt.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,G),At.resetDefaultState(),A=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Dc(C,G,Y,V){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||rt.intersectsSprite(C)){V&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);const Ut=w.update(C),zt=C.material;zt.visible&&g.push(C,Ut,zt,Y,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||rt.intersectsObject(C))){const Ut=w.update(C),zt=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(zt)){const kt=Ut.groups;for(let qt=0,Ft=kt.length;qt<Ft;qt++){const Wt=kt[qt],ye=zt[Wt.materialIndex];ye&&ye.visible&&g.push(C,Ut,ye,Y,Kt.z,Wt)}}else zt.visible&&g.push(C,Ut,zt,Y,Kt.z,null)}}const Mt=C.children;for(let Ut=0,zt=Mt.length;Ut<zt;Ut++)Dc(Mt[Ut],G,Y,V)}function Uc(C,G,Y,V){const q=C.opaque,Mt=C.transmissive,Ut=C.transparent;m.setupLightsView(Y),ut===!0&&Et.setGlobalState(x.clippingPlanes,Y),Mt.length>0&&fm(q,Mt,G,Y),V&&Q.viewport(b.copy(V)),q.length>0&&Kr(q,G,Y),Mt.length>0&&Kr(Mt,G,Y),Ut.length>0&&Kr(Ut,G,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function fm(C,G,Y,V){const q=ot.isWebGL2;Lt===null&&(Lt=new rs(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?ai:wi,minFilter:ss,samples:q?4:0})),x.getDrawingBufferSize(Ct),q?Lt.setSize(Ct.x,Ct.y):Lt.setSize(Wo(Ct.x),Wo(Ct.y));const Mt=x.getRenderTarget();x.setRenderTarget(Lt),x.getClearColor(k),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=bi,Kr(C,Y,V),yt.updateMultisampleRenderTarget(Lt),yt.updateRenderTargetMipmap(Lt);let zt=!1;for(let kt=0,qt=G.length;kt<qt;kt++){const Ft=G[kt],Wt=Ft.object,ye=Ft.geometry,Se=Ft.material,vn=Ft.group;if(Se.side===Bn&&Wt.layers.test(V.layers)){const qn=Se.side;Se.side=We,Se.needsUpdate=!0,Ic(Wt,Y,V,ye,Se,vn),Se.side=qn,Se.needsUpdate=!0,zt=!0}}zt===!0&&(yt.updateMultisampleRenderTarget(Lt),yt.updateRenderTargetMipmap(Lt)),x.setRenderTarget(Mt),x.setClearColor(k,L),x.toneMapping=Ut}function Kr(C,G,Y){const V=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Mt=C.length;q<Mt;q++){const Ut=C[q],zt=Ut.object,kt=Ut.geometry,qt=V===null?Ut.material:V,Ft=Ut.group;zt.layers.test(Y.layers)&&Ic(zt,G,Y,kt,qt,Ft)}}function Ic(C,G,Y,V,q,Mt){C.onBeforeRender(x,G,Y,V,q,Mt),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(x,G,Y,V,C,Mt),q.transparent===!0&&q.side===Bn&&q.forceSinglePass===!1?(q.side=We,q.needsUpdate=!0,x.renderBufferDirect(Y,G,V,q,C,Mt),q.side=Ci,q.needsUpdate=!0,x.renderBufferDirect(Y,G,V,q,C,Mt),q.side=Bn):x.renderBufferDirect(Y,G,V,q,C,Mt),C.onAfterRender(x,G,Y,V,q,Mt)}function Zr(C,G,Y){G.isScene!==!0&&(G=te);const V=vt.get(C),q=m.state.lights,Mt=m.state.shadowsArray,Ut=q.state.version,zt=X.getParameters(C,q.state,Mt,G,Y),kt=X.getProgramCacheKey(zt);let qt=V.programs;V.environment=C.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(C.isMeshStandardMaterial?Yt:It).get(C.envMap||V.environment),qt===void 0&&(C.addEventListener("dispose",pt),qt=new Map,V.programs=qt);let Ft=qt.get(kt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===Ut)return Nc(C,zt),Ft}else zt.uniforms=X.getUniforms(C),C.onBuild(Y,zt,x),C.onBeforeCompile(zt,x),Ft=X.acquireProgram(zt,kt),qt.set(kt,Ft),V.uniforms=zt.uniforms;const Wt=V.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Et.uniform),Nc(C,zt),V.needsLights=gm(C),V.lightsStateVersion=Ut,V.needsLights&&(Wt.ambientLightColor.value=q.state.ambient,Wt.lightProbe.value=q.state.probe,Wt.directionalLights.value=q.state.directional,Wt.directionalLightShadows.value=q.state.directionalShadow,Wt.spotLights.value=q.state.spot,Wt.spotLightShadows.value=q.state.spotShadow,Wt.rectAreaLights.value=q.state.rectArea,Wt.ltc_1.value=q.state.rectAreaLTC1,Wt.ltc_2.value=q.state.rectAreaLTC2,Wt.pointLights.value=q.state.point,Wt.pointLightShadows.value=q.state.pointShadow,Wt.hemisphereLights.value=q.state.hemi,Wt.directionalShadowMap.value=q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Wt.spotShadowMap.value=q.state.spotShadowMap,Wt.spotLightMatrix.value=q.state.spotLightMatrix,Wt.spotLightMap.value=q.state.spotLightMap,Wt.pointShadowMap.value=q.state.pointShadowMap,Wt.pointShadowMatrix.value=q.state.pointShadowMatrix);const ye=Ft.getUniforms(),Se=Po.seqWithValue(ye.seq,Wt);return V.currentProgram=Ft,V.uniformsList=Se,Ft}function Nc(C,G){const Y=vt.get(C);Y.outputColorSpace=G.outputColorSpace,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function pm(C,G,Y,V,q){G.isScene!==!0&&(G=te),yt.resetTextureUnits();const Mt=G.fog,Ut=V.isMeshStandardMaterial?G.environment:null,zt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Vn,kt=(V.isMeshStandardMaterial?Yt:It).get(V.envMap||Ut),qt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ft=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Wt=!!Y.morphAttributes.position,ye=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color;let vn=bi;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(vn=x.toneMapping);const qn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=qn!==void 0?qn.length:0,$t=vt.get(V),da=m.state.lights;if(ut===!0&&(_t===!0||C!==y)){const hn=C===y&&V.id===A;Et.setState(V,C,hn)}let Re=!1;V.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==da.state.version||$t.outputColorSpace!==zt||q.isInstancedMesh&&$t.instancing===!1||!q.isInstancedMesh&&$t.instancing===!0||q.isSkinnedMesh&&$t.skinning===!1||!q.isSkinnedMesh&&$t.skinning===!0||q.isInstancedMesh&&$t.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$t.instancingColor===!1&&q.instanceColor!==null||$t.envMap!==kt||V.fog===!0&&$t.fog!==Mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Et.numPlanes||$t.numIntersection!==Et.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Ft||$t.morphTargets!==Wt||$t.morphNormals!==ye||$t.morphColors!==Se||$t.toneMapping!==vn||ot.isWebGL2===!0&&$t.morphTargetsCount!==Ce)&&(Re=!0):(Re=!0,$t.__version=V.version);let Oi=$t.currentProgram;Re===!0&&(Oi=Zr(V,G,q));let Oc=!1,pr=!1,fa=!1;const Ze=Oi.getUniforms(),Fi=$t.uniforms;if(Q.useProgram(Oi.program)&&(Oc=!0,pr=!0,fa=!0),V.id!==A&&(A=V.id,pr=!0),Oc||y!==C){Ze.setValue(U,"projectionMatrix",C.projectionMatrix),Ze.setValue(U,"viewMatrix",C.matrixWorldInverse);const hn=Ze.map.cameraPosition;hn!==void 0&&hn.setValue(U,Kt.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Ze.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ze.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,pr=!0,fa=!0)}if(q.isSkinnedMesh){Ze.setOptional(U,q,"bindMatrix"),Ze.setOptional(U,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(ot.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Ze.setValue(U,"boneTexture",hn.boneTexture,yt),Ze.setValue(U,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pa=Y.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&ot.isWebGL2===!0)&&I.update(q,Y,Oi),(pr||$t.receiveShadow!==q.receiveShadow)&&($t.receiveShadow=q.receiveShadow,Ze.setValue(U,"receiveShadow",q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fi.envMap.value=kt,Fi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),pr&&(Ze.setValue(U,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&mm(Fi,fa),Mt&&V.fog===!0&&it.refreshFogUniforms(Fi,Mt),it.refreshMaterialUniforms(Fi,V,W,z,Lt),Po.upload(U,$t.uniformsList,Fi,yt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Po.upload(U,$t.uniformsList,Fi,yt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ze.setValue(U,"center",q.center),Ze.setValue(U,"modelViewMatrix",q.modelViewMatrix),Ze.setValue(U,"normalMatrix",q.normalMatrix),Ze.setValue(U,"modelMatrix",q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let ma=0,_m=hn.length;ma<_m;ma++)if(ot.isWebGL2){const Fc=hn[ma];Pt.update(Fc,Oi),Pt.bind(Fc,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function mm(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function gm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,G,Y){vt.get(C.texture).__webglTexture=G,vt.get(C.depthTexture).__webglTexture=Y;const V=vt.get(C);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Y===void 0,V.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const Y=vt.get(C);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Y=0){E=C,S=G,T=Y;let V=!0,q=null,Mt=!1,Ut=!1;if(C){const kt=vt.get(C);kt.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):kt.__webglFramebuffer===void 0?yt.setupRenderTarget(C):kt.__hasExternalTextures&&yt.rebindTextures(C,vt.get(C.texture).__webglTexture,vt.get(C.depthTexture).__webglTexture);const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ut=!0);const Ft=vt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?q=Ft[G][Y]:q=Ft[G],Mt=!0):ot.isWebGL2&&C.samples>0&&yt.useMultisampledRTT(C)===!1?q=vt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?q=Ft[Y]:q=Ft,b.copy(C.viewport),N.copy(C.scissor),B=C.scissorTest}else b.copy($).multiplyScalar(W).floor(),N.copy(F).multiplyScalar(W).floor(),B=H;if(Q.bindFramebuffer(U.FRAMEBUFFER,q)&&ot.drawBuffers&&V&&Q.drawBuffers(C,q),Q.viewport(b),Q.scissor(N),Q.setScissorTest(B),Mt){const kt=vt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,kt.__webglTexture,Y)}else if(Ut){const kt=vt.get(C.texture),qt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,Y||0,qt)}A=-1},this.readRenderTargetPixels=function(C,G,Y,V,q,Mt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){Q.bindFramebuffer(U.FRAMEBUFFER,zt);try{const kt=C.texture,qt=kt.format,Ft=kt.type;if(qt!==Pn&&Nt.convert(qt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Ft===ai&&(Z.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ft!==wi&&Nt.convert(Ft)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Dn&&(ot.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-V&&Y>=0&&Y<=C.height-q&&U.readPixels(G,Y,V,q,Nt.convert(qt),Nt.convert(Ft),Mt)}finally{const kt=E!==null?vt.get(E).__webglFramebuffer:null;Q.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(C,G,Y=0){const V=Math.pow(2,-Y),q=Math.floor(G.image.width*V),Mt=Math.floor(G.image.height*V);yt.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,C.x,C.y,q,Mt),Q.unbindTexture()},this.copyTextureToTexture=function(C,G,Y,V=0){const q=G.image.width,Mt=G.image.height,Ut=Nt.convert(Y.format),zt=Nt.convert(Y.type);yt.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,C.x,C.y,q,Mt,Ut,zt,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Ut,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,C.x,C.y,Ut,zt,G.image),V===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Y,V,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=C.max.x-C.min.x+1,Ut=C.max.y-C.min.y+1,zt=C.max.z-C.min.z+1,kt=Nt.convert(V.format),qt=Nt.convert(V.type);let Ft;if(V.isData3DTexture)yt.setTexture3D(V,0),Ft=U.TEXTURE_3D;else if(V.isDataArrayTexture)yt.setTexture2DArray(V,0),Ft=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Wt=U.getParameter(U.UNPACK_ROW_LENGTH),ye=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Se=U.getParameter(U.UNPACK_SKIP_PIXELS),vn=U.getParameter(U.UNPACK_SKIP_ROWS),qn=U.getParameter(U.UNPACK_SKIP_IMAGES),Ce=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ft,q,G.x,G.y,G.z,Mt,Ut,zt,kt,qt,Ce.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ft,q,G.x,G.y,G.z,Mt,Ut,zt,kt,Ce.data)):U.texSubImage3D(Ft,q,G.x,G.y,G.z,Mt,Ut,zt,kt,qt,Ce),U.pixelStorei(U.UNPACK_ROW_LENGTH,Wt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qn),q===0&&V.generateMipmaps&&U.generateMipmap(Ft),Q.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?yt.setTextureCube(C,0):C.isData3DTexture?yt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?yt.setTexture2DArray(C,0):yt.setTexture2D(C,0),Q.unbindTexture()},this.resetState=function(){S=0,T=0,E=null,Q.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ia?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ie?Qi:pd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qi?ie:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Oy extends Dd{}Oy.prototype.isWebGL1Renderer=!0;class nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fy extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class By extends en{constructor(t=null,e=1,n=1,i,r,o,a,l,c=be,h=be,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new D,su=new D,ru=new _e,ja=new sa,Mo=new jr;class Xo extends fe{constructor(t=new xe,e=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)iu.fromBufferAttribute(e,i-1),su.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=iu.distanceTo(su);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;ru.copy(i).invert(),ja.copy(t.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=f,M=v-1;x<M;x+=p){const S=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,T),ja.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=f,M=v-1;x<M;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ja.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ou=new D,au=new D;class Ud extends Xo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ou.fromBufferAttribute(e,i),au.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ou.distanceTo(au);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ic extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lu=new _e,xl=new sa,So=new jr,Eo=new D;class Id extends fe{constructor(t=new xe,e=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;lu.copy(i).invert(),xl.copy(t.ray).applyMatrix4(lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Eo.fromBufferAttribute(u,m),cu(Eo,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Eo.fromBufferAttribute(u,_),cu(Eo,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cu(s,t,e,n,i,r,o){const a=xl.distanceSqToPoint(s);if(a<e){const l=new D;xl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new st:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],o=[],a=new D,l=new _e;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(De(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sc extends Yn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new st,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zy extends sc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const bo=new D,Ya=new rc,qa=new rc,$a=new rc;class ky extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),c=bo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ya.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),qa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ya.calc(l),qa.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Gy(s,t){const e=1-s;return e*e*t}function Hy(s,t){return 2*(1-s)*s*t}function Vy(s,t){return s*s*t}function Cr(s,t,e,n){return Gy(s,t)+Hy(s,e)+Vy(s,n)}function Wy(s,t){const e=1-s;return e*e*e*t}function Xy(s,t){const e=1-s;return 3*e*e*s*t}function jy(s,t){return 3*(1-s)*s*s*t}function Yy(s,t){return s*s*s*t}function Rr(s,t,e,n,i){return Wy(s,t)+Xy(s,e)+jy(s,n)+Yy(s,i)}class Nd extends Yn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(t,i.x,r.x,o.x,a.x),Rr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qy extends Yn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(t,i.x,r.x,o.x,a.x),Rr(t,i.y,r.y,o.y,a.y),Rr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends Yn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $y extends Yn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Yn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,i.x,r.x,o.x),Cr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ky extends Yn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,i.x,r.x,o.x),Cr(t,i.y,r.y,o.y),Cr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(hu(a,l.x,c.x,h.x,u.x),hu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var vl=Object.freeze({__proto__:null,ArcCurve:zy,CatmullRomCurve3:ky,CubicBezierCurve:Nd,CubicBezierCurve3:qy,EllipseCurve:sc,LineCurve:Od,LineCurve3:$y,QuadraticBezierCurve:Fd,QuadraticBezierCurve3:Ky,SplineCurve:Bd});class Zy extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new vl[i.type]().fromJSON(i))}return this}}class yl extends Zy{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Od(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Fd(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Nd(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new sc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class oc extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function v(){const M=new D,S=new D;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const y=[],b=A/r,N=b*(e-t)+t;for(let B=0;B<=i;B++){const k=B/i,L=k*l+a,O=Math.sin(L),z=Math.cos(L);S.x=N*O,S.y=-b*n+m,S.z=N*z,u.push(S.x,S.y,S.z),M.set(O,E,z).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-b),y.push(_++)}g.push(y)}for(let A=0;A<i;A++)for(let y=0;y<r;y++){const b=g[y][A],N=g[y+1][A],B=g[y+1][A+1],k=g[y][A+1];h.push(b,N,k),h.push(N,B,k),T+=6}c.addGroup(f,T,0),f+=T}function x(M){const S=_,T=new st,E=new D;let A=0;const y=M===!0?t:e,b=M===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),_++;const N=_;for(let B=0;B<=i;B++){const L=B/i*l+a,O=Math.cos(L),z=Math.sin(L);E.x=y*z,E.y=m*b,E.z=y*O,u.push(E.x,E.y,E.z),d.push(0,b,0),T.x=O*.5+.5,T.y=z*.5*b+.5,p.push(T.x,T.y),_++}for(let B=0;B<i;B++){const k=S+B,L=N+B;M===!0?h.push(L,L+1,k):h.push(L+1,L,k),A+=3}c.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ac extends oc{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ac(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lc extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,M=new D,S=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],M),p(e[T+2],S),l(x,M,S,v)}function l(v,x,M,S){const T=S+1,E=[];for(let A=0;A<=T;A++){E[A]=[];const y=v.clone().lerp(M,A/T),b=x.clone().lerp(M,A/T),N=T-A;for(let B=0;B<=N;B++)B===0&&A===T?E[A][B]=y:E[A][B]=y.clone().lerp(b,B/N)}for(let A=0;A<T;A++)for(let y=0;y<2*(T-A)-1;y++){const b=Math.floor(y/2);y%2===0?(d(E[A][b+1]),d(E[A+1][b]),d(E[A][b])):(d(E[A][b+1]),d(E[A+1][b+1]),d(E[A+1][b]))}}function c(v){const x=new D;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new D;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=m(v)/2/Math.PI+.5,S=f(v)/Math.PI+.5;o.push(M,1-S)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],S=o[v+4],T=Math.max(x,M,S),E=Math.min(x,M,S);T>.9&&E<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const v=new D,x=new D,M=new D,S=new D,T=new st,E=new st,A=new st;for(let y=0,b=0;y<r.length;y+=9,b+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),T.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),S.copy(v).add(x).add(M).divideScalar(3);const N=m(S);g(T,b+0,v,N),g(E,b+2,x,N),g(A,b+4,M,N)}}function g(v,x,M,S){S<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.vertices,t.indices,t.radius,t.details)}}class Do extends yl{constructor(t){super(t),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yl().fromJSON(i))}return this}}const Jy={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=zd(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=iM(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let _=e;_<i;_+=e)u=s[_],d=s[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ir(r,o,e,a,l,p,0),o}};function zd(s,t,e,n,i){let r,o;if(i===pM(s,t,e,n)>0)for(r=t;r<e;r+=n)o=uu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=uu(r,s[r],s[r+1],o);return o&&aa(o,o.next)&&(Or(o),o=o.next),o}function as(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(aa(e,e.next)||me(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(s,t,e,n,i,r,o){if(!s)return;!o&&r&&lM(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?tM(s,n,i,r):Qy(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Or(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=eM(as(s),t,e),Ir(s,t,e,n,i,r,2)):o===2&&nM(s,t,e,n,i,r):Ir(as(s),t,e,n,i,r,1);break}}}function Qy(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&Os(i,a,r,l,o,c,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function tM(s,t,e,n){const i=s.prev,r=s,o=s.next;if(me(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Ml(p,_,t,e,n),v=Ml(g,m,t,e,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=f&&M&&M.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&Os(a,h,l,u,c,d,x.x,x.y)&&me(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==o&&Os(a,h,l,u,c,d,M.x,M.y)&&me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&Os(a,h,l,u,c,d,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==o&&Os(a,h,l,u,c,d,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function eM(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!aa(i,r)&&kd(i,n,n.next,r)&&Nr(i,r)&&Nr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=s=r),n=n.next}while(n!==s);return as(n)}function nM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uM(o,a)){let l=Gd(o,a);o=as(o,o.next),l=as(l,l.next),Ir(o,t,e,n,i,r,0),Ir(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function iM(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=zd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(hM(c));for(i.sort(sM),r=0;r<i.length;r++)e=rM(i[r],e);return e}function sM(s,t){return s.x-t.x}function rM(s,t){const e=oM(s,t);if(!e)return t;const n=Gd(e,s);return as(n,n.next),as(e,e.next)}function oM(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Nr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&aM(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function aM(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function lM(s,t,e,n){let i=s;do i.z===0&&(i.z=Ml(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cM(i)}function cM(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ml(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function hM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Os(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function uM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!dM(s,t)&&(Nr(s,t)&&Nr(t,s)&&fM(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||aa(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function aa(s,t){return s.x===t.x&&s.y===t.y}function kd(s,t,e,n){const i=To(me(s,t,e)),r=To(me(s,t,n)),o=To(me(e,n,s)),a=To(me(e,n,t));return!!(i!==r&&o!==a||i===0&&wo(s,e,t)||r===0&&wo(s,n,t)||o===0&&wo(e,s,n)||a===0&&wo(e,t,n))}function wo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function To(s){return s>0?1:s<0?-1:0}function dM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Nr(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function fM(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gd(s,t){const e=new Sl(s.i,s.x,s.y),n=new Sl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uu(s,t,e,n){const i=new Sl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Or(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Hs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];du(t),fu(n,t);let o=t.length;e.forEach(du);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,fu(n,e[l]);const a=Jy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function du(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function fu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class cc extends xe{constructor(t=new Do([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Jt(i,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:mM;let x,M=!1,S,T,E,A;f&&(x=f.getSpacedPoints(h),M=!0,d=!1,S=f.computeFrenetFrames(h,!1),T=new D,E=new D,A=new D),d||(m=0,p=0,_=0,g=0);const y=a.extractPoints(c);let b=y.shape;const N=y.holes;if(!Hs.isClockWise(b)){b=b.reverse();for(let U=0,dt=N.length;U<dt;U++){const Z=N[U];Hs.isClockWise(Z)&&(N[U]=Z.reverse())}}const k=Hs.triangulateShape(b,N),L=b;for(let U=0,dt=N.length;U<dt;U++){const Z=N[U];b=b.concat(Z)}function O(U,dt,Z){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(dt,Z)}const z=b.length,W=k.length;function tt(U,dt,Z){let ot,Q,Tt;const vt=U.x-dt.x,yt=U.y-dt.y,It=Z.x-U.x,Yt=Z.y-U.y,ce=vt*vt+yt*yt,R=vt*Yt-yt*It;if(Math.abs(R)>Number.EPSILON){const w=Math.sqrt(ce),X=Math.sqrt(It*It+Yt*Yt),it=dt.x-yt/w,nt=dt.y+vt/w,at=Z.x-Yt/X,Et=Z.y+It/X,lt=((at-it)*Yt-(Et-nt)*It)/(vt*Yt-yt*It);ot=it+vt*lt-U.x,Q=nt+yt*lt-U.y;const xt=ot*ot+Q*Q;if(xt<=2)return new st(ot,Q);Tt=Math.sqrt(xt/2)}else{let w=!1;vt>Number.EPSILON?It>Number.EPSILON&&(w=!0):vt<-Number.EPSILON?It<-Number.EPSILON&&(w=!0):Math.sign(yt)===Math.sign(Yt)&&(w=!0),w?(ot=-yt,Q=vt,Tt=Math.sqrt(ce)):(ot=vt,Q=yt,Tt=Math.sqrt(ce/2))}return new st(ot/Tt,Q/Tt)}const K=[];for(let U=0,dt=L.length,Z=dt-1,ot=U+1;U<dt;U++,Z++,ot++)Z===dt&&(Z=0),ot===dt&&(ot=0),K[U]=tt(L[U],L[Z],L[ot]);const $=[];let F,H=K.concat();for(let U=0,dt=N.length;U<dt;U++){const Z=N[U];F=[];for(let ot=0,Q=Z.length,Tt=Q-1,vt=ot+1;ot<Q;ot++,Tt++,vt++)Tt===Q&&(Tt=0),vt===Q&&(vt=0),F[ot]=tt(Z[ot],Z[Tt],Z[vt]);$.push(F),H=H.concat(F)}for(let U=0;U<m;U++){const dt=U/m,Z=p*Math.cos(dt*Math.PI/2),ot=_*Math.sin(dt*Math.PI/2)+g;for(let Q=0,Tt=L.length;Q<Tt;Q++){const vt=O(L[Q],K[Q],ot);Rt(vt.x,vt.y,-Z)}for(let Q=0,Tt=N.length;Q<Tt;Q++){const vt=N[Q];F=$[Q];for(let yt=0,It=vt.length;yt<It;yt++){const Yt=O(vt[yt],F[yt],ot);Rt(Yt.x,Yt.y,-Z)}}}const rt=_+g;for(let U=0;U<z;U++){const dt=d?O(b[U],H[U],rt):b[U];M?(E.copy(S.normals[0]).multiplyScalar(dt.x),T.copy(S.binormals[0]).multiplyScalar(dt.y),A.copy(x[0]).add(E).add(T),Rt(A.x,A.y,A.z)):Rt(dt.x,dt.y,0)}for(let U=1;U<=h;U++)for(let dt=0;dt<z;dt++){const Z=d?O(b[dt],H[dt],rt):b[dt];M?(E.copy(S.normals[U]).multiplyScalar(Z.x),T.copy(S.binormals[U]).multiplyScalar(Z.y),A.copy(x[U]).add(E).add(T),Rt(A.x,A.y,A.z)):Rt(Z.x,Z.y,u/h*U)}for(let U=m-1;U>=0;U--){const dt=U/m,Z=p*Math.cos(dt*Math.PI/2),ot=_*Math.sin(dt*Math.PI/2)+g;for(let Q=0,Tt=L.length;Q<Tt;Q++){const vt=O(L[Q],K[Q],ot);Rt(vt.x,vt.y,u+Z)}for(let Q=0,Tt=N.length;Q<Tt;Q++){const vt=N[Q];F=$[Q];for(let yt=0,It=vt.length;yt<It;yt++){const Yt=O(vt[yt],F[yt],ot);M?Rt(Yt.x,Yt.y+x[h-1].y,x[h-1].x+Z):Rt(Yt.x,Yt.y,u+Z)}}}ut(),_t();function ut(){const U=i.length/3;if(d){let dt=0,Z=z*dt;for(let ot=0;ot<W;ot++){const Q=k[ot];Ct(Q[2]+Z,Q[1]+Z,Q[0]+Z)}dt=h+m*2,Z=z*dt;for(let ot=0;ot<W;ot++){const Q=k[ot];Ct(Q[0]+Z,Q[1]+Z,Q[2]+Z)}}else{for(let dt=0;dt<W;dt++){const Z=k[dt];Ct(Z[2],Z[1],Z[0])}for(let dt=0;dt<W;dt++){const Z=k[dt];Ct(Z[0]+z*h,Z[1]+z*h,Z[2]+z*h)}}n.addGroup(U,i.length/3-U,0)}function _t(){const U=i.length/3;let dt=0;Lt(L,dt),dt+=L.length;for(let Z=0,ot=N.length;Z<ot;Z++){const Q=N[Z];Lt(Q,dt),dt+=Q.length}n.addGroup(U,i.length/3-U,1)}function Lt(U,dt){let Z=U.length;for(;--Z>=0;){const ot=Z;let Q=Z-1;Q<0&&(Q=U.length-1);for(let Tt=0,vt=h+m*2;Tt<vt;Tt++){const yt=z*Tt,It=z*(Tt+1),Yt=dt+ot+yt,ce=dt+Q+yt,R=dt+Q+It,w=dt+ot+It;Kt(Yt,ce,R,w)}}}function Rt(U,dt,Z){l.push(U),l.push(dt),l.push(Z)}function Ct(U,dt,Z){te(U),te(dt),te(Z);const ot=i.length/3,Q=v.generateTopUV(n,i,ot-3,ot-2,ot-1);Dt(Q[0]),Dt(Q[1]),Dt(Q[2])}function Kt(U,dt,Z,ot){te(U),te(dt),te(ot),te(dt),te(Z),te(ot);const Q=i.length/3,Tt=v.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);Dt(Tt[0]),Dt(Tt[1]),Dt(Tt[3]),Dt(Tt[1]),Dt(Tt[2]),Dt(Tt[3])}function te(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function Dt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new vl[i.type]().fromJSON(i)),new cc(n,t.options)}}const mM={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],_=t[i*3+2],g=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-u),new st(d,1-_),new st(g,1-f)]:[new st(a,1-l),new st(h,1-u),new st(p,1-_),new st(m,1-f)]}};function gM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hc extends lc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hc(t.radius,t.detail)}}class ds extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const T=S/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+M,1-x),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const x=h[f][v+1],M=h[f][v],S=h[f+1][v],T=h[f+1][v+1];(f!==0||o>0)&&p.push(x,M,T),(f!==n-1||l<Math.PI)&&p.push(M,S,T)}this.setIndex(p),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qr extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,v=(i+1)*p+_;o.push(g,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class si extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _M extends si{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xM extends Ii{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const jo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Hd{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const vM=new Hd;class ur{constructor(t){this.manager=t!==void 0?t:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class yM extends Error{constructor(t,e){super(t),this.response=e}}class Vd extends ur{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=jo.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ei[t]!==void 0){ei[t].push({onLoad:e,onProgress:n,onError:i});return}ei[t]=[],ei[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:x,value:M})=>{if(x)f.close();else{g+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let T=0,E=h.length;T<E;T++){const A=h[T];A.onProgress&&A.onProgress(S)}f.enqueue(M),v()}})}}});return new Response(m)}else throw new yM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{jo.add(t,c);const h=ei[t];delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ei[t];if(h===void 0)throw this.manager.itemError(t),c;delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class MM extends ur{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=jo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ur("img");function l(){h(),jo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class SM extends ur{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new By,a=new Vd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:pn,o.wrapT=c.wrapT!==void 0?c.wrapT:pn,o.magFilter=c.magFilter!==void 0?c.magFilter:Be,o.minFilter=c.minFilter!==void 0?c.minFilter:Be,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ss),c.mipmapCount===1&&(o.minFilter=Be),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class dr extends ur{constructor(t){super(t)}load(t,e,n,i){const r=new en,o=new MM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class fr extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class EM extends fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new _e,pu=new D,mu=new D;class uc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bM extends uc{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=nr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wd extends fr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const gu=new _e,vr=new D,Za=new D;class wM extends uc{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(vr),Za.copy(n.position),Za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}}class Fs extends fr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class TM extends uc{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fc extends fr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class AM extends fr{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class _u{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xu=new D;class CM extends fe{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new xe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Jt(i,3));const r=new Yr({fog:!1,toneMapped:!1});this.cone=new Ud(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),xu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(xu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class RM extends Gt{constructor(t,e,n){const i=new ds(e,4,2),r=new Xe({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const LM=new D,vu=new Ht,yu=new Ht;class PM extends fe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new hc(e);i.rotateY(Math.PI*.5),this.material=new Xe({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new je(o,3)),this.add(new Gt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");vu.copy(this.light.color),yu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?vu:yu;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(LM.setFromMatrixPosition(this.light.matrixWorld).negate())}}const Mu=new D,Ao=new D,Su=new D;class DM extends fe{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new xe;i.setAttribute("position",new Jt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Yr({fog:!1,toneMapped:!1});this.lightPlane=new Xo(i,r),this.add(this.lightPlane),i=new xe,i.setAttribute("position",new Jt([0,0,0,0,0,1],3)),this.targetLine=new Xo(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Mu.setFromMatrixPosition(this.light.matrixWorld),Ao.setFromMatrixPosition(this.light.target.matrixWorld),Su.subVectors(Ao,Mu),this.lightPlane.lookAt(Ao),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ao),this.targetLine.scale.z=Su.length()}}class UM extends Ud{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new xe;i.setAttribute("position",new Jt(e,3)),i.setAttribute("color",new Jt(n,3));const r=new Yr({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const v=[];for(let x=0,M=f.length;x<M;x++){const S=f[x],T=new Do;T.curves=S.curves,v.push(T)}return v}function n(f,v){const x=v.length;let M=!1;for(let S=x-1,T=0;T<x;S=T++){let E=v[S],A=v[T],y=A.x-E.x,b=A.y-E.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(E=v[T],y=-y,A=v[S],b=-b),f.y<E.y||f.y>A.y)continue;if(f.y===E.y){if(f.x===E.x)return!0}else{const N=b*(f.x-E.x)-y*(f.y-E.y);if(N===0)return!0;if(N<0)continue;M=!M}}else{if(f.y!==E.y)continue;if(A.x<=f.x&&f.x<=E.x||E.x<=f.x&&f.x<=A.x)return!0}}return M}const i=Hs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Do,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],_=0,g;d[_]=void 0,p[_]=[];for(let f=0,v=r.length;f<v;f++)a=r[f],g=a.getPoints(),o=i(g),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Do,p:g},d[_].s.curves=a.curves,h&&_++,p[_]=[]):p[_].push({h:a,p:g[0]});if(!d[0])return e(r);if(d.length>1){let f=!1,v=0;for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const S=p[x];for(let T=0;T<S.length;T++){const E=S[T];let A=!0;for(let y=0;y<d.length;y++)n(E.p,d[y].p)&&(x!==y&&v++,A?(A=!1,u[y].push(E)):f=!0);A&&u[x].push(E)}}v>0&&f===!1&&(p=u)}let m;for(let f=0,v=d.length;f<v;f++){l=d[f].s,c.push(l),m=p[f];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);const Eu={type:"change"},Ja={type:"start"},bu={type:"end"},Co=new sa,wu=new xi,NM=Math.cos(70*Pg.DEG2RAD);class Xd extends hs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",w),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Eu),n.update(),r=i.NONE},this.update=function(){const I=new D,ct=new os().setFromUnitVectors(t.up,new D(0,1,0)),J=ct.clone().invert(),Nt=new D,At=new os,Pt=new D,bt=2*Math.PI;return function(ft=null){const ht=n.object.position;I.copy(ht).sub(n.target),I.applyQuaternion(ct),a.setFromVector3(I),n.autoRotate&&r===i.NONE&&N(y(ft)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let gt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(gt)&&isFinite(pt)&&(gt<-Math.PI?gt+=bt:gt>Math.PI&&(gt-=bt),pt<-Math.PI?pt+=bt:pt>Math.PI&&(pt-=bt),gt<=pt?a.theta=Math.max(gt,Math.min(pt,a.theta)):a.theta=a.theta>(gt+pt)/2?Math.max(gt,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),I.setFromSpherical(a),I.applyQuaternion(J),ht.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let et=!1;if(n.zoomToCursor&&T){let St=null;if(n.object.isPerspectiveCamera){const Ot=I.length();St=K(Ot*c);const Ae=Ot-St;n.object.position.addScaledVector(M,Ae),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ot=new D(S.x,S.y,0);Ot.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),et=!0;const Ae=new D(S.x,S.y,0);Ae.unproject(n.object),n.object.position.sub(Ae).add(Ot),n.object.updateMatrixWorld(),St=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(Co.origin.copy(n.object.position),Co.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Co.direction))<NM?t.lookAt(n.target):(wu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Co.intersectPlane(wu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),et=!0);return c=1,T=!1,et||Nt.distanceToSquared(n.object.position)>o||8*(1-At.dot(n.object.quaternion))>o||Pt.distanceToSquared(n.target)>0?(n.dispatchEvent(Eu),Nt.copy(n.object.position),At.copy(n.object.quaternion),Pt.copy(n.target),et=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",It),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",It),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",w),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new _u,l=new _u;let c=1;const h=new D,u=new st,d=new st,p=new st,_=new st,g=new st,m=new st,f=new st,v=new st,x=new st,M=new D,S=new st;let T=!1;const E=[],A={};function y(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function N(I){l.theta-=I}function B(I){l.phi-=I}const k=function(){const I=new D;return function(J,Nt){I.setFromMatrixColumn(Nt,0),I.multiplyScalar(-J),h.add(I)}}(),L=function(){const I=new D;return function(J,Nt){n.screenSpacePanning===!0?I.setFromMatrixColumn(Nt,1):(I.setFromMatrixColumn(Nt,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(J),h.add(I)}}(),O=function(){const I=new D;return function(J,Nt){const At=n.domElement;if(n.object.isPerspectiveCamera){const Pt=n.object.position;I.copy(Pt).sub(n.target);let bt=I.length();bt*=Math.tan(n.object.fov/2*Math.PI/180),k(2*J*bt/At.clientHeight,n.object.matrix),L(2*Nt*bt/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(J*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),L(Nt*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(I){if(!n.zoomToCursor)return;T=!0;const ct=n.domElement.getBoundingClientRect(),J=I.clientX-ct.left,Nt=I.clientY-ct.top,At=ct.width,Pt=ct.height;S.x=J/At*2-1,S.y=-(Nt/Pt)*2+1,M.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function $(I){u.set(I.clientX,I.clientY)}function F(I){tt(I),f.set(I.clientX,I.clientY)}function H(I){_.set(I.clientX,I.clientY)}function rt(I){d.set(I.clientX,I.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ct=n.domElement;N(2*Math.PI*p.x/ct.clientHeight),B(2*Math.PI*p.y/ct.clientHeight),u.copy(d),n.update()}function ut(I){v.set(I.clientX,I.clientY),x.subVectors(v,f),x.y>0?z(b()):x.y<0&&W(b()),f.copy(v),n.update()}function _t(I){g.set(I.clientX,I.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g),n.update()}function Lt(I){tt(I),I.deltaY<0?W(b()):I.deltaY>0&&z(b()),n.update()}function Rt(I){let ct=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ct=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ct=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ct=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ct=!0;break}ct&&(I.preventDefault(),n.update())}function Ct(){if(E.length===1)u.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ct=.5*(E[0].pageY+E[1].pageY);u.set(I,ct)}}function Kt(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ct=.5*(E[0].pageY+E[1].pageY);_.set(I,ct)}}function te(){const I=E[0].pageX-E[1].pageX,ct=E[0].pageY-E[1].pageY,J=Math.sqrt(I*I+ct*ct);f.set(0,J)}function Dt(){n.enableZoom&&te(),n.enablePan&&Kt()}function U(){n.enableZoom&&te(),n.enableRotate&&Ct()}function dt(I){if(E.length==1)d.set(I.pageX,I.pageY);else{const J=xt(I),Nt=.5*(I.pageX+J.x),At=.5*(I.pageY+J.y);d.set(Nt,At)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ct=n.domElement;N(2*Math.PI*p.x/ct.clientHeight),B(2*Math.PI*p.y/ct.clientHeight),u.copy(d)}function Z(I){if(E.length===1)g.set(I.pageX,I.pageY);else{const ct=xt(I),J=.5*(I.pageX+ct.x),Nt=.5*(I.pageY+ct.y);g.set(J,Nt)}m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g)}function ot(I){const ct=xt(I),J=I.pageX-ct.x,Nt=I.pageY-ct.y,At=Math.sqrt(J*J+Nt*Nt);v.set(0,At),x.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),z(x.y),f.copy(v)}function Q(I){n.enableZoom&&ot(I),n.enablePan&&Z(I)}function Tt(I){n.enableZoom&&ot(I),n.enableRotate&&dt(I)}function vt(I){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",yt),n.domElement.addEventListener("pointerup",It)),at(I),I.pointerType==="touch"?X(I):Yt(I))}function yt(I){n.enabled!==!1&&(I.pointerType==="touch"?it(I):ce(I))}function It(I){Et(I),E.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",It)),n.dispatchEvent(bu),r=i.NONE}function Yt(I){let ct;switch(I.button){case 0:ct=n.mouseButtons.LEFT;break;case 1:ct=n.mouseButtons.MIDDLE;break;case 2:ct=n.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case ps.DOLLY:if(n.enableZoom===!1)return;F(I),r=i.DOLLY;break;case ps.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;H(I),r=i.PAN}else{if(n.enableRotate===!1)return;$(I),r=i.ROTATE}break;case ps.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;$(I),r=i.ROTATE}else{if(n.enablePan===!1)return;H(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ja)}function ce(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;rt(I);break;case i.DOLLY:if(n.enableZoom===!1)return;ut(I);break;case i.PAN:if(n.enablePan===!1)return;_t(I);break}}function R(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(Ja),Lt(I),n.dispatchEvent(bu))}function w(I){n.enabled===!1||n.enablePan===!1||Rt(I)}function X(I){switch(lt(I),E.length){case 1:switch(n.touches.ONE){case ms.ROTATE:if(n.enableRotate===!1)return;Ct(),r=i.TOUCH_ROTATE;break;case ms.PAN:if(n.enablePan===!1)return;Kt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ms.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(),r=i.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ja)}function it(I){switch(lt(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Z(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(I),n.update();break;default:r=i.NONE}}function nt(I){n.enabled!==!1&&I.preventDefault()}function at(I){E.push(I)}function Et(I){delete A[I.pointerId];for(let ct=0;ct<E.length;ct++)if(E[ct].pointerId==I.pointerId){E.splice(ct,1);return}}function lt(I){let ct=A[I.pointerId];ct===void 0&&(ct=new st,A[I.pointerId]=ct),ct.set(I.pageX,I.pageY)}function xt(I){const ct=I.pointerId===E[0].pointerId?E[1]:E[0];return A[ct.pointerId]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",It),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Gn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Gn.nextNameID=Gn.nextNameID||0,this.$name.id=`lil-gui-name-${++Gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class OM extends Gn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function El(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const FM={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:El,toHexString:El},Fr={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},BM={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const n=Fr.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Fr.toHexString(i)}},zM={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Fr.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Fr.toHexString(i)}},kM=[FM,Fr,BM,zM];function GM(s){return kM.find(t=>t.match(s))}class HM extends Gn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=GM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=El(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qa extends Gn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class VM extends Gn{constructor(t,e,n,i,r,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,h,u;const d=5,p=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(o){const x=v.clientX-a,M=v.clientY-l;Math.abs(M)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!o){const x=v.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,v,x,M,S)=>(f-v)/(x-v)*(S-M)+M,e=f=>{const v=this.$slider.getBoundingClientRect();let x=t(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(o){const v=f.touches[0].clientX-a,x=f.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class WM extends Gn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class XM extends Gn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const jM=`.lil-gui {
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
}`;function YM(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Tu=!1;class pc{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Tu&&a&&(YM(jM),Tu=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new WM(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new VM(this,t,e,n,i,r);case"boolean":return new OM(this,t,e);case"string":return new XM(this,t,e);case"function":return new Qa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new HM(this,t,e,n)}addFolder(t){const e=new pc({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Qa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Qa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}let qM=class{get title(){throw new Error("Lesson class must implement a getter for `title` property")}get link(){throw new Error("Lesson class must implement a getter for `link` property")}open(){throw new Error("Lesson class must implement an `open` method that implements current lesson logic")}close(){throw new Error("Lesson class must implement `close` method that release resources used by the lesson implementation")}};var Ys,qs,$s,le,jd,Yd,qd,$d,Kd,Zd,Jd,Qd,tf,ef,bl;class nn extends qM{constructor(){super(...arguments);he(this,le);wt(this,"object3d",null);wt(this,"scene");wt(this,"camera");wt(this,"renderer");wt(this,"guiControl");wt(this,"control");wt(this,"canvas");wt(this,"hasAnimation");he(this,Ys);he(this,qs);he(this,$s)}update(e){throw new Error("General lesson class with animations must implement an `update` method that implements current lesson logic")}animate(e=0){this.update(e),this.renderer.render(this.scene,this.camera),yn(this,Ys,requestAnimationFrame(this.animate.bind(this)))}open(){this.init(),document.body.appendChild(this.canvas),this.hasAnimation&&this.animate()}close(){document.body.removeChild(this.canvas),this.dispose(),ee(this,Ys)&&cancelAnimationFrame(ee(this,Ys))}init(){j(this,le,ef).call(this),this.initScene(),this.initCamera(),this.initRenderer(),this.initControl(),this.initGuiControl()}initScene(){this.scene=new Fy}initCamera(){this.camera=new sn(75,this.canvas.width/this.canvas.height),this.camera.position.z=3,this.scene.add(this.camera)}initRenderer(){this.renderer=new Dd({canvas:this.canvas}),j(this,le,bl).call(this),yn(this,$s,j(this,le,bl).bind(this)),window.addEventListener("resize",ee(this,$s))}initControl(){this.control=new Xd(this.camera,this.canvas),this.control.enableDamping=!0}initGuiControl(){this.guiControl=new pc({width:300,title:"GUI"}),this.guiControl.hide(),yn(this,qs,j(this,le,tf).bind(this)),document.addEventListener("keydown",ee(this,qs))}dispose(){j(this,le,jd).call(this),this.scene=null,this.camera=null,this.object3d=null,this.renderer=null,this.control=null,this.guiControl=null,this.canvas=null}}Ys=new WeakMap,qs=new WeakMap,$s=new WeakMap,le=new WeakSet,jd=function(){j(this,le,Yd).call(this),j(this,le,Kd).call(this),j(this,le,Zd).call(this),j(this,le,Jd).call(this),j(this,le,Qd).call(this)},Yd=function(){this.scene.traverse(e=>{e.isMesh&&(j(this,le,qd).call(this,e),j(this,le,$d).call(this,e))})},qd=function(e){e.geometry&&e.geometry.dispose()},$d=function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n.map&&n.map.dispose(),n.dispose()}):(e.material.map&&e.material.map.dispose(),e.material.dispose()))},Kd=function(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])},Zd=function(){this.renderer.dispose(),window.removeEventListener("resize",ee(this,$s))},Jd=function(){this.control.dispose()},Qd=function(){this.guiControl.destroy(),document.removeEventListener("keydown",ee(this,qs))},tf=function(e){e.code==="KeyH"&&this.guiControl.show(this.guiControl._hidden)},ef=function(){this.canvas=document.createElement("canvas")},bl=function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(this.scene,this.camera)};let $M=class extends nn{get title(){return"[LESSON 03] First Three.js Project"}get link(){return"https://threejs-journey.com/lessons/first-threejs-project"}init(){super.init();const t=new Ie(1,1,1),e=new Xe({color:16711680});this.object3d=new Gt(t,e),this.scene.add(this.object3d),this.renderer.render(this.scene,this.camera)}},KM=class extends nn{get title(){return"[LESSON 04] Transform objects"}get link(){return"https://threejs-journey.com/lessons/transform-objects"}init(){super.init();const t=new UM(6);this.scene.add(t),this.object3d=new $i,this.object3d.scale.y=2,this.object3d.scale.x=.5,this.object3d.rotation.y=Math.PI*.25,this.scene.add(this.object3d);const e=new Ie(1,1,1),n=new Xe({color:16711680}),i=new Gt(e,n);i.position.x=-1.5,this.object3d.add(i);const r=new Ie(1,1,1),o=new Xe({color:65280}),a=new Gt(r,o);a.position.x=0,this.object3d.add(a);const l=new Ie(1,1,1),c=new Xe({color:255}),h=new Gt(l,c);h.position.x=1.5,this.object3d.add(h),this.camera.lookAt(i.position),this.renderer.render(this.scene,this.camera)}};function ii(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function nf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sr={duration:.5,overwrite:!1,delay:0},mc,Ye,de,wn=1e8,se=1/wn,wl=Math.PI*2,ZM=wl/4,JM=0,sf=Math.sqrt,QM=Math.cos,tS=Math.sin,ke=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},hi=function(t){return typeof t=="number"},gc=function(t){return typeof t>"u"},Wn=function(t){return typeof t=="object"},rn=function(t){return t!==!1},_c=function(){return typeof window<"u"},Ro=function(t){return Me(t)||ke(t)},rf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qe=Array.isArray,Tl=/(?:-?\.?\d|\.)+/gi,of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,af=/[+-]=-?[.\d]+/,lf=/[^,'"\[\]\s]+/gi,eS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pe,Nn,Al,xc,xn={},Yo={},cf,hf=function(t){return(Yo=ls(t,xn))&&cn},vc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Br=function(t,e){return!e&&console.warn(t)},uf=function(t,e){return t&&(xn[t]=e)&&Yo&&(Yo[t]=e)||xn},zr=function(){return 0},nS={suppressEvents:!0,isStart:!0,kill:!1},Uo={suppressEvents:!0,kill:!1},iS={suppressEvents:!0},yc={},Ti=[],Cl={},df,fn={},el={},Au=30,Io=[],Mc="",Sc=function(t){var e=t[0],n,i;if(Wn(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Io.length;i--&&!Io[i].targetTest(e););n=Io[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Of(t[i],n)))||t.splice(i,1);return t},ts=function(t){return t._gsap||Sc(Tn(t))[0]._gsap},ff=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():gc(n)&&t.getAttribute&&t.getAttribute(e)||n},on=function(t,e){return(t=t.split(",")).forEach(e)||t},Ee=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Vs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},qo=function(){var t=Ti.length,e=Ti.slice(0),n,i;for(Cl={},Ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pf=function(t,e,n,i){Ti.length&&!Ye&&qo(),t.render(e,n,Ye&&e<0&&(t._initted||t._startAt)),Ti.length&&!Ye&&qo()},mf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(lf).length<2?e:ke(t)?t.trim():t},gf=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ls=function(t,e){for(var n in e)t[n]=e[n];return t},Cu=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Wn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},$o=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Lr=function(t){var e=t.parent||pe,n=t.keyframes?rS(qe(t.keyframes)):An;if(rn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},oS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},_f=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},la=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},aS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rl=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(Uo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},lS=function s(t){return!t||t._ts&&s(t.parent)},Ru=function(t){return t._repeat?rr(t._tTime,t=t.duration()+t._rDelay)*t:0},rr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ko=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ca=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||se)||0))},ha=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ca(t),n._dirty||es(n,t)),t},xf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ko(t.rawTime(),e),(!e._dur||$r(0,e.totalDuration(),n)-e._tTime>se)&&e.render(n,!0)),es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-se}},zn=function(t,e,n,i){return e.parent&&Li(e),e._start=ze((hi(n)?n:n||t!==pe?Sn(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_f(t,e,"_first","_last",t._sort?"_start":0),Ll(e)||(t._recent=e),i||xf(t,e),t._ts<0&&ha(t,t._tTime),t},vf=function(t,e){return(xn.ScrollTrigger||vc("scrollTrigger",e))&&xn.ScrollTrigger.create(e,t)},yf=function(t,e,n,i,r){if(bc(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&df!==mn.frame)return Ti.push(t),t._lazy=[r,i],1},cS=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ll=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hS=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&cS(t)&&!(!t._initted&&Ll(t))||(t._ts<0||t._dp._ts<0)&&!Ll(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=$r(0,t._tDur,e),h=rr(l,a),t._yoyo&&h&1&&(o=1-o),h!==rr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ye||i||t._zTime===se||!e&&t._zTime){if(!t._initted&&yf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Rl(t,e,n,!0),t._onUpdate&&!n&&gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Li(t,1),!n&&!Ye&&(gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},uS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},or=function(t,e,n,i){var r=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ze(o*(r+1)+t._rDelay*r):o,a>0&&!i&&ha(t,t._tTime=t._tDur*a),t.parent&&ca(t),n||es(t.parent,t),t},Lu=function(t){return t instanceof tn?es(t):or(t,t._dur)},dS={_start:0,endTime:zr,totalDuration:zr},Sn=function s(t,e,n){var i=t.labels,r=t._recent||dS,o=t.duration()>=wn?r.endTime(!1):t._dur,a,l,c;return ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(qe(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Pr=function(t,e,n){var i=hi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Pe(e[0],o,e[r+1])},Ni=function(t,e){return t||t===0?e(t):e},$r=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!ke(t)||!(e=eS.exec(t))?"":e[1]},fS=function(t,e,n){return Ni(n,function(i){return $r(t,e,i)})},Pl=[].slice,Mf=function(t,e){return t&&Wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Wn(t[0]))&&!t.nodeType&&t!==Nn},pS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ke(i)&&!e||Mf(i,1)?(r=n).push.apply(r,Tn(i)):n.push(i)})||n},Tn=function(t,e,n){return de&&!e&&de.selector?de.selector(t):ke(t)&&!n&&(Al||!ar())?Pl.call((e||xc).querySelectorAll(t),0):qe(t)?pS(t,n):Mf(t)?Pl.call(t,0):t?[t]:[]},Dl=function(t){return t=Tn(t)[0]||Br("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Tn(e,n.querySelectorAll?n:n===t?Br("Invalid scope")||xc.createElement("div"):t)}},Sf=function(t){return t.sort(function(){return .5-Math.random()})},Ef=function(t){if(Me(t))return t;var e=Wn(t)?t:{each:t},n=ns(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return ke(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||e).length,m=o[g],f,v,x,M,S,T,E,A,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,wn])[1],!y){for(E=-wn;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],f=l?Math.min(y,g)*h-.5:i%y,v=y===wn?0:l?g*u/y-.5:i/y|0,E=0,A=wn,T=0;T<g;T++)x=T%y-f,M=v-(T/y|0),m[T]=S=c?Math.abs(c==="y"?M:x):sf(x*x+M*M),S>E&&(E=S),S<A&&(A=S);i==="random"&&Sf(m),m.max=E-A,m.min=A,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ve(e.amount||e.each)||0,n=n&&g<0?Uf(n):n}return g=(m[d]-m.min)/m.max||0,ze(m.b+(n?n(g):g)*m.v)+m.u}},Ul=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(hi(n)?0:Ve(n))}},bf=function(t,e){var n=qe(t),i,r;return!n&&Wn(t)&&(i=n=t.radius||wn,t.values?(t=Tn(t.values),(r=!hi(t[0]))&&(i*=i)):t=Ul(t.increment)),Ni(e,n?Me(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=wn,h=0,u=t.length,d,p;u--;)r?(d=t[u].x-a,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||hi(o)?h:h+Ve(o)}:Ul(t))},wf=function(t,e,n,i){return Ni(qe(t)?!e:n===!0?!!(n=0):!i,function(){return qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},mS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},gS=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},_S=function(t,e,n){return Af(t,e,0,1,n)},Tf=function(t,e,n){return Ni(n,function(i){return t[~~e(i)]})},xS=function s(t,e,n){var i=e-t;return qe(t)?Tf(t,s(0,t.length),e):Ni(n,function(r){return(i+(r-t)%i)%i+t})},vS=function s(t,e,n){var i=e-t,r=i*2;return qe(t)?Tf(t,s(0,t.length-1),e):Ni(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},kr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?lf:Tl),n+=t.substr(e,i-e)+wf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Af=function(t,e,n,i,r){var o=e-t,a=i-n;return Ni(r,function(l){return n+((l-t)/o*a||0)})},yS=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=ke(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(qe(t)&&!qe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ls(qe(t)?[]:{},t));if(!h){for(l in e)Ec.call(a,t,l,"get",e[l]);r=function(_){return Ac(_,a)||(o?t.p:t)}}}return Ni(n,r)},Pu=function(t,e,n){var i=t.labels,r=wn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},gn=function(t,e,n){var i=t.vars,r=i[e],o=de,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ti.length&&qo(),a&&(de=a),h=l?r.apply(c,l):r.call(c),de=o,h},Sr=function(t){return Li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&gn(t,"onInterrupt"),t},zs,Cf=[],Rf=function(t){if(t)if(t=!t.name&&t.default||t,_c()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:zr,render:Ac,add:Ec,kill:OS,modifier:NS,rawVars:0},o={targetTest:0,get:0,getSetter:Tc,aliases:{},register:0};if(ar(),t!==i){if(fn[e])return;An(i,An($o(t,r),o)),ls(i.prototype,ls(r,$o(t,o))),fn[i.prop=e]=i,t.targetTest&&(Io.push(i),yc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}uf(e,i),t.register&&t.register(cn,i,an)}else Cf.push(t)},ne=255,Er={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},nl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},Lf=function(t,e,n){var i=t?hi(t)?[t>>16,t>>8&ne,t&ne]:0:Er.black,r,o,a,l,c,h,u,d,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Er[t])i=Er[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Tl),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=nl(l+1/3,r,o),i[1]=nl(l,r,o),i[2]=nl(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(of),n&&i.length<4&&(i[3]=1),i}else i=t.match(Tl)||Er.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ne,o=i[1]/ne,a=i[2]/ne,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(o-a)/p+(o<a?6:0):u===o?(a-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Pf=function(t){var e=[],n=[],i=-1;return t.split(Ai).forEach(function(r){var o=r.match(Bs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Du=function(t,e,n){var i="",r=(t+i).match(Ai),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Lf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Pf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ai,"1").split(Bs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ai),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ai=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Er)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),MS=/hsl[a]?\(/,Df=function(t){var e=t.join(" "),n;if(Ai.lastIndex=0,Ai.test(e))return n=MS.test(e),t[1]=Du(t[1],n),t[0]=Du(t[0],n,Pf(t[1])),!0},Gr,mn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,p,_=function g(m){var f=s()-i,v=m===!0,x,M,S,T;if((f>t||f<0)&&(n+=f-e),i+=f,S=i-n,x=S-o,(x>0||v)&&(T=++u.frame,d=S-u.time*1e3,u.time=S=S/1e3,o+=x+(x>=r?4:r-x),M=1),v||(l=c(g)),M)for(p=0;p<a.length;p++)a[p](S,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){cf&&(!Al&&_c()&&(Nn=Al=window,xc=Nn.document||{},xn.gsap=cn,(Nn.gsapVersions||(Nn.gsapVersions=[])).push(cn.version),hf(Yo||Nn.GreenSockGlobals||!Nn.gsap&&Nn||{}),Cf.forEach(Rf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Gr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Gr=0,c=zr},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,f,v){var x=f?function(M,S,T,E){m(M,S,T,E),u.remove(x)}:m;return u.remove(m),a[v?"unshift":"push"](x),ar(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},u}(),ar=function(){return!Gr&&mn.wake()},Zt={},SS=/^[\d.\-M][\d.\-,\s]/,ES=/["']/g,bS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ES,"").trim():+c,i=l.substr(a+1).trim();return e},wS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},TS=function(t){var e=(t+"").split("("),n=Zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[bS(e[1])]:wS(t).split(",").map(mf)):Zt._CE&&SS.test(t)?Zt._CE("",t):n},Uf=function(t){return function(e){return 1-t(1-e)}},If=function s(t,e){for(var n=t._first,i;n;)n instanceof tn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ns=function(t,e){return t&&(Me(t)?t:Zt[t]||TS(t))||e},fs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return on(t,function(a){Zt[a]=xn[a]=r,Zt[o=a.toLowerCase()]=n;for(var l in r)Zt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[a+"."+l]=r[l]}),r},Nf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},il=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/wl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*tS((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Nf(a);return r=wl/r,l.config=function(c,h){return s(t,c,h)},l},sl=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Nf(n);return i.config=function(r){return s(t,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;fs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;fs("Elastic",il("in"),il("out"),il());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};fs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);fs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});fs("Circ",function(s){return-(sf(1-s*s)-1)});fs("Sine",function(s){return s===1?1:-QM(s*ZM)+1});fs("Back",sl("in"),sl("out"),sl());Zt.SteppedEase=Zt.steps=xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-se;return function(a){return((i*$r(0,o,a)|0)+r)*n}}};sr.ease=Zt["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Mc+=s+","+s+"Params,"});var Of=function(t,e){this.id=JM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ff,this.set=e?e.getSetter:Tc},Hr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,or(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),Gr||mn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ha(this,n),!r._dp||r.parent||xf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ru(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ru(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ko(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-se?0:this._rts,this.totalTime($r(-Math.abs(this._delay),this._tDur,r),i!==!1),ca(this),aS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==se&&(this._tTime-=se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ko(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=iS);var i=Ye;return Ye=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ye=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Sn(this,n),rn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Me(n)?n:gf,a=function(){var c=i.then;i.then=null,Me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Sr(this)},s}();An(Hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-se,_prom:0,_ps:!1,_rts:1});var tn=function(s){nf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=rn(n.sortChildren),pe&&zn(n.parent||pe,ii(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&vf(ii(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Pr(0,arguments,this),this},e.from=function(i,r,o){return Pr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Pr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Lr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pe(i,r,Sn(this,o),1),this},e.call=function(i,r,o){return zn(this,Pe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Pe(i,o,Sn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Lr(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Lr(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ze(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,v,x,M,S,T,E;if(this!==pe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,x=this._ts,f=!x,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=ze(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),S=rr(this._tTime,m),!a&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),T&&g&1&&(d=c-d,E=1),g!==S&&!this._lock){var A=T&&S&1,y=A===(T&&g&1);if(g<S&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(E?0:ze(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;If(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=uS(this,ze(a),ze(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(gn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,o),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=-se);break}}p=_}else{p=this._last;for(var b=i<0?i:d;p;){if(_=p._prev,(p._act||b<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,r,o||Ye&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=b?-se:se);break}}p=_}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-se)._zTime=d>=a?1:-1,this._ts))return this._start=M,ca(this),this.render(i,r,o);this._onUpdate&&!r&&gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Li(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(gn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(hi(r)||(r=Sn(this,r,i)),!(i instanceof Hr)){if(qe(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ke(i))return this.addLabel(i,r);if(Me(i))i=Pe.delayedCall(0,i);else return this}return this!==i?zn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-wn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Pe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ke(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(la(this,i),i===this._recent&&(this._recent=this._last),es(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Sn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Pe.delayedCall(0,r||zr,o);return a.data="isPause",this._hasPause=1,zn(this,a,Sn(this,i))},e.removePause=function(i){var r=this._first;for(i=Sn(this,i);r;)r._start===i&&r.data==="isPause"&&Li(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Tn(i),l=this._first,c=hi(r),h;l;)l instanceof Pe?sS(l._targets,a)&&(c?(!yi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Sn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=Pe.to(o,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||se,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&or(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,An({startAt:{time:Sn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pu(this,Sn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pu(this,Sn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return es(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=wn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;or(o,o===pe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(pe._ts&&(pf(pe,Ko(i,pe)),df=mn.frame),mn.frame>=Au){Au+=_n.autoSleep||120;var r=pe._first;if((!r||!r._ts)&&_n.autoSleep&&mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mn.sleep()}}},t}(Hr);An(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var AS=function(t,e,n,i,r,o,a){var l=new an(this._pt,t,e,0,1,Hf,null,r),c=0,h=0,u,d,p,_,g,m,f,v;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=kr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),d=n.match(tl)||[];u=tl.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Vs(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=tl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(af.test(i)||f)&&(l.e=0),this._pt=l,l},Ec=function(t,e,n,i,r,o,a,l,c,h){Me(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Me(u)?c?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=Me(u)?c?DS:kf:wc,_;if(ke(i)&&(~i.indexOf("random(")&&(i=kr(i)),i.charAt(1)==="="&&(_=Vs(d,i)+(Ve(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Il)return!isNaN(d*i)&&i!==""?(_=new an(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?IS:Gf,0,p),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&vc(e,i),AS.call(this,t,e,d,i,p,l||_n.stringFilter,c))},CS=function(t,e,n,i,r){if(Me(t)&&(t=Dr(t,r,e,n,i)),!Wn(t)||t.style&&t.nodeType||qe(t)||rf(t))return ke(t)?Dr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Dr(t[a],r,e,n,i);return o},Ff=function(t,e,n,i,r,o){var a,l,c,h;if(fn[t]&&(a=new fn[t]).init(r,a.rawVars?e[t]:CS(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new an(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},yi,Il,bc=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,v=f&&f.data==="nested"?f.vars.targets:m,x=t._overwrite==="auto"&&!mc,M=t.timeline,S,T,E,A,y,b,N,B,k,L,O,z,W;if(M&&(!d||!r)&&(r="none"),t._ease=ns(r,sr.ease),t._yEase=u?Uf(ns(u===!0?r:u,sr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(B=m[0]?ts(m[0]).harness:0,z=B&&i[B.prop],S=$o(i,yc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!p?g.render(-1,!0):g.revert(h&&_?Uo:nS),g._lazy=0),o){if(Li(t._startAt=Pe.set(m,An({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!a&&!p)&&t._startAt.revert(Uo),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),E=An({overwrite:!1,data:"isFromStart",lazy:a&&!g&&rn(l),immediateRender:a,stagger:0,parent:f},S),z&&(E[B.prop]=z),Li(t._startAt=Pe.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(Uo):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,se,se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&rn(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],N=y._gsap||Sc(m)[T]._gsap,t._ptLookup[T]=L={},Cl[N.id]&&Ti.length&&qo(),O=v===m?T:v.indexOf(y),B&&(k=new B).init(y,z||S,t,O,v)!==!1&&(t._pt=A=new an(t._pt,y,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(tt){L[tt]=A}),k.priority&&(b=1)),!B||z)for(E in S)fn[E]&&(k=Ff(E,S,t,O,y,v))?k.priority&&(b=1):L[E]=A=Ec.call(t,y,E,"get",S[E],O,v,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),x&&t._pt&&(yi=t,pe.killTweensOf(y,L,t.globalTime(e)),W=!t.parent,yi=0),t._pt&&l&&(Cl[N.id]=1)}b&&Vf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&M.render(wn,!0,!0)},RS=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Il=1,t.vars[e]="+=0",bc(t,a),Il=0,l?Br(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ee(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},LS=function(t,e){var n=t[0]?ts(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=ls({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},PS=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(qe(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Dr=function(t,e,n,i,r){return Me(t)?t.call(e,n,i,r):ke(t)&&~t.indexOf("random(")?kr(t):t},Bf=Mc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zf={};on(Bf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return zf[s]=1});var Pe=function(s){nf(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Lr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=i.parent||pe,x=(qe(n)||rf(n)?hi(n[0]):"length"in i)?[n]:Tn(n),M,S,T,E,A,y,b,N;if(a._targets=x.length?Sc(x):Br("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||Ro(c)||Ro(h)){if(i=a.vars,M=a.timeline=new tn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),M.kill(),M.parent=M._dp=ii(a),M._start=0,d||Ro(c)||Ro(h)){if(E=x.length,b=d&&Ef(d),Wn(d))for(A in d)~Bf.indexOf(A)&&(N||(N={}),N[A]=d[A]);for(S=0;S<E;S++)T=$o(i,zf),T.stagger=0,f&&(T.yoyoEase=f),N&&ls(T,N),y=x[S],T.duration=+Dr(c,ii(a),S,y,x),T.delay=(+Dr(h,ii(a),S,y,x)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(y,T,b?b(S,y,x):0),M._ease=Zt.none;M.duration()?c=h=0:a.timeline=0}else if(_){Lr(An(M.vars.defaults,{ease:"none"})),M._ease=ns(_.ease||i.ease||"none");var B=0,k,L,O;if(qe(_))_.forEach(function(z){return M.to(x,z,">")}),M.duration();else{T={};for(A in _)A==="ease"||A==="easeEach"||PS(A,_[A],T,_.easeEach);for(A in T)for(k=T[A].sort(function(z,W){return z.t-W.t}),B=0,S=0;S<k.length;S++)L=k[S],O={ease:L.e,duration:(L.t-(S?k[S-1].t:0))/100*c},O[A]=L.v,M.to(x,O,B),B+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return p===!0&&!mc&&(yi=ii(a),pe.killTweensOf(x),yi=0),zn(v,ii(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===ze(v._time)&&rn(u)&&lS(ii(a))&&v.data!=="nested")&&(a._tTime=-se,a.render(Math.max(0,-h)||0)),m&&vf(ii(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-se&&!h?l:i<se?0:i,d,p,_,g,m,f,v,x,M;if(!c)hS(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=ze(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===ze(u/g)&&(d=c,_--),d>c&&(d=c)),f=this._yoyo&&_&1,f&&(M=this._yEase,d=c-d),m=rr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(x&&this._yEase&&If(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(ze(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(yf(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!r&&!_&&(gn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Rl(this,i,r,o),gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Rl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!r&&!(h&&!a)&&(u||a||f)&&(gn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Gr||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bc(this,c),h=this._ease(c/this._dur),RS(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(ha(this,0),this.parent||_f(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Sr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,yi&&yi.vars.overwrite!==!0)._first||Sr(this),this.parent&&o!==this.timeline.totalDuration()&&or(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Tn(i):a,c=this._ptLookup,h=this._pt,u,d,p,_,g,m,f;if((!r||r==="all")&&oS(a,l))return r==="all"&&(this._pt=0),Sr(this);for(u=this._op=this._op||[],r!=="all"&&(ke(r)&&(g={},on(r,function(v){return g[v]=1}),r=g),r=LS(a,r)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],r==="all"?(u[f]=r,_=d,p={}):(p=u[f]=u[f]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&la(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Sr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Pr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Pr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return pe.killTweensOf(i,r,o)},t}(Hr);An(Pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(s){Pe[s]=function(){var t=new tn,e=Pl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var wc=function(t,e,n){return t[e]=n},kf=function(t,e,n){return t[e](n)},DS=function(t,e,n,i){return t[e](i.fp,n)},US=function(t,e,n){return t.setAttribute(e,n)},Tc=function(t,e){return Me(t[e])?kf:gc(t[e])&&t.setAttribute?US:wc},Gf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},IS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ac=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},NS=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},OS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?la(this,e,"_pt"):e.dep||(n=1),e=i;return!n},FS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Vf=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},an=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Gf,this.d=l||this,this.set=c||wc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=FS,this.m=n,this.mt=r,this.tween=i},s}();on(Mc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return yc[s]=1});xn.TweenMax=xn.TweenLite=Pe;xn.TimelineLite=xn.TimelineMax=tn;pe=new tn({sortChildren:!1,defaults:sr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=Df;var is=[],No={},BS=[],Uu=0,zS=0,rl=function(t){return(No[t]||BS).map(function(e){return e()})},Nl=function(){var t=Date.now(),e=[];t-Uu>2&&(rl("matchMediaInit"),is.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Nn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),rl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Uu=t,rl("matchMedia"))},Wf=function(){function s(e,n){this.selector=n&&Dl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zS++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Me(n)&&(r=i,i=n,n=Me);var o=this,a=function(){var c=de,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Dl(r)),de=o,u=i.apply(o,arguments),Me(u)&&o._r.push(u),de=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Me?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=de;de=null,n(this),de=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),kS=function(){function s(e){this.contexts=[],this.scope=e,de&&de.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Wn(n)||(n={matches:n});var o=new Wf(0,r||this.scope),a=o.conditions={},l,c,h;de&&!o.selector&&(o.selector=de.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Nn.matchMedia(n[c]),l&&(is.indexOf(o)<0&&is.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Nl):l.addEventListener("change",Nl)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Zo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Rf(i)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,e){return pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){ke(t)&&(t=Tn(t)[0]);var r=ts(t||{}).get,o=n?gf:mf;return n==="native"&&(n=""),t&&(e?o((fn[e]&&fn[e].get||r)(t,e,n,i)):function(a,l,c){return o((fn[a]&&fn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Tn(t),t.length>1){var i=t.map(function(h){return cn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=fn[e],a=ts(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;zs._pt=0,u.init(t,n?h+n:h,zs,0,[t]),u.render(1,u),zs._pt&&Ac(1,zs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=cn.to(t,ls((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ns(t.ease,sr.ease)),Cu(sr,t||{})},config:function(t){return Cu(_n,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fn[a]&&!xn[a]&&Br(e+" effect requires "+a+" plugin.")}),el[e]=function(a,l,c){return n(Tn(a),An(l||{},r),c)},o&&(tn.prototype[e]=function(a,l,c){return this.add(el[e](a,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=ns(e)},parseEase:function(t,e){return arguments.length?ns(t,e):Zt},getById:function(t){return pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new tn(t),i,r;for(n.smoothChildTiming=rn(t.smoothChildTiming),pe.remove(n),n._dp=0,n._time=n._tTime=pe._time,i=pe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Pe&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=r;return zn(pe,n,0),n},context:function(t,e){return t?new Wf(t,e):de},matchMedia:function(t){return new kS(t)},matchMediaRefresh:function(){return is.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Nl()},addEventListener:function(t,e){var n=No[t]||(No[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=No[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:xS,wrapYoyo:vS,distribute:Ef,random:wf,snap:bf,normalize:_S,getUnit:Ve,clamp:fS,splitColor:Lf,toArray:Tn,selector:Dl,mapRange:Af,pipe:mS,unitize:gS,interpolate:yS,shuffle:Sf},install:hf,effects:el,ticker:mn,updateRoot:tn.updateRoot,plugins:fn,globalTimeline:pe,core:{PropTween:an,globals:uf,Tween:Pe,Timeline:tn,Animation:Hr,getCache:ts,_removeLinkedListItem:la,reverting:function(){return Ye},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return mc=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Zo[s]=Pe[s]});mn.add(tn.updateRoot);zs=Zo.to({},{duration:0});var GS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},HS=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=GS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ol=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ke(r)&&(l={},on(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}HS(a,r)}}}},cn=Zo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ol("roundProps",Ul),ol("modifiers"),ol("snap",bf))||Zo;Pe.version=tn.version=cn.version="3.12.5";cf=1;_c()&&ar();Zt.Power0;Zt.Power1;Zt.Power2;Zt.Power3;Zt.Power4;Zt.Linear;Zt.Quad;Zt.Cubic;Zt.Quart;Zt.Quint;Zt.Strong;Zt.Elastic;Zt.Back;Zt.SteppedEase;Zt.Bounce;Zt.Sine;Zt.Expo;Zt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Iu,Mi,Ws,Cc,Ki,Nu,Rc,VS=function(){return typeof window<"u"},ui={},Xi=180/Math.PI,Xs=Math.PI/180,Ds=Math.atan2,Ou=1e8,Lc=/([A-Z])/g,WS=/(left|right|width|margin|padding|x)/i,XS=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ol=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},jf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$S=function(t,e,n){return t.style[e]=n},KS=function(t,e,n){return t.style.setProperty(e,n)},ZS=function(t,e,n){return t._gsap[e]=n},JS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},QS=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},tE=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ge="transform",ln=ge+"Origin",eE=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ui&&r){if(this.tfm=this.tfm||{},t!=="transform")t=kn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ri(i,a)}):this.tfm[t]=o.x?o[t]:ri(i,t),t===ln&&(this.tfm.zOrigin=o.zOrigin);else return kn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ge)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,e,"")),t=ge}(r||e)&&this.props.push(t,e,r[t])},Yf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},nE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Lc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Rc(),(!r||!r.isStart)&&!n[ge]&&(Yf(n),i.zOrigin&&n[ln]&&(n[ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},qf=function(t,e){var n={target:t,props:[],revert:nE,save:eE};return t._gsap||cn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},$f,Fl=function(t,e){var n=Mi.createElementNS?Mi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Mi.createElement(t);return n&&n.style?n:Mi.createElement(t)},Hn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Lc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,lr(e)||e,1)||""},Fu="O,Moz,ms,Ms,Webkit".split(","),lr=function(t,e,n){var i=e||Ki,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Fu[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Fu[o]:"")+t},Bl=function(){VS()&&window.document&&(Iu=window,Mi=Iu.document,Ws=Mi.documentElement,Ki=Fl("div")||{style:{}},Fl("div"),ge=lr(ge),ln=ge+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$f=!!lr("perspective"),Rc=cn.core.reverting,Cc=1)},al=function s(t){var e=Fl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Ws.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ws.removeChild(e),this.style.cssText=r,o},Bu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Kf=function(t){var e;try{e=t.getBBox()}catch{e=al.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===al||(e=al.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bu(t,["x","cx","x1"])||0,y:+Bu(t,["y","cy","y1"])||0,width:0,height:0}:e},Zf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kf(t))},cs=function(t,e){if(e){var n=t.style,i;e in ui&&e!==ln&&(e=ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Lc,"-$1").toLowerCase())):n.removeAttribute(e)}},Si=function(t,e,n,i,r,o){var a=new an(t._pt,e,n,0,1,o?jf:Xf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},zu={deg:1,rad:1,turn:1},iE={grid:1,flex:1},Pi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ki.style,l=WS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",_,g,m,f;if(i===o||!r||zu[i]||zu[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),f=t.getCTM&&Zf(t),(p||o==="%")&&(ui[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],Ee(p?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Mi||!g.appendChild)&&(g=Mi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===mn.time&&!m.uncache)return Ee(r/m.width*u);if(p&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,_=t[h],v?t.style[e]=v:cs(t,e)}else(p||o==="%")&&!iE[Hn(g,"display")]&&(a.position=Hn(t,"position")),g===t&&(a.position="static"),g.appendChild(Ki),_=Ki[h],g.removeChild(Ki),a.position="absolute";return l&&p&&(m=ts(g),m.time=mn.time,m.width=g[h]),Ee(d?_*r/u:_&&r?u/_*r:0)},ri=function(t,e,n,i){var r;return Cc||Bl(),e in kn&&e!=="transform"&&(e=kn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ui[e]&&e!=="transform"?(r=Wr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Qo(Hn(t,ln))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Jo[e]&&Jo[e](t,e,n)||Hn(t,e)||ff(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Pi(t,e,r,n)+n:r},sE=function(t,e,n,i){if(!n||n==="none"){var r=lr(e,t,1),o=r&&Hn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var a=new an(this._pt,t.style,e,0,1,Hf),l=0,c=0,h,u,d,p,_,g,m,f,v,x,M,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Hn(t,e)||i,g?t.style[e]=g:cs(t,e)),h=[n,i],Df(h),n=h[0],i=h[1],d=n.match(Bs)||[],S=i.match(Bs)||[],S.length){for(;u=Bs.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,M=g.substr((p+"").length),m.charAt(1)==="="&&(m=Vs(p,m)+M),f=parseFloat(m),x=m.substr((f+"").length),l=Bs.lastIndex-x.length,x||(x=x||_n.units[e]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(p=Pi(t,e,g,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?jf:Xf;return af.test(i)&&(a.e=0),this._pt=a,a},ku={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rE=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ku[n]||n,e[1]=ku[i]||i,e.join(" ")},oE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ui[a]&&(l=1,a=a==="transformOrigin"?ln:ge),cs(n,a);l&&(cs(n,ge),o&&(o.svg&&n.removeAttribute("transform"),Wr(n,1),o.uncache=1,Yf(i)))}},Jo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new an(t._pt,e,n,0,0,oE);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Vr=[1,0,0,1,0,0],Jf={},Qf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gu=function(t){var e=Hn(t,ge);return Qf(e)?Vr:e.substr(7).match(of).map(Ee)},Pc=function(t,e){var n=t._gsap||ts(t),i=t.style,r=Gu(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Vr:r):(r===Vr&&!t.offsetParent&&t!==Ws&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ws.appendChild(t)),r=Gu(t),l?i.display=l:cs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ws.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zl=function(t,e,n,i,r,o){var a=t._gsap,l=r||Pc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],x=e.split(" "),M=parseFloat(x[0])||0,S=parseFloat(x[1])||0,T,E,A,y;n?l!==Vr&&(E=p*m-_*g)&&(A=M*(m/E)+S*(-g/E)+(g*v-m*f)/E,y=M*(-_/E)+S*(p/E)-(p*v-_*f)/E,M=A,S=y):(T=Kf(t),M=T.x+(~x[0].indexOf("%")?M/100*T.width:M),S=T.y+(~(x[1]||x[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(f=M-c,v=S-h,a.xOffset=u+(f*p+v*g)-f,a.yOffset=d+(f*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ln]="0px 0px",o&&(Si(o,a,"xOrigin",c,M),Si(o,a,"yOrigin",h,S),Si(o,a,"xOffset",u,a.xOffset),Si(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},Wr=function(t,e){var n=t._gsap||new Of(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Hn(t,ln)||"0",h,u,d,p,_,g,m,f,v,x,M,S,T,E,A,y,b,N,B,k,L,O,z,W,tt,K,$,F,H,rt,ut,_t;return h=u=d=g=m=f=v=x=M=0,p=_=1,n.svg=!!(t.getCTM&&Zf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ge]!=="none"?l[ge]:"")),i.scale=i.rotate=i.translate="none"),E=Pc(t,n.svg),n.svg&&(n.uncache?(tt=t.getBBox(),c=n.xOrigin-tt.x+"px "+(n.yOrigin-tt.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),zl(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,T=n.yOrigin||0,E!==Vr&&(N=E[0],B=E[1],k=E[2],L=E[3],h=O=E[4],u=z=E[5],E.length===6?(p=Math.sqrt(N*N+B*B),_=Math.sqrt(L*L+k*k),g=N||B?Ds(B,N)*Xi:0,v=k||L?Ds(k,L)*Xi+g:0,v&&(_*=Math.abs(Math.cos(v*Xs))),n.svg&&(h-=S-(S*N+T*k),u-=T-(S*B+T*L))):(_t=E[6],rt=E[7],$=E[8],F=E[9],H=E[10],ut=E[11],h=E[12],u=E[13],d=E[14],A=Ds(_t,H),m=A*Xi,A&&(y=Math.cos(-A),b=Math.sin(-A),W=O*y+$*b,tt=z*y+F*b,K=_t*y+H*b,$=O*-b+$*y,F=z*-b+F*y,H=_t*-b+H*y,ut=rt*-b+ut*y,O=W,z=tt,_t=K),A=Ds(-k,H),f=A*Xi,A&&(y=Math.cos(-A),b=Math.sin(-A),W=N*y-$*b,tt=B*y-F*b,K=k*y-H*b,ut=L*b+ut*y,N=W,B=tt,k=K),A=Ds(B,N),g=A*Xi,A&&(y=Math.cos(A),b=Math.sin(A),W=N*y+B*b,tt=O*y+z*b,B=B*y-N*b,z=z*y-O*b,N=W,O=tt),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Ee(Math.sqrt(N*N+B*B+k*k)),_=Ee(Math.sqrt(z*z+_t*_t)),A=Ds(O,z),v=Math.abs(A)>2e-4?A*Xi:0,M=ut?1/(ut<0?-ut:ut):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qf(Hn(t,ge)),W&&t.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ee(p),n.scaleY=Ee(_),n.rotation=Ee(g)+a,n.rotationX=Ee(m)+a,n.rotationY=Ee(f)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ln]=Qo(c)),n.xOffset=n.yOffset=0,n.force3D=_n.force3D,n.renderTransform=n.svg?lE:$f?tp:aE,n.uncache=0,n},Qo=function(t){return(t=t.split(" "))[0]+" "+t[1]},ll=function(t,e,n){var i=Ve(e);return Ee(parseFloat(e)+parseFloat(Pi(t,"x",n+"px",i)))+i},aE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tp(t,e)},Hi="0deg",yr="0px",Vi=") ",tp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,v=n.target,x=n.zOrigin,M="",S=f==="auto"&&t&&t!==1||f===!0;if(x&&(u!==Hi||h!==Hi)){var T=parseFloat(h)*Xs,E=Math.sin(T),A=Math.cos(T),y;T=parseFloat(u)*Xs,y=Math.cos(T),o=ll(v,o,E*y*-x),a=ll(v,a,-Math.sin(T)*-x),l=ll(v,l,A*y*-x+x)}m!==yr&&(M+="perspective("+m+Vi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(S||o!==yr||a!==yr||l!==yr)&&(M+=l!==yr||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vi),c!==Hi&&(M+="rotate("+c+Vi),h!==Hi&&(M+="rotateY("+h+Vi),u!==Hi&&(M+="rotateX("+u+Vi),(d!==Hi||p!==Hi)&&(M+="skew("+d+", "+p+Vi),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Vi),v.style[ge]=M||"translate(0, 0)"},lE=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,v=n.forceCSS,x=parseFloat(o),M=parseFloat(a),S,T,E,A,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xs,c*=Xs,S=Math.cos(l)*u,T=Math.sin(l)*u,E=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(h*=Xs,y=Math.tan(c-h),y=Math.sqrt(1+y*y),E*=y,A*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),S*=y,T*=y)),S=Ee(S),T=Ee(T),E=Ee(E),A=Ee(A)):(S=u,A=d,T=E=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Pi(p,"x",o,"px"),M=Pi(p,"y",a,"px")),(_||g||m||f)&&(x=Ee(x+_-(_*S+g*E)+m),M=Ee(M+g-(_*T+g*A)+f)),(i||r)&&(y=p.getBBox(),x=Ee(x+i/100*y.width),M=Ee(M+r/100*y.height)),y="matrix("+S+","+T+","+E+","+A+","+x+","+M+")",p.setAttribute("transform",y),v&&(p.style[ge]=y)},cE=function(t,e,n,i,r){var o=360,a=ke(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Xi:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Ou)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ou)%o-~~(c/o)*o)),t._pt=d=new an(t._pt,e,n,i,c,jS),d.e=h,d.u="deg",t._props.push(n),d},Hu=function(t,e){for(var n in e)t[n]=e[n];return t},hE=function(t,e,n){var i=Hu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ge]=e,a=Wr(n,1),cs(n,ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ge],o[ge]=e,a=Wr(n,1),o[ge]=c);for(l in ui)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(p=Ve(c),_=Ve(h),u=p!==_?Pi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new an(t._pt,a,l,u,d-u,Ol),t._pt.u=_||0,t._props.push(l));Hu(a,i)};on("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Jo[t>1?"border"+s:s]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(_){return ri(a,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,u)}});var ep={name:"css",register:Bl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,p,_,g,m,f,v,x,M,S,T,E,A;Cc||Bl(),this.styles=this.styles||qf(t),A=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(fn[g]&&Ff(g,e,n,i,t,r)))){if(p=typeof h,_=Jo[g],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=kr(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ai.lastIndex=0,Ai.test(c)||(m=Ve(c),f=Ve(h)),f?m!==f&&(c=Pi(t,g,c,f)+f):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),A.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],ke(c)&&~c.indexOf("random(")&&(c=kr(c)),Ve(c+"")||c==="auto"||(c+=_n.units[g]||Ve(ri(t,g))||""),(c+"").charAt(1)==="="&&(c=ri(t,g))):c=ri(t,g),d=parseFloat(c),v=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in kn&&(g==="autoAlpha"&&(d===1&&ri(t,"visibility")==="hidden"&&u&&(d=0),A.push("visibility",0,a.visibility),Si(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=kn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ui,x){if(this.styles.save(g),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||Wr(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new an(this._pt,a,ge,0,1,S.renderTransform,S,0,-1),M.dep=1),g==="scale")this._pt=new an(this._pt,S,"scaleY",S.scaleY,(v?Vs(S.scaleY,v+u):u)-S.scaleY||0,Ol),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(ln,0,a[ln]),h=rE(h),S.svg?zl(t,h,0,T,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==S.zOrigin&&Si(this,S,"zOrigin",S.zOrigin,f),Si(this,a,g,Qo(c),Qo(h)));continue}else if(g==="svgOrigin"){zl(t,h,1,T,0,this);continue}else if(g in Jf){cE(this,S,g,d,v?Vs(d,v+h):h);continue}else if(g==="smoothOrigin"){Si(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){hE(this,h,t);continue}}else g in a||(g=lr(g)||g);if(x||(u||u===0)&&(d||d===0)&&!XS.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),f=Ve(h)||(g in _n.units?_n.units[g]:m),m!==f&&(d=Pi(t,g,c,f)),this._pt=new an(this._pt,x?S:a,g,d,(v?Vs(d,v+u):u)-d,!x&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?qS:Ol),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=YS);else if(g in a)sE.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){vc(g,h);continue}x||(g in a?A.push(g,0,a[g]):A.push(g,1,c||t[g])),o.push(g)}}E&&Vf(this)},render:function(t,e){if(e.tween._time||!Rc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ri,aliases:kn,getSetter:function(t,e,n){var i=kn[e];return i&&i.indexOf(",")<0&&(e=i),e in ui&&e!==ln&&(t._gsap.x||ri(t,"x"))?n&&Nu===n?e==="scale"?JS:ZS:(Nu=n||{})&&(e==="scale"?QS:tE):t.style&&!gc(t.style[e])?$S:~e.indexOf("-")?KS:Tc(t,e)},core:{_removeProperty:cs,_getMatrix:Pc}};cn.utils.checkPrefix=lr;cn.core.getStyleSaver=qf;(function(s,t,e,n){var i=on(s+","+t+","+e,function(r){ui[r]=1});on(t,function(r){_n.units[r]="deg",Jf[r]=1}),kn[i[13]]=s+","+t,on(n,function(r){var o=r.split(":");kn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_n.units[s]="px"});cn.registerPlugin(ep);var ta=cn.registerPlugin(ep)||cn;ta.core.Tween;let uE=class extends nn{constructor(){super(...arguments);wt(this,"animations",[]);wt(this,"hasAnimation",!0)}get title(){return"[LESSON 05] Animations"}get link(){return"https://threejs-journey.com/lessons/animations"}update(e){this.object3d.position.x=Math.sin(e/1e3),this.object3d.position.y=Math.cos(e/1e3)}init(){super.init();const e=new Ie(1,1,1),n=new Xe({color:255});this.object3d=new Gt(e,n),this.scene.add(this.object3d),this.animations.push(ta.to(this.object3d.position,{z:-3,delay:1,duration:1})),this.animations.push(ta.to(this.object3d.position,{z:0,delay:2,duration:1}))}dispose(){super.dispose(),this.animations.forEach(e=>e.kill()),this.animations=[]}};var Ks,Zs,ve,np,ip,kl,sp,rp,op,ap,lp,cp,hp,Vu;let dE=(Vu=class extends nn{constructor(){super(...arguments);he(this,ve);wt(this,"hasAnimation",!0);he(this,Ks);he(this,Zs)}get title(){return"[LESSON 06] Cameras"}get link(){return"https://threejs-journey.com/lessons/cameras"}update(){j(this,ve,np).call(this)}init(){super.init(),j(this,ve,rp).call(this),j(this,ve,sp).call(this)}dispose(){super.dispose(),j(this,ve,op).call(this),j(this,ve,lp).call(this)}initControl(){j(this,ve,kl).call(this),j(this,ve,ap).call(this)}initOrthographicCamera(){const e=this.canvas.width/this.canvas.height;this.camera=new tc(-e,e,1,-1),this.camera.position.z=3}},Ks=new WeakMap,Zs=new WeakMap,ve=new WeakSet,np=function(){this.control.update(),this.camera.lookAt(this.object3d.position)},ip=function(){this.control=new Xd(this.camera,this.canvas),this.control.enableDamping=!0},kl=function(){function e(n,i){this.x=0,this.y=0,this.boundUpdateCoordinates=null,this.init=function(){this.boundUpdateCoordinates=this.updateCoordindates.bind(this),i.addEventListener("mousemove",this.boundUpdateCoordinates)},this.update=function(r=5){const o=2*Math.PI*this.x;n.position.x=Math.cos(o)*r,n.position.z=Math.sin(o)*r,n.position.y=this.y*r},this.updateCoordindates=function(r){this.x=r.offsetX/i.width-.5,this.y=(r.offsetY/i.height-.5)*-1},this.dispose=function(){i.removeEventListener("mousemove",this.boundUpdateCoordinates)}}this.control=new e(this.camera,this.canvas),this.control.init()},sp=function(){const e=new Ie(1,1,1),n=new Xe({color:65280});this.object3d=new Gt(e,n),this.scene.add(this.object3d)},rp=function(){yn(this,Ks,j(this,ve,hp).bind(this)),document.addEventListener("keydown",ee(this,Ks))},op=function(){document.removeEventListener("keydown",ee(this,Ks))},ap=function(){yn(this,Zs,j(this,ve,cp).bind(this)),document.addEventListener("keydown",ee(this,Zs))},lp=function(){document.removeEventListener("keydown",ee(this,Zs))},cp=function(e){switch(e.code){case"KeyR":j(this,ve,ip).call(this);break;case"KeyC":j(this,ve,kl).call(this);break}},hp=function(e){switch(e.code){case"KeyP":this.initCamera();break;case"KeyO":this.initOrthographicCamera();break}},Vu);var Js,Xn,up,dp,fp,pp,Wu;let fE=(Wu=class extends nn{constructor(){super(...arguments);he(this,Xn);wt(this,"hasAnimation",!0);he(this,Js)}get title(){return"[LESSON 07] Fullscreen and resizing"}get link(){return"https://threejs-journey.com/lessons/fullscreen-and-resizing"}update(){this.control.update()}init(){super.init(),j(this,Xn,pp).call(this),j(this,Xn,up).call(this)}dispose(){super.dispose(),j(this,Xn,dp).call(this)}},Js=new WeakMap,Xn=new WeakSet,up=function(){yn(this,Js,j(this,Xn,fp).bind(this)),document.addEventListener("keydown",ee(this,Js))},dp=function(){document.removeEventListener("keydown",ee(this,Js))},fp=function(e){e.code==="KeyF"&&(document.fullscreenElement?document.exitFullscreen():this.canvas.requestFullscreen())},pp=function(){const e=new Ie(1,1,1),n=new Xe({color:16777215});this.object3d=new Gt(e,n),this.scene.add(this.object3d)},Wu);var Di,mp,gp,_p,Xu;let pE=(Xu=class extends nn{constructor(){super(...arguments);he(this,Di);wt(this,"hasAnimation",!0)}get title(){return"[LESSON 08] Geometries"}get link(){return"https://threejs-journey.com/lessons/geometries"}update(){this.control.update()}init(){super.init(),j(this,Di,mp).call(this)}},Di=new WeakSet,mp=function(){const e=new Xe({color:16777215,wireframe:!0});this.mesh=new Gt(j(this,Di,gp).call(this),e),this.scene.add(this.mesh)},gp=function(){const e=new xe;return e.setAttribute("position",j(this,Di,_p).call(this)),e},_p=function(){const i=new Float32Array(450);for(let r=0;r<450;r++)i[r]=(Math.random()-.5)*2;return new je(i,3)},Xu);var cr,xp,vp,ju;let mE=(ju=class extends nn{constructor(){super(...arguments);he(this,cr);wt(this,"hasAnimation",!0)}get title(){return"[LESSON 09] Debug UI"}get link(){return"https://threejs-journey.com/lessons/debug-ui"}update(){this.control.update()}init(){super.init(),j(this,cr,vp).call(this),j(this,cr,xp).call(this)}},cr=new WeakSet,xp=function(){this.guiControl.add(this.mesh.position,"y").min(-2).max(2).step(.01).name("elevation"),this.guiControl.add(this.mesh,"visible"),this.guiControl.add(this.mesh.material,"wireframe"),this.guiControl.addColor({color:this.mesh.material.color.getHex()},"color").onChange(e=>{this.mesh.material.color.setHex(e)}),this.guiControl.add({spin:()=>{ta.to(this.mesh.rotation,{y:this.mesh.rotation.y+Math.PI*2})}},"spin"),this.guiControl.add({subdivisions:1},"subdivisions").min(1).max(20).step(1).onFinishChange(e=>{this.mesh.geometry.dispose(),this.mesh.geometry=new Ie(1,1,1,e,e,e)})},vp=function(){const e=new Ie(1,1,1),n=new Xe({color:14253554,wireframe:!0});this.mesh=new Gt(e,n),this.scene.add(this.mesh)},ju);var Ui,yp,Mp,Sp,Yu;let gE=(Yu=class extends nn{constructor(){super(...arguments);he(this,Ui);wt(this,"loaderManager");wt(this,"textureLoader");wt(this,"doorMapTexture");wt(this,"hasAnimation",!0)}get title(){return"[LESSON 10] Textures"}get link(){return"https://threejs-journey.com/lessons/textures"}update(){this.control.update()}init(){super.init(),j(this,Ui,yp).call(this),j(this,Ui,Mp).call(this),j(this,Ui,Sp).call(this)}},Ui=new WeakSet,yp=function(){this.loaderManager=new Hd,this.textureLoader=new dr(this.loaderManager),this.texture=this.textureLoader.load("/three.js-journey/media/images/textures/door/color.jpg"),this.texture.colorSpace=ie},Mp=function(){const e=new Ie(1,1,1),n=new Xe({map:this.texture});this.mesh=new Gt(e,n),this.scene.add(this.mesh)},Sp=function(){this.guiControl.add(this.texture.repeat,"x").min(1).max(5).step(.01).name("Texture x"),this.guiControl.add(this.texture.repeat,"y").min(1).max(5).step(.01).name("Texture y"),this.guiControl.add({offset:0},"offset").min(0).max(1).step(.01).name("Texture offset").onChange(e=>{this.texture.offset.x=e,this.texture.offset.y=e}),this.guiControl.add({rotation:0},"rotation").min(0).max(2*Math.PI).step(.01).onChange(e=>{this.texture.center.x=.5,this.texture.center.y=.5,this.texture.rotation=e}),this.guiControl.add({addXRepeat:()=>{this.texture.wrapS=Ue,this.texture.needsUpdate=!0}},"addXRepeat").name("Repeat texture in X"),this.guiControl.add({addYRepeat:()=>{this.texture.wrapT=Ue,this.texture.needsUpdate=!0}},"addYRepeat").name("Repeat texture in Y"),this.guiControl.add({updateMinFilterToLinearFilter:()=>{this.texture.minFilter=ss,this.texture.generateMipmaps=!0,this.texture.needsUpdate=!0}},"updateMinFilterToLinearFilter").name("Update min filter to linear filter"),this.guiControl.add({updateMinFilterToNearestFilter:()=>{this.texture.minFilter=be,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0}},"updateMinFilterToNearestFilter").name("Update min filter to nearest filter"),this.guiControl.add({updateMagFilterToLinearFilter:()=>{this.texture.magFilter=Be,this.texture.needsUpdate=!0}},"updateMagFilterToLinearFilter").name("Update mag filter to linear filter"),this.guiControl.add({updateMagFilterToNearestFilter:()=>{this.texture.magFilter=be,this.texture.needsUpdate=!0}},"updateMagFilterToNearestFilter").name("Update mag filter to nearest filter")},Yu);class _E extends SM{constructor(t){super(t),this.type=ai}parse(t){const o=function(A,y){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},h=`
`,u=function(A,y,b){y=y||1024;let B=A.pos,k=-1,L=0,O="",z=String.fromCharCode.apply(null,new Uint16Array(A.subarray(B,B+128)));for(;0>(k=z.indexOf(h))&&L<y&&B<A.byteLength;)O+=z,L+=z.length,B+=128,z+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(B,B+128)));return-1<k?(A.pos+=L+k+1,O+z.slice(0,k)):!1},d=function(A){const y=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,z;for((A.pos>=A.byteLength||!(O=u(A)))&&o(1,"no header found"),(z=O.match(y))||o(3,"bad initial token"),L.valid|=1,L.programtype=z[1],L.string+=O+`
`;O=u(A),O!==!1;){if(L.string+=O+`
`,O.charAt(0)==="#"){L.comments+=O+`
`;continue}if((z=O.match(b))&&(L.gamma=parseFloat(z[1])),(z=O.match(N))&&(L.exposure=parseFloat(z[1])),(z=O.match(B))&&(L.valid|=2,L.format=z[1]),(z=O.match(k))&&(L.valid|=4,L.height=parseInt(z[1],10),L.width=parseInt(z[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},p=function(A,y,b){const N=y;if(N<8||N>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);N!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const B=new Uint8Array(4*y*b);B.length||o(4,"unable to allocate buffer space");let k=0,L=0;const O=4*N,z=new Uint8Array(4),W=new Uint8Array(O);let tt=b;for(;tt>0&&L<A.byteLength;){L+4>A.byteLength&&o(1),z[0]=A[L++],z[1]=A[L++],z[2]=A[L++],z[3]=A[L++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=N)&&o(3,"bad rgbe scanline format");let K=0,$;for(;K<O&&L<A.byteLength;){$=A[L++];const H=$>128;if(H&&($-=128),($===0||K+$>O)&&o(3,"bad scanline data"),H){const rt=A[L++];for(let ut=0;ut<$;ut++)W[K++]=rt}else W.set(A.subarray(L,L+$),K),K+=$,L+=$}const F=N;for(let H=0;H<F;H++){let rt=0;B[k]=W[H+rt],rt+=N,B[k+1]=W[H+rt],rt+=N,B[k+2]=W[H+rt],rt+=N,B[k+3]=W[H+rt],k+=4}tt--}return B},_=function(A,y,b,N){const B=A[y+3],k=Math.pow(2,B-128)/255;b[N+0]=A[y+0]*k,b[N+1]=A[y+1]*k,b[N+2]=A[y+2]*k,b[N+3]=1},g=function(A,y,b,N){const B=A[y+3],k=Math.pow(2,B-128)/255;b[N+0]=ao.toHalfFloat(Math.min(A[y+0]*k,65504)),b[N+1]=ao.toHalfFloat(Math.min(A[y+1]*k,65504)),b[N+2]=ao.toHalfFloat(Math.min(A[y+2]*k,65504)),b[N+3]=ao.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const f=d(m),v=f.width,x=f.height,M=p(m.subarray(m.pos),v,x);let S,T,E;switch(this.type){case Dn:E=M.length/4;const A=new Float32Array(E*4);for(let b=0;b<E;b++)_(M,b*4,A,b*4);S=A,T=Dn;break;case ai:E=M.length/4;const y=new Uint16Array(E*4);for(let b=0;b<E;b++)g(M,b*4,y,b*4);S=y,T=ai;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:x,data:S,header:f.string,gamma:f.gamma,exposure:f.exposure,type:T}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,a){switch(o.type){case Dn:case ai:o.colorSpace=Vn,o.minFilter=Be,o.magFilter=Be,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,i)}}var $e,Ep,bp,wp,Tp,Ap,Cp,Rp,qu;let xE=(qu=class extends nn{constructor(){super(...arguments);he(this,$e);wt(this,"plane");wt(this,"torus");wt(this,"sphere");wt(this,"doorColorTexture");wt(this,"doorAlphaTexture");wt(this,"doorAmbientOcclusionTexture");wt(this,"doorHeightTexture");wt(this,"doorMetalnessTexture");wt(this,"doorRoughnessTexture");wt(this,"doorNormalTexture");wt(this,"matcapTexture");wt(this,"gradientTexture");wt(this,"material");wt(this,"hasAnimation",!0)}get title(){return"[LESSON 11] Materials"}get link(){return"https://threejs-journey.com/lessons/materials"}update(e){this.control.update(),this.plane.rotation.x=1e-4*e,this.plane.rotation.y=1e-4*e,this.sphere.rotation.x=1e-4*e,this.sphere.rotation.y=1e-4*e,this.torus.rotation.x=1e-4*e,this.torus.rotation.y=1e-4*e}init(){super.init(),j(this,$e,Tp).call(this),j(this,$e,bp).call(this),j(this,$e,wp).call(this),j(this,$e,Rp).call(this),j(this,$e,Cp).call(this),j(this,$e,Ap).call(this),j(this,$e,Ep).call(this),this.sphere.position.x=-2,this.torus.position.x=2}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.torus=null}},$e=new WeakSet,Ep=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoat").min(0).max(1).step(.001),this.guiControl.add(this.material,"clearcoatRoughness").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheen").min(0).max(1).step(.001),this.guiControl.add(this.material,"sheenRoughness").min(0).max(1).step(.001),this.guiControl.addColor(this.material,"sheenColor"),this.guiControl.add(this.material,"iridescence").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"iridescenceIOR").min(1).max(2.333).step(1e-4),this.guiControl.add(this.material.iridescenceThicknessRange,"0").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 0"),this.guiControl.add(this.material.iridescenceThicknessRange,"1").min(1).max(1e3).step(1).name("iridescenceThicknessRange - 1"),this.guiControl.add(this.material,"transmission").min(0).max(1).step(1e-4),this.guiControl.add(this.material,"ior").min(1).max(10).step(1e-4),this.guiControl.add(this.material,"thickness").min(0).max(1).step(1e-4)},bp=function(){const e=new dr;this.doorColorTexture=e.load("/three.js-journey/media/images/textures/door/color.jpg"),this.doorAlphaTexture=e.load("/three.js-journey/media/images/textures/door/alpha.jpg"),this.doorAmbientOcclusionTexture=e.load("/three.js-journey/media/images/textures/door/ambientOcclusion.jpg"),this.doorHeightTexture=e.load("/three.js-journey/media/images/textures/door/height.jpg"),this.doorMetalnessTexture=e.load("/three.js-journey/media/images/textures/door/metalness.jpg"),this.doorRoughnessTexture=e.load("/three.js-journey/media/images/textures/door/roughness.jpg"),this.doorNormalTexture=e.load("/three.js-journey/media/images/textures/door/normal.jpg"),this.doorColorTexture.colorSpace=ie,this.matcapTexture=e.load("/three.js-journey/media/images/textures/matcaps/7.png"),this.gradientTexture=e.load("/three.js-journey/media/images/textures/gradients/3.jpg"),this.gradientTexture.generateMipmaps=!1,this.gradientTexture.minFilter=be,this.gradientTexture.magFilter=be},wp=function(){this.material=new _M,this.material.side=Bn,this.material.transparent=!0,this.material.alphaMap=this.doorAlphaTexture},Tp=function(){new _E().load("/three.js-journey/media/images/environmentMap/2k.hdr",n=>{n.mapping=zo,this.scene.background=n,this.scene.environment=n})},Ap=function(){const e=new qr(.5,.2,64,28);this.torus=new Gt(e,this.material),this.scene.add(this.torus)},Cp=function(){const e=new ds(.5,64,64);this.sphere=new Gt(e,this.material),this.scene.add(this.sphere)},Rp=function(){const e=new ci(1,1,100,100);this.plane=new Gt(e,this.material),this.scene.add(this.plane)},qu);class vE extends ur{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Vd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new yE(t)}}class yE{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=ME(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function ME(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const u=SE(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function SE(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new IM;let a,l,c,h,u,d,p,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=g.length;m<f;)switch(g[m++]){case"m":a=g[m++]*t+e,l=g[m++]*t+n,o.moveTo(a,l);break;case"l":a=g[m++]*t+e,l=g[m++]*t+n,o.lineTo(a,l);break;case"q":c=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,d=g[m++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,d=g[m++]*t+n,p=g[m++]*t+e,_=g[m++]*t+n,o.bezierCurveTo(u,d,p,_,c,h);break}}return{offsetX:r.ha*t,path:o}}class EE extends cc{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}var jn,Lp,Pp,Dp,Up,$u;let bE=($u=class extends nn{constructor(){super(...arguments);he(this,jn);wt(this,"material");wt(this,"hasAnimation",!0)}get title(){return"[LESSON 12] 3D Text"}get link(){return"https://threejs-journey.com/lessons/3d-text"}update(){this.control.update()}init(){super.init(),j(this,jn,Pp).call(this),j(this,jn,Dp).call(this),j(this,jn,Lp).call(this)}dispose(){super.dispose(),this.material=null}},jn=new WeakSet,Lp=function(){this.camera.position.z=2,this.camera.position.y=1,this.camera.position.x=1},Pp=function(){const n=new dr().load("/three.js-journey/media/images/textures/matcaps/1.png");n.colorSpace=ie,this.material=new xM({matcap:n})},Dp=function(){new vE().load("/three.js-journey/media/fonts/helvetiker_regular.typeface.json",n=>{const i=new EE("Three.js rocks!",{font:n,size:.3,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),this.mesh=new Gt(i,this.material),this.scene.add(this.mesh),j(this,jn,Up).call(this,i.boundingBox)})},Up=function(e){const n=new qr(.2,.1,20,45),i=e.max.x-e.min.x,r=e.max.y-e.min.y,o=e.max.z-e.min.z,a=5;for(let l=0;l<100;l++){const c=new Gt(n,this.material);c.position.x=(i+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.y=(r+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.position.z=(o+a)/2*(-1)**Math.round(Math.random())+Math.random()*5,c.rotation.x=Math.random()*Math.PI,c.rotation.y=Math.random()*Math.PI;const h=Math.random()*2;c.scale.set(h,h,h),this.scene.add(c)}},$u);class wE extends Xo{constructor(t,e){const n=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],i=new xe;i.setAttribute("position",new Jt(n,3)),i.computeBoundingSphere();const r=new Yr({fog:!1});super(i,r),this.light=t,this.color=e,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new xe;a.setAttribute("position",new Jt(o,3)),a.computeBoundingSphere(),this.add(new Gt(a,new Xe({side:We,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const t=this.material.color,e=Math.max(t.r,t.g,t.b);e>1&&t.multiplyScalar(1/e),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var Bt,Ip,Np,Op,Fp,Bp,zp,kp,Gp,Hp,Vp,Wp,Xp,ji,Gl,In,Ku;let TE=(Ku=class extends nn{constructor(){super(...arguments);he(this,Bt);wt(this,"material");wt(this,"plane");wt(this,"box");wt(this,"sphere");wt(this,"torus");wt(this,"hasAnimation",!0)}get title(){return"Lights"}get link(){return"https://threejs-journey.com/lessons/lights"}update(e){this.control.update(),this.box.rotation.x=1e-4*e,this.box.rotation.y=1e-4*e,this.sphere.rotation.x=1e-4*e,this.sphere.rotation.y=1e-4*e,this.torus.rotation.x=1e-4*e,this.torus.rotation.y=1e-4*e}init(){super.init(),j(this,Bt,kp).call(this),j(this,Bt,Gp).call(this),j(this,Bt,Hp).call(this),j(this,Bt,Vp).call(this),j(this,Bt,Wp).call(this),j(this,Bt,Xp).call(this),j(this,Bt,zp).call(this),j(this,Bt,Bp).call(this),j(this,Bt,Fp).call(this),j(this,Bt,Op).call(this),j(this,Bt,Np).call(this),j(this,Bt,Ip).call(this)}dispose(){super.dispose(),this.plane=null,this.box=null,this.sphere=null,this.torus=null}},Bt=new WeakSet,Ip=function(){const e=new Wd(16716032,1,0,Math.PI*.1,.25,1);e.position.z=-3,e.position.x=-2,e.target.position.x=-3,this.scene.add(e),this.scene.add(e.target);const n=j(this,Bt,ji).call(this,e,"Spot Light");j(this,Bt,In).call(this,n,e,"distance"),j(this,Bt,In).call(this,n,e,"angle"),j(this,Bt,In).call(this,n,e,"penumbra"),j(this,Bt,In).call(this,n,e,"decay");const i=new CM(e);this.scene.add(i)},Np=function(){const e=new AM(65280,1,2.5,2.5);e.position.x=-2,e.position.z=2,e.lookAt(this.box.position),this.scene.add(e);const n=j(this,Bt,ji).call(this,e,"Rect Area Light");j(this,Bt,In).call(this,n,e,"width"),j(this,Bt,In).call(this,n,e,"height");const i=new wE(e);this.scene.add(i)},Op=function(){const e=new Fs(15602090,1,0,2);e.position.x=2,e.position.z=2,this.scene.add(e);const n=j(this,Bt,ji).call(this,e,"Point Light");j(this,Bt,In).call(this,n,e,"distance"),j(this,Bt,In).call(this,n,e,"decay");const i=new RM(e,.2);this.scene.add(i)},Fp=function(){const e=new EM(16711680,255,.5);this.scene.add(e);const n=j(this,Bt,ji).call(this,e,"Hemisphere Light");j(this,Bt,Gl).call(this,n,e,"groundColor");const i=new PM(e,.2);this.scene.add(i)},Bp=function(){const e=new dc(65532,.9);e.position.set(5,1,0),this.scene.add(e),j(this,Bt,ji).call(this,e,"Directional Light");const n=new DM(e,.2);this.scene.add(n)},zp=function(){const e=new fc(16777215,.5);this.scene.add(e),j(this,Bt,ji).call(this,e,"Ambient Light")},kp=function(){this.material=new si,this.material.roughness=.5},Gp=function(){const e=new ci(10,10);this.plane=new Gt(e,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-2,this.scene.add(this.plane)},Hp=function(){const e=new Ie(1,1,1);this.box=new Gt(e,this.material),this.scene.add(this.box)},Vp=function(){const e=new ds(1);this.sphere=new Gt(e,this.material),this.sphere.position.x=2,this.scene.add(this.sphere)},Wp=function(){const e=new qr(.7,.3);this.torus=new Gt(e,this.material),this.torus.position.x=-2,this.scene.add(this.torus)},Xp=function(){this.camera.position.z=5},ji=function(e,n){const i=this.guiControl.addFolder(n);return j(this,Bt,In).call(this,i,e,"intensity"),j(this,Bt,Gl).call(this,i,e,"color"),i},Gl=function(e,n,i){e.addColor({color:n[i].getHex()},"color").onChange(r=>{n[i].setHex(r)})},In=function(e,n,i){e.add(n,i).min(0).max(5).step(.01)},Ku);var we,jp,Yp,qp,$p,Kp,Zp,Jp,br,Zu;let AE=(Zu=class extends nn{constructor(){super(...arguments);he(this,we);wt(this,"plane");wt(this,"sphere");wt(this,"sphereShadow");wt(this,"material");wt(this,"hasAnimation",!0)}get title(){return"Shadows"}get link(){return"https://threejs-journey.com/lessons/shadows"}update(e){this.control.update();const n=1.5;this.sphere.position.x=Math.cos(e/1e3)*n,this.sphere.position.z=Math.sin(e/1e3)*n,this.sphere.position.y=Math.abs(Math.sin(e/1e3)),this.sphereShadow.position.x=this.sphere.position.x,this.sphereShadow.position.z=this.sphere.position.z,this.sphereShadow.material.opacity=(1-this.sphere.position.y)*.3;const i=this.sphere.position.y*1.5;this.sphereShadow.scale.set(i,i,i)}init(){super.init(),j(this,we,Yp).call(this),j(this,we,qp).call(this),j(this,we,Kp).call(this),j(this,we,$p).call(this),j(this,we,Zp).call(this),j(this,we,jp).call(this)}dispose(){super.dispose(),this.plane=null,this.sphere=null,this.sphereShadow=null,this.material=null}},we=new WeakSet,jp=function(){this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=ql},Yp=function(){this.material=new si,j(this,we,Jp).call(this)},qp=function(){const e=new ds(.5);this.sphere=new Gt(e,this.material),this.sphere.castShadow=!0,this.sphere.receiveShadow=!1,this.scene.add(this.sphere)},$p=function(){const n=new dr().load("/three.js-journey/media/images/textures/shadows/simple.jpg");n.colorSpace=ie;const i=new ci(1,1),r=new Xe({color:0,transparent:!0,alphaMap:n});this.sphereShadow=new Gt(i,r),this.sphereShadow.rotation.x=-Math.PI/2,this.sphereShadow.position.y=this.plane.position.y+.001,this.scene.add(this.sphereShadow)},Kp=function(){const e=new ci(5,5);this.plane=new Gt(e,this.material),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-.5,this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.scene.add(this.plane)},Zp=function(){const e=new fc(16777215,2);this.scene.add(e),j(this,we,br).call(this,e,"Ambient Light");const n=new dc(16777215,1);n.position.x=3,n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=1,n.shadow.camera.far=6,n.shadow.camera.top=1,n.shadow.camera.bottom=-1,n.shadow.camera.right=1,n.shadow.camera.left=-1,this.scene.add(n),j(this,we,br).call(this,n,"Directional Light");const i=new Wd(16777215,1,0,Math.PI*.1);i.position.x=1,i.position.z=1,i.castShadow=!0,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,i.shadow.camera.near=1,i.shadow.camera.far=5,i.visible=!1,this.scene.add(i),this.scene.add(i.target),j(this,we,br).call(this,i,"Spot Light"),this.guiControl.add(i,"visible").name("Enable Spotlight");const r=new Fs(16777215,1);r.position.x=1,r.position.z=-1,r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=.1,r.shadow.camera.far=4,r.visible=!1,this.scene.add(r),j(this,we,br).call(this,r,"Point Light"),this.guiControl.add(r,"visible").name("Enable Point Light")},Jp=function(){this.guiControl.add(this.material,"metalness").min(0).max(1).step(.001),this.guiControl.add(this.material,"roughness").min(0).max(1).step(.001)},br=function(e,n){this.guiControl.addFolder(n).add(e,"intensity").min(0).max(5).step(.001)},Zu);class ua extends Gt{constructor(){const t=ua.SkyShader,e=new Ri({name:"SkyShader",fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:bd.clone(t.uniforms),side:We,depthWrite:!1});super(new Ie(1,1,1),e),this.isSky=!0}}ua.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};const CE="/three.js-journey/assets/alpha-oYUXAV8U.webp",RE="/three.js-journey/assets/arm-rmC2KtbT.webp",LE="/three.js-journey/assets/diffuse-BiGrMCC3.webp",PE="/three.js-journey/assets/displacement-CKqTQH1-.webp",DE="/three.js-journey/assets/normal-Cn3WmhCd.webp",UE="/three.js-journey/assets/arm-DyzoCEM3.webp",IE="/three.js-journey/assets/diffuse-3lwd3U-t.webp",NE="/three.js-journey/assets/normal-iYA-jasx.webp",OE="/three.js-journey/assets/arm-WvlYQgg6.webp",FE="/three.js-journey/assets/diffuse-Ca4I2Dwk.webp",BE="/three.js-journey/assets/normal-CEkQghNg.webp",zE="/three.js-journey/assets/arm-CIirWEzm.webp",kE="/three.js-journey/assets/diffuse-Bt2KqQCc.webp",GE="/three.js-journey/assets/normal-CzXVEdvu.webp",HE="/three.js-journey/assets/arm-BpdijVEA.webp",VE="/three.js-journey/assets/diffuse-BtOV6iYR.webp",WE="/three.js-journey/assets/normal-B1F88-Fh.webp",XE="/three.js-journey/assets/alpha-C_QdxHjX.webp",jE="/three.js-journey/assets/normal-CnTtXT1a.webp",YE="/three.js-journey/assets/ambientOcclusion-DWqpmaJh.webp",qE="/three.js-journey/assets/color-D6TT9ASI.webp",$E="/three.js-journey/assets/height-vbXR4p20.webp",KE="/three.js-journey/assets/metalness-DWD7jlG_.webp",ZE="/three.js-journey/assets/roughness-Cy_48OtR.webp";var Vt,Qp,tm,em,nm,Oo,im,Fo,sm,rm,om,am,lm,cm,Hl,Yi,Ju;let JE=(Ju=class extends nn{constructor(){super(...arguments);he(this,Vt);wt(this,"ghostViolet");wt(this,"ghostPink");wt(this,"ghostRed");wt(this,"textureLoader");wt(this,"hasAnimation",!0)}get title(){return"Haunted House"}get link(){return"https://threejs-journey.com/lessons/haunted-house"}update(e){const n=e*.001;this.control.update(),j(this,Vt,Oo).call(this,this.ghostViolet,n*.5,4,2.34,3.45),j(this,Vt,Oo).call(this,this.ghostPink,-n*.38,5,2.34,3.45),j(this,Vt,Oo).call(this,this.ghostRed,n*.23,6,2.34,3.45)}init(){super.init(),j(this,Vt,cm).call(this),j(this,Vt,om).call(this),j(this,Vt,am).call(this),j(this,Vt,lm).call(this),j(this,Vt,nm).call(this),j(this,Vt,tm).call(this),j(this,Vt,em).call(this),j(this,Vt,Qp).call(this)}dispose(){super.dispose(),this.textureLoader=null,this.ghostViolet=null,this.ghostPink=null,this.ghostRed=null}},Vt=new WeakSet,Qp=function(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ql},tm=function(){const e=new ua;e.material.uniforms.turbidity.value=10,e.material.uniforms.rayleigh.value=3,e.material.uniforms.mieCoefficient.value=.1,e.material.uniforms.mieDirectionalG.value=.95,e.material.uniforms.sunPosition.value.set(.3,-.038,-.95),e.scale.set(100,100,100),this.scene.add(e)},em=function(){const e=new nc("#04343f",.1);this.scene.fog=e},nm=function(){const e=new $i,n=this.textureLoader.load(UE),i=this.textureLoader.load(NE),r=this.textureLoader.load(IE);r.colorSpace=ie;const o=new Gt(new Ie(4,3,4),new si({map:r,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}));o.position.y=o.geometry.parameters.height*.5,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const a=this.textureLoader.load(OE),l=this.textureLoader.load(BE),c=this.textureLoader.load(FE);c.colorSpace=ie,a.repeat.set(3,1),l.repeat.set(3,1),c.repeat.set(3,1),a.wrapS=Ue,l.wrapS=Ue,c.wrapS=Ue;const h=new Gt(new ac(o.geometry.parameters.width,2,4),new si({map:c,normalMap:l,roughnessMap:a,metalnessMap:a,aoMap:a}));h.position.y=o.geometry.parameters.height+h.geometry.parameters.height*.5,h.rotation.y=Math.PI*.25,h.castShadow=!0,e.add(h);const u=this.textureLoader.load(XE),d=this.textureLoader.load(YE),p=this.textureLoader.load($E),_=this.textureLoader.load(KE),g=this.textureLoader.load(ZE),m=this.textureLoader.load(jE),f=this.textureLoader.load(qE);f.colorSpace=ie;const v=new Gt(new ci(1.5,2.3,100,100),new si({transparent:!0,map:f,alphaMap:u,aoMap:d,metalnessMap:_,roughnessMap:g,normalMap:m,displacementMap:p,displacementScale:.15,displacementBias:-.04}));v.position.y=v.geometry.parameters.height*.5,v.position.z=o.geometry.parameters.depth*.5+.01,e.add(v);const x=new Fs("#ff7d46",5);x.position.z=o.geometry.parameters.depth*.5+.1,x.position.y=v.geometry.parameters.height+.1,e.add(x),j(this,Vt,rm).call(this,v.position.z,v.geometry.parameters.width),j(this,Vt,sm).call(this,o.geometry.parameters.width),j(this,Vt,im).call(this),this.scene.add(e)},Oo=function(e,n,i,r,o){const a=n;e.position.x=Math.cos(a)*i,e.position.z=Math.sin(a)*i,e.position.y=Math.sin(a)*Math.sin(a*r)*Math.sin(a*o)},im=function(){this.ghostViolet=new Fs("#8800ff",6),this.ghostPink=new Fs("#ff0088",6),this.ghostRed=new Fs("#ff0000",6),j(this,Vt,Fo).call(this,this.ghostViolet),j(this,Vt,Fo).call(this,this.ghostPink),j(this,Vt,Fo).call(this,this.ghostRed),this.scene.add(this.ghostViolet,this.ghostPink,this.ghostRed)},Fo=function(e){e.castShadow=!0,e.shadow.mapSize.width=256,e.shadow.mapSize.height=256,e.shadow.camera.far=10},sm=function(e){const n=this.textureLoader.load(HE),i=this.textureLoader.load(WE),r=this.textureLoader.load(VE);r.colorSpace=ie,r.repeat.set(.3,.4),i.repeat.set(.3,.4),n.repeat.set(.3,.4);const o=new Ie(.6,1,.3),a=new si({map:r,normalMap:i,roughnessMap:n,metalnessMap:n,aoMap:n}),l=new $i;for(let c=0;c<30;c++){const h=new Gt(o,a),u=Math.random()*2*Math.PI,d=e*.5+1.5+Math.random()*4;h.position.y=h.geometry.parameters.height*.5-Math.random()*.4,h.position.x=Math.cos(u)*d,h.position.z=Math.sin(u)*d,h.rotation.x=(Math.random()-.5)*.4,h.rotation.y=(Math.random()-.5)*.4,h.rotation.z=(Math.random()-.5)*.4,h.castShadow=!0,h.receiveShadow=!0,l.add(h)}this.scene.add(l)},rm=function(e,n){const i=this.textureLoader.load(zE),r=this.textureLoader.load(GE),o=this.textureLoader.load(kE);o.colorSpace=ie,o.repeat.set(2,1),r.repeat.set(2,1),i.repeat.set(2,1),o.wrapS=Ue,r.wrapS=Ue,i.wrapS=Ue;const a=new ds(.5),l=new si({map:o,normalMap:r,roughnessMap:i,metalnessMap:i,aoMap:i,color:"#ccffcc"}),c=n*.5-.1,h=a.parameters.radius-.3,u=e+a.parameters.radius-.3,d=new Gt(a,l);d.position.x=c,d.position.y=h,d.position.z=u,d.rotation.x=-.75,this.scene.add(d),j(this,Vt,Yi).call(this,d,"Bush 1");const p=new Gt(a,l);p.position.x=-c,p.position.y=h,p.position.z=u,p.scale.set(.8,.8,.8),p.rotation.x=-.75,this.scene.add(p),j(this,Vt,Yi).call(this,p,"Bush 2");const _=new Gt(a,l),g=.6;_.position.x=c+.6,_.position.z=u,_.scale.set(g,g,g),_.position.y=h*g,_.rotation.x=-.75,this.scene.add(_),j(this,Vt,Yi).call(this,_,"Bush 3")},om=function(){this.camera.position.y=5,this.camera.position.x=5,this.camera.position.z=7,j(this,Vt,Yi).call(this,this.camera,"Camera")},am=function(){const e=new fc("#86cdff",.275);j(this,Vt,Hl).call(this,e,"Ambient Light"),this.scene.add(e);const n=new dc("#86cdff",1);n.position.x=1,n.position.y=3,n.position.z=-5,n.castShadow=!0,n.shadow.mapSize.width=256,n.shadow.mapSize.height=256,n.shadow.camera.top=8,n.shadow.camera.bottom=-8,n.shadow.camera.right=8,n.shadow.camera.left=-8,n.shadow.camera.near=1,n.shadow.camera.far=20,j(this,Vt,Hl).call(this,n,"Directional Light"),this.scene.add(n)},lm=function(){const e=this.textureLoader.load(CE),n=this.textureLoader.load(LE),i=this.textureLoader.load(RE),r=this.textureLoader.load(DE),o=this.textureLoader.load(PE);n.colorSpace=ie,n.repeat.set(8,8),i.repeat.set(8,8),r.repeat.set(8,8),o.repeat.set(8,8),n.wrapS=Ue,i.wrapS=Ue,r.wrapS=Ue,o.wrapS=Ue,n.wrapT=Ue,i.wrapT=Ue,r.wrapT=Ue,o.wrapT=Ue;const a=new Gt(new ci(20,20,100,100),new si({transparent:!0,alphaMap:e,map:n,roughnessMap:i,metalnessMap:i,aoMap:i,normalMap:r,displacementMap:o,displacementScale:.3,displacementBias:-.2}));a.rotation.x=-Math.PI*.5,a.receiveShadow=!0,j(this,Vt,Yi).call(this,a,"Floor"),this.scene.add(a)},cm=function(){this.textureLoader=new dr},Hl=function(e,n){const i=j(this,Vt,Yi).call(this,e,n);return i.add(e,"intensity").min(0).max(10).step(.01),i.addColor({color:e.color.getHex()},"color").onChange(r=>{e.color.setHex(r)}),i},Yi=function(e,n){const i=this.guiControl.addFolder(n);return i.add(e.position,"x").min(-8).max(8).step(.01),i.add(e.position,"y").min(-8).max(8).step(.01),i.add(e.position,"z").min(-8).max(8).step(.01),i},Ju);var ea,hm,Qu;let QE=(Qu=class extends nn{constructor(){super(...arguments);he(this,ea);wt(this,"particles");wt(this,"hasAnimation",!0)}get title(){return"Particles"}get link(){return"https://threejs-journey.com/lessons/particles"}update(e){this.control.update();const n=this.particles.geometry.attributes.position;for(let i=0;i<n.array.length;i+=3)n.array[i+1]=Math.sin(e*.001+n.array[i]);n.needsUpdate=!0}init(){super.init(),j(this,ea,hm).call(this)}dispose(){super.dispose(),this.particles=null}},ea=new WeakSet,hm=function(){const i=new xe,r=new Float32Array(3e3),o=new Float32Array(3e3);for(let h=0;h<r.length;h++)r[h]=(Math.random()-.5)*5,o[h]=Math.random();i.setAttribute("position",new je(r,3)),i.setAttribute("color",new je(o,3));const l=new dr().load("/three.js-journey/media/images/textures/particles/2.png"),c=new ic({size:.1,sizeAttenuation:!0,transparent:!0,alphaMap:l});c.depthWrite=!1,c.blending=Bo,c.vertexColors=!0,this.particles=new Id(i,c),this.scene.add(this.particles)},Qu);var re,Vl,Wl,Xl,um,_i,jl,dm;class tb extends nn{constructor(){super(...arguments);he(this,re);wt(this,"galaxy");wt(this,"galaxyMaterial");wt(this,"galaxyGeometry");wt(this,"galaxyTweaks");wt(this,"hasAnimation",!0)}get title(){return"Galaxy Generator"}get link(){return"https://threejs-journey.com/lessons/galaxy-generator"}update(e){this.control.update();const n=e*.001;this.galaxy.rotation.y=n*.2}init(){super.init(),j(this,re,dm).call(this),j(this,re,um).call(this),j(this,re,Wl).call(this)}dispose(){j(this,re,Xl).call(this),super.dispose()}}re=new WeakSet,Vl=function(){j(this,re,Xl).call(this),j(this,re,Wl).call(this)},Wl=function(){this.galaxyGeometry=new xe;const e=this.galaxyTweaks.particles*3,n=new Float32Array(e),i=new Float32Array(e),r=new Ht(this.galaxyTweaks.insideColor),o=new Ht(this.galaxyTweaks.outsideColor);for(let a=0;a<e;a+=3){const l=a/3,c=Math.random()*this.galaxyTweaks.radius,h=2*Math.PI*(l%this.galaxyTweaks.branches/this.galaxyTweaks.branches),u=this.galaxyTweaks.spin*c,d=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,p=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c,_=Math.pow(Math.random(),this.galaxyTweaks.gravityStrength)*Math.pow(-1,Math.round(Math.random()))*this.galaxyTweaks.offset*c;n[a]=Math.cos(h+u)*c+d,n[a+1]=p,n[a+2]=Math.sin(h+u)*c+_;const m=r.clone().lerp(o,c/this.galaxyTweaks.radius);i[a]=m.r,i[a+1]=m.g,i[a+2]=m.b}this.galaxyGeometry.setAttribute("position",new je(n,3)),this.galaxyGeometry.setAttribute("color",new je(i,3)),this.galaxyMaterial=new ic({size:this.galaxyTweaks.size,sizeAttenuation:!0,depthWrite:!1,blending:Bo,vertexColors:!0}),this.galaxy=new Id(this.galaxyGeometry,this.galaxyMaterial),this.scene.add(this.galaxy)},Xl=function(){this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.scene.remove(this.galaxy),this.galaxyGeometry=null,this.galaxyMaterial=null,this.galaxy=null},um=function(){this.galaxyTweaks={particles:2e4,size:.01,radius:4,branches:7,spin:.7,offset:.3,gravityStrength:5,insideColor:"#ff6030",outsideColor:"#1b3984"},j(this,re,_i).call(this,"particles",100,1e5,1),j(this,re,_i).call(this,"size",.01,1,.01),j(this,re,_i).call(this,"radius",1,20,.1),j(this,re,_i).call(this,"branches",2,20,1),j(this,re,_i).call(this,"spin",.2,20,.1),j(this,re,_i).call(this,"offset",.1,20,.1),j(this,re,_i).call(this,"gravityStrength",1,20,1),j(this,re,jl).call(this,"insideColor"),j(this,re,jl).call(this,"outsideColor")},_i=function(e,n,i,r){this.guiControl.add(this.galaxyTweaks,e).min(n).max(i).step(r).onFinishChange(j(this,re,Vl).bind(this))},jl=function(e){this.guiControl.addColor(this.galaxyTweaks,e).onFinishChange(j(this,re,Vl).bind(this))},dm=function(){this.camera.position.x=3,this.camera.position.y=3,this.camera.position.z=5};const eb=new ym([new $M,new KM,new uE,new dE,new fE,new pE,new mE,new gE,new xE,new bE,new TE,new AE,new JE,new QE,new tb],".lesson-title",".controls__arrow--left",".controls__arrow--right");eb.run();
//# sourceMappingURL=index-DFmm-jbD.js.map
