import{x as D,a as z}from"./ViewLayoutContent.vue-DIUyEz3u.js";import{r as M,L as I,l as V,m as B,d as j,V as c,W as _,X as a,Y as h,ab as p,a0 as u,H as e,Z as k,a2 as m,ac as b,_ as g,ax as y,F as P,ap as U,cG as W,aa as L,a9 as G,cH as N,ad as S,ai as $}from"./APIComponent-QnbjmDRW.js";import"./index-Byc1XYKt.js";const f=M("dark");function E(){const x=()=>{var l;f.value=f.value==="dark"?"light":"dark",typeof window<"u"&&((l=window==null?void 0:window.localStorage)==null||l.setItem("colorMode",f.value))};function i(l){var r;f.value=l===null?"system":l?"dark":"light",typeof window<"u"&&((r=window==null?void 0:window.localStorage)==null||r.setItem("colorMode",f.value))}const o=()=>{var l;return typeof window<"u"&&typeof(window==null?void 0:window.matchMedia)=="function"?(l=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:l.matches:!1},t=l=>{typeof document<"u"&&(l===null?(document.body.classList.toggle("dark-mode",o()),document.body.classList.toggle("light-mode",!o())):(document.body.classList.toggle("dark-mode",l===!0),document.body.classList.toggle("light-mode",l===!1)))};return f.value=typeof window>"u"?"dark":localStorage.getItem("colorMode")||"dark",t(f.value==="dark"||f.value==="system"&&o()),I(f,l=>{t(l==="dark"||l==="system"&&o())},{immediate:!0}),V(()=>{if(typeof window<"u"&&typeof window.matchMedia=="function"){const l=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>{f.value==="system"&&t(o())};l.addEventListener("change",r),B(()=>{l.removeEventListener("change",r)})}}),{colorMode:f,toggleDarkMode:x,setDarkMode:i,getSystemModePreference:o}}const H={class:"flex flex-col gap-2"},A={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},F={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},O={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},R=j({__name:"SettingsGeneralMode",setup(x){const{colorMode:i,setDarkMode:o}=E(),t=M("System Preference");i.value==="system"?t.value="System Preference":i.value==="dark"?t.value="Dark":t.value="Light";const l=()=>{o(null),t.value="System Preference"},r=()=>{o(!1),t.value="Light"},C=()=>{o(!0),t.value="Dark"};return(w,n)=>(c(),_(P,null,[n[3]||(n[3]=a("h3",{class:"font-bold mb-1 mt-8"},"Appearance",-1)),n[4]||(n[4]=a("p",{class:"text-c-2 mb-4 leading-[21px]"}," Choose between light, dark, or system-based appearance for your workspace. ",-1)),a("div",H,[h(e(y),{class:g(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 border-1/2",t.value==="System Preference"?"bg-b-2 text-c-1":"bg-b-1"]),onClick:l},{default:p(()=>[a("div",A,[t.value==="System Preference"?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)]),n[0]||(n[0]=b(" System Preference (default) "))]),_:1},8,["class"]),h(e(y),{class:g(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 border-1/2",t.value==="Light"?"bg-b-2 text-c-1":"bg-b-1"]),onClick:r},{default:p(()=>[a("div",F,[t.value==="Light"?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)]),n[1]||(n[1]=b(" Light Mode Always "))]),_:1},8,["class"]),h(e(y),{class:g(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 mb-8 border-1/2",t.value==="Dark"?"bg-b-2 text-c-1":"bg-b-1"]),onClick:C},{default:p(()=>[a("div",O,[t.value==="Dark"?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)]),n[2]||(n[2]=b(" Dark Mode Always "))]),_:1},8,["class"])])],64))}}),T={class:"bg-b-1 w-full h-full overflow-auto"},q={class:"flex flex-col px-5 py-5 max-w-[720px] ml-auto mr-auto w-full"},X={class:"gap-2 mt-4 mb-8 flex flex-col"},Y={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},Z={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},J={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},K={class:"flex flex-col gap-2"},Q={class:"grid grid-cols-2 gap-2"},ee={class:"flex items-center gap-2"},ae={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},te={class:"flex items-center gap-1"},le=j({__name:"SettingsGeneral",setup(x){const{activeWorkspace:i,workspaceMutators:o,proxyUrl:t,setProxyUrl:l,defaultProxyUrl:r}=U(),C=["default","alternate","moon","purple","solarized","bluePlanet","saturn","kepler","mars","deepSpace"],w=v=>({default:{light:"#fff",dark:"#0f0f0f",accent:"#0099ff"},alternate:{light:"#f9f9f9",dark:"#131313",accent:"#e7e7e7"},moon:{light:"#ccc9b3",dark:"#313332",accent:"#645b0f"},purple:{light:"#f5f6f8",dark:"#22252b",accent:"#5469d4"},solarized:{light:"#fdf6e3",dark:"#00212b",accent:"#007acc"},bluePlanet:{light:"#f0f2f5",dark:"#000e23",accent:"#e0e2e6"},saturn:{light:"#e4e4df",dark:"#2c2c30",accent:"#1763a6"},kepler:{light:"#f6f6f6",dark:"#0d0f1e",accent:"#7070ff"},mars:{light:"#f2efe8",dark:"#321116",accent:"#c75549"},deepSpace:{light:"#f4f4f5",dark:"#09090b",accent:"#8ab4f8"},none:{light:"#ffffff",dark:"#000000",accent:"#3b82f6"}})[v]||{light:"#ffffff",dark:"#000000",accent:"#3b82f6"},n=v=>{o.edit(i.value.uid,"themeId",v)};return(v,s)=>(c(),_("div",T,[a("div",q,[a("div",null,[a("div",null,[s[5]||(s[5]=W('<h2 class="font-bold text-xl mb-5 mt-10">Settings</h2><h3 class="font-bold mb-1">CORS Proxy</h3><p class="text-c-2 mb-2 leading-[21px]"> Browsers block cross-origin requests for security. We provide a public proxy to <a class="hover:text-c-1 underline-offset-2" href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">bypass CORS issues</a>. Check the <a class="hover:text-c-1 underline-offset-2" href="https://github.com/scalar/scalar/tree/main/examples/proxy-server" target="_blank">source code on GitHub</a>. </p>',3)),a("div",X,[h(e(y),{class:g(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 bg-b-1 border-1/2",{"bg-b-2 text-c-1":e(t)}]),variant:e(t)?"primary":"secondary",onClick:s[0]||(s[0]=d=>e(l)("https://proxy.scalar.com"))},{default:p(()=>[a("div",Y,[e(t)==="https://proxy.scalar.com"?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)]),s[3]||(s[3]=b(" Use proxy.scalar.com (default) "))]),_:1},8,["class","variant"]),e(r)&&e(r)!=="https://proxy.scalar.com"?(c(),u(e(y),{key:0,class:"w-full shadow-none text-c-1 justify-start pl-2 gap-2 bg-b-1 border-1/2",variant:"primary",onClick:s[1]||(s[1]=d=>e(l)(e(r)))},{default:p(()=>[a("div",Z,[e(t)===e(r)?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)]),b(" Use custom proxy ("+L(e(r))+") ",1)]),_:1})):m("",!0),h(e(y),{class:g(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 bg-b-1 border-1/2",{"bg-b-2 text-c-1":!e(t)}]),variant:e(t)?"secondary":"primary",onClick:s[2]||(s[2]=d=>e(l)(""))},{default:p(()=>[a("div",J,[e(t)?m("",!0):(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"}))]),s[4]||(s[4]=b(" Skip the proxy "))]),_:1},8,["class","variant"])])]),a("div",null,[s[6]||(s[6]=a("h3",{class:"font-bold mb-1"},"Theme",-1)),s[7]||(s[7]=a("p",{class:"text-c-2 mb-4 leading-[21px]"}," We’ve got a whole rainbow of themes for you to play with: ",-1)),a("div",K,[a("div",Q,[(c(),_(P,null,G(C,d=>h(e(y),{key:d,class:g(["px-2",["flex items-center justify-between gap-2 text-c-1 border-1/2",e(i).themeId===d?"bg-b-2":"bg-b-1"]]),variant:"ghost",onClick:se=>n(d)},{default:p(()=>[a("div",ee,[a("div",{class:g(["flex items-center justify-center w-5 h-5 rounded-full border-2 border-c-3",{"bg-primary":e(i).themeId===d}])},[a("div",ae,[e(i).themeId===d?(c(),u(e(k),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):m("",!0)])],2),b(" "+L(e(N)[d]),1)]),a("div",te,[a("span",{class:"inline-block w-5 h-5 rounded-full border-c-3 -mr-3",style:S({backgroundColor:w(d).light})},null,4),a("span",{class:"inline-block w-5 h-5 rounded-full border-c-3 -mr-3",style:S({backgroundColor:w(d).dark})},null,4),a("span",{class:"inline-block w-5 h-5 rounded-full border-c-3",style:S({backgroundColor:w(d).accent})},null,4)])]),_:2},1032,["class","onClick"])),64))])])]),a("div",null,[h(R)])])])]))}}),ne=j({__name:"Settings",setup(x){const i={general:{component:le,title:"general"}},o=M("general");return(t,l)=>(c(),u(z,null,{default:p(()=>[h(D,{class:"flex-1"},{default:p(()=>[(c(),u($(i[o.value].component)))]),_:1})]),_:1}))}});export{ne as default};