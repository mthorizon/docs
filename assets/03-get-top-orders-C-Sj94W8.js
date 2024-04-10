import{d as n,j as s}from"./index-LuHMmo7L.js";import"./HomePage.css.js.vanilla-l0sNRNKZ.js";const c=void 0;function i(r){const e={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"gettoporders",children:["GetTopOrders",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gettoporders",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Query the protocol for the top order based on various filters."}),`
`,s.jsx(e.p,{children:"Fetch the top orders from the protocol, optionally excluding those created by a specific user."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Request: POST /rpc/Marketplace/GetTopOrders"}),`
`,s.jsx(e.li,{children:"Content-Type: application/json"}),`
`,s.jsxs(e.li,{children:["Body (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderbookContractAddress"})," (string) -- the address of the protocol contract"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"collectionAddress"})," (string) -- the address of the NFT collection"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currencyAddresses"})," (string[]) -- an array of currency contract addresses"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenIDs"})," (string[]) -- an array of token IDs to filter the orders by"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isListing"})," (bool) -- whether to fetch listing orders (true) or offer orders (false)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"priceSort"})," (SortOrder) -- the direction to sort the orders by price as an enum of ",s.jsx(e.code,{children:'"DESC"'})," or ",s.jsx(e.code,{children:'"ASC"'})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"excludeUser?"})," (string) -- the address of a user whose orders to exclude"]}),`
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
`,s.jsxs(e.div,{className:"code-group",children:[s.jsx(e.div,{"data-title":"curl",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"curl","data-lang":"shell",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --request"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://dev-marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetTopOrders"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --header"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'Content-Type: application/json'"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --data"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '{"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "collectionAddress": "0x1693ffc74edbb50d6138517fe5cd64fd1c917709",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "currencyAddresses": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'            "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"        ],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "orderbookContractAddress": "0xB537a160472183f2150d42EB1c3DD6684A55f74c",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "tokenIDs": ["0","1", "2", "3", "4", "5"],'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "isListing": true,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "priceSort": "DESC"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    }'"})})]})})}),s.jsx(e.div,{"data-title":"js",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed twoslash lsp",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"js","data-lang":"ts",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsxs(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:["// ","Works"," ","in"," ","both"," ","a"," ","Webapp"," (","browser",") ","or"," ","Node",".","js",":"]})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:[" ","fetch"," "]}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:[' "',"cross","-","fetch",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:["  ","c"]}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"onst"}),s.jsxs(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:[" ","res"]}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsxs(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:[" ","await"]}),s.jsxs(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:[" ","fetch"]}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['    "',"https","://","dev","-","marketplace","-","api",".","sequence",".","app","/","arbitrum","-","sepolia","/","rpc","/","Marketplace","/","GetTopOrders",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["      ","method",": "]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"POST",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["      ","headers",": {"]})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['        "',"Content","-","Type",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"application","/","json",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["      ","body",": "]}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"JSON"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"stringify"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","collectionAddress",": "]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"0x1693ffc74edbb50d6138517fe5cd64fd1c917709",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","currencyAddresses",": ["]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","orderbookContractAddress",": "]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"0xB537a160472183f2150d42EB1c3DD6684A55f74c",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","tokenIDs",": ["]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"0",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"1",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"2",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"3",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"4",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"5",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","isListing",": "]}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["        ","priceSort",": "]}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"DESC",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:["  ","console","."]}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsxs(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:['"',"res",'"']}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsxs(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:[" ","res","."]}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"json"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"());"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:s.jsx(e.span,{className:"twoslash-error",children:"})();"})})}),s.jsx(e.div,{className:"twoslash-meta-line twoslash-error-line",children:`## Errors were thrown in the sample, but not included in an error tag

These errors were not marked as being expected: 2307. 
Expected: // @errors: 2307

Compiler Errors:

index.ts
  [2307] 66 - Cannot find module 'cross-fetch' or its corresponding type declarations.`})]})})}),s.jsx(e.div,{"data-title":"other",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"other","data-lang":"shell",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Please"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" contact"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" our"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" team"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" for"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" assistance"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" with"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" integrations"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" to"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" another"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" target."})]})})})})]}),`
`,s.jsxs(e.h3,{id:"example-implementation",children:["Example implementation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-implementation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["With the use of the ",s.jsx(e.code,{children:"GetTopOrders"})," api developers can build bots to retrieve best orders to execute on, or, just simple notifiers to track the best orders to take action."]})]})}function a(r={}){const{wrapper:e}={...n(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(i,{...r})}):i(r)}export{a as default,c as frontmatter};
