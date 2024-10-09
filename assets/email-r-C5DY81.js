import{d as r,j as e}from"./index-BeiwWbZM.js";const a={title:"Email + OTP",description:"undefined"};function n(t){const i={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"email--otp",children:["Email + OTP",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#email--otp",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"Email sign in provides the user with a One-Time-Password (OTP) challenge - a 6 digit code emailed to the entered address for the user to enter on the next page."}),`
`,e.jsxs(i.p,{children:["First, you'll want to ",e.jsx(i.a,{href:"/solutions/builder/embedded-wallet",children:"enable email sign in for your project in the builder"}),"."]}),`
`,e.jsxs(i.h2,{id:"built-in-ui",children:["Built-in UI",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-ui",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:'If you are using the built-in UI, email + OTP sign in is enabled by default. The user can enter their email and click "Continue" on the built-in UI to trigger this flow.'}),`
`,e.jsxs(i.h2,{id:"custom-ui-integration",children:["Custom UI Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To start email based authentication you'll start it with this call ",e.jsx(i.code,{children:"[EmailLogin(const FString& EmailIn)]"}),", supplying an email you've collected from the User in your GUI."]}),`
`,e.jsxs(i.p,{children:["Next ",e.jsx(i.code,{children:"[AuthRequiresCode]"})," will fire when the ",e.jsx(i.code,{children:"[UAuthenticator]"})," is ready to receive the Code from your UI. Collect this code from your GUI and send it to the authenticator using ",e.jsx(i.code,{children:"[EmailCode(CodeIn)]"}),"."]}),`
`,e.jsxs(i.p,{children:["Finally ",e.jsx(i.code,{children:"[AuthSuccess]"})," will fire with a ",e.jsx(i.code,{children:"Credentials_BE"})," struct as a parameter. You are done Email Based Auth."]}),`
`,e.jsx(i.aside,{"data-callout":"tip",children:e.jsxs(i.p,{children:["Don't forget to ",e.jsx(i.a,{href:"/sdk/unreal/authentication/intro#binding-to-the-delegates",children:"bind to the delegates"})," for ",e.jsx(i.strong,{children:"[AuthSuccess]"}),", ",e.jsx(i.strong,{children:"[AuthFailure]"}),", ",e.jsx(i.strong,{children:"[AuthRequiresCode]"})," prior to making any signin calls!"]})})]})}function d(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{d as default,a as frontmatter};
