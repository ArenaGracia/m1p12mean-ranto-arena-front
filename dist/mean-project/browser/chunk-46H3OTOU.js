import{$ as x,$a as L,$b as Ln,A as Sn,Ab as J,Ac as ut,Bb as Pi,Bc as dt,Cb as Nn,Dc as pe,E as xn,Eb as et,Fb as ti,Fc as pt,Gb as $i,Gc as Bi,Ic as Vn,K as Tn,Lb as O,Ma as w,Mb as z,N as at,Na as T,Nb as Rn,O as Me,Ob as xt,P as E,Pa as ei,Q as P,S as Y,Sa as St,Ta as An,U as ke,V as g,Va as ie,Wa as Ri,Xa as S,Ya as oe,Z as U,_ as $,a as y,ac as Pn,b as ue,ba as Zt,bb as M,cb as m,d as Mi,da as On,ea as In,eb as Se,fa as te,fb as Li,fc as ii,g as ki,ga as Yt,gb as q,ha as Xt,hb as Mn,hc as _,ia as Fe,ic as ve,j as ye,ja as v,jc as _e,kc as Ce,la as Ni,lb as k,lc as Tt,m as Qt,ma as Dn,mb as N,n as Fi,na as ne,nb as W,nc as Vi,oa as lt,ob as Ye,pb as Xe,qa as Ne,qb as Le,qc as Ee,r as Qe,ra as Ze,rb as kn,sb as xe,tb as V,ub as Te,va as Re,vb as de,wc as $n,x as En,xb as X,xc as Pe,y as wn,yb as Fn,zb as K,zc as ct}from"./chunk-HCFYYDRK.js";var It=class{},oi=class{},Oe=class t{constructor(i){this.normalizedNames=new Map,this.lazyUpdate=null,i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=o.toLowerCase(),s=e.slice(n+1).trim();this.maybeSetNormalizedName(o,r),this.headers.has(r)?this.headers.get(r).push(s):this.headers.set(r,[s])}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ji=class{encodeKey(i){return Bn(i)}encodeValue(i){return Bn(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function $r(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var Vr=/%(\d[a-f0-9])/gi,Br={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Bn(t){return encodeURIComponent(t).replace(Vr,(i,e)=>Br[e]??i)}function ni(t){return`${t}`}var Ve=class t{constructor(i={}){if(this.updates=null,this.cloneFrom=null,this.encoder=i.encoder||new ji,i.fromString){if(i.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=$r(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(ni):[ni(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(ni(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(ni(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Hi=class{constructor(){this.map=new Map}set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Ur(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Un(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function jn(t){return typeof Blob<"u"&&t instanceof Blob}function Hn(t){return typeof FormData<"u"&&t instanceof FormData}function jr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ot=class t{constructor(i,e,n,o){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=i.toUpperCase();let r;if(Ur(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new Oe,this.context??=new Hi,!this.params)this.params=new Ve,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Un(this.body)||jn(this.body)||Hn(this.body)||jr(this.body)?this.body:this.body instanceof Ve?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Hn(this.body)?null:jn(this.body)?this.body.type||null:Un(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Ve?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,a=i.withCredentials??this.withCredentials,l=i.reportProgress??this.reportProgress,c=i.headers||this.headers,u=i.params||this.params,d=i.context??this.context;return i.setHeaders!==void 0&&(c=Object.keys(i.setHeaders).reduce((h,p)=>h.set(p,i.setHeaders[p]),c)),i.setParams&&(u=Object.keys(i.setParams).reduce((h,p)=>h.set(p,i.setParams[p]),u)),new t(e,n,s,{params:u,headers:c,context:d,reportProgress:l,responseType:o,withCredentials:a,transferCache:r})}},Be=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Be||{}),Dt=class{constructor(i,e=200,n="OK"){this.headers=i.headers||new Oe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},ri=class t extends Dt{constructor(i={}){super(i),this.type=Be.ResponseHeader}clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},At=class t extends Dt{constructor(i={}){super(i),this.type=Be.Response,this.body=i.body!==void 0?i.body:null}clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},$e=class extends Dt{constructor(i){super(i,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},qn=200,Hr=204;function Ui(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Wr=(()=>{class t{constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof Ot)r=e;else{let l;o.headers instanceof Oe?l=o.headers:l=new Oe(o.headers);let c;o.params&&(o.params instanceof Ve?c=o.params:c=new Ve({fromObject:o.params})),r=new Ot(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=Fi(r).pipe(Sn(l=>this.handler.handle(l)));if(e instanceof Ot||o.observe==="events")return s;let a=s.pipe(wn(l=>l instanceof At));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Qe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(Qe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(Qe(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(Qe(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ve().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Ui(o,n))}post(e,n,o={}){return this.request("POST",e,Ui(o,n))}put(e,n,o={}){return this.request("PUT",e,Ui(o,n))}static{this.\u0275fac=function(n){return new(n||t)(ke(It))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),zr=/^\)\]\}',?\n/,Gr="X-Request-URL";function Wn(t){if(t.url)return t.url;let i=Gr.toLocaleLowerCase();return t.headers.get(i)}var qr=(()=>{class t{constructor(){this.fetchImpl=g(Wi,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e)),this.ngZone=g(lt)}handle(e){return new ki(n=>{let o=new AbortController;return this.doRequest(e,o.signal,n).then(zi,r=>n.error(new $e({error:r}))),()=>o.abort()})}doRequest(e,n,o){return Mi(this,null,function*(){let r=this.createRequestInit(e),s;try{let p=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,y({signal:n},r)));Kr(p),o.next({type:Be.Sent}),s=yield p}catch(p){o.error(new $e({error:p,status:p.status??0,statusText:p.statusText,url:e.urlWithParams,headers:p.headers}));return}let a=new Oe(s.headers),l=s.statusText,c=Wn(s)??e.urlWithParams,u=s.status,d=null;if(e.reportProgress&&o.next(new ri({headers:a,status:u,statusText:l,url:c})),s.body){let p=s.headers.get("content-length"),C=[],f=s.body.getReader(),b=0,R,F,A=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Mi(this,null,function*(){for(;;){let{done:ae,value:be}=yield f.read();if(ae)break;if(C.push(be),b+=be.length,e.reportProgress){F=e.responseType==="text"?(F??"")+(R??=new TextDecoder).decode(be,{stream:!0}):void 0;let Je=()=>o.next({type:Be.DownloadProgress,total:p?+p:void 0,loaded:b,partialText:F});A?A.run(Je):Je()}}}));let G=this.concatChunks(C,b);try{let ae=s.headers.get("Content-Type")??"";d=this.parseBody(e,G,ae)}catch(ae){o.error(new $e({error:ae,headers:new Oe(s.headers),status:s.status,statusText:s.statusText,url:Wn(s)??e.urlWithParams}));return}}u===0&&(u=d?qn:0),u>=200&&u<300?(o.next(new At({body:d,headers:a,status:u,statusText:l,url:c})),o.complete()):o.error(new $e({error:d,headers:a,status:u,statusText:l,url:c}))})}parseBody(e,n,o){switch(e.responseType){case"json":let r=new TextDecoder().decode(n).replace(zr,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},o=e.withCredentials?"include":void 0;if(e.headers.forEach((r,s)=>n[r]=s.join(",")),e.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let r=e.detectContentTypeHeader();r!==null&&(n["Content-Type"]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let s of e)o.set(s,r),r+=s.length;return o}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Wi=class{};function zi(){}function Kr(t){t.then(zi,zi)}function Jr(t,i){return i(t)}function Qr(t,i,e){return(n,o)=>In(e,()=>i(n,r=>t(r,o)))}var Gi=new Y(""),Zr=new Y(""),Yr=new Y("",{providedIn:"root",factory:()=>!0});var zn=(()=>{class t extends It{constructor(e,n){super(),this.backend=e,this.injector=n,this.chain=null,this.pendingTasks=g(Dn),this.contributeToStability=g(Yr)}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Gi),...this.injector.get(Zr,[])]));this.chain=n.reduceRight((o,r)=>Qr(o,r,this.injector),Jr)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(xn(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static{this.\u0275fac=function(n){return new(n||t)(ke(oi),ke(On))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();var Xr=/^\)\]\}',?\n/;function es(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Gn=(()=>{class t{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new at(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Qt(n.\u0275loadImpl()):Fi(null)).pipe(Tn(()=>new ki(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((f,b)=>s.setRequestHeader(f,b.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let f=e.detectContentTypeHeader();f!==null&&s.setRequestHeader("Content-Type",f)}if(e.responseType){let f=e.responseType.toLowerCase();s.responseType=f!=="json"?f:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let f=s.statusText||"OK",b=new Oe(s.getAllResponseHeaders()),R=es(s)||e.url;return l=new ri({headers:b,status:s.status,statusText:f,url:R}),l},u=()=>{let{headers:f,status:b,statusText:R,url:F}=c(),A=null;b!==Hr&&(A=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=A?qn:0);let G=b>=200&&b<300;if(e.responseType==="json"&&typeof A=="string"){let ae=A;A=A.replace(Xr,"");try{A=A!==""?JSON.parse(A):null}catch(be){A=ae,G&&(G=!1,A={error:be,text:A})}}G?(r.next(new At({body:A,headers:f,status:b,statusText:R,url:F||void 0})),r.complete()):r.error(new $e({error:A,headers:f,status:b,statusText:R,url:F||void 0}))},d=f=>{let{url:b}=c(),R=new $e({error:f,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});r.error(R)},h=!1,p=f=>{h||(r.next(c()),h=!0);let b={type:Be.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(b.total=f.total),e.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),r.next(b)},C=f=>{let b={type:Be.UploadProgress,loaded:f.loaded};f.lengthComputable&&(b.total=f.total),r.next(b)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",p),a!==null&&s.upload&&s.upload.addEventListener("progress",C)),s.send(a),r.next({type:Be.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),e.reportProgress&&(s.removeEventListener("progress",p),a!==null&&s.upload&&s.upload.removeEventListener("progress",C)),s.readyState!==s.DONE&&s.abort()}})))}static{this.\u0275fac=function(n){return new(n||t)(ke(Vn))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})(),Kn=new Y(""),ts="XSRF-TOKEN",is=new Y("",{providedIn:"root",factory:()=>ts}),ns="X-XSRF-TOKEN",os=new Y("",{providedIn:"root",factory:()=>ns}),si=class{},rs=(()=>{class t{constructor(e,n,o){this.doc=e,this.platform=n,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=$n(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(n){return new(n||t)(ke(Ee),ke(Re),ke(is))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function ss(t,i){let e=t.url.toLowerCase();if(!g(Kn)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=g(si).getToken(),o=g(os);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var Jn=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(Jn||{});function as(t,i){return{\u0275kind:t,\u0275providers:i}}function zl(...t){let i=[Wr,Gn,zn,{provide:It,useExisting:zn},{provide:oi,useFactory:()=>g(qr,{optional:!0})??g(Gn)},{provide:Gi,useValue:ss,multi:!0},{provide:Kn,useValue:!0},{provide:si,useClass:rs}];for(let e of t)i.push(...e.\u0275providers);return Zt(i)}function Gl(t){return as(Jn.Interceptors,t.map(i=>({provide:Gi,useValue:i,multi:!0})))}function tt(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Ue(t,i){if(t&&i){let e=n=>{tt(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ls(){return window.innerWidth-document.documentElement.offsetWidth}function ht(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Ql(t="p-overflow-hidden"){let i=ht(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,ls()+"px"),Ue(document.body,t)}function it(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Zl(t="p-overflow-hidden"){let i=ht(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),it(document.body,t)}function Qn(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function li(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function qi(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Ki(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Yl(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Qn(t),l=a.height,c=a.width,u=i.offsetHeight,d=i.offsetWidth,h=i.getBoundingClientRect(),p=Ki(),C=qi(),f=li(),b,R,F="top";h.top+u+l>f.height?(b=h.top+p-l,F="bottom",b<0&&(b=p)):b=u+h.top+p,h.left+c>f.width?R=Math.max(0,h.left+C+d-c):R=h.left+C,t.style.top=b+"px",t.style.left=R+"px",t.style.transformOrigin=F,e&&(t.style.marginTop=F==="bottom"?`calc(${(o=(n=ht(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=ht(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function we(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Xl(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Qn(t),l=i.offsetHeight,c=i.getBoundingClientRect(),u=li(),d,h,p="top";c.top+l+a.height>u.height?(d=-1*a.height,p="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?h=c.left*-1:c.left+a.width>u.width?h=(c.left+a.width-u.width)*-1:h=0,t.style.top=d+"px",t.style.left=h+"px",t.style.transformOrigin=p,e&&(t.style.marginTop=p==="bottom"?`calc(${(o=(n=ht(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=ht(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function ft(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Ji(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),ft(i)?i:void 0}function Qi(t,i){let e=Ji(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function ci(t,i={}){if(ft(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?ci(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function ec(t,i={},...e){if(t){let n=document.createElement(t);return ci(n,i),n.append(...e),n}}function Zn(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function cs(t,i){return ft(t)?Array.from(t.querySelectorAll(i)):[]}function Ie(t,i){return ft(t)?t.matches(i)?t:t.querySelector(i):null}function tc(t,i){t&&document.activeElement!==t&&t.focus(i)}function ic(t,i){if(ft(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Yn(t,i=""){let e=cs(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function nc(t,i){let e=Yn(t,i);return e.length>0?e[0]:null}function Zi(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Xn(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function oc(t){var i;if(t){let e=(i=Xn(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function rc(t,i){let e=Yn(t,i);return e.length>0?e[e.length-1]:null}function eo(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function he(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function sc(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function us(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Xn(t))}function ac(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=Ji((r=>!!(r&&r.constructor&&r.call&&r.apply))(t)?t():t);return o?.nodeType===9||us(o)?o:void 0}}function Yi(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function lc(t){return!!(t&&t.offsetParent!=null)}function cc(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function to(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function io(t,i){let e=Ji(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function uc(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),l=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=t.scrollTop,u=t.clientHeight,d=he(i);l<0?t.scrollTop=c+l:l+d>u&&(t.scrollTop=c+l-u+d)}function no(t,i="",e){ft(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function oo(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(o=>{o(e)})},clear(){t.clear()}}}var ds=Object.defineProperty,ro=Object.getOwnPropertySymbols,ps=Object.prototype.hasOwnProperty,hs=Object.prototype.propertyIsEnumerable,so=(t,i,e)=>i in t?ds(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,fs=(t,i)=>{for(var e in i||(i={}))ps.call(i,e)&&so(t,e,i[e]);if(ro)for(var e of ro(i))hs.call(i,e)&&so(t,e,i[e]);return t};function Q(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Xi(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!Xi(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!Xi(t[a],i[a],e))return!1;return!0}function gs(t,i){return Xi(t,i)}function lo(t){return!!(t&&t.constructor&&t.call&&t.apply)}function I(t){return!Q(t)}function ui(t,i){if(!t||!i)return null;try{let e=t[i];if(I(e))return e}catch{}if(Object.keys(t).length){if(lo(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function nt(t,i,e){return e?ui(t,e)===ui(i,e):gs(t,i)}function co(t,i){if(t!=null&&i&&i.length){for(let e of i)if(nt(t,e))return!0}return!1}function fc(t,i){let e=-1;if(I(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function fe(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function le(t,...i){return lo(t)?t(...i):t}function je(t,i=!0){return typeof t=="string"&&(i||t!=="")}function ao(t){return je(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function di(t,i="",e={}){let n=ao(i).split("."),o=n.shift();return o?fe(t)?di(le(t[Object.keys(t).find(r=>ao(r)===o)||""],e),n.join("."),e):void 0:le(t,e)}function pi(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function gc(t){return t instanceof Date&&t.constructor===Date}function uo(t){return I(t)&&!isNaN(t)}function mc(t=""){return I(t)&&t.length===1&&!!t.match(/\S| /)}function re(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Mt(...t){let i=(e={},n={})=>{let o=fs({},e);return Object.keys(n).forEach(r=>{fe(n[r])&&r in e&&fe(e[r])?o[r]=i(e[r],n[r]):o[r]=n[r]}),o};return t.reduce((e,n,o)=>o===0?n:i(e,n),{})}function ot(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function se(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function hi(t){return je(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function en(t){return je(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var fi={};function rt(t="pui_id_"){return fi.hasOwnProperty(t)||(fi[t]=0),fi[t]++,`${t}${fi[t]}`}function ms(){let t=[],i=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var vc=ms();var bs=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(bs||{}),kc=(()=>{class t{requireConfirmationSource=new ye;acceptConfirmationSource=new ye;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Z=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Fc=(()=>{class t{static AND="and";static OR="or"}return t})(),Nc=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let c of n){let u=ui(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=se(n.toString()).toLocaleLowerCase(o);return se(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=se(n.toString()).toLocaleLowerCase(o);return se(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=se(n.toString()).toLocaleLowerCase(o);return se(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=se(n.toString()).toLocaleLowerCase(o),s=se(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:se(e.toString()).toLocaleLowerCase(o)==se(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:se(e.toString()).toLocaleLowerCase(o)!=se(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(nt(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rc=(()=>{class t{messageSource=new ye;clearSource=new ye;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Lc=(()=>{class t{clickSource=new ye;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var po=["*"],ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-header"]],ngContentSelectors:po,decls:1,vars:0,template:function(n,o){n&1&&(Te(),de(0))},encapsulation:2})}return t})(),fo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-footer"]],ngContentSelectors:po,decls:1,vars:0,template:function(n,o){n&1&&(Te(),de(0))},encapsulation:2})}return t})(),go=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(T(ei))};static \u0275dir=x({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({imports:[pe]})}return t})(),Pc=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var ys=Object.defineProperty,vs=Object.defineProperties,_s=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertySymbols,yo=Object.prototype.hasOwnProperty,vo=Object.prototype.propertyIsEnumerable,mo=(t,i,e)=>i in t?ys(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,me=(t,i)=>{for(var e in i||(i={}))yo.call(i,e)&&mo(t,e,i[e]);if(gi)for(var e of gi(i))vo.call(i,e)&&mo(t,e,i[e]);return t},tn=(t,i)=>vs(t,_s(i)),De=(t,i)=>{var e={};for(var n in t)yo.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&gi)for(var n of gi(t))i.indexOf(n)<0&&vo.call(t,n)&&(e[n]=t[n]);return e};function Bc(...t){return Mt(...t)}var Cs=oo(),ce=Cs;function bo(t,i){pi(t)?t.push(...i||[]):fe(t)&&Object.assign(t,i)}function Es(t){return fe(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function ws(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function nn(t="",i=""){return ws(`${je(t,!1)&&je(i,!1)?`${t}-`:t}${i}`)}function _o(t="",i=""){return`--${nn(t,i)}`}function Ss(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Co(t,i="",e="",n=[],o){if(je(t)){let r=/{([^}]*)}/g,s=t.trim();if(Ss(s))return;if(re(s,r)){let a=s.replaceAll(r,u=>{let h=u.replace(/{|}/g,"").split(".").filter(p=>!n.some(C=>re(p,C)));return`var(${_o(e,hi(h.join("-")))}${I(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return re(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(uo(t))return t}function xs(t,i,e){je(i,!1)&&t.push(`${i}:${e};`)}function gt(t,i){return t?`${t}{${i}}`:""}var mt=(...t)=>Ts(D.getTheme(),...t),Ts=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=D.defaults||{},{prefix:s,transform:a}=t?.options||r||{},c=re(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||Q(n)&&a==="strict"?D.getTokenValue(i):Co(c,void 0,s,[o.excludedKeyRegex],e)}return""};function Os(t,i={}){let e=D.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[h,p])=>{let C=re(h,r)?nn(u):nn(u,hi(h)),f=Es(p);if(fe(f)){let{variables:b,tokens:R}=s(f,C);bo(d.tokens,R),bo(d.variables,b)}else d.tokens.push((n?C.replace(`${n}-`,""):C).replaceAll("-",".")),xs(d.variables,_o(C),Co(f,C,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,n);return{value:a,tokens:l,declarations:a.join(""),css:gt(o,a.join(""))}}var ge={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Os(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,c,u,d;let{preset:h,options:p}=i,C,f,b,R,F,A,G;if(I(h)&&p.transform!=="strict"){let{primitive:ae,semantic:be,extend:Je}=h,Ct=be||{},{colorScheme:$t}=Ct,Vt=De(Ct,["colorScheme"]),Bt=Je||{},{colorScheme:Ut}=Bt,Et=De(Bt,["colorScheme"]),wt=$t||{},{dark:jt}=wt,Ht=De(wt,["dark"]),Wt=Ut||{},{dark:zt}=Wt,Gt=De(Wt,["dark"]),qt=I(ae)?this._toVariables({primitive:ae},p):{},Kt=I(Vt)?this._toVariables({semantic:Vt},p):{},Jt=I(Ht)?this._toVariables({light:Ht},p):{},yn=I(jt)?this._toVariables({dark:jt},p):{},vn=I(Et)?this._toVariables({semantic:Et},p):{},_n=I(Gt)?this._toVariables({light:Gt},p):{},Cn=I(zt)?this._toVariables({dark:zt},p):{},[_r,Cr]=[(r=qt.declarations)!=null?r:"",qt.tokens],[Er,wr]=[(s=Kt.declarations)!=null?s:"",Kt.tokens||[]],[Sr,xr]=[(a=Jt.declarations)!=null?a:"",Jt.tokens||[]],[Tr,Or]=[(l=yn.declarations)!=null?l:"",yn.tokens||[]],[Ir,Dr]=[(c=vn.declarations)!=null?c:"",vn.tokens||[]],[Ar,Mr]=[(u=_n.declarations)!=null?u:"",_n.tokens||[]],[kr,Fr]=[(d=Cn.declarations)!=null?d:"",Cn.tokens||[]];C=this.transformCSS(t,_r,"light","variable",p,n,o),f=Cr;let Nr=this.transformCSS(t,`${Er}${Sr}`,"light","variable",p,n,o),Rr=this.transformCSS(t,`${Tr}`,"dark","variable",p,n,o);b=`${Nr}${Rr}`,R=[...new Set([...wr,...xr,...Or])];let Lr=this.transformCSS(t,`${Ir}${Ar}color-scheme:light`,"light","variable",p,n,o),Pr=this.transformCSS(t,`${kr}color-scheme:dark`,"dark","variable",p,n,o);F=`${Lr}${Pr}`,A=[...new Set([...Dr,...Mr,...Fr])],G=le(h.css,{dt:mt})}return{primitive:{css:C,tokens:f},semantic:{css:b,tokens:R},global:{css:F,tokens:A},style:G}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,c;let u,d,h;if(I(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),C=i,{colorScheme:f,extend:b,css:R}=C,F=De(C,["colorScheme","extend","css"]),A=b||{},{colorScheme:G}=A,ae=De(A,["colorScheme"]),be=f||{},{dark:Je}=be,Ct=De(be,["dark"]),$t=G||{},{dark:Vt}=$t,Bt=De($t,["dark"]),Ut=I(F)?this._toVariables({[p]:me(me({},F),ae)},e):{},Et=I(Ct)?this._toVariables({[p]:me(me({},Ct),Bt)},e):{},wt=I(Je)?this._toVariables({[p]:me(me({},Je),Vt)},e):{},[jt,Ht]=[(a=Ut.declarations)!=null?a:"",Ut.tokens||[]],[Wt,zt]=[(l=Et.declarations)!=null?l:"",Et.tokens||[]],[Gt,qt]=[(c=wt.declarations)!=null?c:"",wt.tokens||[]],Kt=this.transformCSS(p,`${jt}${Wt}`,"light","variable",e,o,r,s),Jt=this.transformCSS(p,Gt,"dark","variable",e,o,r,s);u=`${Kt}${Jt}`,d=[...new Set([...Ht,...zt,...qt])],h=le(R,{dt:mt})}return{css:u,tokens:d,style:h}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let s=t.replace("-directive",""),{preset:a,options:l}=i,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${le(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=ot(u?.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,h])=>u.push(`${d}="${h}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${ot(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){return Object.entries(t).forEach(([r,s])=>{let a=re(r,i.variable.excludedKeyRegex)?e:e?`${e}.${en(r)}`:en(r),l=n?`${n}.${r}`:r;fe(s)?this.createTokens(s,i,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,h;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(h=this.paths.find(p=>p.scheme===c))==null?void 0:h.computed(c,u.binding):this.paths.map(p=>p.computed(p.scheme,u[p.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,h=s;if(u.name=this.path,u.binding||(u.binding={}),re(s,d)){let C=s.trim().replaceAll(d,R=>{var F;let A=R.replace(/{|}/g,""),G=(F=o[A])==null?void 0:F.computed(c,u);return pi(G)&&G.length===2?`light-dark(${G[0].value},${G[1].value})`:G?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,b=/var\([^)]+\)/g;h=re(C.replace(b,"0"),f)?`calc(${C})`:C}return Q(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:h.includes("undefined")?void 0:h}}}))}),o},getTokenValue(t,i,e){var n;let r=(l=>l.split(".").filter(u=>!re(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,h=De(u,["colorScheme"]);return l[d]=h,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?gt(I(i)?`${t}${i},${t} ${i}`:t,n):gt(t,I(i)?gt(i,n):n)},transformCSS(t,i,e,n,o={},r,s,a){if(I(i)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=e==="dark"?c.reduce((u,{type:d,selector:h})=>(I(h)&&(u+=h.includes("[CSS]")?h.replace("[CSS]",i):this.getSelectorRule(h,a,d,i)),u),""):gt(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};fe(l)&&(c.name=le(l.name,{name:t,type:n})),I(c.name)&&(i=gt(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},D={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=tn(me({},i),{options:me(me({},this.defaults.options),i.options)}),this._tokens=ge.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ce.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=tn(me({},this.theme),{preset:t}),this._tokens=ge.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ce.emit("preset:change",t),ce.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=tn(me({},this.theme),{options:t}),this.clearLoadedStyleNames(),ce.emit("options:change",t),ce.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ge.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return ge.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPreset(o)},getLayerOrderCSS(t=""){return ge.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return ge.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return ge.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return ge.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ce.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ce.emit("theme:load"))}};var Is=0,Eo=(()=>{class t{document=g(Ee);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Is}`,id:u=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:C={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=e,ci(s,{type:"text/css",media:d,nonce:h});let f=this.document.head;p&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),no(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ds=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,As=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,B=(()=>{class t{name="base";useStyle=g(Eo);theme=Ds;css=As;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(le(e,{dt:mt}));return r?this.useStyle.use(ot(r),y({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>D.transformCSS(e.name||this.name,`${o}${n}`));getCommonTheme=e=>D.getCommon(this.name,e);getComponentTheme=e=>D.getComponent(this.name,e);getDirectiveTheme=e=>D.getDirective(this.name,e);getPresetTheme=(e,n,o)=>D.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>D.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=le(this.css,{dt:mt}),r=ot(`${o}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>D.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[D.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=le(this.theme,{dt:mt}),a=ot(D.transformCSS(r,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ms=(()=>{class t{theme=ie(void 0);isThemeChanged=!1;document=g(Ee);baseStyle=g(B);constructor(){Tt(()=>{ce.on("theme:change",e=>{Ce(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),Tt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){D.clearLoadedStyleNames(),ce.clear()}onThemeChange(e){D.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(e?.css,y({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,y({name:"global-variables"},s)),this.baseStyle.loadTheme(y({name:"global-style"},s),r),D.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n}=e||{};n&&this.theme.set(n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),on=(()=>{class t extends Ms{ripple=ie(!1);platformId=g(Re);inputStyle=ie("outlined");inputVariant=ie("outlined");overlayOptions={};csp=ie({nonce:void 0});filterMatchModeOptions={text:[Z.STARTS_WITH,Z.CONTAINS,Z.NOT_CONTAINS,Z.ENDS_WITH,Z.EQUALS,Z.NOT_EQUALS],numeric:[Z.EQUALS,Z.NOT_EQUALS,Z.LESS_THAN,Z.LESS_THAN_OR_EQUAL_TO,Z.GREATER_THAN,Z.GREATER_THAN_OR_EQUAL_TO],date:[Z.DATE_IS,Z.DATE_IS_NOT,Z.DATE_BEFORE,Z.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ye;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=y(y({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,theme:s,overlayOptions:a,translation:l}=e||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ks=new Y("PRIME_NG_CONFIG");function mu(...t){let i=t?.map(n=>({provide:ks,useValue:n,multi:!1})),e={provide:Pn,useFactory:n=>()=>t?.forEach(o=>n.setConfig(o)),deps:[on],multi:!0};return Zt([...i,e])}var wo=(()=>{class t extends B{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),j=(()=>{class t{document=g(Ee);platformId=g(Re);el=g(Ze);injector=g(Ni);cd=g(ii);renderer=g(St);config=g(on);baseComponentStyle=g(wo);baseStyle=g(B);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=rt("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return di(e,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}templates;ngAfterContentInit(){this.templates?.forEach(e=>{let n=e.getType(),o=`${n}Template`;this.hasOwnProperty(o)&&(this[o]=e.template),this.hasOwnProperty(`_${o}`)&&(this[`_${o}`]=e.template),this[n]=e.template})}ngOnChanges(e){if(this.document&&!Bi(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{bt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),bt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!bt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),bt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(y({name:"global-style"},this.styleOptions),r),D.setLoadedStyleName("common")}if(!D.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),D.setLoadedStyleName(this.componentStyle?.name)}if(!D.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,y({name:"layer-order",first:!0},this.styleOptions)),D.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){bt.clearLoadedStyleNames(),ce.on("theme:change",e)}cx(e,n){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:y({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,contentQueries:function(n,o,r){if(n&1&&X(r,go,4),n&2){let s;K(s=J())&&(o.templates=s)}},inputs:{dt:"dt"},standalone:!0,features:[O([wo,B]),te]})}return t})();var Fs=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Ns={root:"p-ink"},So=(()=>{class t extends B{name="ripple";theme=Fs;classes=Ns;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var xo=(()=>{class t extends j{zone=g(lt);_componentStyle=g(So);animationListener;mouseDownListener;timeout;constructor(){super(),Tt(()=>{pt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(it(n,"p-ink-active"),!Zi(n)&&!Yi(n)){let a=Math.max(we(this.el.nativeElement),he(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=eo(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Yi(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Zi(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Ue(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&it(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&it(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),it(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,to(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[O([So]),S]})}return t})(),Bu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({})}return t})();var rn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:r(F.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},C,f;l.top+a+s.height>d.height?(C=l.top-p.top-s.height,e.style.transformOrigin="bottom",l.top+C<0&&(C=-1*l.top)):(C=a+l.top-p.top,e.style.transformOrigin="top");let b=l.left+s.width-d.width,R=l.left-p.left;s.width>d.width?f=(l.left-p.left)*-1:b>0?f=R-b:f=l.left-p.left,e.style.top=C+"px",e.style.left=f+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),C,f;u.top+l+s>p.height?(C=u.top+d-s,e.style.transformOrigin="bottom",C<0&&(C=d)):(C=l+u.top+d,e.style.transformOrigin="top"),u.left+a>p.width?f=Math.max(0,u.left+h+c-a):f=u.left+h,e.style.top=C+"px",e.style.left=f+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+p>h&&(e.scrollTop=d+u-h+p)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),mi=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=rn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var To=(()=>{class t extends j{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Re);document=g(Ee);host=g(Ze);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){pt(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=rn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",_],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[oe,S]})}return t})();var Rs=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ls={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":I(t.value)&&String(t.value).length===1,"p-badge-dot":Q(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Oo=(()=>{class t extends B{name="badge";theme=Rs;classes=Ls;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function Ps(t,i){if(t&1&&(k(0,"span",1),et(1),N()),t&2){let e=V();q(e.styleClass()),m("ngClass",e.containerClass())("ngStyle",e.style()),w(),ti(e.value())}}var sn=(()=>{class t extends j{styleClass=Ne();style=Ne();badgeSize=Ne();size=Ne();severity=Ne();value=Ne();badgeDisabled=Ne(!1,{transform:_});_componentStyle=g(Oo);containerClass=_e(()=>({"p-badge p-component":!0,"p-badge-circle":I(this.value())&&String(this.value()).length===1,"p-badge-lg":this.badgeSize()==="large","p-badge-xl":this.badgeSize()==="xlarge","p-badge-sm":this.badgeSize()==="small","p-badge-dot":Q(this.value()),[`p-badge-${this.severity()}`]:this.severity()}));static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-badge"]],inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[O([Oo]),S,z],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle"],[3,"ngClass","ngStyle"]],template:function(n,o){n&1&&L(0,Ps,2,5,"span",0),n&2&&Mn(o.badgeDisabled()?-1:0)},dependencies:[pe,Pe,ut,ee],encapsulation:2,changeDetection:0})}return t})(),Io=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({imports:[sn,ee,ee]})}return t})();var Vs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Bs=(()=>{class t extends B{name="baseicon";inlineStyles=Vs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Us=["*"],We=(()=>{class t extends j{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=Q(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",_],styleClass:"styleClass"},standalone:!0,features:[O([Bs]),oe,S,z],ngContentSelectors:Us,decls:1,vars:0,template:function(n,o){n&1&&(Te(),de(0))},encapsulation:2,changeDetection:0})}return t})();var Do=(()=>{class t extends We{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["CheckIcon"]],standalone:!0,features:[S,z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(Fe(),k(0,"svg",0),W(1,"path",1),N()),n&2&&(q(o.getClassNames()),M("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Ao=(()=>{class t extends We{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["MinusIcon"]],standalone:!0,features:[S,z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(Fe(),k(0,"svg",0),W(1,"path",1),N()),n&2&&(q(o.getClassNames()),M("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Mo=(()=>{class t extends We{pathId;ngOnInit(){this.pathId="url(#"+rt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[S,z],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Fe(),k(0,"svg",0)(1,"g"),W(2,"path",1),N(),k(3,"defs")(4,"clipPath",2),W(5,"rect",3),N()()()),n&2&&(q(o.getClassNames()),M("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),w(),M("clip-path",o.pathId),w(3),m("id",o.pathId))},encapsulation:2})}return t})();var Id=(()=>{class t extends We{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[S,z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(Fe(),k(0,"svg",0),W(1,"path",1),N()),n&2&&(q(o.getClassNames()),M("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var js=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Hs={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Ge=(()=>{class t extends B{name="button";theme=js;classes=Hs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ws=["content"],zs=["loading"],Gs=["icon"],qs=["*"],No=t=>({class:t});function Ks(t,i){t&1&&Le(0)}function Js(t,i){if(t&1&&W(0,"span",8),t&2){let e=V(3);m("ngClass",e.iconClass()),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qs(t,i){if(t&1&&W(0,"SpinnerIcon",9),t&2){let e=V(3);m("styleClass",e.spinnerIconClass())("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zs(t,i){if(t&1&&(Ye(0),L(1,Js,1,3,"span",6)(2,Qs,1,4,"SpinnerIcon",7),Xe()),t&2){let e=V(2);w(),m("ngIf",e.loadingIcon),w(),m("ngIf",!e.loadingIcon)}}function Ys(t,i){}function Xs(t,i){if(t&1&&L(0,Ys,0,0,"ng-template",10),t&2){let e=V(2);m("ngIf",e.loadingicon)}}function ea(t,i){if(t&1&&(Ye(0),L(1,Zs,3,2,"ng-container",2)(2,Xs,1,1,null,5),Xe()),t&2){let e=V();w(),m("ngIf",!e.loadingicon),w(),m("ngTemplateOutlet",e.loadingicon)("ngTemplateOutletContext",xt(3,No,e.iconClass()))}}function ta(t,i){if(t&1&&W(0,"span",8),t&2){let e=V(2);q(e.icon),m("ngClass",e.iconClass()),M("data-pc-section","icon")}}function ia(t,i){}function na(t,i){if(t&1&&L(0,ia,0,0,"ng-template",10),t&2){let e=V(2);m("ngIf",!e.icon&&e.iconTemplate)}}function oa(t,i){if(t&1&&(Ye(0),L(1,ta,1,4,"span",11)(2,na,1,1,null,5),Xe()),t&2){let e=V();w(),m("ngIf",e.icon&&!e.iconTemplate),w(),m("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",xt(3,No,e.iconClass()))}}function ra(t,i){if(t&1&&(k(0,"span",12),et(1),N()),t&2){let e=V();M("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),w(),ti(e.label)}}function sa(t,i){if(t&1&&W(0,"p-badge",13),t&2){let e=V();m("value",e.badge)("severity",e.badgeSeverity)}}var ze={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},ko=(()=>{class t extends j{_componentStyle=g(Ge);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&Se("p-button-label",!0)},standalone:!0,features:[O([Ge]),S]})}return t})(),Fo=(()=>{class t extends j{_componentStyle=g(Ge);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&Se("p-button-icon",!0)},standalone:!0,features:[O([Ge]),S]})}return t})(),Jd=(()=>{class t extends j{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ri(Fo);labelSignal=Ri(ko);isIconOnly=_e(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ze);isTextButton=_e(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(Ge);ngAfterViewInit(){super.ngAfterViewInit(),Ue(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let e=[ze.button,ze.component];return this.icon&&!this.label&&Q(this.htmlElement.textContent)&&e.push(ze.iconOnly),this.loading&&(e.push(ze.disabled,ze.loading),!this.icon&&this.label&&e.push(ze.labelOnly),this.icon&&!this.label&&!Q(this.htmlElement.textContent)&&e.push(ze.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Q(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}createLabel(){if(!Ie(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ie(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Ue(n,o);let r=this.getIconClass();r&&Ue(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Ie(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ie(this.htmlElement,".p-button-icon"),n=Ie(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(Pi(r,o.iconSignal,Fo,5),Pi(r,o.labelSignal,ko,5)),n&2&&Nn(2)},hostVars:4,hostBindings:function(n,o){n&2&&Se("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],outlined:[2,"outlined","outlined",_],size:"size",plain:[2,"plain","plain",_],fluid:[2,"fluid","fluid",_],label:"label",icon:"icon",buttonProps:"buttonProps"},standalone:!0,features:[O([Ge]),oe,S,te]})}return t})(),aa=(()=>{class t extends j{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ne;onFocus=new ne;onBlur=new ne;content;loadingicon;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Q(this.fluid)?!!n:this.fluid}_componentStyle=g(Ge);ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingicon)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(X(r,Ws,5),X(r,zs,5),X(r,Gs,5)),n&2){let s;K(s=J())&&(o.content=s.first),K(s=J())&&(o.loadingicon=s.first),K(s=J())&&(o.iconTemplate=s.first)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",ve],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],fluid:[2,"fluid","fluid",_],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[O([Ge]),oe,S,te,z],ngContentSelectors:qs,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(Te(),k(0,"button",0),xe("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),de(1),L(2,Ks,1,0,"ng-container",1)(3,ea,3,5,"ng-container",2)(4,oa,3,5,"ng-container",2)(5,ra,2,3,"span",3)(6,sa,1,2,"p-badge",4),N()),n&2&&(m("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),M("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),w(2),m("ngTemplateOutlet",o.content),w(),m("ngIf",o.loading),w(),m("ngIf",!o.loading),w(),m("ngIf",!o.content&&o.label),w(),m("ngIf",!o.content&&o.badge))},dependencies:[pe,Pe,ct,dt,ut,xo,To,Mo,Io,sn,ee],encapsulation:2,changeDetection:0})}return t})(),Qd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({imports:[pe,aa,ee,ee]})}return t})();var la=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,ca={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ro=(()=>{class t extends B{name="card";theme=la;classes=ca;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ua=["header"],da=["title"],pa=["subtitle"],ha=["content"],fa=["footer"],ga=["*",[["p-header"]],[["p-footer"]]],ma=["*","p-header","p-footer"];function ba(t,i){t&1&&Le(0)}function ya(t,i){if(t&1&&(k(0,"div",8),de(1,1),L(2,ba,1,0,"ng-container",6),N()),t&2){let e=V();w(2),m("ngTemplateOutlet",e.headerTemplate)}}function va(t,i){t&1&&Le(0)}function _a(t,i){if(t&1&&(k(0,"div",9),et(1),L(2,va,1,0,"ng-container",6),N()),t&2){let e=V();w(),$i(" ",e._header," "),w(),m("ngTemplateOutlet",e.titleTemplate)}}function Ca(t,i){t&1&&Le(0)}function Ea(t,i){if(t&1&&(k(0,"div",10),et(1),L(2,Ca,1,0,"ng-container",6),N()),t&2){let e=V();w(),$i(" ",e.subheader," "),w(),m("ngTemplateOutlet",e.subtitleTemplate)}}function wa(t,i){t&1&&Le(0)}function Sa(t,i){t&1&&Le(0)}function xa(t,i){if(t&1&&(k(0,"div",11),de(1,2),L(2,Sa,1,0,"ng-container",6),N()),t&2){let e=V();w(2),m("ngTemplateOutlet",e.footerTemplate)}}var Ta=(()=>{class t extends j{_header;subheader;set style(e){nt(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=ie(null);_componentStyle=g(Ro);getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-card"]],contentQueries:function(n,o,r){if(n&1&&(X(r,ho,5),X(r,fo,5),X(r,ua,5),X(r,da,5),X(r,pa,5),X(r,ha,5),X(r,fa,5)),n&2){let s;K(s=J())&&(o.headerFacet=s.first),K(s=J())&&(o.footerFacet=s.first),K(s=J())&&(o.headerTemplate=s.first),K(s=J())&&(o.titleTemplate=s.first),K(s=J())&&(o.subtitleTemplate=s.first),K(s=J())&&(o.contentTemplate=s.first),K(s=J())&&(o.footerTemplate=s.first)}},inputs:{_header:[0,"header","_header"],subheader:"subheader",style:"style",styleClass:"styleClass"},standalone:!0,features:[O([Ro]),S,z],ngContentSelectors:ma,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,o){n&1&&(Te(ga),k(0,"div",0),L(1,ya,3,1,"div",1),k(2,"div",2),L(3,_a,3,2,"div",3)(4,Ea,3,2,"div",4),k(5,"div",5),de(6),L(7,wa,1,0,"ng-container",6),N(),L(8,xa,3,1,"div",7),N()()),n&2&&(q(o.styleClass),m("ngClass","p-card p-component")("ngStyle",o._style()),M("data-pc-name","card"),w(),m("ngIf",o.headerFacet||o.headerTemplate),w(2),m("ngIf",o._header||o.titleTemplate),w(),m("ngIf",o.subheader||o.subtitleTemplate),w(3),m("ngTemplateOutlet",o.contentTemplate),w(),m("ngIf",o.footerFacet||o.footerTemplate))},dependencies:[pe,Pe,ct,dt,ut,ee],encapsulation:2,changeDetection:0})}return t})(),dp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({imports:[Ta,ee,ee]})}return t})();var zo=(()=>{class t{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||t)(T(St),T(Ze))}}static{this.\u0275dir=x({type:t})}}return t})(),Oa=(()=>{class t extends zo{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})()}static{this.\u0275dir=x({type:t,features:[S]})}}return t})(),Pt=new Y("");var Ia={provide:Pt,useExisting:Me(()=>Go),multi:!0};function Da(){let t=Vi()?Vi().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Aa=new Y(""),Go=(()=>{class t extends zo{constructor(e,n,o){super(e,n),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Da())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||t)(T(St),T(Ze),T(Aa,8))}}static{this.\u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&xe("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[O([Ia]),S]})}}return t})();function qe(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function qo(t){return t!=null&&typeof t.length=="number"}var Ti=new Y(""),hn=new Y(""),Ma=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Lo=class{static min(i){return ka(i)}static max(i){return Fa(i)}static required(i){return Ko(i)}static requiredTrue(i){return Na(i)}static email(i){return Ra(i)}static minLength(i){return La(i)}static maxLength(i){return Pa(i)}static pattern(i){return $a(i)}static nullValidator(i){return yi(i)}static compose(i){return er(i)}static composeAsync(i){return ir(i)}};function ka(t){return i=>{if(qe(i.value)||qe(t))return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Fa(t){return i=>{if(qe(i.value)||qe(t))return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Ko(t){return qe(t.value)?{required:!0}:null}function Na(t){return t.value===!0?null:{required:!0}}function Ra(t){return qe(t.value)||Ma.test(t.value)?null:{email:!0}}function La(t){return i=>qe(i.value)||!qo(i.value)?null:i.value.length<t?{minlength:{requiredLength:t,actualLength:i.value.length}}:null}function Pa(t){return i=>qo(i.value)&&i.value.length>t?{maxlength:{requiredLength:t,actualLength:i.value.length}}:null}function $a(t){if(!t)return yi;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(qe(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function yi(t){return null}function Jo(t){return t!=null}function Qo(t){return Ln(t)?Qt(t):t}function Zo(t){let i={};return t.forEach(e=>{i=e!=null?y(y({},i),e):i}),Object.keys(i).length===0?null:i}function Yo(t,i){return i.map(e=>e(t))}function Va(t){return!t.validate}function Xo(t){return t.map(i=>Va(i)?i:e=>i.validate(e))}function er(t){if(!t)return null;let i=t.filter(Jo);return i.length==0?null:function(e){return Zo(Yo(e,i))}}function tr(t){return t!=null?er(Xo(t)):null}function ir(t){if(!t)return null;let i=t.filter(Jo);return i.length==0?null:function(e){let n=Yo(e,i).map(Qo);return En(n).pipe(Qe(Zo))}}function nr(t){return t!=null?ir(Xo(t)):null}function Po(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function or(t){return t._rawValidators}function rr(t){return t._rawAsyncValidators}function an(t){return t?Array.isArray(t)?t:[t]:[]}function vi(t,i){return Array.isArray(t)?t.includes(i):t===i}function $o(t,i){let e=an(i);return an(t).forEach(o=>{vi(e,o)||e.push(o)}),e}function Vo(t,i){return an(i).filter(e=>!vi(t,e))}var _i=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=tr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=nr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},st=class extends _i{get formDirective(){return null}get path(){return null}},Ae=class extends _i{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Ci=class{constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ba={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Dp=ue(y({},Ba),{"[class.ng-submitted]":"isSubmitted"}),Ap=(()=>{class t extends Ci{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||t)(T(Ae,2))}}static{this.\u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Se("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[S]})}}return t})(),Mp=(()=>{class t extends Ci{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||t)(T(st,10))}}static{this.\u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&Se("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[S]})}}return t})();var kt="VALID",bi="INVALID",yt="PENDING",Ft="DISABLED",Ke=class{},Ei=class extends Ke{constructor(i,e){super(),this.value=i,this.source=e}},Nt=class extends Ke{constructor(i,e){super(),this.pristine=i,this.source=e}},Rt=class extends Ke{constructor(i,e){super(),this.touched=i,this.source=e}},vt=class extends Ke{constructor(i,e){super(),this.status=i,this.source=e}},ln=class extends Ke{constructor(i){super(),this.source=i}},cn=class extends Ke{constructor(i){super(),this.source=i}};function fn(t){return(Oi(t)?t.validators:t)||null}function Ua(t){return Array.isArray(t)?tr(t):t||null}function gn(t,i){return(Oi(i)?i.asyncValidators:t)||null}function ja(t){return Array.isArray(t)?nr(t):t||null}function Oi(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function sr(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new at(1e3,"");if(!n[e])throw new at(1001,"")}function ar(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new at(1002,"")})}var _t=class{constructor(i,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=_e(()=>this.statusReactive()),this.statusReactive=ie(void 0),this._pristine=_e(()=>this.pristineReactive()),this.pristineReactive=ie(!0),this._touched=_e(()=>this.touchedReactive()),this.touchedReactive=ie(!1),this._events=new ye,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ce(this.statusReactive)}set status(i){Ce(()=>this.statusReactive.set(i))}get valid(){return this.status===kt}get invalid(){return this.status===bi}get pending(){return this.status==yt}get disabled(){return this.status===Ft}get enabled(){return this.status!==Ft}get pristine(){return Ce(this.pristineReactive)}set pristine(i){Ce(()=>this.pristineReactive.set(i))}get dirty(){return!this.pristine}get touched(){return Ce(this.touchedReactive)}set touched(i){Ce(()=>this.touchedReactive.set(i))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators($o(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators($o(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Vo(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Vo(i,this._rawAsyncValidators))}hasValidator(i){return vi(this._rawValidators,i)}hasAsyncValidator(i){return vi(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(ue(y({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Rt(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Rt(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(ue(y({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Nt(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Nt(!0,n))}markAsPending(i={}){this.status=yt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new vt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(ue(y({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ft,this.errors=null,this._forEachChild(o=>{o.disable(ue(y({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ei(this.value,n)),this._events.next(new vt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ue(y({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=kt,this._forEachChild(n=>{n.enable(ue(y({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ue(y({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===kt||this.status===yt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ei(this.value,e)),this._events.next(new vt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(ue(y({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ft:kt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=yt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Qo(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new vt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new ne,this.statusChanges=new ne}_calculateStatus(){return this._allControlsDisabled()?Ft:this.errors?bi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yt)?yt:this._anyControlsHaveStatus(bi)?bi:kt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new Nt(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Rt(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Oi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ua(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ja(this._rawAsyncValidators)}},wi=class extends _t{constructor(i,e,n){super(fn(e),gn(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){ar(this,!0,i),Object.keys(i).forEach(n=>{sr(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var un=class extends wi{};var Ii=new Y("CallSetDisabledState",{providedIn:"root",factory:()=>Di}),Di="always";function lr(t,i){return[...i.path,t]}function dn(t,i,e=Di){mn(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Wa(t,i),Ga(t,i),za(t,i),Ha(t,i)}function Bo(t,i,e=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),xi(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Si(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Ha(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function mn(t,i){let e=or(t);i.validator!==null?t.setValidators(Po(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=rr(t);i.asyncValidator!==null?t.setAsyncValidators(Po(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();Si(i._rawValidators,o),Si(i._rawAsyncValidators,o)}function xi(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=or(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=rr(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return Si(i._rawValidators,n),Si(i._rawAsyncValidators,n),e}function Wa(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&cr(t,i)})}function za(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&cr(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function cr(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ga(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function qa(t,i){t==null,mn(t,i)}function Ka(t,i){return xi(t,i)}function ur(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Ja(t){return Object.getPrototypeOf(t.constructor)===Oa}function Qa(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function dr(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Go?e=r:Ja(r)?n=r:o=r}),o||n||e||null}function Za(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Uo(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function jo(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Lt=class extends _t{constructor(i=null,e,n){super(fn(e),gn(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Oi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(jo(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Uo(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Uo(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){jo(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Ya=t=>t instanceof Lt;var Xa={provide:Ae,useExisting:Me(()=>bn)},Ho=Promise.resolve(),bn=(()=>{class t extends Ae{constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this.control=new Lt,this._registered=!1,this.name="",this.update=new ne,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=dr(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ur(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){dn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ho.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&_(n);Ho.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?lr(e,this._parent):[e]}static{this.\u0275fac=function(n){return new(n||t)(T(st,9),T(Ti,10),T(hn,10),T(Pt,10),T(ii,8),T(Ii,8))}}static{this.\u0275dir=x({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[O([Xa]),S,te]})}}return t})(),Fp=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return t})();var pr=new Y("");var el={provide:st,useExisting:Me(()=>tl)},tl=(()=>{class t extends st{get submitted(){return Ce(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}constructor(e,n,o){super(),this.callSetDisabledState=o,this._submitted=_e(()=>this._submittedReactive()),this._submittedReactive=ie(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new ne,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(xi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return dn(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Bo(e.control||null,e,!1),Za(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),Qa(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ln(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new cn(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(Bo(n||null,e),Ya(o)&&(dn(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);qa(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&Ka(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){mn(this.form,this),this._oldForm&&xi(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||t)(T(Ti,10),T(hn,10),T(Ii,8))}}static{this.\u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&xe("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[O([el]),S,te]})}}return t})();var il={provide:Ae,useExisting:Me(()=>nl)},nl=(()=>{class t extends Ae{set isDisabled(e){}static{this._ngModelWarningSentOnce=!1}constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.name=null,this.update=new ne,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=dr(this,r)}ngOnChanges(e){this._added||this._setUpControl(),ur(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return lr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||t)(T(st,13),T(Ti,10),T(hn,10),T(Pt,10),T(pr,8))}}static{this.\u0275dir=x({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[O([il]),S,te]})}}return t})();var ol=(()=>{class t{constructor(){this._validator=yi}ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):yi,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=x({type:t,features:[te]})}}return t})();var rl={provide:Ti,useExisting:Me(()=>sl),multi:!0};var sl=(()=>{class t extends ol{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=_,this.createValidator=e=>Ko}enabled(e){return e}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})()}static{this.\u0275dir=x({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&M("required",o._enabled?"":null)},inputs:{required:"required"},features:[O([rl]),S]})}}return t})();var hr=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=$({type:t})}static{this.\u0275inj=P({})}}return t})(),pn=class extends _t{constructor(i,e,n){super(fn(e),gn(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){this.controls.push(i),this._registerControl(i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){ar(this,!1,i),i.forEach((n,o)=>{sr(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function Wo(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Np=(()=>{class t{constructor(){this.useNonNullable=!1}get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let o=this._reduceControls(e),r={};return Wo(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new wi(o,r)}record(e,n=null){let o=this._reduceControls(e);return new un(o,n)}control(e,n,o){let r={};return this.useNonNullable?(Wo(n)?r=n:(r.validators=n,r.asyncValidators=o),new Lt(e,ue(y({},r),{nonNullable:!0}))):new Lt(e,n,o)}array(e,n,o){let r=e.map(s=>this._createControl(s));return new pn(r,n,o)}_reduceControls(e){let n={};return Object.keys(e).forEach(o=>{n[o]=this._createControl(e[o])}),n}_createControl(e){if(e instanceof Lt)return e;if(e instanceof _t)return e;if(Array.isArray(e)){let n=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,o,r)}else return this.control(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Rp=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ii,useValue:e.callSetDisabledState??Di}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=$({type:t})}static{this.\u0275inj=P({imports:[hr]})}}return t})(),Lp=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:pr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ii,useValue:e.callSetDisabledState??Di}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=$({type:t})}static{this.\u0275inj=P({imports:[hr]})}}return t})();var ll=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,cl={root:({instance:t,props:i})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},fr=(()=>{class t extends B{name="inputtext";theme=ll;classes=cl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Kp=(()=>{class t extends j{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=g(fr);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Q(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(T(bn,8))};static \u0275dir=x({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,o){n&1&&xe("input",function(s){return o.onInput(s)}),n&2&&Se("p-filled",o.filled)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",_],pSize:"pSize"},standalone:!0,features:[O([fr]),oe,S]})}return t})(),Jp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({})}return t})();var gr=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),c=this.isDate(e);if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var h=Object.keys(i);if(s=h.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return y(y({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,c=e instanceof Date;if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var h=Object.keys(i);if(s=h.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},mr=0;function Zp(t="pn_id_"){return mr++,`${t}${mr}`}function ul(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n()}}var Ai=ul();var dl=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,pl={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},br=(()=>{class t extends B{name="tooltip";theme=dl;classes=pl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var dh=(()=>{class t extends j{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:rt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=g(br);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),pt(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=y(y({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(tt(e.relatedTarget,"p-tooltip")||tt(e.relatedTarget,"p-tooltip-text")||tt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Qi(this.container,this.el.nativeElement):Qi(this.getOption("appendTo"),this.container),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),Zn(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ai.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Ai.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof ei){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+qi(),o=e.top+Ki();return{left:n,top:o}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let e=this.activeElement,n=this.getHostOffset(),o=n.left+we(e),r=n.top+(he(e)-he(this.container))/2;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?Ie(this.el.nativeElement,".p-component"):this.el.nativeElement}alignLeft(){this.preAlign("left");let e=this.getHostOffset(),n=e.left-we(this.container),o=e.top+(he(this.el.nativeElement)-he(this.container))/2;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let e=this.getHostOffset(),n=e.left+(we(this.el.nativeElement)-we(this.container))/2,o=e.top-he(this.container);this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let e=this.getHostOffset(),n=e.left+(we(this.el.nativeElement)-we(this.container))/2,o=e.top+he(this.el.nativeElement);this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=y(y({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return tt(e,"p-inputwrapper")?Ie(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,o=e.left,r=we(this.container),s=he(this.container),a=li();return o+r>a.width||o<0||n<0||n+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new mi(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):io(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Ai.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(T(lt),T(An))};static \u0275dir=x({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",_],showDelay:[2,"showDelay","showDelay",ve],hideDelay:[2,"hideDelay","hideDelay",ve],life:[2,"life","life",ve],positionTop:[2,"positionTop","positionTop",ve],positionLeft:[2,"positionLeft","positionLeft",ve],autoHide:[2,"autoHide","autoHide",_],fitContent:[2,"fitContent","fitContent",_],hideOnEscape:[2,"hideOnEscape","hideOnEscape",_],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[O([br]),oe,S,te]})}return t})(),ph=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({})}return t})();var gh={production:!1,apiUrl:"http://localhost:5000"};var hl=({dt:t})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${t("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${t("checkbox.border.radius")};
    border: 1px solid ${t("checkbox.border.color")};
    background: ${t("checkbox.background")};
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
    transition: background ${t("checkbox.transition.duration")}, color ${t("checkbox.transition.duration")}, border-color ${t("checkbox.transition.duration")}, box-shadow ${t("checkbox.transition.duration")}, outline-color ${t("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${t("checkbox.transition.duration")};
    color: ${t("checkbox.icon.color")};
    font-size: ${t("checkbox.icon.size")};
    width: ${t("checkbox.icon.size")};
    height: ${t("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${t("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${t("checkbox.checked.border.color")};
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
    border-color: ${t("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.focus.border.color")};
    box-shadow: ${t("checkbox.focus.ring.shadow")};
    outline: ${t("checkbox.focus.ring.width")} ${t("checkbox.focus.ring.style")} ${t("checkbox.focus.ring.color")};
    outline-offset: ${t("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${t("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${t("checkbox.disabled.background")};
    border-color: ${t("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${t("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${t("checkbox.sm.width")};
    height: ${t("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${t("checkbox.icon.sm.size")};
    width: ${t("checkbox.icon.sm.size")};
    height: ${t("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${t("checkbox.lg.width")};
    height: ${t("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${t("checkbox.icon.lg.size")};
    width: ${t("checkbox.icon.lg.size")};
    height: ${t("checkbox.icon.lg.size")};
}
`,fl={root:({instance:t,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},yr=(()=>{class t extends B{name="checkbox";theme=hl;classes=fl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var gl=["checkboxicon"],ml=["input"],bl=()=>({"p-checkbox-input":!0}),yl=t=>({checked:t,class:"p-checkbox-icon"});function vl(t,i){if(t&1&&W(0,"span",8),t&2){let e=V(3);m("ngClass",e.checkboxIcon),M("data-pc-section","icon")}}function _l(t,i){t&1&&W(0,"CheckIcon",9),t&2&&(m("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function Cl(t,i){if(t&1&&(Ye(0),L(1,vl,1,2,"span",7)(2,_l,1,2,"CheckIcon",6),Xe()),t&2){let e=V(2);w(),m("ngIf",e.checkboxIcon),w(),m("ngIf",!e.checkboxIcon)}}function El(t,i){t&1&&W(0,"MinusIcon",9),t&2&&(m("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function wl(t,i){if(t&1&&(Ye(0),L(1,Cl,3,2,"ng-container",4)(2,El,1,2,"MinusIcon",6),Xe()),t&2){let e=V();w(),m("ngIf",e.checked),w(),m("ngIf",e._indeterminate())}}function Sl(t,i){}function xl(t,i){t&1&&L(0,Sl,0,0,"ng-template")}var Tl={provide:Pt,useExisting:Me(()=>vr),multi:!0},vr=(()=>{class t extends j{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new ne;onFocus=new ne;onBlur=new ne;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:co(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=ie(void 0);checkboxicon;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=g(yr);ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,o=this.injector.get(Ae,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!nt(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=U({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,r){if(n&1&&X(r,gl,5),n&2){let s;K(s=J())&&(o.checkboxicon=s.first)}},viewQuery:function(n,o){if(n&1&&Fn(ml,5),n&2){let r;K(r=J())&&(o.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",_],binary:[2,"binary","binary",_],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",ve],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",_],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",_],required:[2,"required","required",_],autofocus:[2,"autofocus","autofocus",_],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[O([Tl,yr]),oe,S,te,z],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let r=kn();k(0,"div",1)(1,"input",2,0),xe("focus",function(a){return Yt(r),Xt(o.onInputFocus(a))})("blur",function(a){return Yt(r),Xt(o.onInputBlur(a))})("change",function(a){return Yt(r),Xt(o.handleChange(a))}),N(),k(3,"div",3),L(4,wl,3,2,"ng-container",4)(5,xl,1,0,null,5),N()()}n&2&&(Li(o.style),q(o.styleClass),m("ngClass",o.containerClass),M("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),w(),Li(o.inputStyle),q(o.inputClass),m("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",Rn(26,bl)),M("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),w(3),m("ngIf",!o.checkboxicon),w(),m("ngTemplateOutlet",o.checkboxicon)("ngTemplateOutletContext",xt(27,yl,o.checked)))},dependencies:[pe,Pe,ct,dt,Do,Ao,ee],encapsulation:2,changeDetection:0})}return t})(),Nh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=P({imports:[vr,ee,ee]})}return t})();export{Ve as a,Wr as b,zl as c,Gl as d,tt as e,Ue as f,Ql as g,it as h,Zl as i,li as j,Yl as k,we as l,Xl as m,Qi as n,ec as o,cs as p,Ie as q,tc as r,ic as s,Yn as t,nc as u,Zi as v,oc as w,rc as x,he as y,sc as z,ac as A,Yi as B,lc as C,cc as D,uc as E,no as F,Q as G,gs as H,I,ui as J,nt as K,fc as L,gc as M,mc as N,rt as O,bs as P,kc as Q,Z as R,Fc as S,Nc as T,Rc as U,Lc as V,ho as W,fo as X,go as Y,ee as Z,Pc as _,Bc as $,B as aa,mu as ba,j as ca,rn as da,mi as ea,To as fa,sn as ga,Io as ha,We as ia,Do as ja,Mo as ka,Id as la,xo as ma,Bu as na,Jd as oa,aa as pa,Qd as qa,gr as ra,Zp as sa,Ai as ta,dh as ua,ph as va,gh as wa,Ta as xa,dp as ya,Pt as za,Go as Aa,Lo as Ba,Ae as Ca,Ap as Da,Mp as Ea,bn as Fa,Fp as Ga,tl as Ha,nl as Ia,sl as Ja,Np as Ka,Rp as La,Lp as Ma,Nh as Na,Kp as Oa,Jp as Pa};
