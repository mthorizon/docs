import{e as j,d as L}from"./Sidebar.vue-Cn4VgzDB.js";import{p as N,a as $}from"./SidebarListElement.vue-Gyy13lbd.js";import{x as w,a as F}from"./ViewLayoutContent.vue-grU7hdB2.js";import{d as C,aC as V,aS as O,c as b,V as u,W as h,F as g,Y as o,a0 as _,a2 as x,aJ as R,ab as s,H as k,X as U,a9 as M,ac as A,a_ as E}from"./APIComponent-CXhbCGpc.js";import{w as y}from"./Form.vue-Dip0zfd5.js";import"./index-wOmEfqkn.js";import"./DataTableInput.vue-CupuYn7g.js";const G={class:"w-full"},H=C({__name:"ServerForm",setup(B){const{activeCollection:l,servers:m,serverMutators:v}=V(),f=[{label:"URL",key:"url",placeholder:"https://void.scalar.com/api"},{label:"Label",key:"description",placeholder:"Production"}],d=O(),t=b(()=>{var e,a;return m[l.value&&d.params.server==="default"?(e=l.value)==null?void 0:e.servers[0]:((a=l.value)==null?void 0:a.servers.find(r=>r===d.params.server))??""]}),c=(e,a)=>{l.value&&v.edit(t.value.uid,e,a)},p=(e,a)=>{l.value&&v.edit(t.value.uid,`variables.${e}.value`,a)},n=b(()=>{var e;return Object.entries(((e=t.value)==null?void 0:e.variables)??{}).map(([a,r])=>{var i;return{key:a,label:a,placeholder:(r.default??((i=r==null?void 0:r.enum)==null?void 0:i[0])??"").toString()}})}),S=b(()=>Object.entries(t.value.variables??{}).reduce((e,[a,r])=>{var i;return e[a]=(r.default??((i=r==null?void 0:r.enum)==null?void 0:i[0])??"").toString(),e},{}));return(e,a)=>(u(),h("div",G,[t.value?(u(),h(g,{key:0},[o(y,{data:t.value,onUpdate:c,options:f,title:"Server"},null,8,["data"]),Object.keys(S.value).length?(u(),_(y,{key:0,data:S.value,onUpdate:p,options:n.value,title:"Variables"},null,8,["data","options"])):x("",!0)],64)):x("",!0)]))}}),J={class:"flex-1"},D=C({__name:"Servers",setup(B){const{activeCollection:l,servers:m,serverMutators:v}=V(),{push:f}=R(),d=()=>{if(!l.value)return;const t=E.parse({url:"http://localhost"});v.add(t,l.value.uid),f(`/servers/${t.uid}`)};return(t,c)=>(u(),_(F,null,{default:s(()=>[o(k(j),{title:"Servers"},{content:s(()=>[U("div",J,[o(N,null,{default:s(()=>{var p;return[(u(!0),h(g,null,M((p=k(l))==null?void 0:p.servers,n=>(u(),_($,{key:n,class:"text-xs",variable:{name:k(m)[n].url??"",uid:n}},null,8,["variable"]))),128))]}),_:1})])]),button:s(()=>[o(L,{click:d},{title:s(()=>c[0]||(c[0]=[A("Add Server")])),_:1})]),_:1}),o(w,{class:"flex-1"},{default:s(()=>[o(H)]),_:1})]),_:1}))}});export{D as default};
