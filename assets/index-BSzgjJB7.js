import{d as r,j as e}from"./index-BhgFvvky.js";const l={title:"Configuring Sequence Embedded Wallet in Builder",description:"Configure a Sequence Embedded Wallet in Builder to easily onboard users to your games by integrating OAuth accounts. Learn how to set up login providers like Google Auth and Apple Auth, specify allowed origins for security, set up a recovery wallet, create an initial configuration."};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"embedded-wallet-configuration",children:["Embedded Wallet Configuration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-wallet-configuration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["You can configure a ",e.jsx(n.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"Sequence Embedded Wallet"})," in Builder and integrate your own OAuth accounts to enable easy onboarding to your games. Configuration page in Builder ",e.jsx(n.a,{href:"https://sequence.build/project/default/embedded-wallet",children:"is available here"}),"."]}),`
`,e.jsx(n.p,{children:"The following sections will explain the various ways to configure using an Embedded Wallet in Builder:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#login-providers",children:"Login Providers"}),": Web2 based authentication providers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#allowed-origins",children:"Allowed Origins"}),": Specify allowed URL origins to call your Embedded Wallet instance from to prevent configuration key misuse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#recovery-wallet",children:"Recovery Wallet"}),": In the event of a wallet ownership turnover for a compromised wallet, specify a recovery wallet to obtain ownership of embedded wallet instance post Trust recovery process"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#initial-configuration-password",children:"Initial Configuration Password"}),": Create a password to secure your Embedded Wallet project instance in Builder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#configuration-changes",children:"Configuration Changes"}),": Update configuration details at anypoint with password protection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#parent-wallet",children:"Parent Wallet"}),": A 2/2 signer delegation of non-custodial security"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#sdk-integrations",children:"SDK Integrations"}),": Sequence SDK products that allow developers to implement an Embedded Wallet across platforms"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"login-providers",children:["Login Providers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#login-providers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Sequence Embedded Wallet supports the following login providers:"}),`
`,e.jsxs(n.h3,{id:"google-auth",children:["Google Auth",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#google-auth",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If you would like to support Google Auth, you need to make sure that a project is configured at your ",e.jsx(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"})," along with the proper OAuth 2.0 client ID. You can follow ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet/google-configuration",children:"our guide"})," on how to set it up. After configuring the proper origins and redirect URIs for your project, copy the Client ID and paste it into the Google Client ID field after adding a Google login provider."]}),`
`,e.jsxs(n.h3,{id:"apple-auth",children:["Apple Auth",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apple-auth",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If you would like to offer Apple Auth, you need to make sure that an application is configured at your ",e.jsx(n.a,{href:"https://developer.apple.com/account",children:"Apple Developer Console"})," account. More information on how to configure Sign in with Apple ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet/apple-configuration",children:"can be found here"}),". Once you have all requirements completed, share the unique identifier for the Services ID you created as part of your onboarding package after adding an Apple login provider."]}),`
`,e.jsxs(n.h2,{id:"allowed-origins",children:["Allowed Origins",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#allowed-origins",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This additional security measure will prevent unauthorized usage of your WaaS configuration outside of domains you whitelisted. Add any development and production URLs under Allowed Origins. By default all subpaths under theses hosts will be allowed."}),`
`,e.jsxs(n.p,{children:["You must define allowed origins with a valid scheme (i.e. ",e.jsx(n.code,{children:"https"}),")."]}),`
`,e.jsxs(n.h2,{id:"recovery-wallet",children:["Recovery Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#recovery-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"WaaS requires the public address for a recovery wallet that you control. This recovery wallet will be used for recovering user wallets in a disaster scenario where a wallet has been compromised, so it must be controlled by you and must be kept safe at all times."}),`
`,e.jsx(n.p,{children:"We recommend that:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You use ",e.jsx(n.a,{href:"https://safe.global/",children:"Gnosis Safe"})," for setting up the wallet"]}),`
`,e.jsx(n.li,{children:"You ensure you have at least 2, ideally 3+ signers configured and required for every transaction"}),`
`,e.jsx(n.li,{children:"Every signer is protected by a hardware wallet"}),`
`]}),`
`,e.jsx(n.p,{children:"Once the recovery wallet is setup properly, provide the public address for it. Recovery wallet cannot be modified once your configuration is saved."}),`
`,e.jsxs(n.h2,{id:"initial-configuration-password",children:["Initial Configuration Password",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initial-configuration-password",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Once you have all information prepared, go ahead and create your Embedded Wallet configuration. During initial setup, Builder will prompt you to assign a password to the Embedded Wallet. This password will be required for all subsequent modifications to your Embedded Wallet configuration, so it must be stored safely."}),`
`,e.jsxs(n.h2,{id:"configuration-changes",children:["Configuration Changes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-changes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:'To make modifications to your Embedded Wallet configuration, navigate to the Embedded Wallet section again and make the necessary changes. Then click "Save Configuration" and enter your recovery wallet password to deploy the changes.'}),`
`,e.jsxs(n.h2,{id:"parent-wallet",children:["Parent Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parent-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Every embedded wallet parent wallet is a 2/2 signer where the two signers are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Guard - fully controlled by Sequence"}),`
`,e.jsx(n.li,{children:"Authenticator - jointly controlled by Sequence and Quantstamp"}),`
`]}),`
`,e.jsx(n.p,{children:"And, every child wallet is a 1/1 signer where the signer is the parent wallet of the specific project. So inherently, the custodial security of the 1/1 child wallet inherits the security of the 2/2 parent wallet, as no transactions or signatures can be created without both keys from the parent wallet."}),`
`,e.jsxs(n.h3,{id:"why-deploying-a-parent-wallet-will-future-proof-integrations",children:["Why deploying a Parent Wallet will future proof integrations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-deploying-a-parent-wallet-will-future-proof-integrations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Parent Wallet for an Embedded Wallet configuration must be deployed on-chain to prevent issues with message signing and increased gas cost during transactions. These Parent Wallets can be deployed from ",e.jsx(n.a,{href:"https://sequence.build",children:"Sequence Builder"})," when accessing your Embedded Wallet configuration."]}),`
`,e.jsx(n.p,{children:"The possible states that an Embedded Wallet can be in and their behaviour:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Scenario"}),e.jsx(n.th,{children:"Prerequisite"}),e.jsxs(n.th,{children:[e.jsx(n.code,{children:"signMessage"})," Behaviour"]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"None deployed"}),e.jsx(n.td,{children:"Default state"}),e.jsx(n.td,{children:"signMessage returns an invalid signature"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Only parent deployed"}),e.jsx(n.td,{children:"Manually deployed from Builder OR upon first ever transaction from any wallet"}),e.jsx(n.td,{children:"signMessage returns a valid 6492 signature (very low verification support; use Sequence to validate)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Both parent and child deployed"}),e.jsx(n.td,{children:"Upon first ever transaction from that specific wallet"}),e.jsx(n.td,{children:"signMessage returns a valid 1271 signature (moderate verification support; still recommended to use Sequence to validate)"})]})]})]}),`
`,e.jsxs(n.h2,{id:"sdk-integrations",children:["SDK Integrations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sdk-integrations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Now that you have your Embedded Wallet configuration up, go ahead and follow our guides on how to integrate with the SDKs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"TypeScript SDK"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/sdk/unity/overview",children:"Unity SDK"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/sdk/unreal/overview",children:"Unreal SDK"})}),`
`]})]})}function o(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default,l as frontmatter};
