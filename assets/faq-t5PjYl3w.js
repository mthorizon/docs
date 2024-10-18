import{d as r,j as e}from"./index-D9Qc1RWB.js";/* empty css                                */const o={title:"Sequence - Web3 Gaming Platform - Embedded Wallet Quickstart",description:"FAQ and Common Errors"};function a(t){const n={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"faq",children:["FAQ",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h3,{id:"im-receiving-an-error-such-as-unable-to-decode-regular-signature-when-trying-to-verify-a-signature-from-an-embedded-wallet-in-my-backend",children:["I'm receiving an error such as ",e.jsx(n.code,{children:"unable to decode regular signature"})," when trying to verify a signature from an embedded wallet in my backend.",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#im-receiving-an-error-such-as-unable-to-decode-regular-signature-when-trying-to-verify-a-signature-from-an-embedded-wallet-in-my-backend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["It's important to ensure that when attempting to call the ",e.jsx(n.code,{children:"IsValidMessageSignature"})," function that the parameters passed are exact - down to whitespace in the message. Otherwise a common issue is that you haven't ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#parent-wallet",children:"deployed a parent wallet"})," on that particular chain."]}),`
`,e.jsxs(n.h3,{id:"im-receiving-an-invalid-tenant-error",children:["I'm receiving an invalid tenant error.",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#im-receiving-an-invalid-tenant-error",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["This is most likely due to a mismatch of the configuration keys from Sequence Builder. Ensure that these are copied and pasted correctly and the project access key matches the tenant key provided as well which should resolve the issue. You can see more information about configuring ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#embedded-wallet-configuration",children:"embedded wallet here"}),"."]})]})}function s(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{s as default,o as frontmatter};
