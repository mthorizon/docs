import{d as r,j as e}from"./index-CDc3-n8i.js";const i={title:"Relayer API",description:"undefined"};function t(a){const n={a:"a",aside:"aside",div:"div",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"relayer-api",children:["Relayer API",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-api",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.aside,{"data-callout":"note",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://0xsequence.redoc.ly/tag/relayer",children:"Relayer API documentation and endpoints"})})}),`
`,e.jsx(n.p,{children:"The Sequence Relayer service offers a simple interface for dispatching meta-transactions on Ethereum-compatible networks."}),`
`,e.jsx(n.p,{children:"Meta-transactions are the idea of a transaction inside of a transaction. The benefits of Sequence meta-transactions are that they allow:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gas abstraction -- whereby users can pay for network gas in a variety of tokens (ie. USDC, DAI, etc.)"}),`
`,e.jsx(n.li,{children:"Sponsored gas -- projects may sponsor the gas of specific contracts to allow free gas for their users"}),`
`,e.jsx(n.li,{children:"Batched transactions -- group a bunch of independent transactions and allow them to be mined as a single transaction"}),`
`,e.jsx(n.li,{children:"Parallel transactions -- parallelize the dispatch of transactions in some cases"}),`
`,e.jsx(n.li,{children:"Fire + forget model -- easily send transactions to the relayer which will automatically manage nonces, bump gas, and other features which will ensure fast delivery"}),`
`,e.jsx(n.li,{children:"Optimal gas pricing for transactions"}),`
`]}),`
`,e.jsx(n.p,{children:"The best part: transactions with Sequence Relayer are compatible with any existing/deployed Ethereum contract, and thus, integrating the Sequence Relayer doesn't require any changes to your contracts or dapp."}),`
`,e.jsx(n.p,{children:"The Sequence Relayer is usable by frontend dapps, or even in your backends."})]})}function o(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{o as default,i as frontmatter};
