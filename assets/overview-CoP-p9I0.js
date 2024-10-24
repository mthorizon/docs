import{d as n,j as e}from"./index-D_HcNa0I.js";const l={title:"Sequence Metadata API - Query Token and NFT Metadata for Ethereum-Compatible Chains",description:"The Sequence Metadata API service provides a fast and simple way to query token & NFT metadata for Ethereum-compatible chains."};function i(a){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"metadata",children:["Metadata",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:`The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata
for Ethereum-compatible chains.`}),`
`,e.jsx(s.p,{children:"To learn how to use the Sequence Metadata service, please read:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/api/metadata/token-metadata",children:"Token metadata API & standards"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/api/metadata/contract-metadata",children:"Contract-level metadata API & standards"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/api/metadata/rest-api",children:"Alternative, REST API Usage"})}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"web--nodejs-installation",children:["Web / node.js Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web--nodejs-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/metadata"})]})})}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsxs(s.p,{children:["This installation requires an API Access Key from ",e.jsx(s.a,{href:"https://sequence.build",children:"Sequence Builder"}),"."]})}),`
`,e.jsxs(s.p,{children:["then in your app (using your ",e.jsx(s.code,{children:"API Access Key"}),"),"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceMetadata } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/metadata'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" metadata"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceMetadata"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://metadata.sequence.app'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"NOTE:"})," if you're using ",e.jsx(s.code,{children:"@0xsequence/metadata"})," from node.js, we recommend using node v18.x or newer."]}),`
`,e.jsxs(s.h3,{id:"go-installation",children:["Go Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"go"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" get"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -u"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" github.com/0xsequence/go-sequence@latest"})]})})}),`
`,e.jsx(s.p,{children:"then in your app,"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'	"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/0xsequence/go-sequence/metadata"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"seqMetadata "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" metadata."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NewMetadata"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"contractInfo, err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" seqMetadata."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetContractInfo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(context."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Background"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"polygon"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x631998e91476DA5B870D741192fc5Cbc55F5a52E"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.h3,{id:"unity-or-unreal-installation",children:["Unity or Unreal Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unity-or-unreal-installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The Sequence Metadata is integrated directly inside of the respective ",e.jsx(s.a,{href:"",children:"Sequence Unity"})," and ",e.jsx(s.a,{href:"",children:"Sequence Unreal"})," SDKs."]}),`
`,e.jsx("br",{})]})}function d(a={}){const{wrapper:s}={...n(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(i,{...a})}):i(a)}export{d as default,l as frontmatter};
