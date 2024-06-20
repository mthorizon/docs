import{d as r,j as e}from"./index-BuoCAQh3.js";const a={title:"Sequence - Web3 Gaming Platform - Unreal SDK Installation",description:"Documentation for Unreal SDK Installation for the Sequence infrastructure stack for web3 gaming."};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"configuration-key-management",children:["Configuration Key Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-key-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Before you can use the Sequence Unreal SDK, you need to acquire the following configuration keys from the Sequence Builder:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"WaaSConfigKey"}),": This key can be learned about ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet",children:"here"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ProjectAccessKey"}),": This key can be learned about ",e.jsx(n.a,{href:"/solutions/builder/getting-started#claim-an-api-access-key",children:"here"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can then add these configuration keys in the ",e.jsx(n.code,{children:"[Config.h]"})," file under ",e.jsx(n.code,{children:"SequencePlugin/Source/SequencePlugin/Private/Config/Config.h"}),"."]}),`
`,e.jsxs(n.h2,{id:"security",children:["Security",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You must provide an encryption key implementation at ",e.jsx(n.code,{children:"[SequenceEncryptor.cpp]"})," function ",e.jsx(n.code,{children:"[GetStoredKey]"}),". This function must be implemented to provide a securely stored private key that will be used to encrypt and decrypt client information. Failure to do so will result in NO information being stored or in the event you do not use a securely stored key, can result in client information being stored insecurely on their systems."]})]})}function s(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,a as frontmatter};