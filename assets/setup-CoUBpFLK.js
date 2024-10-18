import{d as i,j as e}from"./index-D9Qc1RWB.js";const s={title:"Sequence - Web3 Gaming Platform - Unity SDK Setup",description:"Documentation for Unity SDK setup for the Sequence infrastructure stack for web3 gaming."};function t(r){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.div,{"data-vocs-steps":"true",children:[e.jsxs(n.div,{"data-depth":"3",children:[e.jsxs(n.h3,{id:"create-a-config-file",children:["Create a config file",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-config-file",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Navigate to ",e.jsx(n.code,{children:"[YourProjectDirectory]/Config"}),", create a file named ",e.jsx(n.code,{children:"SequenceConfig.ini"}),", and add the following lines:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`[/Script/Sequence.Config]

FallbackEncryptionKey = "" 
WaaSConfigKey = "" 
ProjectAccessKey = "" 
GoogleClientID = "" 
AppleClientID = "" 
FacebookClientID = "" 
DiscordClientID = ""
PlayFabTitleID = ""
RedirectUrl = "https://api.sequence.app"
`})})]}),e.jsxs(n.div,{"data-depth":"3",children:[e.jsxs(n.h3,{id:"add-your-project-keys",children:["Add your project keys",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-your-project-keys",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsxs(n.p,{children:["Fill in ",e.jsx(n.code,{children:"[YourProjectDirectory]/Config/SequenceConfig.ini"})," with the appropriate values for your project."]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WaaS Config Key"})," - You can get this key in ",e.jsx(n.a,{href:"https://sequence.build/",children:"Sequence Builder"})," under ",e.jsx(n.strong,{children:"Onboard > Embedded Wallet"})]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Project Access Key"})," - You can get this key in ",e.jsx(n.a,{href:"https://sequence.build/",children:"Sequence Builder"})," under ",e.jsx(n.strong,{children:"Settings > API Keys"})]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Fallback Encryption Key"})," - Create a 32-character long alphanumeric encryption key."]})]})]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Make sure to get the WaaS keys from ",e.jsx(n.strong,{children:"Production Mode"}),"."]})}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsxs(n.p,{children:["Don't forget to ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet",children:"configure your embedded wallet settings in the Builder"}),"!"]})}),`
`,e.jsxs(n.h2,{id:"security",children:["Security",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In order to prevent tampering with data you must encrypt your packaged project using Unreals packaging settings. You can refer to ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-unreal-engine-projects?application_version=5.3",children:"these docs"})," for more information."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsx(n.p,{children:"You can use a password manager (or any other secure randomness source) to generate this encryption key"})}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsx(n.p,{children:"Only alphanumeric characters are accepted!"})}),`
`,e.jsx(n.aside,{"data-callout":"danger",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"STOP!"})," Everything on this page is very important! Please double-check that you have done everything!"]})})]})}function d(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{d as default,s as frontmatter};
