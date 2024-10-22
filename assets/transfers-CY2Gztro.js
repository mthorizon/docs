import{d as i,j as s}from"./index-Ky-3L1R4.js";const t={title:"Creating ETH Transfer Transactions with TransferEth",description:"Learn how to to transfer ETH in Unity using TransferEth.CreateTransaction."};function n(e){const r={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...i(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r.header,{children:s.jsxs(r.h1,{id:"transfers",children:["Transfers",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transfers",children:s.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(r.p,{children:["In order to transfer ETH (or the gas currency for your network), it is recommended to use ",s.jsx(r.code,{children:"TranferEth.CreateTransaction"})]}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EthTransaction"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" transferTransaction"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TransferEth."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"CreateTransaction"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, wallet, recipientAddress, DecimalNormalizer."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Normalize"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"));"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TransactionReceipt"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" receipt"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendTransactionAndWaitForReceipt"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, transferTransaction);"})]})]})}),`
`,s.jsxs(r.p,{children:["Behind the scenes, this will create a ",s.jsx(r.code,{children:"GasLimitEstimator"})," which will construct the transaction for you - including determining the appropriate gasPrice, gasLimit, and nonce."]})]})}function c(e={}){const{wrapper:r}={...i(),...e.components};return r?s.jsx(r,{...e,children:s.jsx(n,{...e})}):n(e)}export{c as default,t as frontmatter};
