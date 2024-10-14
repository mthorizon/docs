import{d as r,j as e}from"./index-Bao9fo3L.js";const a={title:"OIDC - Social Sign In",description:"undefined"};function n(i){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"oidc---social-sign-in",children:["OIDC - Social Sign In",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oidc---social-sign-in",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["Our SDK supports Social Sign In using ",e.jsx(s.a,{href:"https://openid.net/developers/how-connect-works/",children:"OIDC"})," with the ",e.jsx(s.a,{href:"https://auth0.com/docs/authenticate/login/oidc-conformant-authentication/oidc-adoption-implicit-flow",children:"implicit flow"}),"."]}),`
`,e.jsx(s.p,{children:"Currently supported OIDC providers include:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Google -> ",e.jsx(s.a,{href:"/solutions/builder/embedded-wallet/google-configuration",children:"Builder Setup"})]}),`
`,e.jsxs(s.li,{children:["Apple -> ",e.jsx(s.a,{href:"/solutions/builder/embedded-wallet/apple-configuration",children:"Builder Setup"})]}),`
`]}),`
`,e.jsxs(s.aside,{"data-callout":"warning",children:[e.jsx(s.p,{children:"Stop! Have you configured your OIDC providers in the Builder using the instructions linked above?"}),e.jsxs(s.p,{children:["Have you added your client id(s) to the ",e.jsx(s.code,{children:"SequenceConfig"})," scriptable object in your Resources folder?"]})]}),`
`,e.jsx(s.p,{children:`Once the user successfully signs in, an idToken is returned via deep link to the application.
In order to enable deep linking, we must register a custom URL scheme for our application. There are some platform specific requirements to set this up.`}),`
`,e.jsxs(s.h3,{id:"editor",children:["Editor",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#editor",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["For social sign in to work in the editor, you will need to deploy a simple server on your local machine. We provide a sample implementation ",e.jsx(s.a,{href:"https://gist.github.com/BellringerQuinn/d012cd29eb9e756fe3555d4d03b001b2",children:"here"}),"."]}),`
`,e.jsx(s.p,{children:"To deploy this sample server, please perform the following."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Download and install Go: ",e.jsx(s.a,{href:"https://go.dev/dl/",children:"https://go.dev/dl/"})]}),`
`,e.jsx(s.li,{children:"Open a terminal/command prompt and verify your installation by typing"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`go version
`})}),`
`,e.jsxs(s.ol,{start:"3",children:[`
`,e.jsx(s.li,{children:"Create a directory for your go project and a main.go file"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`mkdir myUnityServer
cd myUnityServer
touch main.go
`})}),`
`,e.jsxs(s.ol,{start:"4",children:[`
`,e.jsxs(s.li,{children:["Copy + paste the ",e.jsx(s.a,{href:"https://gist.github.com/BellringerQuinn/d012cd29eb9e756fe3555d4d03b001b2",children:"gist"})," into the main.go"]}),`
`,e.jsx(s.li,{children:"Initialize the project by creating a go module"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`go mod init myUnityServer
`})}),`
`,e.jsxs(s.ol,{start:"6",children:[`
`,e.jsx(s.li,{children:"Run the server"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-txt",children:`go run main.go
`})}),`
`,e.jsxs(s.ol,{start:"7",children:[`
`,e.jsxs(s.li,{children:["You should see ",e.jsx(s.code,{children:"Server listening on port 8080"})," printed to your terminal/command prompt"]}),`
`]}),`
`,e.jsxs(s.p,{children:["If you choose to deploy the server to somewhere else (a different port, a public server, etc.), you'll want to change the ",e.jsx(s.code,{children:"OpenIdAuthenticator.RedirectUrl"})," in your code before initiating the sign in process"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"OpenIdAuthenticator."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"InjectRedirectUrl"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"the url for your deployed server"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})}),`
`,e.jsxs(s.p,{children:["Note: you'll want to use a web client for your social sign in provider with ",e.jsx(s.code,{children:"http://localhost:8080/"})," (or your server url) whitelisted as a redirect url under ",e.jsx(s.code,{children:"Standalone Platforms"})," in ",e.jsx(s.code,{children:"SequenceConfig"})]}),`
`,e.jsxs(s.h3,{id:"ios",children:["iOS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"sign-in-with-apple",children:["Sign in with Apple",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-in-with-apple",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["This SDK supports native Sign in with Apple via the popular ",e.jsxs(s.a,{href:"https://github.com/lupidan/apple-signin-unity",children:[e.jsx(s.code,{children:"apple-signin-unity"})," package"]}),". This ",e.jsxs(s.a,{href:"https://developer.apple.com/documentation/xcode/configuring-sign-in-with-apple#Add-the-Sign-in-with-Apple-capability-to-your-app",children:["requires the ",e.jsx(s.code,{children:"Sign in with Apple"})," capability in XCode"]})," in order to function. Provided you have ",e.jsxs(s.a,{href:"https://docs.sequence.xyz/sdk/unity/installation#package-manager---recommended",children:["imported the ",e.jsx(s.code,{children:"Setup"})," scripts via Package Manager > Samples"]})," and/or have ",e.jsx(s.code,{children:"SignInWithApplePostprocessor.cs"})," under an ",e.jsx(s.code,{children:"Editor"})," subfolder, this capability will be added to your XCode builds automatically."]}),`
`,e.jsxs(s.p,{children:["Please be aware that this capability is not supported by ",e.jsx(s.code,{children:"Personal Teams"}),"."]}),`
`,e.jsxs(s.h4,{id:"other-social-platforms",children:["Other Social Platforms",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other-social-platforms",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["All other social platforms are supported by default, just be sure to add your client IDs in ",e.jsx(s.code,{children:"SequenceConfig"}),"."]}),`
`,e.jsxs(s.h3,{id:"macos",children:["MacOS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macos",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Open the Windows/Mac/Linux Player Settings window (menu: Edit > Project Settings > Player Settings, then select Windows/Mac/Linux)."}),`
`,e.jsxs(s.li,{children:["Select ",e.jsx(s.code,{children:"Other Settings"}),", then scroll down to ",e.jsx(s.code,{children:"Mac Configuration"}),"."]}),`
`,e.jsxs(s.li,{children:["Expand the ",e.jsx(s.code,{children:"Supported URL schemes"})," section, and add 1 to the size."]}),`
`,e.jsxs(s.li,{children:["In the new ",e.jsx(s.code,{children:"Element N"})," field, enter the URL scheme you've configured in ",e.jsx(s.code,{children:"SequenceConfig"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/img/unity/unity-url-scheme-mac.png",alt:"Mac URL Scheme"})}),`
`,e.jsxs(s.h3,{id:"pc",children:["PC",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pc",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"No additional steps required."}),`
`,e.jsx(s.aside,{"data-callout":"tip",children:e.jsxs(s.p,{children:["When configuring your social sign in web client credentials with Google (for example) for desktop platforms (and Android), you'll want to whitelist ",e.jsx(s.a,{href:"https://api.sequence.app/oauth/callback",children:"https://api.sequence.app/oauth/callback"}),' as "Authorized redirect URIs"']})}),`
`,e.jsxs(s.h3,{id:"android",children:["Android",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#android",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["In the Project window, browse to ",e.jsx(s.code,{children:"Assets > Plugins > Android"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["a) Note: in Unity versions 2021.2 and up this path doesn't exist by default. Please navigate to ",e.jsx(s.code,{children:"Edit > Project Settings > Player"})," and under the Android Publishing Settings, enable ",e.jsx(s.code,{children:"Custom Main Manifest"})," in the Build section. See ",e.jsx(s.a,{href:"https://docs.unity3d.com/Manual/deep-linking-android.html",children:"https://docs.unity3d.com/Manual/deep-linking-android.html"})," for more info."]}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsxs(s.li,{children:["If it doesn't already exist, create a new file and name it ",e.jsx(s.code,{children:"AndroidManifest.xml"}),"."]}),`
`,e.jsx(s.li,{children:"Paste the following XML into the file, or, if you already have one, add the new keys from this XML to it."}),`
`,e.jsxs(s.li,{children:["Make sure to replace 'sdk-powered-by-sequence' with the Url Scheme you set in ",e.jsx(s.code,{children:"SequenceConfig"})]}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   <?"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"xml"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" version"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1.0"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" encoding"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"utf-8"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"?>"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"manifest"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"     xmlns:android"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"http://schemas.android.com/apk/res/android"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"     xmlns:tools"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"http://schemas.android.com/tools"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   >"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"     <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"application"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"       <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"activity"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"         android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"com.unity3d.player.UnityPlayerActivity"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"         android:theme"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"@style/UnityThemeSelector"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"       >"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"         <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"action"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.action.MAIN"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.LAUNCHER"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"         </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"         <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"action"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.action.VIEW"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.DEFAULT"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.BROWSABLE"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"           <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"data"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:scheme"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"sdk-powered-by-sequence"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/> "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"<!-- substitute 'sdk-powered-by-sequence' with the Url Scheme you set in `SequenceConfig` -->"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"         </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"       </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"activity"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"     </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"application"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"manifest"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]})]})}),`
`,e.jsxs(s.p,{children:["b) Note: Unity 2022 versions prior to ",e.jsx(s.code,{children:"2022.3.7f1"})," and 2023 versions prior to ",e.jsx(s.code,{children:"2023.1.7f1"}),", ",e.jsx(s.code,{children:"2023.2.0b3"}),", or ",e.jsx(s.code,{children:"2023.3.0a1"})," contain a bug with Android deep-linking. Please use this XML instead."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<?"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"xml"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" version"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1.0"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" encoding"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"utf-8"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"?>"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"manifest"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"        xmlns:android"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"http://schemas.android.com/apk/res/android"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"        xmlns:tools"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"http://schemas.android.com/tools"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"application"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"activity"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"                android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"com.unity3d.player.UnityPlayerActivity"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"                android:theme"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"@style/UnityThemeSelector"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"                android:exported"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"true"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"action"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.action.MAIN"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.LAUNCHER"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"meta-data"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"unityplayer.UnityActivity"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:value"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"true"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"action"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.action.VIEW"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.DEFAULT"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"category"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"android.intent.category.BROWSABLE"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"data"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" android:scheme"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"sdk-powered-by-sequence"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/> "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"<!-- substitute 'sdk-powered-by-sequence' with the Url Scheme you set in `SequenceConfig` -->"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"intent-filter"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"activity"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    </"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"application"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"</"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"manifest"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]})]})}),`
`,e.jsxs(s.p,{children:["i.e. add ",e.jsx(s.code,{children:'<meta-data android:name="unityplayer.UnityActivity" android:value="true" />'})," after your first ",e.jsx(s.code,{children:"intent-filter"}),". Please see ",e.jsx(s.a,{href:"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/",children:"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/"})," for more info."]}),`
`,e.jsxs(s.h3,{id:"web",children:["Web",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Social sign in on Web platforms uses React via the ",e.jsx(s.a,{href:"https://docs.unity3d.com/Manual/webgl-templates.html",children:"WebGLTemplate"})," found under ",e.jsx(s.code,{children:"WebGLTemplates/SequenceReact"}),". This has been validated on WebGL and WebGPU. To learn how to enable WebGPU in Unity, please see ",e.jsx(s.a,{href:"https://forum.unity.com/threads/early-access-to-the-new-webgpu-backend-in-unity-2023-3.1516621/",children:"this forum post"}),"."]}),`
`,e.jsxs(s.p,{children:["Please note that Google is the only OIDC provider currently supported on Web platforms by our default ",e.jsx(s.code,{children:"SequenceReact"})," WebGLTemplate; however, you are welcome to expand upon it to add support for the other OIDC providers supported by our API."]}),`
`,e.jsxs(s.h4,{id:"one-time-setup",children:["One-time setup",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#one-time-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Drag this ",e.jsx(s.code,{children:"WebGLTemplates"})," folder under ",e.jsx(s.code,{children:"Assets"})," (or just drag the ",e.jsx(s.code,{children:"SequenceReact"})," template into your existing ",e.jsx(s.code,{children:"WebGLTemplates"})," folder is you already have one) such that you have ",e.jsx(s.code,{children:"Assets/WebGLTemplates/SequenceReact"}),"."]}),`
`,e.jsx(s.aside,{"data-callout":"warning",children:e.jsxs(s.p,{children:["It is very important that your ",e.jsx(s.code,{children:"WebGLTemplates"})," are at ",e.jsx(s.code,{children:"Assets/WebGLTemplates"}),". Much like the ",e.jsx(s.code,{children:"Plugins"})," folder, if they aren't in this exact location, Unity will not pick them up!"]})}),`
`,e.jsxs(s.p,{children:["Once you've added the ",e.jsx(s.code,{children:"SequenceReact"})," template, you'll want to restart the editor so that Unity picks up your newly added template."]}),`
`,e.jsxs(s.p,{children:["From here, you can select the template under ",e.jsx(s.code,{children:"Project Settings > Player Settings > Resolution and Presentation"}),"."]}),`
`,e.jsxs(s.h4,{id:"building",children:["Building",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"After the one time setup, when you build your Unity project on Web platforms it will be built as part of a React project."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Open up a command line at the root of your new build"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://pnpm.io/installation",children:"Install pnpm"})," if you don't already have it"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pnpm install"})," to install dependancies"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pnpm dev"})," to run the project on your localhost (defaulting to port 4444 - configurable in ",e.jsx(s.code,{children:"SequenceReact/package.json"}),")"]}),`
`,e.jsxs(s.li,{children:["Open ",e.jsx(s.a,{href:"http://localhost:4444",children:"http://localhost:4444"})]}),`
`]}),`
`,e.jsx(s.aside,{"data-callout":"tip",children:e.jsxs(s.p,{children:["When configuring your social sign in credentials with Google (for example), you'll want to whitelist ",e.jsx(s.a,{href:"http://localhost:4444",children:"http://localhost:4444"}),` and your game's eventual hosted URL as "Authorized Javascript origins"`]})}),`
`,e.jsx(s.aside,{"data-callout":"tip",children:e.jsxs(s.p,{children:["Don't forget to subscribe to the ",e.jsx(s.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})})]})}function d(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{d as default,a as frontmatter};
