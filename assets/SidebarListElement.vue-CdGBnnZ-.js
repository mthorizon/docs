import{ak as C,V as s,W as n,$ as x,d as h,r as D,aO as M,X as f,H as r,Y as c,Z as y,a2 as d,a1 as k,ab as w,a0 as _,av as $,F as B,am as N,bd as S,ad as V,aa as z,_ as E}from"./APIComponent-DAGs68gF.js";import{w as A,f as F}from"./SidebarButton.vue-B-8jhmjV.js";const L={},H={class:"flex flex-col px-3 pt-2.5 pb-[75px]"};function I(b,u){return s(),n("ul",H,[x(b.$slots,"default")])}const Y=C(L,[["render",I]]),K={class:"absolute flex right-1 opacity-0 group-hover:opacity-100"},O=h({__name:"SidebarListElementActions",props:{variable:{},warningMessage:{},isCopyable:{type:Boolean},isDeletable:{type:Boolean}},emits:["delete"],setup(b,{emit:u}){const p=u,o=D({action:"None",name:""}),i=M(),{copyToClipboard:v}=F();function m(a){o.value={action:a,name:b.variable.name},i.show()}function e(){i.hide(),o.value={action:"None",name:""}}function t(a){p("delete",a),e()}return(a,l)=>(s(),n(B,null,[f("div",K,[a.isCopyable?(s(),n("button",{key:0,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",type:"button",onClick:l[0]||(l[0]=g=>r(v)(a.variable.name))},[c(r(y),{class:"h-3 w-3",icon:"Clipboard"})])):d("",!0),!a.variable.isDefault&&a.isDeletable?(s(),n("button",{key:1,class:"text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",type:"button",onClick:l[1]||(l[1]=k(g=>m("Delete"),["prevent"]))},[c(r(y),{class:"h-3.5 w-3.5",icon:"Close"})])):d("",!0)]),c(r($),{size:"sm",state:r(i),title:`${o.value.action} ${o.value.name}`},{default:w(()=>[o.value.action==="Delete"?(s(),_(A,{key:0,variableName:o.value.name,warningMessage:a.warningMessage,onClose:e,onDelete:l[2]||(l[2]=g=>t(a.variable.uid))},null,8,["variableName","warningMessage"])):d("",!0)]),_:1},8,["state","title"])],64))}}),R={class:"empty-variable-name"},T=h({__name:"SidebarListElement",props:{variable:{},warningMessage:{},isDeletable:{type:Boolean,default:!0},isCopyable:{type:Boolean,default:!0}},emits:["delete","colorModal"],setup(b,{emit:u}){const p=u,o=N(),i=(e,t)=>{e.metaKey?window.open(t,"_blank"):o.push(t)},v=e=>{p("delete",e)},m=e=>{p("colorModal",e)};return(e,t)=>{const a=S("router-link");return s(),n("li",null,[c(a,{class:E(["h-8 text-c-2 hover:bg-b-2 group relative block flex items-center gap-1 rounded py-1 pr-2 font-medium no-underline",[e.variable.color?"pl-1":"pl-2"]]),exactActiveClass:"active-link",to:`${e.variable.uid}`,onClick:t[1]||(t[1]=k(l=>i(l,e.variable.uid),["prevent"]))},{default:w(()=>[e.variable.color?(s(),n("button",{key:0,class:"hover:bg-b-3 rounded p-1.5",type:"button",onClick:t[0]||(t[0]=l=>m(e.variable.uid))},[f("div",{class:"h-2.5 w-2.5 rounded-xl",style:V({backgroundColor:e.variable.color})},null,4)])):d("",!0),f("span",R,z(e.variable.name),1),c(O,{isCopyable:e.isCopyable,isDeletable:e.isDeletable,variable:{...e.variable,isDefault:e.variable.isDefault??!1},warningMessage:e.warningMessage,onDelete:v},null,8,["isCopyable","isDeletable","variable","warningMessage"])]),_:1},8,["class","to"])])}}}),Z=C(T,[["__scopeId","data-v-146f5335"]]);export{Y as a,Z as b};
