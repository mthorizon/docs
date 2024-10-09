import{d as r,j as e,e as s}from"./index-BKlCwAJ7.js";/* empty css                                */const c={title:"Sequence Wallet Context Deployment Process V2",description:"The content provides a detailed guide on deploying the Sequence Wallet Context on a new network."};function o(t){const n={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"deploy-process-v2",children:["Deploy Process V2",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-process-v2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The following steps are required to deploy the ",e.jsx(n.a,{href:"/solutions/technical-references/internals/v2/deploy",children:"Sequence Wallet Context"})," on a new network."]}),`
`,e.jsx(s,{type:"info",children:e.jsxs(n.p,{children:["Notice ",e.jsx("br",{}),`
For most popular networks this process `,e.jsx(n.strong,{children:"is not"}),` required; due to the wallet contracts
being already deployed.
To see if a configuration already exists for a given chain go to `,e.jsx(n.a,{href:"/solutions/technical-references/chain-support",children:"Networks"}),"."]})}),`
`,e.jsxs(n.h3,{id:"1---deploy-singleton-factory",children:["1 - Deploy Singleton Factory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1---deploy-singleton-factory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The Singleton Factory is a contract that allows the deployment of a single contract instance per address. Unlike the
`,e.jsx(n.a,{href:"#universal-deployer",children:"Universal Deployer"}),`, the Singleton Factory requires a salt to manage deployment instances. More information about the
Singleton Factory can be found in the `,e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2470",children:"EIP-2470 specification"}),"."]}),`
`,e.jsx(n.p,{children:"The Pre-fund the Singleton Factory's deployer with the required funds to deploy the contract."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Address: 0xBb6e024b9cFFACB947A71991E386681B1Cd1477D
Funds: 0.0247
`})}),`
`,e.jsx(n.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."}),`
`,e.jsx(n.p,{children:"Once the address is funded, you can deploy the Singleton Factory by executing the following pre-signed transaction:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470
`})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the Singleton Factory:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Singleton Deployer: 0xce0042B868300000d44A59004Da54A005ffdcf9f
`})}),`
`,e.jsxs(n.h3,{id:"2---deploy-wallet-context",children:["2 - Deploy Wallet Context",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2---deploy-wallet-context",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Deploy each of the contracts in the ",e.jsx(n.a,{href:"/solutions/technical-references/internals/v1/wallet-context",children:"Sequence Wallet Context"})," using the Singleton Factory."]}),`
`,e.jsxs(n.p,{children:["A script can be found in the ",e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/",children:"Sequence Wallet Contracts repository"}),"."]}),`
`,e.jsx(n.p,{children:"Clone the repository, configure the environment variables and run the script with:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`yarn deploy <network>
`})})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default,c as frontmatter};
