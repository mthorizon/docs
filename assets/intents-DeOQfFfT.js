import{d as i,j as e}from"./index-BGaI9G2q.js";const r={title:"Intents",description:"undefined"};function a(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intents",children:["Intents",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intents",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:'All user interactions with their account, sessions and wallet are performed through actions called "intents." This page provides details on how they work internally. While it will further your understanding of the entire system as a whole, it is not required as the official SDKs handle all the complexity transparently.'}),`
`,e.jsxs(n.h2,{id:"what-are-they",children:["What are they?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-they",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"At a high level an intent is simply a JSON object specifying the action the user intents to perform and signed using their session key. For example, to sign a message, the client would send the following intent to the WaaS API:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "version": "0.0.0",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "issuedAt": 1712775116,'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "expiresAt": 1712775416,'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "name": "signMessage",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "data": {'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'      "wallet": "0x7B7D7BA79542584f9AeF539F6696c070a4e1Ced6",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'      "network": "1",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'      "message": "0x48656c6c6f2c20686176652061206e69636520646179"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    },"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    "signatures": ['})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"      {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        "sessionId": "0x01047de46debeeb83e1270b80ae65996ea64ad2c033e330cfffe9b725bf078423140124dce0cfe0cab9a61b385ca74fe77cd5e8a7147bfd87052f334cfbadc45c79a",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        "signature": "0x28ec6ddcdbc0987a99dde19792ff0c9be69ad2be873fb9351353171b74d2df3380f0ffcae2b8cb37a0659e374859420500b4399a2aab0209ee7919aaea575ac7"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"      }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    ]"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsx(n.p,{children:"Let's take a closer look at the intent anatomy, starting from the bottom."}),`
`,e.jsxs(n.h2,{id:"signatures",children:["Signatures",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signatures",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Normally a single signature is specified, representing the user's session. A session here is nothing more but a locally created assymmetric key pair where the public key becomes part of the ",e.jsx(n.code,{children:"sessionId"})," while the private key never leaves the device. As it gives anyone access to the user's wallet, it must be stored securely, in a secure on-device enclave whenever possible. The session must be registered with the WaaS API before use."]}),`
`,e.jsxs(n.p,{children:["The signature is an EIP-191 of the canonical representation of the intent (keys ordered alphabetically, without whitespace) JSON without the ",e.jsx(n.code,{children:"signatures"})," field."]}),`
`,e.jsxs(n.h2,{id:"name-and-data",children:["Name and data",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name-and-data",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"These depend on the intent in question and will be different for each intent. The type of the intent and thus the data it contains is specified by the name."}),`
`,e.jsxs(n.h2,{id:"timestamps",children:["Timestamps",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#timestamps",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"These are unix timestamps of when the intent becomes and stops being valid. They are validated by the API to ensure old intents cannot be reused again in the future."})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{d as default,r as frontmatter};
