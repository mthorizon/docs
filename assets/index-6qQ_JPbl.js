import{r as i,j as s}from"./index-CtKkAyG2.js";const v=({labels:u,children:b})=>{const o=i.useRef(null),[c,l]=i.useState(0),h=t=>{l(t)};i.useEffect(()=>{m(document,c)},[c]);function m(t,e){var d;const a=(d=o.current)==null?void 0:d.children;if(a!==void 0)for(let n=0;n<a.length;n++){const r=a[n];r.classList.add("hidden"),n===e&&r.classList.remove("hidden")}}return s.jsxs("div",{children:[s.jsx("div",{className:"tabbed-content__menu",children:u.map((t,e)=>s.jsx("button",{className:`tabbed-content__menu-button ${e===c?"tabbed-content__menu-button--active":""}`,onClick:()=>h(e),children:t},t))}),s.jsx("div",{ref:o,children:b})]})};export{v as T};
