import{d as a,j as e}from"./index-E_uliwFZ.js";const i={title:"Sequence Guest Module - Unauthenticated Wallet for On-Demand Deployment",description:"The Guest Module is a version of the Sequence wallet without signatures, nonces, or replay protection."};function s(n){const t={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"guest-module",children:["Guest Module",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guest-module",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:`The Guest Module is an implementation of the Sequence wallet that does not support signatures, nonces or replay protection.
Executing transactions using this wallet is not an authenticated process, and can be done by any address.`}),`
`,e.jsx(t.p,{children:"This contract is completely public with no security, designed to execute pre-signed transactions and use Sequence tools without using the wallets."}),`
`,e.jsxs(t.h2,{id:"on-demand-deployment",children:["On Demand deployment",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-demand-deployment",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"When a user interacts with their wallet on-chain for the first time, the transaction will include the deployment of the wallet contract."}),`
`,e.jsx(t.p,{children:`This is done by batching the requested transaction with the wallet deployment transaction.
The batched transactions are processed by the Guest Module.`})]})}function d(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default,i as frontmatter};
