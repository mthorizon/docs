import{f as p,i as c,r as m}from"./DataTableInput.vue-b0s40B3D.js";import{u as i}from"./SidebarButton.vue-CIsUIBOi.js";import{d as u,V as a,a0 as o,ab as t,W as r,aa as d,$ as f,X as k,F as y,a9 as V,_,Y as x,ac as g,a2 as h}from"./APIComponent-D9ACMBjP.js";const B={key:0},C={class:"custom-scroll flex flex-1 flex-col gap-1.5 p-2 md:p-5"},w=u({__name:"Form",props:{title:{},options:{},data:{},onUpdate:{type:Function}},setup(N){return(e,U)=>(a(),o(i,null,{title:t(()=>[e.title?(a(),r("span",B,d(e.title),1)):f(e.$slots,"title",{key:1})]),default:t(()=>[k("div",C,[Object.keys(e.data).length>0?(a(),o(p,{key:0,columns:[""]},{default:t(()=>[(a(!0),r(y,null,V(e.options,(l,s)=>(a(),o(c,{key:s,class:_({"border-t":s===0})},{default:t(()=>[x(m,{modelValue:String(e.data[l.key]??""),placeholder:l.placeholder,"onUpdate:modelValue":n=>e.onUpdate(l.key,n)},{default:t(()=>[g(d(l.label),1)]),_:2},1032,["modelValue","placeholder","onUpdate:modelValue"])]),_:2},1032,["class"]))),128))]),_:1})):h("",!0)])]),_:3}))}});export{w};
