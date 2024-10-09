import{d as l,j as s}from"./index-BeiwWbZM.js";const r={title:"Fetch Native Network Balance API for ETH, MATIC, AVAX, BNB, etc.",description:"This content provides instructions on fetching native network balances like ETH on Ethereum or MATIC on Polygon."};function i(n){const e={a:"a",code:"code",div:"div",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"native-network-balances-ie-eth-matic-etc",children:["Native network balances (ie. ETH, MATIC, etc.)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#native-network-balances-ie-eth-matic-etc",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h3,{id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",children:["Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:["Sequence Indexer ",s.jsx(e.code,{children:"GetEtherBalance"})," Method:"]})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Request: POST /rpc/Indexer/GetEtherBalance"}),`
`,s.jsx(e.li,{children:"Content-Type: application/json"}),`
`,s.jsxs(e.li,{children:["Body (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"accountAddress"})," (string) -- the wallet account address"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.strong,{children:["Example: ",s.jsx(e.code,{children:"GetEtherBalance"})," MATIC balance of a wallet account address on Polygon using an ",s.jsx(e.code,{children:"API_Access_Key"})]}),`
`,s.jsxs(e.div,{className:"code-group",children:[s.jsx(e.div,{"data-title":"cURL",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"cURL","data-lang":"bash",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -H"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Content-Type: application/json"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -H"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "X-Access-Key: AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY"'}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://polygon-indexer.sequence.app/rpc/Indexer/GetEtherBalance"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -d"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:` '{ "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }'`})]})})})}),s.jsx(e.div,{"data-title":"Typescript",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Typescript","data-lang":"ts",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Works in both a Webapp (browser) or Node.js:"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceIndexer } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/indexer'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" indexer"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://polygon-indexer.sequence.app'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// try any account address you'd like :)"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" accountAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '0xabc...'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// query Sequence Indexer for the MATIC balance on Polygon"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" balance"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getEtherBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	accountAddress: accountAddress,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'tokens in your account:'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", tokenBalances)"})]})]})})}),s.jsx(e.div,{"data-title":"Go",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Go","data-lang":"go",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"context"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"fmt"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"log"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"net/http"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/0xsequence/go-sequence/indexer"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"func"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetEtherBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"accountAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	seqIndexer "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" indexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NewIndexer"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://polygon-indexer.sequence.app"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	nativeBalance, err "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" seqIndexer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetEtherBalance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(context."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Background"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"accountAddress)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"	if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" err "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nil"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		log."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Fatal"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(err)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	}"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	fmt."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Println"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nativeBalance:"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", nativeBalance)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})})]})]})}function c(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{c as default,r as frontmatter};
