import{d as k,U as F,bm as z,a4 as T,r as h,bn as M,l as _,V as l,W as i,X as x,a0 as v,af as $,H as r,a3 as y,a7 as O,ba as N,_ as d,ad as P,aa as g,a2 as u,$ as j,Z as A,ac as D,bo as E}from"./APIComponent-Bsfms1Hg.js";const I={class:"scalar-input-container relative"},K=["for"],R={class:"icon-slot cursor-pointer text-c-ghost hover:text-c-1 !empty:flex !empty:w-7 !empty:items-center !empty:pr-3"},H=k({__name:"ScalarTextField",props:{modelValue:{},placeholder:{},label:{},labelShadowColor:{default:"var(--scalar-background-1)"},error:{type:Boolean},isMultiline:{type:Boolean},helperText:{},emitOnBlur:{type:Boolean,default:!0},handleFieldSubmit:{},handleFieldChange:{},disableTrim:{type:Boolean,default:!1}},emits:["submit","update:modelValue"],setup(w,{emit:B}){const a=w,c=B,C=F({base:"scalar-input-wrapper relative flex items-center rounded border border-solid border-border",variants:{focus:{true:"scalar-input-wrapper-focus border-c-3 has-actv-btn:border has-actv-btn:border-border"},error:{true:"scalar-input-wrapper-error border-red"}}}),p=z(),m=p.id||`id-${T()}`,o=h(),s=h(!1);let b;if(a.isMultiline){const{triggerResize:e}=M({element:o,input:a.modelValue});b=e}function S(e){const t=e.target.value;a.isMultiline&&b(),a.handleFieldChange?a.handleFieldChange(t):c("update:modelValue",t)}function f(e){const t=e.target,n=a.disableTrim||a.isMultiline?t.value:t.value.trim();a.handleFieldSubmit?a.handleFieldSubmit(n):c("submit",n)}function V(e){s.value=!1,a.emitOnBlur&&a.modelValue&&f(e)}return _(()=>{var e;Object.prototype.hasOwnProperty.call(p,"autofocus")&&((e=o.value)==null||e.focus())}),(e,t)=>(l(),i("div",I,[x("div",{class:d(r(C)({error:e.error,focus:s.value}))},[(l(),v(N(e.isMultiline?"textarea":"input"),$({id:r(m)},e.$attrs,{ref_key:"input",ref:o,class:["scalar-input",r(y)({"min-h-[77px]":e.isMultiline},"z-10 w-full resize-none appearance-none border-0 bg-transparent p-3 text-sm text-c-1","outline-none transition-opacity")],placeholder:e.placeholder,value:e.modelValue,onBlur:V,onFocus:t[0]||(t[0]=n=>s.value=!0),onInput:S,onKeydown:O(f,["enter"])}),null,16,["id","class","placeholder","value"])),e.label?(l(),i("label",{key:0,class:d(r(y)("scalar-input-label pointer-events-none absolute left-0 top-0 mx-2 my-3 px-1 text-sm","z-10 origin-top-left rounded text-c-3 shadow-current transition-transform")),for:r(m),style:P({"box-shadow":`0 0 4px 4px ${e.labelShadowColor}`,"background-color":e.labelShadowColor})},g(e.label),15,K)):u("",!0),x("div",R,[j(e.$slots,"default",{},void 0,!0)])],2),e.helperText?(l(),i("span",{key:0,class:d(["helper-text mt-1.5 flex items-center gap-1 text-sm",e.error?"font-medium text-red":"text-c-2"])},[e.error?(l(),v(r(A),{key:0,icon:"Error",size:"sm"})):u("",!0),D(" "+g(e.helperText),1)],2)):u("",!0)]))}}),U=E(H,[["__scopeId","data-v-4de7a24e"]]);export{U as m};
