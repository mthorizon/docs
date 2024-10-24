import{d as t,j as e}from"./index-DxUkgJ2c.js";const d={title:"Session management",description:"undefined"};function i(n){const s={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"session-management",children:["Session management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-management",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Once you've authenticated your user with the Sequence APIs and established a session, there are a number of methods available to you to manage the session."}),`
`,e.jsxs(s.h2,{id:"list-sessions",children:["List Sessions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list-sessions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"ListSessions"})," method to find all active sessions associated with this user/wallet."]}),`
`,e.jsxs(s.h2,{id:"drop-session",children:["Drop Session",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#drop-session",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If you wish to drop/end a session, you can use the ",e.jsx(s.code,{children:"DropSession"})," method and provide the session id you wish to drop."]}),`
`,e.jsxs(s.h2,{id:"drop-this-session",children:["Drop This Session",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#drop-this-session",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"DropThisSession"})," method can be use if you wish to drop/end the current session. In other words, if you wish to log the user out."]}),`
`,e.jsx(s.aside,{"data-callout":"note",children:e.jsxs(s.p,{children:["If you are using the default ",e.jsx(s.code,{children:"LoginPanel"})," and you have not enabled ",e.jsx(s.code,{children:"StoreSessionPrivateKeyInSecureStorage"})," or are on an unsupported platform (see ",e.jsx(s.a,{href:"/sdk/unity/recovering-sessions",children:"Recovering Sessions"}),"), the ",e.jsx(s.code,{children:"WaaSSessionManager"})," prefab attached to the ",e.jsx(s.code,{children:"LoginPanel"})," will automatically call this method ",e.jsx(s.code,{children:"OnApplicationQuit"})]})}),`
`,e.jsxs(s.h2,{id:"get-account-list",children:["Get Account List",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-account-list",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If you wish to fetch the ",e.jsx(s.code,{children:"Account"}),"s associated with the user's wallet, you can use the ",e.jsx(s.code,{children:"GetAccountList"})," method."]}),`
`,e.jsxs(s.h2,{id:"get-id-token",children:["Get Id Token",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-id-token",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If you wish to retrieve an id token JWT from the Sequence APIs to validate the authentication on your backend, you can use the ",e.jsx(s.code,{children:"GetIdToken"})," method and optionally provide a nonce."]})]})}function a(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,d as frontmatter};
