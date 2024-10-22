import{s as w,e as k}from"./index-DRiewHXx.js";import{aL as M,B as o,C as r,an as _,d as h,b as $,E as B,D as g,u as b,M as p,al as y,aq as u,ap as x,aw as D,ao as N,aK as E,a0 as S,b5 as z,am as C,av as L}from"./APIComponent-C9xy0BRJ.js";import{w as T}from"./Sidebar.vue-ohsR_E5H.js";const V=()=>{const{toast:s}=M();return{copyToClipboard:n=>{navigator.clipboard.writeText(n).then(()=>{s("Copied to the clipboard.","info")})}}},A={},K={class:"flex flex-col p-2 pb-[75px]"};function q(s,n){return o(),r("ul",K,[_(s.$slots,"default")])}const P=w(A,[["render",q]]),F={class:"absolute flex right-1 opacity-0 group-hover:opacity-100"},I=h({__name:"SidebarListElementActions",props:{variable:{},warningMessage:{},isCopyable:{type:Boolean},isDeletable:{type:Boolean}},emits:["delete"],setup(s,{emit:n}){const d=n,t=$({action:"None",name:""}),c=B(),{copyToClipboard:m}=V();function e(a){t.value={action:a,name:s.variable.name},c.show()}function l(){c.hide(),t.value={action:"None",name:""}}function v(a){d("delete",a),l()}return(a,i)=>(o(),r(S,null,[g("div",F,[a.isCopyable?(o(),r("button",{key:0,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",type:"button",onClick:i[0]||(i[0]=f=>b(m)(a.variable.name))},[p(b(y),{class:"h-3 w-3",icon:"Clipboard"})])):u("",!0),!a.variable.isDefault&&a.isDeletable?(o(),r("button",{key:1,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",type:"button",onClick:i[1]||(i[1]=x(f=>e("Delete"),["prevent"]))},[p(b(y),{class:"h-3.5 w-3.5",icon:"Close"})])):u("",!0)]),p(b(E),{size:"sm",state:b(c),title:`${t.value.action} ${t.value.name}`},{default:D(()=>[t.value.action==="Delete"?(o(),N(T,{key:0,variableName:t.value.name,warningMessage:a.warningMessage,onClose:l,onDelete:i[2]||(i[2]=f=>v(a.variable.uid))},null,8,["variableName","warningMessage"])):u("",!0)]),_:1},8,["state","title"])],64))}}),R={key:0,class:"hover:bg-b-3 rounded p-1.5",type:"button"},j={class:"empty-variable-name"},G=h({__name:"SidebarListElement",props:{variable:{},warningMessage:{},isDeletable:{type:Boolean,default:!0},isCopyable:{type:Boolean,default:!0}},emits:["delete"],setup(s,{emit:n}){const d=n,t=k(),c=(e,l)=>{e.metaKey?window.open(l,"_blank"):t.push(l)},m=e=>{d("delete",e)};return(e,l)=>{const v=z("router-link");return o(),r("li",null,[p(v,{class:C(["h-8 text-c-2 hover:bg-b-2 group relative block flex items-center gap-1 rounded py-1 pr-2 font-medium no-underline",[e.variable.color?"pl-1":"pl-2"]]),exactActiveClass:"active-link",to:`${e.variable.uid}`,onClick:l[0]||(l[0]=x(a=>c(a,e.variable.uid),["prevent"]))},{default:D(()=>[e.variable.color?(o(),r("button",R,[g("div",{class:C(["h-2.5 w-2.5 rounded-xl",`bg-${e.variable.color}`])},null,2)])):u("",!0),g("span",j,L(e.variable.name),1),p(I,{isCopyable:e.isCopyable,isDeletable:e.isDeletable,variable:{...e.variable,isDefault:e.variable.isDefault??!1},warningMessage:e.warningMessage,onDelete:m},null,8,["isCopyable","isDeletable","variable","warningMessage"])]),_:1},8,["class","to"])])}}}),Q=w(G,[["__scopeId","data-v-271914bc"]]);export{Q as a,P as p};
