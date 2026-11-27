var Md=0,Ic=1,Sd=2;var Pc=1,Td=2,ai=3,Zi=0,Vt=1,Bt=2,Qi=0,Es=1,Er=2,Lc=3,Dc=4,Ed=5,xa=100,wd=101,Ad=102,Rd=103,Cd=104,Id=200,Pd=201,Ld=202,Dd=203,Ud=204,Nd=205,Fd=206,Od=207,Bd=208,kd=209,zd=210,Hd=211,Gd=212,Vd=213,Wd=214,Qo=0,$o=1,el=2,ws=3,tl=4,nl=5,il=6,rl=7,jd=0,Xd=1,qd=2,Ci=0,Yd=1,Kd=2,Jd=3,Zd=4,Qd=5,al=6,$d=7,vc="attached",ep="detached",Uc=300,ya=301,wr=302,sl=303,ol=304,As=306,Qn=1e3,$n=1001,ta=1002,xn=1003,ll=1004;var Ar=1005;var cn=1006,Ma=1007;var si=1008;var oi=1009,Nc=1010,Fc=1011,Sa=1012,cl=1013,Rr=1014,Ln=1015,Ii=1016,hl=1017,ul=1018,Ta=1020,Oc=35902,Bc=35899,tp=1021,np=1022,Dn=1023,Rs=1026,Cs=1027,dl=1028,pl=1029,ip=1030,kc=1031;var zc=1033,fl=33776,ml=33777,gl=33778,bl=33779,Hc=35840,Gc=35841,Vc=35842,Wc=35843,jc=36196,Xc=37492,qc=37496,Yc=37808,Kc=37809,Jc=37810,Zc=37811,Qc=37812,$c=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,ah=37819,sh=37820,oh=37821,lh=36492,ch=36494,hh=36495,uh=36283,dh=36284,ph=36285,fh=36286;var dr=2300,pr=2301,fo=2302,hr=2400,ur=2401,Ka=2402,rp=2500,ap=2501,mh=0,Is=1,Ea=2;var sp=3201;var op=0,lp=1,Cr="",ft="srgb",jt="srgb-linear",Ja="linear",mt="srgb";var cr=7680;var cp=512,hp=513,up=514,gh=515,dp=516,pp=517,fp=518,mp=519,mo=35044;var bh="300 es",Ti=2e3,Za=2001;var ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,$r=Math.PI/180,fr=180/Math.PI;function An(){let a=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Qt[255&a]+Qt[a>>8&255]+Qt[a>>16&255]+Qt[a>>24&255]+"-"+Qt[255&e]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[63&t|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[255&n]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Ze(a,e,t){return Math.max(e,Math.min(t,a))}function _c(a,e){return(a%e+e)%e}function Xa(a,e,t){return(1-t)*a+t*e}function Gn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function pt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}var Ct={DEG2RAD:$r,RAD2DEG:fr,generateUUID:An,clamp:Ze,euclideanModulo:_c,mapLinear:function(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)},inverseLerp:function(a,e,t){return a!==e?(t-a)/(e-a):0},lerp:Xa,damp:function(a,e,t,n){return Xa(a,e,1-Math.exp(-t*n))},pingpong:function(a,e=1){return e-Math.abs(_c(a,2*e)-e)},smoothstep:function(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e))*a*(3-2*a)},smootherstep:function(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e))*a*a*(a*(6*a-15)+10)},randInt:function(a,e){return a+Math.floor(Math.random()*(e-a+1))},randFloat:function(a,e){return a+Math.random()*(e-a)},randFloatSpread:function(a){return a*(.5-Math.random())},seededRandom:function(a){a!==void 0&&(Lu=a);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(a){return a*$r},radToDeg:function(a){return a*fr},isPowerOfTwo:function(a){return!(a&a-1)&&a!==0},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))},setQuaternionFromProperEuler:function(a,e,t,n,i){let r=Math.cos,s=Math.sin,o=r(t/2),c=s(t/2),l=r((e+n)/2),h=s((e+n)/2),u=r((e-n)/2),d=s((e-n)/2),p=r((n-e)/2),m=s((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*d,o*l);break;case"YZY":a.set(c*d,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*d,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*p,o*l);break;case"YXY":a.set(c*p,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:pt,denormalize:Gn},ce=class a{constructor(e=0,t=0){a.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[s+0],p=r[s+1],m=r[s+2],_=r[s+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==m){let g=1-o,b=c*d+l*p+h*m+u*_,v=b>=0?1:-1,f=1-b*b;if(f>Number.EPSILON){let E=Math.sqrt(f),T=Math.atan2(E,b*v);g=Math.sin(g*T)/E,o=Math.sin(o*T)/E}let x=o*v;if(c=c*g+d*x,l=l*g+p*x,h=h*g+m*x,u=u*g+_*x,g===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-o*p,e[t+2]=l*m+h*p+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),m=c(r/2);switch(s){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(s-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(s-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+i*l-r*c,this._y=i*h+s*c+r*o-n*l,this._z=r*h+s*l+n*c-i*o,this._w=s*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,s=this._w,o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class a{constructor(e=0,t=0,n=0){a.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*i-o*n),h=2*(o*t-r*i),u=2*(r*n-s*t);return this.x=t+c*l+s*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*s-n*c,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new S,Du=new Mt,Xe=class a{constructor(e,t,n,i,r,s,o,c,l){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,l)}set(e,t,n,i,r,s,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],_=i[0],g=i[3],b=i[6],v=i[1],f=i[4],x=i[7],E=i[2],T=i[5],P=i[8];return r[0]=s*_+o*v+c*E,r[3]=s*g+o*f+c*T,r[6]=s*b+o*x+c*P,r[1]=l*_+h*v+u*E,r[4]=l*g+h*f+u*T,r[7]=l*b+h*x+u*P,r[2]=d*_+p*v+m*E,r[5]=d*g+p*f+m*T,r[8]=d*b+p*x+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*r*h+n*o*c+i*r*l-i*s*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*r,p=l*r-s*c,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*s)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-i*l,i*c,-i*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new Xe;function vh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function na(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function gp(){let a=na("canvas");return a.style.display="block",a}var Uu={};function ia(a){a in Uu||(Uu[a]=!0,console.warn(a))}function bp(a,e,t){return new Promise(function(n,i){setTimeout(function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}},t)})}var Nu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){let a={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,s){return this.enabled!==!1&&r!==s&&r&&s&&(this.spaces[r].transfer===mt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===mt&&(i.r=ea(i.r),i.g=ea(i.g),i.b=ea(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ia("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ia("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[jt]:{primaries:e,whitePoint:n,transfer:Ja,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),a}var at=Lf();function Si(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function ea(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}var zr,go=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=na("canvas")),zr.width=e.width,zr.height=e.height;let i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*Si(r[s]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Si(t[n]/255)):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Df=0,ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Gl(i[s].image)):r.push(Gl(i[s]))}else r=Gl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?go.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,Vl=new S,Ot=class a extends ei{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,o=1023,c=1009,l=a.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=An(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=Uc,Ot.DEFAULT_ANISOTROPY=1;var ht=class a{constructor(e=0,t=0,n=0,i=1){a.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],b=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let f=(l+1)/2,x=(p+1)/2,E=(b+1)/2,T=(h+d)/4,P=(u+_)/4,R=(m+g)/4;return f>x&&f>E?f<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(f),i=T/n,r=P/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=P/r,i=R/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Ot(i);this.textures=[];let s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qa=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Et=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,kn):kn.fromBufferAttribute(r,s),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Bs.subVectors(this.max,Oa),Hr.subVectors(e.a,Oa),Gr.subVectors(e.b,Oa),Vr.subVectors(e.c,Oa),zi.subVectors(Gr,Hr),Hi.subVectors(Vr,Gr),ar.subVectors(Hr,Vr);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ar.z,ar.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ar.z,0,-ar.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ar.y,ar.x,0];return!!Wl(t,Hr,Gr,Vr,Bs)&&(t=[1,0,0,0,1,0,0,0,1],!!Wl(t,Hr,Gr,Vr,Bs)&&(ks.crossVectors(zi,Hi),t=[ks.x,ks.y,ks.z],Wl(t,Hr,Gr,Vr,Bs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(kn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new S,new S,new S,new S,new S,new S,new S,new S],kn=new S,Os=new Et,Hr=new S,Gr=new S,Vr=new S,zi=new S,Hi=new S,ar=new S,Oa=new S,Bs=new S,ks=new S,sr=new S;function Wl(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){sr.fromArray(a,r);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Nf=new Et,Ba=new S,jl=new S,an=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let t=Ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ba,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(jl)),this.expandByPoint(Ba.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mi=new S,Xl=new S,zs=new S,Gi=new S,ql=new S,Hs=new S,Yl=new S,Xi=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Xl);let r=.5*e.distanceTo(t),s=-this.direction.dot(zs),o=Gi.dot(this.direction),c=-Gi.dot(zs),l=Gi.lengthSq(),h=Math.abs(1-s*s),u,d,p,m;if(h>0)if(u=s*c-o,d=s*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-s*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(s*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xl).addScaledVector(zs,d),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){ql.subVectors(t,e),Hs.subVectors(n,e),Yl.crossVectors(ql,Hs);let s,o=this.direction.dot(Yl);if(o>0){if(i)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}Gi.subVectors(this.origin,e);let c=s*this.direction.dot(Hs.crossVectors(Gi,Hs));if(c<0)return null;let l=s*this.direction.dot(ql.cross(Gi));if(l<0||c+l>o)return null;let h=-s*Gi.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class a{constructor(e,t,n,i,r,s,o,c,l,h,u,d,p,m,_,g){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,l,h,u,d,p,m,_,g)}set(e,t,n,i,r,s,o,c,l,h,u,d,p,m,_,g){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=s,b[9]=o,b[13]=c,b[2]=l,b[6]=h,b[10]=u,b[14]=d,b[3]=p,b[7]=m,b[11]=_,b[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),s=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=s*h,p=s*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+p*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d+_*o,t[4]=m*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=s*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d-_*o,t[4]=-s*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let d=s*h,p=s*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,p=s*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=s*c,p=s*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=s*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Of)}lookAt(e,t,n){let i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Vi.crossVectors(n,bn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Vi.crossVectors(n,bn)),Vi.normalize(),Gs.crossVectors(bn,Vi),i[0]=Vi.x,i[4]=Gs.x,i[8]=bn.x,i[1]=Vi.y,i[5]=Gs.y,i[9]=bn.y,i[2]=Vi.z,i[6]=Gs.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],_=n[6],g=n[10],b=n[14],v=n[3],f=n[7],x=n[11],E=n[15],T=i[0],P=i[4],R=i[8],I=i[12],N=i[1],U=i[5],O=i[9],J=i[13],G=i[2],K=i[6],Z=i[10],ae=i[14],ie=i[3],le=i[7],Le=i[11],we=i[15];return r[0]=s*T+o*N+c*G+l*ie,r[4]=s*P+o*U+c*K+l*le,r[8]=s*R+o*O+c*Z+l*Le,r[12]=s*I+o*J+c*ae+l*we,r[1]=h*T+u*N+d*G+p*ie,r[5]=h*P+u*U+d*K+p*le,r[9]=h*R+u*O+d*Z+p*Le,r[13]=h*I+u*J+d*ae+p*we,r[2]=m*T+_*N+g*G+b*ie,r[6]=m*P+_*U+g*K+b*le,r[10]=m*R+_*O+g*Z+b*Le,r[14]=m*I+_*J+g*ae+b*we,r[3]=v*T+f*N+x*G+E*ie,r[7]=v*P+f*U+x*K+E*le,r[11]=v*R+f*O+x*Z+E*Le,r[15]=v*I+f*J+x*ae+E*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+r*s*d-i*s*p+i*l*h-r*c*h)+e[11]*(+t*l*u-t*o*p-r*s*u+n*s*p+r*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*s*u-n*s*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],b=e[15],v=u*g*l-_*d*l+_*c*p-o*g*p-u*c*b+o*d*b,f=m*d*l-h*g*l-m*c*p+s*g*p+h*c*b-s*d*b,x=h*_*l-m*u*l+m*o*p-s*_*p-h*o*b+s*u*b,E=m*u*c-h*_*c-m*o*d+s*_*d+h*o*g-s*u*g,T=t*v+n*f+i*x+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=v*P,e[1]=(_*d*r-u*g*r-_*i*p+n*g*p+u*i*b-n*d*b)*P,e[2]=(o*g*r-_*c*r+_*i*l-n*g*l-o*i*b+n*c*b)*P,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*P,e[4]=f*P,e[5]=(h*g*r-m*d*r+m*i*p-t*g*p-h*i*b+t*d*b)*P,e[6]=(m*c*r-s*g*r-m*i*l+t*g*l+s*i*b-t*c*b)*P,e[7]=(s*d*r-h*c*r+h*i*l-t*d*l-s*i*p+t*c*p)*P,e[8]=x*P,e[9]=(m*u*r-h*_*r-m*n*p+t*_*p+h*n*b-t*u*b)*P,e[10]=(s*_*r-m*o*r+m*n*l-t*_*l-s*n*b+t*o*b)*P,e[11]=(h*o*r-s*u*r-h*n*l+t*u*l+s*n*p-t*o*p)*P,e[12]=E*P,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*P,e[14]=(m*o*i-s*_*i-m*n*c+t*_*c+s*n*g-t*o*g)*P,e[15]=(s*u*i-h*o*i+h*n*c-t*u*c-s*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,h=r*o;return this.set(l*s+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*s,0,l*c-i*o,h*c+i*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,h=s+s,u=o+o,d=r*l,p=r*h,m=r*u,_=s*h,g=s*u,b=o*u,v=c*l,f=c*h,x=c*u,E=n.x,T=n.y,P=n.z;return i[0]=(1-(_+b))*E,i[1]=(p+x)*E,i[2]=(m-f)*E,i[3]=0,i[4]=(p-x)*T,i[5]=(1-(d+b))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+f)*P,i[9]=(g-v)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Wr.set(i[0],i[1],i[2]).length(),s=Wr.set(i[4],i[5],i[6]).length(),o=Wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);let c=1/r,l=1/s,h=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=l,zn.elements[5]*=l,zn.elements[6]*=l,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=2e3,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m,_;if(c)m=r/(s-r),_=s*r/(s-r);else if(o===Ti)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else{if(o!==Za)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-s/(s-r),_=-s*r/(s-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),m,_;if(c)m=1/(s-r),_=s/(s-r);else if(o===Ti)m=-2/(s-r),_=-(s+r)/(s-r);else{if(o!==Za)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(s-r),_=-r/(s-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wr=new S,zn=new Be,Ff=new S(0,0,0),Of=new S(1,1,1),Vi=new S,Gs=new S,bn=new S,Ou=new Be,Bu=new Mt,Vn=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Bf=0,ku=new S,jr=new Mt,gi=new Be,Vs=new S,ka=new S,kf=new S,zf=new Mt,zu=new S(1,0,0),Hu=new S(0,1,0),Gu=new S(0,0,1),Vu={type:"added"},Hf={type:"removed"},Xr={type:"childadded",child:null},Kl={type:"childremoved",child:null},St=class a extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new S,t=new Vn,n=new Mt,i=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Xe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ka,Vs,this.up):gi.lookAt(Vs,ka,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(gi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};St.DEFAULT_UP=new S(0,1,0),St.DEFAULT_MATRIX_AUTO_UPDATE=!0,St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new S,bi=new S,Jl=new S,vi=new S,qr=new S,Yr=new S,Wu=new S,Zl=new S,Ql=new S,$l=new S,ec=new ht,tc=new ht,nc=new ht,xi=class a{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hn.subVectors(i,t),bi.subVectors(n,t),Jl.subVectors(e,t);let s=Hn.dot(Hn),o=Hn.dot(bi),c=Hn.dot(Jl),l=bi.dot(bi),h=bi.dot(Jl),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(s*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)!==null&&vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,s,o,c){return this.getBarycoord(e,t,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(s,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,s){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(ec,r.x),s.addScaledVector(tc,r.y),s.addScaledVector(nc,r.z),s}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),bi.subVectors(e,t),Hn.cross(bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),.5*Hn.cross(bi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;qr.subVectors(i,n),Yr.subVectors(r,n),Zl.subVectors(e,n);let c=qr.dot(Zl),l=Yr.dot(Zl);if(c<=0&&l<=0)return t.copy(n);Ql.subVectors(e,i);let h=qr.dot(Ql),u=Yr.dot(Ql);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(qr,s);$l.subVectors(e,r);let p=qr.dot($l),m=Yr.dot($l);if(m>=0&&p<=m)return t.copy(r);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Yr,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Wu.subVectors(r,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Wu,o);let b=1/(g+_+d);return s=_*b,o=d*b,t.copy(n).addScaledVector(qr,s).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ic(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+6*(e-a)*t:t<.5?e:t<2/3?a+6*(e-a)*(2/3-t):a}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=_c(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ic(s,r,e+1/3),this.g=ic(s,r,e),this.b=ic(s,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return at.workingToColorSpace($t.copy(this),e),65536*Math.round(Ze(255*$t.r,0,255))+256*Math.round(Ze(255*$t.g,0,255))+Math.round(Ze(255*$t.b,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace($t.copy(this),t);let n=$t.r,i=$t.g,r=$t.b,s=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+s)/2;if(o===s)c=0,l=0;else{let u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=ft){at.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,i=$t.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ws);let n=Xa(Wi.h,Ws.h,t),i=Xa(Wi.s,Ws.s,t),r=Xa(Wi.l,Ws.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Ee;Ee.NAMES=vp;var Gf=0,sn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(r){let s=[];for(let o in r){let c=r[o];delete c.metadata,s.push(c)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lt=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},J0=Vf();function Vf(){let a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:o}}var Ut=new S,js=new ce,Wf=0,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}};var $a=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var es=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jf=0,wn=new Be,rc=new St,Kr=new S,vn=new Et,za=new Et,Ht=new S,ut=class a extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?es:$a)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];za.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(vn.min,za.min),vn.expandByPoint(Ht),Ht.addVectors(vn.max,za.max),vn.expandByPoint(Ht)):(vn.expandByPoint(za.min),vn.expandByPoint(za.max))}vn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(Kr.fromBufferAttribute(e,l),Ht.add(Kr)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new S,c[R]=new S;let l=new S,h=new S,u=new S,d=new ce,p=new ce,m=new ce,_=new S,g=new S;function b(R,I,N){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,N),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),o[R].add(_),o[I].add(_),o[N].add(_),c[R].add(g),c[I].add(g),c[N].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,I=v.length;R<I;++R){let N=v[R],U=N.start;for(let O=U,J=U+N.count;O<J;O+=3)b(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let f=new S,x=new S,E=new S,T=new S;function P(R){E.fromBufferAttribute(i,R),T.copy(E);let I=o[R];f.copy(I),f.sub(E.multiplyScalar(E.dot(I))).normalize(),x.crossVectors(T,I);let N=x.dot(c[R])<0?-1:1;s.setXYZW(R,f.x,f.y,f.z,N)}for(let R=0,I=v.length;R<I;++R){let N=v[R],U=N.start;for(let O=U,J=U+N.count;O<J;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,s=new S,o=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let _=0,g=c.length;_<g;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let b=0;b<h;b++)d[m++]=l[p++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,h=s.length;l<h;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ju=new Be,or=new Xi,Xs=new an,Xu=new S,qs=new S,Ys=new S,Ks=new S,ac=new S,Js=new S,qu=new S,Zs=new S,$e=class extends St{constructor(e=new ut,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ac.fromBufferAttribute(u,e),s?Js.addScaledVector(ac,h):Js.addScaledVector(ac.sub(t),h))}t.add(Js)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),or.copy(e.ray).recast(e.near),Xs.containsPoint(or.origin)===!1&&(or.intersectSphere(Xs,Xu)===null||or.origin.distanceToSquared(Xu)>(e.far-e.near)**2))return;ju.copy(r).invert(),or.copy(e.ray).applyMatrix4(ju),n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,or)}}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){let g=d[m],b=s[g.materialIndex];for(let v=Math.max(g.start,p.start),f=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));v<f;v+=3)i=Qs(this,b,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);m<_;m+=3)i=Qs(this,s,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(c!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){let g=d[m],b=s[g.materialIndex];for(let v=Math.max(g.start,p.start),f=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));v<f;v+=3)i=Qs(this,b,e,n,l,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);m<_;m+=3)i=Qs(this,s,e,n,l,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function Qs(a,e,t,n,i,r,s,o,c,l){a.getVertexPosition(o,qs),a.getVertexPosition(c,Ys),a.getVertexPosition(l,Ks);let h=(function(u,d,p,m,_,g,b,v){let f;if(f=d.side===1?m.intersectTriangle(b,g,_,!0,v):m.intersectTriangle(_,g,b,d.side===0,v),f===null)return null;Zs.copy(v),Zs.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Zs);return x<p.near||x>p.far?null:{distance:x,point:Zs.clone(),object:u}})(a,e,t,n,qs,Ys,Ks,qu);if(h){let u=new S;xi.getBarycoord(qu,qs,Ys,Ks,u),i&&(h.uv=xi.getInterpolatedAttribute(i,o,c,l,u,new ce)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,c,l,u,new ce)),s&&(h.normal=xi.getInterpolatedAttribute(s,o,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new S,materialIndex:0};xi.getNormal(qs,Ys,Ks,d.normal),h.face=d,h.barycoord=u}return h}var Rn=class a extends ut{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=0,p=0;function m(_,g,b,v,f,x,E,T,P,R,I){let N=x/P,U=E/R,O=x/2,J=E/2,G=T/2,K=P+1,Z=R+1,ae=0,ie=0,le=new S;for(let Le=0;Le<Z;Le++){let we=Le*U-J;for(let Pe=0;Pe<K;Pe++){let se=Pe*N-O;le[_]=se*v,le[g]=we*f,le[b]=G,l.push(le.x,le.y,le.z),le[_]=0,le[g]=0,le[b]=T>0?1:-1,h.push(le.x,le.y,le.z),u.push(Pe/P),u.push(1-Le/R),ae+=1}}for(let Le=0;Le<R;Le++)for(let we=0;we<P;we++){let Pe=d+we+K*Le,se=d+we+K*(Le+1),be=d+(we+1)+K*(Le+1),ge=d+(we+1)+K*Le;c.push(Pe,se,ge),c.push(se,be,ge),ie+=6}o.addGroup(p,ie,I),p+=ie,d+=ae}m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,i,s,2),m("x","z","y",1,-1,e,n,-t,i,s,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(a){let e={};for(let t=0;t<a.length;t++){let n=Ir(a[t]);for(let i in n)e[i]=n[i]}return e}function _h(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var _p={clone:Ir,merge:tn},en=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qi=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new S,Yu=new ce,Ku=new ce,Nt=class extends qi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*fr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*$r*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*fr*Math.atan(Math.tan(.5*$r*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,Ku),t.subVectors(Ku,Yu)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*$r*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/c,t-=s.offsetY*n/l,i*=s.width/c,n*=s.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jr=-90,_o=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nt(Jr,1,e,t);i.layers=this.layers,this.add(i);let r=new Nt(Jr,1,e,t);r.layers=this.layers,this.add(r);let s=new Nt(Jr,1,e,t);s.layers=this.layers,this.add(s);let o=new Nt(Jr,1,e,t);o.layers=this.layers,this.add(o);let c=new Nt(Jr,1,e,t);c.layers=this.layers,this.add(c);let l=new Nt(Jr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,c]=t;for(let l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Za)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ts=class extends Ot{constructor(e=[],t=301,n,i,r,s,o,c,l,h){super(e,t,n,i,r,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xo=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ts(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let s=new $e(i,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=cn),new _o(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}},Gt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),b=this._getHandJoint(l,_);g!==null&&(b.matrix.fromArray(g.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=g.radius),b.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Wn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new S,la=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Z0=new S,Q0=new S,$0=new S,eb=new ce,tb=new ce,nb=new Be,ib=new S,rb=new S,ab=new S,sb=new ce,ob=new ce,lb=new ce;var cb=new S,hb=new S;var Ju=new S,Zu=new ht,Qu=new ht,qf=new S,$u=new Be,$s=new S,sc=new an,ed=new Be,oc=new Xi,ns=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Et),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$s),this.boundingBox.expandByPoint($s)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$s),this.boundingSphere.expandByPoint($s)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(i),e.ray.intersectsSphere(sc)!==!1&&(ed.copy(i).invert(),oc.copy(e.ray).applyMatrix4(ed),this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),Qu.fromBufferAttribute(i.attributes.skinWeight,e),Ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let s=Qu.getComponent(r);if(s!==0){let o=Zu.getComponent(r);$u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(qf.copy(Ju).applyMatrix4($u),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},ca=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},is=class extends Ot{constructor(e=null,t=1,n=1,i,r,s,o,c,l=1003,h=1003,u,d){super(null,s,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},td=new Be,Yf=new Be,rs=class a{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:Yf;td.multiplyMatrices(o,t[r]),td.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new is(t,e,e,Dn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new ca),this.bones.push(s),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let s=t[i];e.bones.push(s.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Cn=class extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zr=new Be,nd=new Be,eo=[],id=new Et,Kf=new Be,Ha=new $e,Ga=new an,yn=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),id.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),Ga.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=e*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[r+s]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zr),nd.multiplyMatrices(n,Zr),Ha.matrixWorld=nd,Ha.raycast(e,eo);for(let s=0,o=eo.length;s<o;s++){let c=eo[s];c.instanceId=r,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(i*this.count),i,this.count,dl,Ln));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let o=this.geometry.morphTargetsRelative?1:1-s,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lc=new S,Jf=new S,Zf=new Xe,_n=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=lc.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zf.getNormalMatrix(e),i=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new an,Qf=new ce(.5,.5),to=new S,Yi=class{constructor(e=new _n,t=new _n,n=new _n,i=new _n,r=new _n,s=new _n){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],_=r[9],g=r[10],b=r[11],v=r[12],f=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,p-h,b-m,E-v).normalize(),i[1].setComponents(l+s,p+h,b+m,E+v).normalize(),i[2].setComponents(l+o,p+u,b+_,E+f).normalize(),i[3].setComponents(l-o,p-u,b-_,E-f).normalize(),n)i[4].setComponents(c,d,g,x).normalize(),i[5].setComponents(l-c,p-d,b-g,E-x).normalize();else if(i[4].setComponents(l-c,p-d,b-g,E-x).normalize(),t===Ti)i[5].setComponents(l+c,p+d,b+g,E+x).normalize();else{if(t!==Za)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(c,d,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=Qf.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yn=new Be,Kn=new Yi,yo=class a{constructor(){this.coordinateSystem=Ti}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Kn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Kn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Kn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Kn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Kn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Kn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Kn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Kn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Yn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Kn.setFromProjectionMatrix(Yn,i.coordinateSystem,i.reversedDepth),Kn.containsPoint(e))return!0}return!1}clone(){return new a}};var xc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},ub=new Be,db=new Ee(1,1,1),pb=new Yi,fb=new yo,mb=new Et,gb=new an,bb=new S,vb=new S,_b=new S,xb=new xc,yb=new $e;var ha=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mo=new S,So=new S,rd=new Be,Va=new Xi,no=new an,cc=new S,ad=new S,mr=class extends St{constructor(e=new ut,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mo.fromBufferAttribute(t,i-1),So.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(So);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;rd.copy(i).invert(),Va.copy(e.ray).applyMatrix4(rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,_=p-1;m<_;m+=l){let g=h.getX(m),b=h.getX(m+1),v=io(this,e,Va,c,g,b,m);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),_=h.getX(d),g=io(this,e,Va,c,m,_,p-1);g&&t.push(g)}}else{let d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let m=d,_=p-1;m<_;m+=l){let g=io(this,e,Va,c,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=io(this,e,Va,c,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function io(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(Mo.fromBufferAttribute(o,i),So.fromBufferAttribute(o,r),t.distanceSqToSegment(Mo,So,cc,ad)>n)return;cc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(cc);return c<e.near||c>e.far?void 0:{distance:c,point:ad.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var sd=new S,od=new S,as=class extends mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sd.fromBufferAttribute(t,i),od.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sd.distanceTo(od);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ss=class extends mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ua=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new Be,yc=new Xi,ro=new an,ao=new S,os=class extends St{constructor(e=new ut,t=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;ld.copy(i).invert(),yc.copy(e.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);u<d;u++){let p=l.getX(u);ao.fromBufferAttribute(h,p),cd(ao,p,c,i,e,t,this)}else for(let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);u<d;u++)ao.fromBufferAttribute(h,u),cd(ao,u,c,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function cd(a,e,t,n,i,r,s){let o=yc.distanceSqToPoint(a);if(o<t){let c=new S;yc.closestPointToPoint(a,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var In=class extends Ot{constructor(e,t,n,i,r,s,o,c,l){super(e,t,n,i,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ls=class extends Ot{constructor(e,t,n=1014,i,r,s,o=1003,c=1003,l,h=1026,u=1){if(h!==Rs&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,r,s,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cs=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},To=class a extends ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*n+r,_=i+1,g=new S,b=new S;for(let v=0;v<=m;v++){let f=0,x=0,E=0,T=0;if(v<=n){let I=v/n,N=I*Math.PI/2;x=-h-e*Math.cos(N),E=e*Math.sin(N),T=-e*Math.cos(N),f=I*u}else if(v<=n+r){let I=(v-n)/r;x=I*t-h,E=e,T=0,f=u+I*d}else{let I=(v-n-r)/n,N=I*Math.PI/2;x=h+e*Math.sin(N),E=e*Math.cos(N),T=e*Math.sin(N),f=u+d+I*u}let P=Math.max(0,Math.min(1,f/p)),R=0;v===0?R=.5/i:v===m&&(R=-.5/i);for(let I=0;I<=i;I++){let N=I/i,U=N*Math.PI*2,O=Math.sin(U),J=Math.cos(U);b.x=-E*J,b.y=x,b.z=E*O,o.push(b.x,b.y,b.z),g.set(-E*J,T,E*O),g.normalize(),c.push(g.x,g.y,g.z),l.push(N+R,P)}if(v>0){let I=(v-1)*_;for(let N=0;N<i;N++){let U=I+N,O=I+N+1,J=v*_+N,G=v*_+N+1;s.push(U,O,J),s.push(O,G,J)}}}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Eo=class a extends ut{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],c=[],l=new S,h=new ce;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),s.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ei=class a extends ut{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,_=[],g=n/2,b=0;function v(f){let x=m,E=new ce,T=new S,P=0,R=f===!0?e:t,I=f===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*I,0),d.push(0,I,0),p.push(.5,.5),m++;let N=m;for(let U=0;U<=i;U++){let O=U/i*c+o,J=Math.cos(O),G=Math.sin(O);T.x=R*G,T.y=g*I,T.z=R*J,u.push(T.x,T.y,T.z),d.push(0,I,0),E.x=.5*J+.5,E.y=.5*G*I+.5,p.push(E.x,E.y),m++}for(let U=0;U<i;U++){let O=x+U,J=N+U;f===!0?h.push(J,J+1,O):h.push(J+1,J,O),P+=3}l.addGroup(b,P,f===!0?1:2),b+=P}(function(){let f=new S,x=new S,E=0,T=(t-e)/n;for(let P=0;P<=r;P++){let R=[],I=P/r,N=I*(t-e)+e;for(let U=0;U<=i;U++){let O=U/i,J=O*c+o,G=Math.sin(J),K=Math.cos(J);x.x=N*G,x.y=-I*n+g,x.z=N*K,u.push(x.x,x.y,x.z),f.set(G,T,K).normalize(),d.push(f.x,f.y,f.z),p.push(O,1-I),R.push(m++)}_.push(R)}for(let P=0;P<i;P++)for(let R=0;R<r;R++){let I=_[R][P],N=_[R+1][P],U=_[R+1][P+1],O=_[R][P+1];(e>0||R!==0)&&(h.push(I,N,O),E+=3),(t>0||R!==r-1)&&(h.push(N,U,O),E+=3)}l.addGroup(b,E,0),b+=E})(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wo=class a extends Ei{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=2*Math.PI){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class a extends ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];function o(p,m,_,g){let b=g+1,v=[];for(let f=0;f<=b;f++){v[f]=[];let x=p.clone().lerp(_,f/b),E=m.clone().lerp(_,f/b),T=b-f;for(let P=0;P<=T;P++)v[f][P]=P===0&&f===b?x:x.clone().lerp(E,P/T)}for(let f=0;f<b;f++)for(let x=0;x<2*(b-f)-1;x++){let E=Math.floor(x/2);x%2==0?(c(v[f][E+1]),c(v[f+1][E]),c(v[f][E])):(c(v[f][E+1]),c(v[f+1][E+1]),c(v[f+1][E]))}}function c(p){r.push(p.x,p.y,p.z)}function l(p,m){let _=3*p;m.x=e[_+0],m.y=e[_+1],m.z=e[_+2]}function h(p,m,_,g){g<0&&p.x===1&&(s[m]=p.x-1),_.x===0&&_.z===0&&(s[m]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new S,_=new S,g=new S;for(let b=0;b<t.length;b+=3)l(t[b+0],m),l(t[b+1],_),l(t[b+2],g),o(m,_,g,p)})(i),(function(p){let m=new S;for(let _=0;_<r.length;_+=3)m.x=r[_+0],m.y=r[_+1],m.z=r[_+2],m.normalize().multiplyScalar(p),r[_+0]=m.x,r[_+1]=m.y,r[_+2]=m.z})(n),(function(){let p=new S;for(let m=0;m<r.length;m+=3){p.x=r[m+0],p.y=r[m+1],p.z=r[m+2];let _=u(p)/2/Math.PI+.5,g=d(p)/Math.PI+.5;s.push(_,1-g)}(function(){let m=new S,_=new S,g=new S,b=new S,v=new ce,f=new ce,x=new ce;for(let E=0,T=0;E<r.length;E+=9,T+=6){m.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),g.set(r[E+6],r[E+7],r[E+8]),v.set(s[T+0],s[T+1]),f.set(s[T+2],s[T+3]),x.set(s[T+4],s[T+5]),b.copy(m).add(_).add(g).divideScalar(3);let P=u(b);h(v,T+0,m,P),h(f,T+2,_,P),h(x,T+4,g,P)}})(),(function(){for(let m=0;m<s.length;m+=6){let _=s[m+0],g=s[m+2],b=s[m+4],v=Math.max(_,g,b),f=Math.min(_,g,b);v>.9&&f<.1&&(_<.2&&(s[m+0]+=1),g<.2&&(s[m+2]+=1),b<.2&&(s[m+4]+=1))}})()})(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.details)}},Ao=class a extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},so=new S,oo=new S,hc=new S,lo=new xi,Ro=class extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos($r*t),s=e.getIndex(),o=e.getAttribute("position"),c=s?s.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){s?(l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:g,c:b}=lo;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),b.fromBufferAttribute(o,l[2]),lo.getNormal(hc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let f=(v+1)%3,x=u[v],E=u[f],T=lo[h[v]],P=lo[h[f]],R=`${x}_${E}`,I=`${E}_${x}`;I in d&&d[I]?(hc.dot(d[I].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),d[I]=null):R in d||(d[R]={index0:l[v],index1:l[f],normal:hc.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:g}=d[m];so.fromBufferAttribute(o,_),oo.fromBufferAttribute(o,g),p.push(so.x,so.y,so.z),p.push(oo.x,oo.y,oo.z)}this.setAttribute("position",new ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;s=t||e*n[r-1];let o,c=0,l=r-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-s,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);let h=n[i];return(i+(s-h)/(n[i+1]-h))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),c=t||(s.isVector2?new ce:new S);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new S,i=[],r=[],s=[],o=new S,c=new Be;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new S)}r[0]=new S,s[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ze(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,m))}s[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),s[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},da=class extends Mn{constructor(e=0,t=0,n=1,i=1,r=0,s=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Co=class extends da{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let a=0,e=0,t=0,n=0;function i(r,s,o,c){a=r,e=o,t=-3*r+3*s-2*o-c,n=2*r-2*s+o+c}return{initCatmullRom:function(r,s,o,c,l){i(s,o,l*(o-r),l*(c-s))},initNonuniformCatmullRom:function(r,s,o,c,l,h,u){let d=(s-r)/l-(o-r)/(l+h)+(o-s)/h,p=(o-s)/h-(c-s)/(h+u)+(c-o)/u;d*=h,p*=h,i(s,o,d,p)},calc:function(r){let s=r*r;return a+e*r+t*s+n*(s*r)}}}var co=new S,uc=new xh,dc=new xh,pc=new xh,Io=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o,c,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?o=i[(l-1)%r]:(co.subVectors(i[0],i[1]).add(i[0]),o=co);let u=i[l%r],d=i[(l+1)%r];if(this.closed||l+2<r?c=i[(l+2)%r]:(co.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=co),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),uc.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,m,_,g),dc.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,m,_,g),pc.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,m,_,g)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),dc.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),pc.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(uc.calc(h),dc.calc(h),pc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hd(a,e,t,n,i){let r=.5*(n-e),s=.5*(i-t),o=a*a;return(2*t-2*n+r+s)*(a*o)+(-3*t+3*n-2*r-s)*o+r*a+t}function qa(a,e,t,n){return(function(i,r){let s=1-i;return s*s*r})(a,e)+(function(i,r){return 2*(1-i)*i*r})(a,t)+(function(i,r){return i*i*r})(a,n)}function Ya(a,e,t,n,i){return(function(r,s){let o=1-r;return o*o*o*s})(a,e)+(function(r,s){let o=1-r;return 3*o*o*r*s})(a,t)+(function(r,s){return 3*(1-r)*r*r*s})(a,n)+(function(r,s){return r*r*r*s})(a,i)}var hs=class extends Mn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ya(e,i.x,r.x,s.x,o.x),Ya(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends Mn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ya(e,i.x,r.x,s.x,o.x),Ya(e,i.y,r.y,s.y,o.y),Ya(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},us=class extends Mn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Mn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends Mn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(qa(e,i.x,r.x,s.x),qa(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ps=class extends Mn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(qa(e,i.x,r.x,s.x),qa(e,i.y,r.y,s.y),qa(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,c=i[s===0?s:s-1],l=i[s],h=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(hd(o,c.x,l.x,h.x,u.x),hd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Io,CubicBezierCurve:hs,CubicBezierCurve3:pa,EllipseCurve:da,LineCurve:us,LineCurve3:Po,QuadraticBezierCurve:ds,QuadraticBezierCurve3:ps,SplineCurve:fs}),Do=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-s/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lo[i.type]().fromJSON(i))}return this}},ms=class extends Do{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new us(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ds(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){let o=new hs(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,s,o,c),this}absellipse(e,t,n,i,r,s,o,c){let l=new da(e,t,n,i,r,s,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gr=class extends ms{constructor(e){super(e),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ms().fromJSON(i))}return this}};function $f(a,e,t=2){let n=e&&e.length,i=n?e[0]*t:a.length,r=ud(a,0,i,t,!0),s=[];if(!r||r.next===r.prev)return s;let o,c,l;if(n&&(r=(function(h,u,d,p){let m=[];for(let _=0,g=u.length;_<g;_++){let b=ud(h,u[_]*p,_<g-1?u[_+1]*p:h.length,p,!1);b===b.next&&(b.steiner=!0),m.push(om(b))}m.sort(rm);for(let _=0;_<m.length;_++)d=am(m[_],d);return d})(a,e,r,t)),a.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=a[d],m=a[d+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return gs(r,s,t,o,c,l,0),s}function ud(a,e,t,n,i){let r;if(i===(function(s,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(s[d]-s[u])*(s[u+1]+s[d+1]),d=u;return h})(a,e,t,n)>0)for(let s=e;s<t;s+=n)r=dd(s/n|0,a[s],a[s+1],r);else for(let s=t-n;s>=e;s-=n)r=dd(s/n|0,a[s],a[s+1],r);return r&&fa(r,r.next)&&(vs(r),r=r.next),r}function br(a,e){if(!a)return a;e||(e=a);let t,n=a;do if(t=!1,n.steiner||!fa(n,n.next)&&Rt(n.prev,n,n.next)!==0)n=n.next;else{if(vs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function gs(a,e,t,n,i,r,s){if(!a)return;!s&&r&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Mc(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,_=1;do{let g,b=p;p=null;let v=null;for(m=0;b;){m++;let f=b,x=0;for(let T=0;T<_&&(x++,f=f.nextZ,f);T++);let E=_;for(;x>0||E>0&&f;)x!==0&&(E===0||!f||b.z<=f.z)?(g=b,b=b.nextZ,x--):(g=f,f=f.nextZ,E--),v?v.nextZ=g:p=g,g.prevZ=v,v=g;b=f}v.nextZ=null,_*=2}while(m>1)})(d)})(a,n,i,r);let o=a;for(;a.prev!==a.next;){let c=a.prev,l=a.next;if(r?tm(a,n,i,r):em(a))e.push(c.i,a.i,l.i),vs(a),a=l.next,o=l.next;else if((a=l)===o){s?s===1?gs(a=nm(br(a),e),e,t,n,i,r,2):s===2&&im(a,e,t,n,i,r):gs(br(a),e,t,n,i,r,1);break}}}function em(a){let e=a.prev,t=a,n=a.next;if(Rt(e,t,n)>=0)return!1;let i=e.x,r=t.x,s=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,s),u=Math.min(o,c,l),d=Math.max(i,r,s),p=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ja(i,o,r,c,s,l,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tm(a,e,t,n){let i=a.prev,r=a,s=a.next;if(Rt(i,r,s)>=0)return!1;let o=i.x,c=r.x,l=s.x,h=i.y,u=r.y,d=s.y,p=Math.min(o,c,l),m=Math.min(h,u,d),_=Math.max(o,c,l),g=Math.max(h,u,d),b=Mc(p,m,e,t,n),v=Mc(_,g,e,t,n),f=a.prevZ,x=a.nextZ;for(;f&&f.z>=b&&x&&x.z<=v;){if(f.x>=p&&f.x<=_&&f.y>=m&&f.y<=g&&f!==i&&f!==s&&ja(o,h,c,u,l,d,f.x,f.y)&&Rt(f.prev,f,f.next)>=0||(f=f.prevZ,x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==s&&ja(o,h,c,u,l,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;f&&f.z>=b;){if(f.x>=p&&f.x<=_&&f.y>=m&&f.y<=g&&f!==i&&f!==s&&ja(o,h,c,u,l,d,f.x,f.y)&&Rt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==s&&ja(o,h,c,u,l,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function nm(a,e){let t=a;do{let n=t.prev,i=t.next.next;!fa(n,i)&&yp(n,t,t.next,i)&&bs(n,i)&&bs(i,n)&&(e.push(n.i,t.i,i.i),vs(t),vs(t.next),t=a=i),t=t.next}while(t!==a);return br(t)}function im(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&lm(s,o)){let c=Mp(s,o);return s=br(s,s.next),c=br(c,c.next),gs(s,e,t,n,i,r,0),void gs(c,e,t,n,i,r,0)}o=o.next}s=s.next}while(s!==a)}function rm(a,e){let t=a.x-e.x;return t===0&&(t=a.y-e.y,t===0)&&(t=(a.next.y-a.y)/(a.next.x-a.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function am(a,e){let t=(function(i,r){let s=r,o=i.x,c=i.y,l,h=-1/0;if(fa(i,s))return s;do{if(fa(i,s.next))return s.next;if(c<=s.y&&c>=s.next.y&&s.next.y!==s.y){let _=s.x+(c-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(_<=o&&_>h&&(h=_,l=s.x<s.next.x?s:s.next,_===o))return l}s=s.next}while(s!==r);if(!l)return null;let u=l,d=l.x,p=l.y,m=1/0;s=l;do{if(o>=s.x&&s.x>=d&&o!==s.x&&xp(c<p?o:h,c,d,p,c<p?h:o,c,s.x,s.y)){let _=Math.abs(c-s.y)/(o-s.x);bs(s,i)&&(_<m||_===m&&(s.x>l.x||s.x===l.x&&sm(l,s)))&&(l=s,m=_)}s=s.next}while(s!==u);return l})(a,e);if(!t)return e;let n=Mp(t,a);return br(n,n.next),br(t,t.next)}function sm(a,e){return Rt(a.prev,a,e.prev)<0&&Rt(e.next,a,a.next)<0}function Mc(a,e,t,n,i){return(a=1431655765&((a=858993459&((a=252645135&((a=16711935&((a=(a-t)*i|0)|a<<8))|a<<4))|a<<2))|a<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function om(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function xp(a,e,t,n,i,r,s,o){return(i-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(i-s)*(n-o)}function ja(a,e,t,n,i,r,s,o){return!(a===s&&e===o)&&xp(a,e,t,n,i,r,s,o)}function lm(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&yp(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(a,e)&&(bs(a,e)&&bs(e,a)&&(function(t,n){let i=t,r=!1,s=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&s<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r})(a,e)&&(Rt(a.prev,a,e.prev)||Rt(a,e.prev,e))||fa(a,e)&&Rt(a.prev,a,a.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function fa(a,e){return a.x===e.x&&a.y===e.y}function yp(a,e,t,n){let i=uo(Rt(a,e,t)),r=uo(Rt(a,e,n)),s=uo(Rt(t,n,a)),o=uo(Rt(t,n,e));return i!==r&&s!==o||!(i!==0||!ho(a,t,e))||!(r!==0||!ho(a,n,e))||!(s!==0||!ho(t,a,n))||!(o!==0||!ho(t,e,n))}function ho(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function uo(a){return a>0?1:a<0?-1:0}function bs(a,e){return Rt(a.prev,a,a.next)<0?Rt(a,e,a.next)>=0&&Rt(a,a.prev,e)>=0:Rt(a,e,a.prev)<0||Rt(a,a.next,e)<0}function Mp(a,e){let t=Sc(a.i,a.x,a.y),n=Sc(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dd(a,e,t,n){let i=Sc(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vs(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Sc(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Tc=class{static triangulate(e,t,n=2){return $f(e,t,n)}},Jn=class a{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return a.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];pd(e),fd(n,e);let s=e.length;t.forEach(pd);for(let c=0;c<t.length;c++)i.push(s),s+=t[c].length,fd(n,t[c]);let o=Tc.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function pd(a){let e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function fd(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}var ma=class a extends ut{constructor(e=new gr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++)s(e[o]);function s(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,b=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cm,f,x,E,T,P,R=!1;b&&(f=b.getSpacedPoints(h),R=!0,d=!1,x=b.computeFrenetFrames(h,!1),E=new S,T=new S,P=new S),d||(g=0,p=0,m=0,_=0);let I=o.extractPoints(l),N=I.shape,U=I.holes;if(!Jn.isClockWise(N)){N=N.reverse();for(let B=0,M=U.length;B<M;B++){let C=U[B];Jn.isClockWise(C)&&(U[B]=C.reverse())}}function O(B){let M=10000000000000001e-36,C=B[0];for(let z=1;z<=B.length;z++){let L=z%B.length,te=B[L],X=te.x-C.x,q=te.y-C.y,he=X*X+q*q,Se=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(C.x),Math.abs(C.y));he<=M*Se*Se?(B.splice(L,1),z--):C=te}}O(N),U.forEach(O);let J=U.length,G=N;for(let B=0;B<J;B++){let M=U[B];N=N.concat(M)}function K(B,M,C){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(M,C)}let Z=N.length;function ae(B,M,C){let z,L,te,X=B.x-M.x,q=B.y-M.y,he=C.x-B.x,Se=C.y-B.y,fe=X*X+q*q,me=X*Se-q*he;if(Math.abs(me)>Number.EPSILON){let Ce=Math.sqrt(fe),Ge=Math.sqrt(he*he+Se*Se),Ke=M.x-q/Ce,qe=M.y+X/Ce,re=((C.x-Se/Ge-Ke)*Se-(C.y+he/Ge-qe)*he)/(X*Se-q*he);z=Ke+X*re-B.x,L=qe+q*re-B.y;let ne=z*z+L*L;if(ne<=2)return new ce(z,L);te=Math.sqrt(ne/2)}else{let Ce=!1;X>Number.EPSILON?he>Number.EPSILON&&(Ce=!0):X<-Number.EPSILON?he<-Number.EPSILON&&(Ce=!0):Math.sign(q)===Math.sign(Se)&&(Ce=!0),Ce?(z=-q,L=X,te=Math.sqrt(fe)):(z=X,L=q,te=Math.sqrt(fe/2))}return new ce(z/te,L/te)}let ie=[];for(let B=0,M=G.length,C=M-1,z=B+1;B<M;B++,C++,z++)C===M&&(C=0),z===M&&(z=0),ie[B]=ae(G[B],G[C],G[z]);let le=[],Le,we,Pe=ie.concat();for(let B=0,M=J;B<M;B++){let C=U[B];Le=[];for(let z=0,L=C.length,te=L-1,X=z+1;z<L;z++,te++,X++)te===L&&(te=0),X===L&&(X=0),Le[z]=ae(C[z],C[te],C[X]);le.push(Le),Pe=Pe.concat(Le)}if(g===0)we=Jn.triangulateShape(G,U);else{let B=[],M=[];for(let C=0;C<g;C++){let z=C/g,L=p*Math.cos(z*Math.PI/2),te=m*Math.sin(z*Math.PI/2)+_;for(let X=0,q=G.length;X<q;X++){let he=K(G[X],ie[X],te);Fe(he.x,he.y,-L),z===0&&B.push(he)}for(let X=0,q=J;X<q;X++){let he=U[X];Le=le[X];let Se=[];for(let fe=0,me=he.length;fe<me;fe++){let Ce=K(he[fe],Le[fe],te);Fe(Ce.x,Ce.y,-L),z===0&&Se.push(Ce)}z===0&&M.push(Se)}}we=Jn.triangulateShape(B,M)}let se=we.length,be=m+_;for(let B=0;B<Z;B++){let M=d?K(N[B],Pe[B],be):N[B];R?(T.copy(x.normals[0]).multiplyScalar(M.x),E.copy(x.binormals[0]).multiplyScalar(M.y),P.copy(f[0]).add(T).add(E),Fe(P.x,P.y,P.z)):Fe(M.x,M.y,0)}for(let B=1;B<=h;B++)for(let M=0;M<Z;M++){let C=d?K(N[M],Pe[M],be):N[M];R?(T.copy(x.normals[B]).multiplyScalar(C.x),E.copy(x.binormals[B]).multiplyScalar(C.y),P.copy(f[B]).add(T).add(E),Fe(P.x,P.y,P.z)):Fe(C.x,C.y,u/h*B)}for(let B=g-1;B>=0;B--){let M=B/g,C=p*Math.cos(M*Math.PI/2),z=m*Math.sin(M*Math.PI/2)+_;for(let L=0,te=G.length;L<te;L++){let X=K(G[L],ie[L],z);Fe(X.x,X.y,u+C)}for(let L=0,te=U.length;L<te;L++){let X=U[L];Le=le[L];for(let q=0,he=X.length;q<he;q++){let Se=K(X[q],Le[q],z);R?Fe(Se.x,Se.y+f[h-1].y,f[h-1].x+C):Fe(Se.x,Se.y,u+C)}}}function ge(B,M){let C=B.length;for(;--C>=0;){let z=C,L=C-1;L<0&&(L=B.length-1);for(let te=0,X=h+2*g;te<X;te++){let q=Z*te,he=Z*(te+1);A(M+z+q,M+L+q,M+L+he,M+z+he)}}}function Fe(B,M,C){c.push(B),c.push(M),c.push(C)}function Me(B,M,C){w(B),w(M),w(C);let z=i.length/3,L=v.generateTopUV(n,i,z-3,z-2,z-1);H(L[0]),H(L[1]),H(L[2])}function A(B,M,C,z){w(B),w(M),w(z),w(M),w(C),w(z);let L=i.length/3,te=v.generateSideWallUV(n,i,L-6,L-3,L-2,L-1);H(te[0]),H(te[1]),H(te[3]),H(te[1]),H(te[2]),H(te[3])}function w(B){i.push(c[3*B+0]),i.push(c[3*B+1]),i.push(c[3*B+2])}function H(B){r.push(B.x),r.push(B.y)}(function(){let B=i.length/3;if(d){let M=0,C=Z*M;for(let z=0;z<se;z++){let L=we[z];Me(L[2]+C,L[1]+C,L[0]+C)}M=h+2*g,C=Z*M;for(let z=0;z<se;z++){let L=we[z];Me(L[0]+C,L[1]+C,L[2]+C)}}else{for(let M=0;M<se;M++){let C=we[M];Me(C[2],C[1],C[0])}for(let M=0;M<se;M++){let C=we[M];Me(C[0]+Z*h,C[1]+Z*h,C[2]+Z*h)}}n.addGroup(B,i.length/3-B,0)})(),(function(){let B=i.length/3,M=0;ge(G,M),M+=G.length;for(let C=0,z=U.length;C<z;C++){let L=U[C];ge(L,M),M+=L.length}n.addGroup(B,i.length/3-B,1)})()}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let o=t[r];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lo[i.type]().fromJSON(i)),new a(n,e.options)}},cm={generateTopUV:function(a,e,t,n,i){let r=e[3*t],s=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new ce(r,s),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(a,e,t,n,i,r){let s=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],_=e[3*r],g=e[3*r+1],b=e[3*r+2];return Math.abs(o-h)<Math.abs(s-l)?[new ce(s,1-c),new ce(l,1-u),new ce(d,1-m),new ce(_,1-b)]:[new ce(o,1-c),new ce(h,1-u),new ce(p,1-m),new ce(g,1-b)]}},Uo=class a extends Ki{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},No=class a extends ut{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ze(i,0,2*Math.PI);let r=[],s=[],o=[],c=[],l=[],h=1/t,u=new S,d=new ce,p=new S,m=new S,_=new S,g=0,b=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,b=e[v+1].y-e[v].y,p.x=1*b,p.y=-g,p.z=0*b,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,b=e[v+1].y-e[v].y,p.x=1*b,p.y=-g,p.z=0*b,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){let f=n+v*h*i,x=Math.sin(f),E=Math.cos(f);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*E,s.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);let P=c[3*T+0]*x,R=c[3*T+1],I=c[3*T+0]*E;l.push(P,R,I)}}for(let v=0;v<t;v++)for(let f=0;f<e.length-1;f++){let x=f+v*e.length,E=x,T=x+e.length,P=x+e.length+1,R=x+1;r.push(E,T,R),r.push(P,R,T)}this.setIndex(r),this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.points,e.segments,e.phiStart,e.phiLength)}},Fo=class a extends Ki{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},wt=class a extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],m=[],_=[],g=[];for(let b=0;b<h;b++){let v=b*d-s;for(let f=0;f<l;f++){let x=f*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(f/o),g.push(1-b/c)}}for(let b=0;b<c;b++)for(let v=0;v<o;v++){let f=v+l*b,x=v+l*(b+1),E=v+1+l*(b+1),T=v+1+l*b;p.push(f,x,T),p.push(x,E,T)}this.setIndex(p),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},Oo=class a extends ut{constructor(e=.5,t=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new S,m=new ce;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let b=r+g/n*s;p.x=u*Math.cos(b),p.y=u*Math.sin(b),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){let g=_*(n+1);for(let b=0;b<n;b++){let v=b+g,f=v,x=v+n+1,E=v+n+2,T=v+1;o.push(f,x,T),o.push(x,E,T)}}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Bo=class a extends ut{constructor(e=new gr([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],s=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Jn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,b=m.length;g<b;g++){let v=m[g];Jn.isClockWise(v)===!0&&(m[g]=v.reverse())}let _=Jn.triangulateShape(p,m);for(let g=0,b=m.length;g<b;g++){let v=m[g];p=p.concat(v)}for(let g=0,b=p.length;g<b;g++){let v=p[g];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let g=0,b=_.length;g<b;g++){let v=_[g],f=v[0]+u,x=v[1]+u,E=v[2]+u;n.push(f,x,E),c+=3}}this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let s=t[e.shapes[i]];n.push(s)}return new a(n,e.curveSegments)}},ga=class a extends ut{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(s+o,Math.PI),l=0,h=[],u=new S,d=new S,p=[],m=[],_=[],g=[];for(let b=0;b<=n;b++){let v=[],f=b/n,x=0;b===0&&s===0?x=.5/t:b===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let T=E/t;u.x=-e*Math.cos(i+T*r)*Math.sin(s+f*o),u.y=e*Math.cos(s+f*o),u.z=e*Math.sin(i+T*r)*Math.sin(s+f*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+x,1-f),v.push(l++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let f=h[b][v+1],x=h[b][v],E=h[b+1][v],T=h[b+1][v+1];(b!==0||s>0)&&p.push(f,x,T),(b!==n-1||c<Math.PI)&&p.push(x,E,T)}this.setIndex(p),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ko=class a extends Ki{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},ba=class a extends ut{constructor(e=1,t=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let s=[],o=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let _=m/i*r,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let _=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,b=(i+1)*(p-1)+m,v=(i+1)*p+m;s.push(_,g,v),s.push(g,b,v)}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},zo=class a extends ut{constructor(e=1,t=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new S,d=new S,p=new S,m=new S,_=new S,g=new S,b=new S;for(let f=0;f<=n;++f){let x=f/n*r*Math.PI*2;v(x,r,s,e,p),v(x+.01,r,s,e,m),g.subVectors(m,p),b.addVectors(m,p),_.crossVectors(g,b),b.crossVectors(_,g),_.normalize(),b.normalize();for(let E=0;E<=i;++E){let T=E/i*Math.PI*2,P=-t*Math.cos(T),R=t*Math.sin(T);u.x=p.x+(P*b.x+R*_.x),u.y=p.y+(P*b.y+R*_.y),u.z=p.z+(P*b.z+R*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(f/n),h.push(E/i)}}for(let f=1;f<=n;f++)for(let x=1;x<=i;x++){let E=(i+1)*(f-1)+(x-1),T=(i+1)*f+(x-1),P=(i+1)*f+x,R=(i+1)*(f-1)+x;o.push(E,T,R),o.push(T,P,R)}function v(f,x,E,T,P){let R=Math.cos(f),I=Math.sin(f),N=E/x*f,U=Math.cos(N);P.x=T*(2+U)*.5*R,P.y=T*(2+U)*I*.5,P.z=T*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},va=class a extends ut{constructor(e=new ps(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new S,c=new S,l=new ce,h=new S,u=[],d=[],p=[],m=[];function _(g){h=e.getPointAt(g/t,h);let b=s.normals[g],v=s.binormals[g];for(let f=0;f<=i;f++){let x=f/i*Math.PI*2,E=Math.sin(x),T=-Math.cos(x);c.x=T*b.x+E*v.x,c.y=T*b.y+E*v.y,c.z=T*b.z+E*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)_(g);_(r===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let b=0;b<=i;b++)l.x=g/t,l.y=b/i,p.push(l.x,l.y)})(),(function(){for(let g=1;g<=t;g++)for(let b=1;b<=i;b++){let v=(i+1)*(g-1)+(b-1),f=(i+1)*g+(b-1),x=(i+1)*g+b,E=(i+1)*(g-1)+b;m.push(v,f,E),m.push(f,x,E)}})()})(),this.setIndex(m),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new Lo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ho=class extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new S,r=new S;if(e.index!==null){let s=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let _=0;_<3;_++){let g=o.getX(p+_),b=o.getX(p+(_+1)%3);i.fromBufferAttribute(s,g),r.fromBufferAttribute(s,b),md(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let s=e.attributes.position;for(let o=0,c=s.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(s,h),r.fromBufferAttribute(s,u),md(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function md(a,e,t){let n=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Mb=Object.freeze({__proto__:null,BoxGeometry:Rn,CapsuleGeometry:To,CircleGeometry:Eo,ConeGeometry:wo,CylinderGeometry:Ei,DodecahedronGeometry:Ao,EdgesGeometry:Ro,ExtrudeGeometry:ma,IcosahedronGeometry:Uo,LatheGeometry:No,OctahedronGeometry:Fo,PlaneGeometry:wt,PolyhedronGeometry:Ki,RingGeometry:Oo,ShapeGeometry:Bo,SphereGeometry:ga,TetrahedronGeometry:ko,TorusGeometry:ba,TorusKnotGeometry:zo,TubeGeometry:va,WireframeGeometry:Ho});var wi=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends wi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Go=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vr=class extends sn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function po(a,e){return a&&a.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a):a}function hm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function um(a){let e=a.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return a[n]-a[i]}),t}function gd(a,e,t){let n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[s++]=a[o+c]}return i}function Sp(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}var Ai=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wo=class extends Ai{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hr,endingEnd:hr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],c=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case ur:r=e,o=2*t-n;break;case Ka:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ur:s=e,c=2*n-t;break;case Ka:s=1,c=n+i[1]-i[0];break;default:s=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,b=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,f=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let E=0;E!==o;++E)r[E]=b*s[h+E]+v*s[l+E]+f*s[c+E]+x*s[u+E];return r}},_s=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=s[l+d]*u+s[c+d]*h;return r}},jo=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _s(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(i!==void 0&&hm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,r=e.length-1,s=1;for(let o=1;o<r;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let h=o*n,u=s*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,c=s*n,l=0;l!==n;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ln.prototype.ValueTypeName="",ln.prototype.TimeBufferType=Float32Array,ln.prototype.ValueBufferType=Float32Array,ln.prototype.DefaultInterpolation=pr;var yi=class extends ln{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool",yi.prototype.ValueBufferType=Array,yi.prototype.DefaultInterpolation=dr,yi.prototype.InterpolantFactoryMethodLinear=void 0,yi.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};xs.prototype.ValueTypeName="color";var ti=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};ti.prototype.ValueTypeName="number";var Xo=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Mt.slerpFlat(r,0,s,l-o,s,l,c);return r}},ni=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion",ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends ln{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string",Mi.prototype.ValueBufferType=Array,Mi.prototype.DefaultInterpolation=dr,Mi.prototype.InterpolantFactoryMethodLinear=void 0,Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};ii.prototype.ValueTypeName="vector";var _r=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(dm(n[s]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=n.length;r!==s;++r)t.push(ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,s=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=um(c);c=gd(c,1,h),l=gd(l,1,h),i||c[0]!==0||(c.push(r),l.push(l[0])),s.push(new ti(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let s=[];for(let o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let _=[],g=[];Sp(d,_,g,p),_.length!==0&&m.push(new h(u,_,g))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let _=[],g=[];for(let b=0;b!==u[p].morphTargets.length;++b){let v=u[p];_.push(v.time),g.push(v.morphTarget===m?1:0)}i.push(new ti(".morphTargetInfluence["+m+"]",_,g))}c=d.length*s}else{let d=".bones["+t[h].name+"]";n(ii,d+".position",u,"pos",i),n(ni,d+".quaternion",u,"rot",i),n(ii,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function dm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return xs;case"quaternion":return ni;case"bool":case"boolean":return yi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(a.type);if(a.times===void 0){let t=[],n=[];Sp(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}var Zn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},qo=class{constructor(e,t,n){let i=this,r,s=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,c),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Tp=new qo,ri=class{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},Ec=class extends Error{constructor(e,t){super(e),this.response=t}},_a=class extends ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0)return void _i[e].push({onLoad:t,onProgress:n,onError:i});_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,_=0,g=new ReadableStream({start(b){(function v(){u.read().then(({done:f,value:x})=>{if(f)b.close();else{_+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let T=0,P=h.length;T<P;T++){let R=h[T];R.onProgress&&R.onProgress(E)}b.enqueue(x),v()}},f=>{b.error(f)})})()}});return new Response(g)}throw new Ec(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Zn.add(`file:${e}`,l);let h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qr=new WeakMap,Yo=class extends ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=Zn.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let u=Qr.get(s);u===void 0&&(u=[],Qr.set(s,u)),u.push({onLoad:t,onError:i})}return s}let o=na("img");function c(){h(),t&&t(this);let u=Qr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Qr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Zn.remove(`image:${e}`);let d=Qr.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}Qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var xr=class extends ri{constructor(e){super(e)}load(e,t,n,i){let r=new Ot,s=new Yo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},yr=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mr=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fc=new Be,bd=new S,vd=new S,ys=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=class extends ys{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=2*fr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ms=class extends yr{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_d=new Be,Wa=new S,mc=new S,Ac=class extends ys{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wa),mc.copy(n.position),mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mc),n.updateMatrixWorld(),i.makeTranslation(-Wa.x,-Wa.y,-Wa.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,n.coordinateSystem,n.reversedDepth)}},Ss=class extends yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ac}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sr=class extends qi{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=class extends ys{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pn=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ri=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gc=new WeakMap,Ts=class extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=Zn.get(`image-bitmap:${e}`);if(s!==void 0)return r.manager.itemStart(e),s.then?void s.then(l=>{if(gc.has(s)!==!0)return t&&t(l),r.manager.itemEnd(e),l;i&&i(gc.get(s)),r.manager.itemError(e),r.manager.itemEnd(e)}):(setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),gc.set(c,l),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sb=new Be,Tb=new Be,Eb=new Be;var Ko=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wb=new S,Ab=new Mt,Rb=new S,Cb=new S,Ib=new S;var Pb=new S,Lb=new Mt,Db=new S,Ub=new S;var Jo=class{constructor(e,t,n){let i,r,s;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;let o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let s=this._workIndex*r;Mt.multiplyQuaternionsFlat(e,s,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){let s=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*s+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){let o=t+s;e[o]=e[o]+e[n+s]*i}}},yh="\\[\\]\\.:\\/",pm=new RegExp("["+yh+"]","g"),bc="[^"+yh+"]",fm="[^"+yh.replace("\\.","")+"]",mm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bc)+/(WCOD+)?/.source.replace("WCOD",fm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc)+"$"),gm=["material","materials","bones","map"],gt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let s=e[i];if(s===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=class{constructor(a,e,t){let n=t||gt.parseTrackName(e);this._targetGroup=a,this._bindings=a.subscribe_(e,n)}getValue(a,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(a,e)}setValue(a,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(a,e)}bind(){let a=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=a.length;e!==t;++e)a[e].bind()}unbind(){let a=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=a.length;e!==t;++e)a[e].unbind()}},gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray],gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,s=r.length,o=new Array(s),c={endingStart:hr,endingEnd:hr};for(let l=0;l!==s;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,s=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/s,l[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let s=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;if(this.blendMode===ap)for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(s),l[h].accumulateAdditive(o);else for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(s),l[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,s=n===2202;if(e===0)return r===-1||!s||1&~r?i:t-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&!(1&~r))return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ur,i.endingEnd=ur):(i.endingStart=e?this.zeroSlopeAtStart?ur:hr:Ka,i.endingEnd=t?this.zeroSlopeAtEnd?ur:hr:Ka)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);let o=s.parameterPositions,c=s.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},bm=new Float32Array(1),Tr=class extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,m=h[p];if(m!==void 0)++m.referenceCount,s[u]=m;else{if(m=s[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new Jo(gt.create(n,p,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),s[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{let o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,s=this._actionsByClip,o=s[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],c.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new _s(new Float32Array(2),new Float32Array(2),1,bm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,s=typeof e=="string"?_r.findByName(i,e):e,o=s!==null?s.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(n=s!==null?s.blendMode:rp),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new Zo(this,s,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?_r.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,s);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let o=0,c=s.length;o!==c;++o){let l=s[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let s=n[r].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[t];if(i!==void 0)for(let r in i){let s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var xd=new Be,Ji=class{constructor(e,t,n=0,i=1/0){this.ray=new Xi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xd),this}intersectObject(e,t=!0,n=[]){return Cc(e,this,n,t),n.sort(yd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Cc(e[i],this,n,t);return n.sort(yd),n}};function yd(a,e){return a.distance-e.distance}function Cc(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=a.children;for(let s=0,o=r.length;s<o;s++)Cc(r[s],e,t,!0)}}var Nb=new ce;var Fb=new S,Ob=new S,Bb=new S,kb=new S,zb=new S,Hb=new S,Gb=new S;var Vb=new S;var Wb=new S,jb=new Be,Xb=new Be;var qb=new S,Yb=new Ee,Kb=new Ee;var Jb=new S,Zb=new S,Qb=new S;var $b=new S,ev=new qi;var tv=new Et;var nv=new S;function Mh(a,e,t,n){let i=(function(r){switch(r){case oi:case Nc:return{byteLength:1,components:1};case Sa:case Fc:case Ii:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case Rr:case cl:case Ln:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(n);switch(t){case 1021:return a*e;case dl:case pl:return a*e/i.components*i.byteLength;case 1030:case 1031:return a*e*2/i.components*i.byteLength;case 1022:return a*e*3/i.components*i.byteLength;case Dn:case 1033:return a*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Yp(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function _m(a){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(a.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(r,s){let o=r.array,c=r.usage,l=o.byteLength,h=a.createBuffer(),u;if(a.bindBuffer(s,h),a.bufferData(s,o,c),r.onUploadCallback(),o instanceof Float32Array)u=a.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=a.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?a.HALF_FLOAT:a.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=a.SHORT;else if(o instanceof Uint32Array)u=a.UNSIGNED_INT;else if(o instanceof Int32Array)u=a.INT;else if(o instanceof Int8Array)u=a.BYTE;else if(o instanceof Uint8Array)u=a.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=a.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:l}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,s,o){let c=s.array,l=s.updateRanges;if(a.bindBuffer(o,r),l.length===0)a.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];a.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Qe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Te={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},li={basic:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([Te.common,Te.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([Te.lights,Te.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var vl={r:0,b:0,g:0},Pr=new Vn,xm=new Be;function ym(a,e,t,n,i,r,s){let o=new Ee(0),c,l,h=r===!0?0:1,u=null,d=0,p=null;function m(g){let b=g.isScene===!0?g.background:null;return b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b)),b}function _(g,b){g.getRGB(vl,_h(a)),n.buffers.color.setClear(vl.r,vl.g,vl.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(g,b=1){o.set(g),h=b,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,_(o,h)},render:function(g){let b=!1,v=m(g);v===null?_(o,h):v&&v.isColor&&(_(v,1),b=!0);let f=a.xr.getEnvironmentBlendMode();f==="additive"?n.buffers.color.setClear(0,0,0,1,s):f==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))},addToRenderList:function(g,b){let v=m(b);v&&(v.isCubeTexture||v.mapping===As)?(l===void 0&&(l=new $e(new Rn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ir(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(f,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Pr.copy(b.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Pr)),l.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,u===v&&d===v.version&&p===a.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=a.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $e(new wt(2,2),new en({name:"BackgroundMaterial",uniforms:Ir(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===a.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=a.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function Mm(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=l(null),r=i,s=!1;function o(b){return a.bindVertexArray(b)}function c(b){return a.deleteVertexArray(b)}function l(b){let v=[],f=[],x=[];for(let E=0;E<t;E++)v[E]=0,f[E]=0,x[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:f,attributeDivisors:x,object:b,attributes:{},index:null}}function h(){let b=r.newAttributes;for(let v=0,f=b.length;v<f;v++)b[v]=0}function u(b){d(b,0)}function d(b,v){let f=r.newAttributes,x=r.enabledAttributes,E=r.attributeDivisors;f[b]=1,x[b]===0&&(a.enableVertexAttribArray(b),x[b]=1),E[b]!==v&&(a.vertexAttribDivisor(b,v),E[b]=v)}function p(){let b=r.newAttributes,v=r.enabledAttributes;for(let f=0,x=v.length;f<x;f++)v[f]!==b[f]&&(a.disableVertexAttribArray(f),v[f]=0)}function m(b,v,f,x,E,T,P){P===!0?a.vertexAttribIPointer(b,v,f,E,T):a.vertexAttribPointer(b,v,f,x,E,T)}function _(){g(),s=!0,r!==i&&(r=i,o(r.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(b,v,f,x,E){let T=!1,P=(function(R,I,N){let U=N.wireframe===!0,O=n[R.id];O===void 0&&(O={},n[R.id]=O);let J=O[I.id];J===void 0&&(J={},O[I.id]=J);let G=J[U];return G===void 0&&(G=l(a.createVertexArray()),J[U]=G),G})(x,f,v);r!==P&&(r=P,o(r.object)),T=(function(R,I,N,U){let O=r.attributes,J=I.attributes,G=0,K=N.getAttributes();for(let Z in K)if(K[Z].location>=0){let ae=O[Z],ie=J[Z];if(ie===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ae===void 0||ae.attribute!==ie||ie&&ae.data!==ie.data)return!0;G++}return r.attributesNum!==G||r.index!==U})(b,x,f,E),T&&(function(R,I,N,U){let O={},J=I.attributes,G=0,K=N.getAttributes();for(let Z in K)if(K[Z].location>=0){let ae=J[Z];ae===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));let ie={};ie.attribute=ae,ae&&ae.data&&(ie.data=ae.data),O[Z]=ie,G++}r.attributes=O,r.attributesNum=G,r.index=U})(b,x,f,E),E!==null&&e.update(E,a.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,(function(R,I,N,U){h();let O=U.attributes,J=N.getAttributes(),G=I.defaultAttributeValues;for(let K in J){let Z=J[K];if(Z.location>=0){let ae=O[K];if(ae===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){let ie=ae.normalized,le=ae.itemSize,Le=e.get(ae);if(Le===void 0)continue;let we=Le.buffer,Pe=Le.type,se=Le.bytesPerElement,be=Pe===a.INT||Pe===a.UNSIGNED_INT||ae.gpuType===cl;if(ae.isInterleavedBufferAttribute){let ge=ae.data,Fe=ge.stride,Me=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let A=0;A<Z.locationSize;A++)d(Z.location+A,ge.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let A=0;A<Z.locationSize;A++)u(Z.location+A);a.bindBuffer(a.ARRAY_BUFFER,we);for(let A=0;A<Z.locationSize;A++)m(Z.location+A,le/Z.locationSize,Pe,ie,Fe*se,(Me+le/Z.locationSize*A)*se,be)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)d(Z.location+ge,ae.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<Z.locationSize;ge++)u(Z.location+ge);a.bindBuffer(a.ARRAY_BUFFER,we);for(let ge=0;ge<Z.locationSize;ge++)m(Z.location+ge,le/Z.locationSize,Pe,ie,le*se,le/Z.locationSize*ge*se,be)}}else if(G!==void 0){let ie=G[K];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(Z.location,ie);break;case 3:a.vertexAttrib3fv(Z.location,ie);break;case 4:a.vertexAttrib4fv(Z.location,ie);break;default:a.vertexAttrib1fv(Z.location,ie)}}}}p()})(b,v,f,x),E!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:_,resetDefaultState:g,dispose:function(){_();for(let b in n){let v=n[b];for(let f in v){let x=v[f];for(let E in x)c(x[E].object),delete x[E];delete v[f]}delete n[b]}},releaseStatesOfGeometry:function(b){if(n[b.id]===void 0)return;let v=n[b.id];for(let f in v){let x=v[f];for(let E in x)c(x[E].object),delete x[E];delete v[f]}delete n[b.id]},releaseStatesOfProgram:function(b){for(let v in n){let f=n[v];if(f[b.id]===void 0)continue;let x=f[b.id];for(let E in x)c(x[E].object),delete x[E];delete f[b.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Sm(a,e,t){let n;function i(r,s,o){o!==0&&(a.drawArraysInstanced(n,r,s,o),t.update(s,n,o))}this.setMode=function(r){n=r},this.render=function(r,s){a.drawArrays(n,r,s),t.update(s,n,1)},this.renderInstances=i,this.renderMultiDraw=function(r,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,s,0,o);let c=0;for(let l=0;l<o;l++)c+=s[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(r,s,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<r.length;h++)i(r[h],s[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,r,0,s,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u]*c[u];t.update(h,n,1)}}}function Tm(a,e,t,n){let i;function r(d){if(d==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=r(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,textureFormatReadable:function(d){return d===Dn||n.convert(d)===a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==oi&&n.convert(d)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Ln&&!p)},precision:s,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:a.getParameter(a.MAX_TEXTURE_SIZE),maxCubemapSize:a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:a.getParameter(a.MAX_VERTEX_ATTRIBS),maxVertexUniforms:a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:a.getParameter(a.MAX_VARYING_VECTORS),maxFragmentUniforms:a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:a.getParameter(a.MAX_SAMPLES)}}function Em(a){let e=this,t=null,n=0,i=!1,r=!1,s=new _n,o=new Xe,c={value:null,needsUpdate:!1};function l(h,u,d,p){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=c.value,p!==!0||_===null){let g=d+4*m,b=u.matrixWorldInverse;o.getNormalMatrix(b),(_===null||_.length<g)&&(_=new Float32Array(g));for(let v=0,f=d;v!==m;++v,f+=4)s.copy(h[v]).applyMatrix4(b,o),s.normal.toArray(_,f),_[f+3]=s.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,g=a.get(h);if(!i||p===null||p.length===0||r&&!_)r?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let b=r?0:n,v=4*b,f=g.clippingState||null;c.value=f,f=l(p,u,v,d);for(let x=0;x!==v;++x)f[x]=t[x];g.clippingState=f,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}}}function wm(a){let e=new WeakMap;function t(i,r){return r===sl?i.mapping=ya:r===ol&&(i.mapping=wr),i}function n(i){let r=i.target;r.removeEventListener("dispose",n);let s=e.get(r);s!==void 0&&(e.delete(r),s.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping;if(r===sl||r===ol){if(e.has(i))return t(e.get(i).texture,i.mapping);{let s=i.image;if(s&&s.height>0){let o=new xo(s.height);return o.fromEquirectangularTexture(a,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Ep=[.125,.215,.35,.446,.526,.582],Ps=20,Sh=new Sr,wp=new Ee,Th=null,Eh=0,wh=0,Ah=!1,Dr=(1+Math.sqrt(5))/2,wa=1/Dr,Ap=[new S(-Dr,wa,0),new S(Dr,wa,0),new S(-wa,0,Dr),new S(wa,0,Dr),new S(0,Dr,-wa),new S(0,Dr,wa),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Am=new S,Pi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=Am}=r;Th=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Eh,wh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ii,format:Dn,colorSpace:jt,depthBuffer:!1},i=Rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],c=[],l=[],h=s,u=s-4+1+Ep.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let m=1/p;d>s-4?m=Ep[d-s+4-1]:d===0&&(m=0),l.push(m);let _=1/(p-2),g=-_,b=1+_,v=[g,g,b,g,b,b,g,g,b,b,g,b],f=6,x=6,E=3,T=2,P=1,R=new Float32Array(E*x*f),I=new Float32Array(T*x*f),N=new Float32Array(P*x*f);for(let O=0;O<f;O++){let J=O%3*2/3-1,G=O>2?0:-1,K=[J,G,0,J+2/3,G,0,J+2/3,G+1,0,J,G,0,J+2/3,G+1,0,J,G+1,0];R.set(K,E*x*O),I.set(v,T*x*O);let Z=[O,O,O,O,O,O];N.set(Z,P*x*O)}let U=new ut;U.setAttribute("position",new Tt(R,E)),U.setAttribute("uv",new Tt(I,T)),U.setAttribute("faceIndex",new Tt(N,P)),o.push(U),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(r)),this._blurMaterial=(function(s,o,c){let l=new Float32Array(Ps),h=new S(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})})(r,e,t)}return i}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Sh)}_sceneToCubeUV(e,t,n,i,r){let s=new Nt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(wp),l.toneMapping=Ci,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new lt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new $e(new Rn,d),m=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,m=!0):(d.color.copy(wp),m=!0);for(let g=0;g<6;g++){let b=g%3;b===0?(s.up.set(0,o[g],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+c[g],r.y,r.z)):b===1?(s.up.set(0,0,o[g]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+c[g],r.z)):(s.up.set(0,o[g],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+c[g]));let v=this._cubeSize;_l(i,b*v,g>2?v:0,v,v),l.setRenderTarget(i),m&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ya||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new $e(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;_l(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Sh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ap[(i-r-1)%Ap.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,i,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new $e(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,_=isFinite(r)?1+Math.floor(3*m):Ps;_>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let g=[],b=0;for(let x=0;x<Ps;++x){let E=x/m,T=Math.exp(-E*E/2);g.push(T),x===0?b+=T:x<_&&(b+=2*T)}for(let x=0;x<g.length;x++)g[x]=g[x]/b;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=g,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let f=this._sizeLods[i];_l(t,3*f*(i>v-4?i-v+4:0),4*(this._cubeSize-f),3*f,2*f),c.setRenderTarget(t),c.render(h,Sh)}};function Rp(a,e,t){let n=new hn(a,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _l(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Cp(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ip(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function Rm(a){let e=new WeakMap,t=null;function n(i){let r=i.target;r.removeEventListener("dispose",n);let s=e.get(r);s!==void 0&&(e.delete(r),s.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping,s=r===sl||r===ol,o=r===ya||r===wr;if(s||o){let c=e.get(i),l=c!==void 0?c.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==l)return t===null&&(t=new Pi(a)),c=s?t.fromEquirectangular(i,c):t.fromCubemap(i,c),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),c.texture;if(c!==void 0)return c.texture;{let h=i.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Pi(a)),c=s?t.fromEquirectangular(i):t.fromCubemap(i),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),i.addEventListener("dispose",n),c.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Cm(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Im(a,e,t,n){let i={},r=new WeakMap;function s(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",s),delete i[l.id];let h=r.get(l);h&&(e.remove(h),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let g=0,b=_.length;g<b;g+=3){let v=_[g+0],f=_[g+1],x=_[g+2];l.push(v,f,f,x,x,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let g=0,b=_.length/3-1;g<b;g+=3){let v=g+0,f=g+1,x=g+2;l.push(v,f,f,x,x,v)}}}let p=new(vh(l)?es:$a)(l,1);p.version=d;let m=r.get(c);m&&e.remove(m),r.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",s),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],a.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=r.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return r.get(c)}}}function Pm(a,e,t){let n,i,r;function s(o,c,l){l!==0&&(a.drawElementsInstanced(n,c,i,o*r,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,r=o.bytesPerElement},this.render=function(o,c){a.drawElements(n,c,i,o*r),t.update(c,n,1)},this.renderInstances=s,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/r,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,i,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Lm(a){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case a.TRIANGLES:e.triangles+=i*(t/3);break;case a.LINES:e.lines+=i*(t/2);break;case a.LINE_STRIP:e.lines+=i*(t-1);break;case a.LINE_LOOP:e.lines+=i*t;break;case a.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Dm(a,e,t){let n=new WeakMap,i=new ht;return{update:function(r,s,o){let c=r.morphTargetInfluences,l=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(s);if(u===void 0||u.count!==h){let R=function(){T.dispose(),n.delete(s),s.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let d=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,_=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],b=s.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let f=s.attributes.position.count*v,x=1;f>e.maxTextureSize&&(x=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);let E=new Float32Array(f*x*4*h),T=new Qa(E,f,x,h);T.type=Ln,T.needsUpdate=!0;let P=4*v;for(let I=0;I<h;I++){let N=_[I],U=g[I],O=b[I],J=f*x*4*I;for(let G=0;G<N.count;G++){let K=G*P;d===!0&&(i.fromBufferAttribute(N,G),E[J+K+0]=i.x,E[J+K+1]=i.y,E[J+K+2]=i.z,E[J+K+3]=0),p===!0&&(i.fromBufferAttribute(U,G),E[J+K+4]=i.x,E[J+K+5]=i.y,E[J+K+6]=i.z,E[J+K+7]=0),m===!0&&(i.fromBufferAttribute(O,G),E[J+K+8]=i.x,E[J+K+9]=i.y,E[J+K+10]=i.z,E[J+K+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new ce(f,x)},n.set(s,u),s.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let p=s.morphTargetsRelative?1:1-d;o.getUniforms().setValue(a,"morphTargetBaseInfluence",p),o.getUniforms().setValue(a,"morphTargetInfluences",c)}o.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}}}function Um(a,e,t,n){let i=new WeakMap;function r(s){let o=s.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=n.render.frame,c=s.geometry,l=e.get(s,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",r)===!1&&s.addEventListener("dispose",r),i.get(s)!==o&&(t.update(s.instanceMatrix,a.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,a.ARRAY_BUFFER),i.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var Kp=new Ot,Pp=new ls(1,1),Jp=new Qa,Zp=new vo,Qp=new ts,Lp=[],Dp=[],Up=new Float32Array(16),Np=new Float32Array(9),Fp=new Float32Array(4);function Ra(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=Lp[i];if(r===void 0&&(r=new Float32Array(i),Lp[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function kt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function zt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ml(a,e){let t=Dp[e];t===void 0&&(t=new Int32Array(e),Dp[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Nm(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Fm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2fv(this.addr,e),zt(t,e)}}function Om(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;a.uniform3fv(this.addr,e),zt(t,e)}}function Bm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4fv(this.addr,e),zt(t,e)}}function km(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Fp.set(n),a.uniformMatrix2fv(this.addr,!1,Fp),zt(t,n)}}function zm(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Np.set(n),a.uniformMatrix3fv(this.addr,!1,Np),zt(t,n)}}function Hm(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Up.set(n),a.uniformMatrix4fv(this.addr,!1,Up),zt(t,n)}}function Gm(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Vm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2iv(this.addr,e),zt(t,e)}}function Wm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3iv(this.addr,e),zt(t,e)}}function jm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4iv(this.addr,e),zt(t,e)}}function Xm(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function qm(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2uiv(this.addr,e),zt(t,e)}}function Ym(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3uiv(this.addr,e),zt(t,e)}}function Km(a,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4uiv(this.addr,e),zt(t,e)}}function Jm(a,e,t){let n=this.cache,i=t.allocateTextureUnit(),r;n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),this.type===a.SAMPLER_2D_SHADOW?(Pp.compareFunction=gh,r=Pp):r=Kp,t.setTexture2D(e||r,i)}function Zm(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function Qm(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qp,i)}function $m(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function eg(a,e){a.uniform1fv(this.addr,e)}function tg(a,e){let t=Ra(e,this.size,2);a.uniform2fv(this.addr,t)}function ng(a,e){let t=Ra(e,this.size,3);a.uniform3fv(this.addr,t)}function ig(a,e){let t=Ra(e,this.size,4);a.uniform4fv(this.addr,t)}function rg(a,e){let t=Ra(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function ag(a,e){let t=Ra(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function sg(a,e){let t=Ra(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function og(a,e){a.uniform1iv(this.addr,e)}function lg(a,e){a.uniform2iv(this.addr,e)}function cg(a,e){a.uniform3iv(this.addr,e)}function hg(a,e){a.uniform4iv(this.addr,e)}function ug(a,e){a.uniform1uiv(this.addr,e)}function dg(a,e){a.uniform2uiv(this.addr,e)}function pg(a,e){a.uniform3uiv(this.addr,e)}function fg(a,e){a.uniform4uiv(this.addr,e)}function mg(a,e,t){let n=this.cache,i=e.length,r=Ml(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Kp,r[s])}function gg(a,e,t){let n=this.cache,i=e.length,r=Ml(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Zp,r[s])}function bg(a,e,t){let n=this.cache,i=e.length,r=Ml(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Qp,r[s])}function vg(a,e,t){let n=this.cache,i=e.length,r=Ml(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Jp,r[s])}var Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return km;case 35675:return zm;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return jm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return $m}})(t.type)}},Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return ag;case 35676:return sg;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return pg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return vg}})(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function Op(a,e){a.seq.push(e),a.map[e.id]=e}function _g(a,e,t){let n=a.name,i=n.length;for(Rh.lastIndex=0;;){let r=Rh.exec(n),s=Rh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o|=0),l===void 0||l==="["&&s+2===i){Op(t,l===void 0?new Ch(o,a,e):new Ih(o,a,e));break}{let h=t.map[o];h===void 0&&(h=new Ph(o),Op(t,h)),t=h}}}var Aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i);_g(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function Bp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var xg=0,kp=new Xe;function zp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),i=(a.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)})(a.getShaderSource(e),s)}return i}function yg(a,e){let t=(function(n){at._getMatrix(kp,at.workingColorSpace,n);let i=`mat3( ${kp.elements.map(r=>r.toFixed(4))} )`;switch(at.getTransfer(n)){case Ja:return[i,"LinearTransferOETF"];case mt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mg(a,e){let t;switch(e){case Yd:t="Linear";break;case Kd:t="Reinhard";break;case Jd:t="Cineon";break;case Zd:t="ACESFilmic";break;case al:t="AgX";break;case $d:t="Neutral";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xl=new S;function Sg(){return at.getLuminanceCoefficients(xl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${xl.x.toFixed(4)}, ${xl.y.toFixed(4)}, ${xl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ls(a){return a!==""}function Hp(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(a){return a.replace(Tg,wg)}var Eg=new Map;function wg(a,e){let t=Qe[e];if(t===void 0){let n=Eg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Lh(t)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(a){return a.replace(Ag,Rg)}function Rg(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wp(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cg(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,c=(function(U){let O="SHADOWMAP_TYPE_BASIC";return U.shadowMapType===Pc?O="SHADOWMAP_TYPE_PCF":U.shadowMapType===Td?O="SHADOWMAP_TYPE_PCF_SOFT":U.shadowMapType===ai&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(U){let O="ENVMAP_TYPE_CUBE";if(U.envMap)switch(U.envMapMode){case ya:case wr:O="ENVMAP_TYPE_CUBE";break;case As:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(U){let O="ENVMAP_MODE_REFLECTION";return U.envMap&&U.envMapMode===wr&&(O="ENVMAP_MODE_REFRACTION"),O})(t),u=(function(U){let O="ENVMAP_BLENDING_NONE";if(U.envMap)switch(U.combine){case jd:O="ENVMAP_BLENDING_MULTIPLY";break;case Xd:O="ENVMAP_BLENDING_MIX";break;case qd:O="ENVMAP_BLENDING_ADD"}return O})(t),d=(function(U){let O=U.envMapCubeUVHeight;if(O===null)return null;let J=Math.log2(O)-2,G=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:G,maxMip:J}})(t),p=(function(U){return[U.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",U.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)})(t),m=(function(U){let O=[];for(let J in U){let G=U[J];G!==!1&&O.push("#define "+J+" "+G)}return O.join(`
`)})(r),_=i.createProgram(),g,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ls).join(`
`),g.length>0&&(g+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ls).join(`
`),b.length>0&&(b+=`
`)):(g=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),b=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),s=Lh(s),s=Hp(s,t),s=Gp(s,t),o=Lh(o),o=Hp(o,t),o=Gp(o,t),s=Vp(s),o=Vp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,b=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let f=v+g+s,x=v+b+o,E=Bp(i,i.VERTEX_SHADER,f),T=Bp(i,i.FRAGMENT_SHADER,x);function P(U){if(a.debug.checkShaderErrors){let O=i.getProgramInfoLog(_)||"",J=i.getShaderInfoLog(E)||"",G=i.getShaderInfoLog(T)||"",K=O.trim(),Z=J.trim(),ae=G.trim(),ie=!0,le=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ie=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,E,T);else{let Le=zp(i,E,"vertex"),we=zp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+Le+`
`+we)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):Z!==""&&ae!==""||(le=!1);le&&(U.diagnostics={runnable:ie,programLog:K,vertexShader:{log:Z,prefix:g},fragmentShader:{log:ae,prefix:b}})}i.deleteShader(E),i.deleteShader(T),R=new Aa(i,_),I=(function(O,J){let G={},K=O.getProgramParameter(J,O.ACTIVE_ATTRIBUTES);for(let Z=0;Z<K;Z++){let ae=O.getActiveAttrib(J,Z),ie=ae.name,le=1;ae.type===O.FLOAT_MAT2&&(le=2),ae.type===O.FLOAT_MAT3&&(le=3),ae.type===O.FLOAT_MAT4&&(le=4),G[ie]={type:ae.type,location:O.getAttribLocation(J,ie),locationSize:le}}return G})(i,_)}let R,I;i.attachShader(_,E),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return R===void 0&&P(this),R},this.getAttributes=function(){return I===void 0&&P(this),I};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}var Ig=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uh(e),t.set(e,n)),n}},Uh=class{constructor(e){this.id=Ig++,this.code=e,this.usedTimes=0}};function Pg(a,e,t,n,i,r,s){let o=new aa,c=new Dh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}return{getParameters:function(g,b,v,f,x){let E=f.fog,T=x.geometry,P=g.isMeshStandardMaterial?f.environment:null,R=(g.isMeshStandardMaterial?t:e).get(g.envMap||P),I=R&&R.mapping===As?R.image.height:null,N=m[g.type];g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let U=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,O=U!==void 0?U.length:0,J,G,K,Z,ae=0;if(T.morphAttributes.position!==void 0&&(ae=1),T.morphAttributes.normal!==void 0&&(ae=2),T.morphAttributes.color!==void 0&&(ae=3),N){let tt=li[N];J=tt.vertexShader,G=tt.fragmentShader}else J=g.vertexShader,G=g.fragmentShader,c.update(g),K=c.getVertexShaderID(g),Z=c.getFragmentShaderID(g);let ie=a.getRenderTarget(),le=a.state.buffers.depth.getReversed(),Le=x.isInstancedMesh===!0,we=x.isBatchedMesh===!0,Pe=!!g.map,se=!!g.matcap,be=!!R,ge=!!g.aoMap,Fe=!!g.lightMap,Me=!!g.bumpMap,A=!!g.normalMap,w=!!g.displacementMap,H=!!g.emissiveMap,B=!!g.metalnessMap,M=!!g.roughnessMap,C=g.anisotropy>0,z=g.clearcoat>0,L=g.dispersion>0,te=g.iridescence>0,X=g.sheen>0,q=g.transmission>0,he=C&&!!g.anisotropyMap,Se=z&&!!g.clearcoatMap,fe=z&&!!g.clearcoatNormalMap,me=z&&!!g.clearcoatRoughnessMap,Ce=te&&!!g.iridescenceMap,Ge=te&&!!g.iridescenceThicknessMap,Ke=X&&!!g.sheenColorMap,qe=X&&!!g.sheenRoughnessMap,re=!!g.specularMap,ne=!!g.specularColorMap,oe=!!g.specularIntensityMap,Ae=q&&!!g.transmissionMap,Je=q&&!!g.thicknessMap,xe=!!g.gradientMap,We=!!g.alphaMap,ke=g.alphaTest>0,Pt=!!g.alphaHash,vt=!!g.extensions,F=Ci;g.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(F=a.toneMapping));let st={shaderID:N,shaderType:g.type,shaderName:g.name,vertexShader:J,fragmentShader:G,defines:g.defines,customVertexShaderID:K,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:we,batchingColor:we&&x._colorsTexture!==null,instancing:Le,instancingColor:Le&&x.instanceColor!==null,instancingMorph:Le&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?a.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:jt,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:se,envMap:be,envMapMode:be&&R.mapping,envMapCubeUVHeight:I,aoMap:ge,lightMap:Fe,bumpMap:Me,normalMap:A,displacementMap:d&&w,emissiveMap:H,normalMapObjectSpace:A&&g.normalMapType===lp,normalMapTangentSpace:A&&g.normalMapType===op,metalnessMap:B,roughnessMap:M,anisotropy:C,anisotropyMap:he,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:fe,clearcoatRoughnessMap:me,dispersion:L,iridescence:te,iridescenceMap:Ce,iridescenceThicknessMap:Ge,sheen:X,sheenColorMap:Ke,sheenRoughnessMap:qe,specularMap:re,specularColorMap:ne,specularIntensityMap:oe,transmission:q,transmissionMap:Ae,thicknessMap:Je,gradientMap:xe,opaque:g.transparent===!1&&g.blending===Es&&g.alphaToCoverage===!1,alphaMap:We,alphaTest:ke,alphaHash:Pt,combine:g.combine,mapUv:Pe&&_(g.map.channel),aoMapUv:ge&&_(g.aoMap.channel),lightMapUv:Fe&&_(g.lightMap.channel),bumpMapUv:Me&&_(g.bumpMap.channel),normalMapUv:A&&_(g.normalMap.channel),displacementMapUv:w&&_(g.displacementMap.channel),emissiveMapUv:H&&_(g.emissiveMap.channel),metalnessMapUv:B&&_(g.metalnessMap.channel),roughnessMapUv:M&&_(g.roughnessMap.channel),anisotropyMapUv:he&&_(g.anisotropyMap.channel),clearcoatMapUv:Se&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(g.sheenRoughnessMap.channel),specularMapUv:re&&_(g.specularMap.channel),specularColorMapUv:ne&&_(g.specularColorMap.channel),specularIntensityMapUv:oe&&_(g.specularIntensityMap.channel),transmissionMapUv:Ae&&_(g.transmissionMap.channel),thicknessMapUv:Je&&_(g.thicknessMap.channel),alphaMapUv:We&&_(g.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(A||C),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!T.attributes.uv&&(Pe||We),fog:!!E,useFog:g.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:x.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&v.length>0,shadowMapType:a.shadowMap.type,toneMapping:F,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===mt,decodeVideoTextureEmissive:H&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bt,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:vt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&g.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st},getProgramCacheKey:function(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let v in g.defines)b.push(v),b.push(g.defines[v]);return g.isRawShaderMaterial===!1&&((function(v,f){v.push(f.precision),v.push(f.outputColorSpace),v.push(f.envMapMode),v.push(f.envMapCubeUVHeight),v.push(f.mapUv),v.push(f.alphaMapUv),v.push(f.lightMapUv),v.push(f.aoMapUv),v.push(f.bumpMapUv),v.push(f.normalMapUv),v.push(f.displacementMapUv),v.push(f.emissiveMapUv),v.push(f.metalnessMapUv),v.push(f.roughnessMapUv),v.push(f.anisotropyMapUv),v.push(f.clearcoatMapUv),v.push(f.clearcoatNormalMapUv),v.push(f.clearcoatRoughnessMapUv),v.push(f.iridescenceMapUv),v.push(f.iridescenceThicknessMapUv),v.push(f.sheenColorMapUv),v.push(f.sheenRoughnessMapUv),v.push(f.specularMapUv),v.push(f.specularColorMapUv),v.push(f.specularIntensityMapUv),v.push(f.transmissionMapUv),v.push(f.thicknessMapUv),v.push(f.combine),v.push(f.fogExp2),v.push(f.sizeAttenuation),v.push(f.morphTargetsCount),v.push(f.morphAttributeCount),v.push(f.numDirLights),v.push(f.numPointLights),v.push(f.numSpotLights),v.push(f.numSpotLightMaps),v.push(f.numHemiLights),v.push(f.numRectAreaLights),v.push(f.numDirLightShadows),v.push(f.numPointLightShadows),v.push(f.numSpotLightShadows),v.push(f.numSpotLightShadowsWithMaps),v.push(f.numLightProbes),v.push(f.shadowMapType),v.push(f.toneMapping),v.push(f.numClippingPlanes),v.push(f.numClipIntersection),v.push(f.depthPacking)})(b,g),(function(v,f){o.disableAll(),f.supportsVertexTextures&&o.enable(0),f.instancing&&o.enable(1),f.instancingColor&&o.enable(2),f.instancingMorph&&o.enable(3),f.matcap&&o.enable(4),f.envMap&&o.enable(5),f.normalMapObjectSpace&&o.enable(6),f.normalMapTangentSpace&&o.enable(7),f.clearcoat&&o.enable(8),f.iridescence&&o.enable(9),f.alphaTest&&o.enable(10),f.vertexColors&&o.enable(11),f.vertexAlphas&&o.enable(12),f.vertexUv1s&&o.enable(13),f.vertexUv2s&&o.enable(14),f.vertexUv3s&&o.enable(15),f.vertexTangents&&o.enable(16),f.anisotropy&&o.enable(17),f.alphaHash&&o.enable(18),f.batching&&o.enable(19),f.dispersion&&o.enable(20),f.batchingColor&&o.enable(21),f.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),f.fog&&o.enable(0),f.useFog&&o.enable(1),f.flatShading&&o.enable(2),f.logarithmicDepthBuffer&&o.enable(3),f.reversedDepthBuffer&&o.enable(4),f.skinning&&o.enable(5),f.morphTargets&&o.enable(6),f.morphNormals&&o.enable(7),f.morphColors&&o.enable(8),f.premultipliedAlpha&&o.enable(9),f.shadowMapEnabled&&o.enable(10),f.doubleSided&&o.enable(11),f.flipSided&&o.enable(12),f.useDepthPacking&&o.enable(13),f.dithering&&o.enable(14),f.transmission&&o.enable(15),f.sheen&&o.enable(16),f.opaque&&o.enable(17),f.pointsUvs&&o.enable(18),f.decodeVideoTexture&&o.enable(19),f.decodeVideoTextureEmissive&&o.enable(20),f.alphaToCoverage&&o.enable(21),v.push(o.mask)})(b,g),b.push(a.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()},getUniforms:function(g){let b=m[g.type],v;if(b){let f=li[b];v=_p.clone(f.uniforms)}else v=g.uniforms;return v},acquireProgram:function(g,b){let v;for(let f=0,x=h.length;f<x;f++){let E=h[f];if(E.cacheKey===b){v=E,++v.usedTimes;break}}return v===void 0&&(v=new Cg(a,b,g,r),h.push(v)),v},releaseProgram:function(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),g.destroy()}},releaseShaderCache:function(g){c.remove(g)},programs:h,dispose:function(){c.dispose()}}}function Lg(){let a=new WeakMap;return{has:function(e){return a.has(e)},get:function(e){let t=a.get(e);return t===void 0&&(t={},a.set(e,t)),t},remove:function(e){a.delete(e)},update:function(e,t,n){a.get(e)[t]=n},dispose:function(){a=new WeakMap}}}function Dg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function jp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Xp(){let a=[],e=0,t=[],n=[],i=[];function r(s,o,c,l,h,u){let d=a[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:c,groupOrder:l,renderOrder:s.renderOrder,z:h,group:u},a[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(s,o,c,l,h,u){let d=r(s,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(s,o,c,l,h,u){let d=r(s,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=a.length;s<o;s++){let c=a[s];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(s,o){t.length>1&&t.sort(s||Dg),n.length>1&&n.sort(o||jp),i.length>1&&i.sort(o||jp)}}}function Ug(){let a=new WeakMap;return{get:function(e,t){let n=a.get(e),i;return n===void 0?(i=new Xp,a.set(e,[i])):t>=n.length?(i=new Xp,n.push(i)):i=n[t],i},dispose:function(){a=new WeakMap}}}function Ng(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ee};break;case"SpotLight":t={position:new S,direction:new S,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new S,halfWidth:new S,halfHeight:new S}}return a[e.id]=t,t}}}var Fg=0;function Og(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Bg(a){let e=new Ng,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let i=new S,r=new Be,s=new Be;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,d=0,p=0,m=0,_=0,g=0,b=0,v=0,f=0,x=0,E=0;o.sort(Og);for(let P=0,R=o.length;P<R;P++){let I=o[P],N=I.color,U=I.intensity,O=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=N.r*U,l+=N.g*U,h+=N.b*U;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],U);E++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Z=t.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=J,n.directionalShadowMatrix[u]=I.shadow.matrix,g++}n.directional[u]=G,u++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[p]=G;let K=I.shadow;if(I.map&&(n.spotLightMap[f]=I.map,f++,K.updateMatrices(I),I.castShadow&&x++),n.spotLightMatrix[p]=K.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=J,v++}p++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(.5*I.width,0,0),G.halfHeight.set(0,.5*I.height,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let K=I.shadow,Z=t.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,n.pointShadow[d]=Z,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=I.shadow.matrix,b++}n.point[d]=G,d++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(U),G.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[_]=G,_++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===_&&T.numDirectionalShadows===g&&T.numPointShadows===b&&T.numSpotShadows===v&&T.numSpotMaps===f&&T.numLightProbes===E||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+f-x,n.spotLightMap.length=f,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=_,T.numDirectionalShadows=g,T.numPointShadows=b,T.numSpotShadows=v,T.numSpotMaps=f,T.numLightProbes=E,n.version=Fg++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,m=c.matrixWorldInverse;for(let _=0,g=o.length;_<g;_++){let b=o[_];if(b.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),l++}else if(b.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(b.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(.5*b.width,0,0),v.halfHeight.set(0,.5*b.height,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function qp(a){let e=new Bg(a),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){i.camera=r,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function kg(a){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),r;return i===void 0?(r=new qp(a),e.set(t,[r])):n>=i.length?(r=new qp(a),i.push(r)):r=i[n],r},dispose:function(){e=new WeakMap}}}function zg(a,e,t){let n=new Yi,i=new ce,r=new ce,s=new ht,o=new Go({depthPacking:sp}),c=new Vo,l={},h=t.maxTextureSize,u={[Zi]:Vt,[Vt]:Zi,[Bt]:Bt},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new ut;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let b=this.type;function v(T,P){let R=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(P,null,R,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(P,null,R,p,_,null)}function f(T,P,R,I){let N=null,U=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)N=U;else if(N=R.isPointLight===!0?c:o,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=N.uuid,J=P.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let K=G[J];K===void 0&&(K=N.clone(),G[J]=K,P.addEventListener("dispose",E)),N=K}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=I===ai?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(a.properties.get(N).light=R),N}function x(T,P,R,I,N){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let O=e.update(T),J=T.material;if(Array.isArray(J)){let G=O.groups;for(let K=0,Z=G.length;K<Z;K++){let ae=G[K],ie=J[ae.materialIndex];if(ie&&ie.visible){let le=f(T,ie,I,N);T.onBeforeShadow(a,T,P,R,O,le,ae),a.renderBufferDirect(R,null,O,le,T,ae),T.onAfterShadow(a,T,P,R,O,le,ae)}}}else if(J.visible){let G=f(T,J,I,N);T.onBeforeShadow(a,T,P,R,O,G,null),a.renderBufferDirect(R,null,O,G,T,null),T.onAfterShadow(a,T,P,R,O,G,null)}}let U=T.children;for(let O=0,J=U.length;O<J;O++)x(U[O],P,R,I,N)}function E(T){T.target.removeEventListener("dispose",E);for(let P in l){let R=l[P],I=T.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}this.render=function(T,P,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let I=a.getRenderTarget(),N=a.getActiveCubeFace(),U=a.getActiveMipmapLevel(),O=a.state;O.setBlending(Qi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=b!==ai&&this.type===ai,G=b===ai&&this.type!==ai;for(let K=0,Z=T.length;K<Z;K++){let ae=T[K],ie=ae.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;i.copy(ie.mapSize);let le=ie.getFrameExtents();if(i.multiply(le),r.copy(ie.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,ie.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,ie.mapSize.y=r.y)),ie.map===null||J===!0||G===!0){let we=this.type!==ai?{minFilter:xn,magFilter:xn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new hn(i.x,i.y,we),ie.map.texture.name=ae.name+".shadowMap",ie.camera.updateProjectionMatrix()}a.setRenderTarget(ie.map),a.clear();let Le=ie.getViewportCount();for(let we=0;we<Le;we++){let Pe=ie.getViewport(we);s.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(s),ie.updateMatrices(ae,we),n=ie.getFrustum(),x(P,R,ie.camera,ae,this.type)}ie.isPointLightShadow!==!0&&this.type===ai&&v(ie,R),ie.needsUpdate=!1}b=this.type,g.needsUpdate=!1,a.setRenderTarget(I,N,U)}}var Hg={[Qo]:$o,[el]:il,[tl]:rl,[ws]:nl,[$o]:Qo,[il]:el,[rl]:tl,[nl]:ws};function Gg(a,e){let t=new function(){let M=!1,C=new ht,z=null,L=new ht(0,0,0,0);return{setMask:function(te){z===te||M||(a.colorMask(te,te,te,te),z=te)},setLocked:function(te){M=te},setClear:function(te,X,q,he,Se){Se===!0&&(te*=he,X*=he,q*=he),C.set(te,X,q,he),L.equals(C)===!1&&(a.clearColor(te,X,q,he),L.copy(C))},reset:function(){M=!1,z=null,L.set(-1,0,0,0)}}},n=new function(){let M=!1,C=!1,z=null,L=null,te=null;return{setReversed:function(X){if(C!==X){let q=e.get("EXT_clip_control");X?q.clipControlEXT(q.LOWER_LEFT_EXT,q.ZERO_TO_ONE_EXT):q.clipControlEXT(q.LOWER_LEFT_EXT,q.NEGATIVE_ONE_TO_ONE_EXT),C=X;let he=te;te=null,this.setClear(he)}},getReversed:function(){return C},setTest:function(X){X?be(a.DEPTH_TEST):ge(a.DEPTH_TEST)},setMask:function(X){z===X||M||(a.depthMask(X),z=X)},setFunc:function(X){if(C&&(X=Hg[X]),L!==X){switch(X){case Qo:a.depthFunc(a.NEVER);break;case $o:a.depthFunc(a.ALWAYS);break;case el:a.depthFunc(a.LESS);break;case ws:a.depthFunc(a.LEQUAL);break;case tl:a.depthFunc(a.EQUAL);break;case nl:a.depthFunc(a.GEQUAL);break;case il:a.depthFunc(a.GREATER);break;case rl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}L=X}},setLocked:function(X){M=X},setClear:function(X){te!==X&&(C&&(X=1-X),a.clearDepth(X),te=X)},reset:function(){M=!1,z=null,L=null,te=null,C=!1}}},i=new function(){let M=!1,C=null,z=null,L=null,te=null,X=null,q=null,he=null,Se=null;return{setTest:function(fe){M||(fe?be(a.STENCIL_TEST):ge(a.STENCIL_TEST))},setMask:function(fe){C===fe||M||(a.stencilMask(fe),C=fe)},setFunc:function(fe,me,Ce){z===fe&&L===me&&te===Ce||(a.stencilFunc(fe,me,Ce),z=fe,L=me,te=Ce)},setOp:function(fe,me,Ce){X===fe&&q===me&&he===Ce||(a.stencilOp(fe,me,Ce),X=fe,q=me,he=Ce)},setLocked:function(fe){M=fe},setClear:function(fe){Se!==fe&&(a.clearStencil(fe),Se=fe)},reset:function(){M=!1,C=null,z=null,L=null,te=null,X=null,q=null,he=null,Se=null}}},r=new WeakMap,s=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,g=null,b=null,v=null,f=null,x=new Ee(0,0,0),E=0,T=!1,P=null,R=null,I=null,N=null,U=null,O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,G=0,K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=G>=2);let Z=null,ae={},ie=a.getParameter(a.SCISSOR_BOX),le=a.getParameter(a.VIEWPORT),Le=new ht().fromArray(ie),we=new ht().fromArray(le);function Pe(M,C,z,L){let te=new Uint8Array(4),X=a.createTexture();a.bindTexture(M,X),a.texParameteri(M,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(M,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let q=0;q<z;q++)M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY?a.texImage3D(C,0,a.RGBA,1,1,L,0,a.RGBA,a.UNSIGNED_BYTE,te):a.texImage2D(C+q,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,te);return X}let se={};function be(M){o[M]!==!0&&(a.enable(M),o[M]=!0)}function ge(M){o[M]!==!1&&(a.disable(M),o[M]=!1)}se[a.TEXTURE_2D]=Pe(a.TEXTURE_2D,a.TEXTURE_2D,1),se[a.TEXTURE_CUBE_MAP]=Pe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[a.TEXTURE_2D_ARRAY]=Pe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),se[a.TEXTURE_3D]=Pe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),be(a.DEPTH_TEST),n.setFunc(ws),w(!1),H(Ic),be(a.CULL_FACE),A(Qi);let Fe={[xa]:a.FUNC_ADD,[wd]:a.FUNC_SUBTRACT,[Ad]:a.FUNC_REVERSE_SUBTRACT};Fe[Rd]=a.MIN,Fe[Cd]=a.MAX;let Me={[Id]:a.ZERO,[Pd]:a.ONE,[Ld]:a.SRC_COLOR,[Ud]:a.SRC_ALPHA,[zd]:a.SRC_ALPHA_SATURATE,[Bd]:a.DST_COLOR,[Fd]:a.DST_ALPHA,[Dd]:a.ONE_MINUS_SRC_COLOR,[Nd]:a.ONE_MINUS_SRC_ALPHA,[kd]:a.ONE_MINUS_DST_COLOR,[Od]:a.ONE_MINUS_DST_ALPHA,[Hd]:a.CONSTANT_COLOR,[Gd]:a.ONE_MINUS_CONSTANT_COLOR,[Vd]:a.CONSTANT_ALPHA,[Wd]:a.ONE_MINUS_CONSTANT_ALPHA};function A(M,C,z,L,te,X,q,he,Se,fe){if(M!==Qi){if(d===!1&&(be(a.BLEND),d=!0),M===Ed)te=te||C,X=X||z,q=q||L,C===m&&te===b||(a.blendEquationSeparate(Fe[C],Fe[te]),m=C,b=te),z===_&&L===g&&X===v&&q===f||(a.blendFuncSeparate(Me[z],Me[L],Me[X],Me[q]),_=z,g=L,v=X,f=q),he.equals(x)!==!1&&Se===E||(a.blendColor(he.r,he.g,he.b,Se),x.copy(he),E=Se),p=M,T=!1;else if(M!==p||fe!==T){if(m===xa&&b===xa||(a.blendEquation(a.FUNC_ADD),m=xa,b=xa),fe)switch(M){case Es:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Er:a.blendFunc(a.ONE,a.ONE);break;case Lc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Dc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Es:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Er:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}_=null,g=null,v=null,f=null,x.set(0,0,0),E=0,p=M,T=fe}}else d===!0&&(ge(a.BLEND),d=!1)}function w(M){P!==M&&(M?a.frontFace(a.CW):a.frontFace(a.CCW),P=M)}function H(M){M!==Md?(be(a.CULL_FACE),M!==R&&(M===Ic?a.cullFace(a.BACK):M===Sd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ge(a.CULL_FACE),R=M}function B(M,C,z){M?(be(a.POLYGON_OFFSET_FILL),N===C&&U===z||(a.polygonOffset(C,z),N=C,U=z)):ge(a.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:be,disable:ge,bindFramebuffer:function(M,C){return c[M]!==C&&(a.bindFramebuffer(M,C),c[M]=C,M===a.DRAW_FRAMEBUFFER&&(c[a.FRAMEBUFFER]=C),M===a.FRAMEBUFFER&&(c[a.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(M,C){let z=h,L=!1;if(M){z=l.get(C),z===void 0&&(z=[],l.set(C,z));let te=M.textures;if(z.length!==te.length||z[0]!==a.COLOR_ATTACHMENT0){for(let X=0,q=te.length;X<q;X++)z[X]=a.COLOR_ATTACHMENT0+X;z.length=te.length,L=!0}}else z[0]!==a.BACK&&(z[0]=a.BACK,L=!0);L&&a.drawBuffers(z)},useProgram:function(M){return u!==M&&(a.useProgram(M),u=M,!0)},setBlending:A,setMaterial:function(M,C){M.side===Bt?ge(a.CULL_FACE):be(a.CULL_FACE);let z=M.side===Vt;C&&(z=!z),w(z),M.blending===Es&&M.transparent===!1?A(Qi):A(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let L=M.stencilWrite;i.setTest(L),L&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),B(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):ge(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:w,setCullFace:H,setLineWidth:function(M){M!==I&&(J&&a.lineWidth(M),I=M)},setPolygonOffset:B,setScissorTest:function(M){M?be(a.SCISSOR_TEST):ge(a.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=a.TEXTURE0+O-1),Z!==M&&(a.activeTexture(M),Z=M)},bindTexture:function(M,C,z){z===void 0&&(z=Z===null?a.TEXTURE0+O-1:Z);let L=ae[z];L===void 0&&(L={type:void 0,texture:void 0},ae[z]=L),L.type===M&&L.texture===C||(Z!==z&&(a.activeTexture(z),Z=z),a.bindTexture(M,C||se[M]),L.type=M,L.texture=C)},unbindTexture:function(){let M=ae[Z];M!==void 0&&M.type!==void 0&&(a.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{a.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{a.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{a.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,C){let z=s.get(C);z===void 0&&(z=new WeakMap,s.set(C,z));let L=z.get(M);L===void 0&&(L=a.getUniformBlockIndex(C,M.name),z.set(M,L))},uniformBlockBinding:function(M,C){let z=s.get(C).get(M);r.get(C)!==z&&(a.uniformBlockBinding(C,z,M.__bindingPointIndex),r.set(C,z))},texStorage2D:function(){try{a.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{a.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{a.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{a.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){Le.equals(M)===!1&&(a.scissor(M.x,M.y,M.z,M.w),Le.copy(M))},viewport:function(M){we.equals(M)===!1&&(a.viewport(M.x,M.y,M.z,M.w),we.copy(M))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),n.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),o={},Z=null,ae={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,g=null,b=null,v=null,f=null,x=new Ee(0,0,0),E=0,T=!1,P=null,R=null,I=null,N=null,U=null,Le.set(0,0,a.canvas.width,a.canvas.height),we.set(0,0,a.canvas.width,a.canvas.height),t.reset(),n.reset(),i.reset()}}}function Vg(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return p?new OffscreenCanvas(A,w):na("canvas")}function _(A,w,H){let B=1,M=Me(A);if((M.width>H||M.height>H)&&(B=H/Math.max(M.width,M.height)),B<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let C=Math.floor(B*M.width),z=Math.floor(B*M.height);u===void 0&&(u=m(C,z));let L=w?m(C,z):u;return L.width=C,L.height=z,L.getContext("2d").drawImage(A,0,0,C,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+C+"x"+z+")."),L}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),A}return A}function g(A){return A.generateMipmaps}function b(A){a.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function f(A,w,H,B,M=!1){if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let C=w;if(w===a.RED&&(H===a.FLOAT&&(C=a.R32F),H===a.HALF_FLOAT&&(C=a.R16F),H===a.UNSIGNED_BYTE&&(C=a.R8)),w===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(C=a.R8UI),H===a.UNSIGNED_SHORT&&(C=a.R16UI),H===a.UNSIGNED_INT&&(C=a.R32UI),H===a.BYTE&&(C=a.R8I),H===a.SHORT&&(C=a.R16I),H===a.INT&&(C=a.R32I)),w===a.RG&&(H===a.FLOAT&&(C=a.RG32F),H===a.HALF_FLOAT&&(C=a.RG16F),H===a.UNSIGNED_BYTE&&(C=a.RG8)),w===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(C=a.RG8UI),H===a.UNSIGNED_SHORT&&(C=a.RG16UI),H===a.UNSIGNED_INT&&(C=a.RG32UI),H===a.BYTE&&(C=a.RG8I),H===a.SHORT&&(C=a.RG16I),H===a.INT&&(C=a.RG32I)),w===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(C=a.RGB8UI),H===a.UNSIGNED_SHORT&&(C=a.RGB16UI),H===a.UNSIGNED_INT&&(C=a.RGB32UI),H===a.BYTE&&(C=a.RGB8I),H===a.SHORT&&(C=a.RGB16I),H===a.INT&&(C=a.RGB32I)),w===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(C=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(C=a.RGBA16UI),H===a.UNSIGNED_INT&&(C=a.RGBA32UI),H===a.BYTE&&(C=a.RGBA8I),H===a.SHORT&&(C=a.RGBA16I),H===a.INT&&(C=a.RGBA32I)),w===a.RGB&&(H===a.UNSIGNED_INT_5_9_9_9_REV&&(C=a.RGB9_E5),H===a.UNSIGNED_INT_10F_11F_11F_REV&&(C=a.R11F_G11F_B10F)),w===a.RGBA){let z=M?Ja:at.getTransfer(B);H===a.FLOAT&&(C=a.RGBA32F),H===a.HALF_FLOAT&&(C=a.RGBA16F),H===a.UNSIGNED_BYTE&&(C=z===mt?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(C=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(C=a.RGB5_A1)}return C!==a.R16F&&C!==a.R32F&&C!==a.RG16F&&C!==a.RG32F&&C!==a.RGBA16F&&C!==a.RGBA32F||e.get("EXT_color_buffer_float"),C}function x(A,w){let H;return A?w===null||w===Rr||w===Ta?H=a.DEPTH24_STENCIL8:w===Ln?H=a.DEPTH32F_STENCIL8:w===Sa&&(H=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rr||w===Ta?H=a.DEPTH_COMPONENT24:w===Ln?H=a.DEPTH_COMPONENT32F:w===Sa&&(H=a.DEPTH_COMPONENT16),H}function E(A,w){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){let w=A.target;w.removeEventListener("dispose",T),(function(H){let B=n.get(H);if(B.__webglInit===void 0)return;let M=H.source,C=d.get(M);if(C){let z=C[B.__cacheKey];z.usedTimes--,z.usedTimes===0&&R(H),Object.keys(C).length===0&&d.delete(M)}n.remove(H)})(w),w.isVideoTexture&&h.delete(w)}function P(A){let w=A.target;w.removeEventListener("dispose",P),(function(H){let B=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(B.__webglFramebuffer[C]))for(let z=0;z<B.__webglFramebuffer[C].length;z++)a.deleteFramebuffer(B.__webglFramebuffer[C][z]);else a.deleteFramebuffer(B.__webglFramebuffer[C]);B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[C])}else{if(Array.isArray(B.__webglFramebuffer))for(let C=0;C<B.__webglFramebuffer.length;C++)a.deleteFramebuffer(B.__webglFramebuffer[C]);else a.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let C=0;C<B.__webglColorRenderbuffer.length;C++)B.__webglColorRenderbuffer[C]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[C]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}let M=H.textures;for(let C=0,z=M.length;C<z;C++){let L=n.get(M[C]);L.__webglTexture&&(a.deleteTexture(L.__webglTexture),s.memory.textures--),n.remove(M[C])}n.remove(H)})(w)}function R(A){let w=n.get(A);a.deleteTexture(w.__webglTexture);let H=A.source;delete d.get(H)[w.__cacheKey],s.memory.textures--}let I=0;function N(A,w){let H=n.get(A);if(A.isVideoTexture&&(function(B){let M=s.render.frame;h.get(B)!==M&&(h.set(B,M),B.update())})(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let B=A.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void ae(H,A,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+w)}let U={[Qn]:a.REPEAT,[$n]:a.CLAMP_TO_EDGE,[ta]:a.MIRRORED_REPEAT},O={[xn]:a.NEAREST,[ll]:a.NEAREST_MIPMAP_NEAREST,[Ar]:a.NEAREST_MIPMAP_LINEAR,[cn]:a.LINEAR,[Ma]:a.LINEAR_MIPMAP_NEAREST,[si]:a.LINEAR_MIPMAP_LINEAR},J={[cp]:a.NEVER,[mp]:a.ALWAYS,[hp]:a.LESS,[gh]:a.LEQUAL,[up]:a.EQUAL,[fp]:a.GEQUAL,[dp]:a.GREATER,[pp]:a.NOTEQUAL};function G(A,w){if(w.type!==Ln||e.has("OES_texture_float_linear")!==!1||w.magFilter!==cn&&w.magFilter!==Ma&&w.magFilter!==Ar&&w.magFilter!==si&&w.minFilter!==cn&&w.minFilter!==Ma&&w.minFilter!==Ar&&w.minFilter!==si||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,U[w.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,U[w.wrapT]),A!==a.TEXTURE_3D&&A!==a.TEXTURE_2D_ARRAY||a.texParameteri(A,a.TEXTURE_WRAP_R,U[w.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,O[w.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==Ar&&w.minFilter!==si||w.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function K(A,w){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",T));let B=w.source,M=d.get(B);M===void 0&&(M={},d.set(B,M));let C=(function(z){let L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()})(w);if(C!==A.__cacheKey){M[C]===void 0&&(M[C]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,H=!0),M[C].usedTimes++;let z=M[A.__cacheKey];z!==void 0&&(M[A.__cacheKey].usedTimes--,z.usedTimes===0&&R(w)),A.__cacheKey=C,A.__webglTexture=M[C].texture}return H}function Z(A,w,H){return Math.floor(Math.floor(A/H)/w)}function ae(A,w,H){let B=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(B=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(B=a.TEXTURE_3D);let M=K(A,w),C=w.source;t.bindTexture(B,A.__webglTexture,a.TEXTURE0+H);let z=n.get(C);if(C.version!==z.__version||M===!0){t.activeTexture(a.TEXTURE0+H);let L=at.getPrimaries(at.workingColorSpace),te=w.colorSpace===Cr?null:at.getPrimaries(w.colorSpace),X=w.colorSpace===Cr||L===te?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let q=_(w.image,!1,i.maxTextureSize);q=Fe(w,q);let he=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),fe,me=f(w.internalFormat,he,Se,w.colorSpace,w.isVideoTexture);G(B,w);let Ce=w.mipmaps,Ge=w.isVideoTexture!==!0,Ke=z.__version===void 0||M===!0,qe=C.dataReady,re=E(w,q);if(w.isDepthTexture)me=x(w.format===Cs,w.type),Ke&&(Ge?t.texStorage2D(a.TEXTURE_2D,1,me,q.width,q.height):t.texImage2D(a.TEXTURE_2D,0,me,q.width,q.height,0,he,Se,null));else if(w.isDataTexture)if(Ce.length>0){Ge&&Ke&&t.texStorage2D(a.TEXTURE_2D,re,me,Ce[0].width,Ce[0].height);for(let ne=0,oe=Ce.length;ne<oe;ne++)fe=Ce[ne],Ge?qe&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,fe.width,fe.height,he,Se,fe.data):t.texImage2D(a.TEXTURE_2D,ne,me,fe.width,fe.height,0,he,Se,fe.data);w.generateMipmaps=!1}else Ge?(Ke&&t.texStorage2D(a.TEXTURE_2D,re,me,q.width,q.height),qe&&(function(ne,oe,Ae,Je){let xe=ne.updateRanges;if(xe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,oe.width,oe.height,Ae,Je,oe.data);else{xe.sort((F,st)=>F.start-st.start);let We=0;for(let F=1;F<xe.length;F++){let st=xe[We],tt=xe[F],ot=st.start+st.count,Wt=Z(tt.start,oe.width,4),Yt=Z(st.start,oe.width,4);tt.start<=ot+1&&Wt===Yt&&Z(tt.start+tt.count-1,oe.width,4)===Wt?st.count=Math.max(st.count,tt.start+tt.count-st.start):(++We,xe[We]=tt)}xe.length=We+1;let ke=a.getParameter(a.UNPACK_ROW_LENGTH),Pt=a.getParameter(a.UNPACK_SKIP_PIXELS),vt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,oe.width);for(let F=0,st=xe.length;F<st;F++){let tt=xe[F],ot=Math.floor(tt.start/4),Wt=Math.ceil(tt.count/4),Yt=ot%oe.width,Sn=Math.floor(ot/oe.width),Nn=Wt;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Yt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Sn),t.texSubImage2D(a.TEXTURE_2D,0,Yt,Sn,Nn,1,Ae,Je,oe.data)}ne.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,ke),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Pt),a.pixelStorei(a.UNPACK_SKIP_ROWS,vt)}})(w,q,he,Se)):t.texImage2D(a.TEXTURE_2D,0,me,q.width,q.height,0,he,Se,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&Ke&&t.texStorage3D(a.TEXTURE_2D_ARRAY,re,me,Ce[0].width,Ce[0].height,q.depth);for(let ne=0,oe=Ce.length;ne<oe;ne++)if(fe=Ce[ne],w.format!==Dn)if(he!==null)if(Ge){if(qe)if(w.layerUpdates.size>0){let Ae=Mh(fe.width,fe.height,w.format,w.type);for(let Je of w.layerUpdates){let xe=fe.data.subarray(Je*Ae/fe.data.BYTES_PER_ELEMENT,(Je+1)*Ae/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,Je,fe.width,fe.height,1,he,xe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,q.depth,he,fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ne,me,fe.width,fe.height,q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?qe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,q.depth,he,Se,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ne,me,fe.width,fe.height,q.depth,0,he,Se,fe.data)}else{Ge&&Ke&&t.texStorage2D(a.TEXTURE_2D,re,me,Ce[0].width,Ce[0].height);for(let ne=0,oe=Ce.length;ne<oe;ne++)fe=Ce[ne],w.format!==Dn?he!==null?Ge?qe&&t.compressedTexSubImage2D(a.TEXTURE_2D,ne,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,ne,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?qe&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,fe.width,fe.height,he,Se,fe.data):t.texImage2D(a.TEXTURE_2D,ne,me,fe.width,fe.height,0,he,Se,fe.data)}else if(w.isDataArrayTexture)if(Ge){if(Ke&&t.texStorage3D(a.TEXTURE_2D_ARRAY,re,me,q.width,q.height,q.depth),qe)if(w.layerUpdates.size>0){let ne=Mh(q.width,q.height,w.format,w.type);for(let oe of w.layerUpdates){let Ae=q.data.subarray(oe*ne/q.data.BYTES_PER_ELEMENT,(oe+1)*ne/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,oe,q.width,q.height,1,he,Se,Ae)}w.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,he,Se,q.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,me,q.width,q.height,q.depth,0,he,Se,q.data);else if(w.isData3DTexture)Ge?(Ke&&t.texStorage3D(a.TEXTURE_3D,re,me,q.width,q.height,q.depth),qe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,he,Se,q.data)):t.texImage3D(a.TEXTURE_3D,0,me,q.width,q.height,q.depth,0,he,Se,q.data);else if(w.isFramebufferTexture){if(Ke)if(Ge)t.texStorage2D(a.TEXTURE_2D,re,me,q.width,q.height);else{let ne=q.width,oe=q.height;for(let Ae=0;Ae<re;Ae++)t.texImage2D(a.TEXTURE_2D,Ae,me,ne,oe,0,he,Se,null),ne>>=1,oe>>=1}}else if(Ce.length>0){if(Ge&&Ke){let ne=Me(Ce[0]);t.texStorage2D(a.TEXTURE_2D,re,me,ne.width,ne.height)}for(let ne=0,oe=Ce.length;ne<oe;ne++)fe=Ce[ne],Ge?qe&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,he,Se,fe):t.texImage2D(a.TEXTURE_2D,ne,me,he,Se,fe);w.generateMipmaps=!1}else if(Ge){if(Ke){let ne=Me(q);t.texStorage2D(a.TEXTURE_2D,re,me,ne.width,ne.height)}qe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,he,Se,q)}else t.texImage2D(a.TEXTURE_2D,0,me,he,Se,q);g(w)&&b(B),z.__version=C.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ie(A,w,H,B,M,C){let z=r.convert(H.format,H.colorSpace),L=r.convert(H.type),te=f(H.internalFormat,z,L,H.colorSpace),X=n.get(w),q=n.get(H);if(q.__renderTarget=w,!X.__hasExternalTextures){let he=Math.max(1,w.width>>C),Se=Math.max(1,w.height>>C);M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY?t.texImage3D(M,C,te,he,Se,w.depth,0,z,L,null):t.texImage2D(M,C,te,he,Se,0,z,L,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),ge(w)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,B,M,q.__webglTexture,0,be(w)):(M===a.TEXTURE_2D||M>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,B,M,q.__webglTexture,C),t.bindFramebuffer(a.FRAMEBUFFER,null)}function le(A,w,H){if(a.bindRenderbuffer(a.RENDERBUFFER,A),w.depthBuffer){let B=w.depthTexture,M=B&&B.isDepthTexture?B.type:null,C=x(w.stencilBuffer,M),z=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,L=be(w);ge(w)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,L,C,w.width,w.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,L,C,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,C,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,z,a.RENDERBUFFER,A)}else{let B=w.textures;for(let M=0;M<B.length;M++){let C=B[M],z=r.convert(C.format,C.colorSpace),L=r.convert(C.type),te=f(C.internalFormat,z,L,C.colorSpace),X=be(w);H&&ge(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,X,te,w.width,w.height):ge(w)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X,te,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,te,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Le(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(w.depthTexture);H.__renderTarget=w,H.__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let B=H.__webglTexture,M=be(w);if(w.depthTexture.format===Rs)ge(w)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0,M):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0);else{if(w.depthTexture.format!==Cs)throw new Error("Unknown depthTexture format");ge(w)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0,M):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0)}}function we(A){let w=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let B=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),B){let M=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,B.removeEventListener("dispose",M)};B.addEventListener("dispose",M),w.__depthDisposeCallback=M}w.__boundDepthTexture=B}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let B=A.texture.mipmaps;B&&B.length>0?Le(w.__webglFramebuffer[0],A):Le(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[B]),w.__webglDepthbuffer[B]===void 0)w.__webglDepthbuffer[B]=a.createRenderbuffer(),le(w.__webglDepthbuffer[B],A,!1);else{let M=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer[B];a.bindRenderbuffer(a.RENDERBUFFER,C),a.framebufferRenderbuffer(a.FRAMEBUFFER,M,a.RENDERBUFFER,C)}}else{let B=A.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),le(w.__webglDepthbuffer,A,!1);else{let M=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,C),a.framebufferRenderbuffer(a.FRAMEBUFFER,M,a.RENDERBUFFER,C)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}let Pe=[],se=[];function be(A){return Math.min(i.maxSamples,A.samples)}function ge(A){let w=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(A,w){let H=A.colorSpace,B=A.format,M=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==jt&&H!==Cr&&(at.getTransfer(H)===mt?B===Dn&&M===oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=function(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A},this.resetTextureUnits=function(){I=0},this.setTexture2D=N,this.setTexture2DArray=function(A,w){let H=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version?ae(H,A,w):t.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+w)},this.setTexture3D=function(A,w){let H=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version?ae(H,A,w):t.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+w)},this.setTextureCube=function(A,w){let H=n.get(A);A.version>0&&H.__version!==A.version?(function(B,M,C){if(M.image.length!==6)return;let z=K(B,M),L=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+C);let te=n.get(L);if(L.version!==te.__version||z===!0){t.activeTexture(a.TEXTURE0+C);let X=at.getPrimaries(at.workingColorSpace),q=M.colorSpace===Cr?null:at.getPrimaries(M.colorSpace),he=M.colorSpace===Cr||X===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Se=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,me=[];for(let xe=0;xe<6;xe++)me[xe]=Se||fe?fe?M.image[xe].image:M.image[xe]:_(M.image[xe],!0,i.maxCubemapSize),me[xe]=Fe(M,me[xe]);let Ce=me[0],Ge=r.convert(M.format,M.colorSpace),Ke=r.convert(M.type),qe=f(M.internalFormat,Ge,Ke,M.colorSpace),re=M.isVideoTexture!==!0,ne=te.__version===void 0||z===!0,oe=L.dataReady,Ae,Je=E(M,Ce);if(G(a.TEXTURE_CUBE_MAP,M),Se){re&&ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Je,qe,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Ae=me[xe].mipmaps;for(let We=0;We<Ae.length;We++){let ke=Ae[We];M.format!==Dn?Ge!==null?re?oe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ke.width,ke.height,Ge,ke.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?oe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ke.width,ke.height,Ge,Ke,ke.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,qe,ke.width,ke.height,0,Ge,Ke,ke.data)}}}else{if(Ae=M.mipmaps,re&&ne){Ae.length>0&&Je++;let xe=Me(me[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Je,qe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(fe){re?oe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,me[xe].width,me[xe].height,Ge,Ke,me[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,me[xe].width,me[xe].height,0,Ge,Ke,me[xe].data);for(let We=0;We<Ae.length;We++){let ke=Ae[We].image[xe].image;re?oe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,ke.width,ke.height,Ge,Ke,ke.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,qe,ke.width,ke.height,0,Ge,Ke,ke.data)}}else{re?oe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge,Ke,me[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,Ge,Ke,me[xe]);for(let We=0;We<Ae.length;We++){let ke=Ae[We];re?oe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,Ge,Ke,ke.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,qe,Ge,Ke,ke.image[xe])}}}g(M)&&b(a.TEXTURE_CUBE_MAP),te.__version=L.version,M.onUpdate&&M.onUpdate(M)}B.__version=M.version})(H,A,w):t.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+w)},this.rebindTextures=function(A,w,H){let B=n.get(A);w!==void 0&&ie(B.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&we(A)},this.setupRenderTarget=function(A){let w=A.texture,H=n.get(A),B=n.get(w);A.addEventListener("dispose",P);let M=A.textures,C=A.isWebGLCubeRenderTarget===!0,z=M.length>1;if(z||(B.__webglTexture===void 0&&(B.__webglTexture=a.createTexture()),B.__version=w.version,s.memory.textures++),C){H.__webglFramebuffer=[];for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[L]=[];for(let te=0;te<w.mipmaps.length;te++)H.__webglFramebuffer[L][te]=a.createFramebuffer()}else H.__webglFramebuffer[L]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let L=0;L<w.mipmaps.length;L++)H.__webglFramebuffer[L]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(z)for(let L=0,te=M.length;L<te;L++){let X=n.get(M[L]);X.__webglTexture===void 0&&(X.__webglTexture=a.createTexture(),s.memory.textures++)}if(A.samples>0&&ge(A)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let L=0;L<M.length;L++){let te=M[L];H.__webglColorRenderbuffer[L]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[L]);let X=r.convert(te.format,te.colorSpace),q=r.convert(te.type),he=f(te.internalFormat,X,q,te.colorSpace,A.isXRRenderTarget===!0),Se=be(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,Se,he,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+L,a.RENDERBUFFER,H.__webglColorRenderbuffer[L])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),le(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(C){t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture),G(a.TEXTURE_CUBE_MAP,w);for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)ie(H.__webglFramebuffer[L][te],A,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+L,te);else ie(H.__webglFramebuffer[L],A,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(w)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){for(let L=0,te=M.length;L<te;L++){let X=M[L],q=n.get(X),he=a.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),G(he,X),ie(H.__webglFramebuffer,A,X,a.COLOR_ATTACHMENT0+L,he,0),g(X)&&b(he)}t.unbindTexture()}else{let L=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(L=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(L,B.__webglTexture),G(L,w),w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)ie(H.__webglFramebuffer[te],A,w,a.COLOR_ATTACHMENT0,L,te);else ie(H.__webglFramebuffer,A,w,a.COLOR_ATTACHMENT0,L,0);g(w)&&b(L),t.unbindTexture()}A.depthBuffer&&we(A)},this.updateRenderTargetMipmap=function(A){let w=A.textures;for(let H=0,B=w.length;H<B;H++){let M=w[H];if(g(M)){let C=v(A),z=n.get(M).__webglTexture;t.bindTexture(C,z),b(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ge(A)===!1){let w=A.textures,H=A.width,B=A.height,M=a.COLOR_BUFFER_BIT,C=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,z=n.get(A),L=w.length>1;if(L)for(let X=0;X<w.length;X++)t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+X,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,z.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+X,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,z.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let X=0;X<w.length;X++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(M|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(M|=a.STENCIL_BUFFER_BIT)),L){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,z.__webglColorRenderbuffer[X]);let q=n.get(w[X]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,q,0)}a.blitFramebuffer(0,0,H,B,0,0,H,B,M,a.NEAREST),c===!0&&(Pe.length=0,se.length=0,Pe.push(a.COLOR_ATTACHMENT0+X),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pe.push(C),se.push(C),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,se)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),L)for(let X=0;X<w.length;X++){t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+X,a.RENDERBUFFER,z.__webglColorRenderbuffer[X]);let q=n.get(w[X]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,z.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+X,a.TEXTURE_2D,q,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let w=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ge}function Wg(a,e){return{convert:function(t,n=Cr){let i,r=at.getTransfer(n);if(t===oi)return a.UNSIGNED_BYTE;if(t===hl)return a.UNSIGNED_SHORT_4_4_4_4;if(t===ul)return a.UNSIGNED_SHORT_5_5_5_1;if(t===Oc)return a.UNSIGNED_INT_5_9_9_9_REV;if(t===Bc)return a.UNSIGNED_INT_10F_11F_11F_REV;if(t===Nc)return a.BYTE;if(t===Fc)return a.SHORT;if(t===Sa)return a.UNSIGNED_SHORT;if(t===cl)return a.INT;if(t===Rr)return a.UNSIGNED_INT;if(t===Ln)return a.FLOAT;if(t===Ii)return a.HALF_FLOAT;if(t===tp)return a.ALPHA;if(t===np)return a.RGB;if(t===Dn)return a.RGBA;if(t===Rs)return a.DEPTH_COMPONENT;if(t===Cs)return a.DEPTH_STENCIL;if(t===dl)return a.RED;if(t===pl)return a.RED_INTEGER;if(t===ip)return a.RG;if(t===kc)return a.RG_INTEGER;if(t===zc)return a.RGBA_INTEGER;if(t===fl||t===ml||t===gl||t===bl)if(r===mt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===fl)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ml)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===gl)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===bl)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===fl)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ml)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===gl)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===bl)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Hc||t===Gc||t===Vc||t===Wc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Hc)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Gc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Vc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Wc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===jc||t===Xc||t===qc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===jc||t===Xc)return r===mt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===qc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Yc||t===Kc||t===Jc||t===Zc||t===Qc||t===$c||t===eh||t===th||t===nh||t===ih||t===rh||t===ah||t===sh||t===oh){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Yc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Kc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Jc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Zc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Qc)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===$c)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===eh)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===th)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===nh)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ih)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===rh)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===ah)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===sh)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===oh)return r===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===lh||t===ch||t===hh){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===lh)return r===mt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===ch)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===hh)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===uh||t===dh||t===ph||t===fh){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===uh)return i.COMPRESSED_RED_RGTC1_EXT;if(t===dh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ph)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===fh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ta?a.UNSIGNED_INT_24_8:a[t]!==void 0?a[t]:null}}}var Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new cs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends ei{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",g=new Nh,b={},v=t.getContextAttributes(),f=null,x=null,E=[],T=[],P=new ce,R=null,I=new Nt;I.viewport=new ht;let N=new Nt;N.viewport=new ht;let U=[I,N],O=new Ko,J=null,G=null;function K(se){let be=T.indexOf(se.inputSource);if(be===-1)return;let ge=E[be];ge!==void 0&&(ge.update(se.inputSource,se.frame,l||s),ge.dispatchEvent({type:se.type,data:se.inputSource}))}function Z(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ae);for(let se=0;se<E.length;se++){let be=T[se];be!==null&&(T[se]=null,E[se].disconnect(be))}J=null,G=null,g.reset();for(let se in b)delete b[se];e.setRenderTarget(f),p=null,d=null,u=null,i=null,x=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function ae(se){for(let be=0;be<se.removed.length;be++){let ge=se.removed[be],Fe=T.indexOf(ge);Fe>=0&&(T[Fe]=null,E[Fe].disconnect(ge))}for(let be=0;be<se.added.length;be++){let ge=se.added[be],Fe=T.indexOf(ge);if(Fe===-1){for(let A=0;A<E.length;A++){if(A>=T.length){T.push(ge),Fe=A;break}if(T[A]===null){T[A]=ge,Fe=A;break}}if(Fe===-1)break}let Me=E[Fe];Me&&Me.connect(ge)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=E[se];return be===void 0&&(be=new sa,E[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=E[se];return be===void 0&&(be=new sa,E[se]=be),be.getGripSpace()},this.getHand=function(se){let be=E[se];return be===void 0&&(be=new sa,E[se]=be),be.getHandSpace()},this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ge=null,Fe=null;v.depth&&(Fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?Cs:Rs,ge=v.stencil?Ta:Rr);let Me={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new hn(d.textureWidth,d.textureHeight,{format:Dn,type:oi,depthTexture:new ls(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new hn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let ie=new S,le=new S;function Le(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let be=se.near,ge=se.far;g.texture!==null&&(g.depthNear>0&&(be=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),O.near=N.near=I.near=be,O.far=N.far=I.far=ge,J===O.near&&G===O.far||(i.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,G=O.far),O.layers.mask=6|se.layers.mask,I.layers.mask=3&O.layers.mask,N.layers.mask=5&O.layers.mask;let Fe=se.parent,Me=O.cameras;Le(O,Fe);for(let A=0;A<Me.length;A++)Le(Me[A],Fe);Me.length===2?(function(A,w,H){ie.setFromMatrixPosition(w.matrixWorld),le.setFromMatrixPosition(H.matrixWorld);let B=ie.distanceTo(le),M=w.projectionMatrix.elements,C=H.projectionMatrix.elements,z=M[14]/(M[10]-1),L=M[14]/(M[10]+1),te=(M[9]+1)/M[5],X=(M[9]-1)/M[5],q=(M[8]-1)/M[0],he=(C[8]+1)/C[0],Se=z*q,fe=z*he,me=B/(-q+he),Ce=me*-q;if(w.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Ce),A.translateZ(me),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),M[10]===-1)A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let Ge=z+me,Ke=L+me,qe=Se-Ce,re=fe+(B-Ce),ne=te*L/Ke*Ge,oe=X*L/Ke*Ge;A.projectionMatrix.makePerspective(qe,re,ne,oe,Ge,Ke),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(O,I,N):O.projectionMatrix.copy(I.projectionMatrix),(function(A,w,H){H===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*fr*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(se,O,Fe)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(se){c=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(se){return b[se]};let we=null,Pe=new Yp;Pe.setAnimationLoop(function(se,be){if(h=be.getViewerPose(l||s),m=be,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let A=0;A<ge.length;A++){let w=ge[A],H=null;if(p!==null)H=p.getViewport(w);else{let M=u.getViewSubImage(d,w);H=M.viewport,A===0&&(e.setRenderTargetTextures(x,M.colorTexture,M.depthStencilTexture),e.setRenderTarget(x))}let B=U[A];B===void 0&&(B=new Nt,B.layers.enable(A),B.viewport=new ht,U[A]=B),B.matrix.fromArray(w.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(w.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(H.x,H.y,H.width,H.height),A===0&&(O.matrix.copy(B.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(B)}let Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let A=u.getDepthInformation(ge[0]);A&&A.isValid&&A.texture&&g.init(A,i.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<ge.length;A++){let w=ge[A].camera;if(w){let H=b[w];H||(H=new cs,b[w]=H);let B=u.getCameraImage(w);H.sourceTexture=B}}}}for(let ge=0;ge<E.length;ge++){let Fe=T[ge],Me=E[ge];Fe!==null&&Me!==void 0&&Me.update(Fe,be,l||s)}we&&we(se,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),m=null}),this.setAnimationLoop=function(se){we=se},this.dispose=function(){}}},Lr=new Vn,jg=new Be;function Xg(a,e){function t(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,t(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,t(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,t(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===Vt&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,t(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===Vt&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,t(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,t(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let s=e.get(r),o=s.envMap,c=s.envMapRotation;o&&(i.envMap.value=o,Lr.copy(c),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),i.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Lr)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap&&(i.lightMap.value=r.lightMap,i.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,i.lightMapTransform)),r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,_h(a)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,s,o,c){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,r)):r.isMeshPhongMaterial?(n(i,r),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,r)):r.isMeshStandardMaterial?(n(i,r),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,r),r.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,r,c)):r.isMeshMatcapMaterial?(n(i,r),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,r),r.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,r)):r.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,r,s,o):r.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function qg(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,m){let _=u.value,g=d+"_"+p;if(m[g]===void 0)return m[g]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let b=m[g];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return m[g]=_,!0}else if(b.equals(_)===!1)return b.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),a.deleteBuffer(i[d.id]),delete i[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(g){let b=g.uniforms,v=0,f=16;for(let E=0,T=b.length;E<T;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let R=0,I=P.length;R<I;R++){let N=P[R],U=Array.isArray(N.value)?N.value:[N.value];for(let O=0,J=U.length;O<J;O++){let G=l(U[O]),K=v%f,Z=K%G.boundary,ae=K+Z;v+=Z,ae!==0&&f-ae<G.storage&&(v+=f-ae),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=G.storage}}}let x=v%f;x>0&&(v+=f-x),g.__size=v,g.__cache={}})(u),p=(function(g){let b=(function(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=b;let v=a.createBuffer(),f=g.__size,x=g.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,f,x),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let _=e.render.frame;r[u.id]!==_&&((function(g){let b=i[g.id],v=g.uniforms,f=g.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let x=0,E=v.length;x<E;x++){let T=Array.isArray(v[x])?v[x]:[v[x]];for(let P=0,R=T.length;P<R;P++){let I=T[P];if(c(I,x,P,f)===!0){let N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],O=0;for(let J=0;J<U.length;J++){let G=U[J],K=l(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,N+O,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,N,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)})(u),r[u.id]=_)},dispose:function(){for(let u in i)a.deleteBuffer(i[u]);s=[],i={},r={}}}}var yl=class{constructor(e={}){let{canvas:t=gp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let m=new Uint32Array(4),_=new Int32Array(4),g=null,b=null,v=[],f=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=ft;let T=0,P=0,R=null,I=-1,N=null,U=new ht,O=new ht,J=null,G=new Ee(0),K=0,Z=t.width,ae=t.height,ie=1,le=null,Le=null,we=new ht(0,0,Z,ae),Pe=new ht(0,0,Z,ae),se=!1,be=new Yi,ge=!1,Fe=!1,Me=new Be,A=new S,w=new ht,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function M(){return R===null?ie:1}let C,z,L,te,X,q,he,Se,fe,me,Ce,Ge,Ke,qe,re,ne,oe,Ae,Je,xe,We,ke,Pt,vt,F=n;function st(y,k){return t.getContext(y,k)}try{let y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Yt,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),F===null){let k="webgl2";if(F=st(k,y),F===null)throw st(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}function tt(){C=new Cm(F),C.init(),ke=new Wg(F,C),z=new Tm(F,C,e,ke),L=new Gg(F,C),z.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),te=new Lm(F),X=new Lg,q=new Vg(F,C,L,X,z,ke,te),he=new wm(x),Se=new Rm(x),fe=new _m(F),Pt=new Mm(F,fe),me=new Im(F,fe,te,Pt),Ce=new Um(F,me,fe,te),Je=new Dm(F,z,q),ne=new Em(X),Ge=new Pg(x,he,Se,C,z,Pt,ne),Ke=new Xg(x,X),qe=new Ug,re=new kg(C),Ae=new ym(x,he,Se,L,Ce,p,c),oe=new zg(x,Ce,z),vt=new qg(F,te,z,L),xe=new Sm(F,C,te),We=new Pm(F,C,te),te.programs=Ge.programs,x.capabilities=z,x.extensions=C,x.properties=X,x.renderLists=qe,x.shadowMap=oe,x.state=L,x.info=te}tt();let ot=new Fh(x,F);function Wt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=te.autoReset,k=oe.enabled,V=oe.autoUpdate,Q=oe.needsUpdate,W=oe.type;tt(),te.autoReset=y,oe.enabled=k,oe.autoUpdate=V,oe.needsUpdate=Q,oe.type=W}function Sn(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Nn(y){let k=y.target;k.removeEventListener("dispose",Nn),(function(V){(function(Q){let W=X.get(Q).programs;W!==void 0&&(W.forEach(function(ee){Ge.releaseProgram(ee)}),Q.isShaderMaterial&&Ge.releaseShaderCache(Q))})(V),X.remove(V)})(k)}function Kt(y,k,V){y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,Y(y,k,V),y.side=Zi,y.needsUpdate=!0,Y(y,k,V),y.side=Bt):Y(y,k,V)}this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=C.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=C.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(Z,ae,!1))},this.getSize=function(y){return y.set(Z,ae)},this.setSize=function(y,k,V=!0){ot.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=y,ae=k,t.width=Math.floor(y*ie),t.height=Math.floor(k*ie),V===!0&&(t.style.width=y+"px",t.style.height=k+"px"),this.setViewport(0,0,y,k))},this.getDrawingBufferSize=function(y){return y.set(Z*ie,ae*ie).floor()},this.setDrawingBufferSize=function(y,k,V){Z=y,ae=k,ie=V,t.width=Math.floor(y*V),t.height=Math.floor(k*V),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,k,V,Q){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,k,V,Q),L.viewport(U.copy(we).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(Pe)},this.setScissor=function(y,k,V,Q){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,k,V,Q),L.scissor(O.copy(Pe).multiplyScalar(ie).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){L.setScissorTest(se=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){Le=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,V=!0){let Q=0;if(y){let W=!1;if(R!==null){let ee=R.texture.format;W=ee===zc||ee===kc||ee===pl}if(W){let ee=R.texture.type,de=ee===oi||ee===Rr||ee===Sa||ee===Ta||ee===hl||ee===ul,ve=Ae.getClearColor(),ye=Ae.getClearAlpha(),Ie=ve.r,Re=ve.g,Ne=ve.b;de?(m[0]=Ie,m[1]=Re,m[2]=Ne,m[3]=ye,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Ie,_[1]=Re,_[2]=Ne,_[3]=ye,F.clearBufferiv(F.COLOR,0,_))}else Q|=F.COLOR_BUFFER_BIT}k&&(Q|=F.DEPTH_BUFFER_BIT),V&&(Q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Yt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ae.dispose(),qe.dispose(),re.dispose(),X.dispose(),he.dispose(),Se.dispose(),Ce.dispose(),Pt.dispose(),vt.dispose(),Ge.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Xn),ot.removeEventListener("sessionend",Tn),mn.stop()},this.renderBufferDirect=function(y,k,V,Q,W,ee){k===null&&(k=H);let de=W.isMesh&&W.matrixWorld.determinant()<0,ve=(function(Ye,dt,Oe,De,Ue){dt.isScene!==!0&&(dt=H),q.resetTextureUnits();let yt=dt.fog,Jt=De.isMeshStandardMaterial?dt.environment:null,gn=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:jt,Zt=(De.isMeshStandardMaterial?Se:he).get(De.envMap||Jt),on=De.vertexColors===!0&&!!Oe.attributes.color&&Oe.attributes.color.itemSize===4,Br=!!Oe.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),pi=!!Oe.morphAttributes.position,Fl=!!Oe.morphAttributes.normal,kr=!!Oe.morphAttributes.color,Ru=Ci;De.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(Ru=x.toneMapping));let Cu=Oe.morphAttributes.position||Oe.morphAttributes.normal||Oe.morphAttributes.color,Cf=Cu!==void 0?Cu.length:0,rt=X.get(De),If=b.state.lights;if(ge===!0&&(Fe===!0||Ye!==N)){let En=Ye===N&&De.id===I;ne.setState(De,Ye,En)}let On=!1;De.version===rt.__version?rt.needsLights&&rt.lightsStateVersion!==If.state.version||rt.outputColorSpace!==gn||Ue.isBatchedMesh&&rt.batching===!1?On=!0:Ue.isBatchedMesh||rt.batching!==!0?Ue.isBatchedMesh&&rt.batchingColor===!0&&Ue.colorTexture===null||Ue.isBatchedMesh&&rt.batchingColor===!1&&Ue.colorTexture!==null||Ue.isInstancedMesh&&rt.instancing===!1?On=!0:Ue.isInstancedMesh||rt.instancing!==!0?Ue.isSkinnedMesh&&rt.skinning===!1?On=!0:Ue.isSkinnedMesh||rt.skinning!==!0?Ue.isInstancedMesh&&rt.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&rt.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&rt.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&rt.instancingMorph===!1&&Ue.morphTexture!==null||rt.envMap!==Zt||De.fog===!0&&rt.fog!==yt?On=!0:rt.numClippingPlanes===void 0||rt.numClippingPlanes===ne.numPlanes&&rt.numIntersection===ne.numIntersection?(rt.vertexAlphas!==on||rt.vertexTangents!==Br||rt.morphTargets!==pi||rt.morphNormals!==Fl||rt.morphColors!==kr||rt.toneMapping!==Ru||rt.morphTargetsCount!==Cf)&&(On=!0):On=!0:On=!0:On=!0:On=!0:(On=!0,rt.__version=De.version);let rr=rt.currentProgram;On===!0&&(rr=Y(De,dt,Ue));let Iu=!1,Fa=!1,Ol=!1,Dt=rr.getUniforms(),ki=rt.uniforms;if(L.useProgram(rr.program)&&(Iu=!0,Fa=!0,Ol=!0),De.id!==I&&(I=De.id,Fa=!0),Iu||N!==Ye){L.buffers.depth.getReversed()&&Ye.reversedDepth!==!0&&(Ye._reversedDepth=!0,Ye.updateProjectionMatrix()),Dt.setValue(F,"projectionMatrix",Ye.projectionMatrix),Dt.setValue(F,"viewMatrix",Ye.matrixWorldInverse);let En=Dt.map.cameraPosition;En!==void 0&&En.setValue(F,A.setFromMatrixPosition(Ye.matrixWorld)),z.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(Ye.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",Ye.isOrthographicCamera===!0),N!==Ye&&(N=Ye,Fa=!0,Ol=!0)}if(Ue.isSkinnedMesh){Dt.setOptional(F,Ue,"bindMatrix"),Dt.setOptional(F,Ue,"bindMatrixInverse");let En=Ue.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Dt.setValue(F,"boneTexture",En.boneTexture,q))}Ue.isBatchedMesh&&(Dt.setOptional(F,Ue,"batchingTexture"),Dt.setValue(F,"batchingTexture",Ue._matricesTexture,q),Dt.setOptional(F,Ue,"batchingIdTexture"),Dt.setValue(F,"batchingIdTexture",Ue._indirectTexture,q),Dt.setOptional(F,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&Dt.setValue(F,"batchingColorTexture",Ue._colorsTexture,q));let Bl=Oe.morphAttributes;Bl.position===void 0&&Bl.normal===void 0&&Bl.color===void 0||Je.update(Ue,Oe,rr),(Fa||rt.receiveShadow!==Ue.receiveShadow)&&(rt.receiveShadow=Ue.receiveShadow,Dt.setValue(F,"receiveShadow",Ue.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(ki.envMap.value=Zt,ki.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&dt.environment!==null&&(ki.envMapIntensity.value=dt.environmentIntensity),Fa&&(Dt.setValue(F,"toneMappingExposure",x.toneMappingExposure),rt.needsLights&&(Bn=Ol,(qn=ki).ambientLightColor.needsUpdate=Bn,qn.lightProbe.needsUpdate=Bn,qn.directionalLights.needsUpdate=Bn,qn.directionalLightShadows.needsUpdate=Bn,qn.pointLights.needsUpdate=Bn,qn.pointLightShadows.needsUpdate=Bn,qn.spotLights.needsUpdate=Bn,qn.spotLightShadows.needsUpdate=Bn,qn.rectAreaLights.needsUpdate=Bn,qn.hemisphereLights.needsUpdate=Bn),yt&&De.fog===!0&&Ke.refreshFogUniforms(ki,yt),Ke.refreshMaterialUniforms(ki,De,ie,ae,b.state.transmissionRenderTarget[Ye.id]),Aa.upload(F,j(rt),ki,q));var qn,Bn;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(Aa.upload(F,j(rt),ki,q),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&Dt.setValue(F,"center",Ue.center),Dt.setValue(F,"modelViewMatrix",Ue.modelViewMatrix),Dt.setValue(F,"normalMatrix",Ue.normalMatrix),Dt.setValue(F,"modelMatrix",Ue.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let En=De.uniformsGroups;for(let kl=0,Pf=En.length;kl<Pf;kl++){let Pu=En[kl];vt.update(Pu,rr),vt.bind(Pu,rr)}}return rr})(y,k,V,Q,W);L.setMaterial(Q,de);let ye=V.index,Ie=1;if(Q.wireframe===!0){if(ye=me.getWireframeAttribute(V),ye===void 0)return;Ie=2}let Re=V.drawRange,Ne=V.attributes.position,Ve=Re.start*Ie,nt=(Re.start+Re.count)*Ie;ee!==null&&(Ve=Math.max(Ve,ee.start*Ie),nt=Math.min(nt,(ee.start+ee.count)*Ie)),ye!==null?(Ve=Math.max(Ve,0),nt=Math.min(nt,ye.count)):Ne!=null&&(Ve=Math.max(Ve,0),nt=Math.min(nt,Ne.count));let bt=nt-Ve;if(bt<0||bt===1/0)return;let _t;Pt.setup(W,Q,ve,V,ye);let ct=xe;if(ye!==null&&(_t=fe.get(ye),ct=We,ct.setIndex(_t)),W.isMesh)Q.wireframe===!0?(L.setLineWidth(Q.wireframeLinewidth*M()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(W.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),L.setLineWidth(Ye*M()),W.isLineSegments?ct.setMode(F.LINES):W.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else W.isPoints?ct.setMode(F.POINTS):W.isSprite&&ct.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ia("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ye=W._multiDrawStarts,dt=W._multiDrawCounts,Oe=W._multiDrawCount,De=ye?fe.get(ye).bytesPerElement:1,Ue=X.get(Q).currentProgram.getUniforms();for(let yt=0;yt<Oe;yt++)Ue.setValue(F,"_gl_DrawID",yt),ct.render(Ye[yt]/De,dt[yt])}else if(W.isInstancedMesh)ct.renderInstances(Ve,bt,W.count);else if(V.isInstancedBufferGeometry){let Ye=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,dt=Math.min(V.instanceCount,Ye);ct.renderInstances(Ve,bt,dt)}else ct.render(Ve,bt)},this.compile=function(y,k,V=null){V===null&&(V=y),b=re.get(V),b.init(k),f.push(b),V.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),y!==V&&y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();let Q=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ee=W.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){let ve=ee[de];Kt(ve,V,W),Q.add(ve)}else Kt(ee,V,W),Q.add(ee)}),b=f.pop(),Q},this.compileAsync=function(y,k,V=null){let Q=this.compile(y,k,V);return new Promise(W=>{function ee(){Q.forEach(function(de){X.get(de).currentProgram.isReady()&&Q.delete(de)}),Q.size!==0?setTimeout(ee,10):W(y)}C.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ui=null;function Xn(){mn.stop()}function Tn(){mn.start()}let mn=new Yp;function di(y,k,V,Q){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||be.intersectsSprite(y)){Q&&w.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Me);let ee=Ce.update(y),de=y.material;de.visible&&g.push(y,ee,de,V,w.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||be.intersectsObject(y))){let ee=Ce.update(y),de=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),w.copy(y.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),w.copy(ee.boundingSphere.center)),w.applyMatrix4(y.matrixWorld).applyMatrix4(Me)),Array.isArray(de)){let ve=ee.groups;for(let ye=0,Ie=ve.length;ye<Ie;ye++){let Re=ve[ye],Ne=de[Re.materialIndex];Ne&&Ne.visible&&g.push(y,ee,Ne,V,w.z,Re)}}else de.visible&&g.push(y,ee,de,V,w.z,null)}}let W=y.children;for(let ee=0,de=W.length;ee<de;ee++)di(W[ee],k,V,Q)}function Fn(y,k,V,Q){let W=y.opaque,ee=y.transmissive,de=y.transparent;b.setupLightsView(V),ge===!0&&ne.setGlobalState(x.clippingPlanes,V),Q&&L.viewport(U.copy(Q)),W.length>0&&Bi(W,k,V),ee.length>0&&Bi(ee,k,V),de.length>0&&Bi(de,k,V),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function ir(y,k,V,Q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[Q.id]===void 0&&(b.state.transmissionRenderTarget[Q.id]=new hn(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Ii:oi,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let W=b.state.transmissionRenderTarget[Q.id],ee=Q.viewport||U;W.setSize(ee.z*x.transmissionResolutionScale,ee.w*x.transmissionResolutionScale);let de=x.getRenderTarget(),ve=x.getActiveCubeFace(),ye=x.getActiveMipmapLevel();x.setRenderTarget(W),x.getClearColor(G),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),B&&Ae.render(V);let Ie=x.toneMapping;x.toneMapping=Ci;let Re=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),ge===!0&&ne.setGlobalState(x.clippingPlanes,Q),Bi(y,V,Q),q.updateMultisampleRenderTarget(W),q.updateRenderTargetMipmap(W),C.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ve=0,nt=k.length;Ve<nt;Ve++){let bt=k[Ve],_t=bt.object,ct=bt.geometry,Ye=bt.material,dt=bt.group;if(Ye.side===Bt&&_t.layers.test(Q.layers)){let Oe=Ye.side;Ye.side=Vt,Ye.needsUpdate=!0,D(_t,V,Q,ct,Ye,dt),Ye.side=Oe,Ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(q.updateMultisampleRenderTarget(W),q.updateRenderTargetMipmap(W))}x.setRenderTarget(de,ve,ye),x.setClearColor(G,K),Re!==void 0&&(Q.viewport=Re),x.toneMapping=Ie}function Bi(y,k,V){let Q=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ee=y.length;W<ee;W++){let de=y[W],ve=de.object,ye=de.geometry,Ie=de.group,Re=de.material;Re.allowOverride===!0&&Q!==null&&(Re=Q),ve.layers.test(V.layers)&&D(ve,k,V,ye,Re,Ie)}}function D(y,k,V,Q,W,ee){y.onBeforeRender(x,k,V,Q,W,ee),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(x,k,V,Q,y,ee),W.transparent===!0&&W.side===Bt&&W.forceSinglePass===!1?(W.side=Vt,W.needsUpdate=!0,x.renderBufferDirect(V,k,Q,W,y,ee),W.side=Zi,W.needsUpdate=!0,x.renderBufferDirect(V,k,Q,W,y,ee),W.side=Bt):x.renderBufferDirect(V,k,Q,W,y,ee),y.onAfterRender(x,k,V,Q,W,ee)}function Y(y,k,V){k.isScene!==!0&&(k=H);let Q=X.get(y),W=b.state.lights,ee=b.state.shadowsArray,de=W.state.version,ve=Ge.getParameters(y,W.state,ee,k,V),ye=Ge.getProgramCacheKey(ve),Ie=Q.programs;Q.environment=y.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(y.isMeshStandardMaterial?Se:he).get(y.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",Nn),Ie=new Map,Q.programs=Ie);let Re=Ie.get(ye);if(Re!==void 0){if(Q.currentProgram===Re&&Q.lightsStateVersion===de)return $(y,ve),Re}else ve.uniforms=Ge.getUniforms(y),y.onBeforeCompile(ve,x),Re=Ge.acquireProgram(ve,ye),Ie.set(ye,Re),Q.uniforms=ve.uniforms;let Ne=Q.uniforms;return(y.isShaderMaterial||y.isRawShaderMaterial)&&y.clipping!==!0||(Ne.clippingPlanes=ne.uniform),$(y,ve),Q.needsLights=(function(Ve){return Ve.isMeshLambertMaterial||Ve.isMeshToonMaterial||Ve.isMeshPhongMaterial||Ve.isMeshStandardMaterial||Ve.isShadowMaterial||Ve.isShaderMaterial&&Ve.lights===!0})(y),Q.lightsStateVersion=de,Q.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Re,Q.uniformsList=null,Re}function j(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=Aa.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function $(y,k){let V=X.get(y);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}mn.setAnimationLoop(function(y){ui&&ui(y)}),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(y){ui=y,ot.setAnimationLoop(y),y===null?mn.stop():mn.start()},ot.addEventListener("sessionstart",Xn),ot.addEventListener("sessionend",Tn),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,k,R),b=re.get(y,f.length),b.init(k),f.push(b),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),be.setFromProjectionMatrix(Me,Ti,k.reversedDepth),Fe=this.localClippingEnabled,ge=ne.init(this.clippingPlanes,Fe),g=qe.get(y,v.length),g.init(),v.push(g),ot.enabled===!0&&ot.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&di(ee,k,-1/0,x.sortObjects)}di(y,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(le,Le),B=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,B&&Ae.addToRenderList(g,y),this.info.render.frame++,ge===!0&&ne.beginShadows();let V=b.state.shadowsArray;oe.render(V,y,k),ge===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,W=g.transmissive;if(b.setupLights(),k.isArrayCamera){let ee=k.cameras;if(W.length>0)for(let de=0,ve=ee.length;de<ve;de++)ir(Q,W,y,ee[de]);B&&Ae.render(y);for(let de=0,ve=ee.length;de<ve;de++){let ye=ee[de];Fn(g,y,ye,ye.viewport)}}else W.length>0&&ir(Q,W,y,k),B&&Ae.render(y),Fn(g,y,k);R!==null&&P===0&&(q.updateMultisampleRenderTarget(R),q.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,k),Pt.resetDefaultState(),I=-1,N=null,f.pop(),f.length>0?(b=f[f.length-1],ge===!0&&ne.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,v.pop(),g=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,k,V){let Q=X.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=k,X.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:V,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){let V=X.get(y);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0};let ue=F.createFramebuffer();this.setRenderTarget=function(y,k=0,V=0){R=y,T=k,P=V;let Q=!0,W=null,ee=!1,de=!1;if(y){let ve=X.get(y);if(ve.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(F.FRAMEBUFFER,null),Q=!1;else if(ve.__webglFramebuffer===void 0)q.setupRenderTarget(y);else if(ve.__hasExternalTextures)q.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Re=y.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&X.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Ie=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(W=Array.isArray(Ie[k])?Ie[k][V]:Ie[k],ee=!0):W=y.samples>0&&q.useMultisampledRTT(y)===!1?X.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[V]:Ie,U.copy(y.viewport),O.copy(y.scissor),J=y.scissorTest}else U.copy(we).multiplyScalar(ie).floor(),O.copy(Pe).multiplyScalar(ie).floor(),J=se;if(V!==0&&(W=ue),L.bindFramebuffer(F.FRAMEBUFFER,W)&&Q&&L.drawBuffers(y,W),L.viewport(U),L.scissor(O),L.setScissorTest(J),ee){let ve=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,V)}else if(de){let ve=k;for(let ye=0;ye<y.textures.length;ye++){let Ie=X.get(y.textures[ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ye,Ie.__webglTexture,V,ve)}}else if(y!==null&&V!==0){let ve=X.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,V)}I=-1},this.readRenderTargetPixels=function(y,k,V,Q,W,ee,de,ve=0){if(!y||!y.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){L.bindFramebuffer(F.FRAMEBUFFER,ye);try{let Ie=y.textures[ve],Re=Ie.format,Ne=Ie.type;if(!z.textureFormatReadable(Re))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ne))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=y.width-Q&&V>=0&&V<=y.height-W&&(y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(k,V,Q,W,ke.convert(Re),ke.convert(Ne),ee))}finally{let Ie=R!==null?X.get(R).__webglFramebuffer:null;L.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,k,V,Q,W,ee,de,ve=0){if(!y||!y.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){if(k>=0&&k<=y.width-Q&&V>=0&&V<=y.height-W){L.bindFramebuffer(F.FRAMEBUFFER,ye);let Ie=y.textures[ve],Re=Ie.format,Ne=Ie.type;if(!z.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.bufferData(F.PIXEL_PACK_BUFFER,ee.byteLength,F.STREAM_READ),y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(k,V,Q,W,ke.convert(Re),ke.convert(Ne),0);let nt=R!==null?X.get(R).__webglFramebuffer:null;L.bindFramebuffer(F.FRAMEBUFFER,nt);let bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bp(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ee),F.deleteBuffer(Ve),F.deleteSync(bt),ee}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,V=0){let Q=Math.pow(2,-V),W=Math.floor(y.image.width*Q),ee=Math.floor(y.image.height*Q),de=k!==null?k.x:0,ve=k!==null?k.y:0;q.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,de,ve,W,ee),L.unbindTexture()};let pe=F.createFramebuffer(),_e=F.createFramebuffer();this.copyTextureToTexture=function(y,k,V=null,Q=null,W=0,ee=null){let de,ve,ye,Ie,Re,Ne,Ve,nt,bt;ee===null&&(W!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=W,W=0):ee=0);let _t=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(V!==null)de=V.max.x-V.min.x,ve=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Re=V.min.y,Ne=V.isBox3?V.min.z:0;else{let on=Math.pow(2,-W);de=Math.floor(_t.width*on),ve=Math.floor(_t.height*on),ye=y.isDataArrayTexture?_t.depth:y.isData3DTexture?Math.floor(_t.depth*on):1,Ie=0,Re=0,Ne=0}Q!==null?(Ve=Q.x,nt=Q.y,bt=Q.z):(Ve=0,nt=0,bt=0);let ct=ke.convert(k.format),Ye=ke.convert(k.type),dt;k.isData3DTexture?(q.setTexture3D(k,0),dt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),dt=F.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),dt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Oe=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ue=F.getParameter(F.UNPACK_SKIP_PIXELS),yt=F.getParameter(F.UNPACK_SKIP_ROWS),Jt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne);let gn=y.isDataArrayTexture||y.isData3DTexture,Zt=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){let on=X.get(y),Br=X.get(k),pi=X.get(on.__renderTarget),Fl=X.get(Br.__renderTarget);L.bindFramebuffer(F.READ_FRAMEBUFFER,pi.__webglFramebuffer),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let kr=0;kr<ye;kr++)gn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(y).__webglTexture,W,Ne+kr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(k).__webglTexture,ee,bt+kr)),F.blitFramebuffer(Ie,Re,de,ve,Ve,nt,de,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||X.has(y)){let on=X.get(y),Br=X.get(k);L.bindFramebuffer(F.READ_FRAMEBUFFER,pe),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,_e);for(let pi=0;pi<ye;pi++)gn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,on.__webglTexture,W,Ne+pi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,on.__webglTexture,W),Zt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Br.__webglTexture,ee,bt+pi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Br.__webglTexture,ee),W!==0?F.blitFramebuffer(Ie,Re,de,ve,Ve,nt,de,ve,F.COLOR_BUFFER_BIT,F.NEAREST):Zt?F.copyTexSubImage3D(dt,ee,Ve,nt,bt+pi,Ie,Re,de,ve):F.copyTexSubImage2D(dt,ee,Ve,nt,Ie,Re,de,ve);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Zt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(dt,ee,Ve,nt,bt,de,ve,ye,ct,Ye,_t.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(dt,ee,Ve,nt,bt,de,ve,ye,ct,_t.data):F.texSubImage3D(dt,ee,Ve,nt,bt,de,ve,ye,ct,Ye,_t):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ee,Ve,nt,de,ve,ct,Ye,_t.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ee,Ve,nt,_t.width,_t.height,ct,_t.data):F.texSubImage2D(F.TEXTURE_2D,ee,Ve,nt,de,ve,ct,Ye,_t);F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ue),F.pixelStorei(F.UNPACK_SKIP_ROWS,yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt),ee===0&&k.generateMipmaps&&F.generateMipmap(dt),L.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?q.setTextureCube(y,0):y.isData3DTexture?q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?q.setTexture2DArray(y,0):q.setTexture2D(y,0),L.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,L.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};function Sl(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,c=new ut,l=0;for(let h=0;h<a.length;++h){let u=a[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<a.length;++d){let p=a[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=a[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=$p(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in s){let u=s[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<s[h].length;++_)p.push(s[h][_][d]);let m=$p(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function $p(a){let e,t,n,i=-1,r=0;for(let l=0;l<a.length;++l){let h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let s=new e(r),o=new Tt(s,t,n),c=0;for(let l=0;l<a.length;++l){let h=a[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<t;m++){let _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else s.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function kh(a,e){if(e===mh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Ea||e===Is){let t=a.getIndex();if(t===null){let s=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===Ea)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}var Tl=class extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new su(t)})}load(e,t,n,i){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(e);s=Ri.resolveURL(l,this.path)}else s=Ri.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _a(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,s,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,s={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===af){try{s[it.KHR_BINARY_GLTF]=new ou(e)}catch(u){i&&i(u);return}r=JSON.parse(s[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new fu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:s[u]=new Wh;break;case it.KHR_DRACO_MESH_COMPRESSION:s[u]=new lu(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:s[u]=new cu;break;case it.KHR_MESH_QUANTIZATION:s[u]=new hu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Yg(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ss(h),l.distance=u;break;case"spot":l=new Ms(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Wh=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],jt),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(i)}},jh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){let o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ft)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],jt),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],jt),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,ft)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}},iu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=i.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,s.source,c)}},ru=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=i.images[s.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,s.source,c)}},au=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},su=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,o=[],c={};for(let l in s)o.push(this.parser.getDependency("accessor",s[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let m of u){let _=new Be,g=new S,b=new Mt,v=new S(1,1,1),f=new yn(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&b.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),f.setMatrixAt(x,_.compose(g,b,v));for(let x in c)if(x==="_COLOR_0"){let E=c[x];f.instanceColor=new Cn(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);St.prototype.copy.call(f,m),this.parser.assignFinalMaterial(f),p.push(f)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},af="glTF",Ds=12,ef={JSON:1313821514,BIN:5130562},ou=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ds,r=new DataView(e,Ds),s=0;for(;s<i;){let o=r.getUint32(s,!0);s+=4;let c=r.getUint32(s,!0);if(s+=4,c===ef.JSON){let l=new Uint8Array(e,Ds+s,o);this.content=n.decode(l)}else if(c===ef.BIN){let l=Ds+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(let h in s){let u=du[h]||h.toLowerCase();o[u]=s[h]}for(let h in e.attributes){let u=du[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Ca[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let _=p.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(p)},o,l,jt,d)})})}},cu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hu=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},El=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*l,_=m-l,g=-2*p+3*d,b=p-d,v=1-g,f=b-d+u;for(let x=0;x!==o;x++){let E=s[_+x+o],T=s[_+x+c]*h,P=s[m+x+o],R=s[m+x]*h;r[x]=v*E+f*T+g*P+b*R}return r}},Kg=new Mt,uu=class extends El{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Kg.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tf={9728:xn,9729:cn,9984:ll,9985:Ma,9986:Ar,9987:si},nf={33071:$n,33648:ta,10497:Qn},zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jg={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},Hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zg(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),a.DefaultMaterial}function Ur(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qg(a,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);let s=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;s.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function $g(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e0(a){let e,t=a.extensions&&a.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gh(t.attributes):e=a.indices+":"+Gh(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Gh(a.targets[n]);return e}function Gh(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function pu(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t0(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var n0=new Be,fu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&s<98?this.textureLoader=new xr(this.options.manager):this.textureLoader=new Ts(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _a(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return Ur(r,o,i),ci(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(s,o)=>{let c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(let[l,h]of s.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(Ri.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let s=zh[i.type],o=Ca[i.componentType],c=i.normalized===!0,l=new o(i.count*s);return Promise.resolve(new Tt(l,s,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){let o=s[0],c=zh[i.type],l=Ca[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,g;if(p&&p!==u){let b=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,f=t.cache.get(v);f||(_=new l(o,b*p,i.count*p/h),f=new oa(_,p/h),t.cache.add(v,f)),g=new la(f,c,d%p/h,m)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),g=new Tt(_,c,m);if(i.sparse!==void 0){let b=zh.SCALAR,v=Ca[i.sparse.indices.componentType],f=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new v(s[1],f,i.sparse.count*b),T=new l(s[2],x,i.sparse.count*c);o!==null&&(g=new Tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,R=E.length;P<R;P++){let I=E[P];if(g.setX(I,T[P*c]),c>=2&&g.setY(I,T[P*c+1]),c>=3&&g.setZ(I,T[P*c+2]),c>=4&&g.setW(I,T[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let c=n.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,s=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[s.sampler]||{};return h.magFilter=tf[d.magFilter]||cn,h.minFilter=tf[d.minFilter]||si,h.wrapS=nf[d.wrapS]||Qn,h.wrapT=nf[d.wrapT]||Qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xn&&h.minFilter!==cn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let s=i.images[e],o=self.URL||self.webkitURL,c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=n.getDependency("bufferView",s.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new Ot(_);g.needsUpdate=!0,d(g)}),t.load(Ri.resolveURL(u,r.path),m,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ci(u,s),u.userData.mimeType=s.mimeType||t0(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(s);s=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,c)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ua,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ha,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),s&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],s,o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=i[it.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||Hh.OPAQUE;if(h===Hh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Hh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==lt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==lt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==lt){let u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&s!==lt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ft)),Promise.all(l).then(function(){let u=new s(o);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ur(i,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return rf(c,o,t)})}let s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=e0(l),u=i[h];if(u)s.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=rf(new ut,l,t),i[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let c=0,l=s.length;c<l;c++){let h=s[c].material===void 0?Zg(this.cache):this.getDependency("material",s[c].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let _=h[p],g=s[p],b,v=l[p];if(g.mode===Un.TRIANGLES||g.mode===Un.TRIANGLE_STRIP||g.mode===Un.TRIANGLE_FAN||g.mode===void 0)b=r.isSkinnedMesh===!0?new ns(_,v):new $e(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights(),g.mode===Un.TRIANGLE_STRIP?b.geometry=kh(b.geometry,Is):g.mode===Un.TRIANGLE_FAN&&(b.geometry=kh(b.geometry,Ea));else if(g.mode===Un.LINES)b=new as(_,v);else if(g.mode===Un.LINE_STRIP)b=new mr(_,v);else if(g.mode===Un.LINE_LOOP)b=new ss(_,v);else if(g.mode===Un.POINTS)b=new os(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(b.geometry.morphAttributes).length>0&&$g(b,r),b.name=t.createUniqueName(r.name||"mesh_"+e),ci(b,r),g.extensions&&Ur(i,b,g),t.assignFinalMaterial(b),u.push(b)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ur(i,u[0],r),u[0];let d=new Gt;r.extensions&&Ur(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Ct.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),s=i,o=[],c=[];for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u){o.push(u);let d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new rs(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],m=i.samplers[p.sampler],_=p.target,g=_.node,b=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(s.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",b)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(_))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],_=u[3],g=u[4],b=[];for(let f=0,x=d.length;f<x;f++){let E=d[f],T=p[f],P=m[f],R=_[f],I=g[f];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let N=n._createAnimationTracks(E,T,P,R,I);if(N)for(let U=0;U<N.length;U++)b.push(N[U])}let v=new _r(r,void 0,b);return ci(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),s})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)s.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,n0)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ca:l.length>1?h=new Gt:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=s),ci(h,r),r.extensions&&Ur(n,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&Ur(t,r,n);let s=n.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(i.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof sn||d instanceof Ot)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let s=[],o=e.name?e.name:e.uuid,c=[];$i[r.path]===$i.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch($i[r.path]){case $i.weights:l=ti;break;case $i.rotation:l=ni;break;case $i.translation:case $i.scale:l=ii;break;default:switch(n.itemSize){case 1:l=ti;break;case 2:case 3:default:l=ii;break}break}let h=i.interpolation!==void 0?Jg[i.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let m=new l(c[d]+"."+$i[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),s.push(m)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pu(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ni?uu:El;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function i0(a,e,t){let n=e.attributes,i=new Et;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new S(c[0],c[1],c[2]),new S(l[0],l[1],l[2])),o.normalized){let h=pu(Ca[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new S,c=new S;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let _=pu(Ca[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let s=new an;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function rf(a,e,t){let n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(c){a.setAttribute(o,c)})}for(let s in n){let o=du[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){let s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return at.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ci(a,e),i0(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qg(a,e.targets,t):a})}var sf=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),r,s=WebAssembly.instantiate(i,{}).then(function(b){r=b.instance,r.exports.__wasm_call_ctors()});function o(b){for(var v=new Uint8Array(b.length),f=0;f<b.length;++f){var x=b.charCodeAt(f);v[f]=x>96?x-97:x>64?x-39:x+4}for(var E=0,f=0;f<b.length;++f)v[E++]=v[f]<60?n[v[f]]:(v[f]-60)*64+v[++f];return v.buffer.slice(0,E)}function c(b,v,f,x,E,T,P){var R=b.exports.sbrk,I=x+3&-4,N=R(I*E),U=R(T.length),O=new Uint8Array(b.exports.memory.buffer);O.set(T,U);var J=v(N,x,E,U,T.length);if(J==0&&P&&P(N,I,E),f.set(O.subarray(N,N+x*E)),R(N-R(0)),J!=0)throw new Error("Malformed buffer data: "+J)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(b){var v={object:new Worker(b),pending:0,requests:{}};return v.object.onmessage=function(f){var x=f.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(b){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),f=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(f),E=u.length;E<b;++E)u[E]=p(x);for(var E=b;E<u.length;++E)u[E].object.postMessage({});u.length=b,URL.revokeObjectURL(x)}function _(b,v,f,x,E){for(var T=u[0],P=1;P<u.length;++P)u[P].pending<T.pending&&(T=u[P]);return new Promise(function(R,I){var N=new Uint8Array(f),U=++d;T.pending+=b,T.requests[U]={resolve:R,reject:I},T.object.postMessage({id:U,count:b,size:v,source:N,mode:x,filter:E},[N.buffer])})}function g(b){var v=b.data;if(!v.id)return self.close();self.ready.then(function(f){try{var x=new Uint8Array(v.count*v.size);c(f,f.exports[v.mode],x,v.count,v.size,v.source,f.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(E){self.postMessage({id:v.id,count:v.count,action:"reject",value:E})}})}return{ready:s,supported:!0,useWorkers:function(b){m(b)},decodeVertexBuffer:function(b,v,f,x,E){c(r,r.exports.meshopt_decodeVertexBuffer,b,v,f,x,r.exports[l[E]])},decodeIndexBuffer:function(b,v,f,x){c(r,r.exports.meshopt_decodeIndexBuffer,b,v,f,x)},decodeIndexSequence:function(b,v,f,x){c(r,r.exports.meshopt_decodeIndexSequence,b,v,f,x)},decodeGltfBuffer:function(b,v,f,x,E,T){c(r,r.exports[h[E]],b,v,f,x,r.exports[l[T]])},decodeGltfBufferAsync:function(b,v,f,x,E){return u.length>0?_(b,v,f,h[x],l[E]):s.then(function(){var T=new Uint8Array(b*v);return c(r,r.exports[h[x]],T,b,v,f,r.exports[l[E]]),T})}}})();var Ia='Cormorant, "Cormorant Garamond", Georgia, serif',of='system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';function Nr(a,{srgb:e=!0,repeat:t=!1,aniso:n=4}={}){let i=new In(a);return e&&(i.colorSpace=ft),t&&(i.wrapS=i.wrapT=Qn),i.anisotropy=n,i}function hf(a){let e=a>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function r0(a){let e=a&&a.image;if(!e)return null;try{let t=document.createElement("canvas");t.width=t.height=16;let n=t.getContext("2d");n.drawImage(e,0,0,16,16);let i=n.getImageData(0,0,16,16).data,r=0,s=0,o=0;for(let l=0;l<i.length;l+=4)r+=i[l],s+=i[l+1],o+=i[l+2];let c=i.length/4*255;return[r/c,s/c,o/c]}catch{return null}}var Pa=(a,e=1)=>`rgb(${a.map(t=>Math.max(0,Math.min(255,Math.round(t*e*255)))).join(",")})`;function a0(a){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=a||[.6,.6,.6];n.fillStyle=Pa(i,.94),n.fillRect(0,0,512,512);let r=hf(7);for(let c=0;c<512;c++)n.fillStyle=`rgba(${r()<.5?"0,0,0":"255,255,255"},${.025+r()*.03})`,n.fillRect(c,0,1,512);let s=(c,l,h)=>{n.save(),n.translate(c,l),n.scale(h,h),n.lineWidth=7,n.lineJoin="round",n.lineCap="round",n.strokeStyle=Pa(i,1.06),n.fillStyle=Pa(i,1.05),n.beginPath(),n.moveTo(0,-120),n.bezierCurveTo(30,-95,78,-70,70,-18),n.bezierCurveTo(64,30,18,52,0,120),n.bezierCurveTo(-18,52,-64,30,-70,-18),n.bezierCurveTo(-78,-70,-30,-95,0,-120),n.stroke(),n.beginPath(),n.moveTo(0,-62),n.bezierCurveTo(14,-40,14,-14,0,10),n.bezierCurveTo(-14,-14,-14,-40,0,-62),n.fill();for(let u of[-1,1])n.beginPath(),n.moveTo(u*4,2),n.bezierCurveTo(u*30,-6,u*46,-36,u*30,-50),n.bezierCurveTo(u*34,-30,u*20,-14,u*4,-6),n.fill();n.fillRect(-20,12,40,7),n.beginPath(),n.moveTo(-6,22),n.lineTo(6,22),n.lineTo(0,44),n.closePath(),n.fill();for(let u of[-1,1])n.beginPath(),n.arc(0,u*128,7,0,Math.PI*2),n.fill();n.restore()},o=3;for(let c=0;c<o;c++)for(let l=0;l<o;l++)for(let[h,u]of[[0,0],[.5,.5]])for(let d of[-1,0,1])for(let p of[-1,0,1])s(((c+h)/o+d)*512,((l+u)/o+p)*512,512/(o*260));return Nr(t,{repeat:!0,aniso:8})}function s0(a){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=a||[.7,.65,.58];n.fillStyle=Pa(i),n.fillRect(0,0,512,512);let r=hf(11);for(let s=0;s<46;s++){let o=r()*512,c=2+r()*10,l=.95+r()*.09;n.fillStyle=Pa(i,l).replace("rgb","rgba").replace(")",",0.22)");for(let h of[-512,0,512])n.fillRect(0,o+h,512,c)}for(let s=0;s<260;s++){let o=r()*512,c=r()*512,l=2+r()*7,h=.8+r()*1.6;n.fillStyle=Pa(i,.8+r()*.1).replace("rgb","rgba").replace(")",",0.45)");for(let u of[-512,0,512])for(let d of[-512,0,512])n.beginPath(),n.ellipse(o+u,c+d,l,h,0,0,Math.PI*2),n.fill()}return Nr(t,{repeat:!0,aniso:8})}var hi=[[-.006,.014],[-.006,.03],[0,.04],[.008,.047],[.016,.04],[.022,.032],[.03,.029],[.036,.036],[.098,.038],[.104,.046],[.118,.064],[.134,.08],[.15,.088],[.164,.086],[.176,.078],[.188,.066],[.198,.048],[.204,.026],[.205,0]];function uf(){let a=[0];for(let t=1;t<hi.length;t++)a.push(a[t-1]+Math.hypot(hi[t][0]-hi[t-1][0],hi[t][1]-hi[t-1][1]));let e=a[a.length-1];return a.map(t=>t/e)}var o0=.26;function l0(){let a=uf(),e=256,t=256,n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");i.fillStyle="#808080",i.fillRect(0,0,e,t);let r=f=>a[f]*t,s=r(2),o=r(5),c=(s+o)/2,l=Math.max(3,(o-s)/2);for(let f=0;f<7;f++){let x=(f+.5)*e/6,E=i.createRadialGradient(x-l*.3,c-l*.3,0,x,c,l*1.05);E.addColorStop(0,"#ffffff"),E.addColorStop(.7,"#a0a0a0"),E.addColorStop(1,"#404040"),i.fillStyle=E,i.beginPath(),i.ellipse(x,c,e/14,l,0,0,Math.PI*2),i.fill()}let h=r(6),u=r(8),d=(h+u)/2,p=(u-h)*.32;i.strokeStyle="#d8d8d8",i.lineWidth=Math.max(2,(u-h)*.14),i.lineCap="round",i.beginPath();for(let f=0;f<=e;f+=2){let x=d+Math.sin(f/e*Math.PI*4)*p;f?i.lineTo(f,x):i.moveTo(f,x)}i.stroke();for(let f=0;f<4;f++){let x=(f+.25)*e/4,E=f%2?1:-1;i.beginPath(),i.ellipse(x+e/16,d-E*p*.9,e/26,p*.55,E*.6,0,Math.PI*2),i.fillStyle="#d0d0d0",i.fill()}let m=r(9),_=r(14);for(let f=0;f<4;f++){let x=(f+.5)*e/3,E=i.createLinearGradient(x-e/8,0,x+e/8,0);E.addColorStop(0,"#5a5a5a"),E.addColorStop(.5,"#e8e8e8"),E.addColorStop(1,"#5a5a5a"),i.fillStyle=E,i.beginPath(),i.moveTo(x,m+2),i.bezierCurveTo(x+e/7,m+(_-m)*.3,x+e/9,_,x,_-1),i.bezierCurveTo(x-e/9,_,x-e/7,m+(_-m)*.3,x,m+2),i.fill()}let g=r(14),b=r(18);i.strokeStyle="rgba(40,40,40,0.8)",i.lineWidth=3;for(let f=-2;f<10;f++){let x=f*e/8;i.beginPath(),i.moveTo(x,g),i.lineTo(x+(b-g)*.8,b),i.stroke()}let v=Nr(n,{srgb:!1,repeat:!0,aniso:8});return v.wrapT=$n,v}function c0(a,e){let t=uf(),n=hi.length,i=hi.map((T,P)=>{let R=hi[Math.max(0,P-1)],I=hi[Math.min(n-1,P+1)],N=I[0]-R[0],U=I[1]-R[1],O=Math.hypot(N,U)||1;return[-U/O,N/O]}),r=a/2,s=e/2,o=[[-r,-s],[r,-s],[r,s],[-r,s]],c=[],l=[],h=[],u=[];for(let T=0;T<4;T++){let P=o[T],R=o[(T+1)%4],I=Math.sign(R[0]-P[0]),U=[Math.sign(R[1]-P[1]),-I],O=Math.hypot(R[0]-P[0],R[1]-P[1]),J=c.length/3;for(let[G,K]of[[P,0],[R,1]]){let Z=Math.sign(G[0]),ae=Math.sign(G[1]);for(let ie=0;ie<n;ie++){let[le,Le]=hi[ie];c.push(G[0]+Z*le,G[1]+ae*le,Le);let[we,Pe]=i[ie];l.push(U[0]*we,U[1]*we,Pe);let se=(K*O+(K?le:-le))/o0;h.push(se,t[ie])}}for(let G=0;G<n-1;G++){let K=J+G,Z=J+G+1,ae=J+n+G+1,ie=J+n+G;u.push(K,ie,ae,K,ae,Z)}}let d=new ut;d.setAttribute("position",new ze(c,3)),d.setAttribute("normal",new ze(l,3)),d.setAttribute("uv",new ze(h,2)),d.setIndex(u);let p=d.attributes.position,m=d.attributes.normal,_=new S,g=new S,b=new S,v=new S,f=new S,x=new S;v.fromBufferAttribute(p,u[0]),f.fromBufferAttribute(p,u[1]),x.fromBufferAttribute(p,u[2]),b.crossVectors(_.subVectors(f,v),g.subVectors(x,v));let E=new S().fromBufferAttribute(m,u[0]);if(b.dot(E)<0){for(let T=0;T<u.length;T+=3){let P=u[T+1];u[T+1]=u[T+2],u[T+2]=P}d.setIndex(u)}return d}var Ft={L:.78,R:.042,y:.13,z:.34};function h0(){let a=[],e=new Ei(.045,.05,.022,20);e.rotateX(Math.PI/2),e.translate(0,0,.011),a.push(e);let t=new pa(new S(0,0,.02),new S(0,.2,.05),new S(0,.26,Ft.z-.08),new S(0,Ft.y+Ft.R*.6,Ft.z));a.push(new va(t,16,.011,8,!1));let n=new Ei(Ft.R,Ft.R,Ft.L,24,1,!1);n.rotateZ(Math.PI/2),n.translate(0,Ft.y,Ft.z),a.push(n);for(let s of[-1,1]){let o=new ba(Ft.R*1.02,.006,6,24);o.rotateY(Math.PI/2),o.translate(s*(Ft.L/2-.03),Ft.y,Ft.z);let c=new ga(.024,14,10);c.translate(s*(Ft.L/2+.018),Ft.y,Ft.z),a.push(o,c)}let i=Sl(a.map(s=>s.index?s.toNonIndexed():s).map(s=>(s.deleteAttribute("uv"),s))),r=new wt(Ft.L-.06,.022);return r.rotateX(Math.PI/2+.35),r.translate(0,Ft.y-Ft.R*.92,Ft.z-.004),{body:i,glow:r}}function u0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256);for(let i=0;i<256;i++)for(let r=0;r<256;r++){let s=r/255-.5,o=1-i/255,c=s/(.16+.3*(1-o)),l=(1-o)/.62,h=Math.sin(Math.PI*Math.min(1,Math.max(0,s+.5)))**2*Math.min(1,(1-o)/.05)*Math.min(1,o/.25),u=Math.exp(-(c*c*1.8+l*l*2))*h,d=(i*256+r)*4;n.data[d]=n.data[d+1]=n.data[d+2]=Math.round(255*Math.max(0,Math.min(1,u))),n.data[d+3]=255}return t.putImageData(n,0,0),Nr(e,{srgb:!1})}var d0=.16,mu=[1,.72,.46];function lf(a,e,t){let n=[],i=(s,o)=>[[-a/2-s,0],[-a/2-s,e+s],[a/2+s,e+s],[a/2+s,0]][o];for(let s=0;s<t.length-1;s++){let[o,c]=t[s],[l,h]=t[s+1];for(let u=0;u<3;u++){let d=i(o,u),p=i(o,u+1),m=i(l,u),_=i(l,u+1);n.push(d[0],c,d[1],p[0],c,p[1],_[0],h,_[1],d[0],c,d[1],_[0],h,_[1],m[0],h,m[1])}}let r=new ut;return r.setAttribute("position",new ze(n,3)),r.computeVertexNormals(),r}function p0(){let i=(b,v,f,x,E,T=!0)=>Array.from({length:E+1},(P,R)=>{let I=R/E,N=I*Math.PI;return[b+(v-b)*I+(T?1:-1)*Math.sin(N)*Math.abs(x-f)*.5,f+(x-f)*(1-Math.cos(N))/2]}),r=lf(.4,.1,[[.07,0],[.07,.2],...i(.05,.05,.2,.29,6),[.02,.29],...i(.02,.025,.29,.35,4,!1).slice(1),...i(.03,.03,.35,.4,5).slice(1),[.008,.4],[.008,.42],[0,.42]]),s=lf(.4,.1,[[0,5.72],[.012,5.72],...i(.012,.012,5.72,5.72+.05,5).slice(1),[0,5.72+.05],[0,5.72+.2],...Array.from({length:7},(b,v)=>{let f=v/6;return[.012+.07*Math.sin(f*Math.PI/2),5.72+.2+.13*f]}),[.09,5.72+.33],[.1,5.72+.34],[.1,5.72+.47],[.115,5.72+.48],[.115,6.34],[0,6.34]]),o=new gr,c=5,l=.028,h=.012,u=(.4-2*l-(c-1)*h)/c,d=.026;o.moveTo(-.4/2,0),o.lineTo(-.4/2,-.1);let p=-.4/2+l;o.lineTo(p,-.1);for(let b=0;b<c;b++){for(let v=1;v<=8;v++){let f=v/8;o.lineTo(p+u*f,-.1+d*Math.sin(Math.PI*f))}p+=u,b<c-1&&(p+=h,o.lineTo(p,-.1))}o.lineTo(.4/2,-.1),o.lineTo(.4/2,0),o.lineTo(-.4/2,0);let m=new ma(o,{depth:5.72-.42,bevelEnabled:!1,curveSegments:1});m.rotateX(-Math.PI/2),m.translate(0,.42,0);let _=[r,s,m.toNonIndexed()].map(b=>(b.deleteAttribute("uv"),b.index?b.toNonIndexed():b)),g=Sl(_);return g=f0(g,.3),g.computeVertexNormals(),g}function f0(a,e){let t=a.attributes.position,n=[],i=[new S,new S,new S];for(let s=0;s<t.count;s+=3){for(let u=0;u<3;u++)i[u].fromBufferAttribute(t,s+u);let o=i.map(u=>u.y),c=Math.min(...o),l=Math.max(...o),h=Math.ceil((l-c)/e);if(h<=1){for(let u of i)n.push(u.x,u.y,u.z);continue}for(let u=0;u<h;u++){let d=c+(l-c)*u/h,p=c+(l-c)*(u+1)/h,m=m0(i,d,p);for(let _=1;_<m.length-1;_++)for(let g of[m[0],m[_],m[_+1]])n.push(g.x,g.y,g.z)}}let r=new ut;return r.setAttribute("position",new ze(n,3)),r}function m0(a,e,t){let n=(r,s,o)=>{let c=[];for(let l=0;l<r.length;l++){let h=r[l],u=r[(l+1)%r.length],d=s(h.y),p=s(u.y);if(d&&c.push(h),d!==p){let m=(o-h.y)/(u.y-h.y);c.push(h.clone().lerp(u,m))}}return c},i=n(a,r=>r>=e-1e-6,e);return i.length&&(i=n(i,r=>r<=t+1e-6,t)),i}function g0(a){let i=Math.ceil(a.length/5),r=document.createElement("canvas");r.width=2048,r.height=Ct.ceilPowerOfTwo(i*240);let s=r.getContext("2d"),o=[],c=()=>{s.clearRect(0,0,r.width,r.height),a.forEach((h,u)=>{let d=u%5*384,p=Math.floor(u/5)*240,m=s.createLinearGradient(d,p,d+384,p+240);m.addColorStop(0,"#e9c87a"),m.addColorStop(.5,"#9a6e2a"),m.addColorStop(1,"#d8b060"),s.fillStyle=m,s.fillRect(d,p,384,240),m=s.createLinearGradient(d,p,d,p+240),m.addColorStop(0,"#f3ead8"),m.addColorStop(1,"#e2d5bd"),s.fillStyle=m,s.fillRect(d+10,p+10,364,220),s.strokeStyle="rgba(90,62,20,0.55)",s.lineWidth=2,s.strokeRect(d+18,p+18,348,204),s.fillStyle="#1d150d",s.textBaseline="alphabetic";let _=60;s.font=`600 ${_}px ${Ia}`;let g=String(h.name).split(" "),b=h.name,v="";for(;s.measureText(b).width>324&&_>40;)_-=2,s.font=`600 ${_}px ${Ia}`;if(s.measureText(b).width>324&&g.length>1){let T=g.length-1;for(;T>1&&s.measureText(g.slice(0,T).join(" ")).width>324;)T--;b=g.slice(0,T).join(" "),v=g.slice(T).join(" "),_=44,s.font=`600 ${_}px ${Ia}`}s.fillText(b,d+30,p+(v?64:84),324),v&&s.fillText(v,d+30,p+108,324),s.font=`500 22px ${of}`,s.fillStyle="#5d5145";let f=[h.kind,h.city].filter(Boolean).join(" \xB7 ");s.fillText(f.length>28?f.slice(0,27)+"\u2026":f,d+30,p+134,324),s.font=`700 16px ${of}`;let x=(h.label||(h.real_client?"Cliente real":"Concepto")).toUpperCase();"letterSpacing"in s&&(s.letterSpacing="2px");let E=s.measureText(x).width+20;h.real_client?(s.fillStyle="#1d150d",s.fillRect(d+30,p+160,E,34),s.fillStyle="#e8b84a"):(s.strokeStyle="#7a6a55",s.lineWidth=2,s.strokeRect(d+30.5,p+160.5,E,34),s.fillStyle="#4a3d2f"),s.fillText(x,d+40,p+183),"letterSpacing"in s&&(s.letterSpacing="0px")}),l.needsUpdate=!0};a.forEach((h,u)=>o.push([u%5*384/r.width,1-(Math.floor(u/5)+1)*240/r.height,384/r.width,240/r.height]));let l=Nr(r,{aniso:8});return c(),{tex:l,rects:o,redraw:c}}function b0(){return new en({uniforms:{},vertexShader:"varying vec3 vW; varying vec3 vNw; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vNw = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW; varying vec3 vNw;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      void main(){
        // coordenadas locales de la linterna: salas cada 12,5 m (sala 12 + muro 0,5), centro a 6 m del arranque
        float lz = mod(-vW.z - 6.0 + 6.25, 12.5) - 6.25;
        // ronda 3: los laterales de la caja eran cielo (morado): son el ca\xF1\xF3n de piedra de la linterna, en penumbra
        if (abs(vNw.y) < 0.6) {
          vec3 st = vec3(0.16, 0.12, 0.085) * (0.45 + 0.55 * smoothstep(8.6, 7.2, vW.y)) * (0.85 + 0.15 * sin(vW.y * 18.0));
          gl_FragColor = vec4(st, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          return;
        }
        vec2 q = vec2(vW.x, lz);
        float r = length(q / vec2(1.8, 3.2));
        vec3 sky = mix(vec3(0.030, 0.034, 0.090), vec3(0.006, 0.006, 0.020), smoothstep(0.0, 1.0, r));
        sky += vec3(0.045, 0.030, 0.090) * (1.0 - smoothstep(0.0, 0.9, length(q - vec2(0.55, 1.2))));
        // estrellas
        vec2 cell = floor(q * 14.0);
        float s = h(cell);
        vec2 f = fract(q * 14.0) - 0.5 - (vec2(h(cell + 3.1), h(cell + 7.7)) - 0.5) * 0.6;
        float star = step(0.86, s) * smoothstep(0.09, 0.0, length(f)) * (0.5 + 2.5 * h(cell + 1.3));
        sky += vec3(0.85, 0.88, 1.0) * star;
        // luna creciente peque\xF1a con mares y un halo ancho y suave (antes: disco blanco plano, parec\xEDa un plaf\xF3n)
        vec2 mc = vec2(0.6, 1.25);
        float d = length(q - mc), R = 0.16;
        float disc = smoothstep(R, R - 0.012, d);
        float shadow = smoothstep(R * 0.98, R * 0.9, length(q - mc - vec2(-0.075, 0.035)));
        float mare = 0.82 + 0.18 * smoothstep(0.35, 0.65, h(floor((q - mc) * 55.0))) - 0.12 * smoothstep(0.06, 0.0, length(q - mc - vec2(0.03, -0.04)));
        vec3 moonCol = vec3(1.55, 1.48, 1.3) * mare;
        float lit = disc * (1.0 - shadow * 0.93);
        sky = mix(sky, moonCol, lit);
        sky += vec3(0.16, 0.17, 0.24) * exp(-d * 3.2) * (1.0 - disc) + vec3(0.05, 0.05, 0.08) * exp(-d * 1.1);
        // nubes finas que cruzan
        float cl = smoothstep(0.55, 0.9, h(floor(q * vec2(3.0, 9.0))) * 0.6 + 0.4 * sin(q.x * 2.3 + q.y * 0.7));
        sky = mix(sky, sky * 0.55 + vec3(0.03, 0.03, 0.05), cl * 0.35);
        gl_FragColor = vec4(sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function v0(){return new en({transparent:!0,depthWrite:!1,blending:Er,side:Bt,uniforms:{},vertexShader:`varying vec3 vN; varying vec3 vV; varying float vH;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz);
        vH = uv.y; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`varying vec3 vN; varying vec3 vV; varying float vH;
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float a = pow(f, 2.2) * smoothstep(0.0, 0.75, vH) * (1.0 - smoothstep(0.92, 1.0, vH));
        gl_FragColor = vec4(vec3(0.40, 0.44, 0.62) * a * 0.05, 1.0); }`})}function _0(){let a=document.createElement("canvas");a.width=640,a.height=400;let e=a.getContext("2d"),t=e.createLinearGradient(0,0,0,400);t.addColorStop(0,"#efe4cc"),t.addColorStop(1,"#d9c9a8"),e.fillStyle=t,e.fillRect(0,0,640,400),e.strokeStyle="rgba(70,45,20,0.65)",e.lineWidth=2.5,e.lineCap="round";let n=(i,r,s,o)=>{e.beginPath(),e.moveTo(i+2,r),e.lineTo(i+s,r+1),e.lineTo(i+s-1,r+o),e.lineTo(i,r+o-1),e.closePath(),e.stroke()};n(40,34,560,34);for(let i=0;i<4;i++)e.beginPath(),e.moveTo(380+i*50,51),e.lineTo(410+i*50,51),e.stroke();n(40,96,260,160);for(let i=0;i<5;i++)e.beginPath(),e.moveTo(60,130+i*22),e.lineTo(260-i%2*50,130+i*22),e.stroke();return n(330,96,270,200),e.beginPath(),e.moveTo(330,296),e.lineTo(600,96),e.moveTo(330,96),e.lineTo(600,296),e.stroke(),n(60,276,120,36),e.fillStyle="#3a2410",e.textAlign="center",e.font=`italic 600 46px ${Ia}`,e.fillText("Tu web, aqu\xED",320,365),e.font=`italic 500 20px ${Ia}`,e.textAlign="right",e.fillText("\u2014 S4f",610,390),Nr(a)}function x0(a,e){let t=document.createElement("canvas");t.width=640,t.height=400;let n=t.getContext("2d");if(n.fillStyle="#1d1913",n.fillRect(0,0,640,400),a){let r=Math.max(640/a.width,400/a.height);n.drawImage(a,0,0,a.width,Math.min(a.height,400/r),0,0,a.width*r,Math.min(a.height*r,400))}let i=n.createLinearGradient(0,250,0,400);return i.addColorStop(0,"rgba(10,6,2,0)"),i.addColorStop(1,"rgba(10,6,2,0.85)"),n.fillStyle=i,n.fillRect(0,0,640,400),n.fillStyle="#f3d488",n.textAlign="center",n.font=`italic 600 40px ${Ia}`,n.fillText(e+" \u2192",320,375),Nr(t)}function y0(a){let e=new Wn;e.add(new $e(new Rn(10,10,10),new lt({color:723472,side:Vt})));let t=(r,s,o)=>{let c=new $e(new wt(3,3),new lt({color:new Ee(r).multiplyScalar(s),side:Bt}));c.position.set(...o),c.lookAt(0,0,0),e.add(c)};t(16767400,6,[-2.5,3,4]),t(14215423,1.5,[4,.8,3]),t(10374655,3,[2,2.5,-4]);let n=new Pi(a),i=n.fromScene(e,.04);return n.dispose(),i.texture}function cf(){let a=document.createElement("canvas");a.width=a.height=128;let e=a.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return e.fillStyle="#000",e.fillRect(0,0,128,128),t.addColorStop(0,"rgb(200,200,200)"),t.addColorStop(.35,"rgb(120,120,120)"),t.addColorStop(.7,"rgb(30,30,30)"),t.addColorStop(1,"rgb(0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new In(a)}function M0(a){let e=new Wn;e.add(new $e(new Rn(10,10,10),new lt({color:new Ee(.2,.13,.08),side:Vt})));let t=(r,s,o,c=3)=>{let l=new $e(new wt(c,c),new lt({color:new Ee(r).multiplyScalar(s),side:Bt}));l.position.set(...o),l.lookAt(0,0,0),e.add(l)};t(16769712,5,[0,4.5,1.5],4),t(16756848,2.2,[0,-3,3],5),t(16773336,8,[3,1,4],1.2);let n=new Pi(a),i=n.fromScene(e,.03);return n.dispose(),i.texture}function df({group:a,gltfScene:e,json:t,P:n,matcap:i,renderer:r,scene:s,texLoader:o,base:c,onDirty:l,loader:h}){let u=[],d=re=>(u.push(re),re),p=new S(0,0,1),m=new Be,_=new S(1,1,1),g=null,b={};e.traverse(re=>{if(!re.isMesh)return;let ne=re.material.name;b[ne]=b[ne]||re.material,re.isInstancedMesh&&(ne==="Cartela"||ne==="Oro"||ne==="Emisor_lampara")&&(re.visible=!1),!re.isInstancedMesh&&ne==="Pared"&&(g=re)});for(let[re,ne]of[["Pared",a0],["Piedra",s0]]){let oe=b[re];if(!oe||!oe.map)continue;let Ae=r0(oe.map),Je=d(ne(Ae));Je.flipY=oe.map.flipY,Je.repeat.copy(oe.map.repeat),Je.offset.copy(oe.map.offset),Je.channel=oe.map.channel,oe.map.dispose(),oe.map=Je,oe.needsUpdate=!0}if(b.Emisor_luna){let re=d(b0());re.name="Cielo",e.traverse(ne=>{ne.isMesh&&ne.material&&ne.material.name==="Emisor_luna"&&(ne.material.dispose(),ne.material=re)})}let v=(re,ne,oe=1)=>(m.compose(ne,re._q,_.set(oe,oe,1)),m),f=d(c0(n[0].size[0],n[0].size[1])),x=d(l0()),E=d(new vr({matcap:i,color:15389344,bumpMap:x,bumpScale:.9})),T=new yn(f,E,n.length+2);T.name="Marcos";let P=new S;n.forEach((re,ne)=>T.setMatrixAt(ne,v(re,P.copy(re._pos).addScaledVector(re._n,-.011)))),T.count=n.length,a.add(T);let{body:R,glow:I}=h0();d(R),d(I);let N=d(y0(r)),U=d(M0(r));s.environment=N,s.environmentIntensity=.7;let O=d(new wi({color:10254916,metalness:.85,roughness:.42,envMap:U,envMapIntensity:.9})),J=d(new lt({color:new Ee(3.2,2.3,1.3),side:Bt})),G=new yn(R,O,n.length),K=new yn(I,J,n.length);G.name="Lamparas",K.name="Lamparas_luz";let Z=n[0].size[1]/2+.205,ae=new S;n.forEach((re,ne)=>{ae.set(0,1,0),P.copy(re._pos).addScaledVector(re._n,-.013).addScaledVector(ae,Z+.12),G.setMatrixAt(ne,v(re,P)),K.setMatrixAt(ne,m)}),a.add(G,K);let ie=n[0].size[0]+.7,le=n[0].size[1]+.45,Le=d(new wt(ie,le)),we=d(new lt({map:d(u0()),color:new Ee(1,.72,.42).multiplyScalar(.2),transparent:!0,blending:Er,depthWrite:!1})),Pe=new yn(Le,we,n.length);Pe.name="Lamparas_charco",Pe.renderOrder=3,n.forEach((re,ne)=>{P.copy(re._pos).addScaledVector(re._n,.05).addScaledVector(ae.set(0,1,0),Z+.12-le/2+.02),Pe.setMatrixAt(ne,v(re,P))}),a.add(Pe);let se=g0(n);d(se.tex),document.fonts&&document.fonts.load&&Promise.all([document.fonts.load("600 40px Cormorant"),document.fonts.load("italic 500 19px Cormorant")]).then(()=>{se.redraw(),l()}).catch(()=>{});let be=.5,ge=.3,Fe=d(new wt(be,ge)),Me=new Float32Array(n.length*4);n.forEach((re,ne)=>Me.set(se.rects[ne],ne*4)),Fe.setAttribute("aRect",new Cn(Me,4));let A=d(new lt({map:se.tex,color:new Ee(.74,.69,.62)}));A.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = aRect.xy + uv * aRect.zw;`)};let w=new yn(Fe,A,n.length);w.name="Cartelas";let H=new S;n.forEach((re,ne)=>{H.set(1,0,0).applyQuaternion(re._q);let oe=re.size[0]/2+.205,Ae=re._pos.y-re.size[1]/2-.205;P.copy(re._pos).addScaledVector(re._n,-.001).addScaledVector(H,-(oe-be/2)).setY(Ae-.05-ge/2),w.setMatrixAt(ne,v(re,P)),re._cartela=P.clone()}),a.add(w);try{g&&b.Piedra&&B()}catch(re){console.warn("pilastras:",re)}function B(){let re=g.geometry,ne=g.material.lightMap;if(!re.attributes.uv1||!ne||!ne.image)return;let oe=512,Ae=document.createElement("canvas");Ae.width=Ae.height=oe;let Je=Ae.getContext("2d",{willReadFrequently:!0});Je.drawImage(ne.image,0,0,oe,oe);let xe=Je.getImageData(0,0,oe,oe).data,We=D=>(D/=255,D<=.04045?D/12.92:Math.pow((D+.055)/1.055,2.4)),ke=g.material.lightMapIntensity/Math.PI,Pt=(D,Y,j)=>{let $=Math.min(oe-1,Math.max(0,Math.round(D*(oe-1)))),pe=(Math.min(oe-1,Math.max(0,Math.round(Y*(oe-1))))*oe+$)*4;j[0]=We(xe[pe])*ke,j[1]=We(xe[pe+1])*ke,j[2]=We(xe[pe+2])*ke},vt={"-1":[],1:[]};for(let D of n)vt[Math.sign(D._n.x)<0?"1":"-1"].push(D._pos.z);let F=[];for(let[D,Y]of Object.entries(vt)){Y.sort((j,$)=>$-j);for(let j=0;j<Y.length-1;j++)Math.abs(Y[j]-Y[j+1])<4.2&&F.push([+D,(Y[j]+Y[j+1])/2])}if(!F.length)return;let st=Math.abs(n[0]._pos.x)+.013,tt=p0(),ot=tt.attributes.normal,Wt=new Float32Array(ot.count);for(let D=0;D<ot.count;D++){let Y=ot.getX(D),j=ot.getY(D),$=ot.getZ(D);Wt[D]=.3+.78*Math.max(0,Y*.5+j*.42+$*.76)-.1*Math.max(0,-j)}let Yt=new Ji,Sn=new $e(re);Sn.matrixWorld.copy(g.matrixWorld);let Nn=new S,Kt=new S,ui=new S,Xn=[0,0,0],Tn=[];for(let[D,Y]of F){let j=tt.clone();j.rotateY(D>0?-Math.PI/2:Math.PI/2),j.translate(D*st,0,Y);let $=j.attributes.position,ue=j.attributes.normal,pe=new Float32Array($.count*3),_e=new Float32Array($.count*2);Nn.set(D,0,0);let y=new Map;for(let k=0;k<$.count;k++){Kt.fromBufferAttribute($,k);let V=Math.min(6.3,Math.max(1.05,Kt.y)),Q=Math.round(Kt.z*20)+":"+Math.round(V*20),W=y.get(Q);if(!W){Yt.set(Kt.set(D*(st-.4),V,Kt.z),Nn),Yt.far=1;let ve=Yt.intersectObject(Sn,!1)[0];W=[.02,.02,.02],ve&&ve.uv1&&(Pt(ve.uv1.x,ve.uv1.y,Xn),W=Xn.slice()),y.set(Q,W)}let ee=Wt[k],de=d0*(.55+.45*Math.min(1,Math.max(0,(V-.5)/5)));pe[k*3]=(W[0]+de*mu[0])*ee,pe[k*3+1]=(W[1]+de*mu[1])*ee,pe[k*3+2]=(W[2]+de*mu[2])*ee,Kt.fromBufferAttribute($,k),_e[k*2]=(Kt.z+Kt.x)/1.2,_e[k*2+1]=Kt.y/1.2}j.setAttribute("color",new Tt(pe,3)),j.setAttribute("uv",new Tt(_e,2)),Tn.push(j)}let mn=d(Sl(Tn)),di=b.Piedra,Fn=mn.attributes.color;for(let D=0;D<Fn.count;D++){let Y=Fn.getX(D),j=Fn.getY(D),$=Fn.getZ(D),ue=.2126*Y+.7152*j+.0722*$;Fn.setXYZ(D,ue+(Y-ue)*.45,ue+(j-ue)*.45,ue+($-ue)*.45)}let ir=d(new lt({vertexColors:!0,color:new Ee(.66,.6,.5)})),Bi=new $e(mn,ir);Bi.name="Pilastras",a.add(Bi)}let M=d(v0()),C=d(new Ei(.75,1.5,6.8,32,1,!0));C.translate(0,3.4,0);let z=t.rooms||1,L=d(new wt(3.6,2.6)),te=d(new lt({map:d(cf()),color:new Ee(.42,.47,.7).multiplyScalar(.22),transparent:!0,blending:Er,depthWrite:!1}));for(let re=0;re<z;re++){let ne=new $e(C,M);ne.position.set(.35,0,-(re*12.5+6)),ne.rotation.set(0,0,-.08),ne.name="Haz",ne.renderOrder=2,a.add(ne);let oe=new $e(L,te);oe.rotation.x=-Math.PI/2,oe.position.set(.35+6.8*Math.sin(.08)*.5,.012,-(re*12.5+6)),oe.name="Haz_suelo",oe.renderOrder=2,a.add(oe)}let X={},q=1.44,he=.9,Se=d(new wt(q,he));function fe(re,ne){let oe=ne.z-3.48,Ae=1.72,Je=d(new lt({color:new Ee(.95,.9,.82)})),xe=new $e(Se,Je),We=ne.x+Math.sign(ne.x)*.16;xe.position.set(We,Ae,oe),xe.name="Nicho_"+re,a.add(xe);let ke=new $e(f,E);ke.scale.set(q/n[0].size[0],he/n[0].size[1],1),ke.position.set(We,Ae,oe-.012),a.add(ke),X[re]=xe}let me={root:null,mixer:null,actions:{},where:null,visible:!1},Ce=null;function Ge(){h&&h.loadAsync(c+"assets/s4f/s4f.glb").then(re=>{if(Ke)return;let ne=re.scene;ne.traverse(st=>{if(st.isMesh){st.frustumCulled=!1;let tt=st.material;tt&&tt.emissive&&tt.emissiveIntensity>0&&(tt.emissiveIntensity*=1.3)}});let oe=new Et().setFromObject(ne,!0),Je=1.3/(oe.max.y-oe.min.y),xe=new Gt;ne.scale.setScalar(Je),ne.position.y=-oe.min.y*Je,xe.add(ne),xe.visible=!1,xe.name="S4f",a.add(xe),me.root=xe,me.mixer=new Tr(ne);for(let st of re.animations)me.actions[st.name]=me.mixer.clipAction(st);s.environment=N;let We=new Gt,ke=new Pn(16763016,2.4);ke.position.set(-1.5,6,3);let Pt=new Pn(10374655,1.1);Pt.position.set(2,3,-4);let vt=new Mr(11569766,6961692,1);We.add(ke,Pt,vt,ke.target,Pt.target),xe.add(We),ke.target.position.set(0,.6,0),Pt.target.position.set(0,.6,0);let F=new $e(new wt(1.1,.8),new lt({color:0,alphaMap:d(cf()),transparent:!0,opacity:.55,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=.012,F.renderOrder=1,xe.add(F),Ce=We,l()}).catch(re=>console.warn("S4f en el museo:",re))}let Ke=!1;function qe(re){if(!me.root||me.where===re)return;me.where=re;let ne=me.root;if(!re){ne.visible=!1,me.visible=!1,me.mixer.stopAllAction();return}let oe=re==="entrada"?me.entrada:me.decision;if(!oe){ne.visible=!1,me.visible=!1;return}ne.position.copy(oe.pos),ne.rotation.set(0,oe.yaw,0),ne.visible=!0,me.visible=!0,me.mixer.stopAllAction();let Ae=me.actions[oe.action]||me.actions.presentar||Object.values(me.actions)[0];Ae&&Ae.reset().play()}return{frames:T,lamps:G,cartelas:w,setS4fSpots(re){Object.assign(me,re),Ge()},addNiche:fe,setNiche(re,{thumb:ne,nombre:oe}){let Ae=X[re];if(!Ae)return;if(re==="taller"){Ae.material.map=d(_0()),Ae.material.needsUpdate=!0,l();return}let Je=We=>{let ke=Ae.material.map;Ae.material.map=d(x0(We,oe)),Ae.material.needsUpdate=!0,ke&&ke.dispose(),l()};if(!ne)return Je(null);let xe=new Image;xe.onload=()=>Je(xe),xe.onerror=()=>Je(null),xe.src=ne},update(re,ne,oe){let Ae=ne>oe-2.6?"decision":null;return qe(Ae),me.visible&&me.mixer?(me.mixer.update(re),!0):!1},get s4fState(){return{loaded:!!me.root,where:me.where,visible:me.visible}},dispose(){Ke=!0,me.mixer&&me.mixer.stopAllAction(),me.root&&me.root.traverse(re=>{re.isMesh&&(re.geometry.dispose(),(Array.isArray(re.material)?re.material:[re.material]).forEach(oe=>{for(let Ae in oe)oe[Ae]&&oe[Ae].isTexture&&oe[Ae].dispose();oe.dispose()}))}),s.environment=null;for(let re of u)re&&re.dispose&&re.dispose()}}}var S0=1,gu=50,T0=1.5,E0=60,w0=-.8,pf=1,ff=2.2,La={gain:{Pared:2.4,Tela:2,Techo:1.9,Madera:2.1},ambient:{def:.05,Pared:.16,Techo:.14,Suelo:.035,Madera:.08},ambientColor:[1,.72,.46],nicheTaller:[1,.6,.24],nicheSigo:[.78,.24,.2]};function gf(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function A0(){let a=document.createElement("canvas");a.width=a.height=256;let e=a.getContext("2d"),t=e.createRadialGradient(100,90,4,128,128,128);t.addColorStop(0,"#fff3c4"),t.addColorStop(.18,"#f0c35a"),t.addColorStop(.5,"#a9741f"),t.addColorStop(.82,"#4a2c0a"),t.addColorStop(1,"#1d1004"),e.fillStyle=t,e.fillRect(0,0,256,256),t=e.createRadialGradient(170,190,2,170,190,70),t.addColorStop(0,"rgba(255,214,120,0.55)"),t.addColorStop(1,"rgba(255,214,120,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new In(a);return n.colorSpace=ft,n}var R0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function bu(a,e,t={}){return new en({vertexShader:R0,fragmentShader:a,uniforms:e,depthTest:!1,depthWrite:!1,...t})}var vu=class{constructor(e){this.r=e;let t={type:Ii,depthBuffer:!1};this.scene=new hn(4,4,{type:Ii,samples:2}),this.a=new hn(4,4,t),this.b=new hn(4,4,t),this.quad=new $e(new wt(2,2)),this.quad.frustumCulled=!1,this.cam=new qi,this.qs=new Wn,this.qs.add(this.quad),this.bright=bu(`uniform sampler2D t; uniform vec2 px; varying vec2 vUv;
      void main(){ vec3 c = vec3(0.0);
        c += texture2D(t, vUv + px * vec2(-1.0,-1.0)).rgb; c += texture2D(t, vUv + px * vec2(1.0,-1.0)).rgb;
        c += texture2D(t, vUv + px * vec2(-1.0, 1.0)).rgb; c += texture2D(t, vUv + px * vec2(1.0, 1.0)).rgb;
        c *= 0.25; float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        gl_FragColor = vec4(c * smoothstep(0.85, 1.6, l), 1.0); }`,{t:{value:null},px:{value:new ce}}),this.blur=bu(`uniform sampler2D t; uniform vec2 dir; varying vec2 vUv;
      void main(){ vec3 c = texture2D(t, vUv).rgb * 0.227;
        c += (texture2D(t, vUv + dir * 1.385).rgb + texture2D(t, vUv - dir * 1.385).rgb) * 0.316;
        c += (texture2D(t, vUv + dir * 3.231).rgb + texture2D(t, vUv - dir * 3.231).rgb) * 0.070;
        gl_FragColor = vec4(c, 1.0); }`,{t:{value:null},dir:{value:new ce}}),this.comp=bu(`uniform sampler2D s; uniform sampler2D b; uniform float k; varying vec2 vUv;
      void main(){ vec3 c = texture2D(s, vUv).rgb;
        // gradaci\xF3n \xE1mbar (la del render de la puerta): sombras algo c\xE1lidas, solo multiplicativa (W21); vi\xF1eta suave
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(c, c * vec3(1.06, 0.98, 0.86), (1.0 - smoothstep(0.0, 0.25, l)) * 0.6);
        vec2 q = vUv - 0.5; c *= 1.0 - dot(q, q) * 0.55;
        gl_FragColor = vec4(c + texture2D(b, vUv).rgb * k, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,{s:{value:null},b:{value:null},k:{value:.55}})}setSize(e,t){this.scene.setSize(e,t);let n=Math.max(1,e>>2),i=Math.max(1,t>>2);this.a.setSize(n,i),this.b.setSize(n,i),this.bright.uniforms.px.value.set(1/e,1/t),this.qw=n,this.qh=i}pass(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.qs,this.cam)}render(e,t){let n=this.r;n.setRenderTarget(this.scene),n.render(e,t),this.bright.uniforms.t.value=this.scene.texture,this.pass(this.bright,this.a);for(let i=0;i<2;i++)this.blur.uniforms.t.value=this.a.texture,this.blur.uniforms.dir.value.set((1+i)/this.qw,0),this.pass(this.blur,this.b),this.blur.uniforms.t.value=this.b.texture,this.blur.uniforms.dir.value.set(0,(1+i)/this.qh),this.pass(this.blur,this.a);this.comp.uniforms.s.value=this.scene.texture,this.comp.uniforms.b.value=this.a.texture,this.pass(this.comp,null)}dispose(){[this.scene,this.a,this.b].forEach(e=>e.dispose()),[this.bright,this.blur,this.comp].forEach(e=>e.dispose())}};function mf(a){let e=document.createElement("canvas");e.width=1024,e.height=160;let t=new In(e);t.colorSpace=ft,t.anisotropy=4;let n=()=>{let i=e.getContext("2d");i.clearRect(0,0,e.width,e.height);let r=104,s=h=>`600 ${h}px Cormorant, "Cormorant Garamond", Georgia, serif`;for(i.font=s(r),("letterSpacing"in i)&&(i.letterSpacing="10px");i.measureText(a).width>e.width-40&&r>40;)r-=4,i.font=s(r);i.textAlign="center",i.textBaseline="middle";let o=e.width/2,c=e.height/2;i.fillStyle="rgba(8,4,1,0.9)",i.fillText(a,o+4,c+5),i.fillStyle="rgba(255,236,190,0.9)",i.fillText(a,o-1.5,c-1.5),i.fillStyle="#5a3a10",i.fillText(a,o+1.5,c+1.5);let l=i.createLinearGradient(0,c-r/2,0,c+r/2);l.addColorStop(0,"#f6dc98"),l.addColorStop(.35,"#d9a441"),l.addColorStop(.62,"#a8761f"),l.addColorStop(1,"#e0b45a"),i.fillStyle=l,i.fillText(a,o,c),t.needsUpdate=!0};return n(),document.fonts&&document.fonts.load&&document.fonts.load("600 64px Cormorant").then(()=>{n(),t.onFontReady&&t.onFontReady()}).catch(()=>{}),t}var Da=null;function C0(){if(Da)return Da;let a=document.createElement("canvas");a.width=1024,a.height=208;let e=a.getContext("2d"),t=e.createLinearGradient(0,0,0,a.height);return t.addColorStop(0,"#8a6424"),t.addColorStop(.5,"#e2b862"),t.addColorStop(1,"#6e4c18"),e.fillStyle=t,e.fillRect(0,0,a.width,a.height),t=e.createLinearGradient(0,0,0,a.height),t.addColorStop(0,"#1f1310"),t.addColorStop(1,"#120a08"),e.fillStyle=t,e.fillRect(10,10,a.width-20,a.height-20),e.strokeStyle="rgba(226,184,98,0.55)",e.lineWidth=3,e.strokeRect(22,22,a.width-44,a.height-44),Da=new In(a),Da.colorSpace=ft,Da.anisotropy=4,Da}function bf({canvas:a,section:e,base:t="",onStop:n,onDecision:i,onPick:r,onArch:s,onLoading:o,libre:c=null}){let l=new yl({canvas:a,antialias:!0,powerPreference:"high-performance"});l.outputColorSpace=ft,l.toneMapping=al,l.toneMappingExposure=pf,l.info.autoReset=!1;let h=l.getContext(),u="";try{let D=h.getExtension("WEBGL_debug_renderer_info");u=D?h.getParameter(D.UNMASKED_RENDERER_WEBGL):h.getParameter(h.RENDERER)}catch{}let d=new Wn;d.background=new Ee(328711);let p=new Nt(60,1,.05,120),m=new Tl().setMeshoptDecoder(sf),_=new xr,g=A0(),b=new vu(l),v={ready:!1,ala:null,loading:!1,error:null,fps:0,bloom:!0,dpr:1,calls:0,tris:0,gpu:u,bytes:0,painting:-1,stop:-1,decision:!1,frames:0,progress:0,s4f:null},f=null,x={taller:"TALLER",sigo:"SIGO VIENDO"},E={nombre:"Siguiente sala",thumb:null},T=!0,P=!1,R=!1,I=0,N=0,U=new S,O=new S(0,0,-1),J=new S,G=new S(0,0,-1),K=0,Z=0,ae=0,ie=0,le={cams:null,first:21,fmt:"desktop",frame:-1,img:null,vh:0,dz:3.8,front:3},Le=new Be,we=new Be,Pe=new _n(new S(0,0,-1),0);l.clippingPlanes=[Pe];let se="museo",be=0,ge=2.6,Fe=!0,Me={w:1,h:1,hfov:60,vfov:50};function A(){let D=a.clientWidth||innerWidth,Y=a.clientHeight||innerHeight;v.dprMove=Math.min(devicePixelRatio||1,v.dprCap||(D<700?1.35:T0)),v.dprStill=Math.min(devicePixelRatio||1,v.dprCap||2),v.dpr=0,l.setSize(D,Y,!1),w(v.dprMove),p.aspect=D/Y;let j=c?66:46,$=p.aspect<1?Ct.radToDeg(2*Math.atan(Math.tan(Ct.degToRad(j/2))/p.aspect)):c?58:52;Object.assign(Me,{w:D,h:Y,vfov:$,hfov:Ct.radToDeg(2*Math.atan(Math.tan(Ct.degToRad($/2))*p.aspect))}),H(),f&&(me(),We(N)),T=!0}function w(D){v.dpr!==D&&(v.dpr=D,l.setPixelRatio(D),l.setSize(a.clientWidth||innerWidth,a.clientHeight||innerHeight,!1),b.setSize(Math.round(l.domElement.width),Math.round(l.domElement.height)),T=!0)}function H(){let D=Z;p.fov=D>.001?Ct.radToDeg(2*Math.atan(Math.tan(Ct.degToRad(Me.vfov/2))*(1+D))):Me.vfov,D>.001?p.setViewOffset(Me.w,Me.h*(1+D),0,Me.h*D,Me.w,Me.h):p.clearViewOffset(),p.updateProjectionMatrix()}addEventListener("resize",A);async function B(D){let Y=await fetch(D);if(!Y.ok)throw new Error(D+" "+Y.status);let j=await Y.arrayBuffer();return v.bytes+=j.byteLength,j}function M(){if(f){d.remove(f.group),f.deco&&f.deco.dispose(),f.group.traverse(D=>{if(D.name==="S4f")return;D.geometry&&D.geometry.dispose();let Y=D.material?Array.isArray(D.material)?D.material:[D.material]:[];for(let j of Y){for(let $ of["map","lightMap","emissiveMap"])j[$]&&j[$]!==g&&j[$].dispose();j.dispose()}});for(let D of f.sharpCache.values())D.tex&&D.tex.dispose();for(let D of Object.values(f.arches||{}))D.label.material.map.dispose(),D.label.material.dispose(),D.label.geometry.dispose();f=null}}async function C(D){if(v.ala===D&&(f||v.loading))return;let Y=C.gen=(C.gen||0)+1;v.loading=!0,v.ready=!1,v.error=null,v.ala=D,o&&o(!0);try{let j=JSON.parse(new TextDecoder().decode(await B(t+`assets/museo/${D}.json`))),[$,ue]=await Promise.all([B(t+j.glb),new Promise((_e,y)=>_.load(t+j.atlas.src,_e,void 0,y))]),pe=await new Promise((_e,y)=>m.parse($,t,_e,y));if(Y!==C.gen)return;M(),f=X(j,pe,ue),d.add(f.group),Fe=!0,v.ready=!0,We(N),T=!0,tt(1500)}catch(j){throw v.error=String(j),console.error("museo3d:",j),j}finally{Y===C.gen&&(v.loading=!1,o&&o(!1))}}function z(D,Y){return D.onBeforeCompile=j=>{j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vQ;
varying vec3 vWp;`+(Y?`
attribute vec4 aRect;`:"")).replace("#include <uv_vertex>",`#include <uv_vertex>
vQ = uv;`+(Y?`
vMapUv = aRect.xy + uv * aRect.zw;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
vWp = (modelMatrix * `+(Y?"instanceMatrix * ":"")+"vec4(transformed, 1.0)).xyz;"),j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vQ;
varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
          float lamp = mix(0.80, 1.04, smoothstep(0.0, 1.0, vQ.y)) * (1.0 - 0.22 * pow(abs(vQ.x - 0.5) * 2.0, 2.0));
          vec2 e = min(vQ, 1.0 - vQ) * vec2(2.24, 1.4);
          float edge = smoothstep(0.0, 0.05, min(e.x, e.y)) * 0.28 + 0.72;
          diffuseColor.rgb *= lamp * edge;
          vec3 toCam = normalize(cameraPosition - vWp);
          float sweep = vQ.x * 0.75 + vQ.y * 0.55 + toCam.z * 0.6 + toCam.x * 0.35;
          float glare = smoothstep(0.16, 0.0, abs(fract(sweep * 0.8) - 0.5)) * 0.045 + 0.018 * vQ.y;
          diffuseColor.rgb += vec3(1.0, 0.92, 0.8) * glare;`)},D}let L={z:{value:-1e9},a:{value:new Ee(...La.nicheTaller)},b:{value:new Ee(...La.nicheSigo)}};function te(D,Y){D.onBeforeCompile=j=>{j.uniforms.uAmb={value:new Ee(...La.ambientColor).multiplyScalar(Y||0)},j.uniforms.uNicheZ=L.z,j.uniforms.uNicheA=L.a,j.uniforms.uNicheB=L.b,j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp3;`).replace("#include <project_vertex>",`#include <project_vertex>
vWp3 = (modelMatrix * vec4(transformed, 1.0)).xyz;`),j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uAmb; uniform float uNicheZ; uniform vec3 uNicheA; uniform vec3 uNicheB;
varying vec3 vWp3;`).replace("#include <aomap_fragment>",`{
          float nk = smoothstep(uNicheZ + 6.0, uNicheZ - 0.3, vWp3.z);
          if (nk > 0.0) {
            vec3 d = reflectedLight.indirectDiffuse;
            // luz que baja del techo del nicho (B7): m\xE1s clara arriba, penumbra abajo
            float l = min(dot(d, vec3(0.2126, 0.7152, 0.0722)), 1.2) * mix(0.1, 0.26, smoothstep(0.0, 3.2, vWp3.y));   // ronda 3: con m\xE1s luz AgX lo lavaba a beige / rosa
            vec3 tint = vWp3.x < 0.0 ? uNicheA : uNicheB;
            reflectedLight.indirectDiffuse = mix(d, l * tint, nk);
          }
          reflectedLight.indirectDiffuse += uAmb * (0.55 + 0.45 * smoothstep(0.5, 5.5, vWp3.y));
        }
        #include <aomap_fragment>`)}}function X(D,Y,j){let $=new Gt,ue=D.lightmap&&D.lightmap.scale||1,pe=D.tints||{},_e=Oe=>Oe.emissive.clone().multiplyScalar(Oe.emissiveIntensity||1);Y.scene.traverse(Oe=>{if(!Oe.isMesh)return;let De=Oe.material,Ue=De.name||"",yt;if(Ue==="Cartela")yt=new lt({color:new Ee(.24,.21,.17)}),Oe.visible=!1;else if(Ue==="Oro")yt=new vr({matcap:g,color:16777215});else if(Ue.startsWith("Emisor")){let Jt={Emisor_neon:.32,Emisor_calido:.5,Emisor_lampara:.16,Emisor_luna:.3}[Ue]||.5,gn=_e(De).multiplyScalar(Jt);yt=new lt({color:gn})}else{let Jt=De.emissiveMap;Jt&&(Jt.colorSpace=ft,Jt.channel=1,Jt.anisotropy=1);let gn=De.map;gn&&(gn.anisotropy=4);let Zt=pe[Ue]||[1,1,1],on=La.gain[Ue]||1;yt=new lt({map:gn,lightMap:Jt,lightMapIntensity:Math.PI*ue,color:new Ee(Zt[0]*on,Zt[1]*on,Zt[2]*on)}),te(yt,La.ambient[Ue]??La.ambient.def)}yt.name=Ue,Oe.material=yt,De.dispose(),Oe.matrixAutoUpdate=!1,Oe.updateMatrix()}),$.add(Y.scene),Y.scene.updateMatrixWorld(!0);{let De=new Ji(new S(0,1.6,0),new S(0,0,1),0,20).intersectObject(Y.scene,!0)[0];le.front=De?De.point.z:new Et().setFromObject(Y.scene).max.z-.5,le.dz=le.front-w0}let y={},k=new Et,V=new S;for(let[Oe,De]of[["taller","Inscripcion_TALLER"],["sigo","Inscripcion_ARCHIVO"]]){let Ue=Y.scene.getObjectByName(De);if(!Ue)continue;k.setFromObject(Ue),k.getCenter(V),Ue.visible=!1;let yt=mf(x[Oe]);yt.onFontReady=()=>{T=!0,tt(200)};let Jt=new $e(new wt(2.6,2.6*160/1024),new lt({map:yt,transparent:!0,depthWrite:!1})),gn=V.y-.04;Jt.position.set(V.x,gn,V.z+.035),Jt.name="Rotulo_"+Oe,$.add(Jt);let Zt=new $e(new wt(2.75,.56),new lt({map:C0()}));Zt.position.set(V.x,gn,V.z+.02),Zt.name="Cartela_"+Oe,$.add(Zt),y[Oe]={x:V.x,z:V.z,top:V.y-.62,half:.95,label:Jt,text:x[Oe]}}y.taller||y.sigo?L.z.value=(y.taller||y.sigo).z-.05:L.z.value=-1e9,j.colorSpace=ft,j.anisotropy=4,j.generateMipmaps=!0;let Q=D.paintings,W=new wt(1,1),ee=new Float32Array(Q.length*4);Q.forEach((Oe,De)=>ee.set(Oe.atlas,De*4)),W.setAttribute("aRect",new Cn(ee,4));let de=new Ee(1,.95,.86),ve=z(new lt({map:j,color:de}),!0),ye=new yn(W,ve,Q.length),Ie=new Be,Re=new Mt,Ne=new S,Ve=new S,nt=new S,bt=new S(0,0,1);Q.forEach((Oe,De)=>{Ve.fromArray(Oe.pos),nt.fromArray(Oe.normal),Re.setFromUnitVectors(bt,nt),Ne.set(Oe.size[0],Oe.size[1],1),Ie.compose(Ve,Re,Ne),ye.setMatrixAt(De,Ie),Oe._pos=Ve.clone(),Oe._n=nt.clone(),Oe._q=Re.clone(),Oe._room=Math.max(0,Math.floor(-Oe._pos.z/12.5))}),ye.instanceMatrix.needsUpdate=!0,ye.computeBoundingSphere(),ye.name="Cuadros",$.add(ye);let _t=[];for(let Oe=0;Oe<3;Oe++){let De=new $e(new wt(1,1),z(new lt({color:de}),!1));De.visible=!1,De.name="Nitido"+Oe,$.add(De),_t.push(De)}let ct=null;try{ct=df({group:$,gltfScene:Y.scene,json:D,P:Q,matcap:g,renderer:l,scene:d,texLoader:_,base:t,loader:m,onDirty:()=>{T=!0,tt(300)}});for(let[Oe,De]of Object.entries(y))ct.addNiche(Oe,De);ct.setNiche("taller",{}),ct.setNiche("sigo",E)}catch(Oe){console.warn("decoraci\xF3n del museo:",Oe)}let Ye=D.stops,dt={group:$,json:D,inst:ye,P:Q,sharp:_t,sharpCache:new Map,stops:Ye,curve:D.curve,arches:y,deco:ct};if(f=dt,me(),ct&&!c){let Oe=dt.keys[0],De=dt.keys[dt.keys.length-1],Ue=Oe.dir.clone().setY(0).normalize(),yt=new S(-Ue.z,0,Ue.x);ct.setS4fSpots({entrada:{pos:Oe.pos.clone().addScaledVector(Ue,6.2).addScaledVector(yt,1.45).setY(0),yaw:Math.atan2(-Ue.x,-Ue.z)-.35,action:"saludar"},decision:y.taller&&y.sigo?{pos:new S((y.taller.x+y.sigo.x)/2,0,y.taller.z+.7),yaw:-.2,action:"presentar"}:null})}return dt}let q=new S,he=D=>Math.atan2(D.x,-D.z),Se=D=>Math.asin(Math.max(-1,Math.min(1,D.y)));function fe(D,Y,j){return j.set(Math.sin(D)*Math.cos(Y),Math.sin(Y),-Math.cos(D)*Math.cos(Y))}function me(){let D=f;if(!D)return;let Y=D.curve,j=Y.res,$=[],ue=Math.tan(Ct.degToRad(Me.hfov/2)),pe=Math.tan(Ct.degToRad(Me.vfov/2)),_e=Me.w/Me.h>1.15;D.stops.forEach((ee,de)=>{let ve=new S().fromArray(Y.pos[Math.min(de*j,Y.pos.length-1)]),ye=new S().fromArray(Y.tgt[Math.min(de*j,Y.tgt.length-1)]),Ie={kind:ee.kind,painting:ee.painting,pos:ve,dir:ye.clone().sub(ve).normalize(),shift:0};if(ee.kind==="cuadro"){let Re=D.P[ee.painting],Ne=q.set(1,0,0).applyQuaternion(Re._q).clone(),Ve=Re.size[1]/2+.205,nt=Re._pos.y+Ve+.33,bt=Re._pos.y-Ve-.05-.3,_t=_e?Re.size[0]/2+.205+.5:1.42,ct=_e?(nt-bt)/2+.1:1.45,Ye=Re._pos.clone().setY(_e?(nt+bt)/2:2.15),dt=Ct.clamp(Math.max(_t/ue,ct/pe)*1.03,2,7.6);Ie.pos=Ye.clone().addScaledVector(Re._n,dt).setY(ff),Ie.dir=Ye.clone().sub(Ie.pos).normalize()}else if(ee.kind==="paso"){let Re=D.stops[de-1],Ne=D.stops[de+1],Ve=nt=>nt&&nt.kind==="cuadro"?D.P[nt.painting]._room:-1;if(Re&&Ne&&Ve(Re)===Ve(Ne)&&Ve(Re)>=0)return;Ie.dir.set(0,-.02,-1).normalize()}else if(ee.kind==="decision"){let Re=D.arches.taller||D.arches.sigo,Ne=Re?Re.z:ve.z-7.5,nt=Math.max((2.85+.2)/ue,7.4);Ie.pos.set(0,2.6,Ne+Math.min(7.6,nt)),Ie.dir.set(0,0,-1),Ie.shift=Me.w/Me.h<1?.45:.42}$.push(Ie)});let y=E0/gu,k=le.cams?le.vh/gu:0,V=k?[[0,"door",0,k],[k,"lead",0,y]]:[[0,"lead",0,y]],Q=k+y,W=(ee,de)=>ee.kind==="cuadro"?S0:ee.kind==="decision"?.9:de===0?.25:0;$.forEach((ee,de)=>{let ve=W(ee,de);if(ve&&(V.push([Q,"dwell",de,ve]),Q+=ve),de<$.length-1){let ye=$[de+1],Ie=ee.pos.distanceTo(ye.pos),Re=Math.abs(he(ee.dir)-he(ye.dir)),Ne=.35+.3*Math.min(1,Ie/6)+.15*Math.min(1,Re/Math.PI);V.push([Q,"move",de,Ne]),Q+=Ne}}),D.keys=$,D.table=V,D.total=Q,D.leadU=k+y,D.doorU=k,D.paintOrder=$.filter(ee=>ee.kind==="cuadro").map(ee=>ee.painting),D.rooms=Math.max(1,...D.P.map(ee=>ee._room+1)),e.style.height=`calc(${(Q*gu).toFixed(1)}vh + 100vh)`}let Ce=D=>D*D*(3-2*D),Ge=new S,Ke=new S;function qe(D,Y,j){let $=f.table[0];for(let W of f.table)if(W[0]<=D)$=W;else break;let ue=f.keys,pe=Math.min(1,Math.max(0,(D-$[0])/$[3]));if($[1]==="door")return re(le.frame,Y),j.set(0,0,-1),{shift:0,u:0,pIdx:-1,phase:"puerta"};if($[1]==="lead"){let W=ue[0];if(le.cams){let ee=Ce(pe);return re(le.cams.rows.length-1,Y).lerp(W.pos,ee),j.set(0,0,-1).lerp(W.dir,ee).normalize(),{shift:0,u:0,pIdx:-1,phase:"umbral",t:ee}}return Y.copy(W.pos).addScaledVector(W.dir,-1.6*(1-Ce(pe))),j.copy(W.dir),{shift:0,u:0,pIdx:-1}}if($[1]==="dwell"){let W=ue[$[2]];return Y.copy(W.pos),j.copy(W.dir),{shift:W.shift,u:$[2],pIdx:W.kind==="cuadro"?W.painting:-1}}let _e=ue[$[2]],y=ue[$[2]+1],k=Ce(pe),V=-1;if(pe<.12&&_e.kind==="cuadro"?V=_e.painting:pe>.88&&y.kind==="cuadro"&&(V=y.painting),_e.kind==="cuadro"&&y.kind==="cuadro"){let W=f.P[_e.painting],ee=f.P[y.painting];if(W._n.dot(ee._n)>.99)return Y.lerpVectors(_e.pos,y.pos,k),j.copy(_e.dir).lerp(y.dir,k).normalize(),{shift:0,u:$[2]+pe,pIdx:V};xe(_e,y,Ae,Je);let de=.4,ve=.6;if(pe<=de){let ye=Ce(pe/de);Y.lerpVectors(_e.pos,Ae,ye),oe(_e.dir,Je,Ce(Math.min(1,pe/(de*.85))),j)}else if(pe<ve){let ye=(pe-de)/(ve-de);Y.copy(Ae).addScaledVector(Je,.35*(ye-.5)),j.copy(Je)}else{let ye=Ce((pe-ve)/(1-ve));Y.lerpVectors(Ae,y.pos,ye),oe(Je,y.dir,Ce(Math.max(0,((pe-ve)/(1-ve)-.15)/.85)),j)}return{shift:0,u:$[2]+pe,pIdx:V}}Y.lerpVectors(_e.pos,y.pos,k);let Q=y.kind==="paso"?Ce(Math.min(1,pe/.45)):_e.kind==="paso"?Ce(Math.max(0,(pe-.55)/.45)):k;return oe(_e.dir,y.dir,Q,j),{shift:Ct.lerp(_e.shift,y.shift,k),u:$[2]+pe,pIdx:V}}function re(D,Y){let j=le.cams.rows,$=j[Math.max(0,Math.min(j.length-1,D<0?0:D))];return Y.set($[0],$[1],$[2]+le.dz)}function ne(D,Y){let j=le.cams.rows,$=j[Math.max(0,Math.min(j.length-1,D))],ue=le.img?le.img.w:le.fmt==="mobile"?720:1280,pe=le.img?le.img.h:le.fmt==="mobile"?1280:720,_e=Me.w,y=Me.h,k=Math.max(_e/ue,y/pe),V=ue*k,Q=pe*k,W=p.clone(),ee=2*Math.atan(le.cams.sensor/2/$[3]);return W.fov=Ct.radToDeg(2*Math.atan(Math.tan(ee/2)*Q/V)),W.aspect=V/Q,W.setViewOffset(V,Q,(V-_e)/2,(Q-y)/2-$[4]*V,_e,y),W.updateProjectionMatrix(),Y.copy(W.projectionMatrix)}function oe(D,Y,j,$){let ue=he(D),_e=he(Y)-ue;_e-=Math.round(_e/(2*Math.PI))*2*Math.PI;let y=Se(D),k=Se(Y),V=Math.abs(_e)>.6?Math.sin(Math.PI*j):0;return fe(ue+_e*j,Ct.lerp(y,k,j)*(1-V),$)}let Ae=new S,Je=new S;function xe(D,Y,j,$){let ue=Math.sign(Y.pos.z-D.pos.z)||-1;j.set(0,ff-.15,(D.pos.z+Y.pos.z)/2-ue*1.1),$.set(0,.07,ue).normalize()}function We(D){if(N=Math.min(1,Math.max(0,D)),!f||!f.table){v.progress=0;return}let Y=N*f.total;ie=Y,v.progress=Math.max(0,Math.min(1,(Y-f.leadU)/(f.total-f.leadU)));let j=f.keys,$=qe(Y,J,G);K=$.shift;let ue=$.u,pe=$.pIdx;if(f.u=ue,pe!==v.painting){v.painting=pe;let y=pe>=0?f.P[pe]:null;n&&n(y,pe,y?{n:f.paintOrder.indexOf(pe)+1,total:f.paintOrder.length,room:y._room+1,rooms:f.rooms}:null)}let _e=ue>j.length-1.5;_e!==v.decision&&(v.decision=_e,i&&i(_e)),v.stop=Math.round(ue),ke(ue),T=!0,tt(900)}function ke(D,Y){let j=[],$=f.keys||[];for(let pe=Math.floor(D)-1;pe<=Math.ceil(D)+2;pe++){let _e=$[pe];_e&&_e.kind==="cuadro"&&!j.includes(_e.painting)&&j.push(_e.painting)}let ue=Y||j.slice(0,3);if(f.sharp.forEach((pe,_e)=>{let y=ue[_e];if(y==null){pe.visible=!1;return}let k=f.P[y],V=f.sharpCache.get(y);if(!V){V={tex:null,used:0},f.sharpCache.set(y,V);let Q=Me.w*(v.dprStill||1)>=900;_.load(t+(Q?k.shot.replace("assets/shots/","assets/shots-hd/"):k.shot),W=>{W.colorSpace=ft,W.anisotropy=Math.min(8,l.capabilities.getMaxAnisotropy()),V.tex=W,T=!0,tt(300),f&&ke(f.u||0,f.sharpLista)})}if(V.used=performance.now(),!V.tex){pe.visible=!1;return}pe.material.map=V.tex,pe.material.needsUpdate=pe.userData.idx!==y,pe.userData.idx=y,pe.position.copy(k._pos).addScaledVector(k._n,.004),pe.quaternion.copy(k._q),pe.scale.set(k.size[0],k.size[1],1),pe.visible=!0}),f.sharpCache.size>6){let pe=[...f.sharpCache.entries()].filter(([_e])=>!ue.includes(_e)).sort((_e,y)=>_e[1].used-y[1].used);for(let[_e,y]of pe.slice(0,f.sharpCache.size-6))y.tex&&y.tex.dispose(),f.sharpCache.delete(_e)}}let Pt=performance.now(),vt=0,F=0,st=0;function tt(D){I=Math.max(I,performance.now()+D),!R&&P&&(R=!0,Pt=performance.now(),requestAnimationFrame(Nn))}function ot(){l.info.reset(),v.bloom?b.render(d,p):(l.setRenderTarget(null),l.render(d,p)),v.calls=l.info.render.calls,v.tris=l.info.render.triangles,v.frames++}function Wt(){if(p.position.copy(U),p.lookAt(q.copy(U).add(O)),Pe.constant=se==="puerta"||se==="umbral"?le.front-.03:1e6,se==="puerta"||se==="umbral"){p.userData.shift=-1,p.clearViewOffset(),p.fov=Me.vfov,p.aspect=Me.w/Me.h,p.updateProjectionMatrix(),we.copy(p.projectionMatrix),ne(se==="puerta"?le.frame:le.cams.rows.length-1,Le);let D=p.projectionMatrix.elements,Y=Le.elements,j=we.elements,$=se==="puerta"?0:be;for(let ue=0;ue<16;ue++)D[ue]=Y[ue]+(j[ue]-Y[ue])*$;p.projectionMatrixInverse.copy(p.projectionMatrix).invert(),v.phase=se;return}v.phase="museo",(p.userData.shift===-1||Math.abs(Z-(p.userData.shift||0))>1e-4)&&(p.userData.shift=Z,H())}let Yt=!1,Sn=0;function Nn(D){let Y=Math.min(.1,(D-Pt)/1e3);if(Pt=D,c){f&&(c.tick(Y,U,O),Z=0,se="museo",Wt(),f.deco&&f.deco.update(Y,0,99),w(v.dprMove),ot(),T=!1,Y>0&&(vt+=Y,F++),vt>1&&(v.fps=Math.round(F/vt),vt=0,F=0,Kt())),P?requestAnimationFrame(Nn):(R=!1,vt=0,F=0);return}if(f&&f.keys){let $=Fe?1:1-Math.exp(-Y*7);Fe=!1;let ue=ie-ae;Math.abs(ue)>ge&&(ae=ie-Math.sign(ue)*.35,ue=ie-ae);let pe=Math.abs(ue)>1e-5||Math.abs(Z-K)>1e-4;ae=Math.abs(ue)<1e-5?ie:ae+ue*$,f.doorU&&ie<f.doorU&&(ae=ie);let _e=qe(ae,U,O);Z=_e.shift,se=_e.phase||"museo",be=_e.t||0,Wt(),Yt=f.deco?f.deco.update(Y,f.u||0,f.keys.length):!1,v.s4f=f.deco?f.deco.s4fState:null,pe||Yt?(Sn=0,w(v.dprMove)):(Sn+=Y)>.18&&v.dpr!==v.dprStill&&w(v.dprStill),(pe||T||Yt)&&(ot(),T=!1,Y>0&&(vt+=Y,F++),vt>1&&(v.fps=Math.round(F/vt),vt=0,F=0,Kt()))}let j=f&&v.dpr!==v.dprStill&&Sn<=.18;P&&(performance.now()<I||T||Yt||j)?requestAnimationFrame(Nn):(R=!1,vt=0,F=0)}function Kt(){v.fps<40?st++:st=0,st>=2&&v.bloom?(v.bloom=!1,st=0,T=!0):st>=2&&v.dpr>1&&(v.dprCap=1,st=0,A())}new IntersectionObserver(D=>{P=D[0].isIntersecting,P&&tt(500)},{rootMargin:"50% 0px"}).observe(e),A();let ui=new Ji,Xn=new ce,Tn=null;a.addEventListener("pointerdown",D=>{Tn={x:D.clientX,y:D.clientY,t:performance.now()}}),a.addEventListener("pointerup",D=>{if(!Tn||!f)return;let Y=Math.hypot(D.clientX-Tn.x,D.clientY-Tn.y),j=performance.now()-Tn.t<600;if(Tn=null,Y>10||!j)return;let $=ir(D.clientX,D.clientY);if($>=0&&r){r(f.P[$],$);return}let ue=Fn(D.clientX,D.clientY);ue&&s&&s(ue)});let mn=new _n(new S(0,0,1),0),di=new S;function Fn(D,Y){if(!f||!f.arches)return null;let j=a.getBoundingClientRect();Xn.set((D-j.left)/j.width*2-1,-((Y-j.top)/j.height)*2+1),ui.setFromCamera(Xn,p);for(let[$,ue]of Object.entries(f.arches))if(mn.constant=-ue.z,!!ui.ray.intersectPlane(mn,di)&&Math.abs(di.x-ue.x)<ue.half&&di.y>0&&di.y<ue.top)return $;return null}function ir(D,Y){let j=a.getBoundingClientRect();Xn.set((D-j.left)/j.width*2-1,-((Y-j.top)/j.height)*2+1),ui.setFromCamera(Xn,p);let $=ui.intersectObject(f.inst,!1);return $.length?$[0].instanceId:-1}return{state:v,scene:d,camera:p,renderer:l,loader:m,get wing(){return f},kick:tt,pickAt:(D,Y)=>f?ir(D,Y):-1,archAt:(D,Y)=>Fn(D,Y),sharpFor(D){f&&(f.sharpLista=D,ke(0,D))},load:C,setProgress:We,resize:A,painting:D=>f?f.P[D]:null,progressOf(D){if(!f||!f.keys)return null;let Y=D==="decision"?f.keys.length-1:f.keys.findIndex($=>$.kind==="cuadro"&&$.painting===D),j=f.table.find($=>$[1]==="dwell"&&$[2]===Y);return j?Math.min(1,(j[0]+j[3]/2)/f.total):null},scrollCoverage(D=400){if(!f||!f.table)return null;let Y=p.clone();Y.clearViewOffset(),Y.fov=Me.vfov,Y.aspect=Me.w/Me.h,Y.updateProjectionMatrix();let j=new S,$=new S,ue=new S,pe=new S,_e=new S(0,1,0),y=0,k=0;for(let V=0;V<D;V++){let Q=f.leadU+(f.total-f.leadU)*(V+.5)/D;if(qe(Q,j,$),f.keys[Math.min(f.keys.length-1,Math.round(qe(Q,ue,pe).u))].kind==="decision")continue;k++,Y.position.copy(j),Y.lookAt(ue.copy(j).add($)),Y.updateMatrixWorld(),f.P.some(ee=>{pe.set(1,0,0).applyQuaternion(ee._q);let de=ee.size[0]/2+.205,ve=ee.size[1]/2+.205,ye=1/0,Ie=-1/0;for(let[Re,Ne]of[[-1,-1],[1,-1],[1,1],[-1,1]]){if(ue.copy(ee._pos).addScaledVector(pe,Re*de).addScaledVector(_e,Ne*ve).project(Y),ue.z>1||Math.abs(ue.x)>1||Math.abs(ue.y)>1)return!1;ye=Math.min(ye,ue.x),Ie=Math.max(Ie,ue.x)}return(Ie-ye)/2>=.25})&&y++}return+(y/Math.max(1,k)).toFixed(3)},checkMoves(D=400){if(!f||!f.table)return null;let Y=p.clone();Y.clearViewOffset(),Y.fov=Me.vfov,Y.aspect=Me.w/Me.h,Y.updateProjectionMatrix();let j=new S,$=new S,ue=new S,pe=new S,_e=new S(0,1,0),y=0,k=0;for(let V=0;V<D;V++){let Q=f.leadU+(f.total-f.leadU)*(V+.5)/D,W=qe(Q,j,$);if(f.keys[Math.min(f.keys.length-1,Math.round(W.u))].kind==="decision")continue;k=Math.max(k,Math.abs(Ct.radToDeg(Se($)))),Y.position.copy(j),Y.lookAt(ue.copy(j).add($)),Y.updateMatrixWorld(),f.P.some(de=>{if(-$.dot(de._n)>Math.cos(Ct.degToRad(30)))return!1;pe.set(1,0,0).applyQuaternion(de._q);let ve=1/0,ye=-1/0,Ie=!1;for(let[Re,Ne]of[[-1,-1],[1,-1],[1,1],[-1,1]]){if(ue.copy(de._pos).addScaledVector(pe,Re*de.size[0]/2).addScaledVector(_e,Ne*de.size[1]/2).project(Y),ue.z>1)return!1;ve=Math.min(ve,ue.x),ye=Math.max(ye,ue.x),Math.abs(ue.x)<1&&Math.abs(ue.y)<1&&(Ie=!0)}return Ie&&(Math.min(1,ye)-Math.max(-1,ve))/2>=.3})&&y++}return{oblicuo:+(y/D).toFixed(3),pitch:+k.toFixed(1)}},setDoor({cams:D,first:Y,fmt:j,img:$,vh:ue}){D&&(le.cams=D,le.first=Y||21),j&&(le.fmt=j),$&&(le.img=$),ue!=null&&ue!==le.vh&&(le.vh=ue,f&&(me(),We(N))),T=!0,tt(200)},setDoorFrame(D){D!==le.frame&&(le.frame=D,f&&f.doorU&&ie<f.doorU&&(T=!0,tt(120)))},live(){if(!f||!f.table)return null;let D=new S,Y=new S;return qe(ae,D,Y),{pitch:+Math.abs(Ct.radToDeg(Se(O))).toFixed(1),off:+(D.distanceTo(U)+Y.distanceTo(O)).toFixed(4),lag:+(ie-ae).toFixed(3),u:+ae.toFixed(3),phase:se,doorFrame:se==="puerta"?le.frame:null}},snapTarget(D){if(!f||!f.table)return null;let Y=D*f.total,j=null;for(let y of f.table)if(y[0]<=Y)j=y;else break;if(!j||j[1]!=="move")return null;let $=(Y-j[0])/j[3],ue=f.keys,pe=$<.5?j[2]:j[2]+1;if(!ue[pe]||ue[pe].kind!=="cuadro"||$>.3&&$<.7)return null;let _e=f.table.find(y=>y[1]==="dwell"&&y[2]===pe);return _e?(_e[0]+_e[3]/2)/f.total:null},tone(){Wt(),ot();let D=h.drawingBufferWidth,Y=h.drawingBufferHeight,j=new Uint8Array(4),$=0,ue=0,pe=0,_e=0;for(let y=1;y<15;y++)for(let k=1;k<15;k++)h.readPixels(Math.floor(k*D/16),Math.floor(y*Y/16),1,1,h.RGBA,h.UNSIGNED_BYTE,j),$+=j[0],ue+=j[1],pe+=j[2],_e++;return $/=_e,ue/=_e,pe/=_e,{mean:+(.2126*$+.7152*ue+.0722*pe).toFixed(1),r:+$.toFixed(1),g:+ue.toFixed(1),b:+pe.toFixed(1)}},sharpWidths:()=>f?[...f.sharpCache.values()].filter(D=>D.tex&&D.tex.image).map(D=>D.tex.image.width):[],debugBox:()=>{if(!f)return null;let D=new Et().setFromObject(f.group.children[0]);return{min:D.min.toArray().map(Y=>+Y.toFixed(2)),max:D.max.toArray().map(Y=>+Y.toFixed(2))}},debugTable:()=>f&&f.table&&{total:f.total,rows:f.table.map(D=>[+D[0].toFixed(2),D[1],D[2],+D[3].toFixed(2),f.keys[D[2]]&&f.keys[D[2]].kind])},progressAfterLead:()=>f&&f.table?f.leadU/f.total:0,progressDoorEnd:()=>f&&f.table?(f.doorU||0)/f.total:0,paintings:()=>f?f.P:[],checkFraming(){if(!f||!f.keys)return null;let D=p.clone();D.clearViewOffset(),D.fov=Me.vfov,D.aspect=Me.w/Me.h,D.updateProjectionMatrix();let Y={n:0,bad:[]},j=new S,$=new S,ue=new S(0,1,0);for(let pe of f.keys){if(pe.kind!=="cuadro")continue;let _e=f.P[pe.painting];D.position.copy(pe.pos),D.lookAt(j.copy(pe.pos).add(pe.dir)),D.updateMatrixWorld(),$.set(1,0,0).applyQuaternion(_e._q);let y=_e.size[0]/2+.205,k=_e.size[1]/2+.205,V=1/0;for(let[Q,W]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,(k+.33)/k]])j.copy(_e._pos).addScaledVector($,Q*y).addScaledVector(ue,W*k).project(D),V=Math.min(V,1-Math.abs(j.x),1-Math.abs(j.y));Y.n++,V<0&&Y.bad.push({i:pe.painting,name:_e.name,min:+V.toFixed(3)})}return Y},project(D){if(!f)return null;Wt(),p.updateMatrixWorld();let j=f.P[D]._pos.clone().project(p),$=a.getBoundingClientRect();return{x:$.left+(j.x+1)/2*$.width,y:$.top+(1-j.y)/2*$.height,visible:Math.abs(j.x)<1&&Math.abs(j.y)<1&&j.z<1}},sample(){Wt(),ot();let D=h.drawingBufferWidth,Y=h.drawingBufferHeight,j={mean:0,nonBlack:0},$=0;for(let ue=0;ue<8;ue++)for(let pe=0;pe<8;pe++){let _e=new Uint8Array(4);h.readPixels(Math.floor((pe+.5)*D/8),Math.floor((ue+.5)*Y/8),1,1,h.RGBA,h.UNSIGNED_BYTE,_e);let y=.2126*_e[0]+.7152*_e[1]+.0722*_e[2];j.mean+=y,y>12&&j.nonBlack++,$++}return j.mean=+(j.mean/$).toFixed(1),j.nonBlack=+(j.nonBlack/$).toFixed(3),j},async measureFps(D=3e3,Y=!0){let j=performance.now(),$=0;await new Promise(pe=>{let _e=()=>{let y=performance.now()-j;Y&&(p.position.x+=Math.sin(y/300)*5e-4),ot(),$++,y<D?requestAnimationFrame(_e):pe()};requestAnimationFrame(_e)});let ue=$/((performance.now()-j)/1e3);return v.fpsMeasured=Math.round(ue),v.fpsMeasured},setArchLabels(D,Y){if(Object.assign(x,D),Y&&(E=Y),!!f){for(let[j,$]of Object.entries(f.arches||{})){if($.text===x[j])continue;let ue=$.label.material.map,pe=mf(x[j]);pe.onFontReady=()=>{T=!0,tt(200)},$.label.material.map=pe,$.label.material.needsUpdate=!0,$.text=x[j],ue.dispose()}Y&&f.deco&&f.deco.setNiche("sigo",E),T=!0,tt(300)}},projectArch(D){let Y=f&&f.arches&&f.arches[D];if(!Y)return null;Wt(),p.updateMatrixWorld();let j=new S(Y.x,Y.top*.55,Y.z).project(p),$=a.getBoundingClientRect();return{x:$.left+(j.x+1)/2*$.width,y:$.top+(1-j.y)/2*$.height,visible:Math.abs(j.x)<1&&Math.abs(j.y)<1&&j.z<1}},setBloom(D){v.bloom=!!D,T=!0,tt(200)},setExposure(D){let Y=Math.max(0,Math.min(1.5,D))*pf;Math.abs(l.toneMappingExposure-Y)<.001||(l.toneMappingExposure=Y,v.exposure=+Y.toFixed(3),T=!0,tt(200))},dispose(){M(),b.dispose(),l.dispose()}}}var Na=new URL("../",import.meta.url).href,Ll=Na+"webs.html",je=(a,e=document)=>e.querySelector(a),Oi=matchMedia("(prefers-reduced-motion: reduce)").matches,dn=.12,I0=.36,Ni=2.7,Eu=5.4,P0=1.8,L0=1.9,D0=13,U0=4.9,_u=.78,N0=.14,xu=3.5,F0=2.05,O0=3.3,He=window.__juego={saltos:0,pasos:0,parpadeos:0,ready:!1,ala:null,x:0,z:0,yaw:0,andando:!1,cerca:-1,arco:null,foco:0,fps:0,error:null},xt={ax:0,ay:0,teclas:new Set,palo:{x:0,y:0,id:null}},It=null,yu=[],Fi=[],Ef={},fn=null,At=null,et=new S,er=new S,wl=new S,Or=0,Il=0,nr=0,Al=0,Rl=0,vf=0,Dl=!0,pn=0,Ui=0,nn=0,jn=!0,Pl=0,Ns=0,Fr=0,Fs=0,Cl=0,Ua={a:0,v:0},tr={yaw:0,pitch:0},Li={t:2,k:0},Di={pos:new S,dir:new S(0,0,-1),ok:!1};function B0(a){let e=a.group.children[0],t=new Et().setFromObject(e),n=t.min.x-.6,i=t.min.z-.6,r=Math.ceil((t.max.x-t.min.x+1.2)/dn),s=Math.ceil((t.max.z-t.min.z+1.2)/dn),o=new Uint8Array(r*s),c=new Uint8Array(r*s),l=new Float32Array(r*s),h=new S,u=new S,d=new S,p=(R,I,N)=>{let U=Math.floor((I-n)/dn),O=Math.floor((N-i)/dn);U>=0&&O>=0&&U<r&&O<s&&(R[O*r+U]=1)},m=R=>{for(let I=R;I;I=I.parent)if(!I.visible)return!1;return!0};e.traverse(R=>{if(!R.isMesh||R.isInstancedMesh||!m(R))return;let I=R.geometry,N=I.attributes.position;if(!N)return;let U=I.index,O=U?U.count:N.count;R.updateWorldMatrix(!0,!1);for(let J=0;J+2<O;J+=3){h.fromBufferAttribute(N,U?U.getX(J):J).applyMatrix4(R.matrixWorld),u.fromBufferAttribute(N,U?U.getX(J+1):J+1).applyMatrix4(R.matrixWorld),d.fromBufferAttribute(N,U?U.getX(J+2):J+2).applyMatrix4(R.matrixWorld);let G=Math.min(h.y,u.y,d.y),K=Math.max(h.y,u.y,d.y),Z=K<.2&&G>-.3;if(!Z&&(G>1.5||K<.3))continue;let ae=Math.max(h.distanceTo(u),u.distanceTo(d),d.distanceTo(h)),ie=Math.max(1,Math.ceil(ae/(dn*.6)));for(let le=0;le<=ie;le++)for(let Le=0;Le<=ie-le;Le++){let we=le/ie,Pe=Le/ie,se=1-we-Pe,be=h.y*se+u.y*we+d.y*Pe;if(Z)p(c,h.x*se+u.x*we+d.x*Pe,h.z*se+u.z*we+d.z*Pe);else if(be>.3&&be<1.5){let ge=h.x*se+u.x*we+d.x*Pe,Fe=h.z*se+u.z*we+d.z*Pe;p(o,ge,Fe);let Me=Math.floor((ge-n)/dn),A=Math.floor((Fe-i)/dn);Me>=0&&A>=0&&Me<r&&A<s&&be>l[A*r+Me]&&(l[A*r+Me]=be)}}}});let _=new Uint8Array(r*s),g=new Float32Array(r*s),b=(R,I,N)=>{let U=Math.ceil(R/dn);for(let O=0;O<s;O++)for(let J=0;J<r;J++){let G=O*r+J;if(I(G))for(let K=-U;K<=U;K++)for(let Z=-U;Z<=U;Z++){if(Z*Z+K*K>U*U)continue;let ae=J+Z,ie=O+K;ae>=0&&ie>=0&&ae<r&&ie<s&&N(ie*r+ae,G)}}};b(I0,R=>o[R]&&l[R]>_u,R=>{_[R]=1}),b(.24,R=>o[R]&&l[R]<=_u,(R,I)=>{l[I]>g[R]&&(g[R]=l[I])});let v=new Uint8Array(r*s);for(let R=0;R<r*s;R++)v[R]=c[R]&&!_[R]?1:0;let f={x0:n,z0:i,W:r,H:s,muro:o,suelo:c,libre:v,altura:g,anda:null,box:t};f.cel=(R,I)=>{let N=Math.floor((R-n)/dn),U=Math.floor((I-i)/dn);return N>=0&&U>=0&&N<r&&U<s?U*r+N:-1};let x=-1,E=0;for(let R=t.max.z-.4;R>t.min.z&&x<0;R-=dn){let I=f.cel(0,R);I>=0&&v[I]&&!g[I]&&(x=I,E=R)}let T=new Uint8Array(r*s);if(x>=0){let R=[x];for(T[x]=1;R.length;){let I=R.pop(),N=I%r,U=(I-N)/r;for(let[O,J]of[[1,0],[-1,0],[0,1],[0,-1]]){let G=N+O,K=U+J;if(G<0||K<0||G>=r||K>=s)continue;let Z=K*r+G;v[Z]&&!T[Z]&&(T[Z]=1,R.push(Z))}}}f.anda=T,f.pisable=(R,I,N=0)=>{let U=f.cel(R,I);return U>=0&&T[U]===1&&g[U]<=N+N0},f.piso=(R,I)=>{let N=f.cel(R,I);return N>=0?g[N]:0},f.bancos=()=>{let R=[];for(let U=0;U<r*s;U++)T[U]&&l[U]>.3&&l[U]<=_u&&R.push([n+(U%r+.5)*dn,i+(Math.floor(U/r)+.5)*dn]);if(!R.length)return null;let I=Math.max(...R.map(U=>U[1])),N=R.filter(U=>I-U[1]<1.6);return{n:N.length,x:N.reduce((U,O)=>U+O[0],0)/N.length,z:N.reduce((U,O)=>U+O[1],0)/N.length}},f.tapa=(R,I)=>{let N=f.cel(R,I);return N<0||o[N]===1||!c[N]};let P=E;for(let R=E;R>E-4.6&&f.pisable(0,R);R-=dn)P=R;return f.pisable0=f.pisable,f.inicio={x:0,z:P},f.celdas=T.reduce((R,I)=>R+I,0),f}function k0(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"#fff"),t.addColorStop(1,"#000"),e.fillStyle=t,e.fillRect(0,0,64,64),new In(a)}function z0(a){let e=new Wn;e.add(new $e(new Rn(10,10,10),new lt({color:1182728,side:Vt})));let t=(r,s,o)=>{let c=new $e(new wt(3,3),new lt({color:new Ee(r).multiplyScalar(s),side:Bt}));c.position.set(...o),c.lookAt(0,0,0),e.add(c)};t(16763016,5,[-2.5,4,3]),t(11569766,1.5,[4,.8,3]),t(10374655,3,[2,2.5,-4]);let n=new Pi(a),i=n.fromScene(e,.04);return n.dispose(),i.texture}async function H0(){let a=await It.loader.loadAsync(Na+"assets/s4f/s4f.glb"),e=a.scene;e.traverse(_=>{if(_.isMesh){_.frustumCulled=!1;let g=_.material;g&&g.emissive&&g.emissiveIntensity>0&&(g.emissiveIntensity*=1.3)}});let t=new Et().setFromObject(e,!0),n=1.3/(t.max.y-t.min.y);e.scale.setScalar(n),e.position.y=-t.min.y*n;let i=new Gt;i.name="Jugador",i.add(e);let r=new Pn(16763016,2.4);r.position.set(-1.5,6,3);let s=new Pn(10374655,1.1);s.position.set(2,3,-4);let o=new Pn(16765608,1.5);o.position.set(-1.8,4,-3.5),i.add(r,s,o,new Mr(11569766,6961692,1),r.target,s.target,o.target),r.target.position.set(0,.6,0),s.target.position.set(0,.6,0),o.target.position.set(0,.6,0);let c=new $e(new wt(1.1,1.1),new lt({color:0,alphaMap:k0(),transparent:!0,opacity:.55,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.012,c.renderOrder=1,i.add(c),It.scene.environment=z0(It.renderer),It.scene.add(i);let l=new Tr(e),h={};for(let _ of a.animations)h[_.name]=l.clipAction(_);He.clips=Object.keys(h);let u={};e.traverse(_=>{_.isBone&&(u[_.name]=_)});let d=h.presentar||Object.values(h)[0];d&&(d.play(),d.paused=!0,d.time=0);let p=["Hips","LeftUpLeg","RightUpLeg","LeftLeg","RightLeg","LeftArm","RightArm","LeftForeArm","RightForeArm","Spine","Spine2","Neck","Head","Tail1","Tail2","Tail3","Tail4","Tail5"].map(_=>u[_]).filter(Boolean),m=[];return e.traverse(_=>{let g=_.morphTargetDictionary;if(g)for(let[b,v]of Object.entries(g))/parpad/i.test(b)&&m.push([_,v])}),{holder:i,root:e,mixer:l,acciones:h,hueso:u,base:d,manos:p,parpados:m,yaw:0,saludo:0,clip:null}}var Mu=new Mt,_f=new Mt,xf=new Mt;function Lt(a,e,t){!a||!t||(a.parent.getWorldQuaternion(Mu),_f.setFromAxisAngle(e,t),xf.copy(Mu).invert(),a.quaternion.premultiply(xf.multiply(_f).multiply(Mu)))}var Xt=new S,Su=new S(0,1,0),Tu=new S,Us={reposo:"reposo",andar:"andar",correr:"correr",aire:"saltar_aire"},yf={andar:.35,correr:2.14},Mf=1;function G0(a){let e=At;if(e.clip===a)return;let t=e.clip&&e.acciones[e.clip],n=e.acciones[a];e.clip=a,n&&(n.reset().setEffectiveWeight(1).play(),t&&t!==n?t.crossFadeTo(n,Oi?.01:.18,!1):!t&&e.base&&e.base!==n&&e.base.stop())}function V0(a,e){let t=At,n=t.hueso,i=performance.now()/1e3,r=jn?e>Ni*1.3?"correr":e>.25?"andar":"reposo":"aire";He.estado=r;let s=!!t.acciones.andar;if(t.saludo>0&&(t.saludo-=a,(t.saludo<=0||r!=="reposo")&&(t.saludo=0,t.acciones.saludar&&t.acciones.saludar.stop(),t.clip=null,!s&&t.base&&(t.base.reset().play(),t.base.paused=!0,t.base.time=0))),s&&t.saludo<=0){let m=Us[r];r==="andar"&&t.acciones[Us.correr]&&(t.trota=e>(t.trota?Mf*.85:Mf),t.trota&&(m=Us.correr)),G0(m);let _=t.acciones[t.clip],g=t.clip===Us.correr?yf.correr:t.clip===Us.andar?yf.andar:0;_&&g&&(_.timeScale=Math.max(.5,e/g))}for(let m of t.manos)m._q0&&m.quaternion.copy(m._q0);t.mixer.update(s||t.saludo>0?a:0);for(let m of t.manos)(m._q0||(m._q0=new Mt)).copy(m.quaternion);Xt.set(Math.cos(t.yaw),0,-Math.sin(t.yaw)),Tu.set(Math.sin(t.yaw),0,Math.cos(t.yaw));let o=0;if(!s&&!Oi){let m=Math.min(1,Math.max(0,(e-Ni)/(Eu-Ni)));Al+=((r==="andar"||r==="correr"?1:0)-Al)*Math.min(1,a*9);let _=r==="aire"?1:0;if(t.aire=(t.aire||0)+(_-(t.aire||0))*Math.min(1,a*12),Al>.01){Rl+=a*(4.6+2.4*Math.min(1.6,e/Ni));let g=Al*(1-t.aire),b=Math.sin(Rl),v=Math.cos(Rl),f=.55+.4*m;Lt(n.LeftUpLeg,Xt,-f*b*g),Lt(n.RightUpLeg,Xt,f*b*g),Lt(n.LeftLeg,Xt,(.8+.5*m)*Math.max(0,v)*g),Lt(n.RightLeg,Xt,(.8+.5*m)*Math.max(0,-v)*g),Lt(n.LeftArm,Xt,(.4+.35*m)*b*g),Lt(n.RightArm,Xt,-(.25+.2*m)*b*g),Lt(n.LeftForeArm,Xt,-.5*m*g),Lt(n.Spine,Su,.07*b*g),Lt(n.Spine,Xt,-.16*m*g),o=Math.abs(v)*(.03+.03*m)*g;let x=Math.floor(Rl/Math.PI);x!==Cl&&(Cl=x,jn&&g>.5&&(He.pasos++,Ul("paso",.6+.4*m)))}else Lt(n.Spine2,Xt,-.025*Math.sin(i*1.7)),Lt(n.Hips,Tu,.02*Math.sin(i*.55));if(t.aire>.01){let g=t.aire,b=Ui>0?1:.55;Lt(n.LeftUpLeg,Xt,-.75*g*b),Lt(n.RightUpLeg,Xt,-.35*g*b),Lt(n.LeftLeg,Xt,1.05*g*b),Lt(n.RightLeg,Xt,.7*g*b),Lt(n.LeftArm,Xt,-.9*g),Lt(n.LeftArm,Tu,-.35*g),Lt(n.RightArm,Xt,-.35*g)}}else if(s){let m=t.acciones[t.clip],_=m?Math.floor(m.time/(m.getClip().duration/2)):0;_!==Cl&&(r==="andar"||r==="correr")&&(Cl=_,He.pasos++,Ul("paso",r==="correr"?1:.6))}let c=0,l=0,h=It.wing,u=He.cerca>=0&&h?h.P[He.cerca]:null;if(u&&r!=="aire"){let m=u._pos.x-et.x,_=u._pos.z-et.z;c=Math.max(-1.15,Math.min(1.15,wf(t.yaw,Math.atan2(m,_)))),l=Math.max(-.5,Math.min(.5,Math.atan2(u._pos.y-(nn+1.1),Math.hypot(m,_))))}let d=Oi?1:Math.min(1,a*5);if(tr.yaw+=(c-tr.yaw)*d,tr.pitch+=(l-tr.pitch)*d,Math.abs(tr.yaw)>.003||Math.abs(tr.pitch)>.003)for(let m of[n.Neck,n.Head])Lt(m,Su,tr.yaw*.5),Lt(m,Xt,-tr.pitch*.5);if(!Oi){let m=-Pl*.28*Math.min(1,.4+Math.abs(e)/Ni);Ua.v+=((m-Ua.a)*60-Ua.v*7)*a,Ua.a+=Ua.v*a;let _=Math.sin(i*1.3)*.06;[n.Tail1,n.Tail2,n.Tail3,n.Tail4,n.Tail5].forEach((g,b)=>Lt(g,Su,(Ua.a+_)*(.35+b*.22)))}if(t.parpados.length){Li.t-=a,Li.t<=0&&Li.k<=0&&(Li.k=1,He.parpadeos++,Li.t=Math.random()<.18?.28:2+Math.random()*4),Li.k>0&&(Li.k=Math.max(0,Li.k-a/.16));let m=Math.sin(Li.k*Math.PI);for(let[_,g]of t.parpados)_.morphTargetInfluences[g]=m;He.parpado=+m.toFixed(2)}let p=0;Ns>0&&(Ns=Math.max(0,Ns-a),p=Math.sin(Ns/.22*Math.PI)*.13),t.root.scale.set(t.k0*(1+p*.5),t.k0*(1-p),t.k0*(1+p*.5)),t.root.position.y=t.y0*(1-p)+o}var qt={ctx:null,ruido:null,on:!0};try{qt.on=localStorage.getItem("museo-sonido")!=="0"}catch{}function Sf(){if(!(qt.ctx||!(window.AudioContext||window.webkitAudioContext)))try{let a=qt.ctx=new(window.AudioContext||window.webkitAudioContext),e=qt.ruido=a.createBuffer(1,a.sampleRate*.3,a.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=(Math.random()*2-1)*(1-n/t.length)}catch{qt.ctx=null}}function Ul(a,e=1){let t=qt.ctx;if(!t||!qt.on||t.state!=="running")return;let n=t.currentTime,i=t.createGain(),r=t.createBiquadFilter(),s=t.createBufferSource();s.buffer=qt.ruido;let[o,c,l,h]=a==="paso"?["bandpass",520+Math.random()*260,.11*e,.07]:a==="salto"?["bandpass",900,.07,.12]:["lowpass",180,.3,.16];r.type=o,r.frequency.value=c,r.Q.value=a==="paso"?1.4:.8,i.gain.setValueAtTime(l,n),i.gain.exponentialRampToValueAtTime(8e-4,n+h),s.connect(r).connect(i).connect(t.destination),s.start(n),s.stop(n+h+.02),He.sonidos=(He.sonidos||0)+1}var wf=(a,e)=>{let t=(e-a)%(2*Math.PI);return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t};function W0(){let a=xt.teclas,e=xt.palo,t=(a.has("ArrowRight")||a.has("KeyD")?1:0)-(a.has("ArrowLeft")||a.has("KeyA")?1:0),n=(a.has("ArrowUp")||a.has("KeyW")?1:0)-(a.has("ArrowDown")||a.has("KeyS")?1:0);xt.correr=a.has("ShiftLeft")||a.has("ShiftRight"),e.id!=null&&(t=e.x,n=-e.y,xt.correr=Math.hypot(e.x,e.y)>.93&&n>.5),Math.abs(t)<.12&&(t=0),Math.abs(n)<.12&&(n=0),xt.ax=t,xt.ay=n}function j0(a,e,t){if(!fn||!At)return;W0();let n=It.wing,i=It.camera,{ax:r,ay:s}=xt;Dl&&(r=0,s=0,Fr=0),Pl=r*L0*(s<0?-1:1),Or+=Pl*a;let o=Math.sin(Or),c=-Math.cos(Or),l=s>0?(xt.correr?Eu:Ni)*Math.min(1,s):P0*s;pn+=(l-pn)*Math.min(1,a*(Math.abs(l)>Math.abs(pn)?6:9)),Math.abs(pn)<.02&&!l&&(pn=0);let h=o*pn*a,u=c*pn*a,d=0;if(pn){let R=et.x,I=et.z;fn.pisable(et.x+h,et.z+u,nn)?(et.x+=h,et.z+=u):fn.pisable(et.x+h,et.z,nn)?et.x+=h:fn.pisable(et.x,et.z+u,nn)&&(et.z+=u),d=Math.hypot(et.x-R,et.z-I)/a,d<Math.abs(pn)*.3&&(pn*=.6)}let p=fn.piso(et.x,et.z);Fr>0&&jn&&(Ui=U0,jn=!1,Fr=0,He.saltos++,Ul("salto")),Fr=Math.max(0,Fr-a),!jn||nn>p+.001?(Ui-=D0*a,nn+=Ui*a,jn=!1,nn<=p&&Ui<=0&&(Ui<-2.5&&(Ns=.22,Ul("cae")),nn=p,Ui=0,jn=!0)):nn=p;let m=s<0?-1:1,_=Math.atan2(o*m,c*m);(pn||r)&&(At.yaw+=wf(At.yaw,_)*Math.min(1,a*10));let g=At.holder;g.position.set(et.x,nn,et.z),At.ladeo=(At.ladeo||0)+((Oi?0:-Pl*Math.min(1,d/Ni)*.09)-(At.ladeo||0))*Math.min(1,a*6),g.rotation.set(0,At.yaw,At.ladeo,"YXZ"),V0(a,d),Il=pn||r||xt.arrastrando||!jn?0:Il+a;let b=-1,v=1e9;for(let R=0;R<n.P.length;R++){let I=n.P[R];er.set(et.x,I._pos.y,et.z).sub(I._pos);let N=er.dot(I._n),U=Math.sqrt(Math.max(0,er.lengthSq()-N*N));if(N<.3||N>O0||U>I.size[0]/2+.5)continue;let O=N+U*1.5;O<v&&(v=O,b=R)}let f=null;if(b<0)for(let[R,I]of Object.entries(n.arches||{}))Math.hypot(et.x-I.x,et.z-I.z)<3&&(f=R);(b!==He.cerca||f!==He.arco)&&(He.cerca=b,He.arco=f,q0()),(vf+=a)>.35&&(vf=0,X0());let x=xu;for(let R=.4;R<=xu;R+=.15)if(fn.tapa(et.x-o*R,et.z-c*R)){x=Math.max(.9,R-.35);break}er.set(et.x-o*x,F0-(xu-x)*.18+nn*.55,et.z-c*x),wl.set(et.x+o*2.2,1.55+nn*.7,et.z+c*2.2).sub(er).normalize();let E=b>=0&&Il>.55?1:0;nr+=(E-nr)*Math.min(1,a*(E?3.2:6)),Fs||(Fs=i.fov);let T=Fs+(Oi?0:7*Math.min(1,Math.max(0,(d-Ni)/(Eu-Ni))));if(Math.abs(i.fov-T)>.02&&(i.fov+=(T-i.fov)*Math.min(1,a*4),i.updateProjectionMatrix()),nr>.002&&b>=0){let R=n.P[b],I=Math.tan(Ct.degToRad(Fs/2)),N=I*i.aspect,U=Math.max((R.size[0]/2+.42)/N,(R.size[1]/2+.75)/I);for(let K=1;K<=U;K+=.2)if(fn.tapa(R._pos.x+R._n.x*K,R._pos.z+R._n.z*K)){U=Math.max(1.2,K-.4);break}let O=nr*nr*(3-2*nr),J=new S().copy(R._pos).addScaledVector(R._n,U);J.y=R._pos.y-.12;let G=new S().copy(R._pos).sub(J).normalize();er.lerp(J,O),wl.lerp(G,O).normalize()}Di.ok||(Di.pos.copy(er),Di.dir.copy(wl),Di.ok=!0);let P=Math.min(1,a*(Oi?30:7.5));Di.pos.lerp(er,P),Di.dir.lerp(wl,P).normalize(),e.copy(Di.pos),t.copy(Di.dir),He.x=+et.x.toFixed(2),He.z=+et.z.toFixed(2),He.alto=+nn.toFixed(2),He.yaw=+Or.toFixed(2),He.andando=d>.2,He.vel=+d.toFixed(2),He.enSuelo=jn,He.foco=+nr.toFixed(2),He.fps=It.state.fps,He.pisable=fn.pisable(et.x,et.z,nn)}var wu="";function X0(){let a=It.wing;if(!a)return;let e=a.P.map((n,i)=>[Math.hypot(n._pos.x-et.x,n._pos.z-et.z),i]).sort((n,i)=>n[0]-i[0]).slice(0,3).map(n=>n[1]);He.cerca>=0&&!e.includes(He.cerca)&&(e[2]=He.cerca);let t=e.join();t!==wu&&(wu=t,It.sharpFor(e))}var Af=a=>a.real_client?"Cliente real":"Web de ejemplo";function q0(){let a=It.wing,e=je(".js-cerca"),t=je(".js-arco"),n=He.cerca>=0?a.P[He.cerca]:null;if(e.hidden=!n,n&&(je(".js-c-nombre").textContent=n.name,je(".js-c-meta").textContent=[Af(n),n.kind,n.city].filter(Boolean).join(" \xB7 ")),t.hidden=!He.arco,He.arco==="taller")je(".js-a-nombre").textContent="El taller",je(".js-a-meta").textContent="Aqu\xED se encargan las webs: paquetes y contacto",je(".js-a-ir").textContent="Entrar al taller";else if(He.arco==="sigo"){let r=Au();je(".js-a-nombre").textContent=r.nombre,je(".js-a-meta").textContent=`Siguiente sala \xB7 ${r.cuadros} webs`,je(".js-a-ir").textContent=`Pasar a ${r.nombre}`}let i=a.P.length;je(".js-cuenta").textContent=n?`Cuadro ${He.cerca+1} de ${i}`:`${i} webs en esta sala`}var Au=()=>Fi[(Fi.findIndex(a=>a.ala===He.ala)+1)%Fi.length];function Rf(a){let e=je("#hoja"),t=Ef[a.slug]||a;je(".hoja__img",e).src=Na+a.shot,je(".hoja__img",e).alt=`Captura de la web de ${a.name}`,je(".js-hoja-nombre",e).textContent=a.name,je(".js-hoja-meta",e).textContent=[a.kind,a.city].filter(Boolean).join(" \xB7 "),je(".js-hoja-blurb",e).textContent=t.blurb||"";let n=je(".js-hoja-sello",e);n.textContent=Af(a),n.className="sello js-hoja-sello"+(a.real_client?" sello--real":""),je(".js-hoja-wa",e).href=`${Ll}?quiero=${encodeURIComponent(a.slug)}#taller`,je(".js-hoja-ver",e).href=a.url,He.hoja=a.slug,xt.teclas.clear(),e.showModal()}var Tf=a=>{location.href=`${Ll}${a?"?quiero="+encodeURIComponent(a):""}#taller`};async function Nl(a){if(Fi.some(e=>e.ala===a)){Dl=!0,document.body.classList.add("juego--corte"),je(".juego__carga").hidden=!1,await new Promise(e=>setTimeout(e,Oi?0:260));try{await It.load(a);let e=It.wing,t=Fi.find(i=>i.ala===a);fn=B0(e),He.ala=a,He.celdas=fn.celdas,He.cuadros=e.P.length,et.set(fn.inicio.x,0,fn.inicio.z),Or=0,Il=0,nr=0,Di.ok=!1,wu="",He.cerca=-2,pn=0,Ui=0,nn=0,jn=!0,At.clip=null,At.yaw=Math.PI,At.acciones.saludar&&!Oi&&(At.base&&At.base.stop(),At.acciones.saludar.reset().play(),At.saludo=2.4,At.yaw=0);let n=Au();It.setArchLabels({taller:"TALLER",sigo:n.nombre.toUpperCase()},{nombre:n.nombre,thumb:null}),je(".js-sala").textContent=t.nombre,document.title=`${t.nombre} \xB7 Museo S4f a pie`;for(let i of document.querySelectorAll(".js-lista-salas button"))i.classList.toggle("es-actual",i.dataset.ala===a)}catch(e){He.error=String(e&&e.message||e),console.error(e)}je(".juego__carga").hidden=!0,document.body.classList.remove("juego--corte"),Dl=!je(".js-ayuda").hidden,It.kick(500)}}function Y0(){let a=je(".juego__canvas"),e=je(".js-mando"),t=je(".mando__palo"),n=(d,p)=>{if(!(d.target.closest&&d.target.closest("input, textarea, select, dialog"))){if(d.code==="Space"){d.preventDefault(),p&&!d.repeat&&(Fr=.18);return}/^(Arrow(Up|Down|Left|Right)|Key[WASD]|Shift(Left|Right))$/.test(d.code)&&(d.preventDefault(),p?xt.teclas.add(d.code):xt.teclas.delete(d.code))}};addEventListener("keydown",d=>n(d,!0)),addEventListener("keyup",d=>n(d,!1)),addEventListener("blur",()=>xt.teclas.clear());let i=d=>{let p=e.getBoundingClientRect(),m=p.width/2,_=(d.clientX-p.left-m)/(m*.72),g=(d.clientY-p.top-m)/(m*.72),b=Math.hypot(_,g);b>1&&(_/=b,g/=b),xt.palo.x=_,xt.palo.y=g,t.style.transform=`translate(${(_*m*.55).toFixed(1)}px, ${(g*m*.55).toFixed(1)}px)`};e.addEventListener("pointerdown",d=>{d.preventDefault(),xt.palo.id=d.pointerId,e.setPointerCapture(d.pointerId),i(d)}),e.addEventListener("pointermove",d=>{d.pointerId===xt.palo.id&&i(d)});let r=d=>{d.pointerId===xt.palo.id&&(xt.palo.id=null,xt.palo.x=xt.palo.y=0,t.style.transform="")};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);let s=null;a.addEventListener("pointerdown",d=>{s={id:d.pointerId,x:d.clientX}}),addEventListener("pointermove",d=>{if(!s||d.pointerId!==s.id)return;let p=d.clientX-s.x;(Math.abs(p)>3||xt.arrastrando)&&(xt.arrastrando=!0,Or-=p*.0055,s.x=d.clientX)});let o=d=>{s&&d.pointerId===s.id&&(s=null,xt.arrastrando=!1)};addEventListener("pointerup",o),addEventListener("pointercancel",o),a.addEventListener("contextmenu",d=>d.preventDefault()),je(".js-saltar").addEventListener("pointerdown",d=>{d.preventDefault(),Fr=.18}),addEventListener("resize",()=>{Fs=0});let c=je(".js-sonido"),l=()=>{c.innerHTML="<span>Sonido: </span>"+(qt.on?"s\xED":"no"),c.setAttribute("aria-pressed",String(qt.on))};l(),c.addEventListener("click",()=>{qt.on=!qt.on;try{localStorage.setItem("museo-sonido",qt.on?"1":"0")}catch{}Sf(),qt.ctx&&qt.ctx.resume(),l()}),je(".js-c-ver").addEventListener("click",()=>He.cerca>=0&&Rf(It.wing.P[He.cerca])),je(".js-c-quiero").addEventListener("click",()=>He.cerca>=0&&Tf(It.wing.P[He.cerca].slug)),je(".js-a-ir").addEventListener("click",()=>He.arco==="taller"?Tf():He.arco==="sigo"?Nl(Au().ala):null),je("#hoja").addEventListener("click",d=>{d.target.id==="hoja"&&d.target.close()});let h=je("#salas");je(".js-salas").addEventListener("click",()=>{xt.teclas.clear(),h.showModal()}),h.addEventListener("click",d=>{if(d.target===h)return h.close();let p=d.target.closest("[data-ala]");p&&(h.close(),Nl(p.dataset.ala))});let u=je(".js-ayuda");je(".js-ayuda-txt").textContent=matchMedia("(pointer: coarse)").matches?"Mueve el mando dorado para andar; ll\xE9valo al borde para correr. El bot\xF3n de la derecha salta. Arrastra la pantalla para mirar. P\xE1rate delante de un cuadro: es una web de verdad.":"Anda con las flechas o W A S D, corre con May\xFAsculas y salta con Espacio. Arrastra con el rat\xF3n para mirar. P\xE1rate delante de un cuadro: es una web de verdad.",je(".js-ayuda-ok").addEventListener("click",()=>{u.hidden=!0,Dl=!1,a.focus(),Sf(),qt.ctx&&qt.ctx.resume()})}async function K0(){let a=je(".juego__carga");if(!gf()){a.textContent="Este dispositivo no puede mostrar el museo en 3D.",a.insertAdjacentHTML("beforeend",` <a href="${Ll}" style="color:inherit;margin-left:.4em">Ver las webs en lista</a>`),He.error="sin webgl2";return}try{let[e,t]=await Promise.all([fetch(Na+"assets/museo/alas.json").then(i=>i.json()),fetch(Na+"data/museo.json").then(i=>i.json()).catch(()=>({items:[]}))]);yu=e,Ef=Object.fromEntries(t.items.map(i=>[i.slug,i])),Fi=[...yu.filter(i=>i.ala==="principal"),...yu.filter(i=>i.ala!=="principal"&&i.cuadros>=2)],je(".js-lista-salas").replaceChildren(...Fi.map(i=>{let r=document.createElement("li"),s=document.createElement("button");return s.type="button",s.dataset.ala=i.ala,s.innerHTML="<span></span><small></small>",s.firstChild.textContent=i.nombre,s.lastChild.textContent=`${i.cuadros} webs`,r.append(s),r})),It=bf({canvas:je(".juego__canvas"),section:je("#escena"),base:Na,libre:{tick:j0},onPick:i=>Rf(i),onArch:i=>{He.arco===i&&je(".js-a-ir").click()}}),He.museo=It.state,Y0(),At=await H0(),At.y0=At.root.position.y,At.k0=At.root.scale.x;let n=new URLSearchParams(location.search).get("sala");await Nl(Fi.some(i=>i.ala===n)?n:Fi[0].ala),je(".js-ayuda").hidden=!1,He.ready=!0,He.api={irA:Nl,tp(i,r){et.x=i,et.z=r,nn=fn.piso(i,r),Ui=0,pn=0,jn=!0},grid:()=>fn,mirar(i){Or=i}},He.arcos=()=>Object.fromEntries(Object.entries(It.wing.arches||{}).map(([i,r])=>[i,{x:r.x,z:r.z}])),He.cuadrosDatos=()=>It.wing.P.map(i=>({name:i.name,pos:i.pos,normal:i.normal,size:i.size})),He.enPantalla=i=>{let r=It.wing.P[i],s=It.camera,o=new S(1,0,0).applyQuaternion(r._q),c=new S;s.updateMatrixWorld();for(let[l,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])if(c.copy(r._pos).addScaledVector(o,l*r.size[0]/2).y+=h*r.size[1]/2,c.project(s),Math.abs(c.x)>1||Math.abs(c.y)>1||c.z>1)return!1;return!0}}catch(e){console.error(e),He.error=String(e&&e.message||e),a.hidden=!1,a.textContent="No se ha podido encender la sala.",a.insertAdjacentHTML("beforeend",` <a href="${Ll}" style="color:inherit;margin-left:.4em">Ver las webs en lista</a>`)}}K0();
