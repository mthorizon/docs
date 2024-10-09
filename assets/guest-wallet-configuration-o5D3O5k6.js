import{d as a,j as e,e as s}from"./index-BeiwWbZM.js";/* empty css                                */const d={title:"Configuring Guest Wallet for Embedded Wallet Integration",description:"Learn how to configure a Guest wallet for your Embedded Wallet instance."};function n(i){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",span:"span",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"guest-wallet-configuration-for-embedded-wallet",children:["Guest Wallet Configuration for Embedded Wallet",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guest-wallet-configuration-for-embedded-wallet",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Guest Wallets are a feature in the Sequence Stack that allow for ephemeral creation of an authentication idenity that lasts till the user clears their browser cache, or, sign's in again."}),`
`,e.jsx(t.p,{children:"This strategy for onboarding can be useful for providing ways to freely access your game or experience, increasing your conversion rate until players want to persist their information."}),`
`,e.jsx(t.p,{children:"Importantly, if users clear their cache or lose access to the device - any assets in the Guest Wallet will not be recoverable. Therefore, users should connect an additional authentication method if any value is associated with the wallet."}),`
`,e.jsx(s,{type:"warning",children:e.jsxs(t.p,{children:["The Guest Wallet feature is currently in early access. To enable it, please visit ",e.jsx(t.a,{href:"https://sequence.build/earlyaccess",children:"https://sequence.build/earlyaccess"})," and turn on the functionality."]})}),`
`,e.jsx(t.p,{children:"To configure the Embedded Wallet for Guest Wallet, this can be accomplished with the following steps:"}),`
`,e.jsxs(t.div,{"data-vocs-steps":"true",children:[e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"builder-configuration",children:["Builder Configuration",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#builder-configuration",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Access your project in Sequence builder, navigate to the Embedded Wallet Configuration section, then add a Login Provider:"}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_guest_wallet_add_provider.png",alt:"add login provider"})}),e.jsxs(t.p,{children:["Finally, selecting ",e.jsx(t.code,{children:"Guest Wallet"})," in the dropdown."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_guess_wallet_select_provider.png",alt:"select guest wallet"})}),e.jsxs(t.p,{children:["And selecting the purple ",e.jsx(t.code,{children:"Update configuration"})," to input your password to update the Configuration."]})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"implementation",children:["Implementation",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Once configured, you can implement a Guest Wallet with the following code and use it like any other Embedded Wallet:"}),e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"App.tsx","data-lang":"typescript",children:e.jsx(t.code,{children:e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),e.jsx(t.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(t.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"signIn"}),e.jsx(t.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ guest: "}),e.jsx(t.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(t.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }, "}),e.jsx(t.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Session name"'}),e.jsx(t.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})})]})]})]})}function o(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{o as default,d as frontmatter};
