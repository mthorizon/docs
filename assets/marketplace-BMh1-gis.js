import{d as l,j as e}from"./index-DFyFnBuw.js";const n={title:"Marketplace",description:"undefined"};function s(i){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"marketplace",children:["Marketplace",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#marketplace",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:["In order to support the buying and selling of in-game assets between players, our Unity SDK leverages our ",e.jsx(t.a,{href:"/solutions/marketplaces/orderbook/overview",children:"Marketplace API"}),"."]}),`
`,e.jsxs(t.h2,{id:"show-listings",children:["Show Listings",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#show-listings",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["In order to show the marketplace listings for a given contract/collection address, you'll want to use a ",e.jsx(t.code,{children:"ListCollectibles"})," object and call the ",e.jsx(t.code,{children:"ListAllCollectiblesWithLowestListing"})," function or ",e.jsx(t.code,{children:"ListCollectiblesWithLowestListing"})," if you want to handle pagination yourself."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`ListCollectibles listCollectiblesOnArbitrumNova = new ListCollectibles(Chain.ArbitrumNova);
ListCollectiblesWithLowestListingReturn result = await listCollectiblesOnArbitrumNova.ListCollectiblesWithLowestListing(contractAddressString, collectiblesFilter);
CollectibleOrder[] collectibleOrders = result.collectibles;
// or 
CollectibleOrder[] collectibleOrders = await listCollectiblesOnArbitrumNova.ListAllCollectiblesWithLowestListing(contractAddressString, collectiblesFilter);
`})}),`
`,e.jsxs(t.p,{children:["where collectiblesFilter is a ",e.jsx(t.code,{children:"CollectiblesFilter"})," used to filter your search criteria."]}),`
`,e.jsxs(t.p,{children:["These methods can be awaited directly or you can subscribe to the ",e.jsx(t.code,{children:"ListCollectiblesWithLowestListingReturn"})," and ",e.jsx(t.code,{children:"OnListCollectiblesWithLowestListingError"})," events to receive the ",e.jsx(t.code,{children:"ListCollectiblesWithLowestListingReturn"})," object when successful or the error message string when unsuccessful."]})]})}function o(i={}){const{wrapper:t}={...l(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default,n as frontmatter};
