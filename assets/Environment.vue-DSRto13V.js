import{d as b,z as n,B as c,$ as k,at as C,C as g,an as d,u,ak as S,ap as y,al as j,b as f,x as z,av as s,L as i,aw as K,aQ as M,au as R,as as $,j as A,n as I}from"./APIComponent-Bwa_0IVi.js";import{a as L}from"./CodeInput.vue-DVqYNJSi.js";import{b as Q,x as T,u as F,c as H}from"./Sidebar.vue-q0Gvg57h.js";import{b as J}from"./SidebarButton.vue-CaUoOK4l.js";import{p as O,a as P}from"./SidebarListElement.vue-W_7ep6q1.js";import{u as U,a as X,e as q}from"./index-BHRLqDzV.js";import"./index-D9Qc1RWB.js";const G={class:"flex flex-row gap-1.5 space-x-1"},W=["onClick"],Y=b({__name:"EnvironmentColors",props:{activeColor:{}},emits:["select"],setup(x){const v=[{color:"grey",bgClass:"bg-grey"},{color:"red",bgClass:"bg-red"},{color:"yellow",bgClass:"bg-yellow"},{color:"green",bgClass:"bg-green"},{color:"orange",bgClass:"bg-orange"},{color:"blue",bgClass:"bg-blue"},{color:"text-c-2",bgClass:"bg-c-2"},{color:"purple",bgClass:"bg-purple"},{color:"pink",bgClass:"bg-pink"}];return(a,r)=>(n(),c("div",G,[(n(),c(k,null,C(v,e=>g("div",{key:e.color,class:j(["flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",e.bgClass]),onClick:p=>a.$emit("select",e.color)},[a.activeColor===e.color?(n(),d(u(S),{key:0,icon:"Checkmark",size:"xs"})):y("",!0)],10,W)),64))]))}}),Z={class:"flex-1"},ee=["value"],le={class:"colors ml-auto"},ie=b({__name:"Environment",setup(x){const v=U(),{environments:a,environmentMutators:r}=X(),e=f(null),p=f(null),m=f(!1);function w(){const l=q.parse({name:"New Environment",uid:A(),color:"grey",raw:JSON.stringify({exampleKey:"exampleValue"},null,2),parsed:[],isDefault:!1});r.add(l),e.value=l.uid,v.push(e.value)}function D(l){e.value&&r.edit(e.value,"value",l)}const _=l=>{r.delete(l),e.value===l&&(e.value=null)},h=l=>e.value&&r.edit(e.value,"color",l),N=()=>{v.currentRoute.value.params.environment==="default"&&(e.value=a.default.uid)},V=()=>{e.value&&!a[e.value].isDefault&&(m.value=!0,I(()=>{var l;(l=p.value)==null||l.focus()}))},E=l=>{const t=l.target.value;e.value&&!a[e.value].isDefault&&r.edit(e.value,"name",t)};return z(N),(l,t)=>(n(),d(H,null,{default:s(()=>[i(Q,{title:"Environment"},{content:s(()=>[g("div",Z,[i(O,null,{default:s(()=>[(n(!0),c(k,null,C(u(a),o=>(n(),d(P,{key:o.uid,class:"text-xs",variable:{name:o.name,uid:o.uid,color:o.color,isDefault:o.isDefault},warningMessage:"Are you sure you want to delete this environment?",onClick:B=>e.value=o.uid,onDelete:B=>_(o.uid)},null,8,["variable","onClick","onDelete"]))),128))]),_:1})])]),button:s(()=>[i(J,{click:w},{title:s(()=>t[2]||(t[2]=[K("Add Environment")])),_:1})]),_:1}),i(T,{class:"flex-1"},{default:s(()=>[i(F,null,M({default:s(()=>[e.value?(n(),d(L,{key:0,class:"pl-px pr-2 md:px-2 py-2.5",language:"json",lineNumbers:"",modelValue:u(a)[e.value].value,"onUpdate:modelValue":D},null,8,["modelValue"])):y("",!0)]),_:2},[e.value?{name:"title",fn:s(()=>[!m.value||u(a)[e.value].isDefault?(n(),c("span",{key:0,onDblclick:V},R(u(a)[e.value].name),33)):(n(),c("input",{key:1,ref_key:"nameInputRef",ref:p,class:"ring-1 ring-offset-4 ring-b-outline rounded",spellcheck:"false",type:"text",value:u(a)[e.value].name,onBlur:t[0]||(t[0]=o=>m.value=!1),onInput:E,onKeyup:t[1]||(t[1]=$(o=>m.value=!1,["enter"]))},null,40,ee)),g("div",le,[i(Y,{activeColor:u(a)[e.value].color,onSelect:h},null,8,["activeColor"])])]),key:"0"}:void 0]),1024)]),_:1})]),_:1}))}});export{ie as default};
