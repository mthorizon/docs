import{r as i,j as s}from"./index-BYxPjFyR.js";const d=e=>{const r=i.useRef(null),t=i.useRef(null),c=e.width?e.width:"560",n=e.height?e.height:"315";return i.useEffect(()=>{const a=()=>{t.current&&r.current&&(t.current.style.display="block",r.current.style.display="none",t.current.muted=!1,t.current.play())},l=r.current;return l.addEventListener("click",a),()=>{l.removeEventListener("click",a)}},[]),s.jsxs("div",{className:"video-container",children:[s.jsx("img",{ref:r,className:"preview-image",width:c,height:n,src:e.videoPreviewSrc,alt:"Preview"}),s.jsx("video",{ref:t,className:"video-frame",width:c,height:n,controls:!0,muted:!0,src:e.videoSrc,type:"video/mp4",style:{display:"none"}})]})};export{d as V};
