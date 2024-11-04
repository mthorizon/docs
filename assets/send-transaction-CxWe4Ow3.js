import{d as a,j as s}from"./index-vcOrv3uy.js";const l={title:"Sending Transactions with Signed Payloads",description:"Send transactions using a Sequence wallet."};function i(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"sending-transactions",children:["Sending Transactions",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sending-transactions",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(n.p,{children:[`Signing a transaction will only retrieve the signed payload.
If you want the wallet to actually dispatch the transaction to the network as well, that requires only a small modification to the previous example (note the change from `,s.jsx(n.code,{children:"signTransactions"})," to ",s.jsx(n.code,{children:"sendTransaction"}),"):"]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transaction"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: recipientAddress,"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  value: "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000000000000000000"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txnResponse"}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transaction)"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txnResponse)"})]})]})})]})}function t(e={}){const{wrapper:n}={...a(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{t as default,l as frontmatter};
