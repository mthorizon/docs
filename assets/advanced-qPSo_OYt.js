import{d as i,j as e}from"./index-BNFG-0VQ.js";const t={title:"Sequence - Web3 Gaming Platform - Unreal SDK Advanced Blockchain Interactions",description:"Documentation for Unreal SDK advanced blockchain interactions for the Sequence infrastructure stack for web3 gaming."};function r(n){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"advanced-blockchain-interactions",children:["Advanced Blockchain Interactions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced-blockchain-interactions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Most users of the Sequence SDK will not need to interact with cryptographic functions directly."}),`
`,e.jsxs(s.h2,{id:"binary-data",children:["Binary Data",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binary-data",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["We encapsulate binary data using the ",e.jsx(s.code,{children:"FBinaryData"})," structs, which is a wrapper around a pointer to a shared byte array ",e.jsx(s.code,{children:"TSharedPtr<TArray<uint8>>"}),". Binary data is further subtyped into ",e.jsx(s.code,{children:"FUnsizedData"}),", which represents data of any variable size, and ",e.jsx(s.code,{children:"TSizedData<TSize>"}),", which represents data of a required byte length ",e.jsx(s.strong,{children:"TSize"}),"."]}),`
`,e.jsxs(s.p,{children:["Important cryptographic types of set size, such as 32-byte private keys, are defined as subtypes of TSizedData- for example, we define ",e.jsx(s.code,{children:"FPrivateKey : TSizedData<32>"}),". These can also be loaded from hex strings using ",e.jsx(s.code,{children:"From(FString Str)"}),", such as ",e.jsx(s.code,{children:'FPrivateKey::From("0x0...0");'}),". Ensure that the input string is the correct size."]}),`
`,e.jsxs(s.h2,{id:"the-abi",children:["The ABI",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-abi",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To call contracts on the blockchain, you will need to encode any data you wish to pass as arguments using the ",e.jsx(s.strong,{children:"ABI"}),". To read more about the ABI and its specification, check out the ",e.jsxs(s.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:[e.jsx(s.em,{children:"solidity"})," docs"]}),"."]}),`
`,e.jsxs(s.p,{children:["Our ABI implementation centers around the ABI class in ",e.jsx(s.code,{children:"ABI/ABI.h"}),", which provides functions to convert the following types: ",e.jsx(s.strong,{children:"UInt32"}),", ",e.jsx(s.strong,{children:"Int32"}),", ",e.jsx(s.strong,{children:"Bool"}),", ",e.jsx(s.strong,{children:"FAddress"}),", and ",e.jsx(s.strong,{children:"FString"}),". Any other data may be transformed directly into ",e.jsx(s.strong,{children:"TFixedABIArray"})," or ",e.jsx(s.strong,{children:"TDynamicABIArray"})," for fixed-length and dynamic length arrays respectively, or to ",e.jsx(s.strong,{children:"TFixedABIData"})," and ",e.jsx(s.code,{children:"TDynamicABIData"})," for fixed-length and dynamic length binary data."]}),`
`,e.jsxs(s.p,{children:["Once you have your data stored in ",e.jsx(s.strong,{children:"ABIEncodeable"})," types, you can provide the ABI an array of the type ",e.jsx(s.code,{children:"TArray<ABIEncodeable*>"})," to ",e.jsx(s.code,{children:"ABI::Encode"})," to receive the binary encoding of the arguments. See `",e.jsx(s.strong,{children:"TestABI.cpp"})," for an example."]}),`
`,e.jsxs(s.h2,{id:"cryptographic-functions",children:["Cryptographic Functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-functions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Eth/Crypto.h"})," provides some important ethereum functions for interacting directly with the blockchain:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Derives a public key from a private key"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FPublicKey"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetPublicKey"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FPrivateKey"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" PrivateKey"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Derives an address from the public key"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FAddress"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FPublicKey"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" PublicKey"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Finds a keccak hash for some binary data"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FHash256"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetKeccakHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FBinaryData"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" &"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Data"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Derives contract address from a given sending address and nonce"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FAddress"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetContractAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FAddress"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Sender"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FBlockNonce"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Nonce"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,e.jsxs(s.h2,{id:"raw-ethereum-transactions",children:["Raw Ethereum Transactions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#raw-ethereum-transactions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"EthTransaction.h"})," contains a struct designed for managing raw ethereum transactions, including functions to sign and hash them. Note that transactions should usually be handled via the Sequence wallet interface, which sends the transactions via the Sequence WAAS."]})]})}function c(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default,t as frontmatter};
