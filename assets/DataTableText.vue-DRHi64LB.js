import{d as s,aE as b,z as l,an as n,av as c,D as t,al as f,u as r,L as u,ak as m,au as x}from"./APIComponent-DY0yOrxg.js";import{m as i}from"./DataTableRow.vue-BkfISt6c.js";const h=["checked","disabled"],v=s({__name:"DataTableCheckbox",props:{modelValue:{type:Boolean},disabled:{type:Boolean},align:{default:"center"}},emits:["update:modelValue"],setup(p){const a=b({base:"w-8 h-8 flex items-center justify-center text-border peer-checked:text-c-2 pointer-events-none absolute before:absolute before:opacity-0 group-hover/cell:before:opacity-100 before:border before:rounded before:w-9/12 before:aspect-square before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-[1px]",variants:{align:{left:"left-0",center:"centered"}}});return(e,o)=>(l(),n(i,{class:"group/cell relative flex min-w-8"},{default:c(()=>[t("input",{checked:e.modelValue,class:"peer absolute inset-0 opacity-0 cursor-pointer",disabled:e.disabled,tabindex:"-1",type:"checkbox",onChange:o[0]||(o[0]=d=>e.$emit("update:modelValue",d.target.checked))},null,40,h),t("div",{class:f(r(a)({align:e.align}))},[u(r(m),{icon:"Checkmark",size:"xs",thickness:"2.5"})],2)]),_:1}))}}),k={class:"flex-1 px-2 py-1.5 whitespace-nowrap"},_=s({__name:"DataTableText",props:{text:{}},setup(p){return(a,e)=>(l(),n(i,{class:"relative flex"},{default:c(()=>[t("span",k,x(a.text),1)]),_:1}))}});export{_ as m,v};
