import{d as l,j as e}from"./index-BorCCDm0.js";const r={title:"Connecting to Sequence Wallet - On-demand Ethereum Web Wallet, Chrome Extension, and Mobile Access",description:"Sequence offers a flexible wallet with multiple ways to connect/access."};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"connect-wallet",children:["Connect Wallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connect-wallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Sequence is a very flexible wallet which allow users multiple ways to connect / access their wallet. This includes:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"On-demand Ethereum web wallet for new users"})," via ",e.jsx(s.a,{href:"https://www.npmjs.com/package/0xsequence",children:"0xsequence"})," npm package + ",e.jsx(s.a,{href:"https://sequence.app",children:"https://sequence.app"}),` -- this option allows
developers to offer users an on-demand web3 wallet. No user install required -- any browser will `,e.jsx(s.em,{children:"just work"}),`, and users
can onboard with a familiar Web2 experience. Think of it like `,e.jsx(s.em,{children:"Paypal / Stripe but for web3"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Surf all of web3"})," via ",e.jsx(s.a,{href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en",children:"Sequence Wallet Chrome Extension"}),` -- users
who have the Sequence Wallet Chrome Extension installed are able to access any Ethereum-compatible Dapp on the Web :) Just like how MetaMask works,
but of course with a bunch of the benefits of Sequence.`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Mobile phone access"})," via ",e.jsx(s.a,{href:"https://walletconnect.com/",children:"WalletConnect"}),` support within Sequence Wallet -- users are able to communicate with their wallets remotely
via the awesome Wallet Connect protocol. This is an excellent option if using Sequence Wallet from your mobile phone and want to connect
your wallet to a desktop dapp.`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:`Sequence Wallet is built on Web Browser (W3C) and Ethereum web3 standards -- and is available everywhere that a modern browser is able to run.
We've carefully designed the wallet for simple onboarding, while maintaining security for users, and allowing users to progressively
increase the level of their security through additional keys and measures.`}),`
`,e.jsx(s.p,{children:`This means, that if you've developed a dapp to work with MetaMask, then Sequence will work too without any changes. If you're
using web3.js or ethers.js, Sequence will just work too. This is the beauty of interoperability on web3 :)`}),`
`,e.jsxs(s.h2,{id:"connecting-your-dapp-with-0xsequence",children:["Connecting your dapp with ",e.jsx(s.code,{children:"0xsequence"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-your-dapp-with-0xsequence",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.aside,{"data-callout":"info",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"A delightful wallet without requiring your users to install anything "}),e.jsxs(s.p,{children:["By integrating ",e.jsx(s.code,{children:"0xsequence"}),`, users may access your dapp without having to install any special extensions,
and the wallet also works on mobile browsers!`]})]}),`
`,e.jsx(s.p,{children:"Your dapp can connect to your user's wallet by first instantiating the Wallet provider:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequence } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xsequence"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" projectAccessKey"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '<access_key>'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// This assumes your dapp runs on Ethereum mainnet"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"initWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(projectAccessKey);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// If your dapp runs on a different EVM-compatible blockchain, you can specify its name"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// const wallet = sequence.initWallet(projectAccessKey, { defaultNetwork: 'polygon' });"})})]})}),`
`,e.jsxs(s.p,{children:["Note that is possible to retrieve the above instance by using the ",e.jsx(s.code,{children:"getWallet()"})," method:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequence } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xsequence"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,e.jsx(s.p,{children:"Once you have the instance, you can connect to the wallet:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" connectDetails"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"connect"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Your Dapp name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  authorize: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // And pass settings if you would like to customize further"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  settings: {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    theme: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"light"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    bannerUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://yoursite.com/banner-image.png"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 3:1 aspect ratio, 1200x400 works best"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    includedPaymentProviders: ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"moonpay"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ramp"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    defaultFundingCurrency: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"matic"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    lockFundingCurrencyToDefault: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"user accepted connect?"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", connectDetails.connected);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "users signed connect proof to valid their account address:"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  connectDetails.proof"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,e.jsxs(s.p,{children:["You can pick/limit the available sign in options with ",e.jsx(s.code,{children:"signInOptions"}),". Will be ignored if user is already signed in."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"connect"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Your Dapp name"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  settings: { signInOptions: ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"google"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] },"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(s.p,{children:["After you connect, you can use ",e.jsx(s.code,{children:"wallet.openWallet()"})," to open the wallet:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"openWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,e.jsxs(s.p,{children:["You can also optionally pass a path, and use ",e.jsx(s.code,{children:"openWithOptions"})," intent to pass settings when you open the wallet:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" settings"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Settings"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  theme: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"dark"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  bannerUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://yoursite.com/banner-image.png"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 3:1 aspect ratio, 1200x400 works best"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  includedPaymentProviders: ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"moonpay"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ramp"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  defaultFundingCurrency: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"eth"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  lockFundingCurrencyToDefault: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" intent"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" OpenWalletIntent"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  type: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"openWithOptions"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  options: {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    settings: settings,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" path"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "wallet/add-funds"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"openWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(path, intent);"})]})]})}),`
`,e.jsxs(s.aside,{"data-callout":"tip",children:[e.jsx(s.strong,{"data-callout-title":!0,children:"Check out some example Dapp source code"}),e.jsxs(s.p,{children:["For a complete examples, see ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp",children:"Demo-Dapp"})," and ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-web3modal",children:"Demo-Dapp-Web3Modal"}),"."]})]}),`
`,e.jsxs(s.div,{children:[e.jsx(s.p,{children:"Avoid Browsers Blocking Sequence Popup"}),e.jsxs(s.p,{children:["Most browsers will block popups if they are called outside of user-triggered event handlers like ",e.jsx(s.code,{children:"onclick"}),", or when it takes too long to process between the user action and the actual window"]}),e.jsxs(s.p,{children:["Read more about browser popup-blocking ",e.jsx(s.a,{href:"https://javascript.info/popup-windows#popup-blocking",children:"here"}),"."]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/sign-in-fresh.png",alt:"Sequence on-demand sign in"})}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/sign-in-connect.png",alt:"Sequence on-demand sign in, connect"})}),`
`,e.jsxs(s.h2,{id:"wallet-login-and-connect-options",children:["Wallet Login and Connect Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-login-and-connect-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Dapps with direct sequence integration can specify a ",e.jsx(s.code,{children:"ConnectOptions"})," object when running ",e.jsx(s.code,{children:"wallet.connect()"}),"."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const connectDetails = await wallet.connect(connectOptions)"})})})}),`
`,e.jsx(s.p,{children:"The option parameters are described below."}),`
`,e.jsxs(s.h4,{id:"app",children:[e.jsx(s.strong,{children:"app"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#app",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"App name of the dapp which will be announced to user on connect screen."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ app: 'My defi app' })"})]}),`
`,e.jsxs(s.h4,{id:"appprotocol",children:[e.jsx(s.strong,{children:"appProtocol"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appprotocol",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Custom protocol for auth redirect (unity/unreal)."}),`
`,e.jsxs(s.h4,{id:"origin",children:[e.jsx(s.strong,{children:"origin"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#origin",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Origin hint of the dapp's host opening the wallet. This value will automatically be determined and verified for integrity, and can be omitted."}),`
`,e.jsxs(s.h4,{id:"expiry",children:[e.jsx(s.strong,{children:"expiry"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#expiry",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Expiry number (in seconds) that is used for ETHAuth proof. Default is 1 week in seconds."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ expiry: 36000 })"})]}),`
`,e.jsxs(s.h4,{id:"authorize",children:[e.jsx(s.strong,{children:"authorize"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorize",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"authorize"})," will perform an ETHAuth eip712 signing and return the proof to the dapp."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ authorize: true })"})]}),`
`,e.jsxs(s.h4,{id:"authorizenonce",children:[e.jsx(s.strong,{children:"authorizeNonce"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorizenonce",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"authorizeNonce"})," is an optional number to be passed as ETHAuth's nonce claim for replay protection."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ authorizeNonce: 123 })"})]}),`
`,e.jsxs(s.h4,{id:"refresh",children:[e.jsx(s.strong,{children:"refresh"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#refresh",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"refresh"})," flag will force a full re-connect (ie. disconnect then connect again)."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ refresh: true })"})]}),`
`,e.jsxs(s.h4,{id:"keepwalletopened",children:[e.jsx(s.strong,{children:"keepWalletOpened"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#keepwalletopened",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"keepWalletOpened"})," will keep the wallet window open after connecting. The default is to automatically close the wallet after connecting."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ keepWalletOpened: true })"})]}),`
`,e.jsxs(s.h4,{id:"askforemail",children:[e.jsx(s.strong,{children:"askForEmail"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#askforemail",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"askForEmail"})," will ask user whether they want to share the email they use to sign in to wallet while connecting, and will be returned in ",e.jsx(s.code,{children:"connectDetails"}),"."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ askForEmail: true })"})]}),`
`,e.jsxs(s.h4,{id:"settingstheme",children:[e.jsx(s.strong,{children:"settings.theme"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingstheme",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Name of one of the available theme provided by sequence the sequence wallet will be rendered with."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {theme: "light"}}'})]}),`
`,e.jsxs(s.h4,{id:"settingsbannerurl",children:[e.jsx(s.strong,{children:"settings.bannerUrl"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsbannerurl",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"URL of a banner image users will see when connecting or logging into your dapp. The banner image should follow a 3:1 aspect ration where 1200x400 works best."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {bannerUrl: "https://yoursite.com/banner-image.png"}}'})]}),`
`,e.jsxs(s.h4,{id:"settingssigninwith",children:[e.jsx(s.strong,{children:"settings.signInWith"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninwith",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Specify ",e.jsx(s.code,{children:"signInWith"})," with a supported auth provider to automatically sign in the user with that provider only. Will be ignored if user is already signed in."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {signInWith: "google"}}'})]}),`
`,e.jsx(s.p,{children:'Supported Providers: "google", "discord", "twitch", "apple", "facebook"'}),`
`,e.jsxs(s.h4,{id:"settingssigninwithemail",children:[e.jsx(s.strong,{children:"settings.signInWithEmail"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninwithemail",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Specify signInWithEmail with an email address to allow user automatically sign in with the email option. Will be ignored if user is already signed in."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {signInWithEmail: "user@email.com"}}'})]}),`
`,e.jsxs(s.h4,{id:"settingssigninoptions",children:[e.jsx(s.strong,{children:"settings.signInOptions"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninoptions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Specify signInOptions to pick/limit the available sign in options. Will be ignored if user is already signed in."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {signInOptions: ["email", "google", "apple"]}}'})]}),`
`,e.jsxs(s.h4,{id:"settingsincludedpaymentproviders",children:[e.jsx(s.strong,{children:"settings.includedPaymentProviders"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsincludedpaymentproviders",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"List of payment providers users will be able to access. By default, users can access all payment providers integrated in Sequence."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {includedPaymentProviders: ["moonpay", "ramp"]}}'})]}),`
`,e.jsxs(s.h4,{id:"settingsdefaultfundingcurrency",children:[e.jsx(s.strong,{children:"settings.defaultFundingCurrency"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsdefaultfundingcurrency",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The tag of the default currency to show when users open the payment provider page. The currency has to be supported by the payment providers integrated in sequence."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:'await wallet.connect({ settings: {defaultFundingCurrency: "usdc"}}'})]}),`
`,e.jsxs(s.h4,{id:"settingsdefaultpurchaseamount",children:[e.jsx(s.strong,{children:"settings.defaultPurchaseAmount"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsdefaultpurchaseamount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Use to specify a default purchase amount, as an integer, for prefilling the funding amount. If not specified, the default is 100."}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ settings: {defaultPurchaseAmount: 200}}"})]}),`
`,e.jsxs(s.h4,{id:"settingslockfundingcurrencytodefault",children:[e.jsx(s.strong,{children:"settings.lockFundingCurrencyToDefault"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingslockfundingcurrencytodefault",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Whether to only allow users to purchase the default currency specified by the ",e.jsx(s.code,{children:"defaultFundingCurrency"})," option. If set to false, users will also be able to purchase other tokens. locking the default funding currency can be useful to prevent users from purchasing the wrong currency or the currency on the wrong chain."]}),`
`,e.jsxs(s.p,{children:["Example: ",e.jsx(s.code,{children:"await wallet.connect({ settings: {defaultFundingCurrency: true}}"})]}),`
`,e.jsxs(s.h2,{id:"connecting-your-dapp-with-web3js-or-ethersjs",children:["Connecting your dapp with ",e.jsx(s.code,{children:"web3.js"})," or ",e.jsx(s.code,{children:"ethers.js"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-your-dapp-with-web3js-or-ethersjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`For a full example of a dapp which supports Sequence (on-demand + chrome extension), Metamask, and WalletConnect
please see the `,e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-web3modal",children:"Demo-Dapp-Web3Modal repo"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/web3modal.png",alt:"Sequence Web3Modal Integration"})}),`
`,e.jsxs(s.h2,{id:"connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension",children:["Connecting to any Ethereum dapp with the Sequence Wallet Chrome Extension",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Sequence Chrome Extension: ",e.jsx(s.a,{href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en",children:"Install"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/build/seq-chrome-store.png",alt:"Sequence Chrome Extension"})}),`
`,e.jsxs(s.h2,{id:"connecting-via-walletconnect",children:["Connecting via ",e.jsx(s.code,{children:"WalletConnect"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-via-walletconnect",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Sequence already supports connecting to dapps via ",e.jsx(s.a,{href:"https://walletconnect.com",children:"WalletConnect"}),`.
If your dapp already supports WalletConnect, and you don't need Sequence-specific functionality, nothing more needs to be done.
From the user's perspective, the WalletConnect flow behaves as follows.`]}),`
`,e.jsxs(s.p,{children:["Taking ",e.jsx(s.a,{href:"https://app.uniswap.org",children:"Uniswap"})," as an example, the user is prompted to connect their wallet using one of multiple possible protocols."]}),`
`,e.jsx("img",{src:"/img/walletconnect/connect-wallet.png",alt:"Uniswap swap page"}),`
`,e.jsx(s.p,{children:"The user selects the WalletConnect option."}),`
`,e.jsx("img",{src:"/img/walletconnect/select-walletconnect.png",alt:"Uniswap select Wallet Connect option"}),`
`,e.jsx(s.p,{children:`A QR code is displayed, which can be scanned by Sequence.
Alternatively, the user can also choose to copy the connection details via their OS clipboard.`}),`
`,e.jsx("img",{src:"/img/walletconnect/qr-code.png",alt:"Sign users in with a QR code using wallet connect"}),`
`,e.jsx(s.p,{children:'Back in the Sequence interface, the user chooses "Scan".'}),`
`,e.jsx("img",{src:"/img/walletconnect/scan-qr-code.png",alt:"scan a QR code to enable wallet sign in"}),`
`,e.jsx(s.p,{children:`The QR code from the dapp is scanned.
Alternatively, the code is pasted from the OS clipboard if the user chose that previously.`}),`
`,e.jsx("img",{src:"/img/walletconnect/scan.png",alt:"Camera to scan a Wallet Connect QR code"}),`
`,e.jsx(s.p,{children:"The user confirms the connection request."}),`
`,e.jsx("img",{src:"/img/walletconnect/confirm.png",alt:"A user confirming a request with Wallet Connect"}),`
`,e.jsx(s.p,{children:"The connection succeeded, and the dapp is updated to reflect that."}),`
`,e.jsx("img",{src:"/img/walletconnect/success.png",alt:"A success message for Wallet Connect"}),`
`,e.jsx(s.p,{children:`While connected, the dapp is able to make signing requests to Sequence.
Sequence will always prompt for confirmation from the user for any activity initiated by the dapp.`}),`
`,e.jsx("img",{src:"/img/walletconnect/activity.png",alt:"Confirmation by user activity to initiate a dapp transaction"}),`
`,e.jsx(s.p,{children:"Once the user has finished using the dapp, they can disconnect the wallet via the session menu."}),`
`,e.jsx("img",{src:"/img/walletconnect/disconnect.png",alt:"A user disconnecting from the app using Wallet Connect"})]})}function t(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,r as frontmatter};
