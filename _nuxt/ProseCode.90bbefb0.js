import V from"./Icon.f242273c.js";import{r as _,q as j,u as I,s as U,v as q,x as G,y as H,z as K,j as J,A as X,a as Q,B as Y,o as h,b,e as $,f as L,w as Z,c as E,T as ee,k as M,C as te,D as ne,t as oe,m as ae,p as se}from"./entry.fe5931c7.js";/* empty css                      */import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.vue.21d569a7.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";var P;const C=typeof window<"u",re=e=>typeof e=="string",W=()=>{},ue=C&&((P=window==null?void 0:window.navigator)==null?void 0:P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function O(e){return typeof e=="function"?e():I(e)}function ie(e){return e}function z(e){return U()?(q(e),!0):!1}function ce(e,t=!0){G()?H(e):t?e():K(e)}function le(e,t,n={}){const{immediate:o=!0}=n,u=_(!1);let s=null;function f(){s&&(clearTimeout(s),s=null)}function c(){u.value=!1,f()}function l(...p){f(),u.value=!0,s=setTimeout(()=>{u.value=!1,s=null,e(...p)},O(t))}return o&&(u.value=!0,C&&l()),z(c),{isPending:j(u),start:l,stop:c}}function g(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const D=C?window:void 0,de=C?window.navigator:void 0;function w(...e){let t,n,o,u;if(re(e[0])||Array.isArray(e[0])?([n,o,u]=e,t=D):[t,n,o,u]=e,!t)return W;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],f=()=>{s.forEach(i=>i()),s.length=0},c=(i,y,a,r)=>(i.addEventListener(y,a,r),()=>i.removeEventListener(y,a,r)),l=X(()=>[g(t),O(u)],([i,y])=>{f(),i&&s.push(...n.flatMap(a=>o.map(r=>c(i,a,r,y))))},{immediate:!0,flush:"post"}),p=()=>{l(),f()};return z(p),p}let x=!1;function pe(e,t,n={}){const{window:o=D,ignore:u=[],capture:s=!0,detectIframe:f=!1}=n;if(!o)return;ue&&!x&&(x=!0,Array.from(o.document.body.children).forEach(a=>a.addEventListener("click",W)));let c=!0;const l=a=>u.some(r=>{if(typeof r=="string")return Array.from(o.document.querySelectorAll(r)).some(m=>m===a.target||a.composedPath().includes(m));{const m=g(r);return m&&(a.target===m||a.composedPath().includes(m))}}),i=[w(o,"click",a=>{const r=g(e);if(!(!r||r===a.target||a.composedPath().includes(r))){if(a.detail===0&&(c=!l(a)),!c){c=!0;return}t(a)}},{passive:!0,capture:s}),w(o,"pointerdown",a=>{const r=g(e);r&&(c=!a.composedPath().includes(r)&&!l(a))},{passive:!0}),f&&w(o,"blur",a=>{var r;const m=g(e);((r=o.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(a)})].filter(Boolean);return()=>i.forEach(a=>a())}function fe(e,t=!1){const n=_(),o=()=>n.value=!!e();return o(),ce(o,t),n}function me(e={}){const{navigator:t=de,read:n=!1,source:o,copiedDuring:u=1500,legacy:s=!1}=e,f=["copy","cut"],c=fe(()=>t&&"clipboard"in t),l=J(()=>c.value||s),p=_(""),i=_(!1),y=le(()=>i.value=!1,u);function a(){c.value?t.clipboard.readText().then(d=>{p.value=d}):p.value=F()}if(l.value&&n)for(const d of f)w(d,a);async function r(d=O(o)){l.value&&d!=null&&(c.value?await t.clipboard.writeText(d):m(d),p.value=d,i.value=!0,y.start())}function m(d){const v=document.createElement("textarea");v.value=d??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function F(){var d,v,S;return(S=(v=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:v.toString())!=null?S:""}return{isSupported:l,text:p,copied:i,copy:r}}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";B[T]=B[T]||{};var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ye=Object.defineProperty,k=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))ve.call(t,n)&&N(e,n,t[n]);if(k)for(var n of k(t))_e.call(t,n)&&N(e,n,t[n]);return e};const he={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ge({linear:ie},he);const we=e=>(te("data-v-4a003820"),e=e(),ne(),e),Ce=we(()=>$("span",{class:"sr-only"},"Copy to clipboard",-1)),Oe={class:"icon-wrapper"},Ie=Q({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,n=_(),{copy:o}=me();pe(n,()=>{s.value==="copied"&&(s.value="init")});const{prose:u}=Y(),s=_("init"),f=c=>{o(t.content).then(()=>{s.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(c,l)=>{const p=V;return h(),b("button",{ref_key:"copyButtonRef",ref:n,class:M([(e.show||s.value==="copied")&&"show"]),onClick:f},[Ce,$("span",Oe,[L(ee,{name:"fade"},{default:Z(()=>{var i,y;return[s.value==="copied"?(h(),E(p,{key:0,name:(i=I(u).copyButton)==null?void 0:i.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),E(p,{key:1,name:(y=I(u).copyButton)==null?void 0:y.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),be=R(Ie,[["__scopeId","data-v-4a003820"]]),Se={key:0,class:"filename"},Ee=Q({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=_(!1);return(n,o)=>{const u=be;return h(),b("div",{class:M([[`highlight-${e.language}`],"prose-code"]),onMouseenter:o[0]||(o[0]=s=>t.value=!0),onMouseleave:o[1]||(o[1]=s=>t.value=!1)},[e.filename?(h(),b("span",Se,oe(e.filename),1)):ae("",!0),se(n.$slots,"default",{},void 0,!0),L(u,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),Ne=R(Ee,[["__scopeId","data-v-c164ce0a"]]);export{Ne as default};
