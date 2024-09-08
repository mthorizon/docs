import{d as i,j as e}from"./index-BOyQKC9q.js";const t={title:"Federated Accounts",description:"undefined"};function a(s){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"federated-accounts",children:["Federated Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#federated-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["By default, the WaaS API only allows one account per email. If a user attempts to login using a different method but the same email as before, they will receive an ",e.jsx(n.code,{children:"EmailAlreadyInUse"})," error."]}),`
`,e.jsx(n.p,{children:"For example: if the user created their account using Google Sign In and then attempts to sign in with Email + OTP using the same method, they will receive this error."}),`
`,e.jsxs(n.p,{children:["By default (if using the default ",e.jsx(n.code,{children:"LoginPanel"}),"), the SDK will automatically open the ",e.jsx(n.code,{children:"FederatedAuthPopupPanel"})," prefab located at ",e.jsx(n.code,{children:"SequenceFrontend > Prefabs > FederatedAuthPopupPanel"}),". This prefab can be customized to your linking or replaced in the ",e.jsx(n.code,{children:"LoginPanel"})," prefab. This panel will explain to the user that duplicate login methods are not allowed and prompt them to return to the login screen and sign in with their associated login method (or a different email altogether)."]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"EnableMultipleAccountsPerEmail"})," is enabled in ",e.jsx(n.code,{children:"SequenceConfig"})," the ",e.jsx(n.code,{children:"FederatedAuthPopupPanel"})," will give the user the option to create another account associated with their email."]})}),`
`,e.jsxs(n.p,{children:["Once the user has logged into their account; the SDK will automatically make a ",e.jsx(n.code,{children:"FederateAccount"})," request (see ",e.jsx(n.code,{children:"SequenceLogin"}),"). This will associate the failed login method with that email as well so that the user may sign in with either in the future. Using our example above, the user would now be able to sign into their account using Google Sign In or Email + OTP."]}),`
`,e.jsxs(n.h2,{id:"manually-federating-accounts",children:["Manually Federating Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manually-federating-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You may want to add a button to your app allowing the user to associate an additional login method with their email (especially if you are using Guest Login). You'll want get a reference to ",e.jsx(n.code,{children:"SequenceLogin"})," and then call the appropriate ",e.jsx(n.code,{children:"FederateAccount"})," method for the login method."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceLogin login = SequenceLogin.GetInstance();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// PlayFab"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.FederateAccountPlayFab(titleId, sessionTicket, email, walletAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// OIDC (Social)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.FederateAccountSocial(idToken, loginMethod, walletAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Guest"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.FederateAccountGuest(walletAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Email"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.Login(email);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Later ... Once you've received the OTP code from the user"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.FederateAccountEmail(email, code, walletAddress); "})})]})}),`
`,e.jsxs(n.p,{children:["where walletAddress is the address of the ",e.jsx(n.code,{children:"SequenceWallet"})," you retrieved after authenticating the user."]}),`
`,e.jsxs(n.h3,{id:"re-using-the-default-loginpanel",children:["Re-using the Default LoginPanel",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#re-using-the-default-loginpanel",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To allow a user to federate/link their accounts manually using the default LoginPanel, simply call ",e.jsx(n.code,{children:"SetConnectedWalletAddress"})," on your ",e.jsx(n.code,{children:"SequenceLogin"})," instance or call ",e.jsx(n.code,{children:"SequenceLogin.GetInstanceToFederateAuth"})," with the currently authenticated wallet address provided."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceLogin login = SequenceLogin.GetInstance();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"login.SetConnectedWalletAddress(authenticatedSequenceWalletAddress);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// or"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceLogin.GetInstanceToFederateAuth(authenticatedSequenceWalletAddress);"})})]})}),`
`,e.jsx(n.p,{children:"This will configure your SequenceLogin instance to federate the accounts instead of creating a new session."}),`
`,e.jsxs(n.aside,{"data-callout":"tip",children:[e.jsxs(n.p,{children:["Once the user has logged out, don't forget to call ",e.jsx(n.code,{children:"SetConnectedWalletAddress(null)"})," to re-configure SequenceLogin to create new sessions again."]}),e.jsx(n.p,{children:"e.g."}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private void OnDropSessionCompleteHandler(string sessionId) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (sessionId == Wallet.SessionId)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        SequenceLogin.GetInstance().SetConnectedWalletAddress(null);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        SceneManager.LoadScene("LoginScene"); // Re-open your scene or UI to allow the user to log back in and create a new session here'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})})]})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{d as default,t as frontmatter};
