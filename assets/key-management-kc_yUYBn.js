import{d as i,j as e}from"./index-BkD49clb.js";const r={title:"Enhancing Security with Multisignature Key Management in Sequence Wallets",description:"Sequence Wallet offers enhanced security through key management. Users can create wallets with multiple private keys, making it a multisignature wallet."};function a(s){const t={a:"a",aside:"aside",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"key-management",children:["Key Management",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-management",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Each Sequence wallet can be controlled by multiple private keys, acting like a multisignature wallet. Users can either create a Sequence wallet using one of the supported social login options or create a wallet with a private key stored only on that device."}),`
`,e.jsx(t.p,{children:"The improved security compared to traditional blockchain wallet comes from the fact that multiple independent keys need to be compromised for a malicious actor to take control of a user’s wallet, instead of a single key. The philosophy is that the more independent private-keys the user adds to their wallet, the more secure their wallet becomes, even if each individual key is only moderately secure on their own."}),`
`,e.jsxs(t.h2,{id:"social-login-wallets",children:["Social Login Wallets",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-login-wallets",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:`Sequence Wallet created with social logins are currently secured using three private keys: Session keys, a Guard key and a Torus key. The Session key and Torus key are both generated for the first time when a user creates their Sequence Wallet via social login or email authentication.
At least two of the three keys are needed to unlock an account. This means that if one of the three keys is lost or compromised, a user can use the two remaining keys to replace the lost/compromised key. For example, if a user lost their device containing their Session Key, they can unlock their Sequence Wallet account by email or social login for the Torus key combined with the Guard key. Once done, another session key is auto-generated and the user is back in their account with all 3 keys accessible again.`}),`
`,e.jsxs(t.h3,{id:"session-keys",children:["Session Keys",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-keys",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Session keys are stored in the browser's ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",children:"IndexedDB"}),`.
Users should be prudent in safeguarding their devices from unauthorized access since an attacker with access to their IndexedDB effectively has control of their session key.`]}),`
`,e.jsxs(t.h3,{id:"guard-key",children:["Guard Key",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guard-key",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"A Guard key is a key owned by Horizon. This key allows Horizon to help users that lost their Session key and can require additional information from the user in case of suspicious activity, if the user wants this additional protection. This key would be compromised if a malicious actor took control over Horizon servers hosting the Guard key."}),`
`,e.jsxs(t.h3,{id:"torus-key",children:["Torus Key",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#torus-key",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["A Torus key is a key generated by the ",e.jsx(t.a,{href:"https://tor.us/",children:"Torus network"}),", and is generated using a user’s email or social login credentials such as Google or AppleID. Torus uses threshold cryptography to ensure that only the user can access their private key, making these keys non-custodial. A Torus key would be compromised if a malicious actor had control over the social account or email a user used to generate their Torus key. All Torus keys could be compromised if the Torus network itself was compromised."]}),`
`,e.jsxs(t.aside,{"data-callout":"info",children:[e.jsx(t.strong,{"data-callout-title":!0,children:"DEFAULTS + CUSTOMIZATION"}),e.jsx(t.p,{children:"While this is the default setup for new Sequence Wallets, we intend to add the ability for users to add, remove and replace the keys controlling their wallet such that users can choose their preference in terms of security and user experience tradeoff. Even the Guard key will be able to be removed. Security tips and recommendations will be added to ensure users are well informed of the risks and how to protect themselves against them."})]})]})}function o(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{o as default,r as frontmatter};
