import{d as a,j as e}from"./index-CRkWis-D.js";const l={title:"PlayFab",description:"undefined"};function n(s){const i={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"playfab",children:["PlayFab",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#playfab",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["Our SDK/API supports signing in using the popular ",e.jsx(i.a,{href:"https://playfab.com/",children:"PlayFab"})," service provided by Microsoft Azure."]}),`
`,e.jsxs(i.p,{children:["However, since the ",e.jsx(i.a,{href:"https://github.com/PlayFab/UnitySDK",children:"PlayFab SDK for Unity"})," can currently only be imported manually via a ",e.jsx(i.code,{children:".unitypackage"})," file, we've opted not to include it directly in our SDK as doing so may create dependancy conflicts in your project. Similarly, we haven't provided any integration code within our SDK."]}),`
`,e.jsxs(i.p,{children:["Luckily, the PlayFab SDK is easily integrated into your project. Please see their ",e.jsx(i.a,{href:"https://github.com/PlayFab/UnitySDK",children:"readme for installation and integration instructions"}),"."]}),`
`,e.jsxs(i.p,{children:["Once you've authenticated your user via PlayFab, you should have received a ",e.jsx(i.code,{children:"SessionTicket"})," from the ",e.jsx(i.code,{children:"LoginResult"})," object."]}),`
`,e.jsxs(i.p,{children:["From here, simply call ",e.jsx(i.code,{children:"PlayFabLogin"})," on a ",e.jsx(i.code,{children:"SequenceLogin"})," object"]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" void"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" OnPlayFabLoginSuccess"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"LoginResult"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" result"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"    SequenceLogin"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" login"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SequenceLogin."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetInstance"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    login."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"PlayFabLogin"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(PlayFabSettings.staticSettings.TitleId, result.SessionTicket, email);"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(i.p,{children:["where ",e.jsx(i.code,{children:"email"})," is the email string used to login to PlayFab (or ",e.jsx(i.code,{children:'""'})," if using PlayFab Guest Login)."]}),`
`,e.jsx(i.aside,{"data-callout":"tip",children:e.jsxs(i.p,{children:["Don't forget to subscribe to the ",e.jsx(i.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})}),`
`,e.jsx(i.aside,{"data-callout":"warning",children:e.jsxs(i.p,{children:["Don't forget to ",e.jsx(i.a,{href:"/solutions/builder/embedded-wallet/playfab-configuration",children:"configure PlayFab in the Builder"}),"!"]})})]})}function t(s={}){const{wrapper:i}={...a(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{t as default,l as frontmatter};
