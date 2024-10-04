import{d as r,j as e}from"./index-D0N3ZUKy.js";const o={title:"Smart Contract Interaction with SequenceEthereum Library",description:"The process of creating a Contract object for an already deployed contract is explained in detail."};function a(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"contracts",children:["Contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:["Creating a ",e.jsx(t.code,{children:"Contract"})," object for an already deployed contract is rather straightforward."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Contract contract = new Contract(contractAddress, abi);
`})}),`
`,e.jsxs(t.p,{children:["While it is not strictly required, it is ",e.jsx("i",{children:"highly"}),` recommended to provide the contract ABI as a string when creating a contract object. Failure to do so will make it so that you cannot fully take advantage of our ABI encoding and decoding.
If you do chose to go down this route, you will need to provide the entire function signature (function name + parameter types in brackets - e.g. transfer(address,uint256) for the ERC20 transfer method) when calling a function or querying the contract and you will only ever receive a string as a response to queries.`]}),`
`,e.jsxs(t.h2,{id:"calling-smart-contract-functions",children:["Calling Smart Contract Functions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#calling-smart-contract-functions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["To call a smart contract, you'll use the ",e.jsx(t.code,{children:"CallFunction"})," method to create a ",e.jsx(t.code,{children:"CallContractFunction"})," object which will determine the appropriate gasPrice, gasLimit, nonce, and data to include in a newly assembled ",e.jsx(t.code,{children:"EthTransaction"})," when provided with a client and a ",e.jsx(t.code,{children:"ContractCall"})," object to the ",e.jsx(t.code,{children:"Create"})," async Task"]}),`
`,e.jsx(t.p,{children:"An example of calling a smart contract would look like:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Contract erc20Contract = new Contract(contractAddress, contractAbi); // We'll use the well-known ERC20 contract as our example case
TransactionReceipt receipt = await erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger).SendTransactionMethodAndWaitForReceipt(wallet, client);
`})}),`
`,e.jsxs(t.p,{children:["Note: if you don't want to wait for the receipt, you can use ",e.jsx(t.code,{children:"SendTransactionMethod"})," instead."]}),`
`,e.jsxs(t.p,{children:["Alternatively, if you want to simply create the ",e.jsx(t.code,{children:"EthTransaction"})," and send it at a later time, you can use the ",e.jsx(t.code,{children:"CallContractFunction"})," object from ",e.jsx(t.code,{children:"CallFunction"})," directly."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Contract erc20Contract = new Contract(contractAddress, contractAbi); // We'll use the well-known ERC20 contract as our example case
EthTransaction transaction = await erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger).Create(client, new ContractCall(wallet.GetAddress()));
TransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);

// or 
CallContractFunction transactionCreator = erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger);
EthTransaction transaction = await transactionCreator.Create(client, new ContractCall(wallet.GetAddress()));
TransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);

// or 
CallContractFunction transactionCreator = erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger);
TransactionReceipt receipt = await transactionCreator.SendTransactionMethodAndWaitForReceipt(wallet, client);
`})}),`
`,e.jsxs(t.p,{children:["You'll notice that the ",e.jsx(t.code,{children:"CallFunction"})," method accepts an arbitrary number of arguments. You'll want to provide the arguments in the order they are provided in the ABI/function signature."]}),`
`,e.jsxs(t.h2,{id:"understanding-data-type-mappings",children:["Understanding data type mappings",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#understanding-data-type-mappings",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"When interacting with smart contracts, it is important to understand how EVM datatypes are mapped to C# datatypes in the SequenceEthereum library."}),`
`,e.jsx(t.p,{children:"bool -> bool"}),`
`,e.jsx(t.p,{children:"Integers (int, uint, int256, uint8, ...) -> BigInteger"}),`
`,e.jsx(t.p,{children:"address -> Address or string"}),`
`,e.jsx(t.p,{children:"string -> string"}),`
`,e.jsx(t.p,{children:"Fixed bytes (bytesN for any N value) -> FixedByte"}),`
`,e.jsx(t.p,{children:"bytes -> byte[]"}),`
`,e.jsx(t.p,{children:"If you were to, for example, provide a string where the ABI expects an Integer, you will receive an exception, even if that string could be converted into an integer."}),`
`,e.jsxs(t.h2,{id:"querying-contracts",children:["Querying Contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#querying-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["To query a smart contract (read data from it), you'll use the ",e.jsx(t.code,{children:"SendQuery<T>"}),` method to query the contract and return the result as type T (if possible).
An example of querying a smart contract would look like:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Contract erc20Contract = new Contract(contractAddress, contractAbi); // We'll use the well-known ERC20 contract as our example case
BigIntegar balance = await erc20Contract.SendQuery<BigIntegar>(client, "balanceOf", address);
`})}),`
`,e.jsxs(t.p,{children:["Alternatively, if you wish to simply construct the query and send it at a later time, you can use ",e.jsx(t.code,{children:"QueryContract<T>"})," to create a delegate."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Contract erc20Contract = new Contract(contractAddress, contractAbi); // We'll use the well-known ERC20 contract as our example case
QueryContractMessageSender<BigIntegar> balanceQuery = erc20Contract.QueryContract<BigIntegar>("balanceOf", address);
BigIntegar balance = await balanceQuery(client);
// or
BigIntegar balance = await balanceQuery.SendQuery(client);
`})}),`
`,e.jsxs(t.h2,{id:"deploying-contracts",children:["Deploying Contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["If you want to deploy a contract, you can use the ",e.jsx(t.code,{children:"ContractDeployer"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`ContractDeploymentResult deploymentResult = await ContractDeployer.Deploy(client, wallet, contractBytecodeAsString);
string newlyDeployedContractAddress = deploymentResult.Receipt.contractAddress;
`})})]})}function i(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{i as default,o as frontmatter};
