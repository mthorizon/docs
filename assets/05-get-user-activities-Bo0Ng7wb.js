import{u as c,j as s}from"./index-Blh6--j_.js";import{T as a,a as r,b as n}from"./TabGroup-BOQF931C.js";const h=void 0;function l(i){const e={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...c(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"getuseractivities",children:["GetUserActivities",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getuseractivities",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Retrieve activity data for a specific user, including orders and trades."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Request: POST /api/Marketplace/GetUserActivities"}),`
`,s.jsx(e.li,{children:"Content-Type: application/json"}),`
`,s.jsxs(e.li,{children:["Body (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderbookContractAddress"})," (string) -- the address of the protocol contract."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"collectionAddress"})," (string) -- the address of the NFT collection."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currencyAddresses"})," (string[]) -- an array of currency contract addresses."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"userAddress"})," (string) -- the address of the user whose activities are being queried."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenIDs"})," (string[]) -- an array of token IDs to filter the activities by."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:["Response (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"page"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"page"})," (i32) -- number of the page"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pageSize"})," (i32) -- number of orders on the page"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"more"})," (bool) -- if there are more orders"]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orders"}),` (OrderbookOrder[])
[`,`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderId"})," (string) -- order id"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenContract"})," (string) -- the collection contract"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenId"})," (string) -- the tokenId of the collection in the order"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isListing"})," (bool) -- is true if it's a listing for sale, or false if it's an offer"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantity"})," (string) -- the number of tokens the order is for"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantityRemaining"})," (string) -- the number of tokens after the order"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currencyAddress"})," (string) -- the currency the token is trading in"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pricePerToken"})," (string) -- the price per token"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"expiry"})," (string) -- the expiry of when the order is no longer valid"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderStatus"})," (OrderStatus) -- the status of the order as an enum fom ",s.jsx(e.code,{children:'"OPEN"'}),", ",s.jsx(e.code,{children:'"CLOSED"'}),", ",s.jsx(e.code,{children:'"CANCELLED"'})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"createdBy"})," (string) -- the address the order was created by"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"createdAt"})," (uint64) -- the time the order was created"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderbookContractAddress"}),` (string) -- the orderbook contract address
]`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.strong,{children:["Example: ",s.jsx(e.code,{children:"GetUserActivities"})," for a user with specific token IDs"]}),`
`,s.jsxs(a,{children:[s.jsx(r,{children:"curl"}),s.jsx(n,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' POST -H "Content-Type: application/json"'}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://dev-marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetUserActivities -d '{"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "orderbookContractAddress": "0xB537a160472183f2150d42EB1c3DD6684A55f74c",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "collectionAddress": "0x1693ffc74edbb50d6138517fe5cd64fd1c917709",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "currencyAddresses": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    ],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "userAddress": "0xC2Be9CF6D9ee4fd211f88620760e829792659b16",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "tokenIDs": ["1"]'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}'"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "})]})})}),s.jsx(r,{children:"js"}),s.jsx(n,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Works in both a Webapp (browser) or Node.js:"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" fetch "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "cross-fetch"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" res"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" fetch"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "https://dev-marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetUserActivities"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      method: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"POST"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      headers: {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "Content-Type"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"application/json"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      body: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"JSON"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"stringify"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "orderbookContractAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "collectionAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1693ffc74edbb50d6138517fe5cd64fd1c917709"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "currencyAddresses"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'            "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        ],"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "userAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xC2Be9CF6D9ee4fd211f88620760e829792659b16"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "tokenIDs"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"res"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" res."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"json"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"());"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})();"})})]})})}),s.jsx(r,{children:"other"}),s.jsx(n,{children:s.jsxs(e.p,{children:["Please ",s.jsx(e.a,{href:"/support",children:"contact our team"})," for assistance with integrations to another target."]})})]}),`
`,s.jsxs(e.h3,{id:"example-implementation",children:["Example implementation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-implementation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["With the use of the ",s.jsx(e.code,{children:"GetUserActivities"})," api developers can build custom and personalized social or tracking experiences to follow certain users in various interfaces."]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/img/marketplace/activities.png",alt:"GetUserActivities"})})]})}function t(i={}){const{wrapper:e}={...c(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(l,{...i})}):l(i)}export{t as default,h as frontmatter};
