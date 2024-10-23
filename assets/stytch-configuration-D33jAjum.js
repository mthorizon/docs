import{d as r,j as e,e as d}from"./index-CtKkAyG2.js";/* empty css                                */const a={title:"Configuring Stytch Client for Embedded Wallet Integration",description:"Learn how to configure a Stytch client for your Embedded Wallet instance. Follow steps to create and retrieve a Public Token from the Stytch dashboard."};function n(i){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"stytch-configuration-for-embedded-wallet",children:["Stytch Configuration for Embedded Wallet",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stytch-configuration-for-embedded-wallet",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:["In order to have Stytch auth integrated into your Embedded Wallet instance, you have to configure a Stytch application in the ",e.jsx(t.a,{href:"https://stytch.com/dashboard",children:"Stytch Dashboard"})," and configure an Embedded Wallet in ",e.jsx(t.a,{href:"https://sequence.build/",children:"Sequence Builder"}),". Begin, by starting with the following below steps:"]}),`
`,e.jsx(d,{type:"warning",children:e.jsxs(t.p,{children:["The Stytch authentication is currently in early access. To enable them, please visit ",e.jsx(t.a,{href:"https://sequence.build/earlyaccess",children:"https://sequence.build/earlyaccess"})," and turn on the functionality."]})}),`
`,e.jsxs(t.div,{"data-vocs-steps":"true",children:[e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"sign-up--sign-in",children:["Sign Up / Sign In",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-up--sign-in",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["First access the ",e.jsx(t.a,{href:"https://stytch.com/dashboard",children:"sign in page"}),":"]})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"create-a-project",children:["Create a Project",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-project",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["From the dropdown of projects once signed in, select ",e.jsx(t.code,{children:"Create new project"}),":"]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_create_new_project.png",alt:"Create a Project"})}),e.jsxs(t.p,{children:["Then select ",e.jsx(t.code,{children:"CONSUMER AUTHENTICATION"}),":"]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_create_project.png",alt:"Create new Project"})}),e.jsxs(t.p,{children:["And finally select ",e.jsx(t.code,{children:"Create project"})]})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"obtain-a-stytch-project-id--stytch-public-token",children:["Obtain a Stytch Project ID & Stytch Public Token",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#obtain-a-stytch-project-id--stytch-public-token",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["From the bottom of the first screen of ",e.jsx(t.code,{children:"Home"})," copy and save somewhere safe the ",e.jsx(t.code,{children:"Stytch Project ID"})," & ",e.jsx(t.code,{children:"Stych Public Token"}),":"]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_obtain_keys.png",alt:"Obtain a Project ID & Stytch Public Token"})})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"update-the-redirect-url",children:["Update the Redirect URL",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-redirect-url",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["For local development use ",e.jsx(t.code,{children:"http://localhost:4444/authenticate"})]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_create_new_redirect_uri.png",alt:"Update Redirect Url"})}),e.jsxs(t.p,{children:["Enable ",e.jsx(t.code,{children:"Login"})," and ",e.jsx(t.code,{children:"Register"}),", select ",e.jsx(t.code,{children:"Set as default"})," and select ",e.jsx(t.code,{children:"Confirm"}),":"]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_create_new_redirect_uri_confirm.png",alt:"Obtain a Project ID"})})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"update-the-allowed-origins-for-sdk",children:["Update the Allowed Origins for SDK",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-allowed-origins-for-sdk",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["For local development, ensure that your development URL is passed correclt such as ",e.jsx(t.code,{children:"http://localhost:4444"})]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/stytch_add_url_to_sdk.png",alt:"Update url for SDK"})})]}),e.jsxs(t.div,{"data-depth":"2",children:[e.jsxs(t.h2,{id:"builder-configuration",children:["Builder Configuration",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#builder-configuration",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Next, enable Stytch authentication in the Sequence Builder by accessing your Project, the Embedded Wallet Configuration section, then adding a Login Provider:"}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_stytch_add_provider.png",alt:"add login provider"})}),e.jsxs(t.p,{children:["Finally, selecting ",e.jsx(t.code,{children:"Stytch"})," in the dropdown."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_stytch_select_provider.png",alt:"select stytch"})}),e.jsxs(t.p,{children:["Then inputting your ",e.jsx(t.code,{children:"Stytch Project ID"}),", selecting ",e.jsx(t.code,{children:"Save changes"})," and selecting the purple ",e.jsx(t.code,{children:"Update configuration"})," to input your password to update the Configuration."]})]})]})]})}function o(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{o as default,a as frontmatter};
