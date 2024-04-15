import{d as i,j as e}from"./index-vz5A3ed5.js";const r={title:"Overview",description:"undefined"};function n(a){const t={a:"a",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"overview",children:["Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.h2,{id:"embedded-wallets-architecture",children:["Embedded Wallets Architecture",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-wallets-architecture",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Embedded Wallets are native smart contract multisigs, the configuration of the multisig can be seen as a 2/2, both of which are required to sign in order to operate them; each one of the signers protects the wallet from a different facet of possible threats."}),`
`,e.jsxs(t.h2,{id:"signer-1-sequence-auth",children:["Signer 1: Sequence Auth",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-1-sequence-auth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Auth provides a simple way to add account creation, login, session management, and wallet support to your app, enabling applications to provide traditional web experiences (e.g. social login, email login, etc.) while providing access to crypto wallets to interact with smart contracts."}),`
`,e.jsxs(t.p,{children:["All user and session data is encrypted by a Hardware Security Module operated by a third party. This makes it protected from both external attackers and internal access by Sequence Team or anyone else. ",e.jsx(t.strong,{children:"Nobody"})," can access a user's wallet but the user themselves."]}),`
`,e.jsxs(t.p,{children:["You won't need to trust us, this is a guarantee you can verify yourself: this service is hosted in a cryptographically attested secure enclave on Amazon Nitro platform. And we offer ",e.jsx(t.a,{href:"https://github.com/0xsequence/waas-authenticator",children:"publicly available independently audited source code"}),", so you can rest assured that it hasn't been tampered with."]}),`
`,e.jsxs(t.h2,{id:"signer-2-sequence-guard",children:["Signer 2: Sequence Guard",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-2-sequence-guard",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence Guard is a service hosted by Sequence and contains the other key of the wallets. It's meant to be another line of defense, verifying not only user's ",e.jsx(t.em,{children:"identity"})," but also their ",e.jsx(t.em,{children:"intent"}),". It achieves this in two different ways:"]}),`
`,e.jsx(t.p,{children:"1 - Limits and allowlists: you can (from the development dashboard) configure what kind of actions are allowed, this means that the guard will only sign transactions within these constraints. For example, you can define that only NFT contract X can be called, and the guard will enforce that no other transactions can take place."}),`
`,e.jsxs(t.p,{children:["2 - Authenticating the user: the Sequence Guard will authenticate the user ",e.jsx(t.strong,{children:"independently of the Sequence Auth"}),", it performs this action either by using a 3rd party OAuth 2.0 id token (from Meta, Google, X, etc.) or by directly communicating with the user via email/phone number with an OTP code. The direct communication is not always required and, when it does happen, it's seamless and branded with your project details."]}),`
`,e.jsxs(t.h2,{id:"threat-model",children:["Threat model",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#threat-model",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["With these safeguards in place wallets are ",e.jsx(t.strong,{children:"safe"})," against the following scenarios:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence.app backend is compromised, or guard keys are leaked: in this scenario, the user's identity must still be verified by Sequence Auth."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence Auth is compromised: in this scenario the Sequence Guard protects the wallets, because it independently authenticates the user, an attacker in this scenario wouldn't be able to access any wallets."}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"The model also provides partial protection against the scenario:"}),`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Partner frontend is compromised, or MITM on the partner side: If an attacker were to be able to vulnerate the frontend of the partner, it could gain access to wallets at the time of login, but it cannot gain access to wallets of users who are currently inactive. This means that recovery from such a scenario is possible, with limited damage."}),`
`]}),`
`,e.jsxs(t.h2,{id:"waas-api-service",children:["WaaS API Service",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waas-api-service",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence WaaS (Wallet as a Service) is an API service that runs on the ",e.jsx(t.a,{href:"https://aws.amazon.com/ec2/nitro/nitro-enclaves/",children:"AWS Nitro Enclaves"})," platform and allows for secure wallet management. It is the technology that powers the ",e.jsx(t.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"Embedded Wallet"}),"."]}),`
`,e.jsx(t.p,{children:"Wallet private keys are stored encrypted using a split responsibility strategy between Sequence and a trusted third party:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Sequence is able to access only the encrypted blobs stored in the database with no means of decryption."}),`
`,e.jsxs(t.li,{children:["A Trusted Third Party owns and operates the ",e.jsx(t.a,{href:"https://aws.amazon.com/kms/",children:"KMS"})," (AWS' hardware security module) used to encrypt the wallet key data. They have no way to export the key material and no access to the encrypted data itself."]}),`
`]}),`
`,e.jsx(t.p,{children:"The WaaS Enclave is the only entity able to use the encrypted wallet data. Its security is guaranteed by:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The AWS Nitro hypervisor generates and signs a cryptographic attestation based on the actually running enclave code. The document includes a PCR0 (a hash of the enclave code) signed by the Amazon Public Key Infrastructure."}),`
`,e.jsx(t.li,{children:"The KMS operated by the Trusted Third Party specifies a policy that only allows access to the cryptographic operations if the attestation is valid and the PCR0 hash of the enclave matches the expected value. This means that any - even the smallest - change to the enclave will result in a different attestation and PCR0 hash, effectively invalidating it."}),`
`,e.jsxs(t.li,{children:["The enclave code is open source and anyone may audit it and verify that the service uses the exact audited version of the source code. ",e.jsx(t.a,{href:"/solutions/wallets/embedded-wallet/implementation-details/enclave-verification",children:"Learn more about verification"}),"."]}),`
`]})]})}function o(a={}){const{wrapper:t}={...i(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(n,{...a})}):n(a)}export{o as default,r as frontmatter};
