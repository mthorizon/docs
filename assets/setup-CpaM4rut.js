import{d as a,j as e}from"./index-ETUGsHkv.js";const t={title:"Sequence - Web3 Gaming Platform - Unity SDK Setup",description:"Documentation for Unity SDK setup for the Sequence infrastructure stack for web3 gaming."};function s(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"configuration",children:["Configuration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"We now are opting to use .ini files to store configurations for the plugin rather than storing them in the plugin itself. This will make integrating updates to the plugin much simpler."}),`
`,e.jsx(n.p,{children:"To do this please go to [YourProjectDirectory]/Config And create a file named [SequenceConfig.ini]"}),`
`,e.jsxs(n.p,{children:["Within ",e.jsx(n.strong,{children:"[SequenceConfig.ini]"})," add the following lines:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"[/Script/Sequence.Config]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'FallbackEncryptionKey = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'WaaSConfigKey = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'ProjectAccessKey = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'GoogleClientID = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'AppleClientID = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'FacebookClientID = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'DiscordClientID = "" '})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'RedirectUrl = "https://api.sequence.app"'})})]})}),`
`,e.jsxs(n.h2,{id:"configuration-key-management",children:["Configuration Key Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-key-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Before you can use the Sequence Unreal SDK, you need to acquire the following configuration keys from the Sequence Builder:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"WaaSConfigKey"}),": This key can be learned about ",e.jsx(n.a,{href:"https://docs.sequence.xyz/solutions/builder/embedded-wallet",children:"here"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ProjectAccessKey"}),": This key can be learned about ",e.jsx(n.a,{href:"https://docs.sequence.xyz/solutions/builder/getting-started#claim-an-api-access-key",children:"here"})]}),`
`,e.jsxs(n.p,{children:["You can then add these credentials in the SequenceConfig.ini file under ",e.jsx(n.strong,{children:"[YourProject]/Config/SequenceConfig.ini."})]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Make sure to get the WaaS keys from ",e.jsx(n.strong,{children:"Production Mode"}),"."]})}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsxs(n.p,{children:["Don't forget to ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet",children:"configure your embedded wallet settings in the Builder"}),"!"]})}),`
`,e.jsxs(n.h2,{id:"security",children:["Security",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"You must provide a 32 character encryption key in the [SequenceConfig.ini] file under [YourProject]/Config/SequenceConfig.ini under the config variable FallbackEncryptionKey."}),`
`,e.jsxs(n.p,{children:["In order to prevent tampering with data you must encrypt your packaged project using Unreals packaging settings. You can refer to ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-unreal-engine-projects?application_version=5.3",children:"these docs"})," for more information."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsx(n.p,{children:"You can use a password manager (or any other secure randomness source) to generate this encryption key"})}),`
`,e.jsx(n.aside,{"data-callout":"warning",children:e.jsx(n.p,{children:"Only alphanumeric characters are accepted!"})}),`
`,e.jsx(n.aside,{"data-callout":"danger",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"STOP!"})," Everything on this page is very important! Please double-check that you have done everything!"]})})]})}function c(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default,t as frontmatter};
