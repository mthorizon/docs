import{d as l,j as s}from"./index-BkD49clb.js";/* empty css                                */const d={title:"Seamless Session Management with Auth + Embedded Wallet",description:"The Session Management feature in Auth + Embedded Wallet simplifies account management, authentication, and session control for your application."};function n(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.header,{children:s.jsxs(i.h1,{id:"session-management",children:["Session Management",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-management",children:s.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(i.p,{children:"A valid session is opened during the Authentication process."}),`
`,s.jsx(i.p,{children:"Sequence Auth and Embedded Wallet handles the following aspects of your application:"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.a,{href:"/solutions/wallets/embedded-wallet/examples/manage-sessions#validation-status",children:"Check Valid Session"}),": Manage blockchain accounts to sign up or sign in users."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.a,{href:"/solutions/wallets/embedded-wallet/examples/manage-sessions#control-session-validation",children:"Control Session Validation"}),": Authentication sessions to return important details to be consumed by your application to enhance the experience of games and applications."]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.a,{href:"/solutions/wallets/embedded-wallet/examples/manage-sessions#close-session",children:"Close Session"}),": Manage the listing and dropping of sessions handled by the WaaS stack."]}),`
`]}),`
`,s.jsxs(i.h2,{id:"validation-status",children:["Validation status",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validation-status",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["To check the validation status of the current session, use the ",s.jsx(i.code,{children:"isSessionValid"})," method. This returns ",s.jsx(i.code,{children:"true"})," for email login and trusted social logins and ",s.jsx(i.code,{children:"false"})," for custom logins until email validation is complete."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isValid"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isSessionValid"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(isValid);"})]})]})}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"true"})})})}),`
`,s.jsxs(i.h3,{id:"trigger-session-validation",children:["Trigger session validation",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trigger-session-validation",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["Manually trigger a session validation with the ",s.jsx(i.code,{children:"validateSession"})," method. This will send a code to the user's email. If validated within 10 minutes, the method returns ",s.jsx(i.code,{children:"true"}),"; otherwise, it returns ",s.jsx(i.code,{children:"false"}),"."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" result"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"validateSession"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"true"})})})}),`
`,s.jsxs(i.p,{children:["Once user receives the code, he can validate the session with the ",s.jsx(i.code,{children:"finishValidateSession"})," method that takes the code as an argument. If the code is valid, the method returns ",s.jsx(i.code,{children:"true"}),"; otherwise, it returns ",s.jsx(i.code,{children:"false"}),"."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" result"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"finishValidateSession"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"123456"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"true"})})})}),`
`,s.jsxs(i.h3,{id:"control-session-validation",children:[s.jsx(i.strong,{children:"Control Session Validation"}),s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#control-session-validation",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["The ",s.jsx(i.strong,{children:s.jsx(i.code,{children:"onValidationRequired"})})," callback is used to determine the need for session validation during actions like sending transactions or signing messages. If the callback returns ",s.jsx(i.strong,{children:s.jsx(i.code,{children:"true"})}),", it triggers session validation. If it returns ",s.jsx(i.strong,{children:s.jsx(i.code,{children:"false"})}),", the related action is cancelled. This mechanism ensures that only validated sessions can proceed with sensitive operations."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendERC20"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  validation: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    onValidationRequired"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": () "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chainId: "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"42161"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  token: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x6b175474e89094c44da98b954eedeac495271d0f"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// DAI"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x27CabC9700EE6Db2797b6AC1e1eCe81C72A2cD8D"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Recipient"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  value: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"200000000000000000000"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 200 DAI"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsxs(i.h3,{id:"listen-for-session-validations",children:["Listen for session validations",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#listen-for-session-validations",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["Events like transaction sends may silently prompt session validation. Use the ",s.jsx(i.code,{children:"onValidationRequired"})," hook to catch such instances."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"onValidationRequired"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(() "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Session has been triggered for validation"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ chainId: "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }, { to: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x..."'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", value: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" });"})]})]})}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Session has been triggered for validation"})})})}),`
`,s.jsxs(i.h2,{id:"manage-automatic-session-validation",children:["Manage Automatic session validation",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manage-automatic-session-validation",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"Automatic session validation occurs during actions that require validation. Manage this process using the onValidationRequired hook."}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chainId: "}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  validation: {"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    onValidationRequired"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": () "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      console."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Session has been triggered for validation"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"      return"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  to: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x061150e5574716DBb1a2cdf54b3DcE9F94395f65"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  value: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsxs(i.p,{children:["By returning ",s.jsx(i.code,{children:"true"})," or ",s.jsx(i.code,{children:"false"})," from the ",s.jsx(i.code,{children:"onValidationRequired"})," hook, you either continue or cancel the action, respectively."]}),`
`,s.jsxs(i.h2,{id:"close-session",children:["Close Session",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#close-session",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["A session can be closed using the ",s.jsx(i.code,{children:"id"})," of the session. Any session can be closed from any device with an active session."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { SequenceWaaS } "}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/waas'"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sequence"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SequenceWaaS"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  projectAccessKey: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`${"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"process"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"env"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"VITE_PROJECT_ACCESS_KEY"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  waasConfigKey: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`${"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"process"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"env"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"VITE_WAAS_CONFIG_KEY"}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  network: "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'arbitrum-nova'"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"signIn"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ idToken }, "}),s.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"MacBook Pro - Chrome"'}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sessions"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"listSessions"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"dropSession"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ sessionId: sessions["}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"].id })"})]})]})})]})}function o(e={}){const{wrapper:i}={...l(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{o as default,d as frontmatter};
