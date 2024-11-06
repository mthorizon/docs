import{d as r,j as s}from"./index-BoU12Y6p.js";const a={title:"Blockchain Data Retrieval with Unity-Native Sequence Indexer",description:"To read data from the blockchain, use the Unity-Native implementation of the Sequence Indexer. Create a ChainIndexer instance to access all functionalities of the IIndexer interface."};function n(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"read-from-blockchain",children:["Read from Blockchain",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#read-from-blockchain",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["Reading from the blockchain is done using Unity-Native implementation of our ",s.jsx(e.a,{href:"/api/indexer/overview",children:"Sequence Indexer"}),"."]}),`
`,s.jsxs(e.p,{children:["We recommend creating an instance of the ",s.jsxs(e.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Indexer/ChainIndexer.cs",children:[s.jsx(e.code,{children:"ChainIndexer"})," class"]}),". This will expose you to all the functionality offered by the ",s.jsxs(e.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Indexer/IIndexer.cs",children:[s.jsx(e.code,{children:"IIndexer"})," interface"]}),"."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" polygonIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Chain.Polygon);"})]})})}),`
`,s.jsxs(e.p,{children:["You can check if the indexer API for your given chain is up and running using the ",s.jsx(e.code,{children:"Ping"})," async Task. This can be useful if a request is failing. During development, you can also check the status of our indexers on ",s.jsx(e.a,{href:"https://status.sequence.info/",children:"our status page"}),"."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"bool"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" indexerIsWorking"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Ping"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,s.jsxs(e.h2,{id:"get-balance",children:["Get Balance",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-balance",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To check the Ether (or whatever your network's default gas currency is) balance of a user, use the ",s.jsx(e.code,{children:"GetEtherBalance"})," async Task."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EtherBalance"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balance"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetEtherBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigInteger"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balanceInWei"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" balance.balanceWei;"})]})]})}),`
`,s.jsxs(e.h2,{id:"get-token-balances",children:["Get Token Balances",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-balances",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To fetch the token balances for a user you'll want to use the ",s.jsx(e.code,{children:"GetTokenBalances"})," async Task."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTokenBalancesReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenBalances"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenBalancesArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address));"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tokenBalances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" balances.balances;"})]})]})}),`
`,s.jsx(e.p,{children:"When fetched this way, you will only receive one token instance for each smart contract. Fetching, without specifying the address, is useful to determine which contracts your player owns tokens from and which ERC20s they have in their wallet."}),`
`,s.jsxs(e.p,{children:["To fetch individual balances for ERC721 or ERC1155 tokens, you'll want to specify the contract in your ",s.jsx(e.code,{children:"GetTokenBalancesArgs"}),"."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTokenBalancesReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenBalances"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenBalancesArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(userAddress, contractAddress));"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tokenBalances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" balances.balances;"})]})]})}),`
`,s.jsxs(e.p,{children:["If the player has many tokenIds for a given contract (or owns tokens from many contracts), you'll have to deal with pagination. In this case, you'll want to check the ",s.jsx(e.code,{children:"Page"})," you receive in your ",s.jsx(e.code,{children:"GetTokenBalancesReturn"})," to see if it has more and then if it does make another request, including the Page."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTokenBalancesReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" balances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenBalances"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenBalancesArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(userAddress, contractAddress));"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"List"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"finalResult"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" List"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tokenBalances"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" balances.balances;"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AddItemsFromArrayToList"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tokenBalances, finalResult);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"while"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (tokenBalances.page.more) {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    tokenBalances "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetTokenBalances"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenBalancesArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(accountAddress, contractAddress, tokenBalances.page));"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    AddItemsFromArrayToList"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tokenBalances, finalResult);"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(e.p,{children:["To simplify this operation, we've created a wrapper ",s.jsx(e.code,{children:"GetTokenBalancesOrganizedInDictionary"}),". This will fetch all of the TokenBalances for a given contractAddress and userAccountAddress and organize them into a Dictionary mapping tokenID (BigInteger) to TokenBalance. In general, you'll want to use this most often."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Dictionary"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BigInteger"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tokenBalancesDictionary"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenBalancesOrganizedInDictionary"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(accountAddress, contractAddress);"})]})]})}),`
`,s.jsx(e.p,{children:"This will make checking the respective balance for each token id much easier as well."}),`
`,s.jsxs(e.h2,{id:"get-token-supplies",children:["Get Token Supplies",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-supplies",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["If you need to fetch the total token supply for a given smart contract, you can use the ",s.jsx(e.code,{children:"GetTokenSupplies"})," async Task."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTokenSuppliesReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" tokenSupplies"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenSupplies"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenSuppliesArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(contractAddress))"})]})]})}),`
`,s.jsx(e.p,{children:"We don't expect this to be a very common operation, but it is exposed for you just in case you need it."}),`
`,s.jsxs(e.h3,{id:"get-token-supplies-map",children:["Get Token Supplies Map",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-supplies-map",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["For ",s.jsx(e.code,{children:"GetTokenSupplies"})," power users, we also provide a ",s.jsx(e.code,{children:"GetTokenSuppliesMap"})," async Task that allows you to fetch the supplies for multiple token contracts and token ids in a map."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" indexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Chain.Polygon);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" usdcAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ToLower"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" wmaticAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ToLower"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" skyweaverAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0x631998e91476da5b870d741192fc5cbc55f5a52e"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ToLower"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" skyweaverTokenId1"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "68657"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" skyweaverTokenId2"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "66669"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" skyweaverTokenId3"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "66668"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTokenSuppliesMapReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" suppliesMapReturn"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTokenSuppliesMap"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTokenSuppliesMapArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Dictionary"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[]>()"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        { usdcAddress, "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] { } },"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        { wmaticAddress, "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] { "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } },"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        { skyweaverAddress, "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] { skyweaverTokenId1, skyweaverTokenId2, skyweaverTokenId3 } },"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }));"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Dictionary"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TokenSupply"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[]> "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"suppliesMap"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" suppliesMapReturn.supplies;"})]})]})}),`
`,s.jsxs(e.p,{children:["Here, you can expect that ",s.jsx(e.code,{children:"suppliesMap[usdcAddress].Length = 1"})," with the TokenSupply object relating to the supply of the ERC20 token."]}),`
`,s.jsxs(e.p,{children:["Similarly, you can expect that ",s.jsx(e.code,{children:"suppliesMap[skyweaverAddress].Length = 3"})," with the TokenSupply object relating to the specified token ids."]}),`
`,s.jsxs(e.h2,{id:"get-transaction-history",children:["Get Transaction history",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-transaction-history",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To fetch the transaction history for a given account, you'll want to use the ",s.jsx(e.code,{children:"GetTransactionHistory"})," method."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"IIndexer"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" chainIndexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"GetTransactionHistoryReturn"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" history"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chainIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTransactionHistory"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GetTransactionHistoryArgs"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" TransactionHistoryFilter"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        accountAddress "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" userAccountAddress;"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    })"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"TransactionHistoryFilter"})," object allows you to specify how you want to filter your transaction history query, e.g. by account address(es), contract address(es), etc. More info ",s.jsx(e.a,{href:"/api/indexer/examples/transaction-history",children:"here"}),"."]})]})}function c(i={}){const{wrapper:e}={...r(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{c as default,a as frontmatter};
