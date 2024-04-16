import{d as s,j as e}from"./index-qvMlkbf0.js";const r={title:"Setup",description:"undefined"};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Navigate to the Resources folder imported via the ",e.jsx(n.code,{children:"Setup"})," sample and locate the ",e.jsx(n.code,{children:"SequenceConfig"})," ScriptableObject"]}),`
`,e.jsx(n.p,{children:"a) If you imported the SDK manually, you will need to create a Resources folder and SequenceConfig"}),`
`,e.jsxs(n.p,{children:["b) Create a ",e.jsx(n.code,{children:"Resources"})," folder located at ",e.jsx(n.code,{children:"Assets/Resources"}),". The SDK uses ",e.jsx(n.a,{href:"https://docs.unity3d.com/ScriptReference/Resources.Load.html",children:"Resources.Load"})," to load the config ",e.jsx(n.code,{children:"ScriptableObject"})," we'll create in the next step."]}),`
`,e.jsxs(n.p,{children:["c) On the top bar, click ",e.jsx(n.code,{children:"Assets > Create > Sequence > SequenceConfig"})," and place the newly created ",e.jsx(n.code,{children:"ScriptableObject"})," at the root of your ",e.jsx(n.code,{children:"Resources"})," folder."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Fill in ",e.jsx(n.code,{children:"SequenceConfig"})," with the appropriate values for your project."]}),`
`,e.jsxs(n.p,{children:["a) ",e.jsx(n.code,{children:"Url Scheme"})," - You must replace this with a string that is unique to your application. This is very important. Failure to do so will cause unexpected behaviour when signing in with social sign in and it will not work."]}),`
`,e.jsxs(n.p,{children:["b) ",e.jsx(n.code,{children:"Builder API Keys"})," - These are found in the ",e.jsx(n.a,{href:"https://sequence.build/",children:"Builder"})," under ",e.jsx(n.code,{children:"Settings > API Access Keys"})]}),`
`,e.jsxs(n.p,{children:["c) ",e.jsx(n.code,{children:"WaaS Config Key"})," - This will be given to you by the Sequence team during WaaS onboarding"]}),`
`]}),`
`]})]})}function o(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default,r as frontmatter};
