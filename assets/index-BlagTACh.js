const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/docs-AgVhg1eT.js","assets/SearchPalette-CXfwNo6K.js","assets/createLucideIcon-aCN-EgqB.js","assets/utils-DaT-yT0k.js","assets/sparkles-Byu-vd6t.js","assets/index-DwFzCZCd.js","assets/arrow-right-C7PlMiXe.js","assets/docs.index-wKCD6Rns.js","assets/docs._slug-Do26okTf.js"])))=>i.map(i=>d[i]);
function nv(r,o){for(var s=0;s<o.length;s++){const u=o[s];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in r)){const d=Object.getOwnPropertyDescriptor(u,c);d&&Object.defineProperty(r,c,d.get?d:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function Zu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Eu={exports:{}},si={};var om;function av(){if(om)return si;om=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(u,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:r,type:u,key:m,ref:c!==void 0?c:null,props:d}}return si.Fragment=o,si.jsx=s,si.jsxs=s,si}var sm;function rv(){return sm||(sm=1,Eu.exports=av()),Eu.exports}var V=rv(),Tu={exports:{}},se={};var lm;function iv(){if(lm)return se;lm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),A=Symbol.iterator;function b(T){return T===null||typeof T!="object"?null:(T=A&&T[A]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function z(T,B,I){this.props=T,this.context=B,this.refs=D,this.updater=I||_}z.prototype.isReactComponent={},z.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function q(){}q.prototype=z.prototype;function Y(T,B,I){this.props=T,this.context=B,this.refs=D,this.updater=I||_}var G=Y.prototype=new q;G.constructor=Y,C(G,z.prototype),G.isPureReactComponent=!0;var $=Array.isArray;function K(){}var j={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function F(T,B,I){var X=I.ref;return{$$typeof:r,type:T,key:B,ref:X!==void 0?X:null,props:I}}function oe(T,B){return F(T.type,B,T.props)}function re(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function ae(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(I){return B[I]})}var Ie=/\/+/g;function ke(T,B){return typeof T=="object"&&T!==null&&T.key!=null?ae(""+T.key):B.toString(36)}function Be(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(K,K):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function L(T,B,I,X,W){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var ge=!1;if(T===null)ge=!0;else switch(ce){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(T.$$typeof){case r:case o:ge=!0;break;case S:return ge=T._init,L(ge(T._payload),B,I,X,W)}}if(ge)return W=W(T),ge=X===""?"."+ke(T,0):X,$(W)?(I="",ge!=null&&(I=ge.replace(Ie,"$&/")+"/"),L(W,B,I,"",function(Kt){return Kt})):W!=null&&(re(W)&&(W=oe(W,I+(W.key==null||T&&T.key===W.key?"":(""+W.key).replace(Ie,"$&/")+"/")+ge)),B.push(W)),1;ge=0;var He=X===""?".":X+":";if($(T))for(var Ce=0;Ce<T.length;Ce++)X=T[Ce],ce=He+ke(X,Ce),ge+=L(X,B,I,ce,W);else if(Ce=b(T),typeof Ce=="function")for(T=Ce.call(T),Ce=0;!(X=T.next()).done;)X=X.value,ce=He+ke(X,Ce++),ge+=L(X,B,I,ce,W);else if(ce==="object"){if(typeof T.then=="function")return L(Be(T),B,I,X,W);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ge}function P(T,B,I){if(T==null)return T;var X=[],W=0;return L(T,X,"","",function(ce){return B.call(I,ce,W++)}),X}function ne(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(I){(T._status===0||T._status===-1)&&(T._status=1,T._result=I)},function(I){(T._status===0||T._status===-1)&&(T._status=2,T._result=I)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var Se=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},we={map:P,forEach:function(T,B,I){P(T,function(){B.apply(this,arguments)},I)},count:function(T){var B=0;return P(T,function(){B++}),B},toArray:function(T){return P(T,function(B){return B})||[]},only:function(T){if(!re(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return se.Activity=v,se.Children=we,se.Component=z,se.Fragment=s,se.Profiler=c,se.PureComponent=Y,se.StrictMode=u,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,se.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},se.cache=function(T){return function(){return T.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(T,B,I){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=C({},T.props),W=T.key;if(B!=null)for(ce in B.key!==void 0&&(W=""+B.key),B)!Q.call(B,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&B.ref===void 0||(X[ce]=B[ce]);var ce=arguments.length-2;if(ce===1)X.children=I;else if(1<ce){for(var ge=Array(ce),He=0;He<ce;He++)ge[He]=arguments[He+2];X.children=ge}return F(T.type,W,X)},se.createContext=function(T){return T={$$typeof:m,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},se.createElement=function(T,B,I){var X,W={},ce=null;if(B!=null)for(X in B.key!==void 0&&(ce=""+B.key),B)Q.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=B[X]);var ge=arguments.length-2;if(ge===1)W.children=I;else if(1<ge){for(var He=Array(ge),Ce=0;Ce<ge;Ce++)He[Ce]=arguments[Ce+2];W.children=He}if(T&&T.defaultProps)for(X in ge=T.defaultProps,ge)W[X]===void 0&&(W[X]=ge[X]);return F(T,ce,W)},se.createRef=function(){return{current:null}},se.forwardRef=function(T){return{$$typeof:y,render:T}},se.isValidElement=re,se.lazy=function(T){return{$$typeof:S,_payload:{_status:-1,_result:T},_init:ne}},se.memo=function(T,B){return{$$typeof:h,type:T,compare:B===void 0?null:B}},se.startTransition=function(T){var B=j.T,I={};j.T=I;try{var X=T(),W=j.S;W!==null&&W(I,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(K,Se)}catch(ce){Se(ce)}finally{B!==null&&I.types!==null&&(B.types=I.types),j.T=B}},se.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},se.use=function(T){return j.H.use(T)},se.useActionState=function(T,B,I){return j.H.useActionState(T,B,I)},se.useCallback=function(T,B){return j.H.useCallback(T,B)},se.useContext=function(T){return j.H.useContext(T)},se.useDebugValue=function(){},se.useDeferredValue=function(T,B){return j.H.useDeferredValue(T,B)},se.useEffect=function(T,B){return j.H.useEffect(T,B)},se.useEffectEvent=function(T){return j.H.useEffectEvent(T)},se.useId=function(){return j.H.useId()},se.useImperativeHandle=function(T,B,I){return j.H.useImperativeHandle(T,B,I)},se.useInsertionEffect=function(T,B){return j.H.useInsertionEffect(T,B)},se.useLayoutEffect=function(T,B){return j.H.useLayoutEffect(T,B)},se.useMemo=function(T,B){return j.H.useMemo(T,B)},se.useOptimistic=function(T,B){return j.H.useOptimistic(T,B)},se.useReducer=function(T,B,I){return j.H.useReducer(T,B,I)},se.useRef=function(T){return j.H.useRef(T)},se.useState=function(T){return j.H.useState(T)},se.useSyncExternalStore=function(T,B,I){return j.H.useSyncExternalStore(T,B,I)},se.useTransition=function(){return j.H.useTransition()},se.version="19.2.6",se}var um;function wi(){return um||(um=1,Tu.exports=iv()),Tu.exports}var ee=wi();const Sa=Zu(ee),Z0=nv({__proto__:null,default:Sa},[ee]);var _u={exports:{}},li={},Ru={exports:{}},Cu={};var cm;function ov(){return cm||(cm=1,(function(r){function o(L,P){var ne=L.length;L.push(P);e:for(;0<ne;){var Se=ne-1>>>1,we=L[Se];if(0<c(we,P))L[Se]=P,L[ne]=we,ne=Se;else break e}}function s(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var P=L[0],ne=L.pop();if(ne!==P){L[0]=ne;e:for(var Se=0,we=L.length,T=we>>>1;Se<T;){var B=2*(Se+1)-1,I=L[B],X=B+1,W=L[X];if(0>c(I,ne))X<we&&0>c(W,I)?(L[Se]=W,L[X]=ne,Se=X):(L[Se]=I,L[B]=ne,Se=B);else if(X<we&&0>c(W,ne))L[Se]=W,L[X]=ne,Se=X;else break e}}return P}function c(L,P){var ne=L.sortIndex-P.sortIndex;return ne!==0?ne:L.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();r.unstable_now=function(){return m.now()-y}}var p=[],h=[],S=1,v=null,A=3,b=!1,_=!1,C=!1,D=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function G(L){for(var P=s(h);P!==null;){if(P.callback===null)u(h);else if(P.startTime<=L)u(h),P.sortIndex=P.expirationTime,o(p,P);else break;P=s(h)}}function $(L){if(C=!1,G(L),!_)if(s(p)!==null)_=!0,K||(K=!0,ae());else{var P=s(h);P!==null&&Be($,P.startTime-L)}}var K=!1,j=-1,Q=5,F=-1;function oe(){return D?!0:!(r.unstable_now()-F<Q)}function re(){if(D=!1,K){var L=r.unstable_now();F=L;var P=!0;try{e:{_=!1,C&&(C=!1,q(j),j=-1),b=!0;var ne=A;try{t:{for(G(L),v=s(p);v!==null&&!(v.expirationTime>L&&oe());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,A=v.priorityLevel;var we=Se(v.expirationTime<=L);if(L=r.unstable_now(),typeof we=="function"){v.callback=we,G(L),P=!0;break t}v===s(p)&&u(p),G(L)}else u(p);v=s(p)}if(v!==null)P=!0;else{var T=s(h);T!==null&&Be($,T.startTime-L),P=!1}}break e}finally{v=null,A=ne,b=!1}P=void 0}}finally{P?ae():K=!1}}}var ae;if(typeof Y=="function")ae=function(){Y(re)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ke=Ie.port2;Ie.port1.onmessage=re,ae=function(){ke.postMessage(null)}}else ae=function(){z(re,0)};function Be(L,P){j=z(function(){L(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(L){switch(A){case 1:case 2:case 3:var P=3;break;default:P=A}var ne=A;A=P;try{return L()}finally{A=ne}},r.unstable_requestPaint=function(){D=!0},r.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=A;A=L;try{return P()}finally{A=ne}},r.unstable_scheduleCallback=function(L,P,ne){var Se=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Se+ne:Se):ne=Se,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ne+we,L={id:S++,callback:P,priorityLevel:L,startTime:ne,expirationTime:we,sortIndex:-1},ne>Se?(L.sortIndex=ne,o(h,L),s(p)===null&&L===s(h)&&(C?(q(j),j=-1):C=!0,Be($,ne-Se))):(L.sortIndex=we,o(p,L),_||b||(_=!0,K||(K=!0,ae()))),L},r.unstable_shouldYield=oe,r.unstable_wrapCallback=function(L){var P=A;return function(){var ne=A;A=P;try{return L.apply(this,arguments)}finally{A=ne}}}})(Cu)),Cu}var fm;function sv(){return fm||(fm=1,Ru.exports=ov()),Ru.exports}var xu={exports:{}},at={};var dm;function lv(){if(dm)return at;dm=1;var r=wi();function o(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:h,implementation:S}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(p,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return d(p,h,null,S)},at.flushSync=function(p){var h=m.T,S=u.p;try{if(m.T=null,u.p=2,p)return p()}finally{m.T=h,u.p=S,u.d.f()}},at.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},at.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},at.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var S=h.as,v=y(S,h.crossOrigin),A=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:A,fetchPriority:b}):S==="script"&&u.d.X(p,{crossOrigin:v,integrity:A,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=y(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},at.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,v=y(S,h.crossOrigin);u.d.L(p,S,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(p,h){if(typeof p=="string")if(h){var S=y(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},at.requestFormReset=function(p){u.d.r(p)},at.unstable_batchedUpdates=function(p,h){return p(h)},at.useFormState=function(p,h,S){return m.H.useFormState(p,h,S)},at.useFormStatus=function(){return m.H.useHostTransitionStatus()},at.version="19.2.6",at}var hm;function $m(){if(hm)return xu.exports;hm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),xu.exports=lv(),xu.exports}var mm;function uv(){if(mm)return li;mm=1;var r=sv(),o=wi(),s=$m();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return p(i),e;if(l===a)return p(i),t;l=l.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=l;else{for(var f=!1,g=i.child;g;){if(g===n){f=!0,n=i,a=l;break}if(g===a){f=!0,a=i,n=l;break}g=g.sibling}if(!f){for(g=l.child;g;){if(g===n){f=!0,n=l,a=i;break}if(g===a){f=!0,a=l,n=i;break}g=g.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,A=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case z:return"Profiler";case D:return"StrictMode";case $:return"Suspense";case K:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case Y:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Be=Array.isArray,L=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Se=[],we=-1;function T(e){return{current:e}}function B(e){0>we||(e.current=Se[we],Se[we]=null,we--)}function I(e,t){we++,Se[we]=e.current,e.current=t}var X=T(null),W=T(null),ce=T(null),ge=T(null);function He(e,t){switch(I(ce,t),I(W,e),I(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Oh(t),e=Mh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(X),I(X,e)}function Ce(){B(X),B(W),B(ce)}function Kt(e){e.memoizedState!==null&&I(ge,e);var t=X.current,n=Mh(t,e.type);t!==n&&(I(W,e),I(X,n))}function Ft(e){W.current===e&&(B(X),B(W)),ge.current===e&&(B(ge),ai._currentValue=ne)}var vn,dr;function Gt(e){if(vn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vn=t&&t[1]||"",dr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vn+e+dr}var hr=!1;function wa(e,t){if(!e||hr)return"";hr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(k){var M=k}Reflect.construct(e,[],H)}else{try{H.call()}catch(k){M=k}e.call(H.prototype)}}else{try{throw Error()}catch(k){M=k}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(k){if(k&&M&&typeof k.stack=="string")return[k.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),f=l[0],g=l[1];if(f&&g){var w=f.split(`
`),O=g.split(`
`);for(i=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;if(a===w.length||i===O.length)for(a=w.length-1,i=O.length-1;1<=a&&0<=i&&w[a]!==O[i];)i--;for(;1<=a&&0<=i;a--,i--)if(w[a]!==O[i]){if(a!==1||i!==1)do if(a--,i--,0>i||w[a]!==O[i]){var N=`
`+w[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{hr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Gt(n):""}function Ei(e,t){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==t&&t!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return wa(e.type,!1);case 11:return wa(e.type.render,!1);case 1:return wa(e.type,!0);case 31:return Gt("Activity");default:return""}}function Zt(e){try{var t="",n=null;do t+=Ei(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Fn=Object.prototype.hasOwnProperty,Ut=r.unstable_scheduleCallback,mr=r.unstable_cancelCallback,Ti=r.unstable_shouldYield,cs=r.unstable_requestPaint,nt=r.unstable_now,Oe=r.unstable_getCurrentPriorityLevel,Ze=r.unstable_ImmediatePriority,Yt=r.unstable_UserBlockingPriority,Aa=r.unstable_NormalPriority,Bp=r.unstable_LowPriority,lc=r.unstable_IdlePriority,Hp=r.log,jp=r.unstable_setDisableYieldValue,pr=null,gt=null;function Sn(e){if(typeof Hp=="function"&&jp(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(pr,e)}catch{}}var yt=Math.clz32?Math.clz32:Yp,qp=Math.log,Gp=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(qp(e)/Gp|0)|0}var _i=256,Ri=262144,Ci=4194304;function Zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~l,a!==0?i=Zn(a):(f&=g,f!==0?i=Zn(f):n||(n=g&~e,n!==0&&(i=Zn(n))))):(g=a&~l,g!==0?i=Zn(g):f!==0?i=Zn(f):n||(n=a&~e,n!==0&&(i=Zn(n)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:i}function gr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(){var e=Ci;return Ci<<=1,(Ci&62914560)===0&&(Ci=4194304),e}function fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pp(e,t,n,a,i,l){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,w=e.expirationTimes,O=e.hiddenUpdates;for(n=f&~n;0<n;){var N=31-yt(n),H=1<<N;g[N]=0,w[N]=-1;var M=O[N];if(M!==null)for(O[N]=null,N=0;N<M.length;N++){var k=M[N];k!==null&&(k.lane&=-536870913)}n&=~H}a!==0&&cc(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(f&~t))}function cc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-yt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function dc(e,t){var n=t&-t;return n=(n&42)!==0?1:ds(n),(n&(e.suspendedLanes|t))!==0?0:n}function ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:$h(e.type))}function mc(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var bn=Math.random().toString(36).slice(2),Je="__reactFiber$"+bn,lt="__reactProps$"+bn,Ea="__reactContainer$"+bn,ms="__reactEvents$"+bn,Vp="__reactListeners$"+bn,Ip="__reactHandles$"+bn,pc="__reactResources$"+bn,vr="__reactMarker$"+bn;function ps(e){delete e[Je],delete e[lt],delete e[ms],delete e[Vp],delete e[Ip]}function Ta(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ea]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bh(e);e!==null;){if(n=e[Je])return n;e=Bh(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[Je]||e[Ea]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Sr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ra(e){var t=e[pc];return t||(t=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[vr]=!0}var gc=new Set,yc={};function Jn(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(yc[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vc={},Sc={};function Kp(e){return Fn.call(Sc,e)?!0:Fn.call(vc,e)?!1:Xp.test(e)?Sc[e]=!0:(vc[e]=!0,!1)}function Oi(e,t,n){if(Kp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Mi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,l.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gs(e){if(!e._valueTracker){var t=bc(e)?"checked":"value";e._valueTracker=Fp(e,t,""+e[t])}}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zp=/[\n"\\]/g;function Rt(e){return e.replace(Zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ys(e,t,n,a,i,l,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?vs(e,f,_t(t)):n!=null?vs(e,f,_t(n)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+_t(g):e.removeAttribute("name")}function Ac(e,t,n,a,i,l,f,g){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){gs(e);return}n=n!=null?""+_t(n):"",t=t!=null?""+_t(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),gs(e)}function vs(e,t,n){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ec(e,t,n){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_t(n):""}function Tc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Be(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=_t(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),gs(e)}function Oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Jp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Rc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&_c(e,i,a)}else for(var l in t)t.hasOwnProperty(l)&&_c(e,l,t[l])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ki(e){return $p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var bs=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Da=null;function Cc(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ys(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[lt]||null;if(!i)throw Error(u(90));ys(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&wc(a)}break e;case"textarea":Ec(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var As=!1;function xc(e,t,n){if(As)return e(t,n);As=!0;try{var a=e(t);return a}finally{if(As=!1,(Ma!==null||Da!==null)&&(bo(),Ma&&(t=Ma,e=Da,Da=Ma=null,Cc(t),e)))for(t=0;t<e.length;t++)Cc(e[t])}}function br(e,t){var n=e.stateNode;if(n===null)return null;var a=n[lt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if($t)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Es=!1}var wn=null,Ts=null,zi=null;function Oc(){if(zi)return zi;var e,t=Ts,n=t.length,a,i="value"in wn?wn.value:wn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[l-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Mc(){return!1}function ut(e){function t(n,a,i,l,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ni:Mc,this.isPropagationStopped=Mc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=ut(Wn),Ar=v({},Wn,{view:0,detail:0}),eg=ut(Ar),_s,Rs,Er,Bi=v({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(_s=e.screenX-Er.screenX,Rs=e.screenY-Er.screenY):Rs=_s=0,Er=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Rs}}),Dc=ut(Bi),tg=v({},Bi,{dataTransfer:0}),ng=ut(tg),ag=v({},Ar,{relatedTarget:0}),Cs=ut(ag),rg=v({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=ut(rg),og=v({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=ut(og),lg=v({},Wn,{data:0}),kc=ut(lg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function xs(){return dg}var hg=v({},Ar,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=ut(hg),pg=v({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=ut(pg),gg=v({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),yg=ut(gg),vg=v({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=ut(vg),bg=v({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=ut(bg),Ag=v({},Wn,{newState:0,oldState:0}),Eg=ut(Ag),Tg=[9,13,27,32],Os=$t&&"CompositionEvent"in window,Tr=null;$t&&"documentMode"in document&&(Tr=document.documentMode);var _g=$t&&"TextEvent"in window&&!Tr,Lc=$t&&(!Os||Tr&&8<Tr&&11>=Tr),Nc=" ",Uc=!1;function Bc(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function Rg(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Uc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Uc?null:e;default:return null}}function Cg(e,t){if(ka)return e==="compositionend"||!Os&&Bc(e,t)?(e=Oc(),zi=Ts=wn=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function qc(e,t,n,a){Ma?Da?Da.push(a):Da=[a]:Ma=a,t=Co(t,"onChange"),0<t.length&&(n=new Ui("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var _r=null,Rr=null;function Og(e){Eh(e,0)}function Hi(e){var t=Sr(e);if(wc(t))return e}function Gc(e,t){if(e==="change")return t}var Yc=!1;if($t){var Ms;if($t){var Ds="oninput"in document;if(!Ds){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Ds=typeof Qc.oninput=="function"}Ms=Ds}else Ms=!1;Yc=Ms&&(!document.documentMode||9<document.documentMode)}function Pc(){_r&&(_r.detachEvent("onpropertychange",Vc),Rr=_r=null)}function Vc(e){if(e.propertyName==="value"&&Hi(Rr)){var t=[];qc(t,Rr,e,ws(e)),xc(Og,t)}}function Mg(e,t,n){e==="focusin"?(Pc(),_r=t,Rr=n,_r.attachEvent("onpropertychange",Vc)):e==="focusout"&&Pc()}function Dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Rr)}function kg(e,t){if(e==="click")return Hi(t)}function zg(e,t){if(e==="input"||e==="change")return Hi(t)}function Lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Lg;function Cr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Fn.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Ic(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ng=$t&&"documentMode"in document&&11>=document.documentMode,za=null,zs=null,xr=null,Ls=!1;function Zc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ls||za==null||za!==Di(a)||(a=za,"selectionStart"in a&&ks(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),xr&&Cr(xr,a)||(xr=a,a=Co(zs,"onSelect"),0<a.length&&(t=new Ui("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=za)))}function $n(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var La={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Ns={},Jc={};$t&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ea(e){if(Ns[e])return Ns[e];if(!La[e])return e;var t=La[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return Ns[e]=t[n];return e}var Wc=ea("animationend"),$c=ea("animationiteration"),ef=ea("animationstart"),Ug=ea("transitionrun"),Bg=ea("transitionstart"),Hg=ea("transitioncancel"),tf=ea("transitionend"),nf=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function Bt(e,t){nf.set(e,t),Jn(t,[e])}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Na=0,Bs=0;function qi(){for(var e=Na,t=Bs=Na=0;t<e;){var n=Ct[t];Ct[t++]=null;var a=Ct[t];Ct[t++]=null;var i=Ct[t];Ct[t++]=null;var l=Ct[t];if(Ct[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}l!==0&&af(n,i,l)}}function Gi(e,t,n,a){Ct[Na++]=e,Ct[Na++]=t,Ct[Na++]=n,Ct[Na++]=a,Bs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Hs(e,t,n,a){return Gi(e,t,n,a),Yi(e)}function ta(e,t){return Gi(e,null,null,t),Yi(e)}function af(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-yt(n),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),l):null}function Yi(e){if(50<Zr)throw Zr=0,Xl=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ua={};function jg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,a){return new jg(e,t,n,a)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,a,i,l){var f=0;if(a=e,typeof e=="function")js(e)&&(f=1);else if(typeof e=="string")f=Py(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=St(31,n,t,i),e.elementType=F,e.lanes=l,e;case C:return na(n.children,i,l,t);case D:f=8,i|=24;break;case z:return e=St(12,n,t,i|2),e.elementType=z,e.lanes=l,e;case $:return e=St(13,n,t,i),e.elementType=$,e.lanes=l,e;case K:return e=St(19,n,t,i),e.elementType=K,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:f=10;break e;case q:f=9;break e;case G:f=11;break e;case j:f=14;break e;case Q:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=St(f,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function na(e,t,n,a){return e=St(7,e,a,t),e.lanes=n,e}function qs(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function of(e){var t=St(18,null,null,0);return t.stateNode=e,t}function Gs(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sf=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var n=sf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zt(t)},sf.set(e,t),t)}return{value:e,source:t,stack:Zt(t)}}var Ba=[],Ha=0,Pi=null,Or=0,Ot=[],Mt=0,An=null,Qt=1,Pt="";function tn(e,t){Ba[Ha++]=Or,Ba[Ha++]=Pi,Pi=e,Or=t}function lf(e,t,n){Ot[Mt++]=Qt,Ot[Mt++]=Pt,Ot[Mt++]=An,An=e;var a=Qt;e=Pt;var i=32-yt(a)-1;a&=~(1<<i),n+=1;var l=32-yt(t)+i;if(30<l){var f=i-i%5;l=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Qt=1<<32-yt(t)+i|n<<i|a,Pt=l+e}else Qt=1<<l|n<<i|a,Pt=e}function Ys(e){e.return!==null&&(tn(e,1),lf(e,1,0))}function Qs(e){for(;e===Pi;)Pi=Ba[--Ha],Ba[Ha]=null,Or=Ba[--Ha],Ba[Ha]=null;for(;e===An;)An=Ot[--Mt],Ot[Mt]=null,Pt=Ot[--Mt],Ot[Mt]=null,Qt=Ot[--Mt],Ot[Mt]=null}function uf(e,t){Ot[Mt++]=Qt,Ot[Mt++]=Pt,Ot[Mt++]=An,Qt=t.id,Pt=t.overflow,An=e}var We=null,Me=null,pe=!1,En=null,Dt=!1,Ps=Error(u(519));function Tn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mr(xt(t,e)),Ps}function cf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Je]=e,t[lt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<Wr.length;n++)de(Wr[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Ac(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Tc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ch(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Tn(e,!0)}function ff(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:We=We.return}}function ja(e){if(e!==We)return!1;if(!pe)return ff(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lu(e.type,e.memoizedProps)),n=!n),n&&Me&&Tn(e),ff(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Uh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Uh(e)}else t===27?(t=Me,Hn(e.type)?(e=hu,hu=null,Me=e):Me=t):Me=We?zt(e.stateNode.nextSibling):null;return!0}function aa(){Me=We=null,pe=!1}function Vs(){var e=En;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),En=null),e}function Mr(e){En===null?En=[e]:En.push(e)}var Is=T(null),ra=null,nn=null;function _n(e,t,n){I(Is,t._currentValue),t._currentValue=n}function an(e){e._currentValue=Is.current,B(Is)}function Xs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ks(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var f=i.child;l=l.firstContext;e:for(;l!==null;){var g=l;l=i;for(var w=0;w<t.length;w++)if(g.context===t[w]){l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),Xs(l.return,n,e),a||(f=null);break e}l=g.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,l=f.alternate,l!==null&&(l.lanes|=n),Xs(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function qa(e,t,n,a){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var g=i.type;vt(i.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(i===ge.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ai):e=[ai])}i=i.return}e!==null&&Ks(t,e,n,a),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){ra=e,nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return df(ra,e)}function Ii(e,t){return ra===null&&ia(e),df(e,t)}function df(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},nn===null){if(e===null)throw Error(u(308));nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else nn=nn.next=t;return n}var qg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gg=r.unstable_scheduleCallback,Yg=r.unstable_NormalPriority,Ge={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fs(){return{controller:new qg,data:new Map,refCount:0}}function Dr(e){e.refCount--,e.refCount===0&&Gg(Yg,function(){e.controller.abort()})}var kr=null,Zs=0,Ga=0,Ya=null;function Qg(e,t){if(kr===null){var n=kr=[];Zs=0,Ga=$l(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Zs++,t.then(hf,hf),t}function hf(){if(--Zs===0&&kr!==null){Ya!==null&&(Ya.status="fulfilled");var e=kr;kr=null,Ga=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var mf=L.S;L.S=function(e,t){Jd=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qg(e,t),mf!==null&&mf(e,t)};var oa=T(null);function Js(){var e=oa.current;return e!==null?e:xe.pooledCache}function Xi(e,t){t===null?I(oa,oa.current):I(oa,t.pool)}function pf(){var e=Js();return e===null?null:{parent:Ge._currentValue,pool:e}}var Qa=Error(u(460)),Ws=Error(u(474)),Ki=Error(u(542)),Fi={then:function(){}};function gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wt,Wt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e}throw la=t,Qa}}function sa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(la=n,Qa):n}}var la=null;function vf(){if(la===null)throw Error(u(459));var e=la;return la=null,e}function Sf(e){if(e===Qa||e===Ki)throw Error(u(483))}var Pa=null,zr=0;function Zi(e){var t=zr;return zr+=1,Pa===null&&(Pa=[]),yf(Pa,e,t)}function Lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ji(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bf(e){function t(R,E){if(e){var x=R.deletions;x===null?(R.deletions=[E],R.flags|=16):x.push(E)}}function n(R,E){if(!e)return null;for(;E!==null;)t(R,E),E=E.sibling;return null}function a(R){for(var E=new Map;R!==null;)R.key!==null?E.set(R.key,R):E.set(R.index,R),R=R.sibling;return E}function i(R,E){return R=en(R,E),R.index=0,R.sibling=null,R}function l(R,E,x){return R.index=x,e?(x=R.alternate,x!==null?(x=x.index,x<E?(R.flags|=67108866,E):x):(R.flags|=67108866,E)):(R.flags|=1048576,E)}function f(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function g(R,E,x,U){return E===null||E.tag!==6?(E=qs(x,R.mode,U),E.return=R,E):(E=i(E,x),E.return=R,E)}function w(R,E,x,U){var te=x.type;return te===C?N(R,E,x.props.children,U,x.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Q&&sa(te)===E.type)?(E=i(E,x.props),Lr(E,x),E.return=R,E):(E=Qi(x.type,x.key,x.props,null,R.mode,U),Lr(E,x),E.return=R,E)}function O(R,E,x,U){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Gs(x,R.mode,U),E.return=R,E):(E=i(E,x.children||[]),E.return=R,E)}function N(R,E,x,U,te){return E===null||E.tag!==7?(E=na(x,R.mode,U,te),E.return=R,E):(E=i(E,x),E.return=R,E)}function H(R,E,x){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=qs(""+E,R.mode,x),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case b:return x=Qi(E.type,E.key,E.props,null,R.mode,x),Lr(x,E),x.return=R,x;case _:return E=Gs(E,R.mode,x),E.return=R,E;case Q:return E=sa(E),H(R,E,x)}if(Be(E)||ae(E))return E=na(E,R.mode,x,null),E.return=R,E;if(typeof E.then=="function")return H(R,Zi(E),x);if(E.$$typeof===Y)return H(R,Ii(R,E),x);Ji(R,E)}return null}function M(R,E,x,U){var te=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return te!==null?null:g(R,E,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case b:return x.key===te?w(R,E,x,U):null;case _:return x.key===te?O(R,E,x,U):null;case Q:return x=sa(x),M(R,E,x,U)}if(Be(x)||ae(x))return te!==null?null:N(R,E,x,U,null);if(typeof x.then=="function")return M(R,E,Zi(x),U);if(x.$$typeof===Y)return M(R,E,Ii(R,x),U);Ji(R,x)}return null}function k(R,E,x,U,te){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return R=R.get(x)||null,g(E,R,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case b:return R=R.get(U.key===null?x:U.key)||null,w(E,R,U,te);case _:return R=R.get(U.key===null?x:U.key)||null,O(E,R,U,te);case Q:return U=sa(U),k(R,E,x,U,te)}if(Be(U)||ae(U))return R=R.get(x)||null,N(E,R,U,te,null);if(typeof U.then=="function")return k(R,E,x,Zi(U),te);if(U.$$typeof===Y)return k(R,E,x,Ii(E,U),te);Ji(E,U)}return null}function Z(R,E,x,U){for(var te=null,ye=null,J=E,ue=E=0,me=null;J!==null&&ue<x.length;ue++){J.index>ue?(me=J,J=null):me=J.sibling;var ve=M(R,J,x[ue],U);if(ve===null){J===null&&(J=me);break}e&&J&&ve.alternate===null&&t(R,J),E=l(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve,J=me}if(ue===x.length)return n(R,J),pe&&tn(R,ue),te;if(J===null){for(;ue<x.length;ue++)J=H(R,x[ue],U),J!==null&&(E=l(J,E,ue),ye===null?te=J:ye.sibling=J,ye=J);return pe&&tn(R,ue),te}for(J=a(J);ue<x.length;ue++)me=k(J,R,ue,x[ue],U),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ue:me.key),E=l(me,E,ue),ye===null?te=me:ye.sibling=me,ye=me);return e&&J.forEach(function(Qn){return t(R,Qn)}),pe&&tn(R,ue),te}function ie(R,E,x,U){if(x==null)throw Error(u(151));for(var te=null,ye=null,J=E,ue=E=0,me=null,ve=x.next();J!==null&&!ve.done;ue++,ve=x.next()){J.index>ue?(me=J,J=null):me=J.sibling;var Qn=M(R,J,ve.value,U);if(Qn===null){J===null&&(J=me);break}e&&J&&Qn.alternate===null&&t(R,J),E=l(Qn,E,ue),ye===null?te=Qn:ye.sibling=Qn,ye=Qn,J=me}if(ve.done)return n(R,J),pe&&tn(R,ue),te;if(J===null){for(;!ve.done;ue++,ve=x.next())ve=H(R,ve.value,U),ve!==null&&(E=l(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve);return pe&&tn(R,ue),te}for(J=a(J);!ve.done;ue++,ve=x.next())ve=k(J,R,ue,ve.value,U),ve!==null&&(e&&ve.alternate!==null&&J.delete(ve.key===null?ue:ve.key),E=l(ve,E,ue),ye===null?te=ve:ye.sibling=ve,ye=ve);return e&&J.forEach(function(tv){return t(R,tv)}),pe&&tn(R,ue),te}function Re(R,E,x,U){if(typeof x=="object"&&x!==null&&x.type===C&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case b:e:{for(var te=x.key;E!==null;){if(E.key===te){if(te=x.type,te===C){if(E.tag===7){n(R,E.sibling),U=i(E,x.props.children),U.return=R,R=U;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Q&&sa(te)===E.type){n(R,E.sibling),U=i(E,x.props),Lr(U,x),U.return=R,R=U;break e}n(R,E);break}else t(R,E);E=E.sibling}x.type===C?(U=na(x.props.children,R.mode,U,x.key),U.return=R,R=U):(U=Qi(x.type,x.key,x.props,null,R.mode,U),Lr(U,x),U.return=R,R=U)}return f(R);case _:e:{for(te=x.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(R,E.sibling),U=i(E,x.children||[]),U.return=R,R=U;break e}else{n(R,E);break}else t(R,E);E=E.sibling}U=Gs(x,R.mode,U),U.return=R,R=U}return f(R);case Q:return x=sa(x),Re(R,E,x,U)}if(Be(x))return Z(R,E,x,U);if(ae(x)){if(te=ae(x),typeof te!="function")throw Error(u(150));return x=te.call(x),ie(R,E,x,U)}if(typeof x.then=="function")return Re(R,E,Zi(x),U);if(x.$$typeof===Y)return Re(R,E,Ii(R,x),U);Ji(R,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,E!==null&&E.tag===6?(n(R,E.sibling),U=i(E,x),U.return=R,R=U):(n(R,E),U=qs(x,R.mode,U),U.return=R,R=U),f(R)):n(R,E)}return function(R,E,x,U){try{zr=0;var te=Re(R,E,x,U);return Pa=null,te}catch(J){if(J===Qa||J===Ki)throw J;var ye=St(29,J,null,R.mode);return ye.lanes=U,ye.return=R,ye}}}var ua=bf(!0),wf=bf(!1),Rn=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function el(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Yi(e),af(e,null,n),t}return Gi(e,a,t,n),Yi(e)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fc(e,n)}}function tl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=f:l=l.next=f,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var nl=!1;function Ur(){if(nl){var e=Ya;if(e!==null)throw e}}function Br(e,t,n,a){nl=!1;var i=e.updateQueue;Rn=!1;var l=i.firstBaseUpdate,f=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var w=g,O=w.next;w.next=null,f===null?l=O:f.next=O,f=w;var N=e.alternate;N!==null&&(N=N.updateQueue,g=N.lastBaseUpdate,g!==f&&(g===null?N.firstBaseUpdate=O:g.next=O,N.lastBaseUpdate=w))}if(l!==null){var H=i.baseState;f=0,N=O=w=null,g=l;do{var M=g.lane&-536870913,k=M!==g.lane;if(k?(he&M)===M:(a&M)===M){M!==0&&M===Ga&&(nl=!0),N!==null&&(N=N.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Z=e,ie=g;M=t;var Re=n;switch(ie.tag){case 1:if(Z=ie.payload,typeof Z=="function"){H=Z.call(Re,H,M);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ie.payload,M=typeof Z=="function"?Z.call(Re,H,M):Z,M==null)break e;H=v({},H,M);break e;case 2:Rn=!0}}M=g.callback,M!==null&&(e.flags|=64,k&&(e.flags|=8192),k=i.callbacks,k===null?i.callbacks=[M]:k.push(M))}else k={lane:M,tag:g.tag,payload:g.payload,callback:g.callback,next:null},N===null?(O=N=k,w=H):N=N.next=k,f|=M;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;k=g,g=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);N===null&&(w=H),i.baseState=w,i.firstBaseUpdate=O,i.lastBaseUpdate=N,l===null&&(i.shared.lanes=0),zn|=f,e.lanes=f,e.memoizedState=H}}function Af(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ef(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Af(n[e],t)}var Va=T(null),Wi=T(0);function Tf(e,t){e=hn,I(Wi,e),I(Va,t),hn=e|t.baseLanes}function al(){I(Wi,hn),I(Va,Va.current)}function rl(){hn=Wi.current,B(Va),B(Wi)}var bt=T(null),kt=null;function On(e){var t=e.alternate;I(je,je.current&1),I(bt,e),kt===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(kt=e)}function il(e){I(je,je.current),I(bt,e),kt===null&&(kt=e)}function _f(e){e.tag===22?(I(je,je.current),I(bt,e),kt===null&&(kt=e)):Mn()}function Mn(){I(je,je.current),I(bt,bt.current)}function wt(e){B(bt),kt===e&&(kt=null),B(je)}var je=T(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fu(n)||du(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rn=0,le=null,Te=null,Ye=null,eo=!1,Ia=!1,ca=!1,to=0,Hr=0,Xa=null,Vg=0;function Ne(){throw Error(u(321))}function ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function sl(e,t,n,a,i,l){return rn=l,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?ld:Al,ca=!1,l=n(a,i),ca=!1,Ia&&(l=Cf(t,n,a,i)),Rf(e),l}function Rf(e){L.H=Gr;var t=Te!==null&&Te.next!==null;if(rn=0,Ye=Te=le=null,eo=!1,Hr=0,Xa=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Vi(e)&&(Qe=!0))}function Cf(e,t,n,a){le=e;var i=0;do{if(Ia&&(Xa=null),Hr=0,Ia=!1,25<=i)throw Error(u(301));if(i+=1,Ye=Te=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}L.H=ud,l=t(n,a)}while(Ia);return l}function Ig(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?jr(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(le.flags|=1024),t}function ll(){var e=to!==0;return to=0,e}function ul(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cl(e){if(eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}eo=!1}rn=0,Ye=Te=le=null,Ia=!1,Hr=to=0,Xa=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?le.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function qe(){if(Te===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ye===null?le.memoizedState:Ye.next;if(t!==null)Ye=t,Te=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ye===null?le.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jr(e){var t=Hr;return Hr+=1,Xa===null&&(Xa=[]),e=yf(Xa,e,t),t=le,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?ld:Al),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jr(e);if(e.$$typeof===Y)return $e(e)}throw Error(u(438,String(e)))}function fl(e){var t=null,n=le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=no(),le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=oe;return t.index++,n}function on(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=qe();return dl(t,Te,e)}function dl(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var f=i.next;i.next=l.next,l.next=f}t.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var g=f=null,w=null,O=t,N=!1;do{var H=O.lane&-536870913;if(H!==O.lane?(he&H)===H:(rn&H)===H){var M=O.revertLane;if(M===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),H===Ga&&(N=!0);else if((rn&M)===M){O=O.next,M===Ga&&(N=!0);continue}else H={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(g=w=H,f=l):w=w.next=H,le.lanes|=M,zn|=M;H=O.action,ca&&n(l,H),l=O.hasEagerState?O.eagerState:n(l,H)}else M={lane:H,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(g=w=M,f=l):w=w.next=M,le.lanes|=H,zn|=H;O=O.next}while(O!==null&&O!==t);if(w===null?f=l:w.next=g,!vt(l,e.memoizedState)&&(Qe=!0,N&&(n=Ya,n!==null)))throw n;e.memoizedState=l,e.baseState=f,e.baseQueue=w,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hl(e){var t=qe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do l=e(l,f.action),f=f.next;while(f!==i);vt(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function xf(e,t,n){var a=le,i=qe(),l=pe;if(l){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!vt((Te||i).memoizedState,n);if(f&&(i.memoizedState=n,Qe=!0),i=i.queue,gl(Df.bind(null,a,i,e),[e]),i.getSnapshot!==t||f||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ka(9,{destroy:void 0},Mf.bind(null,a,i,n,t),null),xe===null)throw Error(u(349));l||(rn&127)!==0||Of(a,t,n)}return n}function Of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t=no(),le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mf(e,t,n,a){t.value=n,t.getSnapshot=a,kf(t)&&zf(e)}function Df(e,t,n){return n(function(){kf(t)&&zf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function zf(e){var t=ta(e,2);t!==null&&mt(t,e,2)}function ml(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),ca){Sn(!0);try{n()}finally{Sn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:e},t}function Lf(e,t,n,a){return e.baseState=n,dl(e,Te,typeof a=="function"?a:on)}function Xg(e,t,n,a,i){if(so(e))throw Error(u(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){l.listeners.push(f)}};L.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,Nf(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Nf(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var l=L.T,f={};L.T=f;try{var g=n(i,a),w=L.S;w!==null&&w(f,g),Uf(e,t,g)}catch(O){pl(e,t,O)}finally{l!==null&&f.types!==null&&(l.types=f.types),L.T=l}}else try{l=n(i,a),Uf(e,t,l)}catch(O){pl(e,t,O)}}function Uf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Bf(e,t,a)},function(a){return pl(e,t,a)}):Bf(e,t,n)}function Bf(e,t,n){t.status="fulfilled",t.value=n,Hf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Nf(e,n)))}function pl(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Hf(t),t=t.next;while(t!==a)}e.action=null}function Hf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jf(e,t){return t}function qf(e,t){if(pe){var n=xe.formState;if(n!==null){e:{var a=le;if(pe){if(Me){t:{for(var i=Me,l=Dt;i.nodeType!==8;){if(!l){i=null;break t}if(i=zt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Me=zt(i.nextSibling),a=i.data==="F!";break e}}Tn(a)}a=!1}a&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jf,lastRenderedState:t},n.queue=a,n=id.bind(null,le,a),a.dispatch=n,a=ml(!1),l=wl.bind(null,le,!1,a.queue),a=ot(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Xg.bind(null,le,i,l,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Gf(e){var t=qe();return Yf(t,Te,e)}function Yf(e,t,n){if(t=dl(e,t,jf)[0],e=ro(on)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=jr(t)}catch(f){throw f===Qa?Ki:f}else a=t;t=qe();var i=t.queue,l=i.dispatch;return n!==t.memoizedState&&(le.flags|=2048,Ka(9,{destroy:void 0},Kg.bind(null,i,n),null)),[a,l,e]}function Kg(e,t){e.action=t}function Qf(e){var t=qe(),n=Te;if(n!==null)return Yf(t,n,e);qe(),t=t.memoizedState,n=qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=le.updateQueue,t===null&&(t=no(),le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pf(){return qe().memoizedState}function io(e,t,n,a){var i=ot();le.flags|=e,i.memoizedState=Ka(1|t,{destroy:void 0},n,a===void 0?null:a)}function oo(e,t,n,a){var i=qe();a=a===void 0?null:a;var l=i.memoizedState.inst;Te!==null&&a!==null&&ol(a,Te.memoizedState.deps)?i.memoizedState=Ka(t,l,n,a):(le.flags|=e,i.memoizedState=Ka(1|t,l,n,a))}function Vf(e,t){io(8390656,8,e,t)}function gl(e,t){oo(2048,8,e,t)}function Fg(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=no(),le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function If(e){var t=qe().memoizedState;return Fg({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Xf(e,t){return oo(4,2,e,t)}function Kf(e,t){return oo(4,4,e,t)}function Ff(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zf(e,t,n){n=n!=null?n.concat([e]):null,oo(4,4,Ff.bind(null,t,e),n)}function yl(){}function Jf(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ol(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Wf(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ol(t,a[1]))return a[0];if(a=e(),ca){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[a,t],a}function vl(e,t,n){return n===void 0||(rn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$d(),le.lanes|=e,zn|=e,n)}function $f(e,t,n,a){return vt(n,t)?n:Va.current!==null?(e=vl(e,n,a),vt(e,t)||(Qe=!0),e):(rn&42)===0||(rn&1073741824)!==0&&(he&261930)===0?(Qe=!0,e.memoizedState=n):(e=$d(),le.lanes|=e,zn|=e,t)}function ed(e,t,n,a,i){var l=P.p;P.p=l!==0&&8>l?l:8;var f=L.T,g={};L.T=g,wl(e,!1,t,n);try{var w=i(),O=L.S;if(O!==null&&O(g,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var N=Pg(w,a);qr(e,t,N,Tt(e))}else qr(e,t,a,Tt(e))}catch(H){qr(e,t,{then:function(){},status:"rejected",reason:H},Tt())}finally{P.p=l,f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}function Zg(){}function Sl(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=td(e).queue;ed(e,i,t,ne,n===null?Zg:function(){return nd(e),n(a)})}function td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=td(e);t.next===null&&(t=e.alternate.memoizedState),qr(e,t.next.queue,{},Tt())}function bl(){return $e(ai)}function ad(){return qe().memoizedState}function rd(){return qe().memoizedState}function Jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=Cn(n);var a=xn(t,e,n);a!==null&&(mt(a,t,n),Nr(a,t,n)),t={cache:Fs()},e.payload=t;return}t=t.return}}function Wg(e,t,n){var a=Tt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},so(e)?od(t,n):(n=Hs(e,t,n,a),n!==null&&(mt(n,e,a),sd(n,t,a)))}function id(e,t,n){var a=Tt();qr(e,t,n,a)}function qr(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(so(e))od(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var f=t.lastRenderedState,g=l(f,n);if(i.hasEagerState=!0,i.eagerState=g,vt(g,f))return Gi(e,t,i,0),xe===null&&qi(),!1}catch{}if(n=Hs(e,t,i,a),n!==null)return mt(n,e,a),sd(n,t,a),!0}return!1}function wl(e,t,n,a){if(a={lane:2,revertLane:$l(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},so(e)){if(t)throw Error(u(479))}else t=Hs(e,n,a,2),t!==null&&mt(t,e,2)}function so(e){var t=e.alternate;return e===le||t!==null&&t===le}function od(e,t){Ia=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fc(e,n)}}var Gr={readContext:$e,use:ao,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Gr.useEffectEvent=Ne;var ld={readContext:$e,use:ao,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Vf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,io(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var a=e();if(ca){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ot();if(n!==void 0){var i=n(t);if(ca){Sn(!0);try{n(t)}finally{Sn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Wg.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=ml(e);var t=e.queue,n=id.bind(null,le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yl,useDeferredValue:function(e,t){var n=ot();return vl(n,e,t)},useTransition:function(){var e=ml(!1);return e=ed.bind(null,le,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=le,i=ot();if(pe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),xe===null)throw Error(u(349));(he&127)!==0||Of(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Vf(Df.bind(null,a,l,e),[e]),a.flags|=2048,Ka(9,{destroy:void 0},Mf.bind(null,a,l,n,t),null),n},useId:function(){var e=ot(),t=xe.identifierPrefix;if(pe){var n=Pt,a=Qt;n=(a&~(1<<32-yt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:bl,useFormState:qf,useActionState:qf,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wl.bind(null,le,!0,n),n.dispatch=t,[e,t]},useMemoCache:fl,useCacheRefresh:function(){return ot().memoizedState=Jg.bind(null,le)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Al={readContext:$e,use:ao,useCallback:Jf,useContext:$e,useEffect:gl,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:Wf,useReducer:ro,useRef:Pf,useState:function(){return ro(on)},useDebugValue:yl,useDeferredValue:function(e,t){var n=qe();return $f(n,Te.memoizedState,e,t)},useTransition:function(){var e=ro(on)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:xf,useId:ad,useHostTransitionStatus:bl,useFormState:Gf,useActionState:Gf,useOptimistic:function(e,t){var n=qe();return Lf(n,Te,e,t)},useMemoCache:fl,useCacheRefresh:rd};Al.useEffectEvent=If;var ud={readContext:$e,use:ao,useCallback:Jf,useContext:$e,useEffect:gl,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Kf,useMemo:Wf,useReducer:hl,useRef:Pf,useState:function(){return hl(on)},useDebugValue:yl,useDeferredValue:function(e,t){var n=qe();return Te===null?vl(n,e,t):$f(n,Te.memoizedState,e,t)},useTransition:function(){var e=hl(on)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:xf,useId:ad,useHostTransitionStatus:bl,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=qe();return Te!==null?Lf(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fl,useCacheRefresh:rd};ud.useEffectEvent=If;function El(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),i=Cn(a);i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,a),t!==null&&(mt(t,e,a),Nr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),i=Cn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,a),t!==null&&(mt(t,e,a),Nr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=Cn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(mt(t,e,n),Nr(t,e,n))}};function cd(e,t,n,a,i,l,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,f):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,a)||!Cr(i,l):!0}function fd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function dd(e){ji(e)}function hd(e){console.error(e)}function md(e){ji(e)}function lo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function pd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function _l(e,t,n){return n=Cn(n),n.tag=3,n.payload={element:null},n.callback=function(){lo(e,t)},n}function gd(e){return e=Cn(e),e.tag=3,e}function yd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){pd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){pd(t,n,a),typeof i!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function $g(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&qa(t,n,i,!0),n=bt.current,n!==null){switch(n.tag){case 31:case 13:return kt===null?wo():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Fi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Zl(e,a,i)),!1;case 22:return n.flags|=65536,a===Fi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Zl(e,a,i)),!1}throw Error(u(435,n.tag))}return Zl(e,a,i),wo(),!1}if(pe)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Ps&&(e=Error(u(422),{cause:a}),Mr(xt(e,n)))):(a!==Ps&&(t=Error(u(423),{cause:a}),Mr(xt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=xt(a,n),i=_l(e.stateNode,a,i),tl(e,i),Ue!==4&&(Ue=2)),!1;var l=Error(u(520),{cause:a});if(l=xt(l,n),Fr===null?Fr=[l]:Fr.push(l),Ue!==4&&(Ue=2),t===null)return!0;a=xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=_l(n.stateNode,a,e),tl(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ln===null||!Ln.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=gd(i),yd(i,e,n,a),tl(n,i),!1}n=n.return}while(n!==null);return!1}var Rl=Error(u(461)),Qe=!1;function et(e,t,n,a){t.child=e===null?wf(t,null,n,a):ua(t,e.child,n,a)}function vd(e,t,n,a,i){n=n.render;var l=t.ref;if("ref"in a){var f={};for(var g in a)g!=="ref"&&(f[g]=a[g])}else f=a;return ia(t),a=sl(e,t,n,f,l,i),g=ll(),e!==null&&!Qe?(ul(e,t,i),sn(e,t,i)):(pe&&g&&Ys(t),t.flags|=1,et(e,t,a,i),t.child)}function Sd(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!js(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,bd(e,t,l,a,i)):(e=Qi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Ll(e,i)){var f=l.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(f,a)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=en(l,a),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(Cr(l,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=l,Ll(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Cl(e,t,n,a,i)}function wd(e,t,n,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,t.child=null;return Ad(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xi(t,l!==null?l.cachePool:null),l!==null?Tf(t,l):al(),_f(t);else return a=t.lanes=536870912,Ad(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(Xi(t,l.cachePool),Tf(t,l),Mn(),t.memoizedState=null):(e!==null&&Xi(t,null),al(),Mn());return et(e,t,i,n),t.child}function Yr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ad(e,t,n,a,i){var l=Js();return l=l===null?null:{parent:Ge._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Xi(t,null),al(),_f(t),e!==null&&qa(e,t,a,!0),t.childLanes=i,null}function uo(e,t){return t=fo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ed(e,t,n){return ua(t,e.child,null,n),e=uo(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function ey(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(a.mode==="hidden")return e=uo(t,a),t.lanes=536870912,Yr(null,e);if(il(t),(e=Me)?(e=Nh(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Qt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=of(e),n.return=t,t.child=n,We=t,Me=null)):e=null,e===null)throw Tn(t);return t.lanes=536870912,null}return uo(t,a)}var l=e.memoizedState;if(l!==null){var f=l.dehydrated;if(il(t),i)if(t.flags&256)t.flags&=-257,t=Ed(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||qa(e,t,n,!1),i=(n&e.childLanes)!==0,Qe||i){if(a=xe,a!==null&&(f=dc(a,n),f!==0&&f!==l.retryLane))throw l.retryLane=f,ta(e,f),mt(a,e,f),Rl;wo(),t=Ed(e,t,n)}else e=l.treeContext,Me=zt(f.nextSibling),We=t,pe=!0,En=null,Dt=!1,e!==null&&uf(t,e),t=uo(t,a),t.flags|=4096;return t}return e=en(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function co(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cl(e,t,n,a,i){return ia(t),n=sl(e,t,n,a,void 0,i),a=ll(),e!==null&&!Qe?(ul(e,t,i),sn(e,t,i)):(pe&&a&&Ys(t),t.flags|=1,et(e,t,n,i),t.child)}function Td(e,t,n,a,i,l){return ia(t),t.updateQueue=null,n=Cf(t,a,n,i),Rf(e),a=ll(),e!==null&&!Qe?(ul(e,t,l),sn(e,t,l)):(pe&&a&&Ys(t),t.flags|=1,et(e,t,n,l),t.child)}function _d(e,t,n,a,i){if(ia(t),t.stateNode===null){var l=Ua,f=n.contextType;typeof f=="object"&&f!==null&&(l=$e(f)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Tl,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},$s(t),f=n.contextType,l.context=typeof f=="object"&&f!==null?$e(f):Ua,l.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(El(t,n,f,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(f=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),f!==l.state&&Tl.enqueueReplaceState(l,l.state,null),Br(t,a,l,i),Ur(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var g=t.memoizedProps,w=fa(n,g);l.props=w;var O=l.context,N=n.contextType;f=Ua,typeof N=="object"&&N!==null&&(f=$e(N));var H=n.getDerivedStateFromProps;N=typeof H=="function"||typeof l.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(g||O!==f)&&fd(t,l,a,f),Rn=!1;var M=t.memoizedState;l.state=M,Br(t,a,l,i),Ur(),O=t.memoizedState,g||M!==O||Rn?(typeof H=="function"&&(El(t,n,H,a),O=t.memoizedState),(w=Rn||cd(t,n,w,a,M,O,f))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),l.props=a,l.state=O,l.context=f,a=w):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,el(e,t),f=t.memoizedProps,N=fa(n,f),l.props=N,H=t.pendingProps,M=l.context,O=n.contextType,w=Ua,typeof O=="object"&&O!==null&&(w=$e(O)),g=n.getDerivedStateFromProps,(O=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f!==H||M!==w)&&fd(t,l,a,w),Rn=!1,M=t.memoizedState,l.state=M,Br(t,a,l,i),Ur();var k=t.memoizedState;f!==H||M!==k||Rn||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof g=="function"&&(El(t,n,g,a),k=t.memoizedState),(N=Rn||cd(t,n,N,a,M,k,w)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(O||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,k,w),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,k,w)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),l.props=a,l.state=k,l.context=w,a=N):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,co(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=ua(t,e.child,null,i),t.child=ua(t,null,n,i)):et(e,t,n,i),t.memoizedState=l.state,e=t.child):e=sn(e,t,i),e}function Rd(e,t,n,a){return aa(),t.flags|=256,et(e,t,n,a),t.child}var xl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ol(e){return{baseLanes:e,cachePool:pf()}}function Ml(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Cd(e,t,n){var a=t.pendingProps,i=!1,l=(t.flags&128)!==0,f;if((f=l)||(f=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(i?On(t):Mn(),(e=Me)?(e=Nh(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Qt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=of(e),n.return=t,t.child=n,We=t,Me=null)):e=null,e===null)throw Tn(t);return du(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,i?(Mn(),i=t.mode,g=fo({mode:"hidden",children:g},i),a=na(a,i,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=Ol(n),a.childLanes=Ml(e,f,n),t.memoizedState=xl,Yr(null,a)):(On(t),Dl(t,g))}var w=e.memoizedState;if(w!==null&&(g=w.dehydrated,g!==null)){if(l)t.flags&256?(On(t),t.flags&=-257,t=kl(e,t,n)):t.memoizedState!==null?(Mn(),t.child=e.child,t.flags|=128,t=null):(Mn(),g=a.fallback,i=t.mode,a=fo({mode:"visible",children:a.children},i),g=na(g,i,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,ua(t,e.child,null,n),a=t.child,a.memoizedState=Ol(n),a.childLanes=Ml(e,f,n),t.memoizedState=xl,t=Yr(null,a));else if(On(t),du(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var O=f.dgst;f=O,a=Error(u(419)),a.stack="",a.digest=f,Mr({value:a,source:null,stack:null}),t=kl(e,t,n)}else if(Qe||qa(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=xe,f!==null&&(a=dc(f,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,ta(e,a),mt(f,e,a),Rl;fu(g)||wo(),t=kl(e,t,n)}else fu(g)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Me=zt(g.nextSibling),We=t,pe=!0,En=null,Dt=!1,e!==null&&uf(t,e),t=Dl(t,a.children),t.flags|=4096);return t}return i?(Mn(),g=a.fallback,i=t.mode,w=e.child,O=w.sibling,a=en(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,O!==null?g=en(O,g):(g=na(g,i,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,Yr(null,a),a=t.child,g=e.child.memoizedState,g===null?g=Ol(n):(i=g.cachePool,i!==null?(w=Ge._currentValue,i=i.parent!==w?{parent:w,pool:w}:i):i=pf(),g={baseLanes:g.baseLanes|n,cachePool:i}),a.memoizedState=g,a.childLanes=Ml(e,f,n),t.memoizedState=xl,Yr(e.child,a)):(On(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Dl(e,t){return t=fo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fo(e,t){return e=St(22,e,null,t),e.lanes=0,e}function kl(e,t,n){return ua(t,e.child,null,n),e=Dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Xs(e.return,t,n)}function zl(e,t,n,a,i,l){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:l}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=i,f.treeForkCount=l)}function Od(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var f=je.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,I(je,f),et(e,t,a,n),a=pe?Or:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,n,t);else if(e.tag===19)xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zl(t,!1,i,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zl(t,!0,n,null,l,a);break;case"together":zl(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ll(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function ty(e,t,n){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),_n(t,Ge,e.memoizedState.cache),aa();break;case 27:case 5:Kt(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:_n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,il(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Cd(e,t,n):(On(t),e=sn(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(qa(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Od(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(je,je.current),a)break;return null;case 22:return t.lanes=0,wd(e,t,n,t.pendingProps);case 24:_n(t,Ge,e.memoizedState.cache)}return sn(e,t,n)}function Md(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ll(e,n)&&(t.flags&128)===0)return Qe=!1,ty(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,pe&&(t.flags&1048576)!==0&&lf(t,Or,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=sa(t.elementType),t.type=e,typeof e=="function")js(e)?(a=fa(e,a),t.tag=1,t=_d(null,t,e,a,n)):(t.tag=0,t=Cl(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===G){t.tag=11,t=vd(null,t,e,a,n);break e}else if(i===j){t.tag=14,t=Sd(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(u(306,t,""))}}return t;case 0:return Cl(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=fa(a,t.pendingProps),_d(e,t,a,i,n);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var l=t.memoizedState;i=l.element,el(e,t),Br(t,a,null,n);var f=t.memoizedState;if(a=f.cache,_n(t,Ge,a),a!==l.cache&&Ks(t,[Ge],n,!0),Ur(),a=f.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Rd(e,t,a,n);break e}else if(a!==i){i=xt(Error(u(424)),t),Mr(i),t=Rd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=zt(e.firstChild),We=t,pe=!0,En=null,Dt=!0,n=wf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(aa(),a===i){t=sn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return co(e,t),e===null?(n=Gh(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,a=xo(ce.current).createElement(n),a[Je]=t,a[lt]=e,tt(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=Gh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kt(t),e===null&&pe&&(a=t.stateNode=Hh(t.type,t.pendingProps,ce.current),We=t,Dt=!0,i=Me,Hn(t.type)?(hu=i,Me=zt(a.firstChild)):Me=i),et(e,t,t.pendingProps.children,n),co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((i=a=Me)&&(a=Dy(a,t.type,t.pendingProps,Dt),a!==null?(t.stateNode=a,We=t,Me=zt(a.firstChild),Dt=!1,i=!0):i=!1),i||Tn(t)),Kt(t),i=t.type,l=t.pendingProps,f=e!==null?e.memoizedProps:null,a=l.children,lu(i,l)?a=null:f!==null&&lu(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=sl(e,t,Ig,null,null,n),ai._currentValue=i),co(e,t),et(e,t,a,n),t.child;case 6:return e===null&&pe&&((e=n=Me)&&(n=ky(n,t.pendingProps,Dt),n!==null?(t.stateNode=n,We=t,Me=null,e=!0):e=!1),e||Tn(t)),null;case 13:return Cd(e,t,n);case 4:return He(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ua(t,null,a,n):et(e,t,a,n),t.child;case 11:return vd(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,_n(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,ia(t),i=$e(i),a=a(i),t.flags|=1,et(e,t,a,n),t.child;case 14:return Sd(e,t,t.type,t.pendingProps,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 19:return Od(e,t,n);case 31:return ey(e,t,n);case 22:return wd(e,t,n,t.pendingProps);case 24:return ia(t),a=$e(Ge),e===null?(i=Js(),i===null&&(i=xe,l=Fs(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),t.memoizedState={parent:a,cache:i},$s(t),_n(t,Ge,i)):((e.lanes&n)!==0&&(el(e,t),Br(t,null,null,n),Ur()),i=e.memoizedState,l=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),_n(t,Ge,a)):(a=l.cache,_n(t,Ge,a),a!==i.cache&&Ks(t,[Ge],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ln(e){e.flags|=4}function Nl(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ah())e.flags|=8192;else throw la=Fi,Ws}else e.flags&=-16777217}function Dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ih(t))if(ah())e.flags|=8192;else throw la=Fi,Ws}function ho(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uc():536870912,e.lanes|=t,Wa|=t)}function Qr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ny(e,t,n){var a=t.pendingProps;switch(Qs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),an(Ge),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ja(t)?ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vs())),De(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(ln(t),l!==null?(De(t),Dd(t,l)):(De(t),Nl(t,i,null,a,n))):l?l!==e.memoizedState?(ln(t),De(t),Dd(t,l)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&ln(t),De(t),Nl(t,i,e,a,n)),null;case 27:if(Ft(t),n=ce.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}e=X.current,ja(t)?cf(t):(e=Hh(i,a,n),t.stateNode=e,ln(t))}return De(t),null;case 5:if(Ft(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}if(l=X.current,ja(t))cf(t);else{var f=xo(ce.current);switch(l){case 1:l=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=f.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?f.createElement(i,{is:a.is}):f.createElement(i)}}l[Je]=t,l[lt]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)l.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=l;e:switch(tt(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ln(t)}}return De(t),Nl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ce.current,ja(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=We,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ch(e.nodeValue,n)),e||Tn(t,!0)}else e=xo(e).createTextNode(a),e[Je]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ja(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Je]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Vs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ja(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Je]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Vs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ho(t,t.updateQueue),De(t),null);case 4:return Ce(),e===null&&au(t.stateNode.containerInfo),De(t),null;case 10:return an(t.type),De(t),null;case 19:if(B(je),a=t.memoizedState,a===null)return De(t),null;if(i=(t.flags&128)!==0,l=a.rendering,l===null)if(i)Qr(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=$i(e),l!==null){for(t.flags|=128,Qr(a,!1),e=l.updateQueue,t.updateQueue=e,ho(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rf(n,e),n=n.sibling;return I(je,je.current&1|2),pe&&tn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>vo&&(t.flags|=128,i=!0,Qr(a,!1),t.lanes=4194304)}else{if(!i)if(e=$i(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ho(t,e),Qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!pe)return De(t),null}else 2*nt()-a.renderingStartTime>vo&&n!==536870912&&(t.flags|=128,i=!0,Qr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,n=je.current,I(je,i?n&1|2:n&1),pe&&tn(t,a.treeForkCount),e):(De(t),null);case 22:case 23:return wt(t),rl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&ho(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&B(oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),an(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ay(e,t){switch(Qs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(Ge),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(u(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(je),null;case 4:return Ce(),null;case 10:return an(t.type),null;case 22:case 23:return wt(t),rl(),e!==null&&B(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return an(Ge),null;case 25:return null;default:return null}}function kd(e,t){switch(Qs(t),t.tag){case 3:an(Ge),Ce();break;case 26:case 27:case 5:Ft(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:B(je);break;case 10:an(t.type);break;case 22:case 23:wt(t),rl(),e!==null&&B(oa);break;case 24:an(Ge)}}function Pr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var l=n.create,f=n.inst;a=l(),f.destroy=a}n=n.next}while(n!==i)}}catch(g){Ee(t,t.return,g)}}function Dn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var f=a.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,i=t;var w=n,O=g;try{O()}catch(N){Ee(i,w,N)}}}a=a.next}while(a!==l)}}catch(N){Ee(t,t.return,N)}}function zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ef(t,n)}catch(a){Ee(e,e.return,a)}}}function Ld(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function Vr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Ee(e,t,i)}}function Vt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ee(e,t,i)}else n.current=null}function Nd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Ee(e,e.return,i)}}function Ul(e,t,n){try{var a=e.stateNode;_y(a,e.type,n,t),a[lt]=t}catch(i){Ee(e,e.return,i)}}function Ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hn(e.type)||e.tag===4}function Bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wt));else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function mo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}function Bd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,a,n),t[Je]=e,t[lt]=n}catch(l){Ee(e,e.return,l)}}var un=!1,Pe=!1,jl=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function ry(e,t){if(e=e.containerInfo,ou=No,e=Fc(e),ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var f=0,g=-1,w=-1,O=0,N=0,H=e,M=null;t:for(;;){for(var k;H!==n||i!==0&&H.nodeType!==3||(g=f+i),H!==l||a!==0&&H.nodeType!==3||(w=f+a),H.nodeType===3&&(f+=H.nodeValue.length),(k=H.firstChild)!==null;)M=H,H=k;for(;;){if(H===e)break t;if(M===n&&++O===i&&(g=f),M===l&&++N===a&&(w=f),(k=H.nextSibling)!==null)break;H=M,M=H.parentNode}H=k}n=g===-1||w===-1?null:{start:g,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},No=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var Z=fa(n.type,i);e=a.getSnapshotBeforeUpdate(Z,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ee(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function jd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),a&4&&Pr(5,n);break;case 1:if(fn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var i=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&zd(n),a&512&&Vr(n,n.return);break;case 3:if(fn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ef(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&Bd(n);case 26:case 5:fn(e,n),t===null&&a&4&&Nd(n),a&512&&Vr(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),a&4&&Yd(e,n);break;case 13:fn(e,n),a&4&&Qd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hy.bind(null,n),zy(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Pe,i=un;var l=Pe;un=a,(Pe=t)&&!l?dn(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),un=i,Pe=l}break;case 30:break;default:fn(e,n)}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ps(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,ct=!1;function cn(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(pr,n)}catch{}switch(n.tag){case 26:Pe||Vt(n,t),cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||Vt(n,t);var a=ze,i=ct;Hn(n.type)&&(ze=n.stateNode,ct=!1),cn(e,t,n),ei(n.stateNode),ze=a,ct=i;break;case 5:Pe||Vt(n,t);case 6:if(a=ze,i=ct,ze=null,cn(e,t,n),ze=a,ct=i,ze!==null)if(ct)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(l){Ee(n,t,l)}else try{ze.removeChild(n.stateNode)}catch(l){Ee(n,t,l)}break;case 18:ze!==null&&(ct?(e=ze,zh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),or(e)):zh(ze,n.stateNode));break;case 4:a=ze,i=ct,ze=n.stateNode.containerInfo,ct=!0,cn(e,t,n),ze=a,ct=i;break;case 0:case 11:case 14:case 15:Dn(2,n,t),Pe||Dn(4,n,t),cn(e,t,n);break;case 1:Pe||(Vt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ld(n,t,a)),cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:Pe=(a=Pe)||n.memoizedState!==null,cn(e,t,n),Pe=a;break;default:cn(e,t,n)}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(n){Ee(t,t.return,n)}}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(n){Ee(t,t.return,n)}}function iy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hd),t;default:throw Error(u(435,e.tag))}}function po(e,t){var n=iy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=my.bind(null,e,a);a.then(i,i)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(Hn(g.type)){ze=g.stateNode,ct=!1;break e}break;case 5:ze=g.stateNode,ct=!1;break e;case 3:case 4:ze=g.stateNode.containerInfo,ct=!0;break e}g=g.return}if(ze===null)throw Error(u(160));Gd(l,f,i),ze=null,ct=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}var Ht=null;function Pd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),a&4&&(Dn(3,e,e.return),Pr(3,e),Dn(5,e,e.return));break;case 1:ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ht;if(ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[vr]||l[Je]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),tt(l,a,n),l[Je]=e,Xe(l),a=l;break e;case"link":var f=Ph("link","href",i).get(a+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(l=f[g],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}l=i.createElement(a),tt(l,a,n),i.head.appendChild(l);break;case"meta":if(f=Ph("meta","content",i).get(a+(n.content||""))){for(g=0;g<f.length;g++)if(l=f[g],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}l=i.createElement(a),tt(l,a,n),i.head.appendChild(l);break;default:throw Error(u(468,a))}l[Je]=e,Xe(l),a=l}e.stateNode=a}else Vh(i,e.type,e.stateNode);else e.stateNode=Qh(i,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?Vh(i,e.type,e.stateNode):Qh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ul(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),n!==null&&a&4&&Ul(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),dt(e),a&512&&(Pe||n===null||Vt(n,n.return)),e.flags&32){i=e.stateNode;try{Oa(i,"")}catch(Z){Ee(e,e.return,Z)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ul(e,i,n!==null?n.memoizedProps:i)),a&1024&&(jl=!0);break;case 6:if(ft(t,e),dt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Z){Ee(e,e.return,Z)}}break;case 3:if(Do=null,i=Ht,Ht=Oo(t.containerInfo),ft(t,e),Ht=i,dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(Z){Ee(e,e.return,Z)}jl&&(jl=!1,Vd(e));break;case 4:a=Ht,Ht=Oo(e.stateNode.containerInfo),ft(t,e),dt(e),Ht=a;break;case 12:ft(t,e),dt(e);break;case 31:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,po(e,a)));break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(yo=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,po(e,a)));break;case 22:i=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,O=un,N=Pe;if(un=O||i,Pe=N||w,ft(t,e),Pe=N,un=O,dt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||w||un||Pe||da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(l=w.stateNode,i)f=l.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=w.stateNode;var H=w.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null;g.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Z){Ee(w,w.return,Z)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(Z){Ee(w,w.return,Z)}}}else if(t.tag===18){if(n===null){w=t;try{var k=w.stateNode;i?Lh(k,!0):Lh(w.stateNode,!1)}catch(Z){Ee(w,w.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,po(e,n))));break;case 19:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,po(e,a)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ud(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,l=Bl(e);mo(e,l,i);break;case 5:var f=n.stateNode;n.flags&32&&(Oa(f,""),n.flags&=-33);var g=Bl(e);mo(e,g,f);break;case 3:case 4:var w=n.stateNode.containerInfo,O=Bl(e);Hl(e,O,w);break;default:throw Error(u(161))}}catch(N){Ee(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jd(e,t.alternate,t),t=t.sibling}function da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Dn(4,t,t.return),da(t);break;case 1:Vt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ld(t,t.return,n),da(t);break;case 27:ei(t.stateNode);case 26:case 5:Vt(t,t.return),da(t);break;case 22:t.memoizedState===null&&da(t);break;case 30:da(t);break;default:da(t)}e=e.sibling}}function dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,l=t,f=l.flags;switch(l.tag){case 0:case 11:case 15:dn(i,l,n),Pr(4,l);break;case 1:if(dn(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Ee(a,a.return,O)}if(a=l,i=a.updateQueue,i!==null){var g=a.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)Af(w[i],g)}catch(O){Ee(a,a.return,O)}}n&&f&64&&zd(l),Vr(l,l.return);break;case 27:Bd(l);case 26:case 5:dn(i,l,n),n&&a===null&&f&4&&Nd(l),Vr(l,l.return);break;case 12:dn(i,l,n);break;case 31:dn(i,l,n),n&&f&4&&Yd(i,l);break;case 13:dn(i,l,n),n&&f&4&&Qd(i,l);break;case 22:l.memoizedState===null&&dn(i,l,n),Vr(l,l.return);break;case 30:break;default:dn(i,l,n)}t=t.sibling}}function ql(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Dr(n))}function Gl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dr(e))}function jt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,n,a),t=t.sibling}function Id(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,n,a),i&2048&&Pr(9,t);break;case 1:jt(e,t,n,a);break;case 3:jt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dr(e)));break;case 12:if(i&2048){jt(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,f=l.id,g=l.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ee(t,t.return,w)}}else jt(e,t,n,a);break;case 31:jt(e,t,n,a);break;case 13:jt(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,f=t.alternate,t.memoizedState!==null?l._visibility&2?jt(e,t,n,a):Ir(e,t):l._visibility&2?jt(e,t,n,a):(l._visibility|=2,Fa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ql(f,t);break;case 24:jt(e,t,n,a),i&2048&&Gl(t.alternate,t);break;default:jt(e,t,n,a)}}function Fa(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,f=t,g=n,w=a,O=f.flags;switch(f.tag){case 0:case 11:case 15:Fa(l,f,g,w,i),Pr(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?Fa(l,f,g,w,i):Ir(l,f):(N._visibility|=2,Fa(l,f,g,w,i)),i&&O&2048&&ql(f.alternate,f);break;case 24:Fa(l,f,g,w,i),i&&O&2048&&Gl(f.alternate,f);break;default:Fa(l,f,g,w,i)}t=t.sibling}}function Ir(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Ir(n,a),i&2048&&ql(a.alternate,a);break;case 24:Ir(n,a),i&2048&&Gl(a.alternate,a);break;default:Ir(n,a)}t=t.sibling}}var Xr=8192;function Za(e,t,n){if(e.subtreeFlags&Xr)for(e=e.child;e!==null;)Xd(e,t,n),e=e.sibling}function Xd(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Xr&&e.memoizedState!==null&&Vy(n,Ht,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var a=Ht;Ht=Oo(e.stateNode.containerInfo),Za(e,t,n),Ht=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xr,Xr=16777216,Za(e,t,n),Xr=a):Za(e,t,n));break;default:Za(e,t,n)}}function Kd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,Zd(a,e)}Kd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 0:case 11:case 15:Kr(e),e.flags&2048&&Dn(9,e,e.return);break;case 3:Kr(e);break;case 12:Kr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,go(e)):Kr(e);break;default:Kr(e)}}function go(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,Zd(a,e)}Kd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dn(8,t,t.return),go(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,go(t));break;default:go(t)}e=e.sibling}}function Zd(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:Dn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Dr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ke=a;else e:for(n=e;Ke!==null;){a=Ke;var i=a.sibling,l=a.return;if(qd(a),a===n){Ke=null;break e}if(i!==null){i.return=l,Ke=i;break e}Ke=l}}}var oy={getCacheForType:function(e){var t=$e(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $e(Ge).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,be=0,xe=null,fe=null,he=0,Ae=0,At=null,kn=!1,Ja=!1,Yl=!1,hn=0,Ue=0,zn=0,ha=0,Ql=0,Et=0,Wa=0,Fr=null,ht=null,Pl=!1,yo=0,Jd=0,vo=1/0,So=null,Ln=null,Ve=0,Nn=null,$a=null,mn=0,Vl=0,Il=null,Wd=null,Zr=0,Xl=null;function Tt(){return(be&2)!==0&&he!==0?he&-he:L.T!==null?$l():hc()}function $d(){if(Et===0)if((he&536870912)===0||pe){var e=Ri;Ri<<=1,(Ri&3932160)===0&&(Ri=262144),Et=e}else Et=536870912;return e=bt.current,e!==null&&(e.flags|=32),Et}function mt(e,t,n){(e===xe&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(er(e,0),Un(e,he,Et,!1)),yr(e,n),((be&2)===0||e!==xe)&&(e===xe&&((be&2)===0&&(ha|=n),Ue===4&&Un(e,he,Et,!1)),It(e))}function eh(e,t,n){if((be&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gr(e,t),i=a?cy(e,t):Fl(e,t,!0),l=a;do{if(i===0){Ja&&!a&&Un(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!ly(n)){i=Fl(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;i=Fr;var w=g.current.memoizedState.isDehydrated;if(w&&(er(g,f).flags|=256),f=Fl(g,f,!1),f!==2){if(Yl&&!w){g.errorRecoveryDisabledLanes|=l,ha|=l,i=4;break e}l=ht,ht=i,l!==null&&(ht===null?ht=l:ht.push.apply(ht,l))}i=f}if(l=!1,i!==2)continue}}if(i===1){er(e,0),Un(e,t,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Un(a,t,Et,!kn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=yo+300-nt(),10<i)){if(Un(a,t,Et,!kn),xi(a,0,!0)!==0)break e;mn=t,a.timeoutHandle=Dh(th.bind(null,a,n,ht,So,Pl,t,Et,ha,Wa,kn,l,"Throttled",-0,0),i);break e}th(a,n,ht,So,Pl,t,Et,ha,Wa,kn,l,null,-0,0)}}break}while(!0);It(e)}function th(e,t,n,a,i,l,f,g,w,O,N,H,M,k){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Xd(t,l,H);var Z=(l&62914560)===l?yo-nt():(l&4194048)===l?Jd-nt():0;if(Z=Iy(H,Z),Z!==null){mn=l,e.cancelPendingCommit=Z(uh.bind(null,e,t,l,n,a,i,f,g,w,N,H,null,M,k)),Un(e,l,f,!O);return}}uh(e,t,l,n,a,i,f,g,w)}function ly(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!vt(l(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t,n,a){t&=~Ql,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var l=31-yt(i),f=1<<l;a[l]=-1,i&=~f}n!==0&&cc(e,n,t)}function bo(){return(be&6)===0?(Jr(0),!1):!0}function Kl(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,nn=ra=null,cl(e),Pa=null,zr=0,e=fe;for(;e!==null;)kd(e.alternate,e),e=e.return;fe=null}}function er(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mn=0,Kl(),xe=e,fe=n=en(e.current,null),he=t,Ae=0,At=null,kn=!1,Ja=gr(e,t),Yl=!1,Wa=Et=Ql=ha=zn=Ue=0,ht=Fr=null,Pl=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-yt(a),l=1<<i;t|=e[i],a&=~l}return hn=t,qi(),n}function nh(e,t){le=null,L.H=Gr,t===Qa||t===Ki?(t=vf(),Ae=3):t===Ws?(t=vf(),Ae=4):Ae=t===Rl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,fe===null&&(Ue=1,lo(e,xt(t,e.current)))}function ah(){var e=bt.current;return e===null?!0:(he&4194048)===he?kt===null:(he&62914560)===he||(he&536870912)!==0?e===kt:!1}function rh(){var e=L.H;return L.H=Gr,e===null?Gr:e}function ih(){var e=L.A;return L.A=oy,e}function wo(){Ue=4,kn||(he&4194048)!==he&&bt.current!==null||(Ja=!0),(zn&134217727)===0&&(ha&134217727)===0||xe===null||Un(xe,he,Et,!1)}function Fl(e,t,n){var a=be;be|=2;var i=rh(),l=ih();(xe!==e||he!==t)&&(So=null,er(e,t)),t=!1;var f=Ue;e:do try{if(Ae!==0&&fe!==null){var g=fe,w=At;switch(Ae){case 8:Kl(),f=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var O=Ae;if(Ae=0,At=null,tr(e,g,w,O),n&&Ja){f=0;break e}break;default:O=Ae,Ae=0,At=null,tr(e,g,w,O)}}uy(),f=Ue;break}catch(N){nh(e,N)}while(!0);return t&&e.shellSuspendCounter++,nn=ra=null,be=a,L.H=i,L.A=l,fe===null&&(xe=null,he=0,qi()),f}function uy(){for(;fe!==null;)oh(fe)}function cy(e,t){var n=be;be|=2;var a=rh(),i=ih();xe!==e||he!==t?(So=null,vo=nt()+500,er(e,t)):Ja=gr(e,t);e:do try{if(Ae!==0&&fe!==null){t=fe;var l=At;t:switch(Ae){case 1:Ae=0,At=null,tr(e,t,l,1);break;case 2:case 9:if(gf(l)){Ae=0,At=null,sh(t);break}t=function(){Ae!==2&&Ae!==9||xe!==e||(Ae=7),It(e)},l.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:gf(l)?(Ae=0,At=null,sh(t)):(Ae=0,At=null,tr(e,t,l,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var g=fe;if(f?Ih(f):g.stateNode.complete){Ae=0,At=null;var w=g.sibling;if(w!==null)fe=w;else{var O=g.return;O!==null?(fe=O,Ao(O)):fe=null}break t}}Ae=0,At=null,tr(e,t,l,5);break;case 6:Ae=0,At=null,tr(e,t,l,6);break;case 8:Kl(),Ue=6;break e;default:throw Error(u(462))}}fy();break}catch(N){nh(e,N)}while(!0);return nn=ra=null,L.H=a,L.A=i,be=n,fe!==null?0:(xe=null,he=0,qi(),Ue)}function fy(){for(;fe!==null&&!Ti();)oh(fe)}function oh(e){var t=Md(e.alternate,e,hn);e.memoizedProps=e.pendingProps,t===null?Ao(e):fe=t}function sh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Td(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Td(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:cl(t);default:kd(n,t),t=fe=rf(t,hn),t=Md(n,t,hn)}e.memoizedProps=e.pendingProps,t===null?Ao(e):fe=t}function tr(e,t,n,a){nn=ra=null,cl(t),Pa=null,zr=0;var i=t.return;try{if($g(e,i,t,n,he)){Ue=1,lo(e,xt(n,e.current)),fe=null;return}}catch(l){if(i!==null)throw fe=i,l;Ue=1,lo(e,xt(n,e.current)),fe=null;return}t.flags&32768?(pe||a===1?e=!0:Ja||(he&536870912)!==0?e=!1:(kn=e=!0,(a===2||a===9||a===3||a===6)&&(a=bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),lh(t,e)):Ao(t)}function Ao(e){var t=e;do{if((t.flags&32768)!==0){lh(t,kn);return}e=t.return;var n=ny(t.alternate,t,hn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ue===0&&(Ue=5)}function lh(e,t){do{var n=ay(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ue=6,fe=null}function uh(e,t,n,a,i,l,f,g,w){e.cancelPendingCommit=null;do Eo();while(Ve!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(l=t.lanes|t.childLanes,l|=Bs,Pp(e,n,l,f,g,w),e===xe&&(fe=xe=null,he=0),$a=t,Nn=e,mn=n,Vl=l,Il=i,Wd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(Aa,function(){return mh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,i=P.p,P.p=2,f=be,be|=4;try{ry(e,t,n)}finally{be=f,P.p=i,L.T=a}}Ve=1,ch(),fh(),dh()}}function ch(){if(Ve===1){Ve=0;var e=Nn,t=$a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var a=P.p;P.p=2;var i=be;be|=4;try{Pd(t,e);var l=su,f=Fc(e.containerInfo),g=l.focusedElem,w=l.selectionRange;if(f!==g&&g&&g.ownerDocument&&Kc(g.ownerDocument.documentElement,g)){if(w!==null&&ks(g)){var O=w.start,N=w.end;if(N===void 0&&(N=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(N,g.value.length);else{var H=g.ownerDocument||document,M=H&&H.defaultView||window;if(M.getSelection){var k=M.getSelection(),Z=g.textContent.length,ie=Math.min(w.start,Z),Re=w.end===void 0?ie:Math.min(w.end,Z);!k.extend&&ie>Re&&(f=Re,Re=ie,ie=f);var R=Xc(g,ie),E=Xc(g,Re);if(R&&E&&(k.rangeCount!==1||k.anchorNode!==R.node||k.anchorOffset!==R.offset||k.focusNode!==E.node||k.focusOffset!==E.offset)){var x=H.createRange();x.setStart(R.node,R.offset),k.removeAllRanges(),ie>Re?(k.addRange(x),k.extend(E.node,E.offset)):(x.setEnd(E.node,E.offset),k.addRange(x))}}}}for(H=[],k=g;k=k.parentNode;)k.nodeType===1&&H.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<H.length;g++){var U=H[g];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}No=!!ou,su=ou=null}finally{be=i,P.p=a,L.T=n}}e.current=t,Ve=2}}function fh(){if(Ve===2){Ve=0;var e=Nn,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=P.p;P.p=2;var i=be;be|=4;try{jd(e,t.alternate,t)}finally{be=i,P.p=a,L.T=n}}Ve=3}}function dh(){if(Ve===4||Ve===3){Ve=0,cs();var e=Nn,t=$a,n=mn,a=Wd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,$a=Nn=null,hh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ln=null),hs(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(pr,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=L.T,i=P.p,P.p=2,L.T=null;try{for(var l=e.onRecoverableError,f=0;f<a.length;f++){var g=a[f];l(g.value,{componentStack:g.stack})}}finally{L.T=t,P.p=i}}(mn&3)!==0&&Eo(),It(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Xl?Zr++:(Zr=0,Xl=e):Zr=0,Jr(0)}}function hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Dr(t)))}function Eo(){return ch(),fh(),dh(),mh()}function mh(){if(Ve!==5)return!1;var e=Nn,t=Vl;Vl=0;var n=hs(mn),a=L.T,i=P.p;try{P.p=32>n?32:n,L.T=null,n=Il,Il=null;var l=Nn,f=mn;if(Ve=0,$a=Nn=null,mn=0,(be&6)!==0)throw Error(u(331));var g=be;if(be|=4,Fd(l.current),Id(l,l.current,f,n),be=g,Jr(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(pr,l)}catch{}return!0}finally{P.p=i,L.T=a,hh(e,t)}}function ph(e,t,n){t=xt(n,t),t=_l(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(yr(e,2),It(e))}function Ee(e,t,n){if(e.tag===3)ph(e,e,n);else for(;t!==null;){if(t.tag===3){ph(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){e=xt(n,e),n=gd(2),a=xn(t,n,2),a!==null&&(yd(n,a,t,e),yr(a,2),It(a));break}}t=t.return}}function Zl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new sy;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Yl=!0,i.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function dy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(he&n)===n&&(Ue===4||Ue===3&&(he&62914560)===he&&300>nt()-yo?(be&2)===0&&er(e,0):Ql|=n,Wa===he&&(Wa=0)),It(e)}function gh(e,t){t===0&&(t=uc()),e=ta(e,t),e!==null&&(yr(e,t),It(e))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gh(e,n)}function my(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),gh(e,n)}function py(e,t){return Ut(e,t)}var To=null,nr=null,Jl=!1,_o=!1,Wl=!1,Bn=0;function It(e){e!==nr&&e.next===null&&(nr===null?To=nr=e:nr=nr.next=e),_o=!0,Jl||(Jl=!0,yy())}function Jr(e,t){if(!Wl&&_o){Wl=!0;do for(var n=!1,a=To;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var f=a.suspendedLanes,g=a.pingedLanes;l=(1<<31-yt(42|e)+1)-1,l&=i&~(f&~g),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,bh(a,l))}else l=he,l=xi(a,a===xe?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||gr(a,l)||(n=!0,bh(a,l));a=a.next}while(n);Wl=!1}}function gy(){yh()}function yh(){_o=Jl=!1;var e=0;Bn!==0&&Cy()&&(e=Bn);for(var t=nt(),n=null,a=To;a!==null;){var i=a.next,l=vh(a,t);l===0?(a.next=null,n===null?To=i:n.next=i,i===null&&(nr=n)):(n=a,(e!==0||(l&3)!==0)&&(_o=!0)),a=i}Ve!==0&&Ve!==5||Jr(e),Bn!==0&&(Bn=0)}function vh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var f=31-yt(l),g=1<<f,w=i[f];w===-1?((g&n)===0||(g&a)!==0)&&(i[f]=Qp(g,t)):w<=t&&(e.expiredLanes|=g),l&=~g}if(t=xe,n=he,n=xi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&mr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&mr(a),hs(n)){case 2:case 8:n=Yt;break;case 32:n=Aa;break;case 268435456:n=lc;break;default:n=Aa}return a=Sh.bind(null,e),n=Ut(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&mr(a),e.callbackPriority=2,e.callbackNode=null,2}function Sh(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Eo()&&e.callbackNode!==n)return null;var a=he;return a=xi(e,e===xe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(eh(e,a,t),vh(e,nt()),e.callbackNode!=null&&e.callbackNode===n?Sh.bind(null,e):null)}function bh(e,t){if(Eo())return null;eh(e,t,!0)}function yy(){Oy(function(){(be&6)!==0?Ut(Ze,gy):yh()})}function $l(){if(Bn===0){var e=Ga;e===0&&(e=_i,_i<<=1,(_i&261888)===0&&(_i=256)),Bn=e}return Bn}function wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ki(""+e)}function Ah(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vy(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var l=wh((i[lt]||null).action),f=a.submitter;f&&(t=(t=f[lt]||null)?wh(t.formAction):f.getAttribute("formAction"),t!==null&&(l=t,f=null));var g=new Ui("action","action",null,a,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bn!==0){var w=f?Ah(i,f):new FormData(i);Sl(n,{pending:!0,data:w,method:i.method,action:l},null,w)}}else typeof l=="function"&&(g.preventDefault(),w=f?Ah(i,f):new FormData(i),Sl(n,{pending:!0,data:w,method:i.method,action:l},l,w))},currentTarget:i}]})}}for(var eu=0;eu<Us.length;eu++){var tu=Us[eu],Sy=tu.toLowerCase(),by=tu[0].toUpperCase()+tu.slice(1);Bt(Sy,"on"+by)}Bt(Wc,"onAnimationEnd"),Bt($c,"onAnimationIteration"),Bt(ef,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Ug,"onTransitionRun"),Bt(Bg,"onTransitionStart"),Bt(Hg,"onTransitionCancel"),Bt(tf,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wr));function Eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var f=a.length-1;0<=f;f--){var g=a[f],w=g.instance,O=g.currentTarget;if(g=g.listener,w!==l&&i.isPropagationStopped())break e;l=g,i.currentTarget=O;try{l(i)}catch(N){ji(N)}i.currentTarget=null,l=w}else for(f=0;f<a.length;f++){if(g=a[f],w=g.instance,O=g.currentTarget,g=g.listener,w!==l&&i.isPropagationStopped())break e;l=g,i.currentTarget=O;try{l(i)}catch(N){ji(N)}i.currentTarget=null,l=w}}}}function de(e,t){var n=t[ms];n===void 0&&(n=t[ms]=new Set);var a=e+"__bubble";n.has(a)||(Th(t,e,2,!1),n.add(a))}function nu(e,t,n){var a=0;t&&(a|=4),Th(n,e,a,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[Ro]){e[Ro]=!0,gc.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||nu(n,!1,e),nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,nu("selectionchange",!1,t))}}function Th(e,t,n,a){switch($h(t)){case 2:var i=Fy;break;case 8:i=Zy;break;default:i=vu}n=i.bind(null,t,n,e),i=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ru(e,t,n,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var g=a.stateNode.containerInfo;if(g===i)break;if(f===4)for(f=a.return;f!==null;){var w=f.tag;if((w===3||w===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;g!==null;){if(f=Ta(g),f===null)return;if(w=f.tag,w===5||w===6||w===26||w===27){a=l=f;continue e}g=g.parentNode}}a=a.return}xc(function(){var O=l,N=ws(n),H=[];e:{var M=nf.get(e);if(M!==void 0){var k=Ui,Z=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":k=mg;break;case"focusin":Z="focus",k=Cs;break;case"focusout":Z="blur",k=Cs;break;case"beforeblur":case"afterblur":k=Cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=yg;break;case Wc:case $c:case ef:k=ig;break;case tf:k=Sg;break;case"scroll":case"scrollend":k=eg;break;case"wheel":k=wg;break;case"copy":case"cut":case"paste":k=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=zc;break;case"toggle":case"beforetoggle":k=Eg}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),R=ie?M!==null?M+"Capture":null:M;ie=[];for(var E=O,x;E!==null;){var U=E;if(x=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||x===null||R===null||(U=br(E,R),U!=null&&ie.push($r(E,U,x))),Re)break;E=E.return}0<ie.length&&(M=new k(M,Z,null,n,N),H.push({event:M,listeners:ie}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",M&&n!==bs&&(Z=n.relatedTarget||n.fromElement)&&(Ta(Z)||Z[Ea]))break e;if((k||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,k?(Z=n.relatedTarget||n.toElement,k=O,Z=Z?Ta(Z):null,Z!==null&&(Re=d(Z),ie=Z.tag,Z!==Re||ie!==5&&ie!==27&&ie!==6)&&(Z=null)):(k=null,Z=O),k!==Z)){if(ie=Dc,U="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ie=zc,U="onPointerLeave",R="onPointerEnter",E="pointer"),Re=k==null?M:Sr(k),x=Z==null?M:Sr(Z),M=new ie(U,E+"leave",k,n,N),M.target=Re,M.relatedTarget=x,U=null,Ta(N)===O&&(ie=new ie(R,E+"enter",Z,n,N),ie.target=x,ie.relatedTarget=Re,U=ie),Re=U,k&&Z)t:{for(ie=Ay,R=k,E=Z,x=0,U=R;U;U=ie(U))x++;U=0;for(var te=E;te;te=ie(te))U++;for(;0<x-U;)R=ie(R),x--;for(;0<U-x;)E=ie(E),U--;for(;x--;){if(R===E||E!==null&&R===E.alternate){ie=R;break t}R=ie(R),E=ie(E)}ie=null}else ie=null;k!==null&&_h(H,M,k,ie,!1),Z!==null&&Re!==null&&_h(H,Re,Z,ie,!0)}}e:{if(M=O?Sr(O):window,k=M.nodeName&&M.nodeName.toLowerCase(),k==="select"||k==="input"&&M.type==="file")var ye=Gc;else if(jc(M))if(Yc)ye=zg;else{ye=Dg;var J=Mg}else k=M.nodeName,!k||k.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?O&&Ss(O.elementType)&&(ye=Gc):ye=kg;if(ye&&(ye=ye(e,O))){qc(H,ye,n,N);break e}J&&J(e,M,O),e==="focusout"&&O&&M.type==="number"&&O.memoizedProps.value!=null&&vs(M,"number",M.value)}switch(J=O?Sr(O):window,e){case"focusin":(jc(J)||J.contentEditable==="true")&&(za=J,zs=O,xr=null);break;case"focusout":xr=zs=za=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Zc(H,n,N);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":Zc(H,n,N)}var ue;if(Os)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else ka?Bc(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Lc&&n.locale!=="ko"&&(ka||me!=="onCompositionStart"?me==="onCompositionEnd"&&ka&&(ue=Oc()):(wn=N,Ts="value"in wn?wn.value:wn.textContent,ka=!0)),J=Co(O,me),0<J.length&&(me=new kc(me,e,null,n,N),H.push({event:me,listeners:J}),ue?me.data=ue:(ue=Hc(n),ue!==null&&(me.data=ue)))),(ue=_g?Rg(e,n):Cg(e,n))&&(me=Co(O,"onBeforeInput"),0<me.length&&(J=new kc("onBeforeInput","beforeinput",null,n,N),H.push({event:J,listeners:me}),J.data=ue)),vy(H,e,O,n,N)}Eh(H,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=br(e,n),i!=null&&a.unshift($r(e,i,l)),i=br(e,t),i!=null&&a.push($r(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _h(e,t,n,a,i){for(var l=t._reactName,f=[];n!==null&&n!==a;){var g=n,w=g.alternate,O=g.stateNode;if(g=g.tag,w!==null&&w===a)break;g!==5&&g!==26&&g!==27||O===null||(w=O,i?(O=br(n,l),O!=null&&f.unshift($r(n,O,w))):i||(O=br(n,l),O!=null&&f.push($r(n,O,w)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function Ch(e,t){return t=Rh(t),Rh(e)===t}function _e(e,t,n,a,i,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Oa(e,""+a);break;case"className":Mi(e,"class",a);break;case"tabIndex":Mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,n,a);break;case"style":Rc(e,a,l);break;case"data":if(t!=="object"){Mi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ki(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",i.name,i,null),_e(e,t,"formEncType",i.formEncType,i,null),_e(e,t,"formMethod",i.formMethod,i,null),_e(e,t,"formTarget",i.formTarget,i,null)):(_e(e,t,"encType",i.encType,i,null),_e(e,t,"method",i.method,i,null),_e(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ki(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ki(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wp.get(n)||n,Oi(e,n,a))}}function iu(e,t,n,a,i,l){switch(n){case"style":Rc(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Oa(e,a):(typeof a=="number"||typeof a=="bigint")&&Oa(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),l=e[lt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Oi(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var f=n[l];if(f!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,l,f,n,null)}}i&&_e(e,t,"srcSet",n.srcSet,n,null),a&&_e(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var g=l=f=i=null,w=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":i=N;break;case"type":f=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":l=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:_e(e,t,a,N,n,null)}}Ac(e,l,g,w,O,f,i,!1);return;case"select":de("invalid",e),a=f=l=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":l=g;break;case"defaultValue":f=g;break;case"multiple":a=g;default:_e(e,t,i,g,n,null)}t=l,n=f,e.multiple=!!a,t!=null?xa(e,!!a,t,!1):n!=null&&xa(e,!!a,n,!0);return;case"textarea":de("invalid",e),l=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":a=g;break;case"defaultValue":i=g;break;case"children":l=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:_e(e,t,f,g,n,null)}Tc(e,a,i,l);return;case"option":for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!=null)&&(w==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":_e(e,t,w,a,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<Wr.length;a++)de(Wr[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:_e(e,t,O,a,n,null)}return;default:if(Ss(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&iu(e,t,N,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&_e(e,t,g,a,n,null))}function _y(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,f=null,g=null,w=null,O=null,N=null;for(k in n){var H=n[k];if(n.hasOwnProperty(k)&&H!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":w=H;default:a.hasOwnProperty(k)||_e(e,t,k,null,a,H)}}for(var M in a){var k=a[M];if(H=n[M],a.hasOwnProperty(M)&&(k!=null||H!=null))switch(M){case"type":l=k;break;case"name":i=k;break;case"checked":O=k;break;case"defaultChecked":N=k;break;case"value":f=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:k!==H&&_e(e,t,M,k,a,H)}}ys(e,f,g,w,O,N,l,i);return;case"select":k=f=g=M=null;for(l in n)if(w=n[l],n.hasOwnProperty(l)&&w!=null)switch(l){case"value":break;case"multiple":k=w;default:a.hasOwnProperty(l)||_e(e,t,l,null,a,w)}for(i in a)if(l=a[i],w=n[i],a.hasOwnProperty(i)&&(l!=null||w!=null))switch(i){case"value":M=l;break;case"defaultValue":g=l;break;case"multiple":f=l;default:l!==w&&_e(e,t,i,l,a,w)}t=g,n=f,a=k,M!=null?xa(e,!!n,M,!1):!!a!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":k=M=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:_e(e,t,g,null,a,i)}for(f in a)if(i=a[f],l=n[f],a.hasOwnProperty(f)&&(i!=null||l!=null))switch(f){case"value":M=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==l&&_e(e,t,f,i,a,l)}Ec(e,M,k);return;case"option":for(var Z in n)M=n[Z],n.hasOwnProperty(Z)&&M!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:_e(e,t,Z,null,a,M));for(w in a)M=a[w],k=n[w],a.hasOwnProperty(w)&&M!==k&&(M!=null||k!=null)&&(w==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":_e(e,t,w,M,a,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)M=n[ie],n.hasOwnProperty(ie)&&M!=null&&!a.hasOwnProperty(ie)&&_e(e,t,ie,null,a,M);for(O in a)if(M=a[O],k=n[O],a.hasOwnProperty(O)&&M!==k&&(M!=null||k!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:_e(e,t,O,M,a,k)}return;default:if(Ss(t)){for(var Re in n)M=n[Re],n.hasOwnProperty(Re)&&M!==void 0&&!a.hasOwnProperty(Re)&&iu(e,t,Re,void 0,a,M);for(N in a)M=a[N],k=n[N],!a.hasOwnProperty(N)||M===k||M===void 0&&k===void 0||iu(e,t,N,M,a,k);return}}for(var R in n)M=n[R],n.hasOwnProperty(R)&&M!=null&&!a.hasOwnProperty(R)&&_e(e,t,R,null,a,M);for(H in a)M=a[H],k=n[H],!a.hasOwnProperty(H)||M===k||M==null&&k==null||_e(e,t,H,M,a,k)}function xh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],l=i.transferSize,f=i.initiatorType,g=i.duration;if(l&&g&&xh(f)){for(f=0,g=i.responseEnd,a+=1;a<n.length;a++){var w=n[a],O=w.startTime;if(O>g)break;var N=w.transferSize,H=w.initiatorType;N&&xh(H)&&(w=w.responseEnd,f+=N*(w<g?1:(g-O)/(w-O)))}if(--a,t+=8*(l+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ou=null,su=null;function xo(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function Cy(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(My)}:Dh;function My(e){setTimeout(function(){throw e})}function Hn(e){return e==="head"}function zh(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),or(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ei(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ei(n);for(var l=n.firstChild;l;){var f=l.nextSibling,g=l.nodeName;l[vr]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=f}}else n==="body"&&ei(e.ownerDocument.body);n=i}while(n);or(t)}function Lh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cu(n),ps(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Dy(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function ky(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function Nh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$?"||e.data==="$~"}function du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hu=null;function Uh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Hh(e,t,n){switch(t=xo(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ei(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ps(e)}var Lt=new Map,jh=new Set;function Oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=P.d;P.d={f:Ly,r:Ny,D:Uy,C:By,L:Hy,m:jy,X:Gy,S:qy,M:Yy};function Ly(){var e=pn.f(),t=bo();return e||t}function Ny(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):pn.r(e)}var ar=typeof document>"u"?null:document;function qh(e,t,n){var a=ar;if(a&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),jh.has(i)||(jh.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),tt(t,"link",e),Xe(t),a.head.appendChild(t)))}}function Uy(e){pn.D(e),qh("dns-prefetch",e,null)}function By(e,t){pn.C(e,t),qh("preconnect",e,t)}function Hy(e,t,n){pn.L(e,t,n);var a=ar;if(a&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Rt(n.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var l=i;switch(t){case"style":l=rr(e);break;case"script":l=ir(e)}Lt.has(l)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(l,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ti(l))||t==="script"&&a.querySelector(ni(l))||(t=a.createElement("link"),tt(t,"link",e),Xe(t),a.head.appendChild(t)))}}function jy(e,t){pn.m(e,t);var n=ar;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ir(e)}if(!Lt.has(l)&&(e=v({rel:"modulepreload",href:e},t),Lt.set(l,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ni(l)))return}a=n.createElement("link"),tt(a,"link",e),Xe(a),n.head.appendChild(a)}}}function qy(e,t,n){pn.S(e,t,n);var a=ar;if(a&&e){var i=Ra(a).hoistableStyles,l=rr(e);t=t||"default";var f=i.get(l);if(!f){var g={loading:0,preload:null};if(f=a.querySelector(ti(l)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(l))&&mu(e,n);var w=f=a.createElement("link");Xe(w),tt(w,"link",e),w._p=new Promise(function(O,N){w.onload=O,w.onerror=N}),w.addEventListener("load",function(){g.loading|=1}),w.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Mo(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:g},i.set(l,f)}}}function Gy(e,t){pn.X(e,t);var n=ar;if(n&&e){var a=Ra(n).hoistableScripts,i=ir(e),l=a.get(i);l||(l=n.querySelector(ni(i)),l||(e=v({src:e,async:!0},t),(t=Lt.get(i))&&pu(e,t),l=n.createElement("script"),Xe(l),tt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Yy(e,t){pn.M(e,t);var n=ar;if(n&&e){var a=Ra(n).hoistableScripts,i=ir(e),l=a.get(i);l||(l=n.querySelector(ni(i)),l||(e=v({src:e,async:!0,type:"module"},t),(t=Lt.get(i))&&pu(e,t),l=n.createElement("script"),Xe(l),tt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Gh(e,t,n,a){var i=(i=ce.current)?Oo(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=rr(n.href),n=Ra(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=rr(n.href);var l=Ra(i).hoistableStyles,f=l.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,f),(l=i.querySelector(ti(e)))&&!l._p&&(f.instance=l,f.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),l||Qy(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ir(n),n=Ra(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function rr(e){return'href="'+Rt(e)+'"'}function ti(e){return'link[rel="stylesheet"]['+e+"]"}function Yh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Qy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Xe(t),e.head.appendChild(t))}function ir(e){return'[src="'+Rt(e)+'"]'}function ni(e){return"script[async]"+e}function Qh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var i=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),tt(a,"style",i),Mo(a,n.precedence,e),t.instance=a;case"stylesheet":i=rr(n.href);var l=e.querySelector(ti(i));if(l)return t.state.loading|=4,t.instance=l,Xe(l),l;a=Yh(n),(i=Lt.get(i))&&mu(a,i),l=(e.ownerDocument||e).createElement("link"),Xe(l);var f=l;return f._p=new Promise(function(g,w){f.onload=g,f.onerror=w}),tt(l,"link",a),t.state.loading|=4,Mo(l,n.precedence,e),t.instance=l;case"script":return l=ir(n.src),(i=e.querySelector(ni(l)))?(t.instance=i,Xe(i),i):(a=n,(i=Lt.get(l))&&(a=v({},n),pu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),tt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mo(a,n.precedence,e));return t.instance}function Mo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,f=0;f<a.length;f++){var g=a[f];if(g.dataset.precedence===t)l=g;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Do=null;function Ph(e,t,n){if(Do===null){var a=new Map,i=Do=new Map;i.set(n,a)}else i=Do,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var l=n[i];if(!(l[vr]||l[Je]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var f=l.getAttribute(t)||"";f=e+f;var g=a.get(f);g?g.push(l):a.set(f,[l])}}return a}function Vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Py(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ih(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=rr(a.href),l=t.querySelector(ti(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ko.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,Xe(l);return}l=t.ownerDocument||t,a=Yh(a),(i=Lt.get(i))&&mu(a,i),l=l.createElement("link"),Xe(l);var f=l;f._p=new Promise(function(g,w){f.onload=g,f.onerror=w}),tt(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ko.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gu=0;function Iy(e,t){return e.stylesheets&&e.count===0&&Lo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Lo(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&gu===0&&(gu=62500*Ry());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lo(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>gu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function ko(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zo=null;function Lo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zo=new Map,t.forEach(Xy,e),zo=null,ko.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var n=zo.get(e);if(n)var a=n.get(null);else{n=new Map,zo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var f=i[l];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),l=n.get(f)||a,l===a&&n.set(null,i),n.set(f,i),this.count++,a=ko.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ai={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Ky(e,t,n,a,i,l,f,g,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.hiddenUpdates=fs(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Xh(e,t,n,a,i,l,f,g,w,O,N,H){return e=new Ky(e,t,n,f,w,O,N,H,g),t=1,l===!0&&(t|=24),l=St(3,null,null,t),e.current=l,l.stateNode=e,t=Fs(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},$s(l),e}function Kh(e){return e?(e=Ua,e):Ua}function Fh(e,t,n,a,i,l){i=Kh(i),a.context===null?a.context=i:a.pendingContext=i,a=Cn(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=xn(e,a,t),n!==null&&(mt(n,e,t),Nr(n,e,t))}function Zh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){Zh(e,t),(e=e.alternate)&&Zh(e,t)}function Jh(e){if(e.tag===13||e.tag===31){var t=ta(e,67108864);t!==null&&mt(t,e,67108864),yu(e,67108864)}}function Wh(e){if(e.tag===13||e.tag===31){var t=Tt();t=ds(t);var n=ta(e,t);n!==null&&mt(n,e,t),yu(e,t)}}var No=!0;function Fy(e,t,n,a){var i=L.T;L.T=null;var l=P.p;try{P.p=2,vu(e,t,n,a)}finally{P.p=l,L.T=i}}function Zy(e,t,n,a){var i=L.T;L.T=null;var l=P.p;try{P.p=8,vu(e,t,n,a)}finally{P.p=l,L.T=i}}function vu(e,t,n,a){if(No){var i=Su(a);if(i===null)ru(e,t,a,Uo,n),em(e,a);else if(Wy(i,e,t,n,a))a.stopPropagation();else if(em(e,a),t&4&&-1<Jy.indexOf(e)){for(;i!==null;){var l=_a(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var f=Zn(l.pendingLanes);if(f!==0){var g=l;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var w=1<<31-yt(f);g.entanglements[1]|=w,f&=~w}It(l),(be&6)===0&&(vo=nt()+500,Jr(0))}}break;case 31:case 13:g=ta(l,2),g!==null&&mt(g,l,2),bo(),yu(l,2)}if(l=Su(a),l===null&&ru(e,t,a,Uo,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else ru(e,t,a,null,n)}}function Su(e){return e=ws(e),bu(e)}var Uo=null;function bu(e){if(Uo=null,e=Ta(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Uo=e,null}function $h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Ze:return 2;case Yt:return 8;case Aa:case Bp:return 32;case lc:return 268435456;default:return 32}default:return 32}}var wu=!1,jn=null,qn=null,Gn=null,ri=new Map,ii=new Map,Yn=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function em(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function oi(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=_a(t),t!==null&&Jh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wy(e,t,n,a,i){switch(t){case"focusin":return jn=oi(jn,e,t,n,a,i),!0;case"dragenter":return qn=oi(qn,e,t,n,a,i),!0;case"mouseover":return Gn=oi(Gn,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return ri.set(l,oi(ri.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,ii.set(l,oi(ii.get(l)||null,e,t,n,a,i)),!0}return!1}function tm(e){var t=Ta(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,mc(e.priority,function(){Wh(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,mc(e.priority,function(){Wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);bs=a,n.target.dispatchEvent(a),bs=null}else return t=_a(n),t!==null&&Jh(t),e.blockedOn=n,!1;t.shift()}return!0}function nm(e,t,n){Bo(e)&&n.delete(t)}function $y(){wu=!1,jn!==null&&Bo(jn)&&(jn=null),qn!==null&&Bo(qn)&&(qn=null),Gn!==null&&Bo(Gn)&&(Gn=null),ri.forEach(nm),ii.forEach(nm)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$y)))}var jo=null;function am(e){jo!==e&&(jo=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){jo===e&&(jo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(bu(a||n)===null)continue;break}var l=_a(n);l!==null&&(e.splice(t,3),t-=3,Sl(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function or(e){function t(w){return Ho(w,e)}jn!==null&&Ho(jn,e),qn!==null&&Ho(qn,e),Gn!==null&&Ho(Gn,e),ri.forEach(t),ii.forEach(t);for(var n=0;n<Yn.length;n++){var a=Yn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)tm(n),n.blockedOn===null&&Yn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],f=i[lt]||null;if(typeof l=="function")f||am(n);else if(f){var g=null;if(l&&l.hasAttribute("formAction")){if(i=l,f=l[lt]||null)g=f.formAction;else if(bu(i)!==null)continue}else g=f.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),am(n)}}}function rm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Au(e){this._internalRoot=e}qo.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();Fh(n,a,e,t,null,null)},qo.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fh(e.current,2,null,e,null,null),bo(),t[Ea]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&tm(e)}};var im=o.version;if(im!=="19.2.6")throw Error(u(527,im,"19.2.6"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var ev={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{pr=Go.inject(ev),gt=Go}catch{}}return li.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",i=dd,l=hd,f=md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Xh(e,1,!1,null,null,n,a,null,i,l,f,rm),e[Ea]=t.current,au(e),new Au(t)},li.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,i="",l=dd,f=hd,g=md,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Xh(e,1,!0,t,n??null,a,i,w,l,f,g,rm),t.context=Kh(null),n=t.current,a=Tt(),a=ds(a),i=Cn(a),i.callback=null,xn(n,i,a),n=a,t.current.lanes=n,yr(t,n),It(t),e[Ea]=t.current,au(e),new qo(t)},li.version="19.2.6",li}var pm;function cv(){if(pm)return _u.exports;pm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),_u.exports=uv(),_u.exports}var fv=cv();const dv=Zu(fv);var gm=ee.use,hi=typeof window<"u"?ee.useLayoutEffect:ee.useEffect;function Ou(r){const o=ee.useRef({value:r,prev:null}),s=o.current.value;return r!==s&&(o.current={value:r,prev:s}),o.current.prev}function hv(r,o,s={},u={}){ee.useEffect(()=>{if(!r.current||u.disabled||typeof IntersectionObserver!="function")return;const c=new IntersectionObserver(([d])=>{o(d)},s);return c.observe(r.current),()=>{c.disconnect()}},[o,s,u.disabled,r])}function mv(r){const o=ee.useRef(null);return ee.useImperativeHandle(r,()=>o.current,[]),o}const ep=!1;function mi(r){return r[r.length-1]}function pv(r){return typeof r=="function"}function Vn(r,o){return pv(r)?r(o):r}const tp=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable;function np(r){for(const o in r)if(tp.call(r,o))return!0;return!1}const gv=()=>Object.create(null),ma=(r,o)=>pa(r,o,gv);function pa(r,o,s=()=>({}),u=0){if(r===o)return r;if(u>500)return o;const c=o,d=bm(r)&&bm(c);if(!d&&!(cr(r)&&cr(c)))return c;const m=d?r:vm(r);if(!m)return c;const y=d?c:vm(c);if(!y)return c;const p=m.length,h=y.length,S=d?new Array(h):s();let v=0;for(let A=0;A<h;A++){const b=d?A:y[A],_=r[b],C=c[b];if(_===C){S[b]=_,(d?A<p:tp.call(r,b))&&v++;continue}if(_===null||C===null||typeof _!="object"||typeof C!="object"){S[b]=C;continue}const D=pa(_,C,s,u+1);S[b]=D,D===_&&v++}return p===h&&v===p?r:S}function vm(r){const o=Object.getOwnPropertyNames(r);for(const c of o)if(!ym.call(r,c))return!1;const s=Object.getOwnPropertySymbols(r);if(s.length===0)return o;const u=o;for(const c of s){if(!ym.call(r,c))return!1;u.push(c)}return u}function cr(r){if(!Sm(r))return!1;const o=r.constructor;if(typeof o>"u")return!0;const s=o.prototype;return!(!Sm(s)||!s.hasOwnProperty("isPrototypeOf"))}function Sm(r){return Object.prototype.toString.call(r)==="[object Object]"}function bm(r){return Array.isArray(r)&&r.length===Object.keys(r).length}function Nt(r,o,s){if(r===o)return!0;if(typeof r!=typeof o)return!1;if(Array.isArray(r)&&Array.isArray(o)){if(r.length!==o.length)return!1;for(let u=0,c=r.length;u<c;u++)if(!Nt(r[u],o[u],s))return!1;return!0}if(cr(r)&&cr(o)){const u=s?.ignoreUndefined??!0;if(s?.partial){for(const m in o)if((!u||o[m]!==void 0)&&!Nt(r[m],o[m],s))return!1;return!0}let c=0;if(!u)c=Object.keys(r).length;else for(const m in r)r[m]!==void 0&&c++;let d=0;for(const m in o)if((!u||o[m]!==void 0)&&(d++,d>c||!Nt(r[m],o[m],s)))return!1;return c===d}return!1}function fr(r){let o,s;const u=new Promise((c,d)=>{o=c,s=d});return u.status="pending",u.resolve=c=>{u.status="resolved",u.value=c,o(c),r?.(c)},u.reject=c=>{u.status="rejected",s(c)},u}function yv(r){return typeof r?.message!="string"?!1:r.message.startsWith("Failed to fetch dynamically imported module")||r.message.startsWith("error loading dynamically imported module")||r.message.startsWith("Importing a module script failed")}function pi(r){return!!(r&&typeof r=="object"&&typeof r.then=="function")}function vv(r){return r.replace(/[\x00-\x1f\x7f]/g,"")}function wm(r){let o;try{o=decodeURI(r)}catch{o=r.replaceAll(/%[0-9A-F]{2}/gi,s=>{try{return decodeURI(s)}catch{return s}})}return vv(o)}const Sv=["http:","https:","mailto:","tel:"];function Wo(r,o){if(!r)return!1;try{const s=new URL(r);return!o.has(s.protocol)}catch{return!1}}const bv={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},wv=/[&><\u2028\u2029]/g;function Av(r){return r.replace(wv,o=>bv[o])}function ui(r){if(!r)return{path:r,handledProtocolRelativeURL:!1};if(!/[%\\\x00-\x1f\x7f]/.test(r)&&!r.startsWith("//"))return{path:r,handledProtocolRelativeURL:!1};const o=/%25|%5C/gi;let s=0,u="",c;for(;(c=o.exec(r))!==null;)u+=wm(r.slice(s,c.index))+c[0],s=o.lastIndex;u=u+wm(s?r.slice(s):r);let d=!1;return u.startsWith("//")&&(d=!0,u="/"+u.replace(/^\/+/,"")),{path:u,handledProtocolRelativeURL:d}}function Ev(r){return/\s|[^\u0000-\u007F]/.test(r)?r.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):r}function Tv(r,o){if(r===o)return!0;if(r.length!==o.length)return!1;for(let s=0;s<r.length;s++)if(r[s]!==o[s])return!1;return!0}function yn(){throw new Error("Invariant failed")}function gi(r){const o=new Map;let s,u;const c=d=>{d.next&&(d.prev?(d.prev.next=d.next,d.next.prev=d.prev,d.next=void 0,u&&(u.next=d,d.prev=u)):(d.next.prev=void 0,s=d.next,d.next=void 0,u&&(d.prev=u,u.next=d)),u=d)};return{get(d){const m=o.get(d);if(m)return c(m),m.value},set(d,m){if(o.size>=r&&s){const p=s;o.delete(p.key),p.next&&(s=p.next,p.next.prev=void 0),p===u&&(u=void 0)}const y=o.get(d);if(y)y.value=m,c(y);else{const p={key:d,value:m,prev:u};u&&(u.next=p),u=p,s||(s=p),o.set(d,p)}},clear(){o.clear(),s=void 0,u=void 0}}}const In=4,ap=5;function _v(r){const o=r.indexOf("{");if(o===-1)return null;const s=r.indexOf("}",o);return s===-1||o+1>=r.length?null:[o,s]}function rp(r,o,s=new Uint16Array(6)){const u=r.indexOf("/",o),c=u===-1?r.length:u,d=r.substring(o,c);if(!d||!d.includes("$"))return s[0]=0,s[1]=o,s[2]=o,s[3]=c,s[4]=c,s[5]=c,s;if(d==="$"){const y=r.length;return s[0]=2,s[1]=o,s[2]=o,s[3]=y,s[4]=y,s[5]=y,s}if(d.charCodeAt(0)===36)return s[0]=1,s[1]=o,s[2]=o+1,s[3]=c,s[4]=c,s[5]=c,s;const m=_v(d);if(m){const[y,p]=m,h=d.charCodeAt(y+1);if(h===45){if(y+2<d.length&&d.charCodeAt(y+2)===36){const S=y+3,v=p;if(S<v)return s[0]=3,s[1]=o+y,s[2]=o+S,s[3]=o+v,s[4]=o+p+1,s[5]=c,s}}else if(h===36){const S=y+1,v=y+2;return v===p?(s[0]=2,s[1]=o+y,s[2]=o+S,s[3]=o+v,s[4]=o+p+1,s[5]=r.length,s):(s[0]=1,s[1]=o+y,s[2]=o+v,s[3]=o+p,s[4]=o+p+1,s[5]=c,s)}}return s[0]=0,s[1]=o,s[2]=o,s[3]=c,s[4]=c,s[5]=c,s}function rs(r,o,s,u,c,d,m){m?.(s);let y=u;{const p=s.fullPath??s.from,h=p.length,S=s.options?.caseSensitive??r,v=s.options?.params?.parse??s.options?.parseParams;for(;y<h;){const b=rp(p,y,o);let _;const C=y,D=b[5];switch(y=D+1,d++,b[0]){case 0:{const z=p.substring(b[2],b[3]);if(S){const q=c.static?.get(z);if(q)_=q;else{c.static??=new Map;const Y=ga(s.fullPath??s.from);Y.parent=c,Y.depth=d,_=Y,c.static.set(z,Y)}}else{const q=z.toLowerCase(),Y=c.staticInsensitive?.get(q);if(Y)_=Y;else{c.staticInsensitive??=new Map;const G=ga(s.fullPath??s.from);G.parent=c,G.depth=d,_=G,c.staticInsensitive.set(q,G)}}break}case 1:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=!v&&c.dynamic?.find(j=>!j.parse&&j.caseSensitive===Y&&j.prefix===G&&j.suffix===$);if(K)_=K;else{const j=Du(1,s.fullPath??s.from,Y,G,$);_=j,j.depth=d,j.parent=c,c.dynamic??=[],c.dynamic.push(j)}break}case 3:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=!v&&c.optional?.find(j=>!j.parse&&j.caseSensitive===Y&&j.prefix===G&&j.suffix===$);if(K)_=K;else{const j=Du(3,s.fullPath??s.from,Y,G,$);_=j,j.parent=c,j.depth=d,c.optional??=[],c.optional.push(j)}break}case 2:{const z=p.substring(C,b[1]),q=p.substring(b[4],D),Y=S&&!!(z||q),G=z?Y?z:z.toLowerCase():void 0,$=q?Y?q:q.toLowerCase():void 0,K=Du(2,s.fullPath??s.from,Y,G,$);_=K,K.parent=c,K.depth=d,c.wildcard??=[],c.wildcard.push(K)}}c=_}if(v&&s.children&&!s.isRoot&&s.id&&s.id.charCodeAt(s.id.lastIndexOf("/")+1)===95){const b=ga(s.fullPath??s.from);b.kind=ap,b.parent=c,d++,b.depth=d,c.pathless??=[],c.pathless.push(b),c=b}const A=(s.path||!s.children)&&!s.isRoot;if(A&&p.endsWith("/")){const b=ga(s.fullPath??s.from);b.kind=In,b.parent=c,d++,b.depth=d,c.index=b,c=b}c.parse=v??null,c.priority=s.options?.params?.priority??0,A&&!c.route&&(c.route=s,c.fullPath=s.fullPath??s.from)}if(s.children)for(const p of s.children)rs(r,o,p,y,c,d,m)}function Mu(r,o){if(r.parse&&!o.parse)return-1;if(!r.parse&&o.parse)return 1;if(r.parse&&o.parse&&(r.priority||o.priority))return o.priority-r.priority;if(r.prefix&&o.prefix&&r.prefix!==o.prefix){if(r.prefix.startsWith(o.prefix))return-1;if(o.prefix.startsWith(r.prefix))return 1}if(r.suffix&&o.suffix&&r.suffix!==o.suffix){if(r.suffix.endsWith(o.suffix))return-1;if(o.suffix.endsWith(r.suffix))return 1}return r.prefix&&!o.prefix?-1:!r.prefix&&o.prefix?1:r.suffix&&!o.suffix?-1:!r.suffix&&o.suffix?1:r.caseSensitive&&!o.caseSensitive?-1:!r.caseSensitive&&o.caseSensitive?1:0}function Pn(r){if(r.pathless)for(const o of r.pathless)Pn(o);if(r.static)for(const o of r.static.values())Pn(o);if(r.staticInsensitive)for(const o of r.staticInsensitive.values())Pn(o);if(r.dynamic?.length){r.dynamic.sort(Mu);for(const o of r.dynamic)Pn(o)}if(r.optional?.length){r.optional.sort(Mu);for(const o of r.optional)Pn(o)}if(r.wildcard?.length){r.wildcard.sort(Mu);for(const o of r.wildcard)Pn(o)}}function ga(r){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:r,parent:null,parse:null,priority:0}}function Du(r,o,s,u,c){return{kind:r,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:o,parent:null,parse:null,priority:0,caseSensitive:s,prefix:u,suffix:c}}function Rv(r,o){const s=ga("/"),u=new Uint16Array(6);for(const c of r)rs(!1,u,c,1,s,0);Pn(s),o.masksTree=s,o.flatCache=gi(1e3)}function Cv(r,o){r||="/";const s=o.flatCache.get(r);if(s)return s;const u=Ju(r,o.masksTree);return o.flatCache.set(r,u),u}function xv(r,o,s,u,c){r||="/",u||="/";const d=o?`case\0${r}`:r;let m=c.singleCache.get(d);return m||(m=ga("/"),rs(o,new Uint16Array(6),{from:r},1,m,0),c.singleCache.set(d,m)),Ju(u,m,s)}function Ov(r,o,s=!1){const u=s?r:`nofuzz\0${r}`,c=o.matchCache.get(u);if(c!==void 0)return c;r||="/";let d;try{d=Ju(r,o.segmentTree,s)}catch(m){if(m instanceof URIError)d=null;else throw m}return d&&(d.branch=op(d.route)),o.matchCache.set(u,d),d}function Mv(r){return r==="/"?r:r.replace(/\/{1,}$/,"")}function Dv(r,o=!1,s){const u=ga(r.fullPath),c=new Uint16Array(6),d={},m={};let y=0;return rs(o,c,r,1,u,0,p=>{if(s?.(p,y),p.id in d&&yn(),d[p.id]=p,y!==0&&p.path){const h=Mv(p.fullPath);(!m[h]||p.fullPath.endsWith("/"))&&(m[h]=p)}y++}),Pn(u),{processedTree:{segmentTree:u,singleCache:gi(1e3),matchCache:gi(1e3),flatCache:null,masksTree:null},routesById:d,routesByPath:m}}function Ju(r,o,s=!1){const u=r.split("/"),c=zv(r,u,o,s);if(!c)return null;const[d]=ip(r,u,c);return{route:c.node.route,rawParams:d}}function ip(r,o,s){const u=kv(s.node);let c=null;const d=Object.create(null);let m=s.extract?.part??0,y=s.extract?.node??0,p=s.extract?.path??0,h=s.extract?.segment??0;for(;y<u.length;m++,y++,p++,h++){const S=u[y];if(S.kind===In)break;if(S.kind===ap){h--,m--,p--;continue}const v=o[m],A=p;if(v&&(p+=v.length),S.kind===1){c??=s.node.fullPath.split("/");const b=c[h],_=S.prefix?.length??0;if(b.charCodeAt(_)===123){const C=S.suffix?.length??0,D=b.substring(_+2,b.length-C-1),z=v.substring(_,v.length-C);d[D]=decodeURIComponent(z)}else{const C=b.substring(1);d[C]=decodeURIComponent(v)}}else if(S.kind===3){if(s.skipped&1<<y){m--,p=A-1;continue}c??=s.node.fullPath.split("/");const b=c[h],_=S.prefix?.length??0,C=S.suffix?.length??0,D=b.substring(_+3,b.length-C-1),z=S.suffix||S.prefix?v.substring(_,v.length-C):v;z&&(d[D]=decodeURIComponent(z))}else if(S.kind===2){const b=S,_=r.substring(A+(b.prefix?.length??0),r.length-(b.suffix?.length??0)),C=decodeURIComponent(_);d["*"]=C,d._splat=C;break}}return s.rawParams&&Object.assign(d,s.rawParams),[d,{part:m,node:y,path:p,segment:h}]}function op(r){const o=[r];for(;r.parentRoute;)r=r.parentRoute,o.push(r);return o.reverse(),o}function kv(r){const o=Array(r.depth+1);do o[r.depth]=r,r=r.parent;while(r);return o}function zv(r,o,s,u){if(r==="/"&&s.index)return{node:s.index,skipped:0};const c=!mi(o),d=c&&r!=="/",m=o.length-(c?1:0),y=[{node:s,index:1,skipped:0,depth:1,statics:0,dynamics:0,optionals:0}];let p=null,h=null;for(;y.length;){const S=y.pop(),{node:v,index:A,skipped:b,depth:_,statics:C,dynamics:D,optionals:z}=S;let{extract:q,rawParams:Y}=S;if(v.kind===2&&v.route&&!Qo(h,S))continue;if(v.parse){if(!Am(r,o,S))continue;Y=S.rawParams,q=S.extract}u&&v.route&&v.kind!==In&&Qo(p,S)&&(p=S);const G=A===m;if(G&&(v.route&&(!d||v.kind===In||v.kind===2)&&Qo(h,S)&&(h=S),!v.optional&&!v.wildcard&&!v.index&&!v.pathless))continue;const $=G?void 0:o[A];let K;if(G&&v.index){const j={node:v.index,index:A,skipped:b,depth:_+1,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y};let Q=!0;if(v.index.parse&&(Am(r,o,j)||(Q=!1)),Q){if(!D&&!z&&!b&&Lv(C,m))return j;Qo(h,j)&&(h=j)}}if(v.wildcard)for(let j=v.wildcard.length-1;j>=0;j--){const Q=v.wildcard[j],{prefix:F,suffix:oe}=Q;if(!(F&&(G||!(Q.caseSensitive?$:K??=$.toLowerCase()).startsWith(F)))){if(oe){if(G)continue;const re=o.slice(A).join("/").slice(-oe.length);if((Q.caseSensitive?re:re.toLowerCase())!==oe)continue}y.push({node:Q,index:m,skipped:b,depth:_+1,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}}if(v.optional){const j=b|1<<_,Q=_+1;for(let F=v.optional.length-1;F>=0;F--){const oe=v.optional[F];y.push({node:oe,index:A,skipped:j,depth:Q,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}if(!G)for(let F=v.optional.length-1;F>=0;F--){const oe=v.optional[F],{prefix:re,suffix:ae}=oe;if(re||ae){const Ie=oe.caseSensitive?$:K??=$.toLowerCase();if(re&&!Ie.startsWith(re)||ae&&!Ie.endsWith(ae))continue}y.push({node:oe,index:A+1,skipped:b,depth:Q,statics:C,dynamics:D,optionals:z+Yo(m,A),extract:q,rawParams:Y})}}if(!G&&v.dynamic&&$)for(let j=v.dynamic.length-1;j>=0;j--){const Q=v.dynamic[j],{prefix:F,suffix:oe}=Q;if(F||oe){const re=Q.caseSensitive?$:K??=$.toLowerCase();if(F&&!re.startsWith(F)||oe&&!re.endsWith(oe))continue}y.push({node:Q,index:A+1,skipped:b,depth:_+1,statics:C,dynamics:D+Yo(m,A),optionals:z,extract:q,rawParams:Y})}if(!G&&v.staticInsensitive){const j=v.staticInsensitive.get(K??=$.toLowerCase());j&&y.push({node:j,index:A+1,skipped:b,depth:_+1,statics:C+Yo(m,A),dynamics:D,optionals:z,extract:q,rawParams:Y})}if(!G&&v.static){const j=v.static.get($);j&&y.push({node:j,index:A+1,skipped:b,depth:_+1,statics:C+Yo(m,A),dynamics:D,optionals:z,extract:q,rawParams:Y})}if(v.pathless){const j=_+1;for(let Q=v.pathless.length-1;Q>=0;Q--){const F=v.pathless[Q];y.push({node:F,index:A,skipped:b,depth:j,statics:C,dynamics:D,optionals:z,extract:q,rawParams:Y})}}}if(h)return h;if(u&&p){let S=p.index;for(let A=0;A<p.index;A++)S+=o[A].length;const v=S===r.length?"/":r.slice(S);return p.rawParams??=Object.create(null),p.rawParams["**"]=decodeURIComponent(v),p}return null}function Yo(r,o){return 2**(r-o-1)}function Lv(r,o){return r===2**(o-1)-1}function Am(r,o,s){let u,c;try{[u,c]=ip(r,o,s)}catch{return null}if(s.rawParams=u,s.extract=c,!s.node.parse)return!0;try{if(s.node.parse(u)===!1)return null}catch{}return!0}function Qo(r,o){return r?o.statics>r.statics||o.statics===r.statics&&(o.dynamics>r.dynamics||o.dynamics===r.dynamics&&(o.optionals>r.optionals||o.optionals===r.optionals&&((o.node.kind===In)>(r.node.kind===In)||o.node.kind===In==(r.node.kind===In)&&o.depth>r.depth))):!0}function Ko(r){return Wu(r.filter(o=>o!==void 0).join("/"))}function Wu(r){return r.replace(/\/{2,}/g,"/")}function sp(r){return r==="/"?r:r.replace(/^\/{1,}/,"")}function gn(r){const o=r.length;return o>1&&r[o-1]==="/"?r.replace(/\/{1,}$/,""):r}function lp(r){return gn(sp(r))}function $o(r,o){return r?.endsWith("/")&&r!=="/"&&r!==`${o}/`?r.slice(0,-1):r}function Nv(r,o,s){return $o(r,s)===$o(o,s)}function Uv({base:r,to:o,trailingSlash:s="never",cache:u}){const c=o.startsWith("/"),d=!c&&o===".";let m;if(u){m=c?o:d?r:r+"\0"+o;const h=u.get(m);if(h)return h}let y;if(d)y=r.split("/");else if(c)y=o.split("/");else{for(y=r.split("/");y.length>1&&mi(y)==="";)y.pop();const h=o.split("/");for(let S=0,v=h.length;S<v;S++){const A=h[S];A===""?S?S===v-1&&y.push(A):y=[A]:A===".."?y.pop():A==="."||y.push(A)}}y.length>1&&(mi(y)===""?s==="never"&&y.pop():s==="always"&&y.push(""));const p=Wu(y.join("/"))||"/";return m&&u&&u.set(m,p),p}function Bv(r){const o=new Map(r.map(c=>[encodeURIComponent(c),c])),s=Array.from(o.keys()).map(c=>c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),u=new RegExp(s,"g");return c=>c.replace(u,d=>o.get(d)??d)}function ku(r,o,s){const u=o[r];return typeof u!="string"?u:r==="_splat"?/^[a-zA-Z0-9\-._~!/]*$/.test(u)?u:u.split("/").map(c=>Tm(c,s)).join("/"):Tm(u,s)}function Em({path:r,params:o,decoder:s,...u}){let c=!1;const d=Object.create(null);if(!r||r==="/")return{interpolatedPath:"/",usedParams:d,isMissingParams:c};if(!r.includes("$"))return{interpolatedPath:r,usedParams:d,isMissingParams:c};const m=r.length;let y=0,p,h="";for(;y<m;){const S=y;p=rp(r,S,p);const v=p[5];if(y=v+1,S===v)continue;const A=p[0];if(A===0){h+="/"+r.substring(S,v);continue}if(A===2){const b=o._splat;d._splat=b,d["*"]=b;const _=r.substring(S,p[1]),C=r.substring(p[4],v);if(!b){c=!0,(_||C)&&(h+="/"+_+C);continue}const D=ku("_splat",o,s);h+="/"+_+D+C;continue}if(A===1){const b=r.substring(p[2],p[3]);!c&&!(b in o)&&(c=!0),d[b]=o[b];const _=r.substring(S,p[1]),C=r.substring(p[4],v),D=ku(b,o,s)??"undefined";h+="/"+_+D+C;continue}if(A===3){const b=r.substring(p[2],p[3]),_=o[b];if(_==null)continue;d[b]=_;const C=r.substring(S,p[1]),D=r.substring(p[4],v),z=ku(b,o,s)??"";h+="/"+C+z+D;continue}}return r.endsWith("/")&&(h+="/"),{usedParams:d,interpolatedPath:h||"/",isMissingParams:c}}function Tm(r,o){const s=encodeURIComponent(r);return o?.(s)??s}function Hv(r={}){if(r.isNotFound=!0,r.throw)throw r;return r}function rt(r){return r?.isNotFound===!0}function jv(){try{return typeof window<"u"&&typeof window.sessionStorage=="object"?window.sessionStorage:void 0}catch{return}}const qv="tsr-scroll-restoration-v1_3";function Gv(){const r=jv();if(!r)return null;let o={};try{const u=JSON.parse(r.getItem("tsr-scroll-restoration-v1_3")||"{}");cr(u)&&(o=u)}catch{}return{get state(){return o},set:u=>{o=Vn(u,o)||o},persist:()=>{try{r.setItem(qv,JSON.stringify(o))}catch{}}}}const _m=Gv(),Yv=r=>r.state.__TSR_key||r.href;function Qv(r){const o=[];let s;for(;s=r.parentNode;)o.push(`${r.tagName}:nth-child(${Array.prototype.indexOf.call(s.children,r)+1})`),r=s;return`${o.reverse().join(" > ")}`.toLowerCase()}let Po=!1;const ci="window",Rm="data-scroll-restoration-id";function Pv(r,o){if(!_m)return;const s=_m;if((r.options.scrollRestoration??!1)&&(r.isScrollRestoring=!0),r.isScrollRestorationSetup||!s)return;r.isScrollRestorationSetup=!0,Po=!1;const u=r.options.getScrollRestorationKey||Yv,c=new Map;window.history.scrollRestoration="manual";const d=y=>{if(!(Po||!r.isScrollRestoring))if(y.target===document||y.target===window)c.set(ci,{scrollX:window.scrollX||0,scrollY:window.scrollY||0});else{const p=y.target;c.set(p,{scrollX:p.scrollLeft||0,scrollY:p.scrollTop||0})}},m=y=>{if(!r.isScrollRestoring||!y||c.size===0||!s)return;const p=s.state[y]||={};for(const[h,S]of c){let v;if(h===ci)v=ci;else if(h.isConnected){const A=h.getAttribute(Rm);v=A?`[${Rm}="${A}"]`:Qv(h)}v&&(p[v]=S)}};document.addEventListener("scroll",d,!0),r.subscribe("onBeforeLoad",y=>{m(y.fromLocation?u(y.fromLocation):void 0),c.clear()}),window.addEventListener("pagehide",()=>{m(u(r.stores.resolvedLocation.get()??r.stores.location.get())),s.persist()}),r.subscribe("onRendered",y=>{const p=u(y.toLocation),h=r.options.scrollRestorationBehavior,S=r.options.scrollToTopSelectors;if(c.clear(),!r.resetNextScroll){r.resetNextScroll=!0;return}if(!(typeof r.options.scrollRestoration=="function"&&!r.options.scrollRestoration({location:r.latestLocation}))){Po=!0;try{const v=r.isScrollRestoring?s.state[p]:void 0;let A=!1;if(v)for(const b in v){const _=v[b];if(!cr(_))continue;const{scrollX:C,scrollY:D}=_;if(!(!Number.isFinite(C)||!Number.isFinite(D))){if(b===ci)window.scrollTo({top:D,left:C,behavior:h}),A=!0;else if(b){let z;try{z=document.querySelector(b)}catch{continue}z&&(z.scrollLeft=C,z.scrollTop=D,A=!0)}}}if(!A){const b=r.history.location.hash.slice(1);if(b){const _=window.history.state?.__hashScrollIntoViewOptions??!0;if(_){const C=document.getElementById(b);C&&C.scrollIntoView(_)}}else{const _={top:0,left:0,behavior:h};if(window.scrollTo(_),S)for(const C of S){if(C===ci)continue;const D=typeof C=="function"?C():document.querySelector(C);D&&D.scrollTo(_)}}}}finally{Po=!1}r.isScrollRestoring&&s.set(v=>(v[p]||={},v))}})}function Vv(r,o=String){const s=new URLSearchParams;for(const u in r){const c=r[u];c!==void 0&&s.set(u,o(c))}return s.toString()}function zu(r){return r?r==="false"?!1:r==="true"?!0:+r*0===0&&+r+""===r?+r:r:""}function Iv(r){const o=new URLSearchParams(r),s=Object.create(null);for(const[u,c]of o.entries()){const d=s[u];d==null?s[u]=zu(c):Array.isArray(d)?d.push(zu(c)):s[u]=[d,zu(c)]}return s}const Xv=Fv(JSON.parse),Kv=Zv(JSON.stringify,JSON.parse);function Fv(r){return o=>{o[0]==="?"&&(o=o.substring(1));const s=Iv(o);for(const u in s){const c=s[u];if(typeof c=="string")try{s[u]=r(c)}catch{}}return s}}function Zv(r,o){const s=typeof o=="function";function u(c){if(typeof c=="object"&&c!==null)try{return r(c)}catch{}else if(s&&typeof c=="string")try{return o(c),r(c)}catch{}return c}return c=>{const d=Vv(c,u);return d?`?${d}`:""}}const ya="__root__";function Jv(r){if(r.statusCode=r.statusCode||r.code||307,!r._builtLocation&&!r.reloadDocument&&typeof r.href=="string")try{new URL(r.href),r.reloadDocument=!0}catch{}const o=new Headers(r.headers);r.href&&o.get("Location")===null&&o.set("Location",r.href);const s=new Response(null,{status:r.statusCode,headers:o});if(s.options=r,r.throw)throw s;return s}function pt(r){return r instanceof Response&&!!r.options}function Wv(r){return{input:({url:o})=>{for(const s of r)o=Gu(s,o);return o},output:({url:o})=>{for(let s=r.length-1;s>=0;s--)o=up(r[s],o);return o}}}function $v(r){const o=lp(r.basepath),s=`/${o}`,u=`${s}/`,c=r.caseSensitive?s:s.toLowerCase(),d=r.caseSensitive?u:u.toLowerCase();return{input:({url:m})=>{const y=r.caseSensitive?m.pathname:m.pathname.toLowerCase();return y===c?m.pathname="/":y.startsWith(d)&&(m.pathname=m.pathname.slice(s.length)),m},output:({url:m})=>(m.pathname=Ko(["/",o,m.pathname]),m)}}function Gu(r,o){const s=r?.input?.({url:o});if(s){if(typeof s=="string")return new URL(s);if(s instanceof URL)return s}return o}function up(r,o){const s=r?.output?.({url:o});if(s){if(typeof s=="string")return new URL(s);if(s instanceof URL)return s}return o}function eS(r,o){const{createMutableStore:s,createReadonlyStore:u,batch:c,init:d}=o,m=new Map,y=new Map,p=new Map,h=s(r.status),S=s(r.loadedAt),v=s(r.isLoading),A=s(r.isTransitioning),b=s(r.location),_=s(r.resolvedLocation),C=s(r.statusCode),D=s(r.redirect),z=s([]),q=s([]),Y=s([]),G=u(()=>Lu(m,z.get())),$=u(()=>Lu(y,q.get())),K=u(()=>Lu(p,Y.get())),j=u(()=>z.get()[0]),Q=u(()=>z.get().some(P=>m.get(P)?.get().status==="pending")),F=u(()=>({locationHref:b.get().href,resolvedLocationHref:_.get()?.href,status:h.get()})),oe=u(()=>({status:h.get(),loadedAt:S.get(),isLoading:v.get(),isTransitioning:A.get(),matches:G.get(),location:b.get(),resolvedLocation:_.get(),statusCode:C.get(),redirect:D.get()})),re=gi(64);function ae(P){let ne=re.get(P);return ne||(ne=u(()=>{const Se=z.get();for(const we of Se){const T=m.get(we);if(T&&T.routeId===P)return T.get()}}),re.set(P,ne)),ne}const Ie={status:h,loadedAt:S,isLoading:v,isTransitioning:A,location:b,resolvedLocation:_,statusCode:C,redirect:D,matchesId:z,pendingIds:q,cachedIds:Y,matches:G,pendingMatches:$,cachedMatches:K,firstId:j,hasPending:Q,matchRouteDeps:F,matchStores:m,pendingMatchStores:y,cachedMatchStores:p,__store:oe,getRouteMatchStore:ae,setMatches:ke,setPending:Be,setCached:L};ke(r.matches),d?.(Ie);function ke(P){Nu(P,m,z,s,c)}function Be(P){Nu(P,y,q,s,c)}function L(P){Nu(P,p,Y,s,c)}return Ie}function Lu(r,o){const s=[];for(const u of o){const c=r.get(u);c&&s.push(c.get())}return s}function Nu(r,o,s,u,c){const d=r.map(y=>y.id),m=new Set(d);c(()=>{for(const y of o.keys())m.has(y)||o.delete(y);for(const y of r){const p=o.get(y.id);if(!p){const h=u(y);h.routeId=y.routeId,o.set(y.id,h);continue}p.routeId=y.routeId,p.get()!==y&&p.set(y)}Tv(s.get(),d)||s.set(d)})}const Yu=r=>{if(!r.rendered)return r.rendered=!0,r.onReady?.()},tS=r=>r.stores.matchesId.get().some(o=>r.stores.matchStores.get(o)?.get()._forcePending),is=(r,o)=>!!(r.preload&&!r.router.stores.matchStores.has(o)),va=(r,o,s=!0)=>{const u={...r.router.options.context??{}},c=s?o:o-1;for(let d=0;d<=c;d++){const m=r.matches[d];if(!m)continue;const y=r.router.getMatch(m.id);y&&Object.assign(u,y.__routeContext,y.__beforeLoadContext)}return u},Cm=(r,o)=>{if(!r.matches.length)return;const s=o.routeId,u=r.matches.findIndex(m=>m.routeId===r.router.routeTree.id),c=u>=0?u:0;let d=s?r.matches.findIndex(m=>m.routeId===s):r.firstBadMatchIndex??r.matches.length-1;d<0&&(d=c);for(let m=d;m>=0;m--){const y=r.matches[m];if(r.router.looseRoutesById[y.routeId].options.notFoundComponent)return m}return s?d:c},Xn=(r,o,s)=>{if(!(!pt(s)&&!rt(s)))throw pt(s)&&s.redirectHandled&&!s.options.reloadDocument||(o&&(o._nonReactive.beforeLoadPromise?.resolve(),o._nonReactive.loaderPromise?.resolve(),o._nonReactive.beforeLoadPromise=void 0,o._nonReactive.loaderPromise=void 0,o._nonReactive.error=s,r.updateMatch(o.id,u=>({...u,status:pt(s)?"redirected":rt(s)?"notFound":u.status==="pending"?"success":u.status,context:va(r,o.index),isFetching:!1,error:s})),rt(s)&&!s.routeId&&(s.routeId=o.routeId),o._nonReactive.loadPromise?.resolve()),pt(s)&&(r.rendered=!0,s.options._fromLocation=r.location,s.redirectHandled=!0,s=r.router.resolveRedirect(s))),s},cp=(r,o)=>{const s=r.router.getMatch(o);return!!(!s||s._nonReactive.dehydrated)},xm=(r,o,s)=>{const u=va(r,s);r.updateMatch(o,c=>({...c,context:u}))},fi=(r,o,s,u)=>{const{id:c,routeId:d}=r.matches[o],m=r.router.looseRoutesById[d];if(s instanceof Promise)throw s;s.routerCode=u,r.firstBadMatchIndex??=o,Xn(r,r.router.getMatch(c),s);try{m.options.onError?.(s)}catch(y){s=y,Xn(r,r.router.getMatch(c),s)}r.updateMatch(c,y=>(y._nonReactive.beforeLoadPromise?.resolve(),y._nonReactive.beforeLoadPromise=void 0,y._nonReactive.loadPromise?.resolve(),{...y,error:s,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController})),!r.preload&&!pt(s)&&!rt(s)&&(r.serialError??=s)},fp=(r,o,s,u)=>{if(u._nonReactive.pendingTimeout!==void 0)return;const c=s.options.pendingMs??r.router.options.defaultPendingMs;if(r.onReady&&!is(r,o)&&(s.options.loader||s.options.beforeLoad||hp(s))&&typeof c=="number"&&c!==1/0&&(s.options.pendingComponent??r.router.options?.defaultPendingComponent)){const d=setTimeout(()=>{Yu(r)},c);u._nonReactive.pendingTimeout=d}},nS=(r,o,s)=>{const u=r.router.getMatch(o);if(!u._nonReactive.beforeLoadPromise&&!u._nonReactive.loaderPromise)return;fp(r,o,s,u);const c=()=>{const d=r.router.getMatch(o);d.preload&&(d.status==="redirected"||d.status==="notFound")&&Xn(r,d,d.error)};return u._nonReactive.beforeLoadPromise?u._nonReactive.beforeLoadPromise.then(c):c()},aS=(r,o,s,u)=>{const c=r.router.getMatch(o);let d=c._nonReactive.loadPromise;c._nonReactive.loadPromise=fr(()=>{d?.resolve(),d=void 0});const{paramsError:m,searchError:y}=c;m&&fi(r,s,m,"PARSE_PARAMS"),y&&fi(r,s,y,"VALIDATE_SEARCH"),fp(r,o,u,c);const p=new AbortController;let h=!1;const S=()=>{h||(h=!0,r.updateMatch(o,G=>({...G,isFetching:"beforeLoad",fetchCount:G.fetchCount+1,abortController:p})))},v=()=>{c._nonReactive.beforeLoadPromise?.resolve(),c._nonReactive.beforeLoadPromise=void 0,r.updateMatch(o,G=>({...G,isFetching:!1}))};if(!u.options.beforeLoad){r.router.batch(()=>{S(),v()});return}c._nonReactive.beforeLoadPromise=fr();const A={...va(r,s,!1),...c.__routeContext},{search:b,params:_,cause:C}=c,D=is(r,o),z={search:b,abortController:p,params:_,preload:D,context:A,location:r.location,navigate:G=>r.router.navigate({...G,_fromLocation:r.location}),buildLocation:r.router.buildLocation,cause:D?"preload":C,matches:r.matches,routeId:u.id,...r.router.options.additionalContext},q=G=>{if(G===void 0){r.router.batch(()=>{S(),v()});return}(pt(G)||rt(G))&&(S(),fi(r,s,G,"BEFORE_LOAD")),r.router.batch(()=>{S(),r.updateMatch(o,$=>({...$,__beforeLoadContext:G})),v()})};let Y;try{if(Y=u.options.beforeLoad(z),pi(Y))return S(),Y.catch(G=>{fi(r,s,G,"BEFORE_LOAD")}).then(q)}catch(G){S(),fi(r,s,G,"BEFORE_LOAD")}q(Y)},rS=(r,o)=>{const{id:s,routeId:u}=r.matches[o],c=r.router.looseRoutesById[u],d=()=>y(),m=()=>aS(r,s,o,c),y=()=>{if(cp(r,s))return;const p=nS(r,s,c);return pi(p)?p.then(m):m()};return d()},iS=(r,o,s)=>{const u=r.router.getMatch(o);if(!u||!s.options.head&&!s.options.scripts&&!s.options.headers)return;const c={ssr:r.router.options.ssr,matches:r.matches,match:u,params:u.params,loaderData:u.loaderData};return Promise.all([s.options.head?.(c),s.options.scripts?.(c),s.options.headers?.(c)]).then(([d,m,y])=>({meta:d?.meta,links:d?.links,headScripts:d?.scripts,headers:y,scripts:m,styles:d?.styles}))},dp=(r,o,s,u,c)=>{const d=o[u-1],{params:m,loaderDeps:y,abortController:p,cause:h}=r.router.getMatch(s),S=va(r,u),v=is(r,s);return{params:m,deps:y,preload:!!v,parentMatchPromise:d,abortController:p,context:S,location:r.location,navigate:A=>r.router.navigate({...A,_fromLocation:r.location}),cause:v?"preload":h,route:c,...r.router.options.additionalContext}},Om=async(r,o,s,u,c)=>{try{const d=r.router.getMatch(s);try{(!(ep??r.router.isServer)||d.ssr===!0)&&yi(c);const m=c.options.loader,y=typeof m=="function"?m:m?.handler,p=y?.(dp(r,o,s,u,c)),h=!!y&&pi(p);if((h||c._lazyPromise||c._componentsPromise||c.options.head||c.options.scripts||c.options.headers||d._nonReactive.minPendingPromise)&&r.updateMatch(s,v=>({...v,isFetching:"loader"})),y){const v=h?await p:p;Xn(r,r.router.getMatch(s),v),v!==void 0&&r.updateMatch(s,A=>({...A,loaderData:v}))}c._lazyPromise&&await c._lazyPromise;const S=d._nonReactive.minPendingPromise;S&&await S,c._componentsPromise&&await c._componentsPromise,r.updateMatch(s,v=>({...v,error:void 0,context:va(r,u),status:"success",isFetching:!1,updatedAt:Date.now()}))}catch(m){let y=m;if(y?.name==="AbortError"){if(d.abortController.signal.aborted){d._nonReactive.loaderPromise?.resolve(),d._nonReactive.loaderPromise=void 0;return}r.updateMatch(s,h=>({...h,status:h.status==="pending"?"success":h.status,isFetching:!1,context:va(r,u)}));return}const p=d._nonReactive.minPendingPromise;p&&await p,rt(m)&&await c.options.notFoundComponent?.preload?.(),Xn(r,r.router.getMatch(s),m);try{c.options.onError?.(m)}catch(h){y=h,Xn(r,r.router.getMatch(s),h)}!pt(y)&&!rt(y)&&await yi(c,["errorComponent"]),r.updateMatch(s,h=>({...h,error:y,context:va(r,u),status:"error",isFetching:!1}))}}catch(d){const m=r.router.getMatch(s);m&&(m._nonReactive.loaderPromise=void 0),Xn(r,m,d)}},oS=async(r,o,s)=>{async function u(b,_,C,D,z){const q=Date.now()-_.updatedAt,Y=b?z.options.preloadStaleTime??r.router.options.defaultPreloadStaleTime??3e4:z.options.staleTime??r.router.options.defaultStaleTime??0,G=z.options.shouldReload,$=typeof G=="function"?G(dp(r,o,c,s,z)):G,{status:K,invalid:j}=D,Q=q>=Y&&(!!r.forceStaleReload||D.cause==="enter"||C!==void 0&&C!==D.id);m=K==="success"&&(j||($??Q)),b&&z.options.preload===!1||(m&&!r.sync&&S?(y=!0,(async()=>{try{await Om(r,o,c,s,z);const F=r.router.getMatch(c);F._nonReactive.loaderPromise?.resolve(),F._nonReactive.loadPromise?.resolve(),F._nonReactive.loaderPromise=void 0,F._nonReactive.loadPromise=void 0}catch(F){pt(F)&&await r.router.navigate(F.options)}})()):K!=="success"||m?await Om(r,o,c,s,z):xm(r,c,s))}const{id:c,routeId:d}=r.matches[s];let m=!1,y=!1;const p=r.router.looseRoutesById[d],h=p.options.loader,S=((typeof h=="function"?void 0:h?.staleReloadMode)??r.router.options.defaultStaleReloadMode)!=="blocking";if(cp(r,c)){if(!r.router.getMatch(c))return r.matches[s];xm(r,c,s)}else{const b=r.router.getMatch(c),_=r.router.stores.matchesId.get()[s],C=(_&&r.router.stores.matchStores.get(_)||null)?.routeId===d?_:r.router.stores.matches.get().find(z=>z.routeId===d)?.id,D=is(r,c);if(b._nonReactive.loaderPromise){if(b.status==="success"&&!r.sync&&!b.preload&&S)return b;await b._nonReactive.loaderPromise;const z=r.router.getMatch(c),q=z._nonReactive.error||z.error;q&&Xn(r,z,q),z.status==="pending"&&await u(D,b,C,z,p)}else{const z=D&&!r.router.stores.matchStores.has(c),q=r.router.getMatch(c);q._nonReactive.loaderPromise=fr(),z!==q.preload&&r.updateMatch(c,Y=>({...Y,preload:z})),await u(D,b,C,q,p)}}const v=r.router.getMatch(c);y||(v._nonReactive.loaderPromise?.resolve(),v._nonReactive.loadPromise?.resolve(),v._nonReactive.loadPromise=void 0),clearTimeout(v._nonReactive.pendingTimeout),v._nonReactive.pendingTimeout=void 0,y||(v._nonReactive.loaderPromise=void 0),v._nonReactive.dehydrated=void 0;const A=y?v.isFetching:!1;return A!==v.isFetching||v.invalid!==!1?(r.updateMatch(c,b=>({...b,isFetching:A,invalid:!1})),r.router.getMatch(c)):v};async function Mm(r){const o=r,s=[];tS(o.router)&&Yu(o);let u;for(let A=0;A<o.matches.length;A++){try{const b=rS(o,A);pi(b)&&await b}catch(b){if(pt(b))throw b;if(rt(b))u=b;else if(!o.preload)throw b;break}if(o.serialError||o.firstBadMatchIndex!=null)break}const c=o.firstBadMatchIndex??o.matches.length,d=u&&!o.preload?Cm(o,u):void 0,m=u&&o.preload?0:d!==void 0?Math.min(d+1,c):c;let y,p;for(let A=0;A<m;A++)s.push(oS(o,s,A));try{await Promise.all(s)}catch{const A=await Promise.allSettled(s);for(const b of A){if(b.status!=="rejected")continue;const _=b.reason;if(pt(_))throw _;rt(_)?y??=_:p??=_}if(p!==void 0)throw p}const h=y??(u&&!o.preload?u:void 0);let S=o.firstBadMatchIndex!==void 0?o.firstBadMatchIndex:o.matches.length-1;if(!h&&u&&o.preload)return o.matches;if(h){const A=Cm(o,h);A===void 0&&yn();const b=o.matches[A],_=o.router.looseRoutesById[b.routeId],C=o.router.options?.defaultNotFoundComponent;!_.options.notFoundComponent&&C&&(_.options.notFoundComponent=C),h.routeId=b.routeId;const D=b.routeId===o.router.routeTree.id;o.updateMatch(b.id,z=>({...z,...D?{status:"success",globalNotFound:!0,error:void 0}:{status:"notFound",error:h},isFetching:!1})),S=A,await yi(_,["notFoundComponent"])}else if(!o.preload){const A=o.matches[0];A.globalNotFound||o.router.getMatch(A.id)?.globalNotFound&&o.updateMatch(A.id,b=>({...b,globalNotFound:!1,error:void 0}))}if(o.serialError&&o.firstBadMatchIndex!==void 0){const A=o.router.looseRoutesById[o.matches[o.firstBadMatchIndex].routeId];await yi(A,["errorComponent"])}for(let A=0;A<=S;A++){const{id:b,routeId:_}=o.matches[A],C=o.router.looseRoutesById[_];try{const D=iS(o,b,C);if(D){const z=await D;o.updateMatch(b,q=>({...q,...z}))}}catch(D){console.error(`Error executing head for route ${_}:`,D)}}const v=Yu(o);if(pi(v)&&await v,h)throw h;if(o.serialError&&!o.preload&&!o.onReady)throw o.serialError;return o.matches}function Dm(r,o){const s=o.map(u=>r.options[u]?.preload?.()).filter(Boolean);if(s.length!==0)return Promise.all(s)}function yi(r,o=Fo){!r._lazyLoaded&&r._lazyPromise===void 0&&(r.lazyFn?r._lazyPromise=r.lazyFn().then(u=>{const{id:c,...d}=u.options;Object.assign(r.options,d),r._lazyLoaded=!0,r._lazyPromise=void 0}):r._lazyLoaded=!0);const s=()=>r._componentsLoaded?void 0:o===Fo?(()=>{if(r._componentsPromise===void 0){const u=Dm(r,Fo);u?r._componentsPromise=u.then(()=>{r._componentsLoaded=!0,r._componentsPromise=void 0}):r._componentsLoaded=!0}return r._componentsPromise})():Dm(r,o);return r._lazyPromise?r._lazyPromise.then(s):s()}function hp(r){for(const o of Fo)if(r.options[o]?.preload)return!0;return!1}const Fo=["component","errorComponent","pendingComponent","notFoundComponent"];var Kn="__TSR_index",km="popstate",zm="beforeunload";function sS(r){let o=r.getLocation();const s=new Set,u=m=>{o=r.getLocation(),s.forEach(y=>y({location:o,action:m}))},c=m=>{r.notifyOnIndexChange??!0?u(m):o=r.getLocation()},d=async({task:m,navigateOpts:y,...p})=>{if(y?.ignoreBlocker??!1){m();return}const h=r.getBlockers?.()??[],S=p.type==="PUSH"||p.type==="REPLACE";if(typeof document<"u"&&h.length&&S)for(const v of h){const A=es(p.path,p.state);if(await v.blockerFn({currentLocation:o,nextLocation:A,action:p.type})){r.onBlocked?.();return}}m()};return{get location(){return o},get length(){return r.getLength()},subscribers:s,subscribe:m=>(s.add(m),()=>{s.delete(m)}),push:(m,y,p)=>{const h=o.state[Kn];y=Lm(h+1,y),d({task:()=>{r.pushState(m,y),u({type:"PUSH"})},navigateOpts:p,type:"PUSH",path:m,state:y})},replace:(m,y,p)=>{const h=o.state[Kn];y=Lm(h,y),d({task:()=>{r.replaceState(m,y),u({type:"REPLACE"})},navigateOpts:p,type:"REPLACE",path:m,state:y})},go:(m,y)=>{d({task:()=>{r.go(m),c({type:"GO",index:m})},navigateOpts:y,type:"GO"})},back:m=>{d({task:()=>{r.back(m?.ignoreBlocker??!1),c({type:"BACK"})},navigateOpts:m,type:"BACK"})},forward:m=>{d({task:()=>{r.forward(m?.ignoreBlocker??!1),c({type:"FORWARD"})},navigateOpts:m,type:"FORWARD"})},canGoBack:()=>o.state[Kn]!==0,createHref:m=>r.createHref(m),block:m=>{if(!r.setBlockers)return()=>{};const y=r.getBlockers?.()??[];return r.setBlockers([...y,m]),()=>{const p=r.getBlockers?.()??[];r.setBlockers?.(p.filter(h=>h!==m))}},flush:()=>r.flush?.(),destroy:()=>r.destroy?.(),notify:u}}function Lm(r,o){o||(o={});const s=$u();return{...o,key:s,__TSR_key:s,[Kn]:r}}function lS(r){const o=typeof document<"u"?window:void 0,s=o.history.pushState,u=o.history.replaceState;let c=[];const d=()=>c,m=Q=>c=Q,y=(Q=>Q),p=(()=>es(`${o.location.pathname}${o.location.search}${o.location.hash}`,o.history.state));if(!o.history.state?.__TSR_key&&!o.history.state?.key){const Q=$u();o.history.replaceState({[Kn]:0,key:Q,__TSR_key:Q},"")}let h=p(),S,v=!1,A=!1,b=!1,_=!1;const C=()=>h;let D,z;const q=()=>{D&&(j._ignoreSubscribers=!0,(D.isPush?o.history.pushState:o.history.replaceState)(D.state,"",D.href),j._ignoreSubscribers=!1,D=void 0,z=void 0,S=void 0)},Y=(Q,F,oe)=>{const re=y(F);z||(S=h),h=es(F,oe),D={href:re,state:oe,isPush:D?.isPush||Q==="push"},z||(z=Promise.resolve().then(()=>q()))},G=Q=>{h=p(),j.notify({type:Q})},$=async()=>{if(A){A=!1;return}const Q=p(),F=Q.state[Kn]-h.state[Kn],oe=F===1,re=F===-1,ae=!oe&&!re||v;v=!1;const Ie=ae?"GO":re?"BACK":"FORWARD",ke=ae?{type:"GO",index:F}:{type:re?"BACK":"FORWARD"};if(b)b=!1;else{const Be=d();if(typeof document<"u"&&Be.length){for(const L of Be)if(await L.blockerFn({currentLocation:h,nextLocation:Q,action:Ie})){A=!0,o.history.go(1),j.notify(ke);return}}}h=p(),j.notify(ke)},K=Q=>{if(_){_=!1;return}let F=!1;const oe=d();if(typeof document<"u"&&oe.length)for(const re of oe){const ae=re.enableBeforeUnload??!0;if(ae===!0){F=!0;break}if(typeof ae=="function"&&ae()===!0){F=!0;break}}if(F)return Q.preventDefault(),Q.returnValue=""},j=sS({getLocation:C,getLength:()=>o.history.length,pushState:(Q,F)=>Y("push",Q,F),replaceState:(Q,F)=>Y("replace",Q,F),back:Q=>(Q&&(b=!0),_=!0,o.history.back()),forward:Q=>{Q&&(b=!0),_=!0,o.history.forward()},go:Q=>{v=!0,o.history.go(Q)},createHref:Q=>y(Q),flush:q,destroy:()=>{o.history.pushState=s,o.history.replaceState=u,o.removeEventListener(zm,K,{capture:!0}),o.removeEventListener(km,$)},onBlocked:()=>{S&&h!==S&&(h=S)},getBlockers:d,setBlockers:m,notifyOnIndexChange:!1});return o.addEventListener(zm,K,{capture:!0}),o.addEventListener(km,$),o.history.pushState=function(...Q){const F=s.apply(o.history,Q);return j._ignoreSubscribers||G("PUSH"),F},o.history.replaceState=function(...Q){const F=u.apply(o.history,Q);return j._ignoreSubscribers||G("REPLACE"),F},j}function uS(r){let o=r.replace(/[\x00-\x1f\x7f]/g,"");return o.startsWith("//")&&(o="/"+o.replace(/^\/+/,"")),o}function es(r,o){const s=uS(r),u=s.indexOf("#"),c=s.indexOf("?"),d=$u();return{href:s,pathname:s.substring(0,u>0?c>0?Math.min(u,c):u:c>0?c:s.length),hash:u>-1?s.substring(u):"",search:c>-1?s.slice(c,u===-1?void 0:u):"",state:o||{[Kn]:0,key:d,__TSR_key:d}}}function $u(){return(Math.random()+1).toString(36).substring(7)}function ur(r,o){const s=o,u=r;return{fromLocation:s,toLocation:u,pathChanged:s?.pathname!==u.pathname,hrefChanged:s?.href!==u.href,hashChanged:s?.hash!==u.hash}}var cS=class{constructor(r,o){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.isScrollRestoring=!1,this.isScrollRestorationSetup=!1,this.routeBranchCache=new WeakMap,this.startTransition=s=>s(),this.update=s=>{const u=this.options,c=this.basepath??u?.basepath??"/",d=this.basepath===void 0,m=u?.rewrite;if(this.options={...u,...s},this.isServer=this.options.isServer??typeof document>"u",this.protocolAllowlist=new Set(this.options.protocolAllowlist),this.options.pathParamsAllowedCharacters&&(this.pathParamsDecoder=Bv(this.options.pathParamsAllowedCharacters)),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.options.history?this.history=this.options.history:this.history=lS()),this.origin=this.options.origin,this.origin||(window?.origin&&window.origin!=="null"?this.origin=window.origin:this.origin="http://localhost"),this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let S;this.resolvePathCache=gi(1e3),S=this.buildRouteTree(),this.setRoutes(S)}if(!this.stores&&this.latestLocation){const S=this.getStoreConfig(this);this.batch=S.batch,this.stores=eS(dS(this.latestLocation),S),Pv(this)}let y=!1;const p=this.options.basepath??"/",h=this.options.rewrite;if(d||c!==p||m!==h){this.basepath=p;const S=[],v=lp(p);v&&v!=="/"&&S.push($v({basepath:p})),h&&S.push(h),this.rewrite=S.length===0?void 0:S.length===1?S[0]:Wv(S),this.history&&this.updateLatestLocation(),y=!0}y&&this.stores&&this.stores.location.set(this.latestLocation),typeof window<"u"&&"CSS"in window&&typeof window.CSS?.supports=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a))"))},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{const s=Dv(this.routeTree,this.options.caseSensitive,(u,c)=>{u.init({originalIndex:c})});return this.options.routeMasks&&Rv(this.options.routeMasks,s.processedTree),s},this.subscribe=(s,u)=>{const c={eventType:s,fn:u};return this.subscribers.add(c),()=>{this.subscribers.delete(c)}},this.emit=s=>{this.subscribers.forEach(u=>{u.eventType===s.type&&u.fn(s)})},this.parseLocation=(s,u)=>{const c=({pathname:p,search:h,hash:S,href:v,state:A})=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)){const z=this.options.parseSearch(h),q=this.options.stringifySearch(z);return{href:p+q+S,publicHref:p+q+S,pathname:ui(p).path,external:!1,searchStr:q,search:ma(u?.search,z),hash:ui(S.slice(1)).path,state:pa(u?.state,A)}}const b=new URL(v,this.origin),_=Gu(this.rewrite,b),C=this.options.parseSearch(_.search),D=this.options.stringifySearch(C);return _.search=D,{href:_.href.replace(_.origin,""),publicHref:v,pathname:ui(_.pathname).path,external:!!this.rewrite&&_.origin!==this.origin,searchStr:D,search:ma(u?.search,C),hash:ui(_.hash.slice(1)).path,state:pa(u?.state,A)}},d=c(s),{__tempLocation:m,__tempKey:y}=d.state;if(m&&(!y||y===this.tempLocationKey)){const p=c(m);return p.state.key=d.state.key,p.state.__TSR_key=d.state.__TSR_key,delete p.state.__tempLocation,{...p,maskedLocation:d}}return d},this.resolvePathWithBase=(s,u)=>Uv({base:s,to:u.includes("//")?Wu(u):u,trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(s,u,c)=>typeof s=="string"?this.matchRoutesInternal({pathname:s,search:u},c):this.matchRoutesInternal(s,u),this.getMatchedRoutes=s=>hS({pathname:s,routesById:this.routesById,processedTree:this.processedTree}),this.cancelMatch=s=>{const u=this.getMatch(s);u&&(u.abortController.abort(),clearTimeout(u._nonReactive.pendingTimeout),u._nonReactive.pendingTimeout=void 0)},this.cancelMatches=()=>{this.stores.pendingIds.get().forEach(s=>{this.cancelMatch(s)}),this.stores.matchesId.get().forEach(s=>{if(this.stores.pendingMatchStores.has(s))return;const u=this.stores.matchStores.get(s)?.get();u&&(u.status==="pending"||u.isFetching==="loader")&&this.cancelMatch(s)})},this.buildLocation=s=>{const u=(d={})=>{const m=d._fromLocation||this.pendingBuiltLocation||this.latestLocation,y=this.matchRoutesLightweight(m);d.from;const p=d.unsafeRelative==="path"?m.pathname:d.from??y.fullPath,h=d.to?`${d.to}`:void 0,S=y.search,v=Object.assign(Object.create(null),y.params),A=h?.charCodeAt(0)===47?"/":this.resolvePathWithBase(p,"."),b=h?this.resolvePathWithBase(A,h):A,_=d.params===!1||d.params===null?Object.create(null):(d.params??!0)===!0?v:Object.assign(v,Vn(d.params,v)),C=this.routesByPath[gn(b)];let D;if(C)D=this.getRouteBranch(C);else if(b.includes("$"))D=[];else{const re=this.getMatchedRoutes(b);D=re.matchedRoutes,this.options.notFoundRoute&&(!re.foundRoute||re.foundRoute.path!=="/"&&re.routeParams["**"])&&(D=[...D,this.options.notFoundRoute])}if(D.length&&np(_))for(const re of D){const ae=re.options.params?.stringify??re.options.stringifyParams;if(ae)try{Object.assign(_,ae(_))}catch{}}const z=s.leaveParams?b:ui(Em({path:b,params:_,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath).path;let q=S;if(s._includeValidateSearch&&this.options.search?.strict){const re={};D.forEach(ae=>{if(ae.options.validateSearch)try{Object.assign(re,Zo(ae.options.validateSearch,{...re,...q}))}catch{}}),q=re}q=mS({search:q,dest:d,destRoutes:D,_includeValidateSearch:s._includeValidateSearch}),q=ma(S,q);const Y=this.options.stringifySearch(q),G=d.hash===!0?m.hash:d.hash?Vn(d.hash,m.hash):void 0,$=G?`#${G}`:"";let K=d.state===!0?m.state:d.state?Vn(d.state,m.state):{};K=pa(m.state,K);const j=`${z}${Y}${$}`;let Q,F,oe=!1;if(this.rewrite){const re=new URL(j,this.origin),ae=up(this.rewrite,re);Q=re.href.replace(re.origin,""),ae.origin!==this.origin?(F=ae.href,oe=!0):F=ae.pathname+ae.search+ae.hash}else Q=Ev(j),F=Q;return{publicHref:F,href:Q,pathname:z,search:q,searchStr:Y,state:K,hash:G??"",external:oe,unmaskOnReload:d.unmaskOnReload}},c=(d={},m)=>{const y=u(d);let p=m?u(m):void 0;if(!p){const h=Object.create(null);if(this.options.routeMasks){const S=Cv(y.pathname,this.processedTree);if(S){Object.assign(h,S.rawParams);const{from:v,params:A,...b}=S.route,_=A===!1||A===null?Object.create(null):(A??!0)===!0?h:Object.assign(h,Vn(A,h));m={from:s.from,...b,params:_},p=u(m)}}}return p&&(y.maskedLocation=p),y};return s.mask?c(s,{from:s.from,...s.mask}):c(s)},this.commitLocation=async({viewTransition:s,ignoreBlocker:u,...c})=>{const d=()=>{const p=["key","__TSR_key","__TSR_index","__hashScrollIntoViewOptions"];p.forEach(S=>{c.state[S]=this.latestLocation.state[S]});const h=Nt(c.state,this.latestLocation.state);return p.forEach(S=>{delete c.state[S]}),h},m=gn(this.latestLocation.href)===gn(c.href);let y=this.commitLocationPromise;if(this.commitLocationPromise=fr(()=>{y?.resolve(),y=void 0}),m&&d())this.load();else{let{maskedLocation:p,hashScrollIntoView:h,...S}=c;p&&(S={...p,state:{...p.state,__tempKey:void 0,__tempLocation:{...S,search:S.searchStr,state:{...S.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(S.unmaskOnReload??this.options.unmaskOnReload??!1)&&(S.state.__tempKey=this.tempLocationKey)),S.state.__hashScrollIntoViewOptions=h??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=s,this.history[c.replace?"replace":"push"](S.publicHref,S.state,{ignoreBlocker:u})}return this.resetNextScroll=c.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:s,resetScroll:u,hashScrollIntoView:c,viewTransition:d,ignoreBlocker:m,href:y,...p}={})=>{if(y){const v=this.history.location.state.__TSR_index,A=es(y,{__TSR_index:s?v:v+1}),b=new URL(A.pathname,this.origin);p.to=Gu(this.rewrite,b).pathname,p.search=this.options.parseSearch(A.search),p.hash=A.hash.slice(1)}const h=this.buildLocation({...p,_includeValidateSearch:!0});this.pendingBuiltLocation=h;const S=this.commitLocation({...h,viewTransition:d,replace:s,resetScroll:u,hashScrollIntoView:c,ignoreBlocker:m});return Promise.resolve().then(()=>{this.pendingBuiltLocation===h&&(this.pendingBuiltLocation=void 0)}),S},this.navigate=async({to:s,reloadDocument:u,href:c,publicHref:d,...m})=>{let y=!1;if(c)try{new URL(`${c}`),y=!0}catch{}if(y&&!u&&(u=!0),u){if(s!==void 0||!c){const h=this.buildLocation({to:s,...m});c=c??h.publicHref,d=d??h.publicHref}const p=!y&&d?d:c;if(Wo(p,this.protocolAllowlist))return Promise.resolve();if(!m.ignoreBlocker){const h=this.history.getBlockers?.()??[];for(const S of h)if(S?.blockerFn&&await S.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:"PUSH"}))return Promise.resolve()}return m.replace?window.location.replace(p):window.location.href=p,Promise.resolve()}return this.buildAndCommitLocation({...m,href:c,to:s,_isNavigate:!0})},this.beforeLoad=()=>{this.cancelMatches(),this.updateLatestLocation();const s=this.matchRoutes(this.latestLocation),u=this.stores.cachedMatches.get().filter(c=>!s.some(d=>d.id===c.id));this.batch(()=>{this.stores.status.set("pending"),this.stores.statusCode.set(200),this.stores.isLoading.set(!0),this.stores.location.set(this.latestLocation),this.stores.setPending(s),this.stores.setCached(u)})},this.load=async s=>{let u,c,d;const m=this.stores.resolvedLocation.get()??this.stores.location.get();for(d=new Promise(p=>{this.startTransition(async()=>{try{this.beforeLoad();const h=this.latestLocation,S=ur(h,this.stores.resolvedLocation.get());this.stores.redirect.get()||this.emit({type:"onBeforeNavigate",...S}),this.emit({type:"onBeforeLoad",...S}),await Mm({router:this,sync:s?.sync,forceStaleReload:m.href===h.href,matches:this.stores.pendingMatches.get(),location:h,updateMatch:this.updateMatch,onReady:async()=>{this.startTransition(()=>{this.startViewTransition(async()=>{let v=null,A=null,b=null,_=null;this.batch(()=>{const C=this.stores.pendingMatches.get(),D=C.length,z=this.stores.matches.get();v=D?z.filter(G=>!this.stores.pendingMatchStores.has(G.id)):null;const q=new Set;for(const G of this.stores.pendingMatchStores.values())G.routeId&&q.add(G.routeId);const Y=new Set;for(const G of this.stores.matchStores.values())G.routeId&&Y.add(G.routeId);A=D?z.filter(G=>!q.has(G.routeId)):null,b=D?C.filter(G=>!Y.has(G.routeId)):null,_=D?C.filter(G=>Y.has(G.routeId)):z,this.stores.isLoading.set(!1),this.stores.loadedAt.set(Date.now()),D&&(this.stores.setMatches(C),this.stores.setPending([]),this.stores.setCached([...this.stores.cachedMatches.get(),...v.filter(G=>G.status!=="error"&&G.status!=="notFound"&&G.status!=="redirected")]),this.clearExpiredCache())});for(const[C,D]of[[A,"onLeave"],[b,"onEnter"],[_,"onStay"]])if(C)for(const z of C)this.looseRoutesById[z.routeId].options[D]?.(z)})})}})}catch(h){pt(h)?(u=h,this.navigate({...u.options,replace:!0,ignoreBlocker:!0})):rt(h)&&(c=h);const S=u?u.status:c?404:this.stores.matches.get().some(v=>v.status==="error")?500:200;this.batch(()=>{this.stores.statusCode.set(S),this.stores.redirect.set(u)})}this.latestLoadPromise===d&&(this.commitLocationPromise?.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),p()})}),this.latestLoadPromise=d,await d;this.latestLoadPromise&&d!==this.latestLoadPromise;)await this.latestLoadPromise;let y;this.hasNotFoundMatch()?y=404:this.stores.matches.get().some(p=>p.status==="error")&&(y=500),y!==void 0&&this.stores.statusCode.set(y)},this.startViewTransition=s=>{const u=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,u&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let c;if(typeof u=="object"&&this.isViewTransitionTypesSupported){const d=this.latestLocation,m=this.stores.resolvedLocation.get(),y=typeof u.types=="function"?u.types(ur(d,m)):u.types;if(y===!1){s();return}c={update:s,types:y}}else c=s;document.startViewTransition(c)}else s()},this.updateMatch=(s,u)=>{this.startTransition(()=>{const c=this.stores.pendingMatchStores.get(s);if(c){c.set(u);return}const d=this.stores.matchStores.get(s);if(d){d.set(u);return}const m=this.stores.cachedMatchStores.get(s);if(m){const y=u(m.get());y.status==="redirected"?this.stores.cachedMatchStores.delete(s)&&this.stores.cachedIds.set(p=>p.filter(h=>h!==s)):m.set(y)}})},this.getMatch=s=>this.stores.cachedMatchStores.get(s)?.get()??this.stores.pendingMatchStores.get(s)?.get()??this.stores.matchStores.get(s)?.get(),this.invalidate=s=>{const u=c=>s?.filter?.(c)??!0?{...c,invalid:!0,...s?.forcePending||c.status==="error"||c.status==="notFound"?{status:"pending",error:void 0}:void 0}:c;return this.batch(()=>{this.stores.setMatches(this.stores.matches.get().map(u)),this.stores.setCached(this.stores.cachedMatches.get().map(u)),this.stores.setPending(this.stores.pendingMatches.get().map(u))}),this.shouldViewTransition=!1,this.load({sync:s?.sync})},this.getParsedLocationHref=s=>s.publicHref||"/",this.resolveRedirect=s=>{const u=s.headers.get("Location");if(!s.options.href||s.options._builtLocation){const c=s.options._builtLocation??this.buildLocation(s.options),d=this.getParsedLocationHref(c);s.options.href=d,s.headers.set("Location",d)}else if(u)try{const c=new URL(u);if(this.origin&&c.origin===this.origin){const d=c.pathname+c.search+c.hash;s.options.href=d,s.headers.set("Location",d)}}catch{}if(s.options.href&&!s.options._builtLocation&&Wo(s.options.href,this.protocolAllowlist))throw new Error("Redirect blocked: unsafe protocol");return s.headers.get("Location")||s.headers.set("Location",s.options.href),s},this.clearCache=s=>{const u=s?.filter;u!==void 0?this.stores.setCached(this.stores.cachedMatches.get().filter(c=>!u(c))):this.stores.setCached([])},this.clearExpiredCache=()=>{const s=Date.now(),u=c=>{const d=this.looseRoutesById[c.routeId];if(!d.options.loader)return!0;const m=(c.preload?d.options.preloadGcTime??this.options.defaultPreloadGcTime:d.options.gcTime??this.options.defaultGcTime)??300*1e3;return c.status==="error"?!0:s-c.updatedAt>=m};this.clearCache({filter:u})},this.loadRouteChunk=yi,this.preloadRoute=async s=>{const u=s._builtLocation??this.buildLocation(s);let c=this.matchRoutes(u,{throwOnError:!0,preload:!0,dest:s});const d=new Set([...this.stores.matchesId.get(),...this.stores.pendingIds.get()]),m=new Set([...d,...this.stores.cachedIds.get()]),y=c.filter(p=>!m.has(p.id));if(y.length){const p=this.stores.cachedMatches.get();this.stores.setCached([...p,...y])}try{return c=await Mm({router:this,matches:c,location:u,preload:!0,updateMatch:(p,h)=>{d.has(p)?c=c.map(S=>S.id===p?h(S):S):this.updateMatch(p,h)}}),c}catch(p){if(pt(p))return p.options.reloadDocument?void 0:await this.preloadRoute({...p.options,_fromLocation:u});rt(p)||console.error(p);return}},this.matchRoute=(s,u)=>{const c={...s,to:s.to?this.resolvePathWithBase(s.from||"",s.to):void 0,params:s.params||{},leaveParams:!0},d=this.buildLocation(c);if(u?.pending&&this.stores.status.get()!=="pending")return!1;const m=(u?.pending===void 0?!this.stores.isLoading.get():u.pending)?this.latestLocation:this.stores.resolvedLocation.get()||this.stores.location.get(),y=xv(d.pathname,u?.caseSensitive??!1,u?.fuzzy??!1,m.pathname,this.processedTree);return!y||s.params&&!Nt(y.rawParams,s.params,{partial:!0})?!1:u?.includeSearch??!0?Nt(m.search,d.search,{partial:!0})?y.rawParams:!1:y.rawParams},this.hasNotFoundMatch=()=>this.stores.matches.get().some(s=>s.status==="notFound"||s.globalNotFound),this.getStoreConfig=o,this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...r,caseSensitive:r.caseSensitive??!1,notFoundMode:r.notFoundMode??"fuzzy",stringifySearch:r.stringifySearch??Kv,parseSearch:r.parseSearch??Xv,protocolAllowlist:r.protocolAllowlist??Sv}),typeof document<"u"&&(self.__TSR_ROUTER__=this)}isShell(){return!!this.options.isShell}isPrerendering(){return!!this.options.isPrerendering}get state(){return this.stores.__store.get()}setRoutes({routesById:r,routesByPath:o,processedTree:s}){this.routesById=r,this.routesByPath=o,this.processedTree=s;const u=this.options.notFoundRoute;u&&(u.init({originalIndex:99999999999}),this.routesById[u.id]=u)}getRouteBranch(r){let o=this.routeBranchCache.get(r);return o||(o=op(r),this.routeBranchCache.set(r,o)),o}get looseRoutesById(){return this.routesById}getParentContext(r){return r?.id?r.context??this.options.context??void 0:this.options.context??void 0}matchRoutesInternal(r,o){const s=this.getMatchedRoutes(r.pathname),{foundRoute:u,routeParams:c}=s;let{matchedRoutes:d}=s,m=!1;(u?u.path!=="/"&&c["**"]:gn(r.pathname))&&(this.options.notFoundRoute?d=[...d,this.options.notFoundRoute]:m=!0);const y=m?gS(this.options.notFoundMode,d):void 0,p=new Array(d.length),h=new Map;for(const S of this.stores.matchStores.values())S.routeId&&h.set(S.routeId,S.get());for(let S=0;S<d.length;S++){const v=d[S],A=p[S-1];let b,_,C;{const ae=A?.search??r.search,Ie=A?._strictSearch??void 0;try{const ke=Zo(v.options.validateSearch,{...ae})??void 0;b={...ae,...ke},_={...Ie,...ke},C=void 0}catch(ke){let Be=ke;if(ke instanceof ts||(Be=new ts(ke.message,{cause:ke})),o?.throwOnError)throw Be;b=ae,_={},C=Be}}const D=v.options.loaderDeps?.({search:b})??"",z=D?JSON.stringify(D):"",{interpolatedPath:q,usedParams:Y}=Em({path:v.fullPath,params:c,decoder:this.pathParamsDecoder,server:this.isServer}),G=v.id+q+z,$=this.getMatch(G),K=h.get(v.id),j=$?._strictParams??Y;let Q;if(!$)try{Nm(v,j)}catch(ae){if(rt(ae)||pt(ae)?Q=ae:Q=new fS(ae.message,{cause:ae}),o?.throwOnError)throw Q}Object.assign(c,j);const F=K?"stay":"enter";let oe;if($)oe={...$,cause:F,params:K?.params??c,_strictParams:j,search:ma(K?K.search:$.search,b),_strictSearch:_};else{const ae=v.options.loader||v.options.beforeLoad||v.lazyFn||hp(v)?"pending":"success";oe={id:G,ssr:v.options.ssr,index:S,routeId:v.id,params:K?.params??c,_strictParams:j,pathname:q,updatedAt:Date.now(),search:K?ma(K.search,b):b,_strictSearch:_,searchError:void 0,status:ae,isFetching:!1,error:void 0,paramsError:Q,__routeContext:void 0,_nonReactive:{loadPromise:fr()},__beforeLoadContext:void 0,context:{},abortController:new AbortController,fetchCount:0,cause:F,loaderDeps:K?pa(K.loaderDeps,D):D,invalid:!1,preload:!1,links:void 0,scripts:void 0,headScripts:void 0,meta:void 0,staticData:v.options.staticData||{},fullPath:v.fullPath}}o?.preload||(oe.globalNotFound=y===v.id),oe.searchError=C;const re=this.getParentContext(A);oe.context={...re,...oe.__routeContext,...oe.__beforeLoadContext},p[S]=oe}for(let S=0;S<p.length;S++){const v=p[S],A=this.looseRoutesById[v.routeId],b=this.getMatch(v.id),_=h.get(v.routeId);if(v.params=_?ma(_.params,c):c,!b){const C=p[S-1],D=this.getParentContext(C);if(A.options.context){const z={deps:v.loaderDeps,params:v.params,context:D??{},location:r,navigate:q=>this.navigate({...q,_fromLocation:r}),buildLocation:this.buildLocation,cause:v.cause,abortController:v.abortController,preload:!!v.preload,matches:p,routeId:A.id};v.__routeContext=A.options.context(z)??void 0}v.context={...D,...v.__routeContext,...v.__beforeLoadContext}}}return p}matchRoutesLightweight(r){const{matchedRoutes:o,routeParams:s}=this.getMatchedRoutes(r.pathname),u=mi(o),c={...r.search};for(const h of o)try{Object.assign(c,Zo(h.options.validateSearch,c))}catch{}const d=mi(this.stores.matchesId.get()),m=d&&this.stores.matchStores.get(d)?.get(),y=m&&m.routeId===u.id&&m.pathname===r.pathname;let p;if(y)p=m.params;else{const h=Object.assign(Object.create(null),s);for(const S of o)try{Nm(S,h)}catch{}p=h}return{matchedRoutes:o,fullPath:u.fullPath,search:c,params:p}}},ts=class extends Error{},fS=class extends Error{};function dS(r){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:void 0,location:r,matches:[],statusCode:200}}function Zo(r,o){if(r==null)return{};if("~standard"in r){const s=r["~standard"].validate(o);if(s instanceof Promise)throw new ts("Async validation not supported");if(s.issues)throw new ts(JSON.stringify(s.issues,void 0,2),{cause:s});return s.value}return"parse"in r?r.parse(o):typeof r=="function"?r(o):{}}function hS({pathname:r,routesById:o,processedTree:s}){const u=Object.create(null),c=gn(r);let d;const m=Ov(c,s,!0);return m&&(d=m.route,Object.assign(u,m.rawParams)),{matchedRoutes:m?.branch||[o.__root__],routeParams:u,foundRoute:d}}function mS({search:r,dest:o,destRoutes:s,_includeValidateSearch:u}){return pS(s)(r,o,u??!1)}function pS(r){const o={dest:null,_includeValidateSearch:!1,middlewares:[]};for(const c of r){if("search"in c.options)c.options.search?.middlewares&&o.middlewares.push(...c.options.search.middlewares);else if(c.options.preSearchFilters||c.options.postSearchFilters){const d=({search:m,next:y})=>{let p=m;"preSearchFilters"in c.options&&c.options.preSearchFilters&&(p=c.options.preSearchFilters.reduce((S,v)=>v(S),m));const h=y(p);return"postSearchFilters"in c.options&&c.options.postSearchFilters?c.options.postSearchFilters.reduce((S,v)=>v(S),h):h};o.middlewares.push(d)}if(c.options.validateSearch){const d=({search:m,next:y})=>{const p=y(m);if(!o._includeValidateSearch)return p;try{return{...p,...Zo(c.options.validateSearch,p)??void 0}}catch{return p}};o.middlewares.push(d)}}const s=({search:c})=>{const d=o.dest;return d.search?d.search===!0?c:Vn(d.search,c):{}};o.middlewares.push(s);const u=(c,d,m)=>{if(c>=m.length)return d;const y=m[c];return y({search:d,next:h=>u(c+1,h,m)})};return function(d,m,y){return o.dest=m,o._includeValidateSearch=y,u(0,d,o.middlewares)}}function gS(r,o){if(r!=="root")for(let s=o.length-1;s>=0;s--){const u=o[s];if(u.children)return u.id}return ya}function Nm(r,o){const s=r.options.params?.parse??r.options.parseParams;if(s){const u=s(o);if(u===!1)throw new Error("Route params.parse returned false for a matched route");Object.assign(o,u)}}const yS="Error preloading route! ☝️";function Um(r,o){if(r)return typeof r=="string"?r:r[o]}function vS(r){return typeof r=="string"?{href:r,crossOrigin:void 0}:r}function SS(r){if(r.tag!=="link")return;const o=r.attrs?.rel,s=r.attrs?.href;if(typeof s=="string"&&(typeof o=="string"?o.split(/\s+/):[]).includes("stylesheet"))return s}function bS(r,o){const s=SS(o);return!!s&&r?.inlineCss?.styles[s]!==void 0}var mp=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(r){if(this.init=o=>{this.originalIndex=o.originalIndex;const s=this.options,u=!s?.path&&!s?.id;this.parentRoute=this.options.getParentRoute?.(),u?this._path=ya:this.parentRoute||yn();let c=u?ya:s?.path;c&&c!=="/"&&(c=sp(c));const d=s?.id||c;let m=u?ya:Ko([this.parentRoute.id==="__root__"?"":this.parentRoute.id,d]);c==="__root__"&&(c="/"),m!=="__root__"&&(m=Ko(["/",m]));const y=m==="__root__"?"/":Ko([this.parentRoute.fullPath,c]);this._path=c,this._id=m,this._fullPath=y,this._to=gn(y)},this.addChildren=o=>this._addFileChildren(o),this._addFileChildren=o=>(Array.isArray(o)&&(this.children=o),typeof o=="object"&&o!==null&&(this.children=Object.values(o)),this),this._addFileTypes=()=>this,this.updateLoader=o=>(Object.assign(this.options,o),this),this.update=o=>(Object.assign(this.options,o),this),this.lazy=o=>(this.lazyFn=o,this),this.redirect=o=>Jv({from:this.fullPath,...o}),this.options=r||{},this.isRoot=!r?.getParentRoute,r?.id&&r?.path)throw new Error("Route cannot have both an 'id' and a 'path' option.")}},wS=class extends mp{constructor(r){super(r)}};function AS(r){if(typeof document<"u"&&document.querySelector){const o=r.stores.location.get(),s=o.state.__hashScrollIntoViewOptions??!0;if(s&&o.hash!==""){const u=document.getElementById(o.hash);u&&u.scrollIntoView(s)}}}function ec(r){const o=r.errorComponent??tc;return V.jsx(ES,{getResetKey:r.getResetKey,onCatch:r.onCatch,children:({error:s,reset:u})=>s?ee.createElement(o,{error:s,reset:u}):r.children})}var ES=class extends ee.Component{constructor(...r){super(...r),this.state={error:null}}static getDerivedStateFromProps(r,o){const s=r.getResetKey();return o.error&&o.resetKey!==s?{resetKey:s,error:null}:{resetKey:s}}static getDerivedStateFromError(r){return{error:r}}reset(){this.setState({error:null})}componentDidCatch(r,o){this.props.onCatch&&this.props.onCatch(r,o)}render(){return this.props.children({error:this.state.error,reset:()=>{this.reset()}})}};function tc({error:r}){const[o,s]=ee.useState(!1);return V.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[V.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),V.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>s(u=>!u),children:o?"Hide Error":"Show Error"})]}),V.jsx("div",{style:{height:".25rem"}}),o?V.jsx("div",{children:V.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:r.message?V.jsx("code",{children:r.message}):null})}):null]})}function TS({children:r,fallback:o=null}){return nc()?V.jsx(Sa.Fragment,{children:r}):V.jsx(Sa.Fragment,{children:o})}function nc(){return Sa.useSyncExternalStore(_S,()=>!0,()=>!1)}function _S(){return()=>{}}var pp=ee.createContext(null);function it(r){return ee.useContext(pp)}var os=ee.createContext(void 0),RS=ee.createContext(void 0),Le=(r=>(r[r.None=0]="None",r[r.Mutable=1]="Mutable",r[r.Watching=2]="Watching",r[r.RecursedCheck=4]="RecursedCheck",r[r.Recursed=8]="Recursed",r[r.Dirty=16]="Dirty",r[r.Pending=32]="Pending",r))(Le||{});function CS({update:r,notify:o,unwatched:s}){return{link:u,unlink:c,propagate:d,checkDirty:m,shallowPropagate:y};function u(h,S,v){const A=S.depsTail;if(A!==void 0&&A.dep===h)return;const b=A!==void 0?A.nextDep:S.deps;if(b!==void 0&&b.dep===h){b.version=v,S.depsTail=b;return}const _=h.subsTail;if(_!==void 0&&_.version===v&&_.sub===S)return;const C=S.depsTail=h.subsTail={version:v,dep:h,sub:S,prevDep:A,nextDep:b,prevSub:_,nextSub:void 0};b!==void 0&&(b.prevDep=C),A!==void 0?A.nextDep=C:S.deps=C,_!==void 0?_.nextSub=C:h.subs=C}function c(h,S=h.sub){const v=h.dep,A=h.prevDep,b=h.nextDep,_=h.nextSub,C=h.prevSub;return b!==void 0?b.prevDep=A:S.depsTail=A,A!==void 0?A.nextDep=b:S.deps=b,_!==void 0?_.prevSub=C:v.subsTail=C,C!==void 0?C.nextSub=_:(v.subs=_)===void 0&&s(v),b}function d(h){let S=h.nextSub,v;e:do{const A=h.sub;let b=A.flags;if(b&60?b&12?b&4?!(b&48)&&p(h,A)?(A.flags=b|40,b&=1):b=0:A.flags=b&-9|32:b=0:A.flags=b|32,b&2&&o(A),b&1){const _=A.subs;if(_!==void 0){const C=(h=_).nextSub;C!==void 0&&(v={value:S,prev:v},S=C);continue}}if((h=S)!==void 0){S=h.nextSub;continue}for(;v!==void 0;)if(h=v.value,v=v.prev,h!==void 0){S=h.nextSub;continue e}break}while(!0)}function m(h,S){let v,A=0,b=!1;e:do{const _=h.dep,C=_.flags;if(S.flags&16)b=!0;else if((C&17)===17){if(r(_)){const D=_.subs;D.nextSub!==void 0&&y(D),b=!0}}else if((C&33)===33){(h.nextSub!==void 0||h.prevSub!==void 0)&&(v={value:h,prev:v}),h=_.deps,S=_,++A;continue}if(!b){const D=h.nextDep;if(D!==void 0){h=D;continue}}for(;A--;){const D=S.subs,z=D.nextSub!==void 0;if(z?(h=v.value,v=v.prev):h=D,b){if(r(S)){z&&y(D),S=h.sub;continue}b=!1}else S.flags&=-33;S=h.sub;const q=h.nextDep;if(q!==void 0){h=q;continue e}}return b}while(!0)}function y(h){do{const S=h.sub,v=S.flags;(v&48)===32&&(S.flags=v|16,(v&6)===2&&o(S))}while((h=h.nextSub)!==void 0)}function p(h,S){let v=S.depsTail;for(;v!==void 0;){if(v===h)return!0;v=v.prevDep}return!1}}function xS(r,o,s){const u=typeof r=="object",c=u?r:void 0;return{next:(u?r.next:r)?.bind(c),error:(u?r.error:o)?.bind(c),complete:(u?r.complete:s)?.bind(c)}}const Qu=[];let Jo=0;const{link:Bm,unlink:OS,propagate:MS,checkDirty:gp,shallowPropagate:Hm}=CS({update(r){return r._update()},notify(r){Qu[Pu++]=r,r.flags&=~Le.Watching},unwatched(r){r.depsTail!==void 0&&(r.depsTail=void 0,r.flags=Le.Mutable|Le.Dirty,ns(r))}});let Vo=0,Pu=0,Xt,Vu=0;function yp(r){try{++Vu,r()}finally{--Vu||vp()}}function ns(r){const o=r.depsTail;let s=o!==void 0?o.nextDep:r.deps;for(;s!==void 0;)s=OS(s,r)}function vp(){if(!(Vu>0)){for(;Vo<Pu;){const r=Qu[Vo];Qu[Vo++]=void 0,r.notify()}Vo=0,Pu=0}}function jm(r,o){const s=typeof r=="function",u=r,c={_snapshot:s?void 0:r,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:s?Le.None:Le.Mutable,get(){return Xt!==void 0&&Bm(c,Xt,Jo),c._snapshot},subscribe(d){const m=xS(d),y={current:!1},p=DS(()=>{c.get(),y.current?m.next?.(c._snapshot):y.current=!0});return{unsubscribe:()=>{p.stop()}}},_update(d){const m=Xt,y=o?.compare??Object.is;if(s)Xt=c,++Jo,c.depsTail=void 0;else if(d===void 0)return!1;s&&(c.flags=Le.Mutable|Le.RecursedCheck);try{const p=c._snapshot,h=typeof d=="function"?d(p):d===void 0&&s?u(p):d;return p===void 0||!y(p,h)?(c._snapshot=h,!0):!1}finally{Xt=m,s&&(c.flags&=~Le.RecursedCheck),ns(c)}}};return s?(c.flags=Le.Mutable|Le.Dirty,c.get=function(){const d=c.flags;if(d&Le.Dirty||d&Le.Pending&&gp(c.deps,c)){if(c._update()){const m=c.subs;m!==void 0&&Hm(m)}}else d&Le.Pending&&(c.flags=d&~Le.Pending);return Xt!==void 0&&Bm(c,Xt,Jo),c._snapshot}):c.set=function(d){if(c._update(d)){const m=c.subs;m!==void 0&&(MS(m),Hm(m),vp())}},c}function DS(r){const o=()=>{const u=Xt;Xt=s,++Jo,s.depsTail=void 0,s.flags=Le.Watching|Le.RecursedCheck;try{return r()}finally{Xt=u,s.flags&=~Le.RecursedCheck,ns(s)}},s={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:Le.Watching|Le.RecursedCheck,notify(){const u=this.flags;u&Le.Dirty||u&Le.Pending&&gp(this.deps,this)?o():this.flags=Le.Watching},stop(){this.flags=Le.None,this.depsTail=void 0,ns(this)}};return o(),s}var Uu={exports:{}},Bu={},Hu={exports:{}},ju={};var qm;function kS(){if(qm)return ju;qm=1;var r=wi();function o(v,A){return v===A&&(v!==0||1/v===1/A)||v!==v&&A!==A}var s=typeof Object.is=="function"?Object.is:o,u=r.useState,c=r.useEffect,d=r.useLayoutEffect,m=r.useDebugValue;function y(v,A){var b=A(),_=u({inst:{value:b,getSnapshot:A}}),C=_[0].inst,D=_[1];return d(function(){C.value=b,C.getSnapshot=A,p(C)&&D({inst:C})},[v,b,A]),c(function(){return p(C)&&D({inst:C}),v(function(){p(C)&&D({inst:C})})},[v]),m(b),b}function p(v){var A=v.getSnapshot;v=v.value;try{var b=A();return!s(v,b)}catch{return!0}}function h(v,A){return A()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:y;return ju.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:S,ju}var Gm;function zS(){return Gm||(Gm=1,Hu.exports=kS()),Hu.exports}var Ym;function LS(){if(Ym)return Bu;Ym=1;var r=wi(),o=zS();function s(h,S){return h===S&&(h!==0||1/h===1/S)||h!==h&&S!==S}var u=typeof Object.is=="function"?Object.is:s,c=o.useSyncExternalStore,d=r.useRef,m=r.useEffect,y=r.useMemo,p=r.useDebugValue;return Bu.useSyncExternalStoreWithSelector=function(h,S,v,A,b){var _=d(null);if(_.current===null){var C={hasValue:!1,value:null};_.current=C}else C=_.current;_=y(function(){function z(K){if(!q){if(q=!0,Y=K,K=A(K),b!==void 0&&C.hasValue){var j=C.value;if(b(j,K))return G=j}return G=K}if(j=G,u(Y,K))return j;var Q=A(K);return b!==void 0&&b(j,Q)?(Y=K,j):(Y=K,G=Q)}var q=!1,Y,G,$=v===void 0?null:v;return[function(){return z(S())},$===null?void 0:function(){return z($())}]},[S,v,A,b]);var D=c(h,_[0],_[1]);return m(function(){C.hasValue=!0,C.value=D},[D]),p(D),D},Bu}var Qm;function NS(){return Qm||(Qm=1,Uu.exports=LS()),Uu.exports}var US=NS();function BS(r,o){return r===o}function Fe(r,o,s=BS){const u=ee.useCallback(m=>{if(!r)return()=>{};const{unsubscribe:y}=r.subscribe(m);return y},[r]),c=ee.useCallback(()=>r?.get(),[r]);return US.useSyncExternalStoreWithSelector(u,c,c,o,s)}var HS={get:()=>{},subscribe:()=>({unsubscribe:()=>{}})};function ba(r){const o=it(),s=ee.useContext(r.from?RS:os),u=r.from??s,c=u?r.from?o.stores.getRouteMatchStore(u):o.stores.matchStores.get(u):void 0,d=ee.useRef(void 0);return Fe(c??HS,m=>{if((r.shouldThrow??!0)&&!m&&yn(),m===void 0)return;const y=r.select?r.select(m):m;if(r.structuralSharing??o.options.defaultStructuralSharing){const p=pa(d.current,y);return d.current=p,p}return y})}function Sp(r){return ba({from:r.from,strict:r.strict,structuralSharing:r.structuralSharing,select:o=>r.select?r.select(o.loaderData):o.loaderData})}function bp(r){const{select:o,...s}=r;return ba({...s,select:u=>o?o(u.loaderDeps):u.loaderDeps})}function wp(r){return ba({from:r.from,shouldThrow:r.shouldThrow,structuralSharing:r.structuralSharing,strict:r.strict,select:o=>{const s=r.strict===!1?o.params:o._strictParams;return r.select?r.select(s):s}})}function Ap(r){return ba({from:r.from,strict:r.strict,shouldThrow:r.shouldThrow,structuralSharing:r.structuralSharing,select:o=>r.select?r.select(o.search):o.search})}function Ep(r){const o=it();return ee.useCallback(s=>o.navigate({...s,from:s.from??r?.from}),[r?.from,o])}function Tp(r){return ba({...r,select:o=>r.select?r.select(o.context):o.context})}var _p=$m();const J0=Zu(_p);function jS(r,o){const s=it(),u=mv(o),{activeProps:c,inactiveProps:d,activeOptions:m,to:y,preload:p,preloadDelay:h,preloadIntentProximity:S,hashScrollIntoView:v,replace:A,startTransition:b,resetScroll:_,viewTransition:C,children:D,target:z,disabled:q,style:Y,className:G,onClick:$,onBlur:K,onFocus:j,onMouseEnter:Q,onMouseLeave:F,onTouchStart:oe,ignoreBlocker:re,params:ae,search:Ie,hash:ke,state:Be,mask:L,reloadDocument:P,unsafeRelative:ne,from:Se,_fromLocation:we,...T}=r,B=nc(),I=ee.useMemo(()=>r,[s,r.from,r._fromLocation,r.hash,r.to,r.search,r.params,r.state,r.mask,r.unsafeRelative]),X=Fe(s.stores.location,Oe=>Oe,(Oe,Ze)=>Oe.href===Ze.href),W=ee.useMemo(()=>{const Oe={_fromLocation:X,...I};return s.buildLocation(Oe)},[s,X,I]),ce=W.maskedLocation?W.maskedLocation.publicHref:W.publicHref,ge=W.maskedLocation?W.maskedLocation.external:W.external,He=ee.useMemo(()=>VS(ce,ge,s.history,q),[q,ge,ce,s.history]),Ce=ee.useMemo(()=>{if(He?.external)return Wo(He.href,s.protocolAllowlist)?void 0:He.href;if(!IS(y)&&!(typeof y!="string"||y.indexOf(":")===-1))try{return new URL(y),Wo(y,s.protocolAllowlist)?void 0:y}catch{}},[y,He,s.protocolAllowlist]),Kt=ee.useMemo(()=>{if(Ce)return!1;if(m?.exact){if(!Nv(X.pathname,W.pathname,s.basepath))return!1}else{const Oe=$o(X.pathname,s.basepath),Ze=$o(W.pathname,s.basepath);if(!(Oe.startsWith(Ze)&&(Oe.length===Ze.length||Oe[Ze.length]==="/")))return!1}return(m?.includeSearch??!0)&&!Nt(X.search,W.search,{partial:!m?.exact,ignoreUndefined:!m?.explicitUndefined})?!1:m?.includeHash?B&&X.hash===W.hash:!0},[m?.exact,m?.explicitUndefined,m?.includeHash,m?.includeSearch,X,Ce,B,W.hash,W.pathname,W.search,s.basepath]),Ft=Kt?Vn(c,{})??qS:qu,vn=Kt?qu:Vn(d,{})??qu,dr=[G,Ft.className,vn.className].filter(Boolean).join(" "),Gt=(Y||Ft.style||vn.style)&&{...Y,...Ft.style,...vn.style},[hr,wa]=ee.useState(!1),Ei=ee.useRef(!1),Zt=r.reloadDocument||Ce?!1:p??s.options.defaultPreload,Fn=h??s.options.defaultPreloadDelay??0,Ut=ee.useCallback(()=>{s.preloadRoute({...I,_builtLocation:W}).catch(Oe=>{console.warn(Oe),console.warn(yS)})},[s,I,W]);hv(u,ee.useCallback(Oe=>{Oe?.isIntersecting&&Ut()},[Ut]),PS,{disabled:!!q||Zt!=="viewport"}),ee.useEffect(()=>{Ei.current||!q&&Zt==="render"&&(Ut(),Ei.current=!0)},[q,Ut,Zt]);const mr=Oe=>{const Ze=Oe.currentTarget.getAttribute("target"),Yt=z!==void 0?z:Ze;if(!q&&!XS(Oe)&&!Oe.defaultPrevented&&(!Yt||Yt==="_self")&&Oe.button===0){Oe.preventDefault(),_p.flushSync(()=>{wa(!0)});const Aa=s.subscribe("onResolved",()=>{Aa(),wa(!1)});s.navigate({...I,replace:A,resetScroll:_,hashScrollIntoView:v,startTransition:b,viewTransition:C,ignoreBlocker:re})}};if(Ce)return{...T,ref:u,href:Ce,...D&&{children:D},...z&&{target:z},...q&&{disabled:q},...Y&&{style:Y},...G&&{className:G},...$&&{onClick:$},...K&&{onBlur:K},...j&&{onFocus:j},...Q&&{onMouseEnter:Q},...F&&{onMouseLeave:F},...oe&&{onTouchStart:oe}};const Ti=Oe=>{if(q||Zt!=="intent")return;if(!Fn){Ut();return}const Ze=Oe.currentTarget;if(di.has(Ze))return;const Yt=setTimeout(()=>{di.delete(Ze),Ut()},Fn);di.set(Ze,Yt)},cs=Oe=>{q||Zt!=="intent"||Ut()},nt=Oe=>{if(q||!Zt||!Fn)return;const Ze=Oe.currentTarget,Yt=di.get(Ze);Yt&&(clearTimeout(Yt),di.delete(Ze))};return{...T,...Ft,...vn,href:He?.href,ref:u,onClick:sr([$,mr]),onBlur:sr([K,nt]),onFocus:sr([j,Ti]),onMouseEnter:sr([Q,Ti]),onMouseLeave:sr([F,nt]),onTouchStart:sr([oe,cs]),disabled:!!q,target:z,...Gt&&{style:Gt},...dr&&{className:dr},...q&&GS,...Kt&&YS,...B&&hr&&QS}}var qu={},qS={className:"active"},GS={role:"link","aria-disabled":!0},YS={"data-status":"active","aria-current":"page"},QS={"data-transitioning":"transitioning"},di=new WeakMap,PS={rootMargin:"100px"},sr=r=>o=>{for(const s of r)if(s){if(o.defaultPrevented)return;s(o)}};function VS(r,o,s,u){if(!u)return o?{href:r,external:!0}:{href:s.createHref(r)||"/",external:!1}}function IS(r){if(typeof r!="string")return!1;const o=r.charCodeAt(0);return o===47?r.charCodeAt(1)!==47:o===46}var ss=ee.forwardRef((r,o)=>{const{_asChild:s,...u}=r,{type:c,...d}=jS(u,o),m=typeof u.children=="function"?u.children({isActive:d["data-status"]==="active"}):u.children;if(!s){const{disabled:y,...p}=d;return ee.createElement("a",p,m)}return ee.createElement(s,d,m)});function XS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var KS=class extends mp{constructor(o){super(o),this.useMatch=s=>ba({select:s?.select,from:this.id,structuralSharing:s?.structuralSharing}),this.useRouteContext=s=>Tp({...s,from:this.id}),this.useSearch=s=>Ap({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useParams=s=>wp({select:s?.select,structuralSharing:s?.structuralSharing,from:this.id}),this.useLoaderDeps=s=>bp({...s,from:this.id}),this.useLoaderData=s=>Sp({...s,from:this.id}),this.useNavigate=()=>Ep({from:this.fullPath}),this.Link=Sa.forwardRef((s,u)=>V.jsx(ss,{ref:u,from:this.fullPath,...s}))}};function FS(r){return new KS(r)}function ZS(){return r=>WS(r)}var JS=class extends wS{constructor(r){super(r),this.useMatch=o=>ba({select:o?.select,from:this.id,structuralSharing:o?.structuralSharing}),this.useRouteContext=o=>Tp({...o,from:this.id}),this.useSearch=o=>Ap({select:o?.select,structuralSharing:o?.structuralSharing,from:this.id}),this.useParams=o=>wp({select:o?.select,structuralSharing:o?.structuralSharing,from:this.id}),this.useLoaderDeps=o=>bp({...o,from:this.id}),this.useLoaderData=o=>Sp({...o,from:this.id}),this.useNavigate=()=>Ep({from:this.fullPath}),this.Link=Sa.forwardRef((o,s)=>V.jsx(ss,{ref:s,from:this.fullPath,...o}))}};function WS(r){return new JS(r)}function ls(r){return new $S(r,{silent:!0}).createRoute}var $S=class{constructor(r,o){this.path=r,this.createRoute=s=>{const u=FS(s);return u.isRoot=!1,u},this.silent=o?.silent}};function vi(r,o){let s,u,c,d;const m=()=>(s||(s=r().then(p=>{s=void 0,u=p[o??"default"]}).catch(p=>{if(c=p,yv(c)&&c instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const h=`tanstack_router_reload:${c.message}`;sessionStorage.getItem(h)||(sessionStorage.setItem(h,"1"),d=!0)}})),s),y=function(h){if(d)throw window.location.reload(),new Promise(()=>{});if(c)throw c;if(!u)if(gm)gm(m());else throw m();return ee.createElement(u,h)};return y.preload=m,y}function eb(r){const o=it(),s=`not-found-${Fe(o.stores.location,u=>u.pathname)}-${Fe(o.stores.status,u=>u)}`;return V.jsx(ec,{getResetKey:()=>s,onCatch:(u,c)=>{if(rt(u))r.onCatch?.(u,c);else throw u},errorComponent:({error:u})=>{if(rt(u))return r.fallback?.(u);throw u},children:r.children})}function tb(){return V.jsx("p",{children:"Not Found"})}function lr(r){return V.jsx(V.Fragment,{children:r.children})}function Rp(r,o,s){return o.options.notFoundComponent?V.jsx(o.options.notFoundComponent,{...s}):r.options.defaultNotFoundComponent?V.jsx(r.options.defaultNotFoundComponent,{...s}):V.jsx(tb,{})}function nb(r){return null}function ab(){return nb(it()),null}var Cp=ee.memo(function({matchId:o}){const s=it(),u=s.stores.matchStores.get(o);u||yn();const c=Fe(s.stores.loadedAt,m=>m),d=Fe(u,m=>m);return V.jsx(rb,{router:s,matchId:o,resetKey:c,matchState:ee.useMemo(()=>{const m=d.routeId,y=s.routesById[m].parentRoute?.id;return{routeId:m,ssr:d.ssr,_displayPending:d._displayPending,parentRouteId:y}},[d._displayPending,d.routeId,d.ssr,s.routesById])})});function rb({router:r,matchId:o,resetKey:s,matchState:u}){const c=r.routesById[u.routeId],d=c.options.pendingComponent??r.options.defaultPendingComponent,m=d?V.jsx(d,{}):null,y=c.options.errorComponent??r.options.defaultErrorComponent,p=c.options.onCatch??r.options.defaultOnCatch,h=c.isRoot?c.options.notFoundComponent??r.options.notFoundRoute?.options.component:c.options.notFoundComponent,S=u.ssr===!1||u.ssr==="data-only",v=(!c.isRoot||c.options.wrapInSuspense||S)&&(c.options.wrapInSuspense??d??(c.options.errorComponent?.preload||S))?ee.Suspense:lr,A=y?ec:lr,b=h?eb:lr;return V.jsxs(c.isRoot?c.options.shellComponent??lr:lr,{children:[V.jsx(os.Provider,{value:o,children:V.jsx(v,{fallback:m,children:V.jsx(A,{getResetKey:()=>s,errorComponent:y||tc,onCatch:(_,C)=>{if(rt(_))throw _.routeId??=u.routeId,_;p?.(_,C)},children:V.jsx(b,{fallback:_=>{if(_.routeId??=u.routeId,!h||_.routeId&&_.routeId!==u.routeId||!_.routeId&&!c.isRoot)throw _;return ee.createElement(h,_)},children:S||u._displayPending?V.jsx(TS,{fallback:m,children:V.jsx(Pm,{matchId:o})}):V.jsx(Pm,{matchId:o})})})})}),u.parentRouteId===ya?V.jsxs(V.Fragment,{children:[V.jsx(ib,{resetKey:s}),r.options.scrollRestoration&&ep?V.jsx(ab,{}):null]}):null]})}function ib({resetKey:r}){const o=it(),s=ee.useRef(void 0);return hi(()=>{const u=o.latestLocation.href;(s.current===void 0||s.current!==u)&&(o.emit({type:"onRendered",...ur(o.stores.location.get(),o.stores.resolvedLocation.get())}),s.current=u)},[o.latestLocation.state.__TSR_key,r,o]),null}var Pm=ee.memo(function({matchId:o}){const s=it(),u=(S,v)=>s.getMatch(S.id)?._nonReactive[v]??S._nonReactive[v],c=s.stores.matchStores.get(o);c||yn();const d=Fe(c,S=>S),m=d.routeId,y=s.routesById[m],p=ee.useMemo(()=>{const S=(s.routesById[m].options.remountDeps??s.options.defaultRemountDeps)?.({routeId:m,loaderDeps:d.loaderDeps,params:d._strictParams,search:d._strictSearch});return S?JSON.stringify(S):void 0},[m,d.loaderDeps,d._strictParams,d._strictSearch,s.options.defaultRemountDeps,s.routesById]),h=ee.useMemo(()=>{const S=y.options.component??s.options.defaultComponent;return S?V.jsx(S,{},p):V.jsx(xp,{})},[p,y.options.component,s.options.defaultComponent]);if(d._displayPending)throw u(d,"displayPendingPromise");if(d._forcePending)throw u(d,"minPendingPromise");if(d.status==="pending"){const S=y.options.pendingMinMs??s.options.defaultPendingMinMs;if(S){const v=s.getMatch(d.id);if(v&&!v._nonReactive.minPendingPromise){const A=fr();v._nonReactive.minPendingPromise=A,setTimeout(()=>{A.resolve(),v._nonReactive.minPendingPromise=void 0},S)}}throw u(d,"loadPromise")}if(d.status==="notFound")return rt(d.error)||yn(),Rp(s,y,d.error);if(d.status==="redirected")throw pt(d.error)||yn(),u(d,"loadPromise");if(d.status==="error")throw d.error;return h}),xp=ee.memo(function(){const o=it(),s=ee.useContext(os);let u,c=!1,d;{const h=s?o.stores.matchStores.get(s):void 0;[u,c]=Fe(h,S=>[S?.routeId,S?.globalNotFound??!1]),d=Fe(o.stores.matchesId,S=>S[S.findIndex(v=>v===s)+1])}const m=u?o.routesById[u]:void 0,y=o.options.defaultPendingComponent?V.jsx(o.options.defaultPendingComponent,{}):null;if(c)return m||yn(),Rp(o,m,void 0);if(!d)return null;const p=V.jsx(Cp,{matchId:d});return u===ya?V.jsx(ee.Suspense,{fallback:y,children:p}):p});function ob(){const r=it(),o=ee.useRef({router:r,mounted:!1}),[s,u]=ee.useState(!1),c=Fe(r.stores.isLoading,v=>v),d=Fe(r.stores.hasPending,v=>v),m=Ou(c),y=c||s||d,p=Ou(y),h=c||d,S=Ou(h);return r.startTransition=v=>{u(!0),ee.startTransition(()=>{v(),u(!1)})},ee.useEffect(()=>{const v=r.history.subscribe(r.load),A=r.buildLocation({to:r.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return gn(r.latestLocation.publicHref)!==gn(A.publicHref)&&r.commitLocation({...A,replace:!0}),()=>{v()}},[r,r.history]),hi(()=>{if(typeof window<"u"&&r.ssr||o.current.router===r&&o.current.mounted)return;o.current={router:r,mounted:!0},(async()=>{try{await r.load()}catch(A){console.error(A)}})()},[r]),hi(()=>{m&&!c&&r.emit({type:"onLoad",...ur(r.stores.location.get(),r.stores.resolvedLocation.get())})},[m,r,c]),hi(()=>{S&&!h&&r.emit({type:"onBeforeRouteMount",...ur(r.stores.location.get(),r.stores.resolvedLocation.get())})},[h,S,r]),hi(()=>{if(p&&!y){const v=ur(r.stores.location.get(),r.stores.resolvedLocation.get());r.emit({type:"onResolved",...v}),yp(()=>{r.stores.status.set("idle"),r.stores.resolvedLocation.set(r.stores.location.get())}),v.hrefChanged&&AS(r)}},[y,p,r]),null}function sb(){const r=it(),o=r.routesById[ya].options.pendingComponent??r.options.defaultPendingComponent,s=o?V.jsx(o,{}):null,u=V.jsxs(typeof document<"u"&&r.ssr?lr:ee.Suspense,{fallback:s,children:[V.jsx(ob,{}),V.jsx(lb,{})]});return r.options.InnerWrap?V.jsx(r.options.InnerWrap,{children:u}):u}function lb(){const r=it(),o=Fe(r.stores.firstId,c=>c),s=Fe(r.stores.loadedAt,c=>c),u=o?V.jsx(Cp,{matchId:o}):null;return V.jsx(os.Provider,{value:o,children:r.options.disableGlobalCatchBoundary?u:V.jsx(ec,{getResetKey:()=>s,errorComponent:tc,onCatch:void 0,children:u})})}var ub=r=>({createMutableStore:jm,createReadonlyStore:jm,batch:yp}),cb=r=>new fb(r),fb=class extends cS{constructor(r){super(r,ub)}};function db({router:r,children:o,...s}){np(s)&&r.update({...r.options,...s,context:{...r.options.context,...s.context}});const u=V.jsx(pp.Provider,{value:r,children:o});return r.options.Wrap?V.jsx(r.options.Wrap,{children:u}):u}function hb({router:r,...o}){return V.jsx(db,{router:r,...o,children:V.jsx(sb,{})})}function mb(r){const{attrs:o,children:s,nonce:u}=r;switch(r.tag){case"title":return V.jsx("title",{...o,suppressHydrationWarning:!0,children:s});case"meta":return V.jsx("meta",{...o,suppressHydrationWarning:!0});case"link":return V.jsx("link",{...o,precedence:o?.precedence??(o?.rel==="stylesheet"?"default":void 0),nonce:u,suppressHydrationWarning:!0});case"style":return r.inlineCss,V.jsx("style",{...o,dangerouslySetInnerHTML:{__html:s},nonce:u});case"script":return V.jsx(pb,{attrs:o,children:s});default:return null}}function pb({attrs:r,children:o}){it();const s=nc(),u=typeof r?.type=="string"&&r.type!==""&&r.type!=="text/javascript"&&r.type!=="module";if(ee.useEffect(()=>{if(!u){if(r?.src){const c=(()=>{try{const m=document.baseURI||window.location.href;return new URL(r.src,m).href}catch{return r.src}})();if(Array.from(document.querySelectorAll("script[src]")).find(m=>m.src===c))return;const d=document.createElement("script");for(const[m,y]of Object.entries(r))m!=="suppressHydrationWarning"&&y!==void 0&&y!==!1&&d.setAttribute(m,typeof y=="boolean"?"":String(y));return document.head.appendChild(d),()=>{d.parentNode&&d.parentNode.removeChild(d)}}if(typeof o=="string"){const c=typeof r?.type=="string"?r.type:"text/javascript",d=typeof r?.nonce=="string"?r.nonce:void 0;if(Array.from(document.querySelectorAll("script:not([src])")).find(y=>{if(!(y instanceof HTMLScriptElement))return!1;const p=y.getAttribute("type")??"text/javascript",h=y.getAttribute("nonce")??void 0;return y.textContent===o&&p===c&&h===d}))return;const m=document.createElement("script");if(m.textContent=o,r)for(const[y,p]of Object.entries(r))y!=="suppressHydrationWarning"&&p!==void 0&&p!==!1&&m.setAttribute(y,typeof p=="boolean"?"":String(p));return document.head.appendChild(m),()=>{m.parentNode&&m.parentNode.removeChild(m)}}}},[r,o,u]),u&&typeof o=="string")return V.jsx("script",{...r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o}});if(!s){if(r?.src)return V.jsx("script",{...r,suppressHydrationWarning:!0});if(typeof o=="string")return V.jsx("script",{...r,dangerouslySetInnerHTML:{__html:o},suppressHydrationWarning:!0})}return null}var gb=r=>{const o=it(),s=o.options.ssr?.nonce,u=Fe(o.stores.matches,h=>h.map(S=>S.meta).filter(Boolean),Nt),c=ee.useMemo(()=>{const h=[],S={};let v;for(let A=u.length-1;A>=0;A--){const b=u[A];for(let _=b.length-1;_>=0;_--){const C=b[_];if(C)if(C.title)v||(v={tag:"title",children:C.title});else if("script:ld+json"in C)try{const D=JSON.stringify(C["script:ld+json"]);h.push({tag:"script",attrs:{type:"application/ld+json"},children:Av(D)})}catch{}else{const D=C.name??C.property;if(D){if(S[D])continue;S[D]=!0}h.push({tag:"meta",attrs:{...C,nonce:s}})}}}return v&&h.push(v),s&&h.push({tag:"meta",attrs:{property:"csp-nonce",content:s}}),h.reverse(),h},[u,s]),d=Fe(o.stores.matches,h=>{const S=h.map(b=>b.links).filter(Boolean).flat(1).map(b=>({tag:"link",attrs:{...b,nonce:s}})),v=o.ssr?.manifest,A=h.map(b=>v?.routes[b.routeId]?.assets??[]).filter(Boolean).flat(1).flatMap(b=>b.tag==="link"?bS(v,b)?[]:[{tag:"link",attrs:{...b.attrs,crossOrigin:Um(r,"stylesheet")??b.attrs?.crossOrigin,suppressHydrationWarning:!0,nonce:s}}]:b.tag==="style"?[{tag:"style",attrs:{...b.attrs,nonce:s},children:b.children,...b.inlineCss?{inlineCss:!0}:{}}]:[]);return[...S,...A]},Nt),m=Fe(o.stores.matches,h=>{const S=[];return h.map(v=>o.looseRoutesById[v.routeId]).forEach(v=>o.ssr?.manifest?.routes[v.id]?.preloads?.filter(Boolean).forEach(A=>{const b=vS(A);S.push({tag:"link",attrs:{rel:"modulepreload",href:b.href,crossOrigin:Um(r,"modulepreload")??b.crossOrigin,nonce:s}})})),S},Nt),y=Fe(o.stores.matches,h=>h.map(S=>S.styles).flat(1).filter(Boolean).map(({children:S,...v})=>({tag:"style",attrs:{...v,nonce:s},children:S})),Nt),p=Fe(o.stores.matches,h=>h.map(S=>S.headScripts).flat(1).filter(Boolean).map(({children:S,...v})=>({tag:"script",attrs:{...v,nonce:s},children:S})),Nt);return yb([...c,...m,...d,...y,...p],h=>JSON.stringify(h))};function yb(r,o){const s=new Set;return r.filter(u=>{const c=o(u);return s.has(c)?!1:(s.add(c),!0)})}function vb(r){const o=gb(r.assetCrossOrigin),s=it().options.ssr?.nonce;return V.jsx(V.Fragment,{children:o.map(u=>ee.createElement(mb,{...u,key:`tsr-meta-${JSON.stringify(u)}`,nonce:s}))})}var us=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(r){return this.listeners.add(r),this.onSubscribe(),()=>{this.listeners.delete(r),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Sb=class extends us{#e;#t;#n;constructor(){super(),this.#n=r=>{if(typeof window<"u"&&window.addEventListener){const o=()=>r();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(r){this.#n=r,this.#t?.(),this.#t=r(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()})}setFocused(r){this.#e!==r&&(this.#e=r,this.onFocus())}onFocus(){const r=this.isFocused();this.listeners.forEach(o=>{o(r)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Op=new Sb,bb={setTimeout:(r,o)=>setTimeout(r,o),clearTimeout:r=>clearTimeout(r),setInterval:(r,o)=>setInterval(r,o),clearInterval:r=>clearInterval(r)},wb=class{#e=bb;#t=!1;setTimeoutProvider(r){this.#e=r}setTimeout(r,o){return this.#e.setTimeout(r,o)}clearTimeout(r){this.#e.clearTimeout(r)}setInterval(r,o){return this.#e.setInterval(r,o)}clearInterval(r){this.#e.clearInterval(r)}},Iu=new wb;function Ab(r){setTimeout(r,0)}var Eb=typeof window>"u"||"Deno"in globalThis;function qt(){}function Tb(r,o){return typeof r=="function"?r(o):r}function _b(r){return typeof r=="number"&&r>=0&&r!==1/0}function Rb(r,o){return Math.max(r+(o||0)-Date.now(),0)}function Xu(r,o){return typeof r=="function"?r(o):r}function Cb(r,o){return typeof r=="function"?r(o):r}function Vm(r,o){const{type:s="all",exact:u,fetchStatus:c,predicate:d,queryKey:m,stale:y}=r;if(m){if(u){if(o.queryHash!==ac(m,o.options))return!1}else if(!bi(o.queryKey,m))return!1}if(s!=="all"){const p=o.isActive();if(s==="active"&&!p||s==="inactive"&&p)return!1}return!(typeof y=="boolean"&&o.isStale()!==y||c&&c!==o.state.fetchStatus||d&&!d(o))}function Im(r,o){const{exact:s,status:u,predicate:c,mutationKey:d}=r;if(d){if(!o.options.mutationKey)return!1;if(s){if(Si(o.options.mutationKey)!==Si(d))return!1}else if(!bi(o.options.mutationKey,d))return!1}return!(u&&o.state.status!==u||c&&!c(o))}function ac(r,o){return(o?.queryKeyHashFn||Si)(r)}function Si(r){return JSON.stringify(r,(o,s)=>Ku(s)?Object.keys(s).sort().reduce((u,c)=>(u[c]=s[c],u),{}):s)}function bi(r,o){return r===o?!0:typeof r!=typeof o?!1:r&&o&&typeof r=="object"&&typeof o=="object"?Object.keys(o).every(s=>bi(r[s],o[s])):!1}var xb=Object.prototype.hasOwnProperty;function Mp(r,o,s=0){if(r===o)return r;if(s>500)return o;const u=Xm(r)&&Xm(o);if(!u&&!(Ku(r)&&Ku(o)))return o;const d=(u?r:Object.keys(r)).length,m=u?o:Object.keys(o),y=m.length,p=u?new Array(y):{};let h=0;for(let S=0;S<y;S++){const v=u?S:m[S],A=r[v],b=o[v];if(A===b){p[v]=A,(u?S<d:xb.call(r,v))&&h++;continue}if(A===null||b===null||typeof A!="object"||typeof b!="object"){p[v]=b;continue}const _=Mp(A,b,s+1);p[v]=_,_===A&&h++}return d===y&&h===d?r:p}function Xm(r){return Array.isArray(r)&&r.length===Object.keys(r).length}function Ku(r){if(!Km(r))return!1;const o=r.constructor;if(o===void 0)return!0;const s=o.prototype;return!(!Km(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(r)!==Object.prototype)}function Km(r){return Object.prototype.toString.call(r)==="[object Object]"}function Ob(r){return new Promise(o=>{Iu.setTimeout(o,r)})}function Mb(r,o,s){return typeof s.structuralSharing=="function"?s.structuralSharing(r,o):s.structuralSharing!==!1?Mp(r,o):o}function Db(r,o,s=0){const u=[...r,o];return s&&u.length>s?u.slice(1):u}function kb(r,o,s=0){const u=[o,...r];return s&&u.length>s?u.slice(0,-1):u}var rc=Symbol();function Dp(r,o){return!r.queryFn&&o?.initialPromise?()=>o.initialPromise:!r.queryFn||r.queryFn===rc?()=>Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)):r.queryFn}function zb(r,o,s){let u=!1,c;return Object.defineProperty(r,"signal",{enumerable:!0,get:()=>(c??=o(),u||(u=!0,c.aborted?s():c.addEventListener("abort",s,{once:!0})),c)}),r}var kp=(()=>{let r=()=>Eb;return{isServer(){return r()},setIsServer(o){r=o}}})();function Lb(){let r,o;const s=new Promise((c,d)=>{r=c,o=d});s.status="pending",s.catch(()=>{});function u(c){Object.assign(s,c),delete s.resolve,delete s.reject}return s.resolve=c=>{u({status:"fulfilled",value:c}),r(c)},s.reject=c=>{u({status:"rejected",reason:c}),o(c)},s}var Nb=Ab;function Ub(){let r=[],o=0,s=y=>{y()},u=y=>{y()},c=Nb;const d=y=>{o?r.push(y):c(()=>{s(y)})},m=()=>{const y=r;r=[],y.length&&c(()=>{u(()=>{y.forEach(p=>{s(p)})})})};return{batch:y=>{let p;o++;try{p=y()}finally{o--,o||m()}return p},batchCalls:y=>(...p)=>{d(()=>{y(...p)})},schedule:d,setNotifyFunction:y=>{s=y},setBatchNotifyFunction:y=>{u=y},setScheduler:y=>{c=y}}}var st=Ub(),Bb=class extends us{#e=!0;#t;#n;constructor(){super(),this.#n=r=>{if(typeof window<"u"&&window.addEventListener){const o=()=>r(!0),s=()=>r(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(r){this.#n=r,this.#t?.(),this.#t=r(this.setOnline.bind(this))}setOnline(r){this.#e!==r&&(this.#e=r,this.listeners.forEach(s=>{s(r)}))}isOnline(){return this.#e}},as=new Bb;function Hb(r){return Math.min(1e3*2**r,3e4)}function zp(r){return(r??"online")==="online"?as.isOnline():!0}var Fu=class extends Error{constructor(r){super("CancelledError"),this.revert=r?.revert,this.silent=r?.silent}};function Lp(r){let o=!1,s=0,u;const c=Lb(),d=()=>c.status!=="pending",m=C=>{if(!d()){const D=new Fu(C);A(D),r.onCancel?.(D)}},y=()=>{o=!0},p=()=>{o=!1},h=()=>Op.isFocused()&&(r.networkMode==="always"||as.isOnline())&&r.canRun(),S=()=>zp(r.networkMode)&&r.canRun(),v=C=>{d()||(u?.(),c.resolve(C))},A=C=>{d()||(u?.(),c.reject(C))},b=()=>new Promise(C=>{u=D=>{(d()||h())&&C(D)},r.onPause?.()}).then(()=>{u=void 0,d()||r.onContinue?.()}),_=()=>{if(d())return;let C;const D=s===0?r.initialPromise:void 0;try{C=D??r.fn()}catch(z){C=Promise.reject(z)}Promise.resolve(C).then(v).catch(z=>{if(d())return;const q=r.retry??(kp.isServer()?0:3),Y=r.retryDelay??Hb,G=typeof Y=="function"?Y(s,z):Y,$=q===!0||typeof q=="number"&&s<q||typeof q=="function"&&q(s,z);if(o||!$){A(z);return}s++,r.onFail?.(s,z),Ob(G).then(()=>h()?void 0:b()).then(()=>{o?A(z):_()})})};return{promise:c,status:()=>c.status,cancel:m,continue:()=>(u?.(),c),cancelRetry:y,continueRetry:p,canStart:S,start:()=>(S()?_():b().then(_),c)}}var Np=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),_b(this.gcTime)&&(this.#e=Iu.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(r){this.gcTime=Math.max(this.gcTime||0,r??(kp.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(Iu.clearTimeout(this.#e),this.#e=void 0)}};function jb(r){return{onFetch:(o,s)=>{const u=o.options,c=o.fetchOptions?.meta?.fetchMore?.direction,d=o.state.data?.pages||[],m=o.state.data?.pageParams||[];let y={pages:[],pageParams:[]},p=0;const h=async()=>{let S=!1;const v=_=>{zb(_,()=>o.signal,()=>S=!0)},A=Dp(o.options,o.fetchOptions),b=async(_,C,D)=>{if(S)return Promise.reject(o.signal.reason);if(C==null&&_.pages.length)return Promise.resolve(_);const q=(()=>{const K={client:o.client,queryKey:o.queryKey,pageParam:C,direction:D?"backward":"forward",meta:o.options.meta};return v(K),K})(),Y=await A(q),{maxPages:G}=o.options,$=D?kb:Db;return{pages:$(_.pages,Y,G),pageParams:$(_.pageParams,C,G)}};if(c&&d.length){const _=c==="backward",C=_?qb:Fm,D={pages:d,pageParams:m},z=C(u,D);y=await b(D,z,_)}else{const _=r??d.length;do{const C=p===0?m[0]??u.initialPageParam:Fm(u,y);if(p>0&&C==null)break;y=await b(y,C),p++}while(p<_)}return y};o.options.persister?o.fetchFn=()=>o.options.persister?.(h,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},s):o.fetchFn=h}}}function Fm(r,{pages:o,pageParams:s}){const u=o.length-1;return o.length>0?r.getNextPageParam(o[u],o,s[u],s):void 0}function qb(r,{pages:o,pageParams:s}){return o.length>0?r.getPreviousPageParam?.(o[0],o,s[0],s):void 0}var Gb=class extends Np{#e;#t;#n;#r;#i;#a;#l;#o;constructor(r){super(),this.#o=!1,this.#l=r.defaultOptions,this.setOptions(r.options),this.observers=[],this.#i=r.client,this.#r=this.#i.getQueryCache(),this.queryKey=r.queryKey,this.queryHash=r.queryHash,this.#t=Jm(this.options),this.state=r.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(r){if(this.options={...this.#l,...r},r?._type&&(this.#e=r._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const o=Jm(this.options);o.data!==void 0&&(this.setState(Zm(o.data,o.dataUpdatedAt)),this.#t=o)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(r,o){const s=Mb(this.state.data,r,this.options);return this.#s({data:s,type:"success",dataUpdatedAt:o?.updatedAt,manual:o?.manual}),s}setState(r){this.#s({type:"setState",state:r})}cancel(r){const o=this.#a?.promise;return this.#a?.cancel(r),o?o.then(qt).catch(qt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(r=>Cb(r.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===rc||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(r=>Xu(r.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(r=>r.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(r=0){return this.state.data===void 0?!0:r==="static"?!1:this.state.isInvalidated?!0:!Rb(this.state.dataUpdatedAt,r)}onFocus(){this.observers.find(o=>o.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(o=>o.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(r){this.observers.includes(r)||(this.observers.push(r),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:r}))}removeObserver(r){this.observers.includes(r)&&(this.observers=this.observers.filter(o=>o!==r),this.observers.length||(this.#a&&(this.#o||this.#u()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:r}))}getObserversCount(){return this.observers.length}#u(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}async fetch(r,o){if(this.state.fetchStatus!=="idle"&&this.#a?.status()!=="rejected"){if(this.state.data!==void 0&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(r&&this.setOptions(r),!this.options.queryFn){const p=this.observers.find(h=>h.options.queryFn);p&&this.setOptions(p.options)}const s=new AbortController,u=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(this.#o=!0,s.signal)})},c=()=>{const p=Dp(this.options,o),S=(()=>{const v={client:this.#i,queryKey:this.queryKey,meta:this.meta};return u(v),v})();return this.#o=!1,this.options.persister?this.options.persister(p,S,this):p(S)},m=(()=>{const p={fetchOptions:o,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:c};return u(p),p})();(this.#e==="infinite"?jb(this.options.pages):this.options.behavior)?.onFetch(m,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==m.fetchOptions?.meta)&&this.#s({type:"fetch",meta:m.fetchOptions?.meta}),this.#a=Lp({initialPromise:o?.initialPromise,fn:m.fetchFn,onCancel:p=>{p instanceof Fu&&p.revert&&this.setState({...this.#n,fetchStatus:"idle"}),s.abort()},onFail:(p,h)=>{this.#s({type:"failed",failureCount:p,error:h})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay,networkMode:m.options.networkMode,canRun:()=>!0});try{const p=await this.#a.start();if(p===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(p),this.#r.config.onSuccess?.(p,this),this.#r.config.onSettled?.(p,this.state.error,this),p}catch(p){if(p instanceof Fu){if(p.silent)return this.#a.promise;if(p.revert){if(this.state.data===void 0)throw p;return this.state.data}}throw this.#s({type:"error",error:p}),this.#r.config.onError?.(p,this),this.#r.config.onSettled?.(this.state.data,p,this),p}finally{this.scheduleGc()}}#s(r){const o=s=>{switch(r.type){case"failed":return{...s,fetchFailureCount:r.failureCount,fetchFailureReason:r.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...Yb(s.data,this.options),fetchMeta:r.meta??null};case"success":const u={...s,...Zm(r.data,r.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!r.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=r.manual?u:void 0,u;case"error":const c=r.error;return{...s,error:c,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...r.state}}};this.state=o(this.state),st.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:r})})}};function Yb(r,o){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:zp(o.networkMode)?"fetching":"paused",...r===void 0&&{error:null,status:"pending"}}}function Zm(r,o){return{data:r,dataUpdatedAt:o??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Jm(r){const o=typeof r.initialData=="function"?r.initialData():r.initialData,s=o!==void 0,u=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:s?u??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var Qb=class extends Np{#e;#t;#n;#r;constructor(r){super(),this.#e=r.client,this.mutationId=r.mutationId,this.#n=r.mutationCache,this.#t=[],this.state=r.state||Pb(),this.setOptions(r.options),this.scheduleGc()}setOptions(r){this.options=r,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(r){this.#t.includes(r)||(this.#t.push(r),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:r}))}removeObserver(r){this.#t=this.#t.filter(o=>o!==r),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:r})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(r){const o=()=>{this.#i({type:"continue"})},s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Lp({fn:()=>this.options.mutationFn?this.options.mutationFn(r,s):Promise.reject(new Error("No mutationFn found")),onFail:(d,m)=>{this.#i({type:"failed",failureCount:d,error:m})},onPause:()=>{this.#i({type:"pause"})},onContinue:o,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const u=this.state.status==="pending",c=!this.#r.canStart();try{if(u)o();else{this.#i({type:"pending",variables:r,isPaused:c}),this.#n.config.onMutate&&await this.#n.config.onMutate(r,this,s);const m=await this.options.onMutate?.(r,s);m!==this.state.context&&this.#i({type:"pending",context:m,variables:r,isPaused:c})}const d=await this.#r.start();return await this.#n.config.onSuccess?.(d,r,this.state.context,this,s),await this.options.onSuccess?.(d,r,this.state.context,s),await this.#n.config.onSettled?.(d,null,this.state.variables,this.state.context,this,s),await this.options.onSettled?.(d,null,r,this.state.context,s),this.#i({type:"success",data:d}),d}catch(d){try{await this.#n.config.onError?.(d,r,this.state.context,this,s)}catch(m){Promise.reject(m)}try{await this.options.onError?.(d,r,this.state.context,s)}catch(m){Promise.reject(m)}try{await this.#n.config.onSettled?.(void 0,d,this.state.variables,this.state.context,this,s)}catch(m){Promise.reject(m)}try{await this.options.onSettled?.(void 0,d,r,this.state.context,s)}catch(m){Promise.reject(m)}throw this.#i({type:"error",error:d}),d}finally{this.#n.runNext(this)}}#i(r){const o=s=>{switch(r.type){case"failed":return{...s,failureCount:r.failureCount,failureReason:r.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:r.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:r.isPaused,status:"pending",variables:r.variables,submittedAt:Date.now()};case"success":return{...s,data:r.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:r.error,failureCount:s.failureCount+1,failureReason:r.error,isPaused:!1,status:"error"}}};this.state=o(this.state),st.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(r)}),this.#n.notify({mutation:this,type:"updated",action:r})})}};function Pb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Vb=class extends us{constructor(r={}){super(),this.config=r,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(r,o,s){const u=new Qb({client:r,mutationCache:this,mutationId:++this.#n,options:r.defaultMutationOptions(o),state:s});return this.add(u),u}add(r){this.#e.add(r);const o=Io(r);if(typeof o=="string"){const s=this.#t.get(o);s?s.push(r):this.#t.set(o,[r])}this.notify({type:"added",mutation:r})}remove(r){if(this.#e.delete(r)){const o=Io(r);if(typeof o=="string"){const s=this.#t.get(o);if(s)if(s.length>1){const u=s.indexOf(r);u!==-1&&s.splice(u,1)}else s[0]===r&&this.#t.delete(o)}}this.notify({type:"removed",mutation:r})}canRun(r){const o=Io(r);if(typeof o=="string"){const u=this.#t.get(o)?.find(c=>c.state.status==="pending");return!u||u===r}else return!0}runNext(r){const o=Io(r);return typeof o=="string"?this.#t.get(o)?.find(u=>u!==r&&u.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){st.batch(()=>{this.#e.forEach(r=>{this.notify({type:"removed",mutation:r})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(r){const o={exact:!0,...r};return this.getAll().find(s=>Im(o,s))}findAll(r={}){return this.getAll().filter(o=>Im(r,o))}notify(r){st.batch(()=>{this.listeners.forEach(o=>{o(r)})})}resumePausedMutations(){const r=this.getAll().filter(o=>o.state.isPaused);return st.batch(()=>Promise.all(r.map(o=>o.continue().catch(qt))))}};function Io(r){return r.options.scope?.id}var Ib=class extends us{constructor(r={}){super(),this.config=r,this.#e=new Map}#e;build(r,o,s){const u=o.queryKey,c=o.queryHash??ac(u,o);let d=this.get(c);return d||(d=new Gb({client:r,queryKey:u,queryHash:c,options:r.defaultQueryOptions(o),state:s,defaultOptions:r.getQueryDefaults(u)}),this.add(d)),d}add(r){this.#e.has(r.queryHash)||(this.#e.set(r.queryHash,r),this.notify({type:"added",query:r}))}remove(r){const o=this.#e.get(r.queryHash);o&&(r.destroy(),o===r&&this.#e.delete(r.queryHash),this.notify({type:"removed",query:r}))}clear(){st.batch(()=>{this.getAll().forEach(r=>{this.remove(r)})})}get(r){return this.#e.get(r)}getAll(){return[...this.#e.values()]}find(r){const o={exact:!0,...r};return this.getAll().find(s=>Vm(o,s))}findAll(r={}){const o=this.getAll();return Object.keys(r).length>0?o.filter(s=>Vm(r,s)):o}notify(r){st.batch(()=>{this.listeners.forEach(o=>{o(r)})})}onFocus(){st.batch(()=>{this.getAll().forEach(r=>{r.onFocus()})})}onOnline(){st.batch(()=>{this.getAll().forEach(r=>{r.onOnline()})})}},Xb=class{#e;#t;#n;#r;#i;#a;#l;#o;constructor(r={}){this.#e=r.queryCache||new Ib,this.#t=r.mutationCache||new Vb,this.#n=r.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#l=Op.subscribe(async r=>{r&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=as.subscribe(async r=>{r&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#l?.(),this.#l=void 0,this.#o?.(),this.#o=void 0)}isFetching(r){return this.#e.findAll({...r,fetchStatus:"fetching"}).length}isMutating(r){return this.#t.findAll({...r,status:"pending"}).length}getQueryData(r){const o=this.defaultQueryOptions({queryKey:r});return this.#e.get(o.queryHash)?.state.data}ensureQueryData(r){const o=this.defaultQueryOptions(r),s=this.#e.build(this,o),u=s.state.data;return u===void 0?this.fetchQuery(r):(r.revalidateIfStale&&s.isStaleByTime(Xu(o.staleTime,s))&&this.prefetchQuery(o),Promise.resolve(u))}getQueriesData(r){return this.#e.findAll(r).map(({queryKey:o,state:s})=>{const u=s.data;return[o,u]})}setQueryData(r,o,s){const u=this.defaultQueryOptions({queryKey:r}),d=this.#e.get(u.queryHash)?.state.data,m=Tb(o,d);if(m!==void 0)return this.#e.build(this,u).setData(m,{...s,manual:!0})}setQueriesData(r,o,s){return st.batch(()=>this.#e.findAll(r).map(({queryKey:u})=>[u,this.setQueryData(u,o,s)]))}getQueryState(r){const o=this.defaultQueryOptions({queryKey:r});return this.#e.get(o.queryHash)?.state}removeQueries(r){const o=this.#e;st.batch(()=>{o.findAll(r).forEach(s=>{o.remove(s)})})}resetQueries(r,o){const s=this.#e;return st.batch(()=>(s.findAll(r).forEach(u=>{u.reset()}),this.refetchQueries({type:"active",...r},o)))}cancelQueries(r,o={}){const s={revert:!0,...o},u=st.batch(()=>this.#e.findAll(r).map(c=>c.cancel(s)));return Promise.all(u).then(qt).catch(qt)}invalidateQueries(r,o={}){return st.batch(()=>(this.#e.findAll(r).forEach(s=>{s.invalidate()}),r?.refetchType==="none"?Promise.resolve():this.refetchQueries({...r,type:r?.refetchType??r?.type??"active"},o)))}refetchQueries(r,o={}){const s={...o,cancelRefetch:o.cancelRefetch??!0},u=st.batch(()=>this.#e.findAll(r).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let d=c.fetch(void 0,s);return s.throwOnError||(d=d.catch(qt)),c.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(u).then(qt)}fetchQuery(r){const o=this.defaultQueryOptions(r);o.retry===void 0&&(o.retry=!1);const s=this.#e.build(this,o);return s.isStaleByTime(Xu(o.staleTime,s))?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(r){return this.fetchQuery(r).then(qt).catch(qt)}fetchInfiniteQuery(r){return r._type="infinite",this.fetchQuery(r)}prefetchInfiniteQuery(r){return this.fetchInfiniteQuery(r).then(qt).catch(qt)}ensureInfiniteQueryData(r){return r._type="infinite",this.ensureQueryData(r)}resumePausedMutations(){return as.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(r){this.#n=r}setQueryDefaults(r,o){this.#r.set(Si(r),{queryKey:r,defaultOptions:o})}getQueryDefaults(r){const o=[...this.#r.values()],s={};return o.forEach(u=>{bi(r,u.queryKey)&&Object.assign(s,u.defaultOptions)}),s}setMutationDefaults(r,o){this.#i.set(Si(r),{mutationKey:r,defaultOptions:o})}getMutationDefaults(r){const o=[...this.#i.values()],s={};return o.forEach(u=>{bi(r,u.mutationKey)&&Object.assign(s,u.defaultOptions)}),s}defaultQueryOptions(r){if(r._defaulted)return r;const o={...this.#n.queries,...this.getQueryDefaults(r.queryKey),...r,_defaulted:!0};return o.queryHash||(o.queryHash=ac(o.queryKey,o)),o.refetchOnReconnect===void 0&&(o.refetchOnReconnect=o.networkMode!=="always"),o.throwOnError===void 0&&(o.throwOnError=!!o.suspense),!o.networkMode&&o.persister&&(o.networkMode="offlineFirst"),o.queryFn===rc&&(o.enabled=!1),o}defaultMutationOptions(r){return r?._defaulted?r:{...this.#n.mutations,...r?.mutationKey&&this.getMutationDefaults(r.mutationKey),...r,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Kb=ee.createContext(void 0),Fb=({client:r,children:o})=>(ee.useEffect(()=>(r.mount(),()=>{r.unmount()}),[r]),V.jsx(Kb.Provider,{value:r,children:o}));function Zb(){return V.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:V.jsxs("div",{className:"max-w-md text-center",children:[V.jsx("h1",{className:"text-7xl font-bold text-foreground",children:"404"}),V.jsx("h2",{className:"mt-4 text-xl font-semibold text-foreground",children:"Page not found"}),V.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"The page you're looking for doesn't exist or has been moved."}),V.jsx("div",{className:"mt-6",children:V.jsx(ss,{to:"/",className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Go home"})})]})})}function Jb({error:r,reset:o}){console.error(r);const s=it();return V.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background px-4",children:V.jsxs("div",{className:"max-w-md text-center",children:[V.jsx("h1",{className:"text-xl font-semibold tracking-tight text-foreground",children:"This page didn't load"}),V.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"Something went wrong. You can try refreshing or head back home."}),V.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-2",children:[V.jsx("button",{onClick:()=>{s.invalidate(),o()},className:"inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",children:"Try again"}),V.jsx(ss,{to:"/",className:"inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",children:"Go home"})]})]})})}const ic=ZS()({head:()=>({meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Savant"},{name:"description",content:"Documentation for AI-native data automation"},{property:"og:title",content:"Savant"},{property:"og:description",content:"Documentation for AI-native data automation"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:Wb,notFoundComponent:Zb,errorComponent:Jb});function Wb(){return V.jsxs(V.Fragment,{children:[V.jsx(vb,{}),V.jsx(xp,{})]})}const $b="modulepreload",e0=function(r){return"/savant-kb/"+r},Wm={},Ai=function(o,s,u){let c=Promise.resolve();if(s&&s.length>0){let p=function(h){return Promise.all(h.map(S=>Promise.resolve(S).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),y=m?.nonce||m?.getAttribute("nonce");c=p(s.map(h=>{if(h=e0(h),h in Wm)return;Wm[h]=!0;const S=h.endsWith(".css"),v=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const A=document.createElement("link");if(A.rel=S?"stylesheet":$b,S||(A.as="script"),A.crossOrigin="",A.href=h,y&&A.setAttribute("nonce",y),document.head.appendChild(A),S)return new Promise((b,_)=>{A.addEventListener("load",b),A.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function d(m){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=m,window.dispatchEvent(y),!y.defaultPrevented)throw m}return c.then(m=>{for(const y of m||[])y.status==="rejected"&&d(y.reason);return o().catch(d)})},t0=()=>Ai(()=>import("./docs-AgVhg1eT.js"),__vite__mapDeps([0,1,2,3,4])),n0=ls("/docs")({component:vi(t0,"component")}),a0=()=>Ai(()=>import("./index-DwFzCZCd.js"),__vite__mapDeps([5,1,2,3,6,4])),r0=ls("/")({head:()=>({meta:[{title:"Savant Docs — Documentation for AI-native data automation"},{name:"description",content:"Build governed data workflows with Savant. Guides, agent references, connector docs, and ready-to-clone templates for finance, ops, and analytics teams."},{property:"og:title",content:"Savant"},{property:"og:description",content:"Documentation for AI-native data automation. Workflows, agents, connectors, templates."},{property:"og:type",content:"website"}]}),component:vi(a0,"component")}),i0=()=>Ai(()=>import("./docs.index-wKCD6Rns.js"),__vite__mapDeps([7,4,2])),o0=ls("/docs/")({head:()=>({meta:[{title:"Savant — Build governed data workflows"},{name:"description",content:"Guides, references, and templates for building AI-powered data automations with Savant Labs."},{property:"og:title",content:"Savant"},{property:"og:description",content:"Everything you need to ship governed data workflows with Savant."}]}),component:vi(i0,"component")}),s0=`---\r
title: "ADP connector"\r
collection: "Connectors & Files"\r
description: "Guide to Connecting ADP to Savant."\r
order: 3\r
updated: "2026-04-20"\r
icon: "cloud"\r
---\r
\r
# ADP connector setup\r
\r
ADP is a workforce and payroll management platform. Connecting ADP to Savant allows users to sync workforce, payroll, time, and related HR data into Savant workflows for reporting, analysis, and automation.\r
\r
This connector supports OAuth-based authentication and requires configuration in the ADP Developer Portal before the connection can be completed in Savant.\r
\r
---\r
\r
## Features\r
\r
- Read data from an ADP account using prebuilt schemas and query options.\r
- Write data to ADP for select supported objects.\r
\r
---\r
\r
## Requirements\r
\r
Before setting up the ADP connector, ensure that you have:\r
\r
- An active ADP account, such as ADP Workforce Now.\r
- Access to the ADP Developer Portal.\r
- Administrative privileges to register and manage applications.\r
- Required ADP APIs provisioned for your account.\r
- Client ID and Client Secret generated from the ADP application.\r
- SSL client certificate and certificate password.\r
- Permission to authorize application access in ADP.\r
\r
---\r
\r
## Connection method\r
\r
Savant supports OAuth authentication for ADP.\r
\r
---\r
\r
## Procedure to configure ADP OAuth connection\r
\r
### Step 1: Register an application in the ADP Developer Portal\r
\r
1. Log in to the **ADP Developer Portal**.\r
2. Go to **My Apps > Create App**.\r
3. Complete the application form.\r
\r
    | Field | Description |\r
    |------|-------------|\r
    | App Name | Enter the application name, such as \`Savant ADP Connector\`. |\r
    | Redirect URI | Enter \`https://app.savantlabs.io/api/callback\`. |\r
\r
4. Under **Product API Access**, select the required APIs based on your integration needs.\r
\r
    - HR.v2\r
    - Workers API\r
    - Work Assignment API\r
    - Work Schedules API\r
    - Worker Management API\r
    - Applicant Onboard V2 API\r
    - Payroll Data Input API\r
    - Payroll Output API\r
    - Team Time Cards API\r
    - Time Cards API\r
    - Time Off Balances API\r
    - Time Off Request API\r
    - Validation Table Code List API\r
\r
5. Click **Create App**.\r
\r
6. After the application is created, copy and securely store the following credentials:\r
\r
    - Client ID\r
    - Client Secret\r
    - SSL Client Certificate, such as \`.pfx\` or \`.pem\`\r
    - Certificate password\r
\r
    !!! note "Note"\r
\r
        Set a secure password when downloading the SSL client certificate. You need this password when configuring the ADP connector in Savant.\r
\r
7. Confirm that your ADP account is provisioned for the selected APIs.\r
\r
    If any required API is unavailable, contact your ADP representative to enable access.\r
\r
---\r
\r
### Step 2: Configure permissions and OAuth scopes\r
\r
1. Ensure the required OAuth scopes are granted for the selected ADP APIs.\r
\r
2. Use the following scope mapping as a reference.\r
\r
    | API | Required OAuth Scopes |\r
    |------|-----------------------|\r
    | Workers API | \`workers:read\` |\r
    | Work Assignment API | \`workAssignments:read:write\` |\r
    | Work Schedules API | \`workSchedules:read:write\` |\r
    | Worker Management API | \`workerManagement:read:write\` |\r
    | Applicant Onboard V2 API | \`applicantOnboard:read:write\` |\r
    | Payroll Data Input API | \`payrollDataInput:read:write\` |\r
    | Payroll Output API | \`payrollOutput:read\` |\r
    | Team Time Cards API | \`teamTimeCards:read\` |\r
    | Time Cards API | \`timeCards:read\` |\r
    | Time Off Balances API | \`timeOffBalances:read\` |\r
    | Time Off Request API | \`timeOffRequests:read\` |\r
    | Validation Table Code List API | \`validationTables:read\` |\r
    | Organizations API, if used | \`organizations:read\` |\r
\r
---\r
\r
### Step 3: Connect ADP to Savant\r
\r
1. In Savant, go to **Systems > Add System**.\r
2. Select the **ADP** connector.\r
3. Click **Next**.\r
4. Enter the required connection details.\r
\r
    | Field | Description |\r
    |------|-------------|\r
    | Client ID | Enter the Client ID generated from the ADP application. |\r
    | Client Secret | Enter the Client Secret generated from the ADP application. |\r
    | Base URL | Enter the ADP API base URL. Usually, this is \`https://api.adp.com\`. |\r
    | SSL Client Certificate | Upload the SSL client certificate downloaded from ADP. |\r
    | Certificate Password | Enter the password created when downloading the certificate. |\r
\r
5. Click **Authenticate** to start OAuth authentication.\r
6. Sign in to ADP when prompted.\r
7. Grant the required access.\r
8. After successful authorization, ADP redirects you back to Savant.\r
9. Click **Confirm** to complete the connector setup.\r
\r
---\r
\r
## Troubleshooting\r
\r
| Issue | Possible resolution |\r
|------|---------------------|\r
| Authentication fails | Verify that the Client ID and Client Secret are correct. |\r
| Redirect error occurs | Ensure the redirect URI in ADP exactly matches \`https://app.savantlabs.io/api/callback\`. |\r
| Authorization fails | Confirm that your ADP user has permission to authorize application access. |\r
| API access is unavailable | Verify that the required API products are provisioned in the ADP Developer Portal. |\r
| Scope-related errors occur | Confirm that the selected APIs have the required OAuth scopes. |\r
| Large syncs fail or timeout | Use incremental syncs or contact support if you are ingesting large volumes. |\r
| Certificate authentication fails | Confirm that the uploaded certificate is valid and that the certificate password is correct. |\r
\r
---\r
\r
## Result\r
\r
The ADP connector is configured in Savant using OAuth authentication. Savant can now read supported workforce, payroll, time, and HR data from ADP and write data to supported ADP objects based on the configured permissions.\r
\r
---\r
\r
## Where to go next\r
\r
- [Connectors overview](/savant-kb/docs/connectors-overview)\r
- [Workflows overview](/savant-kb/docs/workflows-overview)\r
`,l0=`---\r
title: "Agents overview"\r
collection: "Platform Concepts"\r
description: "AI agents are the building blocks for inference, transformation, matching, and document extraction."\r
order: 2\r
updated: "2026-05-08"\r
icon: "sparkles"\r
---\r
\r
# Agents overview\r
\r
**Agents** are AI-powered nodes that handle the messy parts of data work — the parts that traditionally require either brittle regex or a human reviewer.\r
\r
Every agent in Savant is:\r
\r
- **Governed** — every decision is logged with the model used, the prompt, the inputs, and a confidence score\r
- **Deterministic where possible** — agents prefer rules and lookups, falling back to LLM calls only when needed\r
- **Reviewable** — low-confidence rows route to a queue, not a hallucination\r
\r
## The agent family\r
\r
| Agent | Purpose | Typical input | Typical output |\r
|---|---|---|---|\r
| [Infer](/savant-kb/docs/infer-agent) | Fill, classify, normalize | Sparse / dirty columns | Cleaned, typed columns |\r
| [Transform](/savant-kb/docs/transform-agent) | Reshape with natural language | Any table | Reshaped table |\r
| [Fuse](/savant-kb/docs/fuse-agent) | Probabilistic join / match | Two tables | Joined table with confidence |\r
| [Vision](/savant-kb/docs/vision-agent) | Extract from documents/images | PDFs, scans, images | Structured rows |\r
| [Match](/savant-kb/docs/match-agent) | Entity resolution | Two entity lists | Match groups |\r
\r
## When to use an agent vs a function\r
\r
Use a **function** when the rule is crisp: \`upper()\`, \`coalesce()\`, \`date_diff()\`.\r
\r
Use an **agent** when the rule is fuzzy: "match these even when the names differ" or "extract the invoice number from this PDF."\r
\r
!!! tip\r
    Always start with functions. Reach for an agent only when you'd otherwise need a human or a regex you'll regret.\r
\r
## Cost and governance\r
\r
Agents call models. Every call is metered and visible in **Settings → Usage**. You can:\r
\r
- Set per-workflow budgets\r
- Choose the model tier (Fast / Balanced / Best)\r
- Pin a workflow to a specific model version for reproducibility\r
\r
## Where to go next\r
\r
- [Infer Agent](/savant-kb/docs/infer-agent)\r
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)\r
`,u0=`---\r
title: "Connectors overview"\r
collection: "Connectors & Files"\r
description: "How Savant talks to databases, warehouses, SaaS apps, and file systems — securely."\r
order: 2\r
updated: "2026-04-18"\r
icon: "plug"\r
---\r
\r
# Connectors overview\r
\r
Savant ships with 200+ connectors covering databases, warehouses, SaaS apps, file systems, and message queues. Every connector follows the same model.\r
\r
## The connector model\r
\r
A connector has three parts:\r
\r
1. **Connection** — credentials and configuration (stored encrypted, scoped to an environment)\r
2. **Source / Destination node** — placed on the canvas to read or write\r
3. **Capabilities** — what the connector supports (schema preview, incremental reads, upserts, etc.)\r
\r
## Authentication\r
\r
Connectors support, where the upstream system allows:\r
\r
- **OAuth 2.0** with token rotation (HubSpot, Salesforce, Google, Microsoft)\r
- **Key + secret** (AWS, Snowflake, most databases)\r
- **Service account JSON** (Google Cloud, BigQuery)\r
- **Username + password** as a last resort\r
\r
Credentials never appear in workflow definitions — only credential **references** do. This means workflows can move freely between environments.\r
\r
## Incremental reads\r
\r
Connectors that support cursors (timestamps, IDs, change tracking) can read **incrementally** — only new or changed rows since the last run. Enable it on the source node:\r
\r
\`\`\`yaml\r
mode: incremental\r
cursor: updated_at\r
\`\`\`\r
\r
## Writes: append, upsert, replace\r
\r
| Mode | Behavior | When to use |\r
|---|---|---|\r
| Append | Insert new rows | Event logs, audit tables |\r
| Upsert | Insert or update by key | Mirroring an upstream system |\r
| Replace | Drop and recreate | Small lookup tables |\r
\r
## Where to go next\r
\r
- [Snowflake connector](/savant-kb/docs/snowflake-connector)\r
- [Excel files](/savant-kb/docs/excel-files)\r
- [S3 connector](/savant-kb/docs/s3-connector)\r
`,c0=`---\r
title: "Files overview"\r
collection: "Connectors & Files"\r
description: "Working with files in Savant."\r
order: 1\r
updated: "2026-04-28"\r
icon: "sheet"\r
---\r
\r
\r
# Files overview\r
\r
Savant supports common file types and enterprise file systems used in data workflows. You can use files as input sources, process them in workflows, and write the results back to supported file destinations.\r
\r
This article describes the file types supported in Savant, the read and write limits for each file type, and the file system connectors available for sourcing and storing files.\r
\r
---\r
\r
## Supported file types\r
\r
Savant supports the following file types as input sources and output targets in workflows.\r
\r
### Flat files\r
\r
Flat files are plain-text tabular files where each row represents a record and each column represents a field.\r
\r
Savant supports the following flat file formats:\r
\r
- \`.csv\`: Comma-separated values.\r
- \`.tsv\`: Tab-separated values.\r
- \`.txt\`: Tab-separated values.\r
\r
### Text blobs\r
\r
A text blob is a plain-text file that Savant reads as a single block of content instead of reading it row by row.\r
\r
Use text blobs when working with unstructured or semi-structured text, such as:\r
\r
- Exported logs.\r
- Raw API responses.\r
- Large freeform documents.\r
- Text files that should not be treated as tables.\r
\r
### Spreadsheets\r
\r
Savant supports Microsoft Excel and Google Sheets formats.\r
\r
Supported spreadsheet formats include:\r
\r
- \`.xlsx\`: Microsoft Excel workbook.\r
- \`.xls\`: Legacy Microsoft Excel workbook.\r
- \`.xlsm\`: Microsoft Excel macro-enabled workbook.\r
- \`.xlsb\`: Microsoft Excel binary workbook.\r
- Google Sheets: Connected through the Google Drive file system or Google Sheets direct connector.\r
\r
### PDF\r
\r
Savant supports \`.pdf\` files for read and write operations.\r
\r
PDF extraction capabilities depend on the structure of the document. For example, extraction behavior may vary depending on whether the PDF contains selectable text, scanned images, tables, or mixed content.\r
\r
### Parquet\r
\r
Savant supports \`.parquet\` files for columnar data workloads.\r
\r
Parquet is recommended for large-scale dataset processing because it is optimized for efficient storage and analytical workloads.\r
\r
---\r
\r
## Read and write limits\r
\r
The following table summarizes the read and write size limits by file type. Limits apply per file and per operation.\r
\r
| Extension | Type | Read limit | Write limit |\r
|------|------|------------|-------------|\r
| \`.csv\` | Comma-separated flat file | 1 GB | 1 GB |\r
| \`.tsv\` | Tab-separated flat file | 1 GB | 1 GB |\r
| \`.txt\` | Flat file or text blob | 1 GB | 1 GB |\r
| \`.xlsx\` | Excel spreadsheet | 1 GB | 1 GB ¹ |\r
| \`.xls\` | Legacy Excel spreadsheet | 50 MB | N/A |\r
| \`.xlsm\` | Excel macro-enabled spreadsheet | 1 GB | 1 GB ¹ |\r
| \`.xlsb\` | Excel binary spreadsheet | 1 GB | N/A |\r
| \`.gsheet\` | Google Sheets | 1 GB | 1 GB ² |\r
| \`.pdf\` | PDF | 1 GB | 1 GB |\r
| \`.parquet\` | Parquet | 1 GB | 1 GB |\r
\r
¹ When writing spreadsheets through the Microsoft OneDrive or SharePoint connectors, the write limit is **250 MB**. This limit is imposed by the Microsoft Graph API and applies regardless of file format.\r
\r
² When writing spreadsheets through Google Drive, the worksheet is limited to **10 million cells**. This limit is imposed by Google Sheets and includes both empty and populated cells.\r
\r
---\r
\r
## File type guides\r
\r
Each file type has its own configuration options, parsing behavior, and known limitations.\r
\r
Select the appropriate guide based on the file type you want to use:\r
\r
- Flat files and text blobs\r
- Spreadsheets, including Excel and Google Sheets\r
- PDF\r
- Parquet\r
\r
---\r
\r
## File system connectors\r
\r
Savant integrates with common enterprise file systems. Each connector is configured separately and may have its own authentication method, path format, and performance considerations.\r
\r
For setup instructions and connector-specific limits, refer to the individual connector guides:\r
\r
- Microsoft OneDrive\r
- Microsoft SharePoint\r
- Google Drive\r
- Box\r
- Dropbox\r
- SFTP/FTP\r
\r
---\r
\r
## Summary\r
\r
Savant provides native support for common enterprise file formats and file systems. You can read supported files into workflows, process the data, and write results back to supported destinations while following the file-specific size limits and connector-specific constraints.\r
\r
---\r
\r
## Where to go next\r
\r
- [Google Sheets](/savant-kb/docs/google-sheets)\r
- [S3 connector](/savant-kb/docs/s3-connector)\r
`,f0=`---\r
title: "Financial reconciliation template"\r
collection: "Templates & Solutions"\r
description: "Match transactions between your bank statement and general ledger, surface breaks, and produce auditor-ready evidence."\r
order: 2\r
updated: "2026-05-10"\r
icon: "balance"\r
---\r
\r
# Financial reconciliation\r
\r
This template reconciles transactions between a bank statement (or any external source of truth) and a general ledger. It produces three outputs:\r
\r
1. **Matched** — rows that tie, with the matching rule recorded\r
2. **Breaks** — rows on one side without a partner, grouped by reason\r
3. **Evidence pack** — signed PDF for your auditor\r
\r
## The pipeline\r
\r
\`\`\`text\r
[Bank file] ─┐\r
             ├─► [Normalize] ─► [Fuse: amount+date±2d, memo fuzzy] ─► [Classify breaks] ─► [Outputs]\r
[GL extract]─┘\r
\`\`\`\r
\r
## What you customize\r
\r
- **Sources** — point at your bank file (CSV / OFX) and your GL extract (Snowflake / NetSuite / SAP)\r
- **Match tolerances** — the date window and amount tolerance (default ±2 days, ±$0.01)\r
- **Break categorization rules** — timing, in-transit, FX, duplicate, missing\r
- **Reviewer assignment** — who gets each break category in Slack/email\r
\r
## Break categorization\r
\r
The template classifies every break:\r
\r
| Category | Rule |\r
|---|---|\r
| Timing | Match exists in the next period |\r
| In transit | Wire or ACH note in memo, no GL entry yet |\r
| FX | Match within 1% if rate adjusted |\r
| Duplicate | More than one candidate match |\r
| Unknown | Routed to a human |\r
\r
## Audit evidence\r
\r
On every run, the template assembles a PDF including:\r
\r
- The matched/break counts and dollar totals\r
- A sample of each break category\r
- The exact workflow version hash and run ID\r
- A cryptographic signature of the inputs\r
\r
Drop it directly into your audit folder.\r
\r
## Where to go next\r
\r
- [Fuse Agent](/savant-kb/docs/fuse-agent)\r
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)\r
`,d0='---\r\ntitle: "Functions reference"\r\ncollection: "Reference"\r\ndescription: "Every built-in function — string, date, math, array, conditional — with examples."\r\norder: 1\r\nupdated: "2026-05-12"\r\nicon: "function"\r\n---\r\n\r\n# Functions reference\r\n\r\nSavant functions help users transform, format, calculate, classify, and enrich data inside workflows. Functions can be used in calculated columns, transformations, and expression-based logic to prepare data for analysis, reporting, and automation.\r\n\r\n---\r\n\r\n## Date and DateTime\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| DATETIME | Creates a datetime based on the provided year, month, day, hour, minute, and second values. | `DATETIME(year, month, day, hour, minute, second)` |\r\n| DATE | Creates a date based on the provided year, month, and day values. | `DATE(year, month, day)` |\r\n| DATE_ADD | Adds a specified offset of time to a date or datetime. | `DATE_ADD(date, offset, "second/minute/hour/day/month/year")` |\r\n| DATE_DIFF | Calculates the difference between two dates. | `DATE_DIFF(end_date, start_date, "second/minute/hour/day/week/month/quarter/year")` |\r\n| DAY | Retrieves the day of the month from a date or datetime. | `DAY(date)` |\r\n| DAY_OF_WEEK | Determines the day of the week for a date or datetime. | `DAY_OF_WEEK(date, ["monday/tuesday/wednesday/thursday/friday/saturday/sunday"])` |\r\n| DAY_OF_YEAR | Calculates the day of the year for a date or datetime. | `DAY_OF_YEAR(date)` |\r\n| DAYS_IN_MONTH | Calculates the number of days in the month for a date or datetime. | `DAYS_IN_MONTH(date)` |\r\n| DAYS_IN_YEAR | Calculates the number of days in a year, including leap years. | `DAYS_IN_YEAR(date)` |\r\n| HOUR | Extracts the hour from a datetime. | `HOUR(datetime)` |\r\n| INTERVAL (Date) | Adds days, weeks, months, quarters, or years to a date. | `date + INTERVAL number DAY/MONTH/YEAR` |\r\n| INTERVAL (DateTime) | Adds seconds, minutes, or hours to a datetime. | `datetime + INTERVAL number SECOND/MINUTE/HOUR` |\r\n| LIST_TO_TEXT | Concatenates inputs from a list variable into text. | `LIST_TO_TEXT(list)` |\r\n| MINUTE | Extracts the minute from a datetime. | `MINUTE(datetime)` |\r\n| MONTH | Retrieves the month from a date. | `MONTH(date)` |\r\n| NOW | Retrieves the current date and time. | `NOW()` |\r\n| QUARTER | Retrieves the quarter of the year from a date or datetime. | `QUARTER(date)` |\r\n| SECOND | Extracts the second from a datetime. | `SECOND(datetime)` |\r\n| TIME_PERIOD | Returns a standard time period for a date or datetime field. | `TIME_PERIOD(date, "day"/"week"/"month"/"quarter"/"year")` |\r\n| TIME_PERIOD_OFFSET | Calculates the number of time periods between a date and the current period. | `TIME_PERIOD_OFFSET(date, "day"/"week"/"month"/"quarter"/"year"/"decade")` |\r\n| TODAY | Retrieves the current date. | `TODAY()` |\r\n| WEEK / WEEK_OF_YEAR | Determines the week number of the year for a date or datetime. | `WEEK(date)` |\r\n| YEAR | Retrieves the year from a date or datetime. | `YEAR(date)` |\r\n\r\n---\r\n\r\n## Formatting\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| TO_BOOLEAN | Converts a value to a boolean format. | `TO_BOOLEAN(value)` |\r\n| TO_DATETIME | Converts text to datetime format. | `TO_DATETIME(text)` |\r\n| TO_DATE | Converts text to date format. | `TO_DATE(text)` |\r\n| TO_INTEGER | Converts a value to an integer. | `TO_INTEGER(value)` |\r\n| TO_NUMBER | Converts a value to number format. | `TO_NUMBER(value)` |\r\n| TO_TEXT | Converts a value to text format. | `TO_TEXT(value)` or `TO_TEXT(datetime, "[format]")` |\r\n\r\n---\r\n\r\n## Geospatial\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| GEO_AREA | Calculates the area of a polygon in square miles or square kilometers. | `GEO_AREA(geometry, [unit])` |\r\n| GEO_BUFFER | Creates a buffer polygon around a geometry at a specified distance. | `GEO_BUFFER(geometry, distance, [unit])` |\r\n| GEO_CENTROID | Returns the geometric center point of a polygon or multi-geometry. | `GEO_CENTROID(geometry)` |\r\n| GEO_DIFFERENCE | Returns the portion of the first geometry that does not overlap with the second geometry. | `GEO_DIFFERENCE(geometry1, geometry2)` |\r\n| GEO_INTERSECTION | Returns the overlapping portion of two geometries. | `GEO_INTERSECTION(geometry1, geometry2)` |\r\n| GEO_ISVALID | Validates whether a geometry is topologically valid. | `GEO_ISVALID(geometry)` |\r\n| GEO_PERIMETER | Calculates the perimeter length of a polygon in miles or kilometers. | `GEO_PERIMETER(geometry, [unit])` |\r\n| GEO_POINT | Creates a point geometry from longitude and latitude coordinates. | `GEO_POINT(longitude, latitude)` |\r\n| GEO_SPATIAL_DISTANCE | Calculates the distance between two geometries. | `GEO_SPATIAL_DISTANCE(geometry1, geometry2, [unit])` |\r\n| GEO_TRADE_AREA | Creates a radius-based trade area polygon around a point. | `GEO_TRADE_AREA(point, radius, [unit])` |\r\n| GEO_TYPE | Returns the geometry type, such as Point, Polygon, or LineString. | `GEO_TYPE(geometry)` |\r\n| GEO_UNION | Combines two geometries into a single geometry. | `GEO_UNION(geometry1, geometry2)` |\r\n\r\n---\r\n\r\n## Keywords\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| CASE...WHEN... | Evaluates conditions and returns a value based on the first true condition. | `CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE default_result END` |\r\n| IN | Checks if a value exists within a specified set of values. | `IN (..., ...)` |\r\n\r\n---\r\n\r\n## Logical\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| IFS | Returns a value corresponding to the first true condition. | `IFS(condition1, value1, condition2, value2, ...)` |\r\n| IF | Returns one value if a condition is true and another value if false. | `IF(condition, value when true, value when false)` |\r\n\r\n---\r\n\r\n## Math\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| ABS | Returns the absolute value of a number. | `ABS(number)` |\r\n| CEIL | Rounds a number up to the nearest integer. | `CEIL(number)` |\r\n| FLOOR | Rounds a number down to the nearest integer. | `FLOOR(number)` |\r\n| GEO_DISTANCE | Calculates the distance between two points. | `GEO_DISTANCE(lat1, long1, lat2, long2, [unit])` |\r\n| GREATEST | Returns the greatest value among the given arguments. | `GREATEST(arg1, arg2, ...)` |\r\n| LEAST | Returns the smallest value among the given arguments. | `LEAST(arg1, arg2, ...)` |\r\n| LOG | Calculates the logarithm of a number to a specified base. | `LOG(number, base)` |\r\n| MOD | Returns the remainder of a division operation. | `MOD(dividend, divisor)` |\r\n| POWER | Raises a number to the power of another number. | `POWER(number, exponent)` |\r\n| RANDOM | Generates a random decimal value between 0 and 1. | `RANDOM()` |\r\n| ROUNDDOWN | Rounds a number down to the nearest integer. | `ROUNDDOWN(number)` |\r\n| ROUNDUP | Rounds a number up to the nearest integer. | `ROUNDUP(number)` |\r\n| ROUND | Rounds a number to a specified number of decimal places. | `ROUND(number, [decimals])` |\r\n\r\n---\r\n\r\n## Multi-row aggregation and windowing\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| AVG | Calculates the average value of numbers. | `AVG(number)` |\r\n| CONCAT | Combines all text values. | `CONCAT(text)` |\r\n| CONCAT_DISTINCT | Combines unique text values. | `CONCAT_DISTINCT(text)` |\r\n| COUNT | Counts the number of values. | `COUNT(arg)` |\r\n| COUNT_DISTINCT | Counts the distinct number of values. | `COUNT_DISTINCT(arg)` |\r\n| CUMULATIVE_SUM | Calculates the running sum. | `CUMULATIVE_SUM(number)` |\r\n| FILL | Populates missing values using values above or below the row. | `FILL(arg)` |\r\n| FIRST | Returns the first-row value. | `FIRST(arg)` |\r\n| LAG | Returns the previous-row value. | `LAG(arg)` |\r\n| LAST | Returns the last-row value. | `LAST(arg)` |\r\n| LEAD | Returns the next-row value. | `LEAD(arg)` |\r\n| MAX | Returns the maximum value. | `MAX(arg)` |\r\n| MEDIAN | Returns the median value. | `MEDIAN(number)` |\r\n| MIN | Returns the minimum value. | `MIN(arg)` |\r\n| NTILE | Assigns a bucket number based on the number of tiles requested. | `NTILE(arg)` |\r\n| RANK | Assigns a rank to each row, with ties receiving the same rank. | `RANK()` |\r\n| ROW_NUM | Assigns a row number to each row, with ties receiving different values. | `ROW_NUM()` |\r\n| STDDEV | Calculates the standard deviation of numbers. | `STDDEV(number)` |\r\n| SUM | Calculates the sum of numbers. | `SUM(number)` |\r\n| VAR | Calculates the variance of numbers. | `VAR(number)` |\r\n\r\n---\r\n\r\n## Text\r\n\r\n| Name | Description | Syntax |\r\n|------|-------------|--------|\r\n| COALESCE | Returns the first non-null value from a list of options. | `COALESCE(option1, option2, ...)` |\r\n| CONCAT | Concatenates multiple text values into a single text value. | `CONCAT(text1, text2, ...)` |\r\n| CONTAINS | Determines whether a specified subtext exists within text. | `CONTAINS(text, subtext)` |\r\n| FIRST_NOT_EMPTY | Returns the first non-empty value from a list of options. | `FIRST_NOT_EMPTY(option1, option2, ...)` |\r\n| HASH | Computes the hash value of text using MD5 or SHA-1. | `HASH("md5"/"sha1", text)` |\r\n| HTML_ESCAPE | Escapes HTML special characters in text. | `ESCAPE_HTML(text)` |\r\n| IS_EMPTY | Checks if a value or field is empty. | `IS_EMPTY(arg)` |\r\n| JSON_FIELD | Extracts a specific field from JSON data. | `JSON_FIELD(json, json_path)` |\r\n| JSON_SET | Sets a value for a specific field in JSON data. | `JSON_SET(json, json_path, value)` |\r\n| JWT_ENCODE | Encodes a JSON Web Token using an algorithm, key, payload, and optional header. | `JWT_ENCODE(algorithm, key, payload_json_text, [header_json_text])` |\r\n| LEFT_PART | Retrieves the leftmost characters from text. | `LEFT_PART(text, number)` |\r\n| LENGTH | Computes the number of characters in text. | `LENGTH(text)` |\r\n| LEVENSHTEIN | Measures the edit distance between two text values. | `LEVENSHTEIN(text1, text2)` |\r\n| LOWER | Converts text to lowercase. | `LOWER(text)` |\r\n| MID | Extracts a portion of text from a specified position. | `MID(text, start, [length])` |\r\n| PAD_LEFT | Adds padding characters to the left side of text. | `PAD_LEFT(text, length, character)` |\r\n| PAD_RIGHT | Adds padding characters to the right side of text. | `PAD_RIGHT(text, length, character)` |\r\n| PROPER | Capitalizes the first letter of each word in text. | `PROPER(text)` |\r\n| REGEX_EXTRACT | Extracts text that matches a regular expression pattern. | `REGEX_EXTRACT(text, "pattern", [offset])` |\r\n| REGEX_MATCH | Checks if text matches a regular expression pattern. | `REGEX_MATCH(text, "pattern")` |\r\n| REGEX_REPLACE | Replaces text that matches a regular expression pattern. | `REGEX_REPLACE(text, "pattern", replacement)` |\r\n| REGEX_SEARCH | Returns the index of the first matching subtext based on a regular expression pattern. | `REGEX_SEARCH(text, "pattern", [offset])` |\r\n| REPEAT | Repeats text a specified number of times. | `REPEAT(text, number)` |\r\n| REPLACE | Replaces all occurrences of search text with replacement text. | `REPLACE(text, search, replace)` |\r\n| REVERSE | Reverses the order of characters in text. | `REVERSE(text)` |\r\n| RIGHT_PART | Extracts the rightmost characters from text. | `RIGHT_PART(text, number)` |\r\n| SEARCH | Searches for subtext and returns the index of the first occurrence. | `SEARCH(text, search)` |\r\n| SOUNDEX | Converts text to a SOUNDEX code for phonetic matching. | `SOUNDEX(text)` |\r\n| SPLIT_PART | Extracts a specific part of text using a delimiter. | `SPLIT_PART(text, delimiter, part)` |\r\n| TRIM | Removes leading and trailing spaces. | `TRIM(text)` |\r\n| UNESCAPE_HTML | Converts HTML escape sequences back to original characters. | `UNESCAPE_HTML(text)` |\r\n| UPPER | Converts text to uppercase. | `UPPER(text)` |\r\n\r\n---\r\n\r\n## Where to go next\r\n\r\n- [Keyboard shortcuts](/savant-kb/docs/keyboard-shortcuts)\r\n- [Transform Agent](/savant-kb/docs/transform-agent)\r\n',h0=`---\r
title: "Fuse Agent"\r
collection: "Agents"\r
description: "Probabilistic joins for entities that don't share a clean key."\r
order: 3\r
updated: "2026-05-09"\r
icon: "link"\r
---\r
\r
# Fuse Agent\r
\r
The **Fuse Agent** joins two tables when there's no clean shared key — for example, matching invoices in your AP system to vendor records that someone typed by hand.\r
\r
## How it differs from a SQL JOIN\r
\r
A SQL \`JOIN\` requires exact matches. Fuse uses a multi-signal scoring model:\r
\r
- **Exact match** on any provided strong key (highest score)\r
- **Fuzzy string** similarity on name fields\r
- **Phonetic** match (Soundex / Metaphone) for typos\r
- **Domain knowledge** (email domain, address tokens, tax IDs)\r
\r
Each candidate pair gets a score 0–1. You set the threshold; everything above auto-matches, everything below routes to review.\r
\r
## Configuration\r
\r
\`\`\`yaml\r
left: ap_invoices\r
right: vendor_master\r
keys:\r
  - left: vendor_name,      right: name,        weight: 0.5, mode: fuzzy\r
  - left: tax_id,           right: ein,         weight: 0.4, mode: exact\r
  - left: invoice_address,  right: hq_address,  weight: 0.1, mode: fuzzy\r
threshold: 0.8\r
\`\`\`\r
\r
## Output\r
\r
Fuse emits a join with extra columns:\r
\r
| ... | _fuse_score | _fuse_explain |\r
|---|---|---|\r
| ... | 0.97 | exact tax_id, name fuzzy 0.94 |\r
| ... | 0.72 | name fuzzy 0.72, address mismatch |\r
\r
The \`_fuse_explain\` column makes review fast — a human can read it and decide in seconds.\r
\r
!!! tip\r
    Start with a high threshold (\`0.9\`) and lower it after seeing the review queue. Most teams settle around \`0.82–0.85\`.\r
\r
## Where to go next\r
\r
- [Match Agent](/savant-kb/docs/match-agent) — when you need transitive entity resolution\r
- [Financial reconciliation template](/savant-kb/docs/financial-reconciliation)\r
`,m0=`---\r
title: "Google Sheets"\r
collection: "Connectors & Files"\r
description: "Read and write live Google Sheets — by URL, with named ranges, and through service accounts."\r
order: 4\r
updated: "2026-04-25"\r
icon: "sheet"\r
---\r
\r
# Google Sheets\r
\r
The Google Sheets connector reads and writes live sheets. Most teams use it as a lightweight UI for non-technical reviewers.\r
\r
## Authentication\r
\r
Two options:\r
\r
- **OAuth** — best for individual users; the connection acts as that user\r
- **Service account** — best for production; share each sheet with the service account's email\r
\r
## Reading\r
\r
Configure by URL or by spreadsheet ID + sheet name:\r
\r
\`\`\`yaml\r
spreadsheet:  https://docs.google.com/spreadsheets/d/1ABCxyz.../edit\r
sheet:        Reviewed Items\r
range:        A1:Z          # optional; defaults to full sheet\r
header_row:   1\r
\`\`\`\r
\r
## Writing\r
\r
Three modes:\r
\r
| Mode | Behavior |\r
|---|---|\r
| Overwrite | Clear sheet, write rows |\r
| Append | Add rows below existing data |\r
| Upsert | Update rows matching a key, append the rest |\r
\r
## Patterns that work\r
\r
- **Review queues** — write low-confidence rows to a sheet, let analysts edit, read them back on the next run.\r
- **Lookup tables** — let business users own dictionaries (account mappings, exclusion lists) without touching the workflow.\r
- **Status dashboards** — write a one-row summary on every run for finance to glance at.\r
\r
!!! warning\r
    Google Sheets has hard limits (10M cells per spreadsheet, ~5M cell-edits/minute API). For datasets above a few hundred thousand rows, write to a warehouse instead and connect the sheet via Connected Sheets.\r
\r
## Where to go next\r
\r
- [Excel files](/savant-kb/docs/excel-files)\r
- [Snowflake connector](/savant-kb/docs/snowflake-connector)\r
`,p0=`---\r
title: "Governance & audit trail"\r
collection: "Platform Concepts"\r
description: "Every decision in Savant is logged, attributable, and reproducible — by design."\r
order: 3\r
updated: "2026-04-22"\r
icon: "shield"\r
---\r
\r
# Governance & audit trail\r
\r
Finance, audit, and regulated teams adopt Savant because **every output can be traced back to every input** — automatically, without you having to instrument anything.\r
\r
## What gets logged\r
\r
For every run, Savant records:\r
\r
- The exact workflow version that ran (immutable hash)\r
- The model versions used by any agents\r
- The connector credentials used (by reference, never the secret)\r
- A sample of inputs and outputs at every edge\r
- Who triggered the run, and how (manual, scheduled, API)\r
\r
## The lineage graph\r
\r
Every output cell has a back-pointer to the source rows that produced it. Click a cell in the run inspector → **Trace lineage** to see:\r
\r
\`\`\`text\r
output[42].total ──► transform[3].sum ──► source[s3://drops/orders/2025-05-12.csv]:rows[11..18]\r
\`\`\`\r
\r
This is the single fastest way to answer the question *"where did this number come from?"*\r
\r
## Approvals and locked versions\r
\r
For sensitive workflows, enable **Require approval to deploy** in the workflow settings. The flow becomes:\r
\r
1. A Builder edits and tests in the Development environment.\r
2. They open a **Promote to Production** request.\r
3. A Deployer reviews the diff (node-by-node) and approves or rejects.\r
4. The approved version is hashed and locked — any further edit creates a new version.\r
\r
## Exporting the audit trail\r
\r
For SOC 2 / SOX evidence, export runs as a signed JSON bundle:\r
\r
\`\`\`bash\r
savant audit export \\\r
  --workflow orders-enrichment \\\r
  --from 2025-01-01 --to 2025-03-31 \\\r
  --out q1-evidence.json\r
\`\`\`\r
\r
The bundle includes a cryptographic manifest so auditors can verify nothing has been tampered with after export.\r
\r
## Where to go next\r
\r
- [Workspace setup](/savant-kb/docs/workspace-setup)\r
- [API tokens](/savant-kb/docs/api-tokens)\r
`,g0=`---\r
title: "Infer Agent"\r
collection: "Agents"\r
description: "Enrich, classify, and label data with AI – directly inside your analysis."\r
order: 1\r
updated: "2026-05-12"\r
icon: "sparkles"\r
---\r
\r
# Infer Agent\r
\r
Infer Agent brings generative AI into data preparation so users can enrich, classify, label, and standardize data directly inside an analysis. It helps convert raw or incomplete fields into structured, useful outputs that can support reporting, modeling, automation, and operational workflows.\r
\r
Many datasets contain useful information but lack the context needed for analysis. For example, a job title may exist without seniority, a support ticket may describe an issue without a topic, or a customer comment may include feedback without a sentiment label. Infer Agent helps generate this missing context without requiring users to export data to a separate AI tool or wait for engineering support.\r
\r
In Savant, Infer Agent uses a prompt-driven approach. Users select an LLM service, define a prompt, choose the fields to transform, and write the AI-generated output back to the dataset as a new AI Answer field.\r
\r
---\r
\r
## Features\r
\r
- Enrich existing data with AI-generated context.\r
- Classify records by category, topic, entity type, or business dimension.\r
- Label customer feedback, support tickets, comments, and other text fields.\r
- Standardize messy or inconsistent free-text inputs.\r
- Generate structured outputs from existing data fields.\r
- Process rows using streaming or batch-based execution.\r
- Preview sampled AI results during development before running the full workflow.\r
\r
---\r
\r
## Common use cases\r
\r
### Fill in missing attributes\r
\r
Use Infer Agent to infer missing details from related fields and available record context.\r
\r
For example, you can infer:\r
\r
- Seniority from a job title.\r
- Country or region from a city.\r
- Department from a role description.\r
- Product category from a description.\r
\r
### Classify records and topics\r
\r
Use Infer Agent to assign categories, topics, entity types, or business labels to records.\r
\r
For example, you can classify:\r
\r
- Support tickets by issue type.\r
- Customer comments by topic.\r
- Accounts by industry.\r
- Leads by business segment.\r
\r
### Standardize free-text inputs\r
\r
Use Infer Agent to convert inconsistent text into cleaner and more structured outputs.\r
\r
For example, you can standardize:\r
\r
- Descriptions.\r
- Notes.\r
- Addresses.\r
- Customer-entered values.\r
- Free-text survey responses.\r
\r
### Run sentiment analysis at scale\r
\r
Use Infer Agent to tag feedback, comments, reviews, or support tickets with sentiment labels.\r
\r
For example:\r
\r
- Positive\r
- Negative\r
- Neutral\r
\r
### Enrich data for downstream use\r
\r
Use Infer Agent to generate additional context that improves dashboards, automations, and decision workflows.\r
\r
For example, you can create:\r
\r
- Summary fields.\r
- Risk labels.\r
- Priority labels.\r
- Business descriptions.\r
- Recommended next actions.\r
\r
---\r
\r
## How Infer Agent works\r
\r
Infer Agent is prompt-driven. You define what you want the AI model to generate, select the input fields, and configure how the rows should be processed.\r
\r
At a high level, the process includes:\r
\r
1. Select an LLM service.\r
2. Write a prompt that explains the expected output.\r
3. Choose the field or fields to transform.\r
4. Configure the processing method.\r
5. Apply the configuration during development.\r
6. Review the generated AI Answer field.\r
7. Run the full workflow when the prompt output is acceptable.\r
\r
The model output is written back to the dataset as a new **AI Answer** field.\r
\r
---\r
\r
## Model and processing options\r
\r
Infer Agent is designed to support modern LLM workflows in a governed analytics environment.\r
\r
Teams can use:\r
\r
- Savant-managed LLM access for lightweight testing.\r
- Their own model configuration for broader production use.\r
\r
Infer Agent also supports different processing approaches based on dataset size and workflow needs:\r
\r
| Processing option | Description |\r
|------|-------------|\r
| Streaming | Processes smaller datasets and provides quicker feedback during development. |\r
| Batch processing | Processes larger datasets in batches for more scalable execution. |\r
\r
---\r
\r
## Development preview behavior\r
\r
To help conserve LLM usage and make prompt testing easier, Infer Agent samples rows during development.\r
\r
When you click **Apply** in development mode:\r
\r
- Savant calculates 5 new records.\r
- Clicking **Apply** again calculates 5 additional records.\r
- This continues until the configured maximum is reached.\r
- When the full workflow runs, all eligible rows are processed.\r
- Up to 1000 records are visible in the development preview.\r
\r
This behavior explains why users may not see the entire dataset refreshed immediately while testing or refining prompts.\r
\r
---\r
\r
## Prompting best practices\r
\r
Infer Agent works best when prompts are specific, structured, and clear.\r
\r
Use the following best practices when writing prompts:\r
\r
- Clearly describe the task.\r
- Define the expected output format.\r
- Use a fixed set of labels when classification is required.\r
- Specify whether the answer should be short or detailed.\r
- Include rules for uncertain or missing information.\r
- Ask the model to return a blank value if the answer cannot be inferred.\r
- Avoid vague instructions that can produce inconsistent results.\r
\r
### Example prompt for classification\r
\r
\`\`\`text\r
Classify the support ticket into one of the following categories:\r
Billing, Login issue, Data issue, Feature request, Other.\r
\r
Return only the category name. If the category cannot be determined, return Other.\r
\`\`\`\`\r
\r
### Example prompt for sentiment analysis\r
\r
\`\`\`text\r
Classify the customer comment as Positive, Negative, or Neutral.\r
\r
Return only one label. If the sentiment is unclear, return Neutral.\r
\`\`\`\r
\r
### Example prompt for enrichment\r
\r
\`\`\`text\r
Infer the likely seniority level from the job title.\r
\r
Return one of the following values:\r
Entry level, Manager, Director, Executive, Unknown.\r
\r
If the seniority cannot be inferred, return Unknown.\r
\`\`\`\r
\r
---\r
\r
## What makes Infer Agent different\r
\r
Infer Agent is designed for analytics workflows, not general conversation. The goal is to generate structured, repeatable, and governed outputs inside a dataset.\r
\r
This makes it useful for analysts who want to use LLMs for data enrichment without leaving the Savant workflow environment.\r
\r
---\r
\r
## Best for\r
\r
Infer Agent is best for teams that want to:\r
\r
* Enrich incomplete datasets.\r
* Classify records at scale.\r
* Label text fields consistently.\r
* Standardize messy inputs.\r
* Generate structured AI outputs inside Savant.\r
* Prepare data for dashboards, automations, models, and operational workflows.\r
\r
---\r
\r
## Summary\r
\r
Infer Agent helps users apply generative AI directly inside Savant analyses. By using prompts and selected input fields, users can generate new structured outputs, classify records, fill missing context, and standardize data without leaving the data preparation workflow.\r
\r
---\r
\r
## Where to go next\r
\r
- [Transform Agent](/savant-kb/docs/transform-agent)\r
- [Functions reference](/savant-kb/docs/functions-reference)\r
`,y0=`---\r
title: "Keyboard shortcuts"\r
collection: "Reference"\r
description: "Move through the canvas, inspector, and command palette without touching the mouse."\r
order: 2\r
updated: "2026-05-01"\r
icon: "keyboard"\r
---\r
\r
# Keyboard shortcuts\r
\r
Savant is designed to be fast for builders who don't want to take their hands off the keyboard.\r
\r
## Global\r
\r
| Shortcut | Action |\r
|---|---|\r
| <kbd>⌘</kbd> <kbd>K</kbd> | Open command palette |\r
| <kbd>⌘</kbd> <kbd>/</kbd> | Open search |\r
| <kbd>g</kbd> <kbd>w</kbd> | Go to workflows |\r
| <kbd>g</kbd> <kbd>r</kbd> | Go to recent runs |\r
| <kbd>g</kbd> <kbd>s</kbd> | Go to settings |\r
| <kbd>?</kbd> | Show this shortcut sheet |\r
\r
## Canvas\r
\r
| Shortcut | Action |\r
|---|---|\r
| <kbd>n</kbd> | New node |\r
| <kbd>Space</kbd> + drag | Pan |\r
| <kbd>⌘</kbd> + scroll | Zoom |\r
| <kbd>f</kbd> | Fit to screen |\r
| <kbd>⌫</kbd> | Delete selected node |\r
| <kbd>⌘</kbd> <kbd>D</kbd> | Duplicate node |\r
| <kbd>⌘</kbd> <kbd>Z</kbd> / <kbd>⇧⌘Z</kbd> | Undo / redo |\r
\r
## Inspector\r
\r
| Shortcut | Action |\r
|---|---|\r
| <kbd>⌘</kbd> <kbd>↵</kbd> | Run step |\r
| <kbd>⇧⌘↵</kbd> | Run full workflow |\r
| <kbd>[ </kbd> / <kbd>]</kbd> | Previous / next node |\r
| <kbd>⌘</kbd> <kbd>L</kbd> | View run logs |\r
\r
## Editor (inside expression/code fields)\r
\r
| Shortcut | Action |\r
|---|---|\r
| <kbd>⌃</kbd> <kbd>Space</kbd> | Autocomplete |\r
| <kbd>⌘</kbd> <kbd>P</kbd> | Insert column reference |\r
| <kbd>⌘</kbd> <kbd>F</kbd> | Find in code |\r
\r
## Where to go next\r
\r
- [Functions reference](/savant-kb/docs/functions-reference)\r
`,v0=`---\r
title: "Match Agent"\r
collection: "Agents"\r
description: "Entity resolution across two or more lists — find the same thing under different names."\r
order: 5\r
updated: "2026-05-04"\r
icon: "merge"\r
---\r
\r
# Match Agent\r
\r
The **Match Agent** answers a different question than Fuse: *"which of these rows describe the same real-world thing?"* It clusters entities **within** and **across** tables.\r
\r
## When to use Match\r
\r
- Deduplicating a customer list where the same customer appears as "Acme", "Acme Inc.", and "Acme, Incorporated"\r
- Resolving people across HR, payroll, and Active Directory\r
- Building a unified product catalog from multiple supplier feeds\r
\r
## How it works\r
\r
Match builds a graph: each row is a node, each high-confidence similarity is an edge. Connected components become **match groups**.\r
\r
It also handles **transitive** matches: if A matches B (0.9) and B matches C (0.9), A and C are placed in the same group even if their direct similarity is only 0.6.\r
\r
## Configuration\r
\r
\`\`\`yaml\r
inputs: [customers_us, customers_eu, salesforce_accounts]\r
keys:\r
  - field: name,    mode: fuzzy,    weight: 0.6\r
  - field: domain,  mode: exact,    weight: 0.3\r
  - field: country, mode: exact,    weight: 0.1\r
threshold: 0.82\r
output: match_group_id\r
\`\`\`\r
\r
## Output\r
\r
Each input row gets a \`match_group_id\`. Rows in the same group are the same entity. Use a downstream **Aggregate** node to merge them into a golden record.\r
\r
!!! tip\r
    For your first run, set \`output_review: true\`. Match will produce an HTML review file you can scan in minutes to validate the threshold before turning it loose.\r
\r
## Where to go next\r
\r
- [Fuse Agent](/savant-kb/docs/fuse-agent)\r
- [Templates overview](/savant-kb/docs/templates-overview)\r
`,S0=`---\r
title: "Quickstart"\r
collection: "Getting Started"\r
description: "Build, run, and schedule your first Savant workflow in under ten minutes."\r
order: 3\r
updated: "2026-05-12"\r
icon: "rocket"\r
---\r
\r
# Quickstart\r
\r
Use this quickstart guide to create your first Savant workflow, run it, review the results, and schedule it for recurring execution. This article is intended for new users who want to quickly understand the basic workflow creation process in Savant.\r
\r
---\r
\r
## Before you begin\r
\r
Ensure that you have:\r
\r
- A valid Savant account.\r
- Access to your organization’s Savant workspace.\r
- Permission to create and run workflows.\r
- Access to the required data source or sample data.\r
- The required destination or output location, if you want to export results.\r
\r
---\r
\r
## Procedure to create your first workflow\r
\r
### Step 1: Access your workspace\r
\r
1. Sign in to **Savant**.\r
2. Select your organization’s workspace from the workspace dropdown.\r
3. Confirm that you are in the correct workspace before creating the workflow.\r
\r
---\r
\r
### Step 2: Create a workflow\r
\r
1. From the workspace, select **Create**.\r
2. Select **Workflow**.\r
3. Enter a clear workflow name.\r
4. Select **Create** to open the workflow canvas.\r
\r
---\r
\r
### Step 3: Add a data source\r
\r
1. On the workflow canvas, select **Add source**.\r
2. Choose the required data source.\r
3. Connect to the source using the available connection options.\r
4. Select the table, file, or dataset you want to use.\r
5. Preview the data to confirm that the correct source is selected.\r
\r
---\r
\r
### Step 4: Prepare the data\r
\r
1. Add the required preparation steps, such as:\r
    - Filtering rows.\r
    - Selecting columns.\r
    - Renaming fields.\r
    - Changing data types.\r
    - Removing duplicates.\r
    - Creating calculated fields.\r
\r
2. Review the preview after each step to confirm that the data is transformed correctly.\r
\r
---\r
\r
### Step 5: Add an output\r
\r
1. Select **Add destination** or **Output**.\r
2. Choose where the workflow results should be saved.\r
3. Configure the output settings, such as file name, table name, or destination folder.\r
4. Save the output configuration.\r
\r
---\r
\r
### Step 6: Run the workflow\r
\r
1. Select **Run**.\r
2. Wait for the workflow execution to complete.\r
3. Review the run status.\r
4. Open the output or results preview to verify that the workflow generated the expected data.\r
\r
---\r
\r
### Step 7: Schedule the workflow\r
\r
1. Select **Schedule**.\r
2. Choose how often the workflow should run.\r
3. Set the start date and time.\r
4. Confirm the schedule settings.\r
5. Save the schedule.\r
\r
---\r
\r
## Troubleshooting\r
\r
| Issue | Possible resolution |\r
|------|---------------------|\r
| You cannot create a workflow | Confirm that you have permission to create workflows in the selected workspace. |\r
| You cannot connect to a data source | Verify that the connection is configured and that you have access to the source. |\r
| The data preview does not load | Refresh the source, check connection permissions, and try again. |\r
| The workflow run fails | Review the error message, check each workflow step, and rerun the workflow. |\r
| The output is missing | Confirm that the destination is configured correctly and that the workflow completed successfully. |\r
| The schedule does not run | Verify that the schedule is enabled and that the workflow has no unresolved errors. |\r
\r
---\r
\r
## Result\r
\r
Your first Savant workflow is created, executed, and scheduled. You can now use the workflow to automate recurring data preparation, analysis, and reporting tasks.`,b0=`---\r
title: "Royalties & commissions template"\r
collection: "Templates & Solutions"\r
description: "Tiered comp calculation with clawbacks, splits, and payout file export."\r
order: 4\r
updated: "2026-05-03"\r
icon: "money"\r
---\r
\r
# Royalties & commissions\r
\r
Sales comp is where spreadsheets go to die. This template models tiered plans, splits, accelerators, and clawbacks — and produces a payout file your payroll team can ingest.\r
\r
## Inputs\r
\r
- **Deals** — closed transactions with rep, amount, product, close date\r
- **Plans** — per-role plan definition (base, tiers, accelerators, caps)\r
- **Quotas** — per-rep, per-period\r
- **Adjustments** — manual overrides logged with reason\r
\r
## The pipeline\r
\r
1. **Allocate** each deal to one or more reps (splits, overlays)\r
2. **Score** each deal against the rep's plan\r
3. **Apply tiers and accelerators** at the period level\r
4. **Net clawbacks** (refunds, churn, returns)\r
5. **Produce** per-rep statements + a payroll-ready file\r
\r
## Plan as data, not code\r
\r
Plans are YAML you can read and review:\r
\r
\`\`\`yaml\r
role: AE\r
base:\r
  rate: 0.08\r
tiers:\r
  - up_to:   0.7 * quota,  multiplier: 1.0\r
  - up_to:   1.0 * quota,  multiplier: 1.2\r
  - up_to:   1.5 * quota,  multiplier: 1.6\r
  - up_to:   .inf,         multiplier: 2.0\r
accelerators:\r
  - product: enterprise,   bonus: 0.02\r
caps:\r
  per_deal: 50000\r
  per_period: 250000\r
\`\`\`\r
\r
## Statements\r
\r
Each rep gets a one-page PDF with their deals, tier walk, accelerators applied, and net payout. Statements are deterministic — re-running the workflow against the same inputs produces a byte-identical PDF.\r
\r
## Where to go next\r
\r
- [Templates overview](/savant-kb/docs/templates-overview)\r
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)\r
`,w0=`---\r
title: "Amazon S3 connector"\r
collection: "Connectors & Files"\r
description: "Read and write objects in S3 with prefix templates, partitioning, and IAM role auth."\r
order: 3\r
updated: "2026-04-20"\r
icon: "cloud"\r
---\r
\r
# AWS S3 connector setup\r
\r
Amazon S3 is a cloud object storage service used to store and manage files. Connecting Amazon S3 to Savant allows users to read files from S3, use them as datasets in workflows, and publish processed data back to S3 as an output destination.\r
\r
Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key** generated from AWS Identity and Access Management (IAM). These credentials allow Savant to authenticate with AWS and access the selected S3 files or folders based on the permissions assigned to the IAM user.\r
\r
---\r
\r
## Features\r
\r
- Read data from Amazon S3.\r
- Add S3 files as datasets in Savant workflows.\r
- Publish processed data back to Amazon S3.\r
- Configure file type, file path, folder path, and output file settings.\r
\r
---\r
\r
## Requirements\r
\r
Before setting up the Amazon S3 connector, ensure that you have:\r
\r
- An active AWS account.\r
- Access to the AWS IAM console.\r
- Permission to create or use an IAM access key.\r
- An Access Key ID and Secret Access Key for the IAM user.\r
- The AWS region associated with the S3 bucket.\r
- Access to the required S3 bucket, file, or folder.\r
- Required permissions to read from or write to the S3 location.\r
\r
---\r
\r
## Connection method\r
\r
Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key**.\r
\r
---\r
\r
## Procedure to configure Amazon S3 connection\r
\r
### Step 1: Generate AWS access credentials\r
\r
1. Log in to the AWS Management Console.\r
2. Open the **IAM** console.\r
3. Click your username in the upper-right corner.\r
4. Select **Security Credentials**.\r
5. Scroll to the **Access keys** section.\r
6. Click **Create access key**.\r
7. Copy and securely store the generated credentials:\r
\r
    - Access Key ID\r
    - Secret Access Key\r
\r
!!! tip "Note"\r
    The **Secret Access Key** can be viewed or downloaded only once. Save it in a secure location before closing the window.\r
    \r
\r
---\r
\r
### Step 2: Add Amazon S3 as a system in Savant\r
\r
1. In Savant, go to **Data > Systems**.\r
2. Click **New System**.\r
3. Select **Amazon S3** from the available connector options.\r
4. Click **Next**.\r
5. Enter the required authentication details.\r
\r
    | Field | Description |\r
    |------|-------------|\r
    | Access Key ID | Enter the Access Key ID generated from AWS IAM. |\r
    | Secret Access Key | Enter the Secret Access Key generated from AWS IAM. |\r
    | Region | Enter the AWS region associated with the S3 bucket. |\r
\r
6. Click **Authenticate**.\r
7. Enter a system name and description.\r
8. Click **Next**.\r
\r
---\r
\r
### Step 3: Configure the S3 dataset\r
\r
1. Select the required file type.\r
2. Enter the number of files to use.\r
3. Paste the S3 file URL in the required field.\r
4. Click **Next**.\r
\r
The Amazon S3 system is authenticated and ready to be added as a dataset in Savant.\r
\r
---\r
\r
## Connect data from Amazon S3\r
\r
Use this procedure to add the authenticated Amazon S3 system as a dataset in a Savant analysis.\r
\r
### Step 1: Add the S3 dataset from the canvas\r
\r
1. Open the required analysis.\r
2. On the canvas, click **Add Dataset**.\r
3. Select your Amazon S3 connection.\r
4. Click **Next**.\r
5. Configure the dataset details as required.\r
6. Add the dataset to the analysis.\r
\r
### Step 2: Add the S3 dataset from the Data menu\r
\r
If you are not currently in an analysis:\r
\r
1. Go to **Data > New Dataset**.\r
2. Select the authenticated Amazon S3 system from the available options.\r
3. Click **Next**.\r
4. Configure the dataset details as required.\r
\r
The Amazon S3 system is added as a dataset in Savant.\r
\r
---\r
\r
## Publish data to Amazon S3\r
\r
Use this procedure to publish workflow output back to Amazon S3.\r
\r
### Step 1: Add an S3 destination\r
\r
1. Open the completed analysis.\r
2. On the left side of the canvas, click **Add Destination**.\r
3. Select your Amazon S3 destination.\r
\r
    If you need to add a new S3 system, click **New System** and complete the authentication steps again.\r
\r
4. Enter a destination name and description.\r
5. Click **Next**.\r
\r
### Step 2: Configure the S3 destination\r
\r
1. In the destination configuration window, select the required file type.\r
2. Enter the S3 folder link.\r
3. Configure the output file name.\r
4. If the output file type is Excel, configure the sheet or tab name.\r
5. Click **Apply**.\r
\r
---\r
\r
## Troubleshooting\r
\r
| Issue | Possible resolution |\r
|------|---------------------|\r
| Authentication fails | Verify that the Access Key ID, Secret Access Key, and AWS region are correct. |\r
| Secret Access Key is unavailable | Create a new access key in AWS IAM because the Secret Access Key can be viewed only once. |\r
| S3 file cannot be accessed | Confirm that the IAM user has permission to read the selected S3 bucket or file. |\r
| S3 destination cannot be written | Confirm that the IAM user has write permission for the selected S3 folder. |\r
| Region error occurs | Verify that the selected region matches the region where the S3 bucket is hosted. |\r
| Dataset does not load | Confirm that the file URL, file type, and number of files are configured correctly. |\r
| Output file is not created | Verify the destination folder link, file name, and write permissions. |\r
\r
---\r
\r
## Result\r
\r
The Amazon S3 connector is configured in Savant. You can now read files from Amazon S3, use them as datasets in Savant workflows, and publish processed workflow results back to Amazon S3.\r
\r
---\r
\r
## Where to go next\r
\r
- [Connectors overview](/savant-kb/docs/connectors-overview)\r
- [Workflows overview](/savant-kb/docs/workflows-overview)\r
`,A0=`---\r
title: "Sales & use tax template"\r
collection: "Templates & Solutions"\r
description: "Aggregate sales by jurisdiction, apply nexus rules, and produce return-ready filings."\r
order: 3\r
updated: "2026-05-07"\r
icon: "percent"\r
---\r
\r
# Sales & use tax\r
\r
A template that takes raw transaction data and produces return-ready filings for every jurisdiction where you have nexus.\r
\r
## Inputs\r
\r
- **Transactions** — order ID, ship-to address, line items, tax collected\r
- **Nexus matrix** — your jurisdictions and effective dates\r
- **Rate file** — current rates (Savant ships a maintained version, or bring your own)\r
\r
## The pipeline\r
\r
1. **Geocode** ship-to addresses to jurisdictions (state, county, city, special districts).\r
2. **Apply nexus** — drop transactions outside your jurisdictions, flag new ones.\r
3. **Compute tax due** vs **tax collected** per jurisdiction.\r
4. **Aggregate** to filing periods (monthly / quarterly / annual per jurisdiction).\r
5. **Export** in the format each jurisdiction's portal expects.\r
\r
## What you get\r
\r
For every filing period:\r
\r
- A summary report (PDF) with totals, variances, and exception notes\r
- A jurisdiction-by-jurisdiction CSV ready for upload\r
- A reconciliation back to your GL revenue accounts\r
\r
## Variance handling\r
\r
When tax collected ≠ tax due:\r
\r
| Reason | Default action |\r
|---|---|\r
| Rate change mid-period | Auto-prorated |\r
| Exempt customer not flagged | Flagged for review |\r
| Returned order | Netted in next period |\r
| Rounding | Tolerated up to $0.05 per transaction |\r
\r
!!! warning\r
    This template gives you the calculation. It does not file on your behalf — wire the output CSVs to your filing process or filing partner.\r
\r
## Where to go next\r
\r
- [Templates overview](/savant-kb/docs/templates-overview)\r
- [Functions reference](/savant-kb/docs/functions-reference)\r
`,E0=`---\r
title: "Sign up"\r
collection: "Getting Started"\r
description: "Create your Savant account, sign in for the first time, and access your team workspace."\r
order: 2\r
updated: "2026-05-20"\r
icon: "sparkles"\r
---\r
\r
# Sign up for Savant\r
\r
Creating a Savant account gives you access to your organization’s analytics automation workspace. Depending on your organization’s authentication settings, you can sign up using Google, Microsoft, or your work email.\r
\r
---\r
\r
## Before you begin\r
\r
Ensure that you have:\r
\r
- A valid business email address.\r
- Access to the inbox associated with your business email.\r
- An invitation link, if your organization requires one.\r
- Access to your organization’s approved authentication method, such as Google or Microsoft.\r
\r
---\r
\r
## Procedure to sign up for Savant\r
\r
### Step 1: Open the Savant website\r
\r
1. Open your preferred web browser. For the best experience, use **Google Chrome**.\r
\r
2. Go to the Savant website: \`https://www.savantlabs.io/\`\r
\r
---\r
\r
### Step 2: Start the sign-up process\r
\r
1. On the Savant homepage, go to the upper-right corner of the page.\r
2. Click **Sign up**. \r
    \r
    Savant redirects you to the authentication page.\r
\r
---\r
\r
### Step 3: Choose an authentication method\r
\r
1. On the authentication page, select one of the available sign-up options:\r
   \r
   * **Continue with Google**\r
   * **Continue with Microsoft**\r
   * **Continue with work email**\r
\r
    The available options may vary based on your organization’s configuration.\r
\r
---\r
\r
### Step 4: Complete authentication\r
\r
1. Follow the on-screen instructions for the authentication method you selected.\r
\r
2. Depending on the selected method, you may need to:\r
\r
    - Enter your email address and password.\r
    - Verify your identity.\r
    - Grant the required permissions.\r
    - Confirm your email address.\r
\r
---\r
\r
### Step 5: Access your Savant account\r
\r
1. After authentication is complete, Savant redirects you to your account.\r
2. Access the Savant analytics automation platform.\r
3. Start working in your organization’s workspace.\r
\r
---\r
\r
## Your team workspace\r
\r
When you sign in to your organization’s Savant tenant for the first time, you are usually directed to the default workspace named **General**.\r
\r
The **General** workspace is commonly used to:\r
\r
- Learn how to use Savant.\r
- Explore available features.\r
- Try templates and sample workflows.\r
- Get familiar with your organization’s analytics setup.\r
\r
If you have signed in before, Savant may open the last workspace you accessed during your previous session.\r
\r
---\r
\r
## Switch or access workspaces\r
\r
Your current workspace appears near your organization’s name in the upper-right corner of the Savant interface.\r
\r
To view your available workspaces:\r
\r
1. Click the dropdown next to your organization’s name.\r
2. Review the list of workspaces available to you.\r
3. Select the workspace you want to open.\r
\r
If your administrator has assigned you to specific workspaces, those workspaces appear automatically in the dropdown list.\r
\r
---\r
\r
## Need access to another workspace?\r
\r
If a required workspace is not available in your workspace list, contact your system administrator and request access.\r
\r
Your administrator can add you to the appropriate workspace based on your role and responsibilities.\r
\r
---\r
\r
## Troubleshooting\r
\r
| Issue | Possible resolution |\r
|------|---------------------|\r
| You do not see the **Sign up** option | Confirm that you are on the Savant website and that your organization allows self-service sign-up. |\r
| Your authentication method is not available | Contact your system administrator to confirm which sign-up methods are enabled for your organization. |\r
| You cannot complete Google or Microsoft authentication | Verify that you are using the correct business account and that your organization allows Savant access. |\r
| You do not receive a verification email | Check your spam or junk folder, then try resending the verification email. |\r
| You cannot see a required workspace | Contact your system administrator and request access to the workspace. |\r
\r
---\r
\r
## Result\r
\r
Your Savant account is created and connected to your organization’s tenant. You can now access your assigned workspace and start using Savant.\r
\r
---\r
\r
## Where to go next\r
\r
- [Quickstart](/savant-kb/docs/quickstart) — build your first workflow\r
- [Workspace setup](/savant-kb/docs/workspace-setup) — invite teammates and configure roles\r
- [Workflows overview](/savant-kb/docs/workflows-overview) — understand Savant's core abstraction\r
`,T0=`---\r
title: "Snowflake connector"\r
collection: "Connectors & Files"\r
description: "Read from and write to Snowflake"\r
order: 2\r
updated: "2026-05-02"\r
icon: "snowflake"\r
---\r
\r
# Snowflake connector setup\r
\r
Snowflake is an elastically scalable cloud data warehouse. Connecting Savant to Snowflake requires configuration in both Snowflake and Savant.\r
\r
Before configuring the Savant connector, create a service account or role in Snowflake with the required permissions to access the warehouses, databases, schemas, tables, and views that Savant needs.\r
\r
---\r
\r
## Features\r
\r
- Read data from Snowflake.\r
- Write data to Snowflake.\r
\r
---\r
\r
## Requirements\r
\r
Before setting up the Snowflake connector, ensure that you have:\r
\r
- A Snowflake account with permission to create users, roles, warehouses, and security integrations.\r
- A Savant role with the required permissions to access Snowflake warehouses, databases, schemas, tables, and views.\r
- Savant IP addresses whitelisted, if your Snowflake account uses a network policy.\r
- The required Snowflake warehouse, database, and schema details.\r
\r
---\r
\r
## Connection method\r
\r
Savant supports OAuth-based authentication for Snowflake.\r
\r
---\r
\r
## Procedure to configure Snowflake OAuth connection\r
\r
### Step 1: Create a Savant role in Snowflake\r
\r
1. Log in to Snowflake as \`ACCOUNTADMIN\`.\r
\r
2. Run the following SQL statement to create a Savant role and grant the required permissions.\r
\r
    \`\`\`sql\r
    CREATE ROLE IF NOT EXISTS savant_role COMMENT = 'Access to selected tables for Savant';\r
\r
    GRANT ROLE savant_role TO ROLE SYSADMIN;\r
\r
    GRANT USAGE ON WAREHOUSE "<warehouse>" TO ROLE savant_role;\r
\r
    GRANT USAGE ON DATABASE "<database>" TO ROLE savant_role;\r
\r
    GRANT USAGE ON SCHEMA "<database>"."<schema>"\r
    TO ROLE savant_role;\r
\r
    GRANT SELECT ON ALL TABLES IN SCHEMA "<database>"."<schema>"\r
    TO ROLE savant_role;\r
\r
    GRANT SELECT ON FUTURE TABLES IN SCHEMA "<database>"."<schema>"\r
    TO ROLE savant_role;\r
\r
    GRANT SELECT ON ALL VIEWS IN SCHEMA "<database>"."<schema>"\r
    TO ROLE savant_role;\r
\r
    GRANT SELECT ON FUTURE VIEWS IN SCHEMA "<database>"."<schema>"\r
    TO ROLE savant_role;\r
    \`\`\`\r
\r
---\r
\r
### Step 2: Create an OAuth security integration\r
\r
1. Update the \`OAUTH_REDIRECT_URI\` value based on your Savant region.\r
\r
    - For the default region, use:\r
\r
        \`\`\`text\r
        https://app.savantlabs.io/api/callback\r
        \`\`\`\r
\r
    - For the EU region, use:\r
\r
        \`\`\`text\r
        https://app-eu.savantlabs.io/api/callback\r
        \`\`\`\r
\r
2. If your Snowflake network policy blocks public IP addresses, whitelist Savant IP addresses and update the \`<network policy>\` value.\r
\r
    If you do not use a network policy, remove the \`NETWORK_POLICY\` line from the SQL statement.\r
\r
3. Run the following SQL statement to create the OAuth security integration.\r
\r
    \`\`\`sql\r
    CREATE SECURITY INTEGRATION SAVANT_CLIENT\r
    TYPE = OAUTH\r
    ENABLED = TRUE\r
    OAUTH_CLIENT = CUSTOM\r
    OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'\r
    OAUTH_REDIRECT_URI = 'https://app.savantlabs.io/api/callback'\r
    OAUTH_ISSUE_REFRESH_TOKENS = TRUE\r
    OAUTH_REFRESH_TOKEN_VALIDITY = 7776000\r
    NETWORK_POLICY = '<network policy>';\r
    \`\`\`\r
\r
---\r
\r
### Step 3: Retrieve the OAuth client credentials\r
\r
1. Run the following SQL statement to retrieve the client ID and client secrets.\r
\r
    \`\`\`sql\r
    SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');\r
    \`\`\`\r
\r
2. Copy the following values from the JSON response:\r
\r
    - Client ID\r
    - One client secret\r
\r
    You need these values when configuring the Snowflake connector in Savant.\r
\r
---\r
\r
### Step 4: Configure the Snowflake connection in Savant\r
\r
1. In Savant, open the Snowflake connector setup.\r
2. Select the **OAuth** connection option.\r
3. Enter the Snowflake server URL.\r
\r
    Example:\r
\r
    \`\`\`text\r
    https://123.us-region1/gcp.snowflakecomputing.com\r
    \`\`\`\r
\r
4. Enter the **Client ID** retrieved from Snowflake.\r
5. Enter the **Client Secret** retrieved from Snowflake.\r
6. Enter \`savant_role\` in the **Role** field.\r
7. Enter the Snowflake **Warehouse** and **Database** details.\r
\r
    You can leave these fields blank if you want to use the Snowflake defaults.\r
\r
8. Click **Authenticate**.\r
\r
---\r
\r
## SSH tunnel\r
\r
Additional properties are displayed when the **SSH Tunnel** checkbox is selected.\r
\r
Use this option only if your organization requires Savant to connect to Snowflake through an SSH tunnel.\r
\r
---\r
\r
## Troubleshooting\r
\r
| Issue | Possible resolution |\r
|------|---------------------|\r
| OAuth authentication fails | Verify that the \`CREATE SECURITY INTEGRATION\` statement has no typos and that the \`OAUTH_REDIRECT_URI\` exactly matches the Savant callback URL. |\r
| Client secret is rejected | Rerun \`SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');\`, copy one secret exactly, and re-enter it in Savant. |\r
| Permission error occurs | Confirm that \`savant_role\` has \`USAGE\` permissions on the warehouse, database, and schema, and \`SELECT\` permissions on current and future tables and views. |\r
| Connection times out | Verify that Savant IP addresses are whitelisted in the Snowflake network policy. |\r
| Query or login errors occur | Review \`LOGIN_HISTORY\` and \`QUERY_HISTORY\` in Snowflake. In Savant, enable debug logging to capture HTTP response codes such as \`401\`, \`403\`, or \`504\`. |\r
\r
---\r
\r
## Result\r
\r
The Snowflake connector is configured in Savant using OAuth authentication. Savant can now connect to Snowflake to read and write data based on the permissions granted to \`savant_role\`.\r
\r
---\r
\r
## Where to go next\r
\r
- [Connectors overview](/savant-kb/docs/connectors-overview)\r
- [Workflows overview](/savant-kb/docs/workflows-overview)\r
`,_0=`---\r
title: "Templates overview"\r
collection: "Templates & Solutions"\r
description: "Start from a proven workflow instead of a blank canvas."\r
order: 1\r
updated: "2026-05-11"\r
icon: "template"\r
---\r
\r
# Templates overview\r
\r
Templates are **opinionated, production-ready workflows** for common business problems. Each one is a starting point you adapt to your data — not a black box.\r
\r
## How templates work\r
\r
Pick a template from the **Templates** gallery. Savant clones it into your workspace as a normal workflow you can:\r
\r
- Inspect node by node\r
- Re-wire to your specific connectors\r
- Extend with extra steps\r
- Pin to a specific version\r
\r
There is no template lock-in — once installed, it's just a workflow.\r
\r
## Featured templates\r
\r
| Template | Domain | What it does |\r
|---|---|---|\r
| [Financial reconciliation](/savant-kb/docs/financial-reconciliation) | Finance | Bank ↔ GL reconciliation with break analysis |\r
| [Sales & use tax](/savant-kb/docs/sales-tax) | Tax | Multi-jurisdiction return prep |\r
| [Royalties & commissions](/savant-kb/docs/royalties-commissions) | Revenue | Tiered comp calculation with payout export |\r
\r
## Customizing safely\r
\r
When a template ships an update, Savant shows you a node-level diff. You decide which changes to pull in — and your customizations stay intact.\r
\r
!!! tip\r
    Treat the first installation as a learning exercise. Run it against a sample, click through every node, then re-install fresh for production.\r
\r
## Where to go next\r
\r
- [Financial reconciliation](/savant-kb/docs/financial-reconciliation)\r
- [Sales & use tax](/savant-kb/docs/sales-tax)\r
`,R0=`---\r
title: "Transform Agent"\r
collection: "Agents"\r
description: "Reshape tables using natural-language instructions, compiled to deterministic SQL."\r
order: 2\r
updated: "2026-05-10"\r
icon: "wand"\r
---\r
\r
# Transform Agent\r
\r
Transform Agent helps users format, arrange, calculate, and modify data directly inside an analysis. It works like a spreadsheet-style data preparation tool, allowing users to clean, reshape, rename, reorder, calculate, and transform fields without writing code.\r
\r
The Transform Agent is useful when users need to prepare data before analysis, reporting, automation, or downstream processing. It provides column management tools, calculated columns, expression-based transformations, data type conversion, and field organization options in one place.\r
\r
---\r
\r
## Features\r
\r
- Format and arrange data.\r
- Rename columns.\r
- Hide or show fields.\r
- Reorder fields in the dataset.\r
- Convert field data types.\r
- Add calculated columns.\r
- Transform existing column values.\r
- Use expressions with Excel-like or SQL-like syntax.\r
- Use Savant Copilot to generate formulas from natural language.\r
- Review renamed columns and calculated column order of operations.\r
\r
---\r
\r
## Add a Transform Agent\r
\r
1. Navigate to the required analysis.\r
2. Click the agent icon.\r
3. Select **Transform**.\r
4. Click **Edit in a tab** to open the Transform Agent in a separate tab for detailed analysis and configuration.\r
\r
---\r
\r
## Manage columns\r
\r
The **Managed Columns** tab allows users to search, hide, show, rename, reorder, and transform columns in the dataset.\r
\r
| Action | Description |\r
|------|-------------|\r
| Search columns | Use the search bar to quickly find specific fields or columns within the dataset. |\r
| Hide or show fields | Use the eye icon next to a field to hide or show it in the analysis. Hidden fields are not deleted; they are only removed from the current view. Click **Apply** to save the change. |\r
| Convert data types | Click the current data type icon, select the required data type, and click **Apply**. |\r
| Rename columns | Hover over the column name, click the pencil icon, enter the new column name, and click **Apply**. |\r
| Jump to column | Use the **Jump to Column** arrow icon to quickly navigate to a specific column in the dataset. |\r
| Reorder fields | Use the move icon to drag and drop a field to a different position in the table, then click **Apply**. |\r
| Apply bulk actions | Select the checkboxes next to multiple columns, open the **Actions** dropdown, select the required action, and click **Apply**. |\r
\r
You can also use the dropdown menu in a column header to access additional options.\r
\r
| Option | Description |\r
|------|-------------|\r
| Move Column | Move the selected column to a different position in the table. |\r
| Rename Column | Rename the selected column. |\r
| Transform Column | Apply a custom expression or use the expression builder to transform values in the selected column. |\r
| Hide Column | Hide the selected column from the analysis view. |\r
| Insert Column Left | Add a calculated column to the left of the selected column. |\r
| Insert Column Right | Add a calculated column to the right of the selected column. |\r
\r
The **Move Column** option includes the following placement choices:\r
\r
| Placement option | Description |\r
|------|-------------|\r
| Beginning | Move the selected column to the first position in the table. |\r
| End | Move the selected column to the last position in the table. |\r
| Left | Move the selected column left by the specified number of fields. |\r
| Right | Move the selected column right by the specified number of fields. |\r
| Before | Move the selected column before a selected field. |\r
| After | Move the selected column after a selected field. |\r
\r
---\r
\r
## Work with calculated and renamed columns\r
\r
The **Calculated Columns** tab allows users to add and manage columns derived from existing data. The **Renamed Columns** tab displays columns renamed from the **Managed Columns** tab.\r
\r
To add a calculated column:\r
\r
1. From the **Managed Columns** tab, click **+ Column**.\r
2. In the **Expression Editor**, enter a field name in the **Field Name** box.\r
3. Build the required expression using Excel-like or SQL-like syntax.\r
4. Click **Apply**.\r
\r
Use calculated columns to:\r
\r
- Perform calculations.\r
- Combine fields.\r
- Format values.\r
- Apply conditional logic.\r
- Transform text or dates.\r
\r
You can also use the search bar at the bottom of the **Expression Editor** to find available functions and fields.\r
\r
To transform values in an existing column:\r
\r
1. Open the dropdown from the column header.\r
2. Click **Transform**.\r
3. Edit the transformation expression.\r
4. Click **Apply**.\r
\r
Savant Copilot can suggest usable formulas using natural language. This feature is available in beta.\r
\r
Use the following icons to manage calculated columns:\r
\r
| Icon | Description |\r
|------|-------------|\r
| Summation icon | Edit a calculated column. |\r
| Trash can icon | Delete a calculated column. |\r
\r
The **Calculated Columns** tab also displays the order in which calculated columns are processed. Columns listed first are processed before columns listed later in the list. This order is important when one calculated column depends on the result of another calculated column.\r
\r
The **Renamed Columns** tab helps users review renamed fields and confirm that the updated column names are correct.\r
\r
---\r
\r
## Summary\r
\r
Transform Agent allows users to prepare and transform data directly inside Savant. Users can manage columns, rename fields, convert data types, create calculated columns, transform existing values, and control the order of calculations without writing code.\r
\r
---\r
\r
## Where to go next\r
\r
- [Functions reference](/savant-kb/docs/functions-reference)\r
- [Infer Agent](/savant-kb/docs/infer-agent)\r
`,C0=`---\r
title: "Vision Agent"\r
collection: "Agents"\r
description: "Extract structured data from PDFs, scanned documents, and images."\r
order: 4\r
updated: "2026-05-06"\r
icon: "eye"\r
---\r
\r
# Vision Agent\r
\r
The **Vision Agent** turns documents into rows. Point it at a stream of PDFs, scans, or images and a target schema, and it returns structured data — page-by-page, field-by-field, with a confidence per field.\r
\r
## Supported document types\r
\r
- **Invoices, bills, receipts** — out-of-the-box schema\r
- **Bank statements, brokerage statements** — out-of-the-box schema\r
- **Contracts, NDAs, MSAs** — clause-level extraction\r
- **Custom forms** — define your own schema in the UI\r
\r
## Configuration\r
\r
Point at a source (S3 bucket, SharePoint folder, email inbox) and choose a schema:\r
\r
\`\`\`yaml\r
source: s3://docs/invoices/\r
schema: invoice\r
output:\r
  - vendor_name\r
  - invoice_number\r
  - invoice_date\r
  - line_items[]: { description, qty, unit_price, total }\r
  - subtotal\r
  - tax\r
  - total\r
\`\`\`\r
\r
## Per-field confidence\r
\r
Vision returns a confidence score for every extracted field, not just per document. This matters: a vendor name might be 0.99 while a hand-written total is 0.62.\r
\r
Use a **Filter** node downstream to route low-confidence fields to a review queue while letting the rest flow through.\r
\r
## Cost\r
\r
Vision is priced per page, not per call. Multi-page documents (e.g. 30-page contracts) are billed for the pages actually processed.\r
\r
## Where to go next\r
\r
- [Connectors overview](/savant-kb/docs/connectors-overview)\r
- [S3 connector](/savant-kb/docs/s3-connector)\r
`,x0=`---\r
title: "Welcome to Savant"\r
collection: "Getting Started"\r
description: "An overview of the Savant data automation platform and how this documentation is organized."\r
order: 1\r
updated: "2026-05-20"\r
icon: "sparkles"\r
---\r
\r
# Welcome to Savant\r
\r
Welcome to Savant, a revolutionary cloud-native, no-code analytics automation platform designed to empower analysts like you to unlock the true potential of data-driven insights.\r
\r
This onboarding document will provide you with an overview of what Savant is and how it can transform the way you approach data analytics and business intelligence.\r
\r
![alt text](/savant-kb/images/image.png)\r
\r
!!! tip "New here?"\r
    If this is your first time using Savant, start with the [Quickstart](quickstart) — you'll have a working workflow in under ten minutes.\r
\r
\r
## How Savant works for you\r
\r
At Savant, we believe in making data analytics accessible, efficient, and impactful. Our cloud-native platform is built to enable analysts to deliver business insights more swiftly and effortlessly than ever before.\r
\r
With Savant, you can streamline your analytics workflow through three core pillars of automation:\r
\r
### Automated data prep and data transformation\r
\r
Savant offers a comprehensive selection of over 200 connectors, allowing you to effortlessly import data from a wide range of sources.\r
\r
Whether it's file systems like S3 and Google Drive, databases such as Snowflake and BigQuery, communication tools like Slack and Gmail, or popular business applications like Google Analytics, HubSpot, Salesforce, Shopify, Stripe, and more – Savant has you covered.\r
\r
![alt text](/savant-kb/images/image-1.png)\r
\r
---\r
\r
### Automated cloud-native data analytics\r
\r
Leverage the power of more than 300 low-code and no-code tools and functions to transform raw data into valuable insights.\r
\r
Our cloud-native platform provides intuitive no-code tools for data prep, data cleaning, data joining, and data transformation.\r
\r
For advanced users, Savant allows you to write your own functions and expressions in a query window for sophisticated data transformations.\r
\r
![alt text](/savant-kb/images/image-3.png)\r
\r
\r
---\r
\r
### Automated insight delivery\r
\r
Savant enables you to drive actionable results by delivering insights to where they matter most.\r
\r
Whether it's sending alerts to Slack channels, updating records in Salesforce, refreshing BI dashboards, or creating a shared metrics layer for collaborative analysis – Savant ensures your insights reach the right audience at the right time.\r
\r
![alt text](/savant-kb/images/image-4.png)\r
\r
---\r
\r
## Savant's pre-built solutions\r
\r
Did you know, Savant offers pre-built solution templates to help you get started in Savant.\r
\r
Check out our library of solution templates, simply replace with your own data to access these pre-built automations.\r
\r
## Your journey with Savant\r
\r
1. **Effortless collaboration:** Savant keeps track of every step you take, facilitating seamless collaboration with your team. Validate data, maintain analyses, and build new ones together with ease.\r
\r
2. **Bot-driven efficiency:** Transform your analyses into automated bots that execute on a schedule. Bid farewell to manual report refreshes as Savant handles the updates for you. Monitor bot status over time and receive notifications for individual runs via Slack or email.\r
\r
3. **Templates for rapid start:** Whether you're starting from scratch or seeking a quick start with pre-built templates, Savant has you covered. Configure a template by connecting your own data, and let the platform complete the analysis for you.\r
\r
4. **Diverse use cases:** Savant already supports numerous templates catering to sales, marketing, operations, logistics, finance, HR, and more. Our library of templates continues to expand, providing solutions for various analytics use cases.\r
\r
---\r
\r
## What you can build\r
\r
- **Reconciliation pipelines** that match millions of rows across systems with a full audit trail.\r
- **Document workflows** that extract structured data from PDFs, invoices, and contracts using AI agents.\r
- **Consolidation models** that blend ERP, CRM, and spreadsheet data into a single trusted source.\r
- **Operational automations** triggered by schedules, webhooks, or upstream system events.\r
\r
## How this documentation is organized\r
\r
| Section | What's inside |\r
|---|---|\r
| Getting Started | Account setup, your first workflow, and core concepts |\r
| Platform Concepts | Workflows, agents, governance, and the audit trail |\r
| Agents | Reference for every AI agent — Infer, Transform, Fuse, Vision, Match |\r
| Connectors & Files | How to read and write data to 70+ systems |\r
| Templates & Solutions | Pre-built workflows for finance, ops, and revenue teams |\r
| Reference | Functions, shortcuts, and API access |\r
\r
---\r
\r
## Where to go next\r
\r
- [Quickstart](/savant-kb/docs/quickstart) — build your first workflow\r
- [Workspace setup](/savant-kb/docs/workspace-setup) — invite teammates and configure roles\r
- [Workflows overview](/savant-kb/docs/workflows-overview) — understand Savant's core abstraction\r
\r
`,O0=`---\r
title: "Workflows overview"\r
collection: "Platform Concepts"\r
description: "Understand Savant's core abstraction: a directed graph of nodes with typed data flowing between them."\r
order: 1\r
updated: "2026-05-01"\r
icon: "workflow"\r
---\r
\r
# Workflows overview\r
\r
A workflow in Savant is a visual sequence of connected steps that moves data from a source, applies transformations or analysis, and sends the results to a destination. Workflows help teams automate repeatable data preparation, reporting, enrichment, and operational processes without manually rebuilding the same logic each time.\r
\r
Instead of working with disconnected files, formulas, or manual exports, users can build a workflow once and run it whenever updated data is available. This helps reduce manual effort, improve consistency, and make data processes easier to review, reuse, and schedule.\r
\r
A typical workflow includes:\r
\r
- **Dataset**: Provides the source data used in the workflow.\r
- **Agent**: Performs an action on the data, such as transforming, filtering, joining, enriching, or analyzing records.\r
- **Destination**: Stores or publishes the final output.\r
- **Run**: Executes the workflow and processes the configured steps.\r
- **Schedule**: Runs the workflow automatically at a defined time or frequency.\r
\r
---\r
\r
## How workflows help teams\r
\r
Savant workflows help teams:\r
\r
- Automate recurring data preparation tasks.\r
- Standardize reporting and analysis processes.\r
- Reduce manual spreadsheet work.\r
- Combine data from multiple systems.\r
- Clean, format, and enrich data before reporting.\r
- Create repeatable outputs for dashboards, files, and downstream systems.\r
- Improve visibility into how data is processed from source to destination.\r
\r
---\r
\r
## Main workflow components\r
\r
| Component | Description |\r
|------|-------------|\r
| Dataset | Adds source data to the workflow from files, databases, applications, or connected systems. |\r
| Agent | Applies processing logic to the data, such as transformation, filtering, joining, classification, or enrichment. |\r
| Canvas | Provides the visual workspace where datasets, agents, and destinations are connected. |\r
| Destination | Defines where the processed output should be written or published. |\r
| Run | Executes the workflow using the current configuration. |\r
| Schedule | Automates workflow execution based on a selected frequency. |\r
| Results preview | Displays processed data so users can validate the workflow output before publishing. |\r
\r
---\r
\r
## Common workflow actions\r
\r
Users can perform the following actions in a Savant workflow:\r
\r
- Add datasets from connected systems.\r
- Combine multiple datasets.\r
- Clean and format fields.\r
- Rename, hide, reorder, or transform columns.\r
- Add calculated fields.\r
- Filter records based on business rules.\r
- Enrich data using AI agents.\r
- Review results before publishing.\r
- Add destinations for output.\r
- Run workflows manually.\r
- Schedule workflows for recurring execution.\r
\r
---\r
\r
## Anatomy of a workflow\r
\r
\`\`\`text\r
[ Source ] ──► [ Transform ] ──► [ Agent ] ──► [ Destination ]\r
                                   │\r
                                   └──► [ Branch ] ──► [ Slack ]\r
\`\`\`\r
\r
Each node has:\r
\r
- **Inputs** — zero or more typed streams arriving from upstream\r
- **Configuration** — UI-driven settings, plus optional code\r
- **Outputs** — one or more typed streams, each with a schema\r
\r
---\r
\r
## Typical workflow lifecycle\r
\r
1. **Add source data**  \r
   Select the dataset or connected system that provides the input data.\r
\r
2. **Prepare the data**  \r
   Use agents to clean, format, calculate, filter, join, or enrich the data.\r
\r
3. **Review the output**  \r
   Validate the results in the preview to confirm that the workflow produces the expected output.\r
\r
4. **Add a destination**  \r
   Configure where the processed data should be saved, exported, or published.\r
\r
5. **Run the workflow**  \r
   Execute the workflow to process the latest available data.\r
\r
6. **Schedule the workflow**  \r
   Set a recurring schedule if the workflow needs to run automatically.\r
\r
---\r
\r
## Workflow canvas\r
\r
The workflow canvas is the visual area where users build and manage the workflow. It shows how data moves from datasets through agents and into destinations.\r
\r
On the canvas, users can:\r
\r
- Add datasets.\r
- Add agents.\r
- Connect workflow steps.\r
- Review the sequence of processing.\r
- Add destinations.\r
- Open configuration panels.\r
- Run or schedule the workflow.\r
\r
The canvas helps users understand the complete flow of data and makes it easier to identify where each transformation or output is configured.\r
\r
---\r
\r
## Agents in a workflow\r
\r
Agents are processing steps that perform specific actions on the data. Each agent is added to the workflow canvas and configured based on the required task.\r
\r
Examples of agents include:\r
\r
- **Transform Agent**: Formats, arranges, calculates, and modifies data.\r
- **Infer Agent**: Uses AI to enrich, classify, label, or standardize data.\r
- **Join or combine agents**: Combine data from multiple sources.\r
- **Filter or rule-based agents**: Limit records based on defined conditions.\r
\r
Agents help users build reusable data logic without writing code.\r
\r
---\r
\r
## Workflow outputs\r
\r
A workflow output is the processed result generated after the workflow runs. Outputs can be reviewed in Savant or sent to a configured destination.\r
\r
Common destinations include:\r
\r
- Files.\r
- Databases.\r
- Cloud storage systems.\r
- Business applications.\r
- Reporting or downstream workflow systems.\r
\r
Before publishing the output, users should review the results preview to confirm that the data is accurate and complete.\r
\r
---\r
\r
## Scheduling workflows\r
\r
Scheduling allows users to run workflows automatically without manual execution. This is useful for recurring reports, daily data refreshes, periodic exports, or operational updates.\r
\r
When scheduling a workflow, users typically define:\r
\r
- Run frequency.\r
- Start date and time.\r
- Output destination.\r
- Notification or monitoring requirements, if available.\r
\r
Scheduled workflows help ensure that data outputs stay current and reduce manual follow-up.\r
\r
---\r
\r
## Best practices\r
\r
- Use clear workflow names that describe the business purpose.\r
- Confirm that the correct dataset is selected before adding agents.\r
- Review the preview after each major change.\r
- Keep transformation logic simple and easy to understand.\r
- Use calculated fields only when needed.\r
- Validate output before publishing or scheduling.\r
- Add destinations only after confirming the workflow results.\r
- Review scheduled workflows periodically to ensure they still meet business needs.\r
\r
---\r
\r
## Summary\r
\r
Savant workflows provide a visual and repeatable way to move data from source to output. By combining datasets, agents, destinations, runs, and schedules, users can automate data preparation, enrichment, reporting, and publishing processes.\r
\r
A well-designed workflow helps teams reduce manual work, improve consistency, and maintain reliable data outputs across business processes.\r
\r
---\r
\r
## Where to go next\r
\r
- [Agents overview](/savant-kb/docs/agents-overview)\r
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)\r
`,M0=`---\r
title: "Workspace setup"\r
collection: "Getting Started"\r
description: "Invite teammates, configure roles, and set up environments for safe collaboration."\r
order: 3\r
updated: "2026-04-30"\r
icon: "users"\r
---\r
\r
# Workspace setup\r
\r
A Savant workspace is the boundary for **people, projects, secrets, and audit logs**. Most organizations operate one production workspace and a separate sandbox workspace for experimentation.\r
\r
## Invite teammates\r
\r
Go to **Settings → Members** and click **Invite**. Each invitee receives an email and is assigned a role at the workspace level. Roles can be overridden per project.\r
\r
| Role | Can edit workflows | Can run workflows | Can deploy | Can manage members |\r
|---|---|---|---|---|\r
| **Viewer** | No | No | No | No |\r
| **Runner** | No | Yes | No | No |\r
| **Builder** | Yes | Yes | No | No |\r
| **Deployer** | Yes | Yes | Yes | No |\r
| **Admin** | Yes | Yes | Yes | Yes |\r
\r
!!! warning\r
    Only Admins should hold the **Deployer** role in production workspaces. Grant Builders deploy rights only in sandboxes.\r
\r
## Configure environments\r
\r
Each workspace ships with **Development** and **Production** environments. Environments isolate:\r
\r
- Connector credentials\r
- Secrets (API keys, tokens)\r
- Schedules\r
\r
Use the environment switcher in the top bar to move between them. A workflow's logic is the same across environments — only its bindings change.\r
\r
## Set workspace defaults\r
\r
Under **Settings → Defaults**, configure:\r
\r
- Default timezone for schedules\r
- Default notification channel (Slack, email, webhook)\r
- Data retention for run history (30 / 90 / 365 days)\r
\r
## Where to go next\r
\r
- [Your first workflow](/savant-kb/docs/your-first-workflow)\r
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)\r
`,D0=`---\r
title: "Your first workflow"\r
collection: "Getting Started"\r
description: "A guided build of a realistic three-step workflow with branching and notifications."\r
order: 4\r
updated: "2026-05-05"\r
icon: "workflow"\r
---\r
\r
# Your first workflow\r
\r
The [Quickstart](/savant-kb/docs/quickstart) got you running in ten minutes. This guide goes one step deeper: a realistic three-step workflow with branching, error handling, and a Slack notification.\r
\r
## The scenario\r
\r
You receive a daily **orders.csv** drop in S3. You need to:\r
\r
1. Validate the file (reject and notify if it's empty or malformed).\r
2. Enrich each order with the customer's tier from your CRM.\r
3. Append to a Snowflake table and post a summary to Slack.\r
\r
## Step 1 — Read with validation\r
\r
Add an **S3** source pointing at \`s3://drops/orders/{date}.csv\`. In the node's **Validation** tab, add:\r
\r
\`\`\`yaml\r
required_columns: [order_id, customer_id, amount, currency]\r
min_rows: 1\r
on_failure: branch\r
\`\`\`\r
\r
A red **failure** port appears on the node. Drag it to a **Slack** node configured to ping #ops with the validation error.\r
\r
## Step 2 — Enrich from CRM\r
\r
Add a **HubSpot** source (or your CRM of choice) and join it to the orders stream using a **Fuse Agent**:\r
\r
- Left key: \`customer_id\`\r
- Right key: \`hubspot_contact_id\`\r
- Strategy: exact match, fall back to fuzzy on email if not found\r
\r
The Fuse Agent emits a confidence score per row. Add a **Filter** node downstream that routes rows below \`0.8\` to a manual-review table.\r
\r
## Step 3 — Land and announce\r
\r
Append the enriched stream to \`analytics.orders_enriched\` in Snowflake. Then add a final **Slack** node:\r
\r
\`\`\`text\r
:white_check_mark: Orders for {{run.date}} processed\r
- {{count.rows}} rows landed\r
- {{count.review}} flagged for review\r
\`\`\`\r
\r
!!! tip\r
    Variables like \`{{run.date}}\` and \`{{count.rows}}\` come from Savant's run context — see [Functions reference](/docs/functions-reference).\r
\r
## Where to go next\r
\r
- [Workflows overview](/savant-kb/docs/workflows-overview)\r
- [Fuse Agent](/savant-kb/docs/fuse-agent)\r
- [S3 connector](/savant-kb/docs/s3-connector)\r
`,k0=Object.assign({"./docs/adp-connector.md":s0,"./docs/agents-overview.md":l0,"./docs/connectors-overview.md":u0,"./docs/excel-files.md":c0,"./docs/financial-reconciliation.md":f0,"./docs/functions-reference.md":d0,"./docs/fuse-agent.md":h0,"./docs/google-sheets.md":m0,"./docs/governance-audit-trail.md":p0,"./docs/infer-agent.md":g0,"./docs/keyboard-shortcuts.md":y0,"./docs/match-agent.md":v0,"./docs/quickstart.md":S0,"./docs/royalties-commissions.md":b0,"./docs/s3-connector.md":w0,"./docs/sales-tax.md":A0,"./docs/signup.md":E0,"./docs/snowflake-connector.md":T0,"./docs/templates-overview.md":_0,"./docs/transform-agent.md":R0,"./docs/vision-agent.md":C0,"./docs/welcome.md":x0,"./docs/workflows-overview.md":O0,"./docs/workspace-setup.md":M0,"./docs/your-first-workflow.md":D0});function z0(r){const o=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(r);if(!o)return{fm:{title:"Untitled",collection:"Misc",description:"",order:999,updated:""},body:r};const[,s,u]=o,c={};for(const d of s.split(/\r?\n/)){const m=/^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/.exec(d);if(!m)continue;const[,y,p]=m;try{c[y]=JSON.parse(p)}catch{c[y]=p.replace(/^["']|["']$/g,"")}}return{fm:c,body:u}}const oc=Object.entries(k0).map(([r,o])=>{const s=r.replace(/^\.\/docs\//,"").replace(/\.md$/,""),{fm:u,body:c}=z0(o);return{slug:s,fm:u,body:c}}).sort((r,o)=>r.fm.order-o.fm.order),L0={"Getting Started":{description:"Set up your workspace, build your first workflow, and get the right people invited.",icon:"Rocket",order:1},"Platform Concepts":{description:"Workflows, agents, and the governance model that makes Savant audit-ready by default.",icon:"Layers",order:2},Agents:{description:"AI-powered nodes for inference, transformation, matching, and document extraction.",icon:"Sparkles",order:3},"Connectors & Files":{description:"Read and write data across 70+ databases, warehouses, SaaS apps, and file systems.",icon:"Plug",order:4},"Templates & Solutions":{description:"Opinionated, production-ready workflows for finance, ops, and revenue teams.",icon:"LayoutTemplate",order:5},Reference:{description:"Function reference, keyboard shortcuts, and API access.",icon:"BookOpen",order:6}},N0=Object.entries(L0).map(([r,o])=>({name:r,slug:r.toLowerCase().replace(/[^a-z0-9]+/g,"-"),description:o.description,icon:o.icon,docs:oc.filter(s=>s.fm.collection===r).sort((s,u)=>s.fm.order-u.fm.order),_order:o.order})).sort((r,o)=>r._order-o._order).map(({_order:r,...o})=>o),$0=oc;function U0(r){return oc.find(o=>o.slug===r)}const Xo=N0.flatMap(r=>r.docs);function ew(r){const o=Xo.findIndex(s=>s.slug===r);return o===-1?{}:{prev:o>0?Xo[o-1]:void 0,next:o<Xo.length-1?Xo[o+1]:void 0}}const B0=()=>Ai(()=>import("./docs._slug-Do26okTf.js"),__vite__mapDeps([8,3,2,6])),H0=()=>Ai(()=>import("./docs._slug-Cu4ccNRa.js"),[]),j0=ls("/docs/$slug")({loader:({params:r})=>{const o=U0(r.slug);if(!o)throw Hv();return o},head:({loaderData:r})=>{if(!r)return{};const{fm:o}=r,s=`${o.title} — Savant Docs`;return{meta:[{title:s},{name:"description",content:o.description},{property:"og:title",content:s},{property:"og:description",content:o.description},{name:"twitter:title",content:s},{name:"twitter:description",content:o.description}]}},notFoundComponent:vi(H0,"notFoundComponent"),component:vi(B0,"component")}),sc=n0.update({id:"/docs",path:"/docs",getParentRoute:()=>ic}),q0=r0.update({id:"/",path:"/",getParentRoute:()=>ic}),G0=o0.update({id:"/",path:"/",getParentRoute:()=>sc}),Y0=j0.update({id:"/$slug",path:"/$slug",getParentRoute:()=>sc}),Q0={DocsSlugRoute:Y0,DocsIndexRoute:G0},P0=sc._addFileChildren(Q0),V0={IndexRoute:q0,DocsRoute:P0},I0=ic._addFileChildren(V0)._addFileTypes(),Up=new Xb,X0="/savant-kb/".replace(/\/$/,"")||"/",K0=cb({routeTree:I0,basepath:X0,context:{queryClient:Up},scrollRestoration:!0,defaultPreloadStaleTime:0}),F0=document.getElementById("root");dv.createRoot(F0).render(V.jsx(Sa.StrictMode,{children:V.jsx(Fb,{client:Up,children:V.jsx(hb,{router:K0})})}));export{ss as L,xp as O,Z0 as R,J0 as a,j0 as b,N0 as c,$0 as d,ew as e,ee as f,Zu as g,pa as h,it as i,V as j,Fe as k,_p as r,Ep as u};
