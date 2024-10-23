import{j as e,c as d,d as l}from"./index-CaUurAf5.js";import{I as u}from"./icons-Dmp58Rxv.js";const h=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t border-black-10",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(i,{theme:"black",heading:"Contract Deployments",items:[{icon:"SequenceIcon",title:"ERC20",body:"Standard, audited smart contract for deploying an ERC20 fungible token through Sequence Builder.",link:"/solutions/collectibles/contracts/deploy-ERC20-currency"},{icon:"CollectiblesIcon",title:"ERC721",body:"Deploy standard, audited non-fungible (ERC721) tokens through Sequence Builder",link:"/solutions/collectibles/contracts/deploy-an-item-collection"},{icon:"CollectiblesIcon",title:"ERC1155",body:"Deploy standard, audited semi-fungible (ERC1155) which we helped coauthor through Sequence Builder",link:"/solutions/collectibles/contracts/deploy-an-item-collection"},{icon:"MinterIcon",title:"Link any contracts",body:"Upload any custom contract by providing the ABI and manage from Sequence Builder.",link:"/solutions/builder/contracts"}]}),e.jsx(i,{theme:"purple",heading:"Build your game",items:[{icon:"AnalyticsIcon",title:"Analytics",body:"Track every aspect of activity, retention, and more within your games.",link:"/solutions/builder/analytics"},{icon:"CollectiblesIcon",title:"Metadata Management",body:"Update your collections metadata via a UI or at scale using the metadata API.",link:"/solutions/builder/collections"},{icon:"IndexerIcon",title:"Indexer",body:"Performantly query wallets and contracts to use in your game or app.",link:"/solutions/builder/indexer"},{icon:"AirdropperIcon",title:"Webhooks",body:"Deploy webhooks that listen to any arbitrary event across blockchains by providing an https callback",link:"/solutions/builder/webhooks"}]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-4",children:e.jsx("div",{className:"md:w-1/2",children:e.jsx(i,{theme:"green",heading:"Blockchain Utilities",items:[{icon:"MarketplaceIcon",title:"Gas Sponsorship",body:"Utilize our gas sponsorship service in order to cover transactions fees for your endusers so they never have to think about the blockchain.",link:"/solutions/builder/gas-tank"},{icon:"NodeGatewayIcon",title:"Node Gateway",body:"Leverage our autoscaling node service, automatically load balanced for your application.",link:"/solutions/builder/node-gateway"},{icon:"WalletIcon",title:"Transaction Manager",body:"Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.",link:"/solutions/transaction-manager/overview"}]})})})]}),i=({heading:n,items:t,theme:o})=>e.jsx("div",{className:"flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden",children:e.jsxs("div",{className:"flex flex-col gap-3 p-4 relative",children:[e.jsx("div",{className:d("absolute inset-0 opacity-20 z-0 pointer-events-none",{"dark:bg-gradient-to-b from-[#3400A0] to-transparent":o==="purple","dark:bg-gradient-to-b from-[#0A3F16] to-transparent":o==="green","dark:bg-gradient-to-b from-[#897031] to-transparent":o==="yellow","dark:bg-gradient-to-b from-[#000000] to-transparent":o==="black"})}),e.jsx("p",{className:"px-4 font-bold text-themed-primary z-10",children:n}),t.map((a,r)=>{const c=u[a.icon];return e.jsxs("a",{href:a.link,className:"hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7",children:[e.jsx("div",{className:"flex gap-2",children:e.jsxs("p",{className:"flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary",children:[e.jsx("span",{className:"mt-1",children:e.jsx(c,{})}),a.title]})}),e.jsx("p",{className:"text-themed-secondary text-sm font-medium",children:a.body})]},r)})]})}),p={title:"Sequence Platform Enables Building and Scaling Blockchain Games",description:"Power up your blockchain game with Sequence's battle-tested features. Deploy audited contracts, manage NFT metadata, track web3 activity, manage transactions, and connect to webhooks effortlessly. Abstract gas for users and manage node infrastructure with ease.",layout:"docs",showOutline:!1,content:{width:"100%"}};function s(n){const t={a:"a",div:"div",h1:"h1",header:"header",p:"p",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"power-with-sequence",children:["Power with Sequence",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#power-with-sequence",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,`
`,e.jsx(t.p,{children:"Sequence has a host of battle-tested features vital for building your blockchain-enabled game and scaling to millions of players."}),`
`,e.jsx(h,{})]})}function g(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default,p as frontmatter};
