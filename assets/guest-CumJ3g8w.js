import{d as t,j as e}from"./index-XeV2SwJW.js";const a={title:"Guest",description:"undefined"};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"guest",children:["Guest",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guest",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"For when you want to quickly get your users into your game to start playing, you can use our guest login."}),`
`,e.jsxs(s.p,{children:["Simply call ",e.jsx(s.code,{children:"GuestLogin"})," on a ",e.jsx(s.code,{children:"SequenceLogin"})," instance."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SequenceLogin"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" login"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SequenceLogin."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"login."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GuestLogin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,e.jsxs(s.p,{children:["Reminder: since guest login users have no persisting credentials, when the session ends, the user will be unable to access their embedded wallet again. Before ending the session, be sure to prompt the user to ",e.jsx(s.a,{href:"/sdk/unity/authentication/federated-accounts",children:"federate their account"})," and associate a login method + credentials with it for subsequent sessions!"]}),`
`,e.jsx(s.aside,{"data-callout":"tip",children:e.jsxs(s.p,{children:["Don't forget to subscribe to the ",e.jsx(s.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})})]})}function o(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,a as frontmatter};
