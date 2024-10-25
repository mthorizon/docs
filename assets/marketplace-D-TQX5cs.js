import{d as r,j as e}from"./index-Dbg4ExiF.js";const n={title:"Marketplace",description:"undefined"};function l(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"marketplace",children:["Marketplace",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#marketplace",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["In order to support the buying and selling of in-game assets between players, our Unity SDK leverages our ",e.jsx(s.a,{href:"/solutions/marketplaces/orderbook/overview",children:"Marketplace API"}),"."]}),`
`,e.jsxs(s.h2,{id:"show-listings",children:["Show Listings",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#show-listings",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["In order to show the marketplace listings for a given contract/collection address, you'll want to use a ",e.jsx(s.code,{children:"ListCollectibles"})," object and call the ",e.jsx(s.code,{children:"ListAllCollectiblesWithLowestListing"})," function or ",e.jsx(s.code,{children:"ListCollectiblesWithLowestListing"})," if you want to handle pagination yourself."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ListCollectibles"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" listCollectiblesOnArbitrumNova"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ListCollectibles"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Chain.ArbitrumNova);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ListCollectiblesWithLowestListingReturn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" result"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" listCollectiblesOnArbitrumNova."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ListCollectiblesWithLowestListing"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(contractAddressString, collectiblesFilter);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"CollectibleOrder"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"collectibleOrders"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" result.collectibles;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// or "})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"CollectibleOrder"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"collectibleOrders"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" listCollectiblesOnArbitrumNova."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"ListAllCollectiblesWithLowestListing"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(contractAddressString, collectiblesFilter);"})]})]})}),`
`,e.jsxs(s.p,{children:["where collectiblesFilter is a ",e.jsx(s.code,{children:"CollectiblesFilter"})," used to filter your search criteria."]}),`
`,e.jsxs(s.p,{children:["These methods can be awaited directly or you can subscribe to the ",e.jsx(s.code,{children:"ListCollectiblesWithLowestListingReturn"})," and ",e.jsx(s.code,{children:"OnListCollectiblesWithLowestListingError"})," events to receive the ",e.jsx(s.code,{children:"ListCollectiblesWithLowestListingReturn"})," object when successful or the error message string when unsuccessful."]})]})}function o(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{o as default,n as frontmatter};
