import{d as l,j as e}from"./index-B5_D2Yga.js";const r={title:"Federated Accounts",description:"undefined"};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"federated-accounts",children:["Federated Accounts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#federated-accounts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["By default, the WaaS API only allows one account per email. If a user attempts to login using a different method but the same email as before, they will receive an ",e.jsx(s.code,{children:"EmailAlreadyInUse"})," error."]}),`
`,e.jsx(s.p,{children:"For example: if the user created their account using Google Sign In and then attempts to sign in with Email + OTP using the same method, they will receive this error."}),`
`,e.jsxs(s.p,{children:["By default (if using the default ",e.jsx(s.code,{children:"LoginPanel"}),"), the SDK will automatically open the ",e.jsx(s.code,{children:"FederatedAuthPopupPanel"})," prefab located at ",e.jsx(s.code,{children:"SequenceFrontend > Prefabs > FederatedAuthPopupPanel"}),". This prefab can be customized to your linking or replaced in the ",e.jsx(s.code,{children:"LoginPanel"})," prefab. This panel will explain to the user that duplicate login methods are not allowed and prompt them to return to the login screen and sign in with their associated login method (or a different email altogether)."]}),`
`,e.jsx(s.aside,{"data-callout":"info",children:e.jsxs(s.p,{children:["If ",e.jsx(s.code,{children:"EnableMultipleAccountsPerEmail"})," is enabled in ",e.jsx(s.code,{children:"SequenceConfig"})," the ",e.jsx(s.code,{children:"FederatedAuthPopupPanel"})," will give the user the option to create another account associated with their email."]})}),`
`,e.jsxs(s.p,{children:["Once the user has logged into their account; the SDK will automatically make a ",e.jsx(s.code,{children:"FederateAccount"})," request (see ",e.jsx(s.code,{children:"SequenceLogin"}),"). This will associate the failed login method with that email as well so that the user may sign in with either in the future. Using our example above, the user would now be able to sign into their account using Google Sign In or Email + OTP."]}),`
`,e.jsxs(s.h2,{id:"manually-federating-accounts",children:["Manually Federating Accounts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manually-federating-accounts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["You may want to add a button to your app allowing the user to associate an additional login method with their email (especially if you are using Guest Login). You'll want get a reference to ",e.jsx(s.code,{children:"SequenceLogin"})," and then call the appropriate ",e.jsx(s.code,{children:"FederateAccount"})," method for the login method."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SequenceLogin"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" login"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SequenceLogin."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// PlayFab"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"FederateAccountPlayFab"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(titleId, sessionTicket, email, walletAddress);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// OIDC (Social)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"FederateAccountSocial"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(idToken, loginMethod, walletAddress);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Guest"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"FederateAccountGuest"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(walletAddress);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Email"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Login"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(email);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Later ... Once you've received the OTP code from the user"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"FederateAccountEmail"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(email, code, walletAddress); "})]})]})}),`
`,e.jsxs(s.p,{children:["where walletAddress is the address of the ",e.jsx(s.code,{children:"SequenceWallet"})," you retrieved after authenticating the user."]}),`
`,e.jsxs(s.h3,{id:"re-using-the-default-loginpanel",children:["Re-using the Default LoginPanel",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#re-using-the-default-loginpanel",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To allow a user to federate/link their accounts manually using the default LoginPanel, simply call ",e.jsx(s.code,{children:"SetConnectedWalletAddress"})," on your ",e.jsx(s.code,{children:"SequenceLogin"})," instance or call ",e.jsx(s.code,{children:"SequenceLogin.GetInstanceToFederateAuth"})," with the currently authenticated wallet address provided."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SequenceLogin"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" login"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SequenceLogin."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SetConnectedWalletAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(authenticatedSequenceWalletAddress);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// or"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SequenceLogin."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstanceToFederateAuth"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(authenticatedSequenceWalletAddress);"})]})]})}),`
`,e.jsx(s.p,{children:"This will configure your SequenceLogin instance to federate the accounts instead of creating a new session."}),`
`,e.jsxs(s.aside,{"data-callout":"tip",children:[e.jsxs(s.p,{children:["Once the user has logged out, don't forget to call ",e.jsx(s.code,{children:"SetConnectedWalletAddress(null)"})," to re-configure SequenceLogin to create new sessions again."]}),e.jsx(s.p,{children:"e.g."}),e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"private"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" void"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" OnDropSessionCompleteHandler"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" sessionId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (sessionId "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Wallet.SessionId)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        SequenceLogin."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SetConnectedWalletAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"null"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        SceneManager."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"LoadScene"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"LoginScene"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Re-open your scene or UI to allow the user to log back in and create a new session here"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})]})]})}function d(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,r as frontmatter};
