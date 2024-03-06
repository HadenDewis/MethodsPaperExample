(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="160",_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},MS=0,_d=1,SS=2,gm=1,ES=2,Wi=3,Ki=0,Nn=1,Mi=2,vr=0,Bs=1,vd=2,yd=3,xd=4,TS=5,Fr=100,bS=101,AS=102,Md=103,Sd=104,wS=200,RS=201,CS=202,LS=203,vu=204,yu=205,PS=206,IS=207,DS=208,NS=209,US=210,OS=211,FS=212,BS=213,zS=214,kS=0,HS=1,GS=2,cl=3,VS=4,WS=5,XS=6,qS=7,_m=0,jS=1,YS=2,yr=0,KS=1,ZS=2,$S=3,JS=4,QS=5,eE=6,Ed="attached",tE="detached",vm=300,Hs=301,Gs=302,xu=303,Mu=304,vl=306,Vs=1e3,ti=1001,ul=1002,ln=1003,Su=1004,al=1005,Dn=1006,ym=1007,Wr=1008,xr=1009,nE=1010,iE=1011,zu=1012,xm=1013,mr=1014,qi=1015,Da=1016,Mm=1017,Sm=1018,Hr=1020,rE=1021,ni=1023,sE=1024,aE=1025,Gr=1026,Ws=1027,oE=1028,Em=1029,lE=1030,Tm=1031,bm=1033,Nc=33776,Uc=33777,Oc=33778,Fc=33779,Td=35840,bd=35841,Ad=35842,wd=35843,Am=36196,Rd=37492,Cd=37496,Ld=37808,Pd=37809,Id=37810,Dd=37811,Nd=37812,Ud=37813,Od=37814,Fd=37815,Bd=37816,zd=37817,kd=37818,Hd=37819,Gd=37820,Vd=37821,Bc=36492,Wd=36494,Xd=36495,cE=36283,qd=36284,jd=36285,Yd=36286,Na=2300,Xs=2301,zc=2302,Kd=2400,Zd=2401,$d=2402,uE=2500,hE=0,wm=1,Eu=2,Rm=3e3,Vr=3001,fE=3200,dE=3201,Cm=0,pE=1,ii="",jt="srgb",cn="srgb-linear",ku="display-p3",yl="display-p3-linear",hl="linear",kt="srgb",fl="rec709",dl="p3",ys=7680,Jd=519,mE=512,gE=513,_E=514,Lm=515,vE=516,yE=517,xE=518,ME=519,Tu=35044,Qd="300 es",bu=1035,ji=2e3,pl=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ep=1234567;const Ca=Math.PI/180,qs=180/Math.PI;function pi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function Hu(s,e){return(s%e+e)%e}function SE(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function EE(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function TE(s,e,t,n){return La(s,e,1-Math.exp(-t*n))}function bE(s,e=1){return e-Math.abs(Hu(s,e*2)-e)}function AE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function RE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function CE(s,e){return s+Math.random()*(e-s)}function LE(s){return s*(.5-Math.random())}function PE(s){s!==void 0&&(ep=s);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IE(s){return s*Ca}function DE(s){return s*qs}function Au(s){return(s&s-1)===0&&s!==0}function NE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ml(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function UE(s,e,t,n,r){const a=Math.cos,l=Math.sin,c=a(t/2),u=l(t/2),h=a((e+n)/2),d=l((e+n)/2),p=a((e-n)/2),m=l((e-n)/2),_=a((n-e)/2),x=l((n-e)/2);switch(r){case"XYX":s.set(c*d,u*p,u*m,c*h);break;case"YZY":s.set(u*m,c*d,u*p,c*h);break;case"ZXZ":s.set(u*p,u*m,c*d,c*h);break;case"XZX":s.set(c*d,u*x,u*_,c*h);break;case"YXY":s.set(u*_,c*d,u*x,c*h);break;case"ZYZ":s.set(u*x,u*_,c*d,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pm={DEG2RAD:Ca,RAD2DEG:qs,generateUUID:pi,clamp:dn,euclideanModulo:Hu,mapLinear:SE,inverseLerp:EE,lerp:La,damp:TE,pingpong:bE,smoothstep:AE,smootherstep:wE,randInt:RE,randFloat:CE,randFloatSpread:LE,seededRandom:PE,degToRad:IE,radToDeg:DE,isPowerOfTwo:Au,ceilPowerOfTwo:NE,floorPowerOfTwo:ml,setQuaternionFromProperEuler:UE,normalize:Dt,denormalize:Si};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,r,a,l,c,u,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,h)}set(e,t,n,r,a,l,c,u,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=a,d[5]=u,d[6]=n,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],u=n[6],h=n[1],d=n[4],p=n[7],m=n[2],_=n[5],x=n[8],S=r[0],y=r[3],v=r[6],P=r[1],A=r[4],R=r[7],F=r[2],U=r[5],D=r[8];return a[0]=l*S+c*P+u*F,a[3]=l*y+c*A+u*U,a[6]=l*v+c*R+u*D,a[1]=h*S+d*P+p*F,a[4]=h*y+d*A+p*U,a[7]=h*v+d*R+p*D,a[2]=m*S+_*P+x*F,a[5]=m*y+_*A+x*U,a[8]=m*v+_*R+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*l*d-t*c*h-n*a*d+n*c*u+r*a*h-r*l*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=d*l-c*h,m=c*u-d*a,_=h*a-l*u,x=t*p+n*m+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(r*h-d*n)*S,e[2]=(c*n-r*l)*S,e[3]=m*S,e[4]=(d*t-r*u)*S,e[5]=(r*a-c*t)*S,e[6]=_*S,e[7]=(n*u-h*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const u=Math.cos(a),h=Math.sin(a);return this.set(n*u,n*h,-n*(u*l+h*c)+l+e,-r*h,r*u,-r*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new vt;function Im(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function OE(){const s=Ua("canvas");return s.style.display="block",s}const tp={};function Pa(s){s in tp||(tp[s]=!0,console.warn(s))}const np=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ip=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[cn]:{transfer:hl,primaries:fl,toReference:s=>s,fromReference:s=>s},[jt]:{transfer:kt,primaries:fl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[yl]:{transfer:hl,primaries:dl,toReference:s=>s.applyMatrix3(ip),fromReference:s=>s.applyMatrix3(np)},[ku]:{transfer:kt,primaries:dl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ip),fromReference:s=>s.applyMatrix3(np).convertLinearToSRGB()}},FE=new Set([cn,yl]),Ct={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!FE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Po[e].toReference,r=Po[t].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Po[s].primaries},getTransfer:function(s){return s===ii?hl:Po[s].transfer}};function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class Dm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=Ua("canvas")),xs.width=e.width,xs.height=e.height;const n=xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=zs(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BE=0;class Nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Gc(r[l].image)):a.push(Gc(r[l]))}else a=Gc(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class pn extends Yr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=ti,r=ti,a=Dn,l=Wr,c=ni,u=xr,h=pn.DEFAULT_ANISOTROPY,d=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=pi(),this.name="",this.source=new Nm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Vr?jt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Vr:Rm}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?jt:ii}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=vm;pn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const u=e.elements,h=u[0],d=u[4],p=u[8],m=u[1],_=u[5],x=u[9],S=u[2],y=u[6],v=u[10];if(Math.abs(d-m)<.01&&Math.abs(p-S)<.01&&Math.abs(x-y)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+S)<.1&&Math.abs(x+y)<.1&&Math.abs(h+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,R=(_+1)/2,F=(v+1)/2,U=(d+m)/4,D=(p+S)/4,J=(x+y)/4;return A>R&&A>F?A<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(A),r=U/n,a=D/n):R>F?R<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),n=U/r,a=J/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=D/a,r=J/a),this.set(n,r,a,t),this}let P=Math.sqrt((y-x)*(y-x)+(p-S)*(p-S)+(m-d)*(m-d));return Math.abs(P)<.001&&(P=1),this.x=(y-x)/P,this.y=(p-S)/P,this.z=(m-d)/P,this.w=Math.acos((h+_+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends Yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?jt:ii),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends kE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Um extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HE extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let u=n[r+0],h=n[r+1],d=n[r+2],p=n[r+3];const m=a[l+0],_=a[l+1],x=a[l+2],S=a[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=_,e[t+2]=x,e[t+3]=S;return}if(p!==S||u!==m||h!==_||d!==x){let y=1-c;const v=u*m+h*_+d*x+p*S,P=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const F=Math.sqrt(A),U=Math.atan2(F,v*P);y=Math.sin(y*U)/F,c=Math.sin(c*U)/F}const R=c*P;if(u=u*y+m*R,h=h*y+_*R,d=d*y+x*R,p=p*y+S*R,y===1-c){const F=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=F,h*=F,d*=F,p*=F}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],u=n[r+1],h=n[r+2],d=n[r+3],p=a[l],m=a[l+1],_=a[l+2],x=a[l+3];return e[t]=c*x+d*p+u*_-h*m,e[t+1]=u*x+d*m+h*p-c*_,e[t+2]=h*x+d*_+c*m-u*p,e[t+3]=d*x-c*p-u*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(n/2),d=c(r/2),p=c(a/2),m=u(n/2),_=u(r/2),x=u(a/2);switch(l){case"XYZ":this._x=m*d*p+h*_*x,this._y=h*_*p-m*d*x,this._z=h*d*x+m*_*p,this._w=h*d*p-m*_*x;break;case"YXZ":this._x=m*d*p+h*_*x,this._y=h*_*p-m*d*x,this._z=h*d*x-m*_*p,this._w=h*d*p+m*_*x;break;case"ZXY":this._x=m*d*p-h*_*x,this._y=h*_*p+m*d*x,this._z=h*d*x+m*_*p,this._w=h*d*p-m*_*x;break;case"ZYX":this._x=m*d*p-h*_*x,this._y=h*_*p+m*d*x,this._z=h*d*x-m*_*p,this._w=h*d*p+m*_*x;break;case"YZX":this._x=m*d*p+h*_*x,this._y=h*_*p+m*d*x,this._z=h*d*x-m*_*p,this._w=h*d*p-m*_*x;break;case"XZY":this._x=m*d*p-h*_*x,this._y=h*_*p-m*d*x,this._z=h*d*x+m*_*p,this._w=h*d*p+m*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],u=t[9],h=t[2],d=t[6],p=t[10],m=n+c+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-u)*_,this._y=(a-h)*_,this._z=(l-r)*_}else if(n>c&&n>p){const _=2*Math.sqrt(1+n-c-p);this._w=(d-u)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(a+h)/_}else if(c>p){const _=2*Math.sqrt(1+c-n-p);this._w=(a-h)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(u+d)/_}else{const _=2*Math.sqrt(1+p-n-c);this._w=(l-r)/_,this._x=(a+h)/_,this._y=(u+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+l*c+r*h-a*u,this._y=r*d+l*u+a*c-n*h,this._z=a*d+l*h+n*u-r*c,this._w=l*d-n*c-r*u-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const u=1-c*c;if(u<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,c),p=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=a*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,u=e.w,h=2*(l*r-c*n),d=2*(c*t-a*r),p=2*(a*n-l*t);return this.x=t+u*h+l*p-c*d,this.y=n+u*d+c*h-a*p,this.z=r+u*p+a*d-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,u=t.z;return this.x=r*u-a*c,this.y=a*l-n*u,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new H,rp=new Ti;class mi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,ui):ui.fromBufferAttribute(a,l),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Do.subVectors(this.max,va),Ms.subVectors(e.a,va),Ss.subVectors(e.b,va),Es.subVectors(e.c,va),ar.subVectors(Ss,Ms),or.subVectors(Es,Ss),Pr.subVectors(Ms,Es);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Pr.z,Pr.y,ar.z,0,-ar.x,or.z,0,-or.x,Pr.z,0,-Pr.x,-ar.y,ar.x,0,-or.y,or.x,0,-Pr.y,Pr.x,0];return!Wc(t,Ms,Ss,Es,Do)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,Ms,Ss,Es,Do))?!1:(No.crossVectors(ar,or),t=[No.x,No.y,No.z],Wc(t,Ms,Ss,Es,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new H,new H,new H,new H,new H,new H,new H,new H],ui=new H,Io=new mi,Ms=new H,Ss=new H,Es=new H,ar=new H,or=new H,Pr=new H,va=new H,Do=new H,No=new H,Ir=new H;function Wc(s,e,t,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){Ir.fromArray(s,a);const c=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),u=e.dot(Ir),h=t.dot(Ir),d=n.dot(Ir);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const GE=new mi,ya=new H,Xc=new H;class bi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):GE.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ya,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Xc)),this.expandByPoint(ya.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new H,qc=new H,Uo=new H,lr=new H,jc=new H,Oo=new H,Yc=new H;class Fa{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qc.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(qc);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Uo),c=lr.dot(this.direction),u=-lr.dot(Uo),h=lr.lengthSq(),d=Math.abs(1-l*l);let p,m,_,x;if(d>0)if(p=l*u-c,m=l*c-u,x=a*d,p>=0)if(m>=-x)if(m<=x){const S=1/d;p*=S,m*=S,_=p*(p+l*m+2*c)+m*(l*p+m+2*u)+h}else m=a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;else m=-a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;else m<=-x?(p=Math.max(0,-(-l*a+c)),m=p>0?-a:Math.min(Math.max(-a,-u),a),_=-p*p+m*(m+2*u)+h):m<=x?(p=0,m=Math.min(Math.max(-a,-u),a),_=m*(m+2*u)+h):(p=Math.max(0,-(l*a+c)),m=p>0?a:Math.min(Math.max(-a,-u),a),_=-p*p+m*(m+2*u)+h);else m=l>0?-a:a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(qc).addScaledVector(Uo,m),_}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),r=zi.dot(zi)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),d>=0?(a=(e.min.y-m.y)*d,l=(e.max.y-m.y)*d):(a=(e.max.y-m.y)*d,l=(e.min.y-m.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,r,a){jc.subVectors(t,e),Oo.subVectors(n,e),Yc.crossVectors(jc,Oo);let l=this.direction.dot(Yc),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;lr.subVectors(this.origin,e);const u=c*this.direction.dot(Oo.crossVectors(lr,Oo));if(u<0)return null;const h=c*this.direction.dot(jc.cross(lr));if(h<0||u+h>l)return null;const d=-c*lr.dot(Yc);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,a,l,c,u,h,d,p,m,_,x,S,y){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,h,d,p,m,_,x,S,y)}set(e,t,n,r,a,l,c,u,h,d,p,m,_,x,S,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=l,v[9]=c,v[13]=u,v[2]=h,v[6]=d,v[10]=p,v[14]=m,v[3]=_,v[7]=x,v[11]=S,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),a=1/Ts.setFromMatrixColumn(e,1).length(),l=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const m=l*d,_=l*p,x=c*d,S=c*p;t[0]=u*d,t[4]=-u*p,t[8]=h,t[1]=_+x*h,t[5]=m-S*h,t[9]=-c*u,t[2]=S-m*h,t[6]=x+_*h,t[10]=l*u}else if(e.order==="YXZ"){const m=u*d,_=u*p,x=h*d,S=h*p;t[0]=m+S*c,t[4]=x*c-_,t[8]=l*h,t[1]=l*p,t[5]=l*d,t[9]=-c,t[2]=_*c-x,t[6]=S+m*c,t[10]=l*u}else if(e.order==="ZXY"){const m=u*d,_=u*p,x=h*d,S=h*p;t[0]=m-S*c,t[4]=-l*p,t[8]=x+_*c,t[1]=_+x*c,t[5]=l*d,t[9]=S-m*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const m=l*d,_=l*p,x=c*d,S=c*p;t[0]=u*d,t[4]=x*h-_,t[8]=m*h+S,t[1]=u*p,t[5]=S*h+m,t[9]=_*h-x,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const m=l*u,_=l*h,x=c*u,S=c*h;t[0]=u*d,t[4]=S-m*p,t[8]=x*p+_,t[1]=p,t[5]=l*d,t[9]=-c*d,t[2]=-h*d,t[6]=_*p+x,t[10]=m-S*p}else if(e.order==="XZY"){const m=l*u,_=l*h,x=c*u,S=c*h;t[0]=u*d,t[4]=-p,t[8]=h*d,t[1]=m*p+S,t[5]=l*d,t[9]=_*p-x,t[2]=x*p-_,t[6]=c*d,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,WE)}lookAt(e,t,n){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),cr.crossVectors(n,Hn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),cr.crossVectors(n,Hn)),cr.normalize(),Fo.crossVectors(Hn,cr),r[0]=cr.x,r[4]=Fo.x,r[8]=Hn.x,r[1]=cr.y,r[5]=Fo.y,r[9]=Hn.y,r[2]=cr.z,r[6]=Fo.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],u=n[8],h=n[12],d=n[1],p=n[5],m=n[9],_=n[13],x=n[2],S=n[6],y=n[10],v=n[14],P=n[3],A=n[7],R=n[11],F=n[15],U=r[0],D=r[4],J=r[8],w=r[12],I=r[1],$=r[5],ie=r[9],Me=r[13],k=r[2],q=r[6],ee=r[10],ce=r[14],se=r[3],ue=r[7],he=r[11],Se=r[15];return a[0]=l*U+c*I+u*k+h*se,a[4]=l*D+c*$+u*q+h*ue,a[8]=l*J+c*ie+u*ee+h*he,a[12]=l*w+c*Me+u*ce+h*Se,a[1]=d*U+p*I+m*k+_*se,a[5]=d*D+p*$+m*q+_*ue,a[9]=d*J+p*ie+m*ee+_*he,a[13]=d*w+p*Me+m*ce+_*Se,a[2]=x*U+S*I+y*k+v*se,a[6]=x*D+S*$+y*q+v*ue,a[10]=x*J+S*ie+y*ee+v*he,a[14]=x*w+S*Me+y*ce+v*Se,a[3]=P*U+A*I+R*k+F*se,a[7]=P*D+A*$+R*q+F*ue,a[11]=P*J+A*ie+R*ee+F*he,a[15]=P*w+A*Me+R*ce+F*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],u=e[9],h=e[13],d=e[2],p=e[6],m=e[10],_=e[14],x=e[3],S=e[7],y=e[11],v=e[15];return x*(+a*u*p-r*h*p-a*c*m+n*h*m+r*c*_-n*u*_)+S*(+t*u*_-t*h*m+a*l*m-r*l*_+r*h*d-a*u*d)+y*(+t*h*p-t*c*_-a*l*p+n*l*_+a*c*d-n*h*d)+v*(-r*c*d-t*u*p+t*c*m+r*l*p-n*l*m+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=e[9],m=e[10],_=e[11],x=e[12],S=e[13],y=e[14],v=e[15],P=p*y*h-S*m*h+S*u*_-c*y*_-p*u*v+c*m*v,A=x*m*h-d*y*h-x*u*_+l*y*_+d*u*v-l*m*v,R=d*S*h-x*p*h+x*c*_-l*S*_-d*c*v+l*p*v,F=x*p*u-d*S*u-x*c*m+l*S*m+d*c*y-l*p*y,U=t*P+n*A+r*R+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=P*D,e[1]=(S*m*a-p*y*a-S*r*_+n*y*_+p*r*v-n*m*v)*D,e[2]=(c*y*a-S*u*a+S*r*h-n*y*h-c*r*v+n*u*v)*D,e[3]=(p*u*a-c*m*a-p*r*h+n*m*h+c*r*_-n*u*_)*D,e[4]=A*D,e[5]=(d*y*a-x*m*a+x*r*_-t*y*_-d*r*v+t*m*v)*D,e[6]=(x*u*a-l*y*a-x*r*h+t*y*h+l*r*v-t*u*v)*D,e[7]=(l*m*a-d*u*a+d*r*h-t*m*h-l*r*_+t*u*_)*D,e[8]=R*D,e[9]=(x*p*a-d*S*a-x*n*_+t*S*_+d*n*v-t*p*v)*D,e[10]=(l*S*a-x*c*a+x*n*h-t*S*h-l*n*v+t*c*v)*D,e[11]=(d*c*a-l*p*a-d*n*h+t*p*h+l*n*_-t*c*_)*D,e[12]=F*D,e[13]=(d*S*r-x*p*r+x*n*m-t*S*m-d*n*y+t*p*y)*D,e[14]=(x*c*r-l*S*r-x*n*u+t*S*u+l*n*y-t*c*y)*D,e[15]=(l*p*r-d*c*r+d*n*u-t*p*u-l*n*m+t*c*m)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,u=e.z,h=a*l,d=a*c;return this.set(h*l+n,h*c-r*u,h*u+r*c,0,h*c+r*u,d*c+n,d*u-r*l,0,h*u-r*c,d*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,u=t._w,h=a+a,d=l+l,p=c+c,m=a*h,_=a*d,x=a*p,S=l*d,y=l*p,v=c*p,P=u*h,A=u*d,R=u*p,F=n.x,U=n.y,D=n.z;return r[0]=(1-(S+v))*F,r[1]=(_+R)*F,r[2]=(x-A)*F,r[3]=0,r[4]=(_-R)*U,r[5]=(1-(m+v))*U,r[6]=(y+P)*U,r[7]=0,r[8]=(x+A)*D,r[9]=(y-P)*D,r[10]=(1-(m+S))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ts.set(r[0],r[1],r[2]).length();const l=Ts.set(r[4],r[5],r[6]).length(),c=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const h=1/a,d=1/l,p=1/c;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=d,hi.elements[5]*=d,hi.elements[6]*=d,hi.elements[8]*=p,hi.elements[9]*=p,hi.elements[10]*=p,t.setFromRotationMatrix(hi),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=ji){const u=this.elements,h=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let _,x;if(c===ji)_=-(l+a)/(l-a),x=-2*l*a/(l-a);else if(c===pl)_=-l/(l-a),x=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=ji){const u=this.elements,h=1/(t-e),d=1/(n-r),p=1/(l-a),m=(t+e)*h,_=(n+r)*d;let x,S;if(c===ji)x=(l+a)*p,S=-2*p;else if(c===pl)x=a*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=S,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new H,hi=new yt,VE=new H(0,0,0),WE=new H(1,1,1),cr=new H,Fo=new H,Hn=new H,sp=new yt,ap=new Ti;class xl{constructor(e=0,t=0,n=0,r=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],u=r[1],h=r[5],d=r[9],p=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XE=0;const op=new H,bs=new Ti,ki=new yt,Bo=new H,xa=new H,qE=new H,jE=new Ti,lp=new H(1,0,0),cp=new H(0,1,0),up=new H(0,0,1),YE={type:"added"},KE={type:"removed"};class Xt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new H,t=new xl,n=new Ti,r=new H(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new vt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(up,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(xa,Bo,this.up):ki.lookAt(Bo,xa,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(ki),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,jE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];a(e.shapes,p)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(a(e.materials,this.material[u]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(a(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),d=l(e.images),p=l(e.shapes),m=l(e.skeletons),_=l(e.animations),x=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function l(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new H(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new H,Hi=new H,Kc=new H,Gi=new H,As=new H,ws=new H,hp=new H,Zc=new H,$c=new H,Jc=new H;let zo=!1;class di{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fi.subVectors(e,t),r.cross(fi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){fi.subVectors(r,t),Hi.subVectors(n,t),Kc.subVectors(e,t);const l=fi.dot(fi),c=fi.dot(Hi),u=fi.dot(Kc),h=Hi.dot(Hi),d=Hi.dot(Kc),p=l*h-c*c;if(p===0)return a.set(0,0,0),null;const m=1/p,_=(h*u-c*d)*m,x=(l*d-c*u)*m;return a.set(1-_-x,x,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,t,n,r,a,l,c,u){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),this.getInterpolation(e,t,n,r,a,l,c,u)}static getInterpolation(e,t,n,r,a,l,c,u){return this.getBarycoord(e,t,n,r,Gi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Gi.x),u.addScaledVector(l,Gi.y),u.addScaledVector(c,Gi.z),u)}static isFrontFacing(e,t,n,r){return fi.subVectors(n,t),Hi.subVectors(e,t),fi.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),di.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return di.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;As.subVectors(r,n),ws.subVectors(a,n),Zc.subVectors(e,n);const u=As.dot(Zc),h=ws.dot(Zc);if(u<=0&&h<=0)return t.copy(n);$c.subVectors(e,r);const d=As.dot($c),p=ws.dot($c);if(d>=0&&p<=d)return t.copy(r);const m=u*p-d*h;if(m<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(As,l);Jc.subVectors(e,a);const _=As.dot(Jc),x=ws.dot(Jc);if(x>=0&&_<=x)return t.copy(a);const S=_*h-u*x;if(S<=0&&h>=0&&x<=0)return c=h/(h-x),t.copy(n).addScaledVector(ws,c);const y=d*x-_*p;if(y<=0&&p-d>=0&&_-x>=0)return hp.subVectors(a,r),c=(p-d)/(p-d+(_-x)),t.copy(r).addScaledVector(hp,c);const v=1/(y+S+m);return l=S*v,c=m*v,t.copy(n).addScaledVector(As,l).addScaledVector(ws,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=Hu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Qc(l,a,e+1/3),this.g=Qc(l,a,e),this.b=Qc(l,a,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ct.fromWorkingColorSpace(yn.copy(this),e),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,a=yn.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let u,h;const d=(c+l)/2;if(c===l)u=0,h=0;else{const p=l-c;switch(h=d<=.5?p/(l+c):p/(2-l-c),l){case n:u=(r-a)/p+(r<a?6:0);break;case r:u=(a-n)/p+2;break;case a:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=jt){Ct.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(ko);const n=La(ur.h,ko.h,t),r=La(ur.s,ko.s,t),a=La(ur.l,ko.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new it;it.NAMES=Fm;let ZE=0;class Ei extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Bs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=yu,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vu&&(n.blendSrc=this.blendSrc),this.blendDst!==yu&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zr extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new H,Ho=new tt;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class Bm extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zm extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $E=0;const Qn=new yt,eu=new Xt,Rs=new H,Gn=new mi,Ma=new mi,on=new H;class Ai extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?zm:Bm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new vt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Ma.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Gn.min,Ma.min),Gn.expandByPoint(on),on.addVectors(Gn.max,Ma.max),Gn.expandByPoint(on)):(Gn.expandByPoint(Ma.min),Gn.expandByPoint(Ma.max))}Gn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)on.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(on));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)on.fromBufferAttribute(c,h),u&&(Rs.fromBufferAttribute(e,h),on.add(Rs)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,h=[],d=[];for(let I=0;I<c;I++)h[I]=new H,d[I]=new H;const p=new H,m=new H,_=new H,x=new tt,S=new tt,y=new tt,v=new H,P=new H;function A(I,$,ie){p.fromArray(r,I*3),m.fromArray(r,$*3),_.fromArray(r,ie*3),x.fromArray(l,I*2),S.fromArray(l,$*2),y.fromArray(l,ie*2),m.sub(p),_.sub(p),S.sub(x),y.sub(x);const Me=1/(S.x*y.y-y.x*S.y);isFinite(Me)&&(v.copy(m).multiplyScalar(y.y).addScaledVector(_,-S.y).multiplyScalar(Me),P.copy(_).multiplyScalar(S.x).addScaledVector(m,-y.x).multiplyScalar(Me),h[I].add(v),h[$].add(v),h[ie].add(v),d[I].add(P),d[$].add(P),d[ie].add(P))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let I=0,$=R.length;I<$;++I){const ie=R[I],Me=ie.start,k=ie.count;for(let q=Me,ee=Me+k;q<ee;q+=3)A(n[q+0],n[q+1],n[q+2])}const F=new H,U=new H,D=new H,J=new H;function w(I){D.fromArray(a,I*3),J.copy(D);const $=h[I];F.copy($),F.sub(D.multiplyScalar(D.dot($))).normalize(),U.crossVectors(J,$);const Me=U.dot(d[I])<0?-1:1;u[I*4]=F.x,u[I*4+1]=F.y,u[I*4+2]=F.z,u[I*4+3]=Me}for(let I=0,$=R.length;I<$;++I){const ie=R[I],Me=ie.start,k=ie.count;for(let q=Me,ee=Me+k;q<ee;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new H,a=new H,l=new H,c=new H,u=new H,h=new H,d=new H,p=new H;if(e)for(let m=0,_=e.count;m<_;m+=3){const x=e.getX(m+0),S=e.getX(m+1),y=e.getX(m+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,y),d.subVectors(l,a),p.subVectors(r,a),d.cross(p),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),c.add(d),u.add(d),h.add(d),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),d.subVectors(l,a),p.subVectors(r,a),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,p=c.normalized,m=new h.constructor(u.length*d);let _=0,x=0;for(let S=0,y=u.length;S<y;S++){c.isInterleavedBufferAttribute?_=u[S]*c.data.stride+c.offset:_=u[S]*d;for(let v=0;v<d;v++)m[x++]=h[_++]}return new wn(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,p=h.length;d<p;d++){const m=h[d],_=e(m,n);u.push(_)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let a=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,m=h.length;p<m;p++){const _=h[p];d.push(_.toJSON(e.data))}d.length>0&&(r[u]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const a=e.morphAttributes;for(const h in a){const d=[],p=a[h];for(let m=0,_=p.length;m<_;m++)d.push(p[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,d=l.length;h<d;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fp=new yt,Dr=new Fa,Go=new bi,dp=new H,Cs=new H,Ls=new H,Ps=new H,tu=new H,Vo=new H,Wo=new tt,Xo=new tt,qo=new tt,pp=new H,mp=new H,gp=new H,jo=new H,Yo=new H;class ri extends Xt{constructor(e=new Ai,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Vo.set(0,0,0);for(let u=0,h=a.length;u<h;u++){const d=c[u],p=a[u];d!==0&&(tu.fromBufferAttribute(p,e),l?Vo.addScaledVector(tu,d):Vo.addScaledVector(tu.sub(t),d))}t.add(Vo)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(a),Dr.copy(e.ray).recast(e.near),!(Go.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Go,dp)===null||Dr.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(a).invert(),Dr.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,u=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let x=0,S=m.length;x<S;x++){const y=m[x],v=l[y.materialIndex],P=Math.max(y.start,_.start),A=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let R=P,F=A;R<F;R+=3){const U=c.getX(R),D=c.getX(R+1),J=c.getX(R+2);r=Ko(this,v,e,n,h,d,p,U,D,J),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(c.count,_.start+_.count);for(let y=x,v=S;y<v;y+=3){const P=c.getX(y),A=c.getX(y+1),R=c.getX(y+2);r=Ko(this,l,e,n,h,d,p,P,A,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let x=0,S=m.length;x<S;x++){const y=m[x],v=l[y.materialIndex],P=Math.max(y.start,_.start),A=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let R=P,F=A;R<F;R+=3){const U=R,D=R+1,J=R+2;r=Ko(this,v,e,n,h,d,p,U,D,J),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(u.count,_.start+_.count);for(let y=x,v=S;y<v;y+=3){const P=y,A=y+1,R=y+2;r=Ko(this,l,e,n,h,d,p,P,A,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function JE(s,e,t,n,r,a,l,c){let u;if(e.side===Nn?u=n.intersectTriangle(l,a,r,!0,c):u=n.intersectTriangle(r,a,l,e.side===Ki,c),u===null)return null;Yo.copy(c),Yo.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Yo);return h<t.near||h>t.far?null:{distance:h,point:Yo.clone(),object:s}}function Ko(s,e,t,n,r,a,l,c,u,h){s.getVertexPosition(c,Cs),s.getVertexPosition(u,Ls),s.getVertexPosition(h,Ps);const d=JE(s,e,t,n,Cs,Ls,Ps,jo);if(d){r&&(Wo.fromBufferAttribute(r,c),Xo.fromBufferAttribute(r,u),qo.fromBufferAttribute(r,h),d.uv=di.getInterpolation(jo,Cs,Ls,Ps,Wo,Xo,qo,new tt)),a&&(Wo.fromBufferAttribute(a,c),Xo.fromBufferAttribute(a,u),qo.fromBufferAttribute(a,h),d.uv1=di.getInterpolation(jo,Cs,Ls,Ps,Wo,Xo,qo,new tt),d.uv2=d.uv1),l&&(pp.fromBufferAttribute(l,c),mp.fromBufferAttribute(l,u),gp.fromBufferAttribute(l,h),d.normal=di.getInterpolation(jo,Cs,Ls,Ps,pp,mp,gp,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:u,c:h,normal:new H,materialIndex:0};di.getNormal(Cs,Ls,Ps,p.normal),d.face=p}return d}class Ba extends Ai{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const u=[],h=[],d=[],p=[];let m=0,_=0;x("z","y","x",-1,-1,n,t,e,l,a,0),x("z","y","x",1,-1,n,t,-e,l,a,1),x("x","z","y",1,1,e,n,t,r,l,2),x("x","z","y",1,-1,e,n,-t,r,l,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new Yi(h,3)),this.setAttribute("normal",new Yi(d,3)),this.setAttribute("uv",new Yi(p,2));function x(S,y,v,P,A,R,F,U,D,J,w){const I=R/D,$=F/J,ie=R/2,Me=F/2,k=U/2,q=D+1,ee=J+1;let ce=0,se=0;const ue=new H;for(let he=0;he<ee;he++){const Se=he*$-Me;for(let Te=0;Te<q;Te++){const te=Te*I-ie;ue[S]=te*P,ue[y]=Se*A,ue[v]=k,h.push(ue.x,ue.y,ue.z),ue[S]=0,ue[y]=0,ue[v]=U>0?1:-1,d.push(ue.x,ue.y,ue.z),p.push(Te/D),p.push(1-he/J),ce+=1}}for(let he=0;he<J;he++)for(let Se=0;Se<D;Se++){const Te=m+Se+q*he,te=m+Se+q*(he+1),_e=m+(Se+1)+q*(he+1),Le=m+(Se+1)+q*he;u.push(Te,te,Le),u.push(te,_e,Le),se+=6}c.addGroup(_,se,w),_+=se,m+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const n=js(s[t]);for(const r in n)e[r]=n[r]}return e}function QE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function km(s){return s.getRenderTarget()===null?s.outputColorSpace:Ct.workingColorSpace}const eT={clone:js,merge:Tn};var tT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tT,this.fragmentShader=nT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hm extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Hm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/u,t-=l.offsetY*n/h,r*=l.width/u,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ds=1;class iT extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Is,Ds,e,t);r.layers=this.layers,this.add(r);const a=new An(Is,Ds,e,t);a.layers=this.layers,this.add(a);const l=new An(Is,Ds,e,t);l.layers=this.layers,this.add(l);const c=new An(Is,Ds,e,t);c.layers=this.layers,this.add(c);const u=new An(Is,Ds,e,t);u.layers=this.layers,this.add(u);const h=new An(Is,Ds,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,u]=t;for(const h of t)this.remove(h);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,u,h,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,m,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Gm extends pn{constructor(e,t,n,r,a,l,c,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,r,a,l,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rT extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vr?jt:ii),this.texture=new Gm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),a=new qr({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:vr});a.uniforms.tEquirect.value=t;const l=new ri(r,a),c=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Dn),new iT(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const nu=new H,sT=new H,aT=new vt;class fr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=nu.subVectors(n,t).cross(sT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||aT.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new bi,Zo=new H;class Gu{constructor(e=new fr,t=new fr,n=new fr,r=new fr,a=new fr,l=new fr){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],u=r[3],h=r[4],d=r[5],p=r[6],m=r[7],_=r[8],x=r[9],S=r[10],y=r[11],v=r[12],P=r[13],A=r[14],R=r[15];if(n[0].setComponents(u-a,m-h,y-_,R-v).normalize(),n[1].setComponents(u+a,m+h,y+_,R+v).normalize(),n[2].setComponents(u+l,m+d,y+x,R+P).normalize(),n[3].setComponents(u-l,m-d,y-x,R-P).normalize(),n[4].setComponents(u-c,m-p,y-S,R-A).normalize(),t===ji)n[5].setComponents(u+c,m+p,y+S,R+A).normalize();else if(t===pl)n[5].setComponents(c,p,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zo.x=r.normal.x>0?e.max.x:e.min.x,Zo.y=r.normal.y>0?e.max.y:e.min.y,Zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vm(){let s=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function oT(s,e){const t=e.isWebGL2,n=new WeakMap;function r(h,d){const p=h.array,m=h.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,p,m),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const m=d.array,_=d._updateRange,x=d.updateRanges;if(s.bindBuffer(p,h),_.count===-1&&x.length===0&&s.bufferSubData(p,0,m),x.length!==0){for(let S=0,y=x.length;S<y;S++){const v=x[S];t?s.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):s.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}d.clearUpdateRanges()}_.count!==-1&&(t?s.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):s.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);if(p===void 0)n.set(h,r(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:l,remove:c,update:u}}class Vu extends Ai{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),u=Math.floor(r),h=c+1,d=u+1,p=e/c,m=t/u,_=[],x=[],S=[],y=[];for(let v=0;v<d;v++){const P=v*m-l;for(let A=0;A<h;A++){const R=A*p-a;x.push(R,-P,0),S.push(0,0,1),y.push(A/c),y.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<c;P++){const A=P+h*v,R=P+h*(v+1),F=P+1+h*(v+1),U=P+1+h*v;_.push(A,R,U),_.push(R,F,U)}this.setIndex(_),this.setAttribute("position",new Yi(x,3)),this.setAttribute("normal",new Yi(S,3)),this.setAttribute("uv",new Yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.width,e.height,e.widthSegments,e.heightSegments)}}var lT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cT=`#ifdef USE_ALPHAHASH
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
#endif`,uT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pT=`#ifdef USE_AOMAP
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
#endif`,mT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gT=`#ifdef USE_BATCHING
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
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MT=`#ifdef USE_IRIDESCENCE
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
#endif`,ST=`#ifdef USE_BUMPMAP
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
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PT=`#define PI 3.141592653589793
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
} // validated`,IT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DT=`vec3 transformedNormal = objectNormal;
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
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BT="gl_FragColor = linearToOutputTexel( gl_FragColor );",zT=`
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
}`,kT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
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
#endif`,XT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KT=`#ifdef USE_GRADIENTMAP
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
}`,ZT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
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
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
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
#endif`,ob=`struct PhysicalMaterial {
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
}`,lb=`
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vb=`#if defined( USE_POINTS_UV )
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
#endif`,yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
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
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,pA=`#if DEPTH_PACKING == 3200
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
}`,mA=`#define DISTANCE
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
}`,gA=`#define DISTANCE
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,SA=`uniform vec3 diffuse;
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
}`,EA=`#define LAMBERT
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
}`,TA=`#define LAMBERT
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
}`,bA=`#define MATCAP
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
}`,AA=`#define MATCAP
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
}`,wA=`#define NORMAL
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
}`,RA=`#define NORMAL
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
}`,CA=`#define PHONG
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
}`,LA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,DA=`#define TOON
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
}`,NA=`#define TOON
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
}`,UA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,BA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,kA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:lT,alphahash_pars_fragment:cT,alphamap_fragment:uT,alphamap_pars_fragment:hT,alphatest_fragment:fT,alphatest_pars_fragment:dT,aomap_fragment:pT,aomap_pars_fragment:mT,batching_pars_vertex:gT,batching_vertex:_T,begin_vertex:vT,beginnormal_vertex:yT,bsdfs:xT,iridescence_fragment:MT,bumpmap_pars_fragment:ST,clipping_planes_fragment:ET,clipping_planes_pars_fragment:TT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:AT,color_fragment:wT,color_pars_fragment:RT,color_pars_vertex:CT,color_vertex:LT,common:PT,cube_uv_reflection_fragment:IT,defaultnormal_vertex:DT,displacementmap_pars_vertex:NT,displacementmap_vertex:UT,emissivemap_fragment:OT,emissivemap_pars_fragment:FT,colorspace_fragment:BT,colorspace_pars_fragment:zT,envmap_fragment:kT,envmap_common_pars_fragment:HT,envmap_pars_fragment:GT,envmap_pars_vertex:VT,envmap_physical_pars_fragment:tb,envmap_vertex:WT,fog_vertex:XT,fog_pars_vertex:qT,fog_fragment:jT,fog_pars_fragment:YT,gradientmap_pars_fragment:KT,lightmap_fragment:ZT,lightmap_pars_fragment:$T,lights_lambert_fragment:JT,lights_lambert_pars_fragment:QT,lights_pars_begin:eb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:rb,lights_phong_pars_fragment:sb,lights_physical_fragment:ab,lights_physical_pars_fragment:ob,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:ub,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:_b,map_particle_pars_fragment:vb,metalnessmap_fragment:yb,metalnessmap_pars_fragment:xb,morphcolor_vertex:Mb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Eb,morphtarget_vertex:Tb,normal_fragment_begin:bb,normal_fragment_maps:Ab,normal_pars_fragment:wb,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Nb,opaque_fragment:Ub,packing:Ob,premultiplied_alpha_fragment:Fb,project_vertex:Bb,dithering_fragment:zb,dithering_pars_fragment:kb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Wb,shadowmap_vertex:Xb,shadowmask_pars_fragment:qb,skinbase_vertex:jb,skinning_pars_vertex:Yb,skinning_vertex:Kb,skinnormal_vertex:Zb,specularmap_fragment:$b,specularmap_pars_fragment:Jb,tonemapping_fragment:Qb,tonemapping_pars_fragment:eA,transmission_fragment:tA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:aA,background_vert:oA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:uA,cube_vert:hA,cube_frag:fA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:_A,equirect_frag:vA,linedashed_vert:yA,linedashed_frag:xA,meshbasic_vert:MA,meshbasic_frag:SA,meshlambert_vert:EA,meshlambert_frag:TA,meshmatcap_vert:bA,meshmatcap_frag:AA,meshnormal_vert:wA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:LA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:DA,meshtoon_frag:NA,points_vert:UA,points_frag:OA,shadow_vert:FA,shadow_frag:BA,sprite_vert:zA,sprite_frag:kA},Pe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},xi={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new it(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new it(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};xi.physical={uniforms:Tn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const $o={r:0,b:0,g:0};function HA(s,e,t,n,r,a,l){const c=new it(0);let u=a===!0?0:1,h,d,p=null,m=0,_=null;function x(y,v){let P=!1,A=v.isScene===!0?v.background:null;A&&A.isTexture&&(A=(v.backgroundBlurriness>0?t:e).get(A)),A===null?S(c,u):A&&A.isColor&&(S(A,1),P=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,l):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===vl)?(d===void 0&&(d=new ri(new Ba(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:js(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(A.colorSpace)!==kt,(p!==A||m!==A.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,p=A,m=A.version,_=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new ri(new Vu(2,2),new qr({name:"BackgroundMaterial",uniforms:js(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(A.colorSpace)!==kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||m!==A.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,p=A,m=A.version,_=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function S(y,v){y.getRGB($o,km(s)),n.buffers.color.setClear($o.r,$o.g,$o.b,v,l)}return{getClearColor:function(){return c},setClearColor:function(y,v=1){c.set(y),u=v,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(y){u=y,S(c,u)},render:x}}function GA(s,e,t,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,c={},u=y(null);let h=u,d=!1;function p(k,q,ee,ce,se){let ue=!1;if(l){const he=S(ce,ee,q);h!==he&&(h=he,_(h.object)),ue=v(k,ce,ee,se),ue&&P(k,ce,ee,se)}else{const he=q.wireframe===!0;(h.geometry!==ce.id||h.program!==ee.id||h.wireframe!==he)&&(h.geometry=ce.id,h.program=ee.id,h.wireframe=he,ue=!0)}se!==null&&t.update(se,s.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,J(k,q,ee,ce),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function m(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function _(k){return n.isWebGL2?s.bindVertexArray(k):a.bindVertexArrayOES(k)}function x(k){return n.isWebGL2?s.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function S(k,q,ee){const ce=ee.wireframe===!0;let se=c[k.id];se===void 0&&(se={},c[k.id]=se);let ue=se[q.id];ue===void 0&&(ue={},se[q.id]=ue);let he=ue[ce];return he===void 0&&(he=y(m()),ue[ce]=he),he}function y(k){const q=[],ee=[],ce=[];for(let se=0;se<r;se++)q[se]=0,ee[se]=0,ce[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:ce,object:k,attributes:{},index:null}}function v(k,q,ee,ce){const se=h.attributes,ue=q.attributes;let he=0;const Se=ee.getAttributes();for(const Te in Se)if(Se[Te].location>=0){const _e=se[Te];let Le=ue[Te];if(Le===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(Le=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(Le=k.instanceColor)),_e===void 0||_e.attribute!==Le||Le&&_e.data!==Le.data)return!0;he++}return h.attributesNum!==he||h.index!==ce}function P(k,q,ee,ce){const se={},ue=q.attributes;let he=0;const Se=ee.getAttributes();for(const Te in Se)if(Se[Te].location>=0){let _e=ue[Te];_e===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));const Le={};Le.attribute=_e,_e&&_e.data&&(Le.data=_e.data),se[Te]=Le,he++}h.attributes=se,h.attributesNum=he,h.index=ce}function A(){const k=h.newAttributes;for(let q=0,ee=k.length;q<ee;q++)k[q]=0}function R(k){F(k,0)}function F(k,q){const ee=h.newAttributes,ce=h.enabledAttributes,se=h.attributeDivisors;ee[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),se[k]!==q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),se[k]=q)}function U(){const k=h.newAttributes,q=h.enabledAttributes;for(let ee=0,ce=q.length;ee<ce;ee++)q[ee]!==k[ee]&&(s.disableVertexAttribArray(ee),q[ee]=0)}function D(k,q,ee,ce,se,ue,he){he===!0?s.vertexAttribIPointer(k,q,ee,se,ue):s.vertexAttribPointer(k,q,ee,ce,se,ue)}function J(k,q,ee,ce){if(n.isWebGL2===!1&&(k.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const se=ce.attributes,ue=ee.getAttributes(),he=q.defaultAttributeValues;for(const Se in ue){const Te=ue[Se];if(Te.location>=0){let te=se[Se];if(te===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const _e=te.normalized,Le=te.itemSize,Ne=t.get(te);if(Ne===void 0)continue;const Oe=Ne.buffer,fe=Ne.type,pe=Ne.bytesPerElement,He=n.isWebGL2===!0&&(fe===s.INT||fe===s.UNSIGNED_INT||te.gpuType===xm);if(te.isInterleavedBufferAttribute){const lt=te.data,j=lt.stride,Vt=te.offset;if(lt.isInstancedInterleavedBuffer){for(let re=0;re<Te.locationSize;re++)F(Te.location+re,lt.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let re=0;re<Te.locationSize;re++)R(Te.location+re);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let re=0;re<Te.locationSize;re++)D(Te.location+re,Le/Te.locationSize,fe,_e,j*pe,(Vt+Le/Te.locationSize*re)*pe,He)}else{if(te.isInstancedBufferAttribute){for(let lt=0;lt<Te.locationSize;lt++)F(Te.location+lt,te.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let lt=0;lt<Te.locationSize;lt++)R(Te.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let lt=0;lt<Te.locationSize;lt++)D(Te.location+lt,Le/Te.locationSize,fe,_e,Le*pe,Le/Te.locationSize*lt*pe,He)}}else if(he!==void 0){const _e=he[Se];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(Te.location,_e);break;case 3:s.vertexAttrib3fv(Te.location,_e);break;case 4:s.vertexAttrib4fv(Te.location,_e);break;default:s.vertexAttrib1fv(Te.location,_e)}}}}U()}function w(){ie();for(const k in c){const q=c[k];for(const ee in q){const ce=q[ee];for(const se in ce)x(ce[se].object),delete ce[se];delete q[ee]}delete c[k]}}function I(k){if(c[k.id]===void 0)return;const q=c[k.id];for(const ee in q){const ce=q[ee];for(const se in ce)x(ce[se].object),delete ce[se];delete q[ee]}delete c[k.id]}function $(k){for(const q in c){const ee=c[q];if(ee[k.id]===void 0)continue;const ce=ee[k.id];for(const se in ce)x(ce[se].object),delete ce[se];delete ee[k.id]}}function ie(){Me(),d=!0,h!==u&&(h=u,_(h.object))}function Me(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:ie,resetDefaultState:Me,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:$,initAttributes:A,enableAttribute:R,disableUnusedAttributes:U}}function VA(s,e,t,n){const r=n.isWebGL2;let a;function l(d){a=d}function c(d,p){s.drawArrays(a,d,p),t.update(p,a,1)}function u(d,p,m){if(m===0)return;let _,x;if(r)_=s,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](a,d,p,m),t.update(p,a,m)}function h(d,p,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<m;x++)this.render(d[x],p[x]);else{_.multiDrawArraysWEBGL(a,d,0,p,0,m);let x=0;for(let S=0;S<m;S++)x+=p[S];t.update(x,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function WA(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const u=a(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,R=l||e.has("OES_texture_float"),F=A&&R,U=l?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:R,floatVertexTextures:F,maxSamples:U}}function XA(s){const e=this;let t=null,n=0,r=!1,a=!1;const l=new fr,c=new vt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||n!==0||r;return r=m,n=p.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,_){const x=p.clippingPlanes,S=p.clipIntersection,y=p.clipShadows,v=s.get(p);if(!r||x===null||x.length===0||a&&!y)a?d(null):h();else{const P=a?0:n,A=P*4;let R=v.clippingState||null;u.value=R,R=d(x,m,A,_);for(let F=0;F!==A;++F)R[F]=t[F];v.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,_,x){const S=p!==null?p.length:0;let y=null;if(S!==0){if(y=u.value,x!==!0||y===null){const v=_+S*4,P=m.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let A=0,R=_;A!==S;++A,R+=4)l.copy(p[A]).applyMatrix4(P,c),l.normal.toArray(y,R),y[R+3]=l.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function qA(s){let e=new WeakMap;function t(l,c){return c===xu?l.mapping=Hs:c===Mu&&(l.mapping=Gs),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===xu||c===Mu)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new rT(u.height/2);return h.fromEquirectangularTexture(s,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Wu extends Hm{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,_p=[.125,.215,.35,.446,.526,.582],Br=20,iu=new Wu,vp=new it;let ru=null,su=0,au=0;const Or=(1+Math.sqrt(5))/2,Ns=1/Or,yp=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Or,Ns),new H(0,Or,-Ns),new H(Ns,0,Or),new H(-Ns,0,Or),new H(Or,Ns,0),new H(-Or,Ns,0)];class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Da,format:ni,colorSpace:cn,depthBuffer:!1},r=Mp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jA(a)),this._blurMaterial=YA(a,e,t)}return r}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,iu)}_sceneToCubeUV(e,t,n,r){const c=new An(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(vp),d.toneMapping=yr,d.autoClear=!1;const _=new zr({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),x=new ri(new Ba,_);let S=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,S=!0):(_.color.copy(vp),S=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(c.up.set(0,u[v],0),c.lookAt(h[v],0,0)):P===1?(c.up.set(0,0,u[v]),c.lookAt(0,h[v],0)):(c.up.set(0,u[v],0),c.lookAt(0,0,h[v]));const A=this._cubeSize;Jo(r,P*A,v>2?A:0,A,A),d.setRenderTarget(r),S&&d.render(x,c),d.render(e,c)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new ri(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const u=this._cubeSize;Jo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,iu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=yp[(r-1)%yp.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ri(this._lodPlanes[r],h),m=h.uniforms,_=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Br-1),S=a/x,y=isFinite(a)?1+Math.floor(d*S):Br;y>Br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Br}`);const v=[];let P=0;for(let D=0;D<Br;++D){const J=D/S,w=Math.exp(-J*J/2);v.push(w),D===0?P+=w:D<y&&(P+=2*w)}for(let D=0;D<v.length;D++)v[D]=v[D]/P;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=v,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:A}=this;m.dTheta.value=x,m.mipInt.value=A-n;const R=this._sizeLods[r],F=3*R*(r>A-Os?r-A+Os:0),U=4*(this._cubeSize-R);Jo(t,F,U,3*R,2*R),u.setRenderTarget(t),u.render(p,iu)}}function jA(s){const e=[],t=[],n=[];let r=s;const a=s-Os+1+_p.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>s-Os?u=_p[l-s+Os-1]:l===0&&(u=0),n.push(u);const h=1/(c-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,x=6,S=3,y=2,v=1,P=new Float32Array(S*x*_),A=new Float32Array(y*x*_),R=new Float32Array(v*x*_);for(let U=0;U<_;U++){const D=U%3*2/3-1,J=U>2?0:-1,w=[D,J,0,D+2/3,J,0,D+2/3,J+1,0,D,J,0,D+2/3,J+1,0,D,J+1,0];P.set(w,S*x*U),A.set(m,y*x*U);const I=[U,U,U,U,U,U];R.set(I,v*x*U)}const F=new Ai;F.setAttribute("position",new wn(P,S)),F.setAttribute("uv",new wn(A,y)),F.setAttribute("faceIndex",new wn(R,v)),e.push(F),r>Os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mp(s,e,t){const n=new Xr(s,e,t);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function YA(s,e,t){const n=new Float32Array(Br),r=new H(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Sp(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Ep(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}function KA(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===xu||u===Mu,d=u===Hs||u===Gs;if(h||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new xp(s)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(h&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new xp(s));const m=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,m),c.addEventListener("dispose",a),m.texture}else return null}}}return c}function r(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function a(c){const u=c.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function ZA(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $A(s,e,t,n){const r={},a=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const S=m.morphAttributes[x];for(let y=0,v=S.length;y<v;y++)e.remove(S[y])}m.removeEventListener("dispose",l),delete r[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const x in m)e.update(m[x],s.ARRAY_BUFFER);const _=p.morphAttributes;for(const x in _){const S=_[x];for(let y=0,v=S.length;y<v;y++)e.update(S[y],s.ARRAY_BUFFER)}}function h(p){const m=[],_=p.index,x=p.attributes.position;let S=0;if(_!==null){const P=_.array;S=_.version;for(let A=0,R=P.length;A<R;A+=3){const F=P[A+0],U=P[A+1],D=P[A+2];m.push(F,U,U,D,D,F)}}else if(x!==void 0){const P=x.array;S=x.version;for(let A=0,R=P.length/3-1;A<R;A+=3){const F=A+0,U=A+1,D=A+2;m.push(F,U,U,D,D,F)}}else return;const y=new(Im(m)?zm:Bm)(m,1);y.version=S;const v=a.get(p);v&&e.remove(v),a.set(p,y)}function d(p){const m=a.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&h(p)}else h(p);return a.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function JA(s,e,t,n){const r=n.isWebGL2;let a;function l(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,x){s.drawElements(a,x,c,_*u),t.update(x,a,1)}function p(_,x,S){if(S===0)return;let y,v;if(r)y=s,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](a,x,c,_*u,S),t.update(x,a,S)}function m(_,x,S){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S;v++)this.render(_[v]/u,x[v]);else{y.multiDrawElementsWEBGL(a,x,0,c,_,0,S);let v=0;for(let P=0;P<S;P++)v+=x[P];t.update(v,a,1)}}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function QA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ew(s,e){return s[0]-e[0]}function tw(s,e){return Math.abs(e[1])-Math.abs(s[1])}function nw(s,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new Ut,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function u(h,d,p){const m=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let y=a.get(d);if(y===void 0||y.count!==S){let q=function(){Me.dispose(),a.delete(d),d.removeEventListener("dispose",q)};var _=q;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,F=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],J=d.morphAttributes.color||[];let w=0;A===!0&&(w=1),R===!0&&(w=2),F===!0&&(w=3);let I=d.attributes.position.count*w,$=1;I>e.maxTextureSize&&($=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ie=new Float32Array(I*$*4*S),Me=new Um(ie,I,$,S);Me.type=qi,Me.needsUpdate=!0;const k=w*4;for(let ee=0;ee<S;ee++){const ce=U[ee],se=D[ee],ue=J[ee],he=I*$*4*ee;for(let Se=0;Se<ce.count;Se++){const Te=Se*k;A===!0&&(l.fromBufferAttribute(ce,Se),ie[he+Te+0]=l.x,ie[he+Te+1]=l.y,ie[he+Te+2]=l.z,ie[he+Te+3]=0),R===!0&&(l.fromBufferAttribute(se,Se),ie[he+Te+4]=l.x,ie[he+Te+5]=l.y,ie[he+Te+6]=l.z,ie[he+Te+7]=0),F===!0&&(l.fromBufferAttribute(ue,Se),ie[he+Te+8]=l.x,ie[he+Te+9]=l.y,ie[he+Te+10]=l.z,ie[he+Te+11]=ue.itemSize===4?l.w:1)}}y={count:S,texture:Me,size:new tt(I,$)},a.set(d,y),d.addEventListener("dispose",q)}let v=0;for(let A=0;A<m.length;A++)v+=m[A];const P=d.morphTargetsRelative?1:1-v;p.getUniforms().setValue(s,"morphTargetBaseInfluence",P),p.getUniforms().setValue(s,"morphTargetInfluences",m),p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{const x=m===void 0?0:m.length;let S=n[d.id];if(S===void 0||S.length!==x){S=[];for(let R=0;R<x;R++)S[R]=[R,0];n[d.id]=S}for(let R=0;R<x;R++){const F=S[R];F[0]=R,F[1]=m[R]}S.sort(tw);for(let R=0;R<8;R++)R<x&&S[R][1]?(c[R][0]=S[R][0],c[R][1]=S[R][1]):(c[R][0]=Number.MAX_SAFE_INTEGER,c[R][1]=0);c.sort(ew);const y=d.morphAttributes.position,v=d.morphAttributes.normal;let P=0;for(let R=0;R<8;R++){const F=c[R],U=F[0],D=F[1];U!==Number.MAX_SAFE_INTEGER&&D?(y&&d.getAttribute("morphTarget"+R)!==y[U]&&d.setAttribute("morphTarget"+R,y[U]),v&&d.getAttribute("morphNormal"+R)!==v[U]&&d.setAttribute("morphNormal"+R,v[U]),r[R]=D,P+=D):(y&&d.hasAttribute("morphTarget"+R)===!0&&d.deleteAttribute("morphTarget"+R),v&&d.hasAttribute("morphNormal"+R)===!0&&d.deleteAttribute("morphNormal"+R),r[R]=0)}const A=d.morphTargetsRelative?1:1-P;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:u}}function iw(s,e,t,n){let r=new WeakMap;function a(u){const h=n.render.frame,d=u.geometry,p=e.get(u,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return p}function l(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}class Wm extends pn{constructor(e,t,n,r,a,l,c,u,h,d){if(d=d!==void 0?d:Gr,d!==Gr&&d!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Gr&&(n=mr),n===void 0&&d===Ws&&(n=Hr),super(null,r,a,l,c,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=u!==void 0?u:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xm=new pn,qm=new Wm(1,1);qm.compareFunction=Lm;const jm=new Um,Ym=new HE,Km=new Gm,Tp=[],bp=[],Ap=new Float32Array(16),wp=new Float32Array(9),Rp=new Float32Array(4);function Zs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=Tp[r];if(a===void 0&&(a=new Float32Array(r),Tp[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ml(s,e){let t=bp[e];t===void 0&&(t=new Int32Array(e),bp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function rw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function lw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Rp.set(n),s.uniformMatrix2fv(this.addr,!1,Rp),sn(t,n)}}function cw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;wp.set(n),s.uniformMatrix3fv(this.addr,!1,wp),sn(t,n)}}function uw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Ap.set(n),s.uniformMatrix4fv(this.addr,!1,Ap),sn(t,n)}}function hw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function yw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);const a=this.type===s.SAMPLER_2D_SHADOW?qm:Xm;t.setTexture2D(e||a,r)}function xw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ym,r)}function Mw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Km,r)}function Sw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jm,r)}function Ew(s){switch(s){case 5126:return rw;case 35664:return sw;case 35665:return aw;case 35666:return ow;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return hw;case 35667:case 35671:return fw;case 35668:case 35672:return dw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Tw(s,e){s.uniform1fv(this.addr,e)}function bw(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Aw(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function ww(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Rw(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cw(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lw(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pw(s,e){s.uniform1iv(this.addr,e)}function Iw(s,e){s.uniform2iv(this.addr,e)}function Dw(s,e){s.uniform3iv(this.addr,e)}function Nw(s,e){s.uniform4iv(this.addr,e)}function Uw(s,e){s.uniform1uiv(this.addr,e)}function Ow(s,e){s.uniform2uiv(this.addr,e)}function Fw(s,e){s.uniform3uiv(this.addr,e)}function Bw(s,e){s.uniform4uiv(this.addr,e)}function zw(s,e,t){const n=this.cache,r=e.length,a=Ml(t,r);rn(n,a)||(s.uniform1iv(this.addr,a),sn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Xm,a[l])}function kw(s,e,t){const n=this.cache,r=e.length,a=Ml(t,r);rn(n,a)||(s.uniform1iv(this.addr,a),sn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Ym,a[l])}function Hw(s,e,t){const n=this.cache,r=e.length,a=Ml(t,r);rn(n,a)||(s.uniform1iv(this.addr,a),sn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Km,a[l])}function Gw(s,e,t){const n=this.cache,r=e.length,a=Ml(t,r);rn(n,a)||(s.uniform1iv(this.addr,a),sn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||jm,a[l])}function Vw(s){switch(s){case 5126:return Tw;case 35664:return bw;case 35665:return Aw;case 35666:return ww;case 35674:return Rw;case 35675:return Cw;case 35676:return Lw;case 5124:case 35670:return Pw;case 35667:case 35671:return Iw;case 35668:case 35672:return Dw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Fw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Gw}}class Ww{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ew(t.type)}}class Xw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vw(t.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function Cp(s,e){s.seq.push(e),s.map[e.id]=e}function jw(s,e,t){const n=s.name,r=n.length;for(ou.lastIndex=0;;){const a=ou.exec(n),l=ou.lastIndex;let c=a[1];const u=a[2]==="]",h=a[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===r){Cp(t,h===void 0?new Ww(c,s,e):new Xw(c,s,e));break}else{let p=t.map[c];p===void 0&&(p=new qw(c),Cp(t,p)),t=p}}}class ol{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);jw(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Lp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yw=37297;let Kw=0;function Zw(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function $w(s){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(s);let n;switch(e===t?n="":e===dl&&t===fl?n="LinearDisplayP3ToLinearSRGB":e===fl&&t===dl&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case yl:return[n,"LinearTransferOETF"];case jt:case ku:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zw(s.getShaderSource(e),l)}else return r}function Jw(s,e){const t=$w(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qw(s,e){let t;switch(e){case KS:t="Linear";break;case ZS:t="Reinhard";break;case $S:t="OptimizedCineon";break;case JS:t="ACESFilmic";break;case eE:t="AgX";break;case QS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eR(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function tR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fs).join(`
`)}function nR(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iR(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function Fs(s){return s!==""}function Ip(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(s){return s.replace(rR,aR)}const sR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aR(s,e){let t=mt[e];if(t===void 0){const n=sR.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(s){return s.replace(oR,lR)}function lR(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Up(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function uR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function fR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _m:e="ENVMAP_BLENDING_MULTIPLY";break;case jS:e="ENVMAP_BLENDING_MIX";break;case YS:e="ENVMAP_BLENDING_ADD";break}return e}function dR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pR(s,e,t,n){const r=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=cR(t),h=uR(t),d=hR(t),p=fR(t),m=dR(t),_=t.isWebGL2?"":eR(t),x=tR(t),S=nR(a),y=r.createProgram();let v,P,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Fs).join(`
`),v.length>0&&(v+=`
`),P=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Fs).join(`
`),P.length>0&&(P+=`
`)):(v=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),P=[_,Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?mt.tonemapping_pars_fragment:"",t.toneMapping!==yr?Qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Jw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),l=wu(l),l=Ip(l,t),l=Dp(l,t),c=wu(c),c=Ip(c,t),c=Dp(c,t),l=Np(l),c=Np(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const R=A+v+l,F=A+P+c,U=Lp(r,r.VERTEX_SHADER,R),D=Lp(r,r.FRAGMENT_SHADER,F);r.attachShader(y,U),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function J(ie){if(s.debug.checkShaderErrors){const Me=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(U).trim(),q=r.getShaderInfoLog(D).trim();let ee=!0,ce=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,U,D);else{const se=Pp(r,U,"vertex"),ue=Pp(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+se+`
`+ue)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(k===""||q==="")&&(ce=!1);ce&&(ie.diagnostics={runnable:ee,programLog:Me,vertexShader:{log:k,prefix:v},fragmentShader:{log:q,prefix:P}})}r.deleteShader(U),r.deleteShader(D),w=new ol(r,y),I=iR(r,y)}let w;this.getUniforms=function(){return w===void 0&&J(this),w};let I;this.getAttributes=function(){return I===void 0&&J(this),I};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=r.getProgramParameter(y,Yw)),$},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=D,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _R(e),t.set(e,n)),n}}class _R{constructor(e){this.id=mR++,this.code=e,this.usedTimes=0}}function vR(s,e,t,n,r,a,l){const c=new Om,u=new gR,h=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return w===0?"uv":`uv${w}`}function y(w,I,$,ie,Me){const k=ie.fog,q=Me.geometry,ee=w.isMeshStandardMaterial?ie.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||ee),se=ce&&ce.mapping===vl?ce.image.height:null,ue=x[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=he!==void 0?he.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let te,_e,Le,Ne;if(ue){const un=xi[ue];te=un.vertexShader,_e=un.fragmentShader}else te=w.vertexShader,_e=w.fragmentShader,u.update(w),Le=u.getVertexShaderID(w),Ne=u.getFragmentShaderID(w);const Oe=s.getRenderTarget(),fe=Me.isInstancedMesh===!0,pe=Me.isBatchedMesh===!0,He=!!w.map,lt=!!w.matcap,j=!!ce,Vt=!!w.aoMap,re=!!w.lightMap,Ce=!!w.bumpMap,xe=!!w.normalMap,Xe=!!w.displacementMap,ze=!!w.emissiveMap,L=!!w.metalnessMap,E=!!w.roughnessMap,W=w.anisotropy>0,ae=w.clearcoat>0,de=w.iridescence>0,ye=w.sheen>0,ke=w.transmission>0,Ie=W&&!!w.anisotropyMap,Ue=ae&&!!w.clearcoatMap,je=ae&&!!w.clearcoatNormalMap,nt=ae&&!!w.clearcoatRoughnessMap,ve=de&&!!w.iridescenceMap,gt=de&&!!w.iridescenceThicknessMap,O=ye&&!!w.sheenColorMap,me=ye&&!!w.sheenRoughnessMap,we=!!w.specularMap,Ee=!!w.specularColorMap,Ge=!!w.specularIntensityMap,ct=ke&&!!w.transmissionMap,xt=ke&&!!w.thicknessMap,ut=!!w.gradientMap,Re=!!w.alphaMap,z=w.alphaTest>0,be=!!w.alphaHash,Ae=!!w.extensions,Ye=!!q.attributes.uv1,qe=!!q.attributes.uv2,bt=!!q.attributes.uv3;let At=yr;return w.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(At=s.toneMapping),{isWebGL2:d,shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:_e,defines:w.defines,customVertexShaderID:Le,customFragmentShaderID:Ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:pe,instancing:fe,instancingColor:fe&&Me.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Oe===null?s.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:cn,map:He,matcap:lt,envMap:j,envMapMode:j&&ce.mapping,envMapCubeUVHeight:se,aoMap:Vt,lightMap:re,bumpMap:Ce,normalMap:xe,displacementMap:m&&Xe,emissiveMap:ze,normalMapObjectSpace:xe&&w.normalMapType===pE,normalMapTangentSpace:xe&&w.normalMapType===Cm,metalnessMap:L,roughnessMap:E,anisotropy:W,anisotropyMap:Ie,clearcoat:ae,clearcoatMap:Ue,clearcoatNormalMap:je,clearcoatRoughnessMap:nt,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:gt,sheen:ye,sheenColorMap:O,sheenRoughnessMap:me,specularMap:we,specularColorMap:Ee,specularIntensityMap:Ge,transmission:ke,transmissionMap:ct,thicknessMap:xt,gradientMap:ut,opaque:w.transparent===!1&&w.blending===Bs,alphaMap:Re,alphaTest:z,alphaHash:be,combine:w.combine,mapUv:He&&S(w.map.channel),aoMapUv:Vt&&S(w.aoMap.channel),lightMapUv:re&&S(w.lightMap.channel),bumpMapUv:Ce&&S(w.bumpMap.channel),normalMapUv:xe&&S(w.normalMap.channel),displacementMapUv:Xe&&S(w.displacementMap.channel),emissiveMapUv:ze&&S(w.emissiveMap.channel),metalnessMapUv:L&&S(w.metalnessMap.channel),roughnessMapUv:E&&S(w.roughnessMap.channel),anisotropyMapUv:Ie&&S(w.anisotropyMap.channel),clearcoatMapUv:Ue&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:O&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&S(w.sheenRoughnessMap.channel),specularMapUv:we&&S(w.specularMap.channel),specularColorMapUv:Ee&&S(w.specularColorMap.channel),specularIntensityMapUv:Ge&&S(w.specularIntensityMap.channel),transmissionMapUv:ct&&S(w.transmissionMap.channel),thicknessMapUv:xt&&S(w.thicknessMap.channel),alphaMapUv:Re&&S(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xe||W),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:qe,vertexUv3s:bt,pointsUvs:Me.isPoints===!0&&!!q.attributes.uv&&(He||Re),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Me.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Te,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,useLegacyLights:s._useLegacyLights,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mi,flipSided:w.side===Nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ae&&w.extensions.derivatives===!0,extensionFragDepth:Ae&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const $ in w.defines)I.push($),I.push(w.defines[$]);return w.isRawShaderMaterial===!1&&(P(I,w),A(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function P(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function A(w,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.matcap&&c.enable(4),I.envMap&&c.enable(5),I.normalMapObjectSpace&&c.enable(6),I.normalMapTangentSpace&&c.enable(7),I.clearcoat&&c.enable(8),I.iridescence&&c.enable(9),I.alphaTest&&c.enable(10),I.vertexColors&&c.enable(11),I.vertexAlphas&&c.enable(12),I.vertexUv1s&&c.enable(13),I.vertexUv2s&&c.enable(14),I.vertexUv3s&&c.enable(15),I.vertexTangents&&c.enable(16),I.anisotropy&&c.enable(17),I.alphaHash&&c.enable(18),I.batching&&c.enable(19),w.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function R(w){const I=x[w.type];let $;if(I){const ie=xi[I];$=eT.clone(ie.uniforms)}else $=w.uniforms;return $}function F(w,I){let $;for(let ie=0,Me=h.length;ie<Me;ie++){const k=h[ie];if(k.cacheKey===I){$=k,++$.usedTimes;break}}return $===void 0&&($=new pR(s,I,w,a),h.push($)),$}function U(w){if(--w.usedTimes===0){const I=h.indexOf(w);h[I]=h[h.length-1],h.pop(),w.destroy()}}function D(w){u.remove(w)}function J(){u.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:F,releaseProgram:U,releaseShaderCache:D,programs:h,dispose:J}}function yR(){let s=new WeakMap;function e(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function t(a){s.delete(a)}function n(a,l,c){s.get(a)[l]=c}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function xR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Op(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fp(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(p,m,_,x,S,y){let v=s[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:_,groupOrder:x,renderOrder:p.renderOrder,z:S,group:y},s[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=_,v.groupOrder=x,v.renderOrder=p.renderOrder,v.z=S,v.group=y),e++,v}function c(p,m,_,x,S,y){const v=l(p,m,_,x,S,y);_.transmission>0?n.push(v):_.transparent===!0?r.push(v):t.push(v)}function u(p,m,_,x,S,y){const v=l(p,m,_,x,S,y);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function h(p,m){t.length>1&&t.sort(p||xR),n.length>1&&n.sort(m||Op),r.length>1&&r.sort(m||Op)}function d(){for(let p=e,m=s.length;p<m;p++){const _=s[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:u,finish:d,sort:h}}function MR(){let s=new WeakMap;function e(n,r){const a=s.get(n);let l;return a===void 0?(l=new Fp,s.set(n,[l])):r>=a.length?(l=new Fp,a.push(l)):l=a[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function SR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new it};break;case"SpotLight":t={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function ER(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TR=0;function bR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AR(s,e){const t=new SR,n=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);const a=new H,l=new yt,c=new yt;function u(d,p){let m=0,_=0,x=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let S=0,y=0,v=0,P=0,A=0,R=0,F=0,U=0,D=0,J=0,w=0;d.sort(bR);const I=p===!0?Math.PI:1;for(let ie=0,Me=d.length;ie<Me;ie++){const k=d[ie],q=k.color,ee=k.intensity,ce=k.distance,se=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=q.r*ee*I,_+=q.g*ee*I,x+=q.b*ee*I;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],ee);w++}else if(k.isDirectionalLight){const ue=t.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity*I),k.castShadow){const he=k.shadow,Se=n.get(k);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,r.directionalShadow[S]=Se,r.directionalShadowMap[S]=se,r.directionalShadowMatrix[S]=k.shadow.matrix,R++}r.directional[S]=ue,S++}else if(k.isSpotLight){const ue=t.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(q).multiplyScalar(ee*I),ue.distance=ce,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[v]=ue;const he=k.shadow;if(k.map&&(r.spotLightMap[D]=k.map,D++,he.updateMatrices(k),k.castShadow&&J++),r.spotLightMatrix[v]=he.matrix,k.castShadow){const Se=n.get(k);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,r.spotShadow[v]=Se,r.spotShadowMap[v]=se,U++}v++}else if(k.isRectAreaLight){const ue=t.get(k);ue.color.copy(q).multiplyScalar(ee),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[P]=ue,P++}else if(k.isPointLight){const ue=t.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity*I),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const he=k.shadow,Se=n.get(k);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,Se.shadowCameraNear=he.camera.near,Se.shadowCameraFar=he.camera.far,r.pointShadow[y]=Se,r.pointShadowMap[y]=se,r.pointShadowMatrix[y]=k.shadow.matrix,F++}r.point[y]=ue,y++}else if(k.isHemisphereLight){const ue=t.get(k);ue.skyColor.copy(k.color).multiplyScalar(ee*I),ue.groundColor.copy(k.groundColor).multiplyScalar(ee*I),r.hemi[A]=ue,A++}}P>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=x;const $=r.hash;($.directionalLength!==S||$.pointLength!==y||$.spotLength!==v||$.rectAreaLength!==P||$.hemiLength!==A||$.numDirectionalShadows!==R||$.numPointShadows!==F||$.numSpotShadows!==U||$.numSpotMaps!==D||$.numLightProbes!==w)&&(r.directional.length=S,r.spot.length=v,r.rectArea.length=P,r.point.length=y,r.hemi.length=A,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=U+D-J,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=w,$.directionalLength=S,$.pointLength=y,$.spotLength=v,$.rectAreaLength=P,$.hemiLength=A,$.numDirectionalShadows=R,$.numPointShadows=F,$.numSpotShadows=U,$.numSpotMaps=D,$.numLightProbes=w,r.version=TR++)}function h(d,p){let m=0,_=0,x=0,S=0,y=0;const v=p.matrixWorldInverse;for(let P=0,A=d.length;P<A;P++){const R=d[P];if(R.isDirectionalLight){const F=r.directional[m];F.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(v),m++}else if(R.isSpotLight){const F=r.spot[x];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(v),F.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(v),x++}else if(R.isRectAreaLight){const F=r.rectArea[S];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(v),c.identity(),l.copy(R.matrixWorld),l.premultiply(v),c.extractRotation(l),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),S++}else if(R.isPointLight){const F=r.point[_];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(v),_++}else if(R.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(R.matrixWorld),F.direction.transformDirection(v),y++}}}return{setup:u,setupView:h,state:r}}function Bp(s,e){const t=new AR(s,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(p){n.push(p)}function c(p){r.push(p)}function u(p){t.setup(n,p)}function h(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:l,pushShadow:c}}function wR(s,e){let t=new WeakMap;function n(a,l=0){const c=t.get(a);let u;return c===void 0?(u=new Bp(s,e),t.set(a,[u])):l>=c.length?(u=new Bp(s,e),c.push(u)):u=c[l],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class RR extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CR extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
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
}`;function IR(s,e,t){let n=new Gu;const r=new tt,a=new tt,l=new Ut,c=new RR({depthPacking:dE}),u=new CR,h={},d=t.maxTextureSize,p={[Ki]:Nn,[Nn]:Ki,[Mi]:Mi},m=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:LR,fragmentShader:PR}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new Ai;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ri(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gm;let v=this.type;this.render=function(U,D,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const w=s.getRenderTarget(),I=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(vr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Me=v!==Wi&&this.type===Wi,k=v===Wi&&this.type!==Wi;for(let q=0,ee=U.length;q<ee;q++){const ce=U[q],se=ce.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const ue=se.getFrameExtents();if(r.multiply(ue),a.copy(se.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ue.x),r.x=a.x*ue.x,se.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ue.y),r.y=a.y*ue.y,se.mapSize.y=a.y)),se.map===null||Me===!0||k===!0){const Se=this.type!==Wi?{minFilter:ln,magFilter:ln}:{};se.map!==null&&se.map.dispose(),se.map=new Xr(r.x,r.y,Se),se.map.texture.name=ce.name+".shadowMap",se.camera.updateProjectionMatrix()}s.setRenderTarget(se.map),s.clear();const he=se.getViewportCount();for(let Se=0;Se<he;Se++){const Te=se.getViewport(Se);l.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),ie.viewport(l),se.updateMatrices(ce,Se),n=se.getFrustum(),R(D,J,se.camera,ce,this.type)}se.isPointLightShadow!==!0&&this.type===Wi&&P(se,J),se.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(w,I,$)};function P(U,D){const J=e.update(S);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,_.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xr(r.x,r.y)),m.uniforms.shadow_pass.value=U.map.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(D,null,J,m,S,null),_.uniforms.shadow_pass.value=U.mapPass.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(D,null,J,_,S,null)}function A(U,D,J,w){let I=null;const $=J.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if($!==void 0)I=$;else if(I=J.isPointLight===!0?u:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=I.uuid,Me=D.uuid;let k=h[ie];k===void 0&&(k={},h[ie]=k);let q=k[Me];q===void 0&&(q=I.clone(),k[Me]=q,D.addEventListener("dispose",F)),I=q}if(I.visible=D.visible,I.wireframe=D.wireframe,w===Wi?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:p[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,J.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const ie=s.properties.get(I);ie.light=J}return I}function R(U,D,J,w,I){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&I===Wi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,U.matrixWorld);const Me=e.update(U),k=U.material;if(Array.isArray(k)){const q=Me.groups;for(let ee=0,ce=q.length;ee<ce;ee++){const se=q[ee],ue=k[se.materialIndex];if(ue&&ue.visible){const he=A(U,ue,w,I);U.onBeforeShadow(s,U,D,J,Me,he,se),s.renderBufferDirect(J,null,Me,he,U,se),U.onAfterShadow(s,U,D,J,Me,he,se)}}}else if(k.visible){const q=A(U,k,w,I);U.onBeforeShadow(s,U,D,J,Me,q,null),s.renderBufferDirect(J,null,Me,q,U,null),U.onAfterShadow(s,U,D,J,Me,q,null)}}const ie=U.children;for(let Me=0,k=ie.length;Me<k;Me++)R(ie[Me],D,J,w,I)}function F(U){U.target.removeEventListener("dispose",F);for(const J in h){const w=h[J],I=U.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function DR(s,e,t){const n=t.isWebGL2;function r(){let z=!1;const be=new Ut;let Ae=null;const Ye=new Ut(0,0,0,0);return{setMask:function(qe){Ae!==qe&&!z&&(s.colorMask(qe,qe,qe,qe),Ae=qe)},setLocked:function(qe){z=qe},setClear:function(qe,bt,At,$t,un){un===!0&&(qe*=$t,bt*=$t,At*=$t),be.set(qe,bt,At,$t),Ye.equals(be)===!1&&(s.clearColor(qe,bt,At,$t),Ye.copy(be))},reset:function(){z=!1,Ae=null,Ye.set(-1,0,0,0)}}}function a(){let z=!1,be=null,Ae=null,Ye=null;return{setTest:function(qe){qe?pe(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(qe){be!==qe&&!z&&(s.depthMask(qe),be=qe)},setFunc:function(qe){if(Ae!==qe){switch(qe){case kS:s.depthFunc(s.NEVER);break;case HS:s.depthFunc(s.ALWAYS);break;case GS:s.depthFunc(s.LESS);break;case cl:s.depthFunc(s.LEQUAL);break;case VS:s.depthFunc(s.EQUAL);break;case WS:s.depthFunc(s.GEQUAL);break;case XS:s.depthFunc(s.GREATER);break;case qS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=qe}},setLocked:function(qe){z=qe},setClear:function(qe){Ye!==qe&&(s.clearDepth(qe),Ye=qe)},reset:function(){z=!1,be=null,Ae=null,Ye=null}}}function l(){let z=!1,be=null,Ae=null,Ye=null,qe=null,bt=null,At=null,$t=null,un=null;return{setTest:function(It){z||(It?pe(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(It){be!==It&&!z&&(s.stencilMask(It),be=It)},setFunc:function(It,Qt,Vn){(Ae!==It||Ye!==Qt||qe!==Vn)&&(s.stencilFunc(It,Qt,Vn),Ae=It,Ye=Qt,qe=Vn)},setOp:function(It,Qt,Vn){(bt!==It||At!==Qt||$t!==Vn)&&(s.stencilOp(It,Qt,Vn),bt=It,At=Qt,$t=Vn)},setLocked:function(It){z=It},setClear:function(It){un!==It&&(s.clearStencil(It),un=It)},reset:function(){z=!1,be=null,Ae=null,Ye=null,qe=null,bt=null,At=null,$t=null,un=null}}}const c=new r,u=new a,h=new l,d=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,S=[],y=null,v=!1,P=null,A=null,R=null,F=null,U=null,D=null,J=null,w=new it(0,0,0),I=0,$=!1,ie=null,Me=null,k=null,q=null,ee=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(he)[1]),se=ue>=1):he.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),se=ue>=2);let Se=null,Te={};const te=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Le=new Ut().fromArray(te),Ne=new Ut().fromArray(_e);function Oe(z,be,Ae,Ye){const qe=new Uint8Array(4),bt=s.createTexture();s.bindTexture(z,bt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<Ae;At++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(be,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(be+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return bt}const fe={};fe[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(fe[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pe(s.DEPTH_TEST),u.setFunc(cl),ze(!1),L(_d),pe(s.CULL_FACE),xe(vr);function pe(z){m[z]!==!0&&(s.enable(z),m[z]=!0)}function He(z){m[z]!==!1&&(s.disable(z),m[z]=!1)}function lt(z,be){return _[z]!==be?(s.bindFramebuffer(z,be),_[z]=be,n&&(z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=be),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=be)),!0):!1}function j(z,be){let Ae=S,Ye=!1;if(z)if(Ae=x.get(be),Ae===void 0&&(Ae=[],x.set(be,Ae)),z.isWebGLMultipleRenderTargets){const qe=z.texture;if(Ae.length!==qe.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,At=qe.length;bt<At;bt++)Ae[bt]=s.COLOR_ATTACHMENT0+bt;Ae.length=qe.length,Ye=!0}}else Ae[0]!==s.COLOR_ATTACHMENT0&&(Ae[0]=s.COLOR_ATTACHMENT0,Ye=!0);else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ye=!0);Ye&&(t.isWebGL2?s.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Vt(z){return y!==z?(s.useProgram(z),y=z,!0):!1}const re={[Fr]:s.FUNC_ADD,[bS]:s.FUNC_SUBTRACT,[AS]:s.FUNC_REVERSE_SUBTRACT};if(n)re[Md]=s.MIN,re[Sd]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(re[Md]=z.MIN_EXT,re[Sd]=z.MAX_EXT)}const Ce={[wS]:s.ZERO,[RS]:s.ONE,[CS]:s.SRC_COLOR,[vu]:s.SRC_ALPHA,[US]:s.SRC_ALPHA_SATURATE,[DS]:s.DST_COLOR,[PS]:s.DST_ALPHA,[LS]:s.ONE_MINUS_SRC_COLOR,[yu]:s.ONE_MINUS_SRC_ALPHA,[NS]:s.ONE_MINUS_DST_COLOR,[IS]:s.ONE_MINUS_DST_ALPHA,[OS]:s.CONSTANT_COLOR,[FS]:s.ONE_MINUS_CONSTANT_COLOR,[BS]:s.CONSTANT_ALPHA,[zS]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(z,be,Ae,Ye,qe,bt,At,$t,un,It){if(z===vr){v===!0&&(He(s.BLEND),v=!1);return}if(v===!1&&(pe(s.BLEND),v=!0),z!==TS){if(z!==P||It!==$){if((A!==Fr||U!==Fr)&&(s.blendEquation(s.FUNC_ADD),A=Fr,U=Fr),It)switch(z){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vd:s.blendFunc(s.ONE,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}R=null,F=null,D=null,J=null,w.set(0,0,0),I=0,P=z,$=It}return}qe=qe||be,bt=bt||Ae,At=At||Ye,(be!==A||qe!==U)&&(s.blendEquationSeparate(re[be],re[qe]),A=be,U=qe),(Ae!==R||Ye!==F||bt!==D||At!==J)&&(s.blendFuncSeparate(Ce[Ae],Ce[Ye],Ce[bt],Ce[At]),R=Ae,F=Ye,D=bt,J=At),($t.equals(w)===!1||un!==I)&&(s.blendColor($t.r,$t.g,$t.b,un),w.copy($t),I=un),P=z,$=!1}function Xe(z,be){z.side===Mi?He(s.CULL_FACE):pe(s.CULL_FACE);let Ae=z.side===Nn;be&&(Ae=!Ae),ze(Ae),z.blending===Bs&&z.transparent===!1?xe(vr):xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),c.setMask(z.colorWrite);const Ye=z.stencilWrite;h.setTest(Ye),Ye&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),W(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(z){ie!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),ie=z)}function L(z){z!==MS?(pe(s.CULL_FACE),z!==Me&&(z===_d?s.cullFace(s.BACK):z===SS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Me=z}function E(z){z!==k&&(se&&s.lineWidth(z),k=z)}function W(z,be,Ae){z?(pe(s.POLYGON_OFFSET_FILL),(q!==be||ee!==Ae)&&(s.polygonOffset(be,Ae),q=be,ee=Ae)):He(s.POLYGON_OFFSET_FILL)}function ae(z){z?pe(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function de(z){z===void 0&&(z=s.TEXTURE0+ce-1),Se!==z&&(s.activeTexture(z),Se=z)}function ye(z,be,Ae){Ae===void 0&&(Se===null?Ae=s.TEXTURE0+ce-1:Ae=Se);let Ye=Te[Ae];Ye===void 0&&(Ye={type:void 0,texture:void 0},Te[Ae]=Ye),(Ye.type!==z||Ye.texture!==be)&&(Se!==Ae&&(s.activeTexture(Ae),Se=Ae),s.bindTexture(z,be||fe[z]),Ye.type=z,Ye.texture=be)}function ke(){const z=Te[Se];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(z){Le.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Le.copy(z))}function ct(z){Ne.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Ne.copy(z))}function xt(z,be){let Ae=p.get(be);Ae===void 0&&(Ae=new WeakMap,p.set(be,Ae));let Ye=Ae.get(z);Ye===void 0&&(Ye=s.getUniformBlockIndex(be,z.name),Ae.set(z,Ye))}function ut(z,be){const Ye=p.get(be).get(z);d.get(be)!==Ye&&(s.uniformBlockBinding(be,Ye,z.__bindingPointIndex),d.set(be,Ye))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},Se=null,Te={},_={},x=new WeakMap,S=[],y=null,v=!1,P=null,A=null,R=null,F=null,U=null,D=null,J=null,w=new it(0,0,0),I=0,$=!1,ie=null,Me=null,k=null,q=null,ee=null,Le.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:pe,disable:He,bindFramebuffer:lt,drawBuffers:j,useProgram:Vt,setBlending:xe,setMaterial:Xe,setFlipSided:ze,setCullFace:L,setLineWidth:E,setPolygonOffset:W,setScissorTest:ae,activeTexture:de,bindTexture:ye,unbindTexture:ke,compressedTexImage2D:Ie,compressedTexImage3D:Ue,texImage2D:we,texImage3D:Ee,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:O,texStorage3D:me,texSubImage2D:je,texSubImage3D:nt,compressedTexSubImage2D:ve,compressedTexSubImage3D:gt,scissor:Ge,viewport:ct,reset:Re}}function NR(s,e,t,n,r,a,l){const c=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return _?new OffscreenCanvas(L,E):Ua("canvas")}function S(L,E,W,ae){let de=1;if((L.width>ae||L.height>ae)&&(de=ae/Math.max(L.width,L.height)),de<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ye=E?ml:Math.floor,ke=ye(de*L.width),Ie=ye(de*L.height);p===void 0&&(p=x(ke,Ie));const Ue=W?x(ke,Ie):p;return Ue.width=ke,Ue.height=Ie,Ue.getContext("2d").drawImage(L,0,0,ke,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ke+"x"+Ie+")."),Ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Au(L.width)&&Au(L.height)}function v(L){return c?!1:L.wrapS!==ti||L.wrapT!==ti||L.minFilter!==ln&&L.minFilter!==Dn}function P(L,E){return L.generateMipmaps&&E&&L.minFilter!==ln&&L.minFilter!==Dn}function A(L){s.generateMipmap(L)}function R(L,E,W,ae,de=!1){if(c===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ye=E;if(E===s.RED&&(W===s.FLOAT&&(ye=s.R32F),W===s.HALF_FLOAT&&(ye=s.R16F),W===s.UNSIGNED_BYTE&&(ye=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ye=s.R8UI),W===s.UNSIGNED_SHORT&&(ye=s.R16UI),W===s.UNSIGNED_INT&&(ye=s.R32UI),W===s.BYTE&&(ye=s.R8I),W===s.SHORT&&(ye=s.R16I),W===s.INT&&(ye=s.R32I)),E===s.RG&&(W===s.FLOAT&&(ye=s.RG32F),W===s.HALF_FLOAT&&(ye=s.RG16F),W===s.UNSIGNED_BYTE&&(ye=s.RG8)),E===s.RGBA){const ke=de?hl:Ct.getTransfer(ae);W===s.FLOAT&&(ye=s.RGBA32F),W===s.HALF_FLOAT&&(ye=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ye=ke===kt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function F(L,E,W){return P(L,W)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function U(L){return L===ln||L===Su||L===al?s.NEAREST:s.LINEAR}function D(L){const E=L.target;E.removeEventListener("dispose",D),w(E),E.isVideoTexture&&d.delete(E)}function J(L){const E=L.target;E.removeEventListener("dispose",J),$(E)}function w(L){const E=n.get(L);if(E.__webglInit===void 0)return;const W=L.source,ae=m.get(W);if(ae){const de=ae[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(L),Object.keys(ae).length===0&&m.delete(W)}n.remove(L)}function I(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const W=L.source,ae=m.get(W);delete ae[E.__cacheKey],l.memory.textures--}function $(L){const E=L.texture,W=n.get(L),ae=n.get(E);if(ae.__webglTexture!==void 0&&(s.deleteTexture(ae.__webglTexture),l.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(W.__webglFramebuffer[de]))for(let ye=0;ye<W.__webglFramebuffer[de].length;ye++)s.deleteFramebuffer(W.__webglFramebuffer[de][ye]);else s.deleteFramebuffer(W.__webglFramebuffer[de]);W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer[de])}else{if(Array.isArray(W.__webglFramebuffer))for(let de=0;de<W.__webglFramebuffer.length;de++)s.deleteFramebuffer(W.__webglFramebuffer[de]);else s.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&s.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let de=0;de<W.__webglColorRenderbuffer.length;de++)W.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(W.__webglColorRenderbuffer[de]);W.__webglDepthRenderbuffer&&s.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let de=0,ye=E.length;de<ye;de++){const ke=n.get(E[de]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),l.memory.textures--),n.remove(E[de])}n.remove(E),n.remove(L)}let ie=0;function Me(){ie=0}function k(){const L=ie;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),ie+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ee(L,E){const W=n.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const ae=L.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,L,E);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function ce(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Le(W,L,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function se(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Le(W,L,E);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function ue(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Ne(W,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const he={[Vs]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[ul]:s.MIRRORED_REPEAT},Se={[ln]:s.NEAREST,[Su]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[ym]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},Te={[mE]:s.NEVER,[ME]:s.ALWAYS,[gE]:s.LESS,[Lm]:s.LEQUAL,[_E]:s.EQUAL,[xE]:s.GEQUAL,[vE]:s.GREATER,[yE]:s.NOTEQUAL};function te(L,E,W){if(W?(s.texParameteri(L,s.TEXTURE_WRAP_S,he[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,he[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,he[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[E.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==ti||E.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U(E.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U(E.minFilter)),E.minFilter!==ln&&E.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===ln||E.minFilter!==al&&E.minFilter!==Wr||E.type===qi&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(L,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function _e(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",D));const ae=E.source;let de=m.get(ae);de===void 0&&(de={},m.set(ae,de));const ye=q(E);if(ye!==L.__cacheKey){de[ye]===void 0&&(de[ye]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,W=!0),de[ye].usedTimes++;const ke=de[L.__cacheKey];ke!==void 0&&(de[L.__cacheKey].usedTimes--,ke.usedTimes===0&&I(E)),L.__cacheKey=ye,L.__webglTexture=de[ye].texture}return W}function Le(L,E,W){let ae=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=s.TEXTURE_3D);const de=_e(L,E),ye=E.source;t.bindTexture(ae,L.__webglTexture,s.TEXTURE0+W);const ke=n.get(ye);if(ye.version!==ke.__version||de===!0){t.activeTexture(s.TEXTURE0+W);const Ie=Ct.getPrimaries(Ct.workingColorSpace),Ue=E.colorSpace===ii?null:Ct.getPrimaries(E.colorSpace),je=E.colorSpace===ii||Ie===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const nt=v(E)&&y(E.image)===!1;let ve=S(E.image,nt,!1,r.maxTextureSize);ve=ze(E,ve);const gt=y(ve)||c,O=a.convert(E.format,E.colorSpace);let me=a.convert(E.type),we=R(E.internalFormat,O,me,E.colorSpace,E.isVideoTexture);te(ae,E,gt);let Ee;const Ge=E.mipmaps,ct=c&&E.isVideoTexture!==!0&&we!==Am,xt=ke.__version===void 0||de===!0,ut=F(E,ve,gt);if(E.isDepthTexture)we=s.DEPTH_COMPONENT,c?E.type===qi?we=s.DEPTH_COMPONENT32F:E.type===mr?we=s.DEPTH_COMPONENT24:E.type===Hr?we=s.DEPTH24_STENCIL8:we=s.DEPTH_COMPONENT16:E.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Gr&&we===s.DEPTH_COMPONENT&&E.type!==zu&&E.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=mr,me=a.convert(E.type)),E.format===Ws&&we===s.DEPTH_COMPONENT&&(we=s.DEPTH_STENCIL,E.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Hr,me=a.convert(E.type))),xt&&(ct?t.texStorage2D(s.TEXTURE_2D,1,we,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,we,ve.width,ve.height,0,O,me,null));else if(E.isDataTexture)if(Ge.length>0&&gt){ct&&xt&&t.texStorage2D(s.TEXTURE_2D,ut,we,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)Ee=Ge[Re],ct?t.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ee.width,Ee.height,O,me,Ee.data):t.texImage2D(s.TEXTURE_2D,Re,we,Ee.width,Ee.height,0,O,me,Ee.data);E.generateMipmaps=!1}else ct?(xt&&t.texStorage2D(s.TEXTURE_2D,ut,we,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,O,me,ve.data)):t.texImage2D(s.TEXTURE_2D,0,we,ve.width,ve.height,0,O,me,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ct&&xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,we,Ge[0].width,Ge[0].height,ve.depth);for(let Re=0,z=Ge.length;Re<z;Re++)Ee=Ge[Re],E.format!==ni?O!==null?ct?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ee.width,Ee.height,ve.depth,O,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,we,Ee.width,Ee.height,ve.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ee.width,Ee.height,ve.depth,O,me,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Re,we,Ee.width,Ee.height,ve.depth,0,O,me,Ee.data)}else{ct&&xt&&t.texStorage2D(s.TEXTURE_2D,ut,we,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)Ee=Ge[Re],E.format!==ni?O!==null?ct?t.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,Ee.width,Ee.height,O,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,Re,we,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ee.width,Ee.height,O,me,Ee.data):t.texImage2D(s.TEXTURE_2D,Re,we,Ee.width,Ee.height,0,O,me,Ee.data)}else if(E.isDataArrayTexture)ct?(xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,we,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,O,me,ve.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ve.width,ve.height,ve.depth,0,O,me,ve.data);else if(E.isData3DTexture)ct?(xt&&t.texStorage3D(s.TEXTURE_3D,ut,we,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,O,me,ve.data)):t.texImage3D(s.TEXTURE_3D,0,we,ve.width,ve.height,ve.depth,0,O,me,ve.data);else if(E.isFramebufferTexture){if(xt)if(ct)t.texStorage2D(s.TEXTURE_2D,ut,we,ve.width,ve.height);else{let Re=ve.width,z=ve.height;for(let be=0;be<ut;be++)t.texImage2D(s.TEXTURE_2D,be,we,Re,z,0,O,me,null),Re>>=1,z>>=1}}else if(Ge.length>0&&gt){ct&&xt&&t.texStorage2D(s.TEXTURE_2D,ut,we,Ge[0].width,Ge[0].height);for(let Re=0,z=Ge.length;Re<z;Re++)Ee=Ge[Re],ct?t.texSubImage2D(s.TEXTURE_2D,Re,0,0,O,me,Ee):t.texImage2D(s.TEXTURE_2D,Re,we,O,me,Ee);E.generateMipmaps=!1}else ct?(xt&&t.texStorage2D(s.TEXTURE_2D,ut,we,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,O,me,ve)):t.texImage2D(s.TEXTURE_2D,0,we,O,me,ve);P(E,gt)&&A(ae),ke.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ne(L,E,W){if(E.image.length!==6)return;const ae=_e(L,E),de=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+W);const ye=n.get(de);if(de.version!==ye.__version||ae===!0){t.activeTexture(s.TEXTURE0+W);const ke=Ct.getPrimaries(Ct.workingColorSpace),Ie=E.colorSpace===ii?null:Ct.getPrimaries(E.colorSpace),Ue=E.colorSpace===ii||ke===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Re=0;Re<6;Re++)!je&&!nt?ve[Re]=S(E.image[Re],!1,!0,r.maxCubemapSize):ve[Re]=nt?E.image[Re].image:E.image[Re],ve[Re]=ze(E,ve[Re]);const gt=ve[0],O=y(gt)||c,me=a.convert(E.format,E.colorSpace),we=a.convert(E.type),Ee=R(E.internalFormat,me,we,E.colorSpace),Ge=c&&E.isVideoTexture!==!0,ct=ye.__version===void 0||ae===!0;let xt=F(E,gt,O);te(s.TEXTURE_CUBE_MAP,E,O);let ut;if(je){Ge&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Ee,gt.width,gt.height);for(let Re=0;Re<6;Re++){ut=ve[Re].mipmaps;for(let z=0;z<ut.length;z++){const be=ut[z];E.format!==ni?me!==null?Ge?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,0,0,be.width,be.height,me,we,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z,Ee,be.width,be.height,0,me,we,be.data)}}}else{ut=E.mipmaps,Ge&&ct&&(ut.length>0&&xt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Ee,ve[0].width,ve[0].height));for(let Re=0;Re<6;Re++)if(nt){Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ve[Re].width,ve[Re].height,me,we,ve[Re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ee,ve[Re].width,ve[Re].height,0,me,we,ve[Re].data);for(let z=0;z<ut.length;z++){const Ae=ut[z].image[Re].image;Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,0,0,Ae.width,Ae.height,me,we,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,Ee,Ae.width,Ae.height,0,me,we,Ae.data)}}else{Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,me,we,ve[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ee,me,we,ve[Re]);for(let z=0;z<ut.length;z++){const be=ut[z];Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,0,0,me,we,be.image[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,z+1,Ee,me,we,be.image[Re])}}}P(E,O)&&A(s.TEXTURE_CUBE_MAP),ye.__version=de.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Oe(L,E,W,ae,de,ye){const ke=a.convert(W.format,W.colorSpace),Ie=a.convert(W.type),Ue=R(W.internalFormat,ke,Ie,W.colorSpace);if(!n.get(E).__hasExternalTextures){const nt=Math.max(1,E.width>>ye),ve=Math.max(1,E.height>>ye);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ye,Ue,nt,ve,E.depth,0,ke,Ie,null):t.texImage2D(de,ye,Ue,nt,ve,0,ke,Ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),xe(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,de,n.get(W).__webglTexture,0,Ce(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,de,n.get(W).__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(L,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let ae=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(W||xe(E)){const de=E.depthTexture;de&&de.isDepthTexture&&(de.type===qi?ae=s.DEPTH_COMPONENT32F:de.type===mr&&(ae=s.DEPTH_COMPONENT24));const ye=Ce(E);xe(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ae,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ae,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const ae=Ce(E);W&&xe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,E.width,E.height):xe(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let de=0;de<ae.length;de++){const ye=ae[de],ke=a.convert(ye.format,ye.colorSpace),Ie=a.convert(ye.type),Ue=R(ye.internalFormat,ke,Ie,ye.colorSpace),je=Ce(E);W&&xe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ue,E.width,E.height):xe(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const ae=n.get(E.depthTexture).__webglTexture,de=Ce(E);if(E.depthTexture.format===Gr)xe(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(E.depthTexture.format===Ws)xe(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function He(L){const E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,L)}else if(W){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=s.createRenderbuffer(),fe(E.__webglDepthbuffer[ae],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),fe(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(L,E,W){const ae=n.get(L);E!==void 0&&Oe(ae.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&He(L)}function j(L){const E=L.texture,W=n.get(L),ae=n.get(E);L.addEventListener("dispose",J),L.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=E.version,l.memory.textures++);const de=L.isWebGLCubeRenderTarget===!0,ye=L.isWebGLMultipleRenderTargets===!0,ke=y(L)||c;if(de){W.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(c&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ie]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)W.__webglFramebuffer[Ie][Ue]=s.createFramebuffer()}else W.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(c&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)W.__webglFramebuffer[Ie]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ye)if(r.drawBuffers){const Ie=L.texture;for(let Ue=0,je=Ie.length;Ue<je;Ue++){const nt=n.get(Ie[Ue]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&xe(L)===!1){const Ie=ye?E:[E];W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ie.length;Ue++){const je=Ie[Ue];W.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const nt=a.convert(je.format,je.colorSpace),ve=a.convert(je.type),gt=R(je.internalFormat,nt,ve,je.colorSpace,L.isXRRenderTarget===!0),O=Ce(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,O,gt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),te(s.TEXTURE_CUBE_MAP,E,ke);for(let Ie=0;Ie<6;Ie++)if(c&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Oe(W.__webglFramebuffer[Ie][Ue],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ue);else Oe(W.__webglFramebuffer[Ie],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);P(E,ke)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const Ie=L.texture;for(let Ue=0,je=Ie.length;Ue<je;Ue++){const nt=Ie[Ue],ve=n.get(nt);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),te(s.TEXTURE_2D,nt,ke),Oe(W.__webglFramebuffer,L,nt,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),P(nt,ke)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,ae.__webglTexture),te(Ie,E,ke),c&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Oe(W.__webglFramebuffer[Ue],L,E,s.COLOR_ATTACHMENT0,Ie,Ue);else Oe(W.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ie,0);P(E,ke)&&A(Ie),t.unbindTexture()}L.depthBuffer&&He(L)}function Vt(L){const E=y(L)||c,W=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ae=0,de=W.length;ae<de;ae++){const ye=W[ae];if(P(ye,E)){const ke=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ie=n.get(ye).__webglTexture;t.bindTexture(ke,Ie),A(ke),t.unbindTexture()}}}function re(L){if(c&&L.samples>0&&xe(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],W=L.width,ae=L.height;let de=s.COLOR_BUFFER_BIT;const ye=[],ke=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(L),Ue=L.isWebGLMultipleRenderTargets===!0;if(Ue)for(let je=0;je<E.length;je++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let je=0;je<E.length;je++){ye.push(s.COLOR_ATTACHMENT0+je),L.depthBuffer&&ye.push(ke);const nt=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(nt===!1&&(L.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[je]),nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ke]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ke])),Ue){const ve=n.get(E[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,W,ae,0,0,W,ae,de,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let je=0;je<E.length;je++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[je]);const nt=n.get(E[je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Ce(L){return Math.min(r.maxSamples,L.samples)}function xe(L){const E=n.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xe(L){const E=l.render.frame;d.get(L)!==E&&(d.set(L,E),L.update())}function ze(L,E){const W=L.colorSpace,ae=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===bu||W!==cn&&W!==ii&&(Ct.getTransfer(W)===kt?c===!1?e.has("EXT_sRGB")===!0&&ae===ni?(L.format=bu,L.minFilter=Dn,L.generateMipmaps=!1):E=Dm.sRGBToLinear(E):(ae!==ni||de!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Me,this.setTexture2D=ee,this.setTexture2DArray=ce,this.setTexture3D=se,this.setTextureCube=ue,this.rebindTextures=lt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=xe}function UR(s,e,t){const n=t.isWebGL2;function r(a,l=ii){let c;const u=Ct.getTransfer(l);if(a===xr)return s.UNSIGNED_BYTE;if(a===Mm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Sm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===nE)return s.BYTE;if(a===iE)return s.SHORT;if(a===zu)return s.UNSIGNED_SHORT;if(a===xm)return s.INT;if(a===mr)return s.UNSIGNED_INT;if(a===qi)return s.FLOAT;if(a===Da)return n?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===rE)return s.ALPHA;if(a===ni)return s.RGBA;if(a===sE)return s.LUMINANCE;if(a===aE)return s.LUMINANCE_ALPHA;if(a===Gr)return s.DEPTH_COMPONENT;if(a===Ws)return s.DEPTH_STENCIL;if(a===bu)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===oE)return s.RED;if(a===Em)return s.RED_INTEGER;if(a===lE)return s.RG;if(a===Tm)return s.RG_INTEGER;if(a===bm)return s.RGBA_INTEGER;if(a===Nc||a===Uc||a===Oc||a===Fc)if(u===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Td||a===bd||a===Ad||a===wd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Am)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Rd||a===Cd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Rd)return u===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Cd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ld||a===Pd||a===Id||a===Dd||a===Nd||a===Ud||a===Od||a===Fd||a===Bd||a===zd||a===kd||a===Hd||a===Gd||a===Vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ld)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Id)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Nd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ud)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Fd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===zd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===kd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Bc||a===Wd||a===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Bc)return u===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cE||a===qd||a===jd||a===Yd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Bc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hr?n?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class OR extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FR={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),v=this._getHandJoint(h,S);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),_=.02,x=.005;h.inputState.pinching&&m>_+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(FR)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class BR extends Yr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",u=1,h=null,d=null,p=null,m=null,_=null,x=null;const S=t.getContextAttributes();let y=null,v=null;const P=[],A=[],R=new tt;let F=null;const U=new An;U.layers.enable(1),U.viewport=new Ut;const D=new An;D.layers.enable(2),D.viewport=new Ut;const J=[U,D],w=new OR;w.layers.enable(1),w.layers.enable(2);let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=P[te];return _e===void 0&&(_e=new lu,P[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=P[te];return _e===void 0&&(_e=new lu,P[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=P[te];return _e===void 0&&(_e=new lu,P[te]=_e),_e.getHandSpace()};function ie(te){const _e=A.indexOf(te.inputSource);if(_e===-1)return;const Le=P[_e];Le!==void 0&&(Le.update(te.inputSource,te.frame,h||l),Le.dispatchEvent({type:te.type,data:te.inputSource}))}function Me(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",Me),r.removeEventListener("inputsourceschange",k);for(let te=0;te<P.length;te++){const _e=A[te];_e!==null&&(A[te]=null,P[te].disconnect(_e))}I=null,$=null,e.setRenderTarget(y),_=null,m=null,p=null,r=null,v=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",Me),r.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),v=new Xr(_.framebufferWidth,_.framebufferHeight,{format:ni,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let _e=null,Le=null,Ne=null;S.depth&&(Ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Ws:Gr,Le=S.stencil?Hr:mr);const Oe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Oe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Xr(m.textureWidth,m.textureHeight,{format:ni,type:xr,depthTexture:new Wm(m.textureWidth,m.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const fe=e.properties.get(v);fe.__ignoreDepthValues=m.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await r.requestReferenceSpace(c),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(te){for(let _e=0;_e<te.removed.length;_e++){const Le=te.removed[_e],Ne=A.indexOf(Le);Ne>=0&&(A[Ne]=null,P[Ne].disconnect(Le))}for(let _e=0;_e<te.added.length;_e++){const Le=te.added[_e];let Ne=A.indexOf(Le);if(Ne===-1){for(let fe=0;fe<P.length;fe++)if(fe>=A.length){A.push(Le),Ne=fe;break}else if(A[fe]===null){A[fe]=Le,Ne=fe;break}if(Ne===-1)break}const Oe=P[Ne];Oe&&Oe.connect(Le)}}const q=new H,ee=new H;function ce(te,_e,Le){q.setFromMatrixPosition(_e.matrixWorld),ee.setFromMatrixPosition(Le.matrixWorld);const Ne=q.distanceTo(ee),Oe=_e.projectionMatrix.elements,fe=Le.projectionMatrix.elements,pe=Oe[14]/(Oe[10]-1),He=Oe[14]/(Oe[10]+1),lt=(Oe[9]+1)/Oe[5],j=(Oe[9]-1)/Oe[5],Vt=(Oe[8]-1)/Oe[0],re=(fe[8]+1)/fe[0],Ce=pe*Vt,xe=pe*re,Xe=Ne/(-Vt+re),ze=Xe*-Vt;_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ze),te.translateZ(Xe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const L=pe+Xe,E=He+Xe,W=Ce-ze,ae=xe+(Ne-ze),de=lt*He/E*L,ye=j*He/E*L;te.projectionMatrix.makePerspective(W,ae,de,ye,L,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function se(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;w.near=D.near=U.near=te.near,w.far=D.far=U.far=te.far,(I!==w.near||$!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,$=w.far);const _e=te.parent,Le=w.cameras;se(w,_e);for(let Ne=0;Ne<Le.length;Ne++)se(Le[Ne],_e);Le.length===2?ce(w,U,D):w.projectionMatrix.copy(U.projectionMatrix),ue(te,w,_e)};function ue(te,_e,Le){Le===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Le.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=qs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&_===null))return u},this.setFoveation=function(te){u=te,m!==null&&(m.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)};let he=null;function Se(te,_e){if(d=_e.getViewerPose(h||l),x=_e,d!==null){const Le=d.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let Ne=!1;Le.length!==w.cameras.length&&(w.cameras.length=0,Ne=!0);for(let Oe=0;Oe<Le.length;Oe++){const fe=Le[Oe];let pe=null;if(_!==null)pe=_.getViewport(fe);else{const lt=p.getViewSubImage(m,fe);pe=lt.viewport,Oe===0&&(e.setRenderTargetTextures(v,lt.colorTexture,m.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(v))}let He=J[Oe];He===void 0&&(He=new An,He.layers.enable(Oe),He.viewport=new Ut,J[Oe]=He),He.matrix.fromArray(fe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(fe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(pe.x,pe.y,pe.width,pe.height),Oe===0&&(w.matrix.copy(He.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ne===!0&&w.cameras.push(He)}}for(let Le=0;Le<P.length;Le++){const Ne=A[Le],Oe=P[Le];Ne!==null&&Oe!==void 0&&Oe.update(Ne,_e,h||l)}he&&he(te,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),x=null}const Te=new Vm;Te.setAnimationLoop(Se),this.setAnimationLoop=function(te){he=te},this.dispose=function(){}}}function zR(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,km(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function r(y,v,P,A,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),p(y,v)):v.isMeshPhongMaterial?(a(y,v),d(y,v)):v.isMeshStandardMaterial?(a(y,v),m(y,v),v.isMeshPhysicalMaterial&&_(y,v,R)):v.isMeshMatcapMaterial?(a(y,v),x(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),S(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?u(y,v,P,A):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Nn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Nn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=e.get(v).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const A=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*A,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function u(y,v,P,A){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=A*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function p(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function m(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function _(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,v){v.matcap&&(y.matcap.value=v.matcap)}function S(y,v){const P=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kR(s,e,t,n){let r={},a={},l=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(P,A){const R=A.program;n.uniformBlockBinding(P,R)}function h(P,A){let R=r[P.id];R===void 0&&(x(P),R=d(P),r[P.id]=R,P.addEventListener("dispose",y));const F=A.program;n.updateUBOMapping(P,F);const U=e.render.frame;a[P.id]!==U&&(m(P),a[P.id]=U)}function d(P){const A=p();P.__bindingPointIndex=A;const R=s.createBuffer(),F=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,F,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,R),R}function p(){for(let P=0;P<c;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const A=r[P.id],R=P.uniforms,F=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let U=0,D=R.length;U<D;U++){const J=Array.isArray(R[U])?R[U]:[R[U]];for(let w=0,I=J.length;w<I;w++){const $=J[w];if(_($,U,w,F)===!0){const ie=$.__offset,Me=Array.isArray($.value)?$.value:[$.value];let k=0;for(let q=0;q<Me.length;q++){const ee=Me[q],ce=S(ee);typeof ee=="number"||typeof ee=="boolean"?($.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,ie+k,$.__data)):ee.isMatrix3?($.__data[0]=ee.elements[0],$.__data[1]=ee.elements[1],$.__data[2]=ee.elements[2],$.__data[3]=0,$.__data[4]=ee.elements[3],$.__data[5]=ee.elements[4],$.__data[6]=ee.elements[5],$.__data[7]=0,$.__data[8]=ee.elements[6],$.__data[9]=ee.elements[7],$.__data[10]=ee.elements[8],$.__data[11]=0):(ee.toArray($.__data,k),k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,$.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(P,A,R,F){const U=P.value,D=A+"_"+R;if(F[D]===void 0)return typeof U=="number"||typeof U=="boolean"?F[D]=U:F[D]=U.clone(),!0;{const J=F[D];if(typeof U=="number"||typeof U=="boolean"){if(J!==U)return F[D]=U,!0}else if(J.equals(U)===!1)return J.copy(U),!0}return!1}function x(P){const A=P.uniforms;let R=0;const F=16;for(let D=0,J=A.length;D<J;D++){const w=Array.isArray(A[D])?A[D]:[A[D]];for(let I=0,$=w.length;I<$;I++){const ie=w[I],Me=Array.isArray(ie.value)?ie.value:[ie.value];for(let k=0,q=Me.length;k<q;k++){const ee=Me[k],ce=S(ee),se=R%F;se!==0&&F-se<ce.boundary&&(R+=F-se),ie.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=ce.storage}}}const U=R%F;return U>0&&(R+=F-U),P.__size=R,P.__cache={},this}function S(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function y(P){const A=P.target;A.removeEventListener("dispose",y);const R=l.indexOf(A.__bindingPointIndex);l.splice(R,1),s.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function v(){for(const P in r)s.deleteBuffer(r[P]);l=[],r={},a={}}return{bind:u,update:h,dispose:v}}class Zm{constructor(e={}){const{canvas:t=OE(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=l;const _=new Uint32Array(4),x=new Int32Array(4);let S=null,y=null;const v=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const A=this;let R=!1,F=0,U=0,D=null,J=-1,w=null;const I=new Ut,$=new Ut;let ie=null;const Me=new it(0);let k=0,q=t.width,ee=t.height,ce=1,se=null,ue=null;const he=new Ut(0,0,q,ee),Se=new Ut(0,0,q,ee);let Te=!1;const te=new Gu;let _e=!1,Le=!1,Ne=null;const Oe=new yt,fe=new tt,pe=new H,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return D===null?ce:1}let j=n;function Vt(C,X){for(let K=0;K<C.length;K++){const Q=C[K],Y=t.getContext(Q,X);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",be,!1),j===null){const X=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&X.shift(),j=Vt(X,C),j===null)throw Vt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,Ce,xe,Xe,ze,L,E,W,ae,de,ye,ke,Ie,Ue,je,nt,ve,gt,O,me,we,Ee,Ge,ct;function xt(){re=new ZA(j),Ce=new WA(j,re,e),re.init(Ce),Ee=new UR(j,re,Ce),xe=new DR(j,re,Ce),Xe=new QA(j),ze=new yR,L=new NR(j,re,xe,ze,Ce,Ee,Xe),E=new qA(A),W=new KA(A),ae=new oT(j,Ce),Ge=new GA(j,re,ae,Ce),de=new $A(j,ae,Xe,Ge),ye=new iw(j,de,ae,Xe),O=new nw(j,Ce,L),nt=new XA(ze),ke=new vR(A,E,W,re,Ce,Ge,nt),Ie=new zR(A,ze),Ue=new MR,je=new wR(re,Ce),gt=new HA(A,E,W,xe,ye,m,u),ve=new IR(A,ye,Ce),ct=new kR(j,Xe,Ce,xe),me=new VA(j,re,Xe,Ce),we=new JA(j,re,Xe,Ce),Xe.programs=ke.programs,A.capabilities=Ce,A.extensions=re,A.properties=ze,A.renderLists=Ue,A.shadowMap=ve,A.state=xe,A.info=Xe}xt();const ut=new BR(A,j);this.xr=ut,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(q,ee,!1))},this.getSize=function(C){return C.set(q,ee)},this.setSize=function(C,X,K=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,ee=X,t.width=Math.floor(C*ce),t.height=Math.floor(X*ce),K===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(q*ce,ee*ce).floor()},this.setDrawingBufferSize=function(C,X,K){q=C,ee=X,ce=K,t.width=Math.floor(C*K),t.height=Math.floor(X*K),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,X,K,Q){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,X,K,Q),xe.viewport(I.copy(he).multiplyScalar(ce).floor())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,X,K,Q){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,X,K,Q),xe.scissor($.copy(Se).multiplyScalar(ce).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){xe.setScissorTest(Te=C)},this.setOpaqueSort=function(C){se=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,X=!0,K=!0){let Q=0;if(C){let Y=!1;if(D!==null){const Fe=D.texture.format;Y=Fe===bm||Fe===Tm||Fe===Em}if(Y){const Fe=D.texture.type,Ve=Fe===xr||Fe===mr||Fe===zu||Fe===Hr||Fe===Mm||Fe===Sm,$e=gt.getClearColor(),Je=gt.getClearAlpha(),ht=$e.r,rt=$e.g,at=$e.b;Ve?(_[0]=ht,_[1]=rt,_[2]=at,_[3]=Je,j.clearBufferuiv(j.COLOR,0,_)):(x[0]=ht,x[1]=rt,x[2]=at,x[3]=Je,j.clearBufferiv(j.COLOR,0,x))}else Q|=j.COLOR_BUFFER_BIT}X&&(Q|=j.DEPTH_BUFFER_BIT),K&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),je.dispose(),ze.dispose(),E.dispose(),W.dispose(),ye.dispose(),Ge.dispose(),ct.dispose(),ke.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",un),ut.removeEventListener("sessionend",It),Ne&&(Ne.dispose(),Ne=null),Qt.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=Xe.autoReset,X=ve.enabled,K=ve.autoUpdate,Q=ve.needsUpdate,Y=ve.type;xt(),Xe.autoReset=C,ve.enabled=X,ve.autoUpdate=K,ve.needsUpdate=Q,ve.type=Y}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ae(C){const X=C.target;X.removeEventListener("dispose",Ae),Ye(X)}function Ye(C){qe(C),ze.remove(C)}function qe(C){const X=ze.get(C).programs;X!==void 0&&(X.forEach(function(K){ke.releaseProgram(K)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,K,Q,Y,Fe){X===null&&(X=He);const Ve=Y.isMesh&&Y.matrixWorld.determinant()<0,$e=Tl(C,X,K,Q,Y);xe.setMaterial(Q,Ve);let Je=K.index,ht=1;if(Q.wireframe===!0){if(Je=de.getWireframeAttribute(K),Je===void 0)return;ht=2}const rt=K.drawRange,at=K.attributes.position;let Ht=rt.start*ht,mn=(rt.start+rt.count)*ht;Fe!==null&&(Ht=Math.max(Ht,Fe.start*ht),mn=Math.min(mn,(Fe.start+Fe.count)*ht)),Je!==null?(Ht=Math.max(Ht,0),mn=Math.min(mn,Je.count)):at!=null&&(Ht=Math.max(Ht,0),mn=Math.min(mn,at.count));const Yt=mn-Ht;if(Yt<0||Yt===1/0)return;Ge.setup(Y,Q,$e,K,Je);let si,Ft=me;if(Je!==null&&(si=ae.get(Je),Ft=we,Ft.setIndex(si)),Y.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*lt()),Ft.setMode(j.LINES)):Ft.setMode(j.TRIANGLES);else if(Y.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),xe.setLineWidth(dt*lt()),Y.isLineSegments?Ft.setMode(j.LINES):Y.isLineLoop?Ft.setMode(j.LINE_LOOP):Ft.setMode(j.LINE_STRIP)}else Y.isPoints?Ft.setMode(j.POINTS):Y.isSprite&&Ft.setMode(j.TRIANGLES);if(Y.isBatchedMesh)Ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ft.renderInstances(Ht,Yt,Y.count);else if(K.isInstancedBufferGeometry){const dt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ea=Math.min(K.instanceCount,dt);Ft.renderInstances(Ht,Yt,ea)}else Ft.render(Ht,Yt)};function bt(C,X,K){C.transparent===!0&&C.side===Mi&&C.forceSinglePass===!1?(C.side=Nn,C.needsUpdate=!0,Qr(C,X,K),C.side=Ki,C.needsUpdate=!0,Qr(C,X,K),C.side=Mi):Qr(C,X,K)}this.compile=function(C,X,K=null){K===null&&(K=C),y=je.get(K),y.init(),P.push(y),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),C!==K&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(A._useLegacyLights);const Q=new Set;return C.traverse(function(Y){const Fe=Y.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const $e=Fe[Ve];bt($e,K,Y),Q.add($e)}else bt(Fe,K,Y),Q.add(Fe)}),P.pop(),y=null,Q},this.compileAsync=function(C,X,K=null){const Q=this.compile(C,X,K);return new Promise(Y=>{function Fe(){if(Q.forEach(function(Ve){ze.get(Ve).currentProgram.isReady()&&Q.delete(Ve)}),Q.size===0){Y(C);return}setTimeout(Fe,10)}re.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let At=null;function $t(C){At&&At(C)}function un(){Qt.stop()}function It(){Qt.start()}const Qt=new Vm;Qt.setAnimationLoop($t),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(C){At=C,ut.setAnimationLoop(C),C===null?Qt.stop():Qt.start()},ut.addEventListener("sessionstart",un),ut.addEventListener("sessionend",It),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,D),y=je.get(C,P.length),y.init(),P.push(y),Oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(Oe),Le=this.localClippingEnabled,_e=nt.init(this.clippingPlanes,Le),S=Ue.get(C,v.length),S.init(),v.push(S),Vn(C,X,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(se,ue),this.info.render.frame++,_e===!0&&nt.beginShadows();const K=y.state.shadowsArray;if(ve.render(K,C,X),_e===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(S,C),y.setupLights(A._useLegacyLights),X.isArrayCamera){const Q=X.cameras;for(let Y=0,Fe=Q.length;Y<Fe;Y++){const Ve=Q[Y];$r(S,C,Ve,Ve.viewport)}}else $r(S,C,X);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(A,C,X),Ge.resetDefaultState(),J=-1,w=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,v.pop(),v.length>0?S=v[v.length-1]:S=null};function Vn(C,X,K,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){Q&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const Ve=ye.update(C),$e=C.material;$e.visible&&S.push(C,Ve,$e,K,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Ve=ye.update(C),$e=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),pe.copy(Ve.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray($e)){const Je=Ve.groups;for(let ht=0,rt=Je.length;ht<rt;ht++){const at=Je[ht],Ht=$e[at.materialIndex];Ht&&Ht.visible&&S.push(C,Ve,Ht,K,pe.z,at)}}else $e.visible&&S.push(C,Ve,$e,K,pe.z,null)}}const Fe=C.children;for(let Ve=0,$e=Fe.length;Ve<$e;Ve++)Vn(Fe[Ve],X,K,Q)}function $r(C,X,K,Q){const Y=C.opaque,Fe=C.transmissive,Ve=C.transparent;y.setupLightsView(K),_e===!0&&nt.setGlobalState(A.clippingPlanes,K),Fe.length>0&&El(Y,Fe,X,K),Q&&xe.viewport(I.copy(Q)),Y.length>0&&Jr(Y,X,K),Fe.length>0&&Jr(Fe,X,K),Ve.length>0&&Jr(Ve,X,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function El(C,X,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Fe=Ce.isWebGL2;Ne===null&&(Ne=new Xr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Da:xr,minFilter:Wr,samples:Fe?4:0})),A.getDrawingBufferSize(fe),Fe?Ne.setSize(fe.x,fe.y):Ne.setSize(ml(fe.x),ml(fe.y));const Ve=A.getRenderTarget();A.setRenderTarget(Ne),A.getClearColor(Me),k=A.getClearAlpha(),k<1&&A.setClearColor(16777215,.5),A.clear();const $e=A.toneMapping;A.toneMapping=yr,Jr(C,K,Q),L.updateMultisampleRenderTarget(Ne),L.updateRenderTargetMipmap(Ne);let Je=!1;for(let ht=0,rt=X.length;ht<rt;ht++){const at=X[ht],Ht=at.object,mn=at.geometry,Yt=at.material,si=at.group;if(Yt.side===Mi&&Ht.layers.test(Q.layers)){const Ft=Yt.side;Yt.side=Nn,Yt.needsUpdate=!0,ka(Ht,K,Q,mn,Yt,si),Yt.side=Ft,Yt.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Ne),L.updateRenderTargetMipmap(Ne)),A.setRenderTarget(Ve),A.setClearColor(Me,k),A.toneMapping=$e}function Jr(C,X,K){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Fe=C.length;Y<Fe;Y++){const Ve=C[Y],$e=Ve.object,Je=Ve.geometry,ht=Q===null?Ve.material:Q,rt=Ve.group;$e.layers.test(K.layers)&&ka($e,X,K,Je,ht,rt)}}function ka(C,X,K,Q,Y,Fe){C.onBeforeRender(A,X,K,Q,Y,Fe),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(A,X,K,Q,C,Fe),Y.transparent===!0&&Y.side===Mi&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,A.renderBufferDirect(K,X,Q,Y,C,Fe),Y.side=Ki,Y.needsUpdate=!0,A.renderBufferDirect(K,X,Q,Y,C,Fe),Y.side=Mi):A.renderBufferDirect(K,X,Q,Y,C,Fe),C.onAfterRender(A,X,K,Q,Y,Fe)}function Qr(C,X,K){X.isScene!==!0&&(X=He);const Q=ze.get(C),Y=y.state.lights,Fe=y.state.shadowsArray,Ve=Y.state.version,$e=ke.getParameters(C,Y.state,Fe,X,K),Je=ke.getProgramCacheKey($e);let ht=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?W:E).get(C.envMap||Q.environment),ht===void 0&&(C.addEventListener("dispose",Ae),ht=new Map,Q.programs=ht);let rt=ht.get(Je);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Ve)return Ga(C,$e),rt}else $e.uniforms=ke.getUniforms(C),C.onBuild(K,$e,A),C.onBeforeCompile($e,A),rt=ke.acquireProgram($e,Je),ht.set(Je,rt),Q.uniforms=$e.uniforms;const at=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=nt.uniform),Ga(C,$e),Q.needsLights=Va(C),Q.lightsStateVersion=Ve,Q.needsLights&&(at.ambientLightColor.value=Y.state.ambient,at.lightProbe.value=Y.state.probe,at.directionalLights.value=Y.state.directional,at.directionalLightShadows.value=Y.state.directionalShadow,at.spotLights.value=Y.state.spot,at.spotLightShadows.value=Y.state.spotShadow,at.rectAreaLights.value=Y.state.rectArea,at.ltc_1.value=Y.state.rectAreaLTC1,at.ltc_2.value=Y.state.rectAreaLTC2,at.pointLights.value=Y.state.point,at.pointLightShadows.value=Y.state.pointShadow,at.hemisphereLights.value=Y.state.hemi,at.directionalShadowMap.value=Y.state.directionalShadowMap,at.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,at.spotShadowMap.value=Y.state.spotShadowMap,at.spotLightMatrix.value=Y.state.spotLightMatrix,at.spotLightMap.value=Y.state.spotLightMap,at.pointShadowMap.value=Y.state.pointShadowMap,at.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function Ha(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=ol.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ga(C,X){const K=ze.get(C);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function Tl(C,X,K,Q,Y){X.isScene!==!0&&(X=He),L.resetTextureUnits();const Fe=X.fog,Ve=Q.isMeshStandardMaterial?X.environment:null,$e=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:cn,Je=(Q.isMeshStandardMaterial?W:E).get(Q.envMap||Ve),ht=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,rt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),at=!!K.morphAttributes.position,Ht=!!K.morphAttributes.normal,mn=!!K.morphAttributes.color;let Yt=yr;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Yt=A.toneMapping);const si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=si!==void 0?si.length:0,dt=ze.get(Q),ea=y.state.lights;if(_e===!0&&(Le===!0||C!==w)){const Rn=C===w&&Q.id===J;nt.setState(Q,C,Rn)}let Bt=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==ea.state.version||dt.outputColorSpace!==$e||Y.isBatchedMesh&&dt.batching===!1||!Y.isBatchedMesh&&dt.batching===!0||Y.isInstancedMesh&&dt.instancing===!1||!Y.isInstancedMesh&&dt.instancing===!0||Y.isSkinnedMesh&&dt.skinning===!1||!Y.isSkinnedMesh&&dt.skinning===!0||Y.isInstancedMesh&&dt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&dt.instancingColor===!1&&Y.instanceColor!==null||dt.envMap!==Je||Q.fog===!0&&dt.fog!==Fe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==nt.numPlanes||dt.numIntersection!==nt.numIntersection)||dt.vertexAlphas!==ht||dt.vertexTangents!==rt||dt.morphTargets!==at||dt.morphNormals!==Ht||dt.morphColors!==mn||dt.toneMapping!==Yt||Ce.isWebGL2===!0&&dt.morphTargetsCount!==Ft)&&(Bt=!0):(Bt=!0,dt.__version=Q.version);let gi=dt.currentProgram;Bt===!0&&(gi=Qr(Q,X,Y));let ta=!1,Ri=!1,na=!1;const en=gi.getUniforms(),Wn=dt.uniforms;if(xe.useProgram(gi.program)&&(ta=!0,Ri=!0,na=!0),Q.id!==J&&(J=Q.id,Ri=!0),ta||w!==C){en.setValue(j,"projectionMatrix",C.projectionMatrix),en.setValue(j,"viewMatrix",C.matrixWorldInverse);const Rn=en.map.cameraPosition;Rn!==void 0&&Rn.setValue(j,pe.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&en.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&en.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Ri=!0,na=!0)}if(Y.isSkinnedMesh){en.setOptional(j,Y,"bindMatrix"),en.setOptional(j,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Ce.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),en.setValue(j,"boneTexture",Rn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(en.setOptional(j,Y,"batchingTexture"),en.setValue(j,"batchingTexture",Y._matricesTexture,L));const es=K.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0&&Ce.isWebGL2===!0)&&O.update(Y,K,gi),(Ri||dt.receiveShadow!==Y.receiveShadow)&&(dt.receiveShadow=Y.receiveShadow,en.setValue(j,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Wn.envMap.value=Je,Wn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),Ri&&(en.setValue(j,"toneMappingExposure",A.toneMappingExposure),dt.needsLights&&bl(Wn,na),Fe&&Q.fog===!0&&Ie.refreshFogUniforms(Wn,Fe),Ie.refreshMaterialUniforms(Wn,Q,ce,ee,Ne),ol.upload(j,Ha(dt),Wn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ol.upload(j,Ha(dt),Wn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&en.setValue(j,"center",Y.center),en.setValue(j,"modelViewMatrix",Y.modelViewMatrix),en.setValue(j,"normalMatrix",Y.normalMatrix),en.setValue(j,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Rn=Q.uniformsGroups;for(let ts=0,Wa=Rn.length;ts<Wa;ts++)if(Ce.isWebGL2){const ns=Rn[ts];ct.update(ns,gi),ct.bind(ns,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function bl(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Va(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,X,K){ze.get(C.texture).__webglTexture=X,ze.get(C.depthTexture).__webglTexture=K;const Q=ze.get(C);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const K=ze.get(C);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,K=0){D=C,F=X,U=K;let Q=!0,Y=null,Fe=!1,Ve=!1;if(C){const Je=ze.get(C);Je.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(j.FRAMEBUFFER,null),Q=!1):Je.__webglFramebuffer===void 0?L.setupRenderTarget(C):Je.__hasExternalTextures&&L.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);const ht=C.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ve=!0);const rt=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?Y=rt[X][K]:Y=rt[X],Fe=!0):Ce.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?Y=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[K]:Y=rt,I.copy(C.viewport),$.copy(C.scissor),ie=C.scissorTest}else I.copy(he).multiplyScalar(ce).floor(),$.copy(Se).multiplyScalar(ce).floor(),ie=Te;if(xe.bindFramebuffer(j.FRAMEBUFFER,Y)&&Ce.drawBuffers&&Q&&xe.drawBuffers(C,Y),xe.viewport(I),xe.scissor($),xe.setScissorTest(ie),Fe){const Je=ze.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Je.__webglTexture,K)}else if(Ve){const Je=ze.get(C.texture),ht=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Je.__webglTexture,K||0,ht)}J=-1},this.readRenderTargetPixels=function(C,X,K,Q,Y,Fe,Ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){xe.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Je=C.texture,ht=Je.format,rt=Je.type;if(ht!==ni&&Ee.convert(ht)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=rt===Da&&(re.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&re.has("EXT_color_buffer_float"));if(rt!==xr&&Ee.convert(rt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===qi&&(Ce.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&K>=0&&K<=C.height-Y&&j.readPixels(X,K,Q,Y,Ee.convert(ht),Ee.convert(rt),Fe)}finally{const Je=D!==null?ze.get(D).__webglFramebuffer:null;xe.bindFramebuffer(j.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(C,X,K=0){const Q=Math.pow(2,-K),Y=Math.floor(X.image.width*Q),Fe=Math.floor(X.image.height*Q);L.setTexture2D(X,0),j.copyTexSubImage2D(j.TEXTURE_2D,K,0,0,C.x,C.y,Y,Fe),xe.unbindTexture()},this.copyTextureToTexture=function(C,X,K,Q=0){const Y=X.image.width,Fe=X.image.height,Ve=Ee.convert(K.format),$e=Ee.convert(K.type);L.setTexture2D(K,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment),X.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Q,C.x,C.y,Y,Fe,Ve,$e,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Q,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ve,X.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Q,C.x,C.y,Ve,$e,X.image),Q===0&&K.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,K,Q,Y=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=C.max.x-C.min.x+1,Ve=C.max.y-C.min.y+1,$e=C.max.z-C.min.z+1,Je=Ee.convert(Q.format),ht=Ee.convert(Q.type);let rt;if(Q.isData3DTexture)L.setTexture3D(Q,0),rt=j.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)L.setTexture2DArray(Q,0),rt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);const at=j.getParameter(j.UNPACK_ROW_LENGTH),Ht=j.getParameter(j.UNPACK_IMAGE_HEIGHT),mn=j.getParameter(j.UNPACK_SKIP_PIXELS),Yt=j.getParameter(j.UNPACK_SKIP_ROWS),si=j.getParameter(j.UNPACK_SKIP_IMAGES),Ft=K.isCompressedTexture?K.mipmaps[Y]:K.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,C.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,C.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?j.texSubImage3D(rt,Y,X.x,X.y,X.z,Fe,Ve,$e,Je,ht,Ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(rt,Y,X.x,X.y,X.z,Fe,Ve,$e,Je,Ft.data)):j.texSubImage3D(rt,Y,X.x,X.y,X.z,Fe,Ve,$e,Je,ht,Ft),j.pixelStorei(j.UNPACK_ROW_LENGTH,at),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ht),j.pixelStorei(j.UNPACK_SKIP_PIXELS,mn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Yt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,si),Y===0&&Q.generateMipmaps&&j.generateMipmap(rt),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){F=0,U=0,D=null,xe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ku?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===yl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Vr:Rm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?jt:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HR extends Zm{}HR.prototype.isWebGL1Renderer=!0;class GR extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class VR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new H;class qu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),a=Dt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zp=new H,kp=new Ut,Hp=new Ut,WR=new H,Gp=new yt,Qo=new H,cu=new bi,Vp=new yt,uu=new Fa;class XR extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ed,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cu.copy(this.boundingSphere),cu.applyMatrix4(r),e.ray.intersectsSphere(cu)!==!1&&(Vp.copy(r).invert(),uu.copy(e.ray).applyMatrix4(Vp),!(this.boundingBox!==null&&uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ed?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;kp.fromBufferAttribute(r.attributes.skinIndex,e),Hp.fromBufferAttribute(r.attributes.skinWeight,e),zp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=Hp.getComponent(a);if(l!==0){const c=kp.getComponent(a);Gp.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(WR.copy(zp).applyMatrix4(Gp),l)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $m extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qR extends pn{constructor(e=null,t=1,n=1,r,a,l,c,u,h=ln,d=ln,p,m){super(null,l,c,u,h,d,r,a,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wp=new yt,jR=new yt;class ju{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const c=e[a]?e[a].matrixWorld:jR;Wp.multiplyMatrices(c,t[a]),Wp.toArray(n,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qR(t,e,e,ni,qi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new $m),this.bones.push(l),this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const l=t[r];e.bones.push(l.uuid);const c=n[r];e.boneInverses.push(c.toArray())}return e}}class Ru extends wn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new yt,Xp=new yt,el=[],qp=new mi,YR=new yt,Sa=new ri,Ea=new bi;class KR extends ri{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ru(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,YR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),qp.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(qp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Ea.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Us),Xp.multiplyMatrices(n,Us),Sa.matrixWorld=Xp,Sa.raycast(e,el);for(let l=0,c=el.length;l<c;l++){const u=el[l];u.instanceId=a,u.object=this,t.push(u)}el.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ru(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Jm extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jp=new H,Yp=new H,Kp=new yt,hu=new Fa,tl=new bi;class Yu extends Xt{constructor(e=new Ai,t=new Jm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)jp.fromBufferAttribute(t,r-1),Yp.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=jp.distanceTo(Yp);e.setAttribute("lineDistance",new Yi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),tl.radius+=a,e.ray.intersectsSphere(tl)===!1)return;Kp.copy(r).invert(),hu.copy(e.ray).applyMatrix4(Kp);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=new H,d=new H,p=new H,m=new H,_=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){const v=Math.max(0,l.start),P=Math.min(x.count,l.start+l.count);for(let A=v,R=P-1;A<R;A+=_){const F=x.getX(A),U=x.getX(A+1);if(h.fromBufferAttribute(y,F),d.fromBufferAttribute(y,U),hu.distanceSqToSegment(h,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(m);J<e.near||J>e.far||t.push({distance:J,point:p.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,l.start),P=Math.min(y.count,l.start+l.count);for(let A=v,R=P-1;A<R;A+=_){if(h.fromBufferAttribute(y,A),d.fromBufferAttribute(y,A+1),hu.distanceSqToSegment(h,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(m);U<e.near||U>e.far||t.push({distance:U,point:p.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Zp=new H,$p=new H;class ZR extends Yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Zp.fromBufferAttribute(t,r),$p.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zp.distanceTo($p);e.setAttribute("lineDistance",new Yi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $R extends Yu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qm extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jp=new yt,Cu=new Fa,nl=new bi,il=new H;class JR extends Xt{constructor(e=new Ai,t=new Qm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),nl.radius+=a,e.ray.intersectsSphere(nl)===!1)return;Jp.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(Jp);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,l.start),_=Math.min(h.count,l.start+l.count);for(let x=m,S=_;x<S;x++){const y=h.getX(x);il.fromBufferAttribute(p,y),Qp(il,y,u,r,e,t,this)}}else{const m=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let x=m,S=_;x<S;x++)il.fromBufferAttribute(p,x),Qp(il,x,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Qp(s,e,t,n,r,a,l){const c=Cu.distanceSqToPoint(s);if(c<t){const u=new H;Cu.closestPointToPoint(s,u),u.applyMatrix4(n);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:l})}}class Oa extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cm,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends Oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function rl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function QR(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function e1(s){function e(r,a){return s[r]-s[a]}const t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function em(s,e,t){const n=s.length,r=new s.constructor(n);for(let a=0,l=0;l!==n;++a){const c=t[a]*e;for(let u=0;u!==e;++u)r[l++]=s[c+u]}return r}function eg(s,e,t,n){let r=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[r++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push.apply(t,l)),a=s[r++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=s[r++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=s[r++];while(a!==void 0)}class za{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=r,r=t[++n],e<r)break t}l=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(n=2,a=c);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let l=0;l!==r;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t1 extends za{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kd,endingEnd:Kd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let a=e-2,l=e+1,c=r[a],u=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Zd:a=e,c=2*t-n;break;case $d:a=r.length-2,c=t+r[a]-r[a+1];break;default:a=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Zd:l=e,u=2*n-t;break;case $d:l=1,u=n+r[1]-r[0];break;default:l=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=a*d,this._offsetNext=l*d}interpolate_(e,t,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,_=this._weightNext,x=(n-t)/(r-t),S=x*x,y=S*x,v=-m*y+2*m*S-m*x,P=(1+m)*y+(-1.5-2*m)*S+(-.5+m)*x+1,A=(-1-_)*y+(1.5+_)*S+.5*x,R=_*y-_*S;for(let F=0;F!==c;++F)a[F]=v*l[d+F]+P*l[h+F]+A*l[u+F]+R*l[p+F];return a}}class n1 extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=(n-t)/(r-t),p=1-d;for(let m=0;m!==c;++m)a[m]=l[h+m]*p+l[u+m]*d;return a}}class i1 extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new i1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new n1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new t1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let a=0,l=r-1;for(;a!==r&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(r!==void 0&&QR(r))for(let c=0,u=r.length;c!==u;++c){const h=r[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===zc,a=e.length-1;let l=1;for(let c=1;c<a;++c){let u=!1;const h=e[c],d=e[c+1];if(h!==d&&(c!==1||h!==e[0]))if(r)u=!0;else{const p=c*n,m=p-n,_=p+n;for(let x=0;x!==n;++x){const S=t[p+x];if(S!==t[m+x]||S!==t[_+x]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];const p=c*n,m=l*n;for(let _=0;_!==n;++_)t[m+_]=t[p+_]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,u=l*n,h=0;h!==n;++h)t[u+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Xs;class $s extends wi{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Na;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class tg extends wi{}tg.prototype.ValueTypeName="color";class Ys extends wi{}Ys.prototype.ValueTypeName="number";class r1 extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(r-t);let h=e*c;for(let d=h+c;h!==d;h+=4)Ti.slerpFlat(a,0,l,h-c,l,h,u);return a}}class jr extends wi{InterpolantFactoryMethodLinear(e){return new r1(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.DefaultInterpolation=Xs;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends wi{}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Na;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends wi{}Ks.prototype.ValueTypeName="vector";class s1{constructor(e,t=-1,n,r=uE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(o1(n[l]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,l=n.length;a!==l;++a)t.push(wi.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const a=t.length,l=[];for(let c=0;c<a;c++){let u=[],h=[];u.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const d=e1(u);u=em(u,1,d),h=em(h,1,d),!r&&u[0]===0&&(u.push(a),h.push(h[0])),l.push(new Ys(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.name.match(a);if(d&&d.length>1){const p=d[1];let m=r[p];m||(r[p]=m=[]),m.push(h)}}const l=[];for(const c in r)l.push(this.CreateFromMorphTargetSequence(c,r[c],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,_,x,S){if(_.length!==0){const y=[],v=[];eg(_,y,v,x),y.length!==0&&S.push(new p(m,y,v))}},r=[],a=e.name||"default",l=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let S=0;S<m[x].morphTargets.length;S++)_[m[x].morphTargets[S]]=-1;for(const S in _){const y=[],v=[];for(let P=0;P!==m[x].morphTargets.length;++P){const A=m[x];y.push(A.time),v.push(A.morphTarget===S?1:0)}r.push(new Ys(".morphTargetInfluence["+S+"]",y,v))}u=_.length*l}else{const _=".bones["+t[p].name+"]";n(Ks,_+".position",m,"pos",r),n(jr,_+".quaternion",m,"rot",r),n(Ks,_+".scale",m,"scl",r)}}return r.length===0?null:new this(a,u,r,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return tg;case"quaternion":return jr;case"bool":case"boolean":return $s;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function o1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=a1(s.type);if(s.times===void 0){const t=[],n=[];eg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const gr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ng{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&r.onStart!==void 0&&r.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=h.length;p<m;p+=2){const _=h[p],x=h[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return x}return null}}}const l1=new ng;class Qs{constructor(e){this.manager=e!==void 0?e:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class c1 extends Error{constructor(e,t){super(e),this.response=t}}class ig extends Qs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=gr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:r});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Vi[e],p=h.body.getReader(),m=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),_=m?parseInt(m):0,x=_!==0;let S=0;const y=new ReadableStream({start(v){P();function P(){p.read().then(({done:A,value:R})=>{if(A)v.close();else{S+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:x,loaded:S,total:_});for(let U=0,D=d.length;U<D;U++){const J=d[U];J.onProgress&&J.onProgress(F)}v.enqueue(R),P()}})}}});return new Response(y)}else throw new c1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,_=new TextDecoder(m);return h.arrayBuffer().then(x=>_.decode(x))}}}).then(h=>{gr.add(e,h);const d=Vi[e];delete Vi[e];for(let p=0,m=d.length;p<m;p++){const _=d[p];_.onLoad&&_.onLoad(h)}}).catch(h=>{const d=Vi[e];if(d===void 0)throw this.manager.itemError(e),h;delete Vi[e];for(let p=0,m=d.length;p<m;p++){const _=d[p];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u1 extends Qs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=gr.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const c=Ua("img");function u(){d(),gr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(p){d(),r&&r(p),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class h1 extends Qs{constructor(e){super(e)}load(e,t,n,r){const a=new pn,l=new u1(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Sl extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fu=new yt,tm=new H,nm=new H;class Ku{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nm),t.updateMatrixWorld(),fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f1 extends Ku{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class d1 extends Sl{constructor(e,t,n=0,r=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=r,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new f1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const im=new yt,Ta=new H,du=new H;class p1 extends Ku{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),du.copy(n.position),du.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(du),n.updateMatrixWorld(),r.makeTranslation(-Ta.x,-Ta.y,-Ta.z),im.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(im)}}class m1 extends Sl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new p1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g1 extends Ku{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lu extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new g1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _1 extends Sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ia{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class v1 extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=gr.get(e);if(l!==void 0){if(a.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return gr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){r&&r(h),gr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});gr.add(e,u),a.manager.itemStart(e)}}class y1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rm(){return(typeof performance>"u"?Date:performance).now()}const Zu="\\[\\]\\.:\\/",x1=new RegExp("["+Zu+"]","g"),$u="[^"+Zu+"]",M1="[^"+Zu.replace("\\.","")+"]",S1=/((?:WC+[\/:])*)/.source.replace("WC",$u),E1=/(WCOD+)?/.source.replace("WCOD",M1),T1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),b1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),A1=new RegExp("^"+S1+E1+T1+b1+"$"),w1=["material","materials","bones","map"];class R1{constructor(e,t,n){const r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x1,"")}static parseTrackName(e){const t=A1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=n.nodeName.substring(r+1);w1.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[r];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=R1;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);function ba(s,e,t,n){function r(a){return a instanceof t?a:new t(function(l){l(a)})}return new(t||(t=Promise))(function(a,l){function c(d){try{h(n.next(d))}catch(p){l(p)}}function u(d){try{h(n.throw(d))}catch(p){l(p)}}function h(d){d.done?a(d.value):r(d.value).then(c,u)}h((n=n.apply(s,e||[])).next())})}var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ju(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}const C1=s=>{const e=new Set;do for(const t of Reflect.ownKeys(s))e.add([s,t]);while((s=Reflect.getPrototypeOf(s))&&s!==Object.prototype);return e};var L1=(s,{include:e,exclude:t}={})=>{const n=r=>{const a=l=>typeof l=="string"?r===l:l.test(r);return e?e.some(a):t?!t.some(a):!0};for(const[r,a]of C1(s.constructor.prototype)){if(a==="constructor"||!n(a))continue;const l=Reflect.getOwnPropertyDescriptor(r,a);l&&typeof l.value=="function"&&(s[a]=s[a].bind(s))}return s},pr=Ju(L1),P1="7.3.4";class Xi extends Error{constructor(e="The global `jsPsych` variable is no longer available in jsPsych v7."){super(`${e} Please follow the migration guide at https://www.jspsych.org/7.0/support/migration-v7/ to update your experiment.`),this.name="MigrationError"}}window.jsPsych={get init(){throw new Xi("`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.")},get data(){throw new Xi},get randomization(){throw new Xi},get turk(){throw new Xi},get pluginAPI(){throw new Xi},get ALL_KEYS(){throw new Xi('jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.')},get NO_KEYS(){throw new Xi('jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.')}};function ll(s){return[...new Set(s)]}function _r(s){if(!s)return s;let e;if(Array.isArray(s)){e=[];for(const t of s)e.push(_r(t));return e}else if(typeof s=="object"&&s!==null){e={};for(const t in s)s.hasOwnProperty(t)&&(e[t]=_r(s[t]));return e}else return s}function Pu(s,e){let t={};for(const n in s)s.hasOwnProperty(n)&&(typeof s[n]=="object"&&e.hasOwnProperty(n)?t[n]=Pu(s[n],e[n]):t[n]=s[n]);for(const n in e)e.hasOwnProperty(n)&&(t.hasOwnProperty(n)&&typeof e[n]=="object"?t[n]=Pu(t[n],e[n]):t[n]=e[n]);return t}var I1=Object.freeze({__proto__:null,deepCopy:_r,deepMerge:Pu,unique:ll});class Qu{constructor(e=[]){this.values=e}sum(){let e=0;for(const t of this.values)e+=t;return e}mean(){return this.sum()/this.count()}median(){if(this.values.length===0)return;const e=this.values.slice(0).sort(function(r,a){return r-a}),t=Math.floor(e.length/2);return e.length%2===0?(e[t]+e[t-1])/2:e[t]}min(){return Math.min.apply(null,this.values)}max(){return Math.max.apply(null,this.values)}count(){return this.values.length}variance(){const e=this.mean();let t=0;for(const r of this.values)t+=Math.pow(r-e,2);return t/(this.values.length-1)}sd(){const e=this.variance();return Math.sqrt(e)}frequencies(){const e={};for(const t of this.values)typeof e[t]>"u"?e[t]=1:e[t]++;return e}all(e){for(const t of this.values)if(!e(t))return!1;return!0}subset(e){const t=[];for(const n of this.values)e(n)&&t.push(n);return new Qu(t)}}function D1(s,e){const t=new Blob([s],{type:"text/plain"});let n="";typeof window.webkitURL<"u"?n=window.webkitURL.createObjectURL(t):n=window.URL.createObjectURL(t);const r=document.createElement("a");r.id="jspsych-download-as-text-link",r.style.display="none",r.download=e,r.href=n,r.click()}function N1(s){const e=typeof s!="object"?JSON.parse(s):s;let t="",n="";const r=[];for(const a of e)for(const l in a){let c=l+"";c='"'+c.replace(/"/g,'""')+'",',r.includes(l)||(r.push(l),t+=c)}t=t.slice(0,-1),n+=t+`\r
`;for(const a of e){t="";for(const l of r){let c=typeof a[l]>"u"?"":a[l];typeof c=="object"&&(c=JSON.stringify(c));const u=c+"";t+='"'+u.replace(/"/g,'""')+'",'}t=t.slice(0,-1),n+=t+`\r
`}return n}function U1(){const s=window.location.search.substr(1).split("&"),e={};for(let t=0;t<s.length;++t){const n=s[t].split("=",2);n.length==1?e[n[0]]="":e[n[0]]=decodeURIComponent(n[1].replace(/\+/g," "))}return e}class bn{constructor(e=[]){this.trials=e}push(e){return this.trials.push(e),this}join(e){return this.trials=this.trials.concat(e.values()),this}top(){return this.trials.length<=1?this:new bn([this.trials[this.trials.length-1]])}first(e=1){if(e<1)throw`You must query with a positive nonzero integer. Please use a
               different value for n.`;return this.trials.length===0?new bn:(e>this.trials.length&&(e=this.trials.length),new bn(this.trials.slice(0,e)))}last(e=1){if(e<1)throw`You must query with a positive nonzero integer. Please use a
               different value for n.`;return this.trials.length===0?new bn:(e>this.trials.length&&(e=this.trials.length),new bn(this.trials.slice(this.trials.length-e,this.trials.length)))}values(){return this.trials}count(){return this.trials.length}readOnly(){return new bn(_r(this.trials))}addToAll(e){for(const t of this.trials)Object.assign(t,e);return this}addToLast(e){return this.trials.length!=0&&Object.assign(this.trials[this.trials.length-1],e),this}filter(e){let t;Array.isArray(e)?t=_r(e):t=_r([e]);const n=[];for(const r of this.trials){let a=!1;for(const l of t){let c=!0;for(const u of Object.keys(l))typeof r[u]<"u"&&r[u]===l[u]||(c=!1);if(c){a=!0;break}}a&&n.push(r)}return new bn(n)}filterCustom(e){return new bn(this.trials.filter(e))}filterColumns(e){return new bn(this.trials.map(t=>Object.fromEntries(e.filter(n=>n in t).map(n=>[n,t[n]]))))}select(e){const t=[];for(const n of this.trials)typeof n[e]<"u"&&t.push(n[e]);return new Qu(t)}ignore(e){Array.isArray(e)||(e=[e]);const t=_r(this.trials);for(const n of t)for(const r of e)delete n[r];return new bn(t)}uniqueNames(){const e=[];for(const t of this.trials)for(const n of Object.keys(t))e.includes(n)||e.push(n);return e}csv(){return N1(this.trials)}json(e=!1){return e?JSON.stringify(this.trials,null,"	"):JSON.stringify(this.trials)}localSave(e,t){e=e.toLowerCase();let n;if(e==="json")n=this.json();else if(e==="csv")n=this.csv();else throw new Error('Invalid format specified for localSave. Must be "json" or "csv".');D1(n,t)}}class O1{constructor(e){this.jsPsych=e,this.dataProperties={},this.reset()}reset(){this.allData=new bn,this.interactionData=new bn}get(){return this.allData}getInteractionData(){return this.interactionData}write(e){const t=this.jsPsych.getProgress(),n=this.jsPsych.getCurrentTrial(),r={trial_type:n.type.info.name,trial_index:t.current_trial_global,time_elapsed:this.jsPsych.getTotalTime(),internal_node_id:this.jsPsych.getCurrentTimelineNodeID()};this.allData.push(Object.assign(Object.assign(Object.assign(Object.assign({},e),n.data),r),this.dataProperties))}addProperties(e){this.allData.addToAll(e),this.dataProperties=Object.assign({},this.dataProperties,e)}addDataToLastTrial(e){this.allData.addToLast(e)}getDataByTimelineNode(e){return this.allData.filterCustom(t=>t.internal_node_id.slice(0,e.length)===e)}getLastTrialData(){return this.allData.top()}getLastTimelineData(){const t=this.getLastTrialData().select("internal_node_id").values[0];if(typeof t>"u")return new bn;{const n=t.substr(0,t.lastIndexOf("-"));return this.getDataByTimelineNode(n)}}displayData(e="json"){e=e.toLowerCase(),e!="json"&&e!="csv"&&(console.log("Invalid format declared for displayData function. Using json as default."),e="json");const t=e==="json"?this.allData.json(!0):this.allData.csv(),n=this.jsPsych.getDisplayElement();n.innerHTML='<pre id="jspsych-data-display"></pre>',document.getElementById("jspsych-data-display").textContent=t}urlVariables(){return typeof this.query_string>"u"&&(this.query_string=U1()),this.query_string}getURLVariable(e){return this.urlVariables()[e]}createInteractionListeners(){window.addEventListener("blur",()=>{const t={event:"blur",trial:this.jsPsych.getProgress().current_trial_global,time:this.jsPsych.getTotalTime()};this.interactionData.push(t),this.jsPsych.getInitSettings().on_interaction_data_update(t)}),window.addEventListener("focus",()=>{const t={event:"focus",trial:this.jsPsych.getProgress().current_trial_global,time:this.jsPsych.getTotalTime()};this.interactionData.push(t),this.jsPsych.getInitSettings().on_interaction_data_update(t)});const e=()=>{const t={event:document.isFullScreen||document.webkitIsFullScreen||document.mozIsFullScreen||document.fullscreenElement?"fullscreenenter":"fullscreenexit",trial:this.jsPsych.getProgress().current_trial_global,time:this.jsPsych.getTotalTime()};this.interactionData.push(t),this.jsPsych.getInitSettings().on_interaction_data_update(t)};document.addEventListener("fullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("webkitfullscreenchange",e)}_customInsert(e){this.allData=new bn(e)}_fullreset(){this.reset(),this.dataProperties={}}}class F1{constructor(){this.hardwareConnected=!1,document.addEventListener("jspsych-activate",e=>{this.hardwareConnected=!0})}hardware(e){const t=new CustomEvent("jspsych",{detail:e});document.dispatchEvent(t)}}class B1{constructor(e,t=!1,n=0){this.getRootElement=e,this.areResponsesCaseSensitive=t,this.minimumValidRt=n,this.listeners=new Set,this.heldKeys=new Set,this.areRootListenersRegistered=!1,pr(this),this.registerRootListeners()}registerRootListeners(){if(!this.areRootListenersRegistered){const e=this.getRootElement();e&&(e.addEventListener("keydown",this.rootKeydownListener),e.addEventListener("keyup",this.rootKeyupListener),this.areRootListenersRegistered=!0)}}rootKeydownListener(e){for(const t of Array.from(this.listeners))t(e);this.heldKeys.add(this.toLowerCaseIfInsensitive(e.key))}toLowerCaseIfInsensitive(e){return this.areResponsesCaseSensitive?e:e.toLowerCase()}rootKeyupListener(e){this.heldKeys.delete(this.toLowerCaseIfInsensitive(e.key))}isResponseValid(e,t,n){return!t&&this.heldKeys.has(n)?!1:e==="ALL_KEYS"?!0:e==="NO_KEYS"?!1:e.includes(n)}getKeyboardResponse({callback_function:e,valid_responses:t="ALL_KEYS",rt_method:n="performance",persist:r,audio_context:a,audio_context_start_time:l,allow_held_key:c=!1,minimum_valid_rt:u=this.minimumValidRt}){n!=="performance"&&n!=="audio"&&(console.log('Invalid RT method specified in getKeyboardResponse. Defaulting to "performance" method.'),n="performance");const d=n==="performance"?performance.now():l*1e3;this.registerRootListeners(),!this.areResponsesCaseSensitive&&typeof t!="string"&&(t=t.map(m=>m.toLowerCase()));const p=m=>{const _=Math.round((n=="performance"?performance.now():a.currentTime*1e3)-d);if(_<u)return;const x=this.toLowerCaseIfInsensitive(m.key);this.isResponseValid(t,c,x)&&(m.preventDefault(),r||this.cancelKeyboardResponse(p),e({key:x,rt:_}))};return this.listeners.add(p),p}cancelKeyboardResponse(e){this.listeners.delete(e)}cancelAllKeyboardResponses(){this.listeners.clear()}compareKeys(e,t){if(typeof e!="string"&&e!==null||typeof t!="string"&&t!==null){console.error("Error in jsPsych.pluginAPI.compareKeys: arguments must be key strings or null.");return}return typeof e=="string"&&typeof t=="string"?this.areResponsesCaseSensitive?e===t:e.toLowerCase()===t.toLowerCase():e===null&&t===null}}var Ze;(function(s){s[s.BOOL=0]="BOOL",s[s.STRING=1]="STRING",s[s.INT=2]="INT",s[s.FLOAT=3]="FLOAT",s[s.FUNCTION=4]="FUNCTION",s[s.KEY=5]="KEY",s[s.KEYS=6]="KEYS",s[s.SELECT=7]="SELECT",s[s.HTML_STRING=8]="HTML_STRING",s[s.IMAGE=9]="IMAGE",s[s.AUDIO=10]="AUDIO",s[s.VIDEO=11]="VIDEO",s[s.OBJECT=12]="OBJECT",s[s.COMPLEX=13]="COMPLEX",s[s.TIMELINE=14]="TIMELINE"})(Ze||(Ze={}));const am={data:{type:Ze.OBJECT,pretty_name:"Data",default:{}},on_start:{type:Ze.FUNCTION,pretty_name:"On start",default:function(){}},on_finish:{type:Ze.FUNCTION,pretty_name:"On finish",default:function(){}},on_load:{type:Ze.FUNCTION,pretty_name:"On load",default:function(){}},post_trial_gap:{type:Ze.INT,pretty_name:"Post trial gap",default:null},css_classes:{type:Ze.STRING,pretty_name:"Custom CSS classes",default:null},simulation_options:{type:Ze.COMPLEX,default:null}},om=[Ze.AUDIO,Ze.IMAGE,Ze.VIDEO];class z1{constructor(e,t){this.useWebaudio=e,this.webaudioContext=t,this.video_buffers={},this.context=null,this.audio_buffers=[],this.preload_requests=[],this.img_cache={},this.preloadMap=new Map,this.microphone_recorder=null,this.camera_stream=null,this.camera_recorder=null}getVideoBuffer(e){return e.startsWith("blob:")&&(this.video_buffers[e]=e),this.video_buffers[e]}initAudio(){this.context=this.useWebaudio?this.webaudioContext:null}audioContext(){return this.context!==null&&this.context.state!=="running"&&this.context.resume(),this.context}getAudioBuffer(e){return new Promise((t,n)=>{typeof this.audio_buffers[e]>"u"||this.audio_buffers[e]=="tmp"?this.preloadAudio([e],()=>{t(this.audio_buffers[e])},()=>{},r=>{n(r.error)}):t(this.audio_buffers[e])})}preloadAudio(e,t=()=>{},n=a=>{},r=a=>{}){e=ll(e.flat());let a=0;if(e.length==0){t();return}const l=(u,h=1)=>{const d=new XMLHttpRequest;d.open("GET",u,!0),d.responseType="arraybuffer",d.onload=()=>{this.context.decodeAudioData(d.response,p=>{this.audio_buffers[u]=p,a++,n(u),a==e.length&&t()},p=>{r({source:u,error:p})})},d.onerror=p=>{let m=p;d.status==404&&(m="404"),r({source:u,error:m})},d.onloadend=p=>{d.status==404&&r({source:u,error:"404"})},d.send(),this.preload_requests.push(d)},c=(u,h=1)=>{const d=new Audio,p=()=>{this.audio_buffers[u]=d,a++,n(u),a==e.length&&t(),d.removeEventListener("canplaythrough",p)};d.addEventListener("canplaythrough",p),d.addEventListener("error",function m(_){r({source:d.src,error:_}),d.removeEventListener("error",m)}),d.addEventListener("abort",function m(_){r({source:d.src,error:_}),d.removeEventListener("abort",m)}),d.src=u,this.preload_requests.push(d)};for(const u of e)typeof this.audio_buffers[u]<"u"?(a++,n(u),a==e.length&&t()):(this.audio_buffers[u]="tmp",this.audioContext()!==null?l(u):c(u))}preloadImages(e,t=()=>{},n=a=>{},r=a=>{}){e=ll(e.flat());var a=0;if(e.length===0){t();return}for(let l=0;l<e.length;l++){const c=new Image,u=e[l];c.onload=()=>{a++,n(u),a===e.length&&t()},c.onerror=h=>{r({source:u,error:h})},c.src=u,this.img_cache[u]=c,this.preload_requests.push(c)}}preloadVideo(e,t=()=>{},n=a=>{},r=a=>{}){e=ll(e.flat());let a=0;if(e.length===0){t();return}for(const l of e){const c=this.video_buffers,u=new XMLHttpRequest;u.open("GET",l,!0),u.responseType="blob",u.onload=()=>{if(u.status===200||u.status===0){const h=u.response;c[l]=URL.createObjectURL(h),a++,n(l),a===e.length&&t()}},u.onerror=h=>{let d=h;u.status==404&&(d="404"),r({source:l,error:d})},u.onloadend=h=>{u.status==404&&r({source:l,error:"404"})},u.send(),this.preload_requests.push(u)}}getAutoPreloadList(e){const t=Object.fromEntries(om.map(r=>[r,new Set])),n=(r,a)=>{var l,c,u,h;if(typeof r.timeline<"u")for(const p of r.timeline)n(p,(l=r.type)!==null&&l!==void 0?l:a);else if(!((u=(c=r.type)!==null&&c!==void 0?c:a)===null||u===void 0)&&u.info){const{name:p,parameters:m}=((h=r.type)!==null&&h!==void 0?h:a).info;this.preloadMap.has(p)||this.preloadMap.set(p,Object.fromEntries(Object.entries(m).filter(([_,{type:x,preload:S}])=>om.includes(x)&&(S??!0)).map(([_,{type:x}])=>[_,x])));for(const[_,x]of Object.entries(this.preloadMap.get(p))){const S=r[_],y=t[x];if(typeof S=="string")y.add(S);else if(Array.isArray(S))for(const v of S.flat())typeof v=="string"&&y.add(v)}}};return n({timeline:e}),{images:[...t[Ze.IMAGE]],audio:[...t[Ze.AUDIO]],video:[...t[Ze.VIDEO]]}}cancelPreloads(){for(const e of this.preload_requests)e.onload=()=>{},e.onerror=()=>{},e.oncanplaythrough=()=>{},e.onabort=()=>{};this.preload_requests=[]}initializeMicrophoneRecorder(e){const t=new MediaRecorder(e);this.microphone_recorder=t}getMicrophoneRecorder(){return this.microphone_recorder}initializeCameraRecorder(e,t){this.camera_stream=e;const n=new MediaRecorder(e,t);this.camera_recorder=n}getCameraStream(){return this.camera_stream}getCameraRecorder(){return this.camera_recorder}}class k1{constructor(e,t){this.getDisplayContainerElement=e,this.setJsPsychTimeout=t}dispatchEvent(e){this.getDisplayContainerElement().dispatchEvent(e)}keyDown(e){this.dispatchEvent(new KeyboardEvent("keydown",{key:e}))}keyUp(e){this.dispatchEvent(new KeyboardEvent("keyup",{key:e}))}pressKey(e,t=0){t>0?this.setJsPsychTimeout(()=>{this.keyDown(e),this.keyUp(e)},t):(this.keyDown(e),this.keyUp(e))}clickTarget(e,t=0){t>0?this.setJsPsychTimeout(()=>{e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),e.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0})),e.dispatchEvent(new MouseEvent("click",{bubbles:!0}))},t):(e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),e.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0})),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))}fillTextInput(e,t,n=0){n>0?this.setJsPsychTimeout(()=>{e.value=t},n):e.value=t}getValidKey(e){const t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"," "];let n;if(e=="NO_KEYS")n=null;else if(e=="ALL_KEYS")n=t[Math.floor(Math.random()*t.length)];else{const r=e.flat();n=r[Math.floor(Math.random()*r.length)]}return n}mergeSimulationData(e,t){return Object.assign(Object.assign({},e),t==null?void 0:t.data)}ensureSimulationDataConsistency(e,t){if(t.rt&&(t.rt=Math.round(t.rt)),e.trial_duration&&t.rt&&t.rt>e.trial_duration&&(t.rt=null,t.response&&(t.response=null),t.correct&&(t.correct=!1)),e.choices&&e.choices=="NO_KEYS"&&(t.rt&&(t.rt=null),t.response&&(t.response=null)),e.allow_response_before_complete&&e.sequence_reps&&e.frame_time){const n=e.sequence_reps*e.frame_time*e.stimuli.length;t.rt<n&&(t.rt=null,t.response=null)}}}class H1{constructor(){this.timeout_handlers=[]}setTimeout(e,t){const n=window.setTimeout(e,t);return this.timeout_handlers.push(n),n}clearAllTimeouts(){for(const e of this.timeout_handlers)clearTimeout(e);this.timeout_handlers=[]}}function G1(s){const e=s.getInitSettings(),t=pr(new B1(s.getDisplayContainerElement,e.case_sensitive_responses,e.minimum_valid_rt)),n=pr(new H1),r=pr(new z1(e.use_webaudio,s.webaudio_context)),a=pr(new F1),l=pr(new k1(s.getDisplayContainerElement,n.setTimeout));return Object.assign({},t,n,r,a,l)}var rg={exports:{}};(function(s){(function(e,t,n){function r(u){var h=this,d=c();h.next=function(){var p=2091639*h.s0+h.c*23283064365386963e-26;return h.s0=h.s1,h.s1=h.s2,h.s2=p-(h.c=p|0)},h.c=1,h.s0=d(" "),h.s1=d(" "),h.s2=d(" "),h.s0-=d(u),h.s0<0&&(h.s0+=1),h.s1-=d(u),h.s1<0&&(h.s1+=1),h.s2-=d(u),h.s2<0&&(h.s2+=1),d=null}function a(u,h){return h.c=u.c,h.s0=u.s0,h.s1=u.s1,h.s2=u.s2,h}function l(u,h){var d=new r(u),p=h&&h.state,m=d.next;return m.int32=function(){return d.next()*4294967296|0},m.double=function(){return m()+(m()*2097152|0)*11102230246251565e-32},m.quick=m,p&&(typeof p=="object"&&a(p,d),m.state=function(){return a(d,{})}),m}function c(){var u=4022871197,h=function(d){d=String(d);for(var p=0;p<d.length;p++){u+=d.charCodeAt(p);var m=.02519603282416938*u;u=m>>>0,m-=u,m*=u,u=m>>>0,m-=u,u+=m*4294967296}return(u>>>0)*23283064365386963e-26};return h}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.alea=l})(Kr,s,!1)})(rg);var sg=rg.exports,V1=Ju(sg),ag={exports:{}};(function(s){(function(e,t,n){function r(c){var u=this,h="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},c===(c|0)?u.x=c:h+=c;for(var d=0;d<h.length+64;d++)u.x^=h.charCodeAt(d)|0,u.next()}function a(c,u){return u.x=c.x,u.y=c.y,u.z=c.z,u.w=c.w,u}function l(c,u){var h=new r(c),d=u&&u.state,p=function(){return(h.next()>>>0)/4294967296};return p.double=function(){do var m=h.next()>>>11,_=(h.next()>>>0)/4294967296,x=(m+_)/(1<<21);while(x===0);return x},p.int32=h.next,p.quick=p,d&&(typeof d=="object"&&a(d,h),p.state=function(){return a(h,{})}),p}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.xor128=l})(Kr,s,!1)})(ag);var W1=ag.exports,og={exports:{}};(function(s){(function(e,t,n){function r(c){var u=this,h="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,c===(c|0)?u.x=c:h+=c;for(var d=0;d<h.length+64;d++)u.x^=h.charCodeAt(d)|0,d==h.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(c,u){return u.x=c.x,u.y=c.y,u.z=c.z,u.w=c.w,u.v=c.v,u.d=c.d,u}function l(c,u){var h=new r(c),d=u&&u.state,p=function(){return(h.next()>>>0)/4294967296};return p.double=function(){do var m=h.next()>>>11,_=(h.next()>>>0)/4294967296,x=(m+_)/(1<<21);while(x===0);return x},p.int32=h.next,p.quick=p,d&&(typeof d=="object"&&a(d,h),p.state=function(){return a(h,{})}),p}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.xorwow=l})(Kr,s,!1)})(og);var X1=og.exports,lg={exports:{}};(function(s){(function(e,t,n){function r(c){var u=this;u.next=function(){var d=u.x,p=u.i,m,_;return m=d[p],m^=m>>>7,_=m^m<<24,m=d[p+1&7],_^=m^m>>>10,m=d[p+3&7],_^=m^m>>>3,m=d[p+4&7],_^=m^m<<7,m=d[p+7&7],m=m^m<<13,_^=m^m<<9,d[p]=_,u.i=p+1&7,_};function h(d,p){var m,_=[];if(p===(p|0))_[0]=p;else for(p=""+p,m=0;m<p.length;++m)_[m&7]=_[m&7]<<15^p.charCodeAt(m)+_[m+1&7]<<13;for(;_.length<8;)_.push(0);for(m=0;m<8&&_[m]===0;++m);for(m==8?_[7]=-1:_[m],d.x=_,d.i=0,m=256;m>0;--m)d.next()}h(u,c)}function a(c,u){return u.x=c.x.slice(),u.i=c.i,u}function l(c,u){c==null&&(c=+new Date);var h=new r(c),d=u&&u.state,p=function(){return(h.next()>>>0)/4294967296};return p.double=function(){do var m=h.next()>>>11,_=(h.next()>>>0)/4294967296,x=(m+_)/(1<<21);while(x===0);return x},p.int32=h.next,p.quick=p,d&&(d.x&&a(d,h),p.state=function(){return a(h,{})}),p}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.xorshift7=l})(Kr,s,!1)})(lg);var q1=lg.exports,cg={exports:{}};(function(s){(function(e,t,n){function r(c){var u=this;u.next=function(){var d=u.w,p=u.X,m=u.i,_,x;return u.w=d=d+1640531527|0,x=p[m+34&127],_=p[m=m+1&127],x^=x<<13,_^=_<<17,x^=x>>>15,_^=_>>>12,x=p[m]=x^_,u.i=m,x+(d^d>>>16)|0};function h(d,p){var m,_,x,S,y,v=[],P=128;for(p===(p|0)?(_=p,p=null):(p=p+"\0",_=0,P=Math.max(P,p.length)),x=0,S=-32;S<P;++S)p&&(_^=p.charCodeAt((S+32)%p.length)),S===0&&(y=_),_^=_<<10,_^=_>>>15,_^=_<<4,_^=_>>>13,S>=0&&(y=y+1640531527|0,m=v[S&127]^=_+y,x=m==0?x+1:0);for(x>=128&&(v[(p&&p.length||0)&127]=-1),x=127,S=4*128;S>0;--S)_=v[x+34&127],m=v[x=x+1&127],_^=_<<13,m^=m<<17,_^=_>>>15,m^=m>>>12,v[x]=_^m;d.w=y,d.X=v,d.i=x}h(u,c)}function a(c,u){return u.i=c.i,u.w=c.w,u.X=c.X.slice(),u}function l(c,u){c==null&&(c=+new Date);var h=new r(c),d=u&&u.state,p=function(){return(h.next()>>>0)/4294967296};return p.double=function(){do var m=h.next()>>>11,_=(h.next()>>>0)/4294967296,x=(m+_)/(1<<21);while(x===0);return x},p.int32=h.next,p.quick=p,d&&(d.X&&a(d,h),p.state=function(){return a(h,{})}),p}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.xor4096=l})(Kr,s,!1)})(cg);var j1=cg.exports,ug={exports:{}};(function(s){(function(e,t,n){function r(c){var u=this,h="";u.next=function(){var p=u.b,m=u.c,_=u.d,x=u.a;return p=p<<25^p>>>7^m,m=m-_|0,_=_<<24^_>>>8^x,x=x-p|0,u.b=p=p<<20^p>>>12^m,u.c=m=m-_|0,u.d=_<<16^m>>>16^x,u.a=x-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,c===Math.floor(c)?(u.a=c/4294967296|0,u.b=c|0):h+=c;for(var d=0;d<h.length+20;d++)u.b^=h.charCodeAt(d)|0,u.next()}function a(c,u){return u.a=c.a,u.b=c.b,u.c=c.c,u.d=c.d,u}function l(c,u){var h=new r(c),d=u&&u.state,p=function(){return(h.next()>>>0)/4294967296};return p.double=function(){do var m=h.next()>>>11,_=(h.next()>>>0)/4294967296,x=(m+_)/(1<<21);while(x===0);return x},p.int32=h.next,p.quick=p,d&&(typeof d=="object"&&a(d,h),p.state=function(){return a(h,{})}),p}t&&t.exports?t.exports=l:n&&n.amd?n(function(){return l}):this.tychei=l})(Kr,s,!1)})(ug);var Y1=ug.exports,hg={exports:{}};(function(s){(function(e,t,n){var r=256,a=6,l=52,c="random",u=n.pow(r,a),h=n.pow(2,l),d=h*2,p=r-1,m;function _(R,F,U){var D=[];F=F==!0?{entropy:!0}:F||{};var J=v(y(F.entropy?[R,A(t)]:R??P(),3),D),w=new x(D),I=function(){for(var $=w.g(a),ie=u,Me=0;$<h;)$=($+Me)*r,ie*=r,Me=w.g(1);for(;$>=d;)$/=2,ie/=2,Me>>>=1;return($+Me)/ie};return I.int32=function(){return w.g(4)|0},I.quick=function(){return w.g(4)/4294967296},I.double=I,v(A(w.S),t),(F.pass||U||function($,ie,Me,k){return k&&(k.S&&S(k,w),$.state=function(){return S(w,{})}),Me?(n[c]=$,ie):$})(I,J,"global"in F?F.global:this==n,F.state)}function x(R){var F,U=R.length,D=this,J=0,w=D.i=D.j=0,I=D.S=[];for(U||(R=[U++]);J<r;)I[J]=J++;for(J=0;J<r;J++)I[J]=I[w=p&w+R[J%U]+(F=I[J])],I[w]=F;(D.g=function($){for(var ie,Me=0,k=D.i,q=D.j,ee=D.S;$--;)ie=ee[k=p&k+1],Me=Me*r+ee[p&(ee[k]=ee[q=p&q+ie])+(ee[q]=ie)];return D.i=k,D.j=q,Me})(r)}function S(R,F){return F.i=R.i,F.j=R.j,F.S=R.S.slice(),F}function y(R,F){var U=[],D=typeof R,J;if(F&&D=="object")for(J in R)try{U.push(y(R[J],F-1))}catch{}return U.length?U:D=="string"?R:R+"\0"}function v(R,F){for(var U=R+"",D,J=0;J<U.length;)F[p&J]=p&(D^=F[p&J]*19)+U.charCodeAt(J++);return A(F)}function P(){try{var R;return m&&(R=m.randomBytes)?R=R(r):(R=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(R)),A(R)}catch{var F=e.navigator,U=F&&F.plugins;return[+new Date,e,U,e.screen,A(t)]}}function A(R){return String.fromCharCode.apply(0,R)}if(v(n.random(),t),s.exports){s.exports=_;try{m=require("crypto")}catch{}}else n["seed"+c]=_})(typeof self<"u"?self:Kr,[],Math)})(hg);var K1=hg.exports,Z1=sg,$1=W1,J1=X1,Q1=q1,eC=j1,tC=Y1,Zr=K1;Zr.alea=Z1;Zr.xor128=$1;Zr.xorwow=J1;Zr.xorshift7=Q1;Zr.xor4096=eC;Zr.tychei=tC;var nC=Zr,iC=nC,Iu=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function fg(s){const e=s!=null&&s.seed?new iC(s.seed):null;function t(){return s&&s.maxLength>1?n():r()}function n(){for(var p=!1,m;!p;)m=r(),m.length<=s.maxLength&&(p=!0);return m}function r(){return Iu[a(Iu.length)]}function a(p){const m=e?e():Math.random();return Math.floor(m*p)}if(typeof s>"u")return t();typeof s=="number"&&(s={exactly:s}),s.exactly&&(s.min=s.exactly,s.max=s.exactly),typeof s.wordsPerString!="number"&&(s.wordsPerString=1),typeof s.formatter!="function"&&(s.formatter=p=>p),typeof s.separator!="string"&&(s.separator=" ");for(var l=s.min+a(s.max+1-s.min),c=[],u="",h=0,d=0;d<l*s.wordsPerString;d++)h===s.wordsPerString-1?u+=s.formatter(t(),h):u+=s.formatter(t(),h)+s.separator,h++,(d+1)%s.wordsPerString===0&&(c.push(u),u="",h=0);return typeof s.join=="string"&&(c=c.join(s.join)),c}var rC=fg;fg.wordList=Iu;var sC=Ju(rC);function aC(s=Math.random().toString()){return Math.random=V1(s),s}function eh(s,e,t=!1){const n=Array.isArray(s),r=Array.isArray(e);if(!n)r?(e=[e[0]],console.log("Unclear parameters given to randomization.repeat. Multiple set sizes specified, but only one item exists to sample. Proceeding using the first set size.")):(s=[s],e=[e]);else if(r){if(s.length!=e.length)if(console.warn("Unclear parameters given to randomization.repeat. Items and repetitions are unequal lengths. Behavior may not be as expected."),e.length<s.length){let c=[];for(let u=0;u<s.length;u++)c.push(e);e=c}else e=e.slice(0,s.length)}else{let c=[];for(let u=0;u<s.length;u++)c.push(e);e=c}let a=[];for(let c=0;c<s.length;c++)for(let u=0;u<e[c];u++)s[c]==null||typeof s[c]!="object"?a.push(s[c]):a.push(Object.assign({},s[c]));let l=Mr(a);return t&&(l=mC(l)),l}function Mr(s){Array.isArray(s)||console.error("Argument to shuffle() must be an array.");const e=s.slice(0);let t=e.length,n,r;for(;t;)r=Math.floor(Math.random()*t--),n=e[t],e[t]=e[r],e[r]=n;return e}function oC(s,e){Array.isArray(s)||console.error("First argument to shuffleNoRepeats() must be an array."),typeof e<"u"&&typeof e!="function"&&console.error("Second argument to shuffleNoRepeats() must be a function."),typeof e>"u"&&(e=function(n,r){return n===r});const t=Mr(s);for(let n=0;n<t.length-1;n++)if(e(t[n],t[n+1])){let r=Math.floor(Math.random()*(t.length-2))+1;for(;e(t[n+1],t[r])||e(t[n+1],t[r+1])||e(t[n+1],t[r-1])||e(t[n],t[r]);)r=Math.floor(Math.random()*(t.length-2))+1;const a=t[r];t[r]=t[n+1],t[n+1]=a}return t}function dg(s,e=!1){const t=s.length;if(t==1)return console.warn("shuffleAlternateGroups() was called with only one group. Defaulting to simple shuffle."),Mr(s[0]);let n=[];for(let c=0;c<t;c++)n.push(c);e&&(n=Mr(n));const r=[];let a=null;for(let c=0;c<t;c++)a=a===null?s[c].length:Math.min(a,s[c].length),r.push(Mr(s[c]));const l=[];for(let c=0;c<a;c++)for(let u=0;u<n.length;u++)l.push(r[n[u]][c]);return l}function pg(s,e){return Array.isArray(s)||console.error("First argument to sampleWithoutReplacement() must be an array"),e>s.length&&console.error("Cannot take a sample larger than the size of the set of items to sample."),Mr(s).slice(0,e)}function mg(s,e,t){Array.isArray(s)||console.error("First argument to sampleWithReplacement() must be an array");const n=[];if(typeof t<"u"){t.length!==s.length&&console.error("The length of the weights array must equal the length of the array to be sampled from.");let l=0;for(const c of t)l+=c;for(const c of t)n.push(c/l)}else for(let l=0;l<s.length;l++)n.push(1/s.length);const r=[n[0]];for(let l=1;l<n.length;l++)r.push(n[l]+r[l-1]);const a=[];for(let l=0;l<e;l++){const c=Math.random();let u=0;for(;c>r[u];)u++;a.push(s[u])}return a}function lC(s,e=1,t=!1){let n=[{}];for(const[r,a]of Object.entries(s)){const l=[];for(const c of a)for(const u of n)l.push(Object.assign(Object.assign({},u),{[r]:c}));n=l}return eh(n,e,t)}function cC(s=32){let e="";const t="0123456789abcdefghjklmnopqrstuvwxyz";for(let n=0;n<s;n++)e+=t[Math.floor(Math.random()*t.length)];return e}function uC(s,e){if(e<s)throw new Error("Upper boundary must be less than or equal to lower boundary");return s+Math.floor(Math.random()*(e-s+1))}function hC(s){return Math.random()<=s?1:0}function Du(s,e){return pC()*e+s}function Nu(s){return-Math.log(Math.random())/s}function fC(s,e,t,n=!1){let r=Du(s,e)+Nu(t);if(n)for(;r<=0;)r=Du(s,e)+Nu(t);return r}function dC(s){return sC(s)}function pC(){for(var s=0,e=0;s===0;)s=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*e)}function mC(s){const e={};for(const t of s)for(const n of Object.keys(t))typeof e[n]>"u"&&(e[n]=[]),e[n].push(t[n]);return e}var gC=Object.freeze({__proto__:null,factorial:lC,randomID:cC,randomInt:uC,randomWords:dC,repeat:eh,sampleBernoulli:hC,sampleExGaussian:fC,sampleExponential:Nu,sampleNormal:Du,sampleWithReplacement:mg,sampleWithoutReplacement:pg,setSeed:aC,shuffle:Mr,shuffleAlternateGroups:dg,shuffleNoRepeats:oC});function gg(){const s={previewMode:!1,outsideTurk:!1,hitId:"INVALID_URL_PARAMETER",assignmentId:"INVALID_URL_PARAMETER",workerId:"INVALID_URL_PARAMETER",turkSubmitTo:"INVALID_URL_PARAMETER"},e=function(r,a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const l="[\\?&]"+a+"=([^&#]*)",u=new RegExp(l).exec(r);return u==null?"":u[1]},t=e(window.location.href,"assignmentId")?window.location.href:document.referrer;return["assignmentId","hitId","workerId","turkSubmitTo"].map(function(r){s[r]=unescape(e(t,r))}),s.previewMode=s.assignmentId=="ASSIGNMENT_ID_NOT_AVAILABLE",s.outsideTurk=!s.previewMode&&s.hitId===""&&s.assignmentId==""&&s.workerId=="",s}function _C(s){const e=gg(),t=e.assignmentId,n=e.turkSubmitTo;if(!t||!n)return;const r=document.createElement("form");r.method="POST",r.action=n+"/mturk/externalSubmit?assignmentId="+t;for(const a in s)if(s.hasOwnProperty(a)){const l=document.createElement("input");l.type="hidden",l.name=a,l.id=a,l.value=s[a],r.appendChild(l)}document.body.appendChild(r),r.submit()}var vC=Object.freeze({__proto__:null,submitToTurk:_C,turkInfo:gg});class gl{constructor(e,t,n,r){if(this.jsPsych=e,this.progress={current_location:-1,current_variable_set:0,current_repetition:0,current_iteration:0,done:!1},this.parent_node=n,this.relative_id=typeof n>"u"?0:r,typeof t.timeline<"u"){this.timeline_parameters={timeline:[],loop_function:t.loop_function,conditional_function:t.conditional_function,sample:t.sample,randomize_order:typeof t.randomize_order>"u"?!1:t.randomize_order,repetitions:typeof t.repetitions>"u"?1:t.repetitions,timeline_variables:typeof t.timeline_variables>"u"?[{}]:t.timeline_variables,on_timeline_finish:t.on_timeline_finish,on_timeline_start:t.on_timeline_start},this.setTimelineVariablesOrder();var a=Object.assign({},t);delete a.timeline,delete a.conditional_function,delete a.loop_function,delete a.randomize_order,delete a.repetitions,delete a.timeline_variables,delete a.sample,delete a.on_timeline_start,delete a.on_timeline_finish,this.node_trial_data=a;for(var l=0;l<t.timeline.length;l++){var c=Object.assign({},a,t.timeline[l]);if(typeof a.data=="object"&&typeof t.timeline[l].data=="object"){var u=Object.assign({},a.data,t.timeline[l].data);c.data=u}this.timeline_parameters.timeline.push(new gl(this.jsPsych,c,this,l))}}else typeof t.type>"u"&&console.error('Trial level node is missing the "type" parameter. The parameters for the node are: '+JSON.stringify(t)),this.trial_parameters=Object.assign({},t)}trial(){return typeof this.timeline_parameters>"u"?_r(this.trial_parameters):this.progress.current_location>=this.timeline_parameters.timeline.length?null:this.timeline_parameters.timeline[this.progress.current_location].trial()}markCurrentTrialComplete(){typeof this.timeline_parameters>"u"?this.progress.done=!0:this.timeline_parameters.timeline[this.progress.current_location].markCurrentTrialComplete()}nextRepetiton(){this.setTimelineVariablesOrder(),this.progress.current_location=-1,this.progress.current_variable_set=0,this.progress.current_repetition++;for(var e=0;e<this.timeline_parameters.timeline.length;e++)this.timeline_parameters.timeline[e].reset()}setTimelineVariablesOrder(){const e=this.timeline_parameters;if(!(typeof e>"u"||typeof e.timeline_variables>"u")){for(var t=[],n=0;n<e.timeline_variables.length;n++)t.push(n);typeof e.sample<"u"&&(e.sample.type=="custom"?t=e.sample.fn(t):e.sample.type=="with-replacement"?t=mg(t,e.sample.size,e.sample.weights):e.sample.type=="without-replacement"?t=pg(t,e.sample.size):e.sample.type=="fixed-repetitions"?t=eh(t,e.sample.size,!1):e.sample.type=="alternate-groups"?t=dg(e.sample.groups,e.sample.randomize_group_order):console.error('Invalid type in timeline sample parameters. Valid options for type are "custom", "with-replacement", "without-replacement", "fixed-repetitions", and "alternate-groups"')),e.randomize_order&&(t=Mr(t)),this.progress.order=t}}nextSet(){this.progress.current_location=-1,this.progress.current_variable_set++;for(var e=0;e<this.timeline_parameters.timeline.length;e++)this.timeline_parameters.timeline[e].reset()}advance(){const e=this.progress,t=this.timeline_parameters,n=this.jsPsych.internal;if(e.done)return!0;if(e.current_location==-1){if(typeof t<"u"){if(typeof t.conditional_function<"u"&&e.current_repetition==0&&e.current_variable_set==0){n.call_immediate=!0;var r=t.conditional_function();if(n.call_immediate=!1,r==!1)return e.done=!0,!0}typeof t.on_timeline_start<"u"&&e.current_variable_set==0&&t.on_timeline_start()}return e.current_location=0,this.advance()}if(typeof t<"u"){for(var a=!1;e.current_location<t.timeline.length&&a==!1;){var l=t.timeline[e.current_location].advance();if(l)e.current_location++;else return a=!0,!1}return e.current_variable_set<e.order.length-1?(this.nextSet(),this.advance()):e.current_repetition<t.repetitions-1?(this.nextRepetiton(),typeof t.on_timeline_finish<"u"&&t.on_timeline_finish(),this.advance()):(typeof t.on_timeline_finish<"u"&&t.on_timeline_finish(),typeof t.loop_function<"u"?(n.call_immediate=!0,t.loop_function(this.generatedData())?(this.reset(),n.call_immediate=!1,this.parent_node.advance()):(e.done=!0,n.call_immediate=!1,!0)):(e.done=!0,!0))}}isComplete(){return this.progress.done}getTimelineVariableValue(e){if(!(typeof this.timeline_parameters>"u")){var t=this.timeline_parameters.timeline_variables[this.progress.order[this.progress.current_variable_set]][e];return t}}findTimelineVariable(e){var t=this.getTimelineVariableValue(e);return typeof t>"u"?typeof this.parent_node<"u"?this.parent_node.findTimelineVariable(e):void 0:t}timelineVariable(e){if(typeof this.timeline_parameters>"u"){const n=this.findTimelineVariable(e);return typeof n>"u"&&console.warn("Timeline variable "+e+" not found."),n}else{var t=Math.max(0,this.progress.current_location);t==this.timeline_parameters.timeline.length&&(t=t-1);const n=this.timeline_parameters.timeline[t].timelineVariable(e);return typeof n>"u"&&console.warn("Timeline variable "+e+" not found."),n}}allTimelineVariables(){for(var e=this.allTimelineVariablesNames(),t={},n=0;n<e.length;n++)t[e[n]]=this.timelineVariable(e[n]);return t}allTimelineVariablesNames(e=[]){if(typeof this.timeline_parameters<"u"){e=e.concat(Object.keys(this.timeline_parameters.timeline_variables[this.progress.order[this.progress.current_variable_set]]));var t=Math.max(0,this.progress.current_location);return t==this.timeline_parameters.timeline.length&&(t=t-1),this.timeline_parameters.timeline[t].allTimelineVariablesNames(e)}if(typeof this.timeline_parameters>"u")return e}length(){var e=0;if(typeof this.timeline_parameters<"u")for(var t=0;t<this.timeline_parameters.timeline.length;t++)e+=this.timeline_parameters.timeline[t].length();else return 1;return e}percentComplete(){for(var e=this.length(),t=0,n=0;n<this.timeline_parameters.timeline.length;n++)this.timeline_parameters.timeline[n].isComplete()&&(t+=this.timeline_parameters.timeline[n].length());return t/e*100}reset(){if(this.progress.current_location=-1,this.progress.current_repetition=0,this.progress.current_variable_set=0,this.progress.current_iteration++,this.progress.done=!1,this.setTimelineVariablesOrder(),typeof this.timeline_parameters<"u")for(var e=0;e<this.timeline_parameters.timeline.length;e++)this.timeline_parameters.timeline[e].reset()}end(){this.progress.done=!0}endActiveNode(){typeof this.timeline_parameters>"u"?(this.end(),this.parent_node.end()):this.timeline_parameters.timeline[this.progress.current_location].endActiveNode()}ID(){var e="";return typeof this.parent_node>"u"?"0."+this.progress.current_iteration:(e+=this.parent_node.ID()+"-",e+=this.relative_id+"."+this.progress.current_iteration,e)}activeID(){return typeof this.timeline_parameters>"u"?this.ID():this.timeline_parameters.timeline[this.progress.current_location].activeID()}generatedData(){return this.jsPsych.data.getDataByTimelineNode(this.ID())}trialsOfType(e){if(typeof this.timeline_parameters>"u")return this.trial_parameters.type==e?this.trial_parameters:[];for(var t=[],n=0;n<this.timeline_parameters.timeline.length;n++){var r=this.timeline_parameters.timeline[n].trialsOfType(e);t=t.concat(r)}return t}insert(e){typeof this.timeline_parameters>"u"?console.error("Cannot add new trials to a trial-level node."):this.timeline_parameters.timeline.push(new gl(this.jsPsych,Object.assign(Object.assign({},this.node_trial_data),e),this,this.timeline_parameters.timeline.length))}}function yC(s){return new Promise(e=>setTimeout(e,s))}class xC{version(){return P1}constructor(e){this.extensions={},this.turk=vC,this.randomization=gC,this.utils=I1,this.opts={},this.global_trial_index=0,this.current_trial={},this.current_trial_finished=!1,this.paused=!1,this.waiting=!1,this.file_protocol=!1,this.simulation_mode=null,this.webaudio_context=null,this.internal={call_immediate:!1},this.progress_bar_amount=0,e=Object.assign({display_element:void 0,on_finish:()=>{},on_trial_start:()=>{},on_trial_finish:()=>{},on_data_update:()=>{},on_interaction_data_update:()=>{},on_close:()=>{},use_webaudio:!0,exclusions:{},show_progress_bar:!1,message_progress_bar:"Completion Progress",auto_update_progress_bar:!0,default_iti:0,minimum_valid_rt:0,experiment_width:null,override_safe_mode:!1,case_sensitive_responses:!1,extensions:[]},e),this.opts=e,pr(this),this.webaudio_context=typeof window<"u"&&typeof window.AudioContext<"u"?new AudioContext:null,window.location.protocol=="file:"&&(e.override_safe_mode===!1||typeof e.override_safe_mode>"u")&&(e.use_webaudio=!1,this.file_protocol=!0,console.warn("jsPsych detected that it is running via the file:// protocol and not on a web server. To prevent issues with cross-origin requests, Web Audio and video preloading have been disabled. If you would like to override this setting, you can set 'override_safe_mode' to 'true' in initJsPsych. For more information, see: https://www.jspsych.org/overview/running-experiments")),this.data=new O1(this),this.pluginAPI=G1(this);for(const t of e.extensions)this.extensions[t.type.info.name]=new t.type(this);this.pluginAPI.initAudio()}run(e){return ba(this,void 0,void 0,function*(){typeof e>"u"&&console.error("No timeline declared in jsPsych.run. Cannot start experiment."),e.length===0&&console.error("No trials have been added to the timeline (the timeline is an empty array). Cannot start experiment."),this.timelineDescription=e,this.timeline=new gl(this,{timeline:e}),yield this.prepareDom(),yield this.checkExclusions(this.opts.exclusions),yield this.loadExtensions(this.opts.extensions),document.documentElement.setAttribute("jspsych","present"),this.startExperiment(),yield this.finished})}simulate(e,t="data-only",n={}){return ba(this,void 0,void 0,function*(){this.simulation_mode=t,this.simulation_options=n,yield this.run(e)})}getProgress(){return{total_trials:typeof this.timeline>"u"?void 0:this.timeline.length(),current_trial_global:this.global_trial_index,percent_complete:typeof this.timeline>"u"?0:this.timeline.percentComplete()}}getStartTime(){return this.exp_start_time}getTotalTime(){return typeof this.exp_start_time>"u"?0:new Date().getTime()-this.exp_start_time.getTime()}getDisplayElement(){return this.DOM_target}getDisplayContainerElement(){return this.DOM_container}finishTrial(e={}){var t;if(this.current_trial_finished)return;this.current_trial_finished=!0,typeof this.current_trial.css_classes<"u"&&Array.isArray(this.current_trial.css_classes)&&this.DOM_target.classList.remove(...this.current_trial.css_classes),this.data.write(e);const r=this.data.getLastTrialData().values()[0],a=this.current_trial;if(typeof a.save_trial_parameters=="object")for(const u of Object.keys(a.save_trial_parameters)){const h=a.save_trial_parameters[u];h===!0&&(typeof a[u]>"u"?console.warn(`Invalid parameter specified in save_trial_parameters. Trial has no property called "${u}".`):typeof a[u]=="function"?r[u]=a[u].toString():r[u]=a[u]),h===!1&&u!=="internal_node_id"&&u!=="trial_index"&&delete r[u]}const l=((t=a.extensions)!==null&&t!==void 0?t:[]).map(u=>this.extensions[u.type.info.name].on_finish(u.params)),c=()=>{this.internal.call_immediate=!0,typeof a.on_finish=="function"&&a.on_finish(r),this.opts.on_trial_finish(r),this.opts.on_data_update(r),this.internal.call_immediate=!1,this.simulation_mode==="data-only"?this.nextTrial():typeof a.post_trial_gap===null||typeof a.post_trial_gap>"u"?this.opts.default_iti>0?setTimeout(this.nextTrial,this.opts.default_iti):this.nextTrial():a.post_trial_gap>0?setTimeout(this.nextTrial,a.post_trial_gap):this.nextTrial()};if(l.some(u=>typeof u.then=="function"))Promise.all(l.map(u=>Promise.resolve(u).then(h=>{Object.assign(r,h)}))).then(c);else{for(const u of l)Object.assign(r,u);c()}}endExperiment(e="",t={}){this.timeline.end_message=e,this.timeline.end(),this.pluginAPI.cancelAllKeyboardResponses(),this.pluginAPI.clearAllTimeouts(),this.finishTrial(t)}endCurrentTimeline(){this.timeline.endActiveNode()}getCurrentTrial(){return this.current_trial}getInitSettings(){return this.opts}getCurrentTimelineNodeID(){return this.timeline.activeID()}timelineVariable(e,t=!1){return this.internal.call_immediate||t===!0?this.timeline.timelineVariable(e):{timelineVariablePlaceholder:!0,timelineVariableFunction:()=>this.timeline.timelineVariable(e)}}getAllTimelineVariables(){return this.timeline.allTimelineVariables()}addNodeToEndOfTimeline(e,t){this.timeline.insert(e)}pauseExperiment(){this.paused=!0}resumeExperiment(){this.paused=!1,this.waiting&&(this.waiting=!1,this.nextTrial())}loadFail(e){e=e||"<p>The experiment failed to load.</p>",this.DOM_target.innerHTML=e}getSafeModeStatus(){return this.file_protocol}getTimeline(){return this.timelineDescription}prepareDom(){return ba(this,void 0,void 0,function*(){document.readyState!=="complete"&&(yield new Promise(t=>{window.addEventListener("load",t)}));const e=this.opts;if(typeof e.display_element>"u")document.querySelector("body")===null&&document.documentElement.appendChild(document.createElement("body")),document.querySelector("html").style.height="100%",document.querySelector("body").style.margin="0px",document.querySelector("body").style.height="100%",document.querySelector("body").style.width="100%",e.display_element=document.querySelector("body");else{const t=e.display_element instanceof Element?e.display_element:document.querySelector("#"+e.display_element);t===null?console.error("The display_element specified in initJsPsych() does not exist in the DOM."):e.display_element=t}e.display_element.innerHTML='<div class="jspsych-content-wrapper"><div id="jspsych-content"></div></div>',this.DOM_container=e.display_element,this.DOM_target=document.querySelector("#jspsych-content"),e.experiment_width!==null&&(this.DOM_target.style.width=e.experiment_width+"px"),e.display_element.tabIndex=0,e.display_element.className.indexOf("jspsych-display-element")===-1&&(e.display_element.className+=" jspsych-display-element"),this.DOM_target.className+="jspsych-content",this.data.createInteractionListeners(),window.addEventListener("beforeunload",e.on_close)})}loadExtensions(e){return ba(this,void 0,void 0,function*(){try{yield Promise.all(e.map(t=>this.extensions[t.type.info.name].initialize(t.params||{})))}catch(t){throw console.error(t),new Error(t)}})}startExperiment(){this.finished=new Promise(e=>{this.resolveFinishedPromise=e}),this.opts.show_progress_bar===!0&&this.drawProgressBar(this.opts.message_progress_bar),this.exp_start_time=new Date,this.timeline.advance(),this.doTrial(this.timeline.trial())}finishExperiment(){const e=this.opts.on_finish(this.data.get()),t=()=>{typeof this.timeline.end_message<"u"&&(this.DOM_target.innerHTML=this.timeline.end_message),this.resolveFinishedPromise()};e?Promise.resolve(e).then(t):t()}nextTrial(){if(this.paused){this.waiting=!0;return}this.global_trial_index++,this.timeline.markCurrentTrialComplete();const e=this.timeline.advance();if(this.opts.show_progress_bar===!0&&this.opts.auto_update_progress_bar===!0&&this.updateProgressBar(),e){this.finishExperiment();return}this.doTrial(this.timeline.trial())}doTrial(e){if(this.current_trial=e,this.current_trial_finished=!1,this.evaluateTimelineVariables(e),typeof e.type=="string")throw new Xi("A string was provided as the trial's `type` parameter. Since jsPsych v7, the `type` parameter needs to be a plugin object.");if(e.type=Object.assign(Object.assign({},pr(new e.type(this))),{info:e.type.info}),this.evaluateFunctionParameters(e),this.setDefaultValues(e),this.internal.call_immediate=!0,this.opts.on_trial_start(e),typeof e.on_start=="function"&&e.on_start(e),Array.isArray(e.extensions))for(const c of e.extensions)this.extensions[c.type.info.name].on_start(c.params);this.DOM_container.focus(),this.DOM_target.scrollTop=0,typeof e.css_classes<"u"&&(!Array.isArray(e.css_classes)&&typeof e.css_classes=="string"&&(e.css_classes=[e.css_classes]),Array.isArray(e.css_classes)&&this.DOM_target.classList.add(...e.css_classes));const t=()=>{if(typeof e.on_load=="function"&&e.on_load(),Array.isArray(e.extensions))for(const c of e.extensions)this.extensions[c.type.info.name].on_load(c.params)};let n,r,a;this.simulation_mode||(n=e.type.trial(this.DOM_target,e,t)),this.simulation_mode&&(e.type.simulate?(e.simulation_options||(r=this.simulation_options.default),e.simulation_options&&(typeof e.simulation_options=="string"?this.simulation_options[e.simulation_options]?r=this.simulation_options[e.simulation_options]:this.simulation_options.default?(console.log(`No matching simulation options found for "${e.simulation_options}". Using "default" options.`),r=this.simulation_options.default):(console.log(`No matching simulation options found for "${e.simulation_options}" and no "default" options provided. Using the default values provided by the plugin.`),r={}):r=e.simulation_options),a=this.utils.deepMerge(this.simulation_options.default,r),a=this.utils.deepCopy(a),a=this.replaceFunctionsWithValues(a,null),(a==null?void 0:a.simulate)===!1?n=e.type.trial(this.DOM_target,e,t):n=e.type.simulate(e,(a==null?void 0:a.mode)||this.simulation_mode,a,t)):n=e.type.trial(this.DOM_target,e,t)),!(n&&typeof n.then=="function")&&(!this.simulation_mode||this.simulation_mode&&(a==null?void 0:a.simulate)===!1)&&t(),this.internal.call_immediate=!1}evaluateTimelineVariables(e){for(const t of Object.keys(e))typeof e[t]=="object"&&e[t]!==null&&typeof e[t].timelineVariablePlaceholder<"u"&&(e[t]=e[t].timelineVariableFunction()),typeof e[t]=="object"&&e[t]!==null&&t!=="timeline"&&t!=="timeline_variables"&&this.evaluateTimelineVariables(e[t])}evaluateFunctionParameters(e){this.internal.call_immediate=!0;for(const t of Object.keys(e))t!=="type"&&(typeof am[t]<"u"&&am[t].type!==Ze.FUNCTION&&(e[t]=this.replaceFunctionsWithValues(e[t],null)),typeof e.type.info.parameters[t]<"u"&&e.type.info.parameters[t].type!==Ze.FUNCTION&&(e[t]=this.replaceFunctionsWithValues(e[t],e.type.info.parameters[t])));this.internal.call_immediate=!1}replaceFunctionsWithValues(e,t){if(e===null)return e;if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=this.replaceFunctionsWithValues(e[n],t);else if(typeof e=="object")if(t===null||!t.nested)for(const n of Object.keys(e))n==="type"||n==="timeline"||n==="timeline_variables"||(e[n]=this.replaceFunctionsWithValues(e[n],null));else for(const n of Object.keys(e))typeof t.nested[n]=="object"&&t.nested[n].type!==Ze.FUNCTION&&(e[n]=this.replaceFunctionsWithValues(e[n],t.nested[n]));else if(typeof e=="function")return e();return e}setDefaultValues(e){for(const t in e.type.info.parameters)e.type.info.parameters[t].type===Ze.COMPLEX?(typeof e[t]>"u"&&e.type.info.parameters[t].default&&(e[t]=e.type.info.parameters[t].default),e.type.info.parameters[t].array===!0&&Array.isArray(e[t])&&e[t].forEach(function(n,r){for(const a in e.type.info.parameters[t].nested)(typeof e[t][r][a]>"u"||e[t][r][a]===null)&&(typeof e.type.info.parameters[t].nested[a].default>"u"?console.error(`You must specify a value for the ${a} parameter (nested in the ${t} parameter) in the ${e.type.info.name} plugin.`):e[t][r][a]=e.type.info.parameters[t].nested[a].default)})):(typeof e[t]>"u"||e[t]===null)&&(typeof e.type.info.parameters[t].default>"u"?console.error(`You must specify a value for the ${t} parameter in the ${e.type.info.name} plugin.`):e[t]=e.type.info.parameters[t].default)}checkExclusions(e){return ba(this,void 0,void 0,function*(){if((e.min_width||e.min_height||e.audio)&&console.warn("The exclusions option in `initJsPsych()` is deprecated and will be removed in a future version. We recommend using the browser-check plugin instead. See https://www.jspsych.org/latest/plugins/browser-check/."),e.min_width||e.min_height){const t=e.min_width||0,n=e.min_height||0;if(window.innerWidth<t||window.innerHeight<n){for(this.getDisplayElement().innerHTML="<p>Your browser window is too small to complete this experiment. Please maximize the size of your browser window. If your browser window is already maximized, you will not be able to complete this experiment.</p><p>The minimum width is "+t+"px. Your current width is "+window.innerWidth+"px.</p><p>The minimum height is "+n+"px. Your current height is "+window.innerHeight+"px.</p>";window.innerWidth<t||window.innerHeight<n;)yield yC(100);this.getDisplayElement().innerHTML=""}}if(typeof e.audio<"u"&&e.audio&&!window.hasOwnProperty("AudioContext")&&!window.hasOwnProperty("webkitAudioContext"))throw this.getDisplayElement().innerHTML="<p>Your browser does not support the WebAudio API, which means that you will not be able to complete the experiment.</p><p>Browsers that support the WebAudio API include Chrome, Firefox, Safari, and Edge.</p>",new Error})}drawProgressBar(e){document.querySelector(".jspsych-display-element").insertAdjacentHTML("afterbegin",'<div id="jspsych-progressbar-container"><span>'+e+'</span><div id="jspsych-progressbar-outer"><div id="jspsych-progressbar-inner"></div></div></div>')}updateProgressBar(){this.setProgressBar(this.getProgress().percent_complete/100)}setProgressBar(e){e=Math.max(Math.min(1,e),0),document.querySelector("#jspsych-progressbar-inner").style.width=e*100+"%",this.progress_bar_amount=e}getProgressBarCompleted(){return this.progress_bar_amount}}typeof window<"u"&&window.hasOwnProperty("webkitAudioContext")&&!window.hasOwnProperty("AudioContext")&&(window.AudioContext=webkitAudioContext);function MC(s){const e=new xC(s);return Object.defineProperties(e,Object.fromEntries(Object.entries({init:"`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.",ALL_KEYS:'jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.',NO_KEYS:'jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.',currentTimelineNodeID:"`currentTimelineNodeID()` was renamed to `getCurrentTimelineNodeID()` in jsPsych v7.",progress:"`progress()` was renamed to `getProgress()` in jsPsych v7.",startTime:"`startTime()` was renamed to `getStartTime()` in jsPsych v7.",totalTime:"`totalTime()` was renamed to `getTotalTime()` in jsPsych v7.",currentTrial:"`currentTrial()` was renamed to `getCurrentTrial()` in jsPsych v7.",initSettings:"`initSettings()` was renamed to `getInitSettings()` in jsPsych v7.",allTimelineVariables:"`allTimelineVariables()` was renamed to `getAllTimelineVariables()` in jsPsych v7."}).map(([n,r])=>[n,{get(){throw new Xi(r)}}]))),e}const SC={name:"canvas-keyboard-response",parameters:{stimulus:{type:Ze.FUNCTION,pretty_name:"Stimulus",default:void 0},choices:{type:Ze.KEYS,pretty_name:"Choices",default:"ALL_KEYS"},prompt:{type:Ze.HTML_STRING,pretty_name:"Prompt",default:null},stimulus_duration:{type:Ze.INT,pretty_name:"Stimulus duration",default:null},trial_duration:{type:Ze.INT,pretty_name:"Trial duration",default:null},response_ends_trial:{type:Ze.BOOL,pretty_name:"Response ends trial",default:!0},canvas_size:{type:Ze.INT,array:!0,pretty_name:"Canvas size",default:[500,500]}}};class _g{constructor(e){this.jsPsych=e}trial(e,t){var n='<div id="jspsych-canvas-keyboard-response-stimulus"><canvas id="jspsych-canvas-stimulus" height="'+t.canvas_size[0]+'" width="'+t.canvas_size[1]+'"></canvas></div>';t.prompt!==null&&(n+=t.prompt),e.innerHTML=n;let r=document.getElementById("jspsych-canvas-stimulus");t.stimulus(r);var a={rt:null,key:null};const l=()=>{this.jsPsych.pluginAPI.clearAllTimeouts(),typeof u<"u"&&this.jsPsych.pluginAPI.cancelKeyboardResponse(u);var h={rt:a.rt,response:a.key};e.innerHTML="",this.jsPsych.finishTrial(h)};var c=h=>{e.querySelector("#jspsych-canvas-keyboard-response-stimulus").className+=" responded",a.key==null&&(a=h),t.response_ends_trial&&l()};if(t.choices!="NO_KEYS")var u=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:c,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1});t.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-canvas-keyboard-response-stimulus").style.visibility="hidden"},t.stimulus_duration),t.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{l()},t.trial_duration)}simulate(e,t,n,r){t=="data-only"&&(r(),this.simulate_data_only(e,n)),t=="visual"&&this.simulate_visual(e,n,r)}simulate_data_only(e,t){const n=this.create_simulation_data(e,t);this.jsPsych.finishTrial(n)}simulate_visual(e,t,n){const r=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),n(),r.rt!==null&&this.jsPsych.pluginAPI.pressKey(r.response,r.rt)}create_simulation_data(e,t){const n={rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0),response:this.jsPsych.pluginAPI.getValidKey(e.choices)},r=this.jsPsych.pluginAPI.mergeSimulationData(n,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}}_g.info=SC;const EC={name:"canvas-button-response",parameters:{stimulus:{type:Ze.FUNCTION,pretty_name:"Stimulus",default:void 0},choices:{type:Ze.STRING,pretty_name:"Choices",default:void 0,array:!0},button_html:{type:Ze.HTML_STRING,pretty_name:"Button HTML",default:'<button class="jspsych-btn">%choice%</button>',array:!0},prompt:{type:Ze.HTML_STRING,pretty_name:"Prompt",default:null},stimulus_duration:{type:Ze.INT,pretty_name:"Stimulus duration",default:null},trial_duration:{type:Ze.INT,pretty_name:"Trial duration",default:null},margin_vertical:{type:Ze.STRING,pretty_name:"Margin vertical",default:"0px"},margin_horizontal:{type:Ze.STRING,pretty_name:"Margin horizontal",default:"8px"},response_ends_trial:{type:Ze.BOOL,pretty_name:"Response ends trial",default:!0},canvas_size:{type:Ze.INT,array:!0,pretty_name:"Canvas size",default:[500,500]}}};class vg{constructor(e){this.jsPsych=e}trial(e,t){var n='<div id="jspsych-canvas-button-response-stimulus"><canvas id="jspsych-canvas-stimulus" height="'+t.canvas_size[0]+'" width="'+t.canvas_size[1]+'"></canvas></div>',r=[];if(Array.isArray(t.button_html))t.button_html.length==t.choices.length?r=t.button_html:console.error("Error in canvas-button-response plugin. The length of the button_html array does not equal the length of the choices array");else for(var a=0;a<t.choices.length;a++)r.push(t.button_html);n+='<div id="jspsych-canvas-button-response-btngroup">';for(var a=0;a<t.choices.length;a++){var l=r[a].replace(/%choice%/g,t.choices[a]);n+='<div class="jspsych-canvas-button-response-button" style="display: inline-block; margin:'+t.margin_vertical+" "+t.margin_horizontal+'" id="jspsych-canvas-button-response-button-'+a+'" data-choice="'+a+'">'+l+"</div>"}n+="</div>",t.prompt!==null&&(n+=t.prompt),e.innerHTML=n;let c=document.getElementById("jspsych-canvas-stimulus");t.stimulus(c);for(var u=performance.now(),a=0;a<t.choices.length;a++)e.querySelector("#jspsych-canvas-button-response-button-"+a).addEventListener("click",_=>{var x=_.currentTarget,S=x.getAttribute("data-choice");p(S)});var h={rt:null,button:null};const d=()=>{this.jsPsych.pluginAPI.clearAllTimeouts();var m={rt:h.rt,response:h.button};e.innerHTML="",this.jsPsych.finishTrial(m)};function p(m){var _=performance.now(),x=Math.round(_-u);h.button=parseInt(m),h.rt=x,e.querySelector("#jspsych-canvas-button-response-stimulus").className+=" responded";for(var S=document.querySelectorAll(".jspsych-canvas-button-response-button button"),y=0;y<S.length;y++)S[y].setAttribute("disabled","disabled");t.response_ends_trial&&d()}t.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-canvas-button-response-stimulus").style.visibility="hidden"},t.stimulus_duration),t.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{d()},t.trial_duration)}simulate(e,t,n,r){t=="data-only"&&(r(),this.simulate_data_only(e,n)),t=="visual"&&this.simulate_visual(e,n,r)}create_simulation_data(e,t){const n={rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0),response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},r=this.jsPsych.pluginAPI.mergeSimulationData(n,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,t){const n=this.create_simulation_data(e,t);this.jsPsych.finishTrial(n)}simulate_visual(e,t,n){const r=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),n(),r.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`div[data-choice="${r.response}"] button`),r.rt)}}vg.info=EC;const TC={name:"html-button-response",parameters:{stimulus:{type:Ze.HTML_STRING,pretty_name:"Stimulus",default:void 0},choices:{type:Ze.STRING,pretty_name:"Choices",default:void 0,array:!0},button_html:{type:Ze.HTML_STRING,pretty_name:"Button HTML",default:'<button class="jspsych-btn">%choice%</button>',array:!0},prompt:{type:Ze.HTML_STRING,pretty_name:"Prompt",default:null},stimulus_duration:{type:Ze.INT,pretty_name:"Stimulus duration",default:null},trial_duration:{type:Ze.INT,pretty_name:"Trial duration",default:null},margin_vertical:{type:Ze.STRING,pretty_name:"Margin vertical",default:"0px"},margin_horizontal:{type:Ze.STRING,pretty_name:"Margin horizontal",default:"8px"},response_ends_trial:{type:Ze.BOOL,pretty_name:"Response ends trial",default:!0}}};class Uu{constructor(e){this.jsPsych=e}trial(e,t){var n='<div id="jspsych-html-button-response-stimulus">'+t.stimulus+"</div>",r=[];if(Array.isArray(t.button_html))t.button_html.length==t.choices.length?r=t.button_html:console.error("Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array");else for(var a=0;a<t.choices.length;a++)r.push(t.button_html);n+='<div id="jspsych-html-button-response-btngroup">';for(var a=0;a<t.choices.length;a++){var l=r[a].replace(/%choice%/g,t.choices[a]);n+='<div class="jspsych-html-button-response-button" style="display: inline-block; margin:'+t.margin_vertical+" "+t.margin_horizontal+'" id="jspsych-html-button-response-button-'+a+'" data-choice="'+a+'">'+l+"</div>"}n+="</div>",t.prompt!==null&&(n+=t.prompt),e.innerHTML=n;for(var c=performance.now(),a=0;a<t.choices.length;a++)e.querySelector("#jspsych-html-button-response-button-"+a).addEventListener("click",m=>{var _=m.currentTarget,x=_.getAttribute("data-choice");d(x)});var u={rt:null,button:null};const h=()=>{this.jsPsych.pluginAPI.clearAllTimeouts();var p={rt:u.rt,stimulus:t.stimulus,response:u.button};e.innerHTML="",this.jsPsych.finishTrial(p)};function d(p){var m=performance.now(),_=Math.round(m-c);u.button=parseInt(p),u.rt=_,e.querySelector("#jspsych-html-button-response-stimulus").className+=" responded";for(var x=document.querySelectorAll(".jspsych-html-button-response-button button"),S=0;S<x.length;S++)x[S].setAttribute("disabled","disabled");t.response_ends_trial&&h()}t.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-html-button-response-stimulus").style.visibility="hidden"},t.stimulus_duration),t.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(h,t.trial_duration)}simulate(e,t,n,r){t=="data-only"&&(r(),this.simulate_data_only(e,n)),t=="visual"&&this.simulate_visual(e,n,r)}create_simulation_data(e,t){const n={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0),response:this.jsPsych.randomization.randomInt(0,e.choices.length-1)},r=this.jsPsych.pluginAPI.mergeSimulationData(n,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,t){const n=this.create_simulation_data(e,t);this.jsPsych.finishTrial(n)}simulate_visual(e,t,n){const r=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),n(),r.rt!==null&&this.jsPsych.pluginAPI.clickTarget(a.querySelector(`div[data-choice="${r.response}"] button`),r.rt)}}Uu.info=TC;const bC={name:"html-keyboard-response",parameters:{stimulus:{type:Ze.HTML_STRING,pretty_name:"Stimulus",default:void 0},choices:{type:Ze.KEYS,pretty_name:"Choices",default:"ALL_KEYS"},prompt:{type:Ze.HTML_STRING,pretty_name:"Prompt",default:null},stimulus_duration:{type:Ze.INT,pretty_name:"Stimulus duration",default:null},trial_duration:{type:Ze.INT,pretty_name:"Trial duration",default:null},response_ends_trial:{type:Ze.BOOL,pretty_name:"Response ends trial",default:!0}}};class yg{constructor(e){this.jsPsych=e}trial(e,t){var n='<div id="jspsych-html-keyboard-response-stimulus">'+t.stimulus+"</div>";t.prompt!==null&&(n+=t.prompt),e.innerHTML=n;var r={rt:null,key:null};const a=()=>{this.jsPsych.pluginAPI.clearAllTimeouts(),typeof c<"u"&&this.jsPsych.pluginAPI.cancelKeyboardResponse(c);var u={rt:r.rt,stimulus:t.stimulus,response:r.key};e.innerHTML="",this.jsPsych.finishTrial(u)};var l=u=>{e.querySelector("#jspsych-html-keyboard-response-stimulus").className+=" responded",r.key==null&&(r=u),t.response_ends_trial&&a()};if(t.choices!="NO_KEYS")var c=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:l,valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1});t.stimulus_duration!==null&&this.jsPsych.pluginAPI.setTimeout(()=>{e.querySelector("#jspsych-html-keyboard-response-stimulus").style.visibility="hidden"},t.stimulus_duration),t.trial_duration!==null&&this.jsPsych.pluginAPI.setTimeout(a,t.trial_duration)}simulate(e,t,n,r){t=="data-only"&&(r(),this.simulate_data_only(e,n)),t=="visual"&&this.simulate_visual(e,n,r)}create_simulation_data(e,t){const n={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,.006666666666666667,!0),response:this.jsPsych.pluginAPI.getValidKey(e.choices)},r=this.jsPsych.pluginAPI.mergeSimulationData(n,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,r),r}simulate_data_only(e,t){const n=this.create_simulation_data(e,t);this.jsPsych.finishTrial(n)}simulate_visual(e,t,n){const r=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),n(),r.rt!==null&&this.jsPsych.pluginAPI.pressKey(r.response,r.rt)}}yg.info=bC;function lm(s,e){if(e===hE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Eu||e===wm){let t=s.getIndex();if(t===null){const l=[],c=s.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)l.push(u);s.setIndex(l),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,r=[];if(e===Eu)for(let l=1;l<=n;l++)r.push(t.getX(0)),r.push(t.getX(l)),r.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(r.push(t.getX(l)),r.push(t.getX(l+1)),r.push(t.getX(l+2))):(r.push(t.getX(l+2)),r.push(t.getX(l+1)),r.push(t.getX(l)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class AC extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new NC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new IC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new RC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new WC(t)})}load(e,t,n,r){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=Ia.extractUrlBase(e);l=Ia.resolveURL(h,this.path)}else l=Ia.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){r?r(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},u=new ig(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{a.parse(h,l,function(d){t(d),a.manager.itemEnd(e)},c)}catch(d){c(d)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a;const l={},c={},u=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===xg){try{l[Et.KHR_BINARY_GLTF]=new XC(e)}catch(p){r&&r(p);return}a=JSON.parse(l[Et.KHR_BINARY_GLTF].content)}else a=JSON.parse(u.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new rL(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](h);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,l[p.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const p=a.extensionsUsed[d],m=a.extensionsRequired||[];switch(p){case Et.KHR_MATERIALS_UNLIT:l[p]=new CC;break;case Et.KHR_DRACO_MESH_COMPRESSION:l[p]=new qC(a,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:l[p]=new jC;break;case Et.KHR_MESH_QUANTIZATION:l[p]=new YC;break;default:m.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(l),h.setPlugins(c),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}}function wC(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class RC{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const a=t.json,u=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const d=new it(16777215);u.color!==void 0&&d.setRGB(u.color[0],u.color[1],u.color[2],cn);const p=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Lu(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new m1(d),h.distance=p;break;case"spot":h=new d1(d),h.distance=p,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),h.decay=2,dr(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(t.cache,c,u)})}}class CC{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return zr}extendParams(e,t,n){const r=[];e.color=new it(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],cn),e.opacity=l[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,jt))}return Promise.all(r)}}class LC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class PC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(c,c)}return Promise.all(a)}}class IC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class DC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=r.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],cn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,jt)),l.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class NC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class UC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(c[0],c[1],c[2],cn),Promise.all(a)}}class OC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class FC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(c[0],c[1],c[2],cn),l.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,jt)),Promise.all(a)}}class BC{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(a)}}class zC{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],l=r.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class kC{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,l)}}class HC{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GC{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,u);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VC{constructor(e){this.name=Et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const u=r.byteOffset||0,h=r.byteLength||0,d=r.count,p=r.byteStride,m=new Uint8Array(c,u,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(d,p,m,r.mode,r.filter).then(function(_){return _.buffer}):l.ready.then(function(){const _=new ArrayBuffer(d*p);return l.decodeGltfBuffer(new Uint8Array(_),d,p,m,r.mode,r.filter),_})})}else return null}}class WC{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==ei.TRIANGLES&&h.mode!==ei.TRIANGLE_STRIP&&h.mode!==ei.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],u={};for(const h in l)c.push(this.parser.getDependency("accessor",l[h]).then(d=>(u[h]=d,u[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const d=h.pop(),p=d.isGroup?d.children:[d],m=h[0].count,_=[];for(const x of p){const S=new yt,y=new H,v=new Ti,P=new H(1,1,1),A=new KR(x.geometry,x.material,m);for(let R=0;R<m;R++)u.TRANSLATION&&y.fromBufferAttribute(u.TRANSLATION,R),u.ROTATION&&v.fromBufferAttribute(u.ROTATION,R),u.SCALE&&P.fromBufferAttribute(u.SCALE,R),A.setMatrixAt(R,S.compose(y,v,P));for(const R in u)if(R==="_COLOR_0"){const F=u[R];A.instanceColor=new Ru(F.array,F.itemSize,F.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&x.geometry.setAttribute(R,u[R]);Xt.prototype.copy.call(A,x),this.parser.assignFinalMaterial(A),_.push(A)}return d.isGroup?(d.clear(),d.add(..._),d):_[0]}))}}const xg="glTF",Aa=12,cm={JSON:1313821514,BIN:5130562};class XC{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Aa,a=new DataView(e,Aa);let l=0;for(;l<r;){const c=a.getUint32(l,!0);l+=4;const u=a.getUint32(l,!0);if(l+=4,u===cm.JSON){const h=new Uint8Array(e,Aa+l,c);this.content=n.decode(h)}else if(u===cm.BIN){const h=Aa+l;this.body=e.slice(h,h+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},u={},h={};for(const d in l){const p=Ou[d]||d.toLowerCase();c[p]=l[d]}for(const d in e.attributes){const p=Ou[d]||d.toLowerCase();if(l[d]!==void 0){const m=n.accessors[e.attributes[d]],_=ks[m.componentType];h[p]=_.name,u[p]=m.normalized===!0}}return t.getDependency("bufferView",a).then(function(d){return new Promise(function(p,m){r.decodeDracoFile(d,function(_){for(const x in _.attributes){const S=_.attributes[x],y=u[x];y!==void 0&&(S.normalized=y)}p(_)},c,h,cn,m)})})}}class jC{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class YC{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}}class Mg extends za{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let l=0;l!==r;l++)t[l]=n[a+l];return t}interpolate_(e,t,n,r){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=c*2,h=c*3,d=r-t,p=(n-t)/d,m=p*p,_=m*p,x=e*h,S=x-h,y=-2*_+3*m,v=_-m,P=1-y,A=v-m+p;for(let R=0;R!==c;R++){const F=l[S+R+c],U=l[S+R+u]*d,D=l[x+R+c],J=l[x+R]*d;a[R]=P*F+A*U+y*D+v*J}return a}}const KC=new Ti;class ZC extends Mg{interpolate_(e,t,n,r){const a=super.interpolate_(e,t,n,r);return KC.fromArray(a).normalize().toArray(a),a}}const ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:ln,9729:Dn,9984:Su,9985:ym,9986:al,9987:Wr},hm={33071:ti,33648:ul,10497:Vs},pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$C={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Na},mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JC(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),s.DefaultMaterial}function Ur(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function dr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QC(s,e,t){let n=!1,r=!1,a=!1;for(let h=0,d=e.length;h<d;h++){const p=e[h];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(s);const l=[],c=[],u=[];for(let h=0,d=e.length;h<d;h++){const p=e[h];if(n){const m=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;l.push(m)}if(r){const m=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;c.push(m)}if(a){const m=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;u.push(m)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],m=h[2];return n&&(s.morphAttributes.position=d),r&&(s.morphAttributes.normal=p),a&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function eL(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tL(s){let e;const t=s.extensions&&s.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gu(t.attributes):e=s.indices+":"+gu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)e+=":"+gu(s.targets[n]);return e}function gu(s){let e="";const t=Object.keys(s).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Fu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nL(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iL=new yt;class rL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&a<98?this.textureLoader=new h1(this.options.manager):this.textureLoader=new v1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ig(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][r.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:r.asset,parser:n,userData:{}};return Ur(a,c,r),dr(c,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const l=t[r].joints;for(let c=0,u=l.length;c<u;c++)e[l[c]].isBone=!0}for(let r=0,a=e.length;r<a;r++){const l=e[r];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),a=(l,c)=>{const u=this.associations.get(l);u!=null&&this.associations.set(c,u);for(const[h,d]of l.children.entries())a(d,c.children[h])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,l){n.load(Ia.resolveURL(t.uri,r.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const l=pu[r.type],c=ks[r.componentType],u=r.normalized===!0,h=new c(r.count*l);return Promise.resolve(new wn(h,l,u))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(l){const c=l[0],u=pu[r.type],h=ks[r.componentType],d=h.BYTES_PER_ELEMENT,p=d*u,m=r.byteOffset||0,_=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let S,y;if(_&&_!==p){const v=Math.floor(m/_),P="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let A=t.cache.get(P);A||(S=new h(c,v*_,r.count*_/d),A=new VR(S,_/d),t.cache.add(P,A)),y=new qu(A,u,m%_/d,x)}else c===null?S=new h(r.count*u):S=new h(c,m,r.count*u),y=new wn(S,u,x);if(r.sparse!==void 0){const v=pu.SCALAR,P=ks[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,R=r.sparse.values.byteOffset||0,F=new P(l[1],A,r.sparse.count*v),U=new h(l[2],R,r.sparse.count*u);c!==null&&(y=new wn(y.array.slice(),y.itemSize,y.normalized));for(let D=0,J=F.length;D<J;D++){const w=F[D];if(y.setX(w,U[D*u]),u>=2&&y.setY(w,U[D*u+1]),u>=3&&y.setZ(w,U[D*u+2]),u>=4&&y.setW(w,U[D*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,l=t.images[a];let c=this.textureLoader;if(l.uri){const u=n.manager.getHandler(l.uri);u!==null&&(c=u)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,n){const r=this,a=this.json,l=a.textures[e],c=a.images[t],u=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=l.name||c.name||"",d.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(d.name=c.uri);const m=(a.samplers||{})[l.sampler]||{};return d.magFilter=um[m.magFilter]||Dn,d.minFilter=um[m.minFilter]||Wr,d.wrapS=hm[m.wrapS]||Vs,d.wrapT=hm[m.wrapT]||Vs,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const l=r.images[e],c=self.URL||self.webkitURL;let u=l.uri||"",h=!1;if(l.bufferView!==void 0)u=n.getDependency("bufferView",l.bufferView).then(function(p){h=!0;const m=new Blob([p],{type:l.mimeType});return u=c.createObjectURL(m),u});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(p){return new Promise(function(m,_){let x=m;t.isImageBitmapLoader===!0&&(x=function(S){const y=new pn(S);y.needsUpdate=!0,m(y)}),t.load(Ia.resolveURL(p,a.path),x,void 0,_)})}).then(function(p){return h===!0&&c.revokeObjectURL(u),p.userData.mimeType=l.mimeType||nL(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),p});return this.sourceCache[e]=d,d}assignTexture(e,t,n,r){const a=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),a.extensions[Et.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=a.associations.get(l);l=a.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),a.associations.set(l,u)}}return r!==void 0&&(l.colorSpace=r),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Qm,Ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Jm,Ei.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(r||a||l){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),a&&(u.vertexColors=!0),l&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return Oa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,a=n.materials[e];let l;const c={},u=a.extensions||{},h=[];if(u[Et.KHR_MATERIALS_UNLIT]){const p=r[Et.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),h.push(p.extendParams(c,a,t))}else{const p=a.pbrMetallicRoughness||{};if(c.color=new it(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const m=p.baseColorFactor;c.color.setRGB(m[0],m[1],m[2],cn),c.opacity=m[3]}p.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",p.baseColorTexture,jt)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=Mi);const d=a.alphaMode||mu.OPAQUE;if(d===mu.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===mu.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==zr&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new tt(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;c.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&l!==zr&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==zr){const p=a.emissiveFactor;c.emissive=new it().setRGB(p[0],p[1],p[2],cn)}return a.emissiveTexture!==void 0&&l!==zr&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,jt)),Promise.all(h).then(function(){const p=new l(c);return a.name&&(p.name=a.name),dr(p,a),t.associations.set(p,{materials:e}),a.extensions&&Ur(r,p,a),p})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function a(c){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(u){return fm(u,c,t)})}const l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c],d=tL(h),p=r[d];if(p)l.push(p.promise);else{let m;h.extensions&&h.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?m=a(h):m=fm(new Ai,h,t),r[d]={primitive:h,promise:m},l.push(m)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,r=this.extensions,a=n.meshes[e],l=a.primitives,c=[];for(let u=0,h=l.length;u<h;u++){const d=l[u].material===void 0?JC(this.cache):this.getDependency("material",l[u].material);c.push(d)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(u){const h=u.slice(0,u.length-1),d=u[u.length-1],p=[];for(let _=0,x=d.length;_<x;_++){const S=d[_],y=l[_];let v;const P=h[_];if(y.mode===ei.TRIANGLES||y.mode===ei.TRIANGLE_STRIP||y.mode===ei.TRIANGLE_FAN||y.mode===void 0)v=a.isSkinnedMesh===!0?new XR(S,P):new ri(S,P),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),y.mode===ei.TRIANGLE_STRIP?v.geometry=lm(v.geometry,wm):y.mode===ei.TRIANGLE_FAN&&(v.geometry=lm(v.geometry,Eu));else if(y.mode===ei.LINES)v=new ZR(S,P);else if(y.mode===ei.LINE_STRIP)v=new Yu(S,P);else if(y.mode===ei.LINE_LOOP)v=new $R(S,P);else if(y.mode===ei.POINTS)v=new JR(S,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(v.geometry.morphAttributes).length>0&&eL(v,a),v.name=t.createUniqueName(a.name||"mesh_"+e),dr(v,a),y.extensions&&Ur(r,v,y),t.assignFinalMaterial(v),p.push(v)}for(let _=0,x=p.length;_<x;_++)t.associations.set(p[_],{meshes:e,primitives:_});if(p.length===1)return a.extensions&&Ur(r,p[0],a),p[0];const m=new kr;a.extensions&&Ur(r,m,a),t.associations.set(m,{meshes:e});for(let _=0,x=p.length;_<x;_++)m.add(p[_]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(Pm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Wu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),dr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const a=r.pop(),l=r,c=[],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];if(p){c.push(p);const m=new yt;a!==null&&m.fromArray(a.array,h*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new ju(c,u)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,l=[],c=[],u=[],h=[],d=[];for(let p=0,m=r.channels.length;p<m;p++){const _=r.channels[p],x=r.samplers[_.sampler],S=_.target,y=S.node,v=r.parameters!==void 0?r.parameters[x.input]:x.input,P=r.parameters!==void 0?r.parameters[x.output]:x.output;S.node!==void 0&&(l.push(this.getDependency("node",y)),c.push(this.getDependency("accessor",v)),u.push(this.getDependency("accessor",P)),h.push(x),d.push(S))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const m=p[0],_=p[1],x=p[2],S=p[3],y=p[4],v=[];for(let P=0,A=m.length;P<A;P++){const R=m[P],F=_[P],U=x[P],D=S[P],J=y[P];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const w=n._createAnimationTracks(R,F,U,D,J);if(w)for(let I=0;I<w.length;I++)v.push(w[I])}return new s1(a,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){const l=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let u=0,h=r.weights.length;u<h;u++)c.morphTargetInfluences[u]=r.weights[u]}),l})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),l=[],c=r.children||[];for(let h=0,d=c.length;h<d;h++)l.push(n.getDependency("node",c[h]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(l),u]).then(function(h){const d=h[0],p=h[1],m=h[2];m!==null&&d.traverse(function(_){_.isSkinnedMesh&&_.bind(m,iL)});for(let _=0,x=p.length;_<x;_++)d.add(p[_]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],l=a.name?r.createUniqueName(a.name):"",c=[],u=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&c.push(u),a.camera!==void 0&&c.push(r.getDependency("camera",a.camera).then(function(h){return r._getNodeRef(r.cameraCache,a.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let d;if(a.isBone===!0?d=new $m:h.length>1?d=new kr:h.length===1?d=h[0]:d=new Xt,d!==h[0])for(let p=0,m=h.length;p<m;p++)d.add(h[p]);if(a.name&&(d.userData.name=a.name,d.name=l),dr(d,a),a.extensions&&Ur(n,d,a),a.matrix!==void 0){const p=new yt;p.fromArray(a.matrix),d.applyMatrix4(p)}else a.translation!==void 0&&d.position.fromArray(a.translation),a.rotation!==void 0&&d.quaternion.fromArray(a.rotation),a.scale!==void 0&&d.scale.fromArray(a.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,a=new kr;n.name&&(a.name=r.createUniqueName(n.name)),dr(a,n),n.extensions&&Ur(t,a,n);const l=n.nodes||[],c=[];for(let u=0,h=l.length;u<h;u++)c.push(r.getDependency("node",l[u]));return Promise.all(c).then(function(u){for(let d=0,p=u.length;d<p;d++)a.add(u[d]);const h=d=>{const p=new Map;for(const[m,_]of r.associations)(m instanceof Ei||m instanceof pn)&&p.set(m,_);return d.traverse(m=>{const _=r.associations.get(m);_!=null&&p.set(m,_)}),p};return r.associations=h(a),a})}_createAnimationTracks(e,t,n,r,a){const l=[],c=e.name?e.name:e.uuid,u=[];hr[a.path]===hr.weights?e.traverse(function(m){m.morphTargetInfluences&&u.push(m.name?m.name:m.uuid)}):u.push(c);let h;switch(hr[a.path]){case hr.weights:h=Ys;break;case hr.rotation:h=jr;break;case hr.position:case hr.scale:h=Ks;break;default:switch(n.itemSize){case 1:h=Ys;break;case 2:case 3:default:h=Ks;break}break}const d=r.interpolation!==void 0?$C[r.interpolation]:Xs,p=this._getArrayFromAccessor(n);for(let m=0,_=u.length;m<_;m++){const x=new h(u[m]+"."+hr[a.path],t.array,p,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),l.push(x)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fu(t.constructor),r=new Float32Array(t.length);for(let a=0,l=t.length;a<l;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof jr?ZC:Mg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sL(s,e,t){const n=e.attributes,r=new mi;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],u=c.min,h=c.max;if(u!==void 0&&h!==void 0){if(r.set(new H(u[0],u[1],u[2]),new H(h[0],h[1],h[2])),c.normalized){const d=Fu(ks[c.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new H,u=new H;for(let h=0,d=a.length;h<d;h++){const p=a[h];if(p.POSITION!==void 0){const m=t.json.accessors[p.POSITION],_=m.min,x=m.max;if(_!==void 0&&x!==void 0){if(u.setX(Math.max(Math.abs(_[0]),Math.abs(x[0]))),u.setY(Math.max(Math.abs(_[1]),Math.abs(x[1]))),u.setZ(Math.max(Math.abs(_[2]),Math.abs(x[2]))),m.normalized){const S=Fu(ks[m.componentType]);u.multiplyScalar(S)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const l=new bi;r.getCenter(l.center),l.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=l}function fm(s,e,t){const n=e.attributes,r=[];function a(l,c){return t.getDependency("accessor",l).then(function(u){s.setAttribute(c,u)})}for(const l in n){const c=Ou[l]||l.toLowerCase();c in s.attributes||r.push(a(n[l],c))}if(e.indices!==void 0&&!s.index){const l=t.getDependency("accessor",e.indices).then(function(c){s.setIndex(c)});r.push(l)}return Ct.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),dr(s,e),sL(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?QC(s,e.targets,t):s})}const dm={type:"change"},_u={type:"start"},pm={type:"end"},sl=new Fa,mm=new fr,aL=Math.cos(70*Pm.DEG2RAD);class oL extends Yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",ye),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dm),n.update(),a=r.NONE},this.update=function(){const O=new H,me=new Ti().setFromUnitVectors(e.up,new H(0,1,0)),we=me.clone().invert(),Ee=new H,Ge=new Ti,ct=new H,xt=2*Math.PI;return function(Re=null){const z=n.object.position;O.copy(z).sub(n.target),O.applyQuaternion(me),c.setFromVector3(O),n.autoRotate&&a===r.NONE&&$(w(Re)),n.enableDamping?(c.theta+=u.theta*n.dampingFactor,c.phi+=u.phi*n.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);let be=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;isFinite(be)&&isFinite(Ae)&&(be<-Math.PI?be+=xt:be>Math.PI&&(be-=xt),Ae<-Math.PI?Ae+=xt:Ae>Math.PI&&(Ae-=xt),be<=Ae?c.theta=Math.max(be,Math.min(Ae,c.theta)):c.theta=c.theta>(be+Ae)/2?Math.max(be,c.theta):Math.min(Ae,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?c.radius=ue(c.radius):c.radius=ue(c.radius*h),O.setFromSpherical(c),O.applyQuaternion(we),z.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0));let Ye=!1;if(n.zoomToCursor&&U){let qe=null;if(n.object.isPerspectiveCamera){const bt=O.length();qe=ue(bt*h);const At=bt-qe;n.object.position.addScaledVector(R,At),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const bt=new H(F.x,F.y,0);bt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Ye=!0;const At=new H(F.x,F.y,0);At.unproject(n.object),n.object.position.sub(At).add(bt),n.object.updateMatrixWorld(),qe=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(qe).add(n.object.position):(sl.origin.copy(n.object.position),sl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sl.direction))<aL?e.lookAt(n.target):(mm.setFromNormalAndCoplanarPoint(n.object.up,n.target),sl.intersectPlane(mm,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Ye=!0);return h=1,U=!1,Ye||Ee.distanceToSquared(n.object.position)>l||8*(1-Ge.dot(n.object.quaternion))>l||ct.distanceToSquared(n.target)>0?(n.dispatchEvent(dm),Ee.copy(n.object.position),Ge.copy(n.object.quaternion),ct.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ue),n.domElement.removeEventListener("pointerdown",ze),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ye),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,c=new sm,u=new sm;let h=1;const d=new H,p=new tt,m=new tt,_=new tt,x=new tt,S=new tt,y=new tt,v=new tt,P=new tt,A=new tt,R=new H,F=new tt;let U=!1;const D=[],J={};function w(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function I(O){const me=Math.abs(O)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function $(O){u.theta-=O}function ie(O){u.phi-=O}const Me=function(){const O=new H;return function(we,Ee){O.setFromMatrixColumn(Ee,0),O.multiplyScalar(-we),d.add(O)}}(),k=function(){const O=new H;return function(we,Ee){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ee,1):(O.setFromMatrixColumn(Ee,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(we),d.add(O)}}(),q=function(){const O=new H;return function(we,Ee){const Ge=n.domElement;if(n.object.isPerspectiveCamera){const ct=n.object.position;O.copy(ct).sub(n.target);let xt=O.length();xt*=Math.tan(n.object.fov/2*Math.PI/180),Me(2*we*xt/Ge.clientHeight,n.object.matrix),k(2*Ee*xt/Ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Me(we*(n.object.right-n.object.left)/n.object.zoom/Ge.clientWidth,n.object.matrix),k(Ee*(n.object.top-n.object.bottom)/n.object.zoom/Ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(O,me){if(!n.zoomToCursor)return;U=!0;const we=n.domElement.getBoundingClientRect(),Ee=O-we.left,Ge=me-we.top,ct=we.width,xt=we.height;F.x=Ee/ct*2-1,F.y=-(Ge/xt)*2+1,R.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function ue(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function he(O){p.set(O.clientX,O.clientY)}function Se(O){se(O.clientX,O.clientX),v.set(O.clientX,O.clientY)}function Te(O){x.set(O.clientX,O.clientY)}function te(O){m.set(O.clientX,O.clientY),_.subVectors(m,p).multiplyScalar(n.rotateSpeed);const me=n.domElement;$(2*Math.PI*_.x/me.clientHeight),ie(2*Math.PI*_.y/me.clientHeight),p.copy(m),n.update()}function _e(O){P.set(O.clientX,O.clientY),A.subVectors(P,v),A.y>0?ee(I(A.y)):A.y<0&&ce(I(A.y)),v.copy(P),n.update()}function Le(O){S.set(O.clientX,O.clientY),y.subVectors(S,x).multiplyScalar(n.panSpeed),q(y.x,y.y),x.copy(S),n.update()}function Ne(O){se(O.clientX,O.clientY),O.deltaY<0?ce(I(O.deltaY)):O.deltaY>0&&ee(I(O.deltaY)),n.update()}function Oe(O){let me=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?ie(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?ie(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),me=!0;break}me&&(O.preventDefault(),n.update())}function fe(O){if(D.length===1)p.set(O.pageX,O.pageY);else{const me=gt(O),we=.5*(O.pageX+me.x),Ee=.5*(O.pageY+me.y);p.set(we,Ee)}}function pe(O){if(D.length===1)x.set(O.pageX,O.pageY);else{const me=gt(O),we=.5*(O.pageX+me.x),Ee=.5*(O.pageY+me.y);x.set(we,Ee)}}function He(O){const me=gt(O),we=O.pageX-me.x,Ee=O.pageY-me.y,Ge=Math.sqrt(we*we+Ee*Ee);v.set(0,Ge)}function lt(O){n.enableZoom&&He(O),n.enablePan&&pe(O)}function j(O){n.enableZoom&&He(O),n.enableRotate&&fe(O)}function Vt(O){if(D.length==1)m.set(O.pageX,O.pageY);else{const we=gt(O),Ee=.5*(O.pageX+we.x),Ge=.5*(O.pageY+we.y);m.set(Ee,Ge)}_.subVectors(m,p).multiplyScalar(n.rotateSpeed);const me=n.domElement;$(2*Math.PI*_.x/me.clientHeight),ie(2*Math.PI*_.y/me.clientHeight),p.copy(m)}function re(O){if(D.length===1)S.set(O.pageX,O.pageY);else{const me=gt(O),we=.5*(O.pageX+me.x),Ee=.5*(O.pageY+me.y);S.set(we,Ee)}y.subVectors(S,x).multiplyScalar(n.panSpeed),q(y.x,y.y),x.copy(S)}function Ce(O){const me=gt(O),we=O.pageX-me.x,Ee=O.pageY-me.y,Ge=Math.sqrt(we*we+Ee*Ee);P.set(0,Ge),A.set(0,Math.pow(P.y/v.y,n.zoomSpeed)),ee(A.y),v.copy(P);const ct=(O.pageX+me.x)*.5,xt=(O.pageY+me.y)*.5;se(ct,xt)}function xe(O){n.enableZoom&&Ce(O),n.enablePan&&re(O)}function Xe(O){n.enableZoom&&Ce(O),n.enableRotate&&Vt(O)}function ze(O){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",E)),je(O),O.pointerType==="touch"?ke(O):W(O))}function L(O){n.enabled!==!1&&(O.pointerType==="touch"?Ie(O):ae(O))}function E(O){nt(O),D.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(pm),a=r.NONE}function W(O){let me;switch(O.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case _s.DOLLY:if(n.enableZoom===!1)return;Se(O),a=r.DOLLY;break;case _s.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;Te(O),a=r.PAN}else{if(n.enableRotate===!1)return;he(O),a=r.ROTATE}break;case _s.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;he(O),a=r.ROTATE}else{if(n.enablePan===!1)return;Te(O),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(_u)}function ae(O){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;te(O);break;case r.DOLLY:if(n.enableZoom===!1)return;_e(O);break;case r.PAN:if(n.enablePan===!1)return;Le(O);break}}function de(O){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(O.preventDefault(),n.dispatchEvent(_u),Ne(O),n.dispatchEvent(pm))}function ye(O){n.enabled===!1||n.enablePan===!1||Oe(O)}function ke(O){switch(ve(O),D.length){case 1:switch(n.touches.ONE){case vs.ROTATE:if(n.enableRotate===!1)return;fe(O),a=r.TOUCH_ROTATE;break;case vs.PAN:if(n.enablePan===!1)return;pe(O),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case vs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;lt(O),a=r.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(O),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(_u)}function Ie(O){switch(ve(O),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Vt(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;re(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(O),n.update();break;default:a=r.NONE}}function Ue(O){n.enabled!==!1&&O.preventDefault()}function je(O){D.push(O.pointerId)}function nt(O){delete J[O.pointerId];for(let me=0;me<D.length;me++)if(D[me]==O.pointerId){D.splice(me,1);return}}function ve(O){let me=J[O.pointerId];me===void 0&&(me=new tt,J[O.pointerId]=me),me.set(O.pageX,O.pageY)}function gt(O){const me=O.pointerId===D[0]?D[1]:D[0];return J[me]}n.domElement.addEventListener("contextmenu",Ue),n.domElement.addEventListener("pointerdown",ze),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}var wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lL(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _l={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */_l.exports;(function(s,e){(function(){var t,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,m=2,_=4,x=1,S=2,y=1,v=2,P=4,A=8,R=16,F=32,U=64,D=128,J=256,w=512,I=30,$="...",ie=800,Me=16,k=1,q=2,ee=3,ce=1/0,se=9007199254740991,ue=17976931348623157e292,he=NaN,Se=4294967295,Te=Se-1,te=Se>>>1,_e=[["ary",D],["bind",y],["bindKey",v],["curry",A],["curryRight",R],["flip",w],["partial",F],["partialRight",U],["rearg",J]],Le="[object Arguments]",Ne="[object Array]",Oe="[object AsyncFunction]",fe="[object Boolean]",pe="[object Date]",He="[object DOMException]",lt="[object Error]",j="[object Function]",Vt="[object GeneratorFunction]",re="[object Map]",Ce="[object Number]",xe="[object Null]",Xe="[object Object]",ze="[object Promise]",L="[object Proxy]",E="[object RegExp]",W="[object Set]",ae="[object String]",de="[object Symbol]",ye="[object Undefined]",ke="[object WeakMap]",Ie="[object WeakSet]",Ue="[object ArrayBuffer]",je="[object DataView]",nt="[object Float32Array]",ve="[object Float64Array]",gt="[object Int8Array]",O="[object Int16Array]",me="[object Int32Array]",we="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Ge="[object Uint16Array]",ct="[object Uint32Array]",xt=/\b__p \+= '';/g,ut=/\b(__p \+=) '' \+/g,Re=/(__e\(.*?\)|\b__t\)) \+\n'';/g,z=/&(?:amp|lt|gt|quot|#39);/g,be=/[&<>"']/g,Ae=RegExp(z.source),Ye=RegExp(be.source),qe=/<%-([\s\S]+?)%>/g,bt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,$t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,un=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/[\\^$.*+?()[\]{}|]/g,Vn=RegExp(Qt.source),$r=/^\s+/,El=/\s/,Jr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ka=/\{\n\/\* \[wrapped with (.+)\] \*/,Qr=/,? & /,Ha=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ga=/[()=,{}\[\]\/\s]/,Tl=/\\(\\)?/g,bl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Va=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,K=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,Y=/^(?:0|[1-9]\d*)$/,Fe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ve=/($^)/,$e=/['\n\r\u2028\u2029\\]/g,Je="\\ud800-\\udfff",ht="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",Ht=ht+rt+at,mn="\\u2700-\\u27bf",Yt="a-z\\xdf-\\xf6\\xf8-\\xff",si="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",ea=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bt="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",ta=si+Ft+dt+ea,Ri="['’]",na="["+Je+"]",en="["+ta+"]",Wn="["+Ht+"]",es="\\d+",Rn="["+mn+"]",ts="["+Yt+"]",Wa="[^"+Je+ta+es+mn+Yt+Bt+"]",ns="\\ud83c[\\udffb-\\udfff]",Eg="(?:"+Wn+"|"+ns+")",th="[^"+Je+"]",Al="(?:\\ud83c[\\udde6-\\uddff]){2}",wl="[\\ud800-\\udbff][\\udc00-\\udfff]",is="["+Bt+"]",nh="\\u200d",ih="(?:"+ts+"|"+Wa+")",Tg="(?:"+is+"|"+Wa+")",rh="(?:"+Ri+"(?:d|ll|m|re|s|t|ve))?",sh="(?:"+Ri+"(?:D|LL|M|RE|S|T|VE))?",ah=Eg+"?",oh="["+gi+"]?",bg="(?:"+nh+"(?:"+[th,Al,wl].join("|")+")"+oh+ah+")*",Ag="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",lh=oh+ah+bg,Rg="(?:"+[Rn,Al,wl].join("|")+")"+lh,Cg="(?:"+[th+Wn+"?",Wn,Al,wl,na].join("|")+")",Lg=RegExp(Ri,"g"),Pg=RegExp(Wn,"g"),Rl=RegExp(ns+"(?="+ns+")|"+Cg+lh,"g"),Ig=RegExp([is+"?"+ts+"+"+rh+"(?="+[en,is,"$"].join("|")+")",Tg+"+"+sh+"(?="+[en,is+ih,"$"].join("|")+")",is+"?"+ih+"+"+rh,is+"+"+sh,wg,Ag,es,Rg].join("|"),"g"),Dg=RegExp("["+nh+Je+Ht+gi+"]"),Ng=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ug=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Og=-1,zt={};zt[nt]=zt[ve]=zt[gt]=zt[O]=zt[me]=zt[we]=zt[Ee]=zt[Ge]=zt[ct]=!0,zt[Le]=zt[Ne]=zt[Ue]=zt[fe]=zt[je]=zt[pe]=zt[lt]=zt[j]=zt[re]=zt[Ce]=zt[Xe]=zt[E]=zt[W]=zt[ae]=zt[ke]=!1;var Ot={};Ot[Le]=Ot[Ne]=Ot[Ue]=Ot[je]=Ot[fe]=Ot[pe]=Ot[nt]=Ot[ve]=Ot[gt]=Ot[O]=Ot[me]=Ot[re]=Ot[Ce]=Ot[Xe]=Ot[E]=Ot[W]=Ot[ae]=Ot[de]=Ot[we]=Ot[Ee]=Ot[Ge]=Ot[ct]=!0,Ot[lt]=Ot[j]=Ot[ke]=!1;var Fg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Bg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},kg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hg=parseFloat,Gg=parseInt,ch=typeof wa=="object"&&wa&&wa.Object===Object&&wa,Vg=typeof self=="object"&&self&&self.Object===Object&&self,hn=ch||Vg||Function("return this")(),Cl=e&&!e.nodeType&&e,Sr=Cl&&!0&&s&&!s.nodeType&&s,uh=Sr&&Sr.exports===Cl,Ll=uh&&ch.process,Xn=function(){try{var G=Sr&&Sr.require&&Sr.require("util").types;return G||Ll&&Ll.binding&&Ll.binding("util")}catch{}}(),hh=Xn&&Xn.isArrayBuffer,fh=Xn&&Xn.isDate,dh=Xn&&Xn.isMap,ph=Xn&&Xn.isRegExp,mh=Xn&&Xn.isSet,gh=Xn&&Xn.isTypedArray;function Un(G,ne,Z){switch(Z.length){case 0:return G.call(ne);case 1:return G.call(ne,Z[0]);case 2:return G.call(ne,Z[0],Z[1]);case 3:return G.call(ne,Z[0],Z[1],Z[2])}return G.apply(ne,Z)}function Wg(G,ne,Z,Be){for(var st=-1,wt=G==null?0:G.length;++st<wt;){var tn=G[st];ne(Be,tn,Z(tn),G)}return Be}function qn(G,ne){for(var Z=-1,Be=G==null?0:G.length;++Z<Be&&ne(G[Z],Z,G)!==!1;);return G}function Xg(G,ne){for(var Z=G==null?0:G.length;Z--&&ne(G[Z],Z,G)!==!1;);return G}function _h(G,ne){for(var Z=-1,Be=G==null?0:G.length;++Z<Be;)if(!ne(G[Z],Z,G))return!1;return!0}function $i(G,ne){for(var Z=-1,Be=G==null?0:G.length,st=0,wt=[];++Z<Be;){var tn=G[Z];ne(tn,Z,G)&&(wt[st++]=tn)}return wt}function Xa(G,ne){var Z=G==null?0:G.length;return!!Z&&rs(G,ne,0)>-1}function Pl(G,ne,Z){for(var Be=-1,st=G==null?0:G.length;++Be<st;)if(Z(ne,G[Be]))return!0;return!1}function Gt(G,ne){for(var Z=-1,Be=G==null?0:G.length,st=Array(Be);++Z<Be;)st[Z]=ne(G[Z],Z,G);return st}function Ji(G,ne){for(var Z=-1,Be=ne.length,st=G.length;++Z<Be;)G[st+Z]=ne[Z];return G}function Il(G,ne,Z,Be){var st=-1,wt=G==null?0:G.length;for(Be&&wt&&(Z=G[++st]);++st<wt;)Z=ne(Z,G[st],st,G);return Z}function qg(G,ne,Z,Be){var st=G==null?0:G.length;for(Be&&st&&(Z=G[--st]);st--;)Z=ne(Z,G[st],st,G);return Z}function Dl(G,ne){for(var Z=-1,Be=G==null?0:G.length;++Z<Be;)if(ne(G[Z],Z,G))return!0;return!1}var jg=Nl("length");function Yg(G){return G.split("")}function Kg(G){return G.match(Ha)||[]}function vh(G,ne,Z){var Be;return Z(G,function(st,wt,tn){if(ne(st,wt,tn))return Be=wt,!1}),Be}function qa(G,ne,Z,Be){for(var st=G.length,wt=Z+(Be?1:-1);Be?wt--:++wt<st;)if(ne(G[wt],wt,G))return wt;return-1}function rs(G,ne,Z){return ne===ne?o_(G,ne,Z):qa(G,yh,Z)}function Zg(G,ne,Z,Be){for(var st=Z-1,wt=G.length;++st<wt;)if(Be(G[st],ne))return st;return-1}function yh(G){return G!==G}function xh(G,ne){var Z=G==null?0:G.length;return Z?Ol(G,ne)/Z:he}function Nl(G){return function(ne){return ne==null?t:ne[G]}}function Ul(G){return function(ne){return G==null?t:G[ne]}}function Mh(G,ne,Z,Be,st){return st(G,function(wt,tn,Nt){Z=Be?(Be=!1,wt):ne(Z,wt,tn,Nt)}),Z}function $g(G,ne){var Z=G.length;for(G.sort(ne);Z--;)G[Z]=G[Z].value;return G}function Ol(G,ne){for(var Z,Be=-1,st=G.length;++Be<st;){var wt=ne(G[Be]);wt!==t&&(Z=Z===t?wt:Z+wt)}return Z}function Fl(G,ne){for(var Z=-1,Be=Array(G);++Z<G;)Be[Z]=ne(Z);return Be}function Jg(G,ne){return Gt(ne,function(Z){return[Z,G[Z]]})}function Sh(G){return G&&G.slice(0,Ah(G)+1).replace($r,"")}function On(G){return function(ne){return G(ne)}}function Bl(G,ne){return Gt(ne,function(Z){return G[Z]})}function ia(G,ne){return G.has(ne)}function Eh(G,ne){for(var Z=-1,Be=G.length;++Z<Be&&rs(ne,G[Z],0)>-1;);return Z}function Th(G,ne){for(var Z=G.length;Z--&&rs(ne,G[Z],0)>-1;);return Z}function Qg(G,ne){for(var Z=G.length,Be=0;Z--;)G[Z]===ne&&++Be;return Be}var e_=Ul(Fg),t_=Ul(Bg);function n_(G){return"\\"+kg[G]}function i_(G,ne){return G==null?t:G[ne]}function ss(G){return Dg.test(G)}function r_(G){return Ng.test(G)}function s_(G){for(var ne,Z=[];!(ne=G.next()).done;)Z.push(ne.value);return Z}function zl(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Be,st){Z[++ne]=[st,Be]}),Z}function bh(G,ne){return function(Z){return G(ne(Z))}}function Qi(G,ne){for(var Z=-1,Be=G.length,st=0,wt=[];++Z<Be;){var tn=G[Z];(tn===ne||tn===d)&&(G[Z]=d,wt[st++]=Z)}return wt}function ja(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Be){Z[++ne]=Be}),Z}function a_(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Be){Z[++ne]=[Be,Be]}),Z}function o_(G,ne,Z){for(var Be=Z-1,st=G.length;++Be<st;)if(G[Be]===ne)return Be;return-1}function l_(G,ne,Z){for(var Be=Z+1;Be--;)if(G[Be]===ne)return Be;return Be}function as(G){return ss(G)?u_(G):jg(G)}function ai(G){return ss(G)?h_(G):Yg(G)}function Ah(G){for(var ne=G.length;ne--&&El.test(G.charAt(ne)););return ne}var c_=Ul(zg);function u_(G){for(var ne=Rl.lastIndex=0;Rl.test(G);)++ne;return ne}function h_(G){return G.match(Rl)||[]}function f_(G){return G.match(Ig)||[]}var d_=function G(ne){ne=ne==null?hn:os.defaults(hn.Object(),ne,os.pick(hn,Ug));var Z=ne.Array,Be=ne.Date,st=ne.Error,wt=ne.Function,tn=ne.Math,Nt=ne.Object,kl=ne.RegExp,p_=ne.String,jn=ne.TypeError,Ya=Z.prototype,m_=wt.prototype,ls=Nt.prototype,Ka=ne["__core-js_shared__"],Za=m_.toString,Lt=ls.hasOwnProperty,g_=0,wh=function(){var i=/[^.]+$/.exec(Ka&&Ka.keys&&Ka.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),$a=ls.toString,__=Za.call(Nt),v_=hn._,y_=kl("^"+Za.call(Lt).replace(Qt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ja=uh?ne.Buffer:t,er=ne.Symbol,Qa=ne.Uint8Array,Rh=Ja?Ja.allocUnsafe:t,eo=bh(Nt.getPrototypeOf,Nt),Ch=Nt.create,Lh=ls.propertyIsEnumerable,to=Ya.splice,Ph=er?er.isConcatSpreadable:t,ra=er?er.iterator:t,Er=er?er.toStringTag:t,no=function(){try{var i=Rr(Nt,"defineProperty");return i({},"",{}),i}catch{}}(),x_=ne.clearTimeout!==hn.clearTimeout&&ne.clearTimeout,M_=Be&&Be.now!==hn.Date.now&&Be.now,S_=ne.setTimeout!==hn.setTimeout&&ne.setTimeout,io=tn.ceil,ro=tn.floor,Hl=Nt.getOwnPropertySymbols,E_=Ja?Ja.isBuffer:t,Ih=ne.isFinite,T_=Ya.join,b_=bh(Nt.keys,Nt),nn=tn.max,gn=tn.min,A_=Be.now,w_=ne.parseInt,Dh=tn.random,R_=Ya.reverse,Gl=Rr(ne,"DataView"),sa=Rr(ne,"Map"),Vl=Rr(ne,"Promise"),cs=Rr(ne,"Set"),aa=Rr(ne,"WeakMap"),oa=Rr(Nt,"create"),so=aa&&new aa,us={},C_=Cr(Gl),L_=Cr(sa),P_=Cr(Vl),I_=Cr(cs),D_=Cr(aa),ao=er?er.prototype:t,la=ao?ao.valueOf:t,Nh=ao?ao.toString:t;function T(i){if(qt(i)&&!ot(i)&&!(i instanceof St)){if(i instanceof Yn)return i;if(Lt.call(i,"__wrapped__"))return Of(i)}return new Yn(i)}var hs=function(){function i(){}return function(o){if(!Wt(o))return{};if(Ch)return Ch(o);i.prototype=o;var f=new i;return i.prototype=t,f}}();function oo(){}function Yn(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}T.templateSettings={escape:qe,evaluate:bt,interpolate:At,variable:"",imports:{_:T}},T.prototype=oo.prototype,T.prototype.constructor=T,Yn.prototype=hs(oo.prototype),Yn.prototype.constructor=Yn;function St(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function N_(){var i=new St(this.__wrapped__);return i.__actions__=Cn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Cn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Cn(this.__views__),i}function U_(){if(this.__filtered__){var i=new St(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function O_(){var i=this.__wrapped__.value(),o=this.__dir__,f=ot(i),g=o<0,M=f?i.length:0,b=Yv(0,M,this.__views__),N=b.start,B=b.end,V=B-N,oe=g?B:N-1,le=this.__iteratees__,ge=le.length,De=0,We=gn(V,this.__takeCount__);if(!f||!g&&M==V&&We==V)return sf(i,this.__actions__);var Qe=[];e:for(;V--&&De<We;){oe+=o;for(var pt=-1,et=i[oe];++pt<ge;){var Mt=le[pt],Tt=Mt.iteratee,zn=Mt.type,Sn=Tt(et);if(zn==q)et=Sn;else if(!Sn){if(zn==k)continue e;break e}}Qe[De++]=et}return Qe}St.prototype=hs(oo.prototype),St.prototype.constructor=St;function Tr(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var g=i[o];this.set(g[0],g[1])}}function F_(){this.__data__=oa?oa(null):{},this.size=0}function B_(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function z_(i){var o=this.__data__;if(oa){var f=o[i];return f===u?t:f}return Lt.call(o,i)?o[i]:t}function k_(i){var o=this.__data__;return oa?o[i]!==t:Lt.call(o,i)}function H_(i,o){var f=this.__data__;return this.size+=this.has(i)?0:1,f[i]=oa&&o===t?u:o,this}Tr.prototype.clear=F_,Tr.prototype.delete=B_,Tr.prototype.get=z_,Tr.prototype.has=k_,Tr.prototype.set=H_;function Ci(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var g=i[o];this.set(g[0],g[1])}}function G_(){this.__data__=[],this.size=0}function V_(i){var o=this.__data__,f=lo(o,i);if(f<0)return!1;var g=o.length-1;return f==g?o.pop():to.call(o,f,1),--this.size,!0}function W_(i){var o=this.__data__,f=lo(o,i);return f<0?t:o[f][1]}function X_(i){return lo(this.__data__,i)>-1}function q_(i,o){var f=this.__data__,g=lo(f,i);return g<0?(++this.size,f.push([i,o])):f[g][1]=o,this}Ci.prototype.clear=G_,Ci.prototype.delete=V_,Ci.prototype.get=W_,Ci.prototype.has=X_,Ci.prototype.set=q_;function Li(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var g=i[o];this.set(g[0],g[1])}}function j_(){this.size=0,this.__data__={hash:new Tr,map:new(sa||Ci),string:new Tr}}function Y_(i){var o=Mo(this,i).delete(i);return this.size-=o?1:0,o}function K_(i){return Mo(this,i).get(i)}function Z_(i){return Mo(this,i).has(i)}function $_(i,o){var f=Mo(this,i),g=f.size;return f.set(i,o),this.size+=f.size==g?0:1,this}Li.prototype.clear=j_,Li.prototype.delete=Y_,Li.prototype.get=K_,Li.prototype.has=Z_,Li.prototype.set=$_;function br(i){var o=-1,f=i==null?0:i.length;for(this.__data__=new Li;++o<f;)this.add(i[o])}function J_(i){return this.__data__.set(i,u),this}function Q_(i){return this.__data__.has(i)}br.prototype.add=br.prototype.push=J_,br.prototype.has=Q_;function oi(i){var o=this.__data__=new Ci(i);this.size=o.size}function ev(){this.__data__=new Ci,this.size=0}function tv(i){var o=this.__data__,f=o.delete(i);return this.size=o.size,f}function nv(i){return this.__data__.get(i)}function iv(i){return this.__data__.has(i)}function rv(i,o){var f=this.__data__;if(f instanceof Ci){var g=f.__data__;if(!sa||g.length<r-1)return g.push([i,o]),this.size=++f.size,this;f=this.__data__=new Li(g)}return f.set(i,o),this.size=f.size,this}oi.prototype.clear=ev,oi.prototype.delete=tv,oi.prototype.get=nv,oi.prototype.has=iv,oi.prototype.set=rv;function Uh(i,o){var f=ot(i),g=!f&&Lr(i),M=!f&&!g&&sr(i),b=!f&&!g&&!M&&ms(i),N=f||g||M||b,B=N?Fl(i.length,p_):[],V=B.length;for(var oe in i)(o||Lt.call(i,oe))&&!(N&&(oe=="length"||M&&(oe=="offset"||oe=="parent")||b&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Ni(oe,V)))&&B.push(oe);return B}function Oh(i){var o=i.length;return o?i[ec(0,o-1)]:t}function sv(i,o){return So(Cn(i),Ar(o,0,i.length))}function av(i){return So(Cn(i))}function Wl(i,o,f){(f!==t&&!li(i[o],f)||f===t&&!(o in i))&&Pi(i,o,f)}function ca(i,o,f){var g=i[o];(!(Lt.call(i,o)&&li(g,f))||f===t&&!(o in i))&&Pi(i,o,f)}function lo(i,o){for(var f=i.length;f--;)if(li(i[f][0],o))return f;return-1}function ov(i,o,f,g){return tr(i,function(M,b,N){o(g,M,f(M),N)}),g}function Fh(i,o){return i&&vi(o,an(o),i)}function lv(i,o){return i&&vi(o,Pn(o),i)}function Pi(i,o,f){o=="__proto__"&&no?no(i,o,{configurable:!0,enumerable:!0,value:f,writable:!0}):i[o]=f}function Xl(i,o){for(var f=-1,g=o.length,M=Z(g),b=i==null;++f<g;)M[f]=b?t:bc(i,o[f]);return M}function Ar(i,o,f){return i===i&&(f!==t&&(i=i<=f?i:f),o!==t&&(i=i>=o?i:o)),i}function Kn(i,o,f,g,M,b){var N,B=o&p,V=o&m,oe=o&_;if(f&&(N=M?f(i,g,M,b):f(i)),N!==t)return N;if(!Wt(i))return i;var le=ot(i);if(le){if(N=Zv(i),!B)return Cn(i,N)}else{var ge=_n(i),De=ge==j||ge==Vt;if(sr(i))return lf(i,B);if(ge==Xe||ge==Le||De&&!M){if(N=V||De?{}:wf(i),!B)return V?zv(i,lv(N,i)):Bv(i,Fh(N,i))}else{if(!Ot[ge])return M?i:{};N=$v(i,ge,B)}}b||(b=new oi);var We=b.get(i);if(We)return We;b.set(i,N),nd(i)?i.forEach(function(et){N.add(Kn(et,o,f,et,i,b))}):ed(i)&&i.forEach(function(et,Mt){N.set(Mt,Kn(et,o,f,Mt,i,b))});var Qe=oe?V?hc:uc:V?Pn:an,pt=le?t:Qe(i);return qn(pt||i,function(et,Mt){pt&&(Mt=et,et=i[Mt]),ca(N,Mt,Kn(et,o,f,Mt,i,b))}),N}function cv(i){var o=an(i);return function(f){return Bh(f,i,o)}}function Bh(i,o,f){var g=f.length;if(i==null)return!g;for(i=Nt(i);g--;){var M=f[g],b=o[M],N=i[M];if(N===t&&!(M in i)||!b(N))return!1}return!0}function zh(i,o,f){if(typeof i!="function")throw new jn(l);return ga(function(){i.apply(t,f)},o)}function ua(i,o,f,g){var M=-1,b=Xa,N=!0,B=i.length,V=[],oe=o.length;if(!B)return V;f&&(o=Gt(o,On(f))),g?(b=Pl,N=!1):o.length>=r&&(b=ia,N=!1,o=new br(o));e:for(;++M<B;){var le=i[M],ge=f==null?le:f(le);if(le=g||le!==0?le:0,N&&ge===ge){for(var De=oe;De--;)if(o[De]===ge)continue e;V.push(le)}else b(o,ge,g)||V.push(le)}return V}var tr=df(_i),kh=df(jl,!0);function uv(i,o){var f=!0;return tr(i,function(g,M,b){return f=!!o(g,M,b),f}),f}function co(i,o,f){for(var g=-1,M=i.length;++g<M;){var b=i[g],N=o(b);if(N!=null&&(B===t?N===N&&!Bn(N):f(N,B)))var B=N,V=b}return V}function hv(i,o,f,g){var M=i.length;for(f=ft(f),f<0&&(f=-f>M?0:M+f),g=g===t||g>M?M:ft(g),g<0&&(g+=M),g=f>g?0:rd(g);f<g;)i[f++]=o;return i}function Hh(i,o){var f=[];return tr(i,function(g,M,b){o(g,M,b)&&f.push(g)}),f}function fn(i,o,f,g,M){var b=-1,N=i.length;for(f||(f=Qv),M||(M=[]);++b<N;){var B=i[b];o>0&&f(B)?o>1?fn(B,o-1,f,g,M):Ji(M,B):g||(M[M.length]=B)}return M}var ql=pf(),Gh=pf(!0);function _i(i,o){return i&&ql(i,o,an)}function jl(i,o){return i&&Gh(i,o,an)}function uo(i,o){return $i(o,function(f){return Ui(i[f])})}function wr(i,o){o=ir(o,i);for(var f=0,g=o.length;i!=null&&f<g;)i=i[yi(o[f++])];return f&&f==g?i:t}function Vh(i,o,f){var g=o(i);return ot(i)?g:Ji(g,f(i))}function xn(i){return i==null?i===t?ye:xe:Er&&Er in Nt(i)?jv(i):a0(i)}function Yl(i,o){return i>o}function fv(i,o){return i!=null&&Lt.call(i,o)}function dv(i,o){return i!=null&&o in Nt(i)}function pv(i,o,f){return i>=gn(o,f)&&i<nn(o,f)}function Kl(i,o,f){for(var g=f?Pl:Xa,M=i[0].length,b=i.length,N=b,B=Z(b),V=1/0,oe=[];N--;){var le=i[N];N&&o&&(le=Gt(le,On(o))),V=gn(le.length,V),B[N]=!f&&(o||M>=120&&le.length>=120)?new br(N&&le):t}le=i[0];var ge=-1,De=B[0];e:for(;++ge<M&&oe.length<V;){var We=le[ge],Qe=o?o(We):We;if(We=f||We!==0?We:0,!(De?ia(De,Qe):g(oe,Qe,f))){for(N=b;--N;){var pt=B[N];if(!(pt?ia(pt,Qe):g(i[N],Qe,f)))continue e}De&&De.push(Qe),oe.push(We)}}return oe}function mv(i,o,f,g){return _i(i,function(M,b,N){o(g,f(M),b,N)}),g}function ha(i,o,f){o=ir(o,i),i=Pf(i,o);var g=i==null?i:i[yi($n(o))];return g==null?t:Un(g,i,f)}function Wh(i){return qt(i)&&xn(i)==Le}function gv(i){return qt(i)&&xn(i)==Ue}function _v(i){return qt(i)&&xn(i)==pe}function fa(i,o,f,g,M){return i===o?!0:i==null||o==null||!qt(i)&&!qt(o)?i!==i&&o!==o:vv(i,o,f,g,fa,M)}function vv(i,o,f,g,M,b){var N=ot(i),B=ot(o),V=N?Ne:_n(i),oe=B?Ne:_n(o);V=V==Le?Xe:V,oe=oe==Le?Xe:oe;var le=V==Xe,ge=oe==Xe,De=V==oe;if(De&&sr(i)){if(!sr(o))return!1;N=!0,le=!1}if(De&&!le)return b||(b=new oi),N||ms(i)?Tf(i,o,f,g,M,b):Xv(i,o,V,f,g,M,b);if(!(f&x)){var We=le&&Lt.call(i,"__wrapped__"),Qe=ge&&Lt.call(o,"__wrapped__");if(We||Qe){var pt=We?i.value():i,et=Qe?o.value():o;return b||(b=new oi),M(pt,et,f,g,b)}}return De?(b||(b=new oi),qv(i,o,f,g,M,b)):!1}function yv(i){return qt(i)&&_n(i)==re}function Zl(i,o,f,g){var M=f.length,b=M,N=!g;if(i==null)return!b;for(i=Nt(i);M--;){var B=f[M];if(N&&B[2]?B[1]!==i[B[0]]:!(B[0]in i))return!1}for(;++M<b;){B=f[M];var V=B[0],oe=i[V],le=B[1];if(N&&B[2]){if(oe===t&&!(V in i))return!1}else{var ge=new oi;if(g)var De=g(oe,le,V,i,o,ge);if(!(De===t?fa(le,oe,x|S,g,ge):De))return!1}}return!0}function Xh(i){if(!Wt(i)||t0(i))return!1;var o=Ui(i)?y_:K;return o.test(Cr(i))}function xv(i){return qt(i)&&xn(i)==E}function Mv(i){return qt(i)&&_n(i)==W}function Sv(i){return qt(i)&&Ro(i.length)&&!!zt[xn(i)]}function qh(i){return typeof i=="function"?i:i==null?In:typeof i=="object"?ot(i)?Kh(i[0],i[1]):Yh(i):md(i)}function $l(i){if(!ma(i))return b_(i);var o=[];for(var f in Nt(i))Lt.call(i,f)&&f!="constructor"&&o.push(f);return o}function Ev(i){if(!Wt(i))return s0(i);var o=ma(i),f=[];for(var g in i)g=="constructor"&&(o||!Lt.call(i,g))||f.push(g);return f}function Jl(i,o){return i<o}function jh(i,o){var f=-1,g=Ln(i)?Z(i.length):[];return tr(i,function(M,b,N){g[++f]=o(M,b,N)}),g}function Yh(i){var o=dc(i);return o.length==1&&o[0][2]?Cf(o[0][0],o[0][1]):function(f){return f===i||Zl(f,i,o)}}function Kh(i,o){return mc(i)&&Rf(o)?Cf(yi(i),o):function(f){var g=bc(f,i);return g===t&&g===o?Ac(f,i):fa(o,g,x|S)}}function ho(i,o,f,g,M){i!==o&&ql(o,function(b,N){if(M||(M=new oi),Wt(b))Tv(i,o,N,f,ho,g,M);else{var B=g?g(_c(i,N),b,N+"",i,o,M):t;B===t&&(B=b),Wl(i,N,B)}},Pn)}function Tv(i,o,f,g,M,b,N){var B=_c(i,f),V=_c(o,f),oe=N.get(V);if(oe){Wl(i,f,oe);return}var le=b?b(B,V,f+"",i,o,N):t,ge=le===t;if(ge){var De=ot(V),We=!De&&sr(V),Qe=!De&&!We&&ms(V);le=V,De||We||Qe?ot(B)?le=B:Kt(B)?le=Cn(B):We?(ge=!1,le=lf(V,!0)):Qe?(ge=!1,le=cf(V,!0)):le=[]:_a(V)||Lr(V)?(le=B,Lr(B)?le=sd(B):(!Wt(B)||Ui(B))&&(le=wf(V))):ge=!1}ge&&(N.set(V,le),M(le,V,g,b,N),N.delete(V)),Wl(i,f,le)}function Zh(i,o){var f=i.length;if(f)return o+=o<0?f:0,Ni(o,f)?i[o]:t}function $h(i,o,f){o.length?o=Gt(o,function(b){return ot(b)?function(N){return wr(N,b.length===1?b[0]:b)}:b}):o=[In];var g=-1;o=Gt(o,On(Ke()));var M=jh(i,function(b,N,B){var V=Gt(o,function(oe){return oe(b)});return{criteria:V,index:++g,value:b}});return $g(M,function(b,N){return Fv(b,N,f)})}function bv(i,o){return Jh(i,o,function(f,g){return Ac(i,g)})}function Jh(i,o,f){for(var g=-1,M=o.length,b={};++g<M;){var N=o[g],B=wr(i,N);f(B,N)&&da(b,ir(N,i),B)}return b}function Av(i){return function(o){return wr(o,i)}}function Ql(i,o,f,g){var M=g?Zg:rs,b=-1,N=o.length,B=i;for(i===o&&(o=Cn(o)),f&&(B=Gt(i,On(f)));++b<N;)for(var V=0,oe=o[b],le=f?f(oe):oe;(V=M(B,le,V,g))>-1;)B!==i&&to.call(B,V,1),to.call(i,V,1);return i}function Qh(i,o){for(var f=i?o.length:0,g=f-1;f--;){var M=o[f];if(f==g||M!==b){var b=M;Ni(M)?to.call(i,M,1):ic(i,M)}}return i}function ec(i,o){return i+ro(Dh()*(o-i+1))}function wv(i,o,f,g){for(var M=-1,b=nn(io((o-i)/(f||1)),0),N=Z(b);b--;)N[g?b:++M]=i,i+=f;return N}function tc(i,o){var f="";if(!i||o<1||o>se)return f;do o%2&&(f+=i),o=ro(o/2),o&&(i+=i);while(o);return f}function _t(i,o){return vc(Lf(i,o,In),i+"")}function Rv(i){return Oh(gs(i))}function Cv(i,o){var f=gs(i);return So(f,Ar(o,0,f.length))}function da(i,o,f,g){if(!Wt(i))return i;o=ir(o,i);for(var M=-1,b=o.length,N=b-1,B=i;B!=null&&++M<b;){var V=yi(o[M]),oe=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return i;if(M!=N){var le=B[V];oe=g?g(le,V,B):t,oe===t&&(oe=Wt(le)?le:Ni(o[M+1])?[]:{})}ca(B,V,oe),B=B[V]}return i}var ef=so?function(i,o){return so.set(i,o),i}:In,Lv=no?function(i,o){return no(i,"toString",{configurable:!0,enumerable:!1,value:Rc(o),writable:!0})}:In;function Pv(i){return So(gs(i))}function Zn(i,o,f){var g=-1,M=i.length;o<0&&(o=-o>M?0:M+o),f=f>M?M:f,f<0&&(f+=M),M=o>f?0:f-o>>>0,o>>>=0;for(var b=Z(M);++g<M;)b[g]=i[g+o];return b}function Iv(i,o){var f;return tr(i,function(g,M,b){return f=o(g,M,b),!f}),!!f}function fo(i,o,f){var g=0,M=i==null?g:i.length;if(typeof o=="number"&&o===o&&M<=te){for(;g<M;){var b=g+M>>>1,N=i[b];N!==null&&!Bn(N)&&(f?N<=o:N<o)?g=b+1:M=b}return M}return nc(i,o,In,f)}function nc(i,o,f,g){var M=0,b=i==null?0:i.length;if(b===0)return 0;o=f(o);for(var N=o!==o,B=o===null,V=Bn(o),oe=o===t;M<b;){var le=ro((M+b)/2),ge=f(i[le]),De=ge!==t,We=ge===null,Qe=ge===ge,pt=Bn(ge);if(N)var et=g||Qe;else oe?et=Qe&&(g||De):B?et=Qe&&De&&(g||!We):V?et=Qe&&De&&!We&&(g||!pt):We||pt?et=!1:et=g?ge<=o:ge<o;et?M=le+1:b=le}return gn(b,Te)}function tf(i,o){for(var f=-1,g=i.length,M=0,b=[];++f<g;){var N=i[f],B=o?o(N):N;if(!f||!li(B,V)){var V=B;b[M++]=N===0?0:N}}return b}function nf(i){return typeof i=="number"?i:Bn(i)?he:+i}function Fn(i){if(typeof i=="string")return i;if(ot(i))return Gt(i,Fn)+"";if(Bn(i))return Nh?Nh.call(i):"";var o=i+"";return o=="0"&&1/i==-ce?"-0":o}function nr(i,o,f){var g=-1,M=Xa,b=i.length,N=!0,B=[],V=B;if(f)N=!1,M=Pl;else if(b>=r){var oe=o?null:Vv(i);if(oe)return ja(oe);N=!1,M=ia,V=new br}else V=o?[]:B;e:for(;++g<b;){var le=i[g],ge=o?o(le):le;if(le=f||le!==0?le:0,N&&ge===ge){for(var De=V.length;De--;)if(V[De]===ge)continue e;o&&V.push(ge),B.push(le)}else M(V,ge,f)||(V!==B&&V.push(ge),B.push(le))}return B}function ic(i,o){return o=ir(o,i),i=Pf(i,o),i==null||delete i[yi($n(o))]}function rf(i,o,f,g){return da(i,o,f(wr(i,o)),g)}function po(i,o,f,g){for(var M=i.length,b=g?M:-1;(g?b--:++b<M)&&o(i[b],b,i););return f?Zn(i,g?0:b,g?b+1:M):Zn(i,g?b+1:0,g?M:b)}function sf(i,o){var f=i;return f instanceof St&&(f=f.value()),Il(o,function(g,M){return M.func.apply(M.thisArg,Ji([g],M.args))},f)}function rc(i,o,f){var g=i.length;if(g<2)return g?nr(i[0]):[];for(var M=-1,b=Z(g);++M<g;)for(var N=i[M],B=-1;++B<g;)B!=M&&(b[M]=ua(b[M]||N,i[B],o,f));return nr(fn(b,1),o,f)}function af(i,o,f){for(var g=-1,M=i.length,b=o.length,N={};++g<M;){var B=g<b?o[g]:t;f(N,i[g],B)}return N}function sc(i){return Kt(i)?i:[]}function ac(i){return typeof i=="function"?i:In}function ir(i,o){return ot(i)?i:mc(i,o)?[i]:Uf(Rt(i))}var Dv=_t;function rr(i,o,f){var g=i.length;return f=f===t?g:f,!o&&f>=g?i:Zn(i,o,f)}var of=x_||function(i){return hn.clearTimeout(i)};function lf(i,o){if(o)return i.slice();var f=i.length,g=Rh?Rh(f):new i.constructor(f);return i.copy(g),g}function oc(i){var o=new i.constructor(i.byteLength);return new Qa(o).set(new Qa(i)),o}function Nv(i,o){var f=o?oc(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.byteLength)}function Uv(i){var o=new i.constructor(i.source,Va.exec(i));return o.lastIndex=i.lastIndex,o}function Ov(i){return la?Nt(la.call(i)):{}}function cf(i,o){var f=o?oc(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.length)}function uf(i,o){if(i!==o){var f=i!==t,g=i===null,M=i===i,b=Bn(i),N=o!==t,B=o===null,V=o===o,oe=Bn(o);if(!B&&!oe&&!b&&i>o||b&&N&&V&&!B&&!oe||g&&N&&V||!f&&V||!M)return 1;if(!g&&!b&&!oe&&i<o||oe&&f&&M&&!g&&!b||B&&f&&M||!N&&M||!V)return-1}return 0}function Fv(i,o,f){for(var g=-1,M=i.criteria,b=o.criteria,N=M.length,B=f.length;++g<N;){var V=uf(M[g],b[g]);if(V){if(g>=B)return V;var oe=f[g];return V*(oe=="desc"?-1:1)}}return i.index-o.index}function hf(i,o,f,g){for(var M=-1,b=i.length,N=f.length,B=-1,V=o.length,oe=nn(b-N,0),le=Z(V+oe),ge=!g;++B<V;)le[B]=o[B];for(;++M<N;)(ge||M<b)&&(le[f[M]]=i[M]);for(;oe--;)le[B++]=i[M++];return le}function ff(i,o,f,g){for(var M=-1,b=i.length,N=-1,B=f.length,V=-1,oe=o.length,le=nn(b-B,0),ge=Z(le+oe),De=!g;++M<le;)ge[M]=i[M];for(var We=M;++V<oe;)ge[We+V]=o[V];for(;++N<B;)(De||M<b)&&(ge[We+f[N]]=i[M++]);return ge}function Cn(i,o){var f=-1,g=i.length;for(o||(o=Z(g));++f<g;)o[f]=i[f];return o}function vi(i,o,f,g){var M=!f;f||(f={});for(var b=-1,N=o.length;++b<N;){var B=o[b],V=g?g(f[B],i[B],B,f,i):t;V===t&&(V=i[B]),M?Pi(f,B,V):ca(f,B,V)}return f}function Bv(i,o){return vi(i,pc(i),o)}function zv(i,o){return vi(i,bf(i),o)}function mo(i,o){return function(f,g){var M=ot(f)?Wg:ov,b=o?o():{};return M(f,i,Ke(g,2),b)}}function fs(i){return _t(function(o,f){var g=-1,M=f.length,b=M>1?f[M-1]:t,N=M>2?f[2]:t;for(b=i.length>3&&typeof b=="function"?(M--,b):t,N&&Mn(f[0],f[1],N)&&(b=M<3?t:b,M=1),o=Nt(o);++g<M;){var B=f[g];B&&i(o,B,g,b)}return o})}function df(i,o){return function(f,g){if(f==null)return f;if(!Ln(f))return i(f,g);for(var M=f.length,b=o?M:-1,N=Nt(f);(o?b--:++b<M)&&g(N[b],b,N)!==!1;);return f}}function pf(i){return function(o,f,g){for(var M=-1,b=Nt(o),N=g(o),B=N.length;B--;){var V=N[i?B:++M];if(f(b[V],V,b)===!1)break}return o}}function kv(i,o,f){var g=o&y,M=pa(i);function b(){var N=this&&this!==hn&&this instanceof b?M:i;return N.apply(g?f:this,arguments)}return b}function mf(i){return function(o){o=Rt(o);var f=ss(o)?ai(o):t,g=f?f[0]:o.charAt(0),M=f?rr(f,1).join(""):o.slice(1);return g[i]()+M}}function ds(i){return function(o){return Il(dd(fd(o).replace(Lg,"")),i,"")}}function pa(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var f=hs(i.prototype),g=i.apply(f,o);return Wt(g)?g:f}}function Hv(i,o,f){var g=pa(i);function M(){for(var b=arguments.length,N=Z(b),B=b,V=ps(M);B--;)N[B]=arguments[B];var oe=b<3&&N[0]!==V&&N[b-1]!==V?[]:Qi(N,V);if(b-=oe.length,b<f)return xf(i,o,go,M.placeholder,t,N,oe,t,t,f-b);var le=this&&this!==hn&&this instanceof M?g:i;return Un(le,this,N)}return M}function gf(i){return function(o,f,g){var M=Nt(o);if(!Ln(o)){var b=Ke(f,3);o=an(o),f=function(B){return b(M[B],B,M)}}var N=i(o,f,g);return N>-1?M[b?o[N]:N]:t}}function _f(i){return Di(function(o){var f=o.length,g=f,M=Yn.prototype.thru;for(i&&o.reverse();g--;){var b=o[g];if(typeof b!="function")throw new jn(l);if(M&&!N&&xo(b)=="wrapper")var N=new Yn([],!0)}for(g=N?g:f;++g<f;){b=o[g];var B=xo(b),V=B=="wrapper"?fc(b):t;V&&gc(V[0])&&V[1]==(D|A|F|J)&&!V[4].length&&V[9]==1?N=N[xo(V[0])].apply(N,V[3]):N=b.length==1&&gc(b)?N[B]():N.thru(b)}return function(){var oe=arguments,le=oe[0];if(N&&oe.length==1&&ot(le))return N.plant(le).value();for(var ge=0,De=f?o[ge].apply(this,oe):le;++ge<f;)De=o[ge].call(this,De);return De}})}function go(i,o,f,g,M,b,N,B,V,oe){var le=o&D,ge=o&y,De=o&v,We=o&(A|R),Qe=o&w,pt=De?t:pa(i);function et(){for(var Mt=arguments.length,Tt=Z(Mt),zn=Mt;zn--;)Tt[zn]=arguments[zn];if(We)var Sn=ps(et),kn=Qg(Tt,Sn);if(g&&(Tt=hf(Tt,g,M,We)),b&&(Tt=ff(Tt,b,N,We)),Mt-=kn,We&&Mt<oe){var Zt=Qi(Tt,Sn);return xf(i,o,go,et.placeholder,f,Tt,Zt,B,V,oe-Mt)}var ci=ge?f:this,Fi=De?ci[i]:i;return Mt=Tt.length,B?Tt=o0(Tt,B):Qe&&Mt>1&&Tt.reverse(),le&&V<Mt&&(Tt.length=V),this&&this!==hn&&this instanceof et&&(Fi=pt||pa(Fi)),Fi.apply(ci,Tt)}return et}function vf(i,o){return function(f,g){return mv(f,i,o(g),{})}}function _o(i,o){return function(f,g){var M;if(f===t&&g===t)return o;if(f!==t&&(M=f),g!==t){if(M===t)return g;typeof f=="string"||typeof g=="string"?(f=Fn(f),g=Fn(g)):(f=nf(f),g=nf(g)),M=i(f,g)}return M}}function lc(i){return Di(function(o){return o=Gt(o,On(Ke())),_t(function(f){var g=this;return i(o,function(M){return Un(M,g,f)})})})}function vo(i,o){o=o===t?" ":Fn(o);var f=o.length;if(f<2)return f?tc(o,i):o;var g=tc(o,io(i/as(o)));return ss(o)?rr(ai(g),0,i).join(""):g.slice(0,i)}function Gv(i,o,f,g){var M=o&y,b=pa(i);function N(){for(var B=-1,V=arguments.length,oe=-1,le=g.length,ge=Z(le+V),De=this&&this!==hn&&this instanceof N?b:i;++oe<le;)ge[oe]=g[oe];for(;V--;)ge[oe++]=arguments[++B];return Un(De,M?f:this,ge)}return N}function yf(i){return function(o,f,g){return g&&typeof g!="number"&&Mn(o,f,g)&&(f=g=t),o=Oi(o),f===t?(f=o,o=0):f=Oi(f),g=g===t?o<f?1:-1:Oi(g),wv(o,f,g,i)}}function yo(i){return function(o,f){return typeof o=="string"&&typeof f=="string"||(o=Jn(o),f=Jn(f)),i(o,f)}}function xf(i,o,f,g,M,b,N,B,V,oe){var le=o&A,ge=le?N:t,De=le?t:N,We=le?b:t,Qe=le?t:b;o|=le?F:U,o&=~(le?U:F),o&P||(o&=~(y|v));var pt=[i,o,M,We,ge,Qe,De,B,V,oe],et=f.apply(t,pt);return gc(i)&&If(et,pt),et.placeholder=g,Df(et,i,o)}function cc(i){var o=tn[i];return function(f,g){if(f=Jn(f),g=g==null?0:gn(ft(g),292),g&&Ih(f)){var M=(Rt(f)+"e").split("e"),b=o(M[0]+"e"+(+M[1]+g));return M=(Rt(b)+"e").split("e"),+(M[0]+"e"+(+M[1]-g))}return o(f)}}var Vv=cs&&1/ja(new cs([,-0]))[1]==ce?function(i){return new cs(i)}:Pc;function Mf(i){return function(o){var f=_n(o);return f==re?zl(o):f==W?a_(o):Jg(o,i(o))}}function Ii(i,o,f,g,M,b,N,B){var V=o&v;if(!V&&typeof i!="function")throw new jn(l);var oe=g?g.length:0;if(oe||(o&=~(F|U),g=M=t),N=N===t?N:nn(ft(N),0),B=B===t?B:ft(B),oe-=M?M.length:0,o&U){var le=g,ge=M;g=M=t}var De=V?t:fc(i),We=[i,o,f,g,M,le,ge,b,N,B];if(De&&r0(We,De),i=We[0],o=We[1],f=We[2],g=We[3],M=We[4],B=We[9]=We[9]===t?V?0:i.length:nn(We[9]-oe,0),!B&&o&(A|R)&&(o&=~(A|R)),!o||o==y)var Qe=kv(i,o,f);else o==A||o==R?Qe=Hv(i,o,B):(o==F||o==(y|F))&&!M.length?Qe=Gv(i,o,f,g):Qe=go.apply(t,We);var pt=De?ef:If;return Df(pt(Qe,We),i,o)}function Sf(i,o,f,g){return i===t||li(i,ls[f])&&!Lt.call(g,f)?o:i}function Ef(i,o,f,g,M,b){return Wt(i)&&Wt(o)&&(b.set(o,i),ho(i,o,t,Ef,b),b.delete(o)),i}function Wv(i){return _a(i)?t:i}function Tf(i,o,f,g,M,b){var N=f&x,B=i.length,V=o.length;if(B!=V&&!(N&&V>B))return!1;var oe=b.get(i),le=b.get(o);if(oe&&le)return oe==o&&le==i;var ge=-1,De=!0,We=f&S?new br:t;for(b.set(i,o),b.set(o,i);++ge<B;){var Qe=i[ge],pt=o[ge];if(g)var et=N?g(pt,Qe,ge,o,i,b):g(Qe,pt,ge,i,o,b);if(et!==t){if(et)continue;De=!1;break}if(We){if(!Dl(o,function(Mt,Tt){if(!ia(We,Tt)&&(Qe===Mt||M(Qe,Mt,f,g,b)))return We.push(Tt)})){De=!1;break}}else if(!(Qe===pt||M(Qe,pt,f,g,b))){De=!1;break}}return b.delete(i),b.delete(o),De}function Xv(i,o,f,g,M,b,N){switch(f){case je:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case Ue:return!(i.byteLength!=o.byteLength||!b(new Qa(i),new Qa(o)));case fe:case pe:case Ce:return li(+i,+o);case lt:return i.name==o.name&&i.message==o.message;case E:case ae:return i==o+"";case re:var B=zl;case W:var V=g&x;if(B||(B=ja),i.size!=o.size&&!V)return!1;var oe=N.get(i);if(oe)return oe==o;g|=S,N.set(i,o);var le=Tf(B(i),B(o),g,M,b,N);return N.delete(i),le;case de:if(la)return la.call(i)==la.call(o)}return!1}function qv(i,o,f,g,M,b){var N=f&x,B=uc(i),V=B.length,oe=uc(o),le=oe.length;if(V!=le&&!N)return!1;for(var ge=V;ge--;){var De=B[ge];if(!(N?De in o:Lt.call(o,De)))return!1}var We=b.get(i),Qe=b.get(o);if(We&&Qe)return We==o&&Qe==i;var pt=!0;b.set(i,o),b.set(o,i);for(var et=N;++ge<V;){De=B[ge];var Mt=i[De],Tt=o[De];if(g)var zn=N?g(Tt,Mt,De,o,i,b):g(Mt,Tt,De,i,o,b);if(!(zn===t?Mt===Tt||M(Mt,Tt,f,g,b):zn)){pt=!1;break}et||(et=De=="constructor")}if(pt&&!et){var Sn=i.constructor,kn=o.constructor;Sn!=kn&&"constructor"in i&&"constructor"in o&&!(typeof Sn=="function"&&Sn instanceof Sn&&typeof kn=="function"&&kn instanceof kn)&&(pt=!1)}return b.delete(i),b.delete(o),pt}function Di(i){return vc(Lf(i,t,zf),i+"")}function uc(i){return Vh(i,an,pc)}function hc(i){return Vh(i,Pn,bf)}var fc=so?function(i){return so.get(i)}:Pc;function xo(i){for(var o=i.name+"",f=us[o],g=Lt.call(us,o)?f.length:0;g--;){var M=f[g],b=M.func;if(b==null||b==i)return M.name}return o}function ps(i){var o=Lt.call(T,"placeholder")?T:i;return o.placeholder}function Ke(){var i=T.iteratee||Cc;return i=i===Cc?qh:i,arguments.length?i(arguments[0],arguments[1]):i}function Mo(i,o){var f=i.__data__;return e0(o)?f[typeof o=="string"?"string":"hash"]:f.map}function dc(i){for(var o=an(i),f=o.length;f--;){var g=o[f],M=i[g];o[f]=[g,M,Rf(M)]}return o}function Rr(i,o){var f=i_(i,o);return Xh(f)?f:t}function jv(i){var o=Lt.call(i,Er),f=i[Er];try{i[Er]=t;var g=!0}catch{}var M=$a.call(i);return g&&(o?i[Er]=f:delete i[Er]),M}var pc=Hl?function(i){return i==null?[]:(i=Nt(i),$i(Hl(i),function(o){return Lh.call(i,o)}))}:Ic,bf=Hl?function(i){for(var o=[];i;)Ji(o,pc(i)),i=eo(i);return o}:Ic,_n=xn;(Gl&&_n(new Gl(new ArrayBuffer(1)))!=je||sa&&_n(new sa)!=re||Vl&&_n(Vl.resolve())!=ze||cs&&_n(new cs)!=W||aa&&_n(new aa)!=ke)&&(_n=function(i){var o=xn(i),f=o==Xe?i.constructor:t,g=f?Cr(f):"";if(g)switch(g){case C_:return je;case L_:return re;case P_:return ze;case I_:return W;case D_:return ke}return o});function Yv(i,o,f){for(var g=-1,M=f.length;++g<M;){var b=f[g],N=b.size;switch(b.type){case"drop":i+=N;break;case"dropRight":o-=N;break;case"take":o=gn(o,i+N);break;case"takeRight":i=nn(i,o-N);break}}return{start:i,end:o}}function Kv(i){var o=i.match(ka);return o?o[1].split(Qr):[]}function Af(i,o,f){o=ir(o,i);for(var g=-1,M=o.length,b=!1;++g<M;){var N=yi(o[g]);if(!(b=i!=null&&f(i,N)))break;i=i[N]}return b||++g!=M?b:(M=i==null?0:i.length,!!M&&Ro(M)&&Ni(N,M)&&(ot(i)||Lr(i)))}function Zv(i){var o=i.length,f=new i.constructor(o);return o&&typeof i[0]=="string"&&Lt.call(i,"index")&&(f.index=i.index,f.input=i.input),f}function wf(i){return typeof i.constructor=="function"&&!ma(i)?hs(eo(i)):{}}function $v(i,o,f){var g=i.constructor;switch(o){case Ue:return oc(i);case fe:case pe:return new g(+i);case je:return Nv(i,f);case nt:case ve:case gt:case O:case me:case we:case Ee:case Ge:case ct:return cf(i,f);case re:return new g;case Ce:case ae:return new g(i);case E:return Uv(i);case W:return new g;case de:return Ov(i)}}function Jv(i,o){var f=o.length;if(!f)return i;var g=f-1;return o[g]=(f>1?"& ":"")+o[g],o=o.join(f>2?", ":" "),i.replace(Jr,`{
/* [wrapped with `+o+`] */
`)}function Qv(i){return ot(i)||Lr(i)||!!(Ph&&i&&i[Ph])}function Ni(i,o){var f=typeof i;return o=o??se,!!o&&(f=="number"||f!="symbol"&&Y.test(i))&&i>-1&&i%1==0&&i<o}function Mn(i,o,f){if(!Wt(f))return!1;var g=typeof o;return(g=="number"?Ln(f)&&Ni(o,f.length):g=="string"&&o in f)?li(f[o],i):!1}function mc(i,o){if(ot(i))return!1;var f=typeof i;return f=="number"||f=="symbol"||f=="boolean"||i==null||Bn(i)?!0:un.test(i)||!$t.test(i)||o!=null&&i in Nt(o)}function e0(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function gc(i){var o=xo(i),f=T[o];if(typeof f!="function"||!(o in St.prototype))return!1;if(i===f)return!0;var g=fc(f);return!!g&&i===g[0]}function t0(i){return!!wh&&wh in i}var n0=Ka?Ui:Dc;function ma(i){var o=i&&i.constructor,f=typeof o=="function"&&o.prototype||ls;return i===f}function Rf(i){return i===i&&!Wt(i)}function Cf(i,o){return function(f){return f==null?!1:f[i]===o&&(o!==t||i in Nt(f))}}function i0(i){var o=Ao(i,function(g){return f.size===h&&f.clear(),g}),f=o.cache;return o}function r0(i,o){var f=i[1],g=o[1],M=f|g,b=M<(y|v|D),N=g==D&&f==A||g==D&&f==J&&i[7].length<=o[8]||g==(D|J)&&o[7].length<=o[8]&&f==A;if(!(b||N))return i;g&y&&(i[2]=o[2],M|=f&y?0:P);var B=o[3];if(B){var V=i[3];i[3]=V?hf(V,B,o[4]):B,i[4]=V?Qi(i[3],d):o[4]}return B=o[5],B&&(V=i[5],i[5]=V?ff(V,B,o[6]):B,i[6]=V?Qi(i[5],d):o[6]),B=o[7],B&&(i[7]=B),g&D&&(i[8]=i[8]==null?o[8]:gn(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=M,i}function s0(i){var o=[];if(i!=null)for(var f in Nt(i))o.push(f);return o}function a0(i){return $a.call(i)}function Lf(i,o,f){return o=nn(o===t?i.length-1:o,0),function(){for(var g=arguments,M=-1,b=nn(g.length-o,0),N=Z(b);++M<b;)N[M]=g[o+M];M=-1;for(var B=Z(o+1);++M<o;)B[M]=g[M];return B[o]=f(N),Un(i,this,B)}}function Pf(i,o){return o.length<2?i:wr(i,Zn(o,0,-1))}function o0(i,o){for(var f=i.length,g=gn(o.length,f),M=Cn(i);g--;){var b=o[g];i[g]=Ni(b,f)?M[b]:t}return i}function _c(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var If=Nf(ef),ga=S_||function(i,o){return hn.setTimeout(i,o)},vc=Nf(Lv);function Df(i,o,f){var g=o+"";return vc(i,Jv(g,l0(Kv(g),f)))}function Nf(i){var o=0,f=0;return function(){var g=A_(),M=Me-(g-f);if(f=g,M>0){if(++o>=ie)return arguments[0]}else o=0;return i.apply(t,arguments)}}function So(i,o){var f=-1,g=i.length,M=g-1;for(o=o===t?g:o;++f<o;){var b=ec(f,M),N=i[b];i[b]=i[f],i[f]=N}return i.length=o,i}var Uf=i0(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(It,function(f,g,M,b){o.push(M?b.replace(Tl,"$1"):g||f)}),o});function yi(i){if(typeof i=="string"||Bn(i))return i;var o=i+"";return o=="0"&&1/i==-ce?"-0":o}function Cr(i){if(i!=null){try{return Za.call(i)}catch{}try{return i+""}catch{}}return""}function l0(i,o){return qn(_e,function(f){var g="_."+f[0];o&f[1]&&!Xa(i,g)&&i.push(g)}),i.sort()}function Of(i){if(i instanceof St)return i.clone();var o=new Yn(i.__wrapped__,i.__chain__);return o.__actions__=Cn(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function c0(i,o,f){(f?Mn(i,o,f):o===t)?o=1:o=nn(ft(o),0);var g=i==null?0:i.length;if(!g||o<1)return[];for(var M=0,b=0,N=Z(io(g/o));M<g;)N[b++]=Zn(i,M,M+=o);return N}function u0(i){for(var o=-1,f=i==null?0:i.length,g=0,M=[];++o<f;){var b=i[o];b&&(M[g++]=b)}return M}function h0(){var i=arguments.length;if(!i)return[];for(var o=Z(i-1),f=arguments[0],g=i;g--;)o[g-1]=arguments[g];return Ji(ot(f)?Cn(f):[f],fn(o,1))}var f0=_t(function(i,o){return Kt(i)?ua(i,fn(o,1,Kt,!0)):[]}),d0=_t(function(i,o){var f=$n(o);return Kt(f)&&(f=t),Kt(i)?ua(i,fn(o,1,Kt,!0),Ke(f,2)):[]}),p0=_t(function(i,o){var f=$n(o);return Kt(f)&&(f=t),Kt(i)?ua(i,fn(o,1,Kt,!0),t,f):[]});function m0(i,o,f){var g=i==null?0:i.length;return g?(o=f||o===t?1:ft(o),Zn(i,o<0?0:o,g)):[]}function g0(i,o,f){var g=i==null?0:i.length;return g?(o=f||o===t?1:ft(o),o=g-o,Zn(i,0,o<0?0:o)):[]}function _0(i,o){return i&&i.length?po(i,Ke(o,3),!0,!0):[]}function v0(i,o){return i&&i.length?po(i,Ke(o,3),!0):[]}function y0(i,o,f,g){var M=i==null?0:i.length;return M?(f&&typeof f!="number"&&Mn(i,o,f)&&(f=0,g=M),hv(i,o,f,g)):[]}function Ff(i,o,f){var g=i==null?0:i.length;if(!g)return-1;var M=f==null?0:ft(f);return M<0&&(M=nn(g+M,0)),qa(i,Ke(o,3),M)}function Bf(i,o,f){var g=i==null?0:i.length;if(!g)return-1;var M=g-1;return f!==t&&(M=ft(f),M=f<0?nn(g+M,0):gn(M,g-1)),qa(i,Ke(o,3),M,!0)}function zf(i){var o=i==null?0:i.length;return o?fn(i,1):[]}function x0(i){var o=i==null?0:i.length;return o?fn(i,ce):[]}function M0(i,o){var f=i==null?0:i.length;return f?(o=o===t?1:ft(o),fn(i,o)):[]}function S0(i){for(var o=-1,f=i==null?0:i.length,g={};++o<f;){var M=i[o];g[M[0]]=M[1]}return g}function kf(i){return i&&i.length?i[0]:t}function E0(i,o,f){var g=i==null?0:i.length;if(!g)return-1;var M=f==null?0:ft(f);return M<0&&(M=nn(g+M,0)),rs(i,o,M)}function T0(i){var o=i==null?0:i.length;return o?Zn(i,0,-1):[]}var b0=_t(function(i){var o=Gt(i,sc);return o.length&&o[0]===i[0]?Kl(o):[]}),A0=_t(function(i){var o=$n(i),f=Gt(i,sc);return o===$n(f)?o=t:f.pop(),f.length&&f[0]===i[0]?Kl(f,Ke(o,2)):[]}),w0=_t(function(i){var o=$n(i),f=Gt(i,sc);return o=typeof o=="function"?o:t,o&&f.pop(),f.length&&f[0]===i[0]?Kl(f,t,o):[]});function R0(i,o){return i==null?"":T_.call(i,o)}function $n(i){var o=i==null?0:i.length;return o?i[o-1]:t}function C0(i,o,f){var g=i==null?0:i.length;if(!g)return-1;var M=g;return f!==t&&(M=ft(f),M=M<0?nn(g+M,0):gn(M,g-1)),o===o?l_(i,o,M):qa(i,yh,M,!0)}function L0(i,o){return i&&i.length?Zh(i,ft(o)):t}var P0=_t(Hf);function Hf(i,o){return i&&i.length&&o&&o.length?Ql(i,o):i}function I0(i,o,f){return i&&i.length&&o&&o.length?Ql(i,o,Ke(f,2)):i}function D0(i,o,f){return i&&i.length&&o&&o.length?Ql(i,o,t,f):i}var N0=Di(function(i,o){var f=i==null?0:i.length,g=Xl(i,o);return Qh(i,Gt(o,function(M){return Ni(M,f)?+M:M}).sort(uf)),g});function U0(i,o){var f=[];if(!(i&&i.length))return f;var g=-1,M=[],b=i.length;for(o=Ke(o,3);++g<b;){var N=i[g];o(N,g,i)&&(f.push(N),M.push(g))}return Qh(i,M),f}function yc(i){return i==null?i:R_.call(i)}function O0(i,o,f){var g=i==null?0:i.length;return g?(f&&typeof f!="number"&&Mn(i,o,f)?(o=0,f=g):(o=o==null?0:ft(o),f=f===t?g:ft(f)),Zn(i,o,f)):[]}function F0(i,o){return fo(i,o)}function B0(i,o,f){return nc(i,o,Ke(f,2))}function z0(i,o){var f=i==null?0:i.length;if(f){var g=fo(i,o);if(g<f&&li(i[g],o))return g}return-1}function k0(i,o){return fo(i,o,!0)}function H0(i,o,f){return nc(i,o,Ke(f,2),!0)}function G0(i,o){var f=i==null?0:i.length;if(f){var g=fo(i,o,!0)-1;if(li(i[g],o))return g}return-1}function V0(i){return i&&i.length?tf(i):[]}function W0(i,o){return i&&i.length?tf(i,Ke(o,2)):[]}function X0(i){var o=i==null?0:i.length;return o?Zn(i,1,o):[]}function q0(i,o,f){return i&&i.length?(o=f||o===t?1:ft(o),Zn(i,0,o<0?0:o)):[]}function j0(i,o,f){var g=i==null?0:i.length;return g?(o=f||o===t?1:ft(o),o=g-o,Zn(i,o<0?0:o,g)):[]}function Y0(i,o){return i&&i.length?po(i,Ke(o,3),!1,!0):[]}function K0(i,o){return i&&i.length?po(i,Ke(o,3)):[]}var Z0=_t(function(i){return nr(fn(i,1,Kt,!0))}),$0=_t(function(i){var o=$n(i);return Kt(o)&&(o=t),nr(fn(i,1,Kt,!0),Ke(o,2))}),J0=_t(function(i){var o=$n(i);return o=typeof o=="function"?o:t,nr(fn(i,1,Kt,!0),t,o)});function Q0(i){return i&&i.length?nr(i):[]}function ey(i,o){return i&&i.length?nr(i,Ke(o,2)):[]}function ty(i,o){return o=typeof o=="function"?o:t,i&&i.length?nr(i,t,o):[]}function xc(i){if(!(i&&i.length))return[];var o=0;return i=$i(i,function(f){if(Kt(f))return o=nn(f.length,o),!0}),Fl(o,function(f){return Gt(i,Nl(f))})}function Gf(i,o){if(!(i&&i.length))return[];var f=xc(i);return o==null?f:Gt(f,function(g){return Un(o,t,g)})}var ny=_t(function(i,o){return Kt(i)?ua(i,o):[]}),iy=_t(function(i){return rc($i(i,Kt))}),ry=_t(function(i){var o=$n(i);return Kt(o)&&(o=t),rc($i(i,Kt),Ke(o,2))}),sy=_t(function(i){var o=$n(i);return o=typeof o=="function"?o:t,rc($i(i,Kt),t,o)}),ay=_t(xc);function oy(i,o){return af(i||[],o||[],ca)}function ly(i,o){return af(i||[],o||[],da)}var cy=_t(function(i){var o=i.length,f=o>1?i[o-1]:t;return f=typeof f=="function"?(i.pop(),f):t,Gf(i,f)});function Vf(i){var o=T(i);return o.__chain__=!0,o}function uy(i,o){return o(i),i}function Eo(i,o){return o(i)}var hy=Di(function(i){var o=i.length,f=o?i[0]:0,g=this.__wrapped__,M=function(b){return Xl(b,i)};return o>1||this.__actions__.length||!(g instanceof St)||!Ni(f)?this.thru(M):(g=g.slice(f,+f+(o?1:0)),g.__actions__.push({func:Eo,args:[M],thisArg:t}),new Yn(g,this.__chain__).thru(function(b){return o&&!b.length&&b.push(t),b}))});function fy(){return Vf(this)}function dy(){return new Yn(this.value(),this.__chain__)}function py(){this.__values__===t&&(this.__values__=id(this.value()));var i=this.__index__>=this.__values__.length,o=i?t:this.__values__[this.__index__++];return{done:i,value:o}}function my(){return this}function gy(i){for(var o,f=this;f instanceof oo;){var g=Of(f);g.__index__=0,g.__values__=t,o?M.__wrapped__=g:o=g;var M=g;f=f.__wrapped__}return M.__wrapped__=i,o}function _y(){var i=this.__wrapped__;if(i instanceof St){var o=i;return this.__actions__.length&&(o=new St(this)),o=o.reverse(),o.__actions__.push({func:Eo,args:[yc],thisArg:t}),new Yn(o,this.__chain__)}return this.thru(yc)}function vy(){return sf(this.__wrapped__,this.__actions__)}var yy=mo(function(i,o,f){Lt.call(i,f)?++i[f]:Pi(i,f,1)});function xy(i,o,f){var g=ot(i)?_h:uv;return f&&Mn(i,o,f)&&(o=t),g(i,Ke(o,3))}function My(i,o){var f=ot(i)?$i:Hh;return f(i,Ke(o,3))}var Sy=gf(Ff),Ey=gf(Bf);function Ty(i,o){return fn(To(i,o),1)}function by(i,o){return fn(To(i,o),ce)}function Ay(i,o,f){return f=f===t?1:ft(f),fn(To(i,o),f)}function Wf(i,o){var f=ot(i)?qn:tr;return f(i,Ke(o,3))}function Xf(i,o){var f=ot(i)?Xg:kh;return f(i,Ke(o,3))}var wy=mo(function(i,o,f){Lt.call(i,f)?i[f].push(o):Pi(i,f,[o])});function Ry(i,o,f,g){i=Ln(i)?i:gs(i),f=f&&!g?ft(f):0;var M=i.length;return f<0&&(f=nn(M+f,0)),Co(i)?f<=M&&i.indexOf(o,f)>-1:!!M&&rs(i,o,f)>-1}var Cy=_t(function(i,o,f){var g=-1,M=typeof o=="function",b=Ln(i)?Z(i.length):[];return tr(i,function(N){b[++g]=M?Un(o,N,f):ha(N,o,f)}),b}),Ly=mo(function(i,o,f){Pi(i,f,o)});function To(i,o){var f=ot(i)?Gt:jh;return f(i,Ke(o,3))}function Py(i,o,f,g){return i==null?[]:(ot(o)||(o=o==null?[]:[o]),f=g?t:f,ot(f)||(f=f==null?[]:[f]),$h(i,o,f))}var Iy=mo(function(i,o,f){i[f?0:1].push(o)},function(){return[[],[]]});function Dy(i,o,f){var g=ot(i)?Il:Mh,M=arguments.length<3;return g(i,Ke(o,4),f,M,tr)}function Ny(i,o,f){var g=ot(i)?qg:Mh,M=arguments.length<3;return g(i,Ke(o,4),f,M,kh)}function Uy(i,o){var f=ot(i)?$i:Hh;return f(i,wo(Ke(o,3)))}function Oy(i){var o=ot(i)?Oh:Rv;return o(i)}function Fy(i,o,f){(f?Mn(i,o,f):o===t)?o=1:o=ft(o);var g=ot(i)?sv:Cv;return g(i,o)}function By(i){var o=ot(i)?av:Pv;return o(i)}function zy(i){if(i==null)return 0;if(Ln(i))return Co(i)?as(i):i.length;var o=_n(i);return o==re||o==W?i.size:$l(i).length}function ky(i,o,f){var g=ot(i)?Dl:Iv;return f&&Mn(i,o,f)&&(o=t),g(i,Ke(o,3))}var Hy=_t(function(i,o){if(i==null)return[];var f=o.length;return f>1&&Mn(i,o[0],o[1])?o=[]:f>2&&Mn(o[0],o[1],o[2])&&(o=[o[0]]),$h(i,fn(o,1),[])}),bo=M_||function(){return hn.Date.now()};function Gy(i,o){if(typeof o!="function")throw new jn(l);return i=ft(i),function(){if(--i<1)return o.apply(this,arguments)}}function qf(i,o,f){return o=f?t:o,o=i&&o==null?i.length:o,Ii(i,D,t,t,t,t,o)}function jf(i,o){var f;if(typeof o!="function")throw new jn(l);return i=ft(i),function(){return--i>0&&(f=o.apply(this,arguments)),i<=1&&(o=t),f}}var Mc=_t(function(i,o,f){var g=y;if(f.length){var M=Qi(f,ps(Mc));g|=F}return Ii(i,g,o,f,M)}),Yf=_t(function(i,o,f){var g=y|v;if(f.length){var M=Qi(f,ps(Yf));g|=F}return Ii(o,g,i,f,M)});function Kf(i,o,f){o=f?t:o;var g=Ii(i,A,t,t,t,t,t,o);return g.placeholder=Kf.placeholder,g}function Zf(i,o,f){o=f?t:o;var g=Ii(i,R,t,t,t,t,t,o);return g.placeholder=Zf.placeholder,g}function $f(i,o,f){var g,M,b,N,B,V,oe=0,le=!1,ge=!1,De=!0;if(typeof i!="function")throw new jn(l);o=Jn(o)||0,Wt(f)&&(le=!!f.leading,ge="maxWait"in f,b=ge?nn(Jn(f.maxWait)||0,o):b,De="trailing"in f?!!f.trailing:De);function We(Zt){var ci=g,Fi=M;return g=M=t,oe=Zt,N=i.apply(Fi,ci),N}function Qe(Zt){return oe=Zt,B=ga(Mt,o),le?We(Zt):N}function pt(Zt){var ci=Zt-V,Fi=Zt-oe,gd=o-ci;return ge?gn(gd,b-Fi):gd}function et(Zt){var ci=Zt-V,Fi=Zt-oe;return V===t||ci>=o||ci<0||ge&&Fi>=b}function Mt(){var Zt=bo();if(et(Zt))return Tt(Zt);B=ga(Mt,pt(Zt))}function Tt(Zt){return B=t,De&&g?We(Zt):(g=M=t,N)}function zn(){B!==t&&of(B),oe=0,g=V=M=B=t}function Sn(){return B===t?N:Tt(bo())}function kn(){var Zt=bo(),ci=et(Zt);if(g=arguments,M=this,V=Zt,ci){if(B===t)return Qe(V);if(ge)return of(B),B=ga(Mt,o),We(V)}return B===t&&(B=ga(Mt,o)),N}return kn.cancel=zn,kn.flush=Sn,kn}var Vy=_t(function(i,o){return zh(i,1,o)}),Wy=_t(function(i,o,f){return zh(i,Jn(o)||0,f)});function Xy(i){return Ii(i,w)}function Ao(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new jn(l);var f=function(){var g=arguments,M=o?o.apply(this,g):g[0],b=f.cache;if(b.has(M))return b.get(M);var N=i.apply(this,g);return f.cache=b.set(M,N)||b,N};return f.cache=new(Ao.Cache||Li),f}Ao.Cache=Li;function wo(i){if(typeof i!="function")throw new jn(l);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function qy(i){return jf(2,i)}var jy=Dv(function(i,o){o=o.length==1&&ot(o[0])?Gt(o[0],On(Ke())):Gt(fn(o,1),On(Ke()));var f=o.length;return _t(function(g){for(var M=-1,b=gn(g.length,f);++M<b;)g[M]=o[M].call(this,g[M]);return Un(i,this,g)})}),Sc=_t(function(i,o){var f=Qi(o,ps(Sc));return Ii(i,F,t,o,f)}),Jf=_t(function(i,o){var f=Qi(o,ps(Jf));return Ii(i,U,t,o,f)}),Yy=Di(function(i,o){return Ii(i,J,t,t,t,o)});function Ky(i,o){if(typeof i!="function")throw new jn(l);return o=o===t?o:ft(o),_t(i,o)}function Zy(i,o){if(typeof i!="function")throw new jn(l);return o=o==null?0:nn(ft(o),0),_t(function(f){var g=f[o],M=rr(f,0,o);return g&&Ji(M,g),Un(i,this,M)})}function $y(i,o,f){var g=!0,M=!0;if(typeof i!="function")throw new jn(l);return Wt(f)&&(g="leading"in f?!!f.leading:g,M="trailing"in f?!!f.trailing:M),$f(i,o,{leading:g,maxWait:o,trailing:M})}function Jy(i){return qf(i,1)}function Qy(i,o){return Sc(ac(o),i)}function ex(){if(!arguments.length)return[];var i=arguments[0];return ot(i)?i:[i]}function tx(i){return Kn(i,_)}function nx(i,o){return o=typeof o=="function"?o:t,Kn(i,_,o)}function ix(i){return Kn(i,p|_)}function rx(i,o){return o=typeof o=="function"?o:t,Kn(i,p|_,o)}function sx(i,o){return o==null||Bh(i,o,an(o))}function li(i,o){return i===o||i!==i&&o!==o}var ax=yo(Yl),ox=yo(function(i,o){return i>=o}),Lr=Wh(function(){return arguments}())?Wh:function(i){return qt(i)&&Lt.call(i,"callee")&&!Lh.call(i,"callee")},ot=Z.isArray,lx=hh?On(hh):gv;function Ln(i){return i!=null&&Ro(i.length)&&!Ui(i)}function Kt(i){return qt(i)&&Ln(i)}function cx(i){return i===!0||i===!1||qt(i)&&xn(i)==fe}var sr=E_||Dc,ux=fh?On(fh):_v;function hx(i){return qt(i)&&i.nodeType===1&&!_a(i)}function fx(i){if(i==null)return!0;if(Ln(i)&&(ot(i)||typeof i=="string"||typeof i.splice=="function"||sr(i)||ms(i)||Lr(i)))return!i.length;var o=_n(i);if(o==re||o==W)return!i.size;if(ma(i))return!$l(i).length;for(var f in i)if(Lt.call(i,f))return!1;return!0}function dx(i,o){return fa(i,o)}function px(i,o,f){f=typeof f=="function"?f:t;var g=f?f(i,o):t;return g===t?fa(i,o,t,f):!!g}function Ec(i){if(!qt(i))return!1;var o=xn(i);return o==lt||o==He||typeof i.message=="string"&&typeof i.name=="string"&&!_a(i)}function mx(i){return typeof i=="number"&&Ih(i)}function Ui(i){if(!Wt(i))return!1;var o=xn(i);return o==j||o==Vt||o==Oe||o==L}function Qf(i){return typeof i=="number"&&i==ft(i)}function Ro(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=se}function Wt(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function qt(i){return i!=null&&typeof i=="object"}var ed=dh?On(dh):yv;function gx(i,o){return i===o||Zl(i,o,dc(o))}function _x(i,o,f){return f=typeof f=="function"?f:t,Zl(i,o,dc(o),f)}function vx(i){return td(i)&&i!=+i}function yx(i){if(n0(i))throw new st(a);return Xh(i)}function xx(i){return i===null}function Mx(i){return i==null}function td(i){return typeof i=="number"||qt(i)&&xn(i)==Ce}function _a(i){if(!qt(i)||xn(i)!=Xe)return!1;var o=eo(i);if(o===null)return!0;var f=Lt.call(o,"constructor")&&o.constructor;return typeof f=="function"&&f instanceof f&&Za.call(f)==__}var Tc=ph?On(ph):xv;function Sx(i){return Qf(i)&&i>=-se&&i<=se}var nd=mh?On(mh):Mv;function Co(i){return typeof i=="string"||!ot(i)&&qt(i)&&xn(i)==ae}function Bn(i){return typeof i=="symbol"||qt(i)&&xn(i)==de}var ms=gh?On(gh):Sv;function Ex(i){return i===t}function Tx(i){return qt(i)&&_n(i)==ke}function bx(i){return qt(i)&&xn(i)==Ie}var Ax=yo(Jl),wx=yo(function(i,o){return i<=o});function id(i){if(!i)return[];if(Ln(i))return Co(i)?ai(i):Cn(i);if(ra&&i[ra])return s_(i[ra]());var o=_n(i),f=o==re?zl:o==W?ja:gs;return f(i)}function Oi(i){if(!i)return i===0?i:0;if(i=Jn(i),i===ce||i===-ce){var o=i<0?-1:1;return o*ue}return i===i?i:0}function ft(i){var o=Oi(i),f=o%1;return o===o?f?o-f:o:0}function rd(i){return i?Ar(ft(i),0,Se):0}function Jn(i){if(typeof i=="number")return i;if(Bn(i))return he;if(Wt(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Wt(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=Sh(i);var f=X.test(i);return f||Q.test(i)?Gg(i.slice(2),f?2:8):C.test(i)?he:+i}function sd(i){return vi(i,Pn(i))}function Rx(i){return i?Ar(ft(i),-se,se):i===0?i:0}function Rt(i){return i==null?"":Fn(i)}var Cx=fs(function(i,o){if(ma(o)||Ln(o)){vi(o,an(o),i);return}for(var f in o)Lt.call(o,f)&&ca(i,f,o[f])}),ad=fs(function(i,o){vi(o,Pn(o),i)}),Lo=fs(function(i,o,f,g){vi(o,Pn(o),i,g)}),Lx=fs(function(i,o,f,g){vi(o,an(o),i,g)}),Px=Di(Xl);function Ix(i,o){var f=hs(i);return o==null?f:Fh(f,o)}var Dx=_t(function(i,o){i=Nt(i);var f=-1,g=o.length,M=g>2?o[2]:t;for(M&&Mn(o[0],o[1],M)&&(g=1);++f<g;)for(var b=o[f],N=Pn(b),B=-1,V=N.length;++B<V;){var oe=N[B],le=i[oe];(le===t||li(le,ls[oe])&&!Lt.call(i,oe))&&(i[oe]=b[oe])}return i}),Nx=_t(function(i){return i.push(t,Ef),Un(od,t,i)});function Ux(i,o){return vh(i,Ke(o,3),_i)}function Ox(i,o){return vh(i,Ke(o,3),jl)}function Fx(i,o){return i==null?i:ql(i,Ke(o,3),Pn)}function Bx(i,o){return i==null?i:Gh(i,Ke(o,3),Pn)}function zx(i,o){return i&&_i(i,Ke(o,3))}function kx(i,o){return i&&jl(i,Ke(o,3))}function Hx(i){return i==null?[]:uo(i,an(i))}function Gx(i){return i==null?[]:uo(i,Pn(i))}function bc(i,o,f){var g=i==null?t:wr(i,o);return g===t?f:g}function Vx(i,o){return i!=null&&Af(i,o,fv)}function Ac(i,o){return i!=null&&Af(i,o,dv)}var Wx=vf(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=$a.call(o)),i[o]=f},Rc(In)),Xx=vf(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=$a.call(o)),Lt.call(i,o)?i[o].push(f):i[o]=[f]},Ke),qx=_t(ha);function an(i){return Ln(i)?Uh(i):$l(i)}function Pn(i){return Ln(i)?Uh(i,!0):Ev(i)}function jx(i,o){var f={};return o=Ke(o,3),_i(i,function(g,M,b){Pi(f,o(g,M,b),g)}),f}function Yx(i,o){var f={};return o=Ke(o,3),_i(i,function(g,M,b){Pi(f,M,o(g,M,b))}),f}var Kx=fs(function(i,o,f){ho(i,o,f)}),od=fs(function(i,o,f,g){ho(i,o,f,g)}),Zx=Di(function(i,o){var f={};if(i==null)return f;var g=!1;o=Gt(o,function(b){return b=ir(b,i),g||(g=b.length>1),b}),vi(i,hc(i),f),g&&(f=Kn(f,p|m|_,Wv));for(var M=o.length;M--;)ic(f,o[M]);return f});function $x(i,o){return ld(i,wo(Ke(o)))}var Jx=Di(function(i,o){return i==null?{}:bv(i,o)});function ld(i,o){if(i==null)return{};var f=Gt(hc(i),function(g){return[g]});return o=Ke(o),Jh(i,f,function(g,M){return o(g,M[0])})}function Qx(i,o,f){o=ir(o,i);var g=-1,M=o.length;for(M||(M=1,i=t);++g<M;){var b=i==null?t:i[yi(o[g])];b===t&&(g=M,b=f),i=Ui(b)?b.call(i):b}return i}function eM(i,o,f){return i==null?i:da(i,o,f)}function tM(i,o,f,g){return g=typeof g=="function"?g:t,i==null?i:da(i,o,f,g)}var cd=Mf(an),ud=Mf(Pn);function nM(i,o,f){var g=ot(i),M=g||sr(i)||ms(i);if(o=Ke(o,4),f==null){var b=i&&i.constructor;M?f=g?new b:[]:Wt(i)?f=Ui(b)?hs(eo(i)):{}:f={}}return(M?qn:_i)(i,function(N,B,V){return o(f,N,B,V)}),f}function iM(i,o){return i==null?!0:ic(i,o)}function rM(i,o,f){return i==null?i:rf(i,o,ac(f))}function sM(i,o,f,g){return g=typeof g=="function"?g:t,i==null?i:rf(i,o,ac(f),g)}function gs(i){return i==null?[]:Bl(i,an(i))}function aM(i){return i==null?[]:Bl(i,Pn(i))}function oM(i,o,f){return f===t&&(f=o,o=t),f!==t&&(f=Jn(f),f=f===f?f:0),o!==t&&(o=Jn(o),o=o===o?o:0),Ar(Jn(i),o,f)}function lM(i,o,f){return o=Oi(o),f===t?(f=o,o=0):f=Oi(f),i=Jn(i),pv(i,o,f)}function cM(i,o,f){if(f&&typeof f!="boolean"&&Mn(i,o,f)&&(o=f=t),f===t&&(typeof o=="boolean"?(f=o,o=t):typeof i=="boolean"&&(f=i,i=t)),i===t&&o===t?(i=0,o=1):(i=Oi(i),o===t?(o=i,i=0):o=Oi(o)),i>o){var g=i;i=o,o=g}if(f||i%1||o%1){var M=Dh();return gn(i+M*(o-i+Hg("1e-"+((M+"").length-1))),o)}return ec(i,o)}var uM=ds(function(i,o,f){return o=o.toLowerCase(),i+(f?hd(o):o)});function hd(i){return wc(Rt(i).toLowerCase())}function fd(i){return i=Rt(i),i&&i.replace(Fe,e_).replace(Pg,"")}function hM(i,o,f){i=Rt(i),o=Fn(o);var g=i.length;f=f===t?g:Ar(ft(f),0,g);var M=f;return f-=o.length,f>=0&&i.slice(f,M)==o}function fM(i){return i=Rt(i),i&&Ye.test(i)?i.replace(be,t_):i}function dM(i){return i=Rt(i),i&&Vn.test(i)?i.replace(Qt,"\\$&"):i}var pM=ds(function(i,o,f){return i+(f?"-":"")+o.toLowerCase()}),mM=ds(function(i,o,f){return i+(f?" ":"")+o.toLowerCase()}),gM=mf("toLowerCase");function _M(i,o,f){i=Rt(i),o=ft(o);var g=o?as(i):0;if(!o||g>=o)return i;var M=(o-g)/2;return vo(ro(M),f)+i+vo(io(M),f)}function vM(i,o,f){i=Rt(i),o=ft(o);var g=o?as(i):0;return o&&g<o?i+vo(o-g,f):i}function yM(i,o,f){i=Rt(i),o=ft(o);var g=o?as(i):0;return o&&g<o?vo(o-g,f)+i:i}function xM(i,o,f){return f||o==null?o=0:o&&(o=+o),w_(Rt(i).replace($r,""),o||0)}function MM(i,o,f){return(f?Mn(i,o,f):o===t)?o=1:o=ft(o),tc(Rt(i),o)}function SM(){var i=arguments,o=Rt(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var EM=ds(function(i,o,f){return i+(f?"_":"")+o.toLowerCase()});function TM(i,o,f){return f&&typeof f!="number"&&Mn(i,o,f)&&(o=f=t),f=f===t?Se:f>>>0,f?(i=Rt(i),i&&(typeof o=="string"||o!=null&&!Tc(o))&&(o=Fn(o),!o&&ss(i))?rr(ai(i),0,f):i.split(o,f)):[]}var bM=ds(function(i,o,f){return i+(f?" ":"")+wc(o)});function AM(i,o,f){return i=Rt(i),f=f==null?0:Ar(ft(f),0,i.length),o=Fn(o),i.slice(f,f+o.length)==o}function wM(i,o,f){var g=T.templateSettings;f&&Mn(i,o,f)&&(o=t),i=Rt(i),o=Lo({},o,g,Sf);var M=Lo({},o.imports,g.imports,Sf),b=an(M),N=Bl(M,b),B,V,oe=0,le=o.interpolate||Ve,ge="__p += '",De=kl((o.escape||Ve).source+"|"+le.source+"|"+(le===At?bl:Ve).source+"|"+(o.evaluate||Ve).source+"|$","g"),We="//# sourceURL="+(Lt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Og+"]")+`
`;i.replace(De,function(et,Mt,Tt,zn,Sn,kn){return Tt||(Tt=zn),ge+=i.slice(oe,kn).replace($e,n_),Mt&&(B=!0,ge+=`' +
__e(`+Mt+`) +
'`),Sn&&(V=!0,ge+=`';
`+Sn+`;
__p += '`),Tt&&(ge+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),oe=kn+et.length,et}),ge+=`';
`;var Qe=Lt.call(o,"variable")&&o.variable;if(!Qe)ge=`with (obj) {
`+ge+`
}
`;else if(Ga.test(Qe))throw new st(c);ge=(V?ge.replace(xt,""):ge).replace(ut,"$1").replace(Re,"$1;"),ge="function("+(Qe||"obj")+`) {
`+(Qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var pt=pd(function(){return wt(b,We+"return "+ge).apply(t,N)});if(pt.source=ge,Ec(pt))throw pt;return pt}function RM(i){return Rt(i).toLowerCase()}function CM(i){return Rt(i).toUpperCase()}function LM(i,o,f){if(i=Rt(i),i&&(f||o===t))return Sh(i);if(!i||!(o=Fn(o)))return i;var g=ai(i),M=ai(o),b=Eh(g,M),N=Th(g,M)+1;return rr(g,b,N).join("")}function PM(i,o,f){if(i=Rt(i),i&&(f||o===t))return i.slice(0,Ah(i)+1);if(!i||!(o=Fn(o)))return i;var g=ai(i),M=Th(g,ai(o))+1;return rr(g,0,M).join("")}function IM(i,o,f){if(i=Rt(i),i&&(f||o===t))return i.replace($r,"");if(!i||!(o=Fn(o)))return i;var g=ai(i),M=Eh(g,ai(o));return rr(g,M).join("")}function DM(i,o){var f=I,g=$;if(Wt(o)){var M="separator"in o?o.separator:M;f="length"in o?ft(o.length):f,g="omission"in o?Fn(o.omission):g}i=Rt(i);var b=i.length;if(ss(i)){var N=ai(i);b=N.length}if(f>=b)return i;var B=f-as(g);if(B<1)return g;var V=N?rr(N,0,B).join(""):i.slice(0,B);if(M===t)return V+g;if(N&&(B+=V.length-B),Tc(M)){if(i.slice(B).search(M)){var oe,le=V;for(M.global||(M=kl(M.source,Rt(Va.exec(M))+"g")),M.lastIndex=0;oe=M.exec(le);)var ge=oe.index;V=V.slice(0,ge===t?B:ge)}}else if(i.indexOf(Fn(M),B)!=B){var De=V.lastIndexOf(M);De>-1&&(V=V.slice(0,De))}return V+g}function NM(i){return i=Rt(i),i&&Ae.test(i)?i.replace(z,c_):i}var UM=ds(function(i,o,f){return i+(f?" ":"")+o.toUpperCase()}),wc=mf("toUpperCase");function dd(i,o,f){return i=Rt(i),o=f?t:o,o===t?r_(i)?f_(i):Kg(i):i.match(o)||[]}var pd=_t(function(i,o){try{return Un(i,t,o)}catch(f){return Ec(f)?f:new st(f)}}),OM=Di(function(i,o){return qn(o,function(f){f=yi(f),Pi(i,f,Mc(i[f],i))}),i});function FM(i){var o=i==null?0:i.length,f=Ke();return i=o?Gt(i,function(g){if(typeof g[1]!="function")throw new jn(l);return[f(g[0]),g[1]]}):[],_t(function(g){for(var M=-1;++M<o;){var b=i[M];if(Un(b[0],this,g))return Un(b[1],this,g)}})}function BM(i){return cv(Kn(i,p))}function Rc(i){return function(){return i}}function zM(i,o){return i==null||i!==i?o:i}var kM=_f(),HM=_f(!0);function In(i){return i}function Cc(i){return qh(typeof i=="function"?i:Kn(i,p))}function GM(i){return Yh(Kn(i,p))}function VM(i,o){return Kh(i,Kn(o,p))}var WM=_t(function(i,o){return function(f){return ha(f,i,o)}}),XM=_t(function(i,o){return function(f){return ha(i,f,o)}});function Lc(i,o,f){var g=an(o),M=uo(o,g);f==null&&!(Wt(o)&&(M.length||!g.length))&&(f=o,o=i,i=this,M=uo(o,an(o)));var b=!(Wt(f)&&"chain"in f)||!!f.chain,N=Ui(i);return qn(M,function(B){var V=o[B];i[B]=V,N&&(i.prototype[B]=function(){var oe=this.__chain__;if(b||oe){var le=i(this.__wrapped__),ge=le.__actions__=Cn(this.__actions__);return ge.push({func:V,args:arguments,thisArg:i}),le.__chain__=oe,le}return V.apply(i,Ji([this.value()],arguments))})}),i}function qM(){return hn._===this&&(hn._=v_),this}function Pc(){}function jM(i){return i=ft(i),_t(function(o){return Zh(o,i)})}var YM=lc(Gt),KM=lc(_h),ZM=lc(Dl);function md(i){return mc(i)?Nl(yi(i)):Av(i)}function $M(i){return function(o){return i==null?t:wr(i,o)}}var JM=yf(),QM=yf(!0);function Ic(){return[]}function Dc(){return!1}function eS(){return{}}function tS(){return""}function nS(){return!0}function iS(i,o){if(i=ft(i),i<1||i>se)return[];var f=Se,g=gn(i,Se);o=Ke(o),i-=Se;for(var M=Fl(g,o);++f<i;)o(f);return M}function rS(i){return ot(i)?Gt(i,yi):Bn(i)?[i]:Cn(Uf(Rt(i)))}function sS(i){var o=++g_;return Rt(i)+o}var aS=_o(function(i,o){return i+o},0),oS=cc("ceil"),lS=_o(function(i,o){return i/o},1),cS=cc("floor");function uS(i){return i&&i.length?co(i,In,Yl):t}function hS(i,o){return i&&i.length?co(i,Ke(o,2),Yl):t}function fS(i){return xh(i,In)}function dS(i,o){return xh(i,Ke(o,2))}function pS(i){return i&&i.length?co(i,In,Jl):t}function mS(i,o){return i&&i.length?co(i,Ke(o,2),Jl):t}var gS=_o(function(i,o){return i*o},1),_S=cc("round"),vS=_o(function(i,o){return i-o},0);function yS(i){return i&&i.length?Ol(i,In):0}function xS(i,o){return i&&i.length?Ol(i,Ke(o,2)):0}return T.after=Gy,T.ary=qf,T.assign=Cx,T.assignIn=ad,T.assignInWith=Lo,T.assignWith=Lx,T.at=Px,T.before=jf,T.bind=Mc,T.bindAll=OM,T.bindKey=Yf,T.castArray=ex,T.chain=Vf,T.chunk=c0,T.compact=u0,T.concat=h0,T.cond=FM,T.conforms=BM,T.constant=Rc,T.countBy=yy,T.create=Ix,T.curry=Kf,T.curryRight=Zf,T.debounce=$f,T.defaults=Dx,T.defaultsDeep=Nx,T.defer=Vy,T.delay=Wy,T.difference=f0,T.differenceBy=d0,T.differenceWith=p0,T.drop=m0,T.dropRight=g0,T.dropRightWhile=_0,T.dropWhile=v0,T.fill=y0,T.filter=My,T.flatMap=Ty,T.flatMapDeep=by,T.flatMapDepth=Ay,T.flatten=zf,T.flattenDeep=x0,T.flattenDepth=M0,T.flip=Xy,T.flow=kM,T.flowRight=HM,T.fromPairs=S0,T.functions=Hx,T.functionsIn=Gx,T.groupBy=wy,T.initial=T0,T.intersection=b0,T.intersectionBy=A0,T.intersectionWith=w0,T.invert=Wx,T.invertBy=Xx,T.invokeMap=Cy,T.iteratee=Cc,T.keyBy=Ly,T.keys=an,T.keysIn=Pn,T.map=To,T.mapKeys=jx,T.mapValues=Yx,T.matches=GM,T.matchesProperty=VM,T.memoize=Ao,T.merge=Kx,T.mergeWith=od,T.method=WM,T.methodOf=XM,T.mixin=Lc,T.negate=wo,T.nthArg=jM,T.omit=Zx,T.omitBy=$x,T.once=qy,T.orderBy=Py,T.over=YM,T.overArgs=jy,T.overEvery=KM,T.overSome=ZM,T.partial=Sc,T.partialRight=Jf,T.partition=Iy,T.pick=Jx,T.pickBy=ld,T.property=md,T.propertyOf=$M,T.pull=P0,T.pullAll=Hf,T.pullAllBy=I0,T.pullAllWith=D0,T.pullAt=N0,T.range=JM,T.rangeRight=QM,T.rearg=Yy,T.reject=Uy,T.remove=U0,T.rest=Ky,T.reverse=yc,T.sampleSize=Fy,T.set=eM,T.setWith=tM,T.shuffle=By,T.slice=O0,T.sortBy=Hy,T.sortedUniq=V0,T.sortedUniqBy=W0,T.split=TM,T.spread=Zy,T.tail=X0,T.take=q0,T.takeRight=j0,T.takeRightWhile=Y0,T.takeWhile=K0,T.tap=uy,T.throttle=$y,T.thru=Eo,T.toArray=id,T.toPairs=cd,T.toPairsIn=ud,T.toPath=rS,T.toPlainObject=sd,T.transform=nM,T.unary=Jy,T.union=Z0,T.unionBy=$0,T.unionWith=J0,T.uniq=Q0,T.uniqBy=ey,T.uniqWith=ty,T.unset=iM,T.unzip=xc,T.unzipWith=Gf,T.update=rM,T.updateWith=sM,T.values=gs,T.valuesIn=aM,T.without=ny,T.words=dd,T.wrap=Qy,T.xor=iy,T.xorBy=ry,T.xorWith=sy,T.zip=ay,T.zipObject=oy,T.zipObjectDeep=ly,T.zipWith=cy,T.entries=cd,T.entriesIn=ud,T.extend=ad,T.extendWith=Lo,Lc(T,T),T.add=aS,T.attempt=pd,T.camelCase=uM,T.capitalize=hd,T.ceil=oS,T.clamp=oM,T.clone=tx,T.cloneDeep=ix,T.cloneDeepWith=rx,T.cloneWith=nx,T.conformsTo=sx,T.deburr=fd,T.defaultTo=zM,T.divide=lS,T.endsWith=hM,T.eq=li,T.escape=fM,T.escapeRegExp=dM,T.every=xy,T.find=Sy,T.findIndex=Ff,T.findKey=Ux,T.findLast=Ey,T.findLastIndex=Bf,T.findLastKey=Ox,T.floor=cS,T.forEach=Wf,T.forEachRight=Xf,T.forIn=Fx,T.forInRight=Bx,T.forOwn=zx,T.forOwnRight=kx,T.get=bc,T.gt=ax,T.gte=ox,T.has=Vx,T.hasIn=Ac,T.head=kf,T.identity=In,T.includes=Ry,T.indexOf=E0,T.inRange=lM,T.invoke=qx,T.isArguments=Lr,T.isArray=ot,T.isArrayBuffer=lx,T.isArrayLike=Ln,T.isArrayLikeObject=Kt,T.isBoolean=cx,T.isBuffer=sr,T.isDate=ux,T.isElement=hx,T.isEmpty=fx,T.isEqual=dx,T.isEqualWith=px,T.isError=Ec,T.isFinite=mx,T.isFunction=Ui,T.isInteger=Qf,T.isLength=Ro,T.isMap=ed,T.isMatch=gx,T.isMatchWith=_x,T.isNaN=vx,T.isNative=yx,T.isNil=Mx,T.isNull=xx,T.isNumber=td,T.isObject=Wt,T.isObjectLike=qt,T.isPlainObject=_a,T.isRegExp=Tc,T.isSafeInteger=Sx,T.isSet=nd,T.isString=Co,T.isSymbol=Bn,T.isTypedArray=ms,T.isUndefined=Ex,T.isWeakMap=Tx,T.isWeakSet=bx,T.join=R0,T.kebabCase=pM,T.last=$n,T.lastIndexOf=C0,T.lowerCase=mM,T.lowerFirst=gM,T.lt=Ax,T.lte=wx,T.max=uS,T.maxBy=hS,T.mean=fS,T.meanBy=dS,T.min=pS,T.minBy=mS,T.stubArray=Ic,T.stubFalse=Dc,T.stubObject=eS,T.stubString=tS,T.stubTrue=nS,T.multiply=gS,T.nth=L0,T.noConflict=qM,T.noop=Pc,T.now=bo,T.pad=_M,T.padEnd=vM,T.padStart=yM,T.parseInt=xM,T.random=cM,T.reduce=Dy,T.reduceRight=Ny,T.repeat=MM,T.replace=SM,T.result=Qx,T.round=_S,T.runInContext=G,T.sample=Oy,T.size=zy,T.snakeCase=EM,T.some=ky,T.sortedIndex=F0,T.sortedIndexBy=B0,T.sortedIndexOf=z0,T.sortedLastIndex=k0,T.sortedLastIndexBy=H0,T.sortedLastIndexOf=G0,T.startCase=bM,T.startsWith=AM,T.subtract=vS,T.sum=yS,T.sumBy=xS,T.template=wM,T.times=iS,T.toFinite=Oi,T.toInteger=ft,T.toLength=rd,T.toLower=RM,T.toNumber=Jn,T.toSafeInteger=Rx,T.toString=Rt,T.toUpper=CM,T.trim=LM,T.trimEnd=PM,T.trimStart=IM,T.truncate=DM,T.unescape=NM,T.uniqueId=sS,T.upperCase=UM,T.upperFirst=wc,T.each=Wf,T.eachRight=Xf,T.first=kf,Lc(T,function(){var i={};return _i(T,function(o,f){Lt.call(T.prototype,f)||(i[f]=o)}),i}(),{chain:!1}),T.VERSION=n,qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){T[i].placeholder=T}),qn(["drop","take"],function(i,o){St.prototype[i]=function(f){f=f===t?1:nn(ft(f),0);var g=this.__filtered__&&!o?new St(this):this.clone();return g.__filtered__?g.__takeCount__=gn(f,g.__takeCount__):g.__views__.push({size:gn(f,Se),type:i+(g.__dir__<0?"Right":"")}),g},St.prototype[i+"Right"]=function(f){return this.reverse()[i](f).reverse()}}),qn(["filter","map","takeWhile"],function(i,o){var f=o+1,g=f==k||f==ee;St.prototype[i]=function(M){var b=this.clone();return b.__iteratees__.push({iteratee:Ke(M,3),type:f}),b.__filtered__=b.__filtered__||g,b}}),qn(["head","last"],function(i,o){var f="take"+(o?"Right":"");St.prototype[i]=function(){return this[f](1).value()[0]}}),qn(["initial","tail"],function(i,o){var f="drop"+(o?"":"Right");St.prototype[i]=function(){return this.__filtered__?new St(this):this[f](1)}}),St.prototype.compact=function(){return this.filter(In)},St.prototype.find=function(i){return this.filter(i).head()},St.prototype.findLast=function(i){return this.reverse().find(i)},St.prototype.invokeMap=_t(function(i,o){return typeof i=="function"?new St(this):this.map(function(f){return ha(f,i,o)})}),St.prototype.reject=function(i){return this.filter(wo(Ke(i)))},St.prototype.slice=function(i,o){i=ft(i);var f=this;return f.__filtered__&&(i>0||o<0)?new St(f):(i<0?f=f.takeRight(-i):i&&(f=f.drop(i)),o!==t&&(o=ft(o),f=o<0?f.dropRight(-o):f.take(o-i)),f)},St.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},St.prototype.toArray=function(){return this.take(Se)},_i(St.prototype,function(i,o){var f=/^(?:filter|find|map|reject)|While$/.test(o),g=/^(?:head|last)$/.test(o),M=T[g?"take"+(o=="last"?"Right":""):o],b=g||/^find/.test(o);M&&(T.prototype[o]=function(){var N=this.__wrapped__,B=g?[1]:arguments,V=N instanceof St,oe=B[0],le=V||ot(N),ge=function(Mt){var Tt=M.apply(T,Ji([Mt],B));return g&&De?Tt[0]:Tt};le&&f&&typeof oe=="function"&&oe.length!=1&&(V=le=!1);var De=this.__chain__,We=!!this.__actions__.length,Qe=b&&!De,pt=V&&!We;if(!b&&le){N=pt?N:new St(this);var et=i.apply(N,B);return et.__actions__.push({func:Eo,args:[ge],thisArg:t}),new Yn(et,De)}return Qe&&pt?i.apply(this,B):(et=this.thru(ge),Qe?g?et.value()[0]:et.value():et)})}),qn(["pop","push","shift","sort","splice","unshift"],function(i){var o=Ya[i],f=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",g=/^(?:pop|shift)$/.test(i);T.prototype[i]=function(){var M=arguments;if(g&&!this.__chain__){var b=this.value();return o.apply(ot(b)?b:[],M)}return this[f](function(N){return o.apply(ot(N)?N:[],M)})}}),_i(St.prototype,function(i,o){var f=T[o];if(f){var g=f.name+"";Lt.call(us,g)||(us[g]=[]),us[g].push({name:o,func:f})}}),us[go(t,v).name]=[{name:"wrapper",func:t}],St.prototype.clone=N_,St.prototype.reverse=U_,St.prototype.value=O_,T.prototype.at=hy,T.prototype.chain=fy,T.prototype.commit=dy,T.prototype.next=py,T.prototype.plant=gy,T.prototype.reverse=_y,T.prototype.toJSON=T.prototype.valueOf=T.prototype.value=vy,T.prototype.first=T.prototype.head,ra&&(T.prototype[ra]=my),T},os=d_();Sr?((Sr.exports=os)._=os,Cl._=os):hn._=os}).call(wa)})(_l,_l.exports);var cL=_l.exports;const Ra=lL(cL);function uL(){Sg.remove();let s=hL.value;const e=MC({on_finish:function(){e.data.get().json(),j()}});function t(re){return re[Math.floor(Math.random()*re.length)]}let n=document.createElement("div");n.setAttribute("id","loadingScreenBG");let r=document.createElement("div");r.setAttribute("id","loadingText"),r.innerHTML="Loading...";function a(){document.body.appendChild(n),document.body.appendChild(r),ee()}let l,c,u,h,d,p,m,_,x,S,y;const v=new y1,P=[],A=[],R=[],F=[],U=["RED","GREEN","YELLOW","BLUE","ORANGE"],D=new ng;D.onLoad=function(){ce()};let J,w,I=0;const $=[],ie=[],Me=[],k=[],q=[];function ee(){const re=new AC(D),Ce=["DISTRACTOR.glb","TARGET.glb"];let xe;for(let Xe=0;Xe<Ce.length;Xe++)re.load("models/"+Ce[Xe],function(ze){xe=ze.scene.children[0],xe.scale.set(.5,.5,.5),xe.name.includes("DISTRACTOR")?P.push(xe):A.push(xe)},function(ze){console.log(ze.loaded/ze.total*100+"% loaded")},function(ze){console.log(ze)})}function ce(){d=document.getElementById("jspsych-canvas-stimulus"),u=new Zm({antialias:!0,canvas:d}),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio),document.body.appendChild(u.domElement),l=new GR,l.background=new it("#e1e1e1"),c=new An(50,window.innerWidth/window.innerHeight,.1,1e3),c.position.z=20,c.lookAt(0,0,0),l.add(c),m=new _1(4210752,25),l.add(m),x=new Lu(16777215,2),_=new Lu(16777215,2),x.position.set(1,1,1),x.lookAt(0,0,0),_.position.set(-1,1,-1),_.lookAt(0,0,0),l.add(x,_),h=new oL(c,u.domElement),h.maxDistance=25,h.minDistance=15,h.update(),se(99,1),u.render(l,c),d.style.display="none",r.style.display="none",n.style.display="none",S.style.display="initial"}function se(re,Ce){for(let xe=0;xe<re;xe++){let Xe=P[0].clone(),ze=t(U);Xe.material=new Oa({color:ze,roughness:.5}),R.push(Xe)}for(let xe=0;xe<Ce;xe++){let Xe=A[0].clone();Xe.material=new Oa({color:"RED",roughness:.5}),F.push(Xe)}}function ue(re,Ce,xe){let Xe=!0,ze=0,L=!1,E=[];for(let W=0;W<Ce.length;W++){let ae=Ce[W];ae.position.x=(Math.random()-.5)*xe,ae.position.y=(Math.random()-.5)*xe,ae.position.z=(Math.random()-.5)*xe,ae.rotation.x=(Math.random()-.5)*xe,ae.rotation.y=(Math.random()-.5)*xe,ae.rotation.z=(Math.random()-.5)*xe,l.add(ae);let de=new mi().setFromObject(ae);E.push(de)}for(let W=0;W<re.length;W++){let ae=re[W];for(Xe=!0;Xe==!0;){ae.position.x=(Math.random()-.5)*xe,ae.position.y=(Math.random()-.5)*xe,ae.position.z=(Math.random()-.5)*xe,ae.rotation.x=(Math.random()-.5)*xe,ae.rotation.y=(Math.random()-.5)*xe,ae.rotation.z=(Math.random()-.5)*xe;let de=new mi().setFromObject(ae);for(let ye=0;ye<E.length;){let ke=E[ye];if(de.intersectsBox(ke)==!0){L=!1;break}else L=!0;ye++,ye==E.length&&L==!0&&(Xe=!1,E.push(de),l.add(ae))}ze==1e3&&(Xe=!1),ze++}}}function he(){for(let re=0;re<R.length;re++)l.remove(R[re]);for(let re=0;re<F.length;re++)l.remove(F[re]);cancelAnimationFrame(p),$.length=0,ie.length=0,Me.length=0,k.length=0,q.length=0}function Se(){for(let re=0;re<R.length;re++){let Ce=t(U);R[re].material.color=new it(Ce)}}function Te(){c.position.z=20,c.lookAt(0,0,0),h.update(),J=h.getAzimuthalAngle(),w=h.getPolarAngle(),I=0,Se(),y.style.display="none",d.style.display="initial",v.start(),_e()}function te(re){$.push(re.angularSpeed),ie.push(re.TIME),Me.push(re.rDistance),k.push(re.azimuthAngle),q.push(re.polarAngle)}function _e(){p=requestAnimationFrame(_e),h.update();let re=Le();re.angularSpeed&&te(re),u.render(l,c)}function Le(){let re=v.getElapsedTime(),Ce=re-I,xe=h.getAzimuthalAngle(),Xe=h.getPolarAngle(),ze=Math.abs(xe)-Math.abs(J),L=Math.abs(Xe)-Math.abs(w),E=L/Ce+ze/Ce,W={};return E>0&&(W.TIME=re,W.DELTA_TIME=Ce,W.Azimuthal=ze/Ce,W.Polar=L/Ce,W.angularSpeed=E,W.rDistance=h.getDistance(),W.azimuthAngle=xe,W.polarAngle=Xe),J=xe,w=Xe,I=re,W}let Ne={type:vg,on_load:function(){y=document.getElementById("jspsych-content"),S=document.getElementById("jspsych-canvas-button-response-btngroup"),y.style.display="flex",y.style.flexDirection="column-reverse",S.style.display="none"},stimulus:a,prompt:"<br> Loading complete, please click continue to begin!",choices:["Continue"],on_finish:function(re){y.style.flexDirection="column",re.trial_type="PRE_LOAD_TRIAL"}},Oe={type:Uu,stimulus:'<h2>Instruction Page</h2><br><p>This is an example of using JSPsych and Three.js to create and run an interactive search experiment online.</p><br><p>In this demonstration, you will have to interactively search for a red T shape, amongst multi-coloured L shapes.</p><p>You can use your mouse or trackpad to orbit around the scene, just click and drag anywhere on the screen.</p><p> If you think the scene DOES contain the target, press the <b>"M"</b> key.</p><p> If you think the scene DOES NOT contain the target, press the <b>"Z"</b> key.</p><br><p>When you are ready to start, press continue!</p>',choices:["Continue"],on_finish:function(re){re.trial_type="INTRO_TRIAL"}},fe={type:yg,on_start:function(){e.pauseExperiment(),ue(R,F,10),y.style.display="block",e.resumeExperiment()},stimulus:'<p style="font-size: 48px;">+</p>',choices:"NO_KEYS",trial_duration:1e3,on_finish:function(re){re.trial_type="FIXATION_TRIAL"}},pe={type:_g,stimulus:Te,choices:["z","m"],on_finish:function(re){e.pauseExperiment(),re.trial_type="SEARCH_TRIAL",re.angularTime=Ra.cloneDeep(ie),re.angularSpeed=Ra.cloneDeep($),re.rDistance=Ra.cloneDeep(Me),re.azimuthAngle=Ra.cloneDeep(k),re.polarAngle=Ra.cloneDeep(q),d.style.display="none",he(),e.resumeExperiment()}},He={type:Uu,on_start:function(){d.style.display="none",y.style.display="block"},stimulus:"<h2>Debrief Page</h2><p>The demonstration is now over.</p><br><p>This is a simple experiment, but hopefully you can see that with a little time spent coding, you can create a vast range of experiments that utilize the power of WebGL.</p><br><p>Click the button below to finish the experiment and get your data!</p>",choices:["Finish Experiment"],on_finish:function(re){re.trial_type="DEBRIEF_TRIAL"}},lt=[[Ne,Oe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He],[Ne,Oe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,fe,pe,He]];e.run(lt[s-1]),window.addEventListener("resize",function(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)});function j(){let re=document.getElementsByClassName("jspsych-content-wrapper");re[0].style.display="none";let Ce=document.createElement("button"),xe=document.createElement("button"),Xe=document.createElement("p"),ze=document.createElement("p"),L=document.createElement("div"),E=document.createElement("div");ze.innerHTML="Click one of the two buttons to view your data. You can either display the data in CSV format within your browser or download the csv file directly to your machine.",document.body.appendChild(L),document.body.appendChild(E),L.setAttribute("id","parentDiv"),E.setAttribute("id","childDiv"),Ce.innerHTML="View Data in Browser",xe.innerHTML="Download Data",Ce.setAttribute("id","endButton"),xe.setAttribute("id","downloadButton"),E.append(ze),E.append(Ce),E.append(xe),E.append(Xe),Ce.addEventListener("click",function(){Ce.style.display="none",xe.style.display="none",ze.style.display="none",re[0].style.display="initial",e.data.displayData("csv")}),xe.addEventListener("click",function(){const W=new File([e.data.get().csv()],"interactiveSearchData.csv",{type:"text/plain"});Ce.style.display="none",xe.style.display="none",ze.style.display="none",re[0].style.display="initial",Vt(W),Xe.innerHTML="Thanks!"})}function Vt(re){const Ce=document.createElement("a"),xe=URL.createObjectURL(re);Ce.href=xe,Ce.download=re.name,document.body.appendChild(Ce),Ce.click(),document.body.removeChild(Ce),window.URL.revokeObjectURL(xe)}}let Sg=document.getElementById("startButton");Sg.addEventListener("click",uL);let hL=document.getElementById("trialDropDown");
