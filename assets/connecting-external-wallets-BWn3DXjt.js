import{d as a,j as e}from"./index-Chit18G8.js";const r={title:"Connecting External Wallets - Integration Guide and Implementation Steps",description:"The content provides detailed instructions on how to connect external wallets with an embedded wallet using a web interface."};function s(n){const i={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"connecting-external-wallets",children:["Connecting External Wallets",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-external-wallets",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"While the majority of user interactions will happen using the embedded wallet, some of your users may have existing wallets they wish to connect with your games. This allows you to validate a user holds a token(s) without requiring them to transfer it to their embedded wallet."}),`
`,e.jsxs(i.p,{children:["You can ",e.jsx(i.a,{href:"/solutions/wallets/link-wallets/overview",children:"connect an external wallet with an embedded wallet"})," via a web interface."]}),`
`,e.jsxs(i.p,{children:["First, you'll want to configure a server to facilitate this connection. Please ",e.jsx(i.a,{href:"/solutions/wallets/link-wallets/integration-guide",children:"read this guide"})," and come back once you've configured your server (you can skip the first few steps on Builder configuration and integrating embedded wallet into a web app since you've already done this on the Unity side; similarly, you can skip the sections on signing the session auth proof)."]}),`
`,e.jsxs(i.p,{children:["Now that you've configured your server, you can create an ",e.jsx(i.code,{children:"EOAWalletLinker"}),"."]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EOAWalletLinker"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" linker"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EOAWalletLinker"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(wallet, "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"yourServersBaseUrl/generateNonce"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})}),`
`,e.jsx(i.p,{children:"You can generate the url for wallet linking with"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" url"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" linker."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GenerateEOAWalletlink"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain);"})]})})}),`
`,e.jsxs(i.p,{children:["or you can generate it and open it with the device's default browser (via ",e.jsx(i.a,{href:"https://docs.unity3d.com/ScriptReference/Application.OpenURL.html",children:"Application.OpenURL"}),")"]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"linker."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"OpenEOAWalletLink"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chain); "}),e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// note: this is an awaitable async method."})]})})})]})}function l(n={}){const{wrapper:i}={...a(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default,r as frontmatter};
