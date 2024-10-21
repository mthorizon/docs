import{d as a,j as e}from"./index-91LSPTZq.js";const r={title:"Unity Contract Deployment with WaaSWallet - A Step-by-Step Guide",description:"Contract deployment from Unity or a Made-With-Unity application can be achieved by sending a transaction asynchronously using WaaSWallet.DeployContract."};function l(n){const s={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"contract-deployment",children:["Contract Deployment",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-deployment",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["While, in general, we would recommend deploying your smart contracts via the ",e.jsx(s.a,{href:"https://sequence.build/",children:"Builder"}),", we recognize that there are some use cases where deploying a smart contract from Unity (or a Made-With-Unity application) is useful."]}),`
`,e.jsxs(s.p,{children:["Contract deployment involves sending a transaction, which is done via an ",e.jsx(s.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",e.jsx(s.code,{children:"await"})," when calling ",e.jsx(s.code,{children:"SequenceWallet.DeployContract"})," from within an async Task if you wish to obtain the ",e.jsx(s.code,{children:"ContractDeploymentReturn"})," object directly. Or, you can take the recommended approach which is to setup handler functions for the ",e.jsx(s.code,{children:"SequenceWallet.OnDeployContractComplete"})," and ",e.jsx(s.code,{children:"SequenceWallet.OnDeployContractFailed"})," events and call the ",e.jsx(s.code,{children:"SequenceWallet.DeployContract"})," method from anywhere (without await)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"SequenceWallet.DeployContract"})," is essentially a wrapper for a very special ",e.jsx(s.code,{children:"SequenceWallet.SendTransaction"})," call and therefore, you can expect to still receive the ",e.jsx(s.code,{children:"SequenceWallet.OnSendTransactionComplete"})," or ",e.jsx(s.code,{children:"SequenceWallet.OnSendTransactionFailed"})," events in addition."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" void"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" OnDeployContractCompleteHandler"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SuccessfulContractDeploymentReturn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" result"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"    Address"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" newlyDeployedContractAddress"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" result.DeployedContractAddress;"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Do something"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" void"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" OnDeployContractFailedHandler"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FailedContractDeploymentReturn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" result"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Do something"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" void"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" OnWalletCreatedHander"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SequenceWallet"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" wallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    wallet.OnDeployContractComplete "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" OnDeployContractCompleteHandler;"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    wallet.OnDeployContractFailed "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" OnDeployContractFailedHandler;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",e.jsx(s.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),`
`,e.jsxs(s.p,{children:["To deploy a contract you'll need to first ",e.jsx(s.a,{href:"https://medium.com/coinmonks/compiling-the-smart-contracts-8dcda8071638",children:"compile your smart contract code into bytecode"})," and add the bytecode as a hexadecimal string in one of your C# scripts."]}),`
`,e.jsx(s.p,{children:"To deploy a smart contract, you can use this code snippet:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" bytecode"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:` "Here you'll paste your compiled bytecode"`})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"_wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"DeployContract"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Chain.Polygon, bytecode);"})]})]})})]})}function t(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{t as default,r as frontmatter};