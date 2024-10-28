import{d as a,j as e}from"./index-wOmEfqkn.js";const s={title:"SequenceEthereum - A Guide to Advanced Blockchain Interactions for Unity Developers",description:"For experienced developers on EVM-based blockchains, our lightweight Ethereum library, SequenceEthereum, tailored for Unity, offers essential tools without the complexity of popular libraries like Nethereum."};function i(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"advanced-blockchain-interactions",children:["Advanced Blockchain Interactions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced-blockchain-interactions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.h2,{id:"introduction",children:["Introduction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["For advanced users with experience developing applications on EVM-based blockchains, we've provided our own lightweight, custom-made for Unity, Ethereum library: ",e.jsx(t.a,{href:"https://github.com/0xsequence/sequence-unity/tree/master/Assets/SequenceSDK/Ethereum",children:"SequenceEthereum"}),`.
SequenceEthereum should provide everything you need to build your Unity app on the EVM, without all the extra bells and whistles that the popular `,e.jsx(t.a,{href:"https://github.com/Nethereum/Nethereum",children:"Nethereum"})," library provides."]}),`
`,e.jsxs(t.p,{children:['While SequenceEthereum is heavily tested, in general, when working with asynchronous methods in the library, you should consider them to be "unsafe", in that they ',e.jsx("i",{children:"may"}),` throw Exceptions when used improperly.
In general, wrapping async calls that can potentially throw Exceptions in try catch blocks is a best practice; particularly in Unity, where `,e.jsx(t.code,{children:"Tasks"})," can fail silently when throwing exceptions - making debugging difficult when not wrapping calls in try catch blocks."]}),`
`,e.jsxs(t.h3,{id:"important-components",children:["Important Components",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#important-components",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:'When working with the SequenceEthereum library it can be helpful to understand some of the main "components" and how they logically fit together.'}),`
`,e.jsxs(t.h4,{id:"client",children:["Client",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#client",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Clients handle the connection to blockchain networks, making various RPC requests. Any time you wish to query the blockchain or submit a transaction, you will need a client. As a rule of thumb, if a method requires a client, you should expect that you will be making a web request and will need to work with async tasks and be prepared to catch any exceptions that are thrown."}),`
`,e.jsxs(t.h4,{id:"sequencewalletiwallet",children:["Sequence.Wallet.IWallet",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequencewalletiwallet",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"A wallet keeps track of its own private/public key pair and address and is responsible for providing its private key to the signer when signing transactions."}),`
`,e.jsxs(t.h4,{id:"transaction",children:["Transaction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["A transaction, as implemented in ",e.jsx(t.code,{children:"EthTransaction"}),", contains all the data and parameters for an EVM transaction. The object is used for initiating its ",e.jsx(t.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"RLP encoding"})," (transactions must be signed and RLP encoded when submitted)."]}),`
`,e.jsxs(t.p,{children:["Note that all transactions are encoded with a chain id included to protect against replay attacks, see ",e.jsx(t.a,{href:"https://eips.ethereum.org/EIPS/eip-155",children:"EIP-155"}),"."]}),`
`,e.jsxs(t.h4,{id:"contract",children:["Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"A contract is responsible for creating transactions (for method calls) and messages (for queries) agaisnt it. These transactions are later signed by the wallet and submitted (along with query messages) using a client."})]})}function o(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,s as frontmatter};
