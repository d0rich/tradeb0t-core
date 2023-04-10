import{a as c,I as j,o as i,c as l,w as d,l as h,t as C,m as u,b as v,e as w,f,ab as M,ac as N,H as x,ad as q,j as D,ae as k,af as E,ag as S,u as s,T as P,L as $,X as O,y as H,Z as R}from"./entry.fe5931c7.js";import V from"./ContentRendererMarkdown.0a0eeab5.js";import I from"./ContentRenderer.1a39f4b0.js";import{_ as U,u as Z}from"./layout.46f98898.js";/* empty css                */import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import{u as F}from"./asyncData.de360fcd.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./nuxt-link.84f6365c.js";import"./Shape.vue.f710d5e1.js";/* empty css                  */import"./safe-on-mounted.c05a4818.js";const X=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),b=(e,t)=>(a,n)=>(j(()=>e({...X(a),...n.attrs},n)),()=>{var r,o;return t?(o=(r=n.slots).default)==null?void 0:o.call(r):null}),G={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},J=c({name:"Title",inheritAttrs:!1,setup:b((e,{slots:t})=>{var n,r,o;return{title:((o=(r=(n=t.default)==null?void 0:n.call(t))==null?void 0:r[0])==null?void 0:o.children)||null}})}),K=c({name:"Meta",inheritAttrs:!1,props:{...G,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:b(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),Q=c({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var a,n;return(n=(a=t.slots).default)==null?void 0:n.call(a)}}),W=c({__name:"AsyncSafeMeta",props:{title:null,ogTitle:null,description:null,image:null},setup(e){return(t,a)=>{const n=J,r=K,o=Q;return i(),l(o,null,{default:d(()=>[e.title?(i(),l(n,{key:0},{default:d(()=>[h(C(e.title),1)]),_:1})):u("",!0),e.title||e.ogTitle?(i(),l(r,{key:1,property:"og:title",content:e.ogTitle||e.title},null,8,["content"])):u("",!0),e.description?(i(),l(r,{key:2,name:"description",content:e.description},null,8,["content"])):u("",!0),e.description?(i(),l(r,{key:3,property:"og:description",content:e.description},null,8,["content"])):u("",!0)]),_:1})}}}),Y={},tt=M('<div class="flex justify-center items-center"><div class="text-6xl font-bold text-red-600 dark:text-red-300 pr-6"> 404 </div><div class="border-l border-neutral-500 pl-6"><h1 class="text-4xl font-bold mb-3">Page not found</h1><p class="text-gray-500 dark:text-gray-400"> The page you are looking for does not exist. </p></div></div>',1),et={class:"flex justify-center mt-10"};function nt(e,t){const a=U;return i(),v("section",null,[tt,w("div",et,[f(a,{to:"/","no-rotate":"",class:"text-3xl"},{default:d(()=>[h("To homepage")]),_:1})])])}const ot=z(Y,[["render",nt]]),at=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const a=await k[e.name]().then(n=>n.default||n);return()=>$(a,t.attrs,t.slots)}}),rt=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const a=N("_route"),n=a===x()?q():a,r=D(()=>s(e.name)??n.meta.layout??"default");return()=>{const o=r.value&&r.value in k,p=n.meta.layoutTransition??E;return S(P,o&&p,{default:()=>S(at,o&&{key:r.value,name:r.value,...t.attrs},t.slots).default()}).default()}}}),it={name:"DocPage"},ht=c({...it,async setup(e){let t,a;const n=x(),{tableOfContents:r}=Z(),{data:o,error:p}=([t,a]=O(()=>F("page-data"+n.path,()=>R(n.path).findOne(),"$nqfm7thZ1i")),t=await t,a(),t);function g(){var m,_;r.value=((_=(m=o.value)==null?void 0:m.body)==null?void 0:_.toc)??null}return g(),H(()=>{g()}),(m,_)=>{const y=W,T=V,B=I,L=ot,A=rt;return i(),v("div",null,[s(o)?(i(),l(y,{key:0,title:s(o).title,description:s(o).description},null,8,["title","description"])):s(p)?(i(),l(y,{key:1,title:"Page not found"})):u("",!0),f(A,null,{default:d(()=>[s(o)&&s(o)._type==="markdown"?(i(),l(B,{key:0,value:s(o)},{default:d(()=>[f(T,{tag:"article",class:"d-article",value:s(o)},null,8,["value"])]),_:1},8,["value"])):s(p)?(i(),l(L,{key:1,class:"mt-[20vh]"})):u("",!0)]),_:1})])}}});export{ht as default};
