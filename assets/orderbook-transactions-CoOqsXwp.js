import{d as i,j as s,e as l}from"./index-QLc1r4kk.js";/* empty css                                */const d={title:"Sequence Market Orderbook Transactions and Requests",description:"The walkthrough on how to create and accept requests using the Sequence marketplace protocol."};function r(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"sequence-market-orderbook-transactions",children:["Sequence Market Orderbook Transactions",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-market-orderbook-transactions",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["All transactions run through a contract at address ",s.jsx(e.code,{children:"0xB537a160472183f2150d42EB1c3DD6684A55f74c"})," on all currently offered networks."]}),`
`,s.jsx(l,{type:"info",children:s.jsxs(e.p,{children:[`The following transactions require a logged in sequence session, more on how
to accomplish this
`,s.jsx(e.a,{href:"/solutions/wallets/universal-wallet/examples/connect-wallet",children:"here"})]})}),`
`,s.jsxs(e.h2,{id:"create-a-request",children:["Create a Request",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-request",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"In order to create a request with the sequence marketplace protocol, a prior transaction must take place where the token (ERC1155 or ERC721) you are submitting to the marketplace is approved to be transferred by the marketplace contract."}),`
`,s.jsx(e.p,{children:"A batched transaction can be performed to fullfill this requirement of approval (transaction 1), while also sending the transaction for the creation of the request (transaction 2)."}),`
`,s.jsx(e.p,{children:"Using a universal wallet, this would look something like this:"}),`
`,s.jsxs(e.h2,{id:"transaction-1-setapprovalforall",children:["transaction 1: ",s.jsx(e.code,{children:"setApprovalForAll"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-1-setapprovalforall",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"operator"}),": (string) - address of the marketplace acting on the token"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"approved"}),": (bool) - the approval status of the operator"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"transaction-2-createrequest",children:["transaction 2: ",s.jsx(e.code,{children:"createRequest"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-2-createrequest",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"creator"}),": (string) - the wallet that is creating the order request"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isListing"}),": (bool) - whether the order is to list (true) or offer orders (false)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isERC1155"}),": (bool) - whether the order is for an ERC1155 contract (false for ERC721s)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenContract"}),": (string) - the token you're looking to create an order for"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenId"}),": (string) - the tokenId you're looking to create an order for"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantity"}),": (number) - the number of tokens you're looking to sell"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"expiry"}),": (number) - a number formated to ISO time"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currency"}),": (string) - the ERC20 currency token you're transacting in"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pricePerToken"}),": (big number) - the ERC20 price of the token in big number"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"example",children:["example",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"421614"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// on arbitrum-sepolia"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sequenceMarketInterface"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function createRequest(tuple(bool isListing, bool isERC1155, address tokenContract, uint256 tokenId, uint256 quantity, uint96 expiry, address currency, uint256 pricePerToken)) external nonReentrant returns (uint256 requestId)"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc1155Interface"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function setApprovalForAll(address operator, bool approved) external"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" amountBigNumber"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"parseUnits"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"String"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(price), "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// currency price based on correct decimals for token contract"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" request"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  creator: "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  isListing: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  isERC1155: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  tokenContract: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1693ffc74edbb50d6138517fe5cd64fd1c917709"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// collectible you're looking to list or create an offer for"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  tokenId: selectedId,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  quantity: quantity,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  expiry: expiry,"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  currency: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  pricePerToken: amountBigNumber,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataCreateRequest"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequenceMarketInterface."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "createRequest"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [request]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataApprove"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc1155Interface."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"setApprovalForAll"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", ["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataCreateRequest,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txApprove"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1693ffc74edbb50d6138517fe5cd64fd1c917709"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// an ERC1155 token contract"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataApprove,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([txApprove, tx]);"})]})]})}),`
`,s.jsxs(e.h2,{id:"accept-a-request",children:["Accept a Request",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accept-a-request",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["In order to accept an existing request, one would need to use one of the ",s.jsx(e.code,{children:"get"})," requests endpoints (like ",s.jsx(e.a,{href:"/api/marketplace/examples/get-top-orders",children:"getTopOrders"}),") to acquire a ",s.jsx(e.code,{children:"orderId"})," inputted into the ",s.jsx(e.code,{children:"requestId"})," parameter to submit a transaction, with a prior transaction of approving the currency for the request."]}),`
`,s.jsx(e.p,{children:"A batched transaction can be performed to fullfill this requirement of currency approval (transaction 1), while also sending the transaction for the fullfillment of the request (transaction 2)."}),`
`,s.jsx(e.p,{children:"Using a universal wallet, this would look something like this:"}),`
`,s.jsxs(e.h2,{id:"transaction-1-approve",children:["transaction 1: ",s.jsx(e.code,{children:"approve"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-1-approve",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"spender"}),": (string) - address of the marketplace acting on the token"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"amount"}),": (bool) - the approval amount for the spender"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"transaction-2-acceptrequest",children:["transaction 2: ",s.jsx(e.code,{children:"acceptRequest"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-2-acceptrequest",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"requestId"}),": (string) - The ID of the request"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantity"}),": (bool) - The quantity of tokens to accept"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"additionalFees"}),": (number[]) - The additional fees to pay"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"additionalFeeRecipients"}),": (address[]) - the addresses to send the additional fees to"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"example-1",children:["example",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-1",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getSigner"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"421614"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// on arbitrum-sepolia"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" erc20Interface"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function approve(address spender, uint256 amount) public returns (bool)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sequenceMarketInterface"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Interface"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "function acceptRequest(uint256 requestId, uint256 quantity, address recipient, uint256[] calldata additionalFees, address[] calldata additionalFeeRecipients)"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" amountBigNumber"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"parseUnits"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"String"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(price), "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"18"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// currency price based on correct decimals for token contract"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataApprove"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" erc20Interface."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"approve"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", ["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  amountBigNumber,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" dataAcceptRequest"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequenceMarketInterface."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeFunctionData"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "acceptRequest"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  [requestId, quantity, recipientAddress, [], []]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txApprove"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// an ERC20 token contract"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataApprove,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// sequence market contract (same address on all offered networks)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  data: dataAcceptRequest,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([txApprove, tx]);"})]})]})})]})}function t(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{t as default,d as frontmatter};
