import{u as r,j as e}from"./index-lCCJ7Z2n.js";const c={title:"Custom Marketplace",description:"undefined"};function i(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"custom-marketplace",children:["Custom Marketplace",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-marketplace",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"In this guide we will go through the process of creating a custom marketplace from a few simple tools from the Sequence stack."}),`
`,e.jsx(s.p,{children:"The tools will enable you to perform:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/guides/templates/template-marketplace-api#minting",children:"Minting"}),": Minting of tokens to your wallet from the Sequence Builder"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/guides/templates/template-marketplace-api#blockchain-queries",children:"Blockchain Queries"}),": Querying of token balances using the Indexer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/guides/templates/template-marketplace-api#request-creation",children:"Request Creation"}),": Creation of sell listing requests on the Sequence Market Protocol"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/guides/templates/template-marketplace-api#order-accepting",children:"Order Accepting"}),": Accepting of top orders from the Marketplace"]}),`
`]}),`
`,e.jsx(s.p,{children:"All of this in custom javascript code"}),`
`,e.jsxs(s.h2,{id:"minting",children:["Minting",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#minting",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The first step is to create a collectible from the sequence Builder with a few mints, which can be accomplished with this ",e.jsx(s.a,{href:"/solutions/collectibles/contracts/01-deploy-an-item-collection",children:"guide"}),"."]}),`
`,e.jsxs(s.h2,{id:"blockchain-queries",children:["Blockchain Queries",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockchain-queries",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Once you have one or a few collectibles minted, you can query the data from the contract address from your deployment, which can be found here:"}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/marketplace/copy_contract.png",alt:"copy contract address"})}),`
`,e.jsx(s.p,{children:"You can query data using the indexer, using this code where an account address and contract address are inputted into the indexer api"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Works in both a Webapp (browser) or Node.js:"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceIndexer } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@0xsequence/indexer"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" indexer"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceIndexer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "https://arbitrum-sepolia-indexer.sequence.app"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "<access-key>"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// try any contract and account address you'd like :), as an example"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" contractAddress"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x1693ffc74edbb50d6138517fe5cd64fd1c917709"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" accountAddress"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xc2be9cf6d9ee4fd211f88620760e829792659b16"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// query Sequence Indexer for all nft balances of the account on Polygon"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nftBalances"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getTokenBalances"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  contractAddress: contractAddress,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  accountAddress: accountAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  includeMetadata: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"collection of items:"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", nftBalances);"})]})]})}),`
`,e.jsx(s.p,{children:"Where the response of the indexer call, yields the follow data:"}),`
`,e.jsx(s.p,{children:"Response"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contractType"})," (string) - the type of contract type (i.e. ERC20, ERC721, or ERC1155)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contractAddress"})," (string) - the contract address of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"accountAddress"})," (string) - the deploying account address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenID"})," (string) - the tokenID of the token (always 0 if ERC20)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"balance"})," (string) - the balance of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"blockHash"})," (string) - the transaction merkle hash of the block when the token was deployed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"blockNumber"})," (number) - the blocknumber the token was deployed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"chainId"})," (number) - the chain id of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contractType"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"chainId"})," (number) - the chain id of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"address"})," (string) - the address of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name"})," (string) - contract level name of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type"})," (string) - the type of contract type (i.e. ERC20, ERC721, or ERC1155)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"symbol"})," (string) - the symbol of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"decimals"})," (number) - the number of decimals the token has"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"logoURI"})," (string) - the logo of the token displayed in sequence.app"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"deployed"})," (boolean) - whether the token is deployed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bytecodeHash"})," (string) - hash of the bytecode of a smart contract deployed on the blockchain"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"extensions"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"link"})," (string) - the adjoining website to link to the project"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"description"})," (string) - the metadata description of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ogImage"})," (string) - the banner image for the token, rendered in sequence.app"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"originChainId"})," (number) - the originating chain id the token represents"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"originAddress"})," (string) - the originating contract address the token represents"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"verified"})," (boolean) - whether the token is verified and trusted"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"verifiedBy"})," (string) - the verifing source as to why this is not spam"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"updatedAt"})," (date) - the last time the indexer was updated"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenMetadata"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenId"})," (string) - the tokenID of the token (always 0 if ERC20)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contractAddress"})," (string) - the contract address of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name"})," (string) - token level name"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"description"})," (string) - the description of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"image"})," (string) - the image as a url of the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"decimals"})," (string) - the number of decimals for the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"properties"})," (object) - an object containing the properties of the token metadata"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"external_url"})," (string) - an external url for where to find the token or more details"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"updatedAt"})," (date) - the last time the token metadata was updated"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"request-creation",children:["Request Creation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#request-creation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h2,{id:"order-accepting",children:["Order Accepting",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#order-accepting",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})]})}function t(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,c as frontmatter};
