import{d as a,j as e,e as i}from"./index-B13TNFk0.js";/* empty css                                */const o={title:"Sequence Wallets Transaction Encoding Format and Features",description:"The content discusses the custom transaction encoding format used by Sequence Wallets to bundle multiple transactions into a single transaction."};function n(t){const s={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"transaction-encoding",children:["Transaction Encoding",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-encoding",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:`Sequence Wallets use a custom transaction encoding format to bundle multiple transactions into a single transaction. This is done to reduce the number of transactions required to interact with the wallet.
This format also enables support for other features such as reverting the entire transaction bundle if any of the transactions fail.`}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  struct"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Transaction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bool"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" delegateCall;   "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Performs delegatecall"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bool"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" revertOnError;  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Reverts transaction bundle if tx fails"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasLimit;    "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Maximum gas to be forwarded"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" target;      "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Address of the contract to call"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" value;       "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Amount of ETH to pass with the call"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data;          "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// calldata to pass"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})})]})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Transaction"})," struct is used to encode the transaction data for the wallet. It is used in the ",e.jsx(s.code,{children:"execute"})," function of the wallet contract."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"delegateCall"})," field is used to determine if the transaction should be executed using ",e.jsx(s.code,{children:"delegatecall"})," instead of a regular ",e.jsx(s.code,{children:"call"}),`.
This is useful when the target contract offers functionality that should be executed in the context of the wallet.`]}),`
`,e.jsx(i,{type:"warning",children:e.jsx(s.p,{children:"As delegate call executes the target contract in the context of the wallet, it is important to ensure that the target contract is trusted and does not have any malicious code."})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"revertOnError"}),` field is used to determine if the entire transaction bundle should be reverted if any of the transactions fail.
When bundling multiple independent transactions, it may be advantageous to revert the entire bundle if any given transaction fails.`]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"gasLimit"})," field is used to specify the maximum amount of gas that should be forwarded to the target contract."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"target"})," field is the address of the contract to call."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"value"})," field is the amount of ETH to pass with the call. This ETH is sent from the wallet contract to the target contract."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"data"})," field is the calldata to pass to the target contract."]})]})}function c(t={}){const{wrapper:s}={...a(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{c as default,o as frontmatter};
