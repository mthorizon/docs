import{d as n,j as e}from"./index-BvIiOmls.js";const r={title:"IWallet Interface Implementations in SequenceEthereum SDK - EthWallet and WaaSToWalletAdapter",description:"Learn how to use SequenceEthereum's Wallet module including EthWallet and WaaSToWalletAdapter."};function a(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"wallets",children:["Wallets",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallets",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["In the context of SequenceEthereum, a ",e.jsx(s.code,{children:"Wallet"})," is defined by the ",e.jsx(s.code,{children:"IWallet"})," interface. There are currently 2 implementations of the ",e.jsx(s.code,{children:"IWallet"})," interface in this SDK."]}),`
`,e.jsxs(s.h2,{id:"1-eoawallet",children:["1. EOAWallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-eoawallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"EOAWallet"})," is a standard ",e.jsx(s.a,{href:"https://ethereum.stackexchange.com/questions/5828/what-is-an-eoa-account",children:"EOA wallet"})," for EVM chains."]}),`
`,e.jsx(s.p,{children:"An EOAWallet is easily created:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IWallet"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" eoaWallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EOAWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// This will generate a cryptographically random private key"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IWallet"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" eoaWallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EOAWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(privateKeyString); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create a wallet using a previously generated private key"})]})]})}),`
`,e.jsxs(s.h2,{id:"2-sequencewallettoeoawalletadapter",children:["2. SequenceWalletToEOAWalletAdapter",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-sequencewallettoeoawalletadapter",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"SequenceWalletToEOAWalletAdapter"})," is an adapter that allows you to use a ",e.jsx(s.code,{children:"SequenceWallet"})," with the same ",e.jsx(s.code,{children:"IWallet"})," interface as an ",e.jsx(s.code,{children:"EOAWallet"})," so that it may be used interchangeably with EOA wallets throughout the rest of the SequenceEthereum library."]}),`
`,e.jsx(s.p,{children:"A SequenceWalletToEOAWalletAdapter is easily created once you have a SequenceWallet:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IWallet"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" sequenceAdapter"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SequenceWalletToEOAWalletAdapter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(sequenceWallet);"})]})})}),`
`,e.jsxs(s.h2,{id:"methods",children:["Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"IWallet"})," interface provides a number of methods for you. The most important of which are:"]}),`
`,e.jsxs(s.h3,{id:"getaddress",children:["GetAddress",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getaddress",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Returns the ",e.jsx(s.code,{children:"Address"})," for the wallet"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Address"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsxs(s.h3,{id:"sendtransaction",children:["SendTransaction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendtransaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Signs the given ",e.jsx(s.code,{children:"EthTransaction"})," and submits it via the given client"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" transactionHash"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendTransaction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, transaction);"})]})})}),`
`,e.jsxs(s.h3,{id:"sendtransactionandwaitforreceipt",children:["SendTransactionAndWaitForReceipt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendtransactionandwaitforreceipt",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Signs the given ",e.jsx(s.code,{children:"EthTransaction"})," and submits it via the given client then waits for the ",e.jsx(s.code,{children:"TransactionReceipt"})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TransactionReceipt"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" receipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendTransactionAndWaitForReceipt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, transaction);"})]})})}),`
`,e.jsxs(s.h3,{id:"sendtransactionbatch",children:["SendTransactionBatch",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendtransactionbatch",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Signs the given ",e.jsx(s.code,{children:"EthTransaction[]"}),` and submits them via the given client.
If wallet is an `,e.jsx(s.code,{children:"EOAWallet"}),", the transactions will be submitted sequentially, each of which may pass or fail. If the wallet is a ",e.jsx(s.code,{children:"SequenceWalletToEOAWalletAdapter"}),`, the transactions will be batched together into a single transaction that is submitted all at once and either passes or fails as a whole.
Similarly, if a wallet is an `,e.jsx(s.code,{children:"EOAWallet"})," the ",e.jsx(s.code,{children:"string[]"})," (transaction hashes) you receive will be equal in length to the ",e.jsx(s.code,{children:"EthTransaction[]"})," you submitted. While, if the wallet is a ",e.jsx(s.code,{children:"SequenceWalletToEOAWalletAdapter"}),", you will only receive one transaction hash (",e.jsx(s.code,{children:"string[]"})," of length 1)"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"transactionHashes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendTransactionBatch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, transactions);"})]})})}),`
`,e.jsxs(s.h3,{id:"sendtransactionbatchandwaitforreceipts",children:["SendTransactionBatchAndWaitForReceipts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendtransactionbatchandwaitforreceipts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Signs the given ",e.jsx(s.code,{children:"EthTransaction[]"})," and submits them via the given client then waits for the ",e.jsx(s.code,{children:"TransactionReceipt[]"}),`.
If wallet is an `,e.jsx(s.code,{children:"EOAWallet"}),", the transactions will be submitted sequentially, each of which may pass or fail. If the wallet is a ",e.jsx(s.code,{children:"SequenceWalletToEOAWalletAdapter"}),`, the transactions will be batched together into a single transaction that is submitted all at once and either passes or fails as a whole.
Similarly, if a wallet is an `,e.jsx(s.code,{children:"EOAWallet"})," the ",e.jsx(s.code,{children:"TransactionReceipt[]"})," you receive will be equal in length to the ",e.jsx(s.code,{children:"EthTransaction[]"})," you submitted. While, if the wallet is a ",e.jsx(s.code,{children:"SequenceWalletToEOAWalletAdapter"}),", you will only receive one transaction receipt (",e.jsx(s.code,{children:"TransactionReceipt[]"})," of length 1)"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TransactionReceipt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"receipts"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SendTransactionAndWaitForReceipt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(client, transactions);"})]})})}),`
`,e.jsxs(s.h3,{id:"signmessage",children:["SignMessage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signmessage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Given a message and an optional chain id, sign the message using the wallet. Omit the chain id from the signature if not provided"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" signedMessage"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SignMessage"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(message, chainId)"})]})})}),`
`,e.jsxs(s.p,{children:["Note: the chainId is expected to be in hexadecimal format. If you are working with a ",e.jsx(s.code,{children:"Chain"})," object (recommended), you can use the ",e.jsx(s.code,{children:"AsString"})," method to get the hexadecimal format of the chain id"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" signedMessage"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SignMessage"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(message, Chain.Polygon."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AsString"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"());"})]})})})]})}function t(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(a,{...i})}):a(i)}export{t as default,r as frontmatter};
