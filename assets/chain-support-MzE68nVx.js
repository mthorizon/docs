import{j as e,d as p}from"./index-B7cEzOlw.js";const c=({title:s})=>e.jsx("th",{children:s}),h=({children:s,index:n})=>{const t=n%2===0?"#3c393f":"#1e1d1f";return e.jsx("tr",{style:{backgroundColor:t},children:s})},a=({content:s,imgSrc:n})=>e.jsx("td",{children:e.jsxs("div",{className:"cell-content",children:[n&&e.jsx("img",{src:n,alt:"",className:"cell-image network-logo"}),e.jsx("span",{className:"cell-text",children:s})]})}),o=({rows:s,columns:n})=>e.jsxs("table",{className:"docs-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:n.map(t=>e.jsx(c,{title:t}))})}),e.jsx("tbody",{children:s.map((t,i)=>e.jsxs(h,{index:i,children:[e.jsx(a,{content:t.network,imgSrc:t.networkImage}),e.jsx(a,{content:t.chainHandle}),e.jsx(a,{content:t.indexerEndpoint}),e.jsx(a,{content:t.rpcURL}),e.jsx(a,{content:t.chainPage})]},i))})]}),l={title:"Sequence Multi-Chain Support - Networks and Testnets",description:"Sequence provides multi-chain support for EVM compatible networks.",showOutline:!1,content:{width:"100%"}};function r(s){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"multi-chain-support",children:["Multi-Chain Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multi-chain-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,`
`,e.jsxs(n.strong,{children:["Sequence Status Page: ",e.jsx(n.a,{href:"https://status.sequence.info",children:"https://status.sequence.info"})]}),`
`,e.jsxs(n.p,{children:[`Sequence can support all EVM compatible chains. The networks below are currently supported by Sequence Wallet, Sequence Indexer,
Sequence Relayer and all Sequence SDKs, however if you have a chain not in this list - please `,e.jsx(n.a,{href:"https://support.sequence.xyz/en/",children:"contact us"})," and we are happy to integrate."]}),`
`,e.jsxs(n.h2,{id:"networks",children:["Networks",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#networks",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o,{columns:["Network","Chain Handle","Indexer Endpoint","RPC URL","Chain Page"],rows:[{networkImage:"https://assets.sequence.info/images/networks/medium/1.webp",network:"Ethereum",chainHandle:"mainnet",indexerEndpoint:"https://mainnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/mainnet",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/ethereum",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/42161.webp",network:"Arbitrum One",chainHandle:"arbitrum",indexerEndpoint:"https://arbitrum-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/arbitrum",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/arbitrum",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/42170.webp",network:"Arbitrum Nova",chainHandle:"arbitrum-nova",indexerEndpoint:"https://arbitrum-nova-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/arbitrum-nova",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/arbitrum-nova",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/137.webp",network:"Polygon",chainHandle:"polygon",indexerEndpoint:"https://polygon-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/polygon",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/polygon",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/33111.webp",network:"Apechain",chainHandle:"apechain",indexerEndpoint:"https://apechain-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/apechain",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/apechain",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/1993.webp",network:"B3",chainHandle:"b3",indexerEndpoint:"https://b3-indexer.sequence.app/status",rpcURL:"https://nodes.sequence.app/b3",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/b3",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/1101.webp",network:"Polygon zkEVM",chainHandle:"polygon-zkevm",indexerEndpoint:"https://polygon-zkevm-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/polygon-zkevm",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/polygon-zkevm",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/3776.webp",network:"Astar zkEVM",chainHandle:"astar-zkevm",indexerEndpoint:"https://astar-zkevm-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/astar-zkevm",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/astar-zkevm",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/8453.webp",network:"Base",chainHandle:"base",indexerEndpoint:"https://base-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/base",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/base",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/10.webp",network:"Optimism",chainHandle:"optimism",indexerEndpoint:"https://optimism-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/optimism",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/optimism",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/660279.webp",network:"XAI",chainHandle:"xai",indexerEndpoint:"https://xai-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/xai",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/xai",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/81457.webp",network:"Blast",chainHandle:"blast",indexerEndpoint:"https://blast-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/blast",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/blast",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/43114.webp",network:"Avalanche",chainHandle:"avalanche",indexerEndpoint:"https://avalanche-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/avalanche",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/avalanche",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/19011.webp",network:"Homeverse",chainHandle:"homeverse",indexerEndpoint:"https://homeverse-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/homeverse",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/home-verse",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/56.webp",network:"BSC",chainHandle:"bsc",indexerEndpoint:"https://bsc-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/bsc",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/binance",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/100.webp",network:"Gnosis",chainHandle:"gnosis",indexerEndpoint:"https://gnosis-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/gnosis",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/gnosis",children:"Link"})}]}),`
`,e.jsxs(n.h2,{id:"testnets",children:["Testnets",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#testnets",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o,{columns:["Network","Chain Handle","Indexer Endpoint","RPC URL","Chain Page"],rows:[{networkImage:"https://assets.sequence.info/images/networks/medium/42161.webp",network:"Arbitrum Sepolia",chainHandle:"arbitrum-sepolia",indexerEndpoint:"https://arbitrum-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/arbitrum-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/arbitrum-sepolia",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/137.webp",network:"Polygon Amoy",chainHandle:"amoy",indexerEndpoint:"https://amoy-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/amoy",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/polygon-amoy-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/3776.webp",network:"Astar zkEVM",chainHandle:"astar-zkyoto",indexerEndpoint:"https://astar-zkyoto-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/astar-zkyoto",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/astar-zkyoto",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/8453.webp",network:"Base Sepolia",chainHandle:"base-sepolia",indexerEndpoint:"https://base-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/base-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/base-sepolia-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/1993.webp",network:"B3 Sepolia",chainHandle:"b3-sepolia",indexerEndpoint:"https://b3-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/b3-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/b3-sepolia",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/43114.webp",network:"Avalanche Testnet",chainHandle:"avalanche-testnet",indexerEndpoint:"https://avalanche-testnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/avalanche-testnet",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/avalanche-fuji",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/33111.webp",network:"Apechain Testnet",chainHandle:"apechain-testnet",indexerEndpoint:"https://apechain-testnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/apechain-testnet",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/apechain-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/1993.webp",network:"B3-Sepolia",chainHandle:"b3-sepolia",indexerEndpoint:"https://b3-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/b3-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/b3",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/168587773.webp",network:"Blast Testnet",chainHandle:"blast-sepolia",indexerEndpoint:"https://blast-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/blast-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/blast-sepolia-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/19011.webp",network:"Homeverse Testnet",chainHandle:"homeverse-testnet",indexerEndpoint:"https://homeverse-testnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/homeverse-testnet",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/oasys-homeverse-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/56.webp",network:"BSC Testnet",chainHandle:"bsc-testnet",indexerEndpoint:"https://bsc-testnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/bsc-testnet",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/binance-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/11155111.webp",network:"Ethereum Sepolia",chainHandle:"sepolia",indexerEndpoint:"https://sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/sepolia",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/33111.webp",network:"Ape Chain Testnet",chainHandle:"apechain-testnet",indexerEndpoint:"https://apechain-testnet-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/apechain-testnet",chainPage:"Coming Soon"},{networkImage:"https://assets.sequence.info/images/networks/medium/10.webp",network:"Optimism Sepolia",chainHandle:"optimism-sepolia",indexerEndpoint:"https://optimism-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/optimism-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/op-sepolia-testnet",children:"Link"})},{networkImage:"https://assets.sequence.info/images/networks/medium/660279.webp",network:"XAI Sepolia",chainHandle:"xai-sepolia",indexerEndpoint:"https://xai-sepolia-indexer.sequence.app",rpcURL:"https://nodes.sequence.app/xai-sepolia",chainPage:e.jsx(n.a,{href:"/solutions/chainlist/Integrated/xai-sepolia",children:"Link"})}]}),`
`,e.jsxs(n.p,{children:["As a reference list for developers, we have an aggregated list of EVM chains that Sequence could support ",e.jsx(n.a,{href:"/solutions/chainlist/non-integrated-overview",children:"here"}),". If you are looking for support for any of the chains below, please get in contact with us."]})]})}function u(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default,l as frontmatter};
