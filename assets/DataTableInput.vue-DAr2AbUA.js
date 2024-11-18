import{d as f,U as a,V as o,W as x,_ as d,a1 as c,ad as $,Z as y,$ as m,ab as w,be as C,ak as V,r as p,c as _,F as h,af as v,H as B,aS as O}from"./APIComponent-Cy-fCHb4.js";import{O as q,_ as A}from"./SidebarButton.vue-dQ9tGnP9.js";const F={key:0,class:"sr-only"},W=f({__name:"DataTable",props:{columns:{},scroll:{type:Boolean}},setup(i){return(l,s)=>(a(),o("div",{class:y(["border-1/2 rounded bg-b-1",l.scroll?"overflow-x-auto custom-scroll":"overflow-visible"])},[x("table",{class:y(["grid auto-rows-auto min-h-8 mb-0",{"min-w-full w-max":l.scroll}]),style:$({gridTemplateColumns:l.columns.map(r=>r||"1fr").join(" ")})},[l.$slots.caption?(a(),o("caption",F,[d(l.$slots,"caption")])):c("",!0),d(l.$slots,"default")],6)],2))}}),S=f({__name:"DataTableCell",props:{is:{default:"td"}},setup(i){return(l,s)=>(a(),m(C(l.is),{class:"min-h-8 min-w-8 border-l-0 border-t-0 border-b-1/2 border-r-1/2 flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative",role:"cell"},{default:w(()=>[d(l.$slots,"default")]),_:3}))}}),D={},I={class:"group contents w-fit min-w-full"};function T(i,l){return a(),o("tr",I,[d(i.$slots,"default")])}const Z=V(D,[["render",T]]),E={key:0,class:"text-c-1 flex min-w-[94px] items-center pl-2 pr-0"},U={class:"row-1 overflow-x-auto"},H=["id","readOnly","type","value"],P={key:2,class:"absolute centered-y right-2 pt-px text-xxs text-c-3 bg-b-1 shadow-[-8px_0_4px_var(--scalar-background-1)] opacity-100 duration-150 transition-opacity peer-has-[:focus-visible]:opacity-0"},z={key:1,class:"absolute centered-y right-7 text-orange text-xs"},N=f({inheritAttrs:!1,__name:"DataTableInput",props:{id:{},type:{},containerClass:{},required:{type:Boolean,default:!1},modelValue:{},canAddCustomEnumValue:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},enum:{},min:{},max:{}},emits:["update:modelValue","inputFocus","inputBlur","selectVariable"],setup(i,{emit:l}){const s=i,r=l,u=p(!0);p("");const k=p(!1),g=()=>{k.value||r("inputBlur")},b=_(()=>s.type==="password"?u.value?"password":"text":s.type??"text");return(e,t)=>(a(),m(S,{class:y(["relative row",e.containerClass])},{default:w(()=>[e.$slots.default?(a(),o("div",E,[d(e.$slots,"default",{},void 0,!0)])):c("",!0),x("div",U,[s.enum&&s.enum.length?(a(),m(q,{key:0,canAddCustomValue:e.canAddCustomEnumValue,modelValue:s.modelValue,value:s.enum,"onUpdate:modelValue":t[0]||(t[0]=n=>r("update:modelValue",n))},null,8,["canAddCustomValue","modelValue","value"])):(a(),o(h,{key:1},[u.value&&e.type==="password"?(a(),o("input",v({key:0},e.$attrs,{id:e.id,autocomplete:"off",class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer px-2 py-1.25 -outline-offset-2","data-1p-ignore":"",readOnly:e.readOnly,spellcheck:"false",type:b.value,value:e.modelValue,onInput:t[1]||(t[1]=n=>r("update:modelValue",n.target.value??""))}),null,16,H)):(a(),m(A,v({key:1},e.$attrs,{id:e.id,class:"border-none text-c-1 disabled:text-c-2 min-w-0 w-full peer",disableCloseBrackets:"",disableTabIndent:"",max:e.max,min:e.min,modelValue:e.modelValue??"",readOnly:e.readOnly,required:e.required,spellcheck:"false",type:b.value,onBlur:g,onFocus:t[2]||(t[2]=n=>r("inputFocus")),"onUpdate:modelValue":t[3]||(t[3]=n=>r("update:modelValue",n))}),null,16,["id","max","min","modelValue","readOnly","required","type"])),e.required?(a(),o("div",P," Required ")):c("",!0)],64))]),e.$slots.warning?(a(),o("div",z,[d(e.$slots,"warning",{},void 0,!0)])):c("",!0),d(e.$slots,"icon",{},void 0,!0),e.type==="password"?(a(),m(B(O),{key:2,class:"-ml-.5 mr-1 h-6 w-6 self-center p-1.5",icon:u.value?"Show":"Hide",label:u.value?"Show Password":"Hide Password",onClick:t[4]||(t[4]=n=>u.value=!u.value)},null,8,["icon","label"])):c("",!0)]),_:3},8,["class"]))}}),G=V(N,[["__scopeId","data-v-8574d822"]]);export{G as a,W as f,Z as i,S as m};
