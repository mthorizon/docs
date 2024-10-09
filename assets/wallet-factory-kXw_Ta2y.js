import{d as r,j as e,e as n}from"./index-BeiwWbZM.js";/* empty css                                */const d={title:"Creating Sequence Wallets with the Factory Contract - API and Counterfactual Addresses",description:"The Wallet Factory allows for the creation of Sequence Wallets using the Factory contract, which generates child MinimalUpgradeableProxies that serve as the base code for all Sequence wallets."};function a(t){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"wallet-factory",children:["Wallet Factory",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-factory",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["Sequence Wallets are created using the ",e.jsx(s.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/e0c5382636a88b4db4bcf0a70623355d7cd30fb4/contracts/Factory.sol",children:"Factory"})," contract, when called it creates child ",e.jsx(s.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/e0c5382636a88b4db4bcf0a70623355d7cd30fb4/contracts/Wallet.sol",children:"MinimalUpgradeableProxies"}),' contracts, which are in essence the "boot" code of all Sequence wallets.']}),`
`,e.jsxs(s.h2,{id:"factory-api",children:["Factory API",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#factory-api",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"deploy",children:["deploy",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deploy"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _mainModule,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _salt"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" payable"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _contract)"})]})]})}),`
`,e.jsxs(s.p,{children:["Creates a child MinimalUpgradeableProxy using ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-1014",children:"CREATE2"}),", the proxy initially points to the provided ",e.jsx(s.code,{children:"_mainModule"}),`.
No initialize code is executed.`]}),`
`,e.jsxs(s.h4,{id:"parameters",children:["Parameters:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_mainModule"}),e.jsx(s.td,{children:"address"}),e.jsx(s.td,{children:"Initial implementation for the new proxy contract, expected to point to a valid Sequence wallet implementation with support for counter-factual initialization."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_salt"}),e.jsx(s.td,{children:"bytes32"}),e.jsxs(s.td,{children:["Arbitrary value to be used as ",e.jsx(s.code,{children:"create2"})," salt. Sequence's ",e.jsx(s.code,{children:"mainModule"})," uses the salt to obtain a hash with the initial configuration for the wallet (See ",e.jsx(s.a,{href:"#",children:"ImageHash"}),")."]})]})]})]}),`
`,e.jsxs(s.h4,{id:"return-values",children:["Return Values:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#return-values",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_contract"}),e.jsx(s.td,{children:"address"}),e.jsx(s.td,{children:"Address of the created proxy contract."})]})})]}),`
`,e.jsxs(n,{type:"warning",children:[e.jsxs(s.p,{children:["Unsanitized input ",e.jsx("br",{}),`
The Factory contract `,e.jsx(s.strong,{children:"does not"})," check if the provided ",e.jsx(s.code,{children:"_mainModule"})," is a valid Sequence wallet implementation, or if ",e.jsx(s.code,{children:"_salt"})," is a valid Sequence configuration."]}),e.jsxs(s.p,{children:["Using invalid parameters will result on a proxy contract that ",e.jsx(s.strong,{children:"may not"})," be usable, and could result in loss of funds."]})]}),`
`,e.jsxs(s.h2,{id:"counter-factual-addresses",children:["Counter factual addresses",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#counter-factual-addresses",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Sequence wallets are counter-factual by design, this means that the wallet's address can be known before the wallet is deployed; any two combinations of the ",e.jsx(s.code,{children:"mainModule"})," and ",e.jsx(s.code,{children:"salt"})," values will result in the same wallet address."]}),`
`,e.jsxs(s.p,{children:["This property alongside the use of ",e.jsx(s.a,{href:"/solutions/technical-references/internals/v1/deploy#1---deploy-nanouniversaldeployer",children:"NanoUniversalDeployer"})," or ",e.jsx(s.a,{href:"/solutions/technical-references/internals/v1/deploy#2---deploy-universaldeployer2",children:"UniversalDeployer"})," is the reason why Sequence wallets can obtain the same address on multiple chains."]}),`
`,e.jsx(n,{type:"tip",children:e.jsxs(s.p,{children:["Gas-free wallet creation ",e.jsx("br",{})," Sequence wallets are ",e.jsx(s.strong,{children:"100% counterfactual"}),`,
meaning that funds can be safely transferred to the wallet's address without
the need for calling the `,e.jsx(s.code,{children:"deploy"}),` function. Deploying the wallet is only
required before the first transaction is sent `,e.jsx(s.strong,{children:"from"})," the wallet."]})})]})}function c(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{c as default,d as frontmatter};
