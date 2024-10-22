import{d as r,j as e}from"./index-BBCFkoVo.js";const t={title:"Sequence Metadata REST API Reference & Usage",description:"The Sequence Metadata API provides a fast way to query token & NFT metadata for Ethereum-compatible chains. With RPC and REST endpoints available, you can easily access contract-level and token-level metadata."};function n(a){const s={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"metadata-rest-api-reference--usage",children:["Metadata REST API Reference & Usage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata-rest-api-reference--usage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:`The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata
for Ethereum-compatible chains.`}),`
`,e.jsxs(s.p,{children:[`Quite simply, the Metadata API allows you to query the token metadata of any ERC20, ERC721 or ERC1155
contract on a `,e.jsx(s.a,{href:"/solutions/technical-references/chain-support",children:"number of supported Ethereum chains"}),"."]}),`
`,e.jsxs(s.p,{children:["As well, the Sequence Metadata service is automatically integrated in the ",e.jsx(s.a,{href:"/api/indexer/overview",children:"Sequence Indexer"}),`.
But as we demonstrate below, it's also useful to be able to query the token/contract metadata directly too :)`]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"PRO TIP: RPC vs REST endpoints"}),e.jsx(s.p,{children:`Sequence Metadata service is available with both RPC and REST endpoints. We recommend the RPC endpoints
for your application, but the REST endpoints are an available option for convenience.`}),e.jsxs(s.p,{children:["For RPC endpoint see ",e.jsx(s.a,{href:"/api/metadata/token-metadata",children:"Token metadata RPC"})," and ",e.jsx(s.a,{href:"/api/metadata/contract-metadata",children:"Contract metadata RPC"}),"."]})]}),`
`,e.jsxs(s.h2,{id:"example",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Let's say you'd like to query the metadata of a Skyweaver 1155 card on the Polygon network. Of course,  the
below example will work for any network / contract / token combination as well.`}),`
`,e.jsxs(s.p,{children:["First, the Skyweaver 1155 assets contract is located at address ",e.jsx(s.code,{children:"0x631998e91476DA5B870D741192fc5Cbc55F5a52E"}),`
on the Polygon network. Second, let's build the metadata lookup endpoint to query Skyweaver's contract
for token ID `,e.jsx(s.code,{children:"20"}),":"]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20",children:"Request"})}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "tokenId"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"20"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "contractAddress"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x631998e91476da5b870d741192fc5cbc55f5a52e"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Unstoppable Chop"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "description"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Attach Silence to target unit. Do 4 damage to it."'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "image"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://assets.skyweaver.net/TNqWLuJZ/webapp/cards/full-cards/6x/20-silver.png"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "decimals"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "properties"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "baseCardId"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "goldCardId"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"131092"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "grade"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"oldSilver"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "id"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "silverCardId"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"65556"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "attributes"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"null"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})}),`
`,e.jsxs(s.p,{children:["If you'd like to query a number of tokens at the same time, you can include more token ids comma-separated ",e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22",children:"https://metadata.sequence.app/tokens/polygon/0x.../20,21,22"}),` -- click
to see the JSON response to query token ids `,e.jsx(s.code,{children:"20"}),", ",e.jsx(s.code,{children:"21"}),", and ",e.jsx(s.code,{children:"22"})," in a single batched request."]}),`
`,e.jsxs(s.p,{children:[`Feel free to try tweaking the metadata.sequence.app URL above for your own contract, or another popular
project to see how the responses come back. You can change the network to `,e.jsx(s.a,{href:"",children:"one of our supported networks"}),`
and specify any contract and/or token id.`]}),`
`,e.jsxs(s.p,{children:["In addition to easily querying ",e.jsx(s.em,{children:"token-level metadata"})," like in the above example, you can also query ",e.jsx(s.em,{children:"contract-level metadata"}),`.
Contract-level metadata provides you more information about a contract address such as a name, contract type, logo, and description.
Simply change the metadata URL above to just query the `,e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E",children:"contract address"})]}),`
`,e.jsx(s.p,{children:"and see result:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "chainId"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"137"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "address"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x631998e91476da5b870d741192fc5cbc55f5a52e"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Skyweaver"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "type"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ERC1155"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "symbol"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"SKYWVR"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "logoURI"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://assets.skyweaver.net/_tX5dRVi/webapp/icons/skyweaver-token.png"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "extensions"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "link"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://www.skyweaver.net/"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "description"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Skyweaver is a Free-to-Play, trading card game powered by Polygon and Ethereum."'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "ogImage"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://skyweaver.net/images/skyweavercover.jpg"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "originAddress"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x631998e91476da5b870d741192fc5cbc55f5a52e"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h2,{id:"usage",children:["Usage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The Metadata API service is accessible either with a simple ",e.jsx(s.a,{href:"#rest-endpoints",children:"REST interface"}),", or a ",e.jsx(s.a,{href:"#rpc-client",children:"RPC client"}),`.
For the RPC client, we offer Web browser, node and Go clients. We recommend the RPC client for most integrations, but
make the REST interface available for convenience.`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h2,{id:"rest-endpoints",children:["REST endpoints",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rest-endpoints",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["As mentioned in the ",e.jsx(s.a,{href:"#example",children:"example"})," above. The general format of the REST endpoint is:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`GET https://metadata.sequence.app/tokens/<network>/<contractAddress>[/<tokenID>]
`})}),`
`,e.jsxs(s.p,{children:["Where ",e.jsx(s.code,{children:"<network>"})," must be one of the ",e.jsx(s.code,{children:"Chain ID"})," or ",e.jsx(s.code,{children:"Chain Handle"})," of ",e.jsx(s.a,{href:"",children:"the supported networks"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Fetch contract-level metadata:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`GET https://metadata.sequence.app/tokens/<network>/<contractAddress>
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E",children:"Example"})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Fetch token-level metadata:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`GET https://metadata.sequence.app/tokens/<network>/<contractAddress>/<tokenID>[,<tokenID>,...]
`})}),`
`,e.jsx(s.p,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20",children:"token ID 20"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21",children:"token ID 20 & 21"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h2,{id:"rpc-client",children:["RPC Client",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc-client",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The Metadata RPC interface offers the full capabilities of the Metadata service."}),`
`,e.jsxs(s.p,{children:["We provide SDKs for ",e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js",children:"Web / node.js"})," and ",e.jsx(s.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go"}),`.
Or if you'd like to integrate the Metadata service with another language target, simply follow the API reference below
to implement the HTTP requests. Additionally, read the Typescript client source code as `,e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js/blob/master/packages/metadata/src/metadata.gen.ts",children:`reference
implementation of the Metadata RPC client`})," as well."]}),`
`,e.jsxs(s.h2,{id:"metadata-rpc-methods",children:["Metadata RPC Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata-rpc-methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Metadata API endpoint:"})," ",e.jsx(s.a,{href:"https://metadata.sequence.app",children:"https://metadata.sequence.app"})]}),`
`,e.jsx(s.strong,{children:"Metadata RPC methods:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"GetTokenMetadata"})," - fetch token metadata of ERC721 or ERC1155 tokens from a single contract"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"GetTokenMetadataBatch"})," - fetch token metadata of ERC721 or ERC1155 token from a batch of contracts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"GetContractInfo"})," - fetch contract metadata of an ERC20, ERC721 or ERC1155 contract address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"GetContractInfoBatch"})," - fetch contract metadata of a batch of ERC20, ERC721 or ERC1155 contract addresses"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"SearchContracts"})," - fetch contract metadata info based on search criteria for ERC20, ERC721, and ERC1155 tokens"]}),`
`]})]})}function l(a={}){const{wrapper:s}={...r(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(n,{...a})}):n(a)}export{l as default,t as frontmatter};
