import{d as s,j as e,e as i}from"./index-DQBm8zOl.js";/* empty css                                */const c={title:"Sequence Transaction Manager Implementation Guide",description:"The Sequence Transaction Manager simplifies dispatching transactions on Ethereum-compatible networks for games and apps, scaling to millions of users."};function a(r){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"transaction-manager",children:["Transaction Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The Sequence Transaction Manager offers a simple interface for dispatching transactions on Ethereum-compatible networks to service your game or app and scale to millions of users that brings an enormous amount of ",e.jsx(n.a,{href:"/api/transactions/overview#benefits",children:"benefits"}),"."]}),`
`,e.jsx(n.p,{children:"One of the most popular is a minting service for creating and minting NFTs to your players, which massively reduces user friction. Below is a setup guide to run this code locally as a minter service, which can be deployable to any infrastructure callable from your own application."}),`
`,e.jsxs(n.p,{children:["The only difference with respect to deployed EVM contracts: transactions with a Sequence Transaction Manager will have the ",e.jsx(n.code,{children:"msg.sender"})," as one of the Sequence Relayer addresses, which can be seen in any one of the status pages: for example ",e.jsx(n.a,{href:"https://mainnet-relayer.sequence.app/status",children:"here on mainnet"})," with the ",e.jsx(n.code,{children:"senders"})," array."]}),`
`,e.jsxs(n.h2,{id:"quickstart",children:["Quickstart",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quickstart",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.div,{"data-vocs-steps":"true",children:[e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"run-on-your-own-local-server",children:["Run on your own Local Server",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-on-your-own-local-server",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["To spin up a quick boilerplate that leverages the Transaction Manager code, you can run the following command from your terminal to install the Sequence-CLI and create a nodejs app, listening on port ",e.jsx(n.code,{children:"3001"}),":"]}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sequence-cli"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" boilerplates"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-tx-manager"})]})})}),e.jsx(n.p,{children:"Follow the prompts, with the included variables and steps below."})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"sequence-builder-project-management",children:["Sequence Builder Project Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-builder-project-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Create a project using this ",e.jsx(n.a,{href:"/solutions/builder/getting-started",children:"walkthrough"}),"."]}),e.jsxs(n.p,{children:["What network you choose should be passed into the HTTP call for ",e.jsx(n.code,{children:"chainHandle"}),"."]}),e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"/solutions/technical-references/chain-support",children:"Chain Support"})," for available networks."]})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"access-key-management",children:["Access Key Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#access-key-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Obtain a Project Access Key using this ",e.jsx(n.a,{href:"/solutions/builder/getting-started#claim-an-api-access-key",children:"walkthrough"}),"."]}),e.jsxs(n.p,{children:["This should be used for ",e.jsx(n.code,{children:"PROJECT_ACCESS_KEY"}),"."]})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"generate-private-key-for-transactions-api",children:["Generate Private Key for Transactions API",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generate-private-key-for-transactions-api",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Generate an Ethereum private key as an Externally Owned Account (EOA) passed into a Relayer Wallet. For demo purposes you can obtain a private key from ",e.jsx(n.a,{href:"https://sequence-ethauthproof-viewer.vercel.app/",children:"here"}),"."]})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"deploy-an-erc1155-or-erc721-collectible-contract",children:["Deploy an ERC1155 or ERC721 Collectible Contract",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-an-erc1155-or-erc721-collectible-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Deploy a collectible contract by following this ",e.jsx(n.a,{href:"/solutions/collectibles/contracts/deploy-an-item-collection",children:"walkthrough"}),"."]}),e.jsxs(n.p,{children:["This contract should be used for ",e.jsx(n.code,{children:"contractAddress"})," in the ",e.jsx(n.code,{children:"cURL"})," call below, noting to include a ",e.jsx(n.code,{children:"tokenID"})," if it's an ",e.jsx(n.code,{children:"ERC1155"}),"."]})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"set-a-minter-role-on-the-contract",children:["Set a ",e.jsx(n.code,{children:"Minter Role"})," on the Contract",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-a-minter-role-on-the-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Navigate to the ",e.jsx(n.code,{children:"Contracts"})," page in the Sequence Builder and under ",e.jsx(n.code,{children:"Write Contract"})," tab expand the ",e.jsx(n.code,{children:"grantRole"})," method. Complete with the following details:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["bytes32 role: ",e.jsx(n.code,{children:"0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"})]}),`
`,e.jsxs(n.li,{children:["address account: ",e.jsx(n.code,{children:"<Generated Wallet Address from Step 4>"})]}),`
`]})]}),e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"perform-mint-transaction",children:["Perform Mint Transaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#perform-mint-transaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.p,{children:"Using a command line interface, call using cURL to mint to a wallet address:"}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" http://localhost:3001/mint"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-H "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Content-Type: application/json"'}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-d "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:`'{"evmAddress": "<EVM_WALLET_ADDRESS>", "chainHandle":"<CHAIN_HANDLE>","tokenID": "<TOKEN_ID_IF_ERC1155>", "contractAddress":"<COLLECTIBLE_CONTRACT_ADDRESS>", "isERC1155": <true_OR_false>, "amount":<AMOUNT> }'`})]})]})}),e.jsxs(n.p,{children:["Input an ",e.jsx(n.code,{children:"EVM wallet address"}),", ",e.jsx(n.code,{children:"token ID"}),", ",e.jsx(n.code,{children:"chain handle"}),", ",e.jsx(n.code,{children:"collectible contract address"})," (either a Sequence Builder ERC721 or ERC1155), ",e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"})," for ",e.jsx(n.code,{children:"isERC1155"}),", and the ",e.jsx(n.code,{children:"amount"})," of tokens to transfer into the above request and mint!"]}),e.jsxs(n.p,{children:["You should recieve a response with a ",e.jsx(n.code,{children:"txHash"}),":"]}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'"txHash"'}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'"<TX_HASH>"'}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"}"})]})})}),e.jsx(i,{type:"info",children:e.jsx(n.p,{children:"The Transaction Manager boilerplate will accept requests from all origins."})})]})]}),`
`,e.jsxs(n.h2,{id:"boilerplate-source-code",children:["Boilerplate Source Code",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#boilerplate-source-code",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Want to further customize and take your code to production? There's a single step to make this production ready for Web applications:"}),`
`,e.jsxs(n.h3,{id:"restrict-origin-from-a-frontend-code",children:["Restrict Origin from a Frontend Code",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#restrict-origin-from-a-frontend-code",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Update the following line of code from ",e.jsx(n.code,{children:"*"})," to include the ",e.jsx(n.code,{children:"requesting origin domain"})," of the deployed application in the following ",e.jsx(n.a,{href:"https://github.com/0xsequence-demos/tx-manager-boilerplate/blob/master/server/server.ts#L44",children:"line of code."})]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:["Get started quickly with the source code of the ",e.jsx(n.a,{href:"https://github.com/0xsequence-demos/tx-manager-boilerplate",children:"boilerplate"})," using the Transactions API by extending the codebase. For example: to incorporate batch transactions, offer ERC20 airdrops, and more."]})})]})}function d(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{d as default,c as frontmatter};
