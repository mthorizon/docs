import{d as l,j as s}from"./index-Db4owo0g.js";const a={title:"Authentication - Introduction",description:"undefined"};function n(i){const e={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"authentication---introduction",children:["Authentication - Introduction",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication---introduction",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["As an Embedded Wallet SDK, authentication is extremely important. Authentication works by establishing a session signing wallet through association with user credentials. For more on how our Embedded Wallet works, please ",s.jsx(e.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"see Embedded Wallet docs"}),"."]}),`
`,s.jsxs(e.p,{children:["To get up and running quickly, we recommend using our default UI. This UI will already have the authentication integrated; so, provided you've correctly ",s.jsx(e.a,{href:"/sdk/unreal/installation",children:"installed"})," and ",s.jsx(e.a,{href:"/sdk/unreal/setup",children:"setup"})," the plugin, the authentication should work automatically with the default UI."]}),`
`,s.jsx(e.p,{children:"This will give you access to authentication via:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Email + OTP Sign In"}),`
`,s.jsx(e.li,{children:"OIDC-based Social Sign In"}),`
`,s.jsx(e.li,{children:"PlayFab Sign In"}),`
`,s.jsx(e.li,{children:"Guest Sign In"}),`
`]}),`
`,s.jsxs(e.h2,{id:"built-in-ui-setup",children:["Built-in UI Setup",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-ui-setup",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["You can simply duplicate the ",s.jsx(e.code,{children:"[BP_CustomSpectatorPawn]"})," but since it and its parent class reside within the realm of the plugin, during updates all modifications you make within the plugin could potentially be lost. These are here as a reference for how things should be done. We recommend you duplicate the ",s.jsx(e.code,{children:"BP_CustomSpectatorPawn"})," out of the plugin folder, then update its parent class to a C++ class of your own making that also resides outside the plugins content folder."]}),`
`,s.jsxs(e.p,{children:["Some additional setup of the GameMode will need to be done prior to any UI showing up. The SequencePlugin comes bundled with an example GameMode ",s.jsx(e.code,{children:"[GM_Sequence]"})," stored within ",s.jsx(e.code,{children:"[Demonstration]"})," in the plugin content folder. Duplicate this GameMode and move it outside the plugin folder. Then open up ",s.jsx(e.code,{children:"[GM_Sequence]"})," and set the DefaultPawn to the Pawn Blueprint you've just made."]}),`
`,s.jsxs(e.p,{children:["Lastly in Project Settings you'll need to set this GameMode as the default GameMode. Specifically in ",s.jsx(e.code,{children:"ProjectSettings -> Maps & Modes"})]}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:["Note: Unreal's web browser plugin uses the Chromium embedded browser. If your device does not support it, you can instead use Unreal's ",s.jsx(e.code,{children:"Launch URL"})," function."]})}),`
`,s.jsx(e.aside,{"data-callout":"tip",children:s.jsx(e.p,{children:"Try running your project now! You should be able to log in using your social credentials if you've set everything up correctly so far!"})}),`
`,s.jsxs(e.h3,{id:"customizing-the-built-in-ui",children:["Customizing the built-in UI",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#customizing-the-built-in-ui",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["In the folder located at ",s.jsx(e.em,{children:"SequencePlugin Content/Core/Style"})," you'll find a struct ",s.jsx(e.code,{children:"F_SequenceUIStyle"}),". In the default values section of this struct you'll be able to update the colours and images displayed throughout the UI. Currently we only read from ",s.jsx(e.code,{children:"Sequence_Style_Dark_Mode"})]}),`
`,s.jsxs(e.h2,{id:"custom-ui-integrations",children:["Custom UI Integrations",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integrations",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To start you'll want to create a ",s.jsx(e.code,{children:"[UAuthenticator]"})," UObject like so ",s.jsx(e.code,{children:"[UAuthenticator * Auth = NewObject<UAuthenticator>()]"}),", this UObject manages the authentication side of Sequence."]}),`
`,s.jsxs(e.p,{children:["In a C++ ",s.jsx(e.strong,{children:"UObject"})," with a series of pass through ",s.jsx(e.code,{children:"[UFUNCTIONS]"})," setup similarly to ",s.jsx(e.code,{children:"[SequenceBackendManager.h/.cpp]"}),". Each of these calls are implemented in ",s.jsx(e.code,{children:"[UAuthenticator]"})," you just need to pass through the data with ",s.jsx(e.strong,{children:"YOUR"})," UAuthenticator UObject"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   Used to initiate mobile Social Signin"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   (No other calls need to be made to complete mobile SSO)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" InitiateMobileSSO"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ESocialSigninType"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Type"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   Optional Call,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   Used to set a custom encryptor implementation for the Authentication Process"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SetCustomEncryptor"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"UGenericNativeEncryptor"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" *"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" EncryptorIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   This call is for generating a login URL for Desktop based Social Signin"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   the received URL is fed into a WebBrowser to begin the login process"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FString"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetLoginURL"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ESocialSigninType"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Type"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"); "})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   This is call is for undergoing social login once an ID_Token has been collected."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SocialLogin"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FString"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" IDTokenIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   This Call is made after you've collected the email address from the Users in the UI"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   The Delegate **[AuthRequiresCode]** will fire when a code is ready to be received"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   by the UAuthenticator"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" EmailLogin"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FString"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" EmailIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   This is call is made after the Delegate **[AuthRequiresCode]** is fired"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   The Code collected from the User in the GUI is sent in via this call"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" EmailCode"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FString"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" CodeIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   Optional call used to retrieve stored credentials on disk"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FStoredCredentials_BE"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" GetStoredCredentials"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   Optional call used to check if the credentials on disk are valid or not"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"bool"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" StoredCredentialsValid"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,s.jsxs(e.h3,{id:"binding-to-the-delegates",children:["Binding to the Delegates",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binding-to-the-delegates",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Be sure to bind to the Delegates for ",s.jsx(e.strong,{children:"[AuthSuccess]"}),", ",s.jsx(e.strong,{children:"[AuthFailure]"}),", ",s.jsx(e.strong,{children:"[AuthRequiresCode]"})," prior to making any signin calls You can bind to these delegates like so:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->authenticator->AuthRequiresCode."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AddDynamic"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"AYourClass"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::YourCallReadyToReceiveCode);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->authenticator->AuthFailure."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AddDynamic"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"AYourClass"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::YourCallShowAuthFailureScreen);"})]})]})}),`
`,s.jsxs(e.p,{children:["In the case of ",s.jsx(e.strong,{children:"[AuthSuccess]"})," since a parameter is also passed we bind to it like this"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FScriptDelegate del;"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"del."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BindUFunction"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"CallShowAuthSuccessScreen"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->authenticator->AuthSuccess."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Add"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(del);"})]})]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Note:"})," Replace the usage of the ",s.jsx(e.code,{children:"SequenceBackendManager.h/.cpp"})," with you're own when building a custom GUI, it is only used here as a reference in the event more context is needed with these instructions. Where [CallShowAuthSuccessScreen] is defined in SequenceBackendManager.h as an example like so:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"UFUNCTION"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" CallShowAuthSuccessScreen"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FCredentials_BE"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" CredentialsIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"And in SequenceBackendManager.cpp like so:"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"void"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ASequenceBackendManager"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"CallShowAuthSuccessScreen"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FCredentials_BE"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" CredentialsIn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->Credentials "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" CredentialsIn;"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->ShowAuthSuccessDelegate."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"IsBound"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"())"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  this"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"->ShowAuthSuccessDelegate."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Broadcast"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Credentials);"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"else"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"  UE_LOG"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(LogTemp, Error, "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TEXT"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"**[Nothing bound to: ShowAuthSuccessDelegate]**"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"));"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}  "})})]})})]})}function c(i={}){const{wrapper:e}={...l(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{c as default,a as frontmatter};
