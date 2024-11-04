import{d as O,al as S,c as M,V as n,a0 as y,ab as i,X as c,H as t,a2 as I,am as K,aR as U,C as A,l as H,ag as L,Y as p,W as v,F as C,a9 as $,Z as R,_ as B,ac as N,aa as z,a5 as D,a8 as E,cG as Z}from"./APIComponent-DNrxJFFq.js";import{b as G,u as P,e as W,d as X}from"./SidebarButton.vue-DNhbJIV1.js";import{a as Y,b as q}from"./SidebarListElement.vue-Vu0qtZLj.js";import{x as J,a as Q}from"./ViewLayoutContent.vue-BB8H2-2I.js";import{w as ee}from"./Form.vue-DvOCYCf3.js";import{a as ae}from"./useSidebar-CYzJSv4h.js";import"./index-Cy8I8Vxd.js";import"./DataTableInput.vue-DNKNvXGp.js";const oe={class:"flex items-center pointer-events-none"},te=["value"],le=O({__name:"CookieForm",setup(V){const{cookies:d,activeCookieId:r,cookieMutators:b}=S(),l=[{label:"Key",key:"key",placeholder:"Username"},{label:"Value",key:"value",placeholder:"123"},{label:"Domain",key:"domain",placeholder:"scalar.com"},{label:"Path",key:"path",placeholder:"/"},{label:"Expires",key:"expires",placeholder:"Tomorrow"},{label:"Secure",key:"secure",placeholder:"True/False"},{label:"HttpOnly",key:"httpOnly",placeholder:"True/False"}],f=M(()=>d[r.value]||{}),m=(x,u)=>{r.value&&b.edit(r.value,x,u)};return(x,u)=>(n(),y(ee,{data:f.value,onUpdate:m,options:l},{title:i(()=>[c("div",oe,[u[1]||(u[1]=c("label",{class:"absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",for:"cookiename"},null,-1)),c("input",{id:"cookiename",class:"md:pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",placeholder:"Cookie Name",value:f.value.name,onInput:u[0]||(u[0]=_=>m("name",_.target.value))},null,40,te)])]),_:1},8,["data"]))}}),se=O({__name:"CookieRaw",setup(V){const{cookies:d,activeCookieId:r}=S();return(b,l)=>(n(),y(P,null,{title:i(()=>l[0]||(l[0]=[c("span",null,"Raw Cookie String",-1)])),default:i(()=>[t(r)&&t(d)[t(r)]?(n(),y(G,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",lineNumbers:"",modelValue:""})):I("",!0)]),_:1}))}}),ne={class:"flex-1"},re=["onClick"],ie={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},ce=["onClick"],ue={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1.75rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},xe=O({__name:"Cookies",setup(V){const{cookies:d,cookieMutators:r,events:b}=S(),{collapsedSidebarFolders:l,toggleSidebarFolder:f}=ae(),m=K(),x=U(),u=A("layout"),_=()=>{const a=Object.keys(d).length,e=Z.parse({name:`Cookie ${a}`,value:"",domain:"example.com",path:"/",secure:!1,httpOnly:!1,sameSite:"None"});r.add(e),m.push(e.uid)},T=a=>{r.delete(a);const e=Object.values(d).filter(o=>o.uid!==a);if(e.length>1){const o=e[e.length-1];m.push(o.uid)}else e.length===1&&e[0].uid==="default"&&m.push("default")},w=M(()=>{const a={};return Object.values(d).forEach(e=>{e.domain&&e.path&&(a[e.domain]||(a[e.domain]={}),a[e.domain][e.path]||(a[e.domain][e.path]=[]),a[e.domain][e.path].push(e))}),a}),j=a=>l[a],F=a=>{a!=null&&a.createNew&&x.name==="cookies"&&_()};return H(()=>{const a=Object.keys(w.value),e=Object.entries(w.value).flatMap(([o,s])=>Object.keys(s).map(g=>o+g));a.forEach(o=>{l[o]=!0}),e.forEach(o=>{l[o]=!0}),b.hotKeys.on(F)}),L(()=>b.hotKeys.off(F)),(a,e)=>(n(),y(Q,null,{default:i(()=>[p(t(W),{title:"Cookies"},{content:i(()=>[c("div",ne,[p(Y,null,{default:i(()=>[(n(!0),v(C,null,$(w.value,(o,s)=>(n(),v("div",{key:s},[c("button",{class:"flex font-medium gap-1.5 items-center px-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:g=>t(f)(s)},[p(t(R),{class:B(["text-c-3",{"rotate-90":t(l)[s]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),N(" "+z(s),1)],8,re),D(c("div",ie,[(n(!0),v(C,null,$(o,(g,h)=>(n(),v("div",{key:h},[c("button",{class:"flex font-medium gap-1.5 items-center pl-5 pr-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:k=>t(f)(s+h)},[p(t(R),{class:B(["text-c-3",{"rotate-90":t(l)[s+h]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),N(" "+z(h),1)],8,ce),D(c("div",ue,[(n(!0),v(C,null,$(g,k=>(n(),y(q,{key:k.uid,class:"cookie text-xs",variable:{name:k.name,uid:k.uid},warningMessage:"Are you sure you want to delete this cookie?",onDelete:pe=>T(k.uid)},null,8,["variable","onDelete"]))),128))],512),[[E,j(s+h)]])]))),128))],512),[[E,j(s)]])]))),128))]),_:1})])]),button:i(()=>[p(X,{click:_,hotkey:"N",layout:t(u)},{title:i(()=>e[0]||(e[0]=[N("Add Cookie")])),_:1},8,["layout"])]),_:1}),p(J,{class:"flex-1"},{default:i(()=>[p(le),p(se)]),_:1})]),_:1}))}});export{xe as default};
