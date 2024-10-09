import{d as a,j as e}from"./index-BeiwWbZM.js";const o={title:"Building Transaction Heavy Games with Unity",description:"undefined"};function i(t){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"building-transaction-heavy-games-with-unity",children:["Building Transaction Heavy Games with Unity",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-transaction-heavy-games-with-unity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"intro",children:["Intro",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intro",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Unlike other forms of databases, every write to a blockchain (transaction) costs money in the form of ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/gas/",children:"gas fees"}),". When building blockchain/web3 games, gas fees should be considered. While ",e.jsx(n.a,{href:"/solutions/builder/gas-tank",children:"Sequence's gas sponsorship"})," handles much of the complexity for your end users for you, you as the game developers should still make a few considerations with respect to gas fees."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["When building your game, you should consider the ",e.jsx(n.strong,{children:e.jsx(n.em,{children:"frequency"})})," with which you submit transactions to the blockchain in order to keep runtime costs at a minimum."]})}),`
`,e.jsx(n.p,{children:"An additional complexity of working with the blockchain that doesn't exist with all forms of data storage is that writing the the blockchain database (i.e. making a transaction) is a non-instant, asynchronous operation that requires a network connection."}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsx(n.p,{children:"Transactions can fail for a variety of reasons: no internet, insufficient funds, etc."})}),`
`,e.jsx(n.p,{children:"First, you should consider which tokenizable ownerships (e.g. items, powerups, unlocks, etc.) should be tokenized on the blockchain."}),`
`,e.jsx(n.p,{children:'Next, you should consider the "kinds" of transactions your game will be making. You can likely bucket the transactions into different categories. For example, some of these categories of transactions might include: pickups (think collecting coins), crafting, trading, selling, buying, etc.'}),`
`,e.jsx(n.p,{children:"Once you've categorized each of your transactions, consider your end-user's expectations around those transactions as well as your expectations as the game developer. How much delay is acceptable from an end-user's perpective for a transaction to process? Can you assume that a transaction will succeed to give your user instantaneous feedback, and, if so, can you recover in the case that a transaction fails without negatively impacting the player or your bottom-line?"}),`
`,e.jsx(n.p,{children:"The writer of this guide often generalizes transactions as high-value or low-value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"High-value transactions"}),` typically need confirmation before providing the end-user with feedback. Transactions can fail for a number of reasons (no internet, insufficient gas, invalid assumptions, etc.). If we assume a high-value transaction will pass and give the user feedback right away then later on the transaction ends up failing, we will not be able to recover without negatively impacting the user or our bottom line. Consider, for example, an in-game storefront. If a user's "buy sword" transaction fails, we would either need to revoke the sword from their account (hurting the player experience) or lose out on the revenue from the sale (hurting the bottom line). Conveniently, most high-value transactions coincide with activities where users are usually accustumed to having a short wait time in traditional (non-blockchain) games such as storefronts, crafting, upgrading, etc.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Low-value transactions"})," can, and often should, provide user feedback right away. We do not need to wait for a transaction confirmation before the in-game feedback takes place. If the transaction does end up failing, we can easily recover without negatively impacting the player experience or our bottom line in most cases. Players will typically be accustumed to receiving instant feedback for these actions in traditional games. For example: when a user collects a coin in a platformer (or similar) they expect to see the collected coin get reflected in the UI immediately. The player is unlikely to remember their exact coin total in the following game session and/or it is unlikely to impact the developer's bottom line if they locally store the collected coins and re-submit the transaction when network issues are resolved (or similar)."]}),`
`,e.jsx(n.p,{children:"Finally, you should consider how frequently your game should be making transactions. Some games will have the user taking many actions that impact the game state in a short period of time. Imagine submitting a transaction to the blockchain every time Mario collected a coin... The costs would quickly become prohibitive, bundle those low-value transactions together!"}),`
`,e.jsxs(n.h2,{id:"how-to-implement-this-with-unity",children:["How to implement this with Unity?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-implement-this-with-unity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["First, you'll want to build a local cache of what the user has on-chain. This is easy enough to do, simply ",e.jsx(n.a,{href:"/sdk/unity/read-from-blockchain",children:"read from the blockchain"})," and locally store the user's token balances in whatever format is convenient. If you're converting an existing game or prototype from using a local storage system (like PlayerPrefs) or a remote storage system (like a ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/List_of_relational_database_management_systems",children:"RDBMS"}),") then you likely already have a local cache implemented and you may just need to build an adapter."]}),`
`,e.jsxs(n.p,{children:["Next, you'll likely want to make use of the ",e.jsx(n.code,{children:"TransactionQueuer"})," and its inheritors provided by the Unity SDK. The ",e.jsx(n.code,{children:"TransactionQueuer"}),"s are highly configurable and are designed to support the development of games where player's take many state-manipulating actions. For instance, if your game involves collecting a lot of coins (or similar) as low-value transactions, you'll likely want to make use of the ",e.jsx(n.code,{children:"PermissionedMinterTransactionQueuer"})," (assuming your ",e.jsx(n.code,{children:"mint"})," function has permissions, the default, and you are minting from a server) or the ",e.jsx(n.code,{children:"SequenceWalletTransactionQueuer"})," (if anyone can mint). Using these, you can simply queue up a bunch of transactions; these transactions will be automatically combined if possible (e.g. instead of having 'mint(amount: 5, tokenId: 11)' and 'mint(amount: 3, tokenId: 11)', these would get combined to 'mint(amount: 8, tokenId: 11)'). Then, you can have your transactions be submitted ever x seconds or whenever a function call is made but no sooner than every y seconds (overrideable for high-value transactions), etc. To learn more about working with the ",e.jsx(n.code,{children:"TransactionQueuer"}),"s, please see ",e.jsx(n.a,{href:"/sdk/unity/write-to-blockchain#transaction-queuers",children:"this doc"}),"."]}),`
`,e.jsx(n.p,{children:"Finally, you'll want to check for failures in your transactions and handle the errors appropriately."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (transactionReturn "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"is"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FailedTransactionReturn"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Handle the failed transaction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(n.h2,{id:"example",children:["Example",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For an example of these concepts in action in our Unity SDK, please checkout our ",e.jsx(n.a,{href:"http://localhost:5173/guides/jelly-forest-unity-guide#5-mint-in-game-tokens-to-the-players-inventory",children:"Jelly Forest Guide"})," and ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/tree/master/Scripts",children:"sample code"}),"."]})]})}function r(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{r as default,o as frontmatter};
