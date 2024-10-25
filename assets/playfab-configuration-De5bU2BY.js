import{d as n,j as e}from"./index-B5_D2Yga.js";/* empty css                                */const o={title:"Configuring FlayFab Client for Embedded Wallet Integration",description:"Learn how to configure a PlayFab client for your Embedded Wallet instance. Follow steps to create and retrieve a Title ID from the PlayFab dashboard."};function a(i){const t={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"playfab-configuration-for-embedded-wallet",children:["Playfab Configuration for Embedded Wallet",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#playfab-configuration-for-embedded-wallet",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:["In order to have PlayFab auth integrated into your Embedded Wallet instance, you have to configure a PlayFab Game in the ",e.jsx(t.a,{href:"https://developer.playfab.com/",children:"Microsoft PlayFab Developer"})," dashboard, by starting with the following below steps:"]}),`
`,e.jsxs(t.div,{"data-vocs-steps":"true",children:[e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"sign-up--sign-in",children:["Sign Up / Sign In",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-up--sign-in",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["First access the sign in page ",e.jsx(t.a,{href:"https://developer.playfab.com/",children:"here"}),":"]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/guides/playfab/playfab_developer_sign_in.png",alt:"PlayFab sign in page"})})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"create-a-new-studio",children:["Create a New Studio",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-new-studio",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["After you've signed in, go to the ",e.jsx(t.a,{href:"https://developer.playfab.com/en-us/r/studio/new",children:"following link to create a studio"})," which will generate a ",e.jsx(t.code,{children:"Title ID"})," for you."]})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"retrieve-a-title-id",children:["Retrieve a Title ID",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieve-a-title-id",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["Afer you've created a studio, you can retrieve the ",e.jsx(t.code,{children:"Title ID"})," to include it in the SDK on the ",e.jsx(t.a,{href:"https://developer.playfab.com/en-us/my-games",children:"following page"})]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/guides/playfab/playfab_developer_retrieve_title_id.png",alt:"Retrieve a Title ID"})}),e.jsxs(t.p,{children:["Then add the Title ID to your ",e.jsx(t.a,{href:"https://sequence.build/project/default/wallet/embedded-wallet",children:"Embedded Wallet configuration"})," as a new login provider which will complete the configuration."]}),e.jsxs(t.p,{children:["The configuration is complete! Lastly, check out our reference implementation for web to see how to ",e.jsx(t.a,{href:"/solutions/wallets/embedded-wallet/examples/authentication#authenticating-with-playfab",children:"retrieve the Playfab ticket"})," and pass it to Sequence to authenticate the user."]})]})]})]})}function l(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{l as default,o as frontmatter};
