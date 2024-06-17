import{d as i,j as e}from"./index-B2rCT-Yh.js";const o={title:"Installation",description:"undefined"};function a(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"package-manager---recommended",children:["Package Manager - Recommended",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#package-manager---recommended",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"openupm",children:["OpenUPM",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#openupm",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://openupm.com/#get-started-with-cli-optional",children:"Install OpenUPM"})}),`
`,e.jsx(n.li,{children:"Open a command line at the root of your Unity project"}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"openupm add xyz.0xsequence.waas-unity"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"or-using-package-manager-ui",children:["or using Package Manager UI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#or-using-package-manager-ui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Ensure you have Git 2.14.0 or above installed on your machine"}),`
`,e.jsx(n.li,{children:"Open Package Manager (Window > Package Manager)"}),`
`,e.jsx(n.li,{children:'Click the "+" icon in the Package Manager window > "Add package from git URL..."'}),`
`,e.jsxs(n.li,{children:["Paste this url and click Add or press Enter on your keyboard ",e.jsx(n.code,{children:"https://github.com/0xsequence/sequence-unity.git?path=/Assets"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open Package Manager (Window > Package Manager)"}),`
`,e.jsx(n.li,{children:'From Package Manager, click on "Samples"'}),`
`,e.jsxs(n.li,{children:[`Import "Setup" from Samples
`,e.jsx(n.img,{src:"/img/unity/unity-import-setup.png",alt:"Setup"})]}),`
`]}),`
`,e.jsx(n.p,{children:"a) This will import a Resources folder with the SequenceConfig scriptable object (more on this in Setup)."}),`
`,e.jsx(n.p,{children:"b) This will also import an Editor folder with a Post Process Build script that will setup social sign in for you automatically on MacOS and iOS."}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Import ",e.jsx(n.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/unity/unity-import-tmpro.png",alt:"Import TMPro"})}),`
`,e.jsxs(n.h3,{id:"samples",children:["Samples",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#samples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In addition to this documentation, we've also provided you with a few samples to help with using our SDK."}),`
`,e.jsx(n.p,{children:"These can be found by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Opening Package Manager"}),`
`,e.jsx(n.li,{children:'Finding our SDK "Sequence WaaS SDK"'}),`
`,e.jsx(n.li,{children:'Click on "Samples"'}),`
`,e.jsx(n.li,{children:'Click "Import" next to any sample you wish to install. This will create a Samples folder under Assets and import the sample there. The sample will be completely mutable as it lives within your Assets folder.'}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/unity/unity-package-manager-samples.png",alt:"Samples"})}),`
`,e.jsx(n.p,{children:'The second sample "Demo Scene" is sample scene that showcases some of the features of our SDK. It serves as a useful supplement to the documentation.'}),`
`,e.jsxs(n.p,{children:['The third sample "Demo Tower Defense Game" is a sample game. We began with ',e.jsx(n.a,{href:"https://assetstore.unity.com/packages/essentials/tutorial-projects/tower-defense-template-107692",children:"Unity's Tower Defense Template"}),' project and ripped out the save system to replace it with ERC1155s. When importing this sample game into your project, you may get a message "Script Updating Consent" that asks if you want to update the source files to the a newer API. This is because the template project was made on a much earlier version of Unity and some of the scripting APIs used by Unity have changed since the template project was created. You can simply click "Yes, just for these files". Note that, in order to play the demo game, there is some ',e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/tree/tower-defence/package-manager?tab=readme-ov-file#how-it-was-made",children:"config you need to setup"}),". However, even without configuring the game, we believe the Scripts within the project can be a useful resource when starting out."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/unity/unity-update-api-prompt.png",alt:"Update API Prompt"})}),`
`,e.jsxs(n.h2,{id:"manual",children:["Manual",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manual",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Installing via Package Manager will put the SDK in a read-only state - note: you will still be able to modify the UI when using Package Manager."}),`
`,e.jsx(n.p,{children:"For most use cases, this is ideal. However, we recognize that some advanced users will want the flexibility to edit the SDK as they see fit."}),`
`,e.jsx(n.p,{children:"Please note that if you do chose this route that updating the SDK will become more challenging because any changes you make will be overwritten and these changes can easily go unnoticed in a version control system. In general, we feel it is safer to import the SDK in read-only mode via Package Manager and write wrappers to extend as needed, but we empower you to work with our SDK how you see fit."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.a,{href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.0/manual/index.html",children:"Newtonsoft.json"}),` to your project (if it isn't there already) via package manager. Click on the "+" icon in the Package Manager window > "Add package by name..." and add `,e.jsx(n.code,{children:"com.unity.nuget.newtonsoft-json"}),"."]}),`
`,e.jsxs(n.li,{children:["Download ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/releases",children:"the latest release of the Sequence Unity SDK UnityPackage"})]}),`
`,e.jsxs(n.li,{children:["Drag the ",e.jsx(n.code,{children:".unitypackage"})," file into your project window and import it"]}),`
`,e.jsxs(n.li,{children:["Import ",e.jsx(n.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]})]})}function r(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{r as default,o as frontmatter};
