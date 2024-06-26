import{d as a,j as e}from"./index-BUrdSGE_.js";const t={title:"Sequence - Web3 Gaming Platform - Unreal SDK Authentication",description:"Documentation for Unreal SDK authentication for the Sequence infrastructure stack for web3 gaming."};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"authentication",children:["Authentication",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h3,{id:"customizing-the-builtin-gui",children:["Customizing the builtin GUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#customizing-the-builtin-gui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`In the folder located at All/Plugins/SequencePlugin Content/Core/Style you'll find a struct F_SequenceUIStyle,
In the default values section of this struct you'll be able to update the colours and images displayed throughout the UI.
For beta we currently only read from Sequence_Style_Dark_Mode`}),`
`,e.jsxs(n.h3,{id:"custom-ui-integration",children:["Custom UI Integration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-ui-integration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In a C++ UObject with a series of pass through ",e.jsx(n.code,{children:"[UFUNCTIONS]"})," setup similarly to ",e.jsx(n.code,{children:"[SequenceBackendManager.h/.cpp]"}),". Each of these calls are implemented in ",e.jsx(n.strong,{children:"[UAuthenticator]"})," you just need to pass through the data with YOUR UAuthenticator UObject"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Used to initiate mobile Social Signin"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   (No other calls need to be made to complete mobile SSO)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void InitiateMobileSSO(const ESocialSigninType& Type)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Optional Call,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Used to set a custom encryptor implementation for the Authentication Process"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void SetCustomEncryptor(UGenericNativeEncryptor * EncryptorIn);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   This call is for generating a login URL for Desktop based Social Signin"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   the received URL is fed into a WebBrowser to begin the login process"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FString GetLoginURL(const ESocialSigninType& Type); "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   This is call is for undergoing social login once an ID_Token has been collected."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void SocialLogin(const FString& IDTokenIn);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   This Call is made after you've collected the email address from the Users in the UI"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   The Delegate **[AuthRequiresCode]** will fire when a code is ready to be received"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   by the UAuthenticator"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void EmailLogin(const FString& EmailIn);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   This is call is made after the Delegate **[AuthRequiresCode]** is fired"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   The Code collected from the User in the GUI is sent in via this call"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void EmailCode(const FString& CodeIn);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Optional call used to retrieve stored credentials on disk"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FStoredCredentials_BE GetStoredCredentials() const;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Optional call used to check if the credentials on disk are valid or not"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"bool StoredCredentialsValid();"})})]})}),`
`,e.jsxs(n.p,{children:["To start you'll want to create a ",e.jsx(n.code,{children:"[UAuthenticator]"})," UObject like so ",e.jsx(n.code,{children:"[UAuthenticator * Auth = NewObject<UAuthenticator>()]"}),", this UObject manages the authentication side of Sequence."]}),`
`,e.jsxs(n.p,{children:["Be sure to bind to the Delegates for ",e.jsx(n.code,{children:"[AuthSuccess]"}),", ",e.jsx(n.code,{children:"[AuthFailure]"}),", ",e.jsx(n.code,{children:"[AuthRequiresCode]"})," prior to making any signin calls You can bind to these delegates like so:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"this->authenticator->AuthRequiresCode.AddDynamic(this, &AYourClass::YourCallReadyToReceiveCode);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"this->authenticator->AuthFailure.AddDynamic(this, &AYourClass::YourCallShowAuthFailureScreen);"})})]})}),`
`,e.jsxs(n.p,{children:["In the case of ",e.jsx(n.strong,{children:"[AuthSuccess]"})," since a parameter is also passed we bind to it like this"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FScriptDelegate del;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'del.BindUFunction(this, "CallShowAuthSuccessScreen");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"this->authenticator->AuthSuccess.Add(del);"})})]})}),`
`,e.jsxs(n.p,{children:[`Note: Replace the usage of the SequenceBackendManager.h/.cpp with you're own when building a custom GUI,
it is only used here as a reference in the event more context is needed with these instructions.
Where `,e.jsx(n.code,{children:"[CallShowAuthSuccessScreen]"})," is defined in ",e.jsx(n.code,{children:"SequenceBackendManager.h"})," as an example like so:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"UFUNCTION()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void CallShowAuthSuccessScreen(const FCredentials_BE& CredentialsIn);"})})]})}),`
`,e.jsxs(n.p,{children:["And in ",e.jsx(n.code,{children:"SequenceBackendManager.cpp"})," like so:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"void ASequenceBackendManager::CallShowAuthSuccessScreen(const FCredentials_BE& CredentialsIn) "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"this->Credentials = CredentialsIn;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (this->ShowAuthSuccessDelegate.IsBound())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  this->ShowAuthSuccessDelegate.Broadcast(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"else"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  UE_LOG(LogTemp, Error, TEXT("**[Nothing bound to: ShowAuthSuccessDelegate]**"));'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h3,{id:"email-based-authentication-with-customui",children:["Email based Authentication With CustomUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#email-based-authentication-with-customui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To start email based authentication you'll start it with this call ",e.jsx(n.strong,{children:"[EmailLogin(const FString& EmailIn)]"}),", supplying an email you've collected from the User in your GUI."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Next ",e.jsx(n.strong,{children:"[AuthRequiresCode]"})," will fire when the ",e.jsx(n.strong,{children:"[UAuthenticator]"})," is ready to receive the Code from your UI. Collect this code from your GUI and send it to the authenticator using ",e.jsx(n.strong,{children:"[EmailCode(CodeIn)]"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Finally ",e.jsx(n.strong,{children:"[AuthSuccess]"})," will fire with a Credentials_BE struct as a parameter. You are done Email Based Auth."]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"social-signin-based-authentication-on-desktop-with-customui",children:["Social Signin based Authentication on Desktop With CustomUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-signin-based-authentication-on-desktop-with-customui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"To start SSO based authentication with desktop you can either use your own implementation to get the necessary id_token or you can make use of Unreal's web browser plugin."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To get the URL to navigate to you can use the UAuthenticator supplied call ",e.jsx(n.strong,{children:"[FString GetSigninURL(const ESocialSigninType& Type)]"})," where Type is the social login type you wish to use"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["With whatever implementation you chose you can forward the collected id_token to the UAuthenticator object with ",e.jsx(n.strong,{children:"[SocialLogin(const FString& IDTokenIn)]"}),", after which ",e.jsx(n.strong,{children:"[AuthSuccess]"})," will fire and you're done desktop based SSO."]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"social-signin-based-authentication-on-mobile-with-customui",children:["Social Signin based Authentication on Mobile With CustomUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-signin-based-authentication-on-mobile-with-customui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["To start mobile SSO you will need to make use of the ",e.jsx(n.strong,{children:"[UAuthenticator::InitiateMobileSSO(const ESocialSigninType& Type)]"}),`
where type is the Type of SSO you want to use. IE) Google or Apple, for the time being Discord & Facebook aren't supported.
This function call is all that's required for Mobile SSO.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"android-sso-requirements",children:["Android SSO Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#android-sso-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Google:"}),`
`,e.jsxs(n.p,{children:["In order to be able to properly use Google Auth, create and place the Keystore file by following ",e.jsx(n.a,{href:"https://docs.unrealengine.com/5.1/en-US/signing-android-projects-for-release-on-the-google-play-store-with-unreal-engine/",children:"these instructions"}),"."]}),`
`,e.jsxs(n.p,{children:["You will also need to generate an ",e.jsx(n.strong,{children:"[Android client ID]"})," and a ",e.jsx(n.strong,{children:"[Web Application client ID]"})," for your application. And place the ",e.jsx(n.strong,{children:"[Web Application client ID]"})," in the [YourProject/Config/SequenceConfig.ini], [GoogleClientID] field."]}),`
`,e.jsxs(n.p,{children:["Refer to ",e.jsx(n.a,{href:"https://developers.google.com/identity/one-tap/android/get-started#api-console",children:"these docs"})," to generate ",e.jsx(n.strong,{children:"[Android client ID]"})," and ",e.jsx(n.strong,{children:"[Web Application client ID]"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://developers.google.com/android/guides/client-auth",children:"This guide"})," helps explain how to collect SHA-1 key fingerprints for the ",e.jsx(n.strong,{children:"[Android client ID]"}),"."]}),`
`,e.jsxs(n.p,{children:["Apple: Please ensure you have a proper ",e.jsx(n.strong,{children:"[AppleClientID]"})," set in ",e.jsx(n.strong,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
`,e.jsxs(n.h3,{id:"ios-sso-requirements",children:["IOS SSO Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios-sso-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Google: Please ensure you have a proper ",e.jsx(n.strong,{children:"[GoogleClientID]"})," set in ",e.jsx(n.strong,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
`,e.jsxs(n.p,{children:["Apple: Please ensure you have a proper ",e.jsx(n.strong,{children:"[AppleClientID]"})," set in ",e.jsx(n.strong,{children:"[YourProject/Config/SequenceConfig.ini]"}),`,
be sure you register and set your bundle identifier properly for your app`]}),`
`,e.jsxs(n.h3,{id:"apple-specific-sso-requirements",children:["Apple Specific SSO Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apple-specific-sso-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For Apple SSO to work please be sure to register the ",e.jsx(n.strong,{children:"[RedirectUrl]"})," in ",e.jsx(n.strong,{children:"[YourProject/Config/SequenceConfig.ini]"})," appropriately for your app."]})]})}function r(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{r as default,t as frontmatter};
