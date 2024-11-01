import{d as s,j as e}from"./index-DCgZ3l-R.js";const o={title:"Guest",description:"undefined"};function i(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"guest",children:["Guest",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guest",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"For when you want to quickly get your users into your game to start playing, you can use our guest login."}),`
`,e.jsxs(t.p,{children:["Reminder: since guest login users have no persisting credentials, when the session ends, the user will be unable to access their embedded wallet again. Before ending the session, be sure to prompt the user to ",e.jsx(t.a,{href:"/sdk/unreal/authentication/federated-accounts",children:"federate their account"})," and associate a login method + credentials with it for subsequent sessions!"]}),`
`,e.jsxs(t.h2,{id:"built-in-ui",children:["Built-in UI",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-ui",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:'If you are using the built-in UI, Guest sign in is enabled by default. The user can click on the "Guest" sign in button on the built-in UI to trigger this flow.'}),`
`,e.jsxs(t.h2,{id:"custom-ui-integration",children:["Custom UI Integration",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integration",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Simply call ",e.jsx(t.code,{children:"GuestLogin"})," on your ",e.jsx(t.code,{children:"UAuthenticator"})," object to authenticate them with the Sequence API."]}),`
`,e.jsx(t.aside,{"data-callout":"tip",children:e.jsxs(t.p,{children:["Don't forget to ",e.jsx(t.a,{href:"/sdk/unreal/authentication/intro#binding-to-the-delegates",children:"bind to the delegates"})," for ",e.jsx(t.strong,{children:"[AuthSuccess]"}),", ",e.jsx(t.strong,{children:"[AuthFailure]"}),", ",e.jsx(t.strong,{children:"[AuthRequiresCode]"})," prior to making any signin calls!"]})})]})}function a(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,o as frontmatter};
