import{_ as y}from"./nuxt-link.84f6365c.js";import{_ as T}from"./Shape.vue.f710d5e1.js";/* empty css                  */import{a as C,j as x,o,c as f,w as r,M as b,u as S,G as B,b as c,k as g,ah as _,e as w,m as E,p as O,f as D,W as k,r as p,A as P}from"./entry.fe5931c7.js";/* empty css                */import{u as $}from"./safe-on-mounted.c05a4818.js";const H={key:0,class:"d-focus-hl__hl--negative-tile"},L={key:2,class:"d-focus-hl__hl--negative-list-item"},M=w("div",{class:"d-focus-hl__hl--negative-list-item"},null,-1),W={name:"DWrapShape"},j=C({...W,props:{linkExact:Boolean,noPassiveLink:Boolean,active:Boolean,variant:{type:String,default:"negative-tile"},tag:{type:String,default:"div"},colorClass:{type:[String,Object],default:"bg-red-600"}},setup(e){const t=e,n=x(()=>t.to||t.href?y:t.tag);return(a,i)=>{const l=T;return o(),f(l,null,{default:r(()=>[(o(),f(b(S(n)),B(t,{class:["d-focus-hl",{"d-focus-hl--exact":e.linkExact,"d-focus-hl--not-exact":!e.linkExact,"d-focus-hl--no-passive-link":e.noPassiveLink,"d-focus-hl--active":e.active}]}),{default:r(()=>[e.variant==="negative-tile"?(o(),c("div",H)):e.variant==="list-item"?(o(),c("div",{key:1,class:g(["d-focus-hl__hl--list-item",e.colorClass])},null,2)):e.variant==="negative-list-item"?(o(),c("div",L)):e.variant==="composite-list-item"?(o(),c(_,{key:3},[w("div",{class:g(["d-focus-hl__hl--list-item",e.colorClass])},null,2),M],64)):E("",!0),O(a.$slots,"default")]),_:3},16,["class"]))]),_:3})}}}),z={name:"DBtn"},q=C({...z,props:{to:{type:String,default:void 0},href:{type:String,default:void 0},exact:Boolean,noPassiveHighlight:Boolean,active:Boolean,noRotate:Boolean,tag:{type:String,default:"button"},highlight:{type:String,default:void 0},colorClass:[String,Object],textTransform:{type:String,default:"uppercase"}},setup(e){const t=e,n=x(()=>t.to||t.href?y:t.tag);return(a,i)=>{const l=j;return o(),f(b(S(n)),B({class:["d-btn",{"-rotate-6":!e.noRotate,uppercase:e.textTransform==="uppercase",capitalize:e.textTransform==="capitalize",lowercase:e.textTransform==="lowercase"}]},t),{default:r(()=>[D(l,{variant:e.highlight,"link-exact":e.exact,"no-passive-link":e.noPassiveHighlight,"color-class":e.colorClass,active:e.active},{default:r(()=>[O(a.$slots,"default")]),_:3},8,["variant","link-exact","no-passive-link","color-class","active"])]),_:3},16,["class"])}}}),I=()=>({showContentTree:k("layout/docs/showContentTree",()=>!1),tableOfContents:k("layout/docs/tableOfContents",()=>null)}),J=e=>{const{tableOfContents:t}=I(),n=new Map,a=p(null),i=p([]);function l(){var h;a.value?a.value.disconnect():a.value=new IntersectionObserver(u=>{u.forEach(s=>{n.set(s.target.id,s.isIntersecting)}),i.value=Array.from(n.keys()).filter(s=>n.get(s))});const d=u=>{u.forEach(s=>{var m;const v=document.getElementById(s.id);v&&((m=a.value)==null||m.observe(v)),s.children&&d(s.children)})};d(((h=t.value)==null?void 0:h.links)??[])}return P(t,()=>{setTimeout(()=>{l()},100)}),$(e,()=>{l()}),i};export{q as _,J as a,I as u};
