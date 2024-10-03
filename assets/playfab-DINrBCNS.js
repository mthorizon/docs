import{d as a,j as e}from"./index-Cwi12Sf2.js";const r={title:"PlayFab",description:"undefined"};function t(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"playfab",children:["PlayFab",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#playfab",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Our SDK/API supports signing in using the popular ",e.jsx(n.a,{href:"https://playfab.com/",children:"PlayFab"})," service provided by Microsoft Azure."]}),`
`,e.jsxs(n.p,{children:["However, since the ",e.jsx(n.a,{href:"https://github.com/PlayFab/UnitySDK",children:"PlayFab SDK for Unity"})," can currently only be imported manually via a ",e.jsx(n.code,{children:".unitypackage"})," file, we've opted not to include it directly in our SDK as doing so may create dependancy conflicts in your project. Similarly, we haven't provided any integration code within our SDK."]}),`
`,e.jsxs(n.p,{children:["Luckily, the PlayFab SDK is easily integrated into your project. Please see their ",e.jsx(n.a,{href:"https://github.com/PlayFab/UnitySDK",children:"readme for installation and integration instructions"}),"."]}),`
`,e.jsxs(n.p,{children:["Once you've authenticated your user via PlayFab, you should have received a ",e.jsx(n.code,{children:"SessionTicket"})," from the ",e.jsx(n.code,{children:"LoginResult"})," object."]}),`
`,e.jsxs(n.p,{children:["From here, simply call ",e.jsx(n.code,{children:"PlayFabLogin"})," on a ",e.jsx(n.code,{children:"SequenceLogin"})," object"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`public void OnPlayFabLoginSuccess(LoginResult result) {
    SequenceLogin login = SequenceLogin.GetInstance();
    login.PlayFabLogin(PlayFabSettings.staticSettings.TitleId, result.SessionTicket, email);
}
`})}),`
`,e.jsxs(n.p,{children:["where ",e.jsx(n.code,{children:"email"})," is the email string used to login to PlayFab (or ",e.jsx(n.code,{children:'""'})," if using PlayFab Guest Login)."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Don't forget to subscribe to the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})})]})}function s(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,r as frontmatter};
