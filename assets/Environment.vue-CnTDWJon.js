import{d as $,r as b,c as ee,L as B,V as v,W as k,a2 as w,F as V,a9 as M,X as y,a0 as x,H as s,Z as D,ad as S,a5 as le,a6 as ae,Y as f,_ as oe,aJ as I,ab as h,av as K,am as te,aR as ne,al as ue,aO as R,C as se,l as re,ag as ce,ac as ie,aG as ve,aa as de,a7 as me,cF as fe,a4 as pe}from"./APIComponent-BIyQtZJk.js";import{c as U,e as be,d as Ce,u as he,b as ye}from"./SidebarButton.vue-ByObo_B3.js";import{a as ke,b as xe}from"./SidebarListElement.vue-B9V3yxuV.js";import{x as ge,a as Ee}from"./ViewLayoutContent.vue-DhZCE9fY.js";import{m as we}from"./ScalarTextField.vue-xA2-iyuc.js";import"./index-BuXTZDNI.js";const _e=["onClick"],$e={key:1,class:"!py-0 flex flex-1 gap-2 items-center rounded"},je=["placeholder"],A=$({__name:"EnvironmentColors",props:{activeColor:{}},emits:["select"],setup(g){const p=g,c=b(!1),a=b(""),n=b(null),d=[{color:"#8E8E8E"},{color:"#EF0006"},{color:"#EDBE20"},{color:"#069061"},{color:"#FB892C"},{color:"#0082D0"},{color:"#5203D1"},{color:"#FFC0CB"}],m=ee(()=>p.activeColor&&!d.some(e=>e.color===p.activeColor)||a.value?`background-color: ${p.activeColor||a.value};`:"background: linear-gradient(to right, rgb(235, 87, 87), rgb(242, 201, 76), rgb(76, 183, 130), rgb(78, 167, 252), rgb(250, 96, 122));"),u=()=>{c.value=!c.value,I(()=>{n.value&&n.value.focus()})};return B(a,e=>{e&&!e.startsWith("#")&&(a.value=`#${e}`),c.value=!0}),(e,r)=>(v(),k("div",{class:oe(["flex flex-row gap-1.5 items-center justify-between space-x-1 min-h-10 min-w-[296px] py-1",c.value?"pl-2 pr-1.5":"px-2"])},[c.value?w("",!0):(v(),k(V,{key:0},[(v(),k(V,null,M(d,i=>y("div",{key:i.color,class:"flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",style:S({backgroundColor:i.color}),onClick:_=>e.$emit("select",i.color)},[e.activeColor===i.color&&!a.value?(v(),x(s(D),{key:0,class:"text-c-btn",icon:"Checkmark",size:"xs"})):w("",!0)],12,_e)),64)),r[2]||(r[2]=y("hr",{class:"w-0.5 h-5 border-ghost border-l"},null,-1)),y("label",{class:"cursor-pointer flex flex-row justify-center h-5 w-5 gap-2 items-center rounded-full z-10",style:S(m.value),onClick:u},[!c.value&&(e.activeColor===a.value||e.activeColor&&!d.some(i=>i.color===e.activeColor))?(v(),x(s(D),{key:0,class:"text-c-btn",icon:"Checkmark",size:"xs"})):w("",!0)],4)],64)),c.value?(v(),k("div",$e,[r[3]||(r[3]=y("span",{class:"absolute border border-dashed h-5 w-5 rounded-full"},null,-1)),y("span",{class:"h-5 w-5 rounded-full z-[1]",style:S(m.value)},null,4),le(y("input",{ref_key:"customColorInputRef",ref:n,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),class:"border-transparent flex-1 outline-none w-full text-sm",placeholder:e.activeColor||"#000000",type:"text",onInput:r[1]||(r[1]=i=>e.$emit("select",a.value))},null,40,je),[[ae,a.value]]),y("button",{class:"text-c-3 hover:bg-b-2 p-1.5 rounded-lg",type:"button",onClick:u},[f(s(D),{icon:"Checkmark",size:"xs"})])])):w("",!0)],2))}}),De={class:"flex flex-col gap-4"},Se=$({__name:"EnvironmentColorModal",props:{state:{},selectedColor:{}},emits:["cancel","submit"],setup(g,{emit:p}){const c=g,a=p,n=b(""),d=m=>{n.value=m};return(m,u)=>(v(),x(s(K),{size:"xxs",state:m.state,title:"Edit Environment Color"},{default:h(()=>[y("div",De,[f(A,{activeColor:n.value||c.selectedColor,class:"p-1 w-full",onSelect:d},null,8,["activeColor"]),f(U,{onCancel:u[0]||(u[0]=e=>a("cancel")),onSubmit:u[1]||(u[1]=e=>a("submit",n.value))})])]),_:1},8,["state"]))}}),Ve={class:"flex flex-col gap-3"},Be=$({__name:"EnvironmentModal",props:{state:{}},emits:["cancel","submit"],setup(g,{emit:p}){const c=g,a=p,n=b(""),d=b("#8E8E8E"),m=u=>{d.value=u};return B(()=>c.state.open,u=>{u&&(n.value="",d.value="#8E8E8E")}),(u,e)=>(v(),x(s(K),{size:"xxs",state:u.state,title:"Add Environment"},{default:h(()=>[y("div",Ve,[f(s(we),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r),placeholder:"Environment name"},null,8,["modelValue"]),f(A,{activeColor:d.value,class:"p-3 w-full",onSelect:m},null,8,["activeColor"]),f(U,{onCancel:e[1]||(e[1]=r=>a("cancel")),onSubmit:e[2]||(e[2]=r=>a("submit",{name:n.value,color:d.value}))})])]),_:1},8,["state"]))}}),Ne={class:"flex-1"},Oe=["value"],Ue=$({__name:"Environment",setup(g){const p=te(),c=ne(),{environments:a,environmentMutators:n,events:d}=ue(),m=R(),u=R(),e=b(null),r=b(null),i=b(!1),_=b(null),N=b(""),T=se("layout"),E=l=>JSON.parse(l),j=l=>JSON.stringify(l,null,2);function O(l){const o=a[Object.keys(a)[0]],t=(o?Object.keys(E(o.value)):[]).reduce((F,Q)=>(F[Q]="",F),{}),C=fe.parse({name:l.name,uid:pe(),color:l.color,value:j(t),isDefault:!1});n.add(C),e.value=C.uid,p.push(e.value),u.hide()}function J(l){Object.values(a).forEach(o=>{const t=E(o.value);l in t||(t[l]="",n.edit(o.uid,"value",j(t)))})}function L(l){Object.values(a).forEach(o=>{const t=E(o.value);l in t&&(delete t[l],n.edit(o.uid,"value",j(t)))})}function W(l){if(e.value){const o=E(l),t=E(a[e.value].value);Object.keys(o).forEach(C=>{C in t||J(C)}),Object.keys(t).forEach(C=>{C in o||L(C)}),n.edit(e.value,"value",l)}}const G=l=>{if(n.delete(l),e.value===l){const o=Object.values(a);if(o.length>0){const t=o[o.length-1];e.value=t.uid,p.push({name:"environment",params:{environment:t.uid}})}else e.value=a.default.uid,p.push({name:"environment",params:{environment:"default"}})}},H=l=>{_.value=l,N.value=a[l].color||"",m.show()},X=l=>{_.value&&(n.edit(_.value,"color",l),m.hide())},Y=()=>{const l=p.currentRoute.value.params.environment;l?e.value=l:l==="default"&&(e.value=a.default.uid)},Z=()=>{e.value&&!a[e.value].isDefault&&(i.value=!0,I(()=>{var l;(l=r.value)==null||l.focus()}))},q=l=>{const o=l.target.value;e.value&&!a[e.value].isDefault&&n.edit(e.value,"name",o)},z=l=>{l!=null&&l.createNew&&c.name==="environment"&&O({name:"",color:""})},P=()=>{u.show()};return B(()=>c.params.environment,l=>e.value=l||a.default.uid),re(()=>{Y(),d.hotKeys.on(z)}),ce(()=>d.hotKeys.off(z)),(l,o)=>(v(),x(Ee,null,{default:h(()=>[f(be,{title:"Environment"},{content:h(()=>[y("div",Ne,[f(ke,null,{default:h(()=>[(v(!0),k(V,null,M(s(a),t=>(v(),x(xe,{key:t.uid,class:"text-xs",isCopyable:!1,variable:{name:t.name,uid:t.uid,color:t.color,isDefault:t.isDefault},warningMessage:"Are you sure you want to delete this environment?",onClick:C=>e.value=t.uid,onColorModal:H,onDelete:C=>G(t.uid)},null,8,["variable","onClick","onDelete"]))),128))]),_:1})])]),button:h(()=>[f(Ce,{click:P,hotkey:"N",layout:s(T)},{title:h(()=>o[4]||(o[4]=[ie("Add Environment")])),_:1},8,["layout"])]),_:1}),f(ge,{class:"flex-1"},{default:h(()=>[f(he,null,ve({default:h(()=>[e.value?(v(),x(ye,{key:0,class:"pl-px pr-2 md:px-4 py-2",isCopyable:"",language:"json",lineNumbers:"",lint:"",modelValue:s(a)[e.value].value,"onUpdate:modelValue":W},null,8,["modelValue"])):w("",!0)]),_:2},[e.value?{name:"title",fn:h(()=>[!i.value||s(a)[e.value].isDefault?(v(),k("span",{key:0,onDblclick:Z},de(s(a)[e.value].name),33)):(v(),k("input",{key:1,ref_key:"nameInputRef",ref:r,class:"ring-1 ring-offset-4 ring-b-outline rounded",spellcheck:"false",type:"text",value:s(a)[e.value].name,onBlur:o[0]||(o[0]=t=>i.value=!1),onInput:q,onKeyup:o[1]||(o[1]=me(t=>i.value=!1,["enter"]))},null,40,Oe))]),key:"0"}:void 0]),1024)]),_:1}),f(Se,{selectedColor:N.value,state:s(m),onCancel:o[2]||(o[2]=t=>s(m).hide()),onSubmit:X},null,8,["selectedColor","state"]),f(Be,{state:s(u),onCancel:o[3]||(o[3]=t=>s(u).hide()),onSubmit:O},null,8,["state"])]),_:1}))}});export{Ue as default};
