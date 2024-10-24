import{d as a,j as s}from"./index-Db4owo0g.js";const r={title:"Sequence - Web3 Gaming Platform - Universal Wallet Send ERC20s",description:"The process of sending ERC20 tokens involves encoding the transfer function with specific parameters like recipient and amount."};function i(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"sending-erc-20-tokens",children:["Sending ERC-20 Tokens",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sending-erc-20-tokens",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:"You can ask the wallet to send a single ERC-20 token transfer:"}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function transfer(address _to, uint256 _value)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Encode an ERC-20 token transfer to recipient of the specified amount"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'transfer'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [recipientAddress, amount]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: daiContractAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txnResponse"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transaction)"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txnResponse)"})]})]})}),`
`,s.jsx(n.p,{children:"With batching functionality, you can send multiple token transfers in a single native transaction:"}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function transfer(address _to, uint256 _value)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Encode two different ERC-20 token transfers"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data1"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'transfer'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [recipient1Address, amount1]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data2"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'transfer'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [recipient2Address, amount2]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction1"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: daiContractAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: data1"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction2"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: daiContractAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: data2"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Send a multiple transactions as a single bundle which is executed as one transaction on-chain."})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txnResponse"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([transaction1, transaction2])"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txnResponse)"})]})]})})]})}function c(e={}){const{wrapper:n}={...a(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{c as default,r as frontmatter};
