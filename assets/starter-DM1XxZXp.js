import{d as i,j as e}from"./index-BorCCDm0.js";const l={title:"Sequence - Web3 Gaming Platform - Marketplace Orderbook Quickstart",description:"Quickstart for Marketplace Orderbook for the Sequence infrastructure stack for web3 gaming."};function r(s){const a={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.header,{children:e.jsxs(a.h1,{id:"starter-marketplace",children:["Starter Marketplace",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#starter-marketplace",children:e.jsx(a.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(a.p,{children:["Utilize the Sequence marketplace protocols to build a marketplace that enables ",e.jsx(a.a,{href:"https://www.shopify.com/",children:"Shopify-like"})," control over custom code development with Sequence source code."]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.a,{href:"/solutions/marketplaces/orderbook/starter#quickstart-marketplace-boilerplate",children:"codebase that you can clone"})," from CLI and begin with immediately enables users to perform offers and listings for collectible items. Customize which network your collections are on using ",e.jsx(a.a,{href:"/solutions/collectibles/contracts/deploy-an-item-collection",children:"this guide"})," to deploy a collection using the ",e.jsx(a.a,{href:"https://sequence.build",children:"Sequence Builder"})]}),`
`,e.jsxs(a.h2,{id:"try-a-demo",children:["Try a Demo",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#try-a-demo",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.aside,{"data-callout":"info",children:e.jsxs(a.p,{children:["Check out our ",e.jsx(a.a,{href:"https://marketplace-boilerplate.pages.dev/",children:"demo"})," to see a boilerplate marketplace in action."]})}),`
`,e.jsxs(a.h2,{id:"quickstart-marketplace-boilerplate",children:["Quickstart: Marketplace Boilerplate",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quickstart-marketplace-boilerplate",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"To get started quickly with a one-liner command in your bash terminal, use the following command and follow the prompts to initialize the environment:"}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(a.code,{children:e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sequence-cli"}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" marketplace"}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create-marketplace-boilerplate"})]})})}),`
`,e.jsxs(a.h2,{id:"custom-marketplace",children:["Custom Marketplace",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-marketplace",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.aside,{"data-callout":"info",children:e.jsxs(a.p,{children:["Get started quickly with an ",e.jsx(a.a,{href:"https://github.com/0xsequence-demos/demo-aviator-custom-marketplace",children:"example"})," leveraging our Marketplace API and on-chain contracts to use as a starting point for your own."]})}),`
`,e.jsxs(a.h2,{id:"example-api-call",children:["Example API Call",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-api-call",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"Pull top orders for a specific collection:"}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(a.code,{children:[e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --request"}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--url "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"https://marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetTopOrders"}),e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--header "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Content-Type: application/json'"}),e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--data "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'{"})]}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "collectionAddress": "0x1693ffc74edbb50d6138517fe5cd64fd1c917709",'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "currencyAddresses": ['})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    ],"})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "orderbookContractAddress": "0xB537a160472183f2150d42EB1c3DD6684A55f74c",'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "tokenIDs": ["0","1", "2", "3", "4", "5"],'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "isListing": true,'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "priceSort": "DESC"'})}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}'"})})]})}),`
`,e.jsxs(a.p,{children:["For more resources on leveraging the Sequence Market Protocol, check out the ",e.jsx(a.a,{href:"/api/marketplace/examples/orderbook-transactions",children:"in-depth documentation"}),"."]}),`
`,e.jsxs(a.h2,{id:"walkthrough",children:["Walkthrough",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#walkthrough",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Lastly, take a look at our ",e.jsx(a.a,{href:"/guides/custom-marketplace",children:"end to end guide"})," to get you off the ground running with your own marketplace & learn about the infrastructure that powers Sequence. This guide leverages several components of the sequence stack such as our Marketplace APIs and Indexer - all the components needed for accelerating development time & building a scalable in-game or browser based marketplace."]})]})}function t(s={}){const{wrapper:a}={...i(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default,l as frontmatter};
