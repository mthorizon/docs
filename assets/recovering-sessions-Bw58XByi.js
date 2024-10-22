import{d as s,j as e}from"./index-C81m1MD-.js";const o={title:"Enabling Secure Session Storage for Supported Platforms",description:"The SDK offers the option to store session wallet information securely on select platforms using native secure storage."};function i(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"recovering-sessions",children:["Recovering Sessions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#recovering-sessions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"By default, the SDK will require users to sign in everytime the app is closed completely. This is because, by default, we do not write the session wallet information (e.g. private keys) to any form of persistent storage for user security."}),`
`,e.jsx(t.p,{children:"However, on select platforms, we have integrated with the platform's native secure storage offering."}),`
`,e.jsxs(t.p,{children:["If you enable ",e.jsx(t.code,{children:"StoreSessionPrivateKeyInSecureStorage"})," in your ",e.jsx(t.code,{children:"SequenceConfig"})," ScriptableObject, we will automatically store the session wallet information for you (on supported platforms) and expose the ability to attempt to recover the session in ",e.jsx(t.code,{children:"SequenceLogin"}),". The default ",e.jsx(t.code,{children:"LoginPanel"})," will automatically handle the UI flow for this as well (see ",e.jsx(t.a,{href:"/sdk/unity/authentication/intro",children:"Authentication"}),"). If the platform is not supported, this flag will have no effect."]}),`
`,e.jsx(t.p,{children:"See below the supported platforms and to learn about the platform's secure storage solution - it is important to understand the basics of how these systems work and think carefully about the security implications of storing private keys (or any secret for that matter) in persistent storage."}),`
`,e.jsxs(t.h2,{id:"ios",children:["iOS",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["On iOS, we leverage the ",e.jsx(t.a,{href:"https://developer.apple.com/documentation/security/keychain_services?language=objc",children:"iOS Keychain"}),"."]}),`
`,e.jsxs(t.h2,{id:"macos",children:["MacOS",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macos",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["On MacOS, we leverage the ",e.jsx(t.a,{href:"https://developer.apple.com/documentation/security/keychain_services?language=objc",children:"MacOS Keychain"}),"."]}),`
`,e.jsxs(t.h2,{id:"windows",children:["Windows",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#windows",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["On Windows PCs, we leverage the ",e.jsx(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/seccng/cng-dpapi",children:"Crypto: Next Generation - Data Protection API (CNG DPAPI)"})]}),`
`,e.jsxs(t.h2,{id:"web",children:["Web",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["On Web builds, we leverage ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",children:"IndexedDB"})," via ",e.jsx(t.a,{href:"https://docs.unity3d.com/ScriptReference/PlayerPrefs.html",children:"PlayerPrefs"}),"."]}),`
`,e.jsxs(t.h2,{id:"editor",children:["Editor",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#editor",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"In the editor, we leverage the MacOS and PC secure storage solutions depending on which version of the editor you are using. You will also need to enable 'EditorStoreSessionPrivateKeyInSecureStorage' in SequenceConfig in order to use secure storage and recover sessions from within the editor. This separate flag makes it easier for you to test both flows without modifying the behaviour of your builds."})]})}function a(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,o as frontmatter};
