import{d as j,c as L}from"./SidebarButton.vue-Vu_4mBCn.js";import{p as N,a as $}from"./SidebarListElement.vue-D-knLr7V.js";import{x as w,a as F}from"./ViewLayoutContent.vue-DIUyEz3u.js";import{d as V,ap as g,aV as O,c as b,V as u,W as h,F as B,Y as o,a0 as _,a2 as S,aq as R,ab as s,H as k,X as U,a9 as M,ac as q,b1 as A}from"./APIComponent-QnbjmDRW.js";import{w as y}from"./Form.vue-ByWVwHrY.js";import"./index-Byc1XYKt.js";import"./DataTableInput.vue-ffi3Rnem.js";const E={class:"w-full"},G=V({__name:"ServerForm",setup(C){const{activeCollection:l,servers:m,serverMutators:v}=g(),f=[{label:"URL",key:"url",placeholder:"https://void.scalar.com/api"},{label:"Label",key:"description",placeholder:"Production"}],d=O(),t=b(()=>{var e,a;return m[l.value&&d.params.server==="default"?(e=l.value)==null?void 0:e.servers[0]:((a=l.value)==null?void 0:a.servers.find(r=>r===d.params.server))??""]}),c=(e,a)=>{l.value&&v.edit(t.value.uid,e,a)},p=(e,a)=>{l.value&&v.edit(t.value.uid,`variables.${e}.value`,a)},n=b(()=>{var e;return Object.entries(((e=t.value)==null?void 0:e.variables)??{}).map(([a,r])=>{var i;return{key:a,label:a,placeholder:(r.default??((i=r==null?void 0:r.enum)==null?void 0:i[0])??"").toString()}})}),x=b(()=>Object.entries(t.value.variables??{}).reduce((e,[a,r])=>{var i;return e[a]=(r.default??((i=r==null?void 0:r.enum)==null?void 0:i[0])??"").toString(),e},{}));return(e,a)=>(u(),h("div",E,[t.value?(u(),h(B,{key:0},[o(y,{data:t.value,onUpdate:c,options:f,title:"Server"},null,8,["data"]),Object.keys(x.value).length?(u(),_(y,{key:0,data:x.value,onUpdate:p,options:n.value,title:"Variables"},null,8,["data","options"])):S("",!0)],64)):S("",!0)]))}}),H={class:"flex-1"},I=V({__name:"Servers",setup(C){const{activeCollection:l,servers:m,serverMutators:v}=g(),{push:f}=R(),d=()=>{if(!l.value)return;const t=A.parse({url:"http://localhost"});v.add(t,l.value.uid),f(`/servers/${t.uid}`)};return(t,c)=>(u(),_(F,null,{default:s(()=>[o(k(j),{title:"Servers"},{content:s(()=>[U("div",H,[o(N,null,{default:s(()=>{var p;return[(u(!0),h(B,null,M((p=k(l))==null?void 0:p.servers,n=>(u(),_($,{key:n,class:"text-xs",variable:{name:k(m)[n].url??"",uid:n}},null,8,["variable"]))),128))]}),_:1})])]),button:s(()=>[o(L,{click:d},{title:s(()=>c[0]||(c[0]=[q("Add Server")])),_:1})]),_:1}),o(w,{class:"flex-1"},{default:s(()=>[o(G)]),_:1})]),_:1}))}});export{I as default};