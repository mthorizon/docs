import{d as c,j as t}from"./index-CAXmP0wn.js";const o={title:"Trust Contract Recovery and Monitoring - Architecture and Disaster Recovery Flow",description:"The Trust Contract Recovery Flow document details the architecture of Trust contracts, which safeguard Sequence WaaS accounts."};function r(n){const e={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.header,{children:t.jsxs(e.h1,{id:"trust-contract-recovery-flow",children:["Trust Contract Recovery Flow",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trust-contract-recovery-flow",children:t.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,t.jsx(e.p,{children:"Trust, a disaster recovery contract, protects Sequence WaaS accounts. This document explains the Trust contract's function and the recovery flow during a disaster."}),`
`,t.jsxs(e.h2,{id:"trust-contract-architecture",children:["Trust Contract Architecture",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trust-contract-architecture",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"Trust, a time lock contract, has two instances for each WaaS tenant project. One instance lies with the project's recovery wallet, the other with the Sequence recovery wallet. Trust contracts start in a locked state, denying access to WaaS accounts under the tenant configuration."}),`
`,t.jsx(e.p,{children:"A controlling party can unlock a Trust contract by calling the setUnlocksAt method on the other party's Trust contract instance. This action turns the Trust contract instance into a countdown state, starting a 90-day countdown that is publicly visible."}),`
`,t.jsx(e.p,{children:"After the countdown, the party that called setUnlocksAt can control the other's Trust instance. With control over both instances, they can access all accounts created with the WaaS tenant configuration."}),`
`,t.jsxs(e.h2,{id:"unlock-state-monitoring",children:["Unlock State Monitoring",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unlock-state-monitoring",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"Sequence monitors the unlock state of all Trust contract instances. This service operates under the existing Sequence WaaS deployed on AWS Nitro Secure Enclave instances. The monitoring system checks every Trust contract instance and alerts both the Sequence team and the project owner when an unlock state is detected on a contract. This prevents one party from calling setUnlocksAt on the other's contract without their knowledge."}),`
`,t.jsxs(e.h2,{id:"disaster-recovery-flow",children:["Disaster Recovery Flow",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#disaster-recovery-flow",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"Trust contracts recover accounts if a party vanishes and access to the WaaS configuration accounts is lost. In this case, the counterparty can start the recovery flow by calling the setUnlocksAt method on the other's Trust contract instance. This triggers unlock notifications for both parties until the countdown ends. After the 90-day countdown, it's possible to recover the created accounts and the tokens in the accounts."})]})}function s(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{s as default,o as frontmatter};
