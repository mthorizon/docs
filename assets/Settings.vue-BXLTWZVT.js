import{x as D,a as P}from"./ViewLayoutContent.vue-CBx8ICwQ.js";import{d as w,b as S,B as c,C as v,D as e,M as o,aw as i,ao as f,u as a,al as p,aq as b,ax as m,am as u,aJ as h,a0 as j,bF as z,au as M,av as B,bG as L,ay as y,aD as G}from"./APIComponent-DeT70KZY.js";import{A as N,b as V}from"./index-CFeCKU_3.js";import"./index-BBCFkoVo.js";const W={class:"flex flex-col gap-2"},A={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},I={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},U={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},q=w({__name:"SettingsGeneralMode",setup(C){const{colorMode:n,setDarkMode:d}=N(),t=S("System Preference");n.value==="system"?t.value="System Preference":n.value==="dark"?t.value="Dark":t.value="Light";const k=()=>{d(null),t.value="System Preference"},x=()=>{d(!1),t.value="Light"},g=()=>{d(!0),t.value="Dark"};return(_,l)=>(c(),v(j,null,[l[3]||(l[3]=e("h3",{class:"font-bold mb-1 mt-8"},"Appearance",-1)),l[4]||(l[4]=e("p",{class:"text-c-2 mb-4 leading-[21px]"}," Choose between light, dark, or system-based appearance for your workspace. ",-1)),e("div",W,[o(a(h),{class:u(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 border-1/2",t.value==="System Preference"?"bg-b-1 text-c-1":"bg-b-2"]),onClick:k},{default:i(()=>[e("div",A,[t.value==="System Preference"?(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):b("",!0)]),l[0]||(l[0]=m(" System Preference (default) "))]),_:1},8,["class"]),o(a(h),{class:u(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 border-1/2",t.value==="Light"?"bg-b-1 text-c-1":"bg-b-2"]),onClick:x},{default:i(()=>[e("div",I,[t.value==="Light"?(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):b("",!0)]),l[1]||(l[1]=m(" Light Mode Always "))]),_:1},8,["class"]),o(a(h),{class:u(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 mb-8 border-1/2",t.value==="Dark"?"bg-b-1 text-c-1":"bg-b-2"]),onClick:g},{default:i(()=>[e("div",U,[t.value==="Dark"?(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):b("",!0)]),l[2]||(l[2]=m(" Dark Mode Always "))]),_:1},8,["class"])])],64))}}),O={class:"bg-b-1 w-full h-full overflow-auto"},R={class:"flex flex-col px-5 py-5 max-w-[720px] ml-auto mr-auto w-full"},T={class:"gap-2 mt-4 mb-8 flex flex-col"},$={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},E={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},F={class:"flex flex-col gap-2"},H={class:"grid grid-cols-2 gap-2"},J={class:"flex items-center gap-2"},K={class:"flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] p-1"},Q={class:"flex items-center gap-1"},X=w({__name:"SettingsGeneral",setup(C){const{activeWorkspace:n,workspaceMutators:d,proxyUrl:t,setProxyUrl:k}=V(),x=["default","alternate","moon","purple","solarized","bluePlanet","saturn","kepler","mars","deepSpace"],g=l=>({default:{light:"#fff",dark:"#0f0f0f",accent:"#0099ff"},alternate:{light:"#f9f9f9",dark:"#131313",accent:"#e7e7e7"},moon:{light:"#ccc9b3",dark:"#313332",accent:"#645b0f"},purple:{light:"#f5f6f8",dark:"#22252b",accent:"#5469d4"},solarized:{light:"#fdf6e3",dark:"#00212b",accent:"#007acc"},bluePlanet:{light:"#f0f2f5",dark:"#000e23",accent:"#e0e2e6"},saturn:{light:"#e4e4df",dark:"#2c2c30",accent:"#1763a6"},kepler:{light:"#f6f6f6",dark:"#0d0f1e",accent:"#7070ff"},mars:{light:"#f2efe8",dark:"#321116",accent:"#c75549"},deepSpace:{light:"#f4f4f5",dark:"#09090b",accent:"#8ab4f8"},none:{light:"#ffffff",dark:"#000000",accent:"#3b82f6"}})[l]||{light:"#ffffff",dark:"#000000",accent:"#3b82f6"},_=l=>{d.edit(n.value.uid,"themeId",l)};return(l,s)=>(c(),v("div",O,[e("div",R,[e("div",null,[e("div",null,[s[4]||(s[4]=z('<h2 class="font-bold text-xl mb-5 mt-10">Settings</h2><h3 class="font-bold mb-1">CORS Proxy</h3><p class="text-c-2 mb-2 leading-[21px]"> Browsers block cross-origin requests for security. We provide a public proxy to <a class="hover:text-c-1 underline-offset-2" href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">bypass CORS issues</a>. Check the <a class="hover:text-c-1 underline-offset-2" href="https://github.com/scalar/scalar/tree/main/examples/proxy-server" target="_blank">source code on GitHub</a>. </p>',3)),e("div",T,[o(a(h),{class:u(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 bg-b-2 border-1/2",{"bg-b-1 text-c-1":a(t)}]),variant:a(t)?"primary":"secondary",onClick:s[0]||(s[0]=r=>a(k)("https://proxy.scalar.com"))},{default:i(()=>[e("div",$,[a(t)?(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):b("",!0)]),s[2]||(s[2]=m(" Use proxy.scalar.com (default) "))]),_:1},8,["class","variant"]),o(a(h),{class:u(["w-full shadow-none text-c-1 justify-start pl-2 gap-2 bg-b-2 border-1/2",{"bg-b-1 text-c-1":!a(t)}]),variant:a(t)?"secondary":"primary",onClick:s[1]||(s[1]=r=>a(k)(""))},{default:i(()=>[e("div",E,[a(t)?b("",!0):(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"}))]),s[3]||(s[3]=m(" Skip the proxy "))]),_:1},8,["class","variant"])])]),e("div",null,[s[5]||(s[5]=e("h3",{class:"font-bold mb-1"},"Theme",-1)),s[6]||(s[6]=e("p",{class:"text-c-2 mb-4 leading-[21px]"}," We’ve got a whole rainbow of themes for you to play with: ",-1)),e("div",F,[e("div",H,[(c(),v(j,null,M(x,r=>o(a(h),{key:r,class:u(["px-2",["flex items-center justify-between gap-2 text-c-1 border-1/2",a(n).themeId===r?"bg-b-1":"bg-b-2"]]),variant:"ghost",onClick:Y=>_(r)},{default:i(()=>[e("div",J,[e("div",{class:u(["flex items-center justify-center w-5 h-5 rounded-full border-2 border-c-3",{"bg-primary":a(n).themeId===r}])},[e("div",K,[a(n).themeId===r?(c(),f(a(p),{key:0,icon:"Checkmark",size:"xs",thickness:"3.5"})):b("",!0)])],2),m(" "+B(a(L)[r]),1)]),e("div",Q,[e("span",{class:"inline-block w-5 h-5 rounded-full border-c-3 -mr-3",style:y({backgroundColor:g(r).light})},null,4),e("span",{class:"inline-block w-5 h-5 rounded-full border-c-3 -mr-3",style:y({backgroundColor:g(r).dark})},null,4),e("span",{class:"inline-block w-5 h-5 rounded-full border-c-3",style:y({backgroundColor:g(r).accent})},null,4)])]),_:2},1032,["class","onClick"])),64))])])]),e("div",null,[o(q)])])])]))}}),le=w({__name:"Settings",setup(C){const n={general:{component:X,title:"general"}},d=S("general");return(t,k)=>(c(),f(P,null,{default:i(()=>[o(D,{class:"flex-1"},{default:i(()=>[(c(),f(G(n[d.value].component)))]),_:1})]),_:1}))}});export{le as default};
