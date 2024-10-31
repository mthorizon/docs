import{d as r,j as e}from"./index-B13TNFk0.js";const l={title:"Sequence Indexer API Installation Guide",description:"Learn how to install the Sequence Indexer API for querying blockchain token and NFT data. Get your API access key from Sequence Builder. Integration is simple with HTTP RPC endpoints for Webapps, Games, and backends."};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"indexer-installation",children:["Indexer Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#indexer-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.aside,{"data-callout":"warning",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"INTRODUCING THE SEQUENCE BUILDER - "}),e.jsxs(s.p,{children:["Our ",e.jsx(s.strong,{children:"Indexer"})," service is managed through ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"https://sequence.build",children:"Sequence Builder"})}),". Sign up to grab your API access key."]}),e.jsx(s.p,{children:e.jsxs(s.a,{href:"https://sequence.build",children:["Get started with the ",e.jsx(s.strong,{children:"Sequence Builder"})," Free Plan today!"]})})]}),`
`,e.jsxs(s.p,{children:[`Sequence Indexer is a simple API to query any blockchain token and NFT data. Below are instructions
on how to integrate the Sequence Indexer API into your Webapps, Games, and backends. In case you missed
it, please also see the `,e.jsx(s.a,{href:"/api/indexer/overview",children:"Indexer Overview"}),"."]}),`
`,e.jsxs(s.h2,{id:"installation",children:["Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`The Sequence Indexer is built as a HTTP API with RPC endpoints that you may call directly
from your Webapp, Game or server backend. Below you'll find information on the RPC endpoint
schema with sample curl commands, along with examples in both Javascript/Typescript and Go.`}),`
`,e.jsxs(s.p,{children:["We provide SDKs for ",e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js",children:"Web / node.js"})," and ",e.jsx(s.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go"}),`.
Or if you'd like to integrate the Indexer with another language target, simply follow the API reference below
to implement the HTTP requests. Additionally, read the Typescript client source code as `,e.jsx(s.a,{href:"https://github.com/0xsequence/sequence.js/blob/master/packages/indexer/src/indexer.gen.ts",children:`reference
implementation of the Indexer API client`})," as well."]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsxs(s.p,{children:[`Sequence Indexer offers the same API across a variety of EVM networks. Make sure to check the Indexer endpoints
and use the corresponding host for your dapp/game. For example, on Ethereum mainnet the Sequence Indexer endpoint is
`,e.jsx(s.a,{href:"https://mainnet-indexer.sequence.app",children:"https://mainnet-indexer.sequence.app"})," and Polygon is ",e.jsx(s.a,{href:"https://polygon-indexer.sequence.app",children:"https://polygon-indexer.sequence.app"}),"."]}),e.jsxs(s.p,{children:["🌄 ",e.jsx(s.a,{href:"/solutions/technical-references/chain-support",children:"View the full list of supported networks and Indexer endpoints here"})]})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h3,{id:"web--nodejs-installation",children:["Web / node.js Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web--nodejs-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsxs(s.p,{children:["This code requires an API Access Key from ",e.jsx(s.a,{href:"https://sequence.build",children:"Sequence Builder"}),"."]})}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceIndexer } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/indexer'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// see https://docs.sequence.xyz/solutions/technical-references/chain-support for list of"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// indexer hosts for the chain you'd like to query"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" indexer"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceIndexer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://mainnet-indexer.sequence.app'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// see examples below for the kinds of queries you can make"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tokenBalances"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getTokenBalances"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"NOTE:"})," if you're using ",e.jsx(s.code,{children:"@0xsequence/indexer"})," from node.js, we recommend using node v18.x or newer."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h3,{id:"go-installation",children:["Go Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"go"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" get"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -u"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" github.com/0xsequence/go-sequence@latest"})]})})}),`
`,e.jsx(s.p,{children:"then in your app,"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Go","data-lang":"go",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/0xsequence/go-sequence/indexer"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// see https://docs.sequence.xyz/solutions/technical-references/chain-support for list of"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// indexer hosts for the chain you'd like to query"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"seqIndexer "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NewIndexer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://polygon-indexer.sequence.app"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// see examples below for the kinds of queries you can make"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"accountAddress "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "ACCOUNT_ADDRESS"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"includeMetadata "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"metadataOptions "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" indexer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"MetadataOptions"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	VerifiedOnly: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"_, tokenBalances, err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" seqIndexer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenBalances"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(context."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Background"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"accountAddress, "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"includeMetadata, "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"metadataOptions, "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h3,{id:"unity-or-unreal-installation",children:["Unity or Unreal Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unity-or-unreal-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The Sequence Indexer is integrated directly inside of the respective ",e.jsx(s.a,{href:"",children:"Sequence Unity"})," and ",e.jsx(s.a,{href:"",children:"Sequence Unreal"})," SDKs."]}),`
`,e.jsx("br",{})]})}function d(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,l as frontmatter};
