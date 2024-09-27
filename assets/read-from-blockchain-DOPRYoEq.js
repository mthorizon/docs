import{d as t,j as e}from"./index-DFyFnBuw.js";const i={title:"Blockchain Data Retrieval with Unity-Native Sequence Indexer",description:"To read data from the blockchain, use the Unity-Native implementation of the Sequence Indexer. Create a ChainIndexer instance to access all functionalities of the IIndexer interface."};function s(a){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"read-from-blockchain",children:["Read from Blockchain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#read-from-blockchain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Reading from the blockchain is done using Unity-Native implementation of our ",e.jsx(n.a,{href:"/api/indexer/overview",children:"Sequence Indexer"}),"."]}),`
`,e.jsxs(n.p,{children:["We recommend creating an instance of the ",e.jsxs(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Indexer/ChainIndexer.cs",children:[e.jsx(n.code,{children:"ChainIndexer"})," class"]}),". This will expose you to all the functionality offered by the ",e.jsxs(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/Indexer/IIndexer.cs",children:[e.jsx(n.code,{children:"IIndexer"})," interface"]}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer polygonIndexer = new ChainIndexer(Chain.Polygon);
`})}),`
`,e.jsxs(n.p,{children:["You can check if the indexer API for your given chain is up and running using the ",e.jsx(n.code,{children:"Ping"})," async Task. This can be useful if a request is failing. During development, you can also check the status of our indexers on ",e.jsx(n.a,{href:"https://status.sequence.info/",children:"our status page"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
bool indexerIsWorking = await chainIndexer.Ping();
`})}),`
`,e.jsxs(n.h2,{id:"get-balance",children:["Get Balance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-balance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To check the Ether (or whatever your network's default gas currency is) balance of a user, use the ",e.jsx(n.code,{children:"GetEtherBalance"})," async Task."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
EtherBalance balance = await chainIndexer.GetEtherBalance(address);
BigInteger balanceInWei = balance.balanceWei;
`})}),`
`,e.jsxs(n.h2,{id:"get-token-balances",children:["Get Token Balances",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-balances",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To fetch the token balances for a user you'll want to use the ",e.jsx(n.code,{children:"GetTokenBalances"})," async Task."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
GetTokenBalancesReturn balances = await chainIndexer.GetTokenBalances(new GetTokenBalancesArgs(address));
TokenBalance[] tokenBalances = balances.balances;
`})}),`
`,e.jsx(n.p,{children:"When fetched this way, you will only receive one token instance for each smart contract. Fetching, without specifying the address, is useful to determine which contracts your player owns tokens from and which ERC20s they have in their wallet."}),`
`,e.jsxs(n.p,{children:["To fetch individual balances for ERC721 or ERC1155 tokens, you'll want to specify the contract in your ",e.jsx(n.code,{children:"GetTokenBalancesArgs"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
GetTokenBalancesReturn balances = await chainIndexer.GetTokenBalances(new GetTokenBalancesArgs(userAddress, contractAddress));
TokenBalance[] tokenBalances = balances.balances;
`})}),`
`,e.jsxs(n.p,{children:["If the player has many tokenIds for a given contract (or owns tokens from many contracts), you'll have to deal with pagination. In this case, you'll want to check the ",e.jsx(n.code,{children:"Page"})," you receive in your ",e.jsx(n.code,{children:"GetTokenBalancesReturn"})," to see if it has more and then if it does make another request, including the Page."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
GetTokenBalancesReturn balances = await chainIndexer.GetTokenBalances(new GetTokenBalancesArgs(userAddress, contractAddress));
List<TokenBalance> finalResult = new List<TokenBalance>();
TokenBalance[] tokenBalances = balances.balances;
AddItemsFromArrayToList(tokenBalances, finalResult);
while (tokenBalances.page.more) {
    tokenBalances = await GetTokenBalances(new GetTokenBalancesArgs(accountAddress, contractAddress, tokenBalances.page));
    AddItemsFromArrayToList(tokenBalances, finalResult);
}
`})}),`
`,e.jsxs(n.p,{children:["To simplify this operation, we've created a wrapper ",e.jsx(n.code,{children:"GetTokenBalancesOrganizedInDictionary"}),". This will fetch all of the TokenBalances for a given contractAddress and userAccountAddress and organize them into a Dictionary mapping tokenID (BigInteger) to TokenBalance. In general, you'll want to use this most often."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
Dictionary<BigInteger, TokenBalance> tokenBalancesDictionary = await chainIndexer.GetTokenBalancesOrganizedInDictionary(accountAddress, contractAddress);
`})}),`
`,e.jsx(n.p,{children:"This will make checking the respective balance for each token id much easier as well."}),`
`,e.jsxs(n.h2,{id:"get-token-supplies",children:["Get Token Supplies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-supplies",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If you need to fetch the total token supply for a given smart contract, you can use the ",e.jsx(n.code,{children:"GetTokenSupplies"})," async Task."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
GetTokenSuppliesReturn tokenSupplies = await chainIndexer.GetTokenSupplies(new GetTokenSuppliesArgs(contractAddress))
`})}),`
`,e.jsx(n.p,{children:"We don't expect this to be a very common operation, but it is exposed for you just in case you need it."}),`
`,e.jsxs(n.h3,{id:"get-token-supplies-map",children:["Get Token Supplies Map",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-token-supplies-map",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.code,{children:"GetTokenSupplies"})," power users, we also provide a ",e.jsx(n.code,{children:"GetTokenSuppliesMap"})," async Task that allows you to fetch the supplies for multiple token contracts and token ids in a map."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer indexer = new ChainIndexer(Chain.Polygon);
string usdcAddress = "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359".ToLower();
string wmaticAddress = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270".ToLower();
string skyweaverAddress = "0x631998e91476da5b870d741192fc5cbc55f5a52e".ToLower();
string skyweaverTokenId1 = "68657";
string skyweaverTokenId2 = "66669";
string skyweaverTokenId3 = "66668";
GetTokenSuppliesMapReturn suppliesMapReturn = await indexer.GetTokenSuppliesMap(new GetTokenSuppliesMapArgs(
    new Dictionary<string, string[]>()
    {
        { usdcAddress, new string[] { } },
        { wmaticAddress, new string[] { "0" } },
        { skyweaverAddress, new string[] { skyweaverTokenId1, skyweaverTokenId2, skyweaverTokenId3 } },
    }));
Dictionary<string, TokenSupply[]> suppliesMap = suppliesMapReturn.supplies;
`})}),`
`,e.jsxs(n.p,{children:["Here, you can expect that ",e.jsx(n.code,{children:"suppliesMap[usdcAddress].Length = 1"})," with the TokenSupply object relating to the supply of the ERC20 token."]}),`
`,e.jsxs(n.p,{children:["Similarly, you can expect that ",e.jsx(n.code,{children:"suppliesMap[skyweaverAddress].Length = 3"})," with the TokenSupply object relating to the specified token ids."]}),`
`,e.jsxs(n.h2,{id:"get-transaction-history",children:["Get Transaction history",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-transaction-history",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To fetch the transaction history for a given account, you'll want to use the ",e.jsx(n.code,{children:"GetTransactionHistory"})," method."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`IIndexer chainIndexer = new ChainIndexer(chain);
GetTransactionHistoryReturn history = await chainIndexer.GetTransactionHistory(
    new GetTransactionHistoryArgs(new TransactionHistoryFilter()
    {
        accountAddress = userAccountAddress;
    })
);
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"TransactionHistoryFilter"})," object allows you to specify how you want to filter your transaction history query, e.g. by account address(es), contract address(es), etc. More info ",e.jsx(n.a,{href:"/api/indexer/examples/transaction-history",children:"here"}),"."]})]})}function c(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{c as default,i as frontmatter};
