import{d as r,z as s,B as l,C as c,am as a,ap as i,al as t,ax as d,an as p,av as u,aC as f}from"./APIComponent-BZ0l9kev.js";import{s as b}from"./index-4GqAGT8-.js";const w={key:0,class:"sr-only"},B=r({__name:"DataTable",props:{columns:{},scroll:{type:Boolean}},setup(o){return(e,n)=>(s(),l("div",{class:t(["border-1/2 rounded bg-b-1 md:mx-1",e.scroll?"overflow-x-auto custom-scroll":"overflow-visible"])},[c("table",{class:t(["grid auto-rows-auto min-h-8 mb-0",{"min-w-full w-max":e.scroll}]),style:d({gridTemplateColumns:e.columns.map(m=>m||"1fr").join(" ")})},[e.$slots.caption?(s(),l("caption",w,[a(e.$slots,"caption")])):i("",!0),a(e.$slots,"default")],6)],2))}}),g=r({__name:"DataTableCell",props:{is:{default:"td"}},setup(o){return(e,n)=>(s(),p(f(e.is),{class:"min-h-8 min-w-8 border-l-0 border-t-0 border-b-1/2 border-r-1/2 flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative overflow-hidden",role:"cell"},{default:u(()=>[a(e.$slots,"default")]),_:3}))}}),C={},v={class:"group contents w-fit min-w-full"};function x(o,e){return s(),l("tr",v,[a(o.$slots,"default")])}const _=b(C,[["render",x]]);export{_ as a,B as f,g as i};
