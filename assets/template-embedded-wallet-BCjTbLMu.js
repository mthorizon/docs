import{d as n,j as e}from"./index-DPqJ78J0.js";const l={title:"Sequence - Web3 Gaming Platform - Embedded Wallet Template",description:"Template for Embedded Wallet for the Sequence infrastructure stack for web3 gaming."};function a(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"quickstart",children:["Quickstart",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quickstart",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"try-a-demo",children:["Try a Demo",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#try-a-demo",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsxs(s.p,{children:["Try out the seamless UX of our Embedded Wallet at our ",e.jsx(s.a,{href:"https://0xsequence.github.io/demo-waas-auth/",children:"demo"})]})}),`
`,e.jsxs(s.h2,{id:"template",children:["Template",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#template",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsxs(s.p,{children:["Get started quickly with a ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-waas-auth",children:"template"})," leveraging our Embedded Wallet."]})}),`
`,e.jsxs(s.h2,{id:"getting-started",children:["Getting Started",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"sdk-installation",children:["SDK Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sdk-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We provide TypeScript and Unity SDKs for the Embedded Wallet authentication system. You can install the TypeScript SDK with:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/waas"})]})})}),`
`,e.jsxs(s.p,{children:["For more information on the Unity Embedded Wallet SDK, please refer to the ",e.jsx(s.a,{href:"/sdk/unity/overview",children:"Unity SDK documentation"})]}),`
`,e.jsxs(s.h3,{id:"project-setup",children:["Project Setup",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Sequence Embedded Wallet is currently only available as a closed beta. To start using the Embedded Wallet SDKs, you'll need to contact the Sequence team and acquire API credentials. Once this is done, you will be provided with two keys:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Project access key"}),`
`,e.jsx(s.li,{children:"Embedded Wallet configuration key"}),`
`]}),`
`,e.jsxs(s.h3,{id:"library-setup",children:["Library Setup",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#library-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To start using Sequence Embedded Wallet SDK, you'll need to create a new instance of the ",e.jsx(s.code,{children:"waas"})," class:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceWaaS } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/waas'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" waas"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceWaaS"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  projectAccessKey: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`${"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"process"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"env"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"PROJECT_ACCESS_KEY"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  waasConfigKey: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`${"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"process"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"env"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"WAAS_CONFIG_KEY"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  network: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'mumbai'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}, defaults."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"TEST"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsxs(s.p,{children:["Note that the library is operational, but it can't be used to interact with any wallet until you have authenticated ",e.jsx(s.strong,{children:"as a user"}),"."]})]})}function t(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(a,{...i})}):a(i)}export{t as default,l as frontmatter};
