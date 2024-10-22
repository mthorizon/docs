import{d as b,B as n,C as c,a0 as k,au as y,D as g,ao as d,u,al as S,aq as C,am as M,b as f,y as R,aw as s,M as i,ax as j,aR as K,av as z,at as A,j as I,n as T}from"./APIComponent-CCHoYXk0.js";import{f as $,e as q,u as F,a as H}from"./Sidebar.vue-DIc7rore.js";import{p as J,a as L}from"./SidebarListElement.vue-DHBqYPgo.js";import{x as O,a as P}from"./ViewLayoutContent.vue-0CWPQomv.js";import{e as Q,b as U,w as X}from"./index-Bjstbx5X.js";import"./index-DEUUvuAw.js";const G={class:"flex flex-row gap-1.5 space-x-1"},W=["onClick"],Y=b({__name:"EnvironmentColors",props:{activeColor:{}},emits:["select"],setup(x){const v=[{color:"grey",bgClass:"bg-grey"},{color:"red",bgClass:"bg-red"},{color:"yellow",bgClass:"bg-yellow"},{color:"green",bgClass:"bg-green"},{color:"orange",bgClass:"bg-orange"},{color:"blue",bgClass:"bg-blue"},{color:"text-c-2",bgClass:"bg-c-2"},{color:"purple",bgClass:"bg-purple"},{color:"pink",bgClass:"bg-pink"}];return(a,r)=>(n(),c("div",G,[(n(),c(k,null,y(v,e=>g("div",{key:e.color,class:M(["flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",e.bgClass]),onClick:p=>a.$emit("select",e.color)},[a.activeColor===e.color?(n(),d(u(S),{key:0,icon:"Checkmark",size:"xs"})):C("",!0)],10,W)),64))]))}}),Z={class:"flex-1"},ee=["value"],le={class:"colors ml-auto"},re=b({__name:"Environment",setup(x){const v=Q(),{environments:a,environmentMutators:r}=U(),e=f(null),p=f(null),m=f(!1);function w(){const l=X.parse({name:"New Environment",uid:I(),color:"grey",raw:JSON.stringify({exampleKey:"exampleValue"},null,2),parsed:[],isDefault:!1});r.add(l),e.value=l.uid,v.push(e.value)}function D(l){e.value&&r.edit(e.value,"value",l)}const _=l=>{r.delete(l),e.value===l&&(e.value=null)},h=l=>e.value&&r.edit(e.value,"color",l),N=()=>{v.currentRoute.value.params.environment==="default"&&(e.value=a.default.uid)},V=()=>{e.value&&!a[e.value].isDefault&&(m.value=!0,T(()=>{var l;(l=p.value)==null||l.focus()}))},E=l=>{const t=l.target.value;e.value&&!a[e.value].isDefault&&r.edit(e.value,"name",t)};return R(N),(l,t)=>(n(),d(P,null,{default:s(()=>[i($,{title:"Environment"},{content:s(()=>[g("div",Z,[i(J,null,{default:s(()=>[(n(!0),c(k,null,y(u(a),o=>(n(),d(L,{key:o.uid,class:"text-xs",variable:{name:o.name,uid:o.uid,color:o.color,isDefault:o.isDefault},warningMessage:"Are you sure you want to delete this environment?",onClick:B=>e.value=o.uid,onDelete:B=>_(o.uid)},null,8,["variable","onClick","onDelete"]))),128))]),_:1})])]),button:s(()=>[i(q,{click:w},{title:s(()=>t[2]||(t[2]=[j("Add Environment")])),_:1})]),_:1}),i(O,{class:"flex-1"},{default:s(()=>[i(F,null,K({default:s(()=>[e.value?(n(),d(H,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",language:"json",lineNumbers:"",modelValue:u(a)[e.value].value,"onUpdate:modelValue":D},null,8,["modelValue"])):C("",!0)]),_:2},[e.value?{name:"title",fn:s(()=>[!m.value||u(a)[e.value].isDefault?(n(),c("span",{key:0,onDblclick:V},z(u(a)[e.value].name),33)):(n(),c("input",{key:1,ref_key:"nameInputRef",ref:p,class:"ring-1 ring-offset-4 ring-b-outline rounded",spellcheck:"false",type:"text",value:u(a)[e.value].name,onBlur:t[0]||(t[0]=o=>m.value=!1),onInput:E,onKeyup:t[1]||(t[1]=A(o=>m.value=!1,["enter"]))},null,40,ee)),g("div",le,[i(Y,{activeColor:u(a)[e.value].color,onSelect:h},null,8,["activeColor"])])]),key:"0"}:void 0]),1024)]),_:1})]),_:1}))}});export{re as default};
