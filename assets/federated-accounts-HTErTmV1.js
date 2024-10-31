import{d as a,j as e}from"./index-B13TNFk0.js";const r={title:"Federated Accounts",description:"undefined"};function n(i){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"federated-accounts",children:["Federated Accounts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#federated-accounts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Have you ever played a game and forgotten if you signed in with Google or using your Gmail email? This is where Federated Accounts comes in handy."}),`
`,e.jsxs(t.p,{children:["With Federated Accounts, you can associate multiple login methods with a single account and wallet. If your user has signed in with a ",e.jsx(t.a,{href:"/sdk/unreal/authentication/guest",children:"Guest login"}),", you will definitely want to push them towards federating their account in order to have persistent credentials with which they can access their Sequence Embedded Wallet in subsequent sessions."]}),`
`,e.jsx(t.p,{children:"While a user is authenticated with the Sequence API, you can add an additional login method by using the appropriate federate account call:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"UAuthenticator::FederateEmail"})," for email - make sure to bind to the ",e.jsx(t.code,{children:"AuthRequiresCode"})," delegate and complete the auth flow using ",e.jsx(t.code,{children:"UAuthenticator::EmailLoginCode"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"UAuthenticator::FederateOIDCIdToken"})," or ",e.jsx(t.code,{children:"UAuthenticator::InitiateMobileFederateOIDC"})," for OIDC"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"UAuthenticator::FederatePlayFabLogin"})," (existing account) or ",e.jsx(t.code,{children:"UAuthenticator::FederatePlayFabNewAccount"})," (new account) for PlayFab"]}),`
`]}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:"If you are using the built-in UI, the account federation logic is already built-in. Once you complete the initial login, you will be greeted with a page prompting you to add additional accounts."})}),`
`,e.jsxs(t.h2,{id:"emailalreadyinuse",children:["EmailAlreadyInUse",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#emailalreadyinuse",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["By default, the Sequence API only allows one account per email. If a user attempts to login using a different method but the same email as before, they will receive an ",e.jsx(t.code,{children:"EmailAlreadyInUse"})," error."]}),`
`,e.jsx(t.p,{children:"For example: if the user created their account using Google Sign In and then attemps to sign in with Email + OTP using the same method, they will receive this error."}),`
`,e.jsxs(t.p,{children:["Before the sign in attempt, make sure to bind to the ",e.jsx(t.code,{children:"FederateSuccess"}),", ",e.jsx(t.code,{children:"FederateFailure"}),", and ",e.jsx(t.code,{children:"FederateOrForce"})," delegates. The ",e.jsx(t.code,{children:"FederateOrForce"})," delegate will be triggered in the case where the SDK receives the ",e.jsx(t.code,{children:"EmailAlreadyInUse"})," error from the API."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FederateOrForce"})," delegate will include ",e.jsx(t.code,{children:"FFederationSupportData"})," which will contain the email used to sign in and a list of login methods associated with that email with the Sequence API."]}),`
`,e.jsx(t.p,{children:"With this information, you can present up to two options for the user to proceed:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Prompt the user to login with one of the login methods included in the ",e.jsx(t.code,{children:"FFederationSupportData"})," object. Once the user successfully logs in with one of the prompted login methods, the SDK will automatically federate their account using the cached login attempt that failed. e.g. if you previously logged in with Google, then tried to login with email and receive the ",e.jsx(t.code,{children:"EmailAlreadyInUse"})," error; after you login with Google again, your email will automatically be associated with your account. In subsequent sessions, you can now login with email + OTP to the same account."]}),`
`,e.jsxs(t.li,{children:["Allow the user to force create a new account. This will give your user a separate account and wallet address. This can be done by calling ",e.jsx(t.code,{children:"UAuthenticator::ForceOpenLastOpenSessionAttempt"}),". In general, we are hesitent to recommend this approach as having multiple accounts tied to the same email address may lead to a confusing end-user experience; however, we have enabled this behaviour should it be your preference."]}),`
`]}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:"If you are using the built-in UI, this behaviour is already built-in for you. Users will be automatically prompted with both options."})}),`
`,e.jsx(t.aside,{"data-callout":"tip",children:e.jsxs(t.p,{children:["Recall, before making signin calls, you should be ",e.jsx(t.a,{href:"/sdk/unreal/authentication/intro#binding-to-the-delegates",children:"binding to the delegates"})," for ",e.jsx(t.strong,{children:"[AuthSuccess]"}),", ",e.jsx(t.strong,{children:"[AuthFailure]"}),", ",e.jsx(t.strong,{children:"[AuthRequiresCode]"}),", ",e.jsx(t.strong,{children:"[FederateSuccess]"}),", ",e.jsx(t.strong,{children:"[FederateFailure]"}),", and ",e.jsx(t.strong,{children:"[FederateOrForce]"}),"."]})})]})}function s(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{s as default,r as frontmatter};
