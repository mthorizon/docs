import{d as a,j as e}from"./index-BvIiOmls.js";const r={title:"Leveraging Sequence Analytics API for Robust User Behavior Insights",description:"The Sequence Analytics API allows you to track progress, user behavior, and usage patterns in your game or application. Gain deep insights to enhance engagement, optimize performance, and understand user behaviour."};function i(s){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"analytics",children:["Analytics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#analytics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The Sequence Analytics API is ideal for measuring your progress, seeing how your game or application grows, tracking usage of Sequence solutions, or for ingesting into your own data pipeline for further analysis."}),`
`,e.jsx(n.p,{children:"By leveraging this API, you can gain deep insights into user behavior so whether you're aiming to enhance user engagement, optimize performance, or simply understand usage patterns, the Sequence Analytics API provides the robust analytics capabilities needed to drive success in your game."}),`
`,e.jsxs(n.h2,{id:"supported-networks--endpoints",children:["Supported Networks & Endpoints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-networks--endpoints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You can see the ",e.jsx(n.a,{href:"/solutions/technical-references/chain-support",children:"full list of supported networks here"}),"."]}),`
`,e.jsx(n.aside,{"data-callout":"note",children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://0xsequence.redoc.ly/tag/analytics",children:"Analytics API documentation and testing"})})}),`
`,e.jsxs(n.h2,{id:"getting-started",children:["Getting Started",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"obtaining-a-service-account--token",children:["Obtaining a Service Account & Token",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#obtaining-a-service-account--token",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"You will need to first obtain a Service Account & Token to call this from your backend. Importantly, this is a secret key and should not be exposed publicly."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create a New Project using our ",e.jsx(n.a,{href:"https://sequence.build",children:"Builder"}),". Navigate to Settings > API Keys > Add Service Account."]}),`
`,e.jsx(n.li,{children:"In the modal that pops up, click the dropdown for Permission and change to Write. After completed click Add."}),`
`,e.jsx(n.li,{children:"On the next screen, you will be given your Secret API Token. Copy the key and store it securely as it is not possible to see it again. Once this is done, click Confirm and you are all set to utilize the API."}),`
`]}),`
`,e.jsx(n.p,{children:"Keep in mind, in contrast to our Public API Access key - this Secret API Token should be stored securely and not be used publicly. You will pass this token as a normal JWT in the Request Headers as X-Access-Key"}),`
`,e.jsxs(n.h3,{id:"send-a-request",children:["Send a Request",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#send-a-request",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Now you are ready to send a request, make sure to change the below the SECRET_API_ACCESS_KEY below with your access key as well as the PROJECT_ID which can be found in the URL as a set of integers while in your project on ",e.jsx(n.a,{href:"https://sequence.build",children:"sequence.build"})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"cURL","data-lang":"sh",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'https://api.sequence.build/rpc/Builder/WalletsTotal'"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  -H"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'accept: */*'"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  -H"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'authorization: BEARER <SECRET_API_ACCESS_KEY>'"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  -H"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'content-type: application/json'"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --data-raw"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:` '{"filter":{"projectId":<PROJECT_ID>,"startDate":"2024-04-23","endDate":"2024-05-23"}}'`})]})]})}),`
`,e.jsxs(n.h3,{id:"more-examples",children:["More Examples",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#more-examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Now that you've gotten started - try out a few of our other examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/analytics/examples/wallets#fetch-wallets-for-a-time-interval-for-a-project-id",children:"Fetch wallets within a time interval"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/analytics/examples/wallets#fetch-transactions-by-wallets",children:"Fetch transactions by wallets"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/analytics/examples/wallets#fetch-wallets-by-device",children:"Fetch wallets by device"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/analytics/examples/marketplace#fetch-transactions-on-your-marketplace",children:"Fetch transactions on your Sequence Marketplace"})}),`
`]})]})}function l(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default,r as frontmatter};
