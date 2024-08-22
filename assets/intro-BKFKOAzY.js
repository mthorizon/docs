import{d as s,j as e}from"./index-Dcq28AnX.js";const d={title:"Authentication - Introduction",description:"undefined"};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"authentication---introduction",children:["Authentication - Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication---introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["As a WaaS SDK, authentication is extremely important. Authentication works by establishing a session signing wallet through association with an ",e.jsx(n.a,{href:"https://auth0.com/docs/secure/tokens/id-tokens/id-token-structure#sample-id-token",children:"OIDC idToken"}),". For more on how our Embedded Wallet works, please ",e.jsx(n.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"see Embedded Wallet docs"}),"."]}),`
`,e.jsxs(n.p,{children:["To implement authentication, we recommend using our ",e.jsx(n.code,{children:"LoginPanel"})," prefab. Locate this prefab under ",e.jsx(n.code,{children:"SequenceExamples > Prefabs"})," and drag it under a ",e.jsx(n.a,{href:"https://docs.unity3d.com/2020.1/Documentation/Manual/UICanvas.html",children:"Canvas"}),` in your scene.
We recommend having the `,e.jsx(n.code,{children:"Canvas Scaler"})," component attached to your ",e.jsx(n.code,{children:"Canvas"}),' use the "Scale with Screen Size" UI Scale Mode. This will make it so that the LoginPanel (and any other UI elements under this Canvas) are scaled automatically when switching between build targets.']}),`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"LoginPanel"})," is hidden by default. You can open it with the ",e.jsx(n.code,{children:"Open"})," method and no arguments. To help with this, the ",e.jsx(n.code,{children:"LoginPanel"})," GameObject is not disabled, so feel free to use ",e.jsx(n.a,{href:"https://docs.unity3d.com/ScriptReference/Component.GetComponentInChildren.html",children:"GetComponentInChildren"}),", ",e.jsx(n.a,{href:"https://docs.unity3d.com/ScriptReference/Object.FindObjectOfType.html",children:"FindObjectOfType"}),", or similar to obtain a reference to the ",e.jsx(n.code,{children:"LoginPanel"})," MonoBehaviour."]}),`
`,e.jsx(n.p,{children:"This will provide you easy access to two authentication methods:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/sdk/unity/authentication/email",children:"Email + OTP Sign In"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/sdk/unity/authentication/oidc",children:"OIDC-based Social Sign In"})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"The SDK also provides support for:"}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/sdk/unity/authentication/playfab",children:"PlayFab Sign In"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/sdk/unity/authentication/guest",children:"Guest Sign In"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"retrieving-the-sequencewallet",children:["Retrieving the ",e.jsx(n.code,{children:"SequenceWallet"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-the-sequencewallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Once you've obtained credentials from one of the supported authentication methods (please see their respective documentation), you'll want to catch a reference to your newly created ",e.jsx(n.code,{children:"SequenceWallet"}),"."]}),`
`,e.jsxs(n.p,{children:["Please subscribe to the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event. This can be done with the following code snippet:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceWallet.OnWalletCreated += OnWalletCreatedHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public void OnWalletCreatedHandler(SequenceWallet wallet) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  // Do something"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["where ",e.jsx(n.code,{children:"OnWalletCreatedHandler"})," is a function accepting a ",e.jsx(n.code,{children:"SequenceWallet"})," as it's only parameter. If you're unfamiliar with working with events in Unity, check out this great ",e.jsx(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]})]})}function r(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{r as default,d as frontmatter};
