import{d as n,j as e}from"./index-D8_oTBjA.js";/* empty css                                */const t={title:"Implementing Sequence Embedded Wallet Mobile SDK with React Native",description:"Learn how to integrate the Sequence Embedded Wallet Mobile SDK in a React Native app for iOS and Android."};function a(d){const i={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"react-native-embedded-wallet-demo",children:["React Native Embedded Wallet Demo",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#react-native-embedded-wallet-demo",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"The following walkthrough implements the Sequence Embedded Wallet Mobile SDK for both iOS and Android."}),`
`,e.jsxs(i.p,{children:["The walkthrough will explain how to clone a template repo and build an ",e.jsx(i.a,{href:"https://expo.dev/",children:"Expo"})," based app, which can be forked, so that a user can login with a ",e.jsx(i.a,{href:"https://console.cloud.google.com/",children:"Gmail"})," or ",e.jsx(i.a,{href:"https://developer.apple.com/",children:"Apple"})," email in a mobile application."]}),`
`,e.jsxs(i.p,{children:["This application enables users to sign messages and send transactions in a React Native Embedded Wallet application on ",e.jsx(i.code,{children:"arbitrum-sepolia"})," network."]}),`
`,e.jsxs(i.h2,{id:"template",children:["Template",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#template",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.aside,{"data-callout":"info",children:e.jsxs(i.p,{children:["Get started with a ",e.jsx(i.a,{href:"https://github.com/0xsequence/demo-waas-react-native",children:"template"})," leveraging the Sequence Embedded Wallet."]})}),`
`,e.jsxs(i.h2,{id:"build-instructions",children:["Build Instructions",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-instructions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"prequisites",children:["Prequisites",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prequisites",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.div,{"data-vocs-steps":"true",children:[e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"install-yarn",children:["Install Yarn",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-yarn",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --global"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" yarn"})]})})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"download-android-studio",children:["Download Android Studio",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#download-android-studio",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Navigate yourself to the following ",e.jsx(i.a,{href:"https://developer.android.com/studio",children:"link to download Android Studio"})]})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"download-java-22-sdk",children:["Download Java 22 SDK",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#download-java-22-sdk",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Navigate yourself to the following ",e.jsx(i.a,{href:"https://www.oracle.com/java/technologies/downloads/",children:"link to download Java SDK"})]})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"set-your-java-sdk-paths",children:["Set your Java SDK paths",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-your-java-sdk-paths",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["If you're on macOS or Linux, set your java sdk path with the following lines in your ",e.jsx(i.code,{children:"~/.bashrc"})," (or ",e.jsx(i.code,{children:"~/.zshrc"}),")"]}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ANDROID_HOME"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"$HOME/Android/Sdk"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" PATH"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools"})]})]})}),e.jsx(i.p,{children:"And run the following command to allow the changes to take effect"}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"source"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.bashrc"})]})})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"install-xcode-if-on-macos",children:["Install XCode (if on macOS)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-xcode-if-on-macos",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Navigate yourself to the following ",e.jsx(i.a,{href:"https://developer.apple.com/xcode/",children:"link to download Xcode"})]})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"install-cocoapods-if-on-macos",children:["Install ",e.jsx(i.code,{children:"cocoapods"})," (if on macOS)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-cocoapods-if-on-macos",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-txt",children:`sudo gem install cocoapods
`})})]})]}),`
`,e.jsxs(i.h3,{id:"running-the-project",children:["Running the Project",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#running-the-project",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.div,{"data-vocs-steps":"true",children:[e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"clone-repository",children:["Clone repository",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-repository",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"Begin by cloning the repository on your computer"}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" git@github.com:0xsequence/demo-waas-react-native.git"})]})})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"create-a-key-file",children:["Create a Key File",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-key-file",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Navigate into the ",e.jsx(i.code,{children:"/android/app"})," folder with ",e.jsx(i.code,{children:"cd"})," and run the following command to create a keystore"]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-txt",children:`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"
`})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"yarn-install",children:[e.jsx(i.code,{children:"yarn install"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#yarn-install",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:[e.jsx(i.code,{children:"cd"})," into the root of the repository you cloned and run"]}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"})]})})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"open-project-with-android-studio",children:["Open Project with Android Studio",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#open-project-with-android-studio",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"Open the project repository with Android Studio, and allow the editor to index and build the project"})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"run-application-on-android",children:["Run application on Android",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-application-on-android",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Once the project has been compiled, ",e.jsx(i.code,{children:"cd"})," into the root of the cloned repo and run"]}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" android"})]})})})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"run-application-on-ios-if-on-macos",children:["Run application on iOS (if on macOS)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-application-on-ios-if-on-macos",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ios"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" "})]})})}),e.jsx(i.p,{children:"Try signing in and sending some test transactions"})]}),e.jsxs(i.div,{"data-depth":"4",children:[e.jsxs(i.h4,{id:"update-waas-configuration",children:["Update WaaS Configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-waas-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["Finally, to allow the Embedded Wallet instance to create wallets when signing into your specific application, access the ",e.jsx(i.a,{href:"https://sequence.build/project/default/wallet/embedded-wallet",children:"following page"})," from your project to obtain a WaaS configuration key, and use ",e.jsx(i.a,{href:"/solutions/builder/embedded-wallet",children:"this walkthrough"})," to help explain the various angles of Embedded Wallet configuration to be updated in your code."]}),e.jsxs(i.p,{children:["Then in the following path in the file ",e.jsx(i.code,{children:"waasSetup.ts"})," from lines 5-13 update variables to your specific application you're building, with the ",e.jsx(i.code,{children:"projectAccessKey"})," and ",e.jsx(i.code,{children:"waasConfigKey"})," values from the Sequence Builder, and the Google social auth client ID's from the Google Console."]}),e.jsxs(i.p,{children:["Next, update the ",e.jsx(i.code,{children:"app.json"})," file on line 13 with the Apple ",e.jsx(i.code,{children:"bundleIdentifier"})]}),e.jsxs(i.p,{children:["Finally, update lines 428 for ",e.jsx(i.code,{children:"clientId"})," and line 432 for ",e.jsx(i.code,{children:"redirectUri"})," in ",e.jsx(i.code,{children:"App.tsx"})," from the Apple Developer Console."]})]})]})]})}function o(d={}){const{wrapper:i}={...n(),...d.components};return i?e.jsx(i,{...d,children:e.jsx(a,{...d})}):a(d)}export{o as default,t as frontmatter};
