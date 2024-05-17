import{d as i,j as e,e as l}from"./index-D8DPLjRq.js";import"./HomePage.css.js.vanilla-l0sNRNKZ.js";const t={title:"Create an Order via Blockexplorer",description:"undefined"};function r(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"create-an-order-via-blockexplorer",children:["Create an Order via Blockexplorer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-an-order-via-blockexplorer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["All transactions run through a contract at address ",e.jsx(s.code,{children:"0xB537a160472183f2150d42EB1c3DD6684A55f74c"})," on all currently offered networks:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"polygon"}),`
`,e.jsx(s.li,{children:"mumbai"}),`
`,e.jsx(s.li,{children:"arbitrum-sepolia"}),`
`,e.jsx(s.li,{children:"avalanche"}),`
`,e.jsx(s.li,{children:"avalanche-testnet"}),`
`]}),`
`,e.jsx(l,{type:"info",children:e.jsxs(s.p,{children:[`The following transactions require a logged in sequence session, more on how
to accomplish this
`,e.jsx(s.a,{href:"/solutions/wallets/universal-wallet/examples/connect-wallet",children:"here"})]})}),`
`,e.jsxs(s.h2,{id:"create-a-request-via-blockexplorer",children:["Create a Request via Blockexplorer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-request-via-blockexplorer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["In the Sequence Market protocol, a request is simply creating a listing. In this example, we'll leverage a blockexplorer to call the marketplace contract method ",e.jsx(s.code,{children:"createRequest"})," to create an order for a given token."]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["First, we need to go to the contract address on a blockexplorer for a supported chain. For this example, we'll use ",e.jsx(s.a,{href:"https://sepolia.etherscan.io/address/0xB537a160472183f2150d42EB1c3DD6684A55f74c#writeContract#F5",children:"Arbitrum Sepolia"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"createRequest"})," pane should be able and we need to provide a few parameters. Here's a reference below of what each parameter requires:"]}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"createRequest"})," schema."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isListing"}),": (bool) - whether the order is to list (true) or offer orders (false)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isERC1155"}),": (bool) - whether the order is for an ERC1155 contract (false for ERC721s)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenContract"}),": (string) - the token you're looking to create an order for"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenId"}),": (string) - the tokenId you're looking to create an order for"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"quantity"}),": (number) - the number of tokens you're looking to sell"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"expiry"}),": (number) - a number formated to ISO time"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"currency"}),": (string) - the ERC20 currency token you're transacting in"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pricePerToken"}),": (big number) - the ERC20 price of the token in big number"]}),`
`]}),`
`,e.jsxs(s.ol,{start:"3",children:[`
`,e.jsxs(s.li,{children:["Before inputting the information, we need to make sure we deploy and mint a few tokens so we are able to list them. This can be done conveniently through Sequence Builder by following our ",e.jsx(s.a,{href:"/solutions/collectibles/contracts/deploy-an-item-collection",children:"collectibles guide"}),"."]}),`
`,e.jsx(s.li,{children:"Now, we need to fill out the variables before submitting our transaction, below you can see an example submission but please make sure to change the variables to your contract address, expiry time, and more:"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isListing"}),": true - we want to list the token in this case."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isERC1155"}),": false - the token is not an ERC1155"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenContract"}),": 0xb0b059a23875e2e08b905688ec68384cad2fe77a - contract address of the ERC721 we deployed via Builder."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tokenId"}),": 1 - token ID we want to list"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"quantity"}),": 1"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"expiry"}),": 1713001644188 - expiry date in ISO time of the listing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"currency"}),": 0xf3C3351D6Bd0098EEb33ca8f830FAf2a141Ea2E1 - USDC address on Arbitrum Sepolia"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pricePerToken"}),": 10000 - listing price in BigNumber format. For example, this was converted using the ethers.js library with teh following call ",e.jsx(s.code,{children:'ethers.utils.parseUnits(String("0.01"), 6)'}),", where 6 is the decimals of the ERC20 currency contract."]}),`
`]}),`
`,e.jsx(s.p,{children:"(true,false,0xde6ea6d5c88708375f2c5a440a014a82bf375b88,1,1,1713001644188,0xf3C3351D6Bd0098EEb33ca8f830FAf2a141Ea2E1,10000)"}),`
`,e.jsxs(s.h2,{id:"accept-a-request",children:["Accept a Request",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accept-a-request",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["In order to accept an existing request, one would need to use one of the ",e.jsx(s.code,{children:"get"})," requests endpoints (like ",e.jsx(s.a,{href:"/api/marketplace/examples/get-top-orders",children:"getTopOrders"}),") to acquire a ",e.jsx(s.code,{children:"orderId"})," inputted into the ",e.jsx(s.code,{children:"requestId"})," parameter to submit a transaction, with a prior transaction of approving the currency for the request."]}),`
`,e.jsx(s.p,{children:"A batched transaction can be performed to fullfill this requirement of currency approval (transaction 1), while also sending the transaction for the fullfillment of the request (transaction 2)."}),`
`,e.jsx(s.p,{children:"Using a universal wallet, this would look something like this:"}),`
`,e.jsxs(s.h2,{id:"transaction-1-approve",children:["transaction 1: ",e.jsx(s.code,{children:"approve"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-1-approve",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"spender"}),": (string) - address of the marketplace acting on the token"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"amount"}),": (bool) - the approval amount for the spender"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"transaction-2-acceptrequest",children:["transaction 2: ",e.jsx(s.code,{children:"acceptRequest"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-2-acceptrequest",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"requestId"}),": (string) - The ID of the request"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"quantity"}),": (bool) - The quantity of tokens to accept"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"additionalFees"}),": (number[]) - The additional fees to pay"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"additionalFeeRecipients"}),": (address[]) - the addresses to send the additional fees to"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"example",children:["example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"421614"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// on arbitrum-sepolia"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Interface"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers.utils."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function approve(address spender, uint256 amount) public returns (bool)"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sequenceMarketInterface"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers.utils."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function acceptRequest(uint256 requestId, uint256 quantity, address recipient, uint256[] calldata additionalFees, address[] calldata additionalFeeRecipients)"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" amountBigNumber"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers.utils."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"parseUnits"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(price), "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// currency price based on correct decimals for token contract"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataApprove"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"approve"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", ["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  amountBigNumber,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataAcceptRequest"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequenceMarketInterface."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "acceptRequest"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [requestId, quantity, recipientAddress, [], []]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txApprove"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// an ERC20 token contract"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataApprove,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataAcceptRequest,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([txApprove, tx]);"})]})]})})]})}function o(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{o as default,t as frontmatter};
