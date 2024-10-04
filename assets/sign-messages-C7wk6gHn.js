import{d as t,j as e}from"./index-CnQxKtzN.js";const o={title:"Signing Messages in Unity Using WaaSWallet",description:"This content explains how to sign a message using asynchronous tasks in Unity."};function a(s){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"sign-messages",children:["Sign Messages",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-messages",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Signing a message is an ",e.jsx(n.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",e.jsx(n.code,{children:"await"})," when calling ",e.jsx(n.code,{children:"WaaSWallet.SignMessage"})," from within an async Task if you wish to obtain the ",e.jsx(n.code,{children:"SignMessageReturn"})," object directly. Or, you can take the recommended approach which is to setup a handler function for the ",e.jsx(n.code,{children:"WaaSWallet.OnSignMessageComplete"})," event and call the ",e.jsx(n.code,{children:"WaaSWallet.SignMessage"})," method from anywhere (without await). For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`public void OnSignMessageCompleteHandler(string signature) {
    // Do something
}

public void OnWalletCreatedHander(SequenceWallet wallet) {
    wallet.OnSignMessageComplete += OnSignMessageCompleteHandler;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`_wallet.SignMessage(Chain.Polygon, "Message to sign");
`})}),`
`,e.jsxs(n.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",e.jsx(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]})]})}function r(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default,o as frontmatter};
