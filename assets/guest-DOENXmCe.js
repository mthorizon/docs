import{d as s,j as e}from"./index-DFyFnBuw.js";const r={title:"Guest",description:"undefined"};function o(t){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"guest",children:["Guest",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guest",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"For when you want to quickly get your users into your game to start playing, you can use our guest login."}),`
`,e.jsxs(n.p,{children:["Simply call ",e.jsx(n.code,{children:"GuestLogin"})," on a ",e.jsx(n.code,{children:"SequenceLogin"})," instance."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`SequenceLogin login = SequenceLogin.GetInstance();

login.GuestLogin();
`})}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Don't forget to subscribe to the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{a as default,r as frontmatter};
