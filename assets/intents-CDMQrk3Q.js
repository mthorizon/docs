import{d as i,j as e}from"./index-Dyqk1oI2.js";const r={title:"Understanding Intents - A Guide to Interacting with Your Account, Sessions, and Wallet",description:"Learn about how intents are specific actions used to interact with your account, sessions, and wallet. They are essentially JSON objects signed with your session key, representing actions like signing a message."};function a(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"intents",children:["Intents",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intents",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:`"Intents" are actions that you can use to interact with your account, sessions, and wallet. This document breaks down how they work internally. Don't worry about the complexities - SDKs take care of all that.`}),`
`,e.jsx(s.p,{children:"Think of an intent as a JSON object. It represents the action you want to take and is signed with your session key. For instance, if you want to sign a message, you would send an intent to the WaaS API."}),`
`,e.jsxs(s.h2,{id:"what-are-they",children:["What are they?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-they",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"At a high level an intent is simply a JSON object specifying the action the user intents to perform and signed using their session key. For example, to sign a message, the client would send the following intent to the WaaS API:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "version": "0.0.0",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "issuedAt": 1712775116,'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "expiresAt": 1712775416,'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "name": "signMessage",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "data": {'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'      "wallet": "0x7B7D7BA79542584f9AeF539F6696c070a4e1Ced6",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'      "network": "1",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'      "message": "0x48656c6c6f2c20686176652061206e69636520646179"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "signatures": ['})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'        "sessionId": "0x01047de46debeeb83e1270b80ae65996ea64ad2c033e330cfffe9b725bf078423140124dce0cfe0cab9a61b385ca74fe77cd5e8a7147bfd87052f334cfbadc45c79a",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'        "signature": "0x28ec6ddcdbc0987a99dde19792ff0c9be69ad2be873fb9351353171b74d2df3380f0ffcae2b8cb37a0659e374859420500b4399a2aab0209ee7919aaea575ac7"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsx(s.p,{children:"Let's break down the structure of an intent."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Signatures:"})," Usually, a single signature represents your session. A session is a key pair created locally; the public key is part of the ",e.jsx(s.code,{children:"sessionId"})," and the private key stays on your device. Make sure to store your session key, which provides access to your wallet, securely, ideally in a secure on-device enclave. Before you can use the session, you need to register it with the WaaS API."]}),`
`,e.jsxs(s.li,{children:["The signature is an EIP-191 of the intent's canonical representation. This means it’s a JSON of alphabetically ordered keys, with no whitespace, excluding the ",e.jsx(s.code,{children:"signatures"})," field."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name and Data:"})," The name and data will change with each intent. The name identifies the type of intent and the data associated with it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Timestamps:"})," The API checks the unix timestamps to determine the validity period of the intent and to prevent old intents from being reused in the future."]}),`
`]})]})}function l(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{l as default,r as frontmatter};
