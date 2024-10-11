import{d as o,j as e,e as r}from"./index-QLc1r4kk.js";/* empty css                                */const l={title:"Deploy Process V1 for Sequence Wallet Context on New Network",description:"The content provides a detailed guide for deploying the Sequence Wallet V1 Context on a new network. It includes steps to deploy NanoUniversalDeployer and UniversalDeployer2 contracts, along with necessary code snippets and pre-signed transactions."};function s(t){const n={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"deploy-process-v1",children:["Deploy Process V1",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-process-v1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The following steps are required to deploy the ",e.jsx(n.a,{href:"/solutions/technical-references/internals/v1/deploy",children:"Sequence Wallet V1 Context"})," on a new network."]}),`
`,e.jsx(r,{type:"info",children:e.jsxs(n.p,{children:["Notice ",e.jsx("br",{}),`
For most popular networks this process `,e.jsx(n.strong,{children:"is not"}),` required; due to the wallet contracts
being already deployed. To see if a configuration already exists for a given chain
go to `,e.jsx(n.a,{href:"/solutions/technical-references/chain-support",children:"Networks"}),"."]})}),`
`,e.jsxs(n.p,{children:["A complete code example of this deployment flow can be found in the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),`
and `,e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),"."]}),`
`,e.jsxs(n.h3,{id:"1---deploy-nanouniversaldeployer",children:["1 - Deploy NanoUniversalDeployer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1---deploy-nanouniversaldeployer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Pre-found Nick's method address with funds required to pay for the deployment of contracts."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Address: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB
Funds: 0.02170000000014
`})}),`
`,e.jsx(n.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."}),`
`,e.jsx(n.p,{children:"Once the address is funded, you can deploy the NanoUniversalDeployer by executing the following pre-signed transaction:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`0xf9010880852416b84e01830222e08080b8b66080604052348015600f57600080fd5b50609980601d6000396000f3fe60a06020601f369081018290049091028201604052608081815260009260609284918190838280828437600092018290525084519495509392505060208401905034f5604080516001600160a01b0383168152905191935081900360200190a0505000fea26469706673582212205a310755225e3c740b2f013fb6343f4c205e7141fcdf15947f5f0e0e818727fb64736f6c634300060a00331ca01820182018201820182018201820182018201820182018201820182018201820a01820182018201820182018201820182018201820182018201820182018201820
`})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the NanoUniversalDeployer:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`NanoUniversalDeployer: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB
`})}),`
`,e.jsxs(n.p,{children:["See more about the ",e.jsx(n.a,{href:"https://gist.github.com/Agusx1211/de05dabf918d448d315aa018e2572031",children:"NanoUniversalDeployer"}),"."]}),`
`,e.jsxs(n.h3,{id:"2---deploy-universaldeployer2",children:["2 - Deploy UniversalDeployer2",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2---deploy-universaldeployer2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`In order to deploy contracts with an instance identifier, we need to deploy the UniversalDeployer2 contract. To ensure address consistency
we use the UniversalDeployer contract to deploy the UniversalDeployer contract.`}),`
`,e.jsx(n.p,{children:"Send the following data to the UniversalDeployer deployed in the previous step."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`0x608060405234801561001057600080fd5b5061013d806100206000396000f3fe60806040526004361061001e5760003560e01c80639c4ae2d014610023575b600080fd5b6100cb6004803603604081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506100cd915050565b005b60008183516020850134f56040805173ffffffffffffffffffffffffffffffffffffffff83168152905191925081900360200190a050505056fea264697066735822122033609f614f03931b92d88c309d698449bb77efcd517328d341fa4f923c5d8c7964736f6c63430007060033
`})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the UniversalDeployer2:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`UniversalDeployer2: 0x8a5bc19e22d6ad55a2c763b93a75d09f321fe764
`})}),`
`,e.jsxs(n.h3,{id:"3---deploy-wallet-context",children:["3 - Deploy Wallet Context",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3---deploy-wallet-context",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Compile and deploy the contracts in the ",e.jsx(n.a,{href:"/solutions/technical-references/internals/v1/deploy",children:"Sequence Wallet Context"})," using the UniversalDeployer2."]}),`
`,e.jsxs(n.p,{children:["Refer to the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),`
or `,e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),`
for the Wallet Contract context codebase.`]})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default,l as frontmatter};
