import{aD as K,z as n,B as f,d as V,c as x,D as g,aW as N,aX as A,au as C,az as T,b as k,w as B,n as W,J as j,ar as F,as as M,an as b,av as m,$ as E,at as H,u as o,C as y,al as I,L as v,ak as _,aw as L,ap as R,aI as D,am as U}from"./APIComponent-BRnv8xYh.js";import{p as $,R as q}from"./Sidebar.vue-DPFv0tDS.js";const G={},J={class:"-mx-0.75 my-0.75 h-px bg-border"};function O(i,d){return n(),f("div",J)}const X=K(G,[["render",O]]);function Q(){return new Map([["↵","enter"],["N","n"]])}const Y=V({__name:"ScalarHotkey",props:{hotkey:{}},emits:["hotkeyPressed"],setup(i,{emit:d}){const a=i,p=d,h=x(()=>g()?"⌘":"⌃"),r=x(()=>Q().get(a.hotkey)),c=x(()=>`${h.value} ${a.hotkey}`),t=N({passive:!1,onEventFired(s){!g()&&s.ctrlKey&&s.key===r.value&&(s.preventDefault(),s.stopPropagation())}});return A(t[`${g()?"meta":"control"}_${a.hotkey}`],()=>{p("hotkeyPressed",r.value||"")}),(s,w)=>(n(),f("div",T(s.$attrs,{class:"bg-b-1 border-b-3 inline-block overflow-hidden rounded border-1/2 text-xxs rounded-b px-1 font-medium uppercase"}),C(c.value),17))}}),Z={class:"w-full"},ee={class:"text-c-1"},ae={class:"flex items-center justify-center h-4 w-4"},oe=V({__name:"DataTableInputSelect",props:{modelValue:{},value:{},canAddCustomValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(i,{emit:d}){const a=i,p=d,h=x(()=>a.value??[]),r=k(a.modelValue.toString()),c=k(!1),t=k(""),s=k(null);B(t,e=>{p("update:modelValue",e)});const w=e=>{r.value=e,p("update:modelValue",e),c.value=!1},S=()=>{t.value.trim()&&(w(t.value),t.value="")},P=()=>{t.value.trim()||(r.value="",c.value=!1)},z=e=>r.value===e;return B(c,e=>{e&&W(()=>{var l;(l=s.value)==null||l.focus()})}),(e,l)=>(n(),f("div",Z,[c.value?j((n(),f("input",{key:0,ref_key:"inputRef",ref:s,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),class:"border-none text-c-1 min-w-0 w-full px-2 py-1.5 outline-none",placeholder:"Value",type:"text",onBlur:P,onKeyup:M(S,["enter"])},null,544)),[[F,t.value]]):(n(),b(o(q),{key:1,resize:"",value:r.value},{items:m(()=>[(n(!0),f(E,null,H(h.value,u=>(n(),b(o($),{key:u,class:"flex gap-1.5 group/item items-center whitespace-nowrap text-ellipsis overflow-hidden",value:u,onClick:te=>w(u)},{default:m(()=>[y("div",{class:I(["flex items-center justify-center rounded-full p-[3px] w-4 h-4 group-hover/item:shadow-border",z(u)?"bg-blue text-b-1":"text-transparent"])},[v(o(_),{class:"size-2.5",icon:"Checkmark",thickness:"3.5"})],2),L(" "+C(u),1)]),_:2},1032,["value","onClick"]))),128)),v(o(X)),e.canAddCustomValue?(n(),b(o($),{key:0,class:"flex items-center gap-1.5",onClick:l[1]||(l[1]=u=>c.value=!0)},{default:m(()=>[y("div",ae,[v(o(_),{class:"h-2.5",icon:"Add"})]),l[2]||(l[2]=y("span",null,"Add value",-1))]),_:1})):R("",!0)]),default:m(()=>[v(o(D),{class:"gap-1.5 font-normal h-full justify-start px-2 py-1.5",fullWidth:"",variant:"ghost"},{default:m(()=>[y("span",ee,C(r.value||"Select a value"),1),v(o(_),{icon:"ChevronDown",size:"xs"})]),_:1})]),_:1},8,["value"]))]))}}),ne=V({__name:"SidebarButton",props:{click:{type:Function}},setup(i){const d=i,a=()=>{d.click()};return(p,h)=>(n(),b(o(D),{class:"bg-b-1 text-c-1 hover:bg-b-2 group relative w-auto md:w-full border-1/2 px-2 py-1 md:p-1.5 h-auto",icon:"Plus",variant:"outlined",onClick:a},{default:m(()=>[U(p.$slots,"title"),v(Y,{class:"hidden md:block absolute right-2 group-hover:opacity-80 text-c-2 add-item-hotkey",hotkey:"K",onHotkeyPressed:a})]),_:3}))}});export{oe as O,Y as P,ne as b,X as i};
