import{f as j,e as w}from"./Sidebar.vue-DIc7rore.js";import{p as L,a as N}from"./SidebarListElement.vue-DHBqYPgo.js";import{x as M,a as O}from"./ViewLayoutContent.vue-0CWPQomv.js";import{b as B,y as R,e as U,i as $}from"./index-Bjstbx5X.js";import{w as y}from"./Form.vue-DHheBePv.js";import{d as C,c as b,B as u,C as h,a0 as g,M as o,ao as _,aq as S,aw as s,u as k,D as F,au as q,ax as A}from"./APIComponent-CCHoYXk0.js";import"./index-DEUUvuAw.js";import"./DataTableInput.vue-gG-O6e8U.js";const D={class:"w-full"},E=C({__name:"ServerForm",setup(V){const{activeCollection:t,servers:m,serverMutators:v}=B(),f=[{label:"URL",key:"url",placeholder:"https://void.scalar.com/api"},{label:"Label",key:"description",placeholder:"Production"}],d=R(),r=b(()=>{var e,a;return m[t.value&&d.params.server==="default"?(e=t.value)==null?void 0:e.servers[0]:((a=t.value)==null?void 0:a.servers.find(l=>l===d.params.server))??""]}),c=(e,a)=>{t.value&&v.edit(r.value.uid,e,a)},p=(e,a)=>{t.value&&v.edit(r.value.uid,`variables.${e}.value`,a)},i=b(()=>{var e;return Object.entries(((e=r.value)==null?void 0:e.variables)??{}).map(([a,l])=>{var n;return{key:a,label:a,placeholder:(l.default??((n=l==null?void 0:l.enum)==null?void 0:n[0])??"").toString()}})}),x=b(()=>Object.entries(r.value.variables??{}).reduce((e,[a,l])=>{var n;return e[a]=(l.default??((n=l==null?void 0:l.enum)==null?void 0:n[0])??"").toString(),e},{}));return(e,a)=>(u(),h("div",D,[r.value?(u(),h(g,{key:0},[o(y,{data:r.value,onUpdate:c,options:f,title:"Server"},null,8,["data"]),Object.keys(x.value).length?(u(),_(y,{key:0,data:x.value,onUpdate:p,options:i.value,title:"Variables"},null,8,["data","options"])):S("",!0)],64)):S("",!0)]))}}),G={class:"flex-1"},W=C({__name:"Servers",setup(V){const{activeCollection:t,servers:m,serverMutators:v}=B(),{push:f}=U(),d=()=>{if(!t.value)return;const r=$.parse({url:"http://localhost"});v.add(r,t.value.uid),f(`/servers/${r.uid}`)};return(r,c)=>(u(),_(O,null,{default:s(()=>[o(k(j),{title:"Servers"},{content:s(()=>[F("div",G,[o(L,null,{default:s(()=>{var p;return[(u(!0),h(g,null,q((p=k(t))==null?void 0:p.servers,i=>(u(),_(N,{key:i,class:"text-xs",variable:{name:k(m)[i].url??"",uid:i}},null,8,["variable"]))),128))]}),_:1})])]),button:s(()=>[o(w,{click:d},{title:s(()=>c[0]||(c[0]=[A("Add Server")])),_:1})]),_:1}),o(M,{class:"flex-1"},{default:s(()=>[o(E)]),_:1})]),_:1}))}});export{W as default};
