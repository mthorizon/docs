import{d as a,j as e,e as n}from"./index-BPoHCL_o.js";/* empty css                                */import{T as l}from"./index-DSVd_dXp.js";const c={title:"Creating a Primary Sales with Sequence Embedded Wallet Integration",description:"This guide covers the creation of a Primary Sales of Sequence. It includes steps for create sales contract, create nft contract, create collection, wallet authentication, purchase and mint."};function r(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"sell-your-game-items-via-a-web-shop",children:["Sell your Game Items via a Web Shop",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sell-your-game-items-via-a-web-shop",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Accelerate your game growth by selling items directly to your players. In this guide, we will go over the steps how to deploy a Primary Sale contract using any custom or existing currency for a webshop that utilizes game items from a ERC1155 contract. We will use the following technologies from the Sequence platform:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/solutions/collectibles/contracts/deploy-primary-sales-contract",children:"Primary Sales Contract"}),": How to set up and deploy contracts for launching a primary sale — suitable for an Web Shop, NFT Drop, and more."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"Embedded Wallet"}),": Use Sequence Kit and Sequence Embedded Wallet to authenticate a user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"solutions/builder/indexer",children:"Sequence Indexer"}),": Leveraging the Sequence Indexer to query NFT metadata and user's wallet assets."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/solutions/builder/collections",children:"Sequence Metadata"}),": Updating and managing a collection or token's metadata via the Sequence Builder UI and API."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"clone-the-primary-sales-for-game-items-boilerplate",children:["Clone the Primary Sales for Game Items boilerplate",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-the-primary-sales-for-game-items-boilerplate",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(l,{labels:["Sequence CLI","Github","Github Template"],children:[e.jsxs("div",{className:"tabbed-content__content",children:[e.jsxs(s.h4,{id:"you-can-easily-clone-the-primary-sales-repository-using-the-sequence-cli",children:["You can easily clone the Primary Sales repository using the ",e.jsx(s.a,{href:"https://github.com/0xsequence/sequence-cli/",children:"Sequence CLI"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#you-can-easily-clone-the-primary-sales-repository-using-the-sequence-cli",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sequence-cli"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" boilerplates"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-primary-drop-sale-starter"})]})})})]}),e.jsxs("div",{className:"tabbed-content__content",children:[e.jsxs(s.h4,{id:"you-can-clone-primary-sales-repository-from-github",children:["You can clone Primary Sales Repository from Github",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#you-can-clone-primary-sales-repository-from-github",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/0xsequence/primary-drop-sale-1155-boilerplate.git"})]})})}),e.jsx("br",{}),e.jsx(s.p,{children:"Then install and run:"}),e.jsx("br",{}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dev"})]})})}),e.jsx("br",{}),e.jsxs(s.p,{children:["After you install the dependencies, ",e.jsx(s.code,{children:".env.example"})," will be automatically copied to ",e.jsx(s.code,{children:".env"}),", so you can test things out with pre-provided keys."]}),e.jsx("br",{}),e.jsxs(s.p,{children:["When you're ready, replace the contents of ",e.jsx(s.code,{children:".env"})," with your project's information."]})]}),e.jsxs("div",{className:"tabbed-content__content",children:[e.jsxs(s.h4,{id:"you-can-use-the-primary-sales-repository-template-from-github",children:["You can use the Primary Sales Repository Template from Github",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#you-can-use-the-primary-sales-repository-template-from-github",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Go to ",e.jsx(s.a,{href:"https://github.com/0xsequence/primary-drop-sale-1155-boilerplate",children:"https://github.com/0xsequence/primary-drop-sale-1155-boilerplate"}),' and click "Use this Template" in the top right corner.']}),e.jsx("br",{}),e.jsx(s.p,{children:"Clone your newly made repo."}),e.jsx("br",{}),e.jsx(s.p,{children:"Then install and run:"}),e.jsx("br",{}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dev"})]})})}),e.jsx("br",{}),e.jsxs(s.p,{children:["After you install the dependencies, ",e.jsx(s.code,{children:".env.example"})," will be automatically copied to ",e.jsx(s.code,{children:".env"}),", so you can test things out with pre-provided keys."]}),e.jsx("br",{}),e.jsxs(s.p,{children:["When you're ready, replace the contents of ",e.jsx(s.code,{children:".env"})," with your project's information."]})]})]}),`
`,e.jsxs(s.h2,{id:"configure-your-own-primary-sales-contracts-in-the-repository",children:["Configure your own Primary Sales Contracts in the repository",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-your-own-primary-sales-contracts-in-the-repository",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We provide a few example contracts and variables in order to get you started. However, you will likely want to use your own contracts. In order to configure this simply following the steps below:"}),`
`,e.jsxs(s.div,{"data-vocs-steps":"true",children:[e.jsxs(s.div,{"data-depth":"3",children:[e.jsxs(s.h3,{id:"deploy-a-primary-sales-contract-in-sequence-builder",children:["Deploy a Primary Sales Contract in Sequence Builder.",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-a-primary-sales-contract-in-sequence-builder",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["We first need a Primary Sales Contract along with an ERC1155 contract that will contain our game items we want to sell. To do that, please follow the ",e.jsx(s.a,{href:"/solutions/collectibles/contracts/deploy-primary-sales-contract",children:"guide"})," here."]})]}),e.jsxs(s.div,{"data-depth":"3",children:[e.jsxs(s.h3,{id:"set-the-sales-configurations-for-the-project",children:["Set the Sales Configurations for the project.",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-the-sales-configurations-for-the-project",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["Once we have our sales contract deployed, we'll simply update the sales configuration on the boilerplate. Go to ",e.jsx(s.code,{children:"src/salesConfigs.ts"})," and modify the salesConfigs variable by adding each contract sale in an array for your project with the networks you want to support. Example:"]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" salesConfigs"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SaleConfiguration"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    nftTokenAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x888a322db4b8033bac3ff84412738c096f87f9d0"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    salesContractAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0327b2f274e04d292e74a06809bcd687c63a4ba4"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"80002"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//polygonAmoy"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Modify here to show different items"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    itemsForSale: ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    nftTokenAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xd4bb59d0ba1f7b2beea4c6d9b9f151ee1da02665"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    salesContractAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x326d2fbe4808dd2a3e205aecc5e25a6322ad0a81"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"421614"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//arbitrumSepolia,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Modify here to show different items"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    itemsForSale: ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"];"})})]})}),e.jsx(n,{type:"info",children:e.jsxs(s.p,{children:["You can see all the available chains currently supported by sequence ",e.jsx("a",{href:"/solutions/technical-references/chain-support",target:"_blank",rel:"noopener noreferrer",style:{fontWeight:700},children:"here"}),"."]})})]}),e.jsxs(s.div,{"data-depth":"3",children:[e.jsxs(s.h3,{id:"set-a-default-chainid-for-the-project",children:["Set a default chainId for the project.",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-a-default-chainid-for-the-project",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsxs(s.p,{children:["To set the default chainId, go to ",e.jsx(s.code,{children:"src/salesConfigs.ts"})," and modify the defaultChainId variable with the chainId you want to display by default in the project. It must match a chainId present in your salesConfigs variable. For example:"]}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// In this case, the chosen `defaultChainId` is 80002 (amoy), which is present in the previously declared `salesConfigs` variable."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" defaultChainId"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 80002"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})]})})]}),e.jsxs(s.div,{"data-depth":"3",children:[e.jsxs(s.h3,{id:"done",children:["Done!",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#done",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.p,{children:"Your primary sales should now appear and function correctly from this point onward. In order to make a purchase, ensure you have the corresponding token that you set as a currency for the sale in your wallet, increment the amount, and click purchase!"})]})]})]})}function h(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default,c as frontmatter};
