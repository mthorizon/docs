import{d as r,j as s}from"./index-Chit18G8.js";const l={title:"Sequence - Web3 Gaming Platform - Universal Wallet Batch Transactions",description:"Documentation for Universal Wallet Batch Transactions for the Sequence infrastructure stack for web3 gaming."};function i(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"sending-a-batch-of-transactions",children:["Sending a Batch of Transactions",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sending-a-batch-of-transactions",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:"Likewise, bundling multiple transactions to be sent in a single native transaction is equally as easy:"}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction1"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: recipient1Address,"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  value: "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000000000000000000"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction2"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: recipient2Address,"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  value: "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000000000000000000"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" response"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([transaction1, transaction2])"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(response)"})]})]})}),`
`,s.jsx(n.p,{children:`The transactions don't have to be the same token or even token standard either.
You can mix and match:`}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function transfer(address _to, uint256 _value)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc721Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc1155Interface"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Data"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'transfer'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [recipient2Address, amount2]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc721Data"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc721Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'safeTransferFrom'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [address, recipient3Address, amount3]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc1155Data"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc1155Interface."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'safeTransferFrom'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", [address, recipient4Address, token4Id, amount4, "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transactions"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { to: recipient1Address, value: "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'1000000000000000000'"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { to: daiContractAddress, data: erc20Data },"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { to: erc721ContractAddress, data: erc721Data },"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { to: erc1155ContractAddress, data: erc1155Data }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" response"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transactions)"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(response)"})]})]})})]})}function c(e={}){const{wrapper:n}={...r(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{c as default,l as frontmatter};
