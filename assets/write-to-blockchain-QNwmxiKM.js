import{d as i,j as e}from"./index-DSXkcDtl.js";const l={title:"Blockchain Transaction Writing with WaaS - A Comprehensive Guide",description:"The content provides detailed instructions on writing to a blockchain using the WaaS SDK. It explains how to handle transactions asynchronously, including raw transactions, ERC20, ERC721, and ERC1155 token transfers, as well as complex interactions."};function a(s){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"write-to-blockchain",children:["Write to Blockchain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#write-to-blockchain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The blockchain can be thought of as a general-purpose, publically viewable and verified, database. To write to a blockchain, similar to with a typical database, you must make a ",e.jsx("u",{children:"transaction"}),"."]}),`
`,e.jsxs(n.p,{children:["Typically, creating a blockchain transaction is rather complex, but Embedded Wallet handles that complexity for you and exposes 5 types of ",e.jsx(n.code,{children:"Transactions"}),"."]}),`
`,e.jsxs(n.p,{children:["Sending a transaction is an ",e.jsx(n.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",e.jsx(n.code,{children:"await"})," when calling ",e.jsx(n.code,{children:"SequenceWallet.SendTransaction"})," if you wish to obtain the ",e.jsx(n.code,{children:"TransactionReturn"})," object directly. Or, you can take the recommended approach which is to setup handler functions for the ",e.jsx(n.code,{children:"SequenceWallet.OnSendTransactionComplete"})," and ",e.jsx(n.code,{children:"SequenceWallet.OnSendTransactionFailed"})," events and call the ",e.jsx(n.code,{children:"SequenceWallet.SendTransaction"})," method from anywhere (without await). For example:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public void OnSendTransactionCompleteHandler(SuccessfulTransactionReturn result) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    // Do something"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public void OnSendTransactionFailedHandler(FailedTransactionReturn result) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    // Do something"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public void OnWalletCreatedHander(SequenceWallet wallet) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    wallet.OnSendTransactionComplete += OnSendTransactionCompleteHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    wallet.OnSendTransactionFailed += OnSendTransactionFailedHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",e.jsx(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),`
`,e.jsxs(n.h2,{id:"rawtransaction",children:["RawTransaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rawtransaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The most basic form of a ",e.jsx(n.code,{children:"Transaction"}),", a raw transaction, is very useful to send ETH or the gas currency of the network you are interacting with to an ",e.jsx(n.code,{children:"Address"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, to send one MATIC to ",e.jsx(n.code,{children:"0x9766bf76b2E3e7BCB8c61410A3fC873f1e89b43f"})," you can use this snippet:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Chain.Polygon,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        new RawTransaction("0x9766bf76b2E3e7BCB8c61410A3fC873f1e89b43f", DecimalNormalizer.Normalize(1))'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsx(n.p,{children:"where _wallet is a SequenceWallet."}),`
`,e.jsxs(n.p,{children:["Note: the ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/evm/",children:"EVM"}),' does not support floating point numbers. As a result, token (and gas currency) values are represented by whole numbers and a "decimals" value. 1 ETH (or in the example above 1 MATIC) is represented as ',e.jsx(n.code,{children:"1000000000000000000"}),' (1 * 10^18) as ETH, MATIC, and most gas currencies have a "decimals" value of 18. ',e.jsx(n.code,{children:"DecimalNormalizer.Normalize"})," (above) is a basic helper function that will return ",e.jsx(n.code,{children:"input value * 10^decimals"}),' and optionally accepts a "decimals" value as a second parameter (defaulting to 18 when not provided).']}),`
`,e.jsx(n.p,{children:"Additionally, you can include data with a raw transaction in hexadecimal format as a string. For more on this, please see the advanced section of this documentation."}),`
`,e.jsxs(n.h2,{id:"senderc20",children:["sendERC20",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#senderc20",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/erc20",children:"ERC20"})," token is the fungible token standard. You can easily deploy an ERC20 contract and mint tokens using our ",e.jsx(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",e.jsx(n.a,{href:"/solutions/builder/contracts",children:"Builder documentation"}),"."]}),`
`,e.jsx(n.p,{children:"To send an ERC20 token transaction, you can use this code snippet:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC20("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc20TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            AmountAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.p,{children:["Note: as above, it is recommended to use ",e.jsx(n.code,{children:"DecimalNormalizer.Normalize"}),` to convert the amount from human readable format to EVM format. Please make sure to include the optional "decimals" int parameter if your ERC20 token has a "decimals" value that is not 18. If you're not sure how many "decimals" your ERC20 has, this can be easily read on the Builder using the "decimals" method under "Read Contract".`]}),`
`,e.jsxs(n.h3,{id:"complex-erc20-interactions",children:["Complex ERC20 Interactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-erc20-interactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For interactions with ERC20 tokens outside of basic transfers, you'll want to use our ",e.jsx(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC20 smart contract wrapper functions for your convenience that allow you to create and send ",e.jsx(n.code,{children:"RawTransactions"})," with Embedded Wallets."]}),`
`,e.jsxs(n.p,{children:["First, you'll need to create an ",e.jsx(n.code,{children:"ERC20"})," object by providing a contract address and optionally, an ",e.jsx(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC20 standard (not recommended)."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC20 myToken = new ERC20(myTokenAddress);"})})})}),`
`,e.jsxs(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC20 class. Any method that returns a ",e.jsx(n.code,{children:"CallContractFunction"}),", e.g. ",e.jsx(n.code,{children:"Mint"}),", can be used when creating a RawTransaction with Embedded Wallets. For example:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC20 myToken = new ERC20(myTokenAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(myToken.Mint(toAddress, DecimalNormalizer.NormalizeAsBigInteger(amount))),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.h2,{id:"senderc721",children:["sendERC721",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#senderc721",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/erc721",children:"ERC721"})," token is the non-fungible standard, you've probably heard of them as NFTs. You can easily deploy an ERC721 contract and mint tokens using our ",e.jsx(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",e.jsx(n.a,{href:"/solutions/builder/contracts",children:"Builder documentation"}),"."]}),`
`,e.jsx(n.p,{children:"To send an ERC721 token transaction, you can use this code snippet:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC721("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc721TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            TokenIdAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.h3,{id:"complex-erc721-interactions",children:["Complex ERC721 Interactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-erc721-interactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For interactions with ERC721 tokens outside of basic transfers, you'll want to use our ",e.jsx(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC21 smart contract wrapper functions for your convenience that allow you to create and send ",e.jsx(n.code,{children:"RawTransactions"})," with Embedded Wallets."]}),`
`,e.jsxs(n.p,{children:["First, you'll need to create an ",e.jsx(n.code,{children:"ERC721"})," object by providing a contract address and optionally, an ",e.jsx(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC721 standard (not recommended)."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC721 myToken = new ERC721(myTokenAddress);"})})})}),`
`,e.jsxs(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC721 class. Any method that returns a ",e.jsx(n.code,{children:"CallContractFunction"}),", e.g. ",e.jsx(n.code,{children:"SafeMint"}),", can be used when creating a RawTransaction with Embedded Wallets. For example:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC721 myToken = new ERC721(myTokenAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(myToken.SafeMint(toAddress)),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.h2,{id:"senderc1155",children:["sendERC1155",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#senderc1155",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc1155",children:"ERC1155"})," token is the multi token standard, often referred to as SFTs (semi-fungible tokens). As ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"co-creators of the ERC1155 standard"})," we are firm believers in its unparalleled usefulness for games. You can easily deploy an ERC1155 contract and mint tokens using our ",e.jsx(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",e.jsx(n.a,{href:"/solutions/builder/contracts",children:"Builder documentation"}),"."]}),`
`,e.jsx(n.p,{children:"To send an ERC1155 token transaction, you can use this code snippet:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC1155("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc1155TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            new SendERC1155Values[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                new SendERC1155Values(TokenIdAsString, AmountAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                ..."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            }),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.p,{children:["Note: you can send multiple token ids from the same ERC1155 contract in a single transaction by including multiple ",e.jsx(n.code,{children:"SendERC1155Values"})," objects in the transaction"]}),`
`,e.jsxs(n.h3,{id:"complex-erc1155-interactions",children:["Complex ERC1155 Interactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-erc1155-interactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For interactions with ERC1155 tokens outside of basic transfers, you'll want to use our ",e.jsx(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC1155 smart contract wrapper functions for your convenience that allow you to create and send ",e.jsx(n.code,{children:"RawTransactions"})," with Embedded Wallets."]}),`
`,e.jsxs(n.p,{children:["First, you'll need to create an ",e.jsx(n.code,{children:"ERC1155"})," object by providing a contract address and optionally, an ",e.jsx(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC1155 standard (not recommended)."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC1155 myToken = new ERC1155(myTokenAddress);"})})})}),`
`,e.jsxs(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC1155 class. Any method that returns a ",e.jsx(n.code,{children:"CallContractFunction"}),", e.g. ",e.jsx(n.code,{children:"Mint"}),", can be used when creating a RawTransaction with Embedded Wallets. For example:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ERC1155 myToken = new ERC1155(myTokenAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(myToken.Mint(toAddress, tokenId, amount)),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.h2,{id:"delayedencode",children:["DelayedEncode",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#delayedencode",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`When calling a smart contract on an EVM-based network, the client goes through a complex process known as "ABI encoding" where the function signature you want to call as well as the parameters you're providing are encoded into a binary format. This process is complicated and error-prone so we've abstracted it all away so that you don't have to deal with it. But, if you're curious to learn how it works, please see `,e.jsx(n.a,{href:"https://docs.soliditylang.org/en/develop/abi-spec.html",children:"this document"}),"."]}),`
`,e.jsx(n.p,{children:"A DelayedEncode transaction allows you to call any method on an arbitrary smart contract, allowing us to handle the complicated ABI encoding process server-side."}),`
`,e.jsx(n.p,{children:"To send a DelayedEncode transaction, you can use this code snippet:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new DelayedEncode(ContractAddress, ValueAsString, new DelayedEncodeData("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ContractABIAsString,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ParametersAsObjectArray,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            FunctionNameAsString)),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsx(n.p,{children:"Let's examine the above to get a better understanding of some of the variables that may be non-obvious."}),`
`,e.jsxs(n.p,{children:["ValueAsString: This will ",e.jsx("i",{children:"usually"}),' be "0" unless you are calling a ',e.jsx(n.a,{href:"https://solidity-by-example.org/payable/",children:"payable method"})," denoted by the ",e.jsx(n.code,{children:"payable"})," keyword in the smart contract definition. If you are calling a payable method, it is recommended to use ",e.jsx(n.code,{children:"DecimalNormalizer.Normalize"})," to convert the amount from human readable format to EVM format. Note that the user will need to have the required funds in their wallet in order to pay the value specified to a payable function."]}),`
`,e.jsxs(n.p,{children:["ContractABIAsString: This can either be the entire ",e.jsx(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," or just the function you plan on interacting with. If you're not familiar with ABIs, we'd recommend copy-pasting the function signature (with parameters) from the contract source code on Etherscan (or the appropriate block explorer for your network) and removing the whitespace and variable names."]}),`
`,e.jsx(n.p,{children:"ParametersAsObjectArray: The parameters you want to provide to the method you wish to call. No need to provide the parameter names, just their values in the order they appear in the ABI. Provide parameters in string format when in doubt."}),`
`,e.jsx(n.p,{children:"FunctionNameAsString: The name of the function you want to call as it appears in the ABI (or source code). Exclude parentheses and parameters."}),`
`,e.jsx(n.p,{children:'Putting this together, an example of using delayed encode to call the "mint" function on an ERC20 would look like this:'}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction(Chain.Polygon, new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        new DelayedEncode(ContractAddress, "0", new DelayedEncodeData('})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'            "mint(address,uint256)",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            new object[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                ToAddress, DecimalNormalizer.Normalize(1)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            },"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'            "mint")),'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsxs(n.h2,{id:"batch-transactions",children:["Batch Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#batch-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Using the magic of the Sequence Smart Contract wallet, our SDK allows you to seemlessly batch transactions together. Batching transactions together is extremely beneficial as it provides material gas savings and allows you to create complex transactions, that either all pass or all fail, without deploying custom smart contracts for each bespoke use case, opening a whole new realm of design possibilities!"}),`
`,e.jsxs(n.p,{children:["Sending a batch transaction is easy! Simply include multiple transactions, of any type, in your transaction array when making the ",e.jsx(n.code,{children:"SendTransaction"})," request."]}),`
`,e.jsx(n.p,{children:"For example - sending a transaction of each type in a batch:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransaction("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Chain.Polygon,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    new Sequence.EmbeddedWallet.Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(ToAddress, DecimalNormalizer.Normalize(1)),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC20("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc20TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            AmountAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(new ERC20(erc20TokenAddress).Burn(DecimalNormalizer.NormalizeAsBigInteger(amount))),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC721("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc721TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            TokenIdAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new SendERC1155("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            erc1155TokenAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ToAddress,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            new SendERC1155Values[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                new SendERC1155Values(TokenIdAsString, AmountAsString),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                ..."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            }),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new DelayedEncode(ContractAddress, ValueAsString, new DelayedEncodeData("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ContractABIAsString,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            ParametersAsObjectArray,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            FunctionNameAsString)),"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    });"})})]})}),`
`,e.jsx(n.p,{children:"Since these transactions are all batched into a single transaction by the Sequence Smart Contract Wallet before being submitted to the network, you will receive only one transaction receipt."}),`
`,e.jsxs(n.h2,{id:"feeoptions",children:["FeeOptions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#feeoptions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"By default, the SDK will automatically sponsor all Embedded Wallet transactions using your Builder API credits. However, in some niche use cases, you may find that you would prefer not to sponsor your users' transactions. This requires that your users are more experienced Web3 users and have tokens/gas currency in their wallet that can be used to pay gas fees. In addition to the gas currency for the selected network, gas fees can also be paid using select ERC20 and ERC1155 tokens."}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:["Transaction sponsoring is only available for Developer tier and above. For more information on gas sponsoring, please see ",e.jsx(n.a,{href:"/solutions/builder/gas-tank",children:"this document"}),". For more information on upgrading your project billing tier, please see ",e.jsx(n.a,{href:"/support/builder/project-settings#update-your-project-subscription-plan",children:"this guide"}),"."]})}),`
`,e.jsx(n.p,{children:"First, you'll need to assemble the transaction(s) you wish to submit in a batch. Then, you need to request the FeeOptions."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Transaction[] transactions = new Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    // Create your transactions here"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FeeOptionsResponse response = await _wallet.GetFeeOptions(chain, transactions);"})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeeOptionsResponse"})," contains a FeeQuote (string) that locks in the price for each ",e.jsx(n.code,{children:"FeeOptionReturn"})," in the FeeOptions array that is returned for a limited time; you'll need this in a moment when submitting your transactions. For your convenience, the SDK will automatically query the user's wallet to see which of the FeeOptions the user can afford using the ",e.jsx(n.a,{href:"/sdk/unity/read-from-blockchain",children:"Indexer"}),"."]}),`
`,e.jsx(n.p,{children:"From here, you can display a UI to the user to allow them to select how they would like to pay the fee for their transactions."}),`
`,e.jsx(n.p,{children:"Once the user has selected how they'd like to pay their fee, you may submit the transactions, including the selected FeeOption and the FeeQuote string."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"_wallet.SendTransactionWithFeeOptions(chain, transactions, response.FeeOptions[selectionIndex].FeeOption, response.FeeQuote);"})})})}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"Demo Scene"})," that can be imported via ",e.jsx(n.code,{children:"Package Manager > Samples"}),", you can see a barebones example usage of FeeOptions. Here, we do not provide a UI and instead opt to use the first available FeeOption in the user's wallet. We do not recommend using this approach in a real game, but it serves as a useful example for your own integration. See our sample code below:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private async Task WaitForFeeOptionsAndSubmitFirstAvailable(Address toAddress, string amount)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Transaction[] transactions = new Transaction[]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        new RawTransaction(toAddress, amount)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    FeeOptionsResponse response = await _wallet.GetFeeOptions(_chain, transactions)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    int options = response.FeeOptions.Length;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    for (int i = 0; i < options; i++)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        if (response.FeeOptions[i].InWallet)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            await _wallet.SendTransactionWithFeeOptions(_chain, transactions, response.FeeOptions[i].FeeOption,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"                response.FeeQuote);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            return;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    Debug.LogError("The user does not have enough of the valid FeeOptions in their wallet");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})})]})}function t(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{t as default,l as frontmatter};
