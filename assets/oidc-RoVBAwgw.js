import{d as o,j as e}from"./index-DEZr0H5Z.js";const s={title:"OIDC - Social Sign In",description:"undefined"};function t(n){const i={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"oidc---social-sign-in",children:["OIDC - Social Sign In",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oidc---social-sign-in",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["Our SDK supports Social Sign In using ",e.jsx(i.a,{href:"https://openid.net/developers/how-connect-works/",children:"OIDC"})," with the ",e.jsx(i.a,{href:"https://auth0.com/docs/authenticate/login/oidc-conformant-authentication/oidc-adoption-implicit-flow",children:"implicit flow"}),"."]}),`
`,e.jsx(i.p,{children:"Currently supported OIDC providers include:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Google -> ",e.jsx(i.a,{href:"/solutions/builder/embedded-wallet/google-configuration",children:"Builder Setup"})]}),`
`,e.jsxs(i.li,{children:["Apple -> ",e.jsx(i.a,{href:"/solutions/builder/embedded-wallet/apple-configuration",children:"Builder Setup"})]}),`
`]}),`
`,e.jsxs(i.aside,{"data-callout":"warning",children:[e.jsx(i.p,{children:"Stop! Have you configured your OIDC providers in the Builder using the instructions linked above?"}),e.jsxs(i.p,{children:["Have you added your client id(s) to the ",e.jsx(i.code,{children:"SequenceConfig.ini"})," file in ",e.jsx(i.code,{children:"[YourProjectDirectory]/Config"}),"? If not, see ",e.jsx(i.a,{href:"/sdk/unreal/setup#create-a-config-file",children:"Setup"}),"."]})]}),`
`,e.jsxs(i.h2,{id:"built-in-ui",children:["Built-in UI",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-ui",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:'If you are using the built-in UI, OIDC sign in is enabled by default. The user can click on the "Google" or "Apple" sign in buttons on the built-in UI to trigger this flow.'}),`
`,e.jsxs(i.h2,{id:"android-requirements",children:["Android Requirements",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#android-requirements",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Google:"})," In order to be able to properly use Google Auth, create and place the Keystore file by following ",e.jsx(i.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/signing-android-projects-for-release-on-the-google-play-store-with-unreal-engine?application_version=5.1",children:"these instructions"}),"."]}),`
`,e.jsxs(i.p,{children:["You will also need to generate an [Android client ID] and a [Web Application client ID] for your application. And place the [Web Application client ID] in the ",e.jsx(i.code,{children:"[YourProject/Config/SequenceConfig.ini]"}),", [GoogleClientID] field."]}),`
`,e.jsxs(i.p,{children:["Refer to ",e.jsx(i.a,{href:"https://developers.google.com/identity/one-tap/android/get-started#api-console",children:"these docs"})," to generate [Android client ID] and [Web Application client ID]."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://https://developers.google.com/android/guides/client-auth?hl=es-419",children:"This guide"})," helps explain how to collect SHA-1 key fingerprints for the [Android client ID]."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Apple:"})," Please ensure you have a proper [AppleClientID] set in ",e.jsx(i.code,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
`,e.jsxs(i.h2,{id:"ios-requirements",children:["iOS Requirements",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios-requirements",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Google"}),": Please ensure you have a proper [GoogleClientID] set in ",e.jsx(i.code,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Apple"}),": Please ensure you have a proper [AppleClientID] set in ",e.jsx(i.code,{children:"[YourProject/Config/SequenceConfig.ini]"}),", be sure you register and set your bundle identifier properly for your app"]}),`
`,e.jsx(i.p,{children:e.jsx(i.em,{children:"Apple Specific Requirements"})}),`
`,e.jsx(i.p,{children:"For Apple sign in to work please be sure to register the [RedirectUrl] in [YourProject/Config/SequenceConfig.ini] appropriately for your app."}),`
`,e.jsxs(i.h2,{id:"custom-ui-integration",children:["Custom UI Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"desktop",children:["Desktop",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#desktop",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To start ",e.jsx(i.strong,{children:"SSO based authentication"})," with desktop you will need to navigate to a browser in order to get the necessary id_token."]}),`
`,e.jsxs(i.p,{children:["To get the URL to navigate to you can use the UAuthenticator supplied call ",e.jsx(i.code,{children:"[FString GetSigninURL(const ESocialSigninType& Type)]"})," where Type is the social login type you wish to use"]}),`
`,e.jsxs(i.p,{children:["With whatever implementation you chose you can forward the collected id_token to the UAuthenticator object with ",e.jsx(i.code,{children:"[SocialLogin(const FString& IDTokenIn)]"}),", after which ",e.jsx(i.code,{children:"[AuthSuccess]"})," will fire and you're done desktop based SSO."]}),`
`,e.jsxs(i.h3,{id:"mobile",children:["Mobile",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mobile",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To start mobile SSO you will need to make use of the ",e.jsx(i.code,{children:"[UAuthenticator::InitiateMobileSSO(const ESocialSigninType& Type)]"})," where type is the Type of SSO you want to use. IE) Google or Apple, for the time being Discord & Facebook aren't supported. This function call is all that's required for Mobile SSO"]}),`
`,e.jsx(i.aside,{"data-callout":"tip",children:e.jsxs(i.p,{children:["Don't forget to ",e.jsx(i.a,{href:"/sdk/unreal/authentication/intro#binding-to-the-delegates",children:"bind to the delegates"})," for ",e.jsx(i.strong,{children:"[AuthSuccess]"}),", ",e.jsx(i.strong,{children:"[AuthFailure]"}),", ",e.jsx(i.strong,{children:"[AuthRequiresCode]"})," prior to making any signin calls!"]})})]})}function d(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as default,s as frontmatter};
