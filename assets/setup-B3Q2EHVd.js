import{d as o,j as e}from"./index-Duws2-JZ.js";const r={title:"Setup",description:"undefined"};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Once you have the the ",e.jsx(n.code,{children:"SequencePlugin"})," folder, you'll need to go to your project directory and create a ",e.jsx(n.code,{children:"Plugins"})," folder in it, then copy over the ",e.jsx(n.code,{children:"SequencePlugin"})," folder into the ",e.jsx(n.code,{children:"Plugins"})," folder. If a ",e.jsx(n.code,{children:"Plugins"})," folder already exists just copy the ",e.jsx(n.code,{children:"SequencePlugin"})," folder into it."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Launch your project, then allow it to update the UProject Settings."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable view plugin content"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`If you wish to use the in built sequence UI for login
a) Create an `,e.jsx(n.code,{children:"[Actor]"})," you wish to be responsible for the SequenceUI then attach the ",e.jsx(n.code,{children:"[Sequence_Pawn_Component_BP]"}),` to it
b) Setup your `,e.jsx(n.code,{children:"[Actor]"})," Blueprint similar to how it's setup in ",e.jsx(n.code,{children:"[Custom_Spectator_Pawn]"})," being sure to bind to the delegate that gives you Credentials ",e.jsx(n.code,{children:"[Auth_Success_Forwarder]"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Once you have those credentials you'll need to forward them to your own C++ backend in order to use the Sequence API, an example of this can be found in the ",e.jsx(n.code,{children:"[Custom_Spectator_Pawn]"}),". This Pawn inherits from a C++ class ",e.jsx(n.code,{children:"[Sqnc_Spec_Pawn]"}),", which implements a blueprint Callable function ",e.jsx(n.code,{children:"[SetupCredentials(FCredentials_BE CredentialsIn)]"}),". This is callable within the child class ",e.jsx(n.code,{children:"[Custom_Spectator_Pawn]"}),". Calling this function will forward the credentials to a C++ backend."]}),`
`]}),`
`]})]})}function s(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{s as default,r as frontmatter};
