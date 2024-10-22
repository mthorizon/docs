import{j as e,L as q,c as n,u as P,a as _,R as z,b as A,T as b,C as f,r as x,d as C}from"./index-C81m1MD-.js";/* empty css                                */import{I as v,T,D as M,a as E}from"./icons-pzO32iNv.js";import{S as r}from"./SmartLink-wStw_6ql.js";var L="vocs_Button_button",H="vocs_Button_button_accent";function G({children:a,className:t,href:s,variant:l}){return e.jsx(q,{className:n(t,L,l==="accent"&&H),href:s,variant:"styleless",children:a})}var D="vocs_HomePage_button",W="vocs_HomePage_buttons",B="vocs_HomePage_description",R="vocs_HomePage_logo",g="vocs_HomePage_packageManager",U="vocs_HomePage",O="vocs_HomePage_tabs",y="vocs_HomePage_tabsContent",F="vocs_HomePage_tabsList",K="vocs_HomePage_tagline",$="vocs_HomePage_title";function J({children:a,className:t}){return e.jsx("div",{className:n(t,U),children:a})}function u({className:a}){const{logoUrl:t,title:s}=P();return t?e.jsx("div",{className:n(a,R),children:e.jsx(_,{})}):e.jsx("h1",{className:n(a,$),children:s})}function V({children:a,className:t}){return e.jsx("div",{className:n(t,K),children:a})}function X({children:a,className:t}){return e.jsx("div",{className:n(t,B),children:a})}function Q({children:a,className:t}){return e.jsx("div",{className:n(t,W),children:a})}function Y(a){return e.jsx(G,{...a,className:n(D,a.className)})}function Z({name:a,type:t="install"}){return e.jsxs(z,{className:O,defaultValue:"npm",children:[e.jsxs(A,{className:F,children:[e.jsx(b,{value:"npm",children:"npm"}),e.jsx(b,{value:"pnpm",children:"pnpm"}),e.jsx(b,{value:"yarn",children:"yarn"})]}),e.jsxs(f,{className:y,value:"npm",children:[e.jsx("span",{className:g,children:"npm"})," ",t==="init"?"init":"install"," ",a]}),e.jsxs(f,{className:y,value:"pnpm",children:[e.jsx("span",{className:g,children:"pnpm"})," ",t==="init"?"create":"add"," ",a]}),e.jsxs(f,{className:y,value:"yarn",children:[e.jsx("span",{className:g,children:"yarn"})," ",t==="init"?"create":"add"," ",a]})]})}const ee=Object.freeze(Object.defineProperty({__proto__:null,Button:Y,Buttons:Q,Description:X,InstallPackage:Z,Logo:u,Root:J,Tagline:V},Symbol.toStringTag,{value:"Module"}));function te({children:a,className:t}){return e.jsxs("div",{className:n("relative",t),children:[e.jsx("div",{className:"absolute inset-0 z-0 flex items-center dark:bg-matrix-dark bg-matrix-light mix-blend-normal dark:mix-blend-multiply",children:e.jsx("div",{style:{height:"100%",width:"100%",maxHeight:"465px"}})}),e.jsx("div",{className:"relative z-10",children:a})]})}const ae=({logo:a})=>e.jsx(te,{className:"pt-20 pb-40 -mb-10 px-5 z-0",children:e.jsxs("section",{className:"flex flex-col items-center gap-4 max-w-screen-lg mx-auto",children:[a,e.jsx("h2",{className:"text-xl font-bold text-themed-primary max-w-3xl text-center text-wrap px-6",children:"Welcome to Sequence docs. Here you can learn about the modular Sequence products that empower game developers to build engaging web3 games on any Ethereum-compatible chain."})]})}),se=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t border-black-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 py-5",children:[e.jsx("h3",{className:"text-3xl text-themed-primary font-bold",children:"Solutions"}),e.jsx("p",{className:"text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8",children:"Follow our solution guides to boost your game's onboarding experience, unlock new ways to monetize and power your game with the Sequence platform."})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(w,{theme:"purple",heading:"Onboard players",items:[{icon:"WalletIcon",title:"Embedded Wallet",body:"Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence embedded into your game or app, compatible with nearly any platform or game engine.",link:"/solutions/wallets/embedded-wallet/overview"},{icon:"MinterIcon",title:"Sequence Kit",body:"Built on top of wagmi, onboard web2 users or native crypto users with an existing wallet to your web game or app.",link:"/solutions/wallets/sequence-kit/overview"},{icon:"AirdropperIcon",title:"Wallet Linking",body:"Enable users to link their embedded wallet in your game with an external wallet - allowing you to query assets, balances, and allow easy flow of liquidity to your game.",link:"/solutions/wallets/link-wallets/overview"},{icon:"WalletIcon",title:"Universal Wallet",body:"Easily onboard web3-native players with a complete Universal Wallet.",link:"/solutions/wallets/universal-wallet/overview"}]}),e.jsx(w,{theme:"green",heading:"Earn more revenue",items:[{icon:"MarketplaceIcon",title:"White-Label Marketplace",body:"Launch an in-game collectibles marketplace within minutes.",link:"/solutions/marketplaces/white-label-marketplace"},{icon:"SequenceIcon",title:"Marketplace APIs",body:"Integrate custom in-game marketplaces with our APIs.",link:"/solutions/marketplaces/orderbook/overview"},{icon:"CartIcon",title:"NFT Checkout",body:"Offer easy purchases with credit card, crypto, IAP support.",link:"/solutions/wallets/sequence-kit/checkout"},{icon:"NodeGatewayIcon",title:"Fiat On-ramps",body:"Allow players to convert from fiat to crypto globally.",link:"/solutions/payments/onramps/fiat-on-ramps"}]}),e.jsx(w,{theme:"yellow",heading:"Power your game",items:[{icon:"IndexerIcon",title:"Indexer",body:"Performantly query wallets and contracts to use in your game or app.",link:"/solutions/builder/indexer"},{icon:"CollectiblesIcon",title:"Contracts & Collectibles",body:"Import any contract or deploy a new one with our audited smart contract suite. Manage your collection metadata at scale.",link:"/solutions/collectibles/contracts/deploy-an-item-collection"},{icon:"AnalyticsIcon",title:"Analytics",body:"Track every aspect of web3 activity within your games.",link:"/solutions/builder/analytics"},{icon:"MinterIcon",title:"Transaction Manager",body:"Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.",link:"/solutions/transactions-api/overview"}]})]})]}),w=({heading:a,items:t,theme:s})=>e.jsx("div",{className:"flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden",children:e.jsxs("div",{className:"flex flex-col gap-3 p-4 relative",children:[e.jsx("div",{className:n("absolute inset-0 opacity-20 z-0 pointer-events-none",{"dark:bg-gradient-to-b from-[#3400A0] to-transparent":s==="purple","dark:bg-gradient-to-b from-[#0A3F16] to-transparent":s==="green","dark:bg-gradient-to-b from-[#897031] to-transparent":s==="yellow"})}),e.jsx("p",{className:"px-4 font-bold text-themed-primary z-10",children:a}),t.map((l,o)=>{const i=v[l.icon];return e.jsxs("a",{href:l.link,className:"hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7",children:[e.jsx("div",{className:"flex gap-2",children:e.jsxs("p",{className:"flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary",children:[e.jsx("span",{className:"mt-1",children:e.jsx(i,{})}),l.title]})}),e.jsx("p",{className:"text-themed-secondary text-sm font-medium",children:l.body})]},o)})]})}),le=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t dark:border-white-10 border-black-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 py-5",children:[e.jsx("h3",{className:"text-3xl text-themed-primary font-bold",children:"Guides"}),e.jsx("p",{className:"text-md leading-6 font-medium dark:text-white-80 text-black-80 mr-8",children:"Follow our step-by-step guides and open source code templates to accelerate your time to market."})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 md:flex-row flex-col",children:[e.jsx(m,{title:"Build a web3 game with WebGL",body:"Follow a step by step guide to build a web-based game demo that leverages Sequence Embedded Wallet with custom in-game achievement tokens.",link:"/guides/webgl-guide"}),e.jsx(m,{title:"Build a web3 game with Unity",body:"Learn how to build an engaging iOS and Android game that uses Sequence Embedded Wallets under the hood for an integrated marketplace and in-game currency.",link:"/guides/jelly-forest-unity-guide"}),e.jsx(m,{title:"Sell your Game Items via a Webshop",body:"Accelerate your game growth by selling items directly to your players with a webshop leveraging Sequence sale and item contracts.",link:"/guides/primary-sales"}),e.jsx(m,{title:"Sequence Market",body:"Build an API-driven marketplace where players can mint, then sell or buy items using a custom web-based interface leveraging Sequence Orderbook APIs.",link:"/guides/custom-marketplace"})]})]}),m=({title:a,body:t,link:s,image:l})=>e.jsxs("div",{className:"flex flex-col gap-4 p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(50%-8px)]",children:[l&&e.jsx("div",{className:"rounded-md overflow-hidden w-full aspect-[2]",children:e.jsx("img",{src:l,className:"object-cover w-full h-full"})}),e.jsx("p",{className:"text-xl leading-7 text-themed-primary font-bold",children:a}),e.jsx("p",{className:"text-themed-secondary text-md font-medium leading-6",children:t}),e.jsx(r,{href:s,className:"hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit",children:"Read guide"})]}),re=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t dark:border-white-10 border-black-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 py-5",children:[e.jsx("h3",{className:"text-3xl text-themed-primary font-bold",children:"SDKs"}),e.jsx("p",{className:"text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8",children:"Leverage our open source SDKs to easily integrate from any popular game development framework or language."})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 md:flex-row flex-col",children:[e.jsx(d,{icon:"UnityIcon",title:"Unity",body:"Integrate Sequence with our native Unity library.",link:"/sdk/unity/overview"}),e.jsx(d,{icon:"UnrealIcon",title:"Unreal Engine",body:"Integrate Sequence with our native Unreal Engine library.",link:"/sdk/unreal/overview"}),e.jsx(d,{icon:"GolangIcon",title:"Go",body:"Leverage Sequence APIs easily from your Go backend.",link:"/sdk/go/overview"}),e.jsx(d,{icon:"NodeJSIcon",title:"Typescript",body:"Integrate Sequence APIs with our TypeScript SDK.",link:"/sdk/typescript/guides/overview"}),e.jsx(d,{icon:"ReactIcon",title:"Mobile",body:"Integrate Sequence APIs for your mobile game with our React Native SDK",link:"/sdk/mobile"})]})]}),d=({title:a,body:t,icon:s,link:l})=>{const o=v[s];return e.jsxs(r,{href:l,className:"hover-fade p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(33%-(16px/3))]",children:[e.jsxs("p",{className:"font-bold text-themed-primary text-xl leading-7 flex items-center gap-2",children:[e.jsx(o,{}),a]}),e.jsx("p",{className:"text-sm font-medium text-themed-secondary",children:t})]})},ne=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t dark:border-white-10 border-black-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 py-5",children:[e.jsx("h3",{className:"text-3xl text-themed-primary font-bold",children:"APIs"}),e.jsx("p",{className:"text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8",children:"Use our modular APIs for more advanced integrations and for accessing on-chain data through easy-to-use interfaces."})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 md:flex-row flex-col",children:[e.jsx(c,{title:"Marketplace API",icon:"MarketplaceIcon",body:"Integrate sell and buy operations through our orderbook interface.",link:"/api/marketplace/overview"}),e.jsx(c,{title:"Indexer API",icon:"IndexerIcon",body:"Query wallets and contracts on Ethereum-compatible chains.",link:"/api/indexer/overview"}),e.jsx(c,{title:"Metadata API",icon:"SequenceIcon",body:"Fetch token details on any collection and collectible.",link:"/api/metadata/overview"}),e.jsx(c,{title:"Analytics API",icon:"AnalyticsIcon",body:"Analyze, track, and report on vital metrics with our Analytics API.",link:"/api/analytics/overview"}),e.jsx(c,{title:"Transactions API",icon:"SequenceIcon",body:"Send and optimize transactions on any chain through our performant Sequence Relayer.",link:"/api/transactions/overview"}),e.jsx(c,{title:"Node Gateway",icon:"NodeGatewayIcon",body:"Leverage Sequence's auto-scaling node service.",link:"/api/node-gateway"})]})]}),c=({title:a,body:t,icon:s,link:l})=>{const o=v[s];return e.jsxs(r,{href:l,className:"hover-fade p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(33%-(16px/3))]",children:[e.jsxs("p",{className:"font-bold text-themed-primary text-xl leading-7 flex items-center gap-2",children:[e.jsx(o,{}),a]}),e.jsx("p",{className:"text-sm font-medium text-themed-secondary",children:t})]})},oe=()=>e.jsxs("section",{className:"flex flex-col gap-5 border-t dark:border-white-10 border-black-10",children:[e.jsxs("div",{className:"flex flex-col gap-1 py-5",children:[e.jsx("h3",{className:"text-3xl text-themed-primary font-bold",children:"Support"}),e.jsx("p",{className:"text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8",children:"Get help with our stellar support team, community and knowledge base. Please feel free to reach out with any specific questions."})]}),e.jsxs("div",{className:"flex flex-wrap gap-x-10 gap-y-5 md:flex-row flex-col",children:[e.jsx(de,{link:"https://0xsequence.featurebase.app/",title:"Changelog",body:"See what we've been working on and keep up to date."}),e.jsx(me,{link:"https://discord.gg/sequence",title:"Community",body:"Join our Discord community to learn from others building on Sequence."}),e.jsx(ce,{link:"https://go.crisp.chat/chat/embed/?website_id=9ef4395b-6bb1-4645-8e02-6071d89290a1",title:"Contact our team",body:"Reach out to our team to get support on your integration or how you can partner with Sequence."}),e.jsx(ie,{link:"/support",title:"Support",body:"Browse our support pages which has everything from FAQs, to our token directory, and other resources."})]})]}),ie=({title:a,body:t,link:s})=>e.jsxs("div",{className:"md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-themed-primary font-bold text-xl leading-7",children:a}),e.jsx("p",{className:"text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6",children:t})]}),e.jsx(r,{href:s,className:"hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary",children:"Get Support"})]}),ce=({title:a,body:t,link:s})=>e.jsxs("div",{className:"md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-themed-primary font-bold text-xl leading-7",children:a}),e.jsx("p",{className:"text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6",children:t})]}),e.jsx(r,{href:s,className:"hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary",children:"Contact us"})]}),de=({title:a,body:t,link:s})=>e.jsxs("div",{className:"md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-themed-primary font-bold text-xl leading-7",children:a}),e.jsx("p",{className:"text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6",children:t})]}),e.jsx(r,{href:s,className:"hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary",children:"View Updates"})]}),me=({title:a,body:t,link:s})=>e.jsxs("div",{className:"md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-themed-primary font-bold text-xl leading-7",children:a}),e.jsx("p",{className:"text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6",children:t})]}),e.jsx(r,{href:s,className:"hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary",children:"Join us"})]});function xe({children:a,className:t}){return e.jsxs("div",{className:n("relative",t),children:[e.jsxs("div",{className:"absolute inset-0 z-0 flex items-center",children:[e.jsx("div",{className:"w-full h-full max-h-[600px] dark:bg-gradient-dark bg-gradient-light"}),e.jsx("div",{className:"clouds animate-clouds",style:{backgroundImage:"url(/img/bot/clouds.svg)"},"aria-label":"Animated Clouds"}),e.jsx("div",{className:"clouds2 animate-clouds2",style:{backgroundImage:"url(/img/bot/clouds2.svg)"},"aria-label":"Animated Clouds 2"})]}),e.jsx("div",{className:"relative z-10",children:a})]})}const ue=({logo:a})=>{const[t,s]=fe(),[l,o]=x.useState("");return e.jsx("footer",{className:"border-t border-black-10 px-5 pt-15",children:e.jsxs("div",{className:"w-full max-w-screen-lg mx-auto flex flex-col gap-10",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(r,{href:"https://sequence.xyz",className:"hover-fade w-fit",children:a}),e.jsxs("div",{className:"flex gap-10 md:items-start md:flex-row flex-col",children:[e.jsx("div",{className:"flex-1",children:e.jsx("form",{onSubmit:i=>{i.preventDefault(),s(l)},children:e.jsxs("div",{className:"flex items-center rounded-lg border dark:border-white-25 border-black-10 p-3 md:max-w-[378px]",children:[e.jsx("input",{className:n("pl-1 pr-4 w-full outline-none bg-transparent text-sm","dark:text-white-80 text-black-80","dark:placeholder:text-white-50 placeholder:text-black-50"),placeholder:"Stay up to date",type:"text",value:t==="invalid"?"Please enter a valid email address!":t==="success"?"Thanks for joining!":l,disabled:t!=="initial",onChange:i=>o(i.target.value)}),e.jsx("button",{type:"submit",disabled:t!=="initial",className:"hover-fade px-3 py-1 rounded text-themed-primary dark:bg-white-15 bg-black-7 font-bold text-[0.625rem] leading-[1rem] disabled:pointer-events-none","aria-label":"Join",children:e.jsx("div",{className:"flex justify-center w-[22px]",children:t==="loading"?e.jsx("div",{className:"py-0.5",children:e.jsx("div",{className:n("w-3 h-3 border-2 rounded-full border border-l-transparent animate-spin","dark:border-t-white border-t-black-80","dark:border-r-white border-r-black-80","dark:border-b-white border-b-black-80")})}):"Join"})})]})})}),e.jsx("div",{className:"flex-1 flex gap-2 text-xs font-medium text-themed-secondary",children:he.map((i,h)=>e.jsx("div",{className:"w-1/2 flex md:flex-row flex-col gap-2.5",children:i.map((p,I)=>e.jsx("div",{className:"md:grow flex flex-col gap-3",children:p.map((j,S)=>e.jsx(r,{href:j.href,className:"w-fit hover-fade",children:j.text},S))},I))},h))})]})]}),e.jsxs("div",{className:"border-t dark:border-white-10 border-black-10 flex items-center justify-between py-7",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{href:"https://twitter.com/0xsequence",className:"text-themed-secondary hover-fade",children:e.jsx(T,{})}),e.jsx(r,{href:"https://discord.gg/sequence",className:"text-themed-secondary hover-fade",children:e.jsx(M,{})}),e.jsx(r,{href:"https://www.instagram.com/0xsequence",className:"text-themed-secondary hover-fade",children:e.jsx(E,{})})]}),e.jsx(r,{href:"https://horizon.io",className:"hover-fade",children:e.jsx("img",{src:"/img/horizon-logo.png",className:"max-w-24 dark:invert-0 invert",alt:"Horizon Blockchain Gaming. We're building a new dimension, where Internet economies are fun, accessible, and for the benefit of all participants."})})]})]})})},he=[[[{text:"Home",href:"https://sequence.xyz"},{text:"Pricing",href:"https://sequence.xyz/pricing"},{text:"Blog",href:"https://sequence.xyz/blog"}],[{text:"Terms",href:"https://sequence.xyz/terms"},{text:"Privacy",href:"https://sequence.xyz/privacy"}]],[[{text:"Contact",href:"https://sequence.xyz/contact"},{text:"Media Kit",href:"https://40061393.fs1.hubspotusercontent-na1.net/hubfs/40061393/Sequence%20Media%20Kit%202024.pdf"},{text:"Docs",href:"https://docs.sequence.xyz"}],[{text:"Sequence Builder",href:"https://sequence.build"},{text:"Sequence Wallet",href:"https://sequence.app"}]]],pe=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,be="65e38f6a-690c-4318-80db-be3b97a34448",fe=()=>{const[a,t]=x.useState("initial"),s=x.useRef(void 0);return x.useEffect(()=>()=>{clearTimeout(s.current),s.current=void 0},[]),[a,async o=>{if(!pe.test(o)){t("invalid"),clearTimeout(s.current),s.current=setTimeout(()=>t("initial"),1500);return}t("loading");const h=await fetch(`https://sequence-contentful.vercel.app/api/forms/${be}`,{method:"POST",body:JSON.stringify({fields:[{name:"email",value:o}],context:{pageUri:window.location.href,pageName:"Sequence docs footer"},skipValidation:"false"})}),{result:p}=await h.json();if(p==="error"){t("error"),clearTimeout(s.current),s.current=setTimeout(()=>t("initial"),1500);return}t("success")}]},je={title:"Sequence - Web3 Gaming Platform",description:"The documentation for the Sequence infrastructure stack for web3 gaming.",layout:"landing",showLogo:!1,content:{horizontalPadding:"0px",width:"100%",verticalPadding:"0px"}};function k(a){return ee||N("HomePage",!1),u||N("HomePage.Logo",!0),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(ae,{logo:e.jsx(u,{className:"w-52"})}),e.jsx("div",{className:"px-5 z-10",children:e.jsx("div",{className:"w-full max-w-screen-lg mx-auto",children:e.jsx(se,{})})}),e.jsx(xe,{className:"px-5 mt-30",children:e.jsx("div",{className:"w-full max-w-screen-lg mx-auto",children:e.jsx(le,{})})}),e.jsx("div",{className:"px-5 my-30",children:e.jsxs("div",{className:"w-full max-w-screen-lg mx-auto flex flex-col gap-30",children:[e.jsx(re,{}),e.jsx(ne,{}),e.jsx(oe,{})]})}),e.jsx(ue,{logo:e.jsx(u,{className:"w-32"})})]})}function ke(a={}){const{wrapper:t}={...C(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(k,{...a})}):k()}function N(a,t){throw new Error("Expected "+(t?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ke as default,je as frontmatter};
