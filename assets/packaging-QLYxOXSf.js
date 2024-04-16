import{d as o,j as e}from"./index-BoTAIcB9.js";const a={title:"Packaging",description:"undefined"};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"packaging",children:["Packaging",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#packaging",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"To set your system up for Packaging please refer to the following links:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.unrealengine.com/5.0/en-US/packaging-unreal-engine-projects/",children:"Windows and macOS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Mobile/Android/PackagingAndroidProject/",children:"Android"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.unrealengine.com/5.0/en-US/packaging-ios-projects-in-unreal-engine/",children:"iOS"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"google-sso-setup",children:["Google SSO Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#google-sso-setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In order to be able to properly use Google Auth, create and place the Keystore file by following ",e.jsx(n.a,{href:"https://docs.unrealengine.com/5.1/en-US/signing-android-projects-for-release-on-the-google-play-store-with-unreal-engine/",children:"these instructions"}),"."]}),`
`,e.jsxs(n.p,{children:["You will also need to generate an ",e.jsx(n.code,{children:"[Android client ID]"})," and a ",e.jsx(n.code,{children:"[Web Application client ID]"})," for your application, as well as place the ",e.jsx(n.code,{children:"[Web Application client ID]"})," in the ",e.jsx(n.code,{children:"Config/Config.h"})," ",e.jsx(n.code,{children:"FAuthenticatorConfig.GoogleClientID"})," field."]}),`
`,e.jsxs(n.p,{children:["Refer to ",e.jsx(n.a,{href:"https://developers.google.com/identity/one-tap/android/get-started#api-console",children:"these docs"})," to generate ",e.jsx(n.code,{children:"[Android client ID]"})," and ",e.jsx(n.code,{children:"[Web Application client ID]"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://developers.google.com/android/guides/client-auth",children:"This guide"})," helps explain how to collect SHA-1 key fingerprints for the ",e.jsx(n.code,{children:"[Android client ID]"}),"."]}),`
`,e.jsxs(n.h3,{id:"ios",children:["iOS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For iOS apps you also need to setup provisioning, ",e.jsx(n.a,{href:"https://docs.unrealengine.com/5.1/en-US/setting-up-ios-tvos-and-ipados-provisioning-profiles-and-signing-certificates-for-unreal-engine-projects/",children:"following these docs"}),"."]}),`
`,e.jsxs(n.h3,{id:"unreal-and-xcode-specifics",children:["Unreal and Xcode Specifics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unreal-and-xcode-specifics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"During the Unreal Package process there is a very high chance that it will fail due to a code signing error, in the event that this happens please take the following steps within XCode to get your packaged .app file"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"After packaging the project in Unreal, open the Xcode project (Sequence-unreal folder -> Intermediate -> ProjectFilesIOS -> SequenceUnreal.xcodeproj)"}),`
`,e.jsx(n.li,{children:"Click on the project name on the left hand side to open up project settings"}),`
`,e.jsx(n.li,{children:"Click the Build Phase Tab"}),`
`,e.jsx(n.li,{children:'Click on the "+" icon at the top left'}),`
`,e.jsx(n.li,{children:"Select Run Script"}),`
`,e.jsx(n.li,{children:"Drag the new run script to one below from the last item in the phase list"}),`
`,e.jsx(n.li,{children:"Expand the run script"}),`
`,e.jsxs(n.li,{children:["In the script box, add the following command: ",e.jsx(n.code,{children:"xattr -cr /path-to-your-project/sequence-unreal/Binaries/IOS/Payload/SequenceUnreal.app"})]}),`
`,e.jsx(n.li,{children:"Click on the Build Settings tab"}),`
`,e.jsx(n.li,{children:"Click on each item under the Architectures header that contains macOS and hit the delete key"}),`
`,e.jsx(n.li,{children:"Click on the General tab"}),`
`,e.jsx(n.li,{children:"Click on Mac and Applevision Pro under supported destinations and hit the delete key"}),`
`,e.jsx(n.li,{children:"Now the project can be built (if the build fails at first, wait a few moments then try again. It can sometimes take a bit before the build registers the run script)"}),`
`,e.jsx(n.li,{children:"Once you have finished running the project, and want to make changes to the code, REMEMBER to delete this xcodeproj file in the sequence-unreal folder to ensure that a new xcodeproj is creating when you packaging the project again."}),`
`]})]})}function s(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,a as frontmatter};
