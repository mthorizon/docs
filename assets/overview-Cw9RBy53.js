import{d as s,j as e}from"./index-D9Qc1RWB.js";const o={title:"Sequence - Web3 Gaming Platform - Unity SDK Overview",description:"Documentation for Unity SDK overview for the Sequence infrastructure stack for web3 gaming."};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"introduction",children:["Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The Sequence Unity Embedded Wallet SDK provides full Sequence ",e.jsx(n.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"Embedded Wallet"})," and ",e.jsx(n.a,{href:"/api/indexer/overview",children:"Indexer"})," integration for your Unity Games, integrated with our own purpose-built for Unity SequenceEthereum library. That's right, no Nethereum required!"]}),`
`,e.jsxs(n.p,{children:["This SDK follows ",e.jsx(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," (",e.jsx(n.code,{children:"major.minor.patch"}),"). Breaking changes will always cause a ",e.jsx(n.code,{children:"major"})," version increment, non-breaking new features will cause a ",e.jsx(n.code,{children:"minor"})," version increment, and bugfixes will cause a ",e.jsx(n.code,{children:"patch"})," version increment."]}),`
`,e.jsxs(n.h2,{id:"requirements",children:["Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Unity 2021.3.6f1 or later"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Android"}),`
`,e.jsx(n.li,{children:"iOS"}),`
`,e.jsxs(n.li,{children:["PC standalone -> (Mono builds only when using Social Sign in -> the system commands throw exceptions when doing IL2CPP builds -> see ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/Sequence/SequenceSDK/Authentication/OpenIdAuthenticator.cs#L231",children:"OpenIdAuthentication.PlatformSpecificSetup"}),")"]}),`
`,e.jsxs(n.li,{children:["Mac standalone -> (Mono builds only when using Social Sign in -> in our testing MacOS doesn't pick up custom URL schemes automatically unless you run some system commands first; these system commands only work on Mono -> see ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/Sequence/SequenceSDK/Authentication/OpenIdAuthenticator.cs#L231",children:"OpenIdAuthentication.PlatformSpecificSetup"}),")"]}),`
`,e.jsx(n.li,{children:"WebGL"}),`
`]}),`
`,e.jsxs(n.h2,{id:"additional-resources",children:["Additional Resources",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In addition to reading these docs, you can also checkout ",e.jsx(n.a,{href:"/guides/jelly-forest-unity-guide",children:"our guide"})," that details how we made the Jelly Forest demo game."]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default,o as frontmatter};
