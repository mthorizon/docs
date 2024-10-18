import{p as B,a as I}from"./SidebarListElement.vue-BwBTsRV0.js";import{R as M,p as d,u as j,b as G,x as U,c as W}from"./Sidebar.vue-DtcUVIYJ.js";import{d as y,b as P,z as u,B as b,L as e,av as t,u as a,ao as p,aw as r,aI as L,C as m,au as x,ak as k,$ as C,an as _,at as z,al as N,bD as D,aC as T}from"./APIComponent-BiF6kRvt.js";import{i as V,f as E,a as v}from"./DataTableRow.vue-CD9o8jpy.js";import{x as g,v as F}from"./DataTableText.vue-DDjEJoh0.js";import{h as R,a as Y}from"./index-BqYEJk3-.js";import"./index-BhgFvvky.js";const q={class:"font-medium m-0 text-sm flex gap-1.5 items-center"},A=y({__name:"SettingsGeneralMode",setup(w){const{colorMode:s,setDarkMode:i}=R(),l=P("System Preference");s.value==="system"?l.value="System Preference":s.value==="dark"?l.value="Dark":l.value="Light";const c=()=>{i(null),l.value="System Preference"},o=()=>{i(!1),l.value="Light"},h=()=>{i(!0),l.value="Dark"};return($,n)=>(u(),b(C,null,[e(g,{text:"Mode"}),e(V,null,{default:t(()=>[e(a(M),null,{items:t(()=>[e(a(d),{onClick:p(c,["stop"])},{default:t(()=>n[0]||(n[0]=[r(" System Preference ")])),_:1}),e(a(d),{onClick:p(o,["stop"])},{default:t(()=>n[1]||(n[1]=[r(" Light Mode ")])),_:1}),e(a(d),{onClick:p(h,["stop"])},{default:t(()=>n[2]||(n[2]=[r(" Dark Mode ")])),_:1})]),default:t(()=>[e(a(L),{class:"font-normal h-full justify-start py-1.5 px-1.5 text-c-1 hover:bg-b-2 w-fit",fullWidth:"",variant:"ghost"},{default:t(()=>[m("h2",q,[r(x(l.value)+" ",1),e(a(k),{class:"size-2.5",icon:"ChevronDown",thickness:"3.5"})])]),_:1})]),_:1})]),_:1})],64))}}),H={class:"flex flex-col p-2"},J={class:"font-medium m-0 text-sm flex gap-1.5 items-center"},K=y({__name:"SettingsGeneral",setup(w){const{activeWorkspace:s,workspaceMutators:i,proxyUrl:l,setProxyUrl:c}=Y(),o=()=>{l.value?c(""):c("https://proxy.scalar.com")},h=["default","alternate","moon","purple","solarized","bluePlanet","saturn","kepler","mars","deepSpace"],$=n=>{i.edit(s.value.uid,"themeId",n)};return(n,S)=>(u(),_(j,null,{title:t(()=>S[0]||(S[0]=[r("General")])),default:t(()=>[m("div",H,[e(E,{columns:["",""]},{default:t(()=>[e(v,null,{default:t(()=>[e(g,{text:"Use Scalar Proxy"}),e(F,{align:"left",modelValue:!!a(l),"onUpdate:modelValue":o},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(g,{text:"Theme Picker"}),e(V,null,{default:t(()=>[e(a(M),null,{items:t(()=>[(u(),b(C,null,z(h,f=>e(a(d),{key:f,class:"flex gap-1.5 group/item items-center whitespace-nowrap text-ellipsis overflow-hidden",onClick:p(Q=>$(f),["stop"])},{default:t(()=>[m("div",{class:N(["flex items-center justify-center rounded-full p-[3px] w-4 h-4 group-hover/item:shadow-border",a(s).themeId===f?"bg-blue text-b-1":"text-transparent"])},[e(a(k),{class:"size-2.5",icon:"Checkmark",thickness:"3.5"})],2),r(" "+x(a(D)[f]),1)]),_:2},1032,["onClick"])),64))]),default:t(()=>[e(a(L),{class:"font-normal h-full justify-start py-1.5 px-1.5 text-c-1 hover:bg-b-2 w-fit",fullWidth:"",variant:"ghost"},{default:t(()=>[m("h2",J,[r(x(a(D)[a(s).themeId])+" ",1),e(a(k),{class:"size-2.5",icon:"ChevronDown",thickness:"3.5"})])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(A)]),_:1})]),_:1})])]),_:1}))}}),O={class:"flex-1"},ne=y({__name:"Settings",setup(w){const s={general:{component:K,title:"general"}},i=P("general");return(l,c)=>(u(),_(W,null,{default:t(()=>[e(a(G),{title:"Settings"},{content:t(()=>[m("div",O,[e(B,null,{default:t(()=>[(u(),b(C,null,z(s,o=>e(I,{key:o.title,class:"text-xs capitalize",isCopyable:!1,isDeletable:!1,variable:{uid:o.title,name:o.title}},{default:t(()=>[r(x(o.title),1)]),_:2},1032,["variable"])),64))]),_:1})])]),_:1}),e(U,{class:"flex-1"},{default:t(()=>[(u(),_(T(s[i.value].component)))]),_:1})]),_:1}))}});export{ne as default};
