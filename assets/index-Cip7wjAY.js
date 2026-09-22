(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="180",$l=0,Aa=1,jl=2,Bc=1,zc=2,xn=3,zn=0,Ft=1,Dt=2,Fn=0,Ai=1,Ra=2,Ca=3,Pa=4,Ql=5,jn=100,eu=101,tu=102,nu=103,iu=104,ru=200,su=201,ou=202,au=203,to=204,no=205,cu=206,lu=207,uu=208,hu=209,du=210,fu=211,pu=212,mu=213,gu=214,io=0,ro=1,so=2,Ci=3,oo=4,ao=5,co=6,lo=7,kc=0,_u=1,vu=2,On=0,xu=1,Mu=2,Su=3,Hc=4,yu=5,Eu=6,Tu=7,Vc=300,Pi=301,Li=302,uo=303,ho=304,ls=306,fo=1e3,ei=1001,po=1002,tn=1003,bu=1004,Mr=1005,on=1006,xs=1007,ti=1008,ln=1009,Gc=1010,Wc=1011,rr=1012,Qo=1013,si=1014,Sn=1015,fr=1016,ea=1017,ta=1018,sr=1020,Xc=35902,qc=35899,Yc=1021,Jc=1022,en=1023,or=1026,ar=1027,Zc=1028,na=1029,Kc=1030,ia=1031,ra=1033,Jr=33776,Zr=33777,Kr=33778,$r=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,Mo=37492,So=37496,yo=37808,Eo=37809,To=37810,bo=37811,wo=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Do=37818,Io=37819,Uo=37820,No=37821,Fo=36492,Oo=36494,Bo=36495,zo=36283,ko=36284,Ho=36285,Vo=36286,wu=3200,Au=3201,$c=0,Ru=1,Ln="",Vt="srgb",Di="srgb-linear",ts="linear",et="srgb",di=7680,La=519,Cu=512,Pu=513,Lu=514,jc=515,Du=516,Iu=517,Uu=518,Nu=519,Da=35044,Ia="300 es",an=2e3,ns=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,Go=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Fu(n,e){return(n%e+e)%e}function Ss(n,e,t){return(1-t)*n+t*e}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*v,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,d*E);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const M=a*E;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,u=u*p+v*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new I,Ua=new pr;class Oe{constructor(e,t,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],E=r[1],S=r[4],M=r[7],A=r[2],w=r[5],C=r[8];return s[0]=o*v+a*E+l*A,s[3]=o*p+a*S+l*w,s[6]=o*d+a*M+l*C,s[1]=c*v+h*E+u*A,s[4]=c*p+h*S+u*w,s[7]=c*d+h*M+u*C,s[2]=f*v+m*E+g*A,s[5]=f*p+m*S+g*w,s[8]=f*d+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*u+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Oe;function Qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ou(){const n=is("canvas");return n.style.display="block",n}const Na={};function cr(n){n in Na||(Na[n]=!0,console.warn(n))}function Bu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Fa=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const n={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=yn(r.r),r.g=yn(r.g),r.b=yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Di]:{primaries:e,whitePoint:i,transfer:ts,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const Je=zu();function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ri(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fi;class ku{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fi===void 0&&(fi=is("canvas")),fi.width=e.width,fi.height=e.height;const r=fi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hu=0;class sa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ts(r[o].image)):s.push(Ts(r[o]))}else s=Ts(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ts(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vu=0;const bs=new I;class Ot extends zi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=ei,r=ei,s=on,o=ti,a=en,l=ln,c=Ot.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ki(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bs).x}get height(){return this.source.getSize(bs).y}get depth(){return this.source.getSize(bs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Vc;Ot.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(m+1)/2,A=(d+1)/2,w=(h+f)/4,C=(u+v)/4,D=(g+p)/4;return S>M&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=C/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=D/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Gu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class el extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(s,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),yr.subVectors(this.max,Yi),pi.subVectors(e.a,Yi),mi.subVectors(e.b,Yi),gi.subVectors(e.c,Yi),Tn.subVectors(mi,pi),bn.subVectors(gi,mi),Xn.subVectors(pi,gi);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Xn.z,Xn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Xn.z,0,-Xn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Xn.y,Xn.x,0];return!ws(t,pi,mi,gi,yr)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,pi,mi,gi,yr))?!1:(Er.crossVectors(Tn,bn),t=[Er.x,Er.y,Er.z],ws(t,pi,mi,gi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new I,new I,new I,new I,new I,new I,new I,new I],Jt=new I,Sr=new mr,pi=new I,mi=new I,gi=new I,Tn=new I,bn=new I,Xn=new I,Yi=new I,yr=new I,Er=new I,qn=new I;function ws(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qn.fromArray(n,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=i.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xu=new mr,Ji=new I,As=new I;class us{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(As)),this.expandByPoint(Ji.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mn=new I,Rs=new I,Tr=new I,wn=new I,Cs=new I,br=new I,Ps=new I;class oa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rs.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Rs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=wn.dot(this.direction),l=-wn.dot(Tr),c=wn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rs).addScaledVector(Tr,f),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,i,r,s){Cs.subVectors(t,e),br.subVectors(i,e),Ps.crossVectors(Cs,br);let o=this.direction.dot(Ps),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(br.crossVectors(wn,br));if(l<0)return null;const c=a*this.direction.dot(Cs.cross(wn));if(c<0||l+c>o)return null;const h=-a*wn.dot(Ps);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,c,h,u,f,m,g,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,f,m,g,v,p)}set(e,t,i,r,s,o,a,l,c,h,u,f,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,Yu)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),An.crossVectors(i,kt),An.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),An.crossVectors(i,kt)),An.normalize(),wr.crossVectors(kt,An),r[0]=An.x,r[4]=wr.x,r[8]=kt.x,r[1]=An.y,r[5]=wr.y,r[9]=kt.y,r[2]=An.z,r[6]=wr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],E=i[3],S=i[7],M=i[11],A=i[15],w=r[0],C=r[4],D=r[8],x=r[12],y=r[1],R=r[5],F=r[9],G=r[13],Y=r[2],q=r[6],J=r[10],j=r[14],X=r[3],oe=r[7],de=r[11],be=r[15];return s[0]=o*w+a*y+l*Y+c*X,s[4]=o*C+a*R+l*q+c*oe,s[8]=o*D+a*F+l*J+c*de,s[12]=o*x+a*G+l*j+c*be,s[1]=h*w+u*y+f*Y+m*X,s[5]=h*C+u*R+f*q+m*oe,s[9]=h*D+u*F+f*J+m*de,s[13]=h*x+u*G+f*j+m*be,s[2]=g*w+v*y+p*Y+d*X,s[6]=g*C+v*R+p*q+d*oe,s[10]=g*D+v*F+p*J+d*de,s[14]=g*x+v*G+p*j+d*be,s[3]=E*w+S*y+M*Y+A*X,s[7]=E*C+S*R+M*q+A*oe,s[11]=E*D+S*F+M*J+A*de,s[15]=E*x+S*G+M*j+A*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*u-t*a*m-s*o*u+i*o*m+s*a*h-i*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],E=u*p*c-v*f*c+v*l*m-a*p*m-u*l*d+a*f*d,S=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,M=h*v*c-g*u*c+g*a*m-o*v*m-h*a*d+o*u*d,A=g*u*l-h*v*l-g*a*f+o*v*f+h*a*p-o*u*p,w=t*E+i*S+r*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=E*C,e[1]=(v*f*s-u*p*s-v*r*m+i*p*m+u*r*d-i*f*d)*C,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*m-i*l*m)*C,e[4]=S*C,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*d+t*f*d)*C,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*C,e[8]=M*C,e[9]=(g*u*s-h*v*s-g*i*m+t*v*m+h*i*d-t*u*d)*C,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*d+t*a*d)*C,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*m-t*a*m)*C,e[12]=A*C,e[13]=(h*v*r-g*u*r+g*i*f-t*v*f-h*i*p+t*u*p)*C,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*p-t*a*p)*C,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,v=o*h,p=o*u,d=a*u,E=l*c,S=l*h,M=l*u,A=i.x,w=i.y,C=i.z;return r[0]=(1-(v+d))*A,r[1]=(m+M)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(f+d))*w,r[6]=(p+E)*w,r[7]=0,r[8]=(g+S)*C,r[9]=(p-E)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_i.set(r[0],r[1],r[2]).length();const o=_i.set(r[4],r[5],r[6]).length(),a=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,h=1/o,u=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=an,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===an)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ns)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=an,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===an)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===ns)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _i=new I,Zt=new ct,qu=new I(0,0,0),Yu=new I(1,1,1),An=new I,wr=new I,kt=new I,Ba=new ct,za=new pr;class un{constructor(e=0,t=0,i=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ba,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const ka=new I,vi=new pr,gn=new ct,Ar=new I,Zi=new I,Zu=new I,Ku=new pr,Ha=new I(1,0,0),Va=new I(0,1,0),Ga=new I(0,0,1),Wa={type:"added"},$u={type:"removed"},xi={type:"childadded",child:null},Ls={type:"childremoved",child:null};class Tt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new un,i=new pr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Ha,e)}rotateY(e){return this.rotateOnAxis(Va,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ha,e)}translateY(e){return this.translateOnAxis(Va,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ar.copy(e):Ar.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Zi,Ar,this.up):gn.lookAt(Ar,Zi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wa),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($u),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wa),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new I,_n=new I,Ds=new I,vn=new I,Mi=new I,Si=new I,Xa=new I,Is=new I,Us=new I,Ns=new I,Fs=new gt,Os=new gt,Bs=new gt;class Qt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kt.subVectors(r,t),_n.subVectors(i,t),Ds.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(_n),l=Kt.dot(Ds),c=_n.dot(_n),h=_n.dot(Ds),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fs.setScalar(0),Os.setScalar(0),Bs.setScalar(0),Fs.fromBufferAttribute(e,t),Os.fromBufferAttribute(e,i),Bs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fs,s.x),o.addScaledVector(Os,s.y),o.addScaledVector(Bs,s.z),o}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),_n.subVectors(e,t),Kt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Kt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mi.subVectors(r,i),Si.subVectors(s,i),Is.subVectors(e,i);const l=Mi.dot(Is),c=Si.dot(Is);if(l<=0&&c<=0)return t.copy(i);Us.subVectors(e,r);const h=Mi.dot(Us),u=Si.dot(Us);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Mi,o);Ns.subVectors(e,s);const m=Mi.dot(Ns),g=Si.dot(Ns);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Si,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Xa.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(Xa,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function zs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Fu(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zs(o,s,e+1/3),this.g=zs(o,s,e),this.b=zs(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=tl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Ve(Rt.r*255,0,255))*65536+Math.round(Ve(Rt.g*255,0,255))*256+Math.round(Ve(Rt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Vt){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Rr);const i=Ss(Rn.h,Rr.h,t),r=Ss(Rn.s,Rr.s,t),s=Ss(Rn.l,Rr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Xe;Xe.NAMES=tl;let ju=0;class Hi extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ai,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==to&&(i.blendSrc=this.blendSrc),this.blendDst!==no&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hn extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new I,Cr=new pe;let Qu=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Da,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class nl extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class il extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ke extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eh=0;const Yt=new ct,ks=new Tt,yi=new I,Ht=new mr,Ki=new mr,yt=new I;class wt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?il:nl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Ht.min,Ki.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,Ki.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(Ki.min),Ht.expandByPoint(Ki.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yt.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(e,c),yt.add(yi)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;const c=new I,h=new I,u=new I,f=new pe,m=new pe,g=new pe,v=new I,p=new I;function d(D,x,y){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[D].add(v),a[x].add(v),a[y].add(v),l[D].add(p),l[x].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,x=E.length;D<x;++D){const y=E[D],R=y.start,F=y.count;for(let G=R,Y=R+F;G<Y;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new I,M=new I,A=new I,w=new I;function C(D){A.fromBufferAttribute(r,D),w.copy(A);const x=a[D];S.copy(x),S.sub(A.multiplyScalar(A.dot(x))).normalize(),M.crossVectors(w,x);const R=M.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,R)}for(let D=0,x=E.length;D<x;++D){const y=E[D],R=y.start,F=y.count;for(let G=R,Y=R+F;G<Y;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new ct,Yn=new oa,Pr=new us,Ya=new I,Lr=new I,Dr=new I,Ir=new I,Hs=new I,Ur=new I,Ja=new I,Nr=new I;class tt extends Tt{constructor(e=new wt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Hs.fromBufferAttribute(u,e),o?Ur.addScaledVector(Hs,h):Ur.addScaledVector(Hs.sub(t),h))}t.add(Ur)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Pr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Pr,Ya)===null||Yn.origin.distanceToSquared(Ya)>(e.far-e.near)**2))&&(qa.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(qa),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,A=S;M<A;M+=3){const w=a.getX(M),C=a.getX(M+1),D=a.getX(M+2);r=Fr(this,d,e,i,c,h,u,w,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const E=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);r=Fr(this,o,e,i,c,h,u,E,S,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,A=S;M<A;M+=3){const w=M,C=M+1,D=M+2;r=Fr(this,d,e,i,c,h,u,w,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const E=p,S=p+1,M=p+2;r=Fr(this,o,e,i,c,h,u,E,S,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function th(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zn,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:n}}function Fr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Lr),n.getVertexPosition(l,Dr),n.getVertexPosition(c,Ir);const h=th(n,e,t,i,Lr,Dr,Ir,Ja);if(h){const u=new I;Qt.getBarycoord(Ja,Lr,Dr,Ir,u),r&&(h.uv=Qt.getInterpolatedAttribute(r,a,l,c,u,new pe)),s&&(h.uv1=Qt.getInterpolatedAttribute(s,a,l,c,u,new pe)),o&&(h.normal=Qt.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Qt.getNormal(Lr,Dr,Ir,f.normal),h.face=f,h.barycoord=u}return h}class xt extends wt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(v,p,d,E,S,M,A,w,C,D,x){const y=M/C,R=A/D,F=M/2,G=A/2,Y=w/2,q=C+1,J=D+1;let j=0,X=0;const oe=new I;for(let de=0;de<J;de++){const be=de*R-G;for(let ze=0;ze<q;ze++){const ke=ze*y-F;oe[v]=ke*E,oe[p]=be*S,oe[d]=Y,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[p]=0,oe[d]=w>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(ze/C),u.push(1-de/D),j+=1}}for(let de=0;de<D;de++)for(let be=0;be<C;be++){const ze=f+be+q*de,ke=f+be+q*(de+1),rt=f+(be+1)+q*(de+1),qe=f+(be+1)+q*de;l.push(ze,ke,qe),l.push(ke,rt,qe),X+=6}a.addGroup(m,X,x),m+=X,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Ii(n[t]);for(const r in i)e[r]=i[r]}return e}function nh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const ih={clone:Ii,merge:Lt};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new I,Za=new pe,Ka=new pe;class $t extends sl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Za,Ka),t.subVectors(Ka,Za)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class oh extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ei,Ti,e,t);r.layers=this.layers,this.add(r);const s=new $t(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const o=new $t(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ei,Ti,e,t);a.layers=this.layers,this.add(a);const l=new $t(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ei,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ol extends Ot{constructor(e=[],t=Pi,i,r,s,o,a,l,c,h){super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ah extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ol(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xt(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Fn});s.uniforms.tEquirect.value=t;const o=new tt(r,s),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=on),new oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class It extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ch={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ch)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class al extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gs=new I,lh=new I,uh=new Oe;class Pn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gs.subVectors(i,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uh.getNormalMatrix(e),r=this.coplanarPoint(Gs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new us,hh=new pe(.5,.5),Or=new I;class ca{constructor(e=new Pn,t=new Pn,i=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],m=s[7],g=s[8],v=s[9],p=s[10],d=s[11],E=s[12],S=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-o,m-h,d-g,A-E).normalize(),r[1].setComponents(c+o,m+h,d+g,A+E).normalize(),r[2].setComponents(c+a,m+u,d+v,A+S).normalize(),r[3].setComponents(c-a,m-u,d-v,A-S).normalize(),i)r[4].setComponents(l,f,p,M).normalize(),r[5].setComponents(c-l,m-f,d-p,A-M).normalize();else if(r[4].setComponents(c-l,m-f,d-p,A-M).normalize(),t===an)r[5].setComponents(c+l,m+f,d+p,A+M).normalize();else if(t===ns)r[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=hh.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Or.x=r.normal.x>0?e.max.x:e.min.x,Or.y=r.normal.y>0?e.max.y:e.min.y,Or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cl extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rs=new I,ss=new I,$a=new ct,$i=new oa,Br=new us,Ws=new I,ja=new I;class dh extends Tt{constructor(e=new wt,t=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)rs.fromBufferAttribute(t,r-1),ss.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=rs.distanceTo(ss);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Br.radius+=s,e.ray.intersectsSphere(Br)===!1)return;$a.copy(r).invert(),$i.copy(e.ray).applyMatrix4($a);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const d=h.getX(v),E=h.getX(v+1),S=zr(this,e,$i,l,d,E,v);S&&t.push(S)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),d=zr(this,e,$i,l,v,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const d=zr(this,e,$i,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=zr(this,e,$i,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zr(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(rs.fromBufferAttribute(a,r),ss.fromBufferAttribute(a,s),t.distanceSqToSegment(rs,ss,Ws,ja)>i)return;Ws.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ws);if(!(c<e.near||c>e.far))return{distance:c,point:ja.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class ll extends Ot{constructor(e,t,i=si,r,s,o,a=tn,l=tn,c,h=or,u=1){if(h!==or&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ul extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class la extends wt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,h=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=i+u/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gt extends wt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const v=[],p=i/2;let d=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(m,2));function E(){const M=new I,A=new I;let w=0;const C=(t-e)/i;for(let D=0;D<=s;D++){const x=[],y=D/s,R=y*(t-e)+e;for(let F=0;F<=r;F++){const G=F/r,Y=G*l+a,q=Math.sin(Y),J=Math.cos(Y);A.x=R*q,A.y=-y*i+p,A.z=R*J,u.push(A.x,A.y,A.z),M.set(q,C,J).normalize(),f.push(M.x,M.y,M.z),m.push(G,1-y),x.push(g++)}v.push(x)}for(let D=0;D<r;D++)for(let x=0;x<s;x++){const y=v[x][D],R=v[x+1][D],F=v[x+1][D+1],G=v[x][D+1];(e>0||x!==0)&&(h.push(y,R,G),w+=3),(t>0||x!==s-1)&&(h.push(R,F,G),w+=3)}c.addGroup(d,w,0),d+=w}function S(M){const A=g,w=new pe,C=new I;let D=0;const x=M===!0?e:t,y=M===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const R=g;for(let F=0;F<=r;F++){const Y=F/r*l+a,q=Math.cos(Y),J=Math.sin(Y);C.x=x*J,C.y=p*y,C.z=x*q,u.push(C.x,C.y,C.z),f.push(0,y,0),w.x=q*.5+.5,w.y=J*.5*y+.5,m.push(w.x,w.y),g++}for(let F=0;F<r;F++){const G=A+F,Y=R+F;M===!0?h.push(Y,Y+1,G):h.push(Y+1,Y,G),D+=3}c.addGroup(d,D,M===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends Gt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ai(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends wt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new I,M=new I,A=new I;for(let w=0;w<t.length;w+=3)m(t[w+0],S),m(t[w+1],M),m(t[w+2],A),l(S,M,A,E)}function l(E,S,M,A){const w=A+1,C=[];for(let D=0;D<=w;D++){C[D]=[];const x=E.clone().lerp(M,D/w),y=S.clone().lerp(M,D/w),R=w-D;for(let F=0;F<=R;F++)F===0&&D===w?C[D][F]=x:C[D][F]=x.clone().lerp(y,F/R)}for(let D=0;D<w;D++)for(let x=0;x<2*(w-D)-1;x++){const y=Math.floor(x/2);x%2===0?(f(C[D][y+1]),f(C[D+1][y]),f(C[D][y])):(f(C[D][y+1]),f(C[D+1][y+1]),f(C[D+1][y]))}}function c(E){const S=new I;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(E),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}function h(){const E=new I;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const M=p(E)/2/Math.PI+.5,A=d(E)/Math.PI+.5;o.push(M,1-A)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const S=o[E+0],M=o[E+2],A=o[E+4],w=Math.max(S,M,A),C=Math.min(S,M,A);w>.9&&C<.1&&(S<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function m(E,S){const M=E*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){const E=new I,S=new I,M=new I,A=new I,w=new pe,C=new pe,D=new pe;for(let x=0,y=0;x<s.length;x+=9,y+=6){E.set(s[x+0],s[x+1],s[x+2]),S.set(s[x+3],s[x+4],s[x+5]),M.set(s[x+6],s[x+7],s[x+8]),w.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),A.copy(E).add(S).add(M).divideScalar(3);const R=p(A);v(w,y+0,E,R),v(C,y+2,S,R),v(D,y+4,M,R)}}function v(E,S,M,A){A<0&&E.x===1&&(o[S]=E.x-1),M.x===0&&M.z===0&&(o[S]=A/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.vertices,e.indices,e.radius,e.details)}}class os extends hs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new os(e.radius,e.detail)}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(o-h)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new pe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,l=new ct;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Ve(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ua extends dn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fh extends ua{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ha(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const kr=new I,Xs=new ha,qs=new ha,Ys=new ha;class ph extends dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(kr.subVectors(r[0],r[1]).add(r[0]),c=kr);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(kr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Xs.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),qs.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),Ys.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qs.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ys.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Xs.calc(l),qs.calc(l),Ys.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qa(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function mh(n,e){const t=1-n;return t*t*e}function gh(n,e){return 2*(1-n)*n*e}function _h(n,e){return n*n*e}function er(n,e,t,i){return mh(n,e)+gh(n,t)+_h(n,i)}function vh(n,e){const t=1-n;return t*t*t*e}function xh(n,e){const t=1-n;return 3*t*t*n*e}function Mh(n,e){return 3*(1-n)*n*n*e}function Sh(n,e){return n*n*n*e}function tr(n,e,t,i,r){return vh(n,e)+xh(n,t)+Mh(n,i)+Sh(n,r)}class hl extends dn{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(tr(e,r.x,s.x,o.x,a.x),tr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yh extends dn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(tr(e,r.x,s.x,o.x,a.x),tr(e,r.y,s.y,o.y,a.y),tr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dl extends dn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eh extends dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fl extends dn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(er(e,r.x,s.x,o.x),er(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class da extends dn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(er(e,r.x,s.x,o.x),er(e,r.y,s.y,o.y),er(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pl extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Qa(a,l.x,c.x,h.x,u.x),Qa(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var Wo=Object.freeze({__proto__:null,ArcCurve:fh,CatmullRomCurve3:ph,CubicBezierCurve:hl,CubicBezierCurve3:yh,EllipseCurve:ua,LineCurve:dl,LineCurve3:Eh,QuadraticBezierCurve:fl,QuadraticBezierCurve3:da,SplineCurve:pl});class Th extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Wo[r.type]().fromJSON(r))}return this}}class ec extends Th{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dl(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new fl(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new hl(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ua(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ml extends ec{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ec().fromJSON(r))}return this}}function bh(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=gl(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Ph(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){const m=n[f],g=n[f+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return lr(s,o,t,a,l,c,0),o}function gl(n,e,t,i,r){let s;if(r===Hh(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=tc(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=tc(o/i|0,n[o],n[o+1],s);return s&&Ui(s,s.next)&&(hr(s),s=s.next),s}function ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ui(t,t.next)||dt(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function lr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Nh(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Ah(n,i,r,s):wh(n)){e.push(l.i,n.i,c.i),hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Rh(ci(n),e),lr(n,e,t,i,r,s,2)):o===2&&Ch(n,e,t,i,r,s):lr(ci(n),e,t,i,r,s,1);break}}}function wh(n){const e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),m=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ji(r,a,s,l,o,c,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ah(n,e,t,i){const r=n.prev,s=n,o=n.next;if(dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),p=Math.max(h,u,f),d=Xo(m,g,e,t,i),E=Xo(v,p,e,t,i);let S=n.prevZ,M=n.nextZ;for(;S&&S.z>=d&&M&&M.z<=E;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&ji(a,h,l,u,c,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&ji(a,h,l,u,c,f,M.x,M.y)&&dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=d;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&ji(a,h,l,u,c,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=E;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&ji(a,h,l,u,c,f,M.x,M.y)&&dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rh(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ui(i,r)&&vl(i,t,t.next,r)&&ur(i,r)&&ur(r,i)&&(e.push(i.i,t.i,r.i),hr(t),hr(t.next),t=n=r),t=t.next}while(t!==n);return ci(t)}function Ch(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bh(o,a)){let l=xl(o,a);o=ci(o,o.next),l=ci(l,l.next),lr(o,e,t,i,r,s,0),lr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Ph(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=gl(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Oh(c))}r.sort(Lh);for(let s=0;s<r.length;s++)t=Dh(r[s],t);return t}function Lh(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Dh(n,e){const t=Ih(n,e);if(!t)return e;const i=xl(t,n);return ci(i,i.next),ci(t,t.next)}function Ih(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Ui(n,t))return t;do{if(Ui(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_l(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);ur(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Uh(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Uh(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function Nh(n,e,t,i){let r=n;do r.z===0&&(r.z=Xo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Fh(r)}function Fh(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Xo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Oh(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _l(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ji(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&_l(n,e,t,i,r,s,o,a)}function Bh(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zh(n,e)&&(ur(n,e)&&ur(e,n)&&kh(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||Ui(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ui(n,e){return n.x===e.x&&n.y===e.y}function vl(n,e,t,i){const r=Vr(dt(n,e,t)),s=Vr(dt(n,e,i)),o=Vr(dt(t,i,n)),a=Vr(dt(t,i,e));return!!(r!==s&&o!==a||r===0&&Hr(n,t,e)||s===0&&Hr(n,i,e)||o===0&&Hr(t,n,i)||a===0&&Hr(t,e,i))}function Hr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vr(n){return n>0?1:n<0?-1:0}function zh(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ur(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function kh(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xl(n,e){const t=qo(n.i,n.x,n.y),i=qo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function tc(n,e,t,i){const r=qo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hh(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Vh{static triangulate(e,t,i=2){return bh(e,t,i)}}class nr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return nr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];nc(e),ic(i,e);let o=e.length;t.forEach(nc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,ic(i,t[l]);const a=Vh.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function nc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ic(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ds extends hs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ds(e.radius,e.detail)}}class Vi extends wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const E=d*f-o;for(let S=0;S<c;S++){const M=S*u-s;g.push(M,-E,0),v.push(0,0,1),p.push(S/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const S=E+c*d,M=E+c*(d+1),A=E+1+c*(d+1),w=E+1+c*d;m.push(S,M,w),m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class li extends wt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/r,m=new I,g=new pe;for(let v=0;v<=r;v++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<r;v++){const p=v*(i+1);for(let d=0;d<i;d++){const E=d+p,S=E,M=E+i+1,A=E+i+2,w=E+1;a.push(S,M,w),a.push(M,A,w)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fa extends wt{constructor(e=new ml([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(s,3)),this.setAttribute("uv",new Ke(o,2));function c(h){const u=r.length/3,f=h.extractPoints(t);let m=f.shape;const g=f.holes;nr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){const E=g[p];nr.isClockWise(E)===!0&&(g[p]=E.reverse())}const v=nr.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){const E=g[p];m=m.concat(E)}for(let p=0,d=m.length;p<d;p++){const E=m[p];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let p=0,d=v.length;p<d;p++){const E=v[p],S=E[0]+u,M=E[1]+u,A=E[2]+u;i.push(S,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gh(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new fa(i,e.curveSegments)}}function Gh(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Wt extends wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,m=[],g=[],v=[],p=[];for(let d=0;d<=i;d++){const E=[],S=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(r+w*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+w*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(w+M,1-S),E.push(c++)}h.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const S=h[d][E+1],M=h[d][E],A=h[d+1][E],w=h[d+1][E+1];(d!==0||o>0)&&m.push(S,M,w),(d!==i-1||l<Math.PI)&&m.push(M,A,w)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ni extends wt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,E=(r+1)*m+g;o.push(v,p,E),o.push(p,d,E)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pa extends wt{constructor(e=new da(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new pe;let h=new I;const u=[],f=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(m,2));function v(){for(let S=0;S<t;S++)p(S);p(s===!1?t:0),E(),d()}function p(S){h=e.getPointAt(S/t,h);const M=o.normals[S],A=o.binormals[S];for(let w=0;w<=r;w++){const C=w/r*Math.PI*2,D=Math.sin(C),x=-Math.cos(C);l.x=x*M.x+D*A.x,l.y=x*M.y+D*A.y,l.z=x*M.z+D*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let S=1;S<=t;S++)for(let M=1;M<=r;M++){const A=(r+1)*(S-1)+(M-1),w=(r+1)*S+(M-1),C=(r+1)*S+M,D=(r+1)*(S-1)+M;g.push(A,w,D),g.push(w,C,D)}}function E(){for(let S=0;S<=t;S++)for(let M=0;M<=r;M++)c.x=S/t,c.y=M/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pa(new Wo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fi extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wh extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xh extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ml extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sl extends Ml{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Js=new ct,rc=new I,sc=new I;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),Js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Js,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fs extends sl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yh extends qh{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jh extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const oc=new ct;class El{constructor(e,t,i=0,r=1/0){this.ray=new oa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(e,t=!0,i=[]){return Yo(e,this,i,t),i.sort(ac),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yo(e[r],this,i,t);return i.sort(ac),i}}function ac(n,e){return n.distance-e.distance}function Yo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Yo(s[o],e,t,!0)}}function cc(n,e,t,i){const r=Kh(i);switch(t){case Yc:return n*e;case Zc:return n*e/r.components*r.byteLength;case na:return n*e/r.components*r.byteLength;case Kc:return n*e*2/r.components*r.byteLength;case ia:return n*e*2/r.components*r.byteLength;case Jc:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case ra:return n*e*4/r.components*r.byteLength;case Jr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kr:case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(n,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(e,8)/2;case xo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Oo:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zo:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ho:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kh(n){switch(n){case ln:case Gc:return{byteLength:1,components:1};case rr:case Wc:case fr:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case si:case Qo:case Sn:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $h(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,op=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,yp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
}`,Tp=`#define TOON
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
}`,bp=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:jh,alphahash_pars_fragment:Qh,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:cd,beginnormal_vertex:ld,bsdfs:ud,iridescence_fragment:hd,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Td,displacementmap_vertex:bd,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Nd,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:kd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Kd,lights_fragment_begin:$d,lights_fragment_maps:jd,lights_fragment_end:Qd,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:rf,map_fragment:sf,map_pars_fragment:of,map_particle_fragment:af,map_particle_pars_fragment:cf,metalnessmap_fragment:lf,metalnessmap_pars_fragment:uf,morphinstance_vertex:hf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:vf,normal_pars_vertex:xf,normal_vertex:Mf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:bf,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Rf,project_vertex:Cf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Nf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Gf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:qf,transmission_pars_fragment:Yf,uv_pars_fragment:Jf,uv_pars_vertex:Zf,uv_vertex:Kf,worldpos_vertex:$f,background_vert:jf,background_frag:Qf,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:rp,depth_frag:sp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:cp,equirect_frag:lp,linedashed_vert:up,linedashed_frag:hp,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:yp,meshphysical_frag:Ep,meshtoon_vert:Tp,meshtoon_frag:bp,points_vert:wp,points_frag:Ap,shadow_vert:Rp,shadow_frag:Cp,sprite_vert:Pp,sprite_frag:Lp},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},sn={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};sn.physical={uniforms:Lt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Gr={r:0,b:0,g:0},Zn=new un,Dp=new ct;function Ip(n,e,t,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1;const A=g(S);A===null?d(a,l):A&&A.isColor&&(d(A,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===ls)?(h===void 0&&(h=new tt(new xt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ii(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zn.copy(M.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(Zn)),h.material.toneMapped=Je.getTransfer(A.colorSpace)!==et,(u!==A||f!==A.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,m=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new tt(new Vi(2,2),new kn({name:"BackgroundMaterial",uniforms:Ii(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(Gr,rl(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,M,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:v,addToRenderList:p,dispose:E}}function Up(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,R,F,G,Y){let q=!1;const J=u(G,F,R);s!==J&&(s=J,c(s.object)),q=m(y,G,F,Y),q&&g(y,G,F,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,R,F,G),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,R,F){const G=F.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let q=Y[R.id];q===void 0&&(q={},Y[R.id]=q);let J=q[G];return J===void 0&&(J=f(l()),q[G]=J),J}function f(y){const R=[],F=[],G=[];for(let Y=0;Y<t;Y++)R[Y]=0,F[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,R,F,G){const Y=s.attributes,q=R.attributes;let J=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){const de=Y[X];let be=q[X];if(be===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==G}function g(y,R,F,G){const Y={},q=R.attributes;let J=0;const j=F.getAttributes();for(const X in j)if(j[X].location>=0){let de=q[X];de===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),Y[X]=be,J++}s.attributes=Y,s.attributesNum=J,s.index=G}function v(){const y=s.newAttributes;for(let R=0,F=y.length;R<F;R++)y[R]=0}function p(y){d(y,0)}function d(y,R){const F=s.newAttributes,G=s.enabledAttributes,Y=s.attributeDivisors;F[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),Y[y]!==R&&(n.vertexAttribDivisor(y,R),Y[y]=R)}function E(){const y=s.newAttributes,R=s.enabledAttributes;for(let F=0,G=R.length;F<G;F++)R[F]!==y[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function S(y,R,F,G,Y,q,J){J===!0?n.vertexAttribIPointer(y,R,F,Y,q):n.vertexAttribPointer(y,R,F,G,Y,q)}function M(y,R,F,G){v();const Y=G.attributes,q=F.getAttributes(),J=R.defaultAttributeValues;for(const j in q){const X=q[j];if(X.location>=0){let oe=Y[j];if(oe===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const de=oe.normalized,be=oe.itemSize,ze=e.get(oe);if(ze===void 0)continue;const ke=ze.buffer,rt=ze.type,qe=ze.bytesPerElement,Z=rt===n.INT||rt===n.UNSIGNED_INT||oe.gpuType===Qo;if(oe.isInterleavedBufferAttribute){const Q=oe.data,ge=Q.stride,Ae=oe.offset;if(Q.isInstancedInterleavedBuffer){for(let Se=0;Se<X.locationSize;Se++)d(X.location+Se,Q.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<X.locationSize;Se++)p(X.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Se=0;Se<X.locationSize;Se++)S(X.location+Se,be/X.locationSize,rt,de,ge*qe,(Ae+be/X.locationSize*Se)*qe,Z)}else{if(oe.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q,oe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Q=0;Q<X.locationSize;Q++)S(X.location+Q,be/X.locationSize,rt,de,be*qe,be/X.locationSize*Q*qe,Z)}}else if(J!==void 0){const de=J[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(X.location,de);break;case 3:n.vertexAttrib3fv(X.location,de);break;case 4:n.vertexAttrib4fv(X.location,de);break;default:n.vertexAttrib1fv(X.location,de)}}}}E()}function A(){D();for(const y in i){const R=i[y];for(const F in R){const G=R[F];for(const Y in G)h(G[Y].object),delete G[Y];delete R[F]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const F in R){const G=R[F];for(const Y in G)h(G[Y].object),delete G[Y];delete R[F]}delete i[y.id]}function C(y){for(const R in i){const F=i[R];if(F[y.id]===void 0)continue;const G=F[y.id];for(const Y in G)h(G[Y].object),delete G[Y];delete F[y.id]}}function D(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Np(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==en&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!D)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function Op(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Pn,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:i,S=E*4;let M=d.clippingState||null;l.value=M,M=h(g,f,S,m);for(let A=0;A!==S;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,M=m;S!==v;++S,M+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Bp(n){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=Pi:a===ho&&(o.mapping=Li),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uo||a===ho)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ah(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const wi=4,lc=[.125,.215,.35,.446,.526,.582],Qn=20,Zs=new fs,uc=new Xe;let Ks=null,$s=0,js=0,Qs=!1;const $n=(1+Math.sqrt(5))/2,bi=1/$n,hc=[new I(-$n,bi,0),new I($n,bi,0),new I(-bi,0,$n),new I(bi,0,$n),new I(0,$n,-bi),new I(0,$n,bi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],zp=new I;class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=zp}=s;Ks=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,$s,js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:fr,format:en,colorSpace:Di,depthBuffer:!1},r=fc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(s)),this._blurMaterial=Hp(s,e,t)}return r}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r,s){const l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(uc),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const v=new hn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),p=new tt(new xt,v);let d=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,d=!0):(v.color.copy(uc),d=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const A=this._cubeSize;Wr(r,M*A,S>2?A:0,A,A),u.setRenderTarget(r),d&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hc[(r-s-1)%hc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new tt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):Qn;p>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const d=[];let E=0;for(let C=0;C<Qn;++C){const D=C/v,x=Math.exp(-D*D/2);d.push(x),C===0?E+=x:C<p&&(E+=2*x)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const M=this._sizeLods[r],A=3*M*(r>S-wi?r-S+wi:0),w=4*(this._cubeSize-M);Wr(t,A,w,3*M,2*M),l.setRenderTarget(t),l.render(u,Zs)}}function kp(n){const e=[],t=[],i=[];let r=n;const s=n-wi+1+lc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-wi?l=lc[o-n+wi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,E=new Float32Array(v*g*m),S=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,D=w>2?0:-1,x=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];E.set(x,v*g*w),S.set(f,p*g*w);const y=[w,w,w,w,w,w];M.set(y,d*g*w)}const A=new wt;A.setAttribute("position",new cn(E,v)),A.setAttribute("uv",new cn(S,p)),A.setAttribute("faceIndex",new cn(M,d)),e.push(A),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fc(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hp(n,e,t){const i=new Float32Array(Qn),r=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pc(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function mc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function Vp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uo||l===ho,h=l===Pi||l===Li;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new dc(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new dc(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&cr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wp(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let S=0,M=E.length;S<M;S+=3){const A=E[S+0],w=E[S+1],C=E[S+2];f.push(A,w,w,C,C,A)}}else if(g!==void 0){const E=g.array;v=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){const A=S+0,w=S+1,C=S+2;f.push(A,w,w,C,C,A)}}else return;const p=new(Qc(f)?il:nl)(f,1);p.version=v;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xp(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function u(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=m[E]*v[E];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yp(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*u),D=new el(C,A,w,u);D.type=Sn,D.needsUpdate=!0;const x=M*4;for(let R=0;R<u;R++){const F=d[R],G=E[R],Y=S[R],q=A*w*4*R;for(let J=0;J<F.count;J++){const j=J*x;g===!0&&(r.fromBufferAttribute(F,J),C[q+j+0]=r.x,C[q+j+1]=r.y,C[q+j+2]=r.z,C[q+j+3]=0),v===!0&&(r.fromBufferAttribute(G,J),C[q+j+4]=r.x,C[q+j+5]=r.y,C[q+j+6]=r.z,C[q+j+7]=0),p===!0&&(r.fromBufferAttribute(Y,J),C[q+j+8]=r.x,C[q+j+9]=r.y,C[q+j+10]=r.z,C[q+j+11]=Y.itemSize===4?r.w:1)}}f={count:u,texture:D,size:new pe(A,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Jp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const bl=new Ot,gc=new ll(1,1),wl=new el,Al=new Wu,Rl=new ol,_c=[],vc=[],xc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Gi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ps(n,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Qp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),St(t,i)}}function em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),St(t,i)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;xc.set(i),n.uniformMatrix4fv(this.addr,!1,xc),St(t,i)}}function nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gc.compareFunction=jc,s=gc):s=bl,t.setTexture2D(e||s,r)}function hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Al,r)}function dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rl,r)}function fm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wl,r)}function pm(n){switch(n){case 5126:return Zp;case 35664:return Kp;case 35665:return $p;case 35666:return jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return om;case 36294:return am;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(n,e){n.uniform1fv(this.addr,e)}function gm(n,e){const t=Gi(e,this.size,2);n.uniform2fv(this.addr,t)}function _m(n,e){const t=Gi(e,this.size,3);n.uniform3fv(this.addr,t)}function vm(n,e){const t=Gi(e,this.size,4);n.uniform4fv(this.addr,t)}function xm(n,e){const t=Gi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mm(n,e){const t=Gi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sm(n,e){const t=Gi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ym(n,e){n.uniform1iv(this.addr,e)}function Em(n,e){n.uniform2iv(this.addr,e)}function Tm(n,e){n.uniform3iv(this.addr,e)}function bm(n,e){n.uniform4iv(this.addr,e)}function wm(n,e){n.uniform1uiv(this.addr,e)}function Am(n,e){n.uniform2uiv(this.addr,e)}function Rm(n,e){n.uniform3uiv(this.addr,e)}function Cm(n,e){n.uniform4uiv(this.addr,e)}function Pm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bl,s[o])}function Lm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Al,s[o])}function Dm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rl,s[o])}function Im(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wl,s[o])}function Um(n){switch(n){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return ym;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return bm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pm(t.type)}}class Fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function yc(n,e){n.seq.push(e),n.map[e.id]=e}function Bm(n,e,t){const i=n.name,r=i.length;for(eo.lastIndex=0;;){const s=eo.exec(i),o=eo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yc(t,c===void 0?new Nm(a,n,e):new Fm(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Om(a),yc(t,u)),t=u}}}class jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zm=37297;let km=0;function Hm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Tc=new Oe;function Vm(n){Je._getMatrix(Tc,Je.workingColorSpace,n);const e=`mat3( ${Tc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ts:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Hm(n.getShaderSource(e),a)}else return s}function Gm(n,e){const t=Vm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wm(n,e){let t;switch(e){case xu:t="Linear";break;case Mu:t="Reinhard";break;case Su:t="Cineon";break;case Hc:t="ACESFilmic";break;case Eu:t="AgX";break;case Tu:t="Neutral";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new I;function Xm(){Je.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Ym(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qi(n){return n!==""}function wc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(n){return n.replace(Zm,$m)}const Km=new Map;function $m(n,e){let t=Be[e];if(t===void 0){const i=Km.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jo(t)}const jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(n){return n.replace(jm,Qm)}function Qm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function tg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ng(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function ig(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case _u:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function rg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sg(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eg(t),c=tg(t),h=ng(t),u=ig(t),f=rg(t),m=qm(t),g=Ym(s),v=r.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),d.length>0&&(d+=`
`)):(p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),d=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Be.tonemapping_pars_fragment:"",t.toneMapping!==On?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Gm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Jo(o),o=wc(o,t),o=Ac(o,t),a=Jo(a),a=wc(a,t),a=Ac(a,t),o=Rc(o),a=Rc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=E+p+o,M=E+d+a,A=Ec(r,r.VERTEX_SHADER,S),w=Ec(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(w)||"",q=F.trim(),J=G.trim(),j=Y.trim();let X=!0,oe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const de=bc(r,A,"vertex"),be=bc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+de+`
`+be)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(J===""||j==="")&&(oe=!1);oe&&(R.diagnostics={runnable:X,programLog:q,vertexShader:{log:J,prefix:p},fragmentShader:{log:j,prefix:d}})}r.deleteShader(A),r.deleteShader(w),D=new jr(r,v),x=Jm(r,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,zm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let og=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cg(e),t.set(e,i)),i}}class cg{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}}function lg(n,e,t,i,r,s,o){const a=new aa,l=new ag,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,R,F,G){const Y=F.fog,q=G.geometry,J=x.isMeshStandardMaterial?F.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),X=j&&j.mapping===ls?j.image.height:null,oe=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,be=de!==void 0?de.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let ke,rt,qe,Z;if(oe){const je=sn[oe];ke=je.vertexShader,rt=je.fragmentShader}else ke=x.vertexShader,rt=x.fragmentShader,l.update(x),qe=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const Q=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ae=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,He=!!x.map,vt=!!x.matcap,P=!!j,nt=!!x.aoMap,Ie=!!x.lightMap,we=!!x.bumpMap,fe=!!x.normalMap,$e=!!x.displacementMap,ve=!!x.emissiveMap,Ne=!!x.metalnessMap,pt=!!x.roughnessMap,B=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,k=B&&!!x.anisotropyMap,ue=T&&!!x.clearcoatMap,ee=T&&!!x.clearcoatNormalMap,ye=T&&!!x.clearcoatRoughnessMap,Ee=L&&!!x.iridescenceMap,ie=L&&!!x.iridescenceThicknessMap,he=z&&!!x.sheenColorMap,Le=z&&!!x.sheenRoughnessMap,Te=!!x.specularMap,ce=!!x.specularColorMap,Fe=!!x.specularIntensityMap,U=W&&!!x.transmissionMap,re=W&&!!x.thicknessMap,se=!!x.gradientMap,_e=!!x.alphaMap,te=x.alphaTest>0,$=!!x.alphaHash,Me=!!x.extensions;let Ue=On;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const st={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:rt,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Di,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:vt,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:X,aoMap:nt,lightMap:Ie,bumpMap:we,normalMap:fe,displacementMap:f&&$e,emissiveMap:ve,normalMapObjectSpace:fe&&x.normalMapType===Ru,normalMapTangentSpace:fe&&x.normalMapType===$c,metalnessMap:Ne,roughnessMap:pt,anisotropy:B,anisotropyMap:k,clearcoat:T,clearcoatMap:ue,clearcoatNormalMap:ee,clearcoatRoughnessMap:ye,dispersion:_,iridescence:L,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:z,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:ce,specularIntensityMap:Fe,transmission:W,transmissionMap:U,thicknessMap:re,gradientMap:se,opaque:x.transparent===!1&&x.blending===Ai&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:$,combine:x.combine,mapUv:He&&v(x.map.channel),aoMapUv:nt&&v(x.aoMap.channel),lightMapUv:Ie&&v(x.lightMap.channel),bumpMapUv:we&&v(x.bumpMap.channel),normalMapUv:fe&&v(x.normalMap.channel),displacementMapUv:$e&&v(x.displacementMap.channel),emissiveMapUv:ve&&v(x.emissiveMap.channel),metalnessMapUv:Ne&&v(x.metalnessMap.channel),roughnessMapUv:pt&&v(x.roughnessMap.channel),anisotropyMapUv:k&&v(x.anisotropyMap.channel),clearcoatMapUv:ue&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(x.sheenRoughnessMap.channel),specularMapUv:Te&&v(x.specularMap.channel),specularColorMapUv:ce&&v(x.specularColorMap.channel),specularIntensityMapUv:Fe&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:re&&v(x.thicknessMap.channel),alphaMapUv:_e&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(fe||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(He||_e),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dt,flipSided:x.side===Ft,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(E(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function E(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const y=g[x.type];let R;if(y){const F=sn[y];R=ih.clone(F.uniforms)}else R=x.uniforms;return R}function A(x,y){let R;for(let F=0,G=h.length;F<G;F++){const Y=h[F];if(Y.cacheKey===y){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new sg(n,y,x,s),h.push(R)),R}function w(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:D}}function ug(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,m,g,v,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function a(u,f,m,g,v,p){const d=o(u,f,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,g,v,p){const d=o(u,f,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||hg),i.length>1&&i.sort(f||Pc),r.length>1&&r.sort(f||Pc)}function h(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function dg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Lc,n.set(i,[o])):r>=s.length?(o=new Lc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function pg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mg=0;function gg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _g(n){const e=new fg,t=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ct,o=new ct;function a(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,E=0,S=0,M=0,A=0,w=0,C=0;c.sort(gg);for(let x=0,y=c.length;x<y;x++){const R=c[x],F=R.color,G=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*G,u+=F.g*G,f+=F.b*G;else if(R.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(R.sh.coefficients[J],G);C++}else if(R.isDirectionalLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,X=t.get(R);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=R.shadow.matrix,E++}i.directional[m]=J,m++}else if(R.isSpotLight){const J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(F).multiplyScalar(G),J.distance=Y,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,i.spot[v]=J;const j=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=j.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=q,M++}v++}else if(R.isRectAreaLight){const J=e.get(R);J.color.copy(F).multiplyScalar(G),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=J,p++}else if(R.isPointLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){const j=R.shadow,X=t.get(R);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=J,g++}else if(R.isHemisphereLight){const J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(G),J.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[d]=J,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==M||D.numSpotMaps!==A||D.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=M,D.numSpotMaps=A,D.numLightProbes=C,i.version=mg++)}function l(c,h){let u=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const S=c[d];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),u++}else if(S.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Dc(n){const e=new _g(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vg(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dc(n),e.set(r,[a])):s>=o.length?(a=new Dc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function Sg(n,e,t){let i=new ca;const r=new pe,s=new pe,o=new gt,a=new Wh({depthPacking:Au}),l=new Xh,c={},h=t.maxTextureSize,u={[zn]:Ft,[Ft]:zn,[Dt]:Dt},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:xg,fragmentShader:Mg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let d=this.type;this.render=function(w,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=d!==xn&&this.type===xn,Y=d===xn&&this.type!==xn;for(let q=0,J=w.length;q<J;q++){const j=w[q],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||G===!0||Y===!0){const be=this.type!==xn?{minFilter:tn,magFilter:tn}:{};X.map!==null&&X.map.dispose(),X.map=new oi(r.x,r.y,be),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const de=X.getViewportCount();for(let be=0;be<de;be++){const ze=X.getViewport(be);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),F.viewport(o),X.updateMatrices(j,be),i=X.getFrustum(),M(C,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===xn&&E(X,D),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,R)};function E(w,C){const D=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,D,m,v,null)}function S(w,C,D,x){let y=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=y.uuid,G=C.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let q=Y[G];q===void 0&&(q=y.clone(),Y[G]=q,C.addEventListener("dispose",A)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,x===xn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=D}return y}function M(w,C,D,x,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const G=e.update(w),Y=w.material;if(Array.isArray(Y)){const q=G.groups;for(let J=0,j=q.length;J<j;J++){const X=q[J],oe=Y[X.materialIndex];if(oe&&oe.visible){const de=S(w,oe,x,y);w.onBeforeShadow(n,w,C,D,G,de,X),n.renderBufferDirect(D,null,G,de,w,X),w.onAfterShadow(n,w,C,D,G,de,X)}}}else if(Y.visible){const q=S(w,Y,x,y);w.onBeforeShadow(n,w,C,D,G,q,null),n.renderBufferDirect(D,null,G,q,w,null),w.onAfterShadow(n,w,C,D,G,q,null)}}const F=w.children;for(let G=0,Y=F.length;G<Y;G++)M(F[G],C,D,x,y)}function A(w){w.target.removeEventListener("dispose",A);for(const D in c){const x=c[D],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const yg={[io]:ro,[so]:co,[oo]:lo,[Ci]:ao,[ro]:io,[co]:so,[lo]:oo,[ao]:Ci};function Eg(n,e){function t(){let U=!1;const re=new gt;let se=null;const _e=new gt(0,0,0,0);return{setMask:function(te){se!==te&&!U&&(n.colorMask(te,te,te,te),se=te)},setLocked:function(te){U=te},setClear:function(te,$,Me,Ue,st){st===!0&&(te*=Ue,$*=Ue,Me*=Ue),re.set(te,$,Me,Ue),_e.equals(re)===!1&&(n.clearColor(te,$,Me,Ue),_e.copy(re))},reset:function(){U=!1,se=null,_e.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,se=null,_e=null,te=null;return{setReversed:function($){if(re!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=$;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return re},setTest:function($){$?Q(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function($){se!==$&&!U&&(n.depthMask($),se=$)},setFunc:function($){if(re&&($=yg[$]),_e!==$){switch($){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case ao:n.depthFunc(n.GEQUAL);break;case co:n.depthFunc(n.GREATER);break;case lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=$}},setLocked:function($){U=$},setClear:function($){te!==$&&(re&&($=1-$),n.clearDepth($),te=$)},reset:function(){U=!1,se=null,_e=null,te=null,re=!1}}}function r(){let U=!1,re=null,se=null,_e=null,te=null,$=null,Me=null,Ue=null,st=null;return{setTest:function(je){U||(je?Q(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(je){re!==je&&!U&&(n.stencilMask(je),re=je)},setFunc:function(je,fn,nn){(se!==je||_e!==fn||te!==nn)&&(n.stencilFunc(je,fn,nn),se=je,_e=fn,te=nn)},setOp:function(je,fn,nn){($!==je||Me!==fn||Ue!==nn)&&(n.stencilOp(je,fn,nn),$=je,Me=fn,Ue=nn)},setLocked:function(je){U=je},setClear:function(je){st!==je&&(n.clearStencil(je),st=je)},reset:function(){U=!1,re=null,se=null,_e=null,te=null,$=null,Me=null,Ue=null,st=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,E=null,S=null,M=null,A=null,w=null,C=new Xe(0,0,0),D=0,x=!1,y=null,R=null,F=null,G=null,Y=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=j>=2);let oe=null,de={};const be=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),ke=new gt().fromArray(be),rt=new gt().fromArray(ze);function qe(U,re,se,_e){const te=new Uint8Array(4),$=n.createTexture();n.bindTexture(U,$),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<se;Me++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(re+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return $}const Z={};Z[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Ci),we(!1),fe(Aa),Q(n.CULL_FACE),nt(Fn);function Q(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ae(U,re){return u[U]!==re?(n.bindFramebuffer(U,re),u[U]=re,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Se(U,re){let se=m,_e=!1;if(U){se=f.get(re),se===void 0&&(se=[],f.set(re,se));const te=U.textures;if(se.length!==te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Me=te.length;$<Me;$++)se[$]=n.COLOR_ATTACHMENT0+$;se.length=te.length,_e=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,_e=!0);_e&&n.drawBuffers(se)}function He(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const vt={[jn]:n.FUNC_ADD,[eu]:n.FUNC_SUBTRACT,[tu]:n.FUNC_REVERSE_SUBTRACT};vt[nu]=n.MIN,vt[iu]=n.MAX;const P={[ru]:n.ZERO,[su]:n.ONE,[ou]:n.SRC_COLOR,[to]:n.SRC_ALPHA,[du]:n.SRC_ALPHA_SATURATE,[uu]:n.DST_COLOR,[cu]:n.DST_ALPHA,[au]:n.ONE_MINUS_SRC_COLOR,[no]:n.ONE_MINUS_SRC_ALPHA,[hu]:n.ONE_MINUS_DST_COLOR,[lu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[pu]:n.ONE_MINUS_CONSTANT_COLOR,[mu]:n.CONSTANT_ALPHA,[gu]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(U,re,se,_e,te,$,Me,Ue,st,je){if(U===Fn){v===!0&&(ge(n.BLEND),v=!1);return}if(v===!1&&(Q(n.BLEND),v=!0),U!==Ql){if(U!==p||je!==x){if((d!==jn||M!==jn)&&(n.blendEquation(n.FUNC_ADD),d=jn,M=jn),je)switch(U){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFunc(n.ONE,n.ONE);break;case Ca:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pa:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ca:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,S=null,A=null,w=null,C.set(0,0,0),D=0,p=U,x=je}return}te=te||re,$=$||se,Me=Me||_e,(re!==d||te!==M)&&(n.blendEquationSeparate(vt[re],vt[te]),d=re,M=te),(se!==E||_e!==S||$!==A||Me!==w)&&(n.blendFuncSeparate(P[se],P[_e],P[$],P[Me]),E=se,S=_e,A=$,w=Me),(Ue.equals(C)===!1||st!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,st),C.copy(Ue),D=st),p=U,x=!1}function Ie(U,re){U.side===Dt?ge(n.CULL_FACE):Q(n.CULL_FACE);let se=U.side===Ft;re&&(se=!se),we(se),U.blending===Ai&&U.transparent===!1?nt(Fn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const _e=U.stencilWrite;a.setTest(_e),_e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function fe(U){U!==$l?(Q(n.CULL_FACE),U!==R&&(U===Aa?n.cullFace(n.BACK):U===jl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),R=U}function $e(U){U!==F&&(J&&n.lineWidth(U),F=U)}function ve(U,re,se){U?(Q(n.POLYGON_OFFSET_FILL),(G!==re||Y!==se)&&(n.polygonOffset(re,se),G=re,Y=se)):ge(n.POLYGON_OFFSET_FILL)}function Ne(U){U?Q(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function pt(U){U===void 0&&(U=n.TEXTURE0+q-1),oe!==U&&(n.activeTexture(U),oe=U)}function B(U,re,se){se===void 0&&(oe===null?se=n.TEXTURE0+q-1:se=oe);let _e=de[se];_e===void 0&&(_e={type:void 0,texture:void 0},de[se]=_e),(_e.type!==U||_e.texture!==re)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(U,re||Z[U]),_e.type=U,_e.texture=re)}function T(){const U=de[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function Le(U){rt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function Te(U,re){let se=c.get(re);se===void 0&&(se=new WeakMap,c.set(re,se));let _e=se.get(U);_e===void 0&&(_e=n.getUniformBlockIndex(re,U.name),se.set(U,_e))}function ce(U,re){const _e=c.get(re).get(U);l.get(re)!==_e&&(n.uniformBlockBinding(re,_e,U.__bindingPointIndex),l.set(re,_e))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,de={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,E=null,S=null,M=null,A=null,w=null,C=new Xe(0,0,0),D=0,x=!1,y=null,R=null,F=null,G=null,Y=null,ke.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ge,bindFramebuffer:Ae,drawBuffers:Se,useProgram:He,setBlending:nt,setMaterial:Ie,setFlipSided:we,setCullFace:fe,setLineWidth:$e,setPolygonOffset:ve,setScissorTest:Ne,activeTexture:pt,bindTexture:B,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Ee,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:ce,texStorage2D:ee,texStorage3D:ye,texSubImage2D:z,texSubImage3D:W,compressedTexSubImage2D:k,compressedTexSubImage3D:ue,scissor:he,viewport:Le,reset:Fe}}function Tg(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):is("canvas")}function v(T,_,L){let z=1;const W=B(T);if((W.width>L||W.height>L)&&(z=L/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(z*W.width),ue=Math.floor(z*W.height);u===void 0&&(u=g(k,ue));const ee=_?g(k,ue):u;return ee.width=k,ee.height=ue,ee.getContext("2d").drawImage(T,0,0,k,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+ue+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,_,L,z,W=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=_;if(_===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),_===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RGB8UI),L===n.UNSIGNED_SHORT&&(k=n.RGB16UI),L===n.UNSIGNED_INT&&(k=n.RGB32UI),L===n.BYTE&&(k=n.RGB8I),L===n.SHORT&&(k=n.RGB16I),L===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),L===n.UNSIGNED_INT&&(k=n.RGBA32UI),L===n.BYTE&&(k=n.RGBA8I),L===n.SHORT&&(k=n.RGBA16I),L===n.INT&&(k=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),_===n.RGBA){const ue=W?ts:Je.getTransfer(z);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=ue===et?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(T,_){let L;return T?_===null||_===si||_===sr?L=n.DEPTH24_STENCIL8:_===Sn?L=n.DEPTH32F_STENCIL8:_===rr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===si||_===sr?L=n.DEPTH_COMPONENT24:_===Sn?L=n.DEPTH_COMPONENT32F:_===rr&&(L=n.DEPTH_COMPONENT16),L}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),D(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),y(_)}function D(T){const _=i.get(T);if(_.__webglInit===void 0)return;const L=T.source,z=f.get(L);if(z){const W=z[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&x(T),Object.keys(z).length===0&&f.delete(L)}i.remove(T)}function x(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const L=T.source,z=f.get(L);delete z[_.__cacheKey],o.memory.textures--}function y(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let W=0;W<_.__webglFramebuffer[z].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[z][W]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=T.textures;for(let z=0,W=L.length;z<W;z++){const k=i.get(L[z]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[z])}i.remove(T)}let R=0;function F(){R=0}function G(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){const L=i.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,T,_);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function J(T,_){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Z(L,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function j(T,_){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Z(L,T,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function X(T,_){const L=i.get(T);if(T.version>0&&L.__version!==T.version){Q(L,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const oe={[fo]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},de={[tn]:n.NEAREST,[bu]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[xs]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},be={[Cu]:n.NEVER,[Nu]:n.ALWAYS,[Pu]:n.LESS,[jc]:n.LEQUAL,[Lu]:n.EQUAL,[Uu]:n.GEQUAL,[Du]:n.GREATER,[Iu]:n.NOTEQUAL};function ze(T,_){if(_.type===Sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===xs||_.magFilter===Mr||_.magFilter===ti||_.minFilter===on||_.minFilter===xs||_.minFilter===Mr||_.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,oe[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==Mr&&_.minFilter!==ti||_.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(T,_){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const z=_.source;let W=f.get(z);W===void 0&&(W={},f.set(z,W));const k=Y(_);if(k!==T.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),W[k].usedTimes++;const ue=W[T.__cacheKey];ue!==void 0&&(W[T.__cacheKey].usedTimes--,ue.usedTimes===0&&x(_)),T.__cacheKey=k,T.__webglTexture=W[k].texture}return L}function rt(T,_,L){return Math.floor(Math.floor(T/L)/_)}function qe(T,_,L,z){const k=T.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,z,_.data);else{k.sort((ie,he)=>ie.start-he.start);let ue=0;for(let ie=1;ie<k.length;ie++){const he=k[ue],Le=k[ie],Te=he.start+he.count,ce=rt(Le.start,_.width,4),Fe=rt(he.start,_.width,4);Le.start<=Te+1&&ce===Fe&&rt(Le.start+Le.count-1,_.width,4)===ce?he.count=Math.max(he.count,Le.start+Le.count-he.start):(++ue,k[ue]=Le)}k.length=ue+1;const ee=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ie=0,he=k.length;ie<he;ie++){const Le=k[ie],Te=Math.floor(Le.start/4),ce=Math.ceil(Le.count/4),Fe=Te%_.width,U=Math.floor(Te/_.width),re=ce,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Fe,U,re,se,L,z,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Z(T,_,L){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const W=ke(T,_),k=_.source;t.bindTexture(z,T.__webglTexture,n.TEXTURE0+L);const ue=i.get(k);if(k.version!==ue.__version||W===!0){t.activeTexture(n.TEXTURE0+L);const ee=Je.getPrimaries(Je.workingColorSpace),ye=_.colorSpace===Ln?null:Je.getPrimaries(_.colorSpace),Ee=_.colorSpace===Ln||ee===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=v(_.image,!1,r.maxTextureSize);ie=pt(_,ie);const he=s.convert(_.format,_.colorSpace),Le=s.convert(_.type);let Te=S(_.internalFormat,he,Le,_.colorSpace,_.isVideoTexture);ze(z,_);let ce;const Fe=_.mipmaps,U=_.isVideoTexture!==!0,re=ue.__version===void 0||W===!0,se=k.dataReady,_e=A(_,ie);if(_.isDepthTexture)Te=M(_.format===ar,_.type),re&&(U?t.texStorage2D(n.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Le,null));else if(_.isDataTexture)if(Fe.length>0){U&&re&&t.texStorage2D(n.TEXTURE_2D,_e,Te,Fe[0].width,Fe[0].height);for(let te=0,$=Fe.length;te<$;te++)ce=Fe[te],U?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ce.width,ce.height,he,Le,ce.data):t.texImage2D(n.TEXTURE_2D,te,Te,ce.width,ce.height,0,he,Le,ce.data);_.generateMipmaps=!1}else U?(re&&t.texStorage2D(n.TEXTURE_2D,_e,Te,ie.width,ie.height),se&&qe(_,ie,he,Le)):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Le,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Te,Fe[0].width,Fe[0].height,ie.depth);for(let te=0,$=Fe.length;te<$;te++)if(ce=Fe[te],_.format!==en)if(he!==null)if(U){if(se)if(_.layerUpdates.size>0){const Me=cc(ce.width,ce.height,_.format,_.type);for(const Ue of _.layerUpdates){const st=ce.data.subarray(Ue*Me/ce.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ue,ce.width,ce.height,1,he,st)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,he,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Te,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,he,Le,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Te,ce.width,ce.height,ie.depth,0,he,Le,ce.data)}else{U&&re&&t.texStorage2D(n.TEXTURE_2D,_e,Te,Fe[0].width,Fe[0].height);for(let te=0,$=Fe.length;te<$;te++)ce=Fe[te],_.format!==en?he!==null?U?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Te,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ce.width,ce.height,he,Le,ce.data):t.texImage2D(n.TEXTURE_2D,te,Te,ce.width,ce.height,0,he,Le,ce.data)}else if(_.isDataArrayTexture)if(U){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Te,ie.width,ie.height,ie.depth),se)if(_.layerUpdates.size>0){const te=cc(ie.width,ie.height,_.format,_.type);for(const $ of _.layerUpdates){const Me=ie.data.subarray($*te/ie.data.BYTES_PER_ELEMENT,($+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,he,Le,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Le,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,he,Le,ie.data);else if(_.isData3DTexture)U?(re&&t.texStorage3D(n.TEXTURE_3D,_e,Te,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,he,Le,ie.data);else if(_.isFramebufferTexture){if(re)if(U)t.texStorage2D(n.TEXTURE_2D,_e,Te,ie.width,ie.height);else{let te=ie.width,$=ie.height;for(let Me=0;Me<_e;Me++)t.texImage2D(n.TEXTURE_2D,Me,Te,te,$,0,he,Le,null),te>>=1,$>>=1}}else if(Fe.length>0){if(U&&re){const te=B(Fe[0]);t.texStorage2D(n.TEXTURE_2D,_e,Te,te.width,te.height)}for(let te=0,$=Fe.length;te<$;te++)ce=Fe[te],U?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Le,ce):t.texImage2D(n.TEXTURE_2D,te,Te,he,Le,ce);_.generateMipmaps=!1}else if(U){if(re){const te=B(ie);t.texStorage2D(n.TEXTURE_2D,_e,Te,te.width,te.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Le,ie)}else t.texImage2D(n.TEXTURE_2D,0,Te,he,Le,ie);p(_)&&d(z),ue.__version=k.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,L){if(_.image.length!==6)return;const z=ke(T,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);const k=i.get(W);if(W.version!==k.__version||z===!0){t.activeTexture(n.TEXTURE0+L);const ue=Je.getPrimaries(Je.workingColorSpace),ee=_.colorSpace===Ln?null:Je.getPrimaries(_.colorSpace),ye=_.colorSpace===Ln||ue===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Ee&&!ie?he[$]=v(_.image[$],!0,r.maxCubemapSize):he[$]=ie?_.image[$].image:_.image[$],he[$]=pt(_,he[$]);const Le=he[0],Te=s.convert(_.format,_.colorSpace),ce=s.convert(_.type),Fe=S(_.internalFormat,Te,ce,_.colorSpace),U=_.isVideoTexture!==!0,re=k.__version===void 0||z===!0,se=W.dataReady;let _e=A(_,Le);ze(n.TEXTURE_CUBE_MAP,_);let te;if(Ee){U&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Fe,Le.width,Le.height);for(let $=0;$<6;$++){te=he[$].mipmaps;for(let Me=0;Me<te.length;Me++){const Ue=te[Me];_.format!==en?Te!==null?U?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ue.width,Ue.height,Te,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ue.width,Ue.height,Te,ce,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Fe,Ue.width,Ue.height,0,Te,ce,Ue.data)}}}else{if(te=_.mipmaps,U&&re){te.length>0&&_e++;const $=B(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Fe,$.width,$.height)}for(let $=0;$<6;$++)if(ie){U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Te,ce,he[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,he[$].width,he[$].height,0,Te,ce,he[$].data);for(let Me=0;Me<te.length;Me++){const st=te[Me].image[$].image;U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,st.width,st.height,Te,ce,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Fe,st.width,st.height,0,Te,ce,st.data)}}else{U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,ce,he[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,Te,ce,he[$]);for(let Me=0;Me<te.length;Me++){const Ue=te[Me];U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Te,ce,Ue.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Fe,Te,ce,Ue.image[$])}}}p(_)&&d(n.TEXTURE_CUBE_MAP),k.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ge(T,_,L,z,W,k){const ue=s.convert(L.format,L.colorSpace),ee=s.convert(L.type),ye=S(L.internalFormat,ue,ee,L.colorSpace),Ee=i.get(_),ie=i.get(L);if(ie.__renderTarget=_,!Ee.__hasExternalTextures){const he=Math.max(1,_.width>>k),Le=Math.max(1,_.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,k,ye,he,Le,_.depth,0,ue,ee,null):t.texImage2D(W,k,ye,he,Le,0,ue,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,ie.__webglTexture,0,$e(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,ie.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const z=_.depthTexture,W=z&&z.isDepthTexture?z.type:null,k=M(_.stencilBuffer,W),ue=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=$e(_);ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,k,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,T)}else{const z=_.textures;for(let W=0;W<z.length;W++){const k=z[W],ue=s.convert(k.format,k.colorSpace),ee=s.convert(k.type),ye=S(k.internalFormat,ue,ee,k.colorSpace),Ee=$e(_);L&&ve(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,_.width,_.height):ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ye,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ye,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const W=z.__webglTexture,k=$e(_);if(_.depthTexture.format===or)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===ar)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function He(T){const _=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const z=T.texture.mipmaps;z&&z.length>0?Se(_.__webglFramebuffer[0],T):Se(_.__webglFramebuffer,T)}else if(L){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),Ae(_.__webglDepthbuffer[z],T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else{const z=T.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ae(_.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(T,_,L){const z=i.get(T);_!==void 0&&ge(z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&He(T)}function P(T){const _=T.texture,L=i.get(T),z=i.get(_);T.addEventListener("dispose",C);const W=T.textures,k=T.isWebGLCubeRenderTarget===!0,ue=W.length>1;if(ue||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ee]=[];for(let ye=0;ye<_.mipmaps.length;ye++)L.__webglFramebuffer[ee][ye]=n.createFramebuffer()}else L.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)L.__webglFramebuffer[ee]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ee=0,ye=W.length;ee<ye;ee++){const Ee=i.get(W[ee]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ve(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ee=0;ee<W.length;ee++){const ye=W[ee];L.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ee]);const Ee=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),he=S(ye.internalFormat,Ee,ie,ye.colorSpace,T.isXRRenderTarget===!0),Le=$e(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,L.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)ge(L.__webglFramebuffer[ee][ye],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye);else ge(L.__webglFramebuffer[ee],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ee=0,ye=W.length;ee<ye;ee++){const Ee=W[ee],ie=i.get(Ee);let he=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),ze(he,Ee),ge(L.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+ee,he,0),p(Ee)&&d(he)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),ze(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)ge(L.__webglFramebuffer[ye],T,_,n.COLOR_ATTACHMENT0,ee,ye);else ge(L.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,ee,0);p(_)&&d(ee),t.unbindTexture()}T.depthBuffer&&He(T)}function nt(T){const _=T.textures;for(let L=0,z=_.length;L<z;L++){const W=_[L];if(p(W)){const k=E(T),ue=i.get(W).__webglTexture;t.bindTexture(k,ue),d(k),t.unbindTexture()}}}const Ie=[],we=[];function fe(T){if(T.samples>0){if(ve(T)===!1){const _=T.textures,L=T.width,z=T.height;let W=n.COLOR_BUFFER_BIT;const k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(T),ee=_.length>1;if(ee)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]);const ie=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,L,z,0,0,L,z,W,n.NEAREST),l===!0&&(Ie.length=0,we.length=0,Ie.push(n.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ie.push(k),we.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]);const ie=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $e(T){return Math.min(r.maxSamples,T.samples)}function ve(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ne(T){const _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function pt(T,_){const L=T.colorSpace,z=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Di&&L!==Ln&&(Je.getTransfer(L)===et?(z!==en||W!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function B(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=vt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function bg(n,e){function t(i,r=Ln){let s;const o=Je.getTransfer(r);if(i===ln)return n.UNSIGNED_BYTE;if(i===ea)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ta)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===Wc)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===Qo)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===fr)return n.HALF_FLOAT;if(i===Yc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===en)return n.RGBA;if(i===or)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===na)return n.RED_INTEGER;if(i===Kc)return n.RG;if(i===ia)return n.RG_INTEGER;if(i===ra)return n.RGBA_INTEGER;if(i===Jr||i===Zr||i===Kr||i===$r)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===Mo||i===So)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xo||i===Mo)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===So)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===Eo||i===To||i===bo||i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ao)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ro)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Co)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Do)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===Oo||i===Bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fo)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zo||i===ko||i===Ho||i===Vo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:wg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends zi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Rg,d={},E=t.getContextAttributes();let S=null,M=null;const A=[],w=[],C=new pe;let D=null;const x=new $t;x.viewport=new gt;const y=new $t;y.viewport=new gt;const R=[x,y],F=new Jh;let G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Vs,A[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Vs,A[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=A[Z];return Q===void 0&&(Q=new Vs,A[Z]=Q),Q.getHandSpace()};function q(Z){const Q=w.indexOf(Z.inputSource);if(Q===-1)return;const ge=A[Q];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,c||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<A.length;Z++){const Q=w[Z];Q!==null&&(w[Z]=null,A[Z].disconnect(Q))}G=null,Y=null,p.reset();for(const Z in d)delete d[Z];e.setRenderTarget(S),m=null,f=null,u=null,r=null,M=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",J),r.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ae=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=E.stencil?ar:or,Ae=E.stencil?sr:si);const He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new oi(f.textureWidth,f.textureHeight,{format:en,type:ln,depthTexture:new ll(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new oi(m.framebufferWidth,m.framebufferHeight,{format:en,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Z){for(let Q=0;Q<Z.removed.length;Q++){const ge=Z.removed[Q],Ae=w.indexOf(ge);Ae>=0&&(w[Ae]=null,A[Ae].disconnect(ge))}for(let Q=0;Q<Z.added.length;Q++){const ge=Z.added[Q];let Ae=w.indexOf(ge);if(Ae===-1){for(let He=0;He<A.length;He++)if(He>=w.length){w.push(ge),Ae=He;break}else if(w[He]===null){w[He]=ge,Ae=He;break}if(Ae===-1)break}const Se=A[Ae];Se&&Se.connect(ge)}}const X=new I,oe=new I;function de(Z,Q,ge){X.setFromMatrixPosition(Q.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);const Ae=X.distanceTo(oe),Se=Q.projectionMatrix.elements,He=ge.projectionMatrix.elements,vt=Se[14]/(Se[10]-1),P=Se[14]/(Se[10]+1),nt=(Se[9]+1)/Se[5],Ie=(Se[9]-1)/Se[5],we=(Se[8]-1)/Se[0],fe=(He[8]+1)/He[0],$e=vt*we,ve=vt*fe,Ne=Ae/(-we+fe),pt=Ne*-we;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(Ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const B=vt+Ne,T=P+Ne,_=$e-pt,L=ve+(Ae-pt),z=nt*P/T*B,W=Ie*P/T*B;Z.projectionMatrix.makePerspective(_,L,z,W,B,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Q=Z.near,ge=Z.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),F.near=y.near=x.near=Q,F.far=y.far=x.far=ge,(G!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,Y=F.far),F.layers.mask=Z.layers.mask|6,x.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Ae=Z.parent,Se=F.cameras;be(F,Ae);for(let He=0;He<Se.length;He++)be(Se[He],Ae);Se.length===2?de(F,x,y):F.projectionMatrix.copy(x.projectionMatrix),ze(Z,F,Ae)};function ze(Z,Q,ge){ge===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Z){return d[Z]};let ke=null;function rt(Z,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ae=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,Ae=!0);for(let P=0;P<ge.length;P++){const nt=ge[P];let Ie=null;if(m!==null)Ie=m.getViewport(nt);else{const fe=u.getViewSubImage(f,nt);Ie=fe.viewport,P===0&&(e.setRenderTargetTextures(M,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(M))}let we=R[P];we===void 0&&(we=new $t,we.layers.enable(P),we.viewport=new gt,R[P]=we),we.matrix.fromArray(nt.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(nt.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),P===0&&(F.matrix.copy(we.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ae===!0&&F.cameras.push(we)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const P=u.getDepthInformation(ge[0]);P&&P.isValid&&P.texture&&p.init(P,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<ge.length;P++){const nt=ge[P].camera;if(nt){let Ie=d[nt];Ie||(Ie=new ul,d[nt]=Ie);const we=u.getCameraImage(nt);Ie.sourceTexture=we}}}}for(let ge=0;ge<A.length;ge++){const Ae=w[ge],Se=A[ge];Ae!==null&&Se!==void 0&&Se.update(Ae,Q,c||o)}ke&&ke(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const qe=new Tl;qe.setAnimationLoop(rt),this.setAnimationLoop=function(Z){ke=Z},this.dispose=function(){}}}const Kn=new un,Pg=new ct;function Lg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,rl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ft&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ft&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d),S=E.envMap,M=E.envMapRotation;S&&(p.envMap.value=S,Kn.copy(M),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Kn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dg(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const M=S.program;i.uniformBlockBinding(E,M)}function c(E,S){let M=r[E.id];M===void 0&&(g(E),M=h(E),r[E.id]=M,E.addEventListener("dispose",p));const A=S.program;i.updateUBOMapping(E,A);const w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function h(E){const S=u();E.__bindingPointIndex=S;const M=n.createBuffer(),A=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],M=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,C=M.length;w<C;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,y=D.length;x<y;x++){const R=D[x];if(m(R,w,x,A)===!0){const F=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let q=0;q<G.length;q++){const J=G[q],j=v(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,F+Y,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,M,A){const w=E.value,C=S+"_"+M;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const D=A[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(E){const S=E.uniforms;let M=0;const A=16;for(let C=0,D=S.length;C<D;C++){const x=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,R=x.length;y<R;y++){const F=x[y],G=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,q=G.length;Y<q;Y++){const J=G[Y],j=v(J),X=M%A,oe=X%j.boundary,de=X+oe;M+=oe,de!==0&&A-de<j.storage&&(M+=A-de),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=j.storage}}}const w=M%A;return w>0&&(M+=A-w),E.__size=M,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Ig{constructor(e={}){const{canvas:t=Ou(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=Vt;let w=0,C=0,D=null,x=-1,y=null;const R=new gt,F=new gt;let G=null;const Y=new Xe(0);let q=0,J=t.width,j=t.height,X=1,oe=null,de=null;const be=new gt(0,0,J,j),ze=new gt(0,0,J,j);let ke=!1;const rt=new ca;let qe=!1,Z=!1;const Q=new ct,ge=new I,Ae=new gt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function vt(){return D===null?X:1}let P=i;function nt(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const N="webgl2";if(P=nt(N,b),P===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ie,we,fe,$e,ve,Ne,pt,B,T,_,L,z,W,k,ue,ee,ye,Ee,ie,he,Le,Te,ce,Fe;function U(){Ie=new Gp(P),Ie.init(),Te=new bg(P,Ie),we=new Fp(P,Ie,e,Te),fe=new Eg(P,Ie),we.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),$e=new qp(P),ve=new ug,Ne=new Tg(P,Ie,fe,ve,we,Te,$e),pt=new Bp(M),B=new Vp(M),T=new $h(P),ce=new Up(P,T),_=new Wp(P,T,$e,ce),L=new Jp(P,_,T,$e),ie=new Yp(P,we,Ne),ee=new Op(ve),z=new lg(M,pt,B,Ie,we,ce,ee),W=new Lg(M,ve),k=new dg,ue=new vg(Ie),Ee=new Ip(M,pt,B,fe,L,m,l),ye=new Sg(M,L,we),Fe=new Dg(P,$e,we,fe),he=new Np(P,Ie,$e),Le=new Xp(P,Ie,$e),$e.programs=z.programs,M.capabilities=we,M.extensions=Ie,M.properties=ve,M.renderLists=k,M.shadowMap=ye,M.state=fe,M.info=$e}U();const re=new Cg(M,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(J,j,!1))},this.getSize=function(b){return b.set(J,j)},this.setSize=function(b,N,H=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,j=N,t.width=Math.floor(b*X),t.height=Math.floor(N*X),H===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(J*X,j*X).floor()},this.setDrawingBufferSize=function(b,N,H){J=b,j=N,X=H,t.width=Math.floor(b*H),t.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,N,H,V){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,N,H,V),fe.viewport(R.copy(be).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ze)},this.setScissor=function(b,N,H,V){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,N,H,V),fe.scissor(F.copy(ze).multiplyScalar(X).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){fe.setScissorTest(ke=b)},this.setOpaqueSort=function(b){oe=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,H=!0){let V=0;if(b){let O=!1;if(D!==null){const ne=D.texture.format;O=ne===ra||ne===ia||ne===na}if(O){const ne=D.texture.type,le=ne===ln||ne===si||ne===rr||ne===sr||ne===ea||ne===ta,xe=Ee.getClearColor(),me=Ee.getClearAlpha(),Pe=xe.r,De=xe.g,Re=xe.b;le?(g[0]=Pe,g[1]=De,g[2]=Re,g[3]=me,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Pe,v[1]=De,v[2]=Re,v[3]=me,P.clearBufferiv(P.COLOR,0,v))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),k.dispose(),ue.dispose(),ve.dispose(),pt.dispose(),B.dispose(),L.dispose(),ce.dispose(),Fe.dispose(),z.dispose(),re.dispose(),re.removeEventListener("sessionstart",nn),re.removeEventListener("sessionend",Sa),Gn.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=$e.autoReset,N=ye.enabled,H=ye.autoUpdate,V=ye.needsUpdate,O=ye.type;U(),$e.autoReset=b,ye.enabled=N,ye.autoUpdate=H,ye.needsUpdate=V,ye.type=O}function te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){const N=b.target;N.removeEventListener("dispose",$),Me(N)}function Me(b){Ue(b),ve.remove(b)}function Ue(b){const N=ve.get(b).programs;N!==void 0&&(N.forEach(function(H){z.releaseProgram(H)}),b.isShaderMaterial&&z.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,V,O,ne){N===null&&(N=Se);const le=O.isMesh&&O.matrixWorld.determinant()<0,xe=Xl(b,N,H,V,O);fe.setMaterial(V,le);let me=H.index,Pe=1;if(V.wireframe===!0){if(me=_.getWireframeAttribute(H),me===void 0)return;Pe=2}const De=H.drawRange,Re=H.attributes.position;let We=De.start*Pe,Qe=(De.start+De.count)*Pe;ne!==null&&(We=Math.max(We,ne.start*Pe),Qe=Math.min(Qe,(ne.start+ne.count)*Pe)),me!==null?(We=Math.max(We,0),Qe=Math.min(Qe,me.count)):Re!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,Re.count));const mt=Qe-We;if(mt<0||mt===1/0)return;ce.setup(O,V,xe,H,me);let ot,it=he;if(me!==null&&(ot=T.get(me),it=Le,it.setIndex(ot)),O.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*vt()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(O.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),fe.setLineWidth(Ce*vt()),O.isLineSegments?it.setMode(P.LINES):O.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else O.isPoints?it.setMode(P.POINTS):O.isSprite&&it.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,lt=O._multiDrawCounts,Ye=O._multiDrawCount,Bt=me?T.get(me).bytesPerElement:1,hi=ve.get(V).currentProgram.getUniforms();for(let zt=0;zt<Ye;zt++)hi.setValue(P,"_gl_DrawID",zt),it.render(Ce[zt]/Bt,lt[zt])}else if(O.isInstancedMesh)it.renderInstances(We,mt,O.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,lt=Math.min(H.instanceCount,Ce);it.renderInstances(We,mt,lt)}else it.render(We,mt)};function st(b,N,H){b.transparent===!0&&b.side===Dt&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,xr(b,N,H),b.side=zn,b.needsUpdate=!0,xr(b,N,H),b.side=Dt):xr(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),d=ue.get(H),d.init(N),S.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const V=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let le=0;le<ne.length;le++){const xe=ne[le];st(xe,H,O),V.add(xe)}else st(ne,H,O),V.add(ne)}),d=S.pop(),V},this.compileAsync=function(b,N,H=null){const V=this.compile(b,N,H);return new Promise(O=>{function ne(){if(V.forEach(function(le){ve.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){O(b);return}setTimeout(ne,10)}Ie.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let je=null;function fn(b){je&&je(b)}function nn(){Gn.stop()}function Sa(){Gn.start()}const Gn=new Tl;Gn.setAnimationLoop(fn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){je=b,re.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},re.addEventListener("sessionstart",nn),re.addEventListener("sessionend",Sa),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,N,D),d=ue.get(b,S.length),d.init(N),S.push(d),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),rt.setFromProjectionMatrix(Q,an,N.reversedDepth),Z=this.localClippingEnabled,qe=ee.init(this.clippingPlanes,Z),p=k.get(b,E.length),p.init(),E.push(p),re.enabled===!0&&re.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&_s(ne,N,-1/0,M.sortObjects)}_s(b,N,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(oe,de),He=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,He&&Ee.addToRenderList(p,b),this.info.render.frame++,qe===!0&&ee.beginShadows();const H=d.state.shadowsArray;ye.render(H,b,N),qe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,O=p.transmissive;if(d.setupLights(),N.isArrayCamera){const ne=N.cameras;if(O.length>0)for(let le=0,xe=ne.length;le<xe;le++){const me=ne[le];Ea(V,O,b,me)}He&&Ee.render(b);for(let le=0,xe=ne.length;le<xe;le++){const me=ne[le];ya(p,b,me,me.viewport)}}else O.length>0&&Ea(V,O,b,N),He&&Ee.render(b),ya(p,b,N);D!==null&&C===0&&(Ne.updateMultisampleRenderTarget(D),Ne.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(M,b,N),ce.resetDefaultState(),x=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],qe===!0&&ee.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function _s(b,N,H,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){V&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const le=L.update(b),xe=b.material;xe.visible&&p.push(b,le,xe,H,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){const le=L.update(b),xe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ae.copy(le.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(xe)){const me=le.groups;for(let Pe=0,De=me.length;Pe<De;Pe++){const Re=me[Pe],We=xe[Re.materialIndex];We&&We.visible&&p.push(b,le,We,H,Ae.z,Re)}}else xe.visible&&p.push(b,le,xe,H,Ae.z,null)}}const ne=b.children;for(let le=0,xe=ne.length;le<xe;le++)_s(ne[le],N,H,V)}function ya(b,N,H,V){const O=b.opaque,ne=b.transmissive,le=b.transparent;d.setupLightsView(H),qe===!0&&ee.setGlobalState(M.clippingPlanes,H),V&&fe.viewport(R.copy(V)),O.length>0&&vr(O,N,H),ne.length>0&&vr(ne,N,H),le.length>0&&vr(le,N,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ea(b,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new oi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?fr:ln,minFilter:ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=d.state.transmissionRenderTarget[V.id],le=V.viewport||R;ne.setSize(le.z*M.transmissionResolutionScale,le.w*M.transmissionResolutionScale);const xe=M.getRenderTarget(),me=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(Y),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),He&&Ee.render(H);const De=M.toneMapping;M.toneMapping=On;const Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),qe===!0&&ee.setGlobalState(M.clippingPlanes,V),vr(b,H,V),Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,mt=N.length;Qe<mt;Qe++){const ot=N[Qe],it=ot.object,Ce=ot.geometry,lt=ot.material,Ye=ot.group;if(lt.side===Dt&&it.layers.test(V.layers)){const Bt=lt.side;lt.side=Ft,lt.needsUpdate=!0,Ta(it,H,V,Ce,lt,Ye),lt.side=Bt,lt.needsUpdate=!0,We=!0}}We===!0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne))}M.setRenderTarget(xe,me,Pe),M.setClearColor(Y,q),Re!==void 0&&(V.viewport=Re),M.toneMapping=De}function vr(b,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ne=b.length;O<ne;O++){const le=b[O],xe=le.object,me=le.geometry,Pe=le.group;let De=le.material;De.allowOverride===!0&&V!==null&&(De=V),xe.layers.test(H.layers)&&Ta(xe,N,H,me,De,Pe)}}function Ta(b,N,H,V,O,ne){b.onBeforeRender(M,N,H,V,O,ne),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(M,N,H,V,b,ne),O.transparent===!0&&O.side===Dt&&O.forceSinglePass===!1?(O.side=Ft,O.needsUpdate=!0,M.renderBufferDirect(H,N,V,O,b,ne),O.side=zn,O.needsUpdate=!0,M.renderBufferDirect(H,N,V,O,b,ne),O.side=Dt):M.renderBufferDirect(H,N,V,O,b,ne),b.onAfterRender(M,N,H,V,O,ne)}function xr(b,N,H){N.isScene!==!0&&(N=Se);const V=ve.get(b),O=d.state.lights,ne=d.state.shadowsArray,le=O.state.version,xe=z.getParameters(b,O.state,ne,N,H),me=z.getProgramCacheKey(xe);let Pe=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?B:pt).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",$),Pe=new Map,V.programs=Pe);let De=Pe.get(me);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===le)return wa(b,xe),De}else xe.uniforms=z.getUniforms(b),b.onBeforeCompile(xe,M),De=z.acquireProgram(xe,me),Pe.set(me,De),V.uniforms=xe.uniforms;const Re=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ee.uniform),wa(b,xe),V.needsLights=Yl(b),V.lightsStateVersion=le,V.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function ba(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=jr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function wa(b,N){const H=ve.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Xl(b,N,H,V,O){N.isScene!==!0&&(N=Se),Ne.resetTextureUnits();const ne=N.fog,le=V.isMeshStandardMaterial?N.environment:null,xe=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Di,me=(V.isMeshStandardMaterial?B:pt).get(V.envMap||le),Pe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!H.morphAttributes.position,We=!!H.morphAttributes.normal,Qe=!!H.morphAttributes.color;let mt=On;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=M.toneMapping);const ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=ot!==void 0?ot.length:0,Ce=ve.get(V),lt=d.state.lights;if(qe===!0&&(Z===!0||b!==y)){const Ct=b===y&&V.id===x;ee.setState(V,b,Ct)}let Ye=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==lt.state.version||Ce.outputColorSpace!==xe||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==me||V.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==De||Ce.morphTargets!==Re||Ce.morphNormals!==We||Ce.morphColors!==Qe||Ce.toneMapping!==mt||Ce.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,Ce.__version=V.version);let Bt=Ce.currentProgram;Ye===!0&&(Bt=xr(V,N,O));let hi=!1,zt=!1,Xi=!1;const ut=Bt.getUniforms(),Xt=Ce.uniforms;if(fe.useProgram(Bt.program)&&(hi=!0,zt=!0,Xi=!0),V.id!==x&&(x=V.id,zt=!0),hi||y!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",b.projectionMatrix),ut.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ut=ut.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,ge.setFromMatrixPosition(b.matrixWorld)),we.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,zt=!0,Xi=!0)}if(O.isSkinnedMesh){ut.setOptional(P,O,"bindMatrix"),ut.setOptional(P,O,"bindMatrixInverse");const Ct=O.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ut.setValue(P,"boneTexture",Ct.boneTexture,Ne))}O.isBatchedMesh&&(ut.setOptional(P,O,"batchingTexture"),ut.setValue(P,"batchingTexture",O._matricesTexture,Ne),ut.setOptional(P,O,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",O._indirectTexture,Ne),ut.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",O._colorsTexture,Ne));const qt=H.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ie.update(O,H,Bt),(zt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ut.setValue(P,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Xt.envMap.value=me,Xt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Xt.envMapIntensity.value=N.environmentIntensity),zt&&(ut.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&ql(Xt,Xi),ne&&V.fog===!0&&W.refreshFogUniforms(Xt,ne),W.refreshMaterialUniforms(Xt,V,X,j,d.state.transmissionRenderTarget[b.id]),jr.upload(P,ba(Ce),Xt,Ne)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jr.upload(P,ba(Ce),Xt,Ne),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(P,"center",O.center),ut.setValue(P,"modelViewMatrix",O.modelViewMatrix),ut.setValue(P,"normalMatrix",O.normalMatrix),ut.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ct=V.uniformsGroups;for(let Ut=0,vs=Ct.length;Ut<vs;Ut++){const Wn=Ct[Ut];Fe.update(Wn,Bt),Fe.bind(Wn,Bt)}}return Bt}function ql(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,N,H){const V=ve.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ve.get(b.texture).__webglTexture=N,ve.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const H=ve.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Jl=P.createFramebuffer();this.setRenderTarget=function(b,N=0,H=0){D=b,w=N,C=H;let V=!0,O=null,ne=!1,le=!1;if(b){const me=ve.get(b);if(me.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)Ne.setupRenderTarget(b);else if(me.__hasExternalTextures)Ne.rebindTextures(b,ve.get(b.texture).__webglTexture,ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&ve.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const De=ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[N])?O=De[N][H]:O=De[N],ne=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?O=ve.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[H]:O=De,R.copy(b.viewport),F.copy(b.scissor),G=b.scissorTest}else R.copy(be).multiplyScalar(X).floor(),F.copy(ze).multiplyScalar(X).floor(),G=ke;if(H!==0&&(O=Jl),fe.bindFramebuffer(P.FRAMEBUFFER,O)&&V&&fe.drawBuffers(b,O),fe.viewport(R),fe.scissor(F),fe.setScissorTest(G),ne){const me=ve.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,H)}else if(le){const me=N;for(let Pe=0;Pe<b.textures.length;Pe++){const De=ve.get(b.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,De.__webglTexture,H,me)}}else if(b!==null&&H!==0){const me=ve.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,H)}x=-1},this.readRenderTargetPixels=function(b,N,H,V,O,ne,le,xe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){fe.bindFramebuffer(P.FRAMEBUFFER,me);try{const Pe=b.textures[xe],De=Pe.format,Re=Pe.type;if(!we.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&H>=0&&H<=b.height-O&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,H,V,O,Te.convert(De),Te.convert(Re),ne))}finally{const Pe=D!==null?ve.get(D).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,V,O,ne,le,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me)if(N>=0&&N<=b.width-V&&H>=0&&H<=b.height-O){fe.bindFramebuffer(P.FRAMEBUFFER,me);const Pe=b.textures[xe],De=Pe.format,Re=Pe.type;if(!we.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,H,V,O,Te.convert(De),Te.convert(Re),0);const Qe=D!==null?ve.get(D).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,Qe);const mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bu(P,mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(We),P.deleteSync(mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,H=0){const V=Math.pow(2,-H),O=Math.floor(b.image.width*V),ne=Math.floor(b.image.height*V),le=N!==null?N.x:0,xe=N!==null?N.y:0;Ne.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,le,xe,O,ne),fe.unbindTexture()};const Zl=P.createFramebuffer(),Kl=P.createFramebuffer();this.copyTextureToTexture=function(b,N,H=null,V=null,O=0,ne=null){ne===null&&(O!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let le,xe,me,Pe,De,Re,We,Qe,mt;const ot=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(H!==null)le=H.max.x-H.min.x,xe=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,Pe=H.min.x,De=H.min.y,Re=H.isBox3?H.min.z:0;else{const qt=Math.pow(2,-O);le=Math.floor(ot.width*qt),xe=Math.floor(ot.height*qt),b.isDataArrayTexture?me=ot.depth:b.isData3DTexture?me=Math.floor(ot.depth*qt):me=1,Pe=0,De=0,Re=0}V!==null?(We=V.x,Qe=V.y,mt=V.z):(We=0,Qe=0,mt=0);const it=Te.convert(N.format),Ce=Te.convert(N.type);let lt;N.isData3DTexture?(Ne.setTexture3D(N,0),lt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ne.setTexture2DArray(N,0),lt=P.TEXTURE_2D_ARRAY):(Ne.setTexture2D(N,0),lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ye=P.getParameter(P.UNPACK_ROW_LENGTH),Bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hi=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),Xi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const ut=b.isDataArrayTexture||b.isData3DTexture,Xt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const qt=ve.get(b),Ct=ve.get(N),Ut=ve.get(qt.__renderTarget),vs=ve.get(Ct.__renderTarget);fe.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let Wn=0;Wn<me;Wn++)ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(b).__webglTexture,O,Re+Wn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,ne,mt+Wn)),P.blitFramebuffer(Pe,De,le,xe,We,Qe,le,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||ve.has(b)){const qt=ve.get(b),Ct=ve.get(N);fe.bindFramebuffer(P.READ_FRAMEBUFFER,Zl),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kl);for(let Ut=0;Ut<me;Ut++)ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,O,Re+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,O),Xt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.__webglTexture,ne,mt+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,ne),O!==0?P.blitFramebuffer(Pe,De,le,xe,We,Qe,le,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Xt?P.copyTexSubImage3D(lt,ne,We,Qe,mt+Ut,Pe,De,le,xe):P.copyTexSubImage2D(lt,ne,We,Qe,Pe,De,le,xe);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Xt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(lt,ne,We,Qe,mt,le,xe,me,it,Ce,ot.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(lt,ne,We,Qe,mt,le,xe,me,it,ot.data):P.texSubImage3D(lt,ne,We,Qe,mt,le,xe,me,it,Ce,ot):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,We,Qe,le,xe,it,Ce,ot.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,We,Qe,ot.width,ot.height,it,ot.data):P.texSubImage2D(P.TEXTURE_2D,ne,We,Qe,le,xe,it,Ce,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ye),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hi),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xi),ne===0&&N.generateMipmaps&&P.generateMipmap(lt),fe.unbindTexture()},this.initRenderTarget=function(b){ve.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,fe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function Cl(n,e){if(n.userData.outfit===e)return;const t=n.userData.dress;t&&(t.removeFromParent(),t.traverse(s=>{var o,a;(o=s.geometry)==null||o.dispose(),(a=s.material)==null||a.dispose()})),n.userData.outfit=e;const i=new It;n.userData.body.add(i),n.userData.dress=i;const r=(s,o,a,l,c)=>{const h=new tt(s,new Fi({color:o,roughness:.7}));return h.position.set(a,l,c),h.castShadow=!0,i.add(h),h};if(e==="ribbon"){for(const s of[-1,1]){const o=r(new Wt(.12,12,8),"#e7779a",s*.13,.65,.46);o.scale.set(1,.7,.45),o.rotation.z=s*.35}r(new Wt(.055,10,8),"#ffdf9a",0,.65,.5)}else if(e==="hat")r(new Gt(.4,.4,.06,24),"#cb9867",0,1.65,0),r(new Gt(.23,.29,.3,24),"#f1d69a",0,1.81,0),r(new Gt(.282,.292,.065,24),"#8fae96",0,1.695,0);else if(e==="garden"){for(let s=0;s<5;s++){const o=s*Math.PI*2/5,a=r(new Wt(.09,10,8),"#efb5cb",Math.cos(o)*.13,.86+Math.sin(o)*.13,.49);a.scale.z=.4}r(new Wt(.065,10,8),"#ffe4a4",0,.86,.54)}}function Ug(){const n=new It;for(let e=0;e<3;e++){const t=new tt(new Gt(.025,.025,.25,6),new Fi({color:"#91a47d"}));t.position.set(e*.18-.18,.2,0),n.add(t);const i=new tt(new ds(.12),new Fi({color:["#f0b4ce","#f5dc98","#b3a4d7"][e]}));i.position.set(e*.18-.18,.38,0),n.add(i)}return n}function Ng(){let n,e=!0,t=-1;try{e=localStorage.getItem("eggy-sound")!=="off"}catch{}const i=document.createElement("button");i.className="sound-toggle",i.id="sound-toggle",i.type="button",document.querySelector("header").append(i);function r(){i.textContent=e?"♪ 효과음 켜짐":"♪ 효과음 꺼짐",i.setAttribute("aria-pressed",String(e))}function s(){if(e)try{n??(n=new(window.AudioContext||window.webkitAudioContext)),n.state==="suspended"&&n.resume().catch(()=>{})}catch{}}document.addEventListener("pointerdown",s,{passive:!0}),document.addEventListener("keydown",s),i.addEventListener("click",()=>{e=!e;try{localStorage.setItem("eggy-sound",e?"on":"off")}catch{}r(),e?s():n==null||n.suspend().catch(()=>{})}),r();function o(a,l,c=.12,h="sine",u=.05,f=0){if(!e||!n||n.state!=="running")return;const m=n.currentTime+f,g=n.createOscillator(),v=n.createGain();g.type=h,g.frequency.setValueAtTime(a,m),g.frequency.exponentialRampToValueAtTime(Math.max(30,l),m+c),v.gain.setValueAtTime(.001,m),v.gain.exponentialRampToValueAtTime(u,m+.009),v.gain.exponentialRampToValueAtTime(.001,m+c),g.connect(v),v.connect(n.destination),g.start(m),g.stop(m+c+.01),g.onended=()=>{g.disconnect(),v.disconnect()}}return{hit(a=1){!n||n.currentTime-t<.075||(t=n.currentTime,o(310+a*18,95,.13,"sine",.035+Math.min(a,10)*.004),a>6&&o(760,420,.1,"triangle",.025,.025))},skill(a){o([260,520,380,680,450,800][a],[650,280,100,1e3,700,180][a],.2,"triangle",.045)},win(){[523,659,784].forEach((a,l)=>o(a,a,.18,"sine",.05,l*.12))},get enabled(){return e}}}function Zo(n,e,t){const i=(n.shield>0?n.shieldFactor??.25:1)/(n.weight||1);n.vx+=e*i,n.vz+=t*i}function Fg(n,e,t,i,r,s=1.15){n.impact=Math.max(0,n.impact-r),n.stagger=Math.max(0,n.stagger-r);const o=(n.stagger>0?.22:n.haste>0?1.6:1)*(n.moveSpeed||1)*(n.slow>0?.5:1),a=n.stagger>0?.55:n.dashTime>0?.8:s,l=Math.exp(-a*r);n.vx=(n.vx+e*i*o*r)*l,n.vz=(n.vz+t*i*o*r)*l;const c=Math.hypot(n.vx,n.vz);c>14&&(n.vx*=14/c,n.vz*=14/c),n.x+=n.vx*r,n.z+=n.vz*r}function Og(n,e,t=1){if(!n.alive||!e.alive)return null;const i=e.x-n.x,r=e.z-n.z,s=Math.hypot(i,r);if(s>=1.08)return null;const o=s>1e-4?i/s:1,a=s>1e-4?r/s:0,l=(1.08-s)*.5;n.x-=o*l,n.z-=a*l,e.x+=o*l,e.z+=a*l;const c=(n.vx-e.vx)*o+(n.vz-e.vz)*a;if(c<=0)return null;const h=n.dashTime>0&&n.dx*o+n.dz*a>.4,u=e.dashTime>0&&e.dx*o+e.dz*a<-.4,f=c>.65,m=(c*.98+(f?.85:0))*(f?t:1);let g=-o*m,v=-a*m,p=o*m,d=a*m;return h&&(p+=o*3.8,d+=a*3.8,g+=o*m*.45,v+=a*m*.45,n.dashTime=0),u&&(g-=o*3.8,v-=a*3.8,p-=o*m*.45,d-=a*m*.45,e.dashTime=0),Zo(n,g*(e.power||1),v*(e.power||1)),Zo(e,p*(n.power||1),d*(n.power||1)),!f&&!h&&!u?null:(n.impact=e.impact=.24,n.hitStrength=e.hitStrength=Math.min(1,c/9),n.stagger=u?.38:h?.08:.22,e.stagger=h?.38:u?.08:.22,n.shield>0&&(n.stagger*=.25),e.shield>0&&(e.stagger*=.25),{x:(n.x+e.x)/2,z:(n.z+e.z)/2,dash:h||u,dx:u?-o:o,dz:u?-a:a,strength:c,indices:[n.index,e.index]})}const ga=[{id:"ice",name:"넓은 얼음섬",icon:"❄",radius:7.4,drag:1.05,bounce:1,description:"넉넉해진 빙판에서 쭈우욱!",feel:"미끄러움 높음 · 넓은 경기장",background:"#dcebe5",ground:"#c5e0da",top:"#dfefee",side:"#9bc8d0",edge:"#f5fff6"},{id:"kiln",name:"말랑 불가마",icon:"♨",radius:6.8,drag:1.4,bounce:1.18,description:"따끈한 돌판 위에서 통통!",feel:"반동 강함 · 용암 밖으로 조심",background:"#f4ddc9",ground:"#df9168",top:"#ae8270",side:"#78625d",edge:"#f4bc77"},{id:"forest",name:"도토리 숲",icon:"♧",radius:7.2,drag:1.9,bounce:1,description:"폭신한 이끼가 덮인 숲속 무대",feel:"미끄러움 낮음 · 쉬운 방향 전환",background:"#e1e8c9",ground:"#c1ce9f",top:"#adc581",side:"#a18460",edge:"#d3dfa0"}];function Bg(n){const e=new It,t=new It;e.add(t);const i=(h,u={})=>new Fi({color:h,roughness:.85,...u}),r=(h,u,f,m,g,v,p={})=>{const d=new tt(u,i(f,p));return d.position.set(m,g,v),d.castShadow=!0,d.receiveShadow=!0,h.add(d),d},s=(h,u,f,m=.65)=>{const g=new dh(new wt().setFromPoints(u.map(v=>new I(...v))),new cl({color:f,transparent:!0,opacity:m}));h.add(g)},o=(h,u,f,m,g,v=1)=>{const p=new tt(new li(u,u+f,100),new hn({color:m,transparent:!0,opacity:v,side:Dt}));return p.rotation.x=-Math.PI/2,p.position.y=g,h.add(p),p},a=n.radius,l=r(e,new Vi(200,200),n.ground,0,-1.3,0);l.rotation.x=-Math.PI/2,r(t,new Gt(a,a-.15,.8,96),n.side,0,-.45,0),r(t,new Gt(a,a,.14,96),n.top,0,.015,0,{roughness:n.id==="ice"?.3:.92});const c=r(t,new Ni(a-.075,.065,10,120),n.edge,0,.1,0);if(c.rotation.x=Math.PI/2,n.id==="ice"){for(let h=0;h<3;h++)o(e,a+.6+h*1.1,.04,"#eff8e8",-1.28,.45);o(t,a-.7,.024,"#afd2d1",.095,.7);for(let h=0;h<8;h++){const u=h*2.399,f=a-1-h%3*.55,m=Math.cos(u)*f,g=Math.sin(u)*f;s(t,[[m,.1,g],[m+.45,.1,g+.3],[m+.1,.1,g+.9]],"#a0c5cc")}for(let h=0;h<30;h++){const u=h*2.399,f=1.3+h%7*.7,m=r(t,new la(.035+h%3*.02,8),"#ffffff",Math.cos(u)*f,.1,Math.sin(u)*f);m.rotation.x=-Math.PI/2}[[-8.5,-3,.5],[8.8,2,.4],[-7.8,5,.3],[7,-6,.6]].forEach(([h,u,f])=>r(e,new Gt(f,f*.8,.25,5),"#edf8ee",h,-1.13,u))}else if(n.id==="kiln"){for(let h=0;h<3;h++)o(e,a+.45+h*.95,.09,"#ffd095",-1.27,.5);o(t,a-.5,.07,"#e5af75",.1,.8);for(let h=0;h<9;h++){const u=h*Math.PI*2/9,f=(m,g)=>[Math.cos(g)*m,.1,Math.sin(g)*m];s(t,[f(1.3,u),f(3.1,u+.13),f(4.5,u-.08),f(a-.65,u)],"#f8bd79",.9)}for(let h=0;h<11;h++){const u=Math.PI+h*Math.PI/10,f=Math.cos(u)*(a+1.2),m=Math.sin(u)*(a+1.2),g=r(e,new xt(.8,.5,.55),"#ae775f",f,-.96,m);g.rotation.y=-u,h%2===0&&r(e,new os(.23),"#ffd194",f,-.58,m,{emissive:"#ed8f3a",emissiveIntensity:.35})}[[-8,3],[8,2]].forEach(([h,u])=>{r(e,new os(.7),"#987665",h,-.95,u),r(e,new ai(.25,.65,7),"#ffd39b",h,-.35,u,{emissive:"#eb9448",emissiveIntensity:.2})})}else{for(let u=0;u<32;u++){const f=u*Math.PI/16,m=Math.cos(f)*(a-.03),g=Math.sin(f)*(a-.03);s(t,[[m,-.1,g],[m,-.74,g]],"#7c654c",.5)}[1.3,2.5,3.9,5.4].forEach(u=>o(t,u,.026,"#839e65",.1,.45));const h=(u,f,m)=>{r(e,new Gt(.13*m,.18*m,1.2*m,8),"#a08460",u,-1.3+.6*m,f);const g=r(e,new Wt(.65*m,16,12),"#86a974",u,-1.3+1.55*m,f);g.scale.y=1.25,r(e,new Wt(.43*m,16,12),"#a2bd83",u-.3*m,-1.3+1.4*m,f+.15)};[[-8,-3,1.2],[-6,-7,1],[0,-8.7,1.4],[6,-7,1.2],[8,-2,1.1]].forEach(u=>h(...u));for(let u=0;u<8;u++){const f=u*2.399,m=a+1.2,g=Math.cos(f)*m,v=Math.sin(f)*m;r(e,new Gt(.065,.08,.28,8),"#f6e6c5",g,-1.12,v);const p=r(e,new Wt(.23,16,12),u%2?"#e5b576":"#c68e77",g,-.93,v);p.scale.y=.5}for(let u=0;u<14;u++){const f=u*2.399,m=a-.35,g=r(t,new ai(.1,.18,4),"#84a466",Math.cos(f)*m,.17,Math.sin(f)*m);g.rotation.z=.2}}return{root:e,platform:t}}function zg(n){const e=new Set,t=new Set;n.traverse(i=>{i.geometry&&e.add(i.geometry),i.material&&t.add(i.material)}),e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),n.removeFromParent()}const kg=[["버터","#f8d47f","sprout",0,"일반",100,100,100,"버터 로켓","➤","앞으로 강하게 돌진해요.","말랑한 얼굴에 숨겨진 단단한 마음"],["모찌","#f5eee1","plain",1,"일반",90,92,120,"모찌 보호막","⬡","1.2초 동안 밀림을 75% 줄이고 주변을 살짝 밀어요.","햇살 아래서 쉬는 시간이 제일 좋아"],["피치","#efacaa","bow",2,"일반",104,98,96,"피치 팡!","✿","가까운 친구들을 사방으로 밀어내요.","친구에게 줄 꽃을 고르는 중"],["민트","#a6cdb5","sprout",3,"일반",90,116,88,"민트 바람걸음","≋","짧게 돌진하고 1초 동안 이동이 빨라져요.","어디든 가벼운 발걸음으로"],["라일락","#bcb4db","tuft",4,"일반",98,100,102,"라일락 회오리","✧","0.9초 동안 주변 친구들을 빙글 밀어요.","작은 발로 커다란 모험을 꿈꿔"],["소다","#9fcadd","plain",5,"일반",106,100,94,"소다 물대포","◈","앞쪽 부채꼴로 밀어내고 살짝 반동을 받아요.","연못의 물방울과 노는 장난꾸러기"],["코코아","#b88c70","ears",2,"희귀",112,88,118,"초코 지진","◉","주변을 밀고 0.8초 동안 상대의 이동을 늦춰요.","따뜻한 코코아 한 잔 같은 친구"],["망고","#f2ad4e","leaf",0,"희귀",108,108,90,"망고 두번통","»","돌진 뒤 0.28초 후 한 번 더 가속해요.","생각보다 먼저 뛰어가는 행동파"],["말차","#a4b576","sprout",1,"희귀",95,86,130,"말차 뿌리방패","♧","1.5초 동안 뿌리처럼 버텨 밀림을 82% 줄여요.","정원 가꾸기에 누구보다 진심"],["로즈","#d78eaa","bow",4,"희귀",105,100,100,"장미 소용돌이","❀","회오리에 닿은 친구의 이동을 잠깐 늦춰요.","수줍은 미소 속 당찬 승부욕"],["구름","#dfedf0","ears",3,"희귀",88,120,85,"구름 폴짝","☁","가볍게 도약하며 0.45초간 보호막을 얻어요.","구름 그림자를 따라 느긋한 산책"],["포도","#a497c7","tuft",5,"희귀",101,103,98,"포도 연사","⁙","앞쪽으로 두 번 나누어 밀어내요.","한 번 웃으면 멈출 수 없어"],["피닉스","#ef9470","crown",0,"에픽",122,104,94,"불꽃 날개","♨","강하게 돌진한 뒤 주변에 작은 불꽃 파동을 내요.","넘어져도 다시 일어나는 불꽃"],["서리","#b9dce6","crystal",1,"에픽",98,90,128,"서리 요새","❄","방패를 두르고 가까운 친구를 1.2초간 느리게 해요.","차가운 겉모습 안의 따뜻한 마음"],["번개","#f3d875","bolt",2,"에픽",125,103,85,"번개 팡!","ϟ","더 넓은 범위에 강한 밀치기 파동을 보내요.","번뜩 떠오른 아이디어는 바로 실행"],["달빛","#bec6e5","moon",3,"에픽",94,118,96,"달빛 유영","☾","1.5초간 빠르게 움직이고 잠깐 보호막을 얻어요.","잠든 마을의 좋은 꿈을 지켜줘"],["허니","#dfbb6b","crown",4,"에픽",108,87,132,"꿀 회오리","✺","꿀 회오리로 주변 친구를 천천히 밀고 느리게 해요.","꿀단지처럼 묵직하고 다정해"],["우주","#a6a2d3","star",5,"에픽",120,94,104,"별빛 대포","★","멀리 뻗는 부채꼴 별빛으로 밀어내요.","오늘도 별 너머 이야기를 들려줘"]],Et=kg.map(([n,e,t,i,r,s,o,a,l,c,h,u],f)=>({id:f,name:n,color:e,accent:t,kind:i,rarity:r,power:s,speed:o,weight:a,skillName:l,icon:c,description:h,desc:u})),as={일반:"#849c79",희귀:"#749db8",에픽:"#a58ac1"},Ic=100,Uc=40;function Hg(n=Math.random){const e=n(),t=e<.6?"일반":e<.92?"희귀":"에픽",i=Et.filter(r=>r.rarity===t);return i[Math.min(i.length-1,Math.floor(n()*i.length))].id}const Hn=Et.map(n=>({name:n.skillName,icon:n.icon,color:n.color,description:n.description,cooldown:3,kind:n.kind}));function ni(n,e,t,i,r=!1,s=0,o=0){for(const a of e){if(a===n||!a.alive)continue;const l=a.x-n.x,c=a.z-n.z,h=Math.hypot(l,c);if(h>t)continue;const u=h>.001?l/h:n.dx,f=h>.001?c/h:n.dz;if(r&&u*n.dx+f*n.dz<.45)continue;const m=i*(1-.3*h/t)*(n.power||1);Zo(a,(u-f*s)*m,(f+u*s)*m),a.impact=.24,a.stagger=Math.max(a.stagger||0,a.shield>0?.05:.25),a.hitStrength=Math.min(1,m/9),a.feedbackCooldown>0||(a.skillHit={x:a.x,z:a.z,dx:u,dz:f,strength:i,color:Hn[n.index].color,indices:[n.index,a.index]},a.feedbackCooldown=.18),o&&(a.slow=Math.max(a.slow||0,o))}}function Vg(n,e){var r;if(!n.alive||n.cooldown>0)return!1;n.cooldown=3,n.skillTime=.45;const t=n.index,i=(r=Hn[t])==null?void 0:r.kind;switch(n.shieldFactor=t===8?.18:.25,i){case 0:n.vx+=n.dx*9,n.vz+=n.dz*9,n.dashTime=.4,(t===7||t===12)&&(n.echo=.28,n.echoDx=n.dx,n.echoDz=n.dz);break;case 1:n.shield=1.2,n.skillTime=1.2,n.vx*=.45,n.vz*=.45,ni(n,e,1.8,2.8);break;case 2:ni(n,e,t===14?3.2:2.8,8,!1,0,t===6?.8:0);break;case 3:n.vx+=n.dx*4.5,n.vz+=n.dz*4.5,n.haste=t===15?1.5:1,n.skillTime=n.haste,n.dashTime=.2,(t===10||t===15)&&(n.shield=t===10?.45:.3);break;case 4:n.whirl=.9,n.skillTime=.9;break;case 5:ni(n,e,t===17?4.3:3.6,t===11?6.2:10,!0),t===11&&(n.echo=.3),n.vx-=n.dx*1.2,n.vz-=n.dz*1.2;break;default:return n.cooldown=0,n.skillTime=0,!1}return t===8&&(n.shield=n.skillTime=1.5),t===13&&(n.shield=n.skillTime=1.4,ni(n,e,2.2,1.5,!1,0,1.2)),!0}function Gg(n,e,t){for(const i of["cooldown","dashTime","shield","haste","skillTime","slow","feedbackCooldown"])n[i]=Math.max(0,(n[i]||0)-t);if(n.echo>0&&(n.echo=Math.max(0,n.echo-t),n.echo===0&&n.alive&&(n.index===7&&(n.vx+=n.echoDx*3.8,n.vz+=n.echoDz*3.8,n.dashTime=.2),n.index===12&&ni(n,e,2,3.5),n.index===11&&ni(n,e,3.6,6.2,!0))),n.whirl>0){const i=Math.min(n.whirl,t);n.whirl=Math.max(0,n.whirl-t),n.alive&&ni(n,e,2.5,11*i,!1,.45,n.index===9?.4:n.index===16?.75:0)}}function Wg(n,e,t){const i=e.filter(s=>s.alive);if(!i.length)return;const r=n.filter(s=>s.alive).length-i.length+1;for(const s of i)s.alive=!1,s.rank=r,s.eliminatedAt=t,s.fall=0}function Pl(n){for(const e of n)e.alive&&(e.rank=1)}function Xg(n){return[...n].sort((e,t)=>(e.rank??0)-(t.rank??0)||e.index-t.index)}function qg(n,e){const t=[],i=[],r=new li(.8,1,48),s=new ml;for(let l=0;l<10;l++){const c=l*Math.PI/5-Math.PI/2,h=l%2?.045:.11,u=Math.cos(c)*h,f=Math.sin(c)*h;l===0?s.moveTo(u,f):s.lineTo(u,f)}s.closePath();const o=new fa(s);for(let l=0;l<18;l++){const c=new tt(r,new hn({transparent:!0,opacity:0,side:Dt,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.visible=!1,n.add(c),t.push({mesh:c,life:0})}for(let l=0;l<64;l++){const c=new tt(o,new hn({transparent:!0,opacity:0,depthWrite:!1,side:Dt}));c.rotation.x=-.55,c.visible=!1,n.add(c),i.push({mesh:c,life:0})}function a(l,c,h,u=1,f=0,m=0,g=!1){if(e)return;const v=t.find(p=>p.life<=0)||t[0];Object.assign(v,{life:.45,total:.45,size:u}),v.mesh.material.color.set(h),v.mesh.position.set(l,.16,c),v.mesh.scale.setScalar(.15),v.mesh.material.opacity=.65,v.mesh.visible=!0;for(let p=0;p<10;p++){const d=i.find(S=>S.life<=0);if(!d)break;const E=g?Math.atan2(m,f)+(p/9-.5)*1.6:p*Math.PI*2/10;Object.assign(d,{life:.48,total:.48,vx:Math.cos(E)*u*3,vz:Math.sin(E)*u*3}),d.mesh.position.set(l,.35,c),d.mesh.scale.setScalar(Math.min(1.8,.8+u*.3)),d.mesh.material.color.set(h),d.mesh.material.opacity=.8,d.mesh.visible=!0}}return{burst:a,update(l){for(const c of t)c.life<=0||(c.life=Math.max(0,c.life-l),c.mesh.visible=c.life>0,c.mesh.scale.setScalar((1-c.life/c.total)*c.size),c.mesh.material.opacity=c.life/c.total*.65);for(const c of i)c.life<=0||(c.life=Math.max(0,c.life-l),c.mesh.visible=c.life>0,c.mesh.position.x+=c.vx*l,c.mesh.position.z+=c.vz*l,c.mesh.position.y=.35+Math.sin((1-c.life/c.total)*Math.PI)*.65,c.mesh.rotation.z+=l*4,c.mesh.material.opacity=c.life/c.total*.8)},reset(){for(const l of[...t,...i])l.life=0,l.mesh.visible=!1}}}function Yg({state:n,pause:e,resume:t,lobby:i}){const r=document.getElementById("joystick"),s=document.getElementById("joystick-thumb"),o={x:0,z:0};let a=null,l=!1,c=!1,h=!1;document.addEventListener("pointerdown",v=>{v.pointerType==="touch"&&(h=!0)},{capture:!0,passive:!0});const u=()=>h||navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches;function f(){a=null,o.x=o.z=0,s.style.transform="translate(0px,0px)",r.classList.remove("dragging")}function m(v){if(v.pointerId!==a)return;const p=r.getBoundingClientRect(),d=p.width*.3;let E=v.clientX-p.left-p.width/2,S=v.clientY-p.top-p.height/2;const M=Math.hypot(E,S);M>d&&(E*=d/M,S*=d/M),o.x=Math.abs(E/d)<.08?0:E/d,o.z=Math.abs(S/d)<.08?0:S/d,s.style.transform="translate("+E+"px,"+S+"px)"}r.addEventListener("pointerdown",v=>{a!==null||n()!=="playing"||(v.preventDefault(),a=v.pointerId,r.setPointerCapture(a),r.classList.add("dragging"),m(v))}),r.addEventListener("pointermove",m);for(const v of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(v,p=>{p.pointerId===a&&f()});function g(){if(!l)return;const v=innerHeight>innerWidth;document.getElementById("rotate-prompt").hidden=!v,v&&(n()==="playing"||n()==="countdown")?(c=!0,f(),e()):!v&&c&&(c=!1,n()==="paused"&&!document.hidden&&t())}return window.addEventListener("resize",g),window.addEventListener("blur",f),document.getElementById("rotate-back").addEventListener("click",i),{vector:o,reset:f,begin(){u()&&(l=!0,document.body.classList.add("mobile-match"),g(),(async()=>{var v;try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{(v=screen.orientation)!=null&&v.lock&&await screen.orientation.lock("landscape")}catch{}g()})())},end(){var v,p;l=!1,c=!1,f(),document.body.classList.remove("mobile-match"),document.getElementById("rotate-prompt").hidden=!0;try{(p=(v=screen.orientation)==null?void 0:v.unlock)==null||p.call(v)}catch{}document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}}}const Ll="eggy-village-v1",Jg=(n=Math.random)=>{const e=Math.floor(n()*6);return{favorite:e,owned:[e],shards:300,tickets:0,layout:{},nicknames:Array(18).fill(""),fragments:Array(18).fill(0),outfits:Array(18).fill("none"),daily:{day:ui(),completed:0,claimed:!1},draws:0,garden:"peach",hearts:Array(18).fill(0),greeted:Array(18).fill(""),matches:0,wins:0}},Dl=n=>typeof n=="string"?Array.from(n.replace(/[\u0000-\u001f\u007f<>]/g,"").trim()).slice(0,12).join(""):"",Oi={none:0,ribbon:1,hat:3,garden:5};function Zg(n,e,t){return!n.owned.includes(e)||!Object.hasOwn(Oi,t)||(n.fragments[e]||0)<Oi[t]?!1:(n.outfits[e]=t,!0)}function Il(n){var t,i,r;const e=Jg();try{const s=JSON.parse(n.getItem(Ll));if(!s||typeof s!="object")return e;const o=u=>Number.isSafeInteger(u)&&u>=0&&u<=1e9?u:0,a=u=>Number.isInteger(u)&&u>=0&&u<Et.length,l=Array.isArray(s.owned)?[...new Set(s.owned.filter(a))]:[a(s.favorite)?s.favorite:e.favorite];l.length||l.push(e.favorite);const c=Math.min(o(s.wins),o(s.matches)),h={};for(const[u,f]of Object.entries(s.layout||{}).slice(0,80))/^(house|tree|flower|pond|fountain|arena|bench|fence|egg)-\d+$/.test(u)&&Number.isFinite(f==null?void 0:f.x)&&Number.isFinite(f==null?void 0:f.z)&&Math.abs(f.x)<=12&&Math.abs(f.z)<=9&&(h[u]={x:f.x,z:f.z});return{favorite:l.includes(s.favorite)?s.favorite:l[0],owned:l,shards:s.shards===void 0?300:o(s.shards),draws:o(s.draws),tickets:s.tickets===void 0?Math.floor(c/3):o(s.tickets),layout:h,garden:["peach","lemon","lilac"].includes(s.garden)?s.garden:"peach",nicknames:e.nicknames.map((u,f)=>{var m;return Dl((m=s.nicknames)==null?void 0:m[f])}),fragments:e.fragments.map((u,f)=>{var m;return o((m=s.fragments)==null?void 0:m[f])}),outfits:e.outfits.map((u,f)=>{var m,g;return Object.hasOwn(Oi,(m=s.outfits)==null?void 0:m[f])&&o((g=s.fragments)==null?void 0:g[f])>=Oi[s.outfits[f]]?s.outfits[f]:"none"}),daily:{day:/^\d{4}-\d{2}-\d{2}$/.test((t=s.daily)==null?void 0:t.day)?s.daily.day:ui(),completed:Math.min(3,o((i=s.daily)==null?void 0:i.completed)),claimed:((r=s.daily)==null?void 0:r.claimed)===!0},hearts:e.hearts.map((u,f)=>{var m;return o((m=s.hearts)==null?void 0:m[f])}),greeted:e.greeted.map((u,f)=>{var m;return typeof((m=s.greeted)==null?void 0:m[f])=="string"?s.greeted[f].slice(0,10):""}),matches:o(s.matches),wins:Math.min(o(s.wins),o(s.matches))}}catch{return e}}function Ul(n,e){try{return n.setItem(Ll,JSON.stringify(e)),!0}catch{return!1}}function ui(n=new Date){return[n.getFullYear(),String(n.getMonth()+1).padStart(2,"0"),String(n.getDate()).padStart(2,"0")].join("-")}function Kg(n,e,t=ui()){return!n.owned.includes(e)||n.greeted[e]===t?!1:(n.greeted[e]=t,n.hearts[e]+=1,n.shards+=20,!0)}function $g(n,e=Math.random){if(!n.tickets&&n.shards<Ic)return null;const t=Hg(e),i=n.owned.includes(t),r=n.tickets>0?"ticket":"shards";return r==="ticket"?n.tickets--:n.shards-=Ic,n.draws++,i?(n.shards+=Uc,n.fragments[t]++):n.owned.push(t),{id:t,duplicate:i,refund:i?Uc:0,payment:r}}function Nl(n,e=ui()){return n.daily.day===e?n.daily:{day:e,completed:0,claimed:!1}}function jg(n,e,t=ui()){if(!Number.isInteger(e)||e<1||e>6)return 0;const i=60+(7-e)*10;return n.matches++,e===1&&(n.wins++,n.wins%3===0&&(n.tickets=(n.tickets||0)+1)),n.shards+=i,n.daily={...Nl(n,t)},n.daily.completed=Math.min(3,n.daily.completed+1),n.daily.completed===3&&!n.daily.claimed&&(n.daily.claimed=!0,n.tickets++),i}function Nc(n){return JSON.stringify({app:"eggy-village",version:1,exportedAt:new Date().toISOString(),data:n},null,2)}function Qg(n){if(typeof n!="string"||n.length>25e4)throw Error("파일이 너무 커요. 동글동글 저장 파일을 선택해 주세요.");let e;try{e=JSON.parse(n)}catch{throw Error("읽을 수 없는 파일이에요. JSON 저장 파일을 선택해 주세요.")}if((e==null?void 0:e.app)!=="eggy-village"||e.version!==1||!e.data||!Array.isArray(e.data.owned)||!e.data.owned.length||e.data.owned.some(t=>!Number.isInteger(t)||t<0||t>=18))throw Error("지원하는 동글동글 저장 파일이 아니에요.");for(const t of["shards","tickets","draws","matches","wins"])if(!Number.isSafeInteger(e.data[t])||e.data[t]<0||e.data[t]>1e9)throw Error("저장 기록이 올바르지 않아요. 현재 마을은 그대로 유지돼요.");return Il({getItem:()=>JSON.stringify(e.data)})}function Qr(n,e,t=.5){const i=Math.max(1,10.8-t),r=Math.max(1,7.7-t),s=Math.hypot(n/i,e/r);return s>1?{x:n/s,z:e/s}:{x:n,z:e}}function e_({root:n,camera:e,container:t,data:i,save:r}){const s=[],o=[],a=new El,l=new pe,c=new Pn(new I(0,1,0),-.14);let h=!1,u=null,f=null;const m=x=>document.getElementById(x),g=new tt(new li(.9,1,64),new hn({color:"#d6a54d",side:Dt,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.visible=!1,n.add(g);function v(x){m("edit-status").textContent=x}function p(){g.visible=h&&!!u,u&&(g.position.set(u.object.position.x,.17,u.object.position.z),g.scale.setScalar(u.radius+.2))}function d(x,y){x.object.position.x=y.x,x.object.position.z=y.z,i.layout[x.id]={x:y.x,z:y.z},p()}function E(x){const y=t.getBoundingClientRect();l.set((x.clientX-y.left)/y.width*2-1,-(x.clientY-y.top)/y.height*2+1),a.setFromCamera(l,e)}function S(x){return E(x),a.ray.intersectPlane(c,new I)}function M(x){E(x);const y=a.intersectObjects(s.filter(F=>F.object.visible).map(F=>F.object),!0)[0];if(!y)return null;let R=y.object;for(;R&&!R.userData.layoutId;)R=R.parent;return s.find(F=>F.id===(R==null?void 0:R.userData.layoutId))}function A(x){o.push(x),o.length>20&&o.shift(),m("edit-undo").disabled=!1}function w(x){u=x,p(),v(x?x.name+" 선택 · 드래그 또는 방향키로 이동":"집·나무·꽃밭·달걀을 눌러 옮겨보세요.")}function C(){f&&(d(f.item,f.before),f=null,r())}function D(x){C(),h=x,t.classList.toggle("editing",x),m("village-edit").textContent=x?"배치 완료 ✓":"마을 꾸미기 ↔",m("village-edit").setAttribute("aria-pressed",String(x)),m("editor-toolbar").hidden=!x,w(null)}t.addEventListener("pointerdown",x=>{if(!h||f)return;x.preventDefault();const y=M(x);if(w(y),!y)return;const R=S(x);if(!R)return;const F={x:y.object.position.x,z:y.object.position.z};f={id:x.pointerId,item:y,before:F,ox:F.x-R.x,oz:F.z-R.z},t.setPointerCapture(x.pointerId)}),t.addEventListener("pointermove",x=>{if(!h||!f||f.id!==x.pointerId)return;x.preventDefault();const y=S(x);y&&d(f.item,Qr(y.x+f.ox,y.z+f.oz,f.item.radius))}),t.addEventListener("pointerup",x=>{if(!f||f.id!==x.pointerId)return;const y=f;f=null,Math.hypot(y.item.object.position.x-y.before.x,y.item.object.position.z-y.before.z)>.01&&(A([{item:y.item,position:y.before}]),r(),v(y.item.name+" 배치를 저장했어요."))});for(const x of["pointercancel","lostpointercapture"])t.addEventListener(x,()=>C());return document.addEventListener("keydown",x=>{if(!h||!u||x.target.closest("button,dialog,input,textarea"))return;const y={ArrowLeft:[-.25,0],ArrowRight:[.25,0],ArrowUp:[0,-.25],ArrowDown:[0,.25]};if(!y[x.code])return;x.preventDefault();const R=u.object.position;A([{item:u,position:{x:R.x,z:R.z}}]),d(u,Qr(R.x+y[x.code][0],R.z+y[x.code][1],u.radius)),r()}),m("village-edit").addEventListener("click",()=>{D(!h),m("village-edit").blur()}),m("edit-undo").addEventListener("click",()=>{const x=o.pop();x&&(x.forEach(({item:y,position:R})=>d(y,R)),r(),v("이전 배치로 되돌렸어요.")),m("edit-undo").disabled=!o.length}),m("edit-reset").addEventListener("click",()=>{A(s.map(x=>({item:x,position:{x:x.object.position.x,z:x.object.position.z}}))),s.forEach(x=>d(x,x.initial)),r(),v("기본 배치로 돌아왔어요. 되돌리기로 취소할 수 있어요.")}),{get editing(){return h},stop:()=>D(!1),register(x,y,R,F){const G={x:R.position.x,z:R.position.z},Y={id:x,name:y,object:R,radius:F,initial:G};s.push(Y),R.userData.layoutId=x;const q=i.layout[x];q&&d(Y,Qr(q.x,q.z,F))},update:p,snapshot:()=>s.filter(x=>x.object.visible).map(x=>{const y=x.object.position.clone();y.y+=x.id.startsWith("house")?1:x.id.startsWith("tree")?1.2:x.id.startsWith("egg")?.7:.3,y.project(e);const R=t.getBoundingClientRect();return{id:x.id,x:x.object.position.x,z:x.object.position.z,screenX:R.left+(y.x*.5+.5)*R.width,screenY:R.top+(-y.y*.5+.5)*R.height}})}}function t_({friends:n,reduced:e,onMeet:t}){const i=l=>document.getElementById(l);let r=null,s=null;const o=()=>{clearTimeout(r),r=null,i("draw-dialog").classList.remove("is-hatching"),i("draw-dialog").classList.add("is-revealed"),i("draw-stage-copy").textContent=s!=null&&s.duplicate?"다시 만나도 반가워!":"톡! 새로운 친구가 왔어요!",i("draw-meet").disabled=!1},a=()=>{clearTimeout(r),r=null};return i("close-draw").addEventListener("click",()=>i("draw-dialog").close()),i("draw-dialog").addEventListener("close",()=>{i("draw-dialog").open||a()}),i("draw-skip").addEventListener("click",o),i("draw-meet").addEventListener("click",()=>{s&&(i("draw-dialog").close(),t(s.id))}),{show(l){a(),s=l;const c=n[l.id],h=i("draw-dialog");h.classList.remove("is-revealed"),h.classList.toggle("is-hatching",!e),h.style.setProperty("--hatch-color",as[c.rarity]),i("draw-portrait").style.setProperty("--egg",c.color),i("draw-name").textContent=c.name,i("draw-rarity").textContent=c.rarity+(l.duplicate?" · 다시 만난 친구":" · NEW"),i("draw-rarity").style.color=as[c.rarity],i("draw-copy").textContent=l.duplicate?"다시 만나 반가워! 별조각 40개와 이 친구의 꾸미기 조각 1개를 받았어요. 작은 옷장에서 장식을 만나보세요!":"작은 발로 총총, "+c.name+"가 이사 왔어요.",i("draw-personality").textContent="“"+c.desc+"”",i("draw-skill-title").textContent=c.icon+" "+c.skillName,i("draw-skill-description").textContent=c.description,i("draw-traits").innerHTML=[["통! 밀치는 힘",c.power],["총총! 발걸음",c.speed],["꾹! 버티는 힘",c.weight]].map(([u,f])=>"<span>"+u+"<b>"+f+"</b></span>").join(""),i("draw-stage-copy").textContent="안에서 누가 꼬물꼬물…",i("draw-meet").disabled=!e,h.showModal(),e?o():r=setTimeout(o,1450)}}}const n_=["따끈한 토스트","푹신한 낮잠 베개","복숭아꽃 향기","시원한 산들바람","보랏빛 꽃다발","연못의 물방울","따뜻한 코코아","달콤한 망고","말차 한 잔","노을빛 산책","새벽 이슬","포도 한 송이","모닥불 이야기","눈꽃 결정","번쩍이는 별","달빛 자장가","꿀 한 숟가락","별똥별 소원"];function i_({residents:n,root:e,data:t,container:i,reduced:r,project:s}){const o=n.map(u=>{const f=document.createElement("span");return f.className="resident-thought",f.hidden=!0,i.append(f),u.activity="산책 중",f});let a=0;const l=()=>e.children.filter(u=>u.userData.layoutId),c=u=>t.layout["egg-"+u.index]||{x:u.x,z:u.z};function h(u){const f=c(u),m=(Math.floor(a/13)+u.index)%5;let g={...f};u.kind=m,u.activity=["총총 산책 중","꾸벅꾸벅 낮잠 중","친구에게 인사 중","꽃향기 맡는 중","분수 구경 중"][m],u.words=["오늘은 어디로 갈까?","zzZ… 말랑한 꿈","안녕! 같이 놀자 ♡","킁킁, 좋은 향기!","물방울이 반짝반짝!"][m];const v=m===1?"bench-":m===3?"flower-":m===4?"fountain-":null;if(v){const d=l().filter(E=>E.userData.layoutId.startsWith(v)).sort((E,S)=>E.position.distanceTo(u.mesh.position)-S.position.distanceTo(u.mesh.position))[0];d&&Math.hypot(d.position.x-f.x,d.position.z-f.z)<4&&(g={x:d.position.x,z:d.position.z+(m===4?1.7:m===1?.65:1.05)})}else if(m===2){const d=n.find(E=>E!==u&&E.mesh.visible&&Math.hypot(E.mesh.position.x-f.x,E.mesh.position.z-f.z)<3);d&&(g={x:(d.mesh.position.x+f.x)/2,z:(d.mesh.position.z+f.z)/2})}else g={x:f.x+Math.sin(a+u.index)*1.1,z:f.z+Math.cos(a*.7+u.index)*.8};const p=l().filter(d=>d.userData.layoutId.startsWith("house-")).some(d=>{const E=g.x-u.mesh.position.x,S=g.z-u.mesh.position.z,M=Math.max(0,Math.min(1,((d.position.x-u.mesh.position.x)*E+(d.position.z-u.mesh.position.z)*S)/(E*E+S*S||1)));return Math.hypot(u.mesh.position.x+M*E-d.position.x,u.mesh.position.z+M*S-d.position.z)<1.4});u.target=Qr(p?f.x:g.x,p?f.z:g.z,.8)}return{update(u,f,m){a+=u,n.forEach((g,v)=>{const p=g.mesh,d=p.userData.body,E=c(g);if(o[v].hidden=!0,!p.visible)return;if(f||r){p.position.x=E.x,p.position.z=E.z,g.next=0,d.rotation.set(0,0,0),d.position.y=0,p.userData.arms[1].rotation.z=.4,p.userData.feet.forEach(D=>D.position.y=.14);return}g.next=(g.next||0)-u,g.next<=0&&(h(g),g.next=13);const S=g.target.x-p.position.x,M=g.target.z-p.position.z,A=Math.hypot(S,M),w=A>.08,C=Math.min(A,u*.48);w&&(p.position.x+=S/A*C,p.position.z+=M/A*C),d.rotation.z=w?Math.sin(a*7+v)*.055:g.kind===1?.13:Math.sin(a*2+v)*.018,d.position.y=!w&&g.kind===1?-.07:0,p.userData.arms[1].rotation.z=!w&&g.kind===2?.9+Math.sin(a*7)*.35:.4,p.userData.feet[0].position.y=.14+(w?Math.sin(a*8+v)*.07:0),p.userData.feet[1].position.y=.14-(w?Math.sin(a*8+v)*.07:0),!w&&(v===m||v%6===Math.floor(a/5)%6)&&g.next>3&&(o[v].hidden=!1,o[v].textContent=g.words,s(p,o[v],1.9))})},status:u=>n[u].activity,reset(){n.forEach(u=>u.next=0)}}}function r_({data:n,storage:e,friends:t,selected:i,refresh:r,persist:s}){const o=p=>document.getElementById(p),a=document.createElement("div");a.className="egg-personal",a.innerHTML='<p id="egg-favorite"></p><p id="egg-activity" aria-live="off"></p><form id="nickname-form"><label for="egg-nickname">우리만의 이름 <small>최대 12글자</small></label><div><input id="egg-nickname" maxlength="24" autocomplete="off" placeholder="별명을 지어 주세요"/><button>이름 저장</button></div></form><details class="egg-wardrobe"><summary>작은 옷장 <span id="egg-fragments"></span></summary><p>같은 달걀을 뽑으면 조각 +1! 조각은 사라지지 않고 장식이 차례로 열려요.</p><div id="outfit-options"></div><small>장식은 능력치를 바꾸지 않아요. 꽃 장식은 마을의 작은 화단도 함께 꾸며요.</small></details><p id="personal-message" role="status"></p>',o("resident-stats").after(a);const l={none:"기본 모습",ribbon:"분홍 리본",hat:"밀짚모자",garden:"꽃 배지 + 작은 화단"};for(const[p,d]of Object.entries(Oi)){const E=document.createElement("button");E.type="button",E.dataset.outfit=p,E.textContent=l[p]+(d?" · 조각 "+d:""),E.addEventListener("click",()=>{Zg(n,i(),p)&&(s(),r(),o("personal-message").textContent=l[p]+"으로 갈아입었어요!")}),o("outfit-options").append(E)}o("nickname-form").addEventListener("submit",p=>{p.preventDefault();const d=i();n.nicknames[d]=Dl(o("egg-nickname").value),o("egg-nickname").value=n.nicknames[d],s(),r(),o("personal-message").textContent=n.nicknames[d]?"이제 "+n.nicknames[d]+"이라고 불러줄게!":"원래 이름으로 불러줄게!"});const c=document.createElement("div");c.className="daily-card",c.innerHTML='<strong>오늘도 같이 놀자! <b id="daily-count"></b></strong><p id="daily-copy"></p><div class="daily-stamps" id="daily-stamps" aria-hidden="true"></div><small>승패 상관없이 하루 3판 완료 → 뽑기권 1장<br>끝까지 결과를 보면 인정돼요. 매일 자정에 새로 시작해요.</small>',document.querySelector(".ticket-reward").after(c);const h=document.createElement("section");h.className="backup-card",h.innerHTML='<div><h2>우리 마을, 소중히 보관하기</h2><p>저장 파일을 다른 휴대폰이나 컴퓨터에서 불러올 수도 있어요.</p><small>이 브라우저에 자동 저장돼요. 브라우저 데이터를 지우기 전에는 파일로 보관해 주세요.</small></div><div class="backup-actions"><button id="save-export">저장 파일 받기 ↓</button><button id="save-import">저장 파일 불러오기 ↑</button><button id="save-undo" hidden>불러오기 전 마을 복구</button><input id="save-file" type="file" accept=".json,application/json" hidden/></div><p id="backup-message" role="status"></p>',document.querySelector(".village-bottom").after(h);const u=document.createElement("dialog");u.id="backup-dialog",u.innerHTML='<h2>이 마을을 불러올까요?</h2><p id="backup-preview"></p><p>현재 마을을 선택한 기록으로 바꿔요. 불러오기 전 마을도 이 브라우저에 한 번 보관해 둘게요.</p><div class="backup-actions"><button id="backup-cancel">취소</button><button id="backup-apply">이 마을 불러오기</button></div>',document.body.append(u);let f=null;const m=p=>{f=Qg(p),o("backup-preview").textContent="달걀 "+f.owned.length+"마리 · 별조각 "+f.shards+"개 · 뽑기권 "+f.tickets+"장 · "+f.matches+"경기 / "+f.wins+"승",u.showModal()},g=p=>o("backup-message").textContent=p.message||"파일을 읽지 못했어요. 현재 마을은 그대로예요.";try{o("save-undo").hidden=!(e!=null&&e.getItem("eggy-village-before-import"))}catch{}o("save-export").addEventListener("click",()=>{const p=new Blob([Nc(n)],{type:"application/json"}),d=URL.createObjectURL(p),E=document.createElement("a");E.href=d,E.download="eggy-village-"+ui()+".json",E.click(),setTimeout(()=>URL.revokeObjectURL(d),1e4),o("backup-message").textContent="저장 파일을 만들었어요. 내려받은 파일을 잘 보관해 주세요."}),o("save-import").addEventListener("click",()=>o("save-file").click()),o("save-file").addEventListener("change",async()=>{const p=o("save-file").files[0];if(o("save-file").value="",!!p)try{if(p.size>25e4)throw Error("파일이 너무 커요. 동글동글 저장 파일을 골라주세요.");m(await p.text())}catch(d){g(d)}}),o("save-undo").addEventListener("click",()=>{try{m(e.getItem("eggy-village-before-import"))}catch(p){g(p)}}),o("backup-cancel").addEventListener("click",()=>u.close()),u.addEventListener("close",()=>{u.open||(f=null)}),o("backup-apply").addEventListener("click",()=>{if(f)try{if(!e)throw Error("브라우저 저장을 사용할 수 없어 불러오지 않았어요.");if(e.setItem("eggy-village-before-import",Nc(n)),!Ul(e,f))throw Error("저장 공간이 부족해요. 현재 마을은 그대로 유지돼요.");location.reload()}catch(p){u.close(),g(p)}});let v=-1;return{refresh(){const p=i();o("egg-favorite").textContent="좋아하는 것 · "+n_[p],v!==p&&(o("egg-nickname").value=n.nicknames[p]),v!==p&&(o("personal-message").textContent=""),v=p,o("egg-fragments").textContent="조각 "+n.fragments[p]+"개",document.querySelectorAll("[data-outfit]").forEach(E=>{E.disabled=n.fragments[p]<Oi[E.dataset.outfit],E.setAttribute("aria-pressed",String(n.outfits[p]===E.dataset.outfit))});const d=Nl(n);o("daily-count").textContent=d.completed+" / 3",o("daily-copy").textContent=d.claimed?"오늘의 뽑기권 1장을 받았어요 ✓":"뽑기권까지 "+(3-d.completed)+"판! 져도 괜찮아요.",o("daily-stamps").textContent=Array.from({length:3},(E,S)=>S<d.completed?"●":"○").join("   ")},activity(p){o("egg-activity").textContent=p}}}function s_({makeEgg:n,friends:e,onPlay:t,onSelect:i,reduced:r}){const s=B=>document.getElementById(B);let o;try{o=localStorage}catch{o=null}const a=Il(o);let l=a.favorite,c=0,h=0,u=!0,f;const m=new al;m.background=new Xe("#e7eee0");const g=new fs(-14,14,9,-9,.1,120);g.position.set(15,20,23),g.lookAt(0,.1,0),m.add(new Sl("#fff5d9","#9bac91",2.6));const v=new yl("#fff4d7",3);v.position.set(-9,19,10),v.castShadow=!0,v.shadow.mapSize.set(2048,2048),Object.assign(v.shadow.camera,{left:-15,right:15,top:15,bottom:-15}),v.shadow.normalBias=.035,m.add(v);const p=new It;m.add(p);const d=[],E=[],S=e_({root:p,camera:g,container:s("village-scene"),data:a,save:()=>we()});function M(B,T,_,L,z,W){const k=p.children.slice(B),ue=new It;return ue.position.set(L,0,z),p.add(ue),p.updateMatrixWorld(!0),k.forEach(ee=>ue.attach(ee)),S.register(T,_,ue,W),ue}const A=(B,T={})=>new Fi({color:B,roughness:.85,...T});function w(B,T,_,L,z,W){const k=new tt(T,typeof _=="string"?A(_):_);return k.position.set(L,z,W),k.castShadow=!0,k.receiveShadow=!0,B.add(k),k}const C=new Wt(1,18,14);function D(B,T,_,L,z,W,k,ue){const ee=w(B,C,T,_,L,z);return ee.scale.set(W,k,ue),ee}function x(B,T,_,L,z,W,k,ue=48){return w(B,new Gt(W,W,k,ue),T,_,L,z)}const y=w(p,new Vi(200,200),"#e1e9d8",0,-1,0);y.rotation.x=-Math.PI/2,x(p,"#b5c59a",0,-.48,0,9,.9,96).scale.set(1.22,1,.87),x(p,"#c9d9ac",0,.015,0,9,.12,96).scale.set(1.22,1,.87);const G=A("#e9dfbd");function Y(B){for(let T=0;T<B.length-1;T++){const[_,L]=B[T],[z,W]=B[T+1],k=Math.hypot(z-_,W-L),ue=w(p,new xt(.92,.035,k),G,(_+z)/2,.1,(L+W)/2);ue.rotation.y=Math.atan2(z-_,W-L),x(p,G,_,.1,L,.46,.04)}}Y([[-7,1],[-4,1],[-1,1],[2,1],[5,2.6]]),Y([[-6,-2],[-4,-1],[-1,1],[-1,4.8]]),Y([[-3,-4],[-2,-1],[-1,1],[2,-1],[2,-4]]),Y([[6,-3],[4,-1],[2,1]]);const q=[[-6,-3],[-1,-4.9],[4,-3.7]],J=["#e6b766","#d6b998","#dfa6a5","#8db6a0","#b3a6cc","#8cbac8"];q.forEach(([B,T],_)=>{const L=new It;L.position.set(B,.08,T),p.add(L),L.userData.homeSlot=_,x(L,"#e1d7b2",0,.08,0,1.35,.16),D(L,"#fff3d9",0,.9,0,1.03,.92,.86);const z=w(L,new ai(1.3,.9,5),J[_],0,1.85,0);z.rotation.y=Math.PI/4,w(L,new xt(.27,.55,.28),"#dfc2a0",.53,2.07,-.2),D(L,"#bb9875",0,.55,.79,.27,.48,.08),D(L,"#f2d280",.13,.55,.88,.04,.04,.035),[-1,1].forEach(W=>{D(L,"#e0c496",W*.62,1.02,.65,.22,.24,.1),D(L,"#abc9c2",W*.62,1.02,.73,.15,.17,.035),w(L,new xt(.03,.31,.025),"#f9edd1",W*.62,1.02,.77)});for(let W=0;W<3;W++)x(L,"#f0e8cb",0,.04,1+W*.36,.24,.04,8);S.register("house-"+_,"작은 집 "+(_+1),L,1.5),d.push(L)});let j=0;function X(B,T,_=1){const L=p.children.length;x(p,"#aa8963",B,.55*_,T,.14*_,1.1*_,8),D(p,"#92b180",B,1.55*_,T,.66*_,.88*_,.66*_),D(p,"#adc68f",B-.25*_,1.45*_,T+.15,.43*_,.53*_,.45*_),M(L,"tree-"+j++,"나무",B,T,.75*_)}[[-9,-1,1],[-8,-4,1.2],[-4.7,-6.3,.9],[3.5,-6.1,1.1],[8,-2.5,1.1],[8,1,.85],[-7,4.5,.8],[.7,6.2,.8]].forEach(B=>X(...B));const oe=p.children.length;x(p,"#d9cdaa",-.5,.23,.35,1.28,.28),x(p,"#a3cdd0",-.5,.4,.35,1.06,.09),x(p,"#eee2c2",-.5,.61,.35,.3,.45),D(p,"#f7d385",-.5,1.04,.35,.32,.42,.3),D(p,"#666e4c",-.62,1.09,.61,.025,.04,.02),D(p,"#666e4c",-.4,1.09,.61,.025,.04,.02),M(oe,"fountain-0","달걀 분수",-.5,.35,1.3);const de=p.children.length,be=x(p,"#e6dabe",2.6,.1,5.1,1.7,.11);be.scale.z=.7;const ze=x(p,"#a9d1ce",2.6,.17,5.1,1.53,.04);ze.scale.z=.68;for(let B=0;B<3;B++)x(p,"#aac28c",2+B*.5,.2,5.1+B%2*.35,.17,.025,12);for(let B=0;B<5;B++)w(p,new xt(.27,.1,1.3),"#c5a980",3.8+B*.23,.3,5.1);M(de,"pond-0","연못과 다리",2.6,5.1,2.2),[[-2.5,3.1],[-.6,4.7],[-8,-1.1]].forEach(([B,T],_)=>{const L=p.children.length;w(p,new xt(1.4,.18,.85),"#b9a37b",B,.18,T),w(p,new xt(1.23,.12,.68),"#8c9e6d",B,.31,T);for(let z=0;z<6;z++){const W=B-.47+z%3*.45,k=T-.2+Math.floor(z/3)*.4;x(p,"#879e6c",W,.5,k,.025,.3,5);const ue=A("#e8adae");E.push(ue);for(let ee=0;ee<5;ee++)D(p,ue,W+Math.cos(ee*1.256)*.08,.66,k+Math.sin(ee*1.256)*.08,.07,.045,.07);D(p,"#f3d37e",W,.68,k,.05,.045,.05)}M(L,"flower-"+_,"꽃밭 "+(_+1),B,T,.85)});const ke=new It;ke.position.set(5,.08,2.7),ke.userData.arena=!0,p.add(ke),x(ke,"#b5cdd0",0,.16,0,2.15,.3),x(ke,"#e8f4ed",0,.34,0,2.08,.08);const rt=w(ke,new Ni(1.88,.04,8,72),"#c6aa6b",0,.4,0);rt.rotation.x=Math.PI/2;for(const B of[-1,1])x(ke,"#ac9473",B*1.85,1.13,-.85,.055,1.7,8),w(ke,new xt(.48,.35,.035),B===1?"#e5b094":"#b5c9a0",B*1.85+.23,1.81,-.85);w(ke,new xt(1.3,.1,.5),"#d4c09a",0,.18,2.12),d.push(ke),S.register("arena-0","밀어내기 경기장",ke,2.4);let qe=0;function Z(B,T){const _=p.children.length;w(p,new xt(1.2,.12,.4),"#c9a77e",B,.45,T),w(p,new xt(1.2,.35,.1),"#d3b38b",B,.7,T-.2),[-.4,.4].forEach(L=>w(p,new xt(.1,.4,.25),"#9c8868",B+L,.22,T)),M(_,"bench-"+qe++,"벤치",B,T,.7)}Z(-3,1.9),Z(2,-1.5);const Q=p.children.length;for(let B=0;B<7;B++){const T=-3+B*.7;w(p,new xt(.1,.5,.1),"#ede3c8",T,.34,6.6),B<6&&w(p,new xt(.7,.09,.09),"#ede3c8",T+.35,.46,6.6)}M(Q,"fence-0","울타리",-.9,6.6,1.1);const ge=[[-4.6,-.4],[-2.2,-2.5],[1.6,-2.4],[3.5,.1],[-5.2,1.8],[-1.4,3.5]],Ae=e.map((B,T)=>{const _=ge[T%ge.length],L=_[0]+Math.floor(T/6)*.7,z=_[1]+Math.floor(T/6)*.75,W=n(T);W.scale.setScalar(.8),W.position.set(L,.14,z),W.userData.resident=T,p.add(W),d.push(W),S.register("egg-"+T,B.name,W,.8);const k=Ug();return p.add(k),k.visible=!1,{mesh:W,x:L,z,index:T,charm:k}}),Se=i_({residents:Ae,root:p,data:a,container:s("village-scene"),reduced:r,project:pt}),He=w(p,new Ni(.62,.035,8,48),"#cba049",0,.13,0);He.rotation.x=Math.PI/2;const vt=new El,P=new pe;function nt(B){const T=s("village-scene").getBoundingClientRect();P.set((B.clientX-T.left)/T.width*2-1,-(B.clientY-T.top)/T.height*2+1),vt.setFromCamera(P,g);const _=vt.intersectObjects(d.filter(z=>z.visible),!0)[0];if(!_)return null;let L=_.object;for(;L&&L.userData.resident===void 0&&L.userData.homeSlot===void 0&&!L.userData.arena;)L=L.parent;return(L==null?void 0:L.userData)||null}s("village-scene").addEventListener("click",B=>{if(!u||S.editing)return;const T=nt(B);T!=null&&T.arena?t(l):(T==null?void 0:T.resident)!==void 0?$e(T.resident):(T==null?void 0:T.homeSlot)!==void 0&&$e(a.owned[T.homeSlot%a.owned.length])}),s("village-scene").addEventListener("pointermove",B=>{u&&!S.editing&&(s("village-scene").style.cursor=nt(B)?"pointer":"default")});const Ie=e.map((B,T)=>{const _=document.createElement("button");return _.className="resident-button",_.type="button",_.setAttribute("aria-label",B.name+" 만나기"),_.innerHTML='<span class="egg-rarity" style="color:'+as[B.rarity]+'">'+B.rarity+'</span><span class="mini-egg" style="--egg:'+B.color+'"></span><strong>'+B.name+"</strong><small>"+B.skillName+"</small>",_.addEventListener("click",()=>$e(T)),s("residents").append(_),_});function we(){const B=Ul(o,a);s("village-save-note").textContent=B?"이 기기에 마을이 저장돼요":"저장이 제한되어 이번 방문 동안만 유지돼요"}function fe(){const B=e[l],T=Hn[l];s("resident-portrait").style.setProperty("--egg",B.color),s("resident-name").textContent=a.nicknames[l]||B.name,s("resident-description").textContent=B.desc,s("resident-skill").textContent=T.icon+" "+T.name,s("resident-rarity").textContent=B.rarity,s("resident-rarity").style.color=as[B.rarity],s("resident-stats").innerHTML="<span>파워<b>"+B.power+"</b></span><span>이동<b>"+B.speed+"</b></span><span>버티기<b>"+B.weight+"</b></span>",s("village-owned").textContent=a.owned.length+" / 18",s("collection-count").textContent=a.owned.length+" / 18",s("village-shards").textContent=a.shards,s("village-draw").disabled=a.shards<100&&a.tickets===0,s("village-draw").innerHTML="달걀 뽑기 <span>"+(a.tickets>0?"뽑기권 1장":"✦ 100")+"</span>",s("ticket-count").textContent=a.tickets+"장",s("ticket-progress").textContent="다음 뽑기권까지 "+(3-a.wins%3)+"승",s("ticket-progress-fill").style.width=a.wins%3/3*100+"%",s("resident-skill-copy").textContent=T.description,s("resident-hearts").textContent="♥ "+a.hearts[l],s("village-matches").textContent=a.matches,s("village-wins").textContent=a.wins,s("village-greet").disabled=a.greeted[l]===ui(),s("village-greet").textContent=s("village-greet").disabled?"오늘은 인사했어요 ♥":"반갑게 인사하기 ♡",Ie.forEach((_,L)=>{_.classList.toggle("selected",L===l),_.classList.toggle("locked",!a.owned.includes(L)),_.disabled=!a.owned.includes(L),_.setAttribute("aria-pressed",String(L===l))}),Ae.forEach(_=>{_.mesh.visible=a.owned.includes(_.index),Cl(_.mesh,a.outfits[_.index]),_.charm.visible=_.mesh.visible&&a.outfits[_.index]==="garden",Ie[_.index].querySelector("strong").textContent=a.nicknames[_.index]||e[_.index].name}),document.querySelectorAll("[data-garden]").forEach(_=>{_.setAttribute("aria-pressed",String(_.dataset.garden===a.garden))}),f==null||f.refresh()}function $e(B){a.owned.includes(B)&&(l=B,a.favorite=B,h=0,s("village-bubble").hidden=!0,fe(),we(),i(B))}function ve(B){a.garden=B;const T={peach:"#e8adae",lemon:"#e9ce73",lilac:"#b6a2d4"};E.forEach(_=>_.color.set(T[B])),fe(),we()}s("village-greet").addEventListener("click",()=>{Kg(a,l)&&(h=3.5,s("village-bubble").textContent=["오늘도 같이 놀자!","와 줘서 기분이 말랑해.","너 주려고 꽃을 골랐어!","바람이 정말 좋다, 그치?","오늘은 내가 1등 할 거야!","경기장까지 같이 가자!"][l%6],s("village-bubble").hidden=!1,s("draw-message").textContent="반가운 인사! 별조각 +20",fe(),we())}),s("village-play").addEventListener("click",()=>t(l)),s("village-arena-link").addEventListener("click",()=>t(l)),document.querySelectorAll("[data-garden]").forEach(B=>B.addEventListener("click",()=>ve(B.dataset.garden)));const Ne=t_({friends:e,reduced:r,onMeet:B=>{$e(B),document.querySelector(".village-stage").scrollIntoView({block:"center"})}});s("village-draw").addEventListener("click",()=>{const B=$g(a);if(!B)return;const T=e[B.id];fe(),we(),s("draw-message").textContent=B.duplicate?T.name+" 중복 · 별조각 +40 · 꾸미기 조각 +1":T.name+" 입주! 마을에서 만나보세요.",Ne.show(B)});function pt(B,T,_=0){const L=B.position.clone();L.y+=_,L.project(g);const z=s("village-scene").getBoundingClientRect();T.style.left=(L.x*.5+.5)*z.width+"px",T.style.top=(-L.y*.5+.5)*z.height+"px"}return f=r_({data:a,storage:o,friends:e,selected:()=>l,refresh:fe,persist:we}),ve(a.garden),{scene:m,camera:g,select:$e,get selected(){return l},owns:B=>a.owned.includes(B),outfit:B=>a.outfits[B],name:B=>a.nicknames[B]||e[B].name,get owned(){return[...a.owned]},recordMatch(B){const T=a.tickets,_=a.daily.day,L=a.daily.claimed,z=jg(a,B);return we(),fe(),{shards:z,tickets:a.tickets-T,daily:a.daily.claimed&&(!L||_!==a.daily.day),victory:B===1&&a.wins%3===0}},setActive(B){u=B,B||S.stop(),B&&fe()},resize(B,T){const _=B/T,L=Math.max(12,8.8*_);g.left=-L,g.right=L,g.top=L/_,g.bottom=-L/_,g.updateProjectionMatrix()},update(B){c+=B,Se.update(B,S.editing,l),Ae.forEach(T=>{const _=a.layout["egg-"+T.index]||T;T.charm.position.set(_.x+.65,.14,_.z+.45)}),Math.floor(c)!==Math.floor(c-B)&&(f.activity(S.editing?"마을 꾸미는 중":Se.status(l)),f.refresh()),S.update(),s("village-arena-link").hidden=S.editing,He.position.set(Ae[l].mesh.position.x,.14,Ae[l].mesh.position.z),pt(ke,s("village-arena-link"),2.3),h>0&&(h=Math.max(0,h-B),pt(Ae[l].mesh,s("village-bubble"),1.8),h===0&&(s("village-bubble").hidden=!0))},snapshot:()=>({selected:l,owned:[...a.owned],shards:a.shards,tickets:a.tickets,daily:{...a.daily},nicknames:[...a.nicknames],fragments:[...a.fragments],outfits:[...a.outfits],editing:S.editing,placements:S.snapshot(),garden:a.garden,hearts:[...a.hearts],matches:a.matches,wins:a.wins,camera:g.position.toArray(),residents:Ae.filter(B=>B.mesh.visible).map(B=>({id:B.index,x:B.mesh.position.x,z:B.mesh.position.z,activity:B.activity,outfit:B.mesh.userData.outfit}))})}}const K=n=>document.getElementById(n),o_=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_a=Ng();let Ze=0,Ge="lobby",Fl="playing",ht=[],Dn=0,es=3,In=ga[0].radius,ms=!1,bt,jt,Mn,va,ii,qr,ri,ft,Bn=null;const En=()=>ht.find(n=>n.index===Ze);let ir=0,Ko="",dr=0;const Un=()=>ga[dr],at=new Set,a_=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","Space","Escape"]),Nn=matchMedia("(prefers-reduced-motion: reduce)").matches,Fc=new Zh,Vn=Yg({state:()=>Ge,pause:()=>Wi(),resume:()=>xa(),lobby:()=>cs()}),Ol=[],c_=ga.map((n,e)=>{const t=document.createElement("button");return t.className="map-option",t.type="button",t.dataset.map=n.id,t.setAttribute("aria-label",n.name+" 선택"),t.innerHTML='<span class="map-icon">'+n.icon+"</span><strong>"+n.name+"</strong><small>"+n.description+"</small>",t.addEventListener("click",()=>{Ge==="lobby"&&(dr=e,Bl(),_r())}),K("maps").append(t),t});Et.forEach((n,e)=>{const t=document.createElement("button");t.className="character",t.type="button",t.setAttribute("aria-label",n.name+" 선택"),t.innerHTML='<span class="mini-egg" style="--egg:'+n.color+'"></span>'+n.name,t.addEventListener("click",()=>{Ge==="lobby"&&(ft!=null&&ft.owns(e))&&(Ze=e,ft.select(e),gr(),_r())}),K("characters").append(t),Ol.push(t)});function gr(){c_.forEach((e,t)=>{e.classList.toggle("selected",dr===t),e.setAttribute("aria-pressed",String(dr===t)),e.disabled=Ge!=="lobby"}),Ol.forEach((e,t)=>{e.hidden=ft?!ft.owns(t):t!==Ze,e.classList.toggle("selected",Ze===t),e.setAttribute("aria-pressed",String(Ze===t)),e.disabled=Ge!=="lobby"}),K("selected-name").textContent=(ft==null?void 0:ft.name(Ze))||Et[Ze].name,K("selected-description").textContent=Et[Ze].rarity+" · 파워 "+Et[Ze].power+" / 이동 "+Et[Ze].speed+" / 버티기 "+Et[Ze].weight,K("selected-dot").style.background=Et[Ze].color;const n=Hn[Ze];K("selected-skill-icon").textContent=n.icon,K("selected-skill-name").textContent=n.name,K("selected-skill-copy").textContent=n.description,K("skill-hud-name").textContent=n.name,K("skill-button").style.setProperty("--skill-color",n.color),K("skill-button").setAttribute("aria-label",n.name+" 사용")}function Bl(){qr&&zg(qr);const n=Un(),e=Bg(n);qr=e.root,va=e.platform,jt.add(qr),jt.background.set(n.background),document.querySelector(".arena").dataset.theme=n.id,document.querySelector(".arena-caption").textContent="0"+(dr+1)+" / "+n.name,K("map-feel").textContent=n.feel,bt.domElement.setAttribute("aria-label","계란 캐릭터 여섯 마리와 "+n.name+" 경기장")}const rn=(n,e={})=>new Fi({color:n,roughness:.78,...e}),zl=new Wt(1,32,24);function Pt(n,e,t,i){const r=new tt(zl,e);return r.position.set(...t),r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function kl(n){const e=Et[n],t=new It,i=new It;t.add(i);const r=rn(e.color),s=rn("#fff9ed"),o=rn("#37453b"),a=rn("#e49b91"),l=new Wt(1,40,32),c=l.attributes.position;for(let d=0;d<c.count;d++){const E=c.getY(d),S=1-.16*E;c.setXYZ(d,c.getX(d)*.53*S,E*.68,c.getZ(d)*.46*S)}l.computeVertexNormals();const h=new tt(l,r);h.position.y=.88,h.castShadow=!0,h.receiveShadow=!0,i.add(h);const u=[Pt(i,r,[-.25,.14,.13],[.17,.13,.25]),Pt(i,r,[.25,.14,.13],[.17,.13,.25])],f=[Pt(i,r,[-.56,.61,.02],[.14,.24,.14]),Pt(i,r,[.56,.61,.02],[.14,.24,.14])];f[0].rotation.z=-.4,f[1].rotation.z=.4,[-1,1].forEach(d=>{Pt(i,o,[d*.17,1,.419],[.047,.065,.025]),Pt(i,s,[d*.17-.011,1.023,.441],[.013,.017,.008]),Pt(i,a,[d*.29,.84,.385],[.073,.036,.017])});const m=new da(new I(-.06,.85,.461),new I(0,.8,.475),new I(.06,.85,.461)),g=new tt(new pa(m,12,.012,6,!1),o);if(i.add(g),e.accent==="sprout"){const d=rn("#78946c"),E=Pt(i,d,[.1,1.57,0],[.19,.055,.09]);E.rotation.z=.55;const S=Pt(i,d,[-.09,1.55,0],[.14,.05,.08]);S.rotation.z=-.4}else if(e.accent==="bow"){const d=rn("#d66e7d");[-1,1].forEach(E=>{const S=Pt(i,d,[E*.12,1.55,0],[.14,.095,.09]);S.rotation.z=E*.3}),Pt(i,d,[0,1.55,.015],[.06,.065,.08])}else if(e.accent==="tuft")Pt(i,r,[.06,1.55,0],[.08,.16,.08]).rotation.z=-.4;else if(e.accent==="ears")[-1,1].forEach(d=>Pt(i,r,[d*.25,1.57,0],[.13,.25,.12]).rotation.z=-d*.2);else if(e.accent==="leaf"){const d=Pt(i,rn("#779b69"),[.06,1.61,0],[.09,.23,.07]);d.rotation.z=-.7}else if(e.accent==="crown"){const d=rn("#e9c56d");for(let E=-1;E<=1;E++){const S=new tt(new ai(.09,.22,5),d);S.position.set(E*.15,1.65,0),i.add(S)}Pt(i,d,[0,1.52,0],[.28,.06,.17])}else if(e.accent==="crystal"||e.accent==="star"||e.accent==="bolt"){const d=new tt(new ds(.17),rn(e.accent==="crystal"?"#e6ffff":"#ffe3a2"));d.position.set(0,1.63,0),e.accent==="bolt"&&d.scale.set(.65,1.5,.6),i.add(d)}else if(e.accent==="moon"){const d=new tt(new Ni(.15,.045,8,20,Math.PI*1.4),rn("#f6e5a8"));d.position.set(0,1.64,0),d.rotation.z=.8,i.add(d)}const v=new tt(new li(.68,.75,48),new hn({color:Hn[n].color,transparent:!0,opacity:.75,side:Dt,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.045,v.visible=!1,t.add(v);const p=new tt(new Wt(.83,24,16),new hn({color:"#f9e6bc",transparent:!0,opacity:.18,depthWrite:!1}));return p.position.y=.8,p.visible=!1,t.add(p),t.userData={body:i,feet:u,arms:f,aura:v,shield:p},t}function l_(){jt=new al,jt.background=new Xe("#dcebe5"),Mn=new fs(-9,9,7,-7,.1,100),Mn.position.set(0,13,17),Mn.lookAt(0,0,0),bt=new Ig({antialias:!0,alpha:!1}),bt.setPixelRatio(Math.min(devicePixelRatio,2)),bt.shadowMap.enabled=!0,bt.shadowMap.type=zc,bt.outputColorSpace=Vt,bt.toneMapping=Hc,bt.toneMappingExposure=1.25,K("scene").appendChild(bt.domElement),bt.domElement.setAttribute("aria-label","파스텔 계란 캐릭터 여섯 마리와 원형 얼음섬"),bt.domElement.setAttribute("role","img"),jt.add(new Sl("#fff8e9","#89a9a3",3));const n=new yl("#fff9e8",3.4);n.position.set(-7,14,8),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-9,n.shadow.camera.right=9,n.shadow.camera.top=9,n.shadow.camera.bottom=-9,n.shadow.normalBias=.04,n.shadow.bias=-3e-4,jt.add(n),Bl(),ii=new It;const e=new tt(new li(.68,.73,48),new hn({color:"#cb9839",side:Dt}));e.rotation.x=-Math.PI/2,ii.add(e);const t=new tt(new ai(.12,.23,3),new hn({color:"#c28c2c"}));t.rotation.x=Math.PI,t.position.y=2.1,ii.add(t),jt.add(ii);const i=new ResizeObserver(Hl);i.observe(K("scene")),i.observe(K("village-scene")),ri=qg(jt,Nn),ms=!0,ft=s_({makeEgg:kl,friends:Et,reduced:Nn,onSelect:r=>{Ze=r,gr()},onPlay:r=>{Ze=r,Bi("arena")}}),Ze=ft.selected,_r(),Bi(location.hash==="#arena"?"arena":"village",!1),requestAnimationFrame($o)}function Bi(n,e=!0){!ms||!ft||Bn===n||(Bn==="arena"&&cs(),Bn=n,ft.setActive(n==="village"),at.clear(),K("village-page").hidden=n!=="village",K("battle-page").hidden=n!=="arena",K(n==="village"?"village-scene":"scene").append(bt.domElement),bt.domElement.setAttribute("aria-label",n==="village"?"내 달걀들이 산책하는 3D 동글 마을":"내 달걀로 출전하는 밀어내기 경기장"),K("nav-village").classList.toggle("active",n==="village"),K("nav-battle").classList.toggle("active",n==="arena"),K("nav-village").setAttribute("aria-current",n==="village"?"page":"false"),K("nav-battle").setAttribute("aria-current",n==="arena"?"page":"false"),n==="arena"&&cs(),Hl(),e&&location.hash!=="#"+n&&(location.hash=n),window.scrollTo(0,0))}function Hl(){if(!bt)return;const{width:n,height:e}=K(Bn==="village"?"village-scene":"scene").getBoundingClientRect();if(n<=0||e<=0)return;if(bt.setSize(n,e,!1),Bn==="village"){ft.resize(n,e);return}const t=n/e,i=Math.max(8.8,7*t),r=i/t;Mn.left=-i,Mn.right=i,Mn.top=r,Mn.bottom=-r,Mn.updateProjectionMatrix()}function _r(){if(!ms)return;ht.forEach(e=>{jt.remove(e.mesh),e.mesh.traverse(t=>{t.geometry&&t.geometry!==zl&&t.geometry.dispose(),t.material&&t.material.dispose()})}),In=Un().radius,va.scale.set(1,1,1),ri.reset(),Ko="",ir=0,K("skill-callout").hidden=!0,K("spectator").hidden=!0;const n=Et.map((e,t)=>t).filter(e=>e!==Ze);for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}ht=[Ze,...n.slice(0,5)].map((e,t)=>{const i=Et[e],r=t*Math.PI/3+Math.PI/2,s=Math.cos(r)*In*.6,o=Math.sin(r)*In*.6,a=kl(e);return e===Ze&&Cl(a,(ft==null?void 0:ft.outfit(e))||"none"),jt.add(a),a.position.set(s,.1,o),{index:e,mesh:a,x:s,z:o,vx:0,vz:0,power:i.power/100,moveSpeed:i.speed/100,weight:i.weight/100,alive:!0,rank:null,eliminatedAt:null,fall:0,cooldown:0,dashTime:0,impact:0,stagger:0,shield:0,haste:0,whirl:0,slow:0,echo:0,skillTime:0,dx:0,dz:-1,aiTime:0,target:null}}),ii.visible=!0,Vl(),gr()}function Vl(){const n=En();n&&(ii.visible=n.alive,ii.position.set(n.x,.12,n.z))}function Gl(){!ms||!ft.owns(Ze)||Bn!=="arena"||(_r(),Dn=0,es=3,Ge="countdown",at.clear(),K("overlay").hidden=!0,K("countdown").hidden=!1,K("countdown").textContent="3",K("skill-button").hidden=!1,K("result-ranks").hidden=!0,document.querySelector(".pick-card").hidden=!0,K("phase").textContent="준비, 동글!",K("start").disabled=!0,K("start").textContent="경기 중이에요",K("pause").disabled=!1,document.querySelector(".play-card").hidden=!0,K("live-card").hidden=!1,K("arena-hint").textContent="금색 표시가 내 동글이예요",gr(),Ma(),Vn.begin())}function cs(){Vn.end(),Ge="lobby",at.clear(),K("overlay").hidden=!0,K("countdown").hidden=!0,K("phase").textContent="연습 준비",K("arena-hint").textContent="마음에 드는 동글이를 골라주세요",K("start").disabled=!1,K("start").innerHTML="한 판 시작하기 <span>↗</span>",K("pause").disabled=!0,document.querySelector(".play-card").hidden=!1,K("live-card").hidden=!0,_r(),K("skill-button").hidden=!0,K("result-ranks").hidden=!0,document.querySelector(".pick-card").hidden=!1}function Wi(){(Ge==="playing"||Ge==="countdown")&&(Vn.reset(),K("result-ranks").hidden=!0),Ge==="playing"||Ge==="countdown"?(Fl=Ge,Ge="paused",at.clear(),K("countdown").hidden=!0,K("overlay").hidden=!1,K("result-tag").textContent="TIME TO REST",K("result-title").textContent="잠깐 쉬어가요",K("result-copy").textContent="동글이들도 잠시 숨을 고르는 중이에요.",K("resume").innerHTML="계속하기 <span>→</span>",K("phase").textContent="쉬는 중"):Ge==="paused"&&xa()}function xa(){Ge==="paused"?(Ge=Fl,K("overlay").hidden=!0,K("countdown").hidden=Ge!=="countdown",K("phase").textContent=Ge==="playing"?"동글 소동 진행 중":"준비, 동글!"):Ge==="ended"&&Gl()}function u_(n,e){if(Ge==="ended")return;Vn.reset(),Pl(ht),Wl(),K("result-ranks").hidden=!1,K("skill-button").disabled=!0,K("skill-callout").hidden=!0,K("spectator").hidden=!0;const t=ft.recordMatch(En().rank);e+=" 별조각 +"+t.shards+"!"+(t.victory?" 누적 3승 보상! 뽑기권 +1장!":"")+(t.daily?" 오늘 3판 완료! 뽑기권 +1장!":""),En().rank===1&&_a.win(),Ge="ended",at.clear(),K("overlay").hidden=!1,K("result-tag").textContent="A LITTLE HAPPY ENDING",K("result-title").textContent=n,K("result-copy").textContent=e,K("resume").innerHTML="한 판 더! <span>↗</span>",K("phase").textContent="경기 종료",K("pause").disabled=!0}function gs(n){if(n.index===Ze){const t=Number(at.has("ArrowRight")||at.has("KeyD"))-Number(at.has("ArrowLeft")||at.has("KeyA")),i=Number(at.has("ArrowDown")||at.has("KeyS"))-Number(at.has("ArrowUp")||at.has("KeyW")),r=Vn.vector.x||t,s=Vn.vector.z||i,o=Math.hypot(r,s);o&&(n.dx=r/o,n.dz=s/o)}if(Ge!=="playing"||!Vg(n,ht))return;const e=Hn[n.index];n.index===Ze&&_a.skill(e.kind),ri.burst(n.x,n.z,e.color,[1.3,1.8,2.8,1.1,2.5,2][e.kind],n.dx,n.dz,e.kind===5),n.index===Ze&&(ir=.85,K("skill-callout").textContent=e.icon+" "+e.name,K("skill-callout").style.color=e.color,K("skill-callout").hidden=!1),Ma()}function Oc(n){var e;ri.burst(n.x,n.z,n.color||(n.dash?"#efbd56":"#cfa04e"),n.dash?1.4:Math.min(1.15,.55+(n.strength||1)*.06),n.dx||0,n.dz||0,!0),(e=n.indices)!=null&&e.includes(Ze)&&_a.hit(n.strength)}function Wl(){const n=ht.map(t=>t.rank??"-").join(",");if(n===Ko)return;Ko=n;const e=Xg(ht).map(t=>{const i=t.rank!==null&&ht.filter(r=>r.rank===t.rank).length>1;return'<li class="'+(t.index===Ze?"my-rank":"")+'"><b>'+(t.rank===null?"생존":(i?"공동 ":"")+t.rank+"위")+'</b><i style="background:'+Et[t.index].color+'"></i><span>'+o_(t.index===Ze?ft.name(t.index):Et[t.index].name)+(t.index===Ze?" <small>나</small>":"")+"</span><small>"+(t.rank===null?"경기 중":t.alive?"끝까지 생존":t.eliminatedAt.toFixed(1)+"초")+"</small></li>"}).join("");K("live-ranks").innerHTML=e,K("result-ranks").innerHTML=e}function Ma(){var s;const n=ht.filter(o=>o.alive).length;K("remaining").innerHTML=n+"<small> / 6</small>";const e=Math.max(0,Math.ceil(90-Dn));K("timer").textContent=String(Math.floor(e/60)).padStart(2,"0")+":"+String(e%60).padStart(2,"0");const t=((s=En())==null?void 0:s.cooldown)||0;K("dash-status").textContent=t>0?t.toFixed(1)+"초":"준비!",K("cooldown-fill").style.width=(1-t/3)*100+"%";const i=En(),r=Ge==="playing"&&(i==null?void 0:i.alive);K("skill-button").disabled=!r||t>0,K("skill-button").classList.toggle("ready",r&&t===0),K("skill-seconds").textContent=i!=null&&i.alive?Ge==="countdown"?"대기":t>0?t.toFixed(1):"준비!":"탈락",K("skill-wheel").style.setProperty("--progress",(1-t/3)*360+"deg"),K("mobile-score").textContent=K("timer").textContent+" · "+n+"명 생존"+(i!=null&&i.alive?"":" · 내 순위 "+i.rank+"위"),Wl(),K("match-tip").textContent=Dn>60?"발판이 작아지고 있어요. 가운데로 모여요!":Un().feel}function h_(n){var i,r;ri.update(n),ir=Math.max(0,ir-n),ir===0&&(K("skill-callout").hidden=!0),Dn+=n,In=Un().radius-Math.max(0,Dn-60)*.11,va.scale.set(In/Un().radius,1,In/Un().radius);for(const s of ht){if(!s.alive){s.fall+=n,s.mesh.position.y=.1-4*s.fall*s.fall,s.mesh.rotation.z=s.fall*1.6,s.mesh.visible=s.fall<1.2;continue}Gg(s,ht,n);let o=0,a=0;if(s.index===Ze)o=Vn.vector.x||Number(at.has("ArrowRight")||at.has("KeyD"))-Number(at.has("ArrowLeft")||at.has("KeyA")),a=Vn.vector.z||Number(at.has("ArrowDown")||at.has("KeyS"))-Number(at.has("ArrowUp")||at.has("KeyW"));else{if(s.aiTime-=n,s.aiTime<=0||!((i=s.target)!=null&&i.alive)){const f=ht.filter(m=>m.alive&&m!==s);s.target=f.sort((m,g)=>Math.hypot(s.x-m.x,s.z-m.z)-Math.hypot(s.x-g.x,s.z-g.z))[Math.random()<.2?Math.min(1,f.length-1):0],s.aiTime=.4+Math.random()*.7}const h=s.target;Math.hypot(s.x,s.z)>In-1.2?(o=-s.x*.9-s.vx*.9,a=-s.z*.9-s.vz*.9):h&&(o=h.x-s.x-s.vx*.22,a=h.z-s.z-s.vz*.22)}const l=Math.hypot(o,a);if(l>0){s.dx=o/l,s.dz=a/l;const h=s.index===Ze?Math.max(1,l):l;o/=h,a/=h}s.index!==Ze&&((r=s.target)!=null&&r.alive)&&Math.hypot(s.target.x-s.x,s.target.z-s.z)<(Hn[s.index].kind===5?3.4:2.6)&&s.cooldown===0&&Math.random()<n*1.2&&gs(s);const c=s.index===Ze?8:6.1;Fg(s,o,a,c,n,Un().drag)}for(let s=0;s<ht.length;s++)for(let o=s+1;o<ht.length;o++){const a=Og(ht[s],ht[o],Un().bounce);a&&Oc(a)}const e=ht.filter(s=>s.alive&&Math.hypot(s.x,s.z)>In+.08);Wg(ht,e,Dn);for(const s of e)ri.burst(s.x,s.z,Et[s.index].color,1.25),s.mesh.userData.aura.visible=!1,s.mesh.userData.shield.visible=!1,s.index===Ze&&(K("spectator").hidden=!1,K("spectator").textContent="내 순위 "+s.rank+"위 · 남은 친구들을 관전 중",K("arena-hint").textContent="ESC로 쉬거나 다른 맵을 고를 수 있어요");for(const s of ht){if(!s.alive)continue;s.skillHit&&(Oc(s.skillHit),s.skillHit=null),s.trail=(s.trail||0)-n,!Nn&&(s.dashTime>0||s.haste>0)&&s.trail<=0&&(ri.burst(s.x-s.dx*.35,s.z-s.dz*.35,Hn[s.index].color,.3,-s.dx,-s.dz,!0),s.trail=.12),s.mesh.position.set(s.x,.1,s.z);const o=s.mesh.userData.body;s.mesh.userData.aura.visible=s.skillTime>0,s.mesh.userData.aura.scale.setScalar(s.whirl>0?3.2:1),s.mesh.userData.shield.visible=s.shield>0;const a=Nn?0:Math.sin(s.impact/.24*Math.PI)*(.18+(s.hitStrength||0)*.15);o.scale.set(1+a*.6,1-a,1+a*.6),o.position.y=0,o.rotation.z=Nn?0:-s.vx*.035,o.rotation.x=Nn?0:s.vz*.025;const l=Nn?0:Math.sin(Dn*13+s.index)*Math.min(.11,Math.hypot(s.vx,s.vz)*.025);s.mesh.userData.feet[0].position.y=.14+l,s.mesh.userData.feet[1].position.y=.14-l}Vl(),Ma();const t=ht.filter(s=>s.alive);if(t.length<=1||Dn>=90){Pl(ht);const s=En().rank,o=ht.filter(a=>a.rank===s).length>1;u_((o?"공동 ":"")+s+"위! "+(s===1?"왕동글 탄생!":"잘 버텼어요!"),t.length>1?"시간 종료! 살아남은 친구들은 공동 1위예요.":t.length===1?Et[t[0].index].name+"의 승리! 다음 판에도 도전해요.":"마지막 동글이들이 함께 떨어졌어요. 같은 순간 탈락은 공동 순위예요.")}}let Yr=0;function $o(){const n=Math.min(Fc.getDelta(),.05);if(Bn==="village"){ft.update(n),bt.render(ft.scene,ft.camera),requestAnimationFrame($o);return}if(Ge==="countdown"&&(es-=n,K("countdown").textContent=Math.max(1,Math.ceil(es)),es<=0&&(Ge="playing",K("countdown").hidden=!0,K("phase").textContent="동글 소동 진행 중")),Ge==="playing")for(Yr+=n;Yr>=1/120&&Ge==="playing";)h_(1/120),Yr-=1/120;else Yr=0;if(Ge==="lobby"&&!Nn)for(const e of ht)e.mesh.userData.body.position.y=Math.sin(Fc.elapsedTime*1.6+e.index)*.035;bt.render(jt,Mn),requestAnimationFrame($o)}window.addEventListener("keydown",n=>{if(!(Bn!=="arena"||!a_.has(n.code)||K("help-dialog").open)&&!(n.target instanceof HTMLElement&&n.target.closest("button")&&(n.code==="Space"||n.code==="Escape")&&n.code==="Space")){if(n.preventDefault(),n.code==="Escape"&&!n.repeat){Wi();return}at.add(n.code),n.code==="Space"&&!n.repeat&&Ge==="playing"&&gs(En())}});window.addEventListener("keyup",n=>at.delete(n.code));window.addEventListener("blur",()=>{at.clear(),(Ge==="playing"||Ge==="countdown")&&Wi()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Ge==="playing"||Ge==="countdown")&&Wi()});K("start").addEventListener("click",()=>{Gl(),K("start").blur()});K("pause").addEventListener("click",()=>{Wi(),K("pause").blur()});K("resume").addEventListener("click",()=>{xa(),K("resume").blur()});K("back").addEventListener("click",cs);K("skill-button").addEventListener("click",()=>{gs(En()),K("skill-button").blur()});K("skill-button").addEventListener("pointerdown",n=>{n.pointerType==="touch"&&Ge==="playing"&&(n.preventDefault(),gs(En()))});K("nav-village").addEventListener("click",()=>Bi("village"));K("nav-battle").addEventListener("click",()=>Bi("arena"));K("result-home").addEventListener("click",()=>Bi("village"));window.addEventListener("hashchange",()=>Bi(location.hash==="#arena"?"arena":"village",!1));K("help").addEventListener("click",()=>{(Ge==="playing"||Ge==="countdown")&&Wi(),K("help-dialog").showModal()});K("close-help").addEventListener("click",()=>K("help-dialog").close());K("got-it").addEventListener("click",()=>K("help-dialog").close());gr();try{l_()}catch(n){console.error(n),K("load-error").hidden=!1,K("village-error").hidden=!1,K("start").disabled=!0}
