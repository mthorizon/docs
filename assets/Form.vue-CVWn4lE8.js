import{f as p,i as m,a as c}from"./DataTableInput.vue-Dxsu8lic.js";import{u as i}from"./Sidebar.vue-CzscLYIi.js";import{d as u,y as a,ao as o,aw as t,z as r,av as d,an as f,B as k,a0 as y,au as V,am as x,M as B,ax as _,aq as g}from"./APIComponent-v8d_ZxlT.js";const h={key:0},C={class:"custom-scroll flex flex-1 flex-col gap-1.5 p-2 md:p-5"},S=u({__name:"Form",props:{title:{},options:{},data:{},onUpdate:{type:Function}},setup(N){return(e,U)=>(a(),o(i,null,{title:t(()=>[e.title?(a(),r("span",h,d(e.title),1)):f(e.$slots,"title",{key:1})]),default:t(()=>[k("div",C,[Object.keys(e.data).length>0?(a(),o(p,{key:0,columns:[""]},{default:t(()=>[(a(!0),r(y,null,V(e.options,(l,s)=>(a(),o(m,{key:s,class:x({"border-t":s===0})},{default:t(()=>[B(c,{modelValue:String(e.data[l.key]??""),placeholder:l.placeholder,"onUpdate:modelValue":n=>e.onUpdate(l.key,n)},{default:t(()=>[_(d(l.label),1)]),_:2},1032,["modelValue","placeholder","onUpdate:modelValue"])]),_:2},1032,["class"]))),128))]),_:1})):g("",!0)])]),_:3}))}});export{S as w};
