import{d as a,j as e}from"./index-91LSPTZq.js";const r={title:"Updating Sequence Wallet Configuration with MainModuleUpgradable",description:"This content explains how Sequence wallets are implemented using modules and how the wallet configuration can be updated."};function n(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"modules--wallet-update",children:["Modules & wallet update",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modules--wallet-update",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Sequence modules are the underlying program implementation of the wallets; wallets can change modules at runtime."}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"MainModule"})," is the initial module of every Sequence wallet; it differs from the other modules because it doesn't store the set of signers on contract storage; it uses the ",e.jsx(s.a,{href:"solutions/technical-references/wallet-contracts/03-wallet-factory#deploy",children:"salt"})," provided to the Factory contract."]}),`
`,e.jsxs(s.h2,{id:"wallet-implementation",children:["Wallet implementation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-implementation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Sequence modules can be assigned to wallets either by the factory or by updating it after the initial deployment. Only one module can be assigned to a wallet at a time."}),`
`,e.jsxs(s.h3,{id:"_updateconfiguration",children:["_updateConfiguration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#_updateconfiguration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"updateImplementation"})," allows to update the underlying implementation of the wallet proxy. This implementation contains all the core code that defines the wallet's behaviour."]}),`
`,e.jsxs(s.aside,{"data-callout":"warning",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"Dangerous operation"}),e.jsxs(s.p,{children:["Calling ",e.jsx(s.code,{children:"updateImplementation"})," with an invalid implementation will result in the corruption of the wallet."]}),e.jsx(s.p,{children:"Corrupt wallets may lead to the loss of funds."})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" updateImplementation"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _implementation"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" override"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" onlySelf"})]})]})}),`
`,e.jsxs(s.h4,{id:"parameters",children:["Parameters:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_implementation"}),e.jsx(s.td,{children:"address"}),e.jsx(s.td,{children:"Address of the new wallet implementation."})]})})]}),`
`,e.jsxs(s.p,{children:["This method has the ",e.jsx(s.code,{children:"onlySelf"})," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."]}),`
`,e.jsxs(s.h3,{id:"reading-current-implementation",children:["Reading current implementation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reading-current-implementation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The wallet implementation is stored on the contract storage slot defined by the address of the wallet itself. Given that every wallet has a unique address, the implementation slot varies from wallet to wallet."}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {AbiCoder} "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ethers"'})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const address = "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x596af90cecdbf9a768886e771178fd5561dd27ab"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const provider = new ethers.providers.JsonRpcProvider("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"http://localhost:8545"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Read storage slot address(address)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const slot = await provider.getStorageAt(address, AbiCoder.defaultAbiCoder().encode(["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'address'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"], [address]))"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Decode bytes32 as address value"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const implementation = AbiCoder.defaultAbiCoder().decode(["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'address'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"], slot)[0]"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console.log(implementation)"})})]})}),`
`,e.jsxs(s.h2,{id:"wallet-configuration-validation",children:["Wallet configuration validation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-configuration-validation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"Fixed configuration"}),e.jsxs(s.p,{children:["Signer's configuration on wallets using ",e.jsx(s.code,{children:"MainModule"})," can't be changed. The only way to change the set of signers or threshold is by updating the module of the wallet."]})]}),`
`,e.jsxs(s.p,{children:["All sequence modules must implement the ",e.jsx(s.code,{children:"ModuleAuth"})," interface, this interface allows the rest of the module to validate signatures for the wallet. In the case of ",e.jsx(s.code,{children:"MainModule"})," this interface is implemented as a counter-factual validation of hash passed to the factory during the contract wallet creation."]}),`
`,e.jsxs(s.h3,{id:"_isvalidimage",children:["_isValidImage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#_isvalidimage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" _isValidImage"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _imageHash"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"internal"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" override"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" view"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bool"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _isValid)"})]})]})}),`
`,e.jsxs(s.p,{children:["Validates if the provided ",e.jsx(s.code,{children:"imageHash"})," corresponds to the one configured in the wallet. This function is called internally to validate transaction and message signatures."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"imageHash"})," is a hash of the wallet configuration, which contains the wallet's threshold, signers and weights."]}),`
`,e.jsxs(s.h4,{id:"parameters-1",children:["Parameters:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_imageHash"}),e.jsx(s.td,{children:"bytes32"}),e.jsx(s.td,{children:"Hash of wallet configuration to be validated."})]})})]}),`
`,e.jsxs(s.h4,{id:"return-values",children:["Return Values:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#return-values",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_isValid"}),e.jsx(s.td,{children:"bool"}),e.jsxs(s.td,{children:["True if the given ",e.jsx(s.code,{children:"imageHash"})," corresponds to the current wallet configuration."]})]})})]}),`
`,e.jsxs(s.h2,{id:"mainmoduleupgradeable",children:["MainModuleUpgradeable",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mainmoduleupgradeable",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"MainModuleUpgradable"})," is a module that mimics the behaviour of the ",e.jsx(s.code,{children:"MainModule"})," but allows the wallet configuration to be updated."]}),`
`,e.jsxs(s.h3,{id:"updateimagehash",children:[e.jsx(s.code,{children:"updateImageHash"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#updateimagehash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Updates the wallet ",e.jsx(s.code,{children:"imageHash"}),", this is the hash that defines the wallet configuration (signers, weights, threshold)."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" updateImageHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _imageHash"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" override"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" onlySelf"})]})]})}),`
`,e.jsxs(s.h4,{id:"parameters-2",children:["Parameters:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"_imageHash"}),e.jsx(s.td,{children:"bytes32"}),e.jsx(s.td,{children:"Hash of the new configuration for the wallet."})]})})]}),`
`,e.jsxs(s.div,{children:[e.jsx(s.p,{children:"Unsanitized input"}),e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"imageHash"})," is not validated, it is the responsibility of the caller to ensure that the hash is correct. Reasons for incorrect hashes include:"]}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The combined weight of the signers is below the threshold."}),`
`,e.jsx(s.li,{children:"The signers are not valid addresses."}),`
`,e.jsx(s.li,{children:"The signers are smart contract wallets without proper support for EIP-1271."}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:"imageHash"})," doesn't correspond to any wallet configuration (may be a random string)."]}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:"imageHash"})," corresponds to an unknown wallet configuration."]}),`
`]}),e.jsxs(s.p,{children:["In any of this cases the wallet will be ",e.jsx(s.strong,{children:"rendered unusable"}),"."]})]}),`
`,e.jsxs(s.p,{children:["This method has the ",e.jsx(s.code,{children:"onlySelf"})," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."]}),`
`,e.jsxs(s.h2,{id:"first-configuration-update",children:["First configuration update",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#first-configuration-update",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["When Sequence wallets are created, the factory contract doesn't call an ",e.jsx(s.code,{children:"initialize"})," function. The configuration is instead defined by the ",e.jsx(s.code,{children:"salt"})," provided to the factory, the ",e.jsx(s.code,{children:"MainModule"})," then checks the counterfactual validity of all signatures against the wallet address."]}),`
`,e.jsxs(s.p,{children:["This means there is no direct way to update the configuration of a wallet while still using the ",e.jsx(s.code,{children:"MainModule"}),". Given that the first configuration update needs to also change the wallet implementation to the ",e.jsx(s.code,{children:"MainModuleUpgradable"}),", the ",e.jsx(s.code,{children:"MainModule"})," is updated to the ",e.jsx(s.code,{children:"MainModuleUpgradable"})," and the ",e.jsx(s.code,{children:"updateImageHash"})," method is called to update the wallet configuration."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transactions"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    delegateCall: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    revertOnError: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    to: wallet,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data: walletInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      walletInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getFunction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'updateImplementation'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), ["}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:".context.mainModuleUpgradable]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ),"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    value: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    gasLimit: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    delegateCall: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    revertOnError: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    to: wallet,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data: mainModuleInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      mainModuleInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getFunction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'updateImageHash'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), [newImageHash]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ),"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    value: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    gasLimit: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})}),`
`,e.jsxs(s.h4,{id:"delegatecall-false",children:["delegateCall: false",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#delegatecall-false",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"delegateCall"})," is used to extend the wallet functionality beyond what's allowed by the module. In this case the called methods are defined on the modules themselves, so there is no need to use ",e.jsx(s.code,{children:"delegateCall"}),"."]}),`
`,e.jsxs(s.h4,{id:"revertonerror-true",children:["revertOnError: true",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#revertonerror-true",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"revertOnError"})," is used to revert the whole transaction bundle if a transaction flagged by it fails. In this case the operation should be atomic given that a partial wallet configuration update ",e.jsx(s.strong,{children:"will"})," render the wallet unusable."]}),`
`,e.jsxs(s.h4,{id:"to-wallet",children:["to: wallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#to-wallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The methods being called are defined on the wallet itself, but need to be called externally, so the ",e.jsx(s.code,{children:"to"})," address is the wallet itself."]}),`
`,e.jsxs(s.h4,{id:"value-ethersconstantszero",children:["value: ethers.constants.Zero",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#value-ethersconstantszero",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"value"})," of the transaction is always zero, since the transaction is a self-referencing transaction and doesn't require transferring funds."]}),`
`,e.jsxs(s.h4,{id:"gaslimit-ethersconstantszero",children:["gasLimit: ethers.constants.Zero",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gaslimit-ethersconstantszero",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"gasLimit"})," of the transaction is always zero, since it represents an unlimited amount of gas."]}),`
`,e.jsxs(s.aside,{"data-callout":"warning",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"Dangerous operation"}),e.jsxs(s.p,{children:["When the wallet is first updated to the ",e.jsx(s.code,{children:"MainModuleUpgradable"})," it doesn't have a valid ",e.jsx(s.code,{children:"imageHash"})," yet. It's imperative that the ",e.jsx(s.code,{children:"imageHash"}),` is updated before the transaction bundle finishes executing.
If the `,e.jsx(s.code,{children:"imageHash"})," is not updated before the transaction bundle finishes executing, the wallet will be rendered unusable."]}),e.jsx(s.p,{children:"For this reason the following considerations should be taken when updating the wallet for the first time:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["All transactions should be marked ",e.jsx(s.code,{children:"revertOnError = true"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"updateImplementation"})," and ",e.jsx(s.code,{children:"updateImageHash"})," should both be declared on the same transaction bundle."]}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:"gasLimit"})," of both transactions should be set to unlimited (",e.jsx(s.code,{children:"0"}),")."]}),`
`]})]}),`
`,e.jsxs(s.h3,{id:"subsequent-configuration-updates",children:["Subsequent configuration updates",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#subsequent-configuration-updates",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Once the wallet is updated to the ",e.jsx(s.code,{children:"MainModuleUpgradable"})," it can be updated by calling the ",e.jsx(s.code,{children:"updateImageHash"})," method, without any additional transaction."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" transactions"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    delegateCall: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    revertOnError: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    to: wallet,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data: mainModuleInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      mainModuleInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getFunction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'updateImageHash'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), [newImageHash]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ),"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    value: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    gasLimit: ethers.constants.Zero,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})}),`
`,e.jsxs(s.h3,{id:"retrieving-the-current-configuration",children:["Retrieving the current configuration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-the-current-configuration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If the wallet is updated to the ",e.jsx(s.code,{children:"MainModuleUpgradable"})," it can be queried for the current configuration by calling the ",e.jsx(s.code,{children:"getImageHash"})," method."]}),`
`,e.jsx(s.p,{children:"This method should return the wallet's current configuration hash, which can be compared to a list of known wallet configurations to find the correct one."}),`
`,e.jsxs(s.h4,{id:"retrieving-the-wallet-configuration",children:["Retrieving the wallet configuration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-the-wallet-configuration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"imageHash"})," method returns ",e.jsx(s.code,{children:"bytes32(0)"})," if the wallet is not yet updated to the ",e.jsx(s.code,{children:"MainModuleUpgradable"}),`.
In this case the wallet is in a counter-factual state and the `,e.jsx(s.code,{children:"imageHash"})," can't be directly queried."]}),`
`,e.jsx(s.p,{children:"This is also the case for non-deployed wallets."}),`
`,e.jsxs(s.p,{children:["To find the ",e.jsx(s.code,{children:"imageHash"})," of a non-deployed or non-updated wallet, a candidate known ",e.jsx(s.code,{children:"imageHash"})," needs to be compared against the wallet address."]}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"/solutions/technical-references/internals/v1/wallet-configuration",children:"Compute wallet address"}),"."]})]})}function t(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{t as default,r as frontmatter};
