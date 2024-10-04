import{d as a,j as e}from"./index-CnQxKtzN.js";const r={title:"Unity Contract Deployment with WaaSWallet - A Step-by-Step Guide",description:"Contract deployment from Unity or a Made-With-Unity application can be achieved by sending a transaction asynchronously using WaaSWallet.DeployContract."};function o(t){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"contract-deployment",children:["Contract Deployment",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-deployment",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["While, in general, we would recommend deploying your smart contracts via the ",e.jsx(n.a,{href:"https://sequence.build/",children:"Builder"}),", we recognize that there are some use cases where deploying a smart contract from Unity (or a Made-With-Unity application) is useful."]}),`
`,e.jsxs(n.p,{children:["Contract deployment involves sending a transaction, which is done via an ",e.jsx(n.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",e.jsx(n.code,{children:"await"})," when calling ",e.jsx(n.code,{children:"SequenceWallet.DeployContract"})," from within an async Task if you wish to obtain the ",e.jsx(n.code,{children:"ContractDeploymentReturn"})," object directly. Or, you can take the recommended approach which is to setup handler functions for the ",e.jsx(n.code,{children:"SequenceWallet.OnDeployContractComplete"})," and ",e.jsx(n.code,{children:"SequenceWallet.OnDeployContractFailed"})," events and call the ",e.jsx(n.code,{children:"SequenceWallet.DeployContract"})," method from anywhere (without await)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SequenceWallet.DeployContract"})," is essentially a wrapper for a very special ",e.jsx(n.code,{children:"SequenceWallet.SendTransaction"})," call and therefore, you can expect to still receive the ",e.jsx(n.code,{children:"SequenceWallet.OnSendTransactionComplete"})," or ",e.jsx(n.code,{children:"SequenceWallet.OnSendTransactionFailed"})," events in addition."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`public void OnDeployContractCompleteHandler(SuccessfulContractDeploymentReturn result) {
    Address newlyDeployedContractAddress = result.DeployedContractAddress;

    // Do something
}

public void OnDeployContractFailedHandler(FailedContractDeploymentReturn result) {
    // Do something
}

public void OnWalletCreatedHander(SequenceWallet wallet) {
    wallet.OnDeployContractComplete += OnDeployContractCompleteHandler;
    wallet.OnDeployContractFailed += OnDeployContractFailedHandler;
}
`})}),`
`,e.jsxs(n.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",e.jsx(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),`
`,e.jsxs(n.p,{children:["To deploy a contract you'll need to first ",e.jsx(n.a,{href:"https://medium.com/coinmonks/compiling-the-smart-contracts-8dcda8071638",children:"compile your smart contract code into bytecode"})," and add the bytecode as a hexadecimal string in one of your C# scripts."]}),`
`,e.jsx(n.p,{children:"To deploy a smart contract, you can use this code snippet:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string bytecode = "Here you'll paste your compiled bytecode"
_wallet.DeployContract(Chain.Polygon, bytecode);
`})})]})}function l(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default,r as frontmatter};
