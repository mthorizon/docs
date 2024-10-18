import{d as O,c as B,z as s,an as v,av as i,C as c,u as r,ap as D,x as M,L as p,B as k,$ as w,at as C,ak as N,al as j,aw as $,au as E,J as F,K as V}from"./APIComponent-C1uM_Jho.js";import{b as R}from"./SidebarButton.vue-C0cOwEAc.js";import{p as I,a as T}from"./SidebarListElement.vue-PEU6oE24.js";import{u as K,b as U,x as A,c as J}from"./Sidebar.vue-C-MYLWzz.js";import{a as S,u as L,c as G}from"./index-Vmv2sqdd.js";import{w as H}from"./Form.vue-B-V3sKVw.js";import{a as P}from"./CodeInput.vue-DG3C5UnE.js";import{a as Q}from"./useSidebar-BReAzt5A.js";import"./index-BNFG-0VQ.js";import"./DataTableRow.vue-pQok6o4H.js";import"./DataTableInput.vue-CMyKsgwx.js";const X={class:"flex items-center pointer-events-none"},Y=["value"],q=O({__name:"CookieForm",setup(z){const{cookies:d,activeCookieId:n,cookieMutators:u}=S(),m=[{label:"Key",key:"key",placeholder:"Username"},{label:"Value",key:"value",placeholder:"123"},{label:"Domain",key:"domain",placeholder:"scalar.com"},{label:"Path",key:"path",placeholder:"/"},{label:"Expires",key:"expires",placeholder:"Tomorrow"},{label:"Secure",key:"secure",placeholder:"True/False"},{label:"HttpOnly",key:"httpOnly",placeholder:"True/False"}],b=B(()=>d[n.value]||{}),x=(y,o)=>{n.value&&u.edit(n.value,y,o)};return(y,o)=>(s(),v(H,{data:b.value,onUpdate:x,options:m},{title:i(()=>[c("div",X,[o[1]||(o[1]=c("label",{class:"absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",for:"cookiename"},null,-1)),c("input",{id:"cookiename",class:"md:pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",placeholder:"Cookie Name",value:b.value.name,onInput:o[0]||(o[0]=_=>x("name",_.target.value))},null,40,Y)])]),_:1},8,["data"]))}}),W=O({__name:"CookieRaw",setup(z){const{cookies:d,activeCookieId:n}=S();return(u,m)=>(s(),v(K,null,{title:i(()=>m[0]||(m[0]=[c("span",null,"Raw Cookie String",-1)])),default:i(()=>[r(n)&&r(d)[r(n)]?(s(),v(P,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",lineNumbers:"",modelValue:""})):D("",!0)]),_:1}))}}),Z={class:"flex-1"},ee=["onClick"],te={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},ae=["onClick"],oe={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1.75rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},he=O({__name:"Cookies",setup(z){const{cookies:d,cookieMutators:n}=S(),{collapsedSidebarFolders:u,toggleSidebarFolder:m}=Q(),b=L(),x=()=>{const t=Object.keys(d).length,e=G.parse({name:`Cookie ${t}`,value:"",domain:"example.com",path:"/",secure:!1,httpOnly:!1,sameSite:"None"});n.add(e),b.push(e.uid)},y=t=>{n.delete(t);const e=Object.values(d).filter(a=>a.uid!==t);if(e.length>1){const a=e[e.length-1];b.push(a.uid)}else e.length===1&&e[0].uid==="default"&&b.push("default")},o=B(()=>{const t={};return Object.values(d).forEach(e=>{e.domain&&e.path&&(t[e.domain]||(t[e.domain]={}),t[e.domain][e.path]||(t[e.domain][e.path]=[]),t[e.domain][e.path].push(e))}),t}),_=t=>u[t];return M(()=>{const t=Object.keys(o.value),e=Object.entries(o.value).flatMap(([a,l])=>Object.keys(l).map(g=>a+g));t.forEach(a=>{u[a]=!0}),e.forEach(a=>{u[a]=!0})}),(t,e)=>(s(),v(J,null,{default:i(()=>[p(r(U),{title:"Cookies"},{content:i(()=>[c("div",Z,[p(I,null,{default:i(()=>[(s(!0),k(w,null,C(o.value,(a,l)=>(s(),k("div",{key:l},[c("button",{class:"flex font-medium gap-1.5 items-center px-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:g=>r(m)(l)},[p(r(N),{class:j(["text-c-3",{"rotate-90":r(u)[l]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),$(" "+E(l),1)],8,ee),F(c("div",te,[(s(!0),k(w,null,C(a,(g,f)=>(s(),k("div",{key:f},[c("button",{class:"flex font-medium gap-1.5 items-center pl-5 pr-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:h=>r(m)(l+f)},[p(r(N),{class:j(["text-c-3",{"rotate-90":r(u)[l+f]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),$(" "+E(f),1)],8,ae),F(c("div",oe,[(s(!0),k(w,null,C(g,h=>(s(),v(T,{key:h.uid,class:"cookie text-xs",variable:{name:h.name,uid:h.uid},warningMessage:"Are you sure you want to delete this cookie?",onDelete:le=>y(h.uid)},null,8,["variable","onDelete"]))),128))],512),[[V,_(l+f)]])]))),128))],512),[[V,_(l)]])]))),128))]),_:1})])]),button:i(()=>[p(R,{click:x},{title:i(()=>e[0]||(e[0]=[$("Add Item")])),_:1})]),_:1}),p(A,{class:"flex-1"},{default:i(()=>[p(q),p(W)]),_:1})]),_:1}))}});export{he as default};
