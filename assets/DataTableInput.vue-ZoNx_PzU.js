import{d as b,b as d,c as g,z as t,an as i,av as C,B as n,am as p,ap as r,C as c,$ as k,az as B,u as h,bC as _,al as $}from"./APIComponent-BiF6kRvt.js";import{i as O}from"./DataTableRow.vue-CD9o8jpy.js";import{O as q}from"./SidebarButton.vue-CK80TmYe.js";import{s as A}from"./index-BqYEJk3-.js";const F={key:0,class:"text-c-2 flex min-w-[120px] items-center border-r-1/2 pl-2 pr-0"},I={class:"row-1"},P=["id","max","min","readOnly","required","type","value"],S={key:0,class:"absolute centered-y right-0 pt-px pr-2 text-xxs text-c-3 bg-b-1 shadow-[-8px_0_4px_var(--scalar-background-1)] opacity-100 duration-150 transition-opacity peer-focus:opacity-0"},z={key:1,class:"absolute centered-y right-7 text-orange text-xs"},E=b({inheritAttrs:!1,__name:"DataTableInput",props:{id:{},type:{},containerClass:{},required:{type:Boolean,default:!1},modelValue:{},canAddCustomEnumValue:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},enum:{},min:{},max:{}},emits:["update:modelValue","inputFocus","inputBlur","selectVariable"],setup(m,{emit:v}){const l=m,s=v,o=d(!0),y=d(""),x=d(!1),f=()=>{x.value||s("inputBlur")},w=g(()=>l.type==="password"?o.value?"password":"text":l.type??"text"),V=e=>{const a=e.target;y.value=a.value,s("update:modelValue",a.value)};return(e,a)=>(t(),i(O,{class:$(["relative row",e.containerClass])},{default:C(()=>[e.$slots.default?(t(),n("div",F,[p(e.$slots,"default",{},void 0,!0)])):r("",!0),c("div",I,[l.enum&&l.enum.length?(t(),i(q,{key:0,canAddCustomValue:e.canAddCustomEnumValue,modelValue:l.modelValue,value:l.enum,"onUpdate:modelValue":a[0]||(a[0]=u=>s("update:modelValue",u))},null,8,["canAddCustomValue","modelValue","value"])):(t(),n(k,{key:1},[c("input",B(e.$attrs,{id:e.id,autocomplete:"off",class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer px-2 py-1.5 outline-none","data-1p-ignore":"",max:e.max,min:e.min,readOnly:e.readOnly,required:e.required,spellcheck:"false",type:w.value,value:e.modelValue,onBlur:f,onFocus:a[1]||(a[1]=u=>s("inputFocus")),onInput:V}),null,16,P),e.required?(t(),n("div",S," Required ")):r("",!0)],64))]),e.$slots.warning?(t(),n("div",z,[p(e.$slots,"warning",{},void 0,!0)])):r("",!0),p(e.$slots,"icon",{},void 0,!0),e.type==="password"?(t(),i(h(_),{key:2,class:"-ml-.5 mr-1 h-6 w-6 self-center p-1.5",icon:o.value?"Show":"Hide",label:o.value?"Show Password":"Hide Password",onClick:a[2]||(a[2]=u=>o.value=!o.value)},null,8,["icon","label"])):r("",!0)]),_:3},8,["class"]))}}),T=A(E,[["__scopeId","data-v-04bdd5dd"]]);export{T as r};
