import{d as l,j as s}from"./index-BBCFkoVo.js";const r={title:"Efficient ERC-1155 Collectible Token Transfers with Batching",description:"This code snippet demonstrates how to send ERC-1155 collectible tokens using ethers.js. It showcases the process of encoding the transfer, creating transactions, and sending them individually or in a batch."};function i(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"sending-erc-1155-collectible-tokens",children:["Sending ERC-1155 (Collectible) Tokens",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sending-erc-1155-collectible-tokens",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:`Sending an ERC-1155 collectible is similar to sending an ERC-20 token.
The only notable difference is in the contract standard itself:`}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc1155Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Encode the transfer of the collectible to recipient"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" address"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getAddress"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc1155Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'safeTransferFrom'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [address, recipientAddress, tokenId, amount, "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: erc1155TokenAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txnResponse"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transaction)"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txnResponse)"})]})]})}),`
`,s.jsx(n.p,{children:"With batching functionality, you can send multiple token transfers in a single native transaction:"}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc1155Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Encode two different ERC-1155 token transfers"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data1"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc1155Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'safeTransferFrom'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [address, recipient1Address, token1Id, amount1, "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" data2"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc1155Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'safeTransferFrom'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [address, recipient2Address, token2Id, amount2, "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction1"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: erc1155ContractAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: data1"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction2"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: erc1155ContractAddress,"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: data2"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Send a multiple transactions as a single bundle which is executed as one transaction on-chain."})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txnResponse"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransactionBatch"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([transaction1, transaction2])"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txnResponse)"})]})]})})]})}function c(e={}){const{wrapper:n}={...l(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{c as default,r as frontmatter};
