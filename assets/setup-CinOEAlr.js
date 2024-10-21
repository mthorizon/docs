import{d as s,j as e}from"./index-91LSPTZq.js";const a={title:"Sequence - Web3 Gaming Platform - Unity SDK Overview",description:"Documentation for Unity SDK setup for the Sequence infrastructure stack for web3 gaming."};function i(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"setup",children:["Setup",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Navigate to the Resources folder imported via the ",e.jsx(t.code,{children:"Setup"})," sample and locate the ",e.jsx(t.code,{children:"SequenceConfig"})," ScriptableObject"]}),`
`,e.jsx(t.p,{children:"a) If you imported the SDK manually, you will need to create a Resources folder and SequenceConfig"}),`
`,e.jsxs(t.p,{children:["b) Create a ",e.jsx(t.code,{children:"Resources"})," folder located at ",e.jsx(t.code,{children:"Assets/Resources"}),". The SDK uses ",e.jsx(t.a,{href:"https://docs.unity3d.com/ScriptReference/Resources.Load.html",children:"Resources.Load"})," to load the config ",e.jsx(t.code,{children:"ScriptableObject"})," we'll create in the next step."]}),`
`,e.jsxs(t.p,{children:["c) On the top bar, click ",e.jsx(t.code,{children:"Assets > Create > Sequence > SequenceConfig"})," and place the newly created ",e.jsx(t.code,{children:"ScriptableObject"})," at the root of your ",e.jsx(t.code,{children:"Resources"})," folder."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Fill in ",e.jsx(t.code,{children:"SequenceConfig"})," with the appropriate values for your project."]}),`
`,e.jsxs(t.p,{children:["a) ",e.jsx(t.code,{children:"Url Scheme"})," - You must replace this with a string that is unique to your application. This is very important. Failure to do so will cause unexpected behaviour when signing in with social sign in and it will not work."]}),`
`,e.jsxs(t.p,{children:["b) ",e.jsx(t.code,{children:"Builder API Keys"})," - These are found in the ",e.jsx(t.a,{href:"https://sequence.build/",children:"Sequence Builder"})," under ",e.jsx(t.code,{children:"Settings > API Keys"})]}),`
`,e.jsxs(t.p,{children:["c) ",e.jsx(t.code,{children:"WaaS Config Key"})," - You can get this key in ",e.jsx(t.a,{href:"https://sequence.build/",children:"Sequence Builder"})," under ",e.jsx(t.code,{children:"Onboard > Embedded Wallet"})]}),`
`,e.jsxs(t.p,{children:["d) ",e.jsx(t.code,{children:"StoreSessionPrivateKeyInSecureStorage"})," - Available on select platforms: we have integrated with the platform's native secure storage system. If enabled, we will store session wallet info (including the private key) in secure storage and automatically attempt to recover the session for the user after closing the app (so they won't need to login again). With this disabled (default) or on an unsupported platform, the session wallet's private keys never leave the application's runtime memory; however, your user will need to sign in again anytime they close the app. The default ",e.jsx(t.code,{children:"LoginPanel"})," UI (see ",e.jsx(t.a,{href:"/sdk/unity/recovering-sessions",children:"Recovering Sessions"}),") will handle this behaviour for you automatically, navigating to the appropriate page."]}),`
`,e.jsxs(t.p,{children:["e) ",e.jsx(t.code,{children:"EnableMultipleAccountsPerEmail"})," - By default, the SDK will only allow users to create one account per email. The account is initially associated with the login method used (email + OTP, PlayFab, Google, etc.); the user can associate additional login methods with their account (more on this in the ",e.jsx(t.a,{href:"/sdk/unity/authentication/federated-accounts",children:"Authentication section"}),"). If ",e.jsx(t.code,{children:"EnableMultipleAccountsPerEmail"})," is enabled, users have the option to create multiple accounts per email address (associated with different login methods). While we have enabled this functionality, we, in general, feel this behaviour may be confusing to end-users and recommend integrators keep this option in the default disabled status."]}),`
`]}),`
`]}),`
`,e.jsx(t.aside,{"data-callout":"warning",children:e.jsxs(t.p,{children:["Before proceeding, please make sure you have properly configured the Embedded Wallet in the Builder. See this ",e.jsx(t.a,{href:"/solutions/builder/embedded-wallet",children:"guide"}),"."]})}),`
`,e.jsx(t.aside,{"data-callout":"warning",children:e.jsxs(t.p,{children:['Please double check that you have copy and pasted the configuration keys from the Builder correctly! This is the most common issue reported when integrating our SDK. If you receive an "invalid tenant" response, you have messed up your configuration! See this ',e.jsx(t.a,{href:"/solutions/builder/embedded-wallet",children:"guide"}),"."]})})]})}function r(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{r as default,a as frontmatter};
