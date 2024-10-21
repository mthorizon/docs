import{d as o,j as e}from"./index-91LSPTZq.js";const t={title:"Sequence - Web3 Gaming Platform - Unreal SDK Upgrading",description:"Documentation for Unreal SDK upgrading versions when using the Sequence infrastructure stack for web3 gaming."};function i(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"upgrading",children:["Upgrading",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"manually-upgrading-from-previous-versions",children:["Manually Upgrading from previous versions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manually-upgrading-from-previous-versions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you are using release Beta 1.0.3 or older, you can continue using Unreal versions 5.2 or 5.3. For releases after 1.0.3, you will need to upgrade to Unreal Engine version 5.4."}),`
`,e.jsxs(n.p,{children:["Before updating, please backup any configuration data stored in ",e.jsx(n.code,{children:"PluginConfig/Config.h"})," or ",e.jsx(n.code,{children:"Config/Config.h"}),". Once backed up, delete the entire SequencePlugin directory. Replace it with the new updated version of the plugin."]}),`
`,e.jsxs(n.h3,{id:"upgrading-to-unreal-54",children:["Upgrading to Unreal 5.4",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading-to-unreal-54",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If your project is currently on 5.2 or 5.3, then for this version you'll want to upgrade to 5.4."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Close the Unreal Editor and your your Code Editor"}),`
`,e.jsx(n.li,{children:'Right click on your Unreal Project file > "Switch Unreal Engine Version" (you may need to click "Show more options"), choose 5.4 and confirm'}),`
`,e.jsx(n.li,{children:"Open your code editor and rebuild your source code"}),`
`]}),`
`,e.jsxs(n.p,{children:["As a way of future proofing we recommend installing Visual Studio 2022 in accordance with ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"these docs"})," as Unreal 5.4 and onward will be dropping support for Visual Studio 2019."]})]})}function d(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{d as default,t as frontmatter};