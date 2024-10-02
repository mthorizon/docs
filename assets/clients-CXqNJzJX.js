import{d as i,j as e}from"./index-DTbPavEw.js";const r={title:"SequenceEthereum Client Methods and Usage",description:"Use SequenceEthereum to create a Client and utilize our Node Gateway service for RPC requests."};function t(a){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"clients",children:["Clients",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clients",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["In the context of SequenceEthereum, a ",e.jsx(n.code,{children:"Client"})," is defined by the ",e.jsxs(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Ethereum/Provider/IEthClient.cs",children:[e.jsx(n.code,{children:"IEthClient"})," interface"]}),"."]}),`
`,e.jsxs(n.p,{children:["Creating a client requires a ",e.jsx(n.code,{children:"Chain"}),". This will use our highly available and responsive Node Gateway service for your RPC requests; accessed using the API key from the Builder you've provided in your ",e.jsx(n.code,{children:"SequenceConfig"})," scriptable object. If you prefer to use your own RPC URL, you can create a ",e.jsx(n.code,{children:"SequenceEthClient"})," using a URL string as a parameter instead."]}),`
`,e.jsx(n.p,{children:"You can create a client using this snippet:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IEthClient client = new SequenceEthClient(Chain.Polygon);
`})}),`
`,e.jsxs(n.h2,{id:"methods",children:["Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["As your connection point to Ethereum nodes, there are a number of methods that can be performed by a client, these can be found in the ",e.jsx(n.code,{children:"IEthClient"})," interface and are implemented by ",e.jsx(n.code,{children:"SequenceEthClient"}),"."]}),`
`,e.jsx(n.p,{children:"Note: with the exception of BalanceAt (potentially), most users will not need to make use of these methods, but we have included them in our documentation for completeness."}),`
`,e.jsxs(n.h3,{id:"balanceat",children:["BalanceAt",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#balanceat",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the gas currency balance of a given wallet at a given blockNumber (in hexadecimal format provided as a string)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigIntegar balance = await client.BalanceAt(wallet.GetAddress()); // By default, if no blockNumber string is provided, check the latest block
BigIntegar balance = await client.BalanceAt(wallet.GetAddress(), blockNumber);
`})}),`
`,e.jsx(n.p,{children:`Note: there are two special values for blockNumber. "earliest" will get the balance at the earliest block on the chain. "latest" will get the balance at the latest block on the chain and is the default parameter when none is provided. Otherwise, you'll want to provide the blockNumber string in hexadecimal format.`}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsx("b",{children:e.jsxs("u",{children:["Unless you ",e.jsx("i",{children:"really"})," want to get into the weeds with how things work, it is HIGHLY recommended to move on to the next page of the documentation at this point"]})})}),`
`,e.jsxs(n.h3,{id:"blockbynumber",children:["BlockByNumber",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockbynumber",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Used to get the ",e.jsx(n.code,{children:"Block"})," with a specific block number."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Block block = await client.BlockByNumber(blockNumber);
`})}),`
`,e.jsx(n.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(n.h3,{id:"blockbyhash",children:["BlockByHash",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockbyhash",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Used to get the ",e.jsx(n.code,{children:"Block"})," by a specified block hash (string)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Block block = await client.BlockByHash(blockHash);
`})}),`
`,e.jsxs(n.h3,{id:"blocknumber",children:["BlockNumber",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blocknumber",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the most recent block number in hexadecimal format"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string blockNumber = await client.BlockNumber();
`})}),`
`,e.jsxs(n.h3,{id:"blockrange",children:["BlockRange",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockrange",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Used to get a ",e.jsx(n.code,{children:"List<Block>"})," from the blocks in a range specified by blockNumbers"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`List<Block> blockRange = await client.BlockRange(startingBlockNumber, endingBlockNumber);
`})}),`
`,e.jsx(n.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(n.h3,{id:"chainid",children:["ChainID",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the chain id in hexadecimal format for the chain the client is connected to"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string chainId = await client.ChainID();
`})}),`
`,e.jsxs(n.h3,{id:"codeat",children:["CodeAt",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#codeat",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the bytecode for a smart contract at a given address in hexadecimal format at a specified blockNumber"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string code = await client.CodeAt(contractAddress, blockNumber);
`})}),`
`,e.jsx(n.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(n.h3,{id:"estimategas",children:["EstimateGas",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#estimategas",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Given a ",e.jsx(n.code,{children:"TransactionCall"})," estimate the amount of gas required for the transaction"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigIntegar gas = await client.EstimateGas(transactionCall);
`})}),`
`,e.jsxs(n.h3,{id:"feehistory",children:["FeeHistory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#feehistory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Get a ",e.jsx(n.code,{children:"FeeHistoryResult"})," for gas fees paid blockCount blocks since newestBlock (blockNumber)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`FeeHistoryResult feeHistory = await client.FeeHistory(blockCount, newestBlock, new int[] { });
`})}),`
`,e.jsx(n.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(n.h3,{id:"networkid",children:["NetworkId",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#networkid",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the chain id in integer format (as string) for the chain the client is connected to"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string networkId = await client.NetworkId();
`})}),`
`,e.jsxs(n.h3,{id:"nonceat",children:["NonceAt",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nonceat",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Used to get the recommended nonce for a given ",e.jsx(n.code,{children:"Address"}),' at a given blockNumber (defaults to "latest")']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigInteger nonce = await client.NonceAt(wallet.GetAddress()); // Nonce at latest
BigIntegar nonce = await client.NonceAt(wallet.GetAddress(), blockNumber);
`})}),`
`,e.jsx(n.p,{children:'Note: as above, blockNumber should be in hexadecimal format or special values "ealiest" and "latest"'}),`
`,e.jsxs(n.h3,{id:"sendrawtransaction",children:["SendRawTransaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendrawtransaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Given a signed transaction string, submit the transaction to the network and return a transaction hash"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string transactionHash = await client.SendRawTransaction(signedTransactionString);
`})}),`
`,e.jsxs(n.h3,{id:"suggestgasprice",children:["SuggestGasPrice",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#suggestgasprice",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get a suggested gas price"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigIntegar gasPrice = await client.SuggestGasPrice();
`})}),`
`,e.jsxs(n.h3,{id:"suggestgastipcap",children:["SuggestGasTipCap",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#suggestgastipcap",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the max suggested priority fee for gas"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigIntegar gasTipCap = await client.SuggestGasTipCap();
`})}),`
`,e.jsxs(n.h3,{id:"transactionbyhash",children:["TransactionByHash",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transactionbyhash",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Used to get a ",e.jsx(n.code,{children:"Transaction"})," by transaction hash"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Transaction transaction = await client.TransactionByHash(transactionHash);
`})}),`
`,e.jsxs(n.h3,{id:"transactioncount",children:["TransactionCount",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transactioncount",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Used to get the number of transactions in a block by block hash"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`BigIntegar transactionCount = await client.TransactionCount(blockHash);
`})}),`
`,e.jsxs(n.h3,{id:"waitfortransactionreceipt",children:["WaitForTransactionReceipt",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waitfortransactionreceipt",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Provide a transaction hash in order to wait for and return the ",e.jsx(n.code,{children:"TransactionReceipt"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`TransactionReceipt receipt = await client.WaitForTransactionReceipt(transactionHash);
`})})]})}function c(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{c as default,r as frontmatter};
