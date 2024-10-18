import{d as i,j as s}from"./index-Daxqvjsd.js";const l={title:"Sequence Transactions API - Meta-Transactions Made Easy",description:"The Sequence Transactions API, also known as the Relayer service, simplifies dispatching meta-transactions on Ethereum-compatible networks. It offers gas abstraction, sponsored gas, batched and parallel transactions, fire-and-forget model, and optimal gas pricing.",layout:"docs",showOutline:!1,content:{width:"100%"}};function a(n){const e={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"transactions-api",children:["Transactions API",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transactions-api",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.aside,{"data-callout":"note",children:s.jsx(e.p,{children:s.jsx(e.a,{href:"https://0xsequence.redoc.ly/tag/relayer",children:"Transactions API documentation and endpoints"})})}),`
`,s.jsx(e.p,{children:"The Sequence Transactions API (or the technical term Relayer service) offers a simple interface for dispatching meta-transactions on Ethereum-compatible networks."}),`
`,s.jsx(e.p,{children:"Meta-transactions are the idea of a transaction inside of a transaction. The benefits of Sequence meta-transactions are that they allow:"}),`
`,s.jsxs(e.h2,{id:"benefits",children:["Benefits",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#benefits",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Gas abstraction -- whereby users can pay for network gas in a variety of tokens (ie. USDC, DAI, etc.)"}),`
`,s.jsx(e.li,{children:"Sponsored gas -- projects may sponsor the gas of specific contracts to allow free gas for their users"}),`
`,s.jsx(e.li,{children:"Batched transactions -- group a bunch of independent transactions and allow them to be mined as a single transaction"}),`
`,s.jsx(e.li,{children:"Parallel transactions -- parallelize the dispatch of transactions in some cases"}),`
`,s.jsx(e.li,{children:"Fire + forget model -- easily send transactions to the transactions api which will automatically manage nonces, bump gas, and other features which will ensure fast delivery"}),`
`,s.jsx(e.li,{children:"Optimal gas pricing for transactions -- will be attempted once and if not included from the mempool within 3 blocks, the transaction will be resubmitted"}),`
`]}),`
`,s.jsx(e.p,{children:"The best part: transactions with Sequence Transactions API are compatible with any existing/deployed Ethereum contract, and thus, integrating the Sequence Relayer doesn't require any changes to your contracts or dapp."}),`
`,s.jsxs(e.p,{children:["The Sequence Transactions API is usable by frontend dapps, or even in your backends. Be sure to install the corresponding SDK for your preferred language such as ",s.jsx(e.a,{href:"/sdk/typescript/guides/overview",children:"Typescript"})," or ",s.jsx(e.a,{href:"/sdk/go/overview",children:"Go"}),"."]}),`
`,s.jsxs(e.h2,{id:"anatomy-of-a-sequence-transaction-bundle",children:["Anatomy of a Sequence transaction bundle",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anatomy-of-a-sequence-transaction-bundle",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"A Sequence transaction bundle consists of three things:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"A list of Sequence transactions"}),`
`,s.jsx(e.li,{children:"A Sequence nonce"}),`
`,s.jsx(e.li,{children:"A Sequence signature"}),`
`]}),`
`,s.jsx(e.p,{children:`Like Ethereum accounts, Sequence wallets use nonces to enforce transaction ordering and protect against replay attacks.
Unlike Ethereum accounts, Sequence wallets have a virtually unlimited supply of independent nonces, allowing multiple independent transactions to be executed in parallel.
A Sequence nonce is encoded as a 160-bit nonce space followed by the 96-bit nonce for that nonce space, big-endian.`}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-txt",children:`|<------------------------- uint256 -------------------------->|
|<------ nonce space (160 bits) ------>||<- nonce (96 bits) -->|
ssssssssssssssssssssssssssssssssssssssssnnnnnnnnnnnnnnnnnnnnnnnn
`})}),`
`,s.jsxs(e.h2,{id:"gas-sponsorship-and-fees",children:["Gas sponsorship and fees",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-sponsorship-and-fees",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"The transactions api only dispatches transactions that either:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Are sponsored in a project via the Sequence Builder, or"}),`
`,s.jsx(e.li,{children:"Include a fee payment transaction to the transactions api."}),`
`]}),`
`,s.jsx(e.p,{children:"You can sponsor:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Sequence wallets, so that they can send transactions without needing to pay fees,"}),`
`,s.jsx(e.li,{children:"Token addresses, so that any user can send those tokens for free,"}),`
`,s.jsx(e.li,{children:"Contracts, so that any user can interact with them for free,"}),`
`,s.jsx(e.li,{children:"Arbitrary addresses, so that any user can transfer native tokens to it for free."}),`
`]}),`
`,s.jsxs(e.p,{children:["To start sponsoring transactions, sign into ",s.jsx(e.a,{href:"https://sequence.build",children:"https://sequence.build"}),", and create a new project for the network you want to transact on."]}),`
`,s.jsxs(e.p,{children:[`You can also pay the transactions API directly to dispatch your transactions by adding an additional fee payment transaction to the relayer in your bundle.
The list of accepted fee tokens can be retrieved by calling the `,s.jsx(e.code,{children:"/FeeTokens"})," endpoint for the network you are interested in:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"cURL","data-lang":"sh",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"$"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -s"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -H"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'Content-Type: application/json'"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -d"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '{}'"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  https://mainnet-relayer.sequence.app/rpc/Relayer/FeeTokens"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" jq"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'  "isFeeRequired"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'  "tokens"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "chainId"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 1,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "name"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Matic",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "symbol"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "MATIC",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "type"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "ERC20_TOKEN",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "decimals"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 18,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "logoURL"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/matic.png",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "contractAddress"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "tokenID"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "chainId"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 1,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "name"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "USDC",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "symbol"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "USDC",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "type"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "ERC20_TOKEN",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "decimals"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 6,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "logoURL"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "contractAddress"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "tokenID"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "chainId"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 1,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "name"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Wrapped Ether",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "symbol"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "WETH",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "type"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "ERC20_TOKEN",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "decimals"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 18,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "logoURL"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "https://logos.covalenthq.com/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "contractAddress"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:'      "tokenID"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:":"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})]})}function c(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{c as default,l as frontmatter};
