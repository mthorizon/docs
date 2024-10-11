import{d as a,j as e}from"./index-E_uliwFZ.js";const s={title:"Customizing and Implementing Wallet UI - A Guide for Developers",description:"The Wallet UI SDK provides a default UI for apps to integrate."};function o(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"wallet-ui",children:["Wallet UI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-ui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"As a Wallet as a Service product, this SDK requires no UI. However, as we expect some apps will still choose to provide some form of wallet UI to users, we are making efforts to provide a default UI for you to use."}),`
`,e.jsxs(n.p,{children:["This UI can be found under ",e.jsx(n.code,{children:"SequenceFrontend"}),"."]}),`
`,e.jsxs(n.p,{children:["To add the UI to your scene, you can add the ",e.jsx(n.code,{children:"WalletPanel"})," prefab found under ",e.jsx(n.code,{children:"SequenceFrontend > Prefabs"}),". It is opened using the Open method; you must provide an ",e.jsx(n.code,{children:"Sequence.EmbeddedWallet.IWallet"})," (e.g. a ",e.jsx(n.code,{children:"SequenceWallet"}),") as an argument."]}),`
`,e.jsx(n.p,{children:"You'll notice that the UI is still a work in progress and is also using mocks in some places (fetching transaction history and prices). These will be replaced in coming updates of the SDK, but please feel free to replace them on your own (and for bonus points, submit a PR!)."}),`
`,e.jsxs(n.h2,{id:"how-it-works",children:["How It Works",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The sample Sequence UI is comprised of a few important components."}),`
`,e.jsxs(n.h3,{id:"uipage",children:["UIPage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uipage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"UIPage"}),' is the base implementation of a "page" in the sample UI. Example pages: ',e.jsx(n.code,{children:"LoginPage"}),", ",e.jsx(n.code,{children:"TokenInfoPage"})]}),`
`,e.jsxs(n.p,{children:["It is responsible for opening/closing the page and managing the chosen ",e.jsx(n.code,{children:"ITween"}),"."]}),`
`,e.jsxs(n.h3,{id:"itween",children:["ITween",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itween",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.code,{children:"ITween"})," is an interface for an animation (in/out) that can be applied to a ",e.jsx(n.code,{children:"RectTransform"})," (a required component of a ",e.jsx(n.code,{children:"UIPage"}),"). If you don't like the animations for a given ",e.jsx(n.code,{children:"UIPage"})," or ",e.jsx(n.code,{children:"UIPanel"})," you can easily swap it for any other MonoBehaviour implementing the ",e.jsx(n.code,{children:"ITween"})," interface, even your own!"]}),`
`,e.jsxs(n.p,{children:["Tip: to save time creating your own animations, consider using the popular ",e.jsx(n.a,{href:"https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676",children:"DOTween toolset"})]}),`
`,e.jsxs(n.h3,{id:"uipanel",children:["UIPanel",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uipanel",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Inherriting from ",e.jsx(n.code,{children:"UIPage"}),", a ",e.jsx(n.code,{children:"UIPanel"}),' is the base implementation of a "panel" in the sample UI. Example panels: ',e.jsx(n.code,{children:"LoginPanel"}),", ",e.jsx(n.code,{children:"WalletPanel"})]}),`
`,e.jsxs(n.p,{children:["In addition to ",e.jsx(n.code,{children:"UIPage"})," responsibilities, UIPanels maintain a stack of UIPages and ",e.jsx(n.code,{children:"object[]"}),' (open arguments) and are responsible for managing any required event listeners and UI transitions between their child pages (according to Scene inspector heirarchy), including handling the "Back" button.']}),`
`,e.jsxs(n.h3,{id:"sequencesampleui",children:["SequenceSampleUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequencesampleui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SequenceSampleUI"}),' can be thought of as the "manager" of the sample UI. It holds a reference to all the UIPanels and is responsible for opening them as needed, including at ',e.jsx(n.code,{children:"Start()"}),". If you are integrating all or part of the provided sample UI into your project, you may find it more practical to replace ",e.jsx(n.code,{children:"SequenceSampleUI"}),' with your own UI "manager", using ',e.jsx(n.code,{children:"SequenceSampleUI"})," as a reference."]}),`
`,e.jsxs(n.h2,{id:"ui-customizability",children:["UI Customizability",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ui-customizability",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Built on Unity's UI system, the UI is entirely customizable. We encourage you to make it your own and "beautify" it to suit your app!`}),`
`,e.jsxs(n.h3,{id:"color-scheme-manager",children:["Color Scheme Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#color-scheme-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To help you with the process, we've added a basic ",e.jsx(n.code,{children:"ColorSchemeManager"})," script which you can experiment with in our Demo scene, which can be ",e.jsx(n.a,{href:"/sdk/unity/installation#samples",children:"imported via Package Manager"}),"."]}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"ColorSchemeManager"}),", please perform the following in edit mode."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create a ",e.jsx(n.code,{children:"Color Scheme"})," ",e.jsx(n.a,{href:"https://docs.unity3d.com/Manual/class-ScriptableObject.html",children:"scriptable object"})," by navigating to the top bar ",e.jsx(n.code,{children:"Assets > Create > Sequence > Color Scheme"})," and give it an appropriate name."]}),`
`,e.jsx(n.li,{children:"Set the desired colors in your new scriptable object - don't forget to set the alpha values! Unity defaults these to 0."}),`
`,e.jsxs(n.li,{children:["Locate the ",e.jsx(n.code,{children:"ColorSchemeManager"})," MonoBehaviour in your scene in the inspector. In our demo scene, this is attached to the ",e.jsx(n.code,{children:"SequenceCanvas"})," gameObject."]}),`
`,e.jsx(n.li,{children:"Set your newly created scriptable object as the Color Scheme."}),`
`,e.jsxs(n.li,{children:['Click "Apply". Note that this may take a few seconds to apply and you ',e.jsx("i",{children:"may"})," need to click apply multiple times due to the way Unity refreshes after changes in the inspector (version dependant)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ColorSchemeManager"})," isn't meant to give you perfect results and the perfect UI right out of the gate, but we hope it saves you some time on the way there!"]}),`
`,e.jsxs(n.h3,{id:"more-customization-tools-coming-soon",children:["More Customization Tools Coming Soon",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#more-customization-tools-coming-soon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"We hope to bring you more convenience tools to help you customize the UI quicker and easier! While we have ideas of our own, nobody understands your needs better than you do, so please don't hesitate to reach out to us with any ideas you have! Or better yet, submit a PR!"})]})}function r(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{r as default,s as frontmatter};
