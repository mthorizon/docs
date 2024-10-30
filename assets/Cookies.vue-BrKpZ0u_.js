import{d as S,al as $,c as E,V as s,a0 as x,ab as c,X as u,H as n,a2 as M,am as T,aR as I,l as K,ag as U,Y as p,W as v,F as C,a9 as N,Z as V,_ as j,ac as O,aa as z,a5 as A,a8 as D,cF as H}from"./APIComponent-Ue72IJ6I.js";import{b as X,u as Y,d as Z,f as L}from"./SidebarButton.vue-BQowQJLD.js";import{p as P,a as W}from"./SidebarListElement.vue-C-Z5vrvm.js";import{x as q,a as G}from"./ViewLayoutContent.vue-BQl_G17w.js";import{w as J}from"./Form.vue-7gvYXhCn.js";import{a as Q}from"./useSidebar-BcgK8sGu.js";import"./index-B7cEzOlw.js";import"./DataTableInput.vue-CqspKayR.js";const ee={class:"flex items-center pointer-events-none"},ae=["value"],oe=S({__name:"CookieForm",setup(F){const{cookies:d,activeCookieId:r,cookieMutators:f}=$(),t=[{label:"Key",key:"key",placeholder:"Username"},{label:"Value",key:"value",placeholder:"123"},{label:"Domain",key:"domain",placeholder:"scalar.com"},{label:"Path",key:"path",placeholder:"/"},{label:"Expires",key:"expires",placeholder:"Tomorrow"},{label:"Secure",key:"secure",placeholder:"True/False"},{label:"HttpOnly",key:"httpOnly",placeholder:"True/False"}],b=E(()=>d[r.value]||{}),m=(y,i)=>{r.value&&f.edit(r.value,y,i)};return(y,i)=>(s(),x(J,{data:b.value,onUpdate:m,options:t},{title:c(()=>[u("div",ee,[i[1]||(i[1]=u("label",{class:"absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",for:"cookiename"},null,-1)),u("input",{id:"cookiename",class:"md:pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",placeholder:"Cookie Name",value:b.value.name,onInput:i[0]||(i[0]=g=>m("name",g.target.value))},null,40,ae)])]),_:1},8,["data"]))}}),te=S({__name:"CookieRaw",setup(F){const{cookies:d,activeCookieId:r}=$();return(f,t)=>(s(),x(Y,null,{title:c(()=>t[0]||(t[0]=[u("span",null,"Raw Cookie String",-1)])),default:c(()=>[n(r)&&n(d)[n(r)]?(s(),x(X,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",lineNumbers:"",modelValue:""})):M("",!0)]),_:1}))}}),le={class:"flex-1"},se=["onClick"],ne={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},re=["onClick"],ie={class:"before:bg-border before:pointer-events-none before:z-1 before:absolute before:left-[calc(1.75rem_-_1.5px)] before:top-0 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative"},ve=S({__name:"Cookies",props:{isApp:{type:Boolean}},setup(F){const{cookies:d,cookieMutators:r,events:f}=$(),{collapsedSidebarFolders:t,toggleSidebarFolder:b}=Q(),m=T(),y=I(),i=()=>{const a=Object.keys(d).length,e=H.parse({name:`Cookie ${a}`,value:"",domain:"example.com",path:"/",secure:!1,httpOnly:!1,sameSite:"None"});r.add(e),m.push(e.uid)},g=a=>{r.delete(a);const e=Object.values(d).filter(o=>o.uid!==a);if(e.length>1){const o=e[e.length-1];m.push(o.uid)}else e.length===1&&e[0].uid==="default"&&m.push("default")},w=E(()=>{const a={};return Object.values(d).forEach(e=>{e.domain&&e.path&&(a[e.domain]||(a[e.domain]={}),a[e.domain][e.path]||(a[e.domain][e.path]=[]),a[e.domain][e.path].push(e))}),a}),B=a=>t[a],R=a=>{a!=null&&a.createNew&&y.name==="cookies"&&i()};return K(()=>{const a=Object.keys(w.value),e=Object.entries(w.value).flatMap(([o,l])=>Object.keys(l).map(_=>o+_));a.forEach(o=>{t[o]=!0}),e.forEach(o=>{t[o]=!0}),f.hotKeys.on(R)}),U(()=>f.hotKeys.off(R)),(a,e)=>(s(),x(G,null,{default:c(()=>[p(n(Z),{title:"Cookies"},{content:c(()=>[u("div",le,[p(P,null,{default:c(()=>[(s(!0),v(C,null,N(w.value,(o,l)=>(s(),v("div",{key:l},[u("button",{class:"flex font-medium gap-1.5 items-center px-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:_=>n(b)(l)},[p(n(V),{class:j(["text-c-3",{"rotate-90":n(t)[l]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),O(" "+z(l),1)],8,se),A(u("div",ne,[(s(!0),v(C,null,N(o,(_,h)=>(s(),v("div",{key:h},[u("button",{class:"flex font-medium gap-1.5 items-center pl-5 pr-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",type:"button",onClick:k=>n(b)(l+h)},[p(n(V),{class:j(["text-c-3",{"rotate-90":n(t)[l+h]}]),icon:"ChevronRight",size:"sm",thickness:"2.5"},null,8,["class"]),O(" "+z(h),1)],8,re),A(u("div",ie,[(s(!0),v(C,null,N(_,k=>(s(),x(W,{key:k.uid,class:"cookie text-xs",variable:{name:k.name,uid:k.uid},warningMessage:"Are you sure you want to delete this cookie?",onDelete:ce=>g(k.uid)},null,8,["variable","onDelete"]))),128))],512),[[D,B(l+h)]])]))),128))],512),[[D,B(l)]])]))),128))]),_:1})])]),button:c(()=>[p(L,{click:i,hotkey:"N",isApp:a.isApp},{title:c(()=>e[0]||(e[0]=[O("Add Cookie")])),_:1},8,["isApp"])]),_:1}),p(q,{class:"flex-1"},{default:c(()=>[p(oe),p(te)]),_:1})]),_:1}))}});export{ve as default};
