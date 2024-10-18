import{d as i,j as e,e as r}from"./index-Daxqvjsd.js";/* empty css                                */const l={title:"Sequence Transaction Manager Implementation Guide",description:"The Sequence Transaction Manager simplifies dispatching transactions on Ethereum-compatible networks for games and apps, scaling to millions of users."};function a(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"transaction-manager",children:["Transaction Manager",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-manager",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"The Sequence Transaction Manager leverages the Transaction API for dispatching transactions on Ethereum-compatible networks to service your game or app and scale to millions of users that brings an enormous amount of benefits such as:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Gas abstraction -- whereby users can pay for network gas in a variety of tokens (ie. USDC, DAI, etc.)"}),`
`,e.jsx(s.li,{children:"Sponsored gas -- projects may sponsor the gas of specific contracts to allow free gas for their users"}),`
`,e.jsx(s.li,{children:"Batched transactions -- group a bunch of independent transactions and allow them to be mined as a single transaction"}),`
`,e.jsx(s.li,{children:"Parallel transactions -- parallelize the dispatch of transactions in some cases"}),`
`,e.jsx(s.li,{children:"Fire + forget model -- easily send transactions to the transactions api which will automatically manage nonces, bump gas, and other features which will ensure fast delivery"}),`
`,e.jsx(s.li,{children:"Optimal gas pricing for transactions -- will be attempted once and if not included from the mempool within 3 blocks, the transaction will be resubmitted"}),`
`]}),`
`,e.jsx(s.p,{children:"A Sequence wallet is instantiated with a signer that can be any account such as an EOA. This wallet would then be utilized from your backend where you could could grant certain access control rights on your smart contracts such as minting tokens. Notably, this can be used for any blockchain transaction."}),`
`,e.jsxs(s.p,{children:["The only difference with respect to deployed EVM contracts: transactions with a Sequence Transaction Manager will have the ",e.jsx(s.code,{children:"msg.sender"})," as the Sequence Wallet address so it's important that proper permissions are granted to call the corresponding functions. In addition, ",e.jsx(s.code,{children:"tx.origin"})," will be one of the Relayer addresses, which can be seen in any one of the status pages: for example ",e.jsx(s.a,{href:"https://mainnet-relayer.sequence.app/status",children:"here on mainnet"})," with the ",e.jsx(s.code,{children:"senders"})," array."]}),`
`,e.jsxs(s.h2,{id:"nft-minter-quickstart",children:["NFT Minter Quickstart",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nft-minter-quickstart",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"One of the most popular implementations is a minting service for creating and minting NFTs to your players from your backend, which massively reduces user friction. Below is a setup guide to run this code locally as a minter service with example contracts, which can be deployable to any infrastructure callable from your own application."}),`
`,e.jsxs(s.div,{"data-vocs-steps":"true",children:[e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"clone-the-boilerplate-and-install",children:["Clone the boilerplate and install:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-the-boilerplate-and-install",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sequence-cli"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" boilerplates"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-server-side-transactions"})]})})})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"fire-a-request-to-mint-an-nft-to-a-wallet",children:["Fire a request to mint an NFT to a wallet:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fire-a-request-to-mint-an-nft-to-a-wallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" http://localhost:3001/mint"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-H "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Content-Type: application/json"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-d "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:`'{"walletAddress": "0x0365e0BcAd6D799b732ADB9673cB4C43688Bb450"}'`})]})]})})]})]}),`
`,e.jsxs(s.h2,{id:"run-on-your-own-local-server",children:["Run on your own local server",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-on-your-own-local-server",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To run your own transaction manager with your contract address and wallet, you can walk through the steps below to launches an express application, listening on port ",e.jsx(s.code,{children:"3001"}),":"]}),`
`,e.jsxs(s.div,{"data-vocs-steps":"true",children:[e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"sequence-builder-project-management",children:["Sequence Builder Project Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-builder-project-management",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Create a project using this ",e.jsx(s.a,{href:"/solutions/builder/getting-started",children:"walkthrough"}),"."]}),e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"/solutions/technical-references/chain-support",children:"Chain Support"})," for available networks."]})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"access-key-management",children:["Access Key Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#access-key-management",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Obtain a Project Access Key using this ",e.jsx(s.a,{href:"/solutions/builder/getting-started#claim-an-api-access-key",children:"walkthrough"}),"."]})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"generate-private-key-for-transactions-api",children:["Generate Private Key for Transactions API",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generate-private-key-for-transactions-api",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Generate an Ethereum private key as an Externally Owned Account (EOA) that is passed as a Single Signer to a Sequence Wallet to relay transactions. For demo purposes you can obtain a private key from ",e.jsx(s.a,{href:"https://sequence-ethauthproof-viewer.vercel.app/",children:"here"}),"."]})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"deploy-an-erc1155-contract",children:["Deploy an ERC1155 Contract",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-an-erc1155-contract",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Deploy a collectible contract by following this ",e.jsx(s.a,{href:"/solutions/collectibles/contracts/deploy-an-item-collection",children:"walkthrough"}),"."]}),e.jsx(s.p,{children:"This contract address can be replaced in the following code."})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"set-a-minter-role-on-the-contract",children:["Set a ",e.jsx(s.code,{children:"Minter Role"})," on the Contract",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-a-minter-role-on-the-contract",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:[`Go to the Contracts page and select your deployed contract, then click the settings button to adjust permissions.
`,e.jsx(s.img,{src:"/img/builder/builder_contract_specific_settings.png",alt:"contract settings"})]}),e.jsxs(s.p,{children:["Once you have the modal open, select the ",e.jsx(s.code,{children:"Permissions"})," tab and you can ",e.jsx(s.code,{children:"Edit"}),", or, ",e.jsx(s.code,{children:"+ Add Collaborator"}),"."]}),e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/builder/builder_contract_specific_permissions.png",alt:"add collaborator"})}),e.jsxs(s.p,{children:["Then input your created address to add as a collaborator and select the dropdown to assign the ",e.jsx(s.code,{children:"Minter"})," role."]})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"clone-and-run-the-boilerplate",children:["Clone and run the boilerplate",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-and-run-the-boilerplate",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Clone the boilerplate by running the below command from your terminal and input your EVM private key for the address above as well as your ",e.jsx(s.code,{children:"PROJECT_ACCESS_KEY"})," when prompted."]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sequence-cli"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" boilerplates"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-server-side-transactions"})]})})}),e.jsxs(s.p,{children:["Lastly, update the ",e.jsx(s.code,{children:"contractAddress"})," constant in the ",e.jsx(s.code,{children:"index.ts"})," file with your deployed contract address and run the repository via ",e.jsx(s.code,{children:"pnpm start"}),"."]})]}),e.jsxs(s.div,{"data-depth":"4",children:[e.jsxs(s.h4,{id:"perform-mint-transaction",children:["Perform Mint Transaction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#perform-mint-transaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.p,{children:"Using a command line interface, call using cURL to mint to a wallet address:"}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" http://localhost:3001/mint"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-H "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Content-Type: application/json"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"-d "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:`'{"walletAddress": "0x0365e0BcAd6D799b732ADB9673cB4C43688Bb450"}'`})]})]})}),e.jsx(s.p,{children:"Input an your desired wallet address you would like to mint to and fire the request!"}),e.jsxs(s.p,{children:["You should receive a response with a ",e.jsx(s.code,{children:"txHash"}),":"]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'"txHash"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'"<TX_HASH>"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"}"})]})})}),e.jsx(r,{type:"info",children:e.jsx(s.p,{children:"The Transaction Manager boilerplate will accept requests from all origins."})})]})]}),`
`,e.jsxs(s.p,{children:["You can view the source code of the ",e.jsx(s.a,{href:"https://github.com/0xsequence-demos/server-side-transactions-boilerplate",children:"boilerplate"})," using the Transactions API by extending the codebase. For example: to incorporate batch transactions, offer ERC20 airdrops, and more."]}),`
`,e.jsxs(s.h2,{id:"gas-sponsorship",children:["Gas Sponsorship",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-sponsorship",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["On testnet, we sponsor all the transactions. However, on mainnet - you will want to ensure that you sponsor the transactions in order to ensure that they process correctly by sponsoring the contract itself. You can take a deeper look at our ",e.jsx(s.a,{href:"/solutions/builder/gas-tank",children:"Gas Sponsorship"})," solution to learn how to do this."]})]})}function c(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,l as frontmatter};
