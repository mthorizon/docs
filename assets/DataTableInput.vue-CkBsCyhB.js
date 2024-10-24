import{d as y,y as l,z as o,B as f,an as r,aq as c,am as b,ay as C,ao as m,aw as x,aD as $,b as p,c as k,a0 as _,M as B,aA as h,u as q,bE as O}from"./APIComponent-D4yCWLd1.js";import{s as v}from"./index-DrThwh5m.js";import{O as A,_ as D}from"./Sidebar.vue-3k0GKTI6.js";const F={key:0,class:"sr-only"},G=y({__name:"DataTable",props:{columns:{},scroll:{type:Boolean}},setup(d){return(a,s)=>(l(),o("div",{class:b(["border-1/2 rounded bg-b-1 md:mx-1",a.scroll?"overflow-x-auto custom-scroll":"overflow-visible"])},[f("table",{class:b(["grid auto-rows-auto min-h-8 mb-0",{"min-w-full w-max":a.scroll}]),style:C({gridTemplateColumns:a.columns.map(n=>n||"1fr").join(" ")})},[a.$slots.caption?(l(),o("caption",F,[r(a.$slots,"caption")])):c("",!0),r(a.$slots,"default")],6)],2))}}),S=y({__name:"DataTableCell",props:{is:{default:"td"}},setup(d){return(a,s)=>(l(),m($(a.is),{class:"min-h-8 min-w-8 border-l-0 border-t-0 border-b-1/2 border-r-1/2 flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative",role:"cell"},{default:x(()=>[r(a.$slots,"default")]),_:3}))}}),T={},E={class:"group contents w-fit min-w-full"};function I(d,a){return l(),o("tr",E,[r(d.$slots,"default")])}const J=v(T,[["render",I]]),z={key:0,class:"text-c-2 flex min-w-[120px] items-center border-r-1/2 pl-2 pr-0"},N={class:"row-1"},P={key:0,class:"absolute centered-y right-0 pt-px pr-2 text-xxs text-c-3 bg-b-1 shadow-[-8px_0_4px_var(--scalar-background-1)] opacity-100 duration-150 transition-opacity peer-focus:opacity-0"},U={key:1,class:"absolute centered-y right-7 text-orange text-xs"},H=y({inheritAttrs:!1,__name:"DataTableInput",props:{id:{},type:{},containerClass:{},required:{type:Boolean,default:!1},modelValue:{},canAddCustomEnumValue:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},enum:{},min:{},max:{}},emits:["update:modelValue","inputFocus","inputBlur","selectVariable"],setup(d,{emit:a}){const s=d,n=a,u=p(!0);p("");const w=p(!1),V=()=>{w.value||n("inputBlur")},g=k(()=>s.type==="password"?u.value?"password":"text":s.type??"text");return(e,t)=>(l(),m(S,{class:b(["relative row",e.containerClass])},{default:x(()=>[e.$slots.default?(l(),o("div",z,[r(e.$slots,"default",{},void 0,!0)])):c("",!0),f("div",N,[s.enum&&s.enum.length?(l(),m(A,{key:0,canAddCustomValue:e.canAddCustomEnumValue,modelValue:s.modelValue,value:s.enum,"onUpdate:modelValue":t[0]||(t[0]=i=>n("update:modelValue",i))},null,8,["canAddCustomValue","modelValue","value"])):(l(),o(_,{key:1},[B(D,h(e.$attrs,{id:e.id,class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer outline-none",disableCloseBrackets:"",disableTabIndent:"",max:e.max,min:e.min,modelValue:e.modelValue??"",readOnly:e.readOnly,required:e.required,spellcheck:"false",type:g.value,onBlur:V,onFocus:t[1]||(t[1]=i=>n("inputFocus")),"onUpdate:modelValue":t[2]||(t[2]=i=>n("update:modelValue",i))}),null,16,["id","max","min","modelValue","readOnly","required","type"]),e.required?(l(),o("div",P," Required ")):c("",!0)],64))]),e.$slots.warning?(l(),o("div",U,[r(e.$slots,"warning",{},void 0,!0)])):c("",!0),r(e.$slots,"icon",{},void 0,!0),e.type==="password"?(l(),m(q(O),{key:2,class:"-ml-.5 mr-1 h-6 w-6 self-center p-1.5",icon:u.value?"Show":"Hide",label:u.value?"Show Password":"Hide Password",onClick:t[3]||(t[3]=i=>u.value=!u.value)},null,8,["icon","label"])):c("",!0)]),_:3},8,["class"]))}}),K=v(H,[["__scopeId","data-v-0417d80a"]]);export{K as a,G as f,J as i,S as m};
