import{d as a,j as e}from"./index-DFyFnBuw.js";const i={title:"Interacting with Tokens and Ownable Contracts - Wrappers and ABIs",description:"The content provides information on using `ERC20`, `ERC721`, and `ERC1155` wrappers of the Contract class with pre-defined ABIs for interacting with tokens."};function r(t){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"tokens",children:["Tokens",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tokens",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Since their use is so ubiquitous, we've provided ",e.jsx(n.code,{children:"ERC20"}),", ",e.jsx(n.code,{children:"ERC721"}),", and ",e.jsx(n.code,{children:"ERC1155"})," wrappers of the ",e.jsx(n.code,{children:"Contract"})," class with pre-defined ABIs for your convenience. When interacting with tokens, it is recommended to use these."]}),`
`,e.jsx(n.p,{children:"Any of these contract wrappers can be created via a standard constructor requiring only the contract address. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`ERC20 erc20 = new ERC20(contractAddress);
`})}),`
`,e.jsx(n.p,{children:"You may also provide your own ABI should you need to rewrite our default; however, doing so may require you to modify or rewrite the contract wrappers."}),`
`,e.jsx(n.p,{children:"An example of querying:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`string symbol = await erc20.Symbol(client);
BigIntegar balance = await erc20.BalanceOf(client, address);
`})}),`
`,e.jsx(n.p,{children:"An example of sending a transaction:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`TransactionReceipt receipt = await erc20.Mint(toAddress, DecimalNormalizer.NormalizeAsBigInteger(1)).SendTransactionMethodAndWaitForReceipt(wallet, client);
`})}),`
`,e.jsxs(n.p,{children:["As a wrapper of ",e.jsx(n.code,{children:"Contract"}),", you also have the option to not create the ",e.jsx(n.code,{children:"EthTransaction"})," and send later on."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`CallContractFunction transactionCreator = erc20.Transfer(toAddress, DecimalNormalizer.NormalizeAsBigInteger(1));
EthTransaction transaction = await transactionCreator.Create(client, new ContractCall(wallet.GetAddress()));
TransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);
`})}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"bonus-ownable",children:["Bonus: Ownable",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bonus-ownable",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Similar to with tokens, we have also provided an ",e.jsx(n.code,{children:"Ownable"})," wrapper for your convenience as well which has a pre-defined ABI for methods implementing the ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/2.x/access-control#ownership-and-ownable",children:"Ownable"}),` interface.
`,e.jsx(n.code,{children:"ERC20"}),", ",e.jsx(n.code,{children:"ERC721"}),", and ",e.jsx(n.code,{children:"ERC1155"})," all inherit from this, but we encourage you to use ",e.jsx(n.code,{children:"Ownable"})," whenever you wish to interact with the Ownable methods on any arbitrary contract for convenience and safety."]})]})}function s(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{s as default,i as frontmatter};
