import{d as a,j as e,e as r}from"./index-BvIiOmls.js";/* empty css                                */const o={title:"Implementing Sequence Wallet with RainbowKit and NextJs",description:"The content provides instructions on integrating the Sequence wallet into RainbowKit using the connector."};function n(i){const s={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"using-rainbowkit",children:["Using RainbowKit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-rainbowkit",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"The Sequence wallet can be added to RainbowKit through the connector."}),`
`,e.jsxs(r,{type:"info",children:[e.jsx(s.p,{children:"Try it live :)"}),e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://0xsequence.github.io/demo-dapp-rainbowkit/",children:"A live Dapp example"})," using Sequence + Metamask + Rainbow + Wallet Connect with RainbowKit."]}),e.jsxs(s.p,{children:["Source code is available too: ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-rainbowkit",children:"https://github.com/0xsequence/demo-dapp-rainbowkit"})]})]}),`
`,e.jsxs(s.h2,{id:"installation",children:["Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The connector is installed via the npm package ",e.jsx(s.code,{children:"@0xsequence/rainbowkit-plugin"}),"."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/rainbowkit-plugin"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/rainbowkit-plugin"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsxs(s.h2,{id:"usage",children:["Usage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The connector is then imported and added to the list of connectors alongside the other RainbowKit wallets."}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequenceWallet } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/rainbowkit-plugin'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { connectorsForWallets } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@rainbow-me/rainbowkit'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" connectors"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" connectorsForWallets"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    groupName: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Recommended'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    wallets: ["})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"      sequenceWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        chains,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        defaultNetwork: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'polygon'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        connect: {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"          app: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Demo-app'"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }),"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"      ..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"otherRainbowKitWallets"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})})]})}),`
`,e.jsxs(s.h2,{id:"parameters",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"chains",children:["chains",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chains",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Chains supported by app. This is the same parameter as would be passed to other RainbowKit wallets."}),`
`,e.jsxs(s.h3,{id:"connect-optional",children:["connect (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connect-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`Connect options for Sequence, including the name of the app and the default network id the wallet will attempt connection to.
A more in depth description of the connect options is available `,e.jsx(s.a,{href:"/solutions/wallets/universal-wallet/examples/connect-wallet#wallet-login-and-connect-options",children:"here"}),"."]}),`
`,e.jsxs(s.h3,{id:"defaultnetwork-optional",children:["defaultNetwork (optional)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defaultnetwork-optional",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The default network to connect to. Sequence will default all operations to this network. It can also be defined using a number (e.g. 1 for Mainnet, 5 for Goerli, etc...)."}),`
`,e.jsxs(s.h2,{id:"using-nextjs",children:["Using NextJs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-nextjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`There are special considerations to take into account when using NextJs with Wagmi-based libraries like RainbowKit, such that it functions harmoniously with the server-side rendering of NextJs.
The correct technique to use differs depending on whether the application uses the older `,e.jsx(s.code,{children:"pages"})," router or the more recent ",e.jsx(s.code,{children:"app"})," router."]}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"/sdk/typescript/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",children:"this section"})," for an explanation on using Wagmi or Wagmi-based libraries with ",e.jsx(s.code,{children:"app"})," router.",e.jsx(s.br,{}),`
`,"See ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/use-client-method",children:"the example app"})," which uses the ",e.jsx(s.code,{children:"app"})," router structure."]}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"/sdk/typescript/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",children:"this section"})," for an explanation on using Wagmi or Wagmi-based libraries with ",e.jsx(s.code,{children:"pages"})," router.",e.jsx(s.br,{}),`
`,"See ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/mount-hook",children:"the example app"})," which uses the ",e.jsx(s.code,{children:"pages"})," router structure."]}),`
`,e.jsxs(s.h2,{id:"using-older-versions-of-wagmi--012x",children:["Using older versions of Wagmi (<= 0.12.x)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-older-versions-of-wagmi--012x",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If you are using an older version of Wagmi (<= 0.12.x), which is based on ethers instead of viem, use the following command to install the appropriate version of the wagmi connector:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/wagmi-connector@1.0"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/wagmi-connector@1.0"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,e.jsxs(s.h2,{id:"examples",children:["Examples",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["A demo app for RainbowKit is available ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-rainbowkit",children:"here"})]}),`
`,e.jsxs(s.p,{children:["A demo app for NextJs + Wagmi (which is applicable for wagmi-based libraries) with the ",e.jsx(s.code,{children:"app"})," router structure ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/use-client-method",children:"here"}),".",e.jsx(s.br,{}),`
`,"A demo app for NextJs + Wagmi (which is applicable for wagmi-based libraries) with the older ",e.jsx(s.code,{children:"pages"})," router structure ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/mount-hook",children:"here"}),"."]})]})}function d(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{d as default,o as frontmatter};
