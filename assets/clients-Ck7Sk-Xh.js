import{d as r,j as e}from"./index-Ky-3L1R4.js";const l={title:"SequenceEthereum Client Methods and Usage",description:"Use SequenceEthereum to create a Client and utilize our Node Gateway service for RPC requests."};function a(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"clients",children:["Clients",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clients",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["In the context of SequenceEthereum, a ",e.jsx(s.code,{children:"Client"})," is defined by the ",e.jsxs(s.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Ethereum/Provider/IEthClient.cs",children:[e.jsx(s.code,{children:"IEthClient"})," interface"]}),"."]}),`
`,e.jsxs(s.p,{children:["Creating a client requires a ",e.jsx(s.code,{children:"Chain"}),". This will use our highly available and responsive Node Gateway service for your RPC requests; accessed using the API key from the Builder you've provided in your ",e.jsx(s.code,{children:"SequenceConfig"})," scriptable object. If you prefer to use your own RPC URL, you can create a ",e.jsx(s.code,{children:"SequenceEthClient"})," using a URL string as a parameter instead."]}),`
`,e.jsx(s.p,{children:"You can create a client using this snippet:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IEthClient"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" client"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SequenceEthClient"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Chain.Polygon);"})]})})}),`
`,e.jsxs(s.h2,{id:"methods",children:["Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["As your connection point to Ethereum nodes, there are a number of methods that can be performed by a client, these can be found in the ",e.jsx(s.code,{children:"IEthClient"})," interface and are implemented by ",e.jsx(s.code,{children:"SequenceEthClient"}),"."]}),`
`,e.jsx(s.p,{children:"Note: with the exception of BalanceAt (potentially), most users will not need to make use of these methods, but we have included them in our documentation for completeness."}),`
`,e.jsxs(s.h3,{id:"balanceat",children:["BalanceAt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#balanceat",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the gas currency balance of a given wallet at a given blockNumber (in hexadecimal format provided as a string)"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balance"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BalanceAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// By default, if no blockNumber string is provided, check the latest block"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balance"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BalanceAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), blockNumber);"})]})]})}),`
`,e.jsx(s.p,{children:`Note: there are two special values for blockNumber. "earliest" will get the balance at the earliest block on the chain. "latest" will get the balance at the latest block on the chain and is the default parameter when none is provided. Otherwise, you'll want to provide the blockNumber string in hexadecimal format.`}),`
`,e.jsx(s.aside,{"data-callout":"warning",children:e.jsx("b",{children:e.jsxs("u",{children:["Unless you ",e.jsx("i",{children:"really"})," want to get into the weeds with how things work, it is HIGHLY recommended to move on to the next page of the documentation at this point"]})})}),`
`,e.jsxs(s.h3,{id:"blockbynumber",children:["BlockByNumber",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockbynumber",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Used to get the ",e.jsx(s.code,{children:"Block"})," with a specific block number."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Block"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" block"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BlockByNumber"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(blockNumber);"})]})})}),`
`,e.jsx(s.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(s.h3,{id:"blockbyhash",children:["BlockByHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockbyhash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Used to get the ",e.jsx(s.code,{children:"Block"})," by a specified block hash (string)"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Block"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" block"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BlockByHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(blockHash);"})]})})}),`
`,e.jsxs(s.h3,{id:"blocknumber",children:["BlockNumber",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blocknumber",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the most recent block number in hexadecimal format"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" blockNumber"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BlockNumber"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"blockrange",children:["BlockRange",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockrange",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Used to get a ",e.jsx(s.code,{children:"List<Block>"})," from the blocks in a range specified by blockNumbers"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"List"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Block"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"blockRange"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BlockRange"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(startingBlockNumber, endingBlockNumber);"})]})})}),`
`,e.jsx(s.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(s.h3,{id:"chainid",children:["ChainID",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the chain id in hexadecimal format for the chain the client is connected to"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainId"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ChainID"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"codeat",children:["CodeAt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#codeat",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the bytecode for a smart contract at a given address in hexadecimal format at a specified blockNumber"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" code"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"CodeAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(contractAddress, blockNumber);"})]})})}),`
`,e.jsx(s.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(s.h3,{id:"estimategas",children:["EstimateGas",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#estimategas",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Given a ",e.jsx(s.code,{children:"TransactionCall"})," estimate the amount of gas required for the transaction"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" gas"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"EstimateGas"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transactionCall);"})]})})}),`
`,e.jsxs(s.h3,{id:"feehistory",children:["FeeHistory",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#feehistory",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Get a ",e.jsx(s.code,{children:"FeeHistoryResult"})," for gas fees paid blockCount blocks since newestBlock (blockNumber)"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FeeHistoryResult"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" feeHistory"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"FeeHistory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(blockCount, newestBlock, "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" int"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] { });"})]})})}),`
`,e.jsx(s.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(s.h3,{id:"networkid",children:["NetworkId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#networkid",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the chain id in integer format (as string) for the chain the client is connected to"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" networkId"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NetworkId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"nonceat",children:["NonceAt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nonceat",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Used to get the recommended nonce for a given ",e.jsx(s.code,{children:"Address"}),' at a given blockNumber (defaults to "latest")']}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigInteger"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" nonce"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NonceAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Nonce at latest"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" nonce"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NonceAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), blockNumber);"})]})]})}),`
`,e.jsx(s.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(s.h3,{id:"sendrawtransaction",children:["SendRawTransaction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendrawtransaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Given a signed transaction string, submit the transaction to the network and return a transaction hash"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" transactionHash"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendRawTransaction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(signedTransactionString);"})]})})}),`
`,e.jsxs(s.h3,{id:"suggestgasprice",children:["SuggestGasPrice",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#suggestgasprice",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get a suggested gas price"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" gasPrice"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SuggestGasPrice"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"suggestgastipcap",children:["SuggestGasTipCap",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#suggestgastipcap",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the max suggested priority fee for gas"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" gasTipCap"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SuggestGasTipCap"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"transactionbyhash",children:["TransactionByHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transactionbyhash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Used to get a ",e.jsx(s.code,{children:"Transaction"})," by transaction hash"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Transaction"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" transaction"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TransactionByHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transactionHash);"})]})})}),`
`,e.jsxs(s.h3,{id:"transactioncount",children:["TransactionCount",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transactioncount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Used to get the number of transactions in a block by block hash"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigIntegar"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" transactionCount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TransactionCount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(blockHash);"})]})})}),`
`,e.jsxs(s.h3,{id:"waitfortransactionreceipt",children:["WaitForTransactionReceipt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waitfortransactionreceipt",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Provide a transaction hash in order to wait for and return the ",e.jsx(s.code,{children:"TransactionReceipt"})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TransactionReceipt"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" receipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" client."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"WaitForTransactionReceipt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(transactionHash);"})]})})})]})}function d(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(a,{...i})}):a(i)}export{d as default,l as frontmatter};
