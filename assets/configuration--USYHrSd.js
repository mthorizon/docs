import{d as l,j as e}from"./index-CtKkAyG2.js";const a={title:"Sequence Wallet Configuration Parameters",description:'The "Wallet Configuration" in Sequence Wallets defines access control, signers, and signature weight.'};function n(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"wallet-configuration",children:["Wallet Configuration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-configuration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:'In the context of Sequence Wallets, the "Wallet Configuration" is a set of parameters that defines the behavior of the wallet, primarily used to define the access control of the wallet, meaning who can sign transactions and how many signatures are needed.'}),`
`,e.jsxs(s.h2,{id:"top-level-properties",children:["Top level properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#top-level-properties",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Sequence v2 configurations contain the following 3 properties:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"threshold"}),' - The required "weight sum" needed for a signature to be considered valid.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"checkpoint"})," - Used as a salt and ordering mechanism for wallet updates."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tree"})," - Determines the signers and their weights for the wallet."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"threshold",children:["Threshold",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#threshold",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"threshold"})," is a ",e.jsx(s.code,{children:"uint16"}),"; it can have any value between 0 and 65535. Signatures are only considered valid or invalid if the sum of the weights of the signers that signed the transaction is greater or equal to the threshold."]}),`
`,e.jsxs(s.h3,{id:"checkpoint",children:["Checkpoint",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checkpoint",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"checkpoint"})," is a ",e.jsx(s.code,{children:"uint32"}),". During wallet creation, a semi-random value can be provided to generate independent wallets with the same initial configuration. Then, during normal operation, the ",e.jsx(s.code,{children:"checkpoint"})," is used by Light State Sync to ensure that wallet updates are applied in the correct order."]}),`
`,e.jsxs(s.h3,{id:"tree",children:["Tree",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tree",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"tree"})," is an unbalanced binary Merkle tree, where each leaf may contain a signer, a static signature, or a subtree. The tree can represent any combination of signers and weights and can be used to create complex multi-signature wallets."]}),`
`,e.jsx(s.p,{children:"The possible leaf types are:"}),`
`,e.jsxs(s.h4,{id:"signer",children:["Signer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Signers are represented by a signer ",e.jsx(s.code,{children:"address"})," and a ",e.jsx(s.code,{children:"uint8"}),` weight. The weight is how much the signer contributes to the threshold.
The address can belong to either an `,e.jsx(s.code,{children:"ERC1271"})," compliant contract or an ",e.jsx(s.code,{children:"EOA"})," wallet."]}),`
`,e.jsx(s.p,{children:"The leaf hash is calculated as follows:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(weight) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<<"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 160"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint160"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(addr)))"})]})})}),`
`,e.jsxs(s.h4,{id:"subdigest",children:["Subdigest",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#subdigest",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["This represents a static subdigest for which any signature is valid. If a signature for this subdigest is provided, the total weight of the signature is automatically set to ",e.jsx(s.code,{children:"Infinity"}),"."]}),`
`,e.jsx(s.p,{children:'Notice static subdigests that exist within nested trees will have their "Infinity" weight reduced to the weight of the nested tree.'}),`
`,e.jsx(s.p,{children:"The leaf hash is calculated as follows:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"keccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Sequence static digest:\\n'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", subdigest));"})]})})}),`
`,e.jsxs(s.h4,{id:"subtree-nested-configuration",children:["Subtree (nested configuration)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#subtree-nested-configuration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:'This represents a whole new wallet configuration, this "nested configuration" has its own:'}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["External ",e.jsx(s.code,{children:"weight"})," (",e.jsx(s.code,{children:"uint8"}),")"]}),`
`,e.jsxs(s.li,{children:["Internal ",e.jsx(s.code,{children:"threshold"})," (",e.jsx(s.code,{children:"uint16"}),")"]}),`
`,e.jsxs(s.li,{children:["Internal ",e.jsx(s.code,{children:"tree"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The way it works is that if a signature reaches the ",e.jsx(s.code,{children:"internal threshold"})," within the subtree it is considered valid, and the ",e.jsx(s.code,{children:"external weight"})," is added to the parent tree. Any number of nested configurations can be created, and it is possible to create multiple nesting levels."]}),`
`,e.jsx(s.p,{children:"This pattern can be used, among other things, to express the following scenarios:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Non-linear weight distribution, A and B signers can provide 1 weight each, but together they can provide 3 weight."}),`
`,e.jsx(s.li,{children:"Limited total weight contribution, A, B, and C signers can provide 1 weight each, but together they can only provide 2 weight."}),`
`,e.jsx(s.li,{children:'"Department configurations", N departments are required to sign, and each department has its own inner configuration.'}),`
`]}),`
`,e.jsx(s.p,{children:"The leaf hash is calculated as follows:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"keccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'Sequence nested config:\\n'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"  imageHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tree),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  threshold,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  weight"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"))"})})]})}),`
`,e.jsxs(s.aside,{"data-callout":"warning",children:[e.jsx(s.p,{children:"The wallet contracts have no way of validating the correctness of the configuration, the responsibility of ensuring the configuration is correct is on the SDKs interacting with the contracts."}),e.jsxs(s.p,{children:["Things like ",e.jsx(s.code,{children:"threshold == 0"})," or ",e.jsx(s.code,{children:"threshold > total weight"})," will result in fully unauthenticated wallets or inaccessible wallets respectively."]})]}),`
`,e.jsxs(s.h2,{id:"imagehash",children:["ImageHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#imagehash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"configuration"})," is never stored as a whole; instead, the Merkle tree is hashed into a single ",e.jsx(s.code,{children:"bytes32"})," value, this is internally called the ",e.jsx(s.code,{children:"imageHash"})," of the configuration."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"imageHash"})," is calculated as follows:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"imageHash "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" keccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encode"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  keccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encode"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    hashTree"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tree),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    threshold"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  )),"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  checkpoint"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"))"})})]})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"hashTree"})," function is a recursive function that hashes the tree into a single ",e.jsx(s.code,{children:"bytes32"})," value, pseudo code for the ",e.jsx(s.code,{children:"hashTree"})," function is as follows:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" hashTree"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"node"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Node"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Leaf"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isSignerLeaf"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node)) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"solidityPackedKeccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'uint96'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'address'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      [node.weight, node.address]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isSubdigestLeaf"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node)) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"solidityPackedKeccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'string'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'bytes32'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Sequence static digest:"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\n"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", node.subdigest]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isNestedLeaf"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node)) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nested"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" hashTree"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node.tree)"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"solidityPackedKeccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'string'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'bytes32'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'uint256'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'uint256'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Sequence nested config:"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\n"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", nested, node.threshold, node.weight]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"solidityPackedKeccak256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'bytes32'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'bytes32'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ["}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"hashTree"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node.left), "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"hashTree"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(node.right)]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h2,{id:"initial-configuration",children:["Initial Configuration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initial-configuration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:['All Sequence Wallets have an "initial configuration", implemented by using the ',e.jsx(s.code,{children:"imageHash"})," of the initial configuration as the SALT during the ",e.jsx(s.code,{children:"CREATE2"})," deployment of the wallet."]}),`
`,e.jsxs(s.p,{children:["Wallets are deployed by calling the ",e.jsx(s.code,{children:"deploy"})," function of the ",e.jsx(s.code,{children:"Factory"})," contract, which takes the following parameters:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"mainModule"}),": The address of the initial code implementation of the wallet."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"salt"}),": The ",e.jsx(s.code,{children:"imageHash"})," of the initial configuration."]}),`
`]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"MainModule"})," should always be used as the initial code implementation of the wallet. The ",e.jsx(s.code,{children:"MainModule"})," validates the ",e.jsx(s.code,{children:"imageHash"})," (during signature validation) by re-computing the counterfactual address of the wallet, hence it does not require any storage initialization."]}),e.jsxs(s.p,{children:["If the ",e.jsx(s.code,{children:"imageHash"})," is ever changed, ",e.jsx(s.code,{children:"MainModule"})," will automatically replace the wallet code implementation with ",e.jsx(s.code,{children:"MainModuleUpgradeable"}),", while handling the storage initialization."]})]})]})}function d(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{d as default,a as frontmatter};
