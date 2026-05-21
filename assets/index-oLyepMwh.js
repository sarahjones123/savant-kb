const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/docs-B1NhywYr.js","assets/SearchPalette-B6X86pFW.js","assets/createLucideIcon-B680HOia.js","assets/utils-DaT-yT0k.js","assets/sparkles-FTUA0fHg.js","assets/index-BZnx52C3.js","assets/arrow-right-DgB9zIps.js","assets/docs.index-BqEdw6By.js","assets/docs._slug-JeuHHF5A.js"])))=>i.map(i=>d[i]);
function nv(i,s){for(var l=0;l<s.length;l++){const u=s[l];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in i)){const d=Object.getOwnPropertyDescriptor(u,c);d&&Object.defineProperty(i,c,d.get?d:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Zu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Eu={exports:{}},lo={};var sm;function av(){if(sm)return lo;sm=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(u,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:i,type:u,key:m,ref:c!==void 0?c:null,props:d}}return lo.Fragment=s,lo.jsx=l,lo.jsxs=l,lo}var lm;function iv(){return lm||(lm=1,Eu.exports=av()),Eu.exports}var V=iv(),Tu={exports:{}},le={};var rm;function ov(){if(rm)return le;rm=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),A=Symbol.iterator;function b(T){return T===null||typeof T!="object"?null:(T=A&&T[A]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function z(T,B,I){this.props=T,this.context=B,this.refs=D,this.updater=I||_}z.prototype.isReactComponent={},z.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function q(){}q.prototype=z.prototype;function Y(T,B,I){this.props=T,this.context=B,this.refs=D,this.updater=I||_}var G=Y.prototype=new q;G.constructor=Y,C(G,z.prototype),G.isPureReactComponent=!0;var $=Array.isArray;function K(){}var j={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function F(T,B,I){var X=I.ref;return{$$typeof:i,type:T,key:B,ref:X!==void 0?X:null,props:I}}function se(T,B){return F(T.type,B,T.props)}function ie(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function ae(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(I){return B[I]})}var Ie=/\/+/g;function ke(T,B){return typeof T=="object"&&T!==null&&T.key!=null?ae(""+T.key):B.toString(36)}function Be(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(K,K):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function L(T,B,I,X,W){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var ge=!1;if(T===null)ge=!0;else switch(ce){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(T.$$typeof){case i:case s:ge=!0;break;case S:return ge=T._init,L(ge(T._payload),B,I,X,W)}}if(ge)return W=W(T),ge=X===""?"."+ke(T,0):X,$(W)?(I="",ge!=null&&(I=ge.replace(Ie,"$&/")+"/"),L(W,B,I,"",function(Kt){return Kt})):W!=null&&(ie(W)&&(W=se(W,I+(W.key==null||T&&T.key===W.key?"":(""+W.key).replace(Ie,"$&/")+"/")+ge)),B.push(W)),1;ge=0;var He=X===""?".":X+":";if($(T))for(var Ce=0;Ce<T.length;Ce++)X=T[Ce],ce=He+ke(X,Ce),ge+=L(X,B,I,ce,W);else if(Ce=b(T),typeof Ce=="function")for(T=Ce.call(T),Ce=0;!(X=T.next()).done;)X=X.value,ce=He+ke(X,Ce++),ge+=L(X,B,I,ce,W);else if(ce==="object"){if(typeof T.then=="function")return L(Be(T),B,I,X,W);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ge}function P(T,B,I){if(T==null)return T;var X=[],W=0;return L(T,X,"","",function(ce){return B.call(I,ce,W++)}),X}function ne(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(I){(T._status===0||T._status===-1)&&(T._status=1,T._result=I)},function(I){(T._status===0||T._status===-1)&&(T._status=2,T._result=I)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var Se=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},we={map:P,forEach:function(T,B,I){P(T,function(){B.apply(this,arguments)},I)},count:function(T){var B=0;return P(T,function(){B++}),B},toArray:function(T){return P(T,function(B){return B})||[]},only:function(T){if(!ie(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return le.Activity=v,le.Children=we,le.Component=z,le.Fragment=l,le.Profiler=c,le.PureComponent=Y,le.StrictMode=u,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,le.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},le.cache=function(T){return function(){return T.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(T,B,I){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=C({},T.props),W=T.key;if(B!=null)for(ce in B.key!==void 0&&(W=""+B.key),B)!Q.call(B,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&B.ref===void 0||(X[ce]=B[ce]);var ce=arguments.length-2;if(ce===1)X.children=I;else if(1<ce){for(var ge=Array(ce),He=0;He<ce;He++)ge[He]=arguments[He+2];X.children=ge}return F(T.type,W,X)},le.createContext=function(T){return T={$$typeof:m,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},le.createElement=function(T,B,I){var X,W={},ce=null;if(B!=null)for(X in B.key!==void 0&&(ce=""+B.key),B)Q.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=B[X]);var ge=arguments.length-2;if(ge===1)W.children=I;else if(1<ge){for(var He=Array(ge),Ce=0;Ce<ge;Ce++)He[Ce]=arguments[Ce+2];W.children=He}if(T&&T.defaultProps)for(X in ge=T.defaultProps,ge)W[X]===void 0&&(W[X]=ge[X]);return F(T,ce,W)},le.createRef=function(){return{current:null}},le.forwardRef=function(T){return{$$typeof:y,render:T}},le.isValidElement=ie,le.lazy=function(T){return{$$typeof:S,_payload:{_status:-1,_result:T},_init:ne}},le.memo=function(T,B){return{$$typeof:h,type:T,compare:B===void 0?null:B}},le.startTransition=function(T){var B=j.T,I={};j.T=I;try{var X=T(),W=j.S;W!==null&&W(I,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(K,Se)}catch(ce){Se(ce)}finally{B!==null&&I.types!==null&&(B.types=I.types),j.T=B}},le.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},le.use=function(T){return j.H.use(T)},le.useActionState=function(T,B,I){return j.H.useActionState(T,B,I)},le.useCallback=function(T,B){return j.H.useCallback(T,B)},le.useContext=function(T){return j.H.useContext(T)},le.useDebugValue=function(){},le.useDeferredValue=function(T,B){return j.H.useDeferredValue(T,B)},le.useEffect=function(T,B){return j.H.useEffect(T,B)},le.useEffectEvent=function(T){return j.H.useEffectEvent(T)},le.useId=function(){return j.H.useId()},le.useImperativeHandle=function(T,B,I){return j.H.useImperativeHandle(T,B,I)},le.useInsertionEffect=function(T,B){return j.H.useInsertionEffect(T,B)},le.useLayoutEffect=function(T,B){return j.H.useLayoutEffect(T,B)},le.useMemo=function(T,B){return j.H.useMemo(T,B)},le.useOptimistic=function(T,B){return j.H.useOptimistic(T,B)},le.useReducer=function(T,B,I){return j.H.useReducer(T,B,I)},le.useRef=function(T){return j.H.useRef(T)},le.useState=function(T){return j.H.useState(T)},le.useSyncExternalStore=function(T,B,I){return j.H.useSyncExternalStore(T,B,I)},le.useTransition=function(){return j.H.useTransition()},le.version="19.2.6",le}var um;function Ao(){return um||(um=1,Tu.exports=ov()),Tu.exports}var ee=Ao();const Sa=Zu(ee),Z0=nv({__proto__:null,default:Sa},[ee]);var _u={exports:{}},ro={},Ru={exports:{}},Cu={};var cm;function sv(){return cm||(cm=1,(function(i){function s(L,P){var ne=L.length;L.push(P);e:for(;0<ne;){var Se=ne-1>>>1,we=L[Se];if(0<c(we,P))L[Se]=P,L[ne]=we,ne=Se;else break e}}function l(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var P=L[0],ne=L.pop();if(ne!==P){L[0]=ne;e:for(var Se=0,we=L.length,T=we>>>1;Se<T;){var B=2*(Se+1)-1,I=L[B],X=B+1,W=L[X];if(0>c(I,ne))X<we&&0>c(W,I)?(L[Se]=W,L[X]=ne,Se=X):(L[Se]=I,L[B]=ne,Se=B);else if(X<we&&0>c(W,ne))L[Se]=W,L[X]=ne,Se=X;else break e}}return P}function c(L,P){var ne=L.sortIndex-P.sortIndex;return ne!==0?ne:L.id-P.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();i.unstable_now=function(){return m.now()-y}}var p=[],h=[],S=1,v=null,A=3,b=!1,_=!1,C=!1,D=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function G(L){for(var P=l(h);P!==null;){if(P.callback===null)u(h);else if(P.startTime<=L)u(h),P.sortIndex=P.expirationTime,s(p,P);else break;P=l(h)}}function $(L){if(C=!1,G(L),!_)if(l(p)!==null)_=!0,K||(K=!0,ae());else{var P=l(h);P!==null&&Be($,P.startTime-L)}}var K=!1,j=-1,Q=5,F=-1;function se(){return D?!0:!(i.unstable_now()-F<Q)}function ie(){if(D=!1,K){var L=i.unstable_now();F=L;var P=!0;try{e:{_=!1,C&&(C=!1,q(j),j=-1),b=!0;var ne=A;try{t:{for(G(L),v=l(p);v!==null&&!(v.expirationTime>L&&se());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,A=v.priorityLevel;var we=Se(v.expirationTime<=L);if(L=i.unstable_now(),typeof we=="function"){v.callback=we,G(L),P=!0;break t}v===l(p)&&u(p),G(L)}else u(p);v=l(p)}if(v!==null)P=!0;else{var T=l(h);T!==null&&Be($,T.startTime-L),P=!1}}break e}finally{v=null,A=ne,b=!1}P=void 0}}finally{P?ae():K=!1}}}var ae;if(typeof Y=="function")ae=function(){Y(ie)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ke=Ie.port2;Ie.port1.onmessage=ie,ae=function(){ke.postMessage(null)}}else ae=function(){z(ie,0)};function Be(L,P){j=z(function(){L(i.unstable_now())},P)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(L){switch(A){case 1:case 2:case 3:var P=3;break;default:P=A}var ne=A;A=P;try{return L()}finally{A=ne}},i.unstable_requestPaint=function(){D=!0},i.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=A;A=L;try{return P()}finally{A=ne}},i.unstable_scheduleCallback=function(L,P,ne){var Se=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Se+ne:Se):ne=Se,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ne+we,L={id:S++,callback:P,priorityLevel:L,startTime:ne,expirationTime:we,sortIndex:-1},ne>Se?(L.sortIndex=ne,s(h,L),l(p)===null&&L===l(h)&&(C?(q(j),j=-1):C=!0,Be($,ne-Se))):(L.sortIndex=we,s(p,L),_||b||(_=!0,K||(K=!0,ae()))),L},i.unstable_shouldYield=se,i.unstable_wrapCallback=function(L){var P=A;return function(){var ne=A;A=P;try{return L.apply(this,arguments)}finally{A=ne}}}})(Cu)),Cu}var fm;function lv(){return fm||(fm=1,Ru.exports=sv()),Ru.exports}var xu={exports:{}},at={};var dm;function rv(){if(dm)return at;dm=1;var i=Ao();function s(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:h,implementation:S}}var m=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(p,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return d(p,h,null,S)},at.flushSync=function(p){var h=m.T,S=u.p;try{if(m.T=null,u.p=2,p)return p()}finally{m.T=h,u.p=S,u.d.f()}},at.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},at.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},at.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var S=h.as,v=y(S,h.crossOrigin),A=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:A,fetchPriority:b}):S==="script"&&u.d.X(p,{crossOrigin:v,integrity:A,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=y(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},at.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,v=y(S,h.crossOrigin);u.d.L(p,S,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(p,h){if(typeof p=="string")if(h){var S=y(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},at.requestFormReset=function(p){u.d.r(p)},at.unstable_batchedUpdates=function(p,h){return p(h)},at.useFormState=function(p,h,S){return m.H.useFormState(p,h,S)},at.useFormStatus=function(){return m.H.useHostTransitionStatus()},at.version="19.2.6",at}var hm;function $m(){if(hm)return xu.exports;hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),xu.exports=rv(),xu.exports}var mm;function uv(){if(mm)return ro;mm=1;var i=lv(),s=Ao(),l=$m();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var r=o.alternate;if(r===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===r.child){for(r=o.child;r;){if(r===n)return p(o),e;if(r===a)return p(o),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=r;else{for(var f=!1,g=o.child;g;){if(g===n){f=!0,n=o,a=r;break}if(g===a){f=!0,a=o,n=r;break}g=g.sibling}if(!f){for(g=r.child;g;){if(g===n){f=!0,n=r,a=o;break}if(g===a){f=!0,a=r,n=o;break}g=g.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,A=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case z:return"Profiler";case D:return"StrictMode";case $:return"Suspense";case K:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case Y:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Be=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Se=[],we=-1;function T(e){return{current:e}}function B(e){0>we||(e.current=Se[we],Se[we]=null,we--)}function I(e,t){we++,Se[we]=e.current,e.current=t}var X=T(null),W=T(null),ce=T(null),ge=T(null);function He(e,t){switch(I(ce,t),I(W,e),I(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Oh(t),e=Mh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(X),I(X,e)}function Ce(){B(X),B(W),B(ce)}function Kt(e){e.memoizedState!==null&&I(ge,e);var t=X.current,n=Mh(t,e.type);t!==n&&(I(W,e),I(X,n))}function Ft(e){W.current===e&&(B(X),B(W)),ge.current===e&&(B(ge),ao._currentValue=ne)}var vn,di;function Gt(e){if(vn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vn=t&&t[1]||"",di=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vn+e+di}var hi=!1;function wa(e,t){if(!e||hi)return"";hi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(k){var M=k}Reflect.construct(e,[],H)}else{try{H.call()}catch(k){M=k}e.call(H.prototype)}}else{try{throw Error()}catch(k){M=k}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(k){if(k&&M&&typeof k.stack=="string")return[k.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],g=r[1];if(f&&g){var w=f.split(`
`),O=g.split(`
`);for(o=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(a===w.length||o===O.length)for(a=w.length-1,o=O.length-1;1<=a&&0<=o&&w[a]!==O[o];)o--;for(;1<=a&&0<=o;a--,o--)if(w[a]!==O[o]){if(a!==1||o!==1)do if(a--,o--,0>o||w[a]!==O[o]){var N=`
`+w[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=o);break}}}finally{hi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Gt(n):""}function To(e,t){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==t&&t!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return wa(e.type,!1);case 11:return wa(e.type.render,!1);case 1:return wa(e.type,!0);case 31:return Gt("Activity");default:return""}}function Zt(e){try{var t="",n=null;do t+=To(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fn=Object.prototype.hasOwnProperty,Ut=i.unstable_scheduleCallback,mi=i.unstable_cancelCallback,_o=i.unstable_shouldYield,cl=i.unstable_requestPaint,nt=i.unstable_now,Oe=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,Yt=i.unstable_UserBlockingPriority,Aa=i.unstable_NormalPriority,Bp=i.unstable_LowPriority,rc=i.unstable_IdlePriority,Hp=i.log,jp=i.unstable_setDisableYieldValue,pi=null,gt=null;function Sn(e){if(typeof Hp=="function"&&jp(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(pi,e)}catch{}}var yt=Math.clz32?Math.clz32:Yp,qp=Math.log,Gp=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(qp(e)/Gp|0)|0}var Ro=256,Co=262144,xo=4194304;function Zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oo(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~r,a!==0?o=Zn(a):(f&=g,f!==0?o=Zn(f):n||(n=g&~e,n!==0&&(o=Zn(n))))):(g=a&~r,g!==0?o=Zn(g):f!==0?o=Zn(f):n||(n=a&~e,n!==0&&(o=Zn(n)))),o===0?0:t!==0&&t!==o&&(t&r)===0&&(r=o&-o,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:o}function gi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(){var e=xo;return xo<<=1,(xo&62914560)===0&&(xo=4194304),e}function fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pp(e,t,n,a,o,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,w=e.expirationTimes,O=e.hiddenUpdates;for(n=f&~n;0<n;){var N=31-yt(n),H=1<<N;g[N]=0,w[N]=-1;var M=O[N];if(M!==null)for(O[N]=null,N=0;N<M.length;N++){var k=M[N];k!==null&&(k.lane&=-536870913)}n&=~H}a!==0&&cc(e,a,0),r!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function cc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-yt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function dc(e,t){var n=t&-t;return n=(n&42)!==0?1:dl(n),(n&(e.suspendedLanes|t))!==0?0:n}function dl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:$h(e.type))}function mc(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var bn=Math.random().toString(36).slice(2),Je="__reactFiber$"+bn,rt="__reactProps$"+bn,Ea="__reactContainer$"+bn,ml="__reactEvents$"+bn,Vp="__reactListeners$"+bn,Ip="__reactHandles$"+bn,pc="__reactResources$"+bn,vi="__reactMarker$"+bn;function pl(e){delete e[Je],delete e[rt],delete e[ml],delete e[Vp],delete e[Ip]}function Ta(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ea]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bh(e);e!==null;){if(n=e[Je])return n;e=Bh(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[Je]||e[Ea]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Si(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ra(e){var t=e[pc];return t||(t=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[vi]=!0}var gc=new Set,yc={};function Jn(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(yc[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vc={},Sc={};function Kp(e){return Fn.call(Sc,e)?!0:Fn.call(vc,e)?!1:Xp.test(e)?Sc[e]=!0:(vc[e]=!0,!1)}function Mo(e,t,n){if(Kp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Do(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gl(e){if(!e._valueTracker){var t=bc(e)?"checked":"value";e._valueTracker=Fp(e,t,""+e[t])}}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zp=/[\n"\\]/g;function Rt(e){return e.replace(Zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yl(e,t,n,a,o,r,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?vl(e,f,_t(t)):n!=null?vl(e,f,_t(n)):a!=null&&e.removeAttribute("value"),o==null&&r!=null&&(e.defaultChecked=!!r),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_t(g):e.removeAttribute("name")}function Ac(e,t,n,a,o,r,f,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){gl(e);return}n=n!=null?""+_t(n):"",t=t!=null?""+_t(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),gl(e)}function vl(e,t,n){t==="number"&&ko(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ec(e,t,n){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_t(n):""}function Tc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Be(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=_t(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),gl(e)}function Oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Jp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Rc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&_c(e,o,a)}else for(var r in t)t.hasOwnProperty(r)&&_c(e,r,t[r])}function Sl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(e){return $p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var bl=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Da=null;function Cc(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[rt]||null;if(!o)throw Error(u(90));yl(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&wc(a)}break e;case"textarea":Ec(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var Al=!1;function xc(e,t,n){if(Al)return e(t,n);Al=!0;try{var a=e(t);return a}finally{if(Al=!1,(Ma!==null||Da!==null)&&(bs(),Ma&&(t=Ma,e=Da,Da=Ma=null,Cc(t),e)))for(t=0;t<e.length;t++)Cc(e[t])}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=!1;if($t)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){El=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{El=!1}var wn=null,Tl=null,Lo=null;function Oc(){if(Lo)return Lo;var e,t=Tl,n=t.length,a,o="value"in wn?wn.value:wn.textContent,r=o.length;for(e=0;e<n&&t[e]===o[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===o[r-a];a++);return Lo=o.slice(e,1<a?1-a:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function Mc(){return!1}function ut(e){function t(n,a,o,r,f){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Uo:Mc,this.isPropagationStopped=Mc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=ut(Wn),Ai=v({},Wn,{view:0,detail:0}),eg=ut(Ai),_l,Rl,Ei,Ho=v({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(_l=e.screenX-Ei.screenX,Rl=e.screenY-Ei.screenY):Rl=_l=0,Ei=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Dc=ut(Ho),tg=v({},Ho,{dataTransfer:0}),ng=ut(tg),ag=v({},Ai,{relatedTarget:0}),Cl=ut(ag),ig=v({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),og=ut(ig),sg=v({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=ut(sg),rg=v({},Wn,{data:0}),kc=ut(rg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function xl(){return dg}var hg=v({},Ai,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=ut(hg),pg=v({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=ut(pg),gg=v({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),yg=ut(gg),vg=v({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=ut(vg),bg=v({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=ut(bg),Ag=v({},Wn,{newState:0,oldState:0}),Eg=ut(Ag),Tg=[9,13,27,32],Ol=$t&&"CompositionEvent"in window,Ti=null;$t&&"documentMode"in document&&(Ti=document.documentMode);var _g=$t&&"TextEvent"in window&&!Ti,Lc=$t&&(!Ol||Ti&&8<Ti&&11>=Ti),Nc=" ",Uc=!1;function Bc(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function Rg(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Uc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Uc?null:e;default:return null}}function Cg(e,t){if(ka)return e==="compositionend"||!Ol&&Bc(e,t)?(e=Oc(),Lo=Tl=wn=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function qc(e,t,n,a){Ma?Da?Da.push(a):Da=[a]:Ma=a,t=Cs(t,"onChange"),0<t.length&&(n=new Bo("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var _i=null,Ri=null;function Og(e){Eh(e,0)}function jo(e){var t=Si(e);if(wc(t))return e}function Gc(e,t){if(e==="change")return t}var Yc=!1;if($t){var Ml;if($t){var Dl="oninput"in document;if(!Dl){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Dl=typeof Qc.oninput=="function"}Ml=Dl}else Ml=!1;Yc=Ml&&(!document.documentMode||9<document.documentMode)}function Pc(){_i&&(_i.detachEvent("onpropertychange",Vc),Ri=_i=null)}function Vc(e){if(e.propertyName==="value"&&jo(Ri)){var t=[];qc(t,Ri,e,wl(e)),xc(Og,t)}}function Mg(e,t,n){e==="focusin"?(Pc(),_i=t,Ri=n,_i.attachEvent("onpropertychange",Vc)):e==="focusout"&&Pc()}function Dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Ri)}function kg(e,t){if(e==="click")return jo(t)}function zg(e,t){if(e==="input"||e==="change")return jo(t)}function Lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Lg;function Ci(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Fn.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Ic(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ko(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ko(e.document)}return t}function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ng=$t&&"documentMode"in document&&11>=document.documentMode,za=null,zl=null,xi=null,Ll=!1;function Zc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||za==null||za!==ko(a)||(a=za,"selectionStart"in a&&kl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),xi&&Ci(xi,a)||(xi=a,a=Cs(zl,"onSelect"),0<a.length&&(t=new Bo("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=za)))}function $n(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var La={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Nl={},Jc={};$t&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ea(e){if(Nl[e])return Nl[e];if(!La[e])return e;var t=La[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return Nl[e]=t[n];return e}var Wc=ea("animationend"),$c=ea("animationiteration"),ef=ea("animationstart"),Ug=ea("transitionrun"),Bg=ea("transitionstart"),Hg=ea("transitioncancel"),tf=ea("transitionend"),nf=new Map,Ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ul.push("scrollEnd");function Bt(e,t){nf.set(e,t),Jn(t,[e])}var qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Na=0,Bl=0;function Go(){for(var e=Na,t=Bl=Na=0;t<e;){var n=Ct[t];Ct[t++]=null;var a=Ct[t];Ct[t++]=null;var o=Ct[t];Ct[t++]=null;var r=Ct[t];if(Ct[t++]=null,a!==null&&o!==null){var f=a.pending;f===null?o.next=o:(o.next=f.next,f.next=o),a.pending=o}r!==0&&af(n,o,r)}}function Yo(e,t,n,a){Ct[Na++]=e,Ct[Na++]=t,Ct[Na++]=n,Ct[Na++]=a,Bl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Hl(e,t,n,a){return Yo(e,t,n,a),Qo(e)}function ta(e,t){return Yo(e,null,null,t),Qo(e)}function af(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(o=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,o&&t!==null&&(o=31-yt(n),e=r.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),r):null}function Qo(e){if(50<Zi)throw Zi=0,Xr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ua={};function jg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,a){return new jg(e,t,n,a)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function of(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Po(e,t,n,a,o,r){var f=0;if(a=e,typeof e=="function")jl(e)&&(f=1);else if(typeof e=="string")f=Py(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=St(31,n,t,o),e.elementType=F,e.lanes=r,e;case C:return na(n.children,o,r,t);case D:f=8,o|=24;break;case z:return e=St(12,n,t,o|2),e.elementType=z,e.lanes=r,e;case $:return e=St(13,n,t,o),e.elementType=$,e.lanes=r,e;case K:return e=St(19,n,t,o),e.elementType=K,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:f=10;break e;case q:f=9;break e;case G:f=11;break e;case j:f=14;break e;case Q:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=St(f,n,t,o),t.elementType=e,t.type=a,t.lanes=r,t}function na(e,t,n,a){return e=St(7,e,a,t),e.lanes=n,e}function ql(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function sf(e){var t=St(18,null,null,0);return t.stateNode=e,t}function Gl(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lf=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var n=lf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zt(t)},lf.set(e,t),t)}return{value:e,source:t,stack:Zt(t)}}var Ba=[],Ha=0,Vo=null,Oi=0,Ot=[],Mt=0,An=null,Qt=1,Pt="";function tn(e,t){Ba[Ha++]=Oi,Ba[Ha++]=Vo,Vo=e,Oi=t}function rf(e,t,n){Ot[Mt++]=Qt,Ot[Mt++]=Pt,Ot[Mt++]=An,An=e;var a=Qt;e=Pt;var o=32-yt(a)-1;a&=~(1<<o),n+=1;var r=32-yt(t)+o;if(30<r){var f=o-o%5;r=(a&(1<<f)-1).toString(32),a>>=f,o-=f,Qt=1<<32-yt(t)+o|n<<o|a,Pt=r+e}else Qt=1<<r|n<<o|a,Pt=e}function Yl(e){e.return!==null&&(tn(e,1),rf(e,1,0))}function Ql(e){for(;e===Vo;)Vo=Ba[--Ha],Ba[Ha]=null,Oi=Ba[--Ha],Ba[Ha]=null;for(;e===An;)An=Ot[--Mt],Ot[Mt]=null,Pt=Ot[--Mt],Ot[Mt]=null,Qt=Ot[--Mt],Ot[Mt]=null}function uf(e,t){Ot[Mt++]=Qt,Ot[Mt++]=Pt,Ot[Mt++]=An,Qt=t.id,Pt=t.overflow,An=e}var We=null,Me=null,pe=!1,En=null,Dt=!1,Pl=Error(u(519));function Tn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mi(xt(t,e)),Pl}function cf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Je]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<Wi.length;n++)de(Wi[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Ac(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Tc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ch(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Tn(e,!0)}function ff(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:We=We.return}}function ja(e){if(e!==We)return!1;if(!pe)return ff(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ru(e.type,e.memoizedProps)),n=!n),n&&Me&&Tn(e),ff(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Uh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Uh(e)}else t===27?(t=Me,Hn(e.type)?(e=hu,hu=null,Me=e):Me=t):Me=We?zt(e.stateNode.nextSibling):null;return!0}function aa(){Me=We=null,pe=!1}function Vl(){var e=En;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),En=null),e}function Mi(e){En===null?En=[e]:En.push(e)}var Il=T(null),ia=null,nn=null;function _n(e,t,n){I(Il,t._currentValue),t._currentValue=n}function an(e){e._currentValue=Il.current,B(Il)}function Xl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Kl(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var r=o.dependencies;if(r!==null){var f=o.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=o;for(var w=0;w<t.length;w++)if(g.context===t[w]){r.lanes|=n,g=r.alternate,g!==null&&(g.lanes|=n),Xl(r.return,n,e),a||(f=null);break e}r=g.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Xl(f,n,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function qa(e,t,n,a){e=null;for(var o=t,r=!1;o!==null;){if(!r){if((o.flags&524288)!==0)r=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var g=o.type;vt(o.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(o===ge.current){if(f=o.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ao):e=[ao])}o=o.return}e!==null&&Kl(t,e,n,a),t.flags|=262144}function Io(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){ia=e,nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return df(ia,e)}function Xo(e,t){return ia===null&&oa(e),df(e,t)}function df(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},nn===null){if(e===null)throw Error(u(308));nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else nn=nn.next=t;return n}var qg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gg=i.unstable_scheduleCallback,Yg=i.unstable_NormalPriority,Ge={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fl(){return{controller:new qg,data:new Map,refCount:0}}function Di(e){e.refCount--,e.refCount===0&&Gg(Yg,function(){e.controller.abort()})}var ki=null,Zl=0,Ga=0,Ya=null;function Qg(e,t){if(ki===null){var n=ki=[];Zl=0,Ga=$r(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Zl++,t.then(hf,hf),t}function hf(){if(--Zl===0&&ki!==null){Ya!==null&&(Ya.status="fulfilled");var e=ki;ki=null,Ga=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var mf=L.S;L.S=function(e,t){Jd=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qg(e,t),mf!==null&&mf(e,t)};var sa=T(null);function Jl(){var e=sa.current;return e!==null?e:xe.pooledCache}function Ko(e,t){t===null?I(sa,sa.current):I(sa,t.pool)}function pf(){var e=Jl();return e===null?null:{parent:Ge._currentValue,pool:e}}var Qa=Error(u(460)),Wl=Error(u(474)),Fo=Error(u(542)),Zo={then:function(){}};function gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wt,Wt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e}throw ra=t,Qa}}function la(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ra=n,Qa):n}}var ra=null;function vf(){if(ra===null)throw Error(u(459));var e=ra;return ra=null,e}function Sf(e){if(e===Qa||e===Fo)throw Error(u(483))}var Pa=null,zi=0;function Jo(e){var t=zi;return zi+=1,Pa===null&&(Pa=[]),yf(Pa,e,t)}function Li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wo(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bf(e){function t(R,E){if(e){var x=R.deletions;x===null?(R.deletions=[E],R.flags|=16):x.push(E)}}function n(R,E){if(!e)return null;for(;E!==null;)t(R,E),E=E.sibling;return null}function a(R){for(var E=new Map;R!==null;)R.key!==null?E.set(R.key,R):E.set(R.index,R),R=R.sibling;return E}function o(R,E){return R=en(R,E),R.index=0,R.sibling=null,R}function r(R,E,x){return R.index=x,e?(x=R.alternate,x!==null?(x=x.index,x<E?(R.flags|=67108866,E):x):(R.flags|=67108866,E)):(R.flags|=1048576,E)}function f(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function g(R,E,x,U){return E===null||E.tag!==6?(E=ql(x,R.mode,U),E.return=R,E):(E=o(E,x),E.return=R,E)}function w(R,E,x,U){var te=x.type;return te===C?N(R,E,x.props.children,U,x.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Q&&la(te)===E.type)?(E=o(E,x.props),Li(E,x),E.return=R,E):(E=Po(x.type,x.key,x.props,null,R.mode,U),Li(E,x),E.return=R,E)}function O(R,E,x,U){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Gl(x,R.mode,U),E.return=R,E):(E=o(E,x.children||[]),E.return=R,E)}function N(R,E,x,U,te){return E===null||E.tag!==7?(E=na(x,R.mode,U,te),E.return=R,E):(E=o(E,x),E.return=R,E)}function H(R,E,x){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ql(""+E,R.mode,x),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case b:return x=Po(E.type,E.key,E.props,null,R.mode,x),Li(x,E),x.return=R,x;case _:return E=Gl(E,R.mode,x),E.return=R,E;case Q:return E=la(E),H(R,E,x)}if(Be(E)||ae(E))return E=na(E,R.mode,x,null),E.return=R,E;if(typeof E.then=="function")return H(R,Jo(E),x);if(E.$$typeof===Y)return H(R,Xo(R,E),x);Wo(R,E)}return null}function M(R,E,x,U){var te=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return te!==null?null:g(R,E,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case b:return x.key===te?w(R,E,x,U):null;case _:return x.key===te?O(R,E,x,U):null;case Q:return x=la(x),M(R,E,x,U)}if(Be(x)||ae(x))return te!==null?null:N(R,E,x,U,null);if(typeof x.then=="function")return M(R,E,Jo(x),U);if(x.$$typeof===Y)return M(R,E,Xo(R,x),U);Wo(R,x)}return null}function k(R,E,x,U,te){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return R=R.get(x)||null,g(E,R,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case b:return R=R.get(U.key===null?x:U.key)||null,w(E,R,U,te);case _:return R=R.get(U.key===null?x:U.key)||null,O(E,R,U,te);case Q:return U=la(U),k(R,E,x,U,te)}if(Be(U)||ae(U))return R=R.get(x)||null,N(E,R,U,te,null);if(typeof U.then=="function")return k(R,E,x,Jo(U),te);if(U.$$typeof===Y)return k(R,E,x,Xo(E,U),te);Wo(E,U)}return null}function Z(R,E,x,U){for(var te=null,ye=null,J=E,ue=E=0,me=null;J!==null&&ue<x.length;ue++){J.index>ue?(me=J,J=null):me=J.sibling;var ve=M(R,J,x[ue],U);if(ve===null){J===null&&(J=me);break}e&&J&&ve.alternate===null&&t(R,J),E=r(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve,J=me}if(ue===x.length)return n(R,J),pe&&tn(R,ue),te;if(J===null){for(;ue<x.length;ue++)J=H(R,x[ue],U),J!==null&&(E=r(J,E,ue),ye===null?te=J:ye.sibling=J,ye=J);return pe&&tn(R,ue),te}for(J=a(J);ue<x.length;ue++)me=k(J,R,ue,x[ue],U),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ue:me.key),E=r(me,E,ue),ye===null?te=me:ye.sibling=me,ye=me);return e&&J.forEach(function(Qn){return t(R,Qn)}),pe&&tn(R,ue),te}function oe(R,E,x,U){if(x==null)throw Error(u(151));for(var te=null,ye=null,J=E,ue=E=0,me=null,ve=x.next();J!==null&&!ve.done;ue++,ve=x.next()){J.index>ue?(me=J,J=null):me=J.sibling;var Qn=M(R,J,ve.value,U);if(Qn===null){J===null&&(J=me);break}e&&J&&Qn.alternate===null&&t(R,J),E=r(Qn,E,ue),ye===null?te=Qn:ye.sibling=Qn,ye=Qn,J=me}if(ve.done)return n(R,J),pe&&tn(R,ue),te;if(J===null){for(;!ve.done;ue++,ve=x.next())ve=H(R,ve.value,U),ve!==null&&(E=r(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve);return pe&&tn(R,ue),te}for(J=a(J);!ve.done;ue++,ve=x.next())ve=k(J,R,ue,ve.value,U),ve!==null&&(e&&ve.alternate!==null&&J.delete(ve.key===null?ue:ve.key),E=r(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve);return e&&J.forEach(function(tv){return t(R,tv)}),pe&&tn(R,ue),te}function Re(R,E,x,U){if(typeof x=="object"&&x!==null&&x.type===C&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case b:e:{for(var te=x.key;E!==null;){if(E.key===te){if(te=x.type,te===C){if(E.tag===7){n(R,E.sibling),U=o(E,x.props.children),U.return=R,R=U;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Q&&la(te)===E.type){n(R,E.sibling),U=o(E,x.props),Li(U,x),U.return=R,R=U;break e}n(R,E);break}else t(R,E);E=E.sibling}x.type===C?(U=na(x.props.children,R.mode,U,x.key),U.return=R,R=U):(U=Po(x.type,x.key,x.props,null,R.mode,U),Li(U,x),U.return=R,R=U)}return f(R);case _:e:{for(te=x.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(R,E.sibling),U=o(E,x.children||[]),U.return=R,R=U;break e}else{n(R,E);break}else t(R,E);E=E.sibling}U=Gl(x,R.mode,U),U.return=R,R=U}return f(R);case Q:return x=la(x),Re(R,E,x,U)}if(Be(x))return Z(R,E,x,U);if(ae(x)){if(te=ae(x),typeof te!="function")throw Error(u(150));return x=te.call(x),oe(R,E,x,U)}if(typeof x.then=="function")return Re(R,E,Jo(x),U);if(x.$$typeof===Y)return Re(R,E,Xo(R,x),U);Wo(R,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,E!==null&&E.tag===6?(n(R,E.sibling),U=o(E,x),U.return=R,R=U):(n(R,E),U=ql(x,R.mode,U),U.return=R,R=U),f(R)):n(R,E)}return function(R,E,x,U){try{zi=0;var te=Re(R,E,x,U);return Pa=null,te}catch(J){if(J===Qa||J===Fo)throw J;var ye=St(29,J,null,R.mode);return ye.lanes=U,ye.return=R,ye}}}var ua=bf(!0),wf=bf(!1),Rn=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function er(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Qo(e),af(e,null,n),t}return Yo(e,a,t,n),Qo(e)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fc(e,n)}}function tr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?o=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?o=r=t:r=r.next=t}else o=r=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var nr=!1;function Ui(){if(nr){var e=Ya;if(e!==null)throw e}}function Bi(e,t,n,a){nr=!1;var o=e.updateQueue;Rn=!1;var r=o.firstBaseUpdate,f=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var w=g,O=w.next;w.next=null,f===null?r=O:f.next=O,f=w;var N=e.alternate;N!==null&&(N=N.updateQueue,g=N.lastBaseUpdate,g!==f&&(g===null?N.firstBaseUpdate=O:g.next=O,N.lastBaseUpdate=w))}if(r!==null){var H=o.baseState;f=0,N=O=w=null,g=r;do{var M=g.lane&-536870913,k=M!==g.lane;if(k?(he&M)===M:(a&M)===M){M!==0&&M===Ga&&(nr=!0),N!==null&&(N=N.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Z=e,oe=g;M=t;var Re=n;switch(oe.tag){case 1:if(Z=oe.payload,typeof Z=="function"){H=Z.call(Re,H,M);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=oe.payload,M=typeof Z=="function"?Z.call(Re,H,M):Z,M==null)break e;H=v({},H,M);break e;case 2:Rn=!0}}M=g.callback,M!==null&&(e.flags|=64,k&&(e.flags|=8192),k=o.callbacks,k===null?o.callbacks=[M]:k.push(M))}else k={lane:M,tag:g.tag,payload:g.payload,callback:g.callback,next:null},N===null?(O=N=k,w=H):N=N.next=k,f|=M;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;k=g,g=k.next,k.next=null,o.lastBaseUpdate=k,o.shared.pending=null}}while(!0);N===null&&(w=H),o.baseState=w,o.firstBaseUpdate=O,o.lastBaseUpdate=N,r===null&&(o.shared.lanes=0),zn|=f,e.lanes=f,e.memoizedState=H}}function Af(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ef(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Af(n[e],t)}var Va=T(null),$o=T(0);function Tf(e,t){e=hn,I($o,e),I(Va,t),hn=e|t.baseLanes}function ar(){I($o,hn),I(Va,Va.current)}function ir(){hn=$o.current,B(Va),B($o)}var bt=T(null),kt=null;function On(e){var t=e.alternate;I(je,je.current&1),I(bt,e),kt===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(kt=e)}function or(e){I(je,je.current),I(bt,e),kt===null&&(kt=e)}function _f(e){e.tag===22?(I(je,je.current),I(bt,e),kt===null&&(kt=e)):Mn()}function Mn(){I(je,je.current),I(bt,bt.current)}function wt(e){B(bt),kt===e&&(kt=null),B(je)}var je=T(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fu(n)||du(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var on=0,re=null,Te=null,Ye=null,ts=!1,Ia=!1,ca=!1,ns=0,Hi=0,Xa=null,Vg=0;function Ne(){throw Error(u(321))}function sr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function lr(e,t,n,a,o,r){return on=r,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?rd:Ar,ca=!1,r=n(a,o),ca=!1,Ia&&(r=Cf(t,n,a,o)),Rf(e),r}function Rf(e){L.H=Gi;var t=Te!==null&&Te.next!==null;if(on=0,Ye=Te=re=null,ts=!1,Hi=0,Xa=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Io(e)&&(Qe=!0))}function Cf(e,t,n,a){re=e;var o=0;do{if(Ia&&(Xa=null),Hi=0,Ia=!1,25<=o)throw Error(u(301));if(o+=1,Ye=Te=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=ud,r=t(n,a)}while(Ia);return r}function Ig(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?ji(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(re.flags|=1024),t}function rr(){var e=ns!==0;return ns=0,e}function ur(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cr(e){if(ts){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ts=!1}on=0,Ye=Te=re=null,Ia=!1,Hi=ns=0,Xa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function qe(){if(Te===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ye===null?re.memoizedState:Ye.next;if(t!==null)Ye=t,Te=e;else{if(e===null)throw re.alternate===null?Error(u(467)):Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ji(e){var t=Hi;return Hi+=1,Xa===null&&(Xa=[]),e=yf(Xa,e,t),t=re,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?rd:Ar),e}function is(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ji(e);if(e.$$typeof===Y)return $e(e)}throw Error(u(438,String(e)))}function fr(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=as(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=se;return t.index++,n}function sn(e,t){return typeof t=="function"?t(e):t}function os(e){var t=qe();return dr(t,Te,e)}function dr(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,r=a.pending;if(r!==null){if(o!==null){var f=o.next;o.next=r.next,r.next=f}t.baseQueue=o=r,a.pending=null}if(r=e.baseState,o===null)e.memoizedState=r;else{t=o.next;var g=f=null,w=null,O=t,N=!1;do{var H=O.lane&-536870913;if(H!==O.lane?(he&H)===H:(on&H)===H){var M=O.revertLane;if(M===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),H===Ga&&(N=!0);else if((on&M)===M){O=O.next,M===Ga&&(N=!0);continue}else H={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(g=w=H,f=r):w=w.next=H,re.lanes|=M,zn|=M;H=O.action,ca&&n(r,H),r=O.hasEagerState?O.eagerState:n(r,H)}else M={lane:H,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(g=w=M,f=r):w=w.next=M,re.lanes|=H,zn|=H;O=O.next}while(O!==null&&O!==t);if(w===null?f=r:w.next=g,!vt(r,e.memoizedState)&&(Qe=!0,N&&(n=Ya,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=w,a.lastRenderedState=r}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hr(e){var t=qe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,r=t.memoizedState;if(o!==null){n.pending=null;var f=o=o.next;do r=e(r,f.action),f=f.next;while(f!==o);vt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function xf(e,t,n){var a=re,o=qe(),r=pe;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!vt((Te||o).memoizedState,n);if(f&&(o.memoizedState=n,Qe=!0),o=o.queue,gr(Df.bind(null,a,o,e),[e]),o.getSnapshot!==t||f||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ka(9,{destroy:void 0},Mf.bind(null,a,o,n,t),null),xe===null)throw Error(u(349));r||(on&127)!==0||Of(a,t,n)}return n}function Of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=as(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mf(e,t,n,a){t.value=n,t.getSnapshot=a,kf(t)&&zf(e)}function Df(e,t,n){return n(function(){kf(t)&&zf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function zf(e){var t=ta(e,2);t!==null&&mt(t,e,2)}function mr(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ca){Sn(!0);try{n()}finally{Sn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:e},t}function Lf(e,t,n,a){return e.baseState=n,dr(e,Te,typeof a=="function"?a:sn)}function Xg(e,t,n,a,o){if(rs(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};L.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Nf(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Nf(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var r=L.T,f={};L.T=f;try{var g=n(o,a),w=L.S;w!==null&&w(f,g),Uf(e,t,g)}catch(O){pr(e,t,O)}finally{r!==null&&f.types!==null&&(r.types=f.types),L.T=r}}else try{r=n(o,a),Uf(e,t,r)}catch(O){pr(e,t,O)}}function Uf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Bf(e,t,a)},function(a){return pr(e,t,a)}):Bf(e,t,n)}function Bf(e,t,n){t.status="fulfilled",t.value=n,Hf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Nf(e,n)))}function pr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Hf(t),t=t.next;while(t!==a)}e.action=null}function Hf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jf(e,t){return t}function qf(e,t){if(pe){var n=xe.formState;if(n!==null){e:{var a=re;if(pe){if(Me){t:{for(var o=Me,r=Dt;o.nodeType!==8;){if(!r){o=null;break t}if(o=zt(o.nextSibling),o===null){o=null;break t}}r=o.data,o=r==="F!"||r==="F"?o:null}if(o){Me=zt(o.nextSibling),a=o.data==="F!";break e}}Tn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jf,lastRenderedState:t},n.queue=a,n=od.bind(null,re,a),a.dispatch=n,a=mr(!1),r=wr.bind(null,re,!1,a.queue),a=st(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Xg.bind(null,re,o,r,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function Gf(e){var t=qe();return Yf(t,Te,e)}function Yf(e,t,n){if(t=dr(e,t,jf)[0],e=os(sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ji(t)}catch(f){throw f===Qa?Fo:f}else a=t;t=qe();var o=t.queue,r=o.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Ka(9,{destroy:void 0},Kg.bind(null,o,n),null)),[a,r,e]}function Kg(e,t){e.action=t}function Qf(e){var t=qe(),n=Te;if(n!==null)return Yf(t,n,e);qe(),t=t.memoizedState,n=qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=re.updateQueue,t===null&&(t=as(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pf(){return qe().memoizedState}function ss(e,t,n,a){var o=st();re.flags|=e,o.memoizedState=Ka(1|t,{destroy:void 0},n,a===void 0?null:a)}function ls(e,t,n,a){var o=qe();a=a===void 0?null:a;var r=o.memoizedState.inst;Te!==null&&a!==null&&sr(a,Te.memoizedState.deps)?o.memoizedState=Ka(t,r,n,a):(re.flags|=e,o.memoizedState=Ka(1|t,r,n,a))}function Vf(e,t){ss(8390656,8,e,t)}function gr(e,t){ls(2048,8,e,t)}function Fg(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=as(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function If(e){var t=qe().memoizedState;return Fg({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Xf(e,t){return ls(4,2,e,t)}function Kf(e,t){return ls(4,4,e,t)}function Ff(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zf(e,t,n){n=n!=null?n.concat([e]):null,ls(4,4,Ff.bind(null,t,e),n)}function yr(){}function Jf(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&sr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Wf(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&sr(t,a[1]))return a[0];if(a=e(),ca){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[a,t],a}function vr(e,t,n){return n===void 0||(on&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$d(),re.lanes|=e,zn|=e,n)}function $f(e,t,n,a){return vt(n,t)?n:Va.current!==null?(e=vr(e,n,a),vt(e,t)||(Qe=!0),e):(on&42)===0||(on&1073741824)!==0&&(he&261930)===0?(Qe=!0,e.memoizedState=n):(e=$d(),re.lanes|=e,zn|=e,t)}function ed(e,t,n,a,o){var r=P.p;P.p=r!==0&&8>r?r:8;var f=L.T,g={};L.T=g,wr(e,!1,t,n);try{var w=o(),O=L.S;if(O!==null&&O(g,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var N=Pg(w,a);qi(e,t,N,Tt(e))}else qi(e,t,a,Tt(e))}catch(H){qi(e,t,{then:function(){},status:"rejected",reason:H},Tt())}finally{P.p=r,f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}function Zg(){}function Sr(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=td(e).queue;ed(e,o,t,ne,n===null?Zg:function(){return nd(e),n(a)})}function td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=td(e);t.next===null&&(t=e.alternate.memoizedState),qi(e,t.next.queue,{},Tt())}function br(){return $e(ao)}function ad(){return qe().memoizedState}function id(){return qe().memoizedState}function Jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=Cn(n);var a=xn(t,e,n);a!==null&&(mt(a,t,n),Ni(a,t,n)),t={cache:Fl()},e.payload=t;return}t=t.return}}function Wg(e,t,n){var a=Tt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rs(e)?sd(t,n):(n=Hl(e,t,n,a),n!==null&&(mt(n,e,a),ld(n,t,a)))}function od(e,t,n){var a=Tt();qi(e,t,n,a)}function qi(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rs(e))sd(t,o);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,g=r(f,n);if(o.hasEagerState=!0,o.eagerState=g,vt(g,f))return Yo(e,t,o,0),xe===null&&Go(),!1}catch{}if(n=Hl(e,t,o,a),n!==null)return mt(n,e,a),ld(n,t,a),!0}return!1}function wr(e,t,n,a){if(a={lane:2,revertLane:$r(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rs(e)){if(t)throw Error(u(479))}else t=Hl(e,n,a,2),t!==null&&mt(t,e,2)}function rs(e){var t=e.alternate;return e===re||t!==null&&t===re}function sd(e,t){Ia=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ld(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fc(e,n)}}var Gi={readContext:$e,use:is,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Gi.useEffectEvent=Ne;var rd={readContext:$e,use:is,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Vf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ss(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ca){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var o=n(t);if(ca){Sn(!0);try{n(t)}finally{Sn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Wg.bind(null,re,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=mr(e);var t=e.queue,n=od.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yr,useDeferredValue:function(e,t){var n=st();return vr(n,e,t)},useTransition:function(){var e=mr(!1);return e=ed.bind(null,re,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=re,o=st();if(pe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),xe===null)throw Error(u(349));(he&127)!==0||Of(a,t,n)}o.memoizedState=n;var r={value:n,getSnapshot:t};return o.queue=r,Vf(Df.bind(null,a,r,e),[e]),a.flags|=2048,Ka(9,{destroy:void 0},Mf.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=xe.identifierPrefix;if(pe){var n=Pt,a=Qt;n=(a&~(1<<32-yt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:br,useFormState:qf,useActionState:qf,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wr.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:fr,useCacheRefresh:function(){return st().memoizedState=Jg.bind(null,re)},useEffectEvent:function(e){var t=st(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Ar={readContext:$e,use:is,useCallback:Jf,useContext:$e,useEffect:gr,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:Wf,useReducer:os,useRef:Pf,useState:function(){return os(sn)},useDebugValue:yr,useDeferredValue:function(e,t){var n=qe();return $f(n,Te.memoizedState,e,t)},useTransition:function(){var e=os(sn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:xf,useId:ad,useHostTransitionStatus:br,useFormState:Gf,useActionState:Gf,useOptimistic:function(e,t){var n=qe();return Lf(n,Te,e,t)},useMemoCache:fr,useCacheRefresh:id};Ar.useEffectEvent=If;var ud={readContext:$e,use:is,useCallback:Jf,useContext:$e,useEffect:gr,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:Wf,useReducer:hr,useRef:Pf,useState:function(){return hr(sn)},useDebugValue:yr,useDeferredValue:function(e,t){var n=qe();return Te===null?vr(n,e,t):$f(n,Te.memoizedState,e,t)},useTransition:function(){var e=hr(sn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:ji(e),t]},useSyncExternalStore:xf,useId:ad,useHostTransitionStatus:br,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=qe();return Te!==null?Lf(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fr,useCacheRefresh:id};ud.useEffectEvent=If;function Er(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),o=Cn(a);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,a),t!==null&&(mt(t,e,a),Ni(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),o=Cn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,a),t!==null&&(mt(t,e,a),Ni(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=Cn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(mt(t,e,n),Ni(t,e,n))}};function cd(e,t,n,a,o,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Ci(n,a)||!Ci(o,r):!0}function fd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Tr.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function dd(e){qo(e)}function hd(e){console.error(e)}function md(e){qo(e)}function us(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function pd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function _r(e,t,n){return n=Cn(n),n.tag=3,n.payload={element:null},n.callback=function(){us(e,t)},n}function gd(e){return e=Cn(e),e.tag=3,e}function yd(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var r=a.value;e.payload=function(){return o(r)},e.callback=function(){pd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){pd(t,n,a),typeof o!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function $g(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&qa(t,n,o,!0),n=bt.current,n!==null){switch(n.tag){case 31:case 13:return kt===null?ws():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===Zo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Zr(e,a,o)),!1;case 22:return n.flags|=65536,a===Zo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Zr(e,a,o)),!1}throw Error(u(435,n.tag))}return Zr(e,a,o),ws(),!1}if(pe)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Pl&&(e=Error(u(422),{cause:a}),Mi(xt(e,n)))):(a!==Pl&&(t=Error(u(423),{cause:a}),Mi(xt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=xt(a,n),o=_r(e.stateNode,a,o),tr(e,o),Ue!==4&&(Ue=2)),!1;var r=Error(u(520),{cause:a});if(r=xt(r,n),Fi===null?Fi=[r]:Fi.push(r),Ue!==4&&(Ue=2),t===null)return!0;a=xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=_r(n.stateNode,a,e),tr(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))))return n.flags|=65536,o&=-o,n.lanes|=o,o=gd(o),yd(o,e,n,a),tr(n,o),!1}n=n.return}while(n!==null);return!1}var Rr=Error(u(461)),Qe=!1;function et(e,t,n,a){t.child=e===null?wf(t,null,n,a):ua(t,e.child,n,a)}function vd(e,t,n,a,o){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var g in a)g!=="ref"&&(f[g]=a[g])}else f=a;return oa(t),a=lr(e,t,n,f,r,o),g=rr(),e!==null&&!Qe?(ur(e,t,o),ln(e,t,o)):(pe&&g&&Yl(t),t.flags|=1,et(e,t,a,o),t.child)}function Sd(e,t,n,a,o){if(e===null){var r=n.type;return typeof r=="function"&&!jl(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,bd(e,t,r,a,o)):(e=Po(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Lr(e,o)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ci,n(f,a)&&e.ref===t.ref)return ln(e,t,o)}return t.flags|=1,e=en(r,a),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,a,o){if(e!==null){var r=e.memoizedProps;if(Ci(r,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=r,Lr(e,o))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ln(e,t,o)}return Cr(e,t,n,a,o)}function wd(e,t,n,a){var o=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~r}else a=0,t.child=null;return Ad(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ko(t,r!==null?r.cachePool:null),r!==null?Tf(t,r):ar(),_f(t);else return a=t.lanes=536870912,Ad(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(Ko(t,r.cachePool),Tf(t,r),Mn(),t.memoizedState=null):(e!==null&&Ko(t,null),ar(),Mn());return et(e,t,o,n),t.child}function Yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ad(e,t,n,a,o){var r=Jl();return r=r===null?null:{parent:Ge._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Ko(t,null),ar(),_f(t),e!==null&&qa(e,t,a,!0),t.childLanes=o,null}function cs(e,t){return t=ds({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ed(e,t,n){return ua(t,e.child,null,n),e=cs(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function ey(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(a.mode==="hidden")return e=cs(t,a),t.lanes=536870912,Yi(null,e);if(or(t),(e=Me)?(e=Nh(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Qt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=sf(e),n.return=t,t.child=n,We=t,Me=null)):e=null,e===null)throw Tn(t);return t.lanes=536870912,null}return cs(t,a)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(or(t),o)if(t.flags&256)t.flags&=-257,t=Ed(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||qa(e,t,n,!1),o=(n&e.childLanes)!==0,Qe||o){if(a=xe,a!==null&&(f=dc(a,n),f!==0&&f!==r.retryLane))throw r.retryLane=f,ta(e,f),mt(a,e,f),Rr;ws(),t=Ed(e,t,n)}else e=r.treeContext,Me=zt(f.nextSibling),We=t,pe=!0,En=null,Dt=!1,e!==null&&uf(t,e),t=cs(t,a),t.flags|=4096;return t}return e=en(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cr(e,t,n,a,o){return oa(t),n=lr(e,t,n,a,void 0,o),a=rr(),e!==null&&!Qe?(ur(e,t,o),ln(e,t,o)):(pe&&a&&Yl(t),t.flags|=1,et(e,t,n,o),t.child)}function Td(e,t,n,a,o,r){return oa(t),t.updateQueue=null,n=Cf(t,a,n,o),Rf(e),a=rr(),e!==null&&!Qe?(ur(e,t,r),ln(e,t,r)):(pe&&a&&Yl(t),t.flags|=1,et(e,t,n,r),t.child)}function _d(e,t,n,a,o){if(oa(t),t.stateNode===null){var r=Ua,f=n.contextType;typeof f=="object"&&f!==null&&(r=$e(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tr,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},$l(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?$e(f):Ua,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Er(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Tr.enqueueReplaceState(r,r.state,null),Bi(t,a,r,o),Ui(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var g=t.memoizedProps,w=fa(n,g);r.props=w;var O=r.context,N=n.contextType;f=Ua,typeof N=="object"&&N!==null&&(f=$e(N));var H=n.getDerivedStateFromProps;N=typeof H=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||O!==f)&&fd(t,r,a,f),Rn=!1;var M=t.memoizedState;r.state=M,Bi(t,a,r,o),Ui(),O=t.memoizedState,g||M!==O||Rn?(typeof H=="function"&&(Er(t,n,H,a),O=t.memoizedState),(w=Rn||cd(t,n,w,a,M,O,f))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),r.props=a,r.state=O,r.context=f,a=w):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,er(e,t),f=t.memoizedProps,N=fa(n,f),r.props=N,H=t.pendingProps,M=r.context,O=n.contextType,w=Ua,typeof O=="object"&&O!==null&&(w=$e(O)),g=n.getDerivedStateFromProps,(O=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==H||M!==w)&&fd(t,r,a,w),Rn=!1,M=t.memoizedState,r.state=M,Bi(t,a,r,o),Ui();var k=t.memoizedState;f!==H||M!==k||Rn||e!==null&&e.dependencies!==null&&Io(e.dependencies)?(typeof g=="function"&&(Er(t,n,g,a),k=t.memoizedState),(N=Rn||cd(t,n,N,a,M,k,w)||e!==null&&e.dependencies!==null&&Io(e.dependencies))?(O||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,k,w),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,k,w)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),r.props=a,r.state=k,r.context=w,a=N):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,fs(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ua(t,e.child,null,o),t.child=ua(t,null,n,o)):et(e,t,n,o),t.memoizedState=r.state,e=t.child):e=ln(e,t,o),e}function Rd(e,t,n,a){return aa(),t.flags|=256,et(e,t,n,a),t.child}var xr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Or(e){return{baseLanes:e,cachePool:pf()}}function Mr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Cd(e,t,n){var a=t.pendingProps,o=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(o?On(t):Mn(),(e=Me)?(e=Nh(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Qt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=sf(e),n.return=t,t.child=n,We=t,Me=null)):e=null,e===null)throw Tn(t);return du(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,o?(Mn(),o=t.mode,g=ds({mode:"hidden",children:g},o),a=na(a,o,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=Or(n),a.childLanes=Mr(e,f,n),t.memoizedState=xr,Yi(null,a)):(On(t),Dr(t,g))}var w=e.memoizedState;if(w!==null&&(g=w.dehydrated,g!==null)){if(r)t.flags&256?(On(t),t.flags&=-257,t=kr(e,t,n)):t.memoizedState!==null?(Mn(),t.child=e.child,t.flags|=128,t=null):(Mn(),g=a.fallback,o=t.mode,a=ds({mode:"visible",children:a.children},o),g=na(g,o,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,ua(t,e.child,null,n),a=t.child,a.memoizedState=Or(n),a.childLanes=Mr(e,f,n),t.memoizedState=xr,t=Yi(null,a));else if(On(t),du(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var O=f.dgst;f=O,a=Error(u(419)),a.stack="",a.digest=f,Mi({value:a,source:null,stack:null}),t=kr(e,t,n)}else if(Qe||qa(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=xe,f!==null&&(a=dc(f,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,ta(e,a),mt(f,e,a),Rr;fu(g)||ws(),t=kr(e,t,n)}else fu(g)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Me=zt(g.nextSibling),We=t,pe=!0,En=null,Dt=!1,e!==null&&uf(t,e),t=Dr(t,a.children),t.flags|=4096);return t}return o?(Mn(),g=a.fallback,o=t.mode,w=e.child,O=w.sibling,a=en(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,O!==null?g=en(O,g):(g=na(g,o,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,Yi(null,a),a=t.child,g=e.child.memoizedState,g===null?g=Or(n):(o=g.cachePool,o!==null?(w=Ge._currentValue,o=o.parent!==w?{parent:w,pool:w}:o):o=pf(),g={baseLanes:g.baseLanes|n,cachePool:o}),a.memoizedState=g,a.childLanes=Mr(e,f,n),t.memoizedState=xr,Yi(e.child,a)):(On(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Dr(e,t){return t=ds({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ds(e,t){return e=St(22,e,null,t),e.lanes=0,e}function kr(e,t,n){return ua(t,e.child,null,n),e=Dr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Xl(e.return,t,n)}function zr(e,t,n,a,o,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:r}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=o,f.treeForkCount=r)}function Od(e,t,n){var a=t.pendingProps,o=a.revealOrder,r=a.tail;a=a.children;var f=je.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,I(je,f),et(e,t,a,n),a=pe?Oi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,n,t);else if(e.tag===19)xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zr(t,!1,o,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&es(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zr(t,!0,n,null,r,a);break;case"together":zr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Io(e)))}function ty(e,t,n){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),_n(t,Ge,e.memoizedState.cache),aa();break;case 27:case 5:Kt(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:_n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,or(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Cd(e,t,n):(On(t),e=ln(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(qa(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Od(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(je,je.current),a)break;return null;case 22:return t.lanes=0,wd(e,t,n,t.pendingProps);case 24:_n(t,Ge,e.memoizedState.cache)}return ln(e,t,n)}function Md(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Lr(e,n)&&(t.flags&128)===0)return Qe=!1,ty(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,pe&&(t.flags&1048576)!==0&&rf(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=la(t.elementType),t.type=e,typeof e=="function")jl(e)?(a=fa(e,a),t.tag=1,t=_d(null,t,e,a,n)):(t.tag=0,t=Cr(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===G){t.tag=11,t=vd(null,t,e,a,n);break e}else if(o===j){t.tag=14,t=Sd(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(u(306,t,""))}}return t;case 0:return Cr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=fa(a,t.pendingProps),_d(e,t,a,o,n);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;o=r.element,er(e,t),Bi(t,a,null,n);var f=t.memoizedState;if(a=f.cache,_n(t,Ge,a),a!==r.cache&&Kl(t,[Ge],n,!0),Ui(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Rd(e,t,a,n);break e}else if(a!==o){o=xt(Error(u(424)),t),Mi(o),t=Rd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=zt(e.firstChild),We=t,pe=!0,En=null,Dt=!0,n=wf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(aa(),a===o){t=ln(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return fs(e,t),e===null?(n=Gh(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,a=xs(ce.current).createElement(n),a[Je]=t,a[rt]=e,tt(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=Gh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kt(t),e===null&&pe&&(a=t.stateNode=Hh(t.type,t.pendingProps,ce.current),We=t,Dt=!0,o=Me,Hn(t.type)?(hu=o,Me=zt(a.firstChild)):Me=o),et(e,t,t.pendingProps.children,n),fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((o=a=Me)&&(a=Dy(a,t.type,t.pendingProps,Dt),a!==null?(t.stateNode=a,We=t,Me=zt(a.firstChild),Dt=!1,o=!0):o=!1),o||Tn(t)),Kt(t),o=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,ru(o,r)?a=null:f!==null&&ru(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=lr(e,t,Ig,null,null,n),ao._currentValue=o),fs(e,t),et(e,t,a,n),t.child;case 6:return e===null&&pe&&((e=n=Me)&&(n=ky(n,t.pendingProps,Dt),n!==null?(t.stateNode=n,We=t,Me=null,e=!0):e=!1),e||Tn(t)),null;case 13:return Cd(e,t,n);case 4:return He(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ua(t,null,a,n):et(e,t,a,n),t.child;case 11:return vd(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,_n(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,oa(t),o=$e(o),a=a(o),t.flags|=1,et(e,t,a,n),t.child;case 14:return Sd(e,t,t.type,t.pendingProps,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 19:return Od(e,t,n);case 31:return ey(e,t,n);case 22:return wd(e,t,n,t.pendingProps);case 24:return oa(t),a=$e(Ge),e===null?(o=Jl(),o===null&&(o=xe,r=Fl(),o.pooledCache=r,r.refCount++,r!==null&&(o.pooledCacheLanes|=n),o=r),t.memoizedState={parent:a,cache:o},$l(t),_n(t,Ge,o)):((e.lanes&n)!==0&&(er(e,t),Bi(t,null,null,n),Ui()),o=e.memoizedState,r=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),_n(t,Ge,a)):(a=r.cache,_n(t,Ge,a),a!==o.cache&&Kl(t,[Ge],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function rn(e){e.flags|=4}function Nr(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(ah())e.flags|=8192;else throw ra=Zo,Wl}else e.flags&=-16777217}function Dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ih(t))if(ah())e.flags|=8192;else throw ra=Zo,Wl}function hs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uc():536870912,e.lanes|=t,Wa|=t)}function Qi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ny(e,t,n){var a=t.pendingProps;switch(Ql(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),an(Ge),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ja(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vl())),De(t),null;case 26:var o=t.type,r=t.memoizedState;return e===null?(rn(t),r!==null?(De(t),Dd(t,r)):(De(t),Nr(t,o,null,a,n))):r?r!==e.memoizedState?(rn(t),De(t),Dd(t,r)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&rn(t),De(t),Nr(t,o,e,a,n)),null;case 27:if(Ft(t),n=ce.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}e=X.current,ja(t)?cf(t):(e=Hh(o,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if(Ft(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}if(r=X.current,ja(t))cf(t);else{var f=xs(ce.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(o,{is:a.is}):f.createElement(o)}}r[Je]=t,r[rt]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=r;e:switch(tt(r,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&rn(t)}}return De(t),Nr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ce.current,ja(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=We,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ch(e.nodeValue,n)),e||Tn(t,!0)}else e=xs(e).createTextNode(a),e[Je]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ja(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Je]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Vl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ja(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Je]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),o=!1}else o=Vl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),hs(t,t.updateQueue),De(t),null);case 4:return Ce(),e===null&&au(t.stateNode.containerInfo),De(t),null;case 10:return an(t.type),De(t),null;case 19:if(B(je),a=t.memoizedState,a===null)return De(t),null;if(o=(t.flags&128)!==0,r=a.rendering,r===null)if(o)Qi(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=es(e),r!==null){for(t.flags|=128,Qi(a,!1),e=r.updateQueue,t.updateQueue=e,hs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)of(n,e),n=n.sibling;return I(je,je.current&1|2),pe&&tn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>vs&&(t.flags|=128,o=!0,Qi(a,!1),t.lanes=4194304)}else{if(!o)if(e=es(r),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,hs(t,e),Qi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!pe)return De(t),null}else 2*nt()-a.renderingStartTime>vs&&n!==536870912&&(t.flags|=128,o=!0,Qi(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,n=je.current,I(je,o?n&1|2:n&1),pe&&tn(t,a.treeForkCount),e):(De(t),null);case 22:case 23:return wt(t),ir(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&hs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&B(sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),an(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ay(e,t){switch(Ql(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(Ge),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(u(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(je),null;case 4:return Ce(),null;case 10:return an(t.type),null;case 22:case 23:return wt(t),ir(),e!==null&&B(sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return an(Ge),null;case 25:return null;default:return null}}function kd(e,t){switch(Ql(t),t.tag){case 3:an(Ge),Ce();break;case 26:case 27:case 5:Ft(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:B(je);break;case 10:an(t.type);break;case 22:case 23:wt(t),ir(),e!==null&&B(sa);break;case 24:an(Ge)}}function Pi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==o)}}catch(g){Ee(t,t.return,g)}}function Dn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var r=o.next;a=r;do{if((a.tag&e)===e){var f=a.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,o=t;var w=n,O=g;try{O()}catch(N){Ee(o,w,N)}}}a=a.next}while(a!==r)}}catch(N){Ee(t,t.return,N)}}function zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ef(t,n)}catch(a){Ee(e,e.return,a)}}}function Ld(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function Vi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Ee(e,t,o)}}function Vt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Ee(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ee(e,t,o)}else n.current=null}function Nd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Ee(e,e.return,o)}}function Ur(e,t,n){try{var a=e.stateNode;_y(a,e.type,n,t),a[rt]=t}catch(o){Ee(e,e.return,o)}}function Ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hn(e.type)||e.tag===4}function Br(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wt));else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hr(e,t,n),e=e.sibling;e!==null;)Hr(e,t,n),e=e.sibling}function ms(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function Bd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);tt(t,a,n),t[Je]=e,t[rt]=n}catch(r){Ee(e,e.return,r)}}var un=!1,Pe=!1,jr=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function iy(e,t){if(e=e.containerInfo,su=Ns,e=Fc(e),kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,g=-1,w=-1,O=0,N=0,H=e,M=null;t:for(;;){for(var k;H!==n||o!==0&&H.nodeType!==3||(g=f+o),H!==r||a!==0&&H.nodeType!==3||(w=f+a),H.nodeType===3&&(f+=H.nodeValue.length),(k=H.firstChild)!==null;)M=H,H=k;for(;;){if(H===e)break t;if(M===n&&++O===o&&(g=f),M===r&&++N===a&&(w=f),(k=H.nextSibling)!==null)break;H=M,M=H.parentNode}H=k}n=g===-1||w===-1?null:{start:g,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:e,selectionRange:n},Ns=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,o=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var Z=fa(n.type,o);e=a.getSnapshotBeforeUpdate(Z,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ee(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function jd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),a&4&&Pi(5,n);break;case 1:if(fn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var o=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&zd(n),a&512&&Vi(n,n.return);break;case 3:if(fn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ef(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&Bd(n);case 26:case 5:fn(e,n),t===null&&a&4&&Nd(n),a&512&&Vi(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),a&4&&Yd(e,n);break;case 13:fn(e,n),a&4&&Qd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hy.bind(null,n),zy(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Pe,o=un;var r=Pe;un=a,(Pe=t)&&!r?dn(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),un=o,Pe=r}break;case 30:break;default:fn(e,n)}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,ct=!1;function cn(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 26:Pe||Vt(n,t),cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||Vt(n,t);var a=ze,o=ct;Hn(n.type)&&(ze=n.stateNode,ct=!1),cn(e,t,n),eo(n.stateNode),ze=a,ct=o;break;case 5:Pe||Vt(n,t);case 6:if(a=ze,o=ct,ze=null,cn(e,t,n),ze=a,ct=o,ze!==null)if(ct)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{ze.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:ze!==null&&(ct?(e=ze,zh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):zh(ze,n.stateNode));break;case 4:a=ze,o=ct,ze=n.stateNode.containerInfo,ct=!0,cn(e,t,n),ze=a,ct=o;break;case 0:case 11:case 14:case 15:Dn(2,n,t),Pe||Dn(4,n,t),cn(e,t,n);break;case 1:Pe||(Vt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ld(n,t,a)),cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:Pe=(a=Pe)||n.memoizedState!==null,cn(e,t,n),Pe=a;break;default:cn(e,t,n)}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(n){Ee(t,t.return,n)}}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){Ee(t,t.return,n)}}function oy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hd),t;default:throw Error(u(435,e.tag))}}function ps(e,t){var n=oy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=my.bind(null,e,a);a.then(o,o)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],r=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(Hn(g.type)){ze=g.stateNode,ct=!1;break e}break;case 5:ze=g.stateNode,ct=!1;break e;case 3:case 4:ze=g.stateNode.containerInfo,ct=!0;break e}g=g.return}if(ze===null)throw Error(u(160));Gd(r,f,o),ze=null,ct=!1,r=o.alternate,r!==null&&(r.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}var Ht=null;function Pd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),a&4&&(Dn(3,e,e.return),Pi(3,e),Dn(5,e,e.return));break;case 1:ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=Ht;if(ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":r=o.getElementsByTagName("title")[0],(!r||r[vi]||r[Je]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=o.createElement(a),o.head.insertBefore(r,o.querySelector("head > title"))),tt(r,a,n),r[Je]=e,Xe(r),a=r;break e;case"link":var f=Ph("link","href",o).get(a+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(r=f[g],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}r=o.createElement(a),tt(r,a,n),o.head.appendChild(r);break;case"meta":if(f=Ph("meta","content",o).get(a+(n.content||""))){for(g=0;g<f.length;g++)if(r=f[g],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}r=o.createElement(a),tt(r,a,n),o.head.appendChild(r);break;default:throw Error(u(468,a))}r[Je]=e,Xe(r),a=r}e.stateNode=a}else Vh(o,e.type,e.stateNode);else e.stateNode=Qh(o,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Vh(o,e.type,e.stateNode):Qh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ur(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),n!==null&&a&4&&Ur(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),e.flags&32){o=e.stateNode;try{Oa(o,"")}catch(Z){Ee(e,e.return,Z)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Ur(e,o,n!==null?n.memoizedProps:o)),a&1024&&(jr=!0);break;case 6:if(ft(t,e),dt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Z){Ee(e,e.return,Z)}}break;case 3:if(Ds=null,o=Ht,Ht=Os(t.containerInfo),ft(t,e),Ht=o,dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(Z){Ee(e,e.return,Z)}jr&&(jr=!1,Vd(e));break;case 4:a=Ht,Ht=Os(e.stateNode.containerInfo),ft(t,e),dt(e),Ht=a;break;case 12:ft(t,e),dt(e);break;case 31:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ps(e,a)));break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ys=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ps(e,a)));break;case 22:o=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,O=un,N=Pe;if(un=O||o,Pe=N||w,ft(t,e),Pe=N,un=O,dt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||w||un||Pe||da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(r=w.stateNode,o)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=w.stateNode;var H=w.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null;g.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Z){Ee(w,w.return,Z)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(Z){Ee(w,w.return,Z)}}}else if(t.tag===18){if(n===null){w=t;try{var k=w.stateNode;o?Lh(k,!0):Lh(w.stateNode,!1)}catch(Z){Ee(w,w.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ps(e,n))));break;case 19:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ps(e,a)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ud(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,r=Br(e);ms(e,r,o);break;case 5:var f=n.stateNode;n.flags&32&&(Oa(f,""),n.flags&=-33);var g=Br(e);ms(e,g,f);break;case 3:case 4:var w=n.stateNode.containerInfo,O=Br(e);Hr(e,O,w);break;default:throw Error(u(161))}}catch(N){Ee(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jd(e,t.alternate,t),t=t.sibling}function da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Dn(4,t,t.return),da(t);break;case 1:Vt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ld(t,t.return,n),da(t);break;case 27:eo(t.stateNode);case 26:case 5:Vt(t,t.return),da(t);break;case 22:t.memoizedState===null&&da(t);break;case 30:da(t);break;default:da(t)}e=e.sibling}}function dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:dn(o,r,n),Pi(4,r);break;case 1:if(dn(o,r,n),a=r,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Ee(a,a.return,O)}if(a=r,o=a.updateQueue,o!==null){var g=a.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)Af(w[o],g)}catch(O){Ee(a,a.return,O)}}n&&f&64&&zd(r),Vi(r,r.return);break;case 27:Bd(r);case 26:case 5:dn(o,r,n),n&&a===null&&f&4&&Nd(r),Vi(r,r.return);break;case 12:dn(o,r,n);break;case 31:dn(o,r,n),n&&f&4&&Yd(o,r);break;case 13:dn(o,r,n),n&&f&4&&Qd(o,r);break;case 22:r.memoizedState===null&&dn(o,r,n),Vi(r,r.return);break;case 30:break;default:dn(o,r,n)}t=t.sibling}}function qr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Di(n))}function Gr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Di(e))}function jt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,n,a),t=t.sibling}function Id(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,n,a),o&2048&&Pi(9,t);break;case 1:jt(e,t,n,a);break;case 3:jt(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Di(e)));break;case 12:if(o&2048){jt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,g=r.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ee(t,t.return,w)}}else jt(e,t,n,a);break;case 31:jt(e,t,n,a);break;case 13:jt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?jt(e,t,n,a):Ii(e,t):r._visibility&2?jt(e,t,n,a):(r._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&qr(f,t);break;case 24:jt(e,t,n,a),o&2048&&Gr(t.alternate,t);break;default:jt(e,t,n,a)}}function Fa(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,f=t,g=n,w=a,O=f.flags;switch(f.tag){case 0:case 11:case 15:Fa(r,f,g,w,o),Pi(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?Fa(r,f,g,w,o):Ii(r,f):(N._visibility|=2,Fa(r,f,g,w,o)),o&&O&2048&&qr(f.alternate,f);break;case 24:Fa(r,f,g,w,o),o&&O&2048&&Gr(f.alternate,f);break;default:Fa(r,f,g,w,o)}t=t.sibling}}function Ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Ii(n,a),o&2048&&qr(a.alternate,a);break;case 24:Ii(n,a),o&2048&&Gr(a.alternate,a);break;default:Ii(n,a)}t=t.sibling}}var Xi=8192;function Za(e,t,n){if(e.subtreeFlags&Xi)for(e=e.child;e!==null;)Xd(e,t,n),e=e.sibling}function Xd(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Xi&&e.memoizedState!==null&&Vy(n,Ht,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var a=Ht;Ht=Os(e.stateNode.containerInfo),Za(e,t,n),Ht=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xi,Xi=16777216,Za(e,t,n),Xi=a):Za(e,t,n));break;default:Za(e,t,n)}}function Kd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,Zd(a,e)}Kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 0:case 11:case 15:Ki(e),e.flags&2048&&Dn(9,e,e.return);break;case 3:Ki(e);break;case 12:Ki(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gs(e)):Ki(e);break;default:Ki(e)}}function gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,Zd(a,e)}Kd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dn(8,t,t.return),gs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gs(t));break;default:gs(t)}e=e.sibling}}function Zd(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:Dn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Di(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ke=a;else e:for(n=e;Ke!==null;){a=Ke;var o=a.sibling,r=a.return;if(qd(a),a===n){Ke=null;break e}if(o!==null){o.return=r,Ke=o;break e}Ke=r}}}var sy={getCacheForType:function(e){var t=$e(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Ge).controller.signal}},ly=typeof WeakMap=="function"?WeakMap:Map,be=0,xe=null,fe=null,he=0,Ae=0,At=null,kn=!1,Ja=!1,Yr=!1,hn=0,Ue=0,zn=0,ha=0,Qr=0,Et=0,Wa=0,Fi=null,ht=null,Pr=!1,ys=0,Jd=0,vs=1/0,Ss=null,Ln=null,Ve=0,Nn=null,$a=null,mn=0,Vr=0,Ir=null,Wd=null,Zi=0,Xr=null;function Tt(){return(be&2)!==0&&he!==0?he&-he:L.T!==null?$r():hc()}function $d(){if(Et===0)if((he&536870912)===0||pe){var e=Co;Co<<=1,(Co&3932160)===0&&(Co=262144),Et=e}else Et=536870912;return e=bt.current,e!==null&&(e.flags|=32),Et}function mt(e,t,n){(e===xe&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Un(e,he,Et,!1)),yi(e,n),((be&2)===0||e!==xe)&&(e===xe&&((be&2)===0&&(ha|=n),Ue===4&&Un(e,he,Et,!1)),It(e))}function eh(e,t,n){if((be&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gi(e,t),o=a?cy(e,t):Fr(e,t,!0),r=a;do{if(o===0){Ja&&!a&&Un(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!ry(n)){o=Fr(e,t,!1),r=!1;continue}if(o===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;o=Fi;var w=g.current.memoizedState.isDehydrated;if(w&&(ei(g,f).flags|=256),f=Fr(g,f,!1),f!==2){if(Yr&&!w){g.errorRecoveryDisabledLanes|=r,ha|=r,o=4;break e}r=ht,ht=o,r!==null&&(ht===null?ht=r:ht.push.apply(ht,r))}o=f}if(r=!1,o!==2)continue}}if(o===1){ei(e,0),Un(e,t,0,!0);break}e:{switch(a=e,r=o,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Un(a,t,Et,!kn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=ys+300-nt(),10<o)){if(Un(a,t,Et,!kn),Oo(a,0,!0)!==0)break e;mn=t,a.timeoutHandle=Dh(th.bind(null,a,n,ht,Ss,Pr,t,Et,ha,Wa,kn,r,"Throttled",-0,0),o);break e}th(a,n,ht,Ss,Pr,t,Et,ha,Wa,kn,r,null,-0,0)}}break}while(!0);It(e)}function th(e,t,n,a,o,r,f,g,w,O,N,H,M,k){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Xd(t,r,H);var Z=(r&62914560)===r?ys-nt():(r&4194048)===r?Jd-nt():0;if(Z=Iy(H,Z),Z!==null){mn=r,e.cancelPendingCommit=Z(uh.bind(null,e,t,r,n,a,o,f,g,w,N,H,null,M,k)),Un(e,r,f,!O);return}}uh(e,t,r,n,a,o,f,g,w)}function ry(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],r=o.getSnapshot;o=o.value;try{if(!vt(r(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t,n,a){t&=~Qr,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var r=31-yt(o),f=1<<r;a[r]=-1,o&=~f}n!==0&&cc(e,n,t)}function bs(){return(be&6)===0?(Ji(0),!1):!0}function Kr(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,nn=ia=null,cr(e),Pa=null,zi=0,e=fe;for(;e!==null;)kd(e.alternate,e),e=e.return;fe=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mn=0,Kr(),xe=e,fe=n=en(e.current,null),he=t,Ae=0,At=null,kn=!1,Ja=gi(e,t),Yr=!1,Wa=Et=Qr=ha=zn=Ue=0,ht=Fi=null,Pr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-yt(a),r=1<<o;t|=e[o],a&=~r}return hn=t,Go(),n}function nh(e,t){re=null,L.H=Gi,t===Qa||t===Fo?(t=vf(),Ae=3):t===Wl?(t=vf(),Ae=4):Ae=t===Rr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,fe===null&&(Ue=1,us(e,xt(t,e.current)))}function ah(){var e=bt.current;return e===null?!0:(he&4194048)===he?kt===null:(he&62914560)===he||(he&536870912)!==0?e===kt:!1}function ih(){var e=L.H;return L.H=Gi,e===null?Gi:e}function oh(){var e=L.A;return L.A=sy,e}function ws(){Ue=4,kn||(he&4194048)!==he&&bt.current!==null||(Ja=!0),(zn&134217727)===0&&(ha&134217727)===0||xe===null||Un(xe,he,Et,!1)}function Fr(e,t,n){var a=be;be|=2;var o=ih(),r=oh();(xe!==e||he!==t)&&(Ss=null,ei(e,t)),t=!1;var f=Ue;e:do try{if(Ae!==0&&fe!==null){var g=fe,w=At;switch(Ae){case 8:Kr(),f=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var O=Ae;if(Ae=0,At=null,ti(e,g,w,O),n&&Ja){f=0;break e}break;default:O=Ae,Ae=0,At=null,ti(e,g,w,O)}}uy(),f=Ue;break}catch(N){nh(e,N)}while(!0);return t&&e.shellSuspendCounter++,nn=ia=null,be=a,L.H=o,L.A=r,fe===null&&(xe=null,he=0,Go()),f}function uy(){for(;fe!==null;)sh(fe)}function cy(e,t){var n=be;be|=2;var a=ih(),o=oh();xe!==e||he!==t?(Ss=null,vs=nt()+500,ei(e,t)):Ja=gi(e,t);e:do try{if(Ae!==0&&fe!==null){t=fe;var r=At;t:switch(Ae){case 1:Ae=0,At=null,ti(e,t,r,1);break;case 2:case 9:if(gf(r)){Ae=0,At=null,lh(t);break}t=function(){Ae!==2&&Ae!==9||xe!==e||(Ae=7),It(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:gf(r)?(Ae=0,At=null,lh(t)):(Ae=0,At=null,ti(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var g=fe;if(f?Ih(f):g.stateNode.complete){Ae=0,At=null;var w=g.sibling;if(w!==null)fe=w;else{var O=g.return;O!==null?(fe=O,As(O)):fe=null}break t}}Ae=0,At=null,ti(e,t,r,5);break;case 6:Ae=0,At=null,ti(e,t,r,6);break;case 8:Kr(),Ue=6;break e;default:throw Error(u(462))}}fy();break}catch(N){nh(e,N)}while(!0);return nn=ia=null,L.H=a,L.A=o,be=n,fe!==null?0:(xe=null,he=0,Go(),Ue)}function fy(){for(;fe!==null&&!_o();)sh(fe)}function sh(e){var t=Md(e.alternate,e,hn);e.memoizedProps=e.pendingProps,t===null?As(e):fe=t}function lh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Td(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Td(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:cr(t);default:kd(n,t),t=fe=of(t,hn),t=Md(n,t,hn)}e.memoizedProps=e.pendingProps,t===null?As(e):fe=t}function ti(e,t,n,a){nn=ia=null,cr(t),Pa=null,zi=0;var o=t.return;try{if($g(e,o,t,n,he)){Ue=1,us(e,xt(n,e.current)),fe=null;return}}catch(r){if(o!==null)throw fe=o,r;Ue=1,us(e,xt(n,e.current)),fe=null;return}t.flags&32768?(pe||a===1?e=!0:Ja||(he&536870912)!==0?e=!1:(kn=e=!0,(a===2||a===9||a===3||a===6)&&(a=bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),rh(t,e)):As(t)}function As(e){var t=e;do{if((t.flags&32768)!==0){rh(t,kn);return}e=t.return;var n=ny(t.alternate,t,hn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ue===0&&(Ue=5)}function rh(e,t){do{var n=ay(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ue=6,fe=null}function uh(e,t,n,a,o,r,f,g,w){e.cancelPendingCommit=null;do Es();while(Ve!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Bl,Pp(e,n,r,f,g,w),e===xe&&(fe=xe=null,he=0),$a=t,Nn=e,mn=n,Vr=r,Ir=o,Wd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(Aa,function(){return mh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,o=P.p,P.p=2,f=be,be|=4;try{iy(e,t,n)}finally{be=f,P.p=o,L.T=a}}Ve=1,ch(),fh(),dh()}}function ch(){if(Ve===1){Ve=0;var e=Nn,t=$a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var a=P.p;P.p=2;var o=be;be|=4;try{Pd(t,e);var r=lu,f=Fc(e.containerInfo),g=r.focusedElem,w=r.selectionRange;if(f!==g&&g&&g.ownerDocument&&Kc(g.ownerDocument.documentElement,g)){if(w!==null&&kl(g)){var O=w.start,N=w.end;if(N===void 0&&(N=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(N,g.value.length);else{var H=g.ownerDocument||document,M=H&&H.defaultView||window;if(M.getSelection){var k=M.getSelection(),Z=g.textContent.length,oe=Math.min(w.start,Z),Re=w.end===void 0?oe:Math.min(w.end,Z);!k.extend&&oe>Re&&(f=Re,Re=oe,oe=f);var R=Xc(g,oe),E=Xc(g,Re);if(R&&E&&(k.rangeCount!==1||k.anchorNode!==R.node||k.anchorOffset!==R.offset||k.focusNode!==E.node||k.focusOffset!==E.offset)){var x=H.createRange();x.setStart(R.node,R.offset),k.removeAllRanges(),oe>Re?(k.addRange(x),k.extend(E.node,E.offset)):(x.setEnd(E.node,E.offset),k.addRange(x))}}}}for(H=[],k=g;k=k.parentNode;)k.nodeType===1&&H.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<H.length;g++){var U=H[g];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ns=!!su,lu=su=null}finally{be=o,P.p=a,L.T=n}}e.current=t,Ve=2}}function fh(){if(Ve===2){Ve=0;var e=Nn,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=P.p;P.p=2;var o=be;be|=4;try{jd(e,t.alternate,t)}finally{be=o,P.p=a,L.T=n}}Ve=3}}function dh(){if(Ve===4||Ve===3){Ve=0,cl();var e=Nn,t=$a,n=mn,a=Wd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,$a=Nn=null,hh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Ln=null),hl(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(pi,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,o=P.p,P.p=2,L.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var g=a[f];r(g.value,{componentStack:g.stack})}}finally{L.T=t,P.p=o}}(mn&3)!==0&&Es(),It(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===Xr?Zi++:(Zi=0,Xr=e):Zi=0,Ji(0)}}function hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Di(t)))}function Es(){return ch(),fh(),dh(),mh()}function mh(){if(Ve!==5)return!1;var e=Nn,t=Vr;Vr=0;var n=hl(mn),a=L.T,o=P.p;try{P.p=32>n?32:n,L.T=null,n=Ir,Ir=null;var r=Nn,f=mn;if(Ve=0,$a=Nn=null,mn=0,(be&6)!==0)throw Error(u(331));var g=be;if(be|=4,Fd(r.current),Id(r,r.current,f,n),be=g,Ji(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(pi,r)}catch{}return!0}finally{P.p=o,L.T=a,hh(e,t)}}function ph(e,t,n){t=xt(n,t),t=_r(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(yi(e,2),It(e))}function Ee(e,t,n){if(e.tag===3)ph(e,e,n);else for(;t!==null;){if(t.tag===3){ph(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){e=xt(n,e),n=gd(2),a=xn(t,n,2),a!==null&&(yd(n,a,t,e),yi(a,2),It(a));break}}t=t.return}}function Zr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ly;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Yr=!0,o.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function dy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(he&n)===n&&(Ue===4||Ue===3&&(he&62914560)===he&&300>nt()-ys?(be&2)===0&&ei(e,0):Qr|=n,Wa===he&&(Wa=0)),It(e)}function gh(e,t){t===0&&(t=uc()),e=ta(e,t),e!==null&&(yi(e,t),It(e))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gh(e,n)}function my(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),gh(e,n)}function py(e,t){return Ut(e,t)}var Ts=null,ni=null,Jr=!1,_s=!1,Wr=!1,Bn=0;function It(e){e!==ni&&e.next===null&&(ni===null?Ts=ni=e:ni=ni.next=e),_s=!0,Jr||(Jr=!0,yy())}function Ji(e,t){if(!Wr&&_s){Wr=!0;do for(var n=!1,a=Ts;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var r=0;else{var f=a.suspendedLanes,g=a.pingedLanes;r=(1<<31-yt(42|e)+1)-1,r&=o&~(f&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,bh(a,r))}else r=he,r=Oo(a,a===xe?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||gi(a,r)||(n=!0,bh(a,r));a=a.next}while(n);Wr=!1}}function gy(){yh()}function yh(){_s=Jr=!1;var e=0;Bn!==0&&Cy()&&(e=Bn);for(var t=nt(),n=null,a=Ts;a!==null;){var o=a.next,r=vh(a,t);r===0?(a.next=null,n===null?Ts=o:n.next=o,o===null&&(ni=n)):(n=a,(e!==0||(r&3)!==0)&&(_s=!0)),a=o}Ve!==0&&Ve!==5||Ji(e),Bn!==0&&(Bn=0)}function vh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-yt(r),g=1<<f,w=o[f];w===-1?((g&n)===0||(g&a)!==0)&&(o[f]=Qp(g,t)):w<=t&&(e.expiredLanes|=g),r&=~g}if(t=xe,n=he,n=Oo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&mi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&mi(a),hl(n)){case 2:case 8:n=Yt;break;case 32:n=Aa;break;case 268435456:n=rc;break;default:n=Aa}return a=Sh.bind(null,e),n=Ut(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&mi(a),e.callbackPriority=2,e.callbackNode=null,2}function Sh(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Es()&&e.callbackNode!==n)return null;var a=he;return a=Oo(e,e===xe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(eh(e,a,t),vh(e,nt()),e.callbackNode!=null&&e.callbackNode===n?Sh.bind(null,e):null)}function bh(e,t){if(Es())return null;eh(e,t,!0)}function yy(){Oy(function(){(be&6)!==0?Ut(Ze,gy):yh()})}function $r(){if(Bn===0){var e=Ga;e===0&&(e=Ro,Ro<<=1,(Ro&261888)===0&&(Ro=256)),Bn=e}return Bn}function wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zo(""+e)}function Ah(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vy(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var r=wh((o[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?wh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var g=new Bo("action","action",null,a,o);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bn!==0){var w=f?Ah(o,f):new FormData(o);Sr(n,{pending:!0,data:w,method:o.method,action:r},null,w)}}else typeof r=="function"&&(g.preventDefault(),w=f?Ah(o,f):new FormData(o),Sr(n,{pending:!0,data:w,method:o.method,action:r},r,w))},currentTarget:o}]})}}for(var eu=0;eu<Ul.length;eu++){var tu=Ul[eu],Sy=tu.toLowerCase(),by=tu[0].toUpperCase()+tu.slice(1);Bt(Sy,"on"+by)}Bt(Wc,"onAnimationEnd"),Bt($c,"onAnimationIteration"),Bt(ef,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Ug,"onTransitionRun"),Bt(Bg,"onTransitionStart"),Bt(Hg,"onTransitionCancel"),Bt(tf,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wi));function Eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var g=a[f],w=g.instance,O=g.currentTarget;if(g=g.listener,w!==r&&o.isPropagationStopped())break e;r=g,o.currentTarget=O;try{r(o)}catch(N){qo(N)}o.currentTarget=null,r=w}else for(f=0;f<a.length;f++){if(g=a[f],w=g.instance,O=g.currentTarget,g=g.listener,w!==r&&o.isPropagationStopped())break e;r=g,o.currentTarget=O;try{r(o)}catch(N){qo(N)}o.currentTarget=null,r=w}}}}function de(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var a=e+"__bubble";n.has(a)||(Th(t,e,2,!1),n.add(a))}function nu(e,t,n){var a=0;t&&(a|=4),Th(n,e,a,t)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[Rs]){e[Rs]=!0,gc.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||nu(n,!1,e),nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rs]||(t[Rs]=!0,nu("selectionchange",!1,t))}}function Th(e,t,n,a){switch($h(t)){case 2:var o=Fy;break;case 8:o=Zy;break;default:o=vu}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function iu(e,t,n,a,o){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var g=a.stateNode.containerInfo;if(g===o)break;if(f===4)for(f=a.return;f!==null;){var w=f.tag;if((w===3||w===4)&&f.stateNode.containerInfo===o)return;f=f.return}for(;g!==null;){if(f=Ta(g),f===null)return;if(w=f.tag,w===5||w===6||w===26||w===27){a=r=f;continue e}g=g.parentNode}}a=a.return}xc(function(){var O=r,N=wl(n),H=[];e:{var M=nf.get(e);if(M!==void 0){var k=Bo,Z=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":k=mg;break;case"focusin":Z="focus",k=Cl;break;case"focusout":Z="blur",k=Cl;break;case"beforeblur":case"afterblur":k=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=yg;break;case Wc:case $c:case ef:k=og;break;case tf:k=Sg;break;case"scroll":case"scrollend":k=eg;break;case"wheel":k=wg;break;case"copy":case"cut":case"paste":k=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=zc;break;case"toggle":case"beforetoggle":k=Eg}var oe=(t&4)!==0,Re=!oe&&(e==="scroll"||e==="scrollend"),R=oe?M!==null?M+"Capture":null:M;oe=[];for(var E=O,x;E!==null;){var U=E;if(x=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||x===null||R===null||(U=bi(E,R),U!=null&&oe.push($i(E,U,x))),Re)break;E=E.return}0<oe.length&&(M=new k(M,Z,null,n,N),H.push({event:M,listeners:oe}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",M&&n!==bl&&(Z=n.relatedTarget||n.fromElement)&&(Ta(Z)||Z[Ea]))break e;if((k||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,k?(Z=n.relatedTarget||n.toElement,k=O,Z=Z?Ta(Z):null,Z!==null&&(Re=d(Z),oe=Z.tag,Z!==Re||oe!==5&&oe!==27&&oe!==6)&&(Z=null)):(k=null,Z=O),k!==Z)){if(oe=Dc,U="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(oe=zc,U="onPointerLeave",R="onPointerEnter",E="pointer"),Re=k==null?M:Si(k),x=Z==null?M:Si(Z),M=new oe(U,E+"leave",k,n,N),M.target=Re,M.relatedTarget=x,U=null,Ta(N)===O&&(oe=new oe(R,E+"enter",Z,n,N),oe.target=x,oe.relatedTarget=Re,U=oe),Re=U,k&&Z)t:{for(oe=Ay,R=k,E=Z,x=0,U=R;U;U=oe(U))x++;U=0;for(var te=E;te;te=oe(te))U++;for(;0<x-U;)R=oe(R),x--;for(;0<U-x;)E=oe(E),U--;for(;x--;){if(R===E||E!==null&&R===E.alternate){oe=R;break t}R=oe(R),E=oe(E)}oe=null}else oe=null;k!==null&&_h(H,M,k,oe,!1),Z!==null&&Re!==null&&_h(H,Re,Z,oe,!0)}}e:{if(M=O?Si(O):window,k=M.nodeName&&M.nodeName.toLowerCase(),k==="select"||k==="input"&&M.type==="file")var ye=Gc;else if(jc(M))if(Yc)ye=zg;else{ye=Dg;var J=Mg}else k=M.nodeName,!k||k.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?O&&Sl(O.elementType)&&(ye=Gc):ye=kg;if(ye&&(ye=ye(e,O))){qc(H,ye,n,N);break e}J&&J(e,M,O),e==="focusout"&&O&&M.type==="number"&&O.memoizedProps.value!=null&&vl(M,"number",M.value)}switch(J=O?Si(O):window,e){case"focusin":(jc(J)||J.contentEditable==="true")&&(za=J,zl=O,xi=null);break;case"focusout":xi=zl=za=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Zc(H,n,N);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":Zc(H,n,N)}var ue;if(Ol)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ka?Bc(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Lc&&n.locale!=="ko"&&(ka||me!=="onCompositionStart"?me==="onCompositionEnd"&&ka&&(ue=Oc()):(wn=N,Tl="value"in wn?wn.value:wn.textContent,ka=!0)),J=Cs(O,me),0<J.length&&(me=new kc(me,e,null,n,N),H.push({event:me,listeners:J}),ue?me.data=ue:(ue=Hc(n),ue!==null&&(me.data=ue)))),(ue=_g?Rg(e,n):Cg(e,n))&&(me=Cs(O,"onBeforeInput"),0<me.length&&(J=new kc("onBeforeInput","beforeinput",null,n,N),H.push({event:J,listeners:me}),J.data=ue)),vy(H,e,O,n,N)}Eh(H,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cs(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,r=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||r===null||(o=bi(e,n),o!=null&&a.unshift($i(e,o,r)),o=bi(e,t),o!=null&&a.push($i(e,o,r))),e.tag===3)return a;e=e.return}return[]}function Ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _h(e,t,n,a,o){for(var r=t._reactName,f=[];n!==null&&n!==a;){var g=n,w=g.alternate,O=g.stateNode;if(g=g.tag,w!==null&&w===a)break;g!==5&&g!==26&&g!==27||O===null||(w=O,o?(O=bi(n,r),O!=null&&f.unshift($i(n,O,w))):o||(O=bi(n,r),O!=null&&f.push($i(n,O,w)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function Ch(e,t){return t=Rh(t),Rh(e)===t}function _e(e,t,n,a,o,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Oa(e,""+a);break;case"className":Do(e,"class",a);break;case"tabIndex":Do(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Do(e,n,a);break;case"style":Rc(e,a,r);break;case"data":if(t!=="object"){Do(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zo(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",o.name,o,null),_e(e,t,"formEncType",o.formEncType,o,null),_e(e,t,"formMethod",o.formMethod,o,null),_e(e,t,"formTarget",o.formTarget,o,null)):(_e(e,t,"encType",o.encType,o,null),_e(e,t,"method",o.method,o,null),_e(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zo(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=zo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Mo(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wp.get(n)||n,Mo(e,n,a))}}function ou(e,t,n,a,o,r){switch(n){case"style":Rc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&Oa(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,o),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Mo(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,o=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,r,f,n,null)}}o&&_e(e,t,"srcSet",n.srcSet,n,null),a&&_e(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var g=r=f=o=null,w=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":o=N;break;case"type":f=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":r=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:_e(e,t,a,N,n,null)}}Ac(e,r,g,w,O,f,o,!1);return;case"select":de("invalid",e),a=f=r=null;for(o in n)if(n.hasOwnProperty(o)&&(g=n[o],g!=null))switch(o){case"value":r=g;break;case"defaultValue":f=g;break;case"multiple":a=g;default:_e(e,t,o,g,n,null)}t=r,n=f,e.multiple=!!a,t!=null?xa(e,!!a,t,!1):n!=null&&xa(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=o=a=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":a=g;break;case"defaultValue":o=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:_e(e,t,f,g,n,null)}Tc(e,a,o,r);return;case"option":for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!=null)&&(w==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":_e(e,t,w,a,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<Wi.length;a++)de(Wi[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,O,a,n,null)}return;default:if(Sl(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&ou(e,t,N,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&_e(e,t,g,a,n,null))}function _y(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,r=null,f=null,g=null,w=null,O=null,N=null;for(k in n){var H=n[k];if(n.hasOwnProperty(k)&&H!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":w=H;default:a.hasOwnProperty(k)||_e(e,t,k,null,a,H)}}for(var M in a){var k=a[M];if(H=n[M],a.hasOwnProperty(M)&&(k!=null||H!=null))switch(M){case"type":r=k;break;case"name":o=k;break;case"checked":O=k;break;case"defaultChecked":N=k;break;case"value":f=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:k!==H&&_e(e,t,M,k,a,H)}}yl(e,f,g,w,O,N,r,o);return;case"select":k=f=g=M=null;for(r in n)if(w=n[r],n.hasOwnProperty(r)&&w!=null)switch(r){case"value":break;case"multiple":k=w;default:a.hasOwnProperty(r)||_e(e,t,r,null,a,w)}for(o in a)if(r=a[o],w=n[o],a.hasOwnProperty(o)&&(r!=null||w!=null))switch(o){case"value":M=r;break;case"defaultValue":g=r;break;case"multiple":f=r;default:r!==w&&_e(e,t,o,r,a,w)}t=g,n=f,a=k,M!=null?xa(e,!!n,M,!1):!!a!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":k=M=null;for(g in n)if(o=n[g],n.hasOwnProperty(g)&&o!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:_e(e,t,g,null,a,o)}for(f in a)if(o=a[f],r=n[f],a.hasOwnProperty(f)&&(o!=null||r!=null))switch(f){case"value":M=o;break;case"defaultValue":k=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==r&&_e(e,t,f,o,a,r)}Ec(e,M,k);return;case"option":for(var Z in n)M=n[Z],n.hasOwnProperty(Z)&&M!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:_e(e,t,Z,null,a,M));for(w in a)M=a[w],k=n[w],a.hasOwnProperty(w)&&M!==k&&(M!=null||k!=null)&&(w==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":_e(e,t,w,M,a,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)M=n[oe],n.hasOwnProperty(oe)&&M!=null&&!a.hasOwnProperty(oe)&&_e(e,t,oe,null,a,M);for(O in a)if(M=a[O],k=n[O],a.hasOwnProperty(O)&&M!==k&&(M!=null||k!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:_e(e,t,O,M,a,k)}return;default:if(Sl(t)){for(var Re in n)M=n[Re],n.hasOwnProperty(Re)&&M!==void 0&&!a.hasOwnProperty(Re)&&ou(e,t,Re,void 0,a,M);for(N in a)M=a[N],k=n[N],!a.hasOwnProperty(N)||M===k||M===void 0&&k===void 0||ou(e,t,N,M,a,k);return}}for(var R in n)M=n[R],n.hasOwnProperty(R)&&M!=null&&!a.hasOwnProperty(R)&&_e(e,t,R,null,a,M);for(H in a)M=a[H],k=n[H],!a.hasOwnProperty(H)||M===k||M==null&&k==null||_e(e,t,H,M,a,k)}function xh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],r=o.transferSize,f=o.initiatorType,g=o.duration;if(r&&g&&xh(f)){for(f=0,g=o.responseEnd,a+=1;a<n.length;a++){var w=n[a],O=w.startTime;if(O>g)break;var N=w.transferSize,H=w.initiatorType;N&&xh(H)&&(w=w.responseEnd,f+=N*(w<g?1:(g-O)/(w-O)))}if(--a,t+=8*(r+f)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,lu=null;function xs(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function Cy(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(My)}:Dh;function My(e){setTimeout(function(){throw e})}function Hn(e){return e==="head"}function zh(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),si(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")eo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,eo(n);for(var r=n.firstChild;r;){var f=r.nextSibling,g=r.nodeName;r[vi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=f}}else n==="body"&&eo(e.ownerDocument.body);n=o}while(n);si(t)}function Lh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cu(n),pl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Dy(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function ky(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function Nh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$?"||e.data==="$~"}function du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hu=null;function Uh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Hh(e,t,n){switch(t=xs(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function eo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pl(e)}var Lt=new Map,jh=new Set;function Os(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=P.d;P.d={f:Ly,r:Ny,D:Uy,C:By,L:Hy,m:jy,X:Gy,S:qy,M:Yy};function Ly(){var e=pn.f(),t=bs();return e||t}function Ny(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):pn.r(e)}var ai=typeof document>"u"?null:document;function qh(e,t,n){var a=ai;if(a&&typeof t=="string"&&t){var o=Rt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),jh.has(o)||(jh.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),tt(t,"link",e),Xe(t),a.head.appendChild(t)))}}function Uy(e){pn.D(e),qh("dns-prefetch",e,null)}function By(e,t){pn.C(e,t),qh("preconnect",e,t)}function Hy(e,t,n){pn.L(e,t,n);var a=ai;if(a&&e&&t){var o='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Rt(n.imageSizes)+'"]')):o+='[href="'+Rt(e)+'"]';var r=o;switch(t){case"style":r=ii(e);break;case"script":r=oi(e)}Lt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(r,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(to(r))||t==="script"&&a.querySelector(no(r))||(t=a.createElement("link"),tt(t,"link",e),Xe(t),a.head.appendChild(t)))}}function jy(e,t){pn.m(e,t);var n=ai;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',r=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=oi(e)}if(!Lt.has(r)&&(e=v({rel:"modulepreload",href:e},t),Lt.set(r,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(no(r)))return}a=n.createElement("link"),tt(a,"link",e),Xe(a),n.head.appendChild(a)}}}function qy(e,t,n){pn.S(e,t,n);var a=ai;if(a&&e){var o=Ra(a).hoistableStyles,r=ii(e);t=t||"default";var f=o.get(r);if(!f){var g={loading:0,preload:null};if(f=a.querySelector(to(r)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(r))&&mu(e,n);var w=f=a.createElement("link");Xe(w),tt(w,"link",e),w._p=new Promise(function(O,N){w.onload=O,w.onerror=N}),w.addEventListener("load",function(){g.loading|=1}),w.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ms(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:g},o.set(r,f)}}}function Gy(e,t){pn.X(e,t);var n=ai;if(n&&e){var a=Ra(n).hoistableScripts,o=oi(e),r=a.get(o);r||(r=n.querySelector(no(o)),r||(e=v({src:e,async:!0},t),(t=Lt.get(o))&&pu(e,t),r=n.createElement("script"),Xe(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(o,r))}}function Yy(e,t){pn.M(e,t);var n=ai;if(n&&e){var a=Ra(n).hoistableScripts,o=oi(e),r=a.get(o);r||(r=n.querySelector(no(o)),r||(e=v({src:e,async:!0,type:"module"},t),(t=Lt.get(o))&&pu(e,t),r=n.createElement("script"),Xe(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(o,r))}}function Gh(e,t,n,a){var o=(o=ce.current)?Os(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ii(n.href),n=Ra(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ii(n.href);var r=Ra(o).hoistableStyles,f=r.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=o.querySelector(to(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),r||Qy(o,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oi(n),n=Ra(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ii(e){return'href="'+Rt(e)+'"'}function to(e){return'link[rel="stylesheet"]['+e+"]"}function Yh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Qy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Xe(t),e.head.appendChild(t))}function oi(e){return'[src="'+Rt(e)+'"]'}function no(e){return"script[async]"+e}function Qh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var o=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),tt(a,"style",o),Ms(a,n.precedence,e),t.instance=a;case"stylesheet":o=ii(n.href);var r=e.querySelector(to(o));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=Yh(n),(o=Lt.get(o))&&mu(a,o),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(g,w){f.onload=g,f.onerror=w}),tt(r,"link",a),t.state.loading|=4,Ms(r,n.precedence,e),t.instance=r;case"script":return r=oi(n.src),(o=e.querySelector(no(r)))?(t.instance=o,Xe(o),o):(a=n,(o=Lt.get(r))&&(a=v({},n),pu(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),Xe(o),tt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ms(a,n.precedence,e));return t.instance}function Ms(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,r=o,f=0;f<a.length;f++){var g=a[f];if(g.dataset.precedence===t)r=g;else if(r!==o)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ds=null;function Ph(e,t,n){if(Ds===null){var a=new Map,o=Ds=new Map;o.set(n,a)}else o=Ds,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var r=n[o];if(!(r[vi]||r[Je]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var g=a.get(f);g?g.push(r):a.set(f,[r])}}return a}function Vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Py(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ih(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=ii(a.href),r=t.querySelector(to(o));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ks.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Xe(r);return}r=t.ownerDocument||t,a=Yh(a),(o=Lt.get(o))&&mu(a,o),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(g,w){f.onload=g,f.onerror=w}),tt(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ks.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gu=0;function Iy(e,t){return e.stylesheets&&e.count===0&&Ls(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ls(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&gu===0&&(gu=62500*Ry());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ls(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>gu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function ks(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ls(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zs=null;function Ls(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zs=new Map,t.forEach(Xy,e),zs=null,ks.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var n=zs.get(e);if(n)var a=n.get(null);else{n=new Map,zs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<o.length;r++){var f=o[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}o=t.instance,f=o.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,o),n.set(f,o),this.count++,a=ks.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),r?r.parentNode.insertBefore(o,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ao={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Ky(e,t,n,a,o,r,f,g,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.hiddenUpdates=fl(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Xh(e,t,n,a,o,r,f,g,w,O,N,H){return e=new Ky(e,t,n,f,w,O,N,H,g),t=1,r===!0&&(t|=24),r=St(3,null,null,t),e.current=r,r.stateNode=e,t=Fl(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},$l(r),e}function Kh(e){return e?(e=Ua,e):Ua}function Fh(e,t,n,a,o,r){o=Kh(o),a.context===null?a.context=o:a.pendingContext=o,a=Cn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(mt(n,e,t),Ni(n,e,t))}function Zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){Zh(e,t),(e=e.alternate)&&Zh(e,t)}function Jh(e){if(e.tag===13||e.tag===31){var t=ta(e,67108864);t!==null&&mt(t,e,67108864),yu(e,67108864)}}function Wh(e){if(e.tag===13||e.tag===31){var t=Tt();t=dl(t);var n=ta(e,t);n!==null&&mt(n,e,t),yu(e,t)}}var Ns=!0;function Fy(e,t,n,a){var o=L.T;L.T=null;var r=P.p;try{P.p=2,vu(e,t,n,a)}finally{P.p=r,L.T=o}}function Zy(e,t,n,a){var o=L.T;L.T=null;var r=P.p;try{P.p=8,vu(e,t,n,a)}finally{P.p=r,L.T=o}}function vu(e,t,n,a){if(Ns){var o=Su(a);if(o===null)iu(e,t,a,Us,n),em(e,a);else if(Wy(o,e,t,n,a))a.stopPropagation();else if(em(e,a),t&4&&-1<Jy.indexOf(e)){for(;o!==null;){var r=_a(o);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Zn(r.pendingLanes);if(f!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var w=1<<31-yt(f);g.entanglements[1]|=w,f&=~w}It(r),(be&6)===0&&(vs=nt()+500,Ji(0))}}break;case 31:case 13:g=ta(r,2),g!==null&&mt(g,r,2),bs(),yu(r,2)}if(r=Su(a),r===null&&iu(e,t,a,Us,n),r===o)break;o=r}o!==null&&a.stopPropagation()}else iu(e,t,a,null,n)}}function Su(e){return e=wl(e),bu(e)}var Us=null;function bu(e){if(Us=null,e=Ta(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Us=e,null}function $h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Ze:return 2;case Yt:return 8;case Aa:case Bp:return 32;case rc:return 268435456;default:return 32}default:return 32}}var wu=!1,jn=null,qn=null,Gn=null,io=new Map,oo=new Map,Yn=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function em(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function so(e,t,n,a,o,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[o]},t!==null&&(t=_a(t),t!==null&&Jh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Wy(e,t,n,a,o){switch(t){case"focusin":return jn=so(jn,e,t,n,a,o),!0;case"dragenter":return qn=so(qn,e,t,n,a,o),!0;case"mouseover":return Gn=so(Gn,e,t,n,a,o),!0;case"pointerover":var r=o.pointerId;return io.set(r,so(io.get(r)||null,e,t,n,a,o)),!0;case"gotpointercapture":return r=o.pointerId,oo.set(r,so(oo.get(r)||null,e,t,n,a,o)),!0}return!1}function tm(e){var t=Ta(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,mc(e.priority,function(){Wh(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,mc(e.priority,function(){Wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);bl=a,n.target.dispatchEvent(a),bl=null}else return t=_a(n),t!==null&&Jh(t),e.blockedOn=n,!1;t.shift()}return!0}function nm(e,t,n){Bs(e)&&n.delete(t)}function $y(){wu=!1,jn!==null&&Bs(jn)&&(jn=null),qn!==null&&Bs(qn)&&(qn=null),Gn!==null&&Bs(Gn)&&(Gn=null),io.forEach(nm),oo.forEach(nm)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,$y)))}var js=null;function am(e){js!==e&&(js=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){js===e&&(js=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(bu(a||n)===null)continue;break}var r=_a(n);r!==null&&(e.splice(t,3),t-=3,Sr(r,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function si(e){function t(w){return Hs(w,e)}jn!==null&&Hs(jn,e),qn!==null&&Hs(qn,e),Gn!==null&&Hs(Gn,e),io.forEach(t),oo.forEach(t);for(var n=0;n<Yn.length;n++){var a=Yn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)tm(n),n.blockedOn===null&&Yn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],r=n[a+1],f=o[rt]||null;if(typeof r=="function")f||am(n);else if(f){var g=null;if(r&&r.hasAttribute("formAction")){if(o=r,f=r[rt]||null)g=f.formAction;else if(bu(o)!==null)continue}else g=f.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),am(n)}}}function im(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return o=f})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Au(e){this._internalRoot=e}qs.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();Fh(n,a,e,t,null,null)},qs.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fh(e.current,2,null,e,null,null),bs(),t[Ea]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&tm(e)}};var om=s.version;if(om!=="19.2.6")throw Error(u(527,om,"19.2.6"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var ev={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{pi=Gs.inject(ev),gt=Gs}catch{}}return ro.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",o=dd,r=hd,f=md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Xh(e,1,!1,null,null,n,a,null,o,r,f,im),e[Ea]=t.current,au(e),new Au(t)},ro.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,o="",r=dd,f=hd,g=md,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Xh(e,1,!0,t,n??null,a,o,w,r,f,g,im),t.context=Kh(null),n=t.current,a=Tt(),a=dl(a),o=Cn(a),o.callback=null,xn(n,o,a),n=a,t.current.lanes=n,yi(t,n),It(t),e[Ea]=t.current,au(e),new qs(t)},ro.version="19.2.6",ro}var pm;function cv(){if(pm)return _u.exports;pm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),_u.exports=uv(),_u.exports}var fv=cv();const dv=Zu(fv);var gm=ee.use,mo=typeof window<"u"?ee.useLayoutEffect:ee.useEffect;function Ou(i){const s=ee.useRef({value:i,prev:null}),l=s.current.value;return i!==l&&(s.current={value:i,prev:l}),s.current.prev}function hv(i,s,l={},u={}){ee.useEffect(()=>{if(!i.current||u.disabled||typeof IntersectionObserver!="function")return;const c=new IntersectionObserver(([d])=>{s(d)},l);return c.observe(i.current),()=>{c.disconnect()}},[s,l,u.disabled,i])}function mv(i){const s=ee.useRef(null);return ee.useImperativeHandle(i,()=>s.current,[]),s}const ep=!1;function po(i){return i[i.length-1]}function pv(i){return typeof i=="function"}function Vn(i,s){return pv(i)?i(s):i}const tp=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable;function np(i){for(const s in i)if(tp.call(i,s))return!0;return!1}const gv=()=>Object.create(null),ma=(i,s)=>pa(i,s,gv);function pa(i,s,l=()=>({}),u=0){if(i===s)return i;if(u>500)return s;const c=s,d=bm(i)&&bm(c);if(!d&&!(ci(i)&&ci(c)))return c;const m=d?i:vm(i);if(!m)return c;const y=d?c:vm(c);if(!y)return c;const p=m.length,h=y.length,S=d?new Array(h):l();let v=0;for(let A=0;A<h;A++){const b=d?A:y[A],_=i[b],C=c[b];if(_===C){S[b]=_,(d?A<p:tp.call(i,b))&&v++;continue}if(_===null||C===null||typeof _!="object"||typeof C!="object"){S[b]=C;continue}const D=pa(_,C,l,u+1);S[b]=D,D===_&&v++}return p===h&&v===p?i:S}function vm(i){const s=Object.getOwnPropertyNames(i);for(const c of s)if(!ym.call(i,c))return!1;const l=Object.getOwnPropertySymbols(i);if(l.length===0)return s;const u=s;for(const c of l){if(!ym.call(i,c))return!1;u.push(c)}return u}function ci(i){if(!Sm(i))return!1;const s=i.constructor;if(typeof s>"u")return!0;const l=s.prototype;return!(!Sm(l)||!l.hasOwnProperty("isPrototypeOf"))}function Sm(i){return Object.prototype.toString.call(i)==="[object Object]"}function bm(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function Nt(i,s,l){if(i===s)return!0;if(typeof i!=typeof s)return!1;if(Array.isArray(i)&&Array.isArray(s)){if(i.length!==s.length)return!1;for(let u=0,c=i.length;u<c;u++)if(!Nt(i[u],s[u],l))return!1;return!0}if(ci(i)&&ci(s)){const u=l?.ignoreUndefined??!0;if(l?.partial){for(const m in s)if((!u||s[m]!==void 0)&&!Nt(i[m],s[m],l))return!1;return!0}let c=0;if(!u)c=Object.keys(i).length;else for(const m in i)i[m]!==void 0&&c++;let d=0;for(const m in s)if((!u||s[m]!==void 0)&&(d++,d>c||!Nt(i[m],s[m],l)))return!1;return c===d}return!1}function fi(i){let s,l;const u=new Promise((c,d)=>{s=c,l=d});return u.status="pending",u.resolve=c=>{u.status="resolved",u.value=c,s(c),i?.(c)},u.reject=c=>{u.status="rejected",l(c)},u}function yv(i){return typeof i?.message!="string"?!1:i.message.startsWith("Failed to fetch dynamically imported module")||i.message.startsWith("error loading dynamically imported module")||i.message.startsWith("Importing a module script failed")}function go(i){return!!(i&&typeof i=="object"&&typeof i.then=="function")}function vv(i){return i.replace(/[\x00-\x1f\x7f]/g,"")}function wm(i){let s;try{s=decodeURI(i)}catch{s=i.replaceAll(/%[0-9A-F]{2}/gi,l=>{try{return decodeURI(l)}catch{return l}})}return vv(s)}const Sv=["http:","https:","mailto:","tel:"];function Ws(i,s){if(!i)return!1;try{const l=new URL(i);return!s.has(l.protocol)}catch{return!1}}const bv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},wv=/[&><\u2028\u2029]/g;function Av(i){return i.replace(wv,s=>bv[s])}function uo(i){if(!i)return{path:i,handledProtocolRelativeURL:!1};if(!/[%\\\x00-\x1f\x7f]/.test(i)&&!i.startsWith("//"))return{path:i,handledProtocolRelativeURL:!1};const s=/%25|%5C/gi;let l=0,u="",c;for(;(c=s.exec(i))!==null;)u+=wm(i.slice(l,c.index))+c[0],l=s.lastIndex;u=u+wm(l?i.slice(l):i);let d=!1;return u.startsWith("//")&&(d=!0,u="/"+u.replace(/^\/+/,"")),{path:u,handledProtocolRelativeURL:d}}function Ev(i){return/\s|[^\u0000-\u007F]/.test(i)?i.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):i}function Tv(i,s){if(i===s)return!0;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l]!==s[l])return!1;return!0}function yn(){throw new Error("Invariant failed")}function yo(i){const s=new Map;let l,u;const c=d=>{d.next&&(d.prev?(d.prev.next=d.next,d.next.prev=d.prev,d.next=void 0,u&&(u.next=d,d.prev=u)):(d.next.prev=void 0,l=d.next,d.next=void 0,u&&(d.prev=u,u.next=d)),u=d)};return{get(d){const m=s.get(d);if(m)return c(m),m.value},set(d,m){if(s.size>=i&&l){const p=l;s.delete(p.key),p.next&&(l=p.next,p.next.prev=void 0),p===u&&(u=void 0)}const y=s.get(d);if(y)y.value=m,c(y);else{const p={key:d,value:m,prev:u};u&&(u.next=p),u=p,l||(l=p),s.set(d,p)}},clear(){s.clear(),l=void 0,u=void 0}}}const In=4,ap=5;function _v(i){const s=i.indexOf("{");if(s===-1)return null;const l=i.indexOf("}",s);return l===-1||s+1>=i.length?null:[s,l]}function ip(i,s,l=new Uint16Array(6)){const u=i.indexOf("/",s),c=u===-1?i.length:u,d=i.substring(s,c);if(!d||!d.includes("$"))return l[0]=0,l[1]=s,l[2]=s,l[3]=c,l[4]=c,l[5]=c,l;if(d==="$"){const y=i.length;return l[0]=2,l[1]=s,l[2]=s,l[3]=y,l[4]=y,l[5]=y,l}if(d.charCodeAt(0)===36)return l[0]=1,l[1]=s,l[2]=s+1,l[3]=c,l[4]=c,l[5]=c,l;const m=_v(d);if(m){const[y,p]=m,h=d.charCodeAt(y+1);if(h===45){if(y+2<d.length&&d.charCodeAt(y+2)===36){const S=y+3,v=p;if(S<v)return l[0]=3,l[1]=s+y,l[2]=s+S,l[3]=s+v,l[4]=s+p+1,l[5]=c,l}}else if(h===36){const S=y+1,v=y+2;return v===p?(l[0]=2,l[1]=s+y,l[2]=s+S,l[3]=s+v,l[4]=s+p+1,l[5]=i.length,l):(l[0]=1,l[1]=s+y,l[2]=s+v,l[3]=s+p,l[4]=s+p+1,l[5]=c,l)}}return l[0]=0,l[1]=s,l[2]=s,l[3]=c,l[4]=c,l[5]=c,l}function il(i,s,l,u,c,d,m){m?.(l);let y=u;{const p=l.fullPath??l.from,h=p.length,S=l.options?.caseSensitive??i,v=l.options?.params?.parse??l.options?.parseParams;for(;y<h;){const b=ip(p,y,s);let _;const C=y,D=b[5];switch(y=D+1,d++,b[0]){case 0:{const z=p.substring(b[2],b[3]);if(S){const q=c.static?.get(z);if(q)_=q;else{c.static??=new Map;const Y=ga(l.fullPath??l.from);Y.parent=c,Y.depth=d,_=Y,c.static.set(z,Y)}}else{const q=z.toLowerCase(),Y=c.staticInsensitive?.get(q);if(Y)_=Y;else{c.staticInsensitive??=new Map;const G=ga(l.fullPath??l.from);G.parent=c,G.depth=d,_=G,c.staticInsensitive.set(q,G)}}break}case 1:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=!v&&c.dynamic?.find(j=>!j.parse&&j.caseSensitive===Y&&j.prefix===G&&j.suffix===$);if(K)_=K;else{const j=Du(1,l.fullPath??l.from,Y,G,$);_=j,j.depth=d,j.parent=c,c.dynamic??=[],c.dynamic.push(j)}break}case 3:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=!v&&c.optional?.find(j=>!j.parse&&j.caseSensitive===Y&&j.prefix===G&&j.suffix===$);if(K)_=K;else{const j=Du(3,l.fullPath??l.from,Y,G,$);_=j,j.parent=c,j.depth=d,c.optional??=[],c.optional.push(j)}break}case 2:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=Du(2,l.fullPath??l.from,Y,G,$);_=K,K.parent=c,K.depth=d,c.wildcard??=[],c.wildcard.push(K)}}c=_}if(v&&l.children&&!l.isRoot&&l.id&&l.id.charCodeAt(l.id.lastIndexOf("/")+1)===95){const b=ga(l.fullPath??l.from);b.kind=ap,b.parent=c,d++,b.depth=d,c.pathless??=[],c.pathless.push(b),c=b}const A=(l.path||!l.children)&&!l.isRoot;if(A&&p.endsWith("/")){const b=ga(l.fullPath??l.from);b.kind=In,b.parent=c,d++,b.depth=d,c.index=b,c=b}c.parse=v??null,c.priority=l.options?.params?.priority??0,A&&!c.route&&(c.route=l,c.fullPath=l.fullPath??l.from)}if(l.children)for(const p of l.children)il(i,s,p,y,c,d,m)}function Mu(i,s){if(i.parse&&!s.parse)return-1;if(!i.parse&&s.parse)return 1;if(i.parse&&s.parse&&(i.priority||s.priority))return s.priority-i.priority;if(i.prefix&&s.prefix&&i.prefix!==s.prefix){if(i.prefix.startsWith(s.prefix))return-1;if(s.prefix.startsWith(i.prefix))return 1}if(i.suffix&&s.suffix&&i.suffix!==s.suffix){if(i.suffix.endsWith(s.suffix))return-1;if(s.suffix.endsWith(i.suffix))return 1}return i.prefix&&!s.prefix?-1:!i.prefix&&s.prefix?1:i.suffix&&!s.suffix?-1:!i.suffix&&s.suffix?1:i.caseSensitive&&!s.caseSensitive?-1:!i.caseSensitive&&s.caseSensitive?1:0}function Pn(i){if(i.pathless)for(const s of i.pathless)Pn(s);if(i.static)for(const s of i.static.values())Pn(s);if(i.staticInsensitive)for(const s of i.staticInsensitive.values())Pn(s);if(i.dynamic?.length){i.dynamic.sort(Mu);for(const s of i.dynamic)Pn(s)}if(i.optional?.length){i.optional.sort(Mu);for(const s of i.optional)Pn(s)}if(i.wildcard?.length){i.wildcard.sort(Mu);for(const s of i.wildcard)Pn(s)}}function ga(i){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:i,parent:null,parse:null,priority:0}}function Du(i,s,l,u,c){return{kind:i,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:s,parent:null,parse:null,priority:0,caseSensitive:l,prefix:u,suffix:c}}function Rv(i,s){const l=ga("/"),u=new Uint16Array(6);for(const c of i)il(!1,u,c,1,l,0);Pn(l),s.masksTree=l,s.flatCache=yo(1e3)}function Cv(i,s){i||="/";const l=s.flatCache.get(i);if(l)return l;const u=Ju(i,s.masksTree);return s.flatCache.set(i,u),u}function xv(i,s,l,u,c){i||="/",u||="/";const d=s?`case\0${i}`:i;let m=c.singleCache.get(d);return m||(m=ga("/"),il(s,new Uint16Array(6),{from:i},1,m,0),c.singleCache.set(d,m)),Ju(u,m,l)}function Ov(i,s,l=!1){const u=l?i:`nofuzz\0${i}`,c=s.matchCache.get(u);if(c!==void 0)return c;i||="/";let d;try{d=Ju(i,s.segmentTree,l)}catch(m){if(m instanceof URIError)d=null;else throw m}return d&&(d.branch=sp(d.route)),s.matchCache.set(u,d),d}function Mv(i){return i==="/"?i:i.replace(/\/{1,}$/,"")}function Dv(i,s=!1,l){const u=ga(i.fullPath),c=new Uint16Array(6),d={},m={};let y=0;return il(s,c,i,1,u,0,p=>{if(l?.(p,y),p.id in d&&yn(),d[p.id]=p,y!==0&&p.path){const h=Mv(p.fullPath);(!m[h]||p.fullPath.endsWith("/"))&&(m[h]=p)}y++}),Pn(u),{processedTree:{segmentTree:u,singleCache:yo(1e3),matchCache:yo(1e3),flatCache:null,masksTree:null},routesById:d,routesByPath:m}}function Ju(i,s,l=!1){const u=i.split("/"),c=zv(i,u,s,l);if(!c)return null;const[d]=op(i,u,c);return{route:c.node.route,rawParams:d}}function op(i,s,l){const u=kv(l.node);let c=null;const d=Object.create(null);let m=l.extract?.part??0,y=l.extract?.node??0,p=l.extract?.path??0,h=l.extract?.segment??0;for(;y<u.length;m++,y++,p++,h++){const S=u[y];if(S.kind===In)break;if(S.kind===ap){h--,m--,p--;continue}const v=s[m],A=p;if(v&&(p+=v.length),S.kind===1){c??=l.node.fullPath.split("/");const b=c[h],_=S.prefix?.length??0;if(b.charCodeAt(_)===123){const C=S.suffix?.length??0,D=b.substring(_+2,b.length-C-1),z=v.substring(_,v.length-C);d[D]=decodeURIComponent(z)}else{const C=b.substring(1);d[C]=decodeURIComponent(v)}}else if(S.kind===3){if(l.skipped&1<<y){m--,p=A-1;continue}c??=l.node.fullPath.split("/");const b=c[h],_=S.prefix?.length??0,C=S.suffix?.length??0,D=b.substring(_+3,b.length-C-1),z=S.suffix||S.prefix?v.substring(_,v.length-C):v;z&&(d[D]=decodeURIComponent(z))}else if(S.kind===2){const b=S,_=i.substring(A+(b.prefix?.length??0),i.length-(b.suffix?.length??0)),C=decodeURIComponent(_);d["*"]=C,d._splat=C;break}}return l.rawParams&&Object.assign(d,l.rawParams),[d,{part:m,node:y,path:p,segment:h}]}function sp(i){const s=[i];for(;i.parentRoute;)i=i.parentRoute,s.push(i);return s.reverse(),s}function kv(i){const s=Array(i.depth+1);do s[i.depth]=i,i=i.parent;while(i);return s}function zv(i,s,l,u){if(i==="/"&&l.index)return{node:l.index,skipped:0};const c=!po(s),d=c&&i!=="/",m=s.length-(c?1:0),y=[{node:l,index:1,skipped:0,depth:1,statics:0,dynamics:0,optionals:0}];let p=null,h=null;for(;y.length;){const S=y.pop(),{node:v,index:A,skipped:b,depth:_,statics:C,dynamics:D,optionals:z}=S;let{extract:q,rawParams:Y}=S;if(v.kind===2&&v.route&&!Qs(h,S))continue;if(v.parse){if(!Am(i,s,S))continue;Y=S.rawParams,q=S.extract}u&&v.route&&v.kind!==In&&Qs(p,S)&&(p=S);const G=A===m;if(G&&(v.route&&(!d||v.kind===In||v.kind===2)&&Qs(h,S)&&(h=S),!v.optional&&!v.wildcard&&!v.index&&!v.pathless))continue;const $=G?void 0:s[A];let K;if(G&&v.index){const j={node:v.index,index:A,skipped:b,depth:_+1,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y};let Q=!0;if(v.index.parse&&(Am(i,s,j)||(Q=!1)),Q){if(!D&&!z&&!b&&Lv(C,m))return j;Qs(h,j)&&(h=j)}}if(v.wildcard)for(let j=v.wildcard.length-1;j>=0;j--){const Q=v.wildcard[j],{prefix:F,suffix:se}=Q;if(!(F&&(G||!(Q.caseSensitive?$:K??=$.toLowerCase()).startsWith(F)))){if(se){if(G)continue;const ie=s.slice(A).join("/").slice(-se.length);if((Q.caseSensitive?ie:ie.toLowerCase())!==se)continue}y.push({node:Q,index:m,skipped:b,depth:_+1,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}}if(v.optional){const j=b|1<<_,Q=_+1;for(let F=v.optional.length-1;F>=0;F--){const se=v.optional[F];y.push({node:se,index:A,skipped:j,depth:Q,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}if(!G)for(let F=v.optional.length-1;F>=0;F--){const se=v.optional[F],{prefix:ie,suffix:ae}=se;if(ie||ae){const Ie=se.caseSensitive?$:K??=$.toLowerCase();if(ie&&!Ie.startsWith(ie)||ae&&!Ie.endsWith(ae))continue}y.push({node:se,index:A+1,skipped:b,depth:Q,statics:C,dynamics:D,optionals:z+Ys(m,A),extract:q,rawParams:Y})}}if(!G&&v.dynamic&&$)for(let j=v.dynamic.length-1;j>=0;j--){const Q=v.dynamic[j],{prefix:F,suffix:se}=Q;if(F||se){const ie=Q.caseSensitive?$:K??=$.toLowerCase();if(F&&!ie.startsWith(F)||se&&!ie.endsWith(se))continue}y.push({node:Q,index:A+1,skipped:b,depth:_+1,statics:C,dynamics:D+Ys(m,A),optionals:z,extract:q,rawParams:Y})}if(!G&&v.staticInsensitive){const j=v.staticInsensitive.get(K??=$.toLowerCase());j&&y.push({node:j,index:A+1,skipped:b,depth:_+1,statics:C+Ys(m,A),dynamics:D,optionals:z,extract:q,rawParams:Y})}if(!G&&v.static){const j=v.static.get($);j&&y.push({node:j,index:A+1,skipped:b,depth:_+1,statics:C+Ys(m,A),dynamics:D,optionals:z,extract:q,rawParams:Y})}if(v.pathless){const j=_+1;for(let Q=v.pathless.length-1;Q>=0;Q--){const F=v.pathless[Q];y.push({node:F,index:A,skipped:b,depth:j,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}}}if(h)return h;if(u&&p){let S=p.index;for(let A=0;A<p.index;A++)S+=s[A].length;const v=S===i.length?"/":i.slice(S);return p.rawParams??=Object.create(null),p.rawParams["**"]=decodeURIComponent(v),p}return null}function Ys(i,s){return 2**(i-s-1)}function Lv(i,s){return i===2**(s-1)-1}function Am(i,s,l){let u,c;try{[u,c]=op(i,s,l)}catch{return null}if(l.rawParams=u,l.extract=c,!l.node.parse)return!0;try{if(l.node.parse(u)===!1)return null}catch{}return!0}function Qs(i,s){return i?s.statics>i.statics||s.statics===i.statics&&(s.dynamics>i.dynamics||s.dynamics===i.dynamics&&(s.optionals>i.optionals||s.optionals===i.optionals&&((s.node.kind===In)>(i.node.kind===In)||s.node.kind===In==(i.node.kind===In)&&s.depth>i.depth))):!0}function Ks(i){return Wu(i.filter(s=>s!==void 0).join("/"))}function Wu(i){return i.replace(/\/{2,}/g,"/")}function lp(i){return i==="/"?i:i.replace(/^\/{1,}/,"")}function gn(i){const s=i.length;return s>1&&i[s-1]==="/"?i.replace(/\/{1,}$/,""):i}function rp(i){return gn(lp(i))}function $s(i,s){return i?.endsWith("/")&&i!=="/"&&i!==`${s}/`?i.slice(0,-1):i}function Nv(i,s,l){return $s(i,l)===$s(s,l)}function Uv({base:i,to:s,trailingSlash:l="never",cache:u}){const c=s.startsWith("/"),d=!c&&s===".";let m;if(u){m=c?s:d?i:i+"\0"+s;const h=u.get(m);if(h)return h}let y;if(d)y=i.split("/");else if(c)y=s.split("/");else{for(y=i.split("/");y.length>1&&po(y)==="";)y.pop();const h=s.split("/");for(let S=0,v=h.length;S<v;S++){const A=h[S];A===""?S?S===v-1&&y.push(A):y=[A]:A===".."?y.pop():A==="."||y.push(A)}}y.length>1&&(po(y)===""?l==="never"&&y.pop():l==="always"&&y.push(""));const p=Wu(y.join("/"))||"/";return m&&u&&u.set(m,p),p}function Bv(i){const s=new Map(i.map(c=>[encodeURIComponent(c),c])),l=Array.from(s.keys()).map(c=>c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),u=new RegExp(l,"g");return c=>c.replace(u,d=>s.get(d)??d)}function ku(i,s,l){const u=s[i];return typeof u!="string"?u:i==="_splat"?/^[a-zA-Z0-9\-._~!/]*$/.test(u)?u:u.split("/").map(c=>Tm(c,l)).join("/"):Tm(u,l)}function Em({path:i,params:s,decoder:l,...u}){let c=!1;const d=Object.create(null);if(!i||i==="/")return{interpolatedPath:"/",usedParams:d,isMissingParams:c};if(!i.includes("$"))return{interpolatedPath:i,usedParams:d,isMissingParams:c};const m=i.length;let y=0,p,h="";for(;y<m;){const S=y;p=ip(i,S,p);const v=p[5];if(y=v+1,S===v)continue;const A=p[0];if(A===0){h+="/"+i.substring(S,v);continue}if(A===2){const b=s._splat;d._splat=b,d["*"]=b;const _=i.substring(S,p[1]),C=i.substring(p[4],v);if(!b){c=!0,(_||C)&&(h+="/"+_+C);continue}const D=ku("_splat",s,l);h+="/"+_+D+C;continue}if(A===1){const b=i.substring(p[2],p[3]);!c&&!(b in s)&&(c=!0),d[b]=s[b];const _=i.substring(S,p[1]),C=i.substring(p[4],v),D=ku(b,s,l)??"undefined";h+="/"+_+D+C;continue}if(A===3){const b=i.substring(p[2],p[3]),_=s[b];if(_==null)continue;d[b]=_;const C=i.substring(S,p[1]),D=i.substring(p[4],v),z=ku(b,s,l)??"";h+="/"+C+z+D;continue}}return i.endsWith("/")&&(h+="/"),{usedParams:d,interpolatedPath:h||"/",isMissingParams:c}}function Tm(i,s){const l=encodeURIComponent(i);return s?.(l)??l}function Hv(i={}){if(i.isNotFound=!0,i.throw)throw i;return i}function it(i){return i?.isNotFound===!0}function jv(){try{return typeof window<"u"&&typeof window.sessionStorage=="object"?window.sessionStorage:void 0}catch{return}}const qv="tsr-scroll-restoration-v1_3";function Gv(){const i=jv();if(!i)return null;let s={};try{const u=JSON.parse(i.getItem("tsr-scroll-restoration-v1_3")||"{}");ci(u)&&(s=u)}catch{}return{get state(){return s},set:u=>{s=Vn(u,s)||s},persist:()=>{try{i.setItem(qv,JSON.stringify(s))}catch{}}}}const _m=Gv(),Yv=i=>i.state.__TSR_key||i.href;function Qv(i){const s=[];let l;for(;l=i.parentNode;)s.push(`${i.tagName}:nth-child(${Array.prototype.indexOf.call(l.children,i)+1})`),i=l;return`${s.reverse().join(" > ")}`.toLowerCase()}let Ps=!1;const co="window",Rm="data-scroll-restoration-id";function Pv(i,s){if(!_m)return;const l=_m;if((i.options.scrollRestoration??!1)&&(i.isScrollRestoring=!0),i.isScrollRestorationSetup||!l)return;i.isScrollRestorationSetup=!0,Ps=!1;const u=i.options.getScrollRestorationKey||Yv,c=new Map;window.history.scrollRestoration="manual";const d=y=>{if(!(Ps||!i.isScrollRestoring))if(y.target===document||y.target===window)c.set(co,{scrollX:window.scrollX||0,scrollY:window.scrollY||0});else{const p=y.target;c.set(p,{scrollX:p.scrollLeft||0,scrollY:p.scrollTop||0})}},m=y=>{if(!i.isScrollRestoring||!y||c.size===0||!l)return;const p=l.state[y]||={};for(const[h,S]of c){let v;if(h===co)v=co;else if(h.isConnected){const A=h.getAttribute(Rm);v=A?`[${Rm}="${A}"]`:Qv(h)}v&&(p[v]=S)}};document.addEventListener("scroll",d,!0),i.subscribe("onBeforeLoad",y=>{m(y.fromLocation?u(y.fromLocation):void 0),c.clear()}),window.addEventListener("pagehide",()=>{m(u(i.stores.resolvedLocation.get()??i.stores.location.get())),l.persist()}),i.subscribe("onRendered",y=>{const p=u(y.toLocation),h=i.options.scrollRestorationBehavior,S=i.options.scrollToTopSelectors;if(c.clear(),!i.resetNextScroll){i.resetNextScroll=!0;return}if(!(typeof i.options.scrollRestoration=="function"&&!i.options.scrollRestoration({location:i.latestLocation}))){Ps=!0;try{const v=i.isScrollRestoring?l.state[p]:void 0;let A=!1;if(v)for(const b in v){const _=v[b];if(!ci(_))continue;const{scrollX:C,scrollY:D}=_;if(!(!Number.isFinite(C)||!Number.isFinite(D))){if(b===co)window.scrollTo({top:D,left:C,behavior:h}),A=!0;else if(b){let z;try{z=document.querySelector(b)}catch{continue}z&&(z.scrollLeft=C,z.scrollTop=D,A=!0)}}}if(!A){const b=i.history.location.hash.slice(1);if(b){const _=window.history.state?.__hashScrollIntoViewOptions??!0;if(_){const C=document.getElementById(b);C&&C.scrollIntoView(_)}}else{const _={top:0,left:0,behavior:h};if(window.scrollTo(_),S)for(const C of S){if(C===co)continue;const D=typeof C=="function"?C():document.querySelector(C);D&&D.scrollTo(_)}}}}finally{Ps=!1}i.isScrollRestoring&&l.set(v=>(v[p]||={},v))}})}function Vv(i,s=String){const l=new URLSearchParams;for(const u in i){const c=i[u];c!==void 0&&l.set(u,s(c))}return l.toString()}function zu(i){return i?i==="false"?!1:i==="true"?!0:+i*0===0&&+i+""===i?+i:i:""}function Iv(i){const s=new URLSearchParams(i),l=Object.create(null);for(const[u,c]of s.entries()){const d=l[u];d==null?l[u]=zu(c):Array.isArray(d)?d.push(zu(c)):l[u]=[d,zu(c)]}return l}const Xv=Fv(JSON.parse),Kv=Zv(JSON.stringify,JSON.parse);function Fv(i){return s=>{s[0]==="?"&&(s=s.substring(1));const l=Iv(s);for(const u in l){const c=l[u];if(typeof c=="string")try{l[u]=i(c)}catch{}}return l}}function Zv(i,s){const l=typeof s=="function";function u(c){if(typeof c=="object"&&c!==null)try{return i(c)}catch{}else if(l&&typeof c=="string")try{return s(c),i(c)}catch{}return c}return c=>{const d=Vv(c,u);return d?`?${d}`:""}}const ya="__root__";function Jv(i){if(i.statusCode=i.statusCode||i.code||307,!i._builtLocation&&!i.reloadDocument&&typeof i.href=="string")try{new URL(i.href),i.reloadDocument=!0}catch{}const s=new Headers(i.headers);i.href&&s.get("Location")===null&&s.set("Location",i.href);const l=new Response(null,{status:i.statusCode,headers:s});if(l.options=i,i.throw)throw l;return l}function pt(i){return i instanceof Response&&!!i.options}function Wv(i){return{input:({url:s})=>{for(const l of i)s=Gu(l,s);return s},output:({url:s})=>{for(let l=i.length-1;l>=0;l--)s=up(i[l],s);return s}}}function $v(i){const s=rp(i.basepath),l=`/${s}`,u=`${l}/`,c=i.caseSensitive?l:l.toLowerCase(),d=i.caseSensitive?u:u.toLowerCase();return{input:({url:m})=>{const y=i.caseSensitive?m.pathname:m.pathname.toLowerCase();return y===c?m.pathname="/":y.startsWith(d)&&(m.pathname=m.pathname.slice(l.length)),m},output:({url:m})=>(m.pathname=Ks(["/",s,m.pathname]),m)}}function Gu(i,s){const l=i?.input?.({url:s});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return s}function up(i,s){const l=i?.output?.({url:s});if(l){if(typeof l=="string")return new URL(l);if(l instanceof URL)return l}return s}function eS(i,s){const{createMutableStore:l,createReadonlyStore:u,batch:c,init:d}=s,m=new Map,y=new Map,p=new Map,h=l(i.status),S=l(i.loadedAt),v=l(i.isLoading),A=l(i.isTransitioning),b=l(i.location),_=l(i.resolvedLocation),C=l(i.statusCode),D=l(i.redirect),z=l([]),q=l([]),Y=l([]),G=u(()=>Lu(m,z.get())),$=u(()=>Lu(y,q.get())),K=u(()=>Lu(p,Y.get())),j=u(()=>z.get()[0]),Q=u(()=>z.get().some(P=>m.get(P)?.get().status==="pending")),F=u(()=>({locationHref:b.get().href,resolvedLocationHref:_.get()?.href,status:h.get()})),se=u(()=>({status:h.get(),loadedAt:S.get(),isLoading:v.get(),isTransitioning:A.get(),matches:G.get(),location:b.get(),resolvedLocation:_.get(),statusCode:C.get(),redirect:D.get()})),ie=yo(64);function ae(P){let ne=ie.get(P);return ne||(ne=u(()=>{const Se=z.get();for(const we of Se){const T=m.get(we);if(T&&T.routeId===P)return T.get()}}),ie.set(P,ne)),ne}const Ie={status:h,loadedAt:S,isLoading:v,isTransitioning:A,location:b,resolvedLocation:_,statusCode:C,redirect:D,matchesId:z,pendingIds:q,cachedIds:Y,matches:G,pendingMatches:$,cachedMatches:K,firstId:j,hasPending:Q,matchRouteDeps:F,matchStores:m,pendingMatchStores:y,cachedMatchStores:p,__store:se,getRouteMatchStore:ae,setMatches:ke,setPending:Be,setCached:L};ke(i.matches),d?.(Ie);function ke(P){Nu(P,m,z,l,c)}function Be(P){Nu(P,y,q,l,c)}function L(P){Nu(P,p,Y,l,c)}return Ie}function Lu(i,s){const l=[];for(const u of s){const c=i.get(u);c&&l.push(c.get())}return l}function Nu(i,s,l,u,c){const d=i.map(y=>y.id),m=new Set(d);c(()=>{for(const y of s.keys())m.has(y)||s.delete(y);for(const y of i){const p=s.get(y.id);if(!p){const h=u(y);h.routeId=y.routeId,s.set(y.id,h);continue}p.routeId=y.routeId,p.get()!==y&&p.set(y)}Tv(l.get(),d)||l.set(d)})}const Yu=i=>{if(!i.rendered)return i.rendered=!0,i.onReady?.()},tS=i=>i.stores.matchesId.get().some(s=>i.stores.matchStores.get(s)?.get()._forcePending),ol=(i,s)=>!!(i.preload&&!i.router.stores.matchStores.has(s)),va=(i,s,l=!0)=>{const u={...i.router.options.context??{}},c=l?s:s-1;for(let d=0;d<=c;d++){const m=i.matches[d];if(!m)continue;const y=i.router.getMatch(m.id);y&&Object.assign(u,y.__routeContext,y.__beforeLoadContext)}return u},Cm=(i,s)=>{if(!i.matches.length)return;const l=s.routeId,u=i.matches.findIndex(m=>m.routeId===i.router.routeTree.id),c=u>=0?u:0;let d=l?i.matches.findIndex(m=>m.routeId===l):i.firstBadMatchIndex??i.matches.length-1;d<0&&(d=c);for(let m=d;m>=0;m--){const y=i.matches[m];if(i.router.looseRoutesById[y.routeId].options.notFoundComponent)return m}return l?d:c},Xn=(i,s,l)=>{if(!(!pt(l)&&!it(l)))throw pt(l)&&l.redirectHandled&&!l.options.reloadDocument||(s&&(s._nonReactive.beforeLoadPromise?.resolve(),s._nonReactive.loaderPromise?.resolve(),s._nonReactive.beforeLoadPromise=void 0,s._nonReactive.loaderPromise=void 0,s._nonReactive.error=l,i.updateMatch(s.id,u=>({...u,status:pt(l)?"redirected":it(l)?"notFound":u.status==="pending"?"success":u.status,context:va(i,s.index),isFetching:!1,error:l})),it(l)&&!l.routeId&&(l.routeId=s.routeId),s._nonReactive.loadPromise?.resolve()),pt(l)&&(i.rendered=!0,l.options._fromLocation=i.location,l.redirectHandled=!0,l=i.router.resolveRedirect(l))),l},cp=(i,s)=>{const l=i.router.getMatch(s);return!!(!l||l._nonReactive.dehydrated)},xm=(i,s,l)=>{const u=va(i,l);i.updateMatch(s,c=>({...c,context:u}))},fo=(i,s,l,u)=>{const{id:c,routeId:d}=i.matches[s],m=i.router.looseRoutesById[d];if(l instanceof Promise)throw l;l.routerCode=u,i.firstBadMatchIndex??=s,Xn(i,i.router.getMatch(c),l);try{m.options.onError?.(l)}catch(y){l=y,Xn(i,i.router.getMatch(c),l)}i.updateMatch(c,y=>(y._nonReactive.beforeLoadPromise?.resolve(),y._nonReactive.beforeLoadPromise=void 0,y._nonReactive.loadPromise?.resolve(),{...y,error:l,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController})),!i.preload&&!pt(l)&&!it(l)&&(i.serialError??=l)},fp=(i,s,l,u)=>{if(u._nonReactive.pendingTimeout!==void 0)return;const c=l.options.pendingMs??i.router.options.defaultPendingMs;if(i.onReady&&!ol(i,s)&&(l.options.loader||l.options.beforeLoad||hp(l))&&typeof c=="number"&&c!==1/0&&(l.options.pendingComponent??i.router.options?.defaultPendingComponent)){const d=setTimeout(()=>{Yu(i)},c);u._nonReactive.pendingTimeout=d}},nS=(i,s,l)=>{const u=i.router.getMatch(s);if(!u._nonReactive.beforeLoadPromise&&!u._nonReactive.loaderPromise)return;fp(i,s,l,u);const c=()=>{const d=i.router.getMatch(s);d.preload&&(d.status==="redirected"||d.status==="notFound")&&Xn(i,d,d.error)};return u._nonReactive.beforeLoadPromise?u._nonReactive.beforeLoadPromise.then(c):c()},aS=(i,s,l,u)=>{const c=i.router.getMatch(s);let d=c._nonReactive.loadPromise;c._nonReactive.loadPromise=fi(()=>{d?.resolve(),d=void 0});const{paramsError:m,searchError:y}=c;m&&fo(i,l,m,"PARSE_PARAMS"),y&&fo(i,l,y,"VALIDATE_SEARCH"),fp(i,s,u,c);const p=new AbortController;let h=!1;const S=()=>{h||(h=!0,i.updateMatch(s,G=>({...G,isFetching:"beforeLoad",fetchCount:G.fetchCount+1,abortController:p})))},v=()=>{c._nonReactive.beforeLoadPromise?.resolve(),c._nonReactive.beforeLoadPromise=void 0,i.updateMatch(s,G=>({...G,isFetching:!1}))};if(!u.options.beforeLoad){i.router.batch(()=>{S(),v()});return}c._nonReactive.beforeLoadPromise=fi();const A={...va(i,l,!1),...c.__routeContext},{search:b,params:_,cause:C}=c,D=ol(i,s),z={search:b,abortController:p,params:_,preload:D,context:A,location:i.location,navigate:G=>i.router.navigate({...G,_fromLocation:i.location}),buildLocation:i.router.buildLocation,cause:D?"preload":C,matches:i.matches,routeId:u.id,...i.router.options.additionalContext},q=G=>{if(G===void 0){i.router.batch(()=>{S(),v()});return}(pt(G)||it(G))&&(S(),fo(i,l,G,"BEFORE_LOAD")),i.router.batch(()=>{S(),i.updateMatch(s,$=>({...$,__beforeLoadContext:G})),v()})};let Y;try{if(Y=u.options.beforeLoad(z),go(Y))return S(),Y.catch(G=>{fo(i,l,G,"BEFORE_LOAD")}).then(q)}catch(G){S(),fo(i,l,G,"BEFORE_LOAD")}q(Y)},iS=(i,s)=>{const{id:l,routeId:u}=i.matches[s],c=i.router.looseRoutesById[u],d=()=>y(),m=()=>aS(i,l,s,c),y=()=>{if(cp(i,l))return;const p=nS(i,l,c);return go(p)?p.then(m):m()};return d()},oS=(i,s,l)=>{const u=i.router.getMatch(s);if(!u||!l.options.head&&!l.options.scripts&&!l.options.headers)return;const c={ssr:i.router.options.ssr,matches:i.matches,match:u,params:u.params,loaderData:u.loaderData};return Promise.all([l.options.head?.(c),l.options.scripts?.(c),l.options.headers?.(c)]).then(([d,m,y])=>({meta:d?.meta,links:d?.links,headScripts:d?.scripts,headers:y,scripts:m,styles:d?.styles}))},dp=(i,s,l,u,c)=>{const d=s[u-1],{params:m,loaderDeps:y,abortController:p,cause:h}=i.router.getMatch(l),S=va(i,u),v=ol(i,l);return{params:m,deps:y,preload:!!v,parentMatchPromise:d,abortController:p,context:S,location:i.location,navigate:A=>i.router.navigate({...A,_fromLocation:i.location}),cause:v?"preload":h,route:c,...i.router.options.additionalContext}},Om=async(i,s,l,u,c)=>{try{const d=i.router.getMatch(l);try{(!(ep??i.router.isServer)||d.ssr===!0)&&vo(c);const m=c.options.loader,y=typeof m=="function"?m:m?.handler,p=y?.(dp(i,s,l,u,c)),h=!!y&&go(p);if((h||c._lazyPromise||c._componentsPromise||c.options.head||c.options.scripts||c.options.headers||d._nonReactive.minPendingPromise)&&i.updateMatch(l,v=>({...v,isFetching:"loader"})),y){const v=h?await p:p;Xn(i,i.router.getMatch(l),v),v!==void 0&&i.updateMatch(l,A=>({...A,loaderData:v}))}c._lazyPromise&&await c._lazyPromise;const S=d._nonReactive.minPendingPromise;S&&await S,c._componentsPromise&&await c._componentsPromise,i.updateMatch(l,v=>({...v,error:void 0,context:va(i,u),status:"success",isFetching:!1,updatedAt:Date.now()}))}catch(m){let y=m;if(y?.name==="AbortError"){if(d.abortController.signal.aborted){d._nonReactive.loaderPromise?.resolve(),d._nonReactive.loaderPromise=void 0;return}i.updateMatch(l,h=>({...h,status:h.status==="pending"?"success":h.status,isFetching:!1,context:va(i,u)}));return}const p=d._nonReactive.minPendingPromise;p&&await p,it(m)&&await c.options.notFoundComponent?.preload?.(),Xn(i,i.router.getMatch(l),m);try{c.options.onError?.(m)}catch(h){y=h,Xn(i,i.router.getMatch(l),h)}!pt(y)&&!it(y)&&await vo(c,["errorComponent"]),i.updateMatch(l,h=>({...h,error:y,context:va(i,u),status:"error",isFetching:!1}))}}catch(d){const m=i.router.getMatch(l);m&&(m._nonReactive.loaderPromise=void 0),Xn(i,m,d)}},sS=async(i,s,l)=>{async function u(b,_,C,D,z){const q=Date.now()-_.updatedAt,Y=b?z.options.preloadStaleTime??i.router.options.defaultPreloadStaleTime??3e4:z.options.staleTime??i.router.options.defaultStaleTime??0,G=z.options.shouldReload,$=typeof G=="function"?G(dp(i,s,c,l,z)):G,{status:K,invalid:j}=D,Q=q>=Y&&(!!i.forceStaleReload||D.cause==="enter"||C!==void 0&&C!==D.id);m=K==="success"&&(j||($??Q)),b&&z.options.preload===!1||(m&&!i.sync&&S?(y=!0,(async()=>{try{await Om(i,s,c,l,z);const F=i.router.getMatch(c);F._nonReactive.loaderPromise?.resolve(),F._nonReactive.loadPromise?.resolve(),F._nonReactive.loaderPromise=void 0,F._nonReactive.loadPromise=void 0}catch(F){pt(F)&&await i.router.navigate(F.options)}})()):K!=="success"||m?await Om(i,s,c,l,z):xm(i,c,l))}const{id:c,routeId:d}=i.matches[l];let m=!1,y=!1;const p=i.router.looseRoutesById[d],h=p.options.loader,S=((typeof h=="function"?void 0:h?.staleReloadMode)??i.router.options.defaultStaleReloadMode)!=="blocking";if(cp(i,c)){if(!i.router.getMatch(c))return i.matches[l];xm(i,c,l)}else{const b=i.router.getMatch(c),_=i.router.stores.matchesId.get()[l],C=(_&&i.router.stores.matchStores.get(_)||null)?.routeId===d?_:i.router.stores.matches.get().find(z=>z.routeId===d)?.id,D=ol(i,c);if(b._nonReactive.loaderPromise){if(b.status==="success"&&!i.sync&&!b.preload&&S)return b;await b._nonReactive.loaderPromise;const z=i.router.getMatch(c),q=z._nonReactive.error||z.error;q&&Xn(i,z,q),z.status==="pending"&&await u(D,b,C,z,p)}else{const z=D&&!i.router.stores.matchStores.has(c),q=i.router.getMatch(c);q._nonReactive.loaderPromise=fi(),z!==q.preload&&i.updateMatch(c,Y=>({...Y,preload:z})),await u(D,b,C,q,p)}}const v=i.router.getMatch(c);y||(v._nonReactive.loaderPromise?.resolve(),v._nonReactive.loadPromise?.resolve(),v._nonReactive.loadPromise=void 0),clearTimeout(v._nonReactive.pendingTimeout),v._nonReactive.pendingTimeout=void 0,y||(v._nonReactive.loaderPromise=void 0),v._nonReactive.dehydrated=void 0;const A=y?v.isFetching:!1;return A!==v.isFetching||v.invalid!==!1?(i.updateMatch(c,b=>({...b,isFetching:A,invalid:!1})),i.router.getMatch(c)):v};async function Mm(i){const s=i,l=[];tS(s.router)&&Yu(s);let u;for(let A=0;A<s.matches.length;A++){try{const b=iS(s,A);go(b)&&await b}catch(b){if(pt(b))throw b;if(it(b))u=b;else if(!s.preload)throw b;break}if(s.serialError||s.firstBadMatchIndex!=null)break}const c=s.firstBadMatchIndex??s.matches.length,d=u&&!s.preload?Cm(s,u):void 0,m=u&&s.preload?0:d!==void 0?Math.min(d+1,c):c;let y,p;for(let A=0;A<m;A++)l.push(sS(s,l,A));try{await Promise.all(l)}catch{const A=await Promise.allSettled(l);for(const b of A){if(b.status!=="rejected")continue;const _=b.reason;if(pt(_))throw _;it(_)?y??=_:p??=_}if(p!==void 0)throw p}const h=y??(u&&!s.preload?u:void 0);let S=s.firstBadMatchIndex!==void 0?s.firstBadMatchIndex:s.matches.length-1;if(!h&&u&&s.preload)return s.matches;if(h){const A=Cm(s,h);A===void 0&&yn();const b=s.matches[A],_=s.router.looseRoutesById[b.routeId],C=s.router.options?.defaultNotFoundComponent;!_.options.notFoundComponent&&C&&(_.options.notFoundComponent=C),h.routeId=b.routeId;const D=b.routeId===s.router.routeTree.id;s.updateMatch(b.id,z=>({...z,...D?{status:"success",globalNotFound:!0,error:void 0}:{status:"notFound",error:h},isFetching:!1})),S=A,await vo(_,["notFoundComponent"])}else if(!s.preload){const A=s.matches[0];A.globalNotFound||s.router.getMatch(A.id)?.globalNotFound&&s.updateMatch(A.id,b=>({...b,globalNotFound:!1,error:void 0}))}if(s.serialError&&s.firstBadMatchIndex!==void 0){const A=s.router.looseRoutesById[s.matches[s.firstBadMatchIndex].routeId];await vo(A,["errorComponent"])}for(let A=0;A<=S;A++){const{id:b,routeId:_}=s.matches[A],C=s.router.looseRoutesById[_];try{const D=oS(s,b,C);if(D){const z=await D;s.updateMatch(b,q=>({...q,...z}))}}catch(D){console.error(`Error executing head for route ${_}:`,D)}}const v=Yu(s);if(go(v)&&await v,h)throw h;if(s.serialError&&!s.preload&&!s.onReady)throw s.serialError;return s.matches}function Dm(i,s){const l=s.map(u=>i.options[u]?.preload?.()).filter(Boolean);if(l.length!==0)return Promise.all(l)}function vo(i,s=Fs){!i._lazyLoaded&&i._lazyPromise===void 0&&(i.lazyFn?i._lazyPromise=i.lazyFn().then(u=>{const{id:c,...d}=u.options;Object.assign(i.options,d),i._lazyLoaded=!0,i._lazyPromise=void 0}):i._lazyLoaded=!0);const l=()=>i._componentsLoaded?void 0:s===Fs?(()=>{if(i._componentsPromise===void 0){const u=Dm(i,Fs);u?i._componentsPromise=u.then(()=>{i._componentsLoaded=!0,i._componentsPromise=void 0}):i._componentsLoaded=!0}return i._componentsPromise})():Dm(i,s);return i._lazyPromise?i._lazyPromise.then(l):l()}function hp(i){for(const s of Fs)if(i.options[s]?.preload)return!0;return!1}const Fs=["component","errorComponent","pendingComponent","notFoundComponent"];var Kn="__TSR_index",km="popstate",zm="beforeunload";function lS(i){let s=i.getLocation();const l=new Set,u=m=>{s=i.getLocation(),l.forEach(y=>y({location:s,action:m}))},c=m=>{i.notifyOnIndexChange??!0?u(m):s=i.getLocation()},d=async({task:m,navigateOpts:y,...p})=>{if(y?.ignoreBlocker??!1){m();return}const h=i.getBlockers?.()??[],S=p.type==="PUSH"||p.type==="REPLACE";if(typeof document<"u"&&h.length&&S)for(const v of h){const A=el(p.path,p.state);if(await v.blockerFn({currentLocation:s,nextLocation:A,action:p.type})){i.onBlocked?.();return}}m()};return{get location(){return s},get length(){return i.getLength()},subscribers:l,subscribe:m=>(l.add(m),()=>{l.delete(m)}),push:(m,y,p)=>{const h=s.state[Kn];y=Lm(h+1,y),d({task:()=>{i.pushState(m,y),u({type:"PUSH"})},navigateOpts:p,type:"PUSH",path:m,state:y})},replace:(m,y,p)=>{const h=s.state[Kn];y=Lm(h,y),d({task:()=>{i.replaceState(m,y),u({type:"REPLACE"})},navigateOpts:p,type:"REPLACE",path:m,state:y})},go:(m,y)=>{d({task:()=>{i.go(m),c({type:"GO",index:m})},navigateOpts:y,type:"GO"})},back:m=>{d({task:()=>{i.back(m?.ignoreBlocker??!1),c({type:"BACK"})},navigateOpts:m,type:"BACK"})},forward:m=>{d({task:()=>{i.forward(m?.ignoreBlocker??!1),c({type:"FORWARD"})},navigateOpts:m,type:"FORWARD"})},canGoBack:()=>s.state[Kn]!==0,createHref:m=>i.createHref(m),block:m=>{if(!i.setBlockers)return()=>{};const y=i.getBlockers?.()??[];return i.setBlockers([...y,m]),()=>{const p=i.getBlockers?.()??[];i.setBlockers?.(p.filter(h=>h!==m))}},flush:()=>i.flush?.(),destroy:()=>i.destroy?.(),notify:u}}function Lm(i,s){s||(s={});const l=$u();return{...s,key:l,__TSR_key:l,[Kn]:i}}function rS(i){const s=typeof document<"u"?window:void 0,l=s.history.pushState,u=s.history.replaceState;let c=[];const d=()=>c,m=Q=>c=Q,y=(Q=>Q),p=(()=>el(`${s.location.pathname}${s.location.search}${s.location.hash}`,s.history.state));if(!s.history.state?.__TSR_key&&!s.history.state?.key){const Q=$u();s.history.replaceState({[Kn]:0,key:Q,__TSR_key:Q},"")}let h=p(),S,v=!1,A=!1,b=!1,_=!1;const C=()=>h;let D,z;const q=()=>{D&&(j._ignoreSubscribers=!0,(D.isPush?s.history.pushState:s.history.replaceState)(D.state,"",D.href),j._ignoreSubscribers=!1,D=void 0,z=void 0,S=void 0)},Y=(Q,F,se)=>{const ie=y(F);z||(S=h),h=el(F,se),D={href:ie,state:se,isPush:D?.isPush||Q==="push"},z||(z=Promise.resolve().then(()=>q()))},G=Q=>{h=p(),j.notify({type:Q})},$=async()=>{if(A){A=!1;return}const Q=p(),F=Q.state[Kn]-h.state[Kn],se=F===1,ie=F===-1,ae=!se&&!ie||v;v=!1;const Ie=ae?"GO":ie?"BACK":"FORWARD",ke=ae?{type:"GO",index:F}:{type:ie?"BACK":"FORWARD"};if(b)b=!1;else{const Be=d();if(typeof document<"u"&&Be.length){for(const L of Be)if(await L.blockerFn({currentLocation:h,nextLocation:Q,action:Ie})){A=!0,s.history.go(1),j.notify(ke);return}}}h=p(),j.notify(ke)},K=Q=>{if(_){_=!1;return}let F=!1;const se=d();if(typeof document<"u"&&se.length)for(const ie of se){const ae=ie.enableBeforeUnload??!0;if(ae===!0){F=!0;break}if(typeof ae=="function"&&ae()===!0){F=!0;break}}if(F)return Q.preventDefault(),Q.returnValue=""},j=lS({getLocation:C,getLength:()=>s.history.length,pushState:(Q,F)=>Y("push",Q,F),replaceState:(Q,F)=>Y("replace",Q,F),back:Q=>(Q&&(b=!0),_=!0,s.history.back()),forward:Q=>{Q&&(b=!0),_=!0,s.history.forward()},go:Q=>{v=!0,s.history.go(Q)},createHref:Q=>y(Q),flush:q,destroy:()=>{s.history.pushState=l,s.history.replaceState=u,s.removeEventListener(zm,K,{capture:!0}),s.removeEventListener(km,$)},onBlocked:()=>{S&&h!==S&&(h=S)},getBlockers:d,setBlockers:m,notifyOnIndexChange:!1});return s.addEventListener(zm,K,{capture:!0}),s.addEventListener(km,$),s.history.pushState=function(...Q){const F=l.apply(s.history,Q);return j._ignoreSubscribers||G("PUSH"),F},s.history.replaceState=function(...Q){const F=u.apply(s.history,Q);return j._ignoreSubscribers||G("REPLACE"),F},j}function uS(i){let s=i.replace(/[\x00-\x1f\x7f]/g,"");return s.startsWith("//")&&(s="/"+s.replace(/^\/+/,"")),s}function el(i,s){const l=uS(i),u=l.indexOf("#"),c=l.indexOf("?"),d=$u();return{href:l,pathname:l.substring(0,u>0?c>0?Math.min(u,c):u:c>0?c:l.length),hash:u>-1?l.substring(u):"",search:c>-1?l.slice(c,u===-1?void 0:u):"",state:s||{[Kn]:0,key:d,__TSR_key:d}}}function $u(){return(Math.random()+1).toString(36).substring(7)}function ui(i,s){const l=s,u=i;return{fromLocation:l,toLocation:u,pathChanged:l?.pathname!==u.pathname,hrefChanged:l?.href!==u.href,hashChanged:l?.hash!==u.hash}}var cS=class{constructor(i,s){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.routeBranchCache=new WeakMap,this.startTransition=l=>l(),this.update=l=>{const u=this.options,c=this.basepath??u?.basepath??"/",d=this.basepath===void 0,m=u?.rewrite;if(this.options={...u,...l},this.isServer=this.options.isServer??typeof document>"u",this.protocolAllowlist=new Set(this.options.protocolAllowlist),this.options.pathParamsAllowedCharacters&&(this.pathParamsDecoder=Bv(this.options.pathParamsAllowedCharacters)),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.history=rS()),this.origin=this.options.origin,this.origin||(window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let S;this.resolvePathCache=yo(1e3),S=this.buildRouteTree(),this.setRoutes(S)}if(!this.stores&&this.latestLocation){const S=this.getStoreConfig(this);this.batch=S.batch,this.stores=eS(dS(this.latestLocation),S),Pv(this)}let y=!1;const p=this.options.basepath??"/",h=this.options.rewrite;if(d||c!==p||m!==h){this.basepath=p;const S=[],v=rp(p);v&&v!=="/"&&S.push($v({basepath:p})),h&&S.push(h),this.rewrite=S.length===0?void 0:S.length===1?S[0]:Wv(S),this.history&&this.updateLatestLocation(),y=!0}y&&this.stores&&this.stores.location.set(this.latestLocation),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a))"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const l=Dv(this.routeTree,this.options.caseSensitive,(u,c)=>{u.init({originalIndex:c})});return this.options.routeMasks&&Rv(this.options.routeMasks,l.processedTree),l},this.subscribe=(l,u)=>{const c={eventType:l,fn:u};return this.subscribers.add(c),()=>{this.subscribers.delete(c)}},this.emit=l=>{this.subscribers.forEach(u=>{u.eventType===l.type&&u.fn(l)})},this.parseLocation=(l,u)=>{const c=({pathname:p,search:h,hash:S,href:v,state:A})=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)){const z=this.options.parseSearch(h),q=this.options.stringifySearch(z);return{href:p+q+S,publicHref:p+q+S,pathname:uo(p).path,external:!1,searchStr:q,search:ma(u?.search,z),hash:uo(S.slice(1)).path,state:pa(u?.state,A)}}const b=new URL(v,this.origin),_=Gu(this.rewrite,b),C=this.options.parseSearch(_.search),D=this.options.stringifySearch(C);return _.search=D,{href:_.href.replace(_.origin,""),publicHref:v,pathname:uo(_.pathname).path,external:!!this.rewrite&&_.origin!==this.origin,searchStr:D,search:ma(u?.search,C),hash:uo(_.hash.slice(1)).path,state:pa(u?.state,A)}},d=c(l),{__tempLocation:m,__tempKey:y}=d.state;if(m&&(!y||y===this.tempLocationKey)){const p=c(m);return p.state.key=d.state.key,p.state.__TSR_key=d.state.__TSR_key,delete p.state.__tempLocation,{...p,maskedLocation:d}}return d},this.resolvePathWithBase=(l,u)=>Uv({base:l,to:u.includes("//")?Wu(u):u,trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(l,u,c)=>typeof l=="string"?this.matchRoutesInternal({pathname:l,search:u},c):this.matchRoutesInternal(l,u),this.getMatchedRoutes=l=>hS({pathname:l,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=l=>{const u=this.getMatch(l);u&&(u.abortController.abort(),clearTimeout(u._nonReactive.pendingTimeout),u._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{this.stores.pendingIds.get().forEach(l=>{this.cancelMatch(l)}),this.stores.matchesId.get().forEach(l=>{if(this.stores.pendingMatchStores.has(l))return;const u=this.stores.matchStores.get(l)?.get();u&&(u.status==="pending"||u.isFetching==="loader")&&this.cancelMatch(l)})},this.buildLocation=l=>{const u=(d={})=>{const m=d._fromLocation||this.pendingBuiltLocation||this.latestLocation,y=this.matchRoutesLightweight(m);d.from;const p=d.unsafeRelative==="path"?m.pathname:d.from??y.fullPath,h=d.to?`${d.to}`:void 0,S=y.search,v=Object.assign(Object.create(null),y.params),A=h?.charCodeAt(0)===47?"/":this.resolvePathWithBase(p,"."),b=h?this.resolvePathWithBase(A,h):A,_=d.params===!1||d.params===null?Object.create(null):(d.params??!0)===!0?v:Object.assign(v,Vn(d.params,v)),C=this.routesByPath[gn(b)];let D;if(C)D=this.getRouteBranch(C);else if(b.includes("$"))D=[];else{const ie=this.getMatchedRoutes(b);D=ie.matchedRoutes,this.options.notFoundRoute&&(!ie.foundRoute||ie.foundRoute.path!=="/"&&ie.routeParams["**"])&&(D=[...D,this.options.notFoundRoute])}if(D.length&&np(_))for(const ie of D){const ae=ie.options.params?.stringify??ie.options.stringifyParams;if(ae)try{Object.assign(_,ae(_))}catch{}}const z=l.leaveParams?b:uo(Em({path:b,params:_,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath).path;let q=S;if(l._includeValidateSearch&&this.options.search?.strict){const ie={};D.forEach(ae=>{if(ae.options.validateSearch)try{Object.assign(ie,Zs(ae.options.validateSearch,{...ie,...q}))}catch{}}),q=ie}q=mS({search:q,dest:d,destRoutes:D,_includeValidateSearch:l._includeValidateSearch}),q=ma(S,q);const Y=this.options.stringifySearch(q),G=d.hash===!0?m.hash:d.hash?Vn(d.hash,m.hash):void 0,$=G?`#${G}`:"";let K=d.state===!0?m.state:d.state?Vn(d.state,m.state):{};K=pa(m.state,K);const j=`${z}${Y}${$}`;let Q,F,se=!1;if(this.rewrite){const ie=new URL(j,this.origin),ae=up(this.rewrite,ie);Q=ie.href.replace(ie.origin,""),ae.origin!==this.origin?(F=ae.href,se=!0):F=ae.pathname+ae.search+ae.hash}else Q=Ev(j),F=Q;return{publicHref:F,href:Q,pathname:z,search:q,searchStr:Y,state:K,hash:G??"",external:se,unmaskOnReload:d.unmaskOnReload}},c=(d={},m)=>{const y=u(d);let p=m?u(m):void 0;if(!p){const h=Object.create(null);if(this.options.routeMasks){const S=Cv(y.pathname,this.processedTree);if(S){Object.assign(h,S.rawParams);const{from:v,params:A,...b}=S.route,_=A===!1||A===null?Object.create(null):(A??!0)===!0?h:Object.assign(h,Vn(A,h));m={from:l.from,...b,params:_},p=u(m)}}}return p&&(y.maskedLocation=p),y};return l.mask?c(l,{from:l.from,...l.mask}):c(l)},this.commitLocation=async({viewTransition:l,ignoreBlocker:u,...c})=>{const d=()=>{const p=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];p.forEach(S=>{c.state[S]=this.latestLocation.state[S]});const h=Nt(c.state,this.latestLocation.state);return p.forEach(S=>{delete c.state[S]}),h},m=gn(this.latestLocation.href)===gn(c.href);let y=this.commitLocationPromise;if(this.commitLocationPromise=fi(()=>{y?.resolve(),y=void 0}),m&&d())this.load();else{let{maskedLocation:p,hashScrollIntoView:h,...S}=c;p&&(S={...p,state:{...p.state,__tempKey:void 0,__tempLocation:{...S,search:S.searchStr,state:{...S.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(S.unmaskOnReload??this.options.unmaskOnReload??!1)&&(S.state.__tempKey=this.tempLocationKey)),S.state.__hashScrollIntoViewOptions=h??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=l,this.history[c.replace?"replace":"push"](S.publicHref,S.state,{ignoreBlocker:u})}return this.resetNextScroll=c.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:l,resetScroll:u,hashScrollIntoView:c,viewTransition:d,ignoreBlocker:m,href:y,...p}={})=>{if(y){const v=this.history.location.state.__TSR_index,A=el(y,{__TSR_index:l?v:v+1}),b=new URL(A.pathname,this.origin);p.to=Gu(this.rewrite,b).pathname,p.search=this.options.parseSearch(A.search),p.hash=A.hash.slice(1)}const h=this.buildLocation({...p,_includeValidateSearch:!0});this.pendingBuiltLocation=h;const S=this.commitLocation({...h,viewTransition:d,replace:l,resetScroll:u,hashScrollIntoView:c,ignoreBlocker:m});return Promise.resolve().then(()=>{this.pendingBuiltLocation===h&&(this.pendingBuiltLocation=void 0)}),S},this.navigate=async({to:l,reloadDocument:u,href:c,publicHref:d,...m})=>{let y=!1;if(c)try{new URL(`${c}`),y=!0}catch{}if(y&&!u&&(u=!0),u){if(l!==void 0||!c){const h=this.buildLocation({to:l,...m});c=c??h.publicHref,d=d??h.publicHref}const p=!y&&d?d:c;if(Ws(p,this.protocolAllowlist))return Promise.resolve();if(!m.ignoreBlocker){const h=this.history.getBlockers?.()??[];for(const S of h)if(S?.blockerFn&&await S.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return m.replace?window.location.replace(p):window.location.href=p,Promise.resolve()}return this.buildAndCommitLocation({...m,href:c,to:l,_isNavigate:!0})},this.beforeLoad=()=>{this.cancelMatches(),this.updateLatestLocation();const l=this.matchRoutes(this.latestLocation),u=this.stores.cachedMatches.get().filter(c=>!l.some(d=>d.id===c.id));this.batch(()=>{this.stores.status.set("pending"),this.stores.statusCode.set(200),this.stores.isLoading.set(!0),this.stores.location.set(this.latestLocation),this.stores.setPending(l),this.stores.setCached(u)})},this.load=async l=>{let u,c,d;const m=this.stores.resolvedLocation.get()??this.stores.location.get();for(d=new Promise(p=>{this.startTransition(async()=>{try{this.beforeLoad();const h=this.latestLocation,S=ui(h,this.stores.resolvedLocation.get());this.stores.redirect.get()||this.emit({type:"onBeforeNavigate",...S}),this.emit({type:"onBeforeLoad",...S}),await Mm({router:this,sync:l?.sync,forceStaleReload:m.href===h.href,matches:this.stores.pendingMatches.get(),location:h,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let v=null,A=null,b=null,_=null;this.batch(()=>{const C=this.stores.pendingMatches.get(),D=C.length,z=this.stores.matches.get();v=D?z.filter(G=>!this.stores.pendingMatchStores.has(G.id)):null;const q=new Set;for(const G of this.stores.pendingMatchStores.values())G.routeId&&q.add(G.routeId);const Y=new Set;for(const G of this.stores.matchStores.values())G.routeId&&Y.add(G.routeId);A=D?z.filter(G=>!q.has(G.routeId)):null,b=D?C.filter(G=>!Y.has(G.routeId)):null,_=D?C.filter(G=>Y.has(G.routeId)):z,this.stores.isLoading.set(!1),this.stores.loadedAt.set(Date.now()),D&&(this.stores.setMatches(C),this.stores.setPending([]),this.stores.setCached([...this.stores.cachedMatches.get(),...v.filter(G=>G.status!=="error"&&G.status!=="notFound"&&G.status!=="redirected")]),this.clearExpiredCache())});for(const[C,D]of[[A,"onLeave"],[b,"onEnter"],[_,"onStay"]])if(C)for(const z of C)this.looseRoutesById[z.routeId].options[D]?.(z)})})}})}catch(h){pt(h)?(u=h,this.navigate({...u.options,replace:!0,ignoreBlocker:!0})):it(h)&&(c=h);const S=u?u.status:c?404:this.stores.matches.get().some(v=>v.status==="error")?500:200;this.batch(()=>{this.stores.statusCode.set(S),this.stores.redirect.set(u)})}this.latestLoadPromise===d&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),p()})}),this.latestLoadPromise=d,await d;this.latestLoadPromise&&d!==this.latestLoadPromise;)await this.latestLoadPromise;let y;this.hasNotFoundMatch()?y=404:this.stores.matches.get().some(p=>p.status==="error")&&(y=500),y!==void 0&&this.stores.statusCode.set(y)},this.startViewTransition=l=>{const u=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,u&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let c;if(typeof u=="object"&&this.isViewTransitionTypesSupported){const d=this.latestLocation,m=this.stores.resolvedLocation.get(),y=typeof u.types=="function"?u.types(ui(d,m)):u.types;if(y===!1){l();return}c={update:l,types:y}}else c=l;document.startViewTransition(c)}else l()},this.updateMatch=(l,u)=>{this.startTransition(()=>{const c=this.stores.pendingMatchStores.get(l);if(c){c.set(u);return}const d=this.stores.matchStores.get(l);if(d){d.set(u);return}const m=this.stores.cachedMatchStores.get(l);if(m){const y=u(m.get());y.status==="redirected"?this.stores.cachedMatchStores.delete(l)&&this.stores.cachedIds.set(p=>p.filter(h=>h!==l)):m.set(y)}})},this.getMatch=l=>this.stores.cachedMatchStores.get(l)?.get()??this.stores.pendingMatchStores.get(l)?.get()??this.stores.matchStores.get(l)?.get(),this.invalidate=l=>{const u=c=>l?.filter?.(c)??!0?{...c,invalid:!0,...l?.forcePending||c.status==="error"||c.status==="notFound"?{status:"pending",error:void 0}:void 0}:c;return this.batch(()=>{this.stores.setMatches(this.stores.matches.get().map(u)),this.stores.setCached(this.stores.cachedMatches.get().map(u)),this.stores.setPending(this.stores.pendingMatches.get().map(u))}),this.shouldViewTransition=!1,this.load({sync:l?.sync})},this.getParsedLocationHref=l=>l.publicHref||"/",this.resolveRedirect=l=>{const u=l.headers.get("Location");if(!l.options.href||l.options._builtLocation){const c=l.options._builtLocation??this.buildLocation(l.options),d=this.getParsedLocationHref(c);l.options.href=d,l.headers.set("Location",d)}else if(u)try{const c=new URL(u);if(this.origin&&c.origin===this.origin){const d=c.pathname+c.search+c.hash;l.options.href=d,l.headers.set("Location",d)}}catch{}if(l.options.href&&!l.options._builtLocation&&Ws(l.options.href,this.protocolAllowlist))throw new Error("Redirect blocked: unsafe protocol");return l.headers.get("Location")||l.headers.set("Location",l.options.href),l},this.clearCache=l=>{const u=l?.filter;u!==void 0?this.stores.setCached(this.stores.cachedMatches.get().filter(c=>!u(c))):this.stores.setCached([])},this.clearExpiredCache=()=>{const l=Date.now(),u=c=>{const d=this.looseRoutesById[c.routeId];if(!d.options.loader)return!0;const m=(c.preload?d.options.preloadGcTime??this.options.defaultPreloadGcTime:d.options.gcTime??this.options.defaultGcTime)??300*1e3;return c.status==="error"?!0:l-c.updatedAt>=m};this.clearCache({filter:u})},this.loadRouteChunk=vo,this.preloadRoute=async l=>{const u=l._builtLocation??this.buildLocation(l);let c=this.matchRoutes(u,{throwOnError:!0,preload:!0,dest:l});const d=new Set([...this.stores.matchesId.get(),...this.stores.pendingIds.get()]),m=new Set([...d,...this.stores.cachedIds.get()]),y=c.filter(p=>!m.has(p.id));if(y.length){const p=this.stores.cachedMatches.get();this.stores.setCached([...p,...y])}try{return c=await Mm({router:this,matches:c,location:u,preload:!0,updateMatch:(p,h)=>{d.has(p)?c=c.map(S=>S.id===p?h(S):S):this.updateMatch(p,h)}}),c}catch(p){if(pt(p))return p.options.reloadDocument?void 0:await this.preloadRoute({...p.options,_fromLocation:u});it(p)||console.error(p);return}},this.matchRoute=(l,u)=>{const c={...l,to:l.to?this.resolvePathWithBase(l.from||"",l.to):void 0,params:l.params||{},leaveParams:!0},d=this.buildLocation(c);if(u?.pending&&this.stores.status.get()!=="pending")return!1;const m=(u?.pending===void 0?!this.stores.isLoading.get():u.pending)?this.latestLocation:this.stores.resolvedLocation.get()||this.stores.location.get(),y=xv(d.pathname,u?.caseSensitive??!1,u?.fuzzy??!1,m.pathname,this.processedTree);return!y||l.params&&!Nt(y.rawParams,l.params,{partial:!0})?!1:u?.includeSearch??!0?Nt(m.search,d.search,{partial:!0})?y.rawParams:!1:y.rawParams},this.hasNotFoundMatch=()=>this.stores.matches.get().some(l=>l.status==="notFound"||l.globalNotFound),this.getStoreConfig=s,this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...i,caseSensitive:i.caseSensitive??!1,notFoundMode:i.notFoundMode??"fuzzy",stringifySearch:i.stringifySearch??Kv,parseSearch:i.parseSearch??Xv,protocolAllowlist:i.protocolAllowlist??Sv}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.stores.__store.get()}setRoutes({routesById:i,routesByPath:s,processedTree:l}){this.routesById=i,this.routesByPath=s,this.processedTree=l;const u=this.options.notFoundRoute;u&&(u.init({originalIndex:99999999999}),this.routesById[u.id]=u)}getRouteBranch(i){let s=this.routeBranchCache.get(i);return s||(s=sp(i),this.routeBranchCache.set(i,s)),s}get looseRoutesById(){return this.routesById}getParentContext(i){return i?.id?i.context??this.options.context??void 0:this.options.context??void 0}matchRoutesInternal(i,s){const l=this.getMatchedRoutes(i.pathname),{foundRoute:u,routeParams:c}=l;let{matchedRoutes:d}=l,m=!1;(u?u.path!=="/"&&c["**"]:gn(i.pathname))&&(this.options.notFoundRoute?d=[...d,this.options.notFoundRoute]:m=!0);const y=m?gS(this.options.notFoundMode,d):void 0,p=new Array(d.length),h=new Map;for(const S of this.stores.matchStores.values())S.routeId&&h.set(S.routeId,S.get());for(let S=0;S<d.length;S++){const v=d[S],A=p[S-1];let b,_,C;{const ae=A?.search??i.search,Ie=A?._strictSearch??void 0;try{const ke=Zs(v.options.validateSearch,{...ae})??void 0;b={...ae,...ke},_={...Ie,...ke},C=void 0}catch(ke){let Be=ke;if(ke instanceof tl||(Be=new tl(ke.message,{cause:ke})),s?.throwOnError)throw Be;b=ae,_={},C=Be}}const D=v.options.loaderDeps?.({search:b})??"",z=D?JSON.stringify(D):"",{interpolatedPath:q,usedParams:Y}=Em({path:v.fullPath,params:c,decoder:this.pathParamsDecoder,server:this.isServer}),G=v.id+q+z,$=this.getMatch(G),K=h.get(v.id),j=$?._strictParams??Y;let Q;if(!$)try{Nm(v,j)}catch(ae){if(it(ae)||pt(ae)?Q=ae:Q=new fS(ae.message,{cause:ae}),s?.throwOnError)throw Q}Object.assign(c,j);const F=K?"stay":"enter";let se;if($)se={...$,cause:F,params:K?.params??c,_strictParams:j,search:ma(K?K.search:$.search,b),_strictSearch:_};else{const ae=v.options.loader||v.options.beforeLoad||v.lazyFn||hp(v)?"pending":"success";se={id:G,ssr:v.options.ssr,index:S,routeId:v.id,params:K?.params??c,_strictParams:j,pathname:q,updatedAt:Date.now(),search:K?ma(K.search,b):b,_strictSearch:_,searchError:void 0,status:ae,isFetching:!1,error:void 0,paramsError:Q,__routeContext:void 0,_nonReactive:{loadPromise:fi()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:F,loaderDeps:K?pa(K.loaderDeps,D):D,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:v.options.staticData||{},fullPath:v.fullPath}}s?.preload||(se.globalNotFound=y===v.id),se.searchError=C;const ie=this.getParentContext(A);se.context={...ie,...se.__routeContext,...se.__beforeLoadContext},p[S]=se}for(let S=0;S<p.length;S++){const v=p[S],A=this.looseRoutesById[v.routeId],b=this.getMatch(v.id),_=h.get(v.routeId);if(v.params=_?ma(_.params,c):c,!b){const C=p[S-1],D=this.getParentContext(C);if(A.options.context){const z={deps:v.loaderDeps,params:v.params,context:D??{},location:i,navigate:q=>this.navigate({...q,_fromLocation:i}),buildLocation:this.buildLocation,cause:v.cause,abortController:v.abortController,preload:!!v.preload,matches:p,routeId:A.id};v.__routeContext=A.options.context(z)??void 0}v.context={...D,...v.__routeContext,...v.__beforeLoadContext}}}return p}matchRoutesLightweight(i){const{matchedRoutes:s,routeParams:l}=this.getMatchedRoutes(i.pathname),u=po(s),c={...i.search};for(const h of s)try{Object.assign(c,Zs(h.options.validateSearch,c))}catch{}const d=po(this.stores.matchesId.get()),m=d&&this.stores.matchStores.get(d)?.get(),y=m&&m.routeId===u.id&&m.pathname===i.pathname;let p;if(y)p=m.params;else{const h=Object.assign(Object.create(null),l);for(const S of s)try{Nm(S,h)}catch{}p=h}return{matchedRoutes:s,fullPath:u.fullPath,search:c,params:p}}},tl=class extends Error{},fS=class extends Error{};function dS(i){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:i,matches:[],statusCode:200}}function Zs(i,s){if(i==null)return{};if("~standard"in i){const l=i["~standard"].validate(s);if(l instanceof Promise)throw new tl("Async validation not supported");if(l.issues)throw new tl(JSON.stringify(l.issues,void 0,2),{cause:l});return l.value}return"parse"in i?i.parse(s):typeof i=="function"?i(s):{}}function hS({pathname:i,routesById:s,processedTree:l}){const u=Object.create(null),c=gn(i);let d;const m=Ov(c,l,!0);return m&&(d=m.route,Object.assign(u,m.rawParams)),{matchedRoutes:m?.branch||[s.__root__],routeParams:u,foundRoute:d}}function mS({search:i,dest:s,destRoutes:l,_includeValidateSearch:u}){return pS(l)(i,s,u??!1)}function pS(i){const s={dest:null,_includeValidateSearch:!1,middlewares:[]};for(const c of i){if("search"in c.options)c.options.search?.middlewares&&s.middlewares.push(...c.options.search.middlewares);else if(c.options.preSearchFilters||c.options.postSearchFilters){const d=({search:m,next:y})=>{let p=m;"preSearchFilters"in c.options&&c.options.preSearchFilters&&(p=c.options.preSearchFilters.reduce((S,v)=>v(S),m));const h=y(p);return"postSearchFilters"in c.options&&c.options.postSearchFilters?c.options.postSearchFilters.reduce((S,v)=>v(S),h):h};s.middlewares.push(d)}if(c.options.validateSearch){const d=({search:m,next:y})=>{const p=y(m);if(!s._includeValidateSearch)return p;try{return{...p,...Zs(c.options.validateSearch,p)??void 0}}catch{return p}};s.middlewares.push(d)}}const l=({search:c})=>{const d=s.dest;return d.search?d.search===!0?c:Vn(d.search,c):{}};s.middlewares.push(l);const u=(c,d,m)=>{if(c>=m.length)return d;const y=m[c];return y({search:d,next:h=>u(c+1,h,m)})};return function(d,m,y){return s.dest=m,s._includeValidateSearch=y,u(0,d,s.middlewares)}}function gS(i,s){if(i!=="root")for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.children)return u.id}return ya}function Nm(i,s){const l=i.options.params?.parse??i.options.parseParams;if(l){const u=l(s);if(u===!1)throw new Error("Route params.parse returned false for a matched route");Object.assign(s,u)}}const yS="Error preloading route! ☝️";function Um(i,s){if(i)return typeof i=="string"?i:i[s]}function vS(i){return typeof i=="string"?{href:i,crossOrigin:void 0}:i}function SS(i){if(i.tag!=="link")return;const s=i.attrs?.rel,l=i.attrs?.href;if(typeof l=="string"&&(typeof s=="string"?s.split(/\s+/):[]).includes("stylesheet"))return l}function bS(i,s){const l=SS(s);return!!l&&i?.inlineCss?.styles[l]!==void 0}var mp=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(i){if(this.init=s=>{this.originalIndex=s.originalIndex;const l=this.options,u=!l?.path&&!l?.id;this.parentRoute=this.options.getParentRoute?.(),u?this._path=ya:this.parentRoute||yn();let c=u?ya:l?.path;c&&c!=="/"&&(c=lp(c));const d=l?.id||c;let m=u?ya:Ks([this.parentRoute.id==="__root__"?"":this.parentRoute.id,d]);c==="__root__"&&(c="/"),m!=="__root__"&&(m=Ks(["/",m]));const y=m==="__root__"?"/":Ks([this.parentRoute.fullPath,c]);this._path=c,this._id=m,this._fullPath=y,this._to=gn(y)},this.addChildren=s=>this._addFileChildren(s),this._addFileChildren=s=>(Array.isArray(s)&&(this.children=s),typeof s=="object"&&s!==null&&(this.children=Object.values(s)),this),this._addFileTypes=()=>this,this.updateLoader=s=>(Object.assign(this.options,s),this),this.update=s=>(Object.assign(this.options,s),this),this.lazy=s=>(this.lazyFn=s,this),this.redirect=s=>Jv({from:this.fullPath,...s}),this.options=i||{},this.isRoot=!i?.getParentRoute,i?.id&&i?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}},wS=class extends mp{constructor(i){super(i)}};function AS(i){if(typeof document<"u"&&document.querySelector){const s=i.stores.location.get(),l=s.state.__hashScrollIntoViewOptions??!0;if(l&&s.hash!==""){const u=document.getElementById(s.hash);u&&u.scrollIntoView(l)}}}function ec(i){const s=i.errorComponent??tc;return V.jsx(ES,{getResetKey:i.getResetKey,onCatch:i.onCatch,children:({error:l,reset:u})=>l?ee.createElement(s,{error:l,reset:u}):i.children})}var ES=class extends ee.Component{constructor(...i){super(...i),this.state={error:null}}static getDerivedStateFromProps(i,s){const l=i.getResetKey();return s.error&&s.resetKey!==l?{resetKey:l,error:null}:{resetKey:l}}static getDerivedStateFromError(i){return{error:i}}reset(){this.setState({error:null})}componentDidCatch(i,s){this.props.onCatch&&this.props.onCatch(i,s)}render(){return this.props.children({error:this.state.error,reset:()=>{this.reset()}})}};function tc({error:i}){const[s,l]=ee.useState(!1);return V.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[V.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),V.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>l(u=>!u),children:s?"Hide Error":"Show Error"})]}),V.jsx("div",{style:{height:".25rem"}}),s?V.jsx("div",{children:V.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:i.message?V.jsx("code",{children:i.message}):null})}):null]})}function TS({children:i,fallback:s=null}){return nc()?V.jsx(Sa.Fragment,{children:i}):V.jsx(Sa.Fragment,{children:s})}function nc(){return Sa.useSyncExternalStore(_S,()=>!0,()=>!1)}function _S(){return()=>{}}var pp=ee.createContext(null);function ot(i){return ee.useContext(pp)}var sl=ee.createContext(void 0),RS=ee.createContext(void 0),Le=(i=>(i[i.None=0]="None",i[i.Mutable=1]="Mutable",i[i.Watching=2]="Watching",i[i.RecursedCheck=4]="RecursedCheck",i[i.Recursed=8]="Recursed",i[i.Dirty=16]="Dirty",i[i.Pending=32]="Pending",i))(Le||{});function CS({update:i,notify:s,unwatched:l}){return{link:u,unlink:c,propagate:d,checkDirty:m,shallowPropagate:y};function u(h,S,v){const A=S.depsTail;if(A!==void 0&&A.dep===h)return;const b=A!==void 0?A.nextDep:S.deps;if(b!==void 0&&b.dep===h){b.version=v,S.depsTail=b;return}const _=h.subsTail;if(_!==void 0&&_.version===v&&_.sub===S)return;const C=S.depsTail=h.subsTail={version:v,dep:h,sub:S,prevDep:A,nextDep:b,prevSub:_,nextSub:void 0};b!==void 0&&(b.prevDep=C),A!==void 0?A.nextDep=C:S.deps=C,_!==void 0?_.nextSub=C:h.subs=C}function c(h,S=h.sub){const v=h.dep,A=h.prevDep,b=h.nextDep,_=h.nextSub,C=h.prevSub;return b!==void 0?b.prevDep=A:S.depsTail=A,A!==void 0?A.nextDep=b:S.deps=b,_!==void 0?_.prevSub=C:v.subsTail=C,C!==void 0?C.nextSub=_:(v.subs=_)===void 0&&l(v),b}function d(h){let S=h.nextSub,v;e:do{const A=h.sub;let b=A.flags;if(b&60?b&12?b&4?!(b&48)&&p(h,A)?(A.flags=b|40,b&=1):b=0:A.flags=b&-9|32:b=0:A.flags=b|32,b&2&&s(A),b&1){const _=A.subs;if(_!==void 0){const C=(h=_).nextSub;C!==void 0&&(v={value:S,prev:v},S=C);continue}}if((h=S)!==void 0){S=h.nextSub;continue}for(;v!==void 0;)if(h=v.value,v=v.prev,h!==void 0){S=h.nextSub;continue e}break}while(!0)}function m(h,S){let v,A=0,b=!1;e:do{const _=h.dep,C=_.flags;if(S.flags&16)b=!0;else if((C&17)===17){if(i(_)){const D=_.subs;D.nextSub!==void 0&&y(D),b=!0}}else if((C&33)===33){(h.nextSub!==void 0||h.prevSub!==void 0)&&(v={value:h,prev:v}),h=_.deps,S=_,++A;continue}if(!b){const D=h.nextDep;if(D!==void 0){h=D;continue}}for(;A--;){const D=S.subs,z=D.nextSub!==void 0;if(z?(h=v.value,v=v.prev):h=D,b){if(i(S)){z&&y(D),S=h.sub;continue}b=!1}else S.flags&=-33;S=h.sub;const q=h.nextDep;if(q!==void 0){h=q;continue e}}return b}while(!0)}function y(h){do{const S=h.sub,v=S.flags;(v&48)===32&&(S.flags=v|16,(v&6)===2&&s(S))}while((h=h.nextSub)!==void 0)}function p(h,S){let v=S.depsTail;for(;v!==void 0;){if(v===h)return!0;v=v.prevDep}return!1}}function xS(i,s,l){const u=typeof i=="object",c=u?i:void 0;return{next:(u?i.next:i)?.bind(c),error:(u?i.error:s)?.bind(c),complete:(u?i.complete:l)?.bind(c)}}const Qu=[];let Js=0;const{link:Bm,unlink:OS,propagate:MS,checkDirty:gp,shallowPropagate:Hm}=CS({update(i){return i._update()},notify(i){Qu[Pu++]=i,i.flags&=~Le.Watching},unwatched(i){i.depsTail!==void 0&&(i.depsTail=void 0,i.flags=Le.Mutable|Le.Dirty,nl(i))}});let Vs=0,Pu=0,Xt,Vu=0;function yp(i){try{++Vu,i()}finally{--Vu||vp()}}function nl(i){const s=i.depsTail;let l=s!==void 0?s.nextDep:i.deps;for(;l!==void 0;)l=OS(l,i)}function vp(){if(!(Vu>0)){for(;Vs<Pu;){const i=Qu[Vs];Qu[Vs++]=void 0,i.notify()}Vs=0,Pu=0}}function jm(i,s){const l=typeof i=="function",u=i,c={_snapshot:l?void 0:i,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:l?Le.None:Le.Mutable,get(){return Xt!==void 0&&Bm(c,Xt,Js),c._snapshot},subscribe(d){const m=xS(d),y={current:!1},p=DS(()=>{c.get(),y.current?m.next?.(c._snapshot):y.current=!0});return{unsubscribe:()=>{p.stop()}}},_update(d){const m=Xt,y=s?.compare??Object.is;if(l)Xt=c,++Js,c.depsTail=void 0;else if(d===void 0)return!1;l&&(c.flags=Le.Mutable|Le.RecursedCheck);try{const p=c._snapshot,h=typeof d=="function"?d(p):d===void 0&&l?u(p):d;return p===void 0||!y(p,h)?(c._snapshot=h,!0):!1}finally{Xt=m,l&&(c.flags&=~Le.RecursedCheck),nl(c)}}};return l?(c.flags=Le.Mutable|Le.Dirty,c.get=function(){const d=c.flags;if(d&Le.Dirty||d&Le.Pending&&gp(c.deps,c)){if(c._update()){const m=c.subs;m!==void 0&&Hm(m)}}else d&Le.Pending&&(c.flags=d&~Le.Pending);return Xt!==void 0&&Bm(c,Xt,Js),c._snapshot}):c.set=function(d){if(c._update(d)){const m=c.subs;m!==void 0&&(MS(m),Hm(m),vp())}},c}function DS(i){const s=()=>{const u=Xt;Xt=l,++Js,l.depsTail=void 0,l.flags=Le.Watching|Le.RecursedCheck;try{return i()}finally{Xt=u,l.flags&=~Le.RecursedCheck,nl(l)}},l={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:Le.Watching|Le.RecursedCheck,notify(){const u=this.flags;u&Le.Dirty||u&Le.Pending&&gp(this.deps,this)?s():this.flags=Le.Watching},stop(){this.flags=Le.None,this.depsTail=void 0,nl(this)}};return s(),l}var Uu={exports:{}},Bu={},Hu={exports:{}},ju={};var qm;function kS(){if(qm)return ju;qm=1;var i=Ao();function s(v,A){return v===A&&(v!==0||1/v===1/A)||v!==v&&A!==A}var l=typeof Object.is=="function"?Object.is:s,u=i.useState,c=i.useEffect,d=i.useLayoutEffect,m=i.useDebugValue;function y(v,A){var b=A(),_=u({inst:{value:b,getSnapshot:A}}),C=_[0].inst,D=_[1];return d(function(){C.value=b,C.getSnapshot=A,p(C)&&D({inst:C})},[v,b,A]),c(function(){return p(C)&&D({inst:C}),v(function(){p(C)&&D({inst:C})})},[v]),m(b),b}function p(v){var A=v.getSnapshot;v=v.value;try{var b=A();return!l(v,b)}catch{return!0}}function h(v,A){return A()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:y;return ju.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:S,ju}var Gm;function zS(){return Gm||(Gm=1,Hu.exports=kS()),Hu.exports}var Ym;function LS(){if(Ym)return Bu;Ym=1;var i=Ao(),s=zS();function l(h,S){return h===S&&(h!==0||1/h===1/S)||h!==h&&S!==S}var u=typeof Object.is=="function"?Object.is:l,c=s.useSyncExternalStore,d=i.useRef,m=i.useEffect,y=i.useMemo,p=i.useDebugValue;return Bu.useSyncExternalStoreWithSelector=function(h,S,v,A,b){var _=d(null);if(_.current===null){var C={hasValue:!1,value:null};_.current=C}else C=_.current;_=y(function(){function z(K){if(!q){if(q=!0,Y=K,K=A(K),b!==void 0&&C.hasValue){var j=C.value;if(b(j,K))return G=j}return G=K}if(j=G,u(Y,K))return j;var Q=A(K);return b!==void 0&&b(j,Q)?(Y=K,j):(Y=K,G=Q)}var q=!1,Y,G,$=v===void 0?null:v;return[function(){return z(S())},$===null?void 0:function(){return z($())}]},[S,v,A,b]);var D=c(h,_[0],_[1]);return m(function(){C.hasValue=!0,C.value=D},[D]),p(D),D},Bu}var Qm;function NS(){return Qm||(Qm=1,Uu.exports=LS()),Uu.exports}var US=NS();function BS(i,s){return i===s}function Fe(i,s,l=BS){const u=ee.useCallback(m=>{if(!i)return()=>{};const{unsubscribe:y}=i.subscribe(m);return y},[i]),c=ee.useCallback(()=>i?.get(),[i]);return US.useSyncExternalStoreWithSelector(u,c,c,s,l)}var HS={get:()=>{},subscribe:()=>({unsubscribe:()=>{}})};function ba(i){const s=ot(),l=ee.useContext(i.from?RS:sl),u=i.from??l,c=u?i.from?s.stores.getRouteMatchStore(u):s.stores.matchStores.get(u):void 0,d=ee.useRef(void 0);return Fe(c??HS,m=>{if((i.shouldThrow??!0)&&!m&&yn(),m===void 0)return;const y=i.select?i.select(m):m;if(i.structuralSharing??s.options.defaultStructuralSharing){const p=pa(d.current,y);return d.current=p,p}return y})}function Sp(i){return ba({from:i.from,strict:i.strict,structuralSharing:i.structuralSharing,select:s=>i.select?i.select(s.loaderData):s.loaderData})}function bp(i){const{select:s,...l}=i;return ba({...l,select:u=>s?s(u.loaderDeps):u.loaderDeps})}function wp(i){return ba({from:i.from,shouldThrow:i.shouldThrow,structuralSharing:i.structuralSharing,strict:i.strict,select:s=>{const l=i.strict===!1?s.params:s._strictParams;return i.select?i.select(l):l}})}function Ap(i){return ba({from:i.from,strict:i.strict,shouldThrow:i.shouldThrow,structuralSharing:i.structuralSharing,select:s=>i.select?i.select(s.search):s.search})}function Ep(i){const s=ot();return ee.useCallback(l=>s.navigate({...l,from:l.from??i?.from}),[i?.from,s])}function Tp(i){return ba({...i,select:s=>i.select?i.select(s.context):s.context})}var _p=$m();const J0=Zu(_p);function jS(i,s){const l=ot(),u=mv(s),{activeProps:c,inactiveProps:d,activeOptions:m,to:y,preload:p,preloadDelay:h,preloadIntentProximity:S,hashScrollIntoView:v,replace:A,startTransition:b,resetScroll:_,viewTransition:C,children:D,target:z,disabled:q,style:Y,className:G,onClick:$,onBlur:K,onFocus:j,onMouseEnter:Q,onMouseLeave:F,onTouchStart:se,ignoreBlocker:ie,params:ae,search:Ie,hash:ke,state:Be,mask:L,reloadDocument:P,unsafeRelative:ne,from:Se,_fromLocation:we,...T}=i,B=nc(),I=ee.useMemo(()=>i,[l,i.from,i._fromLocation,i.hash,i.to,i.search,i.params,i.state,i.mask,i.unsafeRelative]),X=Fe(l.stores.location,Oe=>Oe,(Oe,Ze)=>Oe.href===Ze.href),W=ee.useMemo(()=>{const Oe={_fromLocation:X,...I};return l.buildLocation(Oe)},[l,X,I]),ce=W.maskedLocation?W.maskedLocation.publicHref:W.publicHref,ge=W.maskedLocation?W.maskedLocation.external:W.external,He=ee.useMemo(()=>VS(ce,ge,l.history,q),[q,ge,ce,l.history]),Ce=ee.useMemo(()=>{if(He?.external)return Ws(He.href,l.protocolAllowlist)?void 0:He.href;if(!IS(y)&&!(typeof y!="string"||y.indexOf(":")===-1))try{return new URL(y),Ws(y,l.protocolAllowlist)?void 0:y}catch{}},[y,He,l.protocolAllowlist]),Kt=ee.useMemo(()=>{if(Ce)return!1;if(m?.exact){if(!Nv(X.pathname,W.pathname,l.basepath))return!1}else{const Oe=$s(X.pathname,l.basepath),Ze=$s(W.pathname,l.basepath);if(!(Oe.startsWith(Ze)&&(Oe.length===Ze.length||Oe[Ze.length]==="/")))return!1}return(m?.includeSearch??!0)&&!Nt(X.search,W.search,{partial:!m?.exact,ignoreUndefined:!m?.explicitUndefined})?!1:m?.includeHash?B&&X.hash===W.hash:!0},[m?.exact,m?.explicitUndefined,m?.includeHash,m?.includeSearch,X,Ce,B,W.hash,W.pathname,W.search,l.basepath]),Ft=Kt?Vn(c,{})??qS:qu,vn=Kt?qu:Vn(d,{})??qu,di=[G,Ft.className,vn.className].filter(Boolean).join(" "),Gt=(Y||Ft.style||vn.style)&&{...Y,...Ft.style,...vn.style},[hi,wa]=ee.useState(!1),To=ee.useRef(!1),Zt=i.reloadDocument||Ce?!1:p??l.options.defaultPreload,Fn=h??l.options.defaultPreloadDelay??0,Ut=ee.useCallback(()=>{l.preloadRoute({...I,_builtLocation:W}).catch(Oe=>{console.warn(Oe),console.warn(yS)})},[l,I,W]);hv(u,ee.useCallback(Oe=>{Oe?.isIntersecting&&Ut()},[Ut]),PS,{disabled:!!q||Zt!=="viewport"}),ee.useEffect(()=>{To.current||!q&&Zt==="render"&&(Ut(),To.current=!0)},[q,Ut,Zt]);const mi=Oe=>{const Ze=Oe.currentTarget.getAttribute("target"),Yt=z!==void 0?z:Ze;if(!q&&!XS(Oe)&&!Oe.defaultPrevented&&(!Yt||Yt==="_self")&&Oe.button===0){Oe.preventDefault(),_p.flushSync(()=>{wa(!0)});const Aa=l.subscribe("onResolved",()=>{Aa(),wa(!1)});l.navigate({...I,replace:A,resetScroll:_,hashScrollIntoView:v,startTransition:b,viewTransition:C,ignoreBlocker:ie})}};if(Ce)return{...T,ref:u,href:Ce,...D&&{children:D},...z&&{target:z},...q&&{disabled:q},...Y&&{style:Y},...G&&{className:G},...$&&{onClick:$},...K&&{onBlur:K},...j&&{onFocus:j},...Q&&{onMouseEnter:Q},...F&&{onMouseLeave:F},...se&&{onTouchStart:se}};const _o=Oe=>{if(q||Zt!=="intent")return;if(!Fn){Ut();return}const Ze=Oe.currentTarget;if(ho.has(Ze))return;const Yt=setTimeout(()=>{ho.delete(Ze),Ut()},Fn);ho.set(Ze,Yt)},cl=Oe=>{q||Zt!=="intent"||Ut()},nt=Oe=>{if(q||!Zt||!Fn)return;const Ze=Oe.currentTarget,Yt=ho.get(Ze);Yt&&(clearTimeout(Yt),ho.delete(Ze))};return{...T,...Ft,...vn,href:He?.href,ref:u,onClick:li([$,mi]),onBlur:li([K,nt]),onFocus:li([j,_o]),onMouseEnter:li([Q,_o]),onMouseLeave:li([F,nt]),onTouchStart:li([se,cl]),disabled:!!q,target:z,...Gt&&{style:Gt},...di&&{className:di},...q&&GS,...Kt&&YS,...B&&hi&&QS}}var qu={},qS={className:"active"},GS={role:"link","aria-disabled":!0},YS={"data-status":"active","aria-current":"page"},QS={"data-transitioning":"transitioning"},ho=new WeakMap,PS={rootMargin:"100px"},li=i=>s=>{for(const l of i)if(l){if(s.defaultPrevented)return;l(s)}};function VS(i,s,l,u){if(!u)return s?{href:i,external:!0}:{href:l.createHref(i)||"/",external:!1}}function IS(i){if(typeof i!="string")return!1;const s=i.charCodeAt(0);return s===47?i.charCodeAt(1)!==47:s===46}var ll=ee.forwardRef((i,s)=>{const{_asChild:l,...u}=i,{type:c,...d}=jS(u,s),m=typeof u.children=="function"?u.children({isActive:d["data-status"]==="active"}):u.children;if(!l){const{disabled:y,...p}=d;return ee.createElement("a",p,m)}return ee.createElement(l,d,m)});function XS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}var KS=class extends mp{constructor(s){super(s),this.useMatch=l=>ba({select:l?.select,from:this.id,structuralSharing:l?.structuralSharing}),this.useRouteContext=l=>Tp({...l,from:this.id}),this.useSearch=l=>Ap({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useParams=l=>wp({select:l?.select,structuralSharing:l?.structuralSharing,from:this.id}),this.useLoaderDeps=l=>bp({...l,from:this.id}),this.useLoaderData=l=>Sp({...l,from:this.id}),this.useNavigate=()=>Ep({from:this.fullPath}),this.Link=Sa.forwardRef((l,u)=>V.jsx(ll,{ref:u,from:this.fullPath,...l}))}};function FS(i){return new KS(i)}function ZS(){return i=>WS(i)}var JS=class extends wS{constructor(i){super(i),this.useMatch=s=>ba({select:s?.select,from:this.id,structuralSharing:s?.structuralSharing}),this.useRouteContext=s=>Tp({...s,from:this.id}),this.useSearch=s=>Ap({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useParams=s=>wp({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useLoaderDeps=s=>bp({...s,from:this.id}),this.useLoaderData=s=>Sp({...s,from:this.id}),this.useNavigate=()=>Ep({from:this.fullPath}),this.Link=Sa.forwardRef((s,l)=>V.jsx(ll,{ref:l,from:this.fullPath,...s}))}};function WS(i){return new JS(i)}function rl(i){return new $S(i,{silent:!0}).createRoute}var $S=class{constructor(i,s){this.path=i,this.createRoute=l=>{const u=FS(l);return u.isRoot=!1,u},this.silent=s?.silent}};function So(i,s){let l,u,c,d;const m=()=>(l||(l=i().then(p=>{l=void 0,u=p[s??"default"]}).catch(p=>{if(c=p,yv(c)&&c instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const h=`tanstack_router_reload:${c.message}`;sessionStorage.getItem(h)||(sessionStorage.setItem(h,"1"),d=!0)}})),l),y=function(h){if(d)throw window.location.reload(),new Promise(()=>{});if(c)throw c;if(!u)if(gm)gm(m());else throw m();return ee.createElement(u,h)};return y.preload=m,y}function eb(i){const s=ot(),l=`not-found-${Fe(s.stores.location,u=>u.pathname)}-${Fe(s.stores.status,u=>u)}`;return V.jsx(ec,{getResetKey:()=>l,onCatch:(u,c)=>{if(it(u))i.onCatch?.(u,c);else throw u},errorComponent:({error:u})=>{if(it(u))return i.fallback?.(u);throw u},children:i.children})}function tb(){return V.jsx("p",{children:"Not Found"})}function ri(i){return V.jsx(V.Fragment,{children:i.children})}function Rp(i,s,l){return s.options.notFoundComponent?V.jsx(s.options.notFoundComponent,{...l}):i.options.defaultNotFoundComponent?V.jsx(i.options.defaultNotFoundComponent,{...l}):V.jsx(tb,{})}function nb(i){return null}function ab(){return nb(ot()),null}var Cp=ee.memo(function({matchId:s}){const l=ot(),u=l.stores.matchStores.get(s);u||yn();const c=Fe(l.stores.loadedAt,m=>m),d=Fe(u,m=>m);return V.jsx(ib,{router:l,matchId:s,resetKey:c,matchState:ee.useMemo(()=>{const m=d.routeId,y=l.routesById[m].parentRoute?.id;return{routeId:m,ssr:d.ssr,_displayPending:d._displayPending,parentRouteId:y}},[d._displayPending,d.routeId,d.ssr,l.routesById])})});function ib({router:i,matchId:s,resetKey:l,matchState:u}){const c=i.routesById[u.routeId],d=c.options.pendingComponent??i.options.defaultPendingComponent,m=d?V.jsx(d,{}):null,y=c.options.errorComponent??i.options.defaultErrorComponent,p=c.options.onCatch??i.options.defaultOnCatch,h=c.isRoot?c.options.notFoundComponent??i.options.notFoundRoute?.options.component:c.options.notFoundComponent,S=u.ssr===!1||u.ssr==="data-only",v=(!c.isRoot||c.options.wrapInSuspense||S)&&(c.options.wrapInSuspense??d??(c.options.errorComponent?.preload||S))?ee.Suspense:ri,A=y?ec:ri,b=h?eb:ri;return V.jsxs(c.isRoot?c.options.shellComponent??ri:ri,{children:[V.jsx(sl.Provider,{value:s,children:V.jsx(v,{fallback:m,children:V.jsx(A,{getResetKey:()=>l,errorComponent:y||tc,onCatch:(_,C)=>{if(it(_))throw _.routeId??=u.routeId,_;p?.(_,C)},children:V.jsx(b,{fallback:_=>{if(_.routeId??=u.routeId,!h||_.routeId&&_.routeId!==u.routeId||!_.routeId&&!c.isRoot)throw _;return ee.createElement(h,_)},children:S||u._displayPending?V.jsx(TS,{fallback:m,children:V.jsx(Pm,{matchId:s})}):V.jsx(Pm,{matchId:s})})})})}),u.parentRouteId===ya?V.jsxs(V.Fragment,{children:[V.jsx(ob,{resetKey:l}),i.options.scrollRestoration&&ep?V.jsx(ab,{}):null]}):null]})}function ob({resetKey:i}){const s=ot(),l=ee.useRef(void 0);return mo(()=>{const u=s.latestLocation.href;(l.current===void 0||l.current!==u)&&(s.emit({type:"onRendered",...ui(s.stores.location.get(),s.stores.resolvedLocation.get())}),l.current=u)},[s.latestLocation.state.__TSR_key,i,s]),null}var Pm=ee.memo(function({matchId:s}){const l=ot(),u=(S,v)=>l.getMatch(S.id)?._nonReactive[v]??S._nonReactive[v],c=l.stores.matchStores.get(s);c||yn();const d=Fe(c,S=>S),m=d.routeId,y=l.routesById[m],p=ee.useMemo(()=>{const S=(l.routesById[m].options.remountDeps??l.options.defaultRemountDeps)?.({routeId:m,loaderDeps:d.loaderDeps,params:d._strictParams,search:d._strictSearch});return S?JSON.stringify(S):void 0},[m,d.loaderDeps,d._strictParams,d._strictSearch,l.options.defaultRemountDeps,l.routesById]),h=ee.useMemo(()=>{const S=y.options.component??l.options.defaultComponent;return S?V.jsx(S,{},p):V.jsx(xp,{})},[p,y.options.component,l.options.defaultComponent]);if(d._displayPending)throw u(d,"displayPendingPromise");if(d._forcePending)throw u(d,"minPendingPromise");if(d.status==="pending"){const S=y.options.pendingMinMs??l.options.defaultPendingMinMs;if(S){const v=l.getMatch(d.id);if(v&&!v._nonReactive.minPendingPromise){const A=fi();v._nonReactive.minPendingPromise=A,setTimeout(()=>{A.resolve(),v._nonReactive.minPendingPromise=void 0},S)}}throw u(d,"loadPromise")}if(d.status==="notFound")return it(d.error)||yn(),Rp(l,y,d.error);if(d.status==="redirected")throw pt(d.error)||yn(),u(d,"loadPromise");if(d.status==="error")throw d.error;return h}),xp=ee.memo(function(){const s=ot(),l=ee.useContext(sl);let u,c=!1,d;{const h=l?s.stores.matchStores.get(l):void 0;[u,c]=Fe(h,S=>[S?.routeId,S?.globalNotFound??!1]),d=Fe(s.stores.matchesId,S=>S[S.findIndex(v=>v===l)+1])}const m=u?s.routesById[u]:void 0,y=s.options.defaultPendingComponent?V.jsx(s.options.defaultPendingComponent,{}):null;if(c)return m||yn(),Rp(s,m,void 0);if(!d)return null;const p=V.jsx(Cp,{matchId:d});return u===ya?V.jsx(ee.Suspense,{fallback:y,children:p}):p});function sb(){const i=ot(),s=ee.useRef({router:i,mounted:!1}),[l,u]=ee.useState(!1),c=Fe(i.stores.isLoading,v=>v),d=Fe(i.stores.hasPending,v=>v),m=Ou(c),y=c||l||d,p=Ou(y),h=c||d,S=Ou(h);return i.startTransition=v=>{u(!0),ee.startTransition(()=>{v(),u(!1)})},ee.useEffect(()=>{const v=i.history.subscribe(i.load),A=i.buildLocation({to:i.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return gn(i.latestLocation.publicHref)!==gn(A.publicHref)&&i.commitLocation({...A,replace:!0}),()=>{v()}},[i,i.history]),mo(()=>{if(typeof window<"u"&&i.ssr||s.current.router===i&&s.current.mounted)return;s.current={router:i,mounted:!0},(async()=>{try{await i.load()}catch(A){console.error(A)}})()},[i]),mo(()=>{m&&!c&&i.emit({type:"onLoad",...ui(i.stores.location.get(),i.stores.resolvedLocation.get())})},[m,i,c]),mo(()=>{S&&!h&&i.emit({type:"onBeforeRouteMount",...ui(i.stores.location.get(),i.stores.resolvedLocation.get())})},[h,S,i]),mo(()=>{if(p&&!y){const v=ui(i.stores.location.get(),i.stores.resolvedLocation.get());i.emit({type:"onResolved",...v}),yp(()=>{i.stores.status.set("idle"),i.stores.resolvedLocation.set(i.stores.location.get())}),v.hrefChanged&&AS(i)}},[y,p,i]),null}function lb(){const i=ot(),s=i.routesById[ya].options.pendingComponent??i.options.defaultPendingComponent,l=s?V.jsx(s,{}):null,u=V.jsxs(typeof document<"u"&&i.ssr?ri:ee.Suspense,{fallback:l,children:[V.jsx(sb,{}),V.jsx(rb,{})]});return i.options.InnerWrap?V.jsx(i.options.InnerWrap,{children:u}):u}function rb(){const i=ot(),s=Fe(i.stores.firstId,c=>c),l=Fe(i.stores.loadedAt,c=>c),u=s?V.jsx(Cp,{matchId:s}):null;return V.jsx(sl.Provider,{value:s,children:i.options.disableGlobalCatchBoundary?u:V.jsx(ec,{getResetKey:()=>l,errorComponent:tc,onCatch:void 0,children:u})})}var ub=i=>({createMutableStore:jm,createReadonlyStore:jm,batch:yp}),cb=i=>new fb(i),fb=class extends cS{constructor(i){super(i,ub)}};function db({router:i,children:s,...l}){np(l)&&i.update({...i.options,...l,context:{...i.options.context,...l.context}});const u=V.jsx(pp.Provider,{value:i,children:s});return i.options.Wrap?V.jsx(i.options.Wrap,{children:u}):u}function hb({router:i,...s}){return V.jsx(db,{router:i,...s,children:V.jsx(lb,{})})}function mb(i){const{attrs:s,children:l,nonce:u}=i;switch(i.tag){case"title":return V.jsx("title",{...s,suppressHydrationWarning:!0,children:l});case"meta":return V.jsx("meta",{...s,suppressHydrationWarning:!0});case"link":return V.jsx("link",{...s,precedence:s?.precedence??(s?.rel==="stylesheet"?"default":void 0),nonce:u,suppressHydrationWarning:!0});case"style":return i.inlineCss,V.jsx("style",{...s,dangerouslySetInnerHTML:{__html:l},nonce:u});case"script":return V.jsx(pb,{attrs:s,children:l});default:return null}}function pb({attrs:i,children:s}){ot();const l=nc(),u=typeof i?.type=="string"&&i.type!==""&&i.type!=="text/javascript"&&i.type!=="module";if(ee.useEffect(()=>{if(!u){if(i?.src){const c=(()=>{try{const m=document.baseURI||window.location.href;return new URL(i.src,m).href}catch{return i.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(m=>m.src===c))return;const d=document.createElement("script");for(const[m,y]of Object.entries(i))m!=="suppressHydrationWarning"&&y!==void 0&&y!==!1&&d.setAttribute(m,typeof y=="boolean"?"":String(y));return document.head.appendChild(d),()=>{d.parentNode&&d.parentNode.removeChild(d)}}if(typeof s=="string"){const c=typeof i?.type=="string"?i.type:"text/javascript",d=typeof i?.nonce=="string"?i.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(y=>{if(!(y instanceof HTMLScriptElement))return!1;const p=y.getAttribute("type")??"text/javascript",h=y.getAttribute("nonce")??void 0;return y.textContent===s&&p===c&&h===d}))return;const m=document.createElement("script");if(m.textContent=s,i)for(const[y,p]of Object.entries(i))y!=="suppressHydrationWarning"&&p!==void 0&&p!==!1&&m.setAttribute(y,typeof p=="boolean"?"":String(p));return document.head.appendChild(m),()=>{m.parentNode&&m.parentNode.removeChild(m)}}}},[i,s,u]),u&&typeof s=="string")return V.jsx("script",{...i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:s}});if(!l){if(i?.src)return V.jsx("script",{...i,suppressHydrationWarning:!0});if(typeof s=="string")return V.jsx("script",{...i,dangerouslySetInnerHTML:{__html:s},suppressHydrationWarning:!0})}return null}var gb=i=>{const s=ot(),l=s.options.ssr?.nonce,u=Fe(s.stores.matches,h=>h.map(S=>S.meta).filter(Boolean),Nt),c=ee.useMemo(()=>{const h=[],S={};let v;for(let A=u.length-1;A>=0;A--){const b=u[A];for(let _=b.length-1;_>=0;_--){const C=b[_];if(C)if(C.title)v||(v={tag:"title",children:C.title});else if("script:ld+json"in C)try{const D=JSON.stringify(C["script:ld+json"]);h.push({tag:"script",attrs:{type:"application/ld+json"},children:Av(D)})}catch{}else{const D=C.name??C.property;if(D){if(S[D])continue;S[D]=!0}h.push({tag:"meta",attrs:{...C,nonce:l}})}}}return v&&h.push(v),l&&h.push({tag:"meta",attrs:{property:"csp-nonce",content:l}}),h.reverse(),h},[u,l]),d=Fe(s.stores.matches,h=>{const S=h.map(b=>b.links).filter(Boolean).flat(1).map(b=>({tag:"link",attrs:{...b,nonce:l}})),v=s.ssr?.manifest,A=h.map(b=>v?.routes[b.routeId]?.assets??[]).filter(Boolean).flat(1).flatMap(b=>b.tag==="link"?bS(v,b)?[]:[{tag:"link",attrs:{...b.attrs,crossOrigin:Um(i,"stylesheet")??b.attrs?.crossOrigin,suppressHydrationWarning:!0,nonce:l}}]:b.tag==="style"?[{tag:"style",attrs:{...b.attrs,nonce:l},children:b.children,...b.inlineCss?{inlineCss:!0}:{}}]:[]);return[...S,...A]},Nt),m=Fe(s.stores.matches,h=>{const S=[];return h.map(v=>s.looseRoutesById[v.routeId]).forEach(v=>s.ssr?.manifest?.routes[v.id]?.preloads?.filter(Boolean).forEach(A=>{const b=vS(A);S.push({tag:"link",attrs:{rel:"modulepreload",href:b.href,crossOrigin:Um(i,"modulepreload")??b.crossOrigin,nonce:l}})})),S},Nt),y=Fe(s.stores.matches,h=>h.map(S=>S.styles).flat(1).filter(Boolean).map(({children:S,...v})=>({tag:"style",attrs:{...v,nonce:l},children:S})),Nt),p=Fe(s.stores.matches,h=>h.map(S=>S.headScripts).flat(1).filter(Boolean).map(({children:S,...v})=>({tag:"script",attrs:{...v,nonce:l},children:S})),Nt);return yb([...c,...m,...d,...y,...p],h=>JSON.stringify(h))};function yb(i,s){const l=new Set;return i.filter(u=>{const c=s(u);return l.has(c)?!1:(l.add(c),!0)})}function vb(i){const s=gb(i.assetCrossOrigin),l=ot().options.ssr?.nonce;return V.jsx(V.Fragment,{children:s.map(u=>ee.createElement(mb,{...u,key:`tsr-meta-${JSON.stringify(u)}`,nonce:l}))})}var ul=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(i){return this.listeners.add(i),this.onSubscribe(),()=>{this.listeners.delete(i),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Sb=class extends ul{#e;#t;#n;constructor(){super(),this.#n=i=>{if(typeof window<"u"&&window.addEventListener){const s=()=>i();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(i){this.#n=i,this.#t?.(),this.#t=i(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()})}setFocused(i){this.#e!==i&&(this.#e=i,this.onFocus())}onFocus(){const i=this.isFocused();this.listeners.forEach(s=>{s(i)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Op=new Sb,bb={setTimeout:(i,s)=>setTimeout(i,s),clearTimeout:i=>clearTimeout(i),setInterval:(i,s)=>setInterval(i,s),clearInterval:i=>clearInterval(i)},wb=class{#e=bb;#t=!1;setTimeoutProvider(i){this.#e=i}setTimeout(i,s){return this.#e.setTimeout(i,s)}clearTimeout(i){this.#e.clearTimeout(i)}setInterval(i,s){return this.#e.setInterval(i,s)}clearInterval(i){this.#e.clearInterval(i)}},Iu=new wb;function Ab(i){setTimeout(i,0)}var Eb=typeof window>"u"||"Deno"in globalThis;function qt(){}function Tb(i,s){return typeof i=="function"?i(s):i}function _b(i){return typeof i=="number"&&i>=0&&i!==1/0}function Rb(i,s){return Math.max(i+(s||0)-Date.now(),0)}function Xu(i,s){return typeof i=="function"?i(s):i}function Cb(i,s){return typeof i=="function"?i(s):i}function Vm(i,s){const{type:l="all",exact:u,fetchStatus:c,predicate:d,queryKey:m,stale:y}=i;if(m){if(u){if(s.queryHash!==ac(m,s.options))return!1}else if(!wo(s.queryKey,m))return!1}if(l!=="all"){const p=s.isActive();if(l==="active"&&!p||l==="inactive"&&p)return!1}return!(typeof y=="boolean"&&s.isStale()!==y||c&&c!==s.state.fetchStatus||d&&!d(s))}function Im(i,s){const{exact:l,status:u,predicate:c,mutationKey:d}=i;if(d){if(!s.options.mutationKey)return!1;if(l){if(bo(s.options.mutationKey)!==bo(d))return!1}else if(!wo(s.options.mutationKey,d))return!1}return!(u&&s.state.status!==u||c&&!c(s))}function ac(i,s){return(s?.queryKeyHashFn||bo)(i)}function bo(i){return JSON.stringify(i,(s,l)=>Ku(l)?Object.keys(l).sort().reduce((u,c)=>(u[c]=l[c],u),{}):l)}function wo(i,s){return i===s?!0:typeof i!=typeof s?!1:i&&s&&typeof i=="object"&&typeof s=="object"?Object.keys(s).every(l=>wo(i[l],s[l])):!1}var xb=Object.prototype.hasOwnProperty;function Mp(i,s,l=0){if(i===s)return i;if(l>500)return s;const u=Xm(i)&&Xm(s);if(!u&&!(Ku(i)&&Ku(s)))return s;const d=(u?i:Object.keys(i)).length,m=u?s:Object.keys(s),y=m.length,p=u?new Array(y):{};let h=0;for(let S=0;S<y;S++){const v=u?S:m[S],A=i[v],b=s[v];if(A===b){p[v]=A,(u?S<d:xb.call(i,v))&&h++;continue}if(A===null||b===null||typeof A!="object"||typeof b!="object"){p[v]=b;continue}const _=Mp(A,b,l+1);p[v]=_,_===A&&h++}return d===y&&h===d?i:p}function Xm(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function Ku(i){if(!Km(i))return!1;const s=i.constructor;if(s===void 0)return!0;const l=s.prototype;return!(!Km(l)||!l.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(i)!==Object.prototype)}function Km(i){return Object.prototype.toString.call(i)==="[object Object]"}function Ob(i){return new Promise(s=>{Iu.setTimeout(s,i)})}function Mb(i,s,l){return typeof l.structuralSharing=="function"?l.structuralSharing(i,s):l.structuralSharing!==!1?Mp(i,s):s}function Db(i,s,l=0){const u=[...i,s];return l&&u.length>l?u.slice(1):u}function kb(i,s,l=0){const u=[s,...i];return l&&u.length>l?u.slice(0,-1):u}var ic=Symbol();function Dp(i,s){return!i.queryFn&&s?.initialPromise?()=>s.initialPromise:!i.queryFn||i.queryFn===ic?()=>Promise.reject(new Error(`Missing queryFn: '${i.queryHash}'`)):i.queryFn}function zb(i,s,l){let u=!1,c;return Object.defineProperty(i,"signal",{enumerable:!0,get:()=>(c??=s(),u||(u=!0,c.aborted?l():c.addEventListener("abort",l,{once:!0})),c)}),i}var kp=(()=>{let i=()=>Eb;return{isServer(){return i()},setIsServer(s){i=s}}})();function Lb(){let i,s;const l=new Promise((c,d)=>{i=c,s=d});l.status="pending",l.catch(()=>{});function u(c){Object.assign(l,c),delete l.resolve,delete l.reject}return l.resolve=c=>{u({status:"fulfilled",value:c}),i(c)},l.reject=c=>{u({status:"rejected",reason:c}),s(c)},l}var Nb=Ab;function Ub(){let i=[],s=0,l=y=>{y()},u=y=>{y()},c=Nb;const d=y=>{s?i.push(y):c(()=>{l(y)})},m=()=>{const y=i;i=[],y.length&&c(()=>{u(()=>{y.forEach(p=>{l(p)})})})};return{batch:y=>{let p;s++;try{p=y()}finally{s--,s||m()}return p},batchCalls:y=>(...p)=>{d(()=>{y(...p)})},schedule:d,setNotifyFunction:y=>{l=y},setBatchNotifyFunction:y=>{u=y},setScheduler:y=>{c=y}}}var lt=Ub(),Bb=class extends ul{#e=!0;#t;#n;constructor(){super(),this.#n=i=>{if(typeof window<"u"&&window.addEventListener){const s=()=>i(!0),l=()=>i(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",l,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",l)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(i){this.#n=i,this.#t?.(),this.#t=i(this.setOnline.bind(this))}setOnline(i){this.#e!==i&&(this.#e=i,this.listeners.forEach(l=>{l(i)}))}isOnline(){return this.#e}},al=new Bb;function Hb(i){return Math.min(1e3*2**i,3e4)}function zp(i){return(i??"online")==="online"?al.isOnline():!0}var Fu=class extends Error{constructor(i){super("CancelledError"),this.revert=i?.revert,this.silent=i?.silent}};function Lp(i){let s=!1,l=0,u;const c=Lb(),d=()=>c.status!=="pending",m=C=>{if(!d()){const D=new Fu(C);A(D),i.onCancel?.(D)}},y=()=>{s=!0},p=()=>{s=!1},h=()=>Op.isFocused()&&(i.networkMode==="always"||al.isOnline())&&i.canRun(),S=()=>zp(i.networkMode)&&i.canRun(),v=C=>{d()||(u?.(),c.resolve(C))},A=C=>{d()||(u?.(),c.reject(C))},b=()=>new Promise(C=>{u=D=>{(d()||h())&&C(D)},i.onPause?.()}).then(()=>{u=void 0,d()||i.onContinue?.()}),_=()=>{if(d())return;let C;const D=l===0?i.initialPromise:void 0;try{C=D??i.fn()}catch(z){C=Promise.reject(z)}Promise.resolve(C).then(v).catch(z=>{if(d())return;const q=i.retry??(kp.isServer()?0:3),Y=i.retryDelay??Hb,G=typeof Y=="function"?Y(l,z):Y,$=q===!0||typeof q=="number"&&l<q||typeof q=="function"&&q(l,z);if(s||!$){A(z);return}l++,i.onFail?.(l,z),Ob(G).then(()=>h()?void 0:b()).then(()=>{s?A(z):_()})})};return{promise:c,status:()=>c.status,cancel:m,continue:()=>(u?.(),c),cancelRetry:y,continueRetry:p,canStart:S,start:()=>(S()?_():b().then(_),c)}}var Np=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),_b(this.gcTime)&&(this.#e=Iu.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(i){this.gcTime=Math.max(this.gcTime||0,i??(kp.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(Iu.clearTimeout(this.#e),this.#e=void 0)}};function jb(i){return{onFetch:(s,l)=>{const u=s.options,c=s.fetchOptions?.meta?.fetchMore?.direction,d=s.state.data?.pages||[],m=s.state.data?.pageParams||[];let y={pages:[],pageParams:[]},p=0;const h=async()=>{let S=!1;const v=_=>{zb(_,()=>s.signal,()=>S=!0)},A=Dp(s.options,s.fetchOptions),b=async(_,C,D)=>{if(S)return Promise.reject(s.signal.reason);if(C==null&&_.pages.length)return Promise.resolve(_);const q=(()=>{const K={client:s.client,queryKey:s.queryKey,pageParam:C,direction:D?"backward":"forward",meta:s.options.meta};return v(K),K})(),Y=await A(q),{maxPages:G}=s.options,$=D?kb:Db;return{pages:$(_.pages,Y,G),pageParams:$(_.pageParams,C,G)}};if(c&&d.length){const _=c==="backward",C=_?qb:Fm,D={pages:d,pageParams:m},z=C(u,D);y=await b(D,z,_)}else{const _=i??d.length;do{const C=p===0?m[0]??u.initialPageParam:Fm(u,y);if(p>0&&C==null)break;y=await b(y,C),p++}while(p<_)}return y};s.options.persister?s.fetchFn=()=>s.options.persister?.(h,{client:s.client,queryKey:s.queryKey,meta:s.options.meta,signal:s.signal},l):s.fetchFn=h}}}function Fm(i,{pages:s,pageParams:l}){const u=s.length-1;return s.length>0?i.getNextPageParam(s[u],s,l[u],l):void 0}function qb(i,{pages:s,pageParams:l}){return s.length>0?i.getPreviousPageParam?.(s[0],s,l[0],l):void 0}var Gb=class extends Np{#e;#t;#n;#i;#o;#a;#r;#s;constructor(i){super(),this.#s=!1,this.#r=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.#o=i.client,this.#i=this.#o.getQueryCache(),this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.#t=Jm(this.options),this.state=i.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(i){if(this.options={...this.#r,...i},i?._type&&(this.#e=i._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const s=Jm(this.options);s.data!==void 0&&(this.setState(Zm(s.data,s.dataUpdatedAt)),this.#t=s)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#i.remove(this)}setData(i,s){const l=Mb(this.state.data,i,this.options);return this.#l({data:l,type:"success",dataUpdatedAt:s?.updatedAt,manual:s?.manual}),l}setState(i){this.#l({type:"setState",state:i})}cancel(i){const s=this.#a?.promise;return this.#a?.cancel(i),s?s.then(qt).catch(qt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(i=>Cb(i.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ic||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(i=>Xu(i.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(i=>i.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(i=0){return this.state.data===void 0?!0:i==="static"?!1:this.state.isInvalidated?!0:!Rb(this.state.dataUpdatedAt,i)}onFocus(){this.observers.find(s=>s.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(s=>s.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(i){this.observers.includes(i)||(this.observers.push(i),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",query:this,observer:i}))}removeObserver(i){this.observers.includes(i)&&(this.observers=this.observers.filter(s=>s!==i),this.observers.length||(this.#a&&(this.#s||this.#u()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#i.notify({type:"observerRemoved",query:this,observer:i}))}getObserversCount(){return this.observers.length}#u(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(i,s){if(this.state.fetchStatus!=="idle"&&this.#a?.status()!=="rejected"){if(this.state.data!==void 0&&s?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(i&&this.setOptions(i),!this.options.queryFn){const p=this.observers.find(h=>h.options.queryFn);p&&this.setOptions(p.options)}const l=new AbortController,u=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(this.#s=!0,l.signal)})},c=()=>{const p=Dp(this.options,s),S=(()=>{const v={client:this.#o,queryKey:this.queryKey,meta:this.meta};return u(v),v})();return this.#s=!1,this.options.persister?this.options.persister(p,S,this):p(S)},m=(()=>{const p={fetchOptions:s,options:this.options,queryKey:this.queryKey,client:this.#o,state:this.state,fetchFn:c};return u(p),p})();(this.#e==="infinite"?jb(this.options.pages):this.options.behavior)?.onFetch(m,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==m.fetchOptions?.meta)&&this.#l({type:"fetch",meta:m.fetchOptions?.meta}),this.#a=Lp({initialPromise:s?.initialPromise,fn:m.fetchFn,onCancel:p=>{p instanceof Fu&&p.revert&&this.setState({...this.#n,fetchStatus:"idle"}),l.abort()},onFail:(p,h)=>{this.#l({type:"failed",failureCount:p,error:h})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay,networkMode:m.options.networkMode,canRun:()=>!0});try{const p=await this.#a.start();if(p===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(p),this.#i.config.onSuccess?.(p,this),this.#i.config.onSettled?.(p,this.state.error,this),p}catch(p){if(p instanceof Fu){if(p.silent)return this.#a.promise;if(p.revert){if(this.state.data===void 0)throw p;return this.state.data}}throw this.#l({type:"error",error:p}),this.#i.config.onError?.(p,this),this.#i.config.onSettled?.(this.state.data,p,this),p}finally{this.scheduleGc()}}#l(i){const s=l=>{switch(i.type){case"failed":return{...l,fetchFailureCount:i.failureCount,fetchFailureReason:i.error};case"pause":return{...l,fetchStatus:"paused"};case"continue":return{...l,fetchStatus:"fetching"};case"fetch":return{...l,...Yb(l.data,this.options),fetchMeta:i.meta??null};case"success":const u={...l,...Zm(i.data,i.dataUpdatedAt),dataUpdateCount:l.dataUpdateCount+1,...!i.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=i.manual?u:void 0,u;case"error":const c=i.error;return{...l,error:c,errorUpdateCount:l.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:l.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...l,isInvalidated:!0};case"setState":return{...l,...i.state}}};this.state=s(this.state),lt.batch(()=>{this.observers.forEach(l=>{l.onQueryUpdate()}),this.#i.notify({query:this,type:"updated",action:i})})}};function Yb(i,s){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:zp(s.networkMode)?"fetching":"paused",...i===void 0&&{error:null,status:"pending"}}}function Zm(i,s){return{data:i,dataUpdatedAt:s??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Jm(i){const s=typeof i.initialData=="function"?i.initialData():i.initialData,l=s!==void 0,u=l?typeof i.initialDataUpdatedAt=="function"?i.initialDataUpdatedAt():i.initialDataUpdatedAt:0;return{data:s,dataUpdateCount:0,dataUpdatedAt:l?u??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:l?"success":"pending",fetchStatus:"idle"}}var Qb=class extends Np{#e;#t;#n;#i;constructor(i){super(),this.#e=i.client,this.mutationId=i.mutationId,this.#n=i.mutationCache,this.#t=[],this.state=i.state||Pb(),this.setOptions(i.options),this.scheduleGc()}setOptions(i){this.options=i,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(i){this.#t.includes(i)||(this.#t.push(i),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:i}))}removeObserver(i){this.#t=this.#t.filter(s=>s!==i),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:i})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(i){const s=()=>{this.#o({type:"continue"})},l={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#i=Lp({fn:()=>this.options.mutationFn?this.options.mutationFn(i,l):Promise.reject(new Error("No mutationFn found")),onFail:(d,m)=>{this.#o({type:"failed",failureCount:d,error:m})},onPause:()=>{this.#o({type:"pause"})},onContinue:s,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const u=this.state.status==="pending",c=!this.#i.canStart();try{if(u)s();else{this.#o({type:"pending",variables:i,isPaused:c}),this.#n.config.onMutate&&await this.#n.config.onMutate(i,this,l);const m=await this.options.onMutate?.(i,l);m!==this.state.context&&this.#o({type:"pending",context:m,variables:i,isPaused:c})}const d=await this.#i.start();return await this.#n.config.onSuccess?.(d,i,this.state.context,this,l),await this.options.onSuccess?.(d,i,this.state.context,l),await this.#n.config.onSettled?.(d,null,this.state.variables,this.state.context,this,l),await this.options.onSettled?.(d,null,i,this.state.context,l),this.#o({type:"success",data:d}),d}catch(d){try{await this.#n.config.onError?.(d,i,this.state.context,this,l)}catch(m){Promise.reject(m)}try{await this.options.onError?.(d,i,this.state.context,l)}catch(m){Promise.reject(m)}try{await this.#n.config.onSettled?.(void 0,d,this.state.variables,this.state.context,this,l)}catch(m){Promise.reject(m)}try{await this.options.onSettled?.(void 0,d,i,this.state.context,l)}catch(m){Promise.reject(m)}throw this.#o({type:"error",error:d}),d}finally{this.#n.runNext(this)}}#o(i){const s=l=>{switch(i.type){case"failed":return{...l,failureCount:i.failureCount,failureReason:i.error};case"pause":return{...l,isPaused:!0};case"continue":return{...l,isPaused:!1};case"pending":return{...l,context:i.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:i.isPaused,status:"pending",variables:i.variables,submittedAt:Date.now()};case"success":return{...l,data:i.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...l,data:void 0,error:i.error,failureCount:l.failureCount+1,failureReason:i.error,isPaused:!1,status:"error"}}};this.state=s(this.state),lt.batch(()=>{this.#t.forEach(l=>{l.onMutationUpdate(i)}),this.#n.notify({mutation:this,type:"updated",action:i})})}};function Pb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Vb=class extends ul{constructor(i={}){super(),this.config=i,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(i,s,l){const u=new Qb({client:i,mutationCache:this,mutationId:++this.#n,options:i.defaultMutationOptions(s),state:l});return this.add(u),u}add(i){this.#e.add(i);const s=Is(i);if(typeof s=="string"){const l=this.#t.get(s);l?l.push(i):this.#t.set(s,[i])}this.notify({type:"added",mutation:i})}remove(i){if(this.#e.delete(i)){const s=Is(i);if(typeof s=="string"){const l=this.#t.get(s);if(l)if(l.length>1){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}else l[0]===i&&this.#t.delete(s)}}this.notify({type:"removed",mutation:i})}canRun(i){const s=Is(i);if(typeof s=="string"){const u=this.#t.get(s)?.find(c=>c.state.status==="pending");return!u||u===i}else return!0}runNext(i){const s=Is(i);return typeof s=="string"?this.#t.get(s)?.find(u=>u!==i&&u.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){lt.batch(()=>{this.#e.forEach(i=>{this.notify({type:"removed",mutation:i})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(i){const s={exact:!0,...i};return this.getAll().find(l=>Im(s,l))}findAll(i={}){return this.getAll().filter(s=>Im(i,s))}notify(i){lt.batch(()=>{this.listeners.forEach(s=>{s(i)})})}resumePausedMutations(){const i=this.getAll().filter(s=>s.state.isPaused);return lt.batch(()=>Promise.all(i.map(s=>s.continue().catch(qt))))}};function Is(i){return i.options.scope?.id}var Ib=class extends ul{constructor(i={}){super(),this.config=i,this.#e=new Map}#e;build(i,s,l){const u=s.queryKey,c=s.queryHash??ac(u,s);let d=this.get(c);return d||(d=new Gb({client:i,queryKey:u,queryHash:c,options:i.defaultQueryOptions(s),state:l,defaultOptions:i.getQueryDefaults(u)}),this.add(d)),d}add(i){this.#e.has(i.queryHash)||(this.#e.set(i.queryHash,i),this.notify({type:"added",query:i}))}remove(i){const s=this.#e.get(i.queryHash);s&&(i.destroy(),s===i&&this.#e.delete(i.queryHash),this.notify({type:"removed",query:i}))}clear(){lt.batch(()=>{this.getAll().forEach(i=>{this.remove(i)})})}get(i){return this.#e.get(i)}getAll(){return[...this.#e.values()]}find(i){const s={exact:!0,...i};return this.getAll().find(l=>Vm(s,l))}findAll(i={}){const s=this.getAll();return Object.keys(i).length>0?s.filter(l=>Vm(i,l)):s}notify(i){lt.batch(()=>{this.listeners.forEach(s=>{s(i)})})}onFocus(){lt.batch(()=>{this.getAll().forEach(i=>{i.onFocus()})})}onOnline(){lt.batch(()=>{this.getAll().forEach(i=>{i.onOnline()})})}},Xb=class{#e;#t;#n;#i;#o;#a;#r;#s;constructor(i={}){this.#e=i.queryCache||new Ib,this.#t=i.mutationCache||new Vb,this.#n=i.defaultOptions||{},this.#i=new Map,this.#o=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#r=Op.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=al.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#r?.(),this.#r=void 0,this.#s?.(),this.#s=void 0)}isFetching(i){return this.#e.findAll({...i,fetchStatus:"fetching"}).length}isMutating(i){return this.#t.findAll({...i,status:"pending"}).length}getQueryData(i){const s=this.defaultQueryOptions({queryKey:i});return this.#e.get(s.queryHash)?.state.data}ensureQueryData(i){const s=this.defaultQueryOptions(i),l=this.#e.build(this,s),u=l.state.data;return u===void 0?this.fetchQuery(i):(i.revalidateIfStale&&l.isStaleByTime(Xu(s.staleTime,l))&&this.prefetchQuery(s),Promise.resolve(u))}getQueriesData(i){return this.#e.findAll(i).map(({queryKey:s,state:l})=>{const u=l.data;return[s,u]})}setQueryData(i,s,l){const u=this.defaultQueryOptions({queryKey:i}),d=this.#e.get(u.queryHash)?.state.data,m=Tb(s,d);if(m!==void 0)return this.#e.build(this,u).setData(m,{...l,manual:!0})}setQueriesData(i,s,l){return lt.batch(()=>this.#e.findAll(i).map(({queryKey:u})=>[u,this.setQueryData(u,s,l)]))}getQueryState(i){const s=this.defaultQueryOptions({queryKey:i});return this.#e.get(s.queryHash)?.state}removeQueries(i){const s=this.#e;lt.batch(()=>{s.findAll(i).forEach(l=>{s.remove(l)})})}resetQueries(i,s){const l=this.#e;return lt.batch(()=>(l.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries({type:"active",...i},s)))}cancelQueries(i,s={}){const l={revert:!0,...s},u=lt.batch(()=>this.#e.findAll(i).map(c=>c.cancel(l)));return Promise.all(u).then(qt).catch(qt)}invalidateQueries(i,s={}){return lt.batch(()=>(this.#e.findAll(i).forEach(l=>{l.invalidate()}),i?.refetchType==="none"?Promise.resolve():this.refetchQueries({...i,type:i?.refetchType??i?.type??"active"},s)))}refetchQueries(i,s={}){const l={...s,cancelRefetch:s.cancelRefetch??!0},u=lt.batch(()=>this.#e.findAll(i).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let d=c.fetch(void 0,l);return l.throwOnError||(d=d.catch(qt)),c.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(u).then(qt)}fetchQuery(i){const s=this.defaultQueryOptions(i);s.retry===void 0&&(s.retry=!1);const l=this.#e.build(this,s);return l.isStaleByTime(Xu(s.staleTime,l))?l.fetch(s):Promise.resolve(l.state.data)}prefetchQuery(i){return this.fetchQuery(i).then(qt).catch(qt)}fetchInfiniteQuery(i){return i._type="infinite",this.fetchQuery(i)}prefetchInfiniteQuery(i){return this.fetchInfiniteQuery(i).then(qt).catch(qt)}ensureInfiniteQueryData(i){return i._type="infinite",this.ensureQueryData(i)}resumePausedMutations(){return al.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(i){this.#n=i}setQueryDefaults(i,s){this.#i.set(bo(i),{queryKey:i,defaultOptions:s})}getQueryDefaults(i){const s=[...this.#i.values()],l={};return s.forEach(u=>{wo(i,u.queryKey)&&Object.assign(l,u.defaultOptions)}),l}setMutationDefaults(i,s){this.#o.set(bo(i),{mutationKey:i,defaultOptions:s})}getMutationDefaults(i){const s=[...this.#o.values()],l={};return s.forEach(u=>{wo(i,u.mutationKey)&&Object.assign(l,u.defaultOptions)}),l}defaultQueryOptions(i){if(i._defaulted)return i;const s={...this.#n.queries,...this.getQueryDefaults(i.queryKey),...i,_defaulted:!0};return s.queryHash||(s.queryHash=ac(s.queryKey,s)),s.refetchOnReconnect===void 0&&(s.refetchOnReconnect=s.networkMode!=="always"),s.throwOnError===void 0&&(s.throwOnError=!!s.suspense),!s.networkMode&&s.persister&&(s.networkMode="offlineFirst"),s.queryFn===ic&&(s.enabled=!1),s}defaultMutationOptions(i){return i?._defaulted?i:{...this.#n.mutations,...i?.mutationKey&&this.getMutationDefaults(i.mutationKey),...i,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Kb=ee.createContext(void 0),Fb=({client:i,children:s})=>(ee.useEffect(()=>(i.mount(),()=>{i.unmount()}),[i]),V.jsx(Kb.Provider,{value:i,children:s}));function Zb(){return V.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:V.jsxs("div",{className:"max-w-md text-center",children:[V.jsx("h1",{className:"text-7xl font-bold text-foreground",children:"404"}),V.jsx("h2",{className:"mt-4 text-xl font-semibold text-foreground",children:"Page not found"}),V.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"The page you're looking for doesn't exist or has been moved."}),V.jsx("div",{className:"mt-6",children:V.jsx(ll,{to:"/",className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Go home"})})]})})}function Jb({error:i,reset:s}){console.error(i);const l=ot();return V.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:V.jsxs("div",{className:"max-w-md text-center",children:[V.jsx("h1",{className:"text-xl font-semibold tracking-tight text-foreground",children:"This page didn't load"}),V.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"Something went wrong. You can try refreshing or head back home."}),V.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-2",children:[V.jsx("button",{onClick:()=>{l.invalidate(),s()},className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Try again"}),V.jsx(ll,{to:"/",className:"inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",children:"Go home"})]})]})})}const oc=ZS()({head:()=>({meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Savant"},{name:"description",content:"Documentation for AI-native data automation"},{property:"og:title",content:"Savant"},{property:"og:description",content:"Documentation for AI-native data automation"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:Wb,notFoundComponent:Zb,errorComponent:Jb});function Wb(){return V.jsxs(V.Fragment,{children:[V.jsx(vb,{}),V.jsx(xp,{})]})}const $b="modulepreload",e0=function(i){return"/savant-kb/"+i},Wm={},Eo=function(s,l,u){let c=Promise.resolve();if(l&&l.length>0){let p=function(h){return Promise.all(h.map(S=>Promise.resolve(S).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),y=m?.nonce||m?.getAttribute("nonce");c=p(l.map(h=>{if(h=e0(h),h in Wm)return;Wm[h]=!0;const S=h.endsWith(".css"),v=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const A=document.createElement("link");if(A.rel=S?"stylesheet":$b,S||(A.as="script"),A.crossOrigin="",A.href=h,y&&A.setAttribute("nonce",y),document.head.appendChild(A),S)return new Promise((b,_)=>{A.addEventListener("load",b),A.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function d(m){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=m,window.dispatchEvent(y),!y.defaultPrevented)throw m}return c.then(m=>{for(const y of m||[])y.status==="rejected"&&d(y.reason);return s().catch(d)})},t0=()=>Eo(()=>import("./docs-B1NhywYr.js"),__vite__mapDeps([0,1,2,3,4])),n0=rl("/docs")({component:So(t0,"component")}),a0=()=>Eo(()=>import("./index-BZnx52C3.js"),__vite__mapDeps([5,1,2,3,6,4])),i0=rl("/")({head:()=>({meta:[{title:"Savant Docs — Documentation for AI-native data automation"},{name:"description",content:"Build governed data workflows with Savant. Guides, agent references, connector docs, and ready-to-clone templates for finance, ops, and analytics teams."},{property:"og:title",content:"Savant"},{property:"og:description",content:"Documentation for AI-native data automation. Workflows, agents, connectors, templates."},{property:"og:type",content:"website"}]}),component:So(a0,"component")}),o0=()=>Eo(()=>import("./docs.index-BqEdw6By.js"),__vite__mapDeps([7,4,2])),s0=rl("/docs/")({head:()=>({meta:[{title:"Savant — Build governed data workflows"},{name:"description",content:"Guides, references, and templates for building AI-powered data automations with Savant Labs."},{property:"og:title",content:"Savant"},{property:"og:description",content:"Everything you need to ship governed data workflows with Savant."}]}),component:So(o0,"component")}),l0=`---
title: "ADP connector"
collection: "Connectors & Files"
description: "Guide to Connecting ADP to Savant."
order: 3
updated: "2026-04-20"
icon: "cloud"
---

# ADP connector setup

ADP is a workforce and payroll management platform. Connecting ADP to Savant allows users to sync workforce, payroll, time, and related HR data into Savant workflows for reporting, analysis, and automation.

This connector supports OAuth-based authentication and requires configuration in the ADP Developer Portal before the connection can be completed in Savant.

---

## Features

- Read data from an ADP account using prebuilt schemas and query options.
- Write data to ADP for select supported objects.

---

## Requirements

Before setting up the ADP connector, ensure that you have:

- An active ADP account, such as ADP Workforce Now.
- Access to the ADP Developer Portal.
- Administrative privileges to register and manage applications.
- Required ADP APIs provisioned for your account.
- Client ID and Client Secret generated from the ADP application.
- SSL client certificate and certificate password.
- Permission to authorize application access in ADP.

---

## Connection method

Savant supports OAuth authentication for ADP.

---

## Procedure to configure ADP OAuth connection

### Step 1: Register an application in the ADP Developer Portal

1. Log in to the **ADP Developer Portal**.
2. Go to **My Apps > Create App**.
3. Complete the application form.

    | Field | Description |
    |------|-------------|
    | App Name | Enter the application name, such as \`Savant ADP Connector\`. |
    | Redirect URI | Enter \`https://app.savantlabs.io/api/callback\`. |

4. Under **Product API Access**, select the required APIs based on your integration needs.

    - HR.v2
    - Workers API
    - Work Assignment API
    - Work Schedules API
    - Worker Management API
    - Applicant Onboard V2 API
    - Payroll Data Input API
    - Payroll Output API
    - Team Time Cards API
    - Time Cards API
    - Time Off Balances API
    - Time Off Request API
    - Validation Table Code List API

5. Click **Create App**.

6. After the application is created, copy and securely store the following credentials:

    - Client ID
    - Client Secret
    - SSL Client Certificate, such as \`.pfx\` or \`.pem\`
    - Certificate password

    !!! note "Note"

        Set a secure password when downloading the SSL client certificate. You need this password when configuring the ADP connector in Savant.

7. Confirm that your ADP account is provisioned for the selected APIs.

    If any required API is unavailable, contact your ADP representative to enable access.

---

### Step 2: Configure permissions and OAuth scopes

1. Ensure the required OAuth scopes are granted for the selected ADP APIs.

2. Use the following scope mapping as a reference.

    | API | Required OAuth Scopes |
    |------|-----------------------|
    | Workers API | \`workers:read\` |
    | Work Assignment API | \`workAssignments:read:write\` |
    | Work Schedules API | \`workSchedules:read:write\` |
    | Worker Management API | \`workerManagement:read:write\` |
    | Applicant Onboard V2 API | \`applicantOnboard:read:write\` |
    | Payroll Data Input API | \`payrollDataInput:read:write\` |
    | Payroll Output API | \`payrollOutput:read\` |
    | Team Time Cards API | \`teamTimeCards:read\` |
    | Time Cards API | \`timeCards:read\` |
    | Time Off Balances API | \`timeOffBalances:read\` |
    | Time Off Request API | \`timeOffRequests:read\` |
    | Validation Table Code List API | \`validationTables:read\` |
    | Organizations API, if used | \`organizations:read\` |

---

### Step 3: Connect ADP to Savant

1. In Savant, go to **Systems > Add System**.
2. Select the **ADP** connector.
3. Click **Next**.
4. Enter the required connection details.

    | Field | Description |
    |------|-------------|
    | Client ID | Enter the Client ID generated from the ADP application. |
    | Client Secret | Enter the Client Secret generated from the ADP application. |
    | Base URL | Enter the ADP API base URL. Usually, this is \`https://api.adp.com\`. |
    | SSL Client Certificate | Upload the SSL client certificate downloaded from ADP. |
    | Certificate Password | Enter the password created when downloading the certificate. |

5. Click **Authenticate** to start OAuth authentication.
6. Sign in to ADP when prompted.
7. Grant the required access.
8. After successful authorization, ADP redirects you back to Savant.
9. Click **Confirm** to complete the connector setup.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| Authentication fails | Verify that the Client ID and Client Secret are correct. |
| Redirect error occurs | Ensure the redirect URI in ADP exactly matches \`https://app.savantlabs.io/api/callback\`. |
| Authorization fails | Confirm that your ADP user has permission to authorize application access. |
| API access is unavailable | Verify that the required API products are provisioned in the ADP Developer Portal. |
| Scope-related errors occur | Confirm that the selected APIs have the required OAuth scopes. |
| Large syncs fail or timeout | Use incremental syncs or contact support if you are ingesting large volumes. |
| Certificate authentication fails | Confirm that the uploaded certificate is valid and that the certificate password is correct. |

---

## Result

The ADP connector is configured in Savant using OAuth authentication. Savant can now read supported workforce, payroll, time, and HR data from ADP and write data to supported ADP objects based on the configured permissions.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
`,r0=`---
title: "Agents overview"
collection: "Platform Concepts"
description: "AI agents are the building blocks for inference, transformation, matching, and document extraction."
order: 2
updated: "2026-05-08"
icon: "sparkles"
---

# Agents overview

**Agents** are AI-powered nodes that handle the messy parts of data work — the parts that traditionally require either brittle regex or a human reviewer.

Every agent in Savant is:

- **Governed** — every decision is logged with the model used, the prompt, the inputs, and a confidence score
- **Deterministic where possible** — agents prefer rules and lookups, falling back to LLM calls only when needed
- **Reviewable** — low-confidence rows route to a queue, not a hallucination

## The agent family

| Agent | Purpose | Typical input | Typical output |
|---|---|---|---|
| [Infer](/savant-kb/docs/infer-agent) | Fill, classify, normalize | Sparse / dirty columns | Cleaned, typed columns |
| [Transform](/savant-kb/docs/transform-agent) | Reshape with natural language | Any table | Reshaped table |
| [Fuse](/savant-kb/docs/fuse-agent) | Probabilistic join / match | Two tables | Joined table with confidence |
| [Vision](/savant-kb/docs/vision-agent) | Extract from documents/images | PDFs, scans, images | Structured rows |
| [Match](/savant-kb/docs/match-agent) | Entity resolution | Two entity lists | Match groups |

## When to use an agent vs a function

Use a **function** when the rule is crisp: \`upper()\`, \`coalesce()\`, \`date_diff()\`.

Use an **agent** when the rule is fuzzy: "match these even when the names differ" or "extract the invoice number from this PDF."

!!! tip
    Always start with functions. Reach for an agent only when you'd otherwise need a human or a regex you'll regret.

## Cost and governance

Agents call models. Every call is metered and visible in **Settings → Usage**. You can:

- Set per-workflow budgets
- Choose the model tier (Fast / Balanced / Best)
- Pin a workflow to a specific model version for reproducibility

## Where to go next

- [Infer Agent](/savant-kb/docs/infer-agent)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
`,u0=`---
title: "Connectors overview"
collection: "Connectors & Files"
description: "How Savant talks to databases, warehouses, SaaS apps, and file systems — securely."
order: 2
updated: "2026-04-18"
icon: "plug"
---

# Connectors overview

Savant ships with 200+ connectors covering databases, warehouses, SaaS apps, file systems, and message queues. Every connector follows the same model.

## The connector model

A connector has three parts:

1. **Connection** — credentials and configuration (stored encrypted, scoped to an environment)
2. **Source / Destination node** — placed on the canvas to read or write
3. **Capabilities** — what the connector supports (schema preview, incremental reads, upserts, etc.)

## Authentication

Connectors support, where the upstream system allows:

- **OAuth 2.0** with token rotation (HubSpot, Salesforce, Google, Microsoft)
- **Key + secret** (AWS, Snowflake, most databases)
- **Service account JSON** (Google Cloud, BigQuery)
- **Username + password** as a last resort

Credentials never appear in workflow definitions — only credential **references** do. This means workflows can move freely between environments.

## Incremental reads

Connectors that support cursors (timestamps, IDs, change tracking) can read **incrementally** — only new or changed rows since the last run. Enable it on the source node:

\`\`\`yaml
mode: incremental
cursor: updated_at
\`\`\`

## Writes: append, upsert, replace

| Mode | Behavior | When to use |
|---|---|---|
| Append | Insert new rows | Event logs, audit tables |
| Upsert | Insert or update by key | Mirroring an upstream system |
| Replace | Drop and recreate | Small lookup tables |

## Where to go next

- [Snowflake connector](/savant-kb/docs/snowflake-connector)
- [Excel files](/savant-kb/docs/excel-files)
- [S3 connector](/savant-kb/docs/s3-connector)
`,c0=`---
title: "Files overview"
collection: "Connectors & Files"
description: "Working with files in Savant."
order: 1
updated: "2026-04-28"
icon: "sheet"
---


# Files overview

Savant supports common file types and enterprise file systems used in data workflows. You can use files as input sources, process them in workflows, and write the results back to supported file destinations.

This article describes the file types supported in Savant, the read and write limits for each file type, and the file system connectors available for sourcing and storing files.

---

## Supported file types

Savant supports the following file types as input sources and output targets in workflows.

### Flat files

Flat files are plain-text tabular files where each row represents a record and each column represents a field.

Savant supports the following flat file formats:

- \`.csv\`: Comma-separated values.
- \`.tsv\`: Tab-separated values.
- \`.txt\`: Tab-separated values.

### Text blobs

A text blob is a plain-text file that Savant reads as a single block of content instead of reading it row by row.

Use text blobs when working with unstructured or semi-structured text, such as:

- Exported logs.
- Raw API responses.
- Large freeform documents.
- Text files that should not be treated as tables.

### Spreadsheets

Savant supports Microsoft Excel and Google Sheets formats.

Supported spreadsheet formats include:

- \`.xlsx\`: Microsoft Excel workbook.
- \`.xls\`: Legacy Microsoft Excel workbook.
- \`.xlsm\`: Microsoft Excel macro-enabled workbook.
- \`.xlsb\`: Microsoft Excel binary workbook.
- Google Sheets: Connected through the Google Drive file system or Google Sheets direct connector.

### PDF

Savant supports \`.pdf\` files for read and write operations.

PDF extraction capabilities depend on the structure of the document. For example, extraction behavior may vary depending on whether the PDF contains selectable text, scanned images, tables, or mixed content.

### Parquet

Savant supports \`.parquet\` files for columnar data workloads.

Parquet is recommended for large-scale dataset processing because it is optimized for efficient storage and analytical workloads.

---

## Read and write limits

The following table summarizes the read and write size limits by file type. Limits apply per file and per operation.

| Extension | Type | Read limit | Write limit |
|------|------|------------|-------------|
| \`.csv\` | Comma-separated flat file | 1 GB | 1 GB |
| \`.tsv\` | Tab-separated flat file | 1 GB | 1 GB |
| \`.txt\` | Flat file or text blob | 1 GB | 1 GB |
| \`.xlsx\` | Excel spreadsheet | 1 GB | 1 GB ¹ |
| \`.xls\` | Legacy Excel spreadsheet | 50 MB | N/A |
| \`.xlsm\` | Excel macro-enabled spreadsheet | 1 GB | 1 GB ¹ |
| \`.xlsb\` | Excel binary spreadsheet | 1 GB | N/A |
| \`.gsheet\` | Google Sheets | 1 GB | 1 GB ² |
| \`.pdf\` | PDF | 1 GB | 1 GB |
| \`.parquet\` | Parquet | 1 GB | 1 GB |

¹ When writing spreadsheets through the Microsoft OneDrive or SharePoint connectors, the write limit is **250 MB**. This limit is imposed by the Microsoft Graph API and applies regardless of file format.

² When writing spreadsheets through Google Drive, the worksheet is limited to **10 million cells**. This limit is imposed by Google Sheets and includes both empty and populated cells.

---

## File type guides

Each file type has its own configuration options, parsing behavior, and known limitations.

Select the appropriate guide based on the file type you want to use:

- Flat files and text blobs
- Spreadsheets, including Excel and Google Sheets
- PDF
- Parquet

---

## File system connectors

Savant integrates with common enterprise file systems. Each connector is configured separately and may have its own authentication method, path format, and performance considerations.

For setup instructions and connector-specific limits, refer to the individual connector guides:

- Microsoft OneDrive
- Microsoft SharePoint
- Google Drive
- Box
- Dropbox
- SFTP/FTP

---

## Summary

Savant provides native support for common enterprise file formats and file systems. You can read supported files into workflows, process the data, and write results back to supported destinations while following the file-specific size limits and connector-specific constraints.

---

## Where to go next

- [Google Sheets](/savant-kb/docs/google-sheets)
- [S3 connector](/savant-kb/docs/s3-connector)
`,f0=`---
title: "Financial reconciliation template"
collection: "Templates & Solutions"
description: "Match transactions between your bank statement and general ledger, surface breaks, and produce auditor-ready evidence."
order: 2
updated: "2026-05-10"
icon: "balance"
---

# Financial reconciliation

This template reconciles transactions between a bank statement (or any external source of truth) and a general ledger. It produces three outputs:

1. **Matched** — rows that tie, with the matching rule recorded
2. **Breaks** — rows on one side without a partner, grouped by reason
3. **Evidence pack** — signed PDF for your auditor

## The pipeline

\`\`\`text
[Bank file] ─┐
             ├─► [Normalize] ─► [Fuse: amount+date±2d, memo fuzzy] ─► [Classify breaks] ─► [Outputs]
[GL extract]─┘
\`\`\`

## What you customize

- **Sources** — point at your bank file (CSV / OFX) and your GL extract (Snowflake / NetSuite / SAP)
- **Match tolerances** — the date window and amount tolerance (default ±2 days, ±$0.01)
- **Break categorization rules** — timing, in-transit, FX, duplicate, missing
- **Reviewer assignment** — who gets each break category in Slack/email

## Break categorization

The template classifies every break:

| Category | Rule |
|---|---|
| Timing | Match exists in the next period |
| In transit | Wire or ACH note in memo, no GL entry yet |
| FX | Match within 1% if rate adjusted |
| Duplicate | More than one candidate match |
| Unknown | Routed to a human |

## Audit evidence

On every run, the template assembles a PDF including:

- The matched/break counts and dollar totals
- A sample of each break category
- The exact workflow version hash and run ID
- A cryptographic signature of the inputs

Drop it directly into your audit folder.

## Where to go next

- [Fuse Agent](/savant-kb/docs/fuse-agent)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
`,d0='---\ntitle: "Functions reference"\ncollection: "Reference"\ndescription: "Every built-in function — string, date, math, array, conditional — with examples."\norder: 1\nupdated: "2026-05-12"\nicon: "function"\n---\n\n# Functions reference\n\nSavant functions help users transform, format, calculate, classify, and enrich data inside workflows. Functions can be used in calculated columns, transformations, and expression-based logic to prepare data for analysis, reporting, and automation.\n\n---\n\n## Date and DateTime\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| DATETIME | Creates a datetime based on the provided year, month, day, hour, minute, and second values. | `DATETIME(year, month, day, hour, minute, second)` |\n| DATE | Creates a date based on the provided year, month, and day values. | `DATE(year, month, day)` |\n| DATE_ADD | Adds a specified offset of time to a date or datetime. | `DATE_ADD(date, offset, "second/minute/hour/day/month/year")` |\n| DATE_DIFF | Calculates the difference between two dates. | `DATE_DIFF(end_date, start_date, "second/minute/hour/day/week/month/quarter/year")` |\n| DAY | Retrieves the day of the month from a date or datetime. | `DAY(date)` |\n| DAY_OF_WEEK | Determines the day of the week for a date or datetime. | `DAY_OF_WEEK(date, ["monday/tuesday/wednesday/thursday/friday/saturday/sunday"])` |\n| DAY_OF_YEAR | Calculates the day of the year for a date or datetime. | `DAY_OF_YEAR(date)` |\n| DAYS_IN_MONTH | Calculates the number of days in the month for a date or datetime. | `DAYS_IN_MONTH(date)` |\n| DAYS_IN_YEAR | Calculates the number of days in a year, including leap years. | `DAYS_IN_YEAR(date)` |\n| HOUR | Extracts the hour from a datetime. | `HOUR(datetime)` |\n| INTERVAL (Date) | Adds days, weeks, months, quarters, or years to a date. | `date + INTERVAL number DAY/MONTH/YEAR` |\n| INTERVAL (DateTime) | Adds seconds, minutes, or hours to a datetime. | `datetime + INTERVAL number SECOND/MINUTE/HOUR` |\n| LIST_TO_TEXT | Concatenates inputs from a list variable into text. | `LIST_TO_TEXT(list)` |\n| MINUTE | Extracts the minute from a datetime. | `MINUTE(datetime)` |\n| MONTH | Retrieves the month from a date. | `MONTH(date)` |\n| NOW | Retrieves the current date and time. | `NOW()` |\n| QUARTER | Retrieves the quarter of the year from a date or datetime. | `QUARTER(date)` |\n| SECOND | Extracts the second from a datetime. | `SECOND(datetime)` |\n| TIME_PERIOD | Returns a standard time period for a date or datetime field. | `TIME_PERIOD(date, "day"/"week"/"month"/"quarter"/"year")` |\n| TIME_PERIOD_OFFSET | Calculates the number of time periods between a date and the current period. | `TIME_PERIOD_OFFSET(date, "day"/"week"/"month"/"quarter"/"year"/"decade")` |\n| TODAY | Retrieves the current date. | `TODAY()` |\n| WEEK / WEEK_OF_YEAR | Determines the week number of the year for a date or datetime. | `WEEK(date)` |\n| YEAR | Retrieves the year from a date or datetime. | `YEAR(date)` |\n\n---\n\n## Formatting\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| TO_BOOLEAN | Converts a value to a boolean format. | `TO_BOOLEAN(value)` |\n| TO_DATETIME | Converts text to datetime format. | `TO_DATETIME(text)` |\n| TO_DATE | Converts text to date format. | `TO_DATE(text)` |\n| TO_INTEGER | Converts a value to an integer. | `TO_INTEGER(value)` |\n| TO_NUMBER | Converts a value to number format. | `TO_NUMBER(value)` |\n| TO_TEXT | Converts a value to text format. | `TO_TEXT(value)` or `TO_TEXT(datetime, "[format]")` |\n\n---\n\n## Geospatial\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| GEO_AREA | Calculates the area of a polygon in square miles or square kilometers. | `GEO_AREA(geometry, [unit])` |\n| GEO_BUFFER | Creates a buffer polygon around a geometry at a specified distance. | `GEO_BUFFER(geometry, distance, [unit])` |\n| GEO_CENTROID | Returns the geometric center point of a polygon or multi-geometry. | `GEO_CENTROID(geometry)` |\n| GEO_DIFFERENCE | Returns the portion of the first geometry that does not overlap with the second geometry. | `GEO_DIFFERENCE(geometry1, geometry2)` |\n| GEO_INTERSECTION | Returns the overlapping portion of two geometries. | `GEO_INTERSECTION(geometry1, geometry2)` |\n| GEO_ISVALID | Validates whether a geometry is topologically valid. | `GEO_ISVALID(geometry)` |\n| GEO_PERIMETER | Calculates the perimeter length of a polygon in miles or kilometers. | `GEO_PERIMETER(geometry, [unit])` |\n| GEO_POINT | Creates a point geometry from longitude and latitude coordinates. | `GEO_POINT(longitude, latitude)` |\n| GEO_SPATIAL_DISTANCE | Calculates the distance between two geometries. | `GEO_SPATIAL_DISTANCE(geometry1, geometry2, [unit])` |\n| GEO_TRADE_AREA | Creates a radius-based trade area polygon around a point. | `GEO_TRADE_AREA(point, radius, [unit])` |\n| GEO_TYPE | Returns the geometry type, such as Point, Polygon, or LineString. | `GEO_TYPE(geometry)` |\n| GEO_UNION | Combines two geometries into a single geometry. | `GEO_UNION(geometry1, geometry2)` |\n\n---\n\n## Keywords\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| CASE...WHEN... | Evaluates conditions and returns a value based on the first true condition. | `CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE default_result END` |\n| IN | Checks if a value exists within a specified set of values. | `IN (..., ...)` |\n\n---\n\n## Logical\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| IFS | Returns a value corresponding to the first true condition. | `IFS(condition1, value1, condition2, value2, ...)` |\n| IF | Returns one value if a condition is true and another value if false. | `IF(condition, value when true, value when false)` |\n\n---\n\n## Math\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| ABS | Returns the absolute value of a number. | `ABS(number)` |\n| CEIL | Rounds a number up to the nearest integer. | `CEIL(number)` |\n| FLOOR | Rounds a number down to the nearest integer. | `FLOOR(number)` |\n| GEO_DISTANCE | Calculates the distance between two points. | `GEO_DISTANCE(lat1, long1, lat2, long2, [unit])` |\n| GREATEST | Returns the greatest value among the given arguments. | `GREATEST(arg1, arg2, ...)` |\n| LEAST | Returns the smallest value among the given arguments. | `LEAST(arg1, arg2, ...)` |\n| LOG | Calculates the logarithm of a number to a specified base. | `LOG(number, base)` |\n| MOD | Returns the remainder of a division operation. | `MOD(dividend, divisor)` |\n| POWER | Raises a number to the power of another number. | `POWER(number, exponent)` |\n| RANDOM | Generates a random decimal value between 0 and 1. | `RANDOM()` |\n| ROUNDDOWN | Rounds a number down to the nearest integer. | `ROUNDDOWN(number)` |\n| ROUNDUP | Rounds a number up to the nearest integer. | `ROUNDUP(number)` |\n| ROUND | Rounds a number to a specified number of decimal places. | `ROUND(number, [decimals])` |\n\n---\n\n## Multi-row aggregation and windowing\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| AVG | Calculates the average value of numbers. | `AVG(number)` |\n| CONCAT | Combines all text values. | `CONCAT(text)` |\n| CONCAT_DISTINCT | Combines unique text values. | `CONCAT_DISTINCT(text)` |\n| COUNT | Counts the number of values. | `COUNT(arg)` |\n| COUNT_DISTINCT | Counts the distinct number of values. | `COUNT_DISTINCT(arg)` |\n| CUMULATIVE_SUM | Calculates the running sum. | `CUMULATIVE_SUM(number)` |\n| FILL | Populates missing values using values above or below the row. | `FILL(arg)` |\n| FIRST | Returns the first-row value. | `FIRST(arg)` |\n| LAG | Returns the previous-row value. | `LAG(arg)` |\n| LAST | Returns the last-row value. | `LAST(arg)` |\n| LEAD | Returns the next-row value. | `LEAD(arg)` |\n| MAX | Returns the maximum value. | `MAX(arg)` |\n| MEDIAN | Returns the median value. | `MEDIAN(number)` |\n| MIN | Returns the minimum value. | `MIN(arg)` |\n| NTILE | Assigns a bucket number based on the number of tiles requested. | `NTILE(arg)` |\n| RANK | Assigns a rank to each row, with ties receiving the same rank. | `RANK()` |\n| ROW_NUM | Assigns a row number to each row, with ties receiving different values. | `ROW_NUM()` |\n| STDDEV | Calculates the standard deviation of numbers. | `STDDEV(number)` |\n| SUM | Calculates the sum of numbers. | `SUM(number)` |\n| VAR | Calculates the variance of numbers. | `VAR(number)` |\n\n---\n\n## Text\n\n| Name | Description | Syntax |\n|------|-------------|--------|\n| COALESCE | Returns the first non-null value from a list of options. | `COALESCE(option1, option2, ...)` |\n| CONCAT | Concatenates multiple text values into a single text value. | `CONCAT(text1, text2, ...)` |\n| CONTAINS | Determines whether a specified subtext exists within text. | `CONTAINS(text, subtext)` |\n| FIRST_NOT_EMPTY | Returns the first non-empty value from a list of options. | `FIRST_NOT_EMPTY(option1, option2, ...)` |\n| HASH | Computes the hash value of text using MD5 or SHA-1. | `HASH("md5"/"sha1", text)` |\n| HTML_ESCAPE | Escapes HTML special characters in text. | `ESCAPE_HTML(text)` |\n| IS_EMPTY | Checks if a value or field is empty. | `IS_EMPTY(arg)` |\n| JSON_FIELD | Extracts a specific field from JSON data. | `JSON_FIELD(json, json_path)` |\n| JSON_SET | Sets a value for a specific field in JSON data. | `JSON_SET(json, json_path, value)` |\n| JWT_ENCODE | Encodes a JSON Web Token using an algorithm, key, payload, and optional header. | `JWT_ENCODE(algorithm, key, payload_json_text, [header_json_text])` |\n| LEFT_PART | Retrieves the leftmost characters from text. | `LEFT_PART(text, number)` |\n| LENGTH | Computes the number of characters in text. | `LENGTH(text)` |\n| LEVENSHTEIN | Measures the edit distance between two text values. | `LEVENSHTEIN(text1, text2)` |\n| LOWER | Converts text to lowercase. | `LOWER(text)` |\n| MID | Extracts a portion of text from a specified position. | `MID(text, start, [length])` |\n| PAD_LEFT | Adds padding characters to the left side of text. | `PAD_LEFT(text, length, character)` |\n| PAD_RIGHT | Adds padding characters to the right side of text. | `PAD_RIGHT(text, length, character)` |\n| PROPER | Capitalizes the first letter of each word in text. | `PROPER(text)` |\n| REGEX_EXTRACT | Extracts text that matches a regular expression pattern. | `REGEX_EXTRACT(text, "pattern", [offset])` |\n| REGEX_MATCH | Checks if text matches a regular expression pattern. | `REGEX_MATCH(text, "pattern")` |\n| REGEX_REPLACE | Replaces text that matches a regular expression pattern. | `REGEX_REPLACE(text, "pattern", replacement)` |\n| REGEX_SEARCH | Returns the index of the first matching subtext based on a regular expression pattern. | `REGEX_SEARCH(text, "pattern", [offset])` |\n| REPEAT | Repeats text a specified number of times. | `REPEAT(text, number)` |\n| REPLACE | Replaces all occurrences of search text with replacement text. | `REPLACE(text, search, replace)` |\n| REVERSE | Reverses the order of characters in text. | `REVERSE(text)` |\n| RIGHT_PART | Extracts the rightmost characters from text. | `RIGHT_PART(text, number)` |\n| SEARCH | Searches for subtext and returns the index of the first occurrence. | `SEARCH(text, search)` |\n| SOUNDEX | Converts text to a SOUNDEX code for phonetic matching. | `SOUNDEX(text)` |\n| SPLIT_PART | Extracts a specific part of text using a delimiter. | `SPLIT_PART(text, delimiter, part)` |\n| TRIM | Removes leading and trailing spaces. | `TRIM(text)` |\n| UNESCAPE_HTML | Converts HTML escape sequences back to original characters. | `UNESCAPE_HTML(text)` |\n| UPPER | Converts text to uppercase. | `UPPER(text)` |\n\n---\n\n## Where to go next\n\n- [Keyboard shortcuts](/savant-kb/docs/keyboard-shortcuts)\n- [Transform Agent](/savant-kb/docs/transform-agent)\n',h0=`---
title: "Fuse Agent"
collection: "Agents"
description: "Probabilistic joins for entities that don't share a clean key."
order: 3
updated: "2026-05-09"
icon: "link"
---

# Fuse Agent

The **Fuse Agent** joins two tables when there's no clean shared key — for example, matching invoices in your AP system to vendor records that someone typed by hand.

## How it differs from a SQL JOIN

A SQL \`JOIN\` requires exact matches. Fuse uses a multi-signal scoring model:

- **Exact match** on any provided strong key (highest score)
- **Fuzzy string** similarity on name fields
- **Phonetic** match (Soundex / Metaphone) for typos
- **Domain knowledge** (email domain, address tokens, tax IDs)

Each candidate pair gets a score 0–1. You set the threshold; everything above auto-matches, everything below routes to review.

## Configuration

\`\`\`yaml
left: ap_invoices
right: vendor_master
keys:
  - left: vendor_name,      right: name,        weight: 0.5, mode: fuzzy
  - left: tax_id,           right: ein,         weight: 0.4, mode: exact
  - left: invoice_address,  right: hq_address,  weight: 0.1, mode: fuzzy
threshold: 0.8
\`\`\`

## Output

Fuse emits a join with extra columns:

| ... | _fuse_score | _fuse_explain |
|---|---|---|
| ... | 0.97 | exact tax_id, name fuzzy 0.94 |
| ... | 0.72 | name fuzzy 0.72, address mismatch |

The \`_fuse_explain\` column makes review fast — a human can read it and decide in seconds.

!!! tip
    Start with a high threshold (\`0.9\`) and lower it after seeing the review queue. Most teams settle around \`0.82–0.85\`.

## Where to go next

- [Match Agent](/savant-kb/docs/match-agent) — when you need transitive entity resolution
- [Financial reconciliation template](/savant-kb/docs/financial-reconciliation)
`,m0=`---
title: "Google Sheets"
collection: "Connectors & Files"
description: "Read and write live Google Sheets — by URL, with named ranges, and through service accounts."
order: 4
updated: "2026-04-25"
icon: "sheet"
---

# Google Sheets

The Google Sheets connector reads and writes live sheets. Most teams use it as a lightweight UI for non-technical reviewers.

## Authentication

Two options:

- **OAuth** — best for individual users; the connection acts as that user
- **Service account** — best for production; share each sheet with the service account's email

## Reading

Configure by URL or by spreadsheet ID + sheet name:

\`\`\`yaml
spreadsheet:  https://docs.google.com/spreadsheets/d/1ABCxyz.../edit
sheet:        Reviewed Items
range:        A1:Z          # optional; defaults to full sheet
header_row:   1
\`\`\`

## Writing

Three modes:

| Mode | Behavior |
|---|---|
| Overwrite | Clear sheet, write rows |
| Append | Add rows below existing data |
| Upsert | Update rows matching a key, append the rest |

## Patterns that work

- **Review queues** — write low-confidence rows to a sheet, let analysts edit, read them back on the next run.
- **Lookup tables** — let business users own dictionaries (account mappings, exclusion lists) without touching the workflow.
- **Status dashboards** — write a one-row summary on every run for finance to glance at.

!!! warning
    Google Sheets has hard limits (10M cells per spreadsheet, ~5M cell-edits/minute API). For datasets above a few hundred thousand rows, write to a warehouse instead and connect the sheet via Connected Sheets.

## Where to go next

- [Excel files](/savant-kb/docs/excel-files)
- [Snowflake connector](/savant-kb/docs/snowflake-connector)
`,p0=`---
title: "Governance & audit trail"
collection: "Platform Concepts"
description: "Every decision in Savant is logged, attributable, and reproducible — by design."
order: 3
updated: "2026-04-22"
icon: "shield"
---

# Governance & audit trail

Finance, audit, and regulated teams adopt Savant because **every output can be traced back to every input** — automatically, without you having to instrument anything.

## What gets logged

For every run, Savant records:

- The exact workflow version that ran (immutable hash)
- The model versions used by any agents
- The connector credentials used (by reference, never the secret)
- A sample of inputs and outputs at every edge
- Who triggered the run, and how (manual, scheduled, API)

## The lineage graph

Every output cell has a back-pointer to the source rows that produced it. Click a cell in the run inspector → **Trace lineage** to see:

\`\`\`text
output[42].total ──► transform[3].sum ──► source[s3://drops/orders/2025-05-12.csv]:rows[11..18]
\`\`\`

This is the single fastest way to answer the question *"where did this number come from?"*

## Approvals and locked versions

For sensitive workflows, enable **Require approval to deploy** in the workflow settings. The flow becomes:

1. A Builder edits and tests in the Development environment.
2. They open a **Promote to Production** request.
3. A Deployer reviews the diff (node-by-node) and approves or rejects.
4. The approved version is hashed and locked — any further edit creates a new version.

## Exporting the audit trail

For SOC 2 / SOX evidence, export runs as a signed JSON bundle:

\`\`\`bash
savant audit export \\
  --workflow orders-enrichment \\
  --from 2025-01-01 --to 2025-03-31 \\
  --out q1-evidence.json
\`\`\`

The bundle includes a cryptographic manifest so auditors can verify nothing has been tampered with after export.

## Where to go next

- [Workspace setup](/savant-kb/docs/workspace-setup)
- [API tokens](/savant-kb/docs/api-tokens)
`,g0=`---
title: "Infer Agent"
collection: "Agents"
description: "Enrich, classify, and label data with AI – directly inside your analysis."
order: 1
updated: "2026-05-12"
icon: "sparkles"
---

# Infer Agent

Infer Agent brings generative AI into data preparation so users can enrich, classify, label, and standardize data directly inside an analysis. It helps convert raw or incomplete fields into structured, useful outputs that can support reporting, modeling, automation, and operational workflows.

Many datasets contain useful information but lack the context needed for analysis. For example, a job title may exist without seniority, a support ticket may describe an issue without a topic, or a customer comment may include feedback without a sentiment label. Infer Agent helps generate this missing context without requiring users to export data to a separate AI tool or wait for engineering support.

In Savant, Infer Agent uses a prompt-driven approach. Users select an LLM service, define a prompt, choose the fields to transform, and write the AI-generated output back to the dataset as a new AI Answer field.

---

## Features

- Enrich existing data with AI-generated context.
- Classify records by category, topic, entity type, or business dimension.
- Label customer feedback, support tickets, comments, and other text fields.
- Standardize messy or inconsistent free-text inputs.
- Generate structured outputs from existing data fields.
- Process rows using streaming or batch-based execution.
- Preview sampled AI results during development before running the full workflow.

---

## Common use cases

### Fill in missing attributes

Use Infer Agent to infer missing details from related fields and available record context.

For example, you can infer:

- Seniority from a job title.
- Country or region from a city.
- Department from a role description.
- Product category from a description.

### Classify records and topics

Use Infer Agent to assign categories, topics, entity types, or business labels to records.

For example, you can classify:

- Support tickets by issue type.
- Customer comments by topic.
- Accounts by industry.
- Leads by business segment.

### Standardize free-text inputs

Use Infer Agent to convert inconsistent text into cleaner and more structured outputs.

For example, you can standardize:

- Descriptions.
- Notes.
- Addresses.
- Customer-entered values.
- Free-text survey responses.

### Run sentiment analysis at scale

Use Infer Agent to tag feedback, comments, reviews, or support tickets with sentiment labels.

For example:

- Positive
- Negative
- Neutral

### Enrich data for downstream use

Use Infer Agent to generate additional context that improves dashboards, automations, and decision workflows.

For example, you can create:

- Summary fields.
- Risk labels.
- Priority labels.
- Business descriptions.
- Recommended next actions.

---

## How Infer Agent works

Infer Agent is prompt-driven. You define what you want the AI model to generate, select the input fields, and configure how the rows should be processed.

At a high level, the process includes:

1. Select an LLM service.
2. Write a prompt that explains the expected output.
3. Choose the field or fields to transform.
4. Configure the processing method.
5. Apply the configuration during development.
6. Review the generated AI Answer field.
7. Run the full workflow when the prompt output is acceptable.

The model output is written back to the dataset as a new **AI Answer** field.

---

## Model and processing options

Infer Agent is designed to support modern LLM workflows in a governed analytics environment.

Teams can use:

- Savant-managed LLM access for lightweight testing.
- Their own model configuration for broader production use.

Infer Agent also supports different processing approaches based on dataset size and workflow needs:

| Processing option | Description |
|------|-------------|
| Streaming | Processes smaller datasets and provides quicker feedback during development. |
| Batch processing | Processes larger datasets in batches for more scalable execution. |

---

## Development preview behavior

To help conserve LLM usage and make prompt testing easier, Infer Agent samples rows during development.

When you click **Apply** in development mode:

- Savant calculates 5 new records.
- Clicking **Apply** again calculates 5 additional records.
- This continues until the configured maximum is reached.
- When the full workflow runs, all eligible rows are processed.
- Up to 1000 records are visible in the development preview.

This behavior explains why users may not see the entire dataset refreshed immediately while testing or refining prompts.

---

## Prompting best practices

Infer Agent works best when prompts are specific, structured, and clear.

Use the following best practices when writing prompts:

- Clearly describe the task.
- Define the expected output format.
- Use a fixed set of labels when classification is required.
- Specify whether the answer should be short or detailed.
- Include rules for uncertain or missing information.
- Ask the model to return a blank value if the answer cannot be inferred.
- Avoid vague instructions that can produce inconsistent results.

### Example prompt for classification

\`\`\`text
Classify the support ticket into one of the following categories:
Billing, Login issue, Data issue, Feature request, Other.

Return only the category name. If the category cannot be determined, return Other.
\`\`\`\`

### Example prompt for sentiment analysis

\`\`\`text
Classify the customer comment as Positive, Negative, or Neutral.

Return only one label. If the sentiment is unclear, return Neutral.
\`\`\`

### Example prompt for enrichment

\`\`\`text
Infer the likely seniority level from the job title.

Return one of the following values:
Entry level, Manager, Director, Executive, Unknown.

If the seniority cannot be inferred, return Unknown.
\`\`\`

---

## What makes Infer Agent different

Infer Agent is designed for analytics workflows, not general conversation. The goal is to generate structured, repeatable, and governed outputs inside a dataset.

This makes it useful for analysts who want to use LLMs for data enrichment without leaving the Savant workflow environment.

---

## Best for

Infer Agent is best for teams that want to:

* Enrich incomplete datasets.
* Classify records at scale.
* Label text fields consistently.
* Standardize messy inputs.
* Generate structured AI outputs inside Savant.
* Prepare data for dashboards, automations, models, and operational workflows.

---

## Summary

Infer Agent helps users apply generative AI directly inside Savant analyses. By using prompts and selected input fields, users can generate new structured outputs, classify records, fill missing context, and standardize data without leaving the data preparation workflow.

---

## Where to go next

- [Transform Agent](/savant-kb/docs/transform-agent)
- [Functions reference](/savant-kb/docs/functions-reference)
`,y0=`---
title: "Keyboard shortcuts"
collection: "Reference"
description: "Move through the canvas, inspector, and command palette without touching the mouse."
order: 2
updated: "2026-05-01"
icon: "keyboard"
---

# Keyboard shortcuts

Savant is designed to be fast for builders who don't want to take their hands off the keyboard.

## Global

| Shortcut | Action |
|---|---|
| <kbd>⌘</kbd> <kbd>K</kbd> | Open command palette |
| <kbd>⌘</kbd> <kbd>/</kbd> | Open search |
| <kbd>g</kbd> <kbd>w</kbd> | Go to workflows |
| <kbd>g</kbd> <kbd>r</kbd> | Go to recent runs |
| <kbd>g</kbd> <kbd>s</kbd> | Go to settings |
| <kbd>?</kbd> | Show this shortcut sheet |

## Canvas

| Shortcut | Action |
|---|---|
| <kbd>n</kbd> | New node |
| <kbd>Space</kbd> + drag | Pan |
| <kbd>⌘</kbd> + scroll | Zoom |
| <kbd>f</kbd> | Fit to screen |
| <kbd>⌫</kbd> | Delete selected node |
| <kbd>⌘</kbd> <kbd>D</kbd> | Duplicate node |
| <kbd>⌘</kbd> <kbd>Z</kbd> / <kbd>⇧⌘Z</kbd> | Undo / redo |

## Inspector

| Shortcut | Action |
|---|---|
| <kbd>⌘</kbd> <kbd>↵</kbd> | Run step |
| <kbd>⇧⌘↵</kbd> | Run full workflow |
| <kbd>[ </kbd> / <kbd>]</kbd> | Previous / next node |
| <kbd>⌘</kbd> <kbd>L</kbd> | View run logs |

## Editor (inside expression/code fields)

| Shortcut | Action |
|---|---|
| <kbd>⌃</kbd> <kbd>Space</kbd> | Autocomplete |
| <kbd>⌘</kbd> <kbd>P</kbd> | Insert column reference |
| <kbd>⌘</kbd> <kbd>F</kbd> | Find in code |

## Where to go next

- [Functions reference](/savant-kb/docs/functions-reference)
`,v0=`---
title: "Match Agent"
collection: "Agents"
description: "Entity resolution across two or more lists — find the same thing under different names."
order: 5
updated: "2026-05-04"
icon: "merge"
---

# Match Agent

The **Match Agent** answers a different question than Fuse: *"which of these rows describe the same real-world thing?"* It clusters entities **within** and **across** tables.

## When to use Match

- Deduplicating a customer list where the same customer appears as "Acme", "Acme Inc.", and "Acme, Incorporated"
- Resolving people across HR, payroll, and Active Directory
- Building a unified product catalog from multiple supplier feeds

## How it works

Match builds a graph: each row is a node, each high-confidence similarity is an edge. Connected components become **match groups**.

It also handles **transitive** matches: if A matches B (0.9) and B matches C (0.9), A and C are placed in the same group even if their direct similarity is only 0.6.

## Configuration

\`\`\`yaml
inputs: [customers_us, customers_eu, salesforce_accounts]
keys:
  - field: name,    mode: fuzzy,    weight: 0.6
  - field: domain,  mode: exact,    weight: 0.3
  - field: country, mode: exact,    weight: 0.1
threshold: 0.82
output: match_group_id
\`\`\`

## Output

Each input row gets a \`match_group_id\`. Rows in the same group are the same entity. Use a downstream **Aggregate** node to merge them into a golden record.

!!! tip
    For your first run, set \`output_review: true\`. Match will produce an HTML review file you can scan in minutes to validate the threshold before turning it loose.

## Where to go next

- [Fuse Agent](/savant-kb/docs/fuse-agent)
- [Templates overview](/savant-kb/docs/templates-overview)
`,S0=`---
title: "Quickstart"
collection: "Getting Started"
description: "Build, run, and schedule your first Savant workflow in under ten minutes."
order: 3
updated: "2026-05-12"
icon: "rocket"
---

# Quickstart

Use this quickstart guide to create your first Savant workflow, run it, review the results, and schedule it for recurring execution. This article is intended for new users who want to quickly understand the basic workflow creation process in Savant.

---

## Before you begin

Ensure that you have:

- A valid Savant account.
- Access to your organization’s Savant workspace.
- Permission to create and run workflows.
- Access to the required data source or sample data.
- The required destination or output location, if you want to export results.

---

## Procedure to create your first workflow

### Step 1: Access your workspace

1. Sign in to **Savant**.
2. Select your organization’s workspace from the workspace dropdown.
3. Confirm that you are in the correct workspace before creating the workflow.

---

### Step 2: Create a workflow

1. From the workspace, select **Create**.
2. Select **Workflow**.
3. Enter a clear workflow name.
4. Select **Create** to open the workflow canvas.

---

### Step 3: Add a data source

1. On the workflow canvas, select **Add source**.
2. Choose the required data source.
3. Connect to the source using the available connection options.
4. Select the table, file, or dataset you want to use.
5. Preview the data to confirm that the correct source is selected.

---

### Step 4: Prepare the data

1. Add the required preparation steps, such as:
    - Filtering rows.
    - Selecting columns.
    - Renaming fields.
    - Changing data types.
    - Removing duplicates.
    - Creating calculated fields.

2. Review the preview after each step to confirm that the data is transformed correctly.

---

### Step 5: Add an output

1. Select **Add destination** or **Output**.
2. Choose where the workflow results should be saved.
3. Configure the output settings, such as file name, table name, or destination folder.
4. Save the output configuration.

---

### Step 6: Run the workflow

1. Select **Run**.
2. Wait for the workflow execution to complete.
3. Review the run status.
4. Open the output or results preview to verify that the workflow generated the expected data.

---

### Step 7: Schedule the workflow

1. Select **Schedule**.
2. Choose how often the workflow should run.
3. Set the start date and time.
4. Confirm the schedule settings.
5. Save the schedule.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| You cannot create a workflow | Confirm that you have permission to create workflows in the selected workspace. |
| You cannot connect to a data source | Verify that the connection is configured and that you have access to the source. |
| The data preview does not load | Refresh the source, check connection permissions, and try again. |
| The workflow run fails | Review the error message, check each workflow step, and rerun the workflow. |
| The output is missing | Confirm that the destination is configured correctly and that the workflow completed successfully. |
| The schedule does not run | Verify that the schedule is enabled and that the workflow has no unresolved errors. |

---

## Result

Your first Savant workflow is created, executed, and scheduled. You can now use the workflow to automate recurring data preparation, analysis, and reporting tasks.`,b0=`---
title: "Royalties & commissions template"
collection: "Templates & Solutions"
description: "Tiered comp calculation with clawbacks, splits, and payout file export."
order: 4
updated: "2026-05-03"
icon: "money"
---

# Royalties & commissions

Sales comp is where spreadsheets go to die. This template models tiered plans, splits, accelerators, and clawbacks — and produces a payout file your payroll team can ingest.

## Inputs

- **Deals** — closed transactions with rep, amount, product, close date
- **Plans** — per-role plan definition (base, tiers, accelerators, caps)
- **Quotas** — per-rep, per-period
- **Adjustments** — manual overrides logged with reason

## The pipeline

1. **Allocate** each deal to one or more reps (splits, overlays)
2. **Score** each deal against the rep's plan
3. **Apply tiers and accelerators** at the period level
4. **Net clawbacks** (refunds, churn, returns)
5. **Produce** per-rep statements + a payroll-ready file

## Plan as data, not code

Plans are YAML you can read and review:

\`\`\`yaml
role: AE
base:
  rate: 0.08
tiers:
  - up_to:   0.7 * quota,  multiplier: 1.0
  - up_to:   1.0 * quota,  multiplier: 1.2
  - up_to:   1.5 * quota,  multiplier: 1.6
  - up_to:   .inf,         multiplier: 2.0
accelerators:
  - product: enterprise,   bonus: 0.02
caps:
  per_deal: 50000
  per_period: 250000
\`\`\`

## Statements

Each rep gets a one-page PDF with their deals, tier walk, accelerators applied, and net payout. Statements are deterministic — re-running the workflow against the same inputs produces a byte-identical PDF.

## Where to go next

- [Templates overview](/savant-kb/docs/templates-overview)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
`,w0=`---
title: "Amazon S3 connector"
collection: "Connectors & Files"
description: "Read and write objects in S3 with prefix templates, partitioning, and IAM role auth."
order: 3
updated: "2026-04-20"
icon: "cloud"
---

# AWS S3 connector setup

Amazon S3 is a cloud object storage service used to store and manage files. Connecting Amazon S3 to Savant allows users to read files from S3, use them as datasets in workflows, and publish processed data back to S3 as an output destination.

Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key** generated from AWS Identity and Access Management (IAM). These credentials allow Savant to authenticate with AWS and access the selected S3 files or folders based on the permissions assigned to the IAM user.

---

## Features

- Read data from Amazon S3.
- Add S3 files as datasets in Savant workflows.
- Publish processed data back to Amazon S3.
- Configure file type, file path, folder path, and output file settings.

---

## Requirements

Before setting up the Amazon S3 connector, ensure that you have:

- An active AWS account.
- Access to the AWS IAM console.
- Permission to create or use an IAM access key.
- An Access Key ID and Secret Access Key for the IAM user.
- The AWS region associated with the S3 bucket.
- Access to the required S3 bucket, file, or folder.
- Required permissions to read from or write to the S3 location.

---

## Connection method

Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key**.

---

## Procedure to configure Amazon S3 connection

### Step 1: Generate AWS access credentials

1. Log in to the AWS Management Console.
2. Open the **IAM** console.
3. Click your username in the upper-right corner.
4. Select **Security Credentials**.
5. Scroll to the **Access keys** section.
6. Click **Create access key**.
7. Copy and securely store the generated credentials:

    - Access Key ID
    - Secret Access Key

!!! tip "Note"
    The **Secret Access Key** can be viewed or downloaded only once. Save it in a secure location before closing the window.
    

---

### Step 2: Add Amazon S3 as a system in Savant

1. In Savant, go to **Data > Systems**.
2. Click **New System**.
3. Select **Amazon S3** from the available connector options.
4. Click **Next**.
5. Enter the required authentication details.

    | Field | Description |
    |------|-------------|
    | Access Key ID | Enter the Access Key ID generated from AWS IAM. |
    | Secret Access Key | Enter the Secret Access Key generated from AWS IAM. |
    | Region | Enter the AWS region associated with the S3 bucket. |

6. Click **Authenticate**.
7. Enter a system name and description.
8. Click **Next**.

---

### Step 3: Configure the S3 dataset

1. Select the required file type.
2. Enter the number of files to use.
3. Paste the S3 file URL in the required field.
4. Click **Next**.

The Amazon S3 system is authenticated and ready to be added as a dataset in Savant.

---

## Connect data from Amazon S3

Use this procedure to add the authenticated Amazon S3 system as a dataset in a Savant analysis.

### Step 1: Add the S3 dataset from the canvas

1. Open the required analysis.
2. On the canvas, click **Add Dataset**.
3. Select your Amazon S3 connection.
4. Click **Next**.
5. Configure the dataset details as required.
6. Add the dataset to the analysis.

### Step 2: Add the S3 dataset from the Data menu

If you are not currently in an analysis:

1. Go to **Data > New Dataset**.
2. Select the authenticated Amazon S3 system from the available options.
3. Click **Next**.
4. Configure the dataset details as required.

The Amazon S3 system is added as a dataset in Savant.

---

## Publish data to Amazon S3

Use this procedure to publish workflow output back to Amazon S3.

### Step 1: Add an S3 destination

1. Open the completed analysis.
2. On the left side of the canvas, click **Add Destination**.
3. Select your Amazon S3 destination.

    If you need to add a new S3 system, click **New System** and complete the authentication steps again.

4. Enter a destination name and description.
5. Click **Next**.

### Step 2: Configure the S3 destination

1. In the destination configuration window, select the required file type.
2. Enter the S3 folder link.
3. Configure the output file name.
4. If the output file type is Excel, configure the sheet or tab name.
5. Click **Apply**.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| Authentication fails | Verify that the Access Key ID, Secret Access Key, and AWS region are correct. |
| Secret Access Key is unavailable | Create a new access key in AWS IAM because the Secret Access Key can be viewed only once. |
| S3 file cannot be accessed | Confirm that the IAM user has permission to read the selected S3 bucket or file. |
| S3 destination cannot be written | Confirm that the IAM user has write permission for the selected S3 folder. |
| Region error occurs | Verify that the selected region matches the region where the S3 bucket is hosted. |
| Dataset does not load | Confirm that the file URL, file type, and number of files are configured correctly. |
| Output file is not created | Verify the destination folder link, file name, and write permissions. |

---

## Result

The Amazon S3 connector is configured in Savant. You can now read files from Amazon S3, use them as datasets in Savant workflows, and publish processed workflow results back to Amazon S3.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
`,A0=`---
title: "Sales & use tax template"
collection: "Templates & Solutions"
description: "Aggregate sales by jurisdiction, apply nexus rules, and produce return-ready filings."
order: 3
updated: "2026-05-07"
icon: "percent"
---

# Sales & use tax

A template that takes raw transaction data and produces return-ready filings for every jurisdiction where you have nexus.

## Inputs

- **Transactions** — order ID, ship-to address, line items, tax collected
- **Nexus matrix** — your jurisdictions and effective dates
- **Rate file** — current rates (Savant ships a maintained version, or bring your own)

## The pipeline

1. **Geocode** ship-to addresses to jurisdictions (state, county, city, special districts).
2. **Apply nexus** — drop transactions outside your jurisdictions, flag new ones.
3. **Compute tax due** vs **tax collected** per jurisdiction.
4. **Aggregate** to filing periods (monthly / quarterly / annual per jurisdiction).
5. **Export** in the format each jurisdiction's portal expects.

## What you get

For every filing period:

- A summary report (PDF) with totals, variances, and exception notes
- A jurisdiction-by-jurisdiction CSV ready for upload
- A reconciliation back to your GL revenue accounts

## Variance handling

When tax collected ≠ tax due:

| Reason | Default action |
|---|---|
| Rate change mid-period | Auto-prorated |
| Exempt customer not flagged | Flagged for review |
| Returned order | Netted in next period |
| Rounding | Tolerated up to $0.05 per transaction |

!!! warning
    This template gives you the calculation. It does not file on your behalf — wire the output CSVs to your filing process or filing partner.

## Where to go next

- [Templates overview](/savant-kb/docs/templates-overview)
- [Functions reference](/savant-kb/docs/functions-reference)
`,E0=`---
title: "Sign up"
collection: "Getting Started"
description: "Create your Savant account, sign in for the first time, and access your team workspace."
order: 2
updated: "2026-05-20"
icon: "sparkles"
---

# Sign up for Savant

Creating a Savant account gives you access to your organization’s analytics automation workspace. Depending on your organization’s authentication settings, you can sign up using Google, Microsoft, or your work email.

---

## Before you begin

Ensure that you have:

- A valid business email address.
- Access to the inbox associated with your business email.
- An invitation link, if your organization requires one.
- Access to your organization’s approved authentication method, such as Google or Microsoft.

---

## Procedure to sign up for Savant

### Step 1: Open the Savant website

1. Open your preferred web browser. For the best experience, use **Google Chrome**.

2. Go to the Savant website: \`https://www.savantlabs.io/\`

---

### Step 2: Start the sign-up process

1. On the Savant homepage, go to the upper-right corner of the page.
2. Click **Sign up**. 
    
    Savant redirects you to the authentication page.

---

### Step 3: Choose an authentication method

1. On the authentication page, select one of the available sign-up options:
   
   * **Continue with Google**
   * **Continue with Microsoft**
   * **Continue with work email**

    The available options may vary based on your organization’s configuration.

---

### Step 4: Complete authentication

1. Follow the on-screen instructions for the authentication method you selected.

2. Depending on the selected method, you may need to:

    - Enter your email address and password.
    - Verify your identity.
    - Grant the required permissions.
    - Confirm your email address.

---

### Step 5: Access your Savant account

1. After authentication is complete, Savant redirects you to your account.
2. Access the Savant analytics automation platform.
3. Start working in your organization’s workspace.

---

## Your team workspace

When you sign in to your organization’s Savant tenant for the first time, you are usually directed to the default workspace named **General**.

The **General** workspace is commonly used to:

- Learn how to use Savant.
- Explore available features.
- Try templates and sample workflows.
- Get familiar with your organization’s analytics setup.

If you have signed in before, Savant may open the last workspace you accessed during your previous session.

---

## Switch or access workspaces

Your current workspace appears near your organization’s name in the upper-right corner of the Savant interface.

To view your available workspaces:

1. Click the dropdown next to your organization’s name.
2. Review the list of workspaces available to you.
3. Select the workspace you want to open.

If your administrator has assigned you to specific workspaces, those workspaces appear automatically in the dropdown list.

---

## Need access to another workspace?

If a required workspace is not available in your workspace list, contact your system administrator and request access.

Your administrator can add you to the appropriate workspace based on your role and responsibilities.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| You do not see the **Sign up** option | Confirm that you are on the Savant website and that your organization allows self-service sign-up. |
| Your authentication method is not available | Contact your system administrator to confirm which sign-up methods are enabled for your organization. |
| You cannot complete Google or Microsoft authentication | Verify that you are using the correct business account and that your organization allows Savant access. |
| You do not receive a verification email | Check your spam or junk folder, then try resending the verification email. |
| You cannot see a required workspace | Contact your system administrator and request access to the workspace. |

---

## Result

Your Savant account is created and connected to your organization’s tenant. You can now access your assigned workspace and start using Savant.

---

## Where to go next

- [Quickstart](/savant-kb/docs/quickstart) — build your first workflow
- [Workspace setup](/savant-kb/docs/workspace-setup) — invite teammates and configure roles
- [Workflows overview](/savant-kb/docs/workflows-overview) — understand Savant's core abstraction
`,T0=`---
title: "Snowflake connector"
collection: "Connectors & Files"
description: "Read from and write to Snowflake"
order: 2
updated: "2026-05-02"
icon: "snowflake"
---

# Snowflake connector setup

Snowflake is an elastically scalable cloud data warehouse. Connecting Savant to Snowflake requires configuration in both Snowflake and Savant.

Before configuring the Savant connector, create a service account or role in Snowflake with the required permissions to access the warehouses, databases, schemas, tables, and views that Savant needs.

---

## Features

- Read data from Snowflake.
- Write data to Snowflake.

---

## Requirements

Before setting up the Snowflake connector, ensure that you have:

- A Snowflake account with permission to create users, roles, warehouses, and security integrations.
- A Savant role with the required permissions to access Snowflake warehouses, databases, schemas, tables, and views.
- Savant IP addresses whitelisted, if your Snowflake account uses a network policy.
- The required Snowflake warehouse, database, and schema details.

---

## Connection method

Savant supports OAuth-based authentication for Snowflake.

---

## Procedure to configure Snowflake OAuth connection

### Step 1: Create a Savant role in Snowflake

1. Log in to Snowflake as \`ACCOUNTADMIN\`.

2. Run the following SQL statement to create a Savant role and grant the required permissions.

    \`\`\`sql
    CREATE ROLE IF NOT EXISTS savant_role COMMENT = 'Access to selected tables for Savant';

    GRANT ROLE savant_role TO ROLE SYSADMIN;

    GRANT USAGE ON WAREHOUSE "<warehouse>" TO ROLE savant_role;

    GRANT USAGE ON DATABASE "<database>" TO ROLE savant_role;

    GRANT USAGE ON SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON ALL TABLES IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON FUTURE TABLES IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON ALL VIEWS IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON FUTURE VIEWS IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;
    \`\`\`

---

### Step 2: Create an OAuth security integration

1. Update the \`OAUTH_REDIRECT_URI\` value based on your Savant region.

    - For the default region, use:

        \`\`\`text
        https://app.savantlabs.io/api/callback
        \`\`\`

    - For the EU region, use:

        \`\`\`text
        https://app-eu.savantlabs.io/api/callback
        \`\`\`

2. If your Snowflake network policy blocks public IP addresses, whitelist Savant IP addresses and update the \`<network policy>\` value.

    If you do not use a network policy, remove the \`NETWORK_POLICY\` line from the SQL statement.

3. Run the following SQL statement to create the OAuth security integration.

    \`\`\`sql
    CREATE SECURITY INTEGRATION SAVANT_CLIENT
    TYPE = OAUTH
    ENABLED = TRUE
    OAUTH_CLIENT = CUSTOM
    OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'
    OAUTH_REDIRECT_URI = 'https://app.savantlabs.io/api/callback'
    OAUTH_ISSUE_REFRESH_TOKENS = TRUE
    OAUTH_REFRESH_TOKEN_VALIDITY = 7776000
    NETWORK_POLICY = '<network policy>';
    \`\`\`

---

### Step 3: Retrieve the OAuth client credentials

1. Run the following SQL statement to retrieve the client ID and client secrets.

    \`\`\`sql
    SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');
    \`\`\`

2. Copy the following values from the JSON response:

    - Client ID
    - One client secret

    You need these values when configuring the Snowflake connector in Savant.

---

### Step 4: Configure the Snowflake connection in Savant

1. In Savant, open the Snowflake connector setup.
2. Select the **OAuth** connection option.
3. Enter the Snowflake server URL.

    Example:

    \`\`\`text
    https://123.us-region1/gcp.snowflakecomputing.com
    \`\`\`

4. Enter the **Client ID** retrieved from Snowflake.
5. Enter the **Client Secret** retrieved from Snowflake.
6. Enter \`savant_role\` in the **Role** field.
7. Enter the Snowflake **Warehouse** and **Database** details.

    You can leave these fields blank if you want to use the Snowflake defaults.

8. Click **Authenticate**.

---

## SSH tunnel

Additional properties are displayed when the **SSH Tunnel** checkbox is selected.

Use this option only if your organization requires Savant to connect to Snowflake through an SSH tunnel.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| OAuth authentication fails | Verify that the \`CREATE SECURITY INTEGRATION\` statement has no typos and that the \`OAUTH_REDIRECT_URI\` exactly matches the Savant callback URL. |
| Client secret is rejected | Rerun \`SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');\`, copy one secret exactly, and re-enter it in Savant. |
| Permission error occurs | Confirm that \`savant_role\` has \`USAGE\` permissions on the warehouse, database, and schema, and \`SELECT\` permissions on current and future tables and views. |
| Connection times out | Verify that Savant IP addresses are whitelisted in the Snowflake network policy. |
| Query or login errors occur | Review \`LOGIN_HISTORY\` and \`QUERY_HISTORY\` in Snowflake. In Savant, enable debug logging to capture HTTP response codes such as \`401\`, \`403\`, or \`504\`. |

---

## Result

The Snowflake connector is configured in Savant using OAuth authentication. Savant can now connect to Snowflake to read and write data based on the permissions granted to \`savant_role\`.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
`,_0=`---
title: "Templates overview"
collection: "Templates & Solutions"
description: "Start from a proven workflow instead of a blank canvas."
order: 1
updated: "2026-05-11"
icon: "template"
---

# Templates overview

Templates are **opinionated, production-ready workflows** for common business problems. Each one is a starting point you adapt to your data — not a black box.

## How templates work

Pick a template from the **Templates** gallery. Savant clones it into your workspace as a normal workflow you can:

- Inspect node by node
- Re-wire to your specific connectors
- Extend with extra steps
- Pin to a specific version

There is no template lock-in — once installed, it's just a workflow.

## Featured templates

| Template | Domain | What it does |
|---|---|---|
| [Financial reconciliation](/savant-kb/docs/financial-reconciliation) | Finance | Bank ↔ GL reconciliation with break analysis |
| [Sales & use tax](/savant-kb/docs/sales-tax) | Tax | Multi-jurisdiction return prep |
| [Royalties & commissions](/savant-kb/docs/royalties-commissions) | Revenue | Tiered comp calculation with payout export |

## Customizing safely

When a template ships an update, Savant shows you a node-level diff. You decide which changes to pull in — and your customizations stay intact.

!!! tip
    Treat the first installation as a learning exercise. Run it against a sample, click through every node, then re-install fresh for production.

## Where to go next

- [Financial reconciliation](/savant-kb/docs/financial-reconciliation)
- [Sales & use tax](/savant-kb/docs/sales-tax)
`,R0=`---
title: "Transform Agent"
collection: "Agents"
description: "Reshape tables using natural-language instructions, compiled to deterministic SQL."
order: 2
updated: "2026-05-10"
icon: "wand"
---

# Transform Agent

Transform Agent helps users format, arrange, calculate, and modify data directly inside an analysis. It works like a spreadsheet-style data preparation tool, allowing users to clean, reshape, rename, reorder, calculate, and transform fields without writing code.

The Transform Agent is useful when users need to prepare data before analysis, reporting, automation, or downstream processing. It provides column management tools, calculated columns, expression-based transformations, data type conversion, and field organization options in one place.

---

## Features

- Format and arrange data.
- Rename columns.
- Hide or show fields.
- Reorder fields in the dataset.
- Convert field data types.
- Add calculated columns.
- Transform existing column values.
- Use expressions with Excel-like or SQL-like syntax.
- Use Savant Copilot to generate formulas from natural language.
- Review renamed columns and calculated column order of operations.

---

## Add a Transform Agent

1. Navigate to the required analysis.
2. Click the agent icon.
3. Select **Transform**.
4. Click **Edit in a tab** to open the Transform Agent in a separate tab for detailed analysis and configuration.

---

## Manage columns

The **Managed Columns** tab allows users to search, hide, show, rename, reorder, and transform columns in the dataset.

| Action | Description |
|------|-------------|
| Search columns | Use the search bar to quickly find specific fields or columns within the dataset. |
| Hide or show fields | Use the eye icon next to a field to hide or show it in the analysis. Hidden fields are not deleted; they are only removed from the current view. Click **Apply** to save the change. |
| Convert data types | Click the current data type icon, select the required data type, and click **Apply**. |
| Rename columns | Hover over the column name, click the pencil icon, enter the new column name, and click **Apply**. |
| Jump to column | Use the **Jump to Column** arrow icon to quickly navigate to a specific column in the dataset. |
| Reorder fields | Use the move icon to drag and drop a field to a different position in the table, then click **Apply**. |
| Apply bulk actions | Select the checkboxes next to multiple columns, open the **Actions** dropdown, select the required action, and click **Apply**. |

You can also use the dropdown menu in a column header to access additional options.

| Option | Description |
|------|-------------|
| Move Column | Move the selected column to a different position in the table. |
| Rename Column | Rename the selected column. |
| Transform Column | Apply a custom expression or use the expression builder to transform values in the selected column. |
| Hide Column | Hide the selected column from the analysis view. |
| Insert Column Left | Add a calculated column to the left of the selected column. |
| Insert Column Right | Add a calculated column to the right of the selected column. |

The **Move Column** option includes the following placement choices:

| Placement option | Description |
|------|-------------|
| Beginning | Move the selected column to the first position in the table. |
| End | Move the selected column to the last position in the table. |
| Left | Move the selected column left by the specified number of fields. |
| Right | Move the selected column right by the specified number of fields. |
| Before | Move the selected column before a selected field. |
| After | Move the selected column after a selected field. |

---

## Work with calculated and renamed columns

The **Calculated Columns** tab allows users to add and manage columns derived from existing data. The **Renamed Columns** tab displays columns renamed from the **Managed Columns** tab.

To add a calculated column:

1. From the **Managed Columns** tab, click **+ Column**.
2. In the **Expression Editor**, enter a field name in the **Field Name** box.
3. Build the required expression using Excel-like or SQL-like syntax.
4. Click **Apply**.

Use calculated columns to:

- Perform calculations.
- Combine fields.
- Format values.
- Apply conditional logic.
- Transform text or dates.

You can also use the search bar at the bottom of the **Expression Editor** to find available functions and fields.

To transform values in an existing column:

1. Open the dropdown from the column header.
2. Click **Transform**.
3. Edit the transformation expression.
4. Click **Apply**.

Savant Copilot can suggest usable formulas using natural language. This feature is available in beta.

Use the following icons to manage calculated columns:

| Icon | Description |
|------|-------------|
| Summation icon | Edit a calculated column. |
| Trash can icon | Delete a calculated column. |

The **Calculated Columns** tab also displays the order in which calculated columns are processed. Columns listed first are processed before columns listed later in the list. This order is important when one calculated column depends on the result of another calculated column.

The **Renamed Columns** tab helps users review renamed fields and confirm that the updated column names are correct.

---

## Summary

Transform Agent allows users to prepare and transform data directly inside Savant. Users can manage columns, rename fields, convert data types, create calculated columns, transform existing values, and control the order of calculations without writing code.

---

## Where to go next

- [Functions reference](/savant-kb/docs/functions-reference)
- [Infer Agent](/savant-kb/docs/infer-agent)
`,C0=`---
title: "Vision Agent"
collection: "Agents"
description: "Extract structured data from PDFs, scanned documents, and images."
order: 4
updated: "2026-05-06"
icon: "eye"
---

# Vision Agent

The **Vision Agent** turns documents into rows. Point it at a stream of PDFs, scans, or images and a target schema, and it returns structured data — page-by-page, field-by-field, with a confidence per field.

## Supported document types

- **Invoices, bills, receipts** — out-of-the-box schema
- **Bank statements, brokerage statements** — out-of-the-box schema
- **Contracts, NDAs, MSAs** — clause-level extraction
- **Custom forms** — define your own schema in the UI

## Configuration

Point at a source (S3 bucket, SharePoint folder, email inbox) and choose a schema:

\`\`\`yaml
source: s3://docs/invoices/
schema: invoice
output:
  - vendor_name
  - invoice_number
  - invoice_date
  - line_items[]: { description, qty, unit_price, total }
  - subtotal
  - tax
  - total
\`\`\`

## Per-field confidence

Vision returns a confidence score for every extracted field, not just per document. This matters: a vendor name might be 0.99 while a hand-written total is 0.62.

Use a **Filter** node downstream to route low-confidence fields to a review queue while letting the rest flow through.

## Cost

Vision is priced per page, not per call. Multi-page documents (e.g. 30-page contracts) are billed for the pages actually processed.

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [S3 connector](/savant-kb/docs/s3-connector)
`,x0=`---
title: "Welcome to Savant"
collection: "Getting Started"
description: "An overview of the Savant data automation platform and how this documentation is organized."
order: 1
updated: "2026-05-20"
icon: "sparkles"
---

# Welcome to Savant

Welcome to Savant, a revolutionary cloud-native, no-code analytics automation platform designed to empower analysts like you to unlock the true potential of data-driven insights.

This onboarding document will provide you with an overview of what Savant is and how it can transform the way you approach data analytics and business intelligence.

![alt text](/savant-kb/images/image.png)

!!! tip "New here?"
    If this is your first time using Savant, start with the [Quickstart](quickstart) — you'll have a working workflow in under ten minutes.


## How Savant works for you

At Savant, we believe in making data analytics accessible, efficient, and impactful. Our cloud-native platform is built to enable analysts to deliver business insights more swiftly and effortlessly than ever before.

With Savant, you can streamline your analytics workflow through three core pillars of automation:

### Automated data prep and data transformation

Savant offers a comprehensive selection of over 200 connectors, allowing you to effortlessly import data from a wide range of sources.

Whether it's file systems like S3 and Google Drive, databases such as Snowflake and BigQuery, communication tools like Slack and Gmail, or popular business applications like Google Analytics, HubSpot, Salesforce, Shopify, Stripe, and more – Savant has you covered.

![alt text](/savant-kb/images/image-1.png)

---

### Automated cloud-native data analytics

Leverage the power of more than 300 low-code and no-code tools and functions to transform raw data into valuable insights.

Our cloud-native platform provides intuitive no-code tools for data prep, data cleaning, data joining, and data transformation.

For advanced users, Savant allows you to write your own functions and expressions in a query window for sophisticated data transformations.

![alt text](/savant-kb/images/image-3.png)


---

### Automated insight delivery

Savant enables you to drive actionable results by delivering insights to where they matter most.

Whether it's sending alerts to Slack channels, updating records in Salesforce, refreshing BI dashboards, or creating a shared metrics layer for collaborative analysis – Savant ensures your insights reach the right audience at the right time.

![alt text](/savant-kb/images/image-4.png)

---

## Savant's pre-built solutions

Did you know, Savant offers pre-built solution templates to help you get started in Savant.

Check out our library of solution templates, simply replace with your own data to access these pre-built automations.

## Your journey with Savant

1. **Effortless collaboration:** Savant keeps track of every step you take, facilitating seamless collaboration with your team. Validate data, maintain analyses, and build new ones together with ease.

2. **Bot-driven efficiency:** Transform your analyses into automated bots that execute on a schedule. Bid farewell to manual report refreshes as Savant handles the updates for you. Monitor bot status over time and receive notifications for individual runs via Slack or email.

3. **Templates for rapid start:** Whether you're starting from scratch or seeking a quick start with pre-built templates, Savant has you covered. Configure a template by connecting your own data, and let the platform complete the analysis for you.

4. **Diverse use cases:** Savant already supports numerous templates catering to sales, marketing, operations, logistics, finance, HR, and more. Our library of templates continues to expand, providing solutions for various analytics use cases.

---

## What you can build

- **Reconciliation pipelines** that match millions of rows across systems with a full audit trail.
- **Document workflows** that extract structured data from PDFs, invoices, and contracts using AI agents.
- **Consolidation models** that blend ERP, CRM, and spreadsheet data into a single trusted source.
- **Operational automations** triggered by schedules, webhooks, or upstream system events.

## How this documentation is organized

| Section | What's inside |
|---|---|
| Getting Started | Account setup, your first workflow, and core concepts |
| Platform Concepts | Workflows, agents, governance, and the audit trail |
| Agents | Reference for every AI agent — Infer, Transform, Fuse, Vision, Match |
| Connectors & Files | How to read and write data to 70+ systems |
| Templates & Solutions | Pre-built workflows for finance, ops, and revenue teams |
| Reference | Functions, shortcuts, and API access |

---

## Where to go next

- [Quickstart](/savant-kb/docs/quickstart) — build your first workflow
- [Workspace setup](/savant-kb/docs/workspace-setup) — invite teammates and configure roles
- [Workflows overview](/savant-kb/docs/workflows-overview) — understand Savant's core abstraction

`,O0=`---
title: "Workflows overview"
collection: "Platform Concepts"
description: "Understand Savant's core abstraction: a directed graph of nodes with typed data flowing between them."
order: 1
updated: "2026-05-01"
icon: "workflow"
---

# Workflows overview

A workflow in Savant is a visual sequence of connected steps that moves data from a source, applies transformations or analysis, and sends the results to a destination. Workflows help teams automate repeatable data preparation, reporting, enrichment, and operational processes without manually rebuilding the same logic each time.

Instead of working with disconnected files, formulas, or manual exports, users can build a workflow once and run it whenever updated data is available. This helps reduce manual effort, improve consistency, and make data processes easier to review, reuse, and schedule.

A typical workflow includes:

- **Dataset**: Provides the source data used in the workflow.
- **Agent**: Performs an action on the data, such as transforming, filtering, joining, enriching, or analyzing records.
- **Destination**: Stores or publishes the final output.
- **Run**: Executes the workflow and processes the configured steps.
- **Schedule**: Runs the workflow automatically at a defined time or frequency.

---

## How workflows help teams

Savant workflows help teams:

- Automate recurring data preparation tasks.
- Standardize reporting and analysis processes.
- Reduce manual spreadsheet work.
- Combine data from multiple systems.
- Clean, format, and enrich data before reporting.
- Create repeatable outputs for dashboards, files, and downstream systems.
- Improve visibility into how data is processed from source to destination.

---

## Main workflow components

| Component | Description |
|------|-------------|
| Dataset | Adds source data to the workflow from files, databases, applications, or connected systems. |
| Agent | Applies processing logic to the data, such as transformation, filtering, joining, classification, or enrichment. |
| Canvas | Provides the visual workspace where datasets, agents, and destinations are connected. |
| Destination | Defines where the processed output should be written or published. |
| Run | Executes the workflow using the current configuration. |
| Schedule | Automates workflow execution based on a selected frequency. |
| Results preview | Displays processed data so users can validate the workflow output before publishing. |

---

## Common workflow actions

Users can perform the following actions in a Savant workflow:

- Add datasets from connected systems.
- Combine multiple datasets.
- Clean and format fields.
- Rename, hide, reorder, or transform columns.
- Add calculated fields.
- Filter records based on business rules.
- Enrich data using AI agents.
- Review results before publishing.
- Add destinations for output.
- Run workflows manually.
- Schedule workflows for recurring execution.

---

## Anatomy of a workflow

\`\`\`text
[ Source ] ──► [ Transform ] ──► [ Agent ] ──► [ Destination ]
                                   │
                                   └──► [ Branch ] ──► [ Slack ]
\`\`\`

Each node has:

- **Inputs** — zero or more typed streams arriving from upstream
- **Configuration** — UI-driven settings, plus optional code
- **Outputs** — one or more typed streams, each with a schema

---

## Typical workflow lifecycle

1. **Add source data**  
   Select the dataset or connected system that provides the input data.

2. **Prepare the data**  
   Use agents to clean, format, calculate, filter, join, or enrich the data.

3. **Review the output**  
   Validate the results in the preview to confirm that the workflow produces the expected output.

4. **Add a destination**  
   Configure where the processed data should be saved, exported, or published.

5. **Run the workflow**  
   Execute the workflow to process the latest available data.

6. **Schedule the workflow**  
   Set a recurring schedule if the workflow needs to run automatically.

---

## Workflow canvas

The workflow canvas is the visual area where users build and manage the workflow. It shows how data moves from datasets through agents and into destinations.

On the canvas, users can:

- Add datasets.
- Add agents.
- Connect workflow steps.
- Review the sequence of processing.
- Add destinations.
- Open configuration panels.
- Run or schedule the workflow.

The canvas helps users understand the complete flow of data and makes it easier to identify where each transformation or output is configured.

---

## Agents in a workflow

Agents are processing steps that perform specific actions on the data. Each agent is added to the workflow canvas and configured based on the required task.

Examples of agents include:

- **Transform Agent**: Formats, arranges, calculates, and modifies data.
- **Infer Agent**: Uses AI to enrich, classify, label, or standardize data.
- **Join or combine agents**: Combine data from multiple sources.
- **Filter or rule-based agents**: Limit records based on defined conditions.

Agents help users build reusable data logic without writing code.

---

## Workflow outputs

A workflow output is the processed result generated after the workflow runs. Outputs can be reviewed in Savant or sent to a configured destination.

Common destinations include:

- Files.
- Databases.
- Cloud storage systems.
- Business applications.
- Reporting or downstream workflow systems.

Before publishing the output, users should review the results preview to confirm that the data is accurate and complete.

---

## Scheduling workflows

Scheduling allows users to run workflows automatically without manual execution. This is useful for recurring reports, daily data refreshes, periodic exports, or operational updates.

When scheduling a workflow, users typically define:

- Run frequency.
- Start date and time.
- Output destination.
- Notification or monitoring requirements, if available.

Scheduled workflows help ensure that data outputs stay current and reduce manual follow-up.

---

## Best practices

- Use clear workflow names that describe the business purpose.
- Confirm that the correct dataset is selected before adding agents.
- Review the preview after each major change.
- Keep transformation logic simple and easy to understand.
- Use calculated fields only when needed.
- Validate output before publishing or scheduling.
- Add destinations only after confirming the workflow results.
- Review scheduled workflows periodically to ensure they still meet business needs.

---

## Summary

Savant workflows provide a visual and repeatable way to move data from source to output. By combining datasets, agents, destinations, runs, and schedules, users can automate data preparation, enrichment, reporting, and publishing processes.

A well-designed workflow helps teams reduce manual work, improve consistency, and maintain reliable data outputs across business processes.

---

## Where to go next

- [Agents overview](/savant-kb/docs/agents-overview)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
`,M0=`---
title: "Workspace setup"
collection: "Getting Started"
description: "Invite teammates, configure roles, and set up environments for safe collaboration."
order: 3
updated: "2026-04-30"
icon: "users"
---

# Workspace setup

A Savant workspace is the boundary for **people, projects, secrets, and audit logs**. Most organizations operate one production workspace and a separate sandbox workspace for experimentation.

## Invite teammates

Go to **Settings → Members** and click **Invite**. Each invitee receives an email and is assigned a role at the workspace level. Roles can be overridden per project.

| Role | Can edit workflows | Can run workflows | Can deploy | Can manage members |
|---|---|---|---|---|
| **Viewer** | No | No | No | No |
| **Runner** | No | Yes | No | No |
| **Builder** | Yes | Yes | No | No |
| **Deployer** | Yes | Yes | Yes | No |
| **Admin** | Yes | Yes | Yes | Yes |

!!! warning
    Only Admins should hold the **Deployer** role in production workspaces. Grant Builders deploy rights only in sandboxes.

## Configure environments

Each workspace ships with **Development** and **Production** environments. Environments isolate:

- Connector credentials
- Secrets (API keys, tokens)
- Schedules

Use the environment switcher in the top bar to move between them. A workflow's logic is the same across environments — only its bindings change.

## Set workspace defaults

Under **Settings → Defaults**, configure:

- Default timezone for schedules
- Default notification channel (Slack, email, webhook)
- Data retention for run history (30 / 90 / 365 days)

## Where to go next

- [Your first workflow](/savant-kb/docs/your-first-workflow)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
`,D0=`---
title: "Your first workflow"
collection: "Getting Started"
description: "A guided build of a realistic three-step workflow with branching and notifications."
order: 4
updated: "2026-05-05"
icon: "workflow"
---

# Your first workflow

The [Quickstart](/savant-kb/docs/quickstart) got you running in ten minutes. This guide goes one step deeper: a realistic three-step workflow with branching, error handling, and a Slack notification.

## The scenario

You receive a daily **orders.csv** drop in S3. You need to:

1. Validate the file (reject and notify if it's empty or malformed).
2. Enrich each order with the customer's tier from your CRM.
3. Append to a Snowflake table and post a summary to Slack.

## Step 1 — Read with validation

Add an **S3** source pointing at \`s3://drops/orders/{date}.csv\`. In the node's **Validation** tab, add:

\`\`\`yaml
required_columns: [order_id, customer_id, amount, currency]
min_rows: 1
on_failure: branch
\`\`\`

A red **failure** port appears on the node. Drag it to a **Slack** node configured to ping #ops with the validation error.

## Step 2 — Enrich from CRM

Add a **HubSpot** source (or your CRM of choice) and join it to the orders stream using a **Fuse Agent**:

- Left key: \`customer_id\`
- Right key: \`hubspot_contact_id\`
- Strategy: exact match, fall back to fuzzy on email if not found

The Fuse Agent emits a confidence score per row. Add a **Filter** node downstream that routes rows below \`0.8\` to a manual-review table.

## Step 3 — Land and announce

Append the enriched stream to \`analytics.orders_enriched\` in Snowflake. Then add a final **Slack** node:

\`\`\`text
:white_check_mark: Orders for {{run.date}} processed
- {{count.rows}} rows landed
- {{count.review}} flagged for review
\`\`\`

!!! tip
    Variables like \`{{run.date}}\` and \`{{count.rows}}\` come from Savant's run context — see [Functions reference](/docs/functions-reference).

## Where to go next

- [Workflows overview](/savant-kb/docs/workflows-overview)
- [Fuse Agent](/savant-kb/docs/fuse-agent)
- [S3 connector](/savant-kb/docs/s3-connector)
`,k0=Object.assign({"./docs/adp-connector.md":l0,"./docs/agents-overview.md":r0,"./docs/connectors-overview.md":u0,"./docs/excel-files.md":c0,"./docs/financial-reconciliation.md":f0,"./docs/functions-reference.md":d0,"./docs/fuse-agent.md":h0,"./docs/google-sheets.md":m0,"./docs/governance-audit-trail.md":p0,"./docs/infer-agent.md":g0,"./docs/keyboard-shortcuts.md":y0,"./docs/match-agent.md":v0,"./docs/quickstart.md":S0,"./docs/royalties-commissions.md":b0,"./docs/s3-connector.md":w0,"./docs/sales-tax.md":A0,"./docs/signup.md":E0,"./docs/snowflake-connector.md":T0,"./docs/templates-overview.md":_0,"./docs/transform-agent.md":R0,"./docs/vision-agent.md":C0,"./docs/welcome.md":x0,"./docs/workflows-overview.md":O0,"./docs/workspace-setup.md":M0,"./docs/your-first-workflow.md":D0});function z0(i){const s=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(i);if(!s)return{fm:{title:"Untitled",collection:"Misc",description:"",order:999,updated:""},body:i};const[,l,u]=s,c={};for(const d of l.split(/\r?\n/)){const m=/^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/.exec(d);if(!m)continue;const[,y,p]=m;try{c[y]=JSON.parse(p)}catch{c[y]=p.replace(/^["']|["']$/g,"")}}return{fm:c,body:u}}const sc=Object.entries(k0).map(([i,s])=>{const l=i.replace(/^\.\/docs\//,"").replace(/\.md$/,""),{fm:u,body:c}=z0(s);return{slug:l,fm:u,body:c}}).sort((i,s)=>i.fm.order-s.fm.order),L0={"Getting Started":{description:"Set up your workspace, build your first workflow, and get the right people invited.",icon:"Rocket",order:1},"Platform Concepts":{description:"Workflows, agents, and the governance model that makes Savant audit-ready by default.",icon:"Layers",order:2},Agents:{description:"AI-powered nodes for inference, transformation, matching, and document extraction.",icon:"Sparkles",order:3},"Connectors & Files":{description:"Read and write data across 70+ databases, warehouses, SaaS apps, and file systems.",icon:"Plug",order:4},"Templates & Solutions":{description:"Opinionated, production-ready workflows for finance, ops, and revenue teams.",icon:"LayoutTemplate",order:5},Reference:{description:"Function reference, keyboard shortcuts, and API access.",icon:"BookOpen",order:6}},N0=Object.entries(L0).map(([i,s])=>({name:i,slug:i.toLowerCase().replace(/[^a-z0-9]+/g,"-"),description:s.description,icon:s.icon,docs:sc.filter(l=>l.fm.collection===i).sort((l,u)=>l.fm.order-u.fm.order),_order:s.order})).sort((i,s)=>i._order-s._order).map(({_order:i,...s})=>s),$0=sc;function U0(i){return sc.find(s=>s.slug===i)}const Xs=N0.flatMap(i=>i.docs);function ew(i){const s=Xs.findIndex(l=>l.slug===i);return s===-1?{}:{prev:s>0?Xs[s-1]:void 0,next:s<Xs.length-1?Xs[s+1]:void 0}}const B0=()=>Eo(()=>import("./docs._slug-JeuHHF5A.js"),__vite__mapDeps([8,3,2,6])),H0=()=>Eo(()=>import("./docs._slug-ZHQvVP0N.js"),[]),j0=rl("/docs/$slug")({loader:({params:i})=>{const s=U0(i.slug);if(!s)throw Hv();return s},head:({loaderData:i})=>{if(!i)return{};const{fm:s}=i,l=`${s.title} — Savant Docs`;return{meta:[{title:l},{name:"description",content:s.description},{property:"og:title",content:l},{property:"og:description",content:s.description},{name:"twitter:title",content:l},{name:"twitter:description",content:s.description}]}},notFoundComponent:So(H0,"notFoundComponent"),component:So(B0,"component")}),lc=n0.update({id:"/docs",path:"/docs",getParentRoute:()=>oc}),q0=i0.update({id:"/",path:"/",getParentRoute:()=>oc}),G0=s0.update({id:"/",path:"/",getParentRoute:()=>lc}),Y0=j0.update({id:"/$slug",path:"/$slug",getParentRoute:()=>lc}),Q0={DocsSlugRoute:Y0,DocsIndexRoute:G0},P0=lc._addFileChildren(Q0),V0={IndexRoute:q0,DocsRoute:P0},I0=oc._addFileChildren(V0)._addFileTypes(),Up=new Xb,X0="/savant-kb/".replace(/\/$/,"")||"/",K0=cb({routeTree:I0,basepath:X0,context:{queryClient:Up},scrollRestoration:!0,defaultPreloadStaleTime:0}),F0=document.getElementById("root");dv.createRoot(F0).render(V.jsx(Sa.StrictMode,{children:V.jsx(Fb,{client:Up,children:V.jsx(hb,{router:K0})})}));export{ll as L,xp as O,Z0 as R,J0 as a,j0 as b,N0 as c,$0 as d,ew as e,ee as f,Zu as g,pa as h,ot as i,V as j,Fe as k,_p as r,Ep as u};
