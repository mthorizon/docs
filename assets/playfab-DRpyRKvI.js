import{d as a,j as e}from"./index-Dyqk1oI2.js";const d={title:"PlayFab",description:"undefined"};function t(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"playfab",children:["PlayFab",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#playfab",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"PlayFab sign in via username + password is also supported by our plugin."}),`
`,e.jsxs(n.p,{children:["You will need to include your PlayFab Title ID in the ",e.jsx(n.code,{children:"SequenceConfig.ini"})," file during ",e.jsx(n.a,{href:"/sdk/unreal/setup#create-a-config-file",children:"Setup"})," and ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet/playfab-configuration",children:"configure PlayFab in the Builder"}),"."]}),`
`,e.jsxs(n.h2,{id:"built-in-ui",children:["Built-in UI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-ui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:'If you are using the built-in UI, PlayFab sign in is enabled by default. The user can click on the "PlayFab" sign in button on the built-in UI to trigger this flow.'}),`
`,e.jsxs(n.h2,{id:"custom-ui-integration",children:["Custom UI Integration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"new-accounts",children:["New Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#new-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If your player doesn't already have an account, you'll want to call ",e.jsx(n.code,{children:"PlayFabRegisterAndLogin"})," on your UAuthenticator object and provide a username, email, and password. This will create an account for the player with PlayFab and will automatically authenticate them with the Sequence API."]}),`
`,e.jsxs(n.h3,{id:"existing-accounts",children:["Existing Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#existing-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If your player already has an account, you'll want to call ",e.jsx(n.code,{children:"PlayFabLogin"})," on your UAuthenticator object and provide their username and password. This will authenticate the player with PlayFab and will automatically authenticate them with the Sequence API."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Don't forget to ",e.jsx(n.a,{href:"/sdk/unreal/authentication/intro#binding-to-the-delegates",children:"bind to the delegates"})," for ",e.jsx(n.strong,{children:"[AuthSuccess]"}),", ",e.jsx(n.strong,{children:"[AuthFailure]"}),", ",e.jsx(n.strong,{children:"[AuthRequiresCode]"})," prior to making any signin calls!"]})})]})}function s(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,d as frontmatter};
