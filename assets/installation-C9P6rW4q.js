import{d as i,j as e}from"./index-BQtHmGy5.js";const o={title:"Installation",description:"undefined"};function a(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"installation",children:["Installation",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.h2,{id:"package-manager---recommended",children:["Package Manager - Recommended",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#package-manager---recommended",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Ensure you have Git 2.14.0 or above installed on your machine"}),`
`,e.jsx(t.li,{children:"Open Package Manager (Window > Package Manager)"}),`
`,e.jsx(t.li,{children:'Click the "+" icon in the Package Manager window > "Add package from git URL..."'}),`
`,e.jsxs(t.li,{children:["Paste this url and click Add or press Enter on your keyboard ",e.jsx(t.code,{children:"https://github.com/0xsequence/sequence-unity.git?path=/Assets"})]}),`
`,e.jsx(t.li,{children:'From Package Manager, click on "Samples"'}),`
`,e.jsxs(t.li,{children:[`Import "Setup" from Samples
`,e.jsx(t.img,{src:"/img/unity/unity-import-setup.png",alt:"Setup"})]}),`
`]}),`
`,e.jsx(t.p,{children:"a) This will import a Resources folder with the SequenceConfig scriptable object (more on this in Setup)."}),`
`,e.jsx(t.p,{children:"b) This will also import an Editor folder with a Post Process Build script that will setup social sign in for you automatically on MacOS and iOS."}),`
`,e.jsxs(t.ol,{start:"7",children:[`
`,e.jsxs(t.li,{children:["Import ",e.jsx(t.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/unity/unity-import-tmpro.png",alt:"Import TMPro"})}),`
`,e.jsxs(t.h3,{id:"samples",children:["Samples",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#samples",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"In addition to this documentation, we've also provided you with a few samples to help with using our SDK."}),`
`,e.jsx(t.p,{children:"These can be found by:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Opening Package Manager"}),`
`,e.jsx(t.li,{children:'Finding our SDK "Sequence WaaS SDK"'}),`
`,e.jsx(t.li,{children:'Click on "Samples"'}),`
`,e.jsx(t.li,{children:'Click "Import" next to any sample you wish to install. This will create a Samples folder under Assets and import the sample there. The sample will be completely mutable as it lives within your Assets folder.'}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/unity/unity-package-manager-samples.png",alt:"Samples"})}),`
`,e.jsx(t.p,{children:'The second sample "Demo Scene" is sample scene that showcases some of the features of our SDK. It serves as a useful supplement to the documentation.'}),`
`,e.jsxs(t.p,{children:['The third sample "Demo Tower Defense Game" is a sample game. We began with ',e.jsx(t.a,{href:"https://assetstore.unity.com/packages/essentials/tutorial-projects/tower-defense-template-107692",children:"Unity's Tower Defense Template"}),' project and ripped out the save system to replace it with ERC1155s. When importing this sample game into your project, you may get a message "Script Updating Consent" that asks if you want to update the source files to the a newer API. This is because the template project was made on a much earlier version of Unity and some of the scripting APIs used by Unity have changed since the template project was created. You can simply click "Yes, just for these files". Note that, in order to play the demo game, there is some ',e.jsx(t.a,{href:"https://github.com/0xsequence/sequence-unity-demo/tree/tower-defence/package-manager?tab=readme-ov-file#how-it-was-made",children:"config you need to setup"}),". However, even without configuring the game, we believe the Scripts within the project can be a useful resource when starting out."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/unity/unity-update-api-prompt.png",alt:"Update API Prompt"})}),`
`,e.jsxs(t.h2,{id:"manual",children:["Manual",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manual",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Installing via Package Manager will put the SDK in a read-only state - note: you will still be able to modify the UI when using Package Manager."}),`
`,e.jsx(t.p,{children:"For most use cases, this is ideal. However, we recognize that some advanced users will want the flexibility to edit the SDK as they see fit."}),`
`,e.jsx(t.p,{children:"Please note that if you do chose this route that updating the SDK will become more challenging because any changes you make will be overwritten and these changes can easily go unnoticed in a version control system. In general, we feel it is safer to import the SDK in read-only mode via Package Manager and write wrappers to extend as needed, but we empower you to work with our SDK how you see fit."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Add ",e.jsx(t.a,{href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.0/manual/index.html",children:"Newtonsoft.json"}),` to your project (if it isn't there already) via package manager. Click on the "+" icon in the Package Manager window > "Add package by name..." and add `,e.jsx(t.code,{children:"com.unity.nuget.newtonsoft-json"}),"."]}),`
`,e.jsxs(t.li,{children:["Download ",e.jsx(t.a,{href:"https://github.com/0xsequence/sequence-unity/releases",children:"the latest release of the Sequence Unity SDK UnityPackage"})]}),`
`,e.jsxs(t.li,{children:["Drag the ",e.jsx(t.code,{children:".unitypackage"})," file into your project window and import it"]}),`
`,e.jsxs(t.li,{children:["Import ",e.jsx(t.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]})]})}function r(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default,o as frontmatter};
